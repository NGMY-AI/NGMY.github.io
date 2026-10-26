((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,A4,Ae,Af,A5,Ag,Ah,C={
t6(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fDI(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
I7(d){var w
if(d===0)return $.BO()
if(d===1)return $.a0C()
if(d===2)return $.h79()
if(Math.abs(d)<4294967296)return C.b6m(A.o.N(d))
w=C.hrE(d)
return w},
b6m(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t6(4,w)
return new C.nr(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t6(1,w)
return new C.nr(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aw(d,16)
v=C.t6(2,w)
return new C.nr(v===0?!1:s,w,v)}v=A.o.aj(A.o.gahe(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aj(d,65536)}v=C.t6(v,w)
return new C.nr(v===0?!1:s,w,v)},
hrE(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.R(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BO()
w=$.h78()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kR(A.aE.gaL(w))
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
q=new C.nr(!1,r,4)
if(s<0)p=q.lV(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fDJ(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fVg(d,e,f,g){var w,v,u,t,s,r=A.o.aj(f,16),q=A.o.K(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fm(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fVb(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16)
if(A.o.K(f,16)===0)return C.fDJ(d,e,s,g)
w=e+s+1
C.fVg(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hrH(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16),r=A.o.K(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fm(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fm(u,r)}w&2&&B.ah(g)
g[n]=o},
cyJ(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hrF(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6n(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.aw(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.aw(v,16)&1)}},
fVh(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.aj(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.aj(r,65536)}},
hrG(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nr:function nr(d,e,f){this.a=d
this.b=e
this.c=f},
cyK:function cyK(){},
cyL:function cyL(){},
cyM:function cyM(d,e){this.a=d
this.b=e},
cyN:function cyN(d){this.a=d},
aOd:function aOd(d,e){this.a=d
this.b=e},
fLl(d,e,f){var w=new C.Q0(d,A.o.aj(Date.now(),1000),e)
w.Q=f
return w},
Q0:function Q0(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1N:function a1N(d,e){this.a=d
this.b=e},
bDo:function bDo(d){this.a=d
this.c=this.b=0},
ham(){return new C.bBZ()},
bBZ:function bBZ(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cqW:function cqW(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hrm(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gcNd(d)))
v=f*2+2
u=C.fSW(C.fSY(),64)
t=new C.cbG(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cbH(e,1000,v)
s=new Uint8Array(v)
return A.aE.dt(s,0,t.cBb(w,0,s,0))},
cqU:function cqU(d,e){this.c=d
this.d=e},
auo:function auo(d,e){this.a=d
this.b=e},
cqX:function cqX(d,e,f,g){var _=this
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
b55:function b55(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cqV:function cqV(){this.a=$},
fUH(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
ha5(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAz:function bAz(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fJ6(d,e){e&=31
return(d&$.pC[e])<<e>>>0},
mZ(d,e){e&=31
return(d>>>e|C.fJ6(d,32-e))>>>0},
fSX(d){var w,v=new C.aq9()
if(B.iw(d))v.aGe(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fSY(){var w=C.fSX(0),v=new Uint8Array(4),u=x.S
u=new C.cbI(w,v,A.Cw,5,B.bY(5,0,!1,u),B.bY(80,0,!1,u))
u.l6(0)
return u},
fSW(d,e){var w=new C.cbE(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cbD:function cbD(){},
cbH:function cbH(d,e,f){this.a=d
this.b=e
this.c=f},
cbB:function cbB(){},
aq8:function aq8(d){this.a=d},
cbG:function cbG(d){this.a=$
this.b=d
this.c=$},
cbC:function cbC(){},
cbA:function cbA(){},
aq9:function aq9(){this.b=this.a=$},
cbF:function cbF(){},
cbI:function cbI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cbE:function cbE(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cbz:function cbz(){},
cby:function cby(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bJi:function bJi(){},
bJj:function bJj(d){this.a=d},
hux(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6C:function b6C(){},
ckW:function ckW(){},
bKb:function bKb(d,e){this.a=d
this.b=!1
this.c=e},
bKc:function bKc(){},
hD0(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
at2(d){var w=0,v=B.j(x.H),u
var $async$at2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.ewF?2:4
break
case 2:w=5
return B.b(A.jN.fL("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$at2)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jN.fL("SystemChrome.setEnabledSystemUIOverlays",C.hD0(null),u),$async$at2)
case 6:case 3:return B.h(null,v)}})
return B.i($async$at2,v)},
at5:function at5(d,e){this.a=d
this.b=e},
a6k:function a6k(d){this.a=d},
fzK(d,e){return new C.aSv(e,d,null)},
aSv:function aSv(d,e,f){this.e=d
this.c=e
this.a=f},
axR:function axR(d,e,f,g,h){var _=this
_.ad=d
_.af=e
_.a8$=f
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
hFx(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.faW(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bJ(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
faW:function faW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
al4(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$al4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aex("ngmy_menu_lib_v1_zzslides_index",A.bD),$async$al4)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d4(s,x.f)
t=B.cz(t,new C.bUi(),t.$ti.k("G.E"),x.P)
r=B.z(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bUj())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al4,v)},
al6(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$al6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.al4(),$async$al6)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.S(t,x.P)
for(r=J.aV(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.P(Date.now(),0,!1).a4().ab()
p=m.a
k=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nz("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$al6)
case 7:if(!f){w=5
break}s.m(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bg<2>")
s=B.z(new B.bg(s,r),r.k("G.E"))
w=10
return B.b(B.nz("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],t,q),null),$async$al6)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al6,v)},
bUk(d){return C.hfK(d)},
hfK(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bUk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aex("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hu),$async$bUk)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.U2(B.Z(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a4(m)
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
return B.i($async$bUk,v)},
al5(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$al5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.al4(),$async$al5)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n_(r,new C.bUl(d))
w=4
return B.b(B.nz("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],x.N,x.z),null),$async$al5)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aMg("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$al5)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al5,v)},
bUi:function bUi(){},
bUj:function bUj(){},
bUl:function bUl(d){this.a=d},
hPd(d,e,f){return B.c1(A.K,null,new C.fqd(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fqd:function fqd(d,e,f){this.a=d
this.b=e
this.c=f},
ZQ:function ZQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG8:function aG8(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eRn:function eRn(d,e){this.a=d
this.b=e},
eRr:function eRr(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRt:function eRt(d,e,f){this.a=d
this.b=e
this.c=f},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRq:function eRq(d,e){this.a=d
this.b=e},
eRi:function eRi(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRx:function eRx(d,e){this.a=d
this.b=e},
eRw:function eRw(d,e){this.a=d
this.b=e},
eRm:function eRm(d,e,f){this.a=d
this.b=e
this.c=f},
eRl:function eRl(d,e,f){this.a=d
this.b=e
this.c=f},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRv:function eRv(d,e){this.a=d
this.b=e},
eRA:function eRA(d){this.a=d},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRy:function eRy(){},
fXD(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d4(w,x.f)
v=B.cz(v,new C.eYy(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a5<G.E>")
v=B.z(new B.a5(v,new C.eYz(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_O(d){return C.hGJ(d)},
hGJ(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_O=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.S(x.N,x.ea)
m=new C.fd8(n)
t=4
j=m
i=C
w=7
return B.b(B.a0n("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_O)
case 7:j.$1(i.fXD(f))
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
return B.b(B.ax(),$async$a_O)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fXD(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.eYH(d),$async$a_O)
case 13:p=j.z(new i.a5(h,new g.fd6(f),o),o.k("G.E"))
A.d.aY(p,new C.fd7())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_O,v)},
af6(d,e){return C.hOT(d,e)},
hOT(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$af6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.fpL(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.ak(n,null)
q=!1
t=4
w=7
return B.b(B.aeZ("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$af6)
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
return B.b(B.ax(),$async$af6)
case 12:p=g
w=13
return B.b(p.ao("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$af6)
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
return B.i($async$af6,v)},
eYH(d){return C.hvR(d)},
hvR(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eYH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$eYH)
case 7:r=f
q=r.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kn(q,B.U(q).c)
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
return B.i($async$eYH,v)},
adY(d,e){return C.hFp(d,e)},
hFp(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adY=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$adY)
case 6:s=g
r=B.aZ(x.N)
q=s.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fS(r,q)
J.cg(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("ck.E"))
w=7
return B.b(s.ao("StringList","ngmy_books_deleted_v1_"+r,q),$async$adY)
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
return B.b(C.a_O(d),$async$adY)
case 8:n=g
J.n_(n,new C.faC(e))
w=9
return B.b(C.af6(d,n),$async$adY)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adY,v)},
hPi(d,e){return B.a8(d,!1).cr(B.eH(new C.fqz(e),!0,null,x.H))},
hrJ(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e9(w.d,new C.cA5())},
nU:function nU(d,e,f){this.a=d
this.b=e
this.c=f},
eYy:function eYy(){},
eYz:function eYz(){},
fd8:function fd8(d){this.a=d},
fd6:function fd6(d){this.a=d},
fd7:function fd7(){},
fpL:function fpL(){},
faC:function faC(d){this.a=d},
fqz:function fqz(d){this.a=d},
WC:function WC(d,e){this.c=d
this.a=e},
auV:function auV(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cA5:function cA5(){},
cA7:function cA7(d,e){this.a=d
this.b=e},
cAa:function cAa(d){this.a=d},
cAb:function cAb(d){this.a=d},
cA9:function cA9(){},
cAc:function cAc(d,e){this.a=d
this.b=e},
cA8:function cA8(d){this.a=d},
cAd:function cAd(){},
cA6:function cA6(d,e){this.a=d
this.b=e},
cAe:function cAe(){},
cA1:function cA1(d){this.a=d},
cA_:function cA_(d){this.a=d},
cA0:function cA0(d){this.a=d},
cA2:function cA2(d,e){this.a=d
this.b=e},
czZ:function czZ(d){this.a=d},
czY:function czY(d){this.a=d},
czW:function czW(d,e){this.a=d
this.b=e},
czX:function czX(d){this.a=d},
cA4:function cA4(){},
cA3:function cA3(d){this.a=d},
czV:function czV(d,e){this.a=d
this.b=e},
czU:function czU(d,e){this.a=d
this.b=e},
czT:function czT(d,e){this.a=d
this.b=e},
cAf:function cAf(d){this.a=d},
WA:function WA(d,e,f){this.c=d
this.d=e
this.a=f},
aC3:function aC3(d,e,f){this.a=d
this.b=e
this.c=f},
auR:function auR(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
czm:function czm(d){this.a=d},
czl:function czl(d){this.a=d},
czo:function czo(d,e,f){this.a=d
this.b=e
this.c=f},
czw:function czw(){},
czx:function czx(d){this.a=d},
czp:function czp(d,e,f){this.a=d
this.b=e
this.c=f},
czn:function czn(d,e){this.a=d
this.b=e},
czr:function czr(d,e){this.a=d
this.b=e},
czs:function czs(d,e){this.a=d
this.b=e},
czt:function czt(d,e){this.a=d
this.b=e},
czq:function czq(d){this.a=d},
czv:function czv(d){this.a=d},
czu:function czu(d,e){this.a=d
this.b=e},
czC:function czC(d){this.a=d},
czy:function czy(d,e){this.a=d
this.b=e},
czz:function czz(d,e){this.a=d
this.b=e},
czA:function czA(d,e){this.a=d
this.b=e},
czB:function czB(d,e){this.a=d
this.b=e},
auT:function auT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hJ3(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bw(new C.fhF(),x.H).eN(new C.fhG())}}else if(s)C.fZ2()}catch(t){}},
fZ2(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eN(new C.f1O())}catch(u){}},
hJ6(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fhF:function fhF(){},
fhG:function fhG(){},
f1O:function f1O(){},
h2w(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gJ(A.a.e1(v,w,"").split(":"))},
h2t(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kG)return null
return A.a.aW(w,14)},
fHS(d){var w
if(d.b!==D.kG)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aW(w,21)},
hJw(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h2x(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hJr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.S(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kv(0,f)
t=x.N
u=B.cz(u,new C.fiF(),B.a2(u).k("G.E"),t)
s=B.z(u,B.a2(u).k("G.E"))
if(s.length===0)return B.S(t,t)
for(u=v.kv(0,f),u=new B.I6(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PI(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PI(A.a.aW(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.S(t,t)
k=B.S(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hJp(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("G.E"))
A.d.aY(q,new C.fiE())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aNd(w,u,s,0)}return w},
hJt(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a0g:$.h98(),s=x.N,r=B.S(s,s)
for(s=t.gdH(t),s=s.gag(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.m(0,w.b,u)}return r},
h2u(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eZy(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h2w(q)===e)return q}return null},
hJu(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aW(v,u)
return A.d.gJ(D.F2).a},
hJv(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abV(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abV(0,0,0)
v=C.eZy(b6,b0)
u=C.eZy(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hJt(b2,C.hJr(C.h2u(b2),v.r))
if(s.a!==0){u.r=C.hJp(C.h2u(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h2w(o[m])
if(l==null||l==="utangulizi")continue
r.H(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eZy(b6,n)
i=C.eZy(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gJ(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fHS(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h2t(a8)===a0||C.fHS(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pe(a1,new C.fiL(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iO
$.iO=a9+1
A.d.H(a1,new C.ey(""+1000*a6+"_"+a9,D.kG,a2,a3,a4,a5,"",24,A.a4,A.bg,A.az,4279310375,A.be,d.at,D.ba,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cd,0,"","","","","",!1,0));++e}b5.f=new B.P(Date.now(),0,!1)
return new B.abV(k,t,e)},
hJq(d){var w=C.hJu(d)
if(d.w==="hati_kuhowa")return C.h1R("",w)
return C.h1Q("",w)},
fiF:function fiF(){},
fiE:function fiE(){},
fiL:function fiL(d){this.a=d},
fYM(){var w=new B.P(Date.now(),0,!1),v=new C.f0S()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fI_(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fjD(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kG&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h2K(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fjD(d)
w=B.bh(u)
if(w==null)return!C.fjD(d)
return new B.P(Date.now(),0,!1).a4().cY(w.a4().bM(18e9))},
hKb(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.P(Date.now(),0,!1).a4().ab()},
hjK(d){return A.a.i(d).toLowerCase()},
and(d){return C.hjM(d)},
hjM(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$and=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$and)
case 7:r=f
p=r.rn("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hNG(),B.U(o).k("J<1,n>")).bZ(0,new C.c3R())
o=B.d6(o,o.$ti.k("G.E"))
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
return B.i($async$and,v)},
anc(d,e){return C.hjL(d,e)},
hjL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.and(d),$async$anc)
case 3:r=g
if(!J.cg(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anc)
case 8:q=g
w=9
return B.b(q.ao("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pK(r)),$async$anc)
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
return B.i($async$anc,v)},
ane(d,e){return C.hjN(d,e)},
hjN(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ane=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.and(d),$async$ane)
case 3:r=g
if(!J.hA(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$ane)
case 8:q=g
w=9
return B.b(q.ao("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pK(r)),$async$ane)
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
return B.i($async$ane,v)},
Tm(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Tm=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fBe&&!a5){w=1
break}t=4
w=7
return B.b(B.ax(),$async$Tm)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aD(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.S(e,x.I)
for(d=J.jk(p),d=d.gag(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.U2(B.Z(f.a(n.b),e,a0)))}$.a5a=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a4(a2)
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
return B.b(B.bX(),$async$Tm)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tm("civic_hati_kiapo_uongozi",null,A.ea),$async$Tm)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.S(o,x.I)
for(f=x.f,e=J.jk(f.a(J.q(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.U2(B.Z(f.a(j.b),o,d)))}for(o=k,o=new B.cP(o,B.a2(o).k("cP<1,2>")).gag(0);o.C();){f=o.d
f.toString
i=f
h=$.a5a.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a5a.m(0,i.a,i.b)}w=20
return B.b(C.anf(),$async$Tm)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a4(a3)
$.al.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fBe=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tm,v)},
anf(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$anf=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$anf)
case 6:s=e
r=B.S(x.N,x.P)
for(o=$.a5a,o=new B.cP(o,B.a2(o).k("cP<1,2>")).gag(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ac())}w=7
return B.b(s.ao("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.ak(r,null)),$async$anf)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a4(l)
$.al.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$anf,v)},
aWX(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Tm(!1),$async$aWX)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a5a.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.bya(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWX,v)},
a5b(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5b=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5a.m(0,d,o)
$.fBe=!0
w=3
return B.b(C.anf(),$async$a5b)
case 3:w=4
return B.b(B.bX(),$async$a5b)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.S(e,x.P)
for(n=$.a5a,n=new B.cP(n,B.a2(n).k("cP<1,2>")).gag(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ac())}w=9
return B.b(B.nz("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.P(Date.now(),0,!1).a4().ab()],e,x.z),null),$async$a5b)
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
return B.i($async$a5b,v)},
ang(d){var w=0,v=B.j(x.T),u,t,s
var $async$ang=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a3f(A.eu),$async$ang)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f7(),$async$ang)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWW(t,d),$async$ang)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ang,v)},
aWW(d,e){return C.hjO(d,e)},
hjO(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWW=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bX(),$async$aWW)
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
return B.b(p.w5(q,new Uint8Array(B.cl(d)),D.bmO),$async$aWW)
case 8:n=p.Bx(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a4(k)
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
return B.i($async$aWW,v)},
IY(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.ba,4280172719,2,d,0,0,"",D.cd,D.cK,l,m,n)},
f06(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eS,j,k,l)},
fFb(d,e,f,g,h,i,j,k){var w=C.cy(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ei(h,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.ba,4280172719,2,k,0,0,"",D.cd,D.cK,g,e,f)},
f_L(d,e,f,g){return C.f06(0,0.002,D.fe,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fFc(d,e,f,g,h,i,j,k){var w=C.cy()
return C.ei(A.px,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bg,A.a4,"",h,w,null,"","",0,!1,"",0,D.ba,4280172719,2,k,0,0,"",D.cd,D.cK,g,e,f)},
fYL(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gJ(A.a.e1(v,w,"").split(":"))},
bya(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gJ(t)
t=x.N
r=B.S(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.fYL(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kG&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fHw(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Au(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gJ(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.fYL(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kG&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fhD(a2))}else A.d.bm(a1.z,new C.fhE())
A.d.H(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fjD(a0))a0.ax=a6.f.a4().ab()
return a0},
fHw(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fkp(D.a1g),l=C.cy(),k=x.u,j=B.a([C.ei(A.be,!1,s,A.az,"marriage_locked_bg",r,24,A.bg,A.a4,"",1,C.cy(),m,"","",0,!1,"",0,D.ba,q,2,"",0,0,"",D.cd,D.l3,1,0,0)],k),i=B.a([],k)
i.push(C.IY("NGMY",A.L,236069181,52,A.bg,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IY("TAREHE:",A.be,o,16,A.bg,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fFb("tarehe",0.8059999999999999,0.026,0.18,A.be,16,p,C.fYM()))
i.push(C.f_L(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IY("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bg,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IY("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cx,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f06(0,0.002,D.fe,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fFc("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fFc("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fFc("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f06(268435456,0.175,D.ba,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IY("VIDEO YA KIAPO",A.be,o,10,A.bg,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ei(A.be,!1,s,A.az,"__kiapo_video__",r,24,A.bg,A.a4,"",0.131,C.cy(),t,"","",0,!1,"",0,D.ba,q,2,"",0,0,"",D.cd,D.l3,0.77,0.115,0.492))
i.push(C.IY("Rais Anayeapa:",A.be,p,15,A.bg,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IY("Jina:",A.be,p,13,A.bg,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fFb("rais_jina",0.195,0.6930000000000001,0.62,A.be,13,p,""))
i.push(C.f_L(0.195,0.7130000000000001,0.62,n))
i.push(C.IY("Sahihi:",A.be,p,13,A.bg,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ei(A.be,!1,s,A.az,"marriage_sign_rais",0,24,A.bg,A.a4,"",0.07,C.cy(),t,"","",0,!1,"",0,D.ba,0,2,"",0,0,"",D.cd,D.eS,0.38,0.21500000000000002,0.73))
i.push(C.f_L(0.21500000000000002,0.795,0.38,n))
i.push(C.IY("Tarehe:",A.be,p,13,A.bg,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fFb("rais_tarehe",0.745,0.74,0.2,A.be,12,p,C.fYM()))
i.push(C.f_L(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f06(0,0.032,D.ba,o,1,"state_box",0.72,0.14,0.875),C.IY("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bg,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qR(4294967035,t,0,0,j,l,D.pm,"","",u,D.da)
return C.Au(t,t,t,t,D.nz,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cy(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ae7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.F(x.q).f.P(D.eru)
w=1
break}w=3
return B.b(C.Tm(!0),$async$ae7)
case 3:w=4
return B.b(C.aWX(p),$async$ae7)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h2K(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c1(D.b3l,null,new C.fcv(p),f,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae7)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fcw(),f,null,!0,!0,x.y),$async$ae7)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fHw(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.F(x.q).f
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fHw(p))
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
f0S:function f0S(){},
c3R:function c3R(){},
fhD:function fhD(d){this.a=d},
fhE:function fhE(){},
fcv:function fcv(d){this.a=d},
fct:function fct(d){this.a=d},
fcu:function fcu(d){this.a=d},
fcw:function fcw(){},
fcr:function fcr(d){this.a=d},
fcs:function fcs(d){this.a=d},
anL:function anL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAT:function aAT(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dYi:function dYi(d){this.a=d},
dYg:function dYg(d){this.a=d},
dYh:function dYh(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYk:function dYk(d){this.a=d},
vK(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",j,D.ba,4280172719,2,d,0,0,"",D.cd,D.cK,l,m,n)},
fYp(d,e,f){var w=4291404327
return B.a([C.pB(0,f,D.ey,w,2,"ring_l",f,d-f*0.42,e),C.pB(0,f,D.ey,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f_c(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pB(4294967288,f,D.ey,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pB(h,s,D.ey,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pB(h,f*0.46,D.ey,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pB(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eS,j,k,l)},
f_b(d,e,f,g,h,i,j,k,l){var w=C.cy(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ei(h,!1,k,A.az,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.ba,4280172719,2,l,0,0,"",D.cd,D.cK,g,e,f)},
bvD(d,e,f,g){return C.pB(0,0.002,D.fe,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fYo(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pB(0,0.036,D.ba,h,1.4,"banner_box_"+d,w,v,e),C.vK(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h2v(){var w=new B.P(Date.now(),0,!1),v=new C.fiK()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fYq(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vK(r+".",A.be,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f_b("witness_"+d+"_"+r+"_name",q,g,p,A.be,!0,16,j,"[Jina la Shahidi]"),C.bvD(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vK("Sahihi:",A.be,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ei(A.be,!1,4279310375,A.az,"marriage_sign_"+d+"_witness_"+r,0,24,A.bg,A.a4,"",0.05,C.cy(),null,"","",0,!1,"",0,D.ba,0,2,"",0,0,"",D.cd,D.eS,s,t,g-0.004),C.bvD(t,g+0.044,s,w)],x.u)},
aez(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cV3,D.c2d,D.cOA,D.cQf],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fEv(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fkp(d.d),v=B.a([C.ei(A.be,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a4,"",1,C.cy(),w,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.l3,1,0,0)],x.u)
A.d.v(v,C.hy4(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hy4(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vK("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fYp(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fYp(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f_c(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f_c(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vK("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pB(0,0.062,D.ey,b1,1.6,"crest_o",0.11,0.445,0.012),C.pB(0,0.046,D.ey,b1,1,"crest_i",0.084,0.458,0.02),C.vK("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pB(0,0.002,D.fe,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pB(b9,0.016,D.kH,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pB(0,0.002,D.fe,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vK("TAREHE:",A.be,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f_b("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.be,!1,21,b9,C.h2v()),C.bvD(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vK(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pB(c0,0.0026,D.ba,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pB(c3.e,0.138,D.ba,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cy()
c2.push(C.ei(A.be,!1,b9,A.az,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bg,A.cp,"",0.128,s,a9,"","",0,!1,"",0,D.ba,b3,2,c5,0,0,"",D.cd,D.cK,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pB(0,0.036,D.ba,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cy()
A.d.v(c2,B.a([s,C.ei(A.L,!1,c0,A.az,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bg,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.ba,b3,2,c7,0,0,"",D.cd,D.cK,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fYo(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vK(c9,A.be,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f_b("mahari_"+p,0.132,k,m,A.be,!1,16,b9,s)
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
d=B.a([new C.ey(""+1000*i+"_"+h,D.cK,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bg,A.az,c0,A.be,a9,D.ba,b2,b3,2,0,!1,s,0,D.cd,0,"","","","","",!1,0),j,new C.ey(""+1000*f+"_"+e,D.eS,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.fe,0,b5,0.8,0,!1,g,0,D.cd,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.ey(""+1000*s+"_"+p,D.cK,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bg,A.az,b7,A.dL,a9,D.ba,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*i+"_"+h,D.eS,a1,a2,0.046,0.025875,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.ba,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*g+"_"+f,D.cK,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bg,A.az,b7,A.L,a9,D.ba,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*e+"_"+a3,D.eS,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.ba,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cd,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fYo("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a15||w===D.a17||w===D.a14||w===D.a16){w=t-0.008
A.d.v(c2,C.f_c(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f_c(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pB(0,a4,D.ba,c0,1.3,"wit_table_border",0.82,0.09,t),C.pB(c0,a4,D.ba,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pB(0,0.0022,D.fe,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vK("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vK("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fYq("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fYq("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pB(0,0.11,D.ba,c0,1.2,"mw_box",0.82,0.09,t),C.vK("MWANDISHI",A.be,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vK("Jina:",A.be,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f_b("mwandishi_jina",0.215,w,0.3116,A.be,!0,15,b9,""),C.bvD(0.215,p,0.3116,b5),C.vK("Sahihi:",A.be,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.ei(A.be,!1,b6,A.az,"marriage_sign_mwandishi",0,24,A.bg,A.a4,"",0.044,C.cy(),a9,"","",0,!1,"",0,D.ba,0,2,"",0,0,"",D.cd,D.eS,0.3161999999999999,0.5738,s-0.044),C.bvD(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pB(0,0.032,D.ba,c0,1,"state_box",0.7,0.15,a8),C.vK("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hJs(d){var w,v,u,t=null,s=B.aY(d.f),r=B.aY(d.r),q=C.fI9(d.d),p=new C.fiG(s),o=new C.fiH(s),n=d.z,m=n===D.a15||n===D.a17||n===D.a14||n===D.a16,l=n===D.azw||n===D.a18||n===D.azx,k=B.bZ(0,B.fD(q,A.A,t,t,A.ci,A.bO,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a18?26:16
i.push(new C.fiJ().$1$size(w))}if(n===D.azy)i.push(D.f3T)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hx,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aI2,p.$1$w(0.9),D.aI2,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_p,t,n,w,t,t,A.n),t,t,t,t,A.adS,t,t,t))
i.push(A.ar)
i.push(new C.fiI(r).$1("NIMETOWE"))
i.push(A.fZ)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.JK,new B.cC(A.aZ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.d6,new B.bE(1,A.bo,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.V,t,A.aY,A.q,B.a([k,new B.C(A.acu,B.u(i,A.af,t,A.e,A.j,0,A.p),t)],j),t)},
h1Q(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aez(e,t)
if(r==null)r=A.d.gJ(D.F2)
w=C.cy()
v=C.qR(r.e,t,0,0,C.fEv(r,0.165,y.O,D.cQN,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pm,"","",s,D.da)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.Au(t,t,t,t,D.nz,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h1R(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aez(e,t)
if(r==null)r=A.d.gJ(D.F2)
w=C.cy()
v=C.qR(r.e,t,0,0,C.fEv(r,0.165,y.f,D.cMT,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pm,"","",s,D.da)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.Au(t,t,t,t,D.nz,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzu(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.ftZ(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzu,v)},
ae8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fcz(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J3,null,new C.fcA(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzu(d,"Hati ya Kuhowa",D.F2),$async$ae8)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JB(d,"Tafuta jimbo\u2026","",A.jJ,"Chagua jimbo"),$async$ae8)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h1Q(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae8,v)},
ae9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fcD(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J3,null,new C.fcE(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzu(d,"Hati ya Kuhoweya",D.F2),$async$ae9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JB(d,"Tafuta jimbo\u2026","",A.jJ,"Chagua jimbo"),$async$ae9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h1R(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae9,v)},
aea(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aea=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a5<1>")
m=B.z(new B.a5(i,new C.fcH(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J3,null,new C.fcI(m),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$aea)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzu(d,"Malipo ya Awamu ya Mahari",D.NV),$async$aea)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JB(d,"Tafuta jimbo\u2026","",A.jJ,"Chagua jimbo"),$async$aea)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aez(s,D.NV)
if(q==null)q=A.d.gJ(D.NV)
n=C.cy()
p=C.qR(q.e,null,0,0,C.fEv(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cIh,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pm,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.da)
n=C.cy()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Au(null,null,null,null,D.nz,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aea,v)},
wI:function wI(d,e){this.a=d
this.b=e},
ja:function ja(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fiK:function fiK(){},
fiG:function fiG(d){this.a=d},
fiI:function fiI(d){this.a=d},
fiJ:function fiJ(){},
fiH:function fiH(d){this.a=d},
ftZ:function ftZ(d,e){this.a=d
this.b=e},
ab1:function ab1(d,e,f){this.c=d
this.d=e
this.a=f},
dPH:function dPH(d,e,f){this.a=d
this.b=e
this.c=f},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
aar:function aar(d,e,f){this.c=d
this.d=e
this.a=f},
fcz:function fcz(){},
fcA:function fcA(d){this.a=d},
fcx:function fcx(d){this.a=d},
fcy:function fcy(d){this.a=d},
fcD:function fcD(){},
fcE:function fcE(d){this.a=d},
fcB:function fcB(d){this.a=d},
fcC:function fcC(d){this.a=d},
fcH:function fcH(){},
fcI:function fcI(d){this.a=d},
fcF:function fcF(d){this.a=d},
fcG:function fcG(d){this.a=d},
J0(d,e,f,g,h,i,j,k,l,m){var w=C.cy()
return C.ei(e,!1,f,A.az,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",0,D.ba,4280172719,2,d,0,0,"",D.cd,D.cK,k,l,m)},
Bw(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eS,j,k,l)},
fZ5(d,e,f){return C.Bw(0,0.002,D.fe,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvN(d,e,f,g,h){return B.a([C.Bw(4294967288,0.032,D.ba,4291404327,1.15,"pill_"+d,g,f,e),C.J0(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fFg(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bw(0,0.002,D.fe,g,1,"orn_l_"+t,u,d,v),C.Bw(h,0.016,D.kH,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bw(0,0.002,D.fe,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_b(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.J0(d,A.be,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cy()
return B.a([v,C.ei(A.L,!1,j,A.az,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cx,A.O,"",0.02,s,null,"","",0,!1,"",0,D.ba,4280172719,2,k,0,0,"",D.cd,D.cK,t,u,g-0.002),C.fZ5(u,g+0.018,t)],x.u)},
fZ6(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bw(h,0.028,D.ba,h,0,"chv_"+d,g,e,f),C.Bw(w,0.024,D.kH,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bw(w,0.024,D.kH,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.J0(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvM(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.J0("Sahihi:",A.be,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ei(A.be,!1,4279310375,A.az,"marriage_sign_"+d,0,24,A.bg,A.a4,"",0.032,C.cy(),null,"","",0,!1,"",0,D.ba,0,2,"",0,0,"",D.cd,D.eS,v,w,f-0.006),C.fZ5(w,f+0.016,v)],x.u)},
fIa(d){var w,v
for(w=0;w<19;++w){v=D.O7[w]
if(v.a===d)return v}return null},
hLI(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aez(A.a.aW(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aez(A.a.aW(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aW(k,18)
w=C.aez(u,D.NV)
v=w==null?l:w.d
if(v==null){w=C.aez(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fIa(A.a.aW(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fZV.a7(0)
$.h_6.a7(0)
t=C.fkp(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fJd(d){var w=0,v=B.j(x.T),u
var $async$fJd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.fvd(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJd,v)},
wL:function wL(d,e){this.a=d
this.b=e},
nd:function nd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfA:function bfA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fvd:function fvd(){},
ab4:function ab4(d){this.a=d},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2g:function e2g(d,e){this.a=d
this.b=e},
acI:function acI(d,e,f){this.c=d
this.d=e
this.a=f},
fI9(d){return $.h_6.ce(0,d,new C.fkr(d))},
fkp(d){return $.fZV.ce(0,d,new C.fkq(d))},
fs(d){return B.fyS(d>>>16&255,d>>>8&255,d&255,255)},
hB3(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h09(4294570461,4293910718,4284234270,u)
case 1:return C.h09(4294635750,4293975240,t,4292912216)
case 2:w=C.eYN(s,4294505966,r)
C.bvx(w,14,16,p)
C.kf(w,8,9,464,836,u,1.2)
C.Bs(w,2,2,1,1,u,10)
C.Bs(w,478,2,-1,1,u,10)
C.Bs(w,2,852,1,-1,u,10)
C.Bs(w,478,852,-1,-1,u,10)
return w
case 3:return C.eYN(4294966515,4294373082,4289102906)
case 4:return C.hw1(C.eYN(4294376440,4293653998,4290287194))
case 5:w=C.eYN(4294965238,4294437098,4288444980)
C.bvx(w,14,16,4283043359)
C.kf(w,6,7,468,840,u,1)
C.kf(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,n,4294175448)
C.ra(v,n)
C.kf(v,24,24,432,806,4286209070,1)
C.a__(v,12,12,468,12,o,3,20)
C.a__(v,12,842,468,842,o,3,20)
C.a__(v,12,12,12,842,o,3,20)
C.a__(v,468,12,468,842,o,3,20)
return v
case 7:return C.hue(4294440434,4293518297,4280228630,r)
case 8:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,m,4293911504)
C.ra(v,m)
C.kf(v,28,28,424,798,l,1)
C.f64(v,28,28,l,k)
C.f64(v,452,28,l,k)
C.f64(v,28,826,l,k)
C.f64(v,452,826,l,k)
return v
case 9:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,j,4294111986)
C.ra(v,j)
C.kf(v,18,18,444,818,4292401368,0.7)
B.iy(v,!0,C.fs(p),0,13,0,853)
return v
case 10:return C.hxS(i,4294173372)
case 11:return C.hyW(4294439140,4293449662)
case 12:return C.hu7(h,4294239432)
case 13:return C.hyn(4294244340,4293193448)
case 14:return C.hCz(4294505710,4293780694)
case 15:return C.eXP(4294966259,4294439138,o,p,q)
case 16:return C.eXP(4294966776,4294178544,o,g,g)
case 17:return C.eXP(4294965493,4294504170,o,4286200650,q)
case 18:return C.eXP(4294966519,4294373862,o,p,p)
case 19:return C.hx2()
case 20:return C.hx3()
case 21:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,h,4293976768)
C.ra(v,h)
C.bvx(v,14,16,p)
B.iy(v,!0,C.fs(u),4,475,4,9)
B.iy(v,!0,C.fs(u),4,475,844,849)
B.iy(v,!0,C.fs(u),4,9,4,849)
B.iy(v,!0,C.fs(u),470,475,4,849)
C.a__(v,10,12,470,12,u,2,16)
C.a__(v,10,842,470,842,u,2,16)
C.a__(v,10,12,10,842,u,2,18)
C.a__(v,470,12,470,842,u,2,18)
C.Bs(v,2,2,1,1,t,10)
C.Bs(v,478,2,-1,1,t,10)
C.Bs(v,2,852,1,-1,t,10)
C.Bs(v,478,852,-1,-1,t,10)
C.kf(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,s,4294438872)
C.ra(v,s)
C.kf(v,14,16,452,822,o,2.2)
C.kf(v,22,24,436,806,o,1)
C.fGx(v,!1,!1,o,p,p,36,14,16)
C.ks(v,240,20,7,o,!0)
C.ks(v,240,834,7,o,!0)
C.ks(v,18,427,7,o,!0)
C.ks(v,462,427,7,o,!0)
return v
case 23:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,i,4293910712)
C.ra(v,i)
B.iy(v,!0,C.fs(u),0,479,0,20)
B.iy(v,!0,C.fs(u),0,479,834,853)
B.iy(v,!0,C.fs(u),0,20,0,853)
B.iy(v,!0,C.fs(u),460,479,0,853)
B.iy(v,!0,C.fs(f),5,474,5,9)
B.iy(v,!0,C.fs(f),5,474,844,848)
B.iy(v,!0,C.fs(f),5,9,5,848)
B.iy(v,!0,C.fs(f),470,474,5,848)
C.kf(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xy(v,e,4294174404)
C.ra(v,e)
C.bvx(v,14,16,p)
B.iy(v,!0,C.fs(u),3,476,3,8)
B.iy(v,!0,C.fs(u),3,476,845,850)
B.iy(v,!0,C.fs(u),3,8,3,850)
B.iy(v,!0,C.fs(u),471,476,3,850)
C.kf(v,9,10,462,834,t,1)
C.kf(v,14,16,452,822,u,1.8)
C.ks(v,240,8,4,u,!0)
C.ks(v,240,846,4,u,!0)
C.ks(v,8,427,4,u,!0)
C.ks(v,472,427,4,u,!0)
C.ks(v,8,8,3,t,!0)
C.ks(v,472,8,3,t,!0)
C.ks(v,8,846,3,t,!0)
C.ks(v,472,846,3,t,!0)
return v}},
xy(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.ku(d,!1,A.d7,new B.Qj(s),r,A.cR,1,0,w-1,k,k);++k}},
ra(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f0()
n.dX(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dL(u,t,o)
if(s==null)s=new B.is()
v=A.o.D(A.k.N(s.gb3(s))-3,0,255)
r=A.o.D(A.k.N(s.gba())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jg(u,t,v,r,q,255)}},
kf(d,e,f,g,h,i,j){var w,v=null,u=C.fs(i),t=e+g
B.ku(d,!0,A.d7,u,v,A.cR,j,e,t,f,f)
w=f+h
B.ku(d,!0,A.d7,u,v,A.cR,j,e,t,w,w)
B.ku(d,!0,A.d7,u,v,A.cR,j,e,e,f,w)
B.ku(d,!0,A.d7,u,v,A.cR,j,t,t,f,w)},
Bs(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.ku(d,!0,A.d7,C.fs(i),u,A.cR,2,e,e+g*j,f,f)
B.ku(d,!0,A.d7,C.fs(i),u,A.cR,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.ku(d,!0,A.d7,C.fs(i),u,A.cR,1,w,e+g*t,v,v)
B.ku(d,!0,A.d7,C.fs(i),u,A.cR,1,w,w,v,f+h*t)},
h09(d,e,f,g){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xy(v,d,e)
C.ra(v,d)
B.iy(v,!0,C.fs(f),0,479,0,28)
B.iy(v,!0,C.fs(f),0,479,826,853)
B.iy(v,!0,C.fs(f),0,28,0,853)
B.iy(v,!0,C.fs(f),452,479,0,853)
C.kf(v,5,5,470,844,g,1.1)
C.kf(v,28,28,424,798,g,1.6)
C.Bs(v,2,2,1,1,g,11)
C.Bs(v,478,2,-1,1,g,11)
C.Bs(v,2,852,1,-1,g,11)
C.Bs(v,478,852,-1,-1,g,11)
return v},
eYN(d,e,f){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xy(v,d,e)
C.ra(v,d)
C.kf(v,14,16,452,822,f,1.6)
C.kf(v,20,22,440,810,f,0.8)
return v},
bvx(d,e,f,g){var w,v=C.fs(g)
B.iy(d,!0,v,0,479,0,f-1)
w=854-f
B.iy(d,!0,v,0,479,w,853);--w
B.iy(d,!0,v,0,e-1,f,w)
B.iy(d,!0,v,480-e,479,f,w)},
hw1(d){var w,v,u=4291404327
C.bvx(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.ks(d,w,8,3,u,!0)
C.ks(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.ks(d,7,v,3,u,!0)
C.ks(d,473,v,3,u,!0)}return d},
f92(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j2(e,f),new B.j2(e+g*n,f),new B.j2(e,f+h*n)],t)
B.a_L(d,C.fs(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j2(s,u),new B.j2(e+g*v,u),new B.j2(s,f+h*v)],t)
B.a_L(d,C.fs(k),t)
t=A.k.U(n*0.39)
C.ks(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.ks(d,e+g*t,f+h*3,4,k,!0)
C.ks(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.ks(d,e+g*t,f,5,k,!0)
C.ks(d,e,f+h*t,5,k,!0)}},
fGx(d,e,f,g,h,i,j,k,l){var w,v
C.f92(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f92(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f92(d,k,v,1,-1,e,f,g,h,i,j)
C.f92(d,w,v,-1,-1,e,f,g,h,i,j)},
a__(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kN(d,!0,A.d7,new B.qo(p),null,A.cR,j,r,q)}},
f8c(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ku(d,!0,A.d7,new B.qo(o),null,A.cR,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ku(d,!0,A.d7,new B.qo(o),null,A.cR,1.4,q,q,p,p+h*r)}},
hue(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hc(o,o,A.c5,0,A.dV,854,o,0,3,o,A.c5,480,!1)
C.xy(n,d,e)
C.ra(n,d)
C.kf(n,20,20,440,814,f,1.2)
C.f8c(n,0,0,1,1,g)
C.f8c(n,480,0,-1,1,g)
C.f8c(n,0,854,1,-1,g)
C.f8c(n,480,854,-1,-1,g)
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
B.ku(n,!0,A.d7,new B.qo(p),o,A.cR,1.2,240,r,60,q)}return n},
f64(d,e,f,g,h){var w
C.faX(d,!0,C.fs(g),13,e,f)
C.faX(d,!0,C.fs(g),9,e,f)
w=B.a([new B.j2(e,f-4),new B.j2(e+4,f),new B.j2(e,f+4),new B.j2(e-4,f)],x.J)
B.a_L(d,C.fs(h),w)},
ks(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j2(e,v),new B.j2(u,f),new B.j2(e,t),new B.j2(s,f)],x.J)
if(i){B.a_L(d,C.fs(h),r)
return}B.ku(d,!0,A.d7,C.fs(h),w,A.cR,1,e,u,v,f)
B.ku(d,!0,A.d7,C.fs(h),w,A.cR,1,u,e,f,t)
B.ku(d,!0,A.d7,C.fs(h),w,A.cR,1,e,s,t,f)
B.ku(d,!0,A.d7,C.fs(h),w,A.cR,1,s,e,f,v)},
eXO(d,e,f,g,h,i,j){var w,v=B.a([new B.j2(e,f),new B.j2(e+g*28,f),new B.j2(e,f+h*28)],x.J)
B.a_L(d,C.fs(i),v)
v=e+g*14
w=f+h*14
C.ks(d,v,w,6,j,!0)
C.ks(d,v,w,3,i,!0)},
eXP(d,e,f,g,h){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xy(v,d,e)
C.ra(v,d)
C.kf(v,18,18,444,818,f,2)
C.kf(v,26,26,428,802,f,0.9)
if(h!=null)B.iy(v,!0,C.fs(h),28,451,28,34)
C.eXO(v,18,18,1,1,g,f)
C.eXO(v,462,18,-1,1,g,f)
C.eXO(v,18,836,1,-1,g,f)
C.eXO(v,462,836,-1,-1,g,f)
return v},
hx2(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hc(v,v,A.c5,0,A.dV,854,v,0,3,v,A.c5,480,!1)
C.xy(r,u,4294240980)
C.ra(r,u)
C.kf(r,10,12,460,830,t,3.2)
C.kf(r,18,20,444,814,s,1.2)
C.kf(r,24,26,432,802,t,1.8)
C.fGx(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.ks(r,w,16,3,t,!0)
C.ks(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.ks(r,16,w,3,t,!0)
C.ks(r,464,w,3,t,!0)}return r},
hx3(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hc(t,t,A.c5,0,A.dV,854,t,0,3,t,A.c5,480,!1)
C.xy(p,s,4294373080)
C.ra(p,s)
C.kf(p,16,18,448,818,r,2.4)
C.kf(p,24,26,432,802,4286209044,1)
w=new C.f_3(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fGx(p,!1,!0,r,q,q,34,16,18)
return p},
bwd(d,e,f,g,h,i){B.iy(d,!0,C.fs(i),e,e+g,f,f+h)},
bx2(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.ku(d,!1,A.d7,new B.Qj(i),null,A.cR,1,e,w,l,l)}},
hxR(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.K(A.o.aj(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ku(d,!1,A.d7,new B.qo(r),null,A.cR,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.K(A.o.aj(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ku(d,!1,A.d7,new B.qo(r),null,A.cR,1,t,t,f,s);++q}},
hxS(d,e){var w,v,u=null,t=B.hc(u,u,A.c5,0,A.dV,854,u,0,3,u,A.c5,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hxR(t,v,w,30,D.cBI,(A.o.aj(v,30)+A.o.aj(w,30)&1)===0)
C.bwd(t,44,44,392,766,d)
C.bx2(t,44,44,392,766,d,e)
C.ra(t,d)
C.kf(t,44,44,392,766,4292128567,2.2)
C.kf(t,50,50,380,754,4279898632,0.8)
return t},
hyV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.K(g,4)){case 0:C.ks(d,e,f,7,h,!0)
C.ks(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.ku(d,!0,A.d7,C.fs(h),o,A.cR,1.6,w,u,v,t)
B.ku(d,!0,A.d7,C.fs(h),o,A.cR,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.ku(d,!0,A.d7,new B.qo(p),o,A.cR,1.2,w,v,q,q)}break
default:B.ku(d,!0,A.d7,C.fs(h),o,A.cR,1.5,e-8,e+8,f,f)
B.ku(d,!0,A.d7,C.fs(h),o,A.cR,1.5,e,e,f-8,f+8)
B.kN(d,!0,A.d7,C.fs(h),o,A.cR,2,e,f)}},
hyW(d,e){var w,v,u,t,s=null,r=B.hc(s,s,A.c5,0,A.dV,854,s,0,3,s,A.c5,480,!1)
B.iy(r,!0,C.fs(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hyV(r,u,v,w,4292391514)}C.bwd(r,46,46,388,762,d)
C.bx2(r,46,46,388,762,d,e)
C.ra(r,d)
C.kf(r,46,46,388,762,4291404327,1.8)
return r},
fWI(d,e,f,g){C.faX(d,!0,C.fs(g),16,e,f)
C.faX(d,!0,C.fs(g),11,e,f)
C.ks(d,e,f,6,g,!0)
B.ku(d,!0,A.d7,C.fs(g),null,A.cR,1.3,e-14,e+14,f,f)
B.ku(d,!0,A.d7,C.fs(g),null,A.cR,1.3,e,e,f-14,f+14)},
hu7(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hc(v,v,A.c5,0,A.dV,854,v,0,3,v,A.c5,480,!1)
B.iy(s,!0,C.fs(4280948752),0,479,0,853)
B.iy(s,!0,C.fs(u),0,479,0,78)
B.iy(s,!0,C.fs(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fWI(s,w,39,t)
C.fWI(s,w,815,t)}C.bwd(s,38,92,404,670,d)
C.bx2(s,38,92,404,670,d,e)
C.ra(s,d)
C.kf(s,38,92,404,670,t,1.8)
C.kf(s,45,99,390,656,4287322667,0.8)
return s},
hym(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j2(e,f),new B.j2(q-5,w),new B.j2(q,f-(18-Math.abs(r)*3)),new B.j2(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_L(d,new B.qo(o),p)}B.kN(d,!0,A.d7,C.fs(4292128567),null,A.cR,3,e,f)},
hyn(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hc(s,s,A.c5,0,A.dV,854,s,0,3,s,A.c5,480,!1)
C.xy(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.ku(q,!0,A.d7,new B.qo(v),s,A.cR,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.ku(q,!0,A.d7,new B.qo(u),s,A.cR,1.1,v,v,0,853)}B.iy(q,!0,C.fs(r),0,479,0,70)
B.iy(q,!0,C.fs(r),0,479,798,853)
for(t=0;t<5;++t)C.hym(q,70+t*85,48,4292128567)
C.bwd(q,48,78,384,712,d)
C.bx2(q,48,78,384,712,d,e)
C.ra(q,d)
C.kf(q,48,78,384,712,4291404327,1.6)
return q},
hCz(d,e){var w,v,u,t=null,s=4279970378,r=B.hc(t,t,A.c5,0,A.dV,854,t,0,3,t,A.c5,480,!1)
B.iy(r,!0,C.fs(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.ks(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kN(r,!0,A.d7,new B.qo(u),t,A.cR,1,v,w)}C.bwd(r,40,40,400,774,d)
C.bx2(r,40,40,400,774,d,e)
C.ra(r,d)
C.kf(r,40,40,400,774,4291058750,2)
C.kf(r,48,48,384,758,s,0.8)
return r},
kD:function kD(d,e){this.a=d
this.b=e},
fkr:function fkr(d){this.a=d},
fkq:function fkq(d){this.a=d},
f_3:function f_3(d){this.a=d},
fl4(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hyP(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fF9(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.nZ(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aD(0,Af.aev(A.a.al(d,s,r+1)),t)
v=x.f.b(w)?B.Z(w,x.N,x.z):t
return v}catch(u){return t}},
ad3(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ad3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uC(null,""),$async$ad3)
case 3:n=g
if(A.a.i(n).length===0)throw B.R("AI is not available right now. Please try again later.")
t=B.mF(n)
if(e==null)s=A.h8
else{r=C.hyP(e)
s=B.a([new B.Z_(A.cN.gcs().aF(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qg(t,d,s,E.Dw),$async$ad3)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.R(q!=null&&B.Jr(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ad3,v)},
byC(d){return C.hLo(d)},
hLo(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Q.ak(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ad3(r,null),$async$byC)
case 7:q=f
p=C.fF9(q)
if(p==null){u=d
w=1
break}o=d.ayW(p)
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
return B.i($async$byC,v)},
h_u(d){var w,v=F.fHs(d)
v=B.aI(v,"book","newspaper")
if(F.a03(d)!=="sw"){w=B.ad("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fp0(d,e,f,g){return C.hNf(d,e,f,g)},
hNf(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fp0=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fl4(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h2T()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ad3('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h_u(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fp0)
case 3:r=m.fF9(i)
if(r==null)throw B.R(y.S)
q=new C.yt(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").ayW(r)
t=q.r
if(t.length===0)throw B.R("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a03(s)!=="sw"){p=B.ad("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a03(A.d.aG(t," "))==="sw"?C.byC(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fp0,v)},
by8(d,e,f,g,h){return C.hJ1(d,e,f,g,h)},
hJ1(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$by8=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.h2T()
k=A.Q.ak(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ad3('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h_u(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$by8)
case 3:p=j.fF9(a0)
if(p==null)throw B.R(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.ct(o)){n=d.ayW(B.Z(o,x.N,x.z))
m=A.Q.ak(n.ac(),null)!==A.Q.ak(d.ac(),null)}else{n=d
m=!1}w=m&&F.a03(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byC(n),$async$by8)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5O(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by8,v)},
a5O:function a5O(d,e,f){this.a=d
this.b=e
this.c=f},
hPQ(d,e){return B.a8(d,!1).cr(B.eH(new C.fvo(e),!0,null,x.H))},
fvo:function fvo(d){this.a=d},
TS:function TS(d,e){this.c=d
this.a=e},
aBb:function aBb(d,e,f,g,h,i,j,k){var _=this
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
e5A:function e5A(d){this.a=d},
e5z:function e5z(){},
e5B:function e5B(d){this.a=d},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5C:function e5C(){},
e5c:function e5c(d,e){this.a=d
this.b=e},
e58:function e58(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5l:function e5l(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5h:function e5h(d){this.a=d},
e5i:function e5i(d){this.a=d},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5a:function e5a(d){this.a=d},
e5b:function e5b(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5o:function e5o(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5m:function e5m(d,e){this.a=d
this.b=e},
e5x:function e5x(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
fk1(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fk1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fY7){w=1
break}r=new C.fk2()
t=4
q=x.s
w=7
return B.b(B.iA(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fk1)
case 7:$.fY7=!0
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
return B.i($async$fk1,v)},
byt(d){return A.Fn[B.mv(d)-1]+", "+A.pe[B.bB(d)-1]+" "+B.bQ(d)+", "+B.bw(d)},
hBG(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cYS[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fHR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fl(d[w],B.ad("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a5(v,new C.fik(),B.U(v).k("a5<1>")))
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
continue}o=new C.fim(j,h)
n=new C.fil(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aj(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iK(o.$1(l)))
j.a+=l}return u},
fEU(d,e){var w=new C.eZF()
return A.d.cI(e,0,new C.eZD(w))>=A.d.cI(d,0,new C.eZE(w))},
fVn(d){var w,v,u=new B.aS($.a0().r,A.as,null,null,B.a([],x.v))
u.G(new B.bc(46,0))
w=d.a
u.G(new B.ar(w,0))
v=d.b
u.G(new B.ar(w,v-46))
u.G(new B.ar(w-46,v))
u.G(new B.ar(0,v))
u.G(new B.ar(0,46))
u.G(new B.bL())
return u},
yt:function yt(d,e,f,g,h,i,j,k,l,m){var _=this
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
c7w:function c7w(d){this.a=d},
c7u:function c7u(){},
c7v:function c7v(){},
rD:function rD(d,e){this.a=d
this.b=e},
Ah:function Ah(d,e){this.a=d
this.b=e},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fk2:function fk2(){},
fik:function fik(){},
fim:function fim(d,e){this.a=d
this.b=e},
fil:function fil(d,e,f){this.a=d
this.b=e
this.c=f},
eZF:function eZF(){},
eZG:function eZG(){},
eZD:function eZD(d){this.a=d},
eZE:function eZE(d){this.a=d},
aYr:function aYr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c7x:function c7x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7y:function c7y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7z:function c7z(d){this.a=d},
b8P:function b8P(d){this.a=d},
b8O:function b8O(d,e){this.b=d
this.a=e},
bq6:function bq6(d){this.a=d},
b5n:function b5n(d,e){this.b=d
this.a=e},
bnD:function bnD(d,e){this.b=d
this.a=e},
h4O(d,e){return B.a8(d,!1).cr(B.eH(new C.fvr(e,null),!0,null,x.E))},
fvr:function fvr(d,e){this.a=d
this.b=e},
TV:function TV(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e6L:function e6L(){},
e6M:function e6M(d){this.a=d},
e6K:function e6K(d,e){this.a=d
this.b=e},
e6y:function e6y(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6F:function e6F(d){this.a=d},
e6G:function e6G(d,e){this.a=d
this.b=e},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d,e,f){this.a=d
this.b=e
this.c=f},
e6A:function e6A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6I:function e6I(d){this.a=d},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6J:function e6J(d,e){this.a=d
this.b=e},
b8l:function b8l(d,e,f){this.b=d
this.c=e
this.a=f},
hPW(d){return B.a8(d,!1).cr(B.eH(new C.fvH(),!0,null,x.I))},
bvZ(d,e){var w,v,u,t,s,r,q=B.bY(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fGg(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fvH:function fvH(){},
YT:function YT(d){this.a=d},
o5:function o5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCy:function aCy(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aK=_.aA=_.au=_.Y=_.b2=_.bd=_.y2=0
_.b_=null
_.aX=0.25
_.b7=null
_.bF=0.5
_.aO=1
_.c4=_.bO=_.be=0
_.cT=_.cQ=!1
_.c=_.a=null},
eDs:function eDs(d){this.a=d},
eCk:function eCk(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCS:function eCS(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC1:function eC1(d){this.a=d},
eC2:function eC2(d){this.a=d},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCC:function eCC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCO:function eCO(d,e,f){this.a=d
this.b=e
this.c=f},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e,f){this.a=d
this.b=e
this.c=f},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eBU:function eBU(d){this.a=d},
eBV:function eBV(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBT:function eBT(){},
eBX:function eBX(d,e){this.a=d
this.b=e},
eBS:function eBS(d,e){this.a=d
this.b=e},
eBZ:function eBZ(){},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBO:function eBO(d,e){this.a=d
this.b=e},
eC_:function eC_(d){this.a=d},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eC0:function eC0(d){this.a=d},
eBP:function eBP(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDq:function eDq(){},
eDi:function eDi(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDe:function eDe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDd:function eDd(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d){this.a=d},
eD_:function eD_(d,e){this.a=d
this.b=e},
eCV:function eCV(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eD5:function eD5(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eCY:function eCY(d){this.a=d},
eDa:function eDa(d){this.a=d},
eCX:function eCX(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eCW:function eCW(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCf:function eCf(d){this.a=d},
eCg:function eCg(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eBx:function eBx(d){this.a=d},
eBy:function eBy(d){this.a=d},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eC5:function eC5(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBE:function eBE(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCo:function eCo(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCr:function eCr(d){this.a=d},
eCL:function eCL(d){this.a=d},
eCK:function eCK(d,e,f){this.a=d
this.b=e
this.c=f},
eCJ:function eCJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCa:function eCa(d){this.a=d},
eDr:function eDr(d){this.a=d},
bbS:function bbS(d,e){this.b=d
this.a=e},
hLz(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hLA(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).kv(0,d),m=B.z(n,B.a2(n).k("G.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.aW(d,v)
return n.charCodeAt(0)==0?n:n},
bwz(){var w=$.bvH,v=$.OE
$.OE=v+1
return w+"_"+v},
i_(d,e,f,g,h,i,j){return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,C.bwz(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cd,D.eS,g,e,f)},
nv(d,e,f,g){var w=f*9
return C.i_(D.ey,d-f/2,e-w/32,f,w/16,g,0)},
hvG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvH
p=$.OE
$.OE=p+1
w.push(new C.ey(q+"_"+p,D.eS,0,r,1,0.0016,"",24,A.a4,A.bg,A.az,k,A.be,null,D.ba,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvH
p=$.OE
$.OE=p+1
w.push(new C.ey(q+"_"+p,D.eS,o,0,0.004,1,"",24,A.a4,A.bg,A.az,k,A.be,null,D.ba,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nv(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nv(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i_(D.ba,0.08,0.08,0.5,0.003,v,0),C.i_(D.ba,0.58,0.08,0.004,0.06,v,0),C.i_(D.ba,0.58,0.14,0.34,0.003,v,0),C.i_(D.ba,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i_(D.ba,0.08,0.8,0.004,0.14,t,0),C.i_(D.ba,0.08,0.94,0.6,0.003,t,0),C.nv(0.58,0.08,0.05,e),C.nv(0.92,0.22,0.05,e),C.nv(0.08,0.8,0.05,f),C.nv(0.68,0.94,0.05,f),C.nv(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i_(D.kH,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i_(D.kH,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i_(D.kH,0.7,0.8,0.22,0.12,w|1140850688,0),C.i_(D.kH,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nv(0.5,0.5,1.5,w|335544320),C.nv(0.5,0.5,1.15,w|402653184),C.nv(0.5,0.5,0.8,v|436207616),C.nv(0.95,0.05,0.4,v|855638016),C.nv(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nv(0.85,0.08,0.7,w|1140850688),C.nv(0.1,0.35,0.5,v|855638016),C.nv(0.9,0.62,0.55,v|771751936),C.nv(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i_(D.ba,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i_(D.ba,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i_(D.ba,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i_(D.ba,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nv(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nv(0.5,0.2,0.65,(w|3422552064)>>>0),C.nv(0.5,0.2,0.95,w|855638016),C.i_(D.ba,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i_(D.ba,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i_(D.jm,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i_(D.jm,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i_(D.jm,0.15,0.86,0.6,0.14,1712265002,0),C.nv(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cD_[n]
u=A.o.K(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvH
l=$.OE
$.OE=l+1
w.push(new C.ey(m+"_"+l,D.eS,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bg,A.az,k,A.be,null,D.ey,q,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nv(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i_(D.jm,0.35,-0.1,0.3,0.62,w|855638016,0),C.i_(D.jm,0.05,-0.1,0.3,0.55,v,-0.5),C.i_(D.jm,0.65,-0.1,0.3,0.55,v,0.5),C.nv(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i_(D.ba,0.06,0.04,0.88,0.002,e,0),C.i_(D.ba,0.06,0.96,0.88,0.002,e,0),C.i_(D.ba,0.06,0.04,0.004,0.92,e,0),C.i_(D.ba,0.936,0.04,0.004,0.92,e,0),C.i_(D.ba,0.09,0.07,0.82,0.001,w,0),C.i_(D.ba,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i_(D.jn,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i_(D.jn,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i_(D.jn,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i_(D.ba,0,0,0.3,0.09,w|1140850688,0),C.i_(D.ba,0.7,0.9,0.3,0.1,v|1426063360,0),C.i_(D.ba,0.82,0.04,0.12,0.07,w|771751936,0),C.i_(D.ba,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i_(D.ey,0.62,0.02,0.5,0.16,v,0.6),C.i_(D.ey,0.78,0.12,0.4,0.12,u,0.9),C.i_(D.ey,-0.12,0.8,0.5,0.16,u,-0.6),C.i_(D.ey,-0.05,0.9,0.4,0.12,v,-0.9),C.nv(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i_(D.ba,0.09,0.12,0.16,0.006,e,0),C.i_(D.ba,0.05,0.03,0.9,0.001,w,0),C.i_(D.ba,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hI5(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvH=j
$.OE=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.ffI()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ei(A.be,!1,n,A.az,"ngmy_quote_background",m,24,A.bg,A.a4,"",1,C.bwz(),g,"","",0,!1,"",0,D.ba,l,2,"",0,0,"",D.cd,D.l3,1,0,0))
if(a9)A.d.v(q,C.hvG(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hLz(B.aI(w,p,""))
o=A.a.t(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.ffH(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cx,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.ei(A.be,!1,n,A.az,"ngmy_quote_logo",m,24,A.bg,A.a4,a1,a3*9/16,C.bwz(),a0,"","",0,!1,a2,0,D.ba,l,2,"",0,0,"",D.cd,D.l3,a3,a4,a5))
return C.qR(s,r,0,0,q,j+"_slide",D.pm,"","","",D.da)},
qQ:function qQ(d,e){this.a=d
this.b=e},
lK:function lK(d,e,f,g,h,i,j,k,l,m){var _=this
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
ffI:function ffI(){},
ffH:function ffH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hlV(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bh(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c8T(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yv(u,t,s,B.t(w==null?"":w))},
fnn(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fnn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fYu){w=1
break}$.fYu=!0
t=4
w=7
return B.b(B.ax(),$async$fnn)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aD(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jk(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hlV(m)
if(l!=null)J.cg(n,l)}$.Bt.ce(0,B.t(o.a),new C.fno(n))}C.fFX()
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
return B.i($async$fnn,v)},
fFX(){var w,v=new B.P(Date.now(),0,!1).bM(-12e8)
for(w=new B.dv($.Bt,$.Bt.r,$.Bt.e);w.C();)J.n_(w.d,new C.f5h(v))
$.Bt.bm($.Bt,new C.f5i())},
aL1(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aL1=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aL1)
case 6:s=a0
m=x.N
l=x.z
r=B.S(m,l)
for(k=new B.cP($.Bt,B.a2($.Bt).k("cP<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.cg(p,B.E(["at",g.a.a4().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.ao("String","ngmy_slides_ai_history_v1",A.Q.ak(n,null)),$async$aL1)
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
return B.i($async$aL1,v)},
hMa(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fFX()
w=$.Bt.ce(0,d,new C.fnq())
v=Date.now()
u=B.z(e,B.a2(e).k("ck.E"))
J.p_(w,0,new C.yv(new B.P(v,0,!1),f,u,g))
C.aL1()},
hM7(d){var w,v=$.Bt.h(0,d)
if(v==null||J.ci(v))return
w=J.cA(v)
w.cu(v,0)
if(w.gah(v))$.Bt.W(0,d)
C.aL1()},
yv:function yv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8T:function c8T(){},
fno:function fno(d){this.a=d},
f5h:function f5h(d){this.a=d},
f5i:function f5i(){},
fnq:function fnq(){},
hMc(d){return A.d.dI(D.uT,new C.fnt(d),new C.fnu())},
hlT(d){var w
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
hlS(d){var w
switch(d.a){case 0:w=D.ag9
break
case 1:w=A.x8
break
case 2:w=A.ahg
break
case 3:w=I.afQ
break
case 4:w=A.agE
break
case 5:w=A.lu
break
default:w=null}return w},
hys(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Np[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Np[w]
if(!B.dm(v.toLowerCase(),t,0))u=B.dm(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hlU(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=B.S(u,t)
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
o.push(q)}return A.Q.ak(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hM8(d,e,f,g,h){var w=new B.J(D.uT,new C.fnm(),x.eC).aG(0,", "),v=""+d,u=C.h2L(h),t=F.fh6(h),s=C.h_5(g),r=e.t(0,D.Gg)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Gh)?'- New slides get an "icon3d" from: '+A.d.aG(D.Np,", ")+".\n":"",p=e.t(0,D.Bc)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hM9(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.uT,new C.fnp(),x.eC).aG(0,", "),p=new B.f4("")
if(e.t(0,D.Gg)){p.a=s
w=s}else w=""
if(e.t(0,D.Gh))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Np,", ")+".\n")
if(e.t(0,D.Bc))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h2L(d)
v=F.fh6(d)
u=C.h_5(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BR(a3,"{"),a5=J.fys(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JL(a3,a4,a5+1)
try{w=A.Q.aD(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ci(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.flm(),m).bZ(0,new C.fln())
k=B.z(l,l.$ti.k("G.E"))}else k=B.a([],n)
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
f=C.hys(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cg(u,new C.a5W(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.a9(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fh(u).b:q))
p=A.d.bf(D.uT,new C.flo(r))?r:a7
o=C.f4w(J.q(w,"logo_frame"),D.AB)
n=C.f4w(J.q(w,"logo_ring"),D.Aw)
m=C.f4w(J.q(w,"photo_frame"),D.AB)
l=C.f4w(J.q(w,"photo_ring"),D.Aw)
return new C.aoy(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_A(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h1T(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Bd),f7=f6?C.hsv():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f0()
v.dX(f7.w+1)
u=f7.a
t=B.bj(u.b,!0,x.dL)
A.d.fw(t,v)
s=u.c
s=new C.nh("luxe",u.a,A.lu,t,u.e,u.f,B.a([s,u.d,s],x.t),D.da)
w=s}if(w==null)w=C.hMc(f9.b)
r=g2.t(0,D.a1p)||f6
q=g2.t(0,D.Gg)
p=g2.t(0,D.Pe)
o=new C.ffM()
n=B.a([],x.g)
m=new C.ffP(o,w,r)
l=new C.ffO(o,r)
k=new C.ffN(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.bf(u,new C.ffL(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.K(b1,a3.length)]
b4=A.o.K(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.K(b1,5)
b9=D.cEo[b8]
c0=D.cDr[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.emJ.t(0,b2.a)){c7=b0+1
c5=g8[A.o.K(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.ey,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.ey,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mb,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pn,500,f2,f0))
c1.push(l.$8$fx$key(D.ba,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Pb
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ey,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kH,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.ba,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ba
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ey,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mb,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cx,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pn,500,f2,f0))
d3=D.ma
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ey,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ba,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tg:D.cd
c1.push(new C.ey(b4,D.a1n,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bg,A.az,4279310375,A.be,e4,D.ba,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.ma
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ey,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mb,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pn,450,f2,f0))
c1.push(l.$8$fx$key(D.ba,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Pb
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ey,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ey,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.ba,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.ba,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ge,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.ma}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.da,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hu6(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.K(b1,b8.length)]}else b8=r?D.d_T[A.o.K(b1,6)]:s
n.push(new C.lo(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Au(e4,e4,e4,e4,D.B9,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fia(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fia=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Bc)
n=e.t(0,D.Gh)
if(!o&&!n){u=D.a0m
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fid(o,s[r],n,$.hxg,r).$0())
s=B.S(x.S,x.aH)
m=J
w=3
return B.b(B.iA(t,x.e),$async$fia)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fia,v)},
fh9(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fh9=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hM9(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKo(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fh9)
case 3:u=s.aKJ(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fh9,v)},
by9(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$by9=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.H(0,(q==null?r.a(q):q).b)}C.hMa(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeL(i,"colorful")
t=C.hM8(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKo(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h8),$async$by9)
case 3:u=o.aKJ(m,f,h,g,D.dDC,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by9,v)},
aKo(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKo=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uC(null,""),$async$aKo)
case 3:n=i
if(A.a.i(n).length===0)throw B.R("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mF(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qg(t,d,g,null),$async$aKo)
case 7:q=i
p=q.b
if(p!=null){o=C.aeL(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.R(s!=null&&B.Jr(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aKo,v)},
aKJ(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKJ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Bc)||e.t(0,D.Gh)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d6(e,x.Q)
t.W(0,D.Bc)}w=6
return B.b(C.fia(d,t),$async$aKJ)
case 6:s=k
w=4
break
case 5:s=D.a0m
case 4:t=d.c
w=A.d.bf(t,new C.eZA())?7:9
break
case 7:r=$.h3D
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aKJ)
case 10:q=k
p=q!=null?A.Q.ak(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h1T(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hlU(new C.aoy(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.z(new B.J(m,new C.eZB(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jB<ck.E,n>")
t=B.z(new B.jB(e,new C.eZC(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.Pe)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKJ,v)},
fIz(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_i[v]
if(A.d.t(t,u.b))w.H(0,u)}return w},
hQ0(d){return B.c1(A.K,null,new C.fvT(),d,!0,!0,!0,null,!1,!1,x.I)},
ht6(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cN.gcs().aF(d)},
hQ_(d,e,f){return B.c1(A.K,null,new C.fvS(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fIA(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fIB(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f4w(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bf(e,new C.f4x(w))?w:""},
h_5(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h3B(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeL(a1==null?"":a1,a0),a3=C.aeL(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a5<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qC(new B.a5(r,new C.fnv(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("G.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.A(m.b,l.b),new B.A(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.A(j[h],i[h]))
k.push(new B.A(m.e,l.e))
g=B.z(new B.a5(k,new C.fnw(),v),r)
A.d.aY(g,new C.fnx())
if(g.length===0)continue
f=new C.fny(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hMt(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAB
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dFx
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dFy
return null},
fZH(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bJ(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hMd(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nz
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cK)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fZH(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fZH(n,i,v,u))if(n.w>10){f=h+1
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
hMb(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeL(o,"colorful")
if(n==null)throw B.R("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_i[r]
if(q.b===s)w.H(0,q)}}v=C.fIA(e)
u=C.fIB(e)
p=C.h1T(n,D.a0m,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.z(new B.J(o,new C.fnr(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jB<ck.E,n>")
o=B.z(new B.jB(w,new C.fns(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.Pe)
return p},
hPN(d,e,f){return B.c1(A.K,null,new C.fv5(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hsv(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f0()
s.dX(t)
w=D.cje[s.aB(10)]
v=new C.e1G(s)
u=x.N
return new C.e1F(w,s.aB(4),J.fh(v.$1$2(D.cIt,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.cX0,2+s.aB(2),u),v.$1$2(D.cQX,2,u),v.$1$2(D.cZz,4,x.fP),t)},
hu6(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f0()
a1.dX(a5.w+a3*13)
w=new C.eW9(a4)
v=new C.eWb(a4,d)
u=new C.eWa(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cK){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.K(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.ey,0.1+a1.ae()*0.45,0.05+a1.ae()*0.3,0.45,0.75,C.a_A(a0,52),"lux_spot",a5.vG(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.ba,0,0,1,1,0,"lux_back",a5.vG(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.ba,0,0,1,1,0,"lux_back2",a5.aBg(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.ba,0.022,0.038,0.956,0.924,0,g,a5.vG(0,f),D.da,150,C.a_A(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.ba,0.018,0.032,0.964,0.936,0,g,a5.vG(0,f),D.da,120,C.a_A(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.ba,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.da,260,C.a_A(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.ba,0,0,1,1,0,"lux_filigree",a5.vG(0,"filigree"),D.da,200))
break
default:a2.push(w.$10$anim$delay(D.ba,0.08,0.06,0.84,0.004,C.a_A(a0,208),"lux_rule",a5.aBg(0,"shimmer",r),D.tf,150))
a2.push(w.$10$anim$delay(D.ba,0.08,0.936,0.84,0.004,C.a_A(a0,144),"lux_rule2","",D.Ge,220))}l=!A.d.bf(a2,new C.eW8())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vG(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vG(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_A(r,242)
j=a5.vG(0,"orbit")
i=s===D.ba?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pn,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ey,t-0.007,0.9495,0.014,0.025,C.a_A(r,242),"lux_g2",a5.vG(0,"orbit"),D.pn,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.ba,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fF(a0,16),8,"0").toUpperCase()))}if((A.d.gJ(d.b).a&16777215)<8421504)a2.push(w.$8(D.ba,0,0,1,1,0,"lux_velvet",a5.vG(0,"velvet")))},
nh:function nh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fnt:function fnt(d){this.a=d},
fnu:function fnu(){},
vb:function vb(d,e){this.a=d
this.b=e},
a5W:function a5W(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoy:function aoy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fnm:function fnm(){},
fnp:function fnp(){},
flm:function flm(){},
fln:function fln(){},
flo:function flo(d){this.a=d},
ffM:function ffM(){},
ffP:function ffP(d,e,f){this.a=d
this.b=e
this.c=f},
ffO:function ffO(d,e){this.a=d
this.b=e},
ffN:function ffN(d,e){this.a=d
this.b=e},
ffL:function ffL(d){this.a=d},
fid:function fid(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fib:function fib(d){this.a=d},
fic:function fic(d){this.a=d},
eZA:function eZA(){},
eZB:function eZB(){},
eZC:function eZC(){},
fvT:function fvT(){},
Zo:function Zo(d){this.a=d},
aEs:function aEs(d,e,f,g,h){var _=this
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
eJm:function eJm(d,e,f){this.a=d
this.b=e
this.c=f},
eJn:function eJn(d,e){this.a=d
this.b=e},
eJk:function eJk(d,e){this.a=d
this.b=e},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJj:function eJj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eJe:function eJe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJd:function eJd(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJc:function eJc(d,e){this.a=d
this.b=e},
eJf:function eJf(d){this.a=d},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJ4:function eJ4(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eJA:function eJA(d){this.a=d},
eJB:function eJB(d){this.a=d},
eJz:function eJz(d){this.a=d},
eJC:function eJC(d){this.a=d},
eJy:function eJy(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJF:function eJF(d){this.a=d},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJG:function eJG(d){this.a=d},
eJv:function eJv(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJI:function eJI(d){this.a=d},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJJ:function eJJ(d){this.a=d},
eJs:function eJs(d){this.a=d},
eJK:function eJK(d,e){this.a=d
this.b=e},
eJr:function eJr(d,e){this.a=d
this.b=e},
eJL:function eJL(d){this.a=d},
eJD:function eJD(d){this.a=d},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJa:function eJa(d,e,f){this.a=d
this.b=e
this.c=f},
eJb:function eJb(d,e,f){this.a=d
this.b=e
this.c=f},
eJp:function eJp(d,e){this.a=d
this.b=e},
eJo:function eJo(d,e){this.a=d
this.b=e},
fvS:function fvS(d,e){this.a=d
this.b=e},
Zn:function Zn(d,e,f){this.c=d
this.d=e
this.a=f},
aEr:function aEr(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eIW:function eIW(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIY:function eIY(d,e){this.a=d
this.b=e},
eIZ:function eIZ(d){this.a=d},
eJ_:function eJ_(d){this.a=d},
eIV:function eIV(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d,e){this.a=d
this.b=e},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
f4x:function f4x(d){this.a=d},
aYP:function aYP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB4:function aB4(d,e,f){this.c=d
this.d=e
this.a=f},
bgs:function bgs(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
e1I:function e1I(d){this.a=d},
e1H:function e1H(){},
be4:function be4(d,e){this.b=d
this.a=e},
fnv:function fnv(d){this.a=d},
fnw:function fnw(){},
fnx:function fnx(){},
fny:function fny(d){this.a=d},
ap7:function ap7(d,e){this.a=d
this.b=e},
fnr:function fnr(){},
fns:function fns(){},
fv5:function fv5(d,e){this.a=d
this.b=e},
XL:function XL(d,e,f){this.c=d
this.d=e
this.a=f},
ayx:function ayx(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dba:function dba(d){this.a=d},
dbb:function dbb(d){this.a=d},
dbc:function dbc(d,e){this.a=d
this.b=e},
dbf:function dbf(d){this.a=d},
dbg:function dbg(d,e){this.a=d
this.b=e},
dbe:function dbe(d,e){this.a=d
this.b=e},
dbh:function dbh(d){this.a=d},
dbd:function dbd(d,e){this.a=d
this.b=e},
boI:function boI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e1F:function e1F(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e1G:function e1G(d){this.a=d},
eW9:function eW9(d){this.a=d},
eWb:function eWb(d,e){this.a=d
this.b=e},
eWa:function eWa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW8:function eW8(){},
aIY:function aIY(){},
fHp(d){var w,v,u
try{w=A.Q.aD(0,d,null)
if(x.f.b(w)){v=B.v3(B.Z(w,x.N,x.z))
return v}}catch(u){}return null},
aYL:function aYL(d,e,f){this.c=d
this.d=e
this.a=f},
bi4:function bi4(d,e){this.c=d
this.a=e},
hIy(d){return A.d.dI(D.Fk,new C.fgT(d),new C.fgU())},
hIz(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aW(t,6)
if(w.length===0)return null
v=new B.a5(D.Fk,new C.fgV(w),x.b4)
if(!v.gag(0).C())return null
u=v.gJ(0)
return new C.jt("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kW:function kW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fgT:function fgT(d){this.a=d},
fgU:function fgU(){},
fgV:function fgV(d){this.a=d},
ms(d,e,f,g,h){return new C.Dn(f,g,d)},
hvf(d){var w=d.z,v=B.U(w).k("a5<1>")
w=B.z(new B.a5(w,new C.eY7(),v),v.k("G.E"))
d.z=w
d.x=""},
dr(d,e){var w=$.IQ
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
ds(d,e,f,g,h,i,j,k,l){return C.ei(A.be,!1,4279310375,A.az,"",d,24,A.bg,A.a4,"",e,"design_"+C.cy(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cd,D.eS,j,k,l)},
h1G(d,e){var w
C.hvf(d)
w=A.d.dI($.bA6(),new C.feJ(e),new C.feK())
$.IQ=w.a
d.x=w.a;++d.y
try{w.bC(d)}finally{$.IQ=""}d.z=B.bj(d.z,!0,x.F)},
Dn:function Dn(d,e,f){this.a=d
this.b=e
this.e=f},
eY7:function eY7(){},
fmY:function fmY(){},
fmZ:function fmZ(){},
fn_:function fn_(){},
fna:function fna(){},
fnf:function fnf(){},
fng:function fng(){},
fnh:function fnh(){},
fni:function fni(){},
fnj:function fnj(){},
fnk:function fnk(){},
fnl:function fnl(){},
fn0:function fn0(){},
fn1:function fn1(){},
fn2:function fn2(){},
fn3:function fn3(){},
fn4:function fn4(){},
fn5:function fn5(){},
fn6:function fn6(){},
fn7:function fn7(){},
fn8:function fn8(){},
fn9:function fn9(){},
fnb:function fnb(){},
fnc:function fnc(){},
fnd:function fnd(){},
fne:function fne(){},
feJ:function feJ(d){this.a=d},
feK:function feK(){},
iJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ei(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.ba,4280172719,2,m,n,0,"",o,D.cK,p,q,r)},
BJ(d,e,f,g,h,i,j,k,l){return C.ei(A.be,!1,4279310375,A.az,"",d,24,A.bg,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cd,D.eS,j,k,l)},
byR(){var w=new B.P(Date.now(),0,!1)
return A.i1[B.bB(w)-1]+" "+B.bQ(w)+", "+B.bw(w)},
ek:function ek(d,e,f){this.a=d
this.b=e
this.c=f},
bwj(d){return new B.iE((A.o.aw(d,24)&255)/255,(A.o.aw(d,16)&255)/255,(A.o.aw(d,8)&255)/255,(d&255)/255)},
hA2(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.ako(A.cw.aF(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hA6(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f4k(),x.dv).aG(0,"\n")},
hA5(d){switch(d.a){case 2:return A.mS
case 1:case 5:return A.ewZ
default:return A.Qy}},
hA_(d){switch(d.a){case 2:return A.tP
case 1:case 5:return A.Sh
default:return A.a5Z}},
hA3(d,e){var w,v=null,u=d.ay,t=A.o.aw(u,24),s=A.o.aw(d.ch,24),r=(t&255)===0?v:C.bwj(u),q=(s&255)===0?v:C.bwj(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n1(q,p,A.kk)
w=new B.p0(t,t,t,t)}switch(d.ax.a){case 1:return B.ld(v,v,v,new B.kk(r,w,v,A.a7b,v),v,v,v,v)
case 4:return u?new B.fG(v,v,v):B.wb(B.ld(v,v,q,v,p+0.4,v,v,v))
default:return B.ld(v,v,v,new B.kk(r,w,B.uJ(4),A.ho,v),v,v,v,v)}},
hA1(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eS?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hA_(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hA6(d)
t=C.bwj(d.Q)
s=d.x.a>=700?A.eb:A.un
r=d.y===A.cx?A.wL:A.aeJ
q=d.z
p=new B.BU(w,l,l,B.f_(u,l,l,l,B.fW(l,t,1===q.a?A.aJ0:A.aJ_,l,l,l,l,l,l,A.dl,l,l,v,r,s,l,!0,l,l,l,l),C.hA5(d.as)))
break
case 1:case 4:o=C.hA2(d.at)
n=i===D.l3&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wb(B.f_(w,l,l,l,B.fW(l,A.qI,l,l,l,l,l,l,l,A.dl,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gj(o,n?A.a77:A.SD,l,l)
break
case 3:w=new B.n1(A.Gw,1,A.kk)
u=B.uJ(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ld(A.tP,B.f_(t,l,l,l,B.fW(l,D.dOC,l,l,l,l,l,l,l,A.dl,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mS),l,new B.kk(E.aBD,new B.p0(w,w,w,w),u,A.ho,l),l,l,l,l)
break
case 2:p=C.hA3(d,e)
break
case 5:p=C.hA0(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fUA(-w,p)
w=i===D.cK
if(w){m=A.o.aw(d.Q,24)&255
if(m<255)p=new B.apR(m/255,p)}if(w)return new F.vj(k,l,j,l,new B.Qq(new B.kj(g,g,f,1/0),p))
if(i===D.kG){i=new B.n1(A.Gw,1,A.kk)
i=B.ld(A.tP,p,l,new B.kk(A.on,new B.p0(i,i,i,i),B.uJ(4),A.ho,l),l,l,D.bjK,l)}else i=p
return new F.vj(k,l,j,l,new B.fG(g,f,i))},
hA4(d,e,f,g){var w,v=null,u=C.bwj(d.e),t=d.f
t=B.a([F.fTe(t!=null?B.ld(v,v,v,new B.kk(v,v,v,A.ho,new B.aTj(E.Si,A.a5T,B.a([u,C.bwj(t)],x.cR),v)),v,v,v,v):B.ld(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f4j(f,g),B.U(w).k("J<1,f5>")))
return F.clo(t)},
fID(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fID=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2a(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.UC(A.v5,A.Gt,D.bkO,null,null,null,!1,null)
o=new B.AA(o,new C.fnE(607,787,p,d))
o.L4(n,null)
r.push(o)}u=n.jz(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fID,v)},
hA0(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fHp(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagQ()
if(h==null)h=A.arO
j=B.rP(4279308564)
w=B.uJ(18)
v=new B.n1(B.rP(4287531653),3,A.kk)
u=i.length===0?"My links":i
u=B.a([B.wb(B.f_(u,m,m,m,B.fW(m,A.on,m,m,m,m,m,m,m,A.dl,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wb(B.f_(A.a.i(l.c),m,m,m,D.eDN,m)))
u.push(new B.fG(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bU(t,t.gI(0),s.k("bU<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rP(4280690220)
o=new B.a79(8,8)
n=A.a.i(r.b)
u.push(new B.ni(D.be3,new C.au0(new C.afM(q),B.ld(m,B.f_(n.length===0?A.a.i(r.c):n,m,m,m,D.eFW,A.mS),m,new B.kk(p,m,new B.agd(o,o,o,o),A.ho,m),m,m,D.bk8,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wb(B.f_(k,m,m,m,D.eFf,m))
u.push(new C.au0(C.hab(k),t))}return B.ld(m,B.xR(u,A.Js,A.l2),m,new B.kk(j,new B.p0(v,v,v,v),w,A.ho,m),m,m,D.beT,m)},
f4k:function f4k(){},
f4j:function f4j(d,e){this.a=d
this.b=e},
fnE:function fnE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aey(d){var w,v
for(w=0;w<32;++w){v=D.Fb[w]
if(v.a===d)return v}return null},
fXa(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aF(A.a.aW(d,u+1))
return w}catch(v){return null}},
cO(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h4K(d,e){return B.a8(d,!1).cr(B.eH(new C.ftJ(e),!0,null,x.fB))},
h4J(d,e){return B.c1(A.K,null,new C.ftI(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iM:function iM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
De:function De(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LM:function LM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfP:function bfP(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
dLr:function dLr(d){this.a=d},
dLq:function dLq(d,e,f){this.a=d
this.b=e
this.c=f},
dLp:function dLp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bni:function bni(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eI9:function eI9(d,e){this.a=d
this.b=e},
baY:function baY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWG:function aWG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3s:function c3s(){},
c3t:function c3t(d){this.a=d},
c3u:function c3u(d,e,f){this.a=d
this.b=e
this.c=f},
c3v:function c3v(d,e,f){this.a=d
this.b=e
this.c=f},
ftJ:function ftJ(d){this.a=d},
Xj:function Xj(d,e){this.c=d
this.a=e},
awY:function awY(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d0F:function d0F(d,e,f){this.a=d
this.b=e
this.c=f},
d0K:function d0K(d){this.a=d},
d0L:function d0L(d){this.a=d},
d0J:function d0J(d){this.a=d},
d0M:function d0M(d){this.a=d},
d0I:function d0I(d,e){this.a=d
this.b=e},
d0N:function d0N(d){this.a=d},
d0H:function d0H(d){this.a=d},
d0O:function d0O(d){this.a=d},
d0G:function d0G(d,e){this.a=d
this.b=e},
d0P:function d0P(d,e){this.a=d
this.b=e},
ftI:function ftI(d){this.a=d},
ftH:function ftH(d){this.a=d},
ftG:function ftG(d,e,f){this.a=d
this.b=e
this.c=f},
ftF:function ftF(d,e){this.a=d
this.b=e},
aIr:function aIr(){},
hPZ(d){return B.c1(A.K,null,new C.fvR(),d,!0,!0,!0,null,!1,!1,x.N)},
fvR:function fvR(){},
XE:function XE(d){this.a=d},
bcr:function bcr(d){this.d=d
this.c=this.a=null},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d,e){this.a=d
this.b=e},
d7c:function d7c(d){this.a=d},
hwD(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.aY(w)}return D.wd},
hKs(d){var w,v=A.d.gJ(d.split("@"))
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
hKr(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gJ(d.split("@")),p=C.hwD(d)
switch(q){case"shimmer":return B.nn(A.a6k,g,new C.fkk(p,A.k.K(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bbP(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e5(A.A,B.d7(C.fzK(g,B.a32(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bbw(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d7(B.et(A.A,e*0.5,B.e5(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dg()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.me(Math.sin(e)*0.3)
return B.dP(B.fm(A.A,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.V,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.bkf(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.V,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.b6u(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.V,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.b67(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.br2(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bo5(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bne(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.V,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.baR(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.h,B.a([B.bZ(0,B.e1(B.e5(A.A,B.bT(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.b9),1.6+s*0.15,r,r),!0,r),0,0,0),B.et(A.A,s*0.06,B.e5(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fkk:function fkk(d,e){this.a=d
this.b=e},
bbP:function bbP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbw:function bbw(d,e,f){this.b=d
this.c=e
this.a=f},
bkf:function bkf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6u:function b6u(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b67:function b67(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
br2:function br2(d,e,f){this.b=d
this.c=e
this.a=f},
bo5:function bo5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bne:function bne(d,e,f){this.b=d
this.c=e
this.a=f},
baR:function baR(d,e,f){this.b=d
this.d=e
this.a=f},
d0m:function d0m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wK:function wK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fkn(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kG},
hKx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fko())
s=A.d.gJ(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gJ(B.aNd(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hKw(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d8(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d8(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
aeb(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeb=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a5<1>")
e=B.z(new B.a5(a4,new C.fcL(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(A.dw,null,new C.fcM(e),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$aeb)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gJ(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fJd(d),$async$aeb)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.JB(d,"Search states\u2026","",A.jJ,"Choose state"),$async$aeb)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fIa(s)
if(p==null)p=A.d.gJ(D.O7)
f=C.cy()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cy()
m=p.e
l=C.fkp(p.d)
k=x.u
j=B.a([C.ei(A.be,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a4,"",1,C.cy(),l,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.l3,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Bw(i,0.016,D.kH,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bw(0,0.058,D.ey,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bw(0,0.058,D.ey,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.J0("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.J0("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fFg(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvN("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_b("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_b("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_b("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_b("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvN("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bw(m,0.082,D.ba,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cy()
k.push(C.ei(A.be,!1,i,A.az,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bg,A.cp,"",0.074,g,null,"","",0,!1,"",0,D.ba,4280172719,2,y.O,0,0,"",D.cd,D.cK,0.78,0.11,0.388))
A.d.v(k,C.fFg(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvN("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fZ6("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fZ6("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_b("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_b("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvM("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvM("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvN("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.J0("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.J0("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvM("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvM("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvN("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_b("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvM("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_b("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fFg(0.22,0.83,0.56,4291404327,i),h)
h.push(C.J0("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.J0("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Au(null,null,null,null,D.nz,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qR(m,null,0,0,j,n,D.pm,"","","Hati ya Ndoa",D.da)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeb,v)},
fko:function fko(){},
fcL:function fcL(){},
fcM:function fcM(d){this.a=d},
fcJ:function fcJ(d){this.a=d},
fcK:function fcK(d){this.a=d},
hzx(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hzw(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mf
case"lineThrough":return A.yj
default:return A.az}},
ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ey(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h07(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NU[w]
if(v.b===u)return v}return D.da},
hw2(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cAx[w]
if(v.b===u)return v}return D.cK},
hCd(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cXz[w]
if(v.b===u)return v}return D.ba},
qR(d,e,f,g,h,i,j,k,l,m,n){return new C.lo(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fRZ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hxV(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h07(d.h(0,"transition"))
q=B.aQ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aQ(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d4(n,x.f)
n=B.cz(n,new C.c8Q(),n.$ti.k("G.E"),x.F)
n=B.z(n,B.a2(n).k("G.E"))}return C.qR(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hxV(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajS[w]
if(v.b===u)return v}return D.ma},
Au(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.P(Date.now(),0,!1):a4
return new C.hS(p,t,a1,h,i,w,a0==null?B.a([C.qR(4294967295,null,0,0,null,C.cy(),D.pm,"","","",D.da)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
U2(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hul(a6.h(0,"aspectRatio"))
t=B.aQ(a6.h(0,"autoAdvanceSeconds"))
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
o=C.kh(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kh(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aQ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aQ(a6.h(0,"signatureInkColor"))
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
else{f=J.b4(f,new C.c8D(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c8E(),x.N)
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
else{g=J.d4(g,x.f)
g=B.cz(g,new C.c8F(),g.$ti.k("G.E"),x.bt)
g=B.z(g,B.a2(g).k("G.E"))}return C.Au(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qR(4294967295,a3,0,0,a3,C.cy(),D.pm,"","","",D.da)],x.g):g,v,p,o,s)},
kh(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hul(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cYj[w]
if(v.b===u)return v}return D.B9},
cy(){var w=Date.now(),v=$.iO
$.iO=v+1
return""+1000*w+"_"+v},
c96(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Ba){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,40,A.bg,A.u,"",0.2,v,p,"","",0,!1,"",0,D.ba,m,2,o,0,0,"",D.cd,D.cK,0.84,0.08,0.3)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.12,u,p,"","",0,!1,"",0,D.ba,m,2,"Click to add subtitle",0,0,"",D.cd,D.cK,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,32,A.bg,A.u,"",0.14,v,p,"","",0,!1,"",0,D.ba,m,2,o,0,0,"",D.cd,D.cK,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!0,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.68,u,p,"","",0,!1,"",0,D.ba,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cd,D.cK,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.ba,m,2,"Two Column Slide",0,0,"",D.cd,D.cK,0.88,0.06,0.06)
u=C.cy()
t=f.e
u=C.ei(A.be,!0,t.l(),A.az,"",n,18,A.bg,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.ba,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cd,D.cK,0.42,0.06,0.22)
s=C.cy()
A.d.v(w,B.a([v,u,C.ei(A.be,!0,t.l(),A.az,"",n,18,A.bg,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.ba,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cd,D.cK,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.H(d.z,C.ei(A.L,!1,4294967295,A.az,"",n,42,A.bg,A.u,"",0.2,C.cy(),p,"","",0,!1,"",0,D.ba,m,2,"Section Header",0,0,"",D.cd,D.cK,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.ba,m,2,"Compare",0,0,"",D.cd,D.cK,0.88,0.06,0.06)
u=C.cy()
t=f.c
u=C.ei(A.be,!1,l,A.az,"",t.j(0.12).l(),24,A.bg,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.ba,t.l(),2,"",0,0,"",D.cd,D.eS,0.42,0.06,0.22)
s=C.cy()
r=f.e
s=C.ei(A.be,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,s,p,"","",0,!1,"",0,D.ba,m,2,"Option A",0,0,"",D.cd,D.cK,0.38,0.08,0.26)
q=C.cy()
t=C.ei(A.be,!1,l,A.az,"",t.j(0.06).l(),24,A.bg,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.ba,t.j(0.5).l(),2,"",0,0,"",D.cd,D.eS,0.42,0.52,0.22)
q=C.cy()
A.d.v(w,B.a([v,u,s,t,C.ei(A.be,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,q,p,"","",0,!1,"",0,D.ba,m,2,"Option B",0,0,"",D.cd,D.cK,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,36,A.bg,A.u,"",0.35,v,p,"","",0,!1,"",0,D.ba,m,2,"TERM / QUESTION",0,0,"",D.cd,D.cK,0.8,0.1,0.12)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,22,A.bg,A.cp,"",0.35,u,p,"","",0,!1,"",0,D.ba,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cd,D.cK,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,28,A.bg,A.u,"",0.18,v,p,"","",0,!1,"",0,D.ba,m,2,"Quiz Question",0,0,"",D.cd,D.cK,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!1,f.e.l(),A.az,"",n,20,A.bg,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.ba,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cd,D.cK,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,26,A.bg,A.u,"",0.1,v,p,"","",0,!1,"",0,D.ba,m,2,"Worksheet / Assignment",0,0,"",D.cd,D.cK,0.88,0.06,0.04)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!1,f.e.l(),A.az,"",n,18,A.bg,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.ba,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cd,D.cK,0.88,0.06,0.16)],x.u))
break}},
hm3(d){return A.d.dI(D.ZZ,new C.c97(d),new C.c98())},
hm0(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cg(v,C.U2(B.Z(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fBP(d,e){var w,v,u,t=B.S(x.N,x.I),s=new C.c92(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bg<2>")
u=B.z(new B.bg(t,w),w.k("G.E"))
A.d.aY(u,new C.c91())
return u},
fS1(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c8Y()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aoz(d){return C.hlZ(d)},
hlZ(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c90()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0n(m),$async$aoz)
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
return B.b(B.ax(),$async$aoz)
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
case 11:o=l.$1($.fS0.h(0,m))
n=C.fBP(C.fBP(j,r),o)
if(n.length===0){u=C.fS1(C.fS1(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoz,v)},
c8X(d){return C.hlY(d)},
hlY(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c8X=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$c8X)
case 7:r=f
q=r.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kn(q,B.U(q).c)
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
return B.i($async$c8X,v)},
aYR(d,e){return C.hm_(d,e)},
hm_(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYR=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aYR)
case 6:s=g
q=s.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.H(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.a9(r)>500?J.JK(r,J.a9(r)-500):r
w=7
return B.b(s.ao("StringList","ngmy_slides_deleted_"+p,o),$async$aYR)
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
return B.i($async$aYR,v)},
U3(d,e){return C.hm1(d,e)},
hm1(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$U3=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.a9(a0)===0){w=1
break}p=$.fS_.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aoz(a3),$async$U3)
case 5:p=a6
case 4:w=6
return B.b(C.c8X(a3),$async$U3)
case 6:o=a6
n=B.S(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("bg<2>")
l=m.k("a5<G.E>")
e=B.z(new B.a5(new B.bg(n,m),new C.c93(o),l),l.k("G.E"))
A.d.aY(e,new C.c94())
$.fS_.m(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.z(new B.J(e,new C.c95(),n),n.k("ai.E"))
r=A.Q.ak(n,null)
$.fS0.m(0,a0,r)
t=8
w=11
return B.b(B.aeZ(a0,r),$async$U3)
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
return B.b(B.ax(),$async$U3)
case 16:q=a6
w=17
return B.b(q.ao("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$U3)
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
return B.i($async$U3,v)},
Ha:function Ha(d,e){this.a=d
this.b=e},
aox:function aox(d,e){this.a=d
this.b=e},
u3:function u3(d,e){this.a=d
this.b=e},
m6:function m6(d,e){this.a=d
this.b=e},
hm:function hm(d,e){this.a=d
this.b=e},
ey:function ey(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lo:function lo(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c8R:function c8R(){},
c8S:function c8S(){},
c8Q:function c8Q(){},
hS:function hS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c8G:function c8G(){},
c8H:function c8H(){},
c8D:function c8D(){},
c8E:function c8E(){},
c8F:function c8F(){},
jt:function jt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c97:function c97(d){this.a=d},
c98:function c98(){},
c92:function c92(d){this.a=d},
c91:function c91(){},
c8Y:function c8Y(){},
c8Z:function c8Z(){},
c9_:function c9_(){},
c90:function c90(){},
c93:function c93(d){this.a=d},
c94:function c94(){},
c95:function c95(){},
hKI(d,e){var w=x.N,v=B.S(w,x.F)
w=new C.fkX(e,v,d,B.aZ(w))
w.$1(new C.fkT())
w.$1(new C.fkU())
w.$1(new C.fkV())
w.$1(new C.fkW())
return v},
fkX:function fkX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkT:function fkT(){},
fkU:function fkU(){},
fkV:function fkV(){},
fkW:function fkW(){},
aYO:function aYO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8M:function c8M(d){this.a=d},
c8L:function c8L(){},
c8N:function c8N(){},
c8O:function c8O(d,e){this.a=d
this.b=e},
c8P:function c8P(d){this.a=d},
alN:function alN(d,e){this.c=d
this.a=e},
bfC:function bfC(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dyM:function dyM(){},
aId:function aId(){},
c8U(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c8U=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.eum)
u=!1
w=1
break}u=B.kF(!1,d,t,!1,null,A.a1r,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8U,v)},
hlW(d){var w=A.d.bh(D.Fk,new C.c8V(d))
if(w<0)return!0
return w>=4},
hlX(d){var w=A.d.bh($.bA6(),new C.c8W(d))
if(w<0)return!0
return w>=5},
c8V:function c8V(d){this.a=d},
c8W:function c8W(d){this.a=d},
hMn(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xI()
$.pI().p8(t,new C.fnL(s),!0)
u=B.a([B.CB(v,A.pq,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eEf,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.no,v,v,v),v,v,4,v,4,v))}return new B.am(A.V,v,A.aY,A.q,u,v)},
fnL:function fnL(d){this.a=d},
hLZ(){return C.fIw()},
hIX(){return C.by6()},
hKZ(){return C.fIn()},
aMj(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fmR(d,f),$async$aMj)
case 5:w=1
break
case 4:if(d.e!=null)d.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMj,v)},
fmR(d,e){var w=0,v=B.j(x.H),u
var $async$fmR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwk
if(u==null)u=e+".pdf"
w=2
return B.b(B.c1(A.K,null,new C.fmS(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fmR)
case 2:return B.h(null,v)}})
return B.i($async$fmR,v)},
fmS:function fmS(d,e){this.a=d
this.b=e},
ab7:function ab7(d,e,f){this.c=d
this.d=e
this.a=f},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebN:function ebN(d){this.a=d},
abp:function abp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYN(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYM(g,m,f,d,e,h,l,k,j,o,i,null)},
h3_(d){return B.cj(new C.fkS(d))},
fIy(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hM6(d){if(d===D.cd)return"None"
return C.fIy(d)},
bwQ(d,e,f,g){return C.hCk(d,e,f,g)},
hCk(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwQ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a8(d,!0)
if($.fFz&&t.oO())t.eD()
$.fFz=!0
s.a=null
w=3
return B.b(B.hM(A.bh,!0,"Animation preview",d,new C.f6D(s,e,g,f),null,A.eG,!0,x.H),$async$bwQ)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fFz=!1
case 1:return B.h(u,v)}})
return B.i($async$bwQ,v)},
fwF(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fwF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bP,x.w).w.a.a*0.88,280,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fIy(f)+" Slide transition preview"
s=s?Ab.DB:A.ub
w=3
return B.b(C.bwQ(d,s,new B.a3(t,t*0.56,B.bu(B.m(14),new C.aFQ(f,null),A.ap),null),r),$async$fwF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fwF,v)},
h2i(d,e,f){var w,v,u=null,t=A.co.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d7(f,t)
case 2:case 17:return B.dP(B.d7(f,t),new B.v((1-t)*48,0))
case 3:return B.dP(B.d7(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d7(f,t),new B.v(0,(1-t)*36))
case 5:return B.dP(B.d7(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e5(A.A,B.d7(f,t),0.5+t*0.5,u,u)
case 7:return B.e5(A.A,B.d7(f,t),1.4-t*0.4,u,u)
case 8:w=B.dg()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fm(A.A,B.d7(f,t),u,w,!0)
case 9:w=B.dg()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jw((1-t)*1.2)
return B.fm(A.A,B.d7(f,t),u,w,!0)
case 10:case 19:w=B.dg()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.me((1-t)*0.8)
v=0.6+t*0.4
w.jf(v,v,v,1)
return B.fm(A.A,B.d7(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d7(f,t),new B.v((1-t)*24,0))}},
bzD(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bzD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bP,x.w).w.a.a*0.88,300,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fIy(f)+" Element animation preview"
s=s?Ab.DB:A.ub
w=3
return B.b(C.bwQ(d,s,new B.a3(t,t*0.62,B.bu(B.m(14),new C.awJ(f,null),A.ap),null),r),$async$bzD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bzD,v)},
hM5(d){var w,v,u,t,s=$.adH.W(0,d)
if(s!=null){$.adH.m(0,d,s)
return s}w=A.cw.aF(A.a.aW(d,A.a.cP(d,",")+1))
$.adH.m(0,d,w)
v=$.fGl=$.fGl+w.length
u=B.a2($.adH).k("cu<1>")
for(;;){if(!(v>41943040&&$.adH.a>1))break
t=new B.cu($.adH,u).gag(0)
if(!t.C())B.b8(B.fx())
v-=$.adH.W(0,t.gT(0)).length
$.fGl=v}return w},
hLN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kv(0,d),j=B.z(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QU(s,A.u))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QU(t,A.u))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QU(u,A.cp))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aW(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0m(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
m.G(new B.kx(e))
return m
case"rounded":m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
w=e.ge8()*0.18
m.G(new B.iU(B.bM(e,new B.b3(w,w))))
return m
case"triangle":m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
m.G(new B.bc(e.gbN().a,e.b))
w=e.d
m.G(new B.ar(e.c,w))
m.G(new B.ar(e.a,w))
m.G(new B.bL())
return m
case"hexagon":w=$.a0()
m=B.a([],m)
v=new B.aS(w.r,A.as,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.bc(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ar(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.G(new B.bL())
return v
case"diamond":m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
m.G(new B.bc(e.gbN().a,e.b))
m.G(new B.ar(e.c,e.gbN().b))
m.G(new B.ar(e.gbN().a,e.d))
m.G(new B.ar(e.a,e.gbN().b))
m.G(new B.bL())
return m
case"arch":m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
w=e.a
u=e.d
m.G(new B.bc(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.G(new B.ar(w,p))
m.b55(new B.v(t,p),new B.b3(s,s))
m.G(new B.ar(t,u))
m.G(new B.bL())
return m
default:m=new B.aS($.a0().r,A.as,n,n,B.a([],m))
m.G(new B.nE(e))
return m}},
fis(d,e,f){return B.cj(new C.fit(D.en6.t(0,d),d,f,e))},
aYM:function aYM(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c8K:function c8K(d){this.a=d},
c8J:function c8J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8I:function c8I(){},
aYJ:function aYJ(d,e){this.b=d
this.a=e},
fkS:function fkS(d){this.a=d},
fkR:function fkR(d,e){this.a=d
this.b=e},
f6D:function f6D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6B:function f6B(d){this.a=d},
f6C:function f6C(d,e){this.a=d
this.b=e},
aFQ:function aFQ(d,e){this.c=d
this.a=e},
bqz:function bqz(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eQt:function eQt(d,e,f){this.a=d
this.b=e
this.c=f},
aGs:function aGs(d,e){this.b=d
this.a=e},
T6:function T6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfM:function bfM(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dJE:function dJE(d){this.a=d},
dJD:function dJD(d){this.a=d},
dJC:function dJC(d){this.a=d},
H9:function H9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8C:function c8C(d){this.a=d},
c8B:function c8B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awJ:function awJ(d,e){this.c=d
this.a=e},
bal:function bal(){this.d=0
this.c=this.a=null},
cYV:function cYV(d){this.a=d},
cYU:function cYU(d){this.a=d},
a5E:function a5E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgq:function bgq(d,e){var _=this
_.d=null
_.bq$=d
_.a5$=e
_.c=_.a=null},
e1o:function e1o(d,e,f){this.a=d
this.b=e
this.c=f},
aWJ:function aWJ(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbu:function bbu(d,e,f){this.b=d
this.c=e
this.a=f},
bme:function bme(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eFU:function eFU(){},
fit:function fit(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnb:function bnb(d,e,f){this.b=d
this.c=e
this.a=f},
aIq:function aIq(){},
aIW:function aIW(){},
aKf:function aKf(){},
flS(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$flS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wk.c2().Ku(D.cVN,A.rK,!0),$async$flS)
case 3:r=e
if(r==null||J.ci(r.a)){u=null
w=1
break}t=J.fh(r.a)
s=t.c
if(s==null)throw B.R("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.R("That file is too big. Use a file under 8 MB.")
u=C.hLH(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flS,v)},
hLH(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a5X(d,new B.Z_(A.cN.gcs().aF(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hDR(e)
if(A.a.i(w).length===0)throw B.R("No readable words were found in that Word file.")
return new C.a5X(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c0.Jj(0,e,!0)
if(A.a.i(w).length===0)throw B.R("That file is empty.")
return new C.a5X(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hDR(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cqV().cAX(B.qB(d,A.hF,o,o),o,o,!1).cCC(0,"word/document.xml")
if(n==null)return""
w=n.cKj()
v=A.c0.Jj(0,w==null?$.h5a():w,!0).split("</w:p>")
u=new B.f4("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kv(0,r)
p=A.a.i(B.cz(q,new C.f9q(),B.a2(q).k("G.E"),t).fM(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5X:function a5X(d,e,f){this.a=d
this.b=e
this.c=f},
f9q:function f9q(){},
hm2(d,e,f,g,h,i,j,k,l){return new C.Mc(l,e,d,g,f,i,h,j,k,null)},
Mc:function Mc(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBs:function aBs(d,e,f,g,h,i,j,k,l){var _=this
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
_.a5$=l
_.c=_.a=null},
ehY:function ehY(d){this.a=d},
ehW:function ehW(){},
ehX:function ehX(d){this.a=d},
eel:function eel(){},
eem:function eem(){},
een:function een(d,e){this.a=d
this.b=e},
efW:function efW(d){this.a=d},
efK:function efK(){},
efL:function efL(){},
edJ:function edJ(){},
eh3:function eh3(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
efU:function efU(d,e){this.a=d
this.b=e},
ehH:function ehH(d){this.a=d},
ehI:function ehI(){},
ehJ:function ehJ(){},
ehK:function ehK(d){this.a=d},
ehL:function ehL(){},
ed7:function ed7(d){this.a=d},
ehV:function ehV(){},
ef2:function ef2(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
ed6:function ed6(d){this.a=d},
efp:function efp(d){this.a=d},
efq:function efq(d,e,f){this.a=d
this.b=e
this.c=f},
efr:function efr(d){this.a=d},
ef1:function ef1(){},
ef0:function ef0(d){this.a=d},
eeZ:function eeZ(){},
eeY:function eeY(d){this.a=d},
ef_:function ef_(){},
eeh:function eeh(d){this.a=d},
eei:function eei(d){this.a=d},
ef8:function ef8(d){this.a=d},
ef3:function ef3(d){this.a=d},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
ef9:function ef9(d,e){this.a=d
this.b=e},
ed9:function ed9(){},
eda:function eda(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efk:function efk(){},
efl:function efl(d,e){this.a=d
this.b=e},
efi:function efi(d,e,f){this.a=d
this.b=e
this.c=f},
efj:function efj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efc:function efc(d,e,f){this.a=d
this.b=e
this.c=f},
efd:function efd(d,e,f){this.a=d
this.b=e
this.c=f},
efe:function efe(d){this.a=d},
eff:function eff(d,e){this.a=d
this.b=e},
efg:function efg(d,e){this.a=d
this.b=e},
efh:function efh(d,e){this.a=d
this.b=e},
efb:function efb(d,e){this.a=d
this.b=e},
efn:function efn(d){this.a=d},
efo:function efo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efm:function efm(d){this.a=d},
efF:function efF(){},
efG:function efG(){},
efH:function efH(){},
efI:function efI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efC:function efC(d){this.a=d},
efE:function efE(){},
efD:function efD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
efA:function efA(d,e,f){this.a=d
this.b=e
this.c=f},
efB:function efB(d,e){this.a=d
this.b=e},
efJ:function efJ(){},
efa:function efa(d,e){this.a=d
this.b=e},
edq:function edq(){},
edr:function edr(d,e,f){this.a=d
this.b=e
this.c=f},
eds:function eds(d){this.a=d},
edt:function edt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edp:function edp(d){this.a=d},
efP:function efP(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
efM:function efM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efQ:function efQ(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
edo:function edo(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
efY:function efY(d,e,f){this.a=d
this.b=e
this.c=f},
edi:function edi(d,e){this.a=d
this.b=e},
edh:function edh(d){this.a=d},
efX:function efX(d,e,f){this.a=d
this.b=e
this.c=f},
ed8:function ed8(d){this.a=d},
edK:function edK(){},
ehF:function ehF(d,e){this.a=d
this.b=e},
ehG:function ehG(d,e,f){this.a=d
this.b=e
this.c=f},
eh4:function eh4(d,e,f){this.a=d
this.b=e
this.c=f},
ec5:function ec5(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebR:function ebR(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
edl:function edl(d,e){this.a=d
this.b=e},
edj:function edj(d){this.a=d},
ecx:function ecx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecA:function ecA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ecB:function ecB(d){this.a=d},
ecz:function ecz(){},
ecw:function ecw(d,e,f){this.a=d
this.b=e
this.c=f},
efz:function efz(d,e){this.a=d
this.b=e},
ehO:function ehO(d){this.a=d},
ehP:function ehP(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d){this.a=d},
ehR:function ehR(d,e,f){this.a=d
this.b=e
this.c=f},
ehN:function ehN(d){this.a=d},
ehk:function ehk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehj:function ehj(d,e,f){this.a=d
this.b=e
this.c=f},
ehi:function ehi(){},
ehh:function ehh(d,e,f){this.a=d
this.b=e
this.c=f},
ehg:function ehg(d,e){this.a=d
this.b=e},
ehd:function ehd(d,e,f){this.a=d
this.b=e
this.c=f},
ehb:function ehb(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehf:function ehf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehe:function ehe(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
eec:function eec(d,e){this.a=d
this.b=e},
eh5:function eh5(){},
ehE:function ehE(d,e){this.a=d
this.b=e},
ehC:function ehC(d){this.a=d},
ehD:function ehD(d){this.a=d},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebW:function ebW(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e,f){this.a=d
this.b=e
this.c=f},
ec3:function ec3(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e,f){this.a=d
this.b=e
this.c=f},
ebU:function ebU(d){this.a=d},
efV:function efV(d,e,f){this.a=d
this.b=e
this.c=f},
ehM:function ehM(d,e,f){this.a=d
this.b=e
this.c=f},
eeg:function eeg(d,e,f){this.a=d
this.b=e
this.c=f},
eef:function eef(){},
ecG:function ecG(d,e,f){this.a=d
this.b=e
this.c=f},
ecH:function ecH(d){this.a=d},
ebS:function ebS(d,e){this.a=d
this.b=e},
edI:function edI(d,e){this.a=d
this.b=e},
ec0:function ec0(d,e){this.a=d
this.b=e},
ec9:function ec9(d){this.a=d},
eca:function eca(d,e){this.a=d
this.b=e},
ecb:function ecb(d,e){this.a=d
this.b=e},
ec8:function ec8(d){this.a=d},
ecm:function ecm(d,e){this.a=d
this.b=e},
ec7:function ec7(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d){this.a=d},
ect:function ect(d){this.a=d},
ecu:function ecu(){},
ecv:function ecv(){},
ecc:function ecc(d){this.a=d},
ecd:function ecd(d){this.a=d},
ece:function ece(d){this.a=d},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(d){this.a=d},
ecl:function ecl(d){this.a=d},
ecn:function ecn(d){this.a=d},
eco:function eco(d,e){this.a=d
this.b=e},
edH:function edH(d,e,f){this.a=d
this.b=e
this.c=f},
edG:function edG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edF:function edF(d,e,f){this.a=d
this.b=e
this.c=f},
edE:function edE(d,e){this.a=d
this.b=e},
ec1:function ec1(d,e){this.a=d
this.b=e},
ecK:function ecK(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
edn:function edn(d){this.a=d},
efy:function efy(d,e){this.a=d
this.b=e},
efx:function efx(d,e){this.a=d
this.b=e},
efw:function efw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efu:function efu(d){this.a=d},
efv:function efv(d,e){this.a=d
this.b=e},
efs:function efs(){},
eft:function eft(){},
eh6:function eh6(){},
eh7:function eh7(d,e){this.a=d
this.b=e},
eh8:function eh8(){},
eh9:function eh9(d){this.a=d},
eha:function eha(d,e){this.a=d
this.b=e},
ec6:function ec6(d,e){this.a=d
this.b=e},
edb:function edb(){},
edc:function edc(){},
edd:function edd(){},
edg:function edg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edf:function edf(d,e){this.a=d
this.b=e},
ede:function ede(d,e,f){this.a=d
this.b=e
this.c=f},
eeH:function eeH(d){this.a=d},
eeG:function eeG(){},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eeF:function eeF(d){this.a=d},
eeK:function eeK(d,e){this.a=d
this.b=e},
eeE:function eeE(d){this.a=d},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeD:function eeD(d){this.a=d},
eeM:function eeM(d,e){this.a=d
this.b=e},
eeC:function eeC(d){this.a=d},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeA:function eeA(d){this.a=d},
eeP:function eeP(d,e){this.a=d
this.b=e},
eez:function eez(d){this.a=d},
ees:function ees(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
eeu:function eeu(d){this.a=d},
eer:function eer(d){this.a=d},
eev:function eev(d,e){this.a=d
this.b=e},
eeq:function eeq(d){this.a=d},
eew:function eew(d,e){this.a=d
this.b=e},
eep:function eep(d){this.a=d},
eex:function eex(d,e){this.a=d
this.b=e},
eeo:function eeo(d){this.a=d},
eey:function eey(d){this.a=d},
edA:function edA(d){this.a=d},
edB:function edB(d){this.a=d},
edD:function edD(d){this.a=d},
edv:function edv(d){this.a=d},
edu:function edu(d,e){this.a=d
this.b=e},
edw:function edw(d,e){this.a=d
this.b=e},
edx:function edx(d){this.a=d},
edy:function edy(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d){this.a=d},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d,e){this.a=d
this.b=e},
eeT:function eeT(d){this.a=d},
eeU:function eeU(d){this.a=d},
egg:function egg(d,e){this.a=d
this.b=e},
egh:function egh(d){this.a=d},
egi:function egi(d){this.a=d},
egt:function egt(d){this.a=d},
egE:function egE(d){this.a=d},
egP:function egP(d){this.a=d},
egW:function egW(d){this.a=d},
egX:function egX(d){this.a=d},
egY:function egY(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
egj:function egj(d){this.a=d},
egk:function egk(d){this.a=d},
egl:function egl(d){this.a=d},
egm:function egm(d){this.a=d},
egn:function egn(d){this.a=d},
ego:function ego(d){this.a=d},
egp:function egp(d){this.a=d},
egq:function egq(d){this.a=d},
egr:function egr(d){this.a=d},
egs:function egs(d){this.a=d},
egu:function egu(d){this.a=d},
egv:function egv(d){this.a=d},
egw:function egw(d){this.a=d},
egx:function egx(d){this.a=d},
egy:function egy(d){this.a=d},
egz:function egz(d){this.a=d},
egA:function egA(d){this.a=d},
egB:function egB(d){this.a=d},
egC:function egC(d){this.a=d},
eg6:function eg6(d){this.a=d},
egD:function egD(d){this.a=d},
ege:function ege(d){this.a=d},
egF:function egF(d){this.a=d},
egd:function egd(d,e){this.a=d
this.b=e},
egG:function egG(d,e){this.a=d
this.b=e},
egH:function egH(d,e){this.a=d
this.b=e},
egc:function egc(d,e,f){this.a=d
this.b=e
this.c=f},
eg2:function eg2(d,e){this.a=d
this.b=e},
egf:function egf(d){this.a=d},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh2:function eh2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eh1:function eh1(d,e){this.a=d
this.b=e},
egI:function egI(d,e,f){this.a=d
this.b=e
this.c=f},
egb:function egb(d,e,f){this.a=d
this.b=e
this.c=f},
eg1:function eg1(d,e,f){this.a=d
this.b=e
this.c=f},
eg_:function eg_(d,e){this.a=d
this.b=e},
egJ:function egJ(d,e){this.a=d
this.b=e},
ega:function ega(d,e){this.a=d
this.b=e},
eg0:function eg0(d,e){this.a=d
this.b=e},
efZ:function efZ(d,e){this.a=d
this.b=e},
egK:function egK(d){this.a=d},
eg9:function eg9(d){this.a=d},
egL:function egL(d){this.a=d},
egM:function egM(d){this.a=d},
egN:function egN(d){this.a=d},
egO:function egO(d){this.a=d},
eg8:function eg8(d){this.a=d},
egQ:function egQ(d){this.a=d},
egR:function egR(d){this.a=d},
egS:function egS(d,e){this.a=d
this.b=e},
eg7:function eg7(d){this.a=d},
egT:function egT(d,e){this.a=d
this.b=e},
eg5:function eg5(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
eg4:function eg4(d){this.a=d},
egV:function egV(d,e){this.a=d
this.b=e},
eg3:function eg3(d){this.a=d},
ecF:function ecF(d,e,f){this.a=d
this.b=e
this.c=f},
ecE:function ecE(d,e){this.a=d
this.b=e},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehm:function ehm(d,e){this.a=d
this.b=e},
eho:function eho(d,e){this.a=d
this.b=e},
ehl:function ehl(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
edM:function edM(d){this.a=d},
edO:function edO(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
eek:function eek(){},
eej:function eej(){},
ehA:function ehA(d){this.a=d},
ehz:function ehz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehy:function ehy(d,e){this.a=d
this.b=e},
eht:function eht(d,e){this.a=d
this.b=e},
ehx:function ehx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehp:function ehp(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehs:function ehs(d){this.a=d},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehw:function ehw(d,e){this.a=d
this.b=e},
ehB:function ehB(d){this.a=d},
ed4:function ed4(d){this.a=d},
ed3:function ed3(d,e,f){this.a=d
this.b=e
this.c=f},
ed2:function ed2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecS:function ecS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecU:function ecU(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecR:function ecR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecY:function ecY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecX:function ecX(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecQ:function ecQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecP:function ecP(d,e){this.a=d
this.b=e},
ed0:function ed0(d,e){this.a=d
this.b=e},
ecO:function ecO(d){this.a=d},
ed1:function ed1(d,e){this.a=d
this.b=e},
eeW:function eeW(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
ee2:function ee2(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
edY:function edY(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
ee5:function ee5(d,e){this.a=d
this.b=e},
edW:function edW(d,e){this.a=d
this.b=e},
ee6:function ee6(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e,f){this.a=d
this.b=e
this.c=f},
edU:function edU(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
edT:function edT(d,e,f){this.a=d
this.b=e
this.c=f},
edQ:function edQ(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
eea:function eea(d,e){this.a=d
this.b=e},
edR:function edR(d,e,f){this.a=d
this.b=e
this.c=f},
edP:function edP(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e){this.a=d
this.b=e},
eee:function eee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebO:function ebO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efT:function efT(d,e){this.a=d
this.b=e},
efR:function efR(d){this.a=d},
efS:function efS(d,e){this.a=d
this.b=e},
acS:function acS(d,e,f){this.a=d
this.b=e
this.c=f},
aw6:function aw6(d,e){this.c=d
this.a=e},
b98:function b98(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aZ$=e
_.c=_.a=null},
cVq:function cVq(d){this.a=d},
cVp:function cVp(d){this.a=d},
b9m:function b9m(d,e){this.c=d
this.a=e},
cVM:function cVM(d){this.a=d},
cVN:function cVN(d){this.a=d},
Ib:function Ib(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b97:function b97(){this.d=!1
this.c=this.a=null},
cVn:function cVn(d){this.a=d},
cVj:function cVj(d){this.a=d},
cVo:function cVo(d){this.a=d},
cVi:function cVi(d){this.a=d},
cVm:function cVm(d){this.a=d},
cVk:function cVk(d){this.a=d},
cVl:function cVl(d,e){this.a=d
this.b=e},
NR:function NR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yv:function Yv(d,e,f){this.c=d
this.d=e
this.a=f},
aBv:function aBv(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a5$=f
_.c=_.a=null},
eiy:function eiy(){},
eio:function eio(d){this.a=d},
eix:function eix(d){this.a=d},
eip:function eip(d){this.a=d},
eiq:function eiq(d){this.a=d},
eik:function eik(d){this.a=d},
eil:function eil(d,e){this.a=d
this.b=e},
eim:function eim(d){this.a=d},
ein:function ein(d,e,f){this.a=d
this.b=e
this.c=f},
eiv:function eiv(){},
eiw:function eiw(d){this.a=d},
eir:function eir(d){this.a=d},
eis:function eis(d){this.a=d},
eit:function eit(d){this.a=d},
eiu:function eiu(d){this.a=d},
eiz:function eiz(d,e,f){this.a=d
this.b=e
this.c=f},
eiB:function eiB(d,e){this.a=d
this.b=e},
eiA:function eiA(d){this.a=d},
Ii:function Ii(d,e){this.c=d
this.a=e},
bnG:function bnG(d,e){this.b=d
this.a=e},
bdZ:function bdZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdY:function bdY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH8:function aH8(){},
aJ9:function aJ9(){},
btl:function btl(){},
aJa:function aJa(){},
fnM(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fnM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wk.c2().Ku(B.a(["pdf"],x.s),A.rK,!0),$async$fnM)
case 3:q=e
if(q==null||J.ci(q.a)){u=null
w=1
break}t=J.fh(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bl0(s,"data:application/pdf;base64,"+A.cN.gcs().aF(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnM,v)},
hMh(d){var w,v,u,t,s,r
try{w=B.je(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).kv(0,w).gI(0)
if(t>0){s=J.aNF(t,1,200)
return s}}catch(r){}return 1},
fnD(d){return C.hMg(d)},
hMg(d){var w=0,v=B.j(x.T),u
var $async$fnD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnD,v)},
byQ(d,e,f,g){return C.hMq(d,e,f,g)},
hMq(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$byQ=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e3(b6,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h3A(b9,new B.aq(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.ly(a9),b0)
b0=n
a9=k.b
n=Math.min(B.ly(b0),a9)
a9=m
b0=k.a
m=Math.max(B.ly(a9),b0)
b0=l
a9=k.b
l=Math.max(B.ly(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a0()
g=new B.rs()
f=B.FD(g,null)
a7=B.N()
a7.r=A.pZ.gq(0)
f.bi(new B.ae(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gq(b8)
b1.c=p*e
b1.d=A.bV
b1.e=A.fo
b1.b=A.ad
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.L()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pO()
w=7
return B.b(a3.ym(800,h),$async$byQ)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hf(A.fK),$async$byQ)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f2(A.dz.gaL(a5))
a7=A.cN.gcs().aF(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a4(b5)
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
return B.i($async$byQ,v)},
aMT(d,e,f){return C.hMe(d,e,f)},
hMe(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aH:e
r.c=f==null?5.2:f
w=3
return B.b(B.afc(d,e,f,new C.fnB(r,q),q,"Sign document"),$async$aMT)
case 3:if(!new B.e3(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.byQ(q,t,r.b,r.c),$async$aMT)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYQ(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMT,v)},
hMo(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fXV(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fXV(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aW(A.a.aT(A.o.fF(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aW(A.a.aT(A.o.fF(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aI(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l3&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fXz(q.ay)+";border:2px solid "+C.fXz(q.ch)+'"></div>'
break
case 5:l=C.fHp(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gagQ()
if(p==null)p=A.arO
n=B.U(p)
k=n.k("pt<1>")
j=new B.pt(p,0,8,k)
j.FV(p,0,8,n.c)
j=new B.bU(j,j.gI(0),k.k("bU<ai.E>"))
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
fXz(d){var w=A.o.aw(d,24)
return"rgba("+(A.o.aw(d,16)&255)+","+(A.o.aw(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
fXV(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
byO(d,e){var w=0,v=B.j(x.H)
var $async$byO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fnK(e,C.hMo(e),d),d,null,!0,!0,x.H),$async$byO)
case 2:return B.h(null,v)}})
return B.i($async$byO,v)},
byP(){var w=0,v=B.j(x.T),u,t,s
var $async$byP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fb(92,2400),$async$byP)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fnD(s),$async$byP)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byP,v)},
aMU(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fID(d),$async$aMU)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=X.fpT(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMU,v)},
fRY(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYQ:function aYQ(d,e,f){this.a=d
this.b=e
this.c=f},
fnB:function fnB(d,e){this.a=d
this.b=e},
fnK:function fnK(d,e,f){this.a=d
this.b=e
this.c=f},
fnH:function fnH(d){this.a=d},
fnI:function fnI(d,e,f){this.a=d
this.b=e
this.c=f},
fnJ:function fnJ(d,e,f){this.a=d
this.b=e
this.c=f},
hMf(d){return C.kh(d.w)},
hMm(d){var w,v,u,t
if(d.length===0||!A.d.e9(d,C.hO4()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xG(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.h9a()
if(w.b.test(u))return u
return null},
h3C(d,e,f){var w,v,u=C.hhJ(d),t=$.oX()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hMs(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aV(d.a),v=new B.hJ(w,d.b);v.C();){u=w.gT(w).y
t=C.xG(u==null?"":u)
if(t!=null)s.H(0,t)}return s},
fnz(d,e){var w,v=d.y,u=C.xG(v==null?"":v)
if(u!=null)return d.y=u
w=C.hMs(new B.a5(e,new C.fnA(d),B.U(e).k("a5<1>")))
v=d.x
return d.y=C.h3C(v==null?"":v,null,w)},
hMr(d){var w,v
if(d.length!==1)return null
w=A.d.gJ(d)
if(!C.kh(w.w))return null
v=w.y
return C.xG(v==null?"":v)},
hm4(){var w,v=$.oX(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fM(u)},
U6(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$U6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$U6)
case 3:if(!e){u=B.S(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eT("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bD),$async$U6)
case 8:r=e
if(r==null){u=B.S(x.N,x.z)
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
$.al.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.S(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$U6,v)},
U7(d){return C.hm5(d)},
hm5(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$U7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$U7)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hr("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,A.cz,null),$async$U7)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a4(p)
$.al.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$U7,v)},
a5Z(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5Z=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$a5Z)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.U6(),$async$a5Z)
case 4:s=a6
r=C.xG(a2==null?"":a2)
if(r==null)r=a3!=null?C.h3C(a3,null,A.a3_):null
q=x.N
p=B.aZ(q)
for(o=J.de(s),n=J.aV(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xG(J.k(k==null?"":k))
if(j!=null)p.H(0,j)}n=o.gdH(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Z(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dB.aF(t)
g.m(0,"payload",A.cN.gcs().aF(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.P(Date.now(),0,!1).a4().ab())
if(D.Qa.t(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xG(J.k(q==null?"":q))
if(f==null)f=C.fS2(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.U7(s),$async$a5Z)
case 7:u=new B.aCU(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hm4()
n=r==null
d=n?C.fS2(p):r
q=B.S(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dB.aF(t)
q.m(0,"payload",A.cN.gcs().aF(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.P(Date.now(),0,!1).a4().ab())
if(D.Qa.t(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.U7(s),$async$a5Z)
case 8:u=new B.aCU(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5Z,v)},
fS2(d){var w,v,u=$.oX()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.H(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aoB(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aoB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$aoB)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.U6(),$async$aoB)
case 6:t=f
s=J.a6(t)
r=s.gI(t)
s.bm(t,new C.c99(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.U7(t),$async$aoB)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aoB,v)},
aoA(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xG(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$aoA)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.U6(),$async$aoA)
case 6:t=o.jk(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xG(J.k(q==null?"":q))===p){u=C.a5Y(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoA,v)},
a5Y(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5Y=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$a5Y)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.U6(),$async$a5Y)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
k=B.aQ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=A.c0.c6(0,A.cw.aF(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Qa.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aD(0,s,null)
if(m.b(r)){q=B.Z(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.ak(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dS(B.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.P(Date.now(),0,!1).a4().ab())
o.m(p,g,l)}w=7
return B.b(C.U7(p),$async$a5Y)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5Y,v)},
hMl(d,e,f){var w,v=B.S(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.P(Date.now(),0,!1).a4().ab())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.z(new B.J(d,new C.fnG(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
fnO(d,e,f,g){var w
if(e!=null){w=B.S(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.P(Date.now(),0,!1).a4().ab())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ac())
return A.Q.ak(w,null)}return A.Q.ak(C.hMl(d==null?B.a([],x.D):d,f,g),null)},
fnN(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fnN=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5Z(h,d,e,f,g),$async$fnN)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xG(e==null?"":e)
u=new B.aCH(s,t)
w=1
break}t=A.dB.aF(h)
t=A.jU.gcs().aF(t)
u=new B.aCH(C.xG(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnN,v)},
fIF(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.a9(q)===0)return!1
if(J.cU(q,"NGMYSLIDESYNC2|"))return!0
if(J.cU(q,"NGMYSLIDECODE|"))return!0
if(J.cU(q,"NGMY_SL:"))return!0
if(J.eQ(q,s)||J.eQ(q,r))return!0
if(J.cU(q,"{"))try{w=A.Q.aD(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hMp(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fIF(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aW(v,u))
if(C.fIF(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aW(v,s))
if(C.fIF(t))return t}}return null},
fnC(d){var w,v,u,t=A.a.i(d)
if(J.a9(t)===0||J.cU(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cU(t,"NGMY_SL:"))w=v.a(A.Q.aD(0,A.c0.c6(0,A.cw.aF(J.mg(t,8))),null))
else w=v.a(A.Q.aD(0,t,null))
v=C.hvD(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aeY(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aeY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoA(t[1]),$async$aeY)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fnC(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xG(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoA(r),$async$aeY)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fnC(s)
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
return B.b(C.a5Y(t[1]),$async$aeY)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fnC(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fnC(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
hvD(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Qa.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fIC(C.U2(B.Z(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d4(u,x.f)
t=B.cz(t,new C.eYx(w),t.$ti.k("G.E"),x.I)
t=B.z(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fIC(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.m(0,"id",C.cy())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iO
$.iO=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.U2(B.Z(o,x.N,x.z))
if(e&&C.kh(p.w))p.Q=new B.P(Date.now(),0,!1).a4().bM(144e8).ab()
return p},
byz(){var w=0,v=B.j(x.aT),u,t,s
var $async$byz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Fa(),$async$byz)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeY(s),$async$byz)
case 4:t=e
u=J.ci(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byz,v)},
fvU(d){var w=0,v=B.j(x.T),u,t
var $async$fvU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hM(D.TC,!0,"Dismiss",d,new C.fvV(),new C.fvW(),A.Dy,!0,x.N),$async$fvU)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.esz)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fvU,v)},
hQ1(d,e,f,g,h){return B.a8(d,!1).cr(B.eH(new C.fvX(h,e,g,f),!0,null,x.H))},
fnA:function fnA(d){this.a=d},
c99:function c99(d){this.a=d},
fnG:function fnG(){},
eYx:function eYx(d){this.a=d},
fvV:function fvV(){},
fvW:function fvW(){},
fvX:function fvX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U4:function U4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBt:function aBt(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ei4:function ei4(){},
ei0:function ei0(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e){this.a=d
this.b=e},
ei1:function ei1(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei5:function ei5(d){this.a=d},
ei6:function ei6(d){this.a=d},
ei9:function ei9(d){this.a=d},
eia:function eia(d){this.a=d},
ei8:function ei8(d){this.a=d},
eib:function eib(d){this.a=d},
ei7:function ei7(d){this.a=d},
eic:function eic(d,e){this.a=d
this.b=e},
ei_:function ei_(d,e){this.a=d
this.b=e},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
U5:function U5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgM:function bgM(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eid:function eid(d,e){this.a=d
this.b=e},
eie:function eie(d){this.a=d},
eif:function eif(){},
eig:function eig(d){this.a=d},
eih:function eih(d,e){this.a=d
this.b=e},
aBq:function aBq(d){this.a=d},
aBr:function aBr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ebI:function ebI(d){this.a=d},
ebH:function ebH(){},
ebJ:function ebJ(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebD:function ebD(){},
ebF:function ebF(d){this.a=d},
ebG:function ebG(d){this.a=d},
bqU:function bqU(){},
aoC:function aoC(d){this.a=d},
aBu:function aBu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eij:function eij(d){this.a=d},
eii:function eii(d){this.a=d},
hAy(){var w,v,u,t
for(v=0;v<4;++v){w=D.cLU[v]
try{if(A8.bRW(w)){u=w
return u}}catch(t){}}return null},
Po(d,e){return C.hJ7(d,e)},
hJ7(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Po=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hAy()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nz?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.K(b4,2)
c2.b=b5-A.o.K(b5,2)
b6=B.pY(c6,!0)
b6.toString
p=B.a8(c6,!0)
b7=new B.cn(null,x.A)
b8=A.d.gJ(c3)
b9=$.au()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nV(new C.fhV(c2,b7,o),!1,!1)
b6.ll(0,l)
b9=x.H
B.cf(null,A.d9,!1,null,new C.fhW(n,m),c6,null,!0,!0,b9)
k=new C.fi_(b7)
j=new C.fi0()
i=null
t=4
b3=c2.a
h=Ae.aP8(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fyi(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aTT(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FV.xp(i,"dataavailable",new C.fhX(e))
d=new B.bO(new B.be($.bt,x.dT),x.b2)
A.FV.xp(i,"stop",new C.fhY(d))
J.afu(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Po)
case 8:w=7
return B.b(c5.$1(d0),$async$Po)
case 7:a0=d0
J.fyl(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afu(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afu(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Po)
case 15:w=14
return B.b(c5.$1(d0),$async$Po)
case 14:a0=d0
case 13:J.fyl(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afu(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.P(Date.now(),0,!1).bM(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fyl(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fl,null,b9),$async$Po)
case 18:w=16
break
case 17:J.afu(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afu(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.nh),$async$Po)
case 19:a5=A.d.gJ(q.split(";"))
a6=B.hB(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mI(a7)
c0.download=B.t(J.a9(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JH(b0)
J.lD(b0)
B.bK(A.ng,new C.fhZ(a7),b9)
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
J.lD(l)
if(p.oO())p.eD()
c3=o
b3=$.au()
c3.shI(b3)
J.aNK(c3,0)
c3=n
c3.shI(b3)
J.aNK(c3,0)
c3=m
c3.shI(b3)
J.aNK(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Po,v)},
fhV:function fhV(d,e,f){this.a=d
this.b=e
this.c=f},
fhU:function fhU(){},
fhW:function fhW(d,e){this.a=d
this.b=e},
fi_:function fi_(d){this.a=d},
fi0:function fi0(){},
fhX:function fhX(d){this.a=d},
fhY:function fhY(d){this.a=d},
fhZ:function fhZ(d){this.a=d},
br5:function br5(d,e,f){this.c=d
this.d=e
this.a=f},
eSV:function eSV(){},
eSW:function eSW(){},
c9w(d){var w=0,v=B.j(x.at),u,t,s
var $async$c9w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoM(d,A.y2),$async$c9w)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.P(Date.now(),0,!1))
if(t.a<0){u=A.bu
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9w,v)},
c9v(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5F:function a5F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgv:function bgv(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e2f:function e2f(d){this.a=d},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d,e){this.a=d
this.b=e},
a6w:function a6w(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a6x:function a6x(d,e){this.a=d
this.b=e},
b_t:function b_t(){},
cbJ:function cbJ(){},
cbK:function cbK(){},
cbL:function cbL(d,e,f,g,h,i,j,k,l){var _=this
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
hab(d){return new C.afM(d)},
a0R:function a0R(){},
afM:function afM(d){this.a=d},
aO3:function aO3(){},
au0:function au0(d,e){this.d=d
this.b=e
this.a=null},
aPx:function aPx(d){this.b=d
this.a=null},
fd4(d,e){var w=0,v=B.j(x.H)
var $async$fd4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a0().gwD().Kd(d,e),$async$fd4)
case 2:B.fpZ()
return B.h(null,v)}})
return B.i($async$fd4,v)},
h0U(d,e){return(A.qu[(d^e)&255]^A.o.aw(d,8))>>>0},
faX(d,e,f,g,h,i){var w=C.hFx(d,A.d7,f,null,A.cR,g,h,i)
return w},
h2L(d){var w=F.h3t(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hhJ(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.ol.h(0,w)
if(v!=null)return v
for(u=A.ol.gdH(A.ol),u=u.gag(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
h2T(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<32;++w)v+="- "+D.cYL[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwN(d,e){return C.hCf(d,e)},
hCf(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hB([d],"application/pdf")
n=x.z
q=B.aR6(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cv(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jK(o,"share",[p]),x.H),$async$bwN)
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
return B.i($async$bwN,v)},
fIw(){var w=0,v=B.j(x.y),u,t,s
var $async$fIw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f4l
s=$.bwk
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwN(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIw,v)},
by6(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$by6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f4l
l=$.bwk
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fYA()?3:4
break
case 3:w=5
return B.b(C.bwN(m,k),$async$by6)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwl
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mI(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JH(q)
w=10
return B.b(B.bK(A.Y,null,x.H),$async$by6)
case 10:J.lD(q)
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
return B.i($async$by6,v)},
fIn(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fIn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwl
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.l9.tT(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fIn,v)},
fIE(d,e){var w=0,v=B.j(x.H),u,t
var $async$fIE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hB([d],"text/html"))
t.toString
u=window
u.toString
A.l9.tT(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fIE,v)},
aZq(d,e){var w=0,v=B.j(x.y),u
var $async$aZq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZs(d,e),$async$aZq)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZr(d),$async$aZq)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZq,v)}},D,H,Ai,N,W,P,Aj,G,F,E,Q,X,Y,Z,Ak,A6,K,A_,O,R,L,A7,Al,A0,Am,An,A8,A9,Ao,Aa,Ab,Ac,Ap,Aq,S,Ar,I,Ad,As,At,T,U,M,A1,A2,A3,Au,Av
J=c[1]
B=c[0]
A=c[2]
V=c[180]
A4=c[130]
Ae=c[55]
Af=c[47]
A5=c[50]
Ag=c[101]
Ah=c[191]
C=a.updateHolder(c[4],C)
D=c[178]
H=c[88]
Ai=c[34]
N=c[182]
W=c[179]
P=c[168]
Aj=c[96]
G=c[149]
F=c[29]
E=c[181]
Q=c[103]
X=c[27]
Y=c[137]
Z=c[108]
Ak=c[145]
A6=c[109]
K=c[183]
A_=c[58]
O=c[159]
R=c[72]
L=c[117]
A7=c[122]
Al=c[185]
A0=c[92]
Am=c[83]
An=c[86]
A8=c[51]
A9=c[155]
Ao=c[33]
Aa=c[70]
Ab=c[102]
Ac=c[190]
Ap=c[192]
Aq=c[189]
S=c[64]
Ar=c[186]
I=c[134]
Ad=c[63]
As=c[146]
At=c[193]
T=c[45]
U=c[184]
M=c[166]
A1=c[188]
A2=c[187]
A3=c[54]
Au=c[165]
Av=c[94]
C.nr.prototype={
ud(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t6(t,v)
return new C.nr(t===0?!1:w,v,t)},
bFq(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BO()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t6(w,u)
return new C.nr(r===0?!1:s,u,r)},
bFQ(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BO()
w=o-d
if(w<=0)return p.a?$.fJY():$.BO()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t6(w,u)
q=new C.nr(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a0C())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aj(e,16)
if(A.o.K(e,16)===0)return r.bFq(v)
u=w+v+1
t=new Uint16Array(u)
C.fVg(r.b,w,e,t)
w=r.a
s=C.t6(u,t)
return new C.nr(s===0?!1:w,t,s)},
lV(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aj(e,16)
u=A.o.K(e,16)
if(u===0)return n.bFQ(v)
t=w-v
if(t<=0)return n.a?$.fJY():$.BO()
s=n.b
r=new Uint16Array(t)
C.hrH(s,w,e,r)
w=n.a
q=C.t6(t,r)
p=new C.nr(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aE(0,$.a0C())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a0C())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cyJ(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5E(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5E(t,e)
if(s===0)return $.BO()
if(r===0)return t.a===e?t:t.ud(0)
w=s+1
v=new Uint16Array(w)
C.hrF(t.b,s,d.b,r,v)
u=C.t6(w,v)
return new C.nr(u===0?!1:e,v,u)},
FW(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BO()
w=d.c
if(w===0)return t.a===e?t:t.ud(0)
v=new Uint16Array(s)
C.b6n(t.b,s,d.b,w,v)
u=C.t6(s,v)
return new C.nr(u===0?!1:e,v,u)},
bsK(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t6(r,u)
return new C.nr(!1,u,s)},
bsJ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t6(u,r)
return new C.nr(!1,r,v)},
bsL(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t6(p,m)
return new C.nr(s!==0,m,s)},
SQ(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BO()
w=t.a
if(w===e.a){if(w){w=$.a0C()
return t.FW(w,!0).bsL(e.FW(w,!0),!0).a5E(w,!0)}return t.bsK(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bsJ(v.FW($.a0C(),!1),!1)},
an(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5E(e,v)
if(C.cyJ(u.b,t,e.b,w)>=0)return u.FW(e,v)
return e.FW(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.ud(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5E(e,v)
if(C.cyJ(u.b,t,e.b,w)>=0)return u.FW(e,v)
return e.FW(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BO()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fVh(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t6(w,t)
return new C.nr(q===0?!1:r,t,q)},
bFp(d){var w,v,u,t
if(this.c<d.c)return $.BO()
this.aNe(d)
w=$.fDG.c2()-$.auJ.c2()
v=C.fDI($.fDF.c2(),$.auJ.c2(),$.fDG.c2(),w)
u=C.t6(w,v)
t=new C.nr(!1,v,u)
return this.a!==d.a&&u>0?t.ud(0):t},
cfr(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aNe(d)
w=C.fDI($.fDF.c2(),0,$.auJ.c2(),$.auJ.c2())
v=C.t6($.auJ.c2(),w)
u=new C.nr(!1,w,v)
if($.fDH.c2()>0)u=u.lV(0,$.fDH.c2())
return t.a&&u.c>0?u.ud(0):u},
aNe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fVd&&d.c===$.fVf&&g.b===$.fVc&&d.b===$.fVe)return
w=d.b
v=d.c
u=16-A.o.gahe(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fVb(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fVb(g.b,f,u,r)}else{r=C.fDI(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fDJ(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cyJ(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6n(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6n(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hrG(p,r,i);--o
C.fVh(h,j,0,r,o,s)
if(r[i]<h){m=C.fDJ(j,s,o,n)
C.b6n(r,l,n,m,r)
while(--h,r[i]<h)C.b6n(r,l,n,m,r)}--i}$.fVc=g.b
$.fVd=f
$.fVe=w
$.fVf=v
$.fDF.b=r
$.fDG.b=l
$.auJ.b=s
$.fDH.b=u},
gV(d){var w,v,u,t=new C.cyK(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cyL().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nr&&this.aI(0,e)===0},
ro(d,e){return this.aI(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u6(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gahe(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aw(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cyM(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cyN(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kR(A.aE.gaL(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ud(0):r
while(v.c>1){u=$.h77()
if(u.c===0)B.b8(D.aVe)
t=v.cfr(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bFp(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).fM(0)},
$iaON:1,
$ihu:1}
C.aOd.prototype={
H(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gI(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
cCC(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gJ(d){return A.d.gJ(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.jN(w,w.length,B.U(w).k("jN<1>"))}}
C.Q0.prototype={
cKj(){var w,v
if(this.as==null)this.b7o()
w=this.as
v=w==null?null:w.alR()
return v==null?null:v.ey()},
b7o(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alR().ey()
this.as=new C.bJj(v)}},
gX(d){return this.at}}
C.a1N.prototype={
a3(){return"CompressionType."+this.b}}
C.bDo.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cl()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dP(v,u)+(s.b&A.xE[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cl()}w=A.o.dP(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fm(u,t)&A.xE[d])
s.c=t}return v}}
C.bBZ.prototype={
cAW(d,e){var w,v,u,t,s,r=this,q=new C.bDo(d)
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
t=r.cdM(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cdP(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cdM(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d_m[u])v=!1
if(t!==D.cG0[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cdP(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bVl()
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
u[w]=l}c9.fr=B.bY(6,$.h5e(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h5d()
u=x.an
c9.y=B.bY(6,v,!1,u)
c9.z=B.bY(6,v,!1,u)
c9.Q=B.bY(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bR0(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqx(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqx(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.aj(a8,16)
b2=A.o.K(a8,16)
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
a3=c9.aqx(d3)
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
c1=(c1<<8^D.Fr[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Ft[b9];++b9
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
if(b8===0){b8=D.Ft[b9];++b9
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
if(b8===0){b8=D.Ft[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Ft[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Ft[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bB(c3)
c1=c1<<8^D.Fr[c1>>>24&255^v];--c2}d4.bB(c3)
c1=(c1<<8^D.Fr[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bB(c7)
c1=(c1<<8^D.Fr[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bB(c7)
c1=(c1<<8^D.Fr[c1>>>24&255^c7&255])>>>0
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
aqx(d){var w,v,u,t,s=this,r=s.ay
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
bR0(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bVl(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cqW.prototype={
aDV(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIt(e)
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
if(w>0)e.aDY(w,!1)
r.ce9(e)
q=r.r
v=r.f
u=e.aGL(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b55()
s.cKi(0,u,e,f)
q.push(s)}},
ce9(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5h(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.rb()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.rb()
d.aQ()
d.aQ()
d.aH()
d.aH()
d.rb()
d.rb()
u=d.rb()
t=d.rb()
this.f=u
this.r=t
d.c=s},
bIt(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5h(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajm(A.hF)
o.aI1(r.ey(),A.hF,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cqU.prototype={}
C.auo.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cqX.prototype={
aDV(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aQ()
o.b=e.aQ()
w=D.ay5.h(0,e.aQ())
o.c=w==null?D.Jm:w
o.d=e.aQ()
o.e=e.aQ()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aQ()
u=e.aQ()
o.x=e.akE(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aMf:D.C4
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.C4&&u>2){w=o.y
w.toString
s=B.qB(w,A.hF,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aQ()===39169){s.aQ()
s.aQ()
s.akE(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aQ()
o.at=D.aMg
o.ax=new C.cqU(r,q)
w=D.ay5.h(0,q)
o.c=w==null?D.Jm:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gI(d){return this.bgA().length},
alR(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qB(new Uint8Array(0),A.hF,q,q)
w=r.at
if(w!==D.C4)if(p.gI(0)<=0)r.at=D.C4
else{if(w===D.aMf){p=r.bDK(p)
r.Q=p}else if(w===D.aMg){p=r.bDn(p)
r.Q=p}r.at=D.C4}w=r.c
if(w===D.abr){v=p.c
u=B.db()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.oG.Ar(p.ey(),!0,!1)
else{t=B.a6m(A.hF,r.w)
p=r.Q
p.toString
A.oG.a1z(p,t,!0,!1)
u.b=t.Fv()}r.Q.c=v
return B.qB(u.b8(),A.hF,q,q)}else if(w===D.abs){s=B.a6m(A.hF,32768)
p=r.Q
v=p.c
C.ham().cAW(p,s)
u=s.Fv()
r.Q.c=v
return B.qB(u,A.hF,q,q)}else return B.qB(p.ey(),A.hF,q,q)},
bgA(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3p(d){var w=this.ch,v=C.I7(C.h0U(w[0].N(0),d))
w[0]=v
v=w[1].an(0,v.SQ(0,C.I7(255)))
w[1]=v
w[1]=v.aM(0,C.I7(134775813)).an(0,C.I7(1)).SQ(0,C.I7(4294967295))
w[2]=C.I7(C.h0U(w[2].N(0),w[1].lV(0,24).N(0)))},
aMF(){var w=(this.ch[2].SQ(0,C.I7(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bDK(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qB(new Uint8Array(0),A.hF,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3p(u[v.c++]^r.aMF())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMF()
r.b3p(s)
u&2&&B.ah(t)
t[w]=s}return B.qB(t,A.hF,q,q)},
bDn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gI(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hrm(k,w,v)
p=new Uint8Array(B.cl(A.aE.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aE.dt(q,v,k)))
if(!C.fUH(A.aE.dt(q,k,k+2),u))throw B.R(B.fd("password error"))
k=new Uint8Array(16)
n=new C.bAz(k,new Uint8Array(16),p)
k=x.S
m=J.a39(0,k)
m=n.r=new C.cby(m)
m.c=!0
m.b=m.bfU(!0,new C.aq8(p))
if(m.c)m.d=B.bj(D.ny,!0,k)
else m.d=B.bj(D.xx,!0,k)
l=C.fSW(C.fSY(),64)
l.b9F(new C.aq8(o))
n.w=l
n.cJU(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fUH(k,m))throw B.R(B.fd("macs don't match"))
return B.qB(r,A.hF,null,null)}}
C.b55.prototype={
cKi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.akE(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qB(t,A.hF,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aQ()
p=s.aQ()
o=s.a5h(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rb()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rb()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rb()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akE(u)
f.c=n.as
t=new C.cqX(D.Jm,n,D.C4,B.a([C.I7(0),C.I7(0),C.I7(0)],x.f3))
n.ch=t
t.aDV(0,f,g)},
u(d){return this.at}}
C.cqV.prototype={
cAX(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cqW(B.a([],x.fT))
this.a=g
g.aDV(0,d,f)
g=B.a([],x.bm)
w=B.S(x.N,x.S)
v=new C.aOd(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Q0(o,A.o.aj(Date.now(),1000),0):C.fLl(o,q.w,q)
v.H(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fLl(o,q.w,q)
if(k.as==null)k.b7o()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajm(A.hF)
j.aI1(o,A.hF,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.IN(!1).Gw(i,0,h,!0)}}return v}}
C.bAz.prototype={
cJU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bl(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.ha5(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bGU(u,0,w,0,o)}else{o===$&&B.c()
q.bDO(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.JA(w,0)
m.x=A.aE.dt(m.x,0,10)
w=m.w
l=w.a
l.l6(0)
w=w.d
w===$&&B.c()
l.Bl(0,w,0,w.length)
return f}}
C.cbD.prototype={}
C.cbH.prototype={}
C.cbB.prototype={}
C.aq8.prototype={}
C.cbG.prototype={
cBb(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9F(new C.aq8(A.aE.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bHS(n.a,n.b,t,s,r)
r+=v}A.aE.ha(f,g,g+w,s)
return o.a.c},
bHS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.R(B.dF("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bl(0,d,0,d.length)
v.Bl(0,f,0,4)
u=m.c
u===$&&B.c()
w.JA(u,0)
u=m.c
A.aE.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bl(0,s,0,s.length)
w.JA(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.cbC.prototype={}
C.cbA.prototype={}
C.aq9.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aq9){v=this.a
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
w=A.o.ro(w,e.gbRh())
if(!w)e.gbRh()
return w},
aGe(d,e){this.a=0
this.b=d},
rq(d){return this.aGe(d,null)},
aGO(d){var w,v=this,u=v.b
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
w.aWr(v,u)
u=w.b
u===$&&B.c()
w.aWr(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWr(d,e){var w,v=A.o.fF(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bn(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.cbF.prototype={
l6(d){var w,v=this
v.a.rq(0)
v.c=0
A.aE.hi(v.b,0,4,0)
v.w=0
w=v.r
A.d.hi(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
alk(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aXT(u,0)
v.c=0}v.a.aGO(1)},
Bl(d,e,f,g){var w=this.ccE(e,f,g)
f+=w
g-=w
w=this.ccF(e,f,g)
this.ccv(e,f+w,g-w)},
JA(d,e){var w,v=this,u=C.fSX(v.a),t=u.a
t===$&&B.c()
t=C.fJ6(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fJ6(w,3)
v.ccz()
v.ccw(u)
v.apo()
v.c6Q(d,e)
v.l6(0)
return 20},
aXT(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nC(A.aE.gaL(d),d.byteOffset,d.length).getUint32(e,A.hW===w.d)
if(w.w===16)w.apo()},
apo(){this.cJT()
this.w=0
A.d.hi(this.r,0,16,0)},
ccv(d,e,f){while(f>0){this.alk(d[e]);++e;--f}},
ccF(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aXT(d,e)
e+=4
f-=4
w.aGO(4)
v+=4}return v},
ccE(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.alk(d[e]);++e;--f;++v}return v},
ccz(){this.alk(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.alk(0)}},
ccw(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.apo()
u=v.d
switch(u){case A.hW:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Cw:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.R(B.b9("Invalid endianness: "+u.u(0)))}},
c6Q(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hW===this.d,s=0;s<w;++s){r=v[s]
q=J.nC(A.aE.gaL(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cbI.prototype={
cJT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cbE.prototype={
b9F(d){var w,v,u,t,s=this,r=s.a
r.l6(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bl(0,w,0,v)
w=s.d
w===$&&B.c()
r.JA(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aE.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aE.hi(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aE.ha(w,0,u,s.d)
s.b4y(s.d,u,54)
s.b4y(s.e,u,92)
u=s.d
r.Bl(0,u,0,u.length)},
JA(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.JA(s,w)
s=u.e
t.Bl(0,s,0,s.length)
v=t.JA(d,e)
s=u.e
A.aE.hi(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bl(0,s,0,s.length)
return v},
b4y(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cbz.prototype={}
C.cby.prototype={
a_Y(d){return(D.ny[d&255]&255|(D.ny[d>>>8&255]&255)<<8|(D.ny[d>>>16&255]&255)<<16|D.ny[d>>>24&255]<<24)>>>0},
bfU(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.R(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bY(4,0,!1,u)
switch(v){case 4:q=J.nC(A.aE.gaL(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_Y((m>>>8|(m&$.pC[24])<<24)>>>0)^D.cj7[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nC(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Y((k>>>8|(k&$.pC[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_Y((k>>>8|(k&$.pC[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nC(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Y((g>>>8|(g&$.pC[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_Y(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.R(B.b9("Should never get here"))}return s},
bGU(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nC(A.aE.gaL(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
a7=D.ny[n&255]
b0=D.ny[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.ny[l>>>8&255]
a9=D.ny[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.ny[b1>>>8&255]
h=D.ny[n>>>16&255]
g=D.ny[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.ny[l>>>24&255]
s=s[3]
a1=J.nC(A.aE.gaL(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nC(A.aE.gaL(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nC(A.aE.gaL(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nC(A.aE.gaL(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bDO(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nC(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nC(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nC(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nC(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
a4=D.xx[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xx[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xx[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xx[o>>>8&255]
i=D.xx[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xx[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nC(A.aE.gaL(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bJi.prototype={}
C.bJj.prototype={
gI(d){var w=this.a.length
return w},
alR(){return B.qB(this.a,A.hF,null,null)}}
C.b6C.prototype={
u8(d){return C.hux(d)}}
C.ckW.prototype={
L8(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7U(v,t+20,u+16,t,u,B.ti(d.x))},
mQ(d){return!1}}
C.bKb.prototype={
cvt(d){if(this.b)throw B.R(B.b9("FontLoader is already loaded"))
this.c.push(d.bw(new C.bKc(),x.E))},
ma(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$ma=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.R(B.b9("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$ma)
case 6:w=5
return B.b(p.fd4(f,r),$async$ma)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$ma,v)}}
C.at5.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6k.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aW(this))return!1
return e instanceof C.a6k&&e.a===this.a},
gV(d){return B.bn(B.aW(this),B.vZ(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aW(this)===D.f9j)return"["+(w+B.dY(this.a))+"]"
return"[ObjectKey "+(w+B.dY(this.a))+"]"}}
C.aSv.prototype={
bX(d){var w=new C.axR(!0,this.e,null,new B.d9(),B.ca())
w.bW()
w.scw(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxG(0,!0)
w=this.e
if(!w.A(0,e.af)){e.af=w
e.aCz()}}}
C.axR.prototype={
sxG(d,e){return},
goL(){var w=this.a8$
return w!=null},
gkB(){var w=this.a8$
return w!=null},
KY(d){var w=d==null?B.fNF(null):d
w.sa2r(this.af)
return w}}
C.ZQ.prototype={
S(){return new C.aG8(B.aZ(x.N))},
cIb(d){return this.d.$1(d)},
cG0(){return this.e.$0()}}
C.aG8.prototype={
Z(){this.a0()
this.Ns()},
Ns(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ns=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cG0(),$async$Ns)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eRn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ns,v)},
WX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a5<1>")
p=B.z(new B.a5(r,new C.eRr(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eRs(t))
w=3
return B.b(C.al6(p),$async$WX)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eRt(t,s,p))
w=4
return B.b(t.Ns(),$async$WX)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WX,v)},
ZZ(d){return this.cgC(d)},
cgC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eRo(t))
s=J.q(d,"id")
w=3
return B.b(C.bUk(J.k(s==null?"":s)),$async$ZZ)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eRp(t))
w=1
break}q=C.fIC(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cIb(B.a([q],x.D)),$async$ZZ)
case 4:if(t.c==null){w=1
break}t.n(new C.eRq(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ZZ,v)},
Nr(d,e){return this.bEc(0,e)},
bEc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eRi(q),r,null,!0,!0,x.y),$async$Nr)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eRj(t))
s=s.h(e,"id")
w=4
return B.b(C.al5(J.k(s==null?"":s)),$async$Nr)
case 4:if(t.c==null){w=1
break}t.n(new C.eRk(t))
w=5
return B.b(t.Ns(),$async$Nr)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nr,v)},
cux(d){var w=B.bh(d),v=w==null?null:w.bP()
if(v==null)return""
return A.i1[B.bB(v)-1]+" "+B.bQ(v)},
aMw(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LJ,A.n),w,e,w,w,w,w,w,e)},
aMv(d){return this.aMw(d,44)},
b1O(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LJ:u,r=B.m(14),q=B.V(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.H3,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.H3,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bkQ,u,u,u)],p))}return B.D(B.aJ(A.c3,B.di(u,B.B(q,A.m,u,A.b6,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hM,u,u,u,A.wp,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eRx(this,d),u,u,u,u,u,u,!1,A.ae),1)},
caI(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.de.j(0.14):D.Ug,n=B.m(18),m=p?A.de:A.du
m=B.H(m,A.r,p?1.8:1)
w=this.aMv(A.p8)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aKz,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.u(B.a([v,A.d5,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aKB,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LJ:q
u=p?q:B.H(A.bf,A.r,1.6)
r=p?D.byL:q
return B.aJ(q,B.di(q,B.B(B.a([w,A.bb,t,B.di(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a5),A.fT,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fT,q,q,A.d8,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRm(this,p,d),q,q,q,q,q,q,!1,A.ae)},
ci6(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cux(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.du,A.r,1)
v=r.aMv(A.L0)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aKz,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.u(B.a([u,A.d5,B.d(p+" slides"+t,q,q,q,q,q,q,D.aKB,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZv(A.hm,A.bs,"Bring it back",r.r?q:new C.eRu(r,d))
return B.p(q,B.B(B.a([v,A.bb,t,p,A.bp,r.aZv(A.e4,A.cL,"Delete",r.r?q:new C.eRv(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.Ug,q,w,o,q,q,A.n),q,q,q,A.d8,D.bfr,q,q,q)},
aZv(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hI(B.aJ(w,B.p(w,B.V(d,v?A.bf:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
apE(d,e,f){var w=null
return new B.C(D.bev,B.u(B.a([B.V(d,A.bf,w,w,w,46),A.ab,B.d(e,w,w,w,w,w,w,D.eIZ,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eBQ,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c4
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bP,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.bf,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMw(A.xk,46),A.bb,D.blz],t)
if(j.r)s.push(D.dNT)
s.push(B.aF(i,i,i,i,A.Lt,i,i,i,new C.eRA(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.du,A.r,1)
o=J.a6(h)
q=B.a([A.T,u,new B.C(D.bi_,s,i),B.p(i,B.B(B.a([j.b1O(0,A.wW,"Save",j.a.c.length),j.b1O(1,A.Le,"Saved",o.gI(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bh3,A.ef,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cL:A.bs).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cL:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.L1:A.ej
n=B.V(n,p?A.cL:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.aa,B.D(B.d(m,i,i,i,i,i,i,A.a3Z,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bh_,A.iH,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eFb,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eI3,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eRB(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apE(A.p8,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.caI(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dNt)
else if(j.e==null)s.push(j.apE(A.afY,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.apE(A.o9,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.ci6(r.gT(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.cj,B.cL(u,i,W.adb,i,i,A.ai,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbXO()
p=s?i:D.LJ
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.aa(0,A.G,A.b1.j(0.4),A.cs,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wW,m?A.j_:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bhC,B.aJ(i,B.di(i,B.B(B.a([k,A.a3o,new B.dp(1,A.cj,B.eX(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j_:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b6,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hM,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.T)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,i,new B.aX(0,1/0,0,w.a.b*0.9),D.aSp,i,i,i,i,i,i,i,i)}}
C.nU.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().ab()],x.N,x.z)}}
C.WC.prototype={
S(){return new C.auV(B.a([],x.k),B.f6(null,x.H))},
gdS(){return this.c}}
C.auV.prototype={
Z(){this.a0()
this.Nz()},
Nz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_O(t.a.c),$async$Nz)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cA7(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nz,v)},
co_(d){var w,v,u,t=this
d.c=new B.P(Date.now(),0,!1)
w=J.pJ(t.d,new C.cAa(d))
v=w<0
if(v&&C.hrJ(d))return t.f
u=t.d
if(v)J.p_(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fzA(new C.cAb(t),v)
return t.f=t.f.bw(new C.cAc(t,d),v).eN(new C.cAd())},
Hg(d,e,f){return this.c4v(0,e,f)},
aTU(d,e){return this.Hg(0,e,!1)},
c4v(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a8(s,!1).cr(B.eH(new C.cA6(t,e),!1,null,x.H)),$async$Hg)
case 3:w=4
return B.b(t.f,$async$Hg)
case 4:w=5
return B.b(t.Nz(),$async$Hg)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hg,v)},
aTb(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dbn:d
this.Hg(0,new C.nU(w,v,new B.P(Date.now(),0,!1)),!0)},
bXj(){return this.aTb(null)},
aaK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.cAe(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aTb(s)
case 1:return B.h(u,v)}})
return B.i($async$aaK,v)},
Hf(d,e){return this.bE4(0,e)},
bE4(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cA1(e),s,null,!0,!0,x.y),$async$Hf)
case 3:if(g!==!0){w=1
break}t.n(new C.cA2(t,e))
w=4
return B.b(t.f,$async$Hf)
case 4:w=5
return B.b(C.adY(t.a.c,e.a),$async$Hf)
case 5:w=6
return B.b(t.Nz(),$async$Hf)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hf,v)},
C2(d){return this.bwq(d)},
bwq(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.czY(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C2)
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
return B.b(t.aTU(0,d),$async$C2)
case 9:w=5
break
case 7:w=10
return B.b(F.fJ8(r,d.b,null),$async$C2)
case 10:w=5
break
case 8:w=11
return B.b(t.Hf(0,d),$async$C2)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C2,v)},
bRe(){var w,v,u=null,t=[D.dbq,D.dbo,D.dbp],s=new C.cA4(),r=B.m(26),q=x.V,p=B.a([new B.aa(0,A.G,A.dD.j(0.4),A.eK,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b3(999,999)
n.push(B.p(u,new B.w(D.cXx[w],u,A.oy,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.np,u,u,u))}return B.p(u,B.B(B.a([B.D(B.u(B.a([D.f50,A.P,B.c8(A.bH,n,A.bw,6,6),A.aN,B.aJ(u,B.p(u,D.elD,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.cG,10)],q),u,A.n),u,u,u,u,V.ady,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cA3(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a3(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bFT,A.n),u,u,u,u,D.bi9,u,u,u)},
bwo(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.aa(0,A.G,A.x.j(0.5),A.cs,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.V,v,A.aY,A.q,B.a([B.eX(A.A,F.alE(d.b),A.h,A.bO),D.dSj,B.an(v,B.aJ(v,B.p(v,D.bzx,A.h,v,v,D.aTh,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czT(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.ezk,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fI(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eFl,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.czU(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czV(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.ac5,B.hI(B.aJ(s,B.p(s,A.aiD,A.h,s,s,new B.o(s,s,s,s,B.a([new B.aa(0,A.G,A.b1.j(0.5),A.J,12)],x.V),E.uO,A.a5),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbYy(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mu,s,s,s,!0,s,s,s,s,s,D.f54,s,s,s,1,s,!0)
if(t.e)r=D.aWv
else{w=t.bRe()
v=B.a([D.eSS,A.aa],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.a9(t.d),s,s,s,s,s,s,D.eyO,s,s,s),A.h,s,s,new B.o(D.b_L,s,s,u,s,s,A.n),s,s,s,s,A.DV,s,s,s))}r=B.a([new B.no(Ad.Vo,new B.lM(w,s),s),new B.no(D.bhw,new B.lM(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ci(t.d))r.push(D.erc)
else r.push(new B.no(D.bh1,B.Nb(new B.nZ(new C.cAf(t),J.a9(t.d),!0,!0,!0,0,B.rg(),s),D.aVN),s))
r=B.uO(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ai,!1,r)}return B.cd(q,D.aZH,r,s,!1,!1,s,s)}}
C.WA.prototype={
S(){return new C.auR(B.a([],x.bx))},
S6(d){return this.d.$1(d)}}
C.aC3.prototype={}
C.auR.prototype={
aWt(d,e,f){var w=$.au(),v=new B.ao(new B.bb(d,A.b_,A.aL),w),u=this.gaTT()
v.aJ(0,u)
w=new B.ao(new B.bb(e,A.b_,A.aL),w)
w.aJ(0,u)
return new C.aC3(v,w,f)},
CR(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cN(A.oZ,new C.czm(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.au()
u=new B.ao(new B.bb(w.a,A.b_,A.aL),v)
t=m.gaTT()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ao(new B.bb(w.b,A.b_,A.aL),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ao(new B.bb(w.c,A.b_,A.aL),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ao(new B.bb(p.a,A.b_,A.aL),v)
o.aJ(0,t)
n=new B.ao(new B.bb(p.b,A.b_,A.aL),v)
n.aJ(0,t)
r.push(new C.aC3(o,n,p.c))}if(r.length===0)r.push(m.aWt("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.gor()
q=r.a
q.S6(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.au()
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
gor(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.m2(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qG(n,w,v,t,u)},
zK(){var w=0,v=B.j(x.H),u=this,t
var $async$zK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.gor()
t=u.a
w=2
return B.b(t.S6(t.c),$async$zK)
case 2:return B.h(null,v)}})
return B.i($async$zK,v)},
bYw(){this.n(new C.czl(this))
this.CR()},
aSU(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.czo(w,d,v))
w.CR()},
bYx(d,e){var w=A.d.cu(this.w,e)
this.n(new C.czw())
this.CR()
$.aT.x1$.push(new C.czx(w))},
OG(d){return this.cay(d)},
cay(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kE(80,1400,A.eu),$async$OG)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$OG)
case 8:p=f
o=q.b.toLowerCase()
n=J.afq(o,".png")?"image/png":"image/jpeg"
r.n(new C.czp(d,n,p))
r.CR()
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
return B.i($async$OG,v)},
wL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h4x(r,t.gor()),$async$wL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.czn(t,s))
t.CR()
case 1:return B.h(u,v)}})
return B.i($async$wL,v)},
caQ(d){var w,v=this,u=null,t=F.fhb(d.c)
if(t==null)return new B.bF(A.a3,u,u,B.hg(D.bsW,D.eV9,new C.czr(v,d),u),u)
w=x.p
return new B.C(A.cI,new B.am(A.V,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fD(t,A.A,u,u,A.ci,A.bO,!0,140,!1,u,1/0),A.ap),B.an(u,B.B(B.a([v.aZw(A.kB,new C.czs(v,d)),A.bp,v.aZw(A.ct,new C.czt(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZw(d,e){var w=null
return B.aD(!1,A.Y,!0,w,B.aH(!1,w,!0,new B.C(A.hj,B.V(d,A.c,w,w,w,18),w),A.cC,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cC,w,w,A.ac)},
Hh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zK(),$async$Hh)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fJ8(s,t.gor(),new C.czv(t)),$async$Hh)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qd,B.hg(D.bxx,D.f_H,n.gatf(),B.fp(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiC,m,m,m,new C.czy(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.TH,m,1,m,m,m,!1,m,!1,E.mu,m,m,m,!0,m,m,m,m,m,D.eVU,m,m,m,1,m,!0),j=Ao.aRh(O.kU,A.c,Aa.SL,A.nu,D.eWA,n.gbYv()),i=B.m(18),h=n.gate(),g=B.a([new B.aa(0,A.G,A.x.j(0.4),A.j5,12)],x.V)
g=B.aJ(m,B.p(m,new B.a3(92,142.1818181818182,B.eX(A.A,F.alE(n.gor()),A.h,A.dp),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eo,B.D(B.u(B.a([D.f6u,A.av,B.d(F.fHG(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eKH,m,m,m),A.T,B.dn(E.ahT,E.aLh,h,B.bk(A.dD,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.TH,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dc),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nH,!0,A.a6,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dc),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dc),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b3(16,16)
u=new B.ay(O.kU.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bwi,m,m,m,v===0?m:new C.czz(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bCp,m,m,m,v===r-1?m:new C.czA(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.czB(n,v)
p=new B.b3(12,12)
o=new B.b3(12,12)
g.push(B.p(m,B.u(B.a([new B.cC(A.aZ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eLb,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aF(m,m,m,m,B.V(A.e4,A.o0,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bv(p,p,p,p),A.dc),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a6,m,A.am,m,m,m,m),A.ar,n.caQ(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bv(o,o,o,o),A.dc),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mu,m,new B.c2(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a6k(h),A.dZ,D.bfF,m,m,m))}return B.nW(!0,B.cd(k,E.aar,B.cL(g,m,D.bg6,m,m,A.ai,!1),m,!1,!1,j,m),new C.czC(n),x.C)}}
C.auT.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cL:E.mu,q=B.m(16),p=B.m(16),o=s?A.aG.j(0.08):A.c.j(0.04)
s=s?A.aG.j(0.16):A.dD.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fm,B.aD(!1,A.Y,!0,t,B.aH(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.D(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aJX,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.ek,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anL.prototype={
S(){return new C.aAT()}}
C.aAT.prototype={
Z(){this.a0()
this.Xw()},
bp(d){this.bA(d)
if(d.c!=this.a.c)this.ZP()},
ZP(){var w=0,v=B.j(x.H),u=this,t
var $async$ZP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$ZP)
case 2:u.d=null
if(u.c!=null)u.n(new C.dYi(u))
w=3
return B.b(u.Xw(),$async$ZP)
case 3:return B.h(null,v)}})
return B.i($async$ZP,v)},
Xw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.a9(n)===0){w=1
break}t=4
if(J.cU(n,"http://")||J.cU(n,"https://")||J.cU(n,"data:")){o=B.Wd(B.cq(n,0,null),new B.Nz(!0))
r.d=o}else{o=B.fd("unsupported video ref")
throw B.R(o)}w=7
return B.b(o.hW(0).cJ(0,A.oV),$async$Xw)
case 7:if(r.c==null){w=1
break}r.d.rs(!1)
r.n(new C.dYg(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a4(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dYh(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xw,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
c_r(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.n(new C.dYj(w))}else{v.p7(0)
w.n(new C.dYk(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bE
n=B.m(8*n.d)
m=B.a([D.iW.j(0.92),D.IH.j(0.95)],x.O)
w=B.H(A.bR.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pb,A.bR,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bT(B.at(B.u(B.a([t,new B.a3(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aC,A.w,m,o,o),A.n),A.b9)}if(p.f)return B.at(B.V(A.ahe,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aXe
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eX(A.A,new B.a3(r,q,new B.z3(s,o),o),A.q,A.bO)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.at(B.p(o,B.V(A.iJ,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.M(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bu(n,new B.am(A.V,o,A.aY,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_q(),o,o,o,o,o,o,!1,A.ae)}}
C.wI.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.ja.prototype={}
C.ab1.prototype={
B(d){return B.p7(new C.dPH(this,B.L(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aar.prototype={
B(d){var w,v,u=null,t=B.L(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iW.j(t?0.35:0.4),A.r,1),p=t?D.J3:A.c,o=x.V,n=B.a([new B.aa(0,A.G,A.x.j(t?0.3:0.08),A.cs,14)],o),m=B.m(10),l=B.H(A.bR.j(0.5),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dH,6)],o)
w=this.c
o=B.D(B.p(u,new B.fI(0.5625,C.hJs(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ae0,u,u,u,u),1)
m=D.iW.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iW,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.Y,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.d5,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.b56,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c2(new B.ay(m,1,A.r,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.acm,u,u,u)],v),A.af,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wL.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nd.prototype={}
C.bfA.prototype={
U8(d){var w=null
return new B.bF(A.a3,w,w,B.G9(A.A,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bw7(){return this.U8(1)},
atL(d){var w=null,v=B.m(8),u=B.H(A.hK,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8M,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.B(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hK,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hK,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b6,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atL("TAARIFA ZA WANANDOA"),A.ar,w.bw7(),A.d5,w.U8(0.9),A.d5,w.U8(0.7),A.P,w.atL("TAMKO LA MAKUBALIANO"),A.fZ,w.U8(1),A.d5,w.U8(0.95),A.P,w.atL("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ab4.prototype={
B(d){return B.p7(new C.e2i(B.L(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acI.prototype={
B(d){var w,v,u,t,s,r=null,q=B.L(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b4K:A.c,l=x.V,k=B.a([new B.aa(0,A.G,A.x.j(q?0.3:0.08),A.cs,14)],l),j=B.m(10),i=B.H(A.au.j(0.5),A.r,1)
l=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dH,6)],l)
w=this.c
v=C.fIa(w.a)
if(v==null)v=A.d.gJ(D.O7)
u=B.aY(v.f)
t=B.aY(v.r)
s=x.p
l=B.D(B.p(r,new B.fI(0.5625,new B.am(A.V,r,A.aY,A.q,B.a([B.bZ(0,B.fD(C.fI9(v.d),A.A,r,r,A.ci,A.bO,!0,r,!1,r,r),0,0,0),new B.C(A.ad2,new C.bfA(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ae0,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.J4,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.Y,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.d5,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b_8,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c2(new B.ay(j,1,A.r,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.acm,r,r,r)],s),A.af,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kD.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5O.prototype={}
C.TS.prototype={
S(){var w=$.au()
return new C.aBb(new B.cn(null,x.A),new B.ao(A.aq,w),new B.ao(A.aq,w),B.m8(0,null,null),A.d.gJ(D.a_c),D.dlH,B.a([],x.L),B.a([],x.gE))}}
C.aBb.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yt(C.fl4(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fk1().bw(new C.e5A(v),w)
$.tt().jT(0,"assets/images/ngmy_logo.png").bw(new C.e5B(v),w).eN(new C.e5C())},
p(){var w=this,v=w.e,u=$.au()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aes(d){var w=null,v=this.c
if(v!=null)v.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Hw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Hw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kE(88,1600,A.eu),$async$Hw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Hw)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h4O(m,p),$async$Hw)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bzd(new B.ph(o,1),m),$async$Hw)
case 10:if(r.c!=null)r.n(new C.e5c(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a4(k)
r.aes("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hw,v)},
UQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h4O(s,q),$async$UQ)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bzd(new B.ph(r,1),s),$async$UQ)
case 4:if(t.c!=null)t.n(new C.e58(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UQ,v)},
abq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e5j(q))
t=4
q.a.toString
p=C.hNR()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abq)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5k(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a4(i)
q.aes(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5l(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abq,v)},
XI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.a9(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e5e(q,i))
t=4
q.a.toString
p=C.hNQ()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XI)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5f(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a4(g)
if(q.c!=null)q.n(new C.e5g(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5h(q))
$.aT.x1$.push(new C.e5i(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XI,v)},
c08(d){this.n(new C.e5d(this,d))},
D6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e5a(q))
t=4
w=7
return B.b($.aT.gm4(),$async$D6)
case 7:w=8
return B.b(B.bK(A.nj,null,x.H),$async$D6)
case 8:k=$.aT.af$.x.h(0,q.d)
p=k==null?null:k.gb4()
if(!(p instanceof B.q0))throw B.R("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gX(0).a),$async$D6)
case 9:o=e
w=10
return B.b(o.hf(A.fK),$async$D6)
case 10:n=e
if(n==null)throw B.R("Could not make the picture.")
w=11
return B.b(A5.ae0(J.f2(A.dz.gaL(n)),"ngmy_news.png","image/png"),$async$D6)
case 11:m=e
q.aes(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
q.aes(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5b(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D6,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kD,a2,a2,a2,new C.e5r(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.by2,a2,a2,a2,new C.e5s(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.og,a2,a2,a2,a4?a1.gaUL():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zo,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.elM,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.aa(0,A.G,A.x.j(0.6),A.eK,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fI(0.7142857142857143,B.eX(A.A,new B.en(new C.aYr(t,s,r,a1.x,a2),a1.d),A.h,A.dp),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.QW,a2,a2,a2)
t=a1.as?a2:a1.gc07()
t=B.a([B.D(B.dn(D.byM,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.rj,a2,a2,a2,A.c,A.fN,a2,a2,new B.b5(B.m(14),N.vI),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fD(r,A.A,a2,a2,A.ci,A.bO,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.aw,r,B.aF(a2,a2,a2,a2,D.bvC,a2,a2,a2,a1.as?a2:a1.gbCI(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.QW,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aOg("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cSF[o]
p.push(B.mH(a2,D.rj,new B.w(n.a,a2,A.ov,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hn,new C.e5t(a1,n),a2,a2,N.vI,a2))}p=B.c8(A.bH,p,A.bw,6,8)
m=a1.Q
m=B.c8(A.bH,B.a([D.f5d,A.bb,B.jP(a2,a2,a2,D.eRL,a2,new C.e5u(a1),m==="en",a2,a2,a2,a2),A.aa,B.jP(a2,a2,a2,D.eRG,a2,new C.e5v(a1),m==="sw",a2,a2,a2,a2)],w),A.qY,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.QW,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a_c,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bU(i,i.gI(0),h.k("bU<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aMP(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.aZ,!1)
i=B.a([],w)
for(j=B.dd(D.a_c,10,a2,j),h=j.$ti,j=new B.bU(j,j.gI(0),h.k("bU<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aMP(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.aZ,!1)
i=a1.as?a2:a1.gc0a()
h=B.m(18)
v=B.a([new B.aa(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cI,s,a2),t,A.ay,new B.C(A.cI,r,a2),q,A.P,p,A.T,m,A.ay,new B.C(A.cI,l,a2),new B.a3(a2,78,k,a2),A.P,new B.a3(a2,78,j,a2),A.aN,B.aJ(a2,B.p(A.A,B.B(B.a([D.byG,A.aa,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.t2,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ae)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.d6n,A.aw,D.blS],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b1.j(0.35):D.rj
p=new B.b3(16,16)
d=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bF(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eIK,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.Sz,new B.o(q,a2,new B.c2(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cI,A.iH,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cGo[o]
t.push(B.mH(a2,D.rj,new B.w(a0,a2,A.He,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hn,new C.e5w(a1,a0),a2,a2,N.vI,a2))}u.push(B.c8(A.bH,t,A.bw,6,8))
u.push(A.T)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aOg("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e5x(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc09()
u.push(B.B(B.a([t,A.aa,B.Gd(A.xp,s,B.nM(a2,A.b1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaUL()
u.push(B.dn(A.og,D.f17,t,B.bk(A.dk,a2,a2,a2,a2,A.H1,a2,a2,new B.b5(B.m(16),A.W),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.acQ,a2,a2,A.ai,!1)],w)
if(a1.as){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.jw.j(0.5),A.r,1)
v.push(B.bZ(0,B.ec(B.at(B.p(a2,B.B(B.a([E.a3p,A.eo,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.ix,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(E.zg,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bir,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cd(a3,A.zo,new B.am(A.V,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aOg(d){var w=null
return B.bm(w,new B.b2(4,B.m(14),A.W),w,A.eH,w,w,w,w,!0,w,w,w,w,w,w,D.rj,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,R.H9,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aMP(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aY(d.f),p=s?A.bz:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aY(d.x),t,t,t,5,t,A.lV,t,t,t,t),A.fZ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aY(v).j(0.5),t,t,t,2,t,D.beJ,t,t,t,t))
w.push(A.d5)
w.push(new B.C(A.k1,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.aY(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aJ(t,B.p(t,B.u(w,A.m,t,A.b6,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.k0,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e59(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.yt.prototype={
b6D(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yt(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cyK(d){var w=null
return this.b6D(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
ayW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c7w(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fl(g,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c7u(),B.U(w).k("J<1,n>")).bZ(0,new C.c7v())
t=B.z(w,w.$ti.k("G.E"))}else t=k
w=h.$1("paper")
w=J.a9(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.a9(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.a9(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b6D(p,r,q,J.a9(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEf(d){return this.f}}
C.rD.prototype={
a3(){return"NewsLayout."+this.b}}
C.Ah.prototype={
a3(){return"NewsFrame."+this.b}}
C.kZ.prototype={}
C.aYr.prototype={
qK(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aY(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1J(d,e,f,g){return this.qK(d,e,null,1.25,f,A.bg,g)},
Q_(d,e,f,g,h){return this.qK(d,e,f,1.25,g,A.bg,h)},
axt(d,e,f,g,h){return this.qK(d,e,null,f,g,A.bg,h)},
axs(d,e,f,g,h){return this.qK(d,e,f,g,0,A.bg,h)},
b1L(d,e,f,g,h){return this.qK(d,e,null,f,0,g,h)},
cpq(d,e,f,g,h,i){return this.qK(d,e,f,g,0,h,i)},
axr(d,e,f,g){return this.qK(d,e,null,f,0,A.bg,g)},
afJ(d,e,f){return this.qK(d,e,null,f,0,A.bg,A.cF)},
b1K(d,e,f,g,h){return this.qK(d,e,f,g,0,h,A.cF)},
cpp(d,e,f,g){return this.qK(d,e,null,f,0,g,A.cF)},
cpo(d,e,f,g){return this.qK(d,e,f,g,0,A.bg,A.cF)},
afK(d,e,f,g,h,i){return this.qK(d,e,f,g,h,A.bg,i)},
aUM(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.lO(new B.es(d,u,u,A.cU,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.cn,new B.k3(1),u,u,h,u,A.cm,u)
v.AP(g)
if(!v.b.a.c.gaAx())return w
w-=2}return j},
abr(d,e,f,g,h,i,j,k){return this.aUM(d,e,f,g,h,i,j,k,A.bg)},
avR(d,e,f){var w=null,v=d==null?B.aY(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a3(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
avQ(d){return this.avR(null,!1,d)},
aeg(d,e){return this.avR(null,d,e)},
chg(d,e){return this.avR(d,!1,e)},
gaWR(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaQN(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
MZ(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abr(w.gaQN(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQN(),v,g,A.a2,v,v,v,w.axs(u,t,f,1.02,A.O),e,v,v)},
aQS(d){return this.MZ(d,A.L,null,2,78,30)},
a92(d,e,f,g,h){return this.MZ(d,e,null,f,g,h)},
bR6(d,e,f,g,h){return this.MZ(d,A.L,e,f,g,h)},
bR5(d,e,f){return this.MZ(d,A.L,null,e,f,30)},
PW(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bE
w=v.d.as
return new B.C(A.kv,B.d(s,u,g,A.a2,u,u,u,v.b1K(w,v.aUM(t,w,A.cF,d,g,h,15,1.2,A.cx),f,1.2,A.cx),e,u,u),u)},
b1r(d){return this.PW(d,A.L,null,3,24)},
axi(d,e,f,g){return this.PW(d,e,null,f,g)},
cot(d,e,f){return this.PW(d,A.L,e,3,f)},
b1s(d,e){return this.PW(d,e,null,3,24)},
cor(d,e){return this.PW(d,A.L,null,3,e)},
cos(d,e,f){return this.PW(d,e,null,3,f)},
anI(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.im,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Q_("Roboto",12,d==null?B.aY(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LW(){return this.anI(null,!0)},
anH(d){return this.anI(null,d)},
byH(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bE
return new B.C(A.il,new B.a3(d,w,B.d(v,w,2,A.a2,w,w,w,this.cpp(this.d.as,13.5,1.2,A.cx),e,w,w),w),w)},
uH(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.P(Date.now(),0,!1),i=m.gaWR(),h=A.o.aj(j.bv(B.bW(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hBG(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1J(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abr(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abr(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aY(h.x)
h=h.ch?B.aY(h.f):A.c
s=x.p
return B.u(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.afK(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.M(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byt(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hx,A.j,0,l,l),A.ar,m.aeg(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.u(B.a([B.B(B.a([B.p(l,l,A.h,B.aY(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eo,B.D(B.d(i,l,1,A.eB,l,l,l,m.axr(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.B(B.a([B.d(C.byt(j),l,l,l,l,l,l,m.Q_(k,13,B.aY(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hx,A.j,0,l,l),A.P,m.chg(B.aY(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaWR()
v=B.d("NGMY",l,l,l,l,l,l,m.axt(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aY(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.x:A.c
h=h.w
n=x.p
return B.u(B.a([B.B(B.a([v,A.aa,B.et(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qK(k,r*0.72,o,1.05,-0.5,A.cx,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.M(t,s,t,s),l,l,l),l),A.b7,new B.dp(1,A.cj,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afK(k,12.5,B.aY(h).j(0.85),1.3,1.2,A.O),A.dL,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aY(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hx,A.j,0,l,l)
t=m.aeg(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axr(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.u(B.a([w,A.av,t,new B.a3(l,s,l,l),v,new B.a3(l,q,l,l),m.aeg(!0,1.4),A.av,B.d(C.byt(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.avQ(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.u(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axt(v,u,1,3,A.O),A.L,l,l),A.P,m.aeg(!0,1.2),A.av,B.B(B.a([B.d(C.byt(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hx,A.j,0,l,l),A.av,m.avQ(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aa8(d){return this.uH(d,!1)},
abs(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aY(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afK("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.M(v,u,v,u),w,w,w)},
c0b(d,e){return this.abs(d,null,e,null)},
aSM(d){var w=null,v=new B.P(Date.now(),0,!1),u=A.o.K(B.dk(v),12)===0?12:A.o.K(B.dk(v),12),t=B.aY(this.d.w).j(0.75),s=this.axs("Roboto",15,t,1,A.cp),r=B.V(E.afm,t,w,w,w,18),q=A.a.al(A.pe[B.bB(v)-1],0,3),p=A.a.aT(A.o.u(B.he(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.aa,B.d(q+" "+B.bQ(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fy,w,w,w,1),B.V(d,t,w,w,w,19),A.aa,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asK(){return this.aSM(A.m2)},
aZK(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afK("Roboto",this.abr(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
avU(d,e,f){return this.aZK(d,e,f,30)},
axl(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bE
return new B.C(A.ud,B.d(v,w,e,A.a2,w,w,w,this.cpo("Roboto",f,B.aY(this.d.w).j(0.88),1.35),w,w,w),w)},
b1w(d){return this.axl(d,3,22)},
coE(d,e){return this.axl(d,e,22)},
rM(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fD(r,A.A,s,s,A.ci,A.bO,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.FG(D.bl5,w,s)
if(v==="sepia")w=new B.FG(D.bl4,w,s)}else{r=this.d
v=r.w
u=B.aY(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.V(A.wQ,B.aY(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bT(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.w,s,0,B.a([A.K,A.TD.j(0.38)],x.O),s,s),A.n),A.b9))
return new B.a3(d,e,new B.am(A.V,s,A.aY,A.q,v,s),s)},
pE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aY(j),A.r,3)
j=B.H(B.aY(j),A.r,1)
return B.p(k,B.p(k,l.rM(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ef,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lX,k,k,d)
case 2:w=B.a([new B.aa(0,A.G,A.x.j(0.35),D.dKB,14)],x.V)
v=l.rM(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.et(A.A,-0.035,B.p(k,B.u(B.a([v,B.D(B.at(B.d(u,k,2,A.a2,k,k,k,l.b1K(j.as,13.5,D.b0t,1.1,A.cx),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b3d,k,k,k,w,k,A.n),k,e,k,k,D.bg1,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aY(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rM(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aY(j.x),A.r,6)
j=B.aY(j.f)
v=t-10
return new B.a3(d,e,B.at(B.p(k,B.hN(l.rM(v,v),A.ap),A.h,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lX,k,k,t),k,k,k),k)
case 5:j=B.a([new B.aa(0,A.G,A.x.j(0.3),D.dKs,10)],x.V)
return B.et(A.A,0.025,new B.a3(d,e,new B.am(A.V,k,A.a9,A.h,B.a([B.bZ(0,B.p(k,l.rM(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qg,k,k,k),0,0,0),B.an(k,B.et(A.A,-0.6,B.p(k,k,A.h,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.et(A.A,-0.6,B.p(k,k,A.h,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aY(j.x)
return new B.a3(d,e,B.b1(B.n2(l.rM(d,e),A.ap,D.fcJ),new C.b8O(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rM(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bJ(u));++n){m=new B.b3(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.c9,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cF(0,q,0,p,k,k,new B.cC(A.aZ,A.qy,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.V,k,A.aY,A.q,w,k),A.h,A.el,k,k,k,e,k,k,D.bko,k,k,d)
case 8:w=d/2
v=B.w7(A.fY,new B.b3(w,w))
j=B.H(B.aY(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.w7(A.iN,new B.b3(w,w)),l.rM(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.aa(0,A.G,A.x.j(0.35),A.fD,22)],x.V)
return B.p(k,l.rM(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bQ,k,k,d)
case 10:return new B.a3(d,e,B.n2(l.rM(d,e),A.ap,D.fic),k)
case 0:j=B.H(B.aY(j.w),A.r,2.4)
return B.p(k,l.rM(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ef,k,k,d)}},
aKs(d,e){return this.d.e===D.OJ?A.bE:this.byH(d,e)},
Uo(d){return this.aKs(d,A.L)},
gawF(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awE(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.H(B.aY(v.w),A.r,1.6)
t=v.x
s=B.aY(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1L(v.Q,19,1.15,A.cx,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Q_("Roboto",12.5,B.aY(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.afJ(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.u(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gc85(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6P(d,e,f,g){return B.cj(new C.c7x(this,e,d,f,g))},
a6O(d){return this.a6P(d,22,!0,18)},
Uz(d,e){return this.a6P(d,22,!0,e)},
aLu(d,e,f){return this.a6P(d,22,e,f)},
bAF(d,e,f){return this.a6P(d,e,!0,f)},
b4o(d,e,f,g){return B.cj(new C.c7y(this,e,d,g,!0,f))},
c6U(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.u(B.a([k.aa8(824),A.ay,k.aQS(824),k.b1r(824),A.P,k.LW(),A.ab,B.at(k.pE(824,360),j,j,j),k.Uo(824),A.ab,B.D(k.a6O(3),1)],x.p),A.af,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.u(B.a([k.aa8(824),A.aN,new B.a3(j,350,B.B(B.a([new B.a3(440,j,B.u(B.a([k.a92(440,A.be,3,62,26),k.axi(440,A.be,2,20),A.b7,k.anI(B.aY(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.H2,B.u(B.a([k.pE(362,310),k.Uo(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.avQ(2),A.ab,B.D(k.a6O(3),1)],w),A.af,j,A.e,A.j,0,A.p)
case 2:w=k.uH(824,!0)
v=B.aY(h.x)
u=h.ch
t=x.p
s=B.a([k.bR6(788,u?B.aY(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cot(788,u?B.aY(h.f):A.c,22))
v=B.p(j,B.u(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zK,j,j,j)
u=B.a([B.at(k.pE(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.OJ){h=A.x.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axs(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.lp,j,j,j),j,j,0,0,j,j))}return B.u(B.a([w,A.ab,v,A.ab,new B.am(A.V,j,A.a9,A.q,u,j),A.P,k.LW(),A.T,B.D(k.Uz(2,21),1)],t),A.af,j,A.e,A.j,0,A.p)
case 3:h=k.uH(824,!0)
w=k.pE(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.u(B.a([h,A.ab,new B.am(A.b5,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.MZ(780,A.be,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a7(A.b0,A.b5,A.w,v,j,j),A.n),j,j,j,j,D.biJ,j,j,j),j,j,0,0,j,j)],u),j),k.b1s(824,A.be),A.P,k.LW(),A.T,B.D(k.a6O(3),1)],u),A.af,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.u(B.a([k.aa8(824),A.ay,k.aQS(824),k.b1r(824),A.P,k.LW(),A.ab,B.D(k.b4o(3,300,B.u(B.a([k.pE(300,300),k.Uo(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.af,j,A.e,A.j,0,A.p)
case 5:w=k.uH(824,!0)
v=x.p
u=B.u(B.a([k.a92(440,A.be,3,62,26),k.axi(440,A.be,2,20),A.b7,k.anH(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.u(B.a([w,A.bt,new B.a3(j,400,B.B(B.a([new B.a3(440,j,u,j),A.aI0,new B.C(A.il,k.pE(364,h.e===D.OJ?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.Uz(2,21),1)],v),A.af,j,A.e,A.j,0,A.p)
case 6:return B.u(B.a([k.aa8(824),A.ab,k.bR5(824,2,70),k.cor(824,21),A.P,k.LW(),A.ab,B.D(k.b4o(3,340,B.at(k.pE(340,340),j,j,j),350),1)],x.p),A.af,j,A.e,A.j,0,A.p)
case 7:w=k.uH(824,!0)
v=B.aY(h.x)
u=Date.now()
u=C.byt(new B.P(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Q_(i,13,h.ch?B.aY(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bk,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1L(h.Q,24,1.15,A.cx,A.O),j,j,j))
v.push(A.b7)
if(k.gawF())v.push(k.awE(230,250))
return B.u(B.a([w,A.ay,B.D(B.B(B.a([new B.a3(230,j,B.u(v,A.af,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aY(h.w),j,j,j,j,j,A.acl,j,j,j,1.2),new B.a3(570,j,B.u(B.a([k.a92(570,A.be,3,62,28),k.cos(570,A.be,20),A.P,k.anH(!1),A.P,B.at(k.pE(570,330),j,j,j),k.Uo(570),A.T,B.D(k.aLu(2,!1,17),1)],t),A.af,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.af,j,A.e,A.j,0,A.p)
case 8:w=k.uH(824,!0)
v=h.ch
u=v?B.aY(h.x):B.aY(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Q_(i,13,v?A.x:B.aY(h.x),3,A.u),j,j,j)
s=x.p
return B.u(B.a([w,A.ab,B.p(j,B.u(B.a([t,A.ar,k.MZ(788,A.be,v?A.x:B.aY(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bh4,j,j,j),k.b1s(824,A.be),A.T,B.at(k.pE(824,310),j,j,j),k.Uo(824),A.P,k.LW(),A.T,B.D(k.a6O(3),1)],s),A.af,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.u(B.a([k.uH(824,!0),A.aN,new B.am(A.V,j,A.a9,A.q,B.a([k.pE(824,430),B.an(18,k.c0b(k.c.b,17),j,j,18,j,j,j)],w),j),A.bt,k.avU(824,3,66),k.b1w(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.asK(),A.ay,B.D(k.Uz(2,18),1)],w),A.af,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.u(B.a([k.uH(824,!0),A.bt,new B.a3(j,500,B.B(B.a([new B.a3(410,j,B.u(B.a([k.abs(k.c.b,B.aY(h).j(0.14),15,B.aY(h)),A.aN,k.aZK(410,4,58,28),k.axl(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),V.aI1,k.pE(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asK(),A.aN,B.D(k.Uz(2,18),1)],w),A.af,j,A.e,A.j,0,A.p)
case 12:w=k.uH(824,!0)
v=k.pE(824,420)
u=B.heU(-0.25)
t=B.aY(h.x)
s=B.a([new B.aa(0,A.G,A.x.j(0.4),A.J,10)],x.V)
r=x.p
return B.u(B.a([w,A.aN,new B.am(A.V,j,A.a9,A.q,B.a([v,B.an(22,B.fm(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cpq(i,30,A.c,1,A.cx,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.biZ,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bt,k.avU(824,3,62),k.b1w(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.aSM(A.kZ),A.ay,B.D(k.Uz(2,18),1)],r),A.af,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uH(824,!0)
u=h.w
t=x.p
w=B.a([k.pE(824,380),B.an(j,k.abs(w.b,B.aY(u).j(0.85),15,B.aY(h.f)),j,j,16,j,16,j)],t)
s=k.avU(824,2,60)
r=k.coE(824,2)
p=k.asK()
o=B.D(k.aLu(2,!1,18),1)
n=B.H(B.aY(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aY(h).j(0.05)
return B.u(B.a([v,A.aN,new B.am(A.V,j,A.a9,A.q,w,j),A.aN,s,r,A.T,p,A.ay,o,A.ab,B.p(j,B.B(B.a([B.bu(B.m(14),k.rM(150,104),A.ap),A.nF,B.D(B.u(B.a([k.abs("RELATED",B.aY(h).j(0.14),12,B.aY(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.axr(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.R,0,A.p),1),B.V(A.ek,B.aY(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.af,j,A.e,A.j,0,A.p)
case 9:return B.u(B.a([k.uH(824,!0),A.bt,k.a92(824,A.be,3,62,30),k.axi(824,A.be,2,22),A.T,k.anH(!1),A.T,B.at(k.pE(824,330),j,j,j),k.aKs(824,A.be),A.aN,B.D(k.bAF(2,40,21),1)],x.p),A.af,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.bT(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aC,A.w,B.a([B.aY(p),B.aY(q.r)],x.O),s,s),A.n),A.b9),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b1(s,s,s,new C.b5n(B.aY(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bjt,B.u(B.a([B.D(t.c6U(),1),A.P,B.p(s,s,A.h,B.aY(w),s,s,s,1.4,s,s,s,s,s,s),A.fZ,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1J(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Q_(r,11,B.aY(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hx,A.j,0,s,s)],o),A.af,s,A.e,A.j,0,A.p),s))
v=B.aY(w)
n.push(B.bZ(0,B.e1(B.b1(s,s,s,new C.bnD(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.aY(p).j(0.75)
v=B.H(B.aY(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hN(B.fD(q,A.A,s,s,A.ci,A.bO,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.m2,B.aY(w),s,s,s,28))
o.push(A.aa)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axt(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e1(B.d7(B.p(s,B.B(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bkw,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a3(900,1260,B.jz(new B.am(A.V,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8P.prototype={
iH(d){return C.fVn(d)},
ji(d){return!1}}
C.b8O.prototype={
a6(d,e){var w,v=C.fVn(e)
$.a0()
w=B.N()
w.r=this.b.gq(0)
w.b=A.ad
w.c=6
return d.aU(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bq6.prototype={
iH(d){var w,v,u,t,s,r,q,p,o=new B.f0()
o.dX(3)
w=$.a0()
v=B.a([],x.v)
u=new B.aS(w.r,A.as,null,null,v)
u.G(new B.bc(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ar(s,o.ae()*14)
v.push(w)
r=u.f
if(r!=null)w.bC(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.G(new B.ar(t,8))
w=d.b
r=w-8
u.G(new B.ar(t,r))
for(;t>0;t-=14){q=new B.ar(t,w-o.ae()*14)
v.push(q)
p=u.f
if(p!=null)q.bC(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.G(new B.ar(0,r))
u.G(new B.bL())
return u},
ji(d){return!1}}
C.b5n.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f0()
k.dX(7)
$.a0()
w=B.N()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ae()*0.07).gq(0)
q=k.ae()
p=k.ae()
o=k.ae()
n=w.L()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ae()*u
p=k.ae()*t
m=50+k.ae()*90
w.sar(new B.bR(A.A,0.5,A.w,l,0,B.a([A.II.j(0.13),A.K],v),l,l).az(0,B.bV(new B.v(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
aq(d){return!1}}
C.bnD.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.iR(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.cn,u,A.eE,A.cm)
s.fq()
w=d.a
J.bN(w.save())
w.translate(t/2,e.b*0.52)
d.o6(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.v(-v/2,-t.gbg(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.TV.prototype={
S(){return new C.aBf()}}
C.aBf.prototype={
Z(){var w=this
w.a0()
B.h13(w.a.c,null).bw(new C.e6L(),x.g7).bw(new C.e6M(w),x.a)
w.a.toString},
gaJh(){var w=D.apL[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gatP(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJh()
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
return new B.ae(q,w,q+s,w+t)},
XK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e6y(r))
t=4
q=r.gatP()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.a0()
n=new B.rs()
m=B.FD(n,null)
i=B.N()
i.Q=A.fI
m.Ax(g,q,new B.ae(0,0,0+p,0+o),i)
w=7
return B.b(n.pO().ym(J.fL5(p),J.fL5(o)),$async$XK)
case 7:l=e
w=8
return B.b(l.hf(A.fK),$async$XK)
case 8:k=e
j=r.c
if(j!=null){j=B.a8(j,!1)
i=k
i.toString
j.M(J.f2(J.w1(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e6z(r))
r.c.F(x.q).f.P(D.etN)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XK,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kD,s,s,s,new C.e6F(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bG(!1,D.f3o,s,s,!0,s,s,t.y||r==null?s:t.gc0c(),s,s)],p),s,s,!0,!0,A.zo,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.f74,s,s,s,1,s,!0)
if(r==null)p=A.lK
else{w=B.D(new B.C(A.c2,B.at(new B.fI(t.gaJh(),B.cj(new C.e6G(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.k0,B.jP(s,s,s,new B.w(D.apL[u].a,s,E.aJK,s,s,s,s,s,s,s,s,s),s,new C.e6H(t,u),t.e===u,s,s,s,s),s))
p=B.u(B.a([w,B.p(s,B.br(!0,B.u(B.a([new B.a3(s,40,B.cL(v,s,s,s,s,A.aZ,!1),s),B.B(B.a([D.bzo,B.D(B.ma(s,s,s,6,1,new C.e6I(t),t.f),1),D.bz_],p),A.m,s,A.e,A.j,0,s,s),D.f11,A.ar,B.bG(!1,D.f0N,s,s,!0,s,s,new C.e6J(t,d),s,s)],p),A.m,s,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,D.TR,s,s,s,s,s,s,D.bgp,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cd(q,A.zo,p,s,!1,!1,s,s)}}
C.b8l.prototype={
a6(d,e){var w
$.a0()
w=B.N()
w.Q=A.ci
return d.Ax(this.b,this.c,new B.ae(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.YT.prototype={
S(){var w=$.au(),v=x.A
return new C.aCy(new B.ao(A.aq,w),new B.ao(new B.bb("NGMY",A.b_,A.aL),w),new B.cn(null,v),new B.cn(null,v),A.d.gJ(D.a_I),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o5.prototype={}
C.aCy.prototype={
gaQZ(){var w,v,u=this
if(u.p1)w=new B.wn(1,u.p2,0.9,u.p3).iF().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eDs(w))},
p(){var w=this.d,v=$.au()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tt().jT(0,"assets/images/ngmy_logo.png"),$async$Wu)
case 7:q=e
p=J.f2(J.w1(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bzd(new B.ph(p,1),o),$async$Wu)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eCk(r,p))
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
return B.i($async$Wu,v)},
O4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kE(92,1800,A.eu),$async$O4)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$O4)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bzd(new B.ph(p,1),n),$async$O4)
case 9:if(r.c==null){w=1
break}r.n(new C.eCI(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a4(l)
n=r.c
if(n!=null)n.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O4,v)},
aZ8(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aK=w.aA=w.au=w.Y=w.b2=w.bd=w.y2=0
w.b_=null
w.aX=0.25
w.b7=null
w.bF=0.5
w.aO=1
w.c4=w.bO=w.be=0
w.cT=w.cQ=!1},
aSw(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvZ(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cV_)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvZ(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvZ(C.fGg(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvZ(C.fGg(1-a0*0.5,n,n,n),w)}return a1?C.bvZ(C.fGg(-1,255,255,255),w):w},
axq(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).kv(0,this.d.a.a),t=B.z(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yg(u,v,w)
this.dx.pv(new C.eCS(t),!0)
return t},
b0C(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axq()
w=C.hLA(e.d.a.a,e.db)
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
return C.hI5(d,k,v,a0,j,e.gaQZ(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cmx(){return this.b0C(null)},
C1(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gm4(),$async$C1)
case 3:w=4
return B.b(B.bK(A.eR,null,x.H),$async$C1)
case 4:w=5
return B.b($.aT.gm4(),$async$C1)
case 5:s=$.aT.af$.x.h(0,t.r)
r=s==null?null:s.gb4()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gX(0).a),$async$C1)
case 7:w=6
return B.b(e.hf(A.fK),$async$C1)
case 6:q=e
u=q==null?null:J.f2(A.dz.gaL(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C1,v)},
a7E(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7E=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eC3(q))
t=4
w=7
return B.b(q.C1(),$async$a7E)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cN.gcs().aF(p)
n=C.Au(null,null,null,null,D.nz,6,!1,null,null,null,null,null,C.cy(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0C(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a8(l,!1).M(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a4(j)
l=q.c
if(l!=null)l.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eC4(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7E,v)},
zs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eC1(q))
t=4
w=7
return B.b($.aT.gm4(),$async$zs)
case 7:w=8
return B.b(B.bK(A.o3,null,x.H),$async$zs)
case 8:w=9
return B.b($.aT.gm4(),$async$zs)
case 9:k=$.aT.af$.x.h(0,q.f)
p=k==null?null:k.gb4()
if(!(p instanceof B.q0))throw B.R("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gX(0).a),$async$zs)
case 10:o=e
w=11
return B.b(o.hf(A.fK),$async$zs)
case 11:n=e
if(n==null)throw B.R("Could not make the picture.")
w=12
return B.b(A5.ae0(J.f2(A.dz.gaL(n)),"ngmy_quote.png","image/png"),$async$zs)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.F(x.q).f
k.P(B.b0(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
k=q.c
if(k!=null)k.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eC2(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zs,v)},
ca_(){var w=this.p4
w.toString
return B.cj(new C.eCB(this,w))},
aUT(d,e){var w=null
return B.bm(w,w,w,w,w,D.eDA,w,w,!0,new B.b2(4,B.m(16),N.vI),w,w,w,w,w,D.rj,!0,w,w,w,w,new B.b2(4,B.m(16),D.aQ8),w,w,w,w,w,w,w,w,A0.BU,e,w,w,w,w,w,w,w,D.eIB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wS(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b1,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aKw,w,w,w))
return new B.C(D.beo,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aUS(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.Y,!0,w,d,A.h,w,0,w,w,w,w,w,A.jj),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uM(d){return this.aUS(d,A.bB)},
nx(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t2:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j_,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j_,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.di(r,B.B(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hM,r,r,r,A.DF,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
adg(d,e,f){return this.nx(d,null,e,f)},
atT(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b1.j(0.28):A.c.j(0.05),t=g?A.ev:A.bG,s=x.p
v=B.a([B.di(w,d,w,w,A.b8,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hM,w,e,w,new B.M(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a3(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aUW(d,e,f,g,h,i){return this.atT(d,e,f,g,h,5,i)},
jJ(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eAI,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dNx,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eCO(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJC,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VO,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asw(w).cA6(A.b1,A.bG,A.b1.j(0.2),A.c,D.el8,4)
return new B.C(A.wo,B.u(B.a([s,B.a7Q(B.ma(u,u,u,g,f,new C.eCP(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aff(d,e,f,g,h,i){return this.jJ(d,e,f,g,h,null,i)},
afF(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.aY(u)
r=d==u
q=r?A.c:A.bf
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bsy:o
n.push(B.aJ(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eCR(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.c8(A.bH,n,A.bw,10,10)},
bEK(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_I
else{v=x.a8
w=B.z(new B.a5(D.a_I,new C.eBU(o),v),v.k("G.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aUT("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eBV(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4o,!0,A.a6,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aUT("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eBW(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a6,n,A.am,n,n,n,n)
t=o.wS("DESIGNS",A.rS)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cyD[q]
r.push(new B.C(A.k0,o.adg(p,o.x===p,new C.eBX(o,p)),n))}return B.u(B.a([v,A.T,u,t,B.ch(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aZ),A.ab,new B.a3(n,118,B.hE(n,new C.eBY(o,w),w.length,n,n,A.aZ,new C.eBZ(),!1),n),A.P,o.aUS(B.u(B.a([B.iu(A.b1,n,n,A.ah,!0,new C.eC_(o),n,D.eTT,n,D.eQx,o.k3),B.iu(A.b1,n,n,A.ah,!0,new C.eC0(o),n,n,n,D.eNX,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acP)],s),A.F,n,A.e,A.j,0,A.p)},
cuM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axq()
if(a7.length===0)return a5.uM(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hl,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ad('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.al(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gai(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("ck.E"))
A.d.fz(m)
l=m.length!==0&&A.d.e9(m,new C.eDh(a5,m))?a5.db[A.d.gJ(m)]:a6
k=new C.eDo(a5)
j=new C.eDq()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hl,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b3(11,11)
f=u.t(0,h)?A.b1.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ev:A.bG
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Ke,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eDi(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uM(B.c8(A.bH,o,A.qY,6,6))
i=B.a([a5.nx("All words",K.agS,!1,new C.eDj(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adg("Sentence "+a3,!1,new C.eDk(a5,a7,v,a2)))
a2=a3}}i.push(a5.adg("Clear picks",!1,new C.eDl(a5)))
i=B.c8(A.bH,i,A.bw,8,8)
g=a5.wS("SIZE OF THE PICKED WORDS",D.agj)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cZY[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eDm(e,k)
f.push(a5.adg(a0.b,l===a4,e))}return B.u(B.a([q,A.T,o,A.T,i,g,B.c8(A.bH,f,A.bw,8,8),A.T,a5.nx("Make every word normal",A.mG,!1,new C.eDn(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cq7(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.blw,B.d(A.d.kY(D.arm,new C.eD0(q)).b,p,p,p,p,p,p,D.eCa,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cj(new C.eD1(q)),l=q.wS("HIGHLIGHT BEHIND THE WORDS",A.XC),k=q.p1?-1:q.k4
k=q.afF(k,new C.eD2(q),D.cId)
w=q.p1
v=w?A.c:A.bf
n=B.a([n,A.T,m,l,B.c8(A.bH,B.a([k,B.aJ(p,B.p(p,D.bvw,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.ewo,A.a5),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eD5(q),p,p,p,p,p,p,!1,A.ae)],o),A.qY,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hl,p,p,p)],o)
if(q.gaQZ()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aff("Colour",l,0,360,new C.eD6(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aff("Shade",k,0.15,0.9,new C.eD7(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jJ("Strength",l,0.15,1,new C.eD8(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uM(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wS("LOOK",A.xd))
m=B.a([q.nx("Bold",I.agg,q.fy,new C.eD9(q)),q.nx("Italic",I.agh,q.go,new C.eDa(q))],o)
for(u=0;u<3;++u){l={}
k=D.czJ[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t2:p
w=w?p:A.c.j(0.07)
s=new B.b3(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDb(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.c8(A.bH,m,A.qY,8,8))
n.push(q.wS("COLOUR",A.ns))
n.push(q.afF(q.fx,new C.eDc(q),D.cSb))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hl,p,p,p))
n.push(q.wS("SIZE AND PLACE",A.EA))
m=q.fr
m=q.jJ("Text size",m,0.5,1.6,new C.eD3(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uM(B.u(B.a([m,q.jJ("Up / down",l,0.12,0.5,new C.eD4(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
ca0(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b1.j(0.6),A.r,1.6)
u=B.a([A.b1.j(0.18),A.bz.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bAK,A.h,p,p,D.aT_,p,62,p,p,p,p,p,62),A.ay,D.eRE,A.ar,D.eVS],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rj,p,v,w,p,new B.a7(A.a3,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bhB,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaUV(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.B(B.a([B.bu(B.m(12),new B.a3(46,62,B.fD(o,A.A,120,p,A.ci,A.bO,!1,p,!1,p,p),p),A.ap),A.bb,B.D(B.u(B.a([D.eRe,A.P,B.c8(A.bH,B.a([q.nx("Change",A.kB,!1,q.gaUV()),q.nx("Remove",A.e4,!1,new C.eCF(q))],w),A.bw,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cP0[t]
u.push(q.nx(s.b,s.a,q.at===t,new C.eCG(q,t)))}u=B.c8(A.bH,u,A.bw,8,8)
r=q.at
A:{if(0===r){s=q.bUQ(o)
break A}if(1===r){s=q.bTV()
break A}if(2===r){s=q.bAE()
break A}if(3===r){s=q.bGL()
break A}s=q.bCJ()
break A}return B.u(B.a([v,A.ab,u,A.ay,s,A.T,new B.bF(A.a3,p,p,q.nx("Reset the whole picture",A.mG,!1,new C.eCH(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bUQ(d){var w=this,v=x.p
return B.u(B.a([B.c8(A.bH,B.a([w.nx("Auto enhance",E.Xe,!1,new C.eCx(w)),w.nx("Make words easy to read",A.oe,!1,new C.eCy(w))],v),A.bw,8,8),A.ay,B.cj(new C.eCz(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bTV(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jJ("Exposure",n,-1.5,1.5,new C.eCb(o),0,A.k.aa(n,1))
w=o.RG
w=o.jJ("Brightness",w,-0.5,0.5,new C.eCc(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jJ("Contrast",v,0.4,2,new C.eCd(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jJ("Fade",u,0,1,new C.eCe(o),0,""+A.k.U(u*100))
t=o.aA
t=o.jJ("Spotlight",t,0,1,new C.eCf(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jJ("Darken",s,0,0.85,new C.eCg(o),0,""+A.k.U(s*100))
r=o.b2
r=o.jJ("Vignette",r,0,0.9,new C.eCh(o),0,""+A.k.U(r*100))
q=o.aC
q=o.jJ("Shade behind words",q,0,0.85,new C.eCi(o),0,""+A.k.U(q*100))
p=o.aK
return o.uM(B.u(B.a([n,w,v,u,t,s,r,q,o.jJ("Shade top & bottom",p,0,0.85,new C.eCj(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bAE(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jJ("Colour strength",q,0,2.2,new C.eBx(s),1,""+A.k.U(q*100))
w=s.to
w=s.jJ("Warmth",w,-1,1,new C.eBy(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jJ("Tint",v,-1,1,new C.eBz(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uM(B.u(B.a([q,w,v,s.jJ("Shift colours",u,-180,180,new C.eBA(s),0,""+A.k.U(u)+"\xb0"),new B.bF(A.a3,r,r,s.nx("Negative",D.bqB,s.y1,new C.eBB(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wS("COLOUR WASH",A.La)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.aqa)
t=B.a([u,v,s.afF(w,new C.eBC(s),q),A.P],t)
if(s.b_!=null){q=s.aX
t.push(s.uM(s.aff("Wash strength",q,0,0.9,new C.eBD(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bGL(){var w,v,u,t,s,r=this,q=r.y2
q=r.jJ("Blur",q,0,24,new C.eC5(r),0,A.o.u(A.k.U(q)))
w=r.bd
w=r.jJ("Soft focus",w,0,1,new C.eC6(r),0,""+A.k.U(w*100))
v=r.au
u=x.p
v=r.uM(B.u(B.a([q,w,r.jJ("Film grain",v,0,1,new C.eC7(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wS("LIGHT LEAK",H.age)
q=r.b7
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.aqa,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.afF(q,new C.eC8(r),t),A.P],u)
if(r.b7!=null){q=r.bF
u.push(r.uM(r.aff("Leak strength",q,0,1,new C.eC9(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bCJ(){var w,v,u,t,s=this,r=s.aO
r=s.jJ("Zoom",r,1,3,new C.eBH(s),1,""+A.k.U(r*100)+"%")
w=s.be
w=s.jJ("Left / right",w,-1,1,new C.eBI(s),0,""+A.k.U(w*100))
v=s.bO
v=s.jJ("Up / down",v,-1,1,new C.eBJ(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.u(B.a([s.uM(B.u(B.a([r,w,v,s.jJ("Turn",u,-180,180,new C.eBK(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.c8(A.bH,B.a([s.nx("Turn 90\xb0",D.bs8,!1,new C.eBL(s)),s.nx("Flip sideways",A.Ep,s.cQ,new C.eBM(s)),s.nx("Flip upside down",A.Ep,s.cT,new C.eBN(s))],t),A.bw,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXs(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.elk,A.T,D.eSY,A.ay,B.aJ(w,B.p(A.A,D.elv,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t2,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCA(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,A.c2,w,w,w)},
bUI(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eCs(p),m=x.p,l=B.B(B.a([D.blC,p.nx("Reset",A.mG,!1,new C.eCo(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hl,o,o,o),j=p.wS("SHAPE",A.ahn),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.AB[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aUW(n.$2(t,p.cy),62,u.b,s===t,new C.eCp(v,p),62))}}i=B.c8(A.bH,i,A.bw,8,8)
v=p.wS("RING",A.rN)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Aw[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aUW(n.$2(p.cx,t),62,r.b,q===t,new C.eCq(s,p),62))}u=B.c8(A.bH,u,A.bw,8,8)
s=p.CW
return B.u(B.a([l,A.av,k,j,i,v,u,A.ab,p.uM(p.jJ("Size",s,0.12,0.4,new C.eCr(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aXM(d){return new B.a3(null,d,new B.fI(0.5625,B.cj(new C.eCL(this)),null),null)},
cpr(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t2:q
t=new B.b3(14,14)
s=D.cQW[w]
r=v?A.c:A.aA
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bE(1,A.bo,B.aJ(A.c3,B.di(q,B.u(B.a([r,A.d5,new B.pM(A.e8,A.A,A.h,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bdj,q,q,q,A.hv,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eCU(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bfo,A.lX,q,q,q)},
aM_(){var w,v,u=this,t=null,s=u.cpr(),r=u.as
A:{if(0===r){w=u.bEK()
break A}if(1===r){w=u.cuM()
break A}if(2===r){w=u.cq7()
break A}if(3===r){w=u.ca0()
break A}if(4===r){w=u.bUI()
break A}w=u.bXs()
break A}v=x.p
return B.bu(A.pN,B.ec(B.u(B.a([s,B.D(B.cL(B.a([w],v),t,D.bgq,t,t,A.ai,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.TR,!0),A.ap)},
aIf(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc0D(),p=B.m(16)
q=B.D(B.aJ(r,B.p(r,D.elE,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.bf,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbGm()
w=B.m(16)
v=B.a([new B.aa(0,A.G,A.bz.j(0.35),A.cs,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eq7)
else t.push(D.buD)
t.push(A.aa)
t.push(D.bn7)
return B.p(r,B.B(B.a([q,A.aw,B.D(B.aJ(r,B.p(r,B.B(t,A.m,r,A.b6,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t2,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aSa,r,r,r,r,G.acD,r,r,r)},
aUU(){var w=null
return new B.C(U.VK,B.B(B.a([B.aF(w,w,w,w,A.mJ,w,w,w,new C.eCa(this),w,w,w,w,w,w),D.f65,A.b7,D.bCX],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cd(w,A.zo,B.br(!0,B.cj(new C.eDr(this)),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)}}
C.bbS.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f0()
m.dX(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.a0()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gq(0)
r=B.N()
r.r=A.x.j(0.2*s).gq(0)
for(s=d.a,q=0;q<u;++q){p=m.ae()*w
o=m.ae()*v
n=((q&1)===0?t:r).L()
s.drawRect(B.cr(new B.ae(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.qQ.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lK.prototype={}
C.yv.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nh.prototype={}
C.vb.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5W.prototype={}
C.aoy.prototype={}
C.Zo.prototype={
S(){return new C.aEs(new B.ao(A.aq,$.au()),B.k8(!0,null,!0,!0,null,null,!1),D.deq,B.a([],x.s),B.eN([D.Gg],x.Q))}}
C.aEs.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.f.p()
this.a2()},
Z1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Z1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().B0(90,700,700,A.eu),$async$Z1)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Z1)
case 8:p=e
if(r.c!=null)r.n(new C.eJm(r,p,q))
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
return B.i($async$Z1,v)},
Z4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Z4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hQ().aDD(78,n,1100,1100),$async$Z4)
case 7:q=e
if(J.ci(q)){w=1
break}p=B.bj(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.a9(p)>=20){w=9
break}w=10
return B.b(o.f7(),$async$Z4)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cg(p,"data:"+k+";base64,"+A.cN.gcs().aF(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eJn(r,p))
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
return B.i($async$Z4,v)},
aZJ(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fD(A.cw.aF(A.d.gai(d.split(","))),A.A,u,u,A.ci,A.bO,!0,u,!1,u,u)
return w}catch(v){}return D.bc8},
bUO(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ckK(C.fis(w,this.aZJ(d),f),g)},
a9U(d,e,f,g,h){var w=null,v=new C.eJk(f,e),u=new C.eJl(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b1.j(0.6),A.r,1)
if(p)p=new B.a3(34,30,new B.am(A.V,w,A.a9,A.h,B.a([B.at(B.V(f?A.Aj:A.KZ,A.c1,w,w,w,26),w,w,w),D.dS7],x.p),w),w)
else p=this.bUO(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.Y,!0,s,B.aH(!1,r,!0,B.p(w,B.B(B.a([B.D(B.at(p,w,w,w),1),D.buj],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.lY,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJj(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aSC(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bu(B.m(8),B.fD(A.cw.aF(A.d.gai(h.split(","))),A.A,p,p,A.ci,A.bO,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.br.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eO,p,p,p,20):q
n=B.a([n,A.aa,B.D(B.d(e,p,1,A.a2,p,p,p,A.a4t,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yy,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.Y,!0,u,B.aH(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a68(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a68=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.flS(),$async$a68)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eJ2(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a4(n)
if(r.c!=null)r.n(new C.eJ3(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a68,v)},
abA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abA=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eJ5(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eJ6(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eJ7(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cg(p,h)}w=7
return B.b(C.fh9(q,r.cx,j,new C.aYP(r.z,r.Q,r.as,r.at),new C.eJ8(r),i,m,p,k),$async$abA)
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
n=B.a4(e)
if(r.c!=null)r.n(new C.eJ9(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.ep,g).w
g=B.aG(d,A.bP,g).w
w=B.at(B.p(h,h,A.h,h,h,new B.o(A.bf,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aJ(h,B.p(h,D.bxs,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.aa(2,A.G,A.br.j(0.5),A.J,24)],v),D.bG2,A.a5),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJA(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yy,h,h,h,i.ax?h:new C.eJB(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbvP()
v=B.a([new B.aa(0,A.G,A.b1.j(0.45),A.J,10)],v)
s.push(B.hI(B.aD(!1,A.Y,!0,h,B.aH(!1,h,!0,B.p(h,B.V(i.e==null?A.uv:A.hl,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uO,A.a5),h,40,h,h,h,h,h,40),A.cC,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cC,h,h,A.ac),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bm(h,h,h,h,h,h,h,h,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b2(4,B.m(16),D.aPG),h,h,h,h,h,h,h,h,R.H9,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.k0,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ag,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJZ,!0,A.a6,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eJC(i)
s=i.aSC(A.l_,q,r,i.gcar(),s)
r=i.z
r=B.D(i.a9U(new C.eJE(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.u(B.a([s,A.ar,B.B(B.a([r,A.bp,B.D(i.a9U(new C.eJF(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gJ(s)
p=i.y.length===0?h:new C.eJG(i)
s=i.aSC(A.ut,r,p,i.gcaz(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gJ(o)
p=B.D(i.a9U(new C.eJH(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gJ(n)
o=B.a([w,A.ay,D.eX_,A.av,D.eZG,A.bt,u,A.P,D.eYc,A.ay,v,A.bt,B.B(B.a([q,A.aw,B.D(B.u(B.a([s,A.ar,B.B(B.a([p,A.bp,B.D(i.a9U(new C.eJI(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.f0i],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b5M,A.r,1)
w=C.aey(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bF(A.a3,h,h,B.p(h,B.B(B.a([D.byx,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eHn,h,h,h),B.aH(!1,h,!0,D.dNL,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eJJ(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_Q,h,u,v,h,h,A.n),h,h,h,h,D.bf3,h,h,h),h)],t))}o.push(A.bt)
o.push(D.eOC)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cKa[m]
v=i.ch===l?A.b1:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bE(1,A.bo,new B.C(A.k1,B.aJ(h,B.di(A.A,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a5),A.eG,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJK(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bt)
o.push(D.f4r)
o.push(A.P)
o.push(B.cj(new C.eJL(i)))
o.push(A.bt)
o.push(D.eVj)
o.push(A.P)
w=B.a([i.b1p("auto","Let AI choose",A.dO,A.NB)],t)
for(v=x.O,m=0;m<11;++m){j=D.uT[m]
u=j.d
w.push(i.b1p(j.a,j.b,j.c,B.a([B.aY(A.d.gJ(u).a),B.aY(A.d.gJ(u).b)],v)))}o.push(B.c8(A.bH,w,A.bw,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.br.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.iu(h,A.br,h,h,h,new C.eJD(i),D.btL,D.f3J,h,D.eQJ,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aJf,h,h,h)],t))
o.push(A.bt)
w=i.ax?h:i.gc0H()
v=B.ff(h,h,A.b1,A.b1.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.epY:A.ES
o.push(new B.a3(h,54,B.le(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ou,h,h,h),w,v),h))
return new B.C(new B.M(0,0,0,f.f.d),B.p(h,B.br(!0,B.ch(B.u(o,A.af,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.uk,h,h,A.ai),!0,!1,A.ah,!0,!1),A.h,h,new B.aX(0,680,0,g.a.b*0.92),D.a71,h,h,h,h,h,h,h,h),h)},
bHP(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eJa(this,p,d)
if(d===D.Bd)return new C.aB4(p,o,q)
w=B.m(16)
v=p?E.uO:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.V(p?A.ej:C.hlS(d),A.c,q,q,q,20)
r=C.hlT(d)
return B.aJ(q,B.di(q,B.u(B.a([s,A.av,B.eX(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b6,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hM,q,64,q,A.hj,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b1p(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.al:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.w,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aJ(v,B.di(v,B.B(B.a([w,L.H3,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,L.adT,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eJp(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Zn.prototype={
S(){return new C.aEr(new B.ao(A.aq,$.au()))}}
C.aEr.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
abB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abB=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.a9(a0)<3){r.n(new C.eIW(r))
w=1
break}B.eG()
r.n(new C.eIX(r))
t=4
q=C.hMt(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hMd(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eIY(r,q))
w=1
break}k=r.c
if(k!=null)B.a8(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fFX()
f=$.Bt.h(0,k.a)
o=f==null||J.ci(f)?null:J.fh(f)
if(o==null){r.n(new C.eIZ(r))
w=1
break}n=C.hMb(o,r.a.c)
C.hM7(r.a.c.a)
$.fFe=!0
k=r.c
if(k!=null)B.a8(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fIz(j)
h=C.fIA(r.a.c)
e=C.fIB(r.a.c)
w=7
return B.b(C.by9(k,r.a.c.a,j,h,new C.eJ_(r),i,e,a0),$async$abB)
case 7:m=a3
k=r.c
if(k!=null)B.a8(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a4(a1)
if(r.c!=null)r.n(new C.eJ0(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abB,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.ep,i).w
i=B.aG(d,A.bP,i).w
w=B.at(B.p(j,j,A.h,j,j,new B.o(A.bf,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ahE,A.h,j,j,D.aRR,j,34,j,j,j,j,j,34),A.aw,D.bm9],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,R.aJG,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bm(j,j,j,j,j,j,j,j,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b2(4,B.m(16),Al.a6x),j,j,j,j,j,j,j,j,R.H9,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJZ,!0,A.a6,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cGN[q]
o=A.c.j(0.06)
n=k.e?j:new C.eJ1(k,p)
r.push(B.mH(j,o,new B.w(p,j,Ar.QJ,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vI,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.c8(A.bH,r,A.bw,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ab,B.d(u,j,j,j,j,j,j,D.aJf,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gc0I()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.br.j(0.5),A.ft.j(0.5)],x.O):D.cfW
o=B.a([new B.aa(0,A.G,A.br.j(0.35),A.cs,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dNH:D.by6
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.Y,!0,j,B.aH(!1,s,!0,B.eq(B.B(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.j7,j,j,j)],v),A.m,j,A.b6,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.C(new B.M(0,0,0,h.f.d),B.p(j,B.br(!0,B.ch(B.u(w,A.af,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.uk,j,j,A.ai),!0,!1,A.ah,!0,!1),A.h,j,new B.aX(0,680,0,i.a.b*0.85),D.a71,j,j,j,j,j,j,j,j),j)}}
C.aYP.prototype={}
C.aB4.prototype={
S(){return new C.bgs(null,null)}}
C.bgs.prototype={
gatU(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.oW,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gatU().p()
this.bpX()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gatU(),new C.e1I(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.be4.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cM6[s]
p=q.a*v
q=q.b*u
$.a0()
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=D.wd.j(0.25+r*0.6).gq(0)
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
aq(d){return d.b!==this.b}}
C.ap7.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XL.prototype={
S(){return new C.ayx()}}
C.ayx.prototype={
gafC(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeL(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzd(){var w=this.e
return w===$?this.e=C.fIz(this.a.c).t(0,D.Bd):w},
a5W(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5W=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.dba(s))
u=3
r=A.d.kY(D.uT,new C.dbb(s))
q=B.d6(C.fIz(s.a.c),x.Q)
l=q
J.hA(l,D.Bd)
p=l
if(s.gzd())J.cg(p,D.Bd)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzd()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fIA(i.c)
g=C.fIB(s.a.c)
w=6
return B.b(C.by9(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5W)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeL(q,s.gafC())
f=q==null?null:q.b
n=f==null?s.gafC():f
if(!J.y(n,r.a)&&!s.gzd())throw B.R("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a8(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a4(d)
if(s.c!=null)s.n(new C.dbc(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5W,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.D(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dbf(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.V(A.ct,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uT[w]
u=o.gafC()
t=o.f?n:new C.dbg(o,v)
f.push(new C.boI(v,u===v.a,t,n))}f=B.lZ(1.25,f,3,10,10,n,A.dK,!0)
u=B.m(18)
t=o.gzd()?D.bIE:n
if(o.gzd())s=n
else s=m?A.bi:A.bM
r=B.V(A.dO,o.gzd()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.al:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzd()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.aw,q,B.fD7(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dbh(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acG,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.eHF,n,n,n)],g))
f=B.ch(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.K3,n,n,A.ai)
u=o.f?n:o.gbuP()
t=B.bk(A.K,n,n,n,n,n,A.ah,n,new B.b5(B.m(16),A.W),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.C(D.bi4,e,n),new B.dp(1,A.cj,f,n),new B.C(A.DM,new B.a3(1/0,50,B.bI(B.eq(B.at(o.f?A.qQ:D.eXr,n,n,n),n,new B.o(n,n,n,s,n,D.bHi,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rD,n,n,n,n),!0,!1,A.ah,!0,!0)}}
C.boI.prototype={
B(d){var w=null,v=this.c,u=A.d.gJ(v.d),t=B.m(16),s=u.a,r=B.a([B.aY(s),B.aY(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.aa(0,A.G,B.aY(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bF(A.kO,w,w,B.V(v.c,A.al,w,w,w,18),w),new B.bF(A.lb,w,w,B.d(v.b,w,w,w,w,w,w,D.eHD,w,w,w),w)],x.p)
if(q)v.push(D.aNO)
return B.aJ(w,B.di(w,new B.am(A.V,w,A.a9,A.q,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aC,A.w,r,w,w),A.n),A.eG,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e1F.prototype={
aBg(d,e,f){return e+"@"+A.a.aT(A.o.fF(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vG(d,e){return this.aBg(0,e,null)}}
C.aIY.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aYL.prototype={
B(d){var w,v,u=null,t=C.fHp(this.c)
if(t==null)w=D.baV
else{w=B.aG(d,u,x.w).w.czz(D.beC,D.epd)
v=this.d
w=B.tR(B.e1(B.alx(!1,t,!1,v,!1,390),!v,u),w)}return B.eX(A.A,new B.a3(416,870,new C.bi4(w,u),u),A.h,A.dp)}}
C.bi4.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cWA[w]
u=new B.b3(3,3)
s.push(new B.cF(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajx,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cXE[w]
u=new B.b3(3,3)
s.push(new B.cF(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajx,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.bT(t,new B.o(t,t,t,B.m(64),D.cxu,D.bFL,A.n),A.b9),0,0,0))
s.push(B.bZ(3,B.bT(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.b9),3,3,3))
s.push(B.bZ(13,B.bu(B.m(51),B.ec(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.at(B.p(D.aNZ,B.p(t,t,A.h,t,t,D.aS8,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bu(B.m(51),D.bce,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e1(B.at(B.p(t,t,A.h,t,t,new B.o(A.al,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.V,t,A.a9,A.h,s,t)}}
C.kW.prototype={
oN(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cy(),f=C.cy(),e=m.r
f=C.ei(A.L,!1,e.l(),A.az,"",k,42,A.bg,A.u,"",0.22,f,l,"","",0,!1,"",0,D.ba,j,2,"Your Presentation Title",0,0,"",D.mb,D.cK,0.84,0.08,0.26)
w=C.cy()
v=m.w
w=C.ei(A.L,!1,v.l(),A.az,"",k,20,A.bg,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.ba,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.da,D.cK,0.76,0.12,0.56)
u=C.cy()
t=m.d
s=x.u
t=C.qR(i,l,0,0,B.a([f,w,C.ei(A.be,!1,4279310375,A.az,"",t.j(0.8).l(),24,A.bg,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fe,t.l(),3,"",0,0,"",D.cd,D.eS,0.3,0.35,0.72)],s),C.cy(),D.ma,"","","Welcome",D.da)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,34,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.ba,j,2,"Agenda",0,0,"",D.cd,D.cK,0.84,0.08,0.08)
w=C.cy()
w=C.qR(i,l,0,0,B.a([u,C.ei(A.be,!0,v.l(),A.az,"",k,22,A.bg,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.ba,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tg,D.cK,0.8,0.1,0.26)],s),C.cy(),D.ma,"","","Agenda",D.da)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,32,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.ba,j,2,"Main Idea",0,0,"",D.cd,D.cK,0.84,0.08,0.08)
f=C.cy()
f=C.qR(i,l,0,0,B.a([u,C.ei(A.be,!0,v.l(),A.az,"",k,21,A.bg,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.ba,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cd,D.cK,0.8,0.1,0.26)],s),C.cy(),D.ma,"","","Key Point 1",D.da)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,30,A.bg,A.u,"",0.12,u,l,"","",0,!1,"",0,D.ba,j,2,"Compare & Contrast",0,0,"",D.cd,D.cK,0.84,0.08,0.08)
r=C.cy()
r=C.ei(A.be,!0,v.l(),A.az,"",k,18,A.bg,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.ba,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cK,0.4,0.08,0.24)
q=C.cy()
q=C.qR(i,l,0,0,B.a([u,r,C.ei(A.be,!0,v.l(),A.az,"",k,18,A.bg,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.ba,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cK,0.4,0.52,0.24)],s),C.cy(),D.ma,"","","Key Point 2",D.da)
r=C.cy()
r=C.ei(A.L,!1,e.l(),A.az,"",k,48,A.bg,A.u,"",0.2,r,l,"","",0,!1,"",0,D.ba,j,2,h,0,0,"",D.da,D.cK,0.8,0.1,0.32)
e=C.cy()
p=C.Au(l,l,l,l,D.B9,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qR(i,l,0,0,B.a([r,C.ei(A.L,!1,v.l(),A.az,"",k,22,A.bg,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.ba,j,2,"Questions?",0,0,"",D.cd,D.cK,0.7,0.15,0.58)],s),C.cy(),D.ma,"","",h,D.da)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dn.prototype={
bC(d){return this.e.$1(d)}}
C.ek.prototype={}
C.iM.prototype={}
C.De.prototype={
gaGN(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aey(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1g(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.De(v,u,t,d==null?w.d:d)},
Em(d){return this.a1g(null,d,null,null)},
aA2(d){return this.a1g(null,null,null,d)},
czx(d,e){return this.a1g(d,e,null,null)},
b6u(d){return this.a1g(d,null,null,null)},
b6B(d){return this.a1g(null,null,d,null)}}
C.LM.prototype={
S(){return new C.bfP(new B.eL(0,$.au()),null,null)}}
C.bfP.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(new C.dLr(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.kn(0)
else v.d.sq(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.au()
w.O$=0
this.bpp()},
B(d){var w=C.aey(this.a.c.a)
if(w==null)w=A.d.gJ(D.Fb)
return B.cj(new C.dLq(this,w,C.fXa(this.a.c.d)))}}
C.bni.prototype={
B(d){return B.nn(A.Sq,this.e,new C.eI9(this,A.k.K(this.d*0.35,1.6)-0.3))}}
C.baY.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOv(d,e,v)
break
case"confetti":w.bB8(d,e,v)
break
case"crown":w.bCK(d,e,v)
break
case"aurora":w.bvT(d,e,v)
break
case"champagne":w.bz0(d,e,v)
break
case"diamonds":w.bET(d,e,v)
break
case"starburst":w.cnc(d,e,v)
break
case"balloons":w.bw6(d,e,v)
break
case"galaxy":w.bJv(d,e,v)
break
case"redcarpet":w.cev(d,e,v)
break
case"coins":w.bAw(d,e,v)
break
case"lanterns":w.bTt(d,e,v)
break
case"hearts":w.bRa(d,e,v)
break
case"petals":w.c9T(d,e,v)
break
case"butterflies":w.by3(d,e,v)
break
case"neon":w.bXc(d,e,v)
break
case"disco":w.bF3(d,e,v)
break
case"sunrise":w.coG(d,e,v)
break
case"pearls":w.c8X(d,e,v)
break
case"snow":w.cmU(d,e,v)
break
case"laurel":w.bTz(d,e,v)
break
case"ribbons":w.cgY(d,e,v)
break
case"kente":w.bTi(d,e,v)
break
case"trophy":w.csd(d,e,v)
break
case"shooting":w.ckN(d,e,v)
break
case"bokeh":w.bwn(d,e,v)
break
case"orbits":w.c6E(d,e,v)
break
case"flowers":w.bIO(d,e,v)
break
case"music":w.bWY(d,e,v)
break
case"mandala":w.bVp(d,e,v)
break
case"sparklers":w.cn2(d,e,v)
break
case"city":w.bzQ(d,e,v)
break}},
qI(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a0()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gq(0)
v.a=A.n1
u=new B.aS(w.r,A.as,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.G(new B.bc(w,s))
u.G(new B.d_(w,t,w+f,t))
u.G(new B.d_(w,t,w,t+f))
u.G(new B.d_(w,t,w-f,t))
u.G(new B.d_(w,t,w,s))
u.G(new B.bL())
d.aU(u,v)
d.ap(e,f*0.18,v)},
lf(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cO(q,v)*2.5)+C.cO(q,u)*6.28)+1)/2
this.qI(d,new B.v(C.cO(q,t)*o,C.cO(q,s)*n),m*(0.006+0.014*C.cO(q,r))*(0.5+p),h,p*p)}},
aOv(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lf(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aX],w),B.a([A.ia,A.bz],w),B.a([A.er,A.b2],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bJ(k/2.8)
i=A.k.K(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cO(h,1))
f=g+c0*(C.cO(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cO(h,3))
d=v[Math.abs(A.o.K(h,4))]
if(i<0.22){a0=B.l1(new B.v(g,c1),new B.v(f,e),A.co.av(0,i/0.22))
a0.toString
$.a0()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.sar(new B.a7(A.a3,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).az(0,B.qT(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bV
a2=B.l1(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.L()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.r=A.c.gq(0)
a3=a2.L()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cO(h,4)
if(a5<0.15){a4=1-a5/0.15
$.a0()
a8=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a8.r=d[0].j(0.5*a4).gq(0)
a8.z=new B.hF(A.G,o)
a3=a8.L()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cO(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cO(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a0()
b9=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
b9.r=b8.j(a8).gq(0)
b9.c=u
b9.d=A.bV
b9.a=A.n1
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cO(h,b1+120)>0.5)this.qI(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bB8(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.K(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a0(),a0=B.N()
a0.sar(new B.a7(A.ax,A.aC,A.w,D.cRT,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).az(0,new B.ae(0,0,f,e)))
a1.bi(new B.ae(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.K(a3*(h*(0.08+0.12*C.cO(u,1)))+C.cO(u,2)*w,w)
s=C.cO(u,3)
r=Math.sin(a3*(0.8+C.cO(u,4))+u)
q=h*(0.012+0.012*C.cO(u,5))
p=Math.cos(a3*(2+3*C.cO(u,6))+u)
o=D.N5[A.o.D(A.k.bJ(C.cO(u,7)*5),0,4)]
J.bN(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cO(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t=Math.abs(p)
n.r=B.ap(o,A.c,t*0.4).j(0.95).gq(0)
if(A.o.K(u,5)===0){t=B.a([],v)
m=new B.aS(d.r,A.as,null,null,t)
d=-q*2
t.push(new B.bc(d,0))
for(l=1;l<=8;++l){s=new B.ar(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bC(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a0()
t=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.r=B.aY(n.r).gq(0)
t.b=A.ad
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.dh(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.cr(t),k)
k.delete()}f.restore()}this.lf(a1,a2,a3,25,A.bJ,30)},
bCK(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a0()
n=B.a([],r)
m=new B.aS(o.r,A.as,a4,a4,n)
n.push(new B.bc(a5,a6))
o=p-0.07
n.push(new B.ar(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ar(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bL())
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.bJ.j(0.22),D.b1p],v),a4,a4).az(0,B.bV(w,u)))
l=o.L()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aS($.a0().r,A.as,a4,a4,B.a([],r))
v=a6+j
i.G(new B.bc(a5,v))
u=j*0.3
s=a6+u
i.G(new B.ar(a5,s))
o=a6+j*0.6
i.G(new B.ar(a5+k*0.22,o))
i.G(new B.ar(a5+k*0.5,a6))
i.G(new B.ar(a5+k*0.78,o))
o=a5+k
i.G(new B.ar(o,s))
i.G(new B.ar(o,v))
i.G(new B.bL())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.sar(new B.a7(A.b0,A.b5,A.w,D.cQR,a4,a4).az(0,new B.ae(a5,a6,o,v)))
a8.aU(i,n)
for(v=[D.e_z,D.dUZ,D.e8f],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.r=a0.gq(a0)
l=a1.L()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.r=A.al.gq(0)
l=a1.L()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.r=A.hJ.gq(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xU(i),u=B.a([],x.X),o=new B.wi(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jI(y.M));--f
o.jM()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aS(n,v.b,a4,new B.cK([new B.FW(o,f),0,d*h,!0]),B.a([],r))
f=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.b=A.ad
f.c=g
f.e=A.fo
f.r=A.bJ.gq(0)
l=f.L()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.K(b0*0.5,1)
this.qI(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lf(a8,a9,b0,45,A.bJ,40)},
bvT(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lf(a8,a9,b0,60,A.c,50)
w=[D.ehL,D.eht,D.eho,D.eiD]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a0()
i=B.a([],p)
h=new B.aS(n.r,A.as,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.bc(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ar(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a0()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.b=A.ad
n.c=t
n.r=m.j(0.28).gq(0)
n.a=A.n1
n.z=new B.hF(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.b=A.ad
n.c=v
n.r=m.j(0.55).gq(0)
n.a=A.n1
n.z=new B.hF(A.G,v)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.K(t*(0.05+0.06*C.cO(a4,1))+C.cO(a4,2)*a3,a3)
r=C.cO(a4,3)
q=Math.sin(b0+a4)
p=C.cO(a4,4)
$.a0()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=A.wc.j(0.4+0.5*C.cO(a4,5)).gq(0)
n.a=A.n1
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bz0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a0(),a0=B.N()
a0.sar(new B.bR(A.A,0.5,A.w,l,0,B.a([A.hr.j(0.25+0.1*h),D.TX],x.O),l,l).az(0,B.bV(new B.v(g,f),e)))
a1.ap(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aS(d.r,A.as,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.bc(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ar(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bC(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a0()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.b=A.ad
a0.c=h
a0.r=D.N5[A.o.K(w,4)].j(0.7).gq(0)
p=a0.L()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.K(a3*(i*(0.07+0.12*C.cO(w,1)))+C.cO(w,2)*o,o)
r=k*(0.1+0.8*C.cO(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cO(w,4))
if(n<f){this.qI(a1,new B.v(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.a0()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.zc.j(0.75).gq(0)
p=d.L()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.r=A.c.j(0.8).gq(0)
p=t.L()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bET(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lf(a9,b0,b1,30,A.kR,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cO(p,1))
n=a7+o*4
m=A.k.K(t*(0.04+0.06*C.cO(p,2))+C.cO(p,3)*n,n)-o*2
l=C.cO(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bN(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a0()
g=B.a([],q)
f=new B.aS(h.r,A.as,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.bc(e,i))
h*=0.28
j*=0.6
g.push(new B.ar(h,j))
d=o*0.28
g.push(new B.ar(d,j))
a0=o*0.5
g.push(new B.ar(a0,i))
a1=k*0.6
g.push(new B.ar(0,a1))
g.push(new B.bL())
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.sar(new B.a7(A.ax,A.aC,A.w,D.cN4,a5,a5).az(0,B.dh(A.J,k*1.2,o)))
a2=g.L()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cG(g)).a,a2)
a2.delete()
a3=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3.b=A.ad
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gq(0)
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
if(a4>0.85)this.qI(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cnc(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a0()
o=B.a([],v)
n=new B.aS(p.r,A.as,null,null,o)
o.push(new B.bc(h,g))
p=s-q
o.push(new B.ar(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ar(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bL())
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=A.bJ.j(r?0.12:0.07).gq(0)
m=p.L()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.K(a0+l*0.6,1.8)/1.8
$.a0()
u=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
u.b=A.ad
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gq(0)
m=u.L()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bJ(a0/2.4)
k=A.k.K(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cO(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bbB.av(0,k)*(0.5+0.5*C.cO(t,v)))
this.qI(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cO(t,3)),D.N5[A.o.D(A.k.bJ(C.cO(t,4)*5),0,4)],u)}},
bw6(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cO(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.K(q*(0.05+0.05*C.cO(o,2))+C.cO(o,3)*m,m)
j=C.cO(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqy[A.o.K(o,6)]
h=$.a0()
g=B.a([],s)
f=new B.aS(h.r,A.as,a3,a3,g)
h=k+n*1.15
g.push(new B.bc(j,h))
for(e=1;e<=6;++e){d=new B.ar(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bC(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a0()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gq(0)
a1=d.L()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.dh(new B.v(j,k),n*2.3,l)
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d=B.ap(i,A.x,0.35)
d.toString
l.sar(new B.bR(D.aO1,0.9,A.w,a3,0,B.a([A.c,i,d],t),P.aqp,a3).az(0,a2))
a1=l.L()
u.drawOval(B.cr(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aS(g.r,A.as,a3,a3,l)
d=n*0.12
l.push(new B.bc(j-d,h))
l.push(new B.ar(j+d,h))
l.push(new B.ar(j,k+n))
l.push(new B.bL())
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=B.ap(i,A.x,0.3).gq(0)
a1=l.L()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.K(q*(0.1+0.1*C.cO(o,11))+C.cO(o,12)*m,m)
r=C.cO(o,13)
J.bN(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.dh(A.J,t,v)
$.a0()
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=D.aqy[A.o.K(o,6)].j(0.85).gq(0)
a1=r.L()
u.drawRect(B.cr(s),a1)
a1.delete()
u.restore()}},
bJv(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lf(b1,b2,b3,50,A.c,70)
for(w=[D.ehT,D.ehz,D.ehF],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a0()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).az(0,B.bV(new B.v(r,m),l)))
j=k.L()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.K(i,3)
g=C.cO(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cO(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ap(A.bJ,A.ev,g)
k.toString
d=C.cO(i,3)
$.a0()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.r=k.j(0.5+0.5*C.cO(i,4)).gq(0)
a0.a=A.n1
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a0()
a9=B.N()
a9.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.zc.j(0.55),D.aat],u),a4,a4).az(0,B.bV(b0,a8)))
b1.ap(b0,a8,a9)
a1=A.k.K(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bJ(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cO(a2,9)),a6*0.1*C.cO(a2,8))
a5=B.l1(a3,a3.an(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l1(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a7(A.a3,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).az(0,B.qT(a3,a5)))
a8.c=a7*0.005
a8.d=A.bV
b1.bQ(a6,a5,a8)}},
cev(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a0()
n=B.a([],s)
m=new B.aS(o.r,A.as,b5,b5,n)
n.push(new B.bc(q,u))
o=p-0.16
n.push(new B.ar(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ar(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bL())
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(new B.bR(A.A,0.5,A.w,b5,0,B.a([A.zc.j(0.28),D.aat],w),b5,b5).az(0,B.bV(new B.v(q,u),t)))
o.a=A.n1
l=o.L()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.f6:A.eY)
a9=$.a0()
b0=B.a([],s)
m=new B.aS(a9.r,A.as,b5,b5,b0)
b0.push(new B.bc(a5?0:b6,0))
b0.push(new B.ar(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.d_(a9,k,a5?g:a1,b7))
b0.push(new B.ar(a5?0:b6,b7))
b0.push(new B.bL())
a9=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a9.sar(new B.a7(A.a3,A.a7,A.w,a7,b5,b5).az(0,new B.ae(a6,0,a6+i,j)))
l=a9.L()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
b1.r=A.hr.gq(0)
b1.c=o
b1.d=A.bV
l=b1.L()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aS($.a0().r,A.as,b5,b5,B.a([],s))
w=b7*0.78
b2.G(new B.bc(b6*0.42,w))
b2.G(new B.ar(b6*0.58,w))
b2.G(new B.ar(b6*0.8,b7))
b2.G(new B.ar(b6*0.2,b7))
b2.G(new B.bL())
v=B.N()
v.sar(D.bHb.az(0,new B.ae(0,w,0+b6,w+b7*0.22)))
b9.aU(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.K(b7*(0.05+0.07*C.cO(r,1))+C.cO(r,2)*b3,b3)
u=C.cO(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qI(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cO(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bAw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cO(t,1))
r=h+s*4
q=s*2
p=A.k.K(u*(0.12+0.12*C.cO(t,2))+C.cO(t,3)*r,r)-q
o=C.cO(t,4)*i
n=Math.cos(f*(2+3*C.cO(t,5))+t)
m=Math.abs(n)
l=B.dh(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a0()
q=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.sar(new B.a7(A.ax,A.aC,A.w,n>0?D.d_t:D.clv,null,null).az(0,l))
k=q.L()
v.drawOval(B.cr(l),k)
k.delete()
q=-(s*0.22)
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.c=Math.max(0.6,s*0.08)
j.r=D.b98.gq(0)
k=j.L()
v.drawOval(B.cr(new B.ae(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qI(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lf(d,e,f,30,A.bJ,110)},
bTt(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lf(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cO(p,1))
n=a1+o*4
m=a1+o*2-A.k.K(t*(0.03+0.04*C.cO(p,2))+C.cO(p,3)*n,n)
l=C.cO(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a0()
h=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.sar(new B.bR(A.A,0.5,A.w,d,0,B.a([H.aaB.j(0.45*k),D.a9w],u),d,d).az(0,B.bV(new B.v(l,m),j)))
g=h.L()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aS(i.r,A.as,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bc(l-i,e))
j.push(new B.ar(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ar(l+i,h))
j.push(new B.ar(l-i,h))
j.push(new B.bL())
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i=B.ap(D.b1y,A.c,0.2*k)
i.toString
j.sar(new B.a7(A.b0,A.b5,A.w,B.a([D.b5t,i],u),d,d).az(0,B.dh(new B.v(l,m),o*1.4,o)))
g=j.L()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=A.c.j(k).gq(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bRa(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cO(p,1))
n=a1+o*4
m=A.k.K(s*(0.05+0.06*C.cO(p,2))+C.cO(p,3)*n,n)
l=C.cO(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bN(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a0()
l=B.a([],t)
i=new B.aS(m.r,A.as,d,d,l)
m=o*0.9
l.push(new B.bc(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p5(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p5(m,g,o*1.8,h,0,m))
l.push(new B.bL())
f=D.cES[A.o.K(p,5)]
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l=B.ap(f,A.x,0.25)
l.toString
m.sar(new B.bR(A.tQ,0.5,A.w,d,0,B.a([A.c,f,l],u),H.ZG,d).az(0,B.bV(A.J,o*1.4)))
e=m.L()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lf(a3,a4,a5,30,A.ia,130)},
c9T(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cO(q,1))
o=g+p*4
n=A.k.K(t*(0.05+0.06*C.cO(q,2))+C.cO(q,3)*o,o)
m=C.cO(q,4)
l=Math.sin(s+q*0.7)
J.bN(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cO(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a0()
m=B.a([],u)
k=new B.aS(n.r,A.as,i,i,m)
n=-p
m.push(new B.bc(0,n))
l=n*0.2
m.push(new B.d_(p,l,0,p))
m.push(new B.d_(n,l,0,n))
m.push(new B.bL())
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
m=(q&1)===0?D.cfV:D.cOd
n.sar(new B.a7(A.a3,A.a7,A.w,m,i,i).az(0,B.bV(A.J,p)))
j=n.L()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lf(d,e,a0,25,A.bJ,140)},
by3(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lf(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cO(r,1))
p=Math.sin(b2*(0.15+0.1*C.cO(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cO(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bN(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bN(v.save())
v.scale(a1*n,1)
a2=$.a0()
a3=B.a([],u)
a4=new B.aS(a2.r,A.as,a6,a6,a3)
a3.push(new B.bc(0,0))
a3.push(new B.p5(f,e,l,d,h,0))
a3.push(new B.p5(q,h,g,q,0,h))
a3.push(new B.bL())
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.sar(new B.a7(A.a3,A.a7,A.w,i?D.cNY:D.cQn,a6,a6).az(0,new B.ae(0,m,k,j)))
a5=a2.L()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.b=A.ad
a2.c=Math.max(0.6,o)
a2.r=D.zi.gq(0)
a5=a2.L()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a0()
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=D.b8y.gq(0)
p.c=q*0.1
p.d=A.bV
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bXc(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.K(w+t/4,1)
r=f*(0.2+0.7*s)
$.a0()
q=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.c=v
q.r=D.arv[t].j((1-s)*0.9).gq(0)
q.z=new B.hF(A.G,v)
p=r*0.3
p=B.bM(B.dh(e,r,r*1.6),new B.b3(p,p))
o=q.L()
u.drawRRect(B.fA(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cO(m,1)*4)+m)))
k=D.arv[A.o.K(m,4)]
j=m*n+h
i=g-l
i=B.bM(new B.ae(j,i,j+w,i+l),new B.b3(v,v))
$.a0()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=k.j(0.85).gq(0)
j.z=new B.hF(A.a6l,p)
o=j.L()
u.drawRRect(B.fA(i),o)
o.delete()}},
bF3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cO(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cO(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.oI,A.dE][A.o.K(p,4)]
j=C.cO(p,3)
$.a0()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=k.j(0.75).gq(0)
i.a=A.n1
i.z=new B.hF(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a0()
t=B.N()
t.r=A.aA.gq(0)
t.c=1.2
a3.bQ(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.N()
t.r=A.fc.gq(0)
a3.ap(v,u,t)
J.bN(q.save())
a1=new B.aS(a1.r,A.as,null,null,B.a([],x.v))
a1.G(new B.kx(B.bV(v,u)))
a3.tj(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.K(a1,g)
i=Math.sin(e*1.7+l+s)
$.a0()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=B.ap(A.bv,A.c,0.4+0.6*((i+1)/2)).gq(0)
h=d.L()
q.drawRect(B.cr(new B.ae(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qI(a3,v.an(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
coG(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.av(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a0()
q=B.a([],u)
p=new B.aS(r.r,A.as,h,h,q)
q.push(new B.bc(d,a0))
r=s-0.04
q.push(new B.ar(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ar(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bL())
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.bJ.j(0.1).gq(0)
o=r.L()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a0()
a0=B.N()
a0.sar(new B.bR(A.A,0.5,A.w,h,0,B.a([D.aZ5.j(0.6),D.a9w],x.O),h,h).az(0,B.bV(a1,d)))
a2.ap(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.dSX.az(0,B.bV(a1,a0)))
a2.ap(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.K(d*(1+t*0.3)+C.cO(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=A.c.j(0.18).gq(0)
i=B.dh(new B.v(l,k),r,u)
o=j.L()
w.drawOval(B.cr(i),o)
o.delete()
i=B.dh(new B.v(l+q,k-n),r,m)
o=j.L()
w.drawOval(B.cr(i),o)
o.delete()}this.lf(a2,a3,a4,20,A.hJ,180)},
c8X(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a0()
q=B.a([],t)
p=new B.aS(r.r,A.as,f,f,q)
q.push(new B.bc(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ar(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bC(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ar(e,d)
q.push(r)
o=p.f
if(o!=null)r.bC(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bL()
q.push(r)
q=p.f
if(q!=null)r.bC(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a0()
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=B.ap(A.cE,A.iU,s/3).j(0.55).gq(0)
k=r.L()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cO(i,1))
g=d-A.k.K(u*(0.04+0.05*C.cO(i,2))+C.cO(i,3)*j,j)
n=C.cO(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a0()
t=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.sar(new B.bR(Aj.pK,0.5,A.w,f,0,D.cTk,f,f).az(0,B.bV(new B.v(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lf(a1,a2,a3,25,A.c,190)},
cmU(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cO(r,1))
p=f+q*4
o=A.k.K(u*(0.03+0.05*C.cO(r,2))+C.cO(r,3)*p,p)
n=C.cO(r,4)
m=Math.sin(t+r)
$.a0()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.c.j(0.6+0.4*C.cO(r,5)).gq(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bV
J.bN(v.save())
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
h.delete()}v.restore()}this.lf(d,a0,a1,40,A.er,200)},
bTz(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dF(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bN(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.dh(new B.v(p,0),q,r)
$.a0()
f=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.sar(D.bGZ.az(0,new B.ae(0,o,n,m)))
e=f.L()
s.drawOval(B.cr(g),e)
e.delete()
s.restore()}}$.a0()
a0=B.N()
a0.b=A.ad
a0.c=a2*0.003
a0.r=D.b1J.gq(0)
a3.ap(w,v*1.08,a0)
d=a5*0.8
this.qI(a3,w.an(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lf(a3,a4,a5,40,A.bJ,210)},
cgY(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hr,A.hJ],a6),B.a([A.nW,A.ia],a6),B.a([A.aB,A.ev],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bU<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a0()
k=B.a([],o)
j=new B.aS(l.r,A.as,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.bc(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ar(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dx(i,s),l=new B.bU(l,l.gI(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ar(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bC(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bL()
k.push(l)
k=j.f
if(k!=null)l.bC(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a0()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k=a7[m]
h=k[0]
l.sar(new B.a7(A.a3,A.a7,A.w,B.a([h,k[1],h],a6),H.arc,new B.mo(w)).az(0,new B.ae(0,0,v,u)))
l.r=A.c.j(0.85).gq(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lf(a8,a9,b0,40,A.c,220)},
bTi(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.K(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.K(A.k.bJ(g/t),5)
a1=g+t
$.a0()
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3=Math.abs(a0)
a2.r=D.ZJ[a3].gq(0)
a4=a2.L()
s.drawRect(B.cr(new B.ae(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a5.r=D.ZJ[A.o.K(a3+2,5)].gq(0)
a4=a5.L()
s.drawRect(B.cr(new B.ae(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.K(n*(0.04+0.05*C.cO(a0,1))+C.cO(a0,2)*a6,a6)
v=C.cO(a0,3)
t=C.cO(a0,4)
this.qI(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.ZJ[A.o.K(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
csd(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a0()
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.c=v
p.r=A.bJ.j(0.06).gq(0)
o=p.L()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aS($.a0().r,A.as,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.G(new B.bc(v,a2))
w=a1+w
l.G(new B.ar(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.G(new B.d_(w,r,p,k))
w=a2+m*0.95
l.G(new B.ar(p,w))
p=n*0.3
j=a2+m
l.G(new B.ar(a1+p,j))
l.G(new B.ar(a1-p,j))
q=a1-q
l.G(new B.ar(q,w))
l.G(new B.ar(q,k))
l.G(new B.d_(v,r,v,a2))
l.G(new B.bL())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.dh(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=q
d.r=A.au.gq(0)
o=d.L()
u.drawArc.apply(u,[B.cr(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a7(A.a3,A.a7,A.w,D.cVp,A.aqE,null).az(0,new B.ae(v,a2,r,j)))
a4.aU(l,a1)
a0=A.k.K(a6*0.6,1.4)
if(a0<1)this.qI(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bB9(a4,a5,a6,60)},
bB9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.K(k*(0.1+0.1*C.cO(p,31))+C.cO(p,32)*v,v)
n=C.cO(p,33)
J.bN(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dh(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a0()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=D.N5[A.o.K(p,5)].gq(0)
m=n.L()
u.drawRect(B.cr(o),m)
m.delete()
u.restore()}},
ckN(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lf(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cO(o,1)*1.6
m=A.k.K(a2+C.cO(o,2)*n,n)/n
l=e*(C.cO(o*7+A.k.bJ((a2+C.cO(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a0()
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.sar(new B.a7(A.a3,A.a7,A.w,B.a([A.c.j(0),A.bJ],s),null,null).az(0,B.qT(new B.v(l,h),i)))
g.c=r
g.d=A.bV
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qI(a0,i,p,A.c,1-m)}},
bwn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cO(r,1))
p=A.k.K(C.cO(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.K(C.cO(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a0()
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l=A.o.K(r,5)
m.r=D.asP[l].j(n).gq(0)
m.a=A.n1
m.z=new B.hF(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.b=A.ad
m.c=Math.max(0.6,q*0.05)
m.r=D.asP[l].j(n*1.4).gq(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
c6E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bN(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.dh(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a0()
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.b=A.ad
o.c=u
o.r=A.bJ.j(0.45).gq(0)
n=o.L()
w.drawOval(B.cr(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.hJ.gq(0)
n=k.L()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.hr.j(0.4).gq(0)
k.z=new B.hF(A.G,r)
n=k.L()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lf(d,e,f,45,A.bJ,270)},
bIO(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.K(o,4)
m=C.cO(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.K(a7+C.cO(o,2)*4,4)/4
j=A.ex.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cO(o,3))*(j*i)
if(h<=0.5)continue
g=D.cLn[A.o.K(o,5)]
J.bN(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dh(new B.v(0,l),i,j)
$.a0()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.sar(new B.a7(A.b0,A.b5,A.w,B.a([A.c,g],u),null,null).az(0,B.dh(new B.v(0,l),f,h)))
a1=a0.L()
v.drawOval(B.cr(d),a1)
a1.delete()}$.a0()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.hr.gq(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lf(a5,a6,a7,30,A.hJ,280)},
bWY(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.K(t+n/4,1)
l=B.bV(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a0()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.c=v
j.r=D.apM[n].j((1-m)*0.8).gq(0)
i=j.L()
u.drawArc.apply(u,[B.cr(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.K(v*(0.06+0.06*C.cO(g,1))+C.cO(g,2)*h,h)
e=C.cO(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cO(g,4))
a0=D.apM[A.o.K(g,4)]
$.a0()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.r=a0.gq(0)
J.bN(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.dh(A.J,d,d*1.5)
i=a1.L()
u.drawOval(B.cr(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.18)
i=o.L()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.3)
i=o.L()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bVp(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bN(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.a0()
a0=B.a([],s)
a1=new B.aS(d.r,A.as,a3,a3,a0)
a0.push(new B.bc(0,i))
a0.push(new B.d_(h,m,0,g))
a0.push(new B.d_(j,m,0,i))
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=t
d.r=B.ap(A.bJ,A.oI,k).j(0.7).gq(0)
a2=d.L()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=A.hJ.j(0.8).gq(0)
a2=d.L()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a0()
a5=B.N()
a5.sar(new B.bR(A.A,0.5,A.w,a3,0,B.a([A.hr.j(0.25),D.TX],x.O),a3,a3).az(0,B.bV(w,a4)))
a7.ap(w,a4,a5)
this.lf(a7,a8,a9,30,A.bJ,300)},
cn2(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a0()
h=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=A.bv.gq(0)
h.c=q
h.d=A.bV
g=h.L()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.sar(new B.bR(A.A,0.5,A.w,null,0,B.a([A.hJ,A.hr.j(0.6),D.TX],o),null,null).az(0,B.bV(new B.v(j,i),p)))
g=l.L()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cO(f,1)
d=A.k.K(b2+C.cO(f,2)*e,e)/e
a0=A.k.bJ((b2+C.cO(f,2)*e)/e)
a1=C.cO(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cO(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=B.ap(A.hJ,A.aX,d).j(1-d).gq(0)
a6.c=Math.max(0.8,u)
a6.d=A.bV
a6.a=A.n1
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
g.delete()}}}this.lf(b0,b1,b2,35,A.bJ,310)},
bzQ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOv(a9,new B.aq(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cO(n,1))
l=a8*(0.14+0.24*C.cO(n,2))
k=a8-l
j=new B.ae(o,k,o+m,k+l)
$.a0()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.sar(D.bHU.az(0,j))
h=i.L()
r.drawRect(B.cr(j),h)
h.delete()
g=A.k.bJ(m/q)
f=A.k.bJ(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cO(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a0()
a6=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=A.bJ.j(0.85).gq(0)
h=a6.L()
r.drawRect(B.cr(new B.ae(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aWG.prototype={
B(d){var w,v=null,u=new C.c3s(),t=new C.c3u(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiH,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c3t(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Fb[w]))
return B.c8(A.bH,s,A.bw,12,10)}}
C.Xj.prototype={
S(){return new C.awY()}}
C.awY.prototype={
guN(){var w=this.d
return w===$?this.d=this.a.c:w},
gaUZ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.bb(w.b,A.b_,A.aL),$.au())}return v},
gatV(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGN()
v=$.au()
u.f!==$&&B.bH()
t=u.f=new B.ao(new B.bb(w,A.b_,A.aL),v)}return t},
p(){var w=this.gaUZ(0),v=$.au()
w.R$=v
w.O$=0
w=this.gatV()
w.R$=v
w.O$=0
this.a2()},
XV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().B0(90,700,700,A.eu),$async$XV)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$XV)
case 8:p=e
o=q.b.toLowerCase()
n=J.afq(o,".png")?"image/png":"image/jpeg"
r.n(new C.d0F(r,n,p))
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
return B.i($async$XV,v)},
aUY(d){var w=null,v=A.c.j(0.07)
return B.bm(w,new B.b2(4,B.m(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aK3,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aey(p.guN().a)
if(n==null)n=A.d.gJ(D.Fb)
w=p.guN()
v=p.r
u=x.p
v=B.D(new B.am(A.V,o,A.a9,A.q,B.a([B.bZ(0,new C.LM(p.guN(),!1,!0,new B.cw(w.a+v,x.W)),0,0,0),B.an(o,B.Gd(A.mJ,new C.d0K(d),B.nM(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Gd(D.bsF,new C.d0L(p),B.nM(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJY,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaUZ(0),o,o,o,o,o,2,p.aUY("Big words"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0M(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hb,!0,A.a6,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hr.j(0.6),A.r,1)
if(p.guN().d.length===0)q=D.bvZ
else{q=C.fXa(p.guN().d)
if(q==null)q=new Uint8Array(0)
q=B.hN(B.fD(q,A.A,o,o,A.ci,A.bO,!1,o,!1,o,o),A.ap)}r=B.a([t,A.aa,B.aJ(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc0J(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guN().d.length!==0)r.push(B.aF(o,o,o,o,D.Yy,o,o,o,new C.d0N(p),o,o,o,o,"Remove logo",o))
return B.cd(o,A.x,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.T,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gatV(),o,o,o,o,o,2,p.aUY("Line under it"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0O(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a6,o,A.am,o,o,o,o),A.ab,B.dn(D.buV,D.f5k,new C.d0P(p,d),B.bk(A.au,o,o,o,A.x,o,A.cc,o,new B.b5(B.m(14),A.W),o,o,o))],u),A.af,o,A.e,A.R,0,A.p),A.h,o,o,D.aSi,o,o,o,o,A.DI,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.aIr.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.XE.prototype={
S(){return new C.bcr(new B.ao(A.aq,$.au()))}}
C.bcr.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.L(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.ak,k=B.aG(d,A.bP,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.ct,l,o,o,o,o),o,o,o,new C.d7a(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cx_[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.b3(12,12)
q=new B.b3(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aH(!1,new B.bv(r,r,r,r),!0,B.p(A.A,new B.w(s,o,A.yo,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d7b(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hv,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ea(A.bH,6,6,A.bw,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bi:A.aO
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bm(o,new B.b2(4,B.m(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.am,o,o,o,o),1),A.aa,B.bI(A.aKT,new C.d7c(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dp(1,A.cj,B.cL(e,o,o,o,o,A.ai,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rD,A.Vr,o,o,o),!0,!1,A.ah,!0,!0)}}
C.bbP.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f0()
a2.dX(this.c)
w=this.b
v=w/6.283185307179586
$.a0()
u=B.N()
u.z=A.OA
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ae()
l=a2.ae()
k=a2.ae()
j=0.8+a2.ae()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.K(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ae()<0.25){f=B.ap(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gq(0)
d=u.L()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gq(0)
d=t.L()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.a0()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.r=e.gq(0)
a1.c=1
d=a1.L()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.L()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aq(d){return d.b!==this.b}}
C.bbw.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bM(new B.ae(0,0,0+a7.a,0+a7.b),A.ka),a2=this.b,a3=Math.sin(a2*2),a4=$.a0(),a5=B.N()
a5.b=A.ad
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gq(0)
a5.z=A.m9
a6.b6(a1,a5)
a5=x.v
a4=new B.aS(a4.r,A.as,a0,a0,B.a([],a5))
a4.G(new B.iU(a1))
v=new B.a2q(new B.wi(B.xU(a4),!1,B.a([],x.X))).gJ(0)
a4=v.a
a3=v.b
a4.jM()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ap(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.K(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.a0()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.d=A.bV
j.c=1.5+2*m/10
j.r=w.j(k).gq(0)
i=A.k.K(n-p*(1-m/10),t)
h=A.k.K(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aS(r,k,a0,new B.cK([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.aS(r,k,a0,new B.cK([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.aS(r,a2.b,a0,new B.cK([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.jM()
e=u[a3].T1(n).a
$.a0()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=w.gq(0)
k.z=A0.pi
g=k.L()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=A.c.gq(0)
g=d.L()
q.drawCircle(k,f,2,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.bkf.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f0()
e.dX(this.c)
w=a0.a*(0.2+e.ae()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gajA()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a0()
i=B.a([],n)
h=new B.aS(j.r,A.as,f,f,i)
i.push(new B.bc(w,v))
j=l-k
i.push(new B.ar(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ar(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bL())
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.sar(B.aRP(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.ji
g=j.L()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b6u.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f0()
a0.dX(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ae()
l=a0.ae()
k=Math.min(t,r)*(0.03+a0.ae()*0.09)
j=a0.ae()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ap(v,A.c,0.6)
e.toString
f=e}$.a0()
e=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
e.r=f.j(g).gq(0)
e.z=new B.hF(A.G,k*0.35)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
e.b=A.ad
e.c=1
e.r=B.ap(f,A.c,0.5).j(g*0.9).gq(0)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b67.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f0()
a0.dX(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ae()-0.5)*0.1)
k=v*(0.06+a0.ae()*0.05)
j=a0.ae()*3.141592653589793*2
i=$.a0()
h=B.a([],n)
g=new B.aS(i.r,A.as,null,null,h)
h.push(new B.bc(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ar(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bC(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a0()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.b=A.ad
i.c=r
i.d=A.bV
if(m===1){h=B.ap(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gq(0)
i.z=new B.hF(A.G,u)
d=i.L()
i=g.e
t.drawPath((i==null?g.e=new B.cG(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.br2.prototype={
a6(d,e){var w,v,u=new B.ae(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a0()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.bR(A.A,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cDK,null).az(0,u))
d.bi(u,w)
w=u.cD(-3)
v=B.N()
v.b=A.ad
v.c=2
v.r=this.c.j(0.1+t).gq(0)
v.z=A.ji
d.bi(w,v)},
aq(d){return d.b!==this.b}}
C.bo5.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bJ(d)*7,p=0;p<7;++p){o=new B.f0()
o.dX(q+p)
n=o.ae()*w
m=o.ae()*u
l=Math.sin(A.k.K(A.k.K(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ae()*0.025)*l
j=B.ap(s,A.c,0.7).j(l)
$.a0()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=j.gq(0)
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
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.r=A.c.j(l*0.9).gq(0)
g.z=new B.hF(A.G,k*0.3)
h=g.L()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bne.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.ae(0,0,0+e.a,0+e.b)
$.a0()
v=B.N()
v.a=A.n1
v.sar(new B.a7(A.ax,A.aC,A.w,B.a([A.K,B.ap(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).az(0,w))
d.bi(w,v)},
aq(d){return d.b!==this.b}}
C.baR.prototype={
a6(d,e){var w,v,u,t,s,r=e.ge8(),q=0.55+0.45*Math.sin(this.b)
$.a0()
w=B.N()
w.b=A.ad
w.c=1.4
w.d=A.bV
v=this.d
w.r=v.j(0.55+q*0.35).gq(0)
u=B.N()
u.b=A.ad
u.c=4
u.r=v.j(0.12*q).gq(0)
u.z=A.qz
r=new C.d0m(this,r*0.16,d,u,w)
t=e.ge8()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.wK.prototype={}
C.Ha.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aox.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.u3.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m6.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hm.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ey.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ei(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ac(){var w,v=this,u=B.S(x.N,x.z)
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
u.m(0,"decoration",C.hzx(v.z))
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
C.lo.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,ey>")
n=B.z(new B.J(n,new C.c8R(),m),m.k("ai.E"))
return C.qR(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.z(new B.J(n,new C.c8S(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hS.prototype={
gb4S(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gQs(){if(!C.kh(this.w))return!1
var w=this.gb4S()
if(w==null)return!1
return new B.P(Date.now(),0,!1).cY(w.bP())},
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
q=B.U(r).k("J<1,lo>")
r=B.z(new B.J(r,new C.c8G(),q),q.k("ai.E"))
return C.Au(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ac(){var w,v,u=this,t=B.S(x.N,x.z)
t.m(0,"id",u.a)
t.m(0,"name",u.b)
t.m(0,"themeId",u.c)
t.m(0,"aspectRatio",u.d.b)
t.m(0,"autoAdvanceSeconds",u.e)
t.m(0,"updatedAt",u.f.a4().ab())
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
v=B.U(w).k("J<1,a1<n,@>>")
w=B.z(new B.J(w,new C.c8H(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.jt.prototype={}
C.aYO.prototype={
B(d){return B.cj(new C.c8M(this))}}
C.alN.prototype={
S(){return new C.bfC(null,null)}}
C.bfC.prototype={
gaV_(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h2,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gaV_().p()
this.bpa()},
B(d){return B.c4(this.gaV_(),new C.dyM(),this.a.c)}}
C.aId.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.ab7.prototype={
O7(d,e,f,g){return this.bIv(d,e,f,g)},
bIv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O7)
case 3:s=i
if(d.e==null){w=1
break}B.a8(d,!1).M(null)
t=d.F(x.q).f
t.P(B.b0(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O7,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.aa(0,A.G,A.x.j(0.35),A.dm,24)],x.V),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.bf,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.ar,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d2)
n.push(B.B(B.a([B.D(new C.abp(A.hm,"Download",A.bR,new C.ebK(w,d),!0,v),1),A.aw,B.D(new C.abp(A.uy,"Share",A.bj,new C.ebL(w,d),!1,v),1),A.aw,B.D(new C.abp(A.h6,"Safari",A.aW,new C.ebM(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bG(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ebN(d),v,v))
return B.br(!0,new B.C(A.p_,B.u(B.a([B.p(v,B.u(n,A.af,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iD,v,t,u,s,v,A.n),v,v,v,v,A.DO,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ah,!0,!0)}}
C.abp.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.Y,!0,v,B.aH(!1,u,!0,B.eq(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bkn,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anL(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.M(v,w,v,w)}else{v=6*w
u=new B.M(v,10*w,v,12*w)}t=i.c0K().ahL(1.35)
s=B.asW(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.buq(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bj,h,h,h,h,2,D.bDL,A.z,!0,h,!0,h,!1,i.x,A.ag,h,h,h,new B.cw("slide_tf_"+g.a,x.W),h,A.ve,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yi,A.am,h,A.QB,h,h)
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
w=n?t.czk(B.aY(g.Q).j(0.45),A.cx):t
p=g.as
l=m?1:h
k=m?A.eB:A.BL
p=B.d(f,new B.cw("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qs:s
$.a0()
j=B.N()
j.b=A.ad
j.c=3*w
j.e=A.fo
j.r=A.aH.gq(0)
j=i.ch0(p,t,k,j)
k=g.r
w=new B.am(A.V,h,A.a9,A.q,B.a([j,i.cgZ(k,t,l?A.Qs:s)],x.p),h)}else w=i.ch_(p,t,g.k2?A.Qs:s,m)
v=new B.n8(w,new B.cw("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c3,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.C(u,new B.bF(r,h,h,q,h),h)
case 1:case 4:return i.bRN()
case 3:return i.c8W()
case 2:return B.b1(h,h,h,new C.aYJ(g,h),A.ff)
case 5:g=g.r
return new C.aYL(g,!i.e&&i.z==null,h)}},
c0K(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aY(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kx
j=A.cx
break
case"shadow":v=o.d
e=B.a([new B.cJ(D.a9u,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cJ(l,A.J,6*v),new B.cJ(l,A.J,16*v),new B.cJ(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cS
w=A.aH
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mf
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cJ(A.bz,new B.v(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ap(l,A.x,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cJ(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cJ(A.bd,new B.v(-3*v,0),0),new B.cJ(A.aG,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cJ(A.d3,A.J,8*v),new B.cJ(A.aG,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8q
break
case"ice":v=o.d
e=B.a([new B.cJ(A.b2,A.J,10*v),new B.cJ(A.cE,A.J,22*v)],x.r)
k=A.O
w=A.er
break
case"chalk":h=o.d
e=B.a([new B.cJ(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kx
break
case"comic":v=B.ap(l,A.x,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cFA[q]
u.push(new B.cJ(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cJ(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a0()
f=B.N()
v=o.d
f.sar(D.bFs.az(0,new B.ae(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cJ(A.Ix,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.a0()
f=B.N()
v=o.d
f.sar(D.bFN.az(0,new B.ae(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cJ(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cp
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cJ(l.j(0.45),new B.v(u,u),0),new B.cJ(l.j(0.2),new B.v(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kx
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aY(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avN(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.emL.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c8K(h)
v=r.k2?C.hLN(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.BL
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VQ(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
ch0(d,e,f,g){return this.avN(d,e,f,!1,g)},
cgZ(d,e,f){return this.avN(d,e,f,!1,null)},
ch_(d,e,f,g){return this.avN(d,e,f,g,null)},
buq(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bRN(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bE
return B.at(B.V(s.b===D.kG?A.EN:A.A6,A.aA,t,t,t,32),t,t,t)}w=u.bxi(r)
if(s.b===D.kG){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.cq,A.r,1),s,B.a([new B.aa(0,A.G,A.x.j(0.08),A.dH,6)],x.V),t,A.n),t,1/0,t,t,new B.M(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJW(r,!0)
return C.fis(s.go,v,s.id)}return w},
aJW(d,e){var w,v,u,t
try{w=C.hM5(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cj(new C.c8J(this,w,v,e))
return u}catch(t){return D.a7G}},
bxi(d){return this.aJW(d,!1)},
c8W(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aXf
return C.hMn(v,w.db,w.dx)}}
C.aYJ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a0(),g=B.N(),f=this.b
g.r=B.aY(f.ay).gq(0)
w=B.N()
w.r=B.aY(f.ch).gq(0)
w.b=A.ad
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.ae(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.bi(s,g)
d.bi(s,w)
break
case 1:d.jQ(s,g)
d.jQ(s,w)
break
case 2:r=new B.aS(h.r,A.as,i,i,B.a([],x.v))
r.G(new B.bc(u/2,0))
r.G(new B.ar(u,t))
r.G(new B.ar(0,t))
r.G(new B.bL())
d.aU(r,g)
d.aU(r,w)
break
case 3:r=new B.aS(h.r,A.as,i,i,B.a([],x.v))
h=t*0.45
r.G(new B.bc(0,h))
f=u*0.65
r.G(new B.ar(f,h))
r.G(new B.ar(f,t*0.2))
r.G(new B.ar(u,t*0.5))
r.G(new B.ar(f,t*0.8))
t*=0.55
r.G(new B.ar(f,t))
r.G(new B.ar(0,t))
r.G(new B.bL())
d.aU(r,g)
d.aU(r,w)
break
case 4:h=t/2
w.c=v+2
d.bQ(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.aS(h.r,A.as,i,i,B.a([],x.v))
r.G(new B.bc(q,0))
r.G(new B.ar(u,0))
r.G(new B.ar(u-q,t))
r.G(new B.ar(0,t))
r.G(new B.bL())
d.aU(r,g)
d.aU(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aS(h.r,A.as,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.bc(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ar(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.G(new B.bL())
d.aU(r,g)
d.aU(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aFQ.prototype={
S(){return new C.bqz(null,null)}}
C.bqz.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.ik,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bro()},
aK6(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bT(B.at(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.w,v,w,w),A.n),A.b9)},
buE(){var w,v=this,u=null,t=v.aK6("Slide A",A.bj),s=v.aK6("Slide B",A.aW)
if(v.a.c===D.cd)return new B.am(A.V,u,A.aY,A.q,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eQt(v,s,t),u)},
B(d){return this.buE()}}
C.aGs.prototype={
iH(d){return new B.ae(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
ji(d){return d.b!==this.b}}
C.T6.prototype={
S(){return new C.bfM(null,null)}}
C.bfM.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zw,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cd){w.sq(0,1)
return}B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJE(u),x.a)},
bp(d){var w,v,u,t=this
t.bA(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sq(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cd)w.sq(0,1)
else B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJD(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpo()},
B(d){var w,v=this.a
if(v.c.dy===D.cd||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dJC(this),v.d)}}
C.H9.prototype={
B(d){return B.cj(new C.c8C(this))}}
C.awJ.prototype={
S(){return new C.bal()}}
C.bal.prototype={
Z(){this.a0()
if(this.a.c!==D.cd)B.bK(A.JC,new C.cYV(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cd)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.T6(C.ei(A.be,!1,4279310375,A.az,"",4294538006,24,A.bg,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.ba,o,2,"",0,0,"",u,D.eS,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cw("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ei(A.be,!1,4294967295,A.az,"",4280640491,22,A.bg,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.ba,o,2,"Element flies in",0,0,"",q.a.c,D.cK,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.V,p,A.a9,A.q,B.a([w,B.an(32,new C.T6(t,B.p(p,D.eT7,A.h,p,p,new B.o(s,p,B.H(A.bf,A.r,1),r,p,p,A.n),p,p,p,p,A.iI,p,p,1/0),!0,1,new B.cw("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bT(n,D.aSQ,A.b9)}}
C.a5E.prototype={
S(){return new C.bgq(null,null)}}
C.bgq.prototype={
gaVw(){var w=this.a
if(w.e)w=D.emS.t(0,w.c)||D.aHf.t(0,A.d.gJ(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVw()){w=C.hKs(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bpV()},
B(d){var w,v=this,u=v.d
if(!v.gaVw()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e1o(v,u,A.o.K(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWJ.prototype={
B(d){var w=null
return B.at(C.aYN(!0,w,!1,C.ei(A.L,!1,this.e.l(),A.az,"",4280640491,this.f,A.bg,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.ba,4280172719,2,"Aa",0,0,this.c,D.cd,D.cK,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbu.prototype={
iH(d){return C.a0m(this.b,new B.ae(0,0,0+d.a,0+d.b).cD(-this.c))},
ji(d){return d.b!==this.b||d.c!==this.c}}
C.bme.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.ae(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0m(g,h),e=a1.ge8(),d=new C.eFU()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aIK.az(0,h))
a0.aU(f,w)
g=C.a0m(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b8V.gq(0)
a0.aU(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.ewl.az(0,h))
a0.aU(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gq(0)
g.z=new B.hF(A.G,e*0.04)
a0.aU(f,g)
g=d.$1(e*0.012)
g.r=A.c.gq(0)
a0.aU(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.ewj.az(0,h))
a0.aU(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gq(0)
a0.aU(f,w)
g=C.a0m(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gq(0)
a0.aU(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bd.j(0.7).gq(0)
g.z=new B.hF(A.G,e*0.035)
a0.aU(f,g)
g=d.$1(e*0.016)
g.r=A.nY.gq(0)
a0.aU(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.ewe.az(0,h))
a0.aU(f,w)
w=C.a0m(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_o.gq(0)
a0.aU(w,v)
g=C.a0m(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b1A.gq(0)
a0.aU(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aIK.az(0,h))
a0.aU(f,g)
for(g=B.xU(f),w=B.a([],x.X),g=new B.wi(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jI(y.M));--q
g.jM()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bJ(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jM()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jM()
m=w[q].T1(p*n/o).a
l=D.cD7[A.o.K(n,4)]
$.a0()
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=l.gq(0)
k=p.L()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=A.c.j(0.9).gq(0)
k=i.L()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.ewn.az(0,h))
g.z=new B.hF(A.G,e*0.03)
a0.aU(f,g)
g=d.$1(e*0.018)
g.sar(D.ewk.az(0,h))
a0.aU(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gq(0)
a0.aU(f,w)
g=C.a0m(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n7.gq(0)
a0.aU(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bnb.prototype={
a6(d,e){d.EB(C.a0m(this.b,new B.ae(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.ge8()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aIq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aIW.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aKf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.a5X.prototype={}
C.Mc.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBs(B.a([],x.D),B.a([],w),B.a([],w),B.S(v,u),B.S(v,x.bo),B.S(v,u),B.aZ(v),null,null)},
gdS(){return this.c},
gRN(){return this.r},
gRO(){return this.w},
gK5(){return this.x}}
C.aBs.prototype={
Z(){var w,v=this
v.a0()
$.aT.c_$.push(v)
C.fnn()
$.h3D=new C.ehY(v)
w=B.bi(null,A.zu,null,1,null,v)
w.f1(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.H3()},
bp(d){var w,v,u=this
u.bA(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MQ(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H3()}},
iP(d){if(d===A.yG||d===A.r1||d===A.r0||d===A.oE)this.rJ()},
p(){var w,v,u,t=this
$.aT.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rJ()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.au()
v.O$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bG(0)
v.fU()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.au()
v.O$=0}t.bq8()},
ga8X(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gN9(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9q(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQs())return!1
return!0},
jG(){return this.a9q(null)},
afW(){var w=this.c
if(w==null)return
w.F(x.q).f.P(D.euD)},
px(){if(!this.jG())return!1
this.afW()
return!0},
anN(d){var w,v,u,t,s,r=this
if(r.a9q(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h2K(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yT(){return this.anN(null)},
H3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aoz(k),$async$H3)
case 3:j=e
w=4
return B.b(C.and(k),$async$H3)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fBP(j,t.bUz())
w=t.ga8X()?5:7
break
case 5:r=t.gN9()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWX(r),$async$H3)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.eel())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.eem())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xG(m==null?"":m)!=null)continue
C.fnz(n,s)
p=!0}t.n(new C.een(t,s))
if(p||s.length>J.a9(j))t.rJ()
case 1:return B.h(u,v)}})
return B.i($async$H3,v)},
bUz(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kh(w)&&w!==q}if(w)p.push(r)
return p},
cft(d){var w,v=this,u=d.w
if(!C.kh(u)||u==="hati_kiapo_uongozi")return
v.a7O(d)
w=A.d.bh(v.d,new C.efW(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.P(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
c9S(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kh(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cft(t)
s=u.d
w=B.U(s)
v=w.k("cS<1,hS>")
s=B.z(new B.cS(new B.a5(s,new C.efK(),w.k("a5<1>")),new C.efL(),v),v.k("G.E"))
return s},
MQ(d){return this.bIS(d)},
rJ(){return this.MQ(null)},
bIS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c9S()
w=3
return B.b(C.U3(d==null?t.a.c:d,s),$async$MQ)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anN(r)?4:5
break
case 4:w=6
return B.b(C.a5b(r),$async$MQ)
case 6:q=r.x
p=A.a.i(q==null?t.gN9():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bh(t.d,new C.edJ())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MQ,v)},
oA(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kh(u.w))===!0?A.hM:A.lm
v.at=B.cN(w,new C.eh3(v))},
aV0(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acS(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a7(v.ay)},
csr(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acS(w.e.hs(),w.f,w.r))
w.n(new C.ehU(w,v.pop()))
w.oA()},
ceA(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acS(w.e.hs(),w.f,w.r))
w.n(new C.efU(w,v.pop()))
w.oA()},
nB(){var w,v,u=this
if(u.e==null)return
w=A.d.bh(u.d,new C.ehH(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.P(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.P(Date.now(),0,!1)},
VC(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wx(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.R$=$.au()
u.O$=0}w.a7(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bG(0)
u.fU()}w.a7(0)},
IG(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cS<1,n>")
t=B.d6(new B.cS(new B.a5(w,new C.ehI(),v.k("a5<1>")),new C.ehJ(),u),u.k("G.E"))
w=this.ch
v=B.a2(w).k("cu<1>")
v=B.z(new B.cu(w,v),v.k("G.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.au()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bG(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cK)continue
p=n.a
m=w.ce(0,p,new C.ehK(n))
s.ce(0,p,new C.ehL())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Go(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bf(u.d,new C.ed7(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN9()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nB()
u.oA()},
agf(d,e){var w,v,u,t,s=this
if(s.jG())return
w=s.VC(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kh(v.w))===!0
if(u){C.hKw(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hKx(t,w.d+w.f*0.5)}}s.Go()
s.nB()
s.oA()
if(u&&s.c!=null)s.n(new C.ehV())},
ctv(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Go()
w.nB()
w.oA()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpB(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hIz(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gJ(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aY(p==null?v.e:p)
u=q.bS1(v)
t=q.bS0(v)
s=B.aY(v.e)
r=v.f
return new C.jt(o,"Class template",p,u,t,s,r==null?null:B.aY(r))}return C.hm3(o)},
bS1(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cK)s=t.w>=28||A.o.D(A.o.aj(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aY(t.Q)}return A.M},
bS0(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cK&&t.w<28)return B.aY(t.Q)}return A.aI},
ace(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8X()){w.c.F(x.q).f.P(D.etf)
return}w.a7O(d)
w.aWb(C.bya(d))
return}if(C.c9v(v)){w.a7O(d)
w.aWb(d)
return}w.n(new C.ef2(w,d))},
aol(){var w,v,u,t,s,r,q=this
q.a_T(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kh(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.ed5(q))
if(r&&q.c!=null){u.toString
q.Ig(u,s)}return}q.rJ()
q.n(new C.ed6(q))},
aWa(d){this.a7O(d)
this.Yu(d,!0)},
a7O(d){if(!C.kh(d.w))return
C.fnz(d,this.d)},
Yu(d,e){return this.c5S(d,e)},
aWb(d){return this.Yu(d,!1)},
c5S(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bya(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN9():r)
t.dy.W(0,q.toLowerCase())
C.ane(t.a.c,q)}r=s}else r=d
w=C.c9v(r.w)?3:4
break
case 3:w=5
return B.b(t.a7P(r),$async$Yu)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bf(t.d,new C.efp(l))
o=l.a.hs()
n=C.kh(o.w)&&C.hLI(o)
t.n(new C.efq(t,o,p))
if(n){m=A.d.bh(t.d,new C.efr(o))
if(m>=0){t.d[m]=o.hs()
t.rJ()}}if(!t.a9q(l.a))t.WK()
r=!1
if(t.c!=null)if(!t.a9q(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anN(r)&&C.fjD(l.a)}else l=r
else l=r
if(l)t.c.F(x.q).f.P(D.etP)
case 1:return B.h(u,v)}})
return B.i($async$Yu,v)},
a7P(d){return this.bH9(d)},
bH9(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l_(r.c,A.y2),$async$a7P)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kF(!1,r,s.c,s.d,null,A.y2,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7P,v)},
nu(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c9v(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c8U(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nu,v)},
abX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.ef1(),s,null,!0,!0,x.H),$async$abX)
case 3:if(t.c==null){w=1
break}t.aol()
case 1:return B.h(u,v)}})
return B.i($async$abX,v)},
abW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eeZ(),s,null,!0,!0,x.H),$async$abW)
case 3:if(t.c==null){w=1
break}t.n(new C.ef_())
t.aol()
case 1:return B.h(u,v)}})
return B.i($async$abW,v)},
WK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ax(),$async$WK)
case 3:r=e
if(B.kr(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ao("Bool","ngmy_marriage_hint_seen",!0),$async$WK)
case 4:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.erT)
case 1:return B.h(u,v)}})
return B.i($async$WK,v)},
Ig(d,e){return this.cfT(d,e)},
cfT(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ig=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ae8(s,t.gDd(),t.gDc(),!0,e,t.d),$async$Ig)
case 9:w=4
break
case 6:w=10
return B.b(C.ae9(s,t.gDd(),t.gDc(),!0,e,t.d),$async$Ig)
case 10:w=4
break
case 7:w=11
return B.b(C.aea(s,t.gDd(),t.gDc(),!0,e,t.d),$async$Ig)
case 11:w=4
break
case 8:w=12
return B.b(C.aeb(s,t.gDd(),t.gDc(),!0,e,t.d),$async$Ig)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ig,v)},
bTx(){var w,v,u,t,s=this
if(!s.ga8X()){s.c.F(x.q).f.P(D.es5)
return}w=s.gN9()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ae7(u,t,v,new C.eeh(s),new C.eei(s),w)},
acf(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(A.dw,null,new C.ef8(u),s,!0,!0,!1,A.l4,!1,!1,x.N),$async$acf)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeb(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ae8(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ae9(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aea(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bTx()
return B.h(null,v)}})
return B.i($async$acf,v)},
c5_(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aV0()
w=C.cy()
v=C.Au(t,t,t,t,D.B9,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.ef9(u,v))},
a7f(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7f=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hQ0(s),$async$a7f)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e9(q.r,new C.ed9())
t.cZ(new C.eda(t,p,q,r))
s=t.c.F(x.q).f
o=r.r.length
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7f,v)},
aed(d,e,f,g){var w=null,v=g?A.du:A.bM,u=B.H(g?A.bf:A.cq,A.r,1)
return B.hI(B.aJ(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Yt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.px()){w=1
break}s=t.jl()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a5<1>")
p=B.z(new B.a5(r,new C.efk(),q),q.k("G.E"))}o=s!=null&&s.b===D.l3?B.a([s],x.u):p
if(o.length===0){t.c.F(x.q).f.P(D.eu_)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.efl(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yt)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yt,v)},
acw(){return this.c5R()},
c5R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hPN(s,t.f+1,o),$async$acw)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kn(s,B.U(s).c)
p.a=A.d.bh(o.r,new C.efn(q))
t.cZ(new C.efo(p,t,o,q,r))
t.c.F(x.q).f.P(D.euo)
case 1:return B.h(u,v)}})
return B.i($async$acw,v)},
acD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()||!t.yT()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a5<1>")
p=B.z(new B.a5(r,new C.efF(),q),q.k("G.E"))
if(p.length===0){t.c.F(x.q).f.P(D.erE)
w=1
break}o=new B.J(p,new C.efG(),B.U(p).k("J<1,Q>")).ft(0,new C.efH())
r=B.S(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.bb(l,A.b_,A.aL),$.au()))}q=t.c
q.toString
w=3
return B.b(B.c1(A.K,null,new C.efI(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acD)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.au()
q.O$=0}if(t.c!=null)t.n(new C.efJ())
case 1:return B.h(u,v)}})
return B.i($async$acD,v)},
aci(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aci=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.h4J(s,new C.De(r,q,p,o==null?"":o)),$async$aci)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.efa(m,n))
s=t.c.F(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aey(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aci,v)},
a7I(){return this.bGw()},
bGw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hQ_(s,t.f+1,l),$async$a7I)
case 3:r=e
q=$.fFe
$.fFe=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.edq())
t.c.F(x.q).f.P(D.erv)
w=1
break}if(!q){s=r.CW
s=C.h3B(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.edr(t,l,r))
t.c.F(x.q).f.P(D.euS)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kn(s,B.U(s).c)
s=l.r
m.a=A.d.bh(s,new C.eds(p))
o=s.length
t.cZ(new C.edt(m,t,l,p,r))
n=s.length-o
s=t.c.F(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
aMa(d,e){if(e){this.ad5()
return}this.c5_(d,!1)},
bCk(){return this.aMa(null,!1)},
ad5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ad5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.bW,null,new C.efP(t),r,!0,!0,!0,A.oq,!1,!1,x.N),$async$ad5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.efQ(t,C.hIy(s).oN()))
case 1:return B.h(u,v)}})
return B.i($async$ad5,v)},
cZ(d){var w=this
if(w.px())return
w.Go()
w.aV0()
w.n(d)
w.IG()
w.nB()
w.oA()},
a5L(){this.cZ(new C.ec4(this,D.ma))},
aNy(){var w=this.gdk()
if(w==null)return
this.cZ(new C.edo(this,w))},
aML(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.edm(this))},
aZ2(d,e){if(this.e==null||d===e)return
this.cZ(new C.efY(this,d,e))},
Mn(d){return this.bEi(d)},
bEi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN9():s)
w=5
return B.b(C.anc(t.a.c,r),$async$Mn)
case 5:t.dy.H(0,r.toLowerCase())
case 4:s=d.a
C.aoB(s)
w=6
return B.b(C.aYR(t.a.c,s),$async$Mn)
case 6:if(t.c==null){w=1
break}t.n(new C.edi(t,d))
w=7
return B.b(t.rJ(),$async$Mn)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mn,v)},
cfQ(d,e){var w=this
if(d.z){w.afW()
return}w.n(new C.efX(w,d,e))
w.oA()},
jl(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UE(d){return this.ch.ce(0,d.a,new C.ed8(d))},
aq9(d){return this.CW.ce(0,d.a,new C.edK())},
a_T(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.VC(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.af$.d.c
if(u!=null)u.jc()},
b1j(){return this.a_T(!0)},
a_R(d){var w,v,u=this
if(u.px())return
if(!u.yT())return
w=u.VC(d)
if(w==null||w.b!==D.cK)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UE(w).saR(0,"")}u.n(new C.ehF(u,d))
$.aT.x1$.push(new C.ehG(u,d,w))},
b1S(d){var w=this
if(d.b===D.cK&&!w.jG()&&w.yT()){w.a_R(d.a)
return}w.awc(d.a)},
awc(d){var w,v,u,t,s,r=this
if(r.jG())return
w=r.r
if(w!=null&&w!==d){v=r.VC(w)
if(v!=null&&v.b===D.cK){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.eh4(r,s,d))
if(s||d==null){t=$.aT.af$.d.c
if(t!=null)t.jc()}},
aIu(){this.cZ(new C.ec5(this))},
om(d){return this.btI(d)},
btI(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$om=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$om)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ec2(t,d))
case 1:return B.h(u,v)}})
return B.i($async$om,v)},
TP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fb(78,1920),$async$TP)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ebT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TP,v)},
TJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(T.BE(t.a.c),$async$TJ)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gah(s)){t.c.F(x.q).f.P(D.evr)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gJ(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c1(null,null,new C.ebQ(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TJ)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.ebR(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TJ,v)},
ap9(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bf(w.gdk().z,new C.edk(v))){w.c.F(x.q).f.P(D.eus)
return}if(w.w===v)w.a_T(!0)
w.cZ(new C.edl(w,v))},
bAC(){var w=this.jl(),v=w==null
if((v?null:w.b)===D.eS)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cK)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJb(d,e){var w=this,v=w.jl(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.ecx(w,v,d,e,t,u))},
bvg(d){return this.aJb(d,null)},
a62(d){return this.bvo(d)},
bvo(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a62=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2Y.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nu(),$async$a62)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jl()
if(s!=null){r=s.b
if(r===D.cK)t.bvg(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eS){r=d.c
t.aJb(r.j(0.88),r)}w=1
break}t.cZ(new C.ecC(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a62,v)},
a61(d){return this.bvm(d)},
bvm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a61=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jl()
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
return B.b(t.nu(),$async$a61)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecA(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a61,v)},
bv6(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.ecw(this,w,d))},
Yy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hPW(r),$async$Yy)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nB()
t.n(new C.efz(t,s))
w=4
return B.b(t.rJ(),$async$Yy)
case 4:if(t.c!=null)t.ace(s)
case 1:return B.h(u,v)}})
return B.i($async$Yy,v)},
a7A(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_T(!0)
t.nB()
s=t.c
s.toString
w=3
return B.b(C.Po(s,q),$async$a7A)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.F(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7A,v)},
Co(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Co=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nB()
t=4
w=7
return B.b(C.aMU(m),$async$Co)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aMj(o,q,m.b),$async$Co)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a4(l)
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Co,v)},
E_(d,e){return this.crV(d,e)},
crV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$E_=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.px()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_T(!0)
t.nB()
s=h.a=t.e.hs()}else{r=A.d.bh(t.d,new C.ehO(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hJw(q?"":s)
o=C.h2x(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a5<1>")
n=B.z(new B.a5(s,new C.ehP(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.cls(n.length,o,s),$async$E_)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hJq(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gJ(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.clr(n,o),$async$E_)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kY(t.d,new C.ehQ(s))
s=h.a.b
w=11
return B.b(t.clp(k.b,s),$async$E_)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hJv(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.F(x.q).f.P(D.evC)
w=1
break}w=12
return B.b(t.clq(j.a,s,o,j.c),$async$E_)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.ehR(h,t,i))
t.oA()
case 1:return B.h(u,v)}})
return B.i($async$E_,v)},
cls(d,e,f){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehk(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
clr(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehj(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
clp(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehd(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
clq(d,e,f,g){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehf(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a90(){var w=null
return B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a91(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ap(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.aa(0,A.G,d.j(0.28),A.dm,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aC,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eo,B.D(B.u(B.a([B.d(g,u,u,u,u,u,u,D.eFm,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQJ(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.R4,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
aQM(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aC,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.Y,!0,w,B.aH(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.D(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mV,w,w,w),A.d5,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A9,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eed(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bR_(d,e,f,g,h,i){return this.aQM(d,e,f,!1,g,h,i)},
art(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VN,w,w,w)},
aQL(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cc,w,new B.b5(B.m(14),A.W),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.mU,w,w,w),new C.eec(d,f),v)},
aQK(d,e){return this.aQL(d,e,null)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oB(l,s.c,s.d),$async$Ix)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.f4(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gag(o.z),n=new B.hJ(l,new C.eh5());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7J(l.charCodeAt(0)==0?l:l,r.b),$async$Ix)
case 4:l=t.a
w=5
return B.b(B.oA(l.c,l.d),$async$Ix)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
GK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oB(q,s.c,s.d),$async$GK)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7J(A.Q.ak(r.ac(),null),r.b+".json"),$async$GK)
case 4:q=t.a
w=5
return B.b(B.oA(q.c,q.d),$async$GK)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GK,v)},
b17(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nB()
u.rJ()
w=u.c
w.toString
v=B.eH(new C.ehE(u,t),!1,null,x.z)
B.a8(w,!1).cr(v)},
FY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$FY)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fnM(),$async$FY)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hMh(s.a)
q=t.c
q.toString
w=5
return B.b(B.c1(A.aH,null,new C.ebY(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FY)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.ebZ(t,s))
w=1
break}if(p==="split")t.cZ(new C.ec_(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FY,v)},
LJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}w=3
return B.b(t.nu(),$async$LJ)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMT(s,null,null),$async$LJ)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ec3(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LJ,v)},
aYQ(d){var w=this.e
if(w==null||!C.kh(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKt(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMT(s,t==null?null:B.aY(t),u)},
a5J(d){return this.btz(d)},
btz(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.evR)
w=1
break}w=3
return B.b(t.aKt(),$async$a5J)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ebV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5J,v)},
adR(d){return this.ceD(d)},
ceD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ev_)
w=1
break}w=3
return B.b(t.aKt(),$async$adR)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.efV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
c1K(){var w,v,u=this
if(u.jG())return
w=new B.P(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cr0()}},
cr0(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.ehM(this,r,(A.o.aw(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bRk(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.eeg(this,r,u.d))},
bVL(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kh(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fkn(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kG&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bVM(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kh(w.w))!==!0)return!0
if(!this.yT())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fkn(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kG&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LS(d){return this.bvN(d)},
bvN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.etQ)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ang(p),$async$LS)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.F(x.q).f.P(D.euu)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gJ(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5b(r)
w=1
break}t.n(new C.ecG(t,d,o))
t.nB()
$.aT.x1$.push(new C.ecH(t))
case 1:return B.h(u,v)}})
return B.i($async$LS,v)},
TN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$TN)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byP(),$async$TN)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ebS(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TN,v)},
MB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$MB)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jl()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fnD(r),$async$MB)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.edI(s,q))
case 1:return B.h(u,v)}})
return B.i($async$MB,v)},
iA(d){this.cZ(new C.ec0(this,d))},
pm(d){return this.bv_(d)},
bv_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.px()){w=1
break}m=!D.aHh.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nu(),$async$pm)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FY()
w=1
break A
case"sign_paper":t.LJ()
w=1
break A
case"hd_photo":t.TN()
w=1
break A
case"sharpen":t.MB()
w=1
break A
case"print":t.Co()
w=1
break A
case"rotate":s=t.jl()
if(s!=null)t.cZ(new C.ec9(s))
w=1
break A
case"text_box":t.aIu()
w=1
break A
case"picture":t.TP()
w=1
break A
case"present":t.b17()
w=1
break A
case"new_slide":t.a5L()
w=1
break A
case"export_json":t.GK()
w=1
break A
case"outline_share":t.Ix()
w=1
break A
case"flashcard_tool":t.um(D.Gb)
w=1
break A
case"quiz_tool":t.um(D.Gc)
w=1
break A
case"worksheet_tool":t.um(D.Gd)
w=1
break A
case"duplicate_el":s=t.jl()
if(s==null){w=1
break A}t.cZ(new C.eca(t,s))
w=1
break A
case"delete_el":t.ap9()
w=1
break A
case"bring_fwd":s=t.jl()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecb(t,s))
w=1
break A
case"send_back":s=t.jl()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecm(t,s))
w=1
break A
case"align_left":s=t.jl()
if(s!=null)t.cZ(new C.ecp(s))
w=1
break A
case"align_center":s=t.jl()
if(s!=null)t.cZ(new C.ecq(s))
w=1
break A
case"align_right":s=t.jl()
if(s!=null)t.cZ(new C.ecr(s))
w=1
break A
case"grayscale":case"brighten":t.MB()
w=1
break A
case"flip_h":s=t.jl()
if(s!=null)t.cZ(new C.ecs(s))
w=1
break A
case"flip_v":s=t.jl()
if(s!=null)t.cZ(new C.ect(s))
w=1
break A
case"rectangle":t.om(D.ba)
w=1
break A
case"circle":t.om(D.ey)
w=1
break A
case"triangle":t.om(D.jm)
w=1
break A
case"arrow":t.om(D.Bb)
w=1
break A
case"line":case"divider":t.om(D.fe)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.hJ(q,new C.ecu()),o=0;p.C();){n=A.a.fl(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a5(n,new C.ecv(),B.U(n).k("a5<1>")).gI(0)}t.c.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cy()
t.iA(C.iJ(A.L,!1,t.gpB().d.l(),A.az,40,A.bg,A.u,0.18,q,"Presentation Title",0,D.mb,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cy()
t.iA(C.iJ(A.L,!1,t.gpB().e.l(),A.az,22,A.bg,A.a4,0.12,q,"Subtitle goes here",0,D.da,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iA(C.iJ(A.be,!0,4279310375,A.az,20,A.bg,A.a4,0.5,C.cy(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tg,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iA(C.iJ(A.be,!1,4279310375,A.az,20,A.bg,A.a4,0.5,C.cy(),"1. First item\n2. Second item\n3. Third item",0,D.tf,0.8,0.1,0.22))
w=1
break A
case"quote":t.iA(C.iJ(A.L,!1,4279310375,A.az,24,A.cx,A.a4,0.25,C.cy(),'"Insert meaningful quote here."',0,D.da,0.8,0.1,0.3))
w=1
break A
case"citation":t.iA(C.iJ(A.be,!1,4284773515,A.az,14,A.bg,A.a4,0.1,C.cy(),"Author, Title (Year). Publisher.",0,D.tg,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iA(C.iJ(A.dL,!1,4279310375,A.az,14,A.bg,A.a4,0.08,C.cy(),C.byR(),0,D.da,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iA(C.iJ(A.dL,!1,4279310375,A.az,13,A.bg,A.a4,0.06,C.cy(),"Page "+(t.f+1),0,D.da,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.ecc(t))
w=1
break A
case"footer_bar":t.cZ(new C.ecd(t))
w=1
break A
case"highlight":t.cZ(new C.ece(t))
w=1
break A
case"redact":t.cZ(new C.ecf(t))
w=1
break A
case"callout":t.cZ(new C.ecg(t))
w=1
break A
case"checkboxes":t.iA(C.iJ(A.be,!1,4279310375,A.az,20,A.bg,A.a4,0.45,C.cy(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.da,0.8,0.1,0.2))
w=1
break A
case"table":t.iA(C.iJ(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.55,C.cy(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.da,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.ech(t))
w=1
break A
case"letter":t.iA(C.iJ(A.be,!1,4279179050,A.az,17,A.bg,A.a4,0.82,C.cy(),C.byR()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.da,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iA(C.iJ(A.be,!1,4279310375,A.az,22,A.bg,A.O,0.76,C.cy(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tg,0.8,0.1,0.12))
w=1
break A
case"toc":t.iA(C.iJ(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.76,C.cy(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.da,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iA(C.iJ(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.08,C.cy(),"Signature: _________________________",0,D.da,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iA(C.iJ(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.08,C.cy(),"Initials: ______",0,D.da,0.3,0.65,0.78))
w=1
break A
case"approved":t.iA(C.iJ(A.L,!1,4278556265,A.az,28,A.bg,A.u,0.12,C.cy(),"APPROVED",0,D.mb,0.32,0.62,0.08))
w=1
break A
case"draft":t.iA(C.iJ(A.L,!1,4292617766,A.az,28,A.bg,A.u,0.12,C.cy(),"DRAFT",0,D.da,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iA(C.iJ(A.L,!1,871318596,A.az,36,A.bg,A.u,0.12,C.cy(),"CONFIDENTIAL",0,D.da,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.eci(t))
w=1
break A
case"progress":t.cZ(new C.ecj(t))
w=1
break A
case"stars":t.iA(C.iJ(A.L,!1,4279310375,A.az,36,A.bg,A.a4,0.12,C.cy(),"\u2605\u2605\u2605\u2605\u2606",0,D.pn,0.8,0.1,0.4))
w=1
break A
case"equation":t.iA(C.iJ(A.L,!1,4279310375,A.az,32,A.bg,A.O,0.14,C.cy(),"y = mx + b",0,D.da,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iA(C.iJ(A.L,!1,4279310375,A.az,18,A.bg,A.a4,0.2,C.cy(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tf,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.eck(t))
w=1
break A
case"compare":t.cZ(new C.ecl(t))
w=1
break A
case"link_text":t.iA(C.iJ(A.be,!1,4280640491,A.mf,16,A.bg,A.a4,0.1,C.cy(),"https://example.com",0,D.da,0.8,0.1,0.5))
w=1
break A
case"phone":t.iA(C.iJ(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.1,C.cy(),"(555) 123-4567",0,D.da,0.8,0.1,0.5))
w=1
break A
case"email":t.iA(C.iJ(A.be,!1,4280640491,A.az,18,A.bg,A.a4,0.1,C.cy(),"name@email.com",0,D.da,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.ecn(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.eco(t,r))
w=1
break A
case"invoice":t.iA(C.iJ(A.be,!1,4279179050,A.az,16,A.bg,A.a4,0.84,C.cy(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.da,0.8,0.1,0.08))
w=1
break A
case"resume":t.iA(C.iJ(A.be,!1,4279179050,A.az,17,A.bg,A.a4,0.84,C.cy(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.da,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iA(C.iJ(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.88,C.cy(),"MEETING MINUTES\nDate: "+C.byR()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.da,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iA(C.iJ(A.be,!1,4279310375,A.az,17,A.bg,A.a4,0.88,C.cy(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.da,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iA(C.iJ(A.be,!1,4279310375,A.az,15,A.bg,A.a4,0.8,C.cy(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.da,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pm,v)},
ckV(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.emP.t(0,this.z)},
ckU(d){if(this.jl()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2G(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cd,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hM6(d)
s=o?12:18
r=o?A.I:A.cF
if(o)if(e)q=f
else q=g?A.al:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.M(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Lu,A.h,p,p,D.Ct,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hi,B.aJ(p,new B.am(A.V,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bGM(d){var w,v=null,u=this.jl()
if(u==null)return A.bE
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.J(D.NU,new C.edH(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
um(d){return this.btH(d)},
btH(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$um=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aHd.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nu(),$async$um)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ec1(t,d))
case 1:return B.h(u,v)}})
return B.i($async$um,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.elX
w=h.e
if(w==null)return h.bxo()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.L(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bP,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.ep,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b18
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQs()}else j=!1
if(j)k.push(new C.a5F(h.a.c,!1,h.e.gb4S(),h.gc1H(),g))
else if(s&&h.e!=null&&!h.jG()&&C.c9v(h.e.w)){j=h.a
k.push(new C.a5F(j.c,j.d,g,h.gc2Q(),g))}if(s)k.push(h.bGI(w,t,r))
if(s&&h.jG()){w=t?A.fs:A.jZ
j=B.m(14)
i=B.H(A.bj.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bxI,A.aa,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fs,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zC,A.iH,g,g,g))}w=!n
if(w&&!h.jG())k.push(h.bWH(t,r))
if(w&&h.jG())k.push(h.crW(t))
if(r&&h.jl()!=null&&w&&!h.jG())k.push(h.bWD(t))
j=B.a([],l)
if(q&&w)j.push(new B.a3(132,g,h.b0E(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a3(g,72,h.b0E(t,!1),g))
i.push(B.D(new B.bF(A.b0,g,g,h.byE(v,t,!s||p),g),1))
if(h.ckV(r)&&u&&s&&!h.jG())i.push(h.c1v(v,t,r))
j.push(B.D(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jG()&&h.ckU(!1))j.push(new B.a3(240,g,h.bJf(t),g))
k.push(B.D(B.B(j,A.af,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a3(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bWE(t))
return B.cd(g,m,B.br(!1,new B.am(A.V,g,A.a9,A.q,w,g),!0,!1,A.ah,!0,!0),g,!1,!1,g,!1)},
bxo(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.L(p).ax.a===A.H
p=w?A.bW:A.bM
v=r.a.e
u=r.c0L(A.bj,A.p2,new C.ecK(r),r.gc4X(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aId(A.bj,A.hN,"Blank Presentation",new C.ecL(r)),1),A.aw,B.D(r.aId(A.aW,A.xa,"Class Template",new C.ecM(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bt,s,A.me,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ab],t)
t=r.d
if(t.length===0)u.push(r.but(w))
else{t=new B.hv(t,B.U(t).k("hv<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ecN(r,w),x.l))}return B.cd(q,p,B.br(!1,B.cL(u,q,new B.M(18,12,18,v),q,q,A.ai,!1),!0,!1,A.ah,!0,!0),q,!1,!1,q,q)},
bF6(){this.n(new C.edn(this))
var w=this.c
w.toString
if(B.aG(w,A.bP,x.w).w.a.a<900){w=$.aT.af$.d.c
if(w!=null)w.jc()}},
acx(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jl()==null){w=1
break}s=t.c
s.toString
s=B.L(s)
r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.efy(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acx)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acx,v)},
zP(d,e){return this.clf(d,e)},
clf(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hM(D.TC,!0,"Dismiss",j,new C.eh6(),new C.eh7(d,e),A.ii,!0,x.N),$async$zP)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afW()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQs()){r.afW()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aMU(d),$async$zP)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aMj(j,q,d.b),$async$zP)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a4(i)
j=r.c
if(j==null){w=1
break}j.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.E_(d,!1),$async$zP)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hM(D.TC,!0,"Dismiss",j,new C.eh8(),new C.eh9(d),A.Y,!0,x.y),$async$zP)
case 20:if(g===!0)r.Mn(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adB("Rename presentation",d.b),$async$zP)
case 24:l=g
if(l!=null)r.cfQ(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.m(0,"id",C.cy())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.eha(r,k))
r.oA()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zP,v)},
aWQ(d,e){var w=null
return B.bG(!1,D.f1p,w,w,!0,w,w,e,w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.at,w,A.lp,w,w,w,w,w,A.k6,w,w))},
but(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ec6(this,d),null)},
bDe(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.edb(),x.dv).bZ(0,new C.edc()),v=B.z(w,w.$ti.k("G.E"))
return new B.C(G.acf,this.aIM(v,e,new C.edd(),f),null)},
aIM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eA)
t=e.j(g?0.14:0.1)
s=new B.b3(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.al:A.bx,n,n,n,10),A.vc],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.aZ,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.no,n,n,n))
A.d.v(l,u)}return B.eX(A.a3,B.B(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
bur(d,e,f){return this.aIM(d,e,null,f)},
bDg(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cVE
else if(v==="hati_kuhoweya")w=D.cJ0
else{if(v==="hati_kiapo_uongozi")v=D.cwU
else v=C.kh(v)?D.cDq:A.Nx
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.edg(this,f,d,e,w),null)},
bWE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jl()
if(i==null||i.b!==D.cK)return A.bE
w=k.UE(i)
v=k.aq9(i)
u=A.x.j(0.55)
t=x.p
s=B.br(!1,new B.C(A.zF,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bG(!1,D.eYp,j,j,!0,j,j,new C.eeH(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ah,!0,!0)
r=d?A.aH:A.c
q=B.m(18)
p=B.H(A.bj.j(0.45),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h4,B.bT(new B.C(A.eH,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bj,j,j,j,j,2,D.bDt,A.z,!0,j,!0,j,!0,v,A.ag,j,j,j,j,j,A.ve,j,j,j,j,j,j,!1,"\u2022",j,new C.eeI(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.yi,A.am,j,A.QB,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.b9),j),1)
q=B.m(16)
p=d?A.bi:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.D(B.ch(B.B(B.a([k.t5(G.KA,j,new C.eeJ(k,i),d),k.t5(G.WN,j,new C.eeK(k,i),d),k.t5(I.agk,j,new C.eeL(k,i),d),k.t5(I.Xw,j,new C.eeM(k,i),d),k.t5(k.bup(i.as),j,new C.eeN(k,i),d),k.t5(D.ahu,j,new C.eeO(k,i),d),k.t5(D.aht,j,new C.eeP(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aZ),1)
m=A.k.N(i.w)
return B.bZ(0,B.aD(!1,A.Y,!0,j,B.u(B.a([s,r,new B.C(D.bfb,B.p(j,B.B(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d6],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lr,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bWD(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jl()
if(m==null)return A.bE
w=m.b
v=w===D.cK
u=B.m(18)
t=x.O
t=d?B.a([A.bi,A.M],t):B.a([A.c,A.aO],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.aa(0,A.G,A.x.j(0.12),A.cs,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_j(A.j1,"Edit",new C.ees(o,m),d,!0))
if(w===D.l3)p.push(o.b_j(A.ED,"Shape & ring",new C.eet(o),d,!0))
p.push(o.t5(Av.EL,"Format",new C.eeu(o),d))
if(v)A.d.v(p,B.a([o.t5(G.KA,n,new C.eev(o,m),d),o.t5(D.ahu,n,new C.eew(o,m),d),o.t5(D.aht,n,new C.eex(o,m),d)],q))
p.push(A.b7)
p.push(o.cja(A.e4,n,o.gaMJ(),d,!0))
p.push(o.t5(A.hl,"Done",new C.eey(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.w,t,n,n),A.n),n,n,n,A.DD,A.lr,n,n,n)},
bup(d){switch(d.a){case 2:return D.Xt
case 1:case 5:return D.Xv
default:return D.Xu}},
bXt(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dL
default:return A.be}},
awb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aG
else if(h)w=A.c
else{v=g?A.al:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.F0:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eA,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qd,B.aD(!1,A.Y,!0,n,B.aH(!1,v,!1,B.eq(new B.C(new B.M(q,8,q,8),B.B(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t5(d,e,f,g){return this.awb(d,e,f,g,!1,!1)},
b_j(d,e,f,g,h){return this.awb(d,e,f,g,h,!1)},
cja(d,e,f,g,h){return this.awb(d,e,f,g,!1,h)},
bGI(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bi,A.M],m):B.a([A.c,A.mo],m)
w=B.H(e?A.aI:A.pV,A.r,1.2)
v=B.a([new B.aa(0,A.G,A.bj.j(e?0.18:0.1),A.cs,18)],x.V)
u=p.a0i(A.et,"Back",p.gbAm(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d6,B.D(B.B(B.a([new B.dp(1,A.cj,t,o),A.aa,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rt,o,A.e,A.j,0,A.cQ,o),1)],q)
if(!p.jG()){u=p.a0i(A.uH,"Undo",p.ax.length===0?o:p.gcsq(),e)
A.d.v(r,B.a([u,p.a0i(D.brl,"Redo",p.ay.length===0?o:p.gcez(),e)],q))}r.push(p.a0i(A.wS,"PDF",new C.edA(p),e))
r.push(p.a0i(A.hm,"Download as video",new C.edB(p),e))
if(!p.jG())r.push(B.AI(o,o,B.V(A.nr,e?A.al:A.bx,o,o,o,o),new C.edC(p),A.J,new C.edD(p),A.ah,"More",x.N))
r.push(A.d6)
r.push(B.aD(!1,A.Y,!0,o,B.aH(!1,B.m(14),!0,B.eq(D.dNO,o,new B.o(o,o,o,B.m(14),o,K.F0,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gax_(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aC,A.w,m,o,o),A.n),o,o,o,D.bf6,D.bkc,o,o,o)},
crW(d){var w=this,v=null,u=B.m(18),t=d?A.aH.j(0.92):A.c.j(0.96),s=B.H(d?A.d_:A.aJ,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.ij(A.rY,"Print",new C.ehS(w),d),w.ij(A.wS,"Download PDF",new C.ehT(w),d),w.ij(A.p8,"Present",w.gax_(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aZ),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zC,G.ae_,v,v,v)},
a0i(d,e,f,g){var w,v=null
if(f==null)w=g?A.bf:A.ds
else w=g?A.al:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bWH(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aH.j(0.92):A.c.j(0.96)
u=B.H(d?A.d_:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.J(p,new C.eeS(r,d),t),t.k("ai.E"))
t.push(new B.C(W.adG,new B.fi(new C.eeT(r),q),q))
A.d.v(t,w?B.a([new B.C(S.um,r.aed(A.kX,"Ending celebration",r.gc59(),d),q),new B.C(S.um,r.aed(A.ED,"Logo ring & frame",r.gc5P(),d),q)],x.p):A.fV)
A.d.v(t,w?B.a([new B.C(S.um,r.aed(A.ns,"Look and feel",r.gc5Q(),d),q),new B.C(S.um,r.aed(A.pc,"Edit this slide's text",r.gc6l(),d),q)],x.p):A.fV)
t.push(new B.C(S.um,B.hI(B.aJ(q,B.p(q,D.elr,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.aa(0,A.G,O.kU.j(0.4),A.J,10)],x.V),D.ajr,A.n),q,34,q,q,A.im,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eeU(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bkE,q,q,A.aZ)
s=e?8:10
return B.p(q,B.u(B.a([t,B.ch(r.cgX(d),A.q,q,A.z,q,new B.M(8,2,8,s),q,q,A.aZ)],x.p),A.af,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zC,q,q,q,q)},
cgX(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cQb[v]
u.a=null
s=u.a=t.b
w.push(e.lc(e.ciB(s),t.a,new C.egg(u,e),a3,D.aHd.t(0,s)))}w.push(e.ij(A.kz,"Notes Slide",new C.egh(e),a3))
w.push(e.lc(A.EC,"Quiz",new C.egi(e),a3,!0))
w.push(e.lc(L.Ef,"Worksheet",new C.egt(e),a3,!0))
w.push(e.lc(P.EH,"Flashcard",new C.egE(e),a3,!0))
w.push(e.lc(A.Ll,"Lab Report",new C.egP(e),a3,!0))
w.push(e.lc(A.wY,"Rubric",new C.egW(e),a3,!0))
w.push(e.lc(A.oa,"Minutes",new C.egX(e),a3,!0))
w.push(e.lc(A.p6,"Syllabus",new C.egY(e),a3,!0))
w.push(e.lc(A.Lp,"Timeline",new C.egZ(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cRl[v]
w.push(e.lc(r.b,r.c,new C.eh_(e,r),a3,!D.aHh.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ij(A.xd,a0,e.gaIt(),a3),e.ij(A.rV,"Picture",new C.egj(e),a3),e.ij(A.x7,"Bio link",new C.egk(e),a3),e.ij(A.Y3,"Table",new C.egl(e),a3),e.ij(A.Lo,"Sticky",new C.egm(e),a3),e.ij(A.ux,"Divider",new C.egn(e),a3),e.ij(A.EM,"Header",new C.ego(e),a3),e.lc(A2.Em,"Rectangle",new C.egp(e),a3,!0),e.lc(A.rN,"Circle",new C.egq(e),a3,!0),e.lc(A.Xk,"Triangle",new C.egr(e),a3,!0),e.lc(A.jh,"Arrow",new C.egs(e),a3,!0),e.lc(D.bpP,"Parallelogram",new C.egu(e),a3,!0),e.lc(D.bsi,"Hexagon",new C.egv(e),a3,!0),e.lc(A.ux,"Line",new C.egw(e),a3,!0),e.lc(A.wS,"PDF",new C.egx(e),a3,!0),e.lc(O.Yb,"Signature",new C.egy(e),a3,!0),e.ij(A1.Af,"Quote",new C.egz(e),a3),e.ij(D.WV,a1,new C.egA(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bP,x.w).w
u=x.p
t=B.B(B.a([e.aJi("Wide 16:9",D.B9,a3),e.aJi("Short 9:16",D.nz,a3),new B.C(A.hi,B.mH(D.bup,d,D.eV1,d,new C.egB(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bAB("This slide",!e.Q,a3,new C.egC(e)),A.bp,e.aLt("All slides",e.Q,a3,new C.egD(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bAC()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.J(D.ZZ,new C.egF(e),n),n.k("ai.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cS7[v]
j=B.aY(k)
i=new B.ay(k===4294967295?A.ds:A.bf,1.5,A.r,-1)
l.push(new B.C(A.hi,B.aJ(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.egG(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.ch(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bA6()
g=B.U(h).k("J<1,C>")
h=B.z(new B.J(h,new C.egH(e,a3),g),g.k("ai.E"))
return new B.a3(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ch(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ),A.ar,e.bTE(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jl()
w=e.c
w.toString
w=B.aG(w,A.bP,x.w).w
u=new C.egf(e)
t=new C.eh0(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NU,f.dy,new C.egI(e,u,f),A.aW)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NU,q,new C.egJ(e,u),A.bj))
return new B.a3(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ij(A.kz,w,new C.egK(e),a3),e.ij(A.rY,"Print deck",new C.egL(e),a3),e.lc(D.aft,"Export JSON",new C.egM(e),a3,!0),e.ij(A.fB,"Duplicate Slide",e.gaNx(),a3),e.ij(A.e4,a2,e.gaMK(),a3),e.cmy(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jl()
w=x.p
u=B.a([e.ij(D.WV,a1,new C.egN(e),a3),e.ij(A.fB,"Duplicate",e.gaNx(),a3),e.ij(A.e4,a2,e.gaMK(),a3),e.ij(A.p8,"Present",e.gax_(),a3),e.ij(A.Am,a0,e.gaIt(),a3),e.ij(A.Ez,"Fit Text",new C.egO(e),a3),e.ij(A.wS,"Download PDF",new C.egQ(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ij(A.kB,"Transfer",new C.egR(e),a3))
if(f!=null){w=B.a([A.aa,e.ij(G.KA,"Bold",new C.egS(e,f),a3),e.ij(G.WN,"Italic",new C.egT(e,f),a3),e.ij(G.af4,"Underline",new C.egU(e,f),a3),e.ij(Aa.KB,"Bullets",new C.egV(e,f),a3),e.bIZ(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bGM(a3))
w.push(e.ij(D.bow,"Delete",e.gaMJ(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJi(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nz
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4x,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d6,D.btB],v))
return new B.C(A.hi,B.jP(t,t,t,B.B(u,A.m,t,A.e,A.R,0,t,t),t,new C.ecF(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cmy(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bE
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.bf:A.cq,A.r,1)
u=B.m(8)
t=B.V(A.Ec,d?A.aA:A.ak,q,q,q,14)
s=B.aF(q,q,q,q,D.ais,q,q,q,new C.ehn(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aii,q,q,q,new C.eho(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.DT,A.lY,q,q,q)},
ciB(d){switch(d.a){case 6:return P.EH
case 7:return A.EC
case 8:return L.Ef
case 4:return A.EM
default:return A.kz}},
bIZ(d,e){var w=null,v=B.H(e?A.bf:A.cq,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.ais,w,w,w,new C.edN(this,d),w,w,w,w,w,A.c6),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aii,w,w,w,new C.edO(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wC,A.lY,w,w,w)},
bTE(d){var w=null
return B.AI(B.C9(B.V(Ad.WY,d?A.al:A.bx,w,w,w,16),w,w,D.f_6,w,w,w),w,w,new C.eek(),A.J,this.gbv5(),A.ch,"Slide layout",x.fO)},
lc(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.H(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dE:A.bj,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Lu,A.h,w,w,D.Ct,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hi,B.aD(!1,A.Y,!0,w,B.aH(!1,v,!0,B.eq(new B.C(A.h4,B.u(B.a([new B.am(A.V,w,A.a9,A.h,q,w),A.d5,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bx,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ij(d,e,f,g){return this.lc(d,e,f,g,!1)},
b0E(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ai:A.aZ
v=B.hE(t,new C.ehz(u,s,e,d),s.r.length,A.ch,t,w,new C.ehA(e),!1)
s=d?A.aH:A.bM
w=B.a([],x.p)
if(e&&!u.jG())w.push(new B.C(A.ch,B.Gd(E.aiF,new C.ehB(u),B.nM(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aHU,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
byE(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nz?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.M(u,u,u,u),new B.bF(A.b0,v,v,new B.fI(w,B.aJ(v,B.cj(new C.ed3(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ed4(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
byG(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kh(a9.w))===!0,b1=b0&&C.fkn(b3),b2=b0&&b3.b===D.kG&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jG())v=!b0||a7.bVM(b3)
else v=!1
if(!a7.jG())u=!b0||a7.bVL(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bj
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fI_(b3))o=a8
else if(p&&!a7.jG())o=a7.gc1J()
else o=a7.jG()?a8:new C.ecS(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c3:A.jF
i=w&&C.fI_(b3)&&a7.yT()?new C.ecT(a7,b3):a8
h=v&&b3.b===D.cK?new C.ecU(a7,b3):a8
g=u?new C.ecV(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.br
else e=q?A.bR:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bR.j(0.08)
else a0=b3.b===D.kG?A.K:a8
if(b1){a1=a7.jG()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bR.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bP,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yT()
a3=b3.b===D.cK
a4=a3?a7.UE(b3):a8
a5=a3?a7.aq9(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bP,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ecW(a7,b3):a8
a3=v&&a3?new C.ecX(a7,b3):a8
a6=C.aYN(q,a4,a1,b3,a5,a2,a3,new C.ecY(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.bwn,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ecZ(a7,b3,b4,b5),a8,a8,new C.ed_(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jG()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bx1,A.h,a8,a8,new B.o(A.fc,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbRj(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jG()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.byz,A.h,a8,a8,new B.o(A.bR,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ed0(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cK)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bP,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.at(B.aJ(a8,B.p(a8,D.f79,A.h,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kw,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ed1(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.et(A.A,f,new B.am(A.V,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cw("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLt(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bj:A.bG,A.r,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d6,B.p(r,D.Lu,A.h,r,r,D.Ct,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.B(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h3,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bAB(d,e,f,g){return this.aLt(d,e,f,g,!1)},
c1v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.au()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.bb(v,A.b_,A.aL),$.au()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aH:A.aO
t=f?A.vF:l
if(f)s=new B.c2(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.aa(0,A.G,A.x.j(0.12),A.to,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.al:A.bx,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.aWQ(e,new C.eeW(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bm(l,new B.b2(4,B.m(10),A.dc),l,A.bQ,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eeX(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.am,l,l,l,l),1)],q),A.af,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.M(12,w,12,v),l,l,l)},
aON(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jl()
if(a2==null)return A.bE
w=new C.ee0(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dK:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.aWQ(a3,a0.gbF5())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.eVs,B.D(B.ma(a1,a1,a1,u,0.05,new C.ee1(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.f5K,B.D(B.ma(a1,a1,a1,t,0.05,new C.ee2(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cK
if(m)o.push(B.B(B.a([D.ePK,B.D(B.ma(a1,a1,a1,96,10,new C.ee3(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l3
if(l||n===D.kG||n===D.Pa)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.f_K,B.D(B.ma(a1,a1,a1,s,0,new C.ee4(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.f6U,B.D(B.ma(a1,a1,a1,r,0,new C.ee5(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.AB[j]
i.a=null
g=h.a
i.a=g
k.push(B.jP(a1,a1,a1,new B.w(h.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ee6(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c8(A.bH,k,A.bw,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Aw[j]
f.a=null
g=e.a
f.a=g
h.push(B.jP(a1,a1,a1,new B.w(e.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ee7(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.c8(A.bH,h,A.bw,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.J(v,new C.ee8(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.c8(A.bH,l,A.bw,6,6),A.ab,B.fTN(new C.ee9(w,a2),D.c8l,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eS){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.J(v,new C.eea(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c8(A.bH,m,A.bw,0,6)],p))}o.push(A.ab)
o.push(B.dn(D.byl,D.f1z,new C.eeb(a0,a5),B.bk(A.bS,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.ai,a5)
if(a5)return d
q=a3?A.d_:A.c
p=a4?A.vF:a1
if(a4)o=new B.c2(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.aa(0,A.G,A.x.j(0.12),A.to,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.DE,a1,a1,a1)},
bJf(d){return this.aON(d,!1,!1,null)},
c0L(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.eee(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eGe,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bb,B.D(B.u(B.a([w,A.bA,A.d5,r.bur(D.cB7,d,B.L(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dP(B.hI(B.aD(!1,A.Y,!0,q,B.aH(!1,q,!0,B.eq(D.eqi,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.aa(0,A.G,A.bR.j(0.4),A.e6,8)],p),D.ajw,A.a5),q,q,q),A.cC,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.L(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aZh,D.aZD],v):B.a([A.c,A.jZ],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.aa(0,A.G,d.j(s?0.18:0.1),A.cs,14)],p),new B.a7(A.ax,A.aC,A.w,v,q,q),A.n),q,q,q,q,A.bQ,q,q,q)},
aId(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ebO(this,g,d,e,f),null)},
adB(d,e){return this.ccY(d,e)},
ccY(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.au()
q=new B.ao(new B.bb(e,A.b_,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.efT(d,q),p,null,!0,!0,x.N),$async$adB)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adB,v)},
O8(d){var w=d.bP()
return""+B.bB(w)+"/"+B.bQ(w)+"/"+B.bw(w)}}
C.acS.prototype={}
C.aw6.prototype={
S(){return new C.b98(null,null)}}
C.b98.prototype={
gcoD(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bB(u)+"/"+B.bQ(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.oW,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bi(u,D.bdD,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bo2()},
Hz(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.av(0,new B.hC(w,v,A.co).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.C(D.bj4,B.c4(new B.h2(B.a([u,w],x.dS)),new C.cVq(this),v),v),v,v,v)}}
C.b9m.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.at(new B.C(D.bjl,B.aD(!1,A.Y,!0,w,B.p(w,B.bu(B.m(22),B.u(B.a([new B.C(D.biy,B.u(B.a([B.p(w,D.bx7,A.h,w,w,new B.o(A.aG.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.f3s,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eHk,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bcH,B.B(B.a([B.D(B.bG(!1,D.eTR,w,w,!0,w,w,new C.cVM(d),w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.mz,w,A.nD,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bi,w,w,w,48,w,w,w,w,w,1),B.D(B.bG(!1,D.eYI,w,w,!0,w,w,new C.cVN(d),w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.aG,w,w,w,w,w,A.mz,w,A.nD,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.Sz,new B.o(A.aH,w,u,v,D.cBq,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.Ib.prototype={
S(){return new C.b97()}}
C.b97.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.aa(0,A.G,m.j(0.08),A.dH,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.h,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d7(B.aJ(o,B.w2(B.di(o,B.B(B.a([r,A.aw,new B.dp(1,A.cj,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.fv:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b6,A.R,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,A.qe,o,o,1/0),A.co,A.je,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cVl(p,d),new C.cVm(p),new C.cVn(p),new C.cVo(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.NR.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.Y,!0,t,B.aH(!1,s,!0,new B.C(A.eH,B.B(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aC,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eo,B.D(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mV,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.Yv.prototype={
S(){return new C.aBv(D.da,null,null)}}
C.aBv.prototype={
gWQ(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.bdd,null,1,null,v)
v.w!==$&&B.bH()
v.w=w
u=w}return u},
b12(d){if(!this.a.c.ay)return
this.x=d
this.gWQ().ie(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.at2(D.ewD)
C.hJ3()
v.Px()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWQ().p()
v=w.z
if(v!=null)v.a9(0)
C.at2(D.ewE)
C.hJ6()
w.bq9()},
crn(){B.j7()
this.n(new C.eiy())
var w=this.c.F(x.q).f
w.a2l()
if($.bgN)w.P(D.etv)},
Px(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cN(B.dB(0,0,0,0,0,A.o.D(C.fRY(u,w),1,120)),new C.eio(v))},
cr2(){var w,v=this
v.n(new C.eix(v))
if(v.r)v.Px()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQC(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cll(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.eip(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cN(A.nl,new C.eiq(w))},
asX(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.eik(u))
u.Px()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQC()){u.cll()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.eil(u,A.o.K(w+1,s)))
u.b12(w)
u.Px()}},
cbD(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.eim(v))
v.Px()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.ein(v,w,t))
v.b12(w)
v.Px()}},
cmK(d){var w,v=this,u=v.e
if(u===D.cd){u=v.d
u===$&&B.c()
return new B.n8(d,new B.cw(u,x.ac))}w=v.cmL(u)
u=v.d
u===$&&B.c()
return B.qk(new B.n8(d,new B.cw(u,x.ac)),w,new C.eiv(),A.b8,A.b8,new C.eiw(v))},
cmL(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bdz
case 16:return A.kW
case 18:return A.nj
default:return A.oY}},
cmJ(d,e,f){var w,v,u,t=null,s=B.cE(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.tp,A.J,w),w.k("bd<bC.T>")),t,!0)
case 3:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.Pq,A.J,w),w.k("bd<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.iv,A.J,w),w.k("bd<bC.T>")),t,!0)
case 5:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.tn,A.J,w),w.k("bd<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.cZ(s,!1,e,t),t,new B.bd(s,new B.bl(0.82,1,w),w.k("bd<bC.T>")))
case 7:w=x.b
return B.it(A.A,new B.cZ(s,!1,e,t),t,new B.bd(s,new B.bl(1.18,1,w),w.k("bd<bC.T>")))
case 8:return B.c4(s,new C.eir(s),e)
case 9:return B.c4(s,new C.eis(s),e)
case 10:return B.c4(s,new C.eit(s),e)
case 11:return B.c4(s,new C.eiu(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.it(A.A,e,t,new B.bd(s,new B.bl(1.03,1,w),w.k("bd<bC.T>"))),t)
case 14:w=s.gq(0)
v=x.K
return B.jz(B.jd(e,new B.bd(s,new B.bl(A.tp,A.J,v),v.k("bd<bC.T>")),t,!0),A.q,new C.bnG(w,t))
case 15:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.Pq,A.J,w),w.k("bd<bC.T>")),t,!0)
case 19:w=B.dg()
w.me((1-s.gq(0))*2)
v=s.gq(0)
u=s.gq(0)
w.jf(v,u,v,1)
return B.fm(A.A,B.d7(e,s.gq(0)),t,w,!0)
case 20:return B.et(A.A,(1-s.gq(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.alN(B.c4(n.gWQ(),new C.eiz(n,v,w),m),m),A.q,m)}else{t=B.qV(new C.H9(w,!0,!1,m))
l=B.aY(w.e)
u=n.cmK(B.ec(B.jz(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fRY(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oy,m,m,m),A.bp,D.bzm],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fx,m,m,m)
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
l.push(B.bZ(0,new C.LM(new C.De(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nz?0.5625:1.7777777777777777
l.push(B.at(new B.fI(r,B.jz(B.tN(A.ah,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgN){r=B.Gd(A.kD,new C.eiA(d),B.nM(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.B(B.a([r,A.aa,B.Gd(B.V(n.r?Ag.x5:A.iJ,m,m,m,m,m),n.gcr1(),B.nM(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ah,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hb,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fx,m,m,m),!0,!1,A.ah,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c3,B.p(A.kO,$.bgN?A.bE:s,A.h,m,m,m,m,64,m,m,D.bel,m,m,150),A.z,!1,m,n.gcrm(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ah,!0,!0),m,m,m,0,0,m))
return B.cd(m,A.x,B.aJ(m,new B.am(A.V,m,A.aY,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eiB(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.Ii.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.C(E.ads,this.c,w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aSz,w,w,w,w,w,w,w,w)}}
C.bnG.prototype={
iH(d){return new B.ae(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
ji(d){return d.b!==this.b}}
C.bdZ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPs
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aB:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.di(r,B.at(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uO,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hM,r,64,r,r,r,r,64)
return B.aJ(r,new B.a3(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bdY.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d2t.h(0,p)
if(o==null)o=D.cRr
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.w,o,q,q)
p=p?A.cT.j(0.25):q
v=r.e
u=v?B.H(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahF:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ef,q,q,52)
return B.aJ(q,new B.a3(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aH8.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
C.aJ9.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.btl.prototype={}
C.aJa.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aYQ.prototype={}
C.U4.prototype={
S(){return new C.aBt()},
bbi(d){return this.e.$1(d)}}
C.aBt.prototype={
gb_p(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7Y(){var w,v
if(this.d==="all")return B.bj(this.a.d,!0,x.I)
w=this.gb_p()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaK8(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_p()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0D(){return A.d.cI(this.ga7Y(),0,new C.ei4())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gJ(w).a
v.P8()},
P8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZq(s.c,s.f),$async$P8)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ei0(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P8,v)},
HB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7Y()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fnz(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oB(o,q.c,q.f),$async$HB)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eH(new C.ei3(t,p),!1,null,x.H)
w=4
return B.b(B.a8(o,!1).cr(q),$async$HB)
case 4:q=t.a
w=5
return B.b(B.oA(q.c,q.f),$async$HB)
case 5:w=6
return B.b(t.P8(),$async$HB)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HB,v)},
Pv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hl(o,D.dFk,!0,"NgmySlidesTransferScan",x.N),$async$Pv)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.ei1(t))
w=4
return B.b(C.aeY(s),$async$Pv)
case 4:r=e
t.n(new C.ei2(t))
o=J.a6(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.F(x.q).f.P(D.eso)
w=1
break}w=5
return B.b(t.a.bbi(r),$async$Pv)
case 5:q=t.c
if(q==null){w=1
break}B.a8(q,!1).M(null)
q=t.c.F(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pv,v)},
HA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7Y()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oB(s,r.c,r.f),$async$HA)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fnO(null,A.d.gJ(n),s,t.a.f)}else q=C.fnO(n,null,r.c,r.f)
if(n.length===1){s=A.d.gJ(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.F_(q,"ngmy_slides_"+p,!1),$async$HA)
case 4:o=e
s=t.a
w=5
return B.b(B.oA(s.c,s.f),$async$HA)
case 5:w=6
return B.b(t.P8(),$async$HA)
case 6:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HA,v)},
a0t(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.ei5(t))
w=3
return B.b(C.byz(),$async$a0t)
case 3:s=e
t.n(new C.ei6(t))
if(s==null||J.ci(s)){w=1
break}w=4
return B.b(t.a.bbi(s),$async$a0t)
case 4:r=t.c
if(r==null){w=1
break}B.a8(r,!1).M(null)
r=t.c.F(x.q).f
q=J.a6(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.d9:A.bM,k=o.ga7Y().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.w,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.ct,m?A.al:A.ak,n,n,n,n),n,n,n,new C.ei9(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yf],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.aa(0,A.G,A.bj.j(0.35),A.eK,24)],x.V)
u=B.an(n,B.V(A.p2,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bzS,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eo,B.D(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bmS],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hI(B.aJ(A.c3,D.eqk,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc6x(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.V,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.YG,A.n),n,n,n,n,E.VA,n,n,1/0),A.dW,o.atW(m,"What to transfer"),A.ab,B.B(B.a([B.D(o.aSN(A.p8,m,new C.eia(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aSN(D.bpI,m,new C.eib(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d2,o.atW(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aH:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c2,n,n,n))}else A.d.v(v,new B.J(u,new C.eic(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.me)
w.push(o.atW(m,"Transfer options"))
w.push(A.ab)
w.push(B.B(B.a([B.D(o.amY(A.b2,k,!0,A.j4,m,o.r,o.gc0P(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aIe(A.jx,!0,A.iK,m,o.gcib(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.B(B.a([B.D(o.bsZ(A.aS,k,A.hm,m,o.r,o.gc0M(),"Download .json","Backup file"),1),A.aw,B.D(o.aIe(A.aX,!0,Aq.xf,m,o.gctG(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bj.j(0.28),A.r,1)
s=B.V(A.kY,A.bj.j(0.9),n,n,n,18)
r=o.gaK8()
q=o.gb0D()
p=o.gb0D()===1?"":"s"
A.d.v(w,B.a([A.bt,B.p(n,B.B(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.al:A.bx,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.C(Ac.Kd,i,n),B.D(B.cL(w,n,D.bhI,n,n,A.ai,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)],h)
if(o.f)j.push(B.p(n,U.SS,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cd(n,l,new B.am(A.V,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acK(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hPd(s,t.d,t.e),$async$acK)
case 2:return B.h(null,v)}})
return B.i($async$acK,v)},
atW(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSN(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aH:A.c
if(g)w=A.bj
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.aa(0,A.G,A.bj.j(0.2),A.cs,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bj,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.Y,!0,s,B.aH(!1,r,!0,B.eq(new B.C(A.bB,B.u(B.a([t,A.T,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bDf(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aH:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bA0,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.w,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rN
if(p)r=A.bj
else r=e?A.bf:A.ds
return new B.C(A.cI,B.aD(!1,A.Y,!0,q,B.aH(!1,o,!0,B.p(q,B.B(B.a([v,A.bb,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ei_(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
amY(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aH:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qg,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.aic,A.h,s,s,D.aSm,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d7(B.aD(!1,A.Y,!0,s,B.aH(!1,p,!0,B.eq(new B.C(E.Ve,B.u(B.a([new B.am(A.V,s,A.a9,A.h,u,s),A.ab,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aIe(d,e,f,g,h,i,j){return this.amY(d,e,!1,f,g,!1,h,i,j)},
bsZ(d,e,f,g,h,i,j,k){return this.amY(d,e,!1,f,g,h,i,j,k)}}
C.U5.prototype={
S(){return new C.bgM()}}
C.bgM.prototype={
Z(){this.a0()
this.abC()},
abC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fnO(null,A.d.gJ(m),k,r.a.f):C.fnO(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gJ(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kh(A.d.gJ(n).w))C.fnz(A.d.gJ(r.a.d),D.cPB)
n=r.a
m=n.c
n=C.hMm(n.d)
w=7
return B.b(C.fnN(p,C.hMr(r.a.d),n,m,q),$async$abC)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.eid(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.eie(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.L(d).ax.a===A.H,h=i?A.d9:A.bM,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eif())
v=B.aF(j,j,j,j,B.V(A.et,i?A.al:A.ak,j,j,j,18),j,j,j,new C.eig(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yf],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.YG,A.n),j,j,j,j,E.VA,j,j,1/0)
q=B.m(24)
s=B.H(A.b2.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3S,A.L,j,j))
else if(k.d==null)r.push(D.dNp)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.aa(0,A.G,A.aB.j(0.35),A.cs,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eUi,A.ar,B.aJ(j,B.p(j,B.B(B.a([D.bBw,A.aw,B.d(m,j,j,j,j,j,j,D.eHH,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bFh,A.n),j,j,j,j,A_.ade,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eih(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eYf,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pj(j,j,!1,l,j,!0,!0,j,!1,D.ba5),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hV,A.L,j,j))
return B.cd(j,h,B.br(!0,B.u(B.a([new B.C(Ac.Kd,v,j),B.D(B.ch(B.u(B.a([t,A.aN,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bH7,A.n),j,j,j,j,A.rI,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adx,j,j,A.ai),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),j,!1,!1,j,j)}}
C.aBq.prototype={
S(){return new C.aBr(new B.ao(A.aq,$.au()),B.k8(!0,null,!0,!0,null,null,!1))}}
C.aBr.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.ebI(w))
$.aT.x1$.push(new C.ebJ(w))},
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.e.p()
this.a2()},
aV2(){var w,v=this.c
v.toString
w=C.xG(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a8(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.ep,x.w).w,i=B.m(28),h=B.H(A.bj.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.aa(0,A.G,A.bj.j(0.28),A.tm,36),D.a7a],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bxa,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ab,D.eRF,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aSL,k,k,k,k,A.wB,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aH:A.M
o=new B.b3(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.aa(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bE(1,A.bo,B.di(A.A,new B.w(p,k,D.eBH,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.c2(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hM,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.H3)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.d7(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bE9,A.z,!0,k,!0,k,!1,v,A.ag,k,k,B.a([new B.tE(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ad(5,k),new C.bqU()],x.aS),k,k,A.aJ7,k,5,k,1,k,k,!1,"\u2022",k,new C.ebE(l),k,new C.ebF(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.lD,k,k,k,k),0),0,0,0)],a1)
d=C.xG(w.a.a.toUpperCase())==null?k:l.gc0Q()
return B.at(new B.C(new B.M(24,24,24,24+j.f.d),B.aD(!1,A.Y,!0,k,new B.d1(A9.Ij,B.p(k,B.bu(e,B.u(B.a([a0,new B.C(D.bic,B.u(B.a([new B.am(A.V,k,A.a9,A.q,g,k),A.T,D.eQ8,A.bt,new B.a3(1/0,50,B.bI(D.f4h,d,B.bk(A.bj,A.bi,A.ak,k,A.c,k,k,k,new B.b5(B.m(16),A.W),k,k,k)),k),A.ar,B.bG(!1,A.mY,k,k,!0,k,k,new C.ebG(a2),k,B.fp(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.bqU.prototype={
nV(d,e){var w=e.a.toUpperCase()
return e.czC(B.h0(A.bq,w.length),w)}}
C.aoC.prototype={
S(){return new C.aBu(B.yc(A.Jx,A.n4,A.t4))}}
C.aBu.prototype={
p(){this.d.p()
this.a2()},
aV1(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iD(w,d)},
a7S(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fvU(s),$async$a7S)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aV1("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7S,v)},
c0O(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hMp(w[u])
if(t!=null){this.aV1(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uL,s,s,s,t.gbHg(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.rT:Ah.L6,s,s,s,s,s),s,s,s,new C.eij(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.f5s,s,s,s,1,s,!0)
r=B.yb(t.d,A.bO,t.gc0N())
w=B.m(28)
w=B.at(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bj,A.r,3),w,B.a([new B.aa(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cd(p,A.x,new B.am(A.V,s,A.aY,A.q,B.a([r,w,B.an(32,B.p(s,D.eVg,A.h,s,s,new B.o(v,s,B.H(A.bj.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iI,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.br5.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.Y,!0,w,B.p(w,B.u(B.a([B.p(w,D.bvn,A.h,w,w,D.aSv,w,56,w,w,w,w,w,56),A.aN,D.f58,A.ar,new B.k2(this.c,new C.eSV(),w,w,x.cI),A.aN,new B.k2(this.d,new C.eSW(),w,w,x.cl),A.ab,D.f55],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A9.Ij,new B.o(A.aH,w,u,v,w,w,A.n),w,w,w,K.VH,D.biP,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5F.prototype={
S(){return new C.bgv(A.bu)},
gd6(){return this.c}}
C.bgv.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XW()
w.d=B.dD(A.h2,new C.e2f(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XW(){return this.ceG()},
ceG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e2d(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.P(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c9w(p.c),$async$XW)
case 6:r=e
q.a=r==null?A.bu:r
case 4:if(t.c==null){w=1
break}t.n(new C.e2e(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XW,v)},
bJ6(d){var w,v,u=d.a,t=A.o.aj(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aj(u,6e7)%60
v=A.o.aj(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bE
w=s.e.a
v=A.o.aj(w,6e7)<30&&A.o.aj(w,36e8)<999?A.aG:A.bR
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.V(A.Ec,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bJ6(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bf1,A.iH,r,r,1/0)}}
C.a6w.prototype={
mG(){var w,v,u,t=this
t.wi()
w=t.cx
v=t.c
w.bkI(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pp(B.E(["/S",D.dQg,"/URI",new B.qS(B.UD(w.as),A.tr,!0)],x.N,u),u))}}
C.a6x.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_t.prototype={
bs5(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dOz],x.di)
this.w!==$&&B.aO()
this.w=w},
gcCM(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jB(w,new C.cbJ(),B.a2(w).k("jB<ck.E,I>")).ft(0,new C.cbK())},
azb(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.fZ(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rO(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.j1(d.a,d.b))
s.m(0,"/Border",B.rO(D.bJ3))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fP(t.gcCM()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pp(w,x.Y))}}
C.cbL.prototype={}
C.a0R.prototype={}
C.afM.prototype={}
C.aO3.prototype={
fN(d){var w,v,u,t,s,r,q=this,p=null
q.kN(d)
q.Kq(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.baG(w)
u=x.N
t=x.Y
s=new C.cbL(q.d.a,"/Link",w,p,p,p,p,p,B.S(u,t))
s.bs5(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pp(B.E(["/Type",D.dQe],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6w(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.H(0,r)
v.dx.push(r)}}
C.au0.prototype={}
C.aPx.prototype={
fN(d){var w,v,u,t,s=this
s.kN(d)
w=s.b
if(w!=null){v=B.dg()
u=s.a
v.dZ(u.a,u.b,0,1)
u=d.b
u.hR()
t=s.a
t.toString
u.JB(t)
u.QI(0)
u.oe(0,v)
w.fN(d)
u.mJ(0)}}}
var z=a.updateTypes(["aw<~>()","~(lo)","T(hS)","~()","T(ey)","T(nU)","T(lo)","~(hS)","T(ey,ey)","Ii(X)","T(nh)","T(kW)","aw<T>()","I(I,hS)","a1<n,@>(hS)","ak<yv>()","n(nh)","T(a5W)","n(lo)","n(vb)","T(Dn)","I(hS,hS)","n(ey)","r(ey)","cF(ey)","r(hm)","~(hm)","ey(u3,Q,Q,Q,Q,I{fx:n,key:n,rotation:Q})","ey(n,Q,I)","I(nU,nU)","T(yv)","T(n,ak<yv>)","a1<n,@>(nU)","nh()","WC(X)","ey(n,Q,Q,Q,Q,Q{align:pv,anim:hm,bullets:T,color:I?,delay:I,fx:n,key:n,style:G8,weight:pO})","ZQ(X)","ey(n,Q,Q,Q,Q{anim:hm,delay:I,fx:n,key:n})","aw<~>(nU)","T(m2)","WA(X)","Zo(X)","Zn(X)","NG(X)","XL(X)","ey(u3,Q,Q,Q,Q,I,n,n{anim:hm,delay:I,rotation:Q,stroke:I,strokeWidth:Q})","ey(n,Q,Q,Q,Q,Q,n,n,I)","ey(Q,Q,n,I{size:Q})","r(qG,Q,Q)","kW()","nU(a1<@,@>)","~(tU)","Dn()","f5(ey)","r(iM)","Xj(X)","~(De)","XE(X)","I(ey,ey)","ey(ey)","a1<n,@>(ey)","ey(a1<@,@>)","lo(lo)","a1<n,@>(lo)","lo(a1<@,@>)","T(jt)","jt()","n(hS)","~(ak<nU>)","P(ak<hS>)","P(hS)","ak<hS>(n?)","aar(X,I)","~(T(ey,ey))","ab4(X)","acI(X,I)","x(lo,T)","TS(X)","ab7(X)","TV(X)","~(m6)","hS(hS)","Q(ey)","YT(X)","Yv(X)","hS()","ak<DI>()","aw<~>(ak<hS>)","r(bq<I,hS>)","C(jt)","C(Dn)","aw<~>(hm,~())","r(ak<hm>,hm?,~(hm),x)","T(lK)","ak<jc<m6>>(X)","jc<m6>(m6)","hS(a1<@,@>)","U4(X)","ey(n,Q,Q,Q,Q,Q,I{align:pv,style:G8,weight:pO})","U5(X)","r(hS)","~(lF)","H9(X,lo,r?)","I(a6x)","aw<ak<a1<n,@>>?>()","n(n)","aw<yt>({paper:n?,photo:dz?,request:n,template!kZ})","aw<a5O>({doc!yt,history:ak<+(n,n)>,instruction!n,photo:dz?,template!kZ})","ab1(X)"])
C.cyK.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.cyL.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:86}
C.cyM.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gahe(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lV(v,t)
w.b=v-A.o.dP(q,t)
w.a=t
return q},
$S:86}
C.cyN.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bKc.prototype={
$1(d){return J.eO(A.dz.gaL(d),d.byteOffset,d.byteLength)},
$S:1663}
C.faW.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.ix(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.ix(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.ix(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.ix(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1664}
C.bUi.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:26}
C.bUj.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bUl.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fqd.prototype={
$1(d){return new C.ZQ(this.a,this.b,C.hNh(),null)},
$S:z+36}
C.eRn.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eRr.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eRs.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eRt.prototype={
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
C.eRo.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eRp.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eRq.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eRi.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hn,w,w,w)
return B.eo(B.a([B.bG(!1,D.eTN,w,w,!0,w,w,new C.eRg(d),w,w),B.bG(!1,D.eSW,w,w,!0,w,w,new C.eRh(d),w,w)],x.p),w,w,D.Ug,v,w,w,w,w,D.f5J,w)},
$S:20}
C.eRg.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eRh.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eRj.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eRk.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eRx.prototype={
$0(){var w=this.a
return w.n(new C.eRw(w,this.b))},
$S:0}
C.eRw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRm.prototype={
$0(){var w=this.a
return w.n(new C.eRl(w,this.b,this.c))},
$S:0}
C.eRl.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.H(0,v)},
$S:0}
C.eRu.prototype={
$0(){return this.a.ZZ(this.b)},
$S:0}
C.eRv.prototype={
$0(){return this.a.Nr(0,this.b)},
$S:0}
C.eRA.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eRB.prototype={
$0(){var w=this.a
return w.n(new C.eRz(w,this.b))},
$S:0}
C.eRz.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eRy(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eRy.prototype={
$1(d){return d.a},
$S:z+67}
C.eYy.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Z(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fPe(w.b(t.h(0,"doc"))?B.Z(w.a(t.h(0,"doc")),v,u):A.cu)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.nU(s,v,u==null?new B.P(Date.now(),0,!1):u)},
$S:z+50}
C.eYz.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fd8.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcA()}if(q)v.m(0,s,t)}},
$S:z+68}
C.fd6.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fd7.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.fpL.prototype={
$1(d){return d.ac()},
$S:z+32}
C.faC.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fqz.prototype={
$1(d){return new C.WC(this.a,null)},
$S:z+34}
C.cA5.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cA7.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cAa.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAb.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cA9())},
$S:11}
C.cA9.prototype={
$0(){},
$S:0}
C.cAc.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_O(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cA(s)
p=q.bh(s,new C.cA8(r))
if(p<0)q.ck(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.af6(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.cA8.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAd.prototype={
$1(d){},
$S:29}
C.cA6.prototype={
$1(d){return new C.WA(this.b,this.a.gcnZ(),null)},
$S:z+40}
C.cAe.prototype={
$1(d){return D.fbD},
$S:z+43}
C.cA1.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.U2,A.r,1),t=x.p
return B.at(B.aD(!1,A.Y,!0,w,B.p(w,B.u(B.a([new B.C(D.biB,B.u(B.a([B.p(w,D.buq,A.h,w,w,new B.o(A.aG.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aN,D.eS2,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eGL,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.C(A.p_,B.B(B.a([B.D(B.dV(D.eYh,new C.cA_(d),B.da(w,w,w,w,w,w,w,w,w,E.mu,w,w,A.cc,w,new B.b5(B.m(14),A.W),D.aPS,w,w,w,w)),1),A.aw,B.D(B.bI(D.f2H,new C.cA0(d),B.bk(A.bS,w,w,w,w,w,A.cc,w,new B.b5(B.m(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vJ,new B.o(D.a8z,w,u,v,D.cFx,w,A.n),w,w,w,K.VH,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1665}
C.cA_.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cA0.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cA2.prototype={
$0(){return J.n_(this.a.d,new C.czZ(this.b))},
$S:0}
C.czZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czY.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.U2,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bze,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajr,A.n),t,44,t,t,t,t,t,44),A.bb,B.D(B.u(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aKJ,t,t,t),A.bA,D.f2D],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.cYZ[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auT(u[1],u[2],u[3],new C.czW(v,d),!1,t))}q.push(A.ar)
q.push(D.bcK)
q.push(A.ar)
q.push(new C.auT(A.e4,"Delete book","Remove it from this device",new C.czX(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8z,t,r,s,t,t,A.n),t,t,t,A.rD,E.Vk,t,t,t),!0,!1,A.ah,!0,!0)},
$S:34}
C.czW.prototype={
$0(){var w=this.a.a
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.czX.prototype={
$0(){B.a8(this.a,!1).M("delete")
return null},
$S:0}
C.cA4.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.aa(0,A.G,A.x.j(0.45),A.aB5,12)],x.V)
return B.dP(B.et(A.A,e,B.p(w,B.bu(B.m(4),new B.a3(62,95.81818181818181,B.eX(A.A,F.alE(d),A.h,A.dp),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cA3.prototype={
$0(){return this.a.bXj()},
$S:0}
C.czV.prototype={
$0(){return this.a.aTU(0,this.b)},
$S:0}
C.czU.prototype={
$0(){return this.a.C2(this.b)},
$S:0}
C.czT.prototype={
$0(){return this.a.C2(this.b)},
$S:0}
C.cAf.prototype={
$2(d,e){var w=this.a
return w.bwo(J.q(w.d,e))},
$S:42}
C.czm.prototype={
$0(){var w=this.a
if(w.c!=null)w.zK()},
$S:0}
C.czl.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWt("Page "+(v.length+1),"",""))},
$S:0}
C.czo.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.czw.prototype={
$0(){},
$S:0}
C.czx.prototype={
$1(d){var w=this.a,v=w.a,u=$.au()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.czp.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cN.gcs().aF(this.c)},
$S:0}
C.czn.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czr.prototype={
$0(){return this.a.OG(this.b)},
$S:0}
C.czs.prototype={
$0(){return this.a.OG(this.b)},
$S:0}
C.czt.prototype={
$0(){var w=this.a
w.n(new C.czq(this.b))
w.CR()},
$S:0}
C.czq.prototype={
$0(){return this.a.c=""},
$S:0}
C.czv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.czu(w,d))
w.CR()},
$S:z+51}
C.czu.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czC.prototype={
$2(d,e){if(d)this.a.zK()},
$S:118}
C.czy.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zK(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.F(x.q).f.P(D.euU)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.czz.prototype={
$0(){return this.a.aSU(this.b,-1)},
$S:0}
C.czA.prototype={
$0(){return this.a.aSU(this.b,1)},
$S:0}
C.czB.prototype={
$0(){return this.a.bYx(0,this.b)},
$S:0}
C.fhF.prototype={
$1(d){return C.fZ2()},
$S:41}
C.fhG.prototype={
$1(d){return null},
$S:29}
C.f1O.prototype={
$1(d){return null},
$S:29}
C.fiF.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:285}
C.fiE.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:236}
C.fiL.prototype={
$1(d){var w=this.a
return C.fHS(d)===w||C.h2t(d)===w},
$S:z+4}
C.f0S.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.c3R.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhD.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fhE.prototype={
$1(d){return C.fkn(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fcv.prototype={
$1(d){var w=null
return B.br(!0,new B.C(E.wA,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eYR,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.ET,D.eTu,new C.fct(d),B.bk(A.bR,w,w,w,A.x,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.uK,D.f_0,new C.fcu(d),B.da(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vG,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fct.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcu.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcw.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,D.eQ0,w,w,!0,w,w,new C.fcr(d),w,w),B.bI(D.f4M,new C.fcs(d),w)],x.p),w,w,w,D.f6y,w,w,w,w,D.ePV,w)},
$S:20}
C.fcr.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.fcs.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dYi.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dYg.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dYh.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYj.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dYk.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fiK.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.fiG.prototype={
$2$h$w(d,e){var w=null
return new B.bF(A.a3,w,w,B.G9(A.A,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1666}
C.fiI.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eHT,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fiJ.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hK,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hK,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b6,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1667}
C.fiH.prototype={
$2$female$size(d,e){var w=null,v=d?D.aa6:this.a,u=B.H(A.hK,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8M,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1668}
C.ftZ.prototype={
$1(d){return new C.ab1(this.a,this.b,null)},
$S:z+108}
C.dPH.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bao:A.J7,q=B.H(D.iW.j(0.25),A.r,1),p=B.at(B.p(t,t,A.h,t,t,new B.o(A.bR.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aib,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.aa(0,A.G,D.iW.j(0.35),A.e6,10)],x.V),D.bHJ,A.n),t,t,t,t,A.JP,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.C(H.Vw,B.u(B.a([p,A.ay,B.B(B.a([o,A.bb,B.D(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iW,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eHc,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ig(!0,t,e,A.z,D.aIa,new C.dPG(w,this.c),v,D.ad9,t,A.ai,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mk,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dPG.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aar(w,new C.dPF(this.b,w),null)},
$S:z+72}
C.dPF.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fcz.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fcA.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wA,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.f0Y,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.ET,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcx(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nu,D.Re,new C.fcy(d),B.da(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vG,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcx.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcy.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcD.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fcE.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wA,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eQW,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.ET,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcB(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nu,D.Re,new C.fcC(d),B.da(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vG,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcB.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcC.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcH.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fcI.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wA,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eWN,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.ET,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcF(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nu,D.Re,new C.fcG(d),B.da(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vG,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcF.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcG.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fvd.prototype={
$1(d){return D.feR},
$S:z+74}
C.e2i.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b3r:A.J7,s=B.H(A.au.j(0.25),A.r,1),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bBs,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.aa(0,A.G,A.bR.j(0.35),A.e6,10)],x.V),D.ajw,A.n),v,v,v,v,A.JP,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.C(H.Vw,B.u(B.a([r,A.ay,B.B(B.a([q,A.bb,B.D(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.J4,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eEQ,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ig(!0,v,e,A.z,D.aIa,new C.e2h(this.b),19,D.ad9,v,A.ai,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mk,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e2h.prototype={
$2(d,e){var w=D.O7[e]
return new C.acI(w,new C.e2g(this.a,w),null)},
$S:z+75}
C.e2g.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fkr.prototype={
$0(){return B.fGV(C.hB3(this.a))},
$S:323}
C.fkq.prototype={
$0(){var w=C.fI9(this.a)
return"data:image/png;base64,"+A.cN.gcs().aF(w)},
$S:22}
C.f_3.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j2(d,e),new B.j2(w,e+v),new B.j2(d+f*14,e),new B.j2(w,e-v)],x.J)
B.a_L(this.a,C.fs(4291404327),v)},
$S:663}
C.fvo.prototype={
$1(d){return new C.TS(this.a,null)},
$S:z+77}
C.e5A.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5z())},
$S:28}
C.e5z.prototype={
$0(){},
$S:0}
C.e5B.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5y(w,d))},
$S:1670}
C.e5y.prototype={
$0(){return this.a.x=J.f2(A.dz.gaL(this.b))},
$S:0}
C.e5C.prototype={
$1(d){},
$S:29}
C.e5c.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e58.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5j.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e5k.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.dYG)},
$S:0}
C.e5l.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5e.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.A("you",this.b))
w.f.bH(0,A.c_)},
$S:0}
C.e5f.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.A("ai",v.a))},
$S:0}
C.e5g.prototype={
$0(){return this.a.ax.push(new B.A("ai",B.t(this.b)))},
$S:0}
C.e5h.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5i.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lD(v,A.dU,A.i0)}},
$S:8}
C.e5d.prototype={
$0(){var w=this.a,v=w.z,u=C.fl4(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cyK(C.fl4(t))},
$S:0}
C.e5a.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e5b.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5r.prototype={
$0(){return B.a8(this.a,!1).p0()},
$S:0}
C.e5s.prototype={
$0(){var w=this.a
return w.n(new C.e5q(w))},
$S:0}
C.e5q.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e5t.prototype={
$0(){var w=this.a
return w.n(new C.e5p(w,this.b))},
$S:0}
C.e5p.prototype={
$0(){var w=this.b.b
this.a.e.saR(0,w)
return w},
$S:0}
C.e5u.prototype={
$1(d){var w=this.a
return w.n(new C.e5o(w))},
$S:9}
C.e5o.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e5v.prototype={
$1(d){var w=this.a
return w.n(new C.e5n(w))},
$S:9}
C.e5n.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e5w.prototype={
$0(){var w=this.a
return w.n(new C.e5m(w,this.b))},
$S:0}
C.e5m.prototype={
$0(){var w=this.b
this.a.f.saR(0,w)
return w},
$S:0}
C.e5x.prototype={
$1(d){return this.a.XI()},
$S:2}
C.e59.prototype={
$0(){return this.a.c08(this.b)},
$S:0}
C.c7w.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cI(w.h(0,d))):null},
$S:380}
C.c7u.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c7v.prototype={
$1(d){return d.length!==0},
$S:3}
C.fk2.prototype={
bfx(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bKb(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cvt($.tt().jT(0,"assets/news_fonts/"+s))}w=2
return B.b(r.ma(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfx(d,e)},
$S:1671}
C.fik.prototype={
$1(d){return d.length!==0},
$S:3}
C.fim.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dt(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:83}
C.fil.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.iR(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.px,A.cn,t,A.eE,A.cm)
v=this.a
w.AP(v.b)
u=w.b.a.c
return u.gbg(u)<=v.a},
$S:60}
C.eZF.prototype={
$1(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.a5(w,new C.eZG(),B.U(w).k("a5<1>")).gI(0)},
$S:245}
C.eZG.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZD.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.eZE.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.c7x.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawF()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,w-(f===t?r:0)))
o=C.fHR(i,new B.F(!0,h,a6,k,a6,a6,q,A.cF,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fEU(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gc85(),"\n\n")
d=B.iR(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afJ(k,q,1.28),j),A.px,A.cn,a6,A.eE,A.cm)
d.AP(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbg(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fHR(i,new B.F(!0,h,a6,k,a6,a6,q,A.cF,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fEU(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afJ(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.M(v,0,v,0),B.p(a6,a6,A.h,B.aY(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bE(1,A.bo,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.px,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awE(s,j))
i.push(new B.a3(s,a6,B.u(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:393}
C.c7y.prototype={
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
n=o.gawF()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aY(j.w)
d=B.a([new B.A(u,q),new B.A(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.A(r,p-(a0===s?m:0)))
l=C.fHR(f,new B.F(!0,e,a5,i,a5,a5,h,A.cF,A.bg,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fEU(g.length===0?B.a([a6],n):g,l))break}a1=o.afJ(i,h,1.28)
a2=new C.c7z(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.H2,new B.a3(v,a5,a4.f,a5),A.H2,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bkP,B.p(a5,a5,A.h,B.aY(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bE(1,A.bo,new B.w(l[2+a3],a5,a1,a5,A.px,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awE(r,g))
f.push(new B.a3(r,a5,B.u(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.u(B.a([new B.a3(a5,q,v,a5),A.ab,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.c7z.prototype={
$2(d,e){var w=null
return new B.a3(e,w,B.d(d,w,w,w,w,w,w,this.a,A.px,w,w),w)},
$S:1672}
C.fvr.prototype={
$1(d){return new C.TV(this.a,this.b,null)},
$S:z+79}
C.e6L.prototype={
$1(d){return d.lS()},
$S:1673}
C.e6M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e6K(w,d))},
$S:1674}
C.e6K.prototype={
$0(){var w=this.b
return this.a.d=w.gfd(w)},
$S:0}
C.e6y.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e6z.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e6F.prototype={
$0(){return B.a8(this.a,!1).eD()},
$S:0}
C.e6G.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.bz,A.r,2.5)
return B.aJ(w,B.p(w,B.b1(w,w,w,new C.b8l(u,v.gatP(),w),A.ff),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e6D(v),new C.e6E(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ae)},
$S:33}
C.e6D.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:334}
C.e6E.prototype={
$1(d){var w=this.a
w.n(new C.e6A(w,d,this.b,this.c))},
$S:242}
C.e6A.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gatP()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e6H.prototype={
$1(d){var w=this.a
return w.n(new C.e6C(w,this.b))},
$S:9}
C.e6C.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6I.prototype={
$1(d){var w=this.a
return w.n(new C.e6B(w,d))},
$S:6}
C.e6B.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6J.prototype={
$0(){return B.a8(this.b,!1).M(this.a.a.c)},
$S:0}
C.fvH.prototype={
$1(d){return D.fhE},
$S:z+83}
C.eDs.prototype={
$1(d){return this.a.Wu()},
$S:8}
C.eCk.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cN.gcs().aF(v)},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eCS.prototype={
$1(d){return d>=this.a.length},
$S:60}
C.eC3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eC4.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eC1.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eC2.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eCB.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eCC(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.qV(p>0.2?C.fzK(q,B.a32(p,p,A.w)):q),A.q,u)],x.p)
w=s.bd
if(w>0.02){v=B.a32(12,12,A.w)
p.push(B.jz(B.d7(B.qV(C.fzK(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b_
if(r!=null&&s.aX>0)p.push(B.ec(u,B.aY(r).j(s.aX),!0))
r=s.b7
if(r!=null&&s.bF>0){r=B.aY(r).j(s.bF)
w=s.b7
w.toString
p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aOb,1.15,A.w,u,0,B.a([r,B.aY(w).j(0)],x.O),u,u),A.n),A.b9))}r=s.aA
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aNX,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.b9))
r=s.aK
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b5,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aK)],x.O),D.cEg,u),A.n),A.b9))
if(s.aC>0){r=s.k1
p.push(B.an(u,B.bT(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b5,A.w,B.a([A.x.j(0),A.x.j(s.aC),A.x.j(s.aC),A.x.j(0)],x.O),D.cOb,u),A.n),A.b9),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.b2
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cLz,u),A.n),A.b9))
s=s.au
if(s>0)p.push(B.b1(u,u,u,new C.bbS(s,u),A.at))
return new B.am(A.V,u,A.aY,A.q,p,u)},
$S:61}
C.eCC.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fD(r.b,A.A,q,q,A.ci,A.bO,!0,q,!1,q,q),o=r.a,n=o.aSw(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.be
v=o.aO
u=v-1
t=o.bO
s=o.cQ?-1:1
return B.dP(B.e5(A.A,B.et(A.A,l,B.fm(A.A,new B.FG(new B.A0(q,q,n,A.z1),p,q),q,B.v_(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eCO.prototype={
$0(){return this.a.n(new C.eCN(this.b,this.c))},
$S:0}
C.eCN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCP.prototype={
$1(d){return this.a.n(new C.eCM(this.b,d))},
$S:6}
C.eCM.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCR.prototype={
$0(){return this.a.n(new C.eCQ(this.b,this.c))},
$S:0}
C.eCQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBU.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eBV.prototype={
$1(d){var w=this.a
return w.n(w.gcpm())},
$S:2}
C.eBW.prototype={
$1(d){return this.a.n(new C.eBT())},
$S:2}
C.eBT.prototype={
$0(){},
$S:0}
C.eBX.prototype={
$0(){var w=this.a
return w.n(new C.eBS(w,this.b))},
$S:0}
C.eBS.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eBZ.prototype={
$2(d,e){return A.aw},
$S:35}
C.eBY.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aY(v.e),B.aY(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.di(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aY(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a7(A.b0,A.b5,A.w,r,w,w),A.n),A.hM,w,94,w,w,w,w,70)
return B.aJ(w,new B.a3(70,w,B.u(B.a([r,A.fZ,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eBR(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:76}
C.eBR.prototype={
$0(){var w=this.a
return w.n(new C.eBO(w,this.b))},
$S:0}
C.eBO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eC_.prototype={
$1(d){var w=this.a
return w.n(new C.eBQ(w,d))},
$S:9}
C.eBQ.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eC0.prototype={
$1(d){var w=this.a
return w.n(new C.eBP(w,d))},
$S:9}
C.eBP.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eDh.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gJ(this.b)]},
$S:60}
C.eDo.prototype={
$1(d){var w=this.a
return w.n(new C.eDp(w,d))},
$S:27}
C.eDp.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eDq.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eDi.prototype={
$0(){var w=this.a
return w.n(new C.eDg(w,this.b))},
$S:0}
C.eDg.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.H(0,v)},
$S:0}
C.eDj.prototype={
$0(){var w=this.a
return w.n(new C.eDf(w,this.b))},
$S:0}
C.eDf.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eDk.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eDe(v,w.b,w.c,w.d))},
$S:0}
C.eDe.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eDl.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqN(v))},
$S:0}
C.eDm.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eDn.prototype={
$0(){var w=this.a
return w.n(new C.eDd(w))},
$S:0}
C.eDd.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eD0.prototype={
$1(d){return d.a===this.a.dy},
$S:224}
C.eD1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arm[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b3(9,9)
m=B.a([B.aY(v.w.e),B.aY(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atT(new B.nI(new B.bv(n,n,n,n),A.ap,new B.kA(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.w,m,j,j),A.n),A.b9,new C.aWJ(l,B.aY(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eD_(r,v),2,i))}return B.c8(A.bH,h,A.bw,7,7)},
$S:168}
C.eD_.prototype={
$0(){var w=this.b
return w.n(new C.eCV(this.a,w))},
$S:0}
C.eCV.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eD2.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:214}
C.eD5.prototype={
$0(){var w=this.a
return w.n(new C.eCZ(w))},
$S:0}
C.eCZ.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eD6.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eD7.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eD8.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eD9.prototype={
$0(){var w=this.a
return w.n(new C.eCY(w))},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eDa.prototype={
$0(){var w=this.a
return w.n(new C.eCX(w))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eDb.prototype={
$0(){var w=this.b
return w.n(new C.eCW(this.a,w))},
$S:0}
C.eCW.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDc.prototype={
$1(d){return this.a.fx=d},
$S:214}
C.eD3.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eD4.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eCF.prototype={
$0(){var w=this.a
return w.n(new C.eCE(w))},
$S:0}
C.eCE.prototype={
$0(){var w=this.a
w.p4=null
w.aZ8()},
$S:0}
C.eCG.prototype={
$0(){var w=this.a
return w.n(new C.eCD(w,this.b))},
$S:0}
C.eCD.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCH.prototype={
$0(){var w=this.a
return w.n(w.gcgh())},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.n(new C.eCw(w))},
$S:0}
C.eCw.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
return w.n(new C.eCv(w))},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
w.aC=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eCz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cLV[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b3(9,9)
m.push(v.atT(new B.nI(new B.bv(p,p,p,p),A.ap,new B.a3(1/0,1/0,new B.FG(new B.A0(o,o,v.aSw(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.z1),B.fD(u,A.A,140,o,A.ci,A.bO,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eCu(v,s),3,n))}return B.c8(A.bH,m,A.bw,10,8)},
$S:168}
C.eCu.prototype={
$0(){var w=this.a
return w.n(new C.eCt(w,this.b))},
$S:0}
C.eCt.prototype={
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
C.eCb.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eCc.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eCd.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eCe.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eCf.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eCg.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eCh.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.eCi.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eCj.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eBx.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eBy.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eBz.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eBA.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eBB.prototype={
$0(){var w=this.a
return w.n(new C.eBw(w))},
$S:0}
C.eBw.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eBC.prototype={
$1(d){return this.a.b_=d},
$S:214}
C.eBD.prototype={
$1(d){return this.a.aX=d},
$S:6}
C.eC5.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eC6.prototype={
$1(d){return this.a.bd=d},
$S:6}
C.eC7.prototype={
$1(d){return this.a.au=d},
$S:6}
C.eC8.prototype={
$1(d){return this.a.b7=d},
$S:214}
C.eC9.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.eBH.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eBI.prototype={
$1(d){return this.a.be=d},
$S:6}
C.eBJ.prototype={
$1(d){return this.a.bO=d},
$S:6}
C.eBK.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eBL.prototype={
$0(){var w=this.a
return w.n(new C.eBG(w))},
$S:0}
C.eBG.prototype={
$0(){var w=this.a
return w.c4=A.k.K(w.c4+90+180,360)-180},
$S:0}
C.eBM.prototype={
$0(){var w=this.a
return w.n(new C.eBF(w))},
$S:0}
C.eBF.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eBN.prototype={
$0(){var w=this.a
return w.n(new C.eBE(w))},
$S:0}
C.eBE.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eCA.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hPQ(v,w.p4)},
$S:0}
C.eCs.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.baF:B.fD(v,A.A,w,w,A.ci,A.bO,!1,w,!1,w,w)
return C.fis(d.length===0?"rounded":d,u,e)},
$S:129}
C.eCo.prototype={
$0(){var w=this.a
return w.n(new C.eCn(w))},
$S:0}
C.eCn.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eCp.prototype={
$0(){var w=this.b
return w.n(new C.eCm(this.a,w))},
$S:0}
C.eCm.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eCq.prototype={
$0(){var w=this.b
return w.n(new C.eCl(this.a,w))},
$S:0}
C.eCl.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eCr.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eCL.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.aa(-4,A.G,A.b1.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.ca_(),n.r))
l.push(new C.H9(n.cmx(),!1,!1,t))
o=B.bZ(0,B.bu(o,new B.en(new B.am(A.V,t,A.aY,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.V,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c3,B.bT(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.b9),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eCK(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eCK.prototype={
$1(d){var w=this.a
return w.n(new C.eCJ(w,d,this.b,this.c))},
$S:18}
C.eCJ.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eCU.prototype={
$0(){var w=this.a
return w.n(new C.eCT(w,this.b))},
$S:0}
C.eCT.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eCa.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).p0()},
$S:0}
C.eDr.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a3(Math.min(s*0.4,460),t,B.u(B.a([w.aUU(),B.D(B.at(w.aXM(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.u(B.a([B.D(w.aM_(),1),w.aIf()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aUU(),new B.C(A.hv,B.at(s.aXM(u),t,t,t),t),B.D(s.aM_(),1),s.aIf()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:640}
C.ffI.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ei(k,!1,j,A.az,"",4280640491,i,l,m,"",h,C.bwz(),null,"","",0,!1,"",0,D.ba,4280172719,2,d,0,0,"",D.cd,D.cK,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bg,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,A.O)},
$S:z+98}
C.ffH.prototype={
$3(d,e,f){var w=this,v=C.bwz(),u=w.b?A.I:A.cp,t=w.c?A.cx:A.bg
return C.ei(w.d,!1,f,A.az,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.ba,4280172719,2,d,0,w.f,w.e,D.cd,D.cK,0.82,0.09,w.a)},
$S:z+28}
C.c8T.prototype={
$1(d){return B.t(d)},
$S:17}
C.fno.prototype={
$0(){return this.a},
$S:z+15}
C.f5h.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.f5i.prototype={
$2(d,e){return J.ci(e)},
$S:z+31}
C.fnq.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fnt.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fnu.prototype={
$0(){return A.d.gJ(D.uT)},
$S:z+33}
C.fnm.prototype={
$1(d){return d.a},
$S:z+16}
C.fnp.prototype={
$1(d){return d.a},
$S:z+16}
C.flm.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fln.prototype={
$1(d){return d.length!==0},
$S:3}
C.flo.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ffM.prototype={
$0(){return C.cy()},
$S:22}
C.ffP.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cd,s=u?n:0
return C.ei(j,l,v,A.az,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.ba,4280172719,2,d,s,0,"",t,D.cK,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.da,!1,null,0,"","",A.bg,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.da,!1,null,0,"",j,A.bg,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.da,!1,null,0,j,k,A.bg,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bg,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bg,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.da,!1,k,l,"",m,A.bg,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,!1,null,0,"",k,A.bg,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.da,!1,j,k,"",l,A.bg,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,!1,k,0,l,m,A.bg,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,k,l,m,"",n,A.bg,A.a4)},
$S:z+35}
C.ffO.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cd,D.eS,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.ffN.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cd,t=v?j:0
return C.ei(A.be,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.ba,4280172719,2,"",t,0,"",u,D.l3,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pn,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.ffL.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fid.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h_4.ce(0,A.a.i(s.w).toLowerCase(),new C.fib(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fic(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bkG(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1677}
C.fib.prototype={
$0(){return F.aKG(this.a.w)},
$S:180}
C.fic.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.bvt("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hq(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.eZA.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eZB.prototype={
$1(d){return d.a},
$S:z+18}
C.eZC.prototype={
$1(d){return d.b},
$S:z+19}
C.fvT.prototype={
$1(d){return D.fhU},
$S:z+41}
C.eJm.prototype={
$0(){return this.a.x=C.ht6(this.b,this.c.b)},
$S:0}
C.eJn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eJk.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:433}
C.eJl.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:433}
C.eJj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c1(A.aH,null,new C.eJe(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.GN,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aW(s,7)
if(r.length===0){n.n(new C.eJf(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h4K(o,m.czx(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eJg(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJe.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eJi(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWV,A.h,p,p,D.aSg,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Aw:D.AB,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a3(64,64,C.fis(v,i.aZJ(h),u),p)))}t=B.lZ(1,m,4,10,10,p,A.dK,!0)
if(!l)return B.br(!0,new B.C(A6.DJ,t,p),!0,!1,A.ah,!0,!0)
s=new C.eJh(i,d)
m=B.aG(d,A.bP,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Fb[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.d1(new B.aX(0,1/0,0,m.a.b*0.85),B.ch(B.u(B.a([D.eVn,A.T,t,A.dW,D.ely,A.av,D.f4a,A.T,B.lZ(1.15,l,3,10,10,p,A.dK,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A6.DJ,p,p,A.ai),p),!0,!1,A.ah,!0,!0)},
$S:34}
C.eJi.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b1.j(0.22):A.c.j(0.04),s=v?A.bF:A.du
return B.aJ(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hj,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eJd(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1678}
C.eJd.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eJh.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiH,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.LM(u.Em(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.al,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eJc(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:129}
C.eJc.prototype={
$0(){B.a8(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eJf.prototype={
$0(){var w=this.a
return w.w=w.w.Em("")},
$S:0}
C.eJg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eJ2.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eJ3.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eJ5.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eJ6.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eJ7.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eJ8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJ4(w,d))},
$S:2}
C.eJ4.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eJ9.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eJA.prototype={
$0(){return this.a.f.fu()},
$S:0}
C.eJB.prototype={
$0(){var w=this.a
return w.n(new C.eJz(w))},
$S:0}
C.eJz.prototype={
$0(){return this.a.e=null},
$S:0}
C.eJC.prototype={
$0(){var w=this.a
return w.n(new C.eJy(w))},
$S:0}
C.eJy.prototype={
$0(){return this.a.x=null},
$S:0}
C.eJE.prototype={
$1(d){var w=this.a
return w.n(new C.eJx(w,d))},
$S:31}
C.eJx.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eJF.prototype={
$1(d){var w=this.a
return w.n(new C.eJw(w,d))},
$S:31}
C.eJw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eJG.prototype={
$0(){var w=this.a
return w.n(new C.eJv(w))},
$S:0}
C.eJv.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eJH.prototype={
$1(d){var w=this.a
return w.n(new C.eJu(w,d))},
$S:31}
C.eJu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eJI.prototype={
$1(d){var w=this.a
return w.n(new C.eJt(w,d))},
$S:31}
C.eJt.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eJJ.prototype={
$0(){var w=this.a
return w.n(new C.eJs(w))},
$S:0}
C.eJs.prototype={
$0(){var w=this.a
return w.w=w.w.Em("")},
$S:0}
C.eJK.prototype={
$0(){var w=this.a
return w.n(new C.eJr(w,this.b))},
$S:0}
C.eJr.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eJL.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a3(u,null,w.bHP(D.a_i[v]),null))
return B.c8(A.bH,t,A.bw,8,8)},
$S:168}
C.eJD.prototype={
$1(d){var w=this.a
return w.n(new C.eJq(w,d))},
$S:9}
C.eJq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJa.prototype={
$0(){var w=this.a
return w.n(new C.eJb(w,this.b,this.c))},
$S:0}
C.eJb.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.H(0,w)},
$S:0}
C.eJp.prototype={
$0(){var w=this.a
return w.n(new C.eJo(w,this.b))},
$S:0}
C.eJo.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fvS.prototype={
$1(d){return new C.Zn(this.a,this.b,null)},
$S:z+42}
C.eIW.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eIX.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eIY.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAB?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eIZ.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eJ_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eIV(w,d))},
$S:2}
C.eIV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJ0.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eJ1.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bH(0,new B.bb(w,B.h0(A.bq,w.length),A.aL))},
$S:0}
C.f4x.prototype={
$1(d){return d.a===this.a},
$S:224}
C.e1I.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gatU(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cyO:D.cNX
t=D.wd.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.wd.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.aa(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b1(q,q,q,new C.be4(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bZ(0,B.bKs(B.et(A.A,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.w,B.a([A.K,D.b21.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.V,q,A.a9,A.q,B.a([n,o,B.at(B.u(B.a([B.V(p.a.c?A.ej:A.lu,D.wd,q,q,q,20),A.av,B.eX(A.A,B.nn(A.j9,D.ePs,new C.e1H()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eMj,A.h,q,q,new B.o(D.wd,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adO,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aC,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e1H.prototype={
$1(d){return D.bG1.az(0,d)},
$S:65}
C.fnv.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fnw.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:224}
C.fnx.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1679}
C.fny.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:13}
C.fnr.prototype={
$1(d){return d.a},
$S:z+18}
C.fns.prototype={
$1(d){return d.b},
$S:z+19}
C.fv5.prototype={
$1(d){return new C.XL(this.a,this.b,null)},
$S:z+44}
C.dba.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dbb.prototype={
$1(d){return d.a===this.a.gafC()},
$S:z+10}
C.dbc.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dbf.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.dbg.prototype={
$0(){var w=this.a
return w.n(new C.dbe(w,this.b))},
$S:0}
C.dbe.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dbh.prototype={
$1(d){var w=this.a
return w.n(new C.dbd(w,d))},
$S:9}
C.dbd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1G.prototype={
$1$2(d,e,f){var w=B.bj(d,!0,f)
A.d.fw(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1680}
C.eW9.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eS,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cd,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eWb.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ei(A.L,!1,this.b.d,A.az,"",4280640491,i,A.bg,A.cF,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.ba,4280172719,2,d,l,0,"",D.mb,D.cK,g,e,f)},
$S:z+46}
C.eWa.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vG(0,"twinkle")
w=t===D.ba?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mb,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eW8.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fgT.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fgU.prototype={
$0(){return A.d.gJ(D.Fk)},
$S:z+49}
C.fgV.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eY7.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fmY.prototype={
$1(d){var w=2450411,v=4281908728
C.dr(d,C.ds(4280171146,1,0,D.ba,w,0,0.52,0,0))
C.dr(d,C.ds(v,1,0,D.ba,w,0,0.04,0.48,0))
C.dr(d,C.ds(4294047225,0.38,0,D.ba,w,0,0.48,0.52,0.62))
C.dr(d,C.ds(v,0.006,0,D.fe,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmZ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dr(d,C.ds(4280172719,0.8,0,D.ba,w,0,0.36,0.58,0.1))
C.dr(d,C.ds(v,0.64,0,D.ba,w,0,0.28,0.64,0.18))
C.dr(d,C.ds(4282090230,0.44,0,D.ba,w,0,0.2,0.7,0.28))
C.dr(d,C.ds(v,0.006,0,D.fe,v,3,0.22,0.08,0.12))
C.dr(d,C.ds(u,0.004,0,D.fe,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fn_.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(4279080072,0.11,0,D.ba,w,0,1,0,0))
C.dr(d,C.ds(4279310375,0.11,0,D.ba,w,0,1,0,0.89))
C.dr(d,C.ds(856528008,0.72,0,D.jn,w,0,0.28,0.72,0.14))
C.dr(d,C.ds(1426953352,0.2,0,D.jn,w,0,0.2,0.78,0.22))
C.dr(d,C.ds(v,0.004,0,D.fe,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fna.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4279203438,0.55,0,D.jn,w,0,0.5,0.55,-0.05))
C.dr(d,C.ds(4280171146,0.5,0,D.jn,w,0,0.45,0.62,0.35))
C.dr(d,C.ds(4280640491,0.4,0.3,D.jm,w,0,0.35,0.68,0.55))
C.dr(d,C.ds(571438702,0.12,0,D.ba,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnf.prototype={
$1(d){var w=4280472558
C.dr(d,C.ds(4279310375,0.75,-0.4,D.jm,2450411,0,0.75,-0.15,0.35))
C.dr(d,C.ds(w,0.55,0,D.ba,2450411,0,0.06,0.42,0.38))
C.dr(d,C.ds(w,0.006,0,D.fe,w,3,0.35,0.08,0.08))
C.dr(d,C.ds(2282478,0.12,0,D.ba,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fng.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3423541034,0.48,0,D.ba,w,0,1,0,0))
C.dr(d,C.ds(v,0.12,-0.08,D.jn,w,0,1.1,-0.05,0.38))
C.dr(d,C.ds(858088427,0.35,0,D.ba,w,0,0.42,0.55,0.05))
C.dr(d,C.ds(v,0.006,0,D.fe,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnh.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cxU[w]
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eS,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.ba,v,4294967295,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fe,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fni.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ap(A.lR,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eS,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.Bb,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fe,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fnj.prototype={
$1(d){var w=4294967295
C.dr(d,C.ds(4280640491,1,0,D.ba,2450411,0,0.42,0,0))
C.dr(d,C.ds(4280110808,1.1,1.57,D.jm,2450411,0,0.18,0.35,-0.05))
C.dr(d,C.ds(w,0.006,0,D.fe,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnk.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dr(d,C.ds(w,0.1,0,D.ba,v,0,1,0,0))
C.dr(d,C.ds(u,0.012,0,D.ba,v,0,1,0,0.1))
C.dr(d,C.ds(u,0.006,0,D.fe,u,3,0.42,0.06,0.14))
C.dr(d,C.ds(403446057,0.68,0,D.jn,v,0,0.22,0.72,0.18))
C.dr(d,C.ds(w,0.1,0,D.ba,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnl.prototype={
$1(d){var w=4278630100
C.dr(d,C.ds(4279310375,1.2,0.15,D.jn,2450411,0,0.55,-0.2,-0.1))
C.dr(d,C.ds(w,1.1,0.15,D.ba,2450411,0,0.08,0.15,-0.05))
C.dr(d,C.ds(1120295,0.18,0,D.ba,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fn0.prototype={
$1(d){var w=4292617766
C.dr(d,C.ds(4282714634,0.65,-0.2,D.jm,2450411,0,0.65,-0.1,0.45))
C.dr(d,C.ds(w,0.5,-0.15,D.jm,2450411,0,0.5,0.05,0.55))
C.dr(d,C.ds(w,0.006,0,D.fe,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fn1.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4278413729,0.35,3.14,D.jm,w,0,0.45,-0.05,0.7))
C.dr(d,C.ds(4278355143,0.3,3.14,D.jm,w,0,0.4,0.25,0.75))
C.dr(d,C.ds(4279150057,0.32,3.14,D.jm,w,0,0.5,0.55,0.72))
C.dr(d,C.ds(863884284,0.22,0,D.ey,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fn2.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dr(d,C.ds(w,0.14,0,D.ba,v,0,0.14,0.02,0.02))
C.dr(d,C.ds(2282478,0.14,0,D.ba,u,3,0.14,0.84,0.02))
C.dr(d,C.ds(w,0.28,0,D.jn,v,0,0.35,-0.08,0.78))
C.dr(d,C.ds(u,0.22,0.5,D.jm,v,0,0.3,0.72,0.78))
C.dr(d,C.ds(w,0.006,0,D.fe,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fn3.prototype={
$1(d){var w=4293571336,v=1156231944
C.dr(d,C.ds(1841431,0.92,0,D.ba,w,3,0.92,0.04,0.04))
C.dr(d,C.ds(v,0.15,0,D.jm,2450411,0,0.15,0.02,0.02))
C.dr(d,C.ds(v,0.15,3.14,D.jm,2450411,0,0.15,0.83,0.83))
C.dr(d,C.ds(w,0.004,0,D.fe,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fn4.prototype={
$1(d){var w=4279080072,v=2450411
C.dr(d,C.ds(w,0.14,0,D.kH,v,0,0.14,0.68,0.18))
C.dr(d,C.ds(4279548070,0.14,0,D.kH,v,0,0.14,0.78,0.28))
C.dr(d,C.ds(4281193663,0.14,0,D.kH,v,0,0.14,0.68,0.38))
C.dr(d,C.ds(4284410580,0.14,0,D.kH,v,0,0.14,0.78,0.48))
C.dr(d,C.ds(4279203438,0.14,0,D.kH,v,0,0.14,0.68,0.58))
C.dr(d,C.ds(w,0.006,0,D.fe,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fn5.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3708753706,0.42,0,D.ba,w,0,1,0,0))
C.dr(d,C.ds(v,0.06,-0.05,D.jn,w,0,1,0,0.38))
C.dr(d,C.ds(859356664,0.25,0,D.ey,w,0,0.25,0.7,0.08))
C.dr(d,C.ds(v,0.006,0,D.fe,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fn6.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ap(A.lR,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eS,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.Bb,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(4280172719,0.08,0,D.ba,2450411,0,1,0,0))
C.dr(d,C.ds(s,0.006,0,D.fe,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fn7.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eS,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bg,A.az,s,A.be,null,D.fe,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(s,0.75,0,D.ba,2450411,0,0.22,0.72,0.1))
C.dr(d,C.ds(872415231,0.16,0,D.ba,2450411,0,0.16,0.75,0.15))
C.dr(d,C.ds(s,0.006,0,D.fe,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fn8.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dr(d,C.ds(4674921,0.9,0,D.ba,4287931320,2,0.9,0.05,0.05))
C.dr(d,C.ds(w,0.08,0,D.ba,v,0,0.08,0.03,0.03))
C.dr(d,C.ds(u,0.08,0,D.ba,v,0,0.08,0.89,0.03))
C.dr(d,C.ds(u,0.08,0,D.ba,v,0,0.08,0.03,0.89))
C.dr(d,C.ds(w,0.08,0,D.ba,v,0,0.08,0.89,0.89))
C.dr(d,C.ds(w,0.004,0,D.fe,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fn9.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iO
$.iO=t+1
t=new C.ey("design_"+(""+1000*u+"_"+t),D.eS,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bg,A.az,r,A.be,null,D.ba,4294967295,4280640491,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.ap(A.dC,A.cH,w/2).l()
t=Date.now()
s=$.iO
$.iO=s+1
u=new C.ey("design_"+(""+1000*t+"_"+s),D.eS,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bg,A.az,r,A.be,null,D.ba,u,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(4280171146,1,0,D.ba,q,0,0.48,0,0))
C.dr(d,C.ds(4280172719,1.1,1.57,D.jm,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fnb.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(870995980,0.55,0.45,D.jn,w,0,0.55,-0.12,-0.08))
C.dr(d,C.ds(856996006,0.45,0.45,D.jn,w,0,0.45,0.62,-0.05))
C.dr(d,C.ds(16777215,0.38,0.45,D.jn,4293548044,5,0.38,0.52,0.12))
C.dr(d,C.ds(585783308,0.3,0.45,D.jn,w,0,0.3,0.56,0.16))
C.dr(d,C.ds(4279548070,0.06,0,D.ba,w,0,0.16,0.38,0.04))
C.dr(d,C.ds(1156208652,0.28,0,D.ey,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnc.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dr(d,C.ds(w,1,0,D.ba,v,0,0.07,0,0))
C.dr(d,C.ds(u,0.1,0,D.ba,t,1,0.46,0.48,0.14))
C.dr(d,C.ds(u,0.1,0,D.ba,t,1,0.46,0.48,0.28))
C.dr(d,C.ds(u,0.1,0,D.ba,t,1,0.46,0.48,0.42))
C.dr(d,C.ds(s,0.08,0,D.ey,v,0,0.08,0.5,0.16))
C.dr(d,C.ds(w,0.08,0,D.ey,v,0,0.08,0.5,0.3))
C.dr(d,C.ds(4279548070,0.08,0,D.ey,v,0,0.08,0.5,0.44))
C.dr(d,C.ds(16777215,0.32,0.45,D.jn,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fnd.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dr(d,C.ds(4294047225,0.08,0,D.ba,t,2,0.1,0.02,0.06))
C.dr(d,C.ds(s,0.42,0,D.ba,2450411,0,0.36,0.58,0.18))
C.dr(d,C.ds(872415231,0.12,0,D.ba,2450411,0,0.28,0.62,0.24))
C.dr(d,C.ds(16777215,0.28,0,D.ey,s,4,0.32,0,0.72))
C.dr(d,C.ds(r,0.006,0,D.fe,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eS,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.ey,16777215,t,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fne.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(3423541034,0.55,0,D.ba,w,0,1,0,0))
C.dr(d,C.ds(4009754623,0.56,0.45,D.jn,w,0,0.56,0.22,0.18))
C.dr(d,C.ds(3439329279,0.44,0.45,D.jn,w,0,0.44,0.28,0.24))
C.dr(d,C.ds(v,0.07,0,D.ba,w,0,0.22,0.34,0.62))
C.dr(d,C.ds(v,1,0,D.ba,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.feJ.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.feK.prototype={
$0(){return A.d.gJ($.bA6())},
$S:z+52}
C.f4k.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f4j.prototype={
$1(d){return C.hA1(d,this.a,this.b)},
$S:z+53}
C.fnE.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.v_(1.0375,1.01875,1)
return new B.fG(v,u,new C.aPx(B.hq8(A.tP,C.hA4(w.c,w.d,v,u),t)))},
$S:435}
C.dLr.prototype={
$1(d){var w=d.a/1e6
this.a.d.sq(0,w)
return w},
$S:8}
C.dLq.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bT(w,new B.o(w,w,w,w,w,new B.bR(A.HZ,1.2,A.w,w,0,u.d,w,w),A.n),A.b9),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.am(A.V,w,A.aY,A.q,B.a([t,new B.en(B.b1(w,w,w,new C.baY(u.a,r,q,r),A.at),w),B.at(new B.k2(r,new C.dLp(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:444}
C.dLp.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ex.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gJ(u))
u=B.a([new B.aa(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hN(B.fD(i,A.A,r,r,A.ci,A.bO,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fQ(A.A,0,6.283185307179586,A.w,t,r,new B.mo(e*0.8)),A.a5),r,w,r,r,new B.M(v,v,v,v),r,r,w),new B.a3(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bni(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cJ(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a3(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d7(B.dP(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a3(r,m*0.022,r,r),B.d(w.a.c.gaGN(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d7(B.e5(A.A,new B.C(new B.M(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eI9.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).az(0,d)},
$S:65}
C.c3s.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.aa(0,A.G,A.hr.j(0.4),A.J,14)],x.V):v
w=B.di(v,B.bu(B.m(12),d,A.ap),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v)
return B.aJ(v,new B.a3(112,v,B.u(B.a([w,A.fZ,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.al,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1681}
C.c3t.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Em(""))},
$S:0}
C.c3u.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.LM(v.Em(u),!0,!1,null),!0,null),d.b,new C.c3v(w,this.c,d),v.a===u)},
$S:z+54}
C.c3v.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h4K(u.b,t.c.Em(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ftJ.prototype={
$1(d){return new C.Xj(this.a,null)},
$S:z+55}
C.d0F.prototype={
$0(){var w=this.a
w.d=w.guN().b6u("data:"+this.b+";base64,"+A.cN.gcs().aF(this.c));++w.r},
$S:0}
C.d0K.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d0L.prototype={
$0(){var w=this.a
return w.n(new C.d0J(w))},
$S:0}
C.d0J.prototype={
$0(){return this.a.r++},
$S:0}
C.d0M.prototype={
$1(d){var w=this.a
return w.n(new C.d0I(w,d))},
$S:2}
C.d0I.prototype={
$0(){var w=this.a
return w.d=w.guN().aA2(this.b)},
$S:0}
C.d0N.prototype={
$0(){var w=this.a
return w.n(new C.d0H(w))},
$S:0}
C.d0H.prototype={
$0(){var w=this.a
return w.d=w.guN().b6u("")},
$S:0}
C.d0O.prototype={
$1(d){var w=this.a
return w.n(new C.d0G(w,d))},
$S:2}
C.d0G.prototype={
$0(){var w=this.a
return w.d=w.guN().b6B(this.b)},
$S:0}
C.d0P.prototype={
$0(){var w=this.a
w=w.guN().b6B(w.gatV().a.a)
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.ftI.prototype={
$1(d){var w={}
w.a=this.a
return new B.ed(new C.ftH(w),null)},
$S:21}
C.ftH.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.d1(new B.aX(0,1/0,0,B.aG(d,A.bP,x.w).w.a.b*0.85),B.ch(B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f1y,A.av,D.f1M,A.ay,new C.aWG(v.a,new C.ftG(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.ai),w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aSM,w,w,w,w,A.JZ,w,w,w)},
$S:158}
C.ftG.prototype={
$1(d){this.b.$1(new C.ftF(this.a,d))
B.a8(this.c,!1).M(d)},
$S:z+56}
C.ftF.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fvR.prototype={
$1(d){return D.fdM},
$S:z+57}
C.d7a.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d7b.prototype={
$0(){var w=this.a.c
w.toString
B.a8(w,!1).M(this.b)
return null},
$S:0}
C.d7c.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a8(w,!1).M(v)}},
$S:0}
C.fkk.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.w,B.a([A.K,B.ap(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).az(0,d)},
$S:65}
C.d0m.prototype={
$3(d,e,f){var w,v=this,u=new B.aS($.a0().r,A.as,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.G(new B.bc(t+r*1.2,o))
u.G(new B.d_(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.G(new B.d_(w,q+p,w,q+p*1.2))
u.G(new B.BT(B.bV(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aU(u,v.d)
s.aU(u,v.e)
p=B.N()
p.r=B.ap(v.a.d,A.c,0.6).gq(0)
s.ap(new B.v(w,o),2.2,p)},
$S:1682}
C.fko.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fcL.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fcM.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wA,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eMz,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.ET,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcJ(d),B.bk(A.bR,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nu,D.Re,new C.fcK(d),B.da(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vG,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcJ.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcK.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.c8R.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c8S.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c8Q.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.Z(b5,x.N,x.z),b3=B.aQ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a4.gdC(0)
b3=B.aQ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aQ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hw2(b2.h(0,"type"))
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
n=A.asX[A.o.D(b4,0,8)]
m=D.cAy[A.o.D(w,0,1)]
l=C.hzw(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.apY[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hCd(b2.h(0,"shape"))
g=B.aQ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aQ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
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
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.h07(b2.h(0,"textTransition"))
a4=B.aQ(b2.h(0,"textAnimDelayMs"))
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
b2=B.aQ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ei(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c8G.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c8H.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c8D.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8E.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8F.prototype={
$1(d){return C.fRZ(B.Z(d,x.N,x.z))},
$S:z+64}
C.c97.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c98.prototype={
$0(){return A.d.gJ(D.ZZ)},
$S:z+66}
C.c92.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c91.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8Y.prototype={
$1(d){return new B.J(d,new C.c8Z(),B.U(d).k("J<1,P>")).ft(0,new C.c9_())},
$S:z+69}
C.c8Z.prototype={
$1(d){return d.f},
$S:z+70}
C.c9_.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:666}
C.c90.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hm0(d)},
$S:z+71}
C.c93.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.c94.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c95.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fkX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.H(0,j)
break}}}},
$S:z+73}
C.fkT.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fkU.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fkV.prototype={
$2(d,e){var w
if(d.b===D.cK){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fkW.prototype={
$2(d,e){return d.b===D.eS&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c8M.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hKI(b2,b3),b5=B.a2(b4).k("bg<2>")
b5=B.cz(new B.bg(b4,b5),new C.c8L(),b5.k("G.E"),x.N)
w=B.d6(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.oT.av(0,A.k.D(b1,0,1))
u=new C.c8N()
b5=B.ap(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ap(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c8O(a9,b7.d)
r=new C.c8P(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jA.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.k.D(1-k,0,1),B.dP(B.e5(A.A,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eS){a4=i.hs()
a4.ay=B.ap(B.aY(l.ay),B.aY(i.ay),v).l()
a4.ch=B.ap(B.aY(l.ch),B.aY(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l3&&l.at==i.at?r.$1(i):new B.am(A.V,a8,A.aY,A.q,B.a([new B.kH(A.k.D(o,0,1),r.$1(l),a8),new B.kH(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iv(B.vu(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cd)a7=D.mb
p.push(s.$5(i.c,i.d,i.e,i.f,C.h2i(a7,a6,r.$1(i))))}}return B.bT(new B.am(A.V,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.b9)},
$S:443}
C.c8L.prototype={
$1(d){return d.a},
$S:z+22}
C.c8N.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aY(w)},
$S:z+76}
C.c8O.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1685}
C.c8P.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5E(v,C.aYN(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dyM.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e5(new B.d5(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c8V.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c8W.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fnL.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:286}
C.fmS.prototype={
$1(d){return new C.ab7(this.a,this.b,null)},
$S:z+78}
C.ebK.prototype={
$0(){return this.a.O7(this.b,C.hO1(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ebL.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O7(this.b,C.hO3(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ebM.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O7(this.b,C.hO2(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ebN.prototype={
$0(){X.h22()
B.a8(this.a,!1).M(null)},
$S:0}
C.c8K.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1686}
C.c8J.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.n_),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.ly(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bO:A.dp
return B.fD(t,A.A,o,new C.c8I(),A.ci,w,!0,u,!1,new B.cw("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1687}
C.c8I.prototype={
$3(d,e,f){return D.a7G},
$S:223}
C.fkS.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aY(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aC,A.w,B.a([w,B.aY(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aY(r.e):t
r=r.z
r=B.dd(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cF>")
r=B.z(new B.J(r,new C.fkR(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bT(new B.am(A.V,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.b9),A.ap)},
$S:1688}
C.fkR.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYN(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f6D.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cN(r.b,new C.f6B(d))
w=B.aG(d,A.bP,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.aa(0,A.G,A.x.j(0.45),A.fD,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.at(B.aD(!1,A.Y,!0,q,B.p(q,B.u(B.a([B.B(B.a([B.D(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l6,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bG(!1,A.yq,q,q,!0,q,q,new C.f6C(p,d),q,B.fp(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JY,q,new B.b5(B.m(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.aH,q,u,v,t,q,A.n),q,q,q,A.fy,A.zM,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.f6B.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a8(w,!0).oO())B.a8(w,!0).eD()},
$S:0}
C.f6C.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a8(this.b,!0).eD()},
$S:0}
C.eQt.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.d7(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dg()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fm(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dg()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jw(r*3.14159)
return B.fm(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dg()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jw(r*0.5)
return B.fm(A.A,B.d7(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dg()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fm(A.a7,B.d7(u.b,r),t,s,!0)
case 12:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.d7(B.e5(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.jz(u.b,A.q,new C.aGs(r,t))],x.p),t)
case 15:return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.jz(u.b,A.q,new C.aGs(1-r,t))],x.p),t)
case 16:v=D.aVZ.av(0,r)
return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.d7(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dg()
s.me(r*6.28)
s.jf(r,r,r,1)
return B.fm(A.A,u.b,t,s,!0)
case 20:return B.et(A.A,(r-0.5)*0.35,new B.am(A.V,t,A.aY,A.q,B.a([u.c,B.d7(u.b,r)],x.p),t),t)}},
$S:59}
C.dJE.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dJD.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dJC.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h2i(v,w,e)},
$S:59}
C.c8C.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aY(v.e)
t=v.f
t.toString
t=new B.a7(A.a3,A.a7,A.w,B.a([u,B.aY(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aY(v.e):r
v=v.z
s=B.U(v).k("J<1,cF>")
q=B.z(new B.J(v,new C.c8B(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bT(new B.am(A.V,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.b9)},
$S:443}
C.c8B.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cd?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5E(m,new C.T6(d,C.aYN(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cYV.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cYU(w))},
$S:11}
C.cYU.prototype={
$0(){return this.a.d++},
$S:0}
C.e1o.prototype={
$2(d,e){var w,v=null,u=A.o.aj(this.b.e.a,1000),t=A.o.K(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aHf.t(0,A.d.gJ(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hKr(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dg()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jw(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jf(w,w,w,1)
return B.fm(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e5(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d7(B.e5(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eFU.prototype={
$1(d){var w
$.a0()
w=B.N()
w.b=A.ad
w.c=d
w.e=A.fo
return w},
$S:1689}
C.fit.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.aq(o,o):new B.aq(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge8()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b1(r,r,r,new C.bnb(u,t,r),A.at))
w.push(B.n2(s.d,A.ap,new C.bbu(u,t,r)))
if(!p)w.push(B.b1(r,r,r,new C.bme(u,q,t,r),A.at))
return B.at(new B.a3(v.a,v.b,new B.am(A.V,r,A.aY,A.q,w,r),r),r,r,r)},
$S:246}
C.f9q.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:285}
C.ehY.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.BE(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gah(s)){u=null
w=1
break}u=r.dI(s,new C.ehW(),new C.ehX(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.ehW.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.ehX.prototype={
$0(){return J.fh(this.a)},
$S:1692}
C.eel.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eem.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.een.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.efW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efK.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.efL.prototype={
$1(d){return d.hs()},
$S:z+81}
C.edJ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eh3.prototype={
$0(){this.a.rJ()},
$S:0}
C.ehU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IG()},
$S:0}
C.efU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IG()},
$S:0}
C.ehH.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ehI.prototype={
$1(d){return d.b===D.cK},
$S:z+4}
C.ehJ.prototype={
$1(d){return d.a},
$S:z+22}
C.ehK.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.b_,A.aL),$.au())},
$S:260}
C.ehL.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ed7.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ehV.prototype={
$0(){},
$S:0}
C.ef2.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wx()
w.IG()},
$S:0}
C.ed5.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wx()},
$S:0}
C.ed6.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wx()},
$S:0}
C.efp.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.efq.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wx()
w.IG()
w.z="Home"},
$S:0}
C.efr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ef1.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,A.Rd,w,w,!0,w,w,new C.ef0(d),w,w)],x.p),w,w,w,D.f38,w,w,w,w,D.eMZ,w)},
$S:20}
C.ef0.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eeZ.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,A.Rd,w,w,!0,w,w,new C.eeY(d),w,w)],x.p),w,w,w,D.eQF,w,w,w,w,D.eOB,w)},
$S:20}
C.eeY.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ef_.prototype={
$0(){},
$S:0}
C.eeh.prototype={
$1(d){return this.a.aWa(C.bya(d))},
$S:z+7}
C.eei.prototype={
$1(d){return this.a.ace(C.bya(d))},
$S:z+7}
C.ef8.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.f3c,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bt,new C.NR(A.uv,D.arf,"HATI YA KUHOWA","Hati ya mahari",new C.ef3(d),w),A.T,new C.NR(A.fU,D.cLW,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ef4(d),w),A.T,new C.NR(A.hP,D.cyS,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ef5(d),w),A.T,new C.NR(A.hQ,D.cxk,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ef6(d),w)],v)
if(this.a.ga8X())A.d.v(u,B.a([A.T,new C.NR(A.iL,D.ciB,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ef7(d),w)],v))
return B.br(!0,B.ch(B.u(u,A.af,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.wA,w,w,A.ai),!0,!1,A.ah,!0,!0)},
$S:34}
C.ef3.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.ef4.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.ef5.prototype={
$0(){B.a8(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.ef6.prototype={
$0(){B.a8(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.ef7.prototype={
$0(){B.a8(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.ef9.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wx()},
$S:0}
C.ed9.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eda.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a7(r)
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
C.efk.prototype={
$1(d){return d.b===D.l3},
$S:z+4}
C.efl.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gJ(v).go
w.b=A.d.gJ(v).id
return new B.ed(new C.efi(w,this.a,v),null)},
$S:21}
C.efi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.efj(p,o,a3,n),l=B.L(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.ak,i=l?A.bi:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.B(B.a([B.D(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.ct,j,q,q,q,q),q,q,q,new C.efe(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.AB[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdZ(t,u.b,p.a===t,i,k,new C.eff(v,m),q))}a1=B.c8(A.bH,a1,A.bw,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Aw[w]
s.a=null
t=s.a=r.a
u.push(new C.bdY(t,r.b,p.b===t,k,j,new C.efg(s,m),q))}return B.br(!0,B.p(q,B.ch(B.u(B.a([d,A.aN,a0,A.T,a1,A.bt,v,A.T,B.c8(A.bH,u,A.bw,12,12),A.bt,new B.a3(1/0,48,B.ez(D.bD3,D.f5t,new C.efh(o,n),B.da(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b5(B.m(16),A.W),D.aQo,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.ai),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rD,D.bhl,q,q,q),!0,!1,A.ah,!0,!0)},
$S:117}
C.efj.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.efc(w.a,d,e))
w.b.cZ(new C.efd(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1695}
C.efc.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.efd.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.efe.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eff.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.efg.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.efh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fb(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.efb(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efb.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.efn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efo.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.efm(t.d))
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
s.wx()},
$S:0}
C.efm.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efF.prototype={
$1(d){return d.b===D.cK},
$S:z+4}
C.efG.prototype={
$1(d){return d.w},
$S:z+82}
C.efH.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.efI.prototype={
$1(d){var w=this,v=null,u=B.L(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.ak,r=u?A.bi:A.aO,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bP,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.B(B.a([B.p(v,D.bwY,A.h,v,v,D.aRJ,v,38,v,v,v,v,v,38),A.bb,B.D(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.ct,s,v,v,v,v),v,v,v,new C.efC(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dp(1,A.cj,B.hE(v,new C.efD(m,k,w.c,s,w.d,t,r),k.length,A.hi,v,A.ai,new C.efE(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rD,A.Vr,v,v,v),!0,!1,A.ah,!0,!0)},
$S:34}
C.efC.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efE.prototype={
$2(d,e){return A.ab},
$S:35}
C.efD.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cp
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bA_,q,q,q,new C.efA(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.C(D.bjy,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bm(q,new B.b2(4,B.m(16),A.W),q,A.eH,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b2(4,B.m(16),D.aQ3),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ag,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.efB(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1696}
C.efA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hPZ(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o5(q.a,o,n,s)
r.bH(0,new B.bb(m,B.h0(A.bq,o+s.length),A.aL))
l.agf(k,m)
l.oA()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efB.prototype={
$1(d){var w=this.a
w.agf(this.b.a,d)
w.oA()},
$S:2}
C.efJ.prototype={
$0(){},
$S:0}
C.efa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edq.prototype={
$0(){},
$S:0}
C.edr.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h3B(this.b,w,!0)
w=this.a
w.r=null
w.wx()},
$S:0}
C.eds.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.edt.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.edp(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wx()},
$S:0}
C.edp.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efP.prototype={
$1(d){return B.p7(new C.efO(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.efO.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.C(E.adv,B.u(B.a([D.f1_,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ig(!0,w,e,A.z,D.eqS,new C.efN(this.a,this.b),20,A.rG,w,A.ai,!1),1)],v),A.af,w,A.e,A.j,0,A.p)},
$S:445}
C.efN.prototype={
$2(d,e){var w=null,v=D.Fk[e],u=C.hlW(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fA,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.elu,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.no,w,w,w)],m))
return B.aD(!1,A.Y,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efM(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:74}
C.efM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c8U(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a8(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efQ.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wx()},
$S:0}
C.ec4.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qR(4294967295,null,0,0,null,C.cy(),D.ma,"","","",D.da),s=this.b
C.c96(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Ba){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.edo.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.m(0,"id",C.cy())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iO
$.iO=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fRZ(q));++v.f},
$S:0}
C.edm.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.efY.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.edi.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.edh(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.edh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efX.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.P(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ed8.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.b_,A.aL),$.au())},
$S:260}
C.edK.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ehF.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ehG.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aq9(w).fu()
v=u.UE(w)
v.srp(B.h0(A.bq,v.a.a.length))},
$S:8}
C.eh4.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.VC(v)
if(u!=null&&u.b===D.cK)w.UE(u).saR(0,u.r)}else w.w=null},
$S:0}
C.ec5.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.be,!1,v.gpB().e.l(),A.az,"",4280640491,24,A.bg,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.ba,4280172719,2,"Tap to edit text",0,0,"",D.cd,D.cK,0.7,0.15,0.2)
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ec2.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.be,!1,4279310375,A.az,"",v.gpB().c.j(0.25).l(),24,A.bg,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpB().c.l(),2,"",0,0,"",D.cd,D.eS,0.25,0.3,0.3)
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ebT.prototype={
$0(){var w=C.ei(A.be,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a4,"",0.55,C.cy(),this.b,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.l3,0.6,0.2,0.18),v=this.a
A.d.H(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ebQ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bIP],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagQ().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,D.buK,r,r,r,r,new C.ebP(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cL(q,r,r,r,r,A.ai,!0),!0,!1,A.ah,!0,!0)},
$S:34}
C.ebP.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.ebR.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cy(),u=this.b,t=A.Q.ak(u.ac(),null),s=C.ei(A.be,!1,4279310375,A.az,u.b,4280640491,24,A.bg,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.ba,4280172719,2,t,0,0,"",D.cd,D.a1n,w,0.5-w/2,0.07)
t=this.a
A.d.H(t.gdk().z,s)
t.r=s.a},
$S:0}
C.edk.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.edl.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.edj(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.au()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.edj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ecx.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cK)s.Q=t.c.l()
else if(w===D.eS){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ecy(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ecy.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ecC.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ecD(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ecD.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ecA.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cK){s.Q=t.c
return}w=new C.ecB(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ecB.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.hJ(w,new C.ecz()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ecz.prototype={
$1(d){return d.b===D.cK},
$S:z+4}
C.ecw.prototype={
$0(){return C.c96(this.b,this.c,this.a.gpB())},
$S:0}
C.efz.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ehO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehP.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ehQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehR.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bh(s,new C.ehN(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQs()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wx()
t.IG()}},
$S:0}
C.ehN.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ehk.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a90(),s=w.b,r=u.a91(A.eZ,A.kB,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bt,B.p(v,B.B(B.a([B.D(u.aQJ(w.c,A.ak),1),new B.C(A.fn,B.p(v,D.buQ,A.h,v,v,new B.o(A.eZ.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.D(u.aQJ(s,A.eZ),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aC,A.w,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bt,u.aQM(A.eZ,d,D.bqX,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bR_(A.b2,d,A.rU,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQK(d,"Not now"))
return new C.Ii(B.u(p,A.af,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ehj.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Ii(B.u(B.a([v.a90(),A.P,v.a91(A.b2,D.bqE,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.d1(new B.aX(0,1/0,0,B.aG(d,A.bP,x.w).w.a.b*0.42),B.hE(w,new C.ehh(v,u,d),u.length,w,w,A.ai,new C.ehi(),!0),w),A.ay,v.aQK(d,"Cancel")],x.p),A.af,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.ehi.prototype={
$2(d,e){return A.T},
$S:35}
C.ehh.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.Y,!0,w,B.aH(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aib,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bFX,A.n),w,42,w,w,w,w,w,42),A.bb,B.D(B.u(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mV,w,w,w),A.d5,B.d("Updated "+this.a.O8(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ehg(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:74}
C.ehg.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.ehd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a90()
t=t.a91(A.aX,A.t0,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Ii(B.u(B.a([s,A.P,t,A.bt,B.B(B.a([B.D(B.dV(A.a4E,new C.ehb(d),B.da(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cc,u,new B.b5(B.m(14),A.W),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bI(D.eP8,new C.ehc(d),B.bk(A.eZ,u,u,u,A.c,u,A.cc,u,new B.b5(B.m(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.af,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.ehb.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.ehc.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.ehf.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a90(),s=w.b,r=u.a91(A.aS,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.art("Names",""+w.c),1),A.aa,B.D(u.art("Fields",""+w.d),1),A.aa,B.D(u.art("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.wq,v,new B.b5(B.m(14),A.W),v,v,v)
return new C.Ii(B.u(B.a([t,A.P,r,A.aN,p,A.bt,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.mU,v,v,v),new C.ehe(d),o),A.T,u.aQL(d,"Stay here",!1)],q),A.af,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ehe.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eed.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eec.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eh5.prototype={
$1(d){return d.b===D.cK},
$S:z+4}
C.ehE.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yv(A.d.dI(w.d,new C.ehC(v),new C.ehD(v)).hs(),w.f,null)},
$S:z+84}
C.ehC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehD.prototype={
$0(){return this.a},
$S:z+85}
C.ebY.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hb,w,w,w),w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bwy,w,w,w,w,new C.ebW(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eNi,w,w,w)],x.p)
if(v>1)t.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxH,w,w,w,w,new C.ebX(d),!1,w,w,w,w,w,D.f6z,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ebW.prototype={
$0(){B.a8(this.a,!1).M("scroll")
return null},
$S:0}
C.ebX.prototype={
$0(){B.a8(this.a,!1).M("split")
return null},
$S:0}
C.ebZ.prototype={
$0(){var w=this.b,v=w.c,u=C.ei(A.be,!1,4279310375,A.az,v,4280640491,24,A.bg,A.a4,"",0.84,C.cy(),w.b,"","",0,!1,"",0,D.ba,4280172719,2,v,0,0,"",D.cd,D.Pa,0.88,0.06,0.08)
v=this.a
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ec_.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iO
$.iO=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iO
$.iO=k+1
m.push(new C.ey(""+1000*l+"_"+k,D.Pa,0.04,0.06,0.92,0.88,v,24,A.a4,A.bg,A.az,4279310375,A.be,u,D.ba,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cd,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lo(""+1000*p+"_"+o,r+n,"",D.pm,4294967295,null,D.da,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ec3.prototype={
$0(){var w,v=C.cy(),u=this.a,t=u.e
t=(t==null?null:C.kh(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ei(A.be,!1,4279310375,A.az,t,4280640491,24,A.bg,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.kG,0.35,0.55,0.62)
A.d.H(u.gdk().z,w)
u.r=w.a},
$S:0}
C.ebV.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aYQ(o)
w=C.cy()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ei(A.be,!1,4279310375,A.az,"marriage_sign_placed_"+A.a.e1(v.db,"marriage_sign_",""),4280640491,24,A.bg,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.kG,s,u,t)
A.d.H(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.ebU(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hKb(p)}},
$S:0}
C.ebU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.efV.prototype={
$0(){var w=this.a,v=this.b
w.aYQ(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ehM.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eeg.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.eef())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eef.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ecG.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ecH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rJ()},
$S:8}
C.ebS.prototype={
$0(){var w=C.ei(A.be,!1,4279310375,A.az,"HD Photo",4280640491,24,A.bg,A.a4,"",0.8,C.cy(),this.b,"","",0,!1,"",0,D.ba,4280172719,2,"",0,0,"",D.cd,D.l3,0.8,0.1,0.1),v=this.a
A.d.H(v.gdk().z,w)
v.r=w.a},
$S:0}
C.edI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ec0.prototype={
$0(){var w=this.a,v=this.b
A.d.H(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ec9.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eca.prototype={
$0(){var w=this.b.hs(),v=C.cy(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ei(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.H(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ecb.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bh(w,new C.ec8(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ec8.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecm.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bh(w,new C.ec7(v))
if(u>0){A.d.cu(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ec7.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecp.prototype={
$0(){return this.a.as=A.be},
$S:0}
C.ecq.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ecr.prototype={
$0(){return this.a.as=A.dL},
$S:0}
C.ecs.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ect.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ecu.prototype={
$1(d){return d.b===D.cK},
$S:z+4}
C.ecv.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecc.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.H(v,C.BJ(w.gpB().c.j(0.18).l(),0.1,u,D.ba,0,2,1,0,0))
u=w.gdk().z
v=C.cy()
A.d.H(u,C.iJ(A.be,!1,w.gpB().d.l(),A.az,18,A.bg,A.I,0.07,v,"Document Header",0,D.da,0.9,0.05,0.02))},
$S:0}
C.ecd.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cy()
A.d.H(u,C.BJ(v.gpB().c.j(0.12).l(),0.1,t,D.ba,0,2,1,0,0.9))
t=v.gdk().z
u=C.cy()
w=C.byR()
A.d.H(t,C.iJ(A.L,!1,v.gpB().e.l(),A.az,12,A.bg,A.a4,0.06,u,"Footer \xb7 "+w,0,D.da,0.9,0.05,0.92))},
$S:0}
C.ece.prototype={
$0(){A.d.H(this.a.gdk().z,C.BJ(1727914055,0.12,C.cy(),D.ba,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ecf.prototype={
$0(){var w=4279310375
A.d.H(this.a.gdk().z,C.BJ(w,0.08,C.cy(),D.ba,w,2,0.5,0.2,0.4))},
$S:0}
C.ecg.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.H(v,C.BJ(w.gpB().c.j(0.35).l(),0.12,u,D.Bb,4280640491,2,0.2,0.15,0.55))
A.d.H(w.gdk().z,C.iJ(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.15,C.cy(),"Important note",0,D.pn,0.5,0.38,0.52))},
$S:0}
C.ech.prototype={
$0(){var w=this.a
A.d.H(w.gdk().z,C.BJ(4294507260,0.78,C.cy(),D.ba,4291548641,1.5,0.84,0.08,0.1))
A.d.H(w.gdk().z,C.iJ(A.be,!1,4279179050,A.az,16,A.bg,A.a4,0.7,C.cy(),"MEMO\n\nTo:\nFrom:\nDate: "+C.byR()+"\n\nSubject:\n\nBody text\u2026",0,D.da,0.76,0.12,0.14))},
$S:0}
C.eci.prototype={
$0(){var w=this.a
A.d.H(w.gdk().z,C.BJ(4294897802,0.28,C.cy(),D.ba,4294626325,2,0.3,0.62,0.12))
A.d.H(w.gdk().z,C.iJ(A.be,!1,4285611794,A.az,15,A.bg,A.a4,0.24,C.cy(),"Sticky note",0,D.aAq,0.26,0.64,0.14))},
$S:0}
C.ecj.prototype={
$0(){var w=4280640491,v=this.a
A.d.H(v.gdk().z,C.BJ(4293060848,0.04,C.cy(),D.ba,4291548641,2,0.8,0.1,0.48))
A.d.H(v.gdk().z,C.BJ(w,0.04,C.cy(),D.ba,w,2,0.55,0.1,0.48))},
$S:0}
C.eck.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.iJ(A.be,!1,w,A.az,18,A.bg,A.a4,0.62,C.cy(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ge,0.42,0.06,0.18))
A.d.H(v.gdk().z,C.iJ(A.be,!1,w,A.az,18,A.bg,A.a4,0.62,C.cy(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tf,0.42,0.52,0.18))},
$S:0}
C.ecl.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.BJ(858088427,0.62,C.cy(),D.ba,4280640491,2,0.42,0.05,0.18))
A.d.H(v.gdk().z,C.BJ(856004201,0.62,C.cy(),D.ba,4278556265,2,0.42,0.53,0.18))
A.d.H(v.gdk().z,C.iJ(A.be,!1,w,A.az,20,A.bg,A.I,0.1,C.cy(),"Option A",0,D.da,0.36,0.08,0.2))
A.d.H(v.gdk().z,C.iJ(A.be,!1,w,A.az,20,A.bg,A.I,0.1,C.cy(),"Option B",0,D.da,0.36,0.56,0.2))},
$S:0}
C.ecn.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.BJ(4294967295,0.36,C.cy(),D.ba,w,2,0.24,0.38,0.28))
A.d.H(v.gdk().z,C.iJ(A.L,!1,w,A.az,14,A.bg,A.a4,0.12,C.cy(),"[ QR CODE ]",0,D.da,0.24,0.38,0.4))},
$S:0}
C.eco.prototype={
$0(){return C.c96(this.b,D.Pb,this.a.gpB())},
$S:0}
C.edH.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2X.t(0,d),t=this.a
return t.b2G(d,v===d,A.aW,this.c,new C.edG(t,u,d,w),u)},
$S:z+25}
C.edG.prototype={
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
C.bzD(r,new C.edF(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edF.prototype={
$0(){return this.a.cZ(new C.edE(this.b,this.c))},
$S:0}
C.edE.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ec1.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qR(4294967295,null,0,0,null,C.cy(),D.ma,"","","",D.da),s=this.b
C.c96(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Ba){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ecK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hQ1(p,q.d,s,new C.ecJ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rJ(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecJ.prototype={
$1(d){return this.beX(d)},
beX(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.ecI(t,d))
w=2
return B.b(t.rJ(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ecI.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.ecL.prototype={
$0(){return this.a.bCk()},
$S:0}
C.ecM.prototype={
$0(){return this.a.aMa("Class Presentation",!0)},
$S:0}
C.ecN.prototype={
$1(d){return this.a.bDg(d.b,this.b,d.a)},
$S:z+88}
C.edn.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bP,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.efy.prototype={
$1(d){return new B.C(new B.M(0,0,0,B.aG(d,A.ep,x.w).w.f.d),new B.ed(new C.efx(this.a,this.b),null),null)},
$S:57}
C.efx.prototype={
$2(d,e){return B.p7(new C.efw(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1698}
C.efw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aH:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.bf,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.T,r,new B.C(A.acX,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bG(!1,A.yq,v,v,!0,v,v,new C.efu(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cL(B.a([p.aON(u,!0,!0,new C.efv(p,w.d))],q),e,D.bfc,v,v,A.ai,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kj,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.efu.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efv.prototype={
$0(){this.b.$1(new C.efs())
var w=this.a
if(w.c!=null)w.n(new C.eft())},
$S:0}
C.efs.prototype={
$0(){},
$S:0}
C.eft.prototype={
$0(){},
$S:0}
C.eh6.prototype={
$3(d,e,f){return A.bE},
$C:"$3",
$R:3,
$S:92}
C.eh7.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,new C.aw6(this.a,null),0.94+w*0.06,null,null),w)},
$S:446}
C.eh8.prototype={
$3(d,e,f){return A.bE},
$C:"$3",
$R:3,
$S:92}
C.eh9.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,new C.b9m(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:446}
C.eha.prototype={
$0(){return A.d.ck(this.a.d,0,C.U2(this.b))},
$S:0}
C.ec6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aH.j(0.72)],t):B.a([A.c.j(0.88),A.oM.j(0.75)],t)
r=B.H(A.bc.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bc.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.H(A.bc.j(0.45+q),A.r,1)
t=B.p(p,B.V(A_.X6,u?A.al:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.w,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.tl(A.fi,B.p(p,B.u(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aC,A.w,s,p,p),A.n),p,p,p,p,A.en,p,p,1/0),14,!1),A.ap)},
$S:584}
C.edb.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.edc.prototype={
$1(d){return d.length!==0},
$S:3}
C.edd.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k3
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.XG:A.A4}return w},
$S:673}
C.edg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dG.av(0,A.k.K(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aH.j(0.78)],s):B.a([A.c.j(0.92),A.mo.j(0.82)],s)
r=m.e
q=A.d.gJ(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kh(v.w)?A.uv:A.p8,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O8(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O8(v.f)
r=k.bDe(n,A.d.gJ(r),t)
return B.p(l,B.bu(j,new B.a5P(B.aD(!1,A.Y,!0,l,B.aH(!1,l,!0,B.p(l,B.dK(!1,A.JV,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.nr,t?A.aA:A.bL,l,l,l,l),l,l,l,new C.ede(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aC,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.edf(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.h,l,l,l,l,l,l,A.d8,l,l,l,l)},
$S:90}
C.edf.prototype={
$0(){return this.a.ace(this.b)},
$S:0}
C.ede.prototype={
$0(){return this.a.zP(this.b,this.c)},
$S:0}
C.eeH.prototype={
$0(){var w=this.a
w.b1j()
w.n(new C.eeG())},
$S:0}
C.eeG.prototype={
$0(){},
$S:0}
C.eeI.prototype={
$1(d){return this.a.agf(this.b.a,d)},
$S:2}
C.eeJ.prototype={
$0(){this.a.cZ(new C.eeF(this.b))},
$S:0}
C.eeF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.eeK.prototype={
$0(){this.a.cZ(new C.eeE(this.b))},
$S:0}
C.eeE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.eeL.prototype={
$0(){this.a.cZ(new C.eeD(this.b))},
$S:0}
C.eeD.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mf},
$S:0}
C.eeM.prototype={
$0(){this.a.cZ(new C.eeC(this.b))},
$S:0}
C.eeC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eeN.prototype={
$0(){var w=this.a
w.cZ(new C.eeB(w,this.b))},
$S:0}
C.eeB.prototype={
$0(){var w=this.b
return w.as=this.a.bXt(w.as)},
$S:0}
C.eeO.prototype={
$0(){return this.a.cZ(new C.eeA(this.b))},
$S:0}
C.eeA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eeP.prototype={
$0(){return this.a.cZ(new C.eez(this.b))},
$S:0}
C.eez.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ees.prototype={
$0(){return this.a.a_R(this.b.a)},
$S:0}
C.eet.prototype={
$0(){this.a.Yt()
return null},
$S:0}
C.eeu.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bP,x.w).w.a.a<900)w.acx()
else w.n(new C.eer(w))},
$S:0}
C.eer.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eev.prototype={
$0(){this.a.cZ(new C.eeq(this.b))},
$S:0}
C.eeq.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.eew.prototype={
$0(){return this.a.cZ(new C.eep(this.b))},
$S:0}
C.eep.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eex.prototype={
$0(){return this.a.cZ(new C.eeo(this.b))},
$S:0}
C.eeo.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eey.prototype={
$0(){return this.a.awc(null)},
$S:0}
C.edA.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.edB.prototype={
$0(){this.a.a7A()
return null},
$S:0}
C.edD.prototype={
$1(d){return this.beY(d)},
beY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Ix(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c1(A.aH,null,new C.edv(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.edw(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.edx(r))
s=s.c.F(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.edy(r))
s=s.c.F(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h4J(q,new C.De(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.edz(r,p))
s=s.c.F(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aey(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.edv.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dO_],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bwF:r
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.edu(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.edu.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.edw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edx.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.edy.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.edz.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edC.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yG(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yG(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yG(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aey(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dRZ,q,v,u,B.yG(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:127}
C.ehS.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byO(w,v)}},
$S:0}
C.ehT.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.eeS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bFR:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aQ:A.bx
return new B.C(A.hi,B.aJ(u,B.di(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,A.lp,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eeR(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:128}
C.eeR.prototype={
$0(){var w=this.a
return w.n(new C.eeQ(w,this.b))},
$S:0}
C.eeQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eeT.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_u:E.ark
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbGv():t.gbCF()
return B.hI(B.aJ(u,B.p(u,D.ahE,A.h,u,u,new B.o(u,u,u,u,B.a([new B.aa(0,A.G,A.d.gJ(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.w,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1701}
C.eeU.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hPi(v,w.a.c)},
$S:0}
C.egg.prototype={
$0(){return this.b.um(this.a.a)},
$S:0}
C.egh.prototype={
$0(){return this.a.um(D.ma)},
$S:0}
C.egi.prototype={
$0(){return this.a.um(D.Gc)},
$S:0}
C.egt.prototype={
$0(){return this.a.um(D.Gd)},
$S:0}
C.egE.prototype={
$0(){return this.a.um(D.Gb)},
$S:0}
C.egP.prototype={
$0(){return this.a.pm("lab_report")},
$S:0}
C.egW.prototype={
$0(){return this.a.pm("rubric")},
$S:0}
C.egX.prototype={
$0(){return this.a.pm("minutes")},
$S:0}
C.egY.prototype={
$0(){return this.a.pm("agenda")},
$S:0}
C.egZ.prototype={
$0(){return this.a.pm("timeline")},
$S:0}
C.eh_.prototype={
$0(){return this.a.pm(this.b.a)},
$S:0}
C.egj.prototype={
$0(){this.a.TP()
return null},
$S:0}
C.egk.prototype={
$0(){this.a.TJ()
return null},
$S:0}
C.egl.prototype={
$0(){return this.a.pm("table")},
$S:0}
C.egm.prototype={
$0(){return this.a.pm("sticky")},
$S:0}
C.egn.prototype={
$0(){return this.a.pm("divider")},
$S:0}
C.ego.prototype={
$0(){return this.a.pm("header_bar")},
$S:0}
C.egp.prototype={
$0(){return this.a.om(D.ba)},
$S:0}
C.egq.prototype={
$0(){return this.a.om(D.ey)},
$S:0}
C.egr.prototype={
$0(){return this.a.om(D.jm)},
$S:0}
C.egs.prototype={
$0(){return this.a.om(D.Bb)},
$S:0}
C.egu.prototype={
$0(){return this.a.om(D.jn)},
$S:0}
C.egv.prototype={
$0(){return this.a.om(D.kH)},
$S:0}
C.egw.prototype={
$0(){return this.a.om(D.fe)},
$S:0}
C.egx.prototype={
$0(){this.a.FY()
return null},
$S:0}
C.egy.prototype={
$0(){this.a.LJ()
return null},
$S:0}
C.egz.prototype={
$0(){return this.a.pm("quote")},
$S:0}
C.egA.prototype={
$0(){return this.a.a5L()},
$S:0}
C.egB.prototype={
$0(){this.a.Yy()
return null},
$S:0}
C.egC.prototype={
$0(){var w=this.a
return w.n(new C.eg6(w))},
$S:0}
C.eg6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.egD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nu(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.ege(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ege.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.egF.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jl()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2Y.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.bf
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.w,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a2Y.t(0,q))u.push(B.an(s,B.p(s,D.Lu,A.h,s,s,D.Ct,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hi,B.aJ(s,B.hI(new B.am(A.V,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.egd(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+89}
C.egd.prototype={
$0(){this.a.a62(this.b)
return null},
$S:0}
C.egG.prototype={
$0(){this.a.a61(this.b)
return null},
$S:0}
C.egH.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hlX(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.bf
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qR(4294967295,r,0,0,r,"preview_"+w,D.pm,"","","",D.da)
C.h1G(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h3_(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.aic,A.h,r,r,D.Ct,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.k0,B.aJ(r,B.u(B.a([new B.am(A.V,r,A.a9,A.q,u,r),A.d5,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.egc(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+90}
C.egc.prototype={
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
break}s.cZ(new C.eg2(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eg2.prototype={
$0(){return C.h1G(this.a,this.b.a)},
$S:0}
C.egf.prototype={
beZ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2X.t(0,d)
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
$2(d,e){return this.beZ(d,e)},
$S:z+91}
C.eh0.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.z(new B.J(d,new C.eh2(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ch(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ)},
$S:z+92}
C.eh2.prototype={
$1(d){var w=this
return w.a.b2G(d,w.b===d,w.c,w.d,new C.eh1(w.e,d),!D.a2X.t(0,d))},
$S:z+25}
C.eh1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.egI.prototype={
$1(d){this.b.$2(d,new C.egb(this.a,d,this.c))
return null},
$S:z+26}
C.egb.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bzD(u,new C.eg1(v,this.c,w),w)},
$S:0}
C.eg1.prototype={
$0(){return this.a.cZ(new C.eg_(this.b,this.c))},
$S:0}
C.eg_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.egJ.prototype={
$1(d){this.b.$2(d,new C.ega(this.a,d))
return null},
$S:z+26}
C.ega.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fwF(u,new C.eg0(v,w),w)},
$S:0}
C.eg0.prototype={
$0(){var w=this.a
return w.cZ(new C.efZ(w,this.b))},
$S:0}
C.efZ.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.egK.prototype={
$0(){var w=this.a
return w.n(new C.eg9(w))},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.egL.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byO(w,v)}},
$S:0}
C.egM.prototype={
$0(){this.a.GK()
return null},
$S:0}
C.egN.prototype={
$0(){return this.a.a5L()},
$S:0}
C.egO.prototype={
$0(){var w=this.a,v=w.jl()
if(v!=null&&v.b===D.cK)w.cZ(new C.eg8(v))},
$S:0}
C.eg8.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.egQ.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.egR.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.E_(v,!0)
return null},
$S:0}
C.egS.prototype={
$0(){this.a.cZ(new C.eg7(this.b))},
$S:0}
C.eg7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.egT.prototype={
$0(){this.a.cZ(new C.eg5(this.b))},
$S:0}
C.eg5.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.egU.prototype={
$0(){this.a.cZ(new C.eg4(this.b))},
$S:0}
C.eg4.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mf},
$S:0}
C.egV.prototype={
$0(){this.a.cZ(new C.eg3(this.b))},
$S:0}
C.eg3.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ecF.prototype={
$1(d){return this.beW(d)},
beW(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.cZ(new C.ecE(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.ecE.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ehn.prototype={
$0(){var w=this.a
return w.cZ(new C.ehm(w,this.b))},
$S:0}
C.ehm.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eho.prototype={
$0(){var w=this.a
return w.cZ(new C.ehl(w,this.b))},
$S:0}
C.ehl.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.edN.prototype={
$0(){return this.a.cZ(new C.edM(this.b))},
$S:0}
C.edM.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.edO.prototype={
$0(){return this.a.cZ(new C.edL(this.b))},
$S:0}
C.edL.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eek.prototype={
$1(d){var w=x.gh
w=B.z(new B.J(D.ajS,new C.eej(),w),w.k("ai.E"))
return w},
$S:z+94}
C.eej.prototype={
$1(d){var w=null
return B.yG(B.d(d.b,w,w,w,w,w,w,A.mX,w,w,w),48,d,x.fO)},
$S:z+95}
C.ehA.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a3(v,w?8:0,null,null)},
$S:35}
C.ehz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jG()?q:new C.ehx(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.bf:A.cq
v=B.H(v,A.r,o?2:1)
u=r.d?A.d_:A.c
t=B.bZ(0,C.h3_(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.V,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.mT,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adP,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ehy(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:76}
C.ehy.prototype={
$0(){var w=this.a
return w.n(new C.eht(w,this.b))},
$S:0}
C.eht.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IG()},
$S:0}
C.ehx.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c1(null,null,new C.ehu(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.ehv(q,s))
q.aNy()}else if(r==="del"){q=t.a
q.n(new C.ehw(q,s))
q.aML()}else if(r==="up")t.a.aZ2(s,s-1)
else if(r==="down")t.a.aZ2(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehu.prototype={
$1(d){var w=null,v=B.a([B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byi,w,w,w,w,new C.ehp(d),!1,w,w,w,w,w,w,w,D.eO9,w,w,w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byb,w,w,w,w,new C.ehq(d),!1,w,w,w,w,w,w,w,A.vk,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxt,w,w,w,w,new C.ehr(d),!1,w,w,w,w,w,w,w,D.eVB,w,w,w))
if(u<this.b.r.length-1)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bzt,w,w,w,w,new C.ehs(d),!1,w,w,w,w,w,w,w,D.eNZ,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ehp.prototype={
$0(){B.a8(this.a,!1).M("dup")
return null},
$S:0}
C.ehq.prototype={
$0(){B.a8(this.a,!1).M("del")
return null},
$S:0}
C.ehr.prototype={
$0(){B.a8(this.a,!1).M("up")
return null},
$S:0}
C.ehs.prototype={
$0(){B.a8(this.a,!1).M("down")
return null},
$S:0}
C.ehv.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehB.prototype={
$0(){return this.a.a5L()},
$S:0}
C.ed4.prototype={
$0(){var w=this.a
w.b1j()
w.awc(null)},
$S:0}
C.ed3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.aa(0,A.G,A.x.j(0.35),A.dm,24)],x.V),m=this.b
if(m.f!=null){w=B.aY(m.e)
v=m.f
v.toString
v=new B.a7(A.ax,A.aC,A.w,B.a([w,B.aY(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aY(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aY(m.e)
q=m.f
q.toString
q=new B.a7(A.ax,A.aC,A.w,B.a([r,B.aY(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bT(A.kc,new B.o(m.f==null?B.aY(m.e):p,p,p,p,p,r,A.n),A.b9),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.ed2(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bT(new B.am(A.V,p,A.a9,A.h,s,new B.cw("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.b9)},
$S:443}
C.ed2.prototype={
$1(d){var w=this
return w.a.byG(d,w.b,w.c,w.d)},
$S:z+23}
C.ecS.prototype={
$0(){var w=this
if(w.b){w.a.LS(w.c)
return}if(w.d){w.a.a5J(w.c)
return}if(w.e){w.a.adR(w.c)
return}if(w.f)w.a.b1S(w.c)},
$S:0}
C.ecT.prototype={
$0(){this.a.LS(this.b)
return null},
$S:0}
C.ecU.prototype={
$0(){return this.a.a_R(this.b.a)},
$S:0}
C.ecV.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ecR(u,d,w.c,w.d))
v.Go()
v.nB()
v.oA()},
$S:18}
C.ecR.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ecW.prototype={
$1(d){return this.a.agf(this.b.a,d)},
$S:2}
C.ecY.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fI_(w))u.a.LS(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b1S(v)},
$S:0}
C.ecX.prototype={
$0(){return this.a.a_R(this.b.a)},
$S:0}
C.ecZ.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ecQ(w.b,d,w.c,w.d))
v.Go()
v.nB()
v.oA()},
$S:18}
C.ecQ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cK)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ed_.prototype={
$1(d){var w=this.a
w.n(new C.ecP(this.b,d))
w.Go()
w.nB()
w.oA()},
$S:242}
C.ecP.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cK)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ed0.prototype={
$0(){var w=this.a
w.n(new C.ecO(this.b))
w.Go()
w.nB()
w.oA()},
$S:0}
C.ecO.prototype={
$0(){this.a.r=C.h2v()},
$S:0}
C.ed1.prototype={
$0(){return this.a.a_R(this.b.a)},
$S:0}
C.eeW.prototype={
$0(){var w=this.a
return w.n(new C.eeV(w))},
$S:0}
C.eeV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eeX.prototype={
$1(d){return this.a.ctv(this.b.a,d)},
$S:2}
C.ee0.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.ee1.prototype={
$1(d){return this.a.$1(new C.ee_(this.b,d))},
$S:6}
C.ee_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ee2.prototype={
$1(d){return this.a.$1(new C.edZ(this.b,d))},
$S:6}
C.edZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ee3.prototype={
$1(d){return this.a.$1(new C.edY(this.b,d))},
$S:6}
C.edY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ee4.prototype={
$1(d){return this.a.$1(new C.edX(this.b,d))},
$S:6}
C.edX.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ee5.prototype={
$1(d){return this.a.$1(new C.edW(this.b,d))},
$S:6}
C.edW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ee6.prototype={
$1(d){return this.b.$1(new C.edV(this.a,this.c))},
$S:9}
C.edV.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ee7.prototype={
$1(d){return this.b.$1(new C.edU(this.a,this.c))},
$S:9}
C.edU.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ee8.prototype={
$1(d){var w=null,v=this.b,u=B.aY(d),t=v.Q===d,s=t?A.bj:A.cT
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edT(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.edT.prototype={
$0(){return this.a.$1(new C.edQ(this.b,this.c))},
$S:0}
C.edQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ee9.prototype={
$1(d){return this.a.$1(new C.edS(this.b,d))},
$S:1702}
C.edS.prototype={
$0(){var w=this.b
return this.a.as=w.gJ(w)},
$S:0}
C.eea.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(B.aY(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edR(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.edR.prototype={
$0(){return this.a.$1(new C.edP(this.b,this.c))},
$S:0}
C.edP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eeb.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a8(w,!1).oO()}else w=!1
if(w){w=v.a.c
w.toString
B.a8(w,!1).eD()}v.a.ap9()},
$S:0}
C.eee.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dG.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ap(u,A.bc,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.t0,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mB,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.Y,!0,n,B.aH(!1,m,!0,B.eq(new B.a3(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aC,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:125}
C.ebO.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ap(u,A.bc,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.Y,!0,p,B.aH(!1,o,!0,B.eq(B.u(B.a([B.e5(A.A,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ab,B.d(q.e,p,p,p,p,p,p,A.jQ,A.L,p,p)],x.p),A.m,p,A.b6,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aC,A.w,u,p,p),A.n),p,A.DK,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:125}
C.efT.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aj2,A.z,!0,w,!0,w,!1,w,A.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.am,w,w,w,w)
return B.eo(B.a([B.bG(!1,A.df,w,w,!0,w,w,new C.efR(d),w,w),B.bI(A.pC,new C.efS(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.efR.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efS.prototype={
$0(){var w=this.b.a.a
B.a8(this.a,!1).M(w)
return null},
$S:0}
C.cVq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dG.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ex.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.av(0,i)
v=B.m(22)
t=B.ap(A.aI,A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.aa(w*2,A.G,A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK).j(0.18+w*0.12),A.J,32+w*10),D.a7a],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.b0,0.9,A.w,k,0,B.a([A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.w,k,0,B.a([m,A.d.gai(C.kh(j.a.c.w)?D.t7:M.mK).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kh(m)?D.t7:M.mK
s=B.a([new B.aa(0,A.G,A.d.gJ(C.kh(m)?D.t7:M.mK).j(0.45+w*0.2),A.cs,18)],s)
m=x.p
l=B.a([p,B.e5(A.A,B.p(k,B.V(C.kh(j.a.c.w)?A.uv:A.p8,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aC,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fZ,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eGJ,A.L,k,k),A.av,B.d(j.gcoD(),k,k,k,k,k,k,D.eL8,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQs()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.kh(j.a.c.w)?D.t7:M.mK).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ab],m))}s.push(new C.Ib(A.wS,"Download PDF","pdf",A.de,j.Hz(0),!1,k))
p=j.a.c
if(!p.z||p.gQs()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ib(A.kB,"Transfer to "+C.h2x(p==null?"":p),"transfer_hati",A.aS,j.Hz(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hz(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ib(D.bq0,"Rename presentation","rename",A.cb,n,!1,k),A.ar,new C.Ib(A.afp,"Duplicate","duplicate",A.b1,j.Hz(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ib(A.e4,"Delete presentation","delete",A.aG,j.Hz(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hz(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hz(n)
s.push(B.dP(B.d7(B.bG(!1,E.aKQ,k,k,!0,k,k,new C.cVp(d),k,B.fp(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,A.at,k,D.bih,k,k,k,k,k,A.k6,k,k)),n),new B.v(0,(1-p)*8)))
return B.e5(A.A,B.d7(B.aD(!1,A.Y,!0,k,B.p(k,B.bu(q,new B.am(A.V,k,A.a9,A.q,B.a([o,new B.C(D.bhq,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.Sy,new B.o(A.aH,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cVp.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.cVM.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cVN.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cVn.prototype={
$1(d){var w=this.a
return w.n(new C.cVj(w))},
$S:23}
C.cVj.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cVo.prototype={
$1(d){var w=this.a
return w.n(new C.cVi(w))},
$S:53}
C.cVi.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVm.prototype={
$0(){var w=this.a
return w.n(new C.cVk(w))},
$S:0}
C.cVk.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVl.prototype={
$0(){var w=this.a.a.e
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.eiy.prototype={
$0(){return $.bgN=!$.bgN},
$S:0}
C.eio.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQC())u.asX()},
$S:0}
C.eix.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eip.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eiq.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.asX()},
$S:0}
C.eik.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gJ(w.a.c.r).r
w.d=0},
$S:0}
C.eil.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eim.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ein.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.K(w-1+v,v)},
$S:0}
C.eiv.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.aY,A.q,w,null)},
$S:1703}
C.eiw.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hE)return new B.cZ(e,!1,d,null)
w=this.a
return w.cmJ(w.e,d,e)},
$S:447}
C.eir.prototype={
$2(d,e){var w=B.dg(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gq(0))*1.5708)
return B.fm(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eis.prototype={
$2(d,e){var w=B.dg(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jw((1-v.gq(0))*1.5708)
return B.fm(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eit.prototype={
$2(d,e){var w=B.dg(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gq(0)*0.8)
w.jw(v.gq(0)*0.35)
return B.fm(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiu.prototype={
$2(d,e){var w=B.dg(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gq(0)*1.2)
return B.fm(A.a7,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiz.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWQ().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWQ().x
t===$&&B.c()
return new C.aYO(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.H9(v.c,t,!0,new B.cw("cine"+u,x.W))},
$S:656}
C.eiB.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bP,x.w).w.a.a*0.55)w.asX()
else w.cbD()},
$S:53}
C.eiA.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fnB.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:448}
C.fnK.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eo(B.a([B.bG(!1,A.df,w,w,!0,w,w,new C.fnH(d),w,w),B.bG(!1,D.f1i,w,w,!0,w,w,new C.fnI(d,this.b,v),w,w),B.bI(A.aL5,new C.fnJ(d,v,this.c),w)],x.p),w,w,L.rm,new B.a3(320,w,t,w),w,w,w,w,D.f2C,w)},
$S:20}
C.fnH.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fnI.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
C.fIE(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fnJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
t=u.b
w=2
return B.b(C.aMU(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aMj(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fnA.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c99.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fnG.prototype={
$1(d){return d.ac()},
$S:z+14}
C.eYx.prototype={
$1(d){return C.fIC(C.U2(B.Z(d,x.N,x.z)),this.a)},
$S:z+96}
C.fvV.prototype={
$3(d,e,f){return A.bE},
$C:"$3",
$R:3,
$S:92}
C.fvW.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,D.feT,0.94+w*0.06,null,null),w)},
$S:446}
C.fvX.prototype={
$1(d){var w=this
return new C.U4(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ei4.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ei0.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ei3.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.U5(u,this.b,w.gaK8(),v,null)},
$S:z+99}
C.ei1.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ei2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ei5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ei6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ei9.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eia.prototype={
$0(){var w=this.a
return w.n(new C.ei8(w))},
$S:0}
C.ei8.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eib.prototype={
$0(){var w=this.a
return w.n(new C.ei7(w))},
$S:0}
C.ei7.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eic.prototype={
$1(d){return this.a.bDf(d,this.b)},
$S:z+100}
C.ei_.prototype={
$0(){var w=this.a
return w.n(new C.ehZ(w,this.b))},
$S:0}
C.ehZ.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eid.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eie.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eif.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eig.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eih.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fC(new B.fv(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.F(x.q).f.P(D.etR)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebI.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ebH())},
$S:0}
C.ebH.prototype={
$0(){},
$S:0}
C.ebJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fu()},
$S:8}
C.ebE.prototype={
$1(d){return this.a.n(new C.ebD())},
$S:2}
C.ebD.prototype={
$0(){},
$S:0}
C.ebF.prototype={
$1(d){return this.a.aV2()},
$S:2}
C.ebG.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eij.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.eii(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eii.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fhV.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.en(new B.k2(this.c,new C.fhU(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:206}
C.fhU.prototype={
$3(d,e,f){return new C.H9(e,!1,!1,new B.cw(e.a,x.W))},
$S:z+102}
C.fhW.prototype={
$1(d){var w=null
return B.nW(!1,B.at(new C.br5(this.a,this.b,w),w,w,w),w,x.z)},
$S:266}
C.fi_.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gm4(),$async$$0)
case 3:w=4
return B.b(B.bK(A.oY,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gm4(),$async$$0)
case 5:s=$.aT.af$.x.h(0,t.a)
r=s==null?null:s.gb4()
if(!(r instanceof B.q0))throw B.R("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1706}
C.fi0.prototype={
bfu(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fK),$async$$1)
case 3:r=f
if(r==null)throw B.R("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hB([J.f2(A.dz.gaL(r))],"image/png"))
t.toString
s=Ai.fzI(t)
w=4
return B.b(new B.pw(s,"load",!1,x.ev).gJ(0).cJ(0,A.kr),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bfu(d)},
$S:1707}
C.fhX.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fhY.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fC(0)},
$S:141}
C.fhZ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eSV.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eDr,A.L,w,w)},
$S:1708}
C.eSW.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.mS(A.bi,w,A.dI,8,w,e===0?w:e,w),A.ap)},
$S:565}
C.e2f.prototype={
$1(d){this.a.XW()
return null},
$S:14}
C.e2d.prototype={
$0(){return this.a.e=D.bdt},
$S:0}
C.e2e.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bu
return this.b.e=w},
$S:0}
C.cbJ.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cbK.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aIY.prototype
w.bpX=w.p
w=C.aIr.prototype
w.bpp=w.p
w=C.aId.prototype
w.bpa=w.p
w=C.aIq.prototype
w.bpo=w.p
w=C.aIW.prototype
w.bpV=w.p
w=C.aKf.prototype
w.bro=w.p
w=C.aH8.prototype
w.bo2=w.p
w=C.aJ9.prototype
w.bq8=w.p
w=C.aJa.prototype
w.bq9=w.p
w=C.b_t.prototype
w.bkI=w.azb})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hNh","al4",104)
v(C.aG8.prototype,"gbXO","WX",0)
var r
u(r=C.auV.prototype,"gcnZ","co_",38)
v(r,"gbYy","aaK",0)
v(r=C.auR.prototype,"gaTT","CR",3)
v(r,"gbYv","bYw",3)
v(r,"gate","wL",0)
v(r,"gatf","Hh",0)
t(C,"hNG","hjK",105)
v(C.aAT.prototype,"gc_q","c_r",3)
s(C,"hNR",0,null,["$4$paper$photo$request$template"],["fp0"],106,0)
s(C,"hNQ",0,null,["$5$doc$history$instruction$photo$template"],["by8"],107,0)
v(r=C.aBb.prototype,"gc07","Hw",0)
v(r,"gbCI","UQ",0)
v(r,"gc0a","abq",0)
v(r,"gc09","XI",0)
v(r,"gaUL","D6",0)
v(C.aBf.prototype,"gc0c","XK",0)
v(r=C.aCy.prototype,"gaUV","O4",0)
v(r,"gcgh","aZ8",3)
v(r,"gcpm","axq",86)
v(r,"gbGm","a7E",0)
v(r,"gc0D","zs",0)
v(r=C.aEs.prototype,"gcar","Z1",0)
v(r,"gcaz","Z4",0)
v(r,"gbvP","a68",0)
v(r,"gc0H","abA",0)
v(C.aEr.prototype,"gc0I","abB",0)
v(C.ayx.prototype,"gbuP","a5W",0)
v(C.awY.prototype,"gc0J","XV",0)
w(C,"hO3","hLZ",12)
w(C,"hO1","hIX",12)
w(C,"hO2","hKZ",12)
v(r=C.aBs.prototype,"gcsq","csr",3)
v(r,"gcez","ceA",3)
u(r,"gDc","ace",7)
v(r,"gbAm","aol",3)
u(r,"gDd","aWa",7)
v(r,"gc2Q","abX",0)
v(r,"gc1H","abW",0)
v(r,"gc4X","acf",0)
v(r,"gbCF","a7f",0)
v(r,"gc5P","Yt",0)
v(r,"gc5Q","acw",0)
v(r,"gc6l","acD",0)
v(r,"gc59","aci",0)
v(r,"gbGv","a7I",0)
v(r,"gaNx","aNy",3)
v(r,"gaMK","aML",3)
v(r,"gaIt","aIu",3)
v(r,"gaMJ","ap9",3)
u(r,"gbv5","bv6",80)
v(r,"gax_","b17",3)
v(r,"gc1J","c1K",3)
v(r,"gbRj","bRk",3)
v(r,"gbF5","bF6",3)
v(r=C.aBv.prototype,"gcrm","crn",3)
v(r,"gcr1","cr2",3)
t(C,"hO4","hMf",2)
v(r=C.aBt.prototype,"gc0P","HB",0)
v(r,"gcib","Pv",0)
v(r,"gc0M","HA",0)
v(r,"gctG","a0t",0)
v(r,"gc6x","acK",0)
v(C.aBr.prototype,"gc0Q","aV2",3)
v(r=C.aBu.prototype,"gbHg","a7S",0)
u(r,"gc0N","c0O",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nr,C.Q0,C.bDo,C.bBZ,C.cqW,C.cqU,C.bJi,C.b55,C.cqV,C.bAz,C.cbD,C.cbB,C.cbC,C.cbA,C.aq9,C.cbz,C.bKb,C.nU,C.aC3,C.ja,C.nd,C.a5O,C.yt,C.kZ,C.o5,C.lK,C.yv,C.nh,C.a5W,C.aoy,C.aYP,C.e1F,C.kW,C.Dn,C.ek,C.iM,C.De,C.wK,C.ey,C.lo,C.hS,C.jt,C.a5X,C.acS,C.aYQ,C.b_t,C.a0R])
u(B.ky,[C.cyK,C.bUj,C.fd7,C.cAf,C.czC,C.fiE,C.dPH,C.dPG,C.e2i,C.e2h,C.fk2,C.eZD,C.eZE,C.c7x,C.c7y,C.c7z,C.e6G,C.eCB,C.eBZ,C.eBY,C.eD1,C.eCz,C.eCs,C.eCL,C.eDr,C.f5i,C.eJi,C.eJh,C.eJL,C.e1I,C.fnx,C.dLq,C.ftH,C.fko,C.c91,C.c9_,C.c94,C.fkT,C.fkU,C.fkV,C.fkW,C.c8M,C.c8N,C.dyM,C.c8J,C.fkS,C.eQt,C.dJC,C.c8C,C.e1o,C.fit,C.efi,C.efH,C.efE,C.efD,C.efO,C.efN,C.ehi,C.ehh,C.efx,C.efw,C.ec6,C.edg,C.egf,C.ehA,C.ehz,C.ed3,C.eee,C.ebO,C.cVq,C.eiv,C.eiw,C.eir,C.eis,C.eit,C.eiu,C.eiz,C.c99,C.ei4,C.eif,C.cbK])
u(B.i2,[C.cyL,C.cyM,C.bKc,C.faW,C.bUi,C.bUl,C.fqd,C.eRr,C.eRi,C.eRy,C.eYy,C.eYz,C.fd8,C.fd6,C.fpL,C.faC,C.fqz,C.cA5,C.cAa,C.cAc,C.cA8,C.cAd,C.cA6,C.cAe,C.cA1,C.czZ,C.czY,C.cA4,C.czx,C.czv,C.fhF,C.fhG,C.f1O,C.fiF,C.fiL,C.f0S,C.c3R,C.fhD,C.fhE,C.fcv,C.fcw,C.fiK,C.fiG,C.fiI,C.fiJ,C.fiH,C.ftZ,C.fcz,C.fcA,C.fcD,C.fcE,C.fcH,C.fcI,C.fvd,C.f_3,C.fvo,C.e5A,C.e5B,C.e5C,C.e5i,C.e5u,C.e5v,C.e5x,C.c7w,C.c7u,C.c7v,C.fik,C.fim,C.fil,C.eZF,C.eZG,C.fvr,C.e6L,C.e6M,C.e6D,C.e6E,C.e6H,C.e6I,C.fvH,C.eDs,C.eCS,C.eCC,C.eCP,C.eBU,C.eBV,C.eBW,C.eC_,C.eC0,C.eDh,C.eDo,C.eDq,C.eD0,C.eD2,C.eD6,C.eD7,C.eD8,C.eDc,C.eD3,C.eD4,C.eCb,C.eCc,C.eCd,C.eCe,C.eCf,C.eCg,C.eCh,C.eCi,C.eCj,C.eBx,C.eBy,C.eBz,C.eBA,C.eBC,C.eBD,C.eC5,C.eC6,C.eC7,C.eC8,C.eC9,C.eBH,C.eBI,C.eBJ,C.eBK,C.eCr,C.eCK,C.ffI,C.ffH,C.c8T,C.f5h,C.fnt,C.fnm,C.fnp,C.flm,C.fln,C.flo,C.ffP,C.ffO,C.ffN,C.ffL,C.eZA,C.eZB,C.eZC,C.fvT,C.eJk,C.eJl,C.eJe,C.eJ8,C.eJE,C.eJF,C.eJH,C.eJI,C.eJD,C.fvS,C.eJ_,C.f4x,C.e1H,C.fnv,C.fnw,C.fny,C.fnr,C.fns,C.fv5,C.dbb,C.dbh,C.e1G,C.eW9,C.eWb,C.eWa,C.eW8,C.fgT,C.fgV,C.eY7,C.fmY,C.fmZ,C.fn_,C.fna,C.fnf,C.fng,C.fnh,C.fni,C.fnj,C.fnk,C.fnl,C.fn0,C.fn1,C.fn2,C.fn3,C.fn4,C.fn5,C.fn6,C.fn7,C.fn8,C.fn9,C.fnb,C.fnc,C.fnd,C.fne,C.feJ,C.f4k,C.f4j,C.fnE,C.dLr,C.dLp,C.eI9,C.c3s,C.c3u,C.ftJ,C.d0M,C.d0O,C.ftI,C.ftG,C.fvR,C.fkk,C.d0m,C.fcL,C.fcM,C.c8R,C.c8S,C.c8Q,C.c8G,C.c8H,C.c8D,C.c8E,C.c8F,C.c97,C.c92,C.c8Y,C.c8Z,C.c90,C.c93,C.c95,C.fkX,C.c8L,C.c8O,C.c8P,C.c8V,C.c8W,C.fnL,C.fmS,C.c8K,C.c8I,C.fkR,C.f6D,C.c8B,C.eFU,C.f9q,C.ehW,C.eel,C.eem,C.efW,C.efK,C.efL,C.edJ,C.ehH,C.ehI,C.ehJ,C.ed7,C.efp,C.efr,C.ef1,C.eeZ,C.eeh,C.eei,C.ef8,C.ed9,C.efk,C.efl,C.efj,C.efn,C.efm,C.efF,C.efG,C.efI,C.efB,C.eds,C.edp,C.efP,C.edh,C.ehG,C.ebQ,C.edk,C.edj,C.ecy,C.ecD,C.ecB,C.ecz,C.ehO,C.ehP,C.ehQ,C.ehN,C.ehk,C.ehj,C.ehd,C.ehf,C.eh5,C.ehE,C.ehC,C.ebY,C.ebU,C.eef,C.ecH,C.ec8,C.ec7,C.ecu,C.ecv,C.edH,C.ecJ,C.ecN,C.efy,C.eh6,C.eh7,C.eh8,C.eh9,C.edb,C.edc,C.edd,C.eeI,C.edD,C.edv,C.edC,C.eeS,C.eeT,C.egF,C.egH,C.eh0,C.eh2,C.egI,C.egJ,C.ecF,C.eek,C.eej,C.ehu,C.ed2,C.ecV,C.ecW,C.ecZ,C.ed_,C.eeX,C.ee0,C.ee1,C.ee2,C.ee3,C.ee4,C.ee5,C.ee6,C.ee7,C.ee8,C.ee9,C.eea,C.efT,C.cVn,C.cVo,C.eiB,C.fnB,C.fnK,C.fnA,C.fnG,C.eYx,C.fvV,C.fvW,C.fvX,C.ei3,C.eic,C.ebJ,C.ebE,C.ebF,C.fhV,C.fhU,C.fhW,C.fi0,C.fhX,C.fhY,C.eSV,C.eSW,C.e2f,C.cbJ])
u(B.jl,[C.cyN,C.eRn,C.eRs,C.eRt,C.eRo,C.eRp,C.eRq,C.eRg,C.eRh,C.eRj,C.eRk,C.eRx,C.eRw,C.eRm,C.eRl,C.eRu,C.eRv,C.eRA,C.eRB,C.eRz,C.cA7,C.cAb,C.cA9,C.cA_,C.cA0,C.cA2,C.czW,C.czX,C.cA3,C.czV,C.czU,C.czT,C.czm,C.czl,C.czo,C.czw,C.czp,C.czn,C.czr,C.czs,C.czt,C.czq,C.czu,C.czy,C.czz,C.czA,C.czB,C.fct,C.fcu,C.fcr,C.fcs,C.dYi,C.dYg,C.dYh,C.dYj,C.dYk,C.dPF,C.fcx,C.fcy,C.fcB,C.fcC,C.fcF,C.fcG,C.e2g,C.fkr,C.fkq,C.e5z,C.e5y,C.e5c,C.e58,C.e5j,C.e5k,C.e5l,C.e5e,C.e5f,C.e5g,C.e5h,C.e5d,C.e5a,C.e5b,C.e5r,C.e5s,C.e5q,C.e5t,C.e5p,C.e5o,C.e5n,C.e5w,C.e5m,C.e59,C.e6K,C.e6y,C.e6z,C.e6F,C.e6A,C.e6C,C.e6B,C.e6J,C.eCk,C.eCI,C.eC3,C.eC4,C.eC1,C.eC2,C.eCO,C.eCN,C.eCM,C.eCR,C.eCQ,C.eBT,C.eBX,C.eBS,C.eBR,C.eBO,C.eBQ,C.eBP,C.eDp,C.eDi,C.eDg,C.eDj,C.eDf,C.eDk,C.eDe,C.eDl,C.eDm,C.eDn,C.eDd,C.eD_,C.eCV,C.eD5,C.eCZ,C.eD9,C.eCY,C.eDa,C.eCX,C.eDb,C.eCW,C.eCF,C.eCE,C.eCG,C.eCD,C.eCH,C.eCx,C.eCw,C.eCy,C.eCv,C.eCu,C.eCt,C.eBB,C.eBw,C.eBL,C.eBG,C.eBM,C.eBF,C.eBN,C.eBE,C.eCA,C.eCo,C.eCn,C.eCp,C.eCm,C.eCq,C.eCl,C.eCJ,C.eCU,C.eCT,C.eCa,C.fno,C.fnq,C.fnu,C.ffM,C.fid,C.fib,C.fic,C.eJm,C.eJn,C.eJj,C.eJd,C.eJc,C.eJf,C.eJg,C.eJ2,C.eJ3,C.eJ5,C.eJ6,C.eJ7,C.eJ4,C.eJ9,C.eJA,C.eJB,C.eJz,C.eJC,C.eJy,C.eJx,C.eJw,C.eJG,C.eJv,C.eJu,C.eJt,C.eJJ,C.eJs,C.eJK,C.eJr,C.eJq,C.eJa,C.eJb,C.eJp,C.eJo,C.eIW,C.eIX,C.eIY,C.eIZ,C.eIV,C.eJ0,C.eJ1,C.dba,C.dbc,C.dbf,C.dbg,C.dbe,C.dbd,C.fgU,C.feK,C.c3t,C.c3v,C.d0F,C.d0K,C.d0L,C.d0J,C.d0I,C.d0N,C.d0H,C.d0G,C.d0P,C.ftF,C.d7a,C.d7b,C.d7c,C.fcJ,C.fcK,C.c98,C.ebK,C.ebL,C.ebM,C.ebN,C.f6B,C.f6C,C.dJE,C.dJD,C.cYV,C.cYU,C.ehY,C.ehX,C.een,C.eh3,C.ehU,C.efU,C.ehK,C.ehL,C.ehV,C.ef2,C.ed5,C.ed6,C.efq,C.ef0,C.eeY,C.ef_,C.ef3,C.ef4,C.ef5,C.ef6,C.ef7,C.ef9,C.eda,C.efc,C.efd,C.efe,C.eff,C.efg,C.efh,C.efb,C.efo,C.efC,C.efA,C.efJ,C.efa,C.edq,C.edr,C.edt,C.efM,C.efQ,C.ec4,C.edo,C.edm,C.efY,C.edi,C.efX,C.ed8,C.edK,C.ehF,C.eh4,C.ec5,C.ec2,C.ebT,C.ebP,C.ebR,C.edl,C.ecx,C.ecC,C.ecA,C.ecw,C.efz,C.ehR,C.ehg,C.ehb,C.ehc,C.ehe,C.eed,C.eec,C.ehD,C.ebW,C.ebX,C.ebZ,C.ec_,C.ec3,C.ebV,C.efV,C.ehM,C.eeg,C.ecG,C.ebS,C.edI,C.ec0,C.ec9,C.eca,C.ecb,C.ecm,C.ecp,C.ecq,C.ecr,C.ecs,C.ect,C.ecc,C.ecd,C.ece,C.ecf,C.ecg,C.ech,C.eci,C.ecj,C.eck,C.ecl,C.ecn,C.eco,C.edG,C.edF,C.edE,C.ec1,C.ecK,C.ecI,C.ecL,C.ecM,C.edn,C.efu,C.efv,C.efs,C.eft,C.eha,C.edf,C.ede,C.eeH,C.eeG,C.eeJ,C.eeF,C.eeK,C.eeE,C.eeL,C.eeD,C.eeM,C.eeC,C.eeN,C.eeB,C.eeO,C.eeA,C.eeP,C.eez,C.ees,C.eet,C.eeu,C.eer,C.eev,C.eeq,C.eew,C.eep,C.eex,C.eeo,C.eey,C.edA,C.edB,C.edu,C.edw,C.edx,C.edy,C.edz,C.ehS,C.ehT,C.eeR,C.eeQ,C.eeU,C.egg,C.egh,C.egi,C.egt,C.egE,C.egP,C.egW,C.egX,C.egY,C.egZ,C.eh_,C.egj,C.egk,C.egl,C.egm,C.egn,C.ego,C.egp,C.egq,C.egr,C.egs,C.egu,C.egv,C.egw,C.egx,C.egy,C.egz,C.egA,C.egB,C.egC,C.eg6,C.egD,C.ege,C.egd,C.egG,C.egc,C.eg2,C.eh1,C.egb,C.eg1,C.eg_,C.ega,C.eg0,C.efZ,C.egK,C.eg9,C.egL,C.egM,C.egN,C.egO,C.eg8,C.egQ,C.egR,C.egS,C.eg7,C.egT,C.eg5,C.egU,C.eg4,C.egV,C.eg3,C.ecE,C.ehn,C.ehm,C.eho,C.ehl,C.edN,C.edM,C.edO,C.edL,C.ehy,C.eht,C.ehx,C.ehp,C.ehq,C.ehr,C.ehs,C.ehv,C.ehw,C.ehB,C.ed4,C.ecS,C.ecT,C.ecU,C.ecR,C.ecY,C.ecX,C.ecQ,C.ecP,C.ed0,C.ecO,C.ed1,C.eeW,C.eeV,C.ee_,C.edZ,C.edY,C.edX,C.edW,C.edV,C.edU,C.edT,C.edQ,C.edS,C.edR,C.edP,C.eeb,C.efR,C.efS,C.cVp,C.cVM,C.cVN,C.cVj,C.cVi,C.cVm,C.cVk,C.cVl,C.eiy,C.eio,C.eix,C.eip,C.eiq,C.eik,C.eil,C.eim,C.ein,C.eiA,C.fnH,C.fnI,C.fnJ,C.ei0,C.ei1,C.ei2,C.ei5,C.ei6,C.ei9,C.eia,C.ei8,C.eib,C.ei7,C.ei_,C.ehZ,C.eid,C.eie,C.eig,C.eih,C.ebI,C.ebH,C.ebD,C.ebG,C.eij,C.eii,C.fi_,C.fhZ,C.e2d,C.e2e])
t(C.aOd,B.G)
u(B.mc,[C.a1N,C.auo,C.at5,C.wI,C.wL,C.kD,C.rD,C.Ah,C.qQ,C.vb,C.ap7,C.Ha,C.aox,C.u3,C.m6,C.hm,C.a6x])
u(C.bJi,[C.cqX,C.bJj])
u(C.cbD,[C.cbH,C.aq8])
t(C.cbG,C.cbB)
t(C.cbF,C.cbA)
t(C.cbI,C.cbF)
t(C.cbE,C.cbC)
t(C.cby,C.cbz)
t(C.b6C,B.ok)
t(C.ckW,B.asy)
t(C.a6k,B.wv)
t(C.aSv,B.dC)
t(C.axR,B.art)
u(B.af,[C.ZQ,C.WC,C.WA,C.anL,C.TS,C.TV,C.YT,C.Zo,C.Zn,C.aB4,C.XL,C.LM,C.Xj,C.XE,C.alN,C.aFQ,C.T6,C.awJ,C.a5E,C.Mc,C.aw6,C.Ib,C.Yv,C.U4,C.U5,C.aBq,C.aoC,C.a5F])
u(B.ag,[C.aG8,C.auV,C.auR,C.aAT,C.aBb,C.aBf,C.aCy,C.aEs,C.aEr,C.aIY,C.ayx,C.aIr,C.awY,C.bcr,C.aId,C.aKf,C.aIq,C.bal,C.aIW,C.aJ9,C.aH8,C.b97,C.aJa,C.aBt,C.bgM,C.aBr,C.aBu,C.bgv])
u(B.as,[C.auT,C.ab1,C.aar,C.bfA,C.ab4,C.acI,C.aYr,C.boI,C.aYL,C.bi4,C.bni,C.aWG,C.aYO,C.ab7,C.abp,C.aYM,C.H9,C.aWJ,C.b9m,C.NR,C.Ii,C.bdZ,C.bdY,C.br5])
u(B.FK,[C.b8P,C.bq6,C.aGs,C.bbu,C.bnG])
u(B.n4,[C.b8O,C.b5n,C.bnD,C.b8l,C.bbS,C.be4,C.baY,C.bbP,C.bbw,C.bkf,C.b6u,C.b67,C.br2,C.bo5,C.bne,C.baR,C.aYJ,C.bme,C.bnb])
t(C.bgs,C.aIY)
t(C.bfP,C.aIr)
t(C.bfC,C.aId)
t(C.bqz,C.aKf)
t(C.bfM,C.aIq)
t(C.bgq,C.aIW)
t(C.btl,C.aJ9)
t(C.aBs,C.btl)
t(C.b98,C.aH8)
t(C.aBv,C.aJa)
t(C.bqU,B.iG)
t(C.a6w,B.kc)
t(C.cbL,C.b_t)
t(C.afM,C.a0R)
u(B.VD,[C.aO3,C.aPx])
t(C.au0,C.aO3)
w(C.aIY,B.c7)
w(C.aIr,B.c7)
w(C.aId,B.c7)
w(C.aIq,B.c7)
w(C.aIW,B.c7)
w(C.aKf,B.c7)
w(C.aH8,B.eJ)
w(C.aJ9,B.c7)
v(C.btl,B.ev)
w(C.aJa,B.c7)})()
B.ke(b.typeUniverse,JSON.parse('{"aON":{"hu":["aON"]},"nr":{"aON":[],"hu":["aON"]},"aOd":{"G":["Q0"],"G.E":"Q0"},"b6C":{"ok":[]},"a6k":{"wv":[],"nO":[]},"aSv":{"dC":[],"cs":[],"r":[]},"axR":{"aP":[],"d0":["aP"],"aN":[],"cp":[]},"ZQ":{"af":[],"r":[]},"aG8":{"ag":["ZQ"]},"WC":{"af":[],"r":[]},"WA":{"af":[],"r":[]},"auV":{"ag":["WC"]},"auR":{"ag":["WA"]},"auT":{"as":[],"r":[]},"anL":{"af":[],"r":[]},"aAT":{"ag":["anL"]},"ab1":{"as":[],"r":[]},"aar":{"as":[],"r":[]},"ab4":{"as":[],"r":[]},"acI":{"as":[],"r":[]},"bfA":{"as":[],"r":[]},"TS":{"af":[],"r":[]},"aBb":{"ag":["TS"]},"aYr":{"as":[],"r":[]},"b8P":{"aA":[]},"b8O":{"aA":[]},"bq6":{"aA":[]},"b5n":{"aA":[]},"bnD":{"aA":[]},"TV":{"af":[],"r":[]},"aBf":{"ag":["TV"]},"b8l":{"aA":[]},"YT":{"af":[],"r":[]},"aCy":{"ag":["YT"]},"bbS":{"aA":[]},"Zo":{"af":[],"r":[]},"Zn":{"af":[],"r":[]},"aB4":{"af":[],"r":[]},"XL":{"af":[],"r":[]},"aEs":{"ag":["Zo"]},"aEr":{"ag":["Zn"]},"bgs":{"ag":["aB4"]},"be4":{"aA":[]},"ayx":{"ag":["XL"]},"boI":{"as":[],"r":[]},"aYL":{"as":[],"r":[]},"bi4":{"as":[],"r":[]},"LM":{"af":[],"r":[]},"Xj":{"af":[],"r":[]},"bfP":{"ag":["LM"]},"bni":{"as":[],"r":[]},"baY":{"aA":[]},"aWG":{"as":[],"r":[]},"awY":{"ag":["Xj"]},"XE":{"af":[],"r":[]},"bcr":{"ag":["XE"]},"bbP":{"aA":[]},"bbw":{"aA":[]},"bkf":{"aA":[]},"b6u":{"aA":[]},"b67":{"aA":[]},"br2":{"aA":[]},"bo5":{"aA":[]},"bne":{"aA":[]},"baR":{"aA":[]},"alN":{"af":[],"r":[]},"aYO":{"as":[],"r":[]},"bfC":{"ag":["alN"]},"ab7":{"as":[],"r":[]},"abp":{"as":[],"r":[]},"aFQ":{"af":[],"r":[]},"T6":{"af":[],"r":[]},"H9":{"as":[],"r":[]},"awJ":{"af":[],"r":[]},"a5E":{"af":[],"r":[]},"aYM":{"as":[],"r":[]},"aYJ":{"aA":[]},"bqz":{"ag":["aFQ"]},"aGs":{"aA":[]},"bfM":{"ag":["T6"]},"bal":{"ag":["awJ"]},"bgq":{"ag":["a5E"]},"aWJ":{"as":[],"r":[]},"bbu":{"aA":[]},"bme":{"aA":[]},"bnb":{"aA":[]},"aw6":{"af":[],"r":[]},"Ib":{"af":[],"r":[]},"Yv":{"af":[],"r":[]},"Ii":{"as":[],"r":[]},"Mc":{"af":[],"r":[]},"aBs":{"ag":["Mc"],"ev":[]},"b98":{"ag":["aw6"]},"b9m":{"as":[],"r":[]},"b97":{"ag":["Ib"]},"NR":{"as":[],"r":[]},"aBv":{"ag":["Yv"]},"bnG":{"aA":[]},"bdZ":{"as":[],"r":[]},"bdY":{"as":[],"r":[]},"U4":{"af":[],"r":[]},"U5":{"af":[],"r":[]},"aBq":{"af":[],"r":[]},"aoC":{"af":[],"r":[]},"aBt":{"ag":["U4"]},"bgM":{"ag":["U5"]},"aBr":{"ag":["aBq"]},"bqU":{"iG":[]},"aBu":{"ag":["aoC"]},"br5":{"as":[],"r":[]},"a5F":{"af":[],"r":[]},"bgv":{"ag":["a5F"]},"a6w":{"kc":["fl<eD>"],"k_":["fl<eD>"]},"afM":{"a0R":[]},"aO3":{"iQ":[],"f5":[]},"au0":{"iQ":[],"f5":[]},"aPx":{"iQ":[],"f5":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("K3"),U:w("uK<pv>"),bz:w("x"),M:w("fb<n>"),bo:w("jo"),g7:w("Ky"),gc:w("aw<ik?>"),bq:w("aw<~>"),cc:w("a2S"),fS:w("CG"),an:w("ajo"),bm:w("O<Q0>"),X:w("O<ag1>"),f3:w("O<aON>"),aK:w("O<mJ>"),V:w("O<aa>"),O:w("O<x>"),fA:w("O<lg>"),d5:w("O<aw<bq<I,+icon3d,picture(n?,n?)>>>"),bH:w("O<aw<dz>>"),fG:w("O<aw<~>>"),aF:w("O<mQ>"),cd:w("O<ak<ja>>"),ez:w("O<a1<n,aB>>"),d:w("O<a1<n,@>>"),B:w("O<m2>"),h:w("O<ja>"),gE:w("O<yt>"),k:w("O<nU>"),g:w("O<lo>"),D:w("O<hS>"),u:w("O<ey>"),m:w("O<u3>"),i:w("O<hm>"),aC:w("O<a5W>"),o:w("O<yv>"),e3:w("O<aB>"),dN:w("O<v>"),v:w("O<hw>"),cR:w("O<iE>"),J:w("O<j2>"),gx:w("O<oD<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(Q,Q)>"),ek:w("O<+(I,n)>"),n:w("O<+(I,I)>"),r:w("O<cJ>"),s:w("O<n>"),aS:w("O<iG>"),p:w("O<r>"),eR:w("O<f5>"),fT:w("O<b55>"),bx:w("O<aC3>"),gz:w("O<acS>"),x:w("O<Q>"),t:w("O<I>"),dS:w("O<aA?>"),bA:w("O<v?>"),Z:w("O<I?>"),cA:w("O<ce>"),A:w("cn<ag<af>>"),gL:w("ak<nU>"),R:w("ak<hS>"),j:w("ak<@>"),bW:w("ak<I>"),e:w("bq<I,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<I,+icon3d,picture(n?,n?)>"),bR:w("J<hm,r>"),eC:w("J<nh,n>"),cT:w("J<jt,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,p9>"),gh:w("J<m6,jc<m6>>"),w:w("iB"),ei:w("ik"),g2:w("qG"),fB:w("De"),b6:w("yt"),gX:w("a5O"),dt:w("kZ"),ea:w("nU"),bt:w("lo"),I:w("hS"),F:w("ey"),fO:w("m6"),ff:w("u3"),fP:w("hm"),Q:w("vb"),dO:w("aoy"),a:w("co"),C:w("aB"),dw:w("aq9"),di:w("a6x"),Y:w("eD"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DI"),dB:w("dx<v>"),bJ:w("dx<n>"),_:w("dW<n>"),N:w("n"),fw:w("pv"),bO:w("ao"),K:w("bl<v>"),b:w("bl<Q>"),E:w("dz"),W:w("cw<n>"),ac:w("cw<I>"),ex:w("k2<lo>"),cI:w("k2<n>"),cl:w("k2<Q>"),b4:w("a5<kW>"),a8:w("a5<lK>"),fR:w("a5<+(n,n)>"),co:w("e3<v>"),l:w("r"),b2:w("bO<~>"),ev:w("pw<dR>"),dT:w("be<~>"),cQ:w("axR"),q:w("mA"),y:w("T"),gR:w("Q"),z:w("@"),S:w("I"),at:w("b7?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hS>?"),c:w("ak<@>?"),aP:w("ik?"),af:w("hS?"),go:w("aYQ?"),a6:w("a5X?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bD2=new B.ac(A.ej,18,A.c,null,null,null)
D.aNO=new B.bF(A.ax,null,null,D.bD2,null)
D.aNX=new B.d5(0,-0.15)
D.aNZ=new B.d5(0.62,0)
D.aO1=new B.d5(-0.35,-0.45)
D.aOb=new B.d5(0.9,-0.85)
D.aG5=new B.b3(30,30)
D.aPs=new B.bv(D.aG5,D.aG5,A.fY,A.fY)
D.aPG=new B.ay(A.b1,1,A.r,-1)
D.b6v=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPS=new B.ay(D.b6v,1,A.r,-1)
D.aQ3=new B.ay(A.aB,1.5,A.r,-1)
D.aQ8=new B.ay(A.b1,1.6,A.r,-1)
D.aQo=new B.ay(A.aB,1.4,A.r,-1)
D.aRJ=new B.o(null,null,null,null,null,K.F0,A.a5)
D.bGY=new B.a7(A.a3,A.a7,A.w,G.a_u,null,null)
D.aRR=new B.o(null,null,null,null,null,D.bGY,A.a5)
D.a71=new B.o(A.aH,null,null,A.pN,null,null,A.n)
D.b1i=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b6t=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cD3=w([D.b1i,D.b6t],x.O)
D.dTj=new B.bR(A.A,0.5,A.w,null,0,D.cD3,null,null)
D.aS8=new B.o(null,null,null,null,null,D.dTj,A.a5)
D.TR=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQC=new B.c2(N.vI,A.W,A.W,A.W)
D.aSa=new B.o(D.TR,null,D.aQC,null,null,null,A.n)
D.bID=new B.a7(A.a3,A.a7,A.w,A.NB,null,null)
D.aSg=new B.o(null,null,null,null,null,D.bID,A.a5)
D.a8l=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aSi=new B.o(D.a8l,null,null,A.r2,null,null,A.n)
D.aSm=new B.o(A.jY,null,null,null,null,null,A.a5)
D.aQI=new B.c2(A.yP,A.W,A.W,A.W)
D.aSp=new B.o(Y.a9f,null,D.aQI,A.mk,null,null,A.n)
D.Ct=new B.o(A.e9,null,null,null,null,null,A.a5)
D.aSv=new B.o(null,null,null,null,null,E.uO,A.a5)
D.cHx=w([E.a9V,A.bW],x.O)
D.bIg=new B.a7(A.b0,A.b5,A.w,D.cHx,null,null)
D.aSz=new B.o(null,null,null,A.mk,null,D.bIg,A.n)
D.cRf=w([A.bj,A.e9,A.jx],x.O)
D.YG=new B.a7(A.ax,A.aC,A.w,D.cRf,null,null)
D.aSL=new B.o(null,null,null,null,null,D.YG,A.n)
D.aSM=new B.o(D.a8l,null,null,A.kj,null,null,A.n)
D.c8x=w([A.dC,A.bj],x.O)
D.bI8=new B.a7(A.ax,A.aC,A.w,D.c8x,null,null)
D.aSQ=new B.o(null,null,null,null,null,D.bI8,A.n)
D.aT_=new B.o(null,null,null,null,null,G.t2,A.a5)
D.aTh=new B.o(A.a9W,null,null,null,null,null,A.a5)
D.b1X=new B.x(0.5647058823529412,0,0,0,A.t)
D.a7a=new B.aa(0,A.G,D.b1X,A.Pn,28)
D.aVe=new B.aSI()
D.aVN=new C.ckW()
D.aVZ=new C.b6C()
D.a7G=new B.cx(A.A,null,null,A.Yv,null)
D.aYl=new B.fa(null,null,null,null,null,E.mu,null,null,null,null)
D.aWv=new B.cx(A.A,null,null,D.aYl,null)
D.bsV=new B.ac(A.dO,28,A.c,null,null,null)
D.aWV=new B.cx(A.A,null,null,D.bsV,null)
D.aYi=new B.fa(2,null,null,null,null,A.bR,null,null,null,null)
D.aXe=new B.cx(A.A,null,null,D.aYi,null)
D.btf=new B.ac(K.Lk,40,A.bS,null,null,null)
D.aXf=new B.cx(A.A,null,null,D.btf,null)
D.aZ5=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aZh=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZD=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZH=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b_8=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_o=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_p=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.IH=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_L=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_Q=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8z=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0t=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b18=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8M=new B.x(1,1,1,0.9725490196078431,A.t)
D.b1p=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1y=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b1A=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b1J=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b21=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b3d=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.TC=new B.x(0.8509803921568627,0,0,0,A.t)
D.b3l=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b3r=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9u=new B.x(0.6,0,0,0,A.t)
D.a9w=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b4K=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rj=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b56=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b5t=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b5M=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aa6=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TX=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zi=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.J3=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iW=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aat=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.U2=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b8y=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b8V=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b98=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Ug=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.ba5=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wd=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bao=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.baF=new B.ht(A.bf,!0,null,null)
D.eJs=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6r=new B.w("Bio link",null,D.eJs,null,null,null,null,null,null,null,null,null)
D.aX9=new B.cx(A.A,null,null,D.f6r,null)
D.baV=new B.ht(A.T8,!0,D.aX9,null)
D.Jm=new C.a1N(0,"none")
D.abr=new C.a1N(1,"deflate")
D.abs=new C.a1N(2,"bzip2")
D.bbB=new B.k6(0.165,0.84,0.44,1)
D.cHQ=w([A.cl,A.dI,A.aB],x.O)
D.bHq=new B.a7(A.ax,A.aC,A.w,D.cHQ,null,null)
D.aRO=new B.o(null,null,null,null,null,D.bHq,A.n)
D.bBV=new B.ac(A.eI,null,A.al,null,null,null)
D.aXJ=new B.cx(A.A,null,null,D.bBV,null)
D.bc8=new B.kA(D.aRO,A.b9,D.aXJ,null)
D.b8L=new B.x(0.058823529411764705,1,1,1,A.t)
D.cKN=w([A.bG,A.pZ,A.pZ,D.b8L],x.O)
D.cpt=w([0,0.32,0.7,1],x.x)
D.bHY=new B.a7(A.ax,A.aC,A.w,D.cKN,D.cpt,null)
D.aRC=new B.o(null,null,null,null,null,D.bHY,A.n)
D.bce=new B.kA(D.aRC,A.b9,null,null)
D.bcH=new B.lW(1,1,null,null,null,A.bi,null)
D.bcK=new B.lW(1,null,null,null,null,D.U2,null)
D.bdd=new B.b7(125e4)
D.bdj=new B.b7(17e4)
D.bdt=new B.b7(35964e8)
D.bdz=new B.b7(55e4)
D.bdD=new B.b7(68e4)
D.be3=new B.i3(0,0,0,5)
D.bel=new B.M(0,16,16,0)
D.beo=new B.M(0,18,0,8)
D.bev=new B.M(0,36,0,36)
D.beC=new B.M(0,54,0,0)
D.beJ=new B.M(10,0,10,3)
D.beT=new B.i3(10,16,10,10)
D.bf1=new B.M(10,6,10,0)
D.bf3=new B.M(10,6,4,6)
D.bf6=new B.M(10,8,10,6)
D.acm=new B.M(11,8,11,11)
D.bfb=new B.M(12,0,12,10)
D.bfc=new B.M(12,0,12,24)
D.bfo=new B.M(12,12,12,4)
D.bfr=new B.M(12,12,8,12)
D.bfF=new B.M(12,8,8,12)
D.bg1=new B.M(14,14,14,0)
D.bg6=new B.M(14,14,14,90)
D.bgp=new B.M(16,10,16,16)
D.bgq=new B.M(16,10,16,20)
D.ad9=new B.M(16,6,16,28)
D.bh_=new B.M(18,0,18,10)
D.bh1=new B.M(18,0,18,30)
D.bh3=new B.M(18,10,18,12)
D.bh4=new B.M(18,10,18,14)
D.bhl=new B.M(18,16,14,18)
D.bhq=new B.M(18,18,18,12)
D.bhw=new B.M(18,26,18,12)
D.bhB=new B.M(18,34,18,34)
D.bhC=new B.M(18,4,18,14)
D.bhI=new B.M(18,8,18,24)
D.bi_=new B.M(20,16,14,4)
D.bi4=new B.M(20,18,12,4)
D.bi9=new B.M(20,20,12,20)
D.bic=new B.M(20,22,20,20)
D.bih=new B.M(20,6,20,6)
D.bir=new B.M(22,18,22,18)
D.biy=new B.M(22,24,22,0)
D.biB=new B.M(22,24,22,4)
D.biJ=new B.M(22,60,22,22)
D.biP=new B.M(24,24,24,22)
D.biZ=new B.M(26,10,60,10)
D.bj4=new B.M(28,44,28,44)
D.bjl=new B.M(32,44,32,44)
D.bjt=new B.M(38,30,38,20)
D.bjy=new B.M(4,0,0,6)
D.bjK=new B.i3(4,4,4,4)
D.bk8=new B.i3(6,5,6,5)
D.bkc=new B.M(6,6,8,6)
D.bkn=new B.M(8,14,8,14)
D.bko=new B.M(8,22,8,22)
D.bkw=new B.M(8,6,12,6)
D.bkE=new B.M(8,8,8,4)
D.ae0=new B.M(9,9,9,6)
D.bkO=new B.i3(2.5,2.5,2.5,2.5)
D.bkP=new B.M(10.5,0,10.5,0)
D.bkQ=new B.M(7,1.5,7,1.5)
D.cAo=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bl4=new B.A0(null,null,D.cAo,A.z1)
D.cxH=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bl5=new B.A0(null,null,D.cxH,A.z1)
D.aKw=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new B.w("WORD DESIGN",null,D.aKw,null,null,null,null,null,null,null,null,null)
D.blw=new B.bE(1,A.bo,D.f5Q,null)
D.f5w=new B.w("Slides database",null,A7.BM,null,null,null,null,null,null,null,null,null)
D.f2X=new B.w("Admin only \xb7 keep as many as you like",null,V.aK1,null,null,null,null,null,null,null,null,null)
D.cYi=w([D.f5w,A.bA,D.f2X],x.p)
D.bbj=new B.fk(A.ai,A.e,A.j,A.F,null,A.p,null,0,D.cYi,null)
D.blz=new B.bE(1,A.bo,D.bbj,null)
D.eYW=new B.w("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.blC=new B.bE(1,A.bo,D.eYW,null)
D.eHm=new B.F(!0,A.al,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7A=new B.w("TALK TO THE EDITOR",null,D.eHm,null,null,null,null,null,null,null,null,null)
D.blS=new B.bE(1,A.bo,D.f7A,null)
D.eTd=new B.w("Tell the AI what to change",null,A7.BM,null,null,null,null,null,null,null,null,null)
D.bm9=new B.bE(1,A.bo,D.eTd,null)
D.bmO=new B.Cx(!0,"video/mp4")
D.eFH=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRu=new B.w("Move presentations between devices",null,D.eFH,null,null,null,!1,null,null,1,null,null)
D.bmS=new B.pM(A.e8,A.a3,A.h,D.eRu,null)
D.eSw=new B.w("Edit in Slides",null,A.jQ,null,null,null,null,null,null,null,null,null)
D.bmT=new B.pM(A.e8,A.A,A.h,D.eSw,null)
D.bn7=new B.dp(1,A.cj,D.bmT,null)
D.WV=new B.a_(60988,"MaterialIcons",!1)
D.bow=new B.a_(61352,"MaterialIcons",!1)
D.aft=new B.a_(61531,"MaterialIcons",!1)
D.bpI=new B.a_(63062,"MaterialIcons",!1)
D.bpP=new B.a_(63109,"MaterialIcons",!1)
D.bq0=new B.a_(63206,"MaterialIcons",!1)
D.ag9=new B.a_(63238,"MaterialIcons",!1)
D.Xt=new B.a_(63365,"MaterialIcons",!1)
D.Xu=new B.a_(63367,"MaterialIcons",!1)
D.Xv=new B.a_(63368,"MaterialIcons",!1)
D.agj=new B.a_(63384,"MaterialIcons",!1)
D.bqB=new B.a_(63525,"MaterialIcons",!1)
D.bqE=new B.a_(63568,"MaterialIcons",!1)
D.bqX=new B.a_(983072,"MaterialIcons",!1)
D.brl=new B.a_(983271,"MaterialIcons",!0)
D.bs8=new B.a_(983924,"MaterialIcons",!1)
D.aht=new B.a_(983965,"MaterialIcons",!1)
D.ahu=new B.a_(983966,"MaterialIcons",!1)
D.bsi=new B.a_(984592,"MaterialIcons",!1)
D.bsy=new B.ac(A.rQ,16,A.aA,null,null,null)
D.bsF=new B.ac(A.m3,null,A.c,null,null,null)
D.ahE=new B.ac(A.p7,18,A.c,null,null,null)
D.bsW=new B.ac(A.A3,18,O.kU,null,null,null)
D.btB=new B.ac(A.j2,11,null,null,null,null)
D.btL=new B.ac(A.Xc,null,A.eO,null,null,null)
D.buj=new B.ac(A.qj,18,A.aA,null,null,null)
D.bup=new B.ac(A1.Af,14,null,null,null,null)
D.buq=new B.ac(A.e4,28,A.cL,null,null,null)
D.buD=new B.ac(A.p8,20,A.c,null,null,null)
D.buK=new B.ac(A.x7,null,null,null,null,null)
D.buQ=new B.ac(A.jh,18,A.hs,null,null,null)
D.buV=new B.ac(A.kX,null,null,null,null,null)
D.bvn=new B.ac(A.XL,28,A.c,null,null,null)
D.bpL=new B.a_(63065,"MaterialIcons",!1)
D.bvw=new B.ac(D.bpL,15,A.c,null,null,null)
D.bpR=new B.a_(63113,"MaterialIcons",!1)
D.bvC=new B.ac(D.bpR,null,A.al,null,null,null)
D.bvZ=new B.ac(A.ut,22,A.bJ,null,null,null)
D.bwi=new B.ac(A.wT,18,null,null,null,null)
D.bwn=new B.ac(A.Ez,12,A.c,null,null,null)
D.brV=new B.a_(983687,"MaterialIcons",!1)
D.bwy=new B.ac(D.brV,null,A.bj,null,null,null)
D.bwF=new B.ac(A.hl,null,A.bj,null,null,null)
D.bwY=new B.ac(A.pc,22,A.c,null,null,null)
D.bx1=new B.ac(A.ct,13,A.c,null,null,null)
D.bx7=new B.ac(A.e4,26,A.aG,null,null,null)
D.bxa=new B.ac(A.qn,26,A.c,null,null,null)
D.Lu=new B.ac(A.j2,8,A.c,null,null,null)
D.bxs=new B.ac(A.p7,40,A.c,null,null,null)
D.bxt=new B.ac(A.bnt,null,null,null,null,null)
D.bxx=new B.ac(A.rY,20,null,null,null,null)
D.brU=new B.a_(983683,"MaterialIcons",!1)
D.bxH=new B.ac(D.brU,null,A.aW,null,null,null)
D.bxI=new B.ac(A.j2,16,A.bj,null,null,null)
D.by2=new B.ac(A.uH,null,null,null,null,null)
D.aib=new B.ac(A.uv,22,A.c,null,null,null)
D.by6=new B.ac(A.dO,17,A.c,null,null,null)
D.aic=new B.ac(A.j2,9,A.c,null,null,null)
D.byb=new B.ac(A.uq,null,null,null,null,null)
D.bnK=new B.a_(57744,"MaterialIcons",!1)
D.byi=new B.ac(D.bnK,null,null,null,null,null)
D.byl=new B.ac(A.uq,16,null,null,null,null)
D.bsp=new B.a_(985181,"MaterialIcons",!1)
D.ET=new B.ac(D.bsp,null,null,null,null,null)
D.byx=new B.ac(A.kX,16,A.bJ,null,null,null)
D.brM=new B.a_(983615,"MaterialIcons",!1)
D.byz=new B.ac(D.brM,12,A.c,null,null,null)
D.aii=new B.ac(A.wP,16,null,null,null,null)
D.byG=new B.ac(A.dO,21,A.c,null,null,null)
D.byL=new B.ac(A.hl,17,A.c,null,null,null)
D.byM=new B.ac(A.ut,null,null,null,null,null)
D.bz_=new B.ac(A.Y9,20,A.aA,null,null,null)
D.bze=new B.ac(A.p6,22,E.mu,null,null,null)
D.bzm=new B.ac(A.ql,13,A.al,null,null,null)
D.bzo=new B.ac(A.ahi,20,A.aA,null,null,null)
D.bnr=new B.a_(57495,"MaterialIcons",!1)
D.bzt=new B.ac(D.bnr,null,null,null,null,null)
D.bzx=new B.ac(A.nr,18,A.c,null,null,null)
D.bzS=new B.ac(A.t0,28,A.c,null,null,null)
D.bA_=new B.ac(D.ag9,null,A.aB,null,null,null)
D.bA0=new B.ac(A.p8,22,A.c,null,null,null)
D.ais=new B.ac(A.WR,16,null,null,null,null)
D.bAK=new B.ac(A.ut,32,A.c,null,null,null)
D.bBs=new B.ac(A.iL,22,A.c,null,null,null)
D.bBw=new B.ac(A.qn,22,A.al,null,null,null)
D.aiH=new B.ac(A.rQ,null,A.c1,null,null,null)
D.bCp=new B.ac(A.uu,18,null,null,null,null)
D.bCX=new B.ac(A.dO,18,A.cS,null,null,null)
D.Yy=new B.ac(A.ct,18,A.aA,null,null,null)
D.bD3=new B.ac(A.ahb,null,null,null,null,null)
D.bDt=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aKl,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eq,!0,null,null,null,null)
D.eyo=new B.F(!0,A.bL,null,null,null,null,null,A.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bDL=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eyo,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eq,!0,null,null,null,null)
D.bE9=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eq,!0,null,null,null,null)
D.cDV=w([A.e9,A.aB],x.O)
D.bFh=new B.a7(A.a3,A.a7,A.w,D.cDV,null,null)
D.bFs=new B.a7(A.b0,A.b5,A.Rm,A.apD,null,null)
D.aZu=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b23=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b4L=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b0l=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cpv=w([D.aZu,D.b23,D.b4L,D.b0l],x.O)
D.bFL=new B.a7(A.ax,A.aC,A.w,D.cpv,A.Fq,null)
D.cYp=w([A.d3,A.bz,A.b1],x.O)
D.bFN=new B.a7(A.b0,A.b5,A.Rm,D.cYp,null,null)
D.cZA=w([A.bj,A.cb],x.O)
D.bFR=new B.a7(A.a3,A.a7,A.w,D.cZA,null,null)
D.cVb=w([A.hH,A.dD,A.aX],x.O)
D.bFT=new B.a7(A.ax,A.aC,A.w,D.cVb,null,null)
D.cJm=w([A.cW,A.eZ],x.O)
D.bFX=new B.a7(A.a3,A.a7,A.w,D.cJm,null,null)
D.cYk=w([O.kU,A.dD],x.O)
D.ajr=new B.a7(A.a3,A.a7,A.w,D.cYk,null,null)
D.b2z=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cYh=w([D.b2z,D.wd,A.bR],x.O)
D.bG1=new B.a7(A.a3,A.a7,A.w,D.cYh,null,null)
D.cFs=w([A.bm,A.dk,A.ft],x.O)
D.bG2=new B.a7(A.ax,A.aC,A.w,D.cFs,null,null)
D.LJ=new B.a7(A.a3,A.a7,A.w,A.FC,null,null)
D.b9s=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.ciG=w([D.b9s,A.bR,A.iZ],x.O)
D.ajw=new B.a7(A.ax,A.aC,A.w,D.ciG,null,null)
D.cO6=w([A.w1,A.au,D.zi],x.O)
D.bGZ=new B.a7(A.a3,A.a7,A.w,D.cO6,null,null)
D.bap=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b17=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b5C=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cEE=w([D.bap,D.b17,D.b5C],x.O)
D.ajx=new B.a7(A.a3,A.a7,A.w,D.cEE,null,null)
D.b2A=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bIS=w([Ap.abc,D.b2A],x.O)
D.bH7=new B.a7(A.b0,A.b5,A.w,D.bIS,null,null)
D.cCS=w([A.mt,A.bS],x.O)
D.bHb=new B.a7(A.b0,A.b5,A.w,D.cCS,null,null)
D.cSz=w([A.aB,A.dI],x.O)
D.bHi=new B.a7(A.a3,A.a7,A.w,D.cSz,null,null)
D.aaf=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.arf=w([D.aaf,D.iW,D.IH],x.O)
D.bHJ=new B.a7(A.ax,A.aC,A.w,D.arf,null,null)
D.ciy=w([A.dt,A.dQ],x.O)
D.bHU=new B.a7(A.b0,A.b5,A.w,D.ciy,null,null)
D.cQ_=w([A.tX,As.CZ],x.O)
D.bIE=new B.a7(A.a3,A.a7,A.w,D.cQ_,null,null)
D.f_m=new B.w("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bIP=new B.pf(null,D.f_m,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xx=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1g=new C.kD(2,"elegantNavy")
D.flq=w([A.TV,D.iW,A.bR],x.O)
D.jl=new C.wI(0,"classic")
D.a13=new C.ja("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1g,4294967035,4279378237,4290283019,D.jl)
D.aA6=new C.kD(3,"elegantGold")
D.aZ4=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZT=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a95=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fkT=w([D.aZ4,D.aZT,D.a95],x.O)
D.a11=new C.ja("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aA6,4294966515,4281016592,4289102906,D.jl)
D.diS=new C.kD(22,"goldRibbon")
D.fkP=w([A.TV,D.iW,A.hK],x.O)
D.a0V=new C.ja("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.diS,4294967035,4279378237,4291404327,D.jl)
D.diT=new C.kD(23,"goldBaroque")
D.a9B=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fkV=w([D.a9B,A.au,A.iZ],x.O)
D.a0W=new C.ja("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.diT,4294964964,4283053072,4292128567,D.jl)
D.diV=new C.kD(4,"elegantEmerald")
D.b_W=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0I=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fl0=w([D.b_W,D.b0I,A.hK],x.O)
D.a0X=new C.ja("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.diV,4294376440,4279122734,4291404327,D.jl)
D.diW=new C.kD(5,"elegantBurgundy")
D.b3Q=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fl7=w([D.b3Q,A.a8t,A.hK],x.O)
D.a1_=new C.ja("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.diW,4294965238,4283043359,4291404327,D.jl)
D.diP=new C.kD(19,"goldFiligree")
D.J9=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fkW=w([D.J9,A.au,A.iZ],x.O)
D.a0Y=new C.ja("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.diP,4294966259,4279378237,4292128567,D.jl)
D.diQ=new C.kD(20,"goldLaurel")
D.b9i=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fl8=w([A.IA,A.hK,D.b9i],x.O)
D.a0Z=new C.ja("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.diQ,4294966776,4282000405,4291404327,D.jl)
D.diR=new C.kD(21,"goldCrest")
D.a8n=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b9p=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fkY=w([D.a8n,A.au,D.b9p],x.O)
D.a12=new C.ja("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.diR,4294965484,4283053072,4292128567,D.jl)
D.diU=new C.kD(24,"goldStar")
D.bal=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fl1=w([D.bal,A.au,D.iW],x.O)
D.a10=new C.ja("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.diU,4294966518,4279378237,4292128567,D.jl)
D.F2=w([D.a13,D.a11,D.a0V,D.a0W,D.a0X,D.a1_,D.a0Y,D.a0Z,D.a12,D.a10],x.h)
D.pm=new C.m6(0,"blank")
D.Pb=new C.m6(1,"title")
D.ma=new C.m6(2,"titleContent")
D.dDu=new C.m6(3,"twoColumn")
D.Ba=new C.m6(4,"section")
D.dDv=new C.m6(5,"comparison")
D.Gb=new C.m6(6,"flashcard")
D.Gc=new C.m6(7,"quiz")
D.Gd=new C.m6(8,"worksheet")
D.ajS=w([D.pm,D.Pb,D.ma,D.dDu,D.Ba,D.dDv,D.Gb,D.Gc,D.Gd],B.az("O<m6>"))
D.bJ3=w([0,0,0],x.cA)
D.as9=w([Z.Tr,A.dQ],x.O)
D.k5=w([A.bR,A.bJ,A.hJ,A.hr,D.zi],x.O)
D.deL=new C.iM("fireworks","Royal Fireworks","Thank you for celebrating with us",D.as9,D.k5)
D.b9A=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b3O=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cD4=w([D.b9A,D.b3O],x.O)
D.deC=new C.iM("confetti","Golden Confetti","Together we rise",D.cD4,D.k5)
D.cAt=w([A.n5,A.Tb],x.O)
D.deD=new C.iM("crown","Crown of Glory","Built for our community",D.cAt,D.k5)
D.b0Y=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b3t=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cGG=w([D.b0Y,D.b3t],x.O)
D.t3=w([A.bL,A.aO,A.c,A.aJ,A.ak],x.O)
D.dex=new C.iM("aurora","Aurora Gala","A brighter future, together",D.cGG,D.t3)
D.b4N=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cQ5=w([G.a87,D.b4N],x.O)
D.deO=new C.iM("champagne","Champagne Toast","Cheers to every member",D.cQ5,D.k5)
D.deP=new C.iM("diamonds","Diamond Rain","Every member is a jewel",W.asE,D.t3)
D.aZL=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b30=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cUw=w([D.aZL,D.b30],x.O)
D.des=new C.iM("starburst","Golden Starburst","Thank you!",D.cUw,D.k5)
D.bIX=w([A.fk,A.w6],x.O)
D.a8e=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Nh=w([A.nW,A.ia,A.u9,A.oI,D.a8e],x.O)
D.deW=new C.iM("balloons","Luxury Balloons","Let's celebrate",D.bIX,D.Nh)
D.czP=w([A.Th,A.x],x.O)
D.deK=new C.iM("galaxy","Galaxy Spiral","The sky is not the limit",D.czP,D.t3)
D.b7Z=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cN1=w([A.kp,D.b7Z],x.O)
D.deF=new C.iM("redcarpet","Red Carpet","Tonight we shine",D.cN1,D.k5)
D.b68=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b4B=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cQY=w([D.b68,D.b4B],x.O)
D.deu=new C.iM("coins","Gold Coin Rain","Every contribution counts",D.cQY,D.k5)
D.cWZ=w([A.dt,A.hG],x.O)
D.deA=new C.iM("lanterns","Sky Lanterns","Lighting the way together",D.cWZ,D.k5)
D.b1N=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cxY=w([A.w8,D.b1N],x.O)
D.dew=new C.iM("hearts","Floating Hearts","Made with love",D.cxY,D.Nh)
D.b_h=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b01=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cYf=w([D.b_h,D.b01],x.O)
D.deV=new C.iM("petals","Rose Petals","Thank you, from our hearts",D.cYf,D.Nh)
D.b8J=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cUQ=w([A.kT,D.b8J],x.O)
D.der=new C.iM("butterflies","Golden Butterflies","New beginnings",D.cUQ,D.k5)
D.b5A=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cyQ=w([D.b5A,A.x],x.O)
D.deN=new C.iM("neon","Neon Night","Let's go!",D.cyQ,D.t3)
D.b2L=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cSJ=w([A.IV,D.b2L],x.O)
D.deQ=new C.iM("disco","Disco Ball","Party time",D.cSJ,D.t3)
D.b60=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cSi=w([A.hH,D.b60],x.O)
D.dev=new C.iM("sunrise","Golden Sunrise","A new day for our community",D.cSi,D.k5)
D.cRX=w([A.ri,A.dQ],x.O)
D.deR=new C.iM("pearls","Ocean Pearls","Deep roots, bright future",D.cRX,D.t3)
D.b13=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cS9=w([D.b13,A.dQ],x.O)
D.deU=new C.iM("snow","Winter Gala","Warm wishes to all",D.cS9,D.t3)
D.aZd=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b_3=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cXk=w([D.aZd,D.b_3],x.O)
D.deJ=new C.iM("laurel","Laurel Victory","We did it together",D.cXk,D.k5)
D.aZ3=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b3p=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cx9=w([D.aZ3,D.b3p],x.O)
D.deT=new C.iM("ribbons","Silk Ribbons","Elegance in every step",D.cx9,D.k5)
D.b4m=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.civ=w([G.zh,D.b4m],x.O)
D.deG=new C.iM("kente","Kente Pride","Proud of our roots",D.civ,D.k5)
D.b6D=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b9_=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cI9=w([D.b6D,D.b9_],x.O)
D.deB=new C.iM("trophy","Trophy Shine","Winners together",D.cI9,D.k5)
D.cSf=w([Ak.IN,A.x],x.O)
D.det=new C.iM("shooting","Shooting Stars","Make a wish",D.cSf,D.t3)
D.aZk=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ab2=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cXy=w([D.aZk,D.ab2],x.O)
D.deH=new C.iM("bokeh","Golden Bokeh","Shine bright",D.cXy,D.k5)
D.aZE=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cNM=w([D.aZE,A.x],x.O)
D.dez=new C.iM("orbits","Golden Orbits","Always moving forward",D.cNM,D.k5)
D.b8K=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cKH=w([A.a93,D.b8K],x.O)
D.deE=new C.iM("flowers","Blooming Garden","Growing together",D.cKH,D.Nh)
D.aZs=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZY=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cWv=w([D.aZs,D.aZY],x.O)
D.dey=new C.iM("music","Music Party","Celebrate with us",D.cWv,D.t3)
D.b_M=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b9l=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cy9=w([D.b_M,D.b9l],x.O)
D.deS=new C.iM("mandala","Royal Mandala","Harmony and unity",D.cy9,D.k5)
D.cKL=w([G.zh,D.ab2],x.O)
D.deM=new C.iM("sparklers","Golden Sparklers","Light up the night",D.cKL,D.k5)
D.deI=new C.iM("city","City Lights","The whole city celebrates",D.as9,D.k5)
D.Fb=w([D.deL,D.deC,D.deD,D.dex,D.deO,D.deP,D.des,D.deW,D.deK,D.deF,D.deu,D.deA,D.dew,D.deV,D.der,D.deN,D.deQ,D.dev,D.deR,D.deU,D.deJ,D.deT,D.deG,D.deB,D.det,D.deH,D.dez,D.deE,D.dey,D.deS,D.deM,D.deI],B.az("O<iM>"))
D.dY0=new B.A("","No ring")
D.eaM=new B.A("platinum","Platinum")
D.e83=new B.A("glow","Glow")
D.e0d=new B.A("double","Double line")
D.e_9=new B.A("framed","Gallery frame")
D.dXG=new B.A("rosegold","Rose gold")
D.e8J=new B.A("jewels","Jeweled")
D.e5C=new B.A("aurora","Aurora")
D.Aw=w([D.dY0,A.a2v,D.eaM,D.e83,H.aGj,D.e0d,A.a2x,D.e_9,D.dXG,D.e8J,D.e5C],x.L)
D.c2d=w([D.a0Y,D.a0Z,D.a12,D.a0V,D.a0W,D.a10],x.h)
D.byT=new B.ac(G.af3,16,null,null,null,null)
D.aUA=new B.uK(A.be,D.byT,null,x.U)
D.bnT=new B.a_(58027,"MaterialIcons",!1)
D.bsE=new B.ac(D.bnT,16,null,null,null,null)
D.aUy=new B.uK(A.L,D.bsE,null,x.U)
D.bnU=new B.a_(58030,"MaterialIcons",!1)
D.bwE=new B.ac(D.bnU,16,null,null,null,null)
D.aUB=new B.uK(A.dL,D.bwE,null,x.U)
D.c8l=w([D.aUA,D.aUy,D.aUB],B.az("O<uK<pv>>"))
D.cfV=w([A.zm,A.hp],x.O)
D.cfW=w([A.bm,A.br,A.ft],x.O)
D.N5=w([A.bJ,A.hr,A.hJ,A.au,A.oI],x.O)
D.ciB=w([A.bR,D.iW,D.IH],x.O)
D.cj7=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dVM=new B.A(4278913286,4280030216)
D.dW3=new B.A(4279373061,4278518787)
D.dWa=new B.A(4279898630,4278847235)
D.cHB=w([D.dVM,D.dW3,D.dWa],x.n)
D.cDH=w(["\u265b","\u269c","\u2726"],x.s)
D.diN=new C.wK("Royal Onyx & Gold",D.cHB,4292128567,4294370209,4294965479,3874020544,D.cDH)
D.dVz=new B.A(4278326799,4278598442)
D.dVB=new B.A(4278395929,4278258953)
D.dVI=new B.A(4278599728,4278327826)
D.cWQ=w([D.dVz,D.dVB,D.dVI],x.n)
D.cyJ=w(["\u269c","\u2756","\u2727"],x.s)
D.diK=new C.wK("Imperial Emerald",D.cWQ,4293050997,4294699968,4294180856,3872254170,D.cyJ)
D.dVC=new B.A(4278455076,4278918747)
D.dVH=new B.A(4278587439,4278322714)
D.dVV=new B.A(4279051376,4278455076)
D.cV7=w([D.dVC,D.dVH,D.dVV],x.n)
D.cOl=w(["\u2654","\u2726","\u2748"],x.s)
D.diE=new C.wK("Sapphire Crown",D.cV7,4291417834,4294967295,4294310143,3871986666,D.cOl)
D.dW8=new B.A(4279894534,4283041554)
D.dWk=new B.A(4281008906,4279042307)
D.dWs=new B.A(4284221976,4279894534)
D.d_2=w([D.dW8,D.dWk,D.dWs],x.n)
D.czW=w(["\u265b","\u2766","\u2726"],x.s)
D.diG=new C.wK("Ruby Throne",D.d_2,4293378685,4294963145,4294964466,3874213833,D.czW)
D.dW2=new B.A(4279371039,4281995100)
D.dWc=new B.A(4280092723,4278714896)
D.dWp=new B.A(4283045242,4279371039)
D.cXb=w([D.dW2,D.dWc,D.dWp],x.n)
D.cVs=w(["\u2655","\u2756","\u2727"],x.s)
D.diL=new C.wK("Amethyst Palace",D.cXb,4293314984,4294963421,4294702591,3873229802,D.cVs)
D.dVE=new B.A(4278519045,4280032287)
D.dVW=new B.A(4279111184,4278321666)
D.dWh=new B.A(4280492839,4278716426)
D.cU3=w([D.dVE,D.dVW,D.dWh],x.n)
D.cMP=w(["\u2726","\u25c6","\u2742"],x.s)
D.diI=new C.wK("Obsidian & Platinum",D.cU3,4293256418,4294967295,4294638330,3872378836,D.cMP)
D.dW9=new B.A(4279896588,4282194463)
D.dWi=new B.A(4280553487,4279043334)
D.dWq=new B.A(4283048488,4279896588)
D.cMl=w([D.dW9,D.dWi,D.dWq],x.n)
D.cYC=w(["\u2766","\u273f","\u2727"],x.s)
D.diF=new C.wK("Rose Gold Velvet",D.cMl,4293440672,4294960345,4294964979,3874214602,D.cYC)
D.dVF=new B.A(4278520340,4279180595)
D.dVK=new B.A(4278718495,4278322443)
D.dW6=new B.A(4279510591,4278520340)
D.cpe=w([D.dVF,D.dVK,D.dW6],x.n)
D.cNs=w(["\u269c","\u2736","\u2756"],x.s)
D.diJ=new C.wK("Midnight Brass",D.cpe,4291405148,4293975208,4294439914,3872837564,D.cNs)
D.dWF=new B.A(4294703086,4293780428)
D.dWB=new B.A(4294307549,4293187253)
D.dWG=new B.A(4294966517,4293977807)
D.cBU=w([D.dWF,D.dWB,D.dWG],x.n)
D.cNP=w(["\u269c","\u265b","\u2726"],x.s)
D.diM=new C.wK("Ivory Marble & Gold",D.cBU,4289760572,4286209048,4280951062,3863625518,D.cNP)
D.dVQ=new B.A(4278978566,4280555024)
D.dW5=new B.A(4279504137,4278518530)
D.dWm=new B.A(4281211923,4278978566)
D.czO=w([D.dVQ,D.dW5,D.dWm],x.n)
D.cW9=w(["\u2742","\u2726","\u265c"],x.s)
D.diH=new C.wK("Onyx & Copper",D.czO,4291856987,4294365880,4294964718,3873885630,D.cW9)
D.cje=w([D.diN,D.diK,D.diE,D.diG,D.diL,D.diI,D.diF,D.diJ,D.diM,D.diH],B.az("O<wK>"))
D.clv=w([A.au,D.zi,A.hr],x.O)
D.e2a=new B.A("Original",null)
D.e2i=new B.A("Wide 16:9",1.7777777777777777)
D.e4q=new B.A("Landscape 3:2",1.5)
D.e1F=new B.A("Photo 4:3",1.3333333333333333)
D.e3h=new B.A("Square",1)
D.eeb=new B.A("Portrait 3:4",0.75)
D.apL=w([D.e2a,D.e2i,D.e4q,D.e1F,D.e3h,D.eeb],B.az("O<+(n,Q?)>"))
D.apM=w([A.hr,A.c8,A.bd,A.bF],x.O)
D.e4A=new B.A("","Original")
D.e6k=new B.A("circle","Circle")
D.ebv=new B.A("rounded","Rounded")
D.ecn=new B.A("triangle","Triangle")
D.e8h=new B.A("hexagon","Hexagon")
D.e6J=new B.A("diamond","Diamond")
D.e5B=new B.A("arch","Arch")
D.AB=w([D.e4A,D.e6k,D.ebv,D.ecn,D.e8h,D.e6J,D.e5B],x.L)
D.ddS=new C.kW("classic_blue","Classic Blue","Normal",A.bj,A.c,A.jZ,A.dC,A.aI)
D.de7=new C.kW("campus_green","Campus Green","Normal",A.aW,A.lP,A.q1,A.fR,A.fd)
D.ddZ=new C.kW("warm_sand","Warm Sand","Normal",A.e2,A.hJ,A.bJ,A.iY,A.n9)
D.de5=new C.kW("slate_minimal","Slate Minimal","Normal",A.bx,A.aO,A.aJ,A.M,A.aI)
D.ddR=new C.kW("coral_fresh","Coral Fresh","Normal",A.cl,A.ic,A.pW,A.kq,A.rc)
D.de6=new C.kW("lavender_calm","Lavender Calm","Normal",A.b1,A.oK,A.z9,A.q3,A.jv)
D.ddT=new C.kW("ocean_breeze","Ocean Breeze","Normal",A.eZ,A.q7,A.r9,A.tZ,A.na)
D.aam=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.de3=new C.kW("berry_pop","Berry Pop","Normal",A.f5,D.aam,A.kQ,G.Uf,A.Dj)
D.ddU=new C.kW("midnight_pro","Midnight Pro","Professional",A.aB,A.M,A.dt,A.kQ,A.cq)
D.de2=new C.kW("executive_navy","Executive Navy","Professional",A.de,A.a9L,A.dC,A.kR,A.bL)
D.de0=new C.kW("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bi,A.M,A.aO,A.cq)
D.ddV=new C.kW("corporate_steel","Corporate Steel","Professional",A.mq,A.M,A.lR,A.fS,A.bL)
D.ddY=new C.kW("gold_luxe","Gold Luxe","Luxury",A.nT,A.dw,A.nV,A.li,A.bJ)
D.b63=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.de1=new C.kW("rose_gold_elite","Rose Gold Elite","Luxury",A.hp,D.b63,A.U7,A.ia,A.oI)
D.de4=new C.kW("platinum_night","Platinum Night","Luxury",A.cq,A.dQ,A.bi,A.aO,A.aJ)
D.de8=new C.kW("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oN,A.eP,A.oS,A.jb)
D.ddQ=new C.kW("royal_purple","Royal Purple","Luxury",A.mr,A.Tv,A.jv,A.kQ,A.T6)
D.de_=new C.kW("neon_pitch","Neon Pitch","Bold",A.bd,A.dQ,A.M,A.bc,A.aJ)
D.ddX=new C.kW("crimson_impact","Crimson Impact","Bold",A.bS,A.kp,A.f6,A.rs,A.fv)
D.ddW=new C.kW("sunset_gallery","Sunset Gallery","Bold",A.h1,A.rc,A.kq,A.pW,A.nX)
D.Fk=w([D.ddS,D.de7,D.ddZ,D.de5,D.ddR,D.de6,D.ddT,D.de3,D.ddU,D.de2,D.de0,D.ddV,D.ddY,D.de1,D.de4,D.de8,D.ddQ,D.de_,D.ddX,D.ddW],B.az("O<kW>"))
D.cwU=w([A.bR,D.iW],x.O)
D.cMA=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e5o=new B.A("Faces & people",D.cMA)
D.clz=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dUL=new B.A("Ideas & work",D.clz)
D.cE8=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e8m=new B.A("Nature",D.cE8)
D.cMI=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e28=new B.A("Places & things",D.cMI)
D.cHc=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e5G=new B.A("Symbols",D.cHc)
D.cx_=w([D.e5o,D.dUL,D.e8m,D.e28,D.e5G],B.az("O<+(n,ak<n>)>"))
D.aZx=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cxk=w([A.bR,D.a95,D.aZx],x.O)
D.aU4=new B.aa(0,A.G,A.Ix,A.aAT,40)
D.aTM=new B.aa(0,A.G,A.n7,A.e6,8)
D.cxu=w([D.aU4,D.aTM],x.V)
D.cxU=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aqa=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.ZJ=w([A.hr,A.ft,A.bS,A.aH,A.cl],x.O)
D.cyD=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9j=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cyO=w([A.U1,D.a9j,A.U1],x.O)
D.cyS=w([A.hK,D.iW,D.IH],x.O)
D.e1Y=new B.A(A.be,D.Xu)
D.e3c=new B.A(A.L,D.Xt)
D.dYD=new B.A(A.dL,D.Xv)
D.czJ=w([D.e1Y,D.e3c,D.dYD],B.az("O<+(pv,a_)>"))
D.cK=new C.Ha(0,"text")
D.l3=new C.Ha(1,"image")
D.eS=new C.Ha(2,"shape")
D.Pa=new C.Ha(3,"pdf")
D.kG=new C.Ha(4,"signature")
D.a1n=new C.Ha(5,"bio")
D.cAx=w([D.cK,D.l3,D.eS,D.Pa,D.kG,D.a1n],B.az("O<Ha>"))
D.cAy=w([A.bg,A.cx],B.az("O<G8>"))
D.cB7=w(["School","Documents","Sign & present"],x.s)
D.aU8=new B.aa(0,A.G,A.aaV,A.tm,28)
D.cBq=w([D.aU8],x.V)
D.cBI=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Np=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqy=w([A.hr,A.Di,A.aJ,A.c,A.nW,A.au],x.O)
D.edC=new B.A(0.1,0.08)
D.e8k=new B.A(0.3,0.05)
D.dYa=new B.A(0.55,0.1)
D.e11=new B.A(0.8,0.06)
D.e3U=new B.A(0.92,0.16)
D.e3r=new B.A(0.2,0.2)
D.e1s=new B.A(0.7,0.22)
D.e73=new B.A(0.05,0.4)
D.e4i=new B.A(0.95,0.45)
D.dYQ=new B.A(0.12,0.7)
D.e_S=new B.A(0.88,0.75)
D.e0_=new B.A(0.4,0.9)
D.dWT=new B.A(0.65,0.93)
D.e0G=new B.A(0.25,0.97)
D.e1V=new B.A(0.85,0.9)
D.dZB=new B.A(0.5,0.04)
D.cD_=w([D.edC,D.e8k,D.dYa,D.e11,D.e3U,D.e3r,D.e1s,D.e73,D.e4i,D.dYQ,D.e_S,D.e0_,D.dWT,D.e0G,D.e1V,D.dZB],x.G)
D.cD7=w([A.c,A.hp,A.b2,A.aS],x.O)
D.dF6=new C.jt("office_blue","Office Blue",A.bj,A.dC,A.aI,A.c,A.jZ)
D.dFh=new C.jt("campus_green","Campus Green",A.aW,A.fR,A.fd,A.lP,A.q1)
D.dF7=new C.jt("sunset","Sunset",A.h1,A.kq,A.n9,A.ic,A.pW)
D.dF8=new C.jt("midnight","Midnight",A.aB,A.kQ,A.cq,A.M,A.dt)
D.dFj=new C.jt("classic","Classic",A.dD,A.dw,A.lj,A.hJ,A.hg)
D.dFg=new C.jt("rose_gold","Rose Gold",A.hp,A.wa,A.w8,A.u9,A.zm)
D.dF1=new C.jt("ocean_teal","Ocean Teal",A.eZ,A.tZ,A.na,A.q7,A.r9)
D.dF0=new C.jt("slate_pro","Slate Pro",A.bx,A.M,A.aI,A.aO,A.aJ)
D.dF_=new C.jt("neon_night","Neon Night",A.bd,A.bc,A.aJ,A.dQ,A.M)
D.dFb=new C.jt("lavender","Lavender",A.b1,A.q3,A.jv,A.oK,A.z9)
D.dFd=new C.jt("coral","Coral",A.cl,A.kq,A.rc,A.ic,A.nX)
D.dF2=new C.jt("forest","Forest",A.hh,A.eF,A.d_,A.lQ,A.eO)
D.dF3=new C.jt("berry","Berry",A.f5,G.Uf,A.Dj,D.aam,A.kQ)
D.dFa=new C.jt("sand","Sand",A.e2,A.iY,A.n9,A.hJ,A.bJ)
D.dFf=new C.jt("ice","Ice",A.mq,A.TA,A.aI,A.mo,A.fS)
D.dF5=new C.jt("charcoal","Charcoal",A.ak,A.aO,A.cq,A.bi,A.M)
D.dEZ=new C.jt("mint","Mint",A.aS,A.fj,A.fR,A.lQ,A.oS)
D.dFe=new C.jt("crimson","Crimson",A.bS,A.mt,A.kp,A.Dg,A.rs)
D.b0H=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dF9=new C.jt("gold","Gold",A.nT,A.tX,A.nV,D.b0H,A.li)
D.dFc=new C.jt("aqua","Aqua",A.bK,A.D5,A.nR,A.oM,A.nY)
D.dF4=new C.jt("plum","Plum",A.mr,A.w6,A.Dj,A.CW,A.rn)
D.dFi=new C.jt("steel","Steel",A.de,A.dC,A.bi,A.jZ,A.kR)
D.ZZ=w([D.dF6,D.dFh,D.dF7,D.dF8,D.dFj,D.dFg,D.dF1,D.dF0,D.dF_,D.dFb,D.dFd,D.dF2,D.dF3,D.dFa,D.dFf,D.dF5,D.dEZ,D.dFe,D.dF9,D.dFc,D.dF4,D.dFi],B.az("O<jt>"))
D.cDq=w([A.bR,A.iZ],x.O)
D.Pc=new C.hm(10,"rotate3d")
D.Gf=new C.hm(8,"flip")
D.aAp=new C.hm(19,"spiral")
D.pn=new C.hm(16,"bounce")
D.aAs=new C.hm(9,"flipVertical")
D.cDr=w([D.Pc,D.Gf,D.aAp,D.pn,D.aAs],x.i)
D.e_=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cDK=w([0.62,1],x.x)
D.cEg=w([0,0.32,0.68,1],x.x)
D.mb=new C.hm(6,"zoom")
D.tg=new C.hm(4,"slideUp")
D.tf=new C.hm(2,"slideLeft")
D.cEo=w([D.mb,D.Gf,D.tg,D.Pc,D.tf],x.i)
D.cES=w([A.c8,A.hp,A.ia,A.hr,A.c],x.O)
D.aU_=new B.aa(0,A.G,D.a9u,A.tm,30)
D.cFx=w([D.aU_],x.V)
D.dMs=new B.v(0,-2.5)
D.dMi=new B.v(-2.5,0)
D.dLm=new B.v(2.5,0)
D.cFA=w([A.Ps,A.aB6,A.aBj,A.a1I,D.dMs,H.aBg,D.dMi,D.dLm],x.dN)
D.Fr=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cG0=w([23,114,69,56,80,144],x.t)
D.cGo=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cGN=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cId=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cIh=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.ba=new C.u3(0,"rectangle")
D.ey=new C.u3(1,"circle")
D.kH=new C.u3(6,"hexagon")
D.cIt=w([D.ba,D.ey,D.kH],x.m)
D.ny=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aas=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cJ0=w([D.aas,A.eF],x.O)
D.dYl=new B.A("","Classic")
D.dX5=new B.A("caps","Bold caps")
D.e76=new B.A("elegant","Elegant")
D.ebN=new B.A("shadow","Shadow")
D.e1m=new B.A("neon","Neon glow")
D.eas=new B.A("outline","Outline")
D.e9H=new B.A("marker","Highlighter")
D.ebY=new B.A("stamp","Stamp")
D.ebq=new B.A("retro","Retro")
D.e0o=new B.A("threed","3D")
D.e7B=new B.A("fire","Fire")
D.e8t=new B.A("ice","Ice")
D.e6j=new B.A("chalk","Chalk")
D.e6o=new B.A("comic","Comic")
D.ec_=new B.A("sunset","Sunset")
D.ed3=new B.A("softglow","Soft glow")
D.e9o=new B.A("lowercase","Lowercase")
D.e6Q=new B.A("double","Echo")
D.eda=new B.A("whisper","Whisper")
D.arm=w([D.dYl,D.dX5,D.e76,D.ebN,D.e1m,D.eas,D.e9H,D.ebY,D.ebq,D.e0o,H.aGh,D.e7B,D.e8t,D.e6j,D.e6o,A.a2v,D.ec_,D.ed3,D.e9o,D.e6Q,D.eda],x.L)
D.cKa=w([3,5,7,10,12,15],x.t)
D.cLn=w([A.c8,A.bJ,A.c,A.ev,A.d3],x.O)
D.d5E=new C.rD(10,"cardWorld")
D.B2=new C.Ah(3,"rounded")
D.dlO=new C.kZ("world","NGMY World",D.d5E,D.B2,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d5F=new C.rD(11,"cardSplit")
D.dlK=new C.kZ("business","Business Wire",D.d5F,D.B2,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d5G=new C.rD(12,"cardBreaking")
D.dlX=new C.kZ("breaking","Breaking Red",D.d5G,D.B2,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d5H=new C.rD(13,"cardFeature")
D.dlQ=new C.kZ("feature","Tech Feature",D.d5H,D.B2,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.ayY=new C.rD(6,"circle")
D.ayS=new C.Ah(4,"circle")
D.dlU=new C.kZ("parchment","Royal Circle",D.ayY,D.ayS,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dlJ=new C.kZ("ocean","Blue Ocean",D.ayY,D.ayS,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d5K=new C.rD(7,"rail")
D.ayR=new C.Ah(1,"double")
D.dlL=new C.kZ("forest","Green Leaf",D.d5K,D.ayR,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.ayV=new C.rD(1,"sideBySide")
D.dlZ=new C.kZ("herald","NGMY Herald",D.ayV,D.B2,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.ayU=new C.rD(0,"classic")
D.a0A=new C.Ah(9,"shadow")
D.dlY=new C.kZ("daily","The Daily",D.ayU,D.a0A,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d5I=new C.rD(2,"splash")
D.ayT=new C.Ah(6,"cutCorner")
D.dlI=new C.kZ("tabloid","Big Tabloid",D.d5I,D.ayT,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.ayZ=new C.rD(9,"minimal")
D.dlT=new C.kZ("modern","Modern Digest",D.ayZ,D.B2,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.ayW=new C.rD(3,"magazine")
D.ayQ=new C.Ah(0,"plain")
D.dlP=new C.kZ("midnight","Midnight Edition",D.ayW,D.ayQ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d5L=new C.rD(8,"banner")
D.dlR=new C.kZ("metro","Metro Wire",D.d5L,D.ayT,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d5D=new C.Ah(8,"arch")
D.dlS=new C.kZ("sunrise","Sunrise Post",D.ayW,D.d5D,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.ayX=new C.rD(5,"scrapbook")
D.d5C=new C.Ah(5,"tape")
D.dlN=new C.kZ("neon","Neon Beat",D.ayX,D.d5C,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d5J=new C.rD(4,"wrap")
D.dm_=new C.kZ("gold","Golden Press",D.d5J,D.a0A,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dm0=new C.kZ("minimal","Paper White",D.ayZ,D.a0A,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dlM=new C.kZ("gazette","Fresh Gazette",D.ayU,D.ayR,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dlW=new C.kZ("times","Classic Times",D.ayV,D.ayQ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.OJ=new C.Ah(2,"polaroid")
D.dlV=new C.kZ("scrapbook","Memory Scrapbook",D.ayX,D.OJ,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_c=w([D.dlO,D.dlK,D.dlX,D.dlQ,D.dlU,D.dlJ,D.dlL,D.dlZ,D.dlY,D.dlI,D.dlT,D.dlP,D.dlR,D.dlS,D.dlN,D.dm_,D.dm0,D.dlM,D.dlW,D.dlV],B.az("O<kZ>"))
D.cLz=w([0.45,1],x.x)
D.Ft=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cLU=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fgB=new C.o5("Original",0,1,1,0,0,0)
D.fgF=new C.o5("Black & white",0,1.1,0,0,0,0)
D.fgs=new C.o5("Noir",-0.05,1.55,0,0,0,0)
D.fgw=new C.o5("Sepia",0,1,0.25,0.9,0,0)
D.fgv=new C.o5("Vivid",0,1.15,1.6,0,0,0)
D.fgo=new C.o5("Pop",0,1.3,1.9,0,0,0)
D.fgq=new C.o5("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fgC=new C.o5("Matte",0,0.9,0.85,0,0,0.55)
D.fgx=new C.o5("Cool",0,1.05,1,-0.8,0,0)
D.fgE=new C.o5("Warm",0.03,1.05,1.1,0.8,0,0)
D.fgp=new C.o5("Golden hour",0.04,1,1.25,1,0,0)
D.fgu=new C.o5("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fgD=new C.o5("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fgt=new C.o5("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fgz=new C.o5("Retro",0,0.9,0.7,0.4,0,0.35)
D.fgy=new C.o5("Forest",0,1,1.2,-0.1,-0.45,0)
D.fgA=new C.o5("Rose",0,1,1.1,0.3,0.4,0)
D.fgr=new C.o5("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cLV=w([D.fgB,D.fgF,D.fgs,D.fgw,D.fgv,D.fgo,D.fgq,D.fgC,D.fgx,D.fgE,D.fgp,D.fgu,D.fgD,D.fgt,D.fgz,D.fgy,D.fgA,D.fgr],B.az("O<o5>"))
D.aZ0=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cLW=w([D.aas,A.eF,D.aZ0],x.O)
D.dUE=new B.A(0.12,0.3)
D.e8D=new B.A(0.26,0.75)
D.e72=new B.A(0.8,0.22)
D.ec7=new B.A(0.9,0.7)
D.e9n=new B.A(0.5,0.15)
D.eau=new B.A(0.65,0.85)
D.e_2=new B.A(0.08,0.85)
D.cM6=w([D.dUE,D.e8D,D.e72,D.ec7,D.e9n,D.eau,D.e_2],x.G)
D.arv=w([A.bd,A.c8,A.bF,A.bm],x.O)
D.cMT=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cN4=w([A.c,A.fS,A.dE,A.u_],x.O)
D.b0S=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cNX=w([D.b0S,D.a9j],x.O)
D.cNY=w([A.w1,A.au],x.O)
D.cOb=w([0,0.25,0.75,1],x.x)
D.cOd=w([A.vY,A.nW],x.O)
D.aA_=new C.kD(10,"kenteSunset")
D.fkR=w([D.a9B,A.ju,A.au],x.O)
D.dh4=new C.ja("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aA_,4294964964,4282000405,4279983648,D.jl)
D.aA0=new C.kD(11,"indigoMudcloth")
D.aZP=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fl4=w([D.aZP,A.a9g,A.hK],x.O)
D.dhc=new C.ja("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aA0,4294439140,4279903102,4279903102,D.jl)
D.aA1=new C.kD(12,"adinkraRoyal")
D.b9X=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fl5=w([D.a8n,D.b9X,A.au],x.O)
D.dhe=new C.ja("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aA1,4294965484,4285218591,4287322667,D.jl)
D.aA2=new C.kD(13,"nileLotus")
D.b6P=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b43=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fla=w([D.b6P,D.b43,A.hK],x.O)
D.dhd=new C.ja("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aA2,4294244340,4279196764,4279196764,D.jl)
D.aA3=new C.kD(14,"shweshweIvory")
D.b2q=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b1t=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b_g=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fkS=w([D.b2q,D.b1t,D.b_g],x.O)
D.dh9=new C.ja("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aA3,4294505710,4279970378,4291058750,D.jl)
D.qE=new C.kD(15,"certIvoryNavy")
D.fkQ=w([D.J9,D.iW,A.hK],x.O)
D.azw=new C.wI(1,"ringsNdoa")
D.dh6=new C.ja("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qE,4294966259,4279378237,4291404327,D.azw)
D.a15=new C.wI(2,"coupleCards")
D.dh1=new C.ja("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qE,4294966259,4279378237,4291404327,D.a15)
D.B5=new C.kD(18,"certIvoryNavyBar")
D.a8m=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fl3=w([D.a8m,D.iW,A.hK],x.O)
D.azx=new C.wI(3,"kuhoweshaForm")
D.dh_=new C.ja("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.B5,4294966519,4279378237,4291404327,D.azx)
D.a9s=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fln=w([D.J9,D.a9s,A.hK],x.O)
D.a16=new C.wI(4,"mahariPande")
D.dh2=new C.ja("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qE,4294966259,4279904068,4291404327,D.a16)
D.aA4=new C.kD(16,"certIvoryGreen")
D.b1W=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fkU=w([A.IA,D.b1W,A.hK],x.O)
D.azy=new C.wI(5,"familiaMti")
D.dh8=new C.ja("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aA4,4294966776,4280241466,4291404327,D.azy)
D.a17=new C.wI(6,"ndoaSafi")
D.dh0=new C.ja("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.B5,4294966519,4279378237,4291404327,D.a17)
D.b5z=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fkX=w([D.J9,A.hK,D.b5z],x.O)
D.a18=new C.wI(7,"peteWide")
D.dh5=new C.ja("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qE,4294966259,4282001936,4291404327,D.a18)
D.dhf=new C.wI(8,"muhuriCrest")
D.dgZ=new C.ja("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qE,4294966259,4279378237,4291404327,D.dhf)
D.fl6=w([D.a8m,D.a9s,A.hK],x.O)
D.dhg=new C.wI(9,"fomuWazi")
D.dhb=new C.ja("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.B5,4294966519,4279904068,4291404327,D.dhg)
D.aA5=new C.kD(17,"certIvoryRose")
D.b2s=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fl9=w([D.b2s,D.aa6,A.hK],x.O)
D.a14=new C.wI(10,"upendoOrnate")
D.dh7=new C.ja("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aA5,4294965493,4286200650,4291404327,D.a14)
D.cOA=w([D.dh4,D.dhc,D.dhe,D.dhd,D.dh9,D.dh6,D.dh1,D.dh_,D.dh2,D.dh8,D.dh0,D.dh5,D.dgZ,D.dhb,D.dh7],x.h)
D.e0=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Gg=new C.vb(0,"emojis")
D.Bc=new C.vb(1,"pictures")
D.Gh=new C.vb(2,"icons3d")
D.a1p=new C.vb(3,"animations")
D.Pe=new C.vb(4,"videoMotion")
D.Bd=new C.vb(5,"luxe")
D.a_i=w([D.Gg,D.Bc,D.Gh,D.a1p,D.Pe,D.Bd],B.az("O<vb>"))
D.eb3=new B.A(A.dO,"Looks")
D.e0V=new B.A(A.xj,"Light")
D.e0S=new B.A(A.ns,"Colour")
D.e_3=new B.A(A.wU,"Effects")
D.ag4=new B.a_(63112,"MaterialIcons",!1)
D.dXi=new B.A(D.ag4,"Crop")
D.cP0=w([D.eb3,D.e0V,D.e0S,D.e_3,D.dXi],x.f2)
D.cPB=w([],x.D)
D.flk=w([],x.L)
D.e_e=new B.A("Flashcard",D.Gb)
D.e2J=new B.A("Quiz",D.Gc)
D.e4v=new B.A("Worksheet",D.Gd)
D.e1Q=new B.A("Notes",D.ma)
D.e3a=new B.A("Section",D.Ba)
D.cQb=w([D.e_e,D.e2J,D.e4v,D.e1Q,D.e3a],B.az("O<+(n,m6)>"))
D.diX=new C.kD(6,"beadedPearl")
D.b88=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b4D=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.flo=w([D.b88,D.b4D,A.hK],x.O)
D.azu=new C.ja("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.diX,4294966774,4286209070,4291404327,D.jl)
D.diY=new C.kD(7,"artDeco")
D.b7U=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bab=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.flm=w([D.b7U,D.bab,A.bR],x.O)
D.azv=new C.ja("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.diY,4294440434,4280228630,4290283019,D.jl)
D.diZ=new C.kD(8,"rosetteCorners")
D.b9v=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0U=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b4z=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fl_=w([D.b9v,D.b0U,D.b4z],x.O)
D.azt=new C.ja("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.diZ,4294702831,4285218602,4291394365,D.jl)
D.dj_=new C.kD(9,"modernLedger")
D.fkZ=w([A.c,D.iW,D.iW],x.O)
D.azs=new C.ja("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dj_,4294967295,4279378237,4279378237,D.jl)
D.cQf=w([D.azu,D.azv,D.azt,D.azs],x.h)
D.cQn=w([A.ia,A.nW],x.O)
D.cd=new C.hm(0,"none")
D.da=new C.hm(1,"fade")
D.Ge=new C.hm(3,"slideRight")
D.aAr=new C.hm(5,"slideDown")
D.dDB=new C.hm(7,"zoomOut")
D.a1o=new C.hm(11,"cube")
D.dDw=new C.hm(12,"blur")
D.aAo=new C.hm(13,"dissolve")
D.dDx=new C.hm(14,"wipeLeft")
D.dDy=new C.hm(15,"wipeRight")
D.Pd=new C.hm(17,"push")
D.dDz=new C.hm(18,"flash")
D.aAq=new C.hm(20,"swing")
D.dDA=new C.hm(21,"curtain")
D.NU=w([D.cd,D.da,D.tf,D.Ge,D.tg,D.aAr,D.mb,D.dDB,D.Gf,D.aAs,D.Pc,D.a1o,D.dDw,D.aAo,D.dDx,D.dDy,D.pn,D.Pd,D.dDz,D.aAp,D.aAq,D.dDA],x.i)
D.NV=w([D.a13,D.a11,D.a0V,D.a0W,D.a0X,D.a1_,D.a0Y,D.a0Z,D.a12,D.a10,D.azu,D.azv,D.azt,D.azs],x.h)
D.cQN=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cQR=w([A.zc,A.hr,A.bR],x.O)
D.e0j=new B.A(A.rS,"Design")
D.ecw=new B.A(D.agj,"Word sizes")
D.e97=new B.A(A.Am,"Text")
D.brb=new B.a_(983182,"MaterialIcons",!1)
D.e9b=new B.A(D.brb,"Photo")
D.dWV=new B.A(A.l_,"Logo")
D.edA=new B.A(A.EQ,"News")
D.cQW=w([D.e0j,D.ecw,D.e97,D.e9b,D.dWV,D.edA],x.f2)
D.cQX=w(["golddust","sparkle","sheen"],x.s)
D.dEY=new C.ek("upload_pdf",K.Lk,"Upload PDF")
D.dE7=new C.ek("sign_paper",A.EN,"Sign Paper")
D.bqu=new B.a_(63438,"MaterialIcons",!1)
D.dEU=new C.ek("hd_photo",D.bqu,"HD Photo")
D.dE_=new C.ek("sharpen",E.Xe,"Sharpen")
D.dE9=new C.ek("print",K.Lk,"Download PDF")
D.dEB=new C.ek("rotate",D.ag4,"Rotate")
D.dEi=new C.ek("text_box",A.Am,"Text Box")
D.dEk=new C.ek("picture",A.rV,"Picture")
D.dEg=new C.ek("title",A.xd,"Title")
D.dEc=new C.ek("subtitle",U.agU,"Subtitle")
D.dEK=new C.ek("bullets",I.Xw,"Bullet List")
D.dEd=new C.ek("numbered",A.Lb,"Numbered")
D.dEN=new C.ek("quote",A1.Af,"Quote")
D.dEp=new C.ek("citation",A.p6,"Citation")
D.dEQ=new C.ek("date_stamp",Au.Xj,"Date Stamp")
D.dED=new C.ek("page_number",A.xc,"Page #")
D.dEH=new C.ek("header_bar",A.EM,"Header")
D.dEj=new C.ek("footer_bar",P.ahc,"Footer")
D.dE8=new C.ek("divider",A.ux,"Divider")
D.dE4=new C.ek("highlight",A.XC,"Highlight")
D.dEJ=new C.ek("redact",A.xg,"Redact")
D.dEw=new C.ek("callout",A.Ab,"Callout")
D.dES=new C.ek("checkboxes",I.afn,"Checklist")
D.dEt=new C.ek("table",A.Y3,"Table")
D.dEn=new C.ek("memo",I.XO,"Memo")
D.dEx=new C.ek("letter",A.Ex,"Letter")
D.bq4=new B.a_(63259,"MaterialIcons",!0)
D.dDZ=new C.ek("agenda",D.bq4,"Agenda")
D.dEa=new C.ek("toc",At.agx,"Contents")
D.bqq=new B.a_(63406,"MaterialIcons",!1)
D.dEu=new C.ek("sig_line",D.bqq,"Sign Line")
D.dDS=new C.ek("initial_line",A.j1,"Initials")
D.dDV=new C.ek("approved",A.l_,"APPROVED")
D.dEz=new C.ek("draft",A.pc,"DRAFT")
D.dEF=new C.ek("confidential",A.j2,"Confidential")
D.dEI=new C.ek("sticky",A.Lo,"Sticky Note")
D.dER=new C.ek("progress",A.agw,"Progress")
D.brE=new B.a_(983507,"MaterialIcons",!1)
D.dE5=new C.ek("stars",D.brE,"Star Rating")
D.dDQ=new C.ek("equation",A.agm,"Equation")
D.dE0=new C.ek("timeline",A.Lp,"Timeline")
D.dEo=new C.ek("two_col",A.Y5,"Two Columns")
D.dE2=new C.ek("compare",A0.Xm,"Compare")
D.dDO=new C.ek("duplicate_el",A.fB,"Duplicate")
D.dEW=new C.ek("delete_el",A.e4,"Delete")
D.bql=new B.a_(63352,"MaterialIcons",!1)
D.dEM=new C.ek("bring_fwd",D.bql,"Bring Front")
D.bqk=new B.a_(63351,"MaterialIcons",!1)
D.dDT=new C.ek("send_back",D.bqk,"Send Back")
D.dEy=new C.ek("align_left",D.Xu,"Align L")
D.dEE=new C.ek("align_center",D.Xt,"Align C")
D.dEV=new C.ek("align_right",D.Xv,"Align R")
D.dEh=new C.ek("word_count",A_.WW,"Word Count")
D.dEe=new C.ek("link_text",A.h7,"Link")
D.dEC=new C.ek("phone",A.iq,"Phone")
D.dE3=new C.ek("email",A.Ad,"Email")
D.dEX=new C.ek("qr_placeholder",A.j4,"QR Placeholder")
D.dDY=new C.ek("rectangle",A2.Em,"Rectangle")
D.dEs=new C.ek("circle",A.rN,"Circle")
D.dDU=new C.ek("arrow",A.jh,"Arrow")
D.dEL=new C.ek("line",A.ux,"Line")
D.dE6=new C.ek("triangle",A.Xk,"Triangle")
D.bqc=new B.a_(63318,"MaterialIcons",!1)
D.dEb=new C.ek("grayscale",D.bqc,"Grayscale")
D.dEl=new C.ek("brighten",I.afH,"Brighten")
D.dEq=new C.ek("flip_h",A.Ep,"Flip H")
D.bqj=new B.a_(63348,"MaterialIcons",!1)
D.dET=new C.ek("flip_v",D.bqj,"Flip V")
D.dEG=new C.ek("cover_page",A.p2,"Cover Page")
D.dDR=new C.ek("invoice",A.fU,"Invoice")
D.dE1=new C.ek("resume",A.lZ,"Resume")
D.dEf=new C.ek("minutes",A.oa,"Minutes")
D.dDW=new C.ek("lab_report",A.Ll,"Lab Report")
D.dDX=new C.ek("rubric",A.wY,"Rubric")
D.dEr=new C.ek("flashcard_tool",P.EH,"Flashcard")
D.dEO=new C.ek("quiz_tool",A.EC,"Quiz Block")
D.dEv=new C.ek("worksheet_tool",L.Ef,"Worksheet")
D.dEA=new C.ek("outline_share",A.Lm,"Share Outline")
D.dEP=new C.ek("export_json",D.aft,"Export JSON")
D.dDP=new C.ek("new_slide",D.WV,"New Slide")
D.dEm=new C.ek("present",A.p8,"Present")
D.cRl=w([D.dEY,D.dE7,D.dEU,D.dE_,D.dE9,D.dEB,D.dEi,D.dEk,D.dEg,D.dEc,D.dEK,D.dEd,D.dEN,D.dEp,D.dEQ,D.dED,D.dEH,D.dEj,D.dE8,D.dE4,D.dEJ,D.dEw,D.dES,D.dEt,D.dEn,D.dEx,D.dDZ,D.dEa,D.dEu,D.dDS,D.dDV,D.dEz,D.dEF,D.dEI,D.dER,D.dE5,D.dDQ,D.dE0,D.dEo,D.dE2,D.dDO,D.dEW,D.dEM,D.dDT,D.dEy,D.dEE,D.dEV,D.dEh,D.dEe,D.dEC,D.dE3,D.dEX,D.dDY,D.dEs,D.dDU,D.dEL,D.dE6,D.dEb,D.dEl,D.dEq,D.dET,D.dEG,D.dDR,D.dE1,D.dEf,D.dDW,D.dDX,D.dEr,D.dEO,D.dEv,D.dEA,D.dEP,D.dDP,D.dEm],B.az("O<ek>"))
D.cRr=w([A.cq,A.ak],x.O)
D.dWw=new B.A(4286331629,4292552567)
D.dWj=new B.A(4280640491,4278630100)
D.dWE=new B.A(4294538006,4292943176)
D.dVG=new B.A(4278556265,4280640491)
D.cMg=w([D.dWw,D.dWj,D.dWE,D.dVG],x.n)
D.cc2=w([4294626325,4280472558,4294210230],x.t)
D.dDJ=new C.nh("colorful","Colorful",A.ns,D.cMg,4294967295,3875536895,D.cc2,D.mb)
D.dW7=new B.A(4279522093,4279657780)
D.dWn=new B.A(4281750292,4283268111)
D.dVJ=new B.A(4278603323,4279203438)
D.dWo=new B.A(4282343954,4279599165)
D.cmL=w([D.dW7,D.dWn,D.dVJ,D.dWo],x.n)
D.cbL=w([4288931381,4294829706,4287033260],x.t)
D.dDF=new C.nh("nature","Nature",A.EO,D.cmL,4294442727,3874290891,D.cbL,D.da)
D.dW1=new B.A(4279369771,4283178389)
D.dVZ=new B.A(4279179050,4286456526)
D.dWf=new B.A(4280163147,4290648157)
D.dVy=new B.A(4278322711,4285343961)
D.cDC=w([D.dW1,D.dVZ,D.dWf,D.dVy],x.n)
D.cbZ=w([4294210230,4280472558,4289170426],x.t)
D.dDD=new C.nh("vibe","Vibe",A.Xy,D.cDC,4294967295,3874869502,D.cbZ,D.tf)
D.dWA=new B.A(4290007817,4292552567)
D.dWu=new B.A(4286328082,4294286859)
D.dWz=new B.A(4288485197,4294538006)
D.dWt=new B.A(4285343961,4293675161)
D.bJm=w([D.dWA,D.dWu,D.dWz,D.dWt],x.n)
D.cc3=w([4294829706,4294967295,4284999929],x.t)
D.dDE=new C.nh("celebration","Celebration",A.kX,D.bJm,4294967295,4009752557,D.cc3,D.pn)
D.dVX=new B.A(4279179050,4280171146)
D.dW0=new B.A(4279310375,4280232247)
D.dVP=new B.A(4278916151,4280172719)
D.dVY=new B.A(4279179050,4281549141)
D.cxd=w([D.dVX,D.dW0,D.dVP,D.dVY],x.n)
D.cbG=w([4281908728,4294626325,4287931320],x.t)
D.dDI=new C.nh("professional","Professional",A.Aa,D.cxd,4294967295,3872118241,D.cbG,D.Pd)
D.dVT=new B.A(4278995566,4278413729)
D.dVL=new B.A(4278727492,4279137424)
D.dWg=new B.A(4280171146,4278751666)
D.dVU=new B.A(4278995566,4279590517)
D.cfO=w([D.dVT,D.dVL,D.dWg,D.dVU],x.n)
D.cbJ=w([4286436348,4284410580,4294829706],x.t)
D.dDK=new C.nh("ocean","Ocean",I.Y7,D.cfO,4294967295,3873501950,D.cbJ,D.tg)
D.dWv=new B.A(4286328082,4294538006)
D.dWx=new B.A(4286781507,4294677052)
D.dWr=new B.A(4283178389,4294197086)
D.dWy=new B.A(4288295954,4294688548)
D.ctt=w([D.dWv,D.dWx,D.dWr,D.dWy],x.n)
D.cc4=w([4294829706,4294967295,4294747557],x.t)
D.dDL=new C.nh("sunset","Sunset",A.Lq,D.ctt,4294967295,4009749973,D.cc4,D.da)
D.dWI=new B.A(4294967295,4294047225)
D.dWD=new B.A(4294507260,4294967295)
D.dWH=new B.A(4294967295,4293060848)
D.dWC=new B.A(4294507260,4294047225)
D.cGu=w([D.dWI,D.dWD,D.dWH,D.dWC],x.n)
D.cbE=w([4280640491,4279179050,4287931320],x.t)
D.dDH=new C.nh("minimal","Minimal",A2.Em,D.cGu,4279179050,4282865001,D.cbE,D.da)
D.dVS=new B.A(4278979081,4280886564)
D.dWb=new B.A(4280031511,4278979081)
D.dW_=new B.A(4279308561,4281148438)
D.dVR=new B.A(4278979081,4280031511)
D.cT9=w([D.dVS,D.dWb,D.dW_,D.dVR],x.n)
D.cbS=w([4292128567,4294829706,4289241758],x.t)
D.dDM=new C.nh("elegant","Elegant",A.lu,D.cT9,4294898631,3873957348,D.cbS,D.aAo)
D.dWd=new B.A(4280159034,4282058596)
D.dVO=new B.A(4278916151,4280163147)
D.dWl=new B.A(4281208933,4278916151)
D.dW4=new B.A(4279502891,4283178389)
D.cZ8=w([D.dWd,D.dVO,D.dWl,D.dW4],x.n)
D.cc0=w([4294296657,4292128567,4291081725],x.t)
D.dDG=new C.nh("royal","Royal Gold",A.iL,D.cZ8,4294965222,3874084351,D.cc0,D.mb)
D.dVD=new B.A(4278464302,4280163147)
D.dVN=new B.A(4278916151,4279455306)
D.dWe=new B.A(4280163147,4283040846)
D.dVA=new B.A(4278332450,4281413249)
D.cLZ=w([D.dVD,D.dVN,D.dWe,D.dVA],x.n)
D.cbF=w([4281193663,4289170426,4294210230],x.t)
D.dDN=new C.nh("aurora","Aurora Glow",A.dO,D.cLZ,4293983738,3869766608,D.cbF,D.da)
D.uT=w([D.dDJ,D.dDF,D.dDD,D.dDE,D.dDI,D.dDK,D.dDL,D.dDH,D.dDM,D.dDG,D.dDN],B.az("O<nh>"))
D.b54=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cRT=w([A.pZ,D.b54,A.pZ],x.O)
D.cS7=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cSb=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.e91=new B.A("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e_U=new B.A("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e46=new B.A("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dTP=new B.A("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e2Q=new B.A("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e1e=new B.A("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e5e=new B.A("Surprise me","")
D.cSF=w([D.e91,D.e_U,D.e46,D.dTP,D.e2Q,D.e1e,D.e5e],x.L)
D.b_i=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b8h=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cTk=w([A.c,D.b_i,D.b8h],x.O)
D.cV_=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azY=new C.kD(0,"heritageGold")
D.b3S=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b3T=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.flp=w([D.b3S,D.b3T,A.au],x.O)
D.dha=new C.ja("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azY,4294570461,4284234270,4292128567,D.jl)
D.azZ=new C.kD(1,"heritageCrimson")
D.aYX=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b2r=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b89=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fl2=w([D.aYX,D.b2r,D.b89],x.O)
D.dh3=new C.ja("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azZ,4294635750,4285213214,4292912216,D.jl)
D.cV3=w([D.a13,D.a11,D.dha,D.dh3,D.a0X,D.a1_],x.h)
D.dn3=new C.qQ(1,"circuit")
D.dnw=new C.lK("neural","Neural Link","Robotic",D.dn3,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dn2=new C.qQ(0,"grid")
D.dnt=new C.lK("signal","Signal Grid","Robotic",D.dn2,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dn8=new C.qQ(2,"hexes")
D.dne=new C.lK("core","Core Protocol","Robotic",D.dn8,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAl=new C.qQ(11,"diagonal")
D.dnp=new C.lK("steel","Steel Tech","Robotic",D.aAl,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAm=new C.qQ(3,"rings")
D.dnd=new C.lK("vault","Vault Gold","Robotic",D.aAm,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dn6=new C.qQ(13,"leaves")
D.dng=new C.lK("forest","Forest Morning","Nature",D.dn6,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAn=new C.qQ(5,"waves")
D.dnn=new C.lK("ocean","Ocean Calm","Nature",D.aAn,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dn9=new C.qQ(6,"sunset")
D.dns=new C.lK("sunset","Sunset Glow","Nature",D.dn9,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dna=new C.qQ(7,"mountains")
D.dnf=new C.lK("mountain","Mountain Air","Nature",D.dna,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dnb=new C.qQ(8,"stars")
D.dnm=new C.lK("night","Night Sky","Nature",D.dnb,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1m=new C.qQ(4,"orbs")
D.dnk=new C.lK("aurora","Aurora","Nature",D.a1m,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dnu=new C.lK("sand","Sand Dune","Nature",D.aAn,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dnc=new C.qQ(9,"rays")
D.dnj=new C.lK("golden","Golden Hour","Warm",D.dnc,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dnh=new C.lK("royal","Royal Purple","Warm",D.aAl,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dni=new C.lK("rose","Rose Petal","Warm",D.a1m,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dn5=new C.qQ(12,"blocks")
D.dnl=new C.lK("electric","Electric Blue","Bold",D.dn5,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dnv=new C.lK("mint","Fresh Mint","Bold",D.a1m,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dn7=new C.qQ(14,"minimal")
D.dnr=new C.lK("white","Clean White","Clean",D.dn7,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dn4=new C.qQ(10,"frame")
D.dno=new C.lK("midnight","Midnight Gold","Clean",D.dn4,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dnq=new C.lK("community","Community Green","Clean",D.aAm,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_I=w([D.dnw,D.dnt,D.dne,D.dnp,D.dnd,D.dng,D.dnn,D.dns,D.dnf,D.dnm,D.dnk,D.dnu,D.dnj,D.dnh,D.dni,D.dnl,D.dnv,D.dnr,D.dno,D.dnq],B.az("O<lK>"))
D.cVp=w([D.zi,A.w1,A.hr,A.bR],x.O)
D.cVE=w([D.aaf,D.iW],x.O)
D.cVN=w(["pdf","docx","txt","md"],x.s)
D.egE=new B.bz(-3,150,34)
D.egF=new B.bz(-3,214,62)
D.egG=new B.bz(-3,288,62)
D.cWA=w([D.egE,D.egF,D.egG],B.az("O<+(Q,Q,Q)>"))
D.cX0=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cXx=w(["Write","Design","Print & fold"],x.s)
D.jm=new C.u3(2,"triangle")
D.Bb=new C.u3(3,"arrow")
D.fe=new C.u3(4,"line")
D.jn=new C.u3(5,"parallelogram")
D.cXz=w([D.ba,D.ey,D.jm,D.Bb,D.fe,D.jn,D.kH],x.m)
D.dUS=new B.A(240,96)
D.dXb=new B.A(560,46)
D.cXE=w([D.dUS,D.dXb],x.G)
D.flA=new C.wL(0,"classic")
D.dj2=new C.nd("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azY,4294570461,4282000405,4284234270)
D.dje=new C.nd("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azZ,4294635750,4281999378,4285213214)
D.dj3=new C.nd("elegant_navy","Umoja Mzuri",y.s,D.a1g,4294967035,4279378237,4290283019)
D.djg=new C.nd("elegant_gold","Umoja wa Dhahabu",y.Q,D.aA6,4294966515,4281016592,4289102906)
D.dji=new C.nd("kente_sunset","Kente ya Jua",y.H,D.aA_,4294964964,4282000405,4279983648)
D.dj0=new C.nd("indigo_mudcloth","Nguo ya Indigo",y.n,D.aA0,4294439140,4279903102,4279903102)
D.dj5=new C.nd("adinkra_royal","Muhuri wa Adinkra",y.z,D.aA1,4294965484,4285218591,4287322667)
D.dja=new C.nd("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aA2,4294244340,4279196764,4279196764)
D.djc=new C.nd("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aA3,4294505710,4279970378,4291058750)
D.flB=new C.wL(1,"ringsNdoa")
D.dj4=new C.nd("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qE,4294966259,4279378237,4291404327)
D.flD=new C.wL(2,"coupleCards")
D.djf=new C.nd("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qE,4294966259,4279378237,4291404327)
D.flE=new C.wL(3,"kuhoweshaForm")
D.djb=new C.nd("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.B5,4294966519,4279378237,4291404327)
D.flF=new C.wL(4,"mahariPande")
D.dj1=new C.nd("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qE,4294966259,4279904068,4291404327)
D.flG=new C.wL(5,"familiaMti")
D.djh=new C.nd("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aA4,4294966776,4280241466,4291404327)
D.flH=new C.wL(6,"ndoaSafi")
D.dj8=new C.nd("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.B5,4294966519,4279378237,4291404327)
D.flI=new C.wL(7,"peteWide")
D.dj7=new C.nd("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qE,4294966259,4282001936,4291404327)
D.flJ=new C.wL(8,"muhuriCrest")
D.dj6=new C.nd("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qE,4294966259,4279378237,4291404327)
D.flK=new C.wL(9,"fomuWazi")
D.dj9=new C.nd("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.B5,4294966519,4279904068,4291404327)
D.flC=new C.wL(10,"upendoOrnate")
D.djd=new C.nd("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aA5,4294965493,4286200650,4291404327)
D.O7=w([D.dj2,D.dje,D.dj3,D.djg,D.dji,D.dj0,D.dj5,D.dja,D.djc,D.dj4,D.djf,D.djb,D.dj1,D.djh,D.dj8,D.dj7,D.dj6,D.dj9,D.djd],B.az("O<nd>"))
D.B9=new C.aox(0,"landscape169")
D.nz=new C.aox(1,"portrait916")
D.cYj=w([D.B9,D.nz],B.az("O<aox>"))
D.asP=w([A.hr,A.bJ,A.d3,A.ia,A.c],x.O)
D.t7=w([A.bR,A.iY],x.O)
D.cYL=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","ELECTRONICS LAB: build real circuits with 29 parts in two tool rows (one above the board, one below): batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows six NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dU9=new B.A(1000,"M")
D.dYc=new B.A(900,"CM")
D.dX6=new B.A(500,"D")
D.dVw=new B.A(400,"CD")
D.dUa=new B.A(100,"C")
D.dYd=new B.A(90,"XC")
D.dX7=new B.A(50,"L")
D.dVx=new B.A(40,"XL")
D.dUe=new B.A(10,"X")
D.dYn=new B.A(9,"IX")
D.dXl=new B.A(5,"V")
D.dWU=new B.A(4,"IV")
D.dUz=new B.A(1,"I")
D.cYS=w([D.dU9,D.dYc,D.dX6,D.dVw,D.dUa,D.dYd,D.dX7,D.dVx,D.dUe,D.dYn,D.dXl,D.dWU,D.dUz],x.ek)
D.ehx=new B.cK(["open",A.j1,"Open & write","Keep writing this book"])
D.ehW=new B.cK(["print",A.rY,"Print as a book","Fold and staple it"])
D.cYZ=w([D.ehx,D.ehW],B.az("O<+(n,a_,n,n)>"))
D.cZz=w([D.a1o,D.mb,D.Gf,D.Pd,D.da,D.Pc],x.i)
D.e9v=new B.A(-1,"Small")
D.dTY=new B.A(0,"Normal")
D.dUy=new B.A(1,"Big")
D.dV5=new B.A(2,"Huge")
D.cZY=w([D.e9v,D.dTY,D.dUy,D.dV5],x.ek)
D.d_m=w([49,65,89,38,83,89],x.t)
D.d_t=w([A.w1,A.hr,A.bR],x.O)
D.d_T=w([D.da,D.mb,D.tf,D.a1o,D.Gf,D.Pd],x.i)
D.ay5=new B.dX([0,D.Jm,8,D.abr,12,D.abs],B.az("dX<I,a1N>"))
D.dIx={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b82=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cxn=w([A.bJ,D.b82],x.O)
D.cPY=w([A.bc,A.bj],x.O)
D.cLb=w([A.c8,A.b2,A.cS],x.O)
D.cZ_=w([A.cq,A.bx],x.O)
D.cEr=w([A.bd,A.f5],x.O)
D.cND=w([A.b1,A.fk],x.O)
D.b2d=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cN_=w([D.b2d,A.nW],x.O)
D.cI0=w([A.i9,A.w3],x.O)
D.cEh=w([A.bs,A.cb],x.O)
D.d2t=new B.bs(D.dIx,[D.cxn,H.ajO,D.cPY,D.cLb,D.cZ_,D.cEr,D.cND,D.cN_,D.cI0,D.cEh],B.az("bs<n,ak<x>>"))
D.dHL={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a0g=new B.bs(D.dHL,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bs<n,n>"))
D.a0m=new B.bs(A.iu,[],B.az("bs<I,+icon3d,picture(n?,n?)>"))
D.d6n=new F.Lg(30,null)
D.dbj=new F.m2("Chapter 1","","","")
D.cY6=w([D.dbj],x.B)
D.dbn=new F.qG("My Book","","",D.cY6,E.azj)
D.dbl=new F.tU("starry",null,null,null,null,"","","")
D.dbo=new F.qG("Dream Big","","",E.a_s,D.dbl)
D.dbm=new F.tU("story",null,null,null,null,"","","")
D.dbp=new F.qG("Little Lion","","",E.a_s,D.dbm)
D.dbk=new F.tU("vintage",null,null,null,null,"","","")
D.dbq=new F.qG("Our Story","","",E.a_s,D.dbk)
D.deq=new C.De("","NGMY","","")
D.dlH=new C.yt("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dDC=new C.aYP(null,null,null,null)
D.dFk=new C.aoC(null)
D.dFx=new C.ap7(0,"smaller")
D.dFy=new C.ap7(1,"bigger")
D.aAB=new C.ap7(2,"fit")
D.dKs=new B.v(3,6)
D.dKB=new B.v(4,8)
D.dNp=new B.C(E.ace,U.a7W,null)
D.dNt=new B.C(A.V_,A.lK,null)
D.bsU=new B.ac(A.mG,16,A.c1,null,null,null)
D.dNx=new B.C(A.k0,D.bsU,null)
D.aYq=new B.fa(2.2,null,null,null,null,A.c,null,null,null,null)
D.dNH=new B.C(A.DS,D.aYq,null)
D.bCV=new B.ac(A.ct,16,A.aA,null,null,null)
D.dNL=new B.C(A.ef,D.bCV,null)
D.eUu=new B.w("Play",null,A.ow,null,null,null,null,null,null,null,null,null)
D.cQc=w([V.aij,A.tz,D.eUu],x.p)
D.elp=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cQc,null)
D.dNO=new B.C(A.qe,D.elp,null)
D.aYz=new B.fa(2.4,null,null,null,null,null,null,null,null,null)
D.eqd=new B.a3(20,20,D.aYz,null)
D.dNT=new B.C(A.k0,D.eqd,null)
D.f1P=new B.w("Seconds per slide",null,A.hb,null,null,null,null,null,null,null,null,null)
D.dO_=new B.C(A.bk,D.f1P,null)
D.dOz=new C.a6x(2,"print")
D.dOC=new B.iE(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dQe=new B.fZ("/Annot")
D.dQg=new B.fZ("/URI")
D.ePh=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dRZ=new B.jc("share",48,D.ePh,null,B.az("jc<n>"))
D.bCQ=new B.ac(A.dO,14,A.ev,null,null,null)
D.dS7=new B.cF(null,-2,-2,null,null,null,D.bCQ,null)
D.b5r=new B.x(0.3333333333333333,0,0,0,A.t)
D.cza=w([D.b5r,A.K],x.O)
D.bIf=new B.a7(A.a3,A.a7,A.w,D.cza,null,null)
D.aRF=new B.o(null,null,null,null,null,D.bIf,A.n)
D.bc5=new B.kA(D.aRF,A.b9,null,null)
D.dSj=new B.cF(0,0,null,0,8,null,D.bc5,null)
D.cU4=w([A.hJ,A.nX,A.cl],x.O)
D.dSX=new B.bR(A.A,0.5,A.w,null,0,D.cU4,null,null)
D.dUZ=new B.A(0.22,A.bj)
D.dYG=new B.A("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e_z=new B.A(0.5,A.hp)
D.e8f=new B.A(0.78,A.aS)
D.eho=new B.cK([A.bF,0.22,0.7,2.6])
D.eht=new B.cK([A.bd,0.36,1.2,1.3])
D.ehz=new B.cK([A.dI,0.28,0.2,0.4])
D.ehF=new B.cK([A.cE,0.05,0.3,0.35])
D.ehL=new B.cK([A.bs,0.28,0.9,0])
D.ehT=new B.cK([A.aB,-0.25,-0.15,0.45])
D.eiD=new B.cK([A.c8,0.42,1,4.1])
D.el8=new B.a7p(9)
D.bu0=new B.ac(A.EQ,28,A.cS,null,null,null)
D.f2k=new B.w("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bl9=new B.bE(1,A.bo,D.f2k,null)
D.cX3=w([D.bu0,A.aw,D.bl9],x.p)
D.elk=new B.cC(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cX3,null)
D.bub=new B.ac(A.p6,16,A.c,null,null,null)
D.f3F=new B.w("Book",null,A.qS,null,null,null,null,null,null,null,null,null)
D.d_s=w([D.bub,A.eA,D.f3F],x.p)
D.elr=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.d_s,null)
D.bAv=new B.ac(A.j2,10,A.c,null,null,null)
D.eSK=new B.w("Pro",null,A.mT,null,null,null,null,null,null,null,null,null)
D.cQh=w([D.bAv,A.vc,D.eSK],x.p)
D.elu=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cQh,null)
D.f1O=new B.w("Make a newspaper",null,An.R0,null,null,null,null,null,null,null,null,null)
D.bJk=w([E.Ys,A.aa,D.f1O],x.p)
D.elv=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.bJk,null)
D.bz6=new B.ac(A.kX,18,A.bJ,null,null,null)
D.eUI=new B.w("Ending celebration",null,A.j7,null,null,null,null,null,null,null,null,null)
D.cWb=w([D.bz6,A.bp,D.eUI],x.p)
D.ely=new B.cC(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cWb,null)
D.bAh=new B.ac(A.j1,18,A.kq,null,null,null)
D.eAq=new B.F(!0,A.kq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new B.w("Write",null,D.eAq,null,null,null,null,null,null,null,null,null)
D.cGj=w([D.bAh,A.aa,D.f3V],x.p)
D.elD=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cGj,null)
D.eSJ=new B.w("Download picture",null,A.pz,null,null,null,null,null,null,null,null,null)
D.bmV=new B.pM(A.e8,A.A,A.h,D.eSJ,null)
D.bn5=new B.dp(1,A.cj,D.bmV,null)
D.cQD=w([K.ai9,A.aa,D.bn5],x.p)
D.elE=new B.cC(A.aZ,A.b6,A.j,A.m,null,A.p,null,0,D.cQD,null)
D.bvX=new B.ac(A.EQ,22,A.cS,null,null,null)
D.f0z=new B.w("NGMY NEWS",null,H.a3X,null,null,null,null,null,null,null,null,null)
D.cyG=w([D.bvX,A.aa,D.f0z],x.p)
D.elM=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cyG,null)
D.elX=new B.oE(!1,!1,null,U.SS,null,A.bW,null,null,null)
D.a2X=new B.jC([D.cd,D.da,D.tf,D.Ge,D.tg,D.aAr],B.az("jC<hm>"))
D.dJC={title:0,quote:1,closing:2,bio:3}
D.emJ=new B.fb(D.dJC,4,x.M)
D.dI1={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.emL=new B.fb(D.dI1,5,x.M)
D.dJ9={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2Y=new B.fb(D.dJ9,8,x.M)
D.dIF={Design:0,Transitions:1,Insert:2}
D.emP=new B.fb(D.dIF,3,x.M)
D.flS=new B.jC([D.a1p],B.az("jC<vb>"))
D.dIM={float3d:0,drift:1,pulse:2}
D.emS=new B.fb(D.dIM,3,x.M)
D.aHd=new B.jC([D.Gb,D.Gc,D.Gd],B.az("jC<m6>"))
D.dHZ={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aHf=new B.fb(D.dHZ,14,x.M)
D.flT=new B.fb(A.iu,0,B.az("fb<vb>"))
D.dIJ={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Qa=new B.fb(D.dIJ,4,x.M)
D.dHT={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aHh=new B.fb(D.dHT,30,x.M)
D.dIR={circle:0,triangle:1,hexagon:2,diamond:3}
D.en6=new B.fb(D.dIR,4,x.M)
D.epd=new B.aq(390,844)
D.epY=new B.a3(20,20,A4.Iv,null)
D.aI2=new B.a3(null,2.5,null,null)
D.eq7=new B.a3(18,18,A4.Iv,null)
D.bAl=new B.ac(A.iL,19,A.c,null,null,null)
D.eqi=new B.a3(38,38,D.bAl,null)
D.byI=new B.ac(A.xk,22,A.c,null,null,null)
D.eqk=new B.a3(40,40,D.byI,null)
D.eqS=new B.hH(2,10,10,1.15,null)
D.aIa=new B.hH(2,16,14,0.62,null)
D.bjk=new B.M(32,30,32,40)
D.aZI=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.btY=new B.ac(A.p2,56,D.aZI,null,null,null)
D.aaM=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eCo=new B.F(!0,D.aaM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYP=new B.w("Your books will live here.",null,D.eCo,null,A.L,null,null,null,null,null,null,null)
D.cIS=w([D.btY,A.T,D.eYP],x.p)
D.bbi=new B.fk(A.ai,A.e,A.j,A.m,null,A.p,null,0,D.cIS,null)
D.dNY=new B.C(D.bjk,D.bbi,null)
D.erc=new B.lM(D.dNY,null)
D.eYM=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eru=new B.b_(D.eYM,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eWZ=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.erv=new B.b_(D.eWZ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f0B=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.erE=new B.b_(D.f0B,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f15=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.erT=new B.b_(D.f15,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVN=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.es5=new B.b_(D.eVN,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f7x=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eso=new B.b_(D.f7x,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4V=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.esz=new B.b_(D.f4V,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f1d=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.etf=new B.b_(D.f1d,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eR7=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.etv=new B.b_(D.eR7,null,null,null,null,null,null,null,A.i5,null,null,null,null,A.oU,!1,null,null,null,A.q,null)
D.eSQ=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.etN=new B.b_(D.eSQ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eYu=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.etP=new B.b_(D.eYu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eYa=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.etQ=new B.b_(D.eYa,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f31=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.etR=new B.b_(D.f31,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNy=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eu_=new B.b_(D.eNy,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTU=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eum=new B.b_(D.eTU,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6p=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.euo=new B.b_(D.f6p,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f61=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eus=new B.b_(D.f61,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eME=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.euu=new B.b_(D.eME,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2f=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.euD=new B.b_(D.f2f,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f5D=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.euS=new B.b_(D.f5D,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f5u=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.euU=new B.b_(D.f5u,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eMw=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ev_=new B.b_(D.eMw,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQb=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.evr=new B.b_(D.eQb,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4I=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.evC=new B.b_(D.f4I,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQ_=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.evR=new B.b_(D.eQ_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b4P=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cxz=w([A.ia,A.nW,D.b4P,D.a8e,A.ia],x.O)
D.ewe=new B.fQ(A.A,0,6.283185307179586,A.w,D.cxz,null,null)
D.cFB=w([A.bJ,A.bR,A.hr,D.zi,A.bJ],x.O)
D.aIK=new B.fQ(A.A,0,6.283185307179586,A.w,D.cFB,null,null)
D.cS5=w([A.c8,A.bF,A.bd,A.bm,A.cS,A.c8],x.O)
D.ewj=new B.fQ(A.A,0,6.283185307179586,A.w,D.cS5,null,null)
D.czo=w([A.oS,A.nY,A.z9,A.ia,A.oS],x.O)
D.ewk=new B.fQ(A.A,0,6.283185307179586,A.w,D.czo,null,null)
D.cS_=w([A.aO,A.bL,A.aJ,A.ak,A.aO],x.O)
D.ewl=new B.fQ(A.A,0,6.283185307179586,A.w,D.cS_,null,null)
D.cYI=w([A.bs,A.bd,A.bF,A.c8,A.bs],x.O)
D.ewn=new B.fQ(A.A,0,6.283185307179586,A.w,D.cYI,null,null)
D.b53=new B.x(1,0,1,1,A.t)
D.b_O=new B.x(1,1,0,1,A.t)
D.cVh=w([A.CO,A.a9H,H.a8R,D.b53,H.a9b,D.b_O,A.CO],x.O)
D.ewo=new B.fQ(A.A,0,6.283185307179586,A.w,D.cVh,null,null)
D.ewD=new C.at5(2,"immersiveSticky")
D.ewE=new C.at5(3,"edgeToEdge")
D.ewF=new C.at5(4,"manual")
D.eyO=new B.F(!0,A.nQ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJf=new B.F(!0,A.fv,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezk=new B.F(!0,E.mu,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAI=new B.F(!0,A.al,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBH=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBQ=new B.F(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCa=new B.F(!0,A.ev,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDr=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDA=new B.F(!0,A.j_,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDN=new B.qZ(!0,A.Gw,null,null,null,null,A.dl,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEf=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEQ=new B.F(!0,A.iZ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFb=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dOF=new B.iE(1,1,0.7568627450980392,0.027450980392156862)
D.eFf=new B.qZ(!0,D.dOF,null,null,null,null,A.dl,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9N=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJX=new B.F(!0,D.a9N,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFl=new B.F(!0,D.aaM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFm=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJZ=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFW=new B.qZ(!0,A.on,null,null,null,null,A.dl,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGe=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.QW=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGJ=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGL=new B.F(!0,D.a9N,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hl=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHc=new B.F(!0,A.bR,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHk=new B.F(!0,A.bL,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHn=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHD=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqR,null,null,null)
D.eHF=new B.F(!0,A.cL,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHH=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHT=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI3=new B.F(!0,A.dE,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIB=new B.F(!0,A.aQ,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIK=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIZ=new B.F(!0,A.al,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKz=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKB=new B.F(!0,A.c1,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b9k=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eKH=new B.F(!0,D.b9k,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKJ=new B.F(!0,E.mu,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new B.F(!0,A.bL,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLb=new B.F(!0,O.kU,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEs=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new B.w("NEW",null,D.eEs,null,null,null,null,null,null,null,null,null)
D.eMz=new B.w("Hati ya Kuhowesha",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eMZ=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eNi=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eNX=new B.w("Big quote mark",null,A.ix,null,null,null,null,null,null,null,null,null)
D.eNZ=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eO9=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eOB=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eOC=new B.w("How many slides?",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eP8=new B.w("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eAt=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePs=new B.w("Luxury FX",null,D.eAt,null,null,null,null,null,null,null,null,null)
D.ePK=new B.w("Font",null,A.qT,null,null,null,null,null,null,null,null,null)
D.ePV=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eQ0=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eKe=new B.F(!0,A.bL,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ8=new B.w("Example  GA847",null,D.eKe,null,null,null,null,null,null,null,null,null)
D.eQx=new B.w("Design shapes",null,A.ix,null,null,null,null,null,null,null,null,null)
D.eQF=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eQJ=new B.w("Non-stop (loop)",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eQW=new B.w("Hati ya Kuhoweya",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eRe=new B.w("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.eRE=new B.w("Add your picture",null,A.l6,null,null,null,null,null,null,null,null,null)
D.eDO=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRF=new B.w("Enter document code",null,D.eDO,null,A.L,null,null,null,null,null,null,null)
D.eRG=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.eBw=new B.F(!0,E.mu,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new B.w("Delete this book?",null,D.eBw,null,A.L,null,null,null,null,null,null,null)
D.eFM=new B.F(!0,E.mu,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new B.w("Your library",null,D.eFM,null,null,null,null,null,null,null,null,null)
D.eSW=new B.w("Delete",null,A.aJQ,null,null,null,null,null,null,null,null,null)
D.eSY=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Am.Hj,null,null,null,null,null,null,null,null,null)
D.eT7=new B.w("Element flies in",null,A.aK2,null,null,null,null,null,null,null,null,null)
D.Re=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eTu=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eTN=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eTR=new B.w("Cancel",null,E.aKe,null,null,null,null,null,null,null,null,null)
D.eTT=new B.w("The lines and circles that come with the design",null,A.hV,null,null,null,null,null,null,null,null,null)
D.eJ6=new B.F(!0,A.hY,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUi=new B.w("DOCUMENT CODE",null,D.eJ6,null,null,null,null,null,null,null,null,null)
D.eV1=new B.w("Quotes",null,G.a4x,null,null,null,null,null,null,null,null,null)
D.eDe=new B.F(!0,O.kU,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV9=new B.w("Add a picture",null,D.eDe,null,null,null,null,null,null,null,null,null)
D.eVg=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,R.aJS,null,A.L,null,null,null,null,null,null,null)
D.eVj=new B.w("Look & feel",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eVn=new B.w("Rings",null,A.j7,null,null,null,null,null,null,null,null,null)
D.eVs=new B.w("W",null,A.qT,null,null,null,null,null,null,null,null,null)
D.eVB=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eVS=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4j,null,A.L,null,null,null,null,null,null,null)
D.eVU=new B.w("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eWA=new B.w("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eWN=new B.w("Malipo ya Awamu ya Mahari",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eDD=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX_=new B.w("Create with AI",null,D.eDD,null,A.L,null,null,null,null,null,null,null)
D.eXr=new B.w("Apply look",null,A.j7,null,null,null,null,null,null,null,null,null)
D.eEk=new B.F(!0,A.eO,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYc=new B.w("Type your presentation below",null,D.eEk,null,A.L,null,null,null,null,null,null,null)
D.eYf=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aKL,null,A.L,null,null,null,null,null,null,null)
D.eYh=new B.w("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.ezx=new B.F(!0,A.cH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new B.w("Done",null,D.ezx,null,null,null,null,null,null,null,null,null)
D.eYI=new B.w("Delete",null,A.mU,null,null,null,null,null,null,null,null,null)
D.eYR=new B.w("Hati ya Kiapo cha Uongozi",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eCE=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZG=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eCE,null,A.L,null,null,null,null,null,null,null)
D.f_0=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f_6=new B.w("Layout",null,A.R2,null,null,null,null,null,null,null,null,null)
D.f_H=new B.w("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f_K=new B.w("X",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f0i=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a4d,null,null,null,null,null,null,null,null,null)
D.f0N=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new B.w("Hati ya Kuhowa",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f1_=new B.w("Choose a class template",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f11=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hV,null,null,null,null,null,null,null,null,null)
D.f17=new B.w("Download the newspaper picture",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f1i=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.f1p=new B.w("Done",null,A.aKy,null,null,null,null,null,null,null,null,null)
D.f1y=new B.w("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f1z=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a40,null,null,null,null,null,null,null,null,null)
D.f2C=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.f2D=new B.w("What would you like to do?",null,D.aJX,null,null,null,null,null,null,null,null,null)
D.f2H=new B.w("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f38=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f3c=new B.w("Hati (Documents)",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f3o=new B.w("Done",null,A.kM,null,null,null,null,null,null,null,null,null)
D.eK5=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3s=new B.w("Delete presentation?",null,D.eK5,null,A.L,null,null,null,null,null,null,null)
D.f3J=new B.w("After the last slide it starts again from the first",null,A.hV,null,null,null,null,null,null,null,null,null)
D.f3T=new B.w("\ud83c\udf33",null,A.Hg,null,A.L,null,null,null,null,null,null,null)
D.f4a=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hV,null,null,null,null,null,null,null,null,null)
D.f4h=new B.w("Transfer document",null,A.ou,null,null,null,null,null,null,null,null,null)
D.f4r=new B.w("Add to the slides",null,A.hb,null,null,null,null,null,null,null,null,null)
D.f4M=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.f50=new B.w("Make a book",null,I.aJw,null,null,null,null,null,null,null,null,null)
D.f54=new B.w("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eD9=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new B.w("Keep this page open until it finishes.",null,D.eD9,null,null,null,null,null,null,null,null,null)
D.f58=new B.w("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f5d=new B.w("LANGUAGE",null,D.QW,null,null,null,null,null,null,null,null,null)
D.f5k=new B.w("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f5s=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.f5t=new B.w("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f5J=new B.w("Delete from the database?",null,A.l6,null,null,null,null,null,null,null,null,null)
D.f5K=new B.w("H",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f65=new B.w("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f6u=new B.w("Cover",null,D.aKJ,null,null,null,null,null,null,null,null,null)
D.f6y=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.f6z=new B.w("Each page becomes its own slide you can present",null,A.hV,null,null,null,null,null,null,null,null,null)
D.f6U=new B.w("Y",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f74=new B.w("Crop the picture",null,A.kM,null,null,null,null,null,null,null,null,null)
D.f79=new B.w("Edit text",null,A.Hh,null,null,null,null,null,null,null,null,null)
D.f9j=B.dN("a6k")
D.C4=new C.auo(0,"none")
D.aMf=new C.auo(1,"zipCrypto")
D.aMg=new C.auo(2,"aes")
D.fbD=new F.NG("","",null)
D.fcJ=new C.b8P(null)
D.fdM=new C.XE(null)
D.feR=new C.ab4(null)
D.feT=new C.aBq(null)
D.fhE=new C.YT(null)
D.fhU=new C.Zo(null)
D.fic=new C.bq6(null)})();(function staticFields(){$.fVc=null
$.fVd=null
$.fVe=null
$.fVf=null
$.fDF=B.uo("_lastQuoRemDigits")
$.fDG=B.uo("_lastQuoRemUsed")
$.auJ=B.uo("_lastRemUsed")
$.fDH=B.uo("_lastRem_nsh")
$.pC=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5a=B.S(x.N,x.I)
$.fBe=!1
$.fZV=B.S(B.az("kD"),x.N)
$.h_6=B.S(B.az("kD"),x.E)
$.fY7=!1
$.bvH="q"
$.OE=0
$.Bt=B.S(x.N,B.az("ak<yv>"))
$.fYu=!1
$.fFe=!1
$.h3D=null
$.hxg=B.S(x.N,B.az("aw<n?>"))
$.IQ=""
$.iO=0
$.fS0=function(){var w=x.N
return B.S(w,w)}()
$.fS_=B.S(x.N,x.R)
$.fFz=!1
$.adH=B.S(x.N,x.E)
$.fGl=0
$.bgN=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hVS","BO",()=>C.b6m(0))
w($,"hVQ","a0C",()=>C.b6m(1))
w($,"hVR","h79",()=>C.b6m(2))
w($,"hVP","fJY",()=>$.a0C().ud(0))
w($,"hVN","h77",()=>C.b6m(1e4))
w($,"hVO","h78",()=>B.CX(8))
w($,"hRF","h5a",()=>B.CX(0))
w($,"hRN","h5e",()=>B.CX(0))
w($,"hRM","h5d",()=>B.bTe(0))
w($,"hZv","h98",()=>{var v,u,t=x.N
t=B.S(t,t)
for(v=D.a0g.gdH(D.a0g),v=v.gag(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hZV","bA6",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.ms(new C.fmY(),v,"biz_plan_blue","Business Plan",B.a([B.aY(u),B.aY(t)],h)),C.ms(new C.fmZ(),v,"exec_summary","Executive",B.a([B.aY(s),B.aY(t)],h)),C.ms(new C.fn_(),v,"teal_corporate","Teal Corp",B.a([B.aY(r),B.aY(4279310375)],h)),C.ms(new C.fna(),q,"geometric_overlap","Geometric",B.a([B.aY(4279203438),B.aY(u)],h)),C.ms(new C.fnf(),p,"midnight_cyan","Midnight Cyan",B.a([B.aY(o),B.aY(n)],h)),C.ms(new C.fng(),q,"diagonal_hero","Diagonal Hero",B.a([B.aY(m),B.aY(l)],h)),C.ms(new C.fnh(),v,"swot_grid","SWOT Grid",B.a([B.aY(u),B.aY(4278556265)],h)),C.ms(new C.fni(),v,"layered_chevrons","Chevrons",B.a([B.aY(4280172719),B.aY(k)],h)),C.ms(new C.fnj(),q,"split_triangle","Split Panel",B.a([B.aY(s),B.aY(t)],h)),C.ms(new C.fnk(),v,"corporate_navy","Navy Pro",B.a([B.aY(4278982953),B.aY(4282090230)],h)),C.ms(new C.fnl(),p,"cyan_slash","Cyan Slash",B.a([B.aY(o),B.aY(4278630100)],h)),C.ms(new C.fn0(),p,"crimson_impact","Crimson",B.a([B.aY(4282714634),B.aY(4292617766)],h)),C.ms(new C.fn1(),q,"ocean_waves","Ocean Waves",B.a([B.aY(4278413729),B.aY(4286436348)],h)),C.ms(new C.fn2(),p,"mono_geometric","Mono Geo",B.a([B.aY(o),B.aY(n)],h)),C.ms(new C.fn3(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aY(4280031511),B.aY(4293571336)],h)),C.ms(new C.fn4(),q,"hex_infographic","Hex Stack",B.a([B.aY(r),B.aY(4284410580)],h)),C.ms(new C.fn5(),q,"photo_banner","Photo Banner",B.a([B.aY(m),B.aY(4281908728)],h)),C.ms(new C.fn6(),v,"process_steps","Process",B.a([B.aY(s),B.aY(k)],h)),C.ms(new C.fn7(),"Minimal","grid_modern","Grid Modern",B.a([B.aY(l),B.aY(t)],h)),C.ms(new C.fn8(),"Luxury","platinum_frame","Platinum",B.a([B.aY(4282865001),B.aY(4293060848)],h)),C.ms(new C.fn9(),v,"agenda_cards","Agenda Cards",B.a([B.aY(u),B.aY(4292602622)],h)),C.ms(new C.fnb(),q,"headline_orange","Headline Orange",B.a([B.aY(j),B.aY(i)],h)),C.ms(new C.fnc(),q,"infographic_teal","Infographic",B.a([B.aY(r),B.aY(j)],h)),C.ms(new C.fnd(),q,"content_year","Year Feature",B.a([B.aY(j),B.aY(t)],h)),C.ms(new C.fne(),q,"photo_cta","Photo CTA",B.a([B.aY(m),B.aY(i)],h))],B.az("O<Dn>"))})
w($,"hZy","h9a",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["tBpALxM70hBZUBE9MyuZi5W7J8g="]=a.current})($__dart_deferred_initializers__);