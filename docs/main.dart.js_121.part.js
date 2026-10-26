((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,U,A2,Ad,Ae,A3,Af,Ag,C={
t3(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fBP(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
HY(d){var w
if(d===0)return $.BG()
if(d===1)return $.a0q()
if(d===2)return $.h4X()
if(Math.abs(d)<4294967296)return C.b5W(A.o.M(d))
w=C.hpq(d)
return w},
b5W(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t3(4,w)
return new C.nq(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t3(1,w)
return new C.nq(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.ar(d,16)
v=C.t3(2,w)
return new C.nq(v===0?!1:s,w,v)}v=A.o.ak(A.o.gagU(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t3(v,w)
return new C.nq(v===0?!1:s,w,v)},
hpq(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.O(B.dD("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BG()
w=$.h4W()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kQ(A.aD.gaK(w))
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
if(s<0)p=q.lU(0,-s)
else p=s>0?q.dN(0,s):q
return p},
fBQ(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fTa(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.J(f,16),p=16-q,o=A.o.dN(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fm(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dN(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fT5(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.J(f,16)===0)return C.fBQ(d,e,s,g)
w=e+s+1
C.fTa(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hpt(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.J(f,16),q=16-r,p=A.o.dN(1,r)-1,o=A.o.fm(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dN(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fm(u,r)}w&2&&B.ah(g)
g[n]=o},
cxW(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hpr(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b5X(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}},
fTb(d,e,f,g,h,i){var w,v,u,t,s,r
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
hps(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nq:function nq(d,e,f){this.a=d
this.b=e
this.c=f},
cxX:function cxX(){},
cxY:function cxY(){},
cxZ:function cxZ(d,e){this.a=d
this.b=e},
cy_:function cy_(d){this.a=d},
aNM:function aNM(d,e){this.a=d
this.b=e},
fJm(d,e,f){var w=new C.PR(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
PR:function PR(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1B:function a1B(d,e){this.a=d
this.b=e},
bCE:function bCE(d){this.a=d
this.c=this.b=0},
h89(){return new C.bBo()},
bBo:function bBo(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cq4:function cq4(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hp8(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gcMf(d)))
v=f*2+2
u=C.fQQ(C.fQS(),64)
t=new C.caP(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.caQ(e,1000,v)
s=new Uint8Array(v)
return A.aD.dA(s,0,t.cAc(w,0,s,0))},
cq2:function cq2(d,e){this.c=d
this.d=e},
au2:function au2(d,e){this.a=d
this.b=e},
cq5:function cq5(d,e,f,g){var _=this
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
b4G:function b4G(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cq3:function cq3(){this.a=$},
fSB(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
h7T(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bzZ:function bzZ(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fH8(d,e){e&=31
return(d&$.pB[e])<<e>>>0},
mX(d,e){e&=31
return(d>>>e|C.fH8(d,32-e))>>>0},
fQR(d){var w,v=new C.apO()
if(B.iw(d))v.aFI(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fQS(){var w=C.fQR(0),v=new Uint8Array(4),u=x.r
u=new C.caR(w,v,A.Cj,5,B.bT(5,0,!1,u),B.bT(80,0,!1,u))
u.l2(0)
return u},
fQQ(d,e){var w=new C.caN(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
caM:function caM(){},
caQ:function caQ(d,e,f){this.a=d
this.b=e
this.c=f},
caK:function caK(){},
apN:function apN(d){this.a=d},
caP:function caP(d){this.a=$
this.b=d
this.c=$},
caL:function caL(){},
caJ:function caJ(){},
apO:function apO(){this.b=this.a=$},
caO:function caO(){},
caR:function caR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
caN:function caN(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
caI:function caI(){},
caH:function caH(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bIw:function bIw(){},
bIx:function bIx(d){this.a=d},
hsj(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6c:function b6c(){},
ck4:function ck4(){},
bJp:function bJp(d,e){this.a=d
this.b=!1
this.c=e},
bJq:function bJq(){},
hAH(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
asH(d){var w=0,v=B.j(x.H),u
var $async$asH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.elT?2:4
break
case 2:w=5
return B.b(A.jI.fK("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$asH)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jI.fK("SystemChrome.setEnabledSystemUIOverlays",C.hAH(null),u),$async$asH)
case 6:case 3:return B.h(null,v)}})
return B.i($async$asH,v)},
asK:function asK(d,e){this.a=d
this.b=e},
a65:function a65(d){this.a=d},
fxQ(d,e){return new C.aS3(e,d,null)},
aS3:function aS3(d,e,f){this.e=d
this.c=e
this.a=f},
axu:function axu(d,e,f,g,h){var _=this
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
hDc(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.f9l(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
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
f9l:function f9l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
akM(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$akM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.aef("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$akM)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d2(s,x.f)
t=B.cy(t,new C.bTx(),t.$ti.k("E.E"),x.P)
r=B.z(t,B.a2(t).k("E.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bTy())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akM,v)},
akO(d){var w=0,v=B.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j
var $async$akO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akM(),$async$akO)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.Q(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.N(Date.now(),0,!1).a4().aa()
p=m.a
k=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.ny("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.D(["deck",m.ad(),"savedAt",l],t,q),null),$async$akO)
case 7:if(!f){w=5
break}s.m(0,p,B.D(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bf<2>")
s=B.z(new B.bf(s,r),r.k("E.E"))
w=10
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.D(["items",s,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],t,q),null),$async$akO)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akO,v)},
bTz(d){return C.hdw(d)},
hdw(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bTz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aef("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hq),$async$bTz)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.TR(B.Y(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a5(m)
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
return B.i($async$bTz,v)},
akN(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$akN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akM(),$async$akN)
case 3:r=f
if(r==null){u=!1
w=1
break}J.mY(r,new C.bTA(d))
w=4
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.D(["items",r,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),null),$async$akN)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aLQ("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$akN)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akN,v)},
bTx:function bTx(){},
bTy:function bTy(){},
bTA:function bTA(d){this.a=d},
hMM(d,e,f){return B.c1(A.K,new C.fol(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fol:function fol(d,e,f){this.a=d
this.b=e
this.c=f},
ZC:function ZC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFK:function aFK(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
ePW:function ePW(d,e){this.a=d
this.b=e},
eQ_:function eQ_(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ1:function eQ1(d,e,f){this.a=d
this.b=e
this.c=f},
ePX:function ePX(d){this.a=d},
ePY:function ePY(d){this.a=d},
ePZ:function ePZ(d,e){this.a=d
this.b=e},
ePR:function ePR(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
ePV:function ePV(d,e,f){this.a=d
this.b=e
this.c=f},
ePU:function ePU(d,e,f){this.a=d
this.b=e
this.c=f},
eQ2:function eQ2(d,e){this.a=d
this.b=e},
eQ3:function eQ3(d,e){this.a=d
this.b=e},
eQ8:function eQ8(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQ7:function eQ7(d,e){this.a=d
this.b=e},
eQ6:function eQ6(){},
fVx(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d2(w,x.f)
v=B.cy(v,new C.eX6(),v.$ti.k("E.E"),x.ea)
u=B.a2(v).k("a3<E.E>")
v=B.z(new B.a3(v,new C.eX7(),u),u.k("E.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_B(d){return C.hEp(d)},
hEp(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_B=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.Q(x.N,x.ea)
m=new C.fbw(n)
t=4
j=m
i=C
w=7
return B.b(B.a09("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_B)
case 7:j.$1(i.fVx(f))
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
return B.b(B.aw(),$async$a_B)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fVx(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a3<E.E>")
j=B
i=B
h=new B.bf(n,p)
g=C
w=13
return B.b(C.eXf(d),$async$a_B)
case 13:p=j.z(new i.a3(h,new g.fbu(f),o),o.k("E.E"))
A.d.aY(p,new C.fbv())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_B,v)},
aeP(d,e){return C.hMr(d,e)},
hMr(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aeP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.fnT(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.aj(n,null)
q=!1
t=4
w=7
return B.b(B.aeH("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeP)
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
return B.b(B.aw(),$async$aeP)
case 12:p=g
w=13
return B.b(p.an("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeP)
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
return B.i($async$aeP,v)},
eXf(d){return C.htC(d)},
htC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eXf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$eXf)
case 7:r=f
q=r.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kl(q,B.R(q).c)
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
return B.i($async$eXf,v)},
adH(d,e){return C.hD4(d,e)},
hD4(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adH=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$adH)
case 6:s=g
r=B.aY(x.N)
q=s.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fS(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("ck.E"))
w=7
return B.b(s.an("StringList","ngmy_books_deleted_v1_"+r,q),$async$adH)
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
return B.b(C.a_B(d),$async$adH)
case 8:n=g
J.mY(n,new C.f91(e))
w=9
return B.b(C.aeP(d,n),$async$adH)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adH,v)},
hMR(d,e){return B.a7(d,!1).ct(B.eO(new C.foI(e),!0,null,x.H))},
hpv(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e7(w.d,new C.czi())},
nS:function nS(d,e,f){this.a=d
this.b=e
this.c=f},
eX6:function eX6(){},
eX7:function eX7(){},
fbw:function fbw(d){this.a=d},
fbu:function fbu(d){this.a=d},
fbv:function fbv(){},
fnT:function fnT(){},
f91:function f91(d){this.a=d},
foI:function foI(d){this.a=d},
Wp:function Wp(d,e){this.c=d
this.a=e},
auy:function auy(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
czi:function czi(){},
czk:function czk(d,e){this.a=d
this.b=e},
czn:function czn(d){this.a=d},
czo:function czo(d){this.a=d},
czm:function czm(){},
czp:function czp(d,e){this.a=d
this.b=e},
czl:function czl(d){this.a=d},
czq:function czq(){},
czj:function czj(d,e){this.a=d
this.b=e},
czr:function czr(){},
cze:function cze(d){this.a=d},
czc:function czc(d){this.a=d},
czd:function czd(d){this.a=d},
czf:function czf(d,e){this.a=d
this.b=e},
czb:function czb(d){this.a=d},
cza:function cza(d){this.a=d},
cz8:function cz8(d,e){this.a=d
this.b=e},
cz9:function cz9(d){this.a=d},
czh:function czh(){},
czg:function czg(d){this.a=d},
cz7:function cz7(d,e){this.a=d
this.b=e},
cz6:function cz6(d,e){this.a=d
this.b=e},
cz5:function cz5(d,e){this.a=d
this.b=e},
czs:function czs(d){this.a=d},
Wn:function Wn(d,e,f){this.c=d
this.d=e
this.a=f},
aBF:function aBF(d,e,f){this.a=d
this.b=e
this.c=f},
auu:function auu(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cyz:function cyz(d){this.a=d},
cyy:function cyy(d){this.a=d},
cyB:function cyB(d,e,f){this.a=d
this.b=e
this.c=f},
cyJ:function cyJ(){},
cyK:function cyK(d){this.a=d},
cyC:function cyC(d,e,f){this.a=d
this.b=e
this.c=f},
cyA:function cyA(d,e){this.a=d
this.b=e},
cyE:function cyE(d,e){this.a=d
this.b=e},
cyF:function cyF(d,e){this.a=d
this.b=e},
cyG:function cyG(d,e){this.a=d
this.b=e},
cyD:function cyD(d){this.a=d},
cyI:function cyI(d){this.a=d},
cyH:function cyH(d,e){this.a=d
this.b=e},
cyP:function cyP(d){this.a=d},
cyL:function cyL(d,e){this.a=d
this.b=e},
cyM:function cyM(d,e){this.a=d
this.b=e},
cyN:function cyN(d,e){this.a=d
this.b=e},
cyO:function cyO(d,e){this.a=d
this.b=e},
auw:function auw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hGH(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bA(new C.ffP(),x.H).eQ(new C.ffQ())}}else if(s)C.fWX()}catch(t){}},
fWX(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eQ(new C.f0h())}catch(u){}},
hGK(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
ffP:function ffP(){},
ffQ:function ffQ(){},
f0h:function f0h(){},
h0l(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e0(v,w,"").split(":"))},
h0i(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kA)return null
return A.a.aV(w,14)},
fFU(d){var w
if(d.b!==D.kA)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aV(w,21)},
hH6(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h0m(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hH1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.Q(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kr(0,f)
t=x.N
u=B.cy(u,new C.fgN(),B.a2(u).k("E.E"),t)
s=B.z(u,B.a2(u).k("E.E"))
if(s.length===0)return B.Q(t,t)
for(u=v.kr(0,f),u=new B.HX(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Pz(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Pz(A.a.aV(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.Q(t,t)
k=B.Q(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hH_(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("E.E"))
A.d.aY(q,new C.fgM())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c5(s,"]"))continue
w=B.aMM(w,u,s,0)}return w},
hH3(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a03:$.h6W(),s=x.N,r=B.Q(s,s)
for(s=t.gdH(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c5(u,"]"))continue
r.m(0,w.b,u)}return r},
h0j(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eY6(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.h0l(q)===e)return q}return null},
hH4(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aV(v,u)
return A.d.gI(D.EN).a},
hH5(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abG(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abG(0,0,0)
v=C.eY6(b6,b0)
u=C.eY6(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hH3(b2,C.hH1(C.h0j(b2),v.r))
if(s.a!==0){u.r=C.hH_(C.h0j(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.h0l(o[m])
if(l==null||l==="utangulizi")continue
r.G(0,l)}for(q=B.ee(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eY6(b6,n)
i=C.eY6(b5,n)
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
a0=C.fFU(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.h0i(a8)===a0||C.fFU(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pb(a1,new C.fgT(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iN
$.iN=a9+1
A.d.G(a1,new C.ew(""+1000*a6+"_"+a9,D.kA,a2,a3,a4,a5,"",24,A.a1,A.bh,A.ay,4279310375,A.bf,d.at,D.b7,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ca,0,"","","","","",!1,0));++e}b5.f=new B.N(Date.now(),0,!1)
return new B.abG(k,t,e)},
hH0(d){var w=C.hH4(d)
if(d.w==="hati_kuhowa")return C.h_G("",w)
return C.h_F("",w)},
fgN:function fgN(){},
fgM:function fgM(){},
fgT:function fgT(d){this.a=d},
fWH(){var w=new B.N(Date.now(),0,!1),v=new C.f_l()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fG1(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fhL(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kA&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h0z(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fhL(d)
w=B.bg(u)
if(w==null)return!C.fhL(d)
return new B.N(Date.now(),0,!1).a4().cT(w.a4().bL(18e9))},
hHM(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.N(Date.now(),0,!1).a4().aa()},
hhA(d){return A.a.i(d).toLowerCase()},
amU(d){return C.hhC(d)},
hhC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$amU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$amU)
case 7:r=f
p=r.rk("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.I(o,C.hLf(),B.R(o).k("I<1,n>")).bZ(0,new C.c32())
o=B.d8(o,o.$ti.k("E.E"))
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
return B.i($async$amU,v)},
amT(d,e){return C.hhB(d,e)},
hhB(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amT=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amU(d),$async$amT)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$amT)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pJ(r)),$async$amT)
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
return B.i($async$amT,v)},
amV(d,e){return C.hhD(d,e)},
hhD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amU(d),$async$amV)
case 3:r=g
if(!J.hB(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$amV)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pJ(r)),$async$amV)
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
return B.i($async$amV,v)},
Tb(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Tb=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fzm&&!a5){w=1
break}t=4
w=7
return B.b(B.aw(),$async$Tb)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aC(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.Q(e,x.I)
for(d=J.jj(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.TR(B.Y(f.a(n.b),e,a0)))}$.a4W=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a5(a2)
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
return B.b(B.bZ(),$async$Tb)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.ti("civic_hati_kiapo_uongozi",null,A.ea),$async$Tb)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.Q(o,x.I)
for(f=x.f,e=J.jj(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.TR(B.Y(f.a(j.b),o,d)))}for(o=k,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a4W.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbm())f=d===e.gbm()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a4W.m(0,i.a,i.b)}w=20
return B.b(C.amW(),$async$Tb)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a5(a3)
$.ak.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fzm=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tb,v)},
amW(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$amW=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$amW)
case 6:s=e
r=B.Q(x.N,x.P)
for(o=$.a4W,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ad())}w=7
return B.b(s.an("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.aj(r,null)),$async$amW)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a5(l)
$.ak.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$amW,v)},
aWw(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Tb(!1),$async$aWw)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a4W.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.bxD(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWw,v)},
a4X(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a4X=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.N(Date.now(),0,!1)
o=a1.hs()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a4W.m(0,d,o)
$.fzm=!0
w=3
return B.b(C.amW(),$async$a4X)
case 3:w=4
return B.b(B.bZ(),$async$a4X)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.Q(e,x.P)
for(n=$.a4W,n=new B.cM(n,B.a2(n).k("cM<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ad())}w=9
return B.b(B.ny("civic_hati_kiapo_uongozi",B.D(["byState",r,"updatedAt",new B.N(Date.now(),0,!1).a4().aa()],e,x.z),null),$async$a4X)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a5(a0)
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
return B.i($async$a4X,v)},
amX(d){var w=0,v=B.j(x.T),u,t,s
var $async$amX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a30(A.er),$async$amX)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$amX)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWv(t,d),$async$amX)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amX,v)},
aWv(d,e){return C.hhE(d,e)},
hhE(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWv=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bZ(),$async$aWv)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ad("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aI(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eL().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w0(q,new Uint8Array(B.cl(d)),D.blT),$async$aWv)
case 8:n=p.Bs(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a5(k)
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
return B.i($async$aWv,v)},
IN(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cI,l,m,n)},
eZA(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bf,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bh,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eQ,j,k,l)},
fDh(d,e,f,g,h,i,j,k){var w=C.cx(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eg(h,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cI,g,e,f)},
eZg(d,e,f,g){return C.eZA(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fDi(d,e,f,g,h,i,j,k){var w=C.cx()
return C.eg(A.pv,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bh,A.a1,"",h,w,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cI,g,e,f)},
fWG(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e0(v,w,"").split(":"))},
bxD(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.Q(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.fWG(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kA&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fFy(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Am(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.fWG(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kA&&A.a.c5(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bk(a1.z,new C.ffN(a2))}else A.d.bk(a1.z,new C.ffO())
A.d.G(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fhL(a0))a0.ax=a6.f.a4().aa()
return a0},
fFy(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fix(D.a15),l=C.cx(),k=x.u,j=B.a([C.eg(A.bf,!1,s,A.ay,"marriage_locked_bg",r,24,A.bh,A.a1,"",1,C.cx(),m,"","",0,!1,"",0,D.b7,q,2,"",0,0,"",D.ca,D.l2,1,0,0)],k),i=B.a([],k)
i.push(C.IN("NGMY",A.L,236069181,52,A.bh,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IN("TAREHE:",A.bf,o,16,A.bh,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fDh("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.fWH()))
i.push(C.eZg(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IN("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bh,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IN("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a1,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.eZA(0,0.002,D.fb,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fDi("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fDi("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fDi("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.eZA(268435456,0.175,D.b7,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IN("VIDEO YA KIAPO",A.bf,o,10,A.bh,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eg(A.bf,!1,s,A.ay,"__kiapo_video__",r,24,A.bh,A.a1,"",0.131,C.cx(),t,"","",0,!1,"",0,D.b7,q,2,"",0,0,"",D.ca,D.l2,0.77,0.115,0.492))
i.push(C.IN("Rais Anayeapa:",A.bf,p,15,A.bh,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IN("Jina:",A.bf,p,13,A.bh,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fDh("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.eZg(0.195,0.7130000000000001,0.62,n))
i.push(C.IN("Sahihi:",A.bf,p,13,A.bh,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eg(A.bf,!1,s,A.ay,"marriage_sign_rais",0,24,A.bh,A.a1,"",0.07,C.cx(),t,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eQ,0.38,0.21500000000000002,0.73))
i.push(C.eZg(0.21500000000000002,0.795,0.38,n))
i.push(C.IN("Tarehe:",A.bf,p,13,A.bh,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fDh("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.fWH()))
i.push(C.eZg(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.eZA(0,0.032,D.b7,o,1,"state_box",0.72,0.14,0.875),C.IN("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bh,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qR(4294967035,t,0,0,j,l,D.pk,"","",u,D.d7)
return C.Am(t,t,t,t,D.nx,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cx(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
adQ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.F(x.q).f.P(D.egJ)
w=1
break}w=3
return B.b(C.Tb(!0),$async$adQ)
case 3:w=4
return B.b(C.aWw(p),$async$adQ)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h0z(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c1(D.b31,new C.faT(p),f,!0,!0,!1,A.l3,!1,!1,x.N),$async$adQ)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.faU(),f,null,!0,!0,x.y),$async$adQ)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fFy(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.F(x.q).f
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fFy(p))
case 1:return B.h(u,v)}})
return B.i($async$adQ,v)},
f_l:function f_l(){},
c32:function c32(){},
ffN:function ffN(d){this.a=d},
ffO:function ffO(){},
faT:function faT(d){this.a=d},
faR:function faR(d){this.a=d},
faS:function faS(d){this.a=d},
faU:function faU(){},
faP:function faP(d){this.a=d},
faQ:function faQ(d){this.a=d},
anr:function anr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAw:function aAw(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dXj:function dXj(d){this.a=d},
dXh:function dXh(d){this.a=d},
dXi:function dXi(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXl:function dXl(d){this.a=d},
vE(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bh,h,"",i,w,null,"","",0,!1,"",j,D.b7,4280172719,2,d,0,0,"",D.ca,D.cI,l,m,n)},
fWj(d,e,f){var w=4291404327
return B.a([C.pA(0,f,D.ex,w,2,"ring_l",f,d-f*0.42,e),C.pA(0,f,D.ex,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
eYJ(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pA(4294967288,f,D.ex,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pA(h,s,D.ex,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pA(h,f*0.46,D.ex,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pA(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bf,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bh,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eQ,j,k,l)},
eYI(d,e,f,g,h,i,j,k,l){var w=C.cx(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eg(h,!1,k,A.ay,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.b7,4280172719,2,l,0,0,"",D.ca,D.cI,g,e,f)},
bv7(d,e,f,g){return C.pA(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fWi(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pA(0,0.036,D.b7,h,1.4,"banner_box_"+d,w,v,e),C.vE(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h0k(){var w=new B.N(Date.now(),0,!1),v=new C.fgS()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fWk(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vE(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.eYI("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bv7(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vE("Sahihi:",A.bf,j,15,A.a1,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eg(A.bf,!1,4279310375,A.ay,"marriage_sign_"+d+"_witness_"+r,0,24,A.bh,A.a1,"",0.05,C.cx(),null,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eQ,s,t,g-0.004),C.bv7(t,g+0.044,s,w)],x.u)},
aeh(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cTW,D.c1h,D.cNy,D.cPe],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fCC(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fix(d.d),v=B.a([C.eg(A.bf,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bh,A.a1,"",1,C.cx(),w,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l2,1,0,0)],x.u)
A.d.v(v,C.hvQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hvQ(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vE("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fWj(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fWj(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.eYJ(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.eYJ(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vE("\ud83c\udf33",A.L,4279898632,22,A.a1,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pA(0,0.062,D.ex,b1,1.6,"crest_o",0.11,0.445,0.012),C.pA(0,0.046,D.ex,b1,1,"crest_i",0.084,0.458,0.02),C.vE("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pA(0,0.002,D.fb,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pA(b9,0.016,D.kB,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pA(0,0.002,D.fb,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vE("TAREHE:",A.bf,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.eYI("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h0k()),C.bv7(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vE(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pA(c0,0.0026,D.b7,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pA(c3.e,0.138,D.b7,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cx()
c2.push(C.eg(A.bf,!1,b9,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bh,A.cp,"",0.128,s,a9,"","",0,!1,"",0,D.b7,b3,2,c5,0,0,"",D.ca,D.cI,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pA(0,0.036,D.b7,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cx()
A.d.v(c2,B.a([s,C.eg(A.L,!1,c0,A.ay,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bh,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.b7,b3,2,c7,0,0,"",D.ca,D.cI,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fWi(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vE(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.eYI("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iN
$.iN=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iN
$.iN=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ew(""+1000*i+"_"+h,D.cI,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bh,A.ay,c0,A.bf,a9,D.b7,b2,b3,2,0,!1,s,0,D.ca,0,"","","","","",!1,0),j,new C.ew(""+1000*f+"_"+e,D.eQ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a1,A.bh,A.ay,b6,A.bf,a9,D.fb,0,b5,0.8,0,!1,g,0,D.ca,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iN
$.iN=p+1
i=Date.now()
h=$.iN
$.iN=h+1
g=Date.now()
f=$.iN
$.iN=f+1
e=Date.now()
a3=$.iN
$.iN=a3+1
A.d.v(d,B.a([new C.ew(""+1000*s+"_"+p,D.cI,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bh,A.ay,b7,A.dO,a9,D.b7,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*i+"_"+h,D.eQ,a1,a2,0.046,0.025875,"",24,A.a1,A.bh,A.ay,b6,A.bf,a9,D.b7,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*g+"_"+f,D.cI,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bh,A.ay,b7,A.L,a9,D.b7,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*e+"_"+a3,D.eQ,a0,k,a1+0.046-a0,l,"",24,A.a1,A.bh,A.ay,b6,A.bf,a9,D.b7,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ca,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fWi("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a0V||w===D.a0X||w===D.a0U||w===D.a0W){w=t-0.008
A.d.v(c2,C.eYJ(0.21,w,0.044,!0,b0))
A.d.v(c2,C.eYJ(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pA(0,a4,D.b7,c0,1.3,"wit_table_border",0.82,0.09,t),C.pA(c0,a4,D.b7,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pA(0,0.0022,D.fb,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vE("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vE("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fWk("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fWk("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pA(0,0.11,D.b7,c0,1.2,"mw_box",0.82,0.09,t),C.vE("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vE("Jina:",A.bf,b9,15,A.a1,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.eYI("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bv7(0.215,p,0.3116,b5),C.vE("Sahihi:",A.bf,b9,15,A.a1,0.028,0,"mw_sl",0.09,0.5,w),C.eg(A.bf,!1,b6,A.ay,"marriage_sign_mwandishi",0,24,A.bh,A.a1,"",0.044,C.cx(),a9,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eQ,0.3161999999999999,0.5738,s-0.044),C.bv7(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pA(0,0.032,D.b7,c0,1,"state_box",0.7,0.15,a8),C.vE("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hH2(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fGb(d.d),p=new C.fgO(s),o=new C.fgP(s),n=d.z,m=n===D.a0V||n===D.a0X||n===D.a0U||n===D.a0W,l=n===D.azo||n===D.a0Y||n===D.azp,k=B.bU(0,B.fC(q,A.B,t,t,A.cj,A.bM,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a0Y?26:16
i.push(new C.fgR().$1$size(w))}if(n===D.azq)i.push(D.eTZ)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hu,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aHN,p.$1$w(0.9),D.aHN,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_6,t,n,w,t,t,A.n),t,t,t,t,A.adJ,t,t,t))
i.push(A.ar)
i.push(new C.fgQ(r).$1("NIMETOWE"))
i.push(A.fW)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.B(A.JB,new B.cD(A.aZ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d4,new B.bG(1,A.bp,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b9)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.V,t,A.aX,A.q,B.a([k,new B.B(A.acm,B.u(i,A.ah,t,A.e,A.j,0,A.p),t)],j),t)},
h_F(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aeh(e,t)
if(r==null)r=A.d.gI(D.EN)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fCC(r,0.165,y.O,D.cPJ,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pk,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Am(t,t,t,t,D.nx,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h_G(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aeh(e,t)
if(r==null)r=A.d.gI(D.EN)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fCC(r,0.165,y.f,D.cLN,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pk,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Am(t,t,t,t,D.nx,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
byU(d,e,f){var w=0,v=B.j(x.T),u
var $async$byU=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c1(A.K,new C.fs7(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byU,v)},
adR(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adR=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.R(i).k("a3<1>")
p=B.z(new B.a3(i,new C.faX(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IU,new C.faY(p),d,!0,!0,!1,A.l3,!1,!1,x.N),$async$adR)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byU(d,"Hati ya Kuhowa",D.EN),$async$adR)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adR)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h_F(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
adS(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adS=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.R(i).k("a3<1>")
p=B.z(new B.a3(i,new C.fb0(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IU,new C.fb1(p),d,!0,!0,!1,A.l3,!1,!1,x.N),$async$adS)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byU(d,"Hati ya Kuhoweya",D.EN),$async$adS)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adS)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h_G(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adS,v)},
adT(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$adT=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.R(i).k("a3<1>")
m=B.z(new B.a3(i,new C.fb4(),n),n.k("E.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IU,new C.fb5(m),d,!0,!0,!1,A.l3,!1,!1,x.N),$async$adT)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byU(d,"Malipo ya Awamu ya Mahari",D.NR),$async$adT)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adT)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aeh(s,D.NR)
if(q==null)q=A.d.gI(D.NR)
n=C.cx()
p=C.qR(q.e,null,0,0,C.fCC(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cHc,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pk,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.d7)
n=C.cx()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Am(null,null,null,null,D.nx,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adT,v)},
wB:function wB(d,e){this.a=d
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
fgS:function fgS(){},
fgO:function fgO(d){this.a=d},
fgQ:function fgQ(d){this.a=d},
fgR:function fgR(){},
fgP:function fgP(d){this.a=d},
fs7:function fs7(d,e){this.a=d
this.b=e},
aaN:function aaN(d,e,f){this.c=d
this.d=e
this.a=f},
dOI:function dOI(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOG:function dOG(d,e){this.a=d
this.b=e},
aac:function aac(d,e,f){this.c=d
this.d=e
this.a=f},
faX:function faX(){},
faY:function faY(d){this.a=d},
faV:function faV(d){this.a=d},
faW:function faW(d){this.a=d},
fb0:function fb0(){},
fb1:function fb1(d){this.a=d},
faZ:function faZ(d){this.a=d},
fb_:function fb_(d){this.a=d},
fb4:function fb4(){},
fb5:function fb5(d){this.a=d},
fb2:function fb2(d){this.a=d},
fb3:function fb3(d){this.a=d},
IQ(d,e,f,g,h,i,j,k,l,m){var w=C.cx()
return C.eg(e,!1,f,A.ay,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bh,h,"",i,w,null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cI,k,l,m)},
Bn(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bf,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bh,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eQ,j,k,l)},
fX_(d,e,f){return C.Bn(0,0.002,D.fb,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvh(d,e,f,g,h){return B.a([C.Bn(4294967288,0.032,D.b7,4291404327,1.15,"pill_"+d,g,f,e),C.IQ(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fDm(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bn(0,0.002,D.fb,g,1,"orn_l_"+t,u,d,v),C.Bn(h,0.016,D.kB,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bn(0,0.002,D.fb,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
ZY(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.IQ(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cx()
return B.a([v,C.eg(A.L,!1,j,A.ay,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.O,"",0.02,s,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cI,t,u,g-0.002),C.fX_(u,g+0.018,t)],x.u)},
fX0(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bn(h,0.028,D.b7,h,0,"chv_"+d,g,e,f),C.Bn(w,0.024,D.kB,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bn(w,0.024,D.kB,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.IQ(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvg(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.IQ("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eg(A.bf,!1,4279310375,A.ay,"marriage_sign_"+d,0,24,A.bh,A.a1,"",0.032,C.cx(),null,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eQ,v,w,f-0.006),C.fX_(w,f+0.016,v)],x.u)},
fGc(d){var w,v
for(w=0;w<19;++w){v=D.O3[w]
if(v.a===d)return v}return null},
hJh(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aeh(A.a.aV(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aeh(A.a.aV(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aV(k,18)
w=C.aeh(u,D.NR)
v=w==null?l:w.d
if(v==null){w=C.aeh(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fGc(A.a.aV(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fXO.a8(0)
$.fY_.a8(0)
t=C.fix(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fHf(d){var w=0,v=B.j(x.T),u
var $async$fHf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c1(A.K,new C.ftm(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHf,v)},
wE:function wE(d,e){this.a=d
this.b=e},
nd:function nd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bf8:function bf8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ftm:function ftm(){},
aaQ:function aaQ(d){this.a=d},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1j:function e1j(d){this.a=d},
e1i:function e1i(d,e){this.a=d
this.b=e},
act:function act(d,e,f){this.c=d
this.d=e
this.a=f},
fGb(d){return $.fY_.ci(0,d,new C.fiz(d))},
fix(d){return $.fXO.ci(0,d,new C.fiy(d))},
fr(d){return B.fwY(d>>>16&255,d>>>8&255,d&255,255)},
hyN(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.fZ0(4294570461,4293910718,4284234270,u)
case 1:return C.fZ0(4294635750,4293975240,t,4292912216)
case 2:w=C.eXl(s,4294505966,r)
C.bv1(w,14,16,p)
C.kd(w,8,9,464,836,u,1.2)
C.Bj(w,2,2,1,1,u,10)
C.Bj(w,478,2,-1,1,u,10)
C.Bj(w,2,852,1,-1,u,10)
C.Bj(w,478,852,-1,-1,u,10)
return w
case 3:return C.eXl(4294966515,4294373082,4289102906)
case 4:return C.htN(C.eXl(4294376440,4293653998,4290287194))
case 5:w=C.eXl(4294965238,4294437098,4288444980)
C.bv1(w,14,16,4283043359)
C.kd(w,6,7,468,840,u,1)
C.kd(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,n,4294175448)
C.ra(v,n)
C.kd(v,24,24,432,806,4286209070,1)
C.ZM(v,12,12,468,12,o,3,20)
C.ZM(v,12,842,468,842,o,3,20)
C.ZM(v,12,12,12,842,o,3,20)
C.ZM(v,468,12,468,842,o,3,20)
return v
case 7:return C.hs0(4294440434,4293518297,4280228630,r)
case 8:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,m,4293911504)
C.ra(v,m)
C.kd(v,28,28,424,798,l,1)
C.f4x(v,28,28,l,k)
C.f4x(v,452,28,l,k)
C.f4x(v,28,826,l,k)
C.f4x(v,452,826,l,k)
return v
case 9:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,j,4294111986)
C.ra(v,j)
C.kd(v,18,18,444,818,4292401368,0.7)
B.iy(v,!0,C.fr(p),0,13,0,853)
return v
case 10:return C.hvD(i,4294173372)
case 11:return C.hwH(4294439140,4293449662)
case 12:return C.hrU(h,4294239432)
case 13:return C.hw8(4294244340,4293193448)
case 14:return C.hAi(4294505710,4293780694)
case 15:return C.eWn(4294966259,4294439138,o,p,q)
case 16:return C.eWn(4294966776,4294178544,o,g,g)
case 17:return C.eWn(4294965493,4294504170,o,4286200650,q)
case 18:return C.eWn(4294966519,4294373862,o,p,p)
case 19:return C.huO()
case 20:return C.huP()
case 21:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,h,4293976768)
C.ra(v,h)
C.bv1(v,14,16,p)
B.iy(v,!0,C.fr(u),4,475,4,9)
B.iy(v,!0,C.fr(u),4,475,844,849)
B.iy(v,!0,C.fr(u),4,9,4,849)
B.iy(v,!0,C.fr(u),470,475,4,849)
C.ZM(v,10,12,470,12,u,2,16)
C.ZM(v,10,842,470,842,u,2,16)
C.ZM(v,10,12,10,842,u,2,18)
C.ZM(v,470,12,470,842,u,2,18)
C.Bj(v,2,2,1,1,t,10)
C.Bj(v,478,2,-1,1,t,10)
C.Bj(v,2,852,1,-1,t,10)
C.Bj(v,478,852,-1,-1,t,10)
C.kd(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,s,4294438872)
C.ra(v,s)
C.kd(v,14,16,452,822,o,2.2)
C.kd(v,22,24,436,806,o,1)
C.fEC(v,!1,!1,o,p,p,36,14,16)
C.kq(v,240,20,7,o,!0)
C.kq(v,240,834,7,o,!0)
C.kq(v,18,427,7,o,!0)
C.kq(v,462,427,7,o,!0)
return v
case 23:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,i,4293910712)
C.ra(v,i)
B.iy(v,!0,C.fr(u),0,479,0,20)
B.iy(v,!0,C.fr(u),0,479,834,853)
B.iy(v,!0,C.fr(u),0,20,0,853)
B.iy(v,!0,C.fr(u),460,479,0,853)
B.iy(v,!0,C.fr(f),5,474,5,9)
B.iy(v,!0,C.fr(f),5,474,844,848)
B.iy(v,!0,C.fr(f),5,9,5,848)
B.iy(v,!0,C.fr(f),470,474,5,848)
C.kd(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xs(v,e,4294174404)
C.ra(v,e)
C.bv1(v,14,16,p)
B.iy(v,!0,C.fr(u),3,476,3,8)
B.iy(v,!0,C.fr(u),3,476,845,850)
B.iy(v,!0,C.fr(u),3,8,3,850)
B.iy(v,!0,C.fr(u),471,476,3,850)
C.kd(v,9,10,462,834,t,1)
C.kd(v,14,16,452,822,u,1.8)
C.kq(v,240,8,4,u,!0)
C.kq(v,240,846,4,u,!0)
C.kq(v,8,427,4,u,!0)
C.kq(v,472,427,4,u,!0)
C.kq(v,8,8,3,t,!0)
C.kq(v,472,8,3,t,!0)
C.kq(v,8,846,3,t,!0)
C.kq(v,472,846,3,t,!0)
return v}},
xs(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kr(d,!1,A.d5,new B.Q9(s),r,A.cQ,1,0,w-1,k,k);++k}},
ra(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f6()
n.dY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aF(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aF(v==null?0:v)
v=d.a
s=v==null?o:v.dK(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.k.M(s.gb2(s))-3,0,255)
r=A.o.D(A.k.M(s.gb9())-3,0,255)
q=A.o.D(A.k.M(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.je(u,t,v,r,q,255)}},
kd(d,e,f,g,h,i,j){var w,v=null,u=C.fr(i),t=e+g
B.kr(d,!0,A.d5,u,v,A.cQ,j,e,t,f,f)
w=f+h
B.kr(d,!0,A.d5,u,v,A.cQ,j,e,t,w,w)
B.kr(d,!0,A.d5,u,v,A.cQ,j,e,e,f,w)
B.kr(d,!0,A.d5,u,v,A.cQ,j,t,t,f,w)},
Bj(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kr(d,!0,A.d5,C.fr(i),u,A.cQ,2,e,e+g*j,f,f)
B.kr(d,!0,A.d5,C.fr(i),u,A.cQ,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kr(d,!0,A.d5,C.fr(i),u,A.cQ,1,w,e+g*t,v,v)
B.kr(d,!0,A.d5,C.fr(i),u,A.cQ,1,w,w,v,f+h*t)},
fZ0(d,e,f,g){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xs(v,d,e)
C.ra(v,d)
B.iy(v,!0,C.fr(f),0,479,0,28)
B.iy(v,!0,C.fr(f),0,479,826,853)
B.iy(v,!0,C.fr(f),0,28,0,853)
B.iy(v,!0,C.fr(f),452,479,0,853)
C.kd(v,5,5,470,844,g,1.1)
C.kd(v,28,28,424,798,g,1.6)
C.Bj(v,2,2,1,1,g,11)
C.Bj(v,478,2,-1,1,g,11)
C.Bj(v,2,852,1,-1,g,11)
C.Bj(v,478,852,-1,-1,g,11)
return v},
eXl(d,e,f){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xs(v,d,e)
C.ra(v,d)
C.kd(v,14,16,452,822,f,1.6)
C.kd(v,20,22,440,810,f,0.8)
return v},
bv1(d,e,f,g){var w,v=C.fr(g)
B.iy(d,!0,v,0,479,0,f-1)
w=854-f
B.iy(d,!0,v,0,479,w,853);--w
B.iy(d,!0,v,0,e-1,f,w)
B.iy(d,!0,v,480-e,479,f,w)},
htN(d){var w,v,u=4291404327
C.bv1(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kq(d,w,8,3,u,!0)
C.kq(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kq(d,7,v,3,u,!0)
C.kq(d,473,v,3,u,!0)}return d},
f7s(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.iY(e,f),new B.iY(e+g*n,f),new B.iY(e,f+h*n)],t)
B.a_y(d,C.fr(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.iY(s,u),new B.iY(e+g*v,u),new B.iY(s,f+h*v)],t)
B.a_y(d,C.fr(k),t)
t=A.k.U(n*0.39)
C.kq(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kq(d,e+g*t,f+h*3,4,k,!0)
C.kq(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kq(d,e+g*t,f,5,k,!0)
C.kq(d,e,f+h*t,5,k,!0)}},
fEC(d,e,f,g,h,i,j,k,l){var w,v
C.f7s(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f7s(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f7s(d,k,v,1,-1,e,f,g,h,i,j)
C.f7s(d,w,v,-1,-1,e,f,g,h,i,j)},
ZM(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kM(d,!0,A.d5,new B.qp(p),null,A.cQ,j,r,q)}},
f6D(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kr(d,!0,A.d5,new B.qp(o),null,A.cQ,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kr(d,!0,A.d5,new B.qp(o),null,A.cQ,1.4,q,q,p,p+h*r)}},
hs0(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hd(o,o,A.c4,0,A.dV,854,o,0,3,o,A.c4,480,!1)
C.xs(n,d,e)
C.ra(n,d)
C.kd(n,20,20,440,814,f,1.2)
C.f6D(n,0,0,1,1,g)
C.f6D(n,480,0,-1,1,g)
C.f6D(n,0,854,1,-1,g)
C.f6D(n,480,854,-1,-1,g)
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
B.kr(n,!0,A.d5,new B.qp(p),o,A.cQ,1.2,240,r,60,q)}return n},
f4x(d,e,f,g,h){var w
C.f9m(d,!0,C.fr(g),13,e,f)
C.f9m(d,!0,C.fr(g),9,e,f)
w=B.a([new B.iY(e,f-4),new B.iY(e+4,f),new B.iY(e,f+4),new B.iY(e-4,f)],x.J)
B.a_y(d,C.fr(h),w)},
kq(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.iY(e,v),new B.iY(u,f),new B.iY(e,t),new B.iY(s,f)],x.J)
if(i){B.a_y(d,C.fr(h),r)
return}B.kr(d,!0,A.d5,C.fr(h),w,A.cQ,1,e,u,v,f)
B.kr(d,!0,A.d5,C.fr(h),w,A.cQ,1,u,e,f,t)
B.kr(d,!0,A.d5,C.fr(h),w,A.cQ,1,e,s,t,f)
B.kr(d,!0,A.d5,C.fr(h),w,A.cQ,1,s,e,f,v)},
eWm(d,e,f,g,h,i,j){var w,v=B.a([new B.iY(e,f),new B.iY(e+g*28,f),new B.iY(e,f+h*28)],x.J)
B.a_y(d,C.fr(i),v)
v=e+g*14
w=f+h*14
C.kq(d,v,w,6,j,!0)
C.kq(d,v,w,3,i,!0)},
eWn(d,e,f,g,h){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xs(v,d,e)
C.ra(v,d)
C.kd(v,18,18,444,818,f,2)
C.kd(v,26,26,428,802,f,0.9)
if(h!=null)B.iy(v,!0,C.fr(h),28,451,28,34)
C.eWm(v,18,18,1,1,g,f)
C.eWm(v,462,18,-1,1,g,f)
C.eWm(v,18,836,1,-1,g,f)
C.eWm(v,462,836,-1,-1,g,f)
return v},
huO(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
C.xs(r,u,4294240980)
C.ra(r,u)
C.kd(r,10,12,460,830,t,3.2)
C.kd(r,18,20,444,814,s,1.2)
C.kd(r,24,26,432,802,t,1.8)
C.fEC(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kq(r,w,16,3,t,!0)
C.kq(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kq(r,16,w,3,t,!0)
C.kq(r,464,w,3,t,!0)}return r},
huP(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
C.xs(p,s,4294373080)
C.ra(p,s)
C.kd(p,16,18,448,818,r,2.4)
C.kd(p,24,26,432,802,4286209044,1)
w=new C.eYA(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fEC(p,!1,!0,r,q,q,34,16,18)
return p},
bvI(d,e,f,g,h,i){B.iy(d,!0,C.fr(i),e,e+g,f,f+h)},
bwx(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kr(d,!1,A.d5,new B.Q9(i),null,A.cQ,1,e,w,l,l)}},
hvC(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kr(d,!1,A.d5,new B.qp(r),null,A.cQ,1,e,s,t,t);++v}return}w=f+g-1
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
B.kr(d,!1,A.d5,new B.qp(r),null,A.cQ,1,t,t,f,s);++q}},
hvD(d,e){var w,v,u=null,t=B.hd(u,u,A.c4,0,A.dV,854,u,0,3,u,A.c4,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hvC(t,v,w,30,D.cAH,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bvI(t,44,44,392,766,d)
C.bwx(t,44,44,392,766,d,e)
C.ra(t,d)
C.kd(t,44,44,392,766,4292128567,2.2)
C.kd(t,50,50,380,754,4279898632,0.8)
return t},
hwG(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.J(g,4)){case 0:C.kq(d,e,f,7,h,!0)
C.kq(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kr(d,!0,A.d5,C.fr(h),o,A.cQ,1.6,w,u,v,t)
B.kr(d,!0,A.d5,C.fr(h),o,A.cQ,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kr(d,!0,A.d5,new B.qp(p),o,A.cQ,1.2,w,v,q,q)}break
default:B.kr(d,!0,A.d5,C.fr(h),o,A.cQ,1.5,e-8,e+8,f,f)
B.kr(d,!0,A.d5,C.fr(h),o,A.cQ,1.5,e,e,f-8,f+8)
B.kM(d,!0,A.d5,C.fr(h),o,A.cQ,2,e,f)}},
hwH(d,e){var w,v,u,t,s=null,r=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
B.iy(r,!0,C.fr(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hwG(r,u,v,w,4292391514)}C.bvI(r,46,46,388,762,d)
C.bwx(r,46,46,388,762,d,e)
C.ra(r,d)
C.kd(r,46,46,388,762,4291404327,1.8)
return r},
fUC(d,e,f,g){C.f9m(d,!0,C.fr(g),16,e,f)
C.f9m(d,!0,C.fr(g),11,e,f)
C.kq(d,e,f,6,g,!0)
B.kr(d,!0,A.d5,C.fr(g),null,A.cQ,1.3,e-14,e+14,f,f)
B.kr(d,!0,A.d5,C.fr(g),null,A.cQ,1.3,e,e,f-14,f+14)},
hrU(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
B.iy(s,!0,C.fr(4280948752),0,479,0,853)
B.iy(s,!0,C.fr(u),0,479,0,78)
B.iy(s,!0,C.fr(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fUC(s,w,39,t)
C.fUC(s,w,815,t)}C.bvI(s,38,92,404,670,d)
C.bwx(s,38,92,404,670,d,e)
C.ra(s,d)
C.kd(s,38,92,404,670,t,1.8)
C.kd(s,45,99,390,656,4287322667,0.8)
return s},
hw7(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.iY(e,f),new B.iY(q-5,w),new B.iY(q,f-(18-Math.abs(r)*3)),new B.iY(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_y(d,new B.qp(o),p)}B.kM(d,!0,A.d5,C.fr(4292128567),null,A.cQ,3,e,f)},
hw8(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
C.xs(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kr(q,!0,A.d5,new B.qp(v),s,A.cQ,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kr(q,!0,A.d5,new B.qp(u),s,A.cQ,1.1,v,v,0,853)}B.iy(q,!0,C.fr(r),0,479,0,70)
B.iy(q,!0,C.fr(r),0,479,798,853)
for(t=0;t<5;++t)C.hw7(q,70+t*85,48,4292128567)
C.bvI(q,48,78,384,712,d)
C.bwx(q,48,78,384,712,d,e)
C.ra(q,d)
C.kd(q,48,78,384,712,4291404327,1.6)
return q},
hAi(d,e){var w,v,u,t=null,s=4279970378,r=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
B.iy(r,!0,C.fr(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kq(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kM(r,!0,A.d5,new B.qp(u),t,A.cQ,1,v,w)}C.bvI(r,40,40,400,774,d)
C.bwx(r,40,40,400,774,d,e)
C.ra(r,d)
C.kd(r,40,40,400,774,4291058750,2)
C.kd(r,48,48,384,758,s,0.8)
return r},
kB:function kB(d,e){this.a=d
this.b=e},
fiz:function fiz(d){this.a=d},
fiy:function fiy(d){this.a=d},
eYA:function eYA(d){this.a=d},
fjc(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hwA(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fWE(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.nY(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aC(0,Ae.aed(A.a.al(d,s,r+1)),t)
v=x.f.b(w)?B.Y(w,x.N,x.z):t
return v}catch(u){return t}},
aJY(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aJY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ut(null,""),$async$aJY)
case 3:n=g
if(A.a.i(n).length===0)throw B.O("AI is not available right now. Please try again later.")
t=B.mC(n)
if(e==null)s=A.h2
else{r=C.hwA(e)
s=B.a([new B.YN(A.cM.gcq().aE(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qh(t,d,s,E.Dj),$async$aJY)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.O(q!=null&&B.Jf(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aJY,v)},
fn7(d,e,f,g){return C.hKP(d,e,f,g)},
hKP(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fn7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fjc(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h0I()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
r=F.fdh(n)
m=C
w=3
return B.b(C.aJY('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+(y.T+B.aI(r,"book","newspaper"))+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fn7)
case 3:q=m.fWE(i)
if(q==null)throw B.O(y.S)
p=new C.yp(o,"","","By the NGMY Newsroom","",A.U,"","","").b4k(q)
if(p.f.length===0)throw B.O("The AI did not write a story. Try again.")
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fn7,v)},
ffM(d,e,f,g,h){return C.hGF(d,e,f,g,h)},
hGF(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ffM=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:k=B.a([],x.s)
j=e.length
j=j>6?A.d.fT(e,j-6):e
t=j.length
s=0
for(;s<j.length;j.length===t||(0,B.J)(j),++s){r=j[s]
k.push(r.a+": "+r.b)}q=A.d.aG(k,"\n")
k=C.h0I()
j=A.Q.aj(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
p=F.fdh(f)
i=C
w=3
return B.b(C.aJY('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+k+"\n\nTHE PAGE NOW: "+j+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+(y.T+B.aI(p,"book","newspaper"))+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$ffM)
case 3:o=i.fWE(a1)
if(o==null)throw B.O(y.S)
n=o.h(0,"changes")
if(x.f.b(n)&&J.ct(n)){m=d.b4k(B.Y(n,x.N,x.z))
l=A.Q.aj(m.ad(),null)!==A.Q.aj(d.ad(),null)}else{m=d
l=!1}k=o.h(0,"message")
if(k==null)k=l?"Done.":"Okay."
u=new C.a5z(A.a.i(B.t(k)),m,l)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ffM,v)},
a5z:function a5z(d,e,f){this.a=d
this.b=e
this.c=f},
hNo(d,e){return B.a7(d,!1).ct(B.eO(new C.ftx(e),!0,null,x.H))},
ftx:function ftx(d){this.a=d},
TH:function TH(d,e){this.c=d
this.a=e},
aAP:function aAP(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.x=_.w=null
_.y=h
_.z=i
_.Q=!1
_.as=""
_.at=j
_.ax=k
_.c=_.a=null},
e4x:function e4x(d){this.a=d},
e4w:function e4w(){},
e4y:function e4y(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4z:function e4z(){},
e4d:function e4d(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4b:function e4b(d){this.a=d},
e4c:function e4c(d){this.a=d},
e4q:function e4q(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4p:function e4p(d){this.a=d},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
fi9(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fi9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fW1){w=1
break}r=new C.fia()
t=4
q=x.s
w=7
return B.b(B.iA(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fi9)
case 7:$.fW1=!0
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
return B.i($async$fi9,v)},
bxV(d){return A.F7[B.mr(d)-1]+", "+A.qp[B.bB(d)-1]+" "+B.bN(d)+", "+B.bw(d)},
hzp(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cXI[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fFT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fl(d[w],B.ad("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a3(v,new C.fgu(),B.R(v).k("a3<1>")))
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
continue}o=new C.fgw(j,h)
n=new C.fgv(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ak(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iJ(o.$1(l)))
j.a+=l}return u},
fD0(d,e){var w=new C.eYd()
return A.d.cI(e,0,new C.eYb(w))>=A.d.cI(d,0,new C.eYc(w))-2},
fTh(d){var w,v,u=new B.aZ($.a1().r,A.av,null,null,B.a([],x.v))
u.N(new B.bj(46,0))
w=d.a
u.N(new B.av(w,0))
v=d.b
u.N(new B.av(w,v-46))
u.N(new B.av(w-46,v))
u.N(new B.av(0,v))
u.N(new B.av(0,46))
u.N(new B.bV())
return u},
yp:function yp(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
c6H:function c6H(d){this.a=d},
c6F:function c6F(){},
c6G:function c6G(){},
yc:function yc(d,e){this.a=d
this.b=e},
ws:function ws(d,e){this.a=d
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
fia:function fia(){},
fgu:function fgu(){},
fgw:function fgw(d,e){this.a=d
this.b=e},
fgv:function fgv(d,e,f){this.a=d
this.b=e
this.c=f},
eYd:function eYd(){},
eYe:function eYe(){},
eYb:function eYb(d){this.a=d},
eYc:function eYc(d){this.a=d},
aY0:function aY0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6I:function c6I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6J:function c6J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6K:function c6K(d){this.a=d},
b8o:function b8o(d){this.a=d},
b8n:function b8n(d,e){this.b=d
this.a=e},
bpE:function bpE(d){this.a=d},
b4Y:function b4Y(d,e){this.b=d
this.a=e},
bna:function bna(d,e){this.b=d
this.a=e},
hNu(d){return B.a7(d,!1).ct(B.eO(new C.ftP(),!0,null,x.I))},
bvt(d,e){var w,v,u,t,s,r,q=B.bT(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fEl(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
ftP:function ftP(){},
YG:function YG(d){this.a=d},
o4:function o4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aC9:function aC9(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aL=_.av=_.au=_.Y=_.aZ=_.bn=_.y2=0
_.b_=null
_.aS=0.25
_.b7=null
_.bE=0.5
_.aQ=1
_.c9=_.bO=_.bf=0
_.cS=_.dd=!1
_.c=_.a=null},
eC0:function eC0(d){this.a=d},
eAT:function eAT(d,e){this.a=d
this.b=e},
eBg:function eBg(d,e){this.a=d
this.b=e},
eBq:function eBq(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAB:function eAB(d){this.a=d},
eB9:function eB9(d,e){this.a=d
this.b=e},
eBa:function eBa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBm:function eBm(d,e,f){this.a=d
this.b=e
this.c=f},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBk:function eBk(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e,f){this.a=d
this.b=e
this.c=f},
eBo:function eBo(d,e){this.a=d
this.b=e},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAr:function eAr(){},
eAv:function eAv(d,e){this.a=d
this.b=e},
eAq:function eAq(d,e){this.a=d
this.b=e},
eAx:function eAx(){},
eAw:function eAw(d,e){this.a=d
this.b=e},
eAp:function eAp(d,e){this.a=d
this.b=e},
eAm:function eAm(d,e){this.a=d
this.b=e},
eAy:function eAy(d){this.a=d},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAz:function eAz(d){this.a=d},
eAn:function eAn(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBZ:function eBZ(){},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBP:function eBP(d,e){this.a=d
this.b=e},
eBS:function eBS(d,e){this.a=d
this.b=e},
eBO:function eBO(d,e){this.a=d
this.b=e},
eBT:function eBT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBN:function eBN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBU:function eBU(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eBW:function eBW(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBB:function eBB(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBx:function eBx(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBv:function eBv(d){this.a=d},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBL:function eBL(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBd:function eBd(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBe:function eBe(d,e){this.a=d
this.b=e},
eBb:function eBb(d,e){this.a=d
this.b=e},
eBf:function eBf(d){this.a=d},
eB5:function eB5(d){this.a=d},
eB4:function eB4(d){this.a=d},
eB6:function eB6(d){this.a=d},
eB3:function eB3(d){this.a=d},
eB7:function eB7(d,e){this.a=d
this.b=e},
eB2:function eB2(d,e){this.a=d
this.b=e},
eB1:function eB1(d,e){this.a=d
this.b=e},
eAK:function eAK(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAR:function eAR(d){this.a=d},
eAS:function eAS(d){this.a=d},
eA5:function eA5(d){this.a=d},
eA6:function eA6(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA8:function eA8(d){this.a=d},
eA9:function eA9(d){this.a=d},
eA4:function eA4(d){this.a=d},
eAa:function eAa(d){this.a=d},
eAb:function eAb(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAf:function eAf(d){this.a=d},
eAg:function eAg(d){this.a=d},
eAh:function eAh(d){this.a=d},
eAi:function eAi(d){this.a=d},
eAj:function eAj(d){this.a=d},
eAe:function eAe(d){this.a=d},
eAk:function eAk(d){this.a=d},
eAd:function eAd(d){this.a=d},
eAl:function eAl(d){this.a=d},
eAc:function eAc(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB0:function eB0(d){this.a=d},
eAX:function eAX(d){this.a=d},
eAW:function eAW(d){this.a=d},
eAY:function eAY(d,e){this.a=d
this.b=e},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAZ:function eAZ(d,e){this.a=d
this.b=e},
eAU:function eAU(d,e){this.a=d
this.b=e},
eB_:function eB_(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBi:function eBi(d,e,f){this.a=d
this.b=e
this.c=f},
eBh:function eBh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBr:function eBr(d,e){this.a=d
this.b=e},
eAJ:function eAJ(d){this.a=d},
eC_:function eC_(d){this.a=d},
bbq:function bbq(d,e){this.b=d
this.a=e},
hJ8(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hJ9(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).kr(0,d),m=B.z(n,B.a2(n).k("E.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.aV(d,v)
return n.charCodeAt(0)==0?n:n},
bw3(){var w=$.bvb,v=$.Ou
$.Ou=v+1
return w+"_"+v},
i0(d,e,f,g,h,i,j){return C.eg(A.bf,!1,4279310375,A.ay,"",i,24,A.bh,A.a1,"",h,C.bw3(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ca,D.eQ,g,e,f)},
nu(d,e,f,g){var w=f*9
return C.i0(D.ex,d-f/2,e-w/32,f,w/16,g,0)},
htr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvb
p=$.Ou
$.Ou=p+1
w.push(new C.ew(q+"_"+p,D.eQ,0,r,1,0.0016,"",24,A.a1,A.bh,A.ay,k,A.bf,null,D.b7,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvb
p=$.Ou
$.Ou=p+1
w.push(new C.ew(q+"_"+p,D.eQ,o,0,0.004,1,"",24,A.a1,A.bh,A.ay,k,A.bf,null,D.b7,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.nu(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nu(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i0(D.b7,0.08,0.08,0.5,0.003,v,0),C.i0(D.b7,0.58,0.08,0.004,0.06,v,0),C.i0(D.b7,0.58,0.14,0.34,0.003,v,0),C.i0(D.b7,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i0(D.b7,0.08,0.8,0.004,0.14,t,0),C.i0(D.b7,0.08,0.94,0.6,0.003,t,0),C.nu(0.58,0.08,0.05,e),C.nu(0.92,0.22,0.05,e),C.nu(0.08,0.8,0.05,f),C.nu(0.68,0.94,0.05,f),C.nu(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i0(D.kB,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i0(D.kB,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i0(D.kB,0.7,0.8,0.22,0.12,w|1140850688,0),C.i0(D.kB,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nu(0.5,0.5,1.5,w|335544320),C.nu(0.5,0.5,1.15,w|402653184),C.nu(0.5,0.5,0.8,v|436207616),C.nu(0.95,0.05,0.4,v|855638016),C.nu(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nu(0.85,0.08,0.7,w|1140850688),C.nu(0.1,0.35,0.5,v|855638016),C.nu(0.9,0.62,0.55,v|771751936),C.nu(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i0(D.b7,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i0(D.b7,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i0(D.b7,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i0(D.b7,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nu(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nu(0.5,0.2,0.65,(w|3422552064)>>>0),C.nu(0.5,0.2,0.95,w|855638016),C.i0(D.b7,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i0(D.b7,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i0(D.jk,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i0(D.jk,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i0(D.jk,0.15,0.86,0.6,0.14,1712265002,0),C.nu(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cBZ[n]
u=A.o.J(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvb
l=$.Ou
$.Ou=l+1
w.push(new C.ew(m+"_"+l,D.eQ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a1,A.bh,A.ay,k,A.bf,null,D.ex,q,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.nu(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i0(D.jk,0.35,-0.1,0.3,0.62,w|855638016,0),C.i0(D.jk,0.05,-0.1,0.3,0.55,v,-0.5),C.i0(D.jk,0.65,-0.1,0.3,0.55,v,0.5),C.nu(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i0(D.b7,0.06,0.04,0.88,0.002,e,0),C.i0(D.b7,0.06,0.96,0.88,0.002,e,0),C.i0(D.b7,0.06,0.04,0.004,0.92,e,0),C.i0(D.b7,0.936,0.04,0.004,0.92,e,0),C.i0(D.b7,0.09,0.07,0.82,0.001,w,0),C.i0(D.b7,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i0(D.jl,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i0(D.jl,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i0(D.jl,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i0(D.b7,0,0,0.3,0.09,w|1140850688,0),C.i0(D.b7,0.7,0.9,0.3,0.1,v|1426063360,0),C.i0(D.b7,0.82,0.04,0.12,0.07,w|771751936,0),C.i0(D.b7,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i0(D.ex,0.62,0.02,0.5,0.16,v,0.6),C.i0(D.ex,0.78,0.12,0.4,0.12,u,0.9),C.i0(D.ex,-0.12,0.8,0.5,0.16,u,-0.6),C.i0(D.ex,-0.05,0.9,0.4,0.12,v,-0.9),C.nu(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i0(D.b7,0.09,0.12,0.16,0.006,e,0),C.i0(D.b7,0.05,0.03,0.9,0.001,w,0),C.i0(D.b7,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hFJ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvb=j
$.Ou=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fdQ()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eg(A.bf,!1,n,A.ay,"ngmy_quote_background",m,24,A.bh,A.a1,"",1,C.bw3(),g,"","",0,!1,"",0,D.b7,l,2,"",0,0,"",D.ca,D.l2,1,0,0))
if(a9)A.d.v(q,C.htr(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hJ8(B.aI(w,p,""))
o=A.a.q(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fdP(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a1))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a1))
if(a0!=null&&a0.length!==0)q.push(C.eg(A.bf,!1,n,A.ay,"ngmy_quote_logo",m,24,A.bh,A.a1,a1,a3*9/16,C.bw3(),a0,"","",0,!1,a2,0,D.b7,l,2,"",0,0,"",D.ca,D.l2,a3,a4,a5))
return C.qR(s,r,0,0,q,j+"_slide",D.pk,"","","",D.d7)},
qQ:function qQ(d,e){this.a=d
this.b=e},
lH:function lH(d,e,f,g,h,i,j,k,l,m){var _=this
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
fdQ:function fdQ(){},
fdP:function fdP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hjH(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bg(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c81(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yr(u,t,s,B.t(w==null?"":w))},
flv(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$flv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fWo){w=1
break}$.fWo=!0
t=4
w=7
return B.b(B.aw(),$async$flv)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jj(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hjH(m)
if(l!=null)J.ci(n,l)}$.Bk.ci(0,B.t(o.a),new C.flw(n))}C.fE1()
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
return B.i($async$flv,v)},
fE1(){var w,v=new B.N(Date.now(),0,!1).bL(-12e8)
for(w=new B.dv($.Bk,$.Bk.r,$.Bk.e);w.C();)J.mY(w.d,new C.f3K(v))
$.Bk.bk($.Bk,new C.f3L())},
aKC(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aKC=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aKC)
case 6:s=a0
m=x.N
l=x.z
r=B.Q(m,l)
for(k=new B.cM($.Bk,B.a2($.Bk).k("cM<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.ci(p,B.D(["at",g.a.a4().aa(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.an("String","ngmy_slides_ai_history_v1",A.Q.aj(n,null)),$async$aKC)
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
return B.i($async$aKC,v)},
hJK(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fE1()
w=$.Bk.ci(0,d,new C.fly())
v=Date.now()
u=B.z(e,B.a2(e).k("ck.E"))
J.p_(w,0,new C.yr(new B.N(v,0,!1),f,u,g))
C.aKC()},
hJH(d){var w,v=$.Bk.h(0,d)
if(v==null||J.ch(v))return
w=J.cB(v)
w.cu(v,0)
if(w.gah(v))$.Bk.W(0,d)
C.aKC()},
yr:function yr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c81:function c81(){},
flw:function flw(d){this.a=d},
f3K:function f3K(d){this.a=d},
f3L:function f3L(){},
fly:function fly(){},
hJM(d){return A.d.dP(D.uN,new C.flB(d),new C.flC())},
hjF(d){var w
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
hjE(d){var w
switch(d.a){case 0:w=D.ag0
break
case 1:w=A.x1
break
case 2:w=A.ah2
break
case 3:w=I.afG
break
case 4:w=A.agu
break
case 5:w=A.kY
break
default:w=null}return w},
hwd(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nk[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nk[w]
if(!B.dl(v.toLowerCase(),t,0))u=B.dl(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hjG(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
q=B.Q(u,t)
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
hJI(d,e,f,g,h){var w=new B.I(D.uN,new C.flu(),x.eC).aG(0,", "),v=""+d,u=C.h0A(h),t=F.ffe(h),s=C.fXZ(g),r=e.q(0,D.G0)?'- New slides get an "emoji".\n':"",q=e.q(0,D.G1)?'- New slides get an "icon3d" from: '+A.d.aG(D.Nk,", ")+".\n":"",p=e.q(0,D.B3)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hJJ(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.I(D.uN,new C.flx(),x.eC).aG(0,", "),p=new B.f4("")
if(e.q(0,D.G0)){p.a=s
w=s}else w=""
if(e.q(0,D.G1))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Nk,", ")+".\n")
if(e.q(0,D.B3))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h0A(d)
v=F.ffe(d)
u=C.fXZ(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aet(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BJ(a3,"{"),a5=J.fwy(a3,"}")
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
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.fju(),m).bZ(0,new C.fjv())
k=B.z(l,l.$ti.k("E.E"))}else k=B.a([],n)
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
f=C.hwd(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a5H(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fm(u).b:q))
p=A.d.bd(D.uN,new C.fjw(r))?r:a7
o=C.f2Z(J.q(w,"logo_frame"),D.Au)
n=C.f2Z(J.q(w,"logo_ring"),D.Ap)
m=C.f2Z(J.q(w,"photo_frame"),D.Au)
l=C.f2Z(J.q(w,"photo_ring"),D.Ap)
return new C.aoc(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_n(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h_I(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.B4),f7=f6?C.hqh():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f6()
v.dY(f7.w+1)
u=f7.a
t=B.bi(u.b,!0,x.dL)
A.d.fN(t,v)
s=u.c
s=new C.nh("luxe",u.a,A.kY,t,u.e,u.f,B.a([s,u.d,s],x.t),D.d7)
w=s}if(w==null)w=C.hJM(f9.b)
r=g2.q(0,D.a1e)||f6
q=g2.q(0,D.G0)
p=g2.q(0,D.P9)
o=new C.fdU()
n=B.a([],x.g)
m=new C.fdX(o,w,r)
l=new C.fdW(o,r)
k=new C.fdV(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.bd(u,new C.fdT(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.J(b1,a3.length)]
b4=A.o.J(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.J(b1,5)
b9=D.cDl[b8]
c0=D.cCs[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ebY.q(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.m5,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pl,500,f2,f0))
c1.push(l.$8$fx$key(D.b7,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.P6
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ex,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kB,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.b7,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.B1
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ex,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.m5,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pl,500,f2,f0))
d3=D.m4
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ex,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.b7,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tf:D.ca
c1.push(new C.ew(b4,D.a1c,0.64,0.05,0.27,0.9,g1,24,A.a1,A.bh,A.ay,4279310375,A.bf,e4,D.b7,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.m4
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ex,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.m5,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pl,450,f2,f0))
c1.push(l.$8$fx$key(D.b7,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.P6
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ex,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ex,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.b7,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.b7,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.FZ,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.m4}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.d7,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hrT(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.J(b1,b8.length)]}else b8=r?D.cZH[A.o.J(b1,6)]:s
n.push(new C.ll(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Am(e4,e4,e4,e4,D.B0,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fgk(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fgk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.B3)
n=e.q(0,D.G1)
if(!o&&!n){u=D.a09
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fgn(o,s[r],n,$.hv1,r).$0())
s=B.Q(x.r,x.aH)
m=J
w=3
return B.b(B.iA(t,x.e),$async$fgk)
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
return B.i($async$fgk,v)},
ffh(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$ffh=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hJJ(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aJZ(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$ffh)
case 3:u=s.aKj(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ffh,v)},
bxC(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bxC=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.ee(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.G(0,(q==null?r.a(q):q).b)}C.hJK(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aet(i,"colorful")
t=C.hJI(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aJZ(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h2),$async$bxC)
case 3:u=o.aKj(m,f,h,g,D.dCP,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxC,v)},
aJZ(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aJZ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ut(null,""),$async$aJZ)
case 3:n=i
if(A.a.i(n).length===0)throw B.O("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mC(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qh(t,d,g,null),$async$aJZ)
case 7:q=i
p=q.b
if(p!=null){o=C.aet(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.O(s!=null&&B.Jf(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aJZ,v)},
aKj(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKj=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.B3)||e.q(0,D.G1)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d8(e,x.Q)
t.W(0,D.B3)}w=6
return B.b(C.fgk(d,t),$async$aKj)
case 6:s=k
w=4
break
case 5:s=D.a09
case 4:t=d.c
w=A.d.bd(t,new C.eY8())?7:9
break
case 7:r=$.h1s
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aKj)
case 10:q=k
p=q!=null?A.Q.aj(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h_I(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hjG(new C.aoc(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.R(m).k("I<1,n>")
t=B.z(new B.I(m,new C.eY9(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jA<ck.E,n>")
t=B.z(new B.jA(e,new C.eYa(),t),t.k("E.E"))
l.cy=t
l.ay=e.q(0,D.P9)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKj,v)},
fGB(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a_7[v]
if(A.d.q(t,u.b))w.G(0,u)}return w},
hNz(d){return B.c1(A.K,new C.fu0(),d,!0,!0,!0,null,!1,!1,x.I)},
hqT(d,e){var w,v=e.toLowerCase()
if(A.a.c5(v,".png"))w="image/png"
else w=A.a.c5(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cM.gcq().aE(d)},
hNy(d,e,f){return B.c1(A.K,new C.fu_(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fGC(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fGD(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
f2Z(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bd(e,new C.f3_(w))?w:""},
fXZ(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h1q(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aet(a1==null?"":a1,a0),a3=C.aet(a5,a0)
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
for(v=t.length,r=a4.r,q=B.R(r).k("a3<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.qD(new B.a3(r,new C.flD(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("E.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.T(m.b,l.b),new B.T(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.T(j[h],i[h]))
k.push(new B.T(m.e,l.e))
g=B.z(new B.a3(k,new C.flE(),v),r)
A.d.aY(g,new C.flF())
if(g.length===0)continue
f=new C.flG(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hK2(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAt
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEK
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEL
return null},
fXA(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bK(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hJN(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nx
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cI)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fXA(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fXA(n,i,v,u))if(n.w>10){f=h+1
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
hJL(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aet(o,"colorful")
if(n==null)throw B.O("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_7[r]
if(q.b===s)w.G(0,q)}}v=C.fGC(e)
u=C.fGD(e)
p=C.h_I(n,D.a09,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.R(o).k("I<1,n>")
o=B.z(new B.I(o,new C.flz(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jA<ck.E,n>")
o=B.z(new B.jA(w,new C.flA(),o),o.k("E.E"))
p.cy=o
p.ay=w.q(0,D.P9)
return p},
hNl(d,e,f){return B.c1(A.K,new C.fte(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hqh(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f6()
s.dY(t)
w=D.cig[s.aF(10)]
v=new C.e0I(s)
u=x.N
return new C.e0H(w,s.aF(4),J.fm(v.$1$2(D.cHo,1,x.ff)),w.r[s.aF(3)],v.$1$2(D.cVR,2+s.aF(2),u),v.$1$2(D.cPT,2,u),v.$1$2(D.cYo,4,x.fP),t)},
hrT(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f6()
a1.dY(a5.w+a3*13)
w=new C.eUI(a4)
v=new C.eUK(a4,d)
u=new C.eUJ(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cI){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fE(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fE(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.J(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.ex,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a_n(a0,52),"lux_spot",a5.vB(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.b7,0,0,1,1,0,"lux_back",a5.vB(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.b7,0,0,1,1,0,"lux_back2",a5.aAK(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.022,0.038,0.956,0.924,0,g,a5.vB(0,f),D.d7,150,C.a_n(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.018,0.032,0.964,0.936,0,g,a5.vB(0,f),D.d7,120,C.a_n(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.d7,260,C.a_n(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.b7,0,0,1,1,0,"lux_filigree",a5.vB(0,"filigree"),D.d7,200))
break
default:a2.push(w.$10$anim$delay(D.b7,0.08,0.06,0.84,0.004,C.a_n(a0,208),"lux_rule",a5.aAK(0,"shimmer",r),D.te,150))
a2.push(w.$10$anim$delay(D.b7,0.08,0.936,0.84,0.004,C.a_n(a0,144),"lux_rule2","",D.FZ,220))}l=!A.d.bd(a2,new C.eUH())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vB(0,"crest"),350))
else{o=a1.hd()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vB(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_n(r,242)
j=a5.vB(0,"orbit")
i=s===D.b7?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pl,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ex,t-0.007,0.9495,0.014,0.025,C.a_n(r,242),"lux_g2",a5.vB(0,"orbit"),D.pl,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.b7,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fE(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.b7,0,0,1,1,0,"lux_velvet",a5.vB(0,"velvet")))},
nh:function nh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
flB:function flB(d){this.a=d},
flC:function flC(){},
v5:function v5(d,e){this.a=d
this.b=e},
a5H:function a5H(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoc:function aoc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flu:function flu(){},
flx:function flx(){},
fju:function fju(){},
fjv:function fjv(){},
fjw:function fjw(d){this.a=d},
fdU:function fdU(){},
fdX:function fdX(d,e,f){this.a=d
this.b=e
this.c=f},
fdW:function fdW(d,e){this.a=d
this.b=e},
fdV:function fdV(d,e){this.a=d
this.b=e},
fdT:function fdT(d){this.a=d},
fgn:function fgn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgl:function fgl(d){this.a=d},
fgm:function fgm(d){this.a=d},
eY8:function eY8(){},
eY9:function eY9(){},
eYa:function eYa(){},
fu0:function fu0(){},
Za:function Za(d){this.a=d},
aE3:function aE3(d,e,f,g,h){var _=this
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
eHV:function eHV(d,e,f){this.a=d
this.b=e
this.c=f},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHS:function eHS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eHN:function eHN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eI8:function eI8(d){this.a=d},
eI9:function eI9(d){this.a=d},
eI7:function eI7(d){this.a=d},
eIa:function eIa(d){this.a=d},
eI6:function eI6(d){this.a=d},
eIc:function eIc(d){this.a=d},
eI5:function eI5(d,e){this.a=d
this.b=e},
eId:function eId(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eIe:function eIe(d){this.a=d},
eI3:function eI3(d){this.a=d},
eIf:function eIf(d){this.a=d},
eI2:function eI2(d,e){this.a=d
this.b=e},
eIg:function eIg(d){this.a=d},
eI1:function eI1(d,e){this.a=d
this.b=e},
eIh:function eIh(d){this.a=d},
eI0:function eI0(d){this.a=d},
eIi:function eIi(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eIj:function eIj(d){this.a=d},
eIb:function eIb(d){this.a=d},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e,f){this.a=d
this.b=e
this.c=f},
eHK:function eHK(d,e,f){this.a=d
this.b=e
this.c=f},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
fu_:function fu_(d,e){this.a=d
this.b=e},
Z9:function Z9(d,e,f){this.c=d
this.d=e
this.a=f},
aE2:function aE2(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eHu:function eHu(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d){this.a=d},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e){this.a=d
this.b=e},
eHA:function eHA(d,e){this.a=d
this.b=e},
f3_:function f3_(d){this.a=d},
aYp:function aYp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAI:function aAI(d,e,f){this.c=d
this.d=e
this.a=f},
bg0:function bg0(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0K:function e0K(d){this.a=d},
e0J:function e0J(){},
bdD:function bdD(d,e){this.b=d
this.a=e},
flD:function flD(d){this.a=d},
flE:function flE(){},
flF:function flF(){},
flG:function flG(d){this.a=d},
aoM:function aoM(d,e){this.a=d
this.b=e},
flz:function flz(){},
flA:function flA(){},
fte:function fte(d,e){this.a=d
this.b=e},
Xz:function Xz(d,e,f){this.c=d
this.d=e
this.a=f},
aya:function aya(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
daf:function daf(d){this.a=d},
dag:function dag(d){this.a=d},
dah:function dah(d,e){this.a=d
this.b=e},
dak:function dak(d){this.a=d},
dal:function dal(d,e){this.a=d
this.b=e},
daj:function daj(d,e){this.a=d
this.b=e},
dam:function dam(d){this.a=d},
dai:function dai(d,e){this.a=d
this.b=e},
bof:function bof(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e0H:function e0H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e0I:function e0I(d){this.a=d},
eUI:function eUI(d){this.a=d},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUH:function eUH(){},
aIy:function aIy(){},
fFs(d){var w,v,u
try{w=A.Q.aC(0,d,null)
if(x.f.b(w)){v=B.uW(B.Y(w,x.N,x.z))
return v}}catch(u){}return null},
aYl:function aYl(d,e,f){this.c=d
this.d=e
this.a=f},
bhC:function bhC(d,e){this.c=d
this.a=e},
hGb(d){return A.d.dP(D.F4,new C.ff0(d),new C.ff1())},
hGc(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aV(t,6)
if(w.length===0)return null
v=new B.a3(D.F4,new C.ff2(w),x.b4)
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
ff0:function ff0(d){this.a=d},
ff1:function ff1(){},
ff2:function ff2(d){this.a=d},
mo(d,e,f,g,h){return new C.Df(f,g,d)},
ht1(d){var w=d.z,v=B.R(w).k("a3<1>")
w=B.z(new B.a3(w,new C.eWG(),v),v.k("E.E"))
d.z=w
d.x=""},
dm(d,e){var w=$.IF
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dn(d,e,f,g,h,i,j,k,l){return C.eg(A.bf,!1,4279310375,A.ay,"",d,24,A.bh,A.a1,"",e,"design_"+C.cx(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ca,D.eQ,j,k,l)},
h_v(d,e){var w
C.ht1(d)
w=A.d.dP($.bzw(),new C.fcQ(e),new C.fcR())
$.IF=w.a
d.x=w.a;++d.y
try{w.bH(d)}finally{$.IF=""}d.z=B.bi(d.z,!0,x.F)},
Df:function Df(d,e,f){this.a=d
this.b=e
this.e=f},
eWG:function eWG(){},
fl5:function fl5(){},
fl6:function fl6(){},
fl7:function fl7(){},
fli:function fli(){},
fln:function fln(){},
flo:function flo(){},
flp:function flp(){},
flq:function flq(){},
flr:function flr(){},
fls:function fls(){},
flt:function flt(){},
fl8:function fl8(){},
fl9:function fl9(){},
fla:function fla(){},
flb:function flb(){},
flc:function flc(){},
fld:function fld(){},
fle:function fle(){},
flf:function flf(){},
flg:function flg(){},
flh:function flh(){},
flj:function flj(){},
flk:function flk(){},
fll:function fll(){},
flm:function flm(){},
fcQ:function fcQ(d){this.a=d},
fcR:function fcR(){},
iI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eg(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.b7,4280172719,2,m,n,0,"",o,D.cI,p,q,r)},
BB(d,e,f,g,h,i,j,k,l){return C.eg(A.bf,!1,4279310375,A.ay,"",d,24,A.bh,A.a1,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ca,D.eQ,j,k,l)},
byh(){var w=new B.N(Date.now(),0,!1)
return A.hW[B.bB(w)-1]+" "+B.bN(w)+", "+B.bw(w)},
em:function em(d,e,f){this.a=d
this.b=e
this.c=f},
bvO(d){return new B.iD((A.o.ar(d,24)&255)/255,(A.o.ar(d,16)&255)/255,(A.o.ar(d,8)&255)/255,(d&255)/255)},
hxN(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.ak5(A.cw.aE(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hxR(d){var w=d.r
if(!d.cy)return w
return new B.I(B.a(w.split("\n"),x.s),new C.f2N(),x.dv).aG(0,"\n")},
hxQ(d){switch(d.a){case 2:return A.mQ
case 1:case 5:return A.emc
default:return A.Qs}},
hxK(d){switch(d.a){case 2:return A.tM
case 1:case 5:return A.S9
default:return A.a5S}},
hxO(d,e){var w,v=null,u=d.ay,t=A.o.ar(u,24),s=A.o.ar(d.ch,24),r=(t&255)===0?v:C.bvO(u),q=(s&255)===0?v:C.bvO(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n0(q,p,A.ki)
w=new B.p0(t,t,t,t)}switch(d.ax.a){case 1:return B.l9(v,v,v,new B.ki(r,w,v,A.a75,v),v,v,v,v)
case 4:return u?new B.fG(v,v,v):B.w5(B.l9(v,v,q,v,p+0.4,v,v,v))
default:return B.l9(v,v,v,new B.ki(r,w,B.uz(4),A.hk,v),v,v,v,v)}},
hxM(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eQ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hxK(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hxR(d)
t=C.bvO(d.Q)
s=d.x.a>=700?A.eb:A.uh
r=d.y===A.cF?A.wD:A.aeA
q=d.z
p=new B.BM(w,l,l,B.f0(u,l,l,l,B.fX(l,t,1===q.a?A.aIL:A.aIK,l,l,l,l,l,l,A.dm,l,l,v,r,s,l,!0,l,l,l,l),C.hxQ(d.as)))
break
case 1:case 4:o=C.hxN(d.at)
n=i===D.l2&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.w5(B.f0(w,l,l,l,B.fX(l,A.qF,l,l,l,l,l,l,l,A.dm,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gb(o,n?A.a71:A.Su,l,l)
break
case 3:w=new B.n0(A.Gg,1,A.ki)
u=B.uz(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.l9(A.tM,B.f0(t,l,l,l,B.fX(l,D.dNc,l,l,l,l,l,l,l,A.dm,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mQ),l,new B.ki(E.aBs,new B.p0(w,w,w,w),u,A.hk,l),l,l,l,l)
break
case 2:p=C.hxO(d,e)
break
case 5:p=C.hxL(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fSu(-w,p)
w=i===D.cI
if(w){m=A.o.ar(d.Q,24)&255
if(m<255)p=new B.apv(m/255,p)}if(w)return new F.vc(k,l,j,l,new B.Qg(new B.kh(g,g,f,1/0),p))
if(i===D.kA){i=new B.n0(A.Gg,1,A.ki)
i=B.l9(A.tM,p,l,new B.ki(A.oi,new B.p0(i,i,i,i),B.uz(4),A.hk,l),l,l,D.biY,l)}else i=p
return new F.vc(k,l,j,l,new B.fG(g,f,i))},
hxP(d,e,f,g){var w,v=null,u=C.bvO(d.e),t=d.f
t=B.a([F.fR8(t!=null?B.l9(v,v,v,new B.ki(v,v,v,A.hk,new B.aSS(E.Sa,A.a5N,B.a([u,C.bvO(t)],x.cR),v)),v,v,v,v):B.l9(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.I(w,new C.f2M(f,g),B.R(w).k("I<1,f5>")))
return F.ckx(t)},
fGF(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fGF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a1Z(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.Up(A.uX,A.Gd,D.bk0,null,null,null,!1,null)
o=new B.As(o,new C.flM(607,787,p,d))
o.L1(n,null)
r.push(o)}u=n.jz(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGF,v)},
hxL(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fFs(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagv()
if(h==null)h=A.arE
j=B.rN(4279308564)
w=B.uz(18)
v=new B.n0(B.rN(4287531653),3,A.ki)
u=i.length===0?"My links":i
u=B.a([B.w5(B.f0(u,m,m,m,B.fX(m,A.oi,m,m,m,m,m,m,m,A.dm,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.w5(B.f0(A.a.i(l.c),m,m,m,D.et1,m)))
u.push(new B.fG(m,8,m))
for(t=B.dg(h,0,B.dL(8,"count",x.r),B.R(h).c),s=t.$ti,t=new B.bS(t,t.gH(0),s.k("bS<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rN(4280690220)
o=new B.a6V(8,8)
n=A.a.i(r.b)
u.push(new B.ni(D.bdm,new C.atF(new C.afu(q),B.l9(m,B.f0(n.length===0?A.a.i(r.c):n,m,m,m,D.ev9,A.mQ),m,new B.ki(p,m,new B.afV(o,o,o,o),A.hk,m),m,m,D.bjl,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.w5(B.f0(k,m,m,m,D.euu,m))
u.push(new C.atF(C.h7Z(k),t))}return B.l9(m,B.xL(u,A.Ji,A.l1),m,new B.ki(j,new B.p0(v,v,v,v),w,A.hk,m),m,m,D.bea,m)},
f2N:function f2N(){},
f2M:function f2M(d,e){this.a=d
this.b=e},
flM:function flM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeg(d){var w,v
for(w=0;w<32;++w){v=D.EW[w]
if(v.a===d)return v}return null},
fV4(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aE(A.a.aV(d,u+1))
return w}catch(v){return null}},
cL(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h2y(d,e){return B.a7(d,!1).ct(B.eO(new C.frS(e),!0,null,x.fB))},
h2x(d,e){return B.c1(A.K,new C.frR(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iL:function iL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D6:function D6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LB:function LB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfn:function bfn(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
dKs:function dKs(d){this.a=d},
dKr:function dKr(d,e,f){this.a=d
this.b=e
this.c=f},
dKq:function dKq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmQ:function bmQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGI:function eGI(d,e){this.a=d
this.b=e},
baw:function baw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWe:function aWe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2F:function c2F(){},
c2G:function c2G(d){this.a=d},
c2H:function c2H(d,e,f){this.a=d
this.b=e
this.c=f},
c2I:function c2I(d,e,f){this.a=d
this.b=e
this.c=f},
frS:function frS(d){this.a=d},
X7:function X7(d,e){this.c=d
this.a=e},
awB:function awB(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d_M:function d_M(d,e,f){this.a=d
this.b=e
this.c=f},
d_R:function d_R(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_T:function d_T(d){this.a=d},
d_P:function d_P(d,e){this.a=d
this.b=e},
d_U:function d_U(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_N:function d_N(d,e){this.a=d
this.b=e},
d_W:function d_W(d,e){this.a=d
this.b=e},
frR:function frR(d){this.a=d},
frQ:function frQ(d){this.a=d},
frP:function frP(d,e,f){this.a=d
this.b=e
this.c=f},
frO:function frO(d,e){this.a=d
this.b=e},
aI1:function aI1(){},
hNx(d){return B.c1(A.K,new C.ftZ(),d,!0,!0,!0,null,!1,!1,x.N)},
ftZ:function ftZ(){},
Xs:function Xs(d){this.a=d},
bc_:function bc_(d){this.d=d
this.c=this.a=null},
d6f:function d6f(d){this.a=d},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6h:function d6h(d){this.a=d},
huo(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.b0(w)}return D.w4},
hI2(d){var w,v=A.d.gI(d.split("@"))
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
hI1(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.huo(d)
switch(q){case"shimmer":return B.nm(A.a6d,g,new C.fis(p,A.k.J(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bbn(e,f,p,r),A.as),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.e4(A.B,B.d5(C.fxQ(g,B.a2P(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bb4(e,p,r),A.as),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d5(B.ez(A.B,e*0.5,B.e4(A.B,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.df()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.md(Math.sin(e)*0.3)
return B.dO(B.fp(A.B,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.bjN(e,f,p,r),A.as),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.b64(e,f,p,r),A.as),!0,r),g],x.p),r)
case"aurora":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.b5H(e,f,p,r),A.as),!0,r),g],x.p),r)
case"velvet":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bqz(e,p,r),A.as),!0,r)],x.p),r)
case"sparkle":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bnD(e,f,p,r),A.as),!0,r)],x.p),r)
case"sheen":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bmM(e,p,r),A.as),!0,r)],x.p),r)
case"filigree":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bap(e,p,r),A.as),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.B,r,A.a9,A.h,B.a([B.bU(0,B.e8(B.e4(A.B,B.bQ(r,new B.o(r,r,r,r,r,new B.bR(A.B,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.b6),1.6+s*0.15,r,r),!0,r),0,0,0),B.ez(A.B,s*0.06,B.e4(A.B,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fis:function fis(d,e){this.a=d
this.b=e},
bbn:function bbn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb4:function bb4(d,e,f){this.b=d
this.c=e
this.a=f},
bjN:function bjN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b64:function b64(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b5H:function b5H(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqz:function bqz(d,e,f){this.b=d
this.c=e
this.a=f},
bnD:function bnD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmM:function bmM(d,e,f){this.b=d
this.c=e
this.a=f},
bap:function bap(d,e,f){this.b=d
this.d=e
this.a=f},
d_t:function d_t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wD:function wD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fiv(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kA},
hI7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fiw())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gI(B.aMM(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hI6(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d_(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d_(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
adU(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adU=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.R(a4).k("a3<1>")
e=B.z(new B.a3(a4,new C.fb8(),f),f.k("E.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(A.dw,new C.fb9(e),d,!0,!0,!1,A.l3,!1,!1,x.N),$async$adU)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fHf(d),$async$adU)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Search states\u2026","",A.jF,"Choose state"),$async$adU)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fGc(s)
if(p==null)p=A.d.gI(D.O3)
f=C.cx()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cx()
m=p.e
l=C.fix(p.d)
k=x.u
j=B.a([C.eg(A.bf,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bh,A.a1,"",1,C.cx(),l,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l2,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Bn(i,0.016,D.kB,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bn(0,0.058,D.ex,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bn(0,0.058,D.ex,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.IQ("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.IQ("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a1,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fDm(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvh("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.ZY("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.ZY("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.ZY("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.ZY("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvh("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bn(m,0.082,D.b7,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cx()
k.push(C.eg(A.bf,!1,i,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bh,A.cp,"",0.074,g,null,"","",0,!1,"",0,D.b7,4280172719,2,y.O,0,0,"",D.ca,D.cI,0.78,0.11,0.388))
A.d.v(k,C.fDm(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvh("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fX0("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fX0("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.ZY("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.ZY("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvg("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvg("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvh("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.IQ("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.IQ("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvg("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvg("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvh("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.ZY("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvg("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.ZY("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fDm(0.22,0.83,0.56,4291404327,i),h)
h.push(C.IQ("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.IQ("Nakala ya Hati",A.L,4291404327,9,A.a1,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Am(null,null,null,null,D.nx,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qR(m,null,0,0,j,n,D.pk,"","","Hati ya Ndoa",D.d7)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
fiw:function fiw(){},
fb8:function fb8(){},
fb9:function fb9(d){this.a=d},
fb6:function fb6(d){this.a=d},
fb7:function fb7(d){this.a=d},
hxi(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hxh(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.m9
case"lineThrough":return A.yc
default:return A.ay}},
eg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ew(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
fYZ(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NQ[w]
if(v.b===u)return v}return D.d7},
htO(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.czw[w]
if(v.b===u)return v}return D.cI},
hzX(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cWr[w]
if(v.b===u)return v}return D.b7},
qR(d,e,f,g,h,i,j,k,l,m,n){return new C.ll(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fPT(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hvG(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.M(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.M(s)
r=C.fYZ(d.h(0,"transition"))
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
else{n=J.d2(n,x.f)
n=B.cy(n,new C.c7Z(),n.$ti.k("E.E"),x.F)
n=B.z(n,B.a2(n).k("E.E"))}return C.qR(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hvG(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajF[w]
if(v.b===u)return v}return D.m4},
Am(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.N(Date.now(),0,!1):a4
return new C.hR(p,t,a1,h,i,w,a0==null?B.a([C.qR(4294967295,null,0,0,null,C.cx(),D.pk,"","","",D.d7)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
TR(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hs7(a6.h(0,"aspectRatio"))
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
o=C.kf(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kf(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b4(f,new C.c7M(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c7N(),x.N)
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
else{g=J.d2(g,x.f)
g=B.cy(g,new C.c7O(),g.$ti.k("E.E"),x.bt)
g=B.z(g,B.a2(g).k("E.E"))}return C.Am(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qR(4294967295,a3,0,0,a3,C.cx(),D.pk,"","","",D.d7)],x.g):g,v,p,o,s)},
kf(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hs7(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cXc[w]
if(v.b===u)return v}return D.B0},
cx(){var w=Date.now(),v=$.iN
$.iN=v+1
return""+1000*w+"_"+v},
c8f(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.B1){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,40,A.bh,A.u,"",0.2,v,p,"","",0,!1,"",0,D.b7,m,2,o,0,0,"",D.ca,D.cI,0.84,0.08,0.3)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,20,A.bh,A.cp,"",0.12,u,p,"","",0,!1,"",0,D.b7,m,2,"Click to add subtitle",0,0,"",D.ca,D.cI,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cx()
v=C.eg(A.bf,!1,f.d.l(),A.ay,"",n,32,A.bh,A.u,"",0.14,v,p,"","",0,!1,"",0,D.b7,m,2,o,0,0,"",D.ca,D.cI,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bf,!0,f.e.l(),A.ay,"",n,20,A.bh,A.cp,"",0.68,u,p,"","",0,!1,"",0,D.b7,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ca,D.cI,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cx()
v=C.eg(A.bf,!1,f.d.l(),A.ay,"",n,30,A.bh,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b7,m,2,"Two Column Slide",0,0,"",D.ca,D.cI,0.88,0.06,0.06)
u=C.cx()
t=f.e
u=C.eg(A.bf,!0,t.l(),A.ay,"",n,18,A.bh,A.a1,"",0.7,u,p,"","",0,!1,"",0,D.b7,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ca,D.cI,0.42,0.06,0.22)
s=C.cx()
A.d.v(w,B.a([v,u,C.eg(A.bf,!0,t.l(),A.ay,"",n,18,A.bh,A.a1,"",0.7,s,p,"","",0,!1,"",0,D.b7,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ca,D.cI,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.G(d.z,C.eg(A.L,!1,4294967295,A.ay,"",n,42,A.bh,A.u,"",0.2,C.cx(),p,"","",0,!1,"",0,D.b7,m,2,"Section Header",0,0,"",D.ca,D.cI,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cx()
v=C.eg(A.bf,!1,f.d.l(),A.ay,"",n,30,A.bh,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b7,m,2,"Compare",0,0,"",D.ca,D.cI,0.88,0.06,0.06)
u=C.cx()
t=f.c
u=C.eg(A.bf,!1,l,A.ay,"",t.j(0.12).l(),24,A.bh,A.a1,"",0.68,u,p,"","",0,!1,"",0,D.b7,t.l(),2,"",0,0,"",D.ca,D.eQ,0.42,0.06,0.22)
s=C.cx()
r=f.e
s=C.eg(A.bf,!1,r.l(),A.ay,"",n,20,A.bh,A.O,"",0.6,s,p,"","",0,!1,"",0,D.b7,m,2,"Option A",0,0,"",D.ca,D.cI,0.38,0.08,0.26)
q=C.cx()
t=C.eg(A.bf,!1,l,A.ay,"",t.j(0.06).l(),24,A.bh,A.a1,"",0.68,q,p,"","",0,!1,"",0,D.b7,t.j(0.5).l(),2,"",0,0,"",D.ca,D.eQ,0.42,0.52,0.22)
q=C.cx()
A.d.v(w,B.a([v,u,s,t,C.eg(A.bf,!1,r.l(),A.ay,"",n,20,A.bh,A.O,"",0.6,q,p,"","",0,!1,"",0,D.b7,m,2,"Option B",0,0,"",D.ca,D.cI,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,36,A.bh,A.u,"",0.35,v,p,"","",0,!1,"",0,D.b7,m,2,"TERM / QUESTION",0,0,"",D.ca,D.cI,0.8,0.1,0.12)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,22,A.bh,A.cp,"",0.35,u,p,"","",0,!1,"",0,D.b7,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ca,D.cI,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cx()
v=C.eg(A.bf,!1,f.d.l(),A.ay,"",n,28,A.bh,A.u,"",0.18,v,p,"","",0,!1,"",0,D.b7,m,2,"Quiz Question",0,0,"",D.ca,D.cI,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bf,!1,f.e.l(),A.ay,"",n,20,A.bh,A.a1,"",0.62,u,p,"","",0,!1,"",0,D.b7,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ca,D.cI,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cx()
v=C.eg(A.bf,!1,f.d.l(),A.ay,"",n,26,A.bh,A.u,"",0.1,v,p,"","",0,!1,"",0,D.b7,m,2,"Worksheet / Assignment",0,0,"",D.ca,D.cI,0.88,0.06,0.04)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bf,!1,f.e.l(),A.ay,"",n,18,A.bh,A.a1,"",0.78,u,p,"","",0,!1,"",0,D.b7,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ca,D.cI,0.88,0.06,0.16)],x.u))
break}},
hjQ(d){return A.d.dP(D.ZO,new C.c8g(d),new C.c8h())},
hjN(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ci(v,C.TR(B.Y(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fzW(d,e){var w,v,u,t=B.Q(x.N,x.I),s=new C.c8b(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("bf<2>")
u=B.z(new B.bf(t,w),w.k("E.E"))
A.d.aY(u,new C.c8a())
return u},
fPW(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c86()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
aod(d){return C.hjL(d)},
hjL(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aod=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c89()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a09(m),$async$aod)
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
return B.b(B.aw(),$async$aod)
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
case 11:o=l.$1($.fPV.h(0,m))
n=C.fzW(C.fzW(j,r),o)
if(n.length===0){u=C.fPW(C.fPW(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aod,v)},
c85(d){return C.hjK(d)},
hjK(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c85=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c85)
case 7:r=f
q=r.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kl(q,B.R(q).c)
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
return B.i($async$c85,v)},
aYr(d,e){return C.hjM(d,e)},
hjM(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYr=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aYr)
case 6:s=g
q=s.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.G(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.Jz(r,J.aa(r)-500):r
w=7
return B.b(s.an("StringList","ngmy_slides_deleted_"+p,o),$async$aYr)
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
return B.i($async$aYr,v)},
TS(d,e){return C.hjO(d,e)},
hjO(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$TS=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fPU.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aod(a3),$async$TS)
case 5:p=a6
case 4:w=6
return B.b(C.c85(a3),$async$TS)
case 6:o=a6
n=B.Q(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbm())k=f===g.gbm()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("bf<2>")
l=m.k("a3<E.E>")
e=B.z(new B.a3(new B.bf(n,m),new C.c8c(o),l),l.k("E.E"))
A.d.aY(e,new C.c8d())
$.fPU.m(0,a0,e)
n=B.R(e).k("I<1,a0<n,@>>")
n=B.z(new B.I(e,new C.c8e(),n),n.k("ai.E"))
r=A.Q.aj(n,null)
$.fPV.m(0,a0,r)
t=8
w=11
return B.b(B.aeH(a0,r),$async$TS)
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
return B.b(B.aw(),$async$TS)
case 16:q=a6
w=17
return B.b(q.an("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$TS)
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
return B.i($async$TS,v)},
H1:function H1(d,e){this.a=d
this.b=e},
aob:function aob(d,e){this.a=d
this.b=e},
tV:function tV(d,e){this.a=d
this.b=e},
m4:function m4(d,e){this.a=d
this.b=e},
hm:function hm(d,e){this.a=d
this.b=e},
ew:function ew(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ll:function ll(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c8_:function c8_(){},
c80:function c80(){},
c7Z:function c7Z(){},
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
c7P:function c7P(){},
c7Q:function c7Q(){},
c7M:function c7M(){},
c7N:function c7N(){},
c7O:function c7O(){},
js:function js(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c8g:function c8g(d){this.a=d},
c8h:function c8h(){},
c8b:function c8b(d){this.a=d},
c8a:function c8a(){},
c86:function c86(){},
c87:function c87(){},
c88:function c88(){},
c89:function c89(){},
c8c:function c8c(d){this.a=d},
c8d:function c8d(){},
c8e:function c8e(){},
hIi(d,e){var w=x.N,v=B.Q(w,x.F)
w=new C.fj4(e,v,d,B.aY(w))
w.$1(new C.fj0())
w.$1(new C.fj1())
w.$1(new C.fj2())
w.$1(new C.fj3())
return v},
fj4:function fj4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fj0:function fj0(){},
fj1:function fj1(){},
fj2:function fj2(){},
fj3:function fj3(){},
aYo:function aYo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7V:function c7V(d){this.a=d},
c7U:function c7U(){},
c7W:function c7W(){},
c7X:function c7X(d,e){this.a=d
this.b=e},
c7Y:function c7Y(d){this.a=d},
alu:function alu(d,e){this.c=d
this.a=e},
bfa:function bfa(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dxN:function dxN(){},
aHO:function aHO(){},
c82(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c82=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.ejA)
u=!1
w=1
break}u=B.kD(!1,d,t,!1,null,A.a1g,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c82,v)},
hjI(d){var w=A.d.be(D.F4,new C.c83(d))
if(w<0)return!0
return w>=4},
hjJ(d){var w=A.d.be($.bzw(),new C.c84(d))
if(w<0)return!0
return w>=5},
c83:function c83(d){this.a=d},
c84:function c84(d){this.a=d},
hJX(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xC()
$.pH().p6(t,new C.flT(s),!0)
u=B.a([B.Cs(v,A.po,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.etu,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nl,v,v,v),v,v,4,v,4,v))}return new B.am(A.V,v,A.aX,A.q,u,v)},
flT:function flT(d){this.a=d},
hJy(){return C.fGy()},
hGA(){return C.bxA()},
hIz(){return C.fGp()},
aLT(d,e,f){var w=0,v=B.j(x.H),u
var $async$aLT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fkZ(d,f),$async$aLT)
case 5:w=1
break
case 4:if(d.e!=null)d.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aLT,v)},
fkZ(d,e){var w=0,v=B.j(x.H),u
var $async$fkZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bvP
if(u==null)u=e+".pdf"
w=2
return B.b(B.c1(A.K,new C.fl_(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fkZ)
case 2:return B.h(null,v)}})
return B.i($async$fkZ,v)},
fl_:function fl_(d,e){this.a=d
this.b=e},
aaT:function aaT(d,e,f){this.c=d
this.d=e
this.a=f},
eaq:function eaq(d,e){this.a=d
this.b=e},
ear:function ear(d,e){this.a=d
this.b=e},
eas:function eas(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
abb:function abb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYn(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYm(g,m,f,d,e,h,l,k,j,o,i,null)},
h0P(d){return B.cj(new C.fj_(d))},
fGA(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hJG(d){if(d===D.ca)return"None"
return C.fGA(d)},
bwk(d,e,f,g){return C.hA3(d,e,f,g)},
hA3(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwk=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a7(d,!0)
if($.fDF&&t.pH())t.eC()
$.fDF=!0
s.a=null
w=3
return B.b(B.hM(A.bi,!0,"Animation preview",d,new C.f55(s,e,g,f),null,A.eE,!0,x.H),$async$bwk)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fDF=!1
case 1:return B.h(u,v)}})
return B.i($async$bwk,v)},
fuN(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fuN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bN,x.w).w.a.a*0.88,280,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fGA(f)+" Slide transition preview"
s=s?Aa.Dn:A.u5
w=3
return B.b(C.bwk(d,s,new B.a4(t,t*0.56,B.bu(B.m(14),new C.aFr(f,null),A.ap),null),r),$async$fuN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fuN,v)},
h07(d,e,f){var w,v,u=null,t=A.co.aq(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d5(f,t)
case 2:case 17:return B.dO(B.d5(f,t),new B.v((1-t)*48,0))
case 3:return B.dO(B.d5(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dO(B.d5(f,t),new B.v(0,(1-t)*36))
case 5:return B.dO(B.d5(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e4(A.B,B.d5(f,t),0.5+t*0.5,u,u)
case 7:return B.e4(A.B,B.d5(f,t),1.4-t*0.4,u,u)
case 8:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fp(A.B,B.d5(f,t),u,w,!0)
case 9:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jw((1-t)*1.2)
return B.fp(A.B,B.d5(f,t),u,w,!0)
case 10:case 19:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.md((1-t)*0.8)
v=0.6+t*0.4
w.jd(v,v,v,1)
return B.fp(A.B,B.d5(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.d5(f,t),new B.v((1-t)*24,0))}},
bz2(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bz2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bN,x.w).w.a.a*0.88,300,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fGA(f)+" Element animation preview"
s=s?Aa.Dn:A.u5
w=3
return B.b(C.bwk(d,s,new B.a4(t,t*0.62,B.bu(B.m(14),new C.awm(f,null),A.ap),null),r),$async$bz2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bz2,v)},
hJF(d){var w,v,u,t,s=$.adq.W(0,d)
if(s!=null){$.adq.m(0,d,s)
return s}w=A.cw.aE(A.a.aV(d,A.a.cP(d,",")+1))
$.adq.m(0,d,w)
v=$.fEq=$.fEq+w.length
u=B.a2($.adq).k("cu<1>")
for(;;){if(!(v>41943040&&$.adq.a>1))break
t=new B.cu($.adq,u).gaf(0)
if(!t.C())B.b8(B.fw())
v-=$.adq.W(0,t.gT(0)).length
$.fEq=v}return w},
hJm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kr(0,d),j=B.z(k,B.a2(k).k("E.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QQ(s,A.u))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QQ(t,A.u))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QQ(u,A.cp))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aV(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a08(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
m.N(new B.ku(e))
return m
case"rounded":m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
w=e.gef()*0.18
m.N(new B.j2(B.c_(e,new B.b3(w,w))))
return m
case"triangle":m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
w=e.d
m.N(new B.av(e.c,w))
m.N(new B.av(e.a,w))
m.N(new B.bV())
return m
case"hexagon":w=$.a1()
m=B.a([],m)
v=new B.aZ(w.r,A.av,n,n,m)
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
v.e=null}}v.N(new B.bV())
return v
case"diamond":m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
m.N(new B.av(e.c,e.gbN().b))
m.N(new B.av(e.gbN().a,e.d))
m.N(new B.av(e.a,e.gbN().b))
m.N(new B.bV())
return m
case"arch":m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
w=e.a
u=e.d
m.N(new B.bj(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.N(new B.av(w,p))
m.b4r(new B.v(t,p),new B.b3(s,s))
m.N(new B.av(t,u))
m.N(new B.bV())
return m
default:m=new B.aZ($.a1().r,A.av,n,n,B.a([],m))
m.N(new B.nD(e))
return m}},
fgC(d,e,f){return B.cj(new C.fgD(D.ecl.q(0,d),d,f,e))},
aYm:function aYm(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c7T:function c7T(d){this.a=d},
c7S:function c7S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7R:function c7R(){},
aYj:function aYj(d,e){this.b=d
this.a=e},
fj_:function fj_(d){this.a=d},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
f55:function f55(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f53:function f53(d){this.a=d},
f54:function f54(d,e){this.a=d
this.b=e},
aFr:function aFr(d,e){this.c=d
this.a=e},
bq6:function bq6(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eP1:function eP1(d,e,f){this.a=d
this.b=e
this.c=f},
aG3:function aG3(d,e){this.b=d
this.a=e},
SW:function SW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfk:function bfk(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dIF:function dIF(d){this.a=d},
dIE:function dIE(d){this.a=d},
dID:function dID(d){this.a=d},
H0:function H0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7L:function c7L(d){this.a=d},
c7K:function c7K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awm:function awm(d,e){this.c=d
this.a=e},
b9V:function b9V(){this.d=0
this.c=this.a=null},
cY7:function cY7(d){this.a=d},
cY6:function cY6(d){this.a=d},
a5p:function a5p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfZ:function bfZ(d,e){var _=this
_.d=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0q:function e0q(d,e,f){this.a=d
this.b=e
this.c=f},
aWh:function aWh(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bb2:function bb2(d,e,f){this.b=d
this.c=e
this.a=f},
blM:function blM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eEs:function eEs(){},
fgD:function fgD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmJ:function bmJ(d,e,f){this.b=d
this.c=e
this.a=f},
aI0:function aI0(){},
aIw:function aIw(){},
aJP:function aJP(){},
fk_(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fk_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wd.c2().Kr(D.cUF,A.rJ,!0),$async$fk_)
case 3:r=e
if(r==null||J.ch(r.a)){u=null
w=1
break}t=J.fm(r.a)
s=t.c
if(s==null)throw B.O("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.O("That file is too big. Use a file under 8 MB.")
u=C.hJg(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fk_,v)},
hJg(d,e){var w,v=d.toLowerCase()
if(A.a.c5(v,".pdf"))return new C.a5I(d,new B.YN(A.cM.gcq().aE(e),"application/pdf"),"")
if(A.a.c5(v,".docx")){w=C.hBw(e)
if(A.a.i(w).length===0)throw B.O("No readable words were found in that Word file.")
return new C.a5I(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c0.Jf(0,e,!0)
if(A.a.i(w).length===0)throw B.O("That file is empty.")
return new C.a5I(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hBw(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cq3().czY(B.qC(d,A.hB,o,o),o,o,!1).cBD(0,"word/document.xml")
if(n==null)return""
w=n.cJl()
v=A.c0.Jf(0,w==null?$.h2Y():w,!0).split("</w:p>")
u=new B.f4("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kr(0,r)
p=A.a.i(B.cy(q,new C.f7Q(),B.a2(q).k("E.E"),t).fL(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5I:function a5I(d,e,f){this.a=d
this.b=e
this.c=f},
f7Q:function f7Q(){},
hjP(d,e,f,g,h,i,j,k,l){return new C.M2(l,e,d,g,f,i,h,j,k,null)},
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
aB4:function aB4(d,e,f,g,h,i,j,k,l){var _=this
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
egE:function egE(d){this.a=d},
egC:function egC(){},
egD:function egD(d){this.a=d},
ed1:function ed1(){},
ed2:function ed2(){},
ed3:function ed3(d,e){this.a=d
this.b=e},
eeC:function eeC(d){this.a=d},
eeq:function eeq(){},
eer:function eer(){},
ecp:function ecp(){},
efK:function efK(d){this.a=d},
egA:function egA(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e){this.a=d
this.b=e},
egn:function egn(d){this.a=d},
ego:function ego(){},
egp:function egp(){},
egq:function egq(d){this.a=d},
egr:function egr(){},
ebO:function ebO(d){this.a=d},
egB:function egB(){},
edJ:function edJ(d,e){this.a=d
this.b=e},
ebM:function ebM(d){this.a=d},
ebN:function ebN(d){this.a=d},
ee5:function ee5(d){this.a=d},
ee6:function ee6(d,e,f){this.a=d
this.b=e
this.c=f},
ee7:function ee7(d){this.a=d},
edI:function edI(){},
edH:function edH(d){this.a=d},
edF:function edF(){},
edE:function edE(d){this.a=d},
edG:function edG(){},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
edP:function edP(d){this.a=d},
edK:function edK(d){this.a=d},
edL:function edL(d){this.a=d},
edM:function edM(d){this.a=d},
edN:function edN(d){this.a=d},
edO:function edO(d){this.a=d},
edQ:function edQ(d,e){this.a=d
this.b=e},
ebQ:function ebQ(){},
ebR:function ebR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee0:function ee0(){},
ee1:function ee1(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e,f){this.a=d
this.b=e
this.c=f},
ee_:function ee_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edT:function edT(d,e,f){this.a=d
this.b=e
this.c=f},
edU:function edU(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d){this.a=d},
edW:function edW(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
edY:function edY(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
ee3:function ee3(d){this.a=d},
ee4:function ee4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ee2:function ee2(d){this.a=d},
eel:function eel(){},
eem:function eem(){},
een:function een(){},
eeo:function eeo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eei:function eei(d){this.a=d},
eek:function eek(){},
eej:function eej(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eeg:function eeg(d,e,f){this.a=d
this.b=e
this.c=f},
eeh:function eeh(d,e){this.a=d
this.b=e},
eep:function eep(){},
edR:function edR(d,e){this.a=d
this.b=e},
ec6:function ec6(){},
ec7:function ec7(d,e,f){this.a=d
this.b=e
this.c=f},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ec5:function ec5(d){this.a=d},
eev:function eev(d){this.a=d},
eeu:function eeu(d,e){this.a=d
this.b=e},
eet:function eet(d,e){this.a=d
this.b=e},
ees:function ees(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eew:function eew(d,e){this.a=d
this.b=e},
eaL:function eaL(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec2:function ec2(d){this.a=d},
eeE:function eeE(d,e,f){this.a=d
this.b=e
this.c=f},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebY:function ebY(d){this.a=d},
eeD:function eeD(d,e,f){this.a=d
this.b=e
this.c=f},
ebP:function ebP(d){this.a=d},
ecq:function ecq(){},
egl:function egl(d,e){this.a=d
this.b=e},
egm:function egm(d,e,f){this.a=d
this.b=e
this.c=f},
efL:function efL(d,e,f){this.a=d
this.b=e
this.c=f},
eaM:function eaM(d){this.a=d},
eaJ:function eaJ(d,e){this.a=d
this.b=e},
eaz:function eaz(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eav:function eav(d,e){this.a=d
this.b=e},
eax:function eax(d,e){this.a=d
this.b=e},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d,e){this.a=d
this.b=e},
ec_:function ec_(d){this.a=d},
ebd:function ebd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebi:function ebi(d,e){this.a=d
this.b=e},
ebj:function ebj(d){this.a=d},
ebg:function ebg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebh:function ebh(d){this.a=d},
ebf:function ebf(){},
ebc:function ebc(d,e,f){this.a=d
this.b=e
this.c=f},
eef:function eef(d,e){this.a=d
this.b=e},
egu:function egu(d){this.a=d},
egv:function egv(d,e){this.a=d
this.b=e},
egw:function egw(d){this.a=d},
egx:function egx(d,e,f){this.a=d
this.b=e
this.c=f},
egt:function egt(d){this.a=d},
eg0:function eg0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg_:function eg_(d,e,f){this.a=d
this.b=e
this.c=f},
efZ:function efZ(){},
efY:function efY(d,e,f){this.a=d
this.b=e
this.c=f},
efX:function efX(d,e){this.a=d
this.b=e},
efU:function efU(d,e,f){this.a=d
this.b=e
this.c=f},
efS:function efS(d){this.a=d},
efT:function efT(d){this.a=d},
efW:function efW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efV:function efV(d){this.a=d},
ecU:function ecU(d,e){this.a=d
this.b=e},
ecT:function ecT(d,e){this.a=d
this.b=e},
efM:function efM(){},
egk:function egk(d,e){this.a=d
this.b=e},
egi:function egi(d){this.a=d},
egj:function egj(d){this.a=d},
eaE:function eaE(d,e){this.a=d
this.b=e},
eaC:function eaC(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaF:function eaF(d,e){this.a=d
this.b=e},
eaG:function eaG(d,e,f){this.a=d
this.b=e
this.c=f},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaB:function eaB(d,e,f){this.a=d
this.b=e
this.c=f},
eaA:function eaA(d){this.a=d},
eeB:function eeB(d,e,f){this.a=d
this.b=e
this.c=f},
egs:function egs(d,e,f){this.a=d
this.b=e
this.c=f},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ecW:function ecW(){},
ebm:function ebm(d,e,f){this.a=d
this.b=e
this.c=f},
ebn:function ebn(d){this.a=d},
eay:function eay(d,e){this.a=d
this.b=e},
eco:function eco(d,e){this.a=d
this.b=e},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d){this.a=d},
eaR:function eaR(d,e){this.a=d
this.b=e},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaP:function eaP(d){this.a=d},
eb2:function eb2(d,e){this.a=d
this.b=e},
eaO:function eaO(d){this.a=d},
eb5:function eb5(d){this.a=d},
eb6:function eb6(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb8:function eb8(d){this.a=d},
eb9:function eb9(d){this.a=d},
eba:function eba(){},
ebb:function ebb(){},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaX:function eaX(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb4:function eb4(d,e){this.a=d
this.b=e},
ecn:function ecn(d,e,f){this.a=d
this.b=e
this.c=f},
ecm:function ecm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecl:function ecl(d,e,f){this.a=d
this.b=e
this.c=f},
eck:function eck(d,e){this.a=d
this.b=e},
eaI:function eaI(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
ebp:function ebp(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebr:function ebr(d){this.a=d},
ebs:function ebs(d){this.a=d},
ebt:function ebt(d,e){this.a=d
this.b=e},
ec3:function ec3(d){this.a=d},
eee:function eee(d,e){this.a=d
this.b=e},
eed:function eed(d,e){this.a=d
this.b=e},
eec:function eec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eea:function eea(d){this.a=d},
eeb:function eeb(d,e){this.a=d
this.b=e},
ee8:function ee8(){},
ee9:function ee9(){},
efN:function efN(){},
efO:function efO(d,e){this.a=d
this.b=e},
efP:function efP(){},
efQ:function efQ(d){this.a=d},
efR:function efR(d,e){this.a=d
this.b=e},
eaN:function eaN(d,e){this.a=d
this.b=e},
ebS:function ebS(){},
ebT:function ebT(){},
ebU:function ebU(){},
ebX:function ebX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d){this.a=d},
edm:function edm(){},
edo:function edo(d,e){this.a=d
this.b=e},
edp:function edp(d,e){this.a=d
this.b=e},
edl:function edl(d){this.a=d},
edq:function edq(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
edr:function edr(d,e){this.a=d
this.b=e},
edj:function edj(d){this.a=d},
eds:function eds(d,e){this.a=d
this.b=e},
edi:function edi(d){this.a=d},
edt:function edt(d,e){this.a=d
this.b=e},
edh:function edh(d,e){this.a=d
this.b=e},
edu:function edu(d,e){this.a=d
this.b=e},
edg:function edg(d){this.a=d},
edv:function edv(d,e){this.a=d
this.b=e},
edf:function edf(d){this.a=d},
ed8:function ed8(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
eda:function eda(d){this.a=d},
ed7:function ed7(d){this.a=d},
edb:function edb(d,e){this.a=d
this.b=e},
ed6:function ed6(d){this.a=d},
edc:function edc(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
edd:function edd(d,e){this.a=d
this.b=e},
ed4:function ed4(d){this.a=d},
ede:function ede(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
ecj:function ecj(d){this.a=d},
ecb:function ecb(d){this.a=d},
eca:function eca(d,e){this.a=d
this.b=e},
ecc:function ecc(d,e){this.a=d
this.b=e},
ecd:function ecd(d){this.a=d},
ece:function ece(d){this.a=d},
ecf:function ecf(d,e){this.a=d
this.b=e},
eci:function eci(d){this.a=d},
egy:function egy(d){this.a=d},
egz:function egz(d){this.a=d},
edy:function edy(d,e){this.a=d
this.b=e},
edx:function edx(d,e){this.a=d
this.b=e},
edw:function edw(d,e){this.a=d
this.b=e},
edz:function edz(d){this.a=d},
edA:function edA(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeY:function eeY(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
ef9:function ef9(d){this.a=d},
efk:function efk(d){this.a=d},
efv:function efv(d){this.a=d},
efC:function efC(d){this.a=d},
efD:function efD(d){this.a=d},
efE:function efE(d){this.a=d},
efF:function efF(d){this.a=d},
efG:function efG(d,e){this.a=d
this.b=e},
ef_:function ef_(d){this.a=d},
ef0:function ef0(d){this.a=d},
ef1:function ef1(d){this.a=d},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d){this.a=d},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
ef8:function ef8(d){this.a=d},
efa:function efa(d){this.a=d},
efb:function efb(d){this.a=d},
efc:function efc(d){this.a=d},
efd:function efd(d){this.a=d},
efe:function efe(d){this.a=d},
eff:function eff(d){this.a=d},
efg:function efg(d){this.a=d},
efh:function efh(d){this.a=d},
efi:function efi(d){this.a=d},
eeN:function eeN(d){this.a=d},
efj:function efj(d){this.a=d},
eeV:function eeV(d){this.a=d},
efl:function efl(d){this.a=d},
eeU:function eeU(d,e){this.a=d
this.b=e},
efm:function efm(d,e){this.a=d
this.b=e},
efn:function efn(d,e){this.a=d
this.b=e},
eeT:function eeT(d,e,f){this.a=d
this.b=e
this.c=f},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eeW:function eeW(d){this.a=d},
efH:function efH(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efI:function efI(d,e){this.a=d
this.b=e},
efo:function efo(d,e,f){this.a=d
this.b=e
this.c=f},
eeS:function eeS(d,e,f){this.a=d
this.b=e
this.c=f},
eeI:function eeI(d,e,f){this.a=d
this.b=e
this.c=f},
eeG:function eeG(d,e){this.a=d
this.b=e},
efp:function efp(d,e){this.a=d
this.b=e},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeF:function eeF(d,e){this.a=d
this.b=e},
efq:function efq(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
efr:function efr(d){this.a=d},
efs:function efs(d){this.a=d},
eft:function eft(d){this.a=d},
efu:function efu(d){this.a=d},
eeP:function eeP(d){this.a=d},
efw:function efw(d){this.a=d},
efx:function efx(d){this.a=d},
efy:function efy(d,e){this.a=d
this.b=e},
eeO:function eeO(d){this.a=d},
efz:function efz(d,e){this.a=d
this.b=e},
eeM:function eeM(d){this.a=d},
efA:function efA(d,e){this.a=d
this.b=e},
eeL:function eeL(d){this.a=d},
efB:function efB(d,e){this.a=d
this.b=e},
eeK:function eeK(d){this.a=d},
ebl:function ebl(d,e,f){this.a=d
this.b=e
this.c=f},
ebk:function ebk(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
eg2:function eg2(d,e){this.a=d
this.b=e},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg1:function eg1(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
ecs:function ecs(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecr:function ecr(d){this.a=d},
ed0:function ed0(){},
ed_:function ed_(){},
egg:function egg(d){this.a=d},
egf:function egf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ege:function ege(d,e){this.a=d
this.b=e},
eg9:function eg9(d,e){this.a=d
this.b=e},
egd:function egd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ega:function ega(d,e){this.a=d
this.b=e},
eg5:function eg5(d){this.a=d},
eg6:function eg6(d){this.a=d},
eg7:function eg7(d){this.a=d},
eg8:function eg8(d){this.a=d},
egb:function egb(d,e){this.a=d
this.b=e},
egc:function egc(d,e){this.a=d
this.b=e},
egh:function egh(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebJ:function ebJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eby:function eby(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebB:function ebB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebx:function ebx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebF:function ebF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebw:function ebw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebu:function ebu(d){this.a=d},
ebI:function ebI(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
edB:function edB(d){this.a=d},
edD:function edD(d,e){this.a=d
this.b=e},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e,f){this.a=d
this.b=e
this.c=f},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e,f){this.a=d
this.b=e
this.c=f},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e,f){this.a=d
this.b=e
this.c=f},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecx:function ecx(d,e,f){this.a=d
this.b=e
this.c=f},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eau:function eau(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eez:function eez(d,e){this.a=d
this.b=e},
eex:function eex(d){this.a=d},
eey:function eey(d,e){this.a=d
this.b=e},
acD:function acD(d,e,f){this.a=d
this.b=e
this.c=f},
avK:function avK(d,e){this.c=d
this.a=e},
b8I:function b8I(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
cUD:function cUD(d){this.a=d},
cUC:function cUC(d){this.a=d},
b8W:function b8W(d,e){this.c=d
this.a=e},
cUZ:function cUZ(d){this.a=d},
cV_:function cV_(d){this.a=d},
I1:function I1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b8H:function b8H(){this.d=!1
this.c=this.a=null},
cUA:function cUA(d){this.a=d},
cUw:function cUw(d){this.a=d},
cUB:function cUB(d){this.a=d},
cUv:function cUv(d){this.a=d},
cUz:function cUz(d){this.a=d},
cUx:function cUx(d){this.a=d},
cUy:function cUy(d,e){this.a=d
this.b=e},
NG:function NG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yj:function Yj(d,e,f){this.c=d
this.d=e
this.a=f},
aB7:function aB7(d,e,f){var _=this
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
ehe:function ehe(){},
eh4:function eh4(d){this.a=d},
ehd:function ehd(d){this.a=d},
eh5:function eh5(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d,e){this.a=d
this.b=e},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d,e,f){this.a=d
this.b=e
this.c=f},
ehb:function ehb(){},
ehc:function ehc(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh8:function eh8(d){this.a=d},
eh9:function eh9(d){this.a=d},
eha:function eha(d){this.a=d},
ehf:function ehf(d,e,f){this.a=d
this.b=e
this.c=f},
ehh:function ehh(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
I8:function I8(d,e){this.c=d
this.a=e},
bnd:function bnd(d,e){this.b=d
this.a=e},
bdx:function bdx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdw:function bdw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGJ:function aGJ(){},
aIK:function aIK(){},
bsQ:function bsQ(){},
aIL:function aIL(){},
flU(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$flU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wd.c2().Kr(B.a(["pdf"],x.s),A.rJ,!0),$async$flU)
case 3:q=e
if(q==null||J.ch(q.a)){u=null
w=1
break}t=J.fm(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bky(s,"data:application/pdf;base64,"+A.cM.gcq().aE(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flU,v)},
hJR(d){var w,v,u,t,s,r
try{w=B.jd(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).kr(0,w).gH(0)
if(t>0){s=J.aNd(t,1,200)
return s}}catch(r){}return 1},
flL(d){return C.hJQ(d)},
hJQ(d){var w=0,v=B.j(x.T),u
var $async$flL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flL,v)},
byg(d,e,f,g){return C.hK_(d,e,f,g)},
hK_(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$byg=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e2(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h1p(b9,new B.ap(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lu(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lu(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lu(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lu(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a1()
g=new B.tu()
f=B.K0(g,null)
a7=B.U()
a7.r=A.pW.gt(0)
f.bp(new B.af(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.U()
b1.r=b8.gt(b8)
b1.c=p*e
b1.d=A.bZ
b1.e=A.fj
b1.b=A.aj
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
b2.delete()}a0=a2}a3=g.qR()
w=7
return B.b(a3.B8(800,h),$async$byg)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hk(A.fR),$async$byg)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f7(A.dz.gaK(a5))
a7=A.cM.gcq().aE(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a5(b5)
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
return B.i($async$byg,v)},
aMr(d,e,f){return C.hJO(d,e,f)},
hJO(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMr=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.aeV(d,e,f,new C.flJ(r,q),q,"Sign document"),$async$aMr)
case 3:if(!new B.e2(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.byg(q,t,r.b,r.c),$async$aMr)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYq(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMr,v)},
hJY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fVP(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fVP(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aV(A.a.aU(A.o.fE(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aV(A.a.aU(A.o.fE(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aI(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l2&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fVt(q.ay)+";border:2px solid "+C.fVt(q.ch)+'"></div>'
break
case 5:l=C.fFs(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gagv()
if(p==null)p=A.arE
n=B.R(p)
k=n.k("ps<1>")
j=new B.ps(p,0,8,k)
j.FQ(p,0,8,n.c)
j=new B.bS(j,j.gH(0),k.k("bS<ai.E>"))
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
fVt(d){var w=A.o.ar(d,24)
return"rgba("+(A.o.ar(d,16)&255)+","+(A.o.ar(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
fVP(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
bye(d,e){var w=0,v=B.j(x.H)
var $async$bye=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.flS(e,C.hJY(e),d),d,null,!0,!0,x.H),$async$bye)
case 2:return B.h(null,v)}})
return B.i($async$bye,v)},
byf(){var w=0,v=B.j(x.T),u,t,s
var $async$byf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F3(92,2400),$async$byf)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.flL(s),$async$byf)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byf,v)},
aMs(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fGF(d),$async$aMs)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=W.fo0(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMs,v)},
fPS(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYq:function aYq(d,e,f){this.a=d
this.b=e
this.c=f},
flJ:function flJ(d,e){this.a=d
this.b=e},
flS:function flS(d,e,f){this.a=d
this.b=e
this.c=f},
flP:function flP(d){this.a=d},
flQ:function flQ(d,e,f){this.a=d
this.b=e
this.c=f},
flR:function flR(d,e,f){this.a=d
this.b=e
this.c=f},
hJP(d){return C.kf(d.w)},
hJW(d){var w,v,u,t
if(d.length===0||!A.d.e7(d,C.hLE()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xA(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.h6Y()
if(w.b.test(u))return u
return null},
h1r(d,e,f){var w,v,u=C.hfv(d),t=$.oX()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aF(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
hK1(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.hY(w,d.b);v.C();){u=w.gT(w).y
t=C.xA(u==null?"":u)
if(t!=null)s.G(0,t)}return s},
flH(d,e){var w,v=d.y,u=C.xA(v==null?"":v)
if(u!=null)return d.y=u
w=C.hK1(new B.a3(e,new C.flI(d),B.R(e).k("a3<1>")))
v=d.x
return d.y=C.h1r(v==null?"":v,null,w)},
hK0(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kf(w.w))return null
v=w.y
return C.xA(v==null?"":v)},
hjR(){var w,v=$.oX(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"SL"+A.d.fL(u)},
TV(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$TV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bZ(),$async$TV)
case 3:if(!e){u=B.Q(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eU("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$TV)
case 8:r=e
if(r==null){u=B.Q(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.Y(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a5(m)
$.ak.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.Q(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TV,v)},
TW(d){return C.hjS(d)},
hjS(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$TW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bZ(),$async$TW)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hr("ngmy_slides_transfer_qr_stashes_v1",B.D(["stashes",d,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,A.cy,null),$async$TW)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a5(p)
$.ak.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TW,v)},
a5K(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5K=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bZ(),$async$a5K)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.TV(),$async$a5K)
case 4:s=a6
r=C.xA(a2==null?"":a2)
if(r==null)r=a3!=null?C.h1r(a3,null,A.a2R):null
q=x.N
p=B.aY(q)
for(o=J.dd(s),n=J.aW(o.ghP(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xA(J.k(k==null?"":k))
if(j!=null)p.G(0,j)}n=o.gdH(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Y(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dB.aE(t)
g.m(0,"payload",A.cM.gcq().aE(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q4.q(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xA(J.k(q==null?"":q))
if(f==null)f=C.fPX(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.TW(s),$async$a5K)
case 7:u=new B.aCv(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hjR()
n=r==null
d=n?C.fPX(p):r
q=B.Q(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dB.aE(t)
q.m(0,"payload",A.cM.gcq().aE(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q4.q(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.TW(s),$async$a5K)
case 8:u=new B.aCv(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5K,v)},
fPX(d){var w,v,u=$.oX()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aF(1000)),3,"0")
if(d.G(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
aof(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aof=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bZ(),$async$aof)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.TV(),$async$aof)
case 6:t=f
s=J.a6(t)
r=s.gH(t)
s.bk(t,new C.c8i(q))
w=s.gH(t)!==r?7:8
break
case 7:w=9
return B.b(C.TW(t),$async$aof)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aof,v)},
aoe(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xA(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bZ(),$async$aoe)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.TV(),$async$aoe)
case 6:t=o.jj(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xA(J.k(q==null?"":q))===p){u=C.a5J(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoe,v)},
a5J(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5J=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bZ(),$async$a5J)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.TV(),$async$a5J)
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
if(D.Q4.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aC(0,s,null)
if(m.b(r)){q=B.Y(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.aj(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dQ(B.Y(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=7
return B.b(C.TW(p),$async$a5J)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5J,v)},
hJV(d,e,f){var w,v=B.Q(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.R(d).k("I<1,a0<n,@>>")
w=B.z(new B.I(d,new C.flO(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
flW(d,e,f,g){var w
if(e!=null){w=B.Q(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ad())
return A.Q.aj(w,null)}return A.Q.aj(C.hJV(d==null?B.a([],x.D):d,f,g),null)},
flV(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$flV=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5K(h,d,e,f,g),$async$flV)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xA(e==null?"":e)
u=new B.aCi(s,t)
w=1
break}t=A.dB.aE(h)
t=A.jP.gcq().aE(t)
u=new B.aCi(C.xA(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flV,v)},
fGH(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cT(q,"NGMYSLIDESYNC2|"))return!0
if(J.cT(q,"NGMYSLIDECODE|"))return!0
if(J.cT(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cT(q,"{"))try{w=A.Q.aC(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hJZ(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fGH(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aV(v,u))
if(C.fGH(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aV(v,s))
if(C.fGH(t))return t}}return null},
flK(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cT(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cT(t,"NGMY_SL:"))w=v.a(A.Q.aC(0,A.c0.c4(0,A.cw.aE(J.md(t,8))),null))
else w=v.a(A.Q.aC(0,t,null))
v=C.hto(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aeG(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aeG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoe(t[1]),$async$aeG)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flK(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xA(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoe(r),$async$aeG)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flK(s)
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
return B.b(C.a5J(t[1]),$async$aeG)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flK(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.flK(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeG,v)},
hto(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Q4.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fGE(C.TR(B.Y(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d2(u,x.f)
t=B.cy(t,new C.eX5(w),t.$ti.k("E.E"),x.I)
t=B.z(t,B.a2(t).k("E.E"))
return t}return B.a([],x.D)},
fGE(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.m(0,"id",C.cx())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iN
$.iN=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.TR(B.Y(o,x.N,x.z))
if(e&&C.kf(p.w))p.Q=new B.N(Date.now(),0,!1).a4().bL(144e8).aa()
return p},
by0(){var w=0,v=B.j(x.aT),u,t,s
var $async$by0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.F2(),$async$by0)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeG(s),$async$by0)
case 4:t=e
u=J.ch(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by0,v)},
fu1(d){var w=0,v=B.j(x.T),u,t
var $async$fu1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hM(D.Tq,!0,"Dismiss",d,new C.fu2(),new C.fu3(),A.Dl,!0,x.N),$async$fu1)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.ehO)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fu1,v)},
hNA(d,e,f,g,h){return B.a7(d,!1).ct(B.eO(new C.fu4(h,e,g,f),!0,null,x.H))},
flI:function flI(d){this.a=d},
c8i:function c8i(d){this.a=d},
flO:function flO(){},
eX5:function eX5(d){this.a=d},
fu2:function fu2(){},
fu3:function fu3(){},
fu4:function fu4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TT:function TT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB5:function aB5(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
egL:function egL(){},
egH:function egH(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egI:function egI(d){this.a=d},
egJ:function egJ(d){this.a=d},
egM:function egM(d){this.a=d},
egN:function egN(d){this.a=d},
egQ:function egQ(d){this.a=d},
egR:function egR(d){this.a=d},
egP:function egP(d){this.a=d},
egS:function egS(d){this.a=d},
egO:function egO(d){this.a=d},
egT:function egT(d,e){this.a=d
this.b=e},
egG:function egG(d,e){this.a=d
this.b=e},
egF:function egF(d,e){this.a=d
this.b=e},
TU:function TU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgj:function bgj(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
egU:function egU(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
egW:function egW(){},
egX:function egX(d){this.a=d},
egY:function egY(d,e){this.a=d
this.b=e},
aB2:function aB2(d){this.a=d},
aB3:function aB3(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eao:function eao(d){this.a=d},
ean:function ean(){},
eap:function eap(d){this.a=d},
eak:function eak(d){this.a=d},
eaj:function eaj(){},
eal:function eal(d){this.a=d},
eam:function eam(d){this.a=d},
bqq:function bqq(){},
aog:function aog(d){this.a=d},
aB6:function aB6(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eh_:function eh_(d){this.a=d},
egZ:function egZ(d){this.a=d},
hyi(){var w,v,u,t
for(v=0;v<4;++v){w=D.cKN[v]
try{if(A7.bRa(w)){u=w
return u}}catch(t){}}return null},
Pf(d,e){return C.hGL(d,e)},
hGL(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Pf=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hyi()
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
o=new B.eK(b8,b9)
n=new B.eK("Getting ready\u2026",b9)
m=new B.eK(0,b9)
l=B.nT(new C.fg4(c2,b7,o),!1,!1)
b6.lk(0,l)
b9=x.H
B.cb(null,A.dc,!1,null,new C.fg5(n,m),c6,null,!0,!0,b9)
k=new C.fg9(b7)
j=new C.fga()
i=null
t=4
b3=c2.a
h=Ad.aOI(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fwo(h,30)
e=B.a([],x.aK)
b3=x.z
i=A7.aTr(f,B.D(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FF.xl(i,"dataavailable",new C.fg6(e))
d=new B.bL(new B.bd($.bs,x.dT),x.b2)
A.FF.xl(i,"stop",new C.fg7(d))
J.afc(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Pf)
case 8:w=7
return B.b(c5.$1(d0),$async$Pf)
case 7:a0=d0
J.fwr(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afc(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afc(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Pf)
case 15:w=14
return B.b(c5.$1(d0),$async$Pf)
case 14:a0=d0
case 13:J.fwr(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afc(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.N(Date.now(),0,!1).bL(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbm())b3=b3===b8.gbm()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fwr(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fg,null,b9),$async$Pf)
case 18:w=16
break
case 17:J.afc(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afc(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.nd),$async$Pf)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hC(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mE(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Jw(b0)
J.lz(b0)
B.bK(A.nZ,new C.fg8(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a5(c4)
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
J.lz(l)
if(p.pH())p.eC()
c3=o
b3=$.at()
c3.shH(b3)
J.aNi(c3,0)
c3=n
c3.shH(b3)
J.aNi(c3,0)
c3=m
c3.shH(b3)
J.aNi(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pf,v)},
fg4:function fg4(d,e,f){this.a=d
this.b=e
this.c=f},
fg3:function fg3(){},
fg5:function fg5(d,e){this.a=d
this.b=e},
fg9:function fg9(d){this.a=d},
fga:function fga(){},
fg6:function fg6(d){this.a=d},
fg7:function fg7(d){this.a=d},
fg8:function fg8(d){this.a=d},
bqC:function bqC(d,e,f){this.c=d
this.d=e
this.a=f},
eRt:function eRt(){},
eRu:function eRu(){},
c8F(d){var w=0,v=B.j(x.at),u,t,s
var $async$c8F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoq(d,A.xU),$async$c8F)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.N(Date.now(),0,!1))
if(t.a<0){u=A.bt
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8F,v)},
c8E(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5q:function a5q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bg3:function bg3(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e1h:function e1h(d){this.a=d},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e){this.a=d
this.b=e},
a6h:function a6h(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nO$=k
_.nP$=l
_.nQ$=m
_.ne$=n},
a6i:function a6i(d,e){this.a=d
this.b=e},
b_3:function b_3(){},
caS:function caS(){},
caT:function caT(){},
caU:function caU(d,e,f,g,h,i,j,k,l){var _=this
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
h7Z(d){return new C.afu(d)},
a0F:function a0F(){},
afu:function afu(d){this.a=d},
aNC:function aNC(){},
atF:function atF(d,e){this.d=d
this.b=e
this.a=null},
aP6:function aP6(d){this.b=d
this.a=null},
fbs(d,e){var w=0,v=B.j(x.H)
var $async$fbs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a1().gwz().Ka(d,e),$async$fbs)
case 2:B.fo6()
return B.h(null,v)}})
return B.i($async$fbs,v)},
fZK(d,e){return(A.qr[(d^e)&255]^A.o.ar(d,8))>>>0},
f9m(d,e,f,g,h,i){var w=C.hDc(d,A.d5,f,null,A.cQ,g,h,i)
return w},
h0A(d){var w=F.h1i(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hfv(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.og.h(0,w)
if(v!=null)return v
for(u=A.og.gdH(A.og),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
h0I(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<31;++w)v+="- "+D.cBV[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwh(d,e){return C.hzZ(d,e)},
hzZ(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwh=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hC([d],"application/pdf")
n=x.z
q=B.aQF(B.a([r],x.e3),e,B.D(["type","application/pdf"],n,n))
p=B.cs(B.D(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jJ(o,"share",[p]),x.H),$async$bwh)
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
return B.i($async$bwh,v)},
fGy(){var w=0,v=B.j(x.y),u,t,s
var $async$fGy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f2O
s=$.bvP
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwh(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGy,v)},
bxA(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bxA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f2O
l=$.bvP
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=W.fWu()?3:4
break
case 3:w=5
return B.b(C.bwh(m,k),$async$bxA)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bvQ
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mE(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Jw(q)
w=10
return B.b(B.bK(A.X,null,x.H),$async$bxA)
case 10:J.lz(q)
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
return B.i($async$bxA,v)},
fGp(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fGp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bvQ
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.l8.tQ(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fGp,v)},
fGG(d,e){var w=0,v=B.j(x.H),u,t
var $async$fGG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hC([d],"text/html"))
t.toString
u=window
u.toString
A.l8.tQ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fGG,v)},
aZ0(d,e){var w=0,v=B.j(x.y),u
var $async$aZ0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZ2(d,e),$async$aZ0)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZ1(d),$async$aZ0)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZ0,v)}},D,H,Ah,N,V,A4,G,F,E,Ai,P,W,X,A5,K,Aj,Y,O,Q,L,A6,Ak,Z,Al,Am,A7,A8,An,A9,Aa,Ab,Ao,Ap,R,Aq,I,Ac,S,T,Ar,M,A_,A0,A1,As,At
J=c[1]
B=c[0]
A=c[2]
U=c[178]
A2=c[131]
Ad=c[55]
Ae=c[47]
A3=c[50]
Af=c[101]
Ag=c[190]
C=a.updateHolder(c[4],C)
D=c[176]
H=c[88]
Ah=c[34]
N=c[180]
V=c[177]
A4=c[185]
G=c[148]
F=c[29]
E=c[179]
Ai=c[96]
P=c[103]
W=c[27]
X=c[138]
A5=c[109]
K=c[181]
Aj=c[108]
Y=c[58]
O=c[158]
Q=c[72]
L=c[117]
A6=c[122]
Ak=c[183]
Z=c[92]
Al=c[83]
Am=c[86]
A7=c[51]
A8=c[154]
An=c[33]
A9=c[70]
Aa=c[102]
Ab=c[189]
Ao=c[191]
Ap=c[188]
R=c[64]
Aq=c[184]
I=c[135]
Ac=c[63]
S=c[45]
T=c[182]
Ar=c[192]
M=c[165]
A_=c[187]
A0=c[186]
A1=c[54]
As=c[164]
At=c[94]
C.nq.prototype={
u9(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t3(t,v)
return new C.nq(t===0?!1:w,v,t)},
bEE(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BG()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t3(w,u)
return new C.nq(r===0?!1:s,u,r)},
bF3(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BG()
w=o-d
if(w<=0)return p.a?$.fI_():$.BG()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t3(w,u)
q=new C.nq(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a0q())
return q},
dN(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.O(B.dD("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.J(e,16)===0)return r.bEE(v)
u=w+v+1
t=new Uint16Array(u)
C.fTa(r.b,w,e,t)
w=r.a
s=C.t3(u,t)
return new C.nq(s===0?!1:w,t,s)},
lU(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.O(B.dD("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.J(e,16)
if(u===0)return n.bF3(v)
t=w-v
if(t<=0)return n.a?$.fI_():$.BG()
s=n.b
r=new Uint16Array(t)
C.hpt(s,w,e,r)
w=n.a
q=C.t3(t,r)
p=new C.nq(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dN(1,u)-1)!==0)return p.aD(0,$.a0q())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a0q())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cxW(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5o(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5o(t,e)
if(s===0)return $.BG()
if(r===0)return t.a===e?t:t.u9(0)
w=s+1
v=new Uint16Array(w)
C.hpr(t.b,s,d.b,r,v)
u=C.t3(w,v)
return new C.nq(u===0?!1:e,v,u)},
FR(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BG()
w=d.c
if(w===0)return t.a===e?t:t.u9(0)
v=new Uint16Array(s)
C.b5X(t.b,s,d.b,w,v)
u=C.t3(s,v)
return new C.nq(u===0?!1:e,v,u)},
bs_(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t3(r,u)
return new C.nq(!1,u,s)},
brZ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t3(u,r)
return new C.nq(!1,r,v)},
bs0(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t3(p,m)
return new C.nq(s!==0,m,s)},
SL(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BG()
w=t.a
if(w===e.a){if(w){w=$.a0q()
return t.FR(w,!0).bs0(e.FR(w,!0),!0).a5o(w,!0)}return t.bs_(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.brZ(v.FR($.a0q(),!1),!1)},
ap(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5o(e,v)
if(C.cxW(u.b,t,e.b,w)>=0)return u.FR(e,v)
return e.FR(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.u9(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5o(e,v)
if(C.cxW(u.b,t,e.b,w)>=0)return u.FR(e,v)
return e.FR(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BG()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fTb(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t3(w,t)
return new C.nq(q===0?!1:r,t,q)},
bED(d){var w,v,u,t
if(this.c<d.c)return $.BG()
this.aMG(d)
w=$.fBN.c2()-$.aun.c2()
v=C.fBP($.fBM.c2(),$.aun.c2(),$.fBN.c2(),w)
u=C.t3(w,v)
t=new C.nq(!1,v,u)
return this.a!==d.a&&u>0?t.u9(0):t},
cex(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aMG(d)
w=C.fBP($.fBM.c2(),0,$.aun.c2(),$.aun.c2())
v=C.t3($.aun.c2(),w)
u=new C.nq(!1,w,v)
if($.fBO.c2()>0)u=u.lU(0,$.fBO.c2())
return t.a&&u.c>0?u.u9(0):u},
aMG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fT7&&d.c===$.fT9&&g.b===$.fT6&&d.b===$.fT8)return
w=d.b
v=d.c
u=16-A.o.gagU(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fT5(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fT5(g.b,f,u,r)}else{r=C.fBP(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fBQ(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cxW(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b5X(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b5X(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hps(p,r,i);--o
C.fTb(h,j,0,r,o,s)
if(r[i]<h){m=C.fBQ(j,s,o,n)
C.b5X(r,l,n,m,r)
while(--h,r[i]<h)C.b5X(r,l,n,m,r)}--i}$.fT6=g.b
$.fT7=f
$.fT8=w
$.fT9=v
$.fBM.b=r
$.fBN.b=l
$.aun.b=s
$.fBO.b=u},
gV(d){var w,v,u,t=new C.cxX(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cxY().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nq&&this.aI(0,e)===0},
rl(d,e){return this.aI(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u3(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gagU(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.ar(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cxZ(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cy_(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kQ(A.aD.gaK(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.u9(0):r
while(v.c>1){u=$.h4V()
if(u.c===0)B.b8(D.aUX)
t=v.cex(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bED(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.du(w,x.bJ).fL(0)},
$iaOl:1,
$ihu:1}
C.aNM.prototype={
G(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gH(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
cBD(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gcg(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jM(w,w.length,B.R(w).k("jM<1>"))}}
C.PR.prototype={
cJl(){var w,v
if(this.as==null)this.b6K()
w=this.as
v=w==null?null:w.als()
return v==null?null:v.ex()},
b6K(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.als().ex()
this.as=new C.bIx(v)}},
gX(d){return this.at}}
C.a1B.prototype={
a3(){return"CompressionType."+this.b}}
C.bCE.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.ck()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dN(v,u)+(s.b&A.xv[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.ck()}w=A.o.dN(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fm(u,t)&A.xv[d])
s.c=t}return v}}
C.bBo.prototype={
czX(d,e){var w,v,u,t,s,r=this,q=new C.bCE(d)
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
t=r.ccS(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.ccV(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
ccS(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.cZa[u])v=!1
if(t!==D.cEX[u])w=!1
if(!w&&!v)return-1}return v?0:2},
ccV(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bUy()
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
u[w]=l}c9.fr=B.bT(6,$.h31(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h30()
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
if(f<h)h=f}c9.bQd(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqa(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqa(d3)}while(a3===0||a3===1);++a5
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
a3=c9.aqa(d3)
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
c1=(c1<<8^D.Fb[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Fd[b9];++b9
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
if(b8===0){b8=D.Fd[b9];++b9
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
if(b8===0){b8=D.Fd[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Fd[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Fd[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bB(c3)
c1=c1<<8^D.Fb[c1>>>24&255^v];--c2}d4.bB(c3)
c1=(c1<<8^D.Fb[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bB(c7)
c1=(c1<<8^D.Fb[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bB(c7)
c1=(c1<<8^D.Fb[c1>>>24&255^c7&255])>>>0
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
aqa(d){var w,v,u,t,s=this,r=s.ay
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
bQd(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bUy(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cq4.prototype={
aDn(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bHH(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aP()
e.aP()
e.aP()
e.aP()
r.f=e.aH()
r.r=e.aH()
w=e.aP()
if(w>0)e.aDq(w,!1)
r.cdf(e)
q=r.r
v=r.f
u=e.aGe(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b4G()
s.cJk(0,u,e,f)
q.push(s)}},
cdf(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a51(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.r8()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.r8()
d.aP()
d.aP()
d.aH()
d.aH()
d.r8()
d.r8()
u=d.r8()
t=d.r8()
this.f=u
this.r=t
d.c=s},
bHH(d){var w,v,u,t,s,r,q,p,o,n
if(d.gH(0)<=4)return-1
w=d.c
v=d.gH(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a51(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aj3(A.hB)
o.aHv(r.ex(),A.hB,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cq2.prototype={}
C.au2.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cq5.prototype={
aDn(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aP()
o.b=e.aP()
w=D.axT.h(0,e.aP())
o.c=w==null?D.Jc:w
o.d=e.aP()
o.e=e.aP()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aP()
u=e.aP()
o.x=e.akh(v)
o.y=e.h1(u).ex()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aLY:D.BS
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.BS&&u>2){w=o.y
w.toString
s=B.qC(w,A.hB,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aP()===39169){s.aP()
s.aP()
s.akh(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aP()
o.at=D.aLZ
o.ax=new C.cq2(r,q)
w=D.axT.h(0,q)
o.c=w==null?D.Jc:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gH(d){return this.bfT().length},
als(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qC(new Uint8Array(0),A.hB,q,q)
w=r.at
if(w!==D.BS)if(p.gH(0)<=0)r.at=D.BS
else{if(w===D.aLY){p=r.bCX(p)
r.Q=p}else if(w===D.aLZ){p=r.bCA(p)
r.Q=p}r.at=D.BS}w=r.c
if(w===D.abk){v=p.c
u=B.da()
p=r.Q
if(p.gH(0)<=524288e3)u.b=A.oE.An(p.ex(),!0,!1)
else{t=B.a67(A.hB,r.w)
p=r.Q
p.toString
A.oE.a1k(p,t,!0,!1)
u.b=t.Fq()}r.Q.c=v
return B.qC(u.b6(),A.hB,q,q)}else if(w===D.abl){s=B.a67(A.hB,32768)
p=r.Q
v=p.c
C.h89().czX(p,s)
u=s.Fq()
r.Q.c=v
return B.qC(u,A.hB,q,q)}else return B.qC(p.ex(),A.hB,q,q)},
bfT(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ex()},
u(d){return this.x},
b2K(d){var w=this.ch,v=C.HY(C.fZK(w[0].M(0),d))
w[0]=v
v=w[1].ap(0,v.SL(0,C.HY(255)))
w[1]=v
w[1]=v.aO(0,C.HY(134775813)).ap(0,C.HY(1)).SL(0,C.HY(4294967295))
w[2]=C.HY(C.fZK(w[2].M(0),w[1].lU(0,24).M(0)))},
aM7(){var w=(this.ch[2].SL(0,C.HY(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bCX(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qC(new Uint8Array(0),A.hB,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b2K(u[v.c++]^r.aM7())}t=r.Q.ex()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aM7()
r.b2K(s)
u&2&&B.ah(t)
t[w]=s}return B.qC(t,A.hB,q,q)},
bCA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ex()
v=16}else if(k===2){w=d.h1(12).ex()
v=24}else{w=d.h1(16).ex()
v=32}u=d.h1(2).ex()
t=d.h1(d.gH(0)-10)
s=d.h1(10)
r=t.ex()
k=this.ay
k.toString
q=C.hp8(k,w,v)
p=new Uint8Array(B.cl(A.aD.dA(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aD.dA(q,v,k)))
if(!C.fSB(A.aD.dA(q,k,k+2),u))throw B.O(B.fb("password error"))
k=new Uint8Array(16)
n=new C.bzZ(k,new Uint8Array(16),p)
k=x.r
m=J.a2W(0,k)
m=n.r=new C.caH(m)
m.c=!0
m.b=m.bfc(!0,new C.apN(p))
if(m.c)m.d=B.bi(D.nv,!0,k)
else m.d=B.bi(D.xo,!0,k)
l=C.fQQ(C.fQS(),64)
l.b8Z(new C.apN(o))
n.w=l
n.cIW(r,0,r.length)
k=s.ex()
m=n.x
m===$&&B.c()
if(!C.fSB(k,m))throw B.O(B.fb("macs don't match"))
return B.qC(r,A.hB,null,null)}}
C.b4G.prototype={
cJk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aP()
e.aP()
e.aP()
e.aP()
e.aP()
e.aP()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aP()
v=e.aP()
u=e.aP()
n.y=e.aP()
e.aP()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akh(w)
if(v>0){t=e.h1(v).ex()
n.ax=t
if(v>=4){s=B.qC(t,A.hB,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aP()
p=s.aP()
o=s.a51(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.r8()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.r8()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.r8()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akh(u)
f.c=n.as
t=new C.cq5(D.Jc,n,D.BS,B.a([C.HY(0),C.HY(0),C.HY(0)],x.f3))
n.ch=t
t.aDn(0,f,g)},
u(d){return this.at}}
C.cq3.prototype={
czY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cq4(B.a([],x.fT))
this.a=g
g.aDn(0,d,f)
g=B.a([],x.bm)
w=B.Q(x.N,x.r)
v=new C.aNM(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c5(o,"/")||A.a.c5(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.PR(o,A.o.ak(Date.now(),1000),0):C.fJm(o,q.w,q)
v.G(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fJm(o,q.w,q)
if(k.as==null)k.b6K()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aj3(A.hB)
j.aHv(o,A.hB,h,h)}i=j==null?h:j.ex()
if(i!=null)new B.IC(!1).Gr(i,0,h,!0)}}return v}}
C.bzZ.prototype={
cIW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bg(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.h7T(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dD("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dD("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bG7(u,0,w,0,o)}else{o===$&&B.c()
q.bD0(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Jw(w,0)
m.x=A.aD.dA(m.x,0,10)
w=m.w
l=w.a
l.l2(0)
w=w.d
w===$&&B.c()
l.Bg(0,w,0,w.length)
return f}}
C.caM.prototype={}
C.caQ.prototype={}
C.caK.prototype={}
C.apN.prototype={}
C.caP.prototype={
cAc(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b8Z(new C.apN(A.aD.fT(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bH5(n.a,n.b,t,s,r)
r+=v}A.aD.ha(f,g,g+w,s)
return o.a.c},
bH5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.O(B.dD("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bg(0,d,0,d.length)
v.Bg(0,f,0,4)
u=m.c
u===$&&B.c()
w.Jw(u,0)
u=m.c
A.aD.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bg(0,s,0,s.length)
w.Jw(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.caL.prototype={}
C.caJ.prototype={}
C.apO.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.apO){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rl(d,e){var w=this.a
w===$&&B.c()
w=A.o.rl(w,e.gbQu())
if(!w)e.gbQu()
return w},
aFI(d,e){this.a=0
this.b=d},
rn(d){return this.aFI(d,null)},
aGh(d){var w,v=this,u=v.b
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
w.aVN(v,u)
u=w.b
u===$&&B.c()
w.aVN(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aVN(d,e){var w,v=A.o.fE(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bl(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.caO.prototype={
l2(d){var w,v=this
v.a.rn(0)
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
akX(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aXc(u,0)
v.c=0}v.a.aGh(1)},
Bg(d,e,f,g){var w=this.cbL(e,f,g)
f+=w
g-=w
w=this.cbM(e,f,g)
this.cbC(e,f+w,g-w)},
Jw(d,e){var w,v=this,u=C.fQR(v.a),t=u.a
t===$&&B.c()
t=C.fH8(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fH8(w,3)
v.cbG()
v.cbD(u)
v.ap1()
v.c5Y(d,e)
v.l2(0)
return 20},
aXc(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nB(A.aD.gaK(d),d.byteOffset,d.length).getUint32(e,A.hP===w.d)
if(w.w===16)w.ap1()},
ap1(){this.cIV()
this.w=0
A.d.hh(this.r,0,16,0)},
cbC(d,e,f){while(f>0){this.akX(d[e]);++e;--f}},
cbM(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aXc(d,e)
e+=4
f-=4
w.aGh(4)
v+=4}return v},
cbL(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.akX(d[e]);++e;--f;++v}return v},
cbG(){this.akX(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.akX(0)}},
cbD(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ap1()
u=v.d
switch(u){case A.hP:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Cj:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.O(B.b9("Invalid endianness: "+u.u(0)))}},
c5Y(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hP===this.d,s=0;s<w;++s){r=v[s]
q=J.nB(A.aD.gaK(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.caR.prototype={
cIV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pB[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pB[30]
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
C.caN.prototype={
b8Z(d){var w,v,u,t,s=this,r=s.a
r.l2(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bg(0,w,0,v)
w=s.d
w===$&&B.c()
r.Jw(w,0)
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
s.b3T(s.d,u,54)
s.b3T(s.e,u,92)
u=s.d
r.Bg(0,u,0,u.length)},
Jw(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Jw(s,w)
s=u.e
t.Bg(0,s,0,s.length)
v=t.Jw(d,e)
s=u.e
A.aD.hh(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bg(0,s,0,s.length)
return v},
b3T(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.caI.prototype={}
C.caH.prototype={
a_J(d){return(D.nv[d&255]&255|(D.nv[d>>>8&255]&255)<<8|(D.nv[d>>>16&255]&255)<<16|D.nv[d>>>24&255]<<24)>>>0},
bfc(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.O(B.dD("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.r,r=0;r<t;++r)s[r]=B.bT(4,0,!1,u)
switch(v){case 4:q=J.nB(A.aD.gaK(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_J((m>>>8|(m&$.pB[24])<<24)>>>0)^D.ci9[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nB(A.aD.gaK(e),e.byteOffset,w)
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
p=(p^f.a_J((k>>>8|(k&$.pB[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_J((k>>>8|(k&$.pB[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nB(A.aD.gaK(e),e.byteOffset,w)
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
p=(p^f.a_J((g>>>8|(g&$.pB[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_J(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.O(B.b9("Should never get here"))}return s},
bG7(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nB(A.aD.gaK(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.dZ[a8&255]
u=D.dZ[a9>>>8&255]
t=$.pB[8]
s=D.dZ[b0>>>16&255]
r=$.pB[16]
q=D.dZ[b1>>>24&255]
p=$.pB[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.dZ[a9&255]
s=D.dZ[b0>>>8&255]
u=D.dZ[b1>>>16&255]
v=D.dZ[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.dZ[b0&255]
u=D.dZ[b1>>>8&255]
s=D.dZ[a8>>>16&255]
q=D.dZ[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.dZ[b1&255]
a8=D.dZ[a8>>>8&255]
a9=D.dZ[a9>>>16&255]
b0=D.dZ[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.dZ[n&255]
b0=D.dZ[m>>>8&255]
a9=D.dZ[l>>>16&255]
a8=D.dZ[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.dZ[m&255]
b0=D.dZ[l>>>8&255]
o=D.dZ[b1>>>16&255]
s=D.dZ[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.dZ[l&255]
o=D.dZ[b1>>>8&255]
b0=D.dZ[n>>>16&255]
u=D.dZ[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.dZ[b1&255]
o=D.dZ[n>>>8&255]
s=D.dZ[m>>>16&255]
v=D.dZ[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.dZ[a8&255]^C.mX(D.dZ[a9>>>8&255],24)^C.mX(D.dZ[b0>>>16&255],16)^C.mX(D.dZ[b1>>>24&255],8)^b6[w][0]
m=D.dZ[a9&255]^C.mX(D.dZ[b0>>>8&255],24)^C.mX(D.dZ[b1>>>16&255],16)^C.mX(D.dZ[a8>>>24&255],8)^b6[w][1]
l=D.dZ[b0&255]^C.mX(D.dZ[b1>>>8&255],24)^C.mX(D.dZ[a8>>>16&255],16)^C.mX(D.dZ[a9>>>24&255],8)^b6[w][2]
b1=D.dZ[b1&255]^C.mX(D.dZ[a8>>>8&255],24)^C.mX(D.dZ[a9>>>16&255],16)^C.mX(D.dZ[b0>>>24&255],8)^b6[w][3]
a7=D.nv[n&255]
b0=D.nv[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nv[l>>>8&255]
a9=D.nv[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nv[b1>>>8&255]
h=D.nv[n>>>16&255]
g=D.nv[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nv[l>>>24&255]
s=s[3]
a1=J.nB(A.aD.gaK(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nB(A.aD.gaK(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nB(A.aD.gaK(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nB(A.aD.gaK(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bD0(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nB(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nB(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nB(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nB(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.dY[a6&255]
v=D.dY[b0>>>8&255]
u=$.pB[8]
t=D.dY[a5>>>16&255]
s=$.pB[16]
r=D.dY[a4>>>24&255]
q=$.pB[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.dY[a4&255]
t=D.dY[a6>>>8&255]
v=D.dY[b0>>>16&255]
w=D.dY[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.dY[a5&255]
v=D.dY[a4>>>8&255]
t=D.dY[a6>>>16&255]
r=D.dY[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.dY[b0&255]
a5=D.dY[a5>>>8&255]
a4=D.dY[a4>>>16&255]
a6=D.dY[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.dY[p&255]
a6=D.dY[b0>>>8&255]
a4=D.dY[n>>>16&255]
a5=D.dY[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.dY[o&255]
a4=D.dY[p>>>8&255]
a7=D.dY[b0>>>16&255]
t=D.dY[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.dY[n&255]
a7=D.dY[o>>>8&255]
a5=D.dY[p>>>16&255]
v=D.dY[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.dY[b0&255]
a7=D.dY[n>>>8&255]
t=D.dY[o>>>16&255]
w=D.dY[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.dY[a6&255]^C.mX(D.dY[b0>>>8&255],24)^C.mX(D.dY[a5>>>16&255],16)^C.mX(D.dY[a4>>>24&255],8)^b5[a9][0]
o=D.dY[a4&255]^C.mX(D.dY[a6>>>8&255],24)^C.mX(D.dY[b0>>>16&255],16)^C.mX(D.dY[a5>>>24&255],8)^b5[a9][1]
n=D.dY[a5&255]^C.mX(D.dY[a4>>>8&255],24)^C.mX(D.dY[a6>>>16&255],16)^C.mX(D.dY[b0>>>24&255],8)^b5[a9][2]
b0=D.dY[b0&255]^C.mX(D.dY[a5>>>8&255],24)^C.mX(D.dY[a4>>>16&255],16)^C.mX(D.dY[a6>>>24&255],8)^b5[a9][3]
a4=D.xo[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xo[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xo[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xo[o>>>8&255]
i=D.xo[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xo[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nB(A.aD.gaK(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bIw.prototype={}
C.bIx.prototype={
gH(d){var w=this.a.length
return w},
als(){return B.qC(this.a,A.hB,null,null)}}
C.b6c.prototype={
u5(d){return C.hsj(d)}}
C.ck4.prototype={
L5(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7F(v,t+20,u+16,t,u,B.te(d.x))},
mQ(d){return!1}}
C.bJp.prototype={
cuv(d){if(this.b)throw B.O(B.b9("FontLoader is already loaded"))
this.c.push(d.bA(new C.bJq(),x.E))},
m9(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$m9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.O(B.b9("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$m9)
case 6:w=5
return B.b(p.fbs(f,r),$async$m9)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$m9,v)}}
C.asK.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a65.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aU(this))return!1
return e instanceof C.a65&&e.a===this.a},
gV(d){return B.bl(B.aU(this),B.vT(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aU(this)===D.eZm)return"["+(w+B.dX(this.a))+"]"
return"[ObjectKey "+(w+B.dX(this.a))+"]"}}
C.aS3.prototype={
bX(d){var w=new C.axu(!0,this.e,null,new B.d6(),B.c8())
w.bW()
w.scw(null)
return w},
c3(d,e){var w
x.cQ.a(e)
e.sxD(0,!0)
w=this.e
if(!w.A(0,e.ae)){e.ae=w
e.aC2()}}}
C.axu.prototype={
sxD(d,e){return},
goK(){var w=this.a7$
return w!=null},
gkx(){var w=this.a7$
return w!=null},
KV(d){var w=d==null?B.fLG(null):d
w.sa2c(this.ae)
return w}}
C.ZC.prototype={
S(){return new C.aFK(B.aY(x.N))},
cHd(d){return this.d.$1(d)},
cF1(){return this.e.$0()}}
C.aFK.prototype={
Z(){this.a0()
this.Nn()},
Nn(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cF1(),$async$Nn)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ePW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nn,v)},
WL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.R(r).k("a3<1>")
p=B.z(new B.a3(r,new C.eQ_(t),q),q.k("E.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eQ0(t))
w=3
return B.b(C.akO(p),$async$WL)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eQ1(t,s,p))
w=4
return B.b(t.Nn(),$async$WL)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WL,v)},
ZK(d){return this.cfH(d)},
cfH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.ePX(t))
s=J.q(d,"id")
w=3
return B.b(C.bTz(J.k(s==null?"":s)),$async$ZK)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.ePY(t))
w=1
break}q=C.fGE(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cHd(B.a([q],x.D)),$async$ZK)
case 4:if(t.c==null){w=1
break}t.n(new C.ePZ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ZK,v)},
Nm(d,e){return this.bDp(0,e)},
bDp(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.ePR(q),r,null,!0,!0,x.y),$async$Nm)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.ePS(t))
s=s.h(e,"id")
w=4
return B.b(C.akN(J.k(s==null?"":s)),$async$Nm)
case 4:if(t.c==null){w=1
break}t.n(new C.ePT(t))
w=5
return B.b(t.Nn(),$async$Nm)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nm,v)},
ctz(d){var w=B.bg(d),v=w==null?null:w.bP()
if(v==null)return""
return A.hW[B.bB(v)-1]+" "+B.bN(v)},
aLZ(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LE,A.n),w,e,w,w,w,w,w,e)},
aLY(d){return this.aLZ(d,44)},
b18(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LE:u,r=B.m(14),q=B.V(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,L.GP,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.GP,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bk2,u,u,u)],p))}return B.C(B.aJ(A.c5,B.de(u,B.A(q,A.m,u,A.b5,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hG,u,u,u,A.wh,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQ5(this,d),u,u,u,u,u,u,!1,A.ae),1)},
c9P(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.db.j(0.14):D.U2,n=B.m(18),m=p?A.db:A.du
m=B.H(m,A.r,p?1.8:1)
w=this.aLY(A.p7)
v=B.d(d.b,q,1,A.Z,q,q,q,D.aKf,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.C(B.u(B.a([v,A.dd,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aKh,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LE:q
u=p?q:B.H(A.be,A.r,1.6)
r=p?D.bxX:q
return B.aJ(q,B.de(q,B.A(B.a([w,A.bd,t,B.de(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a6),A.fO,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fO,q,q,A.d6,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ePV(this,p,d),q,q,q,q,q,q,!1,A.ae)},
chb(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.ctz(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.du,A.r,1)
v=r.aLY(A.KP)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.Z,q,q,q,D.aKf,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.C(B.u(B.a([u,A.dd,B.d(p+" slides"+t,q,q,q,q,q,q,D.aKh,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aYP(A.hf,A.bo,"Bring it back",r.r?q:new C.eQ2(r,d))
return B.p(q,B.A(B.a([v,A.bd,t,p,A.bq,r.aYP(A.e4,A.cN,"Delete",r.r?q:new C.eQ3(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.U2,q,w,o,q,q,A.n),q,q,q,A.d6,D.beJ,q,q,q)},
aYP(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hJ(B.aJ(w,B.p(w,B.V(d,v?A.be:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
aph(d,e,f){var w=null
return new B.B(D.bdN,B.u(B.a([B.V(d,A.be,w,w,w,46),A.aa,B.d(e,w,w,w,w,w,w,D.eyc,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.er4,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c3
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bN,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.be,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aLZ(A.xb,46),A.bd,D.bkM],t)
if(j.r)s.push(D.dMG)
s.push(B.aF(i,i,i,i,A.Lo,i,i,i,new C.eQ8(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.du,A.r,1)
o=J.a6(h)
q=B.a([A.T,u,new B.B(D.bhe,s,i),B.p(i,B.A(B.a([j.b18(0,A.wN,"Save",j.a.c.length),j.b18(1,A.L4,"Saved",o.gH(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bgj,A.ef,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cN:A.bo).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cN:A.bo).j(0.4),A.r,1)
p=j.y
n=p?A.KR:A.ej
n=B.V(n,p?A.cN:A.bo,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.C(B.d(m,i,i,i,i,i,i,A.a3P,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bgf,A.iD,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.C(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.euq,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.exh,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eQ9(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.aph(A.p7,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.c9P(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dMh)
else if(j.e==null)s.push(j.aph(A.afO,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.aph(A.o4,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.chb(r.gT(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.ck,B.cQ(u,i,V.ad3,i,i,A.af,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbX0()
p=s?i:D.LE
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.a9(0,A.G,A.b0.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wN,m?A.j9:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.B(D.bgS,B.aJ(i,B.de(i,B.A(B.a([k,A.a3f,new B.dp(1,A.ck,B.eY(A.B,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j9:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b5,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hG,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.T)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,i,new B.aV(0,1/0,0,w.a.b*0.9),D.aS7,i,i,i,i,i,i,i,i)}}
C.nS.prototype={
ad(){return B.D(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a4().aa()],x.N,x.z)}}
C.Wp.prototype={
S(){return new C.auy(B.a([],x.k),B.f2(null,x.H))},
gdQ(){return this.c}}
C.auy.prototype={
Z(){this.a0()
this.Nu()},
Nu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_B(t.a.c),$async$Nu)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.czk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
cn4(d){var w,v,u,t=this
d.c=new B.N(Date.now(),0,!1)
w=J.pI(t.d,new C.czn(d))
v=w<0
if(v&&C.hpv(d))return t.f
u=t.d
if(v)J.p_(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fxG(new C.czo(t),v)
return t.f=t.f.bA(new C.czp(t,d),v).eQ(new C.czq())},
Hc(d,e,f){return this.c3E(0,e,f)},
aTi(d,e){return this.Hc(0,e,!1)},
c3E(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a7(s,!1).ct(B.eO(new C.czj(t,e),!1,null,x.H)),$async$Hc)
case 3:w=4
return B.b(t.f,$async$Hc)
case 4:w=5
return B.b(t.Nu(),$async$Hc)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hc,v)},
aSB(d){var w=A.o.u(1000*Date.now()),v=d==null?D.daB:d
this.Hc(0,new C.nS(w,v,new B.N(Date.now(),0,!1)),!0)},
bWw(){return this.aSB(null)},
aas(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aas=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.czr(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aas)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aSB(s)
case 1:return B.h(u,v)}})
return B.i($async$aas,v)},
Hb(d,e){return this.bDh(0,e)},
bDh(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cze(e),s,null,!0,!0,x.y),$async$Hb)
case 3:if(g!==!0){w=1
break}t.n(new C.czf(t,e))
w=4
return B.b(t.f,$async$Hb)
case 4:w=5
return B.b(C.adH(t.a.c,e.a),$async$Hb)
case 5:w=6
return B.b(t.Nu(),$async$Hb)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hb,v)},
BY(d){return this.bvF(d)},
bvF(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$BY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.cza(d),r,!0,!0,!1,null,!1,!1,x.N),$async$BY)
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
return B.b(t.aTi(0,d),$async$BY)
case 9:w=5
break
case 7:w=10
return B.b(F.fHa(r,d.b,null),$async$BY)
case 10:w=5
break
case 8:w=11
return B.b(t.Hb(0,d),$async$BY)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$BY,v)},
bQr(){var w,v,u=null,t=[D.daE,D.daC,D.daD],s=new C.czh(),r=B.m(26),q=x.V,p=B.a([new B.a9(0,A.G,A.dC.j(0.4),A.eI,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b3(999,999)
n.push(B.p(u,new B.w(D.cWp[w],u,A.ov,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bx(v,v,v,v),u,u,A.n),u,u,u,u,A.nm,u,u,u))}return B.p(u,B.A(B.a([B.C(B.u(B.a([D.eV5,A.P,B.cd(A.bH,n,A.by,6,6),A.aS,B.aJ(u,B.p(u,D.eaS,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.cC,10)],q),u,A.n),u,u,u,u,U.adq,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.czg(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a4(130,110,new B.am(A.B,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bF3,A.n),u,u,u,u,D.bho,u,u,u)},
bvD(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.a9(0,A.G,A.x.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.V,v,A.aX,A.q,B.a([B.eY(A.B,F.all(d.b),A.h,A.bM),D.dQU,B.an(v,B.aJ(v,B.p(v,D.byH,A.h,v,v,D.aT_,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cz5(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.Z,v,v,v,D.eoy,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fT(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.euA,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cz6(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cz7(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.B(H.abY,B.hJ(B.aJ(s,B.p(s,A.air,A.h,s,s,new B.o(s,s,s,s,B.a([new B.a9(0,A.G,A.b0.j(0.5),A.J,12)],x.V),E.uI,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbXL(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mp,s,s,s,!0,s,s,s,s,s,D.eV9,s,s,s,1,s,!0)
if(t.e)r=D.aWd
else{w=t.bQr()
v=B.a([D.eHY,A.ab],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.eo1,s,s,s),A.h,s,s,new B.o(D.b_t,s,s,u,s,s,A.n),s,s,s,s,A.DH,s,s,s))}r=B.a([new B.nn(Ac.Ve,new B.lJ(w,s),s),new B.nn(D.bgM,new B.lJ(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ch(t.d))r.push(D.egr)
else r.push(new B.nn(D.bgh,B.N1(new B.nX(new C.czs(t),J.aa(t.d),!0,!0,!0,0,B.rg(),s),D.aVv),s))
r=B.uF(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.af,!1,r)}return B.cg(q,D.aZo,r,s,!1,!1,s,s)}}
C.Wn.prototype={
S(){return new C.auu(B.a([],x.bx))},
S2(d){return this.d.$1(d)}}
C.aBF.prototype={}
C.auu.prototype={
aVP(d,e,f){var w=$.at(),v=new B.ao(new B.bb(d,A.aY,A.aL),w),u=this.gaTh()
v.aJ(0,u)
w=new B.ao(new B.bb(e,A.aY,A.aL),w)
w.aJ(0,u)
return new C.aBF(v,w,f)},
CL(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cW(A.qa,new C.cyz(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.at()
u=new B.ao(new B.bb(w.a,A.aY,A.aL),v)
t=m.gaTh()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ao(new B.bb(w.b,A.aY,A.aL),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ao(new B.bb(w.c,A.aY,A.aL),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.ao(new B.bb(p.a,A.aY,A.aL),v)
o.aJ(0,t)
n=new B.ao(new B.bb(p.b,A.aY,A.aL),v)
n.aJ(0,t)
r.push(new C.aBF(o,n,p.c))}if(r.length===0)r.push(m.aVP("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goq()
q=r.a
q.S2(q.c)}q=r.d
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
zH(){var w=0,v=B.j(x.H),u=this,t
var $async$zH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goq()
t=u.a
w=2
return B.b(t.S2(t.c),$async$zH)
case 2:return B.h(null,v)}})
return B.i($async$zH,v)},
bXJ(){this.n(new C.cyy(this))
this.CL()},
aSj(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.cyB(w,d,v))
w.CL()},
bXK(d,e){var w=A.d.cu(this.w,e)
this.n(new C.cyJ())
this.CL()
$.aS.x1$.push(new C.cyK(w))},
OD(d){return this.c9F(d)},
c9F(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(80,1400,A.er),$async$OD)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$OD)
case 8:p=f
o=q.b.toLowerCase()
n=J.af8(o,".png")?"image/png":"image/jpeg"
r.n(new C.cyC(d,n,p))
r.CL()
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
return B.i($async$OD,v)},
wH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h2l(r,t.goq()),$async$wH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cyA(t,s))
t.CL()
case 1:return B.h(u,v)}})
return B.i($async$wH,v)},
c9X(d){var w,v=this,u=null,t=F.ffj(d.c)
if(t==null)return new B.bE(A.a_,u,u,B.hg(D.bs7,D.eKd,new C.cyE(v,d),u),u)
w=x.p
return new B.B(A.cK,new B.am(A.V,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fC(t,A.B,u,u,A.cj,A.bM,!0,140,!1,u,1/0),A.ap),B.an(u,B.A(B.a([v.aYQ(A.k_,new C.cyF(v,d)),A.bq,v.aYQ(A.cu,new C.cyG(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aYQ(d,e){var w=null
return B.aD(!1,A.X,!0,w,B.aH(!1,w,!0,new B.B(A.hd,B.V(d,A.c,w,w,w,18),w),A.cD,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cD,w,w,A.ac)},
Hd(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zH(),$async$Hd)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fHa(s,t.goq(),new C.cyI(t)),$async$Hd)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hd,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eH(B.a([new B.B(A.qb,B.hg(D.bwJ,D.ePO,n.gasQ(),B.fn(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiq,m,m,m,new C.cyL(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Tu,m,1,m,m,m,!1,m,!1,E.mp,m,m,m,!0,m,m,m,m,m,D.eKZ,m,m,m,1,m,!0),j=An.aQQ(O.kM,A.c,A9.SC,A.nr,D.eLF,n.gbXI()),i=B.m(18),h=n.gasP(),g=B.a([new B.a9(0,A.G,A.x.j(0.4),A.jm,12)],x.V)
g=B.aJ(m,B.p(m,new B.a4(92,142.1818181818182,B.eY(A.B,F.all(n.goq()),A.h,A.dp),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.es,B.C(B.u(B.a([D.eWz,A.au,B.d(F.fFI(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.ezV,m,m,m),A.T,B.dj(E.ahH,E.aL_,h,B.bk(A.dC,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.Tu,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b2(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nE,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b2(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b2(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aS],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b3(16,16)
u=new B.ay(O.kM.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bvu,m,m,m,v===0?m:new C.cyM(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bBz,m,m,m,v===r-1?m:new C.cyN(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.cyO(n,v)
p=new B.b3(12,12)
o=new B.b3(12,12)
g.push(B.p(m,B.u(B.a([new B.cD(A.aZ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eAp,m,m,m,m,m,m,m,m,m),A.b9,s,q,B.aF(m,m,m,m,B.V(A.e4,A.nW,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.dZ(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bx(p,p,p,p),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cb,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.c9X(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.dZ(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bx(o,o,o,o),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mp,m,new B.c2(u,u,u,u),new B.bx(w,w,w,w),m,m,A.n),m,m,new C.a65(h),A.e3,D.beX,m,m,m))}return B.nU(!0,B.cg(k,E.aal,B.cQ(g,m,D.bfo,m,m,A.af,!1),m,!1,!1,j,m),new C.cyP(n),x.C)}}
C.auw.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cN:E.mp,q=B.m(16),p=B.m(16),o=s?A.aH.j(0.08):A.c.j(0.04)
s=s?A.aH.j(0.16):A.dC.j(0.22)
w=B.m(12)
v=x.p
return new B.B(A.fh,B.aD(!1,A.X,!0,t,B.aH(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.C(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(u.e,t,t,t,t,t,t,D.aJG,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.em,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anr.prototype={
S(){return new C.aAw()}}
C.aAw.prototype={
Z(){this.a0()
this.Xk()},
bo(d){this.bz(d)
if(d.c!=this.a.c)this.ZB()},
ZB(){var w=0,v=B.j(x.H),u=this,t
var $async$ZB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$ZB)
case 2:u.d=null
if(u.c!=null)u.n(new C.dXj(u))
w=3
return B.b(u.Xk(),$async$ZB)
case 3:return B.h(null,v)}})
return B.i($async$ZB,v)},
Xk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cT(n,"http://")||J.cT(n,"https://")||J.cT(n,"data:")){o=B.W0(B.cp(n,0,null),new B.Np(!0))
r.d=o}else{o=B.fb("unsupported video ref")
throw B.O(o)}w=7
return B.b(o.hW(0).cJ(0,A.oT),$async$Xk)
case 7:if(r.c==null){w=1
break}r.d.rp(!1)
r.n(new C.dXh(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a5(m)
$.ak.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dXi(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xk,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
bZC(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fS(0)
w.n(new C.dXk(w))}else{v.p5(0)
w.n(new C.dXl(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iS.j(0.92),D.It.j(0.95)],x.O)
w=B.H(A.bQ.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pa,A.bQ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bQ(B.as(B.u(B.a([t,new B.a4(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),A.b6)}if(p.f)return B.as(B.V(A.ah0,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aWX
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eY(A.B,new B.a4(r,q,new B.z_(s,o),o),A.q,A.bM)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.as(B.p(o,B.V(A.j_,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.L(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bu(n,new B.am(A.V,o,A.aX,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gbZB(),o,o,o,o,o,o,!1,A.ae)}}
C.wB.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.j9.prototype={}
C.aaN.prototype={
B(d){return B.p7(new C.dOI(this,B.K(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aac.prototype={
B(d){var w,v,u=null,t=B.K(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iS.j(t?0.35:0.4),A.r,1),p=t?D.IU:A.c,o=x.V,n=B.a([new B.a9(0,A.G,A.x.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.H(A.bQ.j(0.5),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dG,6)],o)
w=this.c
o=B.C(B.p(u,new B.fT(0.5625,C.hH2(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.adS,u,u,u,u),1)
m=D.iS.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iS,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.X,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.dd,B.d(w.c,u,2,A.Z,u,u,u,B.l(u,u,t?A.aB:D.b4J,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c2(new B.ay(m,1,A.r,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.ace,u,u,u)],v),A.ah,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wE.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nd.prototype={}
C.bf8.prototype={
U2(d){var w=null
return new B.bE(A.a_,w,w,B.G0(A.B,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bvm(){return this.U2(1)},
atj(d){var w=null,v=B.m(8),u=B.H(A.hE,A.r,0.9)
return B.p(A.B,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8E,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.A(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b5,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atj("TAARIFA ZA WANANDOA"),A.ar,w.bvm(),A.dd,w.U2(0.9),A.dd,w.U2(0.7),A.P,w.atj("TAMKO LA MAKUBALIANO"),A.fW,w.U2(1),A.dd,w.U2(0.95),A.P,w.atj("MASHAHIDI"),A.b9,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.aaQ.prototype={
B(d){return B.p7(new C.e1k(B.K(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.act.prototype={
B(d){var w,v,u,t,s,r=null,q=B.K(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.at.j(q?0.35:0.4),A.r,1),m=q?D.b4n:A.c,l=x.V,k=B.a([new B.a9(0,A.G,A.x.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.H(A.at.j(0.5),A.r,1)
l=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dG,6)],l)
w=this.c
v=C.fGc(w.a)
if(v==null)v=A.d.gI(D.O3)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.C(B.p(r,new B.fT(0.5625,new B.am(A.V,r,A.aX,A.q,B.a([B.bU(0,B.fC(C.fGb(v.d),A.B,r,r,A.cj,A.bM,!0,r,!1,r,r),0,0,0),new B.B(A.acV,new C.bf8(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.adS,r,r,r,r),1)
j=A.at.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:X.IV,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.dd,B.d(w.c,r,2,A.Z,r,r,r,B.l(r,r,q?A.aB:D.aZQ,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c2(new B.ay(j,1,A.r,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.ace,r,r,r)],s),A.ah,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kB.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5z.prototype={}
C.TH.prototype={
S(){var w=$.at()
return new C.aAP(new B.cn(null,x.A),new B.ao(A.aq,w),new B.ao(A.aq,w),B.m6(0,null,null),A.d.gI(D.asu),D.dkU,B.a([],x.L),B.a([],x.gE))}}
C.aAP.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yp(C.fjc(v.y),"","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fi9().bA(new C.e4x(v),w)
$.to().jR(0,"assets/images/ngmy_logo.png").bA(new C.e4y(v),w).eQ(new C.e4z())},
p(){var w=this,v=w.e,u=$.at()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
ae8(d){var w=null,v=this.c
if(v!=null)v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
NZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(88,1600,A.er),$async$NZ)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$NZ)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.fnu(new B.pR(p,1),n),$async$NZ)
case 9:if(r.c!=null)r.n(new C.e4d(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a5(l)
r.ae8("Could not open that picture. "+B.t(o))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$NZ,v)},
ab8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ab8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.e4k(q))
t=4
q.a.toString
p=C.hLq()
m=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,q.e.a.a,m),$async$ab8)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4l(q,o))
r.push(6)
w=5
break
case 4:t=3
k=s.pop()
n=B.a5(k)
q.ae8(B.t(n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4m(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab8,v)},
Xw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Xw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.aa(i)!==0)if(!q.Q){h=q.z
h=A.a.i(h.b).length===0&&h.f.length===0}if(h){w=1
break}q.n(new C.e4f(q,i))
t=4
q.a.toString
p=C.hLp()
h=q.z
m=q.y
l=q.w
k=B.z(q.at,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Xw)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4g(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a5(g)
if(q.c!=null)q.n(new C.e4h(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4i(q))
$.aS.x1$.push(new C.e4j(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xw,v)},
c_j(d){this.n(new C.e4e(this,d))},
D_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.Q){k=q.z
k=A.a.i(k.b).length===0&&k.f.length===0}else k=!0
if(k){w=1
break}q.n(new C.e4b(q))
t=4
w=7
return B.b($.aS.gm3(),$async$D_)
case 7:w=8
return B.b(B.bK(A.ng,null,x.H),$async$D_)
case 8:k=$.aS.ae$.x.h(0,q.d)
p=k==null?null:k.gb3()
if(!(p instanceof B.q1))throw B.O("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gX(0).a),$async$D_)
case 9:o=e
w=10
return B.b(o.hk(A.fR),$async$D_)
case 10:n=e
if(n==null)throw B.O("Could not make the picture.")
w=11
return B.b(A3.adK(J.f7(A.dz.gaK(n)),"ngmy_news.png","image/png"),$async$D_)
case 11:m=e
q.ae8(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a5(i)
q.ae8(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4c(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D_,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.z,a1=!(A.a.i(a0.b).length===0&&a0.f.length===0)
a0=B.aF(d,d,d,d,A.kZ,d,d,d,new C.e4q(a2),d,d,d,d,d,d)
w=x.p
v=B.a([],w)
if(e.ax.length!==0)v.push(B.aF(d,d,d,d,D.bxe,d,d,d,new C.e4r(e),d,d,d,d,"Undo the last change",d))
v.push(B.aF(d,d,d,d,A.ob,d,d,d,a1?e.gaU7():d,d,d,d,d,"Download",d))
a0=B.eH(v,d,d,!0,!0,A.Ja,d,1,!0,d,0,!1,d,!1,d,d,a0,d,!0,d,d,d,d,d,D.eb0,d,d,d,1,d,!0)
v=x.V
u=B.a([new B.a9(0,A.G,A.x.j(0.6),A.eI,24)],v)
t=e.z
s=e.y
r=e.w
u=B.p(d,new B.fT(0.7142857142857143,B.eY(A.B,new B.ep(new C.aY0(t,s,r,e.x,d),e.d),A.h,A.dp),d),A.h,d,d,new B.o(d,d,d,d,u,d,A.n),d,d,d,d,d,d,d,d)
s=B.d("1  YOUR PICTURE",d,d,d,d,d,d,D.a45,d,d,d)
t=e.Q?d:e.gc_i()
t=B.a([B.C(B.dj(D.bxY,B.d(r==null?"Add a picture":"Change the picture",d,d,d,d,d,d,A.cb,d,d,d),t,B.bk(D.ri,d,d,d,A.c,A.fV,d,d,new B.b5(B.m(14),N.vC),d,d,d)),1)],w)
r=e.w
if(r!=null)A.d.v(t,B.a([A.aw,B.bu(B.m(10),B.fC(r,A.B,d,d,A.cj,A.bM,!1,48,!1,d,48),A.ap)],w))
t=B.A(t,A.m,d,A.e,A.j,0,d,d)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",d,d,d,d,d,d,D.a45,d,d,d)
q=B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),e.e,d,d,d,d,d,2,e.aNI("Leave it empty and the AI picks a story about NGMY"),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,3,1,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.di,!0,A.a5,d,A.am,d,d,d,d)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cRE[o]
p.push(B.mZ(d,D.ri,new B.w(n.a,d,A.os,d,d,d,d,d,d,d,d,d),A.hj,new C.e4s(e,n),d,N.vC,d))}p=B.cd(A.bH,p,A.by,6,8)
m=B.d("3  PICK A DESIGN",d,d,d,d,d,d,D.a45,d,d,d)
l=B.a([],w)
for(o=0;o<20;++o)l.push(e.bDY(D.asu[o]))
l=B.cQ(l,d,d,d,d,A.aZ,!1)
k=e.Q?d:e.gc_l()
j=B.m(18)
v=B.a([new B.a9(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.B(A.cK,s,d),t,A.aA,new B.B(A.cK,r,d),q,A.P,p,A.aA,new B.B(A.cK,m,d),new B.a4(d,78,l,d),A.aS,B.aJ(d,B.p(A.B,B.A(B.a([D.bxS,A.ab,B.d(a1?"Write it again":"Write my newspaper",d,d,d,d,d,d,A.fJ,d,d,d)],w),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(d,d,d,j,v,G.t1,A.n),d,54,d,d,d,d,d,d),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,k,d,d,d,d,d,d,!1,A.ae)],w)
if(a1){u=B.a([A.dW,B.A(B.a([D.d53,A.aw,D.bl4],w),A.m,d,A.e,A.j,0,d,d),A.P],w)
for(t=e.at,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){i=t[o]
h=i.a==="you"
r=h?A.a7:A.a_
q=h?A.b0.j(0.35):D.ri
p=new B.b3(16,16)
g=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bE(r,d,d,B.p(d,new B.w(i.b,d,D.exY,d,d,d,d,d,d,d,d,d),A.h,d,N.Sq,new B.o(q,d,new B.c2(g,g,g,g),new B.bx(p,p,p,p),d,d,A.n),d,d,d,A.cK,A.iD,d,d,d),d))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){f=D.cFl[o]
t.push(B.mZ(d,D.ri,new B.w(f,d,A.H1,d,d,d,d,d,d,d,d,d),A.hj,new C.e4t(e,f),d,N.vC,d))}u.push(B.cd(A.bH,t,A.by,6,8))
u.push(A.T)
t=B.C(B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),e.f,d,d,d,d,d,2,e.aNI("Ask for a change, or ask a question\u2026"),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,4,1,d,!1,"\u2022",d,d,d,new C.e4u(e),d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.di,!0,A.a5,d,A.am,d,d,d,d),1)
s=e.Q?d:e.gc_k()
u.push(B.A(B.a([t,A.ab,B.G4(A.xg,s,B.ok(d,A.b0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d)],w),A.m,d,A.e,A.j,0,d,d))
u.push(A.aA)
t=e.Q?d:e.gaU7()
u.push(B.dj(A.ob,D.eRc,t,B.bk(A.dl,d,d,d,d,A.GN,d,d,new B.b5(B.m(16),A.W),d,d,d)))
A.d.v(v,u)}v=B.a([B.cQ(v,e.r,A.acI,d,d,A.af,!1)],w)
if(e.Q){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.iQ.j(0.5),A.r,1)
v.push(B.bU(0,B.ec(B.as(B.p(d,B.A(B.a([E.a3g,A.es,B.d(e.as,d,d,d,d,d,d,A.ir,d,d,d)],w),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(E.za,d,s,t,d,d,A.n),d,d,d,d,D.bhG,d,d,d),d,d,d),u,!0),0,0,0))}return B.cg(a0,A.Ja,new B.am(A.V,d,A.a9,A.q,v,d),d,!1,!1,d,d)},
aNI(d){var w=null
return B.bn(w,new B.b2(4,B.m(14),A.W),w,A.eF,w,w,w,w,!0,w,w,w,w,w,w,D.ri,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Q.GW,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
bDY(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bz:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.b0(d.x),t,t,t,5,t,A.lS,t,t,t,t),A.fW],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.b0(v).j(0.5),t,t,t,2,t,D.be0,t,t,t,t))
w.push(A.dd)
w.push(new B.B(A.jX,B.d(d.b,t,1,A.Z,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aJ(t,B.p(t,B.u(w,A.m,t,A.b5,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kS,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e4a(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.yp.prototype={
b6q(d,e,f,g,h,i,j,k,l){var w=this,v=h==null?w.a:h,u=g==null?w.b:g,t=l==null?w.c:l,s=e==null?w.d:e,r=f==null?w.e:f,q=d==null?w.f:d,p=i==null?w.r:i,o=k==null?w.w:k
return new C.yp(v,u,t,s,r,q,p,o,j==null?w.x:j)},
cxM(d){var w=null
return this.b6q(w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.D(["paper",w.a,"headline",w.b,"subhead",w.c,"byline",w.d,"caption",w.e,"body",w.f,"pullQuote",w.r,"sidebarTitle",w.w,"sidebarText",w.x],x.N,x.z)},
b4k(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="headline",k=new C.c6H(d),j=d.h(0,"body")
if(x.j.b(j)){w=B.a([],x.s)
for(v=J.aW(j);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof j=="string"&&A.a.i(j).length!==0){w=A.a.fl(j,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(w,new C.c6F(),B.R(w).k("I<1,n>")).bZ(0,new C.c6G())
t=B.z(w,w.$ti.k("E.E"))}else t=m
w=k.$1("paper")
w=J.aa(w==null?"":w)===0?m:k.$1("paper")
v=k.$1(l)
v=J.aa(v==null?"":v)===0?m:k.$1(l)
s=k.$1("subhead")
r=k.$1("byline")
r=J.aa(r==null?"":r)===0?m:k.$1("byline")
q=k.$1("caption")
p=t!=null&&t.length!==0?t:m
o=k.$1("pullQuote")
n=k.$1("sidebarTitle")
return this.b6q(p,r,q,v,w,o,k.$1("sidebarText"),n,s)},
gE9(d){return this.e}}
C.yc.prototype={
a3(){return"NewsLayout."+this.b}}
C.ws.prototype={
a3(){return"NewsFrame."+this.b}}
C.lj.prototype={}
C.aY0.prototype={
xd(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b11(d,e,f,g){return this.xd(d,e,null,1.25,f,A.bh,g)},
PW(d,e,f,g,h){return this.xd(d,e,f,1.25,g,A.bh,h)},
b14(d,e,f,g,h){return this.xd(d,e,null,f,g,A.bh,h)},
b13(d,e,f,g,h){return this.xd(d,e,f,g,0,A.bh,h)},
b15(d,e,f,g,h){return this.xd(d,e,null,f,0,g,h)},
afp(d,e,f){return this.xd(d,e,null,f,0,A.bh,A.cG)},
b12(d,e,f,g,h){return this.xd(d,e,f,g,0,h,A.cG)},
cos(d,e,f,g){return this.xd(d,e,null,f,0,g,A.cG)},
cot(d,e,f,g,h,i){return this.xd(d,e,f,g,h,A.bh,i)},
b10(d,e,f,g){return this.xd(d,e,null,f,0,A.bh,g)},
aU8(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.m9(new B.ey(d,u,u,A.cT,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.cn,new B.kb(1),u,u,h,u,A.cm,u)
v.EJ(g)
if(!v.b.a.c.gaA0())return w
w-=2}return j},
atn(d,e,f,g,h,i,j,k){return this.aU8(d,e,f,g,h,i,j,k,A.bh)},
avp(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a4(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
avo(d){return this.avp(null,!1,d)},
adX(d,e){return this.avp(null,d,e)},
cgl(d,e){return this.avp(d,!1,e)},
gaQe(){var w=A.a.i(this.c.b)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
MU(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.atn(w.gaQe(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQe(),v,g,A.Z,v,v,v,w.b13(u,t,f,1.02,A.O),e,v,v)},
aQj(d){return this.MU(d,A.L,null,2,78,30)},
a8L(d,e,f,g,h){return this.MU(d,e,null,f,g,h)},
bQj(d,e,f,g,h){return this.MU(d,A.L,e,f,g,h)},
bQi(d,e,f){return this.MU(d,A.L,null,e,f,30)},
PS(d,e,f,g,h){var w,v=this,u=null,t=v.c.c,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.B(A.kT,B.d(s,u,g,A.Z,u,u,u,v.b12(w,v.aU8(t,w,A.cG,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b0K(d){return this.PS(d,A.L,null,3,24)},
awQ(d,e,f,g){return this.PS(d,e,null,f,g)},
cny(d,e,f){return this.PS(d,A.L,e,3,f)},
b0L(d,e){return this.PS(d,e,null,3,24)},
cnw(d,e){return this.PS(d,A.L,null,3,e)},
cnx(d,e,f){return this.PS(d,e,null,3,f)},
anl(d,e){var w=this,v=null,u=A.a.i(w.c.d),t=new B.B(A.id,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PW("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.C(B.p(v,v,A.h,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.C(B.p(v,v,A.h,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LS(){return this.anl(null,!0)},
ank(d){return this.anl(null,d)},
bxW(d,e){var w=null,v=A.a.i(this.c.e)
if(v.length===0)return A.bF
return new B.B(A.iW,new B.a4(d,w,B.d(v,w,2,A.Z,w,w,w,this.cos(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
H5(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new B.N(Date.now(),0,!1),j=A.a.i(m.c.a)
if(j.length===0)j="The NGMY Times"
w=A.o.ak(k.bv(B.bX(B.bw(k),1,1,0,0,0,0,0)).a,864e8)
v="VOL. "+C.hzp(Math.max(1,B.bw(k)-2021))+"  \xb7  NO. "+(w+1+3000)
u=m.b11("Roboto",12,1.2,A.O)
t=e?0.62:1
w=m.d
s=w.y
r=w.z
if(s==="blackletter")q=m.atn(j,r,A.O,d,1,96*t,36,1)
else{p=s==="bar"?76:72
q=m.atn(j.toUpperCase(),r,A.O,d,1,p*t,30,1)}switch(s){case"bar":s=e?6:10
p=B.b0(w.x)
w=w.ch?B.b0(w.f):A.c
o=x.p
return B.u(B.a([B.p(l,B.A(B.a([B.C(B.d(j.toUpperCase(),l,1,A.eA,l,l,l,m.cot(r,q*0.84,w,1,1,A.O),l,l,l),1)],o),A.m,l,A.e,A.j,0,l,l),A.h,p,l,l,l,l,l,l,new B.L(18,s,18,s),l,l,l),A.P,B.A(B.a([B.d(C.bxV(k).toUpperCase(),l,l,l,l,l,l,u,l,l,l),B.d(v,l,l,l,l,l,l,u,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,u,l,l,l)],o),A.m,l,A.hu,A.j,0,l,l),A.ar,m.adX(!0,3)],o),A.m,l,A.e,A.j,0,A.p)
case"split":w=w.x
s=x.p
return B.u(B.a([B.A(B.a([B.p(l,l,A.h,B.b0(w),l,l,l,q*0.8,l,l,l,l,l,14),A.es,B.C(B.d(j,l,1,A.eA,l,l,l,m.b10(r,q*0.9,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.T,B.A(B.a([B.d(C.bxV(k),l,l,l,l,l,l,m.PW("Roboto",13,B.b0(w),0.6,A.O),l,l,l),B.d(v,l,l,l,l,l,l,u,l,l,l)],s),A.m,l,A.hu,A.j,0,l,l),A.P,m.cgl(B.b0(w),3)],s),A.m,l,A.e,A.j,0,A.p)
case"blackletter":w=x.p
s=B.A(B.a([B.d(v,l,l,l,l,l,l,u,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,u,l,l,l)],w),A.m,l,A.hu,A.j,0,l,l)
p=m.adX(!0,1.4)
o=e?4:10
r=B.d(j,l,1,l,l,l,l,m.b10(r,q,1,A.O),A.L,l,l)
n=e?4:8
return B.u(B.a([s,A.au,p,new B.a4(l,o,l,l),r,new B.a4(l,n,l,l),m.adX(!0,1.4),A.au,B.d(C.bxV(k).toUpperCase(),l,l,l,l,l,l,u,A.L,l,l),A.au,m.avo(3)],w),A.m,l,A.e,A.j,0,A.p)
default:w=x.p
return B.u(B.a([B.d(j.toUpperCase(),l,1,l,l,l,l,m.b14(r,q,1,3,A.O),A.L,l,l),A.P,m.adX(!0,1.2),A.au,B.A(B.a([B.d(C.bxV(k).toUpperCase(),l,l,l,l,l,l,u,l,l,l),B.d(v,l,l,l,l,l,l,u,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,u,l,l,l)],w),A.m,l,A.hu,A.j,0,l,l),A.au,m.avo(3)],w),A.m,l,A.e,A.j,0,A.p)}},
a9S(d){return this.H5(d,!1)},
uy(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fC(r,A.B,s,s,A.cj,A.bM,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Fx(D.bki,w,s)
if(v==="sepia")w=new B.Fx(D.bkh,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.V(A.wI,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bQ(s,new B.o(s,s,s,s,s,new B.bR(A.B,0.95,A.w,s,0,B.a([A.K,A.IL.j(0.38)],x.O),s,s),A.n),A.b6))
return new B.a4(d,e,new B.am(A.V,s,A.aX,A.q,v,s),s)},
wU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.b0(j),A.r,3)
j=B.H(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.uy(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ef,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lT,k,k,d)
case 2:w=B.a([new B.a9(0,A.G,A.x.j(0.35),D.dJB,14)],x.V)
v=l.uy(d-28,e-28-58)
u=A.a.i(l.c.e)
if(u.length===0)u="NGMY"
return B.ez(A.B,-0.035,B.p(k,B.u(B.a([v,B.C(B.as(B.d(u,k,2,A.Z,k,k,k,l.b12(j.as,13.5,D.b0c,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b2U,k,k,k,w,k,A.n),k,e,k,k,D.bfj,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.b0(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.uy(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a4(d,e,B.as(B.p(k,B.hN(l.uy(v,v),A.ap),A.h,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lT,k,k,t),k,k,k),k)
case 5:j=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dJs,10)],x.V)
return B.ez(A.B,0.025,new B.a4(d,e,new B.am(A.V,k,A.a9,A.h,B.a([B.bU(0,B.p(k,l.uy(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qd,k,k,k),0,0,0),B.an(k,B.ez(A.B,-0.6,B.p(k,k,A.h,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.ez(A.B,-0.6,B.p(k,k,A.h,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a4(d,e,B.b1(B.n1(l.uy(d,e),A.ap,D.f1M),new C.b8n(j,k),k,k,A.as),k)
case 7:j=x.p
w=B.a([l.uy(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bK(u));++n){m=new B.b3(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.cg,k,k,new B.bx(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cE(0,q,0,p,k,k,new B.cD(A.aZ,A.qv,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.V,k,A.aX,A.q,w,k),A.h,A.ek,k,k,k,e,k,k,D.bjB,k,k,d)
case 8:w=d/2
v=B.w1(A.fU,new B.b3(w,w))
j=B.H(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.w1(A.k7,new B.b3(w,w)),l.uy(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.a9(0,A.G,A.x.j(0.35),A.fx,22)],x.V)
return B.p(k,l.uy(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a4(d,e,B.n1(l.uy(d,e),A.ap,D.f7i),k)
case 0:j=B.H(B.b0(j.w),A.r,2.4)
return B.p(k,l.uy(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ef,k,k,d)}},
aJV(d,e){return this.d.e===D.OE?A.bF:this.bxW(d,e)},
Ui(d){return this.aJV(d,A.L)},
gawc(){var w=this.c
return A.a.i(w.x).length!==0||A.a.i(w.r).length!==0},
awb(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.w)
if(l.length===0)l=A.a.i(m.r).length!==0?"":"NGMY NOTES"
w=A.a.i(m.x)
v=o.d
u=B.H(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.r)
if(m.length!==0&&w.length===0)q.push(B.C(B.as(B.d("\u201c"+m+"\u201d",n,7,A.Z,n,n,n,o.b15(v.Q,19,1.15,A.cF,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.Z,n,n,n,o.PW("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.C(B.d(m,n,9,A.Z,n,n,n,o.afp(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jy(B.u(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gc7c(){var w=this.c.f
return w.length===0?B.a([y.g],x.s):w},
a6x(d,e,f,g){return B.cj(new C.c6I(this,e,d,f,g))},
a6w(d){return this.a6x(d,22,!0,18)},
aKX(d,e){return this.a6x(d,22,!0,e)},
bzT(d,e,f){return this.a6x(d,22,e,f)},
bzS(d,e,f){return this.a6x(d,e,!0,f)},
b3J(d,e,f,g){return B.cj(new C.c6J(this,e,d,g,!0,f))},
c61(){var w,v,u,t,s,r,q=this,p=null,o="Roboto",n=q.d
switch(n.d.a){case 0:return B.u(B.a([q.a9S(824),A.aA,q.aQj(824),q.b0K(824),A.P,q.LS(),A.aa,B.as(q.wU(824,360),p,p,p),q.Ui(824),A.aa,B.C(q.a6w(3),1)],x.p),A.ah,p,A.e,A.j,0,A.p)
case 1:w=x.p
return B.u(B.a([q.a9S(824),A.aS,new B.a4(p,350,B.A(B.a([new B.a4(440,p,B.u(B.a([q.a8L(440,A.bf,3,62,26),q.awQ(440,A.bf,2,20),A.b9,q.anl(B.b0(n.x),!1)],w),A.F,p,A.e,A.j,0,A.p),p),A.GO,B.u(B.a([q.wU(362,310),q.Ui(362)],w),A.m,p,A.e,A.j,0,A.p)],w),A.F,p,A.e,A.j,0,p,p),p),A.T,q.avo(2),A.aa,B.C(q.a6w(3),1)],w),A.ah,p,A.e,A.j,0,A.p)
case 2:w=q.H5(824,!0)
v=B.b0(n.x)
u=n.ch
t=x.p
s=B.a([q.bQj(788,u?B.b0(n.f):A.c,3,92,34)],t)
r=q.c
if(A.a.i(r.c).length!==0)s.push(q.cny(788,u?B.b0(n.f):A.c,22))
v=B.p(p,B.u(s,A.m,p,A.e,A.j,0,A.p),A.h,v,p,p,p,p,p,p,A.zC,p,p,p)
u=B.a([B.as(q.wU(824,390),p,p,p)],t)
s=A.a.i(r.e)
if(s.length!==0&&n.e!==D.OE){n=A.x.j(0.65)
u.push(B.an(0,B.p(p,B.d(s,p,2,A.Z,p,p,p,q.b13(o,14,A.c,1.15,A.O),p,p,p),A.h,n,p,p,p,p,p,p,A.ll,p,p,p),p,p,0,0,p,p))}return B.u(B.a([w,A.aa,v,A.aa,new B.am(A.V,p,A.a9,A.q,u,p),A.P,q.LS(),A.T,B.C(q.aKX(2,21),1)],t),A.ah,p,A.e,A.j,0,A.p)
case 3:n=q.H5(824,!0)
w=q.wU(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.u(B.a([n,A.aa,new B.am(A.ba,p,A.a9,A.q,B.a([w,B.an(0,B.p(p,q.MU(780,A.bf,A.c,3,74,30),A.h,p,p,new B.o(p,p,p,p,p,new B.a8(A.b4,A.ba,A.w,v,p,p),A.n),p,p,p,p,D.bhY,p,p,p),p,p,0,0,p,p)],u),p),q.b0L(824,A.bf),A.P,q.LS(),A.T,B.C(q.a6w(3),1)],u),A.ah,p,A.e,A.j,0,A.p)
case 4:n=x.p
return B.u(B.a([q.a9S(824),A.aA,q.aQj(824),q.b0K(824),A.P,q.LS(),A.aa,B.C(q.b3J(3,300,B.u(B.a([q.wU(300,300),q.Ui(300)],n),A.m,p,A.e,A.j,0,A.p),360),1)],n),A.ah,p,A.e,A.j,0,A.p)
case 5:w=q.H5(824,!0)
v=x.p
u=B.u(B.a([q.a8L(440,A.bf,3,62,26),q.awQ(440,A.bf,2,20),A.b9,q.ank(!1)],v),A.F,p,A.e,A.j,0,A.p)
return B.u(B.a([w,A.bv,new B.a4(p,400,B.A(B.a([new B.a4(440,p,u,p),A.aHM,new B.B(A.iW,q.wU(364,n.e===D.OE?400:330),p)],v),A.F,p,A.e,A.j,0,p,p),p),A.aA,B.C(q.aKX(2,21),1)],v),A.ah,p,A.e,A.j,0,A.p)
case 6:return B.u(B.a([q.a9S(824),A.aa,q.bQi(824,2,70),q.cnw(824,21),A.P,q.LS(),A.aa,B.C(q.b3J(3,340,B.as(q.wU(340,340),p,p,p),350),1)],x.p),A.ah,p,A.e,A.j,0,A.p)
case 7:w=q.H5(824,!0)
v=B.b0(n.x)
u=Date.now()
u=C.bxV(new B.N(u,0,!1))
t=x.p
v=B.a([B.p(p,B.d(u.toUpperCase(),p,p,p,p,p,p,q.PW(o,13,n.ch?B.b0(n.f):A.c,1.2,A.u),A.L,p,p),A.h,v,p,p,p,p,p,p,A.bk,p,p,p),A.aA],t)
u=A.a.i(q.c.r)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",p,p,p,p,p,p,q.b15(n.Q,24,1.15,A.cF,A.O),p,p,p))
v.push(A.b9)
if(q.gawc())v.push(q.awb(230,250))
return B.u(B.a([w,A.aA,B.C(B.A(B.a([new B.a4(230,p,B.u(v,A.ah,p,A.e,A.j,0,A.p),p),B.p(p,p,A.h,B.b0(n.w),p,p,p,p,p,A.acd,p,p,p,1.2),new B.a4(570,p,B.u(B.a([q.a8L(570,A.bf,3,62,28),q.cnx(570,A.bf,20),A.P,q.ank(!1),A.P,B.as(q.wU(570,330),p,p,p),q.Ui(570),A.T,B.C(q.bzT(2,!1,17),1)],t),A.ah,p,A.e,A.j,0,A.p),p)],t),A.F,p,A.e,A.j,0,p,p),1)],t),A.ah,p,A.e,A.j,0,A.p)
case 8:w=q.H5(824,!0)
v=n.ch
u=v?B.b0(n.x):B.b0(n.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",p,p,p,p,p,p,q.PW(o,13,v?A.x:B.b0(n.x),3,A.u),p,p,p)
s=x.p
return B.u(B.a([w,A.aa,B.p(p,B.u(B.a([t,A.ar,q.MU(788,A.bf,v?A.x:B.b0(n.f),2,72,30)],s),A.F,p,A.e,A.j,0,A.p),A.h,u,p,p,p,p,p,p,D.bgk,p,p,p),q.b0L(824,A.bf),A.T,B.as(q.wU(824,310),p,p,p),q.Ui(824),A.P,q.LS(),A.T,B.C(q.a6w(3),1)],s),A.ah,p,A.e,A.j,0,A.p)
case 9:return B.u(B.a([q.H5(824,!0),A.bv,q.a8L(824,A.bf,3,62,30),q.awQ(824,A.bf,2,22),A.T,q.ank(!1),A.T,B.as(q.wU(824,330),p,p,p),q.aJV(824,A.bf),A.aS,B.C(q.bzS(2,40,21),1)],x.p),A.ah,p,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bU(0,B.bQ(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aE,A.w,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.b6),0,0,0)],o)
if(q.ax)n.push(B.bU(0,B.b1(s,s,s,new C.b4Y(B.b0(q.w),s),A.as),0,0,0))
w=q.w
n.push(new B.B(D.biH,B.u(B.a([B.C(t.c61(),1),A.P,B.p(s,s,A.h,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fW,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b11(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PW(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hu,A.j,0,s,s)],o),A.ah,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bU(0,B.e8(B.b1(s,s,s,new C.bna(v.j(q.ch?0.07:0.06),s),A.as),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.H(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hN(B.fC(q,A.B,s,s,A.cj,A.bM,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.mE,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.b14(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e8(B.d5(B.p(s,B.A(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bjJ,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a4(900,1260,B.jy(new B.am(A.V,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8o.prototype={
iE(d){return C.fTh(d)},
jg(d){return!1}}
C.b8n.prototype={
a5(d,e){var w,v=C.fTh(e)
$.a1()
w=B.U()
w.r=this.b.gt(0)
w.b=A.aj
w.c=6
return d.b4(v,w)},
ao(d){return!d.b.A(0,this.b)}}
C.bpE.prototype={
iE(d){var w,v,u,t,s,r,q,p,o=new B.f6()
o.dY(3)
w=$.a1()
v=B.a([],x.v)
u=new B.aZ(w.r,A.av,null,null,v)
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
u.N(new B.bV())
return u},
jg(d){return!1}}
C.b4Y.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=new B.f6()
j.dY(7)
$.a1()
w=B.U()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+j.ag()*0.07).gt(0)
q=j.ag()
p=j.ag()
o=j.ag()
n=w.L()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=j.ag()*u
p=j.ag()*t
m=50+j.ag()*90
w.saw(new B.bR(A.B,0.5,A.w,k,0,B.a([A.Iu.j(0.13),A.K],v),k,k).aA(0,B.c0(new B.v(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.saw(k)
w.r=A.IL.j(0.1).gt(0)
s=t/2-1.5
u=0+u
d.bp(new B.af(0,s,u,s+3),w)
l=new B.af(0,0,u,0+t)
$.a1()
t=B.U()
t.saw(new B.bR(A.B,0.85,A.w,k,0,B.a([A.K,D.b_a.j(0.3)],v),D.aqu,k).aA(0,l))
d.bp(l,t)},
ao(d){return!1}}
C.bna.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.j0(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.cn,u,A.eL,A.cm)
s.fD()
w=d.a
J.bP(w.save())
w.translate(t/2,e.b*0.52)
d.q_(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.v(-v/2,-t.gbc(t)/2))
w.restore()},
ao(d){return!d.b.A(0,this.b)}}
C.YG.prototype={
S(){var w=$.at(),v=x.A
return new C.aC9(new B.ao(A.aq,w),new B.ao(new B.bb("NGMY",A.aY,A.aL),w),new B.cn(null,v),new B.cn(null,v),A.d.gI(D.a_w),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.r),A.L)}}
C.o4.prototype={}
C.aC9.prototype={
gaQq(){var w,v,u=this
if(u.p1)w=new B.xT(1,u.p2,0.9,u.p3).iR().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aS.x1$.push(new C.eC0(w))},
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.to().jR(0,"assets/images/ngmy_logo.png"),$async$Wj)
case 7:q=e
p=J.f7(J.xE(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.fnu(new B.pR(p,1),o),$async$Wj)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eAT(r,p))
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
return B.i($async$Wj,v)},
O1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(92,1800,A.er),$async$O1)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$O1)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.fnu(new B.pR(p,1),n),$async$O1)
case 9:if(r.c==null){w=1
break}r.n(new C.eBg(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a5(l)
n=r.c
if(n!=null)n.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O1,v)},
aYs(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aL=w.av=w.au=w.Y=w.aZ=w.bn=w.y2=0
w.b_=null
w.aS=0.25
w.b7=null
w.bE=0.5
w.aQ=1
w.c9=w.bO=w.bf=0
w.cS=w.dd=!1},
aRX(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvt(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cTS)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvt(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvt(C.fEl(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvt(C.fEl(1-a0*0.5,n,n,n),w)}return a1?C.bvt(C.fEl(-1,255,255,255),w):w},
awX(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).kr(0,this.d.a.a),t=B.z(u,B.a2(u).k("E.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yd(u,v,w)
this.dx.pt(new C.eBq(t),!0)
return t},
b_V(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.awX()
w=C.hJ9(e.d.a.a,e.db)
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
return C.hFJ(d,k,v,a0,j,e.gaQq(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
clB(){return this.b_V(null)},
BX(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$BX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aS.gm3(),$async$BX)
case 3:w=4
return B.b(B.bK(A.eU,null,x.H),$async$BX)
case 4:w=5
return B.b($.aS.gm3(),$async$BX)
case 5:s=$.aS.ae$.x.h(0,t.r)
r=s==null?null:s.gb3()
if(!(r instanceof B.q1)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gX(0).a),$async$BX)
case 7:w=6
return B.b(e.hk(A.fR),$async$BX)
case 6:q=e
u=q==null?null:J.f7(A.dz.gaK(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$BX,v)},
a7m(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7m=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eAC(q))
t=4
w=7
return B.b(q.BX(),$async$a7m)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cM.gcq().aE(p)
n=C.Am(null,null,null,null,D.nx,6,!1,null,null,null,null,null,C.cx(),null,!1,null,"NGMY Quote",null,null,B.a([q.b_V(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a7(l,!1).K(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a5(j)
l=q.c
if(l!=null)l.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eAD(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7m,v)},
zp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eAA(q))
t=4
w=7
return B.b($.aS.gm3(),$async$zp)
case 7:w=8
return B.b(B.bK(A.o_,null,x.H),$async$zp)
case 8:w=9
return B.b($.aS.gm3(),$async$zp)
case 9:k=$.aS.ae$.x.h(0,q.f)
p=k==null?null:k.gb3()
if(!(p instanceof B.q1))throw B.O("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gX(0).a),$async$zp)
case 10:o=e
w=11
return B.b(o.hk(A.fR),$async$zp)
case 11:n=e
if(n==null)throw B.O("Could not make the picture.")
w=12
return B.b(A3.adK(J.f7(A.dz.gaK(n)),"ngmy_quote.png","image/png"),$async$zp)
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
l=B.a5(i)
k=q.c
if(k!=null)k.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eAB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zp,v)},
c96(){var w=this.p4
w.toString
return B.cj(new C.eB9(this,w))},
aUf(d,e){var w=null
return B.bn(w,w,w,w,w,D.esO,w,w,!0,new B.b2(4,B.m(16),N.vC),w,w,w,w,w,D.ri,!0,w,w,w,w,new B.b2(4,B.m(16),D.aPS),w,w,w,w,w,w,w,w,Z.BH,e,w,w,w,w,w,w,w,D.exP,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wN(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b0,w,w,w,15),A.bq],v))
u.push(B.d(d,w,w,w,w,w,w,D.aKc,w,w,w))
return new B.B(D.bdH,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aUe(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.X,!0,w,d,A.h,w,0,w,w,w,w,w,A.jh),A.h,w,w,new B.o(D.ri,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uI(d){return this.aUe(d,A.bC)},
nw(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t1:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j9,r,r,r,16),A.bq],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j9,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.de(r,B.A(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hG,r,r,r,A.Dr,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
acW(d,e,f){return this.nw(d,null,e,f)},
atr(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b0.j(0.28):A.c.j(0.05),t=g?A.eN:A.bG,s=x.p
v=B.a([B.de(w,d,w,w,A.b8,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hG,w,e,w,new B.L(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.Z,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a4(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aUi(d,e,f,g,h,i){return this.atr(d,e,f,g,h,5,i)},
jJ(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.C(B.d(d,u,u,u,u,u,u,D.epV,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dMl,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eBm(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJn,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VE,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asa(w).cz7(A.b0,A.bG,A.b0.j(0.2),A.c,D.eam,4)
return new B.B(A.wf,B.u(B.a([s,B.a7B(B.mt(u,u,u,g,f,new C.eBn(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aeW(d,e,f,g,h,i){return this.jJ(d,e,f,g,h,null,i)},
afl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.b0(u)
r=d==u
q=r?A.c:A.be
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.brK:o
n.push(B.aJ(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eBp(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.cd(A.bH,n,A.by,10,10)},
bDX(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_w
else{v=x.a8
w=B.z(new B.a3(D.a_w,new C.eAs(o),v),v.k("E.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aUf("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eAt(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4g,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aUf("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eAu(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.am,n,n,n,n)
t=o.wN("DESIGNS",A.rQ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cxC[q]
r.push(new B.B(A.kS,o.acW(p,o.x===p,new C.eAv(o,p)),n))}return B.u(B.a([v,A.T,u,t,B.cf(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aZ),A.aa,new B.a4(n,118,B.hF(n,new C.eAw(o,w),w.length,n,n,A.aZ,new C.eAx(),!1),n),A.P,o.aUe(B.u(B.a([B.iu(A.b0,n,n,A.ag,!0,new C.eAy(o),n,D.eIY,n,D.eFH,o.k3),B.iu(A.b0,n,n,A.ag,!0,new C.eAz(o),n,n,n,D.eD5,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acH)],s),A.F,n,A.e,A.j,0,A.p)},
ctO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.awX()
if(a7.length===0)return a5.uI(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.H8,a6,a6,a6))
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
l=m.length!==0&&A.d.e7(m,new C.eBQ(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eBX(a5)
j=new C.eBZ()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.H8,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b3(11,11)
f=u.q(0,h)?A.b0.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eN:A.bG
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a1
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.bx(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.K4,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eBR(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uI(B.cd(A.bH,o,A.tH,6,6))
i=B.a([a5.nw("All words",K.agJ,!1,new C.eBS(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.acW("Sentence "+a3,!1,new C.eBT(a5,a7,v,a2)))
a2=a3}}i.push(a5.acW("Clear picks",!1,new C.eBU(a5)))
i=B.cd(A.bH,i,A.by,8,8)
g=a5.wN("SIZE OF THE PICKED WORDS",D.aga)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cYM[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eBV(e,k)
f.push(a5.acW(a0.b,l===a4,e))}return B.u(B.a([q,A.T,o,A.T,i,g,B.cd(A.bH,f,A.by,8,8),A.T,a5.nw("Make every word normal",A.mF,!1,new C.eBW(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cpa(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bkJ,B.d(A.d.kU(D.arc,new C.eBz(q)).b,p,p,p,p,p,p,D.erp,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cj(new C.eBA(q)),l=q.wN("HIGHLIGHT BEHIND THE WORDS",A.Xu),k=q.p1?-1:q.k4
k=q.afl(k,new C.eBB(q),D.cH7)
w=q.p1
v=w?A.c:A.be
n=B.a([n,A.T,m,l,B.cd(A.bH,B.a([k,B.aJ(p,B.p(p,D.buJ,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.elC,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBE(q),p,p,p,p,p,p,!1,A.ae)],o),A.tH,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.H8,p,p,p)],o)
if(q.gaQq()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aeW("Colour",l,0,360,new C.eBF(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aeW("Shade",k,0.15,0.9,new C.eBG(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jJ("Strength",l,0.15,1,new C.eBH(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uI(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wN("LOOK",A.Af))
m=B.a([q.nw("Bold",I.ag7,q.fy,new C.eBI(q)),q.nw("Italic",I.ag8,q.go,new C.eBJ(q))],o)
for(u=0;u<3;++u){l={}
k=D.cyH[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t1:p
w=w?p:A.c.j(0.07)
s=new B.b3(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.bx(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBK(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.cd(A.bH,m,A.tH,8,8))
n.push(q.wN("COLOUR",A.np))
n.push(q.afl(q.fx,new C.eBL(q),D.cR8))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.H8,p,p,p))
n.push(q.wN("SIZE AND PLACE",A.Ek))
m=q.fr
m=q.jJ("Text size",m,0.5,1.6,new C.eBC(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uI(B.u(B.a([m,q.jJ("Up / down",l,0.12,0.5,new C.eBD(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
c97(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b0.j(0.6),A.r,1.6)
u=B.a([A.b0.j(0.18),A.bz.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bzT,A.h,p,p,D.aSI,p,62,p,p,p,p,p,62),A.aA,D.eGO,A.ar,D.eKX],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.ri,p,v,w,p,new B.a8(A.a_,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bgR,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaUh(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.A(B.a([B.bu(B.m(12),new B.a4(46,62,B.fC(o,A.B,120,p,A.cj,A.bM,!1,p,!1,p,p),p),A.ap),A.bd,B.C(B.u(B.a([D.eGo,A.P,B.cd(A.bH,B.a([q.nw("Change",A.k_,!1,q.gaUh()),q.nw("Remove",A.e4,!1,new C.eBd(q))],w),A.by,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cNY[t]
u.push(q.nw(s.b,s.a,q.at===t,new C.eBe(q,t)))}u=B.cd(A.bH,u,A.by,8,8)
r=q.at
A:{if(0===r){s=q.bU2(o)
break A}if(1===r){s=q.bT7()
break A}if(2===r){s=q.bzR()
break A}if(3===r){s=q.bFZ()
break A}s=q.bBW()
break A}return B.u(B.a([v,A.aa,u,A.aA,s,A.T,new B.bE(A.a_,p,p,q.nw("Reset the whole picture",A.mF,!1,new C.eBf(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bU2(d){var w=this,v=x.p
return B.u(B.a([B.cd(A.bH,B.a([w.nw("Auto enhance",E.X5,!1,new C.eB5(w)),w.nw("Make words easy to read",A.o9,!1,new C.eB6(w))],v),A.by,8,8),A.aA,B.cj(new C.eB7(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bT7(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jJ("Exposure",n,-1.5,1.5,new C.eAK(o),0,A.k.ab(n,1))
w=o.RG
w=o.jJ("Brightness",w,-0.5,0.5,new C.eAL(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jJ("Contrast",v,0.4,2,new C.eAM(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jJ("Fade",u,0,1,new C.eAN(o),0,""+A.k.U(u*100))
t=o.av
t=o.jJ("Spotlight",t,0,1,new C.eAO(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jJ("Darken",s,0,0.85,new C.eAP(o),0,""+A.k.U(s*100))
r=o.aZ
r=o.jJ("Vignette",r,0,0.9,new C.eAQ(o),0,""+A.k.U(r*100))
q=o.aB
q=o.jJ("Shade behind words",q,0,0.85,new C.eAR(o),0,""+A.k.U(q*100))
p=o.aL
return o.uI(B.u(B.a([n,w,v,u,t,s,r,q,o.jJ("Shade top & bottom",p,0,0.85,new C.eAS(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bzR(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jJ("Colour strength",q,0,2.2,new C.eA5(s),1,""+A.k.U(q*100))
w=s.to
w=s.jJ("Warmth",w,-1,1,new C.eA6(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jJ("Tint",v,-1,1,new C.eA7(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uI(B.u(B.a([q,w,v,s.jJ("Shift colours",u,-180,180,new C.eA8(s),0,""+A.k.U(u)+"\xb0"),new B.bE(A.a_,r,r,s.nw("Negative",D.bpJ,s.y1,new C.eA9(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wN("COLOUR WASH",A.L_)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.apY)
t=B.a([u,v,s.afl(w,new C.eAa(s),q),A.P],t)
if(s.b_!=null){q=s.aS
t.push(s.uI(s.aeW("Wash strength",q,0,0.9,new C.eAb(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bFZ(){var w,v,u,t,s,r=this,q=r.y2
q=r.jJ("Blur",q,0,24,new C.eAE(r),0,A.o.u(A.k.U(q)))
w=r.bn
w=r.jJ("Soft focus",w,0,1,new C.eAF(r),0,""+A.k.U(w*100))
v=r.au
u=x.p
v=r.uI(B.u(B.a([q,w,r.jJ("Film grain",v,0,1,new C.eAG(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wN("LIGHT LEAK",H.ag5)
q=r.b7
t=B.a([null],x.Z)
s=x.r
A.d.v(t,B.dg(D.apY,0,B.dL(8,"count",s),s))
u=B.a([v,w,r.afl(q,new C.eAH(r),t),A.P],u)
if(r.b7!=null){q=r.bE
u.push(r.uI(r.aeW("Leak strength",q,0,1,new C.eAI(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bBW(){var w,v,u,t,s=this,r=s.aQ
r=s.jJ("Zoom",r,1,3,new C.eAf(s),1,""+A.k.U(r*100)+"%")
w=s.bf
w=s.jJ("Left / right",w,-1,1,new C.eAg(s),0,""+A.k.U(w*100))
v=s.bO
v=s.jJ("Up / down",v,-1,1,new C.eAh(s),0,""+A.k.U(v*100))
u=s.c9
t=x.p
return B.u(B.a([s.uI(B.u(B.a([r,w,v,s.jJ("Turn",u,-180,180,new C.eAi(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.cd(A.bH,B.a([s.nw("Turn 90\xb0",D.brk,!1,new C.eAj(s)),s.nw("Flip sideways",A.Eb,s.dd,new C.eAk(s)),s.nw("Flip upside down",A.Eb,s.cS,new C.eAl(s))],t),A.by,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bWF(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.eaz,A.T,D.eI3,A.aA,B.aJ(w,B.p(A.B,D.eaK,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t1,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eB8(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.ri,w,u,v,w,w,A.n),w,w,w,w,A.c1,w,w,w)},
bTV(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eB0(p),m=x.p,l=B.A(B.a([D.bkP,p.nw("Reset",A.mF,!1,new C.eAX(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.H8,o,o,o),j=p.wN("SHAPE",A.ahb),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Au[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aUi(n.$2(t,p.cy),62,u.b,s===t,new C.eAY(v,p),62))}}i=B.cd(A.bH,i,A.by,8,8)
v=p.wN("RING",A.rM)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ap[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aUi(n.$2(p.cx,t),62,r.b,q===t,new C.eAZ(s,p),62))}u=B.cd(A.bH,u,A.by,8,8)
s=p.CW
return B.u(B.a([l,A.au,k,j,i,v,u,A.aa,p.uI(p.jJ("Size",s,0.12,0.4,new C.eB_(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aX5(d){return new B.a4(null,d,new B.fT(0.5625,B.cj(new C.eBj(this)),null),null)},
cou(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t1:q
t=new B.b3(14,14)
s=D.cPS[w]
r=v?A.c:A.aB
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bG(1,A.bp,B.aJ(A.c5,B.de(q,B.u(B.a([r,A.dd,new B.pL(A.e8,A.B,A.h,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.bx(t,t,t,t),q,u,A.n),D.bcC,q,q,q,A.hr,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBs(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.beG,A.lT,q,q,q)},
aLs(){var w,v,u=this,t=null,s=u.cou(),r=u.as
A:{if(0===r){w=u.bDX()
break A}if(1===r){w=u.ctO()
break A}if(2===r){w=u.cpa()
break A}if(3===r){w=u.c97()
break A}if(4===r){w=u.bTV()
break A}w=u.bWF()
break A}v=x.p
return B.bu(A.pK,B.ec(B.u(B.a([s,B.C(B.cQ(B.a([w],v),t,D.bfG,t,t,A.af,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.a9F,!0),A.ap)},
aHJ(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc_M(),p=B.m(16)
q=B.C(B.aJ(r,B.p(r,D.eaT,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.be,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbFA()
w=B.m(16)
v=B.a([new B.a9(0,A.G,A.bz.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.efm)
else t.push(D.btQ)
t.push(A.ab)
t.push(D.bmc)
return B.p(r,B.A(B.a([q,A.aw,B.C(B.aJ(r,B.p(r,B.A(t,A.m,r,A.b5,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t1,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aRT,r,r,r,r,G.acv,r,r,r)},
aUg(){var w=null
return new B.B(T.VA,B.A(B.a([B.aF(w,w,w,w,A.mH,w,w,w,new C.eAJ(this),w,w,w,w,w,w),D.eWa,A.b9,D.bC6],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cg(w,A.Ja,B.br(!0,B.cj(new C.eC_(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bbq.prototype={
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
C.lH.prototype={}
C.yr.prototype={
ad(){var w=this
return B.D(["at",w.a.a4().aa(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nh.prototype={}
C.v5.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5H.prototype={}
C.aoc.prototype={}
C.Za.prototype={
S(){return new C.aE3(new B.ao(A.aq,$.at()),B.k5(!0,null,!0,!0,null,null,!1),D.ddD,B.a([],x.s),B.eN([D.G0],x.Q))}}
C.aE3.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.f.p()
this.a2()},
YN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$YN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().AV(90,700,700,A.er),$async$YN)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$YN)
case 8:p=e
if(r.c!=null)r.n(new C.eHV(r,p,q))
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
return B.i($async$YN,v)},
YQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$YQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hQ().aD5(78,n,1100,1100),$async$YQ)
case 7:q=e
if(J.ch(q)){w=1
break}p=B.bi(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$YQ)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c5(l,".png"))k="image/png"
else k=A.a.c5(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cM.gcq().aE(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eHW(r,p))
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
return B.i($async$YQ,v)},
aZ2(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fC(A.cw.aE(A.d.gai(d.split(","))),A.B,u,u,A.cj,A.bM,!0,u,!1,u,u)
return w}catch(v){}return D.bbE},
bU0(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cjT(C.fgC(w,this.aZ2(d),f),g)},
a9D(d,e,f,g,h){var w=null,v=new C.eHT(f,e),u=new C.eHU(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b0.j(0.6),A.r,1)
if(p)p=new B.a4(34,30,new B.am(A.V,w,A.a9,A.h,B.a([B.as(B.V(f?A.En:A.KN,A.c2,w,w,w,26),w,w,w),D.dQI],x.p),w),w)
else p=this.bU0(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.p(w,B.A(B.a([B.C(B.as(p,w,w,w),1),D.btw],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.my,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHS(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aS2(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bu(B.m(8),B.fC(A.cw.aE(A.d.gai(h.split(","))),A.B,p,p,A.cj,A.bM,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.bs.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eZ,p,p,p,20):q
n=B.a([n,A.ab,B.C(B.d(e,p,1,A.Z,p,p,p,A.a4l,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yo,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a5T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a5T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fk_(),$async$a5T)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eHB(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a5(n)
if(r.c!=null)r.n(new C.eHC(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5T,v)},
abg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abg=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eHE(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eHF(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eHG(r))
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
return B.b(C.ffh(q,r.cx,j,new C.aYp(r.z,r.Q,r.as,r.at),new C.eHH(r),i,m,p,k),$async$abg)
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
n=B.a5(e)
if(r.c!=null)r.n(new C.eHI(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abg,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.en,g).w
g=B.aG(d,A.bN,g).w
w=B.as(B.p(h,h,A.h,h,h,new B.o(A.be,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.aJ(h,B.p(h,D.bwE,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.a9(2,A.G,A.bs.j(0.5),A.J,24)],v),D.bFc,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eI8(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yo,h,h,h,i.ax?h:new C.eI9(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbv3()
v=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.J,10)],v)
s.push(B.hJ(B.aD(!1,A.X,!0,h,B.aH(!1,h,!0,B.p(h,B.V(i.e==null?A.uq:A.hs,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uI,A.a6),h,40,h,h,h,h,h,40),A.cD,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cD,h,h,A.ac),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b2(4,B.m(16),D.aPp),h,h,h,h,h,h,h,h,Q.GW,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.B(A.kS,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ad,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJI,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eIa(i)
s=i.aS2(A.kX,q,r,i.gc9y(),s)
r=i.z
r=B.C(i.a9D(new C.eIc(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.C(B.u(B.a([s,A.ar,B.A(B.a([r,A.bq,B.C(i.a9D(new C.eId(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eIe(i)
s=i.aS2(A.un,r,p,i.gc9G(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.C(i.a9D(new C.eIf(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.eM5,A.au,D.eON,A.bv,u,A.P,D.eNi,A.aA,v,A.bv,B.A(B.a([q,A.aw,B.C(B.u(B.a([s,A.ar,B.A(B.a([p,A.bq,B.C(i.a9D(new C.eIg(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.eQp],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b5o,A.r,1)
w=C.aeg(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bE(A.a_,h,h,B.p(h,B.A(B.a([D.bxJ,A.bq,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.ewB,h,h,h),B.aH(!1,h,!0,D.dMz,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eIh(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_y,h,u,v,h,h,A.n),h,h,h,h,D.bel,h,h,h),h)],t))}o.push(A.bv)
o.push(D.eDN)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cJ3[m]
v=i.ch===l?A.b0:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bG(1,A.bp,new B.B(A.jX,B.aJ(h,B.de(A.B,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eIi(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.eUx)
o.push(A.P)
o.push(B.cj(new C.eIj(i)))
o.push(A.bv)
o.push(D.eKn)
o.push(A.P)
w=B.a([i.b0I("auto","Let AI choose",A.dN,A.Nx)],t)
for(v=x.O,m=0;m<11;++m){j=D.uN[m]
u=j.d
w.push(i.b0I(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.cd(A.bH,w,A.by,8,8))
o.push(A.aS)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bs.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.iu(h,A.bs,h,h,h,new C.eIb(i),D.bsX,D.eTP,h,D.eFT,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aJ_,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc_Q()
v=B.fe(h,h,A.b0,A.b0.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.efc:A.EC
o.push(new B.a4(h,54,B.la(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.or,h,h,h),w,v),h))
return new B.B(new B.L(0,0,0,f.f.d),B.p(h,B.br(!0,B.cf(B.u(o,A.ah,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ue,h,h,A.af),!0,!1,A.ag,!0,!1),A.h,h,new B.aV(0,680,0,g.a.b*0.92),D.a6W,h,h,h,h,h,h,h,h),h)},
bH2(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eHJ(this,p,d)
if(d===D.B4)return new C.aAI(p,o,q)
w=B.m(16)
v=p?E.uI:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aB:A.bG,A.r,1)
s=B.V(p?A.ej:C.hjE(d),A.c,q,q,q,20)
r=C.hjF(d)
return B.aJ(q,B.de(q,B.u(B.a([s,A.au,B.eY(A.B,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b5,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hG,q,64,q,A.hd,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b0I(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.al:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a_,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aJ(v,B.de(v,B.A(B.a([w,L.GP,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a1,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.adK,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eHY(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Z9.prototype={
S(){return new C.aE2(new B.ao(A.aq,$.at()))}}
C.aE2.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
abh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abh=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.n(new C.eHu(r))
w=1
break}B.eM()
r.n(new C.eHv(r))
t=4
q=C.hK2(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hJN(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eHw(r,q))
w=1
break}k=r.c
if(k!=null)B.a7(k,!1).K(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fE1()
f=$.Bk.h(0,k.a)
o=f==null||J.ch(f)?null:J.fm(f)
if(o==null){r.n(new C.eHx(r))
w=1
break}n=C.hJL(o,r.a.c)
C.hJH(r.a.c.a)
$.fDk=!0
k=r.c
if(k!=null)B.a7(k,!1).K(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fGB(j)
h=C.fGC(r.a.c)
e=C.fGD(r.a.c)
w=7
return B.b(C.bxC(k,r.a.c.a,j,h,new C.eHy(r),i,e,a0),$async$abh)
case 7:m=a3
k=r.c
if(k!=null)B.a7(k,!1).K(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a5(a1)
if(r.c!=null)r.n(new C.eHz(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.en,i).w
i=B.aG(d,A.bN,i).w
w=B.as(B.p(j,j,A.h,j,j,new B.o(A.be,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.aht,A.h,j,j,D.aRz,j,34,j,j,j,j,j,34),A.aw,D.blm],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Q.aJr,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b2(4,B.m(16),Ak.a6q),j,j,j,j,j,j,j,j,Q.GW,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ad,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJI,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cFJ[q]
o=A.c.j(0.06)
n=k.e?j:new C.eHA(k,p)
r.push(B.mZ(j,o,new B.w(p,j,Aq.QD,j,j,j,j,j,j,j,j,j),j,n,j,N.vC,j))}w=B.a([w,A.aA,u,A.ar,t,A.aA,s,A.T,B.cd(A.bH,r,A.by,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.aa,B.d(u,j,j,j,j,j,j,D.aJ_,j,j,j)],v))
w.push(A.aS)
u=k.e
t=u?j:k.gc_R()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bs.j(0.5),A.fn.j(0.5)],x.O):D.ceY
o=B.a([new B.a9(0,A.G,A.bs.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dMw:D.bxi
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.X,!0,j,B.aH(!1,s,!0,B.er(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jq,j,j,j)],v),A.m,j,A.b5,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a_,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.B(new B.L(0,0,0,h.f.d),B.p(j,B.br(!0,B.cf(B.u(w,A.ah,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ue,j,j,A.af),!0,!1,A.ag,!0,!1),A.h,j,new B.aV(0,680,0,i.a.b*0.85),D.a6W,j,j,j,j,j,j,j,j),j)}}
C.aYp.prototype={}
C.aAI.prototype={
S(){return new C.bg0(null,null)}}
C.bg0.prototype={
gats(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.oU,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gats().p()
this.bpd()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gats(),new C.e0K(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.bdD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cL_[s]
p=q.a*v
q=q.b*u
$.a1()
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=D.w4.j(0.25+r*0.6).gt(0)
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
C.aoM.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Xz.prototype={
S(){return new C.aya()}}
C.aya.prototype={
gafi(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aet(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gz9(){var w=this.e
return w===$?this.e=C.fGB(this.a.c).q(0,D.B4):w},
a5G(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5G=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.daf(s))
u=3
r=A.d.kU(D.uN,new C.dag(s))
q=B.d8(C.fGB(s.a.c),x.Q)
l=q
J.hB(l,D.B4)
p=l
if(s.gz9())J.ci(p,D.B4)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gz9()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fGC(i.c)
g=C.fGD(s.a.c)
w=6
return B.b(C.bxC(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5G)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aet(q,s.gafi())
f=q==null?null:q.b
n=f==null?s.gafi():f
if(!J.y(n,r.a)&&!s.gz9())throw B.O("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a7(q,!1).K(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a5(d)
if(s.c!=null)s.n(new C.dah(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5G,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.C(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bw,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dak(d)
e=B.A(B.a([f,B.aF(n,n,n,n,B.V(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uN[w]
u=o.gafi()
t=o.f?n:new C.dal(o,v)
f.push(new C.bof(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dJ,!0)
u=B.m(18)
t=o.gz9()?D.bHH:n
if(o.gz9())s=n
else s=m?A.bj:A.bO
r=B.V(A.dN,o.gz9()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gz9()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.C(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gz9()?A.al:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gz9()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.aw,q,B.fBe(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dam(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acy,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.ewT,n,n,n)],g))
f=B.cf(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.JT,n,n,A.af)
u=o.f?n:o.gbu3()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b5(B.m(16),A.W),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.B(D.bhj,e,n),new B.dp(1,A.ck,f,n),new B.B(A.Dz,new B.a4(1/0,50,B.bJ(B.er(B.as(o.f?A.qN:D.eMx,n,n,n),n,new B.o(n,n,n,s,n,D.bGm,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rB,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bof.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.a9(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bE(A.kH,w,w,B.V(v.c,A.al,w,w,w,18),w),new B.bE(A.la,w,w,B.d(v.b,w,w,w,w,w,w,D.ewR,w,w,w),w)],x.p)
if(q)v.push(D.aNw)
return B.aJ(w,B.de(w,new B.am(A.V,w,A.a9,A.q,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aE,A.w,r,w,w),A.n),A.eE,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e0H.prototype={
aAK(d,e,f){return e+"@"+A.a.aU(A.o.fE(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vB(d,e){return this.aAK(0,e,null)}}
C.aIy.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aYl.prototype={
B(d){var w,v,u=null,t=C.fFs(this.c)
if(t==null)w=D.bap
else{w=B.aG(d,u,x.w).w.cyA(D.bdU,D.ees)
v=this.d
w=B.tK(B.e8(B.ale(!1,t,!1,v,!1,390),!v,u),w)}return B.eY(A.B,new B.a4(416,870,new C.bhC(w,u),u),A.h,A.dp)}}
C.bhC.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cVr[w]
u=new B.b3(3,3)
s.push(new B.cE(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bx(u,u,u,u),t,D.ajl,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cWw[w]
u=new B.b3(3,3)
s.push(new B.cE(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bx(u,u,u,u),t,D.ajl,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bU(0,B.bQ(t,new B.o(t,t,t,B.m(64),D.cwt,D.bEW,A.n),A.b6),0,0,0))
s.push(B.bU(3,B.bQ(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.b6),3,3,3))
s.push(B.bU(13,B.bu(B.m(51),B.ec(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.as(B.p(D.aNH,B.p(t,t,A.h,t,t,D.aRR,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bU(13,B.e8(B.bu(B.m(51),D.bbK,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e8(B.as(B.p(t,t,A.h,t,t,new B.o(A.al,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.V,t,A.a9,A.h,s,t)}}
C.kV.prototype={
oM(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cx(),f=C.cx(),e=m.r
f=C.eg(A.L,!1,e.l(),A.ay,"",k,42,A.bh,A.u,"",0.22,f,l,"","",0,!1,"",0,D.b7,j,2,"Your Presentation Title",0,0,"",D.m5,D.cI,0.84,0.08,0.26)
w=C.cx()
v=m.w
w=C.eg(A.L,!1,v.l(),A.ay,"",k,20,A.bh,A.a1,"",0.12,w,l,"","",0,!1,"",0,D.b7,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.d7,D.cI,0.76,0.12,0.56)
u=C.cx()
t=m.d
s=x.u
t=C.qR(i,l,0,0,B.a([f,w,C.eg(A.bf,!1,4279310375,A.ay,"",t.j(0.8).l(),24,A.bh,A.a1,"",0.006,u,l,"","",0,!1,"",0,D.fb,t.l(),3,"",0,0,"",D.ca,D.eQ,0.3,0.35,0.72)],s),C.cx(),D.m4,"","","Welcome",D.d7)
u=C.cx()
u=C.eg(A.bf,!1,e.l(),A.ay,"",k,34,A.bh,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b7,j,2,"Agenda",0,0,"",D.ca,D.cI,0.84,0.08,0.08)
w=C.cx()
w=C.qR(i,l,0,0,B.a([u,C.eg(A.bf,!0,v.l(),A.ay,"",k,22,A.bh,A.a1,"",0.6,w,l,"","",0,!1,"",0,D.b7,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tf,D.cI,0.8,0.1,0.26)],s),C.cx(),D.m4,"","","Agenda",D.d7)
u=C.cx()
u=C.eg(A.bf,!1,e.l(),A.ay,"",k,32,A.bh,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b7,j,2,"Main Idea",0,0,"",D.ca,D.cI,0.84,0.08,0.08)
f=C.cx()
f=C.qR(i,l,0,0,B.a([u,C.eg(A.bf,!0,v.l(),A.ay,"",k,21,A.bh,A.a1,"",0.62,f,l,"","",0,!1,"",0,D.b7,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ca,D.cI,0.8,0.1,0.26)],s),C.cx(),D.m4,"","","Key Point 1",D.d7)
u=C.cx()
u=C.eg(A.bf,!1,e.l(),A.ay,"",k,30,A.bh,A.u,"",0.12,u,l,"","",0,!1,"",0,D.b7,j,2,"Compare & Contrast",0,0,"",D.ca,D.cI,0.84,0.08,0.08)
r=C.cx()
r=C.eg(A.bf,!0,v.l(),A.ay,"",k,18,A.bh,A.a1,"",0.62,r,l,"","",0,!1,"",0,D.b7,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cI,0.4,0.08,0.24)
q=C.cx()
q=C.qR(i,l,0,0,B.a([u,r,C.eg(A.bf,!0,v.l(),A.ay,"",k,18,A.bh,A.a1,"",0.62,q,l,"","",0,!1,"",0,D.b7,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cI,0.4,0.52,0.24)],s),C.cx(),D.m4,"","","Key Point 2",D.d7)
r=C.cx()
r=C.eg(A.L,!1,e.l(),A.ay,"",k,48,A.bh,A.u,"",0.2,r,l,"","",0,!1,"",0,D.b7,j,2,h,0,0,"",D.d7,D.cI,0.8,0.1,0.32)
e=C.cx()
p=C.Am(l,l,l,l,D.B0,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qR(i,l,0,0,B.a([r,C.eg(A.L,!1,v.l(),A.ay,"",k,22,A.bh,A.a1,"",0.1,e,l,"","",0,!1,"",0,D.b7,j,2,"Questions?",0,0,"",D.ca,D.cI,0.7,0.15,0.58)],s),C.cx(),D.m4,"","",h,D.d7)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Df.prototype={
bH(d){return this.e.$1(d)}}
C.em.prototype={}
C.iL.prototype={}
C.D6.prototype={
gaGg(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aeg(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a11(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.D6(v,u,t,d==null?w.d:d)},
Eg(d){return this.a11(null,d,null,null)},
azw(d){return this.a11(null,null,null,d)},
cyy(d,e){return this.a11(d,e,null,null)},
b5Q(d){return this.a11(d,null,null,null)},
b5X(d){return this.a11(null,null,d,null)}}
C.LB.prototype={
S(){return new C.bfn(new B.eK(0,$.at()),null,null)}}
C.bfn.prototype={
Z(){var w,v=this
v.a0()
w=v.qN(new C.dKs(v))
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
this.boG()},
B(d){var w=C.aeg(this.a.c.a)
if(w==null)w=A.d.gI(D.EW)
return B.cj(new C.dKr(this,w,C.fV4(this.a.c.d)))}}
C.bmQ.prototype={
B(d){return B.nm(A.Si,this.e,new C.eGI(this,A.k.J(this.d*0.35,1.6)-0.3))}}
C.baw.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aNX(d,e,v)
break
case"confetti":w.bAm(d,e,v)
break
case"crown":w.bBX(d,e,v)
break
case"aurora":w.bv7(d,e,v)
break
case"champagne":w.byf(d,e,v)
break
case"diamonds":w.bE6(d,e,v)
break
case"starburst":w.cmg(d,e,v)
break
case"balloons":w.bvl(d,e,v)
break
case"galaxy":w.bIJ(d,e,v)
break
case"redcarpet":w.cdB(d,e,v)
break
case"coins":w.bzJ(d,e,v)
break
case"lanterns":w.bSG(d,e,v)
break
case"hearts":w.bQn(d,e,v)
break
case"petals":w.c9_(d,e,v)
break
case"butterflies":w.bxi(d,e,v)
break
case"neon":w.bWp(d,e,v)
break
case"disco":w.bEh(d,e,v)
break
case"sunrise":w.cnK(d,e,v)
break
case"pearls":w.c83(d,e,v)
break
case"snow":w.clY(d,e,v)
break
case"laurel":w.bSM(d,e,v)
break
case"ribbons":w.cg2(d,e,v)
break
case"kente":w.bSv(d,e,v)
break
case"trophy":w.crg(d,e,v)
break
case"shooting":w.cjS(d,e,v)
break
case"bokeh":w.bvC(d,e,v)
break
case"orbits":w.c5M(d,e,v)
break
case"flowers":w.bI1(d,e,v)
break
case"music":w.bWa(d,e,v)
break
case"mandala":w.bUC(d,e,v)
break
case"sparklers":w.cm6(d,e,v)
break
case"city":w.bz2(d,e,v)
break}},
qF(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a1()
v=B.U()
v.r=g.j(A.k.D(h,0,1)).gt(0)
v.a=A.mY
u=new B.aZ(w.r,A.av,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.N(new B.bj(w,s))
u.N(new B.dk(w,t,w+f,t))
u.N(new B.dk(w,t,w,t+f))
u.N(new B.dk(w,t,w-f,t))
u.N(new B.dk(w,t,w,s))
u.N(new B.bV())
d.b4(u,v)
d.az(e,f*0.18,v)},
lb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cL(q,v)*2.5)+C.cL(q,u)*6.28)+1)/2
this.qF(d,new B.v(C.cL(q,t)*o,C.cL(q,s)*n),m*(0.006+0.014*C.cL(q,r))*(0.5+p),h,p*p)}},
aNX(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lb(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.b_],w),B.a([A.i4,A.bz],w),B.a([A.eo,A.b3],w),B.a([A.c,A.at],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bK(k/2.8)
i=A.k.J(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cL(h,1))
f=g+c0*(C.cL(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cL(h,3))
d=v[Math.abs(A.o.J(h,4))]
if(i<0.22){a0=B.l_(new B.v(g,c1),new B.v(f,e),A.co.aq(0,i/0.22))
a0.toString
$.a1()
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.saw(new B.a8(A.a_,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.qT(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bZ
a2=B.l_(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.L()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.gt(0)
a3=a2.L()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.aq(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cL(h,4)
if(a5<0.15){a4=1-a5/0.15
$.a1()
a8=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a8.r=d[0].j(0.5*a4).gt(0)
a8.z=new B.hG(A.G,o)
a3=a8.L()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cL(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cL(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a1()
b9=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
b9.r=b8.j(a8).gt(0)
b9.c=u
b9.d=A.bZ
b9.a=A.mY
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cL(h,b1+120)>0.5)this.qF(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bAm(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.J(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a1(),a0=B.U()
a0.saw(new B.a8(A.ax,A.aE,A.w,D.cQQ,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aA(0,new B.af(0,0,f,e)))
a1.bp(new B.af(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.J(a3*(h*(0.08+0.12*C.cL(u,1)))+C.cL(u,2)*w,w)
s=C.cL(u,3)
r=Math.sin(a3*(0.8+C.cL(u,4))+u)
q=h*(0.012+0.012*C.cL(u,5))
p=Math.cos(a3*(2+3*C.cL(u,6))+u)
o=D.N0[A.o.D(A.k.bK(C.cL(u,7)*5),0,4)]
J.bP(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cL(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gt(0)
if(A.o.J(u,5)===0){t=B.a([],v)
m=new B.aZ(d.r,A.av,null,null,t)
d=-q*2
t.push(new B.bj(d,0))
for(l=1;l<=8;++l){s=new B.av(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bH(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a1()
t=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t.r=B.b0(n.r).gt(0)
t.b=A.aj
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.dy(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.cz(t),k)
k.delete()}f.restore()}this.lb(a1,a2,a3,25,A.bJ,30)},
bBX(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a1()
n=B.a([],r)
m=new B.aZ(o.r,A.av,a4,a4,n)
n.push(new B.bj(a5,a6))
o=p-0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bV())
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.saw(new B.bR(A.B,0.5,A.w,a4,0,B.a([A.bJ.j(0.22),D.b15],v),a4,a4).aA(0,B.c0(w,u)))
l=o.L()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aZ($.a1().r,A.av,a4,a4,B.a([],r))
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
i.N(new B.bV())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.U()
n.saw(new B.a8(A.b4,A.ba,A.w,D.cPN,a4,a4).aA(0,new B.af(a5,a6,o,v)))
a8.b4(i,n)
for(v=[D.dWz,D.dT0,D.e0r],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(a0)
l=a1.L()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=A.al.gt(0)
l=a1.L()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=A.hD.gt(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.zX(i),u=B.a([],x.X),o=new B.xO(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jH(y.M));--f
o.lc()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aZ(n,v.b,a4,new B.d7([new B.FN(o,f),0,d*h,!0]),B.a([],r))
f=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
f.b=A.aj
f.c=g
f.e=A.fj
f.r=A.bJ.gt(0)
l=f.L()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.J(b0*0.5,1)
this.qF(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lb(a8,a9,b0,45,A.bJ,40)},
bv7(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lb(a8,a9,b0,60,A.c,50)
w=[D.e7s,D.e7b,D.e76,D.e8g]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a1()
i=B.a([],p)
h=new B.aZ(n.r,A.av,null,null,i)
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
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=t
n.r=m.j(0.28).gt(0)
n.a=A.mY
n.z=new B.hG(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=v
n.r=m.j(0.55).gt(0)
n.a=A.mY
n.z=new B.hG(A.G,v)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.J(t*(0.05+0.06*C.cL(a4,1))+C.cL(a4,2)*a3,a3)
r=C.cL(a4,3)
q=Math.sin(b0+a4)
p=C.cL(a4,4)
$.a1()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.r=A.w3.j(0.4+0.5*C.cL(a4,5)).gt(0)
n.a=A.mY
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
byf(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a1(),a0=B.U()
a0.saw(new B.bR(A.B,0.5,A.w,l,0,B.a([A.hn.j(0.25+0.1*h),D.TJ],x.O),l,l).aA(0,B.c0(new B.v(g,f),e)))
a1.az(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aZ(d.r,A.av,l,l,a0)
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
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.b=A.aj
a0.c=h
a0.r=D.N0[A.o.J(w,4)].j(0.7).gt(0)
p=a0.L()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.J(a3*(i*(0.07+0.12*C.cL(w,1)))+C.cL(w,2)*o,o)
r=k*(0.1+0.8*C.cL(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cL(w,4))
if(n<f){this.qF(a1,new B.v(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.a1()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.z4.j(0.75).gt(0)
p=d.L()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t.r=A.c.j(0.8).gt(0)
p=t.L()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bE6(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lb(a9,b0,b1,30,A.kK,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cL(p,1))
n=a7+o*4
m=A.k.J(t*(0.04+0.06*C.cL(p,2))+C.cL(p,3)*n,n)-o*2
l=C.cL(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bP(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a1()
g=B.a([],q)
f=new B.aZ(h.r,A.av,a5,a5,g)
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
g.push(new B.bV())
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.saw(new B.a8(A.ax,A.aE,A.w,D.cM_,a5,a5).aA(0,B.dy(A.J,k*1.2,o)))
a2=g.L()
g=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(g)).a,a2)
a2.delete()
a3=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a3.b=A.aj
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
if(a4>0.85)this.qF(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cmg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a1()
o=B.a([],v)
n=new B.aZ(p.r,A.av,null,null,o)
o.push(new B.bj(h,g))
p=s-q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bV())
p=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=A.bJ.j(r?0.12:0.07).gt(0)
m=p.L()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.J(a0+l*0.6,1.8)/1.8
$.a1()
u=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
u.b=A.aj
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gt(0)
m=u.L()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bK(a0/2.4)
k=A.k.J(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cL(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bb6.aq(0,k)*(0.5+0.5*C.cL(t,v)))
this.qF(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cL(t,3)),D.N0[A.o.D(A.k.bK(C.cL(t,4)*5),0,4)],u)}},
bvl(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cL(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.J(q*(0.05+0.05*C.cL(o,2))+C.cL(o,3)*m,m)
j=C.cL(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqk[A.o.J(o,6)]
h=$.a1()
g=B.a([],s)
f=new B.aZ(h.r,A.av,a3,a3,g)
h=k+n*1.15
g.push(new B.bj(j,h))
for(e=1;e<=6;++e){d=new B.av(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bH(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a1()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gt(0)
a1=d.L()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.dy(new B.v(j,k),n*2.3,l)
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d=B.aq(i,A.x,0.35)
d.toString
l.saw(new B.bR(D.aNK,0.9,A.w,a3,0,B.a([A.c,i,d],t),A4.aqb,a3).aA(0,a2))
a1=l.L()
u.drawOval(B.cz(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aZ(g.r,A.av,a3,a3,l)
d=n*0.12
l.push(new B.bj(j-d,h))
l.push(new B.av(j+d,h))
l.push(new B.av(j,k+n))
l.push(new B.bV())
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=B.aq(i,A.x,0.3).gt(0)
a1=l.L()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.J(q*(0.1+0.1*C.cL(o,11))+C.cL(o,12)*m,m)
r=C.cL(o,13)
J.bP(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.dy(A.J,t,v)
$.a1()
r=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=D.aqk[A.o.J(o,6)].j(0.85).gt(0)
a1=r.L()
u.drawRect(B.cz(s),a1)
a1.delete()
u.restore()}},
bIJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lb(b1,b2,b3,50,A.c,70)
for(w=[D.e7A,D.e7h,D.e7m],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a1()
k=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k.saw(new B.bR(A.B,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.c0(new B.v(r,m),l)))
j=k.L()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.J(i,3)
g=C.cL(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cL(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bJ,A.eN,g)
k.toString
d=C.cL(i,3)
$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=k.j(0.5+0.5*C.cL(i,4)).gt(0)
a0.a=A.mY
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a1()
a9=B.U()
a9.saw(new B.bR(A.B,0.5,A.w,a4,0,B.a([A.z4.j(0.55),D.aan],u),a4,a4).aA(0,B.c0(b0,a8)))
b1.az(b0,a8,a9)
a1=A.k.J(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bK(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cL(a2,9)),a6*0.1*C.cL(a2,8))
a5=B.l_(a3,a3.ap(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l_(a3,a5,0.6)
a6.toString
a8=B.U()
a8.saw(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.qT(a3,a5)))
a8.c=a7*0.005
a8.d=A.bZ
b1.bU(a6,a5,a8)}},
cdB(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a1()
n=B.a([],s)
m=new B.aZ(o.r,A.av,b5,b5,n)
n.push(new B.bj(q,u))
o=p-0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bV())
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.saw(new B.bR(A.B,0.5,A.w,b5,0,B.a([A.z4.j(0.28),D.aan],w),b5,b5).aA(0,B.c0(new B.v(q,u),t)))
o.a=A.mY
l=o.L()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.fp:A.f5)
a9=$.a1()
b0=B.a([],s)
m=new B.aZ(a9.r,A.av,b5,b5,b0)
b0.push(new B.bj(a5?0:b6,0))
b0.push(new B.av(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.dk(a9,k,a5?g:a1,b7))
b0.push(new B.av(a5?0:b6,b7))
b0.push(new B.bV())
a9=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a9.saw(new B.a8(A.a_,A.a7,A.w,a7,b5,b5).aA(0,new B.af(a6,0,a6+i,j)))
l=a9.L()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
b1.r=A.hn.gt(0)
b1.c=o
b1.d=A.bZ
l=b1.L()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aZ($.a1().r,A.av,b5,b5,B.a([],s))
w=b7*0.78
b2.N(new B.bj(b6*0.42,w))
b2.N(new B.av(b6*0.58,w))
b2.N(new B.av(b6*0.8,b7))
b2.N(new B.av(b6*0.2,b7))
b2.N(new B.bV())
v=B.U()
v.saw(D.bGg.aA(0,new B.af(0,w,0+b6,w+b7*0.22)))
b9.b4(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.J(b7*(0.05+0.07*C.cL(r,1))+C.cL(r,2)*b3,b3)
u=C.cL(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qF(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cL(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bzJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cL(t,1))
r=h+s*4
q=s*2
p=A.k.J(u*(0.12+0.12*C.cL(t,2))+C.cL(t,3)*r,r)-q
o=C.cL(t,4)*i
n=Math.cos(f*(2+3*C.cL(t,5))+t)
m=Math.abs(n)
l=B.dy(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a1()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.saw(new B.a8(A.ax,A.aE,A.w,n>0?D.cZh:D.ckw,null,null).aA(0,l))
k=q.L()
v.drawOval(B.cz(l),k)
k.delete()
q=-(s*0.22)
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=Math.max(0.6,s*0.08)
j.r=D.b8E.gt(0)
k=j.L()
v.drawOval(B.cz(new B.af(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qF(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lb(d,e,f,30,A.bJ,110)},
bSG(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lb(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cL(p,1))
n=a1+o*4
m=a1+o*2-A.k.J(t*(0.03+0.04*C.cL(p,2))+C.cL(p,3)*n,n)
l=C.cL(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a1()
h=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
h.saw(new B.bR(A.B,0.5,A.w,d,0,B.a([H.aav.j(0.45*k),D.a9p],u),d,d).aA(0,B.c0(new B.v(l,m),j)))
g=h.L()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aZ(i.r,A.av,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bj(l-i,e))
j.push(new B.av(l+i,e))
i=o*0.38
h=m+h
j.push(new B.av(l+i,h))
j.push(new B.av(l-i,h))
j.push(new B.bV())
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i=B.aq(D.b1e,A.c,0.2*k)
i.toString
j.saw(new B.a8(A.b4,A.ba,A.w,B.a([D.b55,i],u),d,d).aA(0,B.dy(new B.v(l,m),o*1.4,o)))
g=j.L()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(k).gt(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bQn(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cL(p,1))
n=a1+o*4
m=A.k.J(s*(0.05+0.06*C.cL(p,2))+C.cL(p,3)*n,n)
l=C.cL(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bP(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a1()
l=B.a([],t)
i=new B.aZ(m.r,A.av,d,d,l)
m=o*0.9
l.push(new B.bj(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p5(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p5(m,g,o*1.8,h,0,m))
l.push(new B.bV())
f=D.cDP[A.o.J(p,5)]
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l=B.aq(f,A.x,0.25)
l.toString
m.saw(new B.bR(A.vw,0.5,A.w,d,0,B.a([A.c,f,l],u),H.Zv,d).aA(0,B.c0(A.J,o*1.4)))
e=m.L()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lb(a3,a4,a5,30,A.i4,130)},
c9_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cL(q,1))
o=g+p*4
n=A.k.J(t*(0.05+0.06*C.cL(q,2))+C.cL(q,3)*o,o)
m=C.cL(q,4)
l=Math.sin(s+q*0.7)
J.bP(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cL(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a1()
m=B.a([],u)
k=new B.aZ(n.r,A.av,i,i,m)
n=-p
m.push(new B.bj(0,n))
l=n*0.2
m.push(new B.dk(p,l,0,p))
m.push(new B.dk(n,l,0,n))
m.push(new B.bV())
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
m=(q&1)===0?D.ceX:D.cNc
n.saw(new B.a8(A.a_,A.a7,A.w,m,i,i).aA(0,B.c0(A.J,p)))
j=n.L()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lb(d,e,a0,25,A.bJ,140)},
bxi(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lb(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cL(r,1))
p=Math.sin(b2*(0.15+0.1*C.cL(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cL(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bP(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bP(v.save())
v.scale(a1*n,1)
a2=$.a1()
a3=B.a([],u)
a4=new B.aZ(a2.r,A.av,a6,a6,a3)
a3.push(new B.bj(0,0))
a3.push(new B.p5(f,e,l,d,h,0))
a3.push(new B.p5(q,h,g,q,0,h))
a3.push(new B.bV())
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.saw(new B.a8(A.a_,A.a7,A.w,i?D.cMV:D.cPl,a6,a6).aA(0,new B.af(0,m,k,j)))
a5=a2.L()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.b=A.aj
a2.c=Math.max(0.6,o)
a2.r=D.zc.gt(0)
a5=a2.L()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a1()
p=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=D.b84.gt(0)
p.c=q*0.1
p.d=A.bZ
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bWp(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.J(w+t/4,1)
r=f*(0.2+0.7*s)
$.a1()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.b=A.aj
q.c=v
q.r=D.arl[t].j((1-s)*0.9).gt(0)
q.z=new B.hG(A.G,v)
p=r*0.3
p=B.c_(B.dy(e,r,r*1.6),new B.b3(p,p))
o=q.L()
u.drawRRect(B.fM(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cL(m,1)*4)+m)))
k=D.arl[A.o.J(m,4)]
j=m*n+h
i=g-l
i=B.c_(new B.af(j,i,j+w,i+l),new B.b3(v,v))
$.a1()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=k.j(0.85).gt(0)
j.z=new B.hG(A.a6e,p)
o=j.L()
u.drawRRect(B.fM(i),o)
o.delete()}},
bEh(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cL(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cL(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.oG,A.dD][A.o.J(p,4)]
j=C.cL(p,3)
$.a1()
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i.r=k.j(0.75).gt(0)
i.a=A.mY
i.z=new B.hG(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a1()
t=B.U()
t.r=A.aB.gt(0)
t.c=1.2
a3.bU(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.U()
t.r=A.fK.gt(0)
a3.az(v,u,t)
J.bP(q.save())
a1=new B.aZ(a1.r,A.av,null,null,B.a([],x.v))
a1.N(new B.ku(B.c0(v,u)))
a3.tg(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.J(a1,g)
i=Math.sin(e*1.7+l+s)
$.a1()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=B.aq(A.bu,A.c,0.4+0.6*((i+1)/2)).gt(0)
h=d.L()
q.drawRect(B.cz(new B.af(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qF(a3,v.ap(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cnK(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.aq(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a1()
q=B.a([],u)
p=new B.aZ(r.r,A.av,h,h,q)
q.push(new B.bj(d,a0))
r=s-0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bV())
r=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=A.bJ.j(0.1).gt(0)
o=r.L()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a1()
a0=B.U()
a0.saw(new B.bR(A.B,0.5,A.w,h,0,B.a([D.aYO.j(0.6),D.a9p],x.O),h,h).aA(0,B.c0(a1,d)))
a2.az(a1,d,a0)
a0=e*0.2
d=B.U()
d.saw(D.dRx.aA(0,B.c0(a1,a0)))
a2.az(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.J(d*(1+t*0.3)+C.cL(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(0.18).gt(0)
i=B.dy(new B.v(l,k),r,u)
o=j.L()
w.drawOval(B.cz(i),o)
o.delete()
i=B.dy(new B.v(l+q,k-n),r,m)
o=j.L()
w.drawOval(B.cz(i),o)
o.delete()}this.lb(a2,a3,a4,20,A.hD,180)},
c83(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a1()
q=B.a([],t)
p=new B.aZ(r.r,A.av,f,f,q)
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
r=new B.bV()
q.push(r)
q=p.f
if(q!=null)r.bH(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a1()
r=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=B.aq(A.cA,A.iO,s/3).j(0.55).gt(0)
k=r.L()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cL(i,1))
g=d-A.k.J(u*(0.04+0.05*C.cL(i,2))+C.cL(i,3)*j,j)
n=C.cL(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a1()
t=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t.saw(new B.bR(Ai.qX,0.5,A.w,f,0,D.cSi,f,f).aA(0,B.c0(new B.v(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lb(a1,a2,a3,25,A.c,190)},
clY(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cL(r,1))
p=f+q*4
o=A.k.J(u*(0.03+0.05*C.cL(r,2))+C.cL(r,3)*p,p)
n=C.cL(r,4)
m=Math.sin(t+r)
$.a1()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=A.c.j(0.6+0.4*C.cL(r,5)).gt(0)
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
h.delete()}v.restore()}this.lb(d,a0,a1,40,A.eo,200)},
bSM(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
f.saw(D.bG4.aA(0,new B.af(0,o,n,m)))
e=f.L()
s.drawOval(B.cz(g),e)
e.delete()
s.restore()}}$.a1()
a0=B.U()
a0.b=A.aj
a0.c=a2*0.003
a0.r=D.b1p.gt(0)
a3.az(w,v*1.08,a0)
d=a5*0.8
this.qF(a3,w.ap(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lb(a3,a4,a5,40,A.bJ,210)},
cg2(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hn,A.hD],a6),B.a([A.nS,A.i4],a6),B.a([A.az,A.eN],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a1()
k=B.a([],o)
j=new B.aZ(l.r,A.av,null,null,k)
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
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.du(i,s),l=new B.bS(l,l.gH(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.av(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bH(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bV()
k.push(l)
k=j.f
if(k!=null)l.bH(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a1()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k=a7[m]
h=k[0]
l.saw(new B.a8(A.a_,A.a7,A.w,B.a([h,k[1],h],a6),H.ar2,new B.mk(w)).aA(0,new B.af(0,0,v,u)))
l.r=A.c.j(0.85).gt(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lb(a8,a9,b0,40,A.c,220)},
bSv(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a3=Math.abs(a0)
a2.r=D.Zy[a3].gt(0)
a4=a2.L()
s.drawRect(B.cz(new B.af(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a5.r=D.Zy[A.o.J(a3+2,5)].gt(0)
a4=a5.L()
s.drawRect(B.cz(new B.af(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.J(n*(0.04+0.05*C.cL(a0,1))+C.cL(a0,2)*a6,a6)
v=C.cL(a0,3)
t=C.cL(a0,4)
this.qF(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.Zy[A.o.J(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
crg(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a1()
p=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
p.c=v
p.r=A.bJ.j(0.06).gt(0)
o=p.L()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aZ($.a1().r,A.av,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.N(new B.bj(v,a2))
w=a1+w
l.N(new B.av(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.N(new B.dk(w,r,p,k))
w=a2+m*0.95
l.N(new B.av(p,w))
p=n*0.3
j=a2+m
l.N(new B.av(a1+p,j))
l.N(new B.av(a1-p,j))
q=a1-q
l.N(new B.av(q,w))
l.N(new B.av(q,k))
l.N(new B.dk(v,r,v,a2))
l.N(new B.bV())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.dy(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=q
d.r=A.at.gt(0)
o=d.L()
u.drawArc.apply(u,[B.cz(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.U()
a1.saw(new B.a8(A.a_,A.a7,A.w,D.cUh,A.aqq,null).aA(0,new B.af(v,a2,r,j)))
a4.b4(l,a1)
a0=A.k.J(a6*0.6,1.4)
if(a0<1)this.qF(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bAn(a4,a5,a6,60)},
bAn(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.J(k*(0.1+0.1*C.cL(p,31))+C.cL(p,32)*v,v)
n=C.cL(p,33)
J.bP(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dy(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a1()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.r=D.N0[A.o.J(p,5)].gt(0)
m=n.L()
u.drawRect(B.cz(o),m)
m.delete()
u.restore()}},
cjS(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lb(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cL(o,1)*1.6
m=A.k.J(a2+C.cL(o,2)*n,n)/n
l=e*(C.cL(o*7+A.k.bK((a2+C.cL(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a1()
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.saw(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.bJ],s),null,null).aA(0,B.qT(new B.v(l,h),i)))
g.c=r
g.d=A.bZ
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qF(a0,i,p,A.c,1-m)}},
bvC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cL(r,1))
p=A.k.J(C.cL(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.J(C.cL(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a1()
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l=A.o.J(r,5)
m.r=D.asB[l].j(n).gt(0)
m.a=A.mY
m.z=new B.hG(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
m.b=A.aj
m.c=Math.max(0.6,q*0.05)
m.r=D.asB[l].j(n*1.4).gt(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
c5M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bP(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.dy(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a1()
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.b=A.aj
o.c=u
o.r=A.bJ.j(0.45).gt(0)
n=o.L()
w.drawOval(B.cz(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=A.hD.gt(0)
n=k.L()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=A.hn.j(0.4).gt(0)
k.z=new B.hG(A.G,r)
n=k.L()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lb(d,e,f,45,A.bJ,270)},
bI1(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.J(o,4)
m=C.cL(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.J(a7+C.cL(o,2)*4,4)/4
j=A.ev.aq(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cL(o,3))*(j*i)
if(h<=0.5)continue
g=D.cKh[A.o.J(o,5)]
J.bP(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dy(new B.v(0,l),i,j)
$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.saw(new B.a8(A.b4,A.ba,A.w,B.a([A.c,g],u),null,null).aA(0,B.dy(new B.v(0,l),f,h)))
a1=a0.L()
v.drawOval(B.cz(d),a1)
a1.delete()}$.a1()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=A.hn.gt(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lb(a5,a6,a7,30,A.hD,280)},
bWa(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.J(t+n/4,1)
l=B.c0(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a1()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=v
j.r=D.apy[n].j((1-m)*0.8).gt(0)
i=j.L()
u.drawArc.apply(u,[B.cz(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.J(v*(0.06+0.06*C.cL(g,1))+C.cL(g,2)*h,h)
e=C.cL(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cL(g,4))
a0=D.apy[A.o.J(g,4)]
$.a1()
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
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
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.18)
i=o.L()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.3)
i=o.L()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bUC(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.aZ(d.r,A.av,a3,a3,a0)
a0.push(new B.bj(0,i))
a0.push(new B.dk(h,m,0,g))
a0.push(new B.dk(j,m,0,i))
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=t
d.r=B.aq(A.bJ,A.oG,k).j(0.7).gt(0)
a2=d.L()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=A.hD.j(0.8).gt(0)
a2=d.L()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a1()
a5=B.U()
a5.saw(new B.bR(A.B,0.5,A.w,a3,0,B.a([A.hn.j(0.25),D.TJ],x.O),a3,a3).aA(0,B.c0(w,a4)))
a7.az(w,a4,a5)
this.lb(a7,a8,a9,30,A.bJ,300)},
cm6(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a1()
h=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
h.r=A.bu.gt(0)
h.c=q
h.d=A.bZ
g=h.L()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l.saw(new B.bR(A.B,0.5,A.w,null,0,B.a([A.hD,A.hn.j(0.6),D.TJ],o),null,null).aA(0,B.c0(new B.v(j,i),p)))
g=l.L()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cL(f,1)
d=A.k.J(b2+C.cL(f,2)*e,e)/e
a0=A.k.bK((b2+C.cL(f,2)*e)/e)
a1=C.cL(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cL(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a6.r=B.aq(A.hD,A.b_,d).j(1-d).gt(0)
a6.c=Math.max(0.8,u)
a6.d=A.bZ
a6.a=A.mY
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
g.delete()}}}this.lb(b0,b1,b2,35,A.bJ,310)},
bz2(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aNX(a9,new B.ap(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cL(n,1))
l=a8*(0.14+0.24*C.cL(n,2))
k=a8-l
j=new B.af(o,k,o+m,k+l)
$.a1()
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i.saw(D.bGY.aA(0,j))
h=i.L()
r.drawRect(B.cz(j),h)
h.delete()
g=A.k.bK(m/q)
f=A.k.bK(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cL(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a1()
a6=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a6.r=A.bJ.j(0.85).gt(0)
h=a6.L()
r.drawRect(B.cz(new B.af(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aWe.prototype={
B(d){var w,v=null,u=new C.c2F(),t=new C.c2H(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiv,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c2G(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.EW[w]))
return B.cd(A.bH,s,A.by,12,10)}}
C.X7.prototype={
S(){return new C.awB()}}
C.awB.prototype={
guJ(){var w=this.d
return w===$?this.d=this.a.c:w},
gaUl(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.bb(w.b,A.aY,A.aL),$.at())}return v},
gatt(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGg()
v=$.at()
u.f!==$&&B.bH()
t=u.f=new B.ao(new B.bb(w,A.aY,A.aL),v)}return t},
p(){var w=this.gaUl(0),v=$.at()
w.R$=v
w.O$=0
w=this.gatt()
w.R$=v
w.O$=0
this.a2()},
XH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().AV(90,700,700,A.er),$async$XH)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$XH)
case 8:p=e
o=q.b.toLowerCase()
n=J.af8(o,".png")?"image/png":"image/jpeg"
r.n(new C.d_M(r,n,p))
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
return B.i($async$XH,v)},
aUk(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b2(4,B.m(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aJN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aeg(p.guJ().a)
if(n==null)n=A.d.gI(D.EW)
w=p.guJ()
v=p.r
u=x.p
v=B.C(new B.am(A.V,o,A.a9,A.q,B.a([B.bU(0,new C.LB(p.guJ(),!1,!0,new B.cv(w.a+v,x.W)),0,0,0),B.an(o,B.G4(A.mH,new C.d_R(d),B.ok(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.G4(D.brR,new C.d_S(p),B.ok(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJH,o,o,o)
t=B.C(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaUl(0),o,o,o,o,o,2,p.aUk("Big words"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_T(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hi,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hn.j(0.6),A.r,1)
if(p.guJ().d.length===0)q=D.bva
else{q=C.fV4(p.guJ().d)
if(q==null)q=new Uint8Array(0)
q=B.hN(B.fC(q,A.B,o,o,A.cj,A.bM,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ab,B.aJ(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_S(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guJ().d.length!==0)r.push(B.aF(o,o,o,o,D.Yo,o,o,o,new C.d_U(p),o,o,o,o,"Remove logo",o))
return B.cg(o,A.x,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.T,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gatt(),o,o,o,o,o,2,p.aUk("Line under it"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_V(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o),A.aa,B.dj(D.bu7,D.eVo,new C.d_W(p,d),B.bk(A.at,o,o,o,A.x,o,A.c9,o,new B.b5(B.m(14),A.W),o,o,o))],u),A.ah,o,A.e,A.R,0,A.p),A.h,o,o,D.aS0,o,o,o,o,A.Dv,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aI1.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.Xs.prototype={
S(){return new C.bc_(new B.ao(A.aq,$.at()))}}
C.bc_.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.K(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.ak,k=B.aG(d,A.bN,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.A(B.a([B.C(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.cu,l,o,o,o,o),o,o,o,new C.d6f(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cw_[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.b3(12,12)
q=new B.b3(12,12)
p=n?A.c.j(0.06):A.bO
u.push(B.aH(!1,new B.bx(r,r,r,r),!0,B.p(A.B,new B.w(s,o,A.v9,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bx(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d6g(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.B(A.hr,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.E3(A.bH,6,6,A.by,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aN
e.push(B.A(B.a([B.C(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b2(4,B.m(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aKA,new C.d6h(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dp(1,A.ck,B.cQ(e,o,o,o,o,A.af,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aV(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rB,A.Vh,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bbn.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f6()
a2.dY(this.c)
w=this.b
v=w/6.283185307179586
$.a1()
u=B.U()
u.z=A.Ov
t=B.U()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ag()
l=a2.ag()
k=a2.ag()
j=0.8+a2.ag()*2.2
i=Math.sin(w*(3+a2.aF(4))+n)
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
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=e.gt(0)
a1.c=1
d=a1.L()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.L()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ao(d){return d.b!==this.b}}
C.bb4.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.c_(new B.af(0,0,0+a7.a,0+a7.b),A.k6),a2=this.b,a3=Math.sin(a2*2),a4=$.a1(),a5=B.U()
a5.b=A.aj
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gt(0)
a5.z=A.mM
a6.bi(a1,a5)
a5=x.v
a4=new B.aZ(a4.r,A.av,a0,a0,B.a([],a5))
a4.N(new B.j2(a1))
v=new B.ahB(new B.xO(B.zX(a4),!1,B.a([],x.X))).gI(0)
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
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.d=A.bZ
j.c=1.5+2*m/10
j.r=w.j(k).gt(0)
i=A.k.J(n-p*(1-m/10),t)
h=A.k.J(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aZ(r,k,a0,new B.d7([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.aZ(r,k,a0,new B.d7([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.aZ(r,a2.b,a0,new B.d7([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.lc()
e=u[a3].a4c(n).a
$.a1()
k=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=w.gt(0)
k.z=Z.pg
g=k.L()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=A.c.gt(0)
g=d.L()
q.drawCircle(k,f,2,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.bjN.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f6()
e.dY(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.hd()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gajd()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a1()
i=B.a([],n)
h=new B.aZ(j.r,A.av,f,f,i)
i.push(new B.bj(w,v))
j=l-k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bV())
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.saw(B.aRn(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.jg
g=j.L()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.b64.prototype={
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
e=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
e.r=f.j(g).gt(0)
e.z=new B.hG(A.G,k*0.35)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
e.b=A.aj
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gt(0)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.b5H.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f6()
a0.dY(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ag()-0.5)*0.1)
k=v*(0.06+a0.ag()*0.05)
j=a0.ag()*3.141592653589793*2
i=$.a1()
h=B.a([],n)
g=new B.aZ(i.r,A.av,null,null,h)
h.push(new B.bj(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.av(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bH(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a1()
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i.b=A.aj
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
C.bqz.prototype={
a5(d,e){var w,v,u=new B.af(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a1()
w=B.U()
t=(0.5+0.5*t)*0.12
w.saw(new B.bR(A.B,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.aqu,null).aA(0,u))
d.bp(u,w)
w=u.cD(-3)
v=B.U()
v.b=A.aj
v.c=2
v.r=this.c.j(0.1+t).gt(0)
v.z=A.jg
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bnD.prototype={
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
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
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
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=A.c.j(l*0.9).gt(0)
g.z=new B.hG(A.G,k*0.3)
h=g.L()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ao(d){return d.b!==this.b}}
C.bmM.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.af(0,0,0+e.a,0+e.b)
$.a1()
v=B.U()
v.a=A.mY
v.saw(new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aA(0,w))
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bap.prototype={
a5(d,e){var w,v,u,t,s,r=e.gef(),q=0.55+0.45*Math.sin(this.b)
$.a1()
w=B.U()
w.b=A.aj
w.c=1.4
w.d=A.bZ
v=this.d
w.r=v.j(0.55+q*0.35).gt(0)
u=B.U()
u.b=A.aj
u.c=4
u.r=v.j(0.12*q).gt(0)
u.z=A.qw
r=new C.d_t(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
ao(d){return d.b!==this.b}}
C.wD.prototype={}
C.H1.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aob.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.tV.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m4.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hm.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ew.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eg(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.Q(x.N,x.z)
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
u.m(0,"decoration",C.hxi(v.z))
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
C.ll.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.R(n).k("I<1,ew>")
n=B.z(new B.I(n,new C.c8_(),m),m.k("ai.E"))
return C.qR(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.R(n).k("I<1,a0<n,@>>")
n=B.z(new B.I(n,new C.c80(),m),m.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hR.prototype={
gb4c(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bg(v)},
gQo(){if(!C.kf(this.w))return!1
var w=this.gb4c()
if(w==null)return!1
return new B.N(Date.now(),0,!1).cT(w.bP())},
hs(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.R(r).k("I<1,ll>")
r=B.z(new B.I(r,new C.c7P(),q),q.k("ai.E"))
return C.Am(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.Q(x.N,x.z)
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
v=B.R(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.c7Q(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.js.prototype={}
C.aYo.prototype={
B(d){return B.cj(new C.c7V(this))}}
C.alu.prototype={
S(){return new C.bfa(null,null)}}
C.bfa.prototype={
gaUm(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.fZ,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gaUm().p()
this.bor()},
B(d){return B.c4(this.gaUm(),new C.dxN(),this.a.c)}}
C.aHO.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aaT.prototype={
O4(d,e,f,g){return this.bHJ(d,e,f,g)},
bHJ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O4)
case 3:s=i
if(d.e==null){w=1
break}B.a7(d,!1).K(null)
t=d.F(x.q).f
t.P(B.b_(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dn,24)],x.V),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aS,p,A.ar,B.d(o,v,n,A.Z,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.Z,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d1)
n.push(B.A(B.a([B.C(new C.abb(A.hf,"Download",A.bQ,new C.eaq(w,d),!0,v),1),A.aw,B.C(new C.abb(A.ut,"Share",A.bg,new C.ear(w,d),!1,v),1),A.aw,B.C(new C.abb(A.h1,"Safari",A.aW,new C.eas(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bF(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eat(d),v,v))
return B.br(!0,new B.B(A.oY,B.u(B.a([B.p(v,B.u(n,A.ah,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iy,v,t,u,s,v,A.n),v,v,v,v,A.DB,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.abb.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.er(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bjA,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anr(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.L(v,w,v,w)}else{v=6*w
u=new B.L(v,10*w,v,12*w)}t=i.c_T().ahp(1.35)
s=B.asA(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.btF(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bg,h,h,h,h,2,D.bCW,A.z,!0,h,!0,h,!1,i.x,A.ad,h,h,h,new B.cv("slide_tf_"+g.a,x.W),h,A.v6,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yb,A.am,h,A.Qv,h,h)
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
w=n?t.cyl(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eA:A.BA
p=B.d(f,new B.cv("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qm:s
$.a1()
j=B.U()
j.b=A.aj
j.c=3*w
j.e=A.fj
j.r=A.aG.gt(0)
j=i.cg5(p,t,k,j)
k=g.r
w=new B.am(A.V,h,A.a9,A.q,B.a([j,i.cg3(k,t,l?A.Qm:s)],x.p),h)}else w=i.cg4(p,t,g.k2?A.Qm:s,m)
v=new B.n8(w,new B.cv("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.B(u,new B.bE(r,h,h,q,h),h)
case 1:case 4:return i.bR_()
case 3:return i.c82()
case 2:return B.b1(h,h,h,new C.aYj(g,h),A.fy)
case 5:g=g.r
return new C.aYl(g,!i.e&&i.z==null,h)}},
c_T(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kt
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cI(D.a9n,new B.v(0,4*v),8*v)],x.S)
w=l
break
case"neon":v=o.d
e=B.a([new B.cI(l,A.J,6*v),new B.cI(l,A.J,16*v),new B.cI(l.j(0.8),A.J,30*v)],x.S)
w=l
break
case"marker":k=A.u
g=A.cV
w=A.aG
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.m9
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cI(A.bz,new B.v(v,v),0)],x.S)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.S)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cI(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cI(A.bb,new B.v(-3*v,0),0),new B.cI(A.aH,new B.v(3*v,0),0)],x.S)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cI(A.dh,A.J,8*v),new B.cI(A.aH,new B.v(0,-3*v),18*v)],x.S)
k=A.u
w=H.a8j
break
case"ice":v=o.d
e=B.a([new B.cI(A.b3,A.J,10*v),new B.cI(A.cA,A.J,22*v)],x.S)
k=A.O
w=A.eo
break
case"chalk":h=o.d
e=B.a([new B.cI(l.j(0.45),A.J,3*h)],x.S)
w=l
k=A.kt
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.S)
for(t=o.d,q=0;q<8;++q){p=D.cEw[q]
u.push(new B.cI(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cI(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a1()
f=B.U()
v=o.d
f.saw(D.bEE.aA(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cI(A.Ik,new B.v(0,3*v),5*v)],x.S)
w=l
k=A.u
break
case"sunset":$.a1()
f=B.U()
v=o.d
f.saw(D.bEY.aA(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cI(l,A.J,14*o.d)],x.S)
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
e=B.a([new B.cI(l.j(0.45),new B.v(u,u),0),new B.cI(l.j(0.2),new B.v(v,v),0)],x.S)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kt
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avl(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ec_.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c7T(h)
v=r.k2?C.hJm(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eA:A.BA
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VD(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cg5(d,e,f,g){return this.avl(d,e,f,!1,g)},
cg3(d,e,f){return this.avl(d,e,f,!1,null)},
cg4(d,e,f,g){return this.avl(d,e,f,g,null)},
btF(d){switch(d.a){case 2:return A.B
case 1:case 5:return A.a7
default:return A.a_}},
bR_(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.as(B.V(s.b===D.kA?A.Ex:A.zZ,A.aB,t,t,t,32),t,t,t)}w=u.bwx(r)
if(s.b===D.kA){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.ct,A.r,1),s,B.a([new B.a9(0,A.G,A.x.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.L(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJo(r,!0)
return C.fgC(s.go,v,s.id)}return w},
aJo(d,e){var w,v,u,t
try{w=C.hJF(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c5(u,"_bg")
u=B.cj(new C.c7S(this,w,v,e))
return u}catch(t){return D.a7A}},
bwx(d){return this.aJo(d,!1)},
c82(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aWY
return C.hJX(v,w.db,w.dx)}}
C.aYj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a1(),g=B.U(),f=this.b
g.r=B.b0(f.ay).gt(0)
w=B.U()
w.r=B.b0(f.ch).gt(0)
w.b=A.aj
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
case 2:r=new B.aZ(h.r,A.av,i,i,B.a([],x.v))
r.N(new B.bj(u/2,0))
r.N(new B.av(u,t))
r.N(new B.av(0,t))
r.N(new B.bV())
d.b4(r,g)
d.b4(r,w)
break
case 3:r=new B.aZ(h.r,A.av,i,i,B.a([],x.v))
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
r.N(new B.bV())
d.b4(r,g)
d.b4(r,w)
break
case 4:h=t/2
w.c=v+2
d.bU(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.aZ(h.r,A.av,i,i,B.a([],x.v))
r.N(new B.bj(q,0))
r.N(new B.av(u,0))
r.N(new B.av(u-q,t))
r.N(new B.av(0,t))
r.N(new B.bV())
d.b4(r,g)
d.b4(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aZ(h.r,A.av,i,i,f)
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
r.e=null}}r.N(new B.bV())
d.b4(r,g)
d.b4(r,w)
break}},
ao(d){return d.b!==this.b}}
C.aFr.prototype={
S(){return new C.bq6(null,null)}}
C.bq6.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.ic,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bqE()},
aJz(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bQ(B.as(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a_,A.a7,A.w,v,w,w),A.n),A.b6)},
btT(){var w,v=this,u=null,t=v.aJz("Slide A",A.bg),s=v.aJz("Slide B",A.aW)
if(v.a.c===D.ca)return new B.am(A.V,u,A.aX,A.q,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eP1(v,s,t),u)},
B(d){return this.btT()}}
C.aG3.prototype={
iE(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jg(d){return d.b!==this.b}}
C.SW.prototype={
S(){return new C.bfk(null,null)}}
C.bfk.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bh(null,A.zq,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ca){w.st(0,1)
return}B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dIF(u),x.a)},
bo(d){var w,v,u,t=this
t.bz(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.st(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ca)w.st(0,1)
else B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dIE(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.boF()},
B(d){var w,v=this.a
if(v.c.dy===D.ca||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dID(this),v.d)}}
C.H0.prototype={
B(d){return B.cj(new C.c7L(this))}}
C.awm.prototype={
S(){return new C.b9V()}}
C.b9V.prototype={
Z(){this.a0()
if(this.a.c!==D.ca)B.bK(A.Js,new C.cY7(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ca)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.SW(C.eg(A.bf,!1,4279310375,A.ay,"",4294538006,24,A.bh,A.a1,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.b7,o,2,"",0,0,"",u,D.eQ,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cv("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eg(A.bf,!1,4294967295,A.ay,"",4280640491,22,A.bh,A.a1,"",0.2,"preview_text",p,"","",0,!1,"",0,D.b7,o,2,"Element flies in",0,0,"",q.a.c,D.cI,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.V,p,A.a9,A.q,B.a([w,B.an(32,new C.SW(t,B.p(p,D.eIc,A.h,p,p,new B.o(s,p,B.H(A.be,A.r,1),r,p,p,A.n),p,p,p,p,A.iE,p,p,1/0),!0,1,new B.cv("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bQ(n,D.aSy,A.b6)}}
C.a5p.prototype={
S(){return new C.bfZ(null,null)}}
C.bfZ.prototype={
gaUT(){var w=this.a
if(w.e)w=D.ec6.q(0,w.c)||D.aH0.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaUT()){w=C.hI2(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bh(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bpb()},
B(d){var w,v=this,u=v.d
if(!v.gaUT()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e0q(v,u,A.o.J(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWh.prototype={
B(d){var w=null
return B.as(C.aYn(!0,w,!1,C.eg(A.L,!1,this.e.l(),A.ay,"",4280640491,this.f,A.bh,A.a1,"",0.2,"fx",w,"","",0,!1,"",0,D.b7,4280172719,2,"Aa",0,0,this.c,D.ca,D.cI,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bb2.prototype={
iE(d){return C.a08(this.b,new B.af(0,0,0+d.a,0+d.b).cD(-this.c))},
jg(d){return d.b!==this.b||d.c!==this.c}}
C.blM.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.af(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a08(g,h),e=a1.gef(),d=new C.eEs()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saw(D.aIu.aA(0,h))
a0.b4(f,w)
g=C.a08(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b8q.gt(0)
a0.b4(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saw(D.elz.aA(0,h))
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
g.saw(D.elx.aA(0,h))
a0.b4(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a08(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gt(0)
a0.b4(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bb.j(0.7).gt(0)
g.z=new B.hG(A.G,e*0.035)
a0.b4(f,g)
g=d.$1(e*0.016)
g.r=A.nT.gt(0)
a0.b4(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saw(D.els.aA(0,h))
a0.b4(f,w)
w=C.a08(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_5.gt(0)
a0.b4(w,v)
g=C.a08(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b1g.gt(0)
a0.b4(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saw(D.aIu.aA(0,h))
a0.b4(f,g)
for(g=B.zX(f),w=B.a([],x.X),g=new B.xO(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
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
m=w[q].a4c(p*n/o).a
l=D.cC7[A.o.J(n,4)]
$.a1()
p=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=l.gt(0)
k=p.L()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i.r=A.c.j(0.9).gt(0)
k=i.L()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.saw(D.elB.aA(0,h))
g.z=new B.hG(A.G,e*0.03)
a0.b4(f,g)
g=d.$1(e*0.018)
g.saw(D.ely.aA(0,h))
a0.b4(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a08(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n4.gt(0)
a0.b4(g,w)
break}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bmJ.prototype={
a5(d,e){d.Ev(C.a08(this.b,new B.af(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.gef()*0.05,!1)},
ao(d){return d.b!==this.b||d.c!==this.c}}
C.aI0.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aIw.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJP.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.a5I.prototype={}
C.M2.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aB4(B.a([],x.D),B.a([],w),B.a([],w),B.Q(v,u),B.Q(v,x.bo),B.Q(v,u),B.aY(v),null,null)},
gdQ(){return this.c},
gRJ(){return this.r},
gRK(){return this.w},
gK2(){return this.x}}
C.aB4.prototype={
Z(){var w,v=this
v.a0()
$.aS.c_$.push(v)
C.flv()
$.h1s=new C.egE(v)
w=B.bh(null,A.zo,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.GZ()},
bo(d){var w,v,u=this
u.bz(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MK(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.GZ()}},
iM(d){if(d===A.yy||d===A.qZ||d===A.qY||d===A.oB)this.rG()},
p(){var w,v,u,t=this
$.aS.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rG()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bF(0)
v.fU()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}t.bpp()},
ga8F(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gN4(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a98(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQo())return!1
return!0},
jG(){return this.a98(null)},
afB(){var w=this.c
if(w==null)return
w.F(x.q).f.P(D.ejR)},
pv(){if(!this.jG())return!1
this.afB()
return!0},
anq(d){var w,v,u,t,s,r=this
if(r.a98(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h0z(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yP(){return this.anq(null)},
GZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$GZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aod(k),$async$GZ)
case 3:j=e
w=4
return B.b(C.amU(k),$async$GZ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fzW(j,t.bTM())
w=t.ga8F()?5:7
break
case 5:r=t.gN4()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWw(r),$async$GZ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bk(s,new C.ed1())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bk(s,new C.ed2())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xA(m==null?"":m)!=null)continue
C.flH(n,s)
p=!0}t.n(new C.ed3(t,s))
if(p||s.length>J.aa(j))t.rG()
case 1:return B.h(u,v)}})
return B.i($async$GZ,v)},
bTM(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kf(w)&&w!==q}if(w)p.push(r)
return p},
cez(d){var w,v=this,u=d.w
if(!C.kf(u)||u==="hati_kiapo_uongozi")return
v.a7w(d)
w=A.d.be(v.d,new C.eeC(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.N(Date.now(),0,!1)}else A.d.cj(u,0,d.hs())
v.db=!1},
c8Z(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kf(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cez(t)
s=u.d
w=B.R(s)
v=w.k("cR<1,hR>")
s=B.z(new B.cR(new B.a3(s,new C.eeq(),w.k("a3<1>")),new C.eer(),v),v.k("E.E"))
return s},
MK(d){return this.bI5(d)},
rG(){return this.MK(null)},
bI5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c8Z()
w=3
return B.b(C.TS(d==null?t.a.c:d,s),$async$MK)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anq(r)?4:5
break
case 4:w=6
return B.b(C.a4X(r),$async$MK)
case 6:q=r.x
p=A.a.i(q==null?t.gN4():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.ecp())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.cj(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MK,v)},
oz(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kf(u.w))===!0?A.hG:A.lj
v.at=B.cW(w,new C.efK(v))},
aUn(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acD(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a8(v.ay)},
crs(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acD(w.e.hs(),w.f,w.r))
w.n(new C.egA(w,v.pop()))
w.oz()},
cdG(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acD(w.e.hs(),w.f,w.r))
w.n(new C.eeA(w,v.pop()))
w.oz()},
nA(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.egn(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.N(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.N(Date.now(),0,!1)},
Vs(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ws(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.R$=$.at()
u.O$=0}w.a8(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bF(0)
u.fU()}w.a8(0)},
IC(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.R(w)
u=v.k("cR<1,n>")
t=B.d8(new B.cR(new B.a3(w,new C.ego(),v.k("a3<1>")),new C.egp(),u),u.k("E.E"))
w=this.ch
v=B.a2(w).k("cu<1>")
v=B.z(new B.cu(w,v),v.k("E.E"))
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
if(n.b!==D.cI)continue
p=n.a
m=w.ci(0,p,new C.egq(n))
s.ci(0,p,new C.egr())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Gj(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bd(u.d,new C.ebO(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN4()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hs())}u.nA()
u.oz()},
afV(d,e){var w,v,u,t,s=this
if(s.jG())return
w=s.Vs(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kf(v.w))===!0
if(u){C.hI6(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hI7(t,w.d+w.f*0.5)}}s.Gj()
s.nA()
s.oz()
if(u&&s.c!=null)s.n(new C.egB())},
csw(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gj()
w.nA()
w.oz()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpy(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hGc(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bRe(v)
t=q.bRd(v)
s=B.b0(v.e)
r=v.f
return new C.js(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hjQ(o)},
bRe(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cI)s=t.w>=28||A.o.D(A.o.ak(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bRd(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cI&&t.w<28)return B.b0(t.Q)}return A.aI},
abV(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8F()){w.c.F(x.q).f.P(D.eiu)
return}w.a7w(d)
w.aVy(C.bxD(d))
return}if(C.c8E(v)){w.a7w(d)
w.aVy(d)
return}w.n(new C.edJ(w,d))},
ao_(){var w,v,u,t,s,r,q=this
q.a_E(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kf(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.ebM(q))
if(r&&q.c!=null){u.toString
q.Ib(u,s)}return}q.rG()
q.n(new C.ebN(q))},
aVx(d){this.a7w(d)
this.Yg(d,!0)},
a7w(d){if(!C.kf(d.w))return
C.flH(d,this.d)},
Yg(d,e){return this.c50(d,e)},
aVy(d){return this.Yg(d,!1)},
c50(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bxD(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN4():r)
t.dy.W(0,q.toLowerCase())
C.amV(t.a.c,q)}r=s}else r=d
w=C.c8E(r.w)?3:4
break
case 3:w=5
return B.b(t.a7x(r),$async$Yg)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bd(t.d,new C.ee5(l))
o=l.a.hs()
n=C.kf(o.w)&&C.hJh(o)
t.n(new C.ee6(t,o,p))
if(n){m=A.d.be(t.d,new C.ee7(o))
if(m>=0){t.d[m]=o.hs()
t.rG()}}if(!t.a98(l.a))t.Wy()
r=!1
if(t.c!=null)if(!t.a98(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anq(r)&&C.fhL(l.a)}else l=r
else l=r
if(l)t.c.F(x.q).f.P(D.ej2)
case 1:return B.h(u,v)}})
return B.i($async$Yg,v)},
a7x(d){return this.bGn(d)},
bGn(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.kY(r.c,A.xU),$async$a7x)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kD(!1,r,s.c,s.d,null,A.xU,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7x,v)},
nt(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c8E(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c82(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nt,v)},
abD(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.edI(),s,null,!0,!0,x.H),$async$abD)
case 3:if(t.c==null){w=1
break}t.ao_()
case 1:return B.h(u,v)}})
return B.i($async$abD,v)},
abC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.edF(),s,null,!0,!0,x.H),$async$abC)
case 3:if(t.c==null){w=1
break}t.n(new C.edG())
t.ao_()
case 1:return B.h(u,v)}})
return B.i($async$abC,v)},
Wy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Wy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$Wy)
case 3:r=e
if(B.kp(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.an("Bool","ngmy_marriage_hint_seen",!0),$async$Wy)
case 4:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.eh6)
case 1:return B.h(u,v)}})
return B.i($async$Wy,v)},
Ib(d,e){return this.ceZ(d,e)},
ceZ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ib=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.adR(s,t.gD6(),t.gD5(),!0,e,t.d),$async$Ib)
case 9:w=4
break
case 6:w=10
return B.b(C.adS(s,t.gD6(),t.gD5(),!0,e,t.d),$async$Ib)
case 10:w=4
break
case 7:w=11
return B.b(C.adT(s,t.gD6(),t.gD5(),!0,e,t.d),$async$Ib)
case 11:w=4
break
case 8:w=12
return B.b(C.adU(s,t.gD6(),t.gD5(),!0,e,t.d),$async$Ib)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ib,v)},
bSK(){var w,v,u,t,s=this
if(!s.ga8F()){s.c.F(x.q).f.P(D.ehj)
return}w=s.gN4()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.adQ(u,t,v,new C.ecY(s),new C.ecZ(s),w)},
abW(){var w=0,v=B.j(x.H),u=this,t,s
var $async$abW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(A.dw,new C.edP(u),s,!0,!0,!1,A.l3,!1,!1,x.N),$async$abW)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.adU(s,u.gD6(),u.gD5(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.adR(s,u.gD6(),u.gD5(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.adS(s,u.gD6(),u.gD5(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.adT(s,u.gD6(),u.gD5(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bSK()
return B.h(null,v)}})
return B.i($async$abW,v)},
c48(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aUn()
w=C.cx()
v=C.Am(t,t,t,t,D.B0,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.edQ(u,v))},
a6Y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a6Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hNz(s),$async$a6Y)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e7(q.r,new C.ebQ())
t.cX(new C.ebR(t,p,q,r))
s=t.c.F(x.q).f
o=r.r.length
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a6Y,v)},
adU(d,e,f,g){var w=null,v=g?A.du:A.bO,u=B.H(g?A.be:A.ct,A.r,1)
return B.hJ(B.aJ(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Yf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pv()){w=1
break}s=t.jj()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.R(r).k("a3<1>")
p=B.z(new B.a3(r,new C.ee0(),q),q.k("E.E"))}o=s!=null&&s.b===D.l2?B.a([s],x.u):p
if(o.length===0){t.c.F(x.q).f.P(D.ejd)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.ee1(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yf)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yf,v)},
acc(){return this.c5_()},
c5_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hNl(s,t.f+1,o),$async$acc)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kl(s,B.R(s).c)
p.a=A.d.be(o.r,new C.ee3(q))
t.cX(new C.ee4(p,t,o,q,r))
t.c.F(x.q).f.P(D.ejC)
case 1:return B.h(u,v)}})
return B.i($async$acc,v)},
acj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()||!t.yP()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.R(r).k("a3<1>")
p=B.z(new B.a3(r,new C.eel(),q),q.k("E.E"))
if(p.length===0){t.c.F(x.q).f.P(D.egS)
w=1
break}o=new B.I(p,new C.eem(),B.R(p).k("I<1,P>")).fs(0,new C.een())
r=B.Q(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.bb(l,A.aY,A.aL),$.at()))}q=t.c
q.toString
w=3
return B.b(B.c1(A.K,new C.eeo(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acj)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.at()
q.O$=0}if(t.c!=null)t.n(new C.eep())
case 1:return B.h(u,v)}})
return B.i($async$acj,v)},
abZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$abZ=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.h2x(s,new C.D6(r,q,p,o==null?"":o)),$async$abZ)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cX(new C.edR(m,n))
s=t.c.F(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aeg(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abZ,v)},
a7q(){return this.bFK()},
bFK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hNy(s,t.f+1,l),$async$a7q)
case 3:r=e
q=$.fDk
$.fDk=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cX(new C.ec6())
t.c.F(x.q).f.P(D.egK)
w=1
break}if(!q){s=r.CW
s=C.h1q(l,s==null?"":s,!1)}else s=!1
if(s){t.cX(new C.ec7(t,l,r))
t.c.F(x.q).f.P(D.ek5)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kl(s,B.R(s).c)
s=l.r
m.a=A.d.be(s,new C.ec8(p))
o=s.length
t.cX(new C.ec9(m,t,l,p,r))
n=s.length-o
s=t.c.F(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7q,v)},
aLD(d,e){if(e){this.acM()
return}this.c48(d,!1)},
bBy(){return this.aLD(null,!1)},
acM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.bV,new C.eev(t),r,!0,!0,!0,A.ol,!1,!1,x.N),$async$acM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.eew(t,C.hGb(s).oM()))
case 1:return B.h(u,v)}})
return B.i($async$acM,v)},
cX(d){var w=this
if(w.pv())return
w.Gj()
w.aUn()
w.n(d)
w.IC()
w.nA()
w.oz()},
a5v(){this.cX(new C.eaL(this,D.m4))},
aN_(){var w=this.gdk()
if(w==null)return
this.cX(new C.ec4(this,w))},
aMd(){var w=this.e
if(w==null||w.r.length<=1)return
this.cX(new C.ec2(this))},
aYm(d,e){if(this.e==null||d===e)return
this.cX(new C.eeE(this,d,e))},
Mi(d){return this.bDv(d)},
bDv(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN4():s)
w=5
return B.b(C.amT(t.a.c,r),$async$Mi)
case 5:t.dy.G(0,r.toLowerCase())
case 4:s=d.a
C.aof(s)
w=6
return B.b(C.aYr(t.a.c,s),$async$Mi)
case 6:if(t.c==null){w=1
break}t.n(new C.ebZ(t,d))
w=7
return B.b(t.rG(),$async$Mi)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mi,v)},
ceW(d,e){var w=this
if(d.z){w.afB()
return}w.n(new C.eeD(w,d,e))
w.oz()},
jj(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Ux(d){return this.ch.ci(0,d.a,new C.ebP(d))},
apN(d){return this.CW.ci(0,d.a,new C.ecq())},
a_E(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Vs(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aS.ae$.d.c
if(u!=null)u.ja()},
b0C(){return this.a_E(!0)},
a_C(d){var w,v,u=this
if(u.pv())return
if(!u.yP())return
w=u.Vs(d)
if(w==null||w.b!==D.cI)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Ux(w).saR(0,"")}u.n(new C.egl(u,d))
$.aS.x1$.push(new C.egm(u,d,w))},
b1c(d){var w=this
if(d.b===D.cI&&!w.jG()&&w.yP()){w.a_C(d.a)
return}w.avK(d.a)},
avK(d){var w,v,u,t,s,r=this
if(r.jG())return
w=r.r
if(w!=null&&w!==d){v=r.Vs(w)
if(v!=null&&v.b===D.cI){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.efL(r,s,d))
if(s||d==null){t=$.aS.ae$.d.c
if(t!=null)t.ja()}},
aHY(){this.cX(new C.eaM(this))},
oj(d){return this.bsY(d)},
bsY(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$oj)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eaJ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oj,v)},
TJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F3(78,1920),$async$TJ)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.eaz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TJ,v)},
TD(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(S.Bv(t.a.c),$async$TD)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gah(s)){t.c.F(x.q).f.P(D.ekF)
w=1
break}w=r.gH(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c1(null,new C.eaw(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TD)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cX(new C.eax(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TD,v)},
aoO(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bd(w.gdk().z,new C.ec0(v))){w.c.F(x.q).f.P(D.ejG)
return}if(w.w===v)w.a_E(!0)
w.cX(new C.ec1(w,v))},
bzP(){var w=this.jj(),v=w==null
if((v?null:w.b)===D.eQ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cI)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aIF(d,e){var w=this,v=w.jj(),u=w.gdk(),t=w.e
if(t==null)return
w.cX(new C.ebd(w,v,d,e,t,u))},
buv(d){return this.aIF(d,null)},
a5N(d){return this.buD(d)},
buD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2Q.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nt(),$async$a5N)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jj()
if(s!=null){r=s.b
if(r===D.cI)t.buv(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eQ){r=d.c
t.aIF(r.j(0.88),r)}w=1
break}t.cX(new C.ebi(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a5N,v)},
a5M(d){return this.buB(d)},
buB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5M=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.nt(),$async$a5M)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.ebg(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5M,v)},
bul(d){var w=this.gdk()
if(w==null)return
this.cX(new C.ebc(this,w,d))},
Yk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hNu(r),$async$Yk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nA()
t.n(new C.eef(t,s))
w=4
return B.b(t.rG(),$async$Yk)
case 4:if(t.c!=null)t.abV(s)
case 1:return B.h(u,v)}})
return B.i($async$Yk,v)},
a7i(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_E(!0)
t.nA()
s=t.c
s.toString
w=3
return B.b(C.Pf(s,q),$async$a7i)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7i,v)},
Ci(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ci=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nA()
t=4
w=7
return B.b(C.aMs(m),$async$Ci)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aLT(o,q,m.b),$async$Ci)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a5(l)
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ci,v)},
DU(d,e){return this.cqY(d,e)},
cqY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$DU=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pv()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_E(!0)
t.nA()
s=h.a=t.e.hs()}else{r=A.d.be(t.d,new C.egu(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hH6(q?"":s)
o=C.h0m(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.R(s).k("a3<1>")
n=B.z(new B.a3(s,new C.egv(h,p),q),q.k("E.E"))
s=h.a.b
w=3
return B.b(t.ckx(n.length,o,s),$async$DU)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hH0(h.a)
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
return B.b(t.ckw(n,o),$async$DU)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kU(t.d,new C.egw(s))
s=h.a.b
w=11
return B.b(t.cku(k.b,s),$async$DU)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hH5(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.F(x.q).f.P(D.ekQ)
w=1
break}w=12
return B.b(t.ckv(j.a,s,o,j.c),$async$DU)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.egx(h,t,i))
t.oz()
case 1:return B.h(u,v)}})
return B.i($async$DU,v)},
ckx(d,e,f){var w=this.c
w.toString
return B.c1(A.K,new C.eg0(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ckw(d,e){var w=this.c
w.toString
return B.c1(A.K,new C.eg_(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cku(d,e){var w=this.c
w.toString
return B.c1(A.K,new C.efU(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ckv(d,e,f,g){var w=this.c
w.toString
return B.c1(A.K,new C.efW(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a8J(){var w=null
return B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a8K(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.a9(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aE,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.C(B.u(B.a([B.d(g,u,u,u,u,u,u,D.euB,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a1,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQa(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.Z,w,w,w,A.QY,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aQd(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aE,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.C(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mS,w,w,w),A.dd,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a1,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A1,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ecU(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bQc(d,e,f,g,h,i){return this.aQd(d,e,f,!1,g,h,i)},
ar5(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.bw,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VD,w,w,w)},
aQc(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.c9,w,new B.b5(B.m(14),A.W),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.mR,w,w,w),new C.ecT(d,f),v)},
aQb(d,e){return this.aQc(d,e,null)},
Is(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Is=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oA(l,s.c,s.d),$async$Is)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aO("=",l.length)+"\n\n"
q=new B.f4(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.hY(l,new C.efM());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7u(l.charCodeAt(0)==0?l:l,r.b),$async$Is)
case 4:l=t.a
w=5
return B.b(B.oz(l.c,l.d),$async$Is)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
GF(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oA(q,s.c,s.d),$async$GF)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7u(A.Q.aj(r.ad(),null),r.b+".json"),$async$GF)
case 4:q=t.a
w=5
return B.b(B.oz(q.c,q.d),$async$GF)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GF,v)},
b0q(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nA()
u.rG()
w=u.c
w.toString
v=B.eO(new C.egk(u,t),!1,null,x.z)
B.a7(w,!1).ct(v)},
FT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$FT)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.flU(),$async$FT)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hJR(s.a)
q=t.c
q.toString
w=5
return B.b(B.c1(A.aG,new C.eaE(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FT)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cX(new C.eaF(t,s))
w=1
break}if(p==="split")t.cX(new C.eaG(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FT,v)},
LG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}w=3
return B.b(t.nt(),$async$LG)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMr(s,null,null),$async$LG)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eaK(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LG,v)},
aY9(d){var w=this.e
if(w==null||!C.kf(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aJW(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMr(s,t==null?null:B.b0(t),u)},
a5t(d){return this.bsP(d)},
bsP(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yP()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.el4)
w=1
break}w=3
return B.b(t.aJW(),$async$a5t)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eaB(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5t,v)},
adx(d){return this.cdJ(d)},
cdJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yP()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ekd)
w=1
break}w=3
return B.b(t.aJW(),$async$adx)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eeB(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adx,v)},
c0T(){var w,v,u=this
if(u.jG())return
w=new B.N(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cq3()}},
cq3(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cX(new C.egs(this,r,(A.o.ar(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bQx(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cX(new C.ecX(this,r,u.d))},
bUY(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kf(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fiv(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kA&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bUZ(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kf(w.w))!==!0)return!0
if(!this.yP())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fiv(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kA&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LO(d){return this.bv1(d)},
bv1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yP()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ej3)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.amX(p),$async$LO)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.F(x.q).f.P(D.ejI)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a4X(r)
w=1
break}t.n(new C.ebm(t,d,o))
t.nA()
$.aS.x1$.push(new C.ebn(t))
case 1:return B.h(u,v)}})
return B.i($async$LO,v)},
TH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$TH)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byf(),$async$TH)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.eay(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TH,v)},
Mw(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Mw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$Mw)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jj()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.flL(r),$async$Mw)
case 4:q=e
if(q==null){w=1
break}t.cX(new C.eco(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Mw,v)},
iz(d){this.cX(new C.eaH(this,d))},
pk(d){return this.bue(d)},
bue(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pv()){w=1
break}m=!D.aH2.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nt(),$async$pk)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FT()
w=1
break A
case"sign_paper":t.LG()
w=1
break A
case"hd_photo":t.TH()
w=1
break A
case"sharpen":t.Mw()
w=1
break A
case"print":t.Ci()
w=1
break A
case"rotate":s=t.jj()
if(s!=null)t.cX(new C.eaQ(s))
w=1
break A
case"text_box":t.aHY()
w=1
break A
case"picture":t.TJ()
w=1
break A
case"present":t.b0q()
w=1
break A
case"new_slide":t.a5v()
w=1
break A
case"export_json":t.GF()
w=1
break A
case"outline_share":t.Is()
w=1
break A
case"flashcard_tool":t.uj(D.FW)
w=1
break A
case"quiz_tool":t.uj(D.FX)
w=1
break A
case"worksheet_tool":t.uj(D.FY)
w=1
break A
case"duplicate_el":s=t.jj()
if(s==null){w=1
break A}t.cX(new C.eaR(t,s))
w=1
break A
case"delete_el":t.aoO()
w=1
break A
case"bring_fwd":s=t.jj()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.eaS(t,s))
w=1
break A
case"send_back":s=t.jj()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.eb2(t,s))
w=1
break A
case"align_left":s=t.jj()
if(s!=null)t.cX(new C.eb5(s))
w=1
break A
case"align_center":s=t.jj()
if(s!=null)t.cX(new C.eb6(s))
w=1
break A
case"align_right":s=t.jj()
if(s!=null)t.cX(new C.eb7(s))
w=1
break A
case"grayscale":case"brighten":t.Mw()
w=1
break A
case"flip_h":s=t.jj()
if(s!=null)t.cX(new C.eb8(s))
w=1
break A
case"flip_v":s=t.jj()
if(s!=null)t.cX(new C.eb9(s))
w=1
break A
case"rectangle":t.oj(D.b7)
w=1
break A
case"circle":t.oj(D.ex)
w=1
break A
case"triangle":t.oj(D.jk)
w=1
break A
case"arrow":t.oj(D.B2)
w=1
break A
case"line":case"divider":t.oj(D.fb)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.hY(q,new C.eba()),o=0;p.C();){n=A.a.fl(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a3(n,new C.ebb(),B.R(n).k("a3<1>")).gH(0)}t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cx()
t.iz(C.iI(A.L,!1,t.gpy().d.l(),A.ay,40,A.bh,A.u,0.18,q,"Presentation Title",0,D.m5,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cx()
t.iz(C.iI(A.L,!1,t.gpy().e.l(),A.ay,22,A.bh,A.a1,0.12,q,"Subtitle goes here",0,D.d7,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iz(C.iI(A.bf,!0,4279310375,A.ay,20,A.bh,A.a1,0.5,C.cx(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tf,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iz(C.iI(A.bf,!1,4279310375,A.ay,20,A.bh,A.a1,0.5,C.cx(),"1. First item\n2. Second item\n3. Third item",0,D.te,0.8,0.1,0.22))
w=1
break A
case"quote":t.iz(C.iI(A.L,!1,4279310375,A.ay,24,A.cF,A.a1,0.25,C.cx(),'"Insert meaningful quote here."',0,D.d7,0.8,0.1,0.3))
w=1
break A
case"citation":t.iz(C.iI(A.bf,!1,4284773515,A.ay,14,A.bh,A.a1,0.1,C.cx(),"Author, Title (Year). Publisher.",0,D.tf,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iz(C.iI(A.dO,!1,4279310375,A.ay,14,A.bh,A.a1,0.08,C.cx(),C.byh(),0,D.d7,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iz(C.iI(A.dO,!1,4279310375,A.ay,13,A.bh,A.a1,0.06,C.cx(),"Page "+(t.f+1),0,D.d7,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cX(new C.eaT(t))
w=1
break A
case"footer_bar":t.cX(new C.eaU(t))
w=1
break A
case"highlight":t.cX(new C.eaV(t))
w=1
break A
case"redact":t.cX(new C.eaW(t))
w=1
break A
case"callout":t.cX(new C.eaX(t))
w=1
break A
case"checkboxes":t.iz(C.iI(A.bf,!1,4279310375,A.ay,20,A.bh,A.a1,0.45,C.cx(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.d7,0.8,0.1,0.2))
w=1
break A
case"table":t.iz(C.iI(A.bf,!1,4279310375,A.ay,16,A.bh,A.a1,0.55,C.cx(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.d7,0.8,0.1,0.18))
w=1
break A
case"memo":t.cX(new C.eaY(t))
w=1
break A
case"letter":t.iz(C.iI(A.bf,!1,4279179050,A.ay,17,A.bh,A.a1,0.82,C.cx(),C.byh()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iz(C.iI(A.bf,!1,4279310375,A.ay,22,A.bh,A.O,0.76,C.cx(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tf,0.8,0.1,0.12))
w=1
break A
case"toc":t.iz(C.iI(A.bf,!1,4279310375,A.ay,18,A.bh,A.a1,0.76,C.cx(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.d7,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iz(C.iI(A.bf,!1,4279310375,A.ay,16,A.bh,A.a1,0.08,C.cx(),"Signature: _________________________",0,D.d7,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iz(C.iI(A.bf,!1,4279310375,A.ay,16,A.bh,A.a1,0.08,C.cx(),"Initials: ______",0,D.d7,0.3,0.65,0.78))
w=1
break A
case"approved":t.iz(C.iI(A.L,!1,4278556265,A.ay,28,A.bh,A.u,0.12,C.cx(),"APPROVED",0,D.m5,0.32,0.62,0.08))
w=1
break A
case"draft":t.iz(C.iI(A.L,!1,4292617766,A.ay,28,A.bh,A.u,0.12,C.cx(),"DRAFT",0,D.d7,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iz(C.iI(A.L,!1,871318596,A.ay,36,A.bh,A.u,0.12,C.cx(),"CONFIDENTIAL",0,D.d7,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cX(new C.eaZ(t))
w=1
break A
case"progress":t.cX(new C.eb_(t))
w=1
break A
case"stars":t.iz(C.iI(A.L,!1,4279310375,A.ay,36,A.bh,A.a1,0.12,C.cx(),"\u2605\u2605\u2605\u2605\u2606",0,D.pl,0.8,0.1,0.4))
w=1
break A
case"equation":t.iz(C.iI(A.L,!1,4279310375,A.ay,32,A.bh,A.O,0.14,C.cx(),"y = mx + b",0,D.d7,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iz(C.iI(A.L,!1,4279310375,A.ay,18,A.bh,A.a1,0.2,C.cx(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.te,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cX(new C.eb0(t))
w=1
break A
case"compare":t.cX(new C.eb1(t))
w=1
break A
case"link_text":t.iz(C.iI(A.bf,!1,4280640491,A.m9,16,A.bh,A.a1,0.1,C.cx(),"https://example.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"phone":t.iz(C.iI(A.bf,!1,4279310375,A.ay,18,A.bh,A.a1,0.1,C.cx(),"(555) 123-4567",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"email":t.iz(C.iI(A.bf,!1,4280640491,A.ay,18,A.bh,A.a1,0.1,C.cx(),"name@email.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cX(new C.eb3(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cX(new C.eb4(t,r))
w=1
break A
case"invoice":t.iz(C.iI(A.bf,!1,4279179050,A.ay,16,A.bh,A.a1,0.84,C.cx(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"resume":t.iz(C.iI(A.bf,!1,4279179050,A.ay,17,A.bh,A.a1,0.84,C.cx(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iz(C.iI(A.bf,!1,4279310375,A.ay,16,A.bh,A.a1,0.88,C.cx(),"MEETING MINUTES\nDate: "+C.byh()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iz(C.iI(A.bf,!1,4279310375,A.ay,17,A.bh,A.a1,0.88,C.cx(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iz(C.iI(A.bf,!1,4279310375,A.ay,15,A.bh,A.a1,0.8,C.cx(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.d7,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pk,v)},
ck_(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ec3.q(0,this.z)},
cjZ(d){if(this.jj()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b20(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ca,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hJG(d)
s=o?12:18
r=o?A.I:A.cG
if(o)if(e)q=f
else q=g?A.al:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.L(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Lp,A.h,p,p,D.Cg,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.B(A.hb,B.aJ(p,new B.am(A.V,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bG_(d){var w,v=null,u=this.jj()
if(u==null)return A.bF
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bq],x.p)
A.d.v(w,new B.I(D.NQ,new C.ecn(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uj(d){return this.bsX(d)},
bsX(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aGZ.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nt(),$async$uj)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eaI(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ebb
w=h.e
if(w==null)return h.bwD()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.K(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bN,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.en,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bV:D.b0Q
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQo()}else j=!1
if(j)k.push(new C.a5q(h.a.c,!1,h.e.gb4c(),h.gc0Q(),g))
else if(s&&h.e!=null&&!h.jG()&&C.c8E(h.e.w)){j=h.a
k.push(new C.a5q(j.c,j.d,g,h.gc1Z(),g))}if(s)k.push(h.bFW(w,t,r))
if(s&&h.jG()){w=t?A.fm:A.jT
j=B.m(14)
i=B.H(A.bg.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bwU,A.ab,B.C(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zv,A.iD,g,g,g))}w=!n
if(w&&!h.jG())k.push(h.bVU(t,r))
if(w&&h.jG())k.push(h.cqZ(t))
if(r&&h.jj()!=null&&w&&!h.jG())k.push(h.bVQ(t))
j=B.a([],l)
if(q&&w)j.push(new B.a4(132,g,h.b_X(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a4(g,72,h.b_X(t,!1),g))
i.push(B.C(new B.bE(A.b4,g,g,h.bxT(v,t,!s||p),g),1))
if(h.ck_(r)&&u&&s&&!h.jG())i.push(h.c0E(v,t,r))
j.push(B.C(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jG()&&h.cjZ(!1))j.push(new B.a4(240,g,h.bIt(t),g))
k.push(B.C(B.A(j,A.ah,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a4(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bVR(t))
return B.cg(g,m,B.br(!1,new B.am(A.V,g,A.a9,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bwD(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.K(p).ax.a===A.H
p=w?A.bV:A.bO
v=r.a.e
u=r.c_U(A.bg,A.p0,new C.ebq(r),r.gc45(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.C(r.aHH(A.bg,A.hH,"Blank Presentation",new C.ebr(r)),1),A.aw,B.C(r.aHH(A.aW,A.x3,"Class Template",new C.ebs(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.m8,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.aa],t)
t=r.d
if(t.length===0)u.push(r.btI(w))
else{t=new B.hv(t,B.R(t).k("hv<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ebt(r,w),x.l))}return B.cg(q,p,B.br(!1,B.cQ(u,q,new B.L(18,12,18,v),q,q,A.af,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bEk(){this.n(new C.ec3(this))
var w=this.c
w.toString
if(B.aG(w,A.bN,x.w).w.a.a<900){w=$.aS.ae$.d.c
if(w!=null)w.ja()}},
acd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jj()==null){w=1
break}s=t.c
s.toString
s=B.K(s)
r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.eee(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acd)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acd,v)},
zL(d,e){return this.ckk(d,e)},
ckk(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zL=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hM(D.Tq,!0,"Dismiss",j,new C.efN(),new C.efO(d,e),A.i9,!0,x.N),$async$zL)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afB()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQo()){r.afB()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aMs(d),$async$zL)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aLT(j,q,d.b),$async$zL)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a5(i)
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
return B.b(r.DU(d,!1),$async$zL)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hM(D.Tq,!0,"Dismiss",j,new C.efP(),new C.efQ(d),A.X,!0,x.y),$async$zL)
case 20:if(g===!0)r.Mi(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adh("Rename presentation",d.b),$async$zL)
case 24:l=g
if(l!=null)r.ceW(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.m(0,"id",C.cx())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.efR(r,k))
r.oz()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zL,v)},
aWa(d,e){var w=null
return B.bF(!1,D.eRu,w,w,!0,w,w,e,w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bg,w,w,w,A.as,w,A.ll,w,w,w,w,w,A.k2,w,w))},
btI(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eaN(this,d),null)},
bCr(d,e,f){var w=new B.I(B.a(d.split(" \u2022 "),x.s),new C.ebS(),x.dv).bZ(0,new C.ebT()),v=B.z(w,w.$ti.k("E.E"))
return new B.B(G.ac7,this.aIf(v,e,new C.ebU(),f),null)},
aIf(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ez)
t=e.j(g?0.14:0.1)
s=new B.b3(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.al:A.bA,n,n,n,10),A.v4],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cD(A.aZ,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.bx(s,s,s,s),n,n,A.n),n,n,n,n,A.nl,n,n,n))
A.d.v(l,u)}return B.eY(A.a_,B.A(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
btG(d,e,f){return this.aIf(d,e,null,f)},
bCt(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cUw
else if(v==="hati_kuhoweya")w=D.cHX
else{if(v==="hati_kiapo_uongozi")v=D.cvV
else v=C.kf(v)?D.cCr:A.Nt
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.ebX(this,f,d,e,w),null)},
bVR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jj()
if(i==null||i.b!==D.cI)return A.bF
w=k.Ux(i)
v=k.apN(i)
u=A.x.j(0.55)
t=x.p
s=B.br(!1,new B.B(A.zy,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b9,B.bF(!1,D.eNu,j,j,!0,j,j,new C.edn(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.H(A.bg.j(0.45),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.C(new B.B(A.h0,B.bQ(new B.B(A.eF,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bg,j,j,j,j,2,D.bCD,A.z,!0,j,!0,j,!0,v,A.ad,j,j,j,j,j,A.v6,j,j,j,j,j,j,!1,"\u2022",j,new C.edo(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yb,A.am,j,A.Qv,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.b6),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.C(B.cf(B.A(B.a([k.t2(G.Kq,j,new C.edp(k,i),d),k.t2(G.WD,j,new C.edq(k,i),d),k.t2(I.agb,j,new C.edr(k,i),d),k.t2(I.Xn,j,new C.eds(k,i),d),k.t2(k.btE(i.as),j,new C.edt(k,i),d),k.t2(D.ahj,j,new C.edu(k,i),d),k.t2(D.ahi,j,new C.edv(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aZ),1)
m=A.k.M(i.w)
return B.bU(0,B.aD(!1,A.X,!0,j,B.u(B.a([s,r,new B.B(D.bet,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d4],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ln,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bVQ(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jj()
if(m==null)return A.bF
w=m.b
v=w===D.cI
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.a9(0,A.G,A.x.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.aZC(A.jf,"Edit",new C.ed8(o,m),d,!0))
if(w===D.l2)p.push(o.aZC(A.Ld,"Shape & ring",new C.ed9(o),d,!0))
p.push(o.t2(At.Ev,"Format",new C.eda(o),d))
if(v)A.d.v(p,B.a([o.t2(G.Kq,n,new C.edb(o,m),d),o.t2(D.ahj,n,new C.edc(o,m),d),o.t2(D.ahi,n,new C.edd(o,m),d)],q))
p.push(A.b9)
p.push(o.cif(A.e4,n,o.gaMb(),d,!0))
p.push(o.t2(A.hs,"Done",new C.ede(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a8(A.a_,A.a7,A.w,t,n,n),A.n),n,n,n,A.Dp,A.ln,n,n,n)},
btE(d){switch(d.a){case 2:return D.Xk
case 1:case 5:return D.Xm
default:return D.Xl}},
bWG(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dO
default:return A.bf}},
avJ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aH
else if(h)w=A.c
else{v=g?A.al:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.EL:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ez,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.B(A.qb,B.aD(!1,A.X,!0,n,B.aH(!1,v,!1,B.er(new B.B(new B.L(q,8,q,8),B.A(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t2(d,e,f,g){return this.avJ(d,e,f,g,!1,!1)},
aZC(d,e,f,g,h){return this.avJ(d,e,f,g,h,!1)},
cif(d,e,f,g,h){return this.avJ(d,e,f,g,!1,h)},
bFW(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mj],m)
w=B.H(e?A.aI:A.pS,A.r,1.2)
v=B.a([new B.a9(0,A.G,A.bg.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a03(A.eq,"Back",p.gbzz(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.Z,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=""+d.r.length
r=p.f
q=x.p
s=B.a([u,A.d4,B.C(B.u(B.a([t,B.d(s+" slides \xb7 "+(r+1)+" of "+s,o,o,o,o,o,o,B.l(o,o,e?A.c2:A.ak,o,o,o,o,o,o,o,o,10,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.F,o,A.e,A.R,0,A.p),1)],q)
if(!p.jG()){u=p.a03(A.uB,"Undo",p.ax.length===0?o:p.gcrr(),e)
A.d.v(s,B.a([u,p.a03(D.bqt,"Redo",p.ay.length===0?o:p.gcdF(),e)],q))}s.push(p.a03(A.wK,"PDF",new C.ecg(p),e))
s.push(p.a03(A.hf,"Download as video",new C.ech(p),e))
if(!p.jG())s.push(B.AA(o,o,B.V(A.no,e?A.al:A.bA,o,o,o,o),new C.eci(p),A.J,new C.ecj(p),A.ag,"More",x.N))
s.push(A.d4)
s.push(B.aD(!1,A.X,!0,o,B.aH(!1,B.m(14),!0,B.er(D.dMC,o,new B.o(o,o,o,B.m(14),o,K.EL,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gawx(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.A(s,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),o,o,o,D.beo,D.bjp,o,o,o)},
cqZ(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.H(d?A.d3:A.aJ,A.r,1)
return B.p(v,B.cf(B.A(B.a([w.ii(A.rW,"Print",new C.egy(w),d),w.ii(A.wK,"Download PDF",new C.egz(w),d),w.ii(A.p7,"Present",w.gawx(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aZ),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zv,G.adR,v,v,v)},
a03(d,e,f,g){var w,v=null
if(f==null)w=g?A.be:A.dt
else w=g?A.al:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bVU(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.H(d?A.d3:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.I(p,new C.edy(r,d),t),t.k("ai.E"))
t.push(new B.B(V.adx,new B.fh(new C.edz(r),q),q))
A.d.v(t,w?B.a([new B.B(R.ug,r.adU(A.kV,"Ending celebration",r.gc4i(),d),q),new B.B(R.ug,r.adU(A.Ld,"Logo ring & frame",r.gc4Y(),d),q)],x.p):A.fS)
A.d.v(t,w?B.a([new B.B(R.ug,r.adU(A.np,"Look and feel",r.gc4Z(),d),q),new B.B(R.ug,r.adU(A.pb,"Edit this slide's text",r.gc5u(),d),q)],x.p):A.fS)
t.push(new B.B(R.ug,B.hJ(B.aJ(q,B.p(q,D.eaG,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.a9(0,A.G,O.kM.j(0.4),A.J,10)],x.V),D.ajf,A.n),q,34,q,q,A.id,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.edA(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cf(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bjR,q,q,A.aZ)
s=e?8:10
return B.p(q,B.u(B.a([t,B.cf(r.cg1(d),A.q,q,A.z,q,new B.L(8,2,8,s),q,q,A.aZ)],x.p),A.ah,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zv,q,q,q,q)},
cg1(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cP9[v]
u.a=null
s=u.a=t.b
w.push(e.l8(e.chG(s),t.a,new C.eeX(u,e),a3,D.aGZ.q(0,s)))}w.push(e.ii(A.kv,"Notes Slide",new C.eeY(e),a3))
w.push(e.l8(A.Em,"Quiz",new C.eeZ(e),a3,!0))
w.push(e.l8(L.E1,"Worksheet",new C.ef9(e),a3,!0))
w.push(e.l8(A.Ac,"Flashcard",new C.efk(e),a3,!0))
w.push(e.l8(A.Le,"Lab Report",new C.efv(e),a3,!0))
w.push(e.l8(A.wQ,"Rubric",new C.efC(e),a3,!0))
w.push(e.l8(A.o5,"Minutes",new C.efD(e),a3,!0))
w.push(e.l8(A.p5,"Syllabus",new C.efE(e),a3,!0))
w.push(e.l8(A.Eu,"Timeline",new C.efF(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cQi[v]
w.push(e.l8(r.b,r.c,new C.efG(e,r),a3,!D.aH2.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ii(A.Af,a0,e.gaHX(),a3),e.ii(A.rT,"Picture",new C.ef_(e),a3),e.ii(A.x0,"Bio link",new C.ef0(e),a3),e.ii(A.XV,"Table",new C.ef1(e),a3),e.ii(A.Lj,"Sticky",new C.ef2(e),a3),e.ii(A.us,"Divider",new C.ef3(e),a3),e.ii(A.Ew,"Header",new C.ef4(e),a3),e.l8(A0.E9,"Rectangle",new C.ef5(e),a3,!0),e.l8(A.rM,"Circle",new C.ef6(e),a3,!0),e.l8(A.Xb,"Triangle",new C.ef7(e),a3,!0),e.l8(A.jD,"Arrow",new C.ef8(e),a3,!0),e.l8(D.boW,"Parallelogram",new C.efa(e),a3,!0),e.l8(D.bru,"Hexagon",new C.efb(e),a3,!0),e.l8(A.us,"Line",new C.efc(e),a3,!0),e.l8(A.wK,"PDF",new C.efd(e),a3,!0),e.l8(O.Y1,"Signature",new C.efe(e),a3,!0),e.ii(A_.A7,"Quote",new C.eff(e),a3),e.ii(D.WL,a1,new C.efg(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bN,x.w).w
u=x.p
t=B.A(B.a([e.aIL("Wide 16:9",D.B0,a3),e.aIL("Short 9:16",D.nx,a3),new B.B(A.hb,B.mZ(D.btB,d,D.eK5,d,new C.efh(e),d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bzO("This slide",!e.Q,a3,new C.efi(e)),A.bq,e.aKW("All slides",e.Q,a3,new C.efj(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bzP()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a1,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.I(D.ZO,new C.efl(e),n),n.k("ai.E"))
n=B.cf(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cR4[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dt:A.be,1.5,A.r,-1)
l.push(new B.B(A.hb,B.aJ(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.efm(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.cf(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bzw()
g=B.R(h).k("I<1,B>")
h=B.z(new B.I(h,new C.efn(e,a3),g),g.k("ai.E"))
return new B.a4(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.cf(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ),A.ar,e.bSR(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jj()
w=e.c
w.toString
w=B.aG(w,A.bN,x.w).w
u=new C.eeW(e)
t=new C.efH(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NQ,f.dy,new C.efo(e,u,f),A.aW)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NQ,q,new C.efp(e,u),A.bg))
return new B.a4(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ii(A.kv,w,new C.efq(e),a3),e.ii(A.rW,"Print deck",new C.efr(e),a3),e.l8(D.afk,"Export JSON",new C.efs(e),a3,!0),e.ii(A.fv,"Duplicate Slide",e.gaMZ(),a3),e.ii(A.e4,a2,e.gaMc(),a3),e.clC(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jj()
w=x.p
u=B.a([e.ii(D.WL,a1,new C.eft(e),a3),e.ii(A.fv,"Duplicate",e.gaMZ(),a3),e.ii(A.e4,a2,e.gaMc(),a3),e.ii(A.p7,"Present",e.gawx(),a3),e.ii(A.Ae,a0,e.gaHX(),a3),e.ii(A.Ej,"Fit Text",new C.efu(e),a3),e.ii(A.wK,"Download PDF",new C.efw(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ii(A.k_,"Transfer",new C.efx(e),a3))
if(f!=null){w=B.a([A.ab,e.ii(G.Kq,"Bold",new C.efy(e,f),a3),e.ii(G.WD,"Italic",new C.efz(e,f),a3),e.ii(G.aeW,"Underline",new C.efA(e,f),a3),e.ii(A9.Kr,"Bullets",new C.efB(e,f),a3),e.bIc(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bG_(a3))
w.push(e.ii(D.bnB,"Delete",e.gaMb(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aIL(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nx
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4p,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d4,D.bsN],v))
return new B.B(A.hb,B.kv(t,t,t,B.A(u,A.m,t,A.e,A.R,0,t,t),t,new C.ebl(this,w,e),s===e,A.bg.j(0.25),t,t,t),t)},
clC(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.be:A.ct,A.r,1)
u=B.m(8)
t=B.V(A.E_,d?A.aB:A.ak,q,q,q,14)
s=B.aF(q,q,q,q,D.aig,q,q,q,new C.eg3(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.ai6,q,q,q,new C.eg4(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.K2,A.my,q,q,q)},
chG(d){switch(d.a){case 6:return A.Ac
case 7:return A.Em
case 8:return L.E1
case 4:return A.Ew
default:return A.kv}},
bIc(d,e){var w=null,v=B.H(e?A.be:A.ct,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aig,w,w,w,new C.ect(this,d),w,w,w,w,w,A.c6),s=A.k.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.ai6,w,w,w,new C.ecu(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wu,A.my,w,w,w)},
bSR(d){var w=null
return B.AA(B.C0(B.V(Ac.WO,d?A.al:A.bA,w,w,w,16),w,w,D.ePd,w,w,w),w,w,new C.ed0(),A.J,this.gbuk(),A.ch,"Slide layout",x.fO)},
l8(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.H(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dD:A.bg,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Lp,A.h,w,w,D.Cg,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.B(A.hb,B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.er(new B.B(A.h0,B.u(B.a([new B.am(A.V,w,A.a9,A.h,q,w),A.dd,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bA,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ii(d,e,f,g){return this.l8(d,e,f,g,!1)},
b_X(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.af:A.aZ
v=B.hF(t,new C.egf(u,s,e,d),s.r.length,A.ch,t,w,new C.egg(e),!1)
s=d?A.aG:A.bO
w=B.a([],x.p)
if(e&&!u.jG())w.push(new B.B(A.ch,B.G4(E.ait,new C.egh(u),B.ok(t,A.bg,t,t,t,t,t,t,t,t,t,t,E.aHF,t,t,t,t),"Add slide"),t))
w.push(B.C(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
bxT(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nx?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.B(new B.L(u,u,u,u),new B.bE(A.b4,v,v,new B.fT(w,B.aJ(v,B.cj(new C.ebK(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ebL(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
bxV(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kf(a9.w))===!0,b1=b0&&C.fiv(b3),b2=b0&&b3.b===D.kA&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jG())v=!b0||a7.bUZ(b3)
else v=!1
if(!a7.jG())u=!b0||a7.bUY(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bg
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fG1(b3))o=a8
else if(p&&!a7.jG())o=a7.gc0S()
else o=a7.jG()?a8:new C.eby(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jB
i=w&&C.fG1(b3)&&a7.yP()?new C.ebz(a7,b3):a8
h=v&&b3.b===D.cI?new C.ebA(a7,b3):a8
g=u?new C.ebB(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bs
else e=q?A.bQ:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bQ.j(0.08)
else a0=b3.b===D.kA?A.K:a8
if(b1){a1=a7.jG()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bQ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bN,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yP()
a3=b3.b===D.cI
a4=a3?a7.Ux(b3):a8
a5=a3?a7.apN(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bN,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ebC(a7,b3):a8
a3=v&&a3?new C.ebD(a7,b3):a8
a6=C.aYn(q,a4,a1,b3,a5,a2,a3,new C.ebE(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.bvz,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebF(a7,b3,b4,b5),a8,a8,new C.ebG(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jG()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bwd,A.h,a8,a8,new B.o(A.fK,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbQw(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jG()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bxL,A.h,a8,a8,new B.o(A.bQ,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebH(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cI)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bN,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.as(B.aJ(a8,B.p(a8,D.eXd,A.h,a8,a8,new B.o(A.bg,a8,a8,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.ks,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebI(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.ez(A.B,f,new B.am(A.V,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cv("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aKW(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bg.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bg:A.bG,A.r,1)
if(e)t=A.bg
else t=f?A.aB:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d4,B.p(r,D.Lp,A.h,r,r,D.Cg,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.A(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h_,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bzO(d,e,f,g){return this.aKW(d,e,f,g,!1)},
c0E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.at()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.bb(v,A.aY,A.aL),$.at()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aN
t=f?A.vz:l
if(f)s=new B.c2(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tn,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.al:A.bA,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b9,m.aWa(e,new C.edC(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.C(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b2(4,B.m(10),A.d9),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.edD(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ah,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.L(12,w,12,v),l,l,l)},
aOe(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jj()
if(a2==null)return A.bF
w=new C.ecH(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dJ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b9,a0.aWa(a3,a0.gbEj())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.eKw,B.C(B.mt(a1,a1,a1,u,0.05,new C.ecI(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.eVP,B.C(B.mt(a1,a1,a1,t,0.05,new C.ecJ(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cI
if(m)o.push(B.A(B.a([D.eEV,B.C(B.mt(a1,a1,a1,96,10,new C.ecK(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l2
if(l||n===D.kA||n===D.P5)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.ePR,B.C(B.mt(a1,a1,a1,s,0,new C.ecL(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.eWZ,B.C(B.mt(a1,a1,a1,r,0,new C.ecM(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Au[j]
i.a=null
g=h.a
i.a=g
k.push(B.kv(a1,a1,a1,new B.w(h.b,a1,A.py,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ecN(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.cd(A.bH,k,A.by,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ap[j]
f.a=null
g=e.a
f.a=g
h.push(B.kv(a1,a1,a1,new B.w(e.b,a1,A.py,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ecO(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.cd(A.bH,h,A.by,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.I(v,new C.ecP(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.cd(A.bH,l,A.by,6,6),A.aa,B.fRH(new C.ecQ(w,a2),D.c7m,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eQ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.I(v,new C.ecR(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.cd(A.bH,m,A.by,0,6)],p))}o.push(A.aa)
o.push(B.dj(D.bxx,D.eRE,new C.ecS(a0,a5),B.bk(A.bR,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cQ(o,a1,a1,q,a1,A.af,a5)
if(a5)return d
q=a3?A.d3:A.c
p=a4?A.vz:a1
if(a4)o=new B.c2(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tn,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Dq,a1,a1,a1)},
bIt(d){return this.aOe(d,!1,!1,null)},
c_U(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.ecV(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.evs,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.C(B.u(B.a([w,A.bw,A.dd,r.btG(D.cA6,d,B.K(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dO(B.hJ(B.aD(!1,A.X,!0,q,B.aH(!1,q,!0,B.er(D.efx,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.a9(0,A.G,A.bQ.j(0.4),A.e6,8)],p),D.ajk,A.a6),q,q,q),A.cD,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.K(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aYZ,D.aZk],v):B.a([A.c,A.jT],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.a9(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a8(A.ax,A.aE,A.w,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aHH(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eau(this,g,d,e,f),null)},
adh(d,e){return this.cc3(d,e)},
cc3(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.at()
q=new B.ao(new B.bb(e,A.aY,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.eez(d,q),p,null,!0,!0,x.N),$async$adh)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adh,v)},
O5(d){var w=d.bP()
return""+B.bB(w)+"/"+B.bN(w)+"/"+B.bw(w)}}
C.acD.prototype={}
C.avK.prototype={
S(){return new C.b8I(null,null)}}
C.b8I.prototype={
gcnI(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bB(u)+"/"+B.bN(u)+"/"+B.bw(u),s=v.w
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
w=B.bh(u,D.bcW,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bnj()},
Hu(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.aq(0,new B.hD(w,v,A.co).aq(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.B(D.bii,B.c4(new B.h3(B.a([u,w],x.dS)),new C.cUD(this),v),v),v,v,v)}}
C.b8W.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.as(new B.B(D.biz,B.aD(!1,A.X,!0,w,B.p(w,B.bu(B.m(22),B.u(B.a([new B.B(D.bhM,B.u(B.a([B.p(w,D.bwj,A.h,w,w,new B.o(A.aH.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aS,D.eTy,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.ewy,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bc_,B.A(B.a([B.C(B.bF(!1,D.eIW,w,w,!0,w,w,new C.cUZ(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.mu,w,A.nB,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bj,w,w,w,48,w,w,w,w,w,1),B.C(B.bF(!1,D.eNN,w,w,!0,w,w,new C.cV_(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.aH,w,w,w,w,w,A.mu,w,A.nB,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.Sq,new B.o(A.aG,w,u,v,D.cAp,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.I1.prototype={
S(){return new C.b8H()}}
C.b8H.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.a9(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.h,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.d5(B.aJ(o,B.vX(B.de(o,B.A(B.a([r,A.aw,new B.dp(1,A.ck,B.d(q,o,2,A.Z,o,o,o,B.l(o,o,l?A.fM:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b5,A.R,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.rD,o,o,1/0),A.co,A.jb,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cUy(p,d),new C.cUz(p),new C.cUA(p),new C.cUB(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.NG.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.eF,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aE,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.C(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mS,v,v,v),A.bw,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.em,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.Yj.prototype={
S(){return new C.aB7(D.d7,null,null)}}
C.aB7.prototype={
gWE(){var w,v=this,u=v.w
if(u===$){w=B.bh(null,D.bcw,null,1,null,v)
v.w!==$&&B.bH()
v.w=w
u=w}return u},
b0l(d){if(!this.a.c.ay)return
this.x=d
this.gWE().ic(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.asH(D.elR)
C.hGH()
v.Pu()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWE().p()
v=w.z
if(v!=null)v.a9(0)
C.asH(D.elS)
C.hGK()
w.bpq()},
cqq(){B.j6()
this.n(new C.ehe())
var w=this.c.F(x.q).f
w.a26()
if($.bgk)w.P(D.eiK)},
Pu(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cW(B.dB(0,0,0,0,0,A.o.D(C.fPS(u,w),1,120)),new C.eh4(v))},
cq5(){var w,v=this
v.n(new C.ehd(v))
if(v.r)v.Pu()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQ3(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ckq(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.eh5(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cW(A.o0,new C.eh6(w))},
asy(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.eh0(u))
u.Pu()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQ3()){u.ckq()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.eh1(u,A.o.J(w+1,s)))
u.b0l(w)
u.Pu()}},
caK(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.eh2(v))
v.Pu()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.eh3(v,w,t))
v.b0l(w)
v.Pu()}},
clO(d){var w,v=this,u=v.e
if(u===D.ca){u=v.d
u===$&&B.c()
return new B.n8(d,new B.cv(u,x.ac))}w=v.clP(u)
u=v.d
u===$&&B.c()
return B.ql(new B.n8(d,new B.cv(u,x.ac)),w,new C.ehb(),A.b8,A.b8,new C.ehc(v))},
clP(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bcS
case 16:return A.kQ
case 18:return A.ng
default:return A.oW}},
clN(d,e,f){var w,v,u,t=null,s=B.cF(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.to,A.J,w),w.k("bc<bC.T>")),t,!0)
case 3:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pk,A.J,w),w.k("bc<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.im,A.J,w),w.k("bc<bC.T>")),t,!0)
case 5:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.tm,A.J,w),w.k("bc<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(0.82,1,w),w.k("bc<bC.T>")))
case 7:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(1.18,1,w),w.k("bc<bC.T>")))
case 8:return B.c4(s,new C.eh7(s),e)
case 9:return B.c4(s,new C.eh8(s),e)
case 10:return B.c4(s,new C.eh9(s),e)
case 11:return B.c4(s,new C.eha(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iF(A.B,e,t,new B.bc(s,new B.bm(1.03,1,w),w.k("bc<bC.T>"))),t)
case 14:w=s.gt(0)
v=x.K
return B.jy(B.jc(e,new B.bc(s,new B.bm(A.to,A.J,v),v.k("bc<bC.T>")),t,!0),A.q,new C.bnd(w,t))
case 15:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pk,A.J,w),w.k("bc<bC.T>")),t,!0)
case 19:w=B.df()
w.md((1-s.gt(0))*2)
v=s.gt(0)
u=s.gt(0)
w.jd(v,u,v,1)
return B.fp(A.B,B.d5(e,s.gt(0)),t,w,!0)
case 20:return B.ez(A.B,(1-s.gt(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jy(new C.alu(B.c4(n.gWE(),new C.ehf(n,v,w),m),m),A.q,m)}else{t=B.qV(new C.H0(w,!0,!1,m))
l=B.b0(w.e)
u=n.clO(B.ec(B.jy(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.fPS(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ov,m,m,m),A.bq,D.byx],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fE,m,m,m)
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
l.push(B.bU(0,new C.LB(new C.D6(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nx?0.5625:1.7777777777777777
l.push(B.as(new B.fT(r,B.jy(B.tG(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgk){r=B.G4(A.kZ,new C.ehg(d),B.ok(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.A(B.a([r,A.ab,B.G4(B.V(n.r?Af.wZ:A.j_,m,m,m,m,m),n.gcq4(),B.ok(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hi,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fE,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c5,B.p(A.kH,$.bgk?A.bF:s,A.h,m,m,m,m,64,m,m,D.bdE,m,m,150),A.z,!1,m,n.gcqp(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cg(m,A.x,B.aJ(m,new B.am(A.V,m,A.aX,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ehh(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.I8.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.B(E.adk,this.c,w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSh,w,w,w,w,w,w,w,w)}}
C.bnd.prototype={
iE(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jg(d){return d.b!==this.b}}
C.bdx.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPb
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.az:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.de(r,B.as(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uI,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hG,r,64,r,r,r,r,64)
return B.aJ(r,new B.a4(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.Z,r,r,r,B.l(r,r,v?A.az:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bdw.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d1h.h(0,p)
if(o==null)o=D.cQo
p=p==="none"
w=p?q:new B.a8(A.a_,A.a7,A.w,o,q,q)
p=p?A.cR.j(0.25):q
v=r.e
u=v?B.H(A.az,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahu:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ef,q,q,52)
return B.aJ(q,new B.a4(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.Z,q,q,q,B.l(q,q,v?A.az:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aGJ.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aIK.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.bsQ.prototype={}
C.aIL.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aYq.prototype={}
C.TT.prototype={
S(){return new C.aB5()},
baC(d){return this.e.$1(d)}}
C.aB5.prototype={
gaZI(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7H(){var w,v
if(this.d==="all")return B.bi(this.a.d,!0,x.I)
w=this.gaZI()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaJB(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gaZI()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb_W(){return A.d.cI(this.ga7H(),0,new C.egL())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.P5()},
P5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZ0(s.c,s.f),$async$P5)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.egH(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
Hw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7H()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.flH(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oA(o,q.c,q.f),$async$Hw)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eO(new C.egK(t,p),!1,null,x.H)
w=4
return B.b(B.a7(o,!1).ct(q),$async$Hw)
case 4:q=t.a
w=5
return B.b(B.oz(q.c,q.f),$async$Hw)
case 5:w=6
return B.b(t.P5(),$async$Hw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hw,v)},
Ps(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ps=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hl(o,D.dEx,!0,"NgmySlidesTransferScan",x.N),$async$Ps)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.egI(t))
w=4
return B.b(C.aeG(s),$async$Ps)
case 4:r=e
t.n(new C.egJ(t))
o=J.a6(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.F(x.q).f.P(D.ehD)
w=1
break}w=5
return B.b(t.a.baC(r),$async$Ps)
case 5:q=t.c
if(q==null){w=1
break}B.a7(q,!1).K(null)
q=t.c.F(x.q).f
p=o.gH(r)
o=o.gH(r)===1?"":"s"
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ps,v)},
Hv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7H()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oA(s,r.c,r.f),$async$Hv)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.flW(null,A.d.gI(n),s,t.a.f)}else q=C.flW(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.ES(q,"ngmy_slides_"+p,!1),$async$Hv)
case 4:o=e
s=t.a
w=5
return B.b(B.oz(s.c,s.f),$async$Hv)
case 5:w=6
return B.b(t.P5(),$async$Hv)
case 6:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Hv,v)},
a0e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.egM(t))
w=3
return B.b(C.by0(),$async$a0e)
case 3:s=e
t.n(new C.egN(t))
if(s==null||J.ch(s)){w=1
break}w=4
return B.b(t.a.baC(s),$async$a0e)
case 4:r=t.c
if(r==null){w=1
break}B.a7(r,!1).K(null)
r=t.c.F(x.q).f
q=J.a6(s)
p=q.gH(s)
q=q.gH(s)===1?"":"s"
r.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0e,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.dc:A.bO,k=o.ga7H().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.B,0.5,A.w,n,0,B.a([A.bg.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.cu,m?A.al:A.ak,n,n,n,n),n,n,n,new C.egQ(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.C(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.y7],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.a9(0,A.G,A.bg.j(0.35),A.eI,24)],x.V)
u=B.an(n,B.V(A.p0,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bz0,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.C(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.blX],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hJ(B.aJ(A.c5,D.efz,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc5F(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.V,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.Yw,A.n),n,n,n,n,E.Vq,n,n,1/0),A.dW,o.atu(m,"What to transfer"),A.aa,B.A(B.a([B.C(o.aSc(A.p7,m,new C.egR(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.C(o.aSc(D.boP,m,new C.egS(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d1,o.atu(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c1,n,n,n))}else A.d.v(v,new B.I(u,new C.egT(o,m),B.R(u).k("I<1,r>")))
A.d.v(w,v)}w.push(A.m8)
w.push(o.atu(m,"Transfer options"))
w.push(A.aa)
w.push(B.A(B.a([B.C(o.amB(A.b3,k,!0,A.j0,m,o.r,o.gc_Y(),"Scan on another device","Show QR"),1),A.aw,B.C(o.aHI(A.j7,!0,A.iF,m,o.gchg(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.A(B.a([B.C(o.bse(A.aR,k,A.hf,m,o.r,o.gc_V(),"Download .json","Backup file"),1),A.aw,B.C(o.aHI(A.b_,!0,Ap.x6,m,o.gcsH(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bg.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bg.j(0.28),A.r,1)
s=B.V(A.kW,A.bg.j(0.9),n,n,n,18)
r=o.gaJB()
q=o.gb_W()
p=o.gb_W()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.A(B.a([s,A.aw,B.C(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.al:A.bA,n,n,n,n,n,n,n,n,12,n,n,A.a1,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.B(Ab.K3,i,n),B.C(B.cQ(w,n,D.bgY,n,n,A.af,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.SJ,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cg(n,l,new B.am(A.V,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acq(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hMM(s,t.d,t.e),$async$acq)
case 2:return B.h(null,v)}})
return B.i($async$acq,v)},
atu(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bg,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSc(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bg
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.a9(0,A.G,A.bg.j(0.2),A.cv,14)],x.V):s
u=A.bg.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bg,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.er(new B.B(A.bC,B.u(B.a([t,A.T,u,A.bw,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bCs(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bg
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bz9,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a_,A.a7,A.w,B.a([A.bg,A.bg.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.Z,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.C(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rM
if(p)r=A.bg
else r=e?A.be:A.dt
return new B.B(A.cK,B.aD(!1,A.X,!0,q,B.aH(!1,o,!0,B.p(q,B.A(B.a([v,A.bd,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.egG(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
amB(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qd,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ai0,A.h,s,s,D.aS4,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d5(B.aD(!1,A.X,!0,s,B.aH(!1,p,!0,B.er(new B.B(E.V4,B.u(B.a([new B.am(A.V,s,A.a9,A.h,u,s),A.aa,v,A.bw,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aHI(d,e,f,g,h,i,j){return this.amB(d,e,!1,f,g,!1,h,i,j)},
bse(d,e,f,g,h,i,j,k){return this.amB(d,e,!1,f,g,h,i,j,k)}}
C.TU.prototype={
S(){return new C.bgj()}}
C.bgj.prototype={
Z(){this.a0()
this.abi()},
abi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.flW(null,A.d.gI(m),k,r.a.f):C.flW(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kf(A.d.gI(n).w))C.flH(A.d.gI(r.a.d),D.cOz)
n=r.a
m=n.c
n=C.hJW(n.d)
w=7
return B.b(C.flV(p,C.hK0(r.a.d),n,m,q),$async$abi)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.egU(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.egV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abi,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.K(d).ax.a===A.H,h=i?A.dc:A.bO,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.egW())
v=B.aF(j,j,j,j,B.V(A.eq,i?A.al:A.ak,j,j,j,18),j,j,j,new C.egX(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.C(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.y7],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.Yw,A.n),j,j,j,j,E.Vq,j,j,1/0)
q=B.m(24)
s=B.H(A.b3.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3J,A.L,j,j))
else if(k.d==null)r.push(D.dMd)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.a9(0,A.G,A.az.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eJn,A.ar,B.aJ(j,B.p(j,B.A(B.a([D.bAF,A.aw,B.d(m,j,j,j,j,j,j,D.ewV,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bEu,A.n),j,j,j,j,Y.ad6,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.egY(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eNl,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pi(j,j,!1,l,j,!0,!0,j,!1,D.b9A),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.iq,A.L,j,j))
return B.cg(j,h,B.br(!0,B.u(B.a([new B.B(Ab.K3,v,j),B.C(B.cf(B.u(B.a([t,A.aS,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bGd,A.n),j,j,j,j,A.rH,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adp,j,j,A.af),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aB2.prototype={
S(){return new C.aB3(new B.ao(A.aq,$.at()),B.k5(!0,null,!0,!0,null,null,!1))}}
C.aB3.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.eao(w))
$.aS.x1$.push(new C.eap(w))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
aUp(){var w,v=this.c
v.toString
w=C.xA(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a7(v,!1).K(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.en,x.w).w,i=B.m(28),h=B.H(A.bg.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.a9(0,A.G,A.bg.j(0.28),A.tl,36),D.a74],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bwm,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.aa,D.eGP,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a1,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aSt,k,k,k,k,A.wt,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge_()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b3(14,14)
if(q)n=A.bg
else n=r?A.bg.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.a9(0,A.G,A.bg.j(0.28),A.J,12)],g):k
t.push(new B.bG(1,A.bp,B.de(A.B,new B.w(p,k,D.eqW,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.c2(m,m,m,m),new B.bx(o,o,o,o),n,k,A.n),A.hG,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.GP)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bU(0,B.d5(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bDm,A.z,!0,k,!0,k,!1,v,A.ad,k,k,B.a([new B.uJ(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.CC(5,k),new C.bqq()],x.aS),k,k,A.aIS,k,5,k,1,k,k,!1,"\u2022",k,new C.eak(l),k,new C.eal(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lz,k,k,k,k),0),0,0,0)],a1)
d=C.xA(w.a.a.toUpperCase())==null?k:l.gc_Z()
return B.as(new B.B(new B.L(24,24,24,24+j.f.d),B.aD(!1,A.X,!0,k,new B.d3(A8.I6,B.p(k,B.bu(e,B.u(B.a([a0,new B.B(D.bhr,B.u(B.a([new B.am(A.V,k,A.a9,A.q,g,k),A.T,D.eFj,A.bv,new B.a4(1/0,50,B.bJ(D.eUn,d,B.bk(A.bg,A.bj,A.ak,k,A.c,k,k,k,new B.b5(B.m(16),A.W),k,k,k)),k),A.ar,B.bF(!1,A.mU,k,k,!0,k,k,new C.eam(a2),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.bqq.prototype={
nU(d,e){var w=e.a.toUpperCase()
return e.cyD(B.h1(A.bn,w.length),w)}}
C.aog.prototype={
S(){return new C.aB6(B.y7(A.Jn,A.n1,A.t3))}}
C.aB6.prototype={
p(){this.d.p()
this.a2()},
aUo(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.ir(w,d)},
a7A(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fu1(s),$async$a7A)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aUo("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7A,v)},
c_X(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.hJZ(w[u])
if(t!=null){this.aUo(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uF,s,s,s,t.gbGu(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aF(s,s,s,s,B.V(q?A.rR:Ag.KW,s,s,s,s,s),s,s,s,new C.eh_(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.eVw,s,s,s,1,s,!0)
r=B.y6(t.d,A.bM,t.gc_W())
w=B.m(28)
w=B.as(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bg,A.r,3),w,B.a([new B.a9(2,A.G,A.bg.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cg(p,A.x,new B.am(A.V,s,A.aX,A.q,B.a([r,w,B.an(32,B.p(s,D.eKk,A.h,s,s,new B.o(v,s,B.H(A.bg.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iE,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bqC.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([B.p(w,D.buA,A.h,w,w,D.aSd,w,56,w,w,w,w,w,56),A.aS,D.eVd,A.ar,new B.k0(this.c,new C.eRt(),w,w,x.cI),A.aS,new B.k0(this.d,new C.eRu(),w,w,x.cl),A.aa,D.eVa],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A8.I6,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.Vx,D.bi3,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5q.prototype={
S(){return new C.bg3(A.bt)},
gd5(){return this.c}}
C.bg3.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XI()
w.d=B.dE(A.fZ,new C.e1h(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XI(){return this.cdM()},
cdM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e1f(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.N(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c8F(p.c),$async$XI)
case 6:r=e
q.a=r==null?A.bt:r
case 4:if(t.c==null){w=1
break}t.n(new C.e1g(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XI,v)},
bIk(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ak(u,6e7)%60
v=A.o.ak(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.ak(w,6e7)<30&&A.o.ak(w,36e8)<999?A.aH:A.bQ
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.V(A.E_,v,r,r,r,20),A.aw,B.C(B.d("Marriage document session \xb7 "+s.bIk(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bej,A.iD,r,r,1/0)}}
C.a6h.prototype={
mG(){var w,v,u,t=this
t.wd()
w=t.cx
v=t.c
w.bk0(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.po(B.D(["/S",D.dOR,"/URI",new B.qS(B.Uq(w.as),A.tq,!0)],x.N,u),u))}}
C.a6i.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_3.prototype={
brl(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dN9],x.di)
this.w!==$&&B.aO()
this.w=w},
gcBN(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jA(w,new C.caS(),B.a2(w).k("jA<ck.E,G>")).fs(0,new C.caT())},
ayF(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h_(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rM(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.iX(d.a,d.b))
s.m(0,"/Border",B.rM(D.bI7))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fP(t.gcBN()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.po(w,x.Y))}}
C.caU.prototype={}
C.a0F.prototype={}
C.afu.prototype={}
C.aNC.prototype={
fM(d){var w,v,u,t,s,r,q=this,p=null
q.kJ(d)
q.Kn(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.ba_(w)
u=x.N
t=x.Y
s=new C.caU(q.d.a,"/Link",w,p,p,p,p,p,B.Q(u,t))
s.brl(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.po(B.D(["/Type",D.dOP],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6h(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.G(0,r)
v.dx.push(r)}}
C.atF.prototype={}
C.aP6.prototype={
fM(d){var w,v,u,t,s=this
s.kJ(d)
w=s.b
if(w!=null){v=B.df()
u=s.a
v.dX(u.a,u.b,0,1)
u=d.b
u.hQ()
t=s.a
t.toString
u.Jx(t)
u.QE(0)
u.oc(0,v)
w.fM(d)
u.mJ(0)}}}
var z=a.updateTypes(["au<~>()","~(ll)","S(hR)","~()","S(ew)","S(nS)","S(ll)","~(hR)","S(ew,ew)","I8(Z)","S(nh)","S(kV)","au<S>()","G(G,hR)","a0<n,@>(hR)","al<yr>()","n(nh)","S(a5H)","n(ll)","n(v5)","S(Df)","G(hR,hR)","n(ew)","r(ew)","cE(ew)","r(hm)","~(hm)","ew(tV,P,P,P,P,G{fx:n,key:n,rotation:P})","G(nS,nS)","S(yr)","S(n,al<yr>)","a0<n,@>(nS)","nh()","Wp(Z)","ew(n,P,P,P,P,P{align:pu,anim:hm,bullets:S,color:G?,delay:G,fx:n,key:n,style:G_,weight:pN})","ZC(Z)","ew(n,P,P,P,P{anim:hm,delay:G,fx:n,key:n})","au<~>(nS)","S(m0)","Wn(Z)","Za(Z)","Z9(Z)","Nw(Z)","Xz(Z)","ew(tV,P,P,P,P,G,n,n{anim:hm,delay:G,rotation:P,stroke:G,strokeWidth:P})","ew(n,P,P,P,P,P,n,n,G)","ew(P,P,n,G{size:P})","r(qH,P,P)","kV()","nS(a0<@,@>)","~(tN)","Df()","f5(ew)","r(iL)","X7(Z)","~(D6)","Xs(Z)","G(ew,ew)","ew(ew)","a0<n,@>(ew)","ew(a0<@,@>)","ll(ll)","a0<n,@>(ll)","ll(a0<@,@>)","S(js)","js()","n(hR)","~(al<nS>)","N(al<hR>)","N(hR)","al<hR>(n?)","aac(Z,G)","~(S(ew,ew))","aaQ(Z)","act(Z,G)","x(ll,S)","TH(Z)","aaT(Z)","YG(Z)","~(m4)","hR(hR)","P(ew)","al<DB>()","Yj(Z)","hR()","S(lH)","au<~>(al<hR>)","r(bq<G,hR>)","B(js)","B(Df)","au<~>(hm,~())","r(al<hm>,hm?,~(hm),x)","ew(n,P,P,P,P,P,G{align:pu,style:G_,weight:pN})","al<jb<m4>>(Z)","jb<m4>(m4)","hR(a0<@,@>)","TT(Z)","ew(n,P,G)","TU(Z)","r(hR)","~(lC)","H0(Z,ll,r?)","G(a6i)","au<al<a0<n,@>>?>()","n(n)","au<yp>({paper:n?,photo:dz?,request:n,template!lj})","au<a5z>({doc!yp,history:al<+(n,n)>,instruction!n,photo:dz?,template!lj})","aaN(Z)"])
C.cxX.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:72}
C.cxY.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:87}
C.cxZ.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gagU(s):16;--w.c}w.b=A.o.dN(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lU(v,t)
w.b=v-A.o.dN(q,t)
w.a=t
return q},
$S:87}
C.cy_.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bJq.prototype={
$1(d){return J.eP(A.dz.gaK(d),d.byteOffset,d.byteLength)},
$S:1655}
C.f9l.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.ix(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.ix(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.ix(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.ix(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1656}
C.bTx.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:26}
C.bTy.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bTA.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fol.prototype={
$1(d){return new C.ZC(this.a,this.b,C.hKR(),null)},
$S:z+35}
C.ePW.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eQ_.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.eQ0.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eQ1.prototype={
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
C.ePX.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.ePY.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.ePZ.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.ePR.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hj,w,w,w)
return B.ei(B.a([B.bF(!1,D.eIS,w,w,!0,w,w,new C.ePP(d),w,w),B.bF(!1,D.eI1,w,w,!0,w,w,new C.ePQ(d),w,w)],x.p),w,w,D.U2,v,w,w,w,w,D.eVO,w)},
$S:19}
C.ePP.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.ePQ.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.ePS.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ePT.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eQ5.prototype={
$0(){var w=this.a
return w.n(new C.eQ4(w,this.b))},
$S:0}
C.eQ4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePV.prototype={
$0(){var w=this.a
return w.n(new C.ePU(w,this.b,this.c))},
$S:0}
C.ePU.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.G(0,v)},
$S:0}
C.eQ2.prototype={
$0(){return this.a.ZK(this.b)},
$S:0}
C.eQ3.prototype={
$0(){return this.a.Nm(0,this.b)},
$S:0}
C.eQ8.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eQ9.prototype={
$0(){var w=this.a
return w.n(new C.eQ7(w,this.b))},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.I(w,new C.eQ6(),B.R(w).k("I<1,n>")))}},
$S:0}
C.eQ6.prototype={
$1(d){return d.a},
$S:z+66}
C.eX6.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Y(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fNf(w.b(t.h(0,"doc"))?B.Y(w.a(t.h(0,"doc")),v,u):A.cr)
t=t.h(0,"updatedAt")
u=B.bg(J.k(t==null?"":t))
return new C.nS(s,v,u==null?new B.N(Date.now(),0,!1):u)},
$S:z+49}
C.eX7.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fbw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbm())q=n===o.gbm()&&p.b>o.gcB()}if(q)v.m(0,s,t)}},
$S:z+67}
C.fbu.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fbv.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+28}
C.fnT.prototype={
$1(d){return d.ad()},
$S:z+31}
C.f91.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.foI.prototype={
$1(d){return new C.Wp(this.a,null)},
$S:z+33}
C.czi.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+38}
C.czk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.czn.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czo.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.czm())},
$S:11}
C.czm.prototype={
$0(){},
$S:0}
C.czp.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_B(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.be(s,new C.czl(r))
if(p<0)q.cj(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.aeP(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:313}
C.czl.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czq.prototype={
$1(d){},
$S:29}
C.czj.prototype={
$1(d){return new C.Wn(this.b,this.a.gcn3(),null)},
$S:z+39}
C.czr.prototype={
$1(d){return D.f0G},
$S:z+42}
C.cze.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.TO,A.r,1),t=x.p
return B.as(B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([new B.B(D.bhQ,B.u(B.a([B.p(w,D.btC,A.h,w,w,new B.o(A.aH.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aS,D.eHa,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.evZ,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.B(A.oY,B.A(B.a([B.C(B.dU(D.eNn,new C.czc(d),B.d9(w,w,w,w,w,w,w,w,w,E.mp,w,w,A.c9,w,new B.b5(B.m(14),A.W),D.aPB,w,w,w,w)),1),A.aw,B.C(B.bJ(D.eSO,new C.czd(d),B.bk(A.bR,w,w,w,w,w,A.c9,w,new B.b5(B.m(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vD,new B.o(D.a8s,w,u,v,D.cEt,w,A.n),w,w,w,K.Vx,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1657}
C.czc.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.czd.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.czf.prototype={
$0(){return J.mY(this.a.d,new C.czb(this.b))},
$S:0}
C.czb.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cza.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.TO,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.byp,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajf,A.n),t,44,t,t,t,t,t,44),A.bd,B.C(B.u(B.a([B.d(this.a.b.a,t,1,A.Z,t,t,t,D.aKp,t,t,t),A.bw,D.eSK],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.cXP[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auw(u[1],u[2],u[3],new C.cz8(v,d),!1,t))}q.push(A.ar)
q.push(D.bc2)
q.push(A.ar)
q.push(new C.auw(A.e4,"Delete book","Remove it from this device",new C.cz9(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8s,t,r,s,t,t,A.n),t,t,t,A.rB,E.Va,t,t,t),!0,!1,A.ag,!0,!0)},
$S:33}
C.cz8.prototype={
$0(){var w=this.a.a
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.cz9.prototype={
$0(){B.a7(this.a,!1).K("delete")
return null},
$S:0}
C.czh.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.a9(0,A.G,A.x.j(0.45),A.aAV,12)],x.V)
return B.dO(B.ez(A.B,e,B.p(w,B.bu(B.m(4),new B.a4(62,95.81818181818181,B.eY(A.B,F.all(d),A.h,A.dp),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+47}
C.czg.prototype={
$0(){return this.a.bWw()},
$S:0}
C.cz7.prototype={
$0(){return this.a.aTi(0,this.b)},
$S:0}
C.cz6.prototype={
$0(){return this.a.BY(this.b)},
$S:0}
C.cz5.prototype={
$0(){return this.a.BY(this.b)},
$S:0}
C.czs.prototype={
$2(d,e){var w=this.a
return w.bvD(J.q(w.d,e))},
$S:42}
C.cyz.prototype={
$0(){var w=this.a
if(w.c!=null)w.zH()},
$S:0}
C.cyy.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aVP("Page "+(v.length+1),"",""))},
$S:0}
C.cyB.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cyJ.prototype={
$0(){},
$S:0}
C.cyK.prototype={
$1(d){var w=this.a,v=w.a,u=$.at()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cyC.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cM.gcq().aE(this.c)},
$S:0}
C.cyA.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyE.prototype={
$0(){return this.a.OD(this.b)},
$S:0}
C.cyF.prototype={
$0(){return this.a.OD(this.b)},
$S:0}
C.cyG.prototype={
$0(){var w=this.a
w.n(new C.cyD(this.b))
w.CL()},
$S:0}
C.cyD.prototype={
$0(){return this.a.c=""},
$S:0}
C.cyI.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.cyH(w,d))
w.CL()},
$S:z+50}
C.cyH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyP.prototype={
$2(d,e){if(d)this.a.zH()},
$S:115}
C.cyL.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zH(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.F(x.q).f.P(D.ek7)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cyM.prototype={
$0(){return this.a.aSj(this.b,-1)},
$S:0}
C.cyN.prototype={
$0(){return this.a.aSj(this.b,1)},
$S:0}
C.cyO.prototype={
$0(){return this.a.bXK(0,this.b)},
$S:0}
C.ffP.prototype={
$1(d){return C.fWX()},
$S:41}
C.ffQ.prototype={
$1(d){return null},
$S:29}
C.f0h.prototype={
$1(d){return null},
$S:29}
C.fgN.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:267}
C.fgM.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:242}
C.fgT.prototype={
$1(d){var w=this.a
return C.fFU(d)===w||C.h0i(d)===w},
$S:z+4}
C.f_l.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.c32.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffN.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.ffO.prototype={
$1(d){return C.fiv(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.faT.prototype={
$1(d){var w=null
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eNX,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,D.eIz,new C.faR(d),B.bk(A.bQ,w,w,w,A.x,w,A.c9,w,w,w,w,w)),A.T,B.ex(A.uE,D.eP7,new C.faS(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.ah,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faR.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.faS.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.faU.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,D.eFb,w,w,!0,w,w,new C.faP(d),w,w),B.bJ(D.eUR,new C.faQ(d),w)],x.p),w,w,w,D.eWD,w,w,w,w,D.eF5,w)},
$S:19}
C.faP.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.faQ.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dXj.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dXh.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dXi.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dXk.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dXl.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fgS.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.fgO.prototype={
$2$h$w(d,e){var w=null
return new B.bE(A.a_,w,w,B.G0(A.B,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1658}
C.fgQ.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.B,B.d(d,w,w,w,w,w,w,D.ex6,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:188}
C.fgR.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b5,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1659}
C.fgP.prototype={
$2$female$size(d,e){var w=null,v=d?D.aa_:this.a,u=B.H(A.hE,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.B,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8E,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1660}
C.fs7.prototype={
$1(d){return new C.aaN(this.a,this.b,null)},
$S:z+107}
C.dOI.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.b9T:A.IY,q=B.H(D.iS.j(0.25),A.r,1),p=B.as(B.p(t,t,A.h,t,t,new B.o(A.bQ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ai_,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.a9(0,A.G,D.iS.j(0.35),A.e6,10)],x.V),D.bGN,A.n),t,t,t,t,A.JF,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.B(H.Vm,B.u(B.a([p,A.aA,B.A(B.a([o,A.bd,B.C(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iS,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.ewq,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.C(B.ig(!0,t,e,A.z,D.aHV,new C.dOH(w,this.c),v,D.ad1,t,A.af,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mZ,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:122}
C.dOH.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aac(w,new C.dOG(this.b,w),null)},
$S:z+71}
C.dOG.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.faX.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.faY.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eR3,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faV(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.T,B.ex(A.nr,D.R6,new C.faW(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.ah,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faV.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.faW.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fb0.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fb1.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eG5,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faZ(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.T,B.ex(A.nr,D.R6,new C.fb_(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.ah,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faZ.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fb_.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fb4.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fb5.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eLT,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fb2(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.T,B.ex(A.nr,D.R6,new C.fb3(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.ah,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fb2.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fb3.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.ftm.prototype={
$1(d){return D.f3X},
$S:z+73}
C.e1k.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b37:A.IY,s=B.H(A.at.j(0.25),A.r,1),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.at.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bAB,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.a9(0,A.G,A.bQ.j(0.35),A.e6,10)],x.V),D.ajk,A.n),v,v,v,v,A.JF,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.B(H.Vm,B.u(B.a([r,A.aA,B.A(B.a([q,A.bd,B.C(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:X.IV,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bw,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eu5,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.C(B.ig(!0,v,e,A.z,D.aHV,new C.e1j(this.b),19,D.ad1,v,A.af,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mZ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.e1j.prototype={
$2(d,e){var w=D.O3[e]
return new C.act(w,new C.e1i(this.a,w),null)},
$S:z+74}
C.e1i.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fiz.prototype={
$0(){return B.fF_(C.hyN(this.a))},
$S:325}
C.fiy.prototype={
$0(){var w=C.fGb(this.a)
return"data:image/png;base64,"+A.cM.gcq().aE(w)},
$S:22}
C.eYA.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.iY(d,e),new B.iY(w,e+v),new B.iY(d+f*14,e),new B.iY(w,e-v)],x.J)
B.a_y(this.a,C.fr(4291404327),v)},
$S:628}
C.ftx.prototype={
$1(d){return new C.TH(this.a,null)},
$S:z+76}
C.e4x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4w())},
$S:27}
C.e4w.prototype={
$0(){},
$S:0}
C.e4y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4v(w,d))},
$S:1662}
C.e4v.prototype={
$0(){return this.a.x=J.f7(A.dz.gaK(this.b))},
$S:0}
C.e4z.prototype={
$1(d){},
$S:29}
C.e4d.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e4k.prototype={
$0(){var w=this.a
w.Q=!0
w.as="The editor is writing your newspaper\u2026"},
$S:0}
C.e4l.prototype={
$0(){var w=this.a
A.d.a8(w.ax)
w.z=this.b
w=w.at
A.d.a8(w)
w.push(D.dVx)},
$S:0}
C.e4m.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e4f.prototype={
$0(){var w=this.a
w.Q=!0
w.as="Working on it\u2026"
w.at.push(new B.T("you",this.b))
w.f.bG(0,A.c_)},
$S:0}
C.e4g.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ax.push(w.z)
w.z=v.b}this.a.at.push(new B.T("ai",v.a))},
$S:0}
C.e4h.prototype={
$0(){return this.a.at.push(new B.T("ai",B.t(this.b)))},
$S:0}
C.e4i.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e4j.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcU(v).Q
v.toString
w.lC(v,A.dU,A.ia)}},
$S:8}
C.e4e.prototype={
$0(){var w=this.a,v=w.z,u=C.fjc(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cxM(C.fjc(t))},
$S:0}
C.e4b.prototype={
$0(){var w=this.a
w.Q=!0
w.as="Making your picture\u2026"},
$S:0}
C.e4c.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e4q.prototype={
$0(){return B.a7(this.a,!1).oZ()},
$S:0}
C.e4r.prototype={
$0(){var w=this.a
return w.n(new C.e4p(w))},
$S:0}
C.e4p.prototype={
$0(){var w=this.a
return w.z=w.ax.pop()},
$S:0}
C.e4s.prototype={
$0(){var w=this.a
return w.n(new C.e4o(w,this.b))},
$S:0}
C.e4o.prototype={
$0(){var w=this.b.b
this.a.e.saR(0,w)
return w},
$S:0}
C.e4t.prototype={
$0(){var w=this.a
return w.n(new C.e4n(w,this.b))},
$S:0}
C.e4n.prototype={
$0(){var w=this.b
this.a.f.saR(0,w)
return w},
$S:0}
C.e4u.prototype={
$1(d){return this.a.Xw()},
$S:2}
C.e4a.prototype={
$0(){return this.a.c_j(this.b)},
$S:0}
C.c6H.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cJ(w.h(0,d))):null},
$S:464}
C.c6F.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c6G.prototype={
$1(d){return d.length!==0},
$S:3}
C.fia.prototype={
beQ(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bJp(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cuv($.to().jR(0,"assets/news_fonts/"+s))}w=2
return B.b(r.m9(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.beQ(d,e)},
$S:1663}
C.fgu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgw.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dA(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:81}
C.fgv.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.j0(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pv,A.cn,t,A.eL,A.cm)
v=this.a
w.EJ(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:59}
C.eYd.prototype={
$1(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.a3(w,new C.eYe(),B.R(w).k("a3<1>")).gH(0)},
$S:241}
C.eYe.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYb.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:201}
C.eYc.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:201}
C.c6I.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawc()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.f
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.T(s,w-(f===t?r:0)))
o=C.fFT(i,new B.F(!0,h,a6,k,a6,a6,q,A.cG,A.bh,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fD0(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gc7c(),"\n\n")
d=B.j0(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afp(k,q,1.28),j),A.pv,A.cn,a6,A.eL,A.cm)
d.EJ(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.f
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.T(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fFT(i,new B.F(!0,h,a6,k,a6,a6,q,A.cG,A.bh,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fD0(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afp(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.B(new B.L(v,0,v,0),B.p(a6,a6,A.h,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bG(1,A.bp,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.pv,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awb(s,j))
i.push(new B.a4(s,a6,B.u(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:442}
C.c6J.prototype={
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
n=o.gawc()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.f
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.T(u,q),new B.T(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.T(r,p-(a0===s?m:0)))
l=C.fFT(f,new B.F(!0,e,a5,i,a5,a5,h,A.cG,A.bh,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fD0(g.length===0?B.a([a6],n):g,l))break}a1=o.afp(i,h,1.28)
a2=new C.c6K(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.GO,new B.a4(v,a5,a4.f,a5),A.GO,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.B(D.bk1,B.p(a5,a5,A.h,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bG(1,A.bp,new B.w(l[2+a3],a5,a1,a5,A.pv,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awb(r,g))
f.push(new B.a4(r,a5,B.u(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.u(B.a([new B.a4(a5,q,v,a5),A.aa,B.C(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:148}
C.c6K.prototype={
$2(d,e){var w=null
return new B.a4(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pv,w,w),w)},
$S:1664}
C.ftP.prototype={
$1(d){return D.f6K},
$S:z+78}
C.eC0.prototype={
$1(d){return this.a.Wj()},
$S:8}
C.eAT.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cM.gcq().aE(v)},
$S:0}
C.eBg.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eBq.prototype={
$1(d){return d>=this.a.length},
$S:59}
C.eAC.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAD.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eAA.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAB.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eB9.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eBa(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jy(B.qV(p>0.2?C.fxQ(q,B.a2P(p,p,A.w)):q),A.q,u)],x.p)
w=s.bn
if(w>0.02){v=B.a2P(12,12,A.w)
p.push(B.jy(B.d5(B.qV(C.fxQ(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b_
if(r!=null&&s.aS>0)p.push(B.ec(u,B.b0(r).j(s.aS),!0))
r=s.b7
if(r!=null&&s.bE>0){r=B.b0(r).j(s.bE)
w=s.b7
w.toString
p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(D.aNV,1.15,A.w,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.b6))}r=s.av
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(D.aNF,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.b6))
r=s.aL
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.ba,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aL)],x.O),D.cDd,u),A.n),A.b6))
if(s.aB>0){r=s.k1
p.push(B.an(u,B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.ba,A.w,B.a([A.x.j(0),A.x.j(s.aB),A.x.j(s.aB),A.x.j(0)],x.O),D.cNa,u),A.n),A.b6),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.aZ
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(A.B,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cKt,u),A.n),A.b6))
s=s.au
if(s>0)p.push(B.b1(u,u,u,new C.bbq(s,u),A.as))
return new B.am(A.V,u,A.aX,A.q,p,u)},
$S:62}
C.eBa.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fC(r.b,A.B,q,q,A.cj,A.bM,!0,q,!1,q,q),o=r.a,n=o.aRX(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bf
v=o.aQ
u=v-1
t=o.bO
s=o.dd?-1:1
return B.dO(B.e4(A.B,B.ez(A.B,l,B.fp(A.B,new B.Fx(new B.zW(q,q,n,A.yU),p,q),q,B.uS(s,o.cS?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:555}
C.eBm.prototype={
$0(){return this.a.n(new C.eBl(this.b,this.c))},
$S:0}
C.eBl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBn.prototype={
$1(d){return this.a.n(new C.eBk(this.b,d))},
$S:6}
C.eBk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBp.prototype={
$0(){return this.a.n(new C.eBo(this.b,this.c))},
$S:0}
C.eBo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAs.prototype={
$1(d){return d.c===this.a.x},
$S:z+85}
C.eAt.prototype={
$1(d){var w=this.a
return w.n(w.gcoq())},
$S:2}
C.eAu.prototype={
$1(d){return this.a.n(new C.eAr())},
$S:2}
C.eAr.prototype={
$0(){},
$S:0}
C.eAv.prototype={
$0(){var w=this.a
return w.n(new C.eAq(w,this.b))},
$S:0}
C.eAq.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eAx.prototype={
$2(d,e){return A.aw},
$S:36}
C.eAw.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.de(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a8(A.b4,A.ba,A.w,r,w,w),A.n),A.hG,w,94,w,w,w,w,70)
return B.aJ(w,new B.a4(70,w,B.u(B.a([r,A.fW,B.d(v.b,w,1,A.Z,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAp(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:74}
C.eAp.prototype={
$0(){var w=this.a
return w.n(new C.eAm(w,this.b))},
$S:0}
C.eAm.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAy.prototype={
$1(d){var w=this.a
return w.n(new C.eAo(w,d))},
$S:9}
C.eAo.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eAz.prototype={
$1(d){var w=this.a
return w.n(new C.eAn(w,d))},
$S:9}
C.eAn.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eBQ.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:59}
C.eBX.prototype={
$1(d){var w=this.a
return w.n(new C.eBY(w,d))},
$S:28}
C.eBY.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ee(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eBZ.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:250}
C.eBR.prototype={
$0(){var w=this.a
return w.n(new C.eBP(w,this.b))},
$S:0}
C.eBP.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.G(0,v)},
$S:0}
C.eBS.prototype={
$0(){var w=this.a
return w.n(new C.eBO(w,this.b))},
$S:0}
C.eBO.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.r)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eBT.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eBN(v,w.b,w.c,w.d))},
$S:0}
C.eBN.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eBU.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqJ(v))},
$S:0}
C.eBV.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eBW.prototype={
$0(){var w=this.a
return w.n(new C.eBM(w))},
$S:0}
C.eBM.prototype={
$0(){var w=this.a.db
return A.d.hh(w,0,w.length,0)},
$S:0}
C.eBz.prototype={
$1(d){return d.a===this.a.dy},
$S:220}
C.eBA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arc[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b3(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atr(new B.nH(new B.bx(n,n,n,n),A.ap,new B.ky(new B.o(j,j,j,j,j,new B.a8(A.a_,A.a7,A.w,m,j,j),A.n),A.b6,new C.aWh(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eBy(r,v),2,i))}return B.cd(A.bH,h,A.by,7,7)},
$S:156}
C.eBy.prototype={
$0(){var w=this.b
return w.n(new C.eBt(this.a,w))},
$S:0}
C.eBt.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eBB.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:205}
C.eBE.prototype={
$0(){var w=this.a
return w.n(new C.eBx(w))},
$S:0}
C.eBx.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eBF.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eBG.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eBH.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eBI.prototype={
$0(){var w=this.a
return w.n(new C.eBw(w))},
$S:0}
C.eBw.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eBJ.prototype={
$0(){var w=this.a
return w.n(new C.eBv(w))},
$S:0}
C.eBv.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eBK.prototype={
$0(){var w=this.b
return w.n(new C.eBu(this.a,w))},
$S:0}
C.eBu.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eBL.prototype={
$1(d){return this.a.fx=d},
$S:205}
C.eBC.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eBD.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eBd.prototype={
$0(){var w=this.a
return w.n(new C.eBc(w))},
$S:0}
C.eBc.prototype={
$0(){var w=this.a
w.p4=null
w.aYs()},
$S:0}
C.eBe.prototype={
$0(){var w=this.a
return w.n(new C.eBb(w,this.b))},
$S:0}
C.eBb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBf.prototype={
$0(){var w=this.a
return w.n(w.gcfn())},
$S:0}
C.eB5.prototype={
$0(){var w=this.a
return w.n(new C.eB4(w))},
$S:0}
C.eB4.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eB6.prototype={
$0(){var w=this.a
return w.n(new C.eB3(w))},
$S:0}
C.eB3.prototype={
$0(){var w=this.a
w.aB=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eB7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cKO[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b3(9,9)
m.push(v.atr(new B.nH(new B.bx(p,p,p,p),A.ap,new B.a4(1/0,1/0,new B.Fx(new B.zW(o,o,v.aRX(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.yU),B.fC(u,A.B,140,o,A.cj,A.bM,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eB2(v,s),3,n))}return B.cd(A.bH,m,A.by,10,8)},
$S:156}
C.eB2.prototype={
$0(){var w=this.a
return w.n(new C.eB1(w,this.b))},
$S:0}
C.eB1.prototype={
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
C.eAK.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eAL.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eAM.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eAN.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eAO.prototype={
$1(d){return this.a.av=d},
$S:6}
C.eAP.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eAQ.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eAR.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eAS.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.eA5.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eA6.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eA7.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eA8.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eA9.prototype={
$0(){var w=this.a
return w.n(new C.eA4(w))},
$S:0}
C.eA4.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eAa.prototype={
$1(d){return this.a.b_=d},
$S:205}
C.eAb.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.eAE.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eAF.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.eAG.prototype={
$1(d){return this.a.au=d},
$S:6}
C.eAH.prototype={
$1(d){return this.a.b7=d},
$S:205}
C.eAI.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.eAf.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eAg.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.eAh.prototype={
$1(d){return this.a.bO=d},
$S:6}
C.eAi.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.eAj.prototype={
$0(){var w=this.a
return w.n(new C.eAe(w))},
$S:0}
C.eAe.prototype={
$0(){var w=this.a
return w.c9=A.k.J(w.c9+90+180,360)-180},
$S:0}
C.eAk.prototype={
$0(){var w=this.a
return w.n(new C.eAd(w))},
$S:0}
C.eAd.prototype={
$0(){var w=this.a
return w.dd=!w.dd},
$S:0}
C.eAl.prototype={
$0(){var w=this.a
return w.n(new C.eAc(w))},
$S:0}
C.eAc.prototype={
$0(){var w=this.a
return w.cS=!w.cS},
$S:0}
C.eB8.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hNo(v,w.p4)},
$S:0}
C.eB0.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.ba9:B.fC(v,A.B,w,w,A.cj,A.bM,!1,w,!1,w,w)
return C.fgC(d.length===0?"rounded":d,u,e)},
$S:137}
C.eAX.prototype={
$0(){var w=this.a
return w.n(new C.eAW(w))},
$S:0}
C.eAW.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eAY.prototype={
$0(){var w=this.b
return w.n(new C.eAV(this.a,w))},
$S:0}
C.eAV.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eAZ.prototype={
$0(){var w=this.b
return w.n(new C.eAU(this.a,w))},
$S:0}
C.eAU.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eB_.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eBj.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.a9(-4,A.G,A.b0.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ep(n.c96(),n.r))
l.push(new C.H0(n.clB(),!1,!1,t))
o=B.bU(0,B.bu(o,new B.ep(new B.am(A.V,t,A.aX,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.V,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c5,B.bQ(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.b6),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eBi(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:207}
C.eBi.prototype={
$1(d){var w=this.a
return w.n(new C.eBh(w,d,this.b,this.c))},
$S:18}
C.eBh.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eBs.prototype={
$0(){var w=this.a
return w.n(new C.eBr(w,this.b))},
$S:0}
C.eBr.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eAJ.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).oZ()},
$S:0}
C.eC_.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a4(Math.min(s*0.4,460),t,B.u(B.a([w.aUg(),B.C(B.as(w.aX5(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.C(B.u(B.a([B.C(w.aLs(),1),w.aHJ()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aUg(),new B.B(A.hr,B.as(s.aX5(u),t,t,t),t),B.C(s.aLs(),1),s.aHJ()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:610}
C.fdQ.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eg(k,!1,j,A.ay,"",4280640491,i,l,m,"",h,C.bw3(),null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cI,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bh,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bh,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bh,A.O)},
$S:z+92}
C.fdP.prototype={
$3(d,e,f){var w=this,v=C.bw3(),u=w.b?A.I:A.cp,t=w.c?A.cF:A.bh
return C.eg(w.d,!1,f,A.ay,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.b7,4280172719,2,d,0,w.f,w.e,D.ca,D.cI,0.82,0.09,w.a)},
$S:z+97}
C.c81.prototype={
$1(d){return B.t(d)},
$S:17}
C.flw.prototype={
$0(){return this.a},
$S:z+15}
C.f3K.prototype={
$1(d){return d.a.cT(this.a)},
$S:z+29}
C.f3L.prototype={
$2(d,e){return J.ch(e)},
$S:z+30}
C.fly.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.flB.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.flC.prototype={
$0(){return A.d.gI(D.uN)},
$S:z+32}
C.flu.prototype={
$1(d){return d.a},
$S:z+16}
C.flx.prototype={
$1(d){return d.a},
$S:z+16}
C.fju.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fjv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjw.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fdU.prototype={
$0(){return C.cx()},
$S:22}
C.fdX.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ca,s=u?n:0
return C.eg(j,l,v,A.ay,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.b7,4280172719,2,d,s,0,"",t,D.cI,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d7,!1,null,0,"","",A.bh,A.a1)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d7,!1,null,0,"",j,A.bh,A.a1)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d7,!1,null,0,j,k,A.bh,A.a1)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bh,A.a1)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bh,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.d7,!1,k,l,"",m,A.bh,A.a1)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bh,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d7,!1,j,k,"",l,A.bh,A.a1)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bh,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bh,A.a1)},
$S:z+34}
C.fdW.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eg(A.bf,!1,4279310375,A.ay,"",i,24,A.bh,A.a1,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ca,D.eQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fdV.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ca,t=v?j:0
return C.eg(A.bf,!1,4279310375,A.ay,"",4280640491,24,A.bh,A.a1,"",h,w,d,v?k:"",l,0,!1,"",0,D.b7,4280172719,2,"",t,0,"",u,D.l2,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pl,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+36}
C.fdT.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fgn.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.fXY.ci(0,A.a.i(s.w).toLowerCase(),new C.fgl(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ci(0,s.r,new C.fgm(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bkd(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1666}
C.fgl.prototype={
$0(){return F.aKg(this.a.w)},
$S:198}
C.fgm.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.buY("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hq(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:198}
C.eY8.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eY9.prototype={
$1(d){return d.a},
$S:z+18}
C.eYa.prototype={
$1(d){return d.b},
$S:z+19}
C.fu0.prototype={
$1(d){return D.f7_},
$S:z+40}
C.eHV.prototype={
$0(){return this.a.x=C.hqT(this.b,this.c.b)},
$S:0}
C.eHW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eHT.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:348}
C.eHU.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:348}
C.eHS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c1(A.aG,new C.eHN(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.Gy,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aV(s,7)
if(r.length===0){n.n(new C.eHO(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h2y(o,m.cyy(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eHP(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHN.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eHR(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWD,A.h,p,p,D.aRZ,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ap:D.Au,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a4(64,64,C.fgC(v,i.aZ2(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dJ,!0)
if(!l)return B.br(!0,new B.B(A5.Dw,t,p),!0,!1,A.ag,!0,!0)
s=new C.eHQ(i,d)
m=B.aG(d,A.bN,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.EW[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.d3(new B.aV(0,1/0,0,m.a.b*0.85),B.cf(B.u(B.a([D.eKr,A.T,t,A.dW,D.eaN,A.au,D.eUg,A.T,B.lX(1.15,l,3,10,10,p,A.dJ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A5.Dw,p,p,A.af),p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eHR.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b0.j(0.22):A.c.j(0.04),s=v?A.bD:A.du
return B.aJ(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hd,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eHM(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1667}
C.eHM.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eHQ.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.C(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiv,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e8(new C.LB(u.Eg(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.au,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,t?A.bJ:A.al,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eHL(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:137}
C.eHL.prototype={
$0(){B.a7(this.a,!1).K("finale:"+this.b)
return null},
$S:0}
C.eHO.prototype={
$0(){var w=this.a
return w.w=w.w.Eg("")},
$S:0}
C.eHP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eHB.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eHC.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eHE.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eHF.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eHG.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eHH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eHD(w,d))},
$S:2}
C.eHD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eHI.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eI8.prototype={
$0(){return this.a.f.ft()},
$S:0}
C.eI9.prototype={
$0(){var w=this.a
return w.n(new C.eI7(w))},
$S:0}
C.eI7.prototype={
$0(){return this.a.e=null},
$S:0}
C.eIa.prototype={
$0(){var w=this.a
return w.n(new C.eI6(w))},
$S:0}
C.eI6.prototype={
$0(){return this.a.x=null},
$S:0}
C.eIc.prototype={
$1(d){var w=this.a
return w.n(new C.eI5(w,d))},
$S:32}
C.eI5.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eId.prototype={
$1(d){var w=this.a
return w.n(new C.eI4(w,d))},
$S:32}
C.eI4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eIe.prototype={
$0(){var w=this.a
return w.n(new C.eI3(w))},
$S:0}
C.eI3.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eIf.prototype={
$1(d){var w=this.a
return w.n(new C.eI2(w,d))},
$S:32}
C.eI2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eIg.prototype={
$1(d){var w=this.a
return w.n(new C.eI1(w,d))},
$S:32}
C.eI1.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eIh.prototype={
$0(){var w=this.a
return w.n(new C.eI0(w))},
$S:0}
C.eI0.prototype={
$0(){var w=this.a
return w.w=w.w.Eg("")},
$S:0}
C.eIi.prototype={
$0(){var w=this.a
return w.n(new C.eI_(w,this.b))},
$S:0}
C.eI_.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eIj.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a4(u,null,w.bH2(D.a_7[v]),null))
return B.cd(A.bH,t,A.by,8,8)},
$S:156}
C.eIb.prototype={
$1(d){var w=this.a
return w.n(new C.eHZ(w,d))},
$S:9}
C.eHZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHJ.prototype={
$0(){var w=this.a
return w.n(new C.eHK(w,this.b,this.c))},
$S:0}
C.eHK.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.G(0,w)},
$S:0}
C.eHY.prototype={
$0(){var w=this.a
return w.n(new C.eHX(w,this.b))},
$S:0}
C.eHX.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fu_.prototype={
$1(d){return new C.Z9(this.a,this.b,null)},
$S:z+41}
C.eHu.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eHv.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eHw.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAt?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eHx.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eHy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eHt(w,d))},
$S:2}
C.eHt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHz.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eHA.prototype={
$0(){var w=this.b
if(A.a.c5(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bG(0,new B.bb(w,B.h1(A.bn,w.length),A.aL))},
$S:0}
C.f3_.prototype={
$1(d){return d.a===this.a},
$S:220}
C.e0K.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gats(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cxN:D.cMU
t=D.w4.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.w4.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.a9(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bU(0,B.b1(q,q,q,new C.bdD(n*6.283,q),A.as),0,0,0)
o=o.x
o=B.bU(0,B.bJG(B.ez(A.B,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a8(A.a_,A.a7,A.w,B.a([A.K,D.b1I.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.V,q,A.a9,A.q,B.a([n,o,B.as(B.u(B.a([B.V(p.a.c?A.ej:A.kY,D.w4,q,q,q,20),A.au,B.eY(A.B,B.nm(A.j2,D.eED,new C.e0J()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eBv,A.h,q,q,new B.o(D.w4,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adF,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aE,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:88}
C.e0J.prototype={
$1(d){return D.bFb.aA(0,d)},
$S:65}
C.flD.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.flE.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:220}
C.flF.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1668}
C.flG.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:13}
C.flz.prototype={
$1(d){return d.a},
$S:z+18}
C.flA.prototype={
$1(d){return d.b},
$S:z+19}
C.fte.prototype={
$1(d){return new C.Xz(this.a,this.b,null)},
$S:z+43}
C.daf.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dag.prototype={
$1(d){return d.a===this.a.gafi()},
$S:z+10}
C.dah.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dak.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dal.prototype={
$0(){var w=this.a
return w.n(new C.daj(w,this.b))},
$S:0}
C.daj.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dam.prototype={
$1(d){var w=this.a
return w.n(new C.dai(w,d))},
$S:9}
C.dai.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0I.prototype={
$1$2(d,e,f){var w=B.bi(d,!0,f)
A.d.fN(w,this.a)
return B.dg(w,0,B.dL(e,"count",x.r),B.R(w).c).dz(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1669}
C.eUI.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eg(A.bf,!1,4279310375,A.ay,"",i,24,A.bh,A.a1,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eQ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ca,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+44}
C.eUK.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eg(A.L,!1,this.b.d,A.ay,"",4280640491,i,A.bh,A.cG,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.b7,4280172719,2,d,l,0,"",D.m5,D.cI,g,e,f)},
$S:z+45}
C.eUJ.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vB(0,"twinkle")
w=t===D.b7?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.m5,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+46}
C.eUH.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.ff0.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ff1.prototype={
$0(){return A.d.gI(D.F4)},
$S:z+48}
C.ff2.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eWG.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fl5.prototype={
$1(d){var w=2450411,v=4281908728
C.dm(d,C.dn(4280171146,1,0,D.b7,w,0,0.52,0,0))
C.dm(d,C.dn(v,1,0,D.b7,w,0,0.04,0.48,0))
C.dm(d,C.dn(4294047225,0.38,0,D.b7,w,0,0.48,0.52,0.62))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fl6.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dm(d,C.dn(4280172719,0.8,0,D.b7,w,0,0.36,0.58,0.1))
C.dm(d,C.dn(v,0.64,0,D.b7,w,0,0.28,0.64,0.18))
C.dm(d,C.dn(4282090230,0.44,0,D.b7,w,0,0.2,0.7,0.28))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.22,0.08,0.12))
C.dm(d,C.dn(u,0.004,0,D.fb,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fl7.prototype={
$1(d){var w=2450411,v=4279548070
C.dm(d,C.dn(4279080072,0.11,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(4279310375,0.11,0,D.b7,w,0,1,0,0.89))
C.dm(d,C.dn(856528008,0.72,0,D.jl,w,0,0.28,0.72,0.14))
C.dm(d,C.dn(1426953352,0.2,0,D.jl,w,0,0.2,0.78,0.22))
C.dm(d,C.dn(v,0.004,0,D.fb,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fli.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(4279203438,0.55,0,D.jl,w,0,0.5,0.55,-0.05))
C.dm(d,C.dn(4280171146,0.5,0,D.jl,w,0,0.45,0.62,0.35))
C.dm(d,C.dn(4280640491,0.4,0.3,D.jk,w,0,0.35,0.68,0.55))
C.dm(d,C.dn(571438702,0.12,0,D.b7,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fln.prototype={
$1(d){var w=4280472558
C.dm(d,C.dn(4279310375,0.75,-0.4,D.jk,2450411,0,0.75,-0.15,0.35))
C.dm(d,C.dn(w,0.55,0,D.b7,2450411,0,0.06,0.42,0.38))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.35,0.08,0.08))
C.dm(d,C.dn(2282478,0.12,0,D.b7,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flo.prototype={
$1(d){var w=2450411,v=4280640491
C.dm(d,C.dn(3423541034,0.48,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(v,0.12,-0.08,D.jl,w,0,1.1,-0.05,0.38))
C.dm(d,C.dn(858088427,0.35,0,D.b7,w,0,0.42,0.55,0.05))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.flp.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cwU[w]
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eQ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a1,A.bh,A.ay,4279310375,A.bf,null,D.b7,v,4294967295,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.IF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.flq.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lO,A.dD,w/3).l()
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eQ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a1,A.bh,A.ay,4279310375,A.bf,null,D.B2,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.IF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.flr.prototype={
$1(d){var w=4294967295
C.dm(d,C.dn(4280640491,1,0,D.b7,2450411,0,0.42,0,0))
C.dm(d,C.dn(4280110808,1.1,1.57,D.jk,2450411,0,0.18,0.35,-0.05))
C.dm(d,C.dn(w,0.006,0,D.fb,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fls.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dm(d,C.dn(w,0.1,0,D.b7,v,0,1,0,0))
C.dm(d,C.dn(u,0.012,0,D.b7,v,0,1,0,0.1))
C.dm(d,C.dn(u,0.006,0,D.fb,u,3,0.42,0.06,0.14))
C.dm(d,C.dn(403446057,0.68,0,D.jl,v,0,0.22,0.72,0.18))
C.dm(d,C.dn(w,0.1,0,D.b7,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flt.prototype={
$1(d){var w=4278630100
C.dm(d,C.dn(4279310375,1.2,0.15,D.jl,2450411,0,0.55,-0.2,-0.1))
C.dm(d,C.dn(w,1.1,0.15,D.b7,2450411,0,0.08,0.15,-0.05))
C.dm(d,C.dn(1120295,0.18,0,D.b7,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fl8.prototype={
$1(d){var w=4292617766
C.dm(d,C.dn(4282714634,0.65,-0.2,D.jk,2450411,0,0.65,-0.1,0.45))
C.dm(d,C.dn(w,0.5,-0.15,D.jk,2450411,0,0.5,0.05,0.55))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fl9.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(4278413729,0.35,3.14,D.jk,w,0,0.45,-0.05,0.7))
C.dm(d,C.dn(4278355143,0.3,3.14,D.jk,w,0,0.4,0.25,0.75))
C.dm(d,C.dn(4279150057,0.32,3.14,D.jk,w,0,0.5,0.55,0.72))
C.dm(d,C.dn(863884284,0.22,0,D.ex,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fla.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dm(d,C.dn(w,0.14,0,D.b7,v,0,0.14,0.02,0.02))
C.dm(d,C.dn(2282478,0.14,0,D.b7,u,3,0.14,0.84,0.02))
C.dm(d,C.dn(w,0.28,0,D.jl,v,0,0.35,-0.08,0.78))
C.dm(d,C.dn(u,0.22,0.5,D.jk,v,0,0.3,0.72,0.78))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.flb.prototype={
$1(d){var w=4293571336,v=1156231944
C.dm(d,C.dn(1841431,0.92,0,D.b7,w,3,0.92,0.04,0.04))
C.dm(d,C.dn(v,0.15,0,D.jk,2450411,0,0.15,0.02,0.02))
C.dm(d,C.dn(v,0.15,3.14,D.jk,2450411,0,0.15,0.83,0.83))
C.dm(d,C.dn(w,0.004,0,D.fb,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.flc.prototype={
$1(d){var w=4279080072,v=2450411
C.dm(d,C.dn(w,0.14,0,D.kB,v,0,0.14,0.68,0.18))
C.dm(d,C.dn(4279548070,0.14,0,D.kB,v,0,0.14,0.78,0.28))
C.dm(d,C.dn(4281193663,0.14,0,D.kB,v,0,0.14,0.68,0.38))
C.dm(d,C.dn(4284410580,0.14,0,D.kB,v,0,0.14,0.78,0.48))
C.dm(d,C.dn(4279203438,0.14,0,D.kB,v,0,0.14,0.68,0.58))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fld.prototype={
$1(d){var w=2450411,v=4280640491
C.dm(d,C.dn(3708753706,0.42,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(v,0.06,-0.05,D.jl,w,0,1,0,0.38))
C.dm(d,C.dn(859356664,0.25,0,D.ex,w,0,0.25,0.7,0.08))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fle.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lO,A.dD,w/3).l()
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eQ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a1,A.bh,A.ay,4279310375,A.bf,null,D.B2,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.IF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(4280172719,0.08,0,D.b7,2450411,0,1,0,0))
C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.flf.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iN
$.iN=u+1
u=new C.ew("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a1,A.bh,A.ay,s,A.bf,null,D.fb,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.IF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dm(d,C.dn(s,0.75,0,D.b7,2450411,0,0.22,0.72,0.1))
C.dm(d,C.dn(872415231,0.16,0,D.b7,2450411,0,0.16,0.75,0.15))
C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flg.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dm(d,C.dn(4674921,0.9,0,D.b7,4287931320,2,0.9,0.05,0.05))
C.dm(d,C.dn(w,0.08,0,D.b7,v,0,0.08,0.03,0.03))
C.dm(d,C.dn(u,0.08,0,D.b7,v,0,0.08,0.89,0.03))
C.dm(d,C.dn(u,0.08,0,D.b7,v,0,0.08,0.03,0.89))
C.dm(d,C.dn(w,0.08,0,D.b7,v,0,0.08,0.89,0.89))
C.dm(d,C.dn(w,0.004,0,D.fb,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.flh.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iN
$.iN=t+1
t=new C.ew("design_"+(""+1000*u+"_"+t),D.eQ,0.55,0.14+v,0.38,0.18,"",24,A.a1,A.bh,A.ay,r,A.bf,null,D.b7,4294967295,4280640491,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.IF
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dH,A.cJ,w/2).l()
t=Date.now()
s=$.iN
$.iN=s+1
u=new C.ew("design_"+(""+1000*t+"_"+s),D.eQ,0.57,0.16+v,0.06,0.14,"",24,A.a1,A.bh,A.ay,r,A.bf,null,D.b7,u,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.IF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dm(d,C.dn(4280171146,1,0,D.b7,q,0,0.48,0,0))
C.dm(d,C.dn(4280172719,1.1,1.57,D.jk,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.flj.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(870995980,0.55,0.45,D.jl,w,0,0.55,-0.12,-0.08))
C.dm(d,C.dn(856996006,0.45,0.45,D.jl,w,0,0.45,0.62,-0.05))
C.dm(d,C.dn(16777215,0.38,0.45,D.jl,4293548044,5,0.38,0.52,0.12))
C.dm(d,C.dn(585783308,0.3,0.45,D.jl,w,0,0.3,0.56,0.16))
C.dm(d,C.dn(4279548070,0.06,0,D.b7,w,0,0.16,0.38,0.04))
C.dm(d,C.dn(1156208652,0.28,0,D.ex,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flk.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dm(d,C.dn(w,1,0,D.b7,v,0,0.07,0,0))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.14))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.28))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.42))
C.dm(d,C.dn(s,0.08,0,D.ex,v,0,0.08,0.5,0.16))
C.dm(d,C.dn(w,0.08,0,D.ex,v,0,0.08,0.5,0.3))
C.dm(d,C.dn(4279548070,0.08,0,D.ex,v,0,0.08,0.5,0.44))
C.dm(d,C.dn(16777215,0.32,0.45,D.jl,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fll.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dm(d,C.dn(4294047225,0.08,0,D.b7,t,2,0.1,0.02,0.06))
C.dm(d,C.dn(s,0.42,0,D.b7,2450411,0,0.36,0.58,0.18))
C.dm(d,C.dn(872415231,0.12,0,D.b7,2450411,0,0.28,0.62,0.24))
C.dm(d,C.dn(16777215,0.28,0,D.ex,s,4,0.32,0,0.72))
C.dm(d,C.dn(r,0.006,0,D.fb,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iN
$.iN=u+1
u=new C.ew("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a1,A.bh,A.ay,4279310375,A.bf,null,D.ex,16777215,t,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.IF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.flm.prototype={
$1(d){var w=2450411,v=4279548070
C.dm(d,C.dn(3423541034,0.55,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(4009754623,0.56,0.45,D.jl,w,0,0.56,0.22,0.18))
C.dm(d,C.dn(3439329279,0.44,0.45,D.jl,w,0,0.44,0.28,0.24))
C.dm(d,C.dn(v,0.07,0,D.b7,w,0,0.22,0.34,0.62))
C.dm(d,C.dn(v,1,0,D.b7,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fcQ.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fcR.prototype={
$0(){return A.d.gI($.bzw())},
$S:z+51}
C.f2N.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f2M.prototype={
$1(d){return C.hxM(d,this.a,this.b)},
$S:z+52}
C.flM.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.uS(1.0375,1.01875,1)
return new B.fG(v,u,new C.aP6(B.hnV(A.tM,C.hxP(w.c,w.d,v,u),t)))},
$S:341}
C.dKs.prototype={
$1(d){var w=d.a/1e6
this.a.d.st(0,w)
return w},
$S:8}
C.dKr.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bQ(w,new B.o(w,w,w,w,w,new B.bR(A.HM,1.2,A.w,w,0,u.d,w,w),A.n),A.b6),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jy(new B.am(A.V,w,A.aX,A.q,B.a([t,new B.ep(B.b1(w,w,w,new C.baw(u.a,r,q,r),A.as),w),B.as(new B.k0(r,new C.dKq(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:384}
C.dKq.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aq(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.a9(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hN(B.fC(i,A.B,r,r,A.cj,A.bM,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fQ(A.B,0,6.283185307179586,A.w,t,r,new B.mk(e*0.8)),A.a6),r,w,r,r,new B.L(v,v,v,v),r,r,w),new B.a4(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bmQ(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cI(i[1].j(0.6),A.J,t)],x.S),r,r),A.L,r,r),r))
j.push(new B.a4(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d5(B.dO(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a8(A.a_,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a4(r,m*0.022,r,r),B.d(w.a.c.gaGg(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a1,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d5(B.e4(A.B,new B.B(new B.L(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:106}
C.eGI.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:65}
C.c2F.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.a9(0,A.G,A.hn.j(0.4),A.J,14)],x.V):v
w=B.de(v,B.bu(B.m(12),d,A.ap),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aJ(v,new B.a4(112,v,B.u(B.a([w,A.fW,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,g?A.bJ:A.al,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1670}
C.c2G.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Eg(""))},
$S:0}
C.c2H.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e8(new C.LB(v.Eg(u),!0,!1,null),!0,null),d.b,new C.c2I(w,this.c,d),v.a===u)},
$S:z+53}
C.c2I.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h2y(u.b,t.c.Eg(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.frS.prototype={
$1(d){return new C.X7(this.a,null)},
$S:z+54}
C.d_M.prototype={
$0(){var w=this.a
w.d=w.guJ().b5Q("data:"+this.b+";base64,"+A.cM.gcq().aE(this.c));++w.r},
$S:0}
C.d_R.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_S.prototype={
$0(){var w=this.a
return w.n(new C.d_Q(w))},
$S:0}
C.d_Q.prototype={
$0(){return this.a.r++},
$S:0}
C.d_T.prototype={
$1(d){var w=this.a
return w.n(new C.d_P(w,d))},
$S:2}
C.d_P.prototype={
$0(){var w=this.a
return w.d=w.guJ().azw(this.b)},
$S:0}
C.d_U.prototype={
$0(){var w=this.a
return w.n(new C.d_O(w))},
$S:0}
C.d_O.prototype={
$0(){var w=this.a
return w.d=w.guJ().b5Q("")},
$S:0}
C.d_V.prototype={
$1(d){var w=this.a
return w.n(new C.d_N(w,d))},
$S:2}
C.d_N.prototype={
$0(){var w=this.a
return w.d=w.guJ().b5X(this.b)},
$S:0}
C.d_W.prototype={
$0(){var w=this.a
w=w.guJ().b5X(w.gatt().a.a)
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.frR.prototype={
$1(d){var w={}
w.a=this.a
return new B.eh(new C.frQ(w),null)},
$S:21}
C.frQ.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bN,x.w).w.a.b*0.85),B.cf(B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.eRD,A.au,D.eRS,A.aA,new C.aWe(v.a,new C.frP(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.af),w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSu,w,w,w,w,A.JO,w,w,w)},
$S:173}
C.frP.prototype={
$1(d){this.b.$1(new C.frO(this.a,d))
B.a7(this.c,!1).K(d)},
$S:z+55}
C.frO.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.ftZ.prototype={
$1(d){return D.f2S},
$S:z+56}
C.d6f.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d6g.prototype={
$0(){var w=this.a.c
w.toString
B.a7(w,!1).K(this.b)
return null},
$S:0}
C.d6h.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a7(w,!1).K(v)}},
$S:0}
C.fis.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:65}
C.d_t.prototype={
$3(d,e,f){var w,v=this,u=new B.aZ($.a1().r,A.av,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.N(new B.bj(t+r*1.2,o))
u.N(new B.dk(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.N(new B.dk(w,q+p,w,q+p*1.2))
u.N(new B.BL(B.c0(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.b4(u,v.d)
s.b4(u,v.e)
p=B.U()
p.r=B.aq(v.a.d,A.c,0.6).gt(0)
s.az(new B.v(w,o),2.2,p)},
$S:1671}
C.fiw.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+57}
C.fb8.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fb9.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eBK,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fb6(d),B.bk(A.bQ,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.T,B.ex(A.nr,D.R6,new C.fb7(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.ah,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fb6.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fb7.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.c8_.prototype={
$1(d){return d.hs()},
$S:z+58}
C.c80.prototype={
$1(d){return d.ad()},
$S:z+59}
C.c7Z.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.Y(b5,x.N,x.z),b3=B.aQ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.M(b3)
if(b4==null)b4=A.a1.gdC(0)
b3=B.aQ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.M(b3)
if(w==null)w=0
b3=B.aQ(b2.h(0,"align"))
v=b3==null?b1:A.k.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.htO(b2.h(0,"type"))
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
n=A.asK[A.o.D(b4,0,8)]
m=D.czx[A.o.D(w,0,1)]
l=C.hxh(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.M(k)
if(k==null)k=4279310375
j=A.apK[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hzX(b2.h(0,"shape"))
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
a3=C.fYZ(b2.h(0,"textTransition"))
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
return C.eg(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+60}
C.c7P.prototype={
$1(d){return d.hs()},
$S:z+61}
C.c7Q.prototype={
$1(d){return d.ad()},
$S:z+62}
C.c7M.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7N.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7O.prototype={
$1(d){return C.fPT(B.Y(d,x.N,x.z))},
$S:z+63}
C.c8g.prototype={
$1(d){return d.a===this.a},
$S:z+64}
C.c8h.prototype={
$0(){return A.d.gI(D.ZO)},
$S:z+65}
C.c8b.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c8a.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c86.prototype={
$1(d){return new B.I(d,new C.c87(),B.R(d).k("I<1,N>")).fs(0,new C.c88())},
$S:z+68}
C.c87.prototype={
$1(d){return d.f},
$S:z+69}
C.c88.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:624}
C.c89.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hjN(d)},
$S:z+70}
C.c8c.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.c8d.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8e.prototype={
$1(d){return d.ad()},
$S:z+14}
C.fj4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.G(0,j)
break}}}},
$S:z+72}
C.fj0.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fj1.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fj2.prototype={
$2(d,e){var w
if(d.b===D.cI){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fj3.prototype={
$2(d,e){return d.b===D.eQ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c7V.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hIi(b2,b3),b5=B.a2(b4).k("bf<2>")
b5=B.cy(new B.bf(b4,b5),new C.c7U(),b5.k("E.E"),x.N)
w=B.d8(b5,B.a2(b5).k("E.E"))
b1=b1.e
v=A.oR.aq(0,A.k.D(b1,0,1))
u=new C.c7W()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c7X(a9,b7.d)
r=new C.c7Y(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jV.aq(0,A.k.D(n,0,1))
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
if(a2===D.eQ){a4=i.hs()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l2&&l.at==i.at?r.$1(i):new B.am(A.V,a8,A.aX,A.q,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iv(B.vo(a3),a8,A.B,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ca)a7=D.m5
p.push(s.$5(i.c,i.d,i.e,i.f,C.h07(a7,a6,r.$1(i))))}}return B.bQ(new B.am(A.V,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a_,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.b6)},
$S:392}
C.c7U.prototype={
$1(d){return d.a},
$S:z+22}
C.c7W.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+75}
C.c7X.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1674}
C.c7Y.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5p(v,C.aYn(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dxN.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d4(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c83.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c84.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.flT.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:268}
C.fl_.prototype={
$1(d){return new C.aaT(this.a,this.b,null)},
$S:z+77}
C.eaq.prototype={
$0(){return this.a.O4(this.b,C.hLB(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ear.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O4(this.b,C.hLD(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eas.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O4(this.b,C.hLC(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eat.prototype={
$0(){W.h_S()
B.a7(this.a,!1).K(null)},
$S:0}
C.c7T.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1675}
C.c7S.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.mW),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lu(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bM:A.dp
return B.fC(t,A.B,o,new C.c7R(),A.cj,w,!0,u,!1,new B.cv("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1676}
C.c7R.prototype={
$3(d,e,f){return D.a7A},
$S:228}
C.fj_.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dg(r,0,B.dL(6,"count",x.r),B.R(r).c)
u=r.$ti.k("I<ai.E,cE>")
r=B.z(new B.I(r,new C.fiZ(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bQ(new B.am(A.V,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.b6),A.ap)},
$S:1677}
C.fiZ.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYn(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f55.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cW(r.b,new C.f53(d))
w=B.aG(d,A.bN,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.fx,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.as(B.aD(!1,A.X,!0,q,B.p(q,B.u(B.a([B.A(B.a([B.C(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l5,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bF(!1,A.yi,q,q,!0,q,q,new C.f54(p,d),q,B.fn(q,q,A.bg,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JN,q,new B.b5(B.m(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aV(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fF,A.zE,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:246}
C.f53.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a7(w,!0).pH())B.a7(w,!0).eC()},
$S:0}
C.f54.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a7(this.b,!0).eC()},
$S:0}
C.eP1.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fp(A.B,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jw(r*3.14159)
return B.fp(A.B,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jw(r*0.5)
return B.fp(A.B,B.d5(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fp(A.a7,B.d5(u.b,r),t,s,!0)
case 12:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(B.e4(A.B,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aG3(r,t))],x.p),t)
case 15:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aG3(1-r,t))],x.p),t)
case 16:v=D.aVH.aq(0,r)
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.df()
s.md(r*6.28)
s.jd(r,r,r,1)
return B.fp(A.B,u.b,t,s,!0)
case 20:return B.ez(A.B,(r-0.5)*0.35,new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t),t)}},
$S:57}
C.dIF.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIE.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dID.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h07(v,w,e)},
$S:57}
C.c7L.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a_,A.a7,A.w,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.R(v).k("I<1,cE>")
q=B.z(new B.I(v,new C.c7K(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bQ(new B.am(A.V,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.b6)},
$S:392}
C.c7K.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ca?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5p(m,new C.SW(d,C.aYn(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cY7.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cY6(w))},
$S:11}
C.cY6.prototype={
$0(){return this.a.d++},
$S:0}
C.e0q.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.J(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aH0.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hI1(w,t,s,e)}switch(s.a.c){case"float3d":s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dX(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jw(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jd(w,w,w,1)
return B.fp(A.B,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.e4(A.B,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d5(B.e4(A.B,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:57}
C.eEs.prototype={
$1(d){var w
$.a1()
w=B.U()
w.b=A.aj
w.c=d
w.e=A.fj
return w},
$S:1678}
C.fgD.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b1(r,r,r,new C.bmJ(u,t,r),A.as))
w.push(B.n1(s.d,A.ap,new C.bb2(u,t,r)))
if(!p)w.push(B.b1(r,r,r,new C.blM(u,q,t,r),A.as))
return B.as(new B.a4(v.a,v.b,new B.am(A.V,r,A.aX,A.q,w,r),r),r,r,r)},
$S:259}
C.f7Q.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:267}
C.egE.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Bv(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gah(s)){u=null
w=1
break}u=r.dP(s,new C.egC(),new C.egD(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1679}
C.egC.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:186}
C.egD.prototype={
$0(){return J.fm(this.a)},
$S:1681}
C.ed1.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ed2.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ed3.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eeC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eeq.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eer.prototype={
$1(d){return d.hs()},
$S:z+80}
C.ecp.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.efK.prototype={
$0(){this.a.rG()},
$S:0}
C.egA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nA()
w.IC()},
$S:0}
C.eeA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nA()
w.IC()},
$S:0}
C.egn.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ego.prototype={
$1(d){return d.b===D.cI},
$S:z+4}
C.egp.prototype={
$1(d){return d.a},
$S:z+22}
C.egq.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aY,A.aL),$.at())},
$S:247}
C.egr.prototype={
$0(){return B.k5(!0,null,!0,!0,null,null,!1)},
$S:604}
C.ebO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.egB.prototype={
$0(){},
$S:0}
C.edJ.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ws()
w.IC()},
$S:0}
C.ebM.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.ws()},
$S:0}
C.ebN.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.ws()},
$S:0}
C.ee5.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ee6.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ws()
w.IC()
w.z="Home"},
$S:0}
C.ee7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.edI.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.R5,w,w,!0,w,w,new C.edH(d),w,w)],x.p),w,w,w,D.eTf,w,w,w,w,D.eC8,w)},
$S:19}
C.edH.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.edF.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.R5,w,w,!0,w,w,new C.edE(d),w,w)],x.p),w,w,w,D.eFP,w,w,w,w,D.eDM,w)},
$S:19}
C.edE.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.edG.prototype={
$0(){},
$S:0}
C.ecY.prototype={
$1(d){return this.a.aVx(C.bxD(d))},
$S:z+7}
C.ecZ.prototype={
$1(d){return this.a.abV(C.bxD(d))},
$S:z+7}
C.edP.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eTj,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.NG(A.uq,D.ar5,"HATI YA KUHOWA","Hati ya mahari",new C.edK(d),w),A.T,new C.NG(A.fQ,D.cKP,"HATI YA KUHOWESHA","Hati ya kupokea",new C.edL(d),w),A.T,new C.NG(A.hJ,D.cxR,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.edM(d),w),A.T,new C.NG(A.hK,D.cwj,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.edN(d),w)],v)
if(this.a.ga8F())A.d.v(u,B.a([A.T,new C.NG(A.iG,D.chD,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.edO(d),w)],v))
return B.br(!0,B.cf(B.u(u,A.ah,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.ws,w,w,A.af),!0,!1,A.ag,!0,!0)},
$S:33}
C.edK.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhowa")
return null},
$S:0}
C.edL.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhoweya")
return null},
$S:0}
C.edM.prototype={
$0(){B.a7(this.a,!1).K("marriage_agreement")
return null},
$S:0}
C.edN.prototype={
$0(){B.a7(this.a,!1).K("hati_malipo_awamu")
return null},
$S:0}
C.edO.prototype={
$0(){B.a7(this.a,!1).K("hati_kiapo_uongozi")
return null},
$S:0}
C.edQ.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ws()},
$S:0}
C.ebQ.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ebR.prototype={
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
C.ee0.prototype={
$1(d){return d.b===D.l2},
$S:z+4}
C.ee1.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.eh(new C.edZ(w,this.a,v),null)},
$S:21}
C.edZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ee_(p,o,a3,n),l=B.K(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.ak,i=l?A.bj:A.bO,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.A(B.a([B.C(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bw,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.cu,j,q,q,q,q),q,q,q,new C.edV(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Au[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdx(t,u.b,p.a===t,i,k,new C.edW(v,m),q))}a1=B.cd(A.bH,a1,A.by,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ap[w]
s.a=null
t=s.a=r.a
u.push(new C.bdw(t,r.b,p.b===t,k,j,new C.edX(s,m),q))}return B.br(!0,B.p(q,B.cf(B.u(B.a([d,A.aS,a0,A.T,a1,A.bv,v,A.T,B.cd(A.bH,u,A.by,12,12),A.bv,new B.a4(1/0,48,B.ex(D.bCd,D.eVx,new C.edY(o,n),B.d9(q,q,q,q,q,q,q,q,q,A.az,q,q,q,q,new B.b5(B.m(16),A.W),D.aQ7,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.af),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rB,D.bgB,q,q,q),!0,!1,A.ag,!0,!0)},
$S:116}
C.ee_.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.edT(w.a,d,e))
w.b.cX(new C.edU(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1684}
C.edT.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.edU.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.edV.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.edW.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.edX.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.edY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F3(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cX(new C.edS(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edS.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ee3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ee4.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.ee2(t.d))
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
s.ws()},
$S:0}
C.ee2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eel.prototype={
$1(d){return d.b===D.cI},
$S:z+4}
C.eem.prototype={
$1(d){return d.w},
$S:z+81}
C.een.prototype={
$2(d,e){return d>e?d:e},
$S:94}
C.eeo.prototype={
$1(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.ak,r=u?A.bj:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bN,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.A(B.a([B.p(v,D.bw9,A.h,v,v,D.aRr,v,38,v,v,v,v,v,38),A.bd,B.C(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.cu,s,v,v,v,v),v,v,v,new C.eei(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dp(1,A.ck,B.hF(v,new C.eej(m,k,w.c,s,w.d,t,r),k.length,A.hb,v,A.af,new C.eek(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aV(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rB,A.Vh,v,v,v),!0,!1,A.ag,!0,!0)},
$S:33}
C.eei.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eek.prototype={
$2(d,e){return A.aa},
$S:36}
C.eej.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.az:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cp
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bz8,q,q,q,new C.eeg(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.B(D.biM,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b2(4,B.m(16),A.W),q,A.eF,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b2(4,B.m(16),D.aPN),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ad,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eeh(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1685}
C.eeg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hNx(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o4(q.a,o,n,s)
r.bG(0,new B.bb(m,B.h1(A.bn,o+s.length),A.aL))
l.afV(k,m)
l.oz()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeh.prototype={
$1(d){var w=this.a
w.afV(this.b.a,d)
w.oz()},
$S:2}
C.eep.prototype={
$0(){},
$S:0}
C.edR.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ec6.prototype={
$0(){},
$S:0}
C.ec7.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h1q(this.b,w,!0)
w=this.a
w.r=null
w.ws()},
$S:0}
C.ec8.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ec9.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.ec5(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ws()},
$S:0}
C.ec5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eev.prototype={
$1(d){return B.p7(new C.eeu(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:130}
C.eeu.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.B(E.adn,B.u(B.a([D.eR5,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.C(B.ig(!0,w,e,A.z,D.eg6,new C.eet(this.a,this.b),20,A.rF,w,A.af,!1),1)],v),A.ah,w,A.e,A.j,0,A.p)},
$S:400}
C.eet.prototype={
$2(d,e){var w=null,v=D.F4[e],u=C.hjI(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fu,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bq,B.p(w,D.eaJ,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nl,w,w,w)],m))
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b9,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a8(A.a_,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ees(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.ees.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c82(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a7(s,!1).K(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eew.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ws()},
$S:0}
C.eaL.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m4,"","","",D.d7),s=this.b
C.c8f(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B1){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ec4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.m(0,"id",C.cx())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iN
$.iN=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.fPT(q));++v.f},
$S:0}
C.ec2.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eeE.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ebZ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.d,new C.ebY(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ebY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eeD.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.N(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ebP.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aY,A.aL),$.at())},
$S:247}
C.ecq.prototype={
$0(){return B.k5(!0,null,!0,!0,null,null,!1)},
$S:604}
C.egl.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.egm.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.apN(w).ft()
v=u.Ux(w)
v.srm(B.h1(A.bn,v.a.a.length))},
$S:8}
C.efL.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Vs(v)
if(u!=null&&u.b===D.cI)w.Ux(u).saR(0,u.r)}else w.w=null},
$S:0}
C.eaM.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bf,!1,v.gpy().e.l(),A.ay,"",4280640491,24,A.bh,A.a1,"",0.22,w,null,"","",0,!1,"",0,D.b7,4280172719,2,"Tap to edit text",0,0,"",D.ca,D.cI,0.7,0.15,0.2)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eaJ.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bf,!1,4279310375,A.ay,"",v.gpy().c.j(0.25).l(),24,A.bh,A.a1,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpy().c.l(),2,"",0,0,"",D.ca,D.eQ,0.25,0.3,0.3)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eaz.prototype={
$0(){var w=C.eg(A.bf,!1,4279310375,A.ay,"",4280640491,24,A.bh,A.a1,"",0.55,C.cx(),this.b,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l2,0.6,0.2,0.18),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eaw.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bHS],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagv().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,D.btX,r,r,r,r,new C.eav(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.Z,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cQ(q,r,r,r,r,A.af,!0),!0,!1,A.ag,!0,!0)},
$S:33}
C.eav.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eax.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cx(),u=this.b,t=A.Q.aj(u.ad(),null),s=C.eg(A.bf,!1,4279310375,A.ay,u.b,4280640491,24,A.bh,A.a1,"",0.86,v,null,"","",0,!1,"",0,D.b7,4280172719,2,t,0,0,"",D.ca,D.a1c,w,0.5-w/2,0.07)
t=this.a
A.d.G(t.gdk().z,s)
t.r=s.a},
$S:0}
C.ec0.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ec1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.gdk().z,new C.ec_(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.at()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ec_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ebd.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cI)s.Q=t.c.l()
else if(w===D.eQ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ebe(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ebe.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ebi.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ebj(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ebj.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ebg.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cI){s.Q=t.c
return}w=new C.ebh(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ebh.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.hY(w,new C.ebf()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ebf.prototype={
$1(d){return d.b===D.cI},
$S:z+4}
C.ebc.prototype={
$0(){return C.c8f(this.b,this.c,this.a.gpy())},
$S:0}
C.eef.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.egu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egv.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.egw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egx.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.be(s,new C.egt(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQo()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.ws()
t.IC()}},
$S:0}
C.egt.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eg0.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8J(),s=w.b,r=u.a8K(A.eT,A.k_,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bv,B.p(v,B.A(B.a([B.C(u.aQa(w.c,A.ak),1),new B.B(A.fi,B.p(v,D.bu2,A.h,v,v,new B.o(A.eT.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.C(u.aQa(s,A.eT),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aE,A.w,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bv,u.aQd(A.eT,d,D.bq5,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bQc(A.b3,d,A.rS,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aQb(d,"Not now"))
return new C.I8(B.u(p,A.ah,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.eg_.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.I8(B.u(B.a([v.a8J(),A.P,v.a8K(A.b3,D.bpM,"Pick which saved document should receive the details.","Choose "+this.b),A.aS,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bN,x.w).w.a.b*0.42),B.hF(w,new C.efY(v,u,d),u.length,w,w,A.af,new C.efZ(),!0),w),A.aA,v.aQb(d,"Cancel")],x.p),A.ah,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.efZ.prototype={
$2(d,e){return A.T},
$S:36}
C.efY.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ai_,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bF6,A.n),w,42,w,w,w,w,w,42),A.bd,B.C(B.u(B.a([B.d(v.b,w,1,A.Z,w,w,w,A.mS,w,w,w),A.dd,B.d("Updated "+this.a.O5(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.em,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efX(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.efX.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.efU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a8J()
t=t.a8K(A.b_,A.t_,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.I8(B.u(B.a([s,A.P,t,A.bv,B.A(B.a([B.C(B.dU(A.a4y,new C.efS(d),B.d9(u,u,u,u,u,u,u,u,u,A.c,u,u,A.c9,u,new B.b5(B.m(14),A.W),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.C(B.bJ(D.eEj,new C.efT(d),B.bk(A.eT,u,u,u,A.c,u,A.c9,u,new B.b5(B.m(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ah,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.efS.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.efT.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.efW.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8J(),s=w.b,r=u.a8K(A.aR,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.C(u.ar5("Names",""+w.c),1),A.ab,B.C(u.ar5("Fields",""+w.d),1),A.ab,B.C(u.ar5("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bg,v,v,v,A.c,v,A.wi,v,new B.b5(B.m(14),A.W),v,v,v)
return new C.I8(B.u(B.a([t,A.P,r,A.aS,p,A.bv,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.mR,v,v,v),new C.efV(d),o),A.T,u.aQc(d,"Stay here",!1)],q),A.ah,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.efV.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.ecU.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.ecT.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.efM.prototype={
$1(d){return d.b===D.cI},
$S:z+4}
C.egk.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yj(A.d.dP(w.d,new C.egi(v),new C.egj(v)).hs(),w.f,null)},
$S:z+83}
C.egi.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egj.prototype={
$0(){return this.a},
$S:z+84}
C.eaE.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.B(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hi,w,w,w),w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bvK,w,w,w,w,new C.eaC(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eCr,w,w,w)],x.p)
if(v>1)t.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bwT,w,w,w,w,new C.eaD(d),!1,w,w,w,w,w,D.eWE,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eaC.prototype={
$0(){B.a7(this.a,!1).K("scroll")
return null},
$S:0}
C.eaD.prototype={
$0(){B.a7(this.a,!1).K("split")
return null},
$S:0}
C.eaF.prototype={
$0(){var w=this.b,v=w.c,u=C.eg(A.bf,!1,4279310375,A.ay,v,4280640491,24,A.bh,A.a1,"",0.84,C.cx(),w.b,"","",0,!1,"",0,D.b7,4280172719,2,v,0,0,"",D.ca,D.P5,0.88,0.06,0.08)
v=this.a
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eaG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iN
$.iN=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iN
$.iN=k+1
m.push(new C.ew(""+1000*l+"_"+k,D.P5,0.04,0.06,0.92,0.88,v,24,A.a1,A.bh,A.ay,4279310375,A.bf,u,D.b7,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ca,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.ll(""+1000*p+"_"+o,r+n,"",D.pk,4294967295,null,D.d7,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eaK.prototype={
$0(){var w,v=C.cx(),u=this.a,t=u.e
t=(t==null?null:C.kf(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eg(A.bf,!1,4279310375,A.ay,t,4280640491,24,A.bh,A.a1,"",0.22,v,this.b.a,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.kA,0.35,0.55,0.62)
A.d.G(u.gdk().z,w)
u.r=w.a},
$S:0}
C.eaB.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aY9(o)
w=C.cx()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eg(A.bf,!1,4279310375,A.ay,"marriage_sign_placed_"+A.a.e0(v.db,"marriage_sign_",""),4280640491,24,A.bh,A.a1,"",r,w,o.a,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.kA,s,u,t)
A.d.G(p.gdk().z,q)
A.d.bk(p.gdk().z,new C.eaA(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.hHM(p)}},
$S:0}
C.eaA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eeB.prototype={
$0(){var w=this.a,v=this.b
w.aY9(v)
this.c.at=v.a
w.r=null},
$S:0}
C.egs.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ecX.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bk(r.z,new C.ecW())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ecW.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ebm.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ebn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rG()},
$S:8}
C.eay.prototype={
$0(){var w=C.eg(A.bf,!1,4279310375,A.ay,"HD Photo",4280640491,24,A.bh,A.a1,"",0.8,C.cx(),this.b,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l2,0.8,0.1,0.1),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eco.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eaH.prototype={
$0(){var w=this.a,v=this.b
A.d.G(w.gdk().z,v)
w.r=v.a},
$S:0}
C.eaQ.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eaR.prototype={
$0(){var w=this.b.hs(),v=C.cx(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eg(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.G(t.gdk().z,f)
t.r=f.a},
$S:0}
C.eaS.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.eaP(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.eaP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eb2.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.eaO(v))
if(u>0){A.d.cu(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.eaO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eb5.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.eb6.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eb7.prototype={
$0(){return this.a.as=A.dO},
$S:0}
C.eb8.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eb9.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eba.prototype={
$1(d){return d.b===D.cI},
$S:z+4}
C.ebb.prototype={
$1(d){return d.length!==0},
$S:3}
C.eaT.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.BB(w.gpy().c.j(0.18).l(),0.1,u,D.b7,0,2,1,0,0))
u=w.gdk().z
v=C.cx()
A.d.G(u,C.iI(A.bf,!1,w.gpy().d.l(),A.ay,18,A.bh,A.I,0.07,v,"Document Header",0,D.d7,0.9,0.05,0.02))},
$S:0}
C.eaU.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cx()
A.d.G(u,C.BB(v.gpy().c.j(0.12).l(),0.1,t,D.b7,0,2,1,0,0.9))
t=v.gdk().z
u=C.cx()
w=C.byh()
A.d.G(t,C.iI(A.L,!1,v.gpy().e.l(),A.ay,12,A.bh,A.a1,0.06,u,"Footer \xb7 "+w,0,D.d7,0.9,0.05,0.92))},
$S:0}
C.eaV.prototype={
$0(){A.d.G(this.a.gdk().z,C.BB(1727914055,0.12,C.cx(),D.b7,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eaW.prototype={
$0(){var w=4279310375
A.d.G(this.a.gdk().z,C.BB(w,0.08,C.cx(),D.b7,w,2,0.5,0.2,0.4))},
$S:0}
C.eaX.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.BB(w.gpy().c.j(0.35).l(),0.12,u,D.B2,4280640491,2,0.2,0.15,0.55))
A.d.G(w.gdk().z,C.iI(A.bf,!1,4279310375,A.ay,18,A.bh,A.a1,0.15,C.cx(),"Important note",0,D.pl,0.5,0.38,0.52))},
$S:0}
C.eaY.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.BB(4294507260,0.78,C.cx(),D.b7,4291548641,1.5,0.84,0.08,0.1))
A.d.G(w.gdk().z,C.iI(A.bf,!1,4279179050,A.ay,16,A.bh,A.a1,0.7,C.cx(),"MEMO\n\nTo:\nFrom:\nDate: "+C.byh()+"\n\nSubject:\n\nBody text\u2026",0,D.d7,0.76,0.12,0.14))},
$S:0}
C.eaZ.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.BB(4294897802,0.28,C.cx(),D.b7,4294626325,2,0.3,0.62,0.12))
A.d.G(w.gdk().z,C.iI(A.bf,!1,4285611794,A.ay,15,A.bh,A.a1,0.24,C.cx(),"Sticky note",0,D.aAi,0.26,0.64,0.14))},
$S:0}
C.eb_.prototype={
$0(){var w=4280640491,v=this.a
A.d.G(v.gdk().z,C.BB(4293060848,0.04,C.cx(),D.b7,4291548641,2,0.8,0.1,0.48))
A.d.G(v.gdk().z,C.BB(w,0.04,C.cx(),D.b7,w,2,0.55,0.1,0.48))},
$S:0}
C.eb0.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.iI(A.bf,!1,w,A.ay,18,A.bh,A.a1,0.62,C.cx(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.FZ,0.42,0.06,0.18))
A.d.G(v.gdk().z,C.iI(A.bf,!1,w,A.ay,18,A.bh,A.a1,0.62,C.cx(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.te,0.42,0.52,0.18))},
$S:0}
C.eb1.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.BB(858088427,0.62,C.cx(),D.b7,4280640491,2,0.42,0.05,0.18))
A.d.G(v.gdk().z,C.BB(856004201,0.62,C.cx(),D.b7,4278556265,2,0.42,0.53,0.18))
A.d.G(v.gdk().z,C.iI(A.bf,!1,w,A.ay,20,A.bh,A.I,0.1,C.cx(),"Option A",0,D.d7,0.36,0.08,0.2))
A.d.G(v.gdk().z,C.iI(A.bf,!1,w,A.ay,20,A.bh,A.I,0.1,C.cx(),"Option B",0,D.d7,0.36,0.56,0.2))},
$S:0}
C.eb3.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.BB(4294967295,0.36,C.cx(),D.b7,w,2,0.24,0.38,0.28))
A.d.G(v.gdk().z,C.iI(A.L,!1,w,A.ay,14,A.bh,A.a1,0.12,C.cx(),"[ QR CODE ]",0,D.d7,0.24,0.38,0.4))},
$S:0}
C.eb4.prototype={
$0(){return C.c8f(this.b,D.P6,this.a.gpy())},
$S:0}
C.ecn.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2P.q(0,d),t=this.a
return t.b20(d,v===d,A.aW,this.c,new C.ecm(t,u,d,w),u)},
$S:z+25}
C.ecm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nt(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bz2(r,new C.ecl(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecl.prototype={
$0(){return this.a.cX(new C.eck(this.b,this.c))},
$S:0}
C.eck.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eaI.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m4,"","","",D.d7),s=this.b
C.c8f(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B1){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ebq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hNA(p,q.d,s,new C.ebp(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rG(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebp.prototype={
$1(d){return this.bef(d)},
bef(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.ebo(t,d))
w=2
return B.b(t.rG(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+86}
C.ebo.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.ebr.prototype={
$0(){return this.a.bBy()},
$S:0}
C.ebs.prototype={
$0(){return this.a.aLD("Class Presentation",!0)},
$S:0}
C.ebt.prototype={
$1(d){return this.a.bCt(d.b,this.b,d.a)},
$S:z+87}
C.ec3.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bN,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eee.prototype={
$1(d){return new B.B(new B.L(0,0,0,B.aG(d,A.en,x.w).w.f.d),new B.eh(new C.eed(this.a,this.b),null),null)},
$S:60}
C.eed.prototype={
$2(d,e){return B.p7(new C.eec(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1687}
C.eec.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.T,r,new B.B(A.acP,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b9,B.bF(!1,A.yi,v,v,!0,v,v,new C.eea(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.C(B.cQ(B.a([p.aOe(u,!0,!0,new C.eeb(p,w.d))],q),e,D.beu,v,v,A.af,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kh,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.eea.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeb.prototype={
$0(){this.b.$1(new C.ee8())
var w=this.a
if(w.c!=null)w.n(new C.ee9())},
$S:0}
C.ee8.prototype={
$0(){},
$S:0}
C.ee9.prototype={
$0(){},
$S:0}
C.efN.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.efO.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,new C.avK(this.a,null),0.94+w*0.06,null,null),w)},
$S:402}
C.efP.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.efQ.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,new C.b8W(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:402}
C.efR.prototype={
$0(){return A.d.cj(this.a.d,0,C.TR(this.b))},
$S:0}
C.eaN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dF.aq(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.72)],t):B.a([A.c.j(0.88),A.oJ.j(0.75)],t)
r=B.H(A.bc.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bc.j(0.35+q),A.cf.j(0.18),A.K],t)
q=B.H(A.bc.j(0.45+q),A.r,1)
t=B.p(p,B.V(Y.WY,u?A.al:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.B,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.th(A.fe,B.p(p,B.u(B.a([t,A.aA,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aE,A.w,s,p,p),A.n),p,p,p,p,A.el,p,p,1/0),14,!1),A.ap)},
$S:589}
C.ebS.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ebT.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebU.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.jZ
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Xy:A.zX}return w},
$S:583}
C.ebX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dF.aq(0,A.k.J(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.mj.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kf(v.w)?A.uq:A.p7,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a8(A.a_,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O5(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O5(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O5(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O5(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O5(v.f)
r=k.bCr(n,A.d.gI(r),t)
return B.p(l,B.bu(j,new B.a5A(B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,B.p(l,B.dJ(!1,A.JK,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.no,t?A.aB:A.bP,l,l,l,l),l,l,l,new C.ebV(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aE,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ebW(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.h,l,l,l,l,l,l,A.d6,l,l,l,l)},
$S:88}
C.ebW.prototype={
$0(){return this.a.abV(this.b)},
$S:0}
C.ebV.prototype={
$0(){return this.a.zL(this.b,this.c)},
$S:0}
C.edn.prototype={
$0(){var w=this.a
w.b0C()
w.n(new C.edm())},
$S:0}
C.edm.prototype={
$0(){},
$S:0}
C.edo.prototype={
$1(d){return this.a.afV(this.b.a,d)},
$S:2}
C.edp.prototype={
$0(){this.a.cX(new C.edl(this.b))},
$S:0}
C.edl.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.edq.prototype={
$0(){this.a.cX(new C.edk(this.b))},
$S:0}
C.edk.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bh:A.cF},
$S:0}
C.edr.prototype={
$0(){this.a.cX(new C.edj(this.b))},
$S:0}
C.edj.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m9},
$S:0}
C.eds.prototype={
$0(){this.a.cX(new C.edi(this.b))},
$S:0}
C.edi.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.edt.prototype={
$0(){var w=this.a
w.cX(new C.edh(w,this.b))},
$S:0}
C.edh.prototype={
$0(){var w=this.b
return w.as=this.a.bWG(w.as)},
$S:0}
C.edu.prototype={
$0(){return this.a.cX(new C.edg(this.b))},
$S:0}
C.edg.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edv.prototype={
$0(){return this.a.cX(new C.edf(this.b))},
$S:0}
C.edf.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ed8.prototype={
$0(){return this.a.a_C(this.b.a)},
$S:0}
C.ed9.prototype={
$0(){this.a.Yf()
return null},
$S:0}
C.eda.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bN,x.w).w.a.a<900)w.acd()
else w.n(new C.ed7(w))},
$S:0}
C.ed7.prototype={
$0(){return this.a.as=!0},
$S:0}
C.edb.prototype={
$0(){this.a.cX(new C.ed6(this.b))},
$S:0}
C.ed6.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.edc.prototype={
$0(){return this.a.cX(new C.ed5(this.b))},
$S:0}
C.ed5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edd.prototype={
$0(){return this.a.cX(new C.ed4(this.b))},
$S:0}
C.ed4.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ede.prototype={
$0(){return this.a.avK(null)},
$S:0}
C.ecg.prototype={
$0(){this.a.Ci()
return null},
$S:0}
C.ech.prototype={
$0(){this.a.a7i()
return null},
$S:0}
C.ecj.prototype={
$1(d){return this.beg(d)},
beg(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Is(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c1(A.aG,new C.ecb(r),q,!0,!0,!1,null,!1,!1,x.r),$async$$1)
case 11:p=f
if(p!=null)s.cX(new C.ecc(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ecd(r))
s=s.c.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ece(r))
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
return B.b(C.h2x(q,new C.D6(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cX(new C.ecf(r,p))
s=s.c.F(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aeg(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.ecb.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dMN],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bvR:r
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eca(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eca.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.ecc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecd.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ece.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ecf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eci.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yC(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yC(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yC(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aeg(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dQz,q,v,u,B.yC(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:127}
C.egy.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bye(w,v)}},
$S:0}
C.egz.prototype={
$0(){this.a.Ci()
return null},
$S:0}
C.edy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bF1:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aP:A.bA
return new B.B(A.hb,B.aJ(u,B.de(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.ll,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.edx(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:129}
C.edx.prototype={
$0(){var w=this.a
return w.n(new C.edw(w,this.b))},
$S:0}
C.edw.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.edz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_j:E.ara
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbFJ():t.gbBT()
return B.hJ(B.aJ(u,B.p(u,D.aht,A.h,u,u,new B.o(u,u,u,u,B.a([new B.a9(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a_,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1690}
C.edA.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hMR(v,w.a.c)},
$S:0}
C.eeX.prototype={
$0(){return this.b.uj(this.a.a)},
$S:0}
C.eeY.prototype={
$0(){return this.a.uj(D.m4)},
$S:0}
C.eeZ.prototype={
$0(){return this.a.uj(D.FX)},
$S:0}
C.ef9.prototype={
$0(){return this.a.uj(D.FY)},
$S:0}
C.efk.prototype={
$0(){return this.a.uj(D.FW)},
$S:0}
C.efv.prototype={
$0(){return this.a.pk("lab_report")},
$S:0}
C.efC.prototype={
$0(){return this.a.pk("rubric")},
$S:0}
C.efD.prototype={
$0(){return this.a.pk("minutes")},
$S:0}
C.efE.prototype={
$0(){return this.a.pk("agenda")},
$S:0}
C.efF.prototype={
$0(){return this.a.pk("timeline")},
$S:0}
C.efG.prototype={
$0(){return this.a.pk(this.b.a)},
$S:0}
C.ef_.prototype={
$0(){this.a.TJ()
return null},
$S:0}
C.ef0.prototype={
$0(){this.a.TD()
return null},
$S:0}
C.ef1.prototype={
$0(){return this.a.pk("table")},
$S:0}
C.ef2.prototype={
$0(){return this.a.pk("sticky")},
$S:0}
C.ef3.prototype={
$0(){return this.a.pk("divider")},
$S:0}
C.ef4.prototype={
$0(){return this.a.pk("header_bar")},
$S:0}
C.ef5.prototype={
$0(){return this.a.oj(D.b7)},
$S:0}
C.ef6.prototype={
$0(){return this.a.oj(D.ex)},
$S:0}
C.ef7.prototype={
$0(){return this.a.oj(D.jk)},
$S:0}
C.ef8.prototype={
$0(){return this.a.oj(D.B2)},
$S:0}
C.efa.prototype={
$0(){return this.a.oj(D.jl)},
$S:0}
C.efb.prototype={
$0(){return this.a.oj(D.kB)},
$S:0}
C.efc.prototype={
$0(){return this.a.oj(D.fb)},
$S:0}
C.efd.prototype={
$0(){this.a.FT()
return null},
$S:0}
C.efe.prototype={
$0(){this.a.LG()
return null},
$S:0}
C.eff.prototype={
$0(){return this.a.pk("quote")},
$S:0}
C.efg.prototype={
$0(){return this.a.a5v()},
$S:0}
C.efh.prototype={
$0(){this.a.Yk()
return null},
$S:0}
C.efi.prototype={
$0(){var w=this.a
return w.n(new C.eeN(w))},
$S:0}
C.eeN.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.efj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nt(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.eeV(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.efl.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jj()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2Q.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.be
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a8(A.a_,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a2Q.q(0,q))u.push(B.an(s,B.p(s,D.Lp,A.h,s,s,D.Cg,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.B(A.hb,B.aJ(s,B.hJ(new B.am(A.V,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eeU(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+88}
C.eeU.prototype={
$0(){this.a.a5N(this.b)
return null},
$S:0}
C.efm.prototype={
$0(){this.a.a5M(this.b)
return null},
$S:0}
C.efn.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hjJ(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bg:A.be
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qR(4294967295,r,0,0,r,"preview_"+w,D.pk,"","","",D.d7)
C.h_v(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h0P(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.ai0,A.h,r,r,D.Cg,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.B(A.kS,B.aJ(r,B.u(B.a([new B.am(A.V,r,A.a9,A.q,u,r),A.dd,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eeT(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+89}
C.eeT.prototype={
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
return B.b(s.nt(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cX(new C.eeJ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeJ.prototype={
$0(){return C.h_v(this.a,this.b.a)},
$S:0}
C.eeW.prototype={
beh(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2P.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nt(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.beh(d,e)},
$S:z+90}
C.efH.prototype={
$4(d,e,f,g){var w=null,v=B.R(d).k("I<1,r>")
v=B.z(new B.I(d,new C.efJ(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.cf(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ)},
$S:z+91}
C.efJ.prototype={
$1(d){var w=this
return w.a.b20(d,w.b===d,w.c,w.d,new C.efI(w.e,d),!D.a2P.q(0,d))},
$S:z+25}
C.efI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.efo.prototype={
$1(d){this.b.$2(d,new C.eeS(this.a,d,this.c))
return null},
$S:z+26}
C.eeS.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bz2(u,new C.eeI(v,this.c,w),w)},
$S:0}
C.eeI.prototype={
$0(){return this.a.cX(new C.eeG(this.b,this.c))},
$S:0}
C.eeG.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.efp.prototype={
$1(d){this.b.$2(d,new C.eeR(this.a,d))
return null},
$S:z+26}
C.eeR.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fuN(u,new C.eeH(v,w),w)},
$S:0}
C.eeH.prototype={
$0(){var w=this.a
return w.cX(new C.eeF(w,this.b))},
$S:0}
C.eeF.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.efq.prototype={
$0(){var w=this.a
return w.n(new C.eeQ(w))},
$S:0}
C.eeQ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.efr.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bye(w,v)}},
$S:0}
C.efs.prototype={
$0(){this.a.GF()
return null},
$S:0}
C.eft.prototype={
$0(){return this.a.a5v()},
$S:0}
C.efu.prototype={
$0(){var w=this.a,v=w.jj()
if(v!=null&&v.b===D.cI)w.cX(new C.eeP(v))},
$S:0}
C.eeP.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.efw.prototype={
$0(){this.a.Ci()
return null},
$S:0}
C.efx.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.DU(v,!0)
return null},
$S:0}
C.efy.prototype={
$0(){this.a.cX(new C.eeO(this.b))},
$S:0}
C.eeO.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.efz.prototype={
$0(){this.a.cX(new C.eeM(this.b))},
$S:0}
C.eeM.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bh:A.cF},
$S:0}
C.efA.prototype={
$0(){this.a.cX(new C.eeL(this.b))},
$S:0}
C.eeL.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m9},
$S:0}
C.efB.prototype={
$0(){this.a.cX(new C.eeK(this.b))},
$S:0}
C.eeK.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ebl.prototype={
$1(d){return this.bee(d)},
bee(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nt(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cX(new C.ebk(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:192}
C.ebk.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eg3.prototype={
$0(){var w=this.a
return w.cX(new C.eg2(w,this.b))},
$S:0}
C.eg2.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eg4.prototype={
$0(){var w=this.a
return w.cX(new C.eg1(w,this.b))},
$S:0}
C.eg1.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ect.prototype={
$0(){return this.a.cX(new C.ecs(this.b))},
$S:0}
C.ecs.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ecu.prototype={
$0(){return this.a.cX(new C.ecr(this.b))},
$S:0}
C.ecr.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ed0.prototype={
$1(d){var w=x.gh
w=B.z(new B.I(D.ajF,new C.ed_(),w),w.k("ai.E"))
return w},
$S:z+93}
C.ed_.prototype={
$1(d){var w=null
return B.yC(B.d(d.b,w,w,w,w,w,w,A.lB,w,w,w),48,d,x.fO)},
$S:z+94}
C.egg.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a4(v,w?8:0,null,null)},
$S:36}
C.egf.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jG()?q:new C.egd(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bg
else v=r.d?A.be:A.ct
v=B.H(v,A.r,o?2:1)
u=r.d?A.d3:A.c
t=B.bU(0,C.h0P(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.V,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nC,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adG,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ege(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:74}
C.ege.prototype={
$0(){var w=this.a
return w.n(new C.eg9(w,this.b))},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IC()},
$S:0}
C.egd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c1(null,new C.ega(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.egb(q,s))
q.aN_()}else if(r==="del"){q=t.a
q.n(new C.egc(q,s))
q.aMd()}else if(r==="up")t.a.aYm(s,s-1)
else if(r==="down")t.a.aYm(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ega.prototype={
$1(d){var w=null,v=B.a([B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bxu,w,w,w,w,new C.eg5(d),!1,w,w,w,w,w,w,w,D.eDj,w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bxn,w,w,w,w,new C.eg6(d),!1,w,w,w,w,w,w,w,A.vd,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bwF,w,w,w,w,new C.eg7(d),!1,w,w,w,w,w,w,w,D.eKG,w,w,w))
if(u<this.b.r.length-1)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.byD,w,w,w,w,new C.eg8(d),!1,w,w,w,w,w,w,w,D.eD7,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eg5.prototype={
$0(){B.a7(this.a,!1).K("dup")
return null},
$S:0}
C.eg6.prototype={
$0(){B.a7(this.a,!1).K("del")
return null},
$S:0}
C.eg7.prototype={
$0(){B.a7(this.a,!1).K("up")
return null},
$S:0}
C.eg8.prototype={
$0(){B.a7(this.a,!1).K("down")
return null},
$S:0}
C.egb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.egc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.egh.prototype={
$0(){return this.a.a5v()},
$S:0}
C.ebL.prototype={
$0(){var w=this.a
w.b0C()
w.avK(null)},
$S:0}
C.ebK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aE,A.w,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bQ(A.k9,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.b6),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.I(r,new C.ebJ(this.a,e.b,e.d,q),B.R(r).k("I<1,r>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a1,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bQ(new B.am(A.V,p,A.a9,A.h,s,new B.cv("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.b6)},
$S:392}
C.ebJ.prototype={
$1(d){var w=this
return w.a.bxV(d,w.b,w.c,w.d)},
$S:z+23}
C.eby.prototype={
$0(){var w=this
if(w.b){w.a.LO(w.c)
return}if(w.d){w.a.a5t(w.c)
return}if(w.e){w.a.adx(w.c)
return}if(w.f)w.a.b1c(w.c)},
$S:0}
C.ebz.prototype={
$0(){this.a.LO(this.b)
return null},
$S:0}
C.ebA.prototype={
$0(){return this.a.a_C(this.b.a)},
$S:0}
C.ebB.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ebx(u,d,w.c,w.d))
v.Gj()
v.nA()
v.oz()},
$S:18}
C.ebx.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ebC.prototype={
$1(d){return this.a.afV(this.b.a,d)},
$S:2}
C.ebE.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fG1(w))u.a.LO(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b1c(v)},
$S:0}
C.ebD.prototype={
$0(){return this.a.a_C(this.b.a)},
$S:0}
C.ebF.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ebw(w.b,d,w.c,w.d))
v.Gj()
v.nA()
v.oz()},
$S:18}
C.ebw.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cI)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ebG.prototype={
$1(d){var w=this.a
w.n(new C.ebv(this.b,d))
w.Gj()
w.nA()
w.oz()},
$S:286}
C.ebv.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cI)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ebH.prototype={
$0(){var w=this.a
w.n(new C.ebu(this.b))
w.Gj()
w.nA()
w.oz()},
$S:0}
C.ebu.prototype={
$0(){this.a.r=C.h0k()},
$S:0}
C.ebI.prototype={
$0(){return this.a.a_C(this.b.a)},
$S:0}
C.edC.prototype={
$0(){var w=this.a
return w.n(new C.edB(w))},
$S:0}
C.edB.prototype={
$0(){return this.a.y=!1},
$S:0}
C.edD.prototype={
$1(d){return this.a.csw(this.b.a,d)},
$S:2}
C.ecH.prototype={
$1(d){var w
this.a.cX(d)
w=this.b
if(w!=null)w.$0()},
$S:155}
C.ecI.prototype={
$1(d){return this.a.$1(new C.ecG(this.b,d))},
$S:6}
C.ecG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecJ.prototype={
$1(d){return this.a.$1(new C.ecF(this.b,d))},
$S:6}
C.ecF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ecK.prototype={
$1(d){return this.a.$1(new C.ecE(this.b,d))},
$S:6}
C.ecE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecL.prototype={
$1(d){return this.a.$1(new C.ecD(this.b,d))},
$S:6}
C.ecD.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ecM.prototype={
$1(d){return this.a.$1(new C.ecC(this.b,d))},
$S:6}
C.ecC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ecN.prototype={
$1(d){return this.b.$1(new C.ecB(this.a,this.c))},
$S:9}
C.ecB.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ecO.prototype={
$1(d){return this.b.$1(new C.ecA(this.a,this.c))},
$S:9}
C.ecA.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ecP.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bg:A.cR
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecz(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:389}
C.ecz.prototype={
$0(){return this.a.$1(new C.ecw(this.b,this.c))},
$S:0}
C.ecw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ecQ.prototype={
$1(d){return this.a.$1(new C.ecy(this.b,d))},
$S:1691}
C.ecy.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ecR.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecx(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:389}
C.ecx.prototype={
$0(){return this.a.$1(new C.ecv(this.b,this.c))},
$S:0}
C.ecv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ecS.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a7(w,!1).pH()}else w=!1
if(w){w=v.a.c
w.toString
B.a7(w,!1).eC()}v.a.aoO()},
$S:0}
C.ecV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dF.aq(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.bc,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.t_,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mx,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.X,!0,n,B.aH(!1,m,!0,B.er(new B.a4(48,48,new B.am(A.B,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aE,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:125}
C.eau.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dF.aq(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.bc,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.er(B.u(B.a([B.e4(A.B,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.aa,B.d(q.e,p,p,p,p,p,p,A.jM,A.L,p,p)],x.p),A.m,p,A.b5,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aE,A.w,u,p,p),A.n),p,A.Dx,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:125}
C.eez.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aiR,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ei(B.a([B.bF(!1,A.de,w,w,!0,w,w,new C.eex(d),w,w),B.bJ(A.pA,new C.eey(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eex.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eey.prototype={
$0(){var w=this.b.a.a
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.cUD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dF.aq(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.aq(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.aq(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.a9(w*2,A.G,A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI).j(0.18+w*0.12),A.J,32+w*10),D.a74],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.b4,0.9,A.w,k,0,B.a([A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.B,0.5,A.w,k,0,B.a([m,A.d.gai(C.kf(j.a.c.w)?D.t6:M.mI).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kf(m)?D.t6:M.mI
s=B.a([new B.a9(0,A.G,A.d.gI(C.kf(m)?D.t6:M.mI).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e4(A.B,B.p(k,B.V(C.kf(j.a.c.w)?A.uq:A.p7,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aE,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.B,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fW,B.d(j.a.c.b,k,2,A.Z,k,k,k,D.evX,A.L,k,k),A.au,B.d(j.gcnI(),k,k,k,k,k,k,D.eAm,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gQo()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kf(j.a.c.w)?D.t6:M.mI).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.aa],m))}s.push(new C.I1(A.wK,"Download PDF","pdf",A.db,j.Hu(0),!1,k))
p=j.a.c
if(!p.z||p.gQo()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I1(A.k_,"Transfer to "+C.h0m(p==null?"":p),"transfer_hati",A.aR,j.Hu(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hu(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I1(D.bp6,"Rename presentation","rename",A.cf,n,!1,k),A.ar,new C.I1(A.afg,"Duplicate","duplicate",A.b0,j.Hu(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.I1(A.e4,"Delete presentation","delete",A.aH,j.Hu(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hu(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hu(n)
s.push(B.dO(B.d5(B.bF(!1,E.aKx,k,k,!0,k,k,new C.cUC(d),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,A.as,k,D.bhw,k,k,k,k,k,A.k2,k,k)),n),new B.v(0,(1-p)*8)))
return B.e4(A.B,B.d5(B.aD(!1,A.X,!0,k,B.p(k,B.bu(q,new B.am(A.V,k,A.a9,A.q,B.a([o,new B.B(D.bgG,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.Sp,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cUC.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cUZ.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cV_.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cUA.prototype={
$1(d){var w=this.a
return w.n(new C.cUw(w))},
$S:23}
C.cUw.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cUB.prototype={
$1(d){var w=this.a
return w.n(new C.cUv(w))},
$S:49}
C.cUv.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUz.prototype={
$0(){var w=this.a
return w.n(new C.cUx(w))},
$S:0}
C.cUx.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUy.prototype={
$0(){var w=this.a.a.e
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.ehe.prototype={
$0(){return $.bgk=!$.bgk},
$S:0}
C.eh4.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQ3())u.asy()},
$S:0}
C.ehd.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eh5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eh6.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.asy()},
$S:0}
C.eh0.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eh1.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eh2.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eh3.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.J(w-1+v,v)},
$S:0}
C.ehb.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.B,null,A.aX,A.q,w,null)},
$S:1692}
C.ehc.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hA)return new B.cZ(e,!1,d,null)
w=this.a
return w.clN(w.e,d,e)},
$S:415}
C.eh7.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gt(0))*1.5708)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.eh8.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jw((1-v.gt(0))*1.5708)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.eh9.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gt(0)*0.8)
w.jw(v.gt(0)*0.35)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.eha.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gt(0)*1.2)
return B.fp(A.a7,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.ehf.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWE().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWE().x
t===$&&B.c()
return new C.aYo(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.H0(v.c,t,!0,new B.cv("cine"+u,x.W))},
$S:656}
C.ehh.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bN,x.w).w.a.a*0.55)w.asy()
else w.caK()},
$S:49}
C.ehg.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.flJ.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:416}
C.flS.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ei(B.a([B.bF(!1,A.de,w,w,!0,w,w,new C.flP(d),w,w),B.bF(!1,D.eRn,w,w,!0,w,w,new C.flQ(d,this.b,v),w,w),B.bJ(A.aKO,new C.flR(d,v,this.c),w)],x.p),w,w,L.rl,new B.a4(320,w,t,w),w,w,w,w,D.eSJ,w)},
$S:19}
C.flP.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.flQ.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
C.fGG(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.flR.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
t=u.b
w=2
return B.b(C.aMs(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aLT(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.flI.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c8i.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:479}
C.flO.prototype={
$1(d){return d.ad()},
$S:z+14}
C.eX5.prototype={
$1(d){return C.fGE(C.TR(B.Y(d,x.N,x.z)),this.a)},
$S:z+95}
C.fu2.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.fu3.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,D.f3Z,0.94+w*0.06,null,null),w)},
$S:402}
C.fu4.prototype={
$1(d){var w=this
return new C.TT(w.a,w.b,w.c,w.d,null)},
$S:z+96}
C.egL.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.egH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.egK.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.TU(u,this.b,w.gaJB(),v,null)},
$S:z+98}
C.egI.prototype={
$0(){return this.a.f=!0},
$S:0}
C.egJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.egM.prototype={
$0(){return this.a.f=!0},
$S:0}
C.egN.prototype={
$0(){return this.a.f=!1},
$S:0}
C.egQ.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.egR.prototype={
$0(){var w=this.a
return w.n(new C.egP(w))},
$S:0}
C.egP.prototype={
$0(){return this.a.d="one"},
$S:0}
C.egS.prototype={
$0(){var w=this.a
return w.n(new C.egO(w))},
$S:0}
C.egO.prototype={
$0(){return this.a.d="all"},
$S:0}
C.egT.prototype={
$1(d){return this.a.bCs(d,this.b)},
$S:z+99}
C.egG.prototype={
$0(){var w=this.a
return w.n(new C.egF(w,this.b))},
$S:0}
C.egF.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.egU.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.egV.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.egW.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.egX.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.egY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fB(new B.fu(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.F(x.q).f.P(D.ej4)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eao.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ean())},
$S:0}
C.ean.prototype={
$0(){},
$S:0}
C.eap.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:8}
C.eak.prototype={
$1(d){return this.a.n(new C.eaj())},
$S:2}
C.eaj.prototype={
$0(){},
$S:0}
C.eal.prototype={
$1(d){return this.a.aUp()},
$S:2}
C.eam.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eh_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.egZ(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.egZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fg4.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.ep(new B.k0(this.c,new C.fg3(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:203}
C.fg3.prototype={
$3(d,e,f){return new C.H0(e,!1,!1,new B.cv(e.a,x.W))},
$S:z+101}
C.fg5.prototype={
$1(d){var w=null
return B.nU(!1,B.as(new C.bqC(this.a,this.b,w),w,w,w),w,x.z)},
$S:301}
C.fg9.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aS.gm3(),$async$$0)
case 3:w=4
return B.b(B.bK(A.oW,null,x.H),$async$$0)
case 4:w=5
return B.b($.aS.gm3(),$async$$0)
case 5:s=$.aS.ae$.x.h(0,t.a)
r=s==null?null:s.gb3()
if(!(r instanceof B.q1))throw B.O("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1695}
C.fga.prototype={
beN(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hk(A.fR),$async$$1)
case 3:r=f
if(r==null)throw B.O("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hC([J.f7(A.dz.gaK(r))],"image/png"))
t.toString
s=Ah.fxO(t)
w=4
return B.b(new B.pv(s,"load",!1,x.ev).gI(0).cJ(0,A.kp),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.beN(d)},
$S:1696}
C.fg6.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:147}
C.fg7.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fA(0)},
$S:147}
C.fg8.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eRt.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.esF,A.L,w,w)},
$S:1697}
C.eRu.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.mO(A.bj,w,A.dM,8,w,e===0?w:e,w),A.ap)},
$S:524}
C.e1h.prototype={
$1(d){this.a.XI()
return null},
$S:14}
C.e1f.prototype={
$0(){return this.a.e=D.bcM},
$S:0}
C.e1g.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bt
return this.b.e=w},
$S:0}
C.caS.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+102}
C.caT.prototype={
$2(d,e){return(d|e)>>>0},
$S:72};(function aliases(){var w=C.aIy.prototype
w.bpd=w.p
w=C.aI1.prototype
w.boG=w.p
w=C.aHO.prototype
w.bor=w.p
w=C.aI0.prototype
w.boF=w.p
w=C.aIw.prototype
w.bpb=w.p
w=C.aJP.prototype
w.bqE=w.p
w=C.aGJ.prototype
w.bnj=w.p
w=C.aIK.prototype
w.bpp=w.p
w=C.aIL.prototype
w.bpq=w.p
w=C.b_3.prototype
w.bk0=w.ayF})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hKR","akM",103)
v(C.aFK.prototype,"gbX0","WL",0)
var r
u(r=C.auy.prototype,"gcn3","cn4",37)
v(r,"gbXL","aas",0)
v(r=C.auu.prototype,"gaTh","CL",3)
v(r,"gbXI","bXJ",3)
v(r,"gasP","wH",0)
v(r,"gasQ","Hd",0)
t(C,"hLf","hhA",104)
v(C.aAw.prototype,"gbZB","bZC",3)
s(C,"hLq",0,null,["$4$paper$photo$request$template"],["fn7"],105,0)
s(C,"hLp",0,null,["$5$doc$history$instruction$photo$template"],["ffM"],106,0)
v(r=C.aAP.prototype,"gc_i","NZ",0)
v(r,"gc_l","ab8",0)
v(r,"gc_k","Xw",0)
v(r,"gaU7","D_",0)
v(r=C.aC9.prototype,"gaUh","O1",0)
v(r,"gcfn","aYs",3)
v(r,"gcoq","awX",82)
v(r,"gbFA","a7m",0)
v(r,"gc_M","zp",0)
v(r=C.aE3.prototype,"gc9y","YN",0)
v(r,"gc9G","YQ",0)
v(r,"gbv3","a5T",0)
v(r,"gc_Q","abg",0)
v(C.aE2.prototype,"gc_R","abh",0)
v(C.aya.prototype,"gbu3","a5G",0)
v(C.awB.prototype,"gc_S","XH",0)
w(C,"hLD","hJy",12)
w(C,"hLB","hGA",12)
w(C,"hLC","hIz",12)
v(r=C.aB4.prototype,"gcrr","crs",3)
v(r,"gcdF","cdG",3)
u(r,"gD5","abV",7)
v(r,"gbzz","ao_",3)
u(r,"gD6","aVx",7)
v(r,"gc1Z","abD",0)
v(r,"gc0Q","abC",0)
v(r,"gc45","abW",0)
v(r,"gbBT","a6Y",0)
v(r,"gc4Y","Yf",0)
v(r,"gc4Z","acc",0)
v(r,"gc5u","acj",0)
v(r,"gc4i","abZ",0)
v(r,"gbFJ","a7q",0)
v(r,"gaMZ","aN_",3)
v(r,"gaMc","aMd",3)
v(r,"gaHX","aHY",3)
v(r,"gaMb","aoO",3)
u(r,"gbuk","bul",79)
v(r,"gawx","b0q",3)
v(r,"gc0S","c0T",3)
v(r,"gbQw","bQx",3)
v(r,"gbEj","bEk",3)
v(r=C.aB7.prototype,"gcqp","cqq",3)
v(r,"gcq4","cq5",3)
t(C,"hLE","hJP",2)
v(r=C.aB5.prototype,"gc_Y","Hw",0)
v(r,"gchg","Ps",0)
v(r,"gc_V","Hv",0)
v(r,"gcsH","a0e",0)
v(r,"gc5F","acq",0)
v(C.aB3.prototype,"gc_Z","aUp",3)
v(r=C.aB6.prototype,"gbGu","a7A",0)
u(r,"gc_W","c_X",100)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nq,C.PR,C.bCE,C.bBo,C.cq4,C.cq2,C.bIw,C.b4G,C.cq3,C.bzZ,C.caM,C.caK,C.caL,C.caJ,C.apO,C.caI,C.bJp,C.nS,C.aBF,C.j9,C.nd,C.a5z,C.yp,C.lj,C.o4,C.lH,C.yr,C.nh,C.a5H,C.aoc,C.aYp,C.e0H,C.kV,C.Df,C.em,C.iL,C.D6,C.wD,C.ew,C.ll,C.hR,C.js,C.a5I,C.acD,C.aYq,C.b_3,C.a0F])
u(B.kw,[C.cxX,C.bTy,C.fbv,C.czs,C.cyP,C.fgM,C.dOI,C.dOH,C.e1k,C.e1j,C.fia,C.eYb,C.eYc,C.c6I,C.c6J,C.c6K,C.eB9,C.eAx,C.eAw,C.eBA,C.eB7,C.eB0,C.eBj,C.eC_,C.f3L,C.eHR,C.eHQ,C.eIj,C.e0K,C.flF,C.dKr,C.frQ,C.fiw,C.c8a,C.c88,C.c8d,C.fj0,C.fj1,C.fj2,C.fj3,C.c7V,C.c7W,C.dxN,C.c7S,C.fj_,C.eP1,C.dID,C.c7L,C.e0q,C.fgD,C.edZ,C.een,C.eek,C.eej,C.eeu,C.eet,C.efZ,C.efY,C.eed,C.eec,C.eaN,C.ebX,C.eeW,C.egg,C.egf,C.ebK,C.ecV,C.eau,C.cUD,C.ehb,C.ehc,C.eh7,C.eh8,C.eh9,C.eha,C.ehf,C.c8i,C.egL,C.egW,C.caT])
u(B.i2,[C.cxY,C.cxZ,C.bJq,C.f9l,C.bTx,C.bTA,C.fol,C.eQ_,C.ePR,C.eQ6,C.eX6,C.eX7,C.fbw,C.fbu,C.fnT,C.f91,C.foI,C.czi,C.czn,C.czp,C.czl,C.czq,C.czj,C.czr,C.cze,C.czb,C.cza,C.czh,C.cyK,C.cyI,C.ffP,C.ffQ,C.f0h,C.fgN,C.fgT,C.f_l,C.c32,C.ffN,C.ffO,C.faT,C.faU,C.fgS,C.fgO,C.fgQ,C.fgR,C.fgP,C.fs7,C.faX,C.faY,C.fb0,C.fb1,C.fb4,C.fb5,C.ftm,C.eYA,C.ftx,C.e4x,C.e4y,C.e4z,C.e4j,C.e4u,C.c6H,C.c6F,C.c6G,C.fgu,C.fgw,C.fgv,C.eYd,C.eYe,C.ftP,C.eC0,C.eBq,C.eBa,C.eBn,C.eAs,C.eAt,C.eAu,C.eAy,C.eAz,C.eBQ,C.eBX,C.eBZ,C.eBz,C.eBB,C.eBF,C.eBG,C.eBH,C.eBL,C.eBC,C.eBD,C.eAK,C.eAL,C.eAM,C.eAN,C.eAO,C.eAP,C.eAQ,C.eAR,C.eAS,C.eA5,C.eA6,C.eA7,C.eA8,C.eAa,C.eAb,C.eAE,C.eAF,C.eAG,C.eAH,C.eAI,C.eAf,C.eAg,C.eAh,C.eAi,C.eB_,C.eBi,C.fdQ,C.fdP,C.c81,C.f3K,C.flB,C.flu,C.flx,C.fju,C.fjv,C.fjw,C.fdX,C.fdW,C.fdV,C.fdT,C.eY8,C.eY9,C.eYa,C.fu0,C.eHT,C.eHU,C.eHN,C.eHH,C.eIc,C.eId,C.eIf,C.eIg,C.eIb,C.fu_,C.eHy,C.f3_,C.e0J,C.flD,C.flE,C.flG,C.flz,C.flA,C.fte,C.dag,C.dam,C.e0I,C.eUI,C.eUK,C.eUJ,C.eUH,C.ff0,C.ff2,C.eWG,C.fl5,C.fl6,C.fl7,C.fli,C.fln,C.flo,C.flp,C.flq,C.flr,C.fls,C.flt,C.fl8,C.fl9,C.fla,C.flb,C.flc,C.fld,C.fle,C.flf,C.flg,C.flh,C.flj,C.flk,C.fll,C.flm,C.fcQ,C.f2N,C.f2M,C.flM,C.dKs,C.dKq,C.eGI,C.c2F,C.c2H,C.frS,C.d_T,C.d_V,C.frR,C.frP,C.ftZ,C.fis,C.d_t,C.fb8,C.fb9,C.c8_,C.c80,C.c7Z,C.c7P,C.c7Q,C.c7M,C.c7N,C.c7O,C.c8g,C.c8b,C.c86,C.c87,C.c89,C.c8c,C.c8e,C.fj4,C.c7U,C.c7X,C.c7Y,C.c83,C.c84,C.flT,C.fl_,C.c7T,C.c7R,C.fiZ,C.f55,C.c7K,C.eEs,C.f7Q,C.egC,C.ed1,C.ed2,C.eeC,C.eeq,C.eer,C.ecp,C.egn,C.ego,C.egp,C.ebO,C.ee5,C.ee7,C.edI,C.edF,C.ecY,C.ecZ,C.edP,C.ebQ,C.ee0,C.ee1,C.ee_,C.ee3,C.ee2,C.eel,C.eem,C.eeo,C.eeh,C.ec8,C.ec5,C.eev,C.ebY,C.egm,C.eaw,C.ec0,C.ec_,C.ebe,C.ebj,C.ebh,C.ebf,C.egu,C.egv,C.egw,C.egt,C.eg0,C.eg_,C.efU,C.efW,C.efM,C.egk,C.egi,C.eaE,C.eaA,C.ecW,C.ebn,C.eaP,C.eaO,C.eba,C.ebb,C.ecn,C.ebp,C.ebt,C.eee,C.efN,C.efO,C.efP,C.efQ,C.ebS,C.ebT,C.ebU,C.edo,C.ecj,C.ecb,C.eci,C.edy,C.edz,C.efl,C.efn,C.efH,C.efJ,C.efo,C.efp,C.ebl,C.ed0,C.ed_,C.ega,C.ebJ,C.ebB,C.ebC,C.ebF,C.ebG,C.edD,C.ecH,C.ecI,C.ecJ,C.ecK,C.ecL,C.ecM,C.ecN,C.ecO,C.ecP,C.ecQ,C.ecR,C.eez,C.cUA,C.cUB,C.ehh,C.flJ,C.flS,C.flI,C.flO,C.eX5,C.fu2,C.fu3,C.fu4,C.egK,C.egT,C.eap,C.eak,C.eal,C.fg4,C.fg3,C.fg5,C.fga,C.fg6,C.fg7,C.eRt,C.eRu,C.e1h,C.caS])
u(B.jk,[C.cy_,C.ePW,C.eQ0,C.eQ1,C.ePX,C.ePY,C.ePZ,C.ePP,C.ePQ,C.ePS,C.ePT,C.eQ5,C.eQ4,C.ePV,C.ePU,C.eQ2,C.eQ3,C.eQ8,C.eQ9,C.eQ7,C.czk,C.czo,C.czm,C.czc,C.czd,C.czf,C.cz8,C.cz9,C.czg,C.cz7,C.cz6,C.cz5,C.cyz,C.cyy,C.cyB,C.cyJ,C.cyC,C.cyA,C.cyE,C.cyF,C.cyG,C.cyD,C.cyH,C.cyL,C.cyM,C.cyN,C.cyO,C.faR,C.faS,C.faP,C.faQ,C.dXj,C.dXh,C.dXi,C.dXk,C.dXl,C.dOG,C.faV,C.faW,C.faZ,C.fb_,C.fb2,C.fb3,C.e1i,C.fiz,C.fiy,C.e4w,C.e4v,C.e4d,C.e4k,C.e4l,C.e4m,C.e4f,C.e4g,C.e4h,C.e4i,C.e4e,C.e4b,C.e4c,C.e4q,C.e4r,C.e4p,C.e4s,C.e4o,C.e4t,C.e4n,C.e4a,C.eAT,C.eBg,C.eAC,C.eAD,C.eAA,C.eAB,C.eBm,C.eBl,C.eBk,C.eBp,C.eBo,C.eAr,C.eAv,C.eAq,C.eAp,C.eAm,C.eAo,C.eAn,C.eBY,C.eBR,C.eBP,C.eBS,C.eBO,C.eBT,C.eBN,C.eBU,C.eBV,C.eBW,C.eBM,C.eBy,C.eBt,C.eBE,C.eBx,C.eBI,C.eBw,C.eBJ,C.eBv,C.eBK,C.eBu,C.eBd,C.eBc,C.eBe,C.eBb,C.eBf,C.eB5,C.eB4,C.eB6,C.eB3,C.eB2,C.eB1,C.eA9,C.eA4,C.eAj,C.eAe,C.eAk,C.eAd,C.eAl,C.eAc,C.eB8,C.eAX,C.eAW,C.eAY,C.eAV,C.eAZ,C.eAU,C.eBh,C.eBs,C.eBr,C.eAJ,C.flw,C.fly,C.flC,C.fdU,C.fgn,C.fgl,C.fgm,C.eHV,C.eHW,C.eHS,C.eHM,C.eHL,C.eHO,C.eHP,C.eHB,C.eHC,C.eHE,C.eHF,C.eHG,C.eHD,C.eHI,C.eI8,C.eI9,C.eI7,C.eIa,C.eI6,C.eI5,C.eI4,C.eIe,C.eI3,C.eI2,C.eI1,C.eIh,C.eI0,C.eIi,C.eI_,C.eHZ,C.eHJ,C.eHK,C.eHY,C.eHX,C.eHu,C.eHv,C.eHw,C.eHx,C.eHt,C.eHz,C.eHA,C.daf,C.dah,C.dak,C.dal,C.daj,C.dai,C.ff1,C.fcR,C.c2G,C.c2I,C.d_M,C.d_R,C.d_S,C.d_Q,C.d_P,C.d_U,C.d_O,C.d_N,C.d_W,C.frO,C.d6f,C.d6g,C.d6h,C.fb6,C.fb7,C.c8h,C.eaq,C.ear,C.eas,C.eat,C.f53,C.f54,C.dIF,C.dIE,C.cY7,C.cY6,C.egE,C.egD,C.ed3,C.efK,C.egA,C.eeA,C.egq,C.egr,C.egB,C.edJ,C.ebM,C.ebN,C.ee6,C.edH,C.edE,C.edG,C.edK,C.edL,C.edM,C.edN,C.edO,C.edQ,C.ebR,C.edT,C.edU,C.edV,C.edW,C.edX,C.edY,C.edS,C.ee4,C.eei,C.eeg,C.eep,C.edR,C.ec6,C.ec7,C.ec9,C.ees,C.eew,C.eaL,C.ec4,C.ec2,C.eeE,C.ebZ,C.eeD,C.ebP,C.ecq,C.egl,C.efL,C.eaM,C.eaJ,C.eaz,C.eav,C.eax,C.ec1,C.ebd,C.ebi,C.ebg,C.ebc,C.eef,C.egx,C.efX,C.efS,C.efT,C.efV,C.ecU,C.ecT,C.egj,C.eaC,C.eaD,C.eaF,C.eaG,C.eaK,C.eaB,C.eeB,C.egs,C.ecX,C.ebm,C.eay,C.eco,C.eaH,C.eaQ,C.eaR,C.eaS,C.eb2,C.eb5,C.eb6,C.eb7,C.eb8,C.eb9,C.eaT,C.eaU,C.eaV,C.eaW,C.eaX,C.eaY,C.eaZ,C.eb_,C.eb0,C.eb1,C.eb3,C.eb4,C.ecm,C.ecl,C.eck,C.eaI,C.ebq,C.ebo,C.ebr,C.ebs,C.ec3,C.eea,C.eeb,C.ee8,C.ee9,C.efR,C.ebW,C.ebV,C.edn,C.edm,C.edp,C.edl,C.edq,C.edk,C.edr,C.edj,C.eds,C.edi,C.edt,C.edh,C.edu,C.edg,C.edv,C.edf,C.ed8,C.ed9,C.eda,C.ed7,C.edb,C.ed6,C.edc,C.ed5,C.edd,C.ed4,C.ede,C.ecg,C.ech,C.eca,C.ecc,C.ecd,C.ece,C.ecf,C.egy,C.egz,C.edx,C.edw,C.edA,C.eeX,C.eeY,C.eeZ,C.ef9,C.efk,C.efv,C.efC,C.efD,C.efE,C.efF,C.efG,C.ef_,C.ef0,C.ef1,C.ef2,C.ef3,C.ef4,C.ef5,C.ef6,C.ef7,C.ef8,C.efa,C.efb,C.efc,C.efd,C.efe,C.eff,C.efg,C.efh,C.efi,C.eeN,C.efj,C.eeV,C.eeU,C.efm,C.eeT,C.eeJ,C.efI,C.eeS,C.eeI,C.eeG,C.eeR,C.eeH,C.eeF,C.efq,C.eeQ,C.efr,C.efs,C.eft,C.efu,C.eeP,C.efw,C.efx,C.efy,C.eeO,C.efz,C.eeM,C.efA,C.eeL,C.efB,C.eeK,C.ebk,C.eg3,C.eg2,C.eg4,C.eg1,C.ect,C.ecs,C.ecu,C.ecr,C.ege,C.eg9,C.egd,C.eg5,C.eg6,C.eg7,C.eg8,C.egb,C.egc,C.egh,C.ebL,C.eby,C.ebz,C.ebA,C.ebx,C.ebE,C.ebD,C.ebw,C.ebv,C.ebH,C.ebu,C.ebI,C.edC,C.edB,C.ecG,C.ecF,C.ecE,C.ecD,C.ecC,C.ecB,C.ecA,C.ecz,C.ecw,C.ecy,C.ecx,C.ecv,C.ecS,C.eex,C.eey,C.cUC,C.cUZ,C.cV_,C.cUw,C.cUv,C.cUz,C.cUx,C.cUy,C.ehe,C.eh4,C.ehd,C.eh5,C.eh6,C.eh0,C.eh1,C.eh2,C.eh3,C.ehg,C.flP,C.flQ,C.flR,C.egH,C.egI,C.egJ,C.egM,C.egN,C.egQ,C.egR,C.egP,C.egS,C.egO,C.egG,C.egF,C.egU,C.egV,C.egX,C.egY,C.eao,C.ean,C.eaj,C.eam,C.eh_,C.egZ,C.fg9,C.fg8,C.e1f,C.e1g])
t(C.aNM,B.E)
u(B.ma,[C.a1B,C.au2,C.asK,C.wB,C.wE,C.kB,C.yc,C.ws,C.qQ,C.v5,C.aoM,C.H1,C.aob,C.tV,C.m4,C.hm,C.a6i])
u(C.bIw,[C.cq5,C.bIx])
u(C.caM,[C.caQ,C.apN])
t(C.caP,C.caK)
t(C.caO,C.caJ)
t(C.caR,C.caO)
t(C.caN,C.caL)
t(C.caH,C.caI)
t(C.b6c,B.oi)
t(C.ck4,B.asc)
t(C.a65,B.wn)
t(C.aS3,B.dC)
t(C.axu,B.ar7)
u(B.ae,[C.ZC,C.Wp,C.Wn,C.anr,C.TH,C.YG,C.Za,C.Z9,C.aAI,C.Xz,C.LB,C.X7,C.Xs,C.alu,C.aFr,C.SW,C.awm,C.a5p,C.M2,C.avK,C.I1,C.Yj,C.TT,C.TU,C.aB2,C.aog,C.a5q])
u(B.ag,[C.aFK,C.auy,C.auu,C.aAw,C.aAP,C.aC9,C.aE3,C.aE2,C.aIy,C.aya,C.aI1,C.awB,C.bc_,C.aHO,C.aJP,C.aI0,C.b9V,C.aIw,C.aIK,C.aGJ,C.b8H,C.aIL,C.aB5,C.bgj,C.aB3,C.aB6,C.bg3])
u(B.ar,[C.auw,C.aaN,C.aac,C.bf8,C.aaQ,C.act,C.aY0,C.bof,C.aYl,C.bhC,C.bmQ,C.aWe,C.aYo,C.aaT,C.abb,C.aYm,C.H0,C.aWh,C.b8W,C.NG,C.I8,C.bdx,C.bdw,C.bqC])
u(B.FB,[C.b8o,C.bpE,C.aG3,C.bb2,C.bnd])
u(B.n4,[C.b8n,C.b4Y,C.bna,C.bbq,C.bdD,C.baw,C.bbn,C.bb4,C.bjN,C.b64,C.b5H,C.bqz,C.bnD,C.bmM,C.bap,C.aYj,C.blM,C.bmJ])
t(C.bg0,C.aIy)
t(C.bfn,C.aI1)
t(C.bfa,C.aHO)
t(C.bq6,C.aJP)
t(C.bfk,C.aI0)
t(C.bfZ,C.aIw)
t(C.bsQ,C.aIK)
t(C.aB4,C.bsQ)
t(C.b8I,C.aGJ)
t(C.aB7,C.aIL)
t(C.bqq,B.j_)
t(C.a6h,B.k9)
t(C.caU,C.b_3)
t(C.afu,C.a0F)
u(B.Vq,[C.aNC,C.aP6])
t(C.atF,C.aNC)
w(C.aIy,B.ca)
w(C.aI1,B.ca)
w(C.aHO,B.ca)
w(C.aI0,B.ca)
w(C.aIw,B.ca)
w(C.aJP,B.ca)
w(C.aGJ,B.eJ)
w(C.aIK,B.ca)
v(C.bsQ,B.eu)
w(C.aIL,B.ca)})()
B.kc(b.typeUniverse,JSON.parse('{"aOl":{"hu":["aOl"]},"nq":{"aOl":[],"hu":["aOl"]},"aNM":{"E":["PR"],"E.E":"PR"},"b6c":{"oi":[]},"a65":{"wn":[],"nM":[]},"aS3":{"dC":[],"cq":[],"r":[]},"axu":{"aP":[],"cY":["aP"],"aN":[],"co":[]},"ZC":{"ae":[],"r":[]},"aFK":{"ag":["ZC"]},"Wp":{"ae":[],"r":[]},"Wn":{"ae":[],"r":[]},"auy":{"ag":["Wp"]},"auu":{"ag":["Wn"]},"auw":{"ar":[],"r":[]},"anr":{"ae":[],"r":[]},"aAw":{"ag":["anr"]},"aaN":{"ar":[],"r":[]},"aac":{"ar":[],"r":[]},"aaQ":{"ar":[],"r":[]},"act":{"ar":[],"r":[]},"bf8":{"ar":[],"r":[]},"TH":{"ae":[],"r":[]},"aAP":{"ag":["TH"]},"aY0":{"ar":[],"r":[]},"b8o":{"az":[]},"b8n":{"az":[]},"bpE":{"az":[]},"b4Y":{"az":[]},"bna":{"az":[]},"YG":{"ae":[],"r":[]},"aC9":{"ag":["YG"]},"bbq":{"az":[]},"Za":{"ae":[],"r":[]},"Z9":{"ae":[],"r":[]},"aAI":{"ae":[],"r":[]},"Xz":{"ae":[],"r":[]},"aE3":{"ag":["Za"]},"aE2":{"ag":["Z9"]},"bg0":{"ag":["aAI"]},"bdD":{"az":[]},"aya":{"ag":["Xz"]},"bof":{"ar":[],"r":[]},"aYl":{"ar":[],"r":[]},"bhC":{"ar":[],"r":[]},"LB":{"ae":[],"r":[]},"X7":{"ae":[],"r":[]},"bfn":{"ag":["LB"]},"bmQ":{"ar":[],"r":[]},"baw":{"az":[]},"aWe":{"ar":[],"r":[]},"awB":{"ag":["X7"]},"Xs":{"ae":[],"r":[]},"bc_":{"ag":["Xs"]},"bbn":{"az":[]},"bb4":{"az":[]},"bjN":{"az":[]},"b64":{"az":[]},"b5H":{"az":[]},"bqz":{"az":[]},"bnD":{"az":[]},"bmM":{"az":[]},"bap":{"az":[]},"alu":{"ae":[],"r":[]},"aYo":{"ar":[],"r":[]},"bfa":{"ag":["alu"]},"aaT":{"ar":[],"r":[]},"abb":{"ar":[],"r":[]},"aFr":{"ae":[],"r":[]},"SW":{"ae":[],"r":[]},"H0":{"ar":[],"r":[]},"awm":{"ae":[],"r":[]},"a5p":{"ae":[],"r":[]},"aYm":{"ar":[],"r":[]},"aYj":{"az":[]},"bq6":{"ag":["aFr"]},"aG3":{"az":[]},"bfk":{"ag":["SW"]},"b9V":{"ag":["awm"]},"bfZ":{"ag":["a5p"]},"aWh":{"ar":[],"r":[]},"bb2":{"az":[]},"blM":{"az":[]},"bmJ":{"az":[]},"avK":{"ae":[],"r":[]},"I1":{"ae":[],"r":[]},"Yj":{"ae":[],"r":[]},"I8":{"ar":[],"r":[]},"M2":{"ae":[],"r":[]},"aB4":{"ag":["M2"],"eu":[]},"b8I":{"ag":["avK"]},"b8W":{"ar":[],"r":[]},"b8H":{"ag":["I1"]},"NG":{"ar":[],"r":[]},"aB7":{"ag":["Yj"]},"bnd":{"az":[]},"bdx":{"ar":[],"r":[]},"bdw":{"ar":[],"r":[]},"TT":{"ae":[],"r":[]},"TU":{"ae":[],"r":[]},"aB2":{"ae":[],"r":[]},"aog":{"ae":[],"r":[]},"aB5":{"ag":["TT"]},"bgj":{"ag":["TU"]},"aB3":{"ag":["aB2"]},"bqq":{"j_":[]},"aB6":{"ag":["aog"]},"bqC":{"ar":[],"r":[]},"a5q":{"ae":[],"r":[]},"bg3":{"ag":["a5q"]},"a6h":{"k9":["fj<eE>"],"jY":["fj<eE>"]},"afu":{"a0F":[]},"aNC":{"iP":[],"f5":[]},"atF":{"iP":[],"f5":[]},"aP6":{"iP":[],"f5":[]}}'))
var y={T:"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n",z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aA
return{bu:w("JT"),U:w("uA<pu>"),bz:w("x"),M:w("fd<n>"),bo:w("jn"),gc:w("au<ik?>"),bq:w("au<~>"),cc:w("a2E"),fS:w("Cw"),an:w("aj5"),bm:w("M<PR>"),X:w("M<afK>"),f3:w("M<aOl>"),aK:w("M<mF>"),V:w("M<a9>"),O:w("M<x>"),fA:w("M<lc>"),d5:w("M<au<bq<G,+icon3d,picture(n?,n?)>>>"),bH:w("M<au<dz>>"),fG:w("M<au<~>>"),aF:w("M<mM>"),cd:w("M<al<j9>>"),ez:w("M<a0<n,aC>>"),d:w("M<a0<n,@>>"),B:w("M<m0>"),h:w("M<j9>"),gE:w("M<yp>"),k:w("M<nS>"),g:w("M<ll>"),D:w("M<hR>"),u:w("M<ew>"),m:w("M<tV>"),i:w("M<hm>"),aC:w("M<a5H>"),o:w("M<yr>"),e3:w("M<aC>"),dN:w("M<v>"),v:w("M<hw>"),cR:w("M<iD>"),J:w("M<iY>"),gx:w("M<oC<n>>"),f2:w("M<+(a_,n)>"),L:w("M<+(n,n)>"),aD:w("M<+data,mimeType(n,n)>"),G:w("M<+(P,P)>"),ek:w("M<+(G,n)>"),n:w("M<+(G,G)>"),S:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),eR:w("M<f5>"),fT:w("M<b4G>"),bx:w("M<aBF>"),gz:w("M<acD>"),x:w("M<P>"),t:w("M<G>"),dS:w("M<az?>"),bA:w("M<v?>"),Z:w("M<G?>"),cA:w("M<ce>"),A:w("cn<ag<ae>>"),gL:w("al<nS>"),R:w("al<hR>"),j:w("al<@>"),bW:w("al<G>"),e:w("bq<G,+icon3d,picture(n?,n?)>"),P:w("a0<n,@>"),f:w("a0<@,@>"),gI:w("a0<G,+icon3d,picture(n?,n?)>"),bR:w("I<hm,r>"),eC:w("I<nh,n>"),cT:w("I<js,B>"),dv:w("I<n,n>"),f0:w("I<n,r>"),gN:w("I<G,p9>"),gh:w("I<m4,jb<m4>>"),w:w("iB"),ei:w("ik"),g2:w("qH"),fB:w("D6"),b6:w("yp"),gX:w("a5z"),ea:w("nS"),bt:w("ll"),I:w("hR"),F:w("ew"),fO:w("m4"),ff:w("tV"),fP:w("hm"),Q:w("v5"),dO:w("aoc"),a:w("cr"),C:w("aC"),dw:w("apO"),di:w("a6i"),Y:w("eE"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DB"),dB:w("du<v>"),bJ:w("du<n>"),_:w("dV<n>"),N:w("n"),fw:w("pu"),bO:w("ao"),K:w("bm<v>"),b:w("bm<P>"),E:w("dz"),W:w("cv<n>"),ac:w("cv<G>"),ex:w("k0<ll>"),cI:w("k0<n>"),cl:w("k0<P>"),b4:w("a3<kV>"),a8:w("a3<lH>"),fR:w("a3<+(n,n)>"),co:w("e2<v>"),l:w("r"),b2:w("bL<~>"),ev:w("pv<dP>"),dT:w("bd<~>"),cQ:w("axu"),q:w("mw"),y:w("S"),gR:w("P"),z:w("@"),r:w("G"),at:w("b7?"),gw:w("al<a0<n,@>>?"),aT:w("al<hR>?"),c:w("al<@>?"),aP:w("ik?"),af:w("hR?"),go:w("aYq?"),a6:w("a5I?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bCc=new B.ac(A.ej,18,A.c,null,null,null)
D.aNw=new B.bE(A.ax,null,null,D.bCc,null)
D.aNF=new B.d4(0,-0.15)
D.aNH=new B.d4(0.62,0)
D.aNK=new B.d4(-0.35,-0.45)
D.aNV=new B.d4(0.9,-0.85)
D.aFV=new B.b3(30,30)
D.aPb=new B.bx(D.aFV,D.aFV,A.fU,A.fU)
D.aPp=new B.ay(A.b0,1,A.r,-1)
D.b65=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPB=new B.ay(D.b65,1,A.r,-1)
D.aPN=new B.ay(A.az,1.5,A.r,-1)
D.aPS=new B.ay(A.b0,1.6,A.r,-1)
D.aQ7=new B.ay(A.az,1.4,A.r,-1)
D.aRr=new B.o(null,null,null,null,null,K.EL,A.a6)
D.bG3=new B.a8(A.a_,A.a7,A.w,G.a_j,null,null)
D.aRz=new B.o(null,null,null,null,null,D.bG3,A.a6)
D.a6W=new B.o(A.aG,null,null,A.pK,null,null,A.n)
D.b1_=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b63=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cC2=w([D.b1_,D.b63],x.O)
D.dRQ=new B.bR(A.B,0.5,A.w,null,0,D.cC2,null,null)
D.aRR=new B.o(null,null,null,null,null,D.dRQ,A.a6)
D.a9F=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQk=new B.c2(N.vC,A.W,A.W,A.W)
D.aRT=new B.o(D.a9F,null,D.aQk,null,null,null,A.n)
D.bHG=new B.a8(A.a_,A.a7,A.w,A.Nx,null,null)
D.aRZ=new B.o(null,null,null,null,null,D.bHG,A.a6)
D.a8e=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aS0=new B.o(D.a8e,null,null,A.r_,null,null,A.n)
D.aS4=new B.o(A.ko,null,null,null,null,null,A.a6)
D.aQq=new B.c2(A.yH,A.W,A.W,A.W)
D.aS7=new B.o(X.a98,null,D.aQq,A.mZ,null,null,A.n)
D.Cg=new B.o(A.e9,null,null,null,null,null,A.a6)
D.aSd=new B.o(null,null,null,null,null,E.uI,A.a6)
D.cGr=w([E.a9P,A.bV],x.O)
D.bHj=new B.a8(A.b4,A.ba,A.w,D.cGr,null,null)
D.aSh=new B.o(null,null,null,A.mZ,null,D.bHj,A.n)
D.cQb=w([A.bg,A.e9,A.j7],x.O)
D.Yw=new B.a8(A.ax,A.aE,A.w,D.cQb,null,null)
D.aSt=new B.o(null,null,null,null,null,D.Yw,A.n)
D.aSu=new B.o(D.a8e,null,null,A.kh,null,null,A.n)
D.c7A=w([A.dH,A.bg],x.O)
D.bHc=new B.a8(A.ax,A.aE,A.w,D.c7A,null,null)
D.aSy=new B.o(null,null,null,null,null,D.bHc,A.n)
D.aSI=new B.o(null,null,null,null,null,G.t1,A.a6)
D.aT_=new B.o(A.a9Q,null,null,null,null,null,A.a6)
D.b1D=new B.x(0.5647058823529412,0,0,0,A.t)
D.a74=new B.a9(0,A.G,D.b1D,A.Ph,28)
D.aUX=new B.aSg()
D.aVv=new C.ck4()
D.aVH=new C.b6c()
D.a7A=new B.cw(A.B,null,null,A.Yl,null)
D.aY3=new B.f9(null,null,null,null,null,E.mp,null,null,null,null)
D.aWd=new B.cw(A.B,null,null,D.aY3,null)
D.bs6=new B.ac(A.dN,28,A.c,null,null,null)
D.aWD=new B.cw(A.B,null,null,D.bs6,null)
D.aY0=new B.f9(2,null,null,null,null,A.bQ,null,null,null,null)
D.aWX=new B.cw(A.B,null,null,D.aY0,null)
D.bsr=new B.ac(K.Lc,40,A.bR,null,null,null)
D.aWY=new B.cw(A.B,null,null,D.bsr,null)
D.aYO=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aYZ=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZk=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZo=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.aZQ=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_5=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_6=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.b_a=new B.x(1,0.2901960784313726,0.17254901960784313,0.058823529411764705,A.t)
D.It=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_t=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_y=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8s=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0c=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b0Q=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8E=new B.x(1,1,1,0.9725490196078431,A.t)
D.b15=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1e=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b1g=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b1p=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1I=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b2U=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Tq=new B.x(0.8509803921568627,0,0,0,A.t)
D.b31=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b37=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9n=new B.x(0.6,0,0,0,A.t)
D.a9p=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b4n=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.ri=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b4J=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b55=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b5o=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aa_=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TJ=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zc=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.IU=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iS=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aan=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.TO=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b84=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b8q=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b8E=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.U2=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.b9A=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.w4=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.b9T=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.ba9=new B.ht(A.be,!0,null,null)
D.eyG=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWw=new B.w("Bio link",null,D.eyG,null,null,null,null,null,null,null,null,null)
D.aWS=new B.cw(A.B,null,null,D.eWw,null)
D.bap=new B.ht(A.SZ,!0,D.aWS,null)
D.Jc=new C.a1B(0,"none")
D.abk=new C.a1B(1,"deflate")
D.abl=new C.a1B(2,"bzip2")
D.bb6=new B.k3(0.165,0.84,0.44,1)
D.cGK=w([A.cl,A.dM,A.az],x.O)
D.bGu=new B.a8(A.ax,A.aE,A.w,D.cGK,null,null)
D.aRw=new B.o(null,null,null,null,null,D.bGu,A.n)
D.bB3=new B.ac(A.eG,null,A.al,null,null,null)
D.aXr=new B.cw(A.B,null,null,D.bB3,null)
D.bbE=new B.ky(D.aRw,A.b6,D.aXr,null)
D.b8g=new B.x(0.058823529411764705,1,1,1,A.t)
D.cJG=w([A.bG,A.pW,A.pW,D.b8g],x.O)
D.cou=w([0,0.32,0.7,1],x.x)
D.bH1=new B.a8(A.ax,A.aE,A.w,D.cJG,D.cou,null)
D.aRk=new B.o(null,null,null,null,null,D.bH1,A.n)
D.bbK=new B.ky(D.aRk,A.b6,null,null)
D.bc_=new B.lU(1,1,null,null,null,A.bj,null)
D.bc2=new B.lU(1,null,null,null,null,D.TO,null)
D.bcw=new B.b7(125e4)
D.bcC=new B.b7(17e4)
D.bcM=new B.b7(35964e8)
D.bcS=new B.b7(55e4)
D.bcW=new B.b7(68e4)
D.bdm=new B.i3(0,0,0,5)
D.bdE=new B.L(0,16,16,0)
D.bdH=new B.L(0,18,0,8)
D.bdN=new B.L(0,36,0,36)
D.bdU=new B.L(0,54,0,0)
D.be0=new B.L(10,0,10,3)
D.bea=new B.i3(10,16,10,10)
D.bej=new B.L(10,6,10,0)
D.bel=new B.L(10,6,4,6)
D.beo=new B.L(10,8,10,6)
D.ace=new B.L(11,8,11,11)
D.bet=new B.L(12,0,12,10)
D.beu=new B.L(12,0,12,24)
D.beG=new B.L(12,12,12,4)
D.beJ=new B.L(12,12,8,12)
D.beX=new B.L(12,8,8,12)
D.bfj=new B.L(14,14,14,0)
D.bfo=new B.L(14,14,14,90)
D.bfG=new B.L(16,10,16,20)
D.ad1=new B.L(16,6,16,28)
D.bgf=new B.L(18,0,18,10)
D.bgh=new B.L(18,0,18,30)
D.bgj=new B.L(18,10,18,12)
D.bgk=new B.L(18,10,18,14)
D.bgB=new B.L(18,16,14,18)
D.bgG=new B.L(18,18,18,12)
D.bgM=new B.L(18,26,18,12)
D.bgR=new B.L(18,34,18,34)
D.bgS=new B.L(18,4,18,14)
D.bgY=new B.L(18,8,18,24)
D.bhe=new B.L(20,16,14,4)
D.bhj=new B.L(20,18,12,4)
D.bho=new B.L(20,20,12,20)
D.bhr=new B.L(20,22,20,20)
D.bhw=new B.L(20,6,20,6)
D.bhG=new B.L(22,18,22,18)
D.bhM=new B.L(22,24,22,0)
D.bhQ=new B.L(22,24,22,4)
D.bhY=new B.L(22,60,22,22)
D.bi3=new B.L(24,24,24,22)
D.bii=new B.L(28,44,28,44)
D.biz=new B.L(32,44,32,44)
D.biH=new B.L(38,30,38,20)
D.biM=new B.L(4,0,0,6)
D.biY=new B.i3(4,4,4,4)
D.bjl=new B.i3(6,5,6,5)
D.bjp=new B.L(6,6,8,6)
D.bjA=new B.L(8,14,8,14)
D.bjB=new B.L(8,22,8,22)
D.bjJ=new B.L(8,6,12,6)
D.bjR=new B.L(8,8,8,4)
D.adS=new B.L(9,9,9,6)
D.bk0=new B.i3(2.5,2.5,2.5,2.5)
D.bk1=new B.L(10.5,0,10.5,0)
D.bk2=new B.L(7,1.5,7,1.5)
D.czm=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bkh=new B.zW(null,null,D.czm,A.yU)
D.cwG=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bki=new B.zW(null,null,D.cwG,A.yU)
D.aKc=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new B.w("WORD DESIGN",null,D.aKc,null,null,null,null,null,null,null,null,null)
D.bkJ=new B.bG(1,A.bp,D.eVV,null)
D.eVA=new B.w("Slides database",null,A6.GV,null,null,null,null,null,null,null,null,null)
D.eT3=new B.w("Admin only \xb7 keep as many as you like",null,U.aJL,null,null,null,null,null,null,null,null,null)
D.cXb=w([D.eVA,A.bw,D.eT3],x.p)
D.baP=new B.fs(A.af,A.e,A.j,A.F,null,A.p,null,0,D.cXb,null)
D.bkM=new B.bG(1,A.bp,D.baP,null)
D.eO1=new B.w("NGMY logo",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.bkP=new B.bG(1,A.bp,D.eO1,null)
D.ewA=new B.F(!0,A.al,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXD=new B.w("TALK TO THE EDITOR",null,D.ewA,null,null,null,null,null,null,null,null,null)
D.bl4=new B.bG(1,A.bp,D.eXD,null)
D.eIi=new B.w("Tell the AI what to change",null,A6.GV,null,null,null,null,null,null,null,null,null)
D.blm=new B.bG(1,A.bp,D.eIi,null)
D.blT=new B.Co(!0,"video/mp4")
D.euW=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGE=new B.w("Move presentations between devices",null,D.euW,null,null,null,!1,null,null,1,null,null)
D.blX=new B.pL(A.e8,A.a_,A.h,D.eGE,null)
D.eHE=new B.w("Edit in Slides",null,A.jM,null,null,null,null,null,null,null,null,null)
D.blY=new B.pL(A.e8,A.B,A.h,D.eHE,null)
D.bmc=new B.dp(1,A.ck,D.blY,null)
D.WL=new B.a_(60988,"MaterialIcons",!1)
D.bnB=new B.a_(61352,"MaterialIcons",!1)
D.afk=new B.a_(61531,"MaterialIcons",!1)
D.boP=new B.a_(63062,"MaterialIcons",!1)
D.boW=new B.a_(63109,"MaterialIcons",!1)
D.bp6=new B.a_(63206,"MaterialIcons",!1)
D.ag0=new B.a_(63238,"MaterialIcons",!1)
D.Xk=new B.a_(63365,"MaterialIcons",!1)
D.Xl=new B.a_(63367,"MaterialIcons",!1)
D.Xm=new B.a_(63368,"MaterialIcons",!1)
D.aga=new B.a_(63384,"MaterialIcons",!1)
D.bpJ=new B.a_(63525,"MaterialIcons",!1)
D.bpM=new B.a_(63568,"MaterialIcons",!1)
D.bq5=new B.a_(983072,"MaterialIcons",!1)
D.bqt=new B.a_(983271,"MaterialIcons",!0)
D.brk=new B.a_(983924,"MaterialIcons",!1)
D.ahi=new B.a_(983965,"MaterialIcons",!1)
D.ahj=new B.a_(983966,"MaterialIcons",!1)
D.bru=new B.a_(984592,"MaterialIcons",!1)
D.brK=new B.ac(A.rO,16,A.aB,null,null,null)
D.brR=new B.ac(A.lX,null,A.c,null,null,null)
D.aht=new B.ac(A.p6,18,A.c,null,null,null)
D.bs7=new B.ac(A.zW,18,O.kM,null,null,null)
D.bsN=new B.ac(A.iY,11,null,null,null,null)
D.bsX=new B.ac(A.X3,null,A.eZ,null,null,null)
D.btw=new B.ac(A.qg,18,A.aB,null,null,null)
D.btB=new B.ac(A_.A7,14,null,null,null,null)
D.btC=new B.ac(A.e4,28,A.cN,null,null,null)
D.btQ=new B.ac(A.p7,20,A.c,null,null,null)
D.btX=new B.ac(A.x0,null,null,null,null,null)
D.bu2=new B.ac(A.jD,18,A.hT,null,null,null)
D.bu7=new B.ac(A.kV,null,null,null,null,null)
D.buA=new B.ac(A.XD,28,A.c,null,null,null)
D.boS=new B.a_(63065,"MaterialIcons",!1)
D.buJ=new B.ac(D.boS,15,A.c,null,null,null)
D.bva=new B.ac(A.un,22,A.bJ,null,null,null)
D.bvu=new B.ac(A.wL,18,null,null,null,null)
D.bvz=new B.ac(A.Ej,12,A.c,null,null,null)
D.br6=new B.a_(983687,"MaterialIcons",!1)
D.bvK=new B.ac(D.br6,null,A.bg,null,null,null)
D.bvR=new B.ac(A.hs,null,A.bg,null,null,null)
D.bw9=new B.ac(A.pb,22,A.c,null,null,null)
D.bwd=new B.ac(A.cu,13,A.c,null,null,null)
D.bwj=new B.ac(A.e4,26,A.aH,null,null,null)
D.bwm=new B.ac(A.qj,26,A.c,null,null,null)
D.Lp=new B.ac(A.iY,8,A.c,null,null,null)
D.bwE=new B.ac(A.p6,40,A.c,null,null,null)
D.bwF=new B.ac(A.bmy,null,null,null,null,null)
D.bwJ=new B.ac(A.rW,20,null,null,null,null)
D.br5=new B.a_(983683,"MaterialIcons",!1)
D.bwT=new B.ac(D.br5,null,A.aW,null,null,null)
D.bwU=new B.ac(A.iY,16,A.bg,null,null,null)
D.bxe=new B.ac(A.uB,null,null,null,null,null)
D.ai_=new B.ac(A.uq,22,A.c,null,null,null)
D.bxi=new B.ac(A.dN,17,A.c,null,null,null)
D.ai0=new B.ac(A.iY,9,A.c,null,null,null)
D.bxn=new B.ac(A.uk,null,null,null,null,null)
D.bmP=new B.a_(57744,"MaterialIcons",!1)
D.bxu=new B.ac(D.bmP,null,null,null,null,null)
D.bxx=new B.ac(A.uk,16,null,null,null,null)
D.brB=new B.a_(985181,"MaterialIcons",!1)
D.ED=new B.ac(D.brB,null,null,null,null,null)
D.bxJ=new B.ac(A.kV,16,A.bJ,null,null,null)
D.bqX=new B.a_(983615,"MaterialIcons",!1)
D.bxL=new B.ac(D.bqX,12,A.c,null,null,null)
D.ai6=new B.ac(A.wH,16,null,null,null,null)
D.bxS=new B.ac(A.dN,21,A.c,null,null,null)
D.bxX=new B.ac(A.hs,17,A.c,null,null,null)
D.bxY=new B.ac(A.un,null,null,null,null,null)
D.byp=new B.ac(A.p5,22,E.mp,null,null,null)
D.byx=new B.ac(A.p4,13,A.al,null,null,null)
D.bmw=new B.a_(57495,"MaterialIcons",!1)
D.byD=new B.ac(D.bmw,null,null,null,null,null)
D.byH=new B.ac(A.no,18,A.c,null,null,null)
D.bz0=new B.ac(A.t_,28,A.c,null,null,null)
D.bz8=new B.ac(D.ag0,null,A.az,null,null,null)
D.bz9=new B.ac(A.p7,22,A.c,null,null,null)
D.aig=new B.ac(A.WH,16,null,null,null,null)
D.bzT=new B.ac(A.un,32,A.c,null,null,null)
D.bAB=new B.ac(A.iG,22,A.c,null,null,null)
D.bAF=new B.ac(A.qj,22,A.al,null,null,null)
D.aiv=new B.ac(A.rO,null,A.c2,null,null,null)
D.bBz=new B.ac(A.up,18,null,null,null,null)
D.bC6=new B.ac(A.dN,18,A.cV,null,null,null)
D.Yo=new B.ac(A.cu,18,A.aB,null,null,null)
D.bCd=new B.ac(A.agY,null,null,null,null,null)
D.bCD=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aK2,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.enC=new B.F(!0,A.bP,null,null,null,null,null,A.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCW=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.enC,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.bDm=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.cCT=w([A.e9,A.az],x.O)
D.bEu=new B.a8(A.a_,A.a7,A.w,D.cCT,null,null)
D.bEE=new B.a8(A.b4,A.ba,A.Re,A.app,null,null)
D.aZa=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b1K=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b4o=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b03=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cox=w([D.aZa,D.b1K,D.b4o,D.b03],x.O)
D.bEW=new B.a8(A.ax,A.aE,A.w,D.cox,A.Fa,null)
D.cXi=w([A.dh,A.bz,A.b0],x.O)
D.bEY=new B.a8(A.b4,A.ba,A.Re,D.cXi,null,null)
D.cYp=w([A.bg,A.cf],x.O)
D.bF1=new B.a8(A.a_,A.a7,A.w,D.cYp,null,null)
D.cU3=w([A.hR,A.dC,A.b_],x.O)
D.bF3=new B.a8(A.ax,A.aE,A.w,D.cU3,null,null)
D.cIh=w([A.cW,A.eT],x.O)
D.bF6=new B.a8(A.a_,A.a7,A.w,D.cIh,null,null)
D.cXd=w([O.kM,A.dC],x.O)
D.ajf=new B.a8(A.a_,A.a7,A.w,D.cXd,null,null)
D.b2f=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cXa=w([D.b2f,D.w4,A.bQ],x.O)
D.bFb=new B.a8(A.a_,A.a7,A.w,D.cXa,null,null)
D.cEo=w([A.br,A.dl,A.fn],x.O)
D.bFc=new B.a8(A.ax,A.aE,A.w,D.cEo,null,null)
D.LE=new B.a8(A.a_,A.a7,A.w,A.Fm,null,null)
D.b8X=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.chI=w([D.b8X,A.bQ,A.iU],x.O)
D.ajk=new B.a8(A.ax,A.aE,A.w,D.chI,null,null)
D.cN5=w([A.vW,A.at,D.zc],x.O)
D.bG4=new B.a8(A.a_,A.a7,A.w,D.cN5,null,null)
D.b9U=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b0P=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b5e=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cDB=w([D.b9U,D.b0P,D.b5e],x.O)
D.ajl=new B.a8(A.a_,A.a7,A.w,D.cDB,null,null)
D.b2g=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bHW=w([Ao.ab5,D.b2g],x.O)
D.bGd=new B.a8(A.b4,A.ba,A.w,D.bHW,null,null)
D.cBQ=w([A.mo,A.bR],x.O)
D.bGg=new B.a8(A.b4,A.ba,A.w,D.cBQ,null,null)
D.cRy=w([A.az,A.dM],x.O)
D.bGm=new B.a8(A.a_,A.a7,A.w,D.cRy,null,null)
D.aa9=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.ar5=w([D.aa9,D.iS,D.It],x.O)
D.bGN=new B.a8(A.ax,A.aE,A.w,D.ar5,null,null)
D.chA=w([A.dq,A.dQ],x.O)
D.bGY=new B.a8(A.b4,A.ba,A.w,D.chA,null,null)
D.cOY=w([A.r9,A.z6],x.O)
D.bHH=new B.a8(A.a_,A.a7,A.w,D.cOY,null,null)
D.ePt=new B.w("Which Bio link?",null,A.cq,null,null,null,null,null,null,null,null,null)
D.bHS=new B.pf(null,D.ePt,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xo=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a15=new C.kB(2,"elegantNavy")
D.fav=w([A.TH,D.iS,A.bQ],x.O)
D.jj=new C.wB(0,"classic")
D.a0T=new C.j9("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a15,4294967035,4279378237,4290283019,D.jj)
D.azZ=new C.kB(3,"elegantGold")
D.aYN=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZA=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a8Z=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.f9Z=w([D.aYN,D.aZA,D.a8Z],x.O)
D.a0R=new C.j9("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.azZ,4294966515,4281016592,4289102906,D.jj)
D.di4=new C.kB(22,"goldRibbon")
D.f9V=w([A.TH,D.iS,A.hE],x.O)
D.a0K=new C.j9("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.di4,4294967035,4279378237,4291404327,D.jj)
D.di5=new C.kB(23,"goldBaroque")
D.a9u=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fa0=w([D.a9u,A.at,A.iU],x.O)
D.a0L=new C.j9("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.di5,4294964964,4283053072,4292128567,D.jj)
D.di7=new C.kB(4,"elegantEmerald")
D.b_E=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0q=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fa6=w([D.b_E,D.b0q,A.hE],x.O)
D.a0M=new C.j9("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.di7,4294376440,4279122734,4291404327,D.jj)
D.di8=new C.kB(5,"elegantBurgundy")
D.b3w=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fad=w([D.b3w,A.a8m,A.hE],x.O)
D.a0P=new C.j9("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.di8,4294965238,4283043359,4291404327,D.jj)
D.di1=new C.kB(19,"goldFiligree")
D.J_=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fa1=w([D.J_,A.at,A.iU],x.O)
D.a0N=new C.j9("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.di1,4294966259,4279378237,4292128567,D.jj)
D.di2=new C.kB(20,"goldLaurel")
D.b8O=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fae=w([A.In,A.hE,D.b8O],x.O)
D.a0O=new C.j9("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.di2,4294966776,4282000405,4291404327,D.jj)
D.di3=new C.kB(21,"goldCrest")
D.a8g=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b8U=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fa3=w([D.a8g,A.at,D.b8U],x.O)
D.a0S=new C.j9("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.di3,4294965484,4283053072,4292128567,D.jj)
D.di6=new C.kB(24,"goldStar")
D.b9Q=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fa7=w([D.b9Q,A.at,D.iS],x.O)
D.a0Q=new C.j9("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.di6,4294966518,4279378237,4292128567,D.jj)
D.EN=w([D.a0T,D.a0R,D.a0K,D.a0L,D.a0M,D.a0P,D.a0N,D.a0O,D.a0S,D.a0Q],x.h)
D.pk=new C.m4(0,"blank")
D.P6=new C.m4(1,"title")
D.m4=new C.m4(2,"titleContent")
D.dCH=new C.m4(3,"twoColumn")
D.B1=new C.m4(4,"section")
D.dCI=new C.m4(5,"comparison")
D.FW=new C.m4(6,"flashcard")
D.FX=new C.m4(7,"quiz")
D.FY=new C.m4(8,"worksheet")
D.ajF=w([D.pk,D.P6,D.m4,D.dCH,D.B1,D.dCI,D.FW,D.FX,D.FY],B.aA("M<m4>"))
D.bI7=w([0,0,0],x.cA)
D.arY=w([E.a8L,A.dQ],x.O)
D.k1=w([A.bQ,A.bJ,A.hD,A.hn,D.zc],x.O)
D.ddY=new C.iL("fireworks","Royal Fireworks","Thank you for celebrating with us",D.arY,D.k1)
D.b94=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b3u=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cC3=w([D.b94,D.b3u],x.O)
D.ddP=new C.iL("confetti","Golden Confetti","Together we rise",D.cC3,D.k1)
D.czs=w([A.n2,A.T1],x.O)
D.ddQ=new C.iL("crown","Crown of Glory","Built for our community",D.czs,D.k1)
D.b0F=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b39=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cFC=w([D.b0F,D.b39],x.O)
D.t2=w([A.bP,A.aN,A.c,A.aJ,A.ak],x.O)
D.ddK=new C.iL("aurora","Aurora Gala","A brighter future, together",D.cFC,D.t2)
D.aZe=new B.x(1,0.16470588235294117,0.10196078431372549,0.0196078431372549,A.t)
D.b4q=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cP3=w([D.aZe,D.b4q],x.O)
D.de0=new C.iL("champagne","Champagne Toast","Cheers to every member",D.cP3,D.k1)
D.de1=new C.iL("diamonds","Diamond Rain","Every member is a jewel",V.asq,D.t2)
D.aZs=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b2H=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cTo=w([D.aZs,D.b2H],x.O)
D.ddF=new C.iL("starburst","Golden Starburst","Thank you!",D.cTo,D.k1)
D.bI0=w([A.fo,A.tZ],x.O)
D.a87=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Nb=w([A.nS,A.i4,A.u2,A.oG,D.a87],x.O)
D.de8=new C.iL("balloons","Luxury Balloons","Let's celebrate",D.bI0,D.Nb)
D.cyN=w([A.T8,A.x],x.O)
D.ddX=new C.iL("galaxy","Galaxy Spiral","The sky is not the limit",D.cyN,D.t2)
D.b7y=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cLW=w([A.kN,D.b7y],x.O)
D.ddS=new C.iL("redcarpet","Red Carpet","Tonight we shine",D.cLW,D.k1)
D.b5K=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b4f=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cPU=w([D.b5K,D.b4f],x.O)
D.ddH=new C.iL("coins","Gold Coin Rain","Every contribution counts",D.cPU,D.k1)
D.cVP=w([A.dq,A.i3],x.O)
D.ddN=new C.iL("lanterns","Sky Lanterns","Lighting the way together",D.cVP,D.k1)
D.b1t=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cwY=w([A.w0,D.b1t],x.O)
D.ddJ=new C.iL("hearts","Floating Hearts","Made with love",D.cwY,D.Nb)
D.aZZ=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b_K=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cX8=w([D.aZZ,D.b_K],x.O)
D.de7=new C.iL("petals","Rose Petals","Thank you, from our hearts",D.cX8,D.Nb)
D.b8e=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cTI=w([A.kn,D.b8e],x.O)
D.ddE=new C.iL("butterflies","Golden Butterflies","New beginnings",D.cTI,D.k1)
D.b5c=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cxP=w([D.b5c,A.x],x.O)
D.de_=new C.iL("neon","Neon Night","Let's go!",D.cxP,D.t2)
D.b2r=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cRH=w([A.II,D.b2r],x.O)
D.de2=new C.iL("disco","Disco Ball","Party time",D.cRH,D.t2)
D.b5C=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cRh=w([A.hR,D.b5C],x.O)
D.ddI=new C.iL("sunrise","Golden Sunrise","A new day for our community",D.cRh,D.k1)
D.cQU=w([A.rh,A.dQ],x.O)
D.de3=new C.iL("pearls","Ocean Pearls","Deep roots, bright future",D.cQU,D.t2)
D.b0L=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cR6=w([D.b0L,A.dQ],x.O)
D.de6=new C.iL("snow","Winter Gala","Warm wishes to all",D.cR6,D.t2)
D.aYW=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.aZL=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cWb=w([D.aYW,D.aZL],x.O)
D.ddW=new C.iL("laurel","Laurel Victory","We did it together",D.cWb,D.k1)
D.aYM=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b35=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cw8=w([D.aYM,D.b35],x.O)
D.de5=new C.iL("ribbons","Silk Ribbons","Elegance in every step",D.cw8,D.k1)
D.b41=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.chx=w([G.zb,D.b41],x.O)
D.ddT=new C.iL("kente","Kente Pride","Proud of our roots",D.chx,D.k1)
D.b6d=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b8v=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cH3=w([D.b6d,D.b8v],x.O)
D.ddO=new C.iL("trophy","Trophy Shine","Winners together",D.cH3,D.k1)
D.cRe=w([A.CC,A.x],x.O)
D.ddG=new C.iL("shooting","Shooting Stars","Make a wish",D.cRe,D.t2)
D.aZ1=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aaW=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cWq=w([D.aZ1,D.aaW],x.O)
D.ddU=new C.iL("bokeh","Golden Bokeh","Shine bright",D.cWq,D.k1)
D.aZl=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cMI=w([D.aZl,A.x],x.O)
D.ddM=new C.iL("orbits","Golden Orbits","Always moving forward",D.cMI,D.k1)
D.b8f=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cJA=w([A.a8X,D.b8f],x.O)
D.ddR=new C.iL("flowers","Blooming Garden","Growing together",D.cJA,D.Nb)
D.aZ8=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZF=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cVm=w([D.aZ8,D.aZF],x.O)
D.ddL=new C.iL("music","Music Party","Celebrate with us",D.cVm,D.t2)
D.b_u=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b8Q=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cx8=w([D.b_u,D.b8Q],x.O)
D.de4=new C.iL("mandala","Royal Mandala","Harmony and unity",D.cx8,D.k1)
D.cJE=w([G.zb,D.aaW],x.O)
D.ddZ=new C.iL("sparklers","Golden Sparklers","Light up the night",D.cJE,D.k1)
D.ddV=new C.iL("city","City Lights","The whole city celebrates",D.arY,D.k1)
D.EW=w([D.ddY,D.ddP,D.ddQ,D.ddK,D.de0,D.de1,D.ddF,D.de8,D.ddX,D.ddS,D.ddH,D.ddN,D.ddJ,D.de7,D.ddE,D.de_,D.de2,D.ddI,D.de3,D.de6,D.ddW,D.de5,D.ddT,D.ddO,D.ddG,D.ddU,D.ddM,D.ddR,D.ddL,D.de4,D.ddZ,D.ddV],B.aA("M<iL>"))
D.dVe=new B.T("","No ring")
D.e1X=new B.T("platinum","Platinum")
D.e0l=new B.T("glow","Glow")
D.dWW=new B.T("double","Double line")
D.dWk=new B.T("framed","Gallery frame")
D.dV4=new B.T("rosegold","Rose gold")
D.e0K=new B.T("jewels","Jeweled")
D.dZR=new B.T("aurora","Aurora")
D.Ap=w([D.dVe,A.a2n,D.e1X,D.e0l,H.aG8,D.dWW,A.a2p,D.dWk,D.dV4,D.e0K,D.dZR],x.L)
D.c1h=w([D.a0N,D.a0O,D.a0S,D.a0K,D.a0L,D.a0Q],x.h)
D.by4=new B.ac(G.aeV,16,null,null,null,null)
D.aUi=new B.uA(A.bf,D.by4,null,x.U)
D.bmY=new B.a_(58027,"MaterialIcons",!1)
D.brQ=new B.ac(D.bmY,16,null,null,null,null)
D.aUg=new B.uA(A.L,D.brQ,null,x.U)
D.bmZ=new B.a_(58030,"MaterialIcons",!1)
D.bvQ=new B.ac(D.bmZ,16,null,null,null,null)
D.aUj=new B.uA(A.dO,D.bvQ,null,x.U)
D.c7m=w([D.aUi,D.aUg,D.aUj],B.aA("M<uA<pu>>"))
D.ceX=w([A.zh,A.hl],x.O)
D.ceY=w([A.br,A.bs,A.fn],x.O)
D.N0=w([A.bJ,A.hn,A.hD,A.at,A.oG],x.O)
D.chD=w([A.bQ,D.iS,D.It],x.O)
D.ci9=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dTB=new B.T(4278913286,4280030216)
D.dTT=new B.T(4279373061,4278518787)
D.dU_=new B.T(4279898630,4278847235)
D.cGv=w([D.dTB,D.dTT,D.dU_],x.n)
D.cCH=w(["\u265b","\u269c","\u2726"],x.s)
D.di_=new C.wD("Royal Onyx & Gold",D.cGv,4292128567,4294370209,4294965479,3874020544,D.cCH)
D.dTo=new B.T(4278326799,4278598442)
D.dTq=new B.T(4278395929,4278258953)
D.dTx=new B.T(4278599728,4278327826)
D.cVG=w([D.dTo,D.dTq,D.dTx],x.n)
D.cxI=w(["\u269c","\u2756","\u2727"],x.s)
D.dhX=new C.wD("Imperial Emerald",D.cVG,4293050997,4294699968,4294180856,3872254170,D.cxI)
D.dTr=new B.T(4278455076,4278918747)
D.dTw=new B.T(4278587439,4278322714)
D.dTK=new B.T(4279051376,4278455076)
D.cU_=w([D.dTr,D.dTw,D.dTK],x.n)
D.cNk=w(["\u2654","\u2726","\u2748"],x.s)
D.dhR=new C.wD("Sapphire Crown",D.cU_,4291417834,4294967295,4294310143,3871986666,D.cNk)
D.dTY=new B.T(4279894534,4283041554)
D.dU9=new B.T(4281008906,4279042307)
D.dUh=new B.T(4284221976,4279894534)
D.cYR=w([D.dTY,D.dU9,D.dUh],x.n)
D.cyU=w(["\u265b","\u2766","\u2726"],x.s)
D.dhT=new C.wD("Ruby Throne",D.cYR,4293378685,4294963145,4294964466,3874213833,D.cyU)
D.dTS=new B.T(4279371039,4281995100)
D.dU1=new B.T(4280092723,4278714896)
D.dUe=new B.T(4283045242,4279371039)
D.cW2=w([D.dTS,D.dU1,D.dUe],x.n)
D.cUk=w(["\u2655","\u2756","\u2727"],x.s)
D.dhY=new C.wD("Amethyst Palace",D.cW2,4293314984,4294963421,4294702591,3873229802,D.cUk)
D.dTt=new B.T(4278519045,4280032287)
D.dTL=new B.T(4279111184,4278321666)
D.dU6=new B.T(4280492839,4278716426)
D.cT_=w([D.dTt,D.dTL,D.dU6],x.n)
D.cLJ=w(["\u2726","\u25c6","\u2742"],x.s)
D.dhV=new C.wD("Obsidian & Platinum",D.cT_,4293256418,4294967295,4294638330,3872378836,D.cLJ)
D.dTZ=new B.T(4279896588,4282194463)
D.dU7=new B.T(4280553487,4279043334)
D.dUf=new B.T(4283048488,4279896588)
D.cLe=w([D.dTZ,D.dU7,D.dUf],x.n)
D.cXt=w(["\u2766","\u273f","\u2727"],x.s)
D.dhS=new C.wD("Rose Gold Velvet",D.cLe,4293440672,4294960345,4294964979,3874214602,D.cXt)
D.dTu=new B.T(4278520340,4279180595)
D.dTz=new B.T(4278718495,4278322443)
D.dTW=new B.T(4279510591,4278520340)
D.cof=w([D.dTu,D.dTz,D.dTW],x.n)
D.cMn=w(["\u269c","\u2736","\u2756"],x.s)
D.dhW=new C.wD("Midnight Brass",D.cof,4291405148,4293975208,4294439914,3872837564,D.cMn)
D.dUu=new B.T(4294703086,4293780428)
D.dUq=new B.T(4294307549,4293187253)
D.dUv=new B.T(4294966517,4293977807)
D.cAU=w([D.dUu,D.dUq,D.dUv],x.n)
D.cML=w(["\u269c","\u265b","\u2726"],x.s)
D.dhZ=new C.wD("Ivory Marble & Gold",D.cAU,4289760572,4286209048,4280951062,3863625518,D.cML)
D.dTF=new B.T(4278978566,4280555024)
D.dTV=new B.T(4279504137,4278518530)
D.dUb=new B.T(4281211923,4278978566)
D.cyM=w([D.dTF,D.dTV,D.dUb],x.n)
D.cV0=w(["\u2742","\u2726","\u265c"],x.s)
D.dhU=new C.wD("Onyx & Copper",D.cyM,4291856987,4294365880,4294964718,3873885630,D.cV0)
D.cig=w([D.di_,D.dhX,D.dhR,D.dhT,D.dhY,D.dhV,D.dhS,D.dhW,D.dhZ,D.dhU],B.aA("M<wD>"))
D.ckw=w([A.at,D.zc,A.hn],x.O)
D.apy=w([A.hn,A.cd,A.bb,A.bD],x.O)
D.dZl=new B.T("","Original")
D.e_f=new B.T("circle","Circle")
D.e2i=new B.T("rounded","Rounded")
D.e2Y=new B.T("triangle","Triangle")
D.e0t=new B.T("hexagon","Hexagon")
D.e_u=new B.T("diamond","Diamond")
D.dZQ=new B.T("arch","Arch")
D.Au=w([D.dZl,D.e_f,D.e2i,D.e2Y,D.e0t,D.e_u,D.dZQ],x.L)
D.dd5=new C.kV("classic_blue","Classic Blue","Normal",A.bg,A.c,A.jT,A.dH,A.aI)
D.ddl=new C.kV("campus_green","Campus Green","Normal",A.aW,A.lM,A.pZ,A.fN,A.fr)
D.ddc=new C.kV("warm_sand","Warm Sand","Normal",A.e1,A.hD,A.bJ,A.iA,A.n6)
D.ddj=new C.kV("slate_minimal","Slate Minimal","Normal",A.bA,A.aN,A.aJ,A.M,A.aI)
D.dd4=new C.kV("coral_fresh","Coral Fresh","Normal",A.cl,A.i6,A.pT,A.kO,A.ra)
D.ddk=new C.kV("lavender_calm","Lavender Calm","Normal",A.b0,A.oI,A.z1,A.q1,A.jS)
D.dd6=new C.kV("ocean_breeze","Ocean Breeze","Normal",A.eT,A.q5,A.r6,A.rd,A.n7)
D.aag=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.ddh=new C.kV("berry_pop","Berry Pop","Normal",A.f4,D.aag,A.kJ,G.U1,A.D6)
D.dd7=new C.kV("midnight_pro","Midnight Pro","Professional",A.az,A.M,A.dq,A.kJ,A.ct)
D.ddg=new C.kV("executive_navy","Executive Navy","Professional",A.db,A.a9E,A.dH,A.kK,A.bP)
D.dde=new C.kV("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bj,A.M,A.aN,A.ct)
D.dd8=new C.kV("corporate_steel","Corporate Steel","Professional",A.ml,A.M,A.lO,A.hp,A.bP)
D.ddb=new C.kV("gold_luxe","Gold Luxe","Luxury",A.nQ,A.dw,A.nR,A.n9,A.bJ)
D.b5F=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.ddf=new C.kV("rose_gold_elite","Rose Gold Elite","Luxury",A.hl,D.b5F,A.TU,A.i4,A.oG)
D.ddi=new C.kV("platinum_night","Platinum Night","Luxury",A.ct,A.dQ,A.bj,A.aN,A.aJ)
D.ddm=new C.kV("emerald_prestige","Emerald Prestige","Luxury",A.aR,A.oK,A.eO,A.oQ,A.j5)
D.dd3=new C.kV("royal_purple","Royal Purple","Luxury",A.lK,A.Tk,A.jS,A.kJ,A.SY)
D.ddd=new C.kV("neon_pitch","Neon Pitch","Bold",A.bb,A.dQ,A.M,A.bc,A.aJ)
D.dda=new C.kV("crimson_impact","Crimson Impact","Bold",A.bR,A.kN,A.fp,A.rr,A.fM)
D.dd9=new C.kV("sunset_gallery","Sunset Gallery","Bold",A.ha,A.ra,A.kO,A.pT,A.oM)
D.F4=w([D.dd5,D.ddl,D.ddc,D.ddj,D.dd4,D.ddk,D.dd6,D.ddh,D.dd7,D.ddg,D.dde,D.dd8,D.ddb,D.ddf,D.ddi,D.ddm,D.dd3,D.ddd,D.dda,D.dd9],B.aA("M<kV>"))
D.cvV=w([A.bQ,D.iS],x.O)
D.cLt=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.dZM=new B.T("Faces & people",D.cLt)
D.ckA=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dSV=new B.T("Ideas & work",D.ckA)
D.cD5=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e0x=new B.T("Nature",D.cD5)
D.cLC=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.dY_=new B.T("Places & things",D.cLC)
D.cG8=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.dZS=new B.T("Symbols",D.cG8)
D.cw_=w([D.dZM,D.dSV,D.e0x,D.dY_,D.dZS],B.aA("M<+(n,al<n>)>"))
D.aZd=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cwj=w([A.bQ,D.a8Z,D.aZd],x.O)
D.aTN=new B.a9(0,A.G,A.Ik,A.aAK,40)
D.aTu=new B.a9(0,A.G,A.n4,A.e6,8)
D.cwt=w([D.aTN,D.aTu],x.V)
D.cwU=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.apY=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.Zy=w([A.hn,A.fn,A.bR,A.aG,A.cl],x.O)
D.cxC=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9c=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cxN=w([A.TN,D.a9c,A.TN],x.O)
D.cxR=w([A.hE,D.iS,D.It],x.O)
D.dXX=new B.T(A.bf,D.Xl)
D.dYy=new B.T(A.L,D.Xk)
D.dVv=new B.T(A.dO,D.Xm)
D.cyH=w([D.dXX,D.dYy,D.dVv],B.aA("M<+(pu,a_)>"))
D.cI=new C.H1(0,"text")
D.l2=new C.H1(1,"image")
D.eQ=new C.H1(2,"shape")
D.P5=new C.H1(3,"pdf")
D.kA=new C.H1(4,"signature")
D.a1c=new C.H1(5,"bio")
D.czw=w([D.cI,D.l2,D.eQ,D.P5,D.kA,D.a1c],B.aA("M<H1>"))
D.czx=w([A.bh,A.cF],B.aA("M<G_>"))
D.cA6=w(["School","Documents","Sign & present"],x.s)
D.aTR=new B.a9(0,A.G,A.aaO,A.tl,28)
D.cAp=w([D.aTR],x.V)
D.cAH=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nk=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqk=w([A.hn,A.D5,A.aJ,A.c,A.nS,A.at],x.O)
D.cBV=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history."],x.s)
D.e3E=new B.T(0.1,0.08)
D.e0v=new B.T(0.3,0.05)
D.dVi=new B.T(0.55,0.1)
D.dXo=new B.T(0.8,0.06)
D.dYZ=new B.T(0.92,0.16)
D.dYG=new B.T(0.2,0.2)
D.dXC=new B.T(0.7,0.22)
D.e_I=new B.T(0.05,0.4)
D.dZe=new B.T(0.95,0.45)
D.dVC=new B.T(0.12,0.7)
D.dWM=new B.T(0.88,0.75)
D.dWR=new B.T(0.4,0.9)
D.dUB=new B.T(0.65,0.93)
D.dXb=new B.T(0.25,0.97)
D.dXW=new B.T(0.85,0.9)
D.dW3=new B.T(0.5,0.04)
D.cBZ=w([D.e3E,D.e0v,D.dVi,D.dXo,D.dYZ,D.dYG,D.dXC,D.e_I,D.dZe,D.dVC,D.dWM,D.dWR,D.dUB,D.dXb,D.dXW,D.dW3],x.G)
D.cC7=w([A.c,A.hl,A.b3,A.aR],x.O)
D.dEj=new C.js("office_blue","Office Blue",A.bg,A.dH,A.aI,A.c,A.jT)
D.dEu=new C.js("campus_green","Campus Green",A.aW,A.fN,A.fr,A.lM,A.pZ)
D.dEk=new C.js("sunset","Sunset",A.ha,A.kO,A.n6,A.i6,A.pT)
D.dEl=new C.js("midnight","Midnight",A.az,A.kJ,A.ct,A.M,A.dq)
D.dEw=new C.js("classic","Classic",A.dC,A.dw,A.lh,A.hD,A.hC)
D.dEt=new C.js("rose_gold","Rose Gold",A.hl,A.w1,A.w0,A.u2,A.zh)
D.dEe=new C.js("ocean_teal","Ocean Teal",A.eT,A.rd,A.n7,A.q5,A.r6)
D.dEd=new C.js("slate_pro","Slate Pro",A.bA,A.M,A.aI,A.aN,A.aJ)
D.dEc=new C.js("neon_night","Neon Night",A.bb,A.bc,A.aJ,A.dQ,A.M)
D.dEo=new C.js("lavender","Lavender",A.b0,A.q1,A.jS,A.oI,A.z1)
D.dEq=new C.js("coral","Coral",A.cl,A.kO,A.ra,A.i6,A.oM)
D.dEf=new C.js("forest","Forest",A.h9,A.eM,A.d3,A.lN,A.eZ)
D.dEg=new C.js("berry","Berry",A.f4,G.U1,A.D6,D.aag,A.kJ)
D.dEn=new C.js("sand","Sand",A.e1,A.iA,A.n6,A.hD,A.bJ)
D.dEs=new C.js("ice","Ice",A.ml,A.IJ,A.aI,A.mj,A.hp)
D.dEi=new C.js("charcoal","Charcoal",A.ak,A.aN,A.ct,A.bj,A.M)
D.dEb=new C.js("mint","Mint",A.aR,A.ff,A.fN,A.lN,A.oQ)
D.dEr=new C.js("crimson","Crimson",A.bR,A.mo,A.kN,A.D3,A.rr)
D.b0p=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dEm=new C.js("gold","Gold",A.nQ,A.r9,A.nR,D.b0p,A.n9)
D.dEp=new C.js("aqua","Aqua",A.bK,A.CR,A.nN,A.oJ,A.nT)
D.dEh=new C.js("plum","Plum",A.lK,A.tZ,A.D6,A.CJ,A.rm)
D.dEv=new C.js("steel","Steel",A.db,A.dH,A.bj,A.jT,A.kK)
D.ZO=w([D.dEj,D.dEu,D.dEk,D.dEl,D.dEw,D.dEt,D.dEe,D.dEd,D.dEc,D.dEo,D.dEq,D.dEf,D.dEg,D.dEn,D.dEs,D.dEi,D.dEb,D.dEr,D.dEm,D.dEp,D.dEh,D.dEv],B.aA("M<js>"))
D.cCr=w([A.bQ,A.iU],x.O)
D.P7=new C.hm(10,"rotate3d")
D.G_=new C.hm(8,"flip")
D.aAh=new C.hm(19,"spiral")
D.pl=new C.hm(16,"bounce")
D.aAk=new C.hm(9,"flipVertical")
D.cCs=w([D.P7,D.G_,D.aAh,D.pl,D.aAk],x.i)
D.dY=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.aqu=w([0.62,1],x.x)
D.cDd=w([0,0.32,0.68,1],x.x)
D.m5=new C.hm(6,"zoom")
D.tf=new C.hm(4,"slideUp")
D.te=new C.hm(2,"slideLeft")
D.cDl=w([D.m5,D.G_,D.tf,D.P7,D.te],x.i)
D.cDP=w([A.cd,A.hl,A.i4,A.hn,A.c],x.O)
D.aTI=new B.a9(0,A.G,D.a9n,A.tl,30)
D.cEt=w([D.aTI],x.V)
D.dLg=new B.v(0,-2.5)
D.dL6=new B.v(-2.5,0)
D.dKl=new B.v(2.5,0)
D.cEw=w([A.Pm,A.aAW,A.aB8,A.a1z,D.dLg,H.aB5,D.dL6,D.dKl],x.dN)
D.Fb=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cEX=w([23,114,69,56,80,144],x.t)
D.cFl=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cFJ=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cH7=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cHc=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.b7=new C.tV(0,"rectangle")
D.ex=new C.tV(1,"circle")
D.kB=new C.tV(6,"hexagon")
D.cHo=w([D.b7,D.ex,D.kB],x.m)
D.nv=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aam=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cHX=w([D.aam,A.eM],x.O)
D.dVo=new B.T("","Classic")
D.dUG=new B.T("caps","Bold caps")
D.e_L=new B.T("elegant","Elegant")
D.e2s=new B.T("shadow","Shadow")
D.dXz=new B.T("neon","Neon glow")
D.e1N=new B.T("outline","Outline")
D.e1k=new B.T("marker","Highlighter")
D.e2C=new B.T("stamp","Stamp")
D.e2f=new B.T("retro","Retro")
D.dX2=new B.T("threed","3D")
D.e02=new B.T("fire","Fire")
D.e0B=new B.T("ice","Ice")
D.e_e=new B.T("chalk","Chalk")
D.e_i=new B.T("comic","Comic")
D.e2E=new B.T("sunset","Sunset")
D.e3j=new B.T("softglow","Soft glow")
D.e17=new B.T("lowercase","Lowercase")
D.e_y=new B.T("double","Echo")
D.e3o=new B.T("whisper","Whisper")
D.arc=w([D.dVo,D.dUG,D.e_L,D.e2s,D.dXz,D.e1N,D.e1k,D.e2C,D.e2f,D.dX2,H.aG6,D.e02,D.e0B,D.e_e,D.e_i,A.a2n,D.e2E,D.e3j,D.e17,D.e_y,D.e3o],x.L)
D.cJ3=w([3,5,7,10,12,15],x.t)
D.cKh=w([A.cd,A.bJ,A.c,A.eN,A.dh],x.O)
D.cKt=w([0.45,1],x.x)
D.Fd=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cKN=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.f5H=new C.o4("Original",0,1,1,0,0,0)
D.f5L=new C.o4("Black & white",0,1.1,0,0,0,0)
D.f5y=new C.o4("Noir",-0.05,1.55,0,0,0,0)
D.f5C=new C.o4("Sepia",0,1,0.25,0.9,0,0)
D.f5B=new C.o4("Vivid",0,1.15,1.6,0,0,0)
D.f5u=new C.o4("Pop",0,1.3,1.9,0,0,0)
D.f5w=new C.o4("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.f5I=new C.o4("Matte",0,0.9,0.85,0,0,0.55)
D.f5D=new C.o4("Cool",0,1.05,1,-0.8,0,0)
D.f5K=new C.o4("Warm",0.03,1.05,1.1,0.8,0,0)
D.f5v=new C.o4("Golden hour",0.04,1,1.25,1,0,0)
D.f5A=new C.o4("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.f5J=new C.o4("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.f5z=new C.o4("Dramatic",-0.05,1.5,1.2,0,0,0)
D.f5F=new C.o4("Retro",0,0.9,0.7,0.4,0,0.35)
D.f5E=new C.o4("Forest",0,1,1.2,-0.1,-0.45,0)
D.f5G=new C.o4("Rose",0,1,1.1,0.3,0.4,0)
D.f5x=new C.o4("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cKO=w([D.f5H,D.f5L,D.f5y,D.f5C,D.f5B,D.f5u,D.f5w,D.f5I,D.f5D,D.f5K,D.f5v,D.f5A,D.f5J,D.f5z,D.f5F,D.f5E,D.f5G,D.f5x],B.aA("M<o4>"))
D.aYJ=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cKP=w([D.aam,A.eM,D.aYJ],x.O)
D.dST=new B.T(0.12,0.3)
D.e0H=new B.T(0.26,0.75)
D.e_H=new B.T(0.8,0.22)
D.e2L=new B.T(0.9,0.7)
D.e16=new B.T(0.5,0.15)
D.e1O=new B.T(0.65,0.85)
D.dWg=new B.T(0.08,0.85)
D.cL_=w([D.dST,D.e0H,D.e_H,D.e2L,D.e16,D.e1O,D.dWg],x.G)
D.arl=w([A.bb,A.cd,A.bD,A.br],x.O)
D.cLN=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cM_=w([A.c,A.hp,A.dD,A.tU],x.O)
D.b0A=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cMU=w([D.b0A,D.a9c],x.O)
D.cMV=w([A.vW,A.at],x.O)
D.cNa=w([0,0.25,0.75,1],x.x)
D.cNc=w([A.vS,A.nS],x.O)
D.azS=new C.kB(10,"kenteSunset")
D.f9X=w([D.a9u,A.ju,A.at],x.O)
D.dgh=new C.j9("kuhowa_kente_sunset","Kente ya Jua",y.H,D.azS,4294964964,4282000405,4279983648,D.jj)
D.azT=new C.kB(11,"indigoMudcloth")
D.aZw=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.faa=w([D.aZw,A.a99,A.hE],x.O)
D.dgp=new C.j9("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.azT,4294439140,4279903102,4279903102,D.jj)
D.azU=new C.kB(12,"adinkraRoyal")
D.b9r=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fab=w([D.a8g,D.b9r,A.at],x.O)
D.dgr=new C.j9("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.azU,4294965484,4285218591,4287322667,D.jj)
D.azV=new C.kB(13,"nileLotus")
D.b6p=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b3K=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fag=w([D.b6p,D.b3K,A.hE],x.O)
D.dgq=new C.j9("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azV,4294244340,4279196764,4279196764,D.jj)
D.azW=new C.kB(14,"shweshweIvory")
D.b26=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b19=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.aZY=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.f9Y=w([D.b26,D.b19,D.aZY],x.O)
D.dgm=new C.j9("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azW,4294505710,4279970378,4291058750,D.jj)
D.qB=new C.kB(15,"certIvoryNavy")
D.f9W=w([D.J_,D.iS,A.hE],x.O)
D.azo=new C.wB(1,"ringsNdoa")
D.dgj=new C.j9("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qB,4294966259,4279378237,4291404327,D.azo)
D.a0V=new C.wB(2,"coupleCards")
D.dge=new C.j9("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qB,4294966259,4279378237,4291404327,D.a0V)
D.AX=new C.kB(18,"certIvoryNavyBar")
D.a8f=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fa9=w([D.a8f,D.iS,A.hE],x.O)
D.azp=new C.wB(3,"kuhoweshaForm")
D.dgc=new C.j9("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.AX,4294966519,4279378237,4291404327,D.azp)
D.a9l=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fas=w([D.J_,D.a9l,A.hE],x.O)
D.a0W=new C.wB(4,"mahariPande")
D.dgf=new C.j9("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qB,4294966259,4279904068,4291404327,D.a0W)
D.azX=new C.kB(16,"certIvoryGreen")
D.b1C=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fa_=w([A.In,D.b1C,A.hE],x.O)
D.azq=new C.wB(5,"familiaMti")
D.dgl=new C.j9("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.azX,4294966776,4280241466,4291404327,D.azq)
D.a0X=new C.wB(6,"ndoaSafi")
D.dgd=new C.j9("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.AX,4294966519,4279378237,4291404327,D.a0X)
D.b5b=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fa2=w([D.J_,A.hE,D.b5b],x.O)
D.a0Y=new C.wB(7,"peteWide")
D.dgi=new C.j9("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qB,4294966259,4282001936,4291404327,D.a0Y)
D.dgs=new C.wB(8,"muhuriCrest")
D.dgb=new C.j9("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qB,4294966259,4279378237,4291404327,D.dgs)
D.fac=w([D.a8f,D.a9l,A.hE],x.O)
D.dgt=new C.wB(9,"fomuWazi")
D.dgo=new C.j9("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.AX,4294966519,4279904068,4291404327,D.dgt)
D.azY=new C.kB(17,"certIvoryRose")
D.b28=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.faf=w([D.b28,D.aa_,A.hE],x.O)
D.a0U=new C.wB(10,"upendoOrnate")
D.dgk=new C.j9("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.azY,4294965493,4286200650,4291404327,D.a0U)
D.cNy=w([D.dgh,D.dgp,D.dgr,D.dgq,D.dgm,D.dgj,D.dge,D.dgc,D.dgf,D.dgl,D.dgd,D.dgi,D.dgb,D.dgo,D.dgk],x.h)
D.dZ=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.G0=new C.v5(0,"emojis")
D.B3=new C.v5(1,"pictures")
D.G1=new C.v5(2,"icons3d")
D.a1e=new C.v5(3,"animations")
D.P9=new C.v5(4,"videoMotion")
D.B4=new C.v5(5,"luxe")
D.a_7=w([D.G0,D.B3,D.G1,D.a1e,D.P9,D.B4],B.aA("M<v5>"))
D.e23=new B.T(A.dN,"Looks")
D.dXk=new B.T(A.xa,"Light")
D.dXi=new B.T(A.np,"Colour")
D.dWh=new B.T(A.wM,"Effects")
D.afV=new B.a_(63112,"MaterialIcons",!1)
D.dUP=new B.T(D.afV,"Crop")
D.cNY=w([D.e23,D.dXk,D.dXi,D.dWh,D.dUP],x.f2)
D.cOz=w([],x.D)
D.fap=w([],x.L)
D.dWo=new B.T("Flashcard",D.FW)
D.dYj=new B.T("Quiz",D.FX)
D.dZj=new B.T("Worksheet",D.FY)
D.dXT=new B.T("Notes",D.m4)
D.dYw=new B.T("Section",D.B1)
D.cP9=w([D.dWo,D.dYj,D.dZj,D.dXT,D.dYw],B.aA("M<+(n,m4)>"))
D.di9=new C.kB(6,"beadedPearl")
D.b7G=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b4h=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fat=w([D.b7G,D.b4h,A.hE],x.O)
D.azm=new C.j9("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.di9,4294966774,4286209070,4291404327,D.jj)
D.dia=new C.kB(7,"artDeco")
D.b7t=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.b9G=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.far=w([D.b7t,D.b9G,A.bQ],x.O)
D.azn=new C.j9("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dia,4294440434,4280228630,4290283019,D.jj)
D.dib=new C.kB(8,"rosetteCorners")
D.b9_=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0C=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b4d=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fa5=w([D.b9_,D.b0C,D.b4d],x.O)
D.azl=new C.j9("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dib,4294702831,4285218602,4291394365,D.jj)
D.dic=new C.kB(9,"modernLedger")
D.fa4=w([A.c,D.iS,D.iS],x.O)
D.azk=new C.j9("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dic,4294967295,4279378237,4279378237,D.jj)
D.cPe=w([D.azm,D.azn,D.azl,D.azk],x.h)
D.cPl=w([A.i4,A.nS],x.O)
D.ca=new C.hm(0,"none")
D.d7=new C.hm(1,"fade")
D.FZ=new C.hm(3,"slideRight")
D.aAj=new C.hm(5,"slideDown")
D.dCO=new C.hm(7,"zoomOut")
D.a1d=new C.hm(11,"cube")
D.dCJ=new C.hm(12,"blur")
D.aAg=new C.hm(13,"dissolve")
D.dCK=new C.hm(14,"wipeLeft")
D.dCL=new C.hm(15,"wipeRight")
D.P8=new C.hm(17,"push")
D.dCM=new C.hm(18,"flash")
D.aAi=new C.hm(20,"swing")
D.dCN=new C.hm(21,"curtain")
D.NQ=w([D.ca,D.d7,D.te,D.FZ,D.tf,D.aAj,D.m5,D.dCO,D.G_,D.aAk,D.P7,D.a1d,D.dCJ,D.aAg,D.dCK,D.dCL,D.pl,D.P8,D.dCM,D.aAh,D.aAi,D.dCN],x.i)
D.NR=w([D.a0T,D.a0R,D.a0K,D.a0L,D.a0M,D.a0P,D.a0N,D.a0O,D.a0S,D.a0Q,D.azm,D.azn,D.azl,D.azk],x.h)
D.cPJ=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cPN=w([A.z4,A.hn,A.bQ],x.O)
D.dWZ=new B.T(A.rQ,"Design")
D.e35=new B.T(D.aga,"Word sizes")
D.e0X=new B.T(A.Ae,"Text")
D.bqk=new B.a_(983182,"MaterialIcons",!1)
D.e10=new B.T(D.bqk,"Photo")
D.dUD=new B.T(A.kX,"Logo")
D.e3C=new B.T(A.EA,"News")
D.cPS=w([D.dWZ,D.e35,D.e0X,D.e10,D.dUD,D.e3C],x.f2)
D.cPT=w(["golddust","sparkle","sheen"],x.s)
D.dEa=new C.em("upload_pdf",K.Lc,"Upload PDF")
D.dDk=new C.em("sign_paper",A.Ex,"Sign Paper")
D.bpC=new B.a_(63438,"MaterialIcons",!1)
D.dE6=new C.em("hd_photo",D.bpC,"HD Photo")
D.dDc=new C.em("sharpen",E.X5,"Sharpen")
D.dDm=new C.em("print",K.Lc,"Download PDF")
D.dDO=new C.em("rotate",D.afV,"Rotate")
D.dDv=new C.em("text_box",A.Ae,"Text Box")
D.dDx=new C.em("picture",A.rT,"Picture")
D.dDt=new C.em("title",A.Af,"Title")
D.dDp=new C.em("subtitle",T.agL,"Subtitle")
D.dDX=new C.em("bullets",I.Xn,"Bullet List")
D.dDq=new C.em("numbered",A.L0,"Numbered")
D.dE_=new C.em("quote",A_.A7,"Quote")
D.dDC=new C.em("citation",A.p5,"Citation")
D.dE2=new C.em("date_stamp",As.Xa,"Date Stamp")
D.dDQ=new C.em("page_number",A.x4,"Page #")
D.dDU=new C.em("header_bar",A.Ew,"Header")
D.dDw=new C.em("footer_bar",A4.agZ,"Footer")
D.dDl=new C.em("divider",A.us,"Divider")
D.dDh=new C.em("highlight",A.Xu,"Highlight")
D.dDW=new C.em("redact",A.x7,"Redact")
D.dDJ=new C.em("callout",A.A4,"Callout")
D.dE4=new C.em("checkboxes",I.afe,"Checklist")
D.dDG=new C.em("table",A.XV,"Table")
D.dDA=new C.em("memo",I.XF,"Memo")
D.dDK=new C.em("letter",A.L8,"Letter")
D.bpb=new B.a_(63259,"MaterialIcons",!0)
D.dDb=new C.em("agenda",D.bpb,"Agenda")
D.dDn=new C.em("toc",Ar.agn,"Contents")
D.bpx=new B.a_(63406,"MaterialIcons",!1)
D.dDH=new C.em("sig_line",D.bpx,"Sign Line")
D.dD4=new C.em("initial_line",A.jf,"Initials")
D.dD7=new C.em("approved",A.kX,"APPROVED")
D.dDM=new C.em("draft",A.pb,"DRAFT")
D.dDS=new C.em("confidential",A.iY,"Confidential")
D.dDV=new C.em("sticky",A.Lj,"Sticky Note")
D.dE3=new C.em("progress",A.agm,"Progress")
D.bqP=new B.a_(983507,"MaterialIcons",!1)
D.dDi=new C.em("stars",D.bqP,"Star Rating")
D.dD2=new C.em("equation",A.agd,"Equation")
D.dDd=new C.em("timeline",A.Eu,"Timeline")
D.dDB=new C.em("two_col",A.XX,"Two Columns")
D.dDf=new C.em("compare",Z.Xd,"Compare")
D.dD0=new C.em("duplicate_el",A.fv,"Duplicate")
D.dE8=new C.em("delete_el",A.e4,"Delete")
D.bps=new B.a_(63352,"MaterialIcons",!1)
D.dDZ=new C.em("bring_fwd",D.bps,"Bring Front")
D.bpr=new B.a_(63351,"MaterialIcons",!1)
D.dD5=new C.em("send_back",D.bpr,"Send Back")
D.dDL=new C.em("align_left",D.Xl,"Align L")
D.dDR=new C.em("align_center",D.Xk,"Align C")
D.dE7=new C.em("align_right",D.Xm,"Align R")
D.dDu=new C.em("word_count",Y.WM,"Word Count")
D.dDr=new C.em("link_text",A.hg,"Link")
D.dDP=new C.em("phone",A.ih,"Phone")
D.dDg=new C.em("email",A.A5,"Email")
D.dE9=new C.em("qr_placeholder",A.j0,"QR Placeholder")
D.dDa=new C.em("rectangle",A0.E9,"Rectangle")
D.dDF=new C.em("circle",A.rM,"Circle")
D.dD6=new C.em("arrow",A.jD,"Arrow")
D.dDY=new C.em("line",A.us,"Line")
D.dDj=new C.em("triangle",A.Xb,"Triangle")
D.bpj=new B.a_(63318,"MaterialIcons",!1)
D.dDo=new C.em("grayscale",D.bpj,"Grayscale")
D.dDy=new C.em("brighten",I.afy,"Brighten")
D.dDD=new C.em("flip_h",A.Eb,"Flip H")
D.bpq=new B.a_(63348,"MaterialIcons",!1)
D.dE5=new C.em("flip_v",D.bpq,"Flip V")
D.dDT=new C.em("cover_page",A.p0,"Cover Page")
D.dD3=new C.em("invoice",A.fQ,"Invoice")
D.dDe=new C.em("resume",A.mA,"Resume")
D.dDs=new C.em("minutes",A.o5,"Minutes")
D.dD8=new C.em("lab_report",A.Le,"Lab Report")
D.dD9=new C.em("rubric",A.wQ,"Rubric")
D.dDE=new C.em("flashcard_tool",A.Ac,"Flashcard")
D.dE0=new C.em("quiz_tool",A.Em,"Quiz Block")
D.dDI=new C.em("worksheet_tool",L.E1,"Worksheet")
D.dDN=new C.em("outline_share",A.Lg,"Share Outline")
D.dE1=new C.em("export_json",D.afk,"Export JSON")
D.dD1=new C.em("new_slide",D.WL,"New Slide")
D.dDz=new C.em("present",A.p7,"Present")
D.cQi=w([D.dEa,D.dDk,D.dE6,D.dDc,D.dDm,D.dDO,D.dDv,D.dDx,D.dDt,D.dDp,D.dDX,D.dDq,D.dE_,D.dDC,D.dE2,D.dDQ,D.dDU,D.dDw,D.dDl,D.dDh,D.dDW,D.dDJ,D.dE4,D.dDG,D.dDA,D.dDK,D.dDb,D.dDn,D.dDH,D.dD4,D.dD7,D.dDM,D.dDS,D.dDV,D.dE3,D.dDi,D.dD2,D.dDd,D.dDB,D.dDf,D.dD0,D.dE8,D.dDZ,D.dD5,D.dDL,D.dDR,D.dE7,D.dDu,D.dDr,D.dDP,D.dDg,D.dE9,D.dDa,D.dDF,D.dD6,D.dDY,D.dDj,D.dDo,D.dDy,D.dDD,D.dE5,D.dDT,D.dD3,D.dDe,D.dDs,D.dD8,D.dD9,D.dDE,D.dE0,D.dDI,D.dDN,D.dE1,D.dD1,D.dDz],B.aA("M<em>"))
D.cQo=w([A.ct,A.ak],x.O)
D.dUl=new B.T(4286331629,4292552567)
D.dU8=new B.T(4280640491,4278630100)
D.dUt=new B.T(4294538006,4292943176)
D.dTv=new B.T(4278556265,4280640491)
D.cL9=w([D.dUl,D.dU8,D.dUt,D.dTv],x.n)
D.cb4=w([4294626325,4280472558,4294210230],x.t)
D.dCW=new C.nh("colorful","Colorful",A.np,D.cL9,4294967295,3875536895,D.cb4,D.m5)
D.dTX=new B.T(4279522093,4279657780)
D.dUc=new B.T(4281750292,4283268111)
D.dTy=new B.T(4278603323,4279203438)
D.dUd=new B.T(4282343954,4279599165)
D.clM=w([D.dTX,D.dUc,D.dTy,D.dUd],x.n)
D.caN=w([4288931381,4294829706,4287033260],x.t)
D.dCS=new C.nh("nature","Nature",A.Ey,D.clM,4294442727,3874290891,D.caN,D.d7)
D.dTR=new B.T(4279369771,4283178389)
D.dTO=new B.T(4279179050,4286456526)
D.dU4=new B.T(4280163147,4290648157)
D.dTn=new B.T(4278322711,4285343961)
D.cCC=w([D.dTR,D.dTO,D.dU4,D.dTn],x.n)
D.cb0=w([4294210230,4280472558,4289170426],x.t)
D.dCQ=new C.nh("vibe","Vibe",A.Xq,D.cCC,4294967295,3874869502,D.cb0,D.te)
D.dUp=new B.T(4290007817,4292552567)
D.dUj=new B.T(4286328082,4294286859)
D.dUo=new B.T(4288485197,4294538006)
D.dUi=new B.T(4285343961,4293675161)
D.bIq=w([D.dUp,D.dUj,D.dUo,D.dUi],x.n)
D.cb5=w([4294829706,4294967295,4284999929],x.t)
D.dCR=new C.nh("celebration","Celebration",A.kV,D.bIq,4294967295,4009752557,D.cb5,D.pl)
D.dTM=new B.T(4279179050,4280171146)
D.dTQ=new B.T(4279310375,4280232247)
D.dTE=new B.T(4278916151,4280172719)
D.dTN=new B.T(4279179050,4281549141)
D.cwc=w([D.dTM,D.dTQ,D.dTE,D.dTN],x.n)
D.caI=w([4281908728,4294626325,4287931320],x.t)
D.dCV=new C.nh("professional","Professional",A.A3,D.cwc,4294967295,3872118241,D.caI,D.P8)
D.dTI=new B.T(4278995566,4278413729)
D.dTA=new B.T(4278727492,4279137424)
D.dU5=new B.T(4280171146,4278751666)
D.dTJ=new B.T(4278995566,4279590517)
D.ceQ=w([D.dTI,D.dTA,D.dU5,D.dTJ],x.n)
D.caL=w([4286436348,4284410580,4294829706],x.t)
D.dCX=new C.nh("ocean","Ocean",I.XZ,D.ceQ,4294967295,3873501950,D.caL,D.tf)
D.dUk=new B.T(4286328082,4294538006)
D.dUm=new B.T(4286781507,4294677052)
D.dUg=new B.T(4283178389,4294197086)
D.dUn=new B.T(4288295954,4294688548)
D.cst=w([D.dUk,D.dUm,D.dUg,D.dUn],x.n)
D.cb6=w([4294829706,4294967295,4294747557],x.t)
D.dCY=new C.nh("sunset","Sunset",A.Ll,D.cst,4294967295,4009749973,D.cb6,D.d7)
D.dUx=new B.T(4294967295,4294047225)
D.dUs=new B.T(4294507260,4294967295)
D.dUw=new B.T(4294967295,4293060848)
D.dUr=new B.T(4294507260,4294047225)
D.cFr=w([D.dUx,D.dUs,D.dUw,D.dUr],x.n)
D.caG=w([4280640491,4279179050,4287931320],x.t)
D.dCU=new C.nh("minimal","Minimal",A0.E9,D.cFr,4279179050,4282865001,D.caG,D.d7)
D.dTH=new B.T(4278979081,4280886564)
D.dU0=new B.T(4280031511,4278979081)
D.dTP=new B.T(4279308561,4281148438)
D.dTG=new B.T(4278979081,4280031511)
D.cS6=w([D.dTH,D.dU0,D.dTP,D.dTG],x.n)
D.caU=w([4292128567,4294829706,4289241758],x.t)
D.dCZ=new C.nh("elegant","Elegant",A.kY,D.cS6,4294898631,3873957348,D.caU,D.aAg)
D.dU2=new B.T(4280159034,4282058596)
D.dTD=new B.T(4278916151,4280163147)
D.dUa=new B.T(4281208933,4278916151)
D.dTU=new B.T(4279502891,4283178389)
D.cXY=w([D.dU2,D.dTD,D.dUa,D.dTU],x.n)
D.cb2=w([4294296657,4292128567,4291081725],x.t)
D.dCT=new C.nh("royal","Royal Gold",A.iG,D.cXY,4294965222,3874084351,D.cb2,D.m5)
D.dTs=new B.T(4278464302,4280163147)
D.dTC=new B.T(4278916151,4279455306)
D.dU3=new B.T(4280163147,4283040846)
D.dTp=new B.T(4278332450,4281413249)
D.cKS=w([D.dTs,D.dTC,D.dU3,D.dTp],x.n)
D.caH=w([4281193663,4289170426,4294210230],x.t)
D.dD_=new C.nh("aurora","Aurora Glow",A.dN,D.cKS,4293983738,3869766608,D.caH,D.d7)
D.uN=w([D.dCW,D.dCS,D.dCQ,D.dCR,D.dCV,D.dCX,D.dCY,D.dCU,D.dCZ,D.dCT,D.dD_],B.aA("M<nh>"))
D.b4H=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cQQ=w([A.pW,D.b4H,A.pW],x.O)
D.cR4=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cR8=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.e0U=new B.T("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.dWN=new B.T("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.dZ5=new B.T("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dSg=new B.T("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.dYp=new B.T("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.dXt=new B.T("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.dZH=new B.T("Surprise me","")
D.cRE=w([D.e0U,D.dWN,D.dZ5,D.dSg,D.dYp,D.dXt,D.dZH],x.L)
D.b__=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b7P=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cSi=w([A.c,D.b__,D.b7P],x.O)
D.cTS=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azQ=new C.kB(0,"heritageGold")
D.b3y=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b3z=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.fau=w([D.b3y,D.b3z,A.at],x.O)
D.dgn=new C.j9("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azQ,4294570461,4284234270,4292128567,D.jj)
D.azR=new C.kB(1,"heritageCrimson")
D.aYF=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b27=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b7H=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fa8=w([D.aYF,D.b27,D.b7H],x.O)
D.dgg=new C.j9("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azR,4294635750,4285213214,4292912216,D.jj)
D.cTW=w([D.a0T,D.a0R,D.dgn,D.dgg,D.a0M,D.a0P],x.h)
D.dmg=new C.qQ(1,"circuit")
D.dmJ=new C.lH("neural","Neural Link","Robotic",D.dmg,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dmf=new C.qQ(0,"grid")
D.dmG=new C.lH("signal","Signal Grid","Robotic",D.dmf,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dml=new C.qQ(2,"hexes")
D.dmr=new C.lH("core","Core Protocol","Robotic",D.dml,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAd=new C.qQ(11,"diagonal")
D.dmC=new C.lH("steel","Steel Tech","Robotic",D.aAd,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAe=new C.qQ(3,"rings")
D.dmq=new C.lH("vault","Vault Gold","Robotic",D.aAe,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dmj=new C.qQ(13,"leaves")
D.dmt=new C.lH("forest","Forest Morning","Nature",D.dmj,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAf=new C.qQ(5,"waves")
D.dmA=new C.lH("ocean","Ocean Calm","Nature",D.aAf,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dmm=new C.qQ(6,"sunset")
D.dmF=new C.lH("sunset","Sunset Glow","Nature",D.dmm,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dmn=new C.qQ(7,"mountains")
D.dms=new C.lH("mountain","Mountain Air","Nature",D.dmn,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dmo=new C.qQ(8,"stars")
D.dmz=new C.lH("night","Night Sky","Nature",D.dmo,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1b=new C.qQ(4,"orbs")
D.dmx=new C.lH("aurora","Aurora","Nature",D.a1b,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dmH=new C.lH("sand","Sand Dune","Nature",D.aAf,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dmp=new C.qQ(9,"rays")
D.dmw=new C.lH("golden","Golden Hour","Warm",D.dmp,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dmu=new C.lH("royal","Royal Purple","Warm",D.aAd,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dmv=new C.lH("rose","Rose Petal","Warm",D.a1b,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dmi=new C.qQ(12,"blocks")
D.dmy=new C.lH("electric","Electric Blue","Bold",D.dmi,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dmI=new C.lH("mint","Fresh Mint","Bold",D.a1b,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dmk=new C.qQ(14,"minimal")
D.dmE=new C.lH("white","Clean White","Clean",D.dmk,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dmh=new C.qQ(10,"frame")
D.dmB=new C.lH("midnight","Midnight Gold","Clean",D.dmh,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dmD=new C.lH("community","Community Green","Clean",D.aAe,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_w=w([D.dmJ,D.dmG,D.dmr,D.dmC,D.dmq,D.dmt,D.dmA,D.dmF,D.dms,D.dmz,D.dmx,D.dmH,D.dmw,D.dmu,D.dmv,D.dmy,D.dmI,D.dmE,D.dmB,D.dmD],B.aA("M<lH>"))
D.cUh=w([D.zc,A.vW,A.hn,A.bQ],x.O)
D.cUw=w([D.aa9,D.iS],x.O)
D.cUF=w(["pdf","docx","txt","md"],x.s)
D.e6m=new B.bA(-3,150,34)
D.e6n=new B.bA(-3,214,62)
D.e6o=new B.bA(-3,288,62)
D.cVr=w([D.e6m,D.e6n,D.e6o],B.aA("M<+(P,P,P)>"))
D.cVR=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cWp=w(["Write","Design","Print & fold"],x.s)
D.jk=new C.tV(2,"triangle")
D.B2=new C.tV(3,"arrow")
D.fb=new C.tV(4,"line")
D.jl=new C.tV(5,"parallelogram")
D.cWr=w([D.b7,D.ex,D.jk,D.B2,D.fb,D.jl,D.kB],x.m)
D.ayK=new C.yc(0,"classic")
D.ayD=new C.ws(1,"double")
D.dla=new C.lj("gazette","Old Gazette",D.ayK,D.ayD,4293909936,4292460166,4280949518,4286193426,"blackletter","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","an old-fashioned town gazette from the 1920s: formal, dignified, a little poetic, with a bold dramatic headline",!0,"sepia",!1,!0)
D.a0p=new C.yc(4,"wrap")
D.d4p=new C.ws(10,"torn")
D.dl0=new C.lj("chronicle","Sepia Chronicle",D.a0p,D.d4p,4293448356,4291405419,4282065938,4284168730,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a classic sepia chronicle from long ago: warm, storytelling, with a grand headline",!0,"sepia",!1,!0)
D.ayL=new C.yc(1,"sideBySide")
D.a0o=new C.ws(0,"plain")
D.dl2=new C.lj("times","Classic Times",D.ayL,D.a0o,4294176480,4293320651,4279636750,4279636750,"blackletter","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.ayP=new C.yc(7,"rail")
D.ayI=new C.ws(7,"film")
D.dl3=new C.lj("telegraph","Daily Telegraph",D.ayP,D.ayI,4293582787,4292396959,4280228370,4287245076,"centered","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","a 1940s telegraph newspaper: urgent, crisp and official, with a strong headline",!0,"bw",!1,!1)
D.ayN=new C.yc(5,"scrapbook")
D.OE=new C.ws(2,"polaroid")
D.dl1=new C.lj("scrapbook","Memory Scrapbook",D.ayN,D.OE,4294042560,4292921494,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!0,"sepia",!1,!1)
D.ayQ=new C.yc(8,"banner")
D.ayG=new C.ws(5,"tape")
D.dld=new C.lj("victory","Victory Extra",D.ayQ,D.ayG,4293844402,4292262530,4280555016,4288878859,"blackletter","NgmyBlackletter","NgmyAbril","NgmyOldStandard",'a special "extra edition" announcing big news: exciting, proud and dramatic',!0,"sepia",!1,!0)
D.ayO=new C.yc(6,"circle")
D.ayF=new C.ws(4,"circle")
D.dkY=new C.lj("parchment","Royal Parchment",D.ayO,D.ayF,4293976763,4292658576,4281278992,4285211048,"centered","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","a royal proclamation printed on parchment: stately, noble and ceremonial",!0,"sepia",!1,!1)
D.ayJ=new C.ws(9,"shadow")
D.dkZ=new C.lj("broadsheet","City Broadsheet",D.a0p,D.ayJ,4294374118,4293583823,4279308561,4280110808,"blackletter","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","a dense city broadsheet: precise, trustworthy and well informed",!1,"bw",!1,!1)
D.dl9=new C.lj("daily","The Daily",D.ayK,D.a0o,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d4r=new C.yc(2,"splash")
D.ayH=new C.ws(6,"cutCorner")
D.dkV=new C.lj("tabloid","Big Tabloid",D.d4r,D.ayH,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.ayR=new C.yc(9,"minimal")
D.ayE=new C.ws(3,"rounded")
D.dl7=new C.lj("modern","Modern Digest",D.ayR,D.ayE,4294507260,4293060848,4279179050,4279080072,"split","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.ayM=new C.yc(3,"magazine")
D.dlc=new C.lj("midnight","Midnight Edition",D.ayM,D.a0o,4279310375,4278915104,4294047225,4294626325,"centered","NgmyOldStandard","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dl6=new C.lj("herald","NGMY Herald",D.ayL,D.ayE,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.dlb=new C.lj("metro","Metro Wire",D.ayQ,D.ayH,4294047225,4293060848,4278915616,4280640491,"bar","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d4q=new C.ws(8,"arch")
D.dl4=new C.lj("sunrise","Sunrise Post",D.ayM,D.d4q,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.dkX=new C.lj("forest","Green Leaf",D.ayP,D.ayD,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.dl_=new C.lj("neon","Neon Beat",D.ayN,D.ayG,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dkW=new C.lj("ocean","Blue Ocean",D.ayO,D.ayF,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dl5=new C.lj("gold","Golden Press",D.a0p,D.ayI,4279636746,4278847748,4294898631,4294626325,"blackletter","NgmyBlackletter","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"bw",!0,!0)
D.dl8=new C.lj("minimal","Paper White",D.ayR,D.ayJ,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.asu=w([D.dla,D.dl0,D.dl2,D.dl3,D.dl1,D.dld,D.dkY,D.dkZ,D.dl9,D.dkV,D.dl7,D.dlc,D.dl6,D.dlb,D.dl4,D.dkX,D.dl_,D.dkW,D.dl5,D.dl8],B.aA("M<lj>"))
D.dSX=new B.T(240,96)
D.dUL=new B.T(560,46)
D.cWw=w([D.dSX,D.dUL],x.G)
D.faF=new C.wE(0,"classic")
D.dif=new C.nd("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azQ,4294570461,4282000405,4284234270)
D.dir=new C.nd("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azR,4294635750,4281999378,4285213214)
D.dig=new C.nd("elegant_navy","Umoja Mzuri",y.s,D.a15,4294967035,4279378237,4290283019)
D.dit=new C.nd("elegant_gold","Umoja wa Dhahabu",y.Q,D.azZ,4294966515,4281016592,4289102906)
D.div=new C.nd("kente_sunset","Kente ya Jua",y.H,D.azS,4294964964,4282000405,4279983648)
D.did=new C.nd("indigo_mudcloth","Nguo ya Indigo",y.n,D.azT,4294439140,4279903102,4279903102)
D.dii=new C.nd("adinkra_royal","Muhuri wa Adinkra",y.z,D.azU,4294965484,4285218591,4287322667)
D.din=new C.nd("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azV,4294244340,4279196764,4279196764)
D.dip=new C.nd("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azW,4294505710,4279970378,4291058750)
D.faG=new C.wE(1,"ringsNdoa")
D.dih=new C.nd("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qB,4294966259,4279378237,4291404327)
D.faI=new C.wE(2,"coupleCards")
D.dis=new C.nd("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qB,4294966259,4279378237,4291404327)
D.faJ=new C.wE(3,"kuhoweshaForm")
D.dio=new C.nd("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.AX,4294966519,4279378237,4291404327)
D.faK=new C.wE(4,"mahariPande")
D.die=new C.nd("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qB,4294966259,4279904068,4291404327)
D.faL=new C.wE(5,"familiaMti")
D.diu=new C.nd("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.azX,4294966776,4280241466,4291404327)
D.faM=new C.wE(6,"ndoaSafi")
D.dil=new C.nd("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.AX,4294966519,4279378237,4291404327)
D.faN=new C.wE(7,"peteWide")
D.dik=new C.nd("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qB,4294966259,4282001936,4291404327)
D.faO=new C.wE(8,"muhuriCrest")
D.dij=new C.nd("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qB,4294966259,4279378237,4291404327)
D.faP=new C.wE(9,"fomuWazi")
D.dim=new C.nd("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.AX,4294966519,4279904068,4291404327)
D.faH=new C.wE(10,"upendoOrnate")
D.diq=new C.nd("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.azY,4294965493,4286200650,4291404327)
D.O3=w([D.dif,D.dir,D.dig,D.dit,D.div,D.did,D.dii,D.din,D.dip,D.dih,D.dis,D.dio,D.die,D.diu,D.dil,D.dik,D.dij,D.dim,D.diq],B.aA("M<nd>"))
D.B0=new C.aob(0,"landscape169")
D.nx=new C.aob(1,"portrait916")
D.cXc=w([D.B0,D.nx],B.aA("M<aob>"))
D.asB=w([A.hn,A.bJ,A.dh,A.i4,A.c],x.O)
D.t6=w([A.bQ,A.iA],x.O)
D.dSw=new B.T(1000,"M")
D.dVk=new B.T(900,"CM")
D.dUH=new B.T(500,"D")
D.dTl=new B.T(400,"CD")
D.dSx=new B.T(100,"C")
D.dVl=new B.T(90,"XC")
D.dUI=new B.T(50,"L")
D.dTm=new B.T(40,"XL")
D.dSB=new B.T(10,"X")
D.dVp=new B.T(9,"IX")
D.dUR=new B.T(5,"V")
D.dUC=new B.T(4,"IV")
D.dSQ=new B.T(1,"I")
D.cXI=w([D.dSw,D.dVk,D.dUH,D.dTl,D.dSx,D.dVl,D.dUI,D.dTm,D.dSB,D.dVp,D.dUR,D.dUC,D.dSQ],x.ek)
D.e7f=new B.d7(["open",A.jf,"Open & write","Keep writing this book"])
D.e7D=new B.d7(["print",A.rW,"Print as a book","Fold and staple it"])
D.cXP=w([D.e7f,D.e7D],B.aA("M<+(n,a_,n,n)>"))
D.cYo=w([D.a1d,D.m5,D.G_,D.P8,D.d7,D.P7],x.i)
D.e1c=new B.T(-1,"Small")
D.dSo=new B.T(0,"Normal")
D.dSP=new B.T(1,"Big")
D.dT5=new B.T(2,"Huge")
D.cYM=w([D.e1c,D.dSo,D.dSP,D.dT5],x.ek)
D.cZa=w([49,65,89,38,83,89],x.t)
D.cZh=w([A.vW,A.hn,A.bQ],x.O)
D.cZH=w([D.d7,D.m5,D.te,D.a1d,D.G_,D.P8],x.i)
D.axT=new B.dW([0,D.Jc,8,D.abk,12,D.abl],B.aA("dW<G,a1B>"))
D.dHC={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b7A=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cwm=w([A.bJ,D.b7A],x.O)
D.bHT=w([A.bO,A.bP],x.O)
D.cOW=w([A.bc,A.bg],x.O)
D.cK4=w([A.cd,A.b3,A.cV],x.O)
D.cXQ=w([A.ct,A.bA],x.O)
D.cDo=w([A.bb,A.f4],x.O)
D.cMz=w([A.b0,A.fo],x.O)
D.b1U=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cLU=w([D.b1U,A.nS],x.O)
D.cGV=w([A.iv,A.vY],x.O)
D.cDe=w([A.bo,A.cf],x.O)
D.d1h=new B.bt(D.dHC,[D.cwm,D.bHT,D.cOW,D.cK4,D.cXQ,D.cDo,D.cMz,D.cLU,D.cGV,D.cDe],B.aA("bt<n,al<x>>"))
D.dGR={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a03=new B.bt(D.dGR,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aA("bt<n,n>"))
D.a09=new B.bt(A.il,[],B.aA("bt<G,+icon3d,picture(n?,n?)>"))
D.d53=new F.L5(30,null)
D.dax=new F.m0("Chapter 1","","","")
D.cX_=w([D.dax],x.B)
D.daB=new F.qH("My Book","","",D.cX_,E.azb)
D.daz=new F.tN("starry",null,null,null,null,"","","")
D.daC=new F.qH("Dream Big","","",E.a_h,D.daz)
D.daA=new F.tN("story",null,null,null,null,"","","")
D.daD=new F.qH("Little Lion","","",E.a_h,D.daA)
D.day=new F.tN("vintage",null,null,null,null,"","","")
D.daE=new F.qH("Our Story","","",E.a_h,D.day)
D.ddD=new C.D6("","NGMY","","")
D.dkU=new C.yp("The NGMY Times","","","By the NGMY Newsroom","",A.U,"","","")
D.dCP=new C.aYp(null,null,null,null)
D.dEx=new C.aog(null)
D.dEK=new C.aoM(0,"smaller")
D.dEL=new C.aoM(1,"bigger")
D.aAt=new C.aoM(2,"fit")
D.dJs=new B.v(3,6)
D.dJB=new B.v(4,8)
D.dMd=new B.B(E.ac6,T.a7Q,null)
D.dMh=new B.B(A.UP,A.mf,null)
D.bs5=new B.ac(A.mF,16,A.c2,null,null,null)
D.dMl=new B.B(A.kS,D.bs5,null)
D.aY8=new B.f9(2.2,null,null,null,null,A.c,null,null,null,null)
D.dMw=new B.B(A.DF,D.aY8,null)
D.bC4=new B.ac(A.cu,16,A.aB,null,null,null)
D.dMz=new B.B(A.ef,D.bC4,null)
D.eJz=new B.w("Play",null,A.ot,null,null,null,null,null,null,null,null,null)
D.cPa=w([U.ai7,A.tw,D.eJz],x.p)
D.eaE=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cPa,null)
D.dMC=new B.B(A.rD,D.eaE,null)
D.aYh=new B.f9(2.4,null,null,null,null,null,null,null,null,null)
D.efs=new B.a4(20,20,D.aYh,null)
D.dMG=new B.B(A.kS,D.efs,null)
D.eRV=new B.w("Seconds per slide",null,A.hi,null,null,null,null,null,null,null,null,null)
D.dMN=new B.B(A.bk,D.eRV,null)
D.dN9=new C.a6i(2,"print")
D.dNc=new B.iD(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dOP=new B.h_("/Annot")
D.dOR=new B.h_("/URI")
D.eEs=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dQz=new B.jb("share",48,D.eEs,null,B.aA("jb<n>"))
D.bC_=new B.ac(A.dN,14,A.eN,null,null,null)
D.dQI=new B.cE(null,-2,-2,null,null,null,D.bC_,null)
D.b53=new B.x(0.3333333333333333,0,0,0,A.t)
D.cy8=w([D.b53,A.K],x.O)
D.bHi=new B.a8(A.a_,A.a7,A.w,D.cy8,null,null)
D.aRn=new B.o(null,null,null,null,null,D.bHi,A.n)
D.bbB=new B.ky(D.aRn,A.b6,null,null)
D.dQU=new B.cE(0,0,null,0,8,null,D.bbB,null)
D.cT0=w([A.hD,A.oM,A.cl],x.O)
D.dRx=new B.bR(A.B,0.5,A.w,null,0,D.cT0,null,null)
D.dT0=new B.T(0.22,A.bg)
D.dVx=new B.T("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.dWz=new B.T(0.5,A.hl)
D.e0r=new B.T(0.78,A.aR)
D.e76=new B.d7([A.bD,0.22,0.7,2.6])
D.e7b=new B.d7([A.bb,0.36,1.2,1.3])
D.e7h=new B.d7([A.dM,0.28,0.2,0.4])
D.e7m=new B.d7([A.cA,0.05,0.3,0.35])
D.e7s=new B.d7([A.bo,0.28,0.9,0])
D.e7A=new B.d7([A.az,-0.25,-0.15,0.45])
D.e8g=new B.d7([A.cd,0.42,1,4.1])
D.eam=new B.a7a(9)
D.btd=new B.ac(A.EA,28,A.cV,null,null,null)
D.eSq=new B.w("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bkm=new B.bG(1,A.bp,D.eSq,null)
D.cVU=w([D.btd,A.aw,D.bkm],x.p)
D.eaz=new B.cD(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cVU,null)
D.bto=new B.ac(A.p5,16,A.c,null,null,null)
D.eTL=new B.w("Book",null,A.qP,null,null,null,null,null,null,null,null,null)
D.cZg=w([D.bto,A.ez,D.eTL],x.p)
D.eaG=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cZg,null)
D.bzE=new B.ac(A.iY,10,A.c,null,null,null)
D.eHS=new B.w("Pro",null,A.nC,null,null,null,null,null,null,null,null,null)
D.cPg=w([D.bzE,A.v4,D.eHS],x.p)
D.eaJ=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cPg,null)
D.eRU=new B.w("Make a newspaper",null,Am.QU,null,null,null,null,null,null,null,null,null)
D.bIo=w([E.Yi,A.ab,D.eRU],x.p)
D.eaK=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.bIo,null)
D.byh=new B.ac(A.kV,18,A.bJ,null,null,null)
D.eJM=new B.w("Ending celebration",null,A.jq,null,null,null,null,null,null,null,null,null)
D.cV2=w([D.byh,A.bq,D.eJM],x.p)
D.eaN=new B.cD(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cV2,null)
D.bzq=new B.ac(A.jf,18,A.kO,null,null,null)
D.epF=new B.F(!0,A.kO,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU0=new B.w("Write",null,D.epF,null,null,null,null,null,null,null,null,null)
D.cFg=w([D.bzq,A.ab,D.eU0],x.p)
D.eaS=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cFg,null)
D.eHR=new B.w("Download picture",null,A.px,null,null,null,null,null,null,null,null,null)
D.bm_=new B.pL(A.e8,A.B,A.h,D.eHR,null)
D.bma=new B.dp(1,A.ck,D.bm_,null)
D.cPz=w([K.ahY,A.ab,D.bma],x.p)
D.eaT=new B.cD(A.aZ,A.b5,A.j,A.m,null,A.p,null,0,D.cPz,null)
D.bv8=new B.ac(A.EA,22,A.cV,null,null,null)
D.eQG=new B.w("NGMY NEWS",null,H.a3N,null,null,null,null,null,null,null,null,null)
D.cxF=w([D.bv8,A.ab,D.eQG],x.p)
D.eb0=new B.cD(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cxF,null)
D.ebb=new B.oD(!1,!1,null,T.SJ,null,A.bV,null,null,null)
D.a2P=new B.jB([D.ca,D.d7,D.te,D.FZ,D.tf,D.aAj],B.aA("jB<hm>"))
D.dIG={title:0,quote:1,closing:2,bio:3}
D.ebY=new B.fd(D.dIG,4,x.M)
D.dH7={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ec_=new B.fd(D.dH7,5,x.M)
D.dId={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2Q=new B.fd(D.dId,8,x.M)
D.dHK={Design:0,Transitions:1,Insert:2}
D.ec3=new B.fd(D.dHK,3,x.M)
D.faX=new B.jB([D.a1e],B.aA("jB<v5>"))
D.dHR={float3d:0,drift:1,pulse:2}
D.ec6=new B.fd(D.dHR,3,x.M)
D.aGZ=new B.jB([D.FW,D.FX,D.FY],B.aA("jB<m4>"))
D.dH4={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aH0=new B.fd(D.dH4,14,x.M)
D.faY=new B.fd(A.il,0,B.aA("fd<v5>"))
D.dHO={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Q4=new B.fd(D.dHO,4,x.M)
D.dGZ={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aH2=new B.fd(D.dGZ,30,x.M)
D.dHW={circle:0,triangle:1,hexagon:2,diamond:3}
D.ecl=new B.fd(D.dHW,4,x.M)
D.ees=new B.ap(390,844)
D.efc=new B.a4(20,20,A2.Ii,null)
D.aHN=new B.a4(null,2.5,null,null)
D.efm=new B.a4(18,18,A2.Ii,null)
D.bzu=new B.ac(A.iG,19,A.c,null,null,null)
D.efx=new B.a4(38,38,D.bzu,null)
D.bxU=new B.ac(A.xb,22,A.c,null,null,null)
D.efz=new B.a4(40,40,D.bxU,null)
D.eg6=new B.hI(2,10,10,1.15,null)
D.aHV=new B.hI(2,16,14,0.62,null)
D.biy=new B.L(32,30,32,40)
D.aZp=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bta=new B.ac(A.p0,56,D.aZp,null,null,null)
D.aaF=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.erD=new B.F(!0,D.aaF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNV=new B.w("Your books will live here.",null,D.erD,null,A.L,null,null,null,null,null,null,null)
D.cHN=w([D.bta,A.T,D.eNV],x.p)
D.baO=new B.fs(A.af,A.e,A.j,A.m,null,A.p,null,0,D.cHN,null)
D.dML=new B.B(D.biy,D.baO,null)
D.egr=new B.lJ(D.dML,null)
D.eNS=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.egJ=new B.aX(D.eNS,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eM4=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.egK=new B.aX(D.eM4,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQI=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.egS=new B.aX(D.eQI,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRa=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eh6=new B.aX(D.eRa,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eKS=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ehj=new B.aX(D.eKS,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eXA=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ehD=new B.aX(D.eXA,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eV_=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ehO=new B.aX(D.eV_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRi=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eiu=new B.aX(D.eRi,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eGh=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eiK=new B.aX(D.eGh,null,null,null,null,null,null,null,A.ip,null,null,null,null,A.oS,!1,null,null,null,A.q,null)
D.eNz=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ej2=new B.aX(D.eNz,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNg=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ej3=new B.aX(D.eNg,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eT8=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ej4=new B.aX(D.eT8,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eCH=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ejd=new B.aX(D.eCH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eIZ=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ejA=new B.aX(D.eIZ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eWu=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ejC=new B.aX(D.eWu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eW6=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ejG=new B.aX(D.eW6,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eBP=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ejI=new B.aX(D.eBP,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eSl=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ejR=new B.aX(D.eSl,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVH=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ek5=new B.aX(D.eVH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVy=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ek7=new B.aX(D.eVy,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eBH=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ekd=new B.aX(D.eBH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eFm=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekF=new B.aX(D.eFm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUN=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekQ=new B.aX(D.eUN,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eFa=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.el4=new B.aX(D.eFa,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b4s=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cwy=w([A.i4,A.nS,D.b4s,D.a87,A.i4],x.O)
D.els=new B.fQ(A.B,0,6.283185307179586,A.w,D.cwy,null,null)
D.cEx=w([A.bJ,A.bQ,A.hn,D.zc,A.bJ],x.O)
D.aIu=new B.fQ(A.B,0,6.283185307179586,A.w,D.cEx,null,null)
D.cR2=w([A.cd,A.bD,A.bb,A.br,A.cV,A.cd],x.O)
D.elx=new B.fQ(A.B,0,6.283185307179586,A.w,D.cR2,null,null)
D.cym=w([A.oQ,A.nT,A.z1,A.i4,A.oQ],x.O)
D.ely=new B.fQ(A.B,0,6.283185307179586,A.w,D.cym,null,null)
D.cQX=w([A.aN,A.bP,A.aJ,A.ak,A.aN],x.O)
D.elz=new B.fQ(A.B,0,6.283185307179586,A.w,D.cQX,null,null)
D.cXz=w([A.bo,A.bb,A.bD,A.cd,A.bo],x.O)
D.elB=new B.fQ(A.B,0,6.283185307179586,A.w,D.cXz,null,null)
D.b4G=new B.x(1,0,1,1,A.t)
D.b_w=new B.x(1,1,0,1,A.t)
D.cU9=w([A.CB,A.a9A,H.a8J,D.b4G,H.a94,D.b_w,A.CB],x.O)
D.elC=new B.fQ(A.B,0,6.283185307179586,A.w,D.cU9,null,null)
D.elR=new C.asK(2,"immersiveSticky")
D.elS=new C.asK(3,"edgeToEdge")
D.elT=new C.asK(4,"manual")
D.eo1=new B.F(!0,A.nM,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJ_=new B.F(!0,A.fM,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoy=new B.F(!0,E.mp,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epV=new B.F(!0,A.al,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqW=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er4=new B.F(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erp=new B.F(!0,A.eN,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esF=new B.F(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esO=new B.F(!0,A.j9,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et1=new B.qZ(!0,A.Gg,null,null,null,null,A.dm,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.etu=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu5=new B.F(!0,A.iU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euq=new B.F(!0,A.aB,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dNf=new B.iD(1,1,0.7568627450980392,0.027450980392156862)
D.euu=new B.qZ(!0,D.dNf,null,null,null,null,A.dm,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9H=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJG=new B.F(!0,D.a9H,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euA=new B.F(!0,D.aaF,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euB=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJI=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev9=new B.qZ(!0,A.oi,null,null,null,null,A.dm,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.evs=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a45=new B.F(!0,A.aB,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evX=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evZ=new B.F(!0,D.a9H,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.H8=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewq=new B.F(!0,A.bQ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewy=new B.F(!0,A.bP,null,null,null,null,14,A.a1,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewB=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewR=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqF,null,null,null)
D.ewT=new B.F(!0,A.cN,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewV=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex6=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exh=new B.F(!0,A.dD,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exP=new B.F(!0,A.aP,null,null,null,null,null,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exY=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new B.F(!0,A.al,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKf=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKh=new B.F(!0,A.c2,null,null,null,null,11.5,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8P=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.ezV=new B.F(!0,D.b8P,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKp=new B.F(!0,E.mp,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAm=new B.F(!0,A.bP,null,null,null,null,11,A.a1,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAp=new B.F(!0,O.kM,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etH=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBv=new B.w("NEW",null,D.etH,null,null,null,null,null,null,null,null,null)
D.eBK=new B.w("Hati ya Kuhowesha",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eC8=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eCr=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eD5=new B.w("Big quote mark",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eD7=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eDj=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eDM=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eDN=new B.w("How many slides?",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eEj=new B.w("Transfer",null,A.cb,null,null,null,null,null,null,null,null,null)
D.epI=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eED=new B.w("Luxury FX",null,D.epI,null,null,null,null,null,null,null,null,null)
D.eEV=new B.w("Font",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eF5=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eFb=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.ezs=new B.F(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFj=new B.w("Example  GA847",null,D.ezs,null,null,null,null,null,null,null,null,null)
D.eFH=new B.w("Design shapes",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eFP=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eFT=new B.w("Non-stop (loop)",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eG5=new B.w("Hati ya Kuhoweya",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eGo=new B.w("Photo studio",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.eGO=new B.w("Add your picture",null,A.l5,null,null,null,null,null,null,null,null,null)
D.et2=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGP=new B.w("Enter document code",null,D.et2,null,A.L,null,null,null,null,null,null,null)
D.eqK=new B.F(!0,E.mp,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new B.w("Delete this book?",null,D.eqK,null,A.L,null,null,null,null,null,null,null)
D.ev0=new B.F(!0,E.mp,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHY=new B.w("Your library",null,D.ev0,null,null,null,null,null,null,null,null,null)
D.eI1=new B.w("Delete",null,A.aJA,null,null,null,null,null,null,null,null,null)
D.eI3=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Al.H6,null,null,null,null,null,null,null,null,null)
D.eIc=new B.w("Element flies in",null,A.aJM,null,null,null,null,null,null,null,null,null)
D.R6=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eIz=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new B.w("Cancel",null,E.aJX,null,null,null,null,null,null,null,null,null)
D.eIY=new B.w("The lines and circles that come with the design",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eyk=new B.F(!0,A.j8,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJn=new B.w("DOCUMENT CODE",null,D.eyk,null,null,null,null,null,null,null,null,null)
D.eK5=new B.w("Quotes",null,G.a4p,null,null,null,null,null,null,null,null,null)
D.ess=new B.F(!0,O.kM,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKd=new B.w("Add a picture",null,D.ess,null,null,null,null,null,null,null,null,null)
D.eKk=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,Q.aJB,null,A.L,null,null,null,null,null,null,null)
D.eKn=new B.w("Look & feel",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eKr=new B.w("Rings",null,A.jq,null,null,null,null,null,null,null,null,null)
D.eKw=new B.w("W",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eKG=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eKX=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a48,null,A.L,null,null,null,null,null,null,null)
D.eKZ=new B.w("Write your book",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eLF=new B.w("Add page",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eLT=new B.w("Malipo ya Awamu ya Mahari",null,A.h5,null,null,null,null,null,null,null,null,null)
D.esR=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM5=new B.w("Create with AI",null,D.esR,null,A.L,null,null,null,null,null,null,null)
D.eMx=new B.w("Apply look",null,A.jq,null,null,null,null,null,null,null,null,null)
D.etz=new B.F(!0,A.eZ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNi=new B.w("Type your presentation below",null,D.etz,null,A.L,null,null,null,null,null,null,null)
D.eNl=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aKs,null,A.L,null,null,null,null,null,null,null)
D.eNn=new B.w("Keep it",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eoL=new B.F(!0,A.cJ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNu=new B.w("Done",null,D.eoL,null,null,null,null,null,null,null,null,null)
D.eNN=new B.w("Delete",null,A.mR,null,null,null,null,null,null,null,null,null)
D.eNX=new B.w("Hati ya Kiapo cha Uongozi",null,A.h5,null,null,null,null,null,null,null,null,null)
D.erS=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eON=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.erS,null,A.L,null,null,null,null,null,null,null)
D.eP7=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new B.w("Layout",null,A.QW,null,null,null,null,null,null,null,null,null)
D.ePO=new B.w("Print",null,A.cq,null,null,null,null,null,null,null,null,null)
D.ePR=new B.w("X",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eQp=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aj.a41,null,null,null,null,null,null,null,null,null)
D.eR3=new B.w("Hati ya Kuhowa",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eR5=new B.w("Choose a class template",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eRc=new B.w("Download the newspaper picture",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRn=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.eRu=new B.w("Done",null,A.aKe,null,null,null,null,null,null,null,null,null)
D.eRD=new B.w("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eRE=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.eRS=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,H.aJi,null,null,null,null,null,null,null,null,null)
D.eSJ=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.eSK=new B.w("What would you like to do?",null,D.aJG,null,null,null,null,null,null,null,null,null)
D.eSO=new B.w("Delete",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eTf=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.eTj=new B.w("Hati (Documents)",null,A.h5,null,null,null,null,null,null,null,null,null)
D.ezj=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTy=new B.w("Delete presentation?",null,D.ezj,null,A.L,null,null,null,null,null,null,null)
D.eTP=new B.w("After the last slide it starts again from the first",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eTZ=new B.w("\ud83c\udf33",null,A.H3,null,A.L,null,null,null,null,null,null,null)
D.eUg=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eUn=new B.w("Transfer document",null,A.or,null,null,null,null,null,null,null,null,null)
D.eUx=new B.w("Add to the slides",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eUR=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.eV5=new B.w("Make a book",null,I.aJg,null,null,null,null,null,null,null,null,null)
D.eV9=new B.w("Books",null,A.cq,null,null,null,null,null,null,null,null,null)
D.esn=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new B.w("Keep this page open until it finishes.",null,D.esn,null,null,null,null,null,null,null,null,null)
D.eVd=new B.w("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eVo=new B.w("Use this ending",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eVw=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new B.w("Upload a different logo",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eVO=new B.w("Delete from the database?",null,A.l5,null,null,null,null,null,null,null,null,null)
D.eVP=new B.w("H",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eWa=new B.w("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eWz=new B.w("Cover",null,D.aKp,null,null,null,null,null,null,null,null,null)
D.eWD=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new B.w("Each page becomes its own slide you can present",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eWZ=new B.w("Y",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eXd=new B.w("Edit text",null,A.H4,null,null,null,null,null,null,null,null,null)
D.eZm=B.dM("a65")
D.BS=new C.au2(0,"none")
D.aLY=new C.au2(1,"zipCrypto")
D.aLZ=new C.au2(2,"aes")
D.f0G=new F.Nw("","",null)
D.f1M=new C.b8o(null)
D.f2S=new C.Xs(null)
D.f3X=new C.aaQ(null)
D.f3Z=new C.aB2(null)
D.f6K=new C.YG(null)
D.f7_=new C.Za(null)
D.f7i=new C.bpE(null)})();(function staticFields(){$.fT6=null
$.fT7=null
$.fT8=null
$.fT9=null
$.fBM=B.uf("_lastQuoRemDigits")
$.fBN=B.uf("_lastQuoRemUsed")
$.aun=B.uf("_lastRemUsed")
$.fBO=B.uf("_lastRem_nsh")
$.pB=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a4W=B.Q(x.N,x.I)
$.fzm=!1
$.fXO=B.Q(B.aA("kB"),x.N)
$.fY_=B.Q(B.aA("kB"),x.E)
$.fW1=!1
$.bvb="q"
$.Ou=0
$.Bk=B.Q(x.N,B.aA("al<yr>"))
$.fWo=!1
$.fDk=!1
$.h1s=null
$.hv1=B.Q(x.N,B.aA("au<n?>"))
$.IF=""
$.iN=0
$.fPV=function(){var w=x.N
return B.Q(w,w)}()
$.fPU=B.Q(x.N,x.R)
$.fDF=!1
$.adq=B.Q(x.N,x.E)
$.fEq=0
$.bgk=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hTo","BG",()=>C.b5W(0))
w($,"hTm","a0q",()=>C.b5W(1))
w($,"hTn","h4X",()=>C.b5W(2))
w($,"hTl","fI_",()=>$.a0q().u9(0))
w($,"hTj","h4V",()=>C.b5W(1e4))
w($,"hTk","h4W",()=>B.CO(8))
w($,"hPb","h2Y",()=>B.CO(0))
w($,"hPj","h31",()=>B.CO(0))
w($,"hPi","h30",()=>B.bSt(0))
w($,"hX1","h6W",()=>{var v,u,t=x.N
t=B.Q(t,t)
for(v=D.a03.gdH(D.a03),v=v.gaf(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hXr","bzw",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mo(new C.fl5(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mo(new C.fl6(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mo(new C.fl7(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mo(new C.fli(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mo(new C.fln(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mo(new C.flo(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mo(new C.flp(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mo(new C.flq(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mo(new C.flr(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mo(new C.fls(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mo(new C.flt(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mo(new C.fl8(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mo(new C.fl9(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mo(new C.fla(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mo(new C.flb(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mo(new C.flc(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mo(new C.fld(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mo(new C.fle(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mo(new C.flf(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mo(new C.flg(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mo(new C.flh(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mo(new C.flj(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mo(new C.flk(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mo(new C.fll(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mo(new C.flm(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.aA("M<Df>"))})
w($,"hX4","h6Y",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["eJUxZ1m8Mtdz5VMNEBkpUgNmqdA="]=a.current})($__dart_deferred_initializers__);