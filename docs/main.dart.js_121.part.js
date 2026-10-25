((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,A2,Ad,Ae,A3,Af,Ag,C={
t2(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fBE(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
HW(d){var w
if(d===0)return $.BE()
if(d===1)return $.a0o()
if(d===2)return $.h4J()
if(Math.abs(d)<4294967296)return C.b5U(A.o.M(d))
w=C.hpc(d)
return w},
b5U(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t2(4,w)
return new C.no(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t2(1,w)
return new C.no(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.ar(d,16)
v=C.t2(2,w)
return new C.no(v===0?!1:s,w,v)}v=A.o.ak(A.o.gagI(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t2(v,w)
return new C.no(v===0?!1:s,w,v)},
hpc(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.O(B.dD("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BE()
w=$.h4I()
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
q=new C.no(!1,r,4)
if(s<0)p=q.lU(0,-s)
else p=s>0?q.dN(0,s):q
return p},
fBF(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fSY(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.J(f,16),p=16-q,o=A.o.dN(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fl(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dN(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fST(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.J(f,16)===0)return C.fBF(d,e,s,g)
w=e+s+1
C.fSY(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hpf(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.J(f,16),q=16-r,p=A.o.dN(1,r)-1,o=A.o.fl(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dN(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fl(u,r)}w&2&&B.ah(g)
g[n]=o},
cxO(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hpd(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b5V(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}},
fSZ(d,e,f,g,h,i){var w,v,u,t,s,r
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
hpe(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
cxP:function cxP(){},
cxQ:function cxQ(){},
cxR:function cxR(d,e){this.a=d
this.b=e},
cxS:function cxS(d){this.a=d},
aNK:function aNK(d,e){this.a=d
this.b=e},
fJ9(d,e,f){var w=new C.PP(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
PP:function PP(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1z:function a1z(d,e){this.a=d
this.b=e},
bCy:function bCy(d){this.a=d
this.c=this.b=0},
h7W(){return new C.bBi()},
bBi:function bBi(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cpX:function cpX(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hoV(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.ck(d.gcLI(d)))
v=f*2+2
u=C.fQD(C.fQF(),64)
t=new C.caH(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.caI(e,1000,v)
s=new Uint8Array(v)
return A.aD.dA(s,0,t.czF(w,0,s,0))},
cpV:function cpV(d,e){this.c=d
this.d=e},
au0:function au0(d,e){this.a=d
this.b=e},
cpY:function cpY(d,e,f,g){var _=this
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
b4E:function b4E(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cpW:function cpW(){this.a=$},
fSo(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
h7F(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bzT:function bzT(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fGW(d,e){e&=31
return(d&$.pA[e])<<e>>>0},
mW(d,e){e&=31
return(d>>>e|C.fGW(d,32-e))>>>0},
fQE(d){var w,v=new C.apM()
if(B.iw(d))v.aFr(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fQF(){var w=C.fQE(0),v=new Uint8Array(4),u=x.r
u=new C.caJ(w,v,A.Ci,5,B.bT(5,0,!1,u),B.bT(80,0,!1,u))
u.l2(0)
return u},
fQD(d,e){var w=new C.caF(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
caE:function caE(){},
caI:function caI(d,e,f){this.a=d
this.b=e
this.c=f},
caC:function caC(){},
apL:function apL(d){this.a=d},
caH:function caH(d){this.a=$
this.b=d
this.c=$},
caD:function caD(){},
caB:function caB(){},
apM:function apM(){this.b=this.a=$},
caG:function caG(){},
caJ:function caJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
caF:function caF(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
caA:function caA(){},
caz:function caz(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bIq:function bIq(){},
bIr:function bIr(d){this.a=d},
hs5(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6a:function b6a(){},
cjX:function cjX(){},
bJj:function bJj(d,e){this.a=d
this.b=!1
this.c=e},
bJk:function bJk(){},
hAt(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
asF(d){var w=0,v=B.j(x.H),u
var $async$asF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.ele?2:4
break
case 2:w=5
return B.b(A.jI.fK("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$asF)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jI.fK("SystemChrome.setEnabledSystemUIOverlays",C.hAt(null),u),$async$asF)
case 6:case 3:return B.h(null,v)}})
return B.i($async$asF,v)},
asI:function asI(d,e){this.a=d
this.b=e},
a63:function a63(d){this.a=d},
fxF(d,e){return new C.aS1(e,d,null)},
aS1:function aS1(d,e,f){this.e=d
this.c=e
this.a=f},
axs:function axs(d,e,f,g,h){var _=this
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
hCZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.f99(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
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
f99:function f99(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
akK(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$akK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.aed("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$akK)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d2(s,x.f)
t=B.cy(t,new C.bTr(),t.$ti.k("E.E"),x.P)
r=B.z(t,B.a2(t).k("E.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bTs())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akK,v)},
akM(d){var w=0,v=B.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j
var $async$akM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akK(),$async$akM)
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
return B.b(B.nw("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.D(["deck",m.ad(),"savedAt",l],t,q),null),$async$akM)
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
return B.b(B.nw("ngmy_menu_lib_v1_zzslides_index",B.D(["items",s,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],t,q),null),$async$akM)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akM,v)},
bTt(d){return C.hdi(d)},
hdi(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bTt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aed("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hq),$async$bTt)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.TP(B.Y(q,x.N,x.z))
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
return B.i($async$bTt,v)},
akL(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$akL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akK(),$async$akL)
case 3:r=f
if(r==null){u=!1
w=1
break}J.mX(r,new C.bTu(d))
w=4
return B.b(B.nw("ngmy_menu_lib_v1_zzslides_index",B.D(["items",r,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),null),$async$akL)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aLO("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$akL)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akL,v)},
bTr:function bTr(){},
bTs:function bTs(){},
bTu:function bTu(d){this.a=d},
hMz(d,e,f){return B.c1(A.K,new C.foa(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
foa:function foa(d,e,f){this.a=d
this.b=e
this.c=f},
ZA:function ZA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFI:function aFI(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
ePO:function ePO(d,e){this.a=d
this.b=e},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d,e,f){this.a=d
this.b=e
this.c=f},
ePP:function ePP(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
ePR:function ePR(d,e){this.a=d
this.b=e},
ePJ:function ePJ(d){this.a=d},
ePH:function ePH(d){this.a=d},
ePI:function ePI(d){this.a=d},
ePK:function ePK(d){this.a=d},
ePL:function ePL(d){this.a=d},
ePY:function ePY(d,e){this.a=d
this.b=e},
ePX:function ePX(d,e){this.a=d
this.b=e},
ePN:function ePN(d,e,f){this.a=d
this.b=e
this.c=f},
ePM:function ePM(d,e,f){this.a=d
this.b=e
this.c=f},
ePV:function ePV(d,e){this.a=d
this.b=e},
ePW:function ePW(d,e){this.a=d
this.b=e},
eQ0:function eQ0(d){this.a=d},
eQ1:function eQ1(d,e){this.a=d
this.b=e},
eQ_:function eQ_(d,e){this.a=d
this.b=e},
ePZ:function ePZ(){},
fVj(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d2(w,x.f)
v=B.cy(v,new C.eWZ(),v.$ti.k("E.E"),x.ea)
u=B.a2(v).k("a3<E.E>")
v=B.z(new B.a3(v,new C.eX_(),u),u.k("E.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_z(d){return C.hEb(d)},
hEb(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.Q(x.N,x.ea)
m=new C.fbk(n)
t=4
j=m
i=C
w=7
return B.b(B.a07("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_z)
case 7:j.$1(i.fVj(f))
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
return B.b(B.av(),$async$a_z)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fVj(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.eX7(d),$async$a_z)
case 13:p=j.z(new i.a3(h,new g.fbi(f),o),o.k("E.E"))
A.d.aY(p,new C.fbj())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_z,v)},
aeN(d,e){return C.hMe(d,e)},
hMe(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aeN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b3(e,new C.fnI(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.aj(n,null)
q=!1
t=4
w=7
return B.b(B.aeF("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeN)
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
return B.b(B.av(),$async$aeN)
case 12:p=g
w=13
return B.b(p.an("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeN)
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
return B.i($async$aeN,v)},
eX7(d){return C.hto(d)},
hto(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eX7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.av(),$async$eX7)
case 7:r=f
q=r.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kl(q,B.S(q).c)
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
return B.i($async$eX7,v)},
adF(d,e){return C.hCR(d,e)},
hCR(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adF=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.av(),$async$adF)
case 6:s=g
r=B.aY(x.N)
q=s.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fS(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("cj.E"))
w=7
return B.b(s.an("StringList","ngmy_books_deleted_v1_"+r,q),$async$adF)
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
return B.b(C.a_z(d),$async$adF)
case 8:n=g
J.mX(n,new C.f8Q(e))
w=9
return B.b(C.aeN(d,n),$async$adF)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adF,v)},
hME(d,e){return B.a6(d,!1).ct(B.eN(new C.fox(e),!0,null,x.H))},
hph(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e7(w.d,new C.cza())},
nQ:function nQ(d,e,f){this.a=d
this.b=e
this.c=f},
eWZ:function eWZ(){},
eX_:function eX_(){},
fbk:function fbk(d){this.a=d},
fbi:function fbi(d){this.a=d},
fbj:function fbj(){},
fnI:function fnI(){},
f8Q:function f8Q(d){this.a=d},
fox:function fox(d){this.a=d},
Wn:function Wn(d,e){this.c=d
this.a=e},
auw:function auw(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cza:function cza(){},
czc:function czc(d,e){this.a=d
this.b=e},
czf:function czf(d){this.a=d},
czg:function czg(d){this.a=d},
cze:function cze(){},
czh:function czh(d,e){this.a=d
this.b=e},
czd:function czd(d){this.a=d},
czi:function czi(){},
czb:function czb(d,e){this.a=d
this.b=e},
czj:function czj(){},
cz6:function cz6(d){this.a=d},
cz4:function cz4(d){this.a=d},
cz5:function cz5(d){this.a=d},
cz7:function cz7(d,e){this.a=d
this.b=e},
cz3:function cz3(d){this.a=d},
cz2:function cz2(d){this.a=d},
cz0:function cz0(d,e){this.a=d
this.b=e},
cz1:function cz1(d){this.a=d},
cz9:function cz9(){},
cz8:function cz8(d){this.a=d},
cz_:function cz_(d,e){this.a=d
this.b=e},
cyZ:function cyZ(d,e){this.a=d
this.b=e},
cyY:function cyY(d,e){this.a=d
this.b=e},
czk:function czk(d){this.a=d},
Wl:function Wl(d,e,f){this.c=d
this.d=e
this.a=f},
aBD:function aBD(d,e,f){this.a=d
this.b=e
this.c=f},
aus:function aus(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cyr:function cyr(d){this.a=d},
cyq:function cyq(d){this.a=d},
cyt:function cyt(d,e,f){this.a=d
this.b=e
this.c=f},
cyB:function cyB(){},
cyC:function cyC(d){this.a=d},
cyu:function cyu(d,e,f){this.a=d
this.b=e
this.c=f},
cys:function cys(d,e){this.a=d
this.b=e},
cyw:function cyw(d,e){this.a=d
this.b=e},
cyx:function cyx(d,e){this.a=d
this.b=e},
cyy:function cyy(d,e){this.a=d
this.b=e},
cyv:function cyv(d){this.a=d},
cyA:function cyA(d){this.a=d},
cyz:function cyz(d,e){this.a=d
this.b=e},
cyH:function cyH(d){this.a=d},
cyD:function cyD(d,e){this.a=d
this.b=e},
cyE:function cyE(d,e){this.a=d
this.b=e},
cyF:function cyF(d,e){this.a=d
this.b=e},
cyG:function cyG(d,e){this.a=d
this.b=e},
auu:function auu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hGt(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bA(new C.ffD(),x.H).eQ(new C.ffE())}}else if(s)C.fWJ()}catch(t){}},
fWJ(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eQ(new C.f05())}catch(u){}},
hGw(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
ffD:function ffD(){},
ffE:function ffE(){},
f05:function f05(){},
h07(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e_(v,w,"").split(":"))},
h04(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kz)return null
return A.a.aV(w,14)},
fFH(d){var w
if(d.b!==D.kz)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aV(w,21)},
hGT(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h08(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hGO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.Q(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kr(0,f)
t=x.N
u=B.cy(u,new C.fgy(),B.a2(u).k("E.E"),t)
s=B.z(u,B.a2(u).k("E.E"))
if(s.length===0)return B.Q(t,t)
for(u=v.kr(0,f),u=new B.HV(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Px(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Px(A.a.aV(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.Q(t,t)
k=B.Q(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hGM(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("E.E"))
A.d.aY(q,new C.fgx())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c5(s,"]"))continue
w=B.aMK(w,u,s,0)}return w},
hGQ(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a02:$.h6I(),s=x.N,r=B.Q(s,s)
for(s=t.gdH(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c5(u,"]"))continue
r.m(0,w.b,u)}return r},
h05(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eXZ(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.h07(q)===e)return q}return null},
hGR(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aV(v,u)
return A.d.gI(D.EN).a},
hGS(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abE(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abE(0,0,0)
v=C.eXZ(b6,b0)
u=C.eXZ(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hGQ(b2,C.hGO(C.h05(b2),v.r))
if(s.a!==0){u.r=C.hGM(C.h05(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.h07(o[m])
if(l==null||l==="utangulizi")continue
r.G(0,l)}for(q=B.ee(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eXZ(b6,n)
i=C.eXZ(b5,n)
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
a0=C.fFH(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.h04(a8)===a0||C.fFH(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.P6(a1,new C.fgE(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iN
$.iN=a9+1
A.d.G(a1,new C.ew(""+1000*a6+"_"+a9,D.kz,a2,a3,a4,a5,"",24,A.a1,A.bi,A.ay,4279310375,A.bn,d.at,D.b7,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ca,0,"","","","","",!1,0));++e}b5.f=new B.N(Date.now(),0,!1)
return new B.abE(k,t,e)},
hGN(d){var w=C.hGR(d)
if(d.w==="hati_kuhowa")return C.h_s("",w)
return C.h_r("",w)},
fgy:function fgy(){},
fgx:function fgx(){},
fgE:function fgE(d){this.a=d},
fWt(){var w=new B.N(Date.now(),0,!1),v=new C.f_9()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bv(w)},
fFP(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fhw(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kz&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h0l(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fhw(d)
w=B.bg(u)
if(w==null)return!C.fhw(d)
return new B.N(Date.now(),0,!1).a4().cT(w.a4().bL(18e9))},
hHy(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.N(Date.now(),0,!1).a4().aa()},
hhm(d){return A.a.i(d).toLowerCase()},
amS(d){return C.hho(d)},
hho(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$amS=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.av(),$async$amS)
case 7:r=f
p=r.rk("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.I(o,C.hL2(),B.S(o).k("I<1,n>")).bZ(0,new C.c2X())
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
return B.i($async$amS,v)},
amR(d,e){return C.hhn(d,e)},
hhn(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amS(d),$async$amR)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.av(),$async$amR)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pI(r)),$async$amR)
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
return B.i($async$amR,v)},
amT(d,e){return C.hhp(d,e)},
hhp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amT=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amS(d),$async$amT)
case 3:r=g
if(!J.hB(r,o)){w=1
break}t=5
w=8
return B.b(B.av(),$async$amT)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pI(r)),$async$amT)
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
T9(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$T9=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fzb&&!a5){w=1
break}t=4
w=7
return B.b(B.av(),$async$T9)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aC(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.Q(e,x.I)
for(d=J.jj(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.TP(B.Y(f.a(n.b),e,a0)))}$.a4U=o}}t=2
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
return B.b(B.bY(),$async$T9)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.th("civic_hati_kiapo_uongozi",null,A.ea),$async$T9)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.Q(o,x.I)
for(f=x.f,e=J.jj(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.TP(B.Y(f.a(j.b),o,d)))}for(o=k,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a4U.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbm())f=d===e.gbm()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a4U.m(0,i.a,i.b)}w=20
return B.b(C.amU(),$async$T9)
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
case 16:case 9:$.fzb=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$T9,v)},
amU(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$amU=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.av(),$async$amU)
case 6:s=e
r=B.Q(x.N,x.P)
for(o=$.a4U,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ad())}w=7
return B.b(s.an("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.aj(r,null)),$async$amU)
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
return B.i($async$amU,v)},
aWu(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.T9(!1),$async$aWu)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a4U.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.bxy(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWu,v)},
a4V(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a4V=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a4U.m(0,d,o)
$.fzb=!0
w=3
return B.b(C.amU(),$async$a4V)
case 3:w=4
return B.b(B.bY(),$async$a4V)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.Q(e,x.P)
for(n=$.a4U,n=new B.cM(n,B.a2(n).k("cM<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ad())}w=9
return B.b(B.nw("civic_hati_kiapo_uongozi",B.D(["byState",r,"updatedAt",new B.N(Date.now(),0,!1).a4().aa()],e,x.z),null),$async$a4V)
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
return B.i($async$a4V,v)},
amV(d){var w=0,v=B.j(x.T),u,t,s
var $async$amV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hP().a2U(A.er),$async$amV)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$amV)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWt(t,d),$async$amV)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amV,v)},
aWt(d,e){return C.hhq(d,e)},
hhq(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWt=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bY(),$async$aWt)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ad("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aI(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eK().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w_(q,new Uint8Array(B.ck(d)),D.blu),$async$aWt)
case 8:n=p.Bp(q)
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
return B.i($async$aWt,v)},
IL(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cG,l,m,n)},
eZo(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eP,j,k,l)},
fD5(d,e,f,g,h,i,j,k){var w=C.cx(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eg(h,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cJ,A.O,"",v,w,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cG,g,e,f)},
eZ4(d,e,f,g){return C.eZo(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fD6(d,e,f,g,h,i,j,k){var w=C.cx()
return C.eg(A.v5,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bi,A.a1,"",h,w,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cG,g,e,f)},
fWs(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e_(v,w,"").split(":"))},
bxy(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.fWs(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kz&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fFm(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Ak(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.fWs(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kz&&A.a.c5(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bk(a1.z,new C.ffB(a2))}else A.d.bk(a1.z,new C.ffC())
A.d.G(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fhw(a0))a0.ax=a6.f.a4().aa()
return a0},
fFm(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fii(D.a12),l=C.cx(),k=x.u,j=B.a([C.eg(A.bn,!1,s,A.ay,"marriage_locked_bg",r,24,A.bi,A.a1,"",1,C.cx(),m,"","",0,!1,"",0,D.b7,q,2,"",0,0,"",D.ca,D.l1,1,0,0)],k),i=B.a([],k)
i.push(C.IL("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IL("TAREHE:",A.bn,o,16,A.bi,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fD5("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.fWt()))
i.push(C.eZ4(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IL("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IL("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cJ,A.a1,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.eZo(0,0.002,D.fb,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fD6("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fD6("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fD6("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.eZo(268435456,0.175,D.b7,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IL("VIDEO YA KIAPO",A.bn,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eg(A.bn,!1,s,A.ay,"__kiapo_video__",r,24,A.bi,A.a1,"",0.131,C.cx(),t,"","",0,!1,"",0,D.b7,q,2,"",0,0,"",D.ca,D.l1,0.77,0.115,0.492))
i.push(C.IL("Rais Anayeapa:",A.bn,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IL("Jina:",A.bn,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fD5("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.eZ4(0.195,0.7130000000000001,0.62,n))
i.push(C.IL("Sahihi:",A.bn,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eg(A.bn,!1,s,A.ay,"marriage_sign_rais",0,24,A.bi,A.a1,"",0.07,C.cx(),t,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eP,0.38,0.21500000000000002,0.73))
i.push(C.eZ4(0.21500000000000002,0.795,0.38,n))
i.push(C.IL("Tarehe:",A.bn,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fD5("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.fWt()))
i.push(C.eZ4(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.eZo(0,0.032,D.b7,o,1,"state_box",0.72,0.14,0.875),C.IL("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qQ(4294967035,t,0,0,j,l,D.pk,"","",u,D.d7)
return C.Ak(t,t,t,t,D.nx,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cx(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
adO(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adO=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.E(x.q).f.P(D.eg4)
w=1
break}w=3
return B.b(C.T9(!0),$async$adO)
case 3:w=4
return B.b(C.aWu(p),$async$adO)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h0l(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c1(D.b2G,new C.faH(p),f,!0,!0,!1,A.l2,!1,!1,x.N),$async$adO)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.faI(),f,null,!0,!0,x.y),$async$adO)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fFm(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.E(x.q).f
q.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fFm(p))
case 1:return B.h(u,v)}})
return B.i($async$adO,v)},
f_9:function f_9(){},
c2X:function c2X(){},
ffB:function ffB(d){this.a=d},
ffC:function ffC(){},
faH:function faH(d){this.a=d},
faF:function faF(d){this.a=d},
faG:function faG(d){this.a=d},
faI:function faI(){},
faD:function faD(d){this.a=d},
faE:function faE(d){this.a=d},
anp:function anp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAu:function aAu(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dXb:function dXb(d){this.a=d},
dX9:function dX9(d){this.a=d},
dXa:function dXa(d){this.a=d},
dXc:function dXc(d){this.a=d},
dXd:function dXd(d){this.a=d},
vE(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.b7,4280172719,2,d,0,0,"",D.ca,D.cG,l,m,n)},
fW5(d,e,f){var w=4291404327
return B.a([C.pz(0,f,D.ex,w,2,"ring_l",f,d-f*0.42,e),C.pz(0,f,D.ex,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
eYx(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pz(4294967288,f,D.ex,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pz(h,s,D.ex,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pz(h,f*0.46,D.ex,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pz(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eP,j,k,l)},
eYw(d,e,f,g,h,i,j,k,l){var w=C.cx(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eg(h,!1,k,A.ay,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cJ,A.O,"",v,w,null,"","",0,!1,"",0,D.b7,4280172719,2,l,0,0,"",D.ca,D.cG,g,e,f)},
bv2(d,e,f,g){return C.pz(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fW4(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pz(0,0.036,D.b7,h,1.4,"banner_box_"+d,w,v,e),C.vE(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h06(){var w=new B.N(Date.now(),0,!1),v=new C.fgD()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bv(w)},
fW6(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vE(r+".",A.bn,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.eYw("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bv2(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vE("Sahihi:",A.bn,j,15,A.a1,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a1,"",0.05,C.cx(),null,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eP,s,t,g-0.004),C.bv2(t,g+0.044,s,w)],x.u)},
aef(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cTx,D.c0T,D.cN9,D.cOQ],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fCr(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fii(d.d),v=B.a([C.eg(A.bn,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bi,A.a1,"",1,C.cx(),w,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l1,1,0,0)],x.u)
A.d.v(v,C.hvC(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hvC(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vE("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fW5(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fW5(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.eYx(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.eYx(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vE("\ud83c\udf33",A.L,4279898632,22,A.a1,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pz(0,0.062,D.ex,b1,1.6,"crest_o",0.11,0.445,0.012),C.pz(0,0.046,D.ex,b1,1,"crest_i",0.084,0.458,0.02),C.vE("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pz(0,0.002,D.fb,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pz(b9,0.016,D.kA,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pz(0,0.002,D.fb,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vE("TAREHE:",A.bn,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.eYw("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.h06()),C.bv2(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vE(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pz(c0,0.0026,D.b7,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pz(c3.e,0.138,D.b7,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cx()
c2.push(C.eg(A.bn,!1,b9,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bi,A.cp,"",0.128,s,a9,"","",0,!1,"",0,D.b7,b3,2,c5,0,0,"",D.ca,D.cG,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pz(0,0.036,D.b7,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cx()
A.d.v(c2,B.a([s,C.eg(A.L,!1,c0,A.ay,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.b7,b3,2,c7,0,0,"",D.ca,D.cG,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fW4(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vE(c9,A.bn,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.eYw("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
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
d=B.a([new C.ew(""+1000*i+"_"+h,D.cG,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.ay,c0,A.bn,a9,D.b7,b2,b3,2,0,!1,s,0,D.ca,0,"","","","","",!1,0),j,new C.ew(""+1000*f+"_"+e,D.eP,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a1,A.bi,A.ay,b6,A.bn,a9,D.fb,0,b5,0.8,0,!1,g,0,D.ca,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.ew(""+1000*s+"_"+p,D.cG,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.ay,b7,A.dO,a9,D.b7,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*i+"_"+h,D.eP,a1,a2,0.046,0.025875,"",24,A.a1,A.bi,A.ay,b6,A.bn,a9,D.b7,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*g+"_"+f,D.cG,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.ay,b7,A.L,a9,D.b7,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ca,0,"","","","","",!1,0),new C.ew(""+1000*e+"_"+a3,D.eP,a0,k,a1+0.046-a0,l,"",24,A.a1,A.bi,A.ay,b6,A.bn,a9,D.b7,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ca,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fW4("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a0S||w===D.a0U||w===D.a0R||w===D.a0T){w=t-0.008
A.d.v(c2,C.eYx(0.21,w,0.044,!0,b0))
A.d.v(c2,C.eYx(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pz(0,a4,D.b7,c0,1.3,"wit_table_border",0.82,0.09,t),C.pz(c0,a4,D.b7,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pz(0,0.0022,D.fb,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vE("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vE("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fW6("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fW6("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pz(0,0.11,D.b7,c0,1.2,"mw_box",0.82,0.09,t),C.vE("MWANDISHI",A.bn,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vE("Jina:",A.bn,b9,15,A.a1,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.eYw("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bv2(0.215,p,0.3116,b5),C.vE("Sahihi:",A.bn,b9,15,A.a1,0.028,0,"mw_sl",0.09,0.5,w),C.eg(A.bn,!1,b6,A.ay,"marriage_sign_mwandishi",0,24,A.bi,A.a1,"",0.044,C.cx(),a9,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eP,0.3161999999999999,0.5738,s-0.044),C.bv2(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pz(0,0.032,D.b7,c0,1,"state_box",0.7,0.15,a8),C.vE("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hGP(d){var w,v,u,t=null,s=B.b6(d.f),r=B.b6(d.r),q=C.fFZ(d.d),p=new C.fgz(s),o=new C.fgA(s),n=d.z,m=n===D.a0S||n===D.a0U||n===D.a0R||n===D.a0T,l=n===D.az4||n===D.a0V||n===D.az5,k=B.bV(0,B.fC(q,A.B,t,t,A.cj,A.bM,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a0V?26:16
i.push(new C.fgC().$1$size(w))}if(n===D.az6)i.push(D.eTk)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hu,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aHt,p.$1$w(0.9),D.aHt,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.aZN,t,n,w,t,t,A.n),t,t,t,t,A.adE,t,t,t))
i.push(A.ar)
i.push(new C.fgB(r).$1("NIMETOWE"))
i.push(A.fV)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.B(A.JA,new B.cD(A.b_,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d4,new B.bG(1,A.bq,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.bc)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.W,t,A.aX,A.q,B.a([k,new B.B(A.aci,B.u(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
h_r(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aef(e,t)
if(r==null)r=A.d.gI(D.EN)
w=C.cx()
v=C.qQ(r.e,t,0,0,C.fCr(r,0.165,y.O,D.cPk,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pk,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ak(t,t,t,t,D.nx,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h_s(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aef(e,t)
if(r==null)r=A.d.gI(D.EN)
w=C.cx()
v=C.qQ(r.e,t,0,0,C.fCr(r,0.165,y.f,D.cLo,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pk,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ak(t,t,t,t,D.nx,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
byO(d,e,f){var w=0,v=B.j(x.T),u
var $async$byO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c1(A.K,new C.frX(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byO,v)},
adP(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adP=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a3<1>")
p=B.z(new B.a3(i,new C.faL(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IT,new C.faM(p),d,!0,!0,!1,A.l2,!1,!1,x.N),$async$adP)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byO(d,"Hati ya Kuhowa",D.EN),$async$adP)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jo(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adP)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h_r(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adP,v)},
adQ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a3<1>")
p=B.z(new B.a3(i,new C.faP(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IT,new C.faQ(p),d,!0,!0,!1,A.l2,!1,!1,x.N),$async$adQ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byO(d,"Hati ya Kuhoweya",D.EN),$async$adQ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jo(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adQ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h_s(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adQ,v)},
adR(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$adR=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("a3<1>")
m=B.z(new B.a3(i,new C.faT(),n),n.k("E.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.IT,new C.faU(m),d,!0,!0,!1,A.l2,!1,!1,x.N),$async$adR)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byO(d,"Malipo ya Awamu ya Mahari",D.NQ),$async$adR)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jo(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adR)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aef(s,D.NQ)
if(q==null)q=A.d.gI(D.NQ)
n=C.cx()
p=C.qQ(q.e,null,0,0,C.fCr(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cGO,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pk,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.d7)
n=C.cx()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ak(null,null,null,null,D.nx,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
wz:function wz(d,e){this.a=d
this.b=e},
j8:function j8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fgD:function fgD(){},
fgz:function fgz(d){this.a=d},
fgB:function fgB(d){this.a=d},
fgC:function fgC(){},
fgA:function fgA(d){this.a=d},
frX:function frX(d,e){this.a=d
this.b=e},
aaL:function aaL(d,e,f){this.c=d
this.d=e
this.a=f},
dOA:function dOA(d,e,f){this.a=d
this.b=e
this.c=f},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOy:function dOy(d,e){this.a=d
this.b=e},
aaa:function aaa(d,e,f){this.c=d
this.d=e
this.a=f},
faL:function faL(){},
faM:function faM(d){this.a=d},
faJ:function faJ(d){this.a=d},
faK:function faK(d){this.a=d},
faP:function faP(){},
faQ:function faQ(d){this.a=d},
faN:function faN(d){this.a=d},
faO:function faO(d){this.a=d},
faT:function faT(){},
faU:function faU(d){this.a=d},
faR:function faR(d){this.a=d},
faS:function faS(d){this.a=d},
IO(d,e,f,g,h,i,j,k,l,m){var w=C.cx()
return C.eg(e,!1,f,A.ay,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cG,k,l,m)},
Bl(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eP,j,k,l)},
fWM(d,e,f){return C.Bl(0,0.002,D.fb,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvc(d,e,f,g,h){return B.a([C.Bl(4294967288,0.032,D.b7,4291404327,1.15,"pill_"+d,g,f,e),C.IO(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fDa(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bl(0,0.002,D.fb,g,1,"orn_l_"+t,u,d,v),C.Bl(h,0.016,D.kA,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bl(0,0.002,D.fb,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
ZW(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.IO(d,A.bn,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cx()
return B.a([v,C.eg(A.L,!1,j,A.ay,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cJ,A.O,"",0.02,s,null,"","",0,!1,"",0,D.b7,4280172719,2,k,0,0,"",D.ca,D.cG,t,u,g-0.002),C.fWM(u,g+0.018,t)],x.u)},
fWN(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bl(h,0.028,D.b7,h,0,"chv_"+d,g,e,f),C.Bl(w,0.024,D.kA,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bl(w,0.024,D.kA,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.IO(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvb(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.IO("Sahihi:",A.bn,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_"+d,0,24,A.bi,A.a1,"",0.032,C.cx(),null,"","",0,!1,"",0,D.b7,0,2,"",0,0,"",D.ca,D.eP,v,w,f-0.006),C.fWM(w,f+0.016,v)],x.u)},
fG_(d){var w,v
for(w=0;w<19;++w){v=D.O2[w]
if(v.a===d)return v}return null},
hJ3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aef(A.a.aV(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aef(A.a.aV(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aV(k,18)
w=C.aef(u,D.NQ)
v=w==null?l:w.d
if(v==null){w=C.aef(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fG_(A.a.aV(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fXA.a8(0)
$.fXM.a8(0)
t=C.fii(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fH2(d){var w=0,v=B.j(x.T),u
var $async$fH2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c1(A.K,new C.ftb(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fH2,v)},
wC:function wC(d,e){this.a=d
this.b=e},
nb:function nb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bf4:function bf4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ftb:function ftb(){},
aaO:function aaO(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
e1a:function e1a(d,e){this.a=d
this.b=e},
acr:function acr(d,e,f){this.c=d
this.d=e
this.a=f},
fFZ(d){return $.fXM.ci(0,d,new C.fik(d))},
fii(d){return $.fXA.ci(0,d,new C.fij(d))},
fr(d){return B.fwN(d>>>16&255,d>>>8&255,d&255,255)},
hyz(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.fYN(4294570461,4293910718,4284234270,u)
case 1:return C.fYN(4294635750,4293975240,t,4292912216)
case 2:w=C.eXd(s,4294505966,r)
C.buX(w,14,16,p)
C.kd(w,8,9,464,836,u,1.2)
C.Bh(w,2,2,1,1,u,10)
C.Bh(w,478,2,-1,1,u,10)
C.Bh(w,2,852,1,-1,u,10)
C.Bh(w,478,852,-1,-1,u,10)
return w
case 3:return C.eXd(4294966515,4294373082,4289102906)
case 4:return C.htz(C.eXd(4294376440,4293653998,4290287194))
case 5:w=C.eXd(4294965238,4294437098,4288444980)
C.buX(w,14,16,4283043359)
C.kd(w,6,7,468,840,u,1)
C.kd(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,n,4294175448)
C.r9(v,n)
C.kd(v,24,24,432,806,4286209070,1)
C.ZK(v,12,12,468,12,o,3,20)
C.ZK(v,12,842,468,842,o,3,20)
C.ZK(v,12,12,12,842,o,3,20)
C.ZK(v,468,12,468,842,o,3,20)
return v
case 7:return C.hrN(4294440434,4293518297,4280228630,r)
case 8:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,m,4293911504)
C.r9(v,m)
C.kd(v,28,28,424,798,l,1)
C.f4l(v,28,28,l,k)
C.f4l(v,452,28,l,k)
C.f4l(v,28,826,l,k)
C.f4l(v,452,826,l,k)
return v
case 9:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,j,4294111986)
C.r9(v,j)
C.kd(v,18,18,444,818,4292401368,0.7)
B.iy(v,!0,C.fr(p),0,13,0,853)
return v
case 10:return C.hvp(i,4294173372)
case 11:return C.hwt(4294439140,4293449662)
case 12:return C.hrG(h,4294239432)
case 13:return C.hvV(4294244340,4293193448)
case 14:return C.hA4(4294505710,4293780694)
case 15:return C.eWf(4294966259,4294439138,o,p,q)
case 16:return C.eWf(4294966776,4294178544,o,g,g)
case 17:return C.eWf(4294965493,4294504170,o,4286200650,q)
case 18:return C.eWf(4294966519,4294373862,o,p,p)
case 19:return C.huA()
case 20:return C.huB()
case 21:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,h,4293976768)
C.r9(v,h)
C.buX(v,14,16,p)
B.iy(v,!0,C.fr(u),4,475,4,9)
B.iy(v,!0,C.fr(u),4,475,844,849)
B.iy(v,!0,C.fr(u),4,9,4,849)
B.iy(v,!0,C.fr(u),470,475,4,849)
C.ZK(v,10,12,470,12,u,2,16)
C.ZK(v,10,842,470,842,u,2,16)
C.ZK(v,10,12,10,842,u,2,18)
C.ZK(v,470,12,470,842,u,2,18)
C.Bh(v,2,2,1,1,t,10)
C.Bh(v,478,2,-1,1,t,10)
C.Bh(v,2,852,1,-1,t,10)
C.Bh(v,478,852,-1,-1,t,10)
C.kd(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,s,4294438872)
C.r9(v,s)
C.kd(v,14,16,452,822,o,2.2)
C.kd(v,22,24,436,806,o,1)
C.fEq(v,!1,!1,o,p,p,36,14,16)
C.kq(v,240,20,7,o,!0)
C.kq(v,240,834,7,o,!0)
C.kq(v,18,427,7,o,!0)
C.kq(v,462,427,7,o,!0)
return v
case 23:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xq(v,i,4293910712)
C.r9(v,i)
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
C.xq(v,e,4294174404)
C.r9(v,e)
C.buX(v,14,16,p)
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
xq(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kr(d,!1,A.d5,new B.Q7(s),r,A.cP,1,0,w-1,k,k);++k}},
r9(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f8()
n.e0(e)
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
B.kr(d,!0,A.d5,u,v,A.cP,j,e,t,f,f)
w=f+h
B.kr(d,!0,A.d5,u,v,A.cP,j,e,t,w,w)
B.kr(d,!0,A.d5,u,v,A.cP,j,e,e,f,w)
B.kr(d,!0,A.d5,u,v,A.cP,j,t,t,f,w)},
Bh(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kr(d,!0,A.d5,C.fr(i),u,A.cP,2,e,e+g*j,f,f)
B.kr(d,!0,A.d5,C.fr(i),u,A.cP,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kr(d,!0,A.d5,C.fr(i),u,A.cP,1,w,e+g*t,v,v)
B.kr(d,!0,A.d5,C.fr(i),u,A.cP,1,w,w,v,f+h*t)},
fYN(d,e,f,g){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xq(v,d,e)
C.r9(v,d)
B.iy(v,!0,C.fr(f),0,479,0,28)
B.iy(v,!0,C.fr(f),0,479,826,853)
B.iy(v,!0,C.fr(f),0,28,0,853)
B.iy(v,!0,C.fr(f),452,479,0,853)
C.kd(v,5,5,470,844,g,1.1)
C.kd(v,28,28,424,798,g,1.6)
C.Bh(v,2,2,1,1,g,11)
C.Bh(v,478,2,-1,1,g,11)
C.Bh(v,2,852,1,-1,g,11)
C.Bh(v,478,852,-1,-1,g,11)
return v},
eXd(d,e,f){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xq(v,d,e)
C.r9(v,d)
C.kd(v,14,16,452,822,f,1.6)
C.kd(v,20,22,440,810,f,0.8)
return v},
buX(d,e,f,g){var w,v=C.fr(g)
B.iy(d,!0,v,0,479,0,f-1)
w=854-f
B.iy(d,!0,v,0,479,w,853);--w
B.iy(d,!0,v,0,e-1,f,w)
B.iy(d,!0,v,480-e,479,f,w)},
htz(d){var w,v,u=4291404327
C.buX(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kq(d,w,8,3,u,!0)
C.kq(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kq(d,7,v,3,u,!0)
C.kq(d,473,v,3,u,!0)}return d},
f7g(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.iY(e,f),new B.iY(e+g*n,f),new B.iY(e,f+h*n)],t)
B.a_w(d,C.fr(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.iY(s,u),new B.iY(e+g*v,u),new B.iY(s,f+h*v)],t)
B.a_w(d,C.fr(k),t)
t=A.k.U(n*0.39)
C.kq(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kq(d,e+g*t,f+h*3,4,k,!0)
C.kq(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kq(d,e+g*t,f,5,k,!0)
C.kq(d,e,f+h*t,5,k,!0)}},
fEq(d,e,f,g,h,i,j,k,l){var w,v
C.f7g(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f7g(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f7g(d,k,v,1,-1,e,f,g,h,i,j)
C.f7g(d,w,v,-1,-1,e,f,g,h,i,j)},
ZK(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kM(d,!0,A.d5,new B.qo(p),null,A.cP,j,r,q)}},
f6r(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kr(d,!0,A.d5,new B.qo(o),null,A.cP,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kr(d,!0,A.d5,new B.qo(o),null,A.cP,1.4,q,q,p,p+h*r)}},
hrN(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hd(o,o,A.c4,0,A.dV,854,o,0,3,o,A.c4,480,!1)
C.xq(n,d,e)
C.r9(n,d)
C.kd(n,20,20,440,814,f,1.2)
C.f6r(n,0,0,1,1,g)
C.f6r(n,480,0,-1,1,g)
C.f6r(n,0,854,1,-1,g)
C.f6r(n,480,854,-1,-1,g)
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
B.kr(n,!0,A.d5,new B.qo(p),o,A.cP,1.2,240,r,60,q)}return n},
f4l(d,e,f,g,h){var w
C.f9a(d,!0,C.fr(g),13,e,f)
C.f9a(d,!0,C.fr(g),9,e,f)
w=B.a([new B.iY(e,f-4),new B.iY(e+4,f),new B.iY(e,f+4),new B.iY(e-4,f)],x.J)
B.a_w(d,C.fr(h),w)},
kq(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.iY(e,v),new B.iY(u,f),new B.iY(e,t),new B.iY(s,f)],x.J)
if(i){B.a_w(d,C.fr(h),r)
return}B.kr(d,!0,A.d5,C.fr(h),w,A.cP,1,e,u,v,f)
B.kr(d,!0,A.d5,C.fr(h),w,A.cP,1,u,e,f,t)
B.kr(d,!0,A.d5,C.fr(h),w,A.cP,1,e,s,t,f)
B.kr(d,!0,A.d5,C.fr(h),w,A.cP,1,s,e,f,v)},
eWe(d,e,f,g,h,i,j){var w,v=B.a([new B.iY(e,f),new B.iY(e+g*28,f),new B.iY(e,f+h*28)],x.J)
B.a_w(d,C.fr(i),v)
v=e+g*14
w=f+h*14
C.kq(d,v,w,6,j,!0)
C.kq(d,v,w,3,i,!0)},
eWf(d,e,f,g,h){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xq(v,d,e)
C.r9(v,d)
C.kd(v,18,18,444,818,f,2)
C.kd(v,26,26,428,802,f,0.9)
if(h!=null)B.iy(v,!0,C.fr(h),28,451,28,34)
C.eWe(v,18,18,1,1,g,f)
C.eWe(v,462,18,-1,1,g,f)
C.eWe(v,18,836,1,-1,g,f)
C.eWe(v,462,836,-1,-1,g,f)
return v},
huA(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
C.xq(r,u,4294240980)
C.r9(r,u)
C.kd(r,10,12,460,830,t,3.2)
C.kd(r,18,20,444,814,s,1.2)
C.kd(r,24,26,432,802,t,1.8)
C.fEq(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kq(r,w,16,3,t,!0)
C.kq(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kq(r,16,w,3,t,!0)
C.kq(r,464,w,3,t,!0)}return r},
huB(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
C.xq(p,s,4294373080)
C.r9(p,s)
C.kd(p,16,18,448,818,r,2.4)
C.kd(p,24,26,432,802,4286209044,1)
w=new C.eYo(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fEq(p,!1,!0,r,q,q,34,16,18)
return p},
bvD(d,e,f,g,h,i){B.iy(d,!0,C.fr(i),e,e+g,f,f+h)},
bws(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kr(d,!1,A.d5,new B.Q7(i),null,A.cP,1,e,w,l,l)}},
hvo(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kr(d,!1,A.d5,new B.qo(r),null,A.cP,1,e,s,t,t);++v}return}w=f+g-1
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
B.kr(d,!1,A.d5,new B.qo(r),null,A.cP,1,t,t,f,s);++q}},
hvp(d,e){var w,v,u=null,t=B.hd(u,u,A.c4,0,A.dV,854,u,0,3,u,A.c4,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hvo(t,v,w,30,D.cAi,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bvD(t,44,44,392,766,d)
C.bws(t,44,44,392,766,d,e)
C.r9(t,d)
C.kd(t,44,44,392,766,4292128567,2.2)
C.kd(t,50,50,380,754,4279898632,0.8)
return t},
hws(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.J(g,4)){case 0:C.kq(d,e,f,7,h,!0)
C.kq(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kr(d,!0,A.d5,C.fr(h),o,A.cP,1.6,w,u,v,t)
B.kr(d,!0,A.d5,C.fr(h),o,A.cP,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kr(d,!0,A.d5,new B.qo(p),o,A.cP,1.2,w,v,q,q)}break
default:B.kr(d,!0,A.d5,C.fr(h),o,A.cP,1.5,e-8,e+8,f,f)
B.kr(d,!0,A.d5,C.fr(h),o,A.cP,1.5,e,e,f-8,f+8)
B.kM(d,!0,A.d5,C.fr(h),o,A.cP,2,e,f)}},
hwt(d,e){var w,v,u,t,s=null,r=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
B.iy(r,!0,C.fr(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hws(r,u,v,w,4292391514)}C.bvD(r,46,46,388,762,d)
C.bws(r,46,46,388,762,d,e)
C.r9(r,d)
C.kd(r,46,46,388,762,4291404327,1.8)
return r},
fUo(d,e,f,g){C.f9a(d,!0,C.fr(g),16,e,f)
C.f9a(d,!0,C.fr(g),11,e,f)
C.kq(d,e,f,6,g,!0)
B.kr(d,!0,A.d5,C.fr(g),null,A.cP,1.3,e-14,e+14,f,f)
B.kr(d,!0,A.d5,C.fr(g),null,A.cP,1.3,e,e,f-14,f+14)},
hrG(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
B.iy(s,!0,C.fr(4280948752),0,479,0,853)
B.iy(s,!0,C.fr(u),0,479,0,78)
B.iy(s,!0,C.fr(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fUo(s,w,39,t)
C.fUo(s,w,815,t)}C.bvD(s,38,92,404,670,d)
C.bws(s,38,92,404,670,d,e)
C.r9(s,d)
C.kd(s,38,92,404,670,t,1.8)
C.kd(s,45,99,390,656,4287322667,0.8)
return s},
hvU(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.iY(e,f),new B.iY(q-5,w),new B.iY(q,f-(18-Math.abs(r)*3)),new B.iY(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_w(d,new B.qo(o),p)}B.kM(d,!0,A.d5,C.fr(4292128567),null,A.cP,3,e,f)},
hvV(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
C.xq(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kr(q,!0,A.d5,new B.qo(v),s,A.cP,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kr(q,!0,A.d5,new B.qo(u),s,A.cP,1.1,v,v,0,853)}B.iy(q,!0,C.fr(r),0,479,0,70)
B.iy(q,!0,C.fr(r),0,479,798,853)
for(t=0;t<5;++t)C.hvU(q,70+t*85,48,4292128567)
C.bvD(q,48,78,384,712,d)
C.bws(q,48,78,384,712,d,e)
C.r9(q,d)
C.kd(q,48,78,384,712,4291404327,1.6)
return q},
hA4(d,e){var w,v,u,t=null,s=4279970378,r=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
B.iy(r,!0,C.fr(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kq(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kM(r,!0,A.d5,new B.qo(u),t,A.cP,1,v,w)}C.bvD(r,40,40,400,774,d)
C.bws(r,40,40,400,774,d,e)
C.r9(r,d)
C.kd(r,40,40,400,774,4291058750,2)
C.kd(r,48,48,384,758,s,0.8)
return r},
kB:function kB(d,e){this.a=d
this.b=e},
fik:function fik(d){this.a=d},
fij:function fij(d){this.a=d},
eYo:function eYo(d){this.a=d},
fiZ(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hwm(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fWq(d){var w,v,u,t=null,s=A.a.cO(d,"{"),r=A.a.nY(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aC(0,Ae.aeb(A.a.al(d,s,r+1)),t)
v=x.f.b(w)?B.Y(w,x.N,x.z):t
return v}catch(u){return t}},
aJW(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aJW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ut(null,""),$async$aJW)
case 3:n=g
if(A.a.i(n).length===0)throw B.O("AI is not available right now. Please try again later.")
t=B.mB(n)
if(e==null)s=A.h1
else{r=C.hwm(e)
s=B.a([new B.YL(A.cL.gcq().aE(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qg(t,d,s,E.Di),$async$aJW)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.O(q!=null&&B.Jd(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aJW,v)},
fmX(d,e,f,g){return C.hKC(d,e,f,g)},
hKC(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fmX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fiZ(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h0u()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
r=F.fd5(n)
m=C
w=3
return B.b(C.aJW('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.Q+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+(y.T+B.aI(r,"book","newspaper"))+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fmX)
case 3:q=m.fWq(i)
if(q==null)throw B.O(y.S)
p=new C.ym(o,"","","By the NGMY Newsroom","",A.T,"","","").b3V(q)
if(p.f.length===0)throw B.O("The AI did not write a story. Try again.")
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmX,v)},
ffA(d,e,f,g,h){return C.hGr(d,e,f,g,h)},
hGr(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ffA=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:k=B.a([],x.s)
j=e.length
j=j>6?A.d.fT(e,j-6):e
t=j.length
s=0
for(;s<j.length;j.length===t||(0,B.J)(j),++s){r=j[s]
k.push(r.a+": "+r.b)}q=A.d.aG(k,"\n")
k=C.h0u()
j=A.Q.aj(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
p=F.fd5(f)
i=C
w=3
return B.b(C.aJW('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.Q+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+k+"\n\nTHE PAGE NOW: "+j+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+(y.T+B.aI(p,"book","newspaper"))+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$ffA)
case 3:o=i.fWq(a1)
if(o==null)throw B.O(y.S)
n=o.h(0,"changes")
if(x.f.b(n)&&J.ct(n)){m=d.b3V(B.Y(n,x.N,x.z))
l=A.Q.aj(m.ad(),null)!==A.Q.aj(d.ad(),null)}else{m=d
l=!1}k=o.h(0,"message")
if(k==null)k=l?"Done.":"Okay."
u=new C.a5x(A.a.i(B.t(k)),m,l)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ffA,v)},
a5x:function a5x(d,e,f){this.a=d
this.b=e
this.c=f},
hNb(d,e){return B.a6(d,!1).ct(B.eN(new C.ftm(e),!0,null,x.H))},
ftm:function ftm(d){this.a=d},
TF:function TF(d,e){this.c=d
this.a=e},
aAN:function aAN(d,e,f,g,h,i,j,k){var _=this
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
e4p:function e4p(d){this.a=d},
e4o:function e4o(){},
e4q:function e4q(d){this.a=d},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4r:function e4r(){},
e45:function e45(d,e){this.a=d
this.b=e},
e4c:function e4c(d){this.a=d},
e4d:function e4d(d,e){this.a=d
this.b=e},
e4e:function e4e(d){this.a=d},
e47:function e47(d,e){this.a=d
this.b=e},
e48:function e48(d,e){this.a=d
this.b=e},
e49:function e49(d,e){this.a=d
this.b=e},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d){this.a=d},
e46:function e46(d,e){this.a=d
this.b=e},
e43:function e43(d){this.a=d},
e44:function e44(d){this.a=d},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
fhV(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fhV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fVO){w=1
break}r=new C.fhW()
t=4
q=x.s
w=7
return B.b(B.iA(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fhV)
case 7:$.fVO=!0
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
return B.i($async$fhV,v)},
fiY(d){return A.F7[B.mq(d)-1]+", "+A.qn[B.bB(d)-1]+" "+B.bN(d)+", "+B.bv(d)},
hzb(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cXj[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hJR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m={},l=x.s,k=B.a([],l)
for(w=0;w<d.length;++w){v=A.a.fv(d[w],B.ad("[ \\t]+",!0,!1,!1,!1))
A.d.v(k,new B.a3(v,new C.flL(),B.S(v).k("a3<1>")))
if(w<d.length-1)k.push("\n\n")}u=B.a([],l)
m.a=0
for(l=h-1,t=0,v=0;t<h;++t){s=t===l?i:0
r=k.length-v
q=new C.flN(m,k)
p=new C.flM(q,e,f,g-s)
for(o=0;o<r;){n=A.o.ak(o+r+1,2)
if(p.$1(n))o=n
else r=n-1}u.push(o===0?"":J.iJ(q.$1(o)))
v=m.a+=o
if(v>=k.length)break}while(u.length<h)u.push("")
return u},
ym:function ym(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
c6B:function c6B(d){this.a=d},
c6z:function c6z(){},
c6A:function c6A(){},
tU:function tU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ay=r},
fhW:function fhW(){},
flL:function flL(){},
flN:function flN(d,e){this.a=d
this.b=e},
flM:function flM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXZ:function aXZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6C:function c6C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b4W:function b4W(d,e){this.b=d
this.a=e},
bn6:function bn6(d,e){this.b=d
this.a=e},
hNh(d){return B.a6(d,!1).ct(B.eN(new C.ftE(),!0,null,x.I))},
bvo(d,e){var w,v,u,t,s,r,q=B.bT(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fE9(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
ftE:function ftE(){},
YE:function YE(d){this.a=d},
o2:function o2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aC7:function aC7(d,e,f,g,h,i,j,k,l){var _=this
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
eBT:function eBT(d){this.a=d},
eAL:function eAL(d,e){this.a=d
this.b=e},
eB8:function eB8(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eB1:function eB1(d,e){this.a=d
this.b=e},
eB2:function eB2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBe:function eBe(d,e,f){this.a=d
this.b=e
this.c=f},
eBd:function eBd(d,e){this.a=d
this.b=e},
eBf:function eBf(d,e){this.a=d
this.b=e},
eBc:function eBc(d,e){this.a=d
this.b=e},
eBh:function eBh(d,e,f){this.a=d
this.b=e
this.c=f},
eBg:function eBg(d,e){this.a=d
this.b=e},
eAk:function eAk(d){this.a=d},
eAl:function eAl(d){this.a=d},
eAm:function eAm(d){this.a=d},
eAj:function eAj(){},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAi:function eAi(d,e){this.a=d
this.b=e},
eAp:function eAp(){},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAh:function eAh(d,e){this.a=d
this.b=e},
eAe:function eAe(d,e){this.a=d
this.b=e},
eAq:function eAq(d){this.a=d},
eAg:function eAg(d,e){this.a=d
this.b=e},
eAr:function eAr(d){this.a=d},
eAf:function eAf(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBR:function eBR(){},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBG:function eBG(d,e){this.a=d
this.b=e},
eBL:function eBL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBF:function eBF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBM:function eBM(d){this.a=d},
eBN:function eBN(d,e){this.a=d
this.b=e},
eBO:function eBO(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBr:function eBr(d){this.a=d},
eBs:function eBs(d){this.a=d},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBt:function eBt(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBp:function eBp(d){this.a=d},
eBx:function eBx(d){this.a=d},
eBy:function eBy(d){this.a=d},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBo:function eBo(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBn:function eBn(d){this.a=d},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBm:function eBm(d,e){this.a=d
this.b=e},
eBD:function eBD(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBv:function eBv(d){this.a=d},
eB5:function eB5(d){this.a=d},
eB4:function eB4(d){this.a=d},
eB6:function eB6(d,e){this.a=d
this.b=e},
eB3:function eB3(d,e){this.a=d
this.b=e},
eB7:function eB7(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAX:function eAX(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eAW:function eAW(d){this.a=d},
eB_:function eB_(d,e){this.a=d
this.b=e},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAU:function eAU(d,e){this.a=d
this.b=e},
eAC:function eAC(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAJ:function eAJ(d){this.a=d},
eAK:function eAK(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
eA_:function eA_(d){this.a=d},
eA0:function eA0(d){this.a=d},
eA1:function eA1(d){this.a=d},
ezX:function ezX(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA3:function eA3(d){this.a=d},
eAw:function eAw(d){this.a=d},
eAx:function eAx(d){this.a=d},
eAy:function eAy(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAA:function eAA(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA8:function eA8(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(d){this.a=d},
eAb:function eAb(d){this.a=d},
eA6:function eA6(d){this.a=d},
eAc:function eAc(d){this.a=d},
eA5:function eA5(d){this.a=d},
eAd:function eAd(d){this.a=d},
eA4:function eA4(d){this.a=d},
eB0:function eB0(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAQ:function eAQ(d,e){this.a=d
this.b=e},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAR:function eAR(d,e){this.a=d
this.b=e},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAS:function eAS(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBa:function eBa(d,e,f){this.a=d
this.b=e
this.c=f},
eB9:function eB9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBk:function eBk(d,e){this.a=d
this.b=e},
eBj:function eBj(d,e){this.a=d
this.b=e},
eAB:function eAB(d){this.a=d},
eBS:function eBS(d){this.a=d},
bbm:function bbm(d,e){this.b=d
this.a=e},
hIV(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hIW(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).kr(0,d),m=B.z(n,B.a2(n).k("E.E"))
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
bvZ(){var w=$.bv6,v=$.Os
$.Os=v+1
return w+"_"+v},
i0(d,e,f,g,h,i,j){return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bi,A.a1,"",h,C.bvZ(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ca,D.eP,g,e,f)},
ns(d,e,f,g){var w=f*9
return C.i0(D.ex,d-f/2,e-w/32,f,w/16,g,0)},
htd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bv6
p=$.Os
$.Os=p+1
w.push(new C.ew(q+"_"+p,D.eP,0,r,1,0.0016,"",24,A.a1,A.bi,A.ay,k,A.bn,null,D.b7,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bv6
p=$.Os
$.Os=p+1
w.push(new C.ew(q+"_"+p,D.eP,o,0,0.004,1,"",24,A.a1,A.bi,A.ay,k,A.bn,null,D.b7,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.ns(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ns(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i0(D.b7,0.08,0.08,0.5,0.003,v,0),C.i0(D.b7,0.58,0.08,0.004,0.06,v,0),C.i0(D.b7,0.58,0.14,0.34,0.003,v,0),C.i0(D.b7,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i0(D.b7,0.08,0.8,0.004,0.14,t,0),C.i0(D.b7,0.08,0.94,0.6,0.003,t,0),C.ns(0.58,0.08,0.05,e),C.ns(0.92,0.22,0.05,e),C.ns(0.08,0.8,0.05,f),C.ns(0.68,0.94,0.05,f),C.ns(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i0(D.kA,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i0(D.kA,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i0(D.kA,0.7,0.8,0.22,0.12,w|1140850688,0),C.i0(D.kA,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.ns(0.5,0.5,1.5,w|335544320),C.ns(0.5,0.5,1.15,w|402653184),C.ns(0.5,0.5,0.8,v|436207616),C.ns(0.95,0.05,0.4,v|855638016),C.ns(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.ns(0.85,0.08,0.7,w|1140850688),C.ns(0.1,0.35,0.5,v|855638016),C.ns(0.9,0.62,0.55,v|771751936),C.ns(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i0(D.b7,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i0(D.b7,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i0(D.b7,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i0(D.b7,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.ns(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.ns(0.5,0.2,0.65,(w|3422552064)>>>0),C.ns(0.5,0.2,0.95,w|855638016),C.i0(D.b7,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i0(D.b7,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i0(D.jj,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i0(D.jj,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i0(D.jj,0.15,0.86,0.6,0.14,1712265002,0),C.ns(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cBA[n]
u=A.o.J(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bv6
l=$.Os
$.Os=l+1
w.push(new C.ew(m+"_"+l,D.eP,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a1,A.bi,A.ay,k,A.bn,null,D.ex,q,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.ns(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i0(D.jj,0.35,-0.1,0.3,0.62,w|855638016,0),C.i0(D.jj,0.05,-0.1,0.3,0.55,v,-0.5),C.i0(D.jj,0.65,-0.1,0.3,0.55,v,0.5),C.ns(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i0(D.b7,0.06,0.04,0.88,0.002,e,0),C.i0(D.b7,0.06,0.96,0.88,0.002,e,0),C.i0(D.b7,0.06,0.04,0.004,0.92,e,0),C.i0(D.b7,0.936,0.04,0.004,0.92,e,0),C.i0(D.b7,0.09,0.07,0.82,0.001,w,0),C.i0(D.b7,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i0(D.jk,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i0(D.jk,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i0(D.jk,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i0(D.b7,0,0,0.3,0.09,w|1140850688,0),C.i0(D.b7,0.7,0.9,0.3,0.1,v|1426063360,0),C.i0(D.b7,0.82,0.04,0.12,0.07,w|771751936,0),C.i0(D.b7,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i0(D.ex,0.62,0.02,0.5,0.16,v,0.6),C.i0(D.ex,0.78,0.12,0.4,0.12,u,0.9),C.i0(D.ex,-0.12,0.8,0.5,0.16,u,-0.6),C.i0(D.ex,-0.05,0.9,0.4,0.12,v,-0.9),C.ns(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i0(D.b7,0.09,0.12,0.16,0.006,e,0),C.i0(D.b7,0.05,0.03,0.9,0.001,w,0),C.i0(D.b7,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hFv(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bv6=j
$.Os=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fdE()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eg(A.bn,!1,n,A.ay,"ngmy_quote_background",m,24,A.bi,A.a1,"",1,C.bvZ(),g,"","",0,!1,"",0,D.b7,l,2,"",0,0,"",D.ca,D.l1,1,0,0))
if(a9)A.d.v(q,C.htd(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hIV(B.aI(w,p,""))
o=A.a.q(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fdD(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cJ,A.a1))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a1))
if(a0!=null&&a0.length!==0)q.push(C.eg(A.bn,!1,n,A.ay,"ngmy_quote_logo",m,24,A.bi,A.a1,a1,a3*9/16,C.bvZ(),a0,"","",0,!1,a2,0,D.b7,l,2,"",0,0,"",D.ca,D.l1,a3,a4,a5))
return C.qQ(s,r,0,0,q,j+"_slide",D.pk,"","","",D.d7)},
qP:function qP(d,e){this.a=d
this.b=e},
lG:function lG(d,e,f,g,h,i,j,k,l,m){var _=this
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
fdE:function fdE(){},
fdD:function fdD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hjt(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bg(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b3(u.a(w.h(d,"extras")),new C.c7U(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yo(u,t,s,B.t(w==null?"":w))},
flh(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$flh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fWa){w=1
break}$.fWa=!0
t=4
w=7
return B.b(B.av(),$async$flh)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jj(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hjt(m)
if(l!=null)J.ci(n,l)}$.Bi.ci(0,B.t(o.a),new C.fli(n))}C.fDQ()
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
return B.i($async$flh,v)},
fDQ(){var w,v=new B.N(Date.now(),0,!1).bL(-12e8)
for(w=new B.dv($.Bi,$.Bi.r,$.Bi.e);w.C();)J.mX(w.d,new C.f3y(v))
$.Bi.bk($.Bi,new C.f3z())},
aKA(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aKA=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.av(),$async$aKA)
case 6:s=a0
m=x.N
l=x.z
r=B.Q(m,l)
for(k=new B.cM($.Bi,B.a2($.Bi).k("cM<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.ci(p,B.D(["at",g.a.a4().aa(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.an("String","ngmy_slides_ai_history_v1",A.Q.aj(n,null)),$async$aKA)
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
return B.i($async$aKA,v)},
hJw(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fDQ()
w=$.Bi.ci(0,d,new C.flk())
v=Date.now()
u=B.z(e,B.a2(e).k("cj.E"))
J.oZ(w,0,new C.yo(new B.N(v,0,!1),f,u,g))
C.aKA()},
hJt(d){var w,v=$.Bi.h(0,d)
if(v==null||J.ch(v))return
w=J.cB(v)
w.cu(v,0)
if(w.gah(v))$.Bi.W(0,d)
C.aKA()},
yo:function yo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7U:function c7U(){},
fli:function fli(d){this.a=d},
f3y:function f3y(d){this.a=d},
f3z:function f3z(){},
flk:function flk(){},
hJy(d){return A.d.dP(D.uM,new C.fln(d),new C.flo())},
hjr(d){var w
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
hjq(d){var w
switch(d.a){case 0:w=D.afW
break
case 1:w=A.x1
break
case 2:w=A.agY
break
case 3:w=I.afB
break
case 4:w=A.agp
break
case 5:w=A.kX
break
default:w=null}return w},
hw_(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nj[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nj[w]
if(!B.dl(v.toLowerCase(),t,0))u=B.dl(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hjs(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
hJu(d,e,f,g,h){var w=new B.I(D.uM,new C.flg(),x.eC).aG(0,", "),v=""+d,u=C.h0m(h),t=F.ff2(h),s=C.fXL(g),r=e.q(0,D.G0)?'- New slides get an "emoji".\n':"",q=e.q(0,D.G1)?'- New slides get an "icon3d" from: '+A.d.aG(D.Nj,", ")+".\n":"",p=e.q(0,D.B2)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hJv(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.I(D.uM,new C.flj(),x.eC).aG(0,", "),p=new B.f4("")
if(e.q(0,D.G0)){p.a=s
w=s}else w=""
if(e.q(0,D.G1))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Nj,", ")+".\n")
if(e.q(0,D.B2))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h0m(d)
v=F.ff2(d)
u=C.fXL(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aer(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BH(a3,"{"),a5=J.fwn(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Jy(a3,a4,a5+1)
try{w=A.Q.aC(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ch(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b3(p.a(J.q(t,a2)),new C.fjg(),m).bZ(0,new C.fjh())
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
f=C.hw_(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a5F(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.a9(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fm(u).b:q))
p=A.d.bd(D.uM,new C.fji(r))?r:a7
o=C.f2N(J.q(w,"logo_frame"),D.At)
n=C.f2N(J.q(w,"logo_ring"),D.Ao)
m=C.f2N(J.q(w,"photo_frame"),D.At)
l=C.f2N(J.q(w,"photo_ring"),D.Ao)
return new C.aoa(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_l(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h_u(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.B3),f7=f6?C.hq3():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f8()
v.e0(f7.w+1)
u=f7.a
t=B.bi(u.b,!0,x.dL)
A.d.fN(t,v)
s=u.c
s=new C.nf("luxe",u.a,A.kX,t,u.e,u.f,B.a([s,u.d,s],x.t),D.d7)
w=s}if(w==null)w=C.hJy(f9.b)
r=g2.q(0,D.a1b)||f6
q=g2.q(0,D.G0)
p=g2.q(0,D.P7)
o=new C.fdI()
n=B.a([],x.g)
m=new C.fdL(o,w,r)
l=new C.fdK(o,r)
k=new C.fdJ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.bd(u,new C.fdH(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.J(b1,a3.length)]
b4=A.o.J(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.J(b1,5)
b9=D.cCX[b8]
c0=D.cC3[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ebi.q(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.m4,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pl,500,f2,f0))
c1.push(l.$8$fx$key(D.b7,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.P4
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ex,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kA,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.b7,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.B0
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ex,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.m4,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cJ,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pl,500,f2,f0))
d3=D.m3
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ex,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.b7,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.te:D.ca
c1.push(new C.ew(b4,D.a19,0.64,0.05,0.27,0.9,g1,24,A.a1,A.bi,A.ay,4279310375,A.bn,e4,D.b7,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.m3
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ex,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.m4,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pl,450,f2,f0))
c1.push(l.$8$fx$key(D.b7,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.P4
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
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.m3}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.d7,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hrF(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.J(b1,b8.length)]}else b8=r?D.cZi[A.o.J(b1,6)]:s
n.push(new C.lk(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ak(e4,e4,e4,e4,D.B_,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fg8(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fg8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.B2)
n=e.q(0,D.G1)
if(!o&&!n){u=D.a08
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fgb(o,s[r],n,$.huO,r).$0())
s=B.Q(x.r,x.aH)
m=J
w=3
return B.b(B.iA(t,x.e),$async$fg8)
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
return B.i($async$fg8,v)},
ff5(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$ff5=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hJv(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aJX(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$ff5)
case 3:u=s.aKh(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ff5,v)},
bxx(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bxx=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.ee(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.G(0,(q==null?r.a(q):q).b)}C.hJw(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aer(i,"colorful")
t=C.hJu(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aJX(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h1),$async$bxx)
case 3:u=o.aKh(m,f,h,g,D.dCb,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxx,v)},
aJX(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aJX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ut(null,""),$async$aJX)
case 3:n=i
if(A.a.i(n).length===0)throw B.O("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mB(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qg(t,d,g,null),$async$aJX)
case 7:q=i
p=q.b
if(p!=null){o=C.aer(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.O(s!=null&&B.Jd(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aJX,v)},
aKh(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKh=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.B2)||e.q(0,D.G1)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d8(e,x.Q)
t.W(0,D.B2)}w=6
return B.b(C.fg8(d,t),$async$aKh)
case 6:s=k
w=4
break
case 5:s=D.a08
case 4:t=d.c
w=A.d.bd(t,new C.eY0())?7:9
break
case 7:r=$.h1e
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aKh)
case 10:q=k
p=q!=null?A.Q.aj(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h_u(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hjs(new C.aoa(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("I<1,n>")
t=B.z(new B.I(m,new C.eY1(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jA<cj.E,n>")
t=B.z(new B.jA(e,new C.eY2(),t),t.k("E.E"))
l.cy=t
l.ay=e.q(0,D.P7)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKh,v)},
fGo(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a_6[v]
if(A.d.q(t,u.b))w.G(0,u)}return w},
hNm(d){return B.c1(A.K,new C.ftQ(),d,!0,!0,!0,null,!1,!1,x.I)},
hqF(d,e){var w,v=e.toLowerCase()
if(A.a.c5(v,".png"))w="image/png"
else w=A.a.c5(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cL.gcq().aE(d)},
hNl(d,e,f){return B.c1(A.K,new C.ftP(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fGp(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fGq(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
f2N(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bd(e,new C.f2O(w))?w:""},
fXL(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h1c(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aer(a1==null?"":a1,a0),a3=C.aer(a5,a0)
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
for(v=t.length,r=a4.r,q=B.S(r).k("a3<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.qC(new B.a3(r,new C.flp(t[p]),q))
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
g=B.z(new B.a3(k,new C.flq(),v),r)
A.d.aY(g,new C.flr())
if(g.length===0)continue
f=new C.fls(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hJP(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aA9
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dE6
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dE7
return null},
fXm(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bK(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hJz(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nx
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cG)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fXm(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fXm(n,i,v,u))if(n.w>10){f=h+1
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
hJx(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aer(o,"colorful")
if(n==null)throw B.O("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_6[r]
if(q.b===s)w.G(0,q)}}v=C.fGp(e)
u=C.fGq(e)
p=C.h_u(n,D.a08,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("I<1,n>")
o=B.z(new B.I(o,new C.fll(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jA<cj.E,n>")
o=B.z(new B.jA(w,new C.flm(),o),o.k("E.E"))
p.cy=o
p.ay=w.q(0,D.P7)
return p},
hN8(d,e,f){return B.c1(A.K,new C.ft3(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hq3(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f8()
s.e0(t)
w=D.chS[s.aF(10)]
v=new C.e0A(s)
u=x.N
return new C.e0z(w,s.aF(4),J.fm(v.$1$2(D.cH_,1,x.ff)),w.r[s.aF(3)],v.$1$2(D.cVs,2+s.aF(2),u),v.$1$2(D.cPu,2,u),v.$1$2(D.cY_,4,x.fP),t)},
hrF(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f8()
a1.e0(a5.w+a3*13)
w=new C.eUA(a4)
v=new C.eUC(a4,d)
u=new C.eUB(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cG){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fE(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fE(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.J(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.ex,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a_l(a0,52),"lux_spot",a5.vA(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.b7,0,0,1,1,0,"lux_back",a5.vA(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.b7,0,0,1,1,0,"lux_back2",a5.aAt(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.022,0.038,0.956,0.924,0,g,a5.vA(0,f),D.d7,150,C.a_l(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.018,0.032,0.964,0.936,0,g,a5.vA(0,f),D.d7,120,C.a_l(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b7,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.d7,260,C.a_l(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.b7,0,0,1,1,0,"lux_filigree",a5.vA(0,"filigree"),D.d7,200))
break
default:a2.push(w.$10$anim$delay(D.b7,0.08,0.06,0.84,0.004,C.a_l(a0,208),"lux_rule",a5.aAt(0,"shimmer",r),D.td,150))
a2.push(w.$10$anim$delay(D.b7,0.08,0.936,0.84,0.004,C.a_l(a0,144),"lux_rule2","",D.FZ,220))}l=!A.d.bd(a2,new C.eUz())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vA(0,"crest"),350))
else{o=a1.hd()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vA(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_l(r,242)
j=a5.vA(0,"orbit")
i=s===D.b7?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pl,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ex,t-0.007,0.9495,0.014,0.025,C.a_l(r,242),"lux_g2",a5.vA(0,"orbit"),D.pl,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.b7,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fE(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.b7,0,0,1,1,0,"lux_velvet",a5.vA(0,"velvet")))},
nf:function nf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fln:function fln(d){this.a=d},
flo:function flo(){},
v5:function v5(d,e){this.a=d
this.b=e},
a5F:function a5F(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoa:function aoa(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flg:function flg(){},
flj:function flj(){},
fjg:function fjg(){},
fjh:function fjh(){},
fji:function fji(d){this.a=d},
fdI:function fdI(){},
fdL:function fdL(d,e,f){this.a=d
this.b=e
this.c=f},
fdK:function fdK(d,e){this.a=d
this.b=e},
fdJ:function fdJ(d,e){this.a=d
this.b=e},
fdH:function fdH(d){this.a=d},
fgb:function fgb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fg9:function fg9(d){this.a=d},
fga:function fga(d){this.a=d},
eY0:function eY0(){},
eY1:function eY1(){},
eY2:function eY2(){},
ftQ:function ftQ(){},
Z8:function Z8(d){this.a=d},
aE1:function aE1(d,e,f,g,h){var _=this
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
eHN:function eHN(d,e,f){this.a=d
this.b=e
this.c=f},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eHF:function eHF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHu:function eHu(d,e){this.a=d
this.b=e},
eHw:function eHw(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHA:function eHA(d,e){this.a=d
this.b=e},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI2:function eI2(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eI4:function eI4(d){this.a=d},
eHY:function eHY(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eHX:function eHX(d,e){this.a=d
this.b=e},
eI6:function eI6(d){this.a=d},
eHW:function eHW(d){this.a=d},
eI7:function eI7(d){this.a=d},
eHV:function eHV(d,e){this.a=d
this.b=e},
eI8:function eI8(d){this.a=d},
eHU:function eHU(d,e){this.a=d
this.b=e},
eI9:function eI9(d){this.a=d},
eHT:function eHT(d){this.a=d},
eIa:function eIa(d,e){this.a=d
this.b=e},
eHS:function eHS(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
eI3:function eI3(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e,f){this.a=d
this.b=e
this.c=f},
eHC:function eHC(d,e,f){this.a=d
this.b=e
this.c=f},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
ftP:function ftP(d,e){this.a=d
this.b=e},
Z7:function Z7(d,e,f){this.c=d
this.d=e
this.a=f},
aE0:function aE0(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eHm:function eHm(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
eHl:function eHl(d,e){this.a=d
this.b=e},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHs:function eHs(d,e){this.a=d
this.b=e},
f2O:function f2O(d){this.a=d},
aYn:function aYn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAG:function aAG(d,e,f){this.c=d
this.d=e
this.a=f},
bfX:function bfX(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0C:function e0C(d){this.a=d},
e0B:function e0B(){},
bdz:function bdz(d,e){this.b=d
this.a=e},
flp:function flp(d){this.a=d},
flq:function flq(){},
flr:function flr(){},
fls:function fls(d){this.a=d},
aoK:function aoK(d,e){this.a=d
this.b=e},
fll:function fll(){},
flm:function flm(){},
ft3:function ft3(d,e){this.a=d
this.b=e},
Xx:function Xx(d,e,f){this.c=d
this.d=e
this.a=f},
ay8:function ay8(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
da7:function da7(d){this.a=d},
da8:function da8(d){this.a=d},
da9:function da9(d,e){this.a=d
this.b=e},
dac:function dac(d){this.a=d},
dad:function dad(d,e){this.a=d
this.b=e},
dab:function dab(d,e){this.a=d
this.b=e},
dae:function dae(d){this.a=d},
daa:function daa(d,e){this.a=d
this.b=e},
bob:function bob(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e0z:function e0z(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e0A:function e0A(d){this.a=d},
eUA:function eUA(d){this.a=d},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUB:function eUB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUz:function eUz(){},
aIw:function aIw(){},
fFg(d){var w,v,u
try{w=A.Q.aC(0,d,null)
if(x.f.b(w)){v=B.uW(B.Y(w,x.N,x.z))
return v}}catch(u){}return null},
aYj:function aYj(d,e,f){this.c=d
this.d=e
this.a=f},
bhy:function bhy(d,e){this.c=d
this.a=e},
hFY(d){return A.d.dP(D.F4,new C.feP(d),new C.feQ())},
hFZ(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aV(t,6)
if(w.length===0)return null
v=new B.a3(D.F4,new C.feR(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jt("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kV:function kV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
feP:function feP(d){this.a=d},
feQ:function feQ(){},
feR:function feR(d){this.a=d},
mn(d,e,f,g,h){return new C.Dd(f,g,d)},
hsO(d){var w=d.z,v=B.S(w).k("a3<1>")
w=B.z(new B.a3(w,new C.eWy(),v),v.k("E.E"))
d.z=w
d.x=""},
dm(d,e){var w=$.ID
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dn(d,e,f,g,h,i,j,k,l){return C.eg(A.bn,!1,4279310375,A.ay,"",d,24,A.bi,A.a1,"",e,"design_"+C.cx(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ca,D.eP,j,k,l)},
h_h(d,e){var w
C.hsO(d)
w=A.d.dP($.bzq(),new C.fcE(e),new C.fcF())
$.ID=w.a
d.x=w.a;++d.y
try{w.bI(d)}finally{$.ID=""}d.z=B.bi(d.z,!0,x.F)},
Dd:function Dd(d,e,f){this.a=d
this.b=e
this.e=f},
eWy:function eWy(){},
fkS:function fkS(){},
fkT:function fkT(){},
fkU:function fkU(){},
fl4:function fl4(){},
fl9:function fl9(){},
fla:function fla(){},
flb:function flb(){},
flc:function flc(){},
fld:function fld(){},
fle:function fle(){},
flf:function flf(){},
fkV:function fkV(){},
fkW:function fkW(){},
fkX:function fkX(){},
fkY:function fkY(){},
fkZ:function fkZ(){},
fl_:function fl_(){},
fl0:function fl0(){},
fl1:function fl1(){},
fl2:function fl2(){},
fl3:function fl3(){},
fl5:function fl5(){},
fl6:function fl6(){},
fl7:function fl7(){},
fl8:function fl8(){},
fcE:function fcE(d){this.a=d},
fcF:function fcF(){},
iI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eg(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.b7,4280172719,2,m,n,0,"",o,D.cG,p,q,r)},
Bz(d,e,f,g,h,i,j,k,l){return C.eg(A.bn,!1,4279310375,A.ay,"",d,24,A.bi,A.a1,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ca,D.eP,j,k,l)},
byb(){var w=new B.N(Date.now(),0,!1)
return A.hW[B.bB(w)-1]+" "+B.bN(w)+", "+B.bv(w)},
em:function em(d,e,f){this.a=d
this.b=e
this.c=f},
bvJ(d){return new B.iD((A.o.ar(d,24)&255)/255,(A.o.ar(d,16)&255)/255,(A.o.ar(d,8)&255)/255,(d&255)/255)},
hxz(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.ak3(A.cw.aE(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hxD(d){var w=d.r
if(!d.cy)return w
return new B.I(B.a(w.split("\n"),x.s),new C.f2B(),x.dv).aG(0,"\n")},
hxC(d){switch(d.a){case 2:return A.mP
case 1:case 5:return A.ely
default:return A.Qq}},
hxw(d){switch(d.a){case 2:return A.tL
case 1:case 5:return A.S7
default:return A.a5P}},
hxA(d,e){var w,v=null,u=d.ay,t=A.o.ar(u,24),s=A.o.ar(d.ch,24),r=(t&255)===0?v:C.bvJ(u),q=(s&255)===0?v:C.bvJ(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n_(q,p,A.kh)
w=new B.p_(t,t,t,t)}switch(d.ax.a){case 1:return B.l9(v,v,v,new B.ki(r,w,v,A.a72,v),v,v,v,v)
case 4:return u?new B.fG(v,v,v):B.w4(B.l9(v,v,q,v,p+0.4,v,v,v))
default:return B.l9(v,v,v,new B.ki(r,w,B.uz(4),A.hk,v),v,v,v,v)}},
hxy(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eP?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hxw(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hxD(d)
t=C.bvJ(d.Q)
s=d.x.a>=700?A.eb:A.ug
r=d.y===A.cJ?A.wD:A.aev
q=d.z
p=new B.BK(w,l,l,B.f0(u,l,l,l,B.fX(l,t,1===q.a?A.aIr:A.aIq,l,l,l,l,l,l,A.dm,l,l,v,r,s,l,!0,l,l,l,l),C.hxC(d.as)))
break
case 1:case 4:o=C.hxz(d.at)
n=i===D.l1&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.w4(B.f0(w,l,l,l,B.fX(l,A.qC,l,l,l,l,l,l,l,A.dm,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.G9(o,n?A.a6Z:A.Ss,l,l)
break
case 3:w=new B.n_(A.Gg,1,A.kh)
u=B.uz(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.l9(A.tL,B.f0(t,l,l,l,B.fX(l,D.dMx,l,l,l,l,l,l,l,A.dm,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mP),l,new B.ki(E.aB8,new B.p_(w,w,w,w),u,A.hk,l),l,l,l,l)
break
case 2:p=C.hxA(d,e)
break
case 5:p=C.hxx(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fSh(-w,p)
w=i===D.cG
if(w){m=A.o.ar(d.Q,24)&255
if(m<255)p=new B.apt(m/255,p)}if(w)return new F.vc(k,l,j,l,new B.Qe(new B.kh(g,g,f,1/0),p))
if(i===D.kz){i=new B.n_(A.Gg,1,A.kh)
i=B.l9(A.tL,p,l,new B.ki(A.oi,new B.p_(i,i,i,i),B.uz(4),A.hk,l),l,l,D.biA,l)}else i=p
return new F.vc(k,l,j,l,new B.fG(g,f,i))},
hxB(d,e,f,g){var w,v=null,u=C.bvJ(d.e),t=d.f
t=B.a([F.fQW(t!=null?B.l9(v,v,v,new B.ki(v,v,v,A.hk,new B.aSQ(E.S8,A.a5K,B.a([u,C.bvJ(t)],x.cR),v)),v,v,v,v):B.l9(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.I(w,new C.f2A(f,g),B.S(w).k("I<1,f5>")))
return F.ckp(t)},
fGs(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fGs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a1X(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.Un(A.uW,A.Gd,D.bjC,null,null,null,!1,null)
o=new B.Aq(o,new C.fly(607,787,p,d))
o.KZ(n,null)
r.push(o)}u=n.jy(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGs,v)},
hxx(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fFg(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagj()
if(h==null)h=A.arA
j=B.rM(4279308564)
w=B.uz(18)
v=new B.n_(B.rM(4287531653),3,A.kh)
u=i.length===0?"My links":i
u=B.a([B.w4(B.f0(u,m,m,m,B.fX(m,A.oi,m,m,m,m,m,m,m,A.dm,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.w4(B.f0(A.a.i(l.c),m,m,m,D.esn,m)))
u.push(new B.fG(m,8,m))
for(t=B.dg(h,0,B.dL(8,"count",x.r),B.S(h).c),s=t.$ti,t=new B.bS(t,t.gH(0),s.k("bS<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rM(4280690220)
o=new B.a6T(8,8)
n=A.a.i(r.b)
u.push(new B.ng(D.bd0,new C.atD(new C.afs(q),B.l9(m,B.f0(n.length===0?A.a.i(r.c):n,m,m,m,D.euv,A.mP),m,new B.ki(p,m,new B.afT(o,o,o,o),A.hk,m),m,m,D.biY,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.w4(B.f0(k,m,m,m,D.etQ,m))
u.push(new C.atD(C.h7L(k),t))}return B.l9(m,B.xJ(u,A.Jh,A.l0),m,new B.ki(j,new B.p_(v,v,v,v),w,A.hk,m),m,m,D.bdP,m)},
f2B:function f2B(){},
f2A:function f2A(d,e){this.a=d
this.b=e},
fly:function fly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aee(d){var w,v
for(w=0;w<32;++w){v=D.EW[w]
if(v.a===d)return v}return null},
fUR(d){var w,v,u=A.a.cO(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aE(A.a.aV(d,u+1))
return w}catch(v){return null}},
cL(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h2k(d,e){return B.a6(d,!1).ct(B.eN(new C.frH(e),!0,null,x.fB))},
h2j(d,e){return B.c1(A.K,new C.frG(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iL:function iL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D4:function D4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Lz:function Lz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfj:function bfj(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
dKk:function dKk(d){this.a=d},
dKj:function dKj(d,e,f){this.a=d
this.b=e
this.c=f},
dKi:function dKi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmM:function bmM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGA:function eGA(d,e){this.a=d
this.b=e},
bas:function bas(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWc:function aWc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2z:function c2z(){},
c2A:function c2A(d){this.a=d},
c2B:function c2B(d,e,f){this.a=d
this.b=e
this.c=f},
c2C:function c2C(d,e,f){this.a=d
this.b=e
this.c=f},
frH:function frH(d){this.a=d},
X5:function X5(d,e){this.c=d
this.a=e},
awz:function awz(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d_E:function d_E(d,e,f){this.a=d
this.b=e
this.c=f},
d_J:function d_J(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_L:function d_L(d){this.a=d},
d_H:function d_H(d,e){this.a=d
this.b=e},
d_M:function d_M(d){this.a=d},
d_G:function d_G(d){this.a=d},
d_N:function d_N(d){this.a=d},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_O:function d_O(d,e){this.a=d
this.b=e},
frG:function frG(d){this.a=d},
frF:function frF(d){this.a=d},
frE:function frE(d,e,f){this.a=d
this.b=e
this.c=f},
frD:function frD(d,e){this.a=d
this.b=e},
aI_:function aI_(){},
hNk(d){return B.c1(A.K,new C.ftO(),d,!0,!0,!0,null,!1,!1,x.N)},
ftO:function ftO(){},
Xq:function Xq(d){this.a=d},
bbW:function bbW(d){this.d=d
this.c=this.a=null},
d67:function d67(d){this.a=d},
d68:function d68(d,e){this.a=d
this.b=e},
d69:function d69(d){this.a=d},
hua(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.b6(w)}return D.w4},
hHP(d){var w,v=A.d.gI(d.split("@"))
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
hHO(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hua(d)
switch(q){case"shimmer":return B.nk(A.a6a,g,new C.fid(p,A.k.J(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bbj(e,f,p,r),A.as),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.e4(A.B,B.d5(C.fxF(g,B.a2N(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bb0(e,p,r),A.as),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d5(B.eP(A.B,e*0.5,B.e4(A.B,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.df()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.md(Math.sin(e)*0.3)
return B.dO(B.fp(A.B,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.W,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.bjJ(e,f,p,r),A.as),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.W,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.b62(e,f,p,r),A.as),!0,r),g],x.p),r)
case"aurora":return new B.am(A.W,r,A.aX,A.q,B.a([B.e8(B.b1(r,r,r,new C.b5F(e,f,p,r),A.as),!0,r),g],x.p),r)
case"velvet":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bqu(e,p,r),A.as),!0,r)],x.p),r)
case"sparkle":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bnz(e,f,p,r),A.as),!0,r)],x.p),r)
case"sheen":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bmI(e,p,r),A.as),!0,r)],x.p),r)
case"filigree":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.e8(B.b1(r,r,r,new C.bal(e,p,r),A.as),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.B,r,A.a9,A.h,B.a([B.bV(0,B.e8(B.e4(A.B,B.bQ(r,new B.o(r,r,r,r,r,new B.bR(A.B,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.b6),1.6+s*0.15,r,r),!0,r),0,0,0),B.eP(A.B,s*0.06,B.e4(A.B,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fid:function fid(d,e){this.a=d
this.b=e},
bbj:function bbj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb0:function bb0(d,e,f){this.b=d
this.c=e
this.a=f},
bjJ:function bjJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b62:function b62(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b5F:function b5F(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqu:function bqu(d,e,f){this.b=d
this.c=e
this.a=f},
bnz:function bnz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmI:function bmI(d,e,f){this.b=d
this.c=e
this.a=f},
bal:function bal(d,e,f){this.b=d
this.d=e
this.a=f},
d_l:function d_l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wB:function wB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fig(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kz},
hHU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fih())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gI(B.aMK(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hHT(d,e){var w,v,u,t,s,r=d.db
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
adS(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adS=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("a3<1>")
e=B.z(new B.a3(a4,new C.faX(),f),f.k("E.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(A.dw,new C.faY(e),d,!0,!0,!1,A.l2,!1,!1,x.N),$async$adS)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fH2(d),$async$adS)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Jo(d,"Search states\u2026","",A.jF,"Choose state"),$async$adS)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fG_(s)
if(p==null)p=A.d.gI(D.O2)
f=C.cx()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cx()
m=p.e
l=C.fii(p.d)
k=x.u
j=B.a([C.eg(A.bn,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bi,A.a1,"",1,C.cx(),l,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l1,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Bl(i,0.016,D.kA,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bl(0,0.058,D.ex,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bl(0,0.058,D.ex,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.IO("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.IO("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a1,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fDa(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvc("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.ZW("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.ZW("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.ZW("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.ZW("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvc("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bl(m,0.082,D.b7,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cx()
k.push(C.eg(A.bn,!1,i,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bi,A.cp,"",0.074,g,null,"","",0,!1,"",0,D.b7,4280172719,2,y.O,0,0,"",D.ca,D.cG,0.78,0.11,0.388))
A.d.v(k,C.fDa(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvc("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fWN("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fWN("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.ZW("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.ZW("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvb("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvb("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvc("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.IO("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.IO("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvb("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvb("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvc("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.ZW("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvb("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.ZW("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fDa(0.22,0.83,0.56,4291404327,i),h)
h.push(C.IO("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.IO("Nakala ya Hati",A.L,4291404327,9,A.a1,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Ak(null,null,null,null,D.nx,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qQ(m,null,0,0,j,n,D.pk,"","","Hati ya Ndoa",D.d7)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adS,v)},
fih:function fih(){},
faX:function faX(){},
faY:function faY(d){this.a=d},
faV:function faV(d){this.a=d},
faW:function faW(d){this.a=d},
hx4(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hx3(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.m8
case"lineThrough":return A.yc
default:return A.ay}},
eg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ew(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
fYL(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NP[w]
if(v.b===u)return v}return D.d7},
htA(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cz7[w]
if(v.b===u)return v}return D.cG},
hzJ(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cW2[w]
if(v.b===u)return v}return D.b7},
qQ(d,e,f,g,h,i,j,k,l,m,n){return new C.lk(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fPG(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hvs(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.M(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.M(s)
r=C.fYL(d.h(0,"transition"))
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
n=B.cy(n,new C.c7R(),n.$ti.k("E.E"),x.F)
n=B.z(n,B.a2(n).k("E.E"))}return C.qQ(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hvs(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajA[w]
if(v.b===u)return v}return D.m3},
Ak(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.N(Date.now(),0,!1):a4
return new C.hQ(p,t,a1,h,i,w,a0==null?B.a([C.qQ(4294967295,null,0,0,null,C.cx(),D.pk,"","","",D.d7)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
TP(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hrU(a6.h(0,"aspectRatio"))
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
else{f=J.b3(f,new C.c7E(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b3(e,new C.c7F(),x.N)
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
g=B.cy(g,new C.c7G(),g.$ti.k("E.E"),x.bt)
g=B.z(g,B.a2(g).k("E.E"))}return C.Ak(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qQ(4294967295,a3,0,0,a3,C.cx(),D.pk,"","","",D.d7)],x.g):g,v,p,o,s)},
kf(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hrU(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cWO[w]
if(v.b===u)return v}return D.B_},
cx(){var w=Date.now(),v=$.iN
$.iN=v+1
return""+1000*w+"_"+v},
c87(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.B0){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.b7,m,2,o,0,0,"",D.ca,D.cG,0.84,0.08,0.3)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,20,A.bi,A.cp,"",0.12,u,p,"","",0,!1,"",0,D.b7,m,2,"Click to add subtitle",0,0,"",D.ca,D.cG,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.b7,m,2,o,0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!0,f.e.l(),A.ay,"",n,20,A.bi,A.cp,"",0.68,u,p,"","",0,!1,"",0,D.b7,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ca,D.cG,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b7,m,2,"Two Column Slide",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
t=f.e
u=C.eg(A.bn,!0,t.l(),A.ay,"",n,18,A.bi,A.a1,"",0.7,u,p,"","",0,!1,"",0,D.b7,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ca,D.cG,0.42,0.06,0.22)
s=C.cx()
A.d.v(w,B.a([v,u,C.eg(A.bn,!0,t.l(),A.ay,"",n,18,A.bi,A.a1,"",0.7,s,p,"","",0,!1,"",0,D.b7,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ca,D.cG,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.G(d.z,C.eg(A.L,!1,4294967295,A.ay,"",n,42,A.bi,A.u,"",0.2,C.cx(),p,"","",0,!1,"",0,D.b7,m,2,"Section Header",0,0,"",D.ca,D.cG,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b7,m,2,"Compare",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
t=f.c
u=C.eg(A.bn,!1,l,A.ay,"",t.j(0.12).l(),24,A.bi,A.a1,"",0.68,u,p,"","",0,!1,"",0,D.b7,t.l(),2,"",0,0,"",D.ca,D.eP,0.42,0.06,0.22)
s=C.cx()
r=f.e
s=C.eg(A.bn,!1,r.l(),A.ay,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.b7,m,2,"Option A",0,0,"",D.ca,D.cG,0.38,0.08,0.26)
q=C.cx()
t=C.eg(A.bn,!1,l,A.ay,"",t.j(0.06).l(),24,A.bi,A.a1,"",0.68,q,p,"","",0,!1,"",0,D.b7,t.j(0.5).l(),2,"",0,0,"",D.ca,D.eP,0.42,0.52,0.22)
q=C.cx()
A.d.v(w,B.a([v,u,s,t,C.eg(A.bn,!1,r.l(),A.ay,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.b7,m,2,"Option B",0,0,"",D.ca,D.cG,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.b7,m,2,"TERM / QUESTION",0,0,"",D.ca,D.cG,0.8,0.1,0.12)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,22,A.bi,A.cp,"",0.35,u,p,"","",0,!1,"",0,D.b7,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ca,D.cG,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.b7,m,2,"Quiz Question",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!1,f.e.l(),A.ay,"",n,20,A.bi,A.a1,"",0.62,u,p,"","",0,!1,"",0,D.b7,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ca,D.cG,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.b7,m,2,"Worksheet / Assignment",0,0,"",D.ca,D.cG,0.88,0.06,0.04)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!1,f.e.l(),A.ay,"",n,18,A.bi,A.a1,"",0.78,u,p,"","",0,!1,"",0,D.b7,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ca,D.cG,0.88,0.06,0.16)],x.u))
break}},
hjC(d){return A.d.dP(D.ZN,new C.c88(d),new C.c89())},
hjz(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ci(v,C.TP(B.Y(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fzL(d,e){var w,v,u,t=B.Q(x.N,x.I),s=new C.c83(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("bf<2>")
u=B.z(new B.bf(t,w),w.k("E.E"))
A.d.aY(u,new C.c82())
return u},
fPJ(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c7Z()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
aob(d){return C.hjx(d)},
hjx(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aob=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c81()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a07(m),$async$aob)
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
return B.b(B.av(),$async$aob)
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
case 11:o=l.$1($.fPI.h(0,m))
n=C.fzL(C.fzL(j,r),o)
if(n.length===0){u=C.fPJ(C.fPJ(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aob,v)},
c7Y(d){return C.hjw(d)},
hjw(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c7Y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.av(),$async$c7Y)
case 7:r=f
q=r.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kl(q,B.S(q).c)
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
return B.i($async$c7Y,v)},
aYp(d,e){return C.hjy(d,e)},
hjy(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYp=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.av(),$async$aYp)
case 6:s=g
q=s.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.G(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.a9(r)>500?J.Jx(r,J.a9(r)-500):r
w=7
return B.b(s.an("StringList","ngmy_slides_deleted_"+p,o),$async$aYp)
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
return B.i($async$aYp,v)},
TQ(d,e){return C.hjA(d,e)},
hjA(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$TQ=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.a9(a0)===0){w=1
break}p=$.fPH.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aob(a3),$async$TQ)
case 5:p=a6
case 4:w=6
return B.b(C.c7Y(a3),$async$TQ)
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
e=B.z(new B.a3(new B.bf(n,m),new C.c84(o),l),l.k("E.E"))
A.d.aY(e,new C.c85())
$.fPH.m(0,a0,e)
n=B.S(e).k("I<1,a0<n,@>>")
n=B.z(new B.I(e,new C.c86(),n),n.k("ai.E"))
r=A.Q.aj(n,null)
$.fPI.m(0,a0,r)
t=8
w=11
return B.b(B.aeF(a0,r),$async$TQ)
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
return B.b(B.av(),$async$TQ)
case 16:q=a6
w=17
return B.b(q.an("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$TQ)
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
return B.i($async$TQ,v)},
H_:function H_(d,e){this.a=d
this.b=e},
ao9:function ao9(d,e){this.a=d
this.b=e},
tV:function tV(d,e){this.a=d
this.b=e},
m3:function m3(d,e){this.a=d
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
lk:function lk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c7S:function c7S(){},
c7T:function c7T(){},
c7R:function c7R(){},
hQ:function hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c7H:function c7H(){},
c7I:function c7I(){},
c7E:function c7E(){},
c7F:function c7F(){},
c7G:function c7G(){},
jt:function jt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c88:function c88(d){this.a=d},
c89:function c89(){},
c83:function c83(d){this.a=d},
c82:function c82(){},
c7Z:function c7Z(){},
c8_:function c8_(){},
c80:function c80(){},
c81:function c81(){},
c84:function c84(d){this.a=d},
c85:function c85(){},
c86:function c86(){},
hI4(d,e){var w=x.N,v=B.Q(w,x.F)
w=new C.fiQ(e,v,d,B.aY(w))
w.$1(new C.fiM())
w.$1(new C.fiN())
w.$1(new C.fiO())
w.$1(new C.fiP())
return v},
fiQ:function fiQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiM:function fiM(){},
fiN:function fiN(){},
fiO:function fiO(){},
fiP:function fiP(){},
aYm:function aYm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7N:function c7N(d){this.a=d},
c7M:function c7M(){},
c7O:function c7O(){},
c7P:function c7P(d,e){this.a=d
this.b=e},
c7Q:function c7Q(d){this.a=d},
als:function als(d,e){this.c=d
this.a=e},
bf6:function bf6(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dxF:function dxF(){},
aHM:function aHM(){},
c7V(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c7V=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.E(x.q).f.P(D.eiW)
u=!1
w=1
break}u=B.kD(!1,d,t,!1,null,A.a1d,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c7V,v)},
hju(d){var w=A.d.be(D.F4,new C.c7W(d))
if(w<0)return!0
return w>=4},
hjv(d){var w=A.d.be($.bzq(),new C.c7X(d))
if(w<0)return!0
return w>=5},
c7W:function c7W(d){this.a=d},
c7X:function c7X(d){this.a=d},
hJJ(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xA()
$.pG().p6(t,new C.flF(s),!0)
u=B.a([B.Cq(v,A.po,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.esQ,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nl,v,v,v),v,v,4,v,4,v))}return new B.am(A.W,v,A.aX,A.q,u,v)},
flF:function flF(d){this.a=d},
hJk(){return C.fGl()},
hGm(){return C.bxv()},
hIl(){return C.fGc()},
aLR(d,e,f){var w=0,v=B.j(x.H),u
var $async$aLR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fkL(d,f),$async$aLR)
case 5:w=1
break
case 4:if(d.e!=null)d.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aLR,v)},
fkL(d,e){var w=0,v=B.j(x.H),u
var $async$fkL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bvK
if(u==null)u=e+".pdf"
w=2
return B.b(B.c1(A.K,new C.fkM(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fkL)
case 2:return B.h(null,v)}})
return B.i($async$fkL,v)},
fkM:function fkM(d,e){this.a=d
this.b=e},
aaR:function aaR(d,e,f){this.c=d
this.d=e
this.a=f},
eai:function eai(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
eak:function eak(d,e){this.a=d
this.b=e},
eal:function eal(d){this.a=d},
ab9:function ab9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYl(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYk(g,m,f,d,e,h,l,k,j,o,i,null)},
h0B(d){return B.co(new C.fiL(d))},
fGn(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hJs(d){if(d===D.ca)return"None"
return C.fGn(d)},
bwf(d,e,f,g){return C.hzQ(d,e,f,g)},
hzQ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fDt&&t.pH())t.eC()
$.fDt=!0
s.a=null
w=3
return B.b(B.hM(A.bg,!0,"Animation preview",d,new C.f4U(s,e,g,f),null,A.eE,!0,x.H),$async$bwf)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fDt=!1
case 1:return B.h(u,v)}})
return B.i($async$bwf,v)},
fuC(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fuC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bN,x.w).w.a.a*0.88,280,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fGn(f)+" Slide transition preview"
s=s?Aa.Dm:A.u4
w=3
return B.b(C.bwf(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aFp(f,null),A.ap),null),r),$async$fuC)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fuC,v)},
h_U(d,e,f){var w,v,u=null,t=A.co.aq(0,A.k.D(e,0,1))
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
w.jv((1-t)*1.2)
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
byX(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$byX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bN,x.w).w.a.a*0.88,300,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fGn(f)+" Element animation preview"
s=s?Aa.Dm:A.u4
w=3
return B.b(C.bwf(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.awk(f,null),A.ap),null),r),$async$byX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$byX,v)},
hJr(d){var w,v,u,t,s=$.ado.W(0,d)
if(s!=null){$.ado.m(0,d,s)
return s}w=A.cw.aE(A.a.aV(d,A.a.cO(d,",")+1))
$.ado.m(0,d,w)
v=$.fEe=$.fEe+w.length
u=B.a2($.ado).k("cu<1>")
for(;;){if(!(v>41943040&&$.ado.a>1))break
t=new B.cu($.ado,u).gaf(0)
if(!t.C())B.b8(B.fw())
v-=$.ado.W(0,t.gT(0)).length
$.fEe=v}return w},
hJ8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kr(0,d),j=B.z(k,B.a2(k).k("E.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QJ(s,A.u))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QJ(t,A.u))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QJ(u,A.cp))
v.push(new B.ey(n,l,l,A.cT,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aV(d,r)
v.push(B.ds(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a06(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.ku(e))
return m
case"rounded":m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
w=e.gef()*0.18
m.N(new B.j1(B.c_(e,new B.b2(w,w))))
return m
case"triangle":m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
w=e.d
m.N(new B.aw(e.c,w))
m.N(new B.aw(e.a,w))
m.N(new B.bZ())
return m
case"hexagon":w=$.a1()
m=B.a([],m)
v=new B.b_(w.r,A.aw,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.bj(p,o)
m.push(p)
o=v.f
if(o!=null)p.bI(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aw(p,o)
m.push(p)
o=v.f
if(o!=null)p.bI(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.N(new B.bZ())
return v
case"diamond":m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
m.N(new B.aw(e.c,e.gbN().b))
m.N(new B.aw(e.gbN().a,e.d))
m.N(new B.aw(e.a,e.gbN().b))
m.N(new B.bZ())
return m
case"arch":m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
w=e.a
u=e.d
m.N(new B.bj(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.N(new B.aw(w,p))
m.b41(new B.v(t,p),new B.b2(s,s))
m.N(new B.aw(t,u))
m.N(new B.bZ())
return m
default:m=new B.b_($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.nB(e))
return m}},
fgn(d,e,f){return B.co(new C.fgo(D.ebG.q(0,d),d,f,e))},
aYk:function aYk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c7L:function c7L(d){this.a=d},
c7K:function c7K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7J:function c7J(){},
aYh:function aYh(d,e){this.b=d
this.a=e},
fiL:function fiL(d){this.a=d},
fiK:function fiK(d,e){this.a=d
this.b=e},
f4U:function f4U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4S:function f4S(d){this.a=d},
f4T:function f4T(d,e){this.a=d
this.b=e},
aFp:function aFp(d,e){this.c=d
this.a=e},
bq1:function bq1(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eOU:function eOU(d,e,f){this.a=d
this.b=e
this.c=f},
aG1:function aG1(d,e){this.b=d
this.a=e},
SU:function SU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfg:function bfg(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dIx:function dIx(d){this.a=d},
dIw:function dIw(d){this.a=d},
dIv:function dIv(d){this.a=d},
GZ:function GZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7D:function c7D(d){this.a=d},
c7C:function c7C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awk:function awk(d,e){this.c=d
this.a=e},
b9R:function b9R(){this.d=0
this.c=this.a=null},
cY_:function cY_(d){this.a=d},
cXZ:function cXZ(d){this.a=d},
a5n:function a5n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfV:function bfV(d,e){var _=this
_.d=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0i:function e0i(d,e,f){this.a=d
this.b=e
this.c=f},
aWf:function aWf(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
baZ:function baZ(d,e,f){this.b=d
this.c=e
this.a=f},
blI:function blI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eEk:function eEk(){},
fgo:function fgo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmF:function bmF(d,e,f){this.b=d
this.c=e
this.a=f},
aHZ:function aHZ(){},
aIu:function aIu(){},
aJN:function aJN(){},
fjM(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fjM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wc.c2().Ko(D.cUg,A.rH,!0),$async$fjM)
case 3:r=e
if(r==null||J.ch(r.a)){u=null
w=1
break}t=J.fm(r.a)
s=t.c
if(s==null)throw B.O("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.O("That file is too big. Use a file under 8 MB.")
u=C.hJ2(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fjM,v)},
hJ2(d,e){var w,v=d.toLowerCase()
if(A.a.c5(v,".pdf"))return new C.a5G(d,new B.YL(A.cL.gcq().aE(e),"application/pdf"),"")
if(A.a.c5(v,".docx")){w=C.hBi(e)
if(A.a.i(w).length===0)throw B.O("No readable words were found in that Word file.")
return new C.a5G(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c0.Jb(0,e,!0)
if(A.a.i(w).length===0)throw B.O("That file is empty.")
return new C.a5G(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hBi(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cpW().czq(B.qB(d,A.hB,o,o),o,o,!1).cB5(0,"word/document.xml")
if(n==null)return""
w=n.cIO()
v=A.c0.Jb(0,w==null?$.h2K():w,!0).split("</w:p>")
u=new B.f4("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kr(0,r)
p=A.a.i(B.cy(q,new C.f7E(),B.a2(q).k("E.E"),t).fL(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5G:function a5G(d,e,f){this.a=d
this.b=e
this.c=f},
f7E:function f7E(){},
hjB(d,e,f,g,h,i,j,k,l){return new C.M0(l,e,d,g,f,i,h,j,k,null)},
M0:function M0(d,e,f,g,h,i,j,k,l,m){var _=this
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
aB2:function aB2(d,e,f,g,h,i,j,k,l){var _=this
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
egw:function egw(d){this.a=d},
egu:function egu(){},
egv:function egv(d){this.a=d},
ecU:function ecU(){},
ecV:function ecV(){},
ecW:function ecW(d,e){this.a=d
this.b=e},
eeu:function eeu(d){this.a=d},
eei:function eei(){},
eej:function eej(){},
ech:function ech(){},
efC:function efC(d){this.a=d},
egs:function egs(d,e){this.a=d
this.b=e},
ees:function ees(d,e){this.a=d
this.b=e},
egf:function egf(d){this.a=d},
egg:function egg(){},
egh:function egh(){},
egi:function egi(d){this.a=d},
egj:function egj(){},
ebG:function ebG(d){this.a=d},
egt:function egt(){},
edB:function edB(d,e){this.a=d
this.b=e},
ebE:function ebE(d){this.a=d},
ebF:function ebF(d){this.a=d},
edY:function edY(d){this.a=d},
edZ:function edZ(d,e,f){this.a=d
this.b=e
this.c=f},
ee_:function ee_(d){this.a=d},
edA:function edA(){},
edz:function edz(d){this.a=d},
edx:function edx(){},
edw:function edw(d){this.a=d},
edy:function edy(){},
ecQ:function ecQ(d){this.a=d},
ecR:function ecR(d){this.a=d},
edH:function edH(d){this.a=d},
edC:function edC(d){this.a=d},
edD:function edD(d){this.a=d},
edE:function edE(d){this.a=d},
edF:function edF(d){this.a=d},
edG:function edG(d){this.a=d},
edI:function edI(d,e){this.a=d
this.b=e},
ebI:function ebI(){},
ebJ:function ebJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edT:function edT(){},
edU:function edU(d,e){this.a=d
this.b=e},
edR:function edR(d,e,f){this.a=d
this.b=e
this.c=f},
edS:function edS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edL:function edL(d,e,f){this.a=d
this.b=e
this.c=f},
edM:function edM(d,e,f){this.a=d
this.b=e
this.c=f},
edN:function edN(d){this.a=d},
edO:function edO(d,e){this.a=d
this.b=e},
edP:function edP(d,e){this.a=d
this.b=e},
edQ:function edQ(d,e){this.a=d
this.b=e},
edK:function edK(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
edX:function edX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edV:function edV(d){this.a=d},
eed:function eed(){},
eee:function eee(){},
eef:function eef(){},
eeg:function eeg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eea:function eea(d){this.a=d},
eec:function eec(){},
eeb:function eeb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ee8:function ee8(d,e,f){this.a=d
this.b=e
this.c=f},
ee9:function ee9(d,e){this.a=d
this.b=e},
eeh:function eeh(){},
edJ:function edJ(d,e){this.a=d
this.b=e},
ebZ:function ebZ(){},
ec_:function ec_(d,e,f){this.a=d
this.b=e
this.c=f},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebY:function ebY(d){this.a=d},
een:function een(d){this.a=d},
eem:function eem(d,e){this.a=d
this.b=e},
eel:function eel(d,e){this.a=d
this.b=e},
eek:function eek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeo:function eeo(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
eew:function eew(d,e,f){this.a=d
this.b=e
this.c=f},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
eev:function eev(d,e,f){this.a=d
this.b=e
this.c=f},
ebH:function ebH(d){this.a=d},
eci:function eci(){},
egd:function egd(d,e){this.a=d
this.b=e},
ege:function ege(d,e,f){this.a=d
this.b=e
this.c=f},
efD:function efD(d,e,f){this.a=d
this.b=e
this.c=f},
eaE:function eaE(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
ear:function ear(d,e){this.a=d
this.b=e},
eao:function eao(d){this.a=d},
ean:function ean(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
ebT:function ebT(d){this.a=d},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebS:function ebS(d){this.a=d},
eb5:function eb5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eb6:function eb6(d,e){this.a=d
this.b=e},
eba:function eba(d,e){this.a=d
this.b=e},
ebb:function ebb(d){this.a=d},
eb8:function eb8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eb9:function eb9(d){this.a=d},
eb7:function eb7(){},
eb4:function eb4(d,e,f){this.a=d
this.b=e
this.c=f},
ee7:function ee7(d,e){this.a=d
this.b=e},
egm:function egm(d){this.a=d},
egn:function egn(d,e){this.a=d
this.b=e},
ego:function ego(d){this.a=d},
egp:function egp(d,e,f){this.a=d
this.b=e
this.c=f},
egl:function egl(d){this.a=d},
efT:function efT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efS:function efS(d,e,f){this.a=d
this.b=e
this.c=f},
efR:function efR(){},
efQ:function efQ(d,e,f){this.a=d
this.b=e
this.c=f},
efP:function efP(d,e){this.a=d
this.b=e},
efM:function efM(d,e,f){this.a=d
this.b=e
this.c=f},
efK:function efK(d){this.a=d},
efL:function efL(d){this.a=d},
efO:function efO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efN:function efN(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e){this.a=d
this.b=e},
efE:function efE(){},
egc:function egc(d,e){this.a=d
this.b=e},
ega:function ega(d){this.a=d},
egb:function egb(d){this.a=d},
eaw:function eaw(d,e){this.a=d
this.b=e},
eau:function eau(d){this.a=d},
eav:function eav(d){this.a=d},
eax:function eax(d,e){this.a=d
this.b=e},
eay:function eay(d,e,f){this.a=d
this.b=e
this.c=f},
eaC:function eaC(d,e){this.a=d
this.b=e},
eat:function eat(d,e,f){this.a=d
this.b=e
this.c=f},
eas:function eas(d){this.a=d},
eet:function eet(d,e,f){this.a=d
this.b=e
this.c=f},
egk:function egk(d,e,f){this.a=d
this.b=e
this.c=f},
ecP:function ecP(d,e,f){this.a=d
this.b=e
this.c=f},
ecO:function ecO(){},
ebe:function ebe(d,e,f){this.a=d
this.b=e
this.c=f},
ebf:function ebf(d){this.a=d},
eaq:function eaq(d,e){this.a=d
this.b=e},
ecg:function ecg(d,e){this.a=d
this.b=e},
eaz:function eaz(d,e){this.a=d
this.b=e},
eaI:function eaI(d){this.a=d},
eaJ:function eaJ(d,e){this.a=d
this.b=e},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaH:function eaH(d){this.a=d},
eaV:function eaV(d,e){this.a=d
this.b=e},
eaG:function eaG(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb2:function eb2(){},
eb3:function eb3(){},
eaL:function eaL(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaO:function eaO(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaX:function eaX(d,e){this.a=d
this.b=e},
ecf:function ecf(d,e,f){this.a=d
this.b=e
this.c=f},
ece:function ece(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecd:function ecd(d,e,f){this.a=d
this.b=e
this.c=f},
ecc:function ecc(d,e){this.a=d
this.b=e},
eaA:function eaA(d,e){this.a=d
this.b=e},
ebi:function ebi(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebj:function ebj(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebW:function ebW(d){this.a=d},
ee6:function ee6(d,e){this.a=d
this.b=e},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee2:function ee2(d){this.a=d},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee0:function ee0(){},
ee1:function ee1(){},
efF:function efF(){},
efG:function efG(d,e){this.a=d
this.b=e},
efH:function efH(){},
efI:function efI(d){this.a=d},
efJ:function efJ(d,e){this.a=d
this.b=e},
eaF:function eaF(d,e){this.a=d
this.b=e},
ebK:function ebK(){},
ebL:function ebL(){},
ebM:function ebM(){},
ebP:function ebP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebO:function ebO(d,e){this.a=d
this.b=e},
ebN:function ebN(d,e,f){this.a=d
this.b=e
this.c=f},
edf:function edf(d){this.a=d},
ede:function ede(){},
edg:function edg(d,e){this.a=d
this.b=e},
edh:function edh(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
edc:function edc(d){this.a=d},
edj:function edj(d,e){this.a=d
this.b=e},
edb:function edb(d){this.a=d},
edk:function edk(d,e){this.a=d
this.b=e},
eda:function eda(d){this.a=d},
edl:function edl(d,e){this.a=d
this.b=e},
ed9:function ed9(d,e){this.a=d
this.b=e},
edm:function edm(d,e){this.a=d
this.b=e},
ed8:function ed8(d){this.a=d},
edn:function edn(d,e){this.a=d
this.b=e},
ed7:function ed7(d){this.a=d},
ed0:function ed0(d,e){this.a=d
this.b=e},
ed1:function ed1(d){this.a=d},
ed2:function ed2(d){this.a=d},
ed_:function ed_(d){this.a=d},
ed3:function ed3(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d){this.a=d},
ed4:function ed4(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ed5:function ed5(d,e){this.a=d
this.b=e},
ecX:function ecX(d){this.a=d},
ed6:function ed6(d){this.a=d},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d){this.a=d},
ecb:function ecb(d){this.a=d},
ec3:function ec3(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec5:function ec5(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec7:function ec7(d,e){this.a=d
this.b=e},
eca:function eca(d){this.a=d},
egq:function egq(d){this.a=d},
egr:function egr(d){this.a=d},
edq:function edq(d,e){this.a=d
this.b=e},
edp:function edp(d,e){this.a=d
this.b=e},
edo:function edo(d,e){this.a=d
this.b=e},
edr:function edr(d){this.a=d},
eds:function eds(d){this.a=d},
eeP:function eeP(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d){this.a=d},
eeR:function eeR(d){this.a=d},
ef1:function ef1(d){this.a=d},
efc:function efc(d){this.a=d},
efn:function efn(d){this.a=d},
efu:function efu(d){this.a=d},
efv:function efv(d){this.a=d},
efw:function efw(d){this.a=d},
efx:function efx(d){this.a=d},
efy:function efy(d,e){this.a=d
this.b=e},
eeS:function eeS(d){this.a=d},
eeT:function eeT(d){this.a=d},
eeU:function eeU(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeW:function eeW(d){this.a=d},
eeX:function eeX(d){this.a=d},
eeY:function eeY(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
ef_:function ef_(d){this.a=d},
ef0:function ef0(d){this.a=d},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d){this.a=d},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
ef8:function ef8(d){this.a=d},
ef9:function ef9(d){this.a=d},
efa:function efa(d){this.a=d},
eeF:function eeF(d){this.a=d},
efb:function efb(d){this.a=d},
eeN:function eeN(d){this.a=d},
efd:function efd(d){this.a=d},
eeM:function eeM(d,e){this.a=d
this.b=e},
efe:function efe(d,e){this.a=d
this.b=e},
eff:function eff(d,e){this.a=d
this.b=e},
eeL:function eeL(d,e,f){this.a=d
this.b=e
this.c=f},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeO:function eeO(d){this.a=d},
efz:function efz(d,e){this.a=d
this.b=e},
efB:function efB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efA:function efA(d,e){this.a=d
this.b=e},
efg:function efg(d,e,f){this.a=d
this.b=e
this.c=f},
eeK:function eeK(d,e,f){this.a=d
this.b=e
this.c=f},
eeA:function eeA(d,e,f){this.a=d
this.b=e
this.c=f},
eey:function eey(d,e){this.a=d
this.b=e},
efh:function efh(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eex:function eex(d,e){this.a=d
this.b=e},
efi:function efi(d){this.a=d},
eeI:function eeI(d){this.a=d},
efj:function efj(d){this.a=d},
efk:function efk(d){this.a=d},
efl:function efl(d){this.a=d},
efm:function efm(d){this.a=d},
eeH:function eeH(d){this.a=d},
efo:function efo(d){this.a=d},
efp:function efp(d){this.a=d},
efq:function efq(d,e){this.a=d
this.b=e},
eeG:function eeG(d){this.a=d},
efr:function efr(d,e){this.a=d
this.b=e},
eeE:function eeE(d){this.a=d},
efs:function efs(d,e){this.a=d
this.b=e},
eeD:function eeD(d){this.a=d},
eft:function eft(d,e){this.a=d
this.b=e},
eeC:function eeC(d){this.a=d},
ebd:function ebd(d,e,f){this.a=d
this.b=e
this.c=f},
ebc:function ebc(d,e){this.a=d
this.b=e},
efW:function efW(d,e){this.a=d
this.b=e},
efV:function efV(d,e){this.a=d
this.b=e},
efX:function efX(d,e){this.a=d
this.b=e},
efU:function efU(d,e){this.a=d
this.b=e},
ecl:function ecl(d,e){this.a=d
this.b=e},
eck:function eck(d){this.a=d},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ecT:function ecT(){},
ecS:function ecS(){},
eg8:function eg8(d){this.a=d},
eg7:function eg7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg6:function eg6(d,e){this.a=d
this.b=e},
eg1:function eg1(d,e){this.a=d
this.b=e},
eg5:function eg5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg2:function eg2(d,e){this.a=d
this.b=e},
efY:function efY(d){this.a=d},
efZ:function efZ(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d){this.a=d},
eg3:function eg3(d,e){this.a=d
this.b=e},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg9:function eg9(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebC:function ebC(d,e,f){this.a=d
this.b=e
this.c=f},
ebB:function ebB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebq:function ebq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebr:function ebr(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebt:function ebt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebp:function ebp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebu:function ebu(d,e){this.a=d
this.b=e},
ebw:function ebw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebx:function ebx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebo:function ebo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eby:function eby(d,e){this.a=d
this.b=e},
ebn:function ebn(d,e){this.a=d
this.b=e},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebm:function ebm(d){this.a=d},
ebA:function ebA(d,e){this.a=d
this.b=e},
edu:function edu(d){this.a=d},
edt:function edt(d){this.a=d},
edv:function edv(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e,f){this.a=d
this.b=e
this.c=f},
ect:function ect(d,e){this.a=d
this.b=e},
ecG:function ecG(d,e,f){this.a=d
this.b=e
this.c=f},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e,f){this.a=d
this.b=e
this.c=f},
eco:function eco(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecp:function ecp(d,e,f){this.a=d
this.b=e
this.c=f},
ecn:function ecn(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eam:function eam(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eer:function eer(d,e){this.a=d
this.b=e},
eep:function eep(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
acB:function acB(d,e,f){this.a=d
this.b=e
this.c=f},
avI:function avI(d,e){this.c=d
this.a=e},
b8E:function b8E(d,e){var _=this
_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
cUv:function cUv(d){this.a=d},
cUu:function cUu(d){this.a=d},
b8S:function b8S(d,e){this.c=d
this.a=e},
cUR:function cUR(d){this.a=d},
cUS:function cUS(d){this.a=d},
I_:function I_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b8D:function b8D(){this.d=!1
this.c=this.a=null},
cUs:function cUs(d){this.a=d},
cUo:function cUo(d){this.a=d},
cUt:function cUt(d){this.a=d},
cUn:function cUn(d){this.a=d},
cUr:function cUr(d){this.a=d},
cUp:function cUp(d){this.a=d},
cUq:function cUq(d,e){this.a=d
this.b=e},
NE:function NE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yh:function Yh(d,e,f){this.c=d
this.d=e
this.a=f},
aB5:function aB5(d,e,f){var _=this
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
eh6:function eh6(){},
egX:function egX(d){this.a=d},
eh5:function eh5(d){this.a=d},
egY:function egY(d){this.a=d},
egZ:function egZ(d){this.a=d},
egT:function egT(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
egW:function egW(d,e,f){this.a=d
this.b=e
this.c=f},
eh3:function eh3(){},
eh4:function eh4(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh7:function eh7(d,e,f){this.a=d
this.b=e
this.c=f},
eh9:function eh9(d,e){this.a=d
this.b=e},
eh8:function eh8(d){this.a=d},
I6:function I6(d,e){this.c=d
this.a=e},
bn9:function bn9(d,e){this.b=d
this.a=e},
bdt:function bdt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bds:function bds(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGH:function aGH(){},
aII:function aII(){},
bsL:function bsL(){},
aIJ:function aIJ(){},
flG(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$flG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wc.c2().Ko(B.a(["pdf"],x.s),A.rH,!0),$async$flG)
case 3:q=e
if(q==null||J.ch(q.a)){u=null
w=1
break}t=J.fm(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bku(s,"data:application/pdf;base64,"+A.cL.gcq().aE(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flG,v)},
hJD(d){var w,v,u,t,s,r
try{w=B.jc(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).kr(0,w).gH(0)
if(t>0){s=J.aNb(t,1,200)
return s}}catch(r){}return 1},
flx(d){return C.hJC(d)},
hJC(d){var w=0,v=B.j(x.T),u
var $async$flx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flx,v)},
bya(d,e,f,g){return C.hJM(d,e,f,g)},
hJM(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bya=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e2(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h1b(b9,new B.ap(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lt(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lt(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lt(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lt(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a1()
g=new B.tt()
f=B.JZ(g,null)
a7=B.U()
a7.r=A.pV.gt(0)
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
return B.b(a3.B5(800,h),$async$bya)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hk(A.fR),$async$bya)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f6(A.dz.gaK(a5))
a7=A.cL.gcq().aE(a7)
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
return B.i($async$bya,v)},
aMp(d,e,f){return C.hJA(d,e,f)},
hJA(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.aeT(d,e,f,new C.flv(r,q),q,"Sign document"),$async$aMp)
case 3:if(!new B.e2(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bya(q,t,r.b,r.c),$async$aMp)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYo(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMp,v)},
hJK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fVB(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fVB(a0.b)+"</h1>\n"
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
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l1&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fVf(q.ay)+";border:2px solid "+C.fVf(q.ch)+'"></div>'
break
case 5:l=C.fFg(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gagj()
if(p==null)p=A.arA
n=B.S(p)
k=n.k("pr<1>")
j=new B.pr(p,0,8,k)
j.FN(p,0,8,n.c)
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
fVf(d){var w=A.o.ar(d,24)
return"rgba("+(A.o.ar(d,16)&255)+","+(A.o.ar(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
fVB(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
by8(d,e){var w=0,v=B.j(x.H)
var $async$by8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.flE(e,C.hJK(e),d),d,null,!0,!0,x.H),$async$by8)
case 2:return B.h(null,v)}})
return B.i($async$by8,v)},
by9(){var w=0,v=B.j(x.T),u,t,s
var $async$by9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F1(92,2400),$async$by9)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.flx(s),$async$by9)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by9,v)},
aMq(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fGs(d),$async$aMq)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=X.fnQ(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMq,v)},
fPF(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYo:function aYo(d,e,f){this.a=d
this.b=e
this.c=f},
flv:function flv(d,e){this.a=d
this.b=e},
flE:function flE(d,e,f){this.a=d
this.b=e
this.c=f},
flB:function flB(d){this.a=d},
flC:function flC(d,e,f){this.a=d
this.b=e
this.c=f},
flD:function flD(d,e,f){this.a=d
this.b=e
this.c=f},
hJB(d){return C.kf(d.w)},
hJI(d){var w,v,u,t
if(d.length===0||!A.d.e7(d,C.hLr()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xy(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.h6K()
if(w.b.test(u))return u
return null},
h1d(d,e,f){var w,v,u=C.hfh(d),t=$.oW()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aF(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
hJO(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.hY(w,d.b);v.C();){u=w.gT(w).y
t=C.xy(u==null?"":u)
if(t!=null)s.G(0,t)}return s},
flt(d,e){var w,v=d.y,u=C.xy(v==null?"":v)
if(u!=null)return d.y=u
w=C.hJO(new B.a3(e,new C.flu(d),B.S(e).k("a3<1>")))
v=d.x
return d.y=C.h1d(v==null?"":v,null,w)},
hJN(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kf(w.w))return null
v=w.y
return C.xy(v==null?"":v)},
hjD(){var w,v=$.oW(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"SL"+A.d.fL(u)},
TT(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$TT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$TT)
case 3:if(!e){u=B.Q(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eU("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$TT)
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
p=B.a4(m)
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
return B.i($async$TT,v)},
TU(d){return C.hjE(d)},
hjE(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$TU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$TU)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hr("ngmy_slides_transfer_qr_stashes_v1",B.D(["stashes",d,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,A.cy,null),$async$TU)
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
return B.i($async$TU,v)},
a5I(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5I=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$a5I)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.TT(),$async$a5I)
case 4:s=a6
r=C.xy(a2==null?"":a2)
if(r==null)r=a3!=null?C.h1d(a3,null,A.a2O):null
q=x.N
p=B.aY(q)
for(o=J.dd(s),n=J.aW(o.ghP(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xy(J.k(k==null?"":k))
if(j!=null)p.G(0,j)}n=o.gdH(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Y(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dB.aE(t)
g.m(0,"payload",A.cL.gcq().aE(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q2.q(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xy(J.k(q==null?"":q))
if(f==null)f=C.fPK(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.TU(s),$async$a5I)
case 7:u=new B.aCt(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hjD()
n=r==null
d=n?C.fPK(p):r
q=B.Q(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dB.aE(t)
q.m(0,"payload",A.cL.gcq().aE(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q2.q(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.TU(s),$async$a5I)
case 8:u=new B.aCt(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5I,v)},
fPK(d){var w,v,u=$.oW()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aF(1000)),3,"0")
if(d.G(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
aod(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aod=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aod)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.TT(),$async$aod)
case 6:t=f
s=J.a5(t)
r=s.gH(t)
s.bk(t,new C.c8a(q))
w=s.gH(t)!==r?7:8
break
case 7:w=9
return B.b(C.TU(t),$async$aod)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aod,v)},
aoc(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xy(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aoc)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.TT(),$async$aoc)
case 6:t=o.jj(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xy(J.k(q==null?"":q))===p){u=C.a5H(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoc,v)},
a5H(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5H=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$a5H)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.TT(),$async$a5H)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
k=B.aQ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=A.c0.c4(0,A.cw.aE(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Q2.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aC(0,s,null)
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
return B.b(C.TU(p),$async$a5H)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5H,v)},
hJH(d,e,f){var w,v=B.Q(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.S(d).k("I<1,a0<n,@>>")
w=B.z(new B.I(d,new C.flA(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
flI(d,e,f,g){var w
if(e!=null){w=B.Q(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ad())
return A.Q.aj(w,null)}return A.Q.aj(C.hJH(d==null?B.a([],x.D):d,f,g),null)},
flH(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$flH=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5I(h,d,e,f,g),$async$flH)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xy(e==null?"":e)
u=new B.aCg(s,t)
w=1
break}t=A.dB.aE(h)
t=A.jP.gcq().aE(t)
u=new B.aCg(C.xy(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flH,v)},
fGu(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.a9(q)===0)return!1
if(J.cT(q,"NGMYSLIDESYNC2|"))return!0
if(J.cT(q,"NGMYSLIDECODE|"))return!0
if(J.cT(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cT(q,"{"))try{w=A.Q.aC(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hJL(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fGu(v))return v
u=A.a.cO(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aV(v,u))
if(C.fGu(t))return t}s=A.a.cO(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aV(v,s))
if(C.fGu(t))return t}}return null},
flw(d){var w,v,u,t=A.a.i(d)
if(J.a9(t)===0||J.cT(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cT(t,"NGMY_SL:"))w=v.a(A.Q.aC(0,A.c0.c4(0,A.cw.aE(J.mc(t,8))),null))
else w=v.a(A.Q.aC(0,t,null))
v=C.hta(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aeE(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aeE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoc(t[1]),$async$aeE)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flw(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xy(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoc(r),$async$aeE)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flw(s)
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
return B.b(C.a5H(t[1]),$async$aeE)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.flw(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.flw(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
hta(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Q2.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fGr(C.TP(B.Y(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d2(u,x.f)
t=B.cy(t,new C.eWY(w),t.$ti.k("E.E"),x.I)
t=B.z(t,B.a2(t).k("E.E"))
return t}return B.a([],x.D)},
fGr(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
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
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.TP(B.Y(o,x.N,x.z))
if(e&&C.kf(p.w))p.Q=new B.N(Date.now(),0,!1).a4().bL(144e8).aa()
return p},
bxV(){var w=0,v=B.j(x.aT),u,t,s
var $async$bxV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.F0(),$async$bxV)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeE(s),$async$bxV)
case 4:t=e
u=J.ch(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxV,v)},
ftR(d){var w=0,v=B.j(x.T),u,t
var $async$ftR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hM(D.To,!0,"Dismiss",d,new C.ftS(),new C.ftT(),A.Dk,!0,x.N),$async$ftR)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.E(x.q).f.P(D.eh9)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ftR,v)},
hNn(d,e,f,g,h){return B.a6(d,!1).ct(B.eN(new C.ftU(h,e,g,f),!0,null,x.H))},
flu:function flu(d){this.a=d},
c8a:function c8a(d){this.a=d},
flA:function flA(){},
eWY:function eWY(d){this.a=d},
ftS:function ftS(){},
ftT:function ftT(){},
ftU:function ftU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TR:function TR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB3:function aB3(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
egD:function egD(){},
egz:function egz(d,e){this.a=d
this.b=e},
egC:function egC(d,e){this.a=d
this.b=e},
egA:function egA(d){this.a=d},
egB:function egB(d){this.a=d},
egE:function egE(d){this.a=d},
egF:function egF(d){this.a=d},
egI:function egI(d){this.a=d},
egJ:function egJ(d){this.a=d},
egH:function egH(d){this.a=d},
egK:function egK(d){this.a=d},
egG:function egG(d){this.a=d},
egL:function egL(d,e){this.a=d
this.b=e},
egy:function egy(d,e){this.a=d
this.b=e},
egx:function egx(d,e){this.a=d
this.b=e},
TS:function TS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgf:function bgf(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
egM:function egM(d,e){this.a=d
this.b=e},
egN:function egN(d){this.a=d},
egO:function egO(){},
egP:function egP(d){this.a=d},
egQ:function egQ(d,e){this.a=d
this.b=e},
aB0:function aB0(d){this.a=d},
aB1:function aB1(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eag:function eag(d){this.a=d},
eaf:function eaf(){},
eah:function eah(d){this.a=d},
eac:function eac(d){this.a=d},
eab:function eab(){},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
bql:function bql(){},
aoe:function aoe(d){this.a=d},
aB4:function aB4(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
egS:function egS(d){this.a=d},
egR:function egR(d){this.a=d},
hy4(){var w,v,u,t
for(v=0;v<4;++v){w=D.cKo[v]
try{if(A7.bR4(w)){u=w
return u}}catch(t){}}return null},
Pd(d,e){return C.hGx(d,e)},
hGx(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Pd=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hy4()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nx?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.J(b4,2)
c2.b=b5-A.o.J(b5,2)
b6=B.pX(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cm(null,x.A)
b8=A.d.gI(c3)
b9=$.as()
o=new B.eJ(b8,b9)
n=new B.eJ("Getting ready\u2026",b9)
m=new B.eJ(0,b9)
l=B.nR(new C.ffT(c2,b7,o),!1,!1)
b6.lk(0,l)
b9=x.H
B.cb(null,A.dc,!1,null,new C.ffU(n,m),c6,null,!0,!0,b9)
k=new C.ffY(b7)
j=new C.ffZ()
i=null
t=4
b3=c2.a
h=Ad.aOG(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fwd(h,30)
e=B.a([],x.aK)
b3=x.z
i=A7.aTp(f,B.D(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FF.xi(i,"dataavailable",new C.ffV(e))
d=new B.bL(new B.bd($.bs,x.dT),x.b2)
A.FF.xi(i,"stop",new C.ffW(d))
J.afa(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Pd)
case 8:w=7
return B.b(c5.$1(d0),$async$Pd)
case 7:a0=d0
J.fwg(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afa(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afa(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Pd)
case 15:w=14
return B.b(c5.$1(d0),$async$Pd)
case 14:a0=d0
case 13:J.fwg(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afa(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.N(Date.now(),0,!1).bL(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbm())b3=b3===b8.gbm()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fwg(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fg,null,b9),$async$Pd)
case 18:w=16
break
case 17:J.afa(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afa(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cI(0,A.nc),$async$Pd)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hC(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mD(a7)
c0.download=B.t(J.a9(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Ju(b0)
J.ly(b0)
B.bK(A.nZ,new C.ffX(a7),b9)
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
J.ly(l)
if(p.pH())p.eC()
c3=o
b3=$.as()
c3.shH(b3)
J.aNg(c3,0)
c3=n
c3.shH(b3)
J.aNg(c3,0)
c3=m
c3.shH(b3)
J.aNg(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pd,v)},
ffT:function ffT(d,e,f){this.a=d
this.b=e
this.c=f},
ffS:function ffS(){},
ffU:function ffU(d,e){this.a=d
this.b=e},
ffY:function ffY(d){this.a=d},
ffZ:function ffZ(){},
ffV:function ffV(d){this.a=d},
ffW:function ffW(d){this.a=d},
ffX:function ffX(d){this.a=d},
bqx:function bqx(d,e,f){this.c=d
this.d=e
this.a=f},
eRl:function eRl(){},
eRm:function eRm(){},
c8x(d){var w=0,v=B.j(x.at),u,t,s
var $async$c8x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoo(d,A.xU),$async$c8x)
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
return B.i($async$c8x,v)},
c8w(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5o:function a5o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bg_:function bg_(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e19:function e19(d){this.a=d},
e17:function e17(d){this.a=d},
e18:function e18(d,e){this.a=d
this.b=e},
a6f:function a6f(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a6g:function a6g(d,e){this.a=d
this.b=e},
b_1:function b_1(){},
caK:function caK(){},
caL:function caL(){},
caM:function caM(d,e,f,g,h,i,j,k,l){var _=this
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
h7L(d){return new C.afs(d)},
a0D:function a0D(){},
afs:function afs(d){this.a=d},
aNA:function aNA(){},
atD:function atD(d,e){this.d=d
this.b=e
this.a=null},
aP4:function aP4(d){this.b=d
this.a=null},
fbg(d,e){var w=0,v=B.j(x.H)
var $async$fbg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a1().gwy().K7(d,e),$async$fbg)
case 2:B.fnW()
return B.h(null,v)}})
return B.i($async$fbg,v)},
fZw(d,e){return(A.qp[(d^e)&255]^A.o.ar(d,8))>>>0},
f9a(d,e,f,g,h,i){var w=C.hCZ(d,A.d5,f,null,A.cP,g,h,i)
return w},
h0m(d){var w=F.h14(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hfh(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.og.h(0,w)
if(v!=null)return v
for(u=A.og.gdH(A.og),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
h0u(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<31;++w)v+="- "+D.cBw[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwc(d,e){return C.hzL(d,e)},
hzL(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hC([d],"application/pdf")
n=x.z
q=B.aQD(B.a([r],x.e3),e,B.D(["type","application/pdf"],n,n))
p=B.cs(B.D(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jJ(o,"share",[p]),x.H),$async$bwc)
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
return B.i($async$bwc,v)},
fGl(){var w=0,v=B.j(x.y),u,t,s
var $async$fGl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f2C
s=$.bvK
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwc(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGl,v)},
bxv(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bxv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f2C
l=$.bvK
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fWg()?3:4
break
case 3:w=5
return B.b(C.bwc(m,k),$async$bxv)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bvL
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mD(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Ju(q)
w=10
return B.b(B.bK(A.X,null,x.H),$async$bxv)
case 10:J.ly(q)
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
return B.i($async$bxv,v)},
fGc(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fGc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bvL
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.l7.tQ(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fGc,v)},
fGt(d,e){var w=0,v=B.j(x.H),u,t
var $async$fGt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hC([d],"text/html"))
t.toString
u=window
u.toString
A.l7.tQ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fGt,v)},
aYZ(d,e){var w=0,v=B.j(x.y),u
var $async$aYZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZ0(d,e),$async$aYZ)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZ_(d),$async$aYZ)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYZ,v)}},D,H,Ah,N,W,A4,G,F,E,Ai,P,X,Y,A5,K,Aj,U,O,Q,L,A6,Ak,Z,Al,Am,A7,A8,An,A9,Aa,Ab,Ao,Ap,R,Aq,I,Ac,S,T,Ar,M,A_,A0,A1,As,At
J=c[1]
B=c[0]
A=c[2]
V=c[178]
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
W=c[177]
A4=c[185]
G=c[148]
F=c[29]
E=c[179]
Ai=c[96]
P=c[103]
X=c[27]
Y=c[138]
A5=c[109]
K=c[181]
Aj=c[108]
U=c[58]
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
C.no.prototype={
u9(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t2(t,v)
return new C.no(t===0?!1:w,v,t)},
bEb(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BE()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t2(w,u)
return new C.no(r===0?!1:s,u,r)},
bEB(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BE()
w=o-d
if(w<=0)return p.a?$.fHN():$.BE()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t2(w,u)
q=new C.no(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a0o())
return q},
dN(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.O(B.dD("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.J(e,16)===0)return r.bEb(v)
u=w+v+1
t=new Uint16Array(u)
C.fSY(r.b,w,e,t)
w=r.a
s=C.t2(u,t)
return new C.no(s===0?!1:w,t,s)},
lU(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.O(B.dD("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.J(e,16)
if(u===0)return n.bEB(v)
t=w-v
if(t<=0)return n.a?$.fHN():$.BE()
s=n.b
r=new Uint16Array(t)
C.hpf(s,w,e,r)
w=n.a
q=C.t2(t,r)
p=new C.no(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dN(1,u)-1)!==0)return p.aD(0,$.a0o())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a0o())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cxO(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5h(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5h(t,e)
if(s===0)return $.BE()
if(r===0)return t.a===e?t:t.u9(0)
w=s+1
v=new Uint16Array(w)
C.hpd(t.b,s,d.b,r,v)
u=C.t2(w,v)
return new C.no(u===0?!1:e,v,u)},
FO(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BE()
w=d.c
if(w===0)return t.a===e?t:t.u9(0)
v=new Uint16Array(s)
C.b5V(t.b,s,d.b,w,v)
u=C.t2(s,v)
return new C.no(u===0?!1:e,v,u)},
brA(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t2(r,u)
return new C.no(!1,u,s)},
brz(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t2(u,r)
return new C.no(!1,r,v)},
brB(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t2(p,m)
return new C.no(s!==0,m,s)},
SE(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BE()
w=t.a
if(w===e.a){if(w){w=$.a0o()
return t.FO(w,!0).brB(e.FO(w,!0),!0).a5h(w,!0)}return t.brA(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.brz(v.FO($.a0o(),!1),!1)},
ap(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5h(e,v)
if(C.cxO(u.b,t,e.b,w)>=0)return u.FO(e,v)
return e.FO(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.u9(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5h(e,v)
if(C.cxO(u.b,t,e.b,w)>=0)return u.FO(e,v)
return e.FO(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BE()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fSZ(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t2(w,t)
return new C.no(q===0?!1:r,t,q)},
bEa(d){var w,v,u,t
if(this.c<d.c)return $.BE()
this.aMn(d)
w=$.fBC.c2()-$.aul.c2()
v=C.fBE($.fBB.c2(),$.aul.c2(),$.fBC.c2(),w)
u=C.t2(w,v)
t=new C.no(!1,v,u)
return this.a!==d.a&&u>0?t.u9(0):t},
ce1(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aMn(d)
w=C.fBE($.fBB.c2(),0,$.aul.c2(),$.aul.c2())
v=C.t2($.aul.c2(),w)
u=new C.no(!1,w,v)
if($.fBD.c2()>0)u=u.lU(0,$.fBD.c2())
return t.a&&u.c>0?u.u9(0):u},
aMn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fSV&&d.c===$.fSX&&g.b===$.fSU&&d.b===$.fSW)return
w=d.b
v=d.c
u=16-A.o.gagI(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fST(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fST(g.b,f,u,r)}else{r=C.fBE(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fBF(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cxO(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b5V(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b5V(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hpe(p,r,i);--o
C.fSZ(h,j,0,r,o,s)
if(r[i]<h){m=C.fBF(j,s,o,n)
C.b5V(r,l,n,m,r)
while(--h,r[i]<h)C.b5V(r,l,n,m,r)}--i}$.fSU=g.b
$.fSV=f
$.fSW=w
$.fSX=v
$.fBB.b=r
$.fBC.b=l
$.aul.b=s
$.fBD.b=u},
gV(d){var w,v,u,t=new C.cxP(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cxQ().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.no&&this.aI(0,e)===0},
rl(d,e){return this.aI(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u3(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gagI(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.ar(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cxR(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cxS(w)
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
while(v.c>1){u=$.h4H()
if(u.c===0)B.b8(D.aUD)
t=v.ce1(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bEa(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.du(w,x.bJ).fL(0)},
$iaOj:1,
$ihu:1}
C.aNK.prototype={
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
cB5(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gcg(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jM(w,w.length,B.S(w).k("jM<1>"))}}
C.PP.prototype={
cIO(){var w,v
if(this.as==null)this.b6k()
w=this.as
v=w==null?null:w.alf()
return v==null?null:v.ex()},
b6k(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alf().ex()
this.as=new C.bIr(v)}},
gX(d){return this.at}}
C.a1z.prototype={
a3(){return"CompressionType."+this.b}}
C.bCy.prototype={
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
v=w+(A.o.fl(u,t)&A.xv[d])
s.c=t}return v}}
C.bBi.prototype={
czp(d,e){var w,v,u,t,s,r=this,q=new C.bCy(d)
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
t=r.ccm(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.ccp(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
ccm(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.cYM[u])v=!1
if(t!==D.cEy[u])w=!1
if(!w&&!v)return-1}return v?0:2},
ccp(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bU3()
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
u[w]=l}c9.fr=B.bT(6,$.h2O(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h2N()
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
if(f<h)h=f}c9.bPL(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.apX(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.apX(d3)}while(a3===0||a3===1);++a5
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
a3=c9.apX(d3)
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
apX(d){var w,v,u,t,s=this,r=s.ay
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
bPL(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bU3(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cpX.prototype={
aD6(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bHe(e)
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
if(w>0)e.aD9(w,!1)
r.ccK(e)
q=r.r
v=r.f
u=e.aFY(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b4E()
s.cIN(0,u,e,f)
q.push(s)}},
ccK(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a4V(20,r)
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
bHe(d){var w,v,u,t,s,r,q,p,o,n
if(d.gH(0)<=4)return-1
w=d.c
v=d.gH(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a4V(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aj1(A.hB)
o.aHe(r.ex(),A.hB,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cpV.prototype={}
C.au0.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cpY.prototype={
aD6(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aP()
o.b=e.aP()
w=D.axO.h(0,e.aP())
o.c=w==null?D.Jb:w
o.d=e.aP()
o.e=e.aP()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aP()
u=e.aP()
o.x=e.ak5(v)
o.y=e.h1(u).ex()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aLE:D.BR
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.BR&&u>2){w=o.y
w.toString
s=B.qB(w,A.hB,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aP()===39169){s.aP()
s.aP()
s.ak5(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aP()
o.at=D.aLF
o.ax=new C.cpV(r,q)
w=D.axO.h(0,q)
o.c=w==null?D.Jb:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gH(d){return this.bft().length},
alf(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qB(new Uint8Array(0),A.hB,q,q)
w=r.at
if(w!==D.BR)if(p.gH(0)<=0)r.at=D.BR
else{if(w===D.aLE){p=r.bCu(p)
r.Q=p}else if(w===D.aLF){p=r.bC7(p)
r.Q=p}r.at=D.BR}w=r.c
if(w===D.abh){v=p.c
u=B.da()
p=r.Q
if(p.gH(0)<=524288e3)u.b=A.oE.Ak(p.ex(),!0,!1)
else{t=B.a65(A.hB,r.w)
p=r.Q
p.toString
A.oE.a1d(p,t,!0,!1)
u.b=t.Fn()}r.Q.c=v
return B.qB(u.b6(),A.hB,q,q)}else if(w===D.abi){s=B.a65(A.hB,32768)
p=r.Q
v=p.c
C.h7W().czp(p,s)
u=s.Fn()
r.Q.c=v
return B.qB(u,A.hB,q,q)}else return B.qB(p.ex(),A.hB,q,q)},
bft(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ex()},
u(d){return this.x},
b2l(d){var w=this.ch,v=C.HW(C.fZw(w[0].M(0),d))
w[0]=v
v=w[1].ap(0,v.SE(0,C.HW(255)))
w[1]=v
w[1]=v.aO(0,C.HW(134775813)).ap(0,C.HW(1)).SE(0,C.HW(4294967295))
w[2]=C.HW(C.fZw(w[2].M(0),w[1].lU(0,24).M(0)))},
aLP(){var w=(this.ch[2].SE(0,C.HW(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bCu(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qB(new Uint8Array(0),A.hB,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b2l(u[v.c++]^r.aLP())}t=r.Q.ex()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aLP()
r.b2l(s)
u&2&&B.ah(t)
t[w]=s}return B.qB(t,A.hB,q,q)},
bC7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ex()
v=16}else if(k===2){w=d.h1(12).ex()
v=24}else{w=d.h1(16).ex()
v=32}u=d.h1(2).ex()
t=d.h1(d.gH(0)-10)
s=d.h1(10)
r=t.ex()
k=this.ay
k.toString
q=C.hoV(k,w,v)
p=new Uint8Array(B.ck(A.aD.dA(q,0,v)))
k=v*2
o=new Uint8Array(B.ck(A.aD.dA(q,v,k)))
if(!C.fSo(A.aD.dA(q,k,k+2),u))throw B.O(B.fb("password error"))
k=new Uint8Array(16)
n=new C.bzT(k,new Uint8Array(16),p)
k=x.r
m=J.a2U(0,k)
m=n.r=new C.caz(m)
m.c=!0
m.b=m.beN(!0,new C.apL(p))
if(m.c)m.d=B.bi(D.nv,!0,k)
else m.d=B.bi(D.xo,!0,k)
l=C.fQD(C.fQF(),64)
l.b8z(new C.apL(o))
n.w=l
n.cIo(r,0,r.length)
k=s.ex()
m=n.x
m===$&&B.c()
if(!C.fSo(k,m))throw B.O(B.fb("macs don't match"))
return B.qB(r,A.hB,null,null)}}
C.b4E.prototype={
cIN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.ak5(w)
if(v>0){t=e.h1(v).ex()
n.ax=t
if(v>=4){s=B.qB(t,A.hB,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aP()
p=s.aP()
o=s.a4V(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.r8()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.r8()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.r8()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.ak5(u)
f.c=n.as
t=new C.cpY(D.Jb,n,D.BR,B.a([C.HW(0),C.HW(0),C.HW(0)],x.f3))
n.ch=t
t.aD6(0,f,g)},
u(d){return this.at}}
C.cpW.prototype={
czq(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cpX(B.a([],x.fT))
this.a=g
g.aD6(0,d,f)
g=B.a([],x.bm)
w=B.Q(x.N,x.r)
v=new C.aNK(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c5(o,"/")||A.a.c5(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.PP(o,A.o.ak(Date.now(),1000),0):C.fJ9(o,q.w,q)
v.G(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fJ9(o,q.w,q)
if(k.as==null)k.b6k()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aj1(A.hB)
j.aHe(o,A.hB,h,h)}i=j==null?h:j.ex()
if(i!=null)new B.IA(!1).Go(i,0,h,!0)}}return v}}
C.bzT.prototype={
cIo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bd(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.h7F(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dD("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dD("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bFF(u,0,w,0,o)}else{o===$&&B.c()
q.bCy(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Js(w,0)
m.x=A.aD.dA(m.x,0,10)
w=m.w
l=w.a
l.l2(0)
w=w.d
w===$&&B.c()
l.Bd(0,w,0,w.length)
return f}}
C.caE.prototype={}
C.caI.prototype={}
C.caC.prototype={}
C.apL.prototype={}
C.caH.prototype={
czF(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b8z(new C.apL(A.aD.fT(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bGD(n.a,n.b,t,s,r)
r+=v}A.aD.ha(f,g,g+w,s)
return o.a.c},
bGD(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.O(B.dD("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bd(0,d,0,d.length)
v.Bd(0,f,0,4)
u=m.c
u===$&&B.c()
w.Js(u,0)
u=m.c
A.aD.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bd(0,s,0,s.length)
w.Js(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.caD.prototype={}
C.caB.prototype={}
C.apM.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.apM){v=this.a
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
w=A.o.rl(w,e.gbQ_())
if(!w)e.gbQ_()
return w},
aFr(d,e){this.a=0
this.b=d},
rn(d){return this.aFr(d,null)},
aG0(d){var w,v=this,u=v.b
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
w.aVs(v,u)
u=w.b
u===$&&B.c()
w.aVs(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aVs(d,e){var w,v=A.o.fE(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bl(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.caG.prototype={
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
akL(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aWS(u,0)
v.c=0}v.a.aG0(1)},
Bd(d,e,f,g){var w=this.cbf(e,f,g)
f+=w
g-=w
w=this.cbg(e,f,g)
this.cb6(e,f+w,g-w)},
Js(d,e){var w,v=this,u=C.fQE(v.a),t=u.a
t===$&&B.c()
t=C.fGW(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fGW(w,3)
v.cba()
v.cb7(u)
v.aoO()
v.c5u(d,e)
v.l2(0)
return 20},
aWS(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nz(A.aD.gaK(d),d.byteOffset,d.length).getUint32(e,A.hP===w.d)
if(w.w===16)w.aoO()},
aoO(){this.cIn()
this.w=0
A.d.hh(this.r,0,16,0)},
cb6(d,e,f){while(f>0){this.akL(d[e]);++e;--f}},
cbg(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aWS(d,e)
e+=4
f-=4
w.aG0(4)
v+=4}return v},
cbf(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.akL(d[e]);++e;--f;++v}return v},
cba(){this.akL(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.akL(0)}},
cb7(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aoO()
u=v.d
switch(u){case A.hP:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ci:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.O(B.b9("Invalid endianness: "+u.u(0)))}},
c5u(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hP===this.d,s=0;s<w;++s){r=v[s]
q=J.nz(A.aD.gaK(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.caJ.prototype={
cIn(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pA[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pA[30]
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
C.caF.prototype={
b8z(d){var w,v,u,t,s=this,r=s.a
r.l2(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bd(0,w,0,v)
w=s.d
w===$&&B.c()
r.Js(w,0)
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
s.b3t(s.d,u,54)
s.b3t(s.e,u,92)
u=s.d
r.Bd(0,u,0,u.length)},
Js(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Js(s,w)
s=u.e
t.Bd(0,s,0,s.length)
v=t.Js(d,e)
s=u.e
A.aD.hh(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bd(0,s,0,s.length)
return v},
b3t(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.caA.prototype={}
C.caz.prototype={
a_B(d){return(D.nv[d&255]&255|(D.nv[d>>>8&255]&255)<<8|(D.nv[d>>>16&255]&255)<<16|D.nv[d>>>24&255]<<24)>>>0},
beN(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.O(B.dD("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.r,r=0;r<t;++r)s[r]=B.bT(4,0,!1,u)
switch(v){case 4:q=J.nz(A.aD.gaK(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_B((m>>>8|(m&$.pA[24])<<24)>>>0)^D.chL[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nz(A.aD.gaK(e),e.byteOffset,w)
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
p=(p^f.a_B((k>>>8|(k&$.pA[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_B((k>>>8|(k&$.pA[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nz(A.aD.gaK(e),e.byteOffset,w)
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
p=(p^f.a_B((g>>>8|(g&$.pA[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_B(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.O(B.b9("Should never get here"))}return s},
bFF(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nz(A.aD.gaK(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.dZ[a8&255]
u=D.dZ[a9>>>8&255]
t=$.pA[8]
s=D.dZ[b0>>>16&255]
r=$.pA[16]
q=D.dZ[b1>>>24&255]
p=$.pA[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.dZ[a8&255]^C.mW(D.dZ[a9>>>8&255],24)^C.mW(D.dZ[b0>>>16&255],16)^C.mW(D.dZ[b1>>>24&255],8)^b6[w][0]
m=D.dZ[a9&255]^C.mW(D.dZ[b0>>>8&255],24)^C.mW(D.dZ[b1>>>16&255],16)^C.mW(D.dZ[a8>>>24&255],8)^b6[w][1]
l=D.dZ[b0&255]^C.mW(D.dZ[b1>>>8&255],24)^C.mW(D.dZ[a8>>>16&255],16)^C.mW(D.dZ[a9>>>24&255],8)^b6[w][2]
b1=D.dZ[b1&255]^C.mW(D.dZ[a8>>>8&255],24)^C.mW(D.dZ[a9>>>16&255],16)^C.mW(D.dZ[b0>>>24&255],8)^b6[w][3]
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
a1=J.nz(A.aD.gaK(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nz(A.aD.gaK(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nz(A.aD.gaK(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nz(A.aD.gaK(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bCy(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nz(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nz(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nz(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nz(A.aD.gaK(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.dY[a6&255]
v=D.dY[b0>>>8&255]
u=$.pA[8]
t=D.dY[a5>>>16&255]
s=$.pA[16]
r=D.dY[a4>>>24&255]
q=$.pA[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.dY[a6&255]^C.mW(D.dY[b0>>>8&255],24)^C.mW(D.dY[a5>>>16&255],16)^C.mW(D.dY[a4>>>24&255],8)^b5[a9][0]
o=D.dY[a4&255]^C.mW(D.dY[a6>>>8&255],24)^C.mW(D.dY[b0>>>16&255],16)^C.mW(D.dY[a5>>>24&255],8)^b5[a9][1]
n=D.dY[a5&255]^C.mW(D.dY[a4>>>8&255],24)^C.mW(D.dY[a6>>>16&255],16)^C.mW(D.dY[b0>>>24&255],8)^b5[a9][2]
b0=D.dY[b0&255]^C.mW(D.dY[a5>>>8&255],24)^C.mW(D.dY[a4>>>16&255],16)^C.mW(D.dY[a6>>>24&255],8)^b5[a9][3]
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
d=J.nz(A.aD.gaK(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bIq.prototype={}
C.bIr.prototype={
gH(d){var w=this.a.length
return w},
alf(){return B.qB(this.a,A.hB,null,null)}}
C.b6a.prototype={
u5(d){return C.hs5(d)}}
C.cjX.prototype={
L2(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7D(v,t+20,u+16,t,u,B.td(d.x))},
mQ(d){return!1}}
C.bJj.prototype={
ctY(d){if(this.b)throw B.O(B.b9("FontLoader is already loaded"))
this.c.push(d.bA(new C.bJk(),x.E))},
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
return B.b(p.fbg(f,r),$async$m9)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$m9,v)}}
C.asI.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a63.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aU(this))return!1
return e instanceof C.a63&&e.a===this.a},
gV(d){return B.bl(B.aU(this),B.vT(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aU(this)===D.eYI)return"["+(w+B.dX(this.a))+"]"
return"[ObjectKey "+(w+B.dX(this.a))+"]"}}
C.aS1.prototype={
bX(d){var w=new C.axs(!0,this.e,null,new B.d6(),B.c8())
w.bW()
w.scw(null)
return w},
c3(d,e){var w
x.cQ.a(e)
e.sxA(0,!0)
w=this.e
if(!w.A(0,e.ae)){e.ae=w
e.aBM()}}}
C.axs.prototype={
sxA(d,e){return},
goK(){var w=this.a7$
return w!=null},
gkx(){var w=this.a7$
return w!=null},
KS(d){var w=d==null?B.fLt(null):d
w.sa25(this.ae)
return w}}
C.ZA.prototype={
S(){return new C.aFI(B.aY(x.N))},
cGG(d){return this.d.$1(d)},
cEu(){return this.e.$0()}}
C.aFI.prototype={
Z(){this.a0()
this.Ni()},
Ni(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ni=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cEu(),$async$Ni)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ePO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ni,v)},
WD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.ePS(t),q),q.k("E.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.ePT(t))
w=3
return B.b(C.akM(p),$async$WD)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ePU(t,s,p))
w=4
return B.b(t.Ni(),$async$WD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WD,v)},
ZC(d){return this.cfb(d)},
cfb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.ePP(t))
s=J.q(d,"id")
w=3
return B.b(C.bTt(J.k(s==null?"":s)),$async$ZC)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.ePQ(t))
w=1
break}q=C.fGr(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cGG(B.a([q],x.D)),$async$ZC)
case 4:if(t.c==null){w=1
break}t.n(new C.ePR(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
Nh(d,e){return this.bCX(0,e)},
bCX(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.ePJ(q),r,null,!0,!0,x.y),$async$Nh)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.ePK(t))
s=s.h(e,"id")
w=4
return B.b(C.akL(J.k(s==null?"":s)),$async$Nh)
case 4:if(t.c==null){w=1
break}t.n(new C.ePL(t))
w=5
return B.b(t.Ni(),$async$Nh)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nh,v)},
ct0(d){var w=B.bg(d),v=w==null?null:w.bP()
if(v==null)return""
return A.hW[B.bB(v)-1]+" "+B.bN(v)},
aLG(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LD,A.n),w,e,w,w,w,w,w,e)},
aLF(d){return this.aLG(d,44)},
b0K(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LD:u,r=B.m(14),q=B.V(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.GO,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.GO,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bjE,u,u,u)],p))}return B.C(B.aJ(A.c5,B.de(u,B.A(q,A.m,u,A.b5,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hG,u,u,u,A.wh,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ePY(this,d),u,u,u,u,u,u,!1,A.ae),1)},
c9j(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.db.j(0.14):D.U0,n=B.m(18),m=p?A.db:A.du
m=B.H(m,A.r,p?1.8:1)
w=this.aLF(A.p7)
v=B.d(d.b,q,1,A.Z,q,q,q,D.aJW,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.C(B.u(B.a([v,A.dd,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aJY,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LD:q
u=p?q:B.H(A.be,A.r,1.6)
r=p?D.bxy:q
return B.aJ(q,B.de(q,B.A(B.a([w,A.bb,t,B.de(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a6),A.fO,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fO,q,q,A.d6,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ePN(this,p,d),q,q,q,q,q,q,!1,A.ae)},
cgG(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.ct0(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.du,A.r,1)
v=r.aLF(A.KO)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.Z,q,q,q,D.aJW,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.C(B.u(B.a([u,A.dd,B.d(p+" slides"+t,q,q,q,q,q,q,D.aJY,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aYu(A.hf,A.bo,"Bring it back",r.r?q:new C.ePV(r,d))
return B.p(q,B.A(B.a([v,A.bb,t,p,A.bp,r.aYu(A.e4,A.cM,"Delete",r.r?q:new C.ePW(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.U0,q,w,o,q,q,A.n),q,q,q,A.d6,D.beo,q,q,q)},
aYu(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hJ(B.aJ(w,B.p(w,B.V(d,v?A.be:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
ap3(d,e,f){var w=null
return new B.B(D.bdr,B.u(B.a([B.V(d,A.be,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.exy,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.eqq,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c3
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bN,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.be,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aLG(A.xb,46),A.bb,D.bkn],t)
if(j.r)s.push(D.dM0)
s.push(B.aF(i,i,i,i,A.Ln,i,i,i,new C.eQ0(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.du,A.r,1)
o=J.a5(h)
q=B.a([A.U,u,new B.B(D.bgS,s,i),B.p(i,B.A(B.a([j.b0K(0,A.wN,"Save",j.a.c.length),j.b0K(1,A.L3,"Saved",o.gH(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bfY,A.ei,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cM:A.bo).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cM:A.bo).j(0.4),A.r,1)
p=j.y
n=p?A.KQ:A.ej
n=B.V(n,p?A.cM:A.bo,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.aa,B.C(B.d(m,i,i,i,i,i,i,A.a3M,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bfU,A.iD,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.C(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.etM,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.ewD,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eQ1(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.U],t)
if(j.a.c.length===0)s.push(j.ap3(A.p7,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.c9j(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dLC)
else if(j.e==null)s.push(j.ap3(A.afJ,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.ap3(A.o4,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cgG(r.gT(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.ck,B.cQ(u,i,W.ad_,i,i,A.af,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbWx()
p=s?i:D.LD
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.aa(0,A.G,A.b0.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wN,m?A.j8:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.B(D.bgv,B.aJ(i,B.de(i,B.A(B.a([k,A.a3c,new B.dp(1,A.ck,B.eY(A.B,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j8:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b5,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hG,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.U)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,i,new B.aV(0,1/0,0,w.a.b*0.9),D.aRO,i,i,i,i,i,i,i,i)}}
C.nQ.prototype={
ad(){return B.D(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a4().aa()],x.N,x.z)}}
C.Wn.prototype={
S(){return new C.auw(B.a([],x.k),B.f2(null,x.H))},
gdQ(){return this.c}}
C.auw.prototype={
Z(){this.a0()
this.Np()},
Np(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Np=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_z(t.a.c),$async$Np)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.czc(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Np,v)},
cmz(d){var w,v,u,t=this
d.c=new B.N(Date.now(),0,!1)
w=J.pH(t.d,new C.czf(d))
v=w<0
if(v&&C.hph(d))return t.f
u=t.d
if(v)J.oZ(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fxv(new C.czg(t),v)
return t.f=t.f.bA(new C.czh(t,d),v).eQ(new C.czi())},
H8(d,e,f){return this.c3a(0,e,f)},
aSY(d,e){return this.H8(0,e,!1)},
c3a(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$H8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ct(B.eN(new C.czb(t,e),!1,null,x.H)),$async$H8)
case 3:w=4
return B.b(t.f,$async$H8)
case 4:w=5
return B.b(t.Np(),$async$H8)
case 5:case 1:return B.h(u,v)}})
return B.i($async$H8,v)},
aSg(d){var w=A.o.u(1000*Date.now()),v=d==null?D.da9:d
this.H8(0,new C.nQ(w,v,new B.N(Date.now(),0,!1)),!0)},
bW2(){return this.aSg(null)},
aah(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aah=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.czj(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aah)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aSg(s)
case 1:return B.h(u,v)}})
return B.i($async$aah,v)},
H7(d,e){return this.bCP(0,e)},
bCP(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$H7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cz6(e),s,null,!0,!0,x.y),$async$H7)
case 3:if(g!==!0){w=1
break}t.n(new C.cz7(t,e))
w=4
return B.b(t.f,$async$H7)
case 4:w=5
return B.b(C.adF(t.a.c,e.a),$async$H7)
case 5:w=6
return B.b(t.Np(),$async$H7)
case 6:case 1:return B.h(u,v)}})
return B.i($async$H7,v)},
BV(d){return this.bvf(d)},
bvf(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$BV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.cz2(d),r,!0,!0,!1,null,!1,!1,x.N),$async$BV)
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
return B.b(t.aSY(0,d),$async$BV)
case 9:w=5
break
case 7:w=10
return B.b(F.fGY(r,d.b,null),$async$BV)
case 10:w=5
break
case 8:w=11
return B.b(t.H7(0,d),$async$BV)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$BV,v)},
bPX(){var w,v,u=null,t=[D.dac,D.daa,D.dab],s=new C.cz9(),r=B.m(26),q=x.V,p=B.a([new B.aa(0,A.G,A.dC.j(0.4),A.eI,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b2(999,999)
n.push(B.p(u,new B.w(D.cW0[w],u,A.ov,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.by(v,v,v,v),u,u,A.n),u,u,u,u,A.nm,u,u,u))}return B.p(u,B.A(B.a([B.C(B.u(B.a([D.eUr,A.P,B.cd(A.bH,n,A.by,6,6),A.aS,B.aJ(u,B.p(u,D.eac,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.cC,10)],q),u,A.n),u,u,u,u,V.adl,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cz8(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.am(A.B,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bEF,A.n),u,u,u,u,D.bh1,u,u,u)},
bvd(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.aa(0,A.G,A.x.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.am(A.W,v,A.aX,A.q,B.a([B.eY(A.B,F.alj(d.b),A.h,A.bM),D.dQe,B.an(v,B.aJ(v,B.p(v,D.byi,A.h,v,v,D.aSG,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cyY(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.Z,v,v,v,D.enU,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fT(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.etW,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cyZ(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cz_(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eG(B.a([new B.B(H.abV,B.hJ(B.aJ(s,B.p(s,A.aim,A.h,s,s,new B.o(s,s,s,s,B.a([new B.aa(0,A.G,A.b0.j(0.5),A.J,12)],x.V),E.uH,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbXh(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mo,s,s,s,!0,s,s,s,s,s,D.eUv,s,s,s,1,s,!0)
if(t.e)r=D.aVU
else{w=t.bPX()
v=B.a([D.eHj,A.aa],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.a9(t.d),s,s,s,s,s,s,D.enn,s,s,s),A.h,s,s,new B.o(D.b_9,s,s,u,s,s,A.n),s,s,s,s,A.DH,s,s,s))}r=B.a([new B.nl(Ac.Vc,new B.lI(w,s),s),new B.nl(D.bgp,new B.lI(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ch(t.d))r.push(D.efN)
else r.push(new B.nl(D.bfW,B.N_(new B.nV(new C.czk(t),J.a9(t.d),!0,!0,!0,0,B.rf(),s),D.aVb),s))
r=B.uF(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.af,!1,r)}return B.cg(q,D.aZ4,r,s,!1,!1,s,s)}}
C.Wl.prototype={
S(){return new C.aus(B.a([],x.bx))},
RW(d){return this.d.$1(d)}}
C.aBD.prototype={}
C.aus.prototype={
aVu(d,e,f){var w=$.as(),v=new B.ao(new B.bb(d,A.aY,A.aL),w),u=this.gaSX()
v.aJ(0,u)
w=new B.ao(new B.bb(e,A.aY,A.aL),w)
w.aJ(0,u)
return new C.aBD(v,w,f)},
CI(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cW(A.q9,new C.cyr(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.as()
u=new B.ao(new B.bb(w.a,A.aY,A.aL),v)
t=m.gaSX()
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
r.push(new C.aBD(o,n,p.c))}if(r.length===0)r.push(m.aVu("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goq()
q=r.a
q.RW(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.as()
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
t.push(new F.m_(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qG(n,w,v,t,u)},
zE(){var w=0,v=B.j(x.H),u=this,t
var $async$zE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goq()
t=u.a
w=2
return B.b(t.RW(t.c),$async$zE)
case 2:return B.h(null,v)}})
return B.i($async$zE,v)},
bXf(){this.n(new C.cyq(this))
this.CI()},
aRZ(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.cyt(w,d,v))
w.CI()},
bXg(d,e){var w=A.d.cu(this.w,e)
this.n(new C.cyB())
this.CI()
$.aS.x1$.push(new C.cyC(w))},
Oy(d){return this.c99(d)},
c99(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kA(80,1400,A.er),$async$Oy)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Oy)
case 8:p=f
o=q.b.toLowerCase()
n=J.af6(o,".png")?"image/png":"image/jpeg"
r.n(new C.cyu(d,n,p))
r.CI()
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
return B.i($async$Oy,v)},
wG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h27(r,t.goq()),$async$wG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cys(t,s))
t.CI()
case 1:return B.h(u,v)}})
return B.i($async$wG,v)},
c9r(d){var w,v=this,u=null,t=F.ff7(d.c)
if(t==null)return new B.bE(A.a_,u,u,B.hg(D.brJ,D.eJz,new C.cyw(v,d),u),u)
w=x.p
return new B.B(A.cI,new B.am(A.W,u,A.a9,A.q,B.a([B.bw(B.m(12),B.fC(t,A.B,u,u,A.cj,A.bM,!0,140,!1,u,1/0),A.ap),B.an(u,B.A(B.a([v.aYv(A.k_,new C.cyx(v,d)),A.bp,v.aYv(A.cu,new C.cyy(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aYv(d,e){var w=null
return B.aD(!1,A.X,!0,w,B.aH(!1,w,!0,new B.B(A.hd,B.V(d,A.c,w,w,w,18),w),A.cD,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cD,w,w,A.ab)},
H9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$H9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zE(),$async$H9)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fGY(s,t.goq(),new C.cyA(t)),$async$H9)
case 4:case 1:return B.h(u,v)}})
return B.i($async$H9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eG(B.a([new B.B(A.qa,B.hg(D.bwk,D.eP9,n.gasC(),B.fn(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.ail,m,m,m,new C.cyD(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Ts,m,1,m,m,m,!1,m,!1,E.mo,m,m,m,!0,m,m,m,m,m,D.eKk,m,m,m,1,m,!0),j=An.aQO(O.kM,A.c,A9.SA,A.nr,D.eL0,n.gbXe()),i=B.m(18),h=n.gasB(),g=B.a([new B.aa(0,A.G,A.x.j(0.4),A.jl,12)],x.V)
g=B.aJ(m,B.p(m,new B.a7(92,142.1818181818182,B.eY(A.B,F.alj(n.goq()),A.h,A.dp),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.es,B.C(B.u(B.a([D.eVV,A.au,B.d(F.fFw(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.ezg,m,m,m),A.U,B.dj(E.ahC,E.aKG,h,B.bk(A.dC,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.Ts,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.T,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nE,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.T,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.P,w,A.P,B.aK(m,A.T,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aS],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b2(16,16)
u=new B.ay(O.kM.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bv5,m,m,m,v===0?m:new C.cyE(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bBa,m,m,m,v===r-1?m:new C.cyF(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.cyG(n,v)
p=new B.b2(12,12)
o=new B.b2(12,12)
g.push(B.p(m,B.u(B.a([new B.cD(A.b_,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.ezL,m,m,m,m,m,m,m,m,m),A.bc,s,q,B.aF(m,m,m,m,B.V(A.e4,A.nW,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aK(m,A.T,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.dZ(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b0(4,new B.by(p,p,p,p),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cb,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.c9r(i[v]),B.aK(m,A.T,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.dZ(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b0(4,new B.by(o,o,o,o),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mo,m,new B.c2(u,u,u,u),new B.by(w,w,w,w),m,m,A.n),m,m,new C.a63(h),A.e3,D.beC,m,m,m))}return B.nS(!0,B.cg(k,E.aai,B.cQ(g,m,D.bf2,m,m,A.af,!1),m,!1,!1,j,m),new C.cyH(n),x.C)}}
C.auu.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cM:E.mo,q=B.m(16),p=B.m(16),o=s?A.aH.j(0.08):A.c.j(0.04)
s=s?A.aH.j(0.16):A.dC.j(0.22)
w=B.m(12)
v=x.p
return new B.B(A.fh,B.aD(!1,A.X,!0,t,B.aH(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.C(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(u.e,t,t,t,t,t,t,D.aJm,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.el,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ab),t)}}
C.anp.prototype={
S(){return new C.aAu()}}
C.aAu.prototype={
Z(){this.a0()
this.Xc()},
bo(d){this.bz(d)
if(d.c!=this.a.c)this.Zt()},
Zt(){var w=0,v=B.j(x.H),u=this,t
var $async$Zt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$Zt)
case 2:u.d=null
if(u.c!=null)u.n(new C.dXb(u))
w=3
return B.b(u.Xc(),$async$Zt)
case 3:return B.h(null,v)}})
return B.i($async$Zt,v)},
Xc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.a9(n)===0){w=1
break}t=4
if(J.cT(n,"http://")||J.cT(n,"https://")||J.cT(n,"data:")){o=B.VZ(B.cp(n,0,null),new B.Nn(!0))
r.d=o}else{o=B.fb("unsupported video ref")
throw B.O(o)}w=7
return B.b(o.hW(0).cI(0,A.oT),$async$Xc)
case 7:if(r.c==null){w=1
break}r.d.rp(!1)
r.n(new C.dX9(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a4(m)
$.ak.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dXa(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xc,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
bZ8(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fS(0)
w.n(new C.dXc(w))}else{v.p5(0)
w.n(new C.dXd(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iS.j(0.92),D.Is.j(0.95)],x.O)
w=B.H(A.bQ.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pa,A.bQ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bQ(B.at(B.u(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),A.b6)}if(p.f)return B.at(B.V(A.agW,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aWD
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eY(A.B,new B.a7(r,q,new B.yX(s,o),o),A.q,A.bM)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.at(B.p(o,B.V(A.iZ,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.L(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bw(n,new B.am(A.W,o,A.aX,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gbZ7(),o,o,o,o,o,o,!1,A.ae)}}
C.wz.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.j8.prototype={}
C.aaL.prototype={
B(d){return B.p6(new C.dOA(this,B.K(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aaa.prototype={
B(d){var w,v,u=null,t=B.K(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iS.j(t?0.35:0.4),A.r,1),p=t?D.IT:A.c,o=x.V,n=B.a([new B.aa(0,A.G,A.x.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.H(A.bQ.j(0.5),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dG,6)],o)
w=this.c
o=B.C(B.p(u,new B.fT(0.5625,C.hGP(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.adN,u,u,u,u),1)
m=D.iS.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iS,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.X,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.dd,B.d(w.c,u,2,A.Z,u,u,u,B.l(u,u,t?A.aA:D.b4n,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c2(new B.ay(m,1,A.r,-1),A.V,A.V,A.V),u,u,u,A.n),u,u,u,u,D.aca,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ab)}}
C.wC.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nb.prototype={}
C.bf4.prototype={
TW(d){var w=null
return new B.bE(A.a_,w,w,B.FZ(A.B,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
buX(){return this.TW(1)},
at5(d){var w=null,v=B.m(8),u=B.H(A.hE,A.r,0.9)
return B.p(A.B,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8B,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.A(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b5,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.at5("TAARIFA ZA WANANDOA"),A.ar,w.buX(),A.dd,w.TW(0.9),A.dd,w.TW(0.7),A.P,w.at5("TAMKO LA MAKUBALIANO"),A.fV,w.TW(1),A.dd,w.TW(0.95),A.P,w.at5("MASHAHIDI"),A.bc,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.aaO.prototype={
B(d){return B.p6(new C.e1c(B.K(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acr.prototype={
B(d){var w,v,u,t,s,r=null,q=B.K(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.at.j(q?0.35:0.4),A.r,1),m=q?D.b41:A.c,l=x.V,k=B.a([new B.aa(0,A.G,A.x.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.H(A.at.j(0.5),A.r,1)
l=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dG,6)],l)
w=this.c
v=C.fG_(w.a)
if(v==null)v=A.d.gI(D.O2)
u=B.b6(v.f)
t=B.b6(v.r)
s=x.p
l=B.C(B.p(r,new B.fT(0.5625,new B.am(A.W,r,A.aX,A.q,B.a([B.bV(0,B.fC(C.fFZ(v.d),A.B,r,r,A.cj,A.bM,!0,r,!1,r,r),0,0,0),new B.B(A.acR,new C.bf4(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.adN,r,r,r,r),1)
j=A.at.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.IU,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.dd,B.d(w.c,r,2,A.Z,r,r,r,B.l(r,r,q?A.aA:D.aZw,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c2(new B.ay(j,1,A.r,-1),A.V,A.V,A.V),r,r,r,A.n),r,r,r,r,D.aca,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ab)}}
C.kB.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5x.prototype={}
C.TF.prototype={
S(){var w=$.as()
return new C.aAN(new B.cm(null,x.A),new B.ao(A.aq,w),new B.ao(A.aq,w),B.m5(0,null,null),A.d.gI(D.aq8),D.dks,B.a([],x.L),B.a([],x.gE))}}
C.aAN.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.ym(C.fiZ(v.y),"","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fhV().bA(new C.e4p(v),w)
$.tn().jQ(0,"assets/images/ngmy_logo.png").bA(new C.e4q(v),w).eQ(new C.e4r())},
p(){var w=this,v=w.e,u=$.as()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
adY(d){var w=null,v=this.c
if(v!=null)v.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
NU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kA(88,1600,A.er),$async$NU)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$NU)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.fnj(new B.pQ(p,1),n),$async$NU)
case 9:if(r.c!=null)r.n(new C.e45(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a4(l)
r.adY("Could not open that picture. "+B.t(o))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$NU,v)},
aaY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$aaY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.e4c(q))
t=4
q.a.toString
p=C.hLd()
m=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,q.e.a.a,m),$async$aaY)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4d(q,o))
r.push(6)
w=5
break
case 4:t=3
k=s.pop()
n=B.a4(k)
q.adY(B.t(n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4e(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaY,v)},
Xo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Xo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.a9(i)!==0)if(!q.Q){h=q.z
h=A.a.i(h.b).length===0&&h.f.length===0}if(h){w=1
break}q.n(new C.e47(q,i))
t=4
q.a.toString
p=C.hLc()
h=q.z
m=q.y
l=q.w
k=B.z(q.at,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Xo)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e48(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a4(g)
if(q.c!=null)q.n(new C.e49(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4a(q))
$.aS.x1$.push(new C.e4b(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xo,v)},
bZQ(d){this.n(new C.e46(this,d))},
CX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$CX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.Q){k=q.z
k=A.a.i(k.b).length===0&&k.f.length===0}else k=!0
if(k){w=1
break}q.n(new C.e43(q))
t=4
w=7
return B.b($.aS.gm3(),$async$CX)
case 7:w=8
return B.b(B.bK(A.nf,null,x.H),$async$CX)
case 8:k=$.aS.ae$.x.h(0,q.d)
p=k==null?null:k.gb3()
if(!(p instanceof B.q0))throw B.O("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gX(0).a),$async$CX)
case 9:o=e
w=10
return B.b(o.hk(A.fR),$async$CX)
case 10:n=e
if(n==null)throw B.O("Could not make the picture.")
w=11
return B.b(A3.adI(J.f6(A.dz.gaK(n)),"ngmy_news.png","image/png"),$async$CX)
case 11:m=e
q.adY(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
q.adY(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e44(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$CX,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.z,a1=!(A.a.i(a0.b).length===0&&a0.f.length===0)
a0=B.aF(d,d,d,d,A.kY,d,d,d,new C.e4i(a2),d,d,d,d,d,d)
w=x.p
v=B.a([],w)
if(e.ax.length!==0)v.push(B.aF(d,d,d,d,D.bwQ,d,d,d,new C.e4j(e),d,d,d,d,"Undo the last change",d))
v.push(B.aF(d,d,d,d,A.ob,d,d,d,a1?e.gaTN():d,d,d,d,d,"Download",d))
a0=B.eG(v,d,d,!0,!0,A.J9,d,1,!0,d,0,!1,d,!1,d,d,a0,d,!0,d,d,d,d,d,D.eal,d,d,d,1,d,!0)
v=x.V
u=B.a([new B.aa(0,A.G,A.x.j(0.6),A.eI,24)],v)
t=e.z
s=e.y
r=e.w
u=B.p(d,new B.fT(0.7142857142857143,B.eY(A.B,new B.ep(new C.aXZ(t,s,r,e.x,d),e.d),A.h,A.dp),d),A.h,d,d,new B.o(d,d,d,d,u,d,A.n),d,d,d,d,d,d,d,d)
s=B.d("1  YOUR PICTURE",d,d,d,d,d,d,D.a42,d,d,d)
t=e.Q?d:e.gbZP()
t=B.a([B.C(B.dj(D.bxz,B.d(r==null?"Add a picture":"Change the picture",d,d,d,d,d,d,A.cb,d,d,d),t,B.bk(D.rf,d,d,d,A.c,A.fU,d,d,new B.b4(B.m(14),N.vC),d,d,d)),1)],w)
r=e.w
if(r!=null)A.d.v(t,B.a([A.av,B.bw(B.m(10),B.fC(r,A.B,d,d,A.cj,A.bM,!1,48,!1,d,48),A.ap)],w))
t=B.A(t,A.m,d,A.e,A.j,0,d,d)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",d,d,d,d,d,d,D.a42,d,d,d)
q=B.aK(d,A.T,!1,d,!0,A.q,d,B.aL(),e.e,d,d,d,d,d,2,e.aNp("Leave it empty and the AI picks a story about NGMY"),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,3,1,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.di,!0,A.a5,d,A.am,d,d,d,d)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cRf[o]
p.push(B.mY(d,D.rf,new B.w(n.a,d,A.os,d,d,d,d,d,d,d,d,d),A.hj,new C.e4k(e,n),d,N.vC,d))}p=B.cd(A.bH,p,A.by,6,8)
m=B.d("3  PICK A DESIGN",d,d,d,d,d,d,D.a42,d,d,d)
l=B.a([],w)
for(o=0;o<8;++o)l.push(e.bDv(D.aq8[o]))
l=B.cQ(l,d,d,d,d,A.b_,!1)
k=e.Q?d:e.gbZS()
j=B.m(18)
v=B.a([new B.aa(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.B(A.cI,s,d),t,A.aB,new B.B(A.cI,r,d),q,A.P,p,A.aB,new B.B(A.cI,m,d),new B.a7(d,78,l,d),A.aS,B.aJ(d,B.p(A.B,B.A(B.a([D.bxt,A.aa,B.d(a1?"Write it again":"Write my newspaper",d,d,d,d,d,d,A.fJ,d,d,d)],w),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(d,d,d,j,v,G.t_,A.n),d,54,d,d,d,d,d,d),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,k,d,d,d,d,d,d,!1,A.ae)],w)
if(a1){u=B.a([A.dW,B.A(B.a([D.d4C,A.av,D.bkG],w),A.m,d,A.e,A.j,0,d,d),A.P],w)
for(t=e.at,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){i=t[o]
h=i.a==="you"
r=h?A.a7:A.a_
q=h?A.b0.j(0.35):D.rf
p=new B.b2(16,16)
g=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bE(r,d,d,B.p(d,new B.w(i.b,d,D.exj,d,d,d,d,d,d,d,d,d),A.h,d,N.So,new B.o(q,d,new B.c2(g,g,g,g),new B.by(p,p,p,p),d,d,A.n),d,d,d,A.cI,A.iD,d,d,d),d))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){f=D.cEX[o]
t.push(B.mY(d,D.rf,new B.w(f,d,A.H0,d,d,d,d,d,d,d,d,d),A.hj,new C.e4l(e,f),d,N.vC,d))}u.push(B.cd(A.bH,t,A.by,6,8))
u.push(A.U)
t=B.C(B.aK(d,A.T,!1,d,!0,A.q,d,B.aL(),e.f,d,d,d,d,d,2,e.aNp("Ask for a change, or ask a question\u2026"),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,4,1,d,!1,"\u2022",d,d,d,new C.e4m(e),d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.di,!0,A.a5,d,A.am,d,d,d,d),1)
s=e.Q?d:e.gbZR()
u.push(B.A(B.a([t,A.aa,B.G2(A.xg,s,B.oj(d,A.b0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d)],w),A.m,d,A.e,A.j,0,d,d))
u.push(A.aB)
t=e.Q?d:e.gaTN()
u.push(B.dj(A.ob,D.eQy,t,B.bk(A.dl,d,d,d,d,A.GN,d,d,new B.b4(B.m(16),A.V),d,d,d)))
A.d.v(v,u)}v=B.a([B.cQ(v,e.r,A.acE,d,d,A.af,!1)],w)
if(e.Q){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.iQ.j(0.5),A.r,1)
v.push(B.bV(0,B.ec(B.at(B.p(d,B.A(B.a([E.a3d,A.es,B.d(e.as,d,d,d,d,d,d,A.ir,d,d,d)],w),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(E.za,d,s,t,d,d,A.n),d,d,d,d,D.bhj,d,d,d),d,d,d),u,!0),0,0,0))}return B.cg(a0,A.J9,new B.am(A.W,d,A.a9,A.q,v,d),d,!1,!1,d,d)},
aNp(d){var w=null
return B.bn(w,new B.b0(4,B.m(14),A.V),w,A.eF,w,w,w,w,!0,w,w,w,w,w,w,D.rf,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Q.GV,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
bDv(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b6(d.d),p=s?A.bz:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.b6(d.r),t,t,t,5,t,A.lR,t,t,t,t),A.fV],x.p)
for(v=d.f,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.b6(v).j(0.5),t,t,t,2,t,D.bdF,t,t,t,t))
w.push(A.dd)
w.push(new B.B(A.jX,B.d(d.b,t,1,A.Z,t,t,t,B.l(t,t,B.b6(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aJ(t,B.p(t,B.u(w,A.m,t,A.b5,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kS,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e42(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.ym.prototype={
b60(d,e,f,g,h,i,j,k,l){var w=this,v=h==null?w.a:h,u=g==null?w.b:g,t=l==null?w.c:l,s=e==null?w.d:e,r=f==null?w.e:f,q=d==null?w.f:d,p=i==null?w.r:i,o=k==null?w.w:k
return new C.ym(v,u,t,s,r,q,p,o,j==null?w.x:j)},
cxe(d){var w=null
return this.b60(w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.D(["paper",w.a,"headline",w.b,"subhead",w.c,"byline",w.d,"caption",w.e,"body",w.f,"pullQuote",w.r,"sidebarTitle",w.w,"sidebarText",w.x],x.N,x.z)},
b3V(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="headline",k=new C.c6B(d),j=d.h(0,"body")
if(x.j.b(j)){w=B.a([],x.s)
for(v=J.aW(j);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof j=="string"&&A.a.i(j).length!==0){w=A.a.fv(j,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(w,new C.c6z(),B.S(w).k("I<1,n>")).bZ(0,new C.c6A())
t=B.z(w,w.$ti.k("E.E"))}else t=m
w=k.$1("paper")
w=J.a9(w==null?"":w)===0?m:k.$1("paper")
v=k.$1(l)
v=J.a9(v==null?"":v)===0?m:k.$1(l)
s=k.$1("subhead")
r=k.$1("byline")
r=J.a9(r==null?"":r)===0?m:k.$1("byline")
q=k.$1("caption")
p=t!=null&&t.length!==0?t:m
o=k.$1("pullQuote")
n=k.$1("sidebarTitle")
return this.b60(p,r,q,v,w,o,k.$1("sidebarText"),n,s)},
gE7(d){return this.e}}
C.tU.prototype={}
C.aXZ.prototype={
DQ(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b6(this.d.f):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b0F(d,e,f){return this.DQ(d,e,null,f,0,A.bi,A.cQ)},
awG(d,e,f,g){return this.DQ(d,e,null,f,0,A.bi,g)},
b0G(d,e,f,g){return this.DQ(d,e,null,f,0,g,A.cQ)},
a_K(d,e,f,g,h){return this.DQ(d,e,f,1.25,g,A.bi,h)},
cnU(d,e,f,g){return this.DQ(d,e,null,1.25,f,A.bi,g)},
b0H(d,e,f,g,h,i){return this.DQ(d,e,f,g,h,A.bi,i)},
cnV(d,e,f,g,h){return this.DQ(d,e,null,f,g,A.bi,h)},
cnW(d,e,f,g,h,i){return this.DQ(d,e,f,g,0,h,i)},
aTO(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.m8(new B.ey(d,u,u,A.cT,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.cn,new B.kb(1),u,u,h,u,A.cm,u)
v.K4(g)
if(!v.b.a.c.gazK())return w
w-=2}return j},
at9(d,e,f,g,h,i,j,k){return this.aTO(d,e,f,g,h,i,j,k,A.bi)},
av9(d,e,f){var w=null,v=d==null?B.b6(this.d.f):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
adM(d,e){return this.av9(null,d,e)},
cfQ(d,e){return this.av9(d,!1,e)},
aYD(d){return this.av9(null,!1,d)},
bUv(d){var w,v,u,t,s,r,q=this,p=null,o=q.d,n=new B.N(Date.now(),0,!1),m=B.b6(o.f),l=B.b6(o.r),k=A.a.i(q.c.a)
if(k.length===0)k="The NGMY Times"
w=A.o.ak(n.bv(B.bW(B.bv(n),1,1,0,0,0,0,0)).a,864e8)
v="VOL. "+C.hzb(Math.max(1,B.bv(n)-2021))+"  \xb7  NO. "+(w+1+3000)
u=q.a_K("Roboto",12,m,1.2,A.O)
w=o.w
t=o.x
if(w==="blackletter")s=q.at9(k,t,A.O,d,1,96,40,1)
else{r=w==="bar"?76:72
s=q.at9(k.toUpperCase(),t,A.O,d,1,r,32,1)}r=x.p
switch(w){case"bar":return B.u(B.a([B.p(p,B.A(B.a([B.C(B.d(k.toUpperCase(),p,1,A.eA,p,p,p,q.b0H(t,s*0.84,A.c,1,1,A.O),p,p,p),1)],r),A.m,p,A.e,A.j,0,p,p),A.h,l,p,p,p,p,p,p,U.Vf,p,p,p),A.P,B.A(B.a([B.d(C.fiY(n).toUpperCase(),p,p,p,p,p,p,u,p,p,p),B.d(v,p,p,p,p,p,p,u,p,p,p),B.d("FREE \xb7 NGMY.ORG",p,p,p,p,p,p,u,p,p,p)],r),A.m,p,A.hu,A.j,0,p,p),A.ar,q.adM(!0,3)],r),A.m,p,A.e,A.j,0,A.p)
case"split":return B.u(B.a([B.A(B.a([B.p(p,p,A.h,l,p,p,p,s*0.8,p,p,p,p,p,14),A.es,B.C(B.d(k,p,1,A.eA,p,p,p,q.awG(t,s*0.9,1,A.O),p,p,p),1)],r),A.m,p,A.e,A.j,0,p,p),A.U,B.A(B.a([B.d(C.fiY(n),p,p,p,p,p,p,q.a_K("Roboto",13,l,0.6,A.O),p,p,p),B.d(v,p,p,p,p,p,p,u,p,p,p)],r),A.m,p,A.hu,A.j,0,p,p),A.P,q.cfQ(l,3)],r),A.m,p,A.e,A.j,0,A.p)
case"blackletter":return B.u(B.a([B.A(B.a([B.d(v,p,p,p,p,p,p,u,p,p,p),B.d("PRICE: FREE \xb7 NGMY.ORG",p,p,p,p,p,p,u,p,p,p)],r),A.m,p,A.hu,A.j,0,p,p),A.au,q.adM(!0,1.4),A.U,B.d(k,p,1,p,p,p,p,q.awG(t,s,1,A.O),A.L,p,p),A.P,q.adM(!0,1.4),A.au,B.d(C.fiY(n).toUpperCase(),p,p,p,p,p,p,u,A.L,p,p),A.au,q.aYD(3)],r),A.m,p,A.e,A.j,0,A.p)
default:return B.u(B.a([B.d(k.toUpperCase(),p,1,p,p,p,p,q.cnV(t,s,1,3,A.O),A.L,p,p),A.P,q.adM(!0,1.2),A.au,B.A(B.a([B.d(C.fiY(n).toUpperCase(),p,p,p,p,p,p,u,p,p,p),B.d(v,p,p,p,p,p,p,u,p,p,p),B.d("NGMY.ORG",p,p,p,p,p,p,u,p,p,p)],r),A.m,p,A.hu,A.j,0,p,p),A.au,q.aYD(3)],r),A.m,p,A.e,A.j,0,A.p)}},
B(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="Roboto",b1=a8.d,b2=b1.f,b3=B.b6(b2),b4=b1.r,b5=B.b6(b4),b6=a8.c,b7=A.a.i(b6.b)
if(b7.length===0)b7="YOUR HEADLINE APPEARS HERE"
w=b1.y
if(w!=="NgmyAbril"){v=b1.a
u=v==="gazette"||v==="chronicle"}else u=!0
t=u&&b1.a!=="times"?b7.toUpperCase():b7
s=a8.at9(t,w,A.O,824,2,78,34,1.02)
v=b6.c
r=b1.z
q=a8.aTO(v,r,A.cQ,824,2,24,16,1.2,A.cJ)
p=a8.e
o=p==null
n=o?330:360
m=b1.ax
l=m-1
k=(824-22*l)/m
j=A.a.i(b6.x).length!==0||A.a.i(b6.r).length!==0
i=j?150:0
h=b6.f
if(h.length===0)h=B.a(["Your story appears here. Add a picture, then ask the AI to write it."],x.s)
for(g=A.d.aG(h," ").length-m*2,f=18,e=A.T;f>=10.5;f-=0.5){d=B.b6(b2)
e=C.hJR(h,new B.F(!0,d,a9,r,a9,a9,f,A.cQ,A.bi,0,a9,a9,1.28,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),k,335,m,i)
d=A.d.aG(e," ")
a0=B.ad("\\s+",!0,!1,!1,!1)
if(B.aI(d,a0," ").length>=g)break}a1=a8.b0F(r,f,1.28)
a2=new C.c6C(a8,k,i,b3,b5,b1)
g=b1.d
d=x.O
a0=x.p
a3=B.a([B.bV(0,B.bQ(a9,new B.o(a9,a9,a9,a9,a9,new B.a8(A.ax,A.aE,A.w,B.a([B.b6(g),B.b6(b1.e)],d),a9,a9),A.n),A.b6),0,0,0)],a0)
a4=b1.as
if(a4)a3.push(B.bV(0,B.b1(a9,a9,a9,new C.b4W(B.b6(b2),a9),A.as),0,0,0))
w=B.a([a8.bUv(824),A.aB,B.d(t,a9,2,A.Z,a9,a9,a9,a8.awG(w,s,1.02,A.O),A.L,a9,a9)],a0)
v=A.a.i(v)
if(v.length!==0)A.d.v(w,B.a([A.P,B.d(v,a9,2,A.Z,a9,a9,a9,a8.b0G(r,q,1.2,A.cJ),A.L,a9,a9)],a0))
w.push(A.P)
w.push(B.A(B.a([B.C(B.p(a9,a9,A.h,b3,a9,a9,a9,1.2,a9,a9,a9,a9,a9,a9),1),new B.B(A.id,B.d(A.a.i(b6.d).toUpperCase(),a9,a9,a9,a9,a9,a9,a8.a_K(b0,12,b5,1.4,A.I),a9,a9,a9),a9),B.C(B.p(a9,a9,A.h,b3,a9,a9,a9,1.2,a9,a9,a9,a9,a9,a9),1)],a0),A.m,a9,A.e,A.j,0,a9,a9))
w.push(A.ac)
a5=B.b6(b4)
if(!o){a6=B.fC(p,A.B,a9,a9,A.cj,A.bM,!0,n,!1,a9,824)
b4=b1.at
if(b4==="bw")a6=new B.Fv(D.bjU,a6,a9)
if(b4==="sepia")a6=new B.Fv(D.bjT,a6,a9)}else{b4=B.b6(b2).j(0.08)
a6=B.p(a9,B.at(B.V(A.wI,B.b6(b2).j(0.35),a9,a9,a9,64),a9,a9,a9),A.h,b4,a9,a9,a9,n,a9,a9,a9,a9,a9,824)}b2=B.H(B.b6(b2),A.r,2.4)
b4=B.a([a6],a0)
if(a4)b4.push(B.bQ(a9,new B.o(a9,a9,a9,a9,a9,new B.bR(A.B,0.95,A.w,a9,0,B.a([A.K,A.IK.j(0.38)],d),a9,a9),A.n),A.b6))
b4.push(B.an(a9,B.p(a9,a9,A.h,a5.j(0),a9,a9,a9,n,a9,a9,a9,a9,a9,8),a9,a9,0,a9,0,a9))
w.push(B.p(a9,B.jk(new B.am(A.W,a9,A.aX,A.q,b4,a9),A.q,a9),A.h,a9,a9,new B.o(a9,a9,b2,a9,a9,a9,A.n),a9,n,a9,a9,A.ei,a9,a9,824))
b2=A.a.i(b6.e)
if(b2.length!==0)A.d.v(w,B.a([A.ar,B.d(b2,a9,2,A.Z,a9,a9,a9,a8.b0G(r,13.5,1.2,A.cJ),A.L,a9,a9)],a0))
w.push(A.ac)
b2=B.a([],a0)
for(a7=0;a7<m;++a7){b4=B.a([],a0)
if(a7>0)b4.push(new B.B(D.bjD,B.p(a9,a9,A.h,b3.j(0.5),a9,a9,a9,a9,a9,a9,a9,a9,a9,1),a9))
b6=B.a([new B.bG(1,A.bq,new B.w(e.length>a7?e[a7]:"",a9,a1,a9,A.v5,a9,a9,a9,a9,a9,a9,a9),a9)],a0)
if(j&&a7===l)b6.push(a2.$0())
b4.push(new B.a7(k,a9,B.u(b6,A.F,a9,A.e,A.j,0,A.p),a9))
A.d.v(b2,b4)}w.push(new B.a7(a9,335,B.A(b2,A.F,a9,A.e,A.j,0,a9,a9),a9))
w.push(A.bc)
w.push(B.p(a9,a9,A.h,b3,a9,a9,a9,1.4,a9,a9,a9,a9,a9,a9))
w.push(A.fV)
w.push(B.A(B.a([B.d("PRINTED WITH NGMY NEWS",a9,a9,a9,a9,a9,a9,a8.cnU(b0,11,1.4,A.I),a9,a9,a9),B.d("CREATED BY NGMY.ORG",a9,a9,a9,a9,a9,a9,a8.a_K(b0,11,b5,1.4,A.u),a9,a9,a9)],a0),A.m,a9,A.hu,A.j,0,a9,a9))
a3.push(new B.B(D.bij,B.u(w,A.al,a9,A.e,A.j,0,A.p),a9))
a3.push(B.bV(0,B.e8(B.b1(a9,a9,a9,new C.bn6(b3.j(b1.ay?0.07:0.06),a9),A.as),!0,a9),0,0,0))
b2=B.b6(g).j(0.7)
b4=B.H(b3.j(0.5),A.r,1.2)
b6=B.m(40)
a0=B.a([],a0)
w=a8.f
if(w!=null)a0.push(B.hT(B.fC(w,A.B,a9,a9,A.cj,A.bM,!1,30,!1,a9,30),A.ap))
else a0.push(B.V(A.mD,b3,a9,a9,a9,28))
a0.push(A.aa)
a0.push(B.d("NGMY.ORG",a9,a9,a9,a9,a9,a9,a8.b0H(b0,15,b3,1,1.6,A.u),a9,a9,a9))
a3.push(B.an(52,B.e8(B.d5(B.p(a9,B.A(a0,A.m,a9,A.e,A.R,0,a9,a9),A.h,a9,a9,new B.o(b2,a9,b4,b6,a9,a9,A.n),a9,a9,a9,a9,D.bjk,a9,a9,a9),0.55),!0,a9),a9,a9,a9,40,a9,a9))
return new B.a7(900,1260,B.jk(new B.am(A.W,a9,A.a9,A.q,a3,a9),A.q,a9),a9)}}
C.b4W.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=new B.f8()
j.e0(7)
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
w.saw(new B.bR(A.B,0.5,A.w,k,0,B.a([A.It.j(0.13),A.K],v),k,k).aA(0,B.c0(new B.v(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.saw(k)
w.r=A.IK.j(0.1).gt(0)
s=t/2-1.5
u=0+u
d.bp(new B.af(0,s,u,s+3),w)
l=new B.af(0,0,u,0+t)
$.a1()
t=B.U()
t.saw(new B.bR(A.B,0.85,A.w,k,0,B.a([A.K,D.aZR.j(0.3)],v),D.aqq,k).aA(0,l))
d.bp(l,t)},
ao(d){return!1}}
C.bn6.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.jf(u,u,u,u,B.ds(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.cn,u,A.eS,A.cm)
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
C.YE.prototype={
S(){var w=$.as(),v=x.A
return new C.aC7(new B.ao(A.aq,w),new B.ao(new B.bb("NGMY",A.aY,A.aL),w),new B.cm(null,v),new B.cm(null,v),A.d.gI(D.a_v),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.r),A.L)}}
C.o2.prototype={}
C.aC7.prototype={
gaQ5(){var w,v,u=this
if(u.p1)w=new B.xR(1,u.p2,0.9,u.p3).iQ().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aS.x1$.push(new C.eBT(w))},
p(){var w=this.d,v=$.as()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tn().jQ(0,"assets/images/ngmy_logo.png"),$async$Wb)
case 7:q=e
p=J.f6(J.xC(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.fnj(new B.pQ(p,1),o),$async$Wb)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eAL(r,p))
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
return B.i($async$Wb,v)},
NX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kA(92,1800,A.er),$async$NX)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$NX)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.fnj(new B.pQ(p,1),n),$async$NX)
case 9:if(r.c==null){w=1
break}r.n(new C.eB8(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a4(l)
n=r.c
if(n!=null)n.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$NX,v)},
aY7(){var w=this
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
aRC(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvo(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cTt)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvo(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvo(C.fE9(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvo(C.fE9(1-a0*0.5,n,n,n),w)}return a1?C.bvo(C.fE9(-1,255,255,255),w):w},
awF(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).kr(0,this.d.a.a),t=B.z(u,B.a2(u).k("E.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.ya(u,v,w)
this.dx.pt(new C.eBi(t),!0)
return t},
b_B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.awF()
w=C.hIW(e.d.a.a,e.db)
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
return C.hFv(d,k,v,a0,j,e.gaQ5(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cl5(){return this.b_B(null)},
BU(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$BU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aS.gm3(),$async$BU)
case 3:w=4
return B.b(B.bK(A.eU,null,x.H),$async$BU)
case 4:w=5
return B.b($.aS.gm3(),$async$BU)
case 5:s=$.aS.ae$.x.h(0,t.r)
r=s==null?null:s.gb3()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gX(0).a),$async$BU)
case 7:w=6
return B.b(e.hk(A.fR),$async$BU)
case 6:q=e
u=q==null?null:J.f6(A.dz.gaK(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$BU,v)},
a7d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eAu(q))
t=4
w=7
return B.b(q.BU(),$async$a7d)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cL.gcq().aE(p)
n=C.Ak(null,null,null,null,D.nx,6,!1,null,null,null,null,null,C.cx(),null,!1,null,"NGMY Quote",null,null,B.a([q.b_B(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).K(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a4(j)
l=q.c
if(l!=null)l.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eAv(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7d,v)},
zm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eAs(q))
t=4
w=7
return B.b($.aS.gm3(),$async$zm)
case 7:w=8
return B.b(B.bK(A.o_,null,x.H),$async$zm)
case 8:w=9
return B.b($.aS.gm3(),$async$zm)
case 9:k=$.aS.ae$.x.h(0,q.f)
p=k==null?null:k.gb3()
if(!(p instanceof B.q0))throw B.O("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gX(0).a),$async$zm)
case 10:o=e
w=11
return B.b(o.hk(A.fR),$async$zm)
case 11:n=e
if(n==null)throw B.O("Could not make the picture.")
w=12
return B.b(A3.adI(J.f6(A.dz.gaK(n)),"ngmy_quote.png","image/png"),$async$zm)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.E(x.q).f
k.P(B.aZ(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
k=q.c
if(k!=null)k.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eAt(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zm,v)},
c8B(){var w=this.p4
w.toString
return B.co(new C.eB1(this,w))},
aTV(d,e){var w=null
return B.bn(w,w,w,w,w,D.es9,w,w,!0,new B.b0(4,B.m(16),N.vC),w,w,w,w,w,D.rf,!0,w,w,w,w,new B.b0(4,B.m(16),D.aPy),w,w,w,w,w,w,w,w,Z.BG,e,w,w,w,w,w,w,w,D.exa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wM(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b0,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aJT,w,w,w))
return new B.B(D.bdl,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aTU(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.X,!0,w,d,A.h,w,0,w,w,w,w,w,A.jg),A.h,w,w,new B.o(D.rf,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uH(d){return this.aTU(d,A.bC)},
nw(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t_:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j8,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j8,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.de(r,B.A(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hG,r,r,r,A.Dq,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
acL(d,e,f){return this.nw(d,null,e,f)},
atd(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b0.j(0.28):A.c.j(0.05),t=g?A.eM:A.bG,s=x.p
v=B.a([B.de(w,d,w,w,A.b8,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hG,w,e,w,new B.L(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.Z,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a7(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aTY(d,e,f,g,h,i){return this.atd(d,e,f,g,h,5,i)},
jI(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.C(B.d(d,u,u,u,u,u,u,D.epg,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dLG,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eBe(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJ3,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VD,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.as8(w).cyA(A.b0,A.bG,A.b0.j(0.2),A.c,D.e9H,4)
return new B.B(A.wf,B.u(B.a([s,B.a7z(B.ms(u,u,u,g,f,new C.eBf(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aeL(d,e,f,g,h,i){return this.jI(d,e,f,g,h,null,i)},
afa(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.b6(u)
r=d==u
q=r?A.c:A.be
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.brl:o
n.push(B.aJ(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eBh(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.cd(A.bH,n,A.by,10,10)},
bDu(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_v
else{v=x.a8
w=B.z(new B.a3(D.a_v,new C.eAk(o),v),v.k("E.E"))}v=B.aK(n,A.T,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aTV("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eAl(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4d,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.T,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aTV("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eAm(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.am,n,n,n,n)
t=o.wM("DESIGNS",A.rO)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cxd[q]
r.push(new B.B(A.kS,o.acL(p,o.x===p,new C.eAn(o,p)),n))}return B.u(B.a([v,A.U,u,t,B.cf(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.b_),A.ac,new B.a7(n,118,B.hF(n,new C.eAo(o,w),w.length,n,n,A.b_,new C.eAp(),!1),n),A.P,o.aTU(B.u(B.a([B.iu(A.b0,n,n,A.ag,!0,new C.eAq(o),n,D.eIj,n,D.eF2,o.k3),B.iu(A.b0,n,n,A.ag,!0,new C.eAr(o),n,n,n,D.eCr,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acD)],s),A.F,n,A.e,A.j,0,A.p)},
ctf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.awF()
if(a7.length===0)return a5.uH(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.H7,a6,a6,a6))
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
m=B.z(u,B.a2(u).k("cj.E"))
A.d.fu(m)
l=m.length!==0&&A.d.e7(m,new C.eBI(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eBP(a5)
j=new C.eBR()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.H7,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b2(11,11)
f=u.q(0,h)?A.b0.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eM:A.bG
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a1
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.by(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.K3,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eBJ(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uH(B.cd(A.bH,o,A.tG,6,6))
i=B.a([a5.nw("All words",K.agE,!1,new C.eBK(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.acL("Sentence "+a3,!1,new C.eBL(a5,a7,v,a2)))
a2=a3}}i.push(a5.acL("Clear picks",!1,new C.eBM(a5)))
i=B.cd(A.bH,i,A.by,8,8)
g=a5.wM("SIZE OF THE PICKED WORDS",D.ag5)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cYn[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eBN(e,k)
f.push(a5.acL(a0.b,l===a4,e))}return B.u(B.a([q,A.U,o,A.U,i,g,B.cd(A.bH,f,A.by,8,8),A.U,a5.nw("Make every word normal",A.mE,!1,new C.eBO(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
coD(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bkk,B.d(A.d.kU(D.ar8,new C.eBr(q)).b,p,p,p,p,p,p,D.eqL,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.co(new C.eBs(q)),l=q.wM("HIGHLIGHT BEHIND THE WORDS",A.Xt),k=q.p1?-1:q.k4
k=q.afa(k,new C.eBt(q),D.cGJ)
w=q.p1
v=w?A.c:A.be
n=B.a([n,A.U,m,l,B.cd(A.bH,B.a([k,B.aJ(p,B.p(p,D.buk,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.ekY,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBw(q),p,p,p,p,p,p,!1,A.ae)],o),A.tG,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.H7,p,p,p)],o)
if(q.gaQ5()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aeL("Colour",l,0,360,new C.eBx(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aeL("Shade",k,0.15,0.9,new C.eBy(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jI("Strength",l,0.15,1,new C.eBz(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.U,q.uH(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wM("LOOK",A.Ae))
m=B.a([q.nw("Bold",I.ag2,q.fy,new C.eBA(q)),q.nw("Italic",I.ag3,q.go,new C.eBB(q))],o)
for(u=0;u<3;++u){l={}
k=D.cyi[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t_:p
w=w?p:A.c.j(0.07)
s=new B.b2(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.by(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBC(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.cd(A.bH,m,A.tG,8,8))
n.push(q.wM("COLOUR",A.np))
n.push(q.afa(q.fx,new C.eBD(q),D.cQK))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.H7,p,p,p))
n.push(q.wM("SIZE AND PLACE",A.Ek))
m=q.fr
m=q.jI("Text size",m,0.5,1.6,new C.eBu(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uH(B.u(B.a([m,q.jI("Up / down",l,0.12,0.5,new C.eBv(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
c8C(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b0.j(0.6),A.r,1.6)
u=B.a([A.b0.j(0.18),A.bz.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bzu,A.h,p,p,D.aSo,p,62,p,p,p,p,p,62),A.aB,D.eG9,A.ar,D.eKi],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rf,p,v,w,p,new B.a8(A.a_,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bgu,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaTX(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fC(o,A.B,120,p,A.cj,A.bM,!1,p,!1,p,p),p),A.ap),A.bb,B.C(B.u(B.a([D.eFK,A.P,B.cd(A.bH,B.a([q.nw("Change",A.k_,!1,q.gaTX()),q.nw("Remove",A.e4,!1,new C.eB5(q))],w),A.by,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cNz[t]
u.push(q.nw(s.b,s.a,q.at===t,new C.eB6(q,t)))}u=B.cd(A.bH,u,A.by,8,8)
r=q.at
A:{if(0===r){s=q.bTy(o)
break A}if(1===r){s=q.bSD()
break A}if(2===r){s=q.bzq()
break A}if(3===r){s=q.bFw()
break A}s=q.bBt()
break A}return B.u(B.a([v,A.ac,u,A.aB,s,A.U,new B.bE(A.a_,p,p,q.nw("Reset the whole picture",A.mE,!1,new C.eB7(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bTy(d){var w=this,v=x.p
return B.u(B.a([B.cd(A.bH,B.a([w.nw("Auto enhance",E.X4,!1,new C.eAY(w)),w.nw("Make words easy to read",A.o9,!1,new C.eAZ(w))],v),A.by,8,8),A.aB,B.co(new C.eB_(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bSD(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jI("Exposure",n,-1.5,1.5,new C.eAC(o),0,A.k.ab(n,1))
w=o.RG
w=o.jI("Brightness",w,-0.5,0.5,new C.eAD(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jI("Contrast",v,0.4,2,new C.eAE(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jI("Fade",u,0,1,new C.eAF(o),0,""+A.k.U(u*100))
t=o.av
t=o.jI("Spotlight",t,0,1,new C.eAG(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jI("Darken",s,0,0.85,new C.eAH(o),0,""+A.k.U(s*100))
r=o.aZ
r=o.jI("Vignette",r,0,0.9,new C.eAI(o),0,""+A.k.U(r*100))
q=o.aB
q=o.jI("Shade behind words",q,0,0.85,new C.eAJ(o),0,""+A.k.U(q*100))
p=o.aL
return o.uH(B.u(B.a([n,w,v,u,t,s,r,q,o.jI("Shade top & bottom",p,0,0.85,new C.eAK(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bzq(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jI("Colour strength",q,0,2.2,new C.ezY(s),1,""+A.k.U(q*100))
w=s.to
w=s.jI("Warmth",w,-1,1,new C.ezZ(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jI("Tint",v,-1,1,new C.eA_(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uH(B.u(B.a([q,w,v,s.jI("Shift colours",u,-180,180,new C.eA0(s),0,""+A.k.U(u)+"\xb0"),new B.bE(A.a_,r,r,s.nw("Negative",D.bpk,s.y1,new C.eA1(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wM("COLOUR WASH",A.KZ)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.apT)
t=B.a([u,v,s.afa(w,new C.eA2(s),q),A.P],t)
if(s.b_!=null){q=s.aS
t.push(s.uH(s.aeL("Wash strength",q,0,0.9,new C.eA3(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bFw(){var w,v,u,t,s,r=this,q=r.y2
q=r.jI("Blur",q,0,24,new C.eAw(r),0,A.o.u(A.k.U(q)))
w=r.bn
w=r.jI("Soft focus",w,0,1,new C.eAx(r),0,""+A.k.U(w*100))
v=r.au
u=x.p
v=r.uH(B.u(B.a([q,w,r.jI("Film grain",v,0,1,new C.eAy(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wM("LIGHT LEAK",H.ag0)
q=r.b7
t=B.a([null],x.Z)
s=x.r
A.d.v(t,B.dg(D.apT,0,B.dL(8,"count",s),s))
u=B.a([v,w,r.afa(q,new C.eAz(r),t),A.P],u)
if(r.b7!=null){q=r.bE
u.push(r.uH(r.aeL("Leak strength",q,0,1,new C.eAA(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bBt(){var w,v,u,t,s=this,r=s.aQ
r=s.jI("Zoom",r,1,3,new C.eA7(s),1,""+A.k.U(r*100)+"%")
w=s.bf
w=s.jI("Left / right",w,-1,1,new C.eA8(s),0,""+A.k.U(w*100))
v=s.bO
v=s.jI("Up / down",v,-1,1,new C.eA9(s),0,""+A.k.U(v*100))
u=s.c9
t=x.p
return B.u(B.a([s.uH(B.u(B.a([r,w,v,s.jI("Turn",u,-180,180,new C.eAa(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.U,B.cd(A.bH,B.a([s.nw("Turn 90\xb0",D.bqW,!1,new C.eAb(s)),s.nw("Flip sideways",A.Eb,s.dd,new C.eAc(s)),s.nw("Flip upside down",A.Eb,s.cS,new C.eAd(s))],t),A.by,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bWb(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.e9U,A.U,D.eHp,A.aB,B.aJ(w,B.p(A.B,D.ea4,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t_,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eB0(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rf,w,u,v,w,w,A.n),w,w,w,w,A.c1,w,w,w)},
bTq(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eAT(p),m=x.p,l=B.A(B.a([D.bkq,p.nw("Reset",A.mE,!1,new C.eAP(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.H7,o,o,o),j=p.wM("SHAPE",A.ah6),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.At[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aTY(n.$2(t,p.cy),62,u.b,s===t,new C.eAQ(v,p),62))}}i=B.cd(A.bH,i,A.by,8,8)
v=p.wM("RING",A.rK)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ao[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aTY(n.$2(p.cx,t),62,r.b,q===t,new C.eAR(s,p),62))}u=B.cd(A.bH,u,A.by,8,8)
s=p.CW
return B.u(B.a([l,A.au,k,j,i,v,u,A.ac,p.uH(p.jI("Size",s,0.12,0.4,new C.eAS(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aWL(d){return new B.a7(null,d,new B.fT(0.5625,B.co(new C.eBb(this)),null),null)},
cnX(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t_:q
t=new B.b2(14,14)
s=D.cPt[w]
r=v?A.c:A.aA
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bG(1,A.bq,B.aJ(A.c5,B.de(q,B.u(B.a([r,A.dd,new B.pK(A.e8,A.B,A.h,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.by(t,t,t,t),q,u,A.n),D.bcg,q,q,q,A.hr,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBk(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bel,A.nk,q,q,q)},
aL9(){var w,v,u=this,t=null,s=u.cnX(),r=u.as
A:{if(0===r){w=u.bDu()
break A}if(1===r){w=u.ctf()
break A}if(2===r){w=u.coD()
break A}if(3===r){w=u.c8C()
break A}if(4===r){w=u.bTq()
break A}w=u.bWb()
break A}v=x.p
return B.bw(A.pJ,B.ec(B.u(B.a([s,B.C(B.cQ(B.a([w],v),t,D.bfk,t,t,A.af,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.a9C,!0),A.ap)},
aHs(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc_i(),p=B.m(16)
q=B.C(B.aJ(r,B.p(r,D.ead,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.be,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbF7()
w=B.m(16)
v=B.a([new B.aa(0,A.G,A.bz.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eeI)
else t.push(D.btr)
t.push(A.aa)
t.push(D.blO)
return B.p(r,B.A(B.a([q,A.av,B.C(B.aJ(r,B.p(r,B.A(t,A.m,r,A.b5,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t_,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aRz,r,r,r,r,G.acr,r,r,r)},
aTW(){var w=null
return new B.B(T.Vz,B.A(B.a([B.aF(w,w,w,w,A.mG,w,w,w,new C.eAB(this),w,w,w,w,w,w),D.eVw,A.bc,D.bBI],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cg(w,A.J9,B.br(!0,B.co(new C.eBS(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bbm.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f8()
m.e0(7)
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
C.qP.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lG.prototype={}
C.yo.prototype={
ad(){var w=this
return B.D(["at",w.a.a4().aa(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nf.prototype={}
C.v5.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5F.prototype={}
C.aoa.prototype={}
C.Z8.prototype={
S(){return new C.aE1(new B.ao(A.aq,$.as()),B.k5(!0,null,!0,!0,null,null,!1),D.ddb,B.a([],x.s),B.eM([D.G0],x.Q))}}
C.aE1.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.f.p()
this.a2()},
YF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$YF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().AS(90,700,700,A.er),$async$YF)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$YF)
case 8:p=e
if(r.c!=null)r.n(new C.eHN(r,p,q))
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
return B.i($async$YF,v)},
YI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$YI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hP().aCP(78,n,1100,1100),$async$YI)
case 7:q=e
if(J.ch(q)){w=1
break}p=B.bi(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.a9(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$YI)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c5(l,".png"))k="image/png"
else k=A.a.c5(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cL.gcq().aE(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eHO(r,p))
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
return B.i($async$YI,v)},
aYJ(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fC(A.cw.aE(A.d.gai(d.split(","))),A.B,u,u,A.cj,A.bM,!0,u,!1,u,u)
return w}catch(v){}return D.bbi},
bTw(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cjL(C.fgn(w,this.aYJ(d),f),g)},
a9t(d,e,f,g,h){var w=null,v=new C.eHL(f,e),u=new C.eHM(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b0.j(0.6),A.r,1)
if(p)p=new B.a7(34,30,new B.am(A.W,w,A.a9,A.h,B.a([B.at(B.V(f?A.En:A.KM,A.c2,w,w,w,26),w,w,w),D.dQ2],x.p),w),w)
else p=this.bTw(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.p(w,B.A(B.a([B.C(B.at(p,w,w,w),1),D.bt7],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHK(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ab)},
aRI(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bw(B.m(8),B.fC(A.cw.aE(A.d.gai(h.split(","))),A.B,p,p,A.cj,A.bM,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.bs.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eZ,p,p,p,20):q
n=B.a([n,A.aa,B.C(B.d(e,p,1,A.Z,p,p,p,A.a4i,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yn,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ab)},
a5M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a5M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fjM(),$async$a5M)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eHt(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a4(n)
if(r.c!=null)r.n(new C.eHu(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5M,v)},
ab5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ab5=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eHw(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eHx(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eHy(r))
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
return B.b(C.ff5(q,r.cx,j,new C.aYn(r.z,r.Q,r.as,r.at),new C.eHz(r),i,m,p,k),$async$ab5)
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
if(p!=null)B.a6(p,!1).K(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a4(e)
if(r.c!=null)r.n(new C.eHA(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.em,g).w
g=B.aG(d,A.bN,g).w
w=B.at(B.p(h,h,A.h,h,h,new B.o(A.be,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aJ(h,B.p(h,D.bwf,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.aa(2,A.G,A.bs.j(0.5),A.J,24)],v),D.bEO,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eI0(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yn,h,h,h,i.ax?h:new C.eI1(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbuE()
v=B.a([new B.aa(0,A.G,A.b0.j(0.45),A.J,10)],v)
s.push(B.hJ(B.aD(!1,A.X,!0,h,B.aH(!1,h,!0,B.p(h,B.V(i.e==null?A.up:A.hs,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uH,A.a6),h,40,h,h,h,h,h,40),A.cD,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cD,h,h,A.ab),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.T,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b0(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b0(4,B.m(16),D.aP5),h,h,h,h,h,h,h,h,Q.GV,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.B(A.kS,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ad,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJo,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eI2(i)
s=i.aRI(A.kW,q,r,i.gc92(),s)
r=i.z
r=B.C(i.a9t(new C.eI4(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.C(B.u(B.a([s,A.ar,B.A(B.a([r,A.bp,B.C(i.a9t(new C.eI5(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eI6(i)
s=i.aRI(A.um,r,p,i.gc9a(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.C(i.a9t(new C.eI7(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.eLr,A.au,D.eO8,A.bv,u,A.P,D.eME,A.aB,v,A.bv,B.A(B.a([q,A.av,B.C(B.u(B.a([s,A.ar,B.A(B.a([p,A.bp,B.C(i.a9t(new C.eI8(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.ePL],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b52,A.r,1)
w=C.aee(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.U,new B.bE(A.a_,h,h,B.p(h,B.A(B.a([D.bxk,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.evX,h,h,h),B.aH(!1,h,!0,D.dLU,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eI9(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_e,h,u,v,h,h,A.n),h,h,h,h,D.be_,h,h,h),h)],t))}o.push(A.bv)
o.push(D.eD8)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cIF[m]
v=i.ch===l?A.b0:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bG(1,A.bq,new B.B(A.jX,B.aJ(h,B.de(A.B,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eIa(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.eTT)
o.push(A.P)
o.push(B.co(new C.eIb(i)))
o.push(A.bv)
o.push(D.eJJ)
o.push(A.P)
w=B.a([i.b0o("auto","Let AI choose",A.dN,A.Nw)],t)
for(v=x.O,m=0;m<11;++m){j=D.uM[m]
u=j.d
w.push(i.b0o(j.a,j.b,j.c,B.a([B.b6(A.d.gI(u).a),B.b6(A.d.gI(u).b)],v)))}o.push(B.cd(A.bH,w,A.by,8,8))
o.push(A.aS)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bs.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.iu(h,A.bs,h,h,h,new C.eI3(i),D.bsy,D.eTa,h,D.eFe,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aIG,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc_m()
v=B.fe(h,h,A.b0,A.b0.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b4(B.m(18),A.V),h,h,h,h,h)
u=i.ax
t=u?D.eey:A.EC
o.push(new B.a7(h,54,B.la(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.or,h,h,h),w,v),h))
return new B.B(new B.L(0,0,0,f.f.d),B.p(h,B.br(!0,B.cf(B.u(o,A.al,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ud,h,h,A.af),!0,!1,A.ag,!0,!1),A.h,h,new B.aV(0,680,0,g.a.b*0.92),D.a6T,h,h,h,h,h,h,h,h),h)},
bGA(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eHB(this,p,d)
if(d===D.B3)return new C.aAG(p,o,q)
w=B.m(16)
v=p?E.uH:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.V(p?A.ej:C.hjq(d),A.c,q,q,q,20)
r=C.hjr(d)
return B.aJ(q,B.de(q,B.u(B.a([s,A.au,B.eY(A.B,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b5,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hG,q,64,q,A.hd,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b0o(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ak:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a_,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aJ(v,B.de(v,B.A(B.a([w,L.GO,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a1,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.adF,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eHQ(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Z7.prototype={
S(){return new C.aE0(new B.ao(A.aq,$.as()))}}
C.aE0.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
ab6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ab6=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.a9(a0)<3){r.n(new C.eHm(r))
w=1
break}B.eL()
r.n(new C.eHn(r))
t=4
q=C.hJP(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hJz(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eHo(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).K(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fDQ()
f=$.Bi.h(0,k.a)
o=f==null||J.ch(f)?null:J.fm(f)
if(o==null){r.n(new C.eHp(r))
w=1
break}n=C.hJx(o,r.a.c)
C.hJt(r.a.c.a)
$.fD8=!0
k=r.c
if(k!=null)B.a6(k,!1).K(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fGo(j)
h=C.fGp(r.a.c)
e=C.fGq(r.a.c)
w=7
return B.b(C.bxx(k,r.a.c.a,j,h,new C.eHq(r),i,e,a0),$async$ab6)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).K(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a4(a1)
if(r.c!=null)r.n(new C.eHr(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.em,i).w
i=B.aG(d,A.bN,i).w
w=B.at(B.p(j,j,A.h,j,j,new B.o(A.be,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.aho,A.h,j,j,D.aRf,j,34,j,j,j,j,j,34),A.av,D.bkY],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Q.aJ7,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.T,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b0(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b0(4,B.m(16),Ak.a6n),j,j,j,j,j,j,j,j,Q.GV,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ad,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJo,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cFk[q]
o=A.c.j(0.06)
n=k.e?j:new C.eHs(k,p)
r.push(B.mY(j,o,new B.w(p,j,Aq.QB,j,j,j,j,j,j,j,j,j),j,n,j,N.vC,j))}w=B.a([w,A.aB,u,A.ar,t,A.aB,s,A.U,B.cd(A.bH,r,A.by,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aIG,j,j,j)],v))
w.push(A.aS)
u=k.e
t=u?j:k.gc_n()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bs.j(0.5),A.fn.j(0.5)],x.O):D.cez
o=B.a([new B.aa(0,A.G,A.bs.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dLR:D.bwU
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.X,!0,j,B.aH(!1,s,!0,B.er(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jp,j,j,j)],v),A.m,j,A.b5,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a_,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ab))
return new B.B(new B.L(0,0,0,h.f.d),B.p(j,B.br(!0,B.cf(B.u(w,A.al,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ud,j,j,A.af),!0,!1,A.ag,!0,!1),A.h,j,new B.aV(0,680,0,i.a.b*0.85),D.a6T,j,j,j,j,j,j,j,j),j)}}
C.aYn.prototype={}
C.aAG.prototype={
S(){return new C.bfX(null,null)}}
C.bfX.prototype={
gate(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.oU,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gate().p()
this.boO()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gate(),new C.e0C(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.bdz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cKB[s]
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
C.aoK.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Xx.prototype={
S(){return new C.ay8()}}
C.ay8.prototype={
gaf7(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aer(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gz6(){var w=this.e
return w===$?this.e=C.fGo(this.a.c).q(0,D.B3):w},
a5z(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5z=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.da7(s))
u=3
r=A.d.kU(D.uM,new C.da8(s))
q=B.d8(C.fGo(s.a.c),x.Q)
l=q
J.hB(l,D.B3)
p=l
if(s.gz6())J.ci(p,D.B3)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gz6()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fGp(i.c)
g=C.fGq(s.a.c)
w=6
return B.b(C.bxx(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5z)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aer(q,s.gaf7())
f=q==null?null:q.b
n=f==null?s.gaf7():f
if(!J.y(n,r.a)&&!s.gz6())throw B.O("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).K(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a4(d)
if(s.c!=null)s.n(new C.da9(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.ai,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.C(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bw,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dac(d)
e=B.A(B.a([f,B.aF(n,n,n,n,B.V(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uM[w]
u=o.gaf7()
t=o.f?n:new C.dad(o,v)
f.push(new C.bob(v,u===v.a,t,n))}f=B.lW(1.25,f,3,10,10,n,A.dJ,!0)
u=B.m(18)
t=o.gz6()?D.bHi:n
if(o.gz6())s=n
else s=m?A.bh:A.bO
r=B.V(A.dN,o.gz6()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gz6()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.C(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gz6()?A.ak:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gz6()
f=B.a([f,A.aB,B.p(n,B.A(B.a([r,A.av,q,B.fB3(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dae(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acu,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.U,B.d(u,n,n,n,n,n,n,D.ewe,n,n,n)],g))
f=B.cf(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.JS,n,n,A.af)
u=o.f?n:o.gbtE()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b4(B.m(16),A.V),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.B(D.bgX,e,n),new B.dp(1,A.ck,f,n),new B.B(A.Dy,new B.a7(1/0,50,B.bJ(B.er(B.at(o.f?A.qK:D.eLT,n,n,n),n,new B.o(n,n,n,s,n,D.bFY,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.ry,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bob.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b6(s),B.b6(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.aa(0,A.G,B.b6(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bE(A.kH,w,w,B.V(v.c,A.ak,w,w,w,18),w),new B.bE(A.l9,w,w,B.d(v.b,w,w,w,w,w,w,D.ewc,w,w,w),w)],x.p)
if(q)v.push(D.aNc)
return B.aJ(w,B.de(w,new B.am(A.W,w,A.a9,A.q,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aE,A.w,r,w,w),A.n),A.eE,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e0z.prototype={
aAt(d,e,f){return e+"@"+A.a.aU(A.o.fE(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vA(d,e){return this.aAt(0,e,null)}}
C.aIw.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aYj.prototype={
B(d){var w,v,u=null,t=C.fFg(this.c)
if(t==null)w=D.ba3
else{w=B.aG(d,u,x.w).w.cy2(D.bdy,D.edN)
v=this.d
w=B.tJ(B.e8(B.alc(!1,t,!1,v,!1,390),!v,u),w)}return B.eY(A.B,new B.a7(416,870,new C.bhy(w,u),u),A.h,A.dp)}}
C.bhy.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cV2[w]
u=new B.b2(3,3)
s.push(new B.cF(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.by(u,u,u,u),t,D.ajg,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cW7[w]
u=new B.b2(3,3)
s.push(new B.cF(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.by(u,u,u,u),t,D.ajg,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bV(0,B.bQ(t,new B.o(t,t,t,B.m(64),D.cw4,D.bEx,A.n),A.b6),0,0,0))
s.push(B.bV(3,B.bQ(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.b6),3,3,3))
s.push(B.bV(13,B.bw(B.m(51),B.ec(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.at(B.p(D.aNn,B.p(t,t,A.h,t,t,D.aRx,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bV(13,B.e8(B.bw(B.m(51),D.bbo,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e8(B.at(B.p(t,t,A.h,t,t,new B.o(A.ak,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.W,t,A.a9,A.h,s,t)}}
C.kV.prototype={
oM(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cx(),f=C.cx(),e=m.r
f=C.eg(A.L,!1,e.l(),A.ay,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.b7,j,2,"Your Presentation Title",0,0,"",D.m4,D.cG,0.84,0.08,0.26)
w=C.cx()
v=m.w
w=C.eg(A.L,!1,v.l(),A.ay,"",k,20,A.bi,A.a1,"",0.12,w,l,"","",0,!1,"",0,D.b7,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.d7,D.cG,0.76,0.12,0.56)
u=C.cx()
t=m.d
s=x.u
t=C.qQ(i,l,0,0,B.a([f,w,C.eg(A.bn,!1,4279310375,A.ay,"",t.j(0.8).l(),24,A.bi,A.a1,"",0.006,u,l,"","",0,!1,"",0,D.fb,t.l(),3,"",0,0,"",D.ca,D.eP,0.3,0.35,0.72)],s),C.cx(),D.m3,"","","Welcome",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b7,j,2,"Agenda",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
w=C.cx()
w=C.qQ(i,l,0,0,B.a([u,C.eg(A.bn,!0,v.l(),A.ay,"",k,22,A.bi,A.a1,"",0.6,w,l,"","",0,!1,"",0,D.b7,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.te,D.cG,0.8,0.1,0.26)],s),C.cx(),D.m3,"","","Agenda",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b7,j,2,"Main Idea",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
f=C.cx()
f=C.qQ(i,l,0,0,B.a([u,C.eg(A.bn,!0,v.l(),A.ay,"",k,21,A.bi,A.a1,"",0.62,f,l,"","",0,!1,"",0,D.b7,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ca,D.cG,0.8,0.1,0.26)],s),C.cx(),D.m3,"","","Key Point 1",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.b7,j,2,"Compare & Contrast",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
r=C.cx()
r=C.eg(A.bn,!0,v.l(),A.ay,"",k,18,A.bi,A.a1,"",0.62,r,l,"","",0,!1,"",0,D.b7,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cG,0.4,0.08,0.24)
q=C.cx()
q=C.qQ(i,l,0,0,B.a([u,r,C.eg(A.bn,!0,v.l(),A.ay,"",k,18,A.bi,A.a1,"",0.62,q,l,"","",0,!1,"",0,D.b7,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cG,0.4,0.52,0.24)],s),C.cx(),D.m3,"","","Key Point 2",D.d7)
r=C.cx()
r=C.eg(A.L,!1,e.l(),A.ay,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.b7,j,2,h,0,0,"",D.d7,D.cG,0.8,0.1,0.32)
e=C.cx()
p=C.Ak(l,l,l,l,D.B_,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qQ(i,l,0,0,B.a([r,C.eg(A.L,!1,v.l(),A.ay,"",k,22,A.bi,A.a1,"",0.1,e,l,"","",0,!1,"",0,D.b7,j,2,"Questions?",0,0,"",D.ca,D.cG,0.7,0.15,0.58)],s),C.cx(),D.m3,"","",h,D.d7)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dd.prototype={
bI(d){return this.e.$1(d)}}
C.em.prototype={}
C.iL.prototype={}
C.D4.prototype={
gaG_(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aee(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a0V(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.D4(v,u,t,d==null?w.d:d)},
Ee(d){return this.a0V(null,d,null,null)},
azf(d){return this.a0V(null,null,null,d)},
cy0(d,e){return this.a0V(d,e,null,null)},
b5q(d){return this.a0V(d,null,null,null)},
b5x(d){return this.a0V(null,null,d,null)}}
C.Lz.prototype={
S(){return new C.bfj(new B.eJ(0,$.as()),null,null)}}
C.bfj.prototype={
Z(){var w,v=this
v.a0()
w=v.qN(new C.dKk(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.kj(0)
else v.d.st(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.as()
w.O$=0
this.bog()},
B(d){var w=C.aee(this.a.c.a)
if(w==null)w=A.d.gI(D.EW)
return B.co(new C.dKj(this,w,C.fUR(this.a.c.d)))}}
C.bmM.prototype={
B(d){return B.nk(A.Sg,this.e,new C.eGA(this,A.k.J(this.d*0.35,1.6)-0.3))}}
C.bas.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aNE(d,e,v)
break
case"confetti":w.bzU(d,e,v)
break
case"crown":w.bBu(d,e,v)
break
case"aurora":w.buI(d,e,v)
break
case"champagne":w.bxP(d,e,v)
break
case"diamonds":w.bDE(d,e,v)
break
case"starburst":w.clL(d,e,v)
break
case"balloons":w.buW(d,e,v)
break
case"galaxy":w.bIg(d,e,v)
break
case"redcarpet":w.cd5(d,e,v)
break
case"coins":w.bzi(d,e,v)
break
case"lanterns":w.bSb(d,e,v)
break
case"hearts":w.bPT(d,e,v)
break
case"petals":w.c8u(d,e,v)
break
case"butterflies":w.bwT(d,e,v)
break
case"neon":w.bVW(d,e,v)
break
case"disco":w.bDP(d,e,v)
break
case"sunrise":w.cnb(d,e,v)
break
case"pearls":w.c7y(d,e,v)
break
case"snow":w.cls(d,e,v)
break
case"laurel":w.bSh(d,e,v)
break
case"ribbons":w.cfx(d,e,v)
break
case"kente":w.bS0(d,e,v)
break
case"trophy":w.cqJ(d,e,v)
break
case"shooting":w.cjm(d,e,v)
break
case"bokeh":w.bvc(d,e,v)
break
case"orbits":w.c5i(d,e,v)
break
case"flowers":w.bHz(d,e,v)
break
case"music":w.bVH(d,e,v)
break
case"mandala":w.bU7(d,e,v)
break
case"sparklers":w.clB(d,e,v)
break
case"city":w.byC(d,e,v)
break}},
qF(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a1()
v=B.U()
v.r=g.j(A.k.D(h,0,1)).gt(0)
v.a=A.mX
u=new B.b_(w.r,A.aw,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.N(new B.bj(w,s))
u.N(new B.dk(w,t,w+f,t))
u.N(new B.dk(w,t,w,t+f))
u.N(new B.dk(w,t,w-f,t))
u.N(new B.dk(w,t,w,s))
u.N(new B.bZ())
d.b4(u,v)
d.az(e,f*0.18,v)},
lb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cL(q,v)*2.5)+C.cL(q,u)*6.28)+1)/2
this.qF(d,new B.v(C.cL(q,t)*o,C.cL(q,s)*n),m*(0.006+0.014*C.cL(q,r))*(0.5+p),h,p*p)}},
aNE(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lb(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aZ],w),B.a([A.i4,A.bz],w),B.a([A.eo,A.b3],w),B.a([A.c,A.at],w)]
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
a1.saw(new B.a8(A.a_,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.qS(new B.v(g,c1),a0)))
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
b9.a=A.mX
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cL(h,b1+120)>0.5)this.qF(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bzU(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.J(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a1(),a0=B.U()
a0.saw(new B.a8(A.ax,A.aE,A.w,D.cQr,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aA(0,new B.af(0,0,f,e)))
a1.bp(new B.af(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.J(a3*(h*(0.08+0.12*C.cL(u,1)))+C.cL(u,2)*w,w)
s=C.cL(u,3)
r=Math.sin(a3*(0.8+C.cL(u,4))+u)
q=h*(0.012+0.012*C.cL(u,5))
p=Math.cos(a3*(2+3*C.cL(u,6))+u)
o=D.N_[A.o.D(A.k.bK(C.cL(u,7)*5),0,4)]
J.bP(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cL(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gt(0)
if(A.o.J(u,5)===0){t=B.a([],v)
m=new B.b_(d.r,A.aw,null,null,t)
d=-q*2
t.push(new B.bj(d,0))
for(l=1;l<=8;++l){s=new B.aw(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bI(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a1()
t=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
t.r=B.b6(n.r).gt(0)
t.b=A.aj
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.dy(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.cz(t),k)
k.delete()}f.restore()}this.lb(a1,a2,a3,25,A.bJ,30)},
bBu(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a1()
n=B.a([],r)
m=new B.b_(o.r,A.aw,a4,a4,n)
n.push(new B.bj(a5,a6))
o=p-0.07
n.push(new B.aw(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.aw(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bZ())
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.saw(new B.bR(A.B,0.5,A.w,a4,0,B.a([A.bJ.j(0.22),D.b0L],v),a4,a4).aA(0,B.c0(w,u)))
l=o.L()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.b_($.a1().r,A.aw,a4,a4,B.a([],r))
v=a6+j
i.N(new B.bj(a5,v))
u=j*0.3
s=a6+u
i.N(new B.aw(a5,s))
o=a6+j*0.6
i.N(new B.aw(a5+k*0.22,o))
i.N(new B.aw(a5+k*0.5,a6))
i.N(new B.aw(a5+k*0.78,o))
o=a5+k
i.N(new B.aw(o,s))
i.N(new B.aw(o,v))
i.N(new B.bZ())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.U()
n.saw(new B.a8(A.b4,A.bd,A.w,D.cPo,a4,a4).aA(0,new B.af(a5,a6,o,v)))
a8.b4(i,n)
for(v=[D.dVU,D.dSl,D.e_M],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(a0)
l=a1.L()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=A.ak.gt(0)
l=a1.L()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=A.hD.gt(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.zV(i),u=B.a([],x.X),o=new B.xM(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jH(y.g));--f
o.lc()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.b_(n,v.b,a4,new B.d7([new B.FL(o,f),0,d*h,!0]),B.a([],r))
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
buI(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lb(a8,a9,b0,60,A.c,50)
w=[D.e6N,D.e6w,D.e6r,D.e7B]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a1()
i=B.a([],p)
h=new B.b_(n.r,A.aw,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.bj(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bI(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aw(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bI(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a1()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=t
n.r=m.j(0.28).gt(0)
n.a=A.mX
n.z=new B.hG(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=v
n.r=m.j(0.55).gt(0)
n.a=A.mX
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
n.a=A.mX
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bxP(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a1(),a0=B.U()
a0.saw(new B.bR(A.B,0.5,A.w,l,0,B.a([A.hn.j(0.25+0.1*h),D.TH],x.O),l,l).aA(0,B.c0(new B.v(g,f),e)))
a1.az(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.b_(d.r,A.aw,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.bj(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.aw(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bI(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.b=A.aj
a0.c=h
a0.r=D.N_[A.o.J(w,4)].j(0.7).gt(0)
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
bDE(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
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
f=new B.b_(h.r,A.aw,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.bj(e,i))
h*=0.28
j*=0.6
g.push(new B.aw(h,j))
d=o*0.28
g.push(new B.aw(d,j))
a0=o*0.5
g.push(new B.aw(a0,i))
a1=k*0.6
g.push(new B.aw(0,a1))
g.push(new B.bZ())
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.saw(new B.a8(A.ax,A.aE,A.w,D.cLB,a5,a5).aA(0,B.dy(A.J,k*1.2,o)))
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
clL(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a1()
o=B.a([],v)
n=new B.b_(p.r,A.aw,null,null,o)
o.push(new B.bj(h,g))
p=s-q
o.push(new B.aw(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.aw(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bZ())
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
i=f*(0.1+0.55*D.baL.aq(0,k)*(0.5+0.5*C.cL(t,v)))
this.qF(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cL(t,3)),D.N_[A.o.D(A.k.bK(C.cL(t,4)*5),0,4)],u)}},
buW(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cL(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.J(q*(0.05+0.05*C.cL(o,2))+C.cL(o,3)*m,m)
j=C.cL(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqg[A.o.J(o,6)]
h=$.a1()
g=B.a([],s)
f=new B.b_(h.r,A.aw,a3,a3,g)
h=k+n*1.15
g.push(new B.bj(j,h))
for(e=1;e<=6;++e){d=new B.aw(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bI(a0)
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
l.saw(new B.bR(D.aNq,0.9,A.w,a3,0,B.a([A.c,i,d],t),A4.aq6,a3).aA(0,a2))
a1=l.L()
u.drawOval(B.cz(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.b_(g.r,A.aw,a3,a3,l)
d=n*0.12
l.push(new B.bj(j-d,h))
l.push(new B.aw(j+d,h))
l.push(new B.aw(j,k+n))
l.push(new B.bZ())
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
r.r=D.aqg[A.o.J(o,6)].j(0.85).gt(0)
a1=r.L()
u.drawRect(B.cz(s),a1)
a1.delete()
u.restore()}},
bIg(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lb(b1,b2,b3,50,A.c,70)
for(w=[D.e6V,D.e6C,D.e6H],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
k=B.aq(A.bJ,A.eM,g)
k.toString
d=C.cL(i,3)
$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=k.j(0.5+0.5*C.cL(i,4)).gt(0)
a0.a=A.mX
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a1()
a9=B.U()
a9.saw(new B.bR(A.B,0.5,A.w,a4,0,B.a([A.z4.j(0.55),D.aak],u),a4,a4).aA(0,B.c0(b0,a8)))
b1.az(b0,a8,a9)
a1=A.k.J(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bK(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cL(a2,9)),a6*0.1*C.cL(a2,8))
a5=B.l_(a3,a3.ap(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l_(a3,a5,0.6)
a6.toString
a8=B.U()
a8.saw(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.qS(a3,a5)))
a8.c=a7*0.005
a8.d=A.bZ
b1.bU(a6,a5,a8)}},
cd5(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a1()
n=B.a([],s)
m=new B.b_(o.r,A.aw,b5,b5,n)
n.push(new B.bj(q,u))
o=p-0.16
n.push(new B.aw(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.aw(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bZ())
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.saw(new B.bR(A.B,0.5,A.w,b5,0,B.a([A.z4.j(0.28),D.aak],w),b5,b5).aA(0,B.c0(new B.v(q,u),t)))
o.a=A.mX
l=o.L()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.fp:A.f5)
a9=$.a1()
b0=B.a([],s)
m=new B.b_(a9.r,A.aw,b5,b5,b0)
b0.push(new B.bj(a5?0:b6,0))
b0.push(new B.aw(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.dk(a9,k,a5?g:a1,b7))
b0.push(new B.aw(a5?0:b6,b7))
b0.push(new B.bZ())
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
l.delete()}b2=new B.b_($.a1().r,A.aw,b5,b5,B.a([],s))
w=b7*0.78
b2.N(new B.bj(b6*0.42,w))
b2.N(new B.aw(b6*0.58,w))
b2.N(new B.aw(b6*0.8,b7))
b2.N(new B.aw(b6*0.2,b7))
b2.N(new B.bZ())
v=B.U()
v.saw(D.bFS.aA(0,new B.af(0,w,0+b6,w+b7*0.22)))
b9.b4(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.J(b7*(0.05+0.07*C.cL(r,1))+C.cL(r,2)*b3,b3)
u=C.cL(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qF(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cL(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bzi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
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
q.saw(new B.a8(A.ax,A.aE,A.w,n>0?D.cYT:D.ck7,null,null).aA(0,l))
k=q.L()
v.drawOval(B.cz(l),k)
k.delete()
q=-(s*0.22)
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=Math.max(0.6,s*0.08)
j.r=D.b8i.gt(0)
k=j.L()
v.drawOval(B.cz(new B.af(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qF(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lb(d,e,f,30,A.bJ,110)},
bSb(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lb(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cL(p,1))
n=a1+o*4
m=a1+o*2-A.k.J(t*(0.03+0.04*C.cL(p,2))+C.cL(p,3)*n,n)
l=C.cL(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a1()
h=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
h.saw(new B.bR(A.B,0.5,A.w,d,0,B.a([H.aas.j(0.45*k),D.a9m],u),d,d).aA(0,B.c0(new B.v(l,m),j)))
g=h.L()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.b_(i.r,A.aw,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bj(l-i,e))
j.push(new B.aw(l+i,e))
i=o*0.38
h=m+h
j.push(new B.aw(l+i,h))
j.push(new B.aw(l-i,h))
j.push(new B.bZ())
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i=B.aq(D.b0U,A.c,0.2*k)
i.toString
j.saw(new B.a8(A.b4,A.bd,A.w,B.a([D.b4K,i],u),d,d).aA(0,B.dy(new B.v(l,m),o*1.4,o)))
g=j.L()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(k).gt(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bPT(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
i=new B.b_(m.r,A.aw,d,d,l)
m=o*0.9
l.push(new B.bj(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p4(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p4(m,g,o*1.8,h,0,m))
l.push(new B.bZ())
f=D.cDq[A.o.J(p,5)]
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l=B.aq(f,A.x,0.25)
l.toString
m.saw(new B.bR(A.vw,0.5,A.w,d,0,B.a([A.c,f,l],u),H.Zu,d).aA(0,B.c0(A.J,o*1.4)))
e=m.L()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lb(a3,a4,a5,30,A.i4,130)},
c8u(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
k=new B.b_(n.r,A.aw,i,i,m)
n=-p
m.push(new B.bj(0,n))
l=n*0.2
m.push(new B.dk(p,l,0,p))
m.push(new B.dk(n,l,0,n))
m.push(new B.bZ())
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
m=(q&1)===0?D.cey:D.cMO
n.saw(new B.a8(A.a_,A.a7,A.w,m,i,i).aA(0,B.c0(A.J,p)))
j=n.L()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lb(d,e,a0,25,A.bJ,140)},
bwT(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
a4=new B.b_(a2.r,A.aw,a6,a6,a3)
a3.push(new B.bj(0,0))
a3.push(new B.p4(f,e,l,d,h,0))
a3.push(new B.p4(q,h,g,q,0,h))
a3.push(new B.bZ())
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.saw(new B.a8(A.a_,A.a7,A.w,i?D.cMw:D.cOX,a6,a6).aA(0,new B.af(0,m,k,j)))
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
p.r=D.b7J.gt(0)
p.c=q*0.1
p.d=A.bZ
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bVW(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.J(w+t/4,1)
r=f*(0.2+0.7*s)
$.a1()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.b=A.aj
q.c=v
q.r=D.arh[t].j((1-s)*0.9).gt(0)
q.z=new B.hG(A.G,v)
p=r*0.3
p=B.c_(B.dy(e,r,r*1.6),new B.b2(p,p))
o=q.L()
u.drawRRect(B.fM(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cL(m,1)*4)+m)))
k=D.arh[A.o.J(m,4)]
j=m*n+h
i=g-l
i=B.c_(new B.af(j,i,j+w,i+l),new B.b2(v,v))
$.a1()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=k.j(0.85).gt(0)
j.z=new B.hG(A.a6b,p)
o=j.L()
u.drawRRect(B.fM(i),o)
o.delete()}},
bDP(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
i.a=A.mX
i.z=new B.hG(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a1()
t=B.U()
t.r=A.aA.gt(0)
t.c=1.2
a3.bU(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.U()
t.r=A.fK.gt(0)
a3.az(v,u,t)
J.bP(q.save())
a1=new B.b_(a1.r,A.aw,null,null,B.a([],x.v))
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
cnb(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.aq(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a1()
q=B.a([],u)
p=new B.b_(r.r,A.aw,h,h,q)
q.push(new B.bj(d,a0))
r=s-0.04
q.push(new B.aw(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aw(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bZ())
r=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=A.bJ.j(0.1).gt(0)
o=r.L()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a1()
a0=B.U()
a0.saw(new B.bR(A.B,0.5,A.w,h,0,B.a([D.aYu.j(0.6),D.a9m],x.O),h,h).aA(0,B.c0(a1,d)))
a2.az(a1,d,a0)
a0=e*0.2
d=B.U()
d.saw(D.dQS.aA(0,B.c0(a1,a0)))
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
c7y(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a1()
q=B.a([],t)
p=new B.b_(r.r,A.aw,f,f,q)
q.push(new B.bj(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aw(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bI(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aw(e,d)
q.push(r)
o=p.f
if(o!=null)r.bI(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bZ()
q.push(r)
q=p.f
if(q!=null)r.bI(q)
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
t.saw(new B.bR(Ai.qU,0.5,A.w,f,0,D.cRU,f,f).aA(0,B.c0(new B.v(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lb(a1,a2,a3,25,A.c,190)},
cls(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
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
bSh(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f.saw(D.bFG.aA(0,new B.af(0,o,n,m)))
e=f.L()
s.drawOval(B.cz(g),e)
e.delete()
s.restore()}}$.a1()
a0=B.U()
a0.b=A.aj
a0.c=a2*0.003
a0.r=D.b14.gt(0)
a3.az(w,v*1.08,a0)
d=a5*0.8
this.qF(a3,w.ap(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lb(a3,a4,a5,40,A.bJ,210)},
cfx(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hn,A.hD],a6),B.a([A.nS,A.i4],a6),B.a([A.az,A.eM],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a1()
k=B.a([],o)
j=new B.b_(l.r,A.aw,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.bj(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bI(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aw(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bI(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.du(i,s),l=new B.bS(l,l.gH(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aw(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bI(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bZ()
k.push(l)
k=j.f
if(k!=null)l.bI(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a1()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
k=a7[m]
h=k[0]
l.saw(new B.a8(A.a_,A.a7,A.w,B.a([h,k[1],h],a6),H.aqZ,new B.mj(w)).aA(0,new B.af(0,0,v,u)))
l.r=A.c.j(0.85).gt(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lb(a8,a9,b0,40,A.c,220)},
bS0(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.Zx[a3].gt(0)
a4=a2.L()
s.drawRect(B.cz(new B.af(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a5.r=D.Zx[A.o.J(a3+2,5)].gt(0)
a4=a5.L()
s.drawRect(B.cz(new B.af(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.J(n*(0.04+0.05*C.cL(a0,1))+C.cL(a0,2)*a6,a6)
v=C.cL(a0,3)
t=C.cL(a0,4)
this.qF(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.Zx[A.o.J(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cqJ(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
l=new B.b_($.a1().r,A.aw,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.N(new B.bj(v,a2))
w=a1+w
l.N(new B.aw(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.N(new B.dk(w,r,p,k))
w=a2+m*0.95
l.N(new B.aw(p,w))
p=n*0.3
j=a2+m
l.N(new B.aw(a1+p,j))
l.N(new B.aw(a1-p,j))
q=a1-q
l.N(new B.aw(q,w))
l.N(new B.aw(q,k))
l.N(new B.dk(v,r,v,a2))
l.N(new B.bZ())
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
a1.saw(new B.a8(A.a_,A.a7,A.w,D.cTT,A.aqm,null).aA(0,new B.af(v,a2,r,j)))
a4.b4(l,a1)
a0=A.k.J(a6*0.6,1.4)
if(a0<1)this.qF(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bzV(a4,a5,a6,60)},
bzV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.J(k*(0.1+0.1*C.cL(p,31))+C.cL(p,32)*v,v)
n=C.cL(p,33)
J.bP(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dy(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a1()
n=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
n.r=D.N_[A.o.J(p,5)].gt(0)
m=n.L()
u.drawRect(B.cz(o),m)
m.delete()
u.restore()}},
cjm(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
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
g.saw(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.bJ],s),null,null).aA(0,B.qS(new B.v(l,h),i)))
g.c=r
g.d=A.bZ
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qF(a0,i,p,A.c,1-m)}},
bvc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cL(r,1))
p=A.k.J(C.cL(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.J(C.cL(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a1()
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l=A.o.J(r,5)
m.r=D.asw[l].j(n).gt(0)
m.a=A.mX
m.z=new B.hG(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
m.b=A.aj
m.c=Math.max(0.6,q*0.05)
m.r=D.asw[l].j(n*1.4).gt(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
c5i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
bHz(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.cJT[A.o.J(o,5)]
J.bP(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dy(new B.v(0,l),i,j)
$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.saw(new B.a8(A.b4,A.bd,A.w,B.a([A.c,g],u),null,null).aA(0,B.dy(new B.v(0,l),f,h)))
a1=a0.L()
v.drawOval(B.cz(d),a1)
a1.delete()}$.a1()
l=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=A.hn.gt(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lb(a5,a6,a7,30,A.hD,280)},
bVH(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.J(t+n/4,1)
l=B.c0(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a1()
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=v
j.r=D.apt[n].j((1-m)*0.8).gt(0)
i=j.L()
u.drawArc.apply(u,[B.cz(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.J(v*(0.06+0.06*C.cL(g,1))+C.cL(g,2)*h,h)
e=C.cL(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cL(g,4))
a0=D.apt[A.o.J(g,4)]
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
bU7(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.b_(d.r,A.aw,a3,a3,a0)
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
a5.saw(new B.bR(A.B,0.5,A.w,a3,0,B.a([A.hn.j(0.25),D.TH],x.O),a3,a3).aA(0,B.c0(w,a4)))
a7.az(w,a4,a5)
this.lb(a7,a8,a9,30,A.bJ,300)},
clB(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
l.saw(new B.bR(A.B,0.5,A.w,null,0,B.a([A.hD,A.hn.j(0.6),D.TH],o),null,null).aA(0,B.c0(new B.v(j,i),p)))
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
a6.r=B.aq(A.hD,A.aZ,d).j(1-d).gt(0)
a6.c=Math.max(0.8,u)
a6.d=A.bZ
a6.a=A.mX
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
byC(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aNE(a9,new B.ap(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cL(n,1))
l=a8*(0.14+0.24*C.cL(n,2))
k=a8-l
j=new B.af(o,k,o+m,k+l)
$.a1()
i=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
i.saw(D.bGz.aA(0,j))
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
C.aWc.prototype={
B(d){var w,v=null,u=new C.c2z(),t=new C.c2B(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiq,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c2A(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.EW[w]))
return B.cd(A.bH,s,A.by,12,10)}}
C.X5.prototype={
S(){return new C.awz()}}
C.awz.prototype={
guI(){var w=this.d
return w===$?this.d=this.a.c:w},
gaU0(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.bb(w.b,A.aY,A.aL),$.as())}return v},
gatf(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaG_()
v=$.as()
u.f!==$&&B.bH()
t=u.f=new B.ao(new B.bb(w,A.aY,A.aL),v)}return t},
p(){var w=this.gaU0(0),v=$.as()
w.R$=v
w.O$=0
w=this.gatf()
w.R$=v
w.O$=0
this.a2()},
Xz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Xz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().AS(90,700,700,A.er),$async$Xz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Xz)
case 8:p=e
o=q.b.toLowerCase()
n=J.af6(o,".png")?"image/png":"image/jpeg"
r.n(new C.d_E(r,n,p))
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
return B.i($async$Xz,v)},
aU_(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b0(4,B.m(12),A.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aJt,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aee(p.guI().a)
if(n==null)n=A.d.gI(D.EW)
w=p.guI()
v=p.r
u=x.p
v=B.C(new B.am(A.W,o,A.a9,A.q,B.a([B.bV(0,new C.Lz(p.guI(),!1,!0,new B.cv(w.a+v,x.W)),0,0,0),B.an(o,B.G2(A.mG,new C.d_J(d),B.oj(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.G2(D.brs,new C.d_K(p),B.oj(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJn,o,o,o)
t=B.C(B.aK(o,A.T,!1,o,!0,A.q,o,B.aL(),p.gaU0(0),o,o,o,o,o,2,p.aU_("Big words"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_L(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hi,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hn.j(0.6),A.r,1)
if(p.guI().d.length===0)q=D.buM
else{q=C.fUR(p.guI().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fC(q,A.B,o,o,A.cj,A.bM,!1,o,!1,o,o),A.ap)}r=B.a([t,A.aa,B.aJ(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_o(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guI().d.length!==0)r.push(B.aF(o,o,o,o,D.Yn,o,o,o,new C.d_M(p),o,o,o,o,"Remove logo",o))
return B.cg(o,A.x,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.U,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.T,!1,o,!0,A.q,o,B.aL(),p.gatf(),o,o,o,o,o,2,p.aU_("Line under it"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_N(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dj(D.btJ,D.eUK,new C.d_O(p,d),B.bk(A.at,o,o,o,A.x,o,A.c9,o,new B.b4(B.m(14),A.V),o,o,o))],u),A.al,o,A.e,A.R,0,A.p),A.h,o,o,D.aRH,o,o,o,o,A.Du,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aI_.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.Xq.prototype={
S(){return new C.bbW(new B.ao(A.aq,$.as()))}}
C.bbW.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.K(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.ai,k=B.aG(d,A.bN,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.A(B.a([B.C(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.cu,l,o,o,o,o),o,o,o,new C.d67(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cvB[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.b2(12,12)
q=new B.b2(12,12)
p=n?A.c.j(0.06):A.bO
u.push(B.aH(!1,new B.by(r,r,r,r),!0,B.p(A.B,new B.w(s,o,A.v9,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.by(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d68(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.B(A.hr,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.E1(A.bH,6,6,A.by,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bh:A.aN
e.push(B.A(B.a([B.C(B.aK(o,A.T,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b0(4,B.m(14),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.aa,B.bJ(A.aKg,new C.d69(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dp(1,A.ck,B.cQ(e,o,o,o,o,A.af,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aV(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.ry,A.Vg,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bbj.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f8()
a2.e0(this.c)
w=this.b
v=w/6.283185307179586
$.a1()
u=B.U()
u.z=A.Ou
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
C.bb0.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.c_(new B.af(0,0,0+a7.a,0+a7.b),A.k6),a2=this.b,a3=Math.sin(a2*2),a4=$.a1(),a5=B.U()
a5.b=A.aj
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gt(0)
a5.z=A.mL
a6.bi(a1,a5)
a5=x.v
a4=new B.b_(a4.r,A.aw,a0,a0,B.a([],a5))
a4.N(new B.j1(a1))
v=new B.ahz(new B.xM(B.zV(a4),!1,B.a([],x.X))).gI(0)
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
if(i<=h){k=new B.b_(r,k,a0,new B.d7([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.b_(r,k,a0,new B.d7([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.b_(r,a2.b,a0,new B.d7([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.lc()
e=u[a3].a45(n).a
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
C.bjJ.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f8()
e.e0(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.hd()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gaj1()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a1()
i=B.a([],n)
h=new B.b_(j.r,A.aw,f,f,i)
i.push(new B.bj(w,v))
j=l-k
i.push(new B.aw(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.aw(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bZ())
j=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
j.saw(B.aRl(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.jf
g=j.L()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.b62.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f8()
a0.e0(this.c*7+3)
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
C.b5F.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f8()
a0.e0(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ag()-0.5)*0.1)
k=v*(0.06+a0.ag()*0.05)
j=a0.ag()*3.141592653589793*2
i=$.a1()
h=B.a([],n)
g=new B.b_(i.r,A.aw,null,null,h)
h.push(new B.bj(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aw(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bI(e)
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
C.bqu.prototype={
a5(d,e){var w,v,u=new B.af(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a1()
w=B.U()
t=(0.5+0.5*t)*0.12
w.saw(new B.bR(A.B,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.aqq,null).aA(0,u))
d.bp(u,w)
w=u.cD(-3)
v=B.U()
v.b=A.aj
v.c=2
v.r=this.c.j(0.1+t).gt(0)
v.z=A.jf
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bnz.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bK(d)*7,p=0;p<7;++p){o=new B.f8()
o.e0(q+p)
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
C.bmI.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.af(0,0,0+e.a,0+e.b)
$.a1()
v=B.U()
v.a=A.mX
v.saw(new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aA(0,w))
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bal.prototype={
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
u.z=A.qt
r=new C.d_l(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
ao(d){return d.b!==this.b}}
C.wB.prototype={}
C.H_.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.ao9.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.tV.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m3.prototype={
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
u.m(0,"decoration",C.hx4(v.z))
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
C.lk.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("I<1,ew>")
n=B.z(new B.I(n,new C.c7S(),m),m.k("ai.E"))
return C.qQ(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("I<1,a0<n,@>>")
n=B.z(new B.I(n,new C.c7T(),m),m.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hQ.prototype={
gb3N(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bg(v)},
gQh(){if(!C.kf(this.w))return!1
var w=this.gb3N()
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
q=B.S(r).k("I<1,lk>")
r=B.z(new B.I(r,new C.c7H(),q),q.k("ai.E"))
return C.Ak(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.S(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.c7I(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.jt.prototype={}
C.aYm.prototype={
B(d){return B.co(new C.c7N(this))}}
C.als.prototype={
S(){return new C.bf6(null,null)}}
C.bf6.prototype={
gaU1(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.fY,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gaU1().p()
this.bo1()},
B(d){return B.c4(this.gaU1(),new C.dxF(),this.a.c)}}
C.aHM.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aaR.prototype={
O_(d,e,f,g){return this.bHg(d,e,f,g)},
bHg(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O_=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O_)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).K(null)
t=d.E(x.q).f
t.P(B.aZ(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O_,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.aa(0,A.G,A.x.j(0.35),A.dn,24)],x.V),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aS,p,A.ar,B.d(o,v,n,A.Z,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.Z,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d1)
n.push(B.A(B.a([B.C(new C.ab9(A.hf,"Download",A.bQ,new C.eai(w,d),!0,v),1),A.av,B.C(new C.ab9(A.us,"Share",A.bf,new C.eaj(w,d),!1,v),1),A.av,B.C(new C.ab9(A.h0,"Safari",A.aW,new C.eak(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bF(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eal(d),v,v))
return B.br(!0,new B.B(A.oY,B.u(B.a([B.p(v,B.u(n,A.al,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iy,v,t,u,s,v,A.n),v,v,v,v,A.DB,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.ab9.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.er(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bjc,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ab)}}
C.aYk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anp(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.L(v,w,v,w)}else{v=6*w
u=new B.L(v,10*w,v,12*w)}t=i.c_p().ahd(1.35)
s=B.asy(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.btf(v)
if(i.e&&i.w!=null)q=B.aK(h,A.T,!1,h,!0,A.q,h,B.aL(),i.w,A.bf,h,h,h,h,2,D.bCx,A.z,!0,h,!0,h,!1,i.x,A.ad,h,h,h,new B.cv("slide_tf_"+g.a,x.W),h,A.v6,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yb,A.am,h,A.Qt,h,h)
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
w=n?t.cxO(B.b6(g.Q).j(0.45),A.cJ):t
p=g.as
l=m?1:h
k=m?A.eA:A.Bz
p=B.d(f,new B.cv("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qk:s
$.a1()
j=B.U()
j.b=A.aj
j.c=3*w
j.e=A.fj
j.r=A.aG.gt(0)
j=i.cfA(p,t,k,j)
k=g.r
w=new B.am(A.W,h,A.a9,A.q,B.a([j,i.cfy(k,t,l?A.Qk:s)],x.p),h)}else w=i.cfz(p,t,g.k2?A.Qk:s,m)
v=new B.n6(w,new B.cv("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.B(u,new B.bE(r,h,h,q,h),h)
case 1:case 4:return i.bQv()
case 3:return i.c7x()
case 2:return B.b1(h,h,h,new C.aYh(g,h),A.fx)
case 5:g=g.r
return new C.aYj(g,!i.e&&i.z==null,h)}},
c_p(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b6(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ks
j=A.cJ
break
case"shadow":v=o.d
e=B.a([new B.cI(D.a9k,new B.v(0,4*v),8*v)],x.S)
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
i=A.m8
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
e=B.a([new B.cI(A.b9,new B.v(-3*v,0),0),new B.cI(A.aH,new B.v(3*v,0),0)],x.S)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cI(A.dh,A.J,8*v),new B.cI(A.aH,new B.v(0,-3*v),18*v)],x.S)
k=A.u
w=H.a8g
break
case"ice":v=o.d
e=B.a([new B.cI(A.b3,A.J,10*v),new B.cI(A.cA,A.J,22*v)],x.S)
k=A.O
w=A.eo
break
case"chalk":h=o.d
e=B.a([new B.cI(l.j(0.45),A.J,3*h)],x.S)
w=l
k=A.ks
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.S)
for(t=o.d,q=0;q<8;++q){p=D.cE7[q]
u.push(new B.cI(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cI(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a1()
f=B.U()
v=o.d
f.saw(D.bEf.aA(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cI(A.Ij,new B.v(0,3*v),5*v)],x.S)
w=l
k=A.u
break
case"sunset":$.a1()
f=B.U()
v=o.d
f.saw(D.bEz.aA(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.ks
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b6(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
av6(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ebk.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c7L(h)
v=r.k2?C.hJ8(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eA:A.Bz
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VB(B.ds(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cfA(d,e,f,g){return this.av6(d,e,f,!1,g)},
cfy(d,e,f){return this.av6(d,e,f,!1,null)},
cfz(d,e,f,g){return this.av6(d,e,f,g,null)},
btf(d){switch(d.a){case 2:return A.B
case 1:case 5:return A.a7
default:return A.a_}},
bQv(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.at(B.V(s.b===D.kz?A.Ex:A.zY,A.aA,t,t,t,32),t,t,t)}w=u.bw7(r)
if(s.b===D.kz){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.ct,A.r,1),s,B.a([new B.aa(0,A.G,A.x.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.L(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJ7(r,!0)
return C.fgn(s.go,v,s.id)}return w},
aJ7(d,e){var w,v,u,t
try{w=C.hJr(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c5(u,"_bg")
u=B.co(new C.c7K(this,w,v,e))
return u}catch(t){return D.a7x}},
bw7(d){return this.aJ7(d,!1)},
c7x(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aWE
return C.hJJ(v,w.db,w.dx)}}
C.aYh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a1(),g=B.U(),f=this.b
g.r=B.b6(f.ay).gt(0)
w=B.U()
w.r=B.b6(f.ch).gt(0)
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
case 2:r=new B.b_(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(u/2,0))
r.N(new B.aw(u,t))
r.N(new B.aw(0,t))
r.N(new B.bZ())
d.b4(r,g)
d.b4(r,w)
break
case 3:r=new B.b_(h.r,A.aw,i,i,B.a([],x.v))
h=t*0.45
r.N(new B.bj(0,h))
f=u*0.65
r.N(new B.aw(f,h))
r.N(new B.aw(f,t*0.2))
r.N(new B.aw(u,t*0.5))
r.N(new B.aw(f,t*0.8))
t*=0.55
r.N(new B.aw(f,t))
r.N(new B.aw(0,t))
r.N(new B.bZ())
d.b4(r,g)
d.b4(r,w)
break
case 4:h=t/2
w.c=v+2
d.bU(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.b_(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(q,0))
r.N(new B.aw(u,0))
r.N(new B.aw(u-q,t))
r.N(new B.aw(0,t))
r.N(new B.bZ())
d.b4(r,g)
d.b4(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.b_(h.r,A.aw,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.bj(k,j)
f.push(h)
v=r.f
if(v!=null)h.bI(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aw(k,j)
f.push(h)
v=r.f
if(v!=null)h.bI(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.N(new B.bZ())
d.b4(r,g)
d.b4(r,w)
break}},
ao(d){return d.b!==this.b}}
C.aFp.prototype={
S(){return new C.bq1(null,null)}}
C.bq1.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.ic,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bqe()},
aJi(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bQ(B.at(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a_,A.a7,A.w,v,w,w),A.n),A.b6)},
btt(){var w,v=this,u=null,t=v.aJi("Slide A",A.bf),s=v.aJi("Slide B",A.aW)
if(v.a.c===D.ca)return new B.am(A.W,u,A.aX,A.q,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eOU(v,s,t),u)},
B(d){return this.btt()}}
C.aG1.prototype={
jc(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.SU.prototype={
S(){return new C.bfg(null,null)}}
C.bfg.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bh(null,A.zq,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ca){w.st(0,1)
return}B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dIx(u),x.a)},
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
else B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dIw(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bof()},
B(d){var w,v=this.a
if(v.c.dy===D.ca||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dIv(this),v.d)}}
C.GZ.prototype={
B(d){return B.co(new C.c7D(this))}}
C.awk.prototype={
S(){return new C.b9R()}}
C.b9R.prototype={
Z(){this.a0()
if(this.a.c!==D.ca)B.bK(A.Jr,new C.cY_(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ca)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.SU(C.eg(A.bn,!1,4279310375,A.ay,"",4294538006,24,A.bi,A.a1,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.b7,o,2,"",0,0,"",u,D.eP,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cv("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eg(A.bn,!1,4294967295,A.ay,"",4280640491,22,A.bi,A.a1,"",0.2,"preview_text",p,"","",0,!1,"",0,D.b7,o,2,"Element flies in",0,0,"",q.a.c,D.cG,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.W,p,A.a9,A.q,B.a([w,B.an(32,new C.SU(t,B.p(p,D.eHy,A.h,p,p,new B.o(s,p,B.H(A.be,A.r,1),r,p,p,A.n),p,p,p,p,A.iE,p,p,1/0),!0,1,new B.cv("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bQ(n,D.aSe,A.b6)}}
C.a5n.prototype={
S(){return new C.bfV(null,null)}}
C.bfV.prototype={
gaUy(){var w=this.a
if(w.e)w=D.ebr.q(0,w.c)||D.aGH.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaUy()){w=C.hHP(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bh(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.boM()},
B(d){var w,v=this,u=v.d
if(!v.gaUy()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e0i(v,u,A.o.J(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWf.prototype={
B(d){var w=null
return B.at(C.aYl(!0,w,!1,C.eg(A.L,!1,this.e.l(),A.ay,"",4280640491,this.f,A.bi,A.a1,"",0.2,"fx",w,"","",0,!1,"",0,D.b7,4280172719,2,"Aa",0,0,this.c,D.ca,D.cG,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.baZ.prototype={
jc(d){return C.a06(this.b,new B.af(0,0,0+d.a,0+d.b).cD(-this.c))},
k0(d){return d.b!==this.b||d.c!==this.c}}
C.blI.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.af(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a06(g,h),e=a1.gef(),d=new C.eEk()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saw(D.aIa.aA(0,h))
a0.b4(f,w)
g=C.a06(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b84.gt(0)
a0.b4(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saw(D.ekV.aA(0,h))
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
g.saw(D.ekT.aA(0,h))
a0.b4(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a06(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gt(0)
a0.b4(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gt(0)
g.z=new B.hG(A.G,e*0.035)
a0.b4(f,g)
g=d.$1(e*0.016)
g.r=A.nT.gt(0)
a0.b4(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saw(D.ekO.aA(0,h))
a0.b4(f,w)
w=C.a06(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.aZM.gt(0)
a0.b4(w,v)
g=C.a06(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b0W.gt(0)
a0.b4(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saw(D.aIa.aA(0,h))
a0.b4(f,g)
for(g=B.zV(f),w=B.a([],x.X),g=new B.xM(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jH(y.g));--q
g.lc()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bK(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.lc()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.lc()
m=w[q].a45(p*n/o).a
l=D.cBJ[A.o.J(n,4)]
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
g.saw(D.ekX.aA(0,h))
g.z=new B.hG(A.G,e*0.03)
a0.b4(f,g)
g=d.$1(e*0.018)
g.saw(D.ekU.aA(0,h))
a0.b4(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a06(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n3.gt(0)
a0.b4(g,w)
break}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bmF.prototype={
a5(d,e){d.Et(C.a06(this.b,new B.af(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.gef()*0.05,!1)},
ao(d){return d.b!==this.b||d.c!==this.c}}
C.aHZ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aIu.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJN.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.a5G.prototype={}
C.M0.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aB2(B.a([],x.D),B.a([],w),B.a([],w),B.Q(v,u),B.Q(v,x.bo),B.Q(v,u),B.aY(v),null,null)},
gdQ(){return this.c},
gRB(){return this.r},
gRC(){return this.w},
gJZ(){return this.x}}
C.aB2.prototype={
Z(){var w,v=this
v.a0()
$.aS.c_$.push(v)
C.flh()
$.h1e=new C.egw(v)
w=B.bh(null,A.zo,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.GW()},
bo(d){var w,v,u=this
u.bz(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MG(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.GW()}},
iL(d){if(d===A.yy||d===A.qW||d===A.qV||d===A.oB)this.rG()},
p(){var w,v,u,t=this
$.aS.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rG()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.as()
v.O$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bF(0)
v.fU()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.as()
v.O$=0}t.bp_()},
ga8w(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gN_(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a8Z(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQh())return!1
return!0},
jF(){return this.a8Z(null)},
afp(){var w=this.c
if(w==null)return
w.E(x.q).f.P(D.ejc)},
pv(){if(!this.jF())return!1
this.afp()
return!0},
anc(d){var w,v,u,t,s,r=this
if(r.a8Z(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h0l(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yM(){return this.anc(null)},
GW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$GW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aob(k),$async$GW)
case 3:j=e
w=4
return B.b(C.amS(k),$async$GW)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fzL(j,t.bTh())
w=t.ga8w()?5:7
break
case 5:r=t.gN_()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWu(r),$async$GW)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bk(s,new C.ecU())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bk(s,new C.ecV())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xy(m==null?"":m)!=null)continue
C.flt(n,s)
p=!0}t.n(new C.ecW(t,s))
if(p||s.length>J.a9(j))t.rG()
case 1:return B.h(u,v)}})
return B.i($async$GW,v)},
bTh(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kf(w)&&w!==q}if(w)p.push(r)
return p},
ce3(d){var w,v=this,u=d.w
if(!C.kf(u)||u==="hati_kiapo_uongozi")return
v.a7n(d)
w=A.d.be(v.d,new C.eeu(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.N(Date.now(),0,!1)}else A.d.cj(u,0,d.hs())
v.db=!1},
c8t(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kf(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ce3(t)
s=u.d
w=B.S(s)
v=w.k("cR<1,hQ>")
s=B.z(new B.cR(new B.a3(s,new C.eei(),w.k("a3<1>")),new C.eej(),v),v.k("E.E"))
return s},
MG(d){return this.bHD(d)},
rG(){return this.MG(null)},
bHD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c8t()
w=3
return B.b(C.TQ(d==null?t.a.c:d,s),$async$MG)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anc(r)?4:5
break
case 4:w=6
return B.b(C.a4V(r),$async$MG)
case 6:q=r.x
p=A.a.i(q==null?t.gN_():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.ech())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.cj(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MG,v)},
oz(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kf(u.w))===!0?A.hG:A.li
v.at=B.cW(w,new C.efC(v))},
aU2(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acB(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a8(v.ay)},
cqV(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acB(w.e.hs(),w.f,w.r))
w.n(new C.egs(w,v.pop()))
w.oz()},
cda(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acB(w.e.hs(),w.f,w.r))
w.n(new C.ees(w,v.pop()))
w.oz()},
nA(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.egf(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.N(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.N(Date.now(),0,!1)},
Vk(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wr(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.R$=$.as()
u.O$=0}w.a8(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bF(0)
u.fU()}w.a8(0)},
Iy(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cR<1,n>")
t=B.d8(new B.cR(new B.a3(w,new C.egg(),v.k("a3<1>")),new C.egh(),u),u.k("E.E"))
w=this.ch
v=B.a2(w).k("cu<1>")
v=B.z(new B.cu(w,v),v.k("E.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.as()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bF(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cG)continue
p=n.a
m=w.ci(0,p,new C.egi(n))
s.ci(0,p,new C.egj())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Gg(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bd(u.d,new C.ebG(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN_()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hs())}u.nA()
u.oz()},
afJ(d,e){var w,v,u,t,s=this
if(s.jF())return
w=s.Vk(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kf(v.w))===!0
if(u){C.hHT(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hHU(t,w.d+w.f*0.5)}}s.Gg()
s.nA()
s.oz()
if(u&&s.c!=null)s.n(new C.egt())},
crY(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gg()
w.nA()
w.oz()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpy(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hFZ(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b6(p==null?v.e:p)
u=q.bQK(v)
t=q.bQJ(v)
s=B.b6(v.e)
r=v.f
return new C.jt(o,"Class template",p,u,t,s,r==null?null:B.b6(r))}return C.hjC(o)},
bQK(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cG)s=t.w>=28||A.o.D(A.o.ak(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b6(t.Q)}return A.M},
bQJ(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cG&&t.w<28)return B.b6(t.Q)}return A.aI},
abK(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8w()){w.c.E(x.q).f.P(D.ehQ)
return}w.a7n(d)
w.aVd(C.bxy(d))
return}if(C.c8w(v)){w.a7n(d)
w.aVd(d)
return}w.n(new C.edB(w,d))},
anM(){var w,v,u,t,s,r,q=this
q.a_w(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kf(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.ebE(q))
if(r&&q.c!=null){u.toString
q.I7(u,s)}return}q.rG()
q.n(new C.ebF(q))},
aVc(d){this.a7n(d)
this.Y8(d,!0)},
a7n(d){if(!C.kf(d.w))return
C.flt(d,this.d)},
Y8(d,e){return this.c4x(d,e)},
aVd(d){return this.Y8(d,!1)},
c4x(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Y8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bxy(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN_():r)
t.dy.W(0,q.toLowerCase())
C.amT(t.a.c,q)}r=s}else r=d
w=C.c8w(r.w)?3:4
break
case 3:w=5
return B.b(t.a7o(r),$async$Y8)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bd(t.d,new C.edY(l))
o=l.a.hs()
n=C.kf(o.w)&&C.hJ3(o)
t.n(new C.edZ(t,o,p))
if(n){m=A.d.be(t.d,new C.ee_(o))
if(m>=0){t.d[m]=o.hs()
t.rG()}}if(!t.a8Z(l.a))t.Wq()
r=!1
if(t.c!=null)if(!t.a8Z(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anc(r)&&C.fhw(l.a)}else l=r
else l=r
if(l)t.c.E(x.q).f.P(D.eio)
case 1:return B.h(u,v)}})
return B.i($async$Y8,v)},
a7o(d){return this.bFV(d)},
bFV(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.kY(r.c,A.xU),$async$a7o)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kD(!1,r,s.c,s.d,null,A.xU,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7o,v)},
nt(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c8w(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c7V(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nt,v)},
abs(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.edA(),s,null,!0,!0,x.H),$async$abs)
case 3:if(t.c==null){w=1
break}t.anM()
case 1:return B.h(u,v)}})
return B.i($async$abs,v)},
abr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.edx(),s,null,!0,!0,x.H),$async$abr)
case 3:if(t.c==null){w=1
break}t.n(new C.edy())
t.anM()
case 1:return B.h(u,v)}})
return B.i($async$abr,v)},
Wq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Wq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.av(),$async$Wq)
case 3:r=e
if(B.kp(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.an("Bool","ngmy_marriage_hint_seen",!0),$async$Wq)
case 4:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.egs)
case 1:return B.h(u,v)}})
return B.i($async$Wq,v)},
I7(d,e){return this.cet(d,e)},
cet(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I7=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.adP(s,t.gD3(),t.gD2(),!0,e,t.d),$async$I7)
case 9:w=4
break
case 6:w=10
return B.b(C.adQ(s,t.gD3(),t.gD2(),!0,e,t.d),$async$I7)
case 10:w=4
break
case 7:w=11
return B.b(C.adR(s,t.gD3(),t.gD2(),!0,e,t.d),$async$I7)
case 11:w=4
break
case 8:w=12
return B.b(C.adS(s,t.gD3(),t.gD2(),!0,e,t.d),$async$I7)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
bSf(){var w,v,u,t,s=this
if(!s.ga8w()){s.c.E(x.q).f.P(D.egF)
return}w=s.gN_()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.adO(u,t,v,new C.ecQ(s),new C.ecR(s),w)},
abL(){var w=0,v=B.j(x.H),u=this,t,s
var $async$abL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(A.dw,new C.edH(u),s,!0,!0,!1,A.l2,!1,!1,x.N),$async$abL)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.adS(s,u.gD3(),u.gD2(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.adP(s,u.gD3(),u.gD2(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.adQ(s,u.gD3(),u.gD2(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.adR(s,u.gD3(),u.gD2(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bSf()
return B.h(null,v)}})
return B.i($async$abL,v)},
c3F(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aU2()
w=C.cx()
v=C.Ak(t,t,t,t,D.B_,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.edI(u,v))},
a6P(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a6P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hNm(s),$async$a6P)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e7(q.r,new C.ebI())
t.cX(new C.ebJ(t,p,q,r))
s=t.c.E(x.q).f
o=r.r.length
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a6P,v)},
adJ(d,e,f,g){var w=null,v=g?A.du:A.bO,u=B.H(g?A.be:A.ct,A.r,1)
return B.hJ(B.aJ(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Y7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pv()){w=1
break}s=t.ji()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.edT(),q),q.k("E.E"))}o=s!=null&&s.b===D.l1?B.a([s],x.u):p
if(o.length===0){t.c.E(x.q).f.P(D.eiz)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.edU(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Y7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Y7,v)},
ac1(){return this.c4w()},
c4w(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ac1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hN8(s,t.f+1,o),$async$ac1)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kl(s,B.S(s).c)
p.a=A.d.be(o.r,new C.edW(q))
t.cX(new C.edX(p,t,o,q,r))
t.c.E(x.q).f.P(D.eiY)
case 1:return B.h(u,v)}})
return B.i($async$ac1,v)},
ac8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ac8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()||!t.yM()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.eed(),q),q.k("E.E"))
if(p.length===0){t.c.E(x.q).f.P(D.egd)
w=1
break}o=new B.I(p,new C.eee(),B.S(p).k("I<1,P>")).fq(0,new C.eef())
r=B.Q(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.bb(l,A.aY,A.aL),$.as()))}q=t.c
q.toString
w=3
return B.b(B.c1(A.K,new C.eeg(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ac8)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.as()
q.O$=0}if(t.c!=null)t.n(new C.eeh())
case 1:return B.h(u,v)}})
return B.i($async$ac8,v)},
abO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$abO=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.h2j(s,new C.D4(r,q,p,o==null?"":o)),$async$abO)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cX(new C.edJ(m,n))
s=t.c.E(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aee(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abO,v)},
a7h(){return this.bFh()},
bFh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hNl(s,t.f+1,l),$async$a7h)
case 3:r=e
q=$.fD8
$.fD8=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cX(new C.ebZ())
t.c.E(x.q).f.P(D.eg5)
w=1
break}if(!q){s=r.CW
s=C.h1c(l,s==null?"":s,!1)}else s=!1
if(s){t.cX(new C.ec_(t,l,r))
t.c.E(x.q).f.P(D.ejr)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kl(s,B.S(s).c)
s=l.r
m.a=A.d.be(s,new C.ec0(p))
o=s.length
t.cX(new C.ec1(m,t,l,p,r))
n=s.length-o
s=t.c.E(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7h,v)},
aLk(d,e){if(e){this.acB()
return}this.c3F(d,!1)},
bB5(){return this.aLk(null,!1)},
acB(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.bV,new C.een(t),r,!0,!0,!0,A.ol,!1,!1,x.N),$async$acB)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.eeo(t,C.hFY(s).oM()))
case 1:return B.h(u,v)}})
return B.i($async$acB,v)},
cX(d){var w=this
if(w.pv())return
w.Gg()
w.aU2()
w.n(d)
w.Iy()
w.nA()
w.oz()},
a5o(){this.cX(new C.eaD(this,D.m3))},
aMH(){var w=this.gdk()
if(w==null)return
this.cX(new C.ebX(this,w))},
aLV(){var w=this.e
if(w==null||w.r.length<=1)return
this.cX(new C.ebV(this))},
aY1(d,e){if(this.e==null||d===e)return
this.cX(new C.eew(this,d,e))},
Me(d){return this.bD2(d)},
bD2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Me=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN_():s)
w=5
return B.b(C.amR(t.a.c,r),$async$Me)
case 5:t.dy.G(0,r.toLowerCase())
case 4:s=d.a
C.aod(s)
w=6
return B.b(C.aYp(t.a.c,s),$async$Me)
case 6:if(t.c==null){w=1
break}t.n(new C.ebR(t,d))
w=7
return B.b(t.rG(),$async$Me)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Me,v)},
ceq(d,e){var w=this
if(d.z){w.afp()
return}w.n(new C.eev(w,d,e))
w.oz()},
ji(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Up(d){return this.ch.ci(0,d.a,new C.ebH(d))},
apz(d){return this.CW.ci(0,d.a,new C.eci())},
a_w(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Vk(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aS.ae$.d.c
if(u!=null)u.j9()},
b0i(){return this.a_w(!0)},
a_u(d){var w,v,u=this
if(u.pv())return
if(!u.yM())return
w=u.Vk(d)
if(w==null||w.b!==D.cG)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Up(w).saR(0,"")}u.n(new C.egd(u,d))
$.aS.x1$.push(new C.ege(u,d,w))},
b0O(d){var w=this
if(d.b===D.cG&&!w.jF()&&w.yM()){w.a_u(d.a)
return}w.avv(d.a)},
avv(d){var w,v,u,t,s,r=this
if(r.jF())return
w=r.r
if(w!=null&&w!==d){v=r.Vk(w)
if(v!=null&&v.b===D.cG){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.efD(r,s,d))
if(s||d==null){t=$.aS.ae$.d.c
if(t!=null)t.j9()}},
aHH(){this.cX(new C.eaE(this))},
oj(d){return this.bsy(d)},
bsy(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$oj)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eaB(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oj,v)},
TC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F1(78,1920),$async$TC)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.ear(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TC,v)},
Tw(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Tw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(S.Bt(t.a.c),$async$Tw)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gah(s)){t.c.E(x.q).f.P(D.ek0)
w=1
break}w=r.gH(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c1(null,new C.eao(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Tw)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cX(new C.eap(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Tw,v)},
aoA(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bd(w.gdk().z,new C.ebT(v))){w.c.E(x.q).f.P(D.ej1)
return}if(w.w===v)w.a_w(!0)
w.cX(new C.ebU(w,v))},
bzo(){var w=this.ji(),v=w==null
if((v?null:w.b)===D.eP)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cG)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aIo(d,e){var w=this,v=w.ji(),u=w.gdk(),t=w.e
if(t==null)return
w.cX(new C.eb5(w,v,d,e,t,u))},
bu5(d){return this.aIo(d,null)},
a5G(d){return this.bud(d)},
bud(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2N.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nt(),$async$a5G)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.ji()
if(s!=null){r=s.b
if(r===D.cG)t.bu5(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eP){r=d.c
t.aIo(r.j(0.88),r)}w=1
break}t.cX(new C.eba(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a5G,v)},
a5F(d){return this.bub(d)},
bub(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ji()
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
return B.b(t.nt(),$async$a5F)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eb8(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5F,v)},
btW(d){var w=this.gdk()
if(w==null)return
this.cX(new C.eb4(this,w,d))},
Yc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hNh(r),$async$Yc)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nA()
t.n(new C.ee7(t,s))
w=4
return B.b(t.rG(),$async$Yc)
case 4:if(t.c!=null)t.abK(s)
case 1:return B.h(u,v)}})
return B.i($async$Yc,v)},
a79(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a79=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_w(!0)
t.nA()
s=t.c
s.toString
w=3
return B.b(C.Pd(s,q),$async$a79)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a79,v)},
Cf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nA()
t=4
w=7
return B.b(C.aMq(m),$async$Cf)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aLR(o,q,m.b),$async$Cf)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a4(l)
o=r.c
if(o==null){w=1
break}o.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Cf,v)},
DS(d,e){return this.cqq(d,e)},
cqq(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$DS=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pv()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_w(!0)
t.nA()
s=h.a=t.e.hs()}else{r=A.d.be(t.d,new C.egm(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hGT(q?"":s)
o=C.h08(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("a3<1>")
n=B.z(new B.a3(s,new C.egn(h,p),q),q.k("E.E"))
s=h.a.b
w=3
return B.b(t.ck1(n.length,o,s),$async$DS)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hGN(h.a)
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
return B.b(t.ck0(n,o),$async$DS)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kU(t.d,new C.ego(s))
s=h.a.b
w=11
return B.b(t.cjZ(k.b,s),$async$DS)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hGS(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.E(x.q).f.P(D.ekb)
w=1
break}w=12
return B.b(t.ck_(j.a,s,o,j.c),$async$DS)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.egp(h,t,i))
t.oz()
case 1:return B.h(u,v)}})
return B.i($async$DS,v)},
ck1(d,e,f){var w=this.c
w.toString
return B.c1(A.K,new C.efT(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ck0(d,e){var w=this.c
w.toString
return B.c1(A.K,new C.efS(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cjZ(d,e){var w=this.c
w.toString
return B.c1(A.K,new C.efM(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ck_(d,e,f,g){var w=this.c
w.toString
return B.c1(A.K,new C.efO(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a8A(){var w=null
return B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a8B(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.aa(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aE,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.C(B.u(B.a([B.d(g,u,u,u,u,u,u,D.etX,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a1,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aPS(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.Z,w,w,w,A.QW,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aPV(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aE,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.C(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mR,w,w,w),A.dd,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a1,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A0,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ecM(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab)},
bPK(d,e,f,g,h,i){return this.aPV(d,e,f,!1,g,h,i)},
aqS(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.bw,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VC,w,w,w)},
aPU(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.c9,w,new B.b4(B.m(14),A.V),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.mQ,w,w,w),new C.ecL(d,f),v)},
aPT(d,e){return this.aPU(d,e,null)},
Io(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Io=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oz(l,s.c,s.d),$async$Io)
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
for(l=A.d.gaf(o.z),n=new B.hY(l,new C.efE());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7s(l.charCodeAt(0)==0?l:l,r.b),$async$Io)
case 4:l=t.a
w=5
return B.b(B.oy(l.c,l.d),$async$Io)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Io,v)},
GC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oz(q,s.c,s.d),$async$GC)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7s(A.Q.aj(r.ad(),null),r.b+".json"),$async$GC)
case 4:q=t.a
w=5
return B.b(B.oy(q.c,q.d),$async$GC)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GC,v)},
b06(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nA()
u.rG()
w=u.c
w.toString
v=B.eN(new C.egc(u,t),!1,null,x.z)
B.a6(w,!1).ct(v)},
FQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$FQ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.flG(),$async$FQ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hJD(s.a)
q=t.c
q.toString
w=5
return B.b(B.c1(A.aG,new C.eaw(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FQ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cX(new C.eax(t,s))
w=1
break}if(p==="split")t.cX(new C.eay(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FQ,v)},
LD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}w=3
return B.b(t.nt(),$async$LD)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMp(s,null,null),$async$LD)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eaC(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LD,v)},
aXP(d){var w=this.e
if(w==null||!C.kf(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aJE(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMp(s,t==null?null:B.b6(t),u)},
a5m(d){return this.bsp(d)},
bsp(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5m=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yM()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.ekq)
w=1
break}w=3
return B.b(t.aJE(),$async$a5m)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eat(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5m,v)},
adm(d){return this.cdd(d)},
cdd(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yM()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.ejz)
w=1
break}w=3
return B.b(t.aJE(),$async$adm)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.eet(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adm,v)},
c0p(){var w,v,u=this
if(u.jF())return
w=new B.N(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cpw()}},
cpw(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cX(new C.egk(this,r,(A.o.ar(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bQ2(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cX(new C.ecP(this,r,u.d))},
bUt(d){var w
if(this.jF())return!1
w=this.e
if((w==null?null:C.kf(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fig(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kz&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bUu(d){var w
if(this.jF())return!1
w=this.e
if((w==null?null:C.kf(w.w))!==!0)return!0
if(!this.yM())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fig(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kz&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LL(d){return this.buC(d)},
buC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yM()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.eip)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.amV(p),$async$LL)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.E(x.q).f.P(D.ej3)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a4V(r)
w=1
break}t.n(new C.ebe(t,d,o))
t.nA()
$.aS.x1$.push(new C.ebf(t))
case 1:return B.h(u,v)}})
return B.i($async$LL,v)},
TA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$TA)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.by9(),$async$TA)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.eaq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TA,v)},
Ms(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ms=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nt(),$async$Ms)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.ji()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.flx(r),$async$Ms)
case 4:q=e
if(q==null){w=1
break}t.cX(new C.ecg(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Ms,v)},
iz(d){this.cX(new C.eaz(this,d))},
pk(d){return this.btP(d)},
btP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pv()){w=1
break}m=!D.aGJ.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nt(),$async$pk)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FQ()
w=1
break A
case"sign_paper":t.LD()
w=1
break A
case"hd_photo":t.TA()
w=1
break A
case"sharpen":t.Ms()
w=1
break A
case"print":t.Cf()
w=1
break A
case"rotate":s=t.ji()
if(s!=null)t.cX(new C.eaI(s))
w=1
break A
case"text_box":t.aHH()
w=1
break A
case"picture":t.TC()
w=1
break A
case"present":t.b06()
w=1
break A
case"new_slide":t.a5o()
w=1
break A
case"export_json":t.GC()
w=1
break A
case"outline_share":t.Io()
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
case"duplicate_el":s=t.ji()
if(s==null){w=1
break A}t.cX(new C.eaJ(t,s))
w=1
break A
case"delete_el":t.aoA()
w=1
break A
case"bring_fwd":s=t.ji()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.eaK(t,s))
w=1
break A
case"send_back":s=t.ji()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.eaV(t,s))
w=1
break A
case"align_left":s=t.ji()
if(s!=null)t.cX(new C.eaY(s))
w=1
break A
case"align_center":s=t.ji()
if(s!=null)t.cX(new C.eaZ(s))
w=1
break A
case"align_right":s=t.ji()
if(s!=null)t.cX(new C.eb_(s))
w=1
break A
case"grayscale":case"brighten":t.Ms()
w=1
break A
case"flip_h":s=t.ji()
if(s!=null)t.cX(new C.eb0(s))
w=1
break A
case"flip_v":s=t.ji()
if(s!=null)t.cX(new C.eb1(s))
w=1
break A
case"rectangle":t.oj(D.b7)
w=1
break A
case"circle":t.oj(D.ex)
w=1
break A
case"triangle":t.oj(D.jj)
w=1
break A
case"arrow":t.oj(D.B1)
w=1
break A
case"line":case"divider":t.oj(D.fb)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.hY(q,new C.eb2()),o=0;p.C();){n=A.a.fv(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a3(n,new C.eb3(),B.S(n).k("a3<1>")).gH(0)}t.c.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cx()
t.iz(C.iI(A.L,!1,t.gpy().d.l(),A.ay,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.m4,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cx()
t.iz(C.iI(A.L,!1,t.gpy().e.l(),A.ay,22,A.bi,A.a1,0.12,q,"Subtitle goes here",0,D.d7,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iz(C.iI(A.bn,!0,4279310375,A.ay,20,A.bi,A.a1,0.5,C.cx(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.te,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iz(C.iI(A.bn,!1,4279310375,A.ay,20,A.bi,A.a1,0.5,C.cx(),"1. First item\n2. Second item\n3. Third item",0,D.td,0.8,0.1,0.22))
w=1
break A
case"quote":t.iz(C.iI(A.L,!1,4279310375,A.ay,24,A.cJ,A.a1,0.25,C.cx(),'"Insert meaningful quote here."',0,D.d7,0.8,0.1,0.3))
w=1
break A
case"citation":t.iz(C.iI(A.bn,!1,4284773515,A.ay,14,A.bi,A.a1,0.1,C.cx(),"Author, Title (Year). Publisher.",0,D.te,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iz(C.iI(A.dO,!1,4279310375,A.ay,14,A.bi,A.a1,0.08,C.cx(),C.byb(),0,D.d7,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iz(C.iI(A.dO,!1,4279310375,A.ay,13,A.bi,A.a1,0.06,C.cx(),"Page "+(t.f+1),0,D.d7,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cX(new C.eaL(t))
w=1
break A
case"footer_bar":t.cX(new C.eaM(t))
w=1
break A
case"highlight":t.cX(new C.eaN(t))
w=1
break A
case"redact":t.cX(new C.eaO(t))
w=1
break A
case"callout":t.cX(new C.eaP(t))
w=1
break A
case"checkboxes":t.iz(C.iI(A.bn,!1,4279310375,A.ay,20,A.bi,A.a1,0.45,C.cx(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.d7,0.8,0.1,0.2))
w=1
break A
case"table":t.iz(C.iI(A.bn,!1,4279310375,A.ay,16,A.bi,A.a1,0.55,C.cx(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.d7,0.8,0.1,0.18))
w=1
break A
case"memo":t.cX(new C.eaQ(t))
w=1
break A
case"letter":t.iz(C.iI(A.bn,!1,4279179050,A.ay,17,A.bi,A.a1,0.82,C.cx(),C.byb()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iz(C.iI(A.bn,!1,4279310375,A.ay,22,A.bi,A.O,0.76,C.cx(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.te,0.8,0.1,0.12))
w=1
break A
case"toc":t.iz(C.iI(A.bn,!1,4279310375,A.ay,18,A.bi,A.a1,0.76,C.cx(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.d7,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iz(C.iI(A.bn,!1,4279310375,A.ay,16,A.bi,A.a1,0.08,C.cx(),"Signature: _________________________",0,D.d7,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iz(C.iI(A.bn,!1,4279310375,A.ay,16,A.bi,A.a1,0.08,C.cx(),"Initials: ______",0,D.d7,0.3,0.65,0.78))
w=1
break A
case"approved":t.iz(C.iI(A.L,!1,4278556265,A.ay,28,A.bi,A.u,0.12,C.cx(),"APPROVED",0,D.m4,0.32,0.62,0.08))
w=1
break A
case"draft":t.iz(C.iI(A.L,!1,4292617766,A.ay,28,A.bi,A.u,0.12,C.cx(),"DRAFT",0,D.d7,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iz(C.iI(A.L,!1,871318596,A.ay,36,A.bi,A.u,0.12,C.cx(),"CONFIDENTIAL",0,D.d7,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cX(new C.eaR(t))
w=1
break A
case"progress":t.cX(new C.eaS(t))
w=1
break A
case"stars":t.iz(C.iI(A.L,!1,4279310375,A.ay,36,A.bi,A.a1,0.12,C.cx(),"\u2605\u2605\u2605\u2605\u2606",0,D.pl,0.8,0.1,0.4))
w=1
break A
case"equation":t.iz(C.iI(A.L,!1,4279310375,A.ay,32,A.bi,A.O,0.14,C.cx(),"y = mx + b",0,D.d7,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iz(C.iI(A.L,!1,4279310375,A.ay,18,A.bi,A.a1,0.2,C.cx(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.td,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cX(new C.eaT(t))
w=1
break A
case"compare":t.cX(new C.eaU(t))
w=1
break A
case"link_text":t.iz(C.iI(A.bn,!1,4280640491,A.m8,16,A.bi,A.a1,0.1,C.cx(),"https://example.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"phone":t.iz(C.iI(A.bn,!1,4279310375,A.ay,18,A.bi,A.a1,0.1,C.cx(),"(555) 123-4567",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"email":t.iz(C.iI(A.bn,!1,4280640491,A.ay,18,A.bi,A.a1,0.1,C.cx(),"name@email.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cX(new C.eaW(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cX(new C.eaX(t,r))
w=1
break A
case"invoice":t.iz(C.iI(A.bn,!1,4279179050,A.ay,16,A.bi,A.a1,0.84,C.cx(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"resume":t.iz(C.iI(A.bn,!1,4279179050,A.ay,17,A.bi,A.a1,0.84,C.cx(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iz(C.iI(A.bn,!1,4279310375,A.ay,16,A.bi,A.a1,0.88,C.cx(),"MEETING MINUTES\nDate: "+C.byb()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iz(C.iI(A.bn,!1,4279310375,A.ay,17,A.bi,A.a1,0.88,C.cx(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iz(C.iI(A.bn,!1,4279310375,A.ay,15,A.bi,A.a1,0.8,C.cx(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.d7,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pk,v)},
cju(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ebo.q(0,this.z)},
cjt(d){if(this.ji()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b1C(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ca,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hJs(d)
s=o?12:18
r=o?A.I:A.cQ
if(o)if(e)q=f
else q=g?A.ak:A.ai
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.L(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Lo,A.h,p,p,D.Cf,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.B(A.hb,B.aJ(p,new B.am(A.W,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bFx(d){var w,v=null,u=this.ji()
if(u==null)return A.bF
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ai,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.I(D.NP,new C.ecf(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uj(d){return this.bsx(d)},
bsx(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aGF.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nt(),$async$uj)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eaA(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eaw
w=h.e
if(w==null)return h.bwd()
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
p=B.aG(u,A.em,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bV:D.b0v
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQh()}else j=!1
if(j)k.push(new C.a5o(h.a.c,!1,h.e.gb3N(),h.gc0m(),g))
else if(s&&h.e!=null&&!h.jF()&&C.c8w(h.e.w)){j=h.a
k.push(new C.a5o(j.c,j.d,g,h.gc1v(),g))}if(s)k.push(h.bFt(w,t,r))
if(s&&h.jF()){w=t?A.fm:A.jT
j=B.m(14)
i=B.H(A.bf.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bwv,A.aa,B.C(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zv,A.iD,g,g,g))}w=!n
if(w&&!h.jF())k.push(h.bVq(t,r))
if(w&&h.jF())k.push(h.cqr(t))
if(r&&h.ji()!=null&&w&&!h.jF())k.push(h.bVm(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b_D(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b_D(t,!1),g))
i.push(B.C(new B.bE(A.b4,g,g,h.bxt(v,t,!s||p),g),1))
if(h.cju(r)&&u&&s&&!h.jF())i.push(h.c0a(v,t,r))
j.push(B.C(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jF()&&h.cjt(!1))j.push(new B.a7(240,g,h.bI0(t),g))
k.push(B.C(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bVn(t))
return B.cg(g,m,B.br(!1,new B.am(A.W,g,A.a9,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bwd(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.K(p).ax.a===A.H
p=w?A.bV:A.bO
v=r.a.e
u=r.c_q(A.bf,A.p0,new C.ebi(r),r.gc3C(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.C(r.aHq(A.bf,A.hH,"Blank Presentation",new C.ebj(r)),1),A.av,B.C(r.aHq(A.aW,A.x3,"Class Template",new C.ebk(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.m7,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bti(w))
else{t=new B.hv(t,B.S(t).k("hv<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ebl(r,w),x.l))}return B.cg(q,p,B.br(!1,B.cQ(u,q,new B.L(18,12,18,v),q,q,A.af,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bDS(){this.n(new C.ebW(this))
var w=this.c
w.toString
if(B.aG(w,A.bN,x.w).w.a.a<900){w=$.aS.ae$.d.c
if(w!=null)w.j9()}},
ac2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ji()==null){w=1
break}s=t.c
s.toString
s=B.K(s)
r=t.c
r.toString
w=3
return B.b(B.c1(A.K,new C.ee6(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$ac2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ac2,v)},
zI(d,e){return this.cjP(d,e)},
cjP(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zI=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hM(D.To,!0,"Dismiss",j,new C.efF(),new C.efG(d,e),A.i9,!0,x.N),$async$zI)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afp()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQh()){r.afp()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aMq(d),$async$zI)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aLR(j,q,d.b),$async$zI)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a4(i)
j=r.c
if(j==null){w=1
break}j.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.DS(d,!1),$async$zI)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hM(D.To,!0,"Dismiss",j,new C.efH(),new C.efI(d),A.X,!0,x.y),$async$zI)
case 20:if(g===!0)r.Me(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ad5("Rename presentation",d.b),$async$zI)
case 24:l=g
if(l!=null)r.ceq(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.m(0,"id",C.cx())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.efJ(r,k))
r.oz()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zI,v)},
aVQ(d,e){var w=null
return B.bF(!1,D.eQQ,w,w,!0,w,w,e,w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bf,w,w,w,A.as,w,A.lS,w,w,w,w,w,A.k2,w,w))},
bti(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eaF(this,d),null)},
bBZ(d,e,f){var w=new B.I(B.a(d.split(" \u2022 "),x.s),new C.ebK(),x.dv).bZ(0,new C.ebL()),v=B.z(w,w.$ti.k("E.E"))
return new B.B(G.ac4,this.aHZ(v,e,new C.ebM(),f),null)},
aHZ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ez)
t=e.j(g?0.14:0.1)
s=new B.b2(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.ak:A.bA,n,n,n,10),A.v3],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cD(A.b_,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.by(s,s,s,s),n,n,A.n),n,n,n,n,A.nl,n,n,n))
A.d.v(l,u)}return B.eY(A.a_,B.A(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
btg(d,e,f){return this.aHZ(d,e,null,f)},
bC0(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cU7
else if(v==="hati_kuhoweya")w=D.cHy
else{if(v==="hati_kiapo_uongozi")v=D.cvw
else v=C.kf(v)?D.cC2:A.Ns
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.ebP(this,f,d,e,w),null)},
bVn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.ji()
if(i==null||i.b!==D.cG)return A.bF
w=k.Up(i)
v=k.apz(i)
u=A.x.j(0.55)
t=x.p
s=B.br(!1,new B.B(A.zy,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.bc,B.bF(!1,D.eMQ,j,j,!0,j,j,new C.edf(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.H(A.bf.j(0.45),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.C(new B.B(A.h_,B.bQ(new B.B(A.eF,B.aK(j,A.T,!0,j,!0,A.q,j,B.aL(),w,A.bf,j,j,j,j,2,D.bCe,A.z,!0,j,!0,j,!0,v,A.ad,j,j,j,j,j,A.v6,j,j,j,j,j,j,!1,"\u2022",j,new C.edg(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yb,A.am,j,A.Qt,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.b6),j),1)
q=B.m(16)
p=d?A.bh:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.C(B.cf(B.A(B.a([k.t2(G.Kp,j,new C.edh(k,i),d),k.t2(G.WC,j,new C.edi(k,i),d),k.t2(I.ag6,j,new C.edj(k,i),d),k.t2(I.Xm,j,new C.edk(k,i),d),k.t2(k.bte(i.as),j,new C.edl(k,i),d),k.t2(D.ahe,j,new C.edm(k,i),d),k.t2(D.ahd,j,new C.edn(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.b_),1)
m=A.k.M(i.w)
return B.bV(0,B.aD(!1,A.X,!0,j,B.u(B.a([s,r,new B.B(D.be8,B.p(j,B.A(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ai,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d4],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lm,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ab),0,0,0)},
bVm(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.ji()
if(m==null)return A.bF
w=m.b
v=w===D.cG
u=B.m(18)
t=x.O
t=d?B.a([A.bh,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.aa(0,A.G,A.x.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.aZi(A.je,"Edit",new C.ed0(o,m),d,!0))
if(w===D.l1)p.push(o.aZi(A.Lc,"Shape & ring",new C.ed1(o),d,!0))
p.push(o.t2(At.Ev,"Format",new C.ed2(o),d))
if(v)A.d.v(p,B.a([o.t2(G.Kp,n,new C.ed3(o,m),d),o.t2(D.ahe,n,new C.ed4(o,m),d),o.t2(D.ahd,n,new C.ed5(o,m),d)],q))
p.push(A.bc)
p.push(o.chK(A.e4,n,o.gaLT(),d,!0))
p.push(o.t2(A.hs,"Done",new C.ed6(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a8(A.a_,A.a7,A.w,t,n,n),A.n),n,n,n,A.Do,A.lm,n,n,n)},
bte(d){switch(d.a){case 2:return D.Xj
case 1:case 5:return D.Xl
default:return D.Xk}},
bWc(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dO
default:return A.bn}},
avu(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aH
else if(h)w=A.c
else{v=g?A.ak:A.aI
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
return new B.B(A.qa,B.aD(!1,A.X,!0,n,B.aH(!1,v,!1,B.er(new B.B(new B.L(q,8,q,8),B.A(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ab),n)},
t2(d,e,f,g){return this.avu(d,e,f,g,!1,!1)},
aZi(d,e,f,g,h){return this.avu(d,e,f,g,h,!1)},
chK(d,e,f,g,h){return this.avu(d,e,f,g,!1,h)},
bFt(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bh,A.M],m):B.a([A.c,A.mi],m)
w=B.H(e?A.aI:A.pR,A.r,1.2)
v=B.a([new B.aa(0,A.G,A.bf.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a_X(A.eq,"Back",p.gbz8(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.Z,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=""+d.r.length
r=p.f
q=x.p
s=B.a([u,A.d4,B.C(B.u(B.a([t,B.d(s+" slides \xb7 "+(r+1)+" of "+s,o,o,o,o,o,o,B.l(o,o,e?A.c2:A.ai,o,o,o,o,o,o,o,o,10,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.F,o,A.e,A.R,0,A.p),1)],q)
if(!p.jF()){u=p.a_X(A.uA,"Undo",p.ax.length===0?o:p.gcqU(),e)
A.d.v(s,B.a([u,p.a_X(D.bq4,"Redo",p.ay.length===0?o:p.gcd9(),e)],q))}s.push(p.a_X(A.wK,"PDF",new C.ec8(p),e))
s.push(p.a_X(A.hf,"Download as video",new C.ec9(p),e))
if(!p.jF())s.push(B.Ay(o,o,B.V(A.no,e?A.ak:A.bA,o,o,o,o),new C.eca(p),A.J,new C.ecb(p),A.ag,"More",x.N))
s.push(A.d4)
s.push(B.aD(!1,A.X,!0,o,B.aH(!1,B.m(14),!0,B.er(D.dLX,o,new B.o(o,o,o,B.m(14),o,K.EL,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gawg(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ab))
return B.p(o,B.A(s,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),o,o,o,D.be2,D.bj1,o,o,o)},
cqr(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.H(d?A.d3:A.aJ,A.r,1)
return B.p(v,B.cf(B.A(B.a([w.ii(A.rU,"Print",new C.egq(w),d),w.ii(A.wK,"Download PDF",new C.egr(w),d),w.ii(A.p7,"Present",w.gawg(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.b_),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zv,G.adM,v,v,v)},
a_X(d,e,f,g){var w,v=null
if(f==null)w=g?A.be:A.dt
else w=g?A.ak:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bVq(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.H(d?A.d3:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.I(p,new C.edq(r,d),t),t.k("ai.E"))
t.push(new B.B(W.ads,new B.fh(new C.edr(r),q),q))
A.d.v(t,w?B.a([new B.B(R.uf,r.adJ(A.kU,"Ending celebration",r.gc3P(),d),q),new B.B(R.uf,r.adJ(A.Lc,"Logo ring & frame",r.gc4u(),d),q)],x.p):A.fS)
A.d.v(t,w?B.a([new B.B(R.uf,r.adJ(A.np,"Look and feel",r.gc4v(),d),q),new B.B(R.uf,r.adJ(A.pb,"Edit this slide's text",r.gc50(),d),q)],x.p):A.fS)
t.push(new B.B(R.uf,B.hJ(B.aJ(q,B.p(q,D.ea0,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.aa(0,A.G,O.kM.j(0.4),A.J,10)],x.V),D.aja,A.n),q,34,q,q,A.id,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eds(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cf(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bjs,q,q,A.b_)
s=e?8:10
return B.p(q,B.u(B.a([t,B.cf(r.cfw(d),A.q,q,A.z,q,new B.L(8,2,8,s),q,q,A.b_)],x.p),A.al,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zv,q,q,q,q)},
cfw(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cOL[v]
u.a=null
s=u.a=t.b
w.push(e.l8(e.cha(s),t.a,new C.eeP(u,e),a3,D.aGF.q(0,s)))}w.push(e.ii(A.ku,"Notes Slide",new C.eeQ(e),a3))
w.push(e.l8(A.Em,"Quiz",new C.eeR(e),a3,!0))
w.push(e.l8(L.E1,"Worksheet",new C.ef1(e),a3,!0))
w.push(e.l8(A.Ab,"Flashcard",new C.efc(e),a3,!0))
w.push(e.l8(A.Ld,"Lab Report",new C.efn(e),a3,!0))
w.push(e.l8(A.wQ,"Rubric",new C.efu(e),a3,!0))
w.push(e.l8(A.o5,"Minutes",new C.efv(e),a3,!0))
w.push(e.l8(A.p5,"Syllabus",new C.efw(e),a3,!0))
w.push(e.l8(A.Eu,"Timeline",new C.efx(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cPU[v]
w.push(e.l8(r.b,r.c,new C.efy(e,r),a3,!D.aGJ.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ii(A.Ae,a0,e.gaHG(),a3),e.ii(A.rR,"Picture",new C.eeS(e),a3),e.ii(A.x0,"Bio link",new C.eeT(e),a3),e.ii(A.XU,"Table",new C.eeU(e),a3),e.ii(A.Li,"Sticky",new C.eeV(e),a3),e.ii(A.ur,"Divider",new C.eeW(e),a3),e.ii(A.Ew,"Header",new C.eeX(e),a3),e.l8(A0.E9,"Rectangle",new C.eeY(e),a3,!0),e.l8(A.rK,"Circle",new C.eeZ(e),a3,!0),e.l8(A.Xa,"Triangle",new C.ef_(e),a3,!0),e.l8(A.jD,"Arrow",new C.ef0(e),a3,!0),e.l8(D.box,"Parallelogram",new C.ef2(e),a3,!0),e.l8(D.br5,"Hexagon",new C.ef3(e),a3,!0),e.l8(A.ur,"Line",new C.ef4(e),a3,!0),e.l8(A.wK,"PDF",new C.ef5(e),a3,!0),e.l8(O.Y0,"Signature",new C.ef6(e),a3,!0),e.ii(A_.A6,"Quote",new C.ef7(e),a3),e.ii(D.WK,a1,new C.ef8(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bN,x.w).w
u=x.p
t=B.A(B.a([e.aIu("Wide 16:9",D.B_,a3),e.aIu("Short 9:16",D.nx,a3),new B.B(A.hb,B.mY(D.btc,d,D.eJr,d,new C.ef9(e),d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bzn("This slide",!e.Q,a3,new C.efa(e)),A.bp,e.aKE("All slides",e.Q,a3,new C.efb(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bzo()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a1,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.I(D.ZN,new C.efd(e),n),n.k("ai.E"))
n=B.cf(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cQG[v]
j=B.b6(k)
i=new B.ay(k===4294967295?A.dt:A.be,1.5,A.r,-1)
l.push(new B.B(A.hb,B.aJ(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.efe(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.cf(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bzq()
g=B.S(h).k("I<1,B>")
h=B.z(new B.I(h,new C.eff(e,a3),g),g.k("ai.E"))
return new B.a7(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.cf(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_),A.ar,e.bSm(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.ji()
w=e.c
w.toString
w=B.aG(w,A.bN,x.w).w
u=new C.eeO(e)
t=new C.efz(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NP,f.dy,new C.efg(e,u,f),A.aW)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NP,q,new C.efh(e,u),A.bf))
return new B.a7(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ii(A.ku,w,new C.efi(e),a3),e.ii(A.rU,"Print deck",new C.efj(e),a3),e.l8(D.aff,"Export JSON",new C.efk(e),a3,!0),e.ii(A.fv,"Duplicate Slide",e.gaMG(),a3),e.ii(A.e4,a2,e.gaLU(),a3),e.cl6(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.ji()
w=x.p
u=B.a([e.ii(D.WK,a1,new C.efl(e),a3),e.ii(A.fv,"Duplicate",e.gaMG(),a3),e.ii(A.e4,a2,e.gaLU(),a3),e.ii(A.p7,"Present",e.gawg(),a3),e.ii(A.Ad,a0,e.gaHG(),a3),e.ii(A.Ej,"Fit Text",new C.efm(e),a3),e.ii(A.wK,"Download PDF",new C.efo(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ii(A.k_,"Transfer",new C.efp(e),a3))
if(f!=null){w=B.a([A.aa,e.ii(G.Kp,"Bold",new C.efq(e,f),a3),e.ii(G.WC,"Italic",new C.efr(e,f),a3),e.ii(G.aeR,"Underline",new C.efs(e,f),a3),e.ii(A9.Kq,"Bullets",new C.eft(e,f),a3),e.bHK(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bFx(a3))
w.push(e.ii(D.bnc,"Delete",e.gaLT(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aIu(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nx
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4m,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d4,D.bso],v))
return new B.B(A.hb,B.kv(t,t,t,B.A(u,A.m,t,A.e,A.R,0,t,t),t,new C.ebd(this,w,e),s===e,A.bf.j(0.25),t,t,t),t)},
cl6(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.be:A.ct,A.r,1)
u=B.m(8)
t=B.V(A.E_,d?A.aA:A.ai,q,q,q,14)
s=B.aF(q,q,q,q,D.aib,q,q,q,new C.efW(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bg,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.ai1,q,q,q,new C.efX(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.K1,A.mx,q,q,q)},
cha(d){switch(d.a){case 6:return A.Ab
case 7:return A.Em
case 8:return L.E1
case 4:return A.Ew
default:return A.ku}},
bHK(d,e){var w=null,v=B.H(e?A.be:A.ct,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aib,w,w,w,new C.ecl(this,d),w,w,w,w,w,A.c6),s=A.k.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bg,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.ai1,w,w,w,new C.ecm(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wu,A.mx,w,w,w)},
bSm(d){var w=null
return B.Ay(B.BZ(B.V(Ac.WN,d?A.ak:A.bA,w,w,w,16),w,w,D.eOz,w,w,w),w,w,new C.ecT(),A.J,this.gbtV(),A.ch,"Slide layout",x.fO)},
l8(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.H(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dD:A.bf,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Lo,A.h,w,w,D.Cf,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.B(A.hb,B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.er(new B.B(A.h_,B.u(B.a([new B.am(A.W,w,A.a9,A.h,q,w),A.dd,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bA,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab),w)},
ii(d,e,f,g){return this.l8(d,e,f,g,!1)},
b_D(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.af:A.b_
v=B.hF(t,new C.eg7(u,s,e,d),s.r.length,A.ch,t,w,new C.eg8(e),!1)
s=d?A.aG:A.bO
w=B.a([],x.p)
if(e&&!u.jF())w.push(new B.B(A.ch,B.G2(E.aio,new C.eg9(u),B.oj(t,A.bf,t,t,t,t,t,t,t,t,t,t,E.aHl,t,t,t,t),"Add slide"),t))
w.push(B.C(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
bxt(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nx?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.B(new B.L(u,u,u,u),new B.bE(A.b4,v,v,new B.fT(w,B.aJ(v,B.co(new C.ebC(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ebD(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
bxv(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kf(a9.w))===!0,b1=b0&&C.fig(b3),b2=b0&&b3.b===D.kz&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jF())v=!b0||a7.bUu(b3)
else v=!1
if(!a7.jF())u=!b0||a7.bUt(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bf
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fFP(b3))o=a8
else if(p&&!a7.jF())o=a7.gc0o()
else o=a7.jF()?a8:new C.ebq(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jB
i=w&&C.fFP(b3)&&a7.yM()?new C.ebr(a7,b3):a8
h=v&&b3.b===D.cG?new C.ebs(a7,b3):a8
g=u?new C.ebt(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bs
else e=q?A.bQ:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bQ.j(0.08)
else a0=b3.b===D.kz?A.K:a8
if(b1){a1=a7.jF()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bQ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bN,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yM()
a3=b3.b===D.cG
a4=a3?a7.Up(b3):a8
a5=a3?a7.apz(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bN,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ebu(a7,b3):a8
a3=v&&a3?new C.ebv(a7,b3):a8
a6=C.aYl(q,a4,a1,b3,a5,a2,a3,new C.ebw(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.bva,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebx(a7,b3,b4,b5),a8,a8,new C.eby(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jF()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bvP,A.h,a8,a8,new B.o(A.fK,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbQ1(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jF()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bxm,A.h,a8,a8,new B.o(A.bQ,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebz(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cG)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bN,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.at(B.aJ(a8,B.p(a8,D.eWz,A.h,a8,a8,new B.o(A.bf,a8,a8,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kr,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ebA(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.eP(A.B,f,new B.am(A.W,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cv("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aKE(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bf.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bf:A.bG,A.r,1)
if(e)t=A.bf
else t=f?A.aA:A.ai
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d4,B.p(r,D.Lo,A.h,r,r,D.Cf,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.A(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.fZ,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bzn(d,e,f,g){return this.aKE(d,e,f,g,!1)},
c0a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.as()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.bb(v,A.aY,A.aL),$.as()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aN
t=f?A.vz:l
if(f)s=new B.c2(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else s=l
r=f?B.a([new B.aa(0,A.G,A.x.j(0.12),A.tm,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ak:A.bA,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.bc,m.aVQ(e,new C.edu(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.C(B.aK(l,A.T,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b0(4,B.m(10),A.d9),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.edv(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.L(12,w,12,v),l,l,l)},
aNW(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.ji()
if(a2==null)return A.bF
w=new C.ecz(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dJ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.bc,a0.aVQ(a3,a0.gbDR())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.U)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.eJS,B.C(B.ms(a1,a1,a1,u,0.05,new C.ecA(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.eVa,B.C(B.ms(a1,a1,a1,t,0.05,new C.ecB(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cG
if(m)o.push(B.A(B.a([D.eEg,B.C(B.ms(a1,a1,a1,96,10,new C.ecC(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l1
if(l||n===D.kz||n===D.P3)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.ePc,B.C(B.ms(a1,a1,a1,s,0,new C.ecD(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.eWk,B.C(B.ms(a1,a1,a1,r,0,new C.ecE(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.At[j]
i.a=null
g=h.a
i.a=g
k.push(B.kv(a1,a1,a1,new B.w(h.b,a1,A.px,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ecF(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.cd(A.bH,k,A.by,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ao[j]
f.a=null
g=e.a
f.a=g
h.push(B.kv(a1,a1,a1,new B.w(e.b,a1,A.px,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ecG(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.cd(A.bH,h,A.by,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.I(v,new C.ecH(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.cd(A.bH,l,A.by,6,6),A.ac,B.fRu(new C.ecI(w,a2),D.c6Y,B.eM([a2.as],k),!0,a1,k)],p))}if(n===D.eP){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.I(v,new C.ecJ(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.cd(A.bH,m,A.by,0,6)],p))}o.push(A.ac)
o.push(B.dj(D.bx8,D.eR_,new C.ecK(a0,a5),B.bk(A.bR,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cQ(o,a1,a1,q,a1,A.af,a5)
if(a5)return d
q=a3?A.d3:A.c
p=a4?A.vz:a1
if(a4)o=new B.c2(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.aa(0,A.G,A.x.j(0.12),A.tm,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Dp,a1,a1,a1)},
bI0(d){return this.aNW(d,!1,!1,null)},
c_q(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.ecN(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.euO,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bb,B.C(B.u(B.a([w,A.bw,A.dd,r.btg(D.czI,d,B.K(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dO(B.hJ(B.aD(!1,A.X,!0,q,B.aH(!1,q,!0,B.er(D.eeT,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.aa(0,A.G,A.bQ.j(0.4),A.e6,8)],p),D.ajf,A.a6),q,q,q),A.cD,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ab),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.K(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aYF,D.aZ0],v):B.a([A.c,A.jT],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.aa(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a8(A.ax,A.aE,A.w,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aHq(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eam(this,g,d,e,f),null)},
ad5(d,e){return this.cby(d,e)},
cby(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ad5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.as()
q=new B.ao(new B.bb(e,A.aY,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.eer(d,q),p,null,!0,!0,x.N),$async$ad5)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ad5,v)},
O0(d){var w=d.bP()
return""+B.bB(w)+"/"+B.bN(w)+"/"+B.bv(w)}}
C.acB.prototype={}
C.avI.prototype={
S(){return new C.b8E(null,null)}}
C.b8E.prototype={
gcn9(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bB(u)+"/"+B.bN(u)+"/"+B.bv(u),s=v.w
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
w=B.bh(u,D.bcA,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bmU()},
Hq(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.aq(0,new B.hD(w,v,A.co).aq(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.B(D.bhV,B.c4(new B.h3(B.a([u,w],x.dS)),new C.cUv(this),v),v),v,v,v)}}
C.b8S.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.at(new B.B(D.bib,B.aD(!1,A.X,!0,w,B.p(w,B.bw(B.m(22),B.u(B.a([new B.B(D.bhp,B.u(B.a([B.p(w,D.bvV,A.h,w,w,new B.o(A.aH.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aS,D.eSU,A.U,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.evU,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bbE,B.A(B.a([B.C(B.bF(!1,D.eIh,w,w,!0,w,w,new C.cUR(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.mt,w,A.nB,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bh,w,w,w,48,w,w,w,w,w,1),B.C(B.bF(!1,D.eN8,w,w,!0,w,w,new C.cUS(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.aH,w,w,w,w,w,A.mt,w,A.nB,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.So,new B.o(A.aG,w,u,v,D.cA0,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab),w),w,w,w)}}
C.I_.prototype={
S(){return new C.b8D()}}
C.b8D.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.aa(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.h,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.d5(B.aJ(o,B.vX(B.de(o,B.A(B.a([r,A.av,new B.dp(1,A.ck,B.d(q,o,2,A.Z,o,o,o,B.l(o,o,l?A.fM:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b5,A.R,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.rA,o,o,1/0),A.co,A.ja,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cUq(p,d),new C.cUr(p),new C.cUs(p),new C.cUt(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.NE.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.eF,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aE,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.C(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mR,v,v,v),A.bw,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.el,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ab)}}
C.Yh.prototype={
S(){return new C.aB5(D.d7,null,null)}}
C.aB5.prototype={
gWw(){var w,v=this,u=v.w
if(u===$){w=B.bh(null,D.bca,null,1,null,v)
v.w!==$&&B.bH()
v.w=w
u=w}return u},
b01(d){if(!this.a.c.ay)return
this.x=d
this.gWw().ic(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.asF(D.elc)
C.hGt()
v.Pp()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWw().p()
v=w.z
if(v!=null)v.a9(0)
C.asF(D.eld)
C.hGw()
w.bp0()},
cpT(){B.j5()
this.n(new C.eh6())
var w=this.c.E(x.q).f
w.a2_()
if($.bgg)w.P(D.ei5)},
Pp(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cW(B.dB(0,0,0,0,0,A.o.D(C.fPF(u,w),1,120)),new C.egX(v))},
cpy(){var w,v=this
v.n(new C.eh5(v))
if(v.r)v.Pp()
else{w=v.f
if(w!=null)w.a9(0)}},
gaPL(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cjV(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.egY(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cW(A.o0,new C.egZ(w))},
ask(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.egT(u))
u.Pp()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaPL()){u.cjV()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.egU(u,A.o.J(w+1,s)))
u.b01(w)
u.Pp()}},
cae(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.egV(v))
v.Pp()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.egW(v,w,t))
v.b01(w)
v.Pp()}},
cli(d){var w,v=this,u=v.e
if(u===D.ca){u=v.d
u===$&&B.c()
return new B.n6(d,new B.cv(u,x.ac))}w=v.clj(u)
u=v.d
u===$&&B.c()
return B.qk(new B.n6(d,new B.cv(u,x.ac)),w,new C.eh3(),A.b8,A.b8,new C.eh4(v))},
clj(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bcw
case 16:return A.kQ
case 18:return A.nf
default:return A.oW}},
clh(d,e,f){var w,v,u,t=null,s=B.cE(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jb(e,new B.bc(s,new B.bm(A.tn,A.J,w),w.k("bc<bC.T>")),t,!0)
case 3:w=x.K
return B.jb(e,new B.bc(s,new B.bm(A.Pi,A.J,w),w.k("bc<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jb(e,new B.bc(s,new B.bm(A.im,A.J,w),w.k("bc<bC.T>")),t,!0)
case 5:w=x.K
return B.jb(e,new B.bc(s,new B.bm(A.tl,A.J,w),w.k("bc<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(0.82,1,w),w.k("bc<bC.T>")))
case 7:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(1.18,1,w),w.k("bc<bC.T>")))
case 8:return B.c4(s,new C.eh_(s),e)
case 9:return B.c4(s,new C.eh0(s),e)
case 10:return B.c4(s,new C.eh1(s),e)
case 11:return B.c4(s,new C.eh2(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iF(A.B,e,t,new B.bc(s,new B.bm(1.03,1,w),w.k("bc<bC.T>"))),t)
case 14:w=s.gt(0)
v=x.K
return B.jk(B.jb(e,new B.bc(s,new B.bm(A.tn,A.J,v),v.k("bc<bC.T>")),t,!0),A.q,new C.bn9(w,t))
case 15:w=x.K
return B.jb(e,new B.bc(s,new B.bm(A.Pi,A.J,w),w.k("bc<bC.T>")),t,!0)
case 19:w=B.df()
w.md((1-s.gt(0))*2)
v=s.gt(0)
u=s.gt(0)
w.jd(v,u,v,1)
return B.fp(A.B,B.d5(e,s.gt(0)),t,w,!0)
case 20:return B.eP(A.B,(1-s.gt(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jk(new C.als(B.c4(n.gWw(),new C.eh7(n,v,w),m),m),A.q,m)}else{t=B.qU(new C.GZ(w,!0,!1,m))
l=B.b6(w.e)
u=n.cli(B.ec(B.jk(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.fPF(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ov,m,m,m),A.bp,D.by8],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fD,m,m,m)
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
l.push(B.bV(0,new C.Lz(new C.D4(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nx?0.5625:1.7777777777777777
l.push(B.at(new B.fT(r,B.jk(B.tF(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgg){r=B.G2(A.kY,new C.eh8(d),B.oj(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.A(B.a([r,A.aa,B.G2(B.V(n.r?Af.wZ:A.iZ,m,m,m,m,m),n.gcpx(),B.oj(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hi,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fD,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c5,B.p(A.kH,$.bgg?A.bF:s,A.h,m,m,m,m,64,m,m,D.bdi,m,m,150),A.z,!1,m,n.gcpS(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cg(m,A.x,B.aJ(m,new B.am(A.W,m,A.aX,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eh9(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.I6.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.B(E.adf,this.c,w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aRY,w,w,w,w,w,w,w,w)}}
C.bn9.prototype={
jc(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.bdt.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aOS
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.az:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.de(r,B.at(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uH,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hG,r,64,r,r,r,r,64)
return B.aJ(r,new B.a7(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.Z,r,r,r,B.l(r,r,v?A.az:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bds.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d0T.h(0,p)
if(o==null)o=D.cQ_
p=p==="none"
w=p?q:new B.a8(A.a_,A.a7,A.w,o,q,q)
p=p?A.cR.j(0.25):q
v=r.e
u=v?B.H(A.az,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahp:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ei,q,q,52)
return B.aJ(q,new B.a7(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.Z,q,q,q,B.l(q,q,v?A.az:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aGH.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aII.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.bsL.prototype={}
C.aIJ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aYo.prototype={}
C.TR.prototype={
S(){return new C.aB3()},
bac(d){return this.e.$1(d)}}
C.aB3.prototype={
gaZo(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7y(){var w,v
if(this.d==="all")return B.bi(this.a.d,!0,x.I)
w=this.gaZo()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaJk(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gaZo()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb_C(){return A.d.cP(this.ga7y(),0,new C.egD())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.P0()},
P0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aYZ(s.c,s.f),$async$P0)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.egz(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P0,v)},
Hs(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7y()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.flt(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oz(o,q.c,q.f),$async$Hs)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eN(new C.egC(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ct(q),$async$Hs)
case 4:q=t.a
w=5
return B.b(B.oy(q.c,q.f),$async$Hs)
case 5:w=6
return B.b(t.P0(),$async$Hs)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hs,v)},
Pn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hl(o,D.dDU,!0,"NgmySlidesTransferScan",x.N),$async$Pn)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.egA(t))
w=4
return B.b(C.aeE(s),$async$Pn)
case 4:r=e
t.n(new C.egB(t))
o=J.a5(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.E(x.q).f.P(D.egZ)
w=1
break}w=5
return B.b(t.a.bac(r),$async$Pn)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).K(null)
q=t.c.E(x.q).f
p=o.gH(r)
o=o.gH(r)===1?"":"s"
q.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pn,v)},
Hr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7y()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oz(s,r.c,r.f),$async$Hr)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.flI(null,A.d.gI(n),s,t.a.f)}else q=C.flI(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.EQ(q,"ngmy_slides_"+p,!1),$async$Hr)
case 4:o=e
s=t.a
w=5
return B.b(B.oy(s.c,s.f),$async$Hr)
case 5:w=6
return B.b(t.P0(),$async$Hr)
case 6:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Hr,v)},
a07(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a07=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.egE(t))
w=3
return B.b(C.bxV(),$async$a07)
case 3:s=e
t.n(new C.egF(t))
if(s==null||J.ch(s)){w=1
break}w=4
return B.b(t.a.bac(s),$async$a07)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).K(null)
r=t.c.E(x.q).f
q=J.a5(s)
p=q.gH(s)
q=q.gH(s)===1?"":"s"
r.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a07,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.dc:A.bO,k=o.ga7y().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.B,0.5,A.w,n,0,B.a([A.bf.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.cu,m?A.ak:A.ai,n,n,n,n),n,n,n,new C.egI(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.C(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.y7],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.aa(0,A.G,A.bf.j(0.35),A.eI,24)],x.V)
u=B.an(n,B.V(A.p0,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.byC,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.C(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bly],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hJ(B.aJ(A.c5,D.eeV,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc5b(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.W,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.Yv,A.n),n,n,n,n,E.Vp,n,n,1/0),A.dW,o.atg(m,"What to transfer"),A.ac,B.A(B.a([B.C(o.aRS(A.p7,m,new C.egJ(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.C(o.aRS(D.boq,m,new C.egK(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d1,o.atg(m,"Choose presentation"),A.U],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c1,n,n,n))}else A.d.v(v,new B.I(u,new C.egL(o,m),B.S(u).k("I<1,r>")))
A.d.v(w,v)}w.push(A.m7)
w.push(o.atg(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.C(o.amp(A.b3,k,!0,A.j_,m,o.r,o.gc_u(),"Scan on another device","Show QR"),1),A.av,B.C(o.aHr(A.j6,!0,A.iF,m,o.gcgL(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.U)
w.push(B.A(B.a([B.C(o.brP(A.aR,k,A.hf,m,o.r,o.gc_r(),"Download .json","Backup file"),1),A.av,B.C(o.aHr(A.aZ,!0,Ap.x6,m,o.gcs8(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bf.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bf.j(0.28),A.r,1)
s=B.V(A.kV,A.bf.j(0.9),n,n,n,18)
r=o.gaJk()
q=o.gb_C()
p=o.gb_C()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.A(B.a([s,A.av,B.C(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ak:A.bA,n,n,n,n,n,n,n,n,12,n,n,A.a1,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.B(Ab.K2,i,n),B.C(B.cQ(w,n,D.bgB,n,n,A.af,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.SH,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cg(n,l,new B.am(A.W,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acf(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hMz(s,t.d,t.e),$async$acf)
case 2:return B.h(null,v)}})
return B.i($async$acf,v)},
atg(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ai,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aRS(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bf
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.aa(0,A.G,A.bf.j(0.2),A.cv,14)],x.V):s
u=A.bf.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bf,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.er(new B.B(A.bC,B.u(B.a([t,A.U,u,A.bw,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ab)},
bC_(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bf
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.byL,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a_,A.a7,A.w,B.a([A.bf,A.bf.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.Z,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.C(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rK
if(p)r=A.bf
else r=e?A.be:A.dt
return new B.B(A.cI,B.aD(!1,A.X,!0,q,B.aH(!1,o,!0,B.p(q,B.A(B.a([v,A.bb,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.egy(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ab),q)},
amp(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rF,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ahW,A.h,s,s,D.aRL,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d5(B.aD(!1,A.X,!0,s,B.aH(!1,p,!0,B.er(new B.B(E.V2,B.u(B.a([new B.am(A.W,s,A.a9,A.h,u,s),A.ac,v,A.bw,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ab),r)},
aHr(d,e,f,g,h,i,j){return this.amp(d,e,!1,f,g,!1,h,i,j)},
brP(d,e,f,g,h,i,j,k){return this.amp(d,e,!1,f,g,h,i,j,k)}}
C.TS.prototype={
S(){return new C.bgf()}}
C.bgf.prototype={
Z(){this.a0()
this.ab7()},
ab7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ab7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.flI(null,A.d.gI(m),k,r.a.f):C.flI(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kf(A.d.gI(n).w))C.flt(A.d.gI(r.a.d),D.cOa)
n=r.a
m=n.c
n=C.hJI(n.d)
w=7
return B.b(C.flH(p,C.hJN(r.a.d),n,m,q),$async$ab7)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.egM(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.egN(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.K(d).ax.a===A.H,h=i?A.dc:A.bO,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cP(k.a.d,0,new C.egO())
v=B.aF(j,j,j,j,B.V(A.eq,i?A.ak:A.ai,j,j,j,18),j,j,j,new C.egP(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.C(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.y7],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.Yv,A.n),j,j,j,j,E.Vp,j,j,1/0)
q=B.m(24)
s=B.H(A.b3.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3G,A.L,j,j))
else if(k.d==null)r.push(D.dLy)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.aa(0,A.G,A.az.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eIJ,A.ar,B.aJ(j,B.p(j,B.A(B.a([D.bAg,A.av,B.d(m,j,j,j,j,j,j,D.ewg,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bE5,A.n),j,j,j,j,U.Vf,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.egQ(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eMH,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.ph(j,j,!1,l,j,!0,!0,j,!1,D.b9e),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.iq,A.L,j,j))
return B.cg(j,h,B.br(!0,B.u(B.a([new B.B(Ab.K2,v,j),B.C(B.cf(B.u(B.a([t,A.aS,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bFP,A.n),j,j,j,j,A.rE,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adk,j,j,A.af),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aB0.prototype={
S(){return new C.aB1(new B.ao(A.aq,$.as()),B.k5(!0,null,!0,!0,null,null,!1))}}
C.aB1.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.eag(w))
$.aS.x1$.push(new C.eah(w))},
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.e.p()
this.a2()},
aU4(){var w,v=this.c
v.toString
w=C.xy(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).K(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.em,x.w).w,i=B.m(28),h=B.H(A.bf.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.aa(0,A.G,A.bf.j(0.28),A.tk,36),D.a71],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bvY,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.eGa,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a1,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aS9,k,k,k,k,A.wt,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gdZ()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b2(14,14)
if(q)n=A.bf
else n=r?A.bf.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.aa(0,A.G,A.bf.j(0.28),A.J,12)],g):k
t.push(new B.bG(1,A.bq,B.de(A.B,new B.w(p,k,D.eqh,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.c2(m,m,m,m),new B.by(o,o,o,o),n,k,A.n),A.hG,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.GO)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bV(0,B.d5(B.aK(k,A.T,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bCY,A.z,!0,k,!0,k,!1,v,A.ad,k,k,B.a([new B.uJ(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.CA(5,k),new C.bql()],x.aS),k,k,A.aIy,k,5,k,1,k,k,!1,"\u2022",k,new C.eac(l),k,new C.ead(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.ly,k,k,k,k),0),0,0,0)],a1)
d=C.xy(w.a.a.toUpperCase())==null?k:l.gc_v()
return B.at(new B.B(new B.L(24,24,24,24+j.f.d),B.aD(!1,A.X,!0,k,new B.d3(A8.I5,B.p(k,B.bw(e,B.u(B.a([a0,new B.B(D.bh4,B.u(B.a([new B.am(A.W,k,A.a9,A.q,g,k),A.U,D.eEF,A.bv,new B.a7(1/0,50,B.bJ(D.eTJ,d,B.bk(A.bf,A.bh,A.ai,k,A.c,k,k,k,new B.b4(B.m(16),A.V),k,k,k)),k),A.ar,B.bF(!1,A.mT,k,k,!0,k,k,new C.eae(a2),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ab),k),k,k,k)}}
C.bql.prototype={
nU(d,e){var w=e.a.toUpperCase()
return e.cy5(B.h1(A.bm,w.length),w)}}
C.aoe.prototype={
S(){return new C.aB4(B.y5(A.Jm,A.n0,A.t1))}}
C.aB4.prototype={
p(){this.d.p()
this.a2()},
aU3(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.ir(w,d)},
a7r(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ftR(s),$async$a7r)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aU3("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7r,v)},
c_t(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.hJL(w[u])
if(t!=null){this.aU3(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uE,s,s,s,t.gbG1(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eG(B.a([r,B.aF(s,s,s,s,B.V(q?A.rP:Ag.KV,s,s,s,s,s),s,s,s,new C.egS(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.eUS,s,s,s,1,s,!0)
r=B.y4(t.d,A.bM,t.gc_s())
w=B.m(28)
w=B.at(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bf,A.r,3),w,B.a([new B.aa(2,A.G,A.bf.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cg(p,A.x,new B.am(A.W,s,A.aX,A.q,B.a([r,w,B.an(32,B.p(s,D.eJG,A.h,s,s,new B.o(v,s,B.H(A.bf.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iE,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bqx.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([B.p(w,D.bub,A.h,w,w,D.aRU,w,56,w,w,w,w,w,56),A.aS,D.eUz,A.ar,new B.k0(this.c,new C.eRl(),w,w,x.cI),A.aS,new B.k0(this.d,new C.eRm(),w,w,x.cl),A.ac,D.eUw],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A8.I5,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.Vw,D.bhG,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab)}}
C.a5o.prototype={
S(){return new C.bg_(A.bt)},
gd5(){return this.c}}
C.bg_.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XA()
w.d=B.dE(A.fY,new C.e19(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XA(){return this.cdg()},
cdg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e17(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.N(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c8x(p.c),$async$XA)
case 6:r=e
q.a=r==null?A.bt:r
case 4:if(t.c==null){w=1
break}t.n(new C.e18(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XA,v)},
bHS(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
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
return B.p(r,B.A(B.a([B.V(A.E_,v,r,r,r,20),A.av,B.C(B.d("Marriage document session \xb7 "+s.bHS(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bdY,A.iD,r,r,1/0)}}
C.a6f.prototype={
mG(){var w,v,u,t=this
t.wc()
w=t.cx
v=t.c
w.bjB(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pn(B.D(["/S",D.dOb,"/URI",new B.qR(B.Uo(w.as),A.tp,!0)],x.N,u),u))}}
C.a6g.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_1.prototype={
bqW(d,e,f,g,h,i,j,k,l,m){var w=B.eM([D.dMu],x.di)
this.w!==$&&B.aO()
this.w=w},
gcBf(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jA(w,new C.caK(),B.a2(w).k("jA<cj.E,G>")).fq(0,new C.caL())},
ayo(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h_(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rL(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.iX(d.a,d.b))
s.m(0,"/Border",B.rL(D.bHJ))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fP(t.gcBf()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pn(w,x.Y))}}
C.caM.prototype={}
C.a0D.prototype={}
C.afs.prototype={}
C.aNA.prototype={
fM(d){var w,v,u,t,s,r,q=this,p=null
q.kJ(d)
q.Kk(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.b9A(w)
u=x.N
t=x.Y
s=new C.caM(q.d.a,"/Link",w,p,p,p,p,p,B.Q(u,t))
s.bqW(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pn(B.D(["/Type",D.dO9],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6f(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.G(0,r)
v.dx.push(r)}}
C.atD.prototype={}
C.aP4.prototype={
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
u.Jt(t)
u.Qx(0)
u.oc(0,v)
w.fM(d)
u.mJ(0)}}}
var z=a.updateTypes(["au<~>()","~(lk)","R(hQ)","~()","R(ew)","R(nQ)","R(lk)","~(hQ)","R(ew,ew)","I6(Z)","R(nf)","R(kV)","au<R>()","G(G,hQ)","a0<n,@>(hQ)","al<yo>()","n(nf)","R(a5F)","n(lk)","n(v5)","R(Dd)","G(hQ,hQ)","n(ew)","r(ew)","cF(ew)","r(hm)","~(hm)","ew(tV,P,P,P,P,G{fx:n,key:n,rotation:P})","G(nQ,nQ)","R(yo)","R(n,al<yo>)","a0<n,@>(nQ)","nf()","Wn(Z)","ew(n,P,P,P,P,P{align:pt,anim:hm,bullets:R,color:G?,delay:G,fx:n,key:n,style:FY,weight:pM})","ZA(Z)","ew(n,P,P,P,P{anim:hm,delay:G,fx:n,key:n})","au<~>(nQ)","R(m_)","Wl(Z)","Z8(Z)","Z7(Z)","Nu(Z)","Xx(Z)","ew(tV,P,P,P,P,G,n,n{anim:hm,delay:G,rotation:P,stroke:G,strokeWidth:P})","ew(n,P,P,P,P,P,n,n,G)","ew(P,P,n,G{size:P})","r(qG,P,P)","kV()","nQ(a0<@,@>)","~(tM)","Dd()","f5(ew)","r(iL)","X5(Z)","~(D4)","Xq(Z)","G(ew,ew)","ew(ew)","a0<n,@>(ew)","ew(a0<@,@>)","lk(lk)","a0<n,@>(lk)","lk(a0<@,@>)","R(jt)","jt()","n(hQ)","~(al<nQ>)","N(al<hQ>)","N(hQ)","al<hQ>(n?)","aaa(Z,G)","~(R(ew,ew))","aaO(Z)","acr(Z,G)","x(lk,R)","TF(Z)","aaR(Z)","YE(Z)","~(m3)","hQ(hQ)","P(ew)","al<Dz>()","Yh(Z)","hQ()","R(lG)","au<~>(al<hQ>)","r(bq<G,hQ>)","B(jt)","B(Dd)","au<~>(hm,~())","r(al<hm>,hm?,~(hm),x)","ew(n,P,P,P,P,P,G{align:pt,style:FY,weight:pM})","al<ja<m3>>(Z)","ja<m3>(m3)","hQ(a0<@,@>)","TR(Z)","ew(n,P,G)","TS(Z)","r(hQ)","~(lB)","GZ(Z,lk,r?)","G(a6g)","au<al<a0<n,@>>?>()","n(n)","au<ym>({paper:n?,photo:dz?,request:n,template!tU})","au<a5x>({doc!ym,history:al<+(n,n)>,instruction!n,photo:dz?,template!tU})","aaL(Z)"])
C.cxP.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:72}
C.cxQ.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:86}
C.cxR.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gagI(s):16;--w.c}w.b=A.o.dN(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lU(v,t)
w.b=v-A.o.dN(q,t)
w.a=t
return q},
$S:86}
C.cxS.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bJk.prototype={
$1(d){return J.eO(A.dz.gaK(d),d.byteOffset,d.byteLength)},
$S:1655}
C.f99.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.ix(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.ix(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.ix(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.ix(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1656}
C.bTr.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:26}
C.bTs.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:40}
C.bTu.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.foa.prototype={
$1(d){return new C.ZA(this.a,this.b,C.hKE(),null)},
$S:z+35}
C.ePO.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.ePS.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.ePT.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.ePU.prototype={
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
C.ePP.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.ePQ.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.ePR.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.ePJ.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hj,w,w,w)
return B.ei(B.a([B.bF(!1,D.eId,w,w,!0,w,w,new C.ePH(d),w,w),B.bF(!1,D.eHn,w,w,!0,w,w,new C.ePI(d),w,w)],x.p),w,w,D.U0,v,w,w,w,w,D.eV9,w)},
$S:19}
C.ePH.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.ePI.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.ePK.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ePL.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ePY.prototype={
$0(){var w=this.a
return w.n(new C.ePX(w,this.b))},
$S:0}
C.ePX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePN.prototype={
$0(){var w=this.a
return w.n(new C.ePM(w,this.b,this.c))},
$S:0}
C.ePM.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.G(0,v)},
$S:0}
C.ePV.prototype={
$0(){return this.a.ZC(this.b)},
$S:0}
C.ePW.prototype={
$0(){return this.a.Nh(0,this.b)},
$S:0}
C.eQ0.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.eQ1.prototype={
$0(){var w=this.a
return w.n(new C.eQ_(w,this.b))},
$S:0}
C.eQ_.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.I(w,new C.ePZ(),B.S(w).k("I<1,n>")))}},
$S:0}
C.ePZ.prototype={
$1(d){return d.a},
$S:z+66}
C.eWZ.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Y(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fN2(w.b(t.h(0,"doc"))?B.Y(w.a(t.h(0,"doc")),v,u):A.cr)
t=t.h(0,"updatedAt")
u=B.bg(J.k(t==null?"":t))
return new C.nQ(s,v,u==null?new B.N(Date.now(),0,!1):u)},
$S:z+49}
C.eX_.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fbk.prototype={
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
C.fbi.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fbj.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+28}
C.fnI.prototype={
$1(d){return d.ad()},
$S:z+31}
C.f8Q.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fox.prototype={
$1(d){return new C.Wn(this.a,null)},
$S:z+33}
C.cza.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+38}
C.czc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.czf.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czg.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cze())},
$S:11}
C.cze.prototype={
$0(){},
$S:0}
C.czh.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_z(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.be(s,new C.czd(r))
if(p<0)q.cj(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.aeN(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:318}
C.czd.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czi.prototype={
$1(d){},
$S:29}
C.czb.prototype={
$1(d){return new C.Wl(this.b,this.a.gcmy(),null)},
$S:z+39}
C.czj.prototype={
$1(d){return D.f01},
$S:z+42}
C.cz6.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.TM,A.r,1),t=x.p
return B.at(B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([new B.B(D.bht,B.u(B.a([B.p(w,D.btd,A.h,w,w,new B.o(A.aH.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aS,D.eGw,A.U,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.evk,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.B(A.oY,B.A(B.a([B.C(B.dU(D.eMJ,new C.cz4(d),B.d9(w,w,w,w,w,w,w,w,w,E.mo,w,w,A.c9,w,new B.b4(B.m(14),A.V),D.aPh,w,w,w,w)),1),A.av,B.C(B.bJ(D.eS9,new C.cz5(d),B.bk(A.bR,w,w,w,w,w,A.c9,w,new B.b4(B.m(14),A.V),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vD,new B.o(D.a8p,w,u,v,D.cE4,w,A.n),w,w,w,K.Vw,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab),w,w,w)},
$S:1657}
C.cz4.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cz5.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cz7.prototype={
$0(){return J.mX(this.a.d,new C.cz3(this.b))},
$S:0}
C.cz3.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cz2.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.TM,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.by0,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.aja,A.n),t,44,t,t,t,t,t,44),A.bb,B.C(B.u(B.a([B.d(this.a.b.a,t,1,A.Z,t,t,t,D.aK5,t,t,t),A.bw,D.eS5],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.cXq[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auu(u[1],u[2],u[3],new C.cz0(v,d),!1,t))}q.push(A.ar)
q.push(D.bbH)
q.push(A.ar)
q.push(new C.auu(A.e4,"Delete book","Remove it from this device",new C.cz1(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8p,t,r,s,t,t,A.n),t,t,t,A.ry,E.V8,t,t,t),!0,!1,A.ag,!0,!0)},
$S:33}
C.cz0.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.cz1.prototype={
$0(){B.a6(this.a,!1).K("delete")
return null},
$S:0}
C.cz9.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.aa(0,A.G,A.x.j(0.45),A.aAB,12)],x.V)
return B.dO(B.eP(A.B,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.eY(A.B,F.alj(d),A.h,A.dp),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+47}
C.cz8.prototype={
$0(){return this.a.bW2()},
$S:0}
C.cz_.prototype={
$0(){return this.a.aSY(0,this.b)},
$S:0}
C.cyZ.prototype={
$0(){return this.a.BV(this.b)},
$S:0}
C.cyY.prototype={
$0(){return this.a.BV(this.b)},
$S:0}
C.czk.prototype={
$2(d,e){var w=this.a
return w.bvd(J.q(w.d,e))},
$S:42}
C.cyr.prototype={
$0(){var w=this.a
if(w.c!=null)w.zE()},
$S:0}
C.cyq.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aVu("Page "+(v.length+1),"",""))},
$S:0}
C.cyt.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cyB.prototype={
$0(){},
$S:0}
C.cyC.prototype={
$1(d){var w=this.a,v=w.a,u=$.as()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cyu.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cL.gcq().aE(this.c)},
$S:0}
C.cys.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyw.prototype={
$0(){return this.a.Oy(this.b)},
$S:0}
C.cyx.prototype={
$0(){return this.a.Oy(this.b)},
$S:0}
C.cyy.prototype={
$0(){var w=this.a
w.n(new C.cyv(this.b))
w.CI()},
$S:0}
C.cyv.prototype={
$0(){return this.a.c=""},
$S:0}
C.cyA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.cyz(w,d))
w.CI()},
$S:z+50}
C.cyz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyH.prototype={
$2(d,e){if(d)this.a.zE()},
$S:121}
C.cyD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zE(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.E(x.q).f.P(D.ejt)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cyE.prototype={
$0(){return this.a.aRZ(this.b,-1)},
$S:0}
C.cyF.prototype={
$0(){return this.a.aRZ(this.b,1)},
$S:0}
C.cyG.prototype={
$0(){return this.a.bXg(0,this.b)},
$S:0}
C.ffD.prototype={
$1(d){return C.fWJ()},
$S:39}
C.ffE.prototype={
$1(d){return null},
$S:29}
C.f05.prototype={
$1(d){return null},
$S:29}
C.fgy.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:284}
C.fgx.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:241}
C.fgE.prototype={
$1(d){var w=this.a
return C.fFH(d)===w||C.h04(d)===w},
$S:z+4}
C.f_9.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:83}
C.c2X.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffB.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.ffC.prototype={
$1(d){return C.fig(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.faH.prototype={
$1(d){var w=null
return B.br(!0,new B.B(E.ws,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eNi,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,D.eHV,new C.faF(d),B.bk(A.bQ,w,w,w,A.x,w,A.c9,w,w,w,w,w)),A.U,B.ex(A.uD,D.eOt,new C.faG(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faF.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faG.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.faI.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,D.eEx,w,w,!0,w,w,new C.faD(d),w,w),B.bJ(D.eUc,new C.faE(d),w)],x.p),w,w,w,D.eVZ,w,w,w,w,D.eEr,w)},
$S:19}
C.faD.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.faE.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dXb.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dX9.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dXa.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dXc.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dXd.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fgD.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:83}
C.fgz.prototype={
$2$h$w(d,e){var w=null
return new B.bE(A.a_,w,w,B.FZ(A.B,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1658}
C.fgB.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.B,B.d(d,w,w,w,w,w,w,D.ews,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:189}
C.fgC.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b5,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1659}
C.fgA.prototype={
$2$female$size(d,e){var w=null,v=d?D.a9X:this.a,u=B.H(A.hE,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.B,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8B,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1660}
C.frX.prototype={
$1(d){return new C.aaL(this.a,this.b,null)},
$S:z+107}
C.dOA.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.b9x:A.IX,q=B.H(D.iS.j(0.25),A.r,1),p=B.at(B.p(t,t,A.h,t,t,new B.o(A.bQ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ahV,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.aa(0,A.G,D.iS.j(0.35),A.e6,10)],x.V),D.bGo,A.n),t,t,t,t,A.JE,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.B(H.Vl,B.u(B.a([p,A.aB,B.A(B.a([o,A.bb,B.C(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iS,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.evM,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.C(B.ig(!0,t,e,A.z,D.aHB,new C.dOz(w,this.c),v,D.acY,t,A.af,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mY,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dOz.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aaa(w,new C.dOy(this.b,w),null)},
$S:z+71}
C.dOy.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.faL.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.faM.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eQp,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faJ(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ex(A.nr,D.R4,new C.faK(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faJ.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faK.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.faP.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.faQ.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eFr,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faN(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ex(A.nr,D.R4,new C.faO(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faN.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faO.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.faT.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.faU.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eLe,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faR(d),B.bk(D.iS,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ex(A.nr,D.R4,new C.faS(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faR.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faS.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.ftb.prototype={
$1(d){return D.f3h},
$S:z+73}
C.e1c.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b2M:A.IX,s=B.H(A.at.j(0.25),A.r,1),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.at.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bAc,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.aa(0,A.G,A.bQ.j(0.35),A.e6,10)],x.V),D.ajf,A.n),v,v,v,v,A.JE,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.B(H.Vl,B.u(B.a([r,A.aB,B.A(B.a([q,A.bb,B.C(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.IU,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bw,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.etr,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.C(B.ig(!0,v,e,A.z,D.aHB,new C.e1b(this.b),19,D.acY,v,A.af,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mY,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e1b.prototype={
$2(d,e){var w=D.O2[e]
return new C.acr(w,new C.e1a(this.a,w),null)},
$S:z+74}
C.e1a.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fik.prototype={
$0(){return B.fEO(C.hyz(this.a))},
$S:335}
C.fij.prototype={
$0(){var w=C.fFZ(this.a)
return"data:image/png;base64,"+A.cL.gcq().aE(w)},
$S:22}
C.eYo.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.iY(d,e),new B.iY(w,e+v),new B.iY(d+f*14,e),new B.iY(w,e-v)],x.J)
B.a_w(this.a,C.fr(4291404327),v)},
$S:697}
C.ftm.prototype={
$1(d){return new C.TF(this.a,null)},
$S:z+76}
C.e4p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4o())},
$S:27}
C.e4o.prototype={
$0(){},
$S:0}
C.e4q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4n(w,d))},
$S:1662}
C.e4n.prototype={
$0(){return this.a.x=J.f6(A.dz.gaK(this.b))},
$S:0}
C.e4r.prototype={
$1(d){},
$S:29}
C.e45.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e4c.prototype={
$0(){var w=this.a
w.Q=!0
w.as="The editor is writing your newspaper\u2026"},
$S:0}
C.e4d.prototype={
$0(){var w=this.a
A.d.a8(w.ax)
w.z=this.b
w=w.at
A.d.a8(w)
w.push(D.dUS)},
$S:0}
C.e4e.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e47.prototype={
$0(){var w=this.a
w.Q=!0
w.as="Working on it\u2026"
w.at.push(new B.T("you",this.b))
w.f.bG(0,A.c_)},
$S:0}
C.e48.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ax.push(w.z)
w.z=v.b}this.a.at.push(new B.T("ai",v.a))},
$S:0}
C.e49.prototype={
$0(){return this.a.at.push(new B.T("ai",B.t(this.b)))},
$S:0}
C.e4a.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e4b.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcU(v).Q
v.toString
w.lC(v,A.dU,A.ia)}},
$S:8}
C.e46.prototype={
$0(){var w=this.a,v=w.z,u=C.fiZ(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cxe(C.fiZ(t))},
$S:0}
C.e43.prototype={
$0(){var w=this.a
w.Q=!0
w.as="Making your picture\u2026"},
$S:0}
C.e44.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.e4i.prototype={
$0(){return B.a6(this.a,!1).oZ()},
$S:0}
C.e4j.prototype={
$0(){var w=this.a
return w.n(new C.e4h(w))},
$S:0}
C.e4h.prototype={
$0(){var w=this.a
return w.z=w.ax.pop()},
$S:0}
C.e4k.prototype={
$0(){var w=this.a
return w.n(new C.e4g(w,this.b))},
$S:0}
C.e4g.prototype={
$0(){var w=this.b.b
this.a.e.saR(0,w)
return w},
$S:0}
C.e4l.prototype={
$0(){var w=this.a
return w.n(new C.e4f(w,this.b))},
$S:0}
C.e4f.prototype={
$0(){var w=this.b
this.a.f.saR(0,w)
return w},
$S:0}
C.e4m.prototype={
$1(d){return this.a.Xo()},
$S:2}
C.e42.prototype={
$0(){return this.a.bZQ(this.b)},
$S:0}
C.c6B.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cJ(w.h(0,d))):null},
$S:348}
C.c6z.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c6A.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhW.prototype={
beq(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bJj(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.ctY($.tn().jQ(0,"assets/news_fonts/"+s))}w=2
return B.b(r.m9(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.beq(d,e)},
$S:1663}
C.flL.prototype={
$1(d){return d.length!==0},
$S:3}
C.flN.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dA(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:83}
C.flM.prototype={
$1(d){var w,v,u=this,t=null
if(d===0)return!0
w=B.jf(t,t,t,t,B.ds(t,t,t,t,t,t,t,t,t,u.b,u.a.$1(d)),A.v5,A.cn,t,A.eS,A.cm)
w.K4(u.c)
v=w.b.a.c
return v.gbc(v)<=u.d},
$S:57}
C.c6C.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.c,k=A.a.i(l.w)
if(k.length===0)k=A.a.i(l.r).length!==0?"":"NGMY NOTES"
w=A.a.i(l.x)
v=o.d
u=B.H(v,A.r,1.6)
t=o.e
s=o.f
r=t.j(s.ay?0.12:0.07)
q=x.p
p=B.a([],q)
l=A.a.i(l.r)
if(l.length!==0&&w.length===0)p.push(B.C(B.at(B.d("\u201c"+l+"\u201d",n,6,A.Z,n,n,n,m.cnW(s.y,19,v,1.15,A.cJ,A.O),A.L,n,n),n,n,n),1))
else{v=B.a([],q)
q=k.length!==0
if(q)v.push(B.d(k.toUpperCase(),n,1,A.Z,n,n,n,m.a_K("Roboto",12.5,t,1.2,A.u),n,n,n))
if(q)v.push(A.au)
l=w.length===0?l:w
v.push(B.C(B.d(l,n,8,A.Z,n,n,n,m.b0F(s.z,13,1.25),n,n,n),1))
A.d.v(p,v)}return B.p(n,B.jk(B.u(p,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(r,n,u,n,n,n,A.n),n,o.c-12,n,n,A.bk,n,n,o.b)},
$S:135}
C.ftE.prototype={
$1(d){return D.f64},
$S:z+78}
C.eBT.prototype={
$1(d){return this.a.Wb()},
$S:8}
C.eAL.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cL.gcq().aE(v)},
$S:0}
C.eB8.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eBi.prototype={
$1(d){return d>=this.a.length},
$S:57}
C.eAu.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAv.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eAs.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAt.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eB1.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eB2(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jk(B.qU(p>0.2?C.fxF(q,B.a2N(p,p,A.w)):q),A.q,u)],x.p)
w=s.bn
if(w>0.02){v=B.a2N(12,12,A.w)
p.push(B.jk(B.d5(B.qU(C.fxF(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b_
if(r!=null&&s.aS>0)p.push(B.ec(u,B.b6(r).j(s.aS),!0))
r=s.b7
if(r!=null&&s.bE>0){r=B.b6(r).j(s.bE)
w=s.b7
w.toString
p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(D.aNB,1.15,A.w,u,0,B.a([r,B.b6(w).j(0)],x.O),u,u),A.n),A.b6))}r=s.av
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(D.aNl,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.b6))
r=s.aL
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.bd,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aL)],x.O),D.cCP,u),A.n),A.b6))
if(s.aB>0){r=s.k1
p.push(B.an(u,B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.bd,A.w,B.a([A.x.j(0),A.x.j(s.aB),A.x.j(s.aB),A.x.j(0)],x.O),D.cMM,u),A.n),A.b6),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.aZ
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bR(A.B,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cK4,u),A.n),A.b6))
s=s.au
if(s>0)p.push(B.b1(u,u,u,new C.bbm(s,u),A.as))
return new B.am(A.W,u,A.aX,A.q,p,u)},
$S:61}
C.eB2.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fC(r.b,A.B,q,q,A.cj,A.bM,!0,q,!1,q,q),o=r.a,n=o.aRC(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
return B.dO(B.e4(A.B,B.eP(A.B,l,B.fp(A.B,new B.Fv(new B.zU(q,q,n,A.yU),p,q),q,B.uS(s,o.cS?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:598}
C.eBe.prototype={
$0(){return this.a.n(new C.eBd(this.b,this.c))},
$S:0}
C.eBd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBf.prototype={
$1(d){return this.a.n(new C.eBc(this.b,d))},
$S:6}
C.eBc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBh.prototype={
$0(){return this.a.n(new C.eBg(this.b,this.c))},
$S:0}
C.eBg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAk.prototype={
$1(d){return d.c===this.a.x},
$S:z+85}
C.eAl.prototype={
$1(d){var w=this.a
return w.n(w.gcnS())},
$S:2}
C.eAm.prototype={
$1(d){return this.a.n(new C.eAj())},
$S:2}
C.eAj.prototype={
$0(){},
$S:0}
C.eAn.prototype={
$0(){var w=this.a
return w.n(new C.eAi(w,this.b))},
$S:0}
C.eAi.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eAp.prototype={
$2(d,e){return A.av},
$S:34}
C.eAo.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b6(v.e),B.b6(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.de(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b6(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a8(A.b4,A.bd,A.w,r,w,w),A.n),A.hG,w,94,w,w,w,w,70)
return B.aJ(w,new B.a7(70,w,B.u(B.a([r,A.fV,B.d(v.b,w,1,A.Z,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAh(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:73}
C.eAh.prototype={
$0(){var w=this.a
return w.n(new C.eAe(w,this.b))},
$S:0}
C.eAe.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAq.prototype={
$1(d){var w=this.a
return w.n(new C.eAg(w,d))},
$S:9}
C.eAg.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eAr.prototype={
$1(d){var w=this.a
return w.n(new C.eAf(w,d))},
$S:9}
C.eAf.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eBI.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:57}
C.eBP.prototype={
$1(d){var w=this.a
return w.n(new C.eBQ(w,d))},
$S:28}
C.eBQ.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ee(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eBR.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:253}
C.eBJ.prototype={
$0(){var w=this.a
return w.n(new C.eBH(w,this.b))},
$S:0}
C.eBH.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.G(0,v)},
$S:0}
C.eBK.prototype={
$0(){var w=this.a
return w.n(new C.eBG(w,this.b))},
$S:0}
C.eBG.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.r)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eBL.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eBF(v,w.b,w.c,w.d))},
$S:0}
C.eBF.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eBM.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqJ(v))},
$S:0}
C.eBN.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eBO.prototype={
$0(){var w=this.a
return w.n(new C.eBE(w))},
$S:0}
C.eBE.prototype={
$0(){var w=this.a.db
return A.d.hh(w,0,w.length,0)},
$S:0}
C.eBr.prototype={
$1(d){return d.a===this.a.dy},
$S:203}
C.eBs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ar8[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b2(9,9)
m=B.a([B.b6(v.w.e),B.b6(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atd(new B.nF(new B.by(n,n,n,n),A.ap,new B.ky(new B.o(j,j,j,j,j,new B.a8(A.a_,A.a7,A.w,m,j,j),A.n),A.b6,new C.aWf(l,B.b6(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eBq(r,v),2,i))}return B.cd(A.bH,h,A.by,7,7)},
$S:171}
C.eBq.prototype={
$0(){var w=this.b
return w.n(new C.eBl(this.a,w))},
$S:0}
C.eBl.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eBt.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:198}
C.eBw.prototype={
$0(){var w=this.a
return w.n(new C.eBp(w))},
$S:0}
C.eBp.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eBx.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eBy.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eBz.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eBA.prototype={
$0(){var w=this.a
return w.n(new C.eBo(w))},
$S:0}
C.eBo.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eBB.prototype={
$0(){var w=this.a
return w.n(new C.eBn(w))},
$S:0}
C.eBn.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eBC.prototype={
$0(){var w=this.b
return w.n(new C.eBm(this.a,w))},
$S:0}
C.eBm.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eBD.prototype={
$1(d){return this.a.fx=d},
$S:198}
C.eBu.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eBv.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eB5.prototype={
$0(){var w=this.a
return w.n(new C.eB4(w))},
$S:0}
C.eB4.prototype={
$0(){var w=this.a
w.p4=null
w.aY7()},
$S:0}
C.eB6.prototype={
$0(){var w=this.a
return w.n(new C.eB3(w,this.b))},
$S:0}
C.eB3.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eB7.prototype={
$0(){var w=this.a
return w.n(w.gceS())},
$S:0}
C.eAY.prototype={
$0(){var w=this.a
return w.n(new C.eAX(w))},
$S:0}
C.eAX.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eAZ.prototype={
$0(){var w=this.a
return w.n(new C.eAW(w))},
$S:0}
C.eAW.prototype={
$0(){var w=this.a
w.aB=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eB_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cKp[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b2(9,9)
m.push(v.atd(new B.nF(new B.by(p,p,p,p),A.ap,new B.a7(1/0,1/0,new B.Fv(new B.zU(o,o,v.aRC(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.yU),B.fC(u,A.B,140,o,A.cj,A.bM,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eAV(v,s),3,n))}return B.cd(A.bH,m,A.by,10,8)},
$S:171}
C.eAV.prototype={
$0(){var w=this.a
return w.n(new C.eAU(w,this.b))},
$S:0}
C.eAU.prototype={
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
C.eAC.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eAD.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eAE.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eAF.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eAG.prototype={
$1(d){return this.a.av=d},
$S:6}
C.eAH.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eAI.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eAJ.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eAK.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.ezY.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ezZ.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eA_.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eA0.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eA1.prototype={
$0(){var w=this.a
return w.n(new C.ezX(w))},
$S:0}
C.ezX.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eA2.prototype={
$1(d){return this.a.b_=d},
$S:198}
C.eA3.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.eAw.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eAx.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.eAy.prototype={
$1(d){return this.a.au=d},
$S:6}
C.eAz.prototype={
$1(d){return this.a.b7=d},
$S:198}
C.eAA.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.eA7.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eA8.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.eA9.prototype={
$1(d){return this.a.bO=d},
$S:6}
C.eAa.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.eAb.prototype={
$0(){var w=this.a
return w.n(new C.eA6(w))},
$S:0}
C.eA6.prototype={
$0(){var w=this.a
return w.c9=A.k.J(w.c9+90+180,360)-180},
$S:0}
C.eAc.prototype={
$0(){var w=this.a
return w.n(new C.eA5(w))},
$S:0}
C.eA5.prototype={
$0(){var w=this.a
return w.dd=!w.dd},
$S:0}
C.eAd.prototype={
$0(){var w=this.a
return w.n(new C.eA4(w))},
$S:0}
C.eA4.prototype={
$0(){var w=this.a
return w.cS=!w.cS},
$S:0}
C.eB0.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hNb(v,w.p4)},
$S:0}
C.eAT.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.b9O:B.fC(v,A.B,w,w,A.cj,A.bM,!1,w,!1,w,w)
return C.fgn(d.length===0?"rounded":d,u,e)},
$S:127}
C.eAP.prototype={
$0(){var w=this.a
return w.n(new C.eAO(w))},
$S:0}
C.eAO.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eAQ.prototype={
$0(){var w=this.b
return w.n(new C.eAN(this.a,w))},
$S:0}
C.eAN.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eAR.prototype={
$0(){var w=this.b
return w.n(new C.eAM(this.a,w))},
$S:0}
C.eAM.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eAS.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eBb.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.aa(-4,A.G,A.b0.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ep(n.c8B(),n.r))
l.push(new C.GZ(n.cl5(),!1,!1,t))
o=B.bV(0,B.bw(o,new B.ep(new B.am(A.W,t,A.aX,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.W,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c5,B.bQ(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.b6),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eBa(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:217}
C.eBa.prototype={
$1(d){var w=this.a
return w.n(new C.eB9(w,d,this.b,this.c))},
$S:18}
C.eB9.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eBk.prototype={
$0(){var w=this.a
return w.n(new C.eBj(w,this.b))},
$S:0}
C.eBj.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eAB.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).oZ()},
$S:0}
C.eBS.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.u(B.a([w.aTW(),B.C(B.at(w.aWL(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.C(B.u(B.a([B.C(w.aL9(),1),w.aHs()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aTW(),new B.B(A.hr,B.at(s.aWL(u),t,t,t),t),B.C(s.aL9(),1),s.aHs()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:568}
C.fdE.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eg(k,!1,j,A.ay,"",4280640491,i,l,m,"",h,C.bvZ(),null,"","",0,!1,"",0,D.b7,4280172719,2,d,0,0,"",D.ca,D.cG,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+92}
C.fdD.prototype={
$3(d,e,f){var w=this,v=C.bvZ(),u=w.b?A.I:A.cp,t=w.c?A.cJ:A.bi
return C.eg(w.d,!1,f,A.ay,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.b7,4280172719,2,d,0,w.f,w.e,D.ca,D.cG,0.82,0.09,w.a)},
$S:z+97}
C.c7U.prototype={
$1(d){return B.t(d)},
$S:17}
C.fli.prototype={
$0(){return this.a},
$S:z+15}
C.f3y.prototype={
$1(d){return d.a.cT(this.a)},
$S:z+29}
C.f3z.prototype={
$2(d,e){return J.ch(e)},
$S:z+30}
C.flk.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fln.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.flo.prototype={
$0(){return A.d.gI(D.uM)},
$S:z+32}
C.flg.prototype={
$1(d){return d.a},
$S:z+16}
C.flj.prototype={
$1(d){return d.a},
$S:z+16}
C.fjg.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fjh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fji.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fdI.prototype={
$0(){return C.cx()},
$S:22}
C.fdL.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ca,s=u?n:0
return C.eg(j,l,v,A.ay,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.b7,4280172719,2,d,s,0,"",t,D.cG,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,"","",A.bi,A.a1)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,"",j,A.bi,A.a1)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,j,k,A.bi,A.a1)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a1)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.d7,!1,k,l,"",m,A.bi,A.a1)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,j,k,"",l,A.bi,A.a1)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bi,A.a1)},
$S:z+34}
C.fdK.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bi,A.a1,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ca,D.eP,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fdJ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ca,t=v?j:0
return C.eg(A.bn,!1,4279310375,A.ay,"",4280640491,24,A.bi,A.a1,"",h,w,d,v?k:"",l,0,!1,"",0,D.b7,4280172719,2,"",t,0,"",u,D.l1,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pl,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+36}
C.fdH.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fgb.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.fXK.ci(0,A.a.i(s.w).toLowerCase(),new C.fg9(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ci(0,s.r,new C.fga(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bk9(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1665}
C.fg9.prototype={
$0(){return F.aKe(this.a.w)},
$S:204}
C.fga.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.buT("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hq(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:204}
C.eY0.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eY1.prototype={
$1(d){return d.a},
$S:z+18}
C.eY2.prototype={
$1(d){return d.b},
$S:z+19}
C.ftQ.prototype={
$1(d){return D.f6k},
$S:z+40}
C.eHN.prototype={
$0(){return this.a.x=C.hqF(this.b,this.c.b)},
$S:0}
C.eHO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eHL.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:406}
C.eHM.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:406}
C.eHK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c1(A.aG,new C.eHF(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.Gy,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aV(s,7)
if(r.length===0){n.n(new C.eHG(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h2k(o,m.cy0(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eHH(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHF.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eHJ(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWj,A.h,p,p,D.aRF,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ao:D.At,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fgn(v,i.aYJ(h),u),p)))}t=B.lW(1,m,4,10,10,p,A.dJ,!0)
if(!l)return B.br(!0,new B.B(A5.Dv,t,p),!0,!1,A.ag,!0,!0)
s=new C.eHI(i,d)
m=B.aG(d,A.bN,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.EW[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.d3(new B.aV(0,1/0,0,m.a.b*0.85),B.cf(B.u(B.a([D.eJN,A.U,t,A.dW,D.ea7,A.au,D.eTC,A.U,B.lW(1.15,l,3,10,10,p,A.dJ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A5.Dv,p,p,A.af),p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eHJ.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b0.j(0.22):A.c.j(0.04),s=v?A.bD:A.du
return B.aJ(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hd,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eHE(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1666}
C.eHE.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.eHI.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.C(B.p(v,B.bw(w,d.length===0?B.p(v,D.aiq,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e8(new C.Lz(u.Ee(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.au,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,t?A.bJ:A.ak,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eHD(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:127}
C.eHD.prototype={
$0(){B.a6(this.a,!1).K("finale:"+this.b)
return null},
$S:0}
C.eHG.prototype={
$0(){var w=this.a
return w.w=w.w.Ee("")},
$S:0}
C.eHH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eHt.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eHu.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eHw.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eHx.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eHy.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eHz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eHv(w,d))},
$S:2}
C.eHv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eHA.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eI0.prototype={
$0(){return this.a.f.fs()},
$S:0}
C.eI1.prototype={
$0(){var w=this.a
return w.n(new C.eI_(w))},
$S:0}
C.eI_.prototype={
$0(){return this.a.e=null},
$S:0}
C.eI2.prototype={
$0(){var w=this.a
return w.n(new C.eHZ(w))},
$S:0}
C.eHZ.prototype={
$0(){return this.a.x=null},
$S:0}
C.eI4.prototype={
$1(d){var w=this.a
return w.n(new C.eHY(w,d))},
$S:32}
C.eHY.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eI5.prototype={
$1(d){var w=this.a
return w.n(new C.eHX(w,d))},
$S:32}
C.eHX.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eI6.prototype={
$0(){var w=this.a
return w.n(new C.eHW(w))},
$S:0}
C.eHW.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eI7.prototype={
$1(d){var w=this.a
return w.n(new C.eHV(w,d))},
$S:32}
C.eHV.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eI8.prototype={
$1(d){var w=this.a
return w.n(new C.eHU(w,d))},
$S:32}
C.eHU.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eI9.prototype={
$0(){var w=this.a
return w.n(new C.eHT(w))},
$S:0}
C.eHT.prototype={
$0(){var w=this.a
return w.w=w.w.Ee("")},
$S:0}
C.eIa.prototype={
$0(){var w=this.a
return w.n(new C.eHS(w,this.b))},
$S:0}
C.eHS.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eIb.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bGA(D.a_6[v]),null))
return B.cd(A.bH,t,A.by,8,8)},
$S:171}
C.eI3.prototype={
$1(d){var w=this.a
return w.n(new C.eHR(w,d))},
$S:9}
C.eHR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHB.prototype={
$0(){var w=this.a
return w.n(new C.eHC(w,this.b,this.c))},
$S:0}
C.eHC.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.G(0,w)},
$S:0}
C.eHQ.prototype={
$0(){var w=this.a
return w.n(new C.eHP(w,this.b))},
$S:0}
C.eHP.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.ftP.prototype={
$1(d){return new C.Z7(this.a,this.b,null)},
$S:z+41}
C.eHm.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eHn.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eHo.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aA9?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eHp.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eHq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eHl(w,d))},
$S:2}
C.eHl.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHr.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eHs.prototype={
$0(){var w=this.b
if(A.a.c5(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bG(0,new B.bb(w,B.h1(A.bm,w.length),A.aL))},
$S:0}
C.f2O.prototype={
$1(d){return d.a===this.a},
$S:203}
C.e0C.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gate(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cxo:D.cMv
t=D.w4.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.w4.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.aa(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bV(0,B.b1(q,q,q,new C.bdz(n*6.283,q),A.as),0,0,0)
o=o.x
o=B.bV(0,B.bJA(B.eP(A.B,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a8(A.a_,A.a7,A.w,B.a([A.K,D.b1n.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.am(A.W,q,A.a9,A.q,B.a([n,o,B.at(B.u(B.a([B.V(p.a.c?A.ej:A.kX,D.w4,q,q,q,20),A.au,B.eY(A.B,B.nk(A.j1,D.eDZ,new C.e0B()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eAR,A.h,q,q,new B.o(D.w4,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adA,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aE,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.e0B.prototype={
$1(d){return D.bEN.aA(0,d)},
$S:66}
C.flp.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.flq.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:203}
C.flr.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1667}
C.fls.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:13}
C.fll.prototype={
$1(d){return d.a},
$S:z+18}
C.flm.prototype={
$1(d){return d.b},
$S:z+19}
C.ft3.prototype={
$1(d){return new C.Xx(this.a,this.b,null)},
$S:z+43}
C.da7.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.da8.prototype={
$1(d){return d.a===this.a.gaf7()},
$S:z+10}
C.da9.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dac.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dad.prototype={
$0(){var w=this.a
return w.n(new C.dab(w,this.b))},
$S:0}
C.dab.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dae.prototype={
$1(d){var w=this.a
return w.n(new C.daa(w,d))},
$S:9}
C.daa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0A.prototype={
$1$2(d,e,f){var w=B.bi(d,!0,f)
A.d.fN(w,this.a)
return B.dg(w,0,B.dL(e,"count",x.r),B.S(w).c).dz(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1668}
C.eUA.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bi,A.a1,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eP,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ca,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+44}
C.eUC.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eg(A.L,!1,this.b.d,A.ay,"",4280640491,i,A.bi,A.cQ,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.b7,4280172719,2,d,l,0,"",D.m4,D.cG,g,e,f)},
$S:z+45}
C.eUB.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vA(0,"twinkle")
w=t===D.b7?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.m4,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+46}
C.eUz.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.feP.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.feQ.prototype={
$0(){return A.d.gI(D.F4)},
$S:z+48}
C.feR.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eWy.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fkS.prototype={
$1(d){var w=2450411,v=4281908728
C.dm(d,C.dn(4280171146,1,0,D.b7,w,0,0.52,0,0))
C.dm(d,C.dn(v,1,0,D.b7,w,0,0.04,0.48,0))
C.dm(d,C.dn(4294047225,0.38,0,D.b7,w,0,0.48,0.52,0.62))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkT.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dm(d,C.dn(4280172719,0.8,0,D.b7,w,0,0.36,0.58,0.1))
C.dm(d,C.dn(v,0.64,0,D.b7,w,0,0.28,0.64,0.18))
C.dm(d,C.dn(4282090230,0.44,0,D.b7,w,0,0.2,0.7,0.28))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.22,0.08,0.12))
C.dm(d,C.dn(u,0.004,0,D.fb,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fkU.prototype={
$1(d){var w=2450411,v=4279548070
C.dm(d,C.dn(4279080072,0.11,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(4279310375,0.11,0,D.b7,w,0,1,0,0.89))
C.dm(d,C.dn(856528008,0.72,0,D.jk,w,0,0.28,0.72,0.14))
C.dm(d,C.dn(1426953352,0.2,0,D.jk,w,0,0.2,0.78,0.22))
C.dm(d,C.dn(v,0.004,0,D.fb,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fl4.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(4279203438,0.55,0,D.jk,w,0,0.5,0.55,-0.05))
C.dm(d,C.dn(4280171146,0.5,0,D.jk,w,0,0.45,0.62,0.35))
C.dm(d,C.dn(4280640491,0.4,0.3,D.jj,w,0,0.35,0.68,0.55))
C.dm(d,C.dn(571438702,0.12,0,D.b7,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fl9.prototype={
$1(d){var w=4280472558
C.dm(d,C.dn(4279310375,0.75,-0.4,D.jj,2450411,0,0.75,-0.15,0.35))
C.dm(d,C.dn(w,0.55,0,D.b7,2450411,0,0.06,0.42,0.38))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.35,0.08,0.08))
C.dm(d,C.dn(2282478,0.12,0,D.b7,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fla.prototype={
$1(d){var w=2450411,v=4280640491
C.dm(d,C.dn(3423541034,0.48,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(v,0.12,-0.08,D.jk,w,0,1.1,-0.05,0.38))
C.dm(d,C.dn(858088427,0.35,0,D.b7,w,0,0.42,0.55,0.05))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.flb.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cwv[w]
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eP,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a1,A.bi,A.ay,4279310375,A.bn,null,D.b7,v,4294967295,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.ID
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.flc.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lN,A.dD,w/3).l()
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eP,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a1,A.bi,A.ay,4279310375,A.bn,null,D.B1,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.ID
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fld.prototype={
$1(d){var w=4294967295
C.dm(d,C.dn(4280640491,1,0,D.b7,2450411,0,0.42,0,0))
C.dm(d,C.dn(4280110808,1.1,1.57,D.jj,2450411,0,0.18,0.35,-0.05))
C.dm(d,C.dn(w,0.006,0,D.fb,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fle.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dm(d,C.dn(w,0.1,0,D.b7,v,0,1,0,0))
C.dm(d,C.dn(u,0.012,0,D.b7,v,0,1,0,0.1))
C.dm(d,C.dn(u,0.006,0,D.fb,u,3,0.42,0.06,0.14))
C.dm(d,C.dn(403446057,0.68,0,D.jk,v,0,0.22,0.72,0.18))
C.dm(d,C.dn(w,0.1,0,D.b7,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flf.prototype={
$1(d){var w=4278630100
C.dm(d,C.dn(4279310375,1.2,0.15,D.jk,2450411,0,0.55,-0.2,-0.1))
C.dm(d,C.dn(w,1.1,0.15,D.b7,2450411,0,0.08,0.15,-0.05))
C.dm(d,C.dn(1120295,0.18,0,D.b7,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkV.prototype={
$1(d){var w=4292617766
C.dm(d,C.dn(4282714634,0.65,-0.2,D.jj,2450411,0,0.65,-0.1,0.45))
C.dm(d,C.dn(w,0.5,-0.15,D.jj,2450411,0,0.5,0.05,0.55))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fkW.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(4278413729,0.35,3.14,D.jj,w,0,0.45,-0.05,0.7))
C.dm(d,C.dn(4278355143,0.3,3.14,D.jj,w,0,0.4,0.25,0.75))
C.dm(d,C.dn(4279150057,0.32,3.14,D.jj,w,0,0.5,0.55,0.72))
C.dm(d,C.dn(863884284,0.22,0,D.ex,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fkX.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dm(d,C.dn(w,0.14,0,D.b7,v,0,0.14,0.02,0.02))
C.dm(d,C.dn(2282478,0.14,0,D.b7,u,3,0.14,0.84,0.02))
C.dm(d,C.dn(w,0.28,0,D.jk,v,0,0.35,-0.08,0.78))
C.dm(d,C.dn(u,0.22,0.5,D.jj,v,0,0.3,0.72,0.78))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fkY.prototype={
$1(d){var w=4293571336,v=1156231944
C.dm(d,C.dn(1841431,0.92,0,D.b7,w,3,0.92,0.04,0.04))
C.dm(d,C.dn(v,0.15,0,D.jj,2450411,0,0.15,0.02,0.02))
C.dm(d,C.dn(v,0.15,3.14,D.jj,2450411,0,0.15,0.83,0.83))
C.dm(d,C.dn(w,0.004,0,D.fb,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fkZ.prototype={
$1(d){var w=4279080072,v=2450411
C.dm(d,C.dn(w,0.14,0,D.kA,v,0,0.14,0.68,0.18))
C.dm(d,C.dn(4279548070,0.14,0,D.kA,v,0,0.14,0.78,0.28))
C.dm(d,C.dn(4281193663,0.14,0,D.kA,v,0,0.14,0.68,0.38))
C.dm(d,C.dn(4284410580,0.14,0,D.kA,v,0,0.14,0.78,0.48))
C.dm(d,C.dn(4279203438,0.14,0,D.kA,v,0,0.14,0.68,0.58))
C.dm(d,C.dn(w,0.006,0,D.fb,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fl_.prototype={
$1(d){var w=2450411,v=4280640491
C.dm(d,C.dn(3708753706,0.42,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(v,0.06,-0.05,D.jk,w,0,1,0,0.38))
C.dm(d,C.dn(859356664,0.25,0,D.ex,w,0,0.25,0.7,0.08))
C.dm(d,C.dn(v,0.006,0,D.fb,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fl0.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lN,A.dD,w/3).l()
u=Date.now()
t=$.iN
$.iN=t+1
v=new C.ew("design_"+(""+1000*u+"_"+t),D.eP,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a1,A.bi,A.ay,4279310375,A.bn,null,D.B1,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.ID
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dm(d,C.dn(4280172719,0.08,0,D.b7,2450411,0,1,0,0))
C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fl1.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iN
$.iN=u+1
u=new C.ew("design_"+(""+1000*v+"_"+u),D.eP,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a1,A.bi,A.ay,s,A.bn,null,D.fb,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.ID
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dm(d,C.dn(s,0.75,0,D.b7,2450411,0,0.22,0.72,0.1))
C.dm(d,C.dn(872415231,0.16,0,D.b7,2450411,0,0.16,0.75,0.15))
C.dm(d,C.dn(s,0.006,0,D.fb,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fl2.prototype={
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
C.fl3.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iN
$.iN=t+1
t=new C.ew("design_"+(""+1000*u+"_"+t),D.eP,0.55,0.14+v,0.38,0.18,"",24,A.a1,A.bi,A.ay,r,A.bn,null,D.b7,4294967295,4280640491,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.ID
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dH,A.cH,w/2).l()
t=Date.now()
s=$.iN
$.iN=s+1
u=new C.ew("design_"+(""+1000*t+"_"+s),D.eP,0.57,0.16+v,0.06,0.14,"",24,A.a1,A.bi,A.ay,r,A.bn,null,D.b7,u,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.ID
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dm(d,C.dn(4280171146,1,0,D.b7,q,0,0.48,0,0))
C.dm(d,C.dn(4280172719,1.1,1.57,D.jj,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fl5.prototype={
$1(d){var w=2450411
C.dm(d,C.dn(870995980,0.55,0.45,D.jk,w,0,0.55,-0.12,-0.08))
C.dm(d,C.dn(856996006,0.45,0.45,D.jk,w,0,0.45,0.62,-0.05))
C.dm(d,C.dn(16777215,0.38,0.45,D.jk,4293548044,5,0.38,0.52,0.12))
C.dm(d,C.dn(585783308,0.3,0.45,D.jk,w,0,0.3,0.56,0.16))
C.dm(d,C.dn(4279548070,0.06,0,D.b7,w,0,0.16,0.38,0.04))
C.dm(d,C.dn(1156208652,0.28,0,D.ex,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fl6.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dm(d,C.dn(w,1,0,D.b7,v,0,0.07,0,0))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.14))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.28))
C.dm(d,C.dn(u,0.1,0,D.b7,t,1,0.46,0.48,0.42))
C.dm(d,C.dn(s,0.08,0,D.ex,v,0,0.08,0.5,0.16))
C.dm(d,C.dn(w,0.08,0,D.ex,v,0,0.08,0.5,0.3))
C.dm(d,C.dn(4279548070,0.08,0,D.ex,v,0,0.08,0.5,0.44))
C.dm(d,C.dn(16777215,0.32,0.45,D.jk,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fl7.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dm(d,C.dn(4294047225,0.08,0,D.b7,t,2,0.1,0.02,0.06))
C.dm(d,C.dn(s,0.42,0,D.b7,2450411,0,0.36,0.58,0.18))
C.dm(d,C.dn(872415231,0.12,0,D.b7,2450411,0,0.28,0.62,0.24))
C.dm(d,C.dn(16777215,0.28,0,D.ex,s,4,0.32,0,0.72))
C.dm(d,C.dn(r,0.006,0,D.fb,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iN
$.iN=u+1
u=new C.ew("design_"+(""+1000*v+"_"+u),D.eP,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a1,A.bi,A.ay,4279310375,A.bn,null,D.ex,16777215,t,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.ID
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fl8.prototype={
$1(d){var w=2450411,v=4279548070
C.dm(d,C.dn(3423541034,0.55,0,D.b7,w,0,1,0,0))
C.dm(d,C.dn(4009754623,0.56,0.45,D.jk,w,0,0.56,0.22,0.18))
C.dm(d,C.dn(3439329279,0.44,0.45,D.jk,w,0,0.44,0.28,0.24))
C.dm(d,C.dn(v,0.07,0,D.b7,w,0,0.22,0.34,0.62))
C.dm(d,C.dn(v,1,0,D.b7,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fcE.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fcF.prototype={
$0(){return A.d.gI($.bzq())},
$S:z+51}
C.f2B.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f2A.prototype={
$1(d){return C.hxy(d,this.a,this.b)},
$S:z+52}
C.fly.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.uS(1.0375,1.01875,1)
return new B.fG(v,u,new C.aP4(B.hnH(A.tL,C.hxB(w.c,w.d,v,u),t)))},
$S:409}
C.dKk.prototype={
$1(d){var w=d.a/1e6
this.a.d.st(0,w)
return w},
$S:8}
C.dKj.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bQ(w,new B.o(w,w,w,w,w,new B.bR(A.HL,1.2,A.w,w,0,u.d,w,w),A.n),A.b6),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jk(new B.am(A.W,w,A.aX,A.q,B.a([t,new B.ep(B.b1(w,w,w,new C.bas(u.a,r,q,r),A.as),w),B.at(new B.k0(r,new C.dKi(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:452}
C.dKi.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aq(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.aa(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fC(i,A.B,r,r,A.cj,A.bM,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fQ(A.B,0,6.283185307179586,A.w,t,r,new B.mj(e*0.8)),A.a6),r,w,r,r,new B.L(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bmM(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cI(i[1].j(0.6),A.J,t)],x.S),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d5(B.dO(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a8(A.a_,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaG_(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a1,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d5(B.e4(A.B,new B.B(new B.L(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:106}
C.eGA.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:66}
C.c2z.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.aa(0,A.G,A.hn.j(0.4),A.J,14)],x.V):v
w=B.de(v,B.bw(B.m(12),d,A.ap),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aJ(v,new B.a7(112,v,B.u(B.a([w,A.fV,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,g?A.bJ:A.ak,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1669}
C.c2A.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ee(""))},
$S:0}
C.c2B.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e8(new C.Lz(v.Ee(u),!0,!1,null),!0,null),d.b,new C.c2C(w,this.c,d),v.a===u)},
$S:z+53}
C.c2C.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h2k(u.b,t.c.Ee(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.frH.prototype={
$1(d){return new C.X5(this.a,null)},
$S:z+54}
C.d_E.prototype={
$0(){var w=this.a
w.d=w.guI().b5q("data:"+this.b+";base64,"+A.cL.gcq().aE(this.c));++w.r},
$S:0}
C.d_J.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.d_K.prototype={
$0(){var w=this.a
return w.n(new C.d_I(w))},
$S:0}
C.d_I.prototype={
$0(){return this.a.r++},
$S:0}
C.d_L.prototype={
$1(d){var w=this.a
return w.n(new C.d_H(w,d))},
$S:2}
C.d_H.prototype={
$0(){var w=this.a
return w.d=w.guI().azf(this.b)},
$S:0}
C.d_M.prototype={
$0(){var w=this.a
return w.n(new C.d_G(w))},
$S:0}
C.d_G.prototype={
$0(){var w=this.a
return w.d=w.guI().b5q("")},
$S:0}
C.d_N.prototype={
$1(d){var w=this.a
return w.n(new C.d_F(w,d))},
$S:2}
C.d_F.prototype={
$0(){var w=this.a
return w.d=w.guI().b5x(this.b)},
$S:0}
C.d_O.prototype={
$0(){var w=this.a
w=w.guI().b5x(w.gatf().a.a)
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.frG.prototype={
$1(d){var w={}
w.a=this.a
return new B.eh(new C.frF(w),null)},
$S:21}
C.frF.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bN,x.w).w.a.b*0.85),B.cf(B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.eQZ,A.au,D.eRd,A.aB,new C.aWc(v.a,new C.frE(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.af),w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSa,w,w,w,w,A.JN,w,w,w)},
$S:157}
C.frE.prototype={
$1(d){this.b.$1(new C.frD(this.a,d))
B.a6(this.c,!1).K(d)},
$S:z+55}
C.frD.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.ftO.prototype={
$1(d){return D.f2c},
$S:z+56}
C.d67.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.d68.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).K(this.b)
return null},
$S:0}
C.d69.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).K(v)}},
$S:0}
C.fid.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:66}
C.d_l.prototype={
$3(d,e,f){var w,v=this,u=new B.b_($.a1().r,A.aw,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.N(new B.bj(t+r*1.2,o))
u.N(new B.dk(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.N(new B.dk(w,q+p,w,q+p*1.2))
u.N(new B.BJ(B.c0(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.b4(u,v.d)
s.b4(u,v.e)
p=B.U()
p.r=B.aq(v.a.d,A.c,0.6).gt(0)
s.az(new B.v(w,o),2.2,p)},
$S:1670}
C.fih.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+57}
C.faX.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.faY.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eB5,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aS,B.dj(D.ED,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faV(d),B.bk(A.bQ,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ex(A.nr,D.R4,new C.faW(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,P.vA,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faV.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faW.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.c7S.prototype={
$1(d){return d.hs()},
$S:z+58}
C.c7T.prototype={
$1(d){return d.ad()},
$S:z+59}
C.c7R.prototype={
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
u=C.htA(b2.h(0,"type"))
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
n=A.asF[A.o.D(b4,0,8)]
m=D.cz8[A.o.D(w,0,1)]
l=C.hx3(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.M(k)
if(k==null)k=4279310375
j=A.apF[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hzJ(b2.h(0,"shape"))
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
a3=C.fYL(b2.h(0,"textTransition"))
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
C.c7H.prototype={
$1(d){return d.hs()},
$S:z+61}
C.c7I.prototype={
$1(d){return d.ad()},
$S:z+62}
C.c7E.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7F.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7G.prototype={
$1(d){return C.fPG(B.Y(d,x.N,x.z))},
$S:z+63}
C.c88.prototype={
$1(d){return d.a===this.a},
$S:z+64}
C.c89.prototype={
$0(){return A.d.gI(D.ZN)},
$S:z+65}
C.c83.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c82.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c7Z.prototype={
$1(d){return new B.I(d,new C.c8_(),B.S(d).k("I<1,N>")).fq(0,new C.c80())},
$S:z+68}
C.c8_.prototype={
$1(d){return d.f},
$S:z+69}
C.c80.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:698}
C.c81.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hjz(d)},
$S:z+70}
C.c84.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.c85.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c86.prototype={
$1(d){return d.ad()},
$S:z+14}
C.fiQ.prototype={
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
C.fiM.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fiN.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fiO.prototype={
$2(d,e){var w
if(d.b===D.cG){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fiP.prototype={
$2(d,e){return d.b===D.eP&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c7N.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hI4(b2,b3),b5=B.a2(b4).k("bf<2>")
b5=B.cy(new B.bf(b4,b5),new C.c7M(),b5.k("E.E"),x.N)
w=B.d8(b5,B.a2(b5).k("E.E"))
b1=b1.e
v=A.oR.aq(0,A.k.D(b1,0,1))
u=new C.c7O()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c7P(a9,b7.d)
r=new C.c7Q(b0)
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
if(a2===D.eP){a4=i.hs()
a4.ay=B.aq(B.b6(l.ay),B.b6(i.ay),v).l()
a4.ch=B.aq(B.b6(l.ch),B.b6(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l1&&l.at==i.at?r.$1(i):new B.am(A.W,a8,A.aX,A.q,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iv(B.vo(a3),a8,A.B,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ca)a7=D.m4
p.push(s.$5(i.c,i.d,i.e,i.f,C.h_U(a7,a6,r.$1(i))))}}return B.bQ(new B.am(A.W,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a_,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.b6)},
$S:424}
C.c7M.prototype={
$1(d){return d.a},
$S:z+22}
C.c7O.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b6(w)},
$S:z+75}
C.c7P.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1673}
C.c7Q.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5n(v,C.aYl(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dxF.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d4(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:43}
C.c7W.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c7X.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.flF.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:283}
C.fkM.prototype={
$1(d){return new C.aaR(this.a,this.b,null)},
$S:z+77}
C.eai.prototype={
$0(){return this.a.O_(this.b,C.hLo(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eaj.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O_(this.b,C.hLq(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eak.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O_(this.b,C.hLp(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eal.prototype={
$0(){X.h_E()
B.a6(this.a,!1).K(null)},
$S:0}
C.c7L.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1674}
C.c7K.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.mV),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lt(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bM:A.dp
return B.fC(t,A.B,o,new C.c7J(),A.cj,w,!0,u,!1,new B.cv("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1675}
C.c7J.prototype={
$3(d,e,f){return D.a7x},
$S:210}
C.fiL.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b6(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.b6(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b6(r.e):t
r=r.z
r=B.dg(r,0,B.dL(6,"count",x.r),B.S(r).c)
u=r.$ti.k("I<ai.E,cF>")
r=B.z(new B.I(r,new C.fiK(e.b,e.d),u),u.k("ai.E"))
return B.bw(s,B.bQ(new B.am(A.W,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.b6),A.ap)},
$S:1676}
C.fiK.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYl(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f4U.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cW(r.b,new C.f4S(d))
w=B.aG(d,A.bN,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.aa(0,A.G,A.x.j(0.45),A.fI,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.at(B.aD(!1,A.X,!0,q,B.p(q,B.u(B.a([B.A(B.a([B.C(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l4,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bF(!1,A.yi,q,q,!0,q,q,new C.f4T(p,d),q,B.fn(q,q,A.bf,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JM,q,new B.b4(B.m(12),A.V),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aV(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fE,A.zD,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ab),q,q,q),q)},
$C:"$3",
$R:3,
$S:261}
C.f4S.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pH())B.a6(w,!0).eC()},
$S:0}
C.f4T.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a6(this.b,!0).eC()},
$S:0}
C.eOU.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),1.3-r*0.3,t,t)],x.p),t)
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
s.jv(r*3.14159)
return B.fp(A.B,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jv(r*0.5)
return B.fp(A.B,B.d5(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fp(A.a7,B.d5(u.b,r),t,s,!0)
case 12:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d5(B.e4(A.B,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.jk(u.b,A.q,new C.aG1(r,t))],x.p),t)
case 15:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.jk(u.b,A.q,new C.aG1(1-r,t))],x.p),t)
case 16:v=D.aVn.aq(0,r)
return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d5(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d5(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.df()
s.md(r*6.28)
s.jd(r,r,r,1)
return B.fp(A.B,u.b,t,s,!0)
case 20:return B.eP(A.B,(r-0.5)*0.35,new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t),t)}},
$S:59}
C.dIx.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIw.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIv.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h_U(v,w,e)},
$S:59}
C.c7D.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b6(v.e)
t=v.f
t.toString
t=new B.a8(A.a_,A.a7,A.w,B.a([u,B.b6(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b6(v.e):r
v=v.z
s=B.S(v).k("I<1,cF>")
q=B.z(new B.I(v,new C.c7C(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bQ(new B.am(A.W,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.b6)},
$S:424}
C.c7C.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ca?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5n(m,new C.SU(d,C.aYl(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cY_.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cXZ(w))},
$S:11}
C.cXZ.prototype={
$0(){return this.a.d++},
$S:0}
C.e0i.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.J(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aGH.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hHO(w,t,s,e)}switch(s.a.c){case"float3d":s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dX(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jv(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jd(w,w,w,1)
return B.fp(A.B,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.e4(A.B,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d5(B.e4(A.B,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eEk.prototype={
$1(d){var w
$.a1()
w=B.U()
w.b=A.aj
w.c=d
w.e=A.fj
return w},
$S:1677}
C.fgo.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b1(r,r,r,new C.bmF(u,t,r),A.as))
w.push(B.og(s.d,A.ap,new C.baZ(u,t,r)))
if(!p)w.push(B.b1(r,r,r,new C.blI(u,q,t,r),A.as))
return B.at(new B.a7(v.a,v.b,new B.am(A.W,r,A.aX,A.q,w,r),r),r,r,r)},
$S:248}
C.f7E.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:284}
C.egw.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Bt(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gah(s)){u=null
w=1
break}u=r.dP(s,new C.egu(),new C.egv(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1678}
C.egu.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:187}
C.egv.prototype={
$0(){return J.fm(this.a)},
$S:1680}
C.ecU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ecV.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ecW.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eeu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eei.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eej.prototype={
$1(d){return d.hs()},
$S:z+80}
C.ech.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.efC.prototype={
$0(){this.a.rG()},
$S:0}
C.egs.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nA()
w.Iy()},
$S:0}
C.ees.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nA()
w.Iy()},
$S:0}
C.egf.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.egg.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.egh.prototype={
$1(d){return d.a},
$S:z+22}
C.egi.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aY,A.aL),$.as())},
$S:255}
C.egj.prototype={
$0(){return B.k5(!0,null,!0,!0,null,null,!1)},
$S:700}
C.ebG.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.egt.prototype={
$0(){},
$S:0}
C.edB.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()
w.Iy()},
$S:0}
C.ebE.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wr()},
$S:0}
C.ebF.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wr()},
$S:0}
C.edY.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.edZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()
w.Iy()
w.z="Home"},
$S:0}
C.ee_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.edA.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.R3,w,w,!0,w,w,new C.edz(d),w,w)],x.p),w,w,w,D.eSB,w,w,w,w,D.eBu,w)},
$S:19}
C.edz.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edx.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.R3,w,w,!0,w,w,new C.edw(d),w,w)],x.p),w,w,w,D.eFa,w,w,w,w,D.eD7,w)},
$S:19}
C.edw.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edy.prototype={
$0(){},
$S:0}
C.ecQ.prototype={
$1(d){return this.a.aVc(C.bxy(d))},
$S:z+7}
C.ecR.prototype={
$1(d){return this.a.abK(C.bxy(d))},
$S:z+7}
C.edH.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eSF,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.NE(A.up,D.ar1,"HATI YA KUHOWA","Hati ya mahari",new C.edC(d),w),A.U,new C.NE(A.fQ,D.cKq,"HATI YA KUHOWESHA","Hati ya kupokea",new C.edD(d),w),A.U,new C.NE(A.hJ,D.cxs,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.edE(d),w),A.U,new C.NE(A.hK,D.cvV,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.edF(d),w)],v)
if(this.a.ga8w())A.d.v(u,B.a([A.U,new C.NE(A.iG,D.che,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.edG(d),w)],v))
return B.br(!0,B.cf(B.u(u,A.al,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.ws,w,w,A.af),!0,!1,A.ag,!0,!0)},
$S:33}
C.edC.prototype={
$0(){B.a6(this.a,!1).K("hati_kuhowa")
return null},
$S:0}
C.edD.prototype={
$0(){B.a6(this.a,!1).K("hati_kuhoweya")
return null},
$S:0}
C.edE.prototype={
$0(){B.a6(this.a,!1).K("marriage_agreement")
return null},
$S:0}
C.edF.prototype={
$0(){B.a6(this.a,!1).K("hati_malipo_awamu")
return null},
$S:0}
C.edG.prototype={
$0(){B.a6(this.a,!1).K("hati_kiapo_uongozi")
return null},
$S:0}
C.edI.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()},
$S:0}
C.ebI.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ebJ.prototype={
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
C.edT.prototype={
$1(d){return d.b===D.l1},
$S:z+4}
C.edU.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.eh(new C.edR(w,this.a,v),null)},
$S:21}
C.edR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.edS(p,o,a3,n),l=B.K(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.ai,i=l?A.bh:A.bO,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.A(B.a([B.C(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bw,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.cu,j,q,q,q,q),q,q,q,new C.edN(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.At[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdt(t,u.b,p.a===t,i,k,new C.edO(v,m),q))}a1=B.cd(A.bH,a1,A.by,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ao[w]
s.a=null
t=s.a=r.a
u.push(new C.bds(t,r.b,p.b===t,k,j,new C.edP(s,m),q))}return B.br(!0,B.p(q,B.cf(B.u(B.a([d,A.aS,a0,A.U,a1,A.bv,v,A.U,B.cd(A.bH,u,A.by,12,12),A.bv,new B.a7(1/0,48,B.ex(D.bBP,D.eUT,new C.edQ(o,n),B.d9(q,q,q,q,q,q,q,q,q,A.az,q,q,q,q,new B.b4(B.m(16),A.V),D.aPO,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.af),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.ry,D.bge,q,q,q),!0,!1,A.ag,!0,!0)},
$S:124}
C.edS.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.edL(w.a,d,e))
w.b.cX(new C.edM(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1683}
C.edL.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.edM.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.edN.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edO.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.edP.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.edQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F1(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cX(new C.edK(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edK.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.edW.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.edX.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.edV(t.d))
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
s.wr()},
$S:0}
C.edV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eed.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.eee.prototype={
$1(d){return d.w},
$S:z+81}
C.eef.prototype={
$2(d,e){return d>e?d:e},
$S:94}
C.eeg.prototype={
$1(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.ai,r=u?A.bh:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bN,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.A(B.a([B.p(v,D.bvL,A.h,v,v,D.aR7,v,38,v,v,v,v,v,38),A.bb,B.C(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.cu,s,v,v,v,v),v,v,v,new C.eea(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dp(1,A.ck,B.hF(v,new C.eeb(m,k,w.c,s,w.d,t,r),k.length,A.hb,v,A.af,new C.eec(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aV(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.ry,A.Vg,v,v,v),!0,!1,A.ag,!0,!0)},
$S:33}
C.eea.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.eec.prototype={
$2(d,e){return A.ac},
$S:34}
C.eeb.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.az:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cp
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.byK,q,q,q,new C.ee8(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.B(D.bio,n,q),B.aK(q,A.T,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b0(4,B.m(16),A.V),q,A.eF,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b0(4,B.m(16),D.aPt),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ad,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.ee9(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1684}
C.ee8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hNk(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o4(q.a,o,n,s)
r.bG(0,new B.bb(m,B.h1(A.bm,o+s.length),A.aL))
l.afJ(k,m)
l.oz()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ee9.prototype={
$1(d){var w=this.a
w.afJ(this.b.a,d)
w.oz()},
$S:2}
C.eeh.prototype={
$0(){},
$S:0}
C.edJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ebZ.prototype={
$0(){},
$S:0}
C.ec_.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h1c(this.b,w,!0)
w=this.a
w.r=null
w.wr()},
$S:0}
C.ec0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ec1.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.ebY(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wr()},
$S:0}
C.ebY.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.een.prototype={
$1(d){return B.p6(new C.eem(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:136}
C.eem.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.B(E.adi,B.u(B.a([D.eQr,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.C(B.ig(!0,w,e,A.z,D.efs,new C.eel(this.a,this.b),20,A.rC,w,A.af,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:427}
C.eel.prototype={
$2(d,e){var w=null,v=D.F4[e],u=C.hju(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fu,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.ea3,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nl,w,w,w)],m))
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.bc,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a8(A.a_,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eek(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab)},
$S:75}
C.eek.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c7V(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).K(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeo.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()},
$S:0}
C.eaD.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qQ(4294967295,null,0,0,null,C.cx(),D.m3,"","","",D.d7),s=this.b
C.c87(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B0){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ebX.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.m(0,"id",C.cx())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iN
$.iN=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.fPG(q));++v.f},
$S:0}
C.ebV.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eew.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ebR.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.d,new C.ebQ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ebQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eev.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.N(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ebH.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aY,A.aL),$.as())},
$S:255}
C.eci.prototype={
$0(){return B.k5(!0,null,!0,!0,null,null,!1)},
$S:700}
C.egd.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ege.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.apz(w).fs()
v=u.Up(w)
v.srm(B.h1(A.bm,v.a.a.length))},
$S:8}
C.efD.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Vk(v)
if(u!=null&&u.b===D.cG)w.Up(u).saR(0,u.r)}else w.w=null},
$S:0}
C.eaE.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bn,!1,v.gpy().e.l(),A.ay,"",4280640491,24,A.bi,A.a1,"",0.22,w,null,"","",0,!1,"",0,D.b7,4280172719,2,"Tap to edit text",0,0,"",D.ca,D.cG,0.7,0.15,0.2)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eaB.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bn,!1,4279310375,A.ay,"",v.gpy().c.j(0.25).l(),24,A.bi,A.a1,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpy().c.l(),2,"",0,0,"",D.ca,D.eP,0.25,0.3,0.3)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ear.prototype={
$0(){var w=C.eg(A.bn,!1,4279310375,A.ay,"",4280640491,24,A.bi,A.a1,"",0.55,C.cx(),this.b,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l1,0.6,0.2,0.18),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eao.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bHt],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagj().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,D.bty,r,r,r,r,new C.ean(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.Z,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cQ(q,r,r,r,r,A.af,!0),!0,!1,A.ag,!0,!0)},
$S:33}
C.ean.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.eap.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cx(),u=this.b,t=A.Q.aj(u.ad(),null),s=C.eg(A.bn,!1,4279310375,A.ay,u.b,4280640491,24,A.bi,A.a1,"",0.86,v,null,"","",0,!1,"",0,D.b7,4280172719,2,t,0,0,"",D.ca,D.a19,w,0.5-w/2,0.07)
t=this.a
A.d.G(t.gdk().z,s)
t.r=s.a},
$S:0}
C.ebT.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ebU.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.gdk().z,new C.ebS(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.as()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ebS.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eb5.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cG)s.Q=t.c.l()
else if(w===D.eP){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eb6(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eb6.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eba.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ebb(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ebb.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eb8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cG){s.Q=t.c
return}w=new C.eb9(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eb9.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.hY(w,new C.eb7()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.eb7.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.eb4.prototype={
$0(){return C.c87(this.b,this.c,this.a.gpy())},
$S:0}
C.ee7.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.egm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egn.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ego.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egp.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.be(s,new C.egl(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQh()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.wr()
t.Iy()}},
$S:0}
C.egl.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.efT.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8A(),s=w.b,r=u.a8B(A.eT,A.k_,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bv,B.p(v,B.A(B.a([B.C(u.aPS(w.c,A.ai),1),new B.B(A.fi,B.p(v,D.btE,A.h,v,v,new B.o(A.eT.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.C(u.aPS(s,A.eT),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aE,A.w,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bv,u.aPV(A.eT,d,D.bpH,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.U,u.bPK(A.b3,d,A.rQ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aPT(d,"Not now"))
return new C.I6(B.u(p,A.al,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.efS.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.I6(B.u(B.a([v.a8A(),A.P,v.a8B(A.b3,D.bpn,"Pick which saved document should receive the details.","Choose "+this.b),A.aS,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bN,x.w).w.a.b*0.42),B.hF(w,new C.efQ(v,u,d),u.length,w,w,A.af,new C.efR(),!0),w),A.aB,v.aPT(d,"Cancel")],x.p),A.al,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.efR.prototype={
$2(d,e){return A.U},
$S:34}
C.efQ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ahV,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bEI,A.n),w,42,w,w,w,w,w,42),A.bb,B.C(B.u(B.a([B.d(v.b,w,1,A.Z,w,w,w,A.mR,w,w,w),A.dd,B.d("Updated "+this.a.O0(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.el,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efP(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ab)},
$S:75}
C.efP.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.efM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a8A()
t=t.a8B(A.aZ,A.rY,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.I6(B.u(B.a([s,A.P,t,A.bv,B.A(B.a([B.C(B.dU(A.a4v,new C.efK(d),B.d9(u,u,u,u,u,u,u,u,u,A.c,u,u,A.c9,u,new B.b4(B.m(14),A.V),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.av,B.C(B.bJ(D.eDF,new C.efL(d),B.bk(A.eT,u,u,u,A.c,u,A.c9,u,new B.b4(B.m(14),A.V),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.efK.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.efL.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.efO.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8A(),s=w.b,r=u.a8B(A.aR,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.C(u.aqS("Names",""+w.c),1),A.aa,B.C(u.aqS("Fields",""+w.d),1),A.aa,B.C(u.aqS("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bf,v,v,v,A.c,v,A.wi,v,new B.b4(B.m(14),A.V),v,v,v)
return new C.I6(B.u(B.a([t,A.P,r,A.aS,p,A.bv,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.mQ,v,v,v),new C.efN(d),o),A.U,u.aPU(d,"Stay here",!1)],q),A.al,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.efN.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.ecM.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.ecL.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.efE.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.egc.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yh(A.d.dP(w.d,new C.ega(v),new C.egb(v)).hs(),w.f,null)},
$S:z+83}
C.ega.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egb.prototype={
$0(){return this.a},
$S:z+84}
C.eaw.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.B(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hi,w,w,w),w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bvl,w,w,w,w,new C.eau(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eBN,w,w,w)],x.p)
if(v>1)t.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bwu,w,w,w,w,new C.eav(d),!1,w,w,w,w,w,D.eW_,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eau.prototype={
$0(){B.a6(this.a,!1).K("scroll")
return null},
$S:0}
C.eav.prototype={
$0(){B.a6(this.a,!1).K("split")
return null},
$S:0}
C.eax.prototype={
$0(){var w=this.b,v=w.c,u=C.eg(A.bn,!1,4279310375,A.ay,v,4280640491,24,A.bi,A.a1,"",0.84,C.cx(),w.b,"","",0,!1,"",0,D.b7,4280172719,2,v,0,0,"",D.ca,D.P3,0.88,0.06,0.08)
v=this.a
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eay.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iN
$.iN=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iN
$.iN=k+1
m.push(new C.ew(""+1000*l+"_"+k,D.P3,0.04,0.06,0.92,0.88,v,24,A.a1,A.bi,A.ay,4279310375,A.bn,u,D.b7,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ca,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lk(""+1000*p+"_"+o,r+n,"",D.pk,4294967295,null,D.d7,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eaC.prototype={
$0(){var w,v=C.cx(),u=this.a,t=u.e
t=(t==null?null:C.kf(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eg(A.bn,!1,4279310375,A.ay,t,4280640491,24,A.bi,A.a1,"",0.22,v,this.b.a,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.kz,0.35,0.55,0.62)
A.d.G(u.gdk().z,w)
u.r=w.a},
$S:0}
C.eat.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aXP(o)
w=C.cx()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_placed_"+A.a.e_(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a1,"",r,w,o.a,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.kz,s,u,t)
A.d.G(p.gdk().z,q)
A.d.bk(p.gdk().z,new C.eas(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.hHy(p)}},
$S:0}
C.eas.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eet.prototype={
$0(){var w=this.a,v=this.b
w.aXP(v)
this.c.at=v.a
w.r=null},
$S:0}
C.egk.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ecP.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bk(r.z,new C.ecO())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ecO.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ebe.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ebf.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rG()},
$S:8}
C.eaq.prototype={
$0(){var w=C.eg(A.bn,!1,4279310375,A.ay,"HD Photo",4280640491,24,A.bi,A.a1,"",0.8,C.cx(),this.b,"","",0,!1,"",0,D.b7,4280172719,2,"",0,0,"",D.ca,D.l1,0.8,0.1,0.1),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ecg.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eaz.prototype={
$0(){var w=this.a,v=this.b
A.d.G(w.gdk().z,v)
w.r=v.a},
$S:0}
C.eaI.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eaJ.prototype={
$0(){var w=this.b.hs(),v=C.cx(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eg(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.G(t.gdk().z,f)
t.r=f.a},
$S:0}
C.eaK.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.eaH(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.eaH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eaV.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.eaG(v))
if(u>0){A.d.cu(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.eaG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eaY.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eaZ.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eb_.prototype={
$0(){return this.a.as=A.dO},
$S:0}
C.eb0.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eb1.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eb2.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.eb3.prototype={
$1(d){return d.length!==0},
$S:3}
C.eaL.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.Bz(w.gpy().c.j(0.18).l(),0.1,u,D.b7,0,2,1,0,0))
u=w.gdk().z
v=C.cx()
A.d.G(u,C.iI(A.bn,!1,w.gpy().d.l(),A.ay,18,A.bi,A.I,0.07,v,"Document Header",0,D.d7,0.9,0.05,0.02))},
$S:0}
C.eaM.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cx()
A.d.G(u,C.Bz(v.gpy().c.j(0.12).l(),0.1,t,D.b7,0,2,1,0,0.9))
t=v.gdk().z
u=C.cx()
w=C.byb()
A.d.G(t,C.iI(A.L,!1,v.gpy().e.l(),A.ay,12,A.bi,A.a1,0.06,u,"Footer \xb7 "+w,0,D.d7,0.9,0.05,0.92))},
$S:0}
C.eaN.prototype={
$0(){A.d.G(this.a.gdk().z,C.Bz(1727914055,0.12,C.cx(),D.b7,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eaO.prototype={
$0(){var w=4279310375
A.d.G(this.a.gdk().z,C.Bz(w,0.08,C.cx(),D.b7,w,2,0.5,0.2,0.4))},
$S:0}
C.eaP.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.Bz(w.gpy().c.j(0.35).l(),0.12,u,D.B1,4280640491,2,0.2,0.15,0.55))
A.d.G(w.gdk().z,C.iI(A.bn,!1,4279310375,A.ay,18,A.bi,A.a1,0.15,C.cx(),"Important note",0,D.pl,0.5,0.38,0.52))},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.Bz(4294507260,0.78,C.cx(),D.b7,4291548641,1.5,0.84,0.08,0.1))
A.d.G(w.gdk().z,C.iI(A.bn,!1,4279179050,A.ay,16,A.bi,A.a1,0.7,C.cx(),"MEMO\n\nTo:\nFrom:\nDate: "+C.byb()+"\n\nSubject:\n\nBody text\u2026",0,D.d7,0.76,0.12,0.14))},
$S:0}
C.eaR.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.Bz(4294897802,0.28,C.cx(),D.b7,4294626325,2,0.3,0.62,0.12))
A.d.G(w.gdk().z,C.iI(A.bn,!1,4285611794,A.ay,15,A.bi,A.a1,0.24,C.cx(),"Sticky note",0,D.azZ,0.26,0.64,0.14))},
$S:0}
C.eaS.prototype={
$0(){var w=4280640491,v=this.a
A.d.G(v.gdk().z,C.Bz(4293060848,0.04,C.cx(),D.b7,4291548641,2,0.8,0.1,0.48))
A.d.G(v.gdk().z,C.Bz(w,0.04,C.cx(),D.b7,w,2,0.55,0.1,0.48))},
$S:0}
C.eaT.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.iI(A.bn,!1,w,A.ay,18,A.bi,A.a1,0.62,C.cx(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.FZ,0.42,0.06,0.18))
A.d.G(v.gdk().z,C.iI(A.bn,!1,w,A.ay,18,A.bi,A.a1,0.62,C.cx(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.td,0.42,0.52,0.18))},
$S:0}
C.eaU.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.Bz(858088427,0.62,C.cx(),D.b7,4280640491,2,0.42,0.05,0.18))
A.d.G(v.gdk().z,C.Bz(856004201,0.62,C.cx(),D.b7,4278556265,2,0.42,0.53,0.18))
A.d.G(v.gdk().z,C.iI(A.bn,!1,w,A.ay,20,A.bi,A.I,0.1,C.cx(),"Option A",0,D.d7,0.36,0.08,0.2))
A.d.G(v.gdk().z,C.iI(A.bn,!1,w,A.ay,20,A.bi,A.I,0.1,C.cx(),"Option B",0,D.d7,0.36,0.56,0.2))},
$S:0}
C.eaW.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.Bz(4294967295,0.36,C.cx(),D.b7,w,2,0.24,0.38,0.28))
A.d.G(v.gdk().z,C.iI(A.L,!1,w,A.ay,14,A.bi,A.a1,0.12,C.cx(),"[ QR CODE ]",0,D.d7,0.24,0.38,0.4))},
$S:0}
C.eaX.prototype={
$0(){return C.c87(this.b,D.P4,this.a.gpy())},
$S:0}
C.ecf.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2M.q(0,d),t=this.a
return t.b1C(d,v===d,A.aW,this.c,new C.ece(t,u,d,w),u)},
$S:z+25}
C.ece.prototype={
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
C.byX(r,new C.ecd(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecd.prototype={
$0(){return this.a.cX(new C.ecc(this.b,this.c))},
$S:0}
C.ecc.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eaA.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qQ(4294967295,null,0,0,null,C.cx(),D.m3,"","","",D.d7),s=this.b
C.c87(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B0){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ebi.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hNn(p,q.d,s,new C.ebh(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rG(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebh.prototype={
$1(d){return this.bdQ(d)},
bdQ(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.ebg(t,d))
w=2
return B.b(t.rG(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+86}
C.ebg.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.ebj.prototype={
$0(){return this.a.bB5()},
$S:0}
C.ebk.prototype={
$0(){return this.a.aLk("Class Presentation",!0)},
$S:0}
C.ebl.prototype={
$1(d){return this.a.bC0(d.b,this.b,d.a)},
$S:z+87}
C.ebW.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bN,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ee6.prototype={
$1(d){return new B.B(new B.L(0,0,0,B.aG(d,A.em,x.w).w.f.d),new B.eh(new C.ee5(this.a,this.b),null),null)},
$S:60}
C.ee5.prototype={
$2(d,e){return B.p6(new C.ee4(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1686}
C.ee4.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.U,r,new B.B(A.acL,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bc,B.bF(!1,A.yi,v,v,!0,v,v,new C.ee2(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.C(B.cQ(B.a([p.aNW(u,!0,!0,new C.ee3(p,w.d))],q),e,D.be9,v,v,A.af,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kg,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.ee2.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ee3.prototype={
$0(){this.b.$1(new C.ee0())
var w=this.a
if(w.c!=null)w.n(new C.ee1())},
$S:0}
C.ee0.prototype={
$0(){},
$S:0}
C.ee1.prototype={
$0(){},
$S:0}
C.efF.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:89}
C.efG.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,new C.avI(this.a,null),0.94+w*0.06,null,null),w)},
$S:428}
C.efH.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:89}
C.efI.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,new C.b8S(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:428}
C.efJ.prototype={
$0(){return A.d.cj(this.a.d,0,C.TP(this.b))},
$S:0}
C.eaF.prototype={
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
r=B.H(A.ba.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.ba.j(0.35+q),A.cf.j(0.18),A.K],t)
q=B.H(A.ba.j(0.45+q),A.r,1)
t=B.p(p,B.V(U.WX,u?A.ak:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.B,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tg(A.fe,B.p(p,B.u(B.a([t,A.aB,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ai,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aE,A.w,s,p,p),A.n),p,p,p,p,A.ek,p,p,1/0),14,!1),A.ap)},
$S:648}
C.ebK.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ebL.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebM.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.jZ
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Xx:A.zW}return w},
$S:701}
C.ebP.prototype={
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
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.mi.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kf(v.w)?A.up:A.p7,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a8(A.a_,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O0(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O0(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O0(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O0(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O0(v.f)
r=k.bBZ(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a5y(B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,B.p(l,B.dJ(!1,A.JJ,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.no,t?A.aA:A.bP,l,l,l,l),l,l,l,new C.ebN(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aE,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ebO(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ab),l),A.ap),A.h,l,l,l,l,l,l,A.d6,l,l,l,l)},
$S:93}
C.ebO.prototype={
$0(){return this.a.abK(this.b)},
$S:0}
C.ebN.prototype={
$0(){return this.a.zI(this.b,this.c)},
$S:0}
C.edf.prototype={
$0(){var w=this.a
w.b0i()
w.n(new C.ede())},
$S:0}
C.ede.prototype={
$0(){},
$S:0}
C.edg.prototype={
$1(d){return this.a.afJ(this.b.a,d)},
$S:2}
C.edh.prototype={
$0(){this.a.cX(new C.edd(this.b))},
$S:0}
C.edd.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.edi.prototype={
$0(){this.a.cX(new C.edc(this.b))},
$S:0}
C.edc.prototype={
$0(){var w=this.a
return w.y=w.y===A.cJ?A.bi:A.cJ},
$S:0}
C.edj.prototype={
$0(){this.a.cX(new C.edb(this.b))},
$S:0}
C.edb.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m8},
$S:0}
C.edk.prototype={
$0(){this.a.cX(new C.eda(this.b))},
$S:0}
C.eda.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.edl.prototype={
$0(){var w=this.a
w.cX(new C.ed9(w,this.b))},
$S:0}
C.ed9.prototype={
$0(){var w=this.b
return w.as=this.a.bWc(w.as)},
$S:0}
C.edm.prototype={
$0(){return this.a.cX(new C.ed8(this.b))},
$S:0}
C.ed8.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edn.prototype={
$0(){return this.a.cX(new C.ed7(this.b))},
$S:0}
C.ed7.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ed0.prototype={
$0(){return this.a.a_u(this.b.a)},
$S:0}
C.ed1.prototype={
$0(){this.a.Y7()
return null},
$S:0}
C.ed2.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bN,x.w).w.a.a<900)w.ac2()
else w.n(new C.ed_(w))},
$S:0}
C.ed_.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ed3.prototype={
$0(){this.a.cX(new C.ecZ(this.b))},
$S:0}
C.ecZ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.ed4.prototype={
$0(){return this.a.cX(new C.ecY(this.b))},
$S:0}
C.ecY.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ed5.prototype={
$0(){return this.a.cX(new C.ecX(this.b))},
$S:0}
C.ecX.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ed6.prototype={
$0(){return this.a.avv(null)},
$S:0}
C.ec8.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.ec9.prototype={
$0(){this.a.a79()
return null},
$S:0}
C.ecb.prototype={
$1(d){return this.bdR(d)},
bdR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Io(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c1(A.aG,new C.ec3(r),q,!0,!0,!1,null,!1,!1,x.r),$async$$1)
case 11:p=f
if(p!=null)s.cX(new C.ec4(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ec5(r))
s=s.c.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ec6(r))
s=s.c.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h2j(q,new C.D4(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cX(new C.ec7(r,p))
s=s.c.E(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aee(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:92}
C.ec3.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dM7],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bvs:r
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.ec2(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.ec2.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.ec4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ec5.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ec6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ec7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eca.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yz(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yz(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yz(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aee(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dPU,q,v,u,B.yz(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.egq.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.by8(w,v)}},
$S:0}
C.egr.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.edq.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bED:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aP:A.bA
return new B.B(A.hb,B.aJ(u,B.de(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lS,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.edp(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:138}
C.edp.prototype={
$0(){var w=this.a
return w.n(new C.edo(w,this.b))},
$S:0}
C.edo.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.edr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_i:E.ar6
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbFg():t.gbBq()
return B.hJ(B.aJ(u,B.p(u,D.aho,A.h,u,u,new B.o(u,u,u,u,B.a([new B.aa(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a_,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1689}
C.eds.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hME(v,w.a.c)},
$S:0}
C.eeP.prototype={
$0(){return this.b.uj(this.a.a)},
$S:0}
C.eeQ.prototype={
$0(){return this.a.uj(D.m3)},
$S:0}
C.eeR.prototype={
$0(){return this.a.uj(D.FX)},
$S:0}
C.ef1.prototype={
$0(){return this.a.uj(D.FY)},
$S:0}
C.efc.prototype={
$0(){return this.a.uj(D.FW)},
$S:0}
C.efn.prototype={
$0(){return this.a.pk("lab_report")},
$S:0}
C.efu.prototype={
$0(){return this.a.pk("rubric")},
$S:0}
C.efv.prototype={
$0(){return this.a.pk("minutes")},
$S:0}
C.efw.prototype={
$0(){return this.a.pk("agenda")},
$S:0}
C.efx.prototype={
$0(){return this.a.pk("timeline")},
$S:0}
C.efy.prototype={
$0(){return this.a.pk(this.b.a)},
$S:0}
C.eeS.prototype={
$0(){this.a.TC()
return null},
$S:0}
C.eeT.prototype={
$0(){this.a.Tw()
return null},
$S:0}
C.eeU.prototype={
$0(){return this.a.pk("table")},
$S:0}
C.eeV.prototype={
$0(){return this.a.pk("sticky")},
$S:0}
C.eeW.prototype={
$0(){return this.a.pk("divider")},
$S:0}
C.eeX.prototype={
$0(){return this.a.pk("header_bar")},
$S:0}
C.eeY.prototype={
$0(){return this.a.oj(D.b7)},
$S:0}
C.eeZ.prototype={
$0(){return this.a.oj(D.ex)},
$S:0}
C.ef_.prototype={
$0(){return this.a.oj(D.jj)},
$S:0}
C.ef0.prototype={
$0(){return this.a.oj(D.B1)},
$S:0}
C.ef2.prototype={
$0(){return this.a.oj(D.jk)},
$S:0}
C.ef3.prototype={
$0(){return this.a.oj(D.kA)},
$S:0}
C.ef4.prototype={
$0(){return this.a.oj(D.fb)},
$S:0}
C.ef5.prototype={
$0(){this.a.FQ()
return null},
$S:0}
C.ef6.prototype={
$0(){this.a.LD()
return null},
$S:0}
C.ef7.prototype={
$0(){return this.a.pk("quote")},
$S:0}
C.ef8.prototype={
$0(){return this.a.a5o()},
$S:0}
C.ef9.prototype={
$0(){this.a.Yc()
return null},
$S:0}
C.efa.prototype={
$0(){var w=this.a
return w.n(new C.eeF(w))},
$S:0}
C.eeF.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.efb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nt(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.eeN(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeN.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.efd.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.ji()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2N.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.be
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a8(A.a_,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a2N.q(0,q))u.push(B.an(s,B.p(s,D.Lo,A.h,s,s,D.Cf,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.B(A.hb,B.aJ(s,B.hJ(new B.am(A.W,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eeM(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+88}
C.eeM.prototype={
$0(){this.a.a5G(this.b)
return null},
$S:0}
C.efe.prototype={
$0(){this.a.a5F(this.b)
return null},
$S:0}
C.eff.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hjv(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bf:A.be
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qQ(4294967295,r,0,0,r,"preview_"+w,D.pk,"","","",D.d7)
C.h_h(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.h0B(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.ahW,A.h,r,r,D.Cf,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.B(A.kS,B.aJ(r,B.u(B.a([new B.am(A.W,r,A.a9,A.q,u,r),A.dd,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ai,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eeL(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+89}
C.eeL.prototype={
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
break}s.cX(new C.eeB(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeB.prototype={
$0(){return C.h_h(this.a,this.b.a)},
$S:0}
C.eeO.prototype={
bdS(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2M.q(0,d)
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
$2(d,e){return this.bdS(d,e)},
$S:z+90}
C.efz.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("I<1,r>")
v=B.z(new B.I(d,new C.efB(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.cf(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b_)},
$S:z+91}
C.efB.prototype={
$1(d){var w=this
return w.a.b1C(d,w.b===d,w.c,w.d,new C.efA(w.e,d),!D.a2M.q(0,d))},
$S:z+25}
C.efA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.efg.prototype={
$1(d){this.b.$2(d,new C.eeK(this.a,d,this.c))
return null},
$S:z+26}
C.eeK.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.byX(u,new C.eeA(v,this.c,w),w)},
$S:0}
C.eeA.prototype={
$0(){return this.a.cX(new C.eey(this.b,this.c))},
$S:0}
C.eey.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.efh.prototype={
$1(d){this.b.$2(d,new C.eeJ(this.a,d))
return null},
$S:z+26}
C.eeJ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fuC(u,new C.eez(v,w),w)},
$S:0}
C.eez.prototype={
$0(){var w=this.a
return w.cX(new C.eex(w,this.b))},
$S:0}
C.eex.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.efi.prototype={
$0(){var w=this.a
return w.n(new C.eeI(w))},
$S:0}
C.eeI.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.efj.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.by8(w,v)}},
$S:0}
C.efk.prototype={
$0(){this.a.GC()
return null},
$S:0}
C.efl.prototype={
$0(){return this.a.a5o()},
$S:0}
C.efm.prototype={
$0(){var w=this.a,v=w.ji()
if(v!=null&&v.b===D.cG)w.cX(new C.eeH(v))},
$S:0}
C.eeH.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.efo.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.efp.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.DS(v,!0)
return null},
$S:0}
C.efq.prototype={
$0(){this.a.cX(new C.eeG(this.b))},
$S:0}
C.eeG.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.efr.prototype={
$0(){this.a.cX(new C.eeE(this.b))},
$S:0}
C.eeE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cJ?A.bi:A.cJ},
$S:0}
C.efs.prototype={
$0(){this.a.cX(new C.eeD(this.b))},
$S:0}
C.eeD.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m8},
$S:0}
C.eft.prototype={
$0(){this.a.cX(new C.eeC(this.b))},
$S:0}
C.eeC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ebd.prototype={
$1(d){return this.bdP(d)},
bdP(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.cX(new C.ebc(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:190}
C.ebc.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.efW.prototype={
$0(){var w=this.a
return w.cX(new C.efV(w,this.b))},
$S:0}
C.efV.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.efX.prototype={
$0(){var w=this.a
return w.cX(new C.efU(w,this.b))},
$S:0}
C.efU.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ecl.prototype={
$0(){return this.a.cX(new C.eck(this.b))},
$S:0}
C.eck.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ecm.prototype={
$0(){return this.a.cX(new C.ecj(this.b))},
$S:0}
C.ecj.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ecT.prototype={
$1(d){var w=x.gh
w=B.z(new B.I(D.ajA,new C.ecS(),w),w.k("ai.E"))
return w},
$S:z+93}
C.ecS.prototype={
$1(d){var w=null
return B.yz(B.d(d.b,w,w,w,w,w,w,A.lA,w,w,w),48,d,x.fO)},
$S:z+94}
C.eg8.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:34}
C.eg7.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jF()?q:new C.eg5(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bf
else v=r.d?A.be:A.ct
v=B.H(v,A.r,o?2:1)
u=r.d?A.d3:A.c
t=B.bV(0,C.h0B(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.W,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nC,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adB,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eg6(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:73}
C.eg6.prototype={
$0(){var w=this.a
return w.n(new C.eg1(w,this.b))},
$S:0}
C.eg1.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Iy()},
$S:0}
C.eg5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c1(null,new C.eg2(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.eg3(q,s))
q.aMH()}else if(r==="del"){q=t.a
q.n(new C.eg4(q,s))
q.aLV()}else if(r==="up")t.a.aY1(s,s-1)
else if(r==="down")t.a.aY1(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eg2.prototype={
$1(d){var w=null,v=B.a([B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bx5,w,w,w,w,new C.efY(d),!1,w,w,w,w,w,w,w,D.eCF,w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bwZ,w,w,w,w,new C.efZ(d),!1,w,w,w,w,w,w,w,A.vd,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bwg,w,w,w,w,new C.eg_(d),!1,w,w,w,w,w,w,w,D.eK1,w,w,w))
if(u<this.b.r.length-1)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,D.bye,w,w,w,w,new C.eg0(d),!1,w,w,w,w,w,w,w,D.eCt,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.efY.prototype={
$0(){B.a6(this.a,!1).K("dup")
return null},
$S:0}
C.efZ.prototype={
$0(){B.a6(this.a,!1).K("del")
return null},
$S:0}
C.eg_.prototype={
$0(){B.a6(this.a,!1).K("up")
return null},
$S:0}
C.eg0.prototype={
$0(){B.a6(this.a,!1).K("down")
return null},
$S:0}
C.eg3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eg4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eg9.prototype={
$0(){return this.a.a5o()},
$S:0}
C.ebD.prototype={
$0(){var w=this.a
w.b0i()
w.avv(null)},
$S:0}
C.ebC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.aa(0,A.G,A.x.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b6(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.b6(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b6(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b6(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aE,A.w,B.a([r,B.b6(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.bQ(A.k8,new B.o(m.f==null?B.b6(m.e):p,p,p,p,p,r,A.n),A.b6),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.I(r,new C.ebB(this.a,e.b,e.d,q),B.S(r).k("I<1,r>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a1,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bQ(new B.am(A.W,p,A.a9,A.h,s,new B.cv("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.b6)},
$S:424}
C.ebB.prototype={
$1(d){var w=this
return w.a.bxv(d,w.b,w.c,w.d)},
$S:z+23}
C.ebq.prototype={
$0(){var w=this
if(w.b){w.a.LL(w.c)
return}if(w.d){w.a.a5m(w.c)
return}if(w.e){w.a.adm(w.c)
return}if(w.f)w.a.b0O(w.c)},
$S:0}
C.ebr.prototype={
$0(){this.a.LL(this.b)
return null},
$S:0}
C.ebs.prototype={
$0(){return this.a.a_u(this.b.a)},
$S:0}
C.ebt.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ebp(u,d,w.c,w.d))
v.Gg()
v.nA()
v.oz()},
$S:18}
C.ebp.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ebu.prototype={
$1(d){return this.a.afJ(this.b.a,d)},
$S:2}
C.ebw.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fFP(w))u.a.LL(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b0O(v)},
$S:0}
C.ebv.prototype={
$0(){return this.a.a_u(this.b.a)},
$S:0}
C.ebx.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ebo(w.b,d,w.c,w.d))
v.Gg()
v.nA()
v.oz()},
$S:18}
C.ebo.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cG)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eby.prototype={
$1(d){var w=this.a
w.n(new C.ebn(this.b,d))
w.Gg()
w.nA()
w.oz()},
$S:306}
C.ebn.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cG)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ebz.prototype={
$0(){var w=this.a
w.n(new C.ebm(this.b))
w.Gg()
w.nA()
w.oz()},
$S:0}
C.ebm.prototype={
$0(){this.a.r=C.h06()},
$S:0}
C.ebA.prototype={
$0(){return this.a.a_u(this.b.a)},
$S:0}
C.edu.prototype={
$0(){var w=this.a
return w.n(new C.edt(w))},
$S:0}
C.edt.prototype={
$0(){return this.a.y=!1},
$S:0}
C.edv.prototype={
$1(d){return this.a.crY(this.b.a,d)},
$S:2}
C.ecz.prototype={
$1(d){var w
this.a.cX(d)
w=this.b
if(w!=null)w.$0()},
$S:166}
C.ecA.prototype={
$1(d){return this.a.$1(new C.ecy(this.b,d))},
$S:6}
C.ecy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecB.prototype={
$1(d){return this.a.$1(new C.ecx(this.b,d))},
$S:6}
C.ecx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ecC.prototype={
$1(d){return this.a.$1(new C.ecw(this.b,d))},
$S:6}
C.ecw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecD.prototype={
$1(d){return this.a.$1(new C.ecv(this.b,d))},
$S:6}
C.ecv.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ecE.prototype={
$1(d){return this.a.$1(new C.ecu(this.b,d))},
$S:6}
C.ecu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ecF.prototype={
$1(d){return this.b.$1(new C.ect(this.a,this.c))},
$S:9}
C.ect.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ecG.prototype={
$1(d){return this.b.$1(new C.ecs(this.a,this.c))},
$S:9}
C.ecs.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ecH.prototype={
$1(d){var w=null,v=this.b,u=B.b6(d),t=v.Q===d,s=t?A.bf:A.cR
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecr(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:421}
C.ecr.prototype={
$0(){return this.a.$1(new C.eco(this.b,this.c))},
$S:0}
C.eco.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ecI.prototype={
$1(d){return this.a.$1(new C.ecq(this.b,d))},
$S:1690}
C.ecq.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ecJ.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(B.b6(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecp(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:421}
C.ecp.prototype={
$0(){return this.a.$1(new C.ecn(this.b,this.c))},
$S:0}
C.ecn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ecK.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pH()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eC()}v.a.aoA()},
$S:0}
C.ecN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dF.aq(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.ba,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.rY,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mw,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.X,!0,n,B.aH(!1,m,!0,B.er(new B.a7(48,48,new B.am(A.B,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aE,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ab)},
$S:132}
C.eam.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dF.aq(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.ba,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.er(B.u(B.a([B.e4(A.B,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jM,A.L,p,p)],x.p),A.m,p,A.b5,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aE,A.w,u,p,p),A.n),p,A.Dw,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ab)},
$S:132}
C.eer.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.T,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aiM,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ei(B.a([B.bF(!1,A.de,w,w,!0,w,w,new C.eep(d),w,w),B.bJ(A.pz,new C.eeq(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eep.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.eeq.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).K(w)
return null},
$S:0}
C.cUv.prototype={
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
t=B.aq(A.aI,A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.aa(w*2,A.G,A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH).j(0.18+w*0.12),A.J,32+w*10),D.a71],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.b4,0.9,A.w,k,0,B.a([A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.B,0.5,A.w,k,0,B.a([m,A.d.gai(C.kf(j.a.c.w)?D.t4:M.mH).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kf(m)?D.t4:M.mH
s=B.a([new B.aa(0,A.G,A.d.gI(C.kf(m)?D.t4:M.mH).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e4(A.B,B.p(k,B.V(C.kf(j.a.c.w)?A.up:A.p7,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aE,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.B,k,A.a9,A.q,l,k),A.U,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fV,B.d(j.a.c.b,k,2,A.Z,k,k,k,D.evi,A.L,k,k),A.au,B.d(j.gcn9(),k,k,k,k,k,k,D.ezI,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gQh()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kf(j.a.c.w)?D.t4:M.mH).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.I_(A.wK,"Download PDF","pdf",A.db,j.Hq(0),!1,k))
p=j.a.c
if(!p.z||p.gQh()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I_(A.k_,"Transfer to "+C.h08(p==null?"":p),"transfer_hati",A.aR,j.Hq(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hq(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I_(D.boI,"Rename presentation","rename",A.cf,n,!1,k),A.ar,new C.I_(A.afb,"Duplicate","duplicate",A.b0,j.Hq(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.I_(A.e4,"Delete presentation","delete",A.aH,j.Hq(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hq(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hq(n)
s.push(B.dO(B.d5(B.bF(!1,E.aKd,k,k,!0,k,k,new C.cUu(d),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,A.as,k,D.bh9,k,k,k,k,k,A.k2,k,k)),n),new B.v(0,(1-p)*8)))
return B.e4(A.B,B.d5(B.aD(!1,A.X,!0,k,B.p(k,B.bw(q,new B.am(A.W,k,A.a9,A.q,B.a([o,new B.B(D.bgj,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.Sn,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ab),i),0.88+u*0.12,k,k)},
$S:43}
C.cUu.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.cUR.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cUS.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cUs.prototype={
$1(d){var w=this.a
return w.n(new C.cUo(w))},
$S:23}
C.cUo.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cUt.prototype={
$1(d){var w=this.a
return w.n(new C.cUn(w))},
$S:50}
C.cUn.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUr.prototype={
$0(){var w=this.a
return w.n(new C.cUp(w))},
$S:0}
C.cUp.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUq.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.eh6.prototype={
$0(){return $.bgg=!$.bgg},
$S:0}
C.egX.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaPL())u.ask()},
$S:0}
C.eh5.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.egY.prototype={
$0(){return this.a.y=!0},
$S:0}
C.egZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ask()},
$S:0}
C.egT.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.egU.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.egV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.egW.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.J(w-1+v,v)},
$S:0}
C.eh3.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.B,null,A.aX,A.q,w,null)},
$S:1691}
C.eh4.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hA)return new B.cZ(e,!1,d,null)
w=this.a
return w.clh(w.e,d,e)},
$S:429}
C.eh_.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gt(0))*1.5708)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:43}
C.eh0.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jv((1-v.gt(0))*1.5708)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:43}
C.eh1.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gt(0)*0.8)
w.jv(v.gt(0)*0.35)
return B.fp(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:43}
C.eh2.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gt(0)*1.2)
return B.fp(A.a7,B.d5(e,v.gt(0)),null,w,!0)},
$S:43}
C.eh7.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWw().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWw().x
t===$&&B.c()
return new C.aYm(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.GZ(v.c,t,!0,new B.cv("cine"+u,x.W))},
$S:691}
C.eh9.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bN,x.w).w.a.a*0.55)w.ask()
else w.cae()},
$S:50}
C.eh8.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.flv.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:430}
C.flE.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ei(B.a([B.bF(!1,A.de,w,w,!0,w,w,new C.flB(d),w,w),B.bF(!1,D.eQJ,w,w,!0,w,w,new C.flC(d,this.b,v),w,w),B.bJ(A.aKu,new C.flD(d,v,this.c),w)],x.p),w,w,L.ri,new B.a7(320,w,t,w),w,w,w,w,D.eS4,w)},
$S:19}
C.flB.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.flC.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).K(null)
C.fGt(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.flD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).K(null)
t=u.b
w=2
return B.b(C.aMq(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aLR(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.flu.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c8a.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:625}
C.flA.prototype={
$1(d){return d.ad()},
$S:z+14}
C.eWY.prototype={
$1(d){return C.fGr(C.TP(B.Y(d,x.N,x.z)),this.a)},
$S:z+95}
C.ftS.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:89}
C.ftT.prototype={
$4(d,e,f,g){var w=A.co.aq(0,e.gt(0))
return B.d5(B.e4(A.B,D.f3j,0.94+w*0.06,null,null),w)},
$S:428}
C.ftU.prototype={
$1(d){var w=this
return new C.TR(w.a,w.b,w.c,w.d,null)},
$S:z+96}
C.egD.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.egz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.egC.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.TS(u,this.b,w.gaJk(),v,null)},
$S:z+98}
C.egA.prototype={
$0(){return this.a.f=!0},
$S:0}
C.egB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.egE.prototype={
$0(){return this.a.f=!0},
$S:0}
C.egF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.egI.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.egJ.prototype={
$0(){var w=this.a
return w.n(new C.egH(w))},
$S:0}
C.egH.prototype={
$0(){return this.a.d="one"},
$S:0}
C.egK.prototype={
$0(){var w=this.a
return w.n(new C.egG(w))},
$S:0}
C.egG.prototype={
$0(){return this.a.d="all"},
$S:0}
C.egL.prototype={
$1(d){return this.a.bC_(d,this.b)},
$S:z+99}
C.egy.prototype={
$0(){var w=this.a
return w.n(new C.egx(w,this.b))},
$S:0}
C.egx.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.egM.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.egN.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.egO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.egP.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.egQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fB(new B.fu(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.E(x.q).f.P(D.eiq)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eag.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.eaf())},
$S:0}
C.eaf.prototype={
$0(){},
$S:0}
C.eah.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fs()},
$S:8}
C.eac.prototype={
$1(d){return this.a.n(new C.eab())},
$S:2}
C.eab.prototype={
$0(){},
$S:0}
C.ead.prototype={
$1(d){return this.a.aU4()},
$S:2}
C.eae.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.egS.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.egR(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.egR.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ffT.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.ep(new B.k0(this.c,new C.ffS(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:221}
C.ffS.prototype={
$3(d,e,f){return new C.GZ(e,!1,!1,new B.cv(e.a,x.W))},
$S:z+101}
C.ffU.prototype={
$1(d){var w=null
return B.nS(!1,B.at(new C.bqx(this.a,this.b,w),w,w,w),w,x.z)},
$S:293}
C.ffY.prototype={
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
if(!(r instanceof B.q0))throw B.O("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.ffZ.prototype={
ben(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hk(A.fR),$async$$1)
case 3:r=f
if(r==null)throw B.O("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hC([J.f6(A.dz.gaK(r))],"image/png"))
t.toString
s=Ah.fxD(t)
w=4
return B.b(new B.pu(s,"load",!1,x.ev).gI(0).cI(0,A.ko),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.ben(d)},
$S:1695}
C.ffV.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:142}
C.ffW.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fA(0)},
$S:142}
C.ffX.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eRl.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.es0,A.L,w,w)},
$S:1696}
C.eRm.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.mN(A.bh,w,A.dM,8,w,e===0?w:e,w),A.ap)},
$S:638}
C.e19.prototype={
$1(d){this.a.XA()
return null},
$S:14}
C.e17.prototype={
$0(){return this.a.e=D.bcq},
$S:0}
C.e18.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bt
return this.b.e=w},
$S:0}
C.caK.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+102}
C.caL.prototype={
$2(d,e){return(d|e)>>>0},
$S:72};(function aliases(){var w=C.aIw.prototype
w.boO=w.p
w=C.aI_.prototype
w.bog=w.p
w=C.aHM.prototype
w.bo1=w.p
w=C.aHZ.prototype
w.bof=w.p
w=C.aIu.prototype
w.boM=w.p
w=C.aJN.prototype
w.bqe=w.p
w=C.aGH.prototype
w.bmU=w.p
w=C.aII.prototype
w.bp_=w.p
w=C.aIJ.prototype
w.bp0=w.p
w=C.b_1.prototype
w.bjB=w.ayo})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hKE","akK",103)
v(C.aFI.prototype,"gbWx","WD",0)
var r
u(r=C.auw.prototype,"gcmy","cmz",37)
v(r,"gbXh","aah",0)
v(r=C.aus.prototype,"gaSX","CI",3)
v(r,"gbXe","bXf",3)
v(r,"gasB","wG",0)
v(r,"gasC","H9",0)
t(C,"hL2","hhm",104)
v(C.aAu.prototype,"gbZ7","bZ8",3)
s(C,"hLd",0,null,["$4$paper$photo$request$template"],["fmX"],105,0)
s(C,"hLc",0,null,["$5$doc$history$instruction$photo$template"],["ffA"],106,0)
v(r=C.aAN.prototype,"gbZP","NU",0)
v(r,"gbZS","aaY",0)
v(r,"gbZR","Xo",0)
v(r,"gaTN","CX",0)
v(r=C.aC7.prototype,"gaTX","NX",0)
v(r,"gceS","aY7",3)
v(r,"gcnS","awF",82)
v(r,"gbF7","a7d",0)
v(r,"gc_i","zm",0)
v(r=C.aE1.prototype,"gc92","YF",0)
v(r,"gc9a","YI",0)
v(r,"gbuE","a5M",0)
v(r,"gc_m","ab5",0)
v(C.aE0.prototype,"gc_n","ab6",0)
v(C.ay8.prototype,"gbtE","a5z",0)
v(C.awz.prototype,"gc_o","Xz",0)
w(C,"hLq","hJk",12)
w(C,"hLo","hGm",12)
w(C,"hLp","hIl",12)
v(r=C.aB2.prototype,"gcqU","cqV",3)
v(r,"gcd9","cda",3)
u(r,"gD2","abK",7)
v(r,"gbz8","anM",3)
u(r,"gD3","aVc",7)
v(r,"gc1v","abs",0)
v(r,"gc0m","abr",0)
v(r,"gc3C","abL",0)
v(r,"gbBq","a6P",0)
v(r,"gc4u","Y7",0)
v(r,"gc4v","ac1",0)
v(r,"gc50","ac8",0)
v(r,"gc3P","abO",0)
v(r,"gbFg","a7h",0)
v(r,"gaMG","aMH",3)
v(r,"gaLU","aLV",3)
v(r,"gaHG","aHH",3)
v(r,"gaLT","aoA",3)
u(r,"gbtV","btW",79)
v(r,"gawg","b06",3)
v(r,"gc0o","c0p",3)
v(r,"gbQ1","bQ2",3)
v(r,"gbDR","bDS",3)
v(r=C.aB5.prototype,"gcpS","cpT",3)
v(r,"gcpx","cpy",3)
t(C,"hLr","hJB",2)
v(r=C.aB3.prototype,"gc_u","Hs",0)
v(r,"gcgL","Pn",0)
v(r,"gc_r","Hr",0)
v(r,"gcs8","a07",0)
v(r,"gc5b","acf",0)
v(C.aB1.prototype,"gc_v","aU4",3)
v(r=C.aB4.prototype,"gbG1","a7r",0)
u(r,"gc_s","c_t",100)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.no,C.PP,C.bCy,C.bBi,C.cpX,C.cpV,C.bIq,C.b4E,C.cpW,C.bzT,C.caE,C.caC,C.caD,C.caB,C.apM,C.caA,C.bJj,C.nQ,C.aBD,C.j8,C.nb,C.a5x,C.ym,C.tU,C.o2,C.lG,C.yo,C.nf,C.a5F,C.aoa,C.aYn,C.e0z,C.kV,C.Dd,C.em,C.iL,C.D4,C.wB,C.ew,C.lk,C.hQ,C.jt,C.a5G,C.acB,C.aYo,C.b_1,C.a0D])
u(B.kw,[C.cxP,C.bTs,C.fbj,C.czk,C.cyH,C.fgx,C.dOA,C.dOz,C.e1c,C.e1b,C.fhW,C.eB1,C.eAp,C.eAo,C.eBs,C.eB_,C.eAT,C.eBb,C.eBS,C.f3z,C.eHJ,C.eHI,C.eIb,C.e0C,C.flr,C.dKj,C.frF,C.fih,C.c82,C.c80,C.c85,C.fiM,C.fiN,C.fiO,C.fiP,C.c7N,C.c7O,C.dxF,C.c7K,C.fiL,C.eOU,C.dIv,C.c7D,C.e0i,C.fgo,C.edR,C.eef,C.eec,C.eeb,C.eem,C.eel,C.efR,C.efQ,C.ee5,C.ee4,C.eaF,C.ebP,C.eeO,C.eg8,C.eg7,C.ebC,C.ecN,C.eam,C.cUv,C.eh3,C.eh4,C.eh_,C.eh0,C.eh1,C.eh2,C.eh7,C.c8a,C.egD,C.egO,C.caL])
u(B.i2,[C.cxQ,C.cxR,C.bJk,C.f99,C.bTr,C.bTu,C.foa,C.ePS,C.ePJ,C.ePZ,C.eWZ,C.eX_,C.fbk,C.fbi,C.fnI,C.f8Q,C.fox,C.cza,C.czf,C.czh,C.czd,C.czi,C.czb,C.czj,C.cz6,C.cz3,C.cz2,C.cz9,C.cyC,C.cyA,C.ffD,C.ffE,C.f05,C.fgy,C.fgE,C.f_9,C.c2X,C.ffB,C.ffC,C.faH,C.faI,C.fgD,C.fgz,C.fgB,C.fgC,C.fgA,C.frX,C.faL,C.faM,C.faP,C.faQ,C.faT,C.faU,C.ftb,C.eYo,C.ftm,C.e4p,C.e4q,C.e4r,C.e4b,C.e4m,C.c6B,C.c6z,C.c6A,C.flL,C.flN,C.flM,C.ftE,C.eBT,C.eBi,C.eB2,C.eBf,C.eAk,C.eAl,C.eAm,C.eAq,C.eAr,C.eBI,C.eBP,C.eBR,C.eBr,C.eBt,C.eBx,C.eBy,C.eBz,C.eBD,C.eBu,C.eBv,C.eAC,C.eAD,C.eAE,C.eAF,C.eAG,C.eAH,C.eAI,C.eAJ,C.eAK,C.ezY,C.ezZ,C.eA_,C.eA0,C.eA2,C.eA3,C.eAw,C.eAx,C.eAy,C.eAz,C.eAA,C.eA7,C.eA8,C.eA9,C.eAa,C.eAS,C.eBa,C.fdE,C.fdD,C.c7U,C.f3y,C.fln,C.flg,C.flj,C.fjg,C.fjh,C.fji,C.fdL,C.fdK,C.fdJ,C.fdH,C.eY0,C.eY1,C.eY2,C.ftQ,C.eHL,C.eHM,C.eHF,C.eHz,C.eI4,C.eI5,C.eI7,C.eI8,C.eI3,C.ftP,C.eHq,C.f2O,C.e0B,C.flp,C.flq,C.fls,C.fll,C.flm,C.ft3,C.da8,C.dae,C.e0A,C.eUA,C.eUC,C.eUB,C.eUz,C.feP,C.feR,C.eWy,C.fkS,C.fkT,C.fkU,C.fl4,C.fl9,C.fla,C.flb,C.flc,C.fld,C.fle,C.flf,C.fkV,C.fkW,C.fkX,C.fkY,C.fkZ,C.fl_,C.fl0,C.fl1,C.fl2,C.fl3,C.fl5,C.fl6,C.fl7,C.fl8,C.fcE,C.f2B,C.f2A,C.fly,C.dKk,C.dKi,C.eGA,C.c2z,C.c2B,C.frH,C.d_L,C.d_N,C.frG,C.frE,C.ftO,C.fid,C.d_l,C.faX,C.faY,C.c7S,C.c7T,C.c7R,C.c7H,C.c7I,C.c7E,C.c7F,C.c7G,C.c88,C.c83,C.c7Z,C.c8_,C.c81,C.c84,C.c86,C.fiQ,C.c7M,C.c7P,C.c7Q,C.c7W,C.c7X,C.flF,C.fkM,C.c7L,C.c7J,C.fiK,C.f4U,C.c7C,C.eEk,C.f7E,C.egu,C.ecU,C.ecV,C.eeu,C.eei,C.eej,C.ech,C.egf,C.egg,C.egh,C.ebG,C.edY,C.ee_,C.edA,C.edx,C.ecQ,C.ecR,C.edH,C.ebI,C.edT,C.edU,C.edS,C.edW,C.edV,C.eed,C.eee,C.eeg,C.ee9,C.ec0,C.ebY,C.een,C.ebQ,C.ege,C.eao,C.ebT,C.ebS,C.eb6,C.ebb,C.eb9,C.eb7,C.egm,C.egn,C.ego,C.egl,C.efT,C.efS,C.efM,C.efO,C.efE,C.egc,C.ega,C.eaw,C.eas,C.ecO,C.ebf,C.eaH,C.eaG,C.eb2,C.eb3,C.ecf,C.ebh,C.ebl,C.ee6,C.efF,C.efG,C.efH,C.efI,C.ebK,C.ebL,C.ebM,C.edg,C.ecb,C.ec3,C.eca,C.edq,C.edr,C.efd,C.eff,C.efz,C.efB,C.efg,C.efh,C.ebd,C.ecT,C.ecS,C.eg2,C.ebB,C.ebt,C.ebu,C.ebx,C.eby,C.edv,C.ecz,C.ecA,C.ecB,C.ecC,C.ecD,C.ecE,C.ecF,C.ecG,C.ecH,C.ecI,C.ecJ,C.eer,C.cUs,C.cUt,C.eh9,C.flv,C.flE,C.flu,C.flA,C.eWY,C.ftS,C.ftT,C.ftU,C.egC,C.egL,C.eah,C.eac,C.ead,C.ffT,C.ffS,C.ffU,C.ffZ,C.ffV,C.ffW,C.eRl,C.eRm,C.e19,C.caK])
u(B.jl,[C.cxS,C.ePO,C.ePT,C.ePU,C.ePP,C.ePQ,C.ePR,C.ePH,C.ePI,C.ePK,C.ePL,C.ePY,C.ePX,C.ePN,C.ePM,C.ePV,C.ePW,C.eQ0,C.eQ1,C.eQ_,C.czc,C.czg,C.cze,C.cz4,C.cz5,C.cz7,C.cz0,C.cz1,C.cz8,C.cz_,C.cyZ,C.cyY,C.cyr,C.cyq,C.cyt,C.cyB,C.cyu,C.cys,C.cyw,C.cyx,C.cyy,C.cyv,C.cyz,C.cyD,C.cyE,C.cyF,C.cyG,C.faF,C.faG,C.faD,C.faE,C.dXb,C.dX9,C.dXa,C.dXc,C.dXd,C.dOy,C.faJ,C.faK,C.faN,C.faO,C.faR,C.faS,C.e1a,C.fik,C.fij,C.e4o,C.e4n,C.e45,C.e4c,C.e4d,C.e4e,C.e47,C.e48,C.e49,C.e4a,C.e46,C.e43,C.e44,C.e4i,C.e4j,C.e4h,C.e4k,C.e4g,C.e4l,C.e4f,C.e42,C.c6C,C.eAL,C.eB8,C.eAu,C.eAv,C.eAs,C.eAt,C.eBe,C.eBd,C.eBc,C.eBh,C.eBg,C.eAj,C.eAn,C.eAi,C.eAh,C.eAe,C.eAg,C.eAf,C.eBQ,C.eBJ,C.eBH,C.eBK,C.eBG,C.eBL,C.eBF,C.eBM,C.eBN,C.eBO,C.eBE,C.eBq,C.eBl,C.eBw,C.eBp,C.eBA,C.eBo,C.eBB,C.eBn,C.eBC,C.eBm,C.eB5,C.eB4,C.eB6,C.eB3,C.eB7,C.eAY,C.eAX,C.eAZ,C.eAW,C.eAV,C.eAU,C.eA1,C.ezX,C.eAb,C.eA6,C.eAc,C.eA5,C.eAd,C.eA4,C.eB0,C.eAP,C.eAO,C.eAQ,C.eAN,C.eAR,C.eAM,C.eB9,C.eBk,C.eBj,C.eAB,C.fli,C.flk,C.flo,C.fdI,C.fgb,C.fg9,C.fga,C.eHN,C.eHO,C.eHK,C.eHE,C.eHD,C.eHG,C.eHH,C.eHt,C.eHu,C.eHw,C.eHx,C.eHy,C.eHv,C.eHA,C.eI0,C.eI1,C.eI_,C.eI2,C.eHZ,C.eHY,C.eHX,C.eI6,C.eHW,C.eHV,C.eHU,C.eI9,C.eHT,C.eIa,C.eHS,C.eHR,C.eHB,C.eHC,C.eHQ,C.eHP,C.eHm,C.eHn,C.eHo,C.eHp,C.eHl,C.eHr,C.eHs,C.da7,C.da9,C.dac,C.dad,C.dab,C.daa,C.feQ,C.fcF,C.c2A,C.c2C,C.d_E,C.d_J,C.d_K,C.d_I,C.d_H,C.d_M,C.d_G,C.d_F,C.d_O,C.frD,C.d67,C.d68,C.d69,C.faV,C.faW,C.c89,C.eai,C.eaj,C.eak,C.eal,C.f4S,C.f4T,C.dIx,C.dIw,C.cY_,C.cXZ,C.egw,C.egv,C.ecW,C.efC,C.egs,C.ees,C.egi,C.egj,C.egt,C.edB,C.ebE,C.ebF,C.edZ,C.edz,C.edw,C.edy,C.edC,C.edD,C.edE,C.edF,C.edG,C.edI,C.ebJ,C.edL,C.edM,C.edN,C.edO,C.edP,C.edQ,C.edK,C.edX,C.eea,C.ee8,C.eeh,C.edJ,C.ebZ,C.ec_,C.ec1,C.eek,C.eeo,C.eaD,C.ebX,C.ebV,C.eew,C.ebR,C.eev,C.ebH,C.eci,C.egd,C.efD,C.eaE,C.eaB,C.ear,C.ean,C.eap,C.ebU,C.eb5,C.eba,C.eb8,C.eb4,C.ee7,C.egp,C.efP,C.efK,C.efL,C.efN,C.ecM,C.ecL,C.egb,C.eau,C.eav,C.eax,C.eay,C.eaC,C.eat,C.eet,C.egk,C.ecP,C.ebe,C.eaq,C.ecg,C.eaz,C.eaI,C.eaJ,C.eaK,C.eaV,C.eaY,C.eaZ,C.eb_,C.eb0,C.eb1,C.eaL,C.eaM,C.eaN,C.eaO,C.eaP,C.eaQ,C.eaR,C.eaS,C.eaT,C.eaU,C.eaW,C.eaX,C.ece,C.ecd,C.ecc,C.eaA,C.ebi,C.ebg,C.ebj,C.ebk,C.ebW,C.ee2,C.ee3,C.ee0,C.ee1,C.efJ,C.ebO,C.ebN,C.edf,C.ede,C.edh,C.edd,C.edi,C.edc,C.edj,C.edb,C.edk,C.eda,C.edl,C.ed9,C.edm,C.ed8,C.edn,C.ed7,C.ed0,C.ed1,C.ed2,C.ed_,C.ed3,C.ecZ,C.ed4,C.ecY,C.ed5,C.ecX,C.ed6,C.ec8,C.ec9,C.ec2,C.ec4,C.ec5,C.ec6,C.ec7,C.egq,C.egr,C.edp,C.edo,C.eds,C.eeP,C.eeQ,C.eeR,C.ef1,C.efc,C.efn,C.efu,C.efv,C.efw,C.efx,C.efy,C.eeS,C.eeT,C.eeU,C.eeV,C.eeW,C.eeX,C.eeY,C.eeZ,C.ef_,C.ef0,C.ef2,C.ef3,C.ef4,C.ef5,C.ef6,C.ef7,C.ef8,C.ef9,C.efa,C.eeF,C.efb,C.eeN,C.eeM,C.efe,C.eeL,C.eeB,C.efA,C.eeK,C.eeA,C.eey,C.eeJ,C.eez,C.eex,C.efi,C.eeI,C.efj,C.efk,C.efl,C.efm,C.eeH,C.efo,C.efp,C.efq,C.eeG,C.efr,C.eeE,C.efs,C.eeD,C.eft,C.eeC,C.ebc,C.efW,C.efV,C.efX,C.efU,C.ecl,C.eck,C.ecm,C.ecj,C.eg6,C.eg1,C.eg5,C.efY,C.efZ,C.eg_,C.eg0,C.eg3,C.eg4,C.eg9,C.ebD,C.ebq,C.ebr,C.ebs,C.ebp,C.ebw,C.ebv,C.ebo,C.ebn,C.ebz,C.ebm,C.ebA,C.edu,C.edt,C.ecy,C.ecx,C.ecw,C.ecv,C.ecu,C.ect,C.ecs,C.ecr,C.eco,C.ecq,C.ecp,C.ecn,C.ecK,C.eep,C.eeq,C.cUu,C.cUR,C.cUS,C.cUo,C.cUn,C.cUr,C.cUp,C.cUq,C.eh6,C.egX,C.eh5,C.egY,C.egZ,C.egT,C.egU,C.egV,C.egW,C.eh8,C.flB,C.flC,C.flD,C.egz,C.egA,C.egB,C.egE,C.egF,C.egI,C.egJ,C.egH,C.egK,C.egG,C.egy,C.egx,C.egM,C.egN,C.egP,C.egQ,C.eag,C.eaf,C.eab,C.eae,C.egS,C.egR,C.ffY,C.ffX,C.e17,C.e18])
t(C.aNK,B.E)
u(B.m9,[C.a1z,C.au0,C.asI,C.wz,C.wC,C.kB,C.qP,C.v5,C.aoK,C.H_,C.ao9,C.tV,C.m3,C.hm,C.a6g])
u(C.bIq,[C.cpY,C.bIr])
u(C.caE,[C.caI,C.apL])
t(C.caH,C.caC)
t(C.caG,C.caB)
t(C.caJ,C.caG)
t(C.caF,C.caD)
t(C.caz,C.caA)
t(C.b6a,B.oh)
t(C.cjX,B.asa)
t(C.a63,B.wm)
t(C.aS1,B.dC)
t(C.axs,B.ar5)
u(B.ae,[C.ZA,C.Wn,C.Wl,C.anp,C.TF,C.YE,C.Z8,C.Z7,C.aAG,C.Xx,C.Lz,C.X5,C.Xq,C.als,C.aFp,C.SU,C.awk,C.a5n,C.M0,C.avI,C.I_,C.Yh,C.TR,C.TS,C.aB0,C.aoe,C.a5o])
u(B.ag,[C.aFI,C.auw,C.aus,C.aAu,C.aAN,C.aC7,C.aE1,C.aE0,C.aIw,C.ay8,C.aI_,C.awz,C.bbW,C.aHM,C.aJN,C.aHZ,C.b9R,C.aIu,C.aII,C.aGH,C.b8D,C.aIJ,C.aB3,C.bgf,C.aB1,C.aB4,C.bg_])
u(B.ar,[C.auu,C.aaL,C.aaa,C.bf4,C.aaO,C.acr,C.aXZ,C.bob,C.aYj,C.bhy,C.bmM,C.aWc,C.aYm,C.aaR,C.ab9,C.aYk,C.GZ,C.aWf,C.b8S,C.NE,C.I6,C.bdt,C.bds,C.bqx])
u(B.n2,[C.b4W,C.bn6,C.bbm,C.bdz,C.bas,C.bbj,C.bb0,C.bjJ,C.b62,C.b5F,C.bqu,C.bnz,C.bmI,C.bal,C.aYh,C.blI,C.bmF])
t(C.bfX,C.aIw)
t(C.bfj,C.aI_)
t(C.bf6,C.aHM)
t(C.bq1,C.aJN)
u(B.Fz,[C.aG1,C.baZ,C.bn9])
t(C.bfg,C.aHZ)
t(C.bfV,C.aIu)
t(C.bsL,C.aII)
t(C.aB2,C.bsL)
t(C.b8E,C.aGH)
t(C.aB5,C.aIJ)
t(C.bql,B.j_)
t(C.a6f,B.k9)
t(C.caM,C.b_1)
t(C.afs,C.a0D)
u(B.Vo,[C.aNA,C.aP4])
t(C.atD,C.aNA)
w(C.aIw,B.ca)
w(C.aI_,B.ca)
w(C.aHM,B.ca)
w(C.aHZ,B.ca)
w(C.aIu,B.ca)
w(C.aJN,B.ca)
w(C.aGH,B.eI)
w(C.aII,B.ca)
v(C.bsL,B.eu)
w(C.aIJ,B.ca)})()
B.kc(b.typeUniverse,JSON.parse('{"aOj":{"hu":["aOj"]},"no":{"aOj":[],"hu":["aOj"]},"aNK":{"E":["PP"],"E.E":"PP"},"b6a":{"oh":[]},"a63":{"wm":[],"nK":[]},"aS1":{"dC":[],"cq":[],"r":[]},"axs":{"aP":[],"cY":["aP"],"aN":[],"cn":[]},"ZA":{"ae":[],"r":[]},"aFI":{"ag":["ZA"]},"Wn":{"ae":[],"r":[]},"Wl":{"ae":[],"r":[]},"auw":{"ag":["Wn"]},"aus":{"ag":["Wl"]},"auu":{"ar":[],"r":[]},"anp":{"ae":[],"r":[]},"aAu":{"ag":["anp"]},"aaL":{"ar":[],"r":[]},"aaa":{"ar":[],"r":[]},"aaO":{"ar":[],"r":[]},"acr":{"ar":[],"r":[]},"bf4":{"ar":[],"r":[]},"TF":{"ae":[],"r":[]},"aAN":{"ag":["TF"]},"aXZ":{"ar":[],"r":[]},"b4W":{"aA":[]},"bn6":{"aA":[]},"YE":{"ae":[],"r":[]},"aC7":{"ag":["YE"]},"bbm":{"aA":[]},"Z8":{"ae":[],"r":[]},"Z7":{"ae":[],"r":[]},"aAG":{"ae":[],"r":[]},"Xx":{"ae":[],"r":[]},"aE1":{"ag":["Z8"]},"aE0":{"ag":["Z7"]},"bfX":{"ag":["aAG"]},"bdz":{"aA":[]},"ay8":{"ag":["Xx"]},"bob":{"ar":[],"r":[]},"aYj":{"ar":[],"r":[]},"bhy":{"ar":[],"r":[]},"Lz":{"ae":[],"r":[]},"X5":{"ae":[],"r":[]},"bfj":{"ag":["Lz"]},"bmM":{"ar":[],"r":[]},"bas":{"aA":[]},"aWc":{"ar":[],"r":[]},"awz":{"ag":["X5"]},"Xq":{"ae":[],"r":[]},"bbW":{"ag":["Xq"]},"bbj":{"aA":[]},"bb0":{"aA":[]},"bjJ":{"aA":[]},"b62":{"aA":[]},"b5F":{"aA":[]},"bqu":{"aA":[]},"bnz":{"aA":[]},"bmI":{"aA":[]},"bal":{"aA":[]},"als":{"ae":[],"r":[]},"aYm":{"ar":[],"r":[]},"bf6":{"ag":["als"]},"aaR":{"ar":[],"r":[]},"ab9":{"ar":[],"r":[]},"aFp":{"ae":[],"r":[]},"SU":{"ae":[],"r":[]},"GZ":{"ar":[],"r":[]},"awk":{"ae":[],"r":[]},"a5n":{"ae":[],"r":[]},"aYk":{"ar":[],"r":[]},"aYh":{"aA":[]},"bq1":{"ag":["aFp"]},"aG1":{"aA":[]},"bfg":{"ag":["SU"]},"b9R":{"ag":["awk"]},"bfV":{"ag":["a5n"]},"aWf":{"ar":[],"r":[]},"baZ":{"aA":[]},"blI":{"aA":[]},"bmF":{"aA":[]},"avI":{"ae":[],"r":[]},"I_":{"ae":[],"r":[]},"Yh":{"ae":[],"r":[]},"I6":{"ar":[],"r":[]},"M0":{"ae":[],"r":[]},"aB2":{"ag":["M0"],"eu":[]},"b8E":{"ag":["avI"]},"b8S":{"ar":[],"r":[]},"b8D":{"ag":["I_"]},"NE":{"ar":[],"r":[]},"aB5":{"ag":["Yh"]},"bn9":{"aA":[]},"bdt":{"ar":[],"r":[]},"bds":{"ar":[],"r":[]},"TR":{"ae":[],"r":[]},"TS":{"ae":[],"r":[]},"aB0":{"ae":[],"r":[]},"aoe":{"ae":[],"r":[]},"aB3":{"ag":["TR"]},"bgf":{"ag":["TS"]},"aB1":{"ag":["aB0"]},"bql":{"j_":[]},"aB4":{"ag":["aoe"]},"bqx":{"ar":[],"r":[]},"a5o":{"ae":[],"r":[]},"bg_":{"ag":["a5o"]},"a6f":{"k9":["fj<eD>"],"jY":["fj<eD>"]},"afs":{"a0D":[]},"aNA":{"iP":[],"f5":[]},"atD":{"iP":[],"f5":[]},"aP4":{"iP":[],"f5":[]}}'))
var y={T:"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n",z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",g:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again."}
var x=(function rtii(){var w=B.az
return{bu:w("JR"),U:w("uA<pt>"),bz:w("x"),M:w("fd<n>"),bo:w("jo"),gc:w("au<ik?>"),bq:w("au<~>"),cc:w("a2C"),fS:w("Cu"),an:w("aj3"),bm:w("M<PP>"),X:w("M<afI>"),f3:w("M<aOj>"),aK:w("M<mE>"),V:w("M<aa>"),O:w("M<x>"),fA:w("M<lc>"),d5:w("M<au<bq<G,+icon3d,picture(n?,n?)>>>"),bH:w("M<au<dz>>"),fG:w("M<au<~>>"),aF:w("M<mL>"),cd:w("M<al<j8>>"),ez:w("M<a0<n,aC>>"),d:w("M<a0<n,@>>"),B:w("M<m_>"),h:w("M<j8>"),gE:w("M<ym>"),k:w("M<nQ>"),g:w("M<lk>"),D:w("M<hQ>"),u:w("M<ew>"),m:w("M<tV>"),i:w("M<hm>"),aC:w("M<a5F>"),o:w("M<yo>"),e3:w("M<aC>"),dN:w("M<v>"),v:w("M<hw>"),cR:w("M<iD>"),J:w("M<iY>"),gx:w("M<oB<n>>"),f2:w("M<+(a_,n)>"),L:w("M<+(n,n)>"),aD:w("M<+data,mimeType(n,n)>"),G:w("M<+(P,P)>"),ek:w("M<+(G,n)>"),n:w("M<+(G,G)>"),S:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),eR:w("M<f5>"),fT:w("M<b4E>"),bx:w("M<aBD>"),gz:w("M<acB>"),x:w("M<P>"),t:w("M<G>"),dS:w("M<aA?>"),bA:w("M<v?>"),Z:w("M<G?>"),cA:w("M<ce>"),A:w("cm<ag<ae>>"),gL:w("al<nQ>"),R:w("al<hQ>"),j:w("al<@>"),bW:w("al<G>"),e:w("bq<G,+icon3d,picture(n?,n?)>"),P:w("a0<n,@>"),f:w("a0<@,@>"),gI:w("a0<G,+icon3d,picture(n?,n?)>"),bR:w("I<hm,r>"),eC:w("I<nf,n>"),cT:w("I<jt,B>"),dv:w("I<n,n>"),f0:w("I<n,r>"),gN:w("I<G,p8>"),gh:w("I<m3,ja<m3>>"),w:w("iB"),ei:w("ik"),g2:w("qG"),fB:w("D4"),b6:w("ym"),gX:w("a5x"),ea:w("nQ"),bt:w("lk"),I:w("hQ"),F:w("ew"),fO:w("m3"),ff:w("tV"),fP:w("hm"),Q:w("v5"),dO:w("aoa"),a:w("cr"),C:w("aC"),dw:w("apM"),di:w("a6g"),Y:w("eD"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Dz"),dB:w("du<v>"),bJ:w("du<n>"),_:w("dV<n>"),N:w("n"),fw:w("pt"),bO:w("ao"),K:w("bm<v>"),b:w("bm<P>"),E:w("dz"),W:w("cv<n>"),ac:w("cv<G>"),ex:w("k0<lk>"),cI:w("k0<n>"),cl:w("k0<P>"),b4:w("a3<kV>"),a8:w("a3<lG>"),fR:w("a3<+(n,n)>"),co:w("e2<v>"),l:w("r"),b2:w("bL<~>"),ev:w("pu<dP>"),dT:w("bd<~>"),cQ:w("axs"),q:w("mv"),y:w("R"),gR:w("P"),z:w("@"),r:w("G"),at:w("b7?"),gw:w("al<a0<n,@>>?"),aT:w("al<hQ>?"),c:w("al<@>?"),aP:w("ik?"),af:w("hQ?"),go:w("aYo?"),a6:w("a5G?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bBO=new B.ac(A.ej,18,A.c,null,null,null)
D.aNc=new B.bE(A.ax,null,null,D.bBO,null)
D.aNl=new B.d4(0,-0.15)
D.aNn=new B.d4(0.62,0)
D.aNq=new B.d4(-0.35,-0.45)
D.aNB=new B.d4(0.9,-0.85)
D.aFB=new B.b2(30,30)
D.aOS=new B.by(D.aFB,D.aFB,A.h2,A.h2)
D.aP5=new B.ay(A.b0,1,A.r,-1)
D.b5K=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPh=new B.ay(D.b5K,1,A.r,-1)
D.aPt=new B.ay(A.az,1.5,A.r,-1)
D.aPy=new B.ay(A.b0,1.6,A.r,-1)
D.aPO=new B.ay(A.az,1.4,A.r,-1)
D.aR7=new B.o(null,null,null,null,null,K.EL,A.a6)
D.bFF=new B.a8(A.a_,A.a7,A.w,G.a_i,null,null)
D.aRf=new B.o(null,null,null,null,null,D.bFF,A.a6)
D.a6T=new B.o(A.aG,null,null,A.pJ,null,null,A.n)
D.b0F=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b5I=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cBE=w([D.b0F,D.b5I],x.O)
D.dRa=new B.bR(A.B,0.5,A.w,null,0,D.cBE,null,null)
D.aRx=new B.o(null,null,null,null,null,D.dRa,A.a6)
D.a9C=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQ0=new B.c2(N.vC,A.V,A.V,A.V)
D.aRz=new B.o(D.a9C,null,D.aQ0,null,null,null,A.n)
D.bHh=new B.a8(A.a_,A.a7,A.w,A.Nw,null,null)
D.aRF=new B.o(null,null,null,null,null,D.bHh,A.a6)
D.a8b=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aRH=new B.o(D.a8b,null,null,A.qX,null,null,A.n)
D.aRL=new B.o(A.kn,null,null,null,null,null,A.a6)
D.aQ6=new B.c2(A.yH,A.V,A.V,A.V)
D.aRO=new B.o(Y.a95,null,D.aQ6,A.mY,null,null,A.n)
D.Cf=new B.o(A.e9,null,null,null,null,null,A.a6)
D.aRU=new B.o(null,null,null,null,null,E.uH,A.a6)
D.cG2=w([E.a9M,A.bV],x.O)
D.bGV=new B.a8(A.b4,A.bd,A.w,D.cG2,null,null)
D.aRY=new B.o(null,null,null,A.mY,null,D.bGV,A.n)
D.cPN=w([A.bf,A.e9,A.j6],x.O)
D.Yv=new B.a8(A.ax,A.aE,A.w,D.cPN,null,null)
D.aS9=new B.o(null,null,null,null,null,D.Yv,A.n)
D.aSa=new B.o(D.a8b,null,null,A.kg,null,null,A.n)
D.c7b=w([A.dH,A.bf],x.O)
D.bGO=new B.a8(A.ax,A.aE,A.w,D.c7b,null,null)
D.aSe=new B.o(null,null,null,null,null,D.bGO,A.n)
D.aSo=new B.o(null,null,null,null,null,G.t_,A.a6)
D.aSG=new B.o(A.a9N,null,null,null,null,null,A.a6)
D.b1i=new B.x(0.5647058823529412,0,0,0,A.t)
D.a71=new B.aa(0,A.G,D.b1i,A.Pf,28)
D.aUD=new B.aSe()
D.aVb=new C.cjX()
D.aVn=new C.b6a()
D.a7x=new B.cw(A.B,null,null,A.Yk,null)
D.aXK=new B.f9(null,null,null,null,null,E.mo,null,null,null,null)
D.aVU=new B.cw(A.B,null,null,D.aXK,null)
D.brI=new B.ac(A.dN,28,A.c,null,null,null)
D.aWj=new B.cw(A.B,null,null,D.brI,null)
D.aXH=new B.f9(2,null,null,null,null,A.bQ,null,null,null,null)
D.aWD=new B.cw(A.B,null,null,D.aXH,null)
D.bs2=new B.ac(K.Lb,40,A.bR,null,null,null)
D.aWE=new B.cw(A.B,null,null,D.bs2,null)
D.aYu=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aYF=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZ0=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZ4=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.aZw=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.aZM=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.aZN=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.aZR=new B.x(1,0.2901960784313726,0.17254901960784313,0.058823529411764705,A.t)
D.Is=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_9=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_e=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8p=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0v=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8B=new B.x(1,1,1,0.9725490196078431,A.t)
D.b0L=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b0U=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b0W=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b14=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1n=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.To=new B.x(0.8509803921568627,0,0,0,A.t)
D.b2G=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b2M=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9k=new B.x(0.6,0,0,0,A.t)
D.a9m=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b41=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rf=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b4n=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b4K=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b52=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a9X=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TH=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zc=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.IT=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iS=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aak=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.TM=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b7J=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b84=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b8i=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.U0=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.b9e=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.w4=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.b9x=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.b9O=new B.ht(A.be,!0,null,null)
D.ey1=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVS=new B.w("Bio link",null,D.ey1,null,null,null,null,null,null,null,null,null)
D.aWy=new B.cw(A.B,null,null,D.eVS,null)
D.ba3=new B.ht(A.SX,!0,D.aWy,null)
D.Jb=new C.a1z(0,"none")
D.abh=new C.a1z(1,"deflate")
D.abi=new C.a1z(2,"bzip2")
D.baL=new B.k3(0.165,0.84,0.44,1)
D.cGl=w([A.cl,A.dM,A.az],x.O)
D.bG5=new B.a8(A.ax,A.aE,A.w,D.cGl,null,null)
D.aRc=new B.o(null,null,null,null,null,D.bG5,A.n)
D.bAF=new B.ac(A.eG,null,A.ak,null,null,null)
D.aX7=new B.cw(A.B,null,null,D.bAF,null)
D.bbi=new B.ky(D.aRc,A.b6,D.aX7,null)
D.b7V=new B.x(0.058823529411764705,1,1,1,A.t)
D.cJh=w([A.bG,A.pV,A.pV,D.b7V],x.O)
D.co5=w([0,0.32,0.7,1],x.x)
D.bGD=new B.a8(A.ax,A.aE,A.w,D.cJh,D.co5,null)
D.aR0=new B.o(null,null,null,null,null,D.bGD,A.n)
D.bbo=new B.ky(D.aR0,A.b6,null,null)
D.bbE=new B.lT(1,1,null,null,null,A.bh,null)
D.bbH=new B.lT(1,null,null,null,null,D.TM,null)
D.bca=new B.b7(125e4)
D.bcg=new B.b7(17e4)
D.bcq=new B.b7(35964e8)
D.bcw=new B.b7(55e4)
D.bcA=new B.b7(68e4)
D.bd0=new B.i3(0,0,0,5)
D.bdi=new B.L(0,16,16,0)
D.bdl=new B.L(0,18,0,8)
D.bdr=new B.L(0,36,0,36)
D.bdy=new B.L(0,54,0,0)
D.bdF=new B.L(10,0,10,3)
D.bdP=new B.i3(10,16,10,10)
D.bdY=new B.L(10,6,10,0)
D.be_=new B.L(10,6,4,6)
D.be2=new B.L(10,8,10,6)
D.aca=new B.L(11,8,11,11)
D.be8=new B.L(12,0,12,10)
D.be9=new B.L(12,0,12,24)
D.bel=new B.L(12,12,12,4)
D.beo=new B.L(12,12,8,12)
D.beC=new B.L(12,8,8,12)
D.bf2=new B.L(14,14,14,90)
D.bfk=new B.L(16,10,16,20)
D.acY=new B.L(16,6,16,28)
D.bfU=new B.L(18,0,18,10)
D.bfW=new B.L(18,0,18,30)
D.bfY=new B.L(18,10,18,12)
D.bge=new B.L(18,16,14,18)
D.bgj=new B.L(18,18,18,12)
D.bgp=new B.L(18,26,18,12)
D.bgu=new B.L(18,34,18,34)
D.bgv=new B.L(18,4,18,14)
D.bgB=new B.L(18,8,18,24)
D.bgS=new B.L(20,16,14,4)
D.bgX=new B.L(20,18,12,4)
D.bh1=new B.L(20,20,12,20)
D.bh4=new B.L(20,22,20,20)
D.bh9=new B.L(20,6,20,6)
D.bhj=new B.L(22,18,22,18)
D.bhp=new B.L(22,24,22,0)
D.bht=new B.L(22,24,22,4)
D.bhG=new B.L(24,24,24,22)
D.bhV=new B.L(28,44,28,44)
D.bib=new B.L(32,44,32,44)
D.bij=new B.L(38,30,38,20)
D.bio=new B.L(4,0,0,6)
D.biA=new B.i3(4,4,4,4)
D.biY=new B.i3(6,5,6,5)
D.bj1=new B.L(6,6,8,6)
D.bjc=new B.L(8,14,8,14)
D.bjk=new B.L(8,6,12,6)
D.bjs=new B.L(8,8,8,4)
D.adN=new B.L(9,9,9,6)
D.bjC=new B.i3(2.5,2.5,2.5,2.5)
D.bjD=new B.L(10.5,0,10.5,0)
D.bjE=new B.L(7,1.5,7,1.5)
D.cyY=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bjT=new B.zU(null,null,D.cyY,A.yU)
D.cwh=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bjU=new B.zU(null,null,D.cwh,A.yU)
D.aJT=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new B.w("WORD DESIGN",null,D.aJT,null,null,null,null,null,null,null,null,null)
D.bkk=new B.bG(1,A.bq,D.eVg,null)
D.eUW=new B.w("Slides database",null,A6.GU,null,null,null,null,null,null,null,null,null)
D.eSp=new B.w("Admin only \xb7 keep as many as you like",null,V.aJr,null,null,null,null,null,null,null,null,null)
D.cWN=w([D.eUW,A.bw,D.eSp],x.p)
D.bat=new B.fs(A.af,A.e,A.j,A.F,null,A.p,null,0,D.cWN,null)
D.bkn=new B.bG(1,A.bq,D.bat,null)
D.eNn=new B.w("NGMY logo",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.bkq=new B.bG(1,A.bq,D.eNn,null)
D.evW=new B.F(!0,A.ak,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWZ=new B.w("TALK TO THE EDITOR",null,D.evW,null,null,null,null,null,null,null,null,null)
D.bkG=new B.bG(1,A.bq,D.eWZ,null)
D.eHE=new B.w("Tell the AI what to change",null,A6.GU,null,null,null,null,null,null,null,null,null)
D.bkY=new B.bG(1,A.bq,D.eHE,null)
D.blu=new B.Cm(!0,"video/mp4")
D.euh=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG_=new B.w("Move presentations between devices",null,D.euh,null,null,null,!1,null,null,1,null,null)
D.bly=new B.pK(A.e8,A.a_,A.h,D.eG_,null)
D.eH_=new B.w("Edit in Slides",null,A.jM,null,null,null,null,null,null,null,null,null)
D.blz=new B.pK(A.e8,A.B,A.h,D.eH_,null)
D.blO=new B.dp(1,A.ck,D.blz,null)
D.WK=new B.a_(60988,"MaterialIcons",!1)
D.bnc=new B.a_(61352,"MaterialIcons",!1)
D.aff=new B.a_(61531,"MaterialIcons",!1)
D.boq=new B.a_(63062,"MaterialIcons",!1)
D.box=new B.a_(63109,"MaterialIcons",!1)
D.boI=new B.a_(63206,"MaterialIcons",!1)
D.afW=new B.a_(63238,"MaterialIcons",!1)
D.Xj=new B.a_(63365,"MaterialIcons",!1)
D.Xk=new B.a_(63367,"MaterialIcons",!1)
D.Xl=new B.a_(63368,"MaterialIcons",!1)
D.ag5=new B.a_(63384,"MaterialIcons",!1)
D.bpk=new B.a_(63525,"MaterialIcons",!1)
D.bpn=new B.a_(63568,"MaterialIcons",!1)
D.bpH=new B.a_(983072,"MaterialIcons",!1)
D.bq4=new B.a_(983271,"MaterialIcons",!0)
D.bqW=new B.a_(983924,"MaterialIcons",!1)
D.ahd=new B.a_(983965,"MaterialIcons",!1)
D.ahe=new B.a_(983966,"MaterialIcons",!1)
D.br5=new B.a_(984592,"MaterialIcons",!1)
D.brl=new B.ac(A.rM,16,A.aA,null,null,null)
D.brs=new B.ac(A.lW,null,A.c,null,null,null)
D.aho=new B.ac(A.p6,18,A.c,null,null,null)
D.brJ=new B.ac(A.zV,18,O.kM,null,null,null)
D.bso=new B.ac(A.iX,11,null,null,null,null)
D.bsy=new B.ac(A.X2,null,A.eZ,null,null,null)
D.bt7=new B.ac(A.qe,18,A.aA,null,null,null)
D.btc=new B.ac(A_.A6,14,null,null,null,null)
D.btd=new B.ac(A.e4,28,A.cM,null,null,null)
D.btr=new B.ac(A.p7,20,A.c,null,null,null)
D.bty=new B.ac(A.x0,null,null,null,null,null)
D.btE=new B.ac(A.jD,18,A.hT,null,null,null)
D.btJ=new B.ac(A.kU,null,null,null,null,null)
D.bub=new B.ac(A.XC,28,A.c,null,null,null)
D.bot=new B.a_(63065,"MaterialIcons",!1)
D.buk=new B.ac(D.bot,15,A.c,null,null,null)
D.buM=new B.ac(A.um,22,A.bJ,null,null,null)
D.bv5=new B.ac(A.wL,18,null,null,null,null)
D.bva=new B.ac(A.Ej,12,A.c,null,null,null)
D.bqI=new B.a_(983687,"MaterialIcons",!1)
D.bvl=new B.ac(D.bqI,null,A.bf,null,null,null)
D.bvs=new B.ac(A.hs,null,A.bf,null,null,null)
D.bvL=new B.ac(A.pb,22,A.c,null,null,null)
D.bvP=new B.ac(A.cu,13,A.c,null,null,null)
D.bvV=new B.ac(A.e4,26,A.aH,null,null,null)
D.bvY=new B.ac(A.qh,26,A.c,null,null,null)
D.Lo=new B.ac(A.iX,8,A.c,null,null,null)
D.bwf=new B.ac(A.p6,40,A.c,null,null,null)
D.bwg=new B.ac(A.bm9,null,null,null,null,null)
D.bwk=new B.ac(A.rU,20,null,null,null,null)
D.bqH=new B.a_(983683,"MaterialIcons",!1)
D.bwu=new B.ac(D.bqH,null,A.aW,null,null,null)
D.bwv=new B.ac(A.iX,16,A.bf,null,null,null)
D.bwQ=new B.ac(A.uA,null,null,null,null,null)
D.ahV=new B.ac(A.up,22,A.c,null,null,null)
D.bwU=new B.ac(A.dN,17,A.c,null,null,null)
D.ahW=new B.ac(A.iX,9,A.c,null,null,null)
D.bwZ=new B.ac(A.uj,null,null,null,null,null)
D.bmq=new B.a_(57744,"MaterialIcons",!1)
D.bx5=new B.ac(D.bmq,null,null,null,null,null)
D.bx8=new B.ac(A.uj,16,null,null,null,null)
D.brc=new B.a_(985181,"MaterialIcons",!1)
D.ED=new B.ac(D.brc,null,null,null,null,null)
D.bxk=new B.ac(A.kU,16,A.bJ,null,null,null)
D.bqy=new B.a_(983615,"MaterialIcons",!1)
D.bxm=new B.ac(D.bqy,12,A.c,null,null,null)
D.ai1=new B.ac(A.wH,16,null,null,null,null)
D.bxt=new B.ac(A.dN,21,A.c,null,null,null)
D.bxy=new B.ac(A.hs,17,A.c,null,null,null)
D.bxz=new B.ac(A.um,null,null,null,null,null)
D.by0=new B.ac(A.p5,22,E.mo,null,null,null)
D.by8=new B.ac(A.p4,13,A.ak,null,null,null)
D.bm7=new B.a_(57495,"MaterialIcons",!1)
D.bye=new B.ac(D.bm7,null,null,null,null,null)
D.byi=new B.ac(A.no,18,A.c,null,null,null)
D.byC=new B.ac(A.rY,28,A.c,null,null,null)
D.byK=new B.ac(D.afW,null,A.az,null,null,null)
D.byL=new B.ac(A.p7,22,A.c,null,null,null)
D.aib=new B.ac(A.WG,16,null,null,null,null)
D.bzu=new B.ac(A.um,32,A.c,null,null,null)
D.bAc=new B.ac(A.iG,22,A.c,null,null,null)
D.bAg=new B.ac(A.qh,22,A.ak,null,null,null)
D.aiq=new B.ac(A.rM,null,A.c2,null,null,null)
D.bBa=new B.ac(A.uo,18,null,null,null,null)
D.bBI=new B.ac(A.dN,18,A.cV,null,null,null)
D.Yn=new B.ac(A.cu,18,A.aA,null,null,null)
D.bBP=new B.ac(A.agT,null,null,null,null,null)
D.bCe=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aJJ,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.emY=new B.F(!0,A.bP,null,null,null,null,null,A.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCx=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.emY,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.bCY=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.cCu=w([A.e9,A.az],x.O)
D.bE5=new B.a8(A.a_,A.a7,A.w,D.cCu,null,null)
D.bEf=new B.a8(A.b4,A.bd,A.Rc,A.apk,null,null)
D.aYR=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b1p=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b42=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b_K=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.co8=w([D.aYR,D.b1p,D.b42,D.b_K],x.O)
D.bEx=new B.a8(A.ax,A.aE,A.w,D.co8,A.Fa,null)
D.cWU=w([A.dh,A.bz,A.b0],x.O)
D.bEz=new B.a8(A.b4,A.bd,A.Rc,D.cWU,null,null)
D.cY0=w([A.bf,A.cf],x.O)
D.bED=new B.a8(A.a_,A.a7,A.w,D.cY0,null,null)
D.cTF=w([A.hR,A.dC,A.aZ],x.O)
D.bEF=new B.a8(A.ax,A.aE,A.w,D.cTF,null,null)
D.cHT=w([A.cW,A.eT],x.O)
D.bEI=new B.a8(A.a_,A.a7,A.w,D.cHT,null,null)
D.cWP=w([O.kM,A.dC],x.O)
D.aja=new B.a8(A.a_,A.a7,A.w,D.cWP,null,null)
D.b1V=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cWM=w([D.b1V,D.w4,A.bQ],x.O)
D.bEN=new B.a8(A.a_,A.a7,A.w,D.cWM,null,null)
D.cE_=w([A.br,A.dl,A.fn],x.O)
D.bEO=new B.a8(A.ax,A.aE,A.w,D.cE_,null,null)
D.LD=new B.a8(A.a_,A.a7,A.w,A.Fm,null,null)
D.b8B=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.chj=w([D.b8B,A.bQ,A.iU],x.O)
D.ajf=new B.a8(A.ax,A.aE,A.w,D.chj,null,null)
D.cMH=w([A.vW,A.at,D.zc],x.O)
D.bFG=new B.a8(A.a_,A.a7,A.w,D.cMH,null,null)
D.b9y=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b0u=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b4T=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cDc=w([D.b9y,D.b0u,D.b4T],x.O)
D.ajg=new B.a8(A.a_,A.a7,A.w,D.cDc,null,null)
D.b1W=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bHx=w([Ao.ab2,D.b1W],x.O)
D.bFP=new B.a8(A.b4,A.bd,A.w,D.bHx,null,null)
D.cBr=w([A.mn,A.bR],x.O)
D.bFS=new B.a8(A.b4,A.bd,A.w,D.cBr,null,null)
D.cR9=w([A.az,A.dM],x.O)
D.bFY=new B.a8(A.a_,A.a7,A.w,D.cR9,null,null)
D.aa6=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.ar1=w([D.aa6,D.iS,D.Is],x.O)
D.bGo=new B.a8(A.ax,A.aE,A.w,D.ar1,null,null)
D.chb=w([A.dq,A.dQ],x.O)
D.bGz=new B.a8(A.b4,A.bd,A.w,D.chb,null,null)
D.cOz=w([A.r6,A.z6],x.O)
D.bHi=new B.a8(A.a_,A.a7,A.w,D.cOz,null,null)
D.eOP=new B.w("Which Bio link?",null,A.cq,null,null,null,null,null,null,null,null,null)
D.bHt=new B.pe(null,D.eOP,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xo=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a12=new C.kB(2,"elegantNavy")
D.f9P=w([A.TF,D.iS,A.bQ],x.O)
D.ji=new C.wz(0,"classic")
D.a0Q=new C.j8("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a12,4294967035,4279378237,4290283019,D.ji)
D.azF=new C.kB(3,"elegantGold")
D.aYt=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZg=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a8W=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.f9i=w([D.aYt,D.aZg,D.a8W],x.O)
D.a0O=new C.j8("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.azF,4294966515,4281016592,4289102906,D.ji)
D.dhD=new C.kB(22,"goldRibbon")
D.f9e=w([A.TF,D.iS,A.hE],x.O)
D.a0H=new C.j8("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dhD,4294967035,4279378237,4291404327,D.ji)
D.dhE=new C.kB(23,"goldBaroque")
D.a9r=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.f9k=w([D.a9r,A.at,A.iU],x.O)
D.a0I=new C.j8("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dhE,4294964964,4283053072,4292128567,D.ji)
D.dhG=new C.kB(4,"elegantEmerald")
D.b_k=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b05=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.f9q=w([D.b_k,D.b05,A.hE],x.O)
D.a0J=new C.j8("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dhG,4294376440,4279122734,4291404327,D.ji)
D.dhH=new C.kB(5,"elegantBurgundy")
D.b3a=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.f9x=w([D.b3a,A.a8j,A.hE],x.O)
D.a0M=new C.j8("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dhH,4294965238,4283043359,4291404327,D.ji)
D.dhA=new C.kB(19,"goldFiligree")
D.IZ=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.f9l=w([D.IZ,A.at,A.iU],x.O)
D.a0K=new C.j8("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dhA,4294966259,4279378237,4292128567,D.ji)
D.dhB=new C.kB(20,"goldLaurel")
D.b8s=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.f9y=w([A.Im,A.hE,D.b8s],x.O)
D.a0L=new C.j8("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dhB,4294966776,4282000405,4291404327,D.ji)
D.dhC=new C.kB(21,"goldCrest")
D.a8d=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b8y=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.f9n=w([D.a8d,A.at,D.b8y],x.O)
D.a0P=new C.j8("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dhC,4294965484,4283053072,4292128567,D.ji)
D.dhF=new C.kB(24,"goldStar")
D.b9u=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.f9r=w([D.b9u,A.at,D.iS],x.O)
D.a0N=new C.j8("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dhF,4294966518,4279378237,4292128567,D.ji)
D.EN=w([D.a0Q,D.a0O,D.a0H,D.a0I,D.a0J,D.a0M,D.a0K,D.a0L,D.a0P,D.a0N],x.h)
D.pk=new C.m3(0,"blank")
D.P4=new C.m3(1,"title")
D.m3=new C.m3(2,"titleContent")
D.dC3=new C.m3(3,"twoColumn")
D.B0=new C.m3(4,"section")
D.dC4=new C.m3(5,"comparison")
D.FW=new C.m3(6,"flashcard")
D.FX=new C.m3(7,"quiz")
D.FY=new C.m3(8,"worksheet")
D.ajA=w([D.pk,D.P4,D.m3,D.dC3,D.B0,D.dC4,D.FW,D.FX,D.FY],B.az("M<m3>"))
D.bHJ=w([0,0,0],x.cA)
D.arU=w([E.a8I,A.dQ],x.O)
D.k1=w([A.bQ,A.bJ,A.hD,A.hn,D.zc],x.O)
D.ddw=new C.iL("fireworks","Royal Fireworks","Thank you for celebrating with us",D.arU,D.k1)
D.b8J=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b38=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cBF=w([D.b8J,D.b38],x.O)
D.ddn=new C.iL("confetti","Golden Confetti","Together we rise",D.cBF,D.k1)
D.cz3=w([A.n1,A.T_],x.O)
D.ddo=new C.iL("crown","Crown of Glory","Built for our community",D.cz3,D.k1)
D.b0k=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b2O=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cFd=w([D.b0k,D.b2O],x.O)
D.t0=w([A.bP,A.aN,A.c,A.aJ,A.ai],x.O)
D.ddi=new C.iL("aurora","Aurora Gala","A brighter future, together",D.cFd,D.t0)
D.aYV=new B.x(1,0.16470588235294117,0.10196078431372549,0.0196078431372549,A.t)
D.b44=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cOF=w([D.aYV,D.b44],x.O)
D.ddz=new C.iL("champagne","Champagne Toast","Cheers to every member",D.cOF,D.k1)
D.ddA=new C.iL("diamonds","Diamond Rain","Every member is a jewel",W.asm,D.t0)
D.aZ8=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b2m=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cT_=w([D.aZ8,D.b2m],x.O)
D.ddd=new C.iL("starburst","Golden Starburst","Thank you!",D.cT_,D.k1)
D.bHC=w([A.fo,A.tY],x.O)
D.a84=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Na=w([A.nS,A.i4,A.u1,A.oG,D.a84],x.O)
D.ddH=new C.iL("balloons","Luxury Balloons","Let's celebrate",D.bHC,D.Na)
D.cyo=w([A.T6,A.x],x.O)
D.ddv=new C.iL("galaxy","Galaxy Spiral","The sky is not the limit",D.cyo,D.t0)
D.b7c=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cLx=w([A.kN,D.b7c],x.O)
D.ddq=new C.iL("redcarpet","Red Carpet","Tonight we shine",D.cLx,D.k1)
D.b5o=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b3U=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cPv=w([D.b5o,D.b3U],x.O)
D.ddf=new C.iL("coins","Gold Coin Rain","Every contribution counts",D.cPv,D.k1)
D.cVq=w([A.dq,A.i3],x.O)
D.ddl=new C.iL("lanterns","Sky Lanterns","Lighting the way together",D.cVq,D.k1)
D.b18=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cwz=w([A.w0,D.b18],x.O)
D.ddh=new C.iL("hearts","Floating Hearts","Made with love",D.cwz,D.Na)
D.aZF=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b_q=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cWK=w([D.aZF,D.b_q],x.O)
D.ddG=new C.iL("petals","Rose Petals","Thank you, from our hearts",D.cWK,D.Na)
D.b7T=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cTj=w([A.km,D.b7T],x.O)
D.ddc=new C.iL("butterflies","Golden Butterflies","New beginnings",D.cTj,D.k1)
D.b4R=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cxq=w([D.b4R,A.x],x.O)
D.ddy=new C.iL("neon","Neon Night","Let's go!",D.cxq,D.t0)
D.b26=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cRi=w([A.IH,D.b26],x.O)
D.ddB=new C.iL("disco","Disco Ball","Party time",D.cRi,D.t0)
D.b5g=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cQT=w([A.hR,D.b5g],x.O)
D.ddg=new C.iL("sunrise","Golden Sunrise","A new day for our community",D.cQT,D.k1)
D.cQv=w([A.re,A.dQ],x.O)
D.ddC=new C.iL("pearls","Ocean Pearls","Deep roots, bright future",D.cQv,D.t0)
D.b0q=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cQI=w([D.b0q,A.dQ],x.O)
D.ddF=new C.iL("snow","Winter Gala","Warm wishes to all",D.cQI,D.t0)
D.aYC=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.aZr=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cVN=w([D.aYC,D.aZr],x.O)
D.ddu=new C.iL("laurel","Laurel Victory","We did it together",D.cVN,D.k1)
D.aYs=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b2K=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cvK=w([D.aYs,D.b2K],x.O)
D.ddE=new C.iL("ribbons","Silk Ribbons","Elegance in every step",D.cvK,D.k1)
D.b3G=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.ch8=w([G.zb,D.b3G],x.O)
D.ddr=new C.iL("kente","Kente Pride","Proud of our roots",D.ch8,D.k1)
D.b5S=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b89=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cGF=w([D.b5S,D.b89],x.O)
D.ddm=new C.iL("trophy","Trophy Shine","Winners together",D.cGF,D.k1)
D.cQQ=w([A.CB,A.x],x.O)
D.dde=new C.iL("shooting","Shooting Stars","Make a wish",D.cQQ,D.t0)
D.aYI=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aaT=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cW1=w([D.aYI,D.aaT],x.O)
D.dds=new C.iL("bokeh","Golden Bokeh","Shine bright",D.cW1,D.k1)
D.aZ1=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cMj=w([D.aZ1,A.x],x.O)
D.ddk=new C.iL("orbits","Golden Orbits","Always moving forward",D.cMj,D.k1)
D.b7U=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cJb=w([A.a8U,D.b7U],x.O)
D.ddp=new C.iL("flowers","Blooming Garden","Growing together",D.cJb,D.Na)
D.aYP=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZl=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cUY=w([D.aYP,D.aZl],x.O)
D.ddj=new C.iL("music","Music Party","Celebrate with us",D.cUY,D.t0)
D.b_a=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b8u=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cwK=w([D.b_a,D.b8u],x.O)
D.ddD=new C.iL("mandala","Royal Mandala","Harmony and unity",D.cwK,D.k1)
D.cJf=w([G.zb,D.aaT],x.O)
D.ddx=new C.iL("sparklers","Golden Sparklers","Light up the night",D.cJf,D.k1)
D.ddt=new C.iL("city","City Lights","The whole city celebrates",D.arU,D.k1)
D.EW=w([D.ddw,D.ddn,D.ddo,D.ddi,D.ddz,D.ddA,D.ddd,D.ddH,D.ddv,D.ddq,D.ddf,D.ddl,D.ddh,D.ddG,D.ddc,D.ddy,D.ddB,D.ddg,D.ddC,D.ddF,D.ddu,D.ddE,D.ddr,D.ddm,D.dde,D.dds,D.ddk,D.ddp,D.ddj,D.ddD,D.ddx,D.ddt],B.az("M<iL>"))
D.dUz=new B.T("","No ring")
D.e1h=new B.T("platinum","Platinum")
D.e_G=new B.T("glow","Glow")
D.dWg=new B.T("double","Double line")
D.dVF=new B.T("framed","Gallery frame")
D.dUp=new B.T("rosegold","Rose gold")
D.e04=new B.T("jewels","Jeweled")
D.dZb=new B.T("aurora","Aurora")
D.Ao=w([D.dUz,A.a2k,D.e1h,D.e_G,H.aFP,D.dWg,A.a2m,D.dVF,D.dUp,D.e04,D.dZb],x.L)
D.c0T=w([D.a0K,D.a0L,D.a0P,D.a0H,D.a0I,D.a0N],x.h)
D.bxG=new B.ac(G.aeQ,16,null,null,null,null)
D.aTZ=new B.uA(A.bn,D.bxG,null,x.U)
D.bmz=new B.a_(58027,"MaterialIcons",!1)
D.brr=new B.ac(D.bmz,16,null,null,null,null)
D.aTX=new B.uA(A.L,D.brr,null,x.U)
D.bmA=new B.a_(58030,"MaterialIcons",!1)
D.bvr=new B.ac(D.bmA,16,null,null,null,null)
D.aU_=new B.uA(A.dO,D.bvr,null,x.U)
D.c6Y=w([D.aTZ,D.aTX,D.aU_],B.az("M<uA<pt>>"))
D.cey=w([A.zh,A.hl],x.O)
D.cez=w([A.br,A.bs,A.fn],x.O)
D.N_=w([A.bJ,A.hn,A.hD,A.at,A.oG],x.O)
D.che=w([A.bQ,D.iS,D.Is],x.O)
D.chL=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dSW=new B.T(4278913286,4280030216)
D.dTd=new B.T(4279373061,4278518787)
D.dTk=new B.T(4279898630,4278847235)
D.cG6=w([D.dSW,D.dTd,D.dTk],x.n)
D.cCi=w(["\u265b","\u269c","\u2726"],x.s)
D.dhy=new C.wB("Royal Onyx & Gold",D.cG6,4292128567,4294370209,4294965479,3874020544,D.cCi)
D.dSJ=new B.T(4278326799,4278598442)
D.dSL=new B.T(4278395929,4278258953)
D.dSS=new B.T(4278599728,4278327826)
D.cVh=w([D.dSJ,D.dSL,D.dSS],x.n)
D.cxj=w(["\u269c","\u2756","\u2727"],x.s)
D.dhv=new C.wB("Imperial Emerald",D.cVh,4293050997,4294699968,4294180856,3872254170,D.cxj)
D.dSM=new B.T(4278455076,4278918747)
D.dSR=new B.T(4278587439,4278322714)
D.dT4=new B.T(4279051376,4278455076)
D.cTB=w([D.dSM,D.dSR,D.dT4],x.n)
D.cMW=w(["\u2654","\u2726","\u2748"],x.s)
D.dhp=new C.wB("Sapphire Crown",D.cTB,4291417834,4294967295,4294310143,3871986666,D.cMW)
D.dTi=new B.T(4279894534,4283041554)
D.dTu=new B.T(4281008906,4279042307)
D.dTC=new B.T(4284221976,4279894534)
D.cYs=w([D.dTi,D.dTu,D.dTC],x.n)
D.cyv=w(["\u265b","\u2766","\u2726"],x.s)
D.dhr=new C.wB("Ruby Throne",D.cYs,4293378685,4294963145,4294964466,3874213833,D.cyv)
D.dTc=new B.T(4279371039,4281995100)
D.dTm=new B.T(4280092723,4278714896)
D.dTz=new B.T(4283045242,4279371039)
D.cVE=w([D.dTc,D.dTm,D.dTz],x.n)
D.cTW=w(["\u2655","\u2756","\u2727"],x.s)
D.dhw=new C.wB("Amethyst Palace",D.cVE,4293314984,4294963421,4294702591,3873229802,D.cTW)
D.dSO=new B.T(4278519045,4280032287)
D.dT5=new B.T(4279111184,4278321666)
D.dTr=new B.T(4280492839,4278716426)
D.cSB=w([D.dSO,D.dT5,D.dTr],x.n)
D.cLk=w(["\u2726","\u25c6","\u2742"],x.s)
D.dht=new C.wB("Obsidian & Platinum",D.cSB,4293256418,4294967295,4294638330,3872378836,D.cLk)
D.dTj=new B.T(4279896588,4282194463)
D.dTs=new B.T(4280553487,4279043334)
D.dTA=new B.T(4283048488,4279896588)
D.cKQ=w([D.dTj,D.dTs,D.dTA],x.n)
D.cX4=w(["\u2766","\u273f","\u2727"],x.s)
D.dhq=new C.wB("Rose Gold Velvet",D.cKQ,4293440672,4294960345,4294964979,3874214602,D.cX4)
D.dSP=new B.T(4278520340,4279180595)
D.dSU=new B.T(4278718495,4278322443)
D.dTg=new B.T(4279510591,4278520340)
D.cnR=w([D.dSP,D.dSU,D.dTg],x.n)
D.cLZ=w(["\u269c","\u2736","\u2756"],x.s)
D.dhu=new C.wB("Midnight Brass",D.cnR,4291405148,4293975208,4294439914,3872837564,D.cLZ)
D.dTP=new B.T(4294703086,4293780428)
D.dTL=new B.T(4294307549,4293187253)
D.dTQ=new B.T(4294966517,4293977807)
D.cAv=w([D.dTP,D.dTL,D.dTQ],x.n)
D.cMm=w(["\u269c","\u265b","\u2726"],x.s)
D.dhx=new C.wB("Ivory Marble & Gold",D.cAv,4289760572,4286209048,4280951062,3863625518,D.cMm)
D.dT_=new B.T(4278978566,4280555024)
D.dTf=new B.T(4279504137,4278518530)
D.dTw=new B.T(4281211923,4278978566)
D.cyn=w([D.dT_,D.dTf,D.dTw],x.n)
D.cUC=w(["\u2742","\u2726","\u265c"],x.s)
D.dhs=new C.wB("Onyx & Copper",D.cyn,4291856987,4294365880,4294964718,3873885630,D.cUC)
D.chS=w([D.dhy,D.dhv,D.dhp,D.dhr,D.dhw,D.dht,D.dhq,D.dhu,D.dhx,D.dhs],B.az("M<wB>"))
D.ck7=w([A.at,D.zc,A.hn],x.O)
D.apt=w([A.hn,A.cd,A.b9,A.bD],x.O)
D.dYG=new B.T("","Original")
D.dZA=new B.T("circle","Circle")
D.e1D=new B.T("rounded","Rounded")
D.e2i=new B.T("triangle","Triangle")
D.e_O=new B.T("hexagon","Hexagon")
D.dZP=new B.T("diamond","Diamond")
D.dZa=new B.T("arch","Arch")
D.At=w([D.dYG,D.dZA,D.e1D,D.e2i,D.e_O,D.dZP,D.dZa],x.L)
D.dcE=new C.kV("classic_blue","Classic Blue","Normal",A.bf,A.c,A.jT,A.dH,A.aI)
D.dcU=new C.kV("campus_green","Campus Green","Normal",A.aW,A.lL,A.pY,A.fN,A.fr)
D.dcL=new C.kV("warm_sand","Warm Sand","Normal",A.e1,A.hD,A.bJ,A.iA,A.n5)
D.dcS=new C.kV("slate_minimal","Slate Minimal","Normal",A.bA,A.aN,A.aJ,A.M,A.aI)
D.dcD=new C.kV("coral_fresh","Coral Fresh","Normal",A.cl,A.i6,A.pS,A.kO,A.r7)
D.dcT=new C.kV("lavender_calm","Lavender Calm","Normal",A.b0,A.oI,A.z1,A.q0,A.jS)
D.dcF=new C.kV("ocean_breeze","Ocean Breeze","Normal",A.eT,A.q4,A.r3,A.ra,A.n6)
D.aad=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dcQ=new C.kV("berry_pop","Berry Pop","Normal",A.f4,D.aad,A.kJ,G.U_,A.D5)
D.dcG=new C.kV("midnight_pro","Midnight Pro","Professional",A.az,A.M,A.dq,A.kJ,A.ct)
D.dcP=new C.kV("executive_navy","Executive Navy","Professional",A.db,A.a9B,A.dH,A.kK,A.bP)
D.dcN=new C.kV("boardroom_charcoal","Boardroom Charcoal","Professional",A.ai,A.bh,A.M,A.aN,A.ct)
D.dcH=new C.kV("corporate_steel","Corporate Steel","Professional",A.mk,A.M,A.lN,A.hp,A.bP)
D.dcK=new C.kV("gold_luxe","Gold Luxe","Luxury",A.nQ,A.dw,A.nR,A.n8,A.bJ)
D.b5j=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dcO=new C.kV("rose_gold_elite","Rose Gold Elite","Luxury",A.hl,D.b5j,A.TS,A.i4,A.oG)
D.dcR=new C.kV("platinum_night","Platinum Night","Luxury",A.ct,A.dQ,A.bh,A.aN,A.aJ)
D.dcV=new C.kV("emerald_prestige","Emerald Prestige","Luxury",A.aR,A.oK,A.eN,A.oQ,A.j4)
D.dcC=new C.kV("royal_purple","Royal Purple","Luxury",A.lJ,A.Ti,A.jS,A.kJ,A.SW)
D.dcM=new C.kV("neon_pitch","Neon Pitch","Bold",A.b9,A.dQ,A.M,A.ba,A.aJ)
D.dcJ=new C.kV("crimson_impact","Crimson Impact","Bold",A.bR,A.kN,A.fp,A.ro,A.fM)
D.dcI=new C.kV("sunset_gallery","Sunset Gallery","Bold",A.ha,A.r7,A.kO,A.pS,A.oM)
D.F4=w([D.dcE,D.dcU,D.dcL,D.dcS,D.dcD,D.dcT,D.dcF,D.dcQ,D.dcG,D.dcP,D.dcN,D.dcH,D.dcK,D.dcO,D.dcR,D.dcV,D.dcC,D.dcM,D.dcJ,D.dcI],B.az("M<kV>"))
D.cvw=w([A.bQ,D.iS],x.O)
D.cL4=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.dZ6=new B.T("Faces & people",D.cL4)
D.ckb=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dSf=new B.T("Ideas & work",D.ckb)
D.cCH=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e_S=new B.T("Nature",D.cCH)
D.cLd=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.dXk=new B.T("Places & things",D.cLd)
D.cFK=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.dZc=new B.T("Symbols",D.cFK)
D.cvB=w([D.dZ6,D.dSf,D.e_S,D.dXk,D.dZc],B.az("M<+(n,al<n>)>"))
D.aYU=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cvV=w([A.bQ,D.a8W,D.aYU],x.O)
D.aTt=new B.aa(0,A.G,A.Ij,A.aAq,40)
D.aTa=new B.aa(0,A.G,A.n3,A.e6,8)
D.cw4=w([D.aTt,D.aTa],x.V)
D.cwv=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.apT=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.Zx=w([A.hn,A.fn,A.bR,A.aG,A.cl],x.O)
D.cxd=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a99=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cxo=w([A.TL,D.a99,A.TL],x.O)
D.cxs=w([A.hE,D.iS,D.Is],x.O)
D.dXh=new B.T(A.bn,D.Xk)
D.dXT=new B.T(A.L,D.Xj)
D.dUQ=new B.T(A.dO,D.Xl)
D.cyi=w([D.dXh,D.dXT,D.dUQ],B.az("M<+(pt,a_)>"))
D.dkw=new C.tU("gazette","Old Gazette",4293909936,4292460166,4280949518,4286193426,"blackletter","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","an old-fashioned town gazette from the 1920s: formal, dignified, a little poetic, with a bold dramatic headline",!0,"sepia",3,!1)
D.dkz=new C.tU("chronicle","Sepia Chronicle",4293448356,4291405419,4282065938,4284168730,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a classic sepia chronicle from long ago: warm, storytelling, with a grand headline",!0,"sepia",3,!1)
D.dkt=new C.tU("times","Classic Times",4294176480,4293320651,4279636750,4279636750,"blackletter","NgmyBlackletter","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",3,!1)
D.dkA=new C.tU("daily","The Daily",4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",3,!1)
D.dky=new C.tU("tabloid","Big Tabloid",4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",2,!1)
D.dkx=new C.tU("modern","Modern Digest",4294507260,4293060848,4279179050,4279080072,"split","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",3,!1)
D.dkv=new C.tU("midnight","Midnight Edition",4279310375,4278915104,4294047225,4294626325,"centered","NgmyOldStandard","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",3,!0)
D.dku=new C.tU("herald","NGMY Herald",4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",3,!1)
D.aq8=w([D.dkw,D.dkz,D.dkt,D.dkA,D.dky,D.dkx,D.dkv,D.dku],B.az("M<tU>"))
D.cG=new C.H_(0,"text")
D.l1=new C.H_(1,"image")
D.eP=new C.H_(2,"shape")
D.P3=new C.H_(3,"pdf")
D.kz=new C.H_(4,"signature")
D.a19=new C.H_(5,"bio")
D.cz7=w([D.cG,D.l1,D.eP,D.P3,D.kz,D.a19],B.az("M<H_>"))
D.cz8=w([A.bi,A.cJ],B.az("M<FY>"))
D.czI=w(["School","Documents","Sign & present"],x.s)
D.aTx=new B.aa(0,A.G,A.aaL,A.tk,28)
D.cA0=w([D.aTx],x.V)
D.cAi=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nj=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqg=w([A.hn,A.D4,A.aJ,A.c,A.nS,A.at],x.O)
D.cBw=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history."],x.s)
D.e2Z=new B.T(0.1,0.08)
D.e_Q=new B.T(0.3,0.05)
D.dUD=new B.T(0.55,0.1)
D.dWJ=new B.T(0.8,0.06)
D.dYj=new B.T(0.92,0.16)
D.dY0=new B.T(0.2,0.2)
D.dWX=new B.T(0.7,0.22)
D.e_2=new B.T(0.05,0.4)
D.dYz=new B.T(0.95,0.45)
D.dUX=new B.T(0.12,0.7)
D.dW6=new B.T(0.88,0.75)
D.dWb=new B.T(0.4,0.9)
D.dTW=new B.T(0.65,0.93)
D.dWw=new B.T(0.25,0.97)
D.dXg=new B.T(0.85,0.9)
D.dVo=new B.T(0.5,0.04)
D.cBA=w([D.e2Z,D.e_Q,D.dUD,D.dWJ,D.dYj,D.dY0,D.dWX,D.e_2,D.dYz,D.dUX,D.dW6,D.dWb,D.dTW,D.dWw,D.dXg,D.dVo],x.G)
D.cBJ=w([A.c,A.hl,A.b3,A.aR],x.O)
D.dDG=new C.jt("office_blue","Office Blue",A.bf,A.dH,A.aI,A.c,A.jT)
D.dDR=new C.jt("campus_green","Campus Green",A.aW,A.fN,A.fr,A.lL,A.pY)
D.dDH=new C.jt("sunset","Sunset",A.ha,A.kO,A.n5,A.i6,A.pS)
D.dDI=new C.jt("midnight","Midnight",A.az,A.kJ,A.ct,A.M,A.dq)
D.dDT=new C.jt("classic","Classic",A.dC,A.dw,A.lg,A.hD,A.hC)
D.dDQ=new C.jt("rose_gold","Rose Gold",A.hl,A.w1,A.w0,A.u1,A.zh)
D.dDB=new C.jt("ocean_teal","Ocean Teal",A.eT,A.ra,A.n6,A.q4,A.r3)
D.dDA=new C.jt("slate_pro","Slate Pro",A.bA,A.M,A.aI,A.aN,A.aJ)
D.dDz=new C.jt("neon_night","Neon Night",A.b9,A.ba,A.aJ,A.dQ,A.M)
D.dDL=new C.jt("lavender","Lavender",A.b0,A.q0,A.jS,A.oI,A.z1)
D.dDN=new C.jt("coral","Coral",A.cl,A.kO,A.r7,A.i6,A.oM)
D.dDC=new C.jt("forest","Forest",A.h9,A.eL,A.d3,A.lM,A.eZ)
D.dDD=new C.jt("berry","Berry",A.f4,G.U_,A.D5,D.aad,A.kJ)
D.dDK=new C.jt("sand","Sand",A.e1,A.iA,A.n5,A.hD,A.bJ)
D.dDP=new C.jt("ice","Ice",A.mk,A.II,A.aI,A.mi,A.hp)
D.dDF=new C.jt("charcoal","Charcoal",A.ai,A.aN,A.ct,A.bh,A.M)
D.dDy=new C.jt("mint","Mint",A.aR,A.ff,A.fN,A.lM,A.oQ)
D.dDO=new C.jt("crimson","Crimson",A.bR,A.mn,A.kN,A.D2,A.ro)
D.b04=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dDJ=new C.jt("gold","Gold",A.nQ,A.r6,A.nR,D.b04,A.n8)
D.dDM=new C.jt("aqua","Aqua",A.bK,A.CQ,A.nN,A.oJ,A.nT)
D.dDE=new C.jt("plum","Plum",A.lJ,A.tY,A.D5,A.CI,A.rj)
D.dDS=new C.jt("steel","Steel",A.db,A.dH,A.bh,A.jT,A.kK)
D.ZN=w([D.dDG,D.dDR,D.dDH,D.dDI,D.dDT,D.dDQ,D.dDB,D.dDA,D.dDz,D.dDL,D.dDN,D.dDC,D.dDD,D.dDK,D.dDP,D.dDF,D.dDy,D.dDO,D.dDJ,D.dDM,D.dDE,D.dDS],B.az("M<jt>"))
D.cC2=w([A.bQ,A.iU],x.O)
D.P5=new C.hm(10,"rotate3d")
D.G_=new C.hm(8,"flip")
D.azY=new C.hm(19,"spiral")
D.pl=new C.hm(16,"bounce")
D.aA0=new C.hm(9,"flipVertical")
D.cC3=w([D.P5,D.G_,D.azY,D.pl,D.aA0],x.i)
D.dY=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.aqq=w([0.62,1],x.x)
D.cCP=w([0,0.32,0.68,1],x.x)
D.m4=new C.hm(6,"zoom")
D.te=new C.hm(4,"slideUp")
D.td=new C.hm(2,"slideLeft")
D.cCX=w([D.m4,D.G_,D.te,D.P5,D.td],x.i)
D.cDq=w([A.cd,A.hl,A.i4,A.hn,A.c],x.O)
D.aTo=new B.aa(0,A.G,D.a9k,A.tk,30)
D.cE4=w([D.aTo],x.V)
D.dKB=new B.v(0,-2.5)
D.dKr=new B.v(-2.5,0)
D.dJG=new B.v(2.5,0)
D.cE7=w([A.Pk,A.aAC,A.aAP,A.a1w,D.dKB,H.aAM,D.dKr,D.dJG],x.dN)
D.Fb=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cEy=w([23,114,69,56,80,144],x.t)
D.cEX=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cFk=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cGJ=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cGO=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.b7=new C.tV(0,"rectangle")
D.ex=new C.tV(1,"circle")
D.kA=new C.tV(6,"hexagon")
D.cH_=w([D.b7,D.ex,D.kA],x.m)
D.nv=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aaj=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cHy=w([D.aaj,A.eL],x.O)
D.dUJ=new B.T("","Classic")
D.dU0=new B.T("caps","Bold caps")
D.e_5=new B.T("elegant","Elegant")
D.e1N=new B.T("shadow","Shadow")
D.dWU=new B.T("neon","Neon glow")
D.e17=new B.T("outline","Outline")
D.e0F=new B.T("marker","Highlighter")
D.e1X=new B.T("stamp","Stamp")
D.e1A=new B.T("retro","Retro")
D.dWn=new B.T("threed","3D")
D.e_n=new B.T("fire","Fire")
D.e_W=new B.T("ice","Ice")
D.dZz=new B.T("chalk","Chalk")
D.dZD=new B.T("comic","Comic")
D.e1Z=new B.T("sunset","Sunset")
D.e2E=new B.T("softglow","Soft glow")
D.e0s=new B.T("lowercase","Lowercase")
D.dZT=new B.T("double","Echo")
D.e2J=new B.T("whisper","Whisper")
D.ar8=w([D.dUJ,D.dU0,D.e_5,D.e1N,D.dWU,D.e17,D.e0F,D.e1X,D.e1A,D.dWn,H.aFN,D.e_n,D.e_W,D.dZz,D.dZD,A.a2k,D.e1Z,D.e2E,D.e0s,D.dZT,D.e2J],x.L)
D.cIF=w([3,5,7,10,12,15],x.t)
D.cJT=w([A.cd,A.bJ,A.c,A.eM,A.dh],x.O)
D.cK4=w([0.45,1],x.x)
D.Fd=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cKo=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.f51=new C.o2("Original",0,1,1,0,0,0)
D.f55=new C.o2("Black & white",0,1.1,0,0,0,0)
D.f4T=new C.o2("Noir",-0.05,1.55,0,0,0,0)
D.f4X=new C.o2("Sepia",0,1,0.25,0.9,0,0)
D.f4W=new C.o2("Vivid",0,1.15,1.6,0,0,0)
D.f4P=new C.o2("Pop",0,1.3,1.9,0,0,0)
D.f4R=new C.o2("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.f52=new C.o2("Matte",0,0.9,0.85,0,0,0.55)
D.f4Y=new C.o2("Cool",0,1.05,1,-0.8,0,0)
D.f54=new C.o2("Warm",0.03,1.05,1.1,0.8,0,0)
D.f4Q=new C.o2("Golden hour",0.04,1,1.25,1,0,0)
D.f4V=new C.o2("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.f53=new C.o2("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.f4U=new C.o2("Dramatic",-0.05,1.5,1.2,0,0,0)
D.f5_=new C.o2("Retro",0,0.9,0.7,0.4,0,0.35)
D.f4Z=new C.o2("Forest",0,1,1.2,-0.1,-0.45,0)
D.f50=new C.o2("Rose",0,1,1.1,0.3,0.4,0)
D.f4S=new C.o2("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cKp=w([D.f51,D.f55,D.f4T,D.f4X,D.f4W,D.f4P,D.f4R,D.f52,D.f4Y,D.f54,D.f4Q,D.f4V,D.f53,D.f4U,D.f5_,D.f4Z,D.f50,D.f4S],B.az("M<o2>"))
D.aYp=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cKq=w([D.aaj,A.eL,D.aYp],x.O)
D.dSd=new B.T(0.12,0.3)
D.e01=new B.T(0.26,0.75)
D.e_1=new B.T(0.8,0.22)
D.e25=new B.T(0.9,0.7)
D.e0r=new B.T(0.5,0.15)
D.e18=new B.T(0.65,0.85)
D.dVB=new B.T(0.08,0.85)
D.cKB=w([D.dSd,D.e01,D.e_1,D.e25,D.e0r,D.e18,D.dVB],x.G)
D.arh=w([A.b9,A.cd,A.bD,A.br],x.O)
D.cLo=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cLB=w([A.c,A.hp,A.dD,A.tT],x.O)
D.b0f=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cMv=w([D.b0f,D.a99],x.O)
D.cMw=w([A.vW,A.at],x.O)
D.cMM=w([0,0.25,0.75,1],x.x)
D.cMO=w([A.vS,A.nS],x.O)
D.azy=new C.kB(10,"kenteSunset")
D.f9g=w([D.a9r,A.jt,A.at],x.O)
D.dfQ=new C.j8("kuhowa_kente_sunset","Kente ya Jua",y.H,D.azy,4294964964,4282000405,4279983648,D.ji)
D.azz=new C.kB(11,"indigoMudcloth")
D.aZc=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.f9u=w([D.aZc,A.a96,A.hE],x.O)
D.dfY=new C.j8("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.azz,4294439140,4279903102,4279903102,D.ji)
D.azA=new C.kB(12,"adinkraRoyal")
D.b95=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.f9v=w([D.a8d,D.b95,A.at],x.O)
D.dg_=new C.j8("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.azA,4294965484,4285218591,4287322667,D.ji)
D.azB=new C.kB(13,"nileLotus")
D.b63=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b3o=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.f9A=w([D.b63,D.b3o,A.hE],x.O)
D.dfZ=new C.j8("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azB,4294244340,4279196764,4279196764,D.ji)
D.azC=new C.kB(14,"shweshweIvory")
D.b1M=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b0P=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.aZE=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.f9h=w([D.b1M,D.b0P,D.aZE],x.O)
D.dfV=new C.j8("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azC,4294505710,4279970378,4291058750,D.ji)
D.qy=new C.kB(15,"certIvoryNavy")
D.f9f=w([D.IZ,D.iS,A.hE],x.O)
D.az4=new C.wz(1,"ringsNdoa")
D.dfS=new C.j8("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qy,4294966259,4279378237,4291404327,D.az4)
D.a0S=new C.wz(2,"coupleCards")
D.dfN=new C.j8("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qy,4294966259,4279378237,4291404327,D.a0S)
D.AW=new C.kB(18,"certIvoryNavyBar")
D.a8c=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.f9t=w([D.a8c,D.iS,A.hE],x.O)
D.az5=new C.wz(3,"kuhoweshaForm")
D.dfL=new C.j8("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.AW,4294966519,4279378237,4291404327,D.az5)
D.a9i=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.f9M=w([D.IZ,D.a9i,A.hE],x.O)
D.a0T=new C.wz(4,"mahariPande")
D.dfO=new C.j8("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qy,4294966259,4279904068,4291404327,D.a0T)
D.azD=new C.kB(16,"certIvoryGreen")
D.b1h=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.f9j=w([A.Im,D.b1h,A.hE],x.O)
D.az6=new C.wz(5,"familiaMti")
D.dfU=new C.j8("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.azD,4294966776,4280241466,4291404327,D.az6)
D.a0U=new C.wz(6,"ndoaSafi")
D.dfM=new C.j8("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.AW,4294966519,4279378237,4291404327,D.a0U)
D.b4Q=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.f9m=w([D.IZ,A.hE,D.b4Q],x.O)
D.a0V=new C.wz(7,"peteWide")
D.dfR=new C.j8("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qy,4294966259,4282001936,4291404327,D.a0V)
D.dg0=new C.wz(8,"muhuriCrest")
D.dfK=new C.j8("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qy,4294966259,4279378237,4291404327,D.dg0)
D.f9w=w([D.a8c,D.a9i,A.hE],x.O)
D.dg1=new C.wz(9,"fomuWazi")
D.dfX=new C.j8("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.AW,4294966519,4279904068,4291404327,D.dg1)
D.azE=new C.kB(17,"certIvoryRose")
D.b1O=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.f9z=w([D.b1O,D.a9X,A.hE],x.O)
D.a0R=new C.wz(10,"upendoOrnate")
D.dfT=new C.j8("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.azE,4294965493,4286200650,4291404327,D.a0R)
D.cN9=w([D.dfQ,D.dfY,D.dg_,D.dfZ,D.dfV,D.dfS,D.dfN,D.dfL,D.dfO,D.dfU,D.dfM,D.dfR,D.dfK,D.dfX,D.dfT],x.h)
D.dZ=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.G0=new C.v5(0,"emojis")
D.B2=new C.v5(1,"pictures")
D.G1=new C.v5(2,"icons3d")
D.a1b=new C.v5(3,"animations")
D.P7=new C.v5(4,"videoMotion")
D.B3=new C.v5(5,"luxe")
D.a_6=w([D.G0,D.B2,D.G1,D.a1b,D.P7,D.B3],B.az("M<v5>"))
D.e1o=new B.T(A.dN,"Looks")
D.dWF=new B.T(A.xa,"Light")
D.dWD=new B.T(A.np,"Colour")
D.dVC=new B.T(A.wM,"Effects")
D.afQ=new B.a_(63112,"MaterialIcons",!1)
D.dU9=new B.T(D.afQ,"Crop")
D.cNz=w([D.e1o,D.dWF,D.dWD,D.dVC,D.dU9],x.f2)
D.cOa=w([],x.D)
D.f9J=w([],x.L)
D.dVJ=new B.T("Flashcard",D.FW)
D.dXE=new B.T("Quiz",D.FX)
D.dYE=new B.T("Worksheet",D.FY)
D.dXd=new B.T("Notes",D.m3)
D.dXR=new B.T("Section",D.B0)
D.cOL=w([D.dVJ,D.dXE,D.dYE,D.dXd,D.dXR],B.az("M<+(n,m3)>"))
D.dhI=new C.kB(6,"beadedPearl")
D.b7k=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b3W=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.f9N=w([D.b7k,D.b3W,A.hE],x.O)
D.az2=new C.j8("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dhI,4294966774,4286209070,4291404327,D.ji)
D.dhJ=new C.kB(7,"artDeco")
D.b77=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.b9k=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.f9L=w([D.b77,D.b9k,A.bQ],x.O)
D.az3=new C.j8("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dhJ,4294440434,4280228630,4290283019,D.ji)
D.dhK=new C.kB(8,"rosetteCorners")
D.b8E=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0h=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b3S=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.f9p=w([D.b8E,D.b0h,D.b3S],x.O)
D.az1=new C.j8("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dhK,4294702831,4285218602,4291394365,D.ji)
D.dhL=new C.kB(9,"modernLedger")
D.f9o=w([A.c,D.iS,D.iS],x.O)
D.az0=new C.j8("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dhL,4294967295,4279378237,4279378237,D.ji)
D.cOQ=w([D.az2,D.az3,D.az1,D.az0],x.h)
D.cOX=w([A.i4,A.nS],x.O)
D.ca=new C.hm(0,"none")
D.d7=new C.hm(1,"fade")
D.FZ=new C.hm(3,"slideRight")
D.aA_=new C.hm(5,"slideDown")
D.dCa=new C.hm(7,"zoomOut")
D.a1a=new C.hm(11,"cube")
D.dC5=new C.hm(12,"blur")
D.azX=new C.hm(13,"dissolve")
D.dC6=new C.hm(14,"wipeLeft")
D.dC7=new C.hm(15,"wipeRight")
D.P6=new C.hm(17,"push")
D.dC8=new C.hm(18,"flash")
D.azZ=new C.hm(20,"swing")
D.dC9=new C.hm(21,"curtain")
D.NP=w([D.ca,D.d7,D.td,D.FZ,D.te,D.aA_,D.m4,D.dCa,D.G_,D.aA0,D.P5,D.a1a,D.dC5,D.azX,D.dC6,D.dC7,D.pl,D.P6,D.dC8,D.azY,D.azZ,D.dC9],x.i)
D.NQ=w([D.a0Q,D.a0O,D.a0H,D.a0I,D.a0J,D.a0M,D.a0K,D.a0L,D.a0P,D.a0N,D.az2,D.az3,D.az1,D.az0],x.h)
D.cPk=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cPo=w([A.z4,A.hn,A.bQ],x.O)
D.dWj=new B.T(A.rO,"Design")
D.e2q=new B.T(D.ag5,"Word sizes")
D.e0h=new B.T(A.Ad,"Text")
D.bpW=new B.a_(983182,"MaterialIcons",!1)
D.e0l=new B.T(D.bpW,"Photo")
D.dTY=new B.T(A.kW,"Logo")
D.e2X=new B.T(A.EA,"News")
D.cPt=w([D.dWj,D.e2q,D.e0h,D.e0l,D.dTY,D.e2X],x.f2)
D.cPu=w(["golddust","sparkle","sheen"],x.s)
D.dDx=new C.em("upload_pdf",K.Lb,"Upload PDF")
D.dCH=new C.em("sign_paper",A.Ex,"Sign Paper")
D.bpd=new B.a_(63438,"MaterialIcons",!1)
D.dDt=new C.em("hd_photo",D.bpd,"HD Photo")
D.dCz=new C.em("sharpen",E.X4,"Sharpen")
D.dCJ=new C.em("print",K.Lb,"Download PDF")
D.dDa=new C.em("rotate",D.afQ,"Rotate")
D.dCS=new C.em("text_box",A.Ad,"Text Box")
D.dCU=new C.em("picture",A.rR,"Picture")
D.dCQ=new C.em("title",A.Ae,"Title")
D.dCM=new C.em("subtitle",T.agG,"Subtitle")
D.dDj=new C.em("bullets",I.Xm,"Bullet List")
D.dCN=new C.em("numbered",A.L_,"Numbered")
D.dDm=new C.em("quote",A_.A6,"Quote")
D.dCZ=new C.em("citation",A.p5,"Citation")
D.dDp=new C.em("date_stamp",As.X9,"Date Stamp")
D.dDc=new C.em("page_number",A.x4,"Page #")
D.dDg=new C.em("header_bar",A.Ew,"Header")
D.dCT=new C.em("footer_bar",A4.agU,"Footer")
D.dCI=new C.em("divider",A.ur,"Divider")
D.dCE=new C.em("highlight",A.Xt,"Highlight")
D.dDi=new C.em("redact",A.x7,"Redact")
D.dD5=new C.em("callout",A.A3,"Callout")
D.dDr=new C.em("checkboxes",I.af9,"Checklist")
D.dD2=new C.em("table",A.XU,"Table")
D.dCX=new C.em("memo",I.XE,"Memo")
D.dD6=new C.em("letter",A.L7,"Letter")
D.boN=new B.a_(63259,"MaterialIcons",!0)
D.dCy=new C.em("agenda",D.boN,"Agenda")
D.dCK=new C.em("toc",Ar.agi,"Contents")
D.bp8=new B.a_(63406,"MaterialIcons",!1)
D.dD3=new C.em("sig_line",D.bp8,"Sign Line")
D.dCr=new C.em("initial_line",A.je,"Initials")
D.dCu=new C.em("approved",A.kW,"APPROVED")
D.dD8=new C.em("draft",A.pb,"DRAFT")
D.dDe=new C.em("confidential",A.iX,"Confidential")
D.dDh=new C.em("sticky",A.Li,"Sticky Note")
D.dDq=new C.em("progress",A.agh,"Progress")
D.bqq=new B.a_(983507,"MaterialIcons",!1)
D.dCF=new C.em("stars",D.bqq,"Star Rating")
D.dCp=new C.em("equation",A.ag8,"Equation")
D.dCA=new C.em("timeline",A.Eu,"Timeline")
D.dCY=new C.em("two_col",A.XW,"Two Columns")
D.dCC=new C.em("compare",Z.Xc,"Compare")
D.dCn=new C.em("duplicate_el",A.fv,"Duplicate")
D.dDv=new C.em("delete_el",A.e4,"Delete")
D.bp3=new B.a_(63352,"MaterialIcons",!1)
D.dDl=new C.em("bring_fwd",D.bp3,"Bring Front")
D.bp2=new B.a_(63351,"MaterialIcons",!1)
D.dCs=new C.em("send_back",D.bp2,"Send Back")
D.dD7=new C.em("align_left",D.Xk,"Align L")
D.dDd=new C.em("align_center",D.Xj,"Align C")
D.dDu=new C.em("align_right",D.Xl,"Align R")
D.dCR=new C.em("word_count",U.WL,"Word Count")
D.dCO=new C.em("link_text",A.hg,"Link")
D.dDb=new C.em("phone",A.ih,"Phone")
D.dCD=new C.em("email",A.A4,"Email")
D.dDw=new C.em("qr_placeholder",A.j_,"QR Placeholder")
D.dCx=new C.em("rectangle",A0.E9,"Rectangle")
D.dD1=new C.em("circle",A.rK,"Circle")
D.dCt=new C.em("arrow",A.jD,"Arrow")
D.dDk=new C.em("line",A.ur,"Line")
D.dCG=new C.em("triangle",A.Xa,"Triangle")
D.boV=new B.a_(63318,"MaterialIcons",!1)
D.dCL=new C.em("grayscale",D.boV,"Grayscale")
D.dCV=new C.em("brighten",I.aft,"Brighten")
D.dD_=new C.em("flip_h",A.Eb,"Flip H")
D.bp1=new B.a_(63348,"MaterialIcons",!1)
D.dDs=new C.em("flip_v",D.bp1,"Flip V")
D.dDf=new C.em("cover_page",A.p0,"Cover Page")
D.dCq=new C.em("invoice",A.fQ,"Invoice")
D.dCB=new C.em("resume",A.mz,"Resume")
D.dCP=new C.em("minutes",A.o5,"Minutes")
D.dCv=new C.em("lab_report",A.Ld,"Lab Report")
D.dCw=new C.em("rubric",A.wQ,"Rubric")
D.dD0=new C.em("flashcard_tool",A.Ab,"Flashcard")
D.dDn=new C.em("quiz_tool",A.Em,"Quiz Block")
D.dD4=new C.em("worksheet_tool",L.E1,"Worksheet")
D.dD9=new C.em("outline_share",A.Lf,"Share Outline")
D.dDo=new C.em("export_json",D.aff,"Export JSON")
D.dCo=new C.em("new_slide",D.WK,"New Slide")
D.dCW=new C.em("present",A.p7,"Present")
D.cPU=w([D.dDx,D.dCH,D.dDt,D.dCz,D.dCJ,D.dDa,D.dCS,D.dCU,D.dCQ,D.dCM,D.dDj,D.dCN,D.dDm,D.dCZ,D.dDp,D.dDc,D.dDg,D.dCT,D.dCI,D.dCE,D.dDi,D.dD5,D.dDr,D.dD2,D.dCX,D.dD6,D.dCy,D.dCK,D.dD3,D.dCr,D.dCu,D.dD8,D.dDe,D.dDh,D.dDq,D.dCF,D.dCp,D.dCA,D.dCY,D.dCC,D.dCn,D.dDv,D.dDl,D.dCs,D.dD7,D.dDd,D.dDu,D.dCR,D.dCO,D.dDb,D.dCD,D.dDw,D.dCx,D.dD1,D.dCt,D.dDk,D.dCG,D.dCL,D.dCV,D.dD_,D.dDs,D.dDf,D.dCq,D.dCB,D.dCP,D.dCv,D.dCw,D.dD0,D.dDn,D.dD4,D.dD9,D.dDo,D.dCo,D.dCW],B.az("M<em>"))
D.cQ_=w([A.ct,A.ai],x.O)
D.dTG=new B.T(4286331629,4292552567)
D.dTt=new B.T(4280640491,4278630100)
D.dTO=new B.T(4294538006,4292943176)
D.dSQ=new B.T(4278556265,4280640491)
D.cKL=w([D.dTG,D.dTt,D.dTO,D.dSQ],x.n)
D.caG=w([4294626325,4280472558,4294210230],x.t)
D.dCi=new C.nf("colorful","Colorful",A.np,D.cKL,4294967295,3875536895,D.caG,D.m4)
D.dTh=new B.T(4279522093,4279657780)
D.dTx=new B.T(4281750292,4283268111)
D.dST=new B.T(4278603323,4279203438)
D.dTy=new B.T(4282343954,4279599165)
D.cln=w([D.dTh,D.dTx,D.dST,D.dTy],x.n)
D.cao=w([4288931381,4294829706,4287033260],x.t)
D.dCe=new C.nf("nature","Nature",A.Ey,D.cln,4294442727,3874290891,D.cao,D.d7)
D.dTb=new B.T(4279369771,4283178389)
D.dT8=new B.T(4279179050,4286456526)
D.dTp=new B.T(4280163147,4290648157)
D.dSI=new B.T(4278322711,4285343961)
D.cCd=w([D.dTb,D.dT8,D.dTp,D.dSI],x.n)
D.caC=w([4294210230,4280472558,4289170426],x.t)
D.dCc=new C.nf("vibe","Vibe",A.Xp,D.cCd,4294967295,3874869502,D.caC,D.td)
D.dTK=new B.T(4290007817,4292552567)
D.dTE=new B.T(4286328082,4294286859)
D.dTJ=new B.T(4288485197,4294538006)
D.dTD=new B.T(4285343961,4293675161)
D.bI1=w([D.dTK,D.dTE,D.dTJ,D.dTD],x.n)
D.caH=w([4294829706,4294967295,4284999929],x.t)
D.dCd=new C.nf("celebration","Celebration",A.kU,D.bI1,4294967295,4009752557,D.caH,D.pl)
D.dT6=new B.T(4279179050,4280171146)
D.dTa=new B.T(4279310375,4280232247)
D.dSZ=new B.T(4278916151,4280172719)
D.dT7=new B.T(4279179050,4281549141)
D.cvO=w([D.dT6,D.dTa,D.dSZ,D.dT7],x.n)
D.caj=w([4281908728,4294626325,4287931320],x.t)
D.dCh=new C.nf("professional","Professional",A.A2,D.cvO,4294967295,3872118241,D.caj,D.P6)
D.dT2=new B.T(4278995566,4278413729)
D.dSV=new B.T(4278727492,4279137424)
D.dTq=new B.T(4280171146,4278751666)
D.dT3=new B.T(4278995566,4279590517)
D.cer=w([D.dT2,D.dSV,D.dTq,D.dT3],x.n)
D.cam=w([4286436348,4284410580,4294829706],x.t)
D.dCj=new C.nf("ocean","Ocean",I.XY,D.cer,4294967295,3873501950,D.cam,D.te)
D.dTF=new B.T(4286328082,4294538006)
D.dTH=new B.T(4286781507,4294677052)
D.dTB=new B.T(4283178389,4294197086)
D.dTI=new B.T(4288295954,4294688548)
D.cs4=w([D.dTF,D.dTH,D.dTB,D.dTI],x.n)
D.caI=w([4294829706,4294967295,4294747557],x.t)
D.dCk=new C.nf("sunset","Sunset",A.Lk,D.cs4,4294967295,4009749973,D.caI,D.d7)
D.dTS=new B.T(4294967295,4294047225)
D.dTN=new B.T(4294507260,4294967295)
D.dTR=new B.T(4294967295,4293060848)
D.dTM=new B.T(4294507260,4294047225)
D.cF2=w([D.dTS,D.dTN,D.dTR,D.dTM],x.n)
D.cah=w([4280640491,4279179050,4287931320],x.t)
D.dCg=new C.nf("minimal","Minimal",A0.E9,D.cF2,4279179050,4282865001,D.cah,D.d7)
D.dT1=new B.T(4278979081,4280886564)
D.dTl=new B.T(4280031511,4278979081)
D.dT9=new B.T(4279308561,4281148438)
D.dT0=new B.T(4278979081,4280031511)
D.cRI=w([D.dT1,D.dTl,D.dT9,D.dT0],x.n)
D.cav=w([4292128567,4294829706,4289241758],x.t)
D.dCl=new C.nf("elegant","Elegant",A.kX,D.cRI,4294898631,3873957348,D.cav,D.azX)
D.dTn=new B.T(4280159034,4282058596)
D.dSY=new B.T(4278916151,4280163147)
D.dTv=new B.T(4281208933,4278916151)
D.dTe=new B.T(4279502891,4283178389)
D.cXz=w([D.dTn,D.dSY,D.dTv,D.dTe],x.n)
D.caE=w([4294296657,4292128567,4291081725],x.t)
D.dCf=new C.nf("royal","Royal Gold",A.iG,D.cXz,4294965222,3874084351,D.caE,D.m4)
D.dSN=new B.T(4278464302,4280163147)
D.dSX=new B.T(4278916151,4279455306)
D.dTo=new B.T(4280163147,4283040846)
D.dSK=new B.T(4278332450,4281413249)
D.cKt=w([D.dSN,D.dSX,D.dTo,D.dSK],x.n)
D.cai=w([4281193663,4289170426,4294210230],x.t)
D.dCm=new C.nf("aurora","Aurora Glow",A.dN,D.cKt,4293983738,3869766608,D.cai,D.d7)
D.uM=w([D.dCi,D.dCe,D.dCc,D.dCd,D.dCh,D.dCj,D.dCk,D.dCg,D.dCl,D.dCf,D.dCm],B.az("M<nf>"))
D.b4l=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cQr=w([A.pV,D.b4l,A.pV],x.O)
D.cQG=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cQK=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.e0e=new B.T("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.dW7=new B.T("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.dYq=new B.T("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dRB=new B.T("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.dXK=new B.T("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.dWO=new B.T("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.dZ1=new B.T("Surprise me","")
D.cRf=w([D.e0e,D.dW7,D.dYq,D.dRB,D.dXK,D.dWO,D.dZ1],x.L)
D.aZG=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b7t=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cRU=w([A.c,D.aZG,D.b7t],x.O)
D.cTt=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azw=new C.kB(0,"heritageGold")
D.b3c=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b3d=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.f9O=w([D.b3c,D.b3d,A.at],x.O)
D.dfW=new C.j8("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azw,4294570461,4284234270,4292128567,D.ji)
D.azx=new C.kB(1,"heritageCrimson")
D.aYl=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b1N=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b7l=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.f9s=w([D.aYl,D.b1N,D.b7l],x.O)
D.dfP=new C.j8("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azx,4294635750,4285213214,4292912216,D.ji)
D.cTx=w([D.a0Q,D.a0O,D.dfW,D.dfP,D.a0J,D.a0M],x.h)
D.dlD=new C.qP(1,"circuit")
D.dm5=new C.lG("neural","Neural Link","Robotic",D.dlD,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dlC=new C.qP(0,"grid")
D.dm2=new C.lG("signal","Signal Grid","Robotic",D.dlC,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dlI=new C.qP(2,"hexes")
D.dlO=new C.lG("core","Core Protocol","Robotic",D.dlI,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.azU=new C.qP(11,"diagonal")
D.dlZ=new C.lG("steel","Steel Tech","Robotic",D.azU,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.azV=new C.qP(3,"rings")
D.dlN=new C.lG("vault","Vault Gold","Robotic",D.azV,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dlG=new C.qP(13,"leaves")
D.dlQ=new C.lG("forest","Forest Morning","Nature",D.dlG,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.azW=new C.qP(5,"waves")
D.dlX=new C.lG("ocean","Ocean Calm","Nature",D.azW,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dlJ=new C.qP(6,"sunset")
D.dm1=new C.lG("sunset","Sunset Glow","Nature",D.dlJ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dlK=new C.qP(7,"mountains")
D.dlP=new C.lG("mountain","Mountain Air","Nature",D.dlK,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dlL=new C.qP(8,"stars")
D.dlW=new C.lG("night","Night Sky","Nature",D.dlL,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a18=new C.qP(4,"orbs")
D.dlU=new C.lG("aurora","Aurora","Nature",D.a18,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dm3=new C.lG("sand","Sand Dune","Nature",D.azW,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dlM=new C.qP(9,"rays")
D.dlT=new C.lG("golden","Golden Hour","Warm",D.dlM,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dlR=new C.lG("royal","Royal Purple","Warm",D.azU,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dlS=new C.lG("rose","Rose Petal","Warm",D.a18,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dlF=new C.qP(12,"blocks")
D.dlV=new C.lG("electric","Electric Blue","Bold",D.dlF,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dm4=new C.lG("mint","Fresh Mint","Bold",D.a18,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dlH=new C.qP(14,"minimal")
D.dm0=new C.lG("white","Clean White","Clean",D.dlH,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dlE=new C.qP(10,"frame")
D.dlY=new C.lG("midnight","Midnight Gold","Clean",D.dlE,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dm_=new C.lG("community","Community Green","Clean",D.azV,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_v=w([D.dm5,D.dm2,D.dlO,D.dlZ,D.dlN,D.dlQ,D.dlX,D.dm1,D.dlP,D.dlW,D.dlU,D.dm3,D.dlT,D.dlR,D.dlS,D.dlV,D.dm4,D.dm0,D.dlY,D.dm_],B.az("M<lG>"))
D.cTT=w([D.zc,A.vW,A.hn,A.bQ],x.O)
D.cU7=w([D.aa6,D.iS],x.O)
D.cUg=w(["pdf","docx","txt","md"],x.s)
D.e5H=new B.bA(-3,150,34)
D.e5I=new B.bA(-3,214,62)
D.e5J=new B.bA(-3,288,62)
D.cV2=w([D.e5H,D.e5I,D.e5J],B.az("M<+(P,P,P)>"))
D.cVs=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cW0=w(["Write","Design","Print & fold"],x.s)
D.jj=new C.tV(2,"triangle")
D.B1=new C.tV(3,"arrow")
D.fb=new C.tV(4,"line")
D.jk=new C.tV(5,"parallelogram")
D.cW2=w([D.b7,D.ex,D.jj,D.B1,D.fb,D.jk,D.kA],x.m)
D.dSh=new B.T(240,96)
D.dU5=new B.T(560,46)
D.cW7=w([D.dSh,D.dU5],x.G)
D.f9Z=new C.wC(0,"classic")
D.dhO=new C.nb("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azw,4294570461,4282000405,4284234270)
D.di_=new C.nb("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azx,4294635750,4281999378,4285213214)
D.dhP=new C.nb("elegant_navy","Umoja Mzuri",y.s,D.a12,4294967035,4279378237,4290283019)
D.di1=new C.nb("elegant_gold","Umoja wa Dhahabu",y.Q,D.azF,4294966515,4281016592,4289102906)
D.di3=new C.nb("kente_sunset","Kente ya Jua",y.H,D.azy,4294964964,4282000405,4279983648)
D.dhM=new C.nb("indigo_mudcloth","Nguo ya Indigo",y.n,D.azz,4294439140,4279903102,4279903102)
D.dhR=new C.nb("adinkra_royal","Muhuri wa Adinkra",y.z,D.azA,4294965484,4285218591,4287322667)
D.dhW=new C.nb("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azB,4294244340,4279196764,4279196764)
D.dhY=new C.nb("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azC,4294505710,4279970378,4291058750)
D.fa_=new C.wC(1,"ringsNdoa")
D.dhQ=new C.nb("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qy,4294966259,4279378237,4291404327)
D.fa1=new C.wC(2,"coupleCards")
D.di0=new C.nb("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qy,4294966259,4279378237,4291404327)
D.fa2=new C.wC(3,"kuhoweshaForm")
D.dhX=new C.nb("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.AW,4294966519,4279378237,4291404327)
D.fa3=new C.wC(4,"mahariPande")
D.dhN=new C.nb("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qy,4294966259,4279904068,4291404327)
D.fa4=new C.wC(5,"familiaMti")
D.di2=new C.nb("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.azD,4294966776,4280241466,4291404327)
D.fa5=new C.wC(6,"ndoaSafi")
D.dhU=new C.nb("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.AW,4294966519,4279378237,4291404327)
D.fa6=new C.wC(7,"peteWide")
D.dhT=new C.nb("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qy,4294966259,4282001936,4291404327)
D.fa7=new C.wC(8,"muhuriCrest")
D.dhS=new C.nb("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qy,4294966259,4279378237,4291404327)
D.fa8=new C.wC(9,"fomuWazi")
D.dhV=new C.nb("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.AW,4294966519,4279904068,4291404327)
D.fa0=new C.wC(10,"upendoOrnate")
D.dhZ=new C.nb("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.azE,4294965493,4286200650,4291404327)
D.O2=w([D.dhO,D.di_,D.dhP,D.di1,D.di3,D.dhM,D.dhR,D.dhW,D.dhY,D.dhQ,D.di0,D.dhX,D.dhN,D.di2,D.dhU,D.dhT,D.dhS,D.dhV,D.dhZ],B.az("M<nb>"))
D.B_=new C.ao9(0,"landscape169")
D.nx=new C.ao9(1,"portrait916")
D.cWO=w([D.B_,D.nx],B.az("M<ao9>"))
D.asw=w([A.hn,A.bJ,A.dh,A.i4,A.c],x.O)
D.t4=w([A.bQ,A.iA],x.O)
D.dRR=new B.T(1000,"M")
D.dUF=new B.T(900,"CM")
D.dU1=new B.T(500,"D")
D.dSG=new B.T(400,"CD")
D.dRS=new B.T(100,"C")
D.dUG=new B.T(90,"XC")
D.dU2=new B.T(50,"L")
D.dSH=new B.T(40,"XL")
D.dRW=new B.T(10,"X")
D.dUK=new B.T(9,"IX")
D.dUb=new B.T(5,"V")
D.dTX=new B.T(4,"IV")
D.dSa=new B.T(1,"I")
D.cXj=w([D.dRR,D.dUF,D.dU1,D.dSG,D.dRS,D.dUG,D.dU2,D.dSH,D.dRW,D.dUK,D.dUb,D.dTX,D.dSa],x.ek)
D.e6A=new B.d7(["open",A.je,"Open & write","Keep writing this book"])
D.e6Y=new B.d7(["print",A.rU,"Print as a book","Fold and staple it"])
D.cXq=w([D.e6A,D.e6Y],B.az("M<+(n,a_,n,n)>"))
D.cY_=w([D.a1a,D.m4,D.G_,D.P6,D.d7,D.P5],x.i)
D.e0x=new B.T(-1,"Small")
D.dRJ=new B.T(0,"Normal")
D.dS9=new B.T(1,"Big")
D.dSq=new B.T(2,"Huge")
D.cYn=w([D.e0x,D.dRJ,D.dS9,D.dSq],x.ek)
D.cYM=w([49,65,89,38,83,89],x.t)
D.cYT=w([A.vW,A.hn,A.bQ],x.O)
D.cZi=w([D.d7,D.m4,D.td,D.a1a,D.G_,D.P6],x.i)
D.axO=new B.dW([0,D.Jb,8,D.abh,12,D.abi],B.az("dW<G,a1z>"))
D.dGZ={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b7e=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cvY=w([A.bJ,D.b7e],x.O)
D.bHu=w([A.bO,A.bP],x.O)
D.cOx=w([A.ba,A.bf],x.O)
D.cJG=w([A.cd,A.b3,A.cV],x.O)
D.cXr=w([A.ct,A.bA],x.O)
D.cD_=w([A.b9,A.f4],x.O)
D.cMa=w([A.b0,A.fo],x.O)
D.b1z=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cLv=w([D.b1z,A.nS],x.O)
D.cGw=w([A.iv,A.vY],x.O)
D.cCQ=w([A.bo,A.cf],x.O)
D.d0T=new B.bt(D.dGZ,[D.cvY,D.bHu,D.cOx,D.cJG,D.cXr,D.cD_,D.cMa,D.cLv,D.cGw,D.cCQ],B.az("bt<n,al<x>>"))
D.dGd={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a02=new B.bt(D.dGd,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bt<n,n>"))
D.a08=new B.bt(A.il,[],B.az("bt<G,+icon3d,picture(n?,n?)>"))
D.d4C=new F.L3(30,null)
D.da5=new F.m_("Chapter 1","","","")
D.cWB=w([D.da5],x.B)
D.da9=new F.qG("My Book","","",D.cWB,E.ayS)
D.da7=new F.tM("starry",null,null,null,null,"","","")
D.daa=new F.qG("Dream Big","","",E.a_g,D.da7)
D.da8=new F.tM("story",null,null,null,null,"","","")
D.dab=new F.qG("Little Lion","","",E.a_g,D.da8)
D.da6=new F.tM("vintage",null,null,null,null,"","","")
D.dac=new F.qG("Our Story","","",E.a_g,D.da6)
D.ddb=new C.D4("","NGMY","","")
D.dks=new C.ym("The NGMY Times","","","By the NGMY Newsroom","",A.T,"","","")
D.dCb=new C.aYn(null,null,null,null)
D.dDU=new C.aoe(null)
D.dE6=new C.aoK(0,"smaller")
D.dE7=new C.aoK(1,"bigger")
D.aA9=new C.aoK(2,"fit")
D.dLy=new B.B(E.ac3,T.a7N,null)
D.dLC=new B.B(A.UN,A.me,null)
D.brH=new B.ac(A.mE,16,A.c2,null,null,null)
D.dLG=new B.B(A.kS,D.brH,null)
D.aXP=new B.f9(2.2,null,null,null,null,A.c,null,null,null,null)
D.dLR=new B.B(A.DF,D.aXP,null)
D.bBG=new B.ac(A.cu,16,A.aA,null,null,null)
D.dLU=new B.B(A.ei,D.bBG,null)
D.eIV=new B.w("Play",null,A.ot,null,null,null,null,null,null,null,null,null)
D.cOM=w([V.ai2,A.tv,D.eIV],x.p)
D.e9Z=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cOM,null)
D.dLX=new B.B(A.rA,D.e9Z,null)
D.aXY=new B.f9(2.4,null,null,null,null,null,null,null,null,null)
D.eeO=new B.a7(20,20,D.aXY,null)
D.dM0=new B.B(A.kS,D.eeO,null)
D.eRg=new B.w("Seconds per slide",null,A.hi,null,null,null,null,null,null,null,null,null)
D.dM7=new B.B(A.bk,D.eRg,null)
D.dMu=new C.a6g(2,"print")
D.dMx=new B.iD(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dO9=new B.h_("/Annot")
D.dOb=new B.h_("/URI")
D.eDO=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dPU=new B.ja("share",48,D.eDO,null,B.az("ja<n>"))
D.bBB=new B.ac(A.dN,14,A.eM,null,null,null)
D.dQ2=new B.cF(null,-2,-2,null,null,null,D.bBB,null)
D.b4I=new B.x(0.3333333333333333,0,0,0,A.t)
D.cxK=w([D.b4I,A.K],x.O)
D.bGU=new B.a8(A.a_,A.a7,A.w,D.cxK,null,null)
D.aR3=new B.o(null,null,null,null,null,D.bGU,A.n)
D.bbf=new B.ky(D.aR3,A.b6,null,null)
D.dQe=new B.cF(0,0,null,0,8,null,D.bbf,null)
D.cSC=w([A.hD,A.oM,A.cl],x.O)
D.dQS=new B.bR(A.B,0.5,A.w,null,0,D.cSC,null,null)
D.dSl=new B.T(0.22,A.bf)
D.dUS=new B.T("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.dVU=new B.T(0.5,A.hl)
D.e_M=new B.T(0.78,A.aR)
D.e6r=new B.d7([A.bD,0.22,0.7,2.6])
D.e6w=new B.d7([A.b9,0.36,1.2,1.3])
D.e6C=new B.d7([A.dM,0.28,0.2,0.4])
D.e6H=new B.d7([A.cA,0.05,0.3,0.35])
D.e6N=new B.d7([A.bo,0.28,0.9,0])
D.e6V=new B.d7([A.az,-0.25,-0.15,0.45])
D.e7B=new B.d7([A.cd,0.42,1,4.1])
D.e9H=new B.a78(9)
D.bsP=new B.ac(A.EA,28,A.cV,null,null,null)
D.eRM=new B.w("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bjY=new B.bG(1,A.bq,D.eRM,null)
D.cVv=w([D.bsP,A.av,D.bjY],x.p)
D.e9U=new B.cD(A.b_,A.e,A.j,A.m,null,A.p,null,0,D.cVv,null)
D.bt_=new B.ac(A.p5,16,A.c,null,null,null)
D.eT6=new B.w("Book",null,A.qM,null,null,null,null,null,null,null,null,null)
D.cYS=w([D.bt_,A.ez,D.eT6],x.p)
D.ea0=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cYS,null)
D.bzf=new B.ac(A.iX,10,A.c,null,null,null)
D.eHd=new B.w("Pro",null,A.nC,null,null,null,null,null,null,null,null,null)
D.cOS=w([D.bzf,A.v3,D.eHd],x.p)
D.ea3=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cOS,null)
D.eRf=new B.w("Make a newspaper",null,Am.QS,null,null,null,null,null,null,null,null,null)
D.bI_=w([E.Yh,A.aa,D.eRf],x.p)
D.ea4=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.bI_,null)
D.bxT=new B.ac(A.kU,18,A.bJ,null,null,null)
D.eJ7=new B.w("Ending celebration",null,A.jp,null,null,null,null,null,null,null,null,null)
D.cUE=w([D.bxT,A.bp,D.eJ7],x.p)
D.ea7=new B.cD(A.b_,A.e,A.j,A.m,null,A.p,null,0,D.cUE,null)
D.bz1=new B.ac(A.je,18,A.kO,null,null,null)
D.ep0=new B.F(!0,A.kO,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTm=new B.w("Write",null,D.ep0,null,null,null,null,null,null,null,null,null)
D.cES=w([D.bz1,A.aa,D.eTm],x.p)
D.eac=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cES,null)
D.eHc=new B.w("Download picture",null,A.pw,null,null,null,null,null,null,null,null,null)
D.blB=new B.pK(A.e8,A.B,A.h,D.eHc,null)
D.blM=new B.dp(1,A.ck,D.blB,null)
D.cPa=w([K.ahT,A.aa,D.blM],x.p)
D.ead=new B.cD(A.b_,A.b5,A.j,A.m,null,A.p,null,0,D.cPa,null)
D.buK=new B.ac(A.EA,22,A.cV,null,null,null)
D.eQ1=new B.w("NGMY NEWS",null,H.a3K,null,null,null,null,null,null,null,null,null)
D.cxg=w([D.buK,A.aa,D.eQ1],x.p)
D.eal=new B.cD(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cxg,null)
D.eaw=new B.oC(!1,!1,null,T.SH,null,A.bV,null,null,null)
D.a2M=new B.jB([D.ca,D.d7,D.td,D.FZ,D.te,D.aA_],B.az("jB<hm>"))
D.dI2={title:0,quote:1,closing:2,bio:3}
D.ebi=new B.fd(D.dI2,4,x.M)
D.dGu={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ebk=new B.fd(D.dGu,5,x.M)
D.dHA={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2N=new B.fd(D.dHA,8,x.M)
D.dH6={Design:0,Transitions:1,Insert:2}
D.ebo=new B.fd(D.dH6,3,x.M)
D.fag=new B.jB([D.a1b],B.az("jB<v5>"))
D.dHd={float3d:0,drift:1,pulse:2}
D.ebr=new B.fd(D.dHd,3,x.M)
D.aGF=new B.jB([D.FW,D.FX,D.FY],B.az("jB<m3>"))
D.dGr={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aGH=new B.fd(D.dGr,14,x.M)
D.fah=new B.fd(A.il,0,B.az("fd<v5>"))
D.dHa={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Q2=new B.fd(D.dHa,4,x.M)
D.dGl={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aGJ=new B.fd(D.dGl,30,x.M)
D.dHi={circle:0,triangle:1,hexagon:2,diamond:3}
D.ebG=new B.fd(D.dHi,4,x.M)
D.edN=new B.ap(390,844)
D.eey=new B.a7(20,20,A2.Ih,null)
D.aHt=new B.a7(null,2.5,null,null)
D.eeI=new B.a7(18,18,A2.Ih,null)
D.bz5=new B.ac(A.iG,19,A.c,null,null,null)
D.eeT=new B.a7(38,38,D.bz5,null)
D.bxv=new B.ac(A.xb,22,A.c,null,null,null)
D.eeV=new B.a7(40,40,D.bxv,null)
D.efs=new B.hI(2,10,10,1.15,null)
D.aHB=new B.hI(2,16,14,0.62,null)
D.bia=new B.L(32,30,32,40)
D.aZ5=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bsM=new B.ac(A.p0,56,D.aZ5,null,null,null)
D.aaC=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eqZ=new B.F(!0,D.aaC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNg=new B.w("Your books will live here.",null,D.eqZ,null,A.L,null,null,null,null,null,null,null)
D.cHo=w([D.bsM,A.U,D.eNg],x.p)
D.bas=new B.fs(A.af,A.e,A.j,A.m,null,A.p,null,0,D.cHo,null)
D.dM5=new B.B(D.bia,D.bas,null)
D.efN=new B.lI(D.dM5,null)
D.eNd=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eg4=new B.aX(D.eNd,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eLq=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eg5=new B.aX(D.eLq,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQ3=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.egd=new B.aX(D.eQ3,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQw=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.egs=new B.aX(D.eQw,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eKd=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.egF=new B.aX(D.eKd,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eWW=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.egZ=new B.aX(D.eWW,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUl=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eh9=new B.aX(D.eUl,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQE=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ehQ=new B.aX(D.eQE,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eFD=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ei5=new B.aX(D.eFD,null,null,null,null,null,null,null,A.ip,null,null,null,null,A.oS,!1,null,null,null,A.q,null)
D.eMV=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eio=new B.aX(D.eMV,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eMC=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eip=new B.aX(D.eMC,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eSu=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eiq=new B.aX(D.eSu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eC2=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eiz=new B.aX(D.eC2,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eIk=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eiW=new B.aX(D.eIk,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVQ=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eiY=new B.aX(D.eVQ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVs=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ej1=new B.aX(D.eVs,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eBa=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ej3=new B.aX(D.eBa,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRH=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ejc=new B.aX(D.eRH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eV2=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ejr=new B.aX(D.eV2,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUU=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ejt=new B.aX(D.eUU,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eB2=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ejz=new B.aX(D.eB2,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eEI=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ek0=new B.aX(D.eEI,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eU8=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekb=new B.aX(D.eU8,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eEw=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ekq=new B.aX(D.eEw,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b46=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cw9=w([A.i4,A.nS,D.b46,D.a84,A.i4],x.O)
D.ekO=new B.fQ(A.B,0,6.283185307179586,A.w,D.cw9,null,null)
D.cE8=w([A.bJ,A.bQ,A.hn,D.zc,A.bJ],x.O)
D.aIa=new B.fQ(A.B,0,6.283185307179586,A.w,D.cE8,null,null)
D.cQE=w([A.cd,A.bD,A.b9,A.br,A.cV,A.cd],x.O)
D.ekT=new B.fQ(A.B,0,6.283185307179586,A.w,D.cQE,null,null)
D.cxY=w([A.oQ,A.nT,A.z1,A.i4,A.oQ],x.O)
D.ekU=new B.fQ(A.B,0,6.283185307179586,A.w,D.cxY,null,null)
D.cQy=w([A.aN,A.bP,A.aJ,A.ai,A.aN],x.O)
D.ekV=new B.fQ(A.B,0,6.283185307179586,A.w,D.cQy,null,null)
D.cXa=w([A.bo,A.b9,A.bD,A.cd,A.bo],x.O)
D.ekX=new B.fQ(A.B,0,6.283185307179586,A.w,D.cXa,null,null)
D.b4k=new B.x(1,0,1,1,A.t)
D.b_c=new B.x(1,1,0,1,A.t)
D.cTL=w([A.CA,A.a9x,H.a8G,D.b4k,H.a91,D.b_c,A.CA],x.O)
D.ekY=new B.fQ(A.B,0,6.283185307179586,A.w,D.cTL,null,null)
D.elc=new C.asI(2,"immersiveSticky")
D.eld=new C.asI(3,"edgeToEdge")
D.ele=new C.asI(4,"manual")
D.enn=new B.F(!0,A.nM,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIG=new B.F(!0,A.fM,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enU=new B.F(!0,E.mo,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epg=new B.F(!0,A.ak,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqh=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqq=new B.F(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqL=new B.F(!0,A.eM,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.es0=new B.F(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.es9=new B.F(!0,A.j8,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esn=new B.qY(!0,A.Gg,null,null,null,null,A.dm,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.esQ=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etr=new B.F(!0,A.iU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etM=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dMA=new B.iD(1,1,0.7568627450980392,0.027450980392156862)
D.etQ=new B.qY(!0,D.dMA,null,null,null,null,A.dm,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9E=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJm=new B.F(!0,D.a9E,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etW=new B.F(!0,D.aaC,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etX=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJo=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euv=new B.qY(!0,A.oi,null,null,null,null,A.dm,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.euO=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a42=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evi=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evk=new B.F(!0,D.a9E,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.H7=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evM=new B.F(!0,A.bQ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evU=new B.F(!0,A.bP,null,null,null,null,14,A.a1,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evX=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewc=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqB,null,null,null)
D.ewe=new B.F(!0,A.cM,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewg=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ews=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewD=new B.F(!0,A.dD,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exa=new B.F(!0,A.aP,null,null,null,null,null,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exj=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exy=new B.F(!0,A.ak,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJW=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJY=new B.F(!0,A.c2,null,null,null,null,11.5,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8t=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.ezg=new B.F(!0,D.b8t,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK5=new B.F(!0,E.mo,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezI=new B.F(!0,A.bP,null,null,null,null,11,A.a1,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezL=new B.F(!0,O.kM,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et2=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAR=new B.w("NEW",null,D.et2,null,null,null,null,null,null,null,null,null)
D.eB5=new B.w("Hati ya Kuhowesha",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eBu=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eBN=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eCr=new B.w("Big quote mark",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eCt=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eCF=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eD7=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eD8=new B.w("How many slides?",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eDF=new B.w("Transfer",null,A.cb,null,null,null,null,null,null,null,null,null)
D.ep3=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDZ=new B.w("Luxury FX",null,D.ep3,null,null,null,null,null,null,null,null,null)
D.eEg=new B.w("Font",null,A.qN,null,null,null,null,null,null,null,null,null)
D.eEr=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eEx=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eyO=new B.F(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEF=new B.w("Example  GA847",null,D.eyO,null,null,null,null,null,null,null,null,null)
D.eF2=new B.w("Design shapes",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eFa=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eFe=new B.w("Non-stop (loop)",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eFr=new B.w("Hati ya Kuhoweya",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eFK=new B.w("Photo studio",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.eG9=new B.w("Add your picture",null,A.l4,null,null,null,null,null,null,null,null,null)
D.eso=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGa=new B.w("Enter document code",null,D.eso,null,A.L,null,null,null,null,null,null,null)
D.eq5=new B.F(!0,E.mo,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGw=new B.w("Delete this book?",null,D.eq5,null,A.L,null,null,null,null,null,null,null)
D.eum=new B.F(!0,E.mo,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHj=new B.w("Your library",null,D.eum,null,null,null,null,null,null,null,null,null)
D.eHn=new B.w("Delete",null,A.aJg,null,null,null,null,null,null,null,null,null)
D.eHp=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Al.H5,null,null,null,null,null,null,null,null,null)
D.eHy=new B.w("Element flies in",null,A.aJs,null,null,null,null,null,null,null,null,null)
D.R4=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eHV=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eId=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eIh=new B.w("Cancel",null,E.aJD,null,null,null,null,null,null,null,null,null)
D.eIj=new B.w("The lines and circles that come with the design",null,A.iq,null,null,null,null,null,null,null,null,null)
D.exG=new B.F(!0,A.j7,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIJ=new B.w("DOCUMENT CODE",null,D.exG,null,null,null,null,null,null,null,null,null)
D.eJr=new B.w("Quotes",null,G.a4m,null,null,null,null,null,null,null,null,null)
D.erO=new B.F(!0,O.kM,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJz=new B.w("Add a picture",null,D.erO,null,null,null,null,null,null,null,null,null)
D.eJG=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,Q.aJh,null,A.L,null,null,null,null,null,null,null)
D.eJJ=new B.w("Look & feel",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eJN=new B.w("Rings",null,A.jp,null,null,null,null,null,null,null,null,null)
D.eJS=new B.w("W",null,A.qN,null,null,null,null,null,null,null,null,null)
D.eK1=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eKi=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a45,null,A.L,null,null,null,null,null,null,null)
D.eKk=new B.w("Write your book",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eL0=new B.w("Add page",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eLe=new B.w("Malipo ya Awamu ya Mahari",null,A.h5,null,null,null,null,null,null,null,null,null)
D.esc=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLr=new B.w("Create with AI",null,D.esc,null,A.L,null,null,null,null,null,null,null)
D.eLT=new B.w("Apply look",null,A.jp,null,null,null,null,null,null,null,null,null)
D.esV=new B.F(!0,A.eZ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eME=new B.w("Type your presentation below",null,D.esV,null,A.L,null,null,null,null,null,null,null)
D.eMH=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aK8,null,A.L,null,null,null,null,null,null,null)
D.eMJ=new B.w("Keep it",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eo6=new B.F(!0,A.cH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMQ=new B.w("Done",null,D.eo6,null,null,null,null,null,null,null,null,null)
D.eN8=new B.w("Delete",null,A.mQ,null,null,null,null,null,null,null,null,null)
D.eNi=new B.w("Hati ya Kiapo cha Uongozi",null,A.h5,null,null,null,null,null,null,null,null,null)
D.erd=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO8=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.erd,null,A.L,null,null,null,null,null,null,null)
D.eOt=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.eOz=new B.w("Layout",null,A.QU,null,null,null,null,null,null,null,null,null)
D.eP9=new B.w("Print",null,A.cq,null,null,null,null,null,null,null,null,null)
D.ePc=new B.w("X",null,A.qN,null,null,null,null,null,null,null,null,null)
D.ePL=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aj.a3Z,null,null,null,null,null,null,null,null,null)
D.eQp=new B.w("Hati ya Kuhowa",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eQr=new B.w("Choose a class template",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eQy=new B.w("Download the newspaper picture",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eQJ=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.eQQ=new B.w("Done",null,A.aJV,null,null,null,null,null,null,null,null,null)
D.eQZ=new B.w("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eR_=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.eRd=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,H.aIZ,null,null,null,null,null,null,null,null,null)
D.eS4=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.eS5=new B.w("What would you like to do?",null,D.aJm,null,null,null,null,null,null,null,null,null)
D.eS9=new B.w("Delete",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eSB=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.eSF=new B.w("Hati (Documents)",null,A.h5,null,null,null,null,null,null,null,null,null)
D.eyF=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new B.w("Delete presentation?",null,D.eyF,null,A.L,null,null,null,null,null,null,null)
D.eTa=new B.w("After the last slide it starts again from the first",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eTk=new B.w("\ud83c\udf33",null,A.H2,null,A.L,null,null,null,null,null,null,null)
D.eTC=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eTJ=new B.w("Transfer document",null,A.or,null,null,null,null,null,null,null,null,null)
D.eTT=new B.w("Add to the slides",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eUc=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.eUr=new B.w("Make a book",null,I.aIX,null,null,null,null,null,null,null,null,null)
D.eUv=new B.w("Books",null,A.cq,null,null,null,null,null,null,null,null,null)
D.erJ=new B.F(!0,A.ai,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUw=new B.w("Keep this page open until it finishes.",null,D.erJ,null,null,null,null,null,null,null,null,null)
D.eUz=new B.w("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eUK=new B.w("Use this ending",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eUS=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.eUT=new B.w("Upload a different logo",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eV9=new B.w("Delete from the database?",null,A.l4,null,null,null,null,null,null,null,null,null)
D.eVa=new B.w("H",null,A.qN,null,null,null,null,null,null,null,null,null)
D.eVw=new B.w("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eVV=new B.w("Cover",null,D.aK5,null,null,null,null,null,null,null,null,null)
D.eVZ=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.eW_=new B.w("Each page becomes its own slide you can present",null,A.iq,null,null,null,null,null,null,null,null,null)
D.eWk=new B.w("Y",null,A.qN,null,null,null,null,null,null,null,null,null)
D.eWz=new B.w("Edit text",null,A.H3,null,null,null,null,null,null,null,null,null)
D.eYI=B.dM("a63")
D.BR=new C.au0(0,"none")
D.aLE=new C.au0(1,"zipCrypto")
D.aLF=new C.au0(2,"aes")
D.f01=new F.Nu("","",null)
D.f2c=new C.Xq(null)
D.f3h=new C.aaO(null)
D.f3j=new C.aB0(null)
D.f64=new C.YE(null)
D.f6k=new C.Z8(null)})();(function staticFields(){$.fSU=null
$.fSV=null
$.fSW=null
$.fSX=null
$.fBB=B.uf("_lastQuoRemDigits")
$.fBC=B.uf("_lastQuoRemUsed")
$.aul=B.uf("_lastRemUsed")
$.fBD=B.uf("_lastRem_nsh")
$.pA=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a4U=B.Q(x.N,x.I)
$.fzb=!1
$.fXA=B.Q(B.az("kB"),x.N)
$.fXM=B.Q(B.az("kB"),x.E)
$.fVO=!1
$.bv6="q"
$.Os=0
$.Bi=B.Q(x.N,B.az("al<yo>"))
$.fWa=!1
$.fD8=!1
$.h1e=null
$.huO=B.Q(x.N,B.az("au<n?>"))
$.ID=""
$.iN=0
$.fPI=function(){var w=x.N
return B.Q(w,w)}()
$.fPH=B.Q(x.N,x.R)
$.fDt=!1
$.ado=B.Q(x.N,x.E)
$.fEe=0
$.bgg=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hTb","BE",()=>C.b5U(0))
w($,"hT9","a0o",()=>C.b5U(1))
w($,"hTa","h4J",()=>C.b5U(2))
w($,"hT8","fHN",()=>$.a0o().u9(0))
w($,"hT6","h4H",()=>C.b5U(1e4))
w($,"hT7","h4I",()=>B.CM(8))
w($,"hOZ","h2K",()=>B.CM(0))
w($,"hP6","h2O",()=>B.CM(0))
w($,"hP5","h2N",()=>B.bSn(0))
w($,"hWP","h6I",()=>{var v,u,t=x.N
t=B.Q(t,t)
for(v=D.a02.gdH(D.a02),v=v.gaf(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hXe","bzq",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mn(new C.fkS(),v,"biz_plan_blue","Business Plan",B.a([B.b6(u),B.b6(t)],h)),C.mn(new C.fkT(),v,"exec_summary","Executive",B.a([B.b6(s),B.b6(t)],h)),C.mn(new C.fkU(),v,"teal_corporate","Teal Corp",B.a([B.b6(r),B.b6(4279310375)],h)),C.mn(new C.fl4(),q,"geometric_overlap","Geometric",B.a([B.b6(4279203438),B.b6(u)],h)),C.mn(new C.fl9(),p,"midnight_cyan","Midnight Cyan",B.a([B.b6(o),B.b6(n)],h)),C.mn(new C.fla(),q,"diagonal_hero","Diagonal Hero",B.a([B.b6(m),B.b6(l)],h)),C.mn(new C.flb(),v,"swot_grid","SWOT Grid",B.a([B.b6(u),B.b6(4278556265)],h)),C.mn(new C.flc(),v,"layered_chevrons","Chevrons",B.a([B.b6(4280172719),B.b6(k)],h)),C.mn(new C.fld(),q,"split_triangle","Split Panel",B.a([B.b6(s),B.b6(t)],h)),C.mn(new C.fle(),v,"corporate_navy","Navy Pro",B.a([B.b6(4278982953),B.b6(4282090230)],h)),C.mn(new C.flf(),p,"cyan_slash","Cyan Slash",B.a([B.b6(o),B.b6(4278630100)],h)),C.mn(new C.fkV(),p,"crimson_impact","Crimson",B.a([B.b6(4282714634),B.b6(4292617766)],h)),C.mn(new C.fkW(),q,"ocean_waves","Ocean Waves",B.a([B.b6(4278413729),B.b6(4286436348)],h)),C.mn(new C.fkX(),p,"mono_geometric","Mono Geo",B.a([B.b6(o),B.b6(n)],h)),C.mn(new C.fkY(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b6(4280031511),B.b6(4293571336)],h)),C.mn(new C.fkZ(),q,"hex_infographic","Hex Stack",B.a([B.b6(r),B.b6(4284410580)],h)),C.mn(new C.fl_(),q,"photo_banner","Photo Banner",B.a([B.b6(m),B.b6(4281908728)],h)),C.mn(new C.fl0(),v,"process_steps","Process",B.a([B.b6(s),B.b6(k)],h)),C.mn(new C.fl1(),"Minimal","grid_modern","Grid Modern",B.a([B.b6(l),B.b6(t)],h)),C.mn(new C.fl2(),"Luxury","platinum_frame","Platinum",B.a([B.b6(4282865001),B.b6(4293060848)],h)),C.mn(new C.fl3(),v,"agenda_cards","Agenda Cards",B.a([B.b6(u),B.b6(4292602622)],h)),C.mn(new C.fl5(),q,"headline_orange","Headline Orange",B.a([B.b6(j),B.b6(i)],h)),C.mn(new C.fl6(),q,"infographic_teal","Infographic",B.a([B.b6(r),B.b6(j)],h)),C.mn(new C.fl7(),q,"content_year","Year Feature",B.a([B.b6(j),B.b6(t)],h)),C.mn(new C.fl8(),q,"photo_cta","Photo CTA",B.a([B.b6(m),B.b6(i)],h))],B.az("M<Dd>"))})
w($,"hWS","h6K",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["PXBYwoWf/eoEIoS3HSdrSocXmso="]=a.current})($__dart_deferred_initializers__);