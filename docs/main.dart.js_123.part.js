((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,A4,Ae,Af,A5,Ag,Ah,C={
t6(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fDR(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
I7(d){var w
if(d===0)return $.BP()
if(d===1)return $.a0C()
if(d===2)return $.h7j()
if(Math.abs(d)<4294967296)return C.b6n(A.o.N(d))
w=C.hrO(d)
return w},
b6n(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t6(4,w)
return new C.nt(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t6(1,w)
return new C.nt(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aw(d,16)
v=C.t6(2,w)
return new C.nt(v===0?!1:s,w,v)}v=A.o.aj(A.o.gahf(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aj(d,65536)}v=C.t6(v,w)
return new C.nt(v===0?!1:s,w,v)},
hrO(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.R(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BP()
w=$.h7i()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kS(A.aE.gaL(w))
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
q=new C.nt(!1,r,4)
if(s<0)p=q.lW(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fDS(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fVp(d,e,f,g){var w,v,u,t,s,r=A.o.aj(f,16),q=A.o.H(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fm(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fVk(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16)
if(A.o.H(f,16)===0)return C.fDS(d,e,s,g)
w=e+s+1
C.fVp(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hrR(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16),r=A.o.H(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fm(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fm(u,r)}w&2&&B.ah(g)
g[n]=o},
cyJ(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hrP(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6o(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.aw(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.aw(v,16)&1)}},
fVq(d,e,f,g,h,i){var w,v,u,t,s,r
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
hrQ(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nt:function nt(d,e,f){this.a=d
this.b=e
this.c=f},
cyK:function cyK(){},
cyL:function cyL(){},
cyM:function cyM(d,e){this.a=d
this.b=e},
cyN:function cyN(d){this.a=d},
aOd:function aOd(d,e){this.a=d
this.b=e},
fLu(d,e,f){var w=new C.Q0(d,A.o.aj(Date.now(),1000),e)
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
bDp:function bDp(d){this.a=d
this.c=this.b=0},
haw(){return new C.bC_()},
bC_:function bC_(){var _=this
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
hrw(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gcNe(d)))
v=f*2+2
u=C.fT4(C.fT6(),64)
t=new C.cbG(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cbH(e,1000,v)
s=new Uint8Array(v)
return A.aE.dt(s,0,t.cBc(w,0,s,0))},
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
b56:function b56(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cqV:function cqV(){this.a=$},
fUQ(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
haf(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAA:function bAA(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fJf(d,e){e&=31
return(d&$.pD[e])<<e>>>0},
n0(d,e){e&=31
return(d>>>e|C.fJf(d,32-e))>>>0},
fT5(d){var w,v=new C.aq9()
if(B.ix(d))v.aGf(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fT6(){var w=C.fT5(0),v=new Uint8Array(4),u=x.S
u=new C.cbI(w,v,A.Cw,5,B.bY(5,0,!1,u),B.bY(80,0,!1,u))
u.l7(0)
return u},
fT4(d,e){var w=new C.cbE(d,e)
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
bJj:function bJj(){},
bJk:function bJk(d){this.a=d},
huH(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6D:function b6D(){},
ckW:function ckW(){},
bKc:function bKc(d,e){this.a=d
this.b=!1
this.c=e},
bKd:function bKd(){},
hDa(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
at2(d){var w=0,v=B.j(x.H),u
var $async$at2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eyb?2:4
break
case 2:w=5
return B.b(A.jO.fL("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$at2)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jO.fL("SystemChrome.setEnabledSystemUIOverlays",C.hDa(null),u),$async$at2)
case 6:case 3:return B.h(null,v)}})
return B.i($async$at2,v)},
at5:function at5(d,e){this.a=d
this.b=e},
a6k:function a6k(d){this.a=d},
fzT(d,e){return new C.aSv(e,d,null)},
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
hFH(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fb0(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bH(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fb0:function fb0(d,e,f,g,h,i){var _=this
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
t=B.cz(t,new C.bUj(),t.$ti.k("G.E"),x.P)
r=B.z(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bUk())
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
l=new B.Q(Date.now(),0,!1).a4().ab()
p=m.a
k=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nB("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$al6)
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
return B.b(B.nB("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],t,q),null),$async$al6)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al6,v)},
bUl(d){return C.hfU(d)},
hfU(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bUl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aex("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hw),$async$bUl)
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
p=B.a5(m)
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
return B.i($async$bUl,v)},
al5(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$al5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.al4(),$async$al5)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n1(r,new C.bUm(d))
w=4
return B.b(B.nB("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),null),$async$al5)
case 4:t=f
w=t?5:6
break
case 5:s=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aMg("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$al5)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al5,v)},
bUj:function bUj(){},
bUk:function bUk(){},
bUm:function bUm(d){this.a=d},
hPo(d,e,f){return B.c1(A.K,null,new C.fqm(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fqm:function fqm(d,e,f){this.a=d
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
eRs:function eRs(d,e){this.a=d
this.b=e},
eRw:function eRw(d){this.a=d},
eRx:function eRx(d){this.a=d},
eRy:function eRy(d,e,f){this.a=d
this.b=e
this.c=f},
eRt:function eRt(d){this.a=d},
eRu:function eRu(d){this.a=d},
eRv:function eRv(d,e){this.a=d
this.b=e},
eRn:function eRn(d){this.a=d},
eRl:function eRl(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRr:function eRr(d,e,f){this.a=d
this.b=e
this.c=f},
eRq:function eRq(d,e,f){this.a=d
this.b=e
this.c=f},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRF:function eRF(d){this.a=d},
eRG:function eRG(d,e){this.a=d
this.b=e},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRD:function eRD(){},
fXM(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d4(w,x.f)
v=B.cz(v,new C.eYD(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a4<G.E>")
v=B.z(new B.a4(v,new C.eYE(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_O(d){return C.hGT(d)},
hGT(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_O=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.S(x.N,x.ea)
m=new C.fdd(n)
t=4
j=m
i=C
w=7
return B.b(B.a0n("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_O)
case 7:j.$1(i.fXM(f))
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
m.$1(C.fXM(B.aS(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a4<G.E>")
j=B
i=B
h=new B.bg(n,p)
g=C
w=13
return B.b(C.eYM(d),$async$a_O)
case 13:p=j.z(new i.a4(h,new g.fdb(f),o),o.k("G.E"))
A.d.aY(p,new C.fdc())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_O,v)},
af6(d,e){return C.hP3(d,e)},
hP3(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$af6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.fpU(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.al(n,null)
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
return B.b(p.ap("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$af6)
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
eYM(d){return C.hw0(d)},
hw0(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eYM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$eYM)
case 7:r=f
q=r.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.ko(q,B.U(q).c)
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
return B.i($async$eYM,v)},
adY(d,e){return C.hFz(d,e)},
hFz(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adY=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$adY)
case 6:s=g
r=B.aZ(x.N)
q=s.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fT(r,q)
J.cg(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("ck.E"))
w=7
return B.b(s.ap("StringList","ngmy_books_deleted_v1_"+r,q),$async$adY)
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
J.n1(n,new C.faH(e))
w=9
return B.b(C.af6(d,n),$async$adY)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adY,v)},
hPt(d,e){return B.a8(d,!1).cr(B.eH(new C.fqI(e),!0,null,x.H))},
hrT(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e9(w.d,new C.cA5())},
nV:function nV(d,e,f){this.a=d
this.b=e
this.c=f},
eYD:function eYD(){},
eYE:function eYE(){},
fdd:function fdd(d){this.a=d},
fdb:function fdb(d){this.a=d},
fdc:function fdc(){},
fpU:function fpU(){},
faH:function faH(d){this.a=d},
fqI:function fqI(d){this.a=d},
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
hJd(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bw(new C.fhK(),x.H).eN(new C.fhL())}}else if(s)C.fZb()}catch(t){}},
fZb(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eN(new C.f1T())}catch(u){}},
hJg(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fhK:function fhK(){},
fhL:function fhL(){},
f1T:function f1T(){},
h2F(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gK(A.a.e1(v,w,"").split(":"))},
h2C(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kH)return null
return A.a.aW(w,14)},
fI0(d){var w
if(d.b!==D.kH)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aW(w,21)},
hJG(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h2G(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hJB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ae("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.ae("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.S(g,g)}v=B.ae("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kv(0,f)
t=x.N
u=B.cz(u,new C.fiK(),B.a2(u).k("G.E"),t)
s=B.z(u,B.a2(u).k("G.E"))
if(s.length===0)return B.S(t,t)
for(u=v.kv(0,f),u=new B.I6(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PI(A.a.an(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PI(A.a.aW(f,q)):p)+"\\.?$"
l=B.ae(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.S(t,t)
k=B.S(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hJz(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("G.E"))
A.d.aY(q,new C.fiJ())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aNd(w,u,s,0)}return w},
hJD(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a0j:$.h9i(),s=x.N,r=B.S(s,s)
for(s=t.gdH(t),s=s.gag(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.m(0,w.b,u)}return r},
h2D(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eZD(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h2F(q)===e)return q}return null},
hJE(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aW(v,u)
return A.d.gK(D.F2).a},
hJF(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abV(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abV(0,0,0)
v=C.eZD(b6,b0)
u=C.eZD(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hJD(b2,C.hJB(C.h2D(b2),v.r))
if(s.a!==0){u.r=C.hJz(C.h2D(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h2F(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eZD(b6,n)
i=C.eZD(b5,n)
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
a0=C.fI0(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h2C(a8)===a0||C.fI0(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pe(a1,new C.fiQ(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iP
$.iP=a9+1
A.d.J(a1,new C.ey(""+1000*a6+"_"+a9,D.kH,a2,a3,a4,a5,"",24,A.a4,A.bg,A.az,4279310375,A.be,d.at,D.bb,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cd,0,"","","","","",!1,0));++e}b5.f=new B.Q(Date.now(),0,!1)
return new B.abV(k,t,e)},
hJA(d){var w=C.hJE(d)
if(d.w==="hati_kuhowa")return C.h2_("",w)
return C.h1Z("",w)},
fiK:function fiK(){},
fiJ:function fiJ(){},
fiQ:function fiQ(d){this.a=d},
fYV(){var w=new B.Q(Date.now(),0,!1),v=new C.f0X()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fI8(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fjI(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kH&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h2T(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fjI(d)
w=B.bh(u)
if(w==null)return!C.fjI(d)
return new B.Q(Date.now(),0,!1).a4().cY(w.a4().bN(18e9))},
hKl(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.Q(Date.now(),0,!1).a4().ab()},
hjU(d){return A.a.i(d).toLowerCase()},
and(d){return C.hjW(d)},
hjW(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$and=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$and)
case 7:r=f
p=r.rn("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hNQ(),B.U(o).k("J<1,n>")).bZ(0,new C.c3S())
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
anc(d,e){return C.hjV(d,e)},
hjV(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
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
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pL(r)),$async$anc)
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
ane(d,e){return C.hjX(d,e)},
hjX(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ane=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.and(d),$async$ane)
case 3:r=g
if(!J.hC(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$ane)
case 8:q=g
w=9
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pL(r)),$async$ane)
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
w=t}for(;;)switch(w){case 0:if($.fBn&&!a5){w=1
break}t=4
w=7
return B.b(B.ax(),$async$Tm)
case 7:r=a7
q=B.aS(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aD(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.S(e,x.I)
for(d=J.jj(p),d=d.gag(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.U2(B.Z(f.a(n.b),e,a0)))}$.a5a=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a5(a2)
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
for(f=x.f,e=J.jj(f.a(J.q(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gT(e)
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
g=B.a5(a3)
$.al.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fBn=!0
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
return B.b(s.ap("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.al(r,null)),$async$anf)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a5(l)
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
break}u=C.byb(r)
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
a1.f=new B.Q(Date.now(),0,!1)
o=a1.hs()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5a.m(0,d,o)
$.fBn=!0
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
return B.b(B.nB("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab()],e,x.z),null),$async$a5b)
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
return B.b(new B.hR().a3g(A.eu),$async$ang)
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
aWW(d,e){return C.hjY(d,e)},
hjY(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWW=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bX(),$async$aWW)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ae("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eM().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w5(q,new Uint8Array(B.cl(d)),D.bne),$async$aWW)
case 8:n=p.Bx(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a5(k)
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
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.cM,l,m,n)},
f0b(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eT,j,k,l)},
fFk(d,e,f,g,h,i,j,k){var w=C.cy(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ei(h,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.cM,g,e,f)},
f_Q(d,e,f,g){return C.f0b(0,0.002,D.fh,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fFl(d,e,f,g,h,i,j,k){var w=C.cy()
return C.ei(A.px,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bg,A.a4,"",h,w,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.cM,g,e,f)},
fYU(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gK(A.a.e1(v,w,"").split(":"))},
byb(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.S(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.fYU(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kH&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fHF(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Aw(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.fYU(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kH&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fhI(a2))}else A.d.bm(a1.z,new C.fhJ())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fjI(a0))a0.ax=a6.f.a4().ab()
return a0},
fHF(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fku(D.a1j),l=C.cy(),k=x.u,j=B.a([C.ei(A.be,!1,s,A.az,"marriage_locked_bg",r,24,A.bg,A.a4,"",1,C.cy(),m,"","",0,!1,"",0,D.bb,q,2,"",0,0,"",D.cd,D.l3,1,0,0)],k),i=B.a([],k)
i.push(C.IY("NGMY",A.L,236069181,52,A.bg,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IY("TAREHE:",A.be,o,16,A.bg,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fFk("tarehe",0.8059999999999999,0.026,0.18,A.be,16,p,C.fYV()))
i.push(C.f_Q(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IY("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bg,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IY("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cx,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f0b(0,0.002,D.fh,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fFl("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fFl("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fFl("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f0b(268435456,0.175,D.bb,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IY("VIDEO YA KIAPO",A.be,o,10,A.bg,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ei(A.be,!1,s,A.az,"__kiapo_video__",r,24,A.bg,A.a4,"",0.131,C.cy(),t,"","",0,!1,"",0,D.bb,q,2,"",0,0,"",D.cd,D.l3,0.77,0.115,0.492))
i.push(C.IY("Rais Anayeapa:",A.be,p,15,A.bg,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IY("Jina:",A.be,p,13,A.bg,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fFk("rais_jina",0.195,0.6930000000000001,0.62,A.be,13,p,""))
i.push(C.f_Q(0.195,0.7130000000000001,0.62,n))
i.push(C.IY("Sahihi:",A.be,p,13,A.bg,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ei(A.be,!1,s,A.az,"marriage_sign_rais",0,24,A.bg,A.a4,"",0.07,C.cy(),t,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eT,0.38,0.21500000000000002,0.73))
i.push(C.f_Q(0.21500000000000002,0.795,0.38,n))
i.push(C.IY("Tarehe:",A.be,p,13,A.bg,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fFk("rais_tarehe",0.745,0.74,0.2,A.be,12,p,C.fYV()))
i.push(C.f_Q(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f0b(0,0.032,D.bb,o,1,"state_box",0.72,0.14,0.875),C.IY("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bg,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qS(4294967035,t,0,0,j,l,D.pm,"","",u,D.db)
return C.Aw(t,t,t,t,D.nA,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cy(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ae7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.G(x.q).f.P(D.et0)
w=1
break}w=3
return B.b(C.Tm(!0),$async$ae7)
case 3:w=4
return B.b(C.aWX(p),$async$ae7)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h2T(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c1(D.b3s,null,new C.fcA(p),f,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae7)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fcB(),f,null,!0,!0,x.y),$async$ae7)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fHF(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.G(x.q).f
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fHF(p))
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
f0X:function f0X(){},
c3S:function c3S(){},
fhI:function fhI(d){this.a=d},
fhJ:function fhJ(){},
fcA:function fcA(d){this.a=d},
fcy:function fcy(d){this.a=d},
fcz:function fcz(d){this.a=d},
fcB:function fcB(){},
fcw:function fcw(d){this.a=d},
fcx:function fcx(d){this.a=d},
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
dYn:function dYn(d){this.a=d},
dYl:function dYl(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYp:function dYp(d){this.a=d},
vL(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",j,D.bb,4280172719,2,d,0,0,"",D.cd,D.cM,l,m,n)},
fYy(d,e,f){var w=4291404327
return B.a([C.pC(0,f,D.ey,w,2,"ring_l",f,d-f*0.42,e),C.pC(0,f,D.ey,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f_h(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pC(4294967288,f,D.ey,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pC(h,s,D.ey,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pC(h,f*0.46,D.ey,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pC(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eT,j,k,l)},
f_g(d,e,f,g,h,i,j,k,l){var w=C.cy(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ei(h,!1,k,A.az,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bb,4280172719,2,l,0,0,"",D.cd,D.cM,g,e,f)},
bvE(d,e,f,g){return C.pC(0,0.002,D.fh,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fYx(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pC(0,0.036,D.bb,h,1.4,"banner_box_"+d,w,v,e),C.vL(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h2E(){var w=new B.Q(Date.now(),0,!1),v=new C.fiP()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fYz(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vL(r+".",A.be,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f_g("witness_"+d+"_"+r+"_name",q,g,p,A.be,!0,16,j,"[Jina la Shahidi]"),C.bvE(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vL("Sahihi:",A.be,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ei(A.be,!1,4279310375,A.az,"marriage_sign_"+d+"_witness_"+r,0,24,A.bg,A.a4,"",0.05,C.cy(),null,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eT,s,t,g-0.004),C.bvE(t,g+0.044,s,w)],x.u)},
aez(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cVx,D.c2E,D.cP2,D.cQJ],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fEE(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fku(d.d),v=B.a([C.ei(A.be,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a4,"",1,C.cy(),w,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.l3,1,0,0)],x.u)
A.d.v(v,C.hye(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hye(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vL("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fYy(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fYy(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f_h(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f_h(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vL("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pC(0,0.062,D.ey,b1,1.6,"crest_o",0.11,0.445,0.012),C.pC(0,0.046,D.ey,b1,1,"crest_i",0.084,0.458,0.02),C.vL("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pC(0,0.002,D.fh,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pC(b9,0.016,D.kI,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pC(0,0.002,D.fh,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vL("TAREHE:",A.be,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f_g("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.be,!1,21,b9,C.h2E()),C.bvE(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vL(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pC(c0,0.0026,D.bb,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pC(c3.e,0.138,D.bb,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cy()
c2.push(C.ei(A.be,!1,b9,A.az,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bg,A.cq,"",0.128,s,a9,"","",0,!1,"",0,D.bb,b3,2,c5,0,0,"",D.cd,D.cM,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pC(0,0.036,D.bb,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cy()
A.d.v(c2,B.a([s,C.ei(A.L,!1,c0,A.az,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bg,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bb,b3,2,c7,0,0,"",D.cd,D.cM,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fYx(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vL(c9,A.be,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f_g("mahari_"+p,0.132,k,m,A.be,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iP
$.iP=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iP
$.iP=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ey(""+1000*i+"_"+h,D.cM,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bg,A.az,c0,A.be,a9,D.bb,b2,b3,2,0,!1,s,0,D.cd,0,"","","","","",!1,0),j,new C.ey(""+1000*f+"_"+e,D.eT,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.fh,0,b5,0.8,0,!1,g,0,D.cd,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iP
$.iP=p+1
i=Date.now()
h=$.iP
$.iP=h+1
g=Date.now()
f=$.iP
$.iP=f+1
e=Date.now()
a3=$.iP
$.iP=a3+1
A.d.v(d,B.a([new C.ey(""+1000*s+"_"+p,D.cM,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bg,A.az,b7,A.dM,a9,D.bb,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*i+"_"+h,D.eT,a1,a2,0.046,0.025875,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.bb,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*g+"_"+f,D.cM,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bg,A.az,b7,A.L,a9,D.bb,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*e+"_"+a3,D.eT,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bg,A.az,b6,A.be,a9,D.bb,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cd,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fYx("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a18||w===D.a1a||w===D.a17||w===D.a19){w=t-0.008
A.d.v(c2,C.f_h(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f_h(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pC(0,a4,D.bb,c0,1.3,"wit_table_border",0.82,0.09,t),C.pC(c0,a4,D.bb,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pC(0,0.0022,D.fh,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vL("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vL("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fYz("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fYz("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pC(0,0.11,D.bb,c0,1.2,"mw_box",0.82,0.09,t),C.vL("MWANDISHI",A.be,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vL("Jina:",A.be,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f_g("mwandishi_jina",0.215,w,0.3116,A.be,!0,15,b9,""),C.bvE(0.215,p,0.3116,b5),C.vL("Sahihi:",A.be,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.ei(A.be,!1,b6,A.az,"marriage_sign_mwandishi",0,24,A.bg,A.a4,"",0.044,C.cy(),a9,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eT,0.3161999999999999,0.5738,s-0.044),C.bvE(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pC(0,0.032,D.bb,c0,1,"state_box",0.7,0.15,a8),C.vL("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hJC(d){var w,v,u,t=null,s=B.aY(d.f),r=B.aY(d.r),q=C.fIi(d.d),p=new C.fiL(s),o=new C.fiM(s),n=d.z,m=n===D.a18||n===D.a1a||n===D.a17||n===D.a19,l=n===D.azB||n===D.a1b||n===D.azC,k=B.bZ(0,B.fD(q,A.A,t,t,A.ci,A.bO,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a1b?26:16
i.push(new C.fiO().$1$size(w))}if(n===D.azD)i.push(D.f5t)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hz,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aI8,p.$1$w(0.9),D.aI8,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_v,t,n,w,t,t,A.n),t,t,t,t,A.adW,t,t,t))
i.push(A.ar)
i.push(new C.fiN(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.JM,new B.cC(A.aZ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.d6,new B.bF(1,A.bp,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.W,t,A.aY,A.q,B.a([k,new B.C(A.acy,B.u(i,A.af,t,A.e,A.j,0,A.p),t)],j),t)},
h1Z(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aez(e,t)
if(r==null)r=A.d.gK(D.F2)
w=C.cy()
v=C.qS(r.e,t,0,0,C.fEE(r,0.165,y.O,D.cRg,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pm,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.Aw(t,t,t,t,D.nA,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h2_(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aez(e,t)
if(r==null)r=A.d.gK(D.F2)
w=C.cy()
v=C.qS(r.e,t,0,0,C.fEE(r,0.165,y.f,D.cNl,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pm,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.Aw(t,t,t,t,D.nA,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzv(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.fu7(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzv,v)},
ae8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fcE(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J5,null,new C.fcF(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzv(d,"Hati ya Kuhowa",D.F2),$async$ae8)
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
break}e.$1(C.h1Z(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae8,v)},
ae9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fcI(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J5,null,new C.fcJ(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzv(d,"Hati ya Kuhoweya",D.F2),$async$ae9)
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
break}e.$1(C.h2_(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae9,v)},
aea(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aea=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a4<1>")
m=B.z(new B.a4(i,new C.fcM(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.J5,null,new C.fcN(m),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$aea)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzv(d,"Malipo ya Awamu ya Mahari",D.NZ),$async$aea)
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
break}q=C.aez(s,D.NZ)
if(q==null)q=A.d.gK(D.NZ)
n=C.cy()
p=C.qS(q.e,null,0,0,C.fEE(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cIK,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pm,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.db)
n=C.cy()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Aw(null,null,null,null,D.nA,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aea,v)},
wJ:function wJ(d,e){this.a=d
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
fiP:function fiP(){},
fiL:function fiL(d){this.a=d},
fiN:function fiN(d){this.a=d},
fiO:function fiO(){},
fiM:function fiM(d){this.a=d},
fu7:function fu7(d,e){this.a=d
this.b=e},
ab1:function ab1(d,e,f){this.c=d
this.d=e
this.a=f},
dPM:function dPM(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPK:function dPK(d,e){this.a=d
this.b=e},
aar:function aar(d,e,f){this.c=d
this.d=e
this.a=f},
fcE:function fcE(){},
fcF:function fcF(d){this.a=d},
fcC:function fcC(d){this.a=d},
fcD:function fcD(d){this.a=d},
fcI:function fcI(){},
fcJ:function fcJ(d){this.a=d},
fcG:function fcG(d){this.a=d},
fcH:function fcH(d){this.a=d},
fcM:function fcM(){},
fcN:function fcN(d){this.a=d},
fcK:function fcK(d){this.a=d},
fcL:function fcL(d){this.a=d},
J0(d,e,f,g,h,i,j,k,l,m){var w=C.cy()
return C.ei(e,!1,f,A.az,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.cM,k,l,m)},
Bx(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.be,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eT,j,k,l)},
fZe(d,e,f){return C.Bx(0,0.002,D.fh,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvO(d,e,f,g,h){return B.a([C.Bx(4294967288,0.032,D.bb,4291404327,1.15,"pill_"+d,g,f,e),C.J0(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fFp(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bx(0,0.002,D.fh,g,1,"orn_l_"+t,u,d,v),C.Bx(h,0.016,D.kI,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bx(0,0.002,D.fh,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_b(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.J0(d,A.be,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cy()
return B.a([v,C.ei(A.L,!1,j,A.az,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cx,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.cM,t,u,g-0.002),C.fZe(u,g+0.018,t)],x.u)},
fZf(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bx(h,0.028,D.bb,h,0,"chv_"+d,g,e,f),C.Bx(w,0.024,D.kI,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bx(w,0.024,D.kI,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.J0(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvN(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.J0("Sahihi:",A.be,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ei(A.be,!1,4279310375,A.az,"marriage_sign_"+d,0,24,A.bg,A.a4,"",0.032,C.cy(),null,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eT,v,w,f-0.006),C.fZe(w,f+0.016,v)],x.u)},
fIj(d){var w,v
for(w=0;w<19;++w){v=D.Ob[w]
if(v.a===d)return v}return null},
hLS(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aez(A.a.aW(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aez(A.a.aW(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aW(k,18)
w=C.aez(u,D.NZ)
v=w==null?l:w.d
if(v==null){w=C.aez(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fIj(A.a.aW(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h_3.a7(0)
$.h_f.a7(0)
t=C.fku(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fJm(d){var w=0,v=B.j(x.T),u
var $async$fJm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.fvm(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJm,v)},
wM:function wM(d,e){this.a=d
this.b=e},
nf:function nf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfB:function bfB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fvm:function fvm(){},
ab4:function ab4(d){this.a=d},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
acI:function acI(d,e,f){this.c=d
this.d=e
this.a=f},
fIi(d){return $.h_f.ce(0,d,new C.fkw(d))},
fku(d){return $.h_3.ce(0,d,new C.fkv(d))},
ft(d){return B.fz0(d>>>16&255,d>>>8&255,d&255,255)},
hBd(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h0i(4294570461,4293910718,4284234270,u)
case 1:return C.h0i(4294635750,4293975240,t,4292912216)
case 2:w=C.eYS(s,4294505966,r)
C.bvy(w,14,16,p)
C.kg(w,8,9,464,836,u,1.2)
C.Bt(w,2,2,1,1,u,10)
C.Bt(w,478,2,-1,1,u,10)
C.Bt(w,2,852,1,-1,u,10)
C.Bt(w,478,852,-1,-1,u,10)
return w
case 3:return C.eYS(4294966515,4294373082,4289102906)
case 4:return C.hwb(C.eYS(4294376440,4293653998,4290287194))
case 5:w=C.eYS(4294965238,4294437098,4288444980)
C.bvy(w,14,16,4283043359)
C.kg(w,6,7,468,840,u,1)
C.kg(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,n,4294175448)
C.rb(v,n)
C.kg(v,24,24,432,806,4286209070,1)
C.a__(v,12,12,468,12,o,3,20)
C.a__(v,12,842,468,842,o,3,20)
C.a__(v,12,12,12,842,o,3,20)
C.a__(v,468,12,468,842,o,3,20)
return v
case 7:return C.huo(4294440434,4293518297,4280228630,r)
case 8:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,m,4293911504)
C.rb(v,m)
C.kg(v,28,28,424,798,l,1)
C.f69(v,28,28,l,k)
C.f69(v,452,28,l,k)
C.f69(v,28,826,l,k)
C.f69(v,452,826,l,k)
return v
case 9:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,j,4294111986)
C.rb(v,j)
C.kg(v,18,18,444,818,4292401368,0.7)
B.iz(v,!0,C.ft(p),0,13,0,853)
return v
case 10:return C.hy1(i,4294173372)
case 11:return C.hz5(4294439140,4293449662)
case 12:return C.huh(h,4294239432)
case 13:return C.hyx(4294244340,4293193448)
case 14:return C.hCJ(4294505710,4293780694)
case 15:return C.eXU(4294966259,4294439138,o,p,q)
case 16:return C.eXU(4294966776,4294178544,o,g,g)
case 17:return C.eXU(4294965493,4294504170,o,4286200650,q)
case 18:return C.eXU(4294966519,4294373862,o,p,p)
case 19:return C.hxc()
case 20:return C.hxd()
case 21:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,h,4293976768)
C.rb(v,h)
C.bvy(v,14,16,p)
B.iz(v,!0,C.ft(u),4,475,4,9)
B.iz(v,!0,C.ft(u),4,475,844,849)
B.iz(v,!0,C.ft(u),4,9,4,849)
B.iz(v,!0,C.ft(u),470,475,4,849)
C.a__(v,10,12,470,12,u,2,16)
C.a__(v,10,842,470,842,u,2,16)
C.a__(v,10,12,10,842,u,2,18)
C.a__(v,470,12,470,842,u,2,18)
C.Bt(v,2,2,1,1,t,10)
C.Bt(v,478,2,-1,1,t,10)
C.Bt(v,2,852,1,-1,t,10)
C.Bt(v,478,852,-1,-1,t,10)
C.kg(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,s,4294438872)
C.rb(v,s)
C.kg(v,14,16,452,822,o,2.2)
C.kg(v,22,24,436,806,o,1)
C.fGG(v,!1,!1,o,p,p,36,14,16)
C.kt(v,240,20,7,o,!0)
C.kt(v,240,834,7,o,!0)
C.kt(v,18,427,7,o,!0)
C.kt(v,462,427,7,o,!0)
return v
case 23:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,i,4293910712)
C.rb(v,i)
B.iz(v,!0,C.ft(u),0,479,0,20)
B.iz(v,!0,C.ft(u),0,479,834,853)
B.iz(v,!0,C.ft(u),0,20,0,853)
B.iz(v,!0,C.ft(u),460,479,0,853)
B.iz(v,!0,C.ft(f),5,474,5,9)
B.iz(v,!0,C.ft(f),5,474,844,848)
B.iz(v,!0,C.ft(f),5,9,5,848)
B.iz(v,!0,C.ft(f),470,474,5,848)
C.kg(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hd(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xA(v,e,4294174404)
C.rb(v,e)
C.bvy(v,14,16,p)
B.iz(v,!0,C.ft(u),3,476,3,8)
B.iz(v,!0,C.ft(u),3,476,845,850)
B.iz(v,!0,C.ft(u),3,8,3,850)
B.iz(v,!0,C.ft(u),471,476,3,850)
C.kg(v,9,10,462,834,t,1)
C.kg(v,14,16,452,822,u,1.8)
C.kt(v,240,8,4,u,!0)
C.kt(v,240,846,4,u,!0)
C.kt(v,8,427,4,u,!0)
C.kt(v,472,427,4,u,!0)
C.kt(v,8,8,3,t,!0)
C.kt(v,472,8,3,t,!0)
C.kt(v,8,846,3,t,!0)
C.kt(v,472,846,3,t,!0)
return v}},
xA(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kv(d,!1,A.d7,new B.Qj(s),r,A.cS,1,0,w-1,k,k);++k}},
rb(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f0()
n.dX(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dL(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.k.N(s.gb4(s))-3,0,255)
r=A.o.D(A.k.N(s.gba())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jh(u,t,v,r,q,255)}},
kg(d,e,f,g,h,i,j){var w,v=null,u=C.ft(i),t=e+g
B.kv(d,!0,A.d7,u,v,A.cS,j,e,t,f,f)
w=f+h
B.kv(d,!0,A.d7,u,v,A.cS,j,e,t,w,w)
B.kv(d,!0,A.d7,u,v,A.cS,j,e,e,f,w)
B.kv(d,!0,A.d7,u,v,A.cS,j,t,t,f,w)},
Bt(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kv(d,!0,A.d7,C.ft(i),u,A.cS,2,e,e+g*j,f,f)
B.kv(d,!0,A.d7,C.ft(i),u,A.cS,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kv(d,!0,A.d7,C.ft(i),u,A.cS,1,w,e+g*t,v,v)
B.kv(d,!0,A.d7,C.ft(i),u,A.cS,1,w,w,v,f+h*t)},
h0i(d,e,f,g){var w=null,v=B.hd(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xA(v,d,e)
C.rb(v,d)
B.iz(v,!0,C.ft(f),0,479,0,28)
B.iz(v,!0,C.ft(f),0,479,826,853)
B.iz(v,!0,C.ft(f),0,28,0,853)
B.iz(v,!0,C.ft(f),452,479,0,853)
C.kg(v,5,5,470,844,g,1.1)
C.kg(v,28,28,424,798,g,1.6)
C.Bt(v,2,2,1,1,g,11)
C.Bt(v,478,2,-1,1,g,11)
C.Bt(v,2,852,1,-1,g,11)
C.Bt(v,478,852,-1,-1,g,11)
return v},
eYS(d,e,f){var w=null,v=B.hd(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xA(v,d,e)
C.rb(v,d)
C.kg(v,14,16,452,822,f,1.6)
C.kg(v,20,22,440,810,f,0.8)
return v},
bvy(d,e,f,g){var w,v=C.ft(g)
B.iz(d,!0,v,0,479,0,f-1)
w=854-f
B.iz(d,!0,v,0,479,w,853);--w
B.iz(d,!0,v,0,e-1,f,w)
B.iz(d,!0,v,480-e,479,f,w)},
hwb(d){var w,v,u=4291404327
C.bvy(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kt(d,w,8,3,u,!0)
C.kt(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kt(d,7,v,3,u,!0)
C.kt(d,473,v,3,u,!0)}return d},
f97(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j2(e,f),new B.j2(e+g*n,f),new B.j2(e,f+h*n)],t)
B.a_L(d,C.ft(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j2(s,u),new B.j2(e+g*v,u),new B.j2(s,f+h*v)],t)
B.a_L(d,C.ft(k),t)
t=A.k.U(n*0.39)
C.kt(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kt(d,e+g*t,f+h*3,4,k,!0)
C.kt(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kt(d,e+g*t,f,5,k,!0)
C.kt(d,e,f+h*t,5,k,!0)}},
fGG(d,e,f,g,h,i,j,k,l){var w,v
C.f97(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f97(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f97(d,k,v,1,-1,e,f,g,h,i,j)
C.f97(d,w,v,-1,-1,e,f,g,h,i,j)},
a__(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kO(d,!0,A.d7,new B.qp(p),null,A.cS,j,r,q)}},
f8h(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d7,new B.qp(o),null,A.cS,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d7,new B.qp(o),null,A.cS,1.4,q,q,p,p+h*r)}},
huo(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hd(o,o,A.c7,0,A.dV,854,o,0,3,o,A.c7,480,!1)
C.xA(n,d,e)
C.rb(n,d)
C.kg(n,20,20,440,814,f,1.2)
C.f8h(n,0,0,1,1,g)
C.f8h(n,480,0,-1,1,g)
C.f8h(n,0,854,1,-1,g)
C.f8h(n,480,854,-1,-1,g)
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
B.kv(n,!0,A.d7,new B.qp(p),o,A.cS,1.2,240,r,60,q)}return n},
f69(d,e,f,g,h){var w
C.fb1(d,!0,C.ft(g),13,e,f)
C.fb1(d,!0,C.ft(g),9,e,f)
w=B.a([new B.j2(e,f-4),new B.j2(e+4,f),new B.j2(e,f+4),new B.j2(e-4,f)],x.J)
B.a_L(d,C.ft(h),w)},
kt(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j2(e,v),new B.j2(u,f),new B.j2(e,t),new B.j2(s,f)],x.J)
if(i){B.a_L(d,C.ft(h),r)
return}B.kv(d,!0,A.d7,C.ft(h),w,A.cS,1,e,u,v,f)
B.kv(d,!0,A.d7,C.ft(h),w,A.cS,1,u,e,f,t)
B.kv(d,!0,A.d7,C.ft(h),w,A.cS,1,e,s,t,f)
B.kv(d,!0,A.d7,C.ft(h),w,A.cS,1,s,e,f,v)},
eXT(d,e,f,g,h,i,j){var w,v=B.a([new B.j2(e,f),new B.j2(e+g*28,f),new B.j2(e,f+h*28)],x.J)
B.a_L(d,C.ft(i),v)
v=e+g*14
w=f+h*14
C.kt(d,v,w,6,j,!0)
C.kt(d,v,w,3,i,!0)},
eXU(d,e,f,g,h){var w=null,v=B.hd(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xA(v,d,e)
C.rb(v,d)
C.kg(v,18,18,444,818,f,2)
C.kg(v,26,26,428,802,f,0.9)
if(h!=null)B.iz(v,!0,C.ft(h),28,451,28,34)
C.eXT(v,18,18,1,1,g,f)
C.eXT(v,462,18,-1,1,g,f)
C.eXT(v,18,836,1,-1,g,f)
C.eXT(v,462,836,-1,-1,g,f)
return v},
hxc(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hd(v,v,A.c7,0,A.dV,854,v,0,3,v,A.c7,480,!1)
C.xA(r,u,4294240980)
C.rb(r,u)
C.kg(r,10,12,460,830,t,3.2)
C.kg(r,18,20,444,814,s,1.2)
C.kg(r,24,26,432,802,t,1.8)
C.fGG(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kt(r,w,16,3,t,!0)
C.kt(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kt(r,16,w,3,t,!0)
C.kt(r,464,w,3,t,!0)}return r},
hxd(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hd(t,t,A.c7,0,A.dV,854,t,0,3,t,A.c7,480,!1)
C.xA(p,s,4294373080)
C.rb(p,s)
C.kg(p,16,18,448,818,r,2.4)
C.kg(p,24,26,432,802,4286209044,1)
w=new C.f_8(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fGG(p,!1,!0,r,q,q,34,16,18)
return p},
bwe(d,e,f,g,h,i){B.iz(d,!0,C.ft(i),e,e+g,f,f+h)},
bx3(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kv(d,!1,A.d7,new B.Qj(i),null,A.cS,1,e,w,l,l)}},
hy0(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.H(A.o.aj(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d7,new B.qp(r),null,A.cS,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.H(A.o.aj(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d7,new B.qp(r),null,A.cS,1,t,t,f,s);++q}},
hy1(d,e){var w,v,u=null,t=B.hd(u,u,A.c7,0,A.dV,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hy0(t,v,w,30,D.cC9,(A.o.aj(v,30)+A.o.aj(w,30)&1)===0)
C.bwe(t,44,44,392,766,d)
C.bx3(t,44,44,392,766,d,e)
C.rb(t,d)
C.kg(t,44,44,392,766,4292128567,2.2)
C.kg(t,50,50,380,754,4279898632,0.8)
return t},
hz4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.H(g,4)){case 0:C.kt(d,e,f,7,h,!0)
C.kt(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kv(d,!0,A.d7,C.ft(h),o,A.cS,1.6,w,u,v,t)
B.kv(d,!0,A.d7,C.ft(h),o,A.cS,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kv(d,!0,A.d7,new B.qp(p),o,A.cS,1.2,w,v,q,q)}break
default:B.kv(d,!0,A.d7,C.ft(h),o,A.cS,1.5,e-8,e+8,f,f)
B.kv(d,!0,A.d7,C.ft(h),o,A.cS,1.5,e,e,f-8,f+8)
B.kO(d,!0,A.d7,C.ft(h),o,A.cS,2,e,f)}},
hz5(d,e){var w,v,u,t,s=null,r=B.hd(s,s,A.c7,0,A.dV,854,s,0,3,s,A.c7,480,!1)
B.iz(r,!0,C.ft(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hz4(r,u,v,w,4292391514)}C.bwe(r,46,46,388,762,d)
C.bx3(r,46,46,388,762,d,e)
C.rb(r,d)
C.kg(r,46,46,388,762,4291404327,1.8)
return r},
fWR(d,e,f,g){C.fb1(d,!0,C.ft(g),16,e,f)
C.fb1(d,!0,C.ft(g),11,e,f)
C.kt(d,e,f,6,g,!0)
B.kv(d,!0,A.d7,C.ft(g),null,A.cS,1.3,e-14,e+14,f,f)
B.kv(d,!0,A.d7,C.ft(g),null,A.cS,1.3,e,e,f-14,f+14)},
huh(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hd(v,v,A.c7,0,A.dV,854,v,0,3,v,A.c7,480,!1)
B.iz(s,!0,C.ft(4280948752),0,479,0,853)
B.iz(s,!0,C.ft(u),0,479,0,78)
B.iz(s,!0,C.ft(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fWR(s,w,39,t)
C.fWR(s,w,815,t)}C.bwe(s,38,92,404,670,d)
C.bx3(s,38,92,404,670,d,e)
C.rb(s,d)
C.kg(s,38,92,404,670,t,1.8)
C.kg(s,45,99,390,656,4287322667,0.8)
return s},
hyw(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j2(e,f),new B.j2(q-5,w),new B.j2(q,f-(18-Math.abs(r)*3)),new B.j2(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_L(d,new B.qp(o),p)}B.kO(d,!0,A.d7,C.ft(4292128567),null,A.cS,3,e,f)},
hyx(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hd(s,s,A.c7,0,A.dV,854,s,0,3,s,A.c7,480,!1)
C.xA(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kv(q,!0,A.d7,new B.qp(v),s,A.cS,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kv(q,!0,A.d7,new B.qp(u),s,A.cS,1.1,v,v,0,853)}B.iz(q,!0,C.ft(r),0,479,0,70)
B.iz(q,!0,C.ft(r),0,479,798,853)
for(t=0;t<5;++t)C.hyw(q,70+t*85,48,4292128567)
C.bwe(q,48,78,384,712,d)
C.bx3(q,48,78,384,712,d,e)
C.rb(q,d)
C.kg(q,48,78,384,712,4291404327,1.6)
return q},
hCJ(d,e){var w,v,u,t=null,s=4279970378,r=B.hd(t,t,A.c7,0,A.dV,854,t,0,3,t,A.c7,480,!1)
B.iz(r,!0,C.ft(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kt(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kO(r,!0,A.d7,new B.qp(u),t,A.cS,1,v,w)}C.bwe(r,40,40,400,774,d)
C.bx3(r,40,40,400,774,d,e)
C.rb(r,d)
C.kg(r,40,40,400,774,4291058750,2)
C.kg(r,48,48,384,758,s,0.8)
return r},
kE:function kE(d,e){this.a=d
this.b=e},
fkw:function fkw(d){this.a=d},
fkv:function fkv(d){this.a=d},
f_8:function f_8(d){this.a=d},
fl9(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hyZ(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fFi(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.o_(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aD(0,Af.aev(A.a.an(d,s,r+1)),t)
v=x.f.b(w)?B.Z(w,x.N,x.z):t
return v}catch(u){return t}},
ad3(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ad3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uD(null,""),$async$ad3)
case 3:n=g
if(A.a.i(n).length===0)throw B.R("AI is not available right now. Please try again later.")
t=B.mH(n)
if(e==null)s=A.h8
else{r=C.hyZ(e)
s=B.a([new B.Z_(A.cO.gcs().aF(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qh(t,d,s,E.Dw),$async$ad3)
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
byD(d){return C.hLy(d)},
hLy(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Q.al(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ad3(r,null),$async$byD)
case 7:q=f
p=C.fFi(q)
if(p==null){u=d
w=1
break}o=d.ayX(p)
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
return B.i($async$byD,v)},
h_D(d){var w,v=F.fHB(d)
v=B.aJ(v,"book","newspaper")
if(F.a03(d)!=="sw"){w=B.ae("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fp5(d,e,f,g){return C.hNp(d,e,f,g)},
hNp(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fp5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fl9(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h31()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ad3('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h_D(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fp5)
case 3:r=m.fFi(i)
if(r==null)throw B.R(y.S)
q=new C.yv(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").ayX(r)
t=q.r
if(t.length===0)throw B.R("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a03(s)!=="sw"){p=B.ae("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a03(A.d.aG(t," "))==="sw"?C.byD(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fp5,v)},
by9(d,e,f,g,h){return C.hJb(d,e,f,g,h)},
hJb(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$by9=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.h31()
k=A.Q.al(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ad3('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h_D(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$by9)
case 3:p=j.fFi(a0)
if(p==null)throw B.R(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.ct(o)){n=d.ayX(B.Z(o,x.N,x.z))
m=A.Q.al(n.ac(),null)!==A.Q.al(d.ac(),null)}else{n=d
m=!1}w=m&&F.a03(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byD(n),$async$by9)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5O(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by9,v)},
a5O:function a5O(d,e,f){this.a=d
this.b=e
this.c=f},
hQ0(d,e){return B.a8(d,!1).cr(B.eH(new C.fvx(e),!0,null,x.H))},
fvx:function fvx(d){this.a=d},
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
e5F:function e5F(d){this.a=d},
e5E:function e5E(){},
e5G:function e5G(d){this.a=d},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5H:function e5H(){},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5o:function e5o(d){this.a=d},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5q:function e5q(d){this.a=d},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5l:function e5l(d,e){this.a=d
this.b=e},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5f:function e5f(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5w:function e5w(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5z:function e5z(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
fk6(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fk6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fYg){w=1
break}r=new C.fk7()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fk6)
case 7:$.fYg=!0
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
return B.i($async$fk6,v)},
byu(d){return A.Fn[B.mx(d)-1]+", "+A.pf[B.bB(d)-1]+" "+B.bQ(d)+", "+B.bw(d)},
hBQ(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cZk[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fI_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fl(d[w],B.ae("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a4(v,new C.fip(),B.U(v).k("a4<1>")))
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
continue}o=new C.fir(j,h)
n=new C.fiq(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aj(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iL(o.$1(l)))
j.a+=l}return u},
fF2(d,e){var w=new C.eZK()
return A.d.cI(e,0,new C.eZI(w))>=A.d.cI(d,0,new C.eZJ(w))},
fVw(d){var w,v,u=new B.aR($.a_().r,A.aq,null,null,B.a([],x.v))
u.E(new B.b7(46,0))
w=d.a
u.E(new B.ao(w,0))
v=d.b
u.E(new B.ao(w,v-46))
u.E(new B.ao(w-46,v))
u.E(new B.ao(0,v))
u.E(new B.ao(0,46))
u.E(new B.bE())
return u},
yv:function yv(d,e,f,g,h,i,j,k,l,m){var _=this
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
c7x:function c7x(d){this.a=d},
c7v:function c7v(){},
c7w:function c7w(){},
rD:function rD(d,e){this.a=d
this.b=e},
Aj:function Aj(d,e){this.a=d
this.b=e},
l_:function l_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fk7:function fk7(){},
fip:function fip(){},
fir:function fir(d,e){this.a=d
this.b=e},
fiq:function fiq(d,e,f){this.a=d
this.b=e
this.c=f},
eZK:function eZK(){},
eZL:function eZL(){},
eZI:function eZI(d){this.a=d},
eZJ:function eZJ(d){this.a=d},
aYr:function aYr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c7y:function c7y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7z:function c7z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7A:function c7A(d){this.a=d},
b8Q:function b8Q(d){this.a=d},
b8P:function b8P(d,e){this.b=d
this.a=e},
bq7:function bq7(d){this.a=d},
b5o:function b5o(d,e){this.b=d
this.a=e},
bnE:function bnE(d,e){this.b=d
this.a=e},
h4X(d,e){return B.a8(d,!1).cr(B.eH(new C.fvA(e,null),!0,null,x.E))},
fvA:function fvA(d,e){this.a=d
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
e6Q:function e6Q(){},
e6R:function e6R(d){this.a=d},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6K:function e6K(d){this.a=d},
e6L:function e6L(d,e){this.a=d
this.b=e},
e6I:function e6I(d){this.a=d},
e6J:function e6J(d,e,f){this.a=d
this.b=e
this.c=f},
e6F:function e6F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6M:function e6M(d,e){this.a=d
this.b=e},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6N:function e6N(d){this.a=d},
e6G:function e6G(d,e){this.a=d
this.b=e},
e6O:function e6O(d,e){this.a=d
this.b=e},
b8m:function b8m(d,e,f){this.b=d
this.c=e
this.a=f},
hQ6(d){return B.a8(d,!1).cr(B.eH(new C.fvQ(),!0,null,x.I))},
bw_(d,e){var w,v,u,t,s,r,q=B.bY(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fGp(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fvQ:function fvQ(){},
YT:function YT(d){this.a=d},
o6:function o6(d,e,f,g,h,i,j){var _=this
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
_.aC=_.aK=_.aA=_.au=_.Y=_.b3=_.be=_.y2=0
_.b_=null
_.aX=0.25
_.b7=null
_.bF=0.5
_.aO=1
_.c4=_.bP=_.bf=0
_.cT=_.cQ=!1
_.c=_.a=null},
eDx:function eDx(d){this.a=d},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCT:function eCT(d,e,f){this.a=d
this.b=e
this.c=f},
eCS:function eCS(d,e){this.a=d
this.b=e},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
eCW:function eCW(d,e,f){this.a=d
this.b=e
this.c=f},
eCV:function eCV(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC0:function eC0(d){this.a=d},
eBY:function eBY(){},
eC1:function eC1(d,e){this.a=d
this.b=e},
eBX:function eBX(d,e){this.a=d
this.b=e},
eC3:function eC3(){},
eC2:function eC2(d,e){this.a=d
this.b=e},
eBW:function eBW(d,e){this.a=d
this.b=e},
eBT:function eBT(d,e){this.a=d
this.b=e},
eC4:function eC4(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eC5:function eC5(d){this.a=d},
eBU:function eBU(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d,e){this.a=d
this.b=e},
eDv:function eDv(){},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDj:function eDj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDs:function eDs(d){this.a=d},
eDi:function eDi(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eDa:function eDa(d){this.a=d},
eD3:function eD3(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDe:function eDe(d){this.a=d},
eD2:function eD2(d){this.a=d},
eDf:function eDf(d){this.a=d},
eD1:function eD1(d){this.a=d},
eDg:function eDg(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eDh:function eDh(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCg:function eCg(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCm:function eCm(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCo:function eCo(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCe:function eCe(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBK:function eBK(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCt:function eCt(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCw:function eCw(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eCP:function eCP(d,e,f){this.a=d
this.b=e
this.c=f},
eCO:function eCO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCf:function eCf(d){this.a=d},
eDw:function eDw(d){this.a=d},
bbT:function bbT(d,e){this.b=d
this.a=e},
hLJ(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hLK(d,e){var w,v,u,t,s,r,q,p,o,n=B.ae("\\S+",!0,!1,!1,!1).kv(0,d),m=B.z(n,B.a2(n).k("G.E"))
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
t=w.a+=A.a.an(d,v,n)
p=m[r].b
p=A.a.an(d,n,p.index+p[0].length)
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
v=t.index+t[0].length}n=w.a=n+A.a.aW(d,v)
return n.charCodeAt(0)==0?n:n},
bwA(){var w=$.bvI,v=$.OE
$.OE=v+1
return w+"_"+v},
i0(d,e,f,g,h,i,j){return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,C.bwA(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cd,D.eT,g,e,f)},
nx(d,e,f,g){var w=f*9
return C.i0(D.ey,d-f/2,e-w/32,f,w/16,g,0)},
hvQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvI
p=$.OE
$.OE=p+1
w.push(new C.ey(q+"_"+p,D.eT,0,r,1,0.0016,"",24,A.a4,A.bg,A.az,k,A.be,null,D.bb,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvI
p=$.OE
$.OE=p+1
w.push(new C.ey(q+"_"+p,D.eT,o,0,0.004,1,"",24,A.a4,A.bg,A.az,k,A.be,null,D.bb,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nx(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nx(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i0(D.bb,0.08,0.08,0.5,0.003,v,0),C.i0(D.bb,0.58,0.08,0.004,0.06,v,0),C.i0(D.bb,0.58,0.14,0.34,0.003,v,0),C.i0(D.bb,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i0(D.bb,0.08,0.8,0.004,0.14,t,0),C.i0(D.bb,0.08,0.94,0.6,0.003,t,0),C.nx(0.58,0.08,0.05,e),C.nx(0.92,0.22,0.05,e),C.nx(0.08,0.8,0.05,f),C.nx(0.68,0.94,0.05,f),C.nx(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i0(D.kI,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i0(D.kI,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i0(D.kI,0.7,0.8,0.22,0.12,w|1140850688,0),C.i0(D.kI,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nx(0.5,0.5,1.5,w|335544320),C.nx(0.5,0.5,1.15,w|402653184),C.nx(0.5,0.5,0.8,v|436207616),C.nx(0.95,0.05,0.4,v|855638016),C.nx(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nx(0.85,0.08,0.7,w|1140850688),C.nx(0.1,0.35,0.5,v|855638016),C.nx(0.9,0.62,0.55,v|771751936),C.nx(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i0(D.bb,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i0(D.bb,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i0(D.bb,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i0(D.bb,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nx(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nx(0.5,0.2,0.65,(w|3422552064)>>>0),C.nx(0.5,0.2,0.95,w|855638016),C.i0(D.bb,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i0(D.bb,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i0(D.jn,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i0(D.jn,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i0(D.jn,0.15,0.86,0.6,0.14,1712265002,0),C.nx(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cDr[n]
u=A.o.H(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvI
l=$.OE
$.OE=l+1
w.push(new C.ey(m+"_"+l,D.eT,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bg,A.az,k,A.be,null,D.ey,q,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nx(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i0(D.jn,0.35,-0.1,0.3,0.62,w|855638016,0),C.i0(D.jn,0.05,-0.1,0.3,0.55,v,-0.5),C.i0(D.jn,0.65,-0.1,0.3,0.55,v,0.5),C.nx(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i0(D.bb,0.06,0.04,0.88,0.002,e,0),C.i0(D.bb,0.06,0.96,0.88,0.002,e,0),C.i0(D.bb,0.06,0.04,0.004,0.92,e,0),C.i0(D.bb,0.936,0.04,0.004,0.92,e,0),C.i0(D.bb,0.09,0.07,0.82,0.001,w,0),C.i0(D.bb,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i0(D.jo,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i0(D.jo,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i0(D.jo,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i0(D.bb,0,0,0.3,0.09,w|1140850688,0),C.i0(D.bb,0.7,0.9,0.3,0.1,v|1426063360,0),C.i0(D.bb,0.82,0.04,0.12,0.07,w|771751936,0),C.i0(D.bb,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i0(D.ey,0.62,0.02,0.5,0.16,v,0.6),C.i0(D.ey,0.78,0.12,0.4,0.12,u,0.9),C.i0(D.ey,-0.12,0.8,0.5,0.16,u,-0.6),C.i0(D.ey,-0.05,0.9,0.4,0.12,v,-0.9),C.nx(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i0(D.bb,0.09,0.12,0.16,0.006,e,0),C.i0(D.bb,0.05,0.03,0.9,0.001,w,0),C.i0(D.bb,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hIf(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvI=j
$.OE=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.ffN()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ei(A.be,!1,n,A.az,"ngmy_quote_background",m,24,A.bg,A.a4,"",1,C.bwA(),g,"","",0,!1,"",0,D.bb,l,2,"",0,0,"",D.cd,D.l3,1,0,0))
if(a9)A.d.v(q,C.hvQ(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ae("[*~^]",!0,!1,!1,!1)
p=C.hLJ(B.aJ(w,p,""))
o=A.a.t(w,B.ae("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.ffM(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cx,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.ei(A.be,!1,n,A.az,"ngmy_quote_logo",m,24,A.bg,A.a4,a1,a3*9/16,C.bwA(),a0,"","",0,!1,a2,0,D.bb,l,2,"",0,0,"",D.cd,D.l3,a3,a4,a5))
return C.qS(s,r,0,0,q,j+"_slide",D.pm,"","","",D.db)},
qR:function qR(d,e){this.a=d
this.b=e},
lL:function lL(d,e,f,g,h,i,j,k,l,m){var _=this
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
ffN:function ffN(){},
ffM:function ffM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hm4(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bh(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c8U(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bQ()
w=w.h(d,"request")
return new C.yx(u,t,s,B.t(w==null?"":w))},
fns(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fns=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fYD){w=1
break}$.fYD=!0
t=4
w=7
return B.b(B.ax(),$async$fns)
case 7:r=e
q=B.aS(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aD(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jj(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hm4(m)
if(l!=null)J.cg(n,l)}$.Bu.ce(0,B.t(o.a),new C.fnt(n))}C.fG5()
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
return B.i($async$fns,v)},
fG5(){var w,v=new B.Q(Date.now(),0,!1).bN(-12e8)
for(w=new B.dv($.Bu,$.Bu.r,$.Bu.e);w.C();)J.n1(w.d,new C.f5m(v))
$.Bu.bm($.Bu,new C.f5n())},
aL1(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aL1=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aL1)
case 6:s=a0
m=x.N
l=x.z
r=B.S(m,l)
for(k=new B.cP($.Bu,B.a2($.Bu).k("cP<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.cg(p,B.E(["at",g.a.a4().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.ap("String","ngmy_slides_ai_history_v1",A.Q.al(n,null)),$async$aL1)
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
hMk(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fG5()
w=$.Bu.ce(0,d,new C.fnv())
v=Date.now()
u=B.z(e,B.a2(e).k("ck.E"))
J.p0(w,0,new C.yx(new B.Q(v,0,!1),f,u,g))
C.aL1()},
hMh(d){var w,v=$.Bu.h(0,d)
if(v==null||J.ci(v))return
w=J.cA(v)
w.cu(v,0)
if(w.gah(v))$.Bu.W(0,d)
C.aL1()},
yx:function yx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8U:function c8U(){},
fnt:function fnt(d){this.a=d},
f5m:function f5m(d){this.a=d},
f5n:function f5n(){},
fnv:function fnv(){},
hMm(d){return A.d.dI(D.uV,new C.fny(d),new C.fnz())},
hm2(d){var w
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
hm1(d){var w
switch(d.a){case 0:w=D.agd
break
case 1:w=A.x8
break
case 2:w=A.ahk
break
case 3:w=I.afU
break
case 4:w=A.agI
break
case 5:w=A.lv
break
default:w=null}return w},
hyC(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nt[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nt[w]
if(!B.dm(v.toLowerCase(),t,0))u=B.dm(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hm3(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Q.al(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hMi(d,e,f,g,h){var w=new B.J(D.uV,new C.fnr(),x.eC).aG(0,", "),v=""+d,u=C.h2U(h),t=F.fhb(h),s=C.h_e(g),r=e.t(0,D.Gg)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Gh)?'- New slides get an "icon3d" from: '+A.d.aG(D.Nt,", ")+".\n":"",p=e.t(0,D.Bc)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hMj(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.uV,new C.fnu(),x.eC).aG(0,", "),p=new B.f4("")
if(e.t(0,D.Gg)){p.a=s
w=s}else w=""
if(e.t(0,D.Gh))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Nt,", ")+".\n")
if(e.t(0,D.Bc))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h2U(d)
v=F.fhb(d)
u=C.h_e(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BS(a3,"{"),a5=J.fyB(a3,"}")
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
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.flr(),m).bZ(0,new C.fls())
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
f=C.hyC(B.t(f==null?"":f))
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
p=A.d.bg(D.uV,new C.flt(r))?r:a7
o=C.f4B(J.q(w,"logo_frame"),D.AB)
n=C.f4B(J.q(w,"logo_ring"),D.Aw)
m=C.f4B(J.q(w,"photo_frame"),D.AB)
l=C.f4B(J.q(w,"photo_ring"),D.Aw)
return new C.aoy(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_A(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h21(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Bd),f7=f6?C.hsF():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f0()
v.dX(f7.w+1)
u=f7.a
t=B.bj(u.b,!0,x.dL)
A.d.fw(t,v)
s=u.c
s=new C.nj("luxe",u.a,A.lv,t,u.e,u.f,B.a([s,u.d,s],x.t),D.db)
w=s}if(w==null)w=C.hMm(f9.b)
r=g2.t(0,D.a1s)||f6
q=g2.t(0,D.Gg)
p=g2.t(0,D.Pj)
o=new C.ffR()
n=B.a([],x.g)
m=new C.ffU(o,w,r)
l=new C.ffT(o,r)
k=new C.ffS(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.bg(u,new C.ffQ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.H(b1,a3.length)]
b4=A.o.H(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.H(b1,5)
b9=D.cER[b8]
c0=D.cDT[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eoe.t(0,b2.a)){c7=b0+1
c5=g8[A.o.H(b0,g8.length)]
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
c1.push(l.$8$fx$key(D.bb,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Pg
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ey,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kI,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bb,0.08,0.6,0.14,0.014,b5,f4,f3))
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
c1.push(l.$8$fx$key(D.bb,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ti:D.cd
c1.push(new C.ey(b4,D.a1q,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bg,A.az,4279310375,A.be,e4,D.bb,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.ma
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ey,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mb,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pn,450,f2,f0))
c1.push(l.$8$fx$key(D.bb,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Pg
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ey,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ey,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bb,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bb,d7,0.25,0.12,0.012,b5,f4,f3))
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
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.db,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hug(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.H(b1,b8.length)]}else b8=r?D.d0l[A.o.H(b1,6)]:s
n.push(new C.lp(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Aw(e4,e4,e4,e4,D.B9,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.an(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fif(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fif=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Bc)
n=e.t(0,D.Gh)
if(!o&&!n){u=D.a0p
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fii(o,s[r],n,$.hxq,r).$0())
s=B.S(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fif)
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
return B.i($async$fif,v)},
fhe(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fhe=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hMj(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKo(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fhe)
case 3:u=s.aKJ(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fhe,v)},
bya(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bya=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.hMk(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeL(i,"colorful")
t=C.hMi(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKo(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h8),$async$bya)
case 3:u=o.aKJ(m,f,h,g,D.dE4,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bya,v)},
aKo(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKo=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uD(null,""),$async$aKo)
case 3:n=i
if(A.a.i(n).length===0)throw B.R("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mH(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qh(t,d,g,null),$async$aKo)
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
return B.b(C.fif(d,t),$async$aKJ)
case 6:s=k
w=4
break
case 5:s=D.a0p
case 4:t=d.c
w=A.d.bg(t,new C.eZF())?7:9
break
case 7:r=$.h3M
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aKJ)
case 10:q=k
p=q!=null?A.Q.al(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h21(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hm3(new C.aoy(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.z(new B.J(m,new C.eZG(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jC<ck.E,n>")
t=B.z(new B.jC(e,new C.eZH(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.Pj)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKJ,v)},
fII(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_l[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
hQb(d){return B.c1(A.K,null,new C.fw1(),d,!0,!0,!0,null,!1,!1,x.I)},
htg(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cO.gcs().aF(d)},
hQa(d,e,f){return B.c1(A.K,null,new C.fw0(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fIJ(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fIK(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f4B(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bg(e,new C.f4C(w))?w:""},
h_e(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h3K(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeL(a1==null?"":a1,a0),a3=C.aeL(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a4<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qD(new B.a4(r,new C.fnA(t[p]),q))
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
g=B.z(new B.a4(k,new C.fnB(),v),r)
A.d.aY(g,new C.fnC())
if(g.length===0)continue
f=new C.fnD(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hMD(d){var w=d.toLowerCase(),v=B.ae("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAG
v=B.ae("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dG_
v=B.ae("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dG0
return null},
fZQ(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bH(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hMn(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nA
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cM)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fZQ(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fZQ(n,i,v,u))if(n.w>10){f=h+1
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
hMl(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeL(o,"colorful")
if(n==null)throw B.R("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_l[r]
if(q.b===s)w.J(0,q)}}v=C.fIJ(e)
u=C.fIK(e)
p=C.h21(n,D.a0p,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.z(new B.J(o,new C.fnw(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jC<ck.E,n>")
o=B.z(new B.jC(w,new C.fnx(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.Pj)
return p},
hPY(d,e,f){return B.c1(A.K,null,new C.fve(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hsF(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f0()
s.dX(t)
w=D.cjF[s.aB(10)]
v=new C.e1L(s)
u=x.N
return new C.e1K(w,s.aB(4),J.fh(v.$1$2(D.cIW,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.cXu,2+s.aB(2),u),v.$1$2(D.cRq,2,u),v.$1$2(D.d_1,4,x.fP),t)},
hug(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f0()
a1.dX(a5.w+a3*13)
w=new C.eWe(a4)
v=new C.eWg(a4,d)
u=new C.eWf(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cM){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.H(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.ey,0.1+a1.ae()*0.45,0.05+a1.ae()*0.3,0.45,0.75,C.a_A(a0,52),"lux_spot",a5.vG(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bb,0,0,1,1,0,"lux_back",a5.vG(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bb,0,0,1,1,0,"lux_back2",a5.aBh(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.022,0.038,0.956,0.924,0,g,a5.vG(0,f),D.db,150,C.a_A(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.018,0.032,0.964,0.936,0,g,a5.vG(0,f),D.db,120,C.a_A(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.db,260,C.a_A(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bb,0,0,1,1,0,"lux_filigree",a5.vG(0,"filigree"),D.db,200))
break
default:a2.push(w.$10$anim$delay(D.bb,0.08,0.06,0.84,0.004,C.a_A(a0,208),"lux_rule",a5.aBh(0,"shimmer",r),D.th,150))
a2.push(w.$10$anim$delay(D.bb,0.08,0.936,0.84,0.004,C.a_A(a0,144),"lux_rule2","",D.Ge,220))}l=!A.d.bg(a2,new C.eWd())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vG(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vG(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_A(r,242)
j=a5.vG(0,"orbit")
i=s===D.bb?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pn,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ey,t-0.007,0.9495,0.014,0.025,C.a_A(r,242),"lux_g2",a5.vG(0,"orbit"),D.pn,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bb,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fF(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.bb,0,0,1,1,0,"lux_velvet",a5.vG(0,"velvet")))},
nj:function nj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fny:function fny(d){this.a=d},
fnz:function fnz(){},
vc:function vc(d,e){this.a=d
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
fnr:function fnr(){},
fnu:function fnu(){},
flr:function flr(){},
fls:function fls(){},
flt:function flt(d){this.a=d},
ffR:function ffR(){},
ffU:function ffU(d,e,f){this.a=d
this.b=e
this.c=f},
ffT:function ffT(d,e){this.a=d
this.b=e},
ffS:function ffS(d,e){this.a=d
this.b=e},
ffQ:function ffQ(d){this.a=d},
fii:function fii(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fig:function fig(d){this.a=d},
fih:function fih(d){this.a=d},
eZF:function eZF(){},
eZG:function eZG(){},
eZH:function eZH(){},
fw1:function fw1(){},
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
eJr:function eJr(d,e,f){this.a=d
this.b=e
this.c=f},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJp:function eJp(d,e){this.a=d
this.b=e},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJo:function eJo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eJj:function eJj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eJn:function eJn(d,e){this.a=d
this.b=e},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJm:function eJm(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eJa:function eJa(d){this.a=d},
eJb:function eJb(d){this.a=d},
eJc:function eJc(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJF:function eJF(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJD:function eJD(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJK:function eJK(d){this.a=d},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJL:function eJL(d){this.a=d},
eJA:function eJA(d){this.a=d},
eJM:function eJM(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJN:function eJN(d){this.a=d},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJO:function eJO(d){this.a=d},
eJx:function eJx(d){this.a=d},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJQ:function eJQ(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJf:function eJf(d,e,f){this.a=d
this.b=e
this.c=f},
eJg:function eJg(d,e,f){this.a=d
this.b=e
this.c=f},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJt:function eJt(d,e){this.a=d
this.b=e},
fw0:function fw0(d,e){this.a=d
this.b=e},
Zn:function Zn(d,e,f){this.c=d
this.d=e
this.a=f},
aEr:function aEr(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eJ0:function eJ0(d){this.a=d},
eJ1:function eJ1(d){this.a=d},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eJ6:function eJ6(d,e){this.a=d
this.b=e},
f4C:function f4C(d){this.a=d},
aYP:function aYP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB4:function aB4(d,e,f){this.c=d
this.d=e
this.a=f},
bgt:function bgt(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
e1N:function e1N(d){this.a=d},
e1M:function e1M(){},
be5:function be5(d,e){this.b=d
this.a=e},
fnA:function fnA(d){this.a=d},
fnB:function fnB(){},
fnC:function fnC(){},
fnD:function fnD(d){this.a=d},
ap7:function ap7(d,e){this.a=d
this.b=e},
fnw:function fnw(){},
fnx:function fnx(){},
fve:function fve(d,e){this.a=d
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
boJ:function boJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e1K:function e1K(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e1L:function e1L(d){this.a=d},
eWe:function eWe(d){this.a=d},
eWg:function eWg(d,e){this.a=d
this.b=e},
eWf:function eWf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWd:function eWd(){},
aIY:function aIY(){},
fHy(d){var w,v,u
try{w=A.Q.aD(0,d,null)
if(x.f.b(w)){v=B.v4(B.Z(w,x.N,x.z))
return v}}catch(u){}return null},
aYL:function aYL(d,e,f){this.c=d
this.d=e
this.a=f},
bi5:function bi5(d,e){this.c=d
this.a=e},
hII(d){return A.d.dI(D.Fk,new C.fgY(d),new C.fgZ())},
hIJ(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aW(t,6)
if(w.length===0)return null
v=new B.a4(D.Fk,new C.fh_(w),x.b4)
if(!v.gag(0).C())return null
u=v.gK(0)
return new C.js("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kX:function kX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fgY:function fgY(d){this.a=d},
fgZ:function fgZ(){},
fh_:function fh_(d){this.a=d},
mu(d,e,f,g,h){return new C.Do(f,g,d)},
hvp(d){var w=d.z,v=B.U(w).k("a4<1>")
w=B.z(new B.a4(w,new C.eYc(),v),v.k("G.E"))
d.z=w
d.x=""},
dr(d,e){var w=$.IQ
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
ds(d,e,f,g,h,i,j,k,l){return C.ei(A.be,!1,4279310375,A.az,"",d,24,A.bg,A.a4,"",e,"design_"+C.cy(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cd,D.eT,j,k,l)},
h1P(d,e){var w
C.hvp(d)
w=A.d.dI($.bA7(),new C.feO(e),new C.feP())
$.IQ=w.a
d.x=w.a;++d.y
try{w.bC(d)}finally{$.IQ=""}d.z=B.bj(d.z,!0,x.F)},
Do:function Do(d,e,f){this.a=d
this.b=e
this.e=f},
eYc:function eYc(){},
fn2:function fn2(){},
fn3:function fn3(){},
fn4:function fn4(){},
fnf:function fnf(){},
fnk:function fnk(){},
fnl:function fnl(){},
fnm:function fnm(){},
fnn:function fnn(){},
fno:function fno(){},
fnp:function fnp(){},
fnq:function fnq(){},
fn5:function fn5(){},
fn6:function fn6(){},
fn7:function fn7(){},
fn8:function fn8(){},
fn9:function fn9(){},
fna:function fna(){},
fnb:function fnb(){},
fnc:function fnc(){},
fnd:function fnd(){},
fne:function fne(){},
fng:function fng(){},
fnh:function fnh(){},
fni:function fni(){},
fnj:function fnj(){},
feO:function feO(d){this.a=d},
feP:function feP(){},
iK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ei(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bb,4280172719,2,m,n,0,"",o,D.cM,p,q,r)},
BK(d,e,f,g,h,i,j,k,l){return C.ei(A.be,!1,4279310375,A.az,"",d,24,A.bg,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cd,D.eT,j,k,l)},
byS(){var w=new B.Q(Date.now(),0,!1)
return A.i2[B.bB(w)-1]+" "+B.bQ(w)+", "+B.bw(w)},
ek:function ek(d,e,f){this.a=d
this.b=e
this.c=f},
bwk(d){return new B.iF((A.o.aw(d,24)&255)/255,(A.o.aw(d,16)&255)/255,(A.o.aw(d,8)&255)/255,(d&255)/255)},
hAc(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.ako(A.cw.aF(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hAg(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f4p(),x.dv).aG(0,"\n")},
hAf(d){switch(d.a){case 2:return A.mS
case 1:case 5:return A.eyv
default:return A.QE}},
hA9(d){switch(d.a){case 2:return A.tQ
case 1:case 5:return A.Sl
default:return A.a63}},
hAd(d,e){var w,v=null,u=d.ay,t=A.o.aw(u,24),s=A.o.aw(d.ch,24),r=(t&255)===0?v:C.bwk(u),q=(s&255)===0?v:C.bwk(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n3(q,p,A.kl)
w=new B.p1(t,t,t,t)}switch(d.ax.a){case 1:return B.le(v,v,v,new B.kl(r,w,v,A.a7h,v),v,v,v,v)
case 4:return u?new B.fH(v,v,v):B.wc(B.le(v,v,q,v,p+0.4,v,v,v))
default:return B.le(v,v,v,new B.kl(r,w,B.uK(4),A.ho,v),v,v,v,v)}},
hAb(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eT?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hA9(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hAg(d)
t=C.bwk(d.Q)
s=d.x.a>=700?A.eb:A.up
r=d.y===A.cx?A.wL:A.aeN
q=d.z
p=new B.BV(w,l,l,B.f_(u,l,l,l,B.fX(l,t,1===q.a?A.aJ6:A.aJ5,l,l,l,l,l,l,A.dl,l,l,v,r,s,l,!0,l,l,l,l),C.hAf(d.as)))
break
case 1:case 4:o=C.hAc(d.at)
n=i===D.l3&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wc(B.f_(w,l,l,l,B.fX(l,A.qI,l,l,l,l,l,l,l,A.dl,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gk(o,n?A.a7d:A.SH,l,l)
break
case 3:w=new B.n3(A.Gw,1,A.kl)
u=B.uK(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.le(A.tQ,B.f_(t,l,l,l,B.fX(l,D.dPV,l,l,l,l,l,l,l,A.dl,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mS),l,new B.kl(E.aBI,new B.p1(w,w,w,w),u,A.ho,l),l,l,l,l)
break
case 2:p=C.hAd(d,e)
break
case 5:p=C.hAa(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fUJ(-w,p)
w=i===D.cM
if(w){m=A.o.aw(d.Q,24)&255
if(m<255)p=new B.apR(m/255,p)}if(w)return new F.vk(k,l,j,l,new B.Qq(new B.kk(g,g,f,1/0),p))
if(i===D.kH){i=new B.n3(A.Gw,1,A.kl)
i=B.le(A.tQ,p,l,new B.kl(A.oo,new B.p1(i,i,i,i),B.uK(4),A.ho,l),l,l,D.bk9,l)}else i=p
return new F.vk(k,l,j,l,new B.fH(g,f,i))},
hAe(d,e,f,g){var w,v=null,u=C.bwk(d.e),t=d.f
t=B.a([F.fTn(t!=null?B.le(v,v,v,new B.kl(v,v,v,A.ho,new B.aTj(E.Sm,A.a5Y,B.a([u,C.bwk(t)],x.cR),v)),v,v,v,v):B.le(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f4o(f,g),B.U(w).k("J<1,f5>")))
return F.clo(t)},
fIM(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fIM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2a(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.UC(A.v6,A.Gt,D.ble,null,null,null,!1,null)
o=new B.AC(o,new C.fnJ(607,787,p,d))
o.L4(n,null)
r.push(o)}u=n.jA(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIM,v)},
hAa(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fHy(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagR()
if(h==null)h=A.arS
j=B.rP(4279308564)
w=B.uK(18)
v=new B.n3(B.rP(4287531653),3,A.kl)
u=i.length===0?"My links":i
u=B.a([B.wc(B.f_(u,m,m,m,B.fX(m,A.oo,m,m,m,m,m,m,m,A.dl,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wc(B.f_(A.a.i(l.c),m,m,m,D.eFk,m)))
u.push(new B.fH(m,8,m))
for(t=B.de(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bU(t,t.gI(0),s.k("bU<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rP(4280690220)
o=new B.a79(8,8)
n=A.a.i(r.b)
u.push(new B.nk(D.bes,new C.au0(new C.afM(q),B.le(m,B.f_(n.length===0?A.a.i(r.c):n,m,m,m,D.eHt,A.mS),m,new B.kl(p,m,new B.agd(o,o,o,o),A.ho,m),m,m,D.bky,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wc(B.f_(k,m,m,m,D.eGN,m))
u.push(new C.au0(C.hal(k),t))}return B.le(m,B.xT(u,A.Ju,A.l2),m,new B.kl(j,new B.p1(v,v,v,v),w,A.ho,m),m,m,D.bfh,m)},
f4p:function f4p(){},
f4o:function f4o(d,e){this.a=d
this.b=e},
fnJ:function fnJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aey(d){var w,v
for(w=0;w<32;++w){v=D.Fb[w]
if(v.a===d)return v}return null},
fXj(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aF(A.a.aW(d,u+1))
return w}catch(v){return null}},
cO(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h4T(d,e){return B.a8(d,!1).cr(B.eH(new C.ftS(e),!0,null,x.fB))},
h4S(d,e){return B.c1(A.K,null,new C.ftR(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iN:function iN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Df:function Df(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LM:function LM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfQ:function bfQ(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
dLw:function dLw(d){this.a=d},
dLv:function dLv(d,e,f){this.a=d
this.b=e
this.c=f},
dLu:function dLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnj:function bnj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIe:function eIe(d,e){this.a=d
this.b=e},
baZ:function baZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWG:function aWG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3t:function c3t(){},
c3u:function c3u(d){this.a=d},
c3v:function c3v(d,e,f){this.a=d
this.b=e
this.c=f},
c3w:function c3w(d,e,f){this.a=d
this.b=e
this.c=f},
ftS:function ftS(d){this.a=d},
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
ftR:function ftR(d){this.a=d},
ftQ:function ftQ(d){this.a=d},
ftP:function ftP(d,e,f){this.a=d
this.b=e
this.c=f},
ftO:function ftO(d,e){this.a=d
this.b=e},
aIr:function aIr(){},
hQ9(d){return B.c1(A.K,null,new C.fw_(),d,!0,!0,!0,null,!1,!1,x.N)},
fw_:function fw_(){},
XE:function XE(d){this.a=d},
bcs:function bcs(d){this.d=d
this.c=this.a=null},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d,e){this.a=d
this.b=e},
d7c:function d7c(d){this.a=d},
hwN(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.aY(w)}return D.we},
hKC(d){var w,v=A.d.gK(d.split("@"))
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
hKB(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hwN(d)
switch(q){case"shimmer":return B.np(A.a6p,g,new C.fkp(p,A.k.H(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bbQ(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e5(A.A,B.d7(C.fzT(g,B.a32(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bbx(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d7(B.et(A.A,e*0.5,B.e5(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dh()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.mf(Math.sin(e)*0.3)
return B.dP(B.fn(A.A,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.W,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.bkg(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.W,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.b6v(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.W,r,A.aY,A.q,B.a([B.e1(B.b1(r,r,r,new C.b68(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.br3(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bo6(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.bnf(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.W,r,A.aY,A.q,B.a([g,B.e1(B.b1(r,r,r,new C.baS(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.h,B.a([B.bZ(0,B.e1(B.e5(A.A,B.bT(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.ba),1.6+s*0.15,r,r),!0,r),0,0,0),B.et(A.A,s*0.06,B.e5(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fkp:function fkp(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbx:function bbx(d,e,f){this.b=d
this.c=e
this.a=f},
bkg:function bkg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6v:function b6v(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b68:function b68(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
br3:function br3(d,e,f){this.b=d
this.c=e
this.a=f},
bo6:function bo6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnf:function bnf(d,e,f){this.b=d
this.c=e
this.a=f},
baS:function baS(d,e,f){this.b=d
this.d=e
this.a=f},
d0m:function d0m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wL:function wL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fks(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kH},
hKH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fkt())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gK(B.aNd(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hKG(d,e){var w,v,u,t,s,r=d.db
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
for(;;)switch(w){case 0:f=B.U(a4).k("a4<1>")
e=B.z(new B.a4(a4,new C.fcQ(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(A.dy,null,new C.fcR(e),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$aeb)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fJm(d),$async$aeb)
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
break}p=C.fIj(s)
if(p==null)p=A.d.gK(D.Ob)
f=C.cy()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cy()
m=p.e
l=C.fku(p.d)
k=x.u
j=B.a([C.ei(A.be,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a4,"",1,C.cy(),l,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.l3,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Bx(i,0.016,D.kI,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bx(0,0.058,D.ey,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bx(0,0.058,D.ey,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.J0("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.J0("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fFp(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvO("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_b("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_b("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_b("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_b("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvO("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bx(m,0.082,D.bb,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cy()
k.push(C.ei(A.be,!1,i,A.az,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bg,A.cq,"",0.074,g,null,"","",0,!1,"",0,D.bb,4280172719,2,y.O,0,0,"",D.cd,D.cM,0.78,0.11,0.388))
A.d.v(k,C.fFp(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvO("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fZf("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fZf("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_b("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_b("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvN("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvN("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvO("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.J0("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.J0("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvN("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvN("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvO("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_b("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvN("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_b("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fFp(0.22,0.83,0.56,4291404327,i),h)
h.push(C.J0("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.J0("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Aw(null,null,null,null,D.nA,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qS(m,null,0,0,j,n,D.pm,"","","Hati ya Ndoa",D.db)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeb,v)},
fkt:function fkt(){},
fcQ:function fcQ(){},
fcR:function fcR(d){this.a=d},
fcO:function fcO(d){this.a=d},
fcP:function fcP(d){this.a=d},
hzH(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hzG(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mf
case"lineThrough":return A.yj
default:return A.az}},
ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ey(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h0g(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NY[w]
if(v.b===u)return v}return D.db},
hwc(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cAZ[w]
if(v.b===u)return v}return D.cM},
hCn(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cY2[w]
if(v.b===u)return v}return D.bb},
qS(d,e,f,g,h,i,j,k,l,m,n){return new C.lp(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fS7(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hy4(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h0g(d.h(0,"transition"))
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
n=B.cz(n,new C.c8R(),n.$ti.k("G.E"),x.F)
n=B.z(n,B.a2(n).k("G.E"))}return C.qS(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hy4(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajW[w]
if(v.b===u)return v}return D.ma},
Aw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.Q(Date.now(),0,!1):a4
return new C.hT(p,t,a1,h,i,w,a0==null?B.a([C.qS(4294967295,null,0,0,null,C.cy(),D.pm,"","","",D.db)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
U2(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.huv(a6.h(0,"aspectRatio"))
t=B.aQ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.Q(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.ki(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ki(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b4(f,new C.c8E(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c8F(),x.N)
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
g=B.cz(g,new C.c8G(),g.$ti.k("G.E"),x.bt)
g=B.z(g,B.a2(g).k("G.E"))}return C.Aw(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qS(4294967295,a3,0,0,a3,C.cy(),D.pm,"","","",D.db)],x.g):g,v,p,o,s)},
ki(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
huv(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cYN[w]
if(v.b===u)return v}return D.B9},
cy(){var w=Date.now(),v=$.iP
$.iP=v+1
return""+1000*w+"_"+v},
c97(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Ba){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,40,A.bg,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bb,m,2,o,0,0,"",D.cd,D.cM,0.84,0.08,0.3)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,20,A.bg,A.cq,"",0.12,u,p,"","",0,!1,"",0,D.bb,m,2,"Click to add subtitle",0,0,"",D.cd,D.cM,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,32,A.bg,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bb,m,2,o,0,0,"",D.cd,D.cM,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!0,f.e.l(),A.az,"",n,20,A.bg,A.cq,"",0.68,u,p,"","",0,!1,"",0,D.bb,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cd,D.cM,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bb,m,2,"Two Column Slide",0,0,"",D.cd,D.cM,0.88,0.06,0.06)
u=C.cy()
t=f.e
u=C.ei(A.be,!0,t.l(),A.az,"",n,18,A.bg,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.bb,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cd,D.cM,0.42,0.06,0.22)
s=C.cy()
A.d.v(w,B.a([v,u,C.ei(A.be,!0,t.l(),A.az,"",n,18,A.bg,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.bb,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cd,D.cM,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.ei(A.L,!1,4294967295,A.az,"",n,42,A.bg,A.u,"",0.2,C.cy(),p,"","",0,!1,"",0,D.bb,m,2,"Section Header",0,0,"",D.cd,D.cM,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bb,m,2,"Compare",0,0,"",D.cd,D.cM,0.88,0.06,0.06)
u=C.cy()
t=f.c
u=C.ei(A.be,!1,l,A.az,"",t.j(0.12).l(),24,A.bg,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.bb,t.l(),2,"",0,0,"",D.cd,D.eT,0.42,0.06,0.22)
s=C.cy()
r=f.e
s=C.ei(A.be,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bb,m,2,"Option A",0,0,"",D.cd,D.cM,0.38,0.08,0.26)
q=C.cy()
t=C.ei(A.be,!1,l,A.az,"",t.j(0.06).l(),24,A.bg,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.bb,t.j(0.5).l(),2,"",0,0,"",D.cd,D.eT,0.42,0.52,0.22)
q=C.cy()
A.d.v(w,B.a([v,u,s,t,C.ei(A.be,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bb,m,2,"Option B",0,0,"",D.cd,D.cM,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,36,A.bg,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bb,m,2,"TERM / QUESTION",0,0,"",D.cd,D.cM,0.8,0.1,0.12)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,22,A.bg,A.cq,"",0.35,u,p,"","",0,!1,"",0,D.bb,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cd,D.cM,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,28,A.bg,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bb,m,2,"Quiz Question",0,0,"",D.cd,D.cM,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!1,f.e.l(),A.az,"",n,20,A.bg,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.bb,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cd,D.cM,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cy()
v=C.ei(A.be,!1,f.d.l(),A.az,"",n,26,A.bg,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bb,m,2,"Worksheet / Assignment",0,0,"",D.cd,D.cM,0.88,0.06,0.04)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.be,!1,f.e.l(),A.az,"",n,18,A.bg,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.bb,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cd,D.cM,0.88,0.06,0.16)],x.u))
break}},
hmd(d){return A.d.dI(D.a_1,new C.c98(d),new C.c99())},
hma(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cg(v,C.U2(B.Z(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fBY(d,e){var w,v,u,t=B.S(x.N,x.I),s=new C.c93(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bg<2>")
u=B.z(new B.bg(t,w),w.k("G.E"))
A.d.aY(u,new C.c92())
return u},
fSa(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c8Z()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aoz(d){return C.hm8(d)},
hm8(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c91()
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
case 11:o=l.$1($.fS9.h(0,m))
n=C.fBY(C.fBY(j,r),o)
if(n.length===0){u=C.fSa(C.fSa(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoz,v)},
c8Y(d){return C.hm7(d)},
hm7(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c8Y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$c8Y)
case 7:r=f
q=r.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.ko(q,B.U(q).c)
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
return B.i($async$c8Y,v)},
aYR(d,e){return C.hm9(d,e)},
hm9(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYR=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aYR)
case 6:s=g
q=s.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.a9(r)>500?J.JK(r,J.a9(r)-500):r
w=7
return B.b(s.ap("StringList","ngmy_slides_deleted_"+p,o),$async$aYR)
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
U3(d,e){return C.hmb(d,e)},
hmb(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$U3=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.a9(a0)===0){w=1
break}p=$.fS8.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aoz(a3),$async$U3)
case 5:p=a6
case 4:w=6
return B.b(C.c8Y(a3),$async$U3)
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
l=m.k("a4<G.E>")
e=B.z(new B.a4(new B.bg(n,m),new C.c94(o),l),l.k("G.E"))
A.d.aY(e,new C.c95())
$.fS8.m(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.z(new B.J(e,new C.c96(),n),n.k("ai.E"))
r=A.Q.al(n,null)
$.fS9.m(0,a0,r)
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
return B.b(q.ap("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$U3)
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
Hb:function Hb(d,e){this.a=d
this.b=e},
aox:function aox(d,e){this.a=d
this.b=e},
u3:function u3(d,e){this.a=d
this.b=e},
m7:function m7(d,e){this.a=d
this.b=e},
hn:function hn(d,e){this.a=d
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
lp:function lp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c8S:function c8S(){},
c8T:function c8T(){},
c8R:function c8R(){},
hT:function hT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c8H:function c8H(){},
c8I:function c8I(){},
c8E:function c8E(){},
c8F:function c8F(){},
c8G:function c8G(){},
js:function js(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c98:function c98(d){this.a=d},
c99:function c99(){},
c93:function c93(d){this.a=d},
c92:function c92(){},
c8Z:function c8Z(){},
c9_:function c9_(){},
c90:function c90(){},
c91:function c91(){},
c94:function c94(d){this.a=d},
c95:function c95(){},
c96:function c96(){},
hKS(d,e){var w=x.N,v=B.S(w,x.F)
w=new C.fl1(e,v,d,B.aZ(w))
w.$1(new C.fkY())
w.$1(new C.fkZ())
w.$1(new C.fl_())
w.$1(new C.fl0())
return v},
fl1:function fl1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkY:function fkY(){},
fkZ:function fkZ(){},
fl_:function fl_(){},
fl0:function fl0(){},
aYO:function aYO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8N:function c8N(d){this.a=d},
c8M:function c8M(){},
c8O:function c8O(){},
c8P:function c8P(d,e){this.a=d
this.b=e},
c8Q:function c8Q(d){this.a=d},
alN:function alN(d,e){this.c=d
this.a=e},
bfD:function bfD(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dyM:function dyM(){},
aId:function aId(){},
c8V(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c8V=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.G(x.q).f.P(D.evT)
u=!1
w=1
break}u=B.kG(!1,d,t,!1,null,A.a1u,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8V,v)},
hm5(d){var w=A.d.bi(D.Fk,new C.c8W(d))
if(w<0)return!0
return w>=4},
hm6(d){var w=A.d.bi($.bA7(),new C.c8X(d))
if(w<0)return!0
return w>=5},
c8W:function c8W(d){this.a=d},
c8X:function c8X(d){this.a=d},
hMx(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xK()
$.pJ().p8(t,new C.fnQ(s),!0)
u=B.a([B.CC(v,A.pq,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eFN,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.np,v,v,v),v,v,4,v,4,v))}return new B.am(A.W,v,A.aY,A.q,u,v)},
fnQ:function fnQ(d){this.a=d},
hM8(){return C.fIF()},
hJ6(){return C.by7()},
hL8(){return C.fIw()},
aMj(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fmW(d,f),$async$aMj)
case 5:w=1
break
case 4:if(d.e!=null)d.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMj,v)},
fmW(d,e){var w=0,v=B.j(x.H),u
var $async$fmW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwl
if(u==null)u=e+".pdf"
w=2
return B.b(B.c1(A.K,null,new C.fmX(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fmW)
case 2:return B.h(null,v)}})
return B.i($async$fmW,v)},
fmX:function fmX(d,e){this.a=d
this.b=e},
ab7:function ab7(d,e,f){this.c=d
this.d=e
this.a=f},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebS:function ebS(d){this.a=d},
abp:function abp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYN(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYM(g,m,f,d,e,h,l,k,j,o,i,null)},
h38(d){return B.cj(new C.fkX(d))},
fIH(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hMg(d){if(d===D.cd)return"None"
return C.fIH(d)},
bwR(d,e,f,g){return C.hCu(d,e,f,g)},
hCu(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a8(d,!0)
if($.fFI&&t.oP())t.eD()
$.fFI=!0
s.a=null
w=3
return B.b(B.hN(A.bh,!0,"Animation preview",d,new C.f6I(s,e,g,f),null,A.eG,!0,x.H),$async$bwR)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fFI=!1
case 1:return B.h(u,v)}})
return B.i($async$bwR,v)},
fwO(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fwO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bP,x.w).w.a.a*0.88,280,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fIH(f)+" Slide transition preview"
s=s?Ab.DB:A.uc
w=3
return B.b(C.bwR(d,s,new B.a3(t,t*0.56,B.bu(B.m(14),new C.aFQ(f,null),A.ap),null),r),$async$fwO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fwO,v)},
h2r(d,e,f){var w,v,u=null,t=A.co.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d7(f,t)
case 2:case 17:return B.dP(B.d7(f,t),new B.v((1-t)*48,0))
case 3:return B.dP(B.d7(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d7(f,t),new B.v(0,(1-t)*36))
case 5:return B.dP(B.d7(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e5(A.A,B.d7(f,t),0.5+t*0.5,u,u)
case 7:return B.e5(A.A,B.d7(f,t),1.4-t*0.4,u,u)
case 8:w=B.dh()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fn(A.A,B.d7(f,t),u,w,!0)
case 9:w=B.dh()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jx((1-t)*1.2)
return B.fn(A.A,B.d7(f,t),u,w,!0)
case 10:case 19:w=B.dh()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.mf((1-t)*0.8)
v=0.6+t*0.4
w.jg(v,v,v,1)
return B.fn(A.A,B.d7(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d7(f,t),new B.v((1-t)*24,0))}},
bzE(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bzE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bP,x.w).w.a.a*0.88,300,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fIH(f)+" Element animation preview"
s=s?Ab.DB:A.uc
w=3
return B.b(C.bwR(d,s,new B.a3(t,t*0.62,B.bu(B.m(14),new C.awJ(f,null),A.ap),null),r),$async$bzE)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bzE,v)},
hMf(d){var w,v,u,t,s=$.adH.W(0,d)
if(s!=null){$.adH.m(0,d,s)
return s}w=A.cw.aF(A.a.aW(d,A.a.cP(d,",")+1))
$.adH.m(0,d,w)
v=$.fGu=$.fGu+w.length
u=B.a2($.adH).k("cu<1>")
for(;;){if(!(v>41943040&&$.adH.a>1))break
t=new B.cu($.adH,u).gag(0)
if(!t.C())B.b9(B.fy())
v-=$.adH.W(0,t.gT(0)).length
$.fGu=v}return w},
hLX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ae("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kv(0,d),j=B.z(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.an(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QU(s,A.u))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QU(t,A.u))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QU(u,A.cq))
v.push(new B.es(n,l,l,A.cU,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aW(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0m(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
m.E(new B.ky(e))
return m
case"rounded":m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
w=e.ge8()*0.18
m.E(new B.iV(B.bN(e,new B.b3(w,w))))
return m
case"triangle":m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
m.E(new B.b7(e.gbO().a,e.b))
w=e.d
m.E(new B.ao(e.c,w))
m.E(new B.ao(e.a,w))
m.E(new B.bE())
return m
case"hexagon":w=$.a_()
m=B.a([],m)
v=new B.aR(w.r,A.aq,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b7(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ao(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
m.E(new B.b7(e.gbO().a,e.b))
m.E(new B.ao(e.c,e.gbO().b))
m.E(new B.ao(e.gbO().a,e.d))
m.E(new B.ao(e.a,e.gbO().b))
m.E(new B.bE())
return m
case"arch":m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b7(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ao(w,p))
m.b56(new B.v(t,p),new B.b3(s,s))
m.E(new B.ao(t,u))
m.E(new B.bE())
return m
default:m=new B.aR($.a_().r,A.aq,n,n,B.a([],m))
m.E(new B.nG(e))
return m}},
fix(d,e,f){return B.cj(new C.fiy(D.eoD.t(0,d),d,f,e))},
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
c8L:function c8L(d){this.a=d},
c8K:function c8K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8J:function c8J(){},
aYJ:function aYJ(d,e){this.b=d
this.a=e},
fkX:function fkX(d){this.a=d},
fkW:function fkW(d,e){this.a=d
this.b=e},
f6I:function f6I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6G:function f6G(d){this.a=d},
f6H:function f6H(d,e){this.a=d
this.b=e},
aFQ:function aFQ(d,e){this.c=d
this.a=e},
bqA:function bqA(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eQy:function eQy(d,e,f){this.a=d
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
bfN:function bfN(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dJJ:function dJJ(d){this.a=d},
dJI:function dJI(d){this.a=d},
dJH:function dJH(d){this.a=d},
Ha:function Ha(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8D:function c8D(d){this.a=d},
c8C:function c8C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awJ:function awJ(d,e){this.c=d
this.a=e},
bam:function bam(){this.d=0
this.c=this.a=null},
cYV:function cYV(d){this.a=d},
cYU:function cYU(d){this.a=d},
a5E:function a5E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgr:function bgr(d,e){var _=this
_.d=null
_.bq$=d
_.a5$=e
_.c=_.a=null},
e1t:function e1t(d,e,f){this.a=d
this.b=e
this.c=f},
aWJ:function aWJ(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbv:function bbv(d,e,f){this.b=d
this.c=e
this.a=f},
bmf:function bmf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eFZ:function eFZ(){},
fiy:function fiy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnc:function bnc(d,e,f){this.b=d
this.c=e
this.a=f},
aIq:function aIq(){},
aIW:function aIW(){},
aKf:function aKf(){},
flX(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$flX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wl.c2().Ku(D.cWg,A.rL,!0),$async$flX)
case 3:r=e
if(r==null||J.ci(r.a)){u=null
w=1
break}t=J.fh(r.a)
s=t.c
if(s==null)throw B.R("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.R("That file is too big. Use a file under 8 MB.")
u=C.hLR(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flX,v)},
hLR(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a5X(d,new B.Z_(A.cO.gcs().aF(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hE0(e)
if(A.a.i(w).length===0)throw B.R("No readable words were found in that Word file.")
return new C.a5X(d,null,w.length>6e4?A.a.an(w,0,6e4):w)}w=A.c0.Jj(0,e,!0)
if(A.a.i(w).length===0)throw B.R("That file is empty.")
return new C.a5X(d,null,w.length>6e4?A.a.an(w,0,6e4):w)},
hE0(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cqV().cAY(B.qC(d,A.hH,o,o),o,o,!1).cCD(0,"word/document.xml")
if(n==null)return""
w=n.cKk()
v=A.c0.Jj(0,w==null?$.h5k():w,!0).split("</w:p>")
u=new B.f4("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ae("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kv(0,r)
p=A.a.i(B.cz(q,new C.f9v(),B.a2(q).k("G.E"),t).fM(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5X:function a5X(d,e,f){this.a=d
this.b=e
this.c=f},
f9v:function f9v(){},
hmc(d,e,f,g,h,i,j,k,l){return new C.Mc(l,e,d,g,f,i,h,j,k,null)},
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
ei2:function ei2(d){this.a=d},
ei0:function ei0(){},
ei1:function ei1(d){this.a=d},
eeq:function eeq(){},
eer:function eer(){},
ees:function ees(d,e){this.a=d
this.b=e},
eg0:function eg0(d){this.a=d},
efP:function efP(){},
efQ:function efQ(){},
edO:function edO(){},
eh8:function eh8(d){this.a=d},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
efZ:function efZ(d,e){this.a=d
this.b=e},
ehM:function ehM(d){this.a=d},
ehN:function ehN(){},
ehO:function ehO(){},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(){},
edc:function edc(d){this.a=d},
ei_:function ei_(){},
ef7:function ef7(d,e){this.a=d
this.b=e},
eda:function eda(d){this.a=d},
edb:function edb(d){this.a=d},
efu:function efu(d){this.a=d},
efv:function efv(d,e,f){this.a=d
this.b=e
this.c=f},
efw:function efw(d){this.a=d},
ef6:function ef6(){},
ef5:function ef5(d){this.a=d},
ef3:function ef3(){},
ef2:function ef2(d){this.a=d},
ef4:function ef4(){},
eem:function eem(d){this.a=d},
een:function een(d){this.a=d},
efd:function efd(d){this.a=d},
ef8:function ef8(d){this.a=d},
ef9:function ef9(d){this.a=d},
efa:function efa(d){this.a=d},
efb:function efb(d){this.a=d},
efc:function efc(d){this.a=d},
efe:function efe(d,e){this.a=d
this.b=e},
ede:function ede(){},
edf:function edf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efp:function efp(){},
efq:function efq(d,e){this.a=d
this.b=e},
efn:function efn(d,e,f){this.a=d
this.b=e
this.c=f},
efo:function efo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efh:function efh(d,e,f){this.a=d
this.b=e
this.c=f},
efi:function efi(d,e,f){this.a=d
this.b=e
this.c=f},
efj:function efj(d){this.a=d},
efk:function efk(d,e){this.a=d
this.b=e},
efl:function efl(d,e){this.a=d
this.b=e},
efm:function efm(d,e){this.a=d
this.b=e},
efg:function efg(d,e){this.a=d
this.b=e},
efs:function efs(d){this.a=d},
eft:function eft(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efr:function efr(d){this.a=d},
efK:function efK(){},
efL:function efL(){},
efM:function efM(){},
efN:function efN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efH:function efH(d){this.a=d},
efJ:function efJ(){},
efI:function efI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
efG:function efG(d,e){this.a=d
this.b=e},
efO:function efO(){},
eff:function eff(d,e){this.a=d
this.b=e},
edv:function edv(){},
edw:function edw(d,e,f){this.a=d
this.b=e
this.c=f},
edx:function edx(d){this.a=d},
edy:function edy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edu:function edu(d){this.a=d},
efU:function efU(d){this.a=d},
efT:function efT(d,e){this.a=d
this.b=e},
efS:function efS(d,e){this.a=d
this.b=e},
efR:function efR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efV:function efV(d,e){this.a=d
this.b=e},
ec9:function ec9(d,e){this.a=d
this.b=e},
edt:function edt(d,e){this.a=d
this.b=e},
edr:function edr(d){this.a=d},
eg2:function eg2(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
eg1:function eg1(d,e,f){this.a=d
this.b=e
this.c=f},
edd:function edd(d){this.a=d},
edP:function edP(){},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehL:function ehL(d,e,f){this.a=d
this.b=e
this.c=f},
eh9:function eh9(d,e,f){this.a=d
this.b=e
this.c=f},
eca:function eca(d){this.a=d},
ec7:function ec7(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebW:function ebW(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
edq:function edq(d,e){this.a=d
this.b=e},
edo:function edo(d){this.a=d},
ecC:function ecC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecI:function ecI(d){this.a=d},
ecF:function ecF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ecG:function ecG(d){this.a=d},
ecE:function ecE(){},
ecB:function ecB(d,e,f){this.a=d
this.b=e
this.c=f},
efE:function efE(d,e){this.a=d
this.b=e},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehV:function ehV(d){this.a=d},
ehW:function ehW(d,e,f){this.a=d
this.b=e
this.c=f},
ehS:function ehS(d){this.a=d},
ehp:function ehp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eho:function eho(d,e,f){this.a=d
this.b=e
this.c=f},
ehn:function ehn(){},
ehm:function ehm(d,e,f){this.a=d
this.b=e
this.c=f},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehi:function ehi(d,e,f){this.a=d
this.b=e
this.c=f},
ehg:function ehg(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehk:function ehk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehj:function ehj(d){this.a=d},
eei:function eei(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eha:function eha(){},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehH:function ehH(d){this.a=d},
ehI:function ehI(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d){this.a=d},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e,f){this.a=d
this.b=e
this.c=f},
ec8:function ec8(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e,f){this.a=d
this.b=e
this.c=f},
ebZ:function ebZ(d){this.a=d},
eg_:function eg_(d,e,f){this.a=d
this.b=e
this.c=f},
ehR:function ehR(d,e,f){this.a=d
this.b=e
this.c=f},
eel:function eel(d,e,f){this.a=d
this.b=e
this.c=f},
eek:function eek(){},
ecL:function ecL(d,e,f){this.a=d
this.b=e
this.c=f},
ecM:function ecM(d){this.a=d},
ebX:function ebX(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
ece:function ece(d){this.a=d},
ecf:function ecf(d,e){this.a=d
this.b=e},
ecg:function ecg(d,e){this.a=d
this.b=e},
ecd:function ecd(d){this.a=d},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecz:function ecz(){},
ecA:function ecA(){},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(d){this.a=d},
ecl:function ecl(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
eco:function eco(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecs:function ecs(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
edM:function edM(d,e,f){this.a=d
this.b=e
this.c=f},
edL:function edL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edK:function edK(d,e,f){this.a=d
this.b=e
this.c=f},
edJ:function edJ(d,e){this.a=d
this.b=e},
ec6:function ec6(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecS:function ecS(d,e){this.a=d
this.b=e},
eds:function eds(d){this.a=d},
efD:function efD(d,e){this.a=d
this.b=e},
efC:function efC(d,e){this.a=d
this.b=e},
efB:function efB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efz:function efz(d){this.a=d},
efA:function efA(d,e){this.a=d
this.b=e},
efx:function efx(){},
efy:function efy(){},
ehb:function ehb(){},
ehc:function ehc(d,e){this.a=d
this.b=e},
ehd:function ehd(){},
ehe:function ehe(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
ecb:function ecb(d,e){this.a=d
this.b=e},
edg:function edg(){},
edh:function edh(){},
edi:function edi(){},
edl:function edl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edk:function edk(d,e){this.a=d
this.b=e},
edj:function edj(d,e,f){this.a=d
this.b=e
this.c=f},
eeM:function eeM(d){this.a=d},
eeL:function eeL(){},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeK:function eeK(d){this.a=d},
eeP:function eeP(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d){this.a=d},
eeQ:function eeQ(d,e){this.a=d
this.b=e},
eeI:function eeI(d){this.a=d},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeH:function eeH(d){this.a=d},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeG:function eeG(d,e){this.a=d
this.b=e},
eeT:function eeT(d,e){this.a=d
this.b=e},
eeF:function eeF(d){this.a=d},
eeU:function eeU(d,e){this.a=d
this.b=e},
eeE:function eeE(d){this.a=d},
eex:function eex(d,e){this.a=d
this.b=e},
eey:function eey(d){this.a=d},
eez:function eez(d){this.a=d},
eew:function eew(d){this.a=d},
eeA:function eeA(d,e){this.a=d
this.b=e},
eev:function eev(d){this.a=d},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeu:function eeu(d){this.a=d},
eeC:function eeC(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
eeD:function eeD(d){this.a=d},
edF:function edF(d){this.a=d},
edG:function edG(d){this.a=d},
edI:function edI(d){this.a=d},
edA:function edA(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
edB:function edB(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
edD:function edD(d){this.a=d},
edE:function edE(d,e){this.a=d
this.b=e},
edH:function edH(d){this.a=d},
ehX:function ehX(d){this.a=d},
ehY:function ehY(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeW:function eeW(d,e){this.a=d
this.b=e},
eeV:function eeV(d,e){this.a=d
this.b=e},
eeY:function eeY(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egm:function egm(d){this.a=d},
egn:function egn(d){this.a=d},
egy:function egy(d){this.a=d},
egJ:function egJ(d){this.a=d},
egU:function egU(d){this.a=d},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh4:function eh4(d,e){this.a=d
this.b=e},
ego:function ego(d){this.a=d},
egp:function egp(d){this.a=d},
egq:function egq(d){this.a=d},
egr:function egr(d){this.a=d},
egs:function egs(d){this.a=d},
egt:function egt(d){this.a=d},
egu:function egu(d){this.a=d},
egv:function egv(d){this.a=d},
egw:function egw(d){this.a=d},
egx:function egx(d){this.a=d},
egz:function egz(d){this.a=d},
egA:function egA(d){this.a=d},
egB:function egB(d){this.a=d},
egC:function egC(d){this.a=d},
egD:function egD(d){this.a=d},
egE:function egE(d){this.a=d},
egF:function egF(d){this.a=d},
egG:function egG(d){this.a=d},
egH:function egH(d){this.a=d},
egb:function egb(d){this.a=d},
egI:function egI(d){this.a=d},
egj:function egj(d){this.a=d},
egK:function egK(d){this.a=d},
egi:function egi(d,e){this.a=d
this.b=e},
egL:function egL(d,e){this.a=d
this.b=e},
egM:function egM(d,e){this.a=d
this.b=e},
egh:function egh(d,e,f){this.a=d
this.b=e
this.c=f},
eg7:function eg7(d,e){this.a=d
this.b=e},
egk:function egk(d){this.a=d},
eh5:function eh5(d,e){this.a=d
this.b=e},
eh7:function eh7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eh6:function eh6(d,e){this.a=d
this.b=e},
egN:function egN(d,e,f){this.a=d
this.b=e
this.c=f},
egg:function egg(d,e,f){this.a=d
this.b=e
this.c=f},
eg6:function eg6(d,e,f){this.a=d
this.b=e
this.c=f},
eg4:function eg4(d,e){this.a=d
this.b=e},
egO:function egO(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
eg5:function eg5(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
egP:function egP(d){this.a=d},
ege:function ege(d){this.a=d},
egQ:function egQ(d){this.a=d},
egR:function egR(d){this.a=d},
egS:function egS(d){this.a=d},
egT:function egT(d){this.a=d},
egd:function egd(d){this.a=d},
egV:function egV(d){this.a=d},
egW:function egW(d){this.a=d},
egX:function egX(d,e){this.a=d
this.b=e},
egc:function egc(d){this.a=d},
egY:function egY(d,e){this.a=d
this.b=e},
ega:function ega(d){this.a=d},
egZ:function egZ(d,e){this.a=d
this.b=e},
eg9:function eg9(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
eg8:function eg8(d){this.a=d},
ecK:function ecK(d,e,f){this.a=d
this.b=e
this.c=f},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ehs:function ehs(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
eht:function eht(d,e){this.a=d
this.b=e},
ehq:function ehq(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edR:function edR(d){this.a=d},
edT:function edT(d,e){this.a=d
this.b=e},
edQ:function edQ(d){this.a=d},
eep:function eep(){},
eeo:function eeo(){},
ehF:function ehF(d){this.a=d},
ehE:function ehE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehy:function ehy(d,e){this.a=d
this.b=e},
ehC:function ehC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehz:function ehz(d,e){this.a=d
this.b=e},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d){this.a=d},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehG:function ehG(d){this.a=d},
ed9:function ed9(d){this.a=d},
ed8:function ed8(d,e,f){this.a=d
this.b=e
this.c=f},
ed7:function ed7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecX:function ecX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ed_:function ed_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecW:function ecW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed0:function ed0(d,e){this.a=d
this.b=e},
ed2:function ed2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecV:function ecV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed4:function ed4(d,e){this.a=d
this.b=e},
ecU:function ecU(d,e){this.a=d
this.b=e},
ed5:function ed5(d,e){this.a=d
this.b=e},
ecT:function ecT(d){this.a=d},
ed6:function ed6(d,e){this.a=d
this.b=e},
ef0:function ef0(d){this.a=d},
ef_:function ef_(d){this.a=d},
ef1:function ef1(d,e){this.a=d
this.b=e},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee6:function ee6(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee2:function ee2(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
eea:function eea(d,e){this.a=d
this.b=e},
ee0:function ee0(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e,f){this.a=d
this.b=e
this.c=f},
ee_:function ee_(d,e){this.a=d
this.b=e},
eec:function eec(d,e,f){this.a=d
this.b=e
this.c=f},
edZ:function edZ(d,e){this.a=d
this.b=e},
eed:function eed(d,e){this.a=d
this.b=e},
edY:function edY(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d,e){this.a=d
this.b=e},
eee:function eee(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
eef:function eef(d,e){this.a=d
this.b=e},
edW:function edW(d,e,f){this.a=d
this.b=e
this.c=f},
edU:function edU(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eej:function eej(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebT:function ebT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efY:function efY(d,e){this.a=d
this.b=e},
efW:function efW(d){this.a=d},
efX:function efX(d,e){this.a=d
this.b=e},
acS:function acS(d,e,f){this.a=d
this.b=e
this.c=f},
aw6:function aw6(d,e){this.c=d
this.a=e},
b99:function b99(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aZ$=e
_.c=_.a=null},
cVq:function cVq(d){this.a=d},
cVp:function cVp(d){this.a=d},
b9n:function b9n(d,e){this.c=d
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
b98:function b98(){this.d=!1
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
eiD:function eiD(){},
eit:function eit(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiu:function eiu(d){this.a=d},
eiv:function eiv(d){this.a=d},
eip:function eip(d){this.a=d},
eiq:function eiq(d,e){this.a=d
this.b=e},
eir:function eir(d){this.a=d},
eis:function eis(d,e,f){this.a=d
this.b=e
this.c=f},
eiA:function eiA(){},
eiB:function eiB(d){this.a=d},
eiw:function eiw(d){this.a=d},
eix:function eix(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiE:function eiE(d,e,f){this.a=d
this.b=e
this.c=f},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiF:function eiF(d){this.a=d},
Ii:function Ii(d,e){this.c=d
this.a=e},
bnH:function bnH(d,e){this.b=d
this.a=e},
be_:function be_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdZ:function bdZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH8:function aH8(){},
aJ9:function aJ9(){},
btm:function btm(){},
aJa:function aJa(){},
fnR(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fnR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wl.c2().Ku(B.a(["pdf"],x.s),A.rL,!0),$async$fnR)
case 3:q=e
if(q==null||J.ci(q.a)){u=null
w=1
break}t=J.fh(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bl1(s,"data:application/pdf;base64,"+A.cO.gcs().aF(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnR,v)},
hMr(d){var w,v,u,t,s,r
try{w=B.je(d,0,null)
v=B.ae("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ae("/Type\\s*/Page\\b",!0,!1,!1,!1).kv(0,w).gI(0)
if(t>0){s=J.aNF(t,1,200)
return s}}catch(r){}return 1},
fnI(d){return C.hMq(d)},
hMq(d){var w=0,v=B.j(x.T),u
var $async$fnI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnI,v)},
byR(d,e,f,g){return C.hMA(d,e,f,g)},
hMA(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$byR=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e3(b6,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h3J(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lz(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lz(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lz(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lz(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a_()
g=new B.rt()
f=B.FE(g,null)
a7=B.N()
a7.r=A.pZ.gq(0)
f.bd(new B.ac(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gq(b8)
b1.c=p*e
b1.d=A.bV
b1.e=A.fq
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
return B.b(a3.yn(800,h),$async$byR)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hf(A.fM),$async$byR)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f2(A.dA.gaL(a5))
a7=A.cO.gcs().aF(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a5(b5)
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
return B.i($async$byR,v)},
aMT(d,e,f){return C.hMo(d,e,f)},
hMo(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.afc(d,e,f,new C.fnG(r,q),q,"Sign document"),$async$aMT)
case 3:if(!new B.e3(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.byR(q,t,r.b,r.c),$async$aMT)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYQ(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMT,v)},
hMy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fY3(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fY3(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aW(A.a.aT(A.o.fF(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aW(A.a.aT(A.o.fF(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l3&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fXI(q.ay)+";border:2px solid "+C.fXI(q.ch)+'"></div>'
break
case 5:l=C.fHy(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gagR()
if(p==null)p=A.arS
n=B.U(p)
k=n.k("pu<1>")
j=new B.pu(p,0,8,k)
j.FV(p,0,8,n.c)
j=new B.bU(j,j.gI(0),k.k("bU<ai.E>"))
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
fXI(d){var w=A.o.aw(d,24)
return"rgba("+(A.o.aw(d,16)&255)+","+(A.o.aw(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
fY3(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
byP(d,e){var w=0,v=B.j(x.H)
var $async$byP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fnP(e,C.hMy(e),d),d,null,!0,!0,x.H),$async$byP)
case 2:return B.h(null,v)}})
return B.i($async$byP,v)},
byQ(){var w=0,v=B.j(x.T),u,t,s
var $async$byQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fc(92,2400),$async$byQ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fnI(s),$async$byQ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byQ,v)},
aMU(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fIM(d),$async$aMU)
case 3:t=f
s=A.a.i(d.b)
r=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=X.fq1(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMU,v)},
fS6(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYQ:function aYQ(d,e,f){this.a=d
this.b=e
this.c=f},
fnG:function fnG(d,e){this.a=d
this.b=e},
fnP:function fnP(d,e,f){this.a=d
this.b=e
this.c=f},
fnM:function fnM(d){this.a=d},
fnN:function fnN(d,e,f){this.a=d
this.b=e
this.c=f},
fnO:function fnO(d,e,f){this.a=d
this.b=e
this.c=f},
hMp(d){return C.ki(d.w)},
hMw(d){var w,v,u,t
if(d.length===0||!A.d.e9(d,C.hOe()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xI(d){var w=A.a.i(d),v=B.ae("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.h9k()
if(w.b.test(u))return u
return null},
h3L(d,e,f){var w,v,u=C.hhT(d),t=$.oY()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hMC(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aV(d.a),v=new B.hK(w,d.b);v.C();){u=w.gT(w).y
t=C.xI(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fnE(d,e){var w,v=d.y,u=C.xI(v==null?"":v)
if(u!=null)return d.y=u
w=C.hMC(new B.a4(e,new C.fnF(d),B.U(e).k("a4<1>")))
v=d.x
return d.y=C.h3L(v==null?"":v,null,w)},
hMB(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.ki(w.w))return null
v=w.y
return C.xI(v==null?"":v)},
hme(){var w,v=$.oY(),u=J.e_(10,x.N)
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
p=B.a5(m)
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
U7(d){return C.hmf(d)},
hmf(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$U7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$U7)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hs("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,A.cz,null),$async$U7)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a5(p)
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
r=C.xI(a2==null?"":a2)
if(r==null)r=a3!=null?C.h3L(a3,null,A.a33):null
q=x.N
p=B.aZ(q)
for(o=J.df(s),n=J.aV(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xI(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdH(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Z(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dC.aF(t)
g.m(0,"payload",A.cO.gcs().aF(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.Qh.t(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xI(J.k(q==null?"":q))
if(f==null)f=C.fSb(p)
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
case 6:e=C.hme()
n=r==null
d=n?C.fSb(p):r
q=B.S(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dC.aF(t)
q.m(0,"payload",A.cO.gcs().aF(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.Qh.t(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
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
fSb(d){var w,v,u=$.oY()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
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
s.bm(t,new C.c9a(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.U7(t),$async$aoB)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aoB,v)},
aoA(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xI(d)
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
case 6:t=o.jj(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xI(J.k(q==null?"":q))===p){u=C.a5Y(r.a)
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
if(D.Qh.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aD(0,s,null)
if(m.b(r)){q=B.Z(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.al(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dS(B.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.Q(Date.now(),0,!1).a4().ab())
o.m(p,g,l)}w=7
return B.b(C.U7(p),$async$a5Y)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5Y,v)},
hMv(d,e,f){var w,v=B.S(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.z(new B.J(d,new C.fnL(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
fnT(d,e,f,g){var w
if(e!=null){w=B.S(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ac())
return A.Q.al(w,null)}return A.Q.al(C.hMv(d==null?B.a([],x.D):d,f,g),null)},
fnS(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fnS=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5Z(h,d,e,f,g),$async$fnS)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xI(e==null?"":e)
u=new B.aCH(s,t)
w=1
break}t=A.dC.aF(h)
t=A.jV.gcs().aF(t)
u=new B.aCH(C.xI(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnS,v)},
fIO(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
hMz(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fIO(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aW(v,u))
if(C.fIO(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aW(v,s))
if(C.fIO(t))return t}}return null},
fnH(d){var w,v,u,t=A.a.i(d)
if(J.a9(t)===0||J.cU(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cU(t,"NGMY_SL:"))w=v.a(A.Q.aD(0,A.c0.c6(0,A.cw.aF(J.mh(t,8))),null))
else w=v.a(A.Q.aD(0,t,null))
v=C.hvN(w)
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
if(s!=null&&A.a.i(s).length!==0){u=C.fnH(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xI(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoA(r),$async$aeY)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fnH(s)
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
if(s!=null&&A.a.i(s).length!==0){u=C.fnH(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fnH(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
hvN(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Qh.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fIL(C.U2(B.Z(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d4(u,x.f)
t=B.cz(t,new C.eYC(w),t.$ti.k("G.E"),x.I)
t=B.z(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fIL(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.m(0,"id",C.cy())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iP
$.iP=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.U2(B.Z(o,x.N,x.z))
if(e&&C.ki(p.w))p.Q=new B.Q(Date.now(),0,!1).a4().bN(144e8).ab()
return p},
byA(){var w=0,v=B.j(x.aT),u,t,s
var $async$byA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Fb(),$async$byA)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeY(s),$async$byA)
case 4:t=e
u=J.ci(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byA,v)},
fw2(d){var w=0,v=B.j(x.T),u,t
var $async$fw2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.TG,!0,"Dismiss",d,new C.fw3(),new C.fw4(),A.Dy,!0,x.N),$async$fw2)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.G(x.q).f.P(D.eu5)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fw2,v)},
hQc(d,e,f,g,h){return B.a8(d,!1).cr(B.eH(new C.fw5(h,e,g,f),!0,null,x.H))},
fnF:function fnF(d){this.a=d},
c9a:function c9a(d){this.a=d},
fnL:function fnL(){},
eYC:function eYC(d){this.a=d},
fw3:function fw3(){},
fw4:function fw4(){},
fw5:function fw5(d,e,f,g){var _=this
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
ei9:function ei9(){},
ei5:function ei5(d,e){this.a=d
this.b=e},
ei8:function ei8(d,e){this.a=d
this.b=e},
ei6:function ei6(d){this.a=d},
ei7:function ei7(d){this.a=d},
eia:function eia(d){this.a=d},
eib:function eib(d){this.a=d},
eie:function eie(d){this.a=d},
eif:function eif(d){this.a=d},
eid:function eid(d){this.a=d},
eig:function eig(d){this.a=d},
eic:function eic(d){this.a=d},
eih:function eih(d,e){this.a=d
this.b=e},
ei4:function ei4(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e){this.a=d
this.b=e},
U5:function U5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgN:function bgN(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eii:function eii(d,e){this.a=d
this.b=e},
eij:function eij(d){this.a=d},
eik:function eik(){},
eil:function eil(d){this.a=d},
eim:function eim(d,e){this.a=d
this.b=e},
aBq:function aBq(d){this.a=d},
aBr:function aBr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ebN:function ebN(d){this.a=d},
ebM:function ebM(){},
ebO:function ebO(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebI:function ebI(){},
ebK:function ebK(d){this.a=d},
ebL:function ebL(d){this.a=d},
bqV:function bqV(){},
aoC:function aoC(d){this.a=d},
aBu:function aBu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eio:function eio(d){this.a=d},
ein:function ein(d){this.a=d},
hAI(){var w,v,u,t
for(v=0;v<4;++v){w=D.cMm[v]
try{if(A8.bRX(w)){u=w
return u}}catch(t){}}return null},
Po(d,e){return C.hJh(d,e)},
hJh(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Po=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hAI()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nA?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.H(b4,2)
c2.b=b5-A.o.H(b5,2)
b6=B.pZ(c6,!0)
b6.toString
p=B.a8(c6,!0)
b7=new B.cn(null,x.A)
b8=A.d.gK(c3)
b9=$.au()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nW(new C.fi_(c2,b7,o),!1,!1)
b6.lm(0,l)
b9=x.H
B.cf(null,A.da,!1,null,new C.fi0(n,m),c6,null,!0,!0,b9)
k=new C.fi4(b7)
j=new C.fi5()
i=null
t=4
b3=c2.a
h=Ae.aP8(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fyr(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aTT(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FV.xq(i,"dataavailable",new C.fi1(e))
d=new B.bO(new B.be($.bt,x.dT),x.b2)
A.FV.xq(i,"stop",new C.fi2(d))
J.afu(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Po)
case 8:w=7
return B.b(c5.$1(d0),$async$Po)
case 7:a0=d0
J.fyu(g,a0,0,0,c2.a,c2.b)
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
case 13:J.fyu(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afu(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.Q(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fyu(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bM(A.fn,null,b9),$async$Po)
case 18:w=16
break
case 17:J.afu(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afu(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.ni),$async$Po)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hD(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mL(a7)
c0.download=B.t(J.a9(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JH(b0)
J.lE(b0)
B.bM(A.nh,new C.fi3(a7),b9)
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
J.lE(l)
if(p.oP())p.eD()
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
fi_:function fi_(d,e,f){this.a=d
this.b=e
this.c=f},
fhZ:function fhZ(){},
fi0:function fi0(d,e){this.a=d
this.b=e},
fi4:function fi4(d){this.a=d},
fi5:function fi5(){},
fi1:function fi1(d){this.a=d},
fi2:function fi2(d){this.a=d},
fi3:function fi3(d){this.a=d},
br6:function br6(d,e,f){this.c=d
this.d=e
this.a=f},
eT_:function eT_(){},
eT0:function eT0(){},
c9x(d){var w=0,v=B.j(x.at),u,t,s
var $async$c9x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoM(d,A.y2),$async$c9x)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.Q(Date.now(),0,!1))
if(t.a<0){u=A.bv
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9x,v)},
c9w(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5F:function a5F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgw:function bgw(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e2k:function e2k(d){this.a=d},
e2i:function e2i(d){this.a=d},
e2j:function e2j(d,e){this.a=d
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
_.nQ$=k
_.nR$=l
_.nS$=m
_.nf$=n},
a6x:function a6x(d,e){this.a=d
this.b=e},
b_u:function b_u(){},
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
hal(d){return new C.afM(d)},
a0R:function a0R(){},
afM:function afM(d){this.a=d},
aO3:function aO3(){},
au0:function au0(d,e){this.d=d
this.b=e
this.a=null},
aPx:function aPx(d){this.b=d
this.a=null},
fd9(d,e){var w=0,v=B.j(x.H)
var $async$fd9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a_().gwE().Kd(d,e),$async$fd9)
case 2:B.fq7()
return B.h(null,v)}})
return B.i($async$fd9,v)},
h12(d,e){return(A.qu[(d^e)&255]^A.o.aw(d,8))>>>0},
fb1(d,e,f,g,h,i){var w=C.hFH(d,A.d7,f,null,A.cS,g,h,i)
return w},
h2U(d){var w=F.h3C(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hhT(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.ol.h(0,w)
if(v!=null)return v
for(u=A.ol.gdH(A.ol),u=u.gag(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ae("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.an(s,0,2)
return A.a.an(s+"XX",0,2)},
h31(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<32;++w)v+="- "+D.cAM[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwO(d,e){return C.hCp(d,e)},
hCp(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hD([d],"application/pdf")
n=x.z
q=B.aR6(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cv(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jL(o,"share",[p]),x.H),$async$bwO)
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
return B.i($async$bwO,v)},
fIF(){var w=0,v=B.j(x.y),u,t,s
var $async$fIF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f4q
s=$.bwl
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwO(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIF,v)},
by7(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$by7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f4q
l=$.bwl
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fYJ()?3:4
break
case 3:w=5
return B.b(C.bwO(m,k),$async$by7)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwm
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mL(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JH(q)
w=10
return B.b(B.bM(A.Y,null,x.H),$async$by7)
case 10:J.lE(q)
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
return B.i($async$by7,v)},
fIw(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fIw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwm
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
return B.i($async$fIw,v)},
fIN(d,e){var w=0,v=B.j(x.H),u,t
var $async$fIN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hD([d],"text/html"))
t.toString
u=window
u.toString
A.l9.tT(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fIN,v)},
aZr(d,e){var w=0,v=B.j(x.y),u
var $async$aZr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZt(d,e),$async$aZr)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZs(d),$async$aZr)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZr,v)}},D,H,Ai,N,W,P,Aj,G,F,E,Q,X,Y,Z,Ak,A6,K,A_,O,R,L,A7,Al,A0,Am,An,A8,A9,Ao,Aa,Ab,Ac,Ap,Aq,S,Ar,I,Ad,As,At,T,U,M,A1,A2,A3,Au,Av
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
C.nt.prototype={
ud(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t6(t,v)
return new C.nt(t===0?!1:w,v,t)},
bFr(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BP()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t6(w,u)
return new C.nt(r===0?!1:s,u,r)},
bFR(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BP()
w=o-d
if(w<=0)return p.a?$.fK6():$.BP()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t6(w,u)
q=new C.nt(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a0C())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aj(e,16)
if(A.o.H(e,16)===0)return r.bFr(v)
u=w+v+1
t=new Uint16Array(u)
C.fVp(r.b,w,e,t)
w=r.a
s=C.t6(u,t)
return new C.nt(s===0?!1:w,t,s)},
lW(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aj(e,16)
u=A.o.H(e,16)
if(u===0)return n.bFR(v)
t=w-v
if(t<=0)return n.a?$.fK6():$.BP()
s=n.b
r=new Uint16Array(t)
C.hrR(s,w,e,r)
w=n.a
q=C.t6(t,r)
p=new C.nt(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aE(0,$.a0C())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a0C())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cyJ(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5E(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5E(t,e)
if(s===0)return $.BP()
if(r===0)return t.a===e?t:t.ud(0)
w=s+1
v=new Uint16Array(w)
C.hrP(t.b,s,d.b,r,v)
u=C.t6(w,v)
return new C.nt(u===0?!1:e,v,u)},
FW(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BP()
w=d.c
if(w===0)return t.a===e?t:t.ud(0)
v=new Uint16Array(s)
C.b6o(t.b,s,d.b,w,v)
u=C.t6(s,v)
return new C.nt(u===0?!1:e,v,u)},
bsL(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t6(r,u)
return new C.nt(!1,u,s)},
bsK(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t6(u,r)
return new C.nt(!1,r,v)},
bsM(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t6(p,m)
return new C.nt(s!==0,m,s)},
SR(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BP()
w=t.a
if(w===e.a){if(w){w=$.a0C()
return t.FW(w,!0).bsM(e.FW(w,!0),!0).a5E(w,!0)}return t.bsL(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bsK(v.FW($.a0C(),!1),!1)},
ao(d,e){var w,v,u=this,t=u.c
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
if(p===0||o===0)return $.BP()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fVq(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t6(w,t)
return new C.nt(q===0?!1:r,t,q)},
bFq(d){var w,v,u,t
if(this.c<d.c)return $.BP()
this.aNf(d)
w=$.fDP.c2()-$.auJ.c2()
v=C.fDR($.fDO.c2(),$.auJ.c2(),$.fDP.c2(),w)
u=C.t6(w,v)
t=new C.nt(!1,v,u)
return this.a!==d.a&&u>0?t.ud(0):t},
cfs(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aNf(d)
w=C.fDR($.fDO.c2(),0,$.auJ.c2(),$.auJ.c2())
v=C.t6($.auJ.c2(),w)
u=new C.nt(!1,w,v)
if($.fDQ.c2()>0)u=u.lW(0,$.fDQ.c2())
return t.a&&u.c>0?u.ud(0):u},
aNf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fVm&&d.c===$.fVo&&g.b===$.fVl&&d.b===$.fVn)return
w=d.b
v=d.c
u=16-A.o.gahf(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fVk(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fVk(g.b,f,u,r)}else{r=C.fDR(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fDS(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cyJ(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6o(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6o(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hrQ(p,r,i);--o
C.fVq(h,j,0,r,o,s)
if(r[i]<h){m=C.fDS(j,s,o,n)
C.b6o(r,l,n,m,r)
while(--h,r[i]<h)C.b6o(r,l,n,m,r)}--i}$.fVl=g.b
$.fVm=f
$.fVn=w
$.fVo=v
$.fDO.b=r
$.fDP.b=l
$.auJ.b=s
$.fDQ.b=u},
gV(d){var w,v,u,t=new C.cyK(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cyL().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nt&&this.aI(0,e)===0},
ro(d,e){return this.aI(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u6(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gahf(v[n])
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
break}return J.kS(A.aE.gaL(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ud(0):r
while(v.c>1){u=$.h7h()
if(u.c===0)B.b9(D.aVj)
t=v.cfs(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bFq(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).fM(0)},
$iaON:1,
$ihv:1}
C.aOd.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cCD(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.jO(w,w.length,B.U(w).k("jO<1>"))}}
C.Q0.prototype={
cKk(){var w,v
if(this.as==null)this.b7p()
w=this.as
v=w==null?null:w.alS()
return v==null?null:v.ey()},
b7p(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alS().ey()
this.as=new C.bJk(v)}},
gX(d){return this.at}}
C.a1N.prototype={
a3(){return"CompressionType."+this.b}}
C.bDp.prototype={
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
C.bC_.prototype={
cAX(d,e){var w,v,u,t,s,r=this,q=new C.bDp(d)
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
t=r.cdN(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cdQ(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cdN(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d_P[u])v=!1
if(t!==D.cGt[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cdQ(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bVm()
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
u[w]=l}c9.fr=B.bY(6,$.h5o(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h5n()
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
if(f<h)h=f}c9.bR1(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqy(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqy(d3)}while(a3===0||a3===1);++a5
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
b2=A.o.H(a8,16)
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
a3=c9.aqy(d3)
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
aqy(d){var w,v,u,t,s=this,r=s.ay
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
bR1(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bVm(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cqW.prototype={
aDW(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIu(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aR()
e.aR()
e.aR()
e.aR()
r.f=e.aH()
r.r=e.aH()
w=e.aR()
if(w>0)e.aDZ(w,!1)
r.cea(e)
q=r.r
v=r.f
u=e.aGM(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b56()
s.cKj(0,u,e,f)
q.push(s)}},
cea(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5h(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.rb()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.rb()
d.aR()
d.aR()
d.aH()
d.aH()
d.rb()
d.rb()
u=d.rb()
t=d.rb()
this.f=u
this.r=t
d.c=s},
bIu(d){var w,v,u,t,s,r,q,p,o,n
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
o=new B.ajm(A.hH)
o.aI2(r.ey(),A.hH,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cqU.prototype={}
C.auo.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cqX.prototype={
aDW(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aR()
o.b=e.aR()
w=D.ayb.h(0,e.aR())
o.c=w==null?D.Jo:w
o.d=e.aR()
o.e=e.aR()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aR()
u=e.aR()
o.x=e.akF(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aMl:D.C4
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.C4&&u>2){w=o.y
w.toString
s=B.qC(w,A.hH,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aR()===39169){s.aR()
s.aR()
s.akF(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aR()
o.at=D.aMm
o.ax=new C.cqU(r,q)
w=D.ayb.h(0,q)
o.c=w==null?D.Jo:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gI(d){return this.bgB().length},
alS(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qC(new Uint8Array(0),A.hH,q,q)
w=r.at
if(w!==D.C4)if(p.gI(0)<=0)r.at=D.C4
else{if(w===D.aMl){p=r.bDL(p)
r.Q=p}else if(w===D.aMm){p=r.bDo(p)
r.Q=p}r.at=D.C4}w=r.c
if(w===D.abx){v=p.c
u=B.dc()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.oH.Ar(p.ey(),!0,!1)
else{t=B.a6m(A.hH,r.w)
p=r.Q
p.toString
A.oH.a1A(p,t,!0,!1)
u.b=t.Fv()}r.Q.c=v
return B.qC(u.b8(),A.hH,q,q)}else if(w===D.aby){s=B.a6m(A.hH,32768)
p=r.Q
v=p.c
C.haw().cAX(p,s)
u=s.Fv()
r.Q.c=v
return B.qC(u,A.hH,q,q)}else return B.qC(p.ey(),A.hH,q,q)},
bgB(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3q(d){var w=this.ch,v=C.I7(C.h12(w[0].N(0),d))
w[0]=v
v=w[1].ao(0,v.SR(0,C.I7(255)))
w[1]=v
w[1]=v.aM(0,C.I7(134775813)).ao(0,C.I7(1)).SR(0,C.I7(4294967295))
w[2]=C.I7(C.h12(w[2].N(0),w[1].lW(0,24).N(0)))},
aMG(){var w=(this.ch[2].SR(0,C.I7(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bDL(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qC(new Uint8Array(0),A.hH,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3q(u[v.c++]^r.aMG())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMG()
r.b3q(s)
u&2&&B.ah(t)
t[w]=s}return B.qC(t,A.hH,q,q)},
bDo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gI(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hrw(k,w,v)
p=new Uint8Array(B.cl(A.aE.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aE.dt(q,v,k)))
if(!C.fUQ(A.aE.dt(q,k,k+2),u))throw B.R(B.fd("password error"))
k=new Uint8Array(16)
n=new C.bAA(k,new Uint8Array(16),p)
k=x.S
m=J.a39(0,k)
m=n.r=new C.cby(m)
m.c=!0
m.b=m.bfV(!0,new C.aq8(p))
if(m.c)m.d=B.bj(D.nz,!0,k)
else m.d=B.bj(D.xx,!0,k)
l=C.fT4(C.fT6(),64)
l.b9G(new C.aq8(o))
n.w=l
n.cJV(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fUQ(k,m))throw B.R(B.fd("macs don't match"))
return B.qC(r,A.hH,null,null)}}
C.b56.prototype={
cKj(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aR()
e.aR()
e.aR()
e.aR()
e.aR()
e.aR()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aR()
v=e.aR()
u=e.aR()
n.y=e.aR()
e.aR()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akF(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qC(t,A.hH,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aR()
p=s.aR()
o=s.a5h(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rb()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rb()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rb()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akF(u)
f.c=n.as
t=new C.cqX(D.Jo,n,D.C4,B.a([C.I7(0),C.I7(0),C.I7(0)],x.f3))
n.ch=t
t.aDW(0,f,g)},
u(d){return this.at}}
C.cqV.prototype={
cAY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cqW(B.a([],x.fT))
this.a=g
g.aDW(0,d,f)
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
if(l==null){l=n?new C.Q0(o,A.o.aj(Date.now(),1000),0):C.fLu(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fLu(o,q.w,q)
if(k.as==null)k.b7p()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajm(A.hH)
j.aI2(o,A.hH,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.IN(!1).Gw(i,0,h,!0)}}return v}}
C.bAA.prototype={
cJV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bl(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.haf(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bGV(u,0,w,0,o)}else{o===$&&B.c()
q.bDP(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
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
l.l7(0)
w=w.d
w===$&&B.c()
l.Bl(0,w,0,w.length)
return f}}
C.cbD.prototype={}
C.cbH.prototype={}
C.cbB.prototype={}
C.aq8.prototype={}
C.cbG.prototype={
cBc(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9G(new C.aq8(A.aE.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bHT(n.a,n.b,t,s,r)
r+=v}A.aE.ha(f,g,g+w,s)
return o.a.c},
bHT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
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
w=A.o.ro(w,e.gbRi())
if(!w)e.gbRi()
return w},
aGf(d,e){this.a=0
this.b=d},
rq(d){return this.aGf(d,null)},
aGP(d){var w,v=this,u=v.b
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
w.aWs(v,u)
u=w.b
u===$&&B.c()
w.aWs(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWs(d,e){var w,v=A.o.fF(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bn(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.cbF.prototype={
l7(d){var w,v=this
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
alm(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aXU(u,0)
v.c=0}v.a.aGP(1)},
Bl(d,e,f,g){var w=this.ccF(e,f,g)
f+=w
g-=w
w=this.ccG(e,f,g)
this.ccw(e,f+w,g-w)},
JA(d,e){var w,v=this,u=C.fT5(v.a),t=u.a
t===$&&B.c()
t=C.fJf(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fJf(w,3)
v.ccA()
v.ccx(u)
v.app()
v.c6S(d,e)
v.l7(0)
return 20},
aXU(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nE(A.aE.gaL(d),d.byteOffset,d.length).getUint32(e,A.hZ===w.d)
if(w.w===16)w.app()},
app(){this.cJU()
this.w=0
A.d.hi(this.r,0,16,0)},
ccw(d,e,f){while(f>0){this.alm(d[e]);++e;--f}},
ccG(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aXU(d,e)
e+=4
f-=4
w.aGP(4)
v+=4}return v},
ccF(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.alm(d[e]);++e;--f;++v}return v},
ccA(){this.alm(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.alm(0)}},
ccx(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.app()
u=v.d
switch(u){case A.hZ:u=v.r
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
default:throw B.R(B.ba("Invalid endianness: "+u.u(0)))}},
c6S(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hZ===this.d,s=0;s<w;++s){r=v[s]
q=J.nE(A.aE.gaL(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cbI.prototype={
cJU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pD[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pD[30]
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
b9G(d){var w,v,u,t,s=this,r=s.a
r.l7(0)
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
s.b4z(s.d,u,54)
s.b4z(s.e,u,92)
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
b4z(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cbz.prototype={}
C.cby.prototype={
a_Z(d){return(D.nz[d&255]&255|(D.nz[d>>>8&255]&255)<<8|(D.nz[d>>>16&255]&255)<<16|D.nz[d>>>24&255]<<24)>>>0},
bfV(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.R(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bY(4,0,!1,u)
switch(v){case 4:q=J.nE(A.aE.gaL(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_Z((m>>>8|(m&$.pD[24])<<24)>>>0)^D.cjy[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nE(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Z((k>>>8|(k&$.pD[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_Z((k>>>8|(k&$.pD[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nE(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Z((g>>>8|(g&$.pD[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_Z(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.R(B.ba("Should never get here"))}return s},
bGV(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nE(A.aE.gaL(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e1[a8&255]
u=D.e1[a9>>>8&255]
t=$.pD[8]
s=D.e1[b0>>>16&255]
r=$.pD[16]
q=D.e1[b1>>>24&255]
p=$.pD[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e1[a9&255]
s=D.e1[b0>>>8&255]
u=D.e1[b1>>>16&255]
v=D.e1[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e1[b0&255]
u=D.e1[b1>>>8&255]
s=D.e1[a8>>>16&255]
q=D.e1[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e1[b1&255]
a8=D.e1[a8>>>8&255]
a9=D.e1[a9>>>16&255]
b0=D.e1[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e1[n&255]
b0=D.e1[m>>>8&255]
a9=D.e1[l>>>16&255]
a8=D.e1[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e1[m&255]
b0=D.e1[l>>>8&255]
o=D.e1[b1>>>16&255]
s=D.e1[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e1[l&255]
o=D.e1[b1>>>8&255]
b0=D.e1[n>>>16&255]
u=D.e1[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e1[b1&255]
o=D.e1[n>>>8&255]
s=D.e1[m>>>16&255]
v=D.e1[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e1[a8&255]^C.n0(D.e1[a9>>>8&255],24)^C.n0(D.e1[b0>>>16&255],16)^C.n0(D.e1[b1>>>24&255],8)^b6[w][0]
m=D.e1[a9&255]^C.n0(D.e1[b0>>>8&255],24)^C.n0(D.e1[b1>>>16&255],16)^C.n0(D.e1[a8>>>24&255],8)^b6[w][1]
l=D.e1[b0&255]^C.n0(D.e1[b1>>>8&255],24)^C.n0(D.e1[a8>>>16&255],16)^C.n0(D.e1[a9>>>24&255],8)^b6[w][2]
b1=D.e1[b1&255]^C.n0(D.e1[a8>>>8&255],24)^C.n0(D.e1[a9>>>16&255],16)^C.n0(D.e1[b0>>>24&255],8)^b6[w][3]
a7=D.nz[n&255]
b0=D.nz[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nz[l>>>8&255]
a9=D.nz[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nz[b1>>>8&255]
h=D.nz[n>>>16&255]
g=D.nz[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nz[l>>>24&255]
s=s[3]
a1=J.nE(A.aE.gaL(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nE(A.aE.gaL(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nE(A.aE.gaL(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nE(A.aE.gaL(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bDP(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nE(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nE(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nE(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nE(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e0[a6&255]
v=D.e0[b0>>>8&255]
u=$.pD[8]
t=D.e0[a5>>>16&255]
s=$.pD[16]
r=D.e0[a4>>>24&255]
q=$.pD[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e0[a4&255]
t=D.e0[a6>>>8&255]
v=D.e0[b0>>>16&255]
w=D.e0[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e0[a5&255]
v=D.e0[a4>>>8&255]
t=D.e0[a6>>>16&255]
r=D.e0[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e0[b0&255]
a5=D.e0[a5>>>8&255]
a4=D.e0[a4>>>16&255]
a6=D.e0[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e0[p&255]
a6=D.e0[b0>>>8&255]
a4=D.e0[n>>>16&255]
a5=D.e0[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e0[o&255]
a4=D.e0[p>>>8&255]
a7=D.e0[b0>>>16&255]
t=D.e0[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e0[n&255]
a7=D.e0[o>>>8&255]
a5=D.e0[p>>>16&255]
v=D.e0[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e0[b0&255]
a7=D.e0[n>>>8&255]
t=D.e0[o>>>16&255]
w=D.e0[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e0[a6&255]^C.n0(D.e0[b0>>>8&255],24)^C.n0(D.e0[a5>>>16&255],16)^C.n0(D.e0[a4>>>24&255],8)^b5[a9][0]
o=D.e0[a4&255]^C.n0(D.e0[a6>>>8&255],24)^C.n0(D.e0[b0>>>16&255],16)^C.n0(D.e0[a5>>>24&255],8)^b5[a9][1]
n=D.e0[a5&255]^C.n0(D.e0[a4>>>8&255],24)^C.n0(D.e0[a6>>>16&255],16)^C.n0(D.e0[b0>>>24&255],8)^b5[a9][2]
b0=D.e0[b0&255]^C.n0(D.e0[a5>>>8&255],24)^C.n0(D.e0[a4>>>16&255],16)^C.n0(D.e0[a6>>>24&255],8)^b5[a9][3]
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
d=J.nE(A.aE.gaL(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bJj.prototype={}
C.bJk.prototype={
gI(d){var w=this.a.length
return w},
alS(){return B.qC(this.a,A.hH,null,null)}}
C.b6D.prototype={
u8(d){return C.huH(d)}}
C.ckW.prototype={
L8(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7U(v,t+20,u+16,t,u,B.ti(d.x))},
mR(d){return!1}}
C.bKc.prototype={
cvu(d){if(this.b)throw B.R(B.ba("FontLoader is already loaded"))
this.c.push(d.bw(new C.bKd(),x.E))},
mb(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.R(B.ba("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mb)
case 6:w=5
return B.b(p.fd9(f,r),$async$mb)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mb,v)}}
C.at5.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6k.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aW(this))return!1
return e instanceof C.a6k&&e.a===this.a},
gV(d){return B.bn(B.aW(this),B.w_(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aW(this)===D.faU)return"["+(w+B.dY(this.a))+"]"
return"[ObjectKey "+(w+B.dY(this.a))+"]"}}
C.aSv.prototype={
bX(d){var w=new C.axR(!0,this.e,null,new B.da(),B.ca())
w.bW()
w.scw(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxH(0,!0)
w=this.e
if(!w.A(0,e.af)){e.af=w
e.aCA()}}}
C.axR.prototype={
sxH(d,e){return},
goM(){var w=this.a8$
return w!=null},
gkB(){var w=this.a8$
return w!=null},
KY(d){var w=d==null?B.fNO(null):d
w.sa2s(this.af)
return w}}
C.ZQ.prototype={
S(){return new C.aG8(B.aZ(x.N))},
cIc(d){return this.d.$1(d)},
cG1(){return this.e.$0()}}
C.aG8.prototype={
Z(){this.a0()
this.Ns()},
Ns(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ns=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cG1(),$async$Ns)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eRs(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ns,v)},
WY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.eRw(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eRx(t))
w=3
return B.b(C.al6(p),$async$WY)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eRy(t,s,p))
w=4
return B.b(t.Ns(),$async$WY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WY,v)},
a__(d){return this.cgD(d)},
cgD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a__=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eRt(t))
s=J.q(d,"id")
w=3
return B.b(C.bUl(J.k(s==null?"":s)),$async$a__)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eRu(t))
w=1
break}q=C.fIL(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cIc(B.a([q],x.D)),$async$a__)
case 4:if(t.c==null){w=1
break}t.n(new C.eRv(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a__,v)},
Nr(d,e){return this.bEd(0,e)},
bEd(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eRn(q),r,null,!0,!0,x.y),$async$Nr)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eRo(t))
s=s.h(e,"id")
w=4
return B.b(C.al5(J.k(s==null?"":s)),$async$Nr)
case 4:if(t.c==null){w=1
break}t.n(new C.eRp(t))
w=5
return B.b(t.Ns(),$async$Nr)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nr,v)},
cuy(d){var w=B.bh(d),v=w==null?null:w.bQ()
if(v==null)return""
return A.i2[B.bB(v)-1]+" "+B.bQ(v)},
aMx(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LM,A.n),w,e,w,w,w,w,w,e)},
aMw(d){return this.aMx(d,44)},
b1P(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LM:u,r=B.m(14),q=B.V(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.H3,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.H3,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.blg,u,u,u)],p))}return B.D(B.aH(A.c5,B.di(u,B.B(q,A.m,u,A.b6,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hP,u,u,u,A.wq,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eRC(this,d),u,u,u,u,u,u,!1,A.ae),1)},
caJ(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d9.j(0.14):D.Uk,n=B.m(18),m=p?A.d9:A.dv
m=B.H(m,A.r,p?1.8:1)
w=this.aMw(A.p9)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aKF,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.u(B.a([v,A.d5,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aKH,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LM:q
u=p?q:B.H(A.bf,A.r,1.6)
r=p?D.bza:q
return B.aH(q,B.di(q,B.B(B.a([w,A.bc,t,B.di(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a5),A.fU,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fU,q,q,A.d8,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRr(this,p,d),q,q,q,q,q,q,!1,A.ae)},
ci7(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cuy(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.dv,A.r,1)
v=r.aMw(A.L2)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aKF,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.u(B.a([u,A.d5,B.d(p+" slides"+t,q,q,q,q,q,q,D.aKH,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZw(A.hm,A.bs,"Bring it back",r.r?q:new C.eRz(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bq,r.aZw(A.e4,A.cH,"Delete",r.r?q:new C.eRA(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.Uk,q,w,o,q,q,A.n),q,q,q,A.d8,D.bfR,q,q,q)},
aZw(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hA(B.aH(w,B.p(w,B.V(d,v?A.bf:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
apF(d,e,f){var w=null
return new B.C(D.beU,B.u(B.a([B.V(d,A.bf,w,w,w,46),A.ab,B.d(e,w,w,w,w,w,w,D.eKx,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eDn,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bP,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.bf,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMx(A.xk,46),A.bc,D.bm_],t)
if(j.r)s.push(D.dOV)
s.push(B.aF(i,i,i,i,A.Lw,i,i,i,new C.eRF(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.dv,A.r,1)
o=J.a6(h)
q=B.a([A.T,u,new B.C(D.bip,s,i),B.p(i,B.B(B.a([j.b1P(0,A.wW,"Save",j.a.c.length),j.b1P(1,A.Lh,"Saved",o.gI(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bht,A.ef,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cH:A.bs).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cH:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.L3:A.ej
n=B.V(n,p?A.cH:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.aa,B.D(B.d(m,i,i,i,i,i,i,A.a42,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bhp,A.iI,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eGJ,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aH(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eJC,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eRG(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apF(A.p9,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.caJ(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dOv)
else if(j.e==null)s.push(j.apF(A.ag1,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.apF(A.o9,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.ci7(r.gT(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.cj,B.cL(u,i,W.adf,i,i,A.aj,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbXP()
p=s?i:D.LM
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.aa(0,A.G,A.b2.j(0.4),A.cs,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wW,m?A.j_:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bi1,B.aH(i,B.di(i,B.B(B.a([k,A.a3s,new B.dp(1,A.cj,B.eX(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j_:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b6,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hP,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.T)
return B.p(i,B.bq(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,i,new B.aX(0,1/0,0,w.a.b*0.9),D.aSu,i,i,i,i,i,i,i,i)}}
C.nV.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().ab()],x.N,x.z)}}
C.WC.prototype={
S(){return new C.auV(B.a([],x.k),B.f7(null,x.H))},
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
co0(d){var w,v,u,t=this
d.c=new B.Q(Date.now(),0,!1)
w=J.pK(t.d,new C.cAa(d))
v=w<0
if(v&&C.hrT(d))return t.f
u=t.d
if(v)J.p0(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fzJ(new C.cAb(t),v)
return t.f=t.f.bw(new C.cAc(t,d),v).eN(new C.cAd())},
Hg(d,e,f){return this.c4x(0,e,f)},
aTV(d,e){return this.Hg(0,e,!1)},
c4x(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
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
aTc(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dbQ:d
this.Hg(0,new C.nV(w,v,new B.Q(Date.now(),0,!1)),!0)},
bXk(){return this.aTc(null)},
aaK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.cAe(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aTc(s)
case 1:return B.h(u,v)}})
return B.i($async$aaK,v)},
Hf(d,e){return this.bE5(0,e)},
bE5(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
C2(d){return this.bwr(d)},
bwr(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
return B.b(t.aTV(0,d),$async$C2)
case 9:w=5
break
case 7:w=10
return B.b(F.fJh(r,d.b,null),$async$C2)
case 10:w=5
break
case 8:w=11
return B.b(t.Hf(0,d),$async$C2)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C2,v)},
bRf(){var w,v,u=null,t=[D.dbT,D.dbR,D.dbS],s=new C.cA4(),r=B.m(26),q=x.V,p=B.a([new B.aa(0,A.G,A.du.j(0.4),A.eK,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b3(999,999)
n.push(B.p(u,new B.x(D.cY0[w],u,A.oz,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.nq,u,u,u))}return B.p(u,B.B(B.a([B.D(B.u(B.a([D.f6B,A.P,B.c8(A.bH,n,A.bx,6,6),A.aO,B.aH(u,B.p(u,D.en8,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.cA,10)],q),u,A.n),u,u,u,u,V.adC,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cA3(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a3(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bGh,A.n),u,u,u,u,D.biz,u,u,u)},
bwp(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.aa(0,A.G,A.x.j(0.5),A.cs,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.W,v,A.aY,A.q,B.a([B.eX(A.A,F.alE(d.b),A.h,A.bO),D.dTC,B.an(v,B.aH(v,B.p(v,D.bzX,A.h,v,v,D.aTm,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czT(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eAR,v,v,v)
w=u===1?"":"s"
return B.aH(v,B.u(B.a([new B.fJ(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eGT,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.czU(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czV(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.acb,B.hA(B.aH(s,B.p(s,A.aiH,A.h,s,s,new B.o(s,s,s,s,B.a([new B.aa(0,A.G,A.b2.j(0.5),A.J,12)],x.V),E.uQ,A.a5),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbYz(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mu,s,s,s,!0,s,s,s,s,s,D.f6F,s,s,s,1,s,!0)
if(t.e)r=D.aWA
else{w=t.bRf()
v=B.a([D.eUr,A.aa],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.a9(t.d),s,s,s,s,s,s,D.eAk,s,s,s),A.h,s,s,new B.o(D.b_R,s,s,u,s,s,A.n),s,s,s,s,A.DV,s,s,s))}r=B.a([new B.nq(Ad.Vt,new B.lN(w,s),s),new B.nq(D.bhW,new B.lN(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ci(t.d))r.push(D.esJ)
else r.push(new B.nq(D.bhr,B.Nb(new B.o_(new C.cAf(t),J.a9(t.d),!0,!0,!0,0,B.rh(),s),D.aVS),s))
r=B.uP(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.aj,!1,r)}return B.cd(q,D.aZN,r,s,!1,!1,s,s)}}
C.WA.prototype={
S(){return new C.auR(B.a([],x.bx))},
S6(d){return this.d.$1(d)}}
C.aC3.prototype={}
C.auR.prototype={
aWu(d,e,f){var w=$.au(),v=new B.ap(new B.bc(d,A.b0,A.aM),w),u=this.gaTU()
v.aJ(0,u)
w=new B.ap(new B.bc(e,A.b0,A.aM),w)
w.aJ(0,u)
return new C.aC3(v,w,f)},
CR(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cN(A.p_,new C.czm(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.au()
u=new B.ap(new B.bc(w.a,A.b0,A.aM),v)
t=m.gaTU()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ap(new B.bc(w.b,A.b0,A.aM),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ap(new B.bc(w.c,A.b0,A.aM),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ap(new B.bc(p.a,A.b0,A.aM),v)
o.aJ(0,t)
n=new B.ap(new B.bc(p.b,A.b0,A.aM),v)
n.aJ(0,t)
r.push(new C.aC3(o,n,p.c))}if(r.length===0)r.push(m.aWu("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.gos()
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
gos(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.m3(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qH(n,w,v,t,u)},
zK(){var w=0,v=B.j(x.H),u=this,t
var $async$zK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.gos()
t=u.a
w=2
return B.b(t.S6(t.c),$async$zK)
case 2:return B.h(null,v)}})
return B.i($async$zK,v)},
bYx(){this.n(new C.czl(this))
this.CR()},
aSV(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.czo(w,d,v))
w.CR()},
bYy(d,e){var w=A.d.cu(this.w,e)
this.n(new C.czw())
this.CR()
$.aT.x1$.push(new C.czx(w))},
OG(d){return this.caz(d)},
caz(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kE(80,1400,A.eu),$async$OG)
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
wM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h4G(r,t.gos()),$async$wM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.czn(t,s))
t.CR()
case 1:return B.h(u,v)}})
return B.i($async$wM,v)},
caR(d){var w,v=this,u=null,t=F.fhg(d.c)
if(t==null)return new B.bG(A.a3,u,u,B.hh(D.btm,D.eWJ,new C.czr(v,d),u),u)
w=x.p
return new B.C(A.cK,new B.am(A.W,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fD(t,A.A,u,u,A.ci,A.bO,!0,140,!1,u,1/0),A.ap),B.an(u,B.B(B.a([v.aZx(A.kC,new C.czs(v,d)),A.bq,v.aZx(A.ct,new C.czt(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZx(d,e){var w=null
return B.aD(!1,A.Y,!0,w,B.aI(!1,w,!0,new B.C(A.hj,B.V(d,A.c,w,w,w,18),w),A.cE,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cE,w,w,A.ac)},
Hh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zK(),$async$Hh)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fJh(s,t.gos(),new C.czv(t)),$async$Hh)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qd,B.hh(D.bxW,D.f1g,n.gatg(),B.fm(m,m,m,m,m,m,m,m,m,m,m,A.bI,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiG,m,m,m,new C.czy(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.TL,m,1,m,m,m,!1,m,!1,E.mu,m,m,m,!0,m,m,m,m,m,D.eXt,m,m,m,1,m,!0),j=Ao.aRh(O.kU,A.c,Aa.SP,A.nv,D.eYa,n.gbYw()),i=B.m(18),h=n.gatf(),g=B.a([new B.aa(0,A.G,A.x.j(0.4),A.j6,12)],x.V)
g=B.aH(m,B.p(m,new B.a3(92,142.1818181818182,B.eX(A.A,F.alE(n.gos()),A.h,A.dp),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.ep,B.D(B.u(B.a([D.f84,A.av,B.d(F.fHP(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eMf,m,m,m),A.T,B.dn(E.ahX,E.aLn,h,B.bk(A.du,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.TL,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nI,!0,A.a6,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bm(m,new B.b2(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b3(16,16)
u=new B.ay(O.kU.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bwH,m,m,m,v===0?m:new C.czz(n,v),m,m,m,m,"Move up",A.c8)
r=i.length
q=B.aF(m,m,m,m,D.bCO,m,m,m,v===r-1?m:new C.czA(n,v),m,m,m,m,"Move down",A.c8)
r=r===1?m:new C.czB(n,v)
p=new B.b3(12,12)
o=new B.b3(12,12)
g.push(B.p(m,B.u(B.a([new B.cC(A.aZ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.eMK,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aF(m,m,m,m,B.V(A.e4,A.o0,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c8)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bv(p,p,p,p),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a6,m,A.am,m,m,m,m),A.ar,n.caR(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b2(4,new B.bv(o,o,o,o),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mu,m,new B.c2(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a6k(h),A.e_,D.bg4,m,m,m))}return B.nX(!0,B.cd(k,E.aax,B.cL(g,m,D.bgw,m,m,A.aj,!1),m,!1,!1,j,m),new C.czC(n),x.C)}}
C.auT.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cH:E.mu,q=B.m(16),p=B.m(16),o=s?A.aF.j(0.08):A.c.j(0.04)
s=s?A.aF.j(0.16):A.du.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fo,B.aD(!1,A.Y,!0,t,B.aI(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.D(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aK2,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.ek,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anL.prototype={
S(){return new C.aAT()}}
C.aAT.prototype={
Z(){this.a0()
this.Xx()},
bp(d){this.bA(d)
if(d.c!=this.a.c)this.ZQ()},
ZQ(){var w=0,v=B.j(x.H),u=this,t
var $async$ZQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$ZQ)
case 2:u.d=null
if(u.c!=null)u.n(new C.dYn(u))
w=3
return B.b(u.Xx(),$async$ZQ)
case 3:return B.h(null,v)}})
return B.i($async$ZQ,v)},
Xx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.a9(n)===0){w=1
break}t=4
if(J.cU(n,"http://")||J.cU(n,"https://")||J.cU(n,"data:")){o=B.Wd(B.cr(n,0,null),new B.Nz(!0))
r.d=o}else{o=B.fd("unsupported video ref")
throw B.R(o)}w=7
return B.b(o.hW(0).cJ(0,A.oW),$async$Xx)
case 7:if(r.c==null){w=1
break}r.d.rs(!1)
r.n(new C.dYl(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a5(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dYm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xx,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
c_t(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.n(new C.dYo(w))}else{v.p7(0)
w.n(new C.dYp(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iW.j(0.92),D.IJ.j(0.95)],x.O)
w=B.H(A.bS.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pc,A.bS,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bT(B.at(B.u(B.a([t,new B.a3(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aC,A.w,m,o,o),A.n),A.ba)}if(p.f)return B.at(B.V(A.ahi,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aXj
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eX(A.A,new B.a3(r,q,new B.z5(s,o),o),A.q,A.bO)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.at(B.p(o,B.V(A.iK,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.M(w,w,w,w),o,o,o),o,o,o))}return B.aH(o,B.bu(n,new B.am(A.W,o,A.aY,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_s(),o,o,o,o,o,o,!1,A.ae)}}
C.wJ.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.ja.prototype={}
C.ab1.prototype={
B(d){return B.p8(new C.dPM(this,B.L(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aar.prototype={
B(d){var w,v,u=null,t=B.L(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iW.j(t?0.35:0.4),A.r,1),p=t?D.J5:A.c,o=x.V,n=B.a([new B.aa(0,A.G,A.x.j(t?0.3:0.08),A.cs,14)],o),m=B.m(10),l=B.H(A.bS.j(0.5),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dH,6)],o)
w=this.c
o=B.D(B.p(u,new B.fJ(0.5625,C.hJC(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ae4,u,u,u,u),1)
m=D.iW.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iW,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.Y,!0,u,B.aI(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.d5,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.b5d,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c2(new B.ay(m,1,A.r,-1),A.V,A.V,A.V),u,u,u,A.n),u,u,u,u,D.acq,u,u,u)],v),A.af,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wM.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nf.prototype={}
C.bfB.prototype={
U9(d){var w=null
return new B.bG(A.a3,w,w,B.Ga(A.A,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bw8(){return this.U9(1)},
atM(d){var w=null,v=B.m(8),u=B.H(A.hM,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8S,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.B(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hM,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hM,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b6,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atM("TAARIFA ZA WANANDOA"),A.ar,w.bw8(),A.d5,w.U9(0.9),A.d5,w.U9(0.7),A.P,w.atM("TAMKO LA MAKUBALIANO"),A.h0,w.U9(1),A.d5,w.U9(0.95),A.P,w.atM("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ab4.prototype={
B(d){return B.p8(new C.e2n(B.L(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acI.prototype={
B(d){var w,v,u,t,s,r=null,q=B.L(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b4R:A.c,l=x.V,k=B.a([new B.aa(0,A.G,A.x.j(q?0.3:0.08),A.cs,14)],l),j=B.m(10),i=B.H(A.au.j(0.5),A.r,1)
l=B.a([new B.aa(0,A.G,A.x.j(0.14),A.dH,6)],l)
w=this.c
v=C.fIj(w.a)
if(v==null)v=A.d.gK(D.Ob)
u=B.aY(v.f)
t=B.aY(v.r)
s=x.p
l=B.D(B.p(r,new B.fJ(0.5625,new B.am(A.W,r,A.aY,A.q,B.a([B.bZ(0,B.fD(C.fIi(v.d),A.A,r,r,A.ci,A.bO,!0,r,!1,r,r),0,0,0),new B.C(A.ad6,new C.bfB(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ae4,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.J6,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.Y,!0,r,B.aI(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.d5,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b_e,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c2(new B.ay(j,1,A.r,-1),A.V,A.V,A.V),r,r,r,A.n),r,r,r,r,D.acq,r,r,r)],s),A.af,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kE.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5O.prototype={}
C.TS.prototype={
S(){var w=$.au()
return new C.aBb(new B.cn(null,x.A),new B.ap(A.as,w),new B.ap(A.as,w),B.m9(0,null,null),A.d.gK(D.a_f),D.dm9,B.a([],x.L),B.a([],x.gE))}}
C.aBb.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yv(C.fl9(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fk6().bw(new C.e5F(v),w)
$.tt().jT(0,"assets/images/ngmy_logo.png").bw(new C.e5G(v),w).eN(new C.e5H())},
p(){var w=this,v=w.e,u=$.au()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aet(d){var w=null,v=this.c
if(v!=null)v.G(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Hw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Hw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kE(88,1600,A.eu),$async$Hw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Hw)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h4X(m,p),$async$Hw)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bze(new B.pi(o,1),m),$async$Hw)
case 10:if(r.c!=null)r.n(new C.e5h(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a5(k)
r.aet("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hw,v)},
UR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h4X(s,q),$async$UR)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bze(new B.pi(r,1),s),$async$UR)
case 4:if(t.c!=null)t.n(new C.e5d(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UR,v)},
abr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e5o(q))
t=4
q.a.toString
p=C.hO0()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abr)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5p(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a5(i)
q.aet(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5q(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abr,v)},
XJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.a9(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e5j(q,i))
t=4
q.a.toString
p=C.hO_()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XJ)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5k(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a5(g)
if(q.c!=null)q.n(new C.e5l(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5m(q))
$.aT.x1$.push(new C.e5n(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XJ,v)},
c0a(d){this.n(new C.e5i(this,d))},
D6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e5f(q))
t=4
w=7
return B.b($.aT.gm5(),$async$D6)
case 7:w=8
return B.b(B.bM(A.nk,null,x.H),$async$D6)
case 8:k=$.aT.af$.x.h(0,q.d)
p=k==null?null:k.gb5()
if(!(p instanceof B.q1))throw B.R("The page is not ready yet.")
w=9
return B.b(p.lQ(1800/p.gX(0).a),$async$D6)
case 9:o=e
w=10
return B.b(o.hf(A.fM),$async$D6)
case 10:n=e
if(n==null)throw B.R("Could not make the picture.")
w=11
return B.b(A5.ae0(J.f2(A.dA.gaL(n)),"ngmy_news.png","image/png"),$async$D6)
case 11:m=e
q.aet(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a5(i)
q.aet(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5g(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D6,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kE,a2,a2,a2,new C.e5w(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.byr,a2,a2,a2,new C.e5x(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.og,a2,a2,a2,a4?a1.gaUM():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zo,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.enh,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.aa(0,A.G,A.x.j(0.6),A.eK,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fJ(0.7142857142857143,B.eX(A.A,new B.en(new C.aYr(t,s,r,a1.x,a2),a1.d),A.h,A.dp),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.R1,a2,a2,a2)
t=a1.as?a2:a1.gc09()
t=B.a([B.D(B.dn(D.bzb,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.rj,a2,a2,a2,A.c,A.fP,a2,a2,new B.b5(B.m(14),N.vK),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fD(r,A.A,a2,a2,A.ci,A.bO,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.aw,r,B.aF(a2,a2,a2,a2,D.bw0,a2,a2,a2,a1.as?a2:a1.gbCJ(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.R1,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aOh("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cT8[o]
p.push(B.mJ(a2,D.rj,new B.x(n.a,a2,A.ow,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hn,new C.e5y(a1,n),a2,a2,N.vK,a2))}p=B.c8(A.bH,p,A.bx,6,8)
m=a1.Q
m=B.c8(A.bH,B.a([D.f6O,A.bc,B.jQ(a2,a2,a2,D.eTk,a2,new C.e5z(a1),m==="en",a2,a2,a2,a2),A.aa,B.jQ(a2,a2,a2,D.eTf,a2,new C.e5A(a1),m==="sw",a2,a2,a2,a2)],w),A.qY,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.R1,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.de(D.a_f,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bU(i,i.gI(0),h.k("bU<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aMQ(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.aZ,!1)
i=B.a([],w)
for(j=B.de(D.a_f,10,a2,j),h=j.$ti,j=new B.bU(j,j.gI(0),h.k("bU<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aMQ(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.aZ,!1)
i=a1.as?a2:a1.gc0c()
h=B.m(18)
v=B.a([new B.aa(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cK,s,a2),t,A.ay,new B.C(A.cK,r,a2),q,A.P,p,A.T,m,A.ay,new B.C(A.cK,l,a2),new B.a3(a2,78,k,a2),A.P,new B.a3(a2,78,j,a2),A.aO,B.aH(a2,B.p(A.A,B.B(B.a([D.bz5,A.aa,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fQ,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.t3,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ae)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.d6Q,A.aw,D.bmi],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b2.j(0.35):D.rj
p=new B.b3(16,16)
d=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bG(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.eKi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.SD,new B.o(q,a2,new B.c2(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cK,A.iI,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cGR[o]
t.push(B.mJ(a2,D.rj,new B.x(a0,a2,A.Hf,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hn,new C.e5B(a1,a0),a2,a2,N.vK,a2))}u.push(B.c8(A.bH,t,A.bx,6,8))
u.push(A.T)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aOh("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e5C(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc0b()
u.push(B.B(B.a([t,A.aa,B.Ge(A.xp,s,B.nN(a2,A.b2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaUM()
u.push(B.dn(A.og,D.f2I,t,B.bk(A.dk,a2,a2,a2,a2,A.H1,a2,a2,new B.b5(B.m(16),A.V),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.acU,a2,a2,A.aj,!1)],w)
if(a1.as){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.jx.j(0.5),A.r,1)
v.push(B.bZ(0,B.ec(B.at(B.p(a2,B.B(B.a([E.a3t,A.ep,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.ix,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(E.zg,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.biR,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cd(a3,A.zo,new B.am(A.W,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aOh(d){var w=null
return B.bm(w,new B.b2(4,B.m(14),A.V),w,A.eH,w,w,w,w,!0,w,w,w,w,w,w,D.rj,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,R.Ha,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aMQ(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aY(d.f),p=s?A.bz:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aY(d.x),t,t,t,5,t,A.lo,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aY(v).j(0.5),t,t,t,2,t,D.bf7,t,t,t,t))
w.push(A.d5)
w.push(new B.C(A.k2,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.aY(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aH(t,B.p(t,B.u(w,A.m,t,A.b6,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kv,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e5e(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.yv.prototype={
b6E(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yv(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cyL(d){var w=null
return this.b6E(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
ayX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c7x(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fl(g,B.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c7v(),B.U(w).k("J<1,n>")).bZ(0,new C.c7w())
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
return this.b6E(p,r,q,J.a9(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEf(d){return this.f}}
C.rD.prototype={
a3(){return"NewsLayout."+this.b}}
C.Aj.prototype={
a3(){return"NewsFrame."+this.b}}
C.l_.prototype={}
C.aYr.prototype={
qK(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aY(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1K(d,e,f,g){return this.qK(d,e,null,1.25,f,A.bg,g)},
Q_(d,e,f,g,h){return this.qK(d,e,f,1.25,g,A.bg,h)},
axu(d,e,f,g,h){return this.qK(d,e,null,f,g,A.bg,h)},
axt(d,e,f,g,h){return this.qK(d,e,f,g,0,A.bg,h)},
b1M(d,e,f,g,h){return this.qK(d,e,null,f,0,g,h)},
cpr(d,e,f,g,h,i){return this.qK(d,e,f,g,0,h,i)},
axs(d,e,f,g){return this.qK(d,e,null,f,0,A.bg,g)},
afK(d,e,f){return this.qK(d,e,null,f,0,A.bg,A.cI)},
b1L(d,e,f,g,h){return this.qK(d,e,f,g,0,h,A.cI)},
cpq(d,e,f,g){return this.qK(d,e,null,f,0,g,A.cI)},
cpp(d,e,f,g){return this.qK(d,e,f,g,0,A.bg,A.cI)},
afL(d,e,f,g,h,i){return this.qK(d,e,f,g,h,A.bg,i)},
aUN(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.lP(new B.es(d,u,u,A.cU,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.cn,new B.k4(1),u,u,h,u,A.cm,u)
v.AP(g)
if(!v.b.a.c.gaAy())return w
w-=2}return j},
abs(d,e,f,g,h,i,j,k){return this.aUN(d,e,f,g,h,i,j,k,A.bg)},
avS(d,e,f){var w=null,v=d==null?B.aY(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a3(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
avR(d){return this.avS(null,!1,d)},
aeh(d,e){return this.avS(null,d,e)},
chh(d,e){return this.avS(d,!1,e)},
gaWS(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaQO(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
MZ(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abs(w.gaQO(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQO(),v,g,A.a2,v,v,v,w.axt(u,t,f,1.02,A.O),e,v,v)},
aQT(d){return this.MZ(d,A.L,null,2,78,30)},
a92(d,e,f,g,h){return this.MZ(d,e,null,f,g,h)},
bR7(d,e,f,g,h){return this.MZ(d,A.L,e,f,g,h)},
bR6(d,e,f){return this.MZ(d,A.L,null,e,f,30)},
PW(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.C(A.kw,B.d(s,u,g,A.a2,u,u,u,v.b1L(w,v.aUN(t,w,A.cI,d,g,h,15,1.2,A.cx),f,1.2,A.cx),e,u,u),u)},
b1s(d){return this.PW(d,A.L,null,3,24)},
axj(d,e,f,g){return this.PW(d,e,null,f,g)},
cou(d,e,f){return this.PW(d,A.L,e,3,f)},
b1t(d,e){return this.PW(d,e,null,3,24)},
cos(d,e){return this.PW(d,A.L,null,3,e)},
cot(d,e,f){return this.PW(d,e,null,3,f)},
anJ(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.io,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Q_("Roboto",12,d==null?B.aY(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LW(){return this.anJ(null,!0)},
anI(d){return this.anJ(null,d)},
byI(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.C(A.im,new B.a3(d,w,B.d(v,w,2,A.a2,w,w,w,this.cpq(this.d.as,13.5,1.2,A.cx),e,w,w),w),w)},
uH(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.Q(Date.now(),0,!1),i=m.gaWS(),h=A.o.aj(j.bv(B.bW(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hBQ(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1K(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abs(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abs(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aY(h.x)
h=h.ch?B.aY(h.f):A.c
s=x.p
return B.u(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.afL(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.M(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byu(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hz,A.j,0,l,l),A.ar,m.aeh(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.u(B.a([B.B(B.a([B.p(l,l,A.h,B.aY(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ep,B.D(B.d(i,l,1,A.eB,l,l,l,m.axs(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.B(B.a([B.d(C.byu(j),l,l,l,l,l,l,m.Q_(k,13,B.aY(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hz,A.j,0,l,l),A.P,m.chh(B.aY(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaWS()
v=B.d("NGMY",l,l,l,l,l,l,m.axu(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aY(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.x:A.c
h=h.w
n=x.p
return B.u(B.a([B.B(B.a([v,A.aa,B.et(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qK(k,r*0.72,o,1.05,-0.5,A.cx,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.M(t,s,t,s),l,l,l),l),A.b7,new B.dp(1,A.cj,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afL(k,12.5,B.aY(h).j(0.85),1.3,1.2,A.O),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aY(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hz,A.j,0,l,l)
t=m.aeh(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axs(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.u(B.a([w,A.av,t,new B.a3(l,s,l,l),v,new B.a3(l,q,l,l),m.aeh(!0,1.4),A.av,B.d(C.byu(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.avR(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.u(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axu(v,u,1,3,A.O),A.L,l,l),A.P,m.aeh(!0,1.2),A.av,B.B(B.a([B.d(C.byu(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hz,A.j,0,l,l),A.av,m.avR(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aa8(d){return this.uH(d,!1)},
abt(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aY(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afL("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.M(v,u,v,u),w,w,w)},
c0d(d,e){return this.abt(d,null,e,null)},
aSN(d){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.H(B.dk(v),12)===0?12:A.o.H(B.dk(v),12),t=B.aY(this.d.w).j(0.75),s=this.axt("Roboto",15,t,1,A.cq),r=B.V(E.afq,t,w,w,w,18),q=A.a.an(A.pf[B.bB(v)-1],0,3),p=A.a.aT(A.o.u(B.hf(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.aa,B.d(q+" "+B.bQ(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fz,w,w,w,1),B.V(d,t,w,w,w,19),A.aa,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asL(){return this.aSN(A.m3)},
aZL(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afL("Roboto",this.abs(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
avV(d,e,f){return this.aZL(d,e,f,30)},
axm(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.C(A.ue,B.d(v,w,e,A.a2,w,w,w,this.cpp("Roboto",f,B.aY(this.d.w).j(0.88),1.35),w,w,w),w)},
b1x(d){return this.axm(d,3,22)},
coF(d,e){return this.axm(d,e,22)},
rM(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fD(r,A.A,s,s,A.ci,A.bO,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.FH(D.blw,w,s)
if(v==="sepia")w=new B.FH(D.blv,w,s)}else{r=this.d
v=r.w
u=B.aY(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.V(A.wQ,B.aY(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bT(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.w,s,0,B.a([A.K,A.TH.j(0.38)],x.O),s,s),A.n),A.ba))
return new B.a3(d,e,new B.am(A.W,s,A.aY,A.q,v,s),s)},
pE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aY(j),A.r,3)
j=B.H(B.aY(j),A.r,1)
return B.p(k,B.p(k,l.rM(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ef,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lY,k,k,d)
case 2:w=B.a([new B.aa(0,A.G,A.x.j(0.35),D.dLn,14)],x.V)
v=l.rM(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.et(A.A,-0.035,B.p(k,B.u(B.a([v,B.D(B.at(B.d(u,k,2,A.a2,k,k,k,l.b1L(j.as,13.5,D.b0z,1.1,A.cx),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b3k,k,k,k,w,k,A.n),k,e,k,k,D.bgr,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aY(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rM(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aY(j.x),A.r,6)
j=B.aY(j.f)
v=t-10
return new B.a3(d,e,B.at(B.p(k,B.hO(l.rM(v,v),A.ap),A.h,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lY,k,k,t),k,k,k),k)
case 5:j=B.a([new B.aa(0,A.G,A.x.j(0.3),D.dLd,10)],x.V)
return B.et(A.A,0.025,new B.a3(d,e,new B.am(A.W,k,A.a9,A.h,B.a([B.bZ(0,B.p(k,l.rM(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qg,k,k,k),0,0,0),B.an(k,B.et(A.A,-0.6,B.p(k,k,A.h,A.bI.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.et(A.A,-0.6,B.p(k,k,A.h,A.bI.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aY(j.x)
return new B.a3(d,e,B.b1(B.n4(l.rM(d,e),A.ap,D.fej),new C.b8P(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rM(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bH(u));++n){m=new B.b3(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.c4,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cF(0,q,0,p,k,k,new B.cC(A.aZ,A.qy,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.W,k,A.aY,A.q,w,k),A.h,A.el,k,k,k,e,k,k,D.bkO,k,k,d)
case 8:w=d/2
v=B.w8(A.h_,new B.b3(w,w))
j=B.H(B.aY(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.w8(A.iO,new B.b3(w,w)),l.rM(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.aa(0,A.G,A.x.j(0.35),A.fE,22)],x.V)
return B.p(k,l.rM(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a3(d,e,B.n4(l.rM(d,e),A.ap,D.fjN),k)
case 0:j=B.H(B.aY(j.w),A.r,2.4)
return B.p(k,l.rM(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ef,k,k,d)}},
aKt(d,e){return this.d.e===D.OO?A.bF:this.byI(d,e)},
Up(d){return this.aKt(d,A.L)},
gawG(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awF(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1M(v.Q,19,1.15,A.cx,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Q_("Roboto",12.5,B.aY(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.afK(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.u(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gc86(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6P(d,e,f,g){return B.cj(new C.c7y(this,e,d,f,g))},
a6O(d){return this.a6P(d,22,!0,18)},
UA(d,e){return this.a6P(d,22,!0,e)},
aLv(d,e,f){return this.a6P(d,22,e,f)},
bAG(d,e,f){return this.a6P(d,e,!0,f)},
b4p(d,e,f,g){return B.cj(new C.c7z(this,e,d,g,!0,f))},
c6W(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.u(B.a([k.aa8(824),A.ay,k.aQT(824),k.b1s(824),A.P,k.LW(),A.ab,B.at(k.pE(824,360),j,j,j),k.Up(824),A.ab,B.D(k.a6O(3),1)],x.p),A.af,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.u(B.a([k.aa8(824),A.aO,new B.a3(j,350,B.B(B.a([new B.a3(440,j,B.u(B.a([k.a92(440,A.be,3,62,26),k.axj(440,A.be,2,20),A.b7,k.anJ(B.aY(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.H2,B.u(B.a([k.pE(362,310),k.Up(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.avR(2),A.ab,B.D(k.a6O(3),1)],w),A.af,j,A.e,A.j,0,A.p)
case 2:w=k.uH(824,!0)
v=B.aY(h.x)
u=h.ch
t=x.p
s=B.a([k.bR7(788,u?B.aY(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cou(788,u?B.aY(h.f):A.c,22))
v=B.p(j,B.u(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zK,j,j,j)
u=B.a([B.at(k.pE(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.OO){h=A.x.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axt(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.lq,j,j,j),j,j,0,0,j,j))}return B.u(B.a([w,A.ab,v,A.ab,new B.am(A.W,j,A.a9,A.q,u,j),A.P,k.LW(),A.T,B.D(k.UA(2,21),1)],t),A.af,j,A.e,A.j,0,A.p)
case 3:h=k.uH(824,!0)
w=k.pE(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.u(B.a([h,A.ab,new B.am(A.b5,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.MZ(780,A.be,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a7(A.b1,A.b5,A.w,v,j,j),A.n),j,j,j,j,D.bj8,j,j,j),j,j,0,0,j,j)],u),j),k.b1t(824,A.be),A.P,k.LW(),A.T,B.D(k.a6O(3),1)],u),A.af,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.u(B.a([k.aa8(824),A.ay,k.aQT(824),k.b1s(824),A.P,k.LW(),A.ab,B.D(k.b4p(3,300,B.u(B.a([k.pE(300,300),k.Up(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.af,j,A.e,A.j,0,A.p)
case 5:w=k.uH(824,!0)
v=x.p
u=B.u(B.a([k.a92(440,A.be,3,62,26),k.axj(440,A.be,2,20),A.b7,k.anI(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.u(B.a([w,A.bt,new B.a3(j,400,B.B(B.a([new B.a3(440,j,u,j),A.aI6,new B.C(A.im,k.pE(364,h.e===D.OO?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.UA(2,21),1)],v),A.af,j,A.e,A.j,0,A.p)
case 6:return B.u(B.a([k.aa8(824),A.ab,k.bR6(824,2,70),k.cos(824,21),A.P,k.LW(),A.ab,B.D(k.b4p(3,340,B.at(k.pE(340,340),j,j,j),350),1)],x.p),A.af,j,A.e,A.j,0,A.p)
case 7:w=k.uH(824,!0)
v=B.aY(h.x)
u=Date.now()
u=C.byu(new B.Q(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Q_(i,13,h.ch?B.aY(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bk,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1M(h.Q,24,1.15,A.cx,A.O),j,j,j))
v.push(A.b7)
if(k.gawG())v.push(k.awF(230,250))
return B.u(B.a([w,A.ay,B.D(B.B(B.a([new B.a3(230,j,B.u(v,A.af,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aY(h.w),j,j,j,j,j,A.acp,j,j,j,1.2),new B.a3(570,j,B.u(B.a([k.a92(570,A.be,3,62,28),k.cot(570,A.be,20),A.P,k.anI(!1),A.P,B.at(k.pE(570,330),j,j,j),k.Up(570),A.T,B.D(k.aLv(2,!1,17),1)],t),A.af,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.af,j,A.e,A.j,0,A.p)
case 8:w=k.uH(824,!0)
v=h.ch
u=v?B.aY(h.x):B.aY(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Q_(i,13,v?A.x:B.aY(h.x),3,A.u),j,j,j)
s=x.p
return B.u(B.a([w,A.ab,B.p(j,B.u(B.a([t,A.ar,k.MZ(788,A.be,v?A.x:B.aY(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bhu,j,j,j),k.b1t(824,A.be),A.T,B.at(k.pE(824,310),j,j,j),k.Up(824),A.P,k.LW(),A.T,B.D(k.a6O(3),1)],s),A.af,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.u(B.a([k.uH(824,!0),A.aO,new B.am(A.W,j,A.a9,A.q,B.a([k.pE(824,430),B.an(18,k.c0d(k.c.b,17),j,j,18,j,j,j)],w),j),A.bt,k.avV(824,3,66),k.b1x(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.asL(),A.ay,B.D(k.UA(2,18),1)],w),A.af,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.u(B.a([k.uH(824,!0),A.bt,new B.a3(j,500,B.B(B.a([new B.a3(410,j,B.u(B.a([k.abt(k.c.b,B.aY(h).j(0.14),15,B.aY(h)),A.aO,k.aZL(410,4,58,28),k.axm(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),V.aI7,k.pE(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asL(),A.aO,B.D(k.UA(2,18),1)],w),A.af,j,A.e,A.j,0,A.p)
case 12:w=k.uH(824,!0)
v=k.pE(824,420)
u=B.hf3(-0.25)
t=B.aY(h.x)
s=B.a([new B.aa(0,A.G,A.x.j(0.4),A.J,10)],x.V)
r=x.p
return B.u(B.a([w,A.aO,new B.am(A.W,j,A.a9,A.q,B.a([v,B.an(22,B.fn(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cpr(i,30,A.c,1,A.cx,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bjo,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bt,k.avV(824,3,62),k.b1x(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.aSN(A.kZ),A.ay,B.D(k.UA(2,18),1)],r),A.af,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uH(824,!0)
u=h.w
t=x.p
w=B.a([k.pE(824,380),B.an(j,k.abt(w.b,B.aY(u).j(0.85),15,B.aY(h.f)),j,j,16,j,16,j)],t)
s=k.avV(824,2,60)
r=k.coF(824,2)
p=k.asL()
o=B.D(k.aLv(2,!1,18),1)
n=B.H(B.aY(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aY(h).j(0.05)
return B.u(B.a([v,A.aO,new B.am(A.W,j,A.a9,A.q,w,j),A.aO,s,r,A.T,p,A.ay,o,A.ab,B.p(j,B.B(B.a([B.bu(B.m(14),k.rM(150,104),A.ap),A.nG,B.D(B.u(B.a([k.abt("RELATED",B.aY(h).j(0.14),12,B.aY(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.axs(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.R,0,A.p),1),B.V(A.ek,B.aY(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.af,j,A.e,A.j,0,A.p)
case 9:return B.u(B.a([k.uH(824,!0),A.bt,k.a92(824,A.be,3,62,30),k.axj(824,A.be,2,22),A.T,k.anI(!1),A.T,B.at(k.pE(824,330),j,j,j),k.aKt(824,A.be),A.aO,B.D(k.bAG(2,40,21),1)],x.p),A.af,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.bT(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aC,A.w,B.a([B.aY(p),B.aY(q.r)],x.O),s,s),A.n),A.ba),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b1(s,s,s,new C.b5o(B.aY(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bjT,B.u(B.a([B.D(t.c6W(),1),A.P,B.p(s,s,A.h,B.aY(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1K(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Q_(r,11,B.aY(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hz,A.j,0,s,s)],o),A.af,s,A.e,A.j,0,A.p),s))
v=B.aY(w)
n.push(B.bZ(0,B.e1(B.b1(s,s,s,new C.bnE(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.aY(p).j(0.75)
v=B.H(B.aY(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hO(B.fD(q,A.A,s,s,A.ci,A.bO,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.m3,B.aY(w),s,s,s,28))
o.push(A.aa)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axu(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e1(B.d7(B.p(s,B.B(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bkW,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a3(900,1260,B.jz(new B.am(A.W,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8Q.prototype={
iH(d){return C.fVw(d)},
jj(d){return!1}}
C.b8P.prototype={
a6(d,e){var w,v=C.fVw(e)
$.a_()
w=B.N()
w.r=this.b.gq(0)
w.b=A.ad
w.c=6
return d.aQ(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bq7.prototype={
iH(d){var w,v,u,t,s,r,q,p,o=new B.f0()
o.dX(3)
w=$.a_()
v=B.a([],x.v)
u=new B.aR(w.r,A.aq,null,null,v)
u.E(new B.b7(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ao(s,o.ae()*14)
v.push(w)
r=u.f
if(r!=null)w.bC(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ao(t,8))
w=d.b
r=w-8
u.E(new B.ao(t,r))
for(;t>0;t-=14){q=new B.ao(t,w-o.ae()*14)
v.push(q)
p=u.f
if(p!=null)q.bC(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ao(0,r))
u.E(new B.bE())
return u},
jj(d){return!1}}
C.b5o.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f0()
k.dX(7)
$.a_()
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
w.sar(new B.bR(A.A,0.5,A.w,l,0,B.a([A.IK.j(0.13),A.K],v),l,l).az(0,B.bV(new B.v(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
aq(d){return!1}}
C.bnE.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.iS(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.cn,u,A.eE,A.cm)
s.fq()
w=d.a
J.bH(w.save())
w.translate(t/2,e.b*0.52)
d.kG(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.v(-v/2,-t.gbh(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.TV.prototype={
S(){return new C.aBf()}}
C.aBf.prototype={
Z(){var w=this
w.a0()
B.h1c(w.a.c,null).bw(new C.e6Q(),x.g7).bw(new C.e6R(w),x.a)
w.a.toString},
gaJi(){var w=D.apP[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gatQ(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJi()
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
return new B.ac(q,w,q+s,w+t)},
XL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e6D(r))
t=4
q=r.gatQ()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.a_()
n=new B.rt()
m=B.FE(n,null)
i=B.N()
i.Q=A.fK
m.Ax(g,q,new B.ac(0,0,0+p,0+o),i)
w=7
return B.b(n.pO().yn(J.fLe(p),J.fLe(o)),$async$XL)
case 7:l=e
w=8
return B.b(l.hf(A.fM),$async$XL)
case 8:k=e
j=r.c
if(j!=null){j=B.a8(j,!1)
i=k
i.toString
j.M(J.f2(J.w2(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e6E(r))
r.c.G(x.q).f.P(D.evj)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XL,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kE,s,s,s,new C.e6K(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bI(!1,D.f4Z,s,s,!0,s,s,t.y||r==null?s:t.gc0e(),s,s)],p),s,s,!0,!0,A.zo,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.f8F,s,s,s,1,s,!0)
if(r==null)p=A.lM
else{w=B.D(new B.C(A.c2,B.at(new B.fJ(t.gaJi(),B.cj(new C.e6L(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.kv,B.jQ(s,s,s,new B.x(D.apP[u].a,s,E.aJQ,s,s,s,s,s,s,s,s,s),s,new C.e6M(t,u),t.e===u,s,s,s,s),s))
p=B.u(B.a([w,B.p(s,B.bq(!0,B.u(B.a([new B.a3(s,40,B.cL(v,s,s,s,s,A.aZ,!1),s),B.B(B.a([D.bzO,B.D(B.mb(s,s,s,6,1,new C.e6N(t),t.f),1),D.bzp],p),A.m,s,A.e,A.j,0,s,s),D.f2C,A.ar,B.bI(!1,D.f2n,s,s,!0,s,s,new C.e6O(t,d),s,s)],p),A.m,s,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,D.TV,s,s,s,s,s,s,D.bgP,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cd(q,A.zo,p,s,!1,!1,s,s)}}
C.b8m.prototype={
a6(d,e){var w
$.a_()
w=B.N()
w.Q=A.ci
return d.Ax(this.b,this.c,new B.ac(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.YT.prototype={
S(){var w=$.au(),v=x.A
return new C.aCy(new B.ap(A.as,w),new B.ap(new B.bc("NGMY",A.b0,A.aM),w),new B.cn(null,v),new B.cn(null,v),A.d.gK(D.a_L),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o6.prototype={}
C.aCy.prototype={
gaR_(){var w,v,u=this
if(u.p1)w=new B.wo(1,u.p2,0.9,u.p3).iF().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eDx(w))},
p(){var w=this.d,v=$.au()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tt().jT(0,"assets/images/ngmy_logo.png"),$async$Wv)
case 7:q=e
p=J.f2(J.w2(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bze(new B.pi(p,1),o),$async$Wv)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eCp(r,p))
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
return B.i($async$Wv,v)},
O4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kE(92,1800,A.eu),$async$O4)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$O4)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bze(new B.pi(p,1),n),$async$O4)
case 9:if(r.c==null){w=1
break}r.n(new C.eCN(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a5(l)
n=r.c
if(n!=null)n.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O4,v)},
aZ9(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aK=w.aA=w.au=w.Y=w.b3=w.be=w.y2=0
w.b_=null
w.aX=0.25
w.b7=null
w.bF=0.5
w.aO=1
w.c4=w.bP=w.bf=0
w.cT=w.cQ=!1},
aSx(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bw_(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cVt)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bw_(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bw_(C.fGp(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bw_(C.fGp(1-a0*0.5,n,n,n),w)}return a1?C.bw_(C.fGp(-1,255,255,255),w):w},
axr(){var w,v,u=B.ae("\\S+",!0,!1,!1,!1).kv(0,this.d.a.a),t=B.z(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yh(u,v,w)
this.dx.pv(new C.eCX(t),!0)
return t},
b0D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axr()
w=C.hLK(e.d.a.a,e.db)
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
return C.hIf(d,k,v,a0,j,e.gaR_(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cmy(){return this.b0D(null)},
C1(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gm5(),$async$C1)
case 3:w=4
return B.b(B.bM(A.eS,null,x.H),$async$C1)
case 4:w=5
return B.b($.aT.gm5(),$async$C1)
case 5:s=$.aT.af$.x.h(0,t.r)
r=s==null?null:s.gb5()
if(!(r instanceof B.q1)){u=null
w=1
break}w=7
return B.b(r.lQ(1080/r.gX(0).a),$async$C1)
case 7:w=6
return B.b(e.hf(A.fM),$async$C1)
case 6:q=e
u=q==null?null:J.f2(A.dA.gaL(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C1,v)},
a7E(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7E=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eC8(q))
t=4
w=7
return B.b(q.C1(),$async$a7E)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cO.gcs().aF(p)
n=C.Aw(null,null,null,null,D.nA,6,!1,null,null,null,null,null,C.cy(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0D(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a8(l,!1).M(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a5(j)
l=q.c
if(l!=null)l.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eC9(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7E,v)},
zs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eC6(q))
t=4
w=7
return B.b($.aT.gm5(),$async$zs)
case 7:w=8
return B.b(B.bM(A.o3,null,x.H),$async$zs)
case 8:w=9
return B.b($.aT.gm5(),$async$zs)
case 9:k=$.aT.af$.x.h(0,q.f)
p=k==null?null:k.gb5()
if(!(p instanceof B.q1))throw B.R("The picture is not ready yet.")
w=10
return B.b(p.lQ(1080/p.gX(0).a),$async$zs)
case 10:o=e
w=11
return B.b(o.hf(A.fM),$async$zs)
case 11:n=e
if(n==null)throw B.R("Could not make the picture.")
w=12
return B.b(A5.ae0(J.f2(A.dA.gaL(n)),"ngmy_quote.png","image/png"),$async$zs)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.G(x.q).f
k.P(B.b0(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a5(i)
k=q.c
if(k!=null)k.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eC7(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zs,v)},
ca0(){var w=this.p4
w.toString
return B.cj(new C.eCG(this,w))},
aUU(d,e){var w=null
return B.bm(w,w,w,w,w,D.eF7,w,w,!0,new B.b2(4,B.m(16),N.vK),w,w,w,w,w,D.rj,!0,w,w,w,w,new B.b2(4,B.m(16),D.aQd),w,w,w,w,w,w,w,w,A0.BU,e,w,w,w,w,w,w,w,D.eK9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wT(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b2,w,w,w,15),A.bq],v))
u.push(B.d(d,w,w,w,w,w,w,D.aKC,w,w,w))
return new B.C(D.beN,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aUT(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.Y,!0,w,d,A.h,w,0,w,w,w,w,w,A.jk),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uM(d){return this.aUT(d,A.bB)},
ny(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t3:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j_,r,r,r,16),A.bq],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j_,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aH(r,B.di(r,B.B(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hP,r,r,r,A.DF,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
adh(d,e,f){return this.ny(d,null,e,f)},
atU(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b2.j(0.28):A.c.j(0.05),t=g?A.ev:A.bG,s=x.p
v=B.a([B.di(w,d,w,w,A.b8,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hP,w,e,w,new B.M(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aH(w,new B.a3(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aUX(d,e,f,g,h,i){return this.atU(d,e,f,g,h,5,i)},
jK(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eCf,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aH(u,D.dOz,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eCT(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJI,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VT,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asw(w).cA7(A.b2,A.bG,A.b2.j(0.2),A.c,D.emE,4)
return new B.C(A.wp,B.u(B.a([s,B.a7Q(B.mb(u,u,u,g,f,new C.eCU(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
afg(d,e,f,g,h,i){return this.jK(d,e,f,g,h,null,i)},
afG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dv:B.aY(u)
r=d==u
q=r?A.c:A.bf
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bsZ:o
n.push(B.aH(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eCW(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.c8(A.bH,n,A.bx,10,10)},
bEL(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_L
else{v=x.a8
w=B.z(new B.a4(D.a_L,new C.eBZ(o),v),v.k("G.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aUU("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eC_(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4s,!0,A.a6,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aUU("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eC0(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a6,n,A.am,n,n,n,n)
t=o.wT("DESIGNS",A.rT)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cz3[q]
r.push(new B.C(A.kv,o.adh(p,o.x===p,new C.eC1(o,p)),n))}return B.u(B.a([v,A.T,u,t,B.ch(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aZ),A.ab,new B.a3(n,118,B.hG(n,new C.eC2(o,w),w.length,n,n,A.aZ,new C.eC3(),!1),n),A.P,o.aUT(B.u(B.a([B.iv(A.b2,n,n,A.ah,!0,new C.eC4(o),n,D.eVs,n,D.eS5,o.k3),B.iv(A.b2,n,n,A.ah,!0,new C.eC5(o),n,n,n,D.ePv,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acT)],s),A.F,n,A.e,A.j,0,A.p)},
cuN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axr()
if(a7.length===0)return a5.uM(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hm,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ae('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.an(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gai(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("ck.E"))
A.d.fz(m)
l=m.length!==0&&A.d.e9(m,new C.eDm(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eDt(a5)
j=new C.eDv()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hm,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b3(11,11)
f=u.t(0,h)?A.b2.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ev:A.bG
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.an(w,a0,a0+e[0].length)
a0=B.ae("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aH(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Kg,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eDn(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uM(B.c8(A.bH,o,A.qY,6,6))
i=B.a([a5.ny("All words",K.agW,!1,new C.eDo(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adh("Sentence "+a3,!1,new C.eDp(a5,a7,v,a2)))
a2=a3}}i.push(a5.adh("Clear picks",!1,new C.eDq(a5)))
i=B.c8(A.bH,i,A.bx,8,8)
g=a5.wT("SIZE OF THE PICKED WORDS",D.agn)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d_q[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eDr(e,k)
f.push(a5.adh(a0.b,l===a4,e))}return B.u(B.a([q,A.T,o,A.T,i,g,B.c8(A.bH,f,A.bx,8,8),A.T,a5.ny("Make every word normal",A.mG,!1,new C.eDs(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cq8(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.blX,B.d(A.d.kZ(D.arq,new C.eD5(q)).b,p,p,p,p,p,p,D.eDI,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cj(new C.eD6(q)),l=q.wT("HIGHLIGHT BEHIND THE WORDS",A.XG),k=q.p1?-1:q.k4
k=q.afG(k,new C.eD7(q),D.cIG)
w=q.p1
v=w?A.c:A.bf
n=B.a([n,A.T,m,l,B.c8(A.bH,B.a([k,B.aH(p,B.p(p,D.bvV,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.exV,A.a5),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDa(q),p,p,p,p,p,p,!1,A.ae)],o),A.qY,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hm,p,p,p)],o)
if(q.gaR_()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.afg("Colour",l,0,360,new C.eDb(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.afg("Shade",k,0.15,0.9,new C.eDc(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jK("Strength",l,0.15,1,new C.eDd(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uM(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wT("LOOK",A.xd))
m=B.a([q.ny("Bold",I.agk,q.fy,new C.eDe(q)),q.ny("Italic",I.agl,q.go,new C.eDf(q))],o)
for(u=0;u<3;++u){l={}
k=D.cA9[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t3:p
w=w?p:A.c.j(0.07)
s=new B.b3(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aH(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDg(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.c8(A.bH,m,A.qY,8,8))
n.push(q.wT("COLOUR",A.nt))
n.push(q.afG(q.fx,new C.eDh(q),D.cSF))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hm,p,p,p))
n.push(q.wT("SIZE AND PLACE",A.EA))
m=q.fr
m=q.jK("Text size",m,0.5,1.6,new C.eD8(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uM(B.u(B.a([m,q.jK("Up / down",l,0.12,0.5,new C.eD9(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
ca1(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b2.j(0.6),A.r,1.6)
u=B.a([A.b2.j(0.18),A.bz.j(0.12)],x.O)
return B.aH(p,B.p(p,B.u(B.a([B.p(p,D.bB9,A.h,p,p,D.aT4,p,62,p,p,p,p,p,62),A.ay,D.eTd,A.ar,D.eXr],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rj,p,v,w,p,new B.a7(A.a3,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bi0,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaUW(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.B(B.a([B.bu(B.m(12),new B.a3(46,62,B.fD(o,A.A,120,p,A.ci,A.bO,!1,p,!1,p,p),p),A.ap),A.bc,B.D(B.u(B.a([D.eSO,A.P,B.c8(A.bH,B.a([q.ny("Change",A.kC,!1,q.gaUW()),q.ny("Remove",A.e4,!1,new C.eCK(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cPu[t]
u.push(q.ny(s.b,s.a,q.at===t,new C.eCL(q,t)))}u=B.c8(A.bH,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bUR(o)
break A}if(1===r){s=q.bTW()
break A}if(2===r){s=q.bAF()
break A}if(3===r){s=q.bGM()
break A}s=q.bCK()
break A}return B.u(B.a([v,A.ab,u,A.ay,s,A.T,new B.bG(A.a3,p,p,q.ny("Reset the whole picture",A.mG,!1,new C.eCM(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bUR(d){var w=this,v=x.p
return B.u(B.a([B.c8(A.bH,B.a([w.ny("Auto enhance",E.Xj,!1,new C.eCC(w)),w.ny("Make words easy to read",A.oe,!1,new C.eCD(w))],v),A.bx,8,8),A.ay,B.cj(new C.eCE(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bTW(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jK("Exposure",n,-1.5,1.5,new C.eCg(o),0,A.k.aa(n,1))
w=o.RG
w=o.jK("Brightness",w,-0.5,0.5,new C.eCh(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jK("Contrast",v,0.4,2,new C.eCi(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jK("Fade",u,0,1,new C.eCj(o),0,""+A.k.U(u*100))
t=o.aA
t=o.jK("Spotlight",t,0,1,new C.eCk(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jK("Darken",s,0,0.85,new C.eCl(o),0,""+A.k.U(s*100))
r=o.b3
r=o.jK("Vignette",r,0,0.9,new C.eCm(o),0,""+A.k.U(r*100))
q=o.aC
q=o.jK("Shade behind words",q,0,0.85,new C.eCn(o),0,""+A.k.U(q*100))
p=o.aK
return o.uM(B.u(B.a([n,w,v,u,t,s,r,q,o.jK("Shade top & bottom",p,0,0.85,new C.eCo(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bAF(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jK("Colour strength",q,0,2.2,new C.eBC(s),1,""+A.k.U(q*100))
w=s.to
w=s.jK("Warmth",w,-1,1,new C.eBD(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jK("Tint",v,-1,1,new C.eBE(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uM(B.u(B.a([q,w,v,s.jK("Shift colours",u,-180,180,new C.eBF(s),0,""+A.k.U(u)+"\xb0"),new B.bG(A.a3,r,r,s.ny("Negative",D.br1,s.y1,new C.eBG(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wT("COLOUR WASH",A.Lc)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.aqe)
t=B.a([u,v,s.afG(w,new C.eBH(s),q),A.P],t)
if(s.b_!=null){q=s.aX
t.push(s.uM(s.afg("Wash strength",q,0,0.9,new C.eBI(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bGM(){var w,v,u,t,s,r=this,q=r.y2
q=r.jK("Blur",q,0,24,new C.eCa(r),0,A.o.u(A.k.U(q)))
w=r.be
w=r.jK("Soft focus",w,0,1,new C.eCb(r),0,""+A.k.U(w*100))
v=r.au
u=x.p
v=r.uM(B.u(B.a([q,w,r.jK("Film grain",v,0,1,new C.eCc(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wT("LIGHT LEAK",H.agi)
q=r.b7
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.de(D.aqe,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.afG(q,new C.eCd(r),t),A.P],u)
if(r.b7!=null){q=r.bF
u.push(r.uM(r.afg("Leak strength",q,0,1,new C.eCe(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bCK(){var w,v,u,t,s=this,r=s.aO
r=s.jK("Zoom",r,1,3,new C.eBM(s),1,""+A.k.U(r*100)+"%")
w=s.bf
w=s.jK("Left / right",w,-1,1,new C.eBN(s),0,""+A.k.U(w*100))
v=s.bP
v=s.jK("Up / down",v,-1,1,new C.eBO(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.u(B.a([s.uM(B.u(B.a([r,w,v,s.jK("Turn",u,-180,180,new C.eBP(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.c8(A.bH,B.a([s.ny("Turn 90\xb0",D.bsz,!1,new C.eBQ(s)),s.ny("Flip sideways",A.Ep,s.cQ,new C.eBR(s)),s.ny("Flip upside down",A.Ep,s.cT,new C.eBS(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXt(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.emQ,A.T,D.eUx,A.ay,B.aH(w,B.p(A.A,D.en0,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t3,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCF(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,A.c2,w,w,w)},
bUJ(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eCx(p),m=x.p,l=B.B(B.a([D.bm2,p.ny("Reset",A.mG,!1,new C.eCt(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hm,o,o,o),j=p.wT("SHAPE",A.ahr),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.AB[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aUX(n.$2(t,p.cy),62,u.b,s===t,new C.eCu(v,p),62))}}i=B.c8(A.bH,i,A.bx,8,8)
v=p.wT("RING",A.rO)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Aw[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aUX(n.$2(p.cx,t),62,r.b,q===t,new C.eCv(s,p),62))}u=B.c8(A.bH,u,A.bx,8,8)
s=p.CW
return B.u(B.a([l,A.av,k,j,i,v,u,A.ab,p.uM(p.jK("Size",s,0.12,0.4,new C.eCw(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aXN(d){return new B.a3(null,d,new B.fJ(0.5625,B.cj(new C.eCQ(this)),null),null)},
cps(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t3:q
t=new B.b3(14,14)
s=D.cRp[w]
r=v?A.c:A.aA
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bF(1,A.bp,B.aH(A.c5,B.di(q,B.u(B.a([r,A.d5,new B.pN(A.e8,A.A,A.h,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bdI,q,q,q,A.hx,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eCZ(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bfO,A.lY,q,q,q)},
aM0(){var w,v,u=this,t=null,s=u.cps(),r=u.as
A:{if(0===r){w=u.bEL()
break A}if(1===r){w=u.cuN()
break A}if(2===r){w=u.cq8()
break A}if(3===r){w=u.ca1()
break A}if(4===r){w=u.bUJ()
break A}w=u.bXt()
break A}v=x.p
return B.bu(A.pN,B.ec(B.u(B.a([s,B.D(B.cL(B.a([w],v),t,D.bgQ,t,t,A.aj,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.TV,!0),A.ap)},
aIg(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc0F(),p=B.m(16)
q=B.D(B.aH(r,B.p(r,D.en9,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.bf,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbGn()
w=B.m(16)
v=B.a([new B.aa(0,A.G,A.bz.j(0.35),A.cs,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.erE)
else t.push(D.bv1)
t.push(A.aa)
t.push(D.bny)
return B.p(r,B.B(B.a([q,A.aw,B.D(B.aH(r,B.p(r,B.B(t,A.m,r,A.b6,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t3,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aSf,r,r,r,r,G.acH,r,r,r)},
aUV(){var w=null
return new B.C(U.VP,B.B(B.a([B.aF(w,w,w,w,A.mJ,w,w,w,new C.eCf(this),w,w,w,w,w,w),D.f7G,A.b7,D.bDl],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cd(w,A.zo,B.bq(!0,B.cj(new C.eDw(this)),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)}}
C.bbT.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f0()
m.dX(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.a_()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gq(0)
r=B.N()
r.r=A.x.j(0.2*s).gq(0)
for(s=d.a,q=0;q<u;++q){p=m.ae()*w
o=m.ae()*v
n=((q&1)===0?t:r).L()
s.drawRect(B.cp(new B.ac(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.qR.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lL.prototype={}
C.yx.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nj.prototype={}
C.vc.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5W.prototype={}
C.aoy.prototype={}
C.Zo.prototype={
S(){return new C.aEs(new B.ap(A.as,$.au()),B.k9(!0,null,!0,!0,null,null,!1),D.deT,B.a([],x.s),B.eN([D.Gg],x.Q))}}
C.aEs.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.f.p()
this.a2()},
Z2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Z2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B0(90,700,700,A.eu),$async$Z2)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Z2)
case 8:p=e
if(r.c!=null)r.n(new C.eJr(r,p,q))
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
return B.i($async$Z2,v)},
Z5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Z5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hR().aDE(78,n,1100,1100),$async$Z5)
case 7:q=e
if(J.ci(q)){w=1
break}p=B.bj(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.a9(p)>=20){w=9
break}w=10
return B.b(o.f7(),$async$Z5)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cg(p,"data:"+k+";base64,"+A.cO.gcs().aF(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eJs(r,p))
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
return B.i($async$Z5,v)},
aZK(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fD(A.cw.aF(A.d.gai(d.split(","))),A.A,u,u,A.ci,A.bO,!0,u,!1,u,u)
return w}catch(v){}return D.bcg},
bUP(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ckK(C.fix(w,this.aZK(d),f),g)},
a9U(d,e,f,g,h){var w=null,v=new C.eJp(f,e),u=new C.eJq(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b2.j(0.6),A.r,1)
if(p)p=new B.a3(34,30,new B.am(A.W,w,A.a9,A.h,B.a([B.at(B.V(f?A.Aj:A.L0,A.c1,w,w,w,26),w,w,w),D.dTq],x.p),w),w)
else p=this.bUP(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.Y,!0,s,B.aI(!1,r,!0,B.p(w,B.B(B.a([B.D(B.at(p,w,w,w),1),D.buJ],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.lZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJo(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aSD(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bu(B.m(8),B.fD(A.cw.aF(A.d.gai(h.split(","))),A.A,p,p,A.ci,A.bO,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.bn.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eO,p,p,p,20):q
n=B.a([n,A.aa,B.D(B.d(e,p,1,A.a2,p,p,p,A.a4x,p,p,p),1)],x.p)
if(f!=null)n.push(B.aH(p,D.YC,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.Y,!0,u,B.aI(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lo,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a68(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a68=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.flX(),$async$a68)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eJ7(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a5(n)
if(r.c!=null)r.n(new C.eJ8(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a68,v)},
abB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abB=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eJa(r))
w=1
break}if(r.x==null){m=B.ae("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eJb(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eJc(r))
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
return B.b(C.fhe(q,r.cx,j,new C.aYP(r.z,r.Q,r.as,r.at),new C.eJd(r),i,m,p,k),$async$abB)
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
n=B.a5(e)
if(r.c!=null)r.n(new C.eJe(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abB,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eq,g).w
g=B.aG(d,A.bP,g).w
w=B.at(B.p(h,h,A.h,h,h,new B.o(A.bf,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aH(h,B.p(h,D.bxR,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.aa(2,A.G,A.bn.j(0.5),A.J,24)],v),D.bGr,A.a5),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJF(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.YC,h,h,h,i.ax?h:new C.eJG(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbvQ()
v=B.a([new B.aa(0,A.G,A.b2.j(0.45),A.J,10)],v)
s.push(B.hA(B.aD(!1,A.Y,!0,h,B.aI(!1,h,!0,B.p(h,B.V(i.e==null?A.ux:A.hl,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uQ,A.a5),h,40,h,h,h,h,h,40),A.cE,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cE,h,h,A.ac),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bm(h,h,h,h,h,h,h,h,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b2(4,B.m(16),D.aPL),h,h,h,h,h,h,h,h,R.Ha,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.kv,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ag,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aK4,!0,A.a6,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eJH(i)
s=i.aSD(A.l_,q,r,i.gcas(),s)
r=i.z
r=B.D(i.a9U(new C.eJJ(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.u(B.a([s,A.ar,B.B(B.a([r,A.bq,B.D(i.a9U(new C.eJK(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eJL(i)
s=i.aSD(A.uv,r,p,i.gcaA(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.D(i.a9U(new C.eJM(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.ay,D.eYA,A.av,D.f0f,A.bt,u,A.P,D.eZN,A.ay,v,A.bt,B.B(B.a([q,A.aw,B.D(B.u(B.a([s,A.ar,B.B(B.a([p,A.bq,B.D(i.a9U(new C.eJN(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.f1T],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b5T,A.r,1)
w=C.aey(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bG(A.a3,h,h,B.p(h,B.B(B.a([D.byW,A.bq,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eIV,h,h,h),B.aI(!1,h,!0,D.dON,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eJO(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_W,h,u,v,h,h,A.n),h,h,h,h,D.bft,h,h,h),h)],t))}o.push(A.bt)
o.push(D.eQa)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cKD[m]
v=i.ch===l?A.b2:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bF(1,A.bp,new B.C(A.k2,B.aH(h,B.di(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a5),A.eG,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJP(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bt)
o.push(D.f61)
o.push(A.P)
o.push(B.cj(new C.eJQ(i)))
o.push(A.bt)
o.push(D.eWT)
o.push(A.P)
w=B.a([i.b1q("auto","Let AI choose",A.dP,A.NF)],t)
for(v=x.O,m=0;m<11;++m){j=D.uV[m]
u=j.d
w.push(i.b1q(j.a,j.b,j.c,B.a([B.aY(A.d.gK(u).a),B.aY(A.d.gK(u).b)],v)))}o.push(B.c8(A.bH,w,A.bx,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bn.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.iv(h,A.bn,h,h,h,new C.eJI(i),D.bua,D.f5j,h,D.eSh,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aJl,h,h,h)],t))
o.push(A.bt)
w=i.ax?h:i.gc0J()
v=B.ff(h,h,A.b2,A.b2.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.V),h,h,h,h,h)
u=i.ax
t=u?D.eru:A.ES
o.push(new B.a3(h,54,B.lf(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ov,h,h,h),w,v),h))
return new B.C(new B.M(0,0,0,f.f.d),B.p(h,B.bq(!0,B.ch(B.u(o,A.af,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ul,h,h,A.aj),!0,!1,A.ah,!0,!1),A.h,h,new B.aX(0,680,0,g.a.b*0.92),D.a77,h,h,h,h,h,h,h,h),h)},
bHQ(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eJf(this,p,d)
if(d===D.Bd)return new C.aB4(p,o,q)
w=B.m(16)
v=p?E.uQ:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.V(p?A.ej:C.hm1(d),A.c,q,q,q,20)
r=C.hm2(d)
return B.aH(q,B.di(q,B.u(B.a([s,A.av,B.eX(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b6,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hP,q,64,q,A.hj,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b1q(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.al:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.w,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aH(v,B.di(v,B.B(B.a([w,L.H3,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,L.adX,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eJu(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Zn.prototype={
S(){return new C.aEr(new B.ap(A.as,$.au()))}}
C.aEr.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
abC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abC=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.a9(a0)<3){r.n(new C.eJ0(r))
w=1
break}B.eG()
r.n(new C.eJ1(r))
t=4
q=C.hMD(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ae("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hMn(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eJ2(r,q))
w=1
break}k=r.c
if(k!=null)B.a8(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ae("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fG5()
f=$.Bu.h(0,k.a)
o=f==null||J.ci(f)?null:J.fh(f)
if(o==null){r.n(new C.eJ3(r))
w=1
break}n=C.hMl(o,r.a.c)
C.hMh(r.a.c.a)
$.fFn=!0
k=r.c
if(k!=null)B.a8(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fII(j)
h=C.fIJ(r.a.c)
e=C.fIK(r.a.c)
w=7
return B.b(C.bya(k,r.a.c.a,j,h,new C.eJ4(r),i,e,a0),$async$abC)
case 7:m=a3
k=r.c
if(k!=null)B.a8(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a5(a1)
if(r.c!=null)r.n(new C.eJ5(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eq,i).w
i=B.aG(d,A.bP,i).w
w=B.at(B.p(j,j,A.h,j,j,new B.o(A.bf,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ahI,A.h,j,j,D.aRW,j,34,j,j,j,j,j,34),A.aw,D.bmA],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,R.aJM,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bm(j,j,j,j,j,j,j,j,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b2(4,B.m(16),Al.a6D),j,j,j,j,j,j,j,j,R.Ha,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aK4,!0,A.a6,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cHf[q]
o=A.c.j(0.06)
n=k.e?j:new C.eJ6(k,p)
r.push(B.mJ(j,o,new B.x(p,j,Ar.QP,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vK,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.c8(A.bH,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ab,B.d(u,j,j,j,j,j,j,D.aJl,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc0K()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bn.j(0.5),A.fv.j(0.5)],x.O):D.cgm
o=B.a([new B.aa(0,A.G,A.bn.j(0.35),A.cs,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dOJ:D.byv
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.Y,!0,j,B.aI(!1,s,!0,B.eq(B.B(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.j8,j,j,j)],v),A.m,j,A.b6,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.C(new B.M(0,0,0,h.f.d),B.p(j,B.bq(!0,B.ch(B.u(w,A.af,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ul,j,j,A.aj),!0,!1,A.ah,!0,!1),A.h,j,new B.aX(0,680,0,i.a.b*0.85),D.a77,j,j,j,j,j,j,j,j),j)}}
C.aYP.prototype={}
C.aB4.prototype={
S(){return new C.bgt(null,null)}}
C.bgt.prototype={
gatV(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.oX,null,1,null,v)
w.cF(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gatV().p()
this.bpY()},
B(d){var w=null,v=this.a.d
return B.aH(w,B.c4(this.gatV(),new C.e1N(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.be5.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cMz[s]
p=q.a*v
q=q.b*u
$.a_()
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=D.we.j(0.25+r*0.6).gq(0)
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
gafD(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeL(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzd(){var w=this.e
return w===$?this.e=C.fII(this.a.c).t(0,D.Bd):w},
a5W(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5W=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.dba(s))
u=3
r=A.d.kZ(D.uV,new C.dbb(s))
q=B.d6(C.fII(s.a.c),x.Q)
l=q
J.hC(l,D.Bd)
p=l
if(s.gzd())J.cg(p,D.Bd)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzd()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fIJ(i.c)
g=C.fIK(s.a.c)
w=6
return B.b(C.bya(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5W)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeL(q,s.gafD())
f=q==null?null:q.b
n=f==null?s.gafD():f
if(!J.y(n,r.a)&&!s.gzd())throw B.R("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a8(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a5(d)
if(s.c!=null)s.n(new C.dbc(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5W,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.ai,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.D(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dbf(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.V(A.ct,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uV[w]
u=o.gafD()
t=o.f?n:new C.dbg(o,v)
f.push(new C.boJ(v,u===v.a,t,n))}f=B.m_(1.25,f,3,10,10,n,A.dL,!0)
u=B.m(18)
t=o.gzd()?D.bJ4:n
if(o.gzd())s=n
else s=m?A.bi:A.bM
r=B.V(A.dP,o.gzd()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.al:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzd()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.aw,q,B.fDg(n,A.c,n,A.bI,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dbh(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acK,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.eJc,n,n,n)],g))
f=B.ch(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.K5,n,n,A.aj)
u=o.f?n:o.gbuQ()
t=B.bk(A.K,n,n,n,n,n,A.ah,n,new B.b5(B.m(16),A.V),n,n,n)
s=B.m(16)
return B.bq(!0,B.p(n,B.u(B.a([new B.C(D.biu,e,n),new B.dp(1,A.cj,f,n),new B.C(A.DM,new B.a3(1/0,50,B.bK(B.eq(B.at(o.f?A.qQ:D.eZ1,n,n,n),n,new B.o(n,n,n,s,n,D.bHI,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rE,n,n,n,n),!0,!1,A.ah,!0,!0)}}
C.boJ.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.aY(s),B.aY(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.aa(0,A.G,B.aY(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bG(A.kO,w,w,B.V(v.c,A.al,w,w,w,18),w),new B.bG(A.lb,w,w,B.d(v.b,w,w,w,w,w,w,D.eJa,w,w,w),w)],x.p)
if(q)v.push(D.aNU)
return B.aH(w,B.di(w,new B.am(A.W,w,A.a9,A.q,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aC,A.w,r,w,w),A.n),A.eG,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e1K.prototype={
aBh(d,e,f){return e+"@"+A.a.aT(A.o.fF(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vG(d,e){return this.aBh(0,e,null)}}
C.aIY.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aYL.prototype={
B(d){var w,v,u=null,t=C.fHy(this.c)
if(t==null)w=D.bb2
else{w=B.aG(d,u,x.w).w.czA(D.bf0,D.eqK)
v=this.d
w=B.tR(B.e1(B.alx(!1,t,!1,v,!1,390),!v,u),w)}return B.eX(A.A,new B.a3(416,870,new C.bi5(w,u),u),A.h,A.dp)}}
C.bi5.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cX3[w]
u=new B.b3(3,3)
s.push(new B.cF(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajB,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cY7[w]
u=new B.b3(3,3)
s.push(new B.cF(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajB,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.bT(t,new B.o(t,t,t,B.m(64),D.cxV,D.bG9,A.n),A.ba),0,0,0))
s.push(B.bZ(3,B.bT(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.ba),3,3,3))
s.push(B.bZ(13,B.bu(B.m(51),B.ec(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.at(B.p(D.aO4,B.p(t,t,A.h,t,t,D.aSd,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bu(B.m(51),D.bcm,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e1(B.at(B.p(t,t,A.h,t,t,new B.o(A.al,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.W,t,A.a9,A.h,s,t)}}
C.kX.prototype={
oO(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cy(),f=C.cy(),e=m.r
f=C.ei(A.L,!1,e.l(),A.az,"",k,42,A.bg,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bb,j,2,"Your Presentation Title",0,0,"",D.mb,D.cM,0.84,0.08,0.26)
w=C.cy()
v=m.w
w=C.ei(A.L,!1,v.l(),A.az,"",k,20,A.bg,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.bb,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.db,D.cM,0.76,0.12,0.56)
u=C.cy()
t=m.d
s=x.u
t=C.qS(i,l,0,0,B.a([f,w,C.ei(A.be,!1,4279310375,A.az,"",t.j(0.8).l(),24,A.bg,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fh,t.l(),3,"",0,0,"",D.cd,D.eT,0.3,0.35,0.72)],s),C.cy(),D.ma,"","","Welcome",D.db)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,34,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bb,j,2,"Agenda",0,0,"",D.cd,D.cM,0.84,0.08,0.08)
w=C.cy()
w=C.qS(i,l,0,0,B.a([u,C.ei(A.be,!0,v.l(),A.az,"",k,22,A.bg,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.bb,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ti,D.cM,0.8,0.1,0.26)],s),C.cy(),D.ma,"","","Agenda",D.db)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,32,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bb,j,2,"Main Idea",0,0,"",D.cd,D.cM,0.84,0.08,0.08)
f=C.cy()
f=C.qS(i,l,0,0,B.a([u,C.ei(A.be,!0,v.l(),A.az,"",k,21,A.bg,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.bb,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cd,D.cM,0.8,0.1,0.26)],s),C.cy(),D.ma,"","","Key Point 1",D.db)
u=C.cy()
u=C.ei(A.be,!1,e.l(),A.az,"",k,30,A.bg,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bb,j,2,"Compare & Contrast",0,0,"",D.cd,D.cM,0.84,0.08,0.08)
r=C.cy()
r=C.ei(A.be,!0,v.l(),A.az,"",k,18,A.bg,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.bb,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cM,0.4,0.08,0.24)
q=C.cy()
q=C.qS(i,l,0,0,B.a([u,r,C.ei(A.be,!0,v.l(),A.az,"",k,18,A.bg,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.bb,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cM,0.4,0.52,0.24)],s),C.cy(),D.ma,"","","Key Point 2",D.db)
r=C.cy()
r=C.ei(A.L,!1,e.l(),A.az,"",k,48,A.bg,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bb,j,2,h,0,0,"",D.db,D.cM,0.8,0.1,0.32)
e=C.cy()
p=C.Aw(l,l,l,l,D.B9,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qS(i,l,0,0,B.a([r,C.ei(A.L,!1,v.l(),A.az,"",k,22,A.bg,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.bb,j,2,"Questions?",0,0,"",D.cd,D.cM,0.7,0.15,0.58)],s),C.cy(),D.ma,"","",h,D.db)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Do.prototype={
bC(d){return this.e.$1(d)}}
C.ek.prototype={}
C.iN.prototype={}
C.Df.prototype={
gaGO(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aey(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1h(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Df(v,u,t,d==null?w.d:d)},
Em(d){return this.a1h(null,d,null,null)},
aA3(d){return this.a1h(null,null,null,d)},
czy(d,e){return this.a1h(d,e,null,null)},
b6v(d){return this.a1h(d,null,null,null)},
b6C(d){return this.a1h(null,null,d,null)}}
C.LM.prototype={
S(){return new C.bfQ(new B.eL(0,$.au()),null,null)}}
C.bfQ.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(new C.dLw(v))
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
this.bpq()},
B(d){var w=C.aey(this.a.c.a)
if(w==null)w=A.d.gK(D.Fb)
return B.cj(new C.dLv(this,w,C.fXj(this.a.c.d)))}}
C.bnj.prototype={
B(d){return B.np(A.Su,this.e,new C.eIe(this,A.k.H(this.d*0.35,1.6)-0.3))}}
C.baZ.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOw(d,e,v)
break
case"confetti":w.bB9(d,e,v)
break
case"crown":w.bCL(d,e,v)
break
case"aurora":w.bvU(d,e,v)
break
case"champagne":w.bz1(d,e,v)
break
case"diamonds":w.bEU(d,e,v)
break
case"starburst":w.cnd(d,e,v)
break
case"balloons":w.bw7(d,e,v)
break
case"galaxy":w.bJw(d,e,v)
break
case"redcarpet":w.cew(d,e,v)
break
case"coins":w.bAx(d,e,v)
break
case"lanterns":w.bTu(d,e,v)
break
case"hearts":w.bRb(d,e,v)
break
case"petals":w.c9U(d,e,v)
break
case"butterflies":w.by4(d,e,v)
break
case"neon":w.bXd(d,e,v)
break
case"disco":w.bF4(d,e,v)
break
case"sunrise":w.coH(d,e,v)
break
case"pearls":w.c8Y(d,e,v)
break
case"snow":w.cmV(d,e,v)
break
case"laurel":w.bTA(d,e,v)
break
case"ribbons":w.cgZ(d,e,v)
break
case"kente":w.bTj(d,e,v)
break
case"trophy":w.cse(d,e,v)
break
case"shooting":w.ckO(d,e,v)
break
case"bokeh":w.bwo(d,e,v)
break
case"orbits":w.c6G(d,e,v)
break
case"flowers":w.bIP(d,e,v)
break
case"music":w.bWZ(d,e,v)
break
case"mandala":w.bVq(d,e,v)
break
case"sparklers":w.cn3(d,e,v)
break
case"city":w.bzR(d,e,v)
break}},
qI(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a_()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gq(0)
v.a=A.n1
u=new B.aR(w.r,A.aq,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b7(w,s))
u.E(new B.d_(w,t,w+f,t))
u.E(new B.d_(w,t,w,t+f))
u.E(new B.d_(w,t,w-f,t))
u.E(new B.d_(w,t,w,s))
u.E(new B.bE())
d.aQ(u,v)
d.ak(e,f*0.18,v)},
lg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cO(q,v)*2.5)+C.cO(q,u)*6.28)+1)/2
this.qI(d,new B.v(C.cO(q,t)*o,C.cO(q,s)*n),m*(0.006+0.014*C.cO(q,r))*(0.5+p),h,p*p)}},
aOw(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lg(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bI,A.aX],w),B.a([A.ib,A.bz],w),B.a([A.es,A.b_],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bH(k/2.8)
i=A.k.H(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cO(h,1))
f=g+c0*(C.cO(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cO(h,3))
d=v[Math.abs(A.o.H(h,4))]
if(i<0.22){a0=B.l2(new B.v(g,c1),new B.v(f,e),A.co.av(0,i/0.22))
a0.toString
$.a_()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.sar(new B.a7(A.a3,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).az(0,B.qU(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bV
a2=B.l2(new B.v(g,c1),a0,0.75)
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
$.a_()
a8=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a8.r=d[0].j(0.5*a4).gq(0)
a8.z=new B.hH(A.G,o)
a3=a8.L()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cO(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cO(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a_()
b9=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
b9.r=b8.j(a8).gq(0)
b9.c=u
b9.d=A.bV
b9.a=A.n1
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cO(h,b1+120)>0.5)this.qI(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bB9(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.H(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a_(),a0=B.N()
a0.sar(new B.a7(A.ax,A.aC,A.w,D.cSm,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).az(0,new B.ac(0,0,f,e)))
a1.bd(new B.ac(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.H(a3*(h*(0.08+0.12*C.cO(u,1)))+C.cO(u,2)*w,w)
s=C.cO(u,3)
r=Math.sin(a3*(0.8+C.cO(u,4))+u)
q=h*(0.012+0.012*C.cO(u,5))
p=Math.cos(a3*(2+3*C.cO(u,6))+u)
o=D.N8[A.o.D(A.k.bH(C.cO(u,7)*5),0,4)]
J.bH(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cO(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gq(0)
if(A.o.H(u,5)===0){t=B.a([],v)
m=new B.aR(d.r,A.aq,null,null,t)
d=-q*2
t.push(new B.b7(d,0))
for(l=1;l<=8;++l){s=new B.ao(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bC(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a_()
t=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.r=B.aY(n.r).gq(0)
t.b=A.ad
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.d9(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.cp(t),k)
k.delete()}f.restore()}this.lg(a1,a2,a3,25,A.bI,30)},
bCL(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a_()
n=B.a([],r)
m=new B.aR(o.r,A.aq,a4,a4,n)
n.push(new B.b7(a5,a6))
o=p-0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.bI.j(0.22),D.b1v],v),a4,a4).az(0,B.bV(w,u)))
l=o.L()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aR($.a_().r,A.aq,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b7(a5,v))
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
if(s){n=B.N()
n.sar(new B.a7(A.b1,A.b5,A.w,D.cRk,a4,a4).az(0,new B.ac(a5,a6,o,v)))
a8.aQ(i,n)
for(v=[D.e0S,D.dWh,D.e9y],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hL.gq(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xW(i),u=B.a([],x.X),o=new B.wj(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jJ(y.M));--f
o.jN()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aR(n,v.b,a4,new B.cK([new B.FX(o,f),0,d*h,!0]),B.a([],r))
f=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.b=A.ad
f.c=g
f.e=A.fq
f.r=A.bI.gq(0)
l=f.L()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.H(b0*0.5,1)
this.qI(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lg(a8,a9,b0,45,A.bI,40)},
bvU(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lg(a8,a9,b0,60,A.c,50)
w=[D.ej3,D.eiM,D.eiH,D.ejW]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a_()
i=B.a([],p)
h=new B.aR(n.r,A.aq,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b7(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ao(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a_()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.b=A.ad
n.c=t
n.r=m.j(0.28).gq(0)
n.a=A.n1
n.z=new B.hH(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.b=A.ad
n.c=v
n.r=m.j(0.55).gq(0)
n.a=A.n1
n.z=new B.hH(A.G,v)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.H(t*(0.05+0.06*C.cO(a4,1))+C.cO(a4,2)*a3,a3)
r=C.cO(a4,3)
q=Math.sin(b0+a4)
p=C.cO(a4,4)
$.a_()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=A.wd.j(0.4+0.5*C.cO(a4,5)).gq(0)
n.a=A.n1
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bz1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a_(),a0=B.N()
a0.sar(new B.bR(A.A,0.5,A.w,l,0,B.a([A.hs.j(0.25+0.1*h),D.U0],x.O),l,l).az(0,B.bV(new B.v(g,f),e)))
a1.ak(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aR(d.r,A.aq,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b7(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ao(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bC(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a_()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.b=A.ad
a0.c=h
a0.r=D.N8[A.o.H(w,4)].j(0.7).gq(0)
p=a0.L()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.H(a3*(i*(0.07+0.12*C.cO(w,1)))+C.cO(w,2)*o,o)
r=k*(0.1+0.8*C.cO(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cO(w,4))
if(n<f){this.qI(a1,new B.v(r,n),m*2.4,A.bI,A.k.D(n/f,0,1))
continue}$.a_()
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
bEU(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lg(a9,b0,b1,30,A.kR,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cO(p,1))
n=a7+o*4
m=A.k.H(t*(0.04+0.06*C.cO(p,2))+C.cO(p,3)*n,n)-o*2
l=C.cO(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bH(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a_()
g=B.a([],q)
f=new B.aR(h.r,A.aq,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b7(e,i))
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
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.sar(new B.a7(A.ax,A.aC,A.w,D.cNx,a5,a5).az(0,B.d9(A.J,k*1.2,o)))
a2=g.L()
g=f.gbM().a.snapshot()
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
cnd(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a_()
o=B.a([],v)
n=new B.aR(p.r,A.aq,null,null,o)
o.push(new B.b7(h,g))
p=s-q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=A.bI.j(r?0.12:0.07).gq(0)
m=p.L()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.H(a0+l*0.6,1.8)/1.8
$.a_()
u=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
u.b=A.ad
r=1-k
u.c=v*r
u.r=A.bI.j(r*0.6).gq(0)
m=u.L()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bH(a0/2.4)
k=A.k.H(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cO(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bbJ.av(0,k)*(0.5+0.5*C.cO(t,v)))
this.qI(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cO(t,3)),D.N8[A.o.D(A.k.bH(C.cO(t,4)*5),0,4)],u)}},
bw7(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cO(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.H(q*(0.05+0.05*C.cO(o,2))+C.cO(o,3)*m,m)
j=C.cO(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqC[A.o.H(o,6)]
h=$.a_()
g=B.a([],s)
f=new B.aR(h.r,A.aq,a3,a3,g)
h=k+n*1.15
g.push(new B.b7(j,h))
for(e=1;e<=6;++e){d=new B.ao(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bC(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a_()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gq(0)
a1=d.L()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.d9(new B.v(j,k),n*2.3,l)
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d=B.aq(i,A.x,0.35)
d.toString
l.sar(new B.bR(D.aO7,0.9,A.w,a3,0,B.a([A.c,i,d],t),P.aqt,a3).az(0,a2))
a1=l.L()
u.drawOval(B.cp(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aR(g.r,A.aq,a3,a3,l)
d=n*0.12
l.push(new B.b7(j-d,h))
l.push(new B.ao(j+d,h))
l.push(new B.ao(j,k+n))
l.push(new B.bE())
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=B.aq(i,A.x,0.3).gq(0)
a1=l.L()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.H(q*(0.1+0.1*C.cO(o,11))+C.cO(o,12)*m,m)
r=C.cO(o,13)
J.bH(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.d9(A.J,t,v)
$.a_()
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=D.aqC[A.o.H(o,6)].j(0.85).gq(0)
a1=r.L()
u.drawRect(B.cp(s),a1)
a1.delete()
u.restore()}},
bJw(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lg(b1,b2,b3,50,A.c,70)
for(w=[D.ejb,D.eiS,D.eiY],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a_()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).az(0,B.bV(new B.v(r,m),l)))
j=k.L()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.H(i,3)
g=C.cO(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cO(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bI,A.ev,g)
k.toString
d=C.cO(i,3)
$.a_()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.r=k.j(0.5+0.5*C.cO(i,4)).gq(0)
a0.a=A.n1
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a_()
a9=B.N()
a9.sar(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.zc.j(0.55),D.aaz],u),a4,a4).az(0,B.bV(b0,a8)))
b1.ak(b0,a8,a9)
a1=A.k.H(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bH(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cO(a2,9)),a6*0.1*C.cO(a2,8))
a5=B.l2(a3,a3.ao(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l2(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a7(A.a3,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).az(0,B.qU(a3,a5)))
a8.c=a7*0.005
a8.d=A.bV
b1.bK(a6,a5,a8)}},
cew(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a_()
n=B.a([],s)
m=new B.aR(o.r,A.aq,b5,b5,n)
n.push(new B.b7(q,u))
o=p-0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(new B.bR(A.A,0.5,A.w,b5,0,B.a([A.zc.j(0.28),D.aaz],w),b5,b5).az(0,B.bV(new B.v(q,u),t)))
o.a=A.n1
l=o.L()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eZ:A.f0)
a9=$.a_()
b0=B.a([],s)
m=new B.aR(a9.r,A.aq,b5,b5,b0)
b0.push(new B.b7(a5?0:b6,0))
b0.push(new B.ao(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.d_(a9,k,a5?g:a1,b7))
b0.push(new B.ao(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a9.sar(new B.a7(A.a3,A.a7,A.w,a7,b5,b5).az(0,new B.ac(a6,0,a6+i,j)))
l=a9.L()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
b1.r=A.hs.gq(0)
b1.c=o
b1.d=A.bV
l=b1.L()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aR($.a_().r,A.aq,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b7(b6*0.42,w))
b2.E(new B.ao(b6*0.58,w))
b2.E(new B.ao(b6*0.8,b7))
b2.E(new B.ao(b6*0.2,b7))
b2.E(new B.bE())
v=B.N()
v.sar(D.bHB.az(0,new B.ac(0,w,0+b6,w+b7*0.22)))
b9.aQ(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.H(b7*(0.05+0.07*C.cO(r,1))+C.cO(r,2)*b3,b3)
u=C.cO(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qI(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cO(r,4)),A.bI,0.3+0.7*((q+1)/2))}},
bAx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cO(t,1))
r=h+s*4
q=s*2
p=A.k.H(u*(0.12+0.12*C.cO(t,2))+C.cO(t,3)*r,r)-q
o=C.cO(t,4)*i
n=Math.cos(f*(2+3*C.cO(t,5))+t)
m=Math.abs(n)
l=B.d9(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a_()
q=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.sar(new B.a7(A.ax,A.aC,A.w,n>0?D.d_W:D.clW,null,null).az(0,l))
k=q.L()
v.drawOval(B.cp(l),k)
k.delete()
q=-(s*0.22)
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.c=Math.max(0.6,s*0.08)
j.r=D.b9g.gq(0)
k=j.L()
v.drawOval(B.cp(new B.ac(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qI(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lg(d,e,f,30,A.bI,110)},
bTu(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lg(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cO(p,1))
n=a1+o*4
m=a1+o*2-A.k.H(t*(0.03+0.04*C.cO(p,2))+C.cO(p,3)*n,n)
l=C.cO(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a_()
h=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.sar(new B.bR(A.A,0.5,A.w,d,0,B.a([H.aaH.j(0.45*k),D.a9C],u),d,d).az(0,B.bV(new B.v(l,m),j)))
g=h.L()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aR(i.r,A.aq,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b7(l-i,e))
j.push(new B.ao(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ao(l+i,h))
j.push(new B.ao(l-i,h))
j.push(new B.bE())
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i=B.aq(D.b1E,A.c,0.2*k)
i.toString
j.sar(new B.a7(A.b1,A.b5,A.w,B.a([D.b5A,i],u),d,d).az(0,B.d9(new B.v(l,m),o*1.4,o)))
g=j.L()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=A.c.j(k).gq(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bRb(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cO(p,1))
n=a1+o*4
m=A.k.H(s*(0.05+0.06*C.cO(p,2))+C.cO(p,3)*n,n)
l=C.cO(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bH(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a_()
l=B.a([],t)
i=new B.aR(m.r,A.aq,d,d,l)
m=o*0.9
l.push(new B.b7(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p6(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p6(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cFk[A.o.H(p,5)]
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l=B.aq(f,A.x,0.25)
l.toString
m.sar(new B.bR(A.tR,0.5,A.w,d,0,B.a([A.c,f,l],u),H.ZK,d).az(0,B.bV(A.J,o*1.4)))
e=m.L()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lg(a3,a4,a5,30,A.ib,130)},
c9U(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cO(q,1))
o=g+p*4
n=A.k.H(t*(0.05+0.06*C.cO(q,2))+C.cO(q,3)*o,o)
m=C.cO(q,4)
l=Math.sin(s+q*0.7)
J.bH(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cO(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a_()
m=B.a([],u)
k=new B.aR(n.r,A.aq,i,i,m)
n=-p
m.push(new B.b7(0,n))
l=n*0.2
m.push(new B.d_(p,l,0,p))
m.push(new B.d_(n,l,0,n))
m.push(new B.bE())
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
m=(q&1)===0?D.cgl:D.cOG
n.sar(new B.a7(A.a3,A.a7,A.w,m,i,i).az(0,B.bV(A.J,p)))
j=n.L()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lg(d,e,a0,25,A.bI,140)},
by4(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lg(b0,b1,b2,40,A.bI,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cO(r,1))
p=Math.sin(b2*(0.15+0.1*C.cO(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cO(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bH(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bH(v.save())
v.scale(a1*n,1)
a2=$.a_()
a3=B.a([],u)
a4=new B.aR(a2.r,A.aq,a6,a6,a3)
a3.push(new B.b7(0,0))
a3.push(new B.p6(f,e,l,d,h,0))
a3.push(new B.p6(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.sar(new B.a7(A.a3,A.a7,A.w,i?D.cOq:D.cQR,a6,a6).az(0,new B.ac(0,m,k,j)))
a5=a2.L()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.b=A.ad
a2.c=Math.max(0.6,o)
a2.r=D.zi.gq(0)
a5=a2.L()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a_()
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=D.b8G.gq(0)
p.c=q*0.1
p.d=A.bV
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bXd(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.H(w+t/4,1)
r=f*(0.2+0.7*s)
$.a_()
q=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.c=v
q.r=D.arz[t].j((1-s)*0.9).gq(0)
q.z=new B.hH(A.G,v)
p=r*0.3
p=B.bN(B.d9(e,r,r*1.6),new B.b3(p,p))
o=q.L()
u.drawRRect(B.fs(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cO(m,1)*4)+m)))
k=D.arz[A.o.H(m,4)]
j=m*n+h
i=g-l
i=B.bN(new B.ac(j,i,j+w,i+l),new B.b3(v,v))
$.a_()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=k.j(0.85).gq(0)
j.z=new B.hH(A.a6q,p)
o=j.L()
u.drawRRect(B.fs(i),o)
o.delete()}},
bF4(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cO(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cO(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bI,A.oJ,A.dE][A.o.H(p,4)]
j=C.cO(p,3)
$.a_()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=k.j(0.75).gq(0)
i.a=A.n1
i.z=new B.hH(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a_()
t=B.N()
t.r=A.aA.gq(0)
t.c=1.2
a3.bK(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.N()
t.r=A.eP.gq(0)
a3.ak(v,u,t)
J.bH(q.save())
a1=new B.aR(a1.r,A.aq,null,null,B.a([],x.v))
a1.E(new B.ky(B.bV(v,u)))
a3.tj(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.H(a1,g)
i=Math.sin(e*1.7+l+s)
$.a_()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=B.aq(A.bu,A.c,0.4+0.6*((i+1)/2)).gq(0)
h=d.L()
q.drawRect(B.cp(new B.ac(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qI(a3,v.ao(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
coH(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.av(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a_()
q=B.a([],u)
p=new B.aR(r.r,A.aq,h,h,q)
q.push(new B.b7(d,a0))
r=s-0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.bI.j(0.1).gq(0)
o=r.L()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a_()
a0=B.N()
a0.sar(new B.bR(A.A,0.5,A.w,h,0,B.a([D.aZb.j(0.6),D.a9C],x.O),h,h).az(0,B.bV(a1,d)))
a2.ak(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.dUf.az(0,B.bV(a1,a0)))
a2.ak(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.H(d*(1+t*0.3)+C.cO(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=A.c.j(0.18).gq(0)
i=B.d9(new B.v(l,k),r,u)
o=j.L()
w.drawOval(B.cp(i),o)
o.delete()
i=B.d9(new B.v(l+q,k-n),r,m)
o=j.L()
w.drawOval(B.cp(i),o)
o.delete()}this.lg(a2,a3,a4,20,A.hL,180)},
c8Y(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a_()
q=B.a([],t)
p=new B.aR(r.r,A.aq,f,f,q)
q.push(new B.b7(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ao(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bC(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ao(e,d)
q.push(r)
o=p.f
if(o!=null)r.bC(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bC(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a_()
r=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=B.aq(A.cC,A.iB,s/3).j(0.55).gq(0)
k=r.L()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cO(i,1))
g=d-A.k.H(u*(0.04+0.05*C.cO(i,2))+C.cO(i,3)*j,j)
n=C.cO(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a_()
t=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.sar(new B.bR(Aj.pK,0.5,A.w,f,0,D.cTO,f,f).az(0,B.bV(new B.v(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lg(a1,a2,a3,25,A.c,190)},
cmV(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cO(r,1))
p=f+q*4
o=A.k.H(u*(0.03+0.05*C.cO(r,2))+C.cO(r,3)*p,p)
n=C.cO(r,4)
m=Math.sin(t+r)
$.a_()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.c.j(0.6+0.4*C.cO(r,5)).gq(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bV
J.bH(v.save())
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
h.delete()}v.restore()}this.lg(d,a0,a1,40,A.es,200)},
bTA(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dF(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bH(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.d9(new B.v(p,0),q,r)
$.a_()
f=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.sar(D.bHo.az(0,new B.ac(0,o,n,m)))
e=f.L()
s.drawOval(B.cp(g),e)
e.delete()
s.restore()}}$.a_()
a0=B.N()
a0.b=A.ad
a0.c=a2*0.003
a0.r=D.b1P.gq(0)
a3.ak(w,v*1.08,a0)
d=a5*0.8
this.qI(a3,w.ao(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lg(a3,a4,a5,40,A.bI,210)},
cgZ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hs,A.hL],a6),B.a([A.nW,A.ib],a6),B.a([A.aB,A.ev],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bU<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a_()
k=B.a([],o)
j=new B.aR(l.r,A.aq,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b7(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ao(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dx(i,s),l=new B.bU(l,l.gI(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ao(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bC(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bC(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a_()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k=a7[m]
h=k[0]
l.sar(new B.a7(A.a3,A.a7,A.w,B.a([h,k[1],h],a6),H.arg,new B.mp(w)).az(0,new B.ac(0,0,v,u)))
l.r=A.c.j(0.85).gq(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lg(a8,a9,b0,40,A.c,220)},
bTj(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.H(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.H(A.k.bH(g/t),5)
a1=g+t
$.a_()
a2=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3=Math.abs(a0)
a2.r=D.ZN[a3].gq(0)
a4=a2.L()
s.drawRect(B.cp(new B.ac(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a5.r=D.ZN[A.o.H(a3+2,5)].gq(0)
a4=a5.L()
s.drawRect(B.cp(new B.ac(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.H(n*(0.04+0.05*C.cO(a0,1))+C.cO(a0,2)*a6,a6)
v=C.cO(a0,3)
t=C.cO(a0,4)
this.qI(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.ZN[A.o.H(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cse(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a_()
p=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.c=v
p.r=A.bI.j(0.06).gq(0)
o=p.L()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aR($.a_().r,A.aq,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b7(v,a2))
w=a1+w
l.E(new B.ao(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.d_(w,r,p,k))
w=a2+m*0.95
l.E(new B.ao(p,w))
p=n*0.3
j=a2+m
l.E(new B.ao(a1+p,j))
l.E(new B.ao(a1-p,j))
q=a1-q
l.E(new B.ao(q,w))
l.E(new B.ao(q,k))
l.E(new B.d_(v,r,v,a2))
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.d9(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=q
d.r=A.au.gq(0)
o=d.L()
u.drawArc.apply(u,[B.cp(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a7(A.a3,A.a7,A.w,D.cVT,A.aqI,null).az(0,new B.ac(v,a2,r,j)))
a4.aQ(l,a1)
a0=A.k.H(a6*0.6,1.4)
if(a0<1)this.qI(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bBa(a4,a5,a6,60)},
bBa(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.H(k*(0.1+0.1*C.cO(p,31))+C.cO(p,32)*v,v)
n=C.cO(p,33)
J.bH(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.d9(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a_()
n=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=D.N8[A.o.H(p,5)].gq(0)
m=n.L()
u.drawRect(B.cp(o),m)
m.delete()
u.restore()}},
ckO(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lg(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cO(o,1)*1.6
m=A.k.H(a2+C.cO(o,2)*n,n)/n
l=e*(C.cO(o*7+A.k.bH((a2+C.cO(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a_()
g=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.sar(new B.a7(A.a3,A.a7,A.w,B.a([A.c.j(0),A.bI],s),null,null).az(0,B.qU(new B.v(l,h),i)))
g.c=r
g.d=A.bV
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qI(a0,i,p,A.c,1-m)}},
bwo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cO(r,1))
p=A.k.H(C.cO(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.H(C.cO(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a_()
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l=A.o.H(r,5)
m.r=D.asV[l].j(n).gq(0)
m.a=A.n1
m.z=new B.hH(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.b=A.ad
m.c=Math.max(0.6,q*0.05)
m.r=D.asV[l].j(n*1.4).gq(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
c6G(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bH(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.d9(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a_()
o=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.b=A.ad
o.c=u
o.r=A.bI.j(0.45).gq(0)
n=o.L()
w.drawOval(B.cp(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.hL.gq(0)
n=k.L()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.hs.j(0.4).gq(0)
k.z=new B.hH(A.G,r)
n=k.L()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lg(d,e,f,45,A.bI,270)},
bIP(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.H(o,4)
m=C.cO(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.H(a7+C.cO(o,2)*4,4)/4
j=A.ex.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cO(o,3))*(j*i)
if(h<=0.5)continue
g=D.cLQ[A.o.H(o,5)]
J.bH(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.d9(new B.v(0,l),i,j)
$.a_()
a0=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.sar(new B.a7(A.b1,A.b5,A.w,B.a([A.c,g],u),null,null).az(0,B.d9(new B.v(0,l),f,h)))
a1=a0.L()
v.drawOval(B.cp(d),a1)
a1.delete()}$.a_()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.hs.gq(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lg(a5,a6,a7,30,A.hL,280)},
bWZ(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.H(t+n/4,1)
l=B.bV(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a_()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.c=v
j.r=D.apQ[n].j((1-m)*0.8).gq(0)
i=j.L()
u.drawArc.apply(u,[B.cp(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.H(v*(0.06+0.06*C.cO(g,1))+C.cO(g,2)*h,h)
e=C.cO(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cO(g,4))
a0=D.apQ[A.o.H(g,4)]
$.a_()
a1=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.r=a0.gq(0)
J.bH(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.d9(A.J,d,d*1.5)
i=a1.L()
u.drawOval(B.cp(s),i)
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
bVq(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bH(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.a_()
a0=B.a([],s)
a1=new B.aR(d.r,A.aq,a3,a3,a0)
a0.push(new B.b7(0,i))
a0.push(new B.d_(h,m,0,g))
a0.push(new B.d_(j,m,0,i))
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.b=A.ad
d.c=t
d.r=B.aq(A.bI,A.oJ,k).j(0.7).gq(0)
a2=d.L()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=A.hL.j(0.8).gq(0)
a2=d.L()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a_()
a5=B.N()
a5.sar(new B.bR(A.A,0.5,A.w,a3,0,B.a([A.hs.j(0.25),D.U0],x.O),a3,a3).az(0,B.bV(w,a4)))
a7.ak(w,a4,a5)
this.lg(a7,a8,a9,30,A.bI,300)},
cn3(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a_()
h=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=A.bu.gq(0)
h.c=q
h.d=A.bV
g=h.L()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.sar(new B.bR(A.A,0.5,A.w,null,0,B.a([A.hL,A.hs.j(0.6),D.U0],o),null,null).az(0,B.bV(new B.v(j,i),p)))
g=l.L()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cO(f,1)
d=A.k.H(b2+C.cO(f,2)*e,e)/e
a0=A.k.bH((b2+C.cO(f,2)*e)/e)
a1=C.cO(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cO(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=B.aq(A.hL,A.aX,d).j(1-d).gq(0)
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
g.delete()}}}this.lg(b0,b1,b2,35,A.bI,310)},
bzR(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOw(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cO(n,1))
l=a8*(0.14+0.24*C.cO(n,2))
k=a8-l
j=new B.ac(o,k,o+m,k+l)
$.a_()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.sar(D.bIk.az(0,j))
h=i.L()
r.drawRect(B.cp(j),h)
h.delete()
g=A.k.bH(m/q)
f=A.k.bH(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cO(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a_()
a6=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=A.bI.j(0.85).gq(0)
h=a6.L()
r.drawRect(B.cp(new B.ac(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aWG.prototype={
B(d){var w,v=null,u=new C.c3t(),t=new C.c3v(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiL,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c3u(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Fb[w]))
return B.c8(A.bH,s,A.bx,12,10)}}
C.Xj.prototype={
S(){return new C.awY()}}
C.awY.prototype={
guN(){var w=this.d
return w===$?this.d=this.a.c:w},
gaV_(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ap(new B.bc(w.b,A.b0,A.aM),$.au())}return v},
gatW(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGO()
v=$.au()
u.f!==$&&B.bJ()
t=u.f=new B.ap(new B.bc(w,A.b0,A.aM),v)}return t},
p(){var w=this.gaV_(0),v=$.au()
w.R$=v
w.O$=0
w=this.gatW()
w.R$=v
w.O$=0
this.a2()},
XW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B0(90,700,700,A.eu),$async$XW)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$XW)
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
return B.i($async$XW,v)},
aUZ(d){var w=null,v=A.c.j(0.07)
return B.bm(w,new B.b2(4,B.m(12),A.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aK9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aey(p.guN().a)
if(n==null)n=A.d.gK(D.Fb)
w=p.guN()
v=p.r
u=x.p
v=B.D(new B.am(A.W,o,A.a9,A.q,B.a([B.bZ(0,new C.LM(p.guN(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.an(o,B.Ge(A.mJ,new C.d0K(d),B.nN(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Ge(D.bt5,new C.d0L(p),B.nN(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aK3,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaV_(0),o,o,o,o,o,2,p.aUZ("Big words"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0M(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hb,!0,A.a6,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hs.j(0.6),A.r,1)
if(p.guN().d.length===0)q=D.bwn
else{q=C.fXj(p.guN().d)
if(q==null)q=new Uint8Array(0)
q=B.hO(B.fD(q,A.A,o,o,A.ci,A.bO,!1,o,!1,o,o),A.ap)}r=B.a([t,A.aa,B.aH(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc0L(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guN().d.length!==0)r.push(B.aF(o,o,o,o,D.YC,o,o,o,new C.d0N(p),o,o,o,o,"Remove logo",o))
return B.cd(o,A.x,B.bq(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.T,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gatW(),o,o,o,o,o,2,p.aUZ("Line under it"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0O(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a6,o,A.am,o,o,o,o),A.ab,B.dn(D.bvj,D.f6V,new C.d0P(p,d),B.bk(A.au,o,o,o,A.x,o,A.cc,o,new B.b5(B.m(14),A.V),o,o,o))],u),A.af,o,A.e,A.R,0,A.p),A.h,o,o,D.aSn,o,o,o,o,A.DI,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.aIr.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.XE.prototype={
S(){return new C.bcs(new B.ap(A.as,$.au()))}}
C.bcs.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.L(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.ai,k=B.aG(d,A.bP,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.ct,l,o,o,o,o),o,o,o,new C.d7a(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cxq[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.b3(12,12)
q=new B.b3(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aI(!1,new B.bv(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.yo,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d7b(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hx,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Eb(A.bH,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bi:A.aN
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bm(o,new B.b2(4,B.m(14),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.am,o,o,o,o),1),A.aa,B.bK(A.aKZ,new C.d7c(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bq(!0,B.p(o,B.u(B.a([f,new B.dp(1,A.cj,B.cL(e,o,o,o,o,A.aj,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rE,A.Vw,o,o,o),!0,!1,A.ah,!0,!0)}}
C.bbQ.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f0()
a2.dX(this.c)
w=this.b
v=w/6.283185307179586
$.a_()
u=B.N()
u.z=A.OE
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ae()
l=a2.ae()
k=a2.ae()
j=0.8+a2.ae()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.H(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ae()<0.25){f=B.aq(r,A.c,0.85)
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
$.a_()
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
C.bbx.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bN(new B.ac(0,0,0+a7.a,0+a7.b),A.kb),a2=this.b,a3=Math.sin(a2*2),a4=$.a_(),a5=B.N()
a5.b=A.ad
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gq(0)
a5.z=A.lA
a6.b0(a1,a5)
a5=x.v
a4=new B.aR(a4.r,A.aq,a0,a0,B.a([],a5))
a4.E(new B.iV(a1))
v=new B.a2q(new B.wj(B.xW(a4),!1,B.a([],x.X))).gK(0)
a4=v.a
a3=v.b
a4.jN()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.H(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.a_()
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.b=A.ad
j.d=A.bV
j.c=1.5+2*m/10
j.r=w.j(k).gq(0)
i=A.k.H(n-p*(1-m/10),t)
h=A.k.H(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aR(r,k,a0,new B.cK([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.aR(r,k,a0,new B.cK([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.aR(r,a2.b,a0,new B.cK([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.jN()
e=u[a3].T2(n).a
$.a_()
k=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=w.gq(0)
k.z=A0.om
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
C.bkg.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f0()
e.dX(this.c)
w=a0.a*(0.2+e.ae()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gajB()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a_()
i=B.a([],n)
h=new B.aR(j.r,A.aq,f,f,i)
i.push(new B.b7(w,v))
j=l-k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.sar(B.aRP(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.jj
g=j.L()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b6v.prototype={
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
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.a_()
e=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
e.r=f.j(g).gq(0)
e.z=new B.hH(A.G,k*0.35)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
e.b=A.ad
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gq(0)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b68.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f0()
a0.dX(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ae()-0.5)*0.1)
k=v*(0.06+a0.ae()*0.05)
j=a0.ae()*3.141592653589793*2
i=$.a_()
h=B.a([],n)
g=new B.aR(i.r,A.aq,null,null,h)
h.push(new B.b7(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ao(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bC(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a_()
i=new B.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.b=A.ad
i.c=r
i.d=A.bV
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gq(0)
i.z=new B.hH(A.G,u)
d=i.L()
i=g.e
t.drawPath((i==null?g.e=new B.cG(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.br3.prototype={
a6(d,e){var w,v,u=new B.ac(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a_()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.bR(A.A,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cEb,null).az(0,u))
d.bd(u,w)
w=u.cD(-3)
v=B.N()
v.b=A.ad
v.c=2
v.r=this.c.j(0.1+t).gq(0)
v.z=A.jj
d.bd(w,v)},
aq(d){return d.b!==this.b}}
C.bo6.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bH(d)*7,p=0;p<7;++p){o=new B.f0()
o.dX(q+p)
n=o.ae()*w
m=o.ae()*u
l=Math.sin(A.k.H(A.k.H(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ae()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.a_()
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
g.z=new B.hH(A.G,k*0.3)
h=g.L()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bnf.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.ac(0,0,0+e.a,0+e.b)
$.a_()
v=B.N()
v.a=A.n1
v.sar(new B.a7(A.ax,A.aC,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).az(0,w))
d.bd(w,v)},
aq(d){return d.b!==this.b}}
C.baS.prototype={
a6(d,e){var w,v,u,t,s,r=e.ge8(),q=0.55+0.45*Math.sin(this.b)
$.a_()
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
C.wL.prototype={}
C.Hb.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aox.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.u3.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m7.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hn.prototype={
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
u.m(0,"decoration",C.hzH(v.z))
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
C.lp.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,ey>")
n=B.z(new B.J(n,new C.c8S(),m),m.k("ai.E"))
return C.qS(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.z(new B.J(n,new C.c8T(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hT.prototype={
gb4T(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gQs(){if(!C.ki(this.w))return!1
var w=this.gb4T()
if(w==null)return!1
return new B.Q(Date.now(),0,!1).cY(w.bQ())},
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
q=B.U(r).k("J<1,lp>")
r=B.z(new B.J(r,new C.c8H(),q),q.k("ai.E"))
return C.Aw(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.z(new B.J(w,new C.c8I(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.js.prototype={}
C.aYO.prototype={
B(d){return B.cj(new C.c8N(this))}}
C.alN.prototype={
S(){return new C.bfD(null,null)}}
C.bfD.prototype={
gaV0(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h3,null,1,null,v)
w.cF(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gaV0().p()
this.bpb()},
B(d){return B.c4(this.gaV0(),new C.dyM(),this.a.c)}}
C.aId.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.ab7.prototype={
O7(d,e,f,g){return this.bIw(d,e,f,g)},
bIw(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O7)
case 3:s=i
if(d.e==null){w=1
break}B.a8(d,!1).M(null)
t=d.G(x.q).f
t.P(B.b0(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O7,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.aa(0,A.G,A.x.j(0.35),A.dm,24)],x.V),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.bf,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dQ,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ar,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d3)
n.push(B.B(B.a([B.D(new C.abp(A.hm,"Download",A.bS,new C.ebP(w,d),!0,v),1),A.aw,B.D(new C.abp(A.uA,"Share",A.bj,new C.ebQ(w,d),!1,v),1),A.aw,B.D(new C.abp(A.h6,"Safari",A.aW,new C.ebR(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bI(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ebS(d),v,v))
return B.bq(!0,new B.C(A.p0,B.u(B.a([B.p(v,B.u(n,A.af,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iE,v,t,u,s,v,A.n),v,v,v,v,A.DO,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ah,!0,!0)}}
C.abp.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.Y,!0,v,B.aI(!1,u,!0,B.eq(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bkN,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anL(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.M(v,w,v,w)}else{v=6*w
u=new B.M(v,10*w,v,12*w)}t=i.c0M().ahM(1.35)
s=B.asW(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bur(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bj,h,h,h,h,2,D.bE9,A.z,!0,h,!0,h,!1,i.x,A.ag,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.vg,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yi,A.am,h,A.QH,h,h)
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
w=n?t.czl(B.aY(g.Q).j(0.45),A.cx):t
p=g.as
l=m?1:h
k=m?A.eB:A.BL
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qy:s
$.a_()
j=B.N()
j.b=A.ad
j.c=3*w
j.e=A.fq
j.r=A.aG.gq(0)
j=i.ch1(p,t,k,j)
k=g.r
w=new B.am(A.W,h,A.a9,A.q,B.a([j,i.ch_(k,t,l?A.Qy:s)],x.p),h)}else w=i.ch0(p,t,g.k2?A.Qy:s,m)
v=new B.na(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aH(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.C(u,new B.bG(r,h,h,q,h),h)
case 1:case 4:return i.bRO()
case 3:return i.c8X()
case 2:return B.b1(h,h,h,new C.aYJ(g,h),A.fi)
case 5:g=g.r
return new C.aYL(g,!i.e&&i.z==null,h)}},
c0M(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aY(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ky
j=A.cx
break
case"shadow":v=o.d
e=B.a([new B.cJ(D.a9A,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cJ(l,A.J,6*v),new B.cJ(l,A.J,16*v),new B.cJ(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cJ
w=A.aG
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
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cJ(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cJ(A.b9,new B.v(-3*v,0),0),new B.cJ(A.aF,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cJ(A.cX,A.J,8*v),new B.cJ(A.aF,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8w
break
case"ice":v=o.d
e=B.a([new B.cJ(A.b_,A.J,10*v),new B.cJ(A.cC,A.J,22*v)],x.r)
k=A.O
w=A.es
break
case"chalk":h=o.d
e=B.a([new B.cJ(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.ky
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cG2[q]
u.push(new B.cJ(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cJ(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a_()
f=B.N()
v=o.d
f.sar(D.bFR.az(0,new B.ac(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cJ(A.Iz,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.a_()
f=B.N()
v=o.d
f.sar(D.bGb.az(0,new B.ac(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cJ(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cJ(l.j(0.45),new B.v(u,u),0),new B.cJ(l.j(0.2),new B.v(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.ky
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aY(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avO(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eog.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c8L(h)
v=r.k2?C.hLX(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.BL
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VQ(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
ch1(d,e,f,g){return this.avO(d,e,f,!1,g)},
ch_(d,e,f){return this.avO(d,e,f,!1,null)},
ch0(d,e,f,g){return this.avO(d,e,f,g,null)},
bur(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bRO(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.at(B.V(s.b===D.kH?A.EN:A.A6,A.aA,t,t,t,32),t,t,t)}w=u.bxj(r)
if(s.b===D.kH){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.cp,A.r,1),s,B.a([new B.aa(0,A.G,A.x.j(0.08),A.dH,6)],x.V),t,A.n),t,1/0,t,t,new B.M(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJX(r,!0)
return C.fix(s.go,v,s.id)}return w},
aJX(d,e){var w,v,u,t
try{w=C.hMf(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cj(new C.c8K(this,w,v,e))
return u}catch(t){return D.a7M}},
bxj(d){return this.aJX(d,!1)},
c8X(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aXk
return C.hMx(v,w.db,w.dx)}}
C.aYJ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a_(),g=B.N(),f=this.b
g.r=B.aY(f.ay).gq(0)
w=B.N()
w.r=B.aY(f.ch).gq(0)
w.b=A.ad
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.ac(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.bd(s,g)
d.bd(s,w)
break
case 1:d.j1(s,g)
d.j1(s,w)
break
case 2:r=new B.aR(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b7(u/2,0))
r.E(new B.ao(u,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 3:r=new B.aR(h.r,A.aq,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b7(0,h))
f=u*0.65
r.E(new B.ao(f,h))
r.E(new B.ao(f,t*0.2))
r.E(new B.ao(u,t*0.5))
r.E(new B.ao(f,t*0.8))
t*=0.55
r.E(new B.ao(f,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 4:h=t/2
w.c=v+2
d.bK(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.aR(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b7(q,0))
r.E(new B.ao(u,0))
r.E(new B.ao(u-q,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aR(h.r,A.aq,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b7(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ao(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aFQ.prototype={
S(){return new C.bqA(null,null)}}
C.bqA.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.il,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.brp()},
aK7(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bT(B.at(B.d(d,w,w,w,w,w,w,A.dQ,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.w,v,w,w),A.n),A.ba)},
buF(){var w,v=this,u=null,t=v.aK7("Slide A",A.bj),s=v.aK7("Slide B",A.aW)
if(v.a.c===D.cd)return new B.am(A.W,u,A.aY,A.q,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eQy(v,s,t),u)},
B(d){return this.buF()}}
C.aGs.prototype={
iH(d){return new B.ac(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jj(d){return d.b!==this.b}}
C.T6.prototype={
S(){return new C.bfN(null,null)}}
C.bfN.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zw,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cd){w.sq(0,1)
return}B.bM(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJJ(u),x.a)},
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
else B.bM(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJI(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpp()},
B(d){var w,v=this.a
if(v.c.dy===D.cd||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dJH(this),v.d)}}
C.Ha.prototype={
B(d){return B.cj(new C.c8D(this))}}
C.awJ.prototype={
S(){return new C.bam()}}
C.bam.prototype={
Z(){this.a0()
if(this.a.c!==D.cd)B.bM(A.JE,new C.cYV(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cd)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.T6(C.ei(A.be,!1,4279310375,A.az,"",4294538006,24,A.bg,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bb,o,2,"",0,0,"",u,D.eT,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ei(A.be,!1,4294967295,A.az,"",4280640491,22,A.bg,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bb,o,2,"Element flies in",0,0,"",q.a.c,D.cM,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.W,p,A.a9,A.q,B.a([w,B.an(32,new C.T6(t,B.p(p,D.eUH,A.h,p,p,new B.o(s,p,B.H(A.bf,A.r,1),r,p,p,A.n),p,p,p,p,A.iJ,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bT(n,D.aSV,A.ba)}}
C.a5E.prototype={
S(){return new C.bgr(null,null)}}
C.bgr.prototype={
gaVx(){var w=this.a
if(w.e)w=D.eon.t(0,w.c)||D.aHl.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVx()){w=C.hKC(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bpW()},
B(d){var w,v=this,u=v.d
if(!v.gaVx()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e1t(v,u,A.o.H(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWJ.prototype={
B(d){var w=null
return B.at(C.aYN(!0,w,!1,C.ei(A.L,!1,this.e.l(),A.az,"",4280640491,this.f,A.bg,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.bb,4280172719,2,"Aa",0,0,this.c,D.cd,D.cM,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbv.prototype={
iH(d){return C.a0m(this.b,new B.ac(0,0,0+d.a,0+d.b).cD(-this.c))},
jj(d){return d.b!==this.b||d.c!==this.c}}
C.bmf.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.ac(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0m(g,h),e=a1.ge8(),d=new C.eFZ()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aIQ.az(0,h))
a0.aQ(f,w)
g=C.a0m(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b92.gq(0)
a0.aQ(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.exS.az(0,h))
a0.aQ(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gq(0)
g.z=new B.hH(A.G,e*0.04)
a0.aQ(f,g)
g=d.$1(e*0.012)
g.r=A.c.gq(0)
a0.aQ(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.exQ.az(0,h))
a0.aQ(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gq(0)
a0.aQ(f,w)
g=C.a0m(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gq(0)
a0.aQ(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gq(0)
g.z=new B.hH(A.G,e*0.035)
a0.aQ(f,g)
g=d.$1(e*0.016)
g.r=A.nY.gq(0)
a0.aQ(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.exL.az(0,h))
a0.aQ(f,w)
w=C.a0m(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_u.gq(0)
a0.aQ(w,v)
g=C.a0m(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b1G.gq(0)
a0.aQ(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aIQ.az(0,h))
a0.aQ(f,g)
for(g=B.xW(f),w=B.a([],x.X),g=new B.wj(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jJ(y.M));--q
g.jN()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bH(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jN()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jN()
m=w[q].T2(p*n/o).a
l=D.cDz[A.o.H(n,4)]
$.a_()
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
g.sar(D.exU.az(0,h))
g.z=new B.hH(A.G,e*0.03)
a0.aQ(f,g)
g=d.$1(e*0.018)
g.sar(D.exR.az(0,h))
a0.aQ(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gq(0)
a0.aQ(f,w)
g=C.a0m(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n7.gq(0)
a0.aQ(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bnc.prototype={
a6(d,e){d.EB(C.a0m(this.b,new B.ac(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.ge8()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aIq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aIW.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aKf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
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
C.fns()
$.h3M=new C.ei2(v)
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
iP(d){if(d===A.yG||d===A.r1||d===A.r0||d===A.oF)this.rJ()},
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
v.O$=0}t.bq9()},
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
jH(){return this.a9q(null)},
afX(){var w=this.c
if(w==null)return
w.G(x.q).f.P(D.ew9)},
px(){if(!this.jH())return!1
this.afX()
return!0},
anO(d){var w,v,u,t,s,r=this
if(r.a9q(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h2T(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yT(){return this.anO(null)},
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
break}s=C.fBY(j,t.bUA())
w=t.ga8X()?5:7
break
case 5:r=t.gN9()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWX(r),$async$H3)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.eeq())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.eer())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xI(m==null?"":m)!=null)continue
C.fnE(n,s)
p=!0}t.n(new C.ees(t,s))
if(p||s.length>J.a9(j))t.rJ()
case 1:return B.h(u,v)}})
return B.i($async$H3,v)},
bUA(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ki(w)&&w!==q}if(w)p.push(r)
return p},
cfu(d){var w,v=this,u=d.w
if(!C.ki(u)||u==="hati_kiapo_uongozi")return
v.a7O(d)
w=A.d.bi(v.d,new C.eg0(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.Q(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
c9T(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ki(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cfu(t)
s=u.d
w=B.U(s)
v=w.k("cS<1,hT>")
s=B.z(new B.cS(new B.a4(s,new C.efP(),w.k("a4<1>")),new C.efQ(),v),v.k("G.E"))
return s},
MQ(d){return this.bIT(d)},
rJ(){return this.MQ(null)},
bIT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c9T()
w=3
return B.b(C.U3(d==null?t.a.c:d,s),$async$MQ)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anO(r)?4:5
break
case 4:w=6
return B.b(C.a5b(r),$async$MQ)
case 6:q=r.x
p=A.a.i(q==null?t.gN9():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bi(t.d,new C.edO())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MQ,v)},
oB(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.ki(u.w))===!0?A.hP:A.lm
v.at=B.cN(w,new C.eh8(v))},
aV1(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acS(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a7(v.ay)},
css(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acS(w.e.hs(),w.f,w.r))
w.n(new C.ehZ(w,v.pop()))
w.oB()},
ceB(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acS(w.e.hs(),w.f,w.r))
w.n(new C.efZ(w,v.pop()))
w.oB()},
nC(){var w,v,u=this
if(u.e==null)return
w=A.d.bi(u.d,new C.ehM(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.Q(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.Q(Date.now(),0,!1)},
VD(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wy(){var w,v,u,t
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
t=B.d6(new B.cS(new B.a4(w,new C.ehN(),v.k("a4<1>")),new C.ehO(),u),u.k("G.E"))
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
if(n.b!==D.cM)continue
p=n.a
m=w.ce(0,p,new C.ehP(n))
s.ce(0,p,new C.ehQ())
p=m.a.a
o=n.r
if(p!==o)m.saS(0,o)}},
Go(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bg(u.d,new C.edc(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN9()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nC()
u.oB()},
agg(d,e){var w,v,u,t,s=this
if(s.jH())return
w=s.VD(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ki(v.w))===!0
if(u){C.hKG(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hKH(t,w.d+w.f*0.5)}}s.Go()
s.nC()
s.oB()
if(u&&s.c!=null)s.n(new C.ei_())},
ctw(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Go()
w.nC()
w.oB()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpB(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hIJ(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aY(p==null?v.e:p)
u=q.bS2(v)
t=q.bS1(v)
s=B.aY(v.e)
r=v.f
return new C.js(o,"Class template",p,u,t,s,r==null?null:B.aY(r))}return C.hmd(o)},
bS2(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cM)s=t.w>=28||A.o.D(A.o.aj(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aY(t.Q)}return A.M},
bS1(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cM&&t.w<28)return B.aY(t.Q)}return A.aI},
acf(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8X()){w.c.G(x.q).f.P(D.euM)
return}w.a7O(d)
w.aWc(C.byb(d))
return}if(C.c9w(v)){w.a7O(d)
w.aWc(d)
return}w.n(new C.ef7(w,d))},
aom(){var w,v,u,t,s,r,q=this
q.a_U(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ki(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.eda(q))
if(r&&q.c!=null){u.toString
q.Ig(u,s)}return}q.rJ()
q.n(new C.edb(q))},
aWb(d){this.a7O(d)
this.Yv(d,!0)},
a7O(d){if(!C.ki(d.w))return
C.fnE(d,this.d)},
Yv(d,e){return this.c5U(d,e)},
aWc(d){return this.Yv(d,!1)},
c5U(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.byb(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN9():r)
t.dy.W(0,q.toLowerCase())
C.ane(t.a.c,q)}r=s}else r=d
w=C.c9w(r.w)?3:4
break
case 3:w=5
return B.b(t.a7P(r),$async$Yv)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bg(t.d,new C.efu(l))
o=l.a.hs()
n=C.ki(o.w)&&C.hLS(o)
t.n(new C.efv(t,o,p))
if(n){m=A.d.bi(t.d,new C.efw(o))
if(m>=0){t.d[m]=o.hs()
t.rJ()}}if(!t.a9q(l.a))t.WL()
r=!1
if(t.c!=null)if(!t.a9q(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anO(r)&&C.fjI(l.a)}else l=r
else l=r
if(l)t.c.G(x.q).f.P(D.evl)
case 1:return B.h(u,v)}})
return B.i($async$Yv,v)},
a7P(d){return this.bHa(d)},
bHa(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l0(r.c,A.y2),$async$a7P)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kG(!1,r,s.c,s.d,null,A.y2,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7P,v)},
nv(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c9w(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c8V(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nv,v)},
abY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.ef6(),s,null,!0,!0,x.H),$async$abY)
case 3:if(t.c==null){w=1
break}t.aom()
case 1:return B.h(u,v)}})
return B.i($async$abY,v)},
abX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.ef3(),s,null,!0,!0,x.H),$async$abX)
case 3:if(t.c==null){w=1
break}t.n(new C.ef4())
t.aom()
case 1:return B.h(u,v)}})
return B.i($async$abX,v)},
WL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ax(),$async$WL)
case 3:r=e
if(B.ks(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ap("Bool","ngmy_marriage_hint_seen",!0),$async$WL)
case 4:s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(D.etp)
case 1:return B.h(u,v)}})
return B.i($async$WL,v)},
Ig(d,e){return this.cfU(d,e)},
cfU(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
bTy(){var w,v,u,t,s=this
if(!s.ga8X()){s.c.G(x.q).f.P(D.etC)
return}w=s.gN9()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ae7(u,t,v,new C.eem(s),new C.een(s),w)},
acg(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(A.dy,null,new C.efd(u),s,!0,!0,!1,A.l4,!1,!1,x.N),$async$acg)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeb(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ae8(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ae9(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aea(s,u.gDd(),u.gDc(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bTy()
return B.h(null,v)}})
return B.i($async$acg,v)},
c51(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aV1()
w=C.cy()
v=C.Aw(t,t,t,t,D.B9,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.efe(u,v))},
a7f(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7f=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hQb(s),$async$a7f)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e9(q.r,new C.ede())
t.cZ(new C.edf(t,p,q,r))
s=t.c.G(x.q).f
o=r.r.length
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7f,v)},
aee(d,e,f,g){var w=null,v=g?A.dv:A.bM,u=B.H(g?A.bf:A.cp,A.r,1)
return B.hA(B.aH(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Yu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.px()){w=1
break}s=t.jm()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.efp(),q),q.k("G.E"))}o=s!=null&&s.b===D.l3?B.a([s],x.u):p
if(o.length===0){t.c.G(x.q).f.P(D.evw)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.efq(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yu,v)},
acx(){return this.c5T()},
c5T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hPY(s,t.f+1,o),$async$acx)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.ko(s,B.U(s).c)
p.a=A.d.bi(o.r,new C.efs(q))
t.cZ(new C.eft(p,t,o,q,r))
t.c.G(x.q).f.P(D.evV)
case 1:return B.h(u,v)}})
return B.i($async$acx,v)},
acE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()||!t.yT()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.efK(),q),q.k("G.E"))
if(p.length===0){t.c.G(x.q).f.P(D.eta)
w=1
break}o=new B.J(p,new C.efL(),B.U(p).k("J<1,P>")).ft(0,new C.efM())
r=B.S(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ap(new B.bc(l,A.b0,A.aM),$.au()))}q=t.c
q.toString
w=3
return B.b(B.c1(A.K,null,new C.efN(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acE)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.au()
q.O$=0}if(t.c!=null)t.n(new C.efO())
case 1:return B.h(u,v)}})
return B.i($async$acE,v)},
acj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$acj=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.h4S(s,new C.Df(r,q,p,o==null?"":o)),$async$acj)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.eff(m,n))
s=t.c.G(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aey(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$acj,v)},
a7I(){return this.bGx()},
bGx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hQa(s,t.f+1,l),$async$a7I)
case 3:r=e
q=$.fFn
$.fFn=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.edv())
t.c.G(x.q).f.P(D.et1)
w=1
break}if(!q){s=r.CW
s=C.h3K(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.edw(t,l,r))
t.c.G(x.q).f.P(D.ewo)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.ko(s,B.U(s).c)
s=l.r
m.a=A.d.bi(s,new C.edx(p))
o=s.length
t.cZ(new C.edy(m,t,l,p,r))
n=s.length-o
s=t.c.G(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
aMb(d,e){if(e){this.ad6()
return}this.c51(d,!1)},
bCl(){return this.aMb(null,!1)},
ad6(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ad6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.bW,null,new C.efU(t),r,!0,!0,!0,A.or,!1,!1,x.N),$async$ad6)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.efV(t,C.hII(s).oO()))
case 1:return B.h(u,v)}})
return B.i($async$ad6,v)},
cZ(d){var w=this
if(w.px())return
w.Go()
w.aV1()
w.n(d)
w.IG()
w.nC()
w.oB()},
a5L(){this.cZ(new C.ec9(this,D.ma))},
aNz(){var w=this.gdk()
if(w==null)return
this.cZ(new C.edt(this,w))},
aMM(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.edr(this))},
aZ3(d,e){if(this.e==null||d===e)return
this.cZ(new C.eg2(this,d,e))},
Mn(d){return this.bEj(d)},
bEj(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN9():s)
w=5
return B.b(C.anc(t.a.c,r),$async$Mn)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.aoB(s)
w=6
return B.b(C.aYR(t.a.c,s),$async$Mn)
case 6:if(t.c==null){w=1
break}t.n(new C.edn(t,d))
w=7
return B.b(t.rJ(),$async$Mn)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mn,v)},
cfR(d,e){var w=this
if(d.z){w.afX()
return}w.n(new C.eg1(w,d,e))
w.oB()},
jm(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UF(d){return this.ch.ce(0,d.a,new C.edd(d))},
aqa(d){return this.CW.ce(0,d.a,new C.edP())},
a_U(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.VD(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.af$.d.c
if(u!=null)u.jd()},
b1k(){return this.a_U(!0)},
a_S(d){var w,v,u=this
if(u.px())return
if(!u.yT())return
w=u.VD(d)
if(w==null||w.b!==D.cM)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UF(w).saS(0,"")}u.n(new C.ehK(u,d))
$.aT.x1$.push(new C.ehL(u,d,w))},
b1T(d){var w=this
if(d.b===D.cM&&!w.jH()&&w.yT()){w.a_S(d.a)
return}w.awd(d.a)},
awd(d){var w,v,u,t,s,r=this
if(r.jH())return
w=r.r
if(w!=null&&w!==d){v=r.VD(w)
if(v!=null&&v.b===D.cM){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.eh9(r,s,d))
if(s||d==null){t=$.aT.af$.d.c
if(t!=null)t.jd()}},
aIv(){this.cZ(new C.eca(this))},
on(d){return this.btJ(d)},
btJ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$on=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nv(),$async$on)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ec7(t,d))
case 1:return B.h(u,v)}})
return B.i($async$on,v)},
TQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fc(78,1920),$async$TQ)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ebY(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TQ,v)},
TK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(T.BF(t.a.c),$async$TK)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gah(s)){t.c.G(x.q).f.P(D.ewY)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c1(null,null,new C.ebV(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TK)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.ebW(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TK,v)},
apa(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bg(w.gdk().z,new C.edp(v))){w.c.G(x.q).f.P(D.evZ)
return}if(w.w===v)w.a_U(!0)
w.cZ(new C.edq(w,v))},
bAD(){var w=this.jm(),v=w==null
if((v?null:w.b)===D.eT)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cM)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJc(d,e){var w=this,v=w.jm(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.ecC(w,v,d,e,t,u))},
bvh(d){return this.aJc(d,null)},
a62(d){return this.bvp(d)},
bvp(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a62=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a32.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nv(),$async$a62)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jm()
if(s!=null){r=s.b
if(r===D.cM)t.bvh(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eT){r=d.c
t.aJc(r.j(0.88),r)}w=1
break}t.cZ(new C.ecH(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a62,v)},
a61(d){return this.bvn(d)},
bvn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a61=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jm()
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
return B.b(t.nv(),$async$a61)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecF(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a61,v)},
bv7(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.ecB(this,w,d))},
Yz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hQ6(r),$async$Yz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nC()
t.n(new C.efE(t,s))
w=4
return B.b(t.rJ(),$async$Yz)
case 4:if(t.c!=null)t.acf(s)
case 1:return B.h(u,v)}})
return B.i($async$Yz,v)},
a7A(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_U(!0)
t.nC()
s=t.c
s.toString
w=3
return B.b(C.Po(s,q),$async$a7A)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.G(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7A,v)},
Co(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Co=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nC()
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
p=B.a5(l)
o=r.c
if(o==null){w=1
break}o.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Co,v)},
E_(d,e){return this.crW(d,e)},
crW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$E_=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.px()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_U(!0)
t.nC()
s=h.a=t.e.hs()}else{r=A.d.bi(t.d,new C.ehT(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hJG(q?"":s)
o=C.h2G(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a4<1>")
n=B.z(new B.a4(s,new C.ehU(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.clt(n.length,o,s),$async$E_)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hJA(h.a)
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
return B.b(t.cls(n,o),$async$E_)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kZ(t.d,new C.ehV(s))
s=h.a.b
w=11
return B.b(t.clq(k.b,s),$async$E_)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hJF(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.G(x.q).f.P(D.ex8)
w=1
break}w=12
return B.b(t.clr(j.a,s,o,j.c),$async$E_)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.ehW(h,t,i))
t.oB()
case 1:return B.h(u,v)}})
return B.i($async$E_,v)},
clt(d,e,f){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehp(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cls(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.eho(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
clq(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehi(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
clr(d,e,f,g){var w=this.c
w.toString
return B.c1(A.K,null,new C.ehk(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a90(){var w=null
return B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a91(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.aa(0,A.G,d.j(0.28),A.dm,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aC,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ep,B.D(B.u(B.a([B.d(g,u,u,u,u,u,u,D.eGU,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQK(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.R9,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aQN(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aC,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.Y,!0,w,B.aI(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.D(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mV,w,w,w),A.d5,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A9,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eei(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bR0(d,e,f,g,h,i){return this.aQN(d,e,f,!1,g,h,i)},
aru(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dQ,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VS,w,w,w)},
aQM(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cc,w,new B.b5(B.m(14),A.V),w,w,w)
return B.bK(B.d(e,w,w,w,w,w,w,A.mU,w,w,w),new C.eeh(d,f),v)},
aQL(d,e){return this.aQM(d,e,null)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oC(l,s.c,s.d),$async$Ix)
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
for(l=A.d.gag(o.z),n=new B.hK(l,new C.eha());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7J(l.charCodeAt(0)==0?l:l,r.b),$async$Ix)
case 4:l=t.a
w=5
return B.b(B.oB(l.c,l.d),$async$Ix)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
GK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oC(q,s.c,s.d),$async$GK)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7J(A.Q.al(r.ac(),null),r.b+".json"),$async$GK)
case 4:q=t.a
w=5
return B.b(B.oB(q.c,q.d),$async$GK)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GK,v)},
b18(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nC()
u.rJ()
w=u.c
w.toString
v=B.eH(new C.ehJ(u,t),!1,null,x.z)
B.a8(w,!1).cr(v)},
FY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nv(),$async$FY)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fnR(),$async$FY)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hMr(s.a)
q=t.c
q.toString
w=5
return B.b(B.c1(A.aG,null,new C.ec2(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FY)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.ec3(t,s))
w=1
break}if(p==="split")t.cZ(new C.ec4(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FY,v)},
LJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}w=3
return B.b(t.nv(),$async$LJ)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMT(s,null,null),$async$LJ)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ec8(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LJ,v)},
aYR(d){var w=this.e
if(w==null||!C.ki(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKu(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMT(s,t==null?null:B.aY(t),u)},
a5J(d){return this.btA(d)},
btA(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(D.exn)
w=1
break}w=3
return B.b(t.aKu(),$async$a5J)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ec_(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5J,v)},
adS(d){return this.ceE(d)},
ceE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(D.eww)
w=1
break}w=3
return B.b(t.aKu(),$async$adS)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.eg_(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adS,v)},
c1M(){var w,v,u=this
if(u.jH())return
w=new B.Q(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cr1()}},
cr1(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.ehR(this,r,(A.o.aw(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bRl(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.eel(this,r,u.d))},
bVM(d){var w
if(this.jH())return!1
w=this.e
if((w==null?null:C.ki(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fks(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kH&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bVN(d){var w
if(this.jH())return!1
w=this.e
if((w==null?null:C.ki(w.w))!==!0)return!0
if(!this.yT())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fks(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kH&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LS(d){return this.bvO(d)},
bvO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(D.evm)
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
break}if(o==null||A.a.i(o).length===0){s.G(x.q).f.P(D.ew0)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5b(r)
w=1
break}t.n(new C.ecL(t,d,o))
t.nC()
$.aT.x1$.push(new C.ecM(t))
case 1:return B.h(u,v)}})
return B.i($async$LS,v)},
TO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nv(),$async$TO)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byQ(),$async$TO)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ebX(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TO,v)},
MB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nv(),$async$MB)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jm()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fnI(r),$async$MB)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.edN(s,q))
case 1:return B.h(u,v)}})
return B.i($async$MB,v)},
iA(d){this.cZ(new C.ec5(this,d))},
pm(d){return this.bv0(d)},
bv0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.px()){w=1
break}m=!D.aHn.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nv(),$async$pm)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FY()
w=1
break A
case"sign_paper":t.LJ()
w=1
break A
case"hd_photo":t.TO()
w=1
break A
case"sharpen":t.MB()
w=1
break A
case"print":t.Co()
w=1
break A
case"rotate":s=t.jm()
if(s!=null)t.cZ(new C.ece(s))
w=1
break A
case"text_box":t.aIv()
w=1
break A
case"picture":t.TQ()
w=1
break A
case"present":t.b18()
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
case"duplicate_el":s=t.jm()
if(s==null){w=1
break A}t.cZ(new C.ecf(t,s))
w=1
break A
case"delete_el":t.apa()
w=1
break A
case"bring_fwd":s=t.jm()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecg(t,s))
w=1
break A
case"send_back":s=t.jm()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecr(t,s))
w=1
break A
case"align_left":s=t.jm()
if(s!=null)t.cZ(new C.ecu(s))
w=1
break A
case"align_center":s=t.jm()
if(s!=null)t.cZ(new C.ecv(s))
w=1
break A
case"align_right":s=t.jm()
if(s!=null)t.cZ(new C.ecw(s))
w=1
break A
case"grayscale":case"brighten":t.MB()
w=1
break A
case"flip_h":s=t.jm()
if(s!=null)t.cZ(new C.ecx(s))
w=1
break A
case"flip_v":s=t.jm()
if(s!=null)t.cZ(new C.ecy(s))
w=1
break A
case"rectangle":t.on(D.bb)
w=1
break A
case"circle":t.on(D.ey)
w=1
break A
case"triangle":t.on(D.jn)
w=1
break A
case"arrow":t.on(D.Bb)
w=1
break A
case"line":case"divider":t.on(D.fh)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.hK(q,new C.ecz()),o=0;p.C();){n=A.a.fl(A.a.i(q.gT(0).r),B.ae("\\s+",!0,!1,!1,!1))
o+=new B.a4(n,new C.ecA(),B.U(n).k("a4<1>")).gI(0)}t.c.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cy()
t.iA(C.iK(A.L,!1,t.gpB().d.l(),A.az,40,A.bg,A.u,0.18,q,"Presentation Title",0,D.mb,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cy()
t.iA(C.iK(A.L,!1,t.gpB().e.l(),A.az,22,A.bg,A.a4,0.12,q,"Subtitle goes here",0,D.db,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iA(C.iK(A.be,!0,4279310375,A.az,20,A.bg,A.a4,0.5,C.cy(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ti,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iA(C.iK(A.be,!1,4279310375,A.az,20,A.bg,A.a4,0.5,C.cy(),"1. First item\n2. Second item\n3. Third item",0,D.th,0.8,0.1,0.22))
w=1
break A
case"quote":t.iA(C.iK(A.L,!1,4279310375,A.az,24,A.cx,A.a4,0.25,C.cy(),'"Insert meaningful quote here."',0,D.db,0.8,0.1,0.3))
w=1
break A
case"citation":t.iA(C.iK(A.be,!1,4284773515,A.az,14,A.bg,A.a4,0.1,C.cy(),"Author, Title (Year). Publisher.",0,D.ti,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iA(C.iK(A.dM,!1,4279310375,A.az,14,A.bg,A.a4,0.08,C.cy(),C.byS(),0,D.db,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iA(C.iK(A.dM,!1,4279310375,A.az,13,A.bg,A.a4,0.06,C.cy(),"Page "+(t.f+1),0,D.db,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.ech(t))
w=1
break A
case"footer_bar":t.cZ(new C.eci(t))
w=1
break A
case"highlight":t.cZ(new C.ecj(t))
w=1
break A
case"redact":t.cZ(new C.eck(t))
w=1
break A
case"callout":t.cZ(new C.ecl(t))
w=1
break A
case"checkboxes":t.iA(C.iK(A.be,!1,4279310375,A.az,20,A.bg,A.a4,0.45,C.cy(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.db,0.8,0.1,0.2))
w=1
break A
case"table":t.iA(C.iK(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.55,C.cy(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.db,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.ecm(t))
w=1
break A
case"letter":t.iA(C.iK(A.be,!1,4279179050,A.az,17,A.bg,A.a4,0.82,C.cy(),C.byS()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.db,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iA(C.iK(A.be,!1,4279310375,A.az,22,A.bg,A.O,0.76,C.cy(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ti,0.8,0.1,0.12))
w=1
break A
case"toc":t.iA(C.iK(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.76,C.cy(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.db,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iA(C.iK(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.08,C.cy(),"Signature: _________________________",0,D.db,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iA(C.iK(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.08,C.cy(),"Initials: ______",0,D.db,0.3,0.65,0.78))
w=1
break A
case"approved":t.iA(C.iK(A.L,!1,4278556265,A.az,28,A.bg,A.u,0.12,C.cy(),"APPROVED",0,D.mb,0.32,0.62,0.08))
w=1
break A
case"draft":t.iA(C.iK(A.L,!1,4292617766,A.az,28,A.bg,A.u,0.12,C.cy(),"DRAFT",0,D.db,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iA(C.iK(A.L,!1,871318596,A.az,36,A.bg,A.u,0.12,C.cy(),"CONFIDENTIAL",0,D.db,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.ecn(t))
w=1
break A
case"progress":t.cZ(new C.eco(t))
w=1
break A
case"stars":t.iA(C.iK(A.L,!1,4279310375,A.az,36,A.bg,A.a4,0.12,C.cy(),"\u2605\u2605\u2605\u2605\u2606",0,D.pn,0.8,0.1,0.4))
w=1
break A
case"equation":t.iA(C.iK(A.L,!1,4279310375,A.az,32,A.bg,A.O,0.14,C.cy(),"y = mx + b",0,D.db,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iA(C.iK(A.L,!1,4279310375,A.az,18,A.bg,A.a4,0.2,C.cy(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.th,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.ecp(t))
w=1
break A
case"compare":t.cZ(new C.ecq(t))
w=1
break A
case"link_text":t.iA(C.iK(A.be,!1,4280640491,A.mf,16,A.bg,A.a4,0.1,C.cy(),"https://example.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"phone":t.iA(C.iK(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.1,C.cy(),"(555) 123-4567",0,D.db,0.8,0.1,0.5))
w=1
break A
case"email":t.iA(C.iK(A.be,!1,4280640491,A.az,18,A.bg,A.a4,0.1,C.cy(),"name@email.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.ecs(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.ect(t,r))
w=1
break A
case"invoice":t.iA(C.iK(A.be,!1,4279179050,A.az,16,A.bg,A.a4,0.84,C.cy(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.db,0.8,0.1,0.08))
w=1
break A
case"resume":t.iA(C.iK(A.be,!1,4279179050,A.az,17,A.bg,A.a4,0.84,C.cy(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.db,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iA(C.iK(A.be,!1,4279310375,A.az,16,A.bg,A.a4,0.88,C.cy(),"MEETING MINUTES\nDate: "+C.byS()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iA(C.iK(A.be,!1,4279310375,A.az,17,A.bg,A.a4,0.88,C.cy(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iA(C.iK(A.be,!1,4279310375,A.az,15,A.bg,A.a4,0.8,C.cy(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.db,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pm,v)},
ckW(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eok.t(0,this.z)},
ckV(d){if(this.jm()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2H(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cd,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hMg(d)
s=o?12:18
r=o?A.I:A.cI
if(o)if(e)q=f
else q=g?A.al:A.ai
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.M(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Lx,A.h,p,p,D.Ct,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hi,B.aH(p,new B.am(A.W,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bGN(d){var w,v=null,u=this.jm()
if(u==null)return A.bF
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ai,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bq],x.p)
A.d.v(w,new B.J(D.NY,new C.edM(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
um(d){return this.btI(d)},
btI(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$um=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aHj.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nv(),$async$um)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ec6(t,d))
case 1:return B.h(u,v)}})
return B.i($async$um,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ens
w=h.e
if(w==null)return h.bxp()
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
p=B.aG(u,A.eq,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b1e
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQs()}else j=!1
if(j)k.push(new C.a5F(h.a.c,!1,h.e.gb4T(),h.gc1J(),g))
else if(s&&h.e!=null&&!h.jH()&&C.c9w(h.e.w)){j=h.a
k.push(new C.a5F(j.c,j.d,g,h.gc2S(),g))}if(s)k.push(h.bGJ(w,t,r))
if(s&&h.jH()){w=t?A.fu:A.k0
j=B.m(14)
i=B.H(A.bj.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.by6,A.aa,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fu,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zC,A.iI,g,g,g))}w=!n
if(w&&!h.jH())k.push(h.bWI(t,r))
if(w&&h.jH())k.push(h.crX(t))
if(r&&h.jm()!=null&&w&&!h.jH())k.push(h.bWE(t))
j=B.a([],l)
if(q&&w)j.push(new B.a3(132,g,h.b0F(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a3(g,72,h.b0F(t,!1),g))
i.push(B.D(new B.bG(A.b1,g,g,h.byF(v,t,!s||p),g),1))
if(h.ckW(r)&&u&&s&&!h.jH())i.push(h.c1x(v,t,r))
j.push(B.D(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jH()&&h.ckV(!1))j.push(new B.a3(240,g,h.bJg(t),g))
k.push(B.D(B.B(j,A.af,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a3(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bWF(t))
return B.cd(g,m,B.bq(!1,new B.am(A.W,g,A.a9,A.q,w,g),!0,!1,A.ah,!0,!0),g,!1,!1,g,!1)},
bxp(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.L(p).ax.a===A.H
p=w?A.bW:A.bM
v=r.a.e
u=r.c0N(A.bj,A.p3,new C.ecP(r),r.gc4Z(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aIe(A.bj,A.hQ,"Blank Presentation",new C.ecQ(r)),1),A.aw,B.D(r.aIe(A.aW,A.xa,"Class Template",new C.ecR(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bt,s,A.me,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ab],t)
t=r.d
if(t.length===0)u.push(r.buu(w))
else{t=new B.hw(t,B.U(t).k("hw<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ecS(r,w),x.l))}return B.cd(q,p,B.bq(!1,B.cL(u,q,new B.M(18,12,18,v),q,q,A.aj,!1),!0,!1,A.ah,!0,!0),q,!1,!1,q,q)},
bF7(){this.n(new C.eds(this))
var w=this.c
w.toString
if(B.aG(w,A.bP,x.w).w.a.a<900){w=$.aT.af$.d.c
if(w!=null)w.jd()}},
acy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jm()==null){w=1
break}s=t.c
s.toString
s=B.L(s)
r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.efD(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acy,v)},
zP(d,e){return this.clg(d,e)},
clg(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.TG,!0,"Dismiss",j,new C.ehb(),new C.ehc(d,e),A.ij,!0,x.N),$async$zP)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afX()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQs()){r.afX()
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
p=B.a5(i)
j=r.c
if(j==null){w=1
break}j.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.hN(D.TG,!0,"Dismiss",j,new C.ehd(),new C.ehe(d),A.Y,!0,x.y),$async$zP)
case 20:if(g===!0)r.Mn(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adC("Rename presentation",d.b),$async$zP)
case 24:l=g
if(l!=null)r.cfR(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.m(0,"id",C.cy())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.ehf(r,k))
r.oB()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zP,v)},
aWR(d,e){var w=null
return B.bI(!1,D.f3_,w,w,!0,w,w,e,w,B.fm(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.at,w,A.lq,w,w,w,w,w,A.k7,w,w))},
buu(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ecb(this,d),null)},
bDf(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.edg(),x.dv).bZ(0,new C.edh()),v=B.z(w,w.$ti.k("G.E"))
return new B.C(G.ack,this.aIN(v,e,new C.edi(),f),null)},
aIN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eA)
t=e.j(g?0.14:0.1)
s=new B.b3(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.al:A.bw,n,n,n,10),A.vd],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.aZ,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.np,n,n,n))
A.d.v(l,u)}return B.eX(A.a3,B.B(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
bus(d,e,f){return this.aIN(d,e,null,f)},
bDh(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cW7
else if(v==="hati_kuhoweya")w=D.cJt
else{if(v==="hati_kiapo_uongozi")v=D.cxk
else v=C.ki(v)?D.cDS:A.NB
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.edl(this,f,d,e,w),null)},
bWF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jm()
if(i==null||i.b!==D.cM)return A.bF
w=k.UF(i)
v=k.aqa(i)
u=A.x.j(0.55)
t=x.p
s=B.bq(!1,new B.C(A.zF,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bI(!1,D.eZZ,j,j,!0,j,j,new C.eeM(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ah,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.H(A.bj.j(0.45),A.r,1)
o=B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h4,B.bT(new B.C(A.eH,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bj,j,j,j,j,2,D.bDS,A.z,!0,j,!0,j,!0,v,A.ag,j,j,j,j,j,A.vg,j,j,j,j,j,j,!1,"\u2022",j,new C.eeN(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.yi,A.am,j,A.QH,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.ba),j),1)
q=B.m(16)
p=d?A.bi:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.D(B.ch(B.B(B.a([k.t5(G.KC,j,new C.eeO(k,i),d),k.t5(G.WS,j,new C.eeP(k,i),d),k.t5(I.ago,j,new C.eeQ(k,i),d),k.t5(I.XB,j,new C.eeR(k,i),d),k.t5(k.buq(i.as),j,new C.eeS(k,i),d),k.t5(D.ahy,j,new C.eeT(k,i),d),k.t5(D.ahx,j,new C.eeU(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aZ),1)
m=A.k.N(i.w)
return B.bZ(0,B.aD(!1,A.Y,!0,j,B.u(B.a([s,r,new B.C(D.bfB,B.p(j,B.B(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ai,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d6],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ls,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bWE(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jm()
if(m==null)return A.bF
w=m.b
v=w===D.cM
u=B.m(18)
t=x.O
t=d?B.a([A.bi,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.aa(0,A.G,A.x.j(0.12),A.cs,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_k(A.j2,"Edit",new C.eex(o,m),d,!0))
if(w===D.l3)p.push(o.b_k(A.ED,"Shape & ring",new C.eey(o),d,!0))
p.push(o.t5(Av.EL,"Format",new C.eez(o),d))
if(v)A.d.v(p,B.a([o.t5(G.KC,n,new C.eeA(o,m),d),o.t5(D.ahy,n,new C.eeB(o,m),d),o.t5(D.ahx,n,new C.eeC(o,m),d)],q))
p.push(A.b7)
p.push(o.cjb(A.e4,n,o.gaMK(),d,!0))
p.push(o.t5(A.hl,"Done",new C.eeD(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.w,t,n,n),A.n),n,n,n,A.DD,A.ls,n,n,n)},
buq(d){switch(d.a){case 2:return D.Xy
case 1:case 5:return D.XA
default:return D.Xz}},
bXu(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.be}},
awc(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aF
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
return new B.C(A.qd,B.aD(!1,A.Y,!0,n,B.aI(!1,v,!1,B.eq(new B.C(new B.M(q,8,q,8),B.B(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t5(d,e,f,g){return this.awc(d,e,f,g,!1,!1)},
b_k(d,e,f,g,h){return this.awc(d,e,f,g,h,!1)},
cjb(d,e,f,g,h){return this.awc(d,e,f,g,!1,h)},
bGJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bi,A.M],m):B.a([A.c,A.mo],m)
w=B.H(e?A.aI:A.pV,A.r,1.2)
v=B.a([new B.aa(0,A.G,A.bj.j(e?0.18:0.1),A.cs,18)],x.V)
u=p.a0j(A.eo,"Back",p.gbAn(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d6,B.D(B.B(B.a([new B.dp(1,A.cj,t,o),A.aa,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ai,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ru,o,A.e,A.j,0,A.cR,o),1)],q)
if(!p.jH()){u=p.a0j(A.uJ,"Undo",p.ax.length===0?o:p.gcsr(),e)
A.d.v(r,B.a([u,p.a0j(D.brM,"Redo",p.ay.length===0?o:p.gceA(),e)],q))}r.push(p.a0j(A.wS,"PDF",new C.edF(p),e))
r.push(p.a0j(A.hm,"Download as video",new C.edG(p),e))
if(!p.jH())r.push(B.AK(o,o,B.V(A.ns,e?A.al:A.bw,o,o,o,o),new C.edH(p),A.J,new C.edI(p),A.ah,"More",x.N))
r.push(A.d6)
r.push(B.aD(!1,A.Y,!0,o,B.aI(!1,B.m(14),!0,B.eq(D.dOQ,o,new B.o(o,o,o,B.m(14),o,K.F0,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gax0(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aC,A.w,m,o,o),A.n),o,o,o,D.bfw,D.bkC,o,o,o)},
crX(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.H(d?A.cV:A.aJ,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.ij(A.rZ,"Print",new C.ehX(w),d),w.ij(A.wS,"Download PDF",new C.ehY(w),d),w.ij(A.p9,"Present",w.gax0(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aZ),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zC,G.ae3,v,v,v)},
a0j(d,e,f,g){var w,v=null
if(f==null)w=g?A.bf:A.dq
else w=g?A.al:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c8)},
bWI(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.H(d?A.cV:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.J(p,new C.eeX(r,d),t),t.k("ai.E"))
t.push(new B.C(W.adK,new B.fi(new C.eeY(r),q),q))
A.d.v(t,w?B.a([new B.C(S.uo,r.aee(A.kX,"Ending celebration",r.gc5b(),d),q),new B.C(S.uo,r.aee(A.ED,"Logo ring & frame",r.gc5R(),d),q)],x.p):A.fX)
A.d.v(t,w?B.a([new B.C(S.uo,r.aee(A.nt,"Look and feel",r.gc5S(),d),q),new B.C(S.uo,r.aee(A.pd,"Edit this slide's text",r.gc6n(),d),q)],x.p):A.fX)
t.push(new B.C(S.uo,B.hA(B.aH(q,B.p(q,D.emX,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.aa(0,A.G,O.kU.j(0.4),A.J,10)],x.V),D.ajv,A.n),q,34,q,q,A.io,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eeZ(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bl4,q,q,A.aZ)
s=e?8:10
return B.p(q,B.u(B.a([t,B.ch(r.cgY(d),A.q,q,A.z,q,new B.M(8,2,8,s),q,q,A.aZ)],x.p),A.af,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zC,q,q,q,q)},
cgY(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cQF[v]
u.a=null
s=u.a=t.b
w.push(e.ld(e.ciC(s),t.a,new C.egl(u,e),a3,D.aHj.t(0,s)))}w.push(e.ij(A.kA,"Notes Slide",new C.egm(e),a3))
w.push(e.ld(A.EC,"Quiz",new C.egn(e),a3,!0))
w.push(e.ld(L.Ef,"Worksheet",new C.egy(e),a3,!0))
w.push(e.ld(P.EH,"Flashcard",new C.egJ(e),a3,!0))
w.push(e.ld(A.Lo,"Lab Report",new C.egU(e),a3,!0))
w.push(e.ld(A.wY,"Rubric",new C.eh0(e),a3,!0))
w.push(e.ld(A.oa,"Minutes",new C.eh1(e),a3,!0))
w.push(e.ld(A.p7,"Syllabus",new C.eh2(e),a3,!0))
w.push(e.ld(A.Ls,"Timeline",new C.eh3(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cRP[v]
w.push(e.ld(r.b,r.c,new C.eh4(e,r),a3,!D.aHn.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ij(A.xd,a0,e.gaIu(),a3),e.ij(A.rW,"Picture",new C.ego(e),a3),e.ij(A.x7,"Bio link",new C.egp(e),a3),e.ij(A.Y7,"Table",new C.egq(e),a3),e.ij(A.Lr,"Sticky",new C.egr(e),a3),e.ij(A.uz,"Divider",new C.egs(e),a3),e.ij(A.EM,"Header",new C.egt(e),a3),e.ld(A2.Em,"Rectangle",new C.egu(e),a3,!0),e.ld(A.rO,"Circle",new C.egv(e),a3,!0),e.ld(A.Xp,"Triangle",new C.egw(e),a3,!0),e.ld(A.ji,"Arrow",new C.egx(e),a3,!0),e.ld(D.bqf,"Parallelogram",new C.egz(e),a3,!0),e.ld(D.bsJ,"Hexagon",new C.egA(e),a3,!0),e.ld(A.uz,"Line",new C.egB(e),a3,!0),e.ld(A.wS,"PDF",new C.egC(e),a3,!0),e.ld(O.Yf,"Signature",new C.egD(e),a3,!0),e.ij(A1.Af,"Quote",new C.egE(e),a3),e.ij(D.X_,a1,new C.egF(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bP,x.w).w
u=x.p
t=B.B(B.a([e.aJj("Wide 16:9",D.B9,a3),e.aJj("Short 9:16",D.nA,a3),new B.C(A.hi,B.mJ(D.buP,d,D.eWB,d,new C.egG(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bAC("This slide",!e.Q,a3,new C.egH(e)),A.bq,e.aLu("All slides",e.Q,a3,new C.egI(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bAD()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.J(D.a_1,new C.egK(e),n),n.k("ai.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cSB[v]
j=B.aY(k)
i=new B.ay(k===4294967295?A.dq:A.bf,1.5,A.r,-1)
l.push(new B.C(A.hi,B.aH(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.egL(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.ch(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bA7()
g=B.U(h).k("J<1,C>")
h=B.z(new B.J(h,new C.egM(e,a3),g),g.k("ai.E"))
return new B.a3(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ch(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ),A.ar,e.bTF(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jm()
w=e.c
w.toString
w=B.aG(w,A.bP,x.w).w
u=new C.egk(e)
t=new C.eh5(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NY,f.dy,new C.egN(e,u,f),A.aW)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NY,q,new C.egO(e,u),A.bj))
return new B.a3(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ij(A.kA,w,new C.egP(e),a3),e.ij(A.rZ,"Print deck",new C.egQ(e),a3),e.ld(D.afx,"Export JSON",new C.egR(e),a3,!0),e.ij(A.fC,"Duplicate Slide",e.gaNy(),a3),e.ij(A.e4,a2,e.gaML(),a3),e.cmz(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jm()
w=x.p
u=B.a([e.ij(D.X_,a1,new C.egS(e),a3),e.ij(A.fC,"Duplicate",e.gaNy(),a3),e.ij(A.e4,a2,e.gaML(),a3),e.ij(A.p9,"Present",e.gax0(),a3),e.ij(A.Am,a0,e.gaIu(),a3),e.ij(A.Ez,"Fit Text",new C.egT(e),a3),e.ij(A.wS,"Download PDF",new C.egV(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ij(A.kC,"Transfer",new C.egW(e),a3))
if(f!=null){w=B.a([A.aa,e.ij(G.KC,"Bold",new C.egX(e,f),a3),e.ij(G.WS,"Italic",new C.egY(e,f),a3),e.ij(G.af8,"Underline",new C.egZ(e,f),a3),e.ij(Aa.KD,"Bullets",new C.eh_(e,f),a3),e.bJ_(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bGN(a3))
w.push(e.ij(D.boX,"Delete",e.gaMK(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJj(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nA
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4B,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d6,D.bu0],v))
return new B.C(A.hi,B.jQ(t,t,t,B.B(u,A.m,t,A.e,A.R,0,t,t),t,new C.ecK(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cmz(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.bf:A.cp,A.r,1)
u=B.m(8)
t=B.V(A.Ec,d?A.aA:A.ai,q,q,q,14)
s=B.aF(q,q,q,q,D.aiw,q,q,q,new C.ehs(r,p),q,q,q,q,q,A.c8)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aim,q,q,q,new C.eht(r,p),q,q,q,q,q,A.c8)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.DT,A.lZ,q,q,q)},
ciC(d){switch(d.a){case 6:return P.EH
case 7:return A.EC
case 8:return L.Ef
case 4:return A.EM
default:return A.kA}},
bJ_(d,e){var w=null,v=B.H(e?A.bf:A.cp,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aiw,w,w,w,new C.edS(this,d),w,w,w,w,w,A.c8),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aim,w,w,w,new C.edT(this,d),w,w,w,w,w,A.c8)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.un,A.lZ,w,w,w)},
bTF(d){var w=null
return B.AK(B.Ca(B.V(Ad.X2,d?A.al:A.bw,w,w,w,16),w,w,D.f0G,w,w,w),w,w,new C.eep(),A.J,this.gbv6(),A.ch,"Slide layout",x.fO)},
ld(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.H(g?A.dv:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dE:A.bj,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Lx,A.h,w,w,D.Ct,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hi,B.aD(!1,A.Y,!0,w,B.aI(!1,v,!0,B.eq(new B.C(A.h4,B.u(B.a([new B.am(A.W,w,A.a9,A.h,q,w),A.d5,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ij(d,e,f,g){return this.ld(d,e,f,g,!1)},
b0F(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.aj:A.aZ
v=B.hG(t,new C.ehE(u,s,e,d),s.r.length,A.ch,t,w,new C.ehF(e),!1)
s=d?A.aG:A.bM
w=B.a([],x.p)
if(e&&!u.jH())w.push(new B.C(A.ch,B.Ge(E.aiJ,new C.ehG(u),B.nN(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aI_,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
byF(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nA?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.M(u,u,u,u),new B.bG(A.b1,v,v,new B.fJ(w,B.aH(v,B.cj(new C.ed8(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ed9(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
byH(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ki(a9.w))===!0,b1=b0&&C.fks(b3),b2=b0&&b3.b===D.kH&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jH())v=!b0||a7.bVN(b3)
else v=!1
if(!a7.jH())u=!b0||a7.bVM(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bj
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fI8(b3))o=a8
else if(p&&!a7.jH())o=a7.gc1L()
else o=a7.jH()?a8:new C.ecX(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jF
i=w&&C.fI8(b3)&&a7.yT()?new C.ecY(a7,b3):a8
h=v&&b3.b===D.cM?new C.ecZ(a7,b3):a8
g=u?new C.ed_(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bn
else e=q?A.bS:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bS.j(0.08)
else a0=b3.b===D.kH?A.K:a8
if(b1){a1=a7.jH()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bS.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bP,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yT()
a3=b3.b===D.cM
a4=a3?a7.UF(b3):a8
a5=a3?a7.aqa(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bP,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ed0(a7,b3):a8
a3=v&&a3?new C.ed1(a7,b3):a8
a6=C.aYN(q,a4,a1,b3,a5,a2,a3,new C.ed2(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aH(a8,B.p(a8,D.bwM,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ed3(a7,b3,b4,b5),a8,a8,new C.ed4(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jH()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aH(a8,B.p(a8,D.bxq,A.h,a8,a8,new B.o(A.eP,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbRk(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jH()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aH(a8,B.p(a8,D.byY,A.h,a8,a8,new B.o(A.bS,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ed5(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cM)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bP,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.at(B.aH(a8,B.p(a8,D.f8K,A.h,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.aa(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kx,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ed6(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aH(j,B.et(A.A,f,new B.am(A.W,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLu(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bj:A.bG,A.r,1)
if(e)t=A.bj
else t=f?A.aA:A.ai
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d6,B.p(r,D.Lx,A.h,r,r,D.Ct,r,12,r,r,r,r,r,12)],s))
return B.aH(r,B.p(r,B.B(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.fV,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bAC(d,e,f,g){return this.aLu(d,e,f,g,!1)},
c1x(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.au()
v.O$=0}v=d.c
w.m(0,k,new B.ap(new B.bc(v,A.b0,A.aM),$.au()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aN
t=f?A.vH:l
if(f)s=new B.c2(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else s=l
r=f?B.a([new B.aa(0,A.G,A.x.j(0.12),A.tq,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.al:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.aWR(e,new C.ef0(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bm(l,new B.b2(4,B.m(10),A.dd),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ef1(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.am,l,l,l,l),1)],q),A.af,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.M(12,w,12,v),l,l,l)},
aOO(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jm()
if(a2==null)return A.bF
w=new C.ee5(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dL:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.aWR(a3,a0.gbF6())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.eX1,B.D(B.mb(a1,a1,a1,u,0.05,new C.ee6(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.f7k,B.D(B.mb(a1,a1,a1,t,0.05,new C.ee7(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cM
if(m)o.push(B.B(B.a([D.eRi,B.D(B.mb(a1,a1,a1,96,10,new C.ee8(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l3
if(l||n===D.kH||n===D.Pf)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.f1k,B.D(B.mb(a1,a1,a1,s,0,new C.ee9(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.f8u,B.D(B.mb(a1,a1,a1,r,0,new C.eea(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.AB[j]
i.a=null
g=h.a
i.a=g
k.push(B.jQ(a1,a1,a1,new B.x(h.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eeb(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c8(A.bH,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Aw[j]
f.a=null
g=e.a
f.a=g
h.push(B.jQ(a1,a1,a1,new B.x(e.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eec(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.c8(A.bH,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.J(v,new C.eed(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.c8(A.bH,l,A.bx,6,6),A.ab,B.fTW(new C.eee(w,a2),D.c8M,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eT){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.J(v,new C.eef(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c8(A.bH,m,A.bx,0,6)],p))}o.push(A.ab)
o.push(B.dn(D.byK,D.f39,new C.eeg(a0,a5),B.bk(A.bQ,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.aj,a5)
if(a5)return d
q=a3?A.cV:A.c
p=a4?A.vH:a1
if(a4)o=new B.c2(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.aa(0,A.G,A.x.j(0.12),A.tq,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.DE,a1,a1,a1)},
bJg(d){return this.aOO(d,!1,!1,null)},
c0N(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.eej(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eHM,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.D(B.u(B.a([w,A.bA,A.d5,r.bus(D.cBz,d,B.L(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dP(B.hA(B.aD(!1,A.Y,!0,q,B.aI(!1,q,!0,B.eq(D.erP,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.aa(0,A.G,A.bS.j(0.4),A.e6,8)],p),D.ajA,A.a5),q,q,q),A.cE,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.L(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aZn,D.aZJ],v):B.a([A.c,A.k0],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.aa(0,A.G,d.j(s?0.18:0.1),A.cs,14)],p),new B.a7(A.ax,A.aC,A.w,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aIe(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ebT(this,g,d,e,f),null)},
adC(d,e){return this.ccZ(d,e)},
ccZ(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.au()
q=new B.ap(new B.bc(e,A.b0,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.efY(d,q),p,null,!0,!0,x.N),$async$adC)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adC,v)},
O8(d){var w=d.bQ()
return""+B.bB(w)+"/"+B.bQ(w)+"/"+B.bw(w)}}
C.acS.prototype={}
C.aw6.prototype={
S(){return new C.b99(null,null)}}
C.b99.prototype={
gcoE(){var w,v=this.a.c,u=v.f.bQ(),t=""+B.bB(u)+"/"+B.bQ(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.oX,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bi(u,D.be1,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bo3()},
Hz(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.av(0,new B.hE(w,v,A.co).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.C(D.bju,B.c4(new B.h3(B.a([u,w],x.dS)),new C.cVq(this),v),v),v,v,v)}}
C.b9n.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.at(new B.C(D.bjL,B.aD(!1,A.Y,!0,w,B.p(w,B.bu(B.m(22),B.u(B.a([new B.C(D.biY,B.u(B.a([B.p(w,D.bxw,A.h,w,w,new B.o(A.aF.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.f52,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eIS,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bd5,B.B(B.a([B.D(B.bI(!1,D.eVq,w,w,!0,w,w,new C.cVM(d),w,B.fm(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.mz,w,A.nE,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bi,w,w,w,48,w,w,w,w,w,1),B.D(B.bI(!1,D.f_h,w,w,!0,w,w,new C.cVN(d),w,B.fm(w,w,w,w,w,w,w,w,w,w,w,A.aF,w,w,w,w,w,A.mz,w,A.nE,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.SD,new B.o(A.aG,w,u,v,D.cBS,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.Ib.prototype={
S(){return new C.b98()}}
C.b98.prototype={
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
return B.dP(B.d7(B.aH(o,B.w3(B.di(o,B.B(B.a([r,A.aw,new B.dp(1,A.cj,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.fg:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b6,A.R,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,A.qe,o,o,1/0),A.co,A.jf,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cVl(p,d),new C.cVm(p),new C.cVn(p),new C.cVo(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.NR.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.Y,!0,t,B.aI(!1,s,!0,new B.C(A.eH,B.B(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aC,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ep,B.D(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mV,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.Yv.prototype={
S(){return new C.aBv(D.db,null,null)}}
C.aBv.prototype={
gWR(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.bdC,null,1,null,v)
v.w!==$&&B.bJ()
v.w=w
u=w}return u},
b13(d){if(!this.a.c.ay)return
this.x=d
this.gWR().ie(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.at2(D.ey9)
C.hJd()
v.Px()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWR().p()
v=w.z
if(v!=null)v.a9(0)
C.at2(D.eya)
C.hJg()
w.bqa()},
cro(){B.j7()
this.n(new C.eiD())
var w=this.c.G(x.q).f
w.a2m()
if($.bgO)w.P(D.ev1)},
Px(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cN(B.dB(0,0,0,0,0,A.o.D(C.fS6(u,w),1,120)),new C.eit(v))},
cr3(){var w,v=this
v.n(new C.eiC(v))
if(v.r)v.Px()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQD(){var w=this.a.c.db
return(w==null?"":w).length!==0},
clm(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.eiu(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cN(A.nm,new C.eiv(w))},
asY(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.eip(u))
u.Px()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQD()){u.clm()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.eiq(u,A.o.H(w+1,s)))
u.b13(w)
u.Px()}},
cbE(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.eir(v))
v.Px()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.eis(v,w,t))
v.b13(w)
v.Px()}},
cmL(d){var w,v=this,u=v.e
if(u===D.cd){u=v.d
u===$&&B.c()
return new B.na(d,new B.cx(u,x.ac))}w=v.cmM(u)
u=v.d
u===$&&B.c()
return B.ql(new B.na(d,new B.cx(u,x.ac)),w,new C.eiA(),A.b8,A.b8,new C.eiB(v))},
cmM(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bdY
case 16:return A.kW
case 18:return A.nk
default:return A.oZ}},
cmK(d,e,f){var w,v,u,t=null,s=B.cE(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.tr,A.J,w),w.k("bd<bC.T>")),t,!0)
case 3:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.Pw,A.J,w),w.k("bd<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.i5,A.J,w),w.k("bd<bC.T>")),t,!0)
case 5:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.tp,A.J,w),w.k("bd<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.iu(A.A,new B.cZ(s,!1,e,t),t,new B.bd(s,new B.bl(0.82,1,w),w.k("bd<bC.T>")))
case 7:w=x.b
return B.iu(A.A,new B.cZ(s,!1,e,t),t,new B.bd(s,new B.bl(1.18,1,w),w.k("bd<bC.T>")))
case 8:return B.c4(s,new C.eiw(s),e)
case 9:return B.c4(s,new C.eix(s),e)
case 10:return B.c4(s,new C.eiy(s),e)
case 11:return B.c4(s,new C.eiz(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iu(A.A,e,t,new B.bd(s,new B.bl(1.03,1,w),w.k("bd<bC.T>"))),t)
case 14:w=s.gq(0)
v=x.K
return B.jz(B.jd(e,new B.bd(s,new B.bl(A.tr,A.J,v),v.k("bd<bC.T>")),t,!0),A.q,new C.bnH(w,t))
case 15:w=x.K
return B.jd(e,new B.bd(s,new B.bl(A.Pw,A.J,w),w.k("bd<bC.T>")),t,!0)
case 19:w=B.dh()
w.mf((1-s.gq(0))*2)
v=s.gq(0)
u=s.gq(0)
w.jg(v,u,v,1)
return B.fn(A.A,B.d7(e,s.gq(0)),t,w,!0)
case 20:return B.et(A.A,(1-s.gq(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.alN(B.c4(n.gWR(),new C.eiE(n,v,w),m),m),A.q,m)}else{t=B.qW(new C.Ha(w,!0,!1,m))
l=B.aY(w.e)
u=n.cmL(B.ec(B.jz(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fS6(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oz,m,m,m),A.bq,D.bzM],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fJ,m,m,m)
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
l.push(B.bZ(0,new C.LM(new C.Df(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nA?0.5625:1.7777777777777777
l.push(B.at(new B.fJ(r,B.jz(B.tN(A.ah,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgO){r=B.Ge(A.kE,new C.eiF(d),B.nN(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.bq(!0,B.B(B.a([r,A.aa,B.Ge(B.V(n.r?Ag.x5:A.iK,m,m,m,m,m),n.gcr2(),B.nN(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ah,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.bq(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hb,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fJ,m,m,m),!0,!1,A.ah,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.bq(!0,B.aH(A.c5,B.p(A.kO,$.bgO?A.bF:s,A.h,m,m,m,m,64,m,m,D.beK,m,m,150),A.z,!1,m,n.gcrn(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ah,!0,!0),m,m,m,0,0,m))
return B.cd(m,A.x,B.aH(m,new B.am(A.W,m,A.aY,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eiG(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.Ii.prototype={
B(d){var w=null
return B.p(w,B.bq(!0,new B.C(E.adw,this.c,w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aSE,w,w,w,w,w,w,w,w)}}
C.bnH.prototype={
iH(d){return new B.ac(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jj(d){return d.b!==this.b}}
C.be_.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPx
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aB:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.di(r,B.at(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uQ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hP,r,64,r,r,r,r,64)
return B.aH(r,new B.a3(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bdZ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d2W.h(0,p)
if(o==null)o=D.cRV
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.w,o,q,q)
p=p?A.cT.j(0.25):q
v=r.e
u=v?B.H(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahJ:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ef,q,q,52)
return B.aH(q,new B.a3(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aH8.prototype={
aN(){this.aV()
this.aU()
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
this.aU()
this.bu()}}
C.btm.prototype={}
C.aJa.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aYQ.prototype={}
C.U4.prototype={
S(){return new C.aBt()},
bbj(d){return this.e.$1(d)}}
C.aBt.prototype={
gb_q(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7Y(){var w,v
if(this.d==="all")return B.bj(this.a.d,!0,x.I)
w=this.gb_q()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaK9(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_q()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0E(){return A.d.cI(this.ga7Y(),0,new C.ei9())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.P8()},
P8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZr(s.c,s.f),$async$P8)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ei5(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P8,v)},
HB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7Y()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fnE(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oC(o,q.c,q.f),$async$HB)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eH(new C.ei8(t,p),!1,null,x.H)
w=4
return B.b(B.a8(o,!1).cr(q),$async$HB)
case 4:q=t.a
w=5
return B.b(B.oB(q.c,q.f),$async$HB)
case 5:w=6
return B.b(t.P8(),$async$HB)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HB,v)},
Pv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hm(o,D.dFN,!0,"NgmySlidesTransferScan",x.N),$async$Pv)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.ei6(t))
w=4
return B.b(C.aeY(s),$async$Pv)
case 4:r=e
t.n(new C.ei7(t))
o=J.a6(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.G(x.q).f.P(D.etV)
w=1
break}w=5
return B.b(t.a.bbj(r),$async$Pv)
case 5:q=t.c
if(q==null){w=1
break}B.a8(q,!1).M(null)
q=t.c.G(x.q).f
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
return B.b(B.oC(s,r.c,r.f),$async$HA)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fnT(null,A.d.gK(n),s,t.a.f)}else q=C.fnT(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.ae("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.F0(q,"ngmy_slides_"+p,!1),$async$HA)
case 4:o=e
s=t.a
w=5
return B.b(B.oB(s.c,s.f),$async$HA)
case 5:w=6
return B.b(t.P8(),$async$HA)
case 6:s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HA,v)},
a0u(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.eia(t))
w=3
return B.b(C.byA(),$async$a0u)
case 3:s=e
t.n(new C.eib(t))
if(s==null||J.ci(s)){w=1
break}w=4
return B.b(t.a.bbj(s),$async$a0u)
case 4:r=t.c
if(r==null){w=1
break}B.a8(r,!1).M(null)
r=t.c.G(x.q).f
q=J.a6(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0u,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.da:A.bM,k=o.ga7Y().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.w,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.ct,m?A.al:A.ai,n,n,n,n),n,n,n,new C.eie(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yf],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.aa(0,A.G,A.bj.j(0.35),A.eK,24)],x.V)
u=B.an(n,B.V(A.p3,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bAh,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ep,B.D(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bni],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hA(B.aH(A.c5,D.erR,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc6z(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.W,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.YK,A.n),n,n,n,n,E.VF,n,n,1/0),A.dW,o.atX(m,"What to transfer"),A.ab,B.B(B.a([B.D(o.aSO(A.p9,m,new C.eif(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aSO(D.bq8,m,new C.eig(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d3,o.atX(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c2,n,n,n))}else A.d.v(v,new B.J(u,new C.eih(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.me)
w.push(o.atX(m,"Transfer options"))
w.push(A.ab)
w.push(B.B(B.a([B.D(o.amZ(A.b_,k,!0,A.j5,m,o.r,o.gc0R(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aIf(A.jy,!0,A.iL,m,o.gcic(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.B(B.a([B.D(o.bt_(A.aS,k,A.hm,m,o.r,o.gc0O(),"Download .json","Backup file"),1),A.aw,B.D(o.aIf(A.aX,!0,Aq.xf,m,o.gctH(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bj.j(0.28),A.r,1)
s=B.V(A.kY,A.bj.j(0.9),n,n,n,18)
r=o.gaK9()
q=o.gb0E()
p=o.gb0E()===1?"":"s"
A.d.v(w,B.a([A.bt,B.p(n,B.B(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.al:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bq(!0,B.u(B.a([new B.C(Ac.Kf,i,n),B.D(B.cL(w,n,D.bi7,n,n,A.aj,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)],h)
if(o.f)j.push(B.p(n,U.SW,A.h,A.dw,n,n,n,n,n,n,n,n,n,n))
return B.cd(n,l,new B.am(A.W,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acL(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hPo(s,t.d,t.e),$async$acL)
case 2:return B.h(null,v)}})
return B.i($async$acL,v)},
atX(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ai,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSO(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bj
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.aa(0,A.G,A.bj.j(0.2),A.cs,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bj,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.Y,!0,s,B.aI(!1,r,!0,B.eq(new B.C(A.bB,B.u(B.a([t,A.T,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bDg(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bAq,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.w,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rO
if(p)r=A.bj
else r=e?A.bf:A.dq
return new B.C(A.cK,B.aD(!1,A.Y,!0,q,B.aI(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ei4(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
amZ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qg,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.aig,A.h,s,s,D.aSr,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d7(B.aD(!1,A.Y,!0,s,B.aI(!1,p,!0,B.eq(new B.C(E.Vj,B.u(B.a([new B.am(A.W,s,A.a9,A.h,u,s),A.ab,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aIf(d,e,f,g,h,i,j){return this.amZ(d,e,!1,f,g,!1,h,i,j)},
bt_(d,e,f,g,h,i,j,k){return this.amZ(d,e,!1,f,g,h,i,j,k)}}
C.U5.prototype={
S(){return new C.bgN()}}
C.bgN.prototype={
Z(){this.a0()
this.abD()},
abD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fnT(null,A.d.gK(m),k,r.a.f):C.fnT(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ki(A.d.gK(n).w))C.fnE(A.d.gK(r.a.d),D.cQ4)
n=r.a
m=n.c
n=C.hMw(n.d)
w=7
return B.b(C.fnS(p,C.hMB(r.a.d),n,m,q),$async$abD)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.eii(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.eij(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.L(d).ax.a===A.H,h=i?A.da:A.bM,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eik())
v=B.aF(j,j,j,j,B.V(A.eo,i?A.al:A.ai,j,j,j,18),j,j,j,new C.eil(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yf],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dQ,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.YK,A.n),j,j,j,j,E.VF,j,j,1/0)
q=B.m(24)
s=B.H(A.b_.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3W,A.L,j,j))
else if(k.d==null)r.push(D.dOr)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.aa(0,A.G,A.aB.j(0.35),A.cs,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eVS,A.ar,B.aH(j,B.p(j,B.B(B.a([D.bBV,A.aw,B.d(m,j,j,j,j,j,j,D.eJe,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bFG,A.n),j,j,j,j,A_.adi,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eim(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eZQ,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pk(j,j,!1,l,j,!0,!0,j,!1,D.bad),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hY,A.L,j,j))
return B.cd(j,h,B.bq(!0,B.u(B.a([new B.C(Ac.Kf,v,j),B.D(B.ch(B.u(B.a([t,A.aO,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bHx,A.n),j,j,j,j,A.rJ,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adB,j,j,A.aj),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),j,!1,!1,j,j)}}
C.aBq.prototype={
S(){return new C.aBr(new B.ap(A.as,$.au()),B.k9(!0,null,!0,!0,null,null,!1))}}
C.aBr.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.ebN(w))
$.aT.x1$.push(new C.ebO(w))},
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.e.p()
this.a2()},
aV3(){var w,v=this.c
v.toString
w=C.xI(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a8(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eq,x.w).w,i=B.m(28),h=B.H(A.bj.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.aa(0,A.G,A.bj.j(0.28),A.to,36),D.a7g],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bxz,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ab,D.eTe,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aSQ,k,k,k,k,A.wC,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b3(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.aa(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bF(1,A.bp,B.di(A.A,new B.x(p,k,D.eDe,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.c2(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hP,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.H3)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.d7(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bEy,A.z,!0,k,!0,k,!1,v,A.ag,k,k,B.a([new B.tE(B.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Af(5,k),new C.bqV()],x.aS),k,k,A.aJd,k,5,k,1,k,k,!1,"\u2022",k,new C.ebJ(l),k,new C.ebK(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.lF,k,k,k,k),0),0,0,0)],a1)
d=C.xI(w.a.a.toUpperCase())==null?k:l.gc0S()
return B.at(new B.C(new B.M(24,24,24,24+j.f.d),B.aD(!1,A.Y,!0,k,new B.d1(A9.Il,B.p(k,B.bu(e,B.u(B.a([a0,new B.C(D.biC,B.u(B.a([new B.am(A.W,k,A.a9,A.q,g,k),A.T,D.eRH,A.bt,new B.a3(1/0,50,B.bK(D.f5S,d,B.bk(A.bj,A.bi,A.ai,k,A.c,k,k,k,new B.b5(B.m(16),A.V),k,k,k)),k),A.ar,B.bI(!1,A.mY,k,k,!0,k,k,new C.ebL(a2),k,B.fm(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.bqV.prototype={
nW(d,e){var w=e.a.toUpperCase()
return e.czD(B.h1(A.br,w.length),w)}}
C.aoC.prototype={
S(){return new C.aBu(B.ye(A.Jz,A.n4,A.t5))}}
C.aBu.prototype={
p(){this.d.p()
this.a2()},
aV2(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iE(w,d)},
a7S(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fw2(s),$async$a7S)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aV2("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7S,v)},
c0Q(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hMz(w[u])
if(t!=null){this.aV2(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uN,s,s,s,t.gbHh(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.rU:Ah.L8,s,s,s,s,s),s,s,s,new C.eio(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.f72,s,s,s,1,s,!0)
r=B.yd(t.d,A.bO,t.gc0P())
w=B.m(28)
w=B.at(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bj,A.r,3),w,B.a([new B.aa(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cd(p,A.x,new B.am(A.W,s,A.aY,A.q,B.a([r,w,B.an(32,B.p(s,D.eWQ,A.h,s,s,new B.o(v,s,B.H(A.bj.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iJ,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.br6.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.Y,!0,w,B.p(w,B.u(B.a([B.p(w,D.bvM,A.h,w,w,D.aSA,w,56,w,w,w,w,w,56),A.aO,D.f6J,A.ar,new B.k3(this.c,new C.eT_(),w,w,x.cI),A.aO,new B.k3(this.d,new C.eT0(),w,w,x.cl),A.ab,D.f6G],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A9.Il,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.VM,D.bje,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5F.prototype={
S(){return new C.bgw(A.bv)},
gd6(){return this.c}}
C.bgw.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XX()
w.d=B.dD(A.h3,new C.e2k(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XX(){return this.ceH()},
ceH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e2i(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.Q(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c9x(p.c),$async$XX)
case 6:r=e
q.a=r==null?A.bv:r
case 4:if(t.c==null){w=1
break}t.n(new C.e2j(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XX,v)},
bJ7(d){var w,v,u=d.a,t=A.o.aj(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aj(u,6e7)%60
v=A.o.aj(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.aj(w,6e7)<30&&A.o.aj(w,36e8)<999?A.aF:A.bS
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.V(A.Ec,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bJ7(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bfq,A.iI,r,r,1/0)}}
C.a6w.prototype={
mH(){var w,v,u,t=this
t.wj()
w=t.cx
v=t.c
w.bkJ(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pq(B.E(["/S",D.dRz,"/URI",new B.qT(B.UD(w.as),A.tt,!0)],x.N,u),u))}}
C.a6x.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_u.prototype={
bs6(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dPS],x.di)
this.w!==$&&B.aO()
this.w=w},
gcCN(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jC(w,new C.cbJ(),B.a2(w).k("jC<ck.E,I>")).ft(0,new C.cbK())},
azc(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h_(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rO(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.j1(d.a,d.b))
s.m(0,"/Border",B.rO(D.bJu))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fQ(t.gcCN()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pq(w,x.Y))}}
C.cbL.prototype={}
C.a0R.prototype={}
C.afM.prototype={}
C.aO3.prototype={
fN(d){var w,v,u,t,s,r,q=this,p=null
q.kO(d)
q.Kq(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.baH(w)
u=x.N
t=x.Y
s=new C.cbL(q.d.a,"/Link",w,p,p,p,p,p,B.S(u,t))
s.bs6(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pq(B.E(["/Type",D.dRx],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6w(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.au0.prototype={}
C.aPx.prototype={
fN(d){var w,v,u,t,s=this
s.kO(d)
w=s.b
if(w!=null){v=B.dh()
u=s.a
v.dZ(u.a,u.b,0,1)
u=d.b
u.hR()
t=s.a
t.toString
u.JB(t)
u.QI(0)
u.of(0,v)
w.fN(d)
u.mK(0)}}}
var z=a.updateTypes(["aw<~>()","~(lp)","T(hT)","~()","T(ey)","T(nV)","T(lp)","~(hT)","T(ey,ey)","Ii(X)","T(nj)","T(kX)","aw<T>()","I(I,hT)","a1<n,@>(hT)","ak<yx>()","n(nj)","T(a5W)","n(lp)","n(vc)","T(Do)","I(hT,hT)","n(ey)","r(ey)","cF(ey)","r(hn)","~(hn)","ey(u3,P,P,P,P,I{fx:n,key:n,rotation:P})","ey(n,P,I)","I(nV,nV)","T(yx)","T(n,ak<yx>)","a1<n,@>(nV)","nj()","WC(X)","ey(n,P,P,P,P,P{align:pw,anim:hn,bullets:T,color:I?,delay:I,fx:n,key:n,style:G9,weight:pP})","ZQ(X)","ey(n,P,P,P,P{anim:hn,delay:I,fx:n,key:n})","aw<~>(nV)","T(m3)","WA(X)","Zo(X)","Zn(X)","NG(X)","XL(X)","ey(u3,P,P,P,P,I,n,n{anim:hn,delay:I,rotation:P,stroke:I,strokeWidth:P})","ey(n,P,P,P,P,P,n,n,I)","ey(P,P,n,I{size:P})","r(qH,P,P)","kX()","nV(a1<@,@>)","~(tU)","Do()","f5(ey)","r(iN)","Xj(X)","~(Df)","XE(X)","I(ey,ey)","ey(ey)","a1<n,@>(ey)","ey(a1<@,@>)","lp(lp)","a1<n,@>(lp)","lp(a1<@,@>)","T(js)","js()","n(hT)","~(ak<nV>)","Q(ak<hT>)","Q(hT)","ak<hT>(n?)","aar(X,I)","~(T(ey,ey))","ab4(X)","acI(X,I)","w(lp,T)","TS(X)","ab7(X)","TV(X)","~(m7)","hT(hT)","P(ey)","YT(X)","Yv(X)","hT()","ak<DJ>()","aw<~>(ak<hT>)","r(br<I,hT>)","C(js)","C(Do)","aw<~>(hn,~())","r(ak<hn>,hn?,~(hn),w)","T(lL)","ak<jc<m7>>(X)","jc<m7>(m7)","hT(a1<@,@>)","U4(X)","ey(n,P,P,P,P,P,I{align:pw,style:G9,weight:pP})","U5(X)","r(hT)","~(lG)","Ha(X,lp,r?)","I(a6x)","aw<ak<a1<n,@>>?>()","n(n)","aw<yv>({paper:n?,photo:dz?,request:n,template!l_})","aw<a5O>({doc!yv,history:ak<+(n,n)>,instruction!n,photo:dz?,template!l_})","ab1(X)"])
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
r=t===u?A.o.gahf(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lW(v,t)
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
C.bKd.prototype={
$1(d){return J.eO(A.dA.gaL(d),d.byteOffset,d.byteLength)},
$S:1663}
C.fb0.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iy(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iy(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iy(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iy(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1664}
C.bUj.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:26}
C.bUk.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bUm.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fqm.prototype={
$1(d){return new C.ZQ(this.a,this.b,C.hNr(),null)},
$S:z+36}
C.eRs.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eRw.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eRx.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eRy.prototype={
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
C.eRt.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eRu.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eRv.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eRn.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hn,w,w,w)
return B.eo(B.a([B.bI(!1,D.eVm,w,w,!0,w,w,new C.eRl(d),w,w),B.bI(!1,D.eUv,w,w,!0,w,w,new C.eRm(d),w,w)],x.p),w,w,D.Uk,v,w,w,w,w,D.f7j,w)},
$S:20}
C.eRl.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eRm.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eRo.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eRp.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eRC.prototype={
$0(){var w=this.a
return w.n(new C.eRB(w,this.b))},
$S:0}
C.eRB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRr.prototype={
$0(){var w=this.a
return w.n(new C.eRq(w,this.b,this.c))},
$S:0}
C.eRq.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.eRz.prototype={
$0(){return this.a.a__(this.b)},
$S:0}
C.eRA.prototype={
$0(){return this.a.Nr(0,this.b)},
$S:0}
C.eRF.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eRG.prototype={
$0(){var w=this.a
return w.n(new C.eRE(w,this.b))},
$S:0}
C.eRE.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eRD(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eRD.prototype={
$1(d){return d.a},
$S:z+67}
C.eYD.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Z(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fPn(w.b(t.h(0,"doc"))?B.Z(w.a(t.h(0,"doc")),v,u):A.cu)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.nV(s,v,u==null?new B.Q(Date.now(),0,!1):u)},
$S:z+50}
C.eYE.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fdd.prototype={
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
C.fdb.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fdc.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.fpU.prototype={
$1(d){return d.ac()},
$S:z+32}
C.faH.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fqI.prototype={
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
p=q.bi(s,new C.cA8(r))
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
$1(d){return new C.WA(this.b,this.a.gco_(),null)},
$S:z+40}
C.cAe.prototype={
$1(d){return D.fdd},
$S:z+43}
C.cA1.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.U6,A.r,1),t=x.p
return B.at(B.aD(!1,A.Y,!0,w,B.p(w,B.u(B.a([new B.C(D.bj0,B.u(B.a([B.p(w,D.buQ,A.h,w,w,new B.o(A.aF.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aO,D.eTC,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eIi,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.C(A.p0,B.B(B.a([B.D(B.dV(D.eZS,new C.cA_(d),B.db(w,w,w,w,w,w,w,w,w,E.mu,w,w,A.cc,w,new B.b5(B.m(14),A.V),D.aPX,w,w,w,w)),1),A.aw,B.D(B.bK(D.f4h,new C.cA0(d),B.bk(A.bQ,w,w,w,w,w,A.cc,w,new B.b5(B.m(14),A.V),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vL,new B.o(D.a8F,w,u,v,D.cG_,w,A.n),w,w,w,K.VM,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
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
$0(){return J.n1(this.a.d,new C.czZ(this.b))},
$S:0}
C.czZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czY.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.U6,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bzE,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajv,A.n),t,44,t,t,t,t,t,44),A.bc,B.D(B.u(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aKP,t,t,t),A.bA,D.f4d],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.cZr[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auT(u[1],u[2],u[3],new C.czW(v,d),!1,t))}q.push(A.ar)
q.push(D.bd8)
q.push(A.ar)
q.push(new C.auT(A.e4,"Delete book","Remove it from this device",new C.czX(d),!0,t))
return B.bq(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8F,t,r,s,t,t,A.n),t,t,t,A.rE,E.Vp,t,t,t),!0,!1,A.ah,!0,!0)},
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
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.aa(0,A.G,A.x.j(0.45),A.aBb,12)],x.V)
return B.dP(B.et(A.A,e,B.p(w,B.bu(B.m(4),new B.a3(62,95.81818181818181,B.eX(A.A,F.alE(d),A.h,A.dp),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cA3.prototype={
$0(){return this.a.bXk()},
$S:0}
C.czV.prototype={
$0(){return this.a.aTV(0,this.b)},
$S:0}
C.czU.prototype={
$0(){return this.a.C2(this.b)},
$S:0}
C.czT.prototype={
$0(){return this.a.C2(this.b)},
$S:0}
C.cAf.prototype={
$2(d,e){var w=this.a
return w.bwp(J.q(w.d,e))},
$S:42}
C.czm.prototype={
$0(){var w=this.a
if(w.c!=null)w.zK()},
$S:0}
C.czl.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWu("Page "+(v.length+1),"",""))},
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
$0(){return this.a.c="data:"+this.b+";base64,"+A.cO.gcs().aF(this.c)},
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
if(t.e!=null)t.G(x.q).f.P(D.ewq)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.czz.prototype={
$0(){return this.a.aSV(this.b,-1)},
$S:0}
C.czA.prototype={
$0(){return this.a.aSV(this.b,1)},
$S:0}
C.czB.prototype={
$0(){return this.a.bYy(0,this.b)},
$S:0}
C.fhK.prototype={
$1(d){return C.fZb()},
$S:41}
C.fhL.prototype={
$1(d){return null},
$S:29}
C.f1T.prototype={
$1(d){return null},
$S:29}
C.fiK.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:285}
C.fiJ.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:236}
C.fiQ.prototype={
$1(d){var w=this.a
return C.fI0(d)===w||C.h2C(d)===w},
$S:z+4}
C.f0X.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.c3S.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhI.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fhJ.prototype={
$1(d){return C.fks(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fcA.prototype={
$1(d){var w=null
return B.bq(!0,new B.C(E.wB,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.f_q,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dn(D.ET,D.eV3,new C.fcy(d),B.bk(A.bS,w,w,w,A.x,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.uM,D.f0A,new C.fcz(d),B.db(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vI,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcy.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcz.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcB.prototype={
$1(d){var w=null
return B.eo(B.a([B.bI(!1,D.eRz,w,w,!0,w,w,new C.fcw(d),w,w),B.bK(D.f6m,new C.fcx(d),w)],x.p),w,w,w,D.f88,w,w,w,w,D.eRt,w)},
$S:20}
C.fcw.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.fcx.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dYl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dYm.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYo.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dYp.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fiP.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.fiL.prototype={
$2$h$w(d,e){var w=null
return new B.bG(A.a3,w,w,B.Ga(A.A,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1666}
C.fiN.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eJr,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fiO.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hM,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hM,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b6,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1667}
C.fiM.prototype={
$2$female$size(d,e){var w=null,v=d?D.aac:this.a,u=B.H(A.hM,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8S,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1668}
C.fu7.prototype={
$1(d){return new C.ab1(this.a,this.b,null)},
$S:z+108}
C.dPM.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.baw:A.J9,q=B.H(D.iW.j(0.25),A.r,1),p=B.at(B.p(t,t,A.h,t,t,new B.o(A.bS.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aif,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.aa(0,A.G,D.iW.j(0.35),A.e6,10)],x.V),D.bI9,A.n),t,t,t,t,A.JR,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.C(H.VB,B.u(B.a([p,A.ay,B.B(B.a([o,A.bc,B.D(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iW,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eIK,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ih(!0,t,e,A.z,D.aIg,new C.dPL(w,this.c),v,D.add,t,A.aj,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mk,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dPL.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aar(w,new C.dPK(this.b,w),null)},
$S:z+72}
C.dPK.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fcE.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fcF.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wB,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.f2y,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dn(D.ET,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcC(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nv,D.Ri,new C.fcD(d),B.db(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vI,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcC.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcD.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcI.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fcJ.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wB,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eSv,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dn(D.ET,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcG(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nv,D.Ri,new C.fcH(d),B.db(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vI,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcG.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcH.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fcM.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fcN.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wB,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eYn,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dn(D.ET,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcK(d),B.bk(D.iW,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nv,D.Ri,new C.fcL(d),B.db(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vI,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcK.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcL.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fvm.prototype={
$1(d){return D.fgr},
$S:z+74}
C.e2n.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b3y:A.J9,s=B.H(A.au.j(0.25),A.r,1),r=B.at(B.p(v,v,A.h,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bBR,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.aa(0,A.G,A.bS.j(0.35),A.e6,10)],x.V),D.ajA,A.n),v,v,v,v,A.JR,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.C(H.VB,B.u(B.a([r,A.ay,B.B(B.a([q,A.bc,B.D(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.J6,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eGn,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ih(!0,v,e,A.z,D.aIg,new C.e2m(this.b),19,D.add,v,A.aj,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mk,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e2m.prototype={
$2(d,e){var w=D.Ob[e]
return new C.acI(w,new C.e2l(this.a,w),null)},
$S:z+75}
C.e2l.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fkw.prototype={
$0(){return B.fH3(C.hBd(this.a))},
$S:323}
C.fkv.prototype={
$0(){var w=C.fIi(this.a)
return"data:image/png;base64,"+A.cO.gcs().aF(w)},
$S:22}
C.f_8.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j2(d,e),new B.j2(w,e+v),new B.j2(d+f*14,e),new B.j2(w,e-v)],x.J)
B.a_L(this.a,C.ft(4291404327),v)},
$S:663}
C.fvx.prototype={
$1(d){return new C.TS(this.a,null)},
$S:z+77}
C.e5F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5E())},
$S:28}
C.e5E.prototype={
$0(){},
$S:0}
C.e5G.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5D(w,d))},
$S:1670}
C.e5D.prototype={
$0(){return this.a.x=J.f2(A.dA.gaL(this.b))},
$S:0}
C.e5H.prototype={
$1(d){},
$S:29}
C.e5h.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5d.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5o.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e5p.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.dZZ)},
$S:0}
C.e5q.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5j.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.A("you",this.b))
w.f.bI(0,A.c_)},
$S:0}
C.e5k.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.A("ai",v.a))},
$S:0}
C.e5l.prototype={
$0(){return this.a.ax.push(new B.A("ai",B.t(this.b)))},
$S:0}
C.e5m.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5n.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dU,A.i1)}},
$S:8}
C.e5i.prototype={
$0(){var w=this.a,v=w.z,u=C.fl9(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cyL(C.fl9(t))},
$S:0}
C.e5f.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e5g.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5w.prototype={
$0(){return B.a8(this.a,!1).o3()},
$S:0}
C.e5x.prototype={
$0(){var w=this.a
return w.n(new C.e5v(w))},
$S:0}
C.e5v.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e5y.prototype={
$0(){var w=this.a
return w.n(new C.e5u(w,this.b))},
$S:0}
C.e5u.prototype={
$0(){var w=this.b.b
this.a.e.saS(0,w)
return w},
$S:0}
C.e5z.prototype={
$1(d){var w=this.a
return w.n(new C.e5t(w))},
$S:9}
C.e5t.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e5A.prototype={
$1(d){var w=this.a
return w.n(new C.e5s(w))},
$S:9}
C.e5s.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e5B.prototype={
$0(){var w=this.a
return w.n(new C.e5r(w,this.b))},
$S:0}
C.e5r.prototype={
$0(){var w=this.b
this.a.f.saS(0,w)
return w},
$S:0}
C.e5C.prototype={
$1(d){return this.a.XJ()},
$S:2}
C.e5e.prototype={
$0(){return this.a.c0a(this.b)},
$S:0}
C.c7x.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cI(w.h(0,d))):null},
$S:380}
C.c7v.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c7w.prototype={
$1(d){return d.length!==0},
$S:3}
C.fk7.prototype={
bfy(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bKc(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cvu($.tt().jT(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mb(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfy(d,e)},
$S:1671}
C.fip.prototype={
$1(d){return d.length!==0},
$S:3}
C.fir.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dt(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:83}
C.fiq.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.iS(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.px,A.cn,t,A.eE,A.cm)
v=this.a
w.AP(v.b)
u=w.b.a.c
return u.gbh(u)<=v.a},
$S:60}
C.eZK.prototype={
$1(d){var w=A.a.fl(d,B.ae("\\s+",!0,!1,!1,!1))
return new B.a4(w,new C.eZL(),B.U(w).k("a4<1>")).gI(0)},
$S:245}
C.eZL.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZI.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.eZJ.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.c7y.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawG()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,w-(f===t?r:0)))
o=C.fI_(i,new B.F(!0,h,a6,k,a6,a6,q,A.cI,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fF2(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gc86(),"\n\n")
d=B.iS(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afK(k,q,1.28),j),A.px,A.cn,a6,A.eE,A.cm)
d.AP(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbh(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fI_(i,new B.F(!0,h,a6,k,a6,a6,q,A.cI,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fF2(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afK(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.M(v,0,v,0),B.p(a6,a6,A.h,B.aY(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bF(1,A.bp,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.px,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awF(s,j))
i.push(new B.a3(s,a6,B.u(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:393}
C.c7z.prototype={
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
n=o.gawG()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aY(j.w)
d=B.a([new B.A(u,q),new B.A(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.A(r,p-(a0===s?m:0)))
l=C.fI_(f,new B.F(!0,e,a5,i,a5,a5,h,A.cI,A.bg,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fF2(g.length===0?B.a([a6],n):g,l))break}a1=o.afK(i,h,1.28)
a2=new C.c7A(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.H2,new B.a3(v,a5,a4.f,a5),A.H2,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.blf,B.p(a5,a5,A.h,B.aY(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bF(1,A.bp,new B.x(l[2+a3],a5,a1,a5,A.px,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awF(r,g))
f.push(new B.a3(r,a5,B.u(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.u(B.a([new B.a3(a5,q,v,a5),A.ab,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.c7A.prototype={
$2(d,e){var w=null
return new B.a3(e,w,B.d(d,w,w,w,w,w,w,this.a,A.px,w,w),w)},
$S:1672}
C.fvA.prototype={
$1(d){return new C.TV(this.a,this.b,null)},
$S:z+79}
C.e6Q.prototype={
$1(d){return d.lT()},
$S:1673}
C.e6R.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e6P(w,d))},
$S:1674}
C.e6P.prototype={
$0(){var w=this.b
return this.a.d=w.gfd(w)},
$S:0}
C.e6D.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e6E.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e6K.prototype={
$0(){return B.a8(this.a,!1).eD()},
$S:0}
C.e6L.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.bz,A.r,2.5)
return B.aH(w,B.p(w,B.b1(w,w,w,new C.b8m(u,v.gatQ(),w),A.fi),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e6I(v),new C.e6J(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ae)},
$S:33}
C.e6I.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:334}
C.e6J.prototype={
$1(d){var w=this.a
w.n(new C.e6F(w,d,this.b,this.c))},
$S:242}
C.e6F.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gatQ()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e6M.prototype={
$1(d){var w=this.a
return w.n(new C.e6H(w,this.b))},
$S:9}
C.e6H.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6N.prototype={
$1(d){var w=this.a
return w.n(new C.e6G(w,d))},
$S:6}
C.e6G.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6O.prototype={
$0(){return B.a8(this.b,!1).M(this.a.a.c)},
$S:0}
C.fvQ.prototype={
$1(d){return D.fje},
$S:z+83}
C.eDx.prototype={
$1(d){return this.a.Wv()},
$S:8}
C.eCp.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cO.gcs().aF(v)},
$S:0}
C.eCN.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eCX.prototype={
$1(d){return d>=this.a.length},
$S:60}
C.eC8.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eC9.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eC6.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eC7.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eCG.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eCH(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.qW(p>0.2?C.fzT(q,B.a32(p,p,A.w)):q),A.q,u)],x.p)
w=s.be
if(w>0.02){v=B.a32(12,12,A.w)
p.push(B.jz(B.d7(B.qW(C.fzT(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b_
if(r!=null&&s.aX>0)p.push(B.ec(u,B.aY(r).j(s.aX),!0))
r=s.b7
if(r!=null&&s.bF>0){r=B.aY(r).j(s.bF)
w=s.b7
w.toString
p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aOh,1.15,A.w,u,0,B.a([r,B.aY(w).j(0)],x.O),u,u),A.n),A.ba))}r=s.aA
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aO2,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.ba))
r=s.aK
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.a7(A.b1,A.b5,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aK)],x.O),D.cEJ,u),A.n),A.ba))
if(s.aC>0){r=s.k1
p.push(B.an(u,B.bT(u,new B.o(u,u,u,u,u,new B.a7(A.b1,A.b5,A.w,B.a([A.x.j(0),A.x.j(s.aC),A.x.j(s.aC),A.x.j(0)],x.O),D.cOE,u),A.n),A.ba),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.b3
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cM1,u),A.n),A.ba))
s=s.au
if(s>0)p.push(B.b1(u,u,u,new C.bbT(s,u),A.at))
return new B.am(A.W,u,A.aY,A.q,p,u)},
$S:61}
C.eCH.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fD(r.b,A.A,q,q,A.ci,A.bO,!0,q,!1,q,q),o=r.a,n=o.aSx(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bf
v=o.aO
u=v-1
t=o.bP
s=o.cQ?-1:1
return B.dP(B.e5(A.A,B.et(A.A,l,B.fn(A.A,new B.FH(new B.A2(q,q,n,A.z1),p,q),q,B.v0(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eCT.prototype={
$0(){return this.a.n(new C.eCS(this.b,this.c))},
$S:0}
C.eCS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCU.prototype={
$1(d){return this.a.n(new C.eCR(this.b,d))},
$S:6}
C.eCR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCW.prototype={
$0(){return this.a.n(new C.eCV(this.b,this.c))},
$S:0}
C.eCV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBZ.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eC_.prototype={
$1(d){var w=this.a
return w.n(w.gcpn())},
$S:2}
C.eC0.prototype={
$1(d){return this.a.n(new C.eBY())},
$S:2}
C.eBY.prototype={
$0(){},
$S:0}
C.eC1.prototype={
$0(){var w=this.a
return w.n(new C.eBX(w,this.b))},
$S:0}
C.eBX.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eC3.prototype={
$2(d,e){return A.aw},
$S:35}
C.eC2.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aY(v.e),B.aY(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.di(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aY(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a7(A.b1,A.b5,A.w,r,w,w),A.n),A.hP,w,94,w,w,w,w,70)
return B.aH(w,new B.a3(70,w,B.u(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eBW(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:76}
C.eBW.prototype={
$0(){var w=this.a
return w.n(new C.eBT(w,this.b))},
$S:0}
C.eBT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eC4.prototype={
$1(d){var w=this.a
return w.n(new C.eBV(w,d))},
$S:9}
C.eBV.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eC5.prototype={
$1(d){var w=this.a
return w.n(new C.eBU(w,d))},
$S:9}
C.eBU.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eDm.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:60}
C.eDt.prototype={
$1(d){var w=this.a
return w.n(new C.eDu(w,d))},
$S:27}
C.eDu.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eDv.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eDn.prototype={
$0(){var w=this.a
return w.n(new C.eDl(w,this.b))},
$S:0}
C.eDl.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
return w.n(new C.eDk(w,this.b))},
$S:0}
C.eDk.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eDp.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eDj(v,w.b,w.c,w.d))},
$S:0}
C.eDj.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eDq.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqN(v))},
$S:0}
C.eDr.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eDs.prototype={
$0(){var w=this.a
return w.n(new C.eDi(w))},
$S:0}
C.eDi.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eD5.prototype={
$1(d){return d.a===this.a.dy},
$S:224}
C.eD6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arq[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b3(9,9)
m=B.a([B.aY(v.w.e),B.aY(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atU(new B.nJ(new B.bv(n,n,n,n),A.ap,new B.kB(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.w,m,j,j),A.n),A.ba,new C.aWJ(l,B.aY(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eD4(r,v),2,i))}return B.c8(A.bH,h,A.bx,7,7)},
$S:168}
C.eD4.prototype={
$0(){var w=this.b
return w.n(new C.eD_(this.a,w))},
$S:0}
C.eD_.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eD7.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:214}
C.eDa.prototype={
$0(){var w=this.a
return w.n(new C.eD3(w))},
$S:0}
C.eD3.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eDb.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eDc.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eDd.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eDe.prototype={
$0(){var w=this.a
return w.n(new C.eD2(w))},
$S:0}
C.eD2.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eDf.prototype={
$0(){var w=this.a
return w.n(new C.eD1(w))},
$S:0}
C.eD1.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eDg.prototype={
$0(){var w=this.b
return w.n(new C.eD0(this.a,w))},
$S:0}
C.eD0.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDh.prototype={
$1(d){return this.a.fx=d},
$S:214}
C.eD8.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eD9.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eCK.prototype={
$0(){var w=this.a
return w.n(new C.eCJ(w))},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a
w.p4=null
w.aZ9()},
$S:0}
C.eCL.prototype={
$0(){var w=this.a
return w.n(new C.eCI(w,this.b))},
$S:0}
C.eCI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCM.prototype={
$0(){var w=this.a
return w.n(w.gcgi())},
$S:0}
C.eCC.prototype={
$0(){var w=this.a
return w.n(new C.eCB(w))},
$S:0}
C.eCB.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eCD.prototype={
$0(){var w=this.a
return w.n(new C.eCA(w))},
$S:0}
C.eCA.prototype={
$0(){var w=this.a
w.aC=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eCE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cMn[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b3(9,9)
m.push(v.atU(new B.nJ(new B.bv(p,p,p,p),A.ap,new B.a3(1/0,1/0,new B.FH(new B.A2(o,o,v.aSx(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.z1),B.fD(u,A.A,140,o,A.ci,A.bO,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eCz(v,s),3,n))}return B.c8(A.bH,m,A.bx,10,8)},
$S:168}
C.eCz.prototype={
$0(){var w=this.a
return w.n(new C.eCy(w,this.b))},
$S:0}
C.eCy.prototype={
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
C.eCg.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eCh.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eCi.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eCj.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eCk.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eCl.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eCm.prototype={
$1(d){return this.a.b3=d},
$S:6}
C.eCn.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eCo.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eBC.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eBD.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eBE.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eBF.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eBG.prototype={
$0(){var w=this.a
return w.n(new C.eBB(w))},
$S:0}
C.eBB.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eBH.prototype={
$1(d){return this.a.b_=d},
$S:214}
C.eBI.prototype={
$1(d){return this.a.aX=d},
$S:6}
C.eCa.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eCb.prototype={
$1(d){return this.a.be=d},
$S:6}
C.eCc.prototype={
$1(d){return this.a.au=d},
$S:6}
C.eCd.prototype={
$1(d){return this.a.b7=d},
$S:214}
C.eCe.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.eBM.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eBN.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.eBO.prototype={
$1(d){return this.a.bP=d},
$S:6}
C.eBP.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eBQ.prototype={
$0(){var w=this.a
return w.n(new C.eBL(w))},
$S:0}
C.eBL.prototype={
$0(){var w=this.a
return w.c4=A.k.H(w.c4+90+180,360)-180},
$S:0}
C.eBR.prototype={
$0(){var w=this.a
return w.n(new C.eBK(w))},
$S:0}
C.eBK.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eBS.prototype={
$0(){var w=this.a
return w.n(new C.eBJ(w))},
$S:0}
C.eBJ.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eCF.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hQ0(v,w.p4)},
$S:0}
C.eCx.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.baN:B.fD(v,A.A,w,w,A.ci,A.bO,!1,w,!1,w,w)
return C.fix(d.length===0?"rounded":d,u,e)},
$S:129}
C.eCt.prototype={
$0(){var w=this.a
return w.n(new C.eCs(w))},
$S:0}
C.eCs.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eCu.prototype={
$0(){var w=this.b
return w.n(new C.eCr(this.a,w))},
$S:0}
C.eCr.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eCv.prototype={
$0(){var w=this.b
return w.n(new C.eCq(this.a,w))},
$S:0}
C.eCq.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eCw.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eCQ.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.aa(-4,A.G,A.b2.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.ca0(),n.r))
l.push(new C.Ha(n.cmy(),!1,!1,t))
o=B.bZ(0,B.bu(o,new B.en(new B.am(A.W,t,A.aY,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.W,t,A.a9,A.q,B.a([o,B.an(t,B.aH(A.c5,B.bT(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.ba),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eCP(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eCP.prototype={
$1(d){var w=this.a
return w.n(new C.eCO(w,d,this.b,this.c))},
$S:18}
C.eCO.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a
return w.n(new C.eCY(w,this.b))},
$S:0}
C.eCY.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eCf.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).o3()},
$S:0}
C.eDw.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a3(Math.min(s*0.4,460),t,B.u(B.a([w.aUV(),B.D(B.at(w.aXN(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.u(B.a([B.D(w.aM0(),1),w.aIg()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aUV(),new B.C(A.hx,B.at(s.aXN(u),t,t,t),t),B.D(s.aM0(),1),s.aIg()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:640}
C.ffN.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ei(k,!1,j,A.az,"",4280640491,i,l,m,"",h,C.bwA(),null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.cM,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bg,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,A.O)},
$S:z+98}
C.ffM.prototype={
$3(d,e,f){var w=this,v=C.bwA(),u=w.b?A.I:A.cq,t=w.c?A.cx:A.bg
return C.ei(w.d,!1,f,A.az,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bb,4280172719,2,d,0,w.f,w.e,D.cd,D.cM,0.82,0.09,w.a)},
$S:z+28}
C.c8U.prototype={
$1(d){return B.t(d)},
$S:17}
C.fnt.prototype={
$0(){return this.a},
$S:z+15}
C.f5m.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.f5n.prototype={
$2(d,e){return J.ci(e)},
$S:z+31}
C.fnv.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fny.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fnz.prototype={
$0(){return A.d.gK(D.uV)},
$S:z+33}
C.fnr.prototype={
$1(d){return d.a},
$S:z+16}
C.fnu.prototype={
$1(d){return d.a},
$S:z+16}
C.flr.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fls.prototype={
$1(d){return d.length!==0},
$S:3}
C.flt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ffR.prototype={
$0(){return C.cy()},
$S:22}
C.ffU.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cd,s=u?n:0
return C.ei(j,l,v,A.az,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bb,4280172719,2,d,s,0,"",t,D.cM,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.db,!1,null,0,"","",A.bg,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.db,!1,null,0,"",j,A.bg,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.db,!1,null,0,j,k,A.bg,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bg,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bg,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.db,!1,k,l,"",m,A.bg,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,!1,null,0,"",k,A.bg,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,D.db,!1,j,k,"",l,A.bg,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,!1,k,0,l,m,A.bg,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.be,j,k,l,m,"",n,A.bg,A.a4)},
$S:z+35}
C.ffT.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cd,D.eT,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.ffS.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cd,t=v?j:0
return C.ei(A.be,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.bb,4280172719,2,"",t,0,"",u,D.l3,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pn,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.ffQ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fii.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h_d.ce(0,A.a.i(s.w).toLowerCase(),new C.fig(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fih(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.br(t.e,new B.bkH(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1677}
C.fig.prototype={
$0(){return F.aKG(this.a.w)},
$S:180}
C.fih.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bvu("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hr(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.eZF.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eZG.prototype={
$1(d){return d.a},
$S:z+18}
C.eZH.prototype={
$1(d){return d.b},
$S:z+19}
C.fw1.prototype={
$1(d){return D.fju},
$S:z+41}
C.eJr.prototype={
$0(){return this.a.x=C.htg(this.b,this.c.b)},
$S:0}
C.eJs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eJp.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:433}
C.eJq.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:433}
C.eJo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c1(A.aG,null,new C.eJj(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.GN,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aW(s,7)
if(r.length===0){n.n(new C.eJk(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h4T(o,m.czy(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eJl(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJj.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eJn(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aX_,A.h,p,p,D.aSl,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Aw:D.AB,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a3(64,64,C.fix(v,i.aZK(h),u),p)))}t=B.m_(1,m,4,10,10,p,A.dL,!0)
if(!l)return B.bq(!0,new B.C(A6.DJ,t,p),!0,!1,A.ah,!0,!0)
s=new C.eJm(i,d)
m=B.aG(d,A.bP,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Fb[e]
l.push(s.$2(r.a,r.b))}return B.bq(!0,new B.d1(new B.aX(0,1/0,0,m.a.b*0.85),B.ch(B.u(B.a([D.eWX,A.T,t,A.dW,D.en3,A.av,D.f5L,A.T,B.m_(1.15,l,3,10,10,p,A.dL,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A6.DJ,p,p,A.aj),p),!0,!1,A.ah,!0,!0)},
$S:34}
C.eJn.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b2.j(0.22):A.c.j(0.04),s=v?A.bE:A.dv
return B.aH(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hj,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eJi(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1678}
C.eJi.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eJm.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bI:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiL,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.LM(u.Em(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aH(v,B.u(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bI:A.al,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eJh(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:129}
C.eJh.prototype={
$0(){B.a8(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eJk.prototype={
$0(){var w=this.a
return w.w=w.w.Em("")},
$S:0}
C.eJl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eJ7.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eJ8.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eJa.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eJb.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eJc.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eJd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJ9(w,d))},
$S:2}
C.eJ9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eJe.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eJF.prototype={
$0(){return this.a.f.fu()},
$S:0}
C.eJG.prototype={
$0(){var w=this.a
return w.n(new C.eJE(w))},
$S:0}
C.eJE.prototype={
$0(){return this.a.e=null},
$S:0}
C.eJH.prototype={
$0(){var w=this.a
return w.n(new C.eJD(w))},
$S:0}
C.eJD.prototype={
$0(){return this.a.x=null},
$S:0}
C.eJJ.prototype={
$1(d){var w=this.a
return w.n(new C.eJC(w,d))},
$S:31}
C.eJC.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eJK.prototype={
$1(d){var w=this.a
return w.n(new C.eJB(w,d))},
$S:31}
C.eJB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eJL.prototype={
$0(){var w=this.a
return w.n(new C.eJA(w))},
$S:0}
C.eJA.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eJM.prototype={
$1(d){var w=this.a
return w.n(new C.eJz(w,d))},
$S:31}
C.eJz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eJN.prototype={
$1(d){var w=this.a
return w.n(new C.eJy(w,d))},
$S:31}
C.eJy.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eJO.prototype={
$0(){var w=this.a
return w.n(new C.eJx(w))},
$S:0}
C.eJx.prototype={
$0(){var w=this.a
return w.w=w.w.Em("")},
$S:0}
C.eJP.prototype={
$0(){var w=this.a
return w.n(new C.eJw(w,this.b))},
$S:0}
C.eJw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eJQ.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a3(u,null,w.bHQ(D.a_l[v]),null))
return B.c8(A.bH,t,A.bx,8,8)},
$S:168}
C.eJI.prototype={
$1(d){var w=this.a
return w.n(new C.eJv(w,d))},
$S:9}
C.eJv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJf.prototype={
$0(){var w=this.a
return w.n(new C.eJg(w,this.b,this.c))},
$S:0}
C.eJg.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eJu.prototype={
$0(){var w=this.a
return w.n(new C.eJt(w,this.b))},
$S:0}
C.eJt.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fw0.prototype={
$1(d){return new C.Zn(this.a,this.b,null)},
$S:z+42}
C.eJ0.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eJ1.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eJ2.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAG?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eJ3.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eJ4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJ_(w,d))},
$S:2}
C.eJ_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJ5.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eJ6.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.an(w,0,w.length-1)
this.a.d.bI(0,new B.bc(w,B.h1(A.br,w.length),A.aM))},
$S:0}
C.f4C.prototype={
$1(d){return d.a===this.a},
$S:224}
C.e1N.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gatV(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cze:D.cOp
t=D.we.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.we.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.aa(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b1(q,q,q,new C.be5(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bZ(0,B.bKt(B.et(A.A,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.w,B.a([A.K,D.b27.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.W,q,A.a9,A.q,B.a([n,o,B.at(B.u(B.a([B.V(p.a.c?A.ej:A.lv,D.we,q,q,q,20),A.av,B.eX(A.A,B.np(A.ja,D.eR0,new C.e1M()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eNS,A.h,q,q,new B.o(D.we,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adS,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aC,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e1M.prototype={
$1(d){return D.bGq.az(0,d)},
$S:65}
C.fnA.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fnB.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:224}
C.fnC.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1679}
C.fnD.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fnw.prototype={
$1(d){return d.a},
$S:z+18}
C.fnx.prototype={
$1(d){return d.b},
$S:z+19}
C.fve.prototype={
$1(d){return new C.XL(this.a,this.b,null)},
$S:z+44}
C.dba.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dbb.prototype={
$1(d){return d.a===this.a.gafD()},
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
C.e1L.prototype={
$1$2(d,e,f){var w=B.bj(d,!0,f)
A.d.fw(w,this.a)
return B.de(w,0,B.dJ(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1680}
C.eWe.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ei(A.be,!1,4279310375,A.az,"",i,24,A.bg,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eT,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cd,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eWg.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ei(A.L,!1,this.b.d,A.az,"",4280640491,i,A.bg,A.cI,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bb,4280172719,2,d,l,0,"",D.mb,D.cM,g,e,f)},
$S:z+46}
C.eWf.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vG(0,"twinkle")
w=t===D.bb?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mb,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eWd.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fgY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fgZ.prototype={
$0(){return A.d.gK(D.Fk)},
$S:z+49}
C.fh_.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eYc.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fn2.prototype={
$1(d){var w=2450411,v=4281908728
C.dr(d,C.ds(4280171146,1,0,D.bb,w,0,0.52,0,0))
C.dr(d,C.ds(v,1,0,D.bb,w,0,0.04,0.48,0))
C.dr(d,C.ds(4294047225,0.38,0,D.bb,w,0,0.48,0.52,0.62))
C.dr(d,C.ds(v,0.006,0,D.fh,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fn3.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dr(d,C.ds(4280172719,0.8,0,D.bb,w,0,0.36,0.58,0.1))
C.dr(d,C.ds(v,0.64,0,D.bb,w,0,0.28,0.64,0.18))
C.dr(d,C.ds(4282090230,0.44,0,D.bb,w,0,0.2,0.7,0.28))
C.dr(d,C.ds(v,0.006,0,D.fh,v,3,0.22,0.08,0.12))
C.dr(d,C.ds(u,0.004,0,D.fh,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fn4.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(4279080072,0.11,0,D.bb,w,0,1,0,0))
C.dr(d,C.ds(4279310375,0.11,0,D.bb,w,0,1,0,0.89))
C.dr(d,C.ds(856528008,0.72,0,D.jo,w,0,0.28,0.72,0.14))
C.dr(d,C.ds(1426953352,0.2,0,D.jo,w,0,0.2,0.78,0.22))
C.dr(d,C.ds(v,0.004,0,D.fh,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fnf.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4279203438,0.55,0,D.jo,w,0,0.5,0.55,-0.05))
C.dr(d,C.ds(4280171146,0.5,0,D.jo,w,0,0.45,0.62,0.35))
C.dr(d,C.ds(4280640491,0.4,0.3,D.jn,w,0,0.35,0.68,0.55))
C.dr(d,C.ds(571438702,0.12,0,D.bb,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnk.prototype={
$1(d){var w=4280472558
C.dr(d,C.ds(4279310375,0.75,-0.4,D.jn,2450411,0,0.75,-0.15,0.35))
C.dr(d,C.ds(w,0.55,0,D.bb,2450411,0,0.06,0.42,0.38))
C.dr(d,C.ds(w,0.006,0,D.fh,w,3,0.35,0.08,0.08))
C.dr(d,C.ds(2282478,0.12,0,D.bb,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnl.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3423541034,0.48,0,D.bb,w,0,1,0,0))
C.dr(d,C.ds(v,0.12,-0.08,D.jo,w,0,1.1,-0.05,0.38))
C.dr(d,C.ds(858088427,0.35,0,D.bb,w,0,0.42,0.55,0.05))
C.dr(d,C.ds(v,0.006,0,D.fh,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnm.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cyk[w]
u=Date.now()
t=$.iP
$.iP=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eT,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.bb,v,4294967295,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fh,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fnn.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lT,A.dE,w/3).l()
u=Date.now()
t=$.iP
$.iP=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eT,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.Bb,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fh,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fno.prototype={
$1(d){var w=4294967295
C.dr(d,C.ds(4280640491,1,0,D.bb,2450411,0,0.42,0,0))
C.dr(d,C.ds(4280110808,1.1,1.57,D.jn,2450411,0,0.18,0.35,-0.05))
C.dr(d,C.ds(w,0.006,0,D.fh,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnp.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dr(d,C.ds(w,0.1,0,D.bb,v,0,1,0,0))
C.dr(d,C.ds(u,0.012,0,D.bb,v,0,1,0,0.1))
C.dr(d,C.ds(u,0.006,0,D.fh,u,3,0.42,0.06,0.14))
C.dr(d,C.ds(403446057,0.68,0,D.jo,v,0,0.22,0.72,0.18))
C.dr(d,C.ds(w,0.1,0,D.bb,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnq.prototype={
$1(d){var w=4278630100
C.dr(d,C.ds(4279310375,1.2,0.15,D.jo,2450411,0,0.55,-0.2,-0.1))
C.dr(d,C.ds(w,1.1,0.15,D.bb,2450411,0,0.08,0.15,-0.05))
C.dr(d,C.ds(1120295,0.18,0,D.bb,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fn5.prototype={
$1(d){var w=4292617766
C.dr(d,C.ds(4282714634,0.65,-0.2,D.jn,2450411,0,0.65,-0.1,0.45))
C.dr(d,C.ds(w,0.5,-0.15,D.jn,2450411,0,0.5,0.05,0.55))
C.dr(d,C.ds(w,0.006,0,D.fh,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fn6.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4278413729,0.35,3.14,D.jn,w,0,0.45,-0.05,0.7))
C.dr(d,C.ds(4278355143,0.3,3.14,D.jn,w,0,0.4,0.25,0.75))
C.dr(d,C.ds(4279150057,0.32,3.14,D.jn,w,0,0.5,0.55,0.72))
C.dr(d,C.ds(863884284,0.22,0,D.ey,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fn7.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dr(d,C.ds(w,0.14,0,D.bb,v,0,0.14,0.02,0.02))
C.dr(d,C.ds(2282478,0.14,0,D.bb,u,3,0.14,0.84,0.02))
C.dr(d,C.ds(w,0.28,0,D.jo,v,0,0.35,-0.08,0.78))
C.dr(d,C.ds(u,0.22,0.5,D.jn,v,0,0.3,0.72,0.78))
C.dr(d,C.ds(w,0.006,0,D.fh,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fn8.prototype={
$1(d){var w=4293571336,v=1156231944
C.dr(d,C.ds(1841431,0.92,0,D.bb,w,3,0.92,0.04,0.04))
C.dr(d,C.ds(v,0.15,0,D.jn,2450411,0,0.15,0.02,0.02))
C.dr(d,C.ds(v,0.15,3.14,D.jn,2450411,0,0.15,0.83,0.83))
C.dr(d,C.ds(w,0.004,0,D.fh,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fn9.prototype={
$1(d){var w=4279080072,v=2450411
C.dr(d,C.ds(w,0.14,0,D.kI,v,0,0.14,0.68,0.18))
C.dr(d,C.ds(4279548070,0.14,0,D.kI,v,0,0.14,0.78,0.28))
C.dr(d,C.ds(4281193663,0.14,0,D.kI,v,0,0.14,0.68,0.38))
C.dr(d,C.ds(4284410580,0.14,0,D.kI,v,0,0.14,0.78,0.48))
C.dr(d,C.ds(4279203438,0.14,0,D.kI,v,0,0.14,0.68,0.58))
C.dr(d,C.ds(w,0.006,0,D.fh,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fna.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3708753706,0.42,0,D.bb,w,0,1,0,0))
C.dr(d,C.ds(v,0.06,-0.05,D.jo,w,0,1,0,0.38))
C.dr(d,C.ds(859356664,0.25,0,D.ey,w,0,0.25,0.7,0.08))
C.dr(d,C.ds(v,0.006,0,D.fh,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnb.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lT,A.dE,w/3).l()
u=Date.now()
t=$.iP
$.iP=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eT,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.Bb,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(4280172719,0.08,0,D.bb,2450411,0,1,0,0))
C.dr(d,C.ds(s,0.006,0,D.fh,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fnc.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iP
$.iP=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eT,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bg,A.az,s,A.be,null,D.fh,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(s,0.75,0,D.bb,2450411,0,0.22,0.72,0.1))
C.dr(d,C.ds(872415231,0.16,0,D.bb,2450411,0,0.16,0.75,0.15))
C.dr(d,C.ds(s,0.006,0,D.fh,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnd.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dr(d,C.ds(4674921,0.9,0,D.bb,4287931320,2,0.9,0.05,0.05))
C.dr(d,C.ds(w,0.08,0,D.bb,v,0,0.08,0.03,0.03))
C.dr(d,C.ds(u,0.08,0,D.bb,v,0,0.08,0.89,0.03))
C.dr(d,C.ds(u,0.08,0,D.bb,v,0,0.08,0.03,0.89))
C.dr(d,C.ds(w,0.08,0,D.bb,v,0,0.08,0.89,0.89))
C.dr(d,C.ds(w,0.004,0,D.fh,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fne.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iP
$.iP=t+1
t=new C.ey("design_"+(""+1000*u+"_"+t),D.eT,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bg,A.az,r,A.be,null,D.bb,4294967295,4280640491,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IQ
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dD,A.cF,w/2).l()
t=Date.now()
s=$.iP
$.iP=s+1
u=new C.ey("design_"+(""+1000*t+"_"+s),D.eT,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bg,A.az,r,A.be,null,D.bb,u,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(4280171146,1,0,D.bb,q,0,0.48,0,0))
C.dr(d,C.ds(4280172719,1.1,1.57,D.jn,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fng.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(870995980,0.55,0.45,D.jo,w,0,0.55,-0.12,-0.08))
C.dr(d,C.ds(856996006,0.45,0.45,D.jo,w,0,0.45,0.62,-0.05))
C.dr(d,C.ds(16777215,0.38,0.45,D.jo,4293548044,5,0.38,0.52,0.12))
C.dr(d,C.ds(585783308,0.3,0.45,D.jo,w,0,0.3,0.56,0.16))
C.dr(d,C.ds(4279548070,0.06,0,D.bb,w,0,0.16,0.38,0.04))
C.dr(d,C.ds(1156208652,0.28,0,D.ey,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnh.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dr(d,C.ds(w,1,0,D.bb,v,0,0.07,0,0))
C.dr(d,C.ds(u,0.1,0,D.bb,t,1,0.46,0.48,0.14))
C.dr(d,C.ds(u,0.1,0,D.bb,t,1,0.46,0.48,0.28))
C.dr(d,C.ds(u,0.1,0,D.bb,t,1,0.46,0.48,0.42))
C.dr(d,C.ds(s,0.08,0,D.ey,v,0,0.08,0.5,0.16))
C.dr(d,C.ds(w,0.08,0,D.ey,v,0,0.08,0.5,0.3))
C.dr(d,C.ds(4279548070,0.08,0,D.ey,v,0,0.08,0.5,0.44))
C.dr(d,C.ds(16777215,0.32,0.45,D.jo,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fni.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dr(d,C.ds(4294047225,0.08,0,D.bb,t,2,0.1,0.02,0.06))
C.dr(d,C.ds(s,0.42,0,D.bb,2450411,0,0.36,0.58,0.18))
C.dr(d,C.ds(872415231,0.12,0,D.bb,2450411,0,0.28,0.62,0.24))
C.dr(d,C.ds(16777215,0.28,0,D.ey,s,4,0.32,0,0.72))
C.dr(d,C.ds(r,0.006,0,D.fh,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iP
$.iP=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eT,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bg,A.az,4279310375,A.be,null,D.ey,16777215,t,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IQ
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fnj.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(3423541034,0.55,0,D.bb,w,0,1,0,0))
C.dr(d,C.ds(4009754623,0.56,0.45,D.jo,w,0,0.56,0.22,0.18))
C.dr(d,C.ds(3439329279,0.44,0.45,D.jo,w,0,0.44,0.28,0.24))
C.dr(d,C.ds(v,0.07,0,D.bb,w,0,0.22,0.34,0.62))
C.dr(d,C.ds(v,1,0,D.bb,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.feO.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.feP.prototype={
$0(){return A.d.gK($.bA7())},
$S:z+52}
C.f4p.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f4o.prototype={
$1(d){return C.hAb(d,this.a,this.b)},
$S:z+53}
C.fnJ.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.v0(1.0375,1.01875,1)
return new B.fH(v,u,new C.aPx(B.hqi(A.tQ,C.hAe(w.c,w.d,v,u),t)))},
$S:435}
C.dLw.prototype={
$1(d){var w=d.a/1e6
this.a.d.sq(0,w)
return w},
$S:8}
C.dLv.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bT(w,new B.o(w,w,w,w,w,new B.bR(A.I0,1.2,A.w,w,0,u.d,w,w),A.n),A.ba),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.am(A.W,w,A.aY,A.q,B.a([t,new B.en(B.b1(w,w,w,new C.baZ(u.a,r,q,r),A.at),w),B.at(new B.k3(r,new C.dLu(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:444}
C.dLu.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ex.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.aa(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hO(B.fD(i,A.A,r,r,A.ci,A.bO,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fR(A.A,0,6.283185307179586,A.w,t,r,new B.mp(e*0.8)),A.a5),r,w,r,r,new B.M(v,v,v,v),r,r,w),new B.a3(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bnj(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cJ(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a3(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d7(B.dP(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a3(r,m*0.022,r,r),B.d(w.a.c.gaGO(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d7(B.e5(A.A,new B.C(new B.M(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eIe.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).az(0,d)},
$S:65}
C.c3t.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bI:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.aa(0,A.G,A.hs.j(0.4),A.J,14)],x.V):v
w=B.di(v,B.bu(B.m(12),d,A.ap),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v)
return B.aH(v,new B.a3(112,v,B.u(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bI:A.al,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1681}
C.c3u.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Em(""))},
$S:0}
C.c3v.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.LM(v.Em(u),!0,!1,null),!0,null),d.b,new C.c3w(w,this.c,d),v.a===u)},
$S:z+54}
C.c3w.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h4T(u.b,t.c.Em(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ftS.prototype={
$1(d){return new C.Xj(this.a,null)},
$S:z+55}
C.d0F.prototype={
$0(){var w=this.a
w.d=w.guN().b6v("data:"+this.b+";base64,"+A.cO.gcs().aF(this.c));++w.r},
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
return w.d=w.guN().aA3(this.b)},
$S:0}
C.d0N.prototype={
$0(){var w=this.a
return w.n(new C.d0H(w))},
$S:0}
C.d0H.prototype={
$0(){var w=this.a
return w.d=w.guN().b6v("")},
$S:0}
C.d0O.prototype={
$1(d){var w=this.a
return w.n(new C.d0G(w,d))},
$S:2}
C.d0G.prototype={
$0(){var w=this.a
return w.d=w.guN().b6C(this.b)},
$S:0}
C.d0P.prototype={
$0(){var w=this.a
w=w.guN().b6C(w.gatW().a.a)
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.ftR.prototype={
$1(d){var w={}
w.a=this.a
return new B.ed(new C.ftQ(w),null)},
$S:21}
C.ftQ.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bq(!0,new B.d1(new B.aX(0,1/0,0,B.aG(d,A.bP,x.w).w.a.b*0.85),B.ch(B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f38,A.av,D.f3m,A.ay,new C.aWG(v.a,new C.ftP(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.aj),w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aSR,w,w,w,w,A.K0,w,w,w)},
$S:158}
C.ftP.prototype={
$1(d){this.b.$1(new C.ftO(this.a,d))
B.a8(this.c,!1).M(d)},
$S:z+56}
C.ftO.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fw_.prototype={
$1(d){return D.ffm},
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
C.fkp.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).az(0,d)},
$S:65}
C.d0m.prototype={
$3(d,e,f){var w,v=this,u=new B.aR($.a_().r,A.aq,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b7(t+r*1.2,o))
u.E(new B.d_(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.d_(w,q+p,w,q+p*1.2))
u.E(new B.BU(B.bV(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aQ(u,v.d)
s.aQ(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gq(0)
s.ak(new B.v(w,o),2.2,p)},
$S:1682}
C.fkt.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fcQ.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fcR.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wB,B.u(B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.eO7,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dn(D.ET,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fcO(d),B.bk(A.bS,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nv,D.Ri,new C.fcP(d),B.db(w,w,w,w,w,w,w,w,w,A.al,w,w,A.cc,w,w,Q.vI,w,w,w,w))],x.p),A.af,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fcO.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fcP.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.c8S.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c8T.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c8R.prototype={
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
u=C.hwc(b2.h(0,"type"))
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
n=A.at2[A.o.D(b4,0,8)]
m=D.cB_[A.o.D(w,0,1)]
l=C.hzG(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.aq1[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hCn(b2.h(0,"shape"))
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
a3=C.h0g(b2.h(0,"textTransition"))
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
C.c8H.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c8I.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c8E.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8F.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8G.prototype={
$1(d){return C.fS7(B.Z(d,x.N,x.z))},
$S:z+64}
C.c98.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c99.prototype={
$0(){return A.d.gK(D.a_1)},
$S:z+66}
C.c93.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c92.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8Z.prototype={
$1(d){return new B.J(d,new C.c9_(),B.U(d).k("J<1,Q>")).ft(0,new C.c90())},
$S:z+69}
C.c9_.prototype={
$1(d){return d.f},
$S:z+70}
C.c90.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:666}
C.c91.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hma(d)},
$S:z+71}
C.c94.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.c95.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c96.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fl1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fkY.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fkZ.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fl_.prototype={
$2(d,e){var w
if(d.b===D.cM){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fl0.prototype={
$2(d,e){return d.b===D.eT&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c8N.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hKS(b2,b3),b5=B.a2(b4).k("bg<2>")
b5=B.cz(new B.bg(b4,b5),new C.c8M(),b5.k("G.E"),x.N)
w=B.d6(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.oU.av(0,A.k.D(b1,0,1))
u=new C.c8O()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c8P(a9,b7.d)
r=new C.c8Q(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jA.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kI(A.k.D(1-k,0,1),B.dP(B.e5(A.A,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eT){a4=i.hs()
a4.ay=B.aq(B.aY(l.ay),B.aY(i.ay),v).l()
a4.ch=B.aq(B.aY(l.ch),B.aY(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l3&&l.at==i.at?r.$1(i):new B.am(A.W,a8,A.aY,A.q,B.a([new B.kI(A.k.D(o,0,1),r.$1(l),a8),new B.kI(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iw(B.vv(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cd)a7=D.mb
p.push(s.$5(i.c,i.d,i.e,i.f,C.h2r(a7,a6,r.$1(i))))}}return B.bT(new B.am(A.W,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.ba)},
$S:443}
C.c8M.prototype={
$1(d){return d.a},
$S:z+22}
C.c8O.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aY(w)},
$S:z+76}
C.c8P.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1685}
C.c8Q.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5E(v,C.aYN(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dyM.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e5(new B.d5(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c8W.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c8X.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fnQ.prototype={
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
C.fmX.prototype={
$1(d){return new C.ab7(this.a,this.b,null)},
$S:z+78}
C.ebP.prototype={
$0(){return this.a.O7(this.b,C.hOb(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ebQ.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O7(this.b,C.hOd(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ebR.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O7(this.b,C.hOc(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ebS.prototype={
$0(){X.h2b()
B.a8(this.a,!1).M(null)},
$S:0}
C.c8L.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1686}
C.c8K.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.n_),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lz(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bO:A.dp
return B.fD(t,A.A,o,new C.c8J(),A.ci,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1687}
C.c8J.prototype={
$3(d,e,f){return D.a7M},
$S:223}
C.fkX.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aY(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aC,A.w,B.a([w,B.aY(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aY(r.e):t
r=r.z
r=B.de(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cF>")
r=B.z(new B.J(r,new C.fkW(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bT(new B.am(A.W,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.ba),A.ap)},
$S:1688}
C.fkW.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYN(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f6I.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cN(r.b,new C.f6G(d))
w=B.aG(d,A.bP,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.aa(0,A.G,A.x.j(0.45),A.fE,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.at(B.aD(!1,A.Y,!0,q,B.p(q,B.u(B.a([B.B(B.a([B.D(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l6,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bI(!1,A.yq,q,q,!0,q,q,new C.f6H(p,d),q,B.fm(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.K_,q,new B.b5(B.m(12),A.V),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fz,A.zM,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.f6G.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a8(w,!0).oP())B.a8(w,!0).eD()},
$S:0}
C.f6H.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a8(this.b,!0).eD()},
$S:0}
C.eQy.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.d7(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.dP(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dh()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fn(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dh()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jx(r*3.14159)
return B.fn(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dh()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jx(r*0.5)
return B.fn(A.A,B.d7(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dh()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fn(A.a7,B.d7(u.b,r),t,s,!0)
case 12:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.d7(B.e5(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.jz(u.b,A.q,new C.aGs(r,t))],x.p),t)
case 15:return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.jz(u.b,A.q,new C.aGs(1-r,t))],x.p),t)
case 16:v=D.aW3.av(0,r)
return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.e5(A.A,B.d7(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.d7(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dh()
s.mf(r*6.28)
s.jg(r,r,r,1)
return B.fn(A.A,u.b,t,s,!0)
case 20:return B.et(A.A,(r-0.5)*0.35,new B.am(A.W,t,A.aY,A.q,B.a([u.c,B.d7(u.b,r)],x.p),t),t)}},
$S:59}
C.dJJ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dJI.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dJH.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h2r(v,w,e)},
$S:59}
C.c8D.prototype={
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
q=B.z(new B.J(v,new C.c8C(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bT(new B.am(A.W,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.ba)},
$S:443}
C.c8C.prototype={
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
C.e1t.prototype={
$2(d,e){var w,v=null,u=A.o.aj(this.b.e.a,1000),t=A.o.H(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aHl.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hKB(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dh()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jx(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jg(w,w,w,1)
return B.fn(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e5(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d7(B.e5(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eFZ.prototype={
$1(d){var w
$.a_()
w=B.N()
w.b=A.ad
w.c=d
w.e=A.fq
return w},
$S:1689}
C.fiy.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge8()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b1(r,r,r,new C.bnc(u,t,r),A.at))
w.push(B.n4(s.d,A.ap,new C.bbv(u,t,r)))
if(!p)w.push(B.b1(r,r,r,new C.bmf(u,q,t,r),A.at))
return B.at(new B.a3(v.a,v.b,new B.am(A.W,r,A.aY,A.q,w,r),r),r,r,r)},
$S:246}
C.f9v.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:285}
C.ei2.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.BF(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gah(s)){u=null
w=1
break}u=r.dI(s,new C.ei0(),new C.ei1(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.ei0.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.ei1.prototype={
$0(){return J.fh(this.a)},
$S:1692}
C.eeq.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eer.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ees.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eg0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efP.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.efQ.prototype={
$1(d){return d.hs()},
$S:z+81}
C.edO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eh8.prototype={
$0(){this.a.rJ()},
$S:0}
C.ehZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nC()
w.IG()},
$S:0}
C.efZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nC()
w.IG()},
$S:0}
C.ehM.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ehN.prototype={
$1(d){return d.b===D.cM},
$S:z+4}
C.ehO.prototype={
$1(d){return d.a},
$S:z+22}
C.ehP.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b0,A.aM),$.au())},
$S:260}
C.ehQ.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:670}
C.edc.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ei_.prototype={
$0(){},
$S:0}
C.ef7.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wy()
w.IG()},
$S:0}
C.eda.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wy()},
$S:0}
C.edb.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wy()},
$S:0}
C.efu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.efv.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wy()
w.IG()
w.z="Home"},
$S:0}
C.efw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ef6.prototype={
$1(d){var w=null
return B.eo(B.a([B.bI(!1,A.Rh,w,w,!0,w,w,new C.ef5(d),w,w)],x.p),w,w,w,D.f4J,w,w,w,w,D.eOx,w)},
$S:20}
C.ef5.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ef3.prototype={
$1(d){var w=null
return B.eo(B.a([B.bI(!1,A.Rh,w,w,!0,w,w,new C.ef2(d),w,w)],x.p),w,w,w,D.eSd,w,w,w,w,D.eQ9,w)},
$S:20}
C.ef2.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ef4.prototype={
$0(){},
$S:0}
C.eem.prototype={
$1(d){return this.a.aWb(C.byb(d))},
$S:z+7}
C.een.prototype={
$1(d){return this.a.acf(C.byb(d))},
$S:z+7}
C.efd.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.h,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bt,D.f4N,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bt,new C.NR(A.ux,D.arj,"HATI YA KUHOWA","Hati ya mahari",new C.ef8(d),w),A.T,new C.NR(A.fW,D.cMo,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ef9(d),w),A.T,new C.NR(A.hS,D.czi,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.efa(d),w),A.T,new C.NR(A.hT,D.cxL,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.efb(d),w)],v)
if(this.a.ga8X())A.d.v(u,B.a([A.T,new C.NR(A.iM,D.cj1,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.efc(d),w)],v))
return B.bq(!0,B.ch(B.u(u,A.af,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.wB,w,w,A.aj),!0,!1,A.ah,!0,!0)},
$S:34}
C.ef8.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.ef9.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.efa.prototype={
$0(){B.a8(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.efb.prototype={
$0(){B.a8(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.efc.prototype={
$0(){B.a8(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.efe.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wy()},
$S:0}
C.ede.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.edf.prototype={
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
C.efp.prototype={
$1(d){return d.b===D.l3},
$S:z+4}
C.efq.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.ed(new C.efn(w,this.a,v),null)},
$S:21}
C.efn.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.efo(p,o,a3,n),l=B.L(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.ai,i=l?A.bi:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.B(B.a([B.D(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.ct,j,q,q,q,q),q,q,q,new C.efj(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.AB[w]
v.a=null
t=v.a=u.a
a1.push(new C.be_(t,u.b,p.a===t,i,k,new C.efk(v,m),q))}a1=B.c8(A.bH,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Aw[w]
s.a=null
t=s.a=r.a
u.push(new C.bdZ(t,r.b,p.b===t,k,j,new C.efl(s,m),q))}return B.bq(!0,B.p(q,B.ch(B.u(B.a([d,A.aO,a0,A.T,a1,A.bt,v,A.T,B.c8(A.bH,u,A.bx,12,12),A.bt,new B.a3(1/0,48,B.ez(D.bDs,D.f73,new C.efm(o,n),B.db(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b5(B.m(16),A.V),D.aQt,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.aj),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rE,D.bhL,q,q,q),!0,!1,A.ah,!0,!0)},
$S:117}
C.efo.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.efh(w.a,d,e))
w.b.cZ(new C.efi(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1695}
C.efh.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.efi.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.efj.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efk.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.efl.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.efm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fc(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.efg(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efg.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.efs.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eft.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.efr(t.d))
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
s.wy()},
$S:0}
C.efr.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efK.prototype={
$1(d){return d.b===D.cM},
$S:z+4}
C.efL.prototype={
$1(d){return d.w},
$S:z+82}
C.efM.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.efN.prototype={
$1(d){var w=this,v=null,u=B.L(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.ai,r=u?A.bi:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bP,x.w).w,m=w.a,l=x.p,k=w.b
return B.bq(!0,B.p(v,B.u(B.a([B.B(B.a([B.p(v,D.bxm,A.h,v,v,D.aRO,v,38,v,v,v,v,v,38),A.bc,B.D(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.ct,s,v,v,v,v),v,v,v,new C.efH(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dp(1,A.cj,B.hG(v,new C.efI(m,k,w.c,s,w.d,t,r),k.length,A.hi,v,A.aj,new C.efJ(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rE,A.Vw,v,v,v),!0,!1,A.ah,!0,!0)},
$S:34}
C.efH.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efJ.prototype={
$2(d,e){return A.ab},
$S:35}
C.efI.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cq
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bAp,q,q,q,new C.efF(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.C(D.bjY,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bm(q,new B.b2(4,B.m(16),A.V),q,A.eH,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b2(4,B.m(16),D.aQ8),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ag,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.efG(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1696}
C.efF.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hQ9(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o7(q.a,o,n,s)
r.bI(0,new B.bc(m,B.h1(A.br,o+s.length),A.aM))
l.agg(k,m)
l.oB()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efG.prototype={
$1(d){var w=this.a
w.agg(this.b.a,d)
w.oB()},
$S:2}
C.efO.prototype={
$0(){},
$S:0}
C.eff.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edv.prototype={
$0(){},
$S:0}
C.edw.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h3K(this.b,w,!0)
w=this.a
w.r=null
w.wy()},
$S:0}
C.edx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.edy.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.edu(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wy()},
$S:0}
C.edu.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efU.prototype={
$1(d){return B.p8(new C.efT(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.efT.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.C(E.adz,B.u(B.a([D.f2A,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ih(!0,w,e,A.z,D.eso,new C.efS(this.a,this.b),20,A.rH,w,A.aj,!1),1)],v),A.af,w,A.e,A.j,0,A.p)},
$S:445}
C.efS.prototype={
$2(d,e){var w=null,v=D.Fk[e],u=C.hm5(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fB,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bq,B.p(w,D.en_,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.np,w,w,w)],m))
return B.aD(!1,A.Y,!0,w,B.aI(!1,t,!0,B.p(w,B.u(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efR(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:74}
C.efR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c8V(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a8(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efV.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wy()},
$S:0}
C.ec9.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qS(4294967295,null,0,0,null,C.cy(),D.ma,"","","",D.db),s=this.b
C.c97(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Ba){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.edt.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.m(0,"id",C.cy())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iP
$.iP=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fS7(q));++v.f},
$S:0}
C.edr.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eg2.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.edn.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.edm(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.edm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eg1.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.Q(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.edd.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b0,A.aM),$.au())},
$S:260}
C.edP.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ehK.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ehL.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aqa(w).fu()
v=u.UF(w)
v.srp(B.h1(A.br,v.a.a.length))},
$S:8}
C.eh9.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.VD(v)
if(u!=null&&u.b===D.cM)w.UF(u).saS(0,u.r)}else w.w=null},
$S:0}
C.eca.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.be,!1,v.gpB().e.l(),A.az,"",4280640491,24,A.bg,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.bb,4280172719,2,"Tap to edit text",0,0,"",D.cd,D.cM,0.7,0.15,0.2)
A.d.J(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ec7.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.be,!1,4279310375,A.az,"",v.gpB().c.j(0.25).l(),24,A.bg,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpB().c.l(),2,"",0,0,"",D.cd,D.eT,0.25,0.3,0.3)
A.d.J(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ebY.prototype={
$0(){var w=C.ei(A.be,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a4,"",0.55,C.cy(),this.b,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.l3,0.6,0.2,0.18),v=this.a
A.d.J(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ebV.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bJf],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagR().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,D.bv8,r,r,r,r,new C.ebU(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bq(!0,B.cL(q,r,r,r,r,A.aj,!0),!0,!1,A.ah,!0,!0)},
$S:34}
C.ebU.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.ebW.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cy(),u=this.b,t=A.Q.al(u.ac(),null),s=C.ei(A.be,!1,4279310375,A.az,u.b,4280640491,24,A.bg,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.bb,4280172719,2,t,0,0,"",D.cd,D.a1q,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdk().z,s)
t.r=s.a},
$S:0}
C.edp.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.edq.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.edo(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.au()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.edo.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ecC.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cM)s.Q=t.c.l()
else if(w===D.eT){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ecD(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ecD.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ecH.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ecI(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ecI.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ecF.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cM){s.Q=t.c
return}w=new C.ecG(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ecG.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.hK(w,new C.ecE()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ecE.prototype={
$1(d){return d.b===D.cM},
$S:z+4}
C.ecB.prototype={
$0(){return C.c97(this.b,this.c,this.a.gpB())},
$S:0}
C.efE.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ehT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehU.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ehV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehW.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bi(s,new C.ehS(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQs()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wy()
t.IG()}},
$S:0}
C.ehS.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ehp.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a90(),s=w.b,r=u.a91(A.f1,A.kC,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bt,B.p(v,B.B(B.a([B.D(u.aQK(w.c,A.ai),1),new B.C(A.fp,B.p(v,D.bve,A.h,v,v,new B.o(A.f1.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.D(u.aQK(s,A.f1),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aC,A.w,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bt,u.aQN(A.f1,d,D.brn,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bR0(A.b_,d,A.rV,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQL(d,"Not now"))
return new C.Ii(B.u(p,A.af,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.eho.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Ii(B.u(B.a([v.a90(),A.P,v.a91(A.b_,D.br4,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.d1(new B.aX(0,1/0,0,B.aG(d,A.bP,x.w).w.a.b*0.42),B.hG(w,new C.ehm(v,u,d),u.length,w,w,A.aj,new C.ehn(),!0),w),A.ay,v.aQL(d,"Cancel")],x.p),A.af,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.ehn.prototype={
$2(d,e){return A.T},
$S:35}
C.ehm.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.Y,!0,w,B.aI(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aif,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bGl,A.n),w,42,w,w,w,w,w,42),A.bc,B.D(B.u(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mV,w,w,w),A.d5,B.d("Updated "+this.a.O8(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ehl(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:74}
C.ehl.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.ehi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a90()
t=t.a91(A.aX,A.t1,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Ii(B.u(B.a([s,A.P,t,A.bt,B.B(B.a([B.D(B.dV(A.a4J,new C.ehg(d),B.db(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cc,u,new B.b5(B.m(14),A.V),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bK(D.eQH,new C.ehh(d),B.bk(A.f1,u,u,u,A.c,u,A.cc,u,new B.b5(B.m(14),A.V),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.af,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.ehg.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.ehh.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.ehk.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a90(),s=w.b,r=u.a91(A.aS,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.aru("Names",""+w.c),1),A.aa,B.D(u.aru("Fields",""+w.d),1),A.aa,B.D(u.aru("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.wr,v,new B.b5(B.m(14),A.V),v,v,v)
return new C.Ii(B.u(B.a([t,A.P,r,A.aO,p,A.bt,B.bK(B.d("Open "+s,v,v,v,v,v,v,A.mU,v,v,v),new C.ehj(d),o),A.T,u.aQM(d,"Stay here",!1)],q),A.af,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ehj.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eei.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eeh.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eha.prototype={
$1(d){return d.b===D.cM},
$S:z+4}
C.ehJ.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yv(A.d.dI(w.d,new C.ehH(v),new C.ehI(v)).hs(),w.f,null)},
$S:z+84}
C.ehH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehI.prototype={
$0(){return this.a},
$S:z+85}
C.ec2.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hb,w,w,w),w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bwX,w,w,w,w,new C.ec0(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eOR,w,w,w)],x.p)
if(v>1)t.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.by5,w,w,w,w,new C.ec1(d),!1,w,w,w,w,w,D.f89,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.bq(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ec0.prototype={
$0(){B.a8(this.a,!1).M("scroll")
return null},
$S:0}
C.ec1.prototype={
$0(){B.a8(this.a,!1).M("split")
return null},
$S:0}
C.ec3.prototype={
$0(){var w=this.b,v=w.c,u=C.ei(A.be,!1,4279310375,A.az,v,4280640491,24,A.bg,A.a4,"",0.84,C.cy(),w.b,"","",0,!1,"",0,D.bb,4280172719,2,v,0,0,"",D.cd,D.Pf,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ec4.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iP
$.iP=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iP
$.iP=k+1
m.push(new C.ey(""+1000*l+"_"+k,D.Pf,0.04,0.06,0.92,0.88,v,24,A.a4,A.bg,A.az,4279310375,A.be,u,D.bb,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cd,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lp(""+1000*p+"_"+o,r+n,"",D.pm,4294967295,null,D.db,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ec8.prototype={
$0(){var w,v=C.cy(),u=this.a,t=u.e
t=(t==null?null:C.ki(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ei(A.be,!1,4279310375,A.az,t,4280640491,24,A.bg,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kH,0.35,0.55,0.62)
A.d.J(u.gdk().z,w)
u.r=w.a},
$S:0}
C.ec_.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aYR(o)
w=C.cy()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ei(A.be,!1,4279310375,A.az,"marriage_sign_placed_"+A.a.e1(v.db,"marriage_sign_",""),4280640491,24,A.bg,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kH,s,u,t)
A.d.J(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.ebZ(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hKl(p)}},
$S:0}
C.ebZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eg_.prototype={
$0(){var w=this.a,v=this.b
w.aYR(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ehR.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eel.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.eek())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eek.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ecL.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ecM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rJ()},
$S:8}
C.ebX.prototype={
$0(){var w=C.ei(A.be,!1,4279310375,A.az,"HD Photo",4280640491,24,A.bg,A.a4,"",0.8,C.cy(),this.b,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.l3,0.8,0.1,0.1),v=this.a
A.d.J(v.gdk().z,w)
v.r=w.a},
$S:0}
C.edN.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ec5.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ece.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ecf.prototype={
$0(){var w=this.b.hs(),v=C.cy(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ei(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ecg.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecd(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ecd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecr.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecc(v))
if(u>0){A.d.cu(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ecc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecu.prototype={
$0(){return this.a.as=A.be},
$S:0}
C.ecv.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ecw.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.ecx.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ecy.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ecz.prototype={
$1(d){return d.b===D.cM},
$S:z+4}
C.ecA.prototype={
$1(d){return d.length!==0},
$S:3}
C.ech.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.J(v,C.BK(w.gpB().c.j(0.18).l(),0.1,u,D.bb,0,2,1,0,0))
u=w.gdk().z
v=C.cy()
A.d.J(u,C.iK(A.be,!1,w.gpB().d.l(),A.az,18,A.bg,A.I,0.07,v,"Document Header",0,D.db,0.9,0.05,0.02))},
$S:0}
C.eci.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cy()
A.d.J(u,C.BK(v.gpB().c.j(0.12).l(),0.1,t,D.bb,0,2,1,0,0.9))
t=v.gdk().z
u=C.cy()
w=C.byS()
A.d.J(t,C.iK(A.L,!1,v.gpB().e.l(),A.az,12,A.bg,A.a4,0.06,u,"Footer \xb7 "+w,0,D.db,0.9,0.05,0.92))},
$S:0}
C.ecj.prototype={
$0(){A.d.J(this.a.gdk().z,C.BK(1727914055,0.12,C.cy(),D.bb,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eck.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdk().z,C.BK(w,0.08,C.cy(),D.bb,w,2,0.5,0.2,0.4))},
$S:0}
C.ecl.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.J(v,C.BK(w.gpB().c.j(0.35).l(),0.12,u,D.Bb,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdk().z,C.iK(A.be,!1,4279310375,A.az,18,A.bg,A.a4,0.15,C.cy(),"Important note",0,D.pn,0.5,0.38,0.52))},
$S:0}
C.ecm.prototype={
$0(){var w=this.a
A.d.J(w.gdk().z,C.BK(4294507260,0.78,C.cy(),D.bb,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdk().z,C.iK(A.be,!1,4279179050,A.az,16,A.bg,A.a4,0.7,C.cy(),"MEMO\n\nTo:\nFrom:\nDate: "+C.byS()+"\n\nSubject:\n\nBody text\u2026",0,D.db,0.76,0.12,0.14))},
$S:0}
C.ecn.prototype={
$0(){var w=this.a
A.d.J(w.gdk().z,C.BK(4294897802,0.28,C.cy(),D.bb,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdk().z,C.iK(A.be,!1,4285611794,A.az,15,A.bg,A.a4,0.24,C.cy(),"Sticky note",0,D.aAv,0.26,0.64,0.14))},
$S:0}
C.eco.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdk().z,C.BK(4293060848,0.04,C.cy(),D.bb,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdk().z,C.BK(w,0.04,C.cy(),D.bb,w,2,0.55,0.1,0.48))},
$S:0}
C.ecp.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdk().z,C.iK(A.be,!1,w,A.az,18,A.bg,A.a4,0.62,C.cy(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ge,0.42,0.06,0.18))
A.d.J(v.gdk().z,C.iK(A.be,!1,w,A.az,18,A.bg,A.a4,0.62,C.cy(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.th,0.42,0.52,0.18))},
$S:0}
C.ecq.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdk().z,C.BK(858088427,0.62,C.cy(),D.bb,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdk().z,C.BK(856004201,0.62,C.cy(),D.bb,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdk().z,C.iK(A.be,!1,w,A.az,20,A.bg,A.I,0.1,C.cy(),"Option A",0,D.db,0.36,0.08,0.2))
A.d.J(v.gdk().z,C.iK(A.be,!1,w,A.az,20,A.bg,A.I,0.1,C.cy(),"Option B",0,D.db,0.36,0.56,0.2))},
$S:0}
C.ecs.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdk().z,C.BK(4294967295,0.36,C.cy(),D.bb,w,2,0.24,0.38,0.28))
A.d.J(v.gdk().z,C.iK(A.L,!1,w,A.az,14,A.bg,A.a4,0.12,C.cy(),"[ QR CODE ]",0,D.db,0.24,0.38,0.4))},
$S:0}
C.ect.prototype={
$0(){return C.c97(this.b,D.Pg,this.a.gpB())},
$S:0}
C.edM.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a31.t(0,d),t=this.a
return t.b2H(d,v===d,A.aW,this.c,new C.edL(t,u,d,w),u)},
$S:z+25}
C.edL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nv(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bzE(r,new C.edK(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edK.prototype={
$0(){return this.a.cZ(new C.edJ(this.b,this.c))},
$S:0}
C.edJ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ec6.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qS(4294967295,null,0,0,null,C.cy(),D.ma,"","","",D.db),s=this.b
C.c97(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Ba){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ecP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hQc(p,q.d,s,new C.ecO(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rJ(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecO.prototype={
$1(d){return this.beY(d)},
beY(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.ecN(t,d))
w=2
return B.b(t.rJ(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ecN.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.ecQ.prototype={
$0(){return this.a.bCl()},
$S:0}
C.ecR.prototype={
$0(){return this.a.aMb("Class Presentation",!0)},
$S:0}
C.ecS.prototype={
$1(d){return this.a.bDh(d.b,this.b,d.a)},
$S:z+88}
C.eds.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bP,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.efD.prototype={
$1(d){return new B.C(new B.M(0,0,0,B.aG(d,A.eq,x.w).w.f.d),new B.ed(new C.efC(this.a,this.b),null),null)},
$S:57}
C.efC.prototype={
$2(d,e){return B.p8(new C.efB(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1698}
C.efB.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.bf,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.T,r,new B.C(A.ad0,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bI(!1,A.yq,v,v,!0,v,v,new C.efz(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cL(B.a([p.aOO(u,!0,!0,new C.efA(p,w.d))],q),e,D.bfC,v,v,A.aj,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kk,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.efz.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efA.prototype={
$0(){this.b.$1(new C.efx())
var w=this.a
if(w.c!=null)w.n(new C.efy())},
$S:0}
C.efx.prototype={
$0(){},
$S:0}
C.efy.prototype={
$0(){},
$S:0}
C.ehb.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.ehc.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,new C.aw6(this.a,null),0.94+w*0.06,null,null),w)},
$S:446}
C.ehd.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.ehe.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,new C.b9n(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:446}
C.ehf.prototype={
$0(){return A.d.ck(this.a.d,0,C.U2(this.b))},
$S:0}
C.ecb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.72)],t):B.a([A.c.j(0.88),A.oN.j(0.75)],t)
r=B.H(A.bd.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bd.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.H(A.bd.j(0.45+q),A.r,1)
t=B.p(p,B.V(A_.Xb,u?A.al:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.w,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.tl(A.fl,B.p(p,B.u(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ai,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aC,A.w,s,p,p),A.n),p,p,p,p,A.en,p,p,1/0),14,!1),A.ap)},
$S:584}
C.edg.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.edh.prototype={
$1(d){return d.length!==0},
$S:3}
C.edi.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k4
else{w=B.ae("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.XK:A.A4}return w},
$S:673}
C.edl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dG.av(0,A.k.H(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.mo.j(0.82)],s)
r=m.e
q=A.d.gK(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.ki(v.w)?A.ux:A.p9,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O8(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O8(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O8(v.f)
r=k.bDf(n,A.d.gK(r),t)
return B.p(l,B.bu(j,new B.a5P(B.aD(!1,A.Y,!0,l,B.aI(!1,l,!0,B.p(l,B.dK(!1,A.JX,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.ns,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.edj(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aC,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.edk(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.h,l,l,l,l,l,l,A.d8,l,l,l,l)},
$S:90}
C.edk.prototype={
$0(){return this.a.acf(this.b)},
$S:0}
C.edj.prototype={
$0(){return this.a.zP(this.b,this.c)},
$S:0}
C.eeM.prototype={
$0(){var w=this.a
w.b1k()
w.n(new C.eeL())},
$S:0}
C.eeL.prototype={
$0(){},
$S:0}
C.eeN.prototype={
$1(d){return this.a.agg(this.b.a,d)},
$S:2}
C.eeO.prototype={
$0(){this.a.cZ(new C.eeK(this.b))},
$S:0}
C.eeK.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eeP.prototype={
$0(){this.a.cZ(new C.eeJ(this.b))},
$S:0}
C.eeJ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.eeQ.prototype={
$0(){this.a.cZ(new C.eeI(this.b))},
$S:0}
C.eeI.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mf},
$S:0}
C.eeR.prototype={
$0(){this.a.cZ(new C.eeH(this.b))},
$S:0}
C.eeH.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eeS.prototype={
$0(){var w=this.a
w.cZ(new C.eeG(w,this.b))},
$S:0}
C.eeG.prototype={
$0(){var w=this.b
return w.as=this.a.bXu(w.as)},
$S:0}
C.eeT.prototype={
$0(){return this.a.cZ(new C.eeF(this.b))},
$S:0}
C.eeF.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eeU.prototype={
$0(){return this.a.cZ(new C.eeE(this.b))},
$S:0}
C.eeE.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eex.prototype={
$0(){return this.a.a_S(this.b.a)},
$S:0}
C.eey.prototype={
$0(){this.a.Yu()
return null},
$S:0}
C.eez.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bP,x.w).w.a.a<900)w.acy()
else w.n(new C.eew(w))},
$S:0}
C.eew.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eeA.prototype={
$0(){this.a.cZ(new C.eev(this.b))},
$S:0}
C.eev.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eeB.prototype={
$0(){return this.a.cZ(new C.eeu(this.b))},
$S:0}
C.eeu.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eeC.prototype={
$0(){return this.a.cZ(new C.eet(this.b))},
$S:0}
C.eet.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eeD.prototype={
$0(){return this.a.awd(null)},
$S:0}
C.edF.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.edG.prototype={
$0(){this.a.a7A()
return null},
$S:0}
C.edI.prototype={
$1(d){return this.beZ(d)},
beZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(B.c1(A.aG,null,new C.edA(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.edB(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.edC(r))
s=s.c.G(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.edD(r))
s=s.c.G(x.q).f
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
return B.b(C.h4S(q,new C.Df(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.edE(r,p))
s=s.c.G(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aey(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.edA.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dP1],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bx3:r
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.edz(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bq(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.edz.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.edB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edC.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.edD.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.edE.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edH.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yI(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yI(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yI(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aey(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dTh,q,v,u,B.yI(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:127}
C.ehX.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byP(w,v)}},
$S:0}
C.ehY.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.eeX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bGf:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aQ:A.bw
return new B.C(A.hi,B.aH(u,B.di(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,A.lq,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eeW(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:128}
C.eeW.prototype={
$0(){var w=this.a
return w.n(new C.eeV(w,this.b))},
$S:0}
C.eeV.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eeY.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_x:E.aro
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbGw():t.gbCG()
return B.hA(B.aH(u,B.p(u,D.ahI,A.h,u,u,new B.o(u,u,u,u,B.a([new B.aa(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.w,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1701}
C.eeZ.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hPt(v,w.a.c)},
$S:0}
C.egl.prototype={
$0(){return this.b.um(this.a.a)},
$S:0}
C.egm.prototype={
$0(){return this.a.um(D.ma)},
$S:0}
C.egn.prototype={
$0(){return this.a.um(D.Gc)},
$S:0}
C.egy.prototype={
$0(){return this.a.um(D.Gd)},
$S:0}
C.egJ.prototype={
$0(){return this.a.um(D.Gb)},
$S:0}
C.egU.prototype={
$0(){return this.a.pm("lab_report")},
$S:0}
C.eh0.prototype={
$0(){return this.a.pm("rubric")},
$S:0}
C.eh1.prototype={
$0(){return this.a.pm("minutes")},
$S:0}
C.eh2.prototype={
$0(){return this.a.pm("agenda")},
$S:0}
C.eh3.prototype={
$0(){return this.a.pm("timeline")},
$S:0}
C.eh4.prototype={
$0(){return this.a.pm(this.b.a)},
$S:0}
C.ego.prototype={
$0(){this.a.TQ()
return null},
$S:0}
C.egp.prototype={
$0(){this.a.TK()
return null},
$S:0}
C.egq.prototype={
$0(){return this.a.pm("table")},
$S:0}
C.egr.prototype={
$0(){return this.a.pm("sticky")},
$S:0}
C.egs.prototype={
$0(){return this.a.pm("divider")},
$S:0}
C.egt.prototype={
$0(){return this.a.pm("header_bar")},
$S:0}
C.egu.prototype={
$0(){return this.a.on(D.bb)},
$S:0}
C.egv.prototype={
$0(){return this.a.on(D.ey)},
$S:0}
C.egw.prototype={
$0(){return this.a.on(D.jn)},
$S:0}
C.egx.prototype={
$0(){return this.a.on(D.Bb)},
$S:0}
C.egz.prototype={
$0(){return this.a.on(D.jo)},
$S:0}
C.egA.prototype={
$0(){return this.a.on(D.kI)},
$S:0}
C.egB.prototype={
$0(){return this.a.on(D.fh)},
$S:0}
C.egC.prototype={
$0(){this.a.FY()
return null},
$S:0}
C.egD.prototype={
$0(){this.a.LJ()
return null},
$S:0}
C.egE.prototype={
$0(){return this.a.pm("quote")},
$S:0}
C.egF.prototype={
$0(){return this.a.a5L()},
$S:0}
C.egG.prototype={
$0(){this.a.Yz()
return null},
$S:0}
C.egH.prototype={
$0(){var w=this.a
return w.n(new C.egb(w))},
$S:0}
C.egb.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.egI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nv(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.egj(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egj.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.egK.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jm()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a32.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.bf
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.w,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a32.t(0,q))u.push(B.an(s,B.p(s,D.Lx,A.h,s,s,D.Ct,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hi,B.aH(s,B.hA(new B.am(A.W,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.egi(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+89}
C.egi.prototype={
$0(){this.a.a62(this.b)
return null},
$S:0}
C.egL.prototype={
$0(){this.a.a61(this.b)
return null},
$S:0}
C.egM.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hm6(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.bf
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qS(4294967295,r,0,0,r,"preview_"+w,D.pm,"","","",D.db)
C.h1P(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h38(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.aig,A.h,r,r,D.Ct,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.kv,B.aH(r,B.u(B.a([new B.am(A.W,r,A.a9,A.q,u,r),A.d5,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ai,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.egh(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+90}
C.egh.prototype={
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
return B.b(s.nv(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cZ(new C.eg7(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eg7.prototype={
$0(){return C.h1P(this.a,this.b.a)},
$S:0}
C.egk.prototype={
bf_(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a31.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nv(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bf_(d,e)},
$S:z+91}
C.eh5.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.z(new B.J(d,new C.eh7(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ch(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ)},
$S:z+92}
C.eh7.prototype={
$1(d){var w=this
return w.a.b2H(d,w.b===d,w.c,w.d,new C.eh6(w.e,d),!D.a31.t(0,d))},
$S:z+25}
C.eh6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.egN.prototype={
$1(d){this.b.$2(d,new C.egg(this.a,d,this.c))
return null},
$S:z+26}
C.egg.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bzE(u,new C.eg6(v,this.c,w),w)},
$S:0}
C.eg6.prototype={
$0(){return this.a.cZ(new C.eg4(this.b,this.c))},
$S:0}
C.eg4.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.egO.prototype={
$1(d){this.b.$2(d,new C.egf(this.a,d))
return null},
$S:z+26}
C.egf.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fwO(u,new C.eg5(v,w),w)},
$S:0}
C.eg5.prototype={
$0(){var w=this.a
return w.cZ(new C.eg3(w,this.b))},
$S:0}
C.eg3.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.egP.prototype={
$0(){var w=this.a
return w.n(new C.ege(w))},
$S:0}
C.ege.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.egQ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byP(w,v)}},
$S:0}
C.egR.prototype={
$0(){this.a.GK()
return null},
$S:0}
C.egS.prototype={
$0(){return this.a.a5L()},
$S:0}
C.egT.prototype={
$0(){var w=this.a,v=w.jm()
if(v!=null&&v.b===D.cM)w.cZ(new C.egd(v))},
$S:0}
C.egd.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.egV.prototype={
$0(){this.a.Co()
return null},
$S:0}
C.egW.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.E_(v,!0)
return null},
$S:0}
C.egX.prototype={
$0(){this.a.cZ(new C.egc(this.b))},
$S:0}
C.egc.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.egY.prototype={
$0(){this.a.cZ(new C.ega(this.b))},
$S:0}
C.ega.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.egZ.prototype={
$0(){this.a.cZ(new C.eg9(this.b))},
$S:0}
C.eg9.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mf},
$S:0}
C.eh_.prototype={
$0(){this.a.cZ(new C.eg8(this.b))},
$S:0}
C.eg8.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ecK.prototype={
$1(d){return this.beX(d)},
beX(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nv(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cZ(new C.ecJ(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.ecJ.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ehs.prototype={
$0(){var w=this.a
return w.cZ(new C.ehr(w,this.b))},
$S:0}
C.ehr.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eht.prototype={
$0(){var w=this.a
return w.cZ(new C.ehq(w,this.b))},
$S:0}
C.ehq.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.edS.prototype={
$0(){return this.a.cZ(new C.edR(this.b))},
$S:0}
C.edR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.edT.prototype={
$0(){return this.a.cZ(new C.edQ(this.b))},
$S:0}
C.edQ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eep.prototype={
$1(d){var w=x.gh
w=B.z(new B.J(D.ajW,new C.eeo(),w),w.k("ai.E"))
return w},
$S:z+94}
C.eeo.prototype={
$1(d){var w=null
return B.yI(B.d(d.b,w,w,w,w,w,w,A.mX,w,w,w),48,d,x.fO)},
$S:z+95}
C.ehF.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a3(v,w?8:0,null,null)},
$S:35}
C.ehE.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jH()?q:new C.ehC(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.bf:A.cp
v=B.H(v,A.r,o?2:1)
u=r.d?A.cV:A.c
t=B.bZ(0,C.h38(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aH(q,B.p(q,new B.am(A.W,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.mT,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adT,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ehD(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:76}
C.ehD.prototype={
$0(){var w=this.a
return w.n(new C.ehy(w,this.b))},
$S:0}
C.ehy.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IG()},
$S:0}
C.ehC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c1(null,null,new C.ehz(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.ehA(q,s))
q.aNz()}else if(r==="del"){q=t.a
q.n(new C.ehB(q,s))
q.aMM()}else if(r==="up")t.a.aZ3(s,s-1)
else if(r==="down")t.a.aZ3(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehz.prototype={
$1(d){var w=null,v=B.a([B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byH,w,w,w,w,new C.ehu(d),!1,w,w,w,w,w,w,w,D.ePI,w,w,w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byA,w,w,w,w,new C.ehv(d),!1,w,w,w,w,w,w,w,A.vm,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxS,w,w,w,w,new C.ehw(d),!1,w,w,w,w,w,w,w,D.eXa,w,w,w))
if(u<this.b.r.length-1)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bzT,w,w,w,w,new C.ehx(d),!1,w,w,w,w,w,w,w,D.ePx,w,w,w))
return B.bq(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ehu.prototype={
$0(){B.a8(this.a,!1).M("dup")
return null},
$S:0}
C.ehv.prototype={
$0(){B.a8(this.a,!1).M("del")
return null},
$S:0}
C.ehw.prototype={
$0(){B.a8(this.a,!1).M("up")
return null},
$S:0}
C.ehx.prototype={
$0(){B.a8(this.a,!1).M("down")
return null},
$S:0}
C.ehA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehG.prototype={
$0(){return this.a.a5L()},
$S:0}
C.ed9.prototype={
$0(){var w=this.a
w.b1k()
w.awd(null)},
$S:0}
C.ed8.prototype={
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
s=B.a([B.bu(s,B.bT(A.kd,new B.o(m.f==null?B.aY(m.e):p,p,p,p,p,r,A.n),A.ba),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.ed7(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bT(new B.am(A.W,p,A.a9,A.h,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.ba)},
$S:443}
C.ed7.prototype={
$1(d){var w=this
return w.a.byH(d,w.b,w.c,w.d)},
$S:z+23}
C.ecX.prototype={
$0(){var w=this
if(w.b){w.a.LS(w.c)
return}if(w.d){w.a.a5J(w.c)
return}if(w.e){w.a.adS(w.c)
return}if(w.f)w.a.b1T(w.c)},
$S:0}
C.ecY.prototype={
$0(){this.a.LS(this.b)
return null},
$S:0}
C.ecZ.prototype={
$0(){return this.a.a_S(this.b.a)},
$S:0}
C.ed_.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ecW(u,d,w.c,w.d))
v.Go()
v.nC()
v.oB()},
$S:18}
C.ecW.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ed0.prototype={
$1(d){return this.a.agg(this.b.a,d)},
$S:2}
C.ed2.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fI8(w))u.a.LS(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b1T(v)},
$S:0}
C.ed1.prototype={
$0(){return this.a.a_S(this.b.a)},
$S:0}
C.ed3.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ecV(w.b,d,w.c,w.d))
v.Go()
v.nC()
v.oB()},
$S:18}
C.ecV.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cM)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ed4.prototype={
$1(d){var w=this.a
w.n(new C.ecU(this.b,d))
w.Go()
w.nC()
w.oB()},
$S:242}
C.ecU.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cM)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ed5.prototype={
$0(){var w=this.a
w.n(new C.ecT(this.b))
w.Go()
w.nC()
w.oB()},
$S:0}
C.ecT.prototype={
$0(){this.a.r=C.h2E()},
$S:0}
C.ed6.prototype={
$0(){return this.a.a_S(this.b.a)},
$S:0}
C.ef0.prototype={
$0(){var w=this.a
return w.n(new C.ef_(w))},
$S:0}
C.ef_.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ef1.prototype={
$1(d){return this.a.ctw(this.b.a,d)},
$S:2}
C.ee5.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.ee6.prototype={
$1(d){return this.a.$1(new C.ee4(this.b,d))},
$S:6}
C.ee4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ee7.prototype={
$1(d){return this.a.$1(new C.ee3(this.b,d))},
$S:6}
C.ee3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ee8.prototype={
$1(d){return this.a.$1(new C.ee2(this.b,d))},
$S:6}
C.ee2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ee9.prototype={
$1(d){return this.a.$1(new C.ee1(this.b,d))},
$S:6}
C.ee1.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eea.prototype={
$1(d){return this.a.$1(new C.ee0(this.b,d))},
$S:6}
C.ee0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eeb.prototype={
$1(d){return this.b.$1(new C.ee_(this.a,this.c))},
$S:9}
C.ee_.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eec.prototype={
$1(d){return this.b.$1(new C.edZ(this.a,this.c))},
$S:9}
C.edZ.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eed.prototype={
$1(d){var w=null,v=this.b,u=B.aY(d),t=v.Q===d,s=t?A.bj:A.cT
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edY(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.edY.prototype={
$0(){return this.a.$1(new C.edV(this.b,this.c))},
$S:0}
C.edV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eee.prototype={
$1(d){return this.a.$1(new C.edX(this.b,d))},
$S:1702}
C.edX.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.eef.prototype={
$1(d){var w=null
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(B.aY(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edW(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.edW.prototype={
$0(){return this.a.$1(new C.edU(this.b,this.c))},
$S:0}
C.edU.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eeg.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a8(w,!1).oP()}else w=!1
if(w){w=v.a.c
w.toString
B.a8(w,!1).eD()}v.a.apa()},
$S:0}
C.eej.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dG.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.bd,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.t1,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mB,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.Y,!0,n,B.aI(!1,m,!0,B.eq(new B.a3(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aC,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:125}
C.ebT.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.bd,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.Y,!0,p,B.aI(!1,o,!0,B.eq(B.u(B.a([B.e5(A.A,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ab,B.d(q.e,p,p,p,p,p,p,A.jR,A.L,p,p)],x.p),A.m,p,A.b6,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aC,A.w,u,p,p),A.n),p,A.DK,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:125}
C.efY.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aj6,A.z,!0,w,!0,w,!1,w,A.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.am,w,w,w,w)
return B.eo(B.a([B.bI(!1,A.df,w,w,!0,w,w,new C.efW(d),w,w),B.bK(A.pC,new C.efX(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.efW.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efX.prototype={
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
t=B.aq(A.aI,A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.aa(w*2,A.G,A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK).j(0.18+w*0.12),A.J,32+w*10),D.a7g],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.b1,0.9,A.w,k,0,B.a([A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.w,k,0,B.a([m,A.d.gai(C.ki(j.a.c.w)?D.t8:M.mK).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ki(m)?D.t8:M.mK
s=B.a([new B.aa(0,A.G,A.d.gK(C.ki(m)?D.t8:M.mK).j(0.45+w*0.2),A.cs,18)],s)
m=x.p
l=B.a([p,B.e5(A.A,B.p(k,B.V(C.ki(j.a.c.w)?A.ux:A.p9,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aC,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eIg,A.L,k,k),A.av,B.d(j.gcoE(),k,k,k,k,k,k,D.eMH,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQs()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.ki(j.a.c.w)?D.t8:M.mK).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ab],m))}s.push(new C.Ib(A.wS,"Download PDF","pdf",A.d9,j.Hz(0),!1,k))
p=j.a.c
if(!p.z||p.gQs()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ib(A.kC,"Transfer to "+C.h2G(p==null?"":p),"transfer_hati",A.aS,j.Hz(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hz(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ib(D.bqr,"Rename presentation","rename",A.cb,n,!1,k),A.ar,new C.Ib(A.aft,"Duplicate","duplicate",A.b2,j.Hz(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ib(A.e4,"Delete presentation","delete",A.aF,j.Hz(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hz(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hz(n)
s.push(B.dP(B.d7(B.bI(!1,E.aKW,k,k,!0,k,k,new C.cVp(d),k,B.fm(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.at,k,D.biH,k,k,k,k,k,A.k7,k,k)),n),new B.v(0,(1-p)*8)))
return B.e5(A.A,B.d7(B.aD(!1,A.Y,!0,k,B.p(k,B.bu(q,new B.am(A.W,k,A.a9,A.q,B.a([o,new B.C(D.bhQ,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.SC,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
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
C.eiD.prototype={
$0(){return $.bgO=!$.bgO},
$S:0}
C.eit.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQD())u.asY()},
$S:0}
C.eiC.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eiu.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eiv.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.asY()},
$S:0}
C.eip.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.eiq.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eir.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eis.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.H(w-1+v,v)},
$S:0}
C.eiA.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.aY,A.q,w,null)},
$S:1703}
C.eiB.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hG)return new B.cZ(e,!1,d,null)
w=this.a
return w.cmK(w.e,d,e)},
$S:447}
C.eiw.prototype={
$2(d,e){var w=B.dh(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gq(0))*1.5708)
return B.fn(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eix.prototype={
$2(d,e){var w=B.dh(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jx((1-v.gq(0))*1.5708)
return B.fn(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiy.prototype={
$2(d,e){var w=B.dh(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gq(0)*0.8)
w.jx(v.gq(0)*0.35)
return B.fn(A.A,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiz.prototype={
$2(d,e){var w=B.dh(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gq(0)*1.2)
return B.fn(A.a7,B.d7(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiE.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWR().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWR().x
t===$&&B.c()
return new C.aYO(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ha(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:656}
C.eiG.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bP,x.w).w.a.a*0.55)w.asY()
else w.cbE()},
$S:53}
C.eiF.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fnG.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:448}
C.fnP.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eo(B.a([B.bI(!1,A.df,w,w,!0,w,w,new C.fnM(d),w,w),B.bI(!1,D.f2T,w,w,!0,w,w,new C.fnN(d,this.b,v),w,w),B.bK(A.aLb,new C.fnO(d,v,this.c),w)],x.p),w,w,L.rm,new B.a3(320,w,t,w),w,w,w,w,D.f4c,w)},
$S:20}
C.fnM.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fnN.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
C.fIN(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fnO.prototype={
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
C.fnF.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c9a.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fnL.prototype={
$1(d){return d.ac()},
$S:z+14}
C.eYC.prototype={
$1(d){return C.fIL(C.U2(B.Z(d,x.N,x.z)),this.a)},
$S:z+96}
C.fw3.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.fw4.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d7(B.e5(A.A,D.fgt,0.94+w*0.06,null,null),w)},
$S:446}
C.fw5.prototype={
$1(d){var w=this
return new C.U4(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ei9.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ei5.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ei8.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.U5(u,this.b,w.gaK9(),v,null)},
$S:z+99}
C.ei6.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ei7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eia.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eib.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eie.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eif.prototype={
$0(){var w=this.a
return w.n(new C.eid(w))},
$S:0}
C.eid.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eig.prototype={
$0(){var w=this.a
return w.n(new C.eic(w))},
$S:0}
C.eic.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eih.prototype={
$1(d){return this.a.bDg(d,this.b)},
$S:z+100}
C.ei4.prototype={
$0(){var w=this.a
return w.n(new C.ei3(w,this.b))},
$S:0}
C.ei3.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eii.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eij.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eik.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eil.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eim.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fC(new B.fw(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.G(x.q).f.P(D.evn)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebN.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ebM())},
$S:0}
C.ebM.prototype={
$0(){},
$S:0}
C.ebO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fu()},
$S:8}
C.ebJ.prototype={
$1(d){return this.a.n(new C.ebI())},
$S:2}
C.ebI.prototype={
$0(){},
$S:0}
C.ebK.prototype={
$1(d){return this.a.aV3()},
$S:2}
C.ebL.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eio.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ein(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ein.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fi_.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.en(new B.k3(this.c,new C.fhZ(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:206}
C.fhZ.prototype={
$3(d,e,f){return new C.Ha(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fi0.prototype={
$1(d){var w=null
return B.nX(!1,B.at(new C.br6(this.a,this.b,w),w,w,w),w,x.z)},
$S:266}
C.fi4.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gm5(),$async$$0)
case 3:w=4
return B.b(B.bM(A.oZ,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gm5(),$async$$0)
case 5:s=$.aT.af$.x.h(0,t.a)
r=s==null?null:s.gb5()
if(!(r instanceof B.q1))throw B.R("Could not draw the slide.")
u=r.lQ(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1706}
C.fi5.prototype={
bfv(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fM),$async$$1)
case 3:r=f
if(r==null)throw B.R("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hD([J.f2(A.dA.gaL(r))],"image/png"))
t.toString
s=Ai.fzR(t)
w=4
return B.b(new B.px(s,"load",!1,x.ev).gK(0).cJ(0,A.kr),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bfv(d)},
$S:1707}
C.fi1.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fi2.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fC(0)},
$S:141}
C.fi3.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eT_.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eEZ,A.L,w,w)},
$S:1708}
C.eT0.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.mq(A.bi,w,A.dJ,8,w,e===0?w:e,w),A.ap)},
$S:565}
C.e2k.prototype={
$1(d){this.a.XX()
return null},
$S:14}
C.e2i.prototype={
$0(){return this.a.e=D.bdS},
$S:0}
C.e2j.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bv
return this.b.e=w},
$S:0}
C.cbJ.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cbK.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aIY.prototype
w.bpY=w.p
w=C.aIr.prototype
w.bpq=w.p
w=C.aId.prototype
w.bpb=w.p
w=C.aIq.prototype
w.bpp=w.p
w=C.aIW.prototype
w.bpW=w.p
w=C.aKf.prototype
w.brp=w.p
w=C.aH8.prototype
w.bo3=w.p
w=C.aJ9.prototype
w.bq9=w.p
w=C.aJa.prototype
w.bqa=w.p
w=C.b_u.prototype
w.bkJ=w.azc})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hNr","al4",104)
v(C.aG8.prototype,"gbXP","WY",0)
var r
u(r=C.auV.prototype,"gco_","co0",38)
v(r,"gbYz","aaK",0)
v(r=C.auR.prototype,"gaTU","CR",3)
v(r,"gbYw","bYx",3)
v(r,"gatf","wM",0)
v(r,"gatg","Hh",0)
t(C,"hNQ","hjU",105)
v(C.aAT.prototype,"gc_s","c_t",3)
s(C,"hO0",0,null,["$4$paper$photo$request$template"],["fp5"],106,0)
s(C,"hO_",0,null,["$5$doc$history$instruction$photo$template"],["by9"],107,0)
v(r=C.aBb.prototype,"gc09","Hw",0)
v(r,"gbCJ","UR",0)
v(r,"gc0c","abr",0)
v(r,"gc0b","XJ",0)
v(r,"gaUM","D6",0)
v(C.aBf.prototype,"gc0e","XL",0)
v(r=C.aCy.prototype,"gaUW","O4",0)
v(r,"gcgi","aZ9",3)
v(r,"gcpn","axr",86)
v(r,"gbGn","a7E",0)
v(r,"gc0F","zs",0)
v(r=C.aEs.prototype,"gcas","Z2",0)
v(r,"gcaA","Z5",0)
v(r,"gbvQ","a68",0)
v(r,"gc0J","abB",0)
v(C.aEr.prototype,"gc0K","abC",0)
v(C.ayx.prototype,"gbuQ","a5W",0)
v(C.awY.prototype,"gc0L","XW",0)
w(C,"hOd","hM8",12)
w(C,"hOb","hJ6",12)
w(C,"hOc","hL8",12)
v(r=C.aBs.prototype,"gcsr","css",3)
v(r,"gceA","ceB",3)
u(r,"gDc","acf",7)
v(r,"gbAn","aom",3)
u(r,"gDd","aWb",7)
v(r,"gc2S","abY",0)
v(r,"gc1J","abX",0)
v(r,"gc4Z","acg",0)
v(r,"gbCG","a7f",0)
v(r,"gc5R","Yu",0)
v(r,"gc5S","acx",0)
v(r,"gc6n","acE",0)
v(r,"gc5b","acj",0)
v(r,"gbGw","a7I",0)
v(r,"gaNy","aNz",3)
v(r,"gaML","aMM",3)
v(r,"gaIu","aIv",3)
v(r,"gaMK","apa",3)
u(r,"gbv6","bv7",80)
v(r,"gax0","b18",3)
v(r,"gc1L","c1M",3)
v(r,"gbRk","bRl",3)
v(r,"gbF6","bF7",3)
v(r=C.aBv.prototype,"gcrn","cro",3)
v(r,"gcr2","cr3",3)
t(C,"hOe","hMp",2)
v(r=C.aBt.prototype,"gc0R","HB",0)
v(r,"gcic","Pv",0)
v(r,"gc0O","HA",0)
v(r,"gctH","a0u",0)
v(r,"gc6z","acL",0)
v(C.aBr.prototype,"gc0S","aV3",3)
v(r=C.aBu.prototype,"gbHh","a7S",0)
u(r,"gc0P","c0Q",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nt,C.Q0,C.bDp,C.bC_,C.cqW,C.cqU,C.bJj,C.b56,C.cqV,C.bAA,C.cbD,C.cbB,C.cbC,C.cbA,C.aq9,C.cbz,C.bKc,C.nV,C.aC3,C.ja,C.nf,C.a5O,C.yv,C.l_,C.o6,C.lL,C.yx,C.nj,C.a5W,C.aoy,C.aYP,C.e1K,C.kX,C.Do,C.ek,C.iN,C.Df,C.wL,C.ey,C.lp,C.hT,C.js,C.a5X,C.acS,C.aYQ,C.b_u,C.a0R])
u(B.kz,[C.cyK,C.bUk,C.fdc,C.cAf,C.czC,C.fiJ,C.dPM,C.dPL,C.e2n,C.e2m,C.fk7,C.eZI,C.eZJ,C.c7y,C.c7z,C.c7A,C.e6L,C.eCG,C.eC3,C.eC2,C.eD6,C.eCE,C.eCx,C.eCQ,C.eDw,C.f5n,C.eJn,C.eJm,C.eJQ,C.e1N,C.fnC,C.dLv,C.ftQ,C.fkt,C.c92,C.c90,C.c95,C.fkY,C.fkZ,C.fl_,C.fl0,C.c8N,C.c8O,C.dyM,C.c8K,C.fkX,C.eQy,C.dJH,C.c8D,C.e1t,C.fiy,C.efn,C.efM,C.efJ,C.efI,C.efT,C.efS,C.ehn,C.ehm,C.efC,C.efB,C.ecb,C.edl,C.egk,C.ehF,C.ehE,C.ed8,C.eej,C.ebT,C.cVq,C.eiA,C.eiB,C.eiw,C.eix,C.eiy,C.eiz,C.eiE,C.c9a,C.ei9,C.eik,C.cbK])
u(B.i3,[C.cyL,C.cyM,C.bKd,C.fb0,C.bUj,C.bUm,C.fqm,C.eRw,C.eRn,C.eRD,C.eYD,C.eYE,C.fdd,C.fdb,C.fpU,C.faH,C.fqI,C.cA5,C.cAa,C.cAc,C.cA8,C.cAd,C.cA6,C.cAe,C.cA1,C.czZ,C.czY,C.cA4,C.czx,C.czv,C.fhK,C.fhL,C.f1T,C.fiK,C.fiQ,C.f0X,C.c3S,C.fhI,C.fhJ,C.fcA,C.fcB,C.fiP,C.fiL,C.fiN,C.fiO,C.fiM,C.fu7,C.fcE,C.fcF,C.fcI,C.fcJ,C.fcM,C.fcN,C.fvm,C.f_8,C.fvx,C.e5F,C.e5G,C.e5H,C.e5n,C.e5z,C.e5A,C.e5C,C.c7x,C.c7v,C.c7w,C.fip,C.fir,C.fiq,C.eZK,C.eZL,C.fvA,C.e6Q,C.e6R,C.e6I,C.e6J,C.e6M,C.e6N,C.fvQ,C.eDx,C.eCX,C.eCH,C.eCU,C.eBZ,C.eC_,C.eC0,C.eC4,C.eC5,C.eDm,C.eDt,C.eDv,C.eD5,C.eD7,C.eDb,C.eDc,C.eDd,C.eDh,C.eD8,C.eD9,C.eCg,C.eCh,C.eCi,C.eCj,C.eCk,C.eCl,C.eCm,C.eCn,C.eCo,C.eBC,C.eBD,C.eBE,C.eBF,C.eBH,C.eBI,C.eCa,C.eCb,C.eCc,C.eCd,C.eCe,C.eBM,C.eBN,C.eBO,C.eBP,C.eCw,C.eCP,C.ffN,C.ffM,C.c8U,C.f5m,C.fny,C.fnr,C.fnu,C.flr,C.fls,C.flt,C.ffU,C.ffT,C.ffS,C.ffQ,C.eZF,C.eZG,C.eZH,C.fw1,C.eJp,C.eJq,C.eJj,C.eJd,C.eJJ,C.eJK,C.eJM,C.eJN,C.eJI,C.fw0,C.eJ4,C.f4C,C.e1M,C.fnA,C.fnB,C.fnD,C.fnw,C.fnx,C.fve,C.dbb,C.dbh,C.e1L,C.eWe,C.eWg,C.eWf,C.eWd,C.fgY,C.fh_,C.eYc,C.fn2,C.fn3,C.fn4,C.fnf,C.fnk,C.fnl,C.fnm,C.fnn,C.fno,C.fnp,C.fnq,C.fn5,C.fn6,C.fn7,C.fn8,C.fn9,C.fna,C.fnb,C.fnc,C.fnd,C.fne,C.fng,C.fnh,C.fni,C.fnj,C.feO,C.f4p,C.f4o,C.fnJ,C.dLw,C.dLu,C.eIe,C.c3t,C.c3v,C.ftS,C.d0M,C.d0O,C.ftR,C.ftP,C.fw_,C.fkp,C.d0m,C.fcQ,C.fcR,C.c8S,C.c8T,C.c8R,C.c8H,C.c8I,C.c8E,C.c8F,C.c8G,C.c98,C.c93,C.c8Z,C.c9_,C.c91,C.c94,C.c96,C.fl1,C.c8M,C.c8P,C.c8Q,C.c8W,C.c8X,C.fnQ,C.fmX,C.c8L,C.c8J,C.fkW,C.f6I,C.c8C,C.eFZ,C.f9v,C.ei0,C.eeq,C.eer,C.eg0,C.efP,C.efQ,C.edO,C.ehM,C.ehN,C.ehO,C.edc,C.efu,C.efw,C.ef6,C.ef3,C.eem,C.een,C.efd,C.ede,C.efp,C.efq,C.efo,C.efs,C.efr,C.efK,C.efL,C.efN,C.efG,C.edx,C.edu,C.efU,C.edm,C.ehL,C.ebV,C.edp,C.edo,C.ecD,C.ecI,C.ecG,C.ecE,C.ehT,C.ehU,C.ehV,C.ehS,C.ehp,C.eho,C.ehi,C.ehk,C.eha,C.ehJ,C.ehH,C.ec2,C.ebZ,C.eek,C.ecM,C.ecd,C.ecc,C.ecz,C.ecA,C.edM,C.ecO,C.ecS,C.efD,C.ehb,C.ehc,C.ehd,C.ehe,C.edg,C.edh,C.edi,C.eeN,C.edI,C.edA,C.edH,C.eeX,C.eeY,C.egK,C.egM,C.eh5,C.eh7,C.egN,C.egO,C.ecK,C.eep,C.eeo,C.ehz,C.ed7,C.ed_,C.ed0,C.ed3,C.ed4,C.ef1,C.ee5,C.ee6,C.ee7,C.ee8,C.ee9,C.eea,C.eeb,C.eec,C.eed,C.eee,C.eef,C.efY,C.cVn,C.cVo,C.eiG,C.fnG,C.fnP,C.fnF,C.fnL,C.eYC,C.fw3,C.fw4,C.fw5,C.ei8,C.eih,C.ebO,C.ebJ,C.ebK,C.fi_,C.fhZ,C.fi0,C.fi5,C.fi1,C.fi2,C.eT_,C.eT0,C.e2k,C.cbJ])
u(B.jk,[C.cyN,C.eRs,C.eRx,C.eRy,C.eRt,C.eRu,C.eRv,C.eRl,C.eRm,C.eRo,C.eRp,C.eRC,C.eRB,C.eRr,C.eRq,C.eRz,C.eRA,C.eRF,C.eRG,C.eRE,C.cA7,C.cAb,C.cA9,C.cA_,C.cA0,C.cA2,C.czW,C.czX,C.cA3,C.czV,C.czU,C.czT,C.czm,C.czl,C.czo,C.czw,C.czp,C.czn,C.czr,C.czs,C.czt,C.czq,C.czu,C.czy,C.czz,C.czA,C.czB,C.fcy,C.fcz,C.fcw,C.fcx,C.dYn,C.dYl,C.dYm,C.dYo,C.dYp,C.dPK,C.fcC,C.fcD,C.fcG,C.fcH,C.fcK,C.fcL,C.e2l,C.fkw,C.fkv,C.e5E,C.e5D,C.e5h,C.e5d,C.e5o,C.e5p,C.e5q,C.e5j,C.e5k,C.e5l,C.e5m,C.e5i,C.e5f,C.e5g,C.e5w,C.e5x,C.e5v,C.e5y,C.e5u,C.e5t,C.e5s,C.e5B,C.e5r,C.e5e,C.e6P,C.e6D,C.e6E,C.e6K,C.e6F,C.e6H,C.e6G,C.e6O,C.eCp,C.eCN,C.eC8,C.eC9,C.eC6,C.eC7,C.eCT,C.eCS,C.eCR,C.eCW,C.eCV,C.eBY,C.eC1,C.eBX,C.eBW,C.eBT,C.eBV,C.eBU,C.eDu,C.eDn,C.eDl,C.eDo,C.eDk,C.eDp,C.eDj,C.eDq,C.eDr,C.eDs,C.eDi,C.eD4,C.eD_,C.eDa,C.eD3,C.eDe,C.eD2,C.eDf,C.eD1,C.eDg,C.eD0,C.eCK,C.eCJ,C.eCL,C.eCI,C.eCM,C.eCC,C.eCB,C.eCD,C.eCA,C.eCz,C.eCy,C.eBG,C.eBB,C.eBQ,C.eBL,C.eBR,C.eBK,C.eBS,C.eBJ,C.eCF,C.eCt,C.eCs,C.eCu,C.eCr,C.eCv,C.eCq,C.eCO,C.eCZ,C.eCY,C.eCf,C.fnt,C.fnv,C.fnz,C.ffR,C.fii,C.fig,C.fih,C.eJr,C.eJs,C.eJo,C.eJi,C.eJh,C.eJk,C.eJl,C.eJ7,C.eJ8,C.eJa,C.eJb,C.eJc,C.eJ9,C.eJe,C.eJF,C.eJG,C.eJE,C.eJH,C.eJD,C.eJC,C.eJB,C.eJL,C.eJA,C.eJz,C.eJy,C.eJO,C.eJx,C.eJP,C.eJw,C.eJv,C.eJf,C.eJg,C.eJu,C.eJt,C.eJ0,C.eJ1,C.eJ2,C.eJ3,C.eJ_,C.eJ5,C.eJ6,C.dba,C.dbc,C.dbf,C.dbg,C.dbe,C.dbd,C.fgZ,C.feP,C.c3u,C.c3w,C.d0F,C.d0K,C.d0L,C.d0J,C.d0I,C.d0N,C.d0H,C.d0G,C.d0P,C.ftO,C.d7a,C.d7b,C.d7c,C.fcO,C.fcP,C.c99,C.ebP,C.ebQ,C.ebR,C.ebS,C.f6G,C.f6H,C.dJJ,C.dJI,C.cYV,C.cYU,C.ei2,C.ei1,C.ees,C.eh8,C.ehZ,C.efZ,C.ehP,C.ehQ,C.ei_,C.ef7,C.eda,C.edb,C.efv,C.ef5,C.ef2,C.ef4,C.ef8,C.ef9,C.efa,C.efb,C.efc,C.efe,C.edf,C.efh,C.efi,C.efj,C.efk,C.efl,C.efm,C.efg,C.eft,C.efH,C.efF,C.efO,C.eff,C.edv,C.edw,C.edy,C.efR,C.efV,C.ec9,C.edt,C.edr,C.eg2,C.edn,C.eg1,C.edd,C.edP,C.ehK,C.eh9,C.eca,C.ec7,C.ebY,C.ebU,C.ebW,C.edq,C.ecC,C.ecH,C.ecF,C.ecB,C.efE,C.ehW,C.ehl,C.ehg,C.ehh,C.ehj,C.eei,C.eeh,C.ehI,C.ec0,C.ec1,C.ec3,C.ec4,C.ec8,C.ec_,C.eg_,C.ehR,C.eel,C.ecL,C.ebX,C.edN,C.ec5,C.ece,C.ecf,C.ecg,C.ecr,C.ecu,C.ecv,C.ecw,C.ecx,C.ecy,C.ech,C.eci,C.ecj,C.eck,C.ecl,C.ecm,C.ecn,C.eco,C.ecp,C.ecq,C.ecs,C.ect,C.edL,C.edK,C.edJ,C.ec6,C.ecP,C.ecN,C.ecQ,C.ecR,C.eds,C.efz,C.efA,C.efx,C.efy,C.ehf,C.edk,C.edj,C.eeM,C.eeL,C.eeO,C.eeK,C.eeP,C.eeJ,C.eeQ,C.eeI,C.eeR,C.eeH,C.eeS,C.eeG,C.eeT,C.eeF,C.eeU,C.eeE,C.eex,C.eey,C.eez,C.eew,C.eeA,C.eev,C.eeB,C.eeu,C.eeC,C.eet,C.eeD,C.edF,C.edG,C.edz,C.edB,C.edC,C.edD,C.edE,C.ehX,C.ehY,C.eeW,C.eeV,C.eeZ,C.egl,C.egm,C.egn,C.egy,C.egJ,C.egU,C.eh0,C.eh1,C.eh2,C.eh3,C.eh4,C.ego,C.egp,C.egq,C.egr,C.egs,C.egt,C.egu,C.egv,C.egw,C.egx,C.egz,C.egA,C.egB,C.egC,C.egD,C.egE,C.egF,C.egG,C.egH,C.egb,C.egI,C.egj,C.egi,C.egL,C.egh,C.eg7,C.eh6,C.egg,C.eg6,C.eg4,C.egf,C.eg5,C.eg3,C.egP,C.ege,C.egQ,C.egR,C.egS,C.egT,C.egd,C.egV,C.egW,C.egX,C.egc,C.egY,C.ega,C.egZ,C.eg9,C.eh_,C.eg8,C.ecJ,C.ehs,C.ehr,C.eht,C.ehq,C.edS,C.edR,C.edT,C.edQ,C.ehD,C.ehy,C.ehC,C.ehu,C.ehv,C.ehw,C.ehx,C.ehA,C.ehB,C.ehG,C.ed9,C.ecX,C.ecY,C.ecZ,C.ecW,C.ed2,C.ed1,C.ecV,C.ecU,C.ed5,C.ecT,C.ed6,C.ef0,C.ef_,C.ee4,C.ee3,C.ee2,C.ee1,C.ee0,C.ee_,C.edZ,C.edY,C.edV,C.edX,C.edW,C.edU,C.eeg,C.efW,C.efX,C.cVp,C.cVM,C.cVN,C.cVj,C.cVi,C.cVm,C.cVk,C.cVl,C.eiD,C.eit,C.eiC,C.eiu,C.eiv,C.eip,C.eiq,C.eir,C.eis,C.eiF,C.fnM,C.fnN,C.fnO,C.ei5,C.ei6,C.ei7,C.eia,C.eib,C.eie,C.eif,C.eid,C.eig,C.eic,C.ei4,C.ei3,C.eii,C.eij,C.eil,C.eim,C.ebN,C.ebM,C.ebI,C.ebL,C.eio,C.ein,C.fi4,C.fi3,C.e2i,C.e2j])
t(C.aOd,B.G)
u(B.md,[C.a1N,C.auo,C.at5,C.wJ,C.wM,C.kE,C.rD,C.Aj,C.qR,C.vc,C.ap7,C.Hb,C.aox,C.u3,C.m7,C.hn,C.a6x])
u(C.bJj,[C.cqX,C.bJk])
u(C.cbD,[C.cbH,C.aq8])
t(C.cbG,C.cbB)
t(C.cbF,C.cbA)
t(C.cbI,C.cbF)
t(C.cbE,C.cbC)
t(C.cby,C.cbz)
t(C.b6D,B.ol)
t(C.ckW,B.asy)
t(C.a6k,B.ww)
t(C.aSv,B.dC)
t(C.axR,B.art)
u(B.af,[C.ZQ,C.WC,C.WA,C.anL,C.TS,C.TV,C.YT,C.Zo,C.Zn,C.aB4,C.XL,C.LM,C.Xj,C.XE,C.alN,C.aFQ,C.T6,C.awJ,C.a5E,C.Mc,C.aw6,C.Ib,C.Yv,C.U4,C.U5,C.aBq,C.aoC,C.a5F])
u(B.ag,[C.aG8,C.auV,C.auR,C.aAT,C.aBb,C.aBf,C.aCy,C.aEs,C.aEr,C.aIY,C.ayx,C.aIr,C.awY,C.bcs,C.aId,C.aKf,C.aIq,C.bam,C.aIW,C.aJ9,C.aH8,C.b98,C.aJa,C.aBt,C.bgN,C.aBr,C.aBu,C.bgw])
u(B.as,[C.auT,C.ab1,C.aar,C.bfB,C.ab4,C.acI,C.aYr,C.boJ,C.aYL,C.bi5,C.bnj,C.aWG,C.aYO,C.ab7,C.abp,C.aYM,C.Ha,C.aWJ,C.b9n,C.NR,C.Ii,C.be_,C.bdZ,C.br6])
u(B.FL,[C.b8Q,C.bq7,C.aGs,C.bbv,C.bnH])
u(B.n6,[C.b8P,C.b5o,C.bnE,C.b8m,C.bbT,C.be5,C.baZ,C.bbQ,C.bbx,C.bkg,C.b6v,C.b68,C.br3,C.bo6,C.bnf,C.baS,C.aYJ,C.bmf,C.bnc])
t(C.bgt,C.aIY)
t(C.bfQ,C.aIr)
t(C.bfD,C.aId)
t(C.bqA,C.aKf)
t(C.bfN,C.aIq)
t(C.bgr,C.aIW)
t(C.btm,C.aJ9)
t(C.aBs,C.btm)
t(C.b99,C.aH8)
t(C.aBv,C.aJa)
t(C.bqV,B.iH)
t(C.a6w,B.kd)
t(C.cbL,C.b_u)
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
v(C.btm,B.ev)
w(C.aJa,B.c7)})()
B.kf(b.typeUniverse,JSON.parse('{"aON":{"hv":["aON"]},"nt":{"aON":[],"hv":["aON"]},"aOd":{"G":["Q0"],"G.E":"Q0"},"b6D":{"ol":[]},"a6k":{"ww":[],"nP":[]},"aSv":{"dC":[],"cs":[],"r":[]},"axR":{"aP":[],"d0":["aP"],"aN":[],"cq":[]},"ZQ":{"af":[],"r":[]},"aG8":{"ag":["ZQ"]},"WC":{"af":[],"r":[]},"WA":{"af":[],"r":[]},"auV":{"ag":["WC"]},"auR":{"ag":["WA"]},"auT":{"as":[],"r":[]},"anL":{"af":[],"r":[]},"aAT":{"ag":["anL"]},"ab1":{"as":[],"r":[]},"aar":{"as":[],"r":[]},"ab4":{"as":[],"r":[]},"acI":{"as":[],"r":[]},"bfB":{"as":[],"r":[]},"TS":{"af":[],"r":[]},"aBb":{"ag":["TS"]},"aYr":{"as":[],"r":[]},"b8Q":{"aA":[]},"b8P":{"aA":[]},"bq7":{"aA":[]},"b5o":{"aA":[]},"bnE":{"aA":[]},"TV":{"af":[],"r":[]},"aBf":{"ag":["TV"]},"b8m":{"aA":[]},"YT":{"af":[],"r":[]},"aCy":{"ag":["YT"]},"bbT":{"aA":[]},"Zo":{"af":[],"r":[]},"Zn":{"af":[],"r":[]},"aB4":{"af":[],"r":[]},"XL":{"af":[],"r":[]},"aEs":{"ag":["Zo"]},"aEr":{"ag":["Zn"]},"bgt":{"ag":["aB4"]},"be5":{"aA":[]},"ayx":{"ag":["XL"]},"boJ":{"as":[],"r":[]},"aYL":{"as":[],"r":[]},"bi5":{"as":[],"r":[]},"LM":{"af":[],"r":[]},"Xj":{"af":[],"r":[]},"bfQ":{"ag":["LM"]},"bnj":{"as":[],"r":[]},"baZ":{"aA":[]},"aWG":{"as":[],"r":[]},"awY":{"ag":["Xj"]},"XE":{"af":[],"r":[]},"bcs":{"ag":["XE"]},"bbQ":{"aA":[]},"bbx":{"aA":[]},"bkg":{"aA":[]},"b6v":{"aA":[]},"b68":{"aA":[]},"br3":{"aA":[]},"bo6":{"aA":[]},"bnf":{"aA":[]},"baS":{"aA":[]},"alN":{"af":[],"r":[]},"aYO":{"as":[],"r":[]},"bfD":{"ag":["alN"]},"ab7":{"as":[],"r":[]},"abp":{"as":[],"r":[]},"aFQ":{"af":[],"r":[]},"T6":{"af":[],"r":[]},"Ha":{"as":[],"r":[]},"awJ":{"af":[],"r":[]},"a5E":{"af":[],"r":[]},"aYM":{"as":[],"r":[]},"aYJ":{"aA":[]},"bqA":{"ag":["aFQ"]},"aGs":{"aA":[]},"bfN":{"ag":["T6"]},"bam":{"ag":["awJ"]},"bgr":{"ag":["a5E"]},"aWJ":{"as":[],"r":[]},"bbv":{"aA":[]},"bmf":{"aA":[]},"bnc":{"aA":[]},"aw6":{"af":[],"r":[]},"Ib":{"af":[],"r":[]},"Yv":{"af":[],"r":[]},"Ii":{"as":[],"r":[]},"Mc":{"af":[],"r":[]},"aBs":{"ag":["Mc"],"ev":[]},"b99":{"ag":["aw6"]},"b9n":{"as":[],"r":[]},"b98":{"ag":["Ib"]},"NR":{"as":[],"r":[]},"aBv":{"ag":["Yv"]},"bnH":{"aA":[]},"be_":{"as":[],"r":[]},"bdZ":{"as":[],"r":[]},"U4":{"af":[],"r":[]},"U5":{"af":[],"r":[]},"aBq":{"af":[],"r":[]},"aoC":{"af":[],"r":[]},"aBt":{"ag":["U4"]},"bgN":{"ag":["U5"]},"aBr":{"ag":["aBq"]},"bqV":{"iH":[]},"aBu":{"ag":["aoC"]},"br6":{"as":[],"r":[]},"a5F":{"af":[],"r":[]},"bgw":{"ag":["a5F"]},"a6w":{"kd":["fl<eD>"],"k0":["fl<eD>"]},"afM":{"a0R":[]},"aO3":{"iR":[],"f5":[]},"au0":{"iR":[],"f5":[]},"aPx":{"iR":[],"f5":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("K3"),U:w("uL<pw>"),bz:w("w"),M:w("f6<n>"),bo:w("jn"),g7:w("Ky"),gc:w("aw<il?>"),bq:w("aw<~>"),cc:w("a2S"),fS:w("CH"),an:w("ajo"),bm:w("O<Q0>"),X:w("O<ag1>"),f3:w("O<aON>"),aK:w("O<mM>"),V:w("O<aa>"),O:w("O<w>"),fA:w("O<lh>"),d5:w("O<aw<br<I,+icon3d,picture(n?,n?)>>>"),bH:w("O<aw<dz>>"),fG:w("O<aw<~>>"),aF:w("O<mT>"),cd:w("O<ak<ja>>"),ez:w("O<a1<n,aB>>"),d:w("O<a1<n,@>>"),B:w("O<m3>"),h:w("O<ja>"),gE:w("O<yv>"),k:w("O<nV>"),g:w("O<lp>"),D:w("O<hT>"),u:w("O<ey>"),m:w("O<u3>"),i:w("O<hn>"),aC:w("O<a5W>"),o:w("O<yx>"),e3:w("O<aB>"),dN:w("O<v>"),v:w("O<hx>"),cR:w("O<iF>"),J:w("O<j2>"),gx:w("O<oE<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(P,P)>"),ek:w("O<+(I,n)>"),n:w("O<+(I,I)>"),r:w("O<cJ>"),s:w("O<n>"),aS:w("O<iH>"),p:w("O<r>"),eR:w("O<f5>"),fT:w("O<b56>"),bx:w("O<aC3>"),gz:w("O<acS>"),x:w("O<P>"),t:w("O<I>"),dS:w("O<aA?>"),bA:w("O<v?>"),Z:w("O<I?>"),cA:w("O<ce>"),A:w("cn<ag<af>>"),gL:w("ak<nV>"),R:w("ak<hT>"),j:w("ak<@>"),bW:w("ak<I>"),e:w("br<I,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<I,+icon3d,picture(n?,n?)>"),bR:w("J<hn,r>"),eC:w("J<nj,n>"),cT:w("J<js,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,pa>"),gh:w("J<m7,jc<m7>>"),w:w("iC"),ei:w("il"),g2:w("qH"),fB:w("Df"),b6:w("yv"),gX:w("a5O"),dt:w("l_"),ea:w("nV"),bt:w("lp"),I:w("hT"),F:w("ey"),fO:w("m7"),ff:w("u3"),fP:w("hn"),Q:w("vc"),dO:w("aoy"),a:w("co"),C:w("aB"),dw:w("aq9"),di:w("a6x"),Y:w("eD"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DJ"),dB:w("dx<v>"),bJ:w("dx<n>"),_:w("dW<n>"),N:w("n"),fw:w("pw"),bO:w("ap"),K:w("bl<v>"),b:w("bl<P>"),E:w("dz"),W:w("cx<n>"),ac:w("cx<I>"),ex:w("k3<lp>"),cI:w("k3<n>"),cl:w("k3<P>"),b4:w("a4<kX>"),a8:w("a4<lL>"),fR:w("a4<+(n,n)>"),co:w("e3<v>"),l:w("r"),b2:w("bO<~>"),ev:w("px<dR>"),dT:w("be<~>"),cQ:w("axR"),q:w("mC"),y:w("T"),gR:w("P"),z:w("@"),S:w("I"),at:w("b8?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hT>?"),c:w("ak<@>?"),aP:w("il?"),af:w("hT?"),go:w("aYQ?"),a6:w("a5X?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bDr=new B.ad(A.ej,18,A.c,null,null,null)
D.aNU=new B.bG(A.ax,null,null,D.bDr,null)
D.aO2=new B.d5(0,-0.15)
D.aO4=new B.d5(0.62,0)
D.aO7=new B.d5(-0.35,-0.45)
D.aOh=new B.d5(0.9,-0.85)
D.aGa=new B.b3(30,30)
D.aPx=new B.bv(D.aGa,D.aGa,A.h_,A.h_)
D.aPL=new B.ay(A.b2,1,A.r,-1)
D.b6C=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPX=new B.ay(D.b6C,1,A.r,-1)
D.aQ8=new B.ay(A.aB,1.5,A.r,-1)
D.aQd=new B.ay(A.b2,1.6,A.r,-1)
D.aQt=new B.ay(A.aB,1.4,A.r,-1)
D.aRO=new B.o(null,null,null,null,null,K.F0,A.a5)
D.bHn=new B.a7(A.a3,A.a7,A.w,G.a_x,null,null)
D.aRW=new B.o(null,null,null,null,null,D.bHn,A.a5)
D.a77=new B.o(A.aG,null,null,A.pN,null,null,A.n)
D.b1o=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b6A=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cDv=w([D.b1o,D.b6A],x.O)
D.dUC=new B.bR(A.A,0.5,A.w,null,0,D.cDv,null,null)
D.aSd=new B.o(null,null,null,null,null,D.dUC,A.a5)
D.TV=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQH=new B.c2(N.vK,A.V,A.V,A.V)
D.aSf=new B.o(D.TV,null,D.aQH,null,null,null,A.n)
D.bJ3=new B.a7(A.a3,A.a7,A.w,A.NF,null,null)
D.aSl=new B.o(null,null,null,null,null,D.bJ3,A.a5)
D.a8r=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aSn=new B.o(D.a8r,null,null,A.r2,null,null,A.n)
D.aSr=new B.o(A.k_,null,null,null,null,null,A.a5)
D.aQN=new B.c2(A.yP,A.V,A.V,A.V)
D.aSu=new B.o(Y.a9l,null,D.aQN,A.mk,null,null,A.n)
D.Ct=new B.o(A.e9,null,null,null,null,null,A.a5)
D.aSA=new B.o(null,null,null,null,null,E.uQ,A.a5)
D.cI_=w([E.aa0,A.bW],x.O)
D.bIH=new B.a7(A.b1,A.b5,A.w,D.cI_,null,null)
D.aSE=new B.o(null,null,null,A.mk,null,D.bIH,A.n)
D.cRJ=w([A.bj,A.e9,A.jy],x.O)
D.YK=new B.a7(A.ax,A.aC,A.w,D.cRJ,null,null)
D.aSQ=new B.o(null,null,null,null,null,D.YK,A.n)
D.aSR=new B.o(D.a8r,null,null,A.kk,null,null,A.n)
D.c8Y=w([A.dD,A.bj],x.O)
D.bIz=new B.a7(A.ax,A.aC,A.w,D.c8Y,null,null)
D.aSV=new B.o(null,null,null,null,null,D.bIz,A.n)
D.aT4=new B.o(null,null,null,null,null,G.t3,A.a5)
D.aTm=new B.o(A.aa1,null,null,null,null,null,A.a5)
D.b22=new B.w(0.5647058823529412,0,0,0,A.t)
D.a7g=new B.aa(0,A.G,D.b22,A.Ps,28)
D.aVj=new B.aSI()
D.aVS=new C.ckW()
D.aW3=new C.b6D()
D.a7M=new B.cw(A.A,null,null,A.Yz,null)
D.aYr=new B.fb(null,null,null,null,null,E.mu,null,null,null,null)
D.aWA=new B.cw(A.A,null,null,D.aYr,null)
D.btl=new B.ad(A.dP,28,A.c,null,null,null)
D.aX_=new B.cw(A.A,null,null,D.btl,null)
D.aYo=new B.fb(2,null,null,null,null,A.bS,null,null,null,null)
D.aXj=new B.cw(A.A,null,null,D.aYo,null)
D.btG=new B.ad(K.Ln,40,A.bQ,null,null,null)
D.aXk=new B.cw(A.A,null,null,D.btG,null)
D.aZb=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aZn=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZJ=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZN=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b_e=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_u=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_v=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.IJ=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_R=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_W=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8F=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0z=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b1e=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8S=new B.w(1,1,1,0.9725490196078431,A.t)
D.b1v=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1E=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b1G=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b1P=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b27=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b3k=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.TG=new B.w(0.8509803921568627,0,0,0,A.t)
D.b3s=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b3y=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9A=new B.w(0.6,0,0,0,A.t)
D.a9C=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b4R=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rj=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b5d=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b5A=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b5T=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aac=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.U0=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zi=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.J5=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iW=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aaz=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.U6=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b8G=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b92=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b9g=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Uk=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bad=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.we=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.baw=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.baN=new B.hu(A.bf,!0,null,null)
D.eL0=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f81=new B.x("Bio link",null,D.eL0,null,null,null,null,null,null,null,null,null)
D.aXe=new B.cw(A.A,null,null,D.f81,null)
D.bb2=new B.hu(A.Tc,!0,D.aXe,null)
D.Jo=new C.a1N(0,"none")
D.abx=new C.a1N(1,"deflate")
D.aby=new C.a1N(2,"bzip2")
D.bbJ=new B.k7(0.165,0.84,0.44,1)
D.cIi=w([A.cl,A.dJ,A.aB],x.O)
D.bHQ=new B.a7(A.ax,A.aC,A.w,D.cIi,null,null)
D.aRT=new B.o(null,null,null,null,null,D.bHQ,A.n)
D.bCj=new B.ad(A.eI,null,A.al,null,null,null)
D.aXP=new B.cw(A.A,null,null,D.bCj,null)
D.bcg=new B.kB(D.aRT,A.ba,D.aXP,null)
D.b8T=new B.w(0.058823529411764705,1,1,1,A.t)
D.cLf=w([A.bG,A.pZ,A.pZ,D.b8T],x.O)
D.cpU=w([0,0.32,0.7,1],x.x)
D.bIo=new B.a7(A.ax,A.aC,A.w,D.cLf,D.cpU,null)
D.aRH=new B.o(null,null,null,null,null,D.bIo,A.n)
D.bcm=new B.kB(D.aRH,A.ba,null,null)
D.bd5=new B.lX(1,1,null,null,null,A.bi,null)
D.bd8=new B.lX(1,null,null,null,null,D.U6,null)
D.bdC=new B.b8(125e4)
D.bdI=new B.b8(17e4)
D.bdS=new B.b8(35964e8)
D.bdY=new B.b8(55e4)
D.be1=new B.b8(68e4)
D.bes=new B.i4(0,0,0,5)
D.beK=new B.M(0,16,16,0)
D.beN=new B.M(0,18,0,8)
D.beU=new B.M(0,36,0,36)
D.bf0=new B.M(0,54,0,0)
D.bf7=new B.M(10,0,10,3)
D.bfh=new B.i4(10,16,10,10)
D.bfq=new B.M(10,6,10,0)
D.bft=new B.M(10,6,4,6)
D.bfw=new B.M(10,8,10,6)
D.acq=new B.M(11,8,11,11)
D.bfB=new B.M(12,0,12,10)
D.bfC=new B.M(12,0,12,24)
D.bfO=new B.M(12,12,12,4)
D.bfR=new B.M(12,12,8,12)
D.bg4=new B.M(12,8,8,12)
D.bgr=new B.M(14,14,14,0)
D.bgw=new B.M(14,14,14,90)
D.bgP=new B.M(16,10,16,16)
D.bgQ=new B.M(16,10,16,20)
D.add=new B.M(16,6,16,28)
D.bhp=new B.M(18,0,18,10)
D.bhr=new B.M(18,0,18,30)
D.bht=new B.M(18,10,18,12)
D.bhu=new B.M(18,10,18,14)
D.bhL=new B.M(18,16,14,18)
D.bhQ=new B.M(18,18,18,12)
D.bhW=new B.M(18,26,18,12)
D.bi0=new B.M(18,34,18,34)
D.bi1=new B.M(18,4,18,14)
D.bi7=new B.M(18,8,18,24)
D.bip=new B.M(20,16,14,4)
D.biu=new B.M(20,18,12,4)
D.biz=new B.M(20,20,12,20)
D.biC=new B.M(20,22,20,20)
D.biH=new B.M(20,6,20,6)
D.biR=new B.M(22,18,22,18)
D.biY=new B.M(22,24,22,0)
D.bj0=new B.M(22,24,22,4)
D.bj8=new B.M(22,60,22,22)
D.bje=new B.M(24,24,24,22)
D.bjo=new B.M(26,10,60,10)
D.bju=new B.M(28,44,28,44)
D.bjL=new B.M(32,44,32,44)
D.bjT=new B.M(38,30,38,20)
D.bjY=new B.M(4,0,0,6)
D.bk9=new B.i4(4,4,4,4)
D.bky=new B.i4(6,5,6,5)
D.bkC=new B.M(6,6,8,6)
D.bkN=new B.M(8,14,8,14)
D.bkO=new B.M(8,22,8,22)
D.bkW=new B.M(8,6,12,6)
D.bl4=new B.M(8,8,8,4)
D.ae4=new B.M(9,9,9,6)
D.ble=new B.i4(2.5,2.5,2.5,2.5)
D.blf=new B.M(10.5,0,10.5,0)
D.blg=new B.M(7,1.5,7,1.5)
D.cAQ=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.blv=new B.A2(null,null,D.cAQ,A.z1)
D.cy7=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.blw=new B.A2(null,null,D.cy7,A.z1)
D.aKC=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new B.x("WORD DESIGN",null,D.aKC,null,null,null,null,null,null,null,null,null)
D.blX=new B.bF(1,A.bp,D.f7q,null)
D.f76=new B.x("Slides database",null,A7.BM,null,null,null,null,null,null,null,null,null)
D.f4x=new B.x("Admin only \xb7 keep as many as you like",null,V.aK7,null,null,null,null,null,null,null,null,null)
D.cYM=w([D.f76,A.bA,D.f4x],x.p)
D.bbr=new B.fk(A.aj,A.e,A.j,A.F,null,A.p,null,0,D.cYM,null)
D.bm_=new B.bF(1,A.bp,D.bbr,null)
D.f_v=new B.x("NGMY logo",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.bm2=new B.bF(1,A.bp,D.f_v,null)
D.eIU=new B.F(!0,A.al,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9a=new B.x("TALK TO THE EDITOR",null,D.eIU,null,null,null,null,null,null,null,null,null)
D.bmi=new B.bF(1,A.bp,D.f9a,null)
D.eUN=new B.x("Tell the AI what to change",null,A7.BM,null,null,null,null,null,null,null,null,null)
D.bmA=new B.bF(1,A.bp,D.eUN,null)
D.bne=new B.Cy(!0,"video/mp4")
D.eHe=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT3=new B.x("Move presentations between devices",null,D.eHe,null,null,null,!1,null,null,1,null,null)
D.bni=new B.pN(A.e8,A.a3,A.h,D.eT3,null)
D.eU5=new B.x("Edit in Slides",null,A.jR,null,null,null,null,null,null,null,null,null)
D.bnj=new B.pN(A.e8,A.A,A.h,D.eU5,null)
D.bny=new B.dp(1,A.cj,D.bnj,null)
D.X_=new B.a0(60988,"MaterialIcons",!1)
D.boX=new B.a0(61352,"MaterialIcons",!1)
D.afx=new B.a0(61531,"MaterialIcons",!1)
D.bq8=new B.a0(63062,"MaterialIcons",!1)
D.bqf=new B.a0(63109,"MaterialIcons",!1)
D.bqr=new B.a0(63206,"MaterialIcons",!1)
D.agd=new B.a0(63238,"MaterialIcons",!1)
D.Xy=new B.a0(63365,"MaterialIcons",!1)
D.Xz=new B.a0(63367,"MaterialIcons",!1)
D.XA=new B.a0(63368,"MaterialIcons",!1)
D.agn=new B.a0(63384,"MaterialIcons",!1)
D.br1=new B.a0(63525,"MaterialIcons",!1)
D.br4=new B.a0(63568,"MaterialIcons",!1)
D.brn=new B.a0(983072,"MaterialIcons",!1)
D.brM=new B.a0(983271,"MaterialIcons",!0)
D.bsz=new B.a0(983924,"MaterialIcons",!1)
D.ahx=new B.a0(983965,"MaterialIcons",!1)
D.ahy=new B.a0(983966,"MaterialIcons",!1)
D.bsJ=new B.a0(984592,"MaterialIcons",!1)
D.bsZ=new B.ad(A.rR,16,A.aA,null,null,null)
D.bt5=new B.ad(A.m4,null,A.c,null,null,null)
D.ahI=new B.ad(A.p8,18,A.c,null,null,null)
D.btm=new B.ad(A.A3,18,O.kU,null,null,null)
D.bu0=new B.ad(A.j3,11,null,null,null,null)
D.bua=new B.ad(A.Xh,null,A.eO,null,null,null)
D.buJ=new B.ad(A.qj,18,A.aA,null,null,null)
D.buP=new B.ad(A1.Af,14,null,null,null,null)
D.buQ=new B.ad(A.e4,28,A.cH,null,null,null)
D.bv1=new B.ad(A.p9,20,A.c,null,null,null)
D.bv8=new B.ad(A.x7,null,null,null,null,null)
D.bve=new B.ad(A.ji,18,A.ht,null,null,null)
D.bvj=new B.ad(A.kX,null,null,null,null,null)
D.bvM=new B.ad(A.XP,28,A.c,null,null,null)
D.bqb=new B.a0(63065,"MaterialIcons",!1)
D.bvV=new B.ad(D.bqb,15,A.c,null,null,null)
D.bqh=new B.a0(63113,"MaterialIcons",!1)
D.bw0=new B.ad(D.bqh,null,A.al,null,null,null)
D.bwn=new B.ad(A.uv,22,A.bI,null,null,null)
D.bwH=new B.ad(A.wT,18,null,null,null,null)
D.bwM=new B.ad(A.Ez,12,A.c,null,null,null)
D.bsl=new B.a0(983687,"MaterialIcons",!1)
D.bwX=new B.ad(D.bsl,null,A.bj,null,null,null)
D.bx3=new B.ad(A.hl,null,A.bj,null,null,null)
D.bxm=new B.ad(A.pd,22,A.c,null,null,null)
D.bxq=new B.ad(A.ct,13,A.c,null,null,null)
D.bxw=new B.ad(A.e4,26,A.aF,null,null,null)
D.bxz=new B.ad(A.qn,26,A.c,null,null,null)
D.Lx=new B.ad(A.j3,8,A.c,null,null,null)
D.bxR=new B.ad(A.p8,40,A.c,null,null,null)
D.bxS=new B.ad(A.bnU,null,null,null,null,null)
D.bxW=new B.ad(A.rZ,20,null,null,null,null)
D.bsk=new B.a0(983683,"MaterialIcons",!1)
D.by5=new B.ad(D.bsk,null,A.aW,null,null,null)
D.by6=new B.ad(A.j3,16,A.bj,null,null,null)
D.byr=new B.ad(A.uJ,null,null,null,null,null)
D.aif=new B.ad(A.ux,22,A.c,null,null,null)
D.byv=new B.ad(A.dP,17,A.c,null,null,null)
D.aig=new B.ad(A.j3,9,A.c,null,null,null)
D.byA=new B.ad(A.us,null,null,null,null,null)
D.boa=new B.a0(57744,"MaterialIcons",!1)
D.byH=new B.ad(D.boa,null,null,null,null,null)
D.byK=new B.ad(A.us,16,null,null,null,null)
D.bsQ=new B.a0(985181,"MaterialIcons",!1)
D.ET=new B.ad(D.bsQ,null,null,null,null,null)
D.byW=new B.ad(A.kX,16,A.bI,null,null,null)
D.bsc=new B.a0(983615,"MaterialIcons",!1)
D.byY=new B.ad(D.bsc,12,A.c,null,null,null)
D.aim=new B.ad(A.wP,16,null,null,null,null)
D.bz5=new B.ad(A.dP,21,A.c,null,null,null)
D.bza=new B.ad(A.hl,17,A.c,null,null,null)
D.bzb=new B.ad(A.uv,null,null,null,null,null)
D.bzp=new B.ad(A.Yd,20,A.aA,null,null,null)
D.bzE=new B.ad(A.p7,22,E.mu,null,null,null)
D.bzM=new B.ad(A.ql,13,A.al,null,null,null)
D.bzO=new B.ad(A.ahm,20,A.aA,null,null,null)
D.bnS=new B.a0(57495,"MaterialIcons",!1)
D.bzT=new B.ad(D.bnS,null,null,null,null,null)
D.bzX=new B.ad(A.ns,18,A.c,null,null,null)
D.bAh=new B.ad(A.t1,28,A.c,null,null,null)
D.bAp=new B.ad(D.agd,null,A.aB,null,null,null)
D.bAq=new B.ad(A.p9,22,A.c,null,null,null)
D.aiw=new B.ad(A.WW,16,null,null,null,null)
D.bB9=new B.ad(A.uv,32,A.c,null,null,null)
D.bBR=new B.ad(A.iM,22,A.c,null,null,null)
D.bBV=new B.ad(A.qn,22,A.al,null,null,null)
D.aiL=new B.ad(A.rR,null,A.c1,null,null,null)
D.bCO=new B.ad(A.uw,18,null,null,null,null)
D.bDl=new B.ad(A.dP,18,A.cJ,null,null,null)
D.YC=new B.ad(A.ct,18,A.aA,null,null,null)
D.bDs=new B.ad(A.ahf,null,null,null,null,null)
D.bDS=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aKr,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.ezV=new B.F(!0,A.bK,null,null,null,null,null,A.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bE9=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.ezV,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.bEy=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.cEm=w([A.e9,A.aB],x.O)
D.bFG=new B.a7(A.a3,A.a7,A.w,D.cEm,null,null)
D.bFR=new B.a7(A.b1,A.b5,A.Rq,A.apH,null,null)
D.aZA=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b29=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b4S=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b0r=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cpW=w([D.aZA,D.b29,D.b4S,D.b0r],x.O)
D.bG9=new B.a7(A.ax,A.aC,A.w,D.cpW,A.Fq,null)
D.cYT=w([A.cX,A.bz,A.b2],x.O)
D.bGb=new B.a7(A.b1,A.b5,A.Rq,D.cYT,null,null)
D.d_2=w([A.bj,A.cb],x.O)
D.bGf=new B.a7(A.a3,A.a7,A.w,D.d_2,null,null)
D.cVF=w([A.hJ,A.du,A.aX],x.O)
D.bGh=new B.a7(A.ax,A.aC,A.w,D.cVF,null,null)
D.cJP=w([A.cY,A.f1],x.O)
D.bGl=new B.a7(A.a3,A.a7,A.w,D.cJP,null,null)
D.cYO=w([O.kU,A.du],x.O)
D.ajv=new B.a7(A.a3,A.a7,A.w,D.cYO,null,null)
D.b2G=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cYL=w([D.b2G,D.we,A.bS],x.O)
D.bGq=new B.a7(A.a3,A.a7,A.w,D.cYL,null,null)
D.cFV=w([A.bl,A.dk,A.fv],x.O)
D.bGr=new B.a7(A.ax,A.aC,A.w,D.cFV,null,null)
D.LM=new B.a7(A.a3,A.a7,A.w,A.FC,null,null)
D.b9A=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cj6=w([D.b9A,A.bS,A.iZ],x.O)
D.ajA=new B.a7(A.ax,A.aC,A.w,D.cj6,null,null)
D.cOz=w([A.w3,A.au,D.zi],x.O)
D.bHo=new B.a7(A.a3,A.a7,A.w,D.cOz,null,null)
D.bax=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b1d=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b5J=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cF6=w([D.bax,D.b1d,D.b5J],x.O)
D.ajB=new B.a7(A.a3,A.a7,A.w,D.cF6,null,null)
D.b2H=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bJi=w([Ap.abi,D.b2H],x.O)
D.bHx=new B.a7(A.b1,A.b5,A.w,D.bJi,null,null)
D.cDj=w([A.mt,A.bQ],x.O)
D.bHB=new B.a7(A.b1,A.b5,A.w,D.cDj,null,null)
D.cT2=w([A.aB,A.dJ],x.O)
D.bHI=new B.a7(A.a3,A.a7,A.w,D.cT2,null,null)
D.aal=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.arj=w([D.aal,D.iW,D.IJ],x.O)
D.bI9=new B.a7(A.ax,A.aC,A.w,D.arj,null,null)
D.ciZ=w([A.dt,A.dI],x.O)
D.bIk=new B.a7(A.b1,A.b5,A.w,D.ciZ,null,null)
D.cQt=w([A.tY,As.CZ],x.O)
D.bJ4=new B.a7(A.a3,A.a7,A.w,D.cQt,null,null)
D.f0W=new B.x("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bJf=new B.pg(null,D.f0W,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xx=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1j=new C.kE(2,"elegantNavy")
D.fn0=w([A.TZ,D.iW,A.bS],x.O)
D.jm=new C.wJ(0,"classic")
D.a16=new C.ja("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1j,4294967035,4279378237,4290283019,D.jm)
D.aAb=new C.kE(3,"elegantGold")
D.aZa=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZZ=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a9b=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fmt=w([D.aZa,D.aZZ,D.a9b],x.O)
D.a14=new C.ja("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aAb,4294966515,4281016592,4289102906,D.jm)
D.djk=new C.kE(22,"goldRibbon")
D.fmp=w([A.TZ,D.iW,A.hM],x.O)
D.a0Y=new C.ja("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.djk,4294967035,4279378237,4291404327,D.jm)
D.djl=new C.kE(23,"goldBaroque")
D.a9H=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fmv=w([D.a9H,A.au,A.iZ],x.O)
D.a0Z=new C.ja("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.djl,4294964964,4283053072,4292128567,D.jm)
D.djn=new C.kE(4,"elegantEmerald")
D.b01=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0O=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fmB=w([D.b01,D.b0O,A.hM],x.O)
D.a1_=new C.ja("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.djn,4294376440,4279122734,4291404327,D.jm)
D.djo=new C.kE(5,"elegantBurgundy")
D.b3X=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fmI=w([D.b3X,A.a8z,A.hM],x.O)
D.a12=new C.ja("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.djo,4294965238,4283043359,4291404327,D.jm)
D.djh=new C.kE(19,"goldFiligree")
D.Jb=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fmw=w([D.Jb,A.au,A.iZ],x.O)
D.a10=new C.ja("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.djh,4294966259,4279378237,4292128567,D.jm)
D.dji=new C.kE(20,"goldLaurel")
D.b9q=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fmJ=w([A.IC,A.hM,D.b9q],x.O)
D.a11=new C.ja("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dji,4294966776,4282000405,4291404327,D.jm)
D.djj=new C.kE(21,"goldCrest")
D.a8t=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b9x=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fmy=w([D.a8t,A.au,D.b9x],x.O)
D.a15=new C.ja("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.djj,4294965484,4283053072,4292128567,D.jm)
D.djm=new C.kE(24,"goldStar")
D.bat=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fmC=w([D.bat,A.au,D.iW],x.O)
D.a13=new C.ja("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.djm,4294966518,4279378237,4292128567,D.jm)
D.F2=w([D.a16,D.a14,D.a0Y,D.a0Z,D.a1_,D.a12,D.a10,D.a11,D.a15,D.a13],x.h)
D.pm=new C.m7(0,"blank")
D.Pg=new C.m7(1,"title")
D.ma=new C.m7(2,"titleContent")
D.dDX=new C.m7(3,"twoColumn")
D.Ba=new C.m7(4,"section")
D.dDY=new C.m7(5,"comparison")
D.Gb=new C.m7(6,"flashcard")
D.Gc=new C.m7(7,"quiz")
D.Gd=new C.m7(8,"worksheet")
D.ajW=w([D.pm,D.Pg,D.ma,D.dDX,D.Ba,D.dDY,D.Gb,D.Gc,D.Gd],B.az("O<m7>"))
D.bJu=w([0,0,0],x.cA)
D.asd=w([Z.Tv,A.dI],x.O)
D.k6=w([A.bS,A.bI,A.hL,A.hs,D.zi],x.O)
D.dfd=new C.iN("fireworks","Royal Fireworks","Thank you for celebrating with us",D.asd,D.k6)
D.b9I=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b3V=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cDw=w([D.b9I,D.b3V],x.O)
D.df4=new C.iN("confetti","Golden Confetti","Together we rise",D.cDw,D.k6)
D.cAV=w([A.n5,A.Tf],x.O)
D.df5=new C.iN("crown","Crown of Glory","Built for our community",D.cAV,D.k6)
D.b13=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b3A=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cH8=w([D.b13,D.b3A],x.O)
D.t4=w([A.bK,A.aN,A.c,A.aJ,A.ai],x.O)
D.df_=new C.iN("aurora","Aurora Gala","A brighter future, together",D.cH8,D.t4)
D.b4U=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cQz=w([G.a8d,D.b4U],x.O)
D.dfg=new C.iN("champagne","Champagne Toast","Cheers to every member",D.cQz,D.k6)
D.dfh=new C.iN("diamonds","Diamond Rain","Every member is a jewel",W.asK,D.t4)
D.aZR=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b37=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cV_=w([D.aZR,D.b37],x.O)
D.deV=new C.iN("starburst","Golden Starburst","Thank you!",D.cV_,D.k6)
D.bJn=w([A.fe,A.w8],x.O)
D.a8k=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Nj=w([A.nW,A.ib,A.ua,A.oJ,D.a8k],x.O)
D.dfo=new C.iN("balloons","Luxury Balloons","Let's celebrate",D.bJn,D.Nj)
D.cAf=w([A.Tl,A.x],x.O)
D.dfc=new C.iN("galaxy","Galaxy Spiral","The sky is not the limit",D.cAf,D.t4)
D.b86=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cNu=w([A.jZ,D.b86],x.O)
D.df7=new C.iN("redcarpet","Red Carpet","Tonight we shine",D.cNu,D.k6)
D.b6f=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b4I=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cRr=w([D.b6f,D.b4I],x.O)
D.deX=new C.iN("coins","Gold Coin Rain","Every contribution counts",D.cRr,D.k6)
D.cXs=w([A.dt,A.hI],x.O)
D.df2=new C.iN("lanterns","Sky Lanterns","Lighting the way together",D.cXs,D.k6)
D.b1T=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cyo=w([A.wa,D.b1T],x.O)
D.deZ=new C.iN("hearts","Floating Hearts","Made with love",D.cyo,D.Nj)
D.b_n=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b07=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cYJ=w([D.b_n,D.b07],x.O)
D.dfn=new C.iN("petals","Rose Petals","Thank you, from our hearts",D.cYJ,D.Nj)
D.b8R=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cVj=w([A.kT,D.b8R],x.O)
D.deU=new C.iN("butterflies","Golden Butterflies","New beginnings",D.cVj,D.k6)
D.b5H=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.czg=w([D.b5H,A.x],x.O)
D.dff=new C.iN("neon","Neon Night","Let's go!",D.czg,D.t4)
D.b2S=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cTc=w([A.IX,D.b2S],x.O)
D.dfi=new C.iN("disco","Disco Ball","Party time",D.cTc,D.t4)
D.b67=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cSM=w([A.hJ,D.b67],x.O)
D.deY=new C.iN("sunrise","Golden Sunrise","A new day for our community",D.cSM,D.k6)
D.cSq=w([A.ri,A.dI],x.O)
D.dfj=new C.iN("pearls","Ocean Pearls","Deep roots, bright future",D.cSq,D.t4)
D.b19=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cSD=w([D.b19,A.dI],x.O)
D.dfm=new C.iN("snow","Winter Gala","Warm wishes to all",D.cSD,D.t4)
D.aZj=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b_9=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cXO=w([D.aZj,D.b_9],x.O)
D.dfb=new C.iN("laurel","Laurel Victory","We did it together",D.cXO,D.k6)
D.aZ9=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b3w=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cxA=w([D.aZ9,D.b3w],x.O)
D.dfl=new C.iN("ribbons","Silk Ribbons","Elegance in every step",D.cxA,D.k6)
D.b4t=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.ciW=w([G.zh,D.b4t],x.O)
D.df8=new C.iN("kente","Kente Pride","Proud of our roots",D.ciW,D.k6)
D.b6K=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b97=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cIC=w([D.b6K,D.b97],x.O)
D.df3=new C.iN("trophy","Trophy Shine","Winners together",D.cIC,D.k6)
D.cSJ=w([Ak.IP,A.x],x.O)
D.deW=new C.iN("shooting","Shooting Stars","Make a wish",D.cSJ,D.t4)
D.aZq=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ab8=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cY1=w([D.aZq,D.ab8],x.O)
D.df9=new C.iN("bokeh","Golden Bokeh","Shine bright",D.cY1,D.k6)
D.aZK=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cOe=w([D.aZK,A.x],x.O)
D.df1=new C.iN("orbits","Golden Orbits","Always moving forward",D.cOe,D.k6)
D.b8S=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cL9=w([A.a99,D.b8S],x.O)
D.df6=new C.iN("flowers","Blooming Garden","Growing together",D.cL9,D.Nj)
D.aZy=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b_3=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cWZ=w([D.aZy,D.b_3],x.O)
D.df0=new C.iN("music","Music Party","Celebrate with us",D.cWZ,D.t4)
D.b_S=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b9t=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cyA=w([D.b_S,D.b9t],x.O)
D.dfk=new C.iN("mandala","Royal Mandala","Harmony and unity",D.cyA,D.k6)
D.cLd=w([G.zh,D.ab8],x.O)
D.dfe=new C.iN("sparklers","Golden Sparklers","Light up the night",D.cLd,D.k6)
D.dfa=new C.iN("city","City Lights","The whole city celebrates",D.asd,D.k6)
D.Fb=w([D.dfd,D.df4,D.df5,D.df_,D.dfg,D.dfh,D.deV,D.dfo,D.dfc,D.df7,D.deX,D.df2,D.deZ,D.dfn,D.deU,D.dff,D.dfi,D.deY,D.dfj,D.dfm,D.dfb,D.dfl,D.df8,D.df3,D.deW,D.df9,D.df1,D.df6,D.df0,D.dfk,D.dfe,D.dfa],B.az("O<iN>"))
D.dZj=new B.A("","No ring")
D.ec4=new B.A("platinum","Platinum")
D.e9m=new B.A("glow","Glow")
D.e1w=new B.A("double","Double line")
D.e0s=new B.A("framed","Gallery frame")
D.dYZ=new B.A("rosegold","Rose gold")
D.ea1=new B.A("jewels","Jeweled")
D.e6V=new B.A("aurora","Aurora")
D.Aw=w([D.dZj,A.a2A,D.ec4,D.e9m,H.aGo,D.e1w,A.a2C,D.e0s,D.dYZ,D.ea1,D.e6V],x.L)
D.c2E=w([D.a10,D.a11,D.a15,D.a0Y,D.a0Z,D.a13],x.h)
D.bzi=new B.ad(G.af7,16,null,null,null,null)
D.aUF=new B.uL(A.be,D.bzi,null,x.U)
D.boj=new B.a0(58027,"MaterialIcons",!1)
D.bt4=new B.ad(D.boj,16,null,null,null,null)
D.aUD=new B.uL(A.L,D.bt4,null,x.U)
D.bok=new B.a0(58030,"MaterialIcons",!1)
D.bx2=new B.ad(D.bok,16,null,null,null,null)
D.aUG=new B.uL(A.dM,D.bx2,null,x.U)
D.c8M=w([D.aUF,D.aUD,D.aUG],B.az("O<uL<pw>>"))
D.cgl=w([A.zm,A.hq],x.O)
D.cgm=w([A.bl,A.bn,A.fv],x.O)
D.N8=w([A.bI,A.hs,A.hL,A.au,A.oJ],x.O)
D.cj1=w([A.bS,D.iW,D.IJ],x.O)
D.cjy=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dX4=new B.A(4278913286,4280030216)
D.dXm=new B.A(4279373061,4278518787)
D.dXt=new B.A(4279898630,4278847235)
D.cI3=w([D.dX4,D.dXm,D.dXt],x.n)
D.cE8=w(["\u265b","\u269c","\u2726"],x.s)
D.djf=new C.wL("Royal Onyx & Gold",D.cI3,4292128567,4294370209,4294965479,3874020544,D.cE8)
D.dWS=new B.A(4278326799,4278598442)
D.dWU=new B.A(4278395929,4278258953)
D.dX0=new B.A(4278599728,4278327826)
D.cXj=w([D.dWS,D.dWU,D.dX0],x.n)
D.cz9=w(["\u269c","\u2756","\u2727"],x.s)
D.djc=new C.wL("Imperial Emerald",D.cXj,4293050997,4294699968,4294180856,3872254170,D.cz9)
D.dWV=new B.A(4278455076,4278918747)
D.dX_=new B.A(4278587439,4278322714)
D.dXd=new B.A(4279051376,4278455076)
D.cVB=w([D.dWV,D.dX_,D.dXd],x.n)
D.cOO=w(["\u2654","\u2726","\u2748"],x.s)
D.dj6=new C.wL("Sapphire Crown",D.cVB,4291417834,4294967295,4294310143,3871986666,D.cOO)
D.dXr=new B.A(4279894534,4283041554)
D.dXD=new B.A(4281008906,4279042307)
D.dXL=new B.A(4284221976,4279894534)
D.d_v=w([D.dXr,D.dXD,D.dXL],x.n)
D.cAm=w(["\u265b","\u2766","\u2726"],x.s)
D.dj8=new C.wL("Ruby Throne",D.d_v,4293378685,4294963145,4294964466,3874213833,D.cAm)
D.dXl=new B.A(4279371039,4281995100)
D.dXv=new B.A(4280092723,4278714896)
D.dXI=new B.A(4283045242,4279371039)
D.cXF=w([D.dXl,D.dXv,D.dXI],x.n)
D.cVW=w(["\u2655","\u2756","\u2727"],x.s)
D.djd=new C.wL("Amethyst Palace",D.cXF,4293314984,4294963421,4294702591,3873229802,D.cVW)
D.dWX=new B.A(4278519045,4280032287)
D.dXe=new B.A(4279111184,4278321666)
D.dXA=new B.A(4280492839,4278716426)
D.cUx=w([D.dWX,D.dXe,D.dXA],x.n)
D.cNh=w(["\u2726","\u25c6","\u2742"],x.s)
D.dja=new C.wL("Obsidian & Platinum",D.cUx,4293256418,4294967295,4294638330,3872378836,D.cNh)
D.dXs=new B.A(4279896588,4282194463)
D.dXB=new B.A(4280553487,4279043334)
D.dXJ=new B.A(4283048488,4279896588)
D.cMO=w([D.dXs,D.dXB,D.dXJ],x.n)
D.cZ5=w(["\u2766","\u273f","\u2727"],x.s)
D.dj7=new C.wL("Rose Gold Velvet",D.cMO,4293440672,4294960345,4294964979,3874214602,D.cZ5)
D.dWY=new B.A(4278520340,4279180595)
D.dX2=new B.A(4278718495,4278322443)
D.dXp=new B.A(4279510591,4278520340)
D.cpF=w([D.dWY,D.dX2,D.dXp],x.n)
D.cNV=w(["\u269c","\u2736","\u2756"],x.s)
D.djb=new C.wL("Midnight Brass",D.cpF,4291405148,4293975208,4294439914,3872837564,D.cNV)
D.dXY=new B.A(4294703086,4293780428)
D.dXU=new B.A(4294307549,4293187253)
D.dXZ=new B.A(4294966517,4293977807)
D.cCl=w([D.dXY,D.dXU,D.dXZ],x.n)
D.cOh=w(["\u269c","\u265b","\u2726"],x.s)
D.dje=new C.wL("Ivory Marble & Gold",D.cCl,4289760572,4286209048,4280951062,3863625518,D.cOh)
D.dX8=new B.A(4278978566,4280555024)
D.dXo=new B.A(4279504137,4278518530)
D.dXF=new B.A(4281211923,4278978566)
D.cAe=w([D.dX8,D.dXo,D.dXF],x.n)
D.cWD=w(["\u2742","\u2726","\u265c"],x.s)
D.dj9=new C.wL("Onyx & Copper",D.cAe,4291856987,4294365880,4294964718,3873885630,D.cWD)
D.cjF=w([D.djf,D.djc,D.dj6,D.dj8,D.djd,D.dja,D.dj7,D.djb,D.dje,D.dj9],B.az("O<wL>"))
D.clW=w([A.au,D.zi,A.hs],x.O)
D.e3t=new B.A("Original",null)
D.e3B=new B.A("Wide 16:9",1.7777777777777777)
D.e5J=new B.A("Landscape 3:2",1.5)
D.e2Y=new B.A("Photo 4:3",1.3333333333333333)
D.e4A=new B.A("Square",1)
D.efu=new B.A("Portrait 3:4",0.75)
D.apP=w([D.e3t,D.e3B,D.e5J,D.e2Y,D.e4A,D.efu],B.az("O<+(n,P?)>"))
D.apQ=w([A.hs,A.c3,A.b9,A.bE],x.O)
D.e5T=new B.A("","Original")
D.e7D=new B.A("circle","Circle")
D.ecO=new B.A("rounded","Rounded")
D.edG=new B.A("triangle","Triangle")
D.e9A=new B.A("hexagon","Hexagon")
D.e81=new B.A("diamond","Diamond")
D.e6U=new B.A("arch","Arch")
D.AB=w([D.e5T,D.e7D,D.ecO,D.edG,D.e9A,D.e81,D.e6U],x.L)
D.dek=new C.kX("classic_blue","Classic Blue","Normal",A.bj,A.c,A.k0,A.dD,A.aI)
D.deA=new C.kX("campus_green","Campus Green","Normal",A.aW,A.lR,A.q1,A.fT,A.f4)
D.der=new C.kX("warm_sand","Warm Sand","Normal",A.dZ,A.hL,A.bI,A.iY,A.n9)
D.dey=new C.kX("slate_minimal","Slate Minimal","Normal",A.bw,A.aN,A.aJ,A.M,A.aI)
D.dej=new C.kX("coral_fresh","Coral Fresh","Normal",A.cl,A.id,A.pW,A.kq,A.rc)
D.dez=new C.kX("lavender_calm","Lavender Calm","Normal",A.b2,A.oL,A.z9,A.q3,A.jw)
D.del=new C.kX("ocean_breeze","Ocean Breeze","Normal",A.f1,A.q7,A.r9,A.u_,A.na)
D.aas=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dew=new C.kX("berry_pop","Berry Pop","Normal",A.f9,D.aas,A.kQ,G.Uj,A.Dj)
D.dem=new C.kX("midnight_pro","Midnight Pro","Professional",A.aB,A.M,A.dt,A.kQ,A.cp)
D.dev=new C.kX("executive_navy","Executive Navy","Professional",A.d9,A.a9R,A.dD,A.kR,A.bK)
D.det=new C.kX("boardroom_charcoal","Boardroom Charcoal","Professional",A.ai,A.bi,A.M,A.aN,A.cp)
D.den=new C.kX("corporate_steel","Corporate Steel","Professional",A.mq,A.M,A.lT,A.fx,A.bK)
D.deq=new C.kX("gold_luxe","Gold Luxe","Luxury",A.nU,A.dy,A.nV,A.li,A.bI)
D.b6a=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.deu=new C.kX("rose_gold_elite","Rose Gold Elite","Luxury",A.hq,D.b6a,A.Ub,A.ib,A.oJ)
D.dex=new C.kX("platinum_night","Platinum Night","Luxury",A.cp,A.dI,A.bi,A.aN,A.aJ)
D.deB=new C.kX("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oO,A.eQ,A.oT,A.jc)
D.dei=new C.kX("royal_purple","Royal Purple","Luxury",A.mr,A.Tz,A.jw,A.kQ,A.Ta)
D.des=new C.kX("neon_pitch","Neon Pitch","Bold",A.b9,A.dI,A.M,A.bd,A.aJ)
D.dep=new C.kX("crimson_impact","Crimson Impact","Bold",A.bQ,A.jZ,A.eZ,A.rt,A.fg)
D.deo=new C.kX("sunset_gallery","Sunset Gallery","Bold",A.fS,A.rc,A.kq,A.pW,A.nX)
D.Fk=w([D.dek,D.deA,D.der,D.dey,D.dej,D.dez,D.del,D.dew,D.dem,D.dev,D.det,D.den,D.deq,D.deu,D.dex,D.deB,D.dei,D.des,D.dep,D.deo],B.az("O<kX>"))
D.cxk=w([A.bS,D.iW],x.O)
D.cN2=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e6H=new B.A("Faces & people",D.cN2)
D.cm_=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dW3=new B.A("Ideas & work",D.cm_)
D.cEB=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e9F=new B.A("Nature",D.cEB)
D.cNa=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e3r=new B.A("Places & things",D.cNa)
D.cHF=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e6Z=new B.A("Symbols",D.cHF)
D.cxq=w([D.e6H,D.dW3,D.e9F,D.e3r,D.e6Z],B.az("O<+(n,ak<n>)>"))
D.aZD=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cxL=w([A.bS,D.a9b,D.aZD],x.O)
D.aU9=new B.aa(0,A.G,A.Iz,A.aAY,40)
D.aTR=new B.aa(0,A.G,A.n7,A.e6,8)
D.cxV=w([D.aU9,D.aTR],x.V)
D.cyk=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aqe=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.ZN=w([A.hs,A.fv,A.bQ,A.aG,A.cl],x.O)
D.cz3=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9p=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cze=w([A.U5,D.a9p,A.U5],x.O)
D.czi=w([A.hM,D.iW,D.IJ],x.O)
D.e3g=new B.A(A.be,D.Xz)
D.e4v=new B.A(A.L,D.Xy)
D.dZW=new B.A(A.dM,D.XA)
D.cA9=w([D.e3g,D.e4v,D.dZW],B.az("O<+(pw,a0)>"))
D.cAM=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","ELECTRONICS LAB: build real circuits with 46 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows six NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cM=new C.Hb(0,"text")
D.l3=new C.Hb(1,"image")
D.eT=new C.Hb(2,"shape")
D.Pf=new C.Hb(3,"pdf")
D.kH=new C.Hb(4,"signature")
D.a1q=new C.Hb(5,"bio")
D.cAZ=w([D.cM,D.l3,D.eT,D.Pf,D.kH,D.a1q],B.az("O<Hb>"))
D.cB_=w([A.bg,A.cx],B.az("O<G9>"))
D.cBz=w(["School","Documents","Sign & present"],x.s)
D.aUd=new B.aa(0,A.G,A.ab0,A.to,28)
D.cBS=w([D.aUd],x.V)
D.cC9=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nt=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqC=w([A.hs,A.Di,A.aJ,A.c,A.nW,A.au],x.O)
D.eeV=new B.A(0.1,0.08)
D.e9D=new B.A(0.3,0.05)
D.dZt=new B.A(0.55,0.1)
D.e2k=new B.A(0.8,0.06)
D.e5c=new B.A(0.92,0.16)
D.e4K=new B.A(0.2,0.2)
D.e2L=new B.A(0.7,0.22)
D.e8m=new B.A(0.05,0.4)
D.e5B=new B.A(0.95,0.45)
D.e_8=new B.A(0.12,0.7)
D.e1a=new B.A(0.88,0.75)
D.e1i=new B.A(0.4,0.9)
D.dYb=new B.A(0.65,0.93)
D.e1Z=new B.A(0.25,0.97)
D.e3d=new B.A(0.85,0.9)
D.e_U=new B.A(0.5,0.04)
D.cDr=w([D.eeV,D.e9D,D.dZt,D.e2k,D.e5c,D.e4K,D.e2L,D.e8m,D.e5B,D.e_8,D.e1a,D.e1i,D.dYb,D.e1Z,D.e3d,D.e_U],x.G)
D.cDz=w([A.c,A.hq,A.b_,A.aS],x.O)
D.dFz=new C.js("office_blue","Office Blue",A.bj,A.dD,A.aI,A.c,A.k0)
D.dFK=new C.js("campus_green","Campus Green",A.aW,A.fT,A.f4,A.lR,A.q1)
D.dFA=new C.js("sunset","Sunset",A.fS,A.kq,A.n9,A.id,A.pW)
D.dFB=new C.js("midnight","Midnight",A.aB,A.kQ,A.cp,A.M,A.dt)
D.dFM=new C.js("classic","Classic",A.du,A.dy,A.lj,A.hL,A.hg)
D.dFJ=new C.js("rose_gold","Rose Gold",A.hq,A.wb,A.wa,A.ua,A.zm)
D.dFu=new C.js("ocean_teal","Ocean Teal",A.f1,A.u_,A.na,A.q7,A.r9)
D.dFt=new C.js("slate_pro","Slate Pro",A.bw,A.M,A.aI,A.aN,A.aJ)
D.dFs=new C.js("neon_night","Neon Night",A.b9,A.bd,A.aJ,A.dI,A.M)
D.dFE=new C.js("lavender","Lavender",A.b2,A.q3,A.jw,A.oL,A.z9)
D.dFG=new C.js("coral","Coral",A.cl,A.kq,A.rc,A.id,A.nX)
D.dFv=new C.js("forest","Forest",A.hh,A.eF,A.cV,A.lS,A.eO)
D.dFw=new C.js("berry","Berry",A.f9,G.Uj,A.Dj,D.aas,A.kQ)
D.dFD=new C.js("sand","Sand",A.dZ,A.iY,A.n9,A.hL,A.bI)
D.dFI=new C.js("ice","Ice",A.mq,A.TE,A.aI,A.mo,A.fx)
D.dFy=new C.js("charcoal","Charcoal",A.ai,A.aN,A.cp,A.bi,A.M)
D.dFr=new C.js("mint","Mint",A.aS,A.fm,A.fT,A.lS,A.oT)
D.dFH=new C.js("crimson","Crimson",A.bQ,A.mt,A.jZ,A.Dg,A.rt)
D.b0N=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dFC=new C.js("gold","Gold",A.nU,A.tY,A.nV,D.b0N,A.li)
D.dFF=new C.js("aqua","Aqua",A.bL,A.D5,A.nS,A.oN,A.nY)
D.dFx=new C.js("plum","Plum",A.mr,A.w8,A.Dj,A.CW,A.ro)
D.dFL=new C.js("steel","Steel",A.d9,A.dD,A.bi,A.k0,A.kR)
D.a_1=w([D.dFz,D.dFK,D.dFA,D.dFB,D.dFM,D.dFJ,D.dFu,D.dFt,D.dFs,D.dFE,D.dFG,D.dFv,D.dFw,D.dFD,D.dFI,D.dFy,D.dFr,D.dFH,D.dFC,D.dFF,D.dFx,D.dFL],B.az("O<js>"))
D.cDS=w([A.bS,A.iZ],x.O)
D.Ph=new C.hn(10,"rotate3d")
D.Gf=new C.hn(8,"flip")
D.aAu=new C.hn(19,"spiral")
D.pn=new C.hn(16,"bounce")
D.aAx=new C.hn(9,"flipVertical")
D.cDT=w([D.Ph,D.Gf,D.aAu,D.pn,D.aAx],x.i)
D.e0=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cEb=w([0.62,1],x.x)
D.cEJ=w([0,0.32,0.68,1],x.x)
D.mb=new C.hn(6,"zoom")
D.ti=new C.hn(4,"slideUp")
D.th=new C.hn(2,"slideLeft")
D.cER=w([D.mb,D.Gf,D.ti,D.Ph,D.th],x.i)
D.cFk=w([A.c3,A.hq,A.ib,A.hs,A.c],x.O)
D.aU4=new B.aa(0,A.G,D.a9A,A.to,30)
D.cG_=w([D.aU4],x.V)
D.dNu=new B.v(0,-2.5)
D.dNk=new B.v(-2.5,0)
D.dM9=new B.v(2.5,0)
D.cG2=w([A.Py,A.a1N,A.aBo,A.a1M,D.dNu,H.aBl,D.dNk,D.dM9],x.dN)
D.Fr=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cGt=w([23,114,69,56,80,144],x.t)
D.cGR=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cHf=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cIG=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cIK=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bb=new C.u3(0,"rectangle")
D.ey=new C.u3(1,"circle")
D.kI=new C.u3(6,"hexagon")
D.cIW=w([D.bb,D.ey,D.kI],x.m)
D.nz=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aay=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cJt=w([D.aay,A.eF],x.O)
D.dZE=new B.A("","Classic")
D.dYo=new B.A("caps","Bold caps")
D.e8p=new B.A("elegant","Elegant")
D.ed5=new B.A("shadow","Shadow")
D.e2F=new B.A("neon","Neon glow")
D.ebL=new B.A("outline","Outline")
D.eb_=new B.A("marker","Highlighter")
D.edg=new B.A("stamp","Stamp")
D.ecJ=new B.A("retro","Retro")
D.e1H=new B.A("threed","3D")
D.e8U=new B.A("fire","Fire")
D.e9M=new B.A("ice","Ice")
D.e7C=new B.A("chalk","Chalk")
D.e7H=new B.A("comic","Comic")
D.edi=new B.A("sunset","Sunset")
D.eem=new B.A("softglow","Soft glow")
D.eaH=new B.A("lowercase","Lowercase")
D.e88=new B.A("double","Echo")
D.eet=new B.A("whisper","Whisper")
D.arq=w([D.dZE,D.dYo,D.e8p,D.ed5,D.e2F,D.ebL,D.eb_,D.edg,D.ecJ,D.e1H,H.aGm,D.e8U,D.e9M,D.e7C,D.e7H,A.a2A,D.edi,D.eem,D.eaH,D.e88,D.eet],x.L)
D.cKD=w([3,5,7,10,12,15],x.t)
D.cLQ=w([A.c3,A.bI,A.c,A.ev,A.cX],x.O)
D.d66=new C.rD(10,"cardWorld")
D.B2=new C.Aj(3,"rounded")
D.dmg=new C.l_("world","NGMY World",D.d66,D.B2,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d67=new C.rD(11,"cardSplit")
D.dmc=new C.l_("business","Business Wire",D.d67,D.B2,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d68=new C.rD(12,"cardBreaking")
D.dmp=new C.l_("breaking","Breaking Red",D.d68,D.B2,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d69=new C.rD(13,"cardFeature")
D.dmi=new C.l_("feature","Tech Feature",D.d69,D.B2,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.az2=new C.rD(6,"circle")
D.ayX=new C.Aj(4,"circle")
D.dmm=new C.l_("parchment","Royal Circle",D.az2,D.ayX,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dmb=new C.l_("ocean","Blue Ocean",D.az2,D.ayX,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d6c=new C.rD(7,"rail")
D.ayW=new C.Aj(1,"double")
D.dmd=new C.l_("forest","Green Leaf",D.d6c,D.ayW,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.az_=new C.rD(1,"sideBySide")
D.dmr=new C.l_("herald","NGMY Herald",D.az_,D.B2,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.ayZ=new C.rD(0,"classic")
D.a0D=new C.Aj(9,"shadow")
D.dmq=new C.l_("daily","The Daily",D.ayZ,D.a0D,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d6a=new C.rD(2,"splash")
D.ayY=new C.Aj(6,"cutCorner")
D.dma=new C.l_("tabloid","Big Tabloid",D.d6a,D.ayY,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.az3=new C.rD(9,"minimal")
D.dml=new C.l_("modern","Modern Digest",D.az3,D.B2,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.az0=new C.rD(3,"magazine")
D.ayV=new C.Aj(0,"plain")
D.dmh=new C.l_("midnight","Midnight Edition",D.az0,D.ayV,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d6d=new C.rD(8,"banner")
D.dmj=new C.l_("metro","Metro Wire",D.d6d,D.ayY,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d65=new C.Aj(8,"arch")
D.dmk=new C.l_("sunrise","Sunrise Post",D.az0,D.d65,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.az1=new C.rD(5,"scrapbook")
D.d64=new C.Aj(5,"tape")
D.dmf=new C.l_("neon","Neon Beat",D.az1,D.d64,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d6b=new C.rD(4,"wrap")
D.dms=new C.l_("gold","Golden Press",D.d6b,D.a0D,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dmt=new C.l_("minimal","Paper White",D.az3,D.a0D,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dme=new C.l_("gazette","Fresh Gazette",D.ayZ,D.ayW,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dmo=new C.l_("times","Classic Times",D.az_,D.ayV,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.OO=new C.Aj(2,"polaroid")
D.dmn=new C.l_("scrapbook","Memory Scrapbook",D.az1,D.OO,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_f=w([D.dmg,D.dmc,D.dmp,D.dmi,D.dmm,D.dmb,D.dmd,D.dmr,D.dmq,D.dma,D.dml,D.dmh,D.dmj,D.dmk,D.dmf,D.dms,D.dmt,D.dme,D.dmo,D.dmn],B.az("O<l_>"))
D.cM1=w([0.45,1],x.x)
D.Ft=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cMm=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fib=new C.o6("Original",0,1,1,0,0,0)
D.fif=new C.o6("Black & white",0,1.1,0,0,0,0)
D.fi2=new C.o6("Noir",-0.05,1.55,0,0,0,0)
D.fi6=new C.o6("Sepia",0,1,0.25,0.9,0,0)
D.fi5=new C.o6("Vivid",0,1.15,1.6,0,0,0)
D.fhZ=new C.o6("Pop",0,1.3,1.9,0,0,0)
D.fi0=new C.o6("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fic=new C.o6("Matte",0,0.9,0.85,0,0,0.55)
D.fi7=new C.o6("Cool",0,1.05,1,-0.8,0,0)
D.fie=new C.o6("Warm",0.03,1.05,1.1,0.8,0,0)
D.fi_=new C.o6("Golden hour",0.04,1,1.25,1,0,0)
D.fi4=new C.o6("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fid=new C.o6("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fi3=new C.o6("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fi9=new C.o6("Retro",0,0.9,0.7,0.4,0,0.35)
D.fi8=new C.o6("Forest",0,1,1.2,-0.1,-0.45,0)
D.fia=new C.o6("Rose",0,1,1.1,0.3,0.4,0)
D.fi1=new C.o6("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cMn=w([D.fib,D.fif,D.fi2,D.fi6,D.fi5,D.fhZ,D.fi0,D.fic,D.fi7,D.fie,D.fi_,D.fi4,D.fid,D.fi3,D.fi9,D.fi8,D.fia,D.fi1],B.az("O<o6>"))
D.aZ6=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cMo=w([D.aay,A.eF,D.aZ6],x.O)
D.dVX=new B.A(0.12,0.3)
D.e9W=new B.A(0.26,0.75)
D.e8l=new B.A(0.8,0.22)
D.edq=new B.A(0.9,0.7)
D.eaG=new B.A(0.5,0.15)
D.ebN=new B.A(0.65,0.85)
D.e0l=new B.A(0.08,0.85)
D.cMz=w([D.dVX,D.e9W,D.e8l,D.edq,D.eaG,D.ebN,D.e0l],x.G)
D.arz=w([A.b9,A.c3,A.bE,A.bl],x.O)
D.cNl=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cNx=w([A.c,A.fx,A.dE,A.u0],x.O)
D.b0Y=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cOp=w([D.b0Y,D.a9p],x.O)
D.cOq=w([A.w3,A.au],x.O)
D.cOE=w([0,0.25,0.75,1],x.x)
D.cOG=w([A.w_,A.nW],x.O)
D.aA4=new C.kE(10,"kenteSunset")
D.fmr=w([D.a9H,A.jv,A.au],x.O)
D.dhx=new C.ja("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aA4,4294964964,4282000405,4279983648,D.jm)
D.aA5=new C.kE(11,"indigoMudcloth")
D.aZV=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fmF=w([D.aZV,A.a9m,A.hM],x.O)
D.dhF=new C.ja("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aA5,4294439140,4279903102,4279903102,D.jm)
D.aA6=new C.kE(12,"adinkraRoyal")
D.ba4=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fmG=w([D.a8t,D.ba4,A.au],x.O)
D.dhH=new C.ja("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aA6,4294965484,4285218591,4287322667,D.jm)
D.aA7=new C.kE(13,"nileLotus")
D.b6W=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b4a=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fmL=w([D.b6W,D.b4a,A.hM],x.O)
D.dhG=new C.ja("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aA7,4294244340,4279196764,4279196764,D.jm)
D.aA8=new C.kE(14,"shweshweIvory")
D.b2x=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b1z=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b_m=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fms=w([D.b2x,D.b1z,D.b_m],x.O)
D.dhC=new C.ja("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aA8,4294505710,4279970378,4291058750,D.jm)
D.qE=new C.kE(15,"certIvoryNavy")
D.fmq=w([D.Jb,D.iW,A.hM],x.O)
D.azB=new C.wJ(1,"ringsNdoa")
D.dhz=new C.ja("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qE,4294966259,4279378237,4291404327,D.azB)
D.a18=new C.wJ(2,"coupleCards")
D.dhu=new C.ja("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qE,4294966259,4279378237,4291404327,D.a18)
D.B5=new C.kE(18,"certIvoryNavyBar")
D.a8s=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fmE=w([D.a8s,D.iW,A.hM],x.O)
D.azC=new C.wJ(3,"kuhoweshaForm")
D.dhs=new C.ja("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.B5,4294966519,4279378237,4291404327,D.azC)
D.a9y=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fmY=w([D.Jb,D.a9y,A.hM],x.O)
D.a19=new C.wJ(4,"mahariPande")
D.dhv=new C.ja("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qE,4294966259,4279904068,4291404327,D.a19)
D.aA9=new C.kE(16,"certIvoryGreen")
D.b21=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fmu=w([A.IC,D.b21,A.hM],x.O)
D.azD=new C.wJ(5,"familiaMti")
D.dhB=new C.ja("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aA9,4294966776,4280241466,4291404327,D.azD)
D.a1a=new C.wJ(6,"ndoaSafi")
D.dht=new C.ja("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.B5,4294966519,4279378237,4291404327,D.a1a)
D.b5G=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fmx=w([D.Jb,A.hM,D.b5G],x.O)
D.a1b=new C.wJ(7,"peteWide")
D.dhy=new C.ja("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qE,4294966259,4282001936,4291404327,D.a1b)
D.dhI=new C.wJ(8,"muhuriCrest")
D.dhr=new C.ja("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qE,4294966259,4279378237,4291404327,D.dhI)
D.fmH=w([D.a8s,D.a9y,A.hM],x.O)
D.dhJ=new C.wJ(9,"fomuWazi")
D.dhE=new C.ja("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.B5,4294966519,4279904068,4291404327,D.dhJ)
D.aAa=new C.kE(17,"certIvoryRose")
D.b2z=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fmK=w([D.b2z,D.aac,A.hM],x.O)
D.a17=new C.wJ(10,"upendoOrnate")
D.dhA=new C.ja("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aAa,4294965493,4286200650,4291404327,D.a17)
D.cP2=w([D.dhx,D.dhF,D.dhH,D.dhG,D.dhC,D.dhz,D.dhu,D.dhs,D.dhv,D.dhB,D.dht,D.dhy,D.dhr,D.dhE,D.dhA],x.h)
D.e1=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Gg=new C.vc(0,"emojis")
D.Bc=new C.vc(1,"pictures")
D.Gh=new C.vc(2,"icons3d")
D.a1s=new C.vc(3,"animations")
D.Pj=new C.vc(4,"videoMotion")
D.Bd=new C.vc(5,"luxe")
D.a_l=w([D.Gg,D.Bc,D.Gh,D.a1s,D.Pj,D.Bd],B.az("O<vc>"))
D.ecm=new B.A(A.dP,"Looks")
D.e2d=new B.A(A.xj,"Light")
D.e2a=new B.A(A.nt,"Colour")
D.e0m=new B.A(A.wU,"Effects")
D.ag8=new B.a0(63112,"MaterialIcons",!1)
D.dYB=new B.A(D.ag8,"Crop")
D.cPu=w([D.ecm,D.e2d,D.e2a,D.e0m,D.dYB],x.f2)
D.cQ4=w([],x.D)
D.fmV=w([],x.L)
D.e0x=new B.A("Flashcard",D.Gb)
D.e41=new B.A("Quiz",D.Gc)
D.e5O=new B.A("Worksheet",D.Gd)
D.e38=new B.A("Notes",D.ma)
D.e4t=new B.A("Section",D.Ba)
D.cQF=w([D.e0x,D.e41,D.e5O,D.e38,D.e4t],B.az("O<+(n,m7)>"))
D.djp=new C.kE(6,"beadedPearl")
D.b8g=new B.w(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b4K=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fmZ=w([D.b8g,D.b4K,A.hM],x.O)
D.azz=new C.ja("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.djp,4294966774,4286209070,4291404327,D.jm)
D.djq=new C.kE(7,"artDeco")
D.b81=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.baj=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fmX=w([D.b81,D.baj,A.bS],x.O)
D.azA=new C.ja("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.djq,4294440434,4280228630,4290283019,D.jm)
D.djr=new C.kE(8,"rosetteCorners")
D.b9D=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b1_=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b4G=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fmA=w([D.b9D,D.b1_,D.b4G],x.O)
D.azy=new C.ja("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.djr,4294702831,4285218602,4291394365,D.jm)
D.djs=new C.kE(9,"modernLedger")
D.fmz=w([A.c,D.iW,D.iW],x.O)
D.azx=new C.ja("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.djs,4294967295,4279378237,4279378237,D.jm)
D.cQJ=w([D.azz,D.azA,D.azy,D.azx],x.h)
D.cQR=w([A.ib,A.nW],x.O)
D.cd=new C.hn(0,"none")
D.db=new C.hn(1,"fade")
D.Ge=new C.hn(3,"slideRight")
D.aAw=new C.hn(5,"slideDown")
D.dE3=new C.hn(7,"zoomOut")
D.a1r=new C.hn(11,"cube")
D.dDZ=new C.hn(12,"blur")
D.aAt=new C.hn(13,"dissolve")
D.dE_=new C.hn(14,"wipeLeft")
D.dE0=new C.hn(15,"wipeRight")
D.Pi=new C.hn(17,"push")
D.dE1=new C.hn(18,"flash")
D.aAv=new C.hn(20,"swing")
D.dE2=new C.hn(21,"curtain")
D.NY=w([D.cd,D.db,D.th,D.Ge,D.ti,D.aAw,D.mb,D.dE3,D.Gf,D.aAx,D.Ph,D.a1r,D.dDZ,D.aAt,D.dE_,D.dE0,D.pn,D.Pi,D.dE1,D.aAu,D.aAv,D.dE2],x.i)
D.NZ=w([D.a16,D.a14,D.a0Y,D.a0Z,D.a1_,D.a12,D.a10,D.a11,D.a15,D.a13,D.azz,D.azA,D.azy,D.azx],x.h)
D.cRg=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cRk=w([A.zc,A.hs,A.bS],x.O)
D.e1C=new B.A(A.rT,"Design")
D.edP=new B.A(D.agn,"Word sizes")
D.eaq=new B.A(A.Am,"Text")
D.brC=new B.a0(983182,"MaterialIcons",!1)
D.eau=new B.A(D.brC,"Photo")
D.dYd=new B.A(A.l_,"Logo")
D.eeT=new B.A(A.EQ,"News")
D.cRp=w([D.e1C,D.edP,D.eaq,D.eau,D.dYd,D.eeT],x.f2)
D.cRq=w(["golddust","sparkle","sheen"],x.s)
D.dFq=new C.ek("upload_pdf",K.Ln,"Upload PDF")
D.dEA=new C.ek("sign_paper",A.EN,"Sign Paper")
D.bqV=new B.a0(63438,"MaterialIcons",!1)
D.dFm=new C.ek("hd_photo",D.bqV,"HD Photo")
D.dEs=new C.ek("sharpen",E.Xj,"Sharpen")
D.dEC=new C.ek("print",K.Ln,"Download PDF")
D.dF3=new C.ek("rotate",D.ag8,"Rotate")
D.dEL=new C.ek("text_box",A.Am,"Text Box")
D.dEN=new C.ek("picture",A.rW,"Picture")
D.dEJ=new C.ek("title",A.xd,"Title")
D.dEF=new C.ek("subtitle",U.agY,"Subtitle")
D.dFc=new C.ek("bullets",I.XB,"Bullet List")
D.dEG=new C.ek("numbered",A.Ld,"Numbered")
D.dFf=new C.ek("quote",A1.Af,"Quote")
D.dES=new C.ek("citation",A.p7,"Citation")
D.dFi=new C.ek("date_stamp",Au.Xo,"Date Stamp")
D.dF5=new C.ek("page_number",A.xc,"Page #")
D.dF9=new C.ek("header_bar",A.EM,"Header")
D.dEM=new C.ek("footer_bar",P.ahg,"Footer")
D.dEB=new C.ek("divider",A.uz,"Divider")
D.dEx=new C.ek("highlight",A.XG,"Highlight")
D.dFb=new C.ek("redact",A.xg,"Redact")
D.dEZ=new C.ek("callout",A.Ab,"Callout")
D.dFk=new C.ek("checkboxes",I.afr,"Checklist")
D.dEW=new C.ek("table",A.Y7,"Table")
D.dEQ=new C.ek("memo",I.XS,"Memo")
D.dF_=new C.ek("letter",A.Ex,"Letter")
D.bqv=new B.a0(63259,"MaterialIcons",!0)
D.dEr=new C.ek("agenda",D.bqv,"Agenda")
D.dED=new C.ek("toc",At.agB,"Contents")
D.bqR=new B.a0(63406,"MaterialIcons",!1)
D.dEX=new C.ek("sig_line",D.bqR,"Sign Line")
D.dEk=new C.ek("initial_line",A.j2,"Initials")
D.dEn=new C.ek("approved",A.l_,"APPROVED")
D.dF1=new C.ek("draft",A.pd,"DRAFT")
D.dF7=new C.ek("confidential",A.j3,"Confidential")
D.dFa=new C.ek("sticky",A.Lr,"Sticky Note")
D.dFj=new C.ek("progress",A.agA,"Progress")
D.bs4=new B.a0(983507,"MaterialIcons",!1)
D.dEy=new C.ek("stars",D.bs4,"Star Rating")
D.dEi=new C.ek("equation",A.agq,"Equation")
D.dEt=new C.ek("timeline",A.Ls,"Timeline")
D.dER=new C.ek("two_col",A.Y9,"Two Columns")
D.dEv=new C.ek("compare",A0.Xr,"Compare")
D.dEg=new C.ek("duplicate_el",A.fC,"Duplicate")
D.dFo=new C.ek("delete_el",A.e4,"Delete")
D.bqM=new B.a0(63352,"MaterialIcons",!1)
D.dFe=new C.ek("bring_fwd",D.bqM,"Bring Front")
D.bqL=new B.a0(63351,"MaterialIcons",!1)
D.dEl=new C.ek("send_back",D.bqL,"Send Back")
D.dF0=new C.ek("align_left",D.Xz,"Align L")
D.dF6=new C.ek("align_center",D.Xy,"Align C")
D.dFn=new C.ek("align_right",D.XA,"Align R")
D.dEK=new C.ek("word_count",A_.X0,"Word Count")
D.dEH=new C.ek("link_text",A.h7,"Link")
D.dF4=new C.ek("phone",A.ir,"Phone")
D.dEw=new C.ek("email",A.Ad,"Email")
D.dFp=new C.ek("qr_placeholder",A.j5,"QR Placeholder")
D.dEq=new C.ek("rectangle",A2.Em,"Rectangle")
D.dEV=new C.ek("circle",A.rO,"Circle")
D.dEm=new C.ek("arrow",A.ji,"Arrow")
D.dFd=new C.ek("line",A.uz,"Line")
D.dEz=new C.ek("triangle",A.Xp,"Triangle")
D.bqD=new B.a0(63318,"MaterialIcons",!1)
D.dEE=new C.ek("grayscale",D.bqD,"Grayscale")
D.dEO=new C.ek("brighten",I.afL,"Brighten")
D.dET=new C.ek("flip_h",A.Ep,"Flip H")
D.bqK=new B.a0(63348,"MaterialIcons",!1)
D.dFl=new C.ek("flip_v",D.bqK,"Flip V")
D.dF8=new C.ek("cover_page",A.p3,"Cover Page")
D.dEj=new C.ek("invoice",A.fW,"Invoice")
D.dEu=new C.ek("resume",A.m_,"Resume")
D.dEI=new C.ek("minutes",A.oa,"Minutes")
D.dEo=new C.ek("lab_report",A.Lo,"Lab Report")
D.dEp=new C.ek("rubric",A.wY,"Rubric")
D.dEU=new C.ek("flashcard_tool",P.EH,"Flashcard")
D.dFg=new C.ek("quiz_tool",A.EC,"Quiz Block")
D.dEY=new C.ek("worksheet_tool",L.Ef,"Worksheet")
D.dF2=new C.ek("outline_share",A.Lp,"Share Outline")
D.dFh=new C.ek("export_json",D.afx,"Export JSON")
D.dEh=new C.ek("new_slide",D.X_,"New Slide")
D.dEP=new C.ek("present",A.p9,"Present")
D.cRP=w([D.dFq,D.dEA,D.dFm,D.dEs,D.dEC,D.dF3,D.dEL,D.dEN,D.dEJ,D.dEF,D.dFc,D.dEG,D.dFf,D.dES,D.dFi,D.dF5,D.dF9,D.dEM,D.dEB,D.dEx,D.dFb,D.dEZ,D.dFk,D.dEW,D.dEQ,D.dF_,D.dEr,D.dED,D.dEX,D.dEk,D.dEn,D.dF1,D.dF7,D.dFa,D.dFj,D.dEy,D.dEi,D.dEt,D.dER,D.dEv,D.dEg,D.dFo,D.dFe,D.dEl,D.dF0,D.dF6,D.dFn,D.dEK,D.dEH,D.dF4,D.dEw,D.dFp,D.dEq,D.dEV,D.dEm,D.dFd,D.dEz,D.dEE,D.dEO,D.dET,D.dFl,D.dF8,D.dEj,D.dEu,D.dEI,D.dEo,D.dEp,D.dEU,D.dFg,D.dEY,D.dF2,D.dFh,D.dEh,D.dEP],B.az("O<ek>"))
D.cRV=w([A.cp,A.ai],x.O)
D.dXP=new B.A(4286331629,4292552567)
D.dXC=new B.A(4280640491,4278630100)
D.dXX=new B.A(4294538006,4292943176)
D.dWZ=new B.A(4278556265,4280640491)
D.cMJ=w([D.dXP,D.dXC,D.dXX,D.dWZ],x.n)
D.cct=w([4294626325,4280472558,4294210230],x.t)
D.dEb=new C.nj("colorful","Colorful",A.nt,D.cMJ,4294967295,3875536895,D.cct,D.mb)
D.dXq=new B.A(4279522093,4279657780)
D.dXG=new B.A(4281750292,4283268111)
D.dX1=new B.A(4278603323,4279203438)
D.dXH=new B.A(4282343954,4279599165)
D.cnb=w([D.dXq,D.dXG,D.dX1,D.dXH],x.n)
D.ccb=w([4288931381,4294829706,4287033260],x.t)
D.dE7=new C.nj("nature","Nature",A.EO,D.cnb,4294442727,3874290891,D.ccb,D.db)
D.dXk=new B.A(4279369771,4283178389)
D.dXh=new B.A(4279179050,4286456526)
D.dXy=new B.A(4280163147,4290648157)
D.dWR=new B.A(4278322711,4285343961)
D.cE3=w([D.dXk,D.dXh,D.dXy,D.dWR],x.n)
D.ccp=w([4294210230,4280472558,4289170426],x.t)
D.dE5=new C.nj("vibe","Vibe",A.XD,D.cE3,4294967295,3874869502,D.ccp,D.th)
D.dXT=new B.A(4290007817,4292552567)
D.dXN=new B.A(4286328082,4294286859)
D.dXS=new B.A(4288485197,4294538006)
D.dXM=new B.A(4285343961,4293675161)
D.bJN=w([D.dXT,D.dXN,D.dXS,D.dXM],x.n)
D.ccu=w([4294829706,4294967295,4284999929],x.t)
D.dE6=new C.nj("celebration","Celebration",A.kX,D.bJN,4294967295,4009752557,D.ccu,D.pn)
D.dXf=new B.A(4279179050,4280171146)
D.dXj=new B.A(4279310375,4280232247)
D.dX7=new B.A(4278916151,4280172719)
D.dXg=new B.A(4279179050,4281549141)
D.cxE=w([D.dXf,D.dXj,D.dX7,D.dXg],x.n)
D.cc6=w([4281908728,4294626325,4287931320],x.t)
D.dEa=new C.nj("professional","Professional",A.Aa,D.cxE,4294967295,3872118241,D.cc6,D.Pi)
D.dXb=new B.A(4278995566,4278413729)
D.dX3=new B.A(4278727492,4279137424)
D.dXz=new B.A(4280171146,4278751666)
D.dXc=new B.A(4278995566,4279590517)
D.cge=w([D.dXb,D.dX3,D.dXz,D.dXc],x.n)
D.cc9=w([4286436348,4284410580,4294829706],x.t)
D.dEc=new C.nj("ocean","Ocean",I.Yb,D.cge,4294967295,3873501950,D.cc9,D.ti)
D.dXO=new B.A(4286328082,4294538006)
D.dXQ=new B.A(4286781507,4294677052)
D.dXK=new B.A(4283178389,4294197086)
D.dXR=new B.A(4288295954,4294688548)
D.ctU=w([D.dXO,D.dXQ,D.dXK,D.dXR],x.n)
D.ccv=w([4294829706,4294967295,4294747557],x.t)
D.dEd=new C.nj("sunset","Sunset",A.Lt,D.ctU,4294967295,4009749973,D.ccv,D.db)
D.dY0=new B.A(4294967295,4294047225)
D.dXW=new B.A(4294507260,4294967295)
D.dY_=new B.A(4294967295,4293060848)
D.dXV=new B.A(4294507260,4294047225)
D.cGX=w([D.dY0,D.dXW,D.dY_,D.dXV],x.n)
D.cc4=w([4280640491,4279179050,4287931320],x.t)
D.dE9=new C.nj("minimal","Minimal",A2.Em,D.cGX,4279179050,4282865001,D.cc4,D.db)
D.dXa=new B.A(4278979081,4280886564)
D.dXu=new B.A(4280031511,4278979081)
D.dXi=new B.A(4279308561,4281148438)
D.dX9=new B.A(4278979081,4280031511)
D.cTD=w([D.dXa,D.dXu,D.dXi,D.dX9],x.n)
D.cci=w([4292128567,4294829706,4289241758],x.t)
D.dEe=new C.nj("elegant","Elegant",A.lv,D.cTD,4294898631,3873957348,D.cci,D.aAt)
D.dXw=new B.A(4280159034,4282058596)
D.dX6=new B.A(4278916151,4280163147)
D.dXE=new B.A(4281208933,4278916151)
D.dXn=new B.A(4279502891,4283178389)
D.cZB=w([D.dXw,D.dX6,D.dXE,D.dXn],x.n)
D.ccr=w([4294296657,4292128567,4291081725],x.t)
D.dE8=new C.nj("royal","Royal Gold",A.iM,D.cZB,4294965222,3874084351,D.ccr,D.mb)
D.dWW=new B.A(4278464302,4280163147)
D.dX5=new B.A(4278916151,4279455306)
D.dXx=new B.A(4280163147,4283040846)
D.dWT=new B.A(4278332450,4281413249)
D.cMr=w([D.dWW,D.dX5,D.dXx,D.dWT],x.n)
D.cc5=w([4281193663,4289170426,4294210230],x.t)
D.dEf=new C.nj("aurora","Aurora Glow",A.dP,D.cMr,4293983738,3869766608,D.cc5,D.db)
D.uV=w([D.dEb,D.dE7,D.dE5,D.dE6,D.dEa,D.dEc,D.dEd,D.dE9,D.dEe,D.dE8,D.dEf],B.az("O<nj>"))
D.b5b=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cSm=w([A.pZ,D.b5b,A.pZ],x.O)
D.cSB=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cSF=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eak=new B.A("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e1c=new B.A("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e5p=new B.A("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dV7=new B.A("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e48=new B.A("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e2x=new B.A("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e6x=new B.A("Surprise me","")
D.cT8=w([D.eak,D.e1c,D.e5p,D.dV7,D.e48,D.e2x,D.e6x],x.L)
D.b_o=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b8p=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cTO=w([A.c,D.b_o,D.b8p],x.O)
D.cVt=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aA2=new C.kE(0,"heritageGold")
D.b3Z=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b4_=new B.w(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.fn_=w([D.b3Z,D.b4_,A.au],x.O)
D.dhD=new C.ja("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aA2,4294570461,4284234270,4292128567,D.jm)
D.aA3=new C.kE(1,"heritageCrimson")
D.aZ2=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b2y=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b8h=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fmD=w([D.aZ2,D.b2y,D.b8h],x.O)
D.dhw=new C.ja("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aA3,4294635750,4285213214,4292912216,D.jm)
D.cVx=w([D.a16,D.a14,D.dhD,D.dhw,D.a1_,D.a12],x.h)
D.dnw=new C.qR(1,"circuit")
D.dnZ=new C.lL("neural","Neural Link","Robotic",D.dnw,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dnv=new C.qR(0,"grid")
D.dnW=new C.lL("signal","Signal Grid","Robotic",D.dnv,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dnB=new C.qR(2,"hexes")
D.dnH=new C.lL("core","Core Protocol","Robotic",D.dnB,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAq=new C.qR(11,"diagonal")
D.dnS=new C.lL("steel","Steel Tech","Robotic",D.aAq,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAr=new C.qR(3,"rings")
D.dnG=new C.lL("vault","Vault Gold","Robotic",D.aAr,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dnz=new C.qR(13,"leaves")
D.dnJ=new C.lL("forest","Forest Morning","Nature",D.dnz,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAs=new C.qR(5,"waves")
D.dnQ=new C.lL("ocean","Ocean Calm","Nature",D.aAs,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dnC=new C.qR(6,"sunset")
D.dnV=new C.lL("sunset","Sunset Glow","Nature",D.dnC,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dnD=new C.qR(7,"mountains")
D.dnI=new C.lL("mountain","Mountain Air","Nature",D.dnD,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dnE=new C.qR(8,"stars")
D.dnP=new C.lL("night","Night Sky","Nature",D.dnE,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1p=new C.qR(4,"orbs")
D.dnN=new C.lL("aurora","Aurora","Nature",D.a1p,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dnX=new C.lL("sand","Sand Dune","Nature",D.aAs,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dnF=new C.qR(9,"rays")
D.dnM=new C.lL("golden","Golden Hour","Warm",D.dnF,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dnK=new C.lL("royal","Royal Purple","Warm",D.aAq,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dnL=new C.lL("rose","Rose Petal","Warm",D.a1p,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dny=new C.qR(12,"blocks")
D.dnO=new C.lL("electric","Electric Blue","Bold",D.dny,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dnY=new C.lL("mint","Fresh Mint","Bold",D.a1p,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dnA=new C.qR(14,"minimal")
D.dnU=new C.lL("white","Clean White","Clean",D.dnA,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dnx=new C.qR(10,"frame")
D.dnR=new C.lL("midnight","Midnight Gold","Clean",D.dnx,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dnT=new C.lL("community","Community Green","Clean",D.aAr,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_L=w([D.dnZ,D.dnW,D.dnH,D.dnS,D.dnG,D.dnJ,D.dnQ,D.dnV,D.dnI,D.dnP,D.dnN,D.dnX,D.dnM,D.dnK,D.dnL,D.dnO,D.dnY,D.dnU,D.dnR,D.dnT],B.az("O<lL>"))
D.cVT=w([D.zi,A.w3,A.hs,A.bS],x.O)
D.cW7=w([D.aal,D.iW],x.O)
D.cWg=w(["pdf","docx","txt","md"],x.s)
D.ehX=new B.bz(-3,150,34)
D.ehY=new B.bz(-3,214,62)
D.ehZ=new B.bz(-3,288,62)
D.cX3=w([D.ehX,D.ehY,D.ehZ],B.az("O<+(P,P,P)>"))
D.cXu=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cY0=w(["Write","Design","Print & fold"],x.s)
D.jn=new C.u3(2,"triangle")
D.Bb=new C.u3(3,"arrow")
D.fh=new C.u3(4,"line")
D.jo=new C.u3(5,"parallelogram")
D.cY2=w([D.bb,D.ey,D.jn,D.Bb,D.fh,D.jo,D.kI],x.m)
D.dWa=new B.A(240,96)
D.dYu=new B.A(560,46)
D.cY7=w([D.dWa,D.dYu],x.G)
D.fna=new C.wM(0,"classic")
D.djv=new C.nf("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aA2,4294570461,4282000405,4284234270)
D.djH=new C.nf("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aA3,4294635750,4281999378,4285213214)
D.djw=new C.nf("elegant_navy","Umoja Mzuri",y.s,D.a1j,4294967035,4279378237,4290283019)
D.djJ=new C.nf("elegant_gold","Umoja wa Dhahabu",y.Q,D.aAb,4294966515,4281016592,4289102906)
D.djL=new C.nf("kente_sunset","Kente ya Jua",y.H,D.aA4,4294964964,4282000405,4279983648)
D.djt=new C.nf("indigo_mudcloth","Nguo ya Indigo",y.n,D.aA5,4294439140,4279903102,4279903102)
D.djy=new C.nf("adinkra_royal","Muhuri wa Adinkra",y.z,D.aA6,4294965484,4285218591,4287322667)
D.djD=new C.nf("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aA7,4294244340,4279196764,4279196764)
D.djF=new C.nf("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aA8,4294505710,4279970378,4291058750)
D.fnb=new C.wM(1,"ringsNdoa")
D.djx=new C.nf("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qE,4294966259,4279378237,4291404327)
D.fnd=new C.wM(2,"coupleCards")
D.djI=new C.nf("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qE,4294966259,4279378237,4291404327)
D.fne=new C.wM(3,"kuhoweshaForm")
D.djE=new C.nf("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.B5,4294966519,4279378237,4291404327)
D.fnf=new C.wM(4,"mahariPande")
D.dju=new C.nf("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qE,4294966259,4279904068,4291404327)
D.fng=new C.wM(5,"familiaMti")
D.djK=new C.nf("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aA9,4294966776,4280241466,4291404327)
D.fnh=new C.wM(6,"ndoaSafi")
D.djB=new C.nf("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.B5,4294966519,4279378237,4291404327)
D.fni=new C.wM(7,"peteWide")
D.djA=new C.nf("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qE,4294966259,4282001936,4291404327)
D.fnj=new C.wM(8,"muhuriCrest")
D.djz=new C.nf("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qE,4294966259,4279378237,4291404327)
D.fnk=new C.wM(9,"fomuWazi")
D.djC=new C.nf("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.B5,4294966519,4279904068,4291404327)
D.fnc=new C.wM(10,"upendoOrnate")
D.djG=new C.nf("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aAa,4294965493,4286200650,4291404327)
D.Ob=w([D.djv,D.djH,D.djw,D.djJ,D.djL,D.djt,D.djy,D.djD,D.djF,D.djx,D.djI,D.djE,D.dju,D.djK,D.djB,D.djA,D.djz,D.djC,D.djG],B.az("O<nf>"))
D.B9=new C.aox(0,"landscape169")
D.nA=new C.aox(1,"portrait916")
D.cYN=w([D.B9,D.nA],B.az("O<aox>"))
D.asV=w([A.hs,A.bI,A.cX,A.ib,A.c],x.O)
D.t8=w([A.bS,A.iY],x.O)
D.dVs=new B.A(1000,"M")
D.dZv=new B.A(900,"CM")
D.dYp=new B.A(500,"D")
D.dWP=new B.A(400,"CD")
D.dVt=new B.A(100,"C")
D.dZw=new B.A(90,"XC")
D.dYq=new B.A(50,"L")
D.dWQ=new B.A(40,"XL")
D.dVx=new B.A(10,"X")
D.dZG=new B.A(9,"IX")
D.dYE=new B.A(5,"V")
D.dYc=new B.A(4,"IV")
D.dVS=new B.A(1,"I")
D.cZk=w([D.dVs,D.dZv,D.dYp,D.dWP,D.dVt,D.dZw,D.dYq,D.dWQ,D.dVx,D.dZG,D.dYE,D.dYc,D.dVS],x.ek)
D.eiQ=new B.cK(["open",A.j2,"Open & write","Keep writing this book"])
D.eje=new B.cK(["print",A.rZ,"Print as a book","Fold and staple it"])
D.cZr=w([D.eiQ,D.eje],B.az("O<+(n,a0,n,n)>"))
D.d_1=w([D.a1r,D.mb,D.Gf,D.Pi,D.db,D.Ph],x.i)
D.eaO=new B.A(-1,"Small")
D.dVg=new B.A(0,"Normal")
D.dVR=new B.A(1,"Big")
D.dWo=new B.A(2,"Huge")
D.d_q=w([D.eaO,D.dVg,D.dVR,D.dWo],x.ek)
D.d_P=w([49,65,89,38,83,89],x.t)
D.d_W=w([A.w3,A.hs,A.bS],x.O)
D.d0l=w([D.db,D.mb,D.th,D.a1r,D.Gf,D.Pi],x.i)
D.ayb=new B.dX([0,D.Jo,8,D.abx,12,D.aby],B.az("dX<I,a1N>"))
D.dJ_={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b8a=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cxO=w([A.bI,D.b8a],x.O)
D.cQr=w([A.bd,A.bj],x.O)
D.cLE=w([A.c3,A.b_,A.cJ],x.O)
D.cZs=w([A.cp,A.bw],x.O)
D.cEU=w([A.b9,A.f9],x.O)
D.cO5=w([A.b2,A.fe],x.O)
D.b2k=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cNs=w([D.b2k,A.nW],x.O)
D.cIt=w([A.hp,A.w5],x.O)
D.cEK=w([A.bs,A.cb],x.O)
D.d2W=new B.bs(D.dJ_,[D.cxO,H.ajS,D.cQr,D.cLE,D.cZs,D.cEU,D.cO5,D.cNs,D.cIt,D.cEK],B.az("bs<n,ak<w>>"))
D.dIc={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a0j=new B.bs(D.dIc,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bs<n,n>"))
D.a0p=new B.bs(A.iv,[],B.az("bs<I,+icon3d,picture(n?,n?)>"))
D.d6Q=new F.Lg(30,null)
D.dbM=new F.m3("Chapter 1","","","")
D.cYA=w([D.dbM],x.B)
D.dbQ=new F.qH("My Book","","",D.cYA,E.azo)
D.dbO=new F.tU("starry",null,null,null,null,"","","")
D.dbR=new F.qH("Dream Big","","",E.a_v,D.dbO)
D.dbP=new F.tU("story",null,null,null,null,"","","")
D.dbS=new F.qH("Little Lion","","",E.a_v,D.dbP)
D.dbN=new F.tU("vintage",null,null,null,null,"","","")
D.dbT=new F.qH("Our Story","","",E.a_v,D.dbN)
D.deT=new C.Df("","NGMY","","")
D.dm9=new C.yv("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dE4=new C.aYP(null,null,null,null)
D.dFN=new C.aoC(null)
D.dG_=new C.ap7(0,"smaller")
D.dG0=new C.ap7(1,"bigger")
D.aAG=new C.ap7(2,"fit")
D.dLd=new B.v(3,6)
D.dLn=new B.v(4,8)
D.dOr=new B.C(E.acj,U.a81,null)
D.dOv=new B.C(A.V4,A.lM,null)
D.btk=new B.ad(A.mG,16,A.c1,null,null,null)
D.dOz=new B.C(A.kv,D.btk,null)
D.aYw=new B.fb(2.2,null,null,null,null,A.c,null,null,null,null)
D.dOJ=new B.C(A.DS,D.aYw,null)
D.bDj=new B.ad(A.ct,16,A.aA,null,null,null)
D.dON=new B.C(A.ef,D.bDj,null)
D.eW3=new B.x("Play",null,A.ox,null,null,null,null,null,null,null,null,null)
D.cQG=w([V.ain,A.tB,D.eW3],x.p)
D.emV=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cQG,null)
D.dOQ=new B.C(A.qe,D.emV,null)
D.aYF=new B.fb(2.4,null,null,null,null,null,null,null,null,null)
D.erK=new B.a3(20,20,D.aYF,null)
D.dOV=new B.C(A.kv,D.erK,null)
D.f3p=new B.x("Seconds per slide",null,A.hb,null,null,null,null,null,null,null,null,null)
D.dP1=new B.C(A.bk,D.f3p,null)
D.dPS=new C.a6x(2,"print")
D.dPV=new B.iF(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dRx=new B.h_("/Annot")
D.dRz=new B.h_("/URI")
D.eQQ=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dTh=new B.jc("share",48,D.eQQ,null,B.az("jc<n>"))
D.bDe=new B.ad(A.dP,14,A.ev,null,null,null)
D.dTq=new B.cF(null,-2,-2,null,null,null,D.bDe,null)
D.b5y=new B.w(0.3333333333333333,0,0,0,A.t)
D.czB=w([D.b5y,A.K],x.O)
D.bIG=new B.a7(A.a3,A.a7,A.w,D.czB,null,null)
D.aRK=new B.o(null,null,null,null,null,D.bIG,A.n)
D.bcd=new B.kB(D.aRK,A.ba,null,null)
D.dTC=new B.cF(0,0,null,0,8,null,D.bcd,null)
D.cUy=w([A.hL,A.nX,A.cl],x.O)
D.dUf=new B.bR(A.A,0.5,A.w,null,0,D.cUy,null,null)
D.dWh=new B.A(0.22,A.bj)
D.dZZ=new B.A("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e0S=new B.A(0.5,A.hq)
D.e9y=new B.A(0.78,A.aS)
D.eiH=new B.cK([A.bE,0.22,0.7,2.6])
D.eiM=new B.cK([A.b9,0.36,1.2,1.3])
D.eiS=new B.cK([A.dJ,0.28,0.2,0.4])
D.eiY=new B.cK([A.cC,0.05,0.3,0.35])
D.ej3=new B.cK([A.bs,0.28,0.9,0])
D.ejb=new B.cK([A.aB,-0.25,-0.15,0.45])
D.ejW=new B.cK([A.c3,0.42,1,4.1])
D.emE=new B.a7p(9)
D.buq=new B.ad(A.EQ,28,A.cJ,null,null,null)
D.f3V=new B.x("NGMY News",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.blA=new B.bF(1,A.bp,D.f3V,null)
D.cXx=w([D.buq,A.aw,D.blA],x.p)
D.emQ=new B.cC(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cXx,null)
D.buB=new B.ad(A.p7,16,A.c,null,null,null)
D.f5f=new B.x("Book",null,A.qS,null,null,null,null,null,null,null,null,null)
D.d_V=w([D.buB,A.eA,D.f5f],x.p)
D.emX=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.d_V,null)
D.bAV=new B.ad(A.j3,10,A.c,null,null,null)
D.eUj=new B.x("Pro",null,A.mT,null,null,null,null,null,null,null,null,null)
D.cQL=w([D.bAV,A.vd,D.eUj],x.p)
D.en_=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cQL,null)
D.f3o=new B.x("Make a newspaper",null,An.R5,null,null,null,null,null,null,null,null,null)
D.bJL=w([E.Yw,A.aa,D.f3o],x.p)
D.en0=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.bJL,null)
D.bzw=new B.ad(A.kX,18,A.bI,null,null,null)
D.eWh=new B.x("Ending celebration",null,A.j8,null,null,null,null,null,null,null,null,null)
D.cWF=w([D.bzw,A.bq,D.eWh],x.p)
D.en3=new B.cC(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cWF,null)
D.bAH=new B.ad(A.j2,18,A.kq,null,null,null)
D.eBY=new B.F(!0,A.kq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new B.x("Write",null,D.eBY,null,null,null,null,null,null,null,null,null)
D.cGM=w([D.bAH,A.aa,D.f5v],x.p)
D.en8=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cGM,null)
D.eUi=new B.x("Download picture",null,A.pz,null,null,null,null,null,null,null,null,null)
D.bnl=new B.pN(A.e8,A.A,A.h,D.eUi,null)
D.bnw=new B.dp(1,A.cj,D.bnl,null)
D.cR6=w([K.aid,A.aa,D.bnw],x.p)
D.en9=new B.cC(A.aZ,A.b6,A.j,A.m,null,A.p,null,0,D.cR6,null)
D.bwl=new B.ad(A.EQ,22,A.cJ,null,null,null)
D.f29=new B.x("NGMY NEWS",null,H.a40,null,null,null,null,null,null,null,null,null)
D.cz6=w([D.bwl,A.aa,D.f29],x.p)
D.enh=new B.cC(A.aZ,A.e,A.R,A.m,null,A.p,null,0,D.cz6,null)
D.ens=new B.oF(!1,!1,null,U.SW,null,A.bW,null,null,null)
D.a31=new B.jD([D.cd,D.db,D.th,D.Ge,D.ti,D.aAw],B.az("jD<hn>"))
D.dK5={title:0,quote:1,closing:2,bio:3}
D.eoe=new B.f6(D.dK5,4,x.M)
D.dIt={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eog=new B.f6(D.dIt,5,x.M)
D.dJD={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a32=new B.f6(D.dJD,8,x.M)
D.dJ7={Design:0,Transitions:1,Insert:2}
D.eok=new B.f6(D.dJ7,3,x.M)
D.fns=new B.jD([D.a1s],B.az("jD<vc>"))
D.dJe={float3d:0,drift:1,pulse:2}
D.eon=new B.f6(D.dJe,3,x.M)
D.aHj=new B.jD([D.Gb,D.Gc,D.Gd],B.az("jD<m7>"))
D.dIq={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aHl=new B.f6(D.dIq,14,x.M)
D.fnt=new B.f6(A.iv,0,B.az("f6<vc>"))
D.dJb={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Qh=new B.f6(D.dJb,4,x.M)
D.dIk={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aHn=new B.f6(D.dIk,30,x.M)
D.dJj={circle:0,triangle:1,hexagon:2,diamond:3}
D.eoD=new B.f6(D.dJj,4,x.M)
D.eqK=new B.ar(390,844)
D.eru=new B.a3(20,20,A4.Ix,null)
D.aI8=new B.a3(null,2.5,null,null)
D.erE=new B.a3(18,18,A4.Ix,null)
D.bAL=new B.ad(A.iM,19,A.c,null,null,null)
D.erP=new B.a3(38,38,D.bAL,null)
D.bz7=new B.ad(A.xk,22,A.c,null,null,null)
D.erR=new B.a3(40,40,D.bz7,null)
D.eso=new B.hJ(2,10,10,1.15,null)
D.aIg=new B.hJ(2,16,14,0.62,null)
D.bjK=new B.M(32,30,32,40)
D.aZO=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bun=new B.ad(A.p3,56,D.aZO,null,null,null)
D.aaS=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eDW=new B.F(!0,D.aaS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new B.x("Your books will live here.",null,D.eDW,null,A.L,null,null,null,null,null,null,null)
D.cJk=w([D.bun,A.T,D.f_o],x.p)
D.bbq=new B.fk(A.aj,A.e,A.j,A.m,null,A.p,null,0,D.cJk,null)
D.dP_=new B.C(D.bjK,D.bbq,null)
D.esJ=new B.lN(D.dP_,null)
D.f_l=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.et0=new B.b_(D.f_l,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eYz=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.et1=new B.b_(D.eYz,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2b=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eta=new B.b_(D.f2b,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2G=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.etp=new B.b_(D.f2G,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eXm=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.etC=new B.b_(D.eXm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f97=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.etV=new B.b_(D.f97,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6v=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eu5=new B.b_(D.f6v,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2O=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.euM=new B.b_(D.f2O,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eSH=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ev1=new B.b_(D.eSH,null,null,null,null,null,null,null,A.i7,null,null,null,null,A.oV,!1,null,null,null,A.q,null)
D.eUp=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.evj=new B.b_(D.eUp,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f_3=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.evl=new B.b_(D.f_3,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZL=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.evm=new B.b_(D.eZL,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4C=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.evn=new B.b_(D.f4C,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eP6=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.evw=new B.b_(D.eP6,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVt=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.evT=new B.b_(D.eVt,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f8_=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.evV=new B.b_(D.f8_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f7C=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.evZ=new B.b_(D.f7C,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eOc=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ew0=new B.b_(D.eOc,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f3Q=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ew9=new B.b_(D.f3Q,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f7d=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ewo=new B.b_(D.f7d,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f74=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ewq=new B.b_(D.f74,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eO4=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eww=new B.b_(D.eO4,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRK=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ewY=new B.b_(D.eRK,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6i=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ex8=new B.b_(D.f6i,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRy=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.exn=new B.b_(D.eRy,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b4W=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cy_=w([A.ib,A.nW,D.b4W,D.a8k,A.ib],x.O)
D.exL=new B.fR(A.A,0,6.283185307179586,A.w,D.cy_,null,null)
D.cG3=w([A.bI,A.bS,A.hs,D.zi,A.bI],x.O)
D.aIQ=new B.fR(A.A,0,6.283185307179586,A.w,D.cG3,null,null)
D.cSz=w([A.c3,A.bE,A.b9,A.bl,A.cJ,A.c3],x.O)
D.exQ=new B.fR(A.A,0,6.283185307179586,A.w,D.cSz,null,null)
D.czP=w([A.oT,A.nY,A.z9,A.ib,A.oT],x.O)
D.exR=new B.fR(A.A,0,6.283185307179586,A.w,D.czP,null,null)
D.cSt=w([A.aN,A.bK,A.aJ,A.ai,A.aN],x.O)
D.exS=new B.fR(A.A,0,6.283185307179586,A.w,D.cSt,null,null)
D.cZb=w([A.bs,A.b9,A.bE,A.c3,A.bs],x.O)
D.exU=new B.fR(A.A,0,6.283185307179586,A.w,D.cZb,null,null)
D.b5a=new B.w(1,0,1,1,A.t)
D.b_U=new B.w(1,1,0,1,A.t)
D.cVL=w([A.CO,A.a9N,H.a8X,D.b5a,H.a9h,D.b_U,A.CO],x.O)
D.exV=new B.fR(A.A,0,6.283185307179586,A.w,D.cVL,null,null)
D.ey9=new C.at5(2,"immersiveSticky")
D.eya=new C.at5(3,"edgeToEdge")
D.eyb=new C.at5(4,"manual")
D.eAk=new B.F(!0,A.nR,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJl=new B.F(!0,A.fg,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAR=new B.F(!0,E.mu,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCf=new B.F(!0,A.al,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDe=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDn=new B.F(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDI=new B.F(!0,A.ev,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEZ=new B.F(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF7=new B.F(!0,A.j_,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFk=new B.r_(!0,A.Gw,null,null,null,null,A.dl,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFN=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGn=new B.F(!0,A.iZ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGJ=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dPY=new B.iF(1,1,0.7568627450980392,0.027450980392156862)
D.eGN=new B.r_(!0,D.dPY,null,null,null,null,A.dl,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9T=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aK2=new B.F(!0,D.a9T,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGT=new B.F(!0,D.aaS,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGU=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK4=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHt=new B.r_(!0,A.oo,null,null,null,null,A.dl,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHM=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.R1=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIg=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIi=new B.F(!0,D.a9T,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hm=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIK=new B.F(!0,A.bS,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new B.F(!0,A.bK,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIV=new B.F(!0,A.bI,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJa=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqV,null,null,null)
D.eJc=new B.F(!0,A.cH,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJe=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJr=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJC=new B.F(!0,A.dE,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK9=new B.F(!0,A.aQ,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKi=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKx=new B.F(!0,A.al,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKF=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKH=new B.F(!0,A.c1,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b9s=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eMf=new B.F(!0,D.b9s,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKP=new B.F(!0,E.mu,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new B.F(!0,A.bK,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new B.F(!0,O.kU,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG_=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNS=new B.x("NEW",null,D.eG_,null,null,null,null,null,null,null,null,null)
D.eO7=new B.x("Hati ya Kuhowesha",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eOx=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eOR=new B.x("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.ePv=new B.x("Big quote mark",null,A.ix,null,null,null,null,null,null,null,null,null)
D.ePx=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.ePI=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eQa=new B.x("How many slides?",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eQH=new B.x("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eC0=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR0=new B.x("Luxury FX",null,D.eC0,null,null,null,null,null,null,null,null,null)
D.eRi=new B.x("Font",null,A.qT,null,null,null,null,null,null,null,null,null)
D.eRt=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eRz=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eLN=new B.F(!0,A.bK,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRH=new B.x("Example  GA847",null,D.eLN,null,null,null,null,null,null,null,null,null)
D.eS5=new B.x("Design shapes",null,A.ix,null,null,null,null,null,null,null,null,null)
D.eSd=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new B.x("Non-stop (loop)",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eSv=new B.x("Hati ya Kuhoweya",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eSO=new B.x("Photo studio",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.eTd=new B.x("Add your picture",null,A.l6,null,null,null,null,null,null,null,null,null)
D.eFl=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new B.x("Enter document code",null,D.eFl,null,A.L,null,null,null,null,null,null,null)
D.eTf=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eTk=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eD3=new B.F(!0,E.mu,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTC=new B.x("Delete this book?",null,D.eD3,null,A.L,null,null,null,null,null,null,null)
D.eHj=new B.F(!0,E.mu,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUr=new B.x("Your library",null,D.eHj,null,null,null,null,null,null,null,null,null)
D.eUv=new B.x("Delete",null,A.aJW,null,null,null,null,null,null,null,null,null)
D.eUx=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Am.Hk,null,null,null,null,null,null,null,null,null)
D.eUH=new B.x("Element flies in",null,A.aK8,null,null,null,null,null,null,null,null,null)
D.Ri=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eV3=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eVm=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eVq=new B.x("Cancel",null,E.aKk,null,null,null,null,null,null,null,null,null)
D.eVs=new B.x("The lines and circles that come with the design",null,A.hY,null,null,null,null,null,null,null,null,null)
D.eKF=new B.F(!0,A.hv,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVS=new B.x("DOCUMENT CODE",null,D.eKF,null,null,null,null,null,null,null,null,null)
D.eWB=new B.x("Quotes",null,G.a4B,null,null,null,null,null,null,null,null,null)
D.eEM=new B.F(!0,O.kU,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWJ=new B.x("Add a picture",null,D.eEM,null,null,null,null,null,null,null,null,null)
D.eWQ=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,R.aJY,null,A.L,null,null,null,null,null,null,null)
D.eWT=new B.x("Look & feel",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eWX=new B.x("Rings",null,A.j8,null,null,null,null,null,null,null,null,null)
D.eX1=new B.x("W",null,A.qT,null,null,null,null,null,null,null,null,null)
D.eXa=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eXr=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4n,null,A.L,null,null,null,null,null,null,null)
D.eXt=new B.x("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eYa=new B.x("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eYn=new B.x("Malipo ya Awamu ya Mahari",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eFa=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new B.x("Create with AI",null,D.eFa,null,A.L,null,null,null,null,null,null,null)
D.eZ1=new B.x("Apply look",null,A.j8,null,null,null,null,null,null,null,null,null)
D.eFS=new B.F(!0,A.eO,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZN=new B.x("Type your presentation below",null,D.eFS,null,A.L,null,null,null,null,null,null,null)
D.eZQ=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aKR,null,A.L,null,null,null,null,null,null,null)
D.eZS=new B.x("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eB4=new B.F(!0,A.cF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZZ=new B.x("Done",null,D.eB4,null,null,null,null,null,null,null,null,null)
D.f_h=new B.x("Delete",null,A.mU,null,null,null,null,null,null,null,null,null)
D.f_q=new B.x("Hati ya Kiapo cha Uongozi",null,A.hc,null,null,null,null,null,null,null,null,null)
D.eEb=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0f=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eEb,null,A.L,null,null,null,null,null,null,null)
D.f0A=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f0G=new B.x("Layout",null,A.R7,null,null,null,null,null,null,null,null,null)
D.f1g=new B.x("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f1k=new B.x("X",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f1T=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a4h,null,null,null,null,null,null,null,null,null)
D.f2n=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.f2y=new B.x("Hati ya Kuhowa",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f2A=new B.x("Choose a class template",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f2C=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hY,null,null,null,null,null,null,null,null,null)
D.f2I=new B.x("Download the newspaper picture",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f2T=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.f3_=new B.x("Done",null,A.aKE,null,null,null,null,null,null,null,null,null)
D.f38=new B.x("Ending celebration",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f39=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f3m=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a44,null,null,null,null,null,null,null,null,null)
D.f4c=new B.x("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.f4d=new B.x("What would you like to do?",null,D.aK2,null,null,null,null,null,null,null,null,null)
D.f4h=new B.x("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f4J=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f4N=new B.x("Hati (Documents)",null,A.hc,null,null,null,null,null,null,null,null,null)
D.f4Z=new B.x("Done",null,A.kM,null,null,null,null,null,null,null,null,null)
D.eLE=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f52=new B.x("Delete presentation?",null,D.eLE,null,A.L,null,null,null,null,null,null,null)
D.f5j=new B.x("After the last slide it starts again from the first",null,A.hY,null,null,null,null,null,null,null,null,null)
D.f5t=new B.x("\ud83c\udf33",null,A.Hh,null,A.L,null,null,null,null,null,null,null)
D.f5L=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hY,null,null,null,null,null,null,null,null,null)
D.f5S=new B.x("Transfer document",null,A.ov,null,null,null,null,null,null,null,null,null)
D.f61=new B.x("Add to the slides",null,A.hb,null,null,null,null,null,null,null,null,null)
D.f6m=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.f6B=new B.x("Make a book",null,I.aJC,null,null,null,null,null,null,null,null,null)
D.f6F=new B.x("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eEH=new B.F(!0,A.ai,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6G=new B.x("Keep this page open until it finishes.",null,D.eEH,null,null,null,null,null,null,null,null,null)
D.f6J=new B.x("Making your video",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f6O=new B.x("LANGUAGE",null,D.R1,null,null,null,null,null,null,null,null,null)
D.f6V=new B.x("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f72=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.f73=new B.x("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f7j=new B.x("Delete from the database?",null,A.l6,null,null,null,null,null,null,null,null,null)
D.f7k=new B.x("H",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f7G=new B.x("NGMY Quotes",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f84=new B.x("Cover",null,D.aKP,null,null,null,null,null,null,null,null,null)
D.f88=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.f89=new B.x("Each page becomes its own slide you can present",null,A.hY,null,null,null,null,null,null,null,null,null)
D.f8u=new B.x("Y",null,A.qT,null,null,null,null,null,null,null,null,null)
D.f8F=new B.x("Crop the picture",null,A.kM,null,null,null,null,null,null,null,null,null)
D.f8K=new B.x("Edit text",null,A.Hi,null,null,null,null,null,null,null,null,null)
D.faU=B.dN("a6k")
D.C4=new C.auo(0,"none")
D.aMl=new C.auo(1,"zipCrypto")
D.aMm=new C.auo(2,"aes")
D.fdd=new F.NG("","",null)
D.fej=new C.b8Q(null)
D.ffm=new C.XE(null)
D.fgr=new C.ab4(null)
D.fgt=new C.aBq(null)
D.fje=new C.YT(null)
D.fju=new C.Zo(null)
D.fjN=new C.bq7(null)})();(function staticFields(){$.fVl=null
$.fVm=null
$.fVn=null
$.fVo=null
$.fDO=B.up("_lastQuoRemDigits")
$.fDP=B.up("_lastQuoRemUsed")
$.auJ=B.up("_lastRemUsed")
$.fDQ=B.up("_lastRem_nsh")
$.pD=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5a=B.S(x.N,x.I)
$.fBn=!1
$.h_3=B.S(B.az("kE"),x.N)
$.h_f=B.S(B.az("kE"),x.E)
$.fYg=!1
$.bvI="q"
$.OE=0
$.Bu=B.S(x.N,B.az("ak<yx>"))
$.fYD=!1
$.fFn=!1
$.h3M=null
$.hxq=B.S(x.N,B.az("aw<n?>"))
$.IQ=""
$.iP=0
$.fS9=function(){var w=x.N
return B.S(w,w)}()
$.fS8=B.S(x.N,x.R)
$.fFI=!1
$.adH=B.S(x.N,x.E)
$.fGu=0
$.bgO=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hW1","BP",()=>C.b6n(0))
w($,"hW_","a0C",()=>C.b6n(1))
w($,"hW0","h7j",()=>C.b6n(2))
w($,"hVZ","fK6",()=>$.a0C().ud(0))
w($,"hVX","h7h",()=>C.b6n(1e4))
w($,"hVY","h7i",()=>B.CY(8))
w($,"hRP","h5k",()=>B.CY(0))
w($,"hRX","h5o",()=>B.CY(0))
w($,"hRW","h5n",()=>B.bTf(0))
w($,"hZF","h9i",()=>{var v,u,t=x.N
t=B.S(t,t)
for(v=D.a0j.gdH(D.a0j),v=v.gag(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"i_4","bA7",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mu(new C.fn2(),v,"biz_plan_blue","Business Plan",B.a([B.aY(u),B.aY(t)],h)),C.mu(new C.fn3(),v,"exec_summary","Executive",B.a([B.aY(s),B.aY(t)],h)),C.mu(new C.fn4(),v,"teal_corporate","Teal Corp",B.a([B.aY(r),B.aY(4279310375)],h)),C.mu(new C.fnf(),q,"geometric_overlap","Geometric",B.a([B.aY(4279203438),B.aY(u)],h)),C.mu(new C.fnk(),p,"midnight_cyan","Midnight Cyan",B.a([B.aY(o),B.aY(n)],h)),C.mu(new C.fnl(),q,"diagonal_hero","Diagonal Hero",B.a([B.aY(m),B.aY(l)],h)),C.mu(new C.fnm(),v,"swot_grid","SWOT Grid",B.a([B.aY(u),B.aY(4278556265)],h)),C.mu(new C.fnn(),v,"layered_chevrons","Chevrons",B.a([B.aY(4280172719),B.aY(k)],h)),C.mu(new C.fno(),q,"split_triangle","Split Panel",B.a([B.aY(s),B.aY(t)],h)),C.mu(new C.fnp(),v,"corporate_navy","Navy Pro",B.a([B.aY(4278982953),B.aY(4282090230)],h)),C.mu(new C.fnq(),p,"cyan_slash","Cyan Slash",B.a([B.aY(o),B.aY(4278630100)],h)),C.mu(new C.fn5(),p,"crimson_impact","Crimson",B.a([B.aY(4282714634),B.aY(4292617766)],h)),C.mu(new C.fn6(),q,"ocean_waves","Ocean Waves",B.a([B.aY(4278413729),B.aY(4286436348)],h)),C.mu(new C.fn7(),p,"mono_geometric","Mono Geo",B.a([B.aY(o),B.aY(n)],h)),C.mu(new C.fn8(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aY(4280031511),B.aY(4293571336)],h)),C.mu(new C.fn9(),q,"hex_infographic","Hex Stack",B.a([B.aY(r),B.aY(4284410580)],h)),C.mu(new C.fna(),q,"photo_banner","Photo Banner",B.a([B.aY(m),B.aY(4281908728)],h)),C.mu(new C.fnb(),v,"process_steps","Process",B.a([B.aY(s),B.aY(k)],h)),C.mu(new C.fnc(),"Minimal","grid_modern","Grid Modern",B.a([B.aY(l),B.aY(t)],h)),C.mu(new C.fnd(),"Luxury","platinum_frame","Platinum",B.a([B.aY(4282865001),B.aY(4293060848)],h)),C.mu(new C.fne(),v,"agenda_cards","Agenda Cards",B.a([B.aY(u),B.aY(4292602622)],h)),C.mu(new C.fng(),q,"headline_orange","Headline Orange",B.a([B.aY(j),B.aY(i)],h)),C.mu(new C.fnh(),q,"infographic_teal","Infographic",B.a([B.aY(r),B.aY(j)],h)),C.mu(new C.fni(),q,"content_year","Year Feature",B.a([B.aY(j),B.aY(t)],h)),C.mu(new C.fnj(),q,"photo_cta","Photo CTA",B.a([B.aY(m),B.aY(i)],h))],B.az("O<Do>"))})
w($,"hZI","h9k",()=>B.ae("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["BctXt7GWnHZYM+2iOsMZZKDwp3E="]=a.current})($__dart_deferred_initializers__);