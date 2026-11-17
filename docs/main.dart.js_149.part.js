((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,W,A8,Am,An,C={
um(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hcF(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KK(d){var w
if(d===0)return $.DO()
if(d===1)return $.a48()
if(d===2)return $.hJX()
if(Math.abs(d)<4294967296)return C.bcv(A.o.M(d))
w=C.i4i(d)
return w},
bcv(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.um(4,w)
return new C.ol(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.um(1,w)
return new C.ol(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.um(2,w)
return new C.ol(v===0?!1:s,w,v)}v=A.o.aq(A.o.galI(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.um(v,w)
return new C.ol(v===0?!1:s,w,v)},
i4i(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dO("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DO()
w=$.hJW()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lr(A.aI.gaU(w))
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
q=new C.ol(!1,r,4)
if(s<0)p=q.mG(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hcG(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hvD(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hvy(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.hcG(d,e,s,g)
w=e+s+1
C.hvD(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i4l(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cPb(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i4j(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bcw(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hvE(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.aq(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.aq(r,65536)}},
i4k(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
ol:function ol(d,e,f){this.a=d
this.b=e
this.c=f},
cPc:function cPc(){},
cPd:function cPd(){},
cPe:function cPe(d,e){this.a=d
this.b=e},
cPf:function cPf(d){this.a=d},
aTN:function aTN(d,e){this.a=d
this.b=e},
hlg(d,e,f){var w=new C.T1(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
T1:function T1(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a55:function a55(d,e){this.a=d
this.b=e},
bL_:function bL_(d){this.a=d
this.c=this.b=0},
hNj(){return new C.bJd()},
bJd:function bJd(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cHa:function cHa(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i3Z(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gd39(d)))
v=f*2+2
u=C.htj(C.htl(),64)
t=new C.cpS(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpT(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQX(w,0,s,0))},
cH8:function cH8(d,e){this.c=d
this.d=e},
aze:function aze(d,e){this.a=d
this.b=e},
cHb:function cHb(d,e,f,g){var _=this
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
bba:function bba(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cH9:function cH9(){this.a=$},
hv7(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hN2(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHO:function bHO(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hiS(d,e){e&=31
return(d&$.qA[e])<<e>>>0},
nR(d,e){e&=31
return(d>>>e|C.hiS(d,32-e))>>>0},
htk(d){var w,v=new C.auM()
if(B.iX(d))v.aMU(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
htl(){var w=C.htk(0),v=new Uint8Array(4),u=x.S
u=new C.cpU(w,v,A.Fx,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.ir(0)
return u},
htj(d,e){var w=new C.cpQ(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpP:function cpP(){},
cpT:function cpT(d,e,f){this.a=d
this.b=e
this.c=f},
cpN:function cpN(){},
auL:function auL(d){this.a=d},
cpS:function cpS(d){this.a=$
this.b=d
this.c=$},
cpO:function cpO(){},
cpM:function cpM(){},
auM:function auM(){this.b=this.a=$},
cpR:function cpR(){},
cpU:function cpU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpQ:function cpQ(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpL:function cpL(){},
cpK:function cpK(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bTf:function bTf(){},
bTg:function bTg(d){this.a=d},
cAh:function cAh(){},
bUh:function bUh(d,e){this.a=d
this.b=!1
this.c=e},
bUi:function bUi(){},
igS(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].v(0))
return u},
axQ(d){var w=0,v=B.j(x.H),u
var $async$axQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fpp?2:4
break
case 2:w=5
return B.b(A.kE.h9("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axQ)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kE.h9("SystemChrome.setEnabledSystemUIOverlays",C.igS(null),u),$async$axQ)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axQ,v)},
axT:function axT(d,e){this.a=d
this.b=e},
a9Q:function a9Q(d){this.a=d},
ijD(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fHM(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.j.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fHM:function fHM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ape(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ape=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.aik("ngmy_menu_lib_v1_zzslides_index",A.bO),$async$ape)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c4d(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c4e())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ape,v)},
apg(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ape(),$async$apg)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aT(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n0("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.J(["deck",m.aj(),"savedAt",l],t,q),null),$async$apg)
case 7:if(!f){w=5
break}s.n(0,p,B.J(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.I)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$apg)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apg,v)},
c4f(d){return C.hT7(d)},
hT7(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c4f=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aik("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ij),$async$c4f)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xk(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ac(m)
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
return B.i($async$c4f,v)},
apf(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$apf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ape(),$async$apf)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nU(r,new C.c4g(d))
w=4
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$apf)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRQ("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$apf)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apf,v)},
c4d:function c4d(){},
c4e:function c4e(){},
c4g:function c4g(d){this.a=d},
iud(d,e,f){return B.bU(A.L,null,new C.fYP(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fYP:function fYP(d,e,f){this.a=d
this.b=e
this.c=f},
a2k:function a2k(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLm:function aLm(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
fj2:function fj2(d){this.a=d},
fj3:function fj3(d){this.a=d},
fj4:function fj4(d,e,f){this.a=d
this.b=e
this.c=f},
fj_:function fj_(d){this.a=d},
fj0:function fj0(d){this.a=d},
fj1:function fj1(d,e){this.a=d
this.b=e},
fiU:function fiU(d){this.a=d},
fiS:function fiS(d){this.a=d},
fiT:function fiT(d){this.a=d},
fiV:function fiV(d){this.a=d},
fiW:function fiW(d){this.a=d},
fj8:function fj8(d,e){this.a=d
this.b=e},
fj7:function fj7(d,e){this.a=d
this.b=e},
fiY:function fiY(d,e,f){this.a=d
this.b=e
this.c=f},
fiX:function fiX(d,e,f){this.a=d
this.b=e
this.c=f},
fj5:function fj5(d,e){this.a=d
this.b=e},
fj6:function fj6(d,e){this.a=d
this.b=e},
fjb:function fjb(d){this.a=d},
fjc:function fjc(d,e){this.a=d
this.b=e},
fja:function fja(d,e){this.a=d
this.b=e},
fj9:function fj9(){},
hy7(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aP(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.fqI(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fqJ(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3k(d){return C.ikZ(d)},
ikZ(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3k=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fKZ(n)
t=4
j=m
i=C
w=7
return B.b(B.a3V("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3k)
case 7:j.$1(i.hy7(f))
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
return B.b(B.aA(),$async$a3k)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hy7(B.aV(J.t(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b8<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b8(n,p)
g=C
w=13
return B.b(C.fqR(d),$async$a3k)
case 13:p=j.C(new i.Y(h,new g.fKX(f),o),o.k("M.E"))
A.d.aZ(p,new C.fKY())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3k,v)},
aiV(d,e){return C.itS(d,e)},
itS(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fYh(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiN("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiV)
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
return B.b(B.aA(),$async$aiV)
case 12:p=g
w=13
return B.b(p.aD("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiV)
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
return B.i($async$aiV,v)},
fqR(d){return C.i9_(d)},
i9_(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fqR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fqR)
case 7:r=f
q=r.tV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jC(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fqR,v)},
ahP(d,e){return C.ijv(d,e)},
ijv(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahP=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahP)
case 6:s=g
r=B.aR(x.N)
q=s.tV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fZ(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ci.E"))
w=7
return B.b(s.aD("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahP)
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
return B.b(C.a3k(d),$async$ahP)
case 8:n=g
J.nU(n,new C.fHq(e))
w=9
return B.b(C.aiV(d,n),$async$ahP)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahP,v)},
iui(d,e){return B.a6(d,!1).ce(B.ed(new C.fZa(e),!0,null,x.H))},
i4n(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cQz())},
oP:function oP(d,e,f){this.a=d
this.b=e
this.c=f},
fqI:function fqI(){},
fqJ:function fqJ(){},
fKZ:function fKZ(d){this.a=d},
fKX:function fKX(d){this.a=d},
fKY:function fKY(){},
fYh:function fYh(){},
fHq:function fHq(d){this.a=d},
fZa:function fZa(d){this.a=d},
a_2:function a_2(d,e){this.c=d
this.a=e},
azO:function azO(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQz:function cQz(){},
cQB:function cQB(d,e){this.a=d
this.b=e},
cQE:function cQE(d){this.a=d},
cQF:function cQF(d){this.a=d},
cQD:function cQD(){},
cQG:function cQG(d,e){this.a=d
this.b=e},
cQC:function cQC(d){this.a=d},
cQH:function cQH(){},
cQA:function cQA(d,e){this.a=d
this.b=e},
cQI:function cQI(){},
cQv:function cQv(d){this.a=d},
cQt:function cQt(d){this.a=d},
cQu:function cQu(d){this.a=d},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQs:function cQs(d){this.a=d},
cQr:function cQr(d){this.a=d},
cQp:function cQp(d,e){this.a=d
this.b=e},
cQq:function cQq(d){this.a=d},
cQy:function cQy(){},
cQx:function cQx(d){this.a=d},
cQo:function cQo(d,e){this.a=d
this.b=e},
cQn:function cQn(d,e){this.a=d
this.b=e},
cQm:function cQm(d,e){this.a=d
this.b=e},
cQJ:function cQJ(d){this.a=d},
a_0:function a_0(d,e,f){this.c=d
this.d=e
this.a=f},
aH9:function aH9(d,e,f){this.a=d
this.b=e
this.c=f},
azK:function azK(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPQ:function cPQ(d){this.a=d},
cPP:function cPP(d){this.a=d},
cPS:function cPS(d,e,f){this.a=d
this.b=e
this.c=f},
cQ_:function cQ_(){},
cQ0:function cQ0(d){this.a=d},
cPT:function cPT(d,e,f){this.a=d
this.b=e
this.c=f},
cPR:function cPR(d,e){this.a=d
this.b=e},
cPV:function cPV(d,e){this.a=d
this.b=e},
cPW:function cPW(d,e){this.a=d
this.b=e},
cPX:function cPX(d,e){this.a=d
this.b=e},
cPU:function cPU(d){this.a=d},
cPZ:function cPZ(d){this.a=d},
cPY:function cPY(d,e){this.a=d
this.b=e},
cQ5:function cQ5(d){this.a=d},
cQ1:function cQ1(d,e){this.a=d
this.b=e},
cQ2:function cQ2(d,e){this.a=d
this.b=e},
cQ3:function cQ3(d,e){this.a=d
this.b=e},
cQ4:function cQ4(d,e){this.a=d
this.b=e},
azM:function azM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
inj(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eg(v,x.cK).bG(new C.fPy(),x.H).eG(new C.fPz())}}else if(s)C.hzI()}catch(t){}},
hzI(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eg(v,x.cK).eG(new C.fv3())}catch(u){}},
inm(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fPy:function fPy(){},
fPz:function fPz(){},
fv3:function fv3(){},
hEG(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.eo(v,w,"").split(":"))},
hED(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.ls)return null
return A.a.b2(w,14)},
hhv(d){var w
if(d.b!==D.ls)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
inM(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hEH(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
inH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kZ(0,f)
t=x.N
u=B.cF(u,new C.fQx(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kZ(0,f),u=new B.Gt(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SJ(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SJ(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
inF(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fQw())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.I)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSQ(w,u,s,0)}return w},
inJ(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a7v:$.hM7(),s=x.N,r=B.T(s,s)
for(s=t.gdP(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hEE(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
frN(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
if(C.hEG(q)===e)return q}return null},
inK(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.Ic).a},
inL(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afD(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afD(0,0,0)
v=C.frN(b6,b0)
u=C.frN(b5,b0)
t=0
if(v!=null&&u!=null){s=C.inJ(b2,C.inH(C.hEE(b2),v.r))
if(s.a!==0){u.r=C.inF(C.hEE(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){l=C.hEG(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.frN(b6,n)
i=C.frN(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){d=o[m]
a0=C.hhv(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.I)(a1),++a7){a8=a1[a7]
if(C.hED(a8)===a0||C.hhv(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RW(a1,new C.fQD(a0),!0)
a1=f.z
a6=Date.now()
a9=$.je
$.je=a9+1
A.d.I(a1,new C.eS(""+1000*a6+"_"+a9,D.ls,a2,a3,a4,a5,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,d.at,D.bm,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cu,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afD(k,t,e)},
inG(d){var w=C.inK(d)
if(d.w==="hati_kuhowa")return C.hE0("",w)
return C.hE_("",w)},
fQx:function fQx(){},
fQw:function fQw(){},
fQD:function fQD(d){this.a=d},
hzp(){var w=new B.V(Date.now(),0,!1),v=new C.fu5()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hhE(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fRw(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ls&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hEW(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fRw(d)
w=B.bh(u)
if(w==null)return!C.fRw(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bS(18e9))},
iot(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hXa(d){return A.a.i(d).toLowerCase()},
b1T(d){return C.hXb(d)},
hXb(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b1T=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b1T)
case 7:r=f
p=r.tV("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.isE(),B.U(o).k("N<1,n>")).bY(0,new C.cg5())
o=B.d0(o,o.$ti.k("M.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b1T,v)},
a8B(d,e){return C.hXc(d,e)},
hXc(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8B=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b1T(d),$async$a8B)
case 3:r=g
if(!J.hc(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8B)
case 8:q=g
w=9
return B.b(q.aD("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$a8B)
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
return B.i($async$a8B,v)},
a8C(){var w=0,v=B.j(x.y),u,t
var $async$a8C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a8C)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8C,v)},
hXd(d){var w=$.Co.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bh(w==null?"":w)},
hXe(d,e){var w,v,u,t=$.Co.h(0,d)
if(t==null)return!1
w=J.a7(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hXd(d)
return u!=null&&!e.f.ca(u)},
hrf(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i4(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gR(w)
r=s.b
if(!v.b(r))continue
q=B.a2(r,u,t)
r=q.h(0,"at")
p=B.bh(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Co.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bh(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbt())s=r===n.gbt()&&p.b>n.gcG()}if(s){s=$.Co
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.J(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
ha1(){var w=$.Cn
return w.bq(w,new C.cg6())},
WH(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WH=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uD("civic_hati_kiapo_uongozi",null,A.ej),$async$WH)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a7(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a2(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Co
i=new B.cc(j,B.a4(j).k("cc<1,2>")).aV(0,new C.cg8(k))
if(n.b(o.h(a2,"deletedByState")))C.hrf(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i4(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gR(o)
h=j.b
if(!n.b(h))continue
g=C.Xk(B.a2(h,m,l))
h=$.Cn
j=j.a
f=J.kR(j)
e=h.h(0,f.v(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbt())h=a0===d.gbt()&&h.b<d.gcG()
else h=!0
h=!h}else h=!0
if(h)$.Cn.n(0,f.v(j),g)}C.ha1()
$.hre=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WI(),$async$WH)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Cn,o=new B.cc(o,B.a4(o).k("cc<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WH)
case 11:t=2
w=10
break
case 8:t=7
a3=s.pop()
p=B.ac(a3)
$.am.$1("[kiapo] push delete: "+B.w(p))
w=10
break
case 7:w=2
break
case 10:case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WH,v)},
OA(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$OA=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cg7&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$OA)
case 7:r=a4
q=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aP(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i4(p),g=g.gae(g),f=x.z;g.C();){n=g.gR(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xk(B.a2(i.a(n.b),h,f)))}$.Cn=o}}m=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.X.aP(0,m,null)
if(x.f.b(l))C.hrf(l)}C.ha1()
t=2
w=6
break
case 4:t=3
d=s.pop()
k=B.ac(d)
$.am.$1("[kiapo] local load: "+B.w(k))
w=6
break
case 3:w=2
break
case 6:a1=a2
if(a1)a4=a1
else{w=8
break}w=9
break
case 8:w=10
return B.b(B.c9(),$async$OA)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WH(),$async$OA)
case 17:t=2
w=16
break
case 14:t=13
a0=s.pop()
j=B.ac(a0)
$.am.$1("[kiapo] cloud load: "+B.w(j))
w=16
break
case 13:w=2
break
case 16:case 12:$.cg7=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OA,v)},
WI(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WI=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WI)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Cn,o=new B.cc(o,B.a4(o).k("cc<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aD("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aw(r,null)),$async$WI)
case 7:w=8
return B.b(s.aD("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.X.aw($.Co,null)),$async$WI)
case 8:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ac(l)
$.am.$1("[kiapo] local save: "+B.w(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$WI,v)},
a8E(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$a8E)
case 3:r=$.hre
w=r==null||new B.V(Date.now(),0,!1).bD(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8C(),$async$a8E)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WH(),$async$a8E)
case 13:case 11:t=2
w=9
break
case 7:t=6
m=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:p=A.a.i(d).toLowerCase()
if(p.length===0){u=null
w=1
break}o=$.Cn.h(0,p)
n=o==null?null:o.hQ()
if(n==null){u=null
w=1
break}u=C.bFj(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8E,v)},
cg9(d){var w=0,v=B.j(x.y),u,t
var $async$cg9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$cg9)
case 3:t=A.a.i(d).toLowerCase()
u=$.Co.am(0,t)&&$.Cn.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cg9,v)},
a8D(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8D=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.OA(!1),$async$a8D)
case 3:o=$.Cn.W(0,i)
n=$.Co
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.J(["at",m,"id",l],k,k))
$.cg7=!0
w=4
return B.b(C.WI(),$async$a8D)
case 4:w=5
return B.b(C.a8C(),$async$a8D)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Cn,n=new B.cc(n,B.a4(n).k("cc<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8D)
case 10:r=f
u=r
w=1
break
t=2
w=9
break
case 7:t=6
h=s.pop()
p=B.ac(h)
$.am.$1("[kiapo] cloud delete: "+B.w(p))
u=!1
w=1
break
w=9
break
case 6:w=2
break
case 9:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8D,v)},
OB(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$OB=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8C(),$async$OB)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WH(),$async$OB)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Co.h(0,a0)
if(n!=null){d=J.a7(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hQ()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.I)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Cn.n(0,a0,l)
C.ha1()
$.cg7=!0
w=11
return B.b(C.WI(),$async$OB)
case 11:w=12
return B.b(C.a8C(),$async$OB)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Cn,m=new B.cc(m,B.a4(m).k("cc<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$OB)
case 17:r=a5
u=r
w=1
break
t=2
w=16
break
case 14:t=13
a2=s.pop()
p=B.ac(a2)
$.am.$1("[kiapo] cloud save: "+B.w(p))
u=!1
w=1
break
w=16
break
case 13:w=2
break
case 16:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OB,v)},
arG(d){var w=0,v=B.j(x.T),u,t,s
var $async$arG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i_().a6V(A.eQ),$async$arG)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$arG)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1U(t,d),$async$arG)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arG,v)},
b1U(d,e){return C.hXf(d,e)},
hXf(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1U=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b1U)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f1().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iC("media")
w=8
return B.b(p.xL(q,new Uint8Array(B.cf(d)),D.bMs),$async$b1U)
case 8:n=p.Df(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ac(k)
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
return B.i($async$b1U,v)},
Lz(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ev(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,l,m,n)},
ftx(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
hej(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.j.D(i*0.0017,0.02,0.06)
return C.ev(h,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,g,e,f)},
ft5(d,e,f,g){return C.ftx(0,0.002,D.fQ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hek(d,e,f,g,h,i,j,k){var w=C.cE()
return C.ev(A.rf,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bs,A.a8,"",h,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,g,e,f)},
hzo(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.eo(v,w,"").split(":"))},
bFj(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gH(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.I)(t),++n){m=t[n]
l=C.hzo(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.ls&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hh9(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cs(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.I)(w),++n){m=w[n]
l=C.hzo(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.ls&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fPw(a2))}else A.d.bq(a1.z,new C.fPx())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fRw(a0))a0.ax=a6.f.aa().ag()
return a0},
hh9(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fSj(D.a8w),l=C.cE(),k=x.u,j=B.a([C.ev(A.bp,!1,s,A.aH,"marriage_locked_bg",r,24,A.bs,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.cu,D.lV,1,0,0)],k),i=B.a([],k)
i.push(C.Lz("NGMY",A.K,236069181,52,A.bs,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lz("TAREHE:",A.bp,o,16,A.bs,A.I,A.j.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hej("tarehe",0.8059999999999999,0.026,0.18,A.bp,16,p,C.hzp()))
i.push(C.ft5(0.8099999999999999,0.026+A.j.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lz("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bs,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lz("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cK,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ftx(0,0.002,D.fQ,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hek("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hek("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hek("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ftx(268435456,0.175,D.bm,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lz("VIDEO YA KIAPO",A.bp,o,10,A.bs,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ev(A.bp,!1,s,A.aH,"__kiapo_video__",r,24,A.bs,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.cu,D.lV,0.77,0.115,0.492))
i.push(C.Lz("Rais Anayeapa:",A.bp,p,15,A.bs,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lz("Jina:",A.bp,p,13,A.bs,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hej("rais_jina",0.195,0.6930000000000001,0.62,A.bp,13,p,""))
i.push(C.ft5(0.195,0.7130000000000001,0.62,n))
i.push(C.Lz("Sahihi:",A.bp,p,13,A.bs,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ev(A.bp,!1,s,A.aH,"marriage_sign_rais",0,24,A.bs,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,0.38,0.21500000000000002,0.73))
i.push(C.ft5(0.21500000000000002,0.795,0.38,n))
i.push(C.Lz("Tarehe:",A.bp,p,13,A.bs,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hej("rais_tarehe",0.745,0.74,0.2,A.bp,12,p,C.hzp()))
i.push(C.ft5(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.u(i,B.a([C.ftx(0,0.032,D.bm,o,1,"state_box",0.72,0.14,0.875),C.Lz("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bs,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.u(j,i)
v=C.t1(4294967035,t,0,0,j,l,D.r3,"","",u,D.ds)
return C.Cs(t,t,t,t,D.oX,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3j(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3j=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fk3)
w=1
break}w=3
return B.b(C.OA(!0),$async$a3j)
case 3:w=4
return B.b(C.a8E(p),$async$a3j)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hEW(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bny,null,new C.fKl(p),f,!0,!0,!1,A.lW,!1,!1,x.N),$async$a3j)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fKm(),f,null,!0,!0,x.y),$async$a3j)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hh9(p))
w=1
break
case 8:i.$1(t)
w=1
break
case 6:o=!g
if(o){w=11
break}else l=o
w=12
break
case 11:w=13
return B.b(C.cg9(p),$async$a3j)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hh9(p))
case 1:return B.h(u,v)}})
return B.i($async$a3j,v)},
fu5:function fu5(){},
cg5:function cg5(){},
cg6:function cg6(){},
cg8:function cg8(d){this.a=d},
fPw:function fPw(d){this.a=d},
fPx:function fPx(){},
fKl:function fKl(d){this.a=d},
fKj:function fKj(d){this.a=d},
fKk:function fKk(d){this.a=d},
fKm:function fKm(){},
fKh:function fKh(d){this.a=d},
fKi:function fKi(d){this.a=d},
asc:function asc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFX:function aFX(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
emu:function emu(d){this.a=d},
ems:function ems(d){this.a=d},
emt:function emt(d){this.a=d},
emv:function emv(d){this.a=d},
emw:function emw(d){this.a=d},
xb(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ev(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",j,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,l,m,n)},
hz_(d,e,f){var w=4291404327
return B.a([C.qz(0,f,D.f2,w,2,"ring_l",f,d-f*0.42,e),C.qz(0,f,D.f2,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fsv(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qz(4294967288,f,D.f2,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qz(h,s,D.f2,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qz(h,f*0.46,D.f2,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qz(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
fsu(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.j.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ev(h,!1,k,A.aH,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,l,0,0,"",D.cu,D.d1,g,e,f)},
bCG(d,e,f,g){return C.qz(0,0.002,D.fQ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hyZ(d,e,f,g,h){var w=A.j.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qz(0,0.036,D.bm,h,1.4,"banner_box_"+d,w,v,e),C.xb(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hEF(){var w=new B.V(Date.now(),0,!1),v=new C.fQC()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hz0(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.xb(r+".",A.bp,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fsu("witness_"+d+"_"+r+"_name",q,g,p,A.bp,!0,16,j,"[Jina la Shahidi]"),C.bCG(q,g+A.j.D(0.0272,0.02,0.06),p,w),C.xb("Sahihi:",A.bp,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ev(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d+"_witness_"+r,0,24,A.bs,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,s,t,g-0.004),C.bCG(t,g+0.044,s,w)],x.u)},
aim(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dv1,D.cwv,D.dmP,D.doR],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.I)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hdv(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fSj(d.d),v=B.a([C.ev(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lV,1,0,0)],x.u)
A.d.u(v,C.ibE(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
ibE(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.xb("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.u(c2,C.hz_(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.u(c2,C.hz_(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.u(c2,C.fsv(0.16,0.018,0.052,!1,b9))
A.d.u(c2,C.fsv(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.xb("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.u(c2,B.a([C.qz(0,0.062,D.f2,b1,1.6,"crest_o",0.11,0.445,0.012),C.qz(0,0.046,D.f2,b1,1,"crest_i",0.084,0.458,0.02),C.xb("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.u(c2,B.a([C.qz(0,0.002,D.fQ,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qz(b9,0.016,D.lt,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qz(0,0.002,D.fQ,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.u(c2,B.a([C.xb("TAREHE:",A.bp,c0,20,A.I,A.j.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fsu("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bp,!1,21,b9,C.hEF()),C.bCG(0.814,0.026+A.j.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.xb(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qz(c0,0.0026,D.bm,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qz(c3.e,0.138,D.bm,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.ev(A.bp,!1,b9,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bs,A.cE,"",0.128,s,a9,"","",0,!1,"",0,D.bm,b3,2,c5,0,0,"",D.cu,D.d1,0.82,0.09,t))
t+=c4
if(c8){r=A.j.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qz(0,0.036,D.bm,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.u(c2,B.a([s,C.ev(A.K,!1,c0,A.aH,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bs,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bm,b3,2,c7,0,0,"",D.cu,D.d1,r,q,t+0.00612)],c1))}else A.d.u(c2,C.hyZ(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.xb(c9,A.bp,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.D(0.037399999999999996,0.02,0.06):A.j.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fsu("mahari_"+p,0.132,k,m,A.bp,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.je
$.je=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.je
$.je=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eS(""+1000*i+"_"+h,D.d1,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bs,A.aH,c0,A.bp,a9,D.bm,b2,b3,2,0,!1,s,0,D.cu,0,"","","","","",!1,0),j,new C.eS(""+1000*f+"_"+e,D.fj,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.fQ,0,b5,0.8,0,!1,g,0,D.cu,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.je
$.je=p+1
i=Date.now()
h=$.je
$.je=h+1
g=Date.now()
f=$.je
$.je=f+1
e=Date.now()
a3=$.je
$.je=a3+1
A.d.u(d,B.a([new C.eS(""+1000*s+"_"+p,D.d1,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bs,A.aH,b7,A.e5,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cu,0,"","","","","",!1,0),new C.eS(""+1000*i+"_"+h,D.fj,a1,a2,0.046,0.025875,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.bm,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cu,0,"","","","","",!1,0),new C.eS(""+1000*g+"_"+f,D.d1,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bs,A.aH,b7,A.K,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cu,0,"","","","","",!1,0),new C.eS(""+1000*e+"_"+a3,D.fj,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.bm,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cu,0,"","","","","",!1,0)],c1))}A.d.u(c2,d)
t+=0.04}t+=0.006
A.d.u(c2,C.hyZ("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a8n||w===D.a8p||w===D.a8m||w===D.a8o){w=t-0.008
A.d.u(c2,C.fsv(0.21,w,0.044,!0,b0))
A.d.u(c2,C.fsv(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.u(c2,B.a([C.qz(0,a4,D.bm,c0,1.3,"wit_table_border",0.82,0.09,t),C.qz(c0,a4,D.bm,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qz(0,0.0022,D.fQ,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.xb("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.xb("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.u(c2,C.hz0("mke",a6,0.106,a5,0.378,c0,b9))
A.d.u(c2,C.hz0("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.u(c2,B.a([C.qz(0,0.11,D.bm,c0,1.2,"mw_box",0.82,0.09,t),C.xb("MWANDISHI",A.bp,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.xb("Jina:",A.bp,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fsu("mwandishi_jina",0.215,w,0.3116,A.bp,!0,15,b9,""),C.bCG(0.215,p,0.3116,b5),C.xb("Sahihi:",A.bp,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.ev(A.bp,!1,b6,A.aH,"marriage_sign_mwandishi",0,24,A.bs,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,0.3161999999999999,0.5738,s-0.044),C.bCG(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.u(c2,B.a([C.qz(0,0.032,D.bm,c0,1,"state_box",0.7,0.15,a8),C.xb("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
inI(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hhO(d.d),p=new C.fQy(s),o=new C.fQz(s),n=d.z,m=n===D.a8n||n===D.a8p||n===D.a8m||n===D.a8o,l=n===D.aKU||n===D.a8q||n===D.aKV,k=B.bS(0,B.fU(q,A.A,t,t,A.ck,A.c0,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a8q?26:16
i.push(new C.fQB().$1$size(w))}if(n===D.aKW)i.push(D.h1x)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iY,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.m(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.K(r,A.r,1.1)
w=B.l(4)
i.push(B.r(t,B.x(B.a([p.$0(),D.aUw,p.$1$w(0.9),D.aUw,p.$1$w(0.75)],j),A.l,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bi1,t,n,w,t,t,A.n),t,t,t,t,A.anF,t,t,t))
i.push(A.am)
i.push(new C.fQA(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.e5(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.O5,new B.c8(A.aL,A.e,A.i,A.l,t,A.p,t,0,B.a([B.r(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dg,new B.bz(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.u(i,v)
i.push(A.b1)
i.push(B.d(d.b,t,t,t,t,t,t,B.m(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(D.bDu,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hE_(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aim(e,t)
if(r==null)r=A.d.gH(D.Ic)
w=C.cE()
v=C.t1(r.e,t,0,0,C.hdv(r,0.165,y.O,D.dps,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r3,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cs(t,t,t,t,D.oX,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hE0(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aim(e,t)
if(r==null)r=A.d.gH(D.Ic)
w=C.cE()
v=C.t1(r.e,t,0,0,C.hdv(r,0.165,y.f,D.dkK,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r3,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cs(t,t,t,t,D.oX,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGG(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h1K(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGG,v)},
ahX(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahX=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKp(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKq(p),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahX)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGG(d,"Hati ya Kuhowa",D.Ic),$async$ahX)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahX)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hE_(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahX,v)},
ahY(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahY=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKt(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKu(p),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahY)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGG(d,"Hati ya Kuhoweya",D.Ic),$async$ahY)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahY)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hE0(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahY,v)},
ahZ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahZ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fKx(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKy(m),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahZ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGG(d,"Malipo ya Awamu ya Mahari",D.SF),$async$ahZ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahZ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aim(s,D.SF)
if(q==null)q=A.d.gH(D.SF)
n=C.cE()
p=C.t1(q.e,null,0,0,C.hdv(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.df5,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r3,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.ds)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cs(null,null,null,null,D.oX,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahZ,v)},
yf:function yf(d,e){this.a=d
this.b=e},
jG:function jG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fQC:function fQC(){},
fQy:function fQy(d){this.a=d},
fQA:function fQA(d){this.a=d},
fQB:function fQB(){},
fQz:function fQz(d){this.a=d},
h1K:function h1K(d,e){this.a=d
this.b=e},
aeL:function aeL(d,e,f){this.c=d
this.d=e
this.a=f},
e8P:function e8P(d,e,f){this.a=d
this.b=e
this.c=f},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8N:function e8N(d,e){this.a=d
this.b=e},
ae9:function ae9(d,e,f){this.c=d
this.d=e
this.a=f},
fKp:function fKp(){},
fKq:function fKq(d){this.a=d},
fKn:function fKn(d){this.a=d},
fKo:function fKo(d){this.a=d},
fKt:function fKt(){},
fKu:function fKu(d){this.a=d},
fKr:function fKr(d){this.a=d},
fKs:function fKs(d){this.a=d},
fKx:function fKx(){},
fKy:function fKy(d){this.a=d},
fKv:function fKv(d){this.a=d},
fKw:function fKw(d){this.a=d},
LC(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.ev(e,!1,f,A.aH,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,k,l,m)},
Du(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
hzL(d,e,f){return C.Du(0,0.002,D.fQ,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCR(d,e,f,g,h){return B.a([C.Du(4294967288,0.032,D.bm,4291404327,1.15,"pill_"+d,g,f,e),C.LC(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
heo(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Du(0,0.002,D.fQ,g,1,"orn_l_"+t,u,d,v),C.Du(h,0.016,D.lt,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Du(0,0.002,D.fQ,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2I(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.LC(d,A.bp,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.ev(A.K,!1,j,A.aH,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cK,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,t,u,g-0.002),C.hzL(u,g+0.018,t)],x.u)},
hzM(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Du(h,0.028,D.bm,h,0,"chv_"+d,g,e,f),C.Du(w,0.024,D.lt,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Du(w,0.024,D.lt,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.LC(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCQ(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.LC("Sahihi:",A.bp,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.ev(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d,0,24,A.bs,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,v,w,f-0.006),C.hzL(w,f+0.016,v)],x.u)},
hhP(d){var w,v
for(w=0;w<19;++w){v=D.SW[w]
if(v.a===d)return v}return null},
iq6(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aim(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aim(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.aim(u,D.SF)
v=w==null?l:w.d
if(v==null){w=C.aim(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hhP(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hAB.a8(0)
$.hAN.a8(0)
t=C.fSj(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.I)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hj_(d){var w=0,v=B.j(x.T),u
var $async$hj_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h3h(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hj_,v)},
yi:function yi(d,e){this.a=d
this.b=e},
o9:function o9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bm1:function bm1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h3h:function h3h(){},
aeO:function aeO(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erf:function erf(d){this.a=d},
ere:function ere(d,e){this.a=d
this.b=e},
agu:function agu(d,e,f){this.c=d
this.d=e
this.a=f},
hhO(d){return $.hAN.c3(0,d,new C.fSl(d))},
fSj(d){return $.hAB.c3(0,d,new C.fSk(d))},
fJ(d){return B.h7C(d>>>16&255,d>>>8&255,d&255,255)},
ieS(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hBT(4294570461,4293910718,4284234270,u)
case 1:return C.hBT(4294635750,4293975240,t,4292912216)
case 2:w=C.fr1(s,4294505966,r)
C.bCA(w,14,16,p)
C.kO(w,8,9,464,836,u,1.2)
C.Dq(w,2,2,1,1,u,10)
C.Dq(w,478,2,-1,1,u,10)
C.Dq(w,2,852,1,-1,u,10)
C.Dq(w,478,852,-1,-1,u,10)
return w
case 3:return C.fr1(4294966515,4294373082,4289102906)
case 4:return C.i9l(C.fr1(4294376440,4293653998,4290287194))
case 5:w=C.fr1(4294965238,4294437098,4288444980)
C.bCA(w,14,16,4283043359)
C.kO(w,6,7,468,840,u,1)
C.kO(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,n,4294175448)
C.tl(v,n)
C.kO(v,24,24,432,806,4286209070,1)
C.a2v(v,12,12,468,12,o,3,20)
C.a2v(v,12,842,468,842,o,3,20)
C.a2v(v,12,12,12,842,o,3,20)
C.a2v(v,468,12,468,842,o,3,20)
return v
case 7:return C.i75(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,m,4293911504)
C.tl(v,m)
C.kO(v,28,28,424,798,l,1)
C.fAH(v,28,28,l,k)
C.fAH(v,452,28,l,k)
C.fAH(v,28,826,l,k)
C.fAH(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,j,4294111986)
C.tl(v,j)
C.kO(v,18,18,444,818,4292401368,0.7)
B.iZ(v,!0,C.fJ(p),0,13,0,853)
return v
case 10:return C.ibq(i,4294173372)
case 11:return C.icB(4294439140,4293449662)
case 12:return C.i6S(h,4294239432)
case 13:return C.ic0(4294244340,4293193448)
case 14:return C.ign(4294505710,4293780694)
case 15:return C.fpM(4294966259,4294439138,o,p,q)
case 16:return C.fpM(4294966776,4294178544,o,g,g)
case 17:return C.fpM(4294965493,4294504170,o,4286200650,q)
case 18:return C.fpM(4294966519,4294373862,o,p,p)
case 19:return C.iaw()
case 20:return C.iax()
case 21:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,h,4293976768)
C.tl(v,h)
C.bCA(v,14,16,p)
B.iZ(v,!0,C.fJ(u),4,475,4,9)
B.iZ(v,!0,C.fJ(u),4,475,844,849)
B.iZ(v,!0,C.fJ(u),4,9,4,849)
B.iZ(v,!0,C.fJ(u),470,475,4,849)
C.a2v(v,10,12,470,12,u,2,16)
C.a2v(v,10,842,470,842,u,2,16)
C.a2v(v,10,12,10,842,u,2,18)
C.a2v(v,470,12,470,842,u,2,18)
C.Dq(v,2,2,1,1,t,10)
C.Dq(v,478,2,-1,1,t,10)
C.Dq(v,2,852,1,-1,t,10)
C.Dq(v,478,852,-1,-1,t,10)
C.kO(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,s,4294438872)
C.tl(v,s)
C.kO(v,14,16,452,822,o,2.2)
C.kO(v,22,24,436,806,o,1)
C.hfQ(v,!1,!1,o,p,p,36,14,16)
C.l4(v,240,20,7,o,!0)
C.l4(v,240,834,7,o,!0)
C.l4(v,18,427,7,o,!0)
C.l4(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,i,4293910712)
C.tl(v,i)
B.iZ(v,!0,C.fJ(u),0,479,0,20)
B.iZ(v,!0,C.fJ(u),0,479,834,853)
B.iZ(v,!0,C.fJ(u),0,20,0,853)
B.iZ(v,!0,C.fJ(u),460,479,0,853)
B.iZ(v,!0,C.fJ(f),5,474,5,9)
B.iZ(v,!0,C.fJ(f),5,474,844,848)
B.iZ(v,!0,C.fJ(f),5,9,5,848)
B.iZ(v,!0,C.fJ(f),470,474,5,848)
C.kO(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.za(v,e,4294174404)
C.tl(v,e)
C.bCA(v,14,16,p)
B.iZ(v,!0,C.fJ(u),3,476,3,8)
B.iZ(v,!0,C.fJ(u),3,476,845,850)
B.iZ(v,!0,C.fJ(u),3,8,3,850)
B.iZ(v,!0,C.fJ(u),471,476,3,850)
C.kO(v,9,10,462,834,t,1)
C.kO(v,14,16,452,822,u,1.8)
C.l4(v,240,8,4,u,!0)
C.l4(v,240,846,4,u,!0)
C.l4(v,8,427,4,u,!0)
C.l4(v,472,427,4,u,!0)
C.l4(v,8,8,3,t,!0)
C.l4(v,472,8,3,t,!0)
C.l4(v,8,846,3,t,!0)
C.l4(v,472,846,3,t,!0)
return v}},
za(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.j.V(q*w+p*t),0,255)
u=A.o.D(A.j.V(o*w+n*t),0,255)
w=A.o.D(A.j.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l7(d,!1,A.dl,new B.MS(s),r,A.d6,1,0,w-1,k,k);++k}},
tl(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e3()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iw()
v=A.o.D(A.j.M(s.gb9(s))-3,0,255)
r=A.o.D(A.j.M(s.gbe())-3,0,255)
q=A.o.D(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kO(d,e,f,g,h,i,j){var w,v=null,u=C.fJ(i),t=e+g
B.l7(d,!0,A.dl,u,v,A.d6,j,e,t,f,f)
w=f+h
B.l7(d,!0,A.dl,u,v,A.d6,j,e,t,w,w)
B.l7(d,!0,A.dl,u,v,A.d6,j,e,e,f,w)
B.l7(d,!0,A.dl,u,v,A.d6,j,t,t,f,w)},
Dq(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.j.V(j*0.72),8,j-2)
B.l7(d,!0,A.dl,C.fJ(i),u,A.d6,2,e,e+g*j,f,f)
B.l7(d,!0,A.dl,C.fJ(i),u,A.d6,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l7(d,!0,A.dl,C.fJ(i),u,A.d6,1,w,e+g*t,v,v)
B.l7(d,!0,A.dl,C.fJ(i),u,A.d6,1,w,w,v,f+h*t)},
hBT(d,e,f,g){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.za(v,d,e)
C.tl(v,d)
B.iZ(v,!0,C.fJ(f),0,479,0,28)
B.iZ(v,!0,C.fJ(f),0,479,826,853)
B.iZ(v,!0,C.fJ(f),0,28,0,853)
B.iZ(v,!0,C.fJ(f),452,479,0,853)
C.kO(v,5,5,470,844,g,1.1)
C.kO(v,28,28,424,798,g,1.6)
C.Dq(v,2,2,1,1,g,11)
C.Dq(v,478,2,-1,1,g,11)
C.Dq(v,2,852,1,-1,g,11)
C.Dq(v,478,852,-1,-1,g,11)
return v},
fr1(d,e,f){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.za(v,d,e)
C.tl(v,d)
C.kO(v,14,16,452,822,f,1.6)
C.kO(v,20,22,440,810,f,0.8)
return v},
bCA(d,e,f,g){var w,v=C.fJ(g)
B.iZ(d,!0,v,0,479,0,f-1)
w=854-f
B.iZ(d,!0,v,0,479,w,853);--w
B.iZ(d,!0,v,0,e-1,f,w)
B.iZ(d,!0,v,480-e,479,f,w)},
i9l(d){var w,v,u=4291404327
C.bCA(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l4(d,w,8,3,u,!0)
C.l4(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l4(d,7,v,3,u,!0)
C.l4(d,473,v,3,u,!0)}return d},
fE0(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ju(e,f),new B.ju(e+g*n,f),new B.ju(e,f+h*n)],t)
B.a3f(d,C.fJ(m),s)
w=A.o.D(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ju(s,u),new B.ju(e+g*v,u),new B.ju(s,f+h*v)],t)
B.a3f(d,C.fJ(k),t)
t=A.j.V(n*0.39)
C.l4(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l4(d,e+g*t,f+h*3,4,k,!0)
C.l4(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l4(d,e+g*t,f,5,k,!0)
C.l4(d,e,f+h*t,5,k,!0)}},
hfQ(d,e,f,g,h,i,j,k,l){var w,v
C.fE0(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fE0(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fE0(d,k,v,1,-1,e,f,g,h,i,j)
C.fE0(d,w,v,-1,-1,e,f,g,h,i,j)},
a2v(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lp(d,!0,A.dl,new B.rv(p),null,A.d6,j,r,q)}},
fCS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l7(d,!0,A.dl,new B.rv(o),null,A.d6,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l7(d,!0,A.dl,new B.rv(o),null,A.d6,1.4,q,q,p,p+h*r)}},
i75(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.cc,0,A.eb,854,o,0,3,o,A.cc,480,!1)
C.za(n,d,e)
C.tl(n,d)
C.kO(n,20,20,440,814,f,1.2)
C.fCS(n,0,0,1,1,g)
C.fCS(n,480,0,-1,1,g)
C.fCS(n,0,854,1,-1,g)
C.fCS(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.j.V(240+24*r)
q=A.j.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l7(n,!0,A.dl,new B.rv(p),o,A.d6,1.2,240,r,60,q)}return n},
fAH(d,e,f,g,h){var w
C.fHN(d,!0,C.fJ(g),13,e,f)
C.fHN(d,!0,C.fJ(g),9,e,f)
w=B.a([new B.ju(e,f-4),new B.ju(e+4,f),new B.ju(e,f+4),new B.ju(e-4,f)],x.J)
B.a3f(d,C.fJ(h),w)},
l4(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ju(e,v),new B.ju(u,f),new B.ju(e,t),new B.ju(s,f)],x.J)
if(i){B.a3f(d,C.fJ(h),r)
return}B.l7(d,!0,A.dl,C.fJ(h),w,A.d6,1,e,u,v,f)
B.l7(d,!0,A.dl,C.fJ(h),w,A.d6,1,u,e,f,t)
B.l7(d,!0,A.dl,C.fJ(h),w,A.d6,1,e,s,t,f)
B.l7(d,!0,A.dl,C.fJ(h),w,A.d6,1,s,e,f,v)},
fpL(d,e,f,g,h,i,j){var w,v=B.a([new B.ju(e,f),new B.ju(e+g*28,f),new B.ju(e,f+h*28)],x.J)
B.a3f(d,C.fJ(i),v)
v=e+g*14
w=f+h*14
C.l4(d,v,w,6,j,!0)
C.l4(d,v,w,3,i,!0)},
fpM(d,e,f,g,h){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.za(v,d,e)
C.tl(v,d)
C.kO(v,18,18,444,818,f,2)
C.kO(v,26,26,428,802,f,0.9)
if(h!=null)B.iZ(v,!0,C.fJ(h),28,451,28,34)
C.fpL(v,18,18,1,1,g,f)
C.fpL(v,462,18,-1,1,g,f)
C.fpL(v,18,836,1,-1,g,f)
C.fpL(v,462,836,-1,-1,g,f)
return v},
iaw(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
C.za(r,u,4294240980)
C.tl(r,u)
C.kO(r,10,12,460,830,t,3.2)
C.kO(r,18,20,444,814,s,1.2)
C.kO(r,24,26,432,802,t,1.8)
C.hfQ(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l4(r,w,16,3,t,!0)
C.l4(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l4(r,16,w,3,t,!0)
C.l4(r,464,w,3,t,!0)}return r},
iax(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
C.za(p,s,4294373080)
C.tl(p,s)
C.kO(p,16,18,448,818,r,2.4)
C.kO(p,24,26,432,802,4286209044,1)
w=new C.fsm(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hfQ(p,!1,!0,r,q,q,34,16,18)
return p},
bDi(d,e,f,g,h,i){B.iZ(d,!0,C.fJ(i),e,e+g,f,f+h)},
bE9(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.j.V(v*l+u*m),0,255)
j=A.o.D(A.j.V(t*l+s*m),0,255)
l=A.o.D(A.j.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l7(d,!1,A.dl,new B.MS(i),null,A.d6,1,e,w,l,l)}},
ibp(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.aq(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l7(d,!1,A.dl,new B.rv(r),null,A.d6,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.aq(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l7(d,!1,A.dl,new B.rv(r),null,A.d6,1,t,t,f,s);++q}},
ibq(d,e){var w,v,u=null,t=B.hr(u,u,A.cc,0,A.eb,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.ibp(t,v,w,30,D.d79,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bDi(t,44,44,392,766,d)
C.bE9(t,44,44,392,766,d,e)
C.tl(t,d)
C.kO(t,44,44,392,766,4292128567,2.2)
C.kO(t,50,50,380,754,4279898632,0.8)
return t},
icA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l4(d,e,f,7,h,!0)
C.l4(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l7(d,!0,A.dl,C.fJ(h),o,A.d6,1.6,w,u,v,t)
B.l7(d,!0,A.dl,C.fJ(h),o,A.d6,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l7(d,!0,A.dl,new B.rv(p),o,A.d6,1.2,w,v,q,q)}break
default:B.l7(d,!0,A.dl,C.fJ(h),o,A.d6,1.5,e-8,e+8,f,f)
B.l7(d,!0,A.dl,C.fJ(h),o,A.d6,1.5,e,e,f-8,f+8)
B.lp(d,!0,A.dl,C.fJ(h),o,A.d6,2,e,f)}},
icB(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
B.iZ(r,!0,C.fJ(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.icA(r,u,v,w,4292391514)}C.bDi(r,46,46,388,762,d)
C.bE9(r,46,46,388,762,d,e)
C.tl(r,d)
C.kO(r,46,46,388,762,4291404327,1.8)
return r},
hx7(d,e,f,g){C.fHN(d,!0,C.fJ(g),16,e,f)
C.fHN(d,!0,C.fJ(g),11,e,f)
C.l4(d,e,f,6,g,!0)
B.l7(d,!0,A.dl,C.fJ(g),null,A.d6,1.3,e-14,e+14,f,f)
B.l7(d,!0,A.dl,C.fJ(g),null,A.d6,1.3,e,e,f-14,f+14)},
i6S(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
B.iZ(s,!0,C.fJ(4280948752),0,479,0,853)
B.iZ(s,!0,C.fJ(u),0,479,0,78)
B.iZ(s,!0,C.fJ(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hx7(s,w,39,t)
C.hx7(s,w,815,t)}C.bDi(s,38,92,404,670,d)
C.bE9(s,38,92,404,670,d,e)
C.tl(s,d)
C.kO(s,38,92,404,670,t,1.8)
C.kO(s,45,99,390,656,4287322667,0.8)
return s},
ic_(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ju(e,f),new B.ju(q-5,w),new B.ju(q,f-(18-Math.abs(r)*3)),new B.ju(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a3f(d,new B.rv(o),p)}B.lp(d,!0,A.dl,C.fJ(4292128567),null,A.d6,3,e,f)},
ic0(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
C.za(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l7(q,!0,A.dl,new B.rv(v),s,A.d6,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l7(q,!0,A.dl,new B.rv(u),s,A.d6,1.1,v,v,0,853)}B.iZ(q,!0,C.fJ(r),0,479,0,70)
B.iZ(q,!0,C.fJ(r),0,479,798,853)
for(t=0;t<5;++t)C.ic_(q,70+t*85,48,4292128567)
C.bDi(q,48,78,384,712,d)
C.bE9(q,48,78,384,712,d,e)
C.tl(q,d)
C.kO(q,48,78,384,712,4291404327,1.6)
return q},
ign(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
B.iZ(r,!0,C.fJ(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l4(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lp(r,!0,A.dl,new B.rv(u),t,A.d6,1,v,w)}C.bDi(r,40,40,400,774,d)
C.bE9(r,40,40,400,774,d,e)
C.tl(r,d)
C.kO(r,40,40,400,774,4291058750,2)
C.kO(r,48,48,384,758,s,0.8)
return r},
lf:function lf(d,e){this.a=d
this.b=e},
fSl:function fSl(d){this.a=d},
fSk:function fSk(d){this.a=d},
fsm:function fsm(d){this.a=d},
fT3(d){var w
switch(d.a){case"gazette":w="The NGMY Gazette"
break
case"chronicle":w="The NGMY Chronicle"
break
case"times":w="The NGMY Times"
break
case"daily":w="The NGMY Daily"
break
case"tabloid":w="The Big NGMY"
break
case"modern":w="NGMY Digest"
break
case"midnight":w="The Midnight NGMY"
break
default:w="The NGMY Herald"
break}return w},
ict(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
heh(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p7(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aP(0,Ak.aij(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
agR(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vX(null,""),$async$agR)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nm(n)
if(e==null)s=A.i6
else{r=C.ict(e)
s=B.a([new B.a1s(A.cV.gcu().aO(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.ri(t,d,s,"news",E.GM),$async$agR)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.M3(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agR,v)},
bFN(d){return C.ipN(d)},
ipN(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agR(r,null),$async$bFN)
case 7:q=f
p=C.heh(q)
if(p==null){u=d
w=1
break}o=d.aEY(p)
if(o.r.length===0||A.d.aN(o.r," ").length<A.d.aN(d.r," ").length*0.5){u=d
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
return B.i($async$bFN,v)},
hB6(d){var w,v=F.hh5(d)
v=B.aL(v,"book","newspaper")
if(F.a3A(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fX3(d,e,f,g){return C.irG(d,e,f,g)},
irG(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fX3=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fT3(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hF4()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agR('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hB6(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fX3)
case 3:r=m.heh(i)
if(r==null)throw B.W(y.S)
q=new C.Ag(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEY(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aN(t," ")
if(F.a3A(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3A(A.d.aN(t," "))==="sw"?C.bFN(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fX3,v)},
bFh(d,e,f,g,h){return C.inh(d,e,f,g,h)},
inh(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bFh=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aN(l,"\n")
l=C.hF4()
k=A.X.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agR('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hB6(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bFh)
case 3:p=j.heh(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aEY(B.a2(o,x.N,x.z))
m=A.X.aw(n.aj(),null)!==A.X.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3A(A.d.aN(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFN(n),$async$bFh)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9i(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFh,v)},
a9i:function a9i(d,e,f){this.a=d
this.b=e
this.c=f},
iuT(d,e){return B.a6(d,!1).ce(B.ed(new C.h3s(e),!0,null,x.H))},
h3s:function h3s(d){this.a=d},
Xa:function Xa(d,e){this.c=d
this.a=e},
aGd:function aGd(d,e,f,g,h,i,j,k){var _=this
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
eud:function eud(d){this.a=d},
euc:function euc(){},
eue:function eue(d){this.a=d},
eub:function eub(d,e){this.a=d
this.b=e},
euf:function euf(){},
etQ:function etQ(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
etY:function etY(d,e){this.a=d
this.b=e},
etZ:function etZ(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
etU:function etU(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu3:function eu3(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu2:function eu2(d,e){this.a=d
this.b=e},
eu7:function eu7(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu9:function eu9(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
eua:function eua(d){this.a=d},
etN:function etN(d,e){this.a=d
this.b=e},
fRV(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fRV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hyH){w=1
break}r=new C.fRW()
t=4
q=x.s
w=7
return B.b(B.iE(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fRV)
case 7:$.hyH=!0
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
return B.i($async$fRV,v)},
bFE(d){return A.DC[B.mw(d)-1]+", "+A.oS[B.bM(d)-1]+" "+B.bV(d)+", "+B.bD(d)},
ifv(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dzL[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hhu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.u(h,new B.Y(v,new C.fQc(),B.U(v).k("Y<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.I)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fQe(j,h)
n=new C.fQd(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j0(o.$1(l)))
j.a+=l}return u},
he0(d,e){var w=new C.frV()
return A.d.cF(e,0,new C.frT(w))>=A.d.cF(d,0,new C.frU(w))},
hvN(d){var w,v,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bu())
return u},
Ag:function Ag(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjT:function cjT(d){this.a=d},
cjR:function cjR(){},
cjS:function cjS(){},
tQ:function tQ(d,e){this.a=d
this.b=e},
Cd:function Cd(d,e){this.a=d
this.b=e},
lA:function lA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fRW:function fRW(){},
fQc:function fQc(){},
fQe:function fQe(d,e){this.a=d
this.b=e},
fQd:function fQd(d,e,f){this.a=d
this.b=e
this.c=f},
frV:function frV(){},
frW:function frW(){},
frT:function frT(d){this.a=d},
frU:function frU(d){this.a=d},
b3o:function b3o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjU:function cjU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjV:function cjV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjW:function cjW(d){this.a=d},
bf2:function bf2(d){this.a=d},
bf1:function bf1(d,e){this.b=d
this.a=e},
bx4:function bx4(d){this.a=d},
bbt:function bbt(d,e){this.b=d
this.a=e},
buy:function buy(d,e){this.b=d
this.a=e},
hHn(d,e){return B.a6(d,!1).ce(B.ed(new C.h3v(e,null),!0,null,x.E))},
h3v:function h3v(d,e){this.a=d
this.b=e},
Xb:function Xb(d,e,f){this.c=d
this.d=e
this.a=f},
aGg:function aGg(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ev_:function ev_(){},
ev0:function ev0(d){this.a=d},
euZ:function euZ(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
euO:function euO(d){this.a=d},
euU:function euU(d){this.a=d},
euV:function euV(d,e){this.a=d
this.b=e},
euS:function euS(d){this.a=d},
euT:function euT(d,e,f){this.a=d
this.b=e
this.c=f},
euP:function euP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euW:function euW(d,e){this.a=d
this.b=e},
euR:function euR(d,e){this.a=d
this.b=e},
euX:function euX(d){this.a=d},
euQ:function euQ(d,e){this.a=d
this.b=e},
euY:function euY(d,e){this.a=d
this.b=e},
beA:function beA(d,e,f){this.b=d
this.c=e
this.a=f},
iuZ(d){return B.a6(d,!1).ce(B.ed(new C.h3L(),!0,null,x.I))},
bD2(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hfv(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h3L:function h3L(){},
a1j:function a1j(d){this.a=d},
oZ:function oZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHH:function aHH(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a0=_.bb=_.bn=_.y2=0
_.b8=null
_.b6=0.25
_.bg=null
_.bK=0.5
_.aQ=1
_.c8=_.bH=_.bm=0
_.cP=_.c5=!1
_.c=_.a=null},
f49:function f49(d){this.a=d},
f31:function f31(d,e){this.a=d
this.b=e},
f3p:function f3p(d,e){this.a=d
this.b=e},
f3z:function f3z(d){this.a=d},
f2L:function f2L(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2J:function f2J(d){this.a=d},
f2K:function f2K(d){this.a=d},
f3i:function f3i(d,e){this.a=d
this.b=e},
f3j:function f3j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3v:function f3v(d,e,f){this.a=d
this.b=e
this.c=f},
f3u:function f3u(d,e){this.a=d
this.b=e},
f3w:function f3w(d,e){this.a=d
this.b=e},
f3t:function f3t(d,e){this.a=d
this.b=e},
f3y:function f3y(d,e,f){this.a=d
this.b=e
this.c=f},
f3x:function f3x(d,e){this.a=d
this.b=e},
f2B:function f2B(d){this.a=d},
f2C:function f2C(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2A:function f2A(){},
f2E:function f2E(d,e){this.a=d
this.b=e},
f2z:function f2z(d,e){this.a=d
this.b=e},
f2G:function f2G(){},
f2F:function f2F(d,e){this.a=d
this.b=e},
f2y:function f2y(d,e){this.a=d
this.b=e},
f2v:function f2v(d,e){this.a=d
this.b=e},
f2H:function f2H(d){this.a=d},
f2x:function f2x(d,e){this.a=d
this.b=e},
f2I:function f2I(d){this.a=d},
f2w:function f2w(d,e){this.a=d
this.b=e},
f3Z:function f3Z(d,e){this.a=d
this.b=e},
f45:function f45(d){this.a=d},
f46:function f46(d,e){this.a=d
this.b=e},
f47:function f47(){},
f4_:function f4_(d,e){this.a=d
this.b=e},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
f40:function f40(d,e){this.a=d
this.b=e},
f3X:function f3X(d,e){this.a=d
this.b=e},
f41:function f41(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3W:function f3W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f42:function f42(d){this.a=d},
f43:function f43(d,e){this.a=d
this.b=e},
f44:function f44(d){this.a=d},
f3V:function f3V(d){this.a=d},
f3I:function f3I(d){this.a=d},
f3J:function f3J(d){this.a=d},
f3H:function f3H(d,e){this.a=d
this.b=e},
f3C:function f3C(d,e){this.a=d
this.b=e},
f3K:function f3K(d){this.a=d},
f3N:function f3N(d){this.a=d},
f3G:function f3G(d){this.a=d},
f3O:function f3O(d){this.a=d},
f3P:function f3P(d){this.a=d},
f3Q:function f3Q(d){this.a=d},
f3R:function f3R(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3S:function f3S(d){this.a=d},
f3E:function f3E(d){this.a=d},
f3T:function f3T(d,e){this.a=d
this.b=e},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3U:function f3U(d){this.a=d},
f3L:function f3L(d){this.a=d},
f3M:function f3M(d){this.a=d},
f3m:function f3m(d){this.a=d},
f3l:function f3l(d){this.a=d},
f3n:function f3n(d,e){this.a=d
this.b=e},
f3k:function f3k(d,e){this.a=d
this.b=e},
f3o:function f3o(d){this.a=d},
f3e:function f3e(d){this.a=d},
f3d:function f3d(d){this.a=d},
f3f:function f3f(d){this.a=d},
f3c:function f3c(d){this.a=d},
f3g:function f3g(d,e){this.a=d
this.b=e},
f3b:function f3b(d,e){this.a=d
this.b=e},
f3a:function f3a(d,e){this.a=d
this.b=e},
f2T:function f2T(d){this.a=d},
f2U:function f2U(d){this.a=d},
f2V:function f2V(d){this.a=d},
f2W:function f2W(d){this.a=d},
f2X:function f2X(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2Z:function f2Z(d){this.a=d},
f3_:function f3_(d){this.a=d},
f30:function f30(d){this.a=d},
f2e:function f2e(d){this.a=d},
f2f:function f2f(d){this.a=d},
f2g:function f2g(d){this.a=d},
f2h:function f2h(d){this.a=d},
f2i:function f2i(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2j:function f2j(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2N:function f2N(d){this.a=d},
f2O:function f2O(d){this.a=d},
f2P:function f2P(d){this.a=d},
f2Q:function f2Q(d){this.a=d},
f2R:function f2R(d){this.a=d},
f2o:function f2o(d){this.a=d},
f2p:function f2p(d){this.a=d},
f2q:function f2q(d){this.a=d},
f2r:function f2r(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2l:function f2l(d){this.a=d},
f3h:function f3h(d){this.a=d},
f39:function f39(d){this.a=d},
f35:function f35(d){this.a=d},
f34:function f34(d){this.a=d},
f36:function f36(d,e){this.a=d
this.b=e},
f33:function f33(d,e){this.a=d
this.b=e},
f37:function f37(d,e){this.a=d
this.b=e},
f32:function f32(d,e){this.a=d
this.b=e},
f38:function f38(d){this.a=d},
f3s:function f3s(d){this.a=d},
f3r:function f3r(d,e,f){this.a=d
this.b=e
this.c=f},
f3q:function f3q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3B:function f3B(d,e){this.a=d
this.b=e},
f3A:function f3A(d,e){this.a=d
this.b=e},
f2S:function f2S(d){this.a=d},
f48:function f48(d){this.a=d},
bib:function bib(d,e){this.b=d
this.a=e},
ipY(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ipZ(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
t=w.a+=A.a.aB(d,v,n)
p=m[r].b
p=A.a.aB(d,n,p.index+p[0].length)
n=B.ag("[*~^]",!0,!1,!1,!1)
o=B.aL(p,n,"")
switch(s){case 1:n="*"
break
case 2:n="^"
break
case-1:n="~"
break
default:n=""
break}t+=n
w.a=t
t+=o
w.a=t
n=t+n
w.a=n
t=m[r].b
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bDE(){var w=$.bCK,v=$.RC
$.RC=v+1
return w+"_"+v},
io(d,e,f,g,h,i,j){return C.ev(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,C.bDE(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
op(d,e,f,g){var w=f*9
return C.io(D.f2,d-f/2,e-w/32,f,w/16,g,0)},
i8P(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCK
o=$.RC
$.RC=o+1
w.push(new C.eS(p+"_"+o,D.fj,0,q,1,0.0016,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCK
o=$.RC
$.RC=o+1
w.push(new C.eS(p+"_"+o,D.fj,n,0,0.004,1,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.op(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.op(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.io(D.bm,0.08,0.08,0.5,0.003,v,0),C.io(D.bm,0.58,0.08,0.004,0.06,v,0),C.io(D.bm,0.58,0.14,0.34,0.003,v,0),C.io(D.bm,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.io(D.bm,0.08,0.8,0.004,0.14,t,0),C.io(D.bm,0.08,0.94,0.6,0.003,t,0),C.op(0.58,0.08,0.05,e),C.op(0.92,0.22,0.05,e),C.op(0.08,0.8,0.05,f),C.op(0.68,0.94,0.05,f),C.op(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.io(D.lt,0.62,0.04,0.34,0.2,w|855638016,0.2),C.io(D.lt,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.io(D.lt,0.7,0.8,0.22,0.12,w|1140850688,0),C.io(D.lt,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.op(0.5,0.5,1.5,w|335544320),C.op(0.5,0.5,1.15,w|402653184),C.op(0.5,0.5,0.8,v|436207616),C.op(0.95,0.05,0.4,v|855638016),C.op(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.op(0.85,0.08,0.7,w|1140850688),C.op(0.1,0.35,0.5,v|855638016),C.op(0.9,0.62,0.55,v|771751936),C.op(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.io(D.bm,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.io(D.bm,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.io(D.bm,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.io(D.bm,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.op(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.op(0.5,0.2,0.65,(w|3422552064)>>>0),C.op(0.5,0.2,0.95,w|855638016),C.io(D.bm,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.io(D.bm,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.io(D.ke,-0.1,0.78,0.7,0.2,w|1426063360,0),C.io(D.ke,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.io(D.ke,0.15,0.86,0.6,0.14,1712265002,0),C.op(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d8N[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCK
l=$.RC
$.RC=l+1
w.push(new C.eS(o+"_"+l,D.fj,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.f2,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.op(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.io(D.ke,0.35,-0.1,0.3,0.62,w|855638016,0),C.io(D.ke,0.05,-0.1,0.3,0.55,v,-0.5),C.io(D.ke,0.65,-0.1,0.3,0.55,v,0.5),C.op(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.io(D.bm,0.06,0.04,0.88,0.002,e,0),C.io(D.bm,0.06,0.96,0.88,0.002,e,0),C.io(D.bm,0.06,0.04,0.004,0.92,e,0),C.io(D.bm,0.936,0.04,0.004,0.92,e,0),C.io(D.bm,0.09,0.07,0.82,0.001,w,0),C.io(D.bm,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.io(D.kf,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.io(D.kf,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.io(D.kf,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.io(D.bm,0,0,0.3,0.09,w|1140850688,0),C.io(D.bm,0.7,0.9,0.3,0.1,v|1426063360,0),C.io(D.bm,0.82,0.04,0.12,0.07,w|771751936,0),C.io(D.bm,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.io(D.f2,0.62,0.02,0.5,0.16,v,0.6),C.io(D.f2,0.78,0.12,0.4,0.12,u,0.9),C.io(D.f2,-0.12,0.8,0.5,0.16,u,-0.6),C.io(D.f2,-0.05,0.9,0.4,0.12,v,-0.9),C.op(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.io(D.bm,0.09,0.12,0.16,0.006,e,0),C.io(D.bm,0.05,0.03,0.9,0.001,w,0),C.io(D.bm,0.05,0.97,0.9,0.001,w,0)],x.u)}},
imj(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCK=j
$.RC=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fNB()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ev(A.bp,!1,n,A.aH,"ngmy_quote_background",m,24,A.bs,A.a8,"",1,C.bDE(),g,"","",0,!1,"",0,D.bm,l,2,"",0,0,"",D.cu,D.lV,1,0,0))
if(a9)A.d.u(q,C.i8P(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ipY(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fNA(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cK,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.ev(A.bp,!1,n,A.aH,"ngmy_quote_logo",m,24,A.bs,A.a8,a1,a3*9/16,C.bDE(),a0,"","",0,!1,a2,0,D.bm,l,2,"",0,0,"",D.cu,D.lV,a3,a4,a5))
return C.t1(s,r,0,0,q,j+"_slide",D.r3,"","","",D.ds)},
t0:function t0(d,e){this.a=d
this.b=e},
mu:function mu(d,e,f,g,h,i,j,k,l,m){var _=this
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
fNB:function fNB(){},
fNA:function fNA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hZo(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.clo(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ah(u,t,s,B.w(w==null?"":w))},
fVq(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fVq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hz4){w=1
break}$.hz4=!0
t=4
w=7
return B.b(B.aA(),$async$fVq)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aP(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i4(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hZo(m)
if(l!=null)J.c5(n,l)}$.Dr.c3(0,B.w(o.a),new C.fVr(n))}C.hf9()
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
return B.i($async$fVq,v)},
hf9(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dq($.Dr,$.Dr.r,$.Dr.e);w.C();)J.nU(w.d,new C.fzY(v))
$.Dr.bq($.Dr,new C.fzZ())},
aQp(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQp=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQp)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cc($.Dr,B.a4($.Dr).k("cc<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c5(p,B.J(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aD("String","ngmy_slides_ai_history_v1",A.X.aw(n,null)),$async$aQp)
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
return B.i($async$aQp,v)},
iqB(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hf9()
w=$.Dr.c3(0,d,new C.fVt())
v=Date.now()
u=B.C(e,B.a4(e).k("ci.E"))
J.n2(w,0,new C.Ah(new B.V(v,0,!1),f,u,g))
C.aQp()},
iqy(d){var w,v=$.Dr.h(0,d)
if(v==null||J.ct(v))return
w=J.cD(v)
w.cH(v,0)
if(w.gau(v))$.Dr.W(0,d)
C.aQp()},
Ah:function Ah(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clo:function clo(){},
fVr:function fVr(d){this.a=d},
fzY:function fzY(d){this.a=d},
fzZ:function fzZ(){},
fVt:function fVt(){},
iqD(d){return A.d.dL(D.x8,new C.fVw(d),new C.fVx())},
hZm(d){var w
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
hZl(d){var w
switch(d.a){case 0:w=D.aqe
break
case 1:w=A.zt
break
case 2:w=A.Q_
break
case 3:w=I.apV
break
case 4:w=A.aqJ
break
case 5:w=A.mm
break
default:w=null}return w},
ic5(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.S4[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.S4[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hZn(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
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
o.push(q)}return A.X.aw(B.J(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
iqz(d,e,f,g,h){var w=new B.N(D.x8,new C.fVp(),x.eC).aN(0,", "),v=""+d,u=C.hEX(h),t=F.fP_(h),s=C.hAL(g),r=e.q(0,D.Jw)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jx)?'- New slides get an "icon3d" from: '+A.d.aN(D.S4,", ")+".\n":"",p=e.q(0,D.Ec)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iqA(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.x8,new C.fVs(),x.eC).aN(0,", "),p=new B.fg("")
if(e.q(0,D.Jw)){p.a=s
w=s}else w=""
if(e.q(0,D.Jx))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aN(D.S4,", ")+".\n")
if(e.q(0,D.Ec))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hEX(d)
v=F.fP_(d)
u=C.hAL(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.v(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aiy(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DQ(a3,"{"),a5=J.h79(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mo(a3,a4,a5+1)
try{w=A.X.aP(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fTm(),m).bY(0,new C.fTn())
k=B.C(l,l.$ti.k("M.E"))}else k=B.a([],n)
s=k
l=J.t(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.t(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.t(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.t(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.t(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.t(t,"icon3d")
f=C.ic5(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a9q(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fp(u).b:q))
p=A.d.aV(D.x8,new C.fTo(r))?r:a7
o=C.fzd(J.t(w,"logo_frame"),D.Dy)
n=C.fzd(J.t(w,"logo_ring"),D.Ds)
m=C.fzd(J.t(w,"photo_frame"),D.Dy)
l=C.fzd(J.t(w,"photo_ring"),D.Ds)
return new C.at6(q,p,u,o,n,m,l)}catch(a0){return a1}},
a35(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hE2(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.Ed),f7=f6?C.i59():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e3()
v.cY(f7.w+1)
u=f7.a
t=B.br(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.oc("luxe",u.a,A.mm,t,u.e,u.f,B.a([s,u.d,s],x.t),D.ds)
w=s}if(w==null)w=C.iqD(f9.b)
r=g2.q(0,D.a8I)||f6
q=g2.q(0,D.Jw)
p=g2.q(0,D.U4)
o=new C.fNF()
n=B.a([],x.g)
m=new C.fNI(o,w,r)
l=new C.fNH(o,r)
k=new C.fNG(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fNE(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.das[b8]
c0=D.d9j[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fes.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.f2,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.f2,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.ne,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r4,500,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.U1
break A}if("section"===d2){c1.push(l.$8$fx$key(D.f2,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lt,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bm,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ea
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.f2,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.ne,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cK,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r4,500,f2,f0))
d3=D.nd
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.f2,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bm,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vs:D.cu
c1.push(new C.eS(b4,D.a8G,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bs,A.aH,4279310375,A.bp,e4,D.bm,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.nd
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.f2,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.ne,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r4,450,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.U1
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.f2,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.f2,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bm,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bm,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aN(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ju,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.nd}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.ds,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i6R(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dCh[A.o.F(b1,6)]:s
n.push(new C.m4(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cs(e4,e4,e4,e4,D.E9,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fQ2(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fQ2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.Ec)
n=e.q(0,D.Jx)
if(!o&&!n){u=D.a7B
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fQ5(o,s[r],n,$.iaN,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iE(t,x.e),$async$fQ2)
case 3:q=m.aT(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQ2,v)},
fP2(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fP2=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iqA(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPI(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fP2)
case 3:u=s.aQ3(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fP2,v)},
bFi(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bFi=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.iqB(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aiy(i,"colorful")
t=C.iqz(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPI(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i6),$async$bFi)
case 3:u=o.aQ3(m,f,h,g,D.egR,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFi,v)},
aPI(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPI=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vX(null,""),$async$aPI)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nm(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.ri(t,d,g,"slides",null),$async$aPI)
case 7:q=i
p=q.b
if(p!=null){o=C.aiy(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.M3(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPI,v)},
aQ3(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aQ3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.Ec)||e.q(0,D.Jx)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d0(e,x.Q)
t.W(0,D.Ec)}w=6
return B.b(C.fQ2(d,t),$async$aQ3)
case 6:s=k
w=4
break
case 5:s=D.a7B
case 4:t=d.c
w=A.d.aV(t,new C.frP())?7:9
break
case 7:r=$.hFR
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dN(r,x.aP),$async$aQ3)
case 10:q=k
p=q!=null?A.X.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hE2(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hZn(new C.at6(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.frQ(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("kb<ci.E,n>")
t=B.C(new B.kb(e,new C.frR(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.U4)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ3,v)},
hid(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a6l[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
iv3(d){return B.bU(A.L,null,new C.h3X(),d,!0,!0,!0,null,!1,!1,x.I)},
i5N(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cV.gcu().aO(d)},
iv2(d,e,f){return B.bU(A.L,null,new C.h3W(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hie(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hif(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fzd(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fze(w))?w:""},
hAL(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hFP(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aiy(a1==null?"":a1,a0),a3=C.aiy(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.Z
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.I)(t),++p){o=B.nA(new B.Y(r,new C.fVy(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("M.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.y(m.b,l.b),new B.y(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.y(j[h],i[h]))
k.push(new B.y(m.e,l.e))
g=B.C(new B.Y(k,new C.fVz(),v),r)
A.d.aZ(g,new C.fVA())
if(g.length===0)continue
f=new C.fVB(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.I)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iqU(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aLW
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eiK
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eiL
return null},
hAm(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cC(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iqE(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oX
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.I)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.I)(q),++o){n=q[o]
if(n.b!==D.d1)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.D(m*0.85,10,120)
break
case 1:j=A.j.D(m*1.15,10,120)
if(C.hAm(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hAm(n,i,v,u))if(n.w>10){f=h+1
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
iqC(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aiy(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a6l[r]
if(q.b===s)w.I(0,q)}}v=C.hie(e)
u=C.hif(e)
p=C.hE2(n,D.a7B,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fVu(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("kb<ci.E,n>")
o=B.C(new B.kb(w,new C.fVv(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.U4)
return p},
iuQ(d,e,f){return B.bU(A.L,null,new C.h39(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i59(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e3()
s.cY(t)
w=D.cOc[s.az(10)]
v=new C.eqE(s)
u=x.N
return new C.eqD(w,s.az(4),J.fp(v.$1$2(D.dfm,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dxi,2+s.az(2),u),v.$1$2(D.dpD,2,u),v.$1$2(D.dAG,4,x.fP),t)},
i6R(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e3()
a1.cY(a5.w+a3*13)
w=new C.fnR(a4)
v=new C.fnT(a4,d)
u=new C.fnS(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.I)(a2),++q){p=a2[q]
if(p.b===D.d1){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.f2,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a35(a0,52),"lux_spot",a5.xg(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bm,0,0,1,1,0,"lux_back",a5.xg(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bm,0,0,1,1,0,"lux_back2",a5.aHw(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.022,0.038,0.956,0.924,0,g,a5.xg(0,f),D.ds,150,C.a35(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.018,0.032,0.964,0.936,0,g,a5.xg(0,f),D.ds,120,C.a35(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.ds,260,C.a35(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bm,0,0,1,1,0,"lux_filigree",a5.xg(0,"filigree"),D.ds,200))
break
default:a2.push(w.$10$anim$delay(D.bm,0.08,0.06,0.84,0.004,C.a35(a0,208),"lux_rule",a5.aHw(0,"shimmer",r),D.vr,150))
a2.push(w.$10$anim$delay(D.bm,0.08,0.936,0.84,0.004,C.a35(a0,144),"lux_rule2","",D.Ju,220))}l=!A.d.aV(a2,new C.fnQ())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xg(0,"crest"),350))
else{o=a1.h3()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xg(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a35(r,242)
j=a5.xg(0,"orbit")
i=s===D.bm?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r4,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.f2,t-0.007,0.9495,0.014,0.025,C.a35(r,242),"lux_g2",a5.xg(0,"orbit"),D.r4,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){h=t[q]
a2.push(w.$8(D.bm,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bm,0,0,1,1,0,"lux_velvet",a5.xg(0,"velvet")))},
oc:function oc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fVw:function fVw(d){this.a=d},
fVx:function fVx(){},
wB:function wB(d,e){this.a=d
this.b=e},
a9q:function a9q(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
at6:function at6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fVp:function fVp(){},
fVs:function fVs(){},
fTm:function fTm(){},
fTn:function fTn(){},
fTo:function fTo(d){this.a=d},
fNF:function fNF(){},
fNI:function fNI(d,e,f){this.a=d
this.b=e
this.c=f},
fNH:function fNH(d,e){this.a=d
this.b=e},
fNG:function fNG(d,e){this.a=d
this.b=e},
fNE:function fNE(d){this.a=d},
fQ5:function fQ5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQ3:function fQ3(d){this.a=d},
fQ4:function fQ4(d){this.a=d},
frP:function frP(){},
frQ:function frQ(){},
frR:function frR(){},
h3X:function h3X(){},
a1Q:function a1Q(d){this.a=d},
aJD:function aJD(d,e,f,g,h){var _=this
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
faw:function faw(d,e,f){this.a=d
this.b=e
this.c=f},
fax:function fax(d,e){this.a=d
this.b=e},
fau:function fau(d,e){this.a=d
this.b=e},
fav:function fav(d,e){this.a=d
this.b=e},
fat:function fat(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fao:function fao(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fas:function fas(d,e){this.a=d
this.b=e},
fan:function fan(d,e){this.a=d
this.b=e},
far:function far(d,e){this.a=d
this.b=e},
fam:function fam(d,e){this.a=d
this.b=e},
fap:function fap(d){this.a=d},
faq:function faq(d,e){this.a=d
this.b=e},
fac:function fac(d,e){this.a=d
this.b=e},
fad:function fad(d,e){this.a=d
this.b=e},
faf:function faf(d){this.a=d},
fag:function fag(d){this.a=d},
fah:function fah(d){this.a=d},
fai:function fai(d){this.a=d},
fae:function fae(d,e){this.a=d
this.b=e},
faj:function faj(d,e){this.a=d
this.b=e},
faK:function faK(d){this.a=d},
faL:function faL(d){this.a=d},
faJ:function faJ(d){this.a=d},
faM:function faM(d){this.a=d},
faI:function faI(d){this.a=d},
faO:function faO(d){this.a=d},
faH:function faH(d,e){this.a=d
this.b=e},
faP:function faP(d){this.a=d},
faG:function faG(d,e){this.a=d
this.b=e},
faQ:function faQ(d){this.a=d},
faF:function faF(d){this.a=d},
faR:function faR(d){this.a=d},
faE:function faE(d,e){this.a=d
this.b=e},
faS:function faS(d){this.a=d},
faD:function faD(d,e){this.a=d
this.b=e},
faT:function faT(d){this.a=d},
faC:function faC(d){this.a=d},
faU:function faU(d,e){this.a=d
this.b=e},
faB:function faB(d,e){this.a=d
this.b=e},
faV:function faV(d){this.a=d},
faN:function faN(d){this.a=d},
faA:function faA(d,e){this.a=d
this.b=e},
fak:function fak(d,e,f){this.a=d
this.b=e
this.c=f},
fal:function fal(d,e,f){this.a=d
this.b=e
this.c=f},
faz:function faz(d,e){this.a=d
this.b=e},
fay:function fay(d,e){this.a=d
this.b=e},
h3W:function h3W(d,e){this.a=d
this.b=e},
a1P:function a1P(d,e,f){this.c=d
this.d=e
this.a=f},
aJC:function aJC(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
fa5:function fa5(d){this.a=d},
fa6:function fa6(d){this.a=d},
fa7:function fa7(d,e){this.a=d
this.b=e},
fa8:function fa8(d){this.a=d},
fa9:function fa9(d){this.a=d},
fa4:function fa4(d,e){this.a=d
this.b=e},
faa:function faa(d,e){this.a=d
this.b=e},
fab:function fab(d,e){this.a=d
this.b=e},
fze:function fze(d){this.a=d},
b3N:function b3N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG7:function aG7(d,e,f){this.c=d
this.d=e
this.a=f},
bn_:function bn_(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqG:function eqG(d){this.a=d},
eqF:function eqF(){},
bks:function bks(d,e){this.b=d
this.a=e},
fVy:function fVy(d){this.a=d},
fVz:function fVz(){},
fVA:function fVA(){},
fVB:function fVB(d){this.a=d},
atE:function atE(d,e){this.a=d
this.b=e},
fVu:function fVu(){},
fVv:function fVv(){},
h39:function h39(d,e){this.a=d
this.b=e},
a0d:function a0d(d,e,f){this.c=d
this.d=e
this.a=f},
aDC:function aDC(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dtm:function dtm(d){this.a=d},
dtn:function dtn(d){this.a=d},
dto:function dto(d,e){this.a=d
this.b=e},
dtr:function dtr(d){this.a=d},
dts:function dts(d,e){this.a=d
this.b=e},
dtq:function dtq(d,e){this.a=d
this.b=e},
dtt:function dtt(d){this.a=d},
dtp:function dtp(d,e){this.a=d
this.b=e},
bvG:function bvG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eqD:function eqD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eqE:function eqE(d){this.a=d},
fnR:function fnR(d){this.a=d},
fnT:function fnT(d,e){this.a=d
this.b=e},
fnS:function fnS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnQ:function fnQ(){},
aOh:function aOh(){},
hh2(d){var w,v,u
try{w=A.X.aP(0,d,null)
if(x.f.b(w)){v=B.wu(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b3J:function b3J(d,e,f){this.c=d
this.d=e
this.a=f},
boA:function boA(d,e){this.c=d
this.a=e},
imN(d){return A.d.dL(D.Iv,new C.fOM(d),new C.fON())},
imO(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Iv,new C.fOO(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k2("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lx:function lx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fOM:function fOM(d){this.a=d},
fON:function fON(){},
fOO:function fOO(d){this.a=d},
nc(d,e,f,g,h){return new C.Fy(f,g,d)},
i8g(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fqb(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.Lp
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.ev(A.bp,!1,4279310375,A.aH,"",d,24,A.bs,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
hDQ(d,e){var w
C.i8g(d)
w=A.d.dL($.bHj(),new C.fMC(e),new C.fMD())
$.Lp=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lp=""}d.z=B.br(d.z,!0,x.F)},
Fy:function Fy(d,e,f){this.a=d
this.b=e
this.e=f},
fqb:function fqb(){},
fV0:function fV0(){},
fV1:function fV1(){},
fV2:function fV2(){},
fVd:function fVd(){},
fVi:function fVi(){},
fVj:function fVj(){},
fVk:function fVk(){},
fVl:function fVl(){},
fVm:function fVm(){},
fVn:function fVn(){},
fVo:function fVo(){},
fV3:function fV3(){},
fV4:function fV4(){},
fV5:function fV5(){},
fV6:function fV6(){},
fV7:function fV7(){},
fV8:function fV8(){},
fV9:function fV9(){},
fVa:function fVa(){},
fVb:function fVb(){},
fVc:function fVc(){},
fVe:function fVe(){},
fVf:function fVf(){},
fVg:function fVg(){},
fVh:function fVh(){},
fMC:function fMC(d){this.a=d},
fMD:function fMD(){},
j8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ev(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bm,4280172719,2,m,n,0,"",o,D.d1,p,q,r)},
DI(d,e,f,g,h,i,j,k,l){return C.ev(A.bp,!1,4279310375,A.aH,"",d,24,A.bs,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
bG2(){var w=new B.V(Date.now(),0,!1)
return A.iV[B.bM(w)-1]+" "+B.bV(w)+", "+B.bD(w)},
ey:function ey(d,e,f){this.a=d
this.b=e
this.c=f},
bDo(d){return new B.j4((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
idP(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aoy(A.cM.aO(A.d.gal(d.split(","))))
return w}catch(v){return null}},
idT(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fyx(),x.dv).aN(0,"\n")},
idS(d){switch(d.a){case 2:return A.o_
case 1:case 5:return A.fpU
default:return A.Vt}},
idM(d){switch(d.a){case 2:return A.vZ
case 1:case 5:return A.XA
default:return A.ae0}},
idQ(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bDo(u),q=(s&255)===0?v:C.bDo(d.ch),p=A.j.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nW(q,p,A.lb)
w=new B.q2(t,t,t,t)}switch(d.ax.a){case 1:return B.lU(v,v,v,new B.kX(r,w,v,A.afj,v),v,v,v,v)
case 4:return u?new B.fY(v,v,v):B.xG(B.lU(v,v,q,v,p+0.4,v,v,v))
default:return B.lU(v,v,v,new B.kX(r,w,B.w4(4),A.ib,v),v,v,v,v)}},
idO(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fj?0.4:12,g=A.j.D(d.e*e,h,e),f=A.j.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.idM(d.as)
v=A.j.D(d.w*(e/960),3,96)
u=C.idT(d)
t=C.bDo(d.Q)
s=d.x.a>=700?A.eD:A.wH
r=d.y===A.cK?A.z5:A.aoG
q=d.z
p=new B.DU(w,l,l,B.fe(u,l,l,l,B.hf(l,t,1===q.a?A.aVv:A.aVu,l,l,l,l,l,l,A.dH,l,l,v,r,s,l,!0,l,l,l,l),C.idS(d.as)))
break
case 1:case 4:o=C.idP(d.at)
n=i===D.lV&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xG(B.fe(w,l,l,l,B.hf(l,A.tF,l,l,l,l,l,l,l,A.dH,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IS(o,n?A.aff:A.Y1,l,l)
break
case 3:w=new B.nW(A.JR,1,A.lb)
u=B.w4(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lU(A.vZ,B.fe(t,l,l,l,B.hf(l,D.exc,l,l,l,l,l,l,l,A.dH,l,l,11,l,A.eD,l,!0,l,l,l,l),A.o_),l,new B.kX(E.aNn,new B.q2(w,w,w,w),u,A.ib,l),l,l,l,l)
break
case 2:p=C.idQ(d,e)
break
case 5:p=C.idN(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hv1(-w,p)
w=i===D.d1
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.aut(m/255,p)}if(w)return new F.wG(k,l,j,l,new B.TG(new B.kW(g,g,f,1/0),p))
if(i===D.ls){i=new B.nW(A.JR,1,A.lb)
i=B.lU(A.vZ,p,l,new B.kX(A.pQ,new B.q2(i,i,i,i),B.w4(4),A.ib,l),l,l,D.bI2,l)}else i=p
return new F.wG(k,l,j,l,new B.fY(g,f,i))},
idR(d,e,f,g){var w,v=null,u=C.bDo(d.e),t=d.f
t=B.a([F.htD(t!=null?B.lU(v,v,v,new B.kX(v,v,v,A.ib,new B.aZd(E.XD,A.adX,B.a([u,C.bDo(t)],x.cR),v)),v,v,v,v):B.lU(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.u(t,new B.N(w,new C.fyw(f,g),B.U(w).k("N<1,fk>")))
return F.cAJ(t)},
hih(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hih=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5z(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){p=t[q]
o=new B.XY(A.xh,A.JO,D.bJe,null,null,null,!1,null)
o=new B.Cx(o,new C.fVH(607,787,p,d))
o.Nm(n,null)
r.push(o)}u=n.jI(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hih,v)},
idN(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hh2(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galg()
if(h==null)h=A.aCw
j=B.u3(4279308564)
w=B.w4(18)
v=new B.nW(B.u3(4287531653),3,A.lb)
u=i.length===0?"My links":i
u=B.a([B.xG(B.fe(u,m,m,m,B.hf(m,A.pQ,m,m,m,m,m,m,m,A.dH,m,m,12,m,A.eD,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xG(B.fe(A.a.i(l.c),m,m,m,D.fxG,m)))
u.push(new B.fY(m,8,m))
for(t=B.cX(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gJ(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u3(4280690220)
o=new B.aaL(8,8)
n=A.a.i(r.b)
u.push(new B.od(D.bC2,new C.ayP(new C.ajJ(q),B.lU(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.fA6,A.o_),m,new B.kX(p,m,new B.akc(o,o,o,o),A.ib,m),m,m,D.bIv,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xG(B.fe(k,m,m,m,D.fzk,m))
u.push(new C.ayP(C.hN8(k),t))}return B.lU(m,B.zz(u,A.NN,A.lU),m,new B.kX(j,new B.q2(v,v,v,v),w,A.ib,m),m,m,D.bCT,m)},
fyx:function fyx(){},
fyw:function fyw(d,e){this.a=d
this.b=e},
fVH:function fVH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ail(d){var w,v
for(w=0;w<32;++w){v=D.Il[w]
if(v.a===d)return v}return null},
hxF(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cM.aO(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hHj(d,e){return B.a6(d,!1).ce(B.ed(new C.h1u(e),!0,null,x.fB))},
hHi(d,e){return B.bU(A.L,null,new C.h1t(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jd:function jd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fp:function Fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ou:function Ou(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bml:function bml(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e43:function e43(d){this.a=d},
e42:function e42(d,e,f){this.a=d
this.b=e
this.c=f},
e41:function e41(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
buc:function buc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9i:function f9i(d,e){this.a=d
this.b=e},
bhg:function bhg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1D:function b1D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfH:function cfH(){},
cfI:function cfI(d){this.a=d},
cfJ:function cfJ(d,e,f){this.a=d
this.b=e
this.c=f},
cfK:function cfK(d,e,f){this.a=d
this.b=e
this.c=f},
h1u:function h1u(d){this.a=d},
a_L:function a_L(d,e){this.c=d
this.a=e},
aBY:function aBY(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
diB:function diB(d,e,f){this.a=d
this.b=e
this.c=f},
diG:function diG(d){this.a=d},
diH:function diH(d){this.a=d},
diF:function diF(d){this.a=d},
diI:function diI(d){this.a=d},
diE:function diE(d,e){this.a=d
this.b=e},
diJ:function diJ(d){this.a=d},
diD:function diD(d){this.a=d},
diK:function diK(d){this.a=d},
diC:function diC(d,e){this.a=d
this.b=e},
diL:function diL(d,e){this.a=d
this.b=e},
h1t:function h1t(d){this.a=d},
h1s:function h1s(d){this.a=d},
h1r:function h1r(d,e,f){this.a=d
this.b=e
this.c=f},
h1q:function h1q(d,e){this.a=d
this.b=e},
aNM:function aNM(){},
iv1(d){return B.bU(A.L,null,new C.h3V(),d,!0,!0,!0,null,!1,!1,x.N)},
h3V:function h3V(){},
a05:function a05(d){this.a=d},
biN:function biN(d){this.d=d
this.c=this.a=null},
dpo:function dpo(d){this.a=d},
dpp:function dpp(d,e){this.a=d
this.b=e},
dpq:function dpq(d){this.a=d},
i9Z(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return A.wp},
ioN(d){var w=7000
switch(A.d.gH(d.split("@"))){case"shimmer":w=3400
break
case"golddust":w=16e3
break
case"spotlight":w=14e3
break
case"goldframe":w=5200
break
case"twinkle":w=2600
break
case"orbit":break
case"rays":w=3e4
break
case"bokeh":w=22e3
break
case"aurora":w=18e3
break
case"sparkle":w=4200
break
case"sheen":break
case"velvet":w=9000
break
case"crest":w=6000
break
case"filigree":w=8000
break
default:w=null
break}return w},
ioM(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i9Z(d)
switch(q){case"shimmer":return B.oh(A.M_,g,new C.fSe(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bi7(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e2(A.A,B.d3(F.bXI(g,new B.Ev(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.p(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bhP(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.D(0.55+s*0.45,0,1)
return B.d3(B.eI(A.A,e*0.5,B.e2(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n2(Math.sin(e)*0.3)
return B.dP(B.fB(A.A,g,r,u,!0),new B.p(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bqW(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bcD(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bcg(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.by2(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bv0(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bu8(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bh9(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bS(0,new B.du(!0,B.e2(A.A,new B.bN(new B.o(r,r,r,r,r,new B.bY(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bi,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eI(A.A,s*0.06,B.e2(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fSe:function fSe(d,e){this.a=d
this.b=e},
bi7:function bi7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhP:function bhP(d,e,f){this.b=d
this.c=e
this.a=f},
bqW:function bqW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcD:function bcD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcg:function bcg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
by2:function by2(d,e,f){this.b=d
this.c=e
this.a=f},
bv0:function bv0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu8:function bu8(d,e,f){this.b=d
this.c=e
this.a=f},
bh9:function bh9(d,e,f){this.b=d
this.d=e
this.a=f},
dii:function dii(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yh:function yh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fSh(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.ls},
ioS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fSi())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.I)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSQ(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ioR(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cW(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cW(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.j.D(s,0.06,u)}else{d.w=A.j.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.j.D(r*(d.w*0.001)+0.028,0.06,u)},
ai_(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ai_=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fKB(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dX,null,new C.fKC(e),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ai_)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hj_(d),$async$ai_)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HF(d,"Search states\u2026","",A.kb,"Choose state"),$async$ai_)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hhP(s)
if(p==null)p=A.d.gH(D.SW)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fSj(p.d)
k=x.u
j=B.a([C.ev(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lV,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Du(i,0.016,D.lt,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Du(0,0.058,D.f2,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Du(0,0.058,D.f2,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.LC("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.LC("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.u(k,C.heo(0.2,0.154,0.6,4291404327,i))
A.d.u(k,C.bCR("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.u(k,C.a2I("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.u(k,C.a2I("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.u(k,C.a2I("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.u(k,C.a2I("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.u(k,C.bCR("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Du(m,0.082,D.bm,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.ev(A.bp,!1,i,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bs,A.cE,"",0.074,g,null,"","",0,!1,"",0,D.bm,4280172719,2,y.O,0,0,"",D.cu,D.d1,0.78,0.11,0.388))
A.d.u(k,C.heo(0.22,0.47,0.56,4291404327,i))
A.d.u(k,C.bCR("MASHAHIDI",0.49,0.26,0.48,i))
A.d.u(k,C.hzM("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.u(k,C.hzM("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.u(k,C.a2I("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.u(k,C.a2I("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.u(k,C.bCQ("witness_mume_1",0.11,0.596,0.37,i))
A.d.u(k,C.bCQ("witness_mke_1",0.52,0.596,0.37,i))
A.d.u(k,C.bCR("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.LC("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.LC("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.u(k,C.bCQ("mchumba_mume",0.11,0.7,0.37,i))
A.d.u(k,C.bCQ("mchumba_mke",0.52,0.7,0.37,i))
A.d.u(k,C.bCR("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.u(k,C.a2I("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.u(k,C.bCQ("witness_mume_2",0.38,0.784,0.26,i))
A.d.u(k,C.a2I("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.heo(0.22,0.83,0.56,4291404327,i),h)
h.push(C.LC("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.LC("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.u(k,h)
A.d.u(j,k)
a0.$1(C.Cs(null,null,null,null,D.oX,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t1(m,null,0,0,j,n,D.r3,"","","Hati ya Ndoa",D.ds)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ai_,v)},
fSi:function fSi(){},
fKB:function fKB(){},
fKC:function fKC(d){this.a=d},
fKz:function fKz(d){this.a=d},
fKA:function fKA(d){this.a=d},
idd(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
idc(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ni
case"lineThrough":return A.xr
default:return A.aH}},
ev(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eS(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hBR(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.SE[w]
if(v.b===u)return v}return D.ds},
i9m(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d5N[w]
if(v.b===u)return v}return D.d1},
ig0(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dy5[w]
if(v.b===u)return v}return D.bm},
t1(d,e,f,g,h,i,j,k,l,m,n){return new C.m4(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hso(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.ibu(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hBR(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.j.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.j.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cF(n,new C.cll(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.t1(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
ibu(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.au3[w]
if(v.b===u)return v}return D.nd},
Cs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hT(p,t,a1,h,i,w,a0==null?B.a([C.t1(4294967295,null,0,0,null,C.cE(),D.r3,"","","",D.ds)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xk(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i7c(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.j.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kP(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kP(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.j.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b7(f,new C.cl8(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cl9(),x.N)
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
else{g=J.de(g,x.f)
g=B.cF(g,new C.cla(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cs(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t1(4294967295,a3,0,0,a3,C.cE(),D.r3,"","","",D.ds)],x.g):g,v,p,o,s)},
kP(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i7c(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dz_[w]
if(v.b===u)return v}return D.E9},
cE(){var w=Date.now(),v=$.je
$.je=v+1
return""+1000*w+"_"+v},
clC(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.Ea){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.ev(A.K,!1,f.d.l(),A.aH,"",n,40,A.bs,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.cu,D.d1,0.84,0.08,0.3)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.K,!1,f.e.l(),A.aH,"",n,20,A.bs,A.cE,"",0.12,u,p,"","",0,!1,"",0,D.bm,m,2,"Click to add subtitle",0,0,"",D.cu,D.d1,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.ev(A.bp,!1,f.d.l(),A.aH,"",n,32,A.bs,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bp,!0,f.e.l(),A.aH,"",n,20,A.bs,A.cE,"",0.68,u,p,"","",0,!1,"",0,D.bm,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cu,D.d1,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.ev(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Two Column Slide",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.ev(A.bp,!0,t.l(),A.aH,"",n,18,A.bs,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bm,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cu,D.d1,0.42,0.06,0.22)
s=C.cE()
A.d.u(w,B.a([v,u,C.ev(A.bp,!0,t.l(),A.aH,"",n,18,A.bs,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bm,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cu,D.d1,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.ev(A.K,!1,4294967295,A.aH,"",n,42,A.bs,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bm,m,2,"Section Header",0,0,"",D.cu,D.d1,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.ev(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Compare",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.ev(A.bp,!1,l,A.aH,"",t.j(0.12).l(),24,A.bs,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bm,t.l(),2,"",0,0,"",D.cu,D.fj,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.ev(A.bp,!1,r.l(),A.aH,"",n,20,A.bs,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bm,m,2,"Option A",0,0,"",D.cu,D.d1,0.38,0.08,0.26)
q=C.cE()
t=C.ev(A.bp,!1,l,A.aH,"",t.j(0.06).l(),24,A.bs,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bm,t.j(0.5).l(),2,"",0,0,"",D.cu,D.fj,0.42,0.52,0.22)
q=C.cE()
A.d.u(w,B.a([v,u,s,t,C.ev(A.bp,!1,r.l(),A.aH,"",n,20,A.bs,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bm,m,2,"Option B",0,0,"",D.cu,D.d1,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.ev(A.K,!1,f.d.l(),A.aH,"",n,36,A.bs,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bm,m,2,"TERM / QUESTION",0,0,"",D.cu,D.d1,0.8,0.1,0.12)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.K,!1,f.e.l(),A.aH,"",n,22,A.bs,A.cE,"",0.35,u,p,"","",0,!1,"",0,D.bm,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cu,D.d1,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.ev(A.bp,!1,f.d.l(),A.aH,"",n,28,A.bs,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bm,m,2,"Quiz Question",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bp,!1,f.e.l(),A.aH,"",n,20,A.bs,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bm,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cu,D.d1,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.ev(A.bp,!1,f.d.l(),A.aH,"",n,26,A.bs,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bm,m,2,"Worksheet / Assignment",0,0,"",D.cu,D.d1,0.88,0.06,0.04)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bp,!1,f.e.l(),A.aH,"",n,18,A.bs,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bm,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cu,D.d1,0.88,0.06,0.16)],x.u))
break}},
hZx(d){return A.d.dL(D.a5X,new C.clD(d),new C.clE())},
hZu(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aP(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.Xk(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
haD(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cly(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.I)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.clx())
return u},
hsr(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.clt()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
at7(d){return C.hZs(d)},
hZs(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$at7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clw()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3V(m),$async$at7)
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
return B.b(B.aA(),$async$at7)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aV(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hsq.h(0,m))
n=C.haD(C.haD(j,r),o)
if(n.length===0){u=C.hsr(C.hsr(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$at7,v)},
cls(d){return C.hZr(d)},
hZr(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cls=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cls)
case 7:r=f
q=r.tV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jC(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cls,v)},
b3P(d,e){return C.hZt(d,e)},
hZt(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3P=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3P)
case 6:s=g
q=s.tV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mn(r,J.ad(r)-500):r
w=7
return B.b(s.aD("StringList","ngmy_slides_deleted_"+p,o),$async$b3P)
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
return B.i($async$b3P,v)},
Xl(d,e){return C.hZv(d,e)},
hZv(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xl=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hsp.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.at7(a3),$async$Xl)
case 5:p=a6
case 4:w=6
return B.b(C.cls(a3),$async$Xl)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.I)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbt())k=f===g.gbt()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.clz(o),l),l.k("M.E"))
A.d.aZ(e,new C.clA())
$.hsp.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.clB(),n),n.k("ak.E"))
r=A.X.aw(n,null)
$.hsq.n(0,a0,r)
t=8
w=11
return B.b(B.aiN(a0,r),$async$Xl)
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
return B.b(B.aA(),$async$Xl)
case 16:q=a6
w=17
return B.b(q.aD("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xl)
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
return B.i($async$Xl,v)},
JM:function JM(d,e){this.a=d
this.b=e},
at5:function at5(d,e){this.a=d
this.b=e},
vk:function vk(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hI:function hI(d,e){this.a=d
this.b=e},
eS:function eS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m4:function m4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
clm:function clm(){},
cln:function cln(){},
cll:function cll(){},
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
clb:function clb(){},
clc:function clc(){},
cl8:function cl8(){},
cl9:function cl9(){},
cla:function cla(){},
k2:function k2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
clD:function clD(d){this.a=d},
clE:function clE(){},
cly:function cly(d){this.a=d},
clx:function clx(){},
clt:function clt(){},
clu:function clu(){},
clv:function clv(){},
clw:function clw(){},
clz:function clz(d){this.a=d},
clA:function clA(){},
clB:function clB(){},
ip4(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fSW(e,v,d,B.aR(w))
w.$1(new C.fSS())
w.$1(new C.fST())
w.$1(new C.fSU())
w.$1(new C.fSV())
return v},
fSW:function fSW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSS:function fSS(){},
fST:function fST(){},
fSU:function fSU(){},
fSV:function fSV(){},
b3M:function b3M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clh:function clh(d){this.a=d},
clg:function clg(){},
cli:function cli(){},
clj:function clj(d,e){this.a=d
this.b=e},
clk:function clk(d){this.a=d},
aq6:function aq6(d,e){this.c=d
this.a=e},
bm3:function bm3(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dQY:function dQY(){},
aNv:function aNv(){},
clp(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$clp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fn2)
u=!1
w=1
break}u=B.lh(!1,d,t,!1,null,A.a8K,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clp,v)},
hZp(d){var w=A.d.bj(D.Iv,new C.clq(d))
if(w<0)return!0
return w>=4},
hZq(d){var w=A.d.bj($.bHj(),new C.clr(d))
if(w<0)return!0
return w>=5},
clq:function clq(d){this.a=d},
clr:function clr(d){this.a=d},
iqO(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xv()
$.q_().pe(t,new C.fVO(s),!0)
u=B.a([B.C0(v,A.pR,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ap(v,B.r(v,B.d(e,v,v,v,v,v,v,D.fy8,v,v,v),A.f,v,v,new B.o(A.b6,v,v,w,v,v,A.n),v,v,v,v,A.n4,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fVO:function fVO(d){this.a=d},
iqp(){return C.hia()},
inc(){return C.bFf()},
ipn(){return C.hi1()},
aRT(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fUU(d,f),$async$aRT)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRT,v)},
fUU(d,e){var w=0,v=B.j(x.H),u
var $async$fUU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bDp
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fUV(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fUU)
case 2:return B.h(null,v)}})
return B.i($async$fUU,v)},
fUV:function fUV(d,e){this.a=d
this.b=e},
aeR:function aeR(d,e,f){this.c=d
this.d=e
this.a=f},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
af7:function af7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3L(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3K(g,m,f,d,e,h,l,k,j,o,i,null)},
hFc(d){return B.co(new C.fSR(d))},
hic(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
iqx(d){if(d===D.cu)return"None"
return C.hic(d)},
bDV(d,e,f,g){return C.ig7(d,e,f,g)},
ig7(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDV=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.heI&&t.pZ())t.eA()
$.heI=!0
s.a=null
w=3
return B.b(B.hN(A.bq,!0,"Animation preview",d,new C.fBh(s,e,g,f),null,A.eI,!0,x.H),$async$bDV)
case 3:s=s.a
if(s!=null)s.a1(0)
$.heI=!1
case 1:return B.h(u,v)}})
return B.i($async$bDV,v)},
h4L(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h4L=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hic(f)+" Slide transition preview"
s=s?Ah.GQ:A.qz
w=3
return B.b(C.bDV(d,s,new B.a5(t,t*0.56,B.bx(B.l(14),new C.aL1(f,null),A.aq),null),r),$async$h4L)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h4L,v)},
hEs(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.j.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dP(B.d3(f,t),new B.p((1-t)*48,0))
case 3:return B.dP(B.d3(f,t),new B.p(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d3(f,t),new B.p(0,(1-t)*36))
case 5:return B.dP(B.d3(f,t),new B.p(0,-(1-t)*36))
case 6:case 16:return B.e2(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e2(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kn((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n2((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d3(f,t),new B.p((1-t)*24,0))}},
bGO(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hic(f)+" Element animation preview"
s=s?Ah.GQ:A.qz
w=3
return B.b(C.bDV(d,s,new B.a5(t,t*0.62,B.bx(B.l(14),new C.aBD(f,null),A.aq),null),r),$async$bGO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGO,v)},
iqw(d){var w,v,u,t,s=$.ahs.W(0,d)
if(s!=null){$.ahs.n(0,d,s)
return s}w=A.cM.aO(A.a.b2(d,A.a.co(d,",")+1))
$.ahs.n(0,d,w)
v=$.hfA=$.hfA+w.length
u=B.a4($.ahs).k("cx<1>")
for(;;){if(!(v>41943040&&$.ahs.a>1))break
t=new B.cx($.ahs,u).gae(0)
if(!t.C())B.bj(B.fr())
v-=$.ahs.W(0,t.gR(0)).length
$.hfA=v}return w},
iqb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.I)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TF(s,A.u))
v.push(new B.eq(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TF(t,A.u))
v.push(new B.eq(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TF(u,A.cE))
v.push(new B.eq(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3U(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.jU(e))
return m
case"rounded":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.ja(B.bn(e,new B.aO(w,w))))
return m
case"triangle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bu())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aG(w.r,A.ai,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aZ(p,o)
m.push(p)
o=v.f
if(o!=null)p.ak(o)
v.ab()}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.ak(o)
v.ab()}}v.E(new B.bu())
return v
case"diamond":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
m.E(new B.aq(e.c,e.gbx().b))
m.E(new B.aq(e.gbx().a,e.d))
m.E(new B.aq(e.a,e.gbx().b))
m.E(new B.bu())
return m
case"arch":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdH(new B.p(t,p),new B.aO(s,s))
m.E(new B.aq(t,u))
m.E(new B.bu())
return m
default:m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.oA(e))
return m}},
fQk(d,e,f){return B.co(new C.fQl(D.ff9.q(0,d),d,f,e))},
b3K:function b3K(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
clf:function clf(d){this.a=d},
cle:function cle(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cld:function cld(){},
b3H:function b3H(d,e){this.b=d
this.a=e},
fSR:function fSR(d){this.a=d},
fSQ:function fSQ(d,e){this.a=d
this.b=e},
fBh:function fBh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBf:function fBf(d){this.a=d},
fBg:function fBg(d,e){this.a=d
this.b=e},
aL1:function aL1(d,e){this.c=d
this.a=e},
bxx:function bxx(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fhT:function fhT(d,e,f){this.a=d
this.b=e
this.c=f},
aLJ:function aLJ(d,e){this.b=d
this.a=e},
Wr:function Wr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmh:function bmh(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e1N:function e1N(d){this.a=d},
e1M:function e1M(d){this.a=d},
e1L:function e1L(d){this.a=d},
JL:function JL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cl7:function cl7(d){this.a=d},
cl6:function cl6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBD:function aBD(d,e){this.c=d
this.a=e},
bgA:function bgA(){this.d=0
this.c=this.a=null},
dfv:function dfv(d){this.a=d},
dfu:function dfu(d){this.a=d},
a98:function a98(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmY:function bmY(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqm:function eqm(d,e,f){this.a=d
this.b=e
this.c=f},
b1G:function b1G(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhN:function bhN(d,e,f){this.b=d
this.c=e
this.a=f},
bt1:function bt1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f6N:function f6N(){},
fQl:function fQl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu5:function bu5(d,e,f){this.b=d
this.c=e
this.a=f},
aNL:function aNL(){},
aOf:function aOf(){},
aPz:function aPz(){},
fTS(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fTS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xR.cq().ML(D.dvU,A.uO,!0),$async$fTS)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.iq5(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTS,v)},
iq5(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9r(d,new B.a1s(A.cV.gcu().aO(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.ii_(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9r(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.ca.Lx(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9r(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
ii_(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cH9().cQI(B.rM(d,A.iw,o,o),o,o,!1).cSD(0,"word/document.xml")
if(n==null)return""
w=n.d_N()
v=A.ca.Lx(0,w==null?$.hHQ():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cF(q,new C.fEp(),B.a4(q).k("M.E"),t).hf(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9r:function a9r(d,e,f){this.a=d
this.b=e
this.c=f},
fEp:function fEp(){},
hZw(d,e,f,g,h,i,j,k,l){return new C.P_(l,e,d,g,f,i,h,j,k,null)},
P_:function P_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGx:function aGx(d,e,f,g,h,i,j,k,l){var _=this
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
_.a9$=l
_.c=_.a=null},
eJe:function eJe(d){this.a=d},
eJc:function eJc(){},
eJd:function eJd(d){this.a=d},
eFC:function eFC(){},
eFD:function eFD(){},
eFE:function eFE(d,e){this.a=d
this.b=e},
eHc:function eHc(d){this.a=d},
eH0:function eH0(){},
eH1:function eH1(){},
eF_:function eF_(){},
eIk:function eIk(d){this.a=d},
eJa:function eJa(d,e){this.a=d
this.b=e},
eHa:function eHa(d,e){this.a=d
this.b=e},
eIY:function eIY(d){this.a=d},
eIZ:function eIZ(){},
eJ_:function eJ_(){},
eJ0:function eJ0(d){this.a=d},
eJ1:function eJ1(){},
eEo:function eEo(d){this.a=d},
eJb:function eJb(){},
eGj:function eGj(d,e){this.a=d
this.b=e},
eEm:function eEm(d){this.a=d},
eEn:function eEn(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d,e,f){this.a=d
this.b=e
this.c=f},
eGI:function eGI(d){this.a=d},
eGi:function eGi(){},
eGh:function eGh(d){this.a=d},
eGf:function eGf(){},
eGe:function eGe(d){this.a=d},
eGg:function eGg(){},
eFy:function eFy(d){this.a=d},
eFz:function eFz(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eEq:function eEq(){},
eEr:function eEr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGB:function eGB(){},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e,f){this.a=d
this.b=e
this.c=f},
eGA:function eGA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGt:function eGt(d,e,f){this.a=d
this.b=e
this.c=f},
eGu:function eGu(d,e,f){this.a=d
this.b=e
this.c=f},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGD:function eGD(d){this.a=d},
eGW:function eGW(){},
eGX:function eGX(){},
eGY:function eGY(){},
eGZ:function eGZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGT:function eGT(d){this.a=d},
eGV:function eGV(){},
eGU:function eGU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGR:function eGR(d,e,f){this.a=d
this.b=e
this.c=f},
eGS:function eGS(d,e){this.a=d
this.b=e},
eH_:function eH_(){},
eGr:function eGr(d,e){this.a=d
this.b=e},
eEH:function eEH(){},
eEI:function eEI(d,e,f){this.a=d
this.b=e
this.c=f},
eEJ:function eEJ(d){this.a=d},
eEK:function eEK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEG:function eEG(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH4:function eH4(d,e){this.a=d
this.b=e},
eH3:function eH3(d,e){this.a=d
this.b=e},
eH2:function eH2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH6:function eH6(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eEF:function eEF(d,e){this.a=d
this.b=e},
eED:function eED(d){this.a=d},
eHe:function eHe(d,e,f){this.a=d
this.b=e
this.c=f},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEy:function eEy(d){this.a=d},
eHd:function eHd(d,e,f){this.a=d
this.b=e
this.c=f},
eEp:function eEp(d){this.a=d},
eF0:function eF0(){},
eIW:function eIW(d,e){this.a=d
this.b=e},
eIX:function eIX(d,e,f){this.a=d
this.b=e
this.c=f},
eIl:function eIl(d,e,f){this.a=d
this.b=e
this.c=f},
eDl:function eDl(d){this.a=d},
eDi:function eDi(d,e){this.a=d
this.b=e},
eD8:function eD8(d,e){this.a=d
this.b=e},
eD5:function eD5(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e){this.a=d
this.b=e},
eEB:function eEB(d){this.a=d},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEA:function eEA(d){this.a=d},
eDN:function eDN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDT:function eDT(d){this.a=d},
eDQ:function eDQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDR:function eDR(d){this.a=d},
eDP:function eDP(){},
eDM:function eDM(d,e,f){this.a=d
this.b=e
this.c=f},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d,e,f){this.a=d
this.b=e
this.c=f},
eJ3:function eJ3(d){this.a=d},
eIB:function eIB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIA:function eIA(d,e,f){this.a=d
this.b=e
this.c=f},
eIz:function eIz(){},
eIy:function eIy(d,e,f){this.a=d
this.b=e
this.c=f},
eIx:function eIx(d,e){this.a=d
this.b=e},
eIu:function eIu(d,e,f){this.a=d
this.b=e
this.c=f},
eIs:function eIs(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIw:function eIw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIv:function eIv(d){this.a=d},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFt:function eFt(d,e){this.a=d
this.b=e},
eIm:function eIm(){},
eIV:function eIV(d,e){this.a=d
this.b=e},
eIT:function eIT(d){this.a=d},
eIU:function eIU(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e,f){this.a=d
this.b=e
this.c=f},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDa:function eDa(d,e,f){this.a=d
this.b=e
this.c=f},
eD9:function eD9(d){this.a=d},
eHb:function eHb(d,e,f){this.a=d
this.b=e
this.c=f},
eJ2:function eJ2(d,e,f){this.a=d
this.b=e
this.c=f},
eFx:function eFx(d,e,f){this.a=d
this.b=e
this.c=f},
eFw:function eFw(){},
eDW:function eDW(d,e,f){this.a=d
this.b=e
this.c=f},
eDX:function eDX(d){this.a=d},
eD7:function eD7(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDo:function eDo(d){this.a=d},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(){},
eDL:function eDL(){},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d,e){this.a=d
this.b=e},
eEY:function eEY(d,e,f){this.a=d
this.b=e
this.c=f},
eEX:function eEX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEW:function eEW(d,e,f){this.a=d
this.b=e
this.c=f},
eEV:function eEV(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eDY:function eDY(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
eE2:function eE2(){},
eE3:function eE3(d,e){this.a=d
this.b=e},
eEE:function eEE(d){this.a=d},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGL:function eGL(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGJ:function eGJ(){},
eGK:function eGK(){},
eIn:function eIn(){},
eIo:function eIo(d,e,f){this.a=d
this.b=e
this.c=f},
eIp:function eIp(){},
eIq:function eIq(d){this.a=d},
eIr:function eIr(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eEs:function eEs(){},
eEt:function eEt(){},
eEu:function eEu(){},
eEx:function eEx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e,f){this.a=d
this.b=e
this.c=f},
eFY:function eFY(d){this.a=d},
eFX:function eFX(){},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFW:function eFW(d){this.a=d},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFV:function eFV(d){this.a=d},
eG1:function eG1(d,e){this.a=d
this.b=e},
eFU:function eFU(d){this.a=d},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFT:function eFT(d){this.a=d},
eG3:function eG3(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFH:function eFH(d){this.a=d},
eFN:function eFN(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eFP:function eFP(d){this.a=d},
eER:function eER(d){this.a=d},
eES:function eES(d){this.a=d},
eEU:function eEU(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eET:function eET(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJ9:function eJ9(d){this.a=d},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHy:function eHy(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHV:function eHV(d){this.a=d},
eI5:function eI5(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d){this.a=d},
eIe:function eIe(d){this.a=d},
eIf:function eIf(d){this.a=d},
eIg:function eIg(d,e){this.a=d
this.b=e},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHI:function eHI(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHW:function eHW(d){this.a=d},
eHu:function eHu(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e,f){this.a=d
this.b=e
this.c=f},
eHj:function eHj(d,e){this.a=d
this.b=e},
eHw:function eHw(d){this.a=d},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIj:function eIj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIi:function eIi(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d,e,f){this.a=d
this.b=e
this.c=f},
eHs:function eHs(d,e,f){this.a=d
this.b=e
this.c=f},
eHi:function eHi(d,e,f){this.a=d
this.b=e
this.c=f},
eHg:function eHg(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eI0:function eI0(d){this.a=d},
eHq:function eHq(d){this.a=d},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eHp:function eHp(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eHo:function eHo(d){this.a=d},
eI9:function eI9(d,e){this.a=d
this.b=e},
eHm:function eHm(d){this.a=d},
eIa:function eIa(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eDV:function eDV(d,e,f){this.a=d
this.b=e
this.c=f},
eDU:function eDU(d,e){this.a=d
this.b=e},
eIE:function eIE(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIF:function eIF(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eF3:function eF3(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF1:function eF1(d){this.a=d},
eFB:function eFB(){},
eFA:function eFA(){},
eIR:function eIR(d){this.a=d},
eIQ:function eIQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIP:function eIP(d,e){this.a=d
this.b=e},
eIK:function eIK(d,e){this.a=d
this.b=e},
eIO:function eIO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIL:function eIL(d,e){this.a=d
this.b=e},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIM:function eIM(d,e){this.a=d
this.b=e},
eIN:function eIN(d,e){this.a=d
this.b=e},
eIS:function eIS(d){this.a=d},
eEl:function eEl(d){this.a=d},
eEk:function eEk(d,e,f){this.a=d
this.b=e
this.c=f},
eEj:function eEj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE8:function eE8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE7:function eE7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEd:function eEd(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE6:function eE6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEg:function eEg(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
eEh:function eEh(d,e){this.a=d
this.b=e},
eE4:function eE4(d){this.a=d},
eEi:function eEi(d,e){this.a=d
this.b=e},
eGc:function eGc(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGd:function eGd(d,e){this.a=d
this.b=e},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e){this.a=d
this.b=e},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e,f){this.a=d
this.b=e
this.c=f},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e,f){this.a=d
this.b=e
this.c=f},
eFa:function eFa(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e,f){this.a=d
this.b=e
this.c=f},
eF6:function eF6(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e,f){this.a=d
this.b=e
this.c=f},
eF5:function eF5(d,e){this.a=d
this.b=e},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eD3:function eD3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH7:function eH7(d){this.a=d},
eH8:function eH8(d,e){this.a=d
this.b=e},
agE:function agE(d,e,f){this.a=d
this.b=e
this.c=f},
aB_:function aB_(d,e,f){this.c=d
this.e=e
this.a=f},
bfm:function bfm(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
daX:function daX(d){this.a=d},
daW:function daW(d){this.a=d},
bfB:function bfB(d,e){this.c=d
this.a=e},
dbk:function dbk(d){this.a=d},
dbl:function dbl(d){this.a=d},
KO:function KO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfl:function bfl(){this.d=!1
this.c=this.a=null},
daU:function daU(d){this.a=d},
daQ:function daQ(d){this.a=d},
daV:function daV(d){this.a=d},
daP:function daP(d){this.a=d},
daT:function daT(d){this.a=d},
daR:function daR(d){this.a=d},
daS:function daS(d,e){this.a=d
this.b=e},
QJ:function QJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0X:function a0X(d,e,f){this.c=d
this.d=e
this.a=f},
aGA:function aGA(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bw$=e
_.a9$=f
_.c=_.a=null},
eJP:function eJP(){},
eJF:function eJF(d){this.a=d},
eJO:function eJO(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJB:function eJB(d){this.a=d},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJD:function eJD(d){this.a=d},
eJE:function eJE(d,e,f){this.a=d
this.b=e
this.c=f},
eJM:function eJM(){},
eJN:function eJN(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJK:function eJK(d){this.a=d},
eJL:function eJL(d){this.a=d},
eJQ:function eJQ(d,e,f){this.a=d
this.b=e
this.c=f},
eJS:function eJS(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
KU:function KU(d,e){this.c=d
this.a=e},
buB:function buB(d,e){this.b=d
this.a=e},
bkl:function bkl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkk:function bkk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMq:function aMq(){},
aOs:function aOs(){},
bAp:function bAp(){},
aOt:function aOt(){},
fVP(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fVP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xR.cq().ML(B.a(["pdf"],x.s),A.uO,!0),$async$fVP)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brI(s,"data:application/pdf;base64,"+A.cV.gcu().aO(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVP,v)},
iqI(d){var w,v,u,t,s,r
try{w=B.jM(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gJ(0)
if(t>0){s=J.ajl(t,1,200)
return s}}catch(r){}return 1},
fVG(d){return C.iqH(d)},
iqH(d){var w=0,v=B.j(x.T),u
var $async$fVG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVG,v)},
bG1(d,e,f,g){return C.iqR(d,e,f,g)},
iqR(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bG1=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.eb(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.D(b5.a,80,2400)
q=A.j.D(b5.b,80,2400)
p=B.hFO(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jk(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jk(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jk(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jk(b0),a9)}o=A.j.D(o-0.04,0,1)
n=A.j.D(n-0.04,0,1)
m=A.j.D(m+0.04,0,1)
l=A.j.D(l+0.04,0,1)
j=A.j.D(m-o,0.12,1)
i=A.j.D(l-n,0.12,1)
h=A.o.D(A.j.V(800*(i/j)),180,420)
$.S()
g=new B.q3(new B.pE())
f=B.zy(g,null)
a7=B.L()
a7.r=A.rC.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bv
b1.e=A.dT
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.I)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.p((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o3()
w=7
return B.b(a3.xH(800,h),$async$bG1)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hi(A.ha),$async$bG1)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dM.gaU(a5))
a7=A.cV.gcu().aO(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ac(b3)
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
return B.i($async$bG1,v)},
aSq(d,e,f){return C.iqF(d,e,f)},
iqF(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aj0(d,e,f,new C.fVE(r,q),q,"Sign document"),$async$aSq)
case 3:if(!new B.eb(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bG1(q,t,r.b,r.c),$async$aSq)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3O(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSq,v)},
iqP(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hys(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hys(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.j.ad(q.c*100,2)+"%;top:"+A.j.ad(q.d*100,2)+"%;width:"+A.j.ad(q.e*100,2)+"%;height:"+A.j.ad(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.b_(A.o.ft(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lV&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hy3(q.ay)+";border:2px solid "+C.hy3(q.ch)+'"></div>'
break
case 5:l=C.hh2(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galg()
if(p==null)p=A.aCw
n=B.U(p)
k=n.k("ix<1>")
j=new B.ix(p,0,8,k)
j.n8(p,0,8,n.c)
j=new B.bR(j,j.gJ(0),k.k("bR<ak.E>"))
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
hy3(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hys(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bG_(d,e){var w=0,v=B.j(x.H)
var $async$bG_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fVN(e,C.iqP(e),d),d,null,!0,!0,x.H),$async$bG_)
case 2:return B.h(null,v)}})
return B.i($async$bG_,v)},
bG0(){var w=0,v=B.j(x.T),u,t,s
var $async$bG0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hy(92,2400),$async$bG0)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fVG(s),$async$bG0)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bG0,v)},
aSr(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hih(d),$async$aSr)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A3.fYp(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSr,v)},
hsn(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3O:function b3O(d,e,f){this.a=d
this.b=e
this.c=f},
fVE:function fVE(d,e){this.a=d
this.b=e},
fVN:function fVN(d,e,f){this.a=d
this.b=e
this.c=f},
fVK:function fVK(d){this.a=d},
fVL:function fVL(d,e,f){this.a=d
this.b=e
this.c=f},
fVM:function fVM(d,e,f){this.a=d
this.b=e
this.c=f},
iqG(d){return C.kP(d.w)},
iqN(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.isX()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zi(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hM9()
if(w.b.test(u))return u
return null},
hFQ(d,e,f){var w,v,u=C.hV8(d),t=$.ov()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.v(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
iqT(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eJ(w,d.b);v.C();){u=w.gR(w).y
t=C.zi(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fVC(d,e){var w,v=d.y,u=C.zi(v==null?"":v)
if(u!=null)return d.y=u
w=C.iqT(new B.Y(e,new C.fVD(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hFQ(v==null?"":v,null,w)},
iqS(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kP(w.w))return null
v=w.y
return C.zi(v==null?"":v)},
hZy(){var w,v=$.ov(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.hf(u)},
Xo(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xo)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bO),$async$Xo)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.ac(m)
$.am.$1("[slides qr stash] load: "+B.w(p))
w=7
break
case 4:w=2
break
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xo,v)},
Xp(d){return C.hZz(d)},
hZz(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xp)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hM("ngmy_slides_transfer_qr_stashes_v1",B.J(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cP,null),$async$Xp)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ac(p)
$.am.$1("[slides qr stash] save: "+B.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xp,v)},
a9t(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9t=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9t)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xo(),$async$a9t)
case 4:s=a6
r=C.zi(a2==null?"":a2)
if(r==null)r=a3!=null?C.hFQ(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dp(s),n=J.aT(o.ghJ(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zi(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdP(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dW.aO(t)
g.n(0,"payload",A.cV.gcu().aO(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.V4.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zi(J.k(q==null?"":q))
if(f==null)f=C.hss(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xp(s),$async$a9t)
case 7:u=new B.aI3(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hZy()
n=r==null
d=n?C.hss(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dW.aO(t)
q.n(0,"payload",A.cV.gcu().aO(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.V4.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xp(s),$async$a9t)
case 8:u=new B.aI3(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
hss(d){var w,v,u=$.ov()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.v(u.az(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
at9(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$at9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at9)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xo(),$async$at9)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bq(t,new C.clF(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xp(t),$async$at9)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$at9,v)},
at8(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$at8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zi(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at8)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xo(),$async$at8)
case 6:t=o.i4(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zi(J.k(q==null?"":q))===p){u=C.a9s(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$at8,v)},
a9s(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9s=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9s)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xo(),$async$a9s)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.j.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.ca.cJ(0,A.cM.aO(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.V4.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aP(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.X.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dL(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xp(p),$async$a9s)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
iqM(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fVJ(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fVR(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.X.aw(w,null)}return A.X.aw(C.iqM(d==null?B.a([],x.D):d,f,g),null)},
fVQ(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fVQ=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9t(h,d,e,f,g),$async$fVQ)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zi(e==null?"":e)
u=new B.aHQ(s,t)
w=1
break}t=A.dW.aO(h)
t=A.kJ.gcu().aO(t)
u=new B.aHQ(C.zi(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVQ,v)},
hij(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eK(q,s)||J.eK(q,r))return!0
if(J.d5(q,"{"))try{w=A.X.aP(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
iqQ(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hij(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hij(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hij(s))return s}}return null},
fVF(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.X.aP(0,A.ca.cJ(0,A.cM.aO(J.nq(t,8))),null))
else w=v.a(A.X.aP(0,t,null))
v=C.i8L(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiM(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.at8(t[1]),$async$aiM)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVF(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zi(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.at8(r),$async$aiM)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVF(s)
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
return B.b(C.a9s(t[1]),$async$aiM)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVF(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fVF(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiM,v)},
i8L(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.V4.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hig(C.Xk(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cF(t,new C.fqH(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hig(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.je
$.je=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xk(B.a2(o,x.N,x.z))
if(e&&C.kP(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bS(144e8).ag()
return p},
bFK(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hx(),$async$bFK)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiM(s),$async$bFK)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFK,v)},
h3Y(d){var w=0,v=B.j(x.T),u,t
var $async$h3Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.Zo,!0,"Dismiss",d,new C.h3Z(),new C.h4_(),A.GO,!0,x.N),$async$h3Y)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fl9)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3Y,v)},
iv4(d,e,f,g,h){return B.a6(d,!1).ce(B.ed(new C.h40(h,e,g,f),!0,null,x.H))},
fVD:function fVD(d){this.a=d},
clF:function clF(d){this.a=d},
fVJ:function fVJ(){},
fqH:function fqH(d){this.a=d},
h3Z:function h3Z(){},
h4_:function h4_(){},
h40:function h40(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xm:function Xm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGy:function aGy(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eJl:function eJl(){},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJk:function eJk(d,e){this.a=d
this.b=e},
eJi:function eJi(d){this.a=d},
eJj:function eJj(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d){this.a=d},
eJp:function eJp(d){this.a=d},
eJs:function eJs(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJf:function eJf(d,e){this.a=d
this.b=e},
Xn:function Xn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnj:function bnj(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJv:function eJv(d){this.a=d},
eJw:function eJw(){},
eJx:function eJx(d){this.a=d},
eJy:function eJy(d,e){this.a=d
this.b=e},
aGv:function aGv(d){this.a=d},
aGw:function aGw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCY:function eCY(d){this.a=d},
eCX:function eCX(){},
eCZ:function eCZ(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCT:function eCT(){},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
bxT:function bxT(){},
ata:function ata(d){this.a=d},
aGz:function aGz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJA:function eJA(d){this.a=d},
eJz:function eJz(d){this.a=d},
iel(){var w,v,u,t
for(v=0;v<4;++v){w=D.dju[v]
try{if(Ae.c1H(w)){u=w
return u}}catch(t){}}return null},
Sn(d,e){return C.inn(d,e)},
inn(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sn=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.iel()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oX?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qV(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eC(b8,b9)
n=new B.eC("Getting ready\u2026",b9)
m=new B.eC(0,b9)
l=B.pB(new C.fPO(c2,b7,o),!1,!1)
b6.ma(0,l)
b9=x.H
B.cg(null,A.bB,!1,null,new C.fPP(n,m),c6,null,!0,!0,b9)
k=new C.fPT(b7)
j=new C.fPU()
i=null
t=4
b3=c2.a
h=Al.aUI(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h71(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZM(f,B.J(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Jb.za(i,"dataavailable",new C.fPQ(e))
d=new B.c3(new B.bk($.bF,x.dT),x.b2)
A.Jb.za(i,"stop",new C.fPR(d))
J.ajq(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sn)
case 8:w=7
return B.b(c5.$1(d0),$async$Sn)
case 7:a0=d0
J.h72(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajq(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajq(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sn)
case 15:w=14
return B.b(c5.$1(d0),$async$Sn)
case 14:a0=d0
case 13:J.h72(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajq(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbt())b3=b3===b8.gbt()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h72(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bO(A.fg,null,b9),$async$Sn)
case 18:w=16
break
case 17:J.ajq(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajq(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.ot),$async$Sn)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hO(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n4(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HM(b0)
J.lO(b0)
B.bO(A.qy,new C.fPS(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.ac(c4)
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
J.lO(l)
if(p.pZ())p.eA()
c3=o
b3=$.ax()
c3.sic(b3)
J.aTl(c3,0)
c3=n
c3.sic(b3)
J.aTl(c3,0)
c3=m
c3.sic(b3)
J.aTl(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sn,v)},
fPO:function fPO(d,e,f){this.a=d
this.b=e
this.c=f},
fPN:function fPN(){},
fPP:function fPP(d,e){this.a=d
this.b=e},
fPT:function fPT(d){this.a=d},
fPU:function fPU(){},
fPQ:function fPQ(d){this.a=d},
fPR:function fPR(d){this.a=d},
fPS:function fPS(d){this.a=d},
by6:function by6(d,e,f){this.c=d
this.d=e
this.a=f},
fkw:function fkw(){},
fkx:function fkx(){},
cm0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cm0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ati(d,A.Au),$async$cm0)
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
return B.i($async$cm0,v)},
cm_(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a99:function a99(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bn2:function bn2(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
erd:function erd(d){this.a=d},
erb:function erb(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oV$=k
_.oW$=l
_.oX$=m
_.o6$=n},
aa3:function aa3(d,e){this.a=d
this.b=e},
b5t:function b5t(){},
cpV:function cpV(){},
cpW:function cpW(){},
cpX:function cpX(d,e,f,g,h,i,j,k,l){var _=this
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
hN8(d){return new C.ajJ(d)},
a4m:function a4m(){},
ajJ:function ajJ(d){this.a=d},
aTF:function aTF(){},
ayP:function ayP(d,e){this.d=d
this.b=e
this.a=null},
aV6:function aV6(d){this.b=d
this.a=null},
bEE(d,e){var w=0,v=B.j(x.H),u
var $async$bEE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().guh().Mu(d,e),$async$bEE)
case 2:u=B.fYy()
w=3
return B.b(u,$async$bEE)
case 3:return B.h(null,v)}})
return B.i($async$bEE,v)},
hCU(d,e){return(A.tq[(d^e)&255]^A.o.aI(d,8))>>>0},
fHN(d,e,f,g,h,i){var w=C.ijD(d,A.dl,f,null,A.d6,g,h,i)
return w},
hEX(d){var w=F.hFH(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hV8(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pM.h(0,w)
if(v!=null)return v
for(u=A.pM.gdP(A.pM),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hF4(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<82;++w)v+="- "+D.dC0[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDS(d,e){return C.ig2(d,e)},
ig2(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDS=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aWS(B.a([r],x.e3),e,B.J(["type","application/pdf"],n,n))
p=B.cv(B.J(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eg(B.jR(o,"share",[p]),x.H),$async$bDS)
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
return B.i($async$bDS,v)},
hia(){var w=0,v=B.j(x.y),u,t,s
var $async$hia=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fyy
s=$.bDp
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDS(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hia,v)},
bFf(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bFf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fyy
l=$.bDp
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A3.hzc()?3:4
break
case 3:w=5
return B.b(C.bDS(m,k),$async$bFf)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDq
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n4(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HM(q)
w=10
return B.b(B.bO(A.a3,null,x.H),$async$bFf)
case 10:J.lO(q)
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
return B.i($async$bFf,v)},
hi1(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hi1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDq
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m_.rn(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hi1,v)},
hii(d,e){var w=0,v=B.j(x.H),u,t
var $async$hii=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.m_.rn(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hii,v)},
b4p(d,e){var w=0,v=B.j(x.y),u
var $async$b4p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4r(d,e),$async$b4p)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4q(d),$async$b4p)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4p,v)}},D,Q,Ao,A9,A1,A2,X,Ap,G,F,E,H,Y,R,A3,S,Aq,M,Ar,Aa,As,Ab,K,At,Au,Z,N,A_,O,A0,Av,Ac,Aw,P,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,T,AC,I,U,V,AD,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[208]
A7=c[75]
Ak=c[54]
Al=c[65]
W=c[225]
A8=c[58]
Am=c[152]
An=c[235]
C=a.updateHolder(c[5],C)
D=c[223]
Q=c[143]
Ao=c[42]
A9=c[227]
A1=c[224]
A2=c[236]
X=c[213]
Ap=c[135]
G=c[194]
F=c[35]
E=c[226]
H=c[97]
Y=c[124]
R=c[154]
A3=c[32]
S=c[181]
Aq=c[238]
M=c[162]
Ar=c[189]
Aa=c[107]
As=c[138]
Ab=c[119]
K=c[228]
At=c[239]
Au=c[134]
Z=c[68]
N=c[202]
A_=c[84]
O=c[164]
A0=c[116]
Av=c[126]
Ac=c[121]
Aw=c[230]
P=c[127]
Ad=c[145]
Ax=c[95]
Ae=c[59]
Af=c[198]
Ay=c[40]
Ag=c[82]
Az=c[160]
Ah=c[153]
Ai=c[234]
AA=c[237]
AB=c[233]
T=c[76]
AC=c[231]
I=c[179]
U=c[52]
V=c[229]
AD=c[240]
L=c[210]
A4=c[232]
A5=c[113]
A6=c[64]
C.ol.prototype={
vK(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.um(t,v)
return new C.ol(t===0?!1:w,v,t)},
bQ9(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DO()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.um(w,u)
return new C.ol(r===0?!1:s,u,r)},
bQG(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DO()
w=o-d
if(w<=0)return p.a?$.hjP():$.DO()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.um(w,u)
q=new C.ol(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a48())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bQ9(v)
u=w+v+1
t=new Uint16Array(u)
C.hvD(r.b,w,e,t)
w=r.a
s=C.um(u,t)
return new C.ol(s===0?!1:w,t,s)},
mG(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQG(v)
t=w-v
if(t<=0)return n.a?$.hjP():$.DO()
s=n.b
r=new Uint16Array(t)
C.i4l(s,w,e,r)
w=n.a
q=C.um(t,r)
p=new C.ol(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a48())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a48())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cPb(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9s(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9s(t,e)
if(s===0)return $.DO()
if(r===0)return t.a===e?t:t.vK(0)
w=s+1
v=new Uint16Array(w)
C.i4j(t.b,s,d.b,r,v)
u=C.um(w,v)
return new C.ol(u===0?!1:e,v,u)},
HT(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DO()
w=d.c
if(w===0)return t.a===e?t:t.vK(0)
v=new Uint16Array(s)
C.bcw(t.b,s,d.b,w,v)
u=C.um(s,v)
return new C.ol(u===0?!1:e,v,u)},
bD0(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.um(r,u)
return new C.ol(!1,u,s)},
bD_(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.um(u,r)
return new C.ol(!1,r,v)},
bD1(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.um(p,m)
return new C.ol(s!==0,m,s)},
VH(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DO()
w=t.a
if(w===e.a){if(w){w=$.a48()
return t.HT(w,!0).bD1(e.HT(w,!0),!0).a9s(w,!0)}return t.bD0(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bD_(v.HT($.a48(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9s(e,v)
if(C.cPb(u.b,t,e.b,w)>=0)return u.HT(e,v)
return e.HT(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vK(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9s(e,v)
if(C.cPb(u.b,t,e.b,w)>=0)return u.HT(e,v)
return e.HT(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DO()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hvE(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.um(w,t)
return new C.ol(q===0?!1:r,t,q)},
bQ8(d){var w,v,u,t
if(this.c<d.c)return $.DO()
this.aUa(d)
w=$.hcD.cq()-$.azC.cq()
v=C.hcF($.hcC.cq(),$.azC.cq(),$.hcD.cq(),w)
u=C.um(w,v)
t=new C.ol(!1,v,u)
return this.a!==d.a&&u>0?t.vK(0):t},
ctF(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aUa(d)
w=C.hcF($.hcC.cq(),0,$.azC.cq(),$.azC.cq())
v=C.um($.azC.cq(),w)
u=new C.ol(!1,w,v)
if($.hcE.cq()>0)u=u.mG(0,$.hcE.cq())
return t.a&&u.c>0?u.vK(0):u},
aUa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hvA&&d.c===$.hvC&&g.b===$.hvz&&d.b===$.hvB)return
w=d.b
v=d.c
u=16-A.o.galI(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hvy(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hvy(g.b,f,u,r)}else{r=C.hcF(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hcG(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cPb(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bcw(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bcw(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i4k(p,r,i);--o
C.hvE(h,j,0,r,o,s)
if(r[i]<h){m=C.hcG(j,s,o,n)
C.bcw(r,l,n,m,r)
while(--h,r[i]<h)C.bcw(r,l,n,m,r)}--i}$.hvz=g.b
$.hvA=f
$.hvB=w
$.hvC=v
$.hcC.b=r
$.hcD.b=l
$.azC.b=s
$.hcE.b=u},
gX(d){var w,v,u,t=new C.cPc(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cPd().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.ol&&this.aS(0,e)===0},
tW(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vD(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galI(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cPe(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cPf(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lr(A.aI.gaU(w)).getFloat64(0,!0)},
v(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.v(-r.b[0])
return A.o.v(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vK(0):r
while(v.c>1){u=$.hJV()
if(u.c===0)B.bj(D.bbW)
t=v.ctF(u).v(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQ8(u)}w.push(A.o.v(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).hf(0)},
$iaUo:1,
$ihQ:1}
C.aTN.prototype={
I(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cSD(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.km(w,w.length,B.U(w).k("km<1>"))}}
C.T1.prototype={
d_N(){var w,v
if(this.as==null)this.bg8()
w=this.as
v=w==null?null:w.aqV()
return v==null?null:v.eV()},
bg8(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqV().eV()
this.as=new C.bTg(v)}},
gZ(d){return this.at}}
C.a55.prototype={
a7(){return"CompressionType."+this.b}}
C.bL_.prototype={
eJ(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.A3[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.A3[d])
s.c=t}return v}}
C.bJd.prototype={
cQH(d,e){var w,v,u,t,s,r=this,q=new C.bL_(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eJ(8)!==66||q.eJ(8)!==90||q.eJ(8)!==104)return!1
w=r.a=q.eJ(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crW(q)
if(t<0)return!1
if(t===0){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
s=r.crZ(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
return!0}}return!0},
crW(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eJ(8)
if(t!==D.dBH[u])v=!1
if(t!==D.dcl[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crZ(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eJ(1),d2=((d3.eJ(8)<<8|d3.eJ(8))<<8|d3.eJ(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6m()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eJ(3)
if(q<2||q>6)return-1
v=d3.eJ(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eJ(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c1(6,$.hHU(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eJ(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eJ(1)===0)break
i=d3.eJ(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hHT()
u=x.an
c9.y=B.c1(6,v,!1,u)
c9.z=B.c1(6,v,!1,u)
c9.Q=B.c1(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1A(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aw0(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aw0(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.aq(a8,16)
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
a3=c9.aw0(d3)
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
d4.bu(c3)
c1=(c1<<8^D.IE[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IK[b9];++b9
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
if(b8===0){b8=D.IK[b9];++b9
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
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IE[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IE[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IE[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IE[c1>>>24&255^c7&255])>>>0
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
aw0(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eJ(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eJ(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1A(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6m(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cHa.prototype={
aKl(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTN(e)
if(q<0)return
e.c=q
if(e.aT()!==101010256)return
e.b4()
e.b4()
e.b4()
e.b4()
r.f=e.aT()
r.r=e.aT()
w=e.b4()
if(w>0)e.aKo(w,!1)
r.csj(e)
q=r.r
v=r.f
u=e.aNu(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.bba()
s.d_M(0,u,e,f)
q.push(s)}},
csj(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a98(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tI()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tI()
d.b4()
d.b4()
d.aT()
d.aT()
d.tI()
d.tI()
u=d.tI()
t=d.tI()
this.f=u
this.r=t
d.c=s},
bTN(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a98(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.anx(A.iw)
o.aOJ(r.eV(),A.iw,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cH8.prototype={}
C.aze.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cHb.prototype={
aKl(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aJg.h(0,e.b4())
o.c=w==null?D.NH:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.apy(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b0y:D.F5
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.F5&&u>2){w=o.y
w.toString
s=B.rM(w,A.iw,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.apy(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b0z
o.ax=new C.cH8(r,q)
w=D.aJg.h(0,q)
o.c=w==null?D.NH:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gJ(d){return this.bpT().length},
aqV(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rM(new Uint8Array(0),A.iw,q,q)
w=r.at
if(w!==D.F5)if(p.gJ(0)<=0)r.at=D.F5
else{if(w===D.b0y){p=r.bOr(p)
r.Q=p}else if(w===D.b0z){p=r.bO4(p)
r.Q=p}r.at=D.F5}w=r.c
if(w===D.al6){v=p.c
u=B.dl()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.qb.Cb(p.eV(),!0,!1)
else{t=B.a9S(A.iw,r.w)
p=r.Q
p.toString
A.qb.a5d(p,t,!0,!1)
u.b=t.Ht()}r.Q.c=v
return B.rM(u.bl(),A.iw,q,q)}else if(w===D.al7){s=B.a9S(A.iw,32768)
p=r.Q
v=p.c
C.hNj().cQH(p,s)
u=s.Ht()
r.Q.c=v
return B.rM(u,A.iw,q,q)}else return B.rM(p.eV(),A.iw,q,q)},
bpT(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
v(d){return this.x},
bbX(d){var w=this.ch,v=C.KK(C.hCU(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VH(0,C.KK(255)))
w[1]=v
w[1]=v.aM(0,C.KK(134775813)).a2(0,C.KK(1)).VH(0,C.KK(4294967295))
w[2]=C.KK(C.hCU(w[2].M(0),w[1].mG(0,24).M(0)))},
aTz(){var w=(this.ch[2].VH(0,C.KK(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOr(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rM(new Uint8Array(0),A.iw,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbX(u[v.c++]^r.aTz())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTz()
r.bbX(s)
u&2&&B.aj(t)
t[w]=s}return B.rM(t,A.iw,q,q)},
bO4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gJ(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i3Z(k,w,v)
p=new Uint8Array(B.cf(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aI.dt(q,v,k)))
if(!C.hv7(A.aI.dt(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bHO(k,new Uint8Array(16),p)
k=x.S
m=J.a6B(0,k)
m=n.r=new C.cpK(m)
m.c=!0
m.b=m.bp9(!0,new C.auL(p))
if(m.c)m.d=B.br(D.oV,!0,k)
else m.d=B.br(D.zR,!0,k)
l=C.htj(C.htl(),64)
l.biz(new C.auL(o))
n.w=l
n.d_i(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hv7(k,m))throw B.W(B.fm("macs don't match"))
return B.rM(r,A.iw,null,null)}}
C.bba.prototype={
d_M(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b4()
e.b4()
e.b4()
e.b4()
e.b4()
e.b4()
e.aT()
n.w=e.aT()
n.x=e.aT()
w=e.b4()
v=e.b4()
u=e.b4()
n.y=e.b4()
e.b4()
n.Q=e.aT()
n.as=e.aT()
if(w>0)n.at=e.apy(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rM(t,A.iw,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a98(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tI()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tI()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tI()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apy(u)
f.c=n.as
t=new C.cHb(D.NH,n,D.F5,B.a([C.KK(0),C.KK(0),C.KK(0)],x.f3))
n.ch=t
t.aKl(0,f,g)},
v(d){return this.at}}
C.cH9.prototype={
cQI(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cHa(B.a([],x.fT))
this.a=g
g.aKl(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTN(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.T1(o,A.o.aq(Date.now(),1000),0):C.hlg(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hlg(o,q.w,q)
if(k.as==null)k.bg8()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.anx(A.iw)
j.aOJ(o,A.iw,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GX(!1).E4(i,0,h,!0)}}return v}}
C.bHO.prototype={
d_i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hN2(u,m.a)
q=m.r
if(16>u.byteLength)B.bj(B.dO("Input buffer too short",null))
if(16>w.byteLength)B.bj(B.dO("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRZ(u,0,w,0,o)}else{o===$&&B.c()
q.bOv(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LP(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.D2(0,w,0,w.length)
return f}}
C.cpP.prototype={}
C.cpT.prototype={}
C.cpN.prototype={}
C.auL.prototype={}
C.cpS.prototype={
cQX(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biz(new C.auL(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bT6(n.a,n.b,t,s,r)
r+=v}A.aI.ha(f,g,g+w,s)
return o.a.c},
bT6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dO("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D2(0,d,0,d.length)
v.D2(0,f,0,4)
u=m.c
u===$&&B.c()
w.LP(u,0)
u=m.c
A.aI.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D2(0,s,0,s.length)
w.LP(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpO.prototype={}
C.cpM.prototype={}
C.auM.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auM){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tW(d,e){var w=this.a
w===$&&B.c()
w=A.o.tW(w,e.gc1R())
if(!w)e.gc1R()
return w},
aMU(d,e){this.a=0
this.b=d},
tZ(d){return this.aMU(d,null)},
aNx(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
v(d){var w=this,v=new B.fg(""),u=w.a
u===$&&B.c()
w.b3A(v,u)
u=w.b
u===$&&B.c()
w.b3A(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3A(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.by(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpR.prototype={
ir(d){var w,v=this
v.a.tZ(0)
v.c=0
A.aI.hx(v.b,0,4,0)
v.w=0
w=v.r
A.d.hx(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqo(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b52(u,0)
v.c=0}v.a.aNx(1)},
D2(d,e,f,g){var w=this.cqF(e,f,g)
f+=w
g-=w
w=this.cqG(e,f,g)
this.cqw(e,f+w,g-w)},
LP(d,e){var w,v=this,u=C.htk(v.a),t=u.a
t===$&&B.c()
t=C.hiS(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hiS(w,3)
v.cqA()
v.cqx(u)
v.auP()
v.ckG(d,e)
v.ir(0)
return 20},
b52(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ox(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iH===w.d)
if(w.w===16)w.auP()},
auP(){this.d_h()
this.w=0
A.d.hx(this.r,0,16,0)},
cqw(d,e,f){while(f>0){this.aqo(d[e]);++e;--f}},
cqG(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b52(d,e)
e+=4
f-=4
w.aNx(4)
v+=4}return v},
cqF(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqo(d[e]);++e;--f;++v}return v},
cqA(){this.aqo(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqo(0)}},
cqx(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auP()
u=v.d
switch(u){case A.iH:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fx:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.v(0)))}},
ckG(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iH===this.d,s=0;s<w;++s){r=v[s]
q=J.ox(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cpU.prototype={
d_h(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qA[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qA[30]
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
C.cpQ.prototype={
biz(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D2(0,w,0,v)
w=s.d
w===$&&B.c()
r.LP(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.ha(w,0,u,s.d)
s.bda(s.d,u,54)
s.bda(s.e,u,92)
u=s.d
r.D2(0,u,0,u.length)},
LP(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LP(s,w)
s=u.e
t.D2(0,s,0,s.length)
v=t.LP(d,e)
s=u.e
A.aI.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D2(0,s,0,s.length)
return v},
bda(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpL.prototype={}
C.cpK.prototype={
a3s(d){return(D.oV[d&255]&255|(D.oV[d>>>8&255]&255)<<8|(D.oV[d>>>16&255]&255)<<16|D.oV[d>>>24&255]<<24)>>>0},
bp9(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dO("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e5(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3s((m>>>8|(m&$.qA[24])<<24)>>>0)^D.cO4[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3s((k>>>8|(k&$.qA[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3s((k>>>8|(k&$.qA[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3s((g>>>8|(g&$.qA[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3s(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRZ(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ox(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eq[a8&255]
u=D.eq[a9>>>8&255]
t=$.qA[8]
s=D.eq[b0>>>16&255]
r=$.qA[16]
q=D.eq[b1>>>24&255]
p=$.qA[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eq[a9&255]
s=D.eq[b0>>>8&255]
u=D.eq[b1>>>16&255]
v=D.eq[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eq[b0&255]
u=D.eq[b1>>>8&255]
s=D.eq[a8>>>16&255]
q=D.eq[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eq[b1&255]
a8=D.eq[a8>>>8&255]
a9=D.eq[a9>>>16&255]
b0=D.eq[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eq[n&255]
b0=D.eq[m>>>8&255]
a9=D.eq[l>>>16&255]
a8=D.eq[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eq[m&255]
b0=D.eq[l>>>8&255]
o=D.eq[b1>>>16&255]
s=D.eq[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eq[l&255]
o=D.eq[b1>>>8&255]
b0=D.eq[n>>>16&255]
u=D.eq[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eq[b1&255]
o=D.eq[n>>>8&255]
s=D.eq[m>>>16&255]
v=D.eq[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eq[a8&255]^C.nR(D.eq[a9>>>8&255],24)^C.nR(D.eq[b0>>>16&255],16)^C.nR(D.eq[b1>>>24&255],8)^b6[w][0]
m=D.eq[a9&255]^C.nR(D.eq[b0>>>8&255],24)^C.nR(D.eq[b1>>>16&255],16)^C.nR(D.eq[a8>>>24&255],8)^b6[w][1]
l=D.eq[b0&255]^C.nR(D.eq[b1>>>8&255],24)^C.nR(D.eq[a8>>>16&255],16)^C.nR(D.eq[a9>>>24&255],8)^b6[w][2]
b1=D.eq[b1&255]^C.nR(D.eq[a8>>>8&255],24)^C.nR(D.eq[a9>>>16&255],16)^C.nR(D.eq[b0>>>24&255],8)^b6[w][3]
a7=D.oV[n&255]
b0=D.oV[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oV[l>>>8&255]
a9=D.oV[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oV[b1>>>8&255]
h=D.oV[n>>>16&255]
g=D.oV[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oV[l>>>24&255]
s=s[3]
a1=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOv(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ep[a6&255]
v=D.ep[b0>>>8&255]
u=$.qA[8]
t=D.ep[a5>>>16&255]
s=$.qA[16]
r=D.ep[a4>>>24&255]
q=$.qA[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ep[a4&255]
t=D.ep[a6>>>8&255]
v=D.ep[b0>>>16&255]
w=D.ep[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ep[a5&255]
v=D.ep[a4>>>8&255]
t=D.ep[a6>>>16&255]
r=D.ep[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ep[b0&255]
a5=D.ep[a5>>>8&255]
a4=D.ep[a4>>>16&255]
a6=D.ep[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ep[p&255]
a6=D.ep[b0>>>8&255]
a4=D.ep[n>>>16&255]
a5=D.ep[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ep[o&255]
a4=D.ep[p>>>8&255]
a7=D.ep[b0>>>16&255]
t=D.ep[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ep[n&255]
a7=D.ep[o>>>8&255]
a5=D.ep[p>>>16&255]
v=D.ep[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ep[b0&255]
a7=D.ep[n>>>8&255]
t=D.ep[o>>>16&255]
w=D.ep[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ep[a6&255]^C.nR(D.ep[b0>>>8&255],24)^C.nR(D.ep[a5>>>16&255],16)^C.nR(D.ep[a4>>>24&255],8)^b5[a9][0]
o=D.ep[a4&255]^C.nR(D.ep[a6>>>8&255],24)^C.nR(D.ep[b0>>>16&255],16)^C.nR(D.ep[a5>>>24&255],8)^b5[a9][1]
n=D.ep[a5&255]^C.nR(D.ep[a4>>>8&255],24)^C.nR(D.ep[a6>>>16&255],16)^C.nR(D.ep[b0>>>24&255],8)^b5[a9][2]
b0=D.ep[b0&255]^C.nR(D.ep[a5>>>8&255],24)^C.nR(D.ep[a4>>>16&255],16)^C.nR(D.ep[a6>>>24&255],8)^b5[a9][3]
a4=D.zR[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zR[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zR[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zR[o>>>8&255]
i=D.zR[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zR[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ox(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bTf.prototype={}
C.bTg.prototype={
gJ(d){var w=this.a.length
return w},
aqV(){return B.rM(this.a,A.iw,null,null)}}
C.cAh.prototype={
Nr(d){var w=d.w,v=Math.max(1,A.j.cC(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abw(v,t+20,u+16,t,u,B.ux(d.x))},
nF(d){return!1}}
C.bUh.prototype={
cKK(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bUi(),x.E))},
mZ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mZ)
case 6:w=5
return B.b(p.bEE(f,r),$async$mZ)
case 5:case 3:t.length===s||(0,B.I)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mZ,v)}}
C.axT.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9Q.prototype={
A(d,e){if(e==null)return!1
if(J.bW(e)!==B.b4(this))return!1
return e instanceof C.a9Q&&e.a===this.a},
gX(d){return B.by(B.b4(this),B.xs(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
v(d){var w="<optimized out>#"
if(B.b4(this)===D.h7q)return"["+(w+B.ec(this.a))+"]"
return"[ObjectKey "+(w+B.ec(this.a))+"]"}}
C.a2k.prototype={
S(){return new C.aLm(B.aR(x.N))},
cYp(d){return this.d.$1(d)},
cW5(){return this.e.$0()}}
C.aLm.prototype={
Y(){this.a4()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cW5(),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fiZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
a_3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fj2(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fj3(t))
w=3
return B.b(C.apg(p),$async$a_3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fj4(t,s,p))
w=4
return B.b(t.PT(),$async$a_3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_3,v)},
a2n(d){return this.cuR(d)},
cuR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fj_(t))
s=J.t(d,"id")
w=3
return B.b(C.c4f(J.k(s==null?"":s)),$async$a2n)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fj0(t))
w=1
break}q=C.hig(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYp(B.a([q],x.D)),$async$a2n)
case 4:if(t.c==null){w=1
break}t.m(new C.fj1(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2n,v)},
PS(d,e){return this.bOX(0,e)},
bOX(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fiU(q),r,null,!0,!0,x.y),$async$PS)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fiV(t))
s=s.h(e,"id")
w=4
return B.b(C.apf(J.k(s==null?"":s)),$async$PS)
case 4:if(t.c==null){w=1
break}t.m(new C.fiW(t))
w=5
return B.b(t.PT(),$async$PS)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PS,v)},
cJJ(d){var w=B.bh(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iV[B.bM(v)-1]+" "+B.bV(v)},
aTq(d,e){var w=null,v=B.l(e*0.3)
return B.r(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ql,A.n),w,e,w,w,w,w,w,e)},
aTp(d){return this.aTq(d,44)},
baf(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ql:u,r=B.l(14),q=B.X(e,t?A.c:A.aF,u,u,u,17),p=x.p
q=B.a([q,A0.AP,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aF,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.u(q,B.a([A0.AP,B.r(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bJg,u,u,u)],p))}return B.E(B.az(A.c3,B.cT(u,B.A(q,A.l,u,A.ba,A.i,0,u,u),u,u,A.b_,new B.o(u,u,u,r,u,s,A.n),A.h7,u,u,u,u,A.qF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fj8(this,d),u,u,u,u,u,u,!1,A.a4),1)},
coD(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d7.j(0.14):D.a_y,n=B.l(18),m=p?A.d7:A.dr
m=B.K(m,A.r,p?1.8:1)
w=this.aTp(A.qS)
v=B.d(d.b,q,1,A.a2,q,q,q,S.abW,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cR,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aXj,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Ql:q
u=p?q:B.K(A.aT,A.r,1.6)
r=p?D.c_S:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bd,t,B.cT(q,r,q,q,A.b_,new B.o(q,q,u,q,q,v,A.a6),A.h2,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.i,0,q,q),q,q,A.b_,new B.o(o,q,m,n,q,q,A.n),A.h2,q,q,q,A.da,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fiY(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cws(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJJ(J.k(o==null?"":o))
o=B.l(18)
w=B.K(A.dr,A.r,1)
v=r.aTp(A.Pt)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,S.abW,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cR,B.d(p+" slides"+t,q,q,q,q,q,q,D.aXj,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6J(A.hP,A.bw,"Bring it back",r.r?q:new C.fj5(r,d))
return B.r(q,B.A(B.a([v,A.bd,t,p,A.bo,r.b6J(A.ek,A.bZ,"Delete",r.r?q:new C.fj6(r,d))],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.a_y,q,w,o,q,q,A.n),q,q,q,A.da,D.bDt,q,q,q)},
b6J(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.h9(B.az(w,B.r(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
av4(d,e,f){var w=null
return new B.D(D.bCs,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fDC,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fvq,A.K,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cf
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c1,x.w).w
u=B.r(i,i,A.f,i,i,new B.o(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTq(A.zE,46),A.bd,D.bKf],t)
if(j.r)s.push(D.evF)
s.push(B.aI(i,i,i,i,A.tm,i,i,i,new C.fjb(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.K(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.W,u,new B.D(D.bGe,s,i),B.r(i,B.A(B.a([j.baf(0,A.zj,"Save",j.a.c.length),j.baf(1,A.PK,"Saved",o.gJ(h))],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bFf,A.eC,i,i,i)],t)
if(j.x!=null){u=(j.y?A.bZ:A.bw).j(0.12)
s=B.l(14)
r=B.K((j.y?A.bZ:A.bw).j(0.4),A.r,1)
p=j.y
n=p?A.HC:A.ee
n=B.X(n,p?A.bZ:A.bw,i,i,i,18)
m=j.x
m.toString
q.push(B.r(i,B.A(B.a([n,A.af,B.E(B.d(m,i,i,i,i,i,i,A.VI,i,i,i),1)],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bFb,A.hM,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fzg,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fCy,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fjc(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.av4(A.qS,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.I)(r),++l)s.push(j.coD(r[l]))
A.d.u(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.evb)
else if(j.e==null)s.push(j.av4(A.a37,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.av4(A.oC,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cws(r.gR(r)))
A.d.u(u,s)}q.push(new B.di(1,A.cl,B.cm(u,i,i,A1.amW,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8X()
p=s?i:D.Ql
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b8.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zj,m?A.k_:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bFR,B.az(i,B.cT(i,B.A(B.a([k,A.Vi,new B.di(1,A.cl,new B.dE(A.dY,A.A,A.f,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.k_:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i),i)],t),A.l,i,A.ba,A.i,0,i,i),i,i,A.b_,new B.o(s,i,i,o,n,p,A.n),A.h7,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.r(i,B.bm(!0,B.x(q,A.l,i,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b8D,i,i,i,i,i,i,i,i)}}
C.oP.prototype={
aj(){return B.J(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.a_2.prototype={
S(){return new C.azO(B.a([],x.k),B.f4(null,x.H))},
ge3(){return this.c}}
C.azO.prototype={
Y(){this.a4()
this.Q2()},
Q2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3k(t.a.c),$async$Q2)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q2,v)},
cCM(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.oz(t.d,new C.cQE(d))
v=w<0
if(v&&C.i4n(d))return t.f
u=t.d
if(v)J.n2(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h8m(new C.cQF(t),v)
return t.f=t.f.bG(new C.cQG(t,d),v).eG(new C.cQH())},
Jk(d,e,f){return this.ci9(0,e,f)},
b0s(d,e){return this.Jk(0,e,!1)},
ci9(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ed(new C.cQA(t,e),!1,null,x.H)),$async$Jk)
case 3:w=4
return B.b(t.f,$async$Jk)
case 4:w=5
return B.b(t.Q2(),$async$Jk)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jk,v)},
b_I(d){var w=A.o.v(1000*Date.now()),v=d==null?D.dPq:d
this.Jk(0,new C.oP(w,v,new B.V(Date.now(),0,!1)),!0)},
c8o(){return this.b_I(null)},
aeM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQI(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_I(s)
case 1:return B.h(u,v)}})
return B.i($async$aeM,v)},
Jj(d,e){return this.bOO(0,e)},
bOO(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cQv(e),s,null,!0,!0,x.y),$async$Jj)
case 3:if(g!==!0){w=1
break}t.m(new C.cQw(t,e))
w=4
return B.b(t.f,$async$Jj)
case 4:w=5
return B.b(C.ahP(t.a.c,e.a),$async$Jj)
case 5:w=6
return B.b(t.Q2(),$async$Jj)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
DQ(d){return this.bGS(d)},
bGS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQr(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DQ)
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
return B.b(t.b0s(0,d),$async$DQ)
case 9:w=5
break
case 7:w=10
return B.b(F.hiU(r,d.b,null),$async$DQ)
case 10:w=5
break
case 8:w=11
return B.b(t.Jj(0,d),$async$DQ)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
c1N(){var w,v,u,t,s=null,r=[D.dPt,D.dPr,D.dPs],q=new C.cQy(),p=B.l(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d3.j(0.4),A.eR,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dy2[w]
u=A.c.j(0.18)
t=new B.aO(999,999)
l.push(B.r(s,B.d(v,s,s,s,s,s,s,A.p7,s,s,s),A.f,s,s,new B.o(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.oy,s,s,s))}return B.r(s,B.A(B.a([B.E(B.x(B.a([D.h2I,A.T,B.bX(A.bH,l,A.bt,s,6,6),A.aO,B.az(s,B.r(s,D.fcB,A.f,s,s,new B.o(A.c,s,s,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,W.anl,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQx(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c8A,A.n),s,s,s,s,D.bGo,s,s,s)},
bGQ(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.r(v,B.bx(B.l(6),new B.an(A.a0,v,A.b2,A.t,B.a([new B.dE(A.c0,A.A,A.f,F.apS(d.b),v),D.eBH,B.ap(v,B.az(v,B.r(v,D.c0K,A.f,v,v,D.b9B,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQm(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fsw,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.T,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fzs,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQn(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQo(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eR(B.a([new B.D(Q.alQ,B.h9(B.az(s,B.r(s,A.asM,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b8.j(0.5),A.J,12)],x.V),E.x4,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9M(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nC,s,s,s,!0,s,s,s,s,s,D.h2M,s,s,s,1,s,!0)
if(t.e)r=D.bdf
else{w=t.c1N()
v=B.a([D.fOO,A.af],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.r(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.frZ,s,s,s),A.f,s,s,new B.o(D.biu,s,s,u,s,s,A.n),s,s,s,s,A.yY,s,s,s))}r=B.a([new B.nI(A7.a0Y,new B.m6(w,s),s),new B.nI(D.bFL,new B.m6(B.A(v,A.l,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fjM)
else r.push(new B.nI(D.bFd,B.PZ(new B.oT(new C.cQJ(t),J.ad(t.d),!0,!0,!0,0,B.ts(),s),D.bcu),s))
r=B.w8(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bh4,r,s,!1,!1,s,s)}}
C.a_0.prototype={
S(){return new C.azK(B.a([],x.bx))},
UX(d){return this.d.$1(d)}}
C.aH9.prototype={}
C.azK.prototype={
b3C(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb0r()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aW(0,u)
return new C.aH9(v,w,f)},
EE(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qD,new C.cPQ(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a4()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b5,A.aP),v)
t=m.gb0r()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b5,A.aP),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b5,A.aP),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aW(0,t)
r.push(new C.aH9(o,n,p.c))}if(r.length===0)r.push(m.b3C("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpz()
q=r.a
q.UX(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.ax()
q.P$=0
q=r.e
q===$&&B.c()
q.U$=w
q.P$=0
q=r.f
q===$&&B.c()
q.U$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.U$=w
s.P$=0
s=t.b
s.U$=w
s.P$=0}r.a3()},
gpz(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.I)(s),++q){p=s[q]
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rR(n,w,v,t,u)},
Bq(){var w=0,v=B.j(x.H),u=this,t
var $async$Bq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpz()
t=u.a
w=2
return B.b(t.UX(t.c),$async$Bq)
case 2:return B.h(null,v)}})
return B.i($async$Bq,v)},
c9K(){this.m(new C.cPP(this))
this.EE()},
b_n(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPS(w,d,v))
w.EE()},
c9L(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cQ_())
this.EE()
$.aU.x1$.push(new C.cQ0(w))},
Rm(d){return this.cot(d)},
cot(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(80,1400,A.eQ),$async$Rm)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rm)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajm(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPT(d,n,p))
r.EE()
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
return B.i($async$Rm,v)},
yt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hH6(r,t.gpz()),$async$yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPR(t,s))
t.EE()
case 1:return B.h(u,v)}})
return B.i($async$yt,v)},
coL(d){var w,v=this,u=null,t=F.fP4(d.c)
if(t==null)return new B.bL(A.a7,u,u,B.hs(D.bUM,D.fRo,new C.cPV(v,d),u),u)
w=x.p
return new B.D(A.cy,new B.an(A.a0,u,A.ad,A.t,B.a([B.bx(B.l(12),B.fU(t,A.A,u,u,A.ck,A.c0,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6K(A.jO,new C.cPW(v,d)),A.bo,v.b6K(A.cC,new C.cPX(v,d))],w),A.l,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6K(d,e){var w=null
return B.aH(!1,A.a3,!0,w,B.aN(!1,w,!0,new B.D(A.hN,B.X(d,A.c,w,w,w,18),w),A.cT,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b6,0,w,w,A.cT,w,w,A.aj)},
JY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bq(),$async$JY)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hiU(s,t.gpz(),new C.cPZ(t)),$async$JY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eR(B.a([new B.D(A.ps,B.hs(D.bZz,D.fXC,m.gaAT(),B.fs(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.asL,l,l,l,new C.cQ1(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Zu,l,1,l,l,l,!1,l,!1,E.nC,l,l,l,!0,l,l,l,l,l,D.fSg,l,l,l,1,l,!0),i=Ay.aX3(N.lG,A.c,Ag.Ya,A.oO,D.fT0,m.gc9J()),h=B.l(18),g=m.gayP(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.i8,12)],x.V)
f=B.az(l,B.r(l,new B.a5(92,142.1818181818182,new B.dE(A.dD,A.A,A.f,F.apS(m.gpz()),l),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.r(l,B.A(B.a([f,A.ew,B.E(B.x(B.a([D.h4m,A.aw,B.d(F.hhj(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fFv,l,l,l),A.W,B.dh(E.as2,l,E.aY5,g,B.bp(A.d3,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.Zu,l,l,h,l,l,A.n),l,l,l,l,A.bk,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),g,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.p5,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),w,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aC,g,A.T,w,A.T,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aO(16,16)
u=new B.ay(N.lG.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fG3,l,l,l)
r=B.aI(l,l,l,l,D.bYb,l,l,l,v===0?l:new C.cQ2(m,v),l,l,l,l,"Move up",A.ch)
q=h.length
p=B.aI(l,l,l,l,D.c3V,l,l,l,v===q-1?l:new C.cQ3(m,v),l,l,l,l,"Move down",A.ch)
q=q===1?l:new C.cQ4(m,v)
o=new B.aO(12,12)
n=new B.aO(12,12)
f.push(B.r(l,B.x(B.a([new B.c8(A.aL,A.e,A.i,A.l,l,A.p,l,0,B.a([s,A.b1,r,p,B.aI(l,l,l,l,B.X(A.ek,A.po,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ch)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),h[v].a,l,l,l,l,l,2,new B.e7(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.ce,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.coL(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),h[v].b,l,l,l,l,l,2,new B.e7(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nC,l,new B.bG(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9Q(g),A.eo,D.bDL,l,l,l))}return B.oQ(!0,B.c4(j,E.ajP,B.cm(f,l,l,D.bEf,l,l,A.ah,!1),l,!1,!1,i,l),new C.cQ5(m),x.C)}}
C.azM.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.bZ:E.nC,q=B.l(16),p=B.l(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d3.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eP,B.aH(!1,A.a3,!0,t,B.aN(!1,q,!0,B.r(t,B.A(B.a([B.r(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aWC,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eJ,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.asc.prototype={
S(){return new C.aFX()}}
C.aFX.prototype={
Y(){this.a4()
this.a_N()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a2c()},
a2c(){var w=0,v=B.j(x.H),u=this,t
var $async$a2c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dN(t,x.H),$async$a2c)
case 2:u.d=null
if(u.c!=null)u.m(new C.emu(u))
w=3
return B.b(u.a_N(),$async$a2c)
case 3:return B.h(null,v)}})
return B.i($async$a2c,v)},
a_N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZG(B.cC(n,0,null),new B.Ql(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iX(0).dg(0,A.qA),$async$a_N)
case 7:if(r.c==null){w=1
break}r.d.u0(!1)
r.m(new C.ems(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.emt(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_N,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccQ(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hh(0)
w.m(new C.emv(w))}else{v.qr(0)
w.m(new C.emw(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.l(8*n.d)
m=B.a([D.jE.j(0.92),D.Mz.j(0.95)],x.O)
w=B.K(A.c2.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qV,A.c2,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bN(new B.o(o,o,w,n,o,new B.a8(A.aA,A.aD,A.x,m,o,o),A.n),A.bi,B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.O,0,A.p),o,o,o),o)}if(p.f)return B.as(B.X(A.arf,A.aF,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.be7
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([new B.dE(A.c0,A.A,A.t,new B.a5(r,q,new B.AQ(s,o),o),o)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.r(o,B.X(A.hn,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bx(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccP(),o,o,o,o,o,o,!1,A.a4)}}
C.yf.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jG.prototype={}
C.aeL.prototype={
B(d){return B.pj(new C.e8P(this,B.P(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae9.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.H,s=B.l(18),r=B.l(18),q=B.K(D.jE.j(t?0.35:0.4),A.r,1),p=t?D.Nf:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.l(10),l=B.K(A.c2.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dN,6)],o)
w=this.c
o=B.E(B.r(u,new B.fH(0.5625,C.inI(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.anR,u,u,u,u),1)
m=D.jE.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jE,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aH(!1,A.a3,!0,u,B.aN(!1,s,!0,B.r(u,B.x(B.a([o,B.r(u,B.x(B.a([l,A.cR,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aF:D.bpT,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.am6,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yi.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o9.prototype={}
C.bm1.prototype={
a_W(d){var w=null
return new B.bL(A.a7,w,w,B.BZ(A.A,B.r(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cdj(){return this.a_W(1)},
azw(d){var w=null,v=B.l(8),u=B.K(A.iy,A.r,0.9)
return B.r(A.A,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.aho,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.r(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.r(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.p(-8.36,0))],u),A.l,v,A.ba,A.i,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azw("TAARIFA ZA WANANDOA"),A.am,w.cdj(),A.cR,w.a_W(0.9),A.cR,w.a_W(0.7),A.T,w.azw("TAMKO LA MAKUBALIANO"),A.fG,w.a_W(1),A.cR,w.a_W(0.95),A.T,w.azw("MASHAHIDI"),A.b1,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.i,0,A.p)}}
C.aeO.prototype={
B(d){return B.pj(new C.erg(B.P(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.agu.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.H,p=B.l(18),o=B.l(18),n=B.K(A.aE.j(q?0.35:0.4),A.r,1),m=q?D.bpp:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.l(10),i=B.K(A.aE.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dN,6)],l)
w=this.c
v=C.hhP(w.a)
if(v==null)v=A.d.gH(D.SW)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.r(r,new B.fH(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bS(0,B.fU(C.hhO(v.d),A.A,r,r,A.ck,A.c0,!0,r,!1,r,r),0,0,0),new B.D(A.amL,new C.bm1(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.anR,r,r,r,r),1)
j=A.aE.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:S.Ng,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aH(!1,A.a3,!0,r,B.aN(!1,p,!0,B.r(r,B.x(B.a([l,B.r(r,B.x(B.a([i,A.cR,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aF:D.bhJ,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.am6,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.lf.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9i.prototype={}
C.Xa.prototype={
S(){var w=$.ax()
return new C.aGd(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mZ(0,null,null),A.d.gH(D.a6e),D.dZV,B.a([],x.L),B.a([],x.gE))}}
C.aGd.prototype={
Y(){var w,v=this
v.a4()
v.w=v.a.c
v.z=new C.Ag(C.fT3(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fRV().bG(new C.eud(v),w)
$.rm().jp(0,"assets/images/ngmy_logo.png").bG(new C.eue(v),w).eG(new C.euf())},
t(){var w=this,v=w.e,u=$.ax()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a3()},
afE(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(88,1600,A.eQ),$async$JD)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JD)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hHn(m,p),$async$JD)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bGq(new B.qd(o,1),m),$async$JD)
case 10:if(r.c!=null)r.m(new C.etQ(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afE("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JD,v)},
XN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hHn(s,q),$async$XN)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bGq(new B.qd(r,1),s),$async$XN)
case 4:if(t.c!=null)t.m(new C.etM(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XN,v)},
afF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etX(q))
t=4
q.a.toString
p=C.isM()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afF)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etY(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afE(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etZ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afF,v)},
a00(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a00=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etS(q,i))
t=4
q.a.toString
p=C.isL()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a00)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etT(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.etU(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etV(q))
$.aU.x1$.push(new C.etW(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a00,v)},
cdz(d){this.m(new C.etR(this,d))},
EV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etO(q))
t=4
w=7
return B.b($.aU.gmu(),$async$EV)
case 7:w=8
return B.b(B.bO(A.n_,null,x.H),$async$EV)
case 8:k=$.aU.ap$.x.h(0,q.d)
p=k==null?null:k.gbf()
if(!(p instanceof B.qn))throw B.W("The page is not ready yet.")
w=9
return B.b(p.lU(1800/p.gZ(0).a),$async$EV)
case 9:o=e
w=10
return B.b(o.hi(A.ha),$async$EV)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahR(J.eQ(A.dM.gaU(n)),"ngmy_news.png","image/png"),$async$EV)
case 11:m=e
q.afE(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afE(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etP(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.lo,a2,a2,a2,new C.eu4(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.c_6,a2,a2,a2,new C.eu5(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oN,a2,a2,a2,a4?a1.gb1J():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eR(v,a2,a2,!0,!0,A.Cc,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.fcM,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eR,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.r(a2,new B.fH(0.7142857142857143,new B.dE(A.dD,A.A,A.f,new B.em(new C.b3o(t,s,r,a1.x,a2),a1.d),a2),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,Y.tV,a2,a2,a2)
t=a1.as?a2:a1.gcdy()
t=B.a([B.E(B.dh(D.c_T,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bp(D.up,a2,a2,a2,A.c,A.hb,a2,a2,new B.b9(B.l(14),P.w0),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.l(10),B.fU(r,A.A,a2,a2,A.ck,A.c0,!1,48,!1,a2,48),A.aq)
A.d.u(t,B.a([A.au,r,B.aI(a2,a2,a2,a2,D.bXs,a2,a2,a2,a1.as?a2:a1.gbNp(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,Y.tV,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aP(),a1.e,a2,a2,a2,a2,a2,2,a1.aVh("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.drP[o]
p.push(B.n3(a2,D.up,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pX,a2,a2,a2),A.hs,new C.eu6(a1,n),a2,a2,P.w0,a2))}p=B.bX(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bX(A.bH,B.a([D.h2V,A.bd,B.jy(a2,a2,a2,D.fNv,a2,new C.eu7(a1),m==="en",a2,a2,a2,a2),A.af,B.jy(a2,a2,a2,D.fNq,a2,new C.eu8(a1),m==="sw",a2,a2,a2,a2)],w),A.vV,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,Y.tV,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cX(D.a6e,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTJ(g==null?h.a(g):g))}k=B.cm(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cX(D.a6e,10,a2,j),h=j.$ti,j=new B.bR(j,j.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTJ(g==null?h.a(g):g))}j=B.cm(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdB()
h=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aC,new B.D(A.cy,s,a2),t,A.aC,new B.D(A.cy,r,a2),q,A.T,p,A.W,m,A.aC,new B.D(A.cy,l,a2),new B.a5(a2,78,k,a2),A.T,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.r(A.A,B.A(B.a([D.c_N,A.af,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fH,a2,a2,a2)],w),A.l,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.vb,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e4,B.A(B.a([D.dK7,A.au,D.bKD],w),A.l,a2,A.e,A.i,0,a2,a2),A.T],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a7
q=e?A.b8.j(0.35):D.up
p=new B.aO(16,16)
d=new B.ay(A.by,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.r(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fDl,a2,a2,a2),A.f,a2,A9.XV,new B.o(q,a2,new B.bG(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cy,A.hM,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dcP[o]
t.push(B.n3(a2,D.up,B.d(a0,a2,a2,a2,a2,a2,a2,A.KP,a2,a2,a2),A.hs,new C.eu9(a1,a0),a2,a2,P.w0,a2))}u.push(B.bX(A.bH,t,A.bt,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aP(),a1.f,a2,a2,a2,a2,a2,2,a1.aVh("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eua(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdA()
u.push(B.A(B.a([t,A.af,B.IL(A.zI,s,B.o3(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.i,0,a2,a2))
u.push(A.aC)
t=a1.as?a2:a1.gb1J()
u.push(B.dh(A.oN,a2,D.fZl,t,B.bp(A.d2,a2,a2,a2,a2,A.Kw,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.u(v,u)}v=B.a([B.cm(v,a1.r,a2,A.amv,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.K(E.kr.j(0.5),A.r,1)
v.push(B.bS(0,B.ea(B.as(B.r(a2,B.A(B.a([E.ab_,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jA,a2,a2,a2)],w),A.l,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(E.C3,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bGG,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.Cc,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVh(d){var w=null
return B.bA(w,new B.b6(4,B.l(14),A.a1),w,A.eW,w,w,w,w,!0,w,w,w,w,w,w,D.up,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A_.EP,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTJ(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b0(d.f),p=s?A.bE:A.by
p=B.K(p,A.r,s?2.4:1)
w=B.a([B.r(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kx,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.r(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bCH,t,t,t,t))
w.push(A.cR)
w.push(new B.D(A.js,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.r(t,B.x(w,A.l,t,A.ba,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iR,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etN(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ag.prototype={
bfk(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ag(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOt(d){var w=null
return this.bfk(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.J(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjT(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjR(),B.U(w).k("N<1,n>")).bY(0,new C.cjS())
t=B.C(w,w.$ti.k("M.E"))}else t=k
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
return this.bfk(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG8(d){return this.f}}
C.tQ.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cd.prototype={
a7(){return"NewsFrame."+this.b}}
C.lA.prototype={}
C.b3o.prototype={
rZ(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1L(d,e,f,g){return this.rZ(d,e,null,1.25,f,A.bs,g)},
QF(d,e,f,g,h){return this.rZ(d,e,f,1.25,g,A.bs,h)},
azC(d,e,f,g,h){return this.rZ(d,e,null,f,g,A.bs,h)},
azB(d,e,f,g,h){return this.rZ(d,e,f,g,0,A.bs,h)},
b1N(d,e,f,g,h){return this.rZ(d,e,null,f,0,g,h)},
cdF(d,e,f,g,h,i){return this.rZ(d,e,f,g,0,h,i)},
azA(d,e,f,g){return this.rZ(d,e,null,f,0,A.bs,g)},
afI(d,e,f){return this.rZ(d,e,null,f,0,A.bs,A.cZ)},
b1M(d,e,f,g,h){return this.rZ(d,e,f,g,0,h,A.cZ)},
cdE(d,e,f,g){return this.rZ(d,e,null,f,0,g,A.cZ)},
cdD(d,e,f,g){return this.rZ(d,e,f,g,0,A.bs,A.cZ)},
afJ(d,e,f,g,h,i){return this.rZ(d,e,f,g,h,A.bs,i)},
b1K(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iL(new B.eq(d,u,u,A.cN,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jj(1),u,u,h,u,A.bY,u,A.ct)
v.o8(g)
if(!v.b.a.c.gaGJ())return w
w-=2}return j},
afG(d,e,f,g,h,i,j,k){return this.b1K(d,e,f,g,h,i,j,k,A.bs)},
aBO(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.r(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.u(t,B.a([new B.a5(w,3,w,w),B.r(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
aBN(d){return this.aBO(null,!1,d)},
aiG(d,e){return this.aBO(null,d,e)},
cvz(d,e){return this.aBO(d,!1,e)},
gb3Z(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXZ(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pn(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afG(w.gaXZ(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaXZ(),v,g,A.a2,v,v,v,w.azB(u,t,f,1.02,A.U),e,v,v)},
aY3(d){return this.Pn(d,A.K,null,2,78,30)},
acV(d,e,f,g,h){return this.Pn(d,e,null,f,g,h)},
c1G(d,e,f,g,h){return this.Pn(d,A.K,e,f,g,h)},
c1F(d,e,f){return this.Pn(d,A.K,null,e,f,30)},
SE(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jJ,B.d(s,u,g,A.a2,u,u,u,v.b1M(w,v.b1K(t,w,A.cZ,d,g,h,15,1.2,A.cK),f,1.2,A.cK),e,u,u),u)},
b9U(d){return this.SE(d,A.K,null,3,24)},
aDh(d,e,f,g){return this.SE(d,e,null,f,g)},
cDf(d,e,f){return this.SE(d,A.K,e,3,f)},
b9V(d,e){return this.SE(d,e,null,3,24)},
cDd(d,e){return this.SE(d,A.K,null,3,e)},
cDe(d,e,f){return this.SE(d,e,null,3,f)},
at6(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f5,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QF("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.r(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.r(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v)},
Oh(){return this.at6(null,!0)},
at5(d){return this.at6(null,d)},
bJj(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.i2,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdE(this.d.as,13.5,1.2,A.cK),e,w,w),w),w)},
wb(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3Z(),h=A.o.aq(j.bD(B.c_(B.bD(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ifv(Math.max(1,B.bD(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1L(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afG(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afG(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.r(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eS,l,l,l,m.afJ(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.l,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.T,B.A(B.a([B.d(C.bFE(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iY,A.i,0,l,l),A.am,m.aiG(!0,3)],s),A.l,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.r(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.E(B.d(i,l,1,A.eS,l,l,l,m.azA(v,u*0.9,1,A.U),l,l,l),1)],w),A.l,l,A.e,A.i,0,l,l),A.W,B.A(B.a([B.d(C.bFE(j),l,l,l,l,l,l,m.QF(k,13,B.b0(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iY,A.i,0,l,l),A.T,m.cvz(B.b0(h),3)],w),A.l,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3Z()
v=B.d("NGMY",l,l,l,l,l,l,m.azC(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.af,B.eI(A.A,-0.03,B.r(l,B.d("NEWS",l,l,l,l,l,l,m.rZ(k,r*0.72,o,1.05,-0.5,A.cK,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b1,new B.di(1,A.cl,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afJ(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.U),A.e5,l,l),l)],n),A.l,l,A.e,A.i,0,l,l),A.T,B.r(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iY,A.i,0,l,l)
t=m.aiG(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azA(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiG(!0,1.4),A.aw,B.d(C.bFE(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBN(3)],h),A.l,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azC(v,u,1,3,A.U),A.K,l,l),A.T,m.aiG(!0,1.2),A.aw,B.A(B.a([B.d(C.bFE(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iY,A.i,0,l,l),A.aw,m.aBN(3)],h),A.l,l,A.e,A.i,0,A.p)}},
ae6(d){return this.wb(d,!1)},
afH(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.l(f)
return B.r(w,B.d(d,w,w,w,w,w,w,this.afJ("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cdC(d,e){return this.afH(d,null,e,null)},
b_f(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.df(v),12)===0?12:A.o.F(B.df(v),12),t=B.b0(this.d.w).j(0.75),s=this.azB("Roboto",15,t,1,A.cE),r=B.X(E.apt,t,w,w,w,18),q=A.a.aB(A.oS[B.bM(v)-1],0,3),p=A.a.b_(A.o.v(B.fS(v)),2,"0"),o=B.df(v)>=12?"PM":"AM"
return B.A(B.a([r,A.af,B.d(q+" "+B.bV(v)+", "+B.bD(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.r(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h9,w,w,w,1),B.X(d,t,w,w,w,19),A.af,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
ayg(){return this.b_f(A.n7)},
b6X(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afJ("Roboto",this.afG(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBR(d,e,f){return this.b6X(d,e,f,30)},
aDk(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.t_,B.d(v,w,e,A.a2,w,w,w,this.cdD("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9Z(d){return this.aDk(d,3,22)},
cDq(d,e){return this.aDk(d,e,22)},
uk(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fU(r,A.A,s,s,A.ck,A.c0,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BL(D.bJx,w,s)
if(v==="sepia")w=new B.BL(D.bJw,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.r(s,B.as(B.X(A.zc,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bN(new B.o(s,s,s,s,s,new B.bY(A.A,0.95,A.x,s,0,B.a([A.L,A.Zq.j(0.38)],x.O),s,s),A.n),A.bi,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.K(B.b0(i),A.r,3)
i=B.K(B.b0(i),A.r,1)
return B.r(j,B.r(j,k.uk(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.eC,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.lN,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.eqX,14)],x.V)
v=k.uk(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eI(A.A,-0.035,B.r(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b1M(i.as,13.5,D.bjs,1.1,A.cK),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.bnn,j,j,j,w,j,A.n),j,e,j,j,D.bEa,j,j,d),j)
case 3:w=B.l(30)
i=B.K(B.b0(i.x),A.r,5)
return B.r(j,B.bx(B.l(25),k.uk(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.K(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.as(B.r(j,B.hY(k.uk(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a6),j,t,j,j,A.lN,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.eqD,10)],x.V)
return B.eI(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bS(0,B.r(j,k.uk(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.t5,j,j,j),0,0,0),B.ap(j,B.eI(A.A,-0.6,B.r(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eI(A.A,-0.6,B.r(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b3(B.nX(k.uk(d,e),A.aq,D.hyd),new C.bf1(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.uk(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aO(2,2)
n.push(B.r(j,j,A.f,j,j,new B.o(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aL,A.qZ,A.i,A.l,j,A.p,j,0,n,j),j))}return B.r(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.er,j,j,j,e,j,j,D.bIN,j,j,d)
case 8:w=d/2
v=B.xD(A.fS,new B.aO(w,w))
i=B.K(B.b0(i.x),A.r,5)
w-=5
return B.r(j,B.bx(B.xD(A.hW,new B.aO(w,w)),k.uk(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.fR,22)],x.V)
return B.r(j,k.uk(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nX(k.uk(d,e),A.aq,D.hGo),j)
case 0:i=B.K(B.b0(i.w),A.r,2.4)
return B.r(j,k.uk(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.eC,j,j,d)}},
aRd(d,e){return this.d.e===D.Ty?A.bM:this.bJj(d,e)},
Xj(d){return this.aRd(d,A.K)},
gaCB(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCA(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.K(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1N(v.Q,19,1.15,A.cK,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QF("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afI(v.as,13,1.25),n,n,n),1))
A.d.u(q,r)}return B.r(n,B.jo(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gclY(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaC(d,e,f,g){return B.co(new C.cjU(this,e,d,f,g))},
aaB(d){return this.aaC(d,22,!0,18)},
Xw(d,e){return this.aaC(d,22,!0,e)},
aSj(d,e,f){return this.aaC(d,22,e,f)},
bLj(d,e,f){return this.aaC(d,e,!0,f)},
bcY(d,e,f,g){return B.co(new C.cjV(this,e,d,g,!0,f))},
ckL(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae6(824),A.aC,k.aY3(824),k.b9U(824),A.T,k.Oh(),A.ae,B.as(k.qY(824,360),j,j,j),k.Xj(824),A.ae,B.E(k.aaB(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae6(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acV(440,A.bp,3,62,26),k.aDh(440,A.bp,2,20),A.b1,k.at6(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kx,B.x(B.a([k.qY(362,310),k.Xj(362)],w),A.l,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aBN(2),A.ae,B.E(k.aaB(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.wb(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1G(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cDf(788,u?B.b0(h.f):A.c,22))
v=B.r(j,B.x(s,A.l,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Cz,j,j,j)
u=B.a([B.as(k.qY(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Ty){h=A.w.j(0.65)
u.push(B.ap(0,B.r(j,B.d(s,j,2,A.a2,j,j,j,k.azB(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lM,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a0,j,A.ad,A.t,u,j),A.T,k.Oh(),A.W,B.E(k.Xw(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.wb(824,!0)
w=k.qY(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b7,j,A.ad,A.t,B.a([w,B.ap(0,B.r(j,k.Pn(780,A.bp,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bGZ,j,j,j),j,j,0,0,j,j)],u),j),k.b9V(824,A.bp),A.T,k.Oh(),A.W,B.E(k.aaB(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae6(824),A.aC,k.aY3(824),k.b9U(824),A.T,k.Oh(),A.ae,B.E(k.bcY(3,300,B.x(B.a([k.qY(300,300),k.Xj(300)],h),A.l,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.wb(824,!0)
v=x.p
u=B.x(B.a([k.acV(440,A.bp,3,62,26),k.aDh(440,A.bp,2,20),A.b1,k.at5(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aUt,new B.D(A.i2,k.qY(364,h.e===D.Ty?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aC,B.E(k.Xw(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.ae6(824),A.ae,k.c1F(824,2,70),k.cDd(824,21),A.T,k.Oh(),A.ae,B.E(k.bcY(3,340,B.as(k.qY(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.wb(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFE(new B.V(u,0,!1))
t=x.p
v=B.a([B.r(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QF(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aC],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1N(h.Q,24,1.15,A.cK,A.U),j,j,j))
v.push(A.b1)
if(k.gaCB())v.push(k.aCA(230,250))
return B.x(B.a([w,A.aC,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.r(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.am4,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acV(570,A.bp,3,62,28),k.cDe(570,A.bp,20),A.T,k.at5(!1),A.T,B.as(k.qY(570,330),j,j,j),k.Xj(570),A.W,B.E(k.aSj(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.wb(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QF(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.r(j,B.x(B.a([t,A.am,k.Pn(788,A.bp,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bFg,j,j,j),k.b9V(824,A.bp),A.W,B.as(k.qY(824,310),j,j,j),k.Xj(824),A.T,k.Oh(),A.W,B.E(k.aaB(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wb(824,!0),A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([k.qY(824,430),B.ap(18,k.cdC(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBR(824,3,66),k.b9Z(824),A.ae,B.r(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.ayg(),A.aC,B.E(k.Xw(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wb(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afH(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b6X(410,4,58,28),k.aDk(410,6,20),A.b1],w),A.E,j,A.e,A.i,0,A.p),j),W.aUu,k.qY(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aC,k.ayg(),A.aO,B.E(k.Xw(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.wb(824,!0)
v=k.qY(824,420)
u=B.hSi(-0.25)
t=B.b0(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fB(j,B.r(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdF(i,30,A.c,1,A.cK,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bHe,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBR(824,3,62),k.b9Z(824),A.ae,B.r(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.b_f(A.lS),A.aC,B.E(k.Xw(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wb(824,!0)
u=h.w
t=x.p
w=B.a([k.qY(824,380),B.ap(j,k.afH(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBR(824,2,60)
r=k.cDq(824,2)
p=k.ayg()
o=B.E(k.aSj(2,!1,18),1)
n=B.K(B.b0(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ad,A.t,w,j),A.aO,s,r,A.W,p,A.aC,o,A.ae,B.r(j,B.A(B.a([B.bx(B.l(14),k.uk(150,104),A.aq),A.p3,B.E(B.x(B.a([k.afH("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.T,B.d(q,j,2,A.a2,j,j,j,k.azA(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.O,0,A.p),1),B.X(A.eJ,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.wb(824,!0),A.bz,k.acV(824,A.bp,3,62,30),k.aDh(824,A.bp,2,22),A.W,k.at5(!1),A.W,B.as(k.qY(824,330),j,j,j),k.aRd(824,A.bp),A.aO,B.E(k.bLj(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,new B.bN(new B.o(s,s,s,s,s,new B.a8(A.aA,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi,s,s),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b3(s,s,s,new C.bbt(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bHL,B.x(B.a([B.E(t.ckL(),1),A.T,B.r(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1L(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QF(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iY,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bS(0,new B.du(!0,B.b3(s,s,s,new C.buy(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.K(B.b0(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hY(B.fU(q,A.A,s,s,A.ck,A.c0,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n7,B.b0(w),s,s,s,28))
o.push(A.af)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azC(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.du(!0,B.d3(B.r(s,B.A(o,A.l,s,A.e,A.O,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bIW,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jo(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bf2.prototype={
ju(d){return C.hvN(d)},
k9(d){return!1}}
C.bf1.prototype={
a5(d,e){var w,v=C.hvN(e)
$.S()
w=B.L()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bx4.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e3()
o.cY(3)
w=$.S()
v=B.a([],x.v)
u=new B.aG(w.r,A.ai,null,null,v)
u.E(new B.aZ(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ai()*14)
v.push(w)
r=u.f
if(r!=null)w.ak(r)
u.ab()}u.E(new B.aq(t,8))
w=d.b
r=w-8
u.E(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ai()*14)
v.push(q)
p=u.f
if(p!=null)q.ak(p)
u.ab()}u.E(new B.aq(0,r))
u.E(new B.bu())
return u},
k9(d){return!1}}
C.bbt.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e3()
o.cY(7)
$.S()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.p(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.p(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.bY(A.A,0.5,A.x,p,0,B.a([A.YO.j(0.13),A.L],v),p,p).aK(0,B.bZ(r,q)))
d.N(r,q,w)}w.sav(p)},
aE(d){return!1}}
C.buy.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.ft(u,A.ct,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dE,A.bY)
s.e5()
w=d.c
J.bq(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.p(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.Xb.prototype={
S(){return new C.aGg()}}
C.aGg.prototype={
Y(){var w=this
w.a4()
B.fJg(w.a.c,null).bG(new C.ev_(),x.g7).bG(new C.ev0(w),x.a)
w.a.toString},
gaQ_(){var w=D.aA9[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazD(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaQ_()
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
q=A.j.D(v*p,q,p-q)-q
w=A.j.D(u*o,w,o-w)-w
return new B.a1(q,w,q+s,w+t)},
a02(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a02=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.euN(r))
t=4
q=r.gazD()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q3(new B.pE())
m=B.zy(n,null)
i=B.L()
i.z=A.hl
m.q4(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o3().xH(J.hkZ(p),J.hkZ(o)),$async$a02)
case 7:l=e
w=8
return B.b(l.hi(A.ha),$async$a02)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eQ(J.w2(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.euO(r))
r.c.L(x.q).f.T(D.fms)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a02,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.lo,s,s,s,new C.euU(d),s,s,s,s,s,s),p=x.p
q=B.eR(B.a([B.bP(!1,D.h0Y,s,s,!0,s,s,s,t.y||r==null?s:t.gcdG(),s,s)],p),s,s,!0,!0,A.Cc,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h4Z,s,s,s,1,s,!0)
if(r==null)p=A.m4
else{w=B.E(new B.D(A.bS,B.as(new B.fH(t.gaQ_(),B.co(new C.euV(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iR,B.jy(s,s,s,B.d(D.aA9[u].a,s,s,s,s,s,s,A.abD,s,s,s),s,new C.euW(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.r(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cm(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.c0B,B.E(B.l0(s,s,s,6,1,new C.euX(t),t.f),1),D.c0a],p),A.l,s,A.e,A.i,0,s,s),D.fZe,A.am,B.bP(!1,D.fYX,s,s,!0,s,s,s,new C.euY(t,d),s,s)],p),A.l,s,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.ZG,s,s,s,s,s,s,D.bED,s,s,s)],p),A.l,s,A.e,A.i,0,A.p)}return B.c4(q,A.Cc,p,s,!1,!1,s,s)}}
C.beA.prototype={
a5(d,e){var w
$.S()
w=B.L()
w.z=A.ck
return d.q4(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1j.prototype={
S(){var w=$.ax(),v=x.A
return new C.aHH(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6S),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oZ.prototype={}
C.aHH.prototype={
gaYc(){var w,v,u=this
if(u.p1)w=new B.rE(1,u.p2,0.9,u.p3).jd().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a4()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.f49(w))},
t(){var w=this.d,v=$.ax()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
ZA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rm().jp(0,"assets/images/ngmy_logo.png"),$async$ZA)
case 7:q=e
p=J.eQ(J.w2(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bGq(new B.qd(p,1),o),$async$ZA)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f31(r,p))
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
return B.i($async$ZA,v)},
QI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(92,1800,A.eQ),$async$QI)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QI)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bGq(new B.qd(p,1),n),$async$QI)
case 9:if(r.c==null){w=1
break}r.m(new C.f3p(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QI,v)},
b6j(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a0=w.bb=w.bn=w.y2=0
w.b8=null
w.b6=0.25
w.bg=null
w.bK=0.5
w.aQ=1
w.c8=w.bH=w.bm=0
w.cP=w.c5=!1},
aZZ(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bD2(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.duX)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bD2(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bD2(C.hfv(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bD2(C.hfv(1-a0*0.5,n,n,n),w)}return a1?C.bD2(C.hfv(-1,255,255,255),w):w},
aDq(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xF(u,v,w)
this.dx.pA(new C.f3z(t),!0)
return t},
b8T(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDq()
w=C.ipZ(e.d.a.a,e.db)
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
return C.imj(d,k,v,a0,j,e.gaYc(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cB3(){return this.b8T(null)},
DP(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmu(),$async$DP)
case 3:w=4
return B.b(B.bO(A.eV,null,x.H),$async$DP)
case 4:w=5
return B.b($.aU.gmu(),$async$DP)
case 5:s=$.aU.ap$.x.h(0,t.r)
r=s==null?null:s.gbf()
if(!(r instanceof B.qn)){u=null
w=1
break}w=7
return B.b(r.lU(1080/r.gZ(0).a),$async$DP)
case 7:w=6
return B.b(e.hi(A.ha),$async$DP)
case 6:q=e
u=q==null?null:J.eQ(A.dM.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
abv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2L(q))
t=4
w=7
return B.b(q.DP(),$async$abv)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cV.gcu().aO(p)
n=C.Cs(null,null,null,null,D.oX,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8T(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ac(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2M(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abv,v)},
B8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2J(q))
t=4
w=7
return B.b($.aU.gmu(),$async$B8)
case 7:w=8
return B.b(B.bO(A.n0,null,x.H),$async$B8)
case 8:w=9
return B.b($.aU.gmu(),$async$B8)
case 9:k=$.aU.ap$.x.h(0,q.f)
p=k==null?null:k.gbf()
if(!(p instanceof B.qn))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.lU(1080/p.gZ(0).a),$async$B8)
case 10:o=e
w=11
return B.b(o.hi(A.ha),$async$B8)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahR(J.eQ(A.dM.gaU(n)),"ngmy_quote.png","image/png"),$async$B8)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.T(B.b2(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2K(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B8,v)},
cnU(){var w=this.p4
w.toString
return B.co(new C.f3i(this,w))},
b1U(d,e){var w=null
return B.bA(w,w,w,w,w,D.fxs,w,w,!0,new B.b6(4,B.l(16),P.w0),w,w,w,w,w,D.up,!0,w,w,w,w,new B.b6(4,B.l(16),D.b6h),w,w,w,w,w,w,w,w,Ad.EX,e,w,w,w,w,w,w,w,D.fDa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yD(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.u(u,B.a([B.X(e,A.b8,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aXf,w,w,w))
return new B.D(H.alV,B.A(u,A.l,w,A.e,A.i,0,w,w),w)},
b1T(d,e){var w=null,v=B.l(18),u=B.K(A.by,A.r,1)
return B.r(w,B.aH(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.iq),A.f,w,w,new B.o(D.up,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wj(d){return this.b1T(d,A.bI)},
oz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.vb:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.K(f?A.L:A.by,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.u(s,B.a([B.X(e,q?A.c:A.k_,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.k_,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.O,0,r,r),r,r,A.b_,new B.o(w,r,u,v,r,p,A.n),A.h7,r,r,r,r,A.GV,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahC(d,e,f){return this.oz(d,null,e,f)},
azH(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.ey:A.by,s=x.p
v=B.a([B.cT(w,d,w,w,A.b_,new B.o(u,w,B.K(t,A.r,g?2:1),v,w,w,A.n),A.h7,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aF
A.d.u(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.O,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1X(d,e,f,g,h,i){return this.azH(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aW1,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.evf,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f3v(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.r(u,B.d(j,u,u,u,u,u,u,A.VN,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a1q,u,u,u))
s=B.A(s,A.l,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.abt(w).cPP(A.b8,A.by,A.b8.j(0.2),A.c,D.fc1,4)
return new B.D(A.yH,B.x(B.a([s,B.Z3(B.l0(u,u,u,g,f,new C.f3w(this,h),A.j.D(e,f,g)),w)],t),A.l,u,A.e,A.i,0,A.p),u)},
ajF(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ak3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.I)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bUn:o
n.push(B.az(o,B.r(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f3y(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bX(A.bH,n,A.bt,o,10,10)},
bPt(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6S
else{v=x.a8
w=B.C(new B.Y(D.a6S,new C.f2B(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aP(),o.d,n,n,n,n,n,2,o.b1U("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f2C(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.abT,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aP(),o.e,n,n,n,n,n,2,o.b1U("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f2D(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yD("DESIGNS",A.uU)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d3v[q]
r.push(new B.D(A.iR,o.ahC(p,o.x===p,new C.f2E(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.cb(B.A(r,A.l,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.ae,new B.a5(n,118,B.hS(n,new C.f2F(o,w),w.length,n,n,A.aL,new C.f2G(),!1),n),A.T,o.b1T(B.x(B.a([B.iU(A.b8,n,n,A.ag,!0,new C.f2H(o),n,D.fPW,n,D.fM6,o.k3),B.iU(A.b8,n,n,A.ag,!0,new C.f2I(o),n,n,n,D.fJe,o.k2)],s),A.l,n,A.e,A.i,0,A.p),A.amu)],s),A.E,n,A.e,A.i,0,A.p)},
cK0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDq()
if(a7.length===0)return a5.wj(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KW,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.I)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ci.E"))
A.d.fg(m)
l=m.length!==0&&A.d.cD(m,new C.f3Z(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f45(a5)
j=new C.f47()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KW,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aO(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.ey:A.by
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.r(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.OB,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f4_(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wj(B.bX(A.bH,o,A.vV,a6,6,6))
i=B.a([a5.oz("All words",K.aqZ,!1,new C.f40(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahC("Sentence "+a3,!1,new C.f41(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahC("Clear picks",!1,new C.f42(a5)))
i=B.bX(A.bH,i,A.bt,a6,8,8)
g=a5.yD("SIZE OF THE PICKED WORDS",D.aqp)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dBg[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f43(e,k)
f.push(a5.ahC(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bX(A.bH,f,A.bt,a6,8,8),A.W,a5.oz("Make every word normal",A.k9,!1,new C.f44(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEX(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bKc,B.d(A.d.fc(D.aBW,new C.f3I(q)).b,p,p,p,p,p,p,D.fvM,p,p,p)],o),A.l,p,A.e,A.i,0,p,p),m=B.co(new C.f3J(q)),l=q.yD("HIGHLIGHT BEHIND THE WORDS",A.a3n),k=q.p1?-1:q.k4
k=q.ak3(k,new C.f3K(q),D.df0)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.W,m,l,B.bX(A.bH,B.a([k,B.az(p,B.r(p,D.bXm,A.f,p,p,new B.o(p,p,B.K(v,A.r,w?3:1),p,p,D.fp8,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3N(q),p,p,p,p,p,p,!1,A.a4)],o),A.vV,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KW,p,p,p)],o)
if(q.gaYc()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajF("Colour",l,0,360,new C.f3O(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.u(m,B.a([l,q.ajF("Shade",k,0.15,0.9,new C.f3P(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f3Q(q),1,""+A.j.V(l*100)+"%"))
A.d.u(n,B.a([A.W,q.wj(B.x(m,A.l,p,A.e,A.i,0,A.p))],o))}n.push(q.yD("LOOK",A.wX))
m=B.a([q.oz("Bold",I.aqn,q.fy,new C.f3R(q)),q.oz("Italic",I.aqo,q.go,new C.f3S(q))],o)
for(u=0;u<3;++u){l={}
k=D.d4M[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.vb:p
w=w?p:A.c.j(0.07)
s=new B.aO(14,14)
r=new B.ay(q.id===l.a?A.L:A.by,1,A.r,-1)
m.push(B.az(p,B.r(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3T(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bX(A.bH,m,A.vV,p,8,8))
n.push(q.yD("COLOUR",A.mk))
n.push(q.ak3(q.fx,new C.f3U(q),D.drg))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KW,p,p,p))
n.push(q.yD("SIZE AND PLACE",A.HQ))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f3L(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wj(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f3M(q),0.3,""+A.j.V(l*100))],o),A.l,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cnV(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.K(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.r(q,B.x(B.a([B.r(q,D.c27,A.f,q,q,D.b9f,q,62,q,q,q,q,q,62),A.aC,D.fNo,A.am,D.fSe],x.p),A.l,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.up,q,v,w,q,new B.a8(A.a7,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bFQ,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1W(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.l(12),new B.a5(46,62,B.fU(p,A.A,120,q,A.ck,A.c0,!1,q,!1,q,q),q),A.aq),A.bd,B.E(B.x(B.a([D.fMU,A.T,B.bX(A.bH,B.a([r.oz("Change",A.jO,!1,r.gb1W()),r.oz("Remove",A.ek,!1,new C.f3m(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.l,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dnl[t]
u.push(r.oz(s.b,s.a,r.at===t,new C.f3n(r,t)))}u=B.bX(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c5Q(p)
break
case 1:s=r.c4J()
break
case 2:s=r.bLi()
break
case 3:s=r.bRM()
break
default:s=r.bNq()
break}return B.x(B.a([v,A.ae,u,A.aC,s,A.W,new B.bL(A.a7,q,q,r.oz("Reset the whole picture",A.k9,!1,new C.f3o(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c5Q(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bH,B.a([w.oz("Auto enhance",E.a30,!1,new C.f3e(w)),w.oz("Make words easy to read",A.nQ,!1,new C.f3f(w))],v),A.bt,null,8,8),A.aC,B.co(new C.f3g(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c4J(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f2T(o),0,A.j.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f2U(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f2V(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f2W(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f2X(o),0,""+A.j.V(t*100))
s=o.a0
s=o.kB("Darken",s,0,0.85,new C.f2Y(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f2Z(o),0,""+A.j.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f3_(o),0,""+A.j.V(q*100))
p=o.aR
return o.wj(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f30(o),0,""+A.j.V(p*100))],x.p),A.l,null,A.e,A.i,0,A.p))},
bLi(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f2e(s),1,""+A.j.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f2f(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f2g(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wj(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f2h(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a7,r,r,s.oz("Negative",D.bSl,s.y1,new C.f2i(s)),r)],t),A.l,r,A.e,A.i,0,A.p))
v=s.yD("COLOUR WASH",A.PD)
w=s.b8
q=B.a([null],x.Z)
A.d.u(q,D.aAy)
t=B.a([u,v,s.ak3(w,new C.f2j(s),q),A.T],t)
if(s.b8!=null){q=s.b6
t.push(s.wj(s.ajF("Wash strength",q,0,0.9,new C.f2k(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRM(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f2N(r),0,A.o.v(A.j.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f2O(r),0,""+A.j.V(w*100))
v=r.aG
u=x.p
v=r.wj(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f2P(r),0,""+A.j.V(v*100))],u),A.l,null,A.e,A.i,0,A.p))
w=r.yD("LIGHT LEAK",D.bS3)
q=r.bg
t=B.a([null],x.Z)
s=x.S
A.d.u(t,B.cX(D.aAy,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ak3(q,new C.f2Q(r),t),A.T],u)
if(r.bg!=null){q=r.bK
u.push(r.wj(r.ajF("Leak strength",q,0,1,new C.f2R(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bNq(){var w,v,u,t,s=this,r=s.aQ
r=s.kB("Zoom",r,1,3,new C.f2o(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f2p(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f2q(s),0,""+A.j.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wj(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f2r(s),0,""+A.j.V(u)+"\xb0")],t),A.l,null,A.e,A.i,0,A.p)),A.W,B.bX(A.bH,B.a([s.oz("Turn 90\xb0",H.art,!1,new C.f2s(s)),s.oz("Flip sideways",A.D2,s.c5,new C.f2t(s)),s.oz("Flip upside down",A.D2,s.cP,new C.f2u(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c8x(){var w=null,v=B.l(22),u=B.K(A.by,A.r,1)
return B.r(w,B.x(B.a([D.fcd,A.W,D.fOW,A.aC,B.az(w,B.r(A.A,D.fcr,A.f,w,w,new B.o(w,w,w,B.l(16),w,G.vb,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f3h(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.up,w,u,v,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
c5D(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f39(p),m=x.p,l=B.A(B.a([D.bKi,p.oz("Reset",A.k9,!1,new C.f35(p))],m),A.l,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KW,o,o,o),j=p.yD("SHAPE",A.aro),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dy[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1X(n.$2(t,p.cy),62,u.b,s===t,new C.f36(v,p),62))}}i=B.bX(A.bH,i,A.bt,o,8,8)
v=p.yD("RING",A.pw)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ds[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1X(n.$2(p.cx,t),62,r.b,q===t,new C.f37(s,p),62))}u=B.bX(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.ae,p.wj(p.kB("Size",s,0.12,0.4,new C.f38(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4X(d){return new B.a5(null,d,new B.fH(0.5625,B.co(new C.f3s(this)),null),null)},
cEa(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.K(A.by,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.vb:q
t=new B.aO(14,14)
s=D.dpC[w]
r=v?A.c:A.aF
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aF
l.push(new B.bz(1,A.bb,B.az(A.c3,B.cT(q,B.x(B.a([r,A.cR,new B.dE(A.dY,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.O,0,A.p),q,q,A.b_,new B.o(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bBh,q,q,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f3B(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.r(q,B.A(l,A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bDq,A.lN,q,q,q)},
aSS(){var w,v,u=this,t=null,s=u.cEa()
switch(u.as){case 0:w=u.bPt()
break
case 1:w=u.cK0()
break
case 2:w=u.cEX()
break
case 3:w=u.cnV()
break
case 4:w=u.c5D()
break
default:w=u.c8x()
break}v=x.p
return B.bx(A.u5,B.ea(B.x(B.a([s,B.E(B.cm(B.a([w],v),t,t,D.bEE,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.i,0,A.p),D.ZG,!0),A.aq)},
aOU(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gce6(),p=B.l(16)
q=B.E(B.az(r,B.r(r,D.fcC,A.f,r,r,new B.o(A.c.j(0.08),r,B.K(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRk()
w=B.l(16)
v=B.a([new B.ab(0,A.G,A.bE.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(A.aUy)
else t.push(D.bWs)
t.push(A.af)
t.push(D.bMP)
return B.r(r,B.A(B.a([q,A.au,B.E(B.az(r,B.r(r,B.A(t,A.l,r,A.ba,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.vb,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.i,0,r,r),A.f,r,r,D.b8m,r,r,r,r,Av.a0O,r,r,r)},
b1V(){var w=null
return new B.D(V.a1l,B.A(B.a([B.aI(w,w,w,w,A.n8,w,w,w,new C.f2S(this),w,w,w,w,w,w),D.h3T,A.b1,D.c4x],x.p),A.l,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.Cc,B.bm(!0,B.co(new C.f48(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bib.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e3()
n.cY(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.S()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.t0.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mu.prototype={}
C.Ah.prototype={
aj(){var w=this
return B.J(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.oc.prototype={}
C.wB.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9q.prototype={}
C.at6.prototype={}
C.a1Q.prototype={
S(){return new C.aJD(new B.au(A.ax,$.ax()),B.kc(!0,null,!0,!0,null,null,!1),D.dSv,B.a([],x.s),B.et([D.Jw],x.Q))}}
C.aJD.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.f.t()
this.a3()},
a1p(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1p=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().CM(90,700,700,A.eQ),$async$a1p)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1p)
case 8:p=e
if(r.c!=null)r.m(new C.faw(r,p,q))
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
return B.i($async$a1p,v)},
a1s(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1s=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i_().aK0(78,n,1100,1100),$async$a1s)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.br(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1s)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cV.gcu().aO(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.fax(r,p))
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
return B.i($async$a1s,v)},
b6W(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fU(A.cM.aO(A.d.gal(d.split(","))),A.A,u,u,A.ck,A.c0,!0,u,!1,u,u)
return w}catch(v){}return D.bzq},
c5K(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cA5(C.fQk(w,this.b6W(d),f),g)},
adQ(d,e,f,g,h){var w=null,v=new C.fau(f,e),u=new C.fav(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.K(p?A.by:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.as(B.X(f?A.zv:A.Ps,A.bW,w,w,w,26),w,w,w),D.eBu],x.p),w),w)
else p=this.c5K(g,v.$1(h),u.$1(h),34)
return B.aH(!1,A.a3,!0,s,B.aN(!1,r,!0,B.r(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bW9],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.n3,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fat(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
b_4(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.l(8),B.fU(A.cM.aO(A.d.gal(h.split(","))),A.A,p,p,A.ck,A.c0,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.K(n?A.by:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.af,B.E(B.d(e,p,1,A.a2,p,p,p,A.L2,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Qc,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aH(!1,A.a3,!0,u,B.aN(!1,t,!0,B.r(p,B.A(n,A.l,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kx,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9V(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9V=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fTS(),$async$a9V)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.fac(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.fad(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9V,v)},
afR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afR=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.faf(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.fag(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.fah(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c5(p,h)}w=7
return B.b(C.fP2(q,r.cx,j,new C.b3N(r.z,r.Q,r.as,r.at),new C.fai(r),i,m,p,k),$async$afR)
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
if(p!=null)B.a6(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ac(e)
if(r.c!=null)r.m(new C.faj(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eT,g).w
g=B.aF(d,A.c1,g).w
w=B.as(B.r(h,h,A.f,h,h,new B.o(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.r(h,D.bZu,A.f,h,h,new B.o(h,h,B.K(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.be.j(0.5),A.J,24)],v),D.c8J,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.faK(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Qc,h,h,h,i.ax?h:new C.faL(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbGb()
v=B.a([new B.ab(0,A.G,A.b8.j(0.45),A.J,10)],v)
s.push(B.h9(B.aH(!1,A.a3,!0,h,B.aN(!1,h,!0,B.r(h,B.X(i.e==null?A.wP:A.hO,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.x4,A.a6),h,40,h,h,h,h,h,40),A.cT,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cT,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.O,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aP(),i.d,h,h,h,h,h,2,B.bA(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b5P),h,h,h,h,h,h,h,h,A_.EP,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iR,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aWE,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.faM(i)
s=i.b_4(A.ln,q,r,i.gcom(),s)
r=i.z
r=B.E(i.adQ(new C.faO(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bo,B.E(i.adQ(new C.faP(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.faQ(i)
s=i.b_4(A.uR,r,p,i.gcou(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adQ(new C.faR(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aC,D.fTx,A.aw,D.fWt,A.bz,u,A.T,D.fUR,A.aC,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bo,B.E(i.adQ(new C.faS(i),r,!0,n,o),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fYn],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.K(D.bqP,A.r,1)
w=C.ail(w)
w=w==null?h:w.b
A.d.u(o,B.a([A.W,new B.bL(A.a7,h,h,B.r(h,B.A(B.a([D.c_D,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fBL,h,h,h),B.aN(!1,h,!0,D.evv,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.faT(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.O,0,h,h),A.f,h,h,new B.o(D.biC,h,u,v,h,h,A.n),h,h,h,h,D.bD4,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fJX)
o.push(A.T)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dhg[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aF:A.by,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.bz(1,A.bb,new B.D(A.js,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b_,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a6),A.eI,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.faU(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.i,0,h,h))
o.push(A.bz)
o.push(D.h26)
o.push(A.T)
o.push(B.co(new C.faV(i)))
o.push(A.bz)
o.push(D.fRA)
o.push(A.T)
w=B.a([i.b9S("auto","Let AI choose",A.ed,A.Sj)],t)
for(v=x.O,m=0;m<11;++m){j=D.x8[m]
u=j.d
w.push(i.b9S(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bX(A.bH,w,A.bt,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.K(i.r?A.be.j(0.5):A.by,A.r,1)
o.push(B.r(h,B.iU(h,A.be,h,h,h,new C.faN(i),D.bVB,D.h1l,h,D.fMm,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.u(o,B.a([A.aC,B.d(w,h,h,h,h,h,h,D.aVO,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gcea()
v=B.fw(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fit:A.I1
o.push(new B.a5(h,54,B.lV(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.mD,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.r(h,B.bm(!0,B.cb(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wB,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.af8,h,h,h,h,h,h,h,h),h)},
bT3(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.fak(this,p,d)
if(d===D.Ed)return new C.aG7(p,o,q)
w=B.l(16)
v=p?E.x4:q
u=p?q:A.c.j(0.05)
t=B.K(p?A.aF:A.by,A.r,1)
s=B.X(p?A.ee:C.hZl(d),A.c,q,q,q,20)
r=C.hZm(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.aw,new B.dE(A.dY,A.A,A.f,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],x.p),A.l,q,A.ba,A.i,0,A.p),q,q,A.b_,new B.o(u,q,t,w,q,v,A.n),A.h7,q,64,q,q,A.hN,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9S(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.by
r=B.K(r,A.r,u?1.6:1)
w=B.r(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a7,A.aa,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A0.AP,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.O,0,v,v),v,v,A.b_,new B.o(s,v,r,t,v,v,A.n),A.eI,v,v,v,v,O.anG,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.faz(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1P.prototype={
S(){return new C.aJC(new B.au(A.ax,$.ax()))}}
C.aJC.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
afS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afS=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.fa5(r))
w=1
break}B.eZ()
r.m(new C.fa6(r))
t=4
q=C.iqU(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iqE(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.fa7(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hf9()
f=$.Dr.h(0,k.a)
o=f==null||J.ct(f)?null:J.fp(f)
if(o==null){r.m(new C.fa8(r))
w=1
break}n=C.iqC(o,r.a.c)
C.iqy(r.a.c.a)
$.hem=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hid(j)
h=C.hie(r.a.c)
e=C.hif(r.a.c)
w=7
return B.b(C.bFi(k,r.a.c.a,j,h,new C.fa9(r),i,e,a0),$async$afS)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.faa(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afS,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eT,i).w
i=B.aF(d,A.c1,i).w
w=B.as(B.r(j,j,A.f,j,j,new B.o(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.r(j,D.arK,A.f,j,j,D.b81,j,34,j,j,j,j,j,34),A.au,D.bKX],v),A.l,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,A_.abz,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aP(),k.d,j,j,j,j,j,2,B.bA(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),Aw.aeA),j,j,j,j,j,j,j,j,A_.EP,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aWE,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.ddg[q]
o=B.d(p,j,j,j,j,j,j,AC.VH,j,j,j)
n=A.c.j(0.06)
r.push(B.n3(j,n,o,j,k.e?j:new C.fab(k,p),j,j,P.w0,j))}w=B.a([w,A.aC,u,A.am,t,A.aC,s,A.W,B.bX(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.u(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aVO,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gceb()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.be.j(0.5),A.es.j(0.5)],x.O):D.cKH
o=B.a([new B.ab(0,A.G,A.be.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.evr:D.c_c
n=B.r(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aH(!1,A.a3,!0,j,B.aN(!1,s,!0,B.eB(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hu,j,j,j)],v),A.l,j,A.ba,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a7,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.r(j,B.bm(!0,B.cb(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wB,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.af8,j,j,j,j,j,j,j,j),j)}}
C.b3N.prototype={}
C.aG7.prototype={
S(){return new C.bn_(null,null)}}
C.bn_.prototype={
gazI(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qB,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazI().t()
this.bzX()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c6(this.gazI(),new C.eqG(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bks.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.djO[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=A.wp.j(0.25+s*0.6).gp(0)
d.N(new B.p(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.p(q-o,r),new B.p(q+o,r+0),p)
d.ah(new B.p(q,r-o),new B.p(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atE.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a0d.prototype={
S(){return new C.aDC()}}
C.aDC.prototype={
gak0(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aiy(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAR(){var w=this.e
return w===$?this.e=C.hid(this.a.c).q(0,D.Ed):w},
a9I(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9I=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dtm(s))
u=3
r=A.d.fc(D.x8,new C.dtn(s))
q=B.d0(C.hid(s.a.c),x.Q)
l=q
J.hc(l,D.Ed)
p=l
if(s.gAR())J.c5(p,D.Ed)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAR()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hie(i.c)
g=C.hif(s.a.c)
w=6
return B.b(C.bFi(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9I)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aiy(q,s.gak0())
f=q==null?null:q.b
n=f==null?s.gak0():f
if(!J.z(n,r.a)&&!s.gAR())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dto(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9I,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.K(m?A.by:A.bj,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dtr(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.X(A.cC,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.x8[w]
u=o.gak0()
t=o.f?n:new C.dts(o,v)
f.push(new C.bvG(v,u===v.a,t,n))}f=B.l_(1.25,f,3,10,10,n,A.e1,!0)
u=B.l(18)
t=o.gAR()?D.cbv:n
if(o.gAR())s=n
else s=m?A.br:A.cd
r=B.X(A.ed,o.gAR()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAR()
f=B.a([f,A.aC,B.r(n,B.A(B.a([r,A.au,q,B.b9q(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtt(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,Q.amm,n,n,n)],g)
u=o.r
if(u!=null)A.d.u(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fC4,n,n,n)],g))
f=B.cb(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.H1,n,n,A.ah)
u=o.f?n:o.gbFa()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.r(n,B.x(B.a([new B.D(D.bGj,e,n),new B.di(1,A.cl,f,n),new B.D(A.H0,new B.a5(1/0,50,B.bJ(B.eB(B.as(o.f?A.tQ:D.fU2,n,n,n),n,new B.o(n,n,n,s,n,D.ca4,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.O,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uG,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvG.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.K(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bL(A.lz,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lA,w,w,B.d(v.b,w,w,w,w,w,w,D.fC1,w,w,w),w)],x.p)
if(q)v.push(D.b2Z)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b_,new B.o(w,w,p,t,s,new B.a8(A.aA,A.aD,A.x,r,w,w),A.n),A.eI,w,w,w,w,A.cq,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eqD.prototype={
aHw(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xg(d,e){return this.aHw(0,e,null)}}
C.aOh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3J.prototype={
B(d){var w,v,u=null,t=C.hh2(this.c)
if(t==null)w=D.bxT
else{w=B.aF(d,u,x.w).w.cPh(D.bCA,D.fhD)
v=this.d
w=B.qc(new B.du(!v,B.apL(!1,t,!1,v,!1,390),u),w)}return new B.dE(A.dD,A.A,A.f,new B.a5(416,870,new C.boA(w,u),u),u)}}
C.boA.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dwM[w]
u=new B.aO(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.r(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atK,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dyb[w]
u=new B.aO(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.r(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atK,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,new B.bN(new B.o(t,t,t,B.l(64),D.d2_,D.c8r,A.n),A.bi,t,t),0,0,0))
s.push(B.bS(3,new B.bN(new B.o(A.w,t,t,B.l(61),t,t,A.n),A.bi,t,t),3,3,3))
s.push(B.bS(13,B.bx(B.l(51),B.ea(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ap(t,B.as(B.r(D.b39,B.r(t,t,A.f,t,t,D.b8k,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,new B.du(!0,B.bx(B.l(51),D.bzx,A.aq),t),13,13,13))
s.push(B.ap(22,new B.du(!0,B.as(B.r(t,t,A.f,t,t,new B.o(A.ab,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lx.prototype={
oL(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.ev(A.K,!1,e.l(),A.aH,"",k,42,A.bs,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bm,j,2,"Your Presentation Title",0,0,"",D.ne,D.d1,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.ev(A.K,!1,v.l(),A.aH,"",k,20,A.bs,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bm,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.ds,D.d1,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.t1(i,l,0,0,B.a([f,w,C.ev(A.bp,!1,4279310375,A.aH,"",t.j(0.8).l(),24,A.bs,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fQ,t.l(),3,"",0,0,"",D.cu,D.fj,0.3,0.35,0.72)],s),C.cE(),D.nd,"","","Welcome",D.ds)
u=C.cE()
u=C.ev(A.bp,!1,e.l(),A.aH,"",k,34,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Agenda",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
w=C.cE()
w=C.t1(i,l,0,0,B.a([u,C.ev(A.bp,!0,v.l(),A.aH,"",k,22,A.bs,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bm,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vs,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nd,"","","Agenda",D.ds)
u=C.cE()
u=C.ev(A.bp,!1,e.l(),A.aH,"",k,32,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Main Idea",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
f=C.cE()
f=C.t1(i,l,0,0,B.a([u,C.ev(A.bp,!0,v.l(),A.aH,"",k,21,A.bs,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bm,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cu,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nd,"","","Key Point 1",D.ds)
u=C.cE()
u=C.ev(A.bp,!1,e.l(),A.aH,"",k,30,A.bs,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bm,j,2,"Compare & Contrast",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
r=C.cE()
r=C.ev(A.bp,!0,v.l(),A.aH,"",k,18,A.bs,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bm,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.d1,0.4,0.08,0.24)
q=C.cE()
q=C.t1(i,l,0,0,B.a([u,r,C.ev(A.bp,!0,v.l(),A.aH,"",k,18,A.bs,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bm,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.d1,0.4,0.52,0.24)],s),C.cE(),D.nd,"","","Key Point 2",D.ds)
r=C.cE()
r=C.ev(A.K,!1,e.l(),A.aH,"",k,48,A.bs,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bm,j,2,h,0,0,"",D.ds,D.d1,0.8,0.1,0.32)
e=C.cE()
p=C.Cs(l,l,l,l,D.E9,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t1(i,l,0,0,B.a([r,C.ev(A.K,!1,v.l(),A.aH,"",k,22,A.bs,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bm,j,2,"Questions?",0,0,"",D.cu,D.d1,0.7,0.15,0.58)],s),C.cE(),D.nd,"","",h,D.ds)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.I)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fy.prototype={
ak(d){return this.e.$1(d)}}
C.ey.prototype={}
C.jd.prototype={}
C.Fp.prototype={
gaNw(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ail(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4Q(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fp(v,u,t,d==null?w.d:d)},
Gg(d){return this.a4Q(null,d,null,null)},
aGa(d){return this.a4Q(null,null,null,d)},
cPf(d,e){return this.a4Q(d,e,null,null)},
bfc(d){return this.a4Q(d,null,null,null)},
bfi(d){return this.a4Q(null,null,d,null)}}
C.Ou.prototype={
S(){return new C.bml(new B.eC(0,$.ax()),null,null)}}
C.bml.prototype={
Y(){var w,v=this
v.a4()
w=v.q1(new C.e43(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.ax()
w.P$=0
this.bzq()},
B(d){var w=C.ail(this.a.c.a)
if(w==null)w=A.d.gH(D.Il)
return B.co(new C.e42(this,w,C.hxF(this.a.c.d)))}}
C.buc.prototype={
B(d){return B.oh(A.XL,this.e,new C.f9i(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bhg.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVx(d,e,v)
break
case"confetti":w.bLM(d,e,v)
break
case"crown":w.bNr(d,e,v)
break
case"aurora":w.bGf(d,e,v)
break
case"champagne":w.bJE(d,e,v)
break
case"diamonds":w.bPC(d,e,v)
break
case"starburst":w.cBN(d,e,v)
break
case"balloons":w.bGt(d,e,v)
break
case"galaxy":w.bUY(d,e,v)
break
case"redcarpet":w.csH(d,e,v)
break
case"coins":w.bLa(d,e,v)
break
case"lanterns":w.c4d(d,e,v)
break
case"hearts":w.c1J(d,e,v)
break
case"petals":w.cnM(d,e,v)
break
case"butterflies":w.bIB(d,e,v)
break
case"neon":w.c8h(d,e,v)
break
case"disco":w.bPN(d,e,v)
break
case"sunrise":w.cDs(d,e,v)
break
case"pearls":w.cmQ(d,e,v)
break
case"snow":w.cBu(d,e,v)
break
case"laurel":w.c4j(d,e,v)
break
case"ribbons":w.cvc(d,e,v)
break
case"kente":w.c41(d,e,v)
break
case"trophy":w.cHb(d,e,v)
break
case"shooting":w.cze(d,e,v)
break
case"bokeh":w.bGP(d,e,v)
break
case"orbits":w.ckr(d,e,v)
break
case"flowers":w.bUb(d,e,v)
break
case"music":w.c8_(d,e,v)
break
case"mandala":w.c6q(d,e,v)
break
case"sparklers":w.cBB(d,e,v)
break
case"city":w.bKr(d,e,v)
break}},
tc(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.L()
v.r=g.j(A.j.D(h,0,1)).gp(0)
v.a=A.pd
u=new B.aG(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c7(w,t,w+f,t))
u.E(new B.c7(w,t,w,t+f))
u.E(new B.c7(w,t,w-f,t))
u.E(new B.c7(w,t,w,s))
u.E(new B.bu())
d.af(u,v)
d.N(e,f*0.18,v)},
m3(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.tc(d,new B.p(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVx(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m3(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.at],w),B.a([A.ix,A.bE],w),B.a([A.eH,A.aG],w),B.a([A.c,A.aE],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kw(new B.p(h,b8),new B.p(g,f),A.cw.aA(0,j/0.22))
d.toString
$.S()
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.a7,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.t3(new B.p(h,b8),d)))
a0.c=o
a0.d=A.bv
a1=B.kw(new B.p(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hp(A.G,p)
c0.N(new B.p(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.p(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bv
b6.a=A.pd
c0.ah(new B.p(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.tc(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLM(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.L()
d.sav(new B.a8(A.aA,A.aD,A.x,D.dqU,B.a([A.j.D(h-0.15,0,1),A.j.D(h,0,1),A.j.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.RM[A.o.D(A.j.bh(C.cZ(u,7)*5),0,4)]
J.bq(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aG(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.S()
t=new B.ao(A.P,A.M,A.R,A.S,A.Q)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bt(A.J,q*1.8*A.j.D(t,0.15,1),q),n)
g.restore()}this.m3(a0,a1,a2,25,A.bL,30)},
bNr(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.p(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aG(p.r,A.ai,a4,a4,o)
o.push(new B.aZ(a5,a6))
n.ab()
p=q-0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=q+0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bkJ],v),a4,a4).aK(0,B.bZ(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aG($.S().r,A.ai,a4,a4,B.a([],s))
v=a6+k
j.E(new B.aZ(a5,v))
u=k*0.3
t=a6+u
j.E(new B.aq(a5,t))
p=a6+k*0.6
j.E(new B.aq(a5+l*0.22,p))
j.E(new B.aq(a5+l*0.5,a6))
j.E(new B.aq(a5+l*0.78,p))
p=a5+l
j.E(new B.aq(p,t))
j.E(new B.aq(p,v))
j.E(new B.bu())
i=A.j.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.L()
o.sav(new B.a8(A.b0,A.b7,A.x,D.dpw,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eLN,D.eEW,D.eVt],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.r=d.gp(d)
a8.N(new B.p(e,o),m,a0)
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.r=A.ab.gp(0)
a8.N(new B.p(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.P,A.M,A.R,A.S,A.Q)
h.r=A.hz.gp(0)
a8.N(new B.p(a5+l*a1,a6+m),o,h)}}for(v=B.xO(j),u=B.a([],x.X),p=new B.rA(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bj(B.jK(y.M));--h
p.iz()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a2.b=A.a9
a2.c=m
a2.e=A.dT
a2.r=A.bL.gp(0)
a8.af(new B.aG(o,e,a4,new B.ce([new B.BU(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.tc(a8,new B.p(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m3(a8,a9,b0,45,A.bL,40)},
bGf(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m3(a6,a7,a8,60,A.c,50)
w=[D.f7h,D.f6Z,D.f6S,D.f8r]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aG(o.r,A.ai,null,null,j)
for(o=a4*m,h=a8*l,g=h*1.4,f=0;f<=s;f+=r){e=f/a3
d=o+Math.sin(e*4+h+k)*a5*0.07+Math.sin(e*9-g+k)*a5*0.025
if(f===0){e=new B.aZ(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ak(a0)
i.ab()}else{e=new B.aq(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ak(a0)
i.ab()}}$.S()
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.pd
o.y=new B.hp(A.G,u)
a6.af(i,o)
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pd
o.y=new B.hp(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.S()
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=A.wo.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.pd
a6.N(new B.p(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJE(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.L()
e.sav(new B.bY(A.A,0.5,A.x,n,0,B.a([A.id.j(0.25+0.1*j),D.ZU],x.O),n,n).aK(0,B.bZ(new B.p(i,h),g)))
d.N(new B.p(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aG(g.r,A.ai,n,n,f)
g=v?0:m
e=l*(0.05+w*0.07)
f.push(new B.aZ(g,e))
u.ab()
for(t=1;t<=20;++t){g=t/20*m
s=v?g*0.45:m-g*0.45
g=new B.aq(s,e+t*k*0.012+Math.sin(t*0.8+i+w)*k*0.02)
f.push(g)
r=u.f
if(r!=null)g.ak(r)
u.ab()}g=$.S()
f=new B.ao(A.P,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=j
f.r=D.RM[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.tc(d,new B.p(s,p),o*2.4,A.bL,A.j.D(p/i,0,1))
continue}$.S()
g=new B.ao(A.P,A.M,A.R,A.S,A.Q)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.um.j(0.75).gp(0)
d.N(new B.p(s,p),o,g)
g=o*0.35
e=new B.ao(A.P,A.M,A.R,A.S,A.Q)
e.r=A.c.j(0.8).gp(0)
d.N(new B.p(s-g,p-g),f,e)}},
bPC(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m3(b0,b1,b2,30,A.lg,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bq(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aG(h.r,A.ai,a6,a6,g)
h=-o
e=h*0.5
g.push(new B.aZ(e,i))
f.ab()
h*=0.28
j*=0.6
d=new B.aq(h,j)
g.push(d)
a0=f.f
if(a0!=null)d.ak(a0)
f.ab()
d=o*0.28
a0=new B.aq(d,j)
g.push(a0)
a1=f.f
if(a1!=null)a0.ak(a1)
f.ab()
a0=o*0.5
a1=new B.aq(a0,i)
g.push(a1)
a2=f.f
if(a2!=null)a1.ak(a2)
f.ab()
a1=k*0.6
a2=new B.aq(0,a1)
g.push(a2)
a3=f.f
if(a3!=null)a2.ak(a3)
f.ab()
a2=new B.bu()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.P,A.M,A.R,A.S,A.Q)
g.sav(new B.a8(A.aA,A.aD,A.x,D.dkY,a6,a6).aK(0,B.bt(A.J,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.p(e,i),new B.p(a0,i),a4)
b0.ah(new B.p(h,j),new B.p(0,a1),a4)
b0.ah(new B.p(d,j),new B.p(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.tc(b0,new B.p(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBN(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.p(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aG(p.r,A.ai,null,null,o)
o.push(new B.aZ(h,g))
n.ab()
p=s-q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=s+q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.P,A.M,A.R,A.S,A.Q)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.byR.aA(0,k)*(0.5+0.5*C.cZ(t,u)))
this.tc(d,new B.p(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.RM[A.o.D(A.j.bh(C.cZ(t,4)*5),0,4)],r)}},
bGt(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAZ[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aG(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.S()
e=new B.ao(A.P,A.M,A.R,A.S,A.Q)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bt(new B.p(k,l),o*2.3,m)
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.bY(D.b3e,0.9,A.x,a1,0,B.a([A.c,j,e],u),X.aAP,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aG(h.r,A.ai,a1,a1,m)
e=o*0.12
m.push(new B.aZ(k-e,i))
h.ab()
i=new B.aq(k+e,i)
m.push(i)
e=h.f
if(e!=null)i.ak(e)
h.ab()
i=new B.aq(k,l+o)
m.push(i)
e=h.f
if(e!=null)i.ak(e)
h.ab()
i=new B.bu()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.bq(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bt(A.J,t,u)
$.S()
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=D.aAZ[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUY(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.p(a7,a8)
this.m3(b0,b1,b2,50,A.c,70)
for(w=[D.f7q,D.f74,D.f7a],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.p(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bZ(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bL,A.ey,i)
f.toString
e=C.cZ(k,3)
$.S()
d=new B.ao(A.P,A.M,A.R,A.S,A.Q)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.pd
b0.N(new B.p(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.L()
a8.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.um.j(0.55),D.ajS],t),a3,a3).aK(0,B.bZ(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
a2=new B.p(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.kw(a2,a2.a2(0,new B.p(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kw(a2,a4,0.6)
a5.toString
a7=B.L()
a7.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.t3(a2,a4)))
a7.c=a6*0.005
a7.d=A.bv
b0.ah(a5,a4,a7)}},
csH(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aG(p.r,A.ai,b4,b4,o)
o.push(new B.aZ(r,v))
n.ab()
p=q-0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=q+0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,b4,0,B.a([A.um.j(0.28),D.ajS],w),b4,b4).aK(0,B.bZ(new B.p(r,v),u)))
p.a=A.pd
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.em:A.en)
a8=$.S()
a9=B.a([],t)
n=new B.aG(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c7(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bu()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a8.sav(new B.a8(A.a7,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b0.r=A.id.gp(0)
b0.c=o
b0.d=A.bv
b8.ah(new B.p(a8,m),new B.p(a9,p),b0)}b1=new B.aG($.S().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bu())
v=B.L()
v.sav(D.c9Z.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.tc(b8,new B.p(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bLa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bt(new B.p(p,q),r,r*A.j.D(n,0.12,1))
$.S()
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.sav(new B.a8(A.aA,A.aD,A.x,o>0?D.dBN:D.cQC,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.bvt.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.tc(d,new B.p(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m3(d,e,f,30,A.bL,110)},
c4d(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m3(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ao(A.P,A.M,A.R,A.S,A.Q)
i.sav(new B.bY(A.A,0.5,A.x,e,0,B.a([As.yv.j(0.45*l),D.aiq],v),e,e).aK(0,B.bZ(new B.p(m,n),k)))
a2.N(new B.p(m,n),k,i)
i=B.a([],r)
h=new B.aG(j.r,A.ai,e,e,i)
j=p*0.5
k=p*0.7
g=n-k
i.push(new B.aZ(m-j,g))
h.ab()
j=new B.aq(m+j,g)
i.push(j)
g=h.f
if(g!=null)j.ak(g)
h.ab()
j=p*0.38
k=n+k
g=new B.aq(m+j,k)
i.push(g)
f=h.f
if(f!=null)g.ak(f)
h.ab()
k=new B.aq(m-j,k)
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.bu()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j=B.ar(D.bl_,A.c,0.2*l)
j.toString
k.sav(new B.a8(A.b0,A.b7,A.x,B.a([D.bqo,j],v),e,e).aK(0,B.bt(new B.p(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.r=A.c.j(l).gp(0)
a2.N(new B.p(m,n+p*0.55),p*0.12,k)}},
c1J(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bq(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aG(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.ko(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.ko(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bu()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.daY[A.o.F(p,5)]
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.bY(A.pb,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a5E,d).aK(0,B.bZ(A.J,o*1.4)))
a3.af(i,m)
u.restore()}this.m3(a3,a4,a5,30,A.ix,130)},
cnM(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bq(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aG(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c7(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c7(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bu()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
m=(q&1)===0?D.cKG:D.dml
n.sav(new B.a8(A.a7,A.aa,A.x,m,h,h).aK(0,B.bZ(A.J,p)))
d.af(k,n)
v.restore()}this.m3(d,a0,a1,25,A.bL,140)},
bIB(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m3(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bq(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bq(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aG(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.ko(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.ko(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bu()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a3.sav(new B.a8(A.a7,A.aa,A.x,h?D.dm2:D.dp0,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.C5.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=D.buH.gp(0)
p.c=q*0.1
p.d=A.bv
b1.ah(new B.p(0,m*0.3),new B.p(0,q*0.4),p)
v.restore()}},
c8h(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.p(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=v
r.r=D.aCa[u].j((1-t)*0.9).gp(0)
r.y=new B.hp(A.G,v)
q=s*0.3
d.an(B.bn(B.bt(g,s,s*1.6),new B.aO(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aCa[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a1(l,k,l+w,k+n),new B.aO(v,v))
$.S()
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=m.j(0.85).gp(0)
l.y=new B.hp(A.aeo,q)
d.an(k,l)}},
bPN(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.p(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.od,A.dn][A.o.F(q,4)]
k=C.cZ(q,3)
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=l.j(0.75).gp(0)
j.a=A.pd
j.y=new B.hp(A.G,r)
a2.N(new B.p(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.L()
t.r=A.aF.gp(0)
t.c=1.2
a2.ah(new B.p(d,0),new B.p(d,w-u),t)
t=B.L()
t.r=A.cW.gp(0)
a2.N(v,u,t)
t=a2.c
J.bq(t.save())
a0=new B.aG(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jU(B.bZ(v,u)))
a2.mU(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ao(A.P,A.M,A.R,A.S,A.Q)
e.r=B.ar(A.bh,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.tc(a2,v.a2(0,new B.p(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDs(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.j.D(a1/3,0,1))),e=new B.p(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aG(s.r,A.ai,k,k,r)
r.push(new B.aZ(g,f))
q.ab()
s=t-0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=t+0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.r=A.bL.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.L()
f.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([D.bgd.j(0.6),D.aiq],x.O),k,k).aK(0,B.bZ(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.L()
g.sav(D.eCm.aK(0,B.bZ(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bt(new B.p(n,m),s,v),l)
d.bZ(B.bt(new B.p(n+r,m-p),s,o),l)}this.m3(d,a0,a1,20,A.hz,180)},
cmQ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aG(s.r,A.ai,h,h,r)
r.push(new B.aZ(0,f))
q.ab()
for(s=f*(0.72+t*0.07),p=a1*(1+t*0.3),o=0;o<=w;o+=v){n=new B.aq(o,s+Math.sin(o/g*6+p+t)*e*0.03)
r.push(n)
m=q.f
if(m!=null)n.ak(m)
q.ab()}s=new B.aq(g,f)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.S()
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.cD,A.jj,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ao(A.P,A.M,A.R,A.S,A.Q)
u.sav(new B.bY(Ap.Bl,0.5,A.x,h,0,D.dsC,h,h).aK(0,B.bZ(new B.p(o,i),j)))
d.N(new B.p(o,i),j,u)}this.m3(d,a0,a1,25,A.c,190)},
cBu(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bv
J.bq(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.p(0,o),l)
d.ah(new B.p(0,n),new B.p(m,k),l)
d.ah(new B.p(0,n),new B.p(j,k),l)}v.restore()}this.m3(d,e,a0,40,A.eH,200)},
c4j(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.p(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cC(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bq(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bt(new B.p(o,0),p,q)
$.S()
e=new B.ao(A.P,A.M,A.R,A.S,A.Q)
e.sav(D.c9M.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.S()
a0=B.L()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bli.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.tc(a3,w.a2(0,new B.p(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m3(a3,a4,a5,40,A.bL,210)},
cvc(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.id,A.hz],a4),B.a([A.pm,A.ix],a4),B.a([A.aB,A.ey],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bR<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aG(m.r,A.ai,null,null,l)
j=B.a([],o)
for(m=n*0.2,i=a2*(0.3+m),m=a8*(0.8+m),h=0;h<=40;++h){g=h/40
f=g*a1
e=i+Math.sin(g*5+m+n)*a3*0.1
d=a3*(0.03+0.03*(0.5+0.5*Math.sin(g*7+q+n)))
g=e-d
if(h===0){g=new B.aZ(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ak(a0)
k.ab()}else{g=new B.aq(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ak(a0)
k.ab()}j.push(new B.p(f,e+d))}for(m=new B.ds(j,t),m=new B.bR(m,m.gJ(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.S()
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l=a5[n]
i=l[0]
m.sav(new B.a8(A.a7,A.aa,A.x,B.a([i,l[1],i],a4),A.na,new B.mN(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m3(a6,a7,a8,40,A.c,220)},
c41(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.j.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a3=Math.abs(a0)
a2.r=D.a5H[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a4.r=D.a5H[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.tc(b0,new B.p(u*a6,l-a7),a8*(0.01+0.012*t),D.a5H[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cHb(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.p(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.c=u
p.r=A.bL.j(0.06).gp(0)
a4.ah(w,new B.p(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.c7(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.c7(u,r,u,a2))
m.E(new B.bu())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bt(new B.p(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.P,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=p
d.r=A.aE.gp(0)
a4.cB(f,e,3.141592653589793,!1,d)}a1=B.L()
a1.sav(new B.a8(A.a7,A.aa,A.x,D.dvq,A.aB6,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.tc(a4,new B.p(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLN(a4,a5,a6,60)},
bLN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bq(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bt(A.J,r*A.j.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
n.r=D.RM[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cze(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m3(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.j.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.j.bh((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.p(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.p(m+t*k,v+u*k)
$.S()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.bL],s),null,null).aK(0,B.t3(j,l)))
k.c=r
k.d=A.bv
d.ah(j,l,k)
this.tc(d,l,q,A.c,1-n)}},
bGP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.j.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
m=A.o.F(s,5)
n.r=D.aDY[m].j(o).gp(0)
n.a=A.pd
n.y=new B.hp(A.G,r*0.12)
d.N(new B.p(q,p),r,n)
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDY[m].j(o*1.4).gp(0)
d.N(new B.p(q,p),r,n)}},
ckr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bq(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bt(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.p(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=A.hz.gp(0)
d.N(m,t,o)
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=A.id.j(0.4).gp(0)
o.y=new B.hp(A.G,r)
d.N(m,s,o)
w.restore()}this.m3(d,e,f,45,A.bL,270)},
bUb(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.p(m*a1,p)
break
case 1:l=new B.p(m*a1,q)
break
case 2:l=new B.p(r,m*a2)
break
default:l=new B.p(s,m*a2)
break}k=A.j.F(a6+C.cZ(o,2)*4,4)/4
j=A.e3.aA(0,A.j.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.diS[A.o.F(o,5)]
J.bq(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bt(new B.p(0,l),i,j)
$.S()
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.c,g],u),null,null).aK(0,B.bt(new B.p(0,l),f,h)))
a4.bZ(d,a0)}$.S()
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=A.id.gp(0)
a4.N(A.J,h*0.3,l)
v.restore()}this.m3(a4,a5,a6,30,A.hz,280)},
c8_(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bZ(new B.p(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=u
j.r=D.aAa[n].j((1-m)*0.8).gp(0)
a4.cB(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.aAa[A.o.F(h,4)]
$.S()
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.r=d.gp(0)
J.bq(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bt(A.J,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.p(s,g),new B.p(s,p),o)
if((h&1)===0){o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.p(s,p),new B.p(f+e*1.6,g-e*2),o)}}},
c6q(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.p(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bq(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aG(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c7(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c7(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.P,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=u
d.r=B.ar(A.bL,A.od,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.P,A.M,A.R,A.S,A.Q)
d.r=A.hz.j(0.8).gp(0)
a7.N(new B.p(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.L()
a5.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.id.j(0.25),D.ZU],x.O),a3,a3).aK(0,B.bZ(w,a4)))
a7.N(w,a4,a5)
this.m3(a7,a8,a9,30,A.bL,300)},
cBB(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.p(j,i)
$.S()
g=new B.ao(A.P,A.M,A.R,A.S,A.Q)
g.r=A.bh.gp(0)
g.c=q
g.d=A.bv
b1.ah(new B.p(l,a9),h,g)
g=new B.ao(A.P,A.M,A.R,A.S,A.Q)
g.sav(new B.bY(A.A,0.5,A.x,null,0,B.a([A.hz,A.id.j(0.6),D.ZU],o),null,null).aK(0,B.bZ(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.j.F(b3+C.cZ(f,2)*e,e)/e
a0=A.j.bh((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.p(a4,a5)
a7=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a7.r=B.ar(A.hz,A.at,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bv
a7.a=A.pd
b1.ah(new B.p(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m3(b1,b2,b3,35,A.bL,310)},
bKr(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVx(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.sav(D.caJ.aK(0,k))
a7.ar(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a4.r=A.bL.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b1D.prototype={
B(d){var w,v=null,u=new C.cfH(),t=new C.cfJ(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.r(v,D.asR,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfI(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Il[w]))
return B.bX(A.bH,s,A.bt,v,12,10)}}
C.a_L.prototype={
S(){return new C.aBY()}}
C.aBY.prototype={
gwk(){var w=this.d
return w===$?this.d=this.a.c:w},
gb2_(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.ax())}return v},
gazJ(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNw()
v=$.ax()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b5,A.aP),v)}return t},
t(){var w=this.gb2_(0),v=$.ax()
w.U$=v
w.P$=0
w=this.gazJ()
w.U$=v
w.P$=0
this.a3()},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().CM(90,700,700,A.eQ),$async$a0d)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a0d)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajm(o,".png")?"image/png":"image/jpeg"
r.m(new C.diB(r,n,p))
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
return B.i($async$a0d,v)},
b1Z(d){var w=null,v=A.c.j(0.07)
return B.bA(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VU,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ail(p.gwk().a)
if(n==null)n=A.d.gH(D.Il)
w=p.gwk()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bS(0,new C.Ou(p.gwk(),!1,!0,new B.bo(w.a+v,x.W)),0,0,0),B.ap(o,B.IL(A.n8,new C.diG(d),B.o3(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IL(A.arI,new C.diH(p),B.o3(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aWD,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aP(),p.gb2_(0),o,o,o,o,o,2,p.b1Z("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diI(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.h4,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.K(A.id.j(0.6),A.r,1)
if(p.gwk().d.length===0)q=D.bXR
else{q=C.hxF(p.gwk().d)
if(q==null)q=new Uint8Array(0)
q=B.hY(B.fU(q,A.A,o,o,A.ck,A.c0,!1,o,!1,o,o),A.aq)}r=B.a([t,A.af,B.az(o,B.r(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcec(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwk().d.length!==0)r.push(B.aI(o,o,o,o,H.Qc,o,o,o,new C.diJ(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.r(o,B.x(B.a([w,A.W,B.A(r,A.l,o,A.e,A.i,0,o,o),A.T,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aP(),p.gazJ(),o,o,o,o,o,2,p.b1Z("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diK(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a5,o,A.ao,o,o,o,o),A.ae,B.dh(D.bWJ,o,D.h30,new C.diL(p,d),B.bp(A.aE,o,o,o,A.w,o,A.cp,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.O,0,A.p),A.f,o,o,D.b8w,o,o,o,o,A.GY,o,o,o)],u),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a05.prototype={
S(){return new C.biN(new B.au(A.ax,$.ax()))}}
C.biN.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.H,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aF(d,A.c1,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.K(n?A.by:A.bj,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cC,l,o,o,o,o),o,o,o,new C.dpo(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d1q[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aO(12,12)
q=new B.aO(12,12)
p=n?A.c.j(0.06):A.cd
t.push(B.aN(!1,new B.be(r,r,r,r),!0,B.r(A.A,B.d(s,o,o,o,o,o,o,A.q_,o,o,o),A.f,o,o,new B.o(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dpp(this,s),o,o,o,o,o,o,o))}A.d.u(e,B.a([new B.D(A.hL,u,o),new B.D2(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aC)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.T)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.br:A.aS
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aP(),this.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.af,B.bJ(A.aXD,o,new C.dpq(this),o)],g),A.l,o,A.e,A.i,0,o,o))
e.push(A.T)
return B.bm(!0,B.r(o,B.x(B.a([f,new B.di(1,A.cl,B.cm(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.O,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uG,A.a10,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bi7.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e3()
a1.cY(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.L()
u.y=A.OE
t=B.L()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.az(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.p(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.p(l-d,h),new B.p(l+d,h+0),a0)
a2.ah(new B.p(l,h-d),new B.p(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bhP.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a1(0,0,0+a3.a,0+a3.b),A.jP),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.L()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mg
a2.an(f,a1)
a1=x.v
a0=new B.aG(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.ja(f))
v=new B.U1(new B.rA(B.xO(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iz()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.j.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.d=A.bv
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aG(r,l,g,new B.ce([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aG(r,l,g,new B.ce([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aG(r,e.b,g,new B.ce([v,0,i,!0]),B.a([],a1)),k)}}a0.iz()
h=u[d].Di(o).a
$.S()
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=w.gp(0)
l.y=Ad.oz
a2.N(h,5,l)
l=new B.ao(A.P,A.M,A.R,A.S,A.Q)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e3()
f.cY(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h3()?-0.1:1.1
v=e.b*v
u=new B.p(w,v)
t=e.gaoh()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aG(k.r,A.ai,g,g,j)
j.push(new B.aZ(w,v))
i.ab()
k=m-l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=m+l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new B.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alW(u,t,j,g,A.x,g,g,0))
k.y=A.kV
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bcD.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e3()
e.cY(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.ai()
m=e.ai()
l=Math.min(u,s)*(0.03+e.ai()*0.09)
k=e.ai()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ar(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ao(A.P,A.M,A.R,A.S,A.Q)
f.r=g.j(h).gp(0)
f.y=new B.hp(A.G,l*0.35)
d.N(new B.p(j,i),l,f)
f=new B.ao(A.P,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.p(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bcg.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e3()
e.cY(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aG(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=s
j.d=A.bv
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hp(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.by2.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sav(new B.bY(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d9G,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.L()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kV
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bv0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e3()
p.cY(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=k.gp(0)
j.c=1.4
j.d=A.bv
d.ah(new B.p(o-l,n),new B.p(o+l,n+0),j)
i=l*1.4
d.ah(new B.p(o,n-i),new B.p(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.p(h,n-i),new B.p(g,n+i),j)
i=-l*0.45
d.ah(new B.p(h,n-i),new B.p(g,n+i),j)
i=new B.ao(A.P,A.M,A.R,A.S,A.Q)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hp(A.G,l*0.3)
d.N(new B.p(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.bu8.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.S()
v=B.L()
v.a=A.pd
v.sav(new B.a8(A.aA,A.aD,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.D(u-0.15,0,1),A.j.D(u,0,1),A.j.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bh9.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.L()
w.b=A.a9
w.c=1.4
w.d=A.bv
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uM
r=new C.dii(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.p(t,t),1,1)
v=e.a-t
r.$3(new B.p(v,t),-1,1)
s=e.b-t
r.$3(new B.p(t,s),1,-1)
r.$3(new B.p(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.yh.prototype={}
C.JM.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.at5.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vk.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hI.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eS.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ev(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdR(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.idd(v.z))
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
C.m4.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eS>")
n=B.C(new B.N(n,new C.clm(),m),m.k("ak.E"))
return C.t1(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.cln(),m),m.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hT.prototype={
gbds(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gTe(){if(!C.kP(this.w))return!1
var w=this.gbds()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bT())},
hQ(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("N<1,m4>")
r=B.C(new B.N(r,new C.clb(),q),q.k("ak.E"))
return C.Cs(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
aj(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.aa().ag())
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
v=B.U(w).k("N<1,a9<n,@>>")
w=B.C(new B.N(w,new C.clc(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k2.prototype={}
C.b3M.prototype={
B(d){return B.co(new C.clh(this))}}
C.aq6.prototype={
S(){return new C.bm3(null,null)}}
C.bm3.prototype={
gb20(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fN,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb20().t()
this.bz8()},
B(d){return B.c6(this.gb20(),new C.dQY(),this.a.c)}}
C.aNv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aeR.prototype={
QL(d,e,f,g){return this.bTP(d,e,f,g)},
bTP(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QL)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.T(B.b2(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QL,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.K(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.r(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dq,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.u(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.dc)
n.push(B.A(B.a([B.E(new C.af7(A.hP,"Download",A.c2,new C.eD_(w,d),!0,v),1),A.au,B.E(new C.af7(A.v_,"Share",A.bn,new C.eD0(w,d),!1,v),1),A.au,B.E(new C.af7(A.hR,"Safari",A.b3,new C.eD1(w,d),!1,v),1)],m),A.l,v,A.e,A.i,0,v,v))
n.push(A.aC)
n.push(B.bP(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eD2(d),v,v))
return B.bm(!0,new B.D(A.qG,B.x(B.a([B.r(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.jn,v,t,u,s,v,A.n),v,v,v,v,A.H3,v,v,1/0)],m),A.l,v,A.e,A.O,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af7.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.K(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aH(!1,A.a3,!0,v,B.aN(!1,u,!0,B.eB(B.x(B.a([p,A.T,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.O,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bIM,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3K.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.asc(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.ced().amj(1.35)
s=B.axK(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEL(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aP(),i.w,A.bn,h,h,h,h,2,D.c5m,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bo("slide_tf_"+g.a,x.W),h,A.xs,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AQ,A.ao,h,A.Vw,h,h)
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
w=n?t.cP2(B.b0(g.Q).j(0.45),A.cK):t
p=g.as
l=m?1:h
k=m?A.eS:A.EN
p=B.d(f,new B.bo("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Vn:s
$.S()
j=B.L()
j.b=A.a9
j.c=3*w
j.e=A.dT
j.r=A.as.gp(0)
j=i.cvf(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cvd(k,t,l?A.Vn:s)],x.p),h)}else w=i.cve(p,t,g.k2?A.Vn:s,m)
v=new B.mr(w,new B.bo("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c3,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c2q()
case 3:return i.cmP()
case 2:return B.b3(h,h,h,new C.b3H(g,h),A.fT)
case 5:g=g.r
return new C.b3J(g,!i.e&&i.z==null,h)}},
ced(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k4
j=A.cK
break
case"shadow":v=o.d
e=B.a([new B.cU(D.aio,new B.p(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.J,6*v),new B.cU(l,A.J,16*v),new B.cU(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bl
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.ni
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bE,new B.p(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.p(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.b9,new B.p(-3*v,0),0),new B.cU(A.ay,new B.p(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cI,A.J,8*v),new B.cU(A.ay,new B.p(0,-3*v),18*v)],x.r)
k=A.u
w=A.wc
break
case"ice":v=o.d
e=B.a([new B.cU(A.aG,A.J,10*v),new B.cU(A.cD,A.J,22*v)],x.r)
k=A.U
w=A.eH
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k4
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.dbO[q]
u.push(new B.cU(v,new B.p(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.p(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.L()
v=o.d
f.sav(D.c86.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.FH,new B.p(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.L()
v=o.d
f.sav(D.c8t.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.J,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cE
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.p(u,u),0),new B.cU(l.j(0.2),new B.p(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k4
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.m(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBK(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.fev.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.clf(h)
v=r.k2?C.iqb(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eS:A.EN
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Ze(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cvf(d,e,f,g){return this.aBK(d,e,f,!1,g)},
cvd(d,e,f){return this.aBK(d,e,f,!1,null)},
cve(d,e,f,g){return this.aBK(d,e,f,g,null)},
bEL(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a7}},
c2q(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.X(s.b===D.ls?A.HY:A.CT,A.aF,t,t,t,32),t,t,t)}w=u.bHP(r)
if(s.b===D.ls){s=B.l(6)
v=2*u.d
return B.r(t,w,A.f,t,t,new B.o(A.c,t,B.K(A.cx,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dN,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQF(r,!0)
return C.fQk(s.go,v,s.id)}return w},
aQF(d,e){var w,v,u,t
try{w=C.iqw(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.co(new C.cle(this,w,v,e))
return u}catch(t){return D.afN}},
bHP(d){return this.aQF(d,!1)},
cmP(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.be8
return C.iqO(v,w.db,w.dx)}}
C.b3H.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.L(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.L()
w.r=B.b0(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a1(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.ar(s,g)
d.ar(s,w)
break
case 1:d.bZ(s,g)
d.bZ(s,w)
break
case 2:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.aZ(0,h))
f=u*0.65
r.E(new B.aq(f,h))
r.E(new B.aq(f,t*0.2))
r.E(new B.aq(u,t*0.5))
r.E(new B.aq(f,t*0.8))
t*=0.55
r.E(new B.aq(f,t))
r.E(new B.aq(0,t))
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.p(0,h),new B.p(u,h),w)
break
case 5:q=u*0.22
r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aG(h.r,A.ai,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aZ(k,j)
f.push(h)
v=r.f
if(v!=null)h.ak(v)
r.ab()}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.ak(v)
r.ab()}}r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aL1.prototype={
S(){return new C.bxx(null,null)}}
C.bxx.prototype={
Y(){var w,v=this
v.a4()
w=B.bl(null,A.hK,null,1,null,v)
w.cL(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBp()},
aQQ(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bN(new B.o(w,w,w,B.l(8),w,new B.a8(A.a7,A.aa,A.x,v,w,w),A.n),A.bi,B.as(B.d(d,w,w,w,w,w,w,A.dq,w,w,w),w,w,w),w)},
bEZ(){var w,v=this,u=null,t=v.aQQ("Slide A",A.bn),s=v.aQQ("Slide B",A.b3)
if(v.a.c===D.cu)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.fhT(v,s,t),u)},
B(d){return this.bEZ()}}
C.aLJ.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wr.prototype={
S(){return new C.bmh(null,null)}}
C.bmh.prototype={
Y(){var w,v,u=this
u.a4()
w=B.bl(null,A.Ck,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cu){w.sp(0,1)
return}B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1N(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cu)w.sp(0,1)
else B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1M(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzp()},
B(d){var w,v=this.a
if(v.c.dy===D.cu||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.e1L(this),v.d)}}
C.JL.prototype={
B(d){return B.co(new C.cl7(this))}}
C.aBD.prototype={
S(){return new C.bgA()}}
C.bgA.prototype={
Y(){this.a4()
if(this.a.c!==D.cu)B.bO(A.NY,new C.dfv(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cu)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.v(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wr(C.ev(A.bp,!1,4279310375,A.aH,"",4294538006,24,A.bs,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bm,o,2,"",0,0,"",u,D.fj,0.84,0.08,0.12),B.r(p,p,A.f,p,p,new B.o(A.c6,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bo("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.v(0)
n=q.d
t=C.ev(A.bp,!1,4294967295,A.aH,"",4280640491,22,A.bs,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bm,o,2,"Element flies in",0,0,"",q.a.c,D.d1,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.Wr(t,B.r(p,D.fP6,A.f,p,p,new B.o(s,p,B.K(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jr,p,p,1/0),!0,1,new B.bo("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bN(D.b95,A.bi,n,p)}}
C.a98.prototype={
S(){return new C.bmY(null,null)}}
C.bmY.prototype={
gb2D(){var w=this.a
if(w.e)w=D.feH.q(0,w.c)||D.aTE.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a4()
if(v.gb2D()){w=C.ioN(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzV()},
B(d){var w,v=this,u=v.d
if(!v.gb2D()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eqm(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1G.prototype={
B(d){var w=null
return B.as(C.b3L(!0,w,!1,C.ev(A.K,!1,this.e.l(),A.aH,"",4280640491,this.f,A.bs,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bm,4280172719,2,"Aa",0,0,this.c,D.cu,D.d1,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhN.prototype={
ju(d){return C.a3U(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bt1.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3U(k,l),i=e.gdA(),h=new C.f6N()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aVd.aK(0,l))
d.af(j,w)
k=C.a3U(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bvd.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fp5.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hp(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.fp3.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3U(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.hp(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pn.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.foZ.aK(0,l))
d.af(j,w)
w=C.a3U(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bi_.gp(0)
d.af(w,v)
k=C.a3U(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bl2.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aVd.aK(0,l))
d.af(j,k)
for(k=B.xO(j),w=B.a([],x.X),k=new B.rA(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bj(B.jK(y.M));--r
k.iz()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iz()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iz()
n=w[r].Di(q*o/p).a
m=D.d8W[A.o.F(o,4)]
$.S()
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.9).gp(0)
d.N(new B.p(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fp7.aK(0,l))
k.y=new B.hp(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fp4.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3U(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pg.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bu5.prototype={
a5(d,e){d.Gv(C.a3U(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aNL.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aOf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a9r.prototype={}
C.P_.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGx(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUB(){return this.r},
gUC(){return this.w},
gMk(){return this.x}}
C.aGx.prototype={
Y(){var w,v,u=this
u.a4()
$.aU.c1$.push(u)
C.fVq()
$.hFR=new C.eJe(u)
w=B.bl(null,A.Ch,null,1,null,u)
w.f2(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.heM.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J2()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pe(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J2()}},
jm(d){if(d===A.Bn||d===A.u4||d===A.u3||d===A.q8)this.ug()},
t(){var w,v,u,t=this
$.aU.hV(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.heM.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.ug()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hk()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}t.bA7()},
gZ4(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPy(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adl(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTe())return!1
return!0},
ky(){return this.adl(null)},
aki(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fnj)},
qR(){if(!this.ky())return!1
this.aki()
return!0},
atb(d){var w,v,u,t,s,r=this
if(r.adl(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hEW(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Au(){return this.atb(null)},
J2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.at7(k),$async$J2)
case 3:j=e
w=4
return B.b(C.b1T(k),$async$J2)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.haD(j,t.c5t())
w=t.gZ4()?5:7
break
case 5:r=t.gPy()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8E(r),$async$J2)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eFC())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eFD())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.I)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zi(m==null?"":m)!=null)continue
C.fVC(n,s)
p=!0}t.m(new C.eFE(t,s))
l=B.C(s,x.I)
$.heM.n(0,k,l)
if(p||s.length>J.ad(j))t.ug()
case 1:return B.h(u,v)}})
return B.i($async$J2,v)},
c5t(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kP(w)&&w!==q}if(w)p.push(r)
return p},
ctH(d){var w,v=this,u=d.w
if(!C.kP(u)||u==="hati_kiapo_uongozi")return
v.abF(d)
w=A.d.bj(v.d,new C.eHc(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnL(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kP(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctH(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hT>")
s=B.C(new B.cM(new B.Y(s,new C.eH0(),w.k("Y<1>")),new C.eH1(),v),v.k("M.E"))
return s},
Pe(d){return this.bUf(d)},
ug(){return this.Pe(null)},
bUf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnL()
w=3
return B.b(C.Xl(d==null?t.a.c:d,s),$async$Pe)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.atb(r)?4:5
break
case 4:w=6
return B.b(C.OB(r),$async$Pe)
case 6:q=r.x
p=A.a.i(q==null?t.gPy():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eF_())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pe,v)},
pM(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kP(u.w))===!0?A.h7:A.lJ
v.at=B.cy(w,new C.eIk(v))},
b21(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agE(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cHt(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agE(w.e.hQ(),w.f,w.r))
w.m(new C.eJa(w,v.pop()))
w.pM()},
csM(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agE(w.e.hQ(),w.f,w.r))
w.m(new C.eHa(w,v.pop()))
w.pM()},
oF(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIY(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
YC(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yf(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.U$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hk()}w.a8(0)},
KS(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d0(new B.cM(new B.Y(w,new C.eIZ(),v.k("Y<1>")),new C.eJ_(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.I)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hk()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.I)(v),++r){n=v[r]
if(n.b!==D.d1)continue
p=n.a
m=w.c3(0,p,new C.eJ0(n))
s.c3(0,p,new C.eJ1())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Il(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eEo(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPy()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oF()
u.pM()},
akE(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.YC(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kP(v.w))===!0
if(u){C.ioR(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ioS(t,w.d+w.f*0.5)}}s.Il()
s.oF()
s.pM()
if(u&&s.c!=null)s.m(new C.eJb())},
cIB(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Il()
w.oF()
w.pM()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqV(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.imO(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2F(v)
t=q.c2E(v)
s=B.b0(v.e)
r=v.f
return new C.k2(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hZx(o)},
c2F(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(t.b===D.d1)s=t.w>=28||A.o.D(A.o.aq(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.a_},
c2E(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d1&&t.w<28)return B.b0(t.Q)}return A.aM},
agB(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZ4()){w.c.L(x.q).f.T(D.flU)
return}w.abF(d)
w.b3k(C.bFj(d))
return}if(C.cm_(v)){w.abF(d)
w.b3k(d)
return}w.m(new C.eGj(w,d))},
atK(){var w,v,u,t,s,r,q=this
q.a3n(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kP(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eEm(q))
if(r&&q.c!=null){u.toString
q.Ko(u,s)}return}q.ug()
q.m(new C.eEn(q))},
b3j(d){this.abF(d)
this.a0R(d,!0)},
abF(d){if(!C.kP(d.w))return
C.fVC(d,this.d)},
a0R(d,e){return this.cjD(d,e)},
b3k(d){return this.a0R(d,!1)},
cjD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0R=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bFj(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPy():r)
t.dy.W(0,q.toLowerCase())
C.a8B(t.a.c,q)}r=s}else r=d
w=C.cm_(r.w)?3:4
break
case 3:w=5
return B.b(t.abG(r),$async$a0R)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eGG(l))
o=l.a.hQ()
n=C.kP(o.w)&&C.iq6(o)
t.m(new C.eGH(t,o,p))
if(n){m=A.d.bj(t.d,new C.eGI(o))
if(m>=0){t.d[m]=o.hQ()
t.ug()}}if(!t.adl(l.a))t.ZQ()
r=!1
if(t.c!=null)if(!t.adl(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.atb(r)&&C.fRw(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fmu)
case 1:return B.h(u,v)}})
return B.i($async$a0R,v)},
abG(d){return this.bSf(d)},
bSf(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lB(r.c,A.Au),$async$abG)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lh(!1,r,s.c,s.d,null,A.Au,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abG,v)},
ot(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ot=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cm_(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.clp(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ot,v)},
agi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGi(),s,null,!0,!0,x.H),$async$agi)
case 3:if(t.c==null){w=1
break}t.atK()
case 1:return B.h(u,v)}})
return B.i($async$agi,v)},
agh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGf(),s,null,!0,!0,x.H),$async$agh)
case 3:if(t.c==null){w=1
break}t.m(new C.eGg())
t.atK()
case 1:return B.h(u,v)}})
return B.i($async$agh,v)},
ZQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZQ)
case 3:r=e
if(B.k7(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aD("Bool","ngmy_marriage_hint_seen",!0),$async$ZQ)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkt)
case 1:return B.h(u,v)}})
return B.i($async$ZQ,v)},
Ko(d,e){return this.cu6(d,e)},
cu6(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ko=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahX(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Ko)
case 9:w=4
break
case 6:w=10
return B.b(C.ahY(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Ko)
case 10:w=4
break
case 7:w=11
return B.b(C.ahZ(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Ko)
case 11:w=4
break
case 8:w=12
return B.b(C.ai_(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Ko)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ko,v)},
Zq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Zq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZ4()){t.c.L(x.q).f.T(D.fkG)
w=1
break}s=t.gPy()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HF(r,"Search states\u2026",s,A.kb,"Hati ya Kiapo: which state?"),$async$Zq)
case 5:q=e
if(q==null||A.a.i(q).length===0||t.c==null){w=1
break}s=A.a.i(q)
case 4:r=t.a
p=r.d
o=!0
if(!p)if(!r.w){if(!r.x)if(r.r){r=A.a.i(r.z)
r=r.length!==0&&r.toLowerCase()===s.toLowerCase()}else r=!1
else r=o
o=r}r=t.c
r.toString
C.a3j(p,o,r,p,new C.eFy(t),new C.eFz(t),s)
case 1:return B.h(u,v)}})
return B.i($async$Zq,v)},
agC(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dX,null,new C.eGp(u),s,!0,!0,!1,A.lW,!1,!1,x.N),$async$agC)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ai_(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahX(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahY(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahZ(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.Zq()
return B.h(null,v)}})
return B.i($async$agC,v)},
ciJ(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b21()
w=C.cE()
v=C.Cs(t,t,t,t,D.E9,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eGq(u,v))},
ab3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ab3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iv3(s),$async$ab3)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eEq())
t.dc(new C.eEr(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab3,v)},
aiD(d,e,f,g){var w=null,v=g?A.dr:A.cd,u=B.K(g?A.aT:A.cx,A.r,1)
return B.h9(B.az(w,B.r(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0Q(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0Q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qR()){w=1
break}s=t.kd()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGB(),q),q.k("M.E"))}o=s!=null&&s.b===D.lV?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fmG)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGC(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0Q)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0Q,v)},
agT(){return this.cjC()},
cjC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iuQ(s,t.f+1,o),$async$agT)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jC(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eGE(q))
t.dc(new C.eGF(p,t,o,q,r))
t.c.L(x.q).f.T(D.fn4)
case 1:return B.h(u,v)}})
return B.i($async$agT,v)},
ah_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ah_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()||!t.Au()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGW(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fkd)
w=1
break}o=new B.N(p,new C.eGX(),B.U(p).k("N<1,G>")).f1(0,new C.eGY())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.I)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eGZ(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ah_)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.U$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eH_())
case 1:return B.h(u,v)}})
return B.i($async$ah_,v)},
agF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qR()){w=1
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
return B.b(C.hHi(s,new C.Fp(r,q,p,o==null?"":o)),$async$agF)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eGr(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ail(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
abz(){return this.bRx()},
bRx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iv2(s,t.f+1,l),$async$abz)
case 3:r=e
q=$.hem
$.hem=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eEH())
t.c.L(x.q).f.T(D.fk4)
w=1
break}if(!q){s=r.CW
s=C.hFP(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eEI(t,l,r))
t.c.L(x.q).f.T(D.fnz)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jC(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eEJ(p))
o=s.length
t.dc(new C.eEK(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abz,v)},
aT4(d,e){if(e){this.ahs()
return}this.ciJ(d,!1)},
bN1(){return this.aT4(null,!1)},
ahs(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c4,null,new C.eH5(t),r,!0,!0,!0,A.pT,!1,!1,x.N),$async$ahs)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eH6(t,C.imN(s).oL()))
case 1:return B.h(u,v)}})
return B.i($async$ahs,v)},
dc(d){var w=this
if(w.qR())return
w.Il()
w.b21()
w.m(d)
w.KS()
w.oF()
w.pM()},
a9z(){this.dc(new C.eDk(this,D.nd))},
aUz(){var w=this.gdB()
if(w==null)return
this.dc(new C.eEF(this,w))},
aTF(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eED(this))},
b6e(d,e){if(this.e==null||d===e)return
this.dc(new C.eHe(this,d,e))},
OL(d){return this.bP2(d)},
bP2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.fmB)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPy():s)
w=5
return B.b(C.a8D(r),$async$OL)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8B(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.at9(s)
w=6
return B.b(C.b3P(t.a.c,s),$async$OL)
case 6:if(t.c==null){w=1
break}t.m(new C.eEz(t,d))
w=7
return B.b(t.ug(),$async$OL)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OL,v)},
cu3(d,e){var w=this
if(d.z){w.aki()
return}w.m(new C.eHd(w,d,e))
w.pM()},
kd(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
XB(d){return this.ch.c3(0,d.a,new C.eEp(d))},
avD(d){return this.CW.c3(0,d.a,new C.eF0())},
a3n(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.YC(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ap$.d.c
if(u!=null)u.js()},
b9M(){return this.a3n(!0)},
a3j(d){var w,v,u=this
if(u.qR())return
if(!u.Au())return
w=u.YC(d)
if(w==null||w.b!==D.d1)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.XB(w).sb1(0,"")}u.m(new C.eIW(u,d))
$.aU.x1$.push(new C.eIX(u,d,w))},
bak(d){var w=this
if(d.b===D.d1&&!w.ky()&&w.Au()){w.a3j(d.a)
return}w.aC9(d.a)},
aC9(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.YC(w)
if(v!=null&&v.b===D.d1){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eIl(r,s,d))
if(s||d==null){t=$.aU.ap$.d.c
if(t!=null)t.js()}},
aP9(){this.dc(new C.eDl(this))},
pt(d){return this.bE1(d)},
bE1(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$pt)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDi(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pt,v)},
WE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hy(78,1920),$async$WE)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD8(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WE,v)},
Wy(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.DD(t.a.c),$async$Wy)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fo8)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eD5(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wy)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eD6(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wy,v)},
auB(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eEB(v))){w.c.L(x.q).f.T(D.fn8)
return}if(w.w===v)w.a3n(!0)
w.dc(new C.eEC(w,v))},
bLg(){var w=this.kd(),v=w==null
if((v?null:w.b)===D.fj)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d1)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPS(d,e){var w=this,v=w.kd(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eDN(w,v,d,e,t,u))},
bFC(d){return this.aPS(d,null)},
a9P(d){return this.bFK(d)},
bFK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aaB.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ot(),$async$a9P)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s!=null){r=s.b
if(r===D.d1)t.bFC(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fj){r=d.c
t.aPS(r.j(0.88),r)}w=1
break}t.dc(new C.eDS(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9P,v)},
a9O(d){return this.bFI(d)},
bFI(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kd()
r=t.gdB()
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
return B.b(t.ot(),$async$a9O)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDQ(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9O,v)},
bFs(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eDM(this,w,d))},
a0W(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iuZ(r),$async$a0W)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oF()
t.m(new C.eGQ(t,s))
w=4
return B.b(t.ug(),$async$a0W)
case 4:if(t.c!=null)t.agB(s)
case 1:return B.h(u,v)}})
return B.i($async$a0W,v)},
abq(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3n(!0)
t.oF()
s=t.c
s.toString
w=3
return B.b(C.Sn(s,q),$async$abq)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abq,v)},
Ea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oF()
t=4
w=7
return B.b(C.aSr(m),$async$Ea)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRT(o,q,m.b),$async$Ea)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ac(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ea,v)},
FS(d,e){return this.cGR(d,e)},
cGR(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FS=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qR()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3n(!0)
t.oF()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eJ4(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.inM(q?"":s)
o=C.hEH(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eJ5(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czW(n.length,o,s),$async$FS)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.inG(h.a)
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
return B.b(t.czV(n,o),$async$FS)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fc(t.d,new C.eJ6(s))
s=h.a.b
w=11
return B.b(t.czT(k.b,s),$async$FS)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.inL(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fok)
w=1
break}w=12
return B.b(t.czU(j.a,s,o,j.c),$async$FS)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eJ7(h,t,i))
t.pM()
case 1:return B.h(u,v)}})
return B.i($async$FS,v)},
czW(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIB(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czV(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIA(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czT(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIu(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czU(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIw(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acT(){var w=null
return B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acU(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ar(d,A.c4,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.r(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.aA,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fzt,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXV(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.K(e.j(0.22),A.r,1)
return B.r(w,B.d(d,w,2,A.a2,w,w,w,A.W8,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXY(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a8(A.aA,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.K(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aH(!1,A.a3,!0,w,B.aN(!1,v,!0,B.r(w,B.A(B.a([B.r(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nj,w,w,w),A.cR,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.zh,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFu(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1z(d,e,f,g,h,i){return this.aXY(d,e,f,!1,g,h,i)},
awX(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(A.c.j(0.08),A.r,1)
return B.r(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dq,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a1o,w,w,w)},
aXX(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.o3,w,w,w),w,new C.eFt(d,f),v)},
aXW(d,e){return this.aXX(d,e,null)},
KJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pA(l,s.c,s.d),$async$KJ)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.fg(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eJ(l,new C.eIm());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abl(l.charCodeAt(0)==0?l:l,r.b),$async$KJ)
case 4:l=t.a
w=5
return B.b(B.pz(l.c,l.d),$async$KJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KJ,v)},
IH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pA(q,s.c,s.d),$async$IH)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abl(A.X.aw(r.aj(),null),r.b+".json"),$async$IH)
case 4:q=t.a
w=5
return B.b(B.pz(q.c,q.d),$async$IH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IH,v)},
b9v(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oF()
u.ug()
w=u.c
w.toString
v=B.ed(new C.eIV(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$HV)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fVP(),$async$HV)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iqI(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.as,null,new C.eDd(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HV)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eDe(t,s))
w=1
break}if(p==="split")t.dc(new C.eDf(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HV,v)},
O4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}w=3
return B.b(t.ot(),$async$O4)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSq(s,null,null),$async$O4)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eDj(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
b60(d){var w=this.e
if(w==null||!C.kP(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRe(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aSq(s,t==null?null:B.b0(t),u)},
a9x(d){return this.bDT(d)},
bDT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.foB)
w=1
break}w=3
return B.b(t.aRe(),$async$a9x)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eDa(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9x,v)},
aib(d){return this.csP(d)},
csP(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aib=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fnH)
w=1
break}w=3
return B.b(t.aRe(),$async$aib)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eHb(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aib,v)},
cfn(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFR()}},
cFR(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eJ2(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1U(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eFx(this,r,u.d))},
c6M(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kP(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fSh(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6N(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kP(w.w))!==!0)return!0
if(!this.Au())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fSh(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Oc(d){return this.bG9(d)},
bG9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Oc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fmv)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arG(p),$async$Oc)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fna)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.OB(r)
w=1
break}t.m(new C.eDW(t,d,o))
t.oF()
$.aU.x1$.push(new C.eDX(t))
case 1:return B.h(u,v)}})
return B.i($async$Oc,v)},
WC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$WC)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bG0(),$async$WC)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD7(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WC,v)},
P_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$P_)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fVG(r),$async$P_)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eEZ(s,q))
case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
jk(d){this.dc(new C.eDg(this,d))},
qG(d){return this.bFl(d)},
bFl(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qR()){w=1
break}m=!D.aTH.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ot(),$async$qG)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HV()
w=1
break A
case"sign_paper":t.O4()
w=1
break A
case"hd_photo":t.WC()
w=1
break A
case"sharpen":t.P_()
w=1
break A
case"print":t.Ea()
w=1
break A
case"rotate":s=t.kd()
if(s!=null)t.dc(new C.eDp(s))
w=1
break A
case"text_box":t.aP9()
w=1
break A
case"picture":t.WE()
w=1
break A
case"present":t.b9v()
w=1
break A
case"new_slide":t.a9z()
w=1
break A
case"export_json":t.IH()
w=1
break A
case"outline_share":t.KJ()
w=1
break A
case"flashcard_tool":t.vT(D.Jr)
w=1
break A
case"quiz_tool":t.vT(D.Js)
w=1
break A
case"worksheet_tool":t.vT(D.Jt)
w=1
break A
case"duplicate_el":s=t.kd()
if(s==null){w=1
break A}t.dc(new C.eDq(t,s))
w=1
break A
case"delete_el":t.auB()
w=1
break A
case"bring_fwd":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDr(t,s))
w=1
break A
case"send_back":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDC(t,s))
w=1
break A
case"align_left":s=t.kd()
if(s!=null)t.dc(new C.eDF(s))
w=1
break A
case"align_center":s=t.kd()
if(s!=null)t.dc(new C.eDG(s))
w=1
break A
case"align_right":s=t.kd()
if(s!=null)t.dc(new C.eDH(s))
w=1
break A
case"grayscale":case"brighten":t.P_()
w=1
break A
case"flip_h":s=t.kd()
if(s!=null)t.dc(new C.eDI(s))
w=1
break A
case"flip_v":s=t.kd()
if(s!=null)t.dc(new C.eDJ(s))
w=1
break A
case"rectangle":t.pt(D.bm)
w=1
break A
case"circle":t.pt(D.f2)
w=1
break A
case"triangle":t.pt(D.ke)
w=1
break A
case"arrow":t.pt(D.Eb)
w=1
break A
case"line":case"divider":t.pt(D.fQ)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eJ(q,new C.eDK()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eDL(),B.U(n).k("Y<1>")).gJ(0)}t.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jk(C.j8(A.K,!1,t.gqV().d.l(),A.aH,40,A.bs,A.u,0.18,q,"Presentation Title",0,D.ne,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jk(C.j8(A.K,!1,t.gqV().e.l(),A.aH,22,A.bs,A.a8,0.12,q,"Subtitle goes here",0,D.ds,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j8(A.bp,!0,4279310375,A.aH,20,A.bs,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vs,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j8(A.bp,!1,4279310375,A.aH,20,A.bs,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.vr,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j8(A.K,!1,4279310375,A.aH,24,A.cK,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.ds,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j8(A.bp,!1,4284773515,A.aH,14,A.bs,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vs,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j8(A.e5,!1,4279310375,A.aH,14,A.bs,A.a8,0.08,C.cE(),C.bG2(),0,D.ds,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j8(A.e5,!1,4279310375,A.aH,13,A.bs,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.ds,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eDs(t))
w=1
break A
case"footer_bar":t.dc(new C.eDt(t))
w=1
break A
case"highlight":t.dc(new C.eDu(t))
w=1
break A
case"redact":t.dc(new C.eDv(t))
w=1
break A
case"callout":t.dc(new C.eDw(t))
w=1
break A
case"checkboxes":t.jk(C.j8(A.bp,!1,4279310375,A.aH,20,A.bs,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.ds,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.ds,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eDx(t))
w=1
break A
case"letter":t.jk(C.j8(A.bp,!1,4279179050,A.aH,17,A.bs,A.a8,0.82,C.cE(),C.bG2()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j8(A.bp,!1,4279310375,A.aH,22,A.bs,A.U,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vs,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.ds,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.ds,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.08,C.cE(),"Initials: ______",0,D.ds,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j8(A.K,!1,4278556265,A.aH,28,A.bs,A.u,0.12,C.cE(),"APPROVED",0,D.ne,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j8(A.K,!1,4292617766,A.aH,28,A.bs,A.u,0.12,C.cE(),"DRAFT",0,D.ds,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j8(A.K,!1,871318596,A.aH,36,A.bs,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.ds,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eDy(t))
w=1
break A
case"progress":t.dc(new C.eDz(t))
w=1
break A
case"stars":t.jk(C.j8(A.K,!1,4279310375,A.aH,36,A.bs,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r4,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j8(A.K,!1,4279310375,A.aH,32,A.bs,A.U,0.14,C.cE(),"y = mx + b",0,D.ds,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j8(A.K,!1,4279310375,A.aH,18,A.bs,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vr,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eDA(t))
w=1
break A
case"compare":t.dc(new C.eDB(t))
w=1
break A
case"link_text":t.jk(C.j8(A.bp,!1,4280640491,A.ni,16,A.bs,A.a8,0.1,C.cE(),"https://example.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j8(A.bp,!1,4280640491,A.aH,18,A.bs,A.a8,0.1,C.cE(),"name@email.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eDD(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eDE(t,r))
w=1
break A
case"invoice":t.jk(C.j8(A.bp,!1,4279179050,A.aH,16,A.bs,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j8(A.bp,!1,4279179050,A.aH,17,A.bs,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bG2()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j8(A.bp,!1,4279310375,A.aH,17,A.bs,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j8(A.bp,!1,4279310375,A.aH,15,A.bs,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.ds,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qG,v)},
czn(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.feD.q(0,this.z)},
czm(d){if(this.kd()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bbd(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cu,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.by
u=B.K(u,A.r,o&&e?2:1)
t=C.iqx(d)
s=o?12:18
r=o?A.I:A.cZ
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.r(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.r(p,D.Q3,A.f,p,p,D.Fv,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fn,B.az(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRO(d){var w,v=null,u=this.kd()
if(u==null)return A.bM
w=B.a([A.af,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aF:A.an,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.u(w,new B.N(D.SE,new C.eEY(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.i,0,v,v)},
vT(d){return this.bE0(d)},
bE0(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aTB.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ot(),$async$vT)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDh(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.fcY
w=h.e
if(w==null)return h.bHV()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eT,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c4:D.bkm
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTe()}else j=!1
if(j)k.push(new C.a99(h.a.c,!1,h.e.gbds(),h.gcfk(),g))
else if(s&&h.e!=null&&!h.ky()&&C.cm_(h.e.w)){j=h.a
k.push(new C.a99(j.c,j.d,g,h.gcgt(),g))}if(s)k.push(h.bRJ(w,t,r))
if(s&&h.ky()){w=t?A.h_:A.li
j=B.l(14)
i=B.K(A.bn.j(0.35),A.r,1)
k.push(B.r(g,B.A(B.a([D.bZM,A.af,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.h_,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yK,A.hM,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7J(t,r))
if(w&&h.ky())k.push(h.cGS(t))
if(r&&h.kd()!=null&&w&&!h.ky())k.push(h.c7E(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8V(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8V(t,!1),g))
i.push(B.E(new B.bL(A.b0,g,g,h.bJg(v,t,!s||p),g),1))
if(h.czn(r)&&u&&s&&!h.ky())i.push(h.cf6(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.i,0,A.p),1))
if(q&&!h.ky()&&h.czm(!1))j.push(new B.a5(240,g,h.bUE(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c7F(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHV(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.H
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f2(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u4(0,!1)}p=w?A.c4:A.c
v=r.c
v.toString
v=B.aF(v,A.dO,x.w).w
u=r.a.e
t=x.p
s=B.a([r.cee(A.bn,A.qN,new C.eE_(r),r.gciG(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bz,B.A(B.a([B.E(r.asg(A.bn,A.i4,"Blank Presentation",new C.eE0(r)),1),A.au,B.E(r.asg(A.b3,A.v7,"Class Template",new C.eE1(r)),1)],t),A.l,q,A.e,A.i,0,q,q)],t)
if(r.a.d&&r.gZ4()&&!A.d.aV(r.d,new C.eE2()))A.d.u(s,B.a([A.W,new B.mr(r.asg(A.c2,A.ja,"Create Hati ya Kiapo",r.gc4h()),D.hue)],t))
s.push(A.nh)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aF:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.ae)
t=r.d
if(t.length===0)s.push(r.bEO(w))
else{t=new B.i6(t,B.U(t).k("i6<1>"))
A.d.u(s,t.gdP(t).dN(0,new C.eE3(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cm(s,q,q,new B.R(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bPQ(){this.m(new C.eEE(this))
var w=this.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900){w=$.aU.ap$.d.c
if(w!=null)w.js()}},
agU(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kd()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGP(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$agU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
Bv(d,e){return this.czJ(d,e)},
czJ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bv=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.Zo,!0,"Dismiss",j,new C.eIn(),new C.eIo(r,d,e),A.iP,!0,x.N),$async$Bv)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aki()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTe()){r.aki()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSr(d),$async$Bv)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRT(j,q,d.b),$async$Bv)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ac(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FS(d,!1),$async$Bv)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hN(D.Zo,!0,"Dismiss",j,new C.eIp(),new C.eIq(d),A.a3,!0,x.y),$async$Bv)
case 20:if(g===!0)r.OL(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahW("Rename presentation",d.b),$async$Bv)
case 24:l=g
if(l!=null)r.cu3(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eIr(r,k))
r.pM()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bv,v)},
b3Y(d,e){var w=null
return B.bP(!1,D.fZF,w,w,!0,w,w,w,e,w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bn,w,w,w,A.az,w,A.lM,w,w,w,w,w,A.kB,w,w))},
bEO(d){var w,v=null
if(!d)return B.r(v,D.by7,A.f,v,v,B.a7x(A.aG,22),v,v,v,v,A.eA,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c6(w,new C.eDm(this,!0),v)},
bNW(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eEs(),x.dv).bY(0,new C.eEt()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.am_,this.aPs(v,e,new C.eEu(),f),null)},
aPs(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e8)
t=e.j(g?0.14:0.1)
s=new B.aO(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.u(q,B.a([B.X(p,g?A.ab:A.bx,n,n,n,10),A.rb],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.r(n,new B.c8(A.aL,A.e,A.O,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n4,n,n,n))
A.d.u(l,u)}return new B.dE(A.dY,A.a7,A.f,B.A(l,A.l,n,A.e,A.O,0,n,n),n)},
bEM(d,e,f){return this.aPs(d,e,null,f)},
bNY(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dvJ
else if(v==="hati_kuhoweya")w=D.dfW
else{if(v==="hati_kiapo_uongozi")v=D.d1k
else v=C.kP(v)?D.d9i:A.IG
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eEx(this,f,e,d,w),null)},
c7F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kd()
if(i==null||i.b!==D.d1)return A.bM
w=k.XB(i)
v=k.avD(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cs,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b1,B.bP(!1,D.fV2,j,j,!0,j,j,j,new C.eFY(k),j,j)],t),A.l,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.l(18)
p=B.K(A.bn.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hk,new B.bN(new B.o(r,j,p,q,o,j,A.n),A.bi,new B.D(A.eW,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aP(),w,A.bn,j,j,j,j,2,D.c54,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xs,j,j,j,j,j,j,!1,"\u2022",j,new C.eFZ(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AQ,A.ao,j,A.Vw,j,j),j),j),j),1)
q=B.l(16)
p=d?A.br:A.c
o=B.K(d?A.aM:A.bj,A.r,1)
n=B.E(B.cb(B.A(B.a([k.uK(G.P4,j,new C.eG_(k,i),d),k.uK(G.a2w,j,new C.eG0(k,i),d),k.uK(I.aqq,j,new C.eG1(k,i),d),k.uK(I.a3k,j,new C.eG2(k,i),d),k.uK(k.bEK(i.as),j,new C.eG3(k,i),d),k.uK(D.ary,j,new C.eG4(k,i),d),k.uK(D.arx,j,new C.eG5(k,i),d)],t),A.l,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bS(0,B.aH(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.am8,B.r(j,B.A(B.a([n,A.af,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aF:A.an,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dg],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lO,j,j,j),j)],t),A.l,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7E(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kd()
if(m==null)return A.bM
w=m.b
v=w===D.d1
u=B.l(18)
t=x.O
t=d?B.a([A.br,A.a_],t):B.a([A.c,A.aS],t)
s=B.K(d?A.aM:A.bj,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7w(A.j9,"Edit",new C.eFJ(o,m),d,!0))
if(w===D.lV)p.push(o.b7w(A.HT,"Shape & ring",new C.eFK(o),d,!0))
p.push(o.uK(A.Dh,"Format",new C.eFL(o),d))
if(v)A.d.u(p,B.a([o.uK(G.P4,n,new C.eFM(o,m),d),o.uK(D.ary,n,new C.eFN(o,m),d),o.uK(D.arx,n,new C.eFO(o,m),d)],q))
p.push(A.b1)
p.push(o.cxA(A.ek,n,o.gaTD(),d,!0))
p.push(o.uK(A.hO,"Done",new C.eFP(o),d))
return B.r(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a7,A.aa,A.x,t,n,n),A.n),n,n,n,A.Cp,A.lO,n,n,n)},
bEK(d){switch(d.a){case 2:return D.a3h
case 1:case 5:return D.a3j
default:return D.a3i}},
c8z(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e5
default:return A.bp}},
aC7(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.l(12)
u=B.l(12)
t=h?K.Ia:n
if(h)s=n
else s=g?A.c.j(0.06):A.cd
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.u(o,B.a([A.e8,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.ps,B.aH(!1,A.a3,!0,n,B.aN(!1,v,!1,B.eB(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.O,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uK(d,e,f,g){return this.aC7(d,e,f,g,!1,!1)},
b7w(d,e,f,g,h){return this.aC7(d,e,f,g,h,!1)},
cxA(d,e,f,g,h){return this.aC7(d,e,f,g,!1,h)},
bRJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.br,A.a_],m):B.a([A.c,A.oj],m)
w=B.K(e?A.aM:A.nq,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bn.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a3O(A.eM,"Back",p.gbL0(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dg,B.E(B.A(B.a([new B.di(1,A.cl,t,o),A.af,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uy,o,A.e,A.i,0,A.d5,o),1)],q)
if(!p.ky()){u=p.a3O(A.pD,"Undo",p.ax.length===0?o:p.gcHs(),e)
A.d.u(r,B.a([u,p.a3O(D.bT8,"Redo",p.ay.length===0?o:p.gcsL(),e)],q))}r.push(p.a3O(A.zf,"PDF",new C.eER(p),e))
r.push(p.a3O(A.hP,"Download as video",new C.eES(p),e))
if(!p.ky())r.push(B.CF(o,o,B.X(A.oG,e?A.ab:A.bx,o,o,o,o),new C.eET(p),A.J,new C.eEU(p),A.ag,"More",x.N))
r.push(A.dg)
r.push(B.aH(!1,A.a3,!0,o,B.aN(!1,B.l(14),!0,B.eB(D.evy,o,new B.o(o,o,o,B.l(14),o,K.Ia,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCX(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.r(o,B.A(r,A.l,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.aA,A.aD,A.x,m,o,o),A.n),o,o,o,D.bD7,D.bIA,o,o,o)},
cGS(d){var w=this,v=null,u=B.l(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.K(d?A.cm:A.bj,A.r,1)
return B.r(v,B.cb(B.A(B.a([w.j5(A.v4,"Print",new C.eJ8(w),d),w.j5(A.zf,"Download PDF",new C.eJ9(w),d),w.j5(A.qS,"Present",w.gaCX(),d)],x.p),A.l,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yK,G.anN,v,v,v)},
a3O(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dx
else w=g?A.ab:A.aM
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ch)},
c7J(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.K(d?A.cm:A.bj,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eG8(r,d),t),t.k("ak.E"))
t.push(new B.D(A1.ans,new B.fh(new C.eG9(r),q),q))
A.d.u(t,w?B.a([new B.D(T.wE,r.aiD(A.k8,"Ending celebration",r.gciT(),d),q),new B.D(T.wE,r.aiD(A.HT,"Logo ring & frame",r.gcjA(),d),q)],x.p):A.f7)
A.d.u(t,w?B.a([new B.D(T.wE,r.aiD(A.mk,"Look and feel",r.gcjB(),d),q),new B.D(T.wE,r.aiD(A.pF,"Edit this slide's text",r.gck7(),d),q)],x.p):A.f7)
t.push(new B.D(T.wE,B.h9(B.az(q,B.r(q,D.fcm,A.f,q,q,new B.o(q,q,q,B.l(999),B.a([new B.ab(0,A.G,N.lG.j(0.4),A.J,10)],x.V),D.atE,A.n),q,34,q,q,A.f5,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eGa(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cb(B.A(t,A.l,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bJ3,q,q,A.aL)
s=e?8:10
return B.r(q,B.x(B.a([t,B.cb(r.cvb(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yK,q,q,q,q)},
cvb(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.doN[v]
u.a=null
s=u.a=t.b
w.push(e.m0(e.cwX(s),t.a,new C.eHx(u,e),a3,D.aTB.q(0,s)))}w.push(e.j5(A.kX,"Notes Slide",new C.eHy(e),a3))
w.push(e.m0(A.HS,"Quiz",new C.eHz(e),a3,!0))
w.push(e.m0(O.Hs,"Worksheet",new C.eHK(e),a3,!0))
w.push(e.m0(X.HV,"Flashcard",new C.eHV(e),a3,!0))
w.push(e.m0(A.PU,"Lab Report",new C.eI5(e),a3,!0))
w.push(e.m0(A.qQ,"Rubric",new C.eIc(e),a3,!0))
w.push(e.m0(A.py,"Minutes",new C.eId(e),a3,!0))
w.push(e.m0(A.oF,"Syllabus",new C.eIe(e),a3,!0))
w.push(e.m0(A.a3R,"Timeline",new C.eIf(e),a3,!0))
return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dq9[v]
w.push(e.m0(r.b,r.c,new C.eIg(e,r),a3,!D.aTH.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wX,a0,e.gaP8(),a3),e.j5(A.uZ,"Picture",new C.eHA(e),a3),e.j5(A.zs,"Bio link",new C.eHB(e),a3),e.j5(A.a3Q,"Table",new C.eHC(e),a3),e.j5(A.PY,"Sticky",new C.eHD(e),a3),e.j5(A.td,"Divider",new C.eHE(e),a3),e.j5(A.zC,"Header",new C.eHF(e),a3),e.m0(A5.tb,"Rectangle",new C.eHG(e),a3,!0),e.m0(A.pw,"Circle",new C.eHH(e),a3,!0),e.m0(A.a35,"Triangle",new C.eHI(e),a3,!0),e.m0(A.jt,"Arrow",new C.eHJ(e),a3,!0),e.m0(D.bRz,"Parallelogram",new C.eHL(e),a3,!0),e.m0(D.bU5,"Hexagon",new C.eHM(e),a3,!0),e.m0(A.td,"Line",new C.eHN(e),a3,!0),e.m0(A.zf,"PDF",new C.eHO(e),a3,!0),e.m0(N.a4_,"Signature",new C.eHP(e),a3,!0),e.j5(A4.D3,"Quote",new C.eHQ(e),a3),e.j5(D.a2E,a1,new C.eHR(e),a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aQ0("Wide 16:9",D.E9,a3),e.aQ0("Short 9:16",D.oX,a3),new B.D(A.fn,B.n3(D.bWf,d,D.fRe,d,new C.eHS(e),d,d,d,d),d)],u),A.l,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bLf("This slide",!e.Q,a3,new C.eHT(e)),A.bo,e.aSi("All slides",e.Q,a3,new C.eHU(e),!0)],u),A.l,d,A.e,A.i,0,d,d)
p=e.bLg()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bW:A.bN,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5X,new C.eHW(e),n),n.k("ak.E"))
n=B.cb(B.A(n,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.drb[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dx:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fn,B.az(d,B.r(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHX(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cb(B.A(l,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bHj()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHY(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.T,q,A.am,p,A.T,o,A.aw,n,A.T,m,A.aw,l,A.T,j,A.aw,B.cb(B.A(h,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4o(a3)],u),A.E,d,A.e,A.O,0,A.p),d)
case"Transitions":f=e.kd()
w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=new C.eHw(e)
t=new C.eIh(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.SE,f.dy,new C.eHZ(e,u,f),A.b3)
A.d.u(p,B.a([o,A.aw,n,A.T,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.SE,q,new C.eI_(e,u),A.bn))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.O,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.kX,w,new C.eI0(e),a3),e.j5(A.v4,"Print deck",new C.eI1(e),a3),e.m0(D.apA,"Export JSON",new C.eI2(e),a3,!0),e.j5(A.fP,"Duplicate Slide",e.gaUy(),a3),e.j5(A.ek,a2,e.gaTE(),a3),e.cB4(a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kd()
w=x.p
u=B.a([e.j5(D.a2E,a1,new C.eI3(e),a3),e.j5(A.fP,"Duplicate",e.gaUy(),a3),e.j5(A.ek,a2,e.gaTE(),a3),e.j5(A.qS,"Present",e.gaCX(),a3),e.j5(A.Df,a0,e.gaP8(),a3),e.j5(A.D9,"Fit Text",new C.eI4(e),a3),e.j5(A.zf,"Download PDF",new C.eI6(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jO,"Transfer",new C.eI7(e),a3))
if(f!=null){w=B.a([A.af,e.j5(G.P4,"Bold",new C.eI8(e,f),a3),e.j5(G.a2w,"Italic",new C.eI9(e,f),a3),e.j5(G.apb,"Underline",new C.eIa(e,f),a3),e.j5(Ag.P5,"Bullets",new C.eIb(e,f),a3),e.bUn(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRO(a3))
w.push(e.j5(D.bQh,"Delete",e.gaTD(),a3))
A.d.u(u,w)}return B.A(u,A.l,d,A.e,A.i,0,d,d)}},
aQ0(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oX
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.ac2,t,t,t)],v)
if(w)A.d.u(u,B.a([A.dg,D.bVr],v))
return new B.D(A.fn,B.jy(t,t,t,B.A(u,A.l,t,A.e,A.O,0,t,t),t,new C.eDV(this,w,e),s===e,A.bn.j(0.25),t,t,t),t)},
cB4(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.K(d?A.aT:A.cx,A.r,1)
u=B.l(8)
t=B.X(A.Hq,d?A.aF:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.asA,q,q,q,new C.eIE(r,p),q,q,q,q,q,A.ch)
return B.r(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bq,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.asr,q,q,q,new C.eIF(r,p),q,q,q,q,q,A.ch)],x.p),A.l,q,A.e,A.O,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.H7,A.n3,q,q,q)},
cwX(d){switch(d.a){case 6:return X.HV
case 7:return A.HS
case 8:return O.Hs
case 4:return A.zC
default:return A.kX}},
bUn(d,e){var w=null,v=B.K(e?A.aT:A.cx,A.r,1),u=B.l(8),t=B.aI(w,w,w,w,D.asA,w,w,w,new C.eF3(this,d),w,w,w,w,w,A.ch),s=A.j.M(d.w)
return B.r(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bq,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.asr,w,w,w,new C.eF4(this,d),w,w,w,w,w,A.ch)],x.p),A.l,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uL,A.n3,w,w,w)},
c4o(d){var w=null
return B.CF(B.E8(B.X(A7.a2H,d?A.ab:A.bx,w,w,w,16),w,w,D.fWX,w,w,w),w,w,new C.eFB(),A.J,this.gbFr(),A.cq,"Slide layout",x.fO)},
m0(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.cd,s=B.K(g?A.dr:A.bj,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dn:A.bn,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.r(w,D.Q3,A.f,w,w,D.Fv,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fn,B.aH(!1,A.a3,!0,w,B.aN(!1,v,!0,B.eB(new B.D(A.hk,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cR,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.bx,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.O,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.m0(d,e,f,g,!1)},
b8V(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hS(t,new C.eIQ(u,s,e,d),s.r.length,A.cq,t,w,new C.eIR(e),!1)
s=d?A.as:A.cd
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cq,B.IL(E.asP,new C.eIS(u),B.o3(t,A.bn,t,t,t,t,t,t,t,t,t,t,E.aUm,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.r(t,B.x(w,A.l,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJg(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oX?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bL(A.b0,v,v,new B.fH(w,B.az(v,B.co(new C.eEk(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eEl(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJi(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kP(a9.w))===!0,b1=b0&&C.fSh(b3),b2=b0&&b3.b===D.ls&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6N(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6M(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c6:A.bn
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hhE(b3))o=a8
else if(p&&!a7.ky())o=a7.gcfm()
else o=a7.ky()?a8:new C.eE8(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c3:A.iS
i=w&&C.hhE(b3)&&a7.Au()?new C.eE9(a7,b3):a8
h=v&&b3.b===D.d1?new C.eEa(a7,b3):a8
g=u?new C.eEb(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c2:r
else e=A.L
e=B.K(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c2.j(0.08)
else a0=b3.b===D.ls?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c2.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Au()
a3=b3.b===D.d1
a4=a3?a7.XB(b3):a8
a5=a3?a7.avD(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eEc(a7,b3):a8
a3=v&&a3?new C.eEd(a7,b3):a8
a6=C.b3L(q,a4,a1,b3,a5,a2,a3,new C.eEe(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.r(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ap(-4,B.az(a8,B.r(a8,D.bYh,A.f,a8,a8,new B.o(r,a8,B.K(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEf(a7,b3,b4,b5),a8,a8,new C.eEg(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.az(a8,B.r(a8,D.bZ_,A.f,a8,a8,new B.o(A.cW,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1T(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.az(a8,B.r(a8,D.c_F,A.f,a8,a8,new B.o(A.c2,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEh(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d1)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.az(a8,B.r(a8,D.h55,A.f,a8,a8,new B.o(A.bn,a8,a8,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lk,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEi(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.az(j,B.eI(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bo("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSi(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bn.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.K(e?A.bn:A.by,A.r,1)
if(e)t=A.bn
else t=f?A.aF:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.u(t,B.a([A.dg,B.r(r,D.Q3,A.f,r,r,D.Fv,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.r(r,B.A(t,A.l,r,A.e,A.O,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.hi,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bLf(d,e,f,g){return this.aSi(d,e,f,g,!1)},
cf6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aS
t=f?A.xY:l
if(f)s=new B.bG(new B.ay(e?A.by:A.bj,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tD,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ab:A.bx,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b1,m.b3Y(e,new C.eGc(m))],q),A.l,l,A.e,A.i,0,l,l)
o=B.m(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bW:A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.r(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(10),A.dv),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eGd(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVS(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kd()
if(a2==null)return A.bM
w=new C.eFh(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.D(1-a2.c,0.06,1)
t=A.j.D(1-a2.d,0.06,1)
s=A.j.D(1-a2.e,0.01,1)
r=A.j.D(1-a2.f,0.01,1)
q=a5?A.e1:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b1,a0.b3Y(a3,a0.gbPP())],p),A.l,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fRL,B.E(B.l0(a1,a1,a1,u,0.05,new C.eFi(w,a2),A.j.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.h3t,B.E(B.l0(a1,a1,a1,t,0.05,new C.eFj(w,a2),A.j.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.d1
if(m)o.push(B.A(B.a([D.fLf,B.E(B.l0(a1,a1,a1,96,10,new C.eFk(w,a2),A.j.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
l=n===D.lV
if(l||n===D.ls||n===D.U0)A.d.u(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fXL,B.E(B.l0(a1,a1,a1,s,0,new C.eFl(w,a2),A.j.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h4N,B.E(B.l0(a1,a1,a1,r,0,new C.eFm(w,a2),A.j.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dy[j]
i.a=null
g=h.a
i.a=g
k.push(B.jy(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pZ,a1,a1,a1),a1,new C.eFn(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ds[j]
f.a=null
g=e.a
f.a=g
h.push(B.jy(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pZ,a1,a1,a1),a1,new C.eFo(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.u(o,B.a([A.T,l,A.am,k,A.T,i,A.am,B.bX(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.T)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eFp(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.u(o,B.a([m,A.am,B.bX(A.bH,l,A.bt,a1,6,6),A.ae,B.hua(new C.eFq(w,a2),D.cCQ,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.fj){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eFr(w,a2),m),m.k("ak.E"))
A.d.u(o,B.a([n,B.bX(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.ae)
o.push(B.dh(D.c_r,a1,D.fZR,new C.eFs(a0,a5),B.bp(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cm(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cm:A.c
p=a4?A.xY:a1
if(a4)o=new B.bG(new B.ay(a3?A.by:A.bj,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.r(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tD,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Cq,a1,a1,a1)},
bUE(d){return this.aVS(d,!1,!1,null)},
cee(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c6(q,new C.eFv(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fAo,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bd,B.E(B.x(B.a([w,A.bG,A.cR,s.bEM(D.d6t,d,B.P(v).ax.a===A.H)],u),A.E,r,A.e,A.i,0,A.p),1)],u)
q=x.V
A.d.u(v,B.a([A.af,B.dP(B.h9(B.aH(!1,A.a3,!0,r,B.aN(!1,r,!0,B.eB(D.fiO,r,new B.o(r,r,B.K(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c2.j(0.4),A.ev,8)],q),D.atJ,A.a6),r,r,r),A.cT,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.i,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.H)q=B.a7x(A.bc,20)
else{w=B.l(20)
v=B.a([D.bgq,D.bgT],x.O)
u=B.K(d.j(0.45),A.r,1.2)
q=new B.o(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cz,14)],q),new B.a8(A.aA,A.aD,A.x,v,r,r),A.n)}return B.r(r,t,A.f,r,r,q,r,r,r,r,A.bV,r,r,r)},
asg(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.l(22)
w=A.a.q(f,"Kiapo")
v=B.a7x(w?A.bc:A.aG,22)
w=w?A.bc:A.aG
return B.aH(!1,A.a3,!0,u,B.aN(!1,t,!0,B.eB(B.x(B.a([new B.VN(w,48,e,u,u),A.ae,B.d(f,u,u,u,u,u,u,D.frY,A.K,u,u)],x.p),A.l,u,A.ba,A.i,0,A.p),u,v,u,A.Cy,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}t=this.fy
t===$&&B.c()
return B.c6(t,new C.eD3(this,g,d,e,f),u)},
ahW(d,e){return this.cqZ(d,e)},
cqZ(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eH9(d,q),p,null,!0,!0,x.N),$async$ahW)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahW,v)},
QM(d){var w=d.bT()
return""+B.bM(w)+"/"+B.bV(w)+"/"+B.bD(w)}}
C.agE.prototype={}
C.aB_.prototype={
S(){return new C.bfm(null,null)}}
C.bfm.prototype={
gcDp(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bM(u)+"/"+B.bV(u)+"/"+B.bD(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a4()
w=B.bl(u,A.qB,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bBC,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.by0()},
JG(d){var w=0.12+d*0.09,v=A.j.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hR(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bHm,B.c6(new B.ha(B.a([u,w],x.dS)),new C.daX(this),v),v),v,v,v)}}
C.bfB.prototype={
B(d){var w=null,v=B.l(22),u=B.K(A.aM,A.r,1),t=x.p
return B.as(new B.D(D.bHD,B.aH(!1,A.a3,!0,w,B.r(w,B.bx(B.l(22),B.x(B.a([new B.D(D.bGO,B.x(B.a([B.r(w,D.bZ5,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.h11,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fBH,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e4,D.bAF,B.A(B.a([B.E(B.bP(!1,D.fPU,w,w,!0,w,w,w,new C.dbk(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bN,w,w,w,w,w,A.nI,w,A.p1,w,w,w,w,w,w)),1),B.r(w,w,A.f,A.br,w,w,w,48,w,w,w,w,w,1),B.E(B.bP(!1,D.fVn,w,w,!0,w,w,w,new C.dbl(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nI,w,A.p1,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w)],t),A.l,w,A.e,A.O,0,A.p),A.aq),A.f,w,A9.XV,new B.o(A.as,w,u,v,D.d6R,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KO.prototype={
S(){return new C.bfl()}}
C.bfl.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.l(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.K(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dN,8)],t)
s=m.j(l?0.16:0.14)
r=B.l(9)
q=p.a
r=B.r(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d3(B.az(o,B.uL(B.cT(o,B.A(B.a([r,A.au,new B.di(1,A.cl,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eU:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.ba,A.O,0,o,o),o,o,A.b_,new B.o(n,o,u,v,t,o,A.n),A.eI,o,o,o,o,A.nK,o,o,1/0),A.cw,A.jq,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.daS(p,d),new C.daT(p),new C.daU(p),new C.daV(p),o,o,o,!1,A.a4),k),new B.p(0,(1-k)*16))}}
C.QJ.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.K(A.c.j(0.5),A.r,1.2),p=x.p
return B.aH(!1,A.a3,!0,t,B.aN(!1,s,!0,new B.D(A.eW,B.A(B.a([B.r(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.aA,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nj,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eJ,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0X.prototype={
S(){return new C.aGA(D.ds,null,null)}}
C.aGA.prototype={
gZX(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bBb,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b9o(d){if(!this.a.c.ay)return
this.x=d
this.gZX().iB(0,0)},
Y(){var w,v=this
v.a4()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axQ(D.fpn)
C.inj()
v.Se()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZX().t()
v=w.z
if(v!=null)v.a1(0)
C.axQ(D.fpo)
C.inm()
w.bA8()},
cGf(){B.k_()
this.m(new C.eJP())
var w=this.c.L(x.q).f
w.a61()
if($.bnk)w.T(D.fma)},
Se(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hsn(u,w),1,120)),new C.eJF(v))},
cFT(){var w,v=this
v.m(new C.eJO(v))
if(v.r)v.Se()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXO(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czP(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJG(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lK,new C.eJH(w))},
azK(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eJB(u))
u.Se()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXO()){u.czP()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJC(u,A.o.F(w+1,s)))
u.b9o(w)
u.Se()}},
cpD(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJD(v))
v.Se()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJE(v,w,t))
v.b9o(w)
v.Se()}},
cBk(d){var w,v=this,u=v.e
if(u===D.cu){u=v.d
u===$&&B.c()
return new B.mr(d,new B.bo(u,x.ac))}w=v.cBl(u)
u=v.d
u===$&&B.c()
return B.oB(new B.mr(d,new B.bo(u,x.ac)),w,new C.eJM(),A.b_,A.b_,new C.eJN(v))},
cBl(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bBy
case 16:return A.iQ
case 18:return A.n_
default:return A.md}},
cBj(d,e,f){var w,v,u,t=null,s=B.cG(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jL(e,new B.bg(s,new B.bs(A.tE,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 3:w=x.K
return B.jL(e,new B.bg(s,new B.bs(A.Ue,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jL(e,new B.bg(s,new B.bs(A.hr,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 5:w=x.K
return B.jL(e,new B.bg(s,new B.bs(A.tC,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ij(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.bs(0.82,1,w),w.k("bg<bQ.T>")))
case 7:w=x.b
return B.ij(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.bs(1.18,1,w),w.k("bg<bQ.T>")))
case 8:return B.c6(s,new C.eJI(s),e)
case 9:return B.c6(s,new C.eJJ(s),e)
case 10:return B.c6(s,new C.eJK(s),e)
case 11:return B.c6(s,new C.eJL(s),e)
case 12:w=x.b
return new B.d2(s,!1,B.ij(A.A,e,t,new B.bg(s,new B.bs(1.03,1,w),w.k("bg<bQ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jo(B.jL(e,new B.bg(s,new B.bs(A.tE,A.J,v),v.k("bg<bQ.T>")),t,!0),A.t,new C.buB(w,t))
case 15:w=x.K
return B.jL(e,new B.bg(s,new B.bs(A.Ue,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 19:w=B.dr()
w.n2((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fB(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eI(A.A,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jo(new C.aq6(B.c6(n.gZX(),new C.eJQ(n,v,w),m),m),A.t,m)}else{t=B.r4(new C.JL(w,!0,!1,m))
l=B.b0(w.e)
u=n.cBk(B.ea(B.jo(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.r(m,B.A(B.a([B.d(n.r?"Auto "+C.hsn(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p7,m,m,m),A.bo,D.c0y],k),A.l,m,A.e,A.O,0,m,m),A.f,m,m,new B.o(A.b6,m,m,l,m,m,A.n),m,m,m,m,A.hj,m,m,m)
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
l.push(B.bS(0,new C.Ou(new C.Fp(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oX?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jo(B.v4(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bnk){r=B.IL(A.lo,new C.eJR(d),B.o3(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.af,B.IL(B.X(n.r?Am.v3:A.hn,m,m,m,m,m),n.gcFS(),B.o3(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ap(16,B.bm(!0,B.r(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h4,m,m,m),A.f,m,m,new B.o(A.b6,m,m,r,m,m,A.n),m,m,m,m,A.hj,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.u(l,k)}l.push(B.ap(m,B.bm(!0,B.az(A.c3,B.r(A.lz,$.bnk?A.bM:s,A.f,m,m,m,m,64,m,m,D.bCh,m,m,150),A.y,!1,m,n.gcGe(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJS(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KU.prototype={
B(d){var w=null
return B.r(w,B.bm(!0,new B.D(E.and,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8O,w,w,w,w,w,w,w,w)}}
C.buB.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bkl.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b5z
break
default:w=B.l(6)
break}v=s.e
u=B.K(v?A.aB:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.r(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.x4,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b_,new B.o(s.f,r,u,w,r,r,A.n),A.h7,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bkk.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dEX.h(0,p)
if(o==null)o=D.dqj
p=p==="none"
w=p?q:new B.a8(A.a7,A.aa,A.x,o,q,q)
p=p?A.cB.j(0.25):q
v=r.e
u=v?B.K(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.arM:q
w=B.r(q,B.r(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eC,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMq.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aOs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAp.prototype={}
C.aOt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3O.prototype={}
C.Xm.prototype={
S(){return new C.aGy()},
bka(d){return this.e.$1(d)}}
C.aGy.prototype={
gb7C(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabO(){var w,v
if(this.d==="all")return B.br(this.a.d,!0,x.I)
w=this.gb7C()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQS(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7C()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8U(){return A.d.cF(this.gabO(),0,new C.eJl())},
Y(){var w,v=this
v.a4()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RQ()},
RQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4p(s.c,s.f),$async$RQ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eJh(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RQ,v)},
JI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabO()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.I)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fVC(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pA(o,q.c,q.f),$async$JI)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ed(new C.eJk(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JI)
case 4:q=t.a
w=5
return B.b(B.pz(q.c,q.f),$async$JI)
case 5:w=6
return B.b(t.RQ(),$async$JI)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JI,v)},
Sc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Sc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hC(o,D.eiz,!0,"NgmySlidesTransferScan",x.N),$async$Sc)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eJi(t))
w=4
return B.b(C.aiM(s),$async$Sc)
case 4:r=e
t.m(new C.eJj(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fkZ)
w=1
break}w=5
return B.b(t.a.bka(r),$async$Sc)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Sc,v)},
JH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabO()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pA(s,r.c,r.f),$async$JH)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fVR(null,A.d.gH(n),s,t.a.f)}else q=C.fVR(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hk(q,"ngmy_slides_"+p,!1),$async$JH)
case 4:o=e
s=t.a
w=5
return B.b(B.pz(s.c,s.f),$async$JH)
case 5:w=6
return B.b(t.RQ(),$async$JH)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JH,v)},
a3Z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eJm(t))
w=3
return B.b(C.bFK(),$async$a3Z)
case 3:s=e
t.m(new C.eJn(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bka(s),$async$a3Z)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3Z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.bB:A.cd,k=o.gabO().length!==0,j=B.ap(n,B.r(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bY(A.A,0.5,A.x,n,0,B.a([A.bn.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cC,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eJq(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tO],h),A.l,n,A.e,A.i,0,n,n)
w=B.l(24)
v=B.a([new B.ab(0,A.G,A.bn.j(0.35),A.eR,24)],x.V)
u=B.ap(n,B.X(A.qN,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.r(n,D.c16,A.f,n,n,new B.o(t,n,B.K(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bMx],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.h9(B.az(A.c3,D.fiR,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gckj(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.r(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a4v,A.n),n,n,n,n,E.a1b,n,n,1/0),A.e4,o.azL(m,"What to transfer"),A.ae,B.A(B.a([B.E(o.b_g(A.qS,m,new C.eJr(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_g(D.bRs,m,new C.eJs(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.dc,o.azL(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.l(16)
s=B.K(m?A.by:A.bj,A.r,1)
v.push(B.r(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aF:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bS,n,n,n))}else A.d.u(v,new B.N(u,new C.eJt(o,m),B.U(u).k("N<1,v>")))
A.d.u(w,v)}w.push(A.nh)
w.push(o.azL(m,"Transfer options"))
w.push(A.ae)
w.push(B.A(B.a([B.E(o.asi(A.aG,k,!0,A.jN,m,o.r,o.gcei(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOT(A.jl,!0,A.ju,m,o.gcww(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.A(B.a([B.E(o.bDf(A.aV,k,A.hP,m,o.r,o.gcef(),"Download .json","Backup file"),1),A.au,B.E(o.aOT(A.at,!0,AB.zB,m,o.gcIM(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.i,0,n,n))
if(k){v=A.bn.j(m?0.12:0.08)
u=B.l(16)
t=B.K(A.bn.j(0.28),A.r,1)
s=B.X(A.lR,A.bn.j(0.9),n,n,n,18)
r=o.gaQS()
q=o.gb8U()
p=o.gb8U()===1?"":"s"
A.d.u(w,B.a([A.bz,B.r(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ab:A.bx,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bI,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.OA,i,n),B.E(B.cm(w,n,n,D.bFV,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.r(n,V.Yg,A.f,A.dZ,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
ah6(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.iud(s,t.d,t.e),$async$ah6)
case 2:return B.h(null,v)}})
return B.i($async$ah6,v)},
azL(d,e){var w=null,v=B.r(w,w,A.f,w,w,new B.o(A.bn,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.af,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aF:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
b_g(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.as:A.c
if(g)w=A.bn
else w=e?A.by:A.bj
w=B.K(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bn.j(0.2),A.cz,14)],x.V):s
u=A.bn.j(g?0.2:0.1)
t=B.l(12)
t=B.r(s,B.X(d,A.bn,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cq,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aH(!1,A.a3,!0,s,B.aN(!1,r,!0,B.eB(new B.D(A.bI,B.x(B.a([t,A.W,u,A.bG,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aF:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNX(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.as:A.c,m=B.l(16)
if(p)w=A.bn
else w=e?A.by:A.bj
w=B.K(w,A.r,p?2:1)
v=B.r(q,D.c1l,A.f,q,q,new B.o(q,q,q,B.l(12),q,new B.a8(A.a7,A.aa,A.x,B.a([A.bn,A.bn.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aF:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ee:A.pw
if(p)r=A.bn
else r=e?A.aT:A.dx
return new B.D(A.cy,B.aH(!1,A.a3,!0,q,B.aN(!1,o,!0,B.r(q,B.A(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bI,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eJg(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asi(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.by:A.bj
w=B.K(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.r(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.t5,s,s,s)],t)
if(i)u.push(B.ap(s,B.r(s,D.asl,A.f,s,s,D.b8A,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aH(!1,A.a3,!0,s,B.aN(!1,p,!0,B.eB(new B.D(E.a0Q,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.ae,v,A.bG,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aF:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOT(d,e,f,g,h,i,j){return this.asi(d,e,!1,f,g,!1,h,i,j)},
bDf(d,e,f,g,h,i,j,k){return this.asi(d,e,!1,f,g,h,i,j,k)}}
C.Xn.prototype={
S(){return new C.bnj()}}
C.bnj.prototype={
Y(){this.a4()
this.afT()},
afT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fVR(null,A.d.gH(m),k,r.a.f):C.fVR(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kP(A.d.gH(n).w))C.fVC(A.d.gH(r.a.d),D.do3)
n=r.a
m=n.c
n=C.iqN(n.d)
w=7
return B.b(C.fVQ(p,C.iqS(r.a.d),n,m,q),$async$afT)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eJu(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJv(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.H,h=i?A.bB:A.cd,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eJw())
v=B.aI(j,j,j,j,B.X(A.eM,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eJx(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tO],u),A.l,j,A.e,A.i,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dq,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.r(j,B.x(B.a([r,A.T,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a4v,A.n),j,j,j,j,E.a1b,j,j,1/0)
q=B.l(24)
s=B.K(A.aG.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.VD,A.K,j,j))
else if(k.d==null)r.push(D.ev7)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ab(0,A.G,A.aB.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.u(p,B.a([D.fQq,A.am,B.az(j,B.r(j,B.A(B.a([D.c2X,A.au,B.d(m,j,j,j,j,j,j,D.fC6,j,j,j)],u),A.l,j,A.e,A.O,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c7V,A.n),j,j,j,j,Z.amZ,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eJy(k,d),j,j,j,j,j,j,!1,A.a4),A.T,D.fUU,A.aC],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.K(A.by,A.r,1)
l=k.d
l.toString
p.push(B.r(j,B.qf(j,j,!1,l,j,!0,!0,j,!1,D.bwJ),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cq,j,j,j))
A.d.u(r,p)}r.push(A.aC)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ht,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.OA,v,j),B.E(B.cb(B.x(B.a([t,A.aO,B.r(j,B.x(r,A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c9V,A.n),j,j,j,j,A.uK,j,j,1/0)],u),A.l,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.ani,j,j,A.ah),1)],u),A.l,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGv.prototype={
S(){return new C.aGw(new B.au(A.ax,$.ax()),B.kc(!0,null,!0,!0,null,null,!1))}}
C.aGw.prototype={
Y(){var w=this
w.a4()
w.e.aW(0,new C.eCY(w))
$.aU.x1$.push(new C.eCZ(w))},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.e.t()
this.a3()},
b23(){var w,v=this.c
v.toString
w=C.zi(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eT,x.w).w,i=B.l(28),h=B.K(A.bn.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bn.j(0.28),A.vy,36),D.afi],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.r(k,B.x(B.a([B.r(k,D.bZ9,A.f,k,k,new B.o(d,k,B.K(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fNp,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.i,0,A.p),A.f,k,k,D.b90,k,k,k,k,A.wC,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.a_
o=new B.aO(14,14)
if(q)n=A.bn
else n=r?A.bn.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bn.j(0.28),A.J,12)],g):k
t.push(new B.bz(1,A.bb,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fvg,k,k,k),k,k,A.b_,new B.o(s,k,new B.bG(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h7,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A0.AP)
A.d.u(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.i,0,k,k),B.bS(0,B.d3(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aP(),w,k,k,k,k,k,2,D.c5N,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uZ(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C9(5,k),new C.bxT()],x.aS),k,k,A.aVB,k,5,k,1,k,k,!1,"\u2022",k,new C.eCU(l),k,new C.eCV(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mz,k,k,k,k),0),0,0,0)],a1)
d=C.zi(w.a.a.toUpperCase())==null?k:l.gcej()
return B.as(new B.D(new B.R(24,24,24,24+j.f.d),B.aH(!1,A.a3,!0,k,new B.cN(Af.M5,B.r(k,B.bx(e,B.x(B.a([a0,new B.D(D.bGr,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.W,D.fLH,A.bz,new B.a5(1/0,50,B.bJ(D.h1W,k,d,B.bp(A.bn,A.br,A.an,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.am,B.bP(!1,A.o5,k,k,!0,k,k,k,new C.eCW(a2),k,B.fs(k,k,k,k,k,k,k,k,k,k,k,A.bN,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.i,0,A.p),k)],a1),A.l,k,A.e,A.O,0,A.p),A.aq),A.f,k,k,new B.o(A.bB,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxT.prototype={
p_(d,e){var w=e.a.toUpperCase()
return e.cPk(B.hk(A.bC,w.length),w)}}
C.ata.prototype={
S(){return new C.aGz(B.zZ(A.NS,A.oc,A.vf))}}
C.aGz.prototype={
t(){this.d.t()
this.a3()},
b22(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j3(w,d)},
abJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h3Y(s),$async$abJ)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b22("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abJ,v)},
ceh(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=C.iqQ(w[u])
if(t!=null){this.b22(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.x_,s,s,s,t.gbSm(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eR(B.a([r,B.aI(s,s,s,s,B.X(q?A.uV:An.PA,s,s,s,s,s),s,s,s,new C.eJA(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bB,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h38,s,s,s,1,s,!0)
r=B.zY(t.d,A.c0,t.gceg())
w=B.l(28)
w=B.as(B.r(s,s,A.f,s,s,new B.o(s,s,B.K(A.bn,A.r,3),w,B.a([new B.ab(2,A.G,A.bn.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.r(s,D.fRw,A.f,s,s,new B.o(v,s,B.K(A.bn.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jr,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.by6.prototype={
B(d){var w=null,v=B.l(24),u=B.K(A.aM,A.r,1)
return B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([B.r(w,H.as0,A.f,w,w,D.b8K,w,56,w,w,w,w,w,56),A.aO,D.h2Q,A.am,new B.k6(this.c,new C.fkw(),w,w,x.cI),A.aO,new B.k6(this.d,new C.fkx(),w,w,x.cl),A.ae,D.h2O],x.p),A.l,w,A.e,A.O,0,A.p),A.f,w,Af.M5,new B.o(A.as,w,u,v,w,w,A.n),w,w,w,K.a1i,D.bH4,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a99.prototype={
S(){return new C.bn2(A.bF)},
gd1(){return this.c}}
C.bn2.prototype={
Y(){var w=this
w.a4()
if(w.a.d)return
w.a0f()
w.d=B.dg(A.fN,new C.erd(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a0f(){return this.csS()},
csS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0f=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.erb(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cm0(p.c),$async$a0f)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.erc(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0f,v)},
bUv(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.v(w),2,"0")+"m "+A.a.b_(A.o.v(v),2,"0")+"s left"
return A.a.b_(A.o.v(w),2,"0")+":"+A.a.b_(A.o.v(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c2
w=v.j(0.14)
u=B.l(14)
t=B.K(v.j(0.55),A.r,1)
return B.r(r,B.A(B.a([B.X(A.Hq,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUv(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A2.am3,A.hM,r,r,1/0)}}
C.aa2.prototype={
nx(){var w,v,u,t=this
t.y_()
w=t.cx
v=t.c
w.buv(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.ql(B.J(["/S",D.eyR,"/URI",new B.t2(B.XZ(w.as),A.vB,!0)],x.N,u),u))}}
C.aa3.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5t.prototype={
bCe(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.ex9],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSO(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.kb(w,new C.cpV(),B.a4(w).k("kb<ci.E,H>")).f1(0,new C.cpW())},
aFh(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hi(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u2(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jt(d.a,d.b))
s.n(0,"/Border",B.u2(H.au5))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h7(t.gcSO()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.ql(w,x.Y))}}
C.cpX.prototype={}
C.a4m.prototype={}
C.ajJ.prototype={}
C.aTF.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lC(d)
q.MH(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjv(w)
u=x.N
t=x.Y
s=new C.cpX(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bCe(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.ql(B.J(["/Type",D.eyP],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.aa2(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.ayP.prototype={}
C.aV6.prototype={
fV(d){var w,v,u,t,s=this
s.lC(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ek(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LQ(t)
u.Tt(0)
u.po(0,v)
w.fV(d)
u.nA(0)}}}
var z=a.updateTypes(["aB<~>()","~(m4)","Q(hT)","~()","Q(eS)","Q(oP)","Q(m4)","~(hT)","Q(eS,eS)","KU(Z)","Q(oc)","Q(lx)","aB<Q>()","H(H,hT)","ai<Ah>()","n(oc)","Q(a9q)","n(m4)","n(wB)","Q(Fy)","H(hT,hT)","a9<n,@>(hT)","n(eS)","v(eS)","cK(eS)","v(hI)","~(hI)","eS(n,G,G,G,G,G{align:qq,anim:hI,bullets:Q,color:H?,delay:H,fx:n,key:n,style:IE,weight:o0})","eS(n,G,G,G,G,G,H{align:qq,style:IE,weight:o0})","eS(n,G,H)","~(ai<oP>)","Q(Ah)","Q(n,ai<Ah>)","H(oP,oP)","oc()","a9<n,@>(oP)","a2k(Z)","eS(vk,G,G,G,G,H{fx:n,key:n,rotation:G})","eS(n,G,G,G,G{anim:hI,delay:H,fx:n,key:n})","a_2(Z)","aB<~>(oP)","Q(mS)","a1Q(Z)","a1P(Z)","a_0(Z)","a0d(Z)","eS(vk,G,G,G,G,H,n,n{anim:hI,delay:H,rotation:G,stroke:H,strokeWidth:G})","eS(n,G,G,G,G,G,n,n,H)","eS(G,G,n,H{size:G})","Qy(Z)","lx()","v(rR,G,G)","oP(a9<@,@>)","Fy()","fk(eS)","v(jd)","a_L(Z)","~(Fp)","a05(Z)","H(eS,eS)","eS(eS)","a9<n,@>(eS)","eS(a9<@,@>)","m4(m4)","a9<n,@>(m4)","m4(a9<@,@>)","Q(k2)","k2()","~(va)","n(hT)","V(ai<hT>)","V(hT)","Q(n,hT)","aeL(Z)","~(Q(eS,eS))","ae9(Z,H)","aeO(Z)","u(m4,Q)","agu(Z,H)","aeR(Z)","Xa(Z)","~(mV)","hT(hT)","G(eS)","Xb(Z)","a0X(Z)","hT()","a1j(Z)","aB<~>(ai<hT>)","v(bB<H,hT>)","D(k2)","D(Fy)","aB<~>(hI,~())","v(ai<hI>,hI?,~(hI),u)","ai<FV>()","ai<jI<mV>>(Z)","jI<mV>(mV)","hT(a9<@,@>)","Xm(Z)","Q(mu)","Xn(Z)","v(hT)","~(mm)","JL(Z,m4,v?)","H(aa3)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ag>({paper:n?,photo:dJ?,request:n,template!lA})","aB<a9i>({doc!Ag,history:ai<+(n,n)>,instruction!n,photo:dJ?,template!lA})","ai<hT>(n?)"])
C.cPc.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:62}
C.cPd.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:70}
C.cPe.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galI(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mG(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:70}
C.cPf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bUi.prototype={
$1(d){return J.eF(A.dM.gaU(d),d.byteOffset,d.byteLength)},
$S:1696}
C.fHM.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iY(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iY(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iY(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iY(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1697}
C.c4d.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:29}
C.c4e.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:41}
C.c4g.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fYP.prototype={
$1(d){return new C.a2k(this.a,this.b,C.irI(),null)},
$S:z+36}
C.fiZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fj2.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fj3.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fj4.prototype={
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
C.fj_.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fj0.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fj1.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fiU.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hs,w,w,w)
return B.ej(B.a([B.bP(!1,E.aXK,w,w,!0,w,w,w,new C.fiS(d),w,w),B.bP(!1,D.fOT,w,w,!0,w,w,w,new C.fiT(d),w,w)],x.p),w,w,D.a_y,v,w,w,w,w,D.h3r,w)},
$S:18}
C.fiS.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fiT.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fiV.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fiW.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fj8.prototype={
$0(){var w=this.a
return w.m(new C.fj7(w,this.b))},
$S:0}
C.fj7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fiY.prototype={
$0(){var w=this.a
return w.m(new C.fiX(w,this.b,this.c))},
$S:0}
C.fiX.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fj5.prototype={
$0(){return this.a.a2n(this.b)},
$S:0}
C.fj6.prototype={
$0(){return this.a.PS(0,this.b)},
$S:0}
C.fjb.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fjc.prototype={
$0(){var w=this.a
return w.m(new C.fja(w,this.b))},
$S:0}
C.fja.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.u(0,new B.N(w,new C.fj9(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fj9.prototype={
$1(d){return d.a},
$S:z+69}
C.fqI.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hpv(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cF)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.oP(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+52}
C.fqJ.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fKZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.I)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbt())q=n===o.gbt()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+30}
C.fKX.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fKY.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+33}
C.fYh.prototype={
$1(d){return d.aj()},
$S:z+35}
C.fHq.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fZa.prototype={
$1(d){return new C.a_2(this.a,null)},
$S:z+39}
C.cQz.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+41}
C.cQB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQE.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQD())},
$S:11}
C.cQD.prototype={
$0(){},
$S:0}
C.cQG.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3k(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bj(s,new C.cQC(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiV(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:316}
C.cQC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQH.prototype={
$1(d){},
$S:31}
C.cQA.prototype={
$1(d){return new C.a_0(this.b,this.a.gcCL(),null)},
$S:z+44}
C.cQI.prototype={
$1(d){return D.hx5},
$S:z+49}
C.cQv.prototype={
$1(d){var w=null,v=B.l(24),u=B.K(D.a_4,A.r,1),t=x.p
return B.as(B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([new B.D(D.bGR,B.x(B.a([B.r(w,D.bWg,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fNQ,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fAZ,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e4,new B.D(A.qG,B.A(B.a([B.E(B.dV(D.fUW,new C.cQt(d),B.dj(w,w,w,w,w,w,w,w,w,E.nC,w,w,A.cp,w,new B.b9(B.l(14),A.a1),D.b60,w,w,w,w)),1),A.au,B.E(B.bJ(D.h0a,w,new C.cQu(d),B.bp(A.bD,w,w,w,w,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w),w)],t),A.l,w,A.e,A.O,0,A.p),A.f,w,A.w1,new B.o(D.ah6,w,u,v,D.dbL,w,A.n),w,w,w,K.a1i,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1698}
C.cQt.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cQu.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cQw.prototype={
$0(){return J.nU(this.a.d,new C.cQs(this.b))},
$S:0}
C.cQs.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQr.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.K(D.a_4,A.r,1),q=x.p
q=B.a([B.A(B.a([B.r(t,D.c0p,A.f,t,t,new B.o(t,t,t,B.l(14),t,D.atE,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aXp,t,t,t),A.bG,D.h05],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.l,t,A.e,A.i,0,t,t),A.aC],q)
for(w=0;w<2;++w){v={}
u=D.dzW[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azM(u[1],u[2],u[3],new C.cQp(v,d),!1,t))}q.push(A.am)
q.push(D.bAI)
q.push(A.am)
q.push(new C.azM(A.ek,"Delete book","Remove it from this device",new C.cQq(d),!0,t))
return B.bm(!0,B.r(t,B.x(q,A.E,t,A.e,A.O,0,A.p),A.f,t,t,new B.o(D.ah6,t,r,s,t,t,A.n),t,t,t,A.uG,A.GZ,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cQp.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cQq.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cQy.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aMC,12)],x.V)
return B.dP(B.eI(A.A,e,B.r(w,B.bx(B.l(4),new B.a5(62,95.81818181818181,new B.dE(A.dD,A.A,A.f,F.apS(d),w),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.p(f,0))},
$S:z+51}
C.cQx.prototype={
$0(){return this.a.c8o()},
$S:0}
C.cQo.prototype={
$0(){return this.a.b0s(0,this.b)},
$S:0}
C.cQn.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQm.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQJ.prototype={
$2(d,e){var w=this.a
return w.bGQ(J.t(w.d,e))},
$S:43}
C.cPQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bq()},
$S:0}
C.cPP.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3C("Page "+(v.length+1),"",""))},
$S:0}
C.cPS.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cQ_.prototype={
$0(){},
$S:0}
C.cQ0.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:7}
C.cPT.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cV.gcu().aO(this.c)},
$S:0}
C.cPR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPV.prototype={
$0(){return this.a.Rm(this.b)},
$S:0}
C.cPW.prototype={
$0(){return this.a.Rm(this.b)},
$S:0}
C.cPX.prototype={
$0(){var w=this.a
w.m(new C.cPU(this.b))
w.EE()},
$S:0}
C.cPU.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPY(w,d))
w.EE()},
$S:z+68}
C.cPY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQ5.prototype={
$2(d,e){if(d)this.a.Bq()},
$S:129}
C.cQ1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bq(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fnB)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cQ2.prototype={
$0(){return this.a.b_n(this.b,-1)},
$S:0}
C.cQ3.prototype={
$0(){return this.a.b_n(this.b,1)},
$S:0}
C.cQ4.prototype={
$0(){return this.a.c9L(0,this.b)},
$S:0}
C.fPy.prototype={
$1(d){return C.hzI()},
$S:45}
C.fPz.prototype={
$1(d){return null},
$S:31}
C.fv3.prototype={
$1(d){return null},
$S:31}
C.fQx.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:289}
C.fQw.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:223}
C.fQD.prototype={
$1(d){var w=this.a
return C.hhv(d)===w||C.hED(d)===w},
$S:z+4}
C.fu5.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.cg5.prototype={
$1(d){return d.length!==0},
$S:3}
C.cg6.prototype={
$2(d,e){return C.hXe(d,e)},
$S:z+72}
C.cg8.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bh(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bh(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1699}
C.fPw.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fPx.prototype={
$1(d){return C.fSh(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fKl.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fVy,A.T,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,D.fPw,new C.fKj(d),B.bp(A.c2,w,w,w,A.w,w,A.cp,w,w,w,w,w)),A.W,B.ep(A.v9,D.fWQ,new C.fKk(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,R.xZ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKj.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKk.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKm.prototype={
$1(d){var w=null
return B.ej(B.a([B.bP(!1,D.fLx,w,w,!0,w,w,w,new C.fKh(d),w,w),B.bJ(D.h2u,w,new C.fKi(d),w)],x.p),w,w,w,D.h4q,w,w,w,w,D.fLq,w)},
$S:18}
C.fKh.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fKi.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.emu.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ems.prototype={
$0(){return this.a.e=!0},
$S:0}
C.emt.prototype={
$0(){return this.a.f=!0},
$S:0}
C.emv.prototype={
$0(){return this.a.r=!1},
$S:0}
C.emw.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fQC.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.fQy.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a7,w,w,B.BZ(A.A,B.r(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1700}
C.fQA.prototype={
$1(d){var w=null,v=B.l(3)
return B.r(A.A,B.d(d,w,w,w,w,w,w,D.fCm,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:136}
C.fQB.prototype={
$1$size(d){var w=null
return B.A(B.a([B.r(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.r(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.p(-d*0.38,0))],x.p),A.l,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1701}
C.fQz.prototype={
$2$female$size(d,e){var w=null,v=d?D.ajn:this.a,u=B.K(A.iy,A.r,1),t=e*0.32,s=B.ap(w,B.r(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.r(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.r(w,w,A.f,w,w,new B.o(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.aho,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1702}
C.h1K.prototype={
$1(d){return new C.aeL(this.a,this.b,null)},
$S:z+73}
C.e8P.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bxk:A.Nk,q=B.K(D.jE.j(0.25),A.r,1),p=B.as(B.r(t,t,A.f,t,t,new B.o(A.c2.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.r(t,D.ask,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.jE.j(0.35),A.ev,10)],x.V),D.caz,A.n),t,t,t,t,A.yL,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.r(t,B.x(B.a([new B.D(Q.a17,B.x(B.a([p,A.aC,B.A(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jE,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fBw,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.l,t,A.e,A.i,0,t,t)],u),A.l,t,A.e,A.i,0,A.p),t),B.E(B.is(!0,t,e,A.y,D.aUF,new C.e8O(w,this.c),v,D.amT,t,A.ah,!1),1)],u),A.l,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mI,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:117}
C.e8O.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae9(w,new C.e8N(this.b,w),null)},
$S:z+75}
C.e8N.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fKp.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fKq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fZa,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKn(d),B.bp(D.jE,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.W,B.ep(A.oO,D.We,new C.fKo(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,R.xZ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKn.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKo.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKt.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fKu.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fMA,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKr(d),B.bp(D.jE,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.W,B.ep(A.oO,D.We,new C.fKs(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,R.xZ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKr.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKs.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKx.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fKy.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fTi,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKv(d),B.bp(D.jE,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.W,B.ep(A.oO,D.We,new C.fKw(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,R.xZ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKv.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKw.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h3h.prototype={
$1(d){return D.hCd},
$S:z+76}
C.erg.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bnF:A.Nk,s=B.K(A.aE.j(0.25),A.r,1),r=B.as(B.r(v,v,A.f,v,v,new B.o(A.aE.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.r(v,D.c2T,A.f,v,v,new B.o(v,v,B.K(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c2.j(0.35),A.ev,10)],x.V),D.atJ,A.n),v,v,v,v,A.yL,v,v,v)
w=x.p
return B.r(v,B.x(B.a([new B.D(Q.a17,B.x(B.a([r,A.aC,B.A(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:S.Ng,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fyT,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.l,v,A.e,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),v),B.E(B.is(!0,v,e,A.y,D.aUF,new C.erf(this.b),19,D.amT,v,A.ah,!1),1)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mI,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.erf.prototype={
$2(d,e){var w=D.SW[e]
return new C.agu(w,new C.ere(this.a,w),null)},
$S:z+78}
C.ere.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fSl.prototype={
$0(){return B.hgl(C.ieS(this.a))},
$S:279}
C.fSk.prototype={
$0(){var w=C.hhO(this.a)
return"data:image/png;base64,"+A.cV.gcu().aO(w)},
$S:22}
C.fsm.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ju(d,e),new B.ju(w,e+v),new B.ju(d+f*14,e),new B.ju(w,e-v)],x.J)
B.a3f(this.a,C.fJ(4291404327),v)},
$S:678}
C.h3s.prototype={
$1(d){return new C.Xa(this.a,null)},
$S:z+80}
C.eud.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euc())},
$S:28}
C.euc.prototype={
$0(){},
$S:0}
C.eue.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eub(w,d))},
$S:1704}
C.eub.prototype={
$0(){return this.a.x=J.eQ(A.dM.gaU(this.b))},
$S:0}
C.euf.prototype={
$1(d){},
$S:31}
C.etQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etX.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etY.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eJz)},
$S:0}
C.etZ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etS.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cg)},
$S:0}
C.etT.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.etU.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etV.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etW.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iA)}},
$S:7}
C.etR.prototype={
$0(){var w=this.a,v=w.z,u=C.fT3(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOt(C.fT3(t))},
$S:0}
C.etO.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.etP.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eu4.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.eu5.prototype={
$0(){var w=this.a
return w.m(new C.eu3(w))},
$S:0}
C.eu3.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eu6.prototype={
$0(){var w=this.a
return w.m(new C.eu2(w,this.b))},
$S:0}
C.eu2.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.eu7.prototype={
$1(d){var w=this.a
return w.m(new C.eu1(w))},
$S:9}
C.eu1.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eu8.prototype={
$1(d){var w=this.a
return w.m(new C.eu0(w))},
$S:9}
C.eu0.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eu9.prototype={
$0(){var w=this.a
return w.m(new C.eu_(w,this.b))},
$S:0}
C.eu_.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.eua.prototype={
$1(d){return this.a.a00()},
$S:2}
C.etN.prototype={
$0(){return this.a.cdz(this.b)},
$S:0}
C.cjT.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:348}
C.cjR.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.cjS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRW.prototype={
boN(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bUh(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.I)(e),++t){s=e[t]
r.cKK($.rm().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mZ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boN(d,e)},
$S:1705}
C.fQc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQe.prototype={
$1(d){var w=this.a.a
w=A.d.aN(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fQd.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ft(t,A.ct,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.rf,A.bX,t,A.dE,A.bY)
v=this.a
w.o8(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.frV.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.frW(),B.U(w).k("Y<1>")).gJ(0)},
$S:265}
C.frW.prototype={
$1(d){return d.length!==0},
$S:3}
C.frT.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.frU.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.cjU.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCB()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hhu(i,new B.F(!0,h,a6,k,a6,a6,q,A.cZ,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.he0(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aN(n.gclY(),"\n\n")
d=B.ft(a6,A.ct,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afI(k,q,1.28),j),A.rf,A.bX,a6,A.dE,A.bY)
d.o8(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hhu(i,new B.F(!0,h,a6,k,a6,a6,q,A.cZ,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.he0(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afI(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.r(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bb,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.rf,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCA(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.u(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:282}
C.cjV.prototype={
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
n=o.gaCB()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hhu(f,new B.F(!0,e,a5,i,a5,a5,h,A.cZ,A.bs,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.he0(g.length===0?B.a([a6],n):g,l))break}a1=o.afI(i,h,1.28)
a2=new C.cjW(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kx,new B.a5(v,a5,a4.f,a5),A.Kx,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bJf,B.r(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bb,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.rf,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCA(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.u(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.ae,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.l,a5,A.e,A.i,0,A.p)},
$S:149}
C.cjW.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.rf,w,w),w)},
$S:679}
C.h3v.prototype={
$1(d){return new C.Xb(this.a,this.b,null)},
$S:z+84}
C.ev_.prototype={
$1(d){return d.ld()},
$S:1707}
C.ev0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euZ(w,d))},
$S:1708}
C.euZ.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.euN.prototype={
$0(){return this.a.y=!0},
$S:0}
C.euO.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euU.prototype={
$0(){return B.a6(this.a,!1).eA()},
$S:0}
C.euV.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.K(A.bE,A.r,2.5)
return B.az(w,B.r(w,B.b3(w,w,w,new C.beA(u,v.gazD(),w),A.fT),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euS(v),new C.euT(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.euS.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.euT.prototype={
$1(d){var w=this.a
w.m(new C.euP(w,d,this.b,this.c))},
$S:235}
C.euP.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.D(s.x*r.d,1,6)
w=s.gazD()
r=r.a
v=t.c
u=t.d
s.r=A.j.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euW.prototype={
$1(d){var w=this.a
return w.m(new C.euR(w,this.b))},
$S:9}
C.euR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euX.prototype={
$1(d){var w=this.a
return w.m(new C.euQ(w,d))},
$S:6}
C.euQ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euY.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h3L.prototype={
$1(d){return D.hF0},
$S:z+87}
C.f49.prototype={
$1(d){return this.a.ZA()},
$S:7}
C.f31.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cV.gcu().aO(v)},
$S:0}
C.f3p.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f3z.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f2L.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2M.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2J.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2K.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f3i.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f3j(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jo(B.r4(q>0.2?F.bXI(r,new B.Ev(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jo(B.d3(B.r4(F.bXI(s.$1(!0),new B.Ev(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.ea(v,B.b0(s).j(t.b6),!0))
s=t.bg
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bg
w.toString
q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b3p,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi,v,v))}s=t.aL
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b38,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi,v,v))
s=t.aR
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.a8(A.b0,A.b7,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.dah,v),A.n),A.bi,v,v))
if(t.aH>0){s=t.k1
q.push(B.ap(v,new B.bN(new B.o(v,v,v,v,v,new B.a8(A.b0,A.b7,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.dmj,v),A.n),A.bi,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.ea(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dj4,v),A.n),A.bi,v,v))
t=t.aG
if(t>0)q.push(B.b3(v,v,v,new C.bib(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:67}
C.f3j.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fU(r.b,A.A,q,q,A.ck,A.c0,!0,q,!1,q,q),o=r.a,n=o.aZZ(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bm
v=o.aQ
u=v-1
t=o.bH
s=o.c5?-1:1
return B.dP(B.e2(A.A,B.eI(A.A,l,B.fB(A.A,new B.BL(new B.uU(q,q,n,A.ya),p,q),q,B.wo(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.p(-m*r.d*u/2,-t*r.c*u/2))},
$S:493}
C.f3v.prototype={
$0(){return this.a.m(new C.f3u(this.b,this.c))},
$S:0}
C.f3u.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3w.prototype={
$1(d){return this.a.m(new C.f3t(this.b,d))},
$S:6}
C.f3t.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3y.prototype={
$0(){return this.a.m(new C.f3x(this.b,this.c))},
$S:0}
C.f3x.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2B.prototype={
$1(d){return d.c===this.a.x},
$S:z+99}
C.f2C.prototype={
$1(d){var w=this.a
return w.m(w.gcE8())},
$S:2}
C.f2D.prototype={
$1(d){return this.a.m(new C.f2A())},
$S:2}
C.f2A.prototype={
$0(){},
$S:0}
C.f2E.prototype={
$0(){var w=this.a
return w.m(new C.f2z(w,this.b))},
$S:0}
C.f2z.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f2G.prototype={
$2(d,e){return A.au},
$S:36}
C.f2F.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.by
q=B.K(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b_,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b7,A.x,r,w,w),A.n),A.h7,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aF,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2y(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.f2y.prototype={
$0(){var w=this.a
return w.m(new C.f2v(w,this.b))},
$S:0}
C.f2v.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f2H.prototype={
$1(d){var w=this.a
return w.m(new C.f2x(w,d))},
$S:9}
C.f2x.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f2I.prototype={
$1(d){var w=this.a
return w.m(new C.f2w(w,d))},
$S:9}
C.f2w.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f3Z.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f45.prototype={
$1(d){var w=this.a
return w.m(new C.f46(w,d))},
$S:30}
C.f46.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f47.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:162}
C.f4_.prototype={
$0(){var w=this.a
return w.m(new C.f3Y(w,this.b))},
$S:0}
C.f3Y.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f40.prototype={
$0(){var w=this.a
return w.m(new C.f3X(w,this.b))},
$S:0}
C.f3X.prototype={
$0(){var w,v=this.b.length,u=J.e5(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.u(0,u)},
$S:0}
C.f41.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f3W(v,w.b,w.c,w.d))},
$S:0}
C.f3W.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.u(0,w)},
$S:0}
C.f42.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gti(v))},
$S:0}
C.f43.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f44.prototype={
$0(){var w=this.a
return w.m(new C.f3V(w))},
$S:0}
C.f3V.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f3I.prototype={
$1(d){return d.a===this.a.dy},
$S:231}
C.f3J.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBW[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aO(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azH(new B.ns(new B.be(n,n,n,n),A.aq,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.a7,A.aa,A.x,m,j,j),A.n),A.bi,new C.b1G(l,B.b0(k==null?v.w.x:k),A.j.D(w,12,26),j),j),j),u,q.b,o===p,new C.f3H(r,v),2,i))}return B.bX(A.bH,h,A.bt,j,7,7)},
$S:178}
C.f3H.prototype={
$0(){var w=this.b
return w.m(new C.f3C(this.a,w))},
$S:0}
C.f3C.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f3K.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:152}
C.f3N.prototype={
$0(){var w=this.a
return w.m(new C.f3G(w))},
$S:0}
C.f3G.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f3O.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f3P.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f3Q.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f3R.prototype={
$0(){var w=this.a
return w.m(new C.f3F(w))},
$S:0}
C.f3F.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f3S.prototype={
$0(){var w=this.a
return w.m(new C.f3E(w))},
$S:0}
C.f3E.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f3T.prototype={
$0(){var w=this.b
return w.m(new C.f3D(this.a,w))},
$S:0}
C.f3D.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f3U.prototype={
$1(d){return this.a.fx=d},
$S:152}
C.f3L.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f3M.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f3m.prototype={
$0(){var w=this.a
return w.m(new C.f3l(w))},
$S:0}
C.f3l.prototype={
$0(){var w=this.a
w.p4=null
w.b6j()},
$S:0}
C.f3n.prototype={
$0(){var w=this.a
return w.m(new C.f3k(w,this.b))},
$S:0}
C.f3k.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f3o.prototype={
$0(){var w=this.a
return w.m(w.gcuv())},
$S:0}
C.f3e.prototype={
$0(){var w=this.a
return w.m(new C.f3d(w))},
$S:0}
C.f3d.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f3f.prototype={
$0(){var w=this.a
return w.m(new C.f3c(w))},
$S:0}
C.f3c.prototype={
$0(){var w=this.a
w.aH=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f3g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.djv[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aO(9,9)
m.push(v.azH(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BL(new B.uU(o,o,v.aZZ(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.ya),B.fU(u,A.A,140,o,A.ck,A.c0,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f3b(v,s),3,n))}return B.bX(A.bH,m,A.bt,o,10,8)},
$S:178}
C.f3b.prototype={
$0(){var w=this.a
return w.m(new C.f3a(w,this.b))},
$S:0}
C.f3a.prototype={
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
C.f2T.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f2U.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f2V.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f2W.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f2X.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f2Y.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f2Z.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f3_.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f30.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f2e.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f2f.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f2g.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f2h.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f2i.prototype={
$0(){var w=this.a
return w.m(new C.f2d(w))},
$S:0}
C.f2d.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f2j.prototype={
$1(d){return this.a.b8=d},
$S:152}
C.f2k.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f2N.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f2O.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f2P.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f2Q.prototype={
$1(d){return this.a.bg=d},
$S:152}
C.f2R.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f2o.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.f2p.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f2q.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f2r.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f2s.prototype={
$0(){var w=this.a
return w.m(new C.f2n(w))},
$S:0}
C.f2n.prototype={
$0(){var w=this.a
return w.c8=A.j.F(w.c8+90+180,360)-180},
$S:0}
C.f2t.prototype={
$0(){var w=this.a
return w.m(new C.f2m(w))},
$S:0}
C.f2m.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f2u.prototype={
$0(){var w=this.a
return w.m(new C.f2l(w))},
$S:0}
C.f2l.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.f3h.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iuT(v,w.p4)},
$S:0}
C.f39.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bxE:B.fU(v,A.A,w,w,A.ck,A.c0,!1,w,!1,w,w)
return C.fQk(d.length===0?"rounded":d,u,e)},
$S:119}
C.f35.prototype={
$0(){var w=this.a
return w.m(new C.f34(w))},
$S:0}
C.f34.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f36.prototype={
$0(){var w=this.b
return w.m(new C.f33(this.a,w))},
$S:0}
C.f33.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f37.prototype={
$0(){var w=this.b
return w.m(new C.f32(this.a,w))},
$S:0}
C.f32.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f38.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.D(w.ay,0,1-d)
w.ch=A.j.D(w.ch,0,0.95)},
$S:6}
C.f3s.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ab(-4,A.G,A.b8.j(0.35),A.J,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cnU(),n.r))
l.push(new C.JL(n.cB3(),!1,!1,t))
o=B.bS(0,B.bx(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.r(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.az(A.c3,new B.bN(new B.o(t,t,B.K(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f3r(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:166}
C.f3r.prototype={
$1(d){var w=this.a
return w.m(new C.f3q(w,d,this.b,this.c))},
$S:19}
C.f3q.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f3B.prototype={
$0(){var w=this.a
return w.m(new C.f3A(w,this.b))},
$S:0}
C.f3A.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f2S.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f48.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1V(),B.E(B.as(w.b4X(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSS(),1),w.aOU()],v),A.l,t,A.e,A.i,0,A.p),1)],v),A.l,t,A.e,A.i,0,t,t)}u=A.j.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1V(),new B.D(A.hL,B.as(s.b4X(u),t,t,t),t),B.E(s.aSS(),1),s.aOU()],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:702}
C.fNB.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ev(k,!1,j,A.aH,"",4280640491,i,l,m,"",h,C.bDE(),null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bs,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,A.U)},
$S:z+28}
C.fNA.prototype={
$3(d,e,f){var w=this,v=C.bDE(),u=w.b?A.I:A.cE,t=w.c?A.cK:A.bs
return C.ev(w.d,!1,f,A.aH,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bm,4280172719,2,d,0,w.f,w.e,D.cu,D.d1,0.82,0.09,w.a)},
$S:z+29}
C.clo.prototype={
$1(d){return B.w(d)},
$S:17}
C.fVr.prototype={
$0(){return this.a},
$S:z+14}
C.fzY.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+31}
C.fzZ.prototype={
$2(d,e){return J.ct(e)},
$S:z+32}
C.fVt.prototype={
$0(){return B.a([],x.o)},
$S:z+14}
C.fVw.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fVx.prototype={
$0(){return A.d.gH(D.x8)},
$S:z+34}
C.fVp.prototype={
$1(d){return d.a},
$S:z+15}
C.fVs.prototype={
$1(d){return d.a},
$S:z+15}
C.fTm.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fTn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fTo.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fNF.prototype={
$0(){return C.cE()},
$S:22}
C.fNI.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cu,s=u?n:0
return C.ev(j,l,v,A.aH,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bm,4280172719,2,d,s,0,"",t,D.d1,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"","",A.bs,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"",j,A.bs,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,j,k,A.bs,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bs,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bs,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.ds,!1,k,l,"",m,A.bs,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,null,0,"",k,A.bs,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,j,k,"",l,A.bs,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,k,0,l,m,A.bs,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,k,l,m,"",n,A.bs,A.a8)},
$S:z+27}
C.fNH.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ev(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+37}
C.fNG.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cu,t=v?j:0
return C.ev(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bs,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bm,4280172719,2,"",t,0,"",u,D.lV,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r4,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+38}
C.fNE.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fQ5.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hAK.c3(0,A.a.i(s.w).toLowerCase(),new C.fQ3(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fQ4(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.brm(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1711}
C.fQ3.prototype={
$0(){return F.aQ0(this.a.w)},
$S:190}
C.fQ4.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCw("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hE(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:190}
C.frP.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.frQ.prototype={
$1(d){return d.a},
$S:z+17}
C.frR.prototype={
$1(d){return d.b},
$S:z+18}
C.h3X.prototype={
$1(d){return D.hFM},
$S:z+42}
C.faw.prototype={
$0(){return this.a.x=C.i5N(this.b,this.c.b)},
$S:0}
C.fax.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.fau.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:472}
C.fav.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:472}
C.fat.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.as,null,new C.fao(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kh,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.fap(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hHj(o,m.cPf(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.faq(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.fao.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.fas(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.r(p,D.bdL,A.f,p,p,D.b8t,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ds:D.Dy,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fQk(v,i.b6W(h),u),p)))}t=B.l_(1,m,4,10,10,p,A.e1,!0)
if(!l)return B.bm(!0,new B.D(Ab.yS,t,p),!0,!1,A.ag,!0,!0)
s=new C.far(i,d)
m=B.aF(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Il[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,m.a.b*0.85),B.cb(B.x(B.a([D.fRF,A.W,t,A.e4,D.fcu,A.aw,D.h1P,A.W,B.l_(1.15,l,3,10,10,p,A.e1,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yS,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.fas.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bc:A.dr
return B.az(w,B.r(w,e,A.f,w,w,new B.o(t,w,B.K(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hN,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.fan(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1712}
C.fan.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.far.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bL:A.by
r=B.K(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.r(v,B.bx(w,d.length===0?B.r(v,D.asR,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.Ou(u.Gg(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bL:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fam(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:119}
C.fam.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.fap.prototype={
$0(){var w=this.a
return w.w=w.w.Gg("")},
$S:0}
C.faq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fac.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.fad.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.faf.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.fag.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.fah.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.fai.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fae(w,d))},
$S:2}
C.fae.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.faj.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.faK.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.faL.prototype={
$0(){var w=this.a
return w.m(new C.faJ(w))},
$S:0}
C.faJ.prototype={
$0(){return this.a.e=null},
$S:0}
C.faM.prototype={
$0(){var w=this.a
return w.m(new C.faI(w))},
$S:0}
C.faI.prototype={
$0(){return this.a.x=null},
$S:0}
C.faO.prototype={
$1(d){var w=this.a
return w.m(new C.faH(w,d))},
$S:35}
C.faH.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.faP.prototype={
$1(d){var w=this.a
return w.m(new C.faG(w,d))},
$S:35}
C.faG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.faQ.prototype={
$0(){var w=this.a
return w.m(new C.faF(w))},
$S:0}
C.faF.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.faR.prototype={
$1(d){var w=this.a
return w.m(new C.faE(w,d))},
$S:35}
C.faE.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.faS.prototype={
$1(d){var w=this.a
return w.m(new C.faD(w,d))},
$S:35}
C.faD.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.faT.prototype={
$0(){var w=this.a
return w.m(new C.faC(w))},
$S:0}
C.faC.prototype={
$0(){var w=this.a
return w.w=w.w.Gg("")},
$S:0}
C.faU.prototype={
$0(){var w=this.a
return w.m(new C.faB(w,this.b))},
$S:0}
C.faB.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.faV.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bT3(D.a6l[v]),null))
return B.bX(A.bH,t,A.bt,null,8,8)},
$S:178}
C.faN.prototype={
$1(d){var w=this.a
return w.m(new C.faA(w,d))},
$S:9}
C.faA.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.fak.prototype={
$0(){var w=this.a
return w.m(new C.fal(w,this.b,this.c))},
$S:0}
C.fal.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.faz.prototype={
$0(){var w=this.a
return w.m(new C.fay(w,this.b))},
$S:0}
C.fay.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h3W.prototype={
$1(d){return new C.a1P(this.a,this.b,null)},
$S:z+43}
C.fa5.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.fa6.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.fa7.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aLW?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.fa8.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.fa9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fa4(w,d))},
$S:2}
C.fa4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.faa.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.fab.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hk(A.bC,w.length),A.aP))},
$S:0}
C.fze.prototype={
$1(d){return d.a===this.a},
$S:231}
C.eqG.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazI(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d3H:D.dm0
t=A.wp.j(v?1:0.55)
v=p.a.c
t=B.K(t,A.r,v?1.8:1.2)
s=A.wp.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bS(0,B.b3(q,q,q,new C.bks(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bUy(B.eI(A.A,0.5,B.r(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a7,A.aa,A.x,B.a([A.L,D.blI.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.p(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.r(q,B.bx(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ee:A.mm,A.wp,q,q,q,20),A.aw,new B.dE(A.dY,A.A,A.f,B.oh(A.jV,D.fKU,new C.eqF()),q)],r),A.l,q,A.e,A.O,0,A.p),q,q,q),B.ap(q,B.r(q,D.fHj,A.f,q,q,new B.o(A.wp,q,q,B.l(6),q,q,A.n),q,q,q,q,O.anB,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.aA,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:86}
C.eqF.prototype={
$1(d){return D.c8I.aK(0,d)},
$S:71}
C.fVy.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fVz.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:231}
C.fVA.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1713}
C.fVB.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:13}
C.fVu.prototype={
$1(d){return d.a},
$S:z+17}
C.fVv.prototype={
$1(d){return d.b},
$S:z+18}
C.h39.prototype={
$1(d){return new C.a0d(this.a,this.b,null)},
$S:z+45}
C.dtm.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dtn.prototype={
$1(d){return d.a===this.a.gak0()},
$S:z+10}
C.dto.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dtr.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dts.prototype={
$0(){var w=this.a
return w.m(new C.dtq(w,this.b))},
$S:0}
C.dtq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtt.prototype={
$1(d){var w=this.a
return w.m(new C.dtp(w,d))},
$S:9}
C.dtp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqE.prototype={
$1$2(d,e,f){var w=B.br(d,!0,f)
A.d.e0(w,this.a)
return B.cX(w,0,B.dB(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1714}
C.fnR.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ev(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fj,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cu,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+46}
C.fnT.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ev(A.K,!1,this.b.d,A.aH,"",4280640491,i,A.bs,A.cZ,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bm,4280172719,2,d,l,0,"",D.ne,D.d1,g,e,f)},
$S:z+47}
C.fnS.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xg(0,"twinkle")
w=t===D.bm?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.ne,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+48}
C.fnQ.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fOM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fON.prototype={
$0(){return A.d.gH(D.Iv)},
$S:z+50}
C.fOO.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fqb.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fV0.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bm,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bm,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fQ,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV1.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bm,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bm,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bm,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fQ,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fQ,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fV2.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bm,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.kf,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.kf,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fQ,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fVd.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.kf,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.kf,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.ke,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bm,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fVi.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.ke,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bm,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fQ,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bm,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVj.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.kf,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bm,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fQ,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fVk.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d2y[w]
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fj,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.bm,v,4294967295,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fQ,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fVl.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mW,A.dn,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fj,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.Eb,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fQ,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fVm.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bm,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.ke,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fQ,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVn.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bm,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fQ,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.kf,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVo.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.kf,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bm,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bm,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV3.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.ke,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.ke,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fQ,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fV4.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.ke,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.ke,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.ke,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.f2,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fV5.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bm,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bm,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.kf,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.ke,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fQ,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fV6.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bm,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.ke,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.ke,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fQ,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fV7.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lt,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lt,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lt,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lt,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lt,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fQ,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fV8.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.kf,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.f2,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fQ,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fV9.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mW,A.dn,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fj,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.Eb,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bm,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fQ,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fVa.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eS("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bs,A.aH,s,A.bp,null,D.fQ,t,t,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bm,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bm,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fQ,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVb.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bm,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fQ,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fVc.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.je
$.je=t+1
t=new C.eS("design_"+(""+1000*u+"_"+t),D.fj,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bs,A.aH,r,A.bp,null,D.bm,4294967295,4280640491,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lp
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.db,A.cn,w/2).l()
t=Date.now()
s=$.je
$.je=s+1
u=new C.eS("design_"+(""+1000*t+"_"+s),D.fj,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bs,A.aH,r,A.bp,null,D.bm,u,q,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bm,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.ke,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fVe.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.kf,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.kf,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.kf,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.kf,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bm,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.f2,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVf.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bm,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.f2,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.f2,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.f2,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.kf,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fVg.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bm,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bm,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bm,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.f2,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fQ,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eS("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.f2,16777215,t,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fVh.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.kf,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.kf,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bm,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fMC.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fMD.prototype={
$0(){return A.d.gH($.bHj())},
$S:z+53}
C.fyx.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fyw.prototype={
$1(d){return C.idO(d,this.a,this.b)},
$S:z+54}
C.fVH.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wo(1.0375,1.01875,1)
return new B.fY(v,u,new C.aV6(B.i2K(A.vZ,C.idR(w.c,w.d,v,u),t)))},
$S:477}
C.e43.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e42.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jo(new B.an(A.a0,w,A.b2,A.t,B.a([new B.bN(new B.o(w,w,w,w,w,new B.bY(A.Fo,1.2,A.x,w,0,u.d,w,w),A.n),A.bi,w,w),new B.em(B.b3(w,w,w,new C.bhg(u.a,s,r,s),A.az),w),B.as(new B.k6(s,new C.e41(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:323}
C.e41.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e3.aA(0,A.j.D(e/1.4,0,1)),p=A.j.D(e/0.9,0,1),o=A.j.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.u(j,B.a([B.r(r,B.hY(B.fU(i,A.A,r,r,A.ck,A.c0,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.h1(A.A,0,6.283185307179586,A.x,t,r,new B.mN(e*0.8)),A.a6),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.buc(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.J,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dP(B.x(B.a([B.r(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a7,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNw(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.O,0,A.p),new B.p(0,(1-o)*m*0.03)),o))
return B.d3(B.e2(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.O,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:104}
C.f9i.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aD,A.x,this.a.c,B.a([0,A.j.D(w-0.1,0,1),A.j.D(w,0,1),A.j.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:71}
C.cfH.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bL:A.by
t=B.K(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.id.j(0.4),A.J,14)],x.V):v
w=B.cT(v,B.bx(B.l(12),d,A.aq),v,v,A.b_,new B.o(v,v,t,u,w,v,A.n),A.eI,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bL:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1715}
C.cfI.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gg(""))},
$S:0}
C.cfJ.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.Ou(v.Gg(u),!0,!1,null),null),d.b,new C.cfK(w,this.c,d),v.a===u)},
$S:z+55}
C.cfK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hHj(u.b,t.c.Gg(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h1u.prototype={
$1(d){return new C.a_L(this.a,null)},
$S:z+56}
C.diB.prototype={
$0(){var w=this.a
w.d=w.gwk().bfc("data:"+this.b+";base64,"+A.cV.gcu().aO(this.c));++w.r},
$S:0}
C.diG.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.diH.prototype={
$0(){var w=this.a
return w.m(new C.diF(w))},
$S:0}
C.diF.prototype={
$0(){return this.a.r++},
$S:0}
C.diI.prototype={
$1(d){var w=this.a
return w.m(new C.diE(w,d))},
$S:2}
C.diE.prototype={
$0(){var w=this.a
return w.d=w.gwk().aGa(this.b)},
$S:0}
C.diJ.prototype={
$0(){var w=this.a
return w.m(new C.diD(w))},
$S:0}
C.diD.prototype={
$0(){var w=this.a
return w.d=w.gwk().bfc("")},
$S:0}
C.diK.prototype={
$1(d){var w=this.a
return w.m(new C.diC(w,d))},
$S:2}
C.diC.prototype={
$0(){var w=this.a
return w.d=w.gwk().bfi(this.b)},
$S:0}
C.diL.prototype={
$0(){var w=this.a
w=w.gwk().bfi(w.gazJ().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h1t.prototype={
$1(d){var w={}
w.a=this.a
return new B.e1(new C.h1s(w),null)},
$S:21}
C.h1s.prototype={
$2(d,e){var w=null,v=this.a
return B.r(w,B.bm(!0,new B.cN(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.85),B.cb(B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aC,D.fZQ,A.aw,D.h_5,A.aC,new C.b1D(v.a,new C.h1r(v,e,d),!0,w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b91,w,w,w,w,A.Oj,w,w,w)},
$S:176}
C.h1r.prototype={
$1(d){this.b.$1(new C.h1q(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+57}
C.h1q.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h3V.prototype={
$1(d){return D.hzl},
$S:z+58}
C.dpo.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dpp.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dpq.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fSe.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aD,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.D(w-0.12,0,1),A.j.D(w,0,1),A.j.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:71}
C.dii.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c7(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c7(w,q+p,w,q+p*1.2))
u.E(new B.DT(B.bZ(new B.p(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.L()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.p(w,o),2.2,p)},
$S:360}
C.fSi.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+59}
C.fKB.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fKC.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fHB,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKz(d),B.bp(A.c2,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.W,B.ep(A.oO,D.We,new C.fKA(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,R.xZ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKz.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKA.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.clm.prototype={
$1(d){return d.hQ()},
$S:z+60}
C.cln.prototype={
$1(d){return d.aj()},
$S:z+61}
C.cll.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i9m(b2.h(0,"type"))
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
n=A.aE4[A.o.D(b4,0,8)]
m=D.d5O[A.o.D(w,0,1)]
l=C.idc(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.aAn[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ig0(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.j.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.j.M(f)
if(f==null)f=4280172719
e=B.aJ(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aJ(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.j.M(a2)
if(a2==null)a2=0
a3=C.hBR(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.j.M(a4)
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
b0=J.z(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.j.M(b2)
return C.ev(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+62}
C.clb.prototype={
$1(d){return d.hQ()},
$S:z+63}
C.clc.prototype={
$1(d){return d.aj()},
$S:z+64}
C.cl8.prototype={
$1(d){return B.w(d)},
$S:17}
C.cl9.prototype={
$1(d){return B.w(d)},
$S:17}
C.cla.prototype={
$1(d){return C.hso(B.a2(d,x.N,x.z))},
$S:z+65}
C.clD.prototype={
$1(d){return d.a===this.a},
$S:z+66}
C.clE.prototype={
$0(){return A.d.gH(D.a5X)},
$S:z+67}
C.cly.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.clx.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.clt.prototype={
$1(d){return new B.N(d,new C.clu(),B.U(d).k("N<1,V>")).f1(0,new C.clv())},
$S:z+70}
C.clu.prototype={
$1(d){return d.f},
$S:z+71}
C.clv.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:683}
C.clw.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hZu(d)},
$S:z+109}
C.clz.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.clA.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.clB.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fSW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.I)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.I(0,j)
break}}}},
$S:z+74}
C.fSS.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fST.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fSU.prototype={
$2(d,e){var w
if(d.b===D.d1){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fSV.prototype={
$2(d,e){return d.b===D.fj&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.clh.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ip4(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cF(new B.b8(b4,b5),new C.clg(),b5.k("M.E"),x.N)
w=B.d0(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qx.aA(0,A.j.D(b1,0,1))
u=new C.cli()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.clj(a9,b7.d)
r=new C.clk(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.I)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jG.aA(0,A.j.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kK(A.j.D(1-k,0,1),B.dP(B.e2(A.A,r.$1(l),1-k*0.06,a8,a8),new B.p(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.I)(b2),++m){i=b2[m]
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
if(a2===D.fj){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lV&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kK(A.j.D(o,0,1),r.$1(l),a8),new B.kK(A.j.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iV(B.wS(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cu)a7=D.ne
p.push(s.$5(i.c,i.d,i.e,i.f,C.hEs(a7,a6,r.$1(i))))}}return new B.bN(new B.o(a8,a8,a8,a8,a8,new B.a8(A.a7,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi,new B.an(A.a0,a8,A.ad,A.t,p,a8),a8)},
$S:350}
C.clg.prototype={
$1(d){return d.a},
$S:z+22}
C.cli.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+77}
C.clj.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1719}
C.clk.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a98(v,C.b3L(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQY.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e2(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.clq.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clr.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fVO.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:288}
C.fUV.prototype={
$1(d){return new C.aeR(this.a,this.b,null)},
$S:z+79}
C.eD_.prototype={
$0(){return this.a.QL(this.b,C.isU(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eD0.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QL(this.b,C.isW(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eD1.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QL(this.b,C.isV(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eD2.prototype={
$0(){A3.hEc()
B.a6(this.a,!1).O(null)},
$S:0}
C.clf.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1720}
C.cle.prototype={
$2(d,e){var w,v=this,u=null,t=B.dQ(d,A.o8),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.D(p*Math.max(B.jk(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c0:A.dD
return B.fU(t,A.A,o,new C.cld(),A.ck,w,!0,u,!1,new B.bo("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1721}
C.cld.prototype={
$3(d,e,f){return D.afN},
$S:211}
C.fSR.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.aA,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cX(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fSQ(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,new B.bN(new B.o(v,t,t,t,t,w,A.n),A.bi,new B.an(A.a0,t,A.ad,A.t,r,t),t),A.aq)},
$S:1722}
C.fSQ.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3L(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fBh.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fBf(d))
w=B.aF(d,A.c1,x.w).w
v=B.l(22)
u=B.K(A.by,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.fR,28)],x.V)
s=x.p
return new B.d2(e,!1,B.as(B.aH(!1,A.a3,!0,q,B.r(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jR,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bP(!1,A.B3,q,q,!0,q,q,q,new C.fBg(p,d),q,B.fs(q,q,A.bn,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cu,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.i,0,q,q),A.aC,r.d],s),A.l,q,A.e,A.O,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.as,q,u,v,t,q,A.n),q,q,q,A.h9,A.CA,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:266}
C.fBf.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pZ())B.a6(w,!0).eA()},
$S:0}
C.fBg.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eA()},
$S:0}
C.fhT.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kn(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.kn(r*0.5)
return B.fB(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fB(A.aa,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.e2(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLJ(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLJ(1-r,t))],x.p),t)
case 16:v=A2.Y9.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.ea(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n2(r*6.28)
s.k5(r,r,r,1)
return B.fB(A.A,u.b,t,s,!0)
case 20:return B.eI(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:69}
C.e1N.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1M.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1L.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hEs(v,w,e)},
$S:69}
C.cl7.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a7,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.cl6(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bN(new B.o(t,r,r,r,r,u,A.n),A.bi,new B.an(A.a0,r,A.ad,A.f,q,r),r)},
$S:350}
C.cl6.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cu?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a98(m,new C.Wr(d,C.b3L(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dfv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dfu(w))},
$S:11}
C.dfu.prototype={
$0(){return this.a.d++},
$S:0}
C.eqm.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aTE.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ioM(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ek(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.kn(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fB(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e2(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.p(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e2(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:69}
C.f6N.prototype={
$1(d){var w
$.S()
w=B.L()
w.b=A.a9
w.c=d
w.e=A.dT
return w},
$S:1723}
C.fQl.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdA()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bu5(u,t,r),A.az))
w.push(B.nX(s.d,A.aq,new C.bhN(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bt1(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:219}
C.fEp.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:289}
C.eJe.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.DD(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dL(s,new C.eJc(),new C.eJd(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1724}
C.eJc.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.eJd.prototype={
$0(){return J.fp(this.a)},
$S:1726}
C.eFC.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFD.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFE.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eHc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eH0.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eH1.prototype={
$1(d){return d.hQ()},
$S:z+82}
C.eF_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eIk.prototype={
$0(){this.a.ug()},
$S:0}
C.eJa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KS()},
$S:0}
C.eHa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KS()},
$S:0}
C.eIY.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIZ.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eJ_.prototype={
$1(d){return d.a},
$S:z+22}
C.eJ0.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:274}
C.eJ1.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:687}
C.eEo.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJb.prototype={
$0(){},
$S:0}
C.eGj.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KS()},
$S:0}
C.eEm.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yf()},
$S:0}
C.eEn.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yf()},
$S:0}
C.eGG.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eGH.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KS()
w.z="Home"},
$S:0}
C.eGI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGi.prototype={
$1(d){var w=null
return B.ej(B.a([B.bP(!1,A.Wd,w,w,!0,w,w,w,new C.eGh(d),w,w)],x.p),w,w,w,D.h0H,w,w,w,w,D.fI4,w)},
$S:18}
C.eGh.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGf.prototype={
$1(d){var w=null
return B.ej(B.a([B.bP(!1,A.Wd,w,w,!0,w,w,w,new C.eGe(d),w,w)],x.p),w,w,w,D.fMh,w,w,w,w,D.fJV,w)},
$S:18}
C.eGe.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGg.prototype={
$0(){},
$S:0}
C.eFy.prototype={
$1(d){return this.a.b3j(C.bFj(d))},
$S:z+7}
C.eFz.prototype={
$1(d){return this.a.agB(C.bFj(d))},
$S:z+7}
C.eGp.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.h0L,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.QJ(A.wP,D.aBM,"HATI YA KUHOWA","Hati ya mahari",new C.eGk(d),w),A.W,new C.QJ(A.ho,D.djx,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eGl(d),w),A.W,new C.QJ(A.hQ,D.d3M,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eGm(d),w),A.W,new C.QJ(A.il,D.d1M,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eGn(d),w)],v)
if(this.a.gZ4())A.d.u(u,B.a([A.W,new C.QJ(A.ja,D.cNx,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eGo(d),w)],v))
return B.bm(!0,B.cb(B.x(u,A.al,w,A.e,A.O,0,A.p),A.t,w,A.y,w,E.yV,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGk.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eGl.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eGm.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eGn.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eGo.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eGq.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eEq.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eEr.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.u(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nw(r,v.f+1,q);++v.f
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
C.eGB.prototype={
$1(d){return d.b===D.lV},
$S:z+4}
C.eGC.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e1(new C.eGz(w,this.a,v),null)},
$S:21}
C.eGz.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eGA(p,o,a3,n),l=B.P(a2).ax.a===A.H,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.br:A.cd,h=l?A.a_:A.c,g=B.l(28),f=B.K(l?A.by:A.bj,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aI(q,q,q,q,B.X(A.cC,j,q,q,q,q),q,q,q,new C.eGv(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dy[w]
v.a=null
t=v.a=u.a
a1.push(new C.bkl(t,u.b,p.a===t,i,k,new C.eGw(v,m),q))}a1=B.bX(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ds[w]
s.a=null
t=s.a=r.a
u.push(new C.bkk(t,r.b,p.b===t,k,j,new C.eGx(s,m),q))}return B.bm(!0,B.r(q,B.cb(B.x(B.a([d,A.aO,a0,A.W,a1,A.bz,v,A.W,B.bX(A.bH,u,A.bt,q,12,12),A.bz,new B.a5(1/0,48,B.ep(D.c4E,D.h3a,new C.eGy(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b9(B.l(16),A.a1),D.b6x,q,q,q,q)),q)],e),A.E,q,A.e,A.O,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uG,D.bFA,q,q,q),!0,!1,A.ag,!0,!0)},
$S:85}
C.eGA.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eGt(w.a,d,e))
w.b.dc(new C.eGu(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1729}
C.eGt.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eGu.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eGv.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGw.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eGx.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eGy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hy(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eGs(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGs.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eGE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGF.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eGD(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eGD.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGW.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eGX.prototype={
$1(d){return d.w},
$S:z+83}
C.eGY.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eGZ.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.H,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.br:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.K(u?A.by:A.bj,A.r,1),n=B.aF(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.r(v,B.x(B.a([B.A(B.a([B.r(v,D.bYW,A.f,v,v,D.b7U,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aI(v,v,v,v,B.X(A.cC,s,v,v,v,v),v,v,v,new C.eGT(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.i,0,v,v),A.aC,new B.di(1,A.cl,B.hS(v,new C.eGU(m,k,w.c,s,w.d,t,r),k.length,A.fn,v,A.ah,new C.eGV(),!0),v)],l),A.E,v,A.e,A.O,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uG,A.a10,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGT.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGV.prototype={
$2(d,e){return A.ae},
$S:36}
C.eGU.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cE
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c1k,q,q,q,new C.eGR(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bHR,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aP(),v,q,q,q,q,q,2,B.bA(q,new B.b6(4,B.l(16),A.a1),q,A.eW,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b6c),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGS(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:688}
C.eGR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iv1(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geD()?p.a:q.a.length
n=p.geD()?p.b:q.a.length
m=A.a.oc(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hk(A.bC,o+s.length),A.aP))
l.akE(k,m)
l.pM()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGS.prototype={
$1(d){var w=this.a
w.akE(this.b.a,d)
w.pM()},
$S:2}
C.eH_.prototype={
$0(){},
$S:0}
C.eGr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEH.prototype={
$0(){},
$S:0}
C.eEI.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hFP(this.b,w,!0)
w=this.a
w.r=null
w.yf()},
$S:0}
C.eEJ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEK.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eEG(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eEG.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eH5.prototype={
$1(d){return B.pj(new C.eH4(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:133}
C.eH4.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.anf,B.x(B.a([D.fZc,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.is(!0,w,e,A.y,D.fjq,new C.eH3(this.a,this.b),20,A.uJ,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:366}
C.eH3.prototype={
$2(d,e){var w=null,v=D.Iv[e],u=C.hZp(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.K(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.r(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fO,w,w,w)],m)
if(u)A.d.u(n,B.a([A.bo,B.r(w,D.fcq,A.f,w,w,new B.o(A.dP.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n4,w,w,w)],m))
return B.aH(!1,A.a3,!0,w,B.aN(!1,t,!0,B.r(w,B.x(B.a([B.A(n,A.l,w,A.e,A.i,0,w,w),A.b1,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a7,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH2(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:81}
C.eH2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.clp(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH6.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eDk.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t1(4294967295,null,0,0,null,C.cE(),D.nd,"","","",D.ds),s=this.b
C.clC(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.Ea){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eEF.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.je
$.je=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hso(q));++v.f},
$S:0}
C.eED.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eHe.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eEz.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.eEy(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eEy.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHd.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eEp.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:274}
C.eF0.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:687}
C.eIW.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIX.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avD(w).fW()
v=u.XB(w)
v.stY(B.hk(A.bC,v.a.a.length))},
$S:7}
C.eIl.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.YC(v)
if(u!=null&&u.b===D.d1)w.XB(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eDl.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ev(A.bp,!1,v.gqV().e.l(),A.aH,"",4280640491,24,A.bs,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bm,4280172719,2,"Tap to edit text",0,0,"",D.cu,D.d1,0.7,0.15,0.2)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDi.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ev(A.bp,!1,4279310375,A.aH,"",v.gqV().c.j(0.25).l(),24,A.bs,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqV().c.l(),2,"",0,0,"",D.cu,D.fj,0.25,0.3,0.3)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eD8.prototype={
$0(){var w=C.ev(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bs,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lV,0.6,0.2,0.18),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eD5.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.cbI],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galg().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dI(!1,r,r,r,!0,r,r,r,!0,r,r,D.bWz,r,r,r,r,new C.eD4(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cm(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eD4.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eD6.prototype={
$0(){var w=A.j.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.aw(u.aj(),null),s=C.ev(A.bp,!1,4279310375,A.aH,u.b,4280640491,24,A.bs,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bm,4280172719,2,t,0,0,"",D.cu,D.a8G,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eEB.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eEC.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdB().z,new C.eEA(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eEA.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDN.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d1)s.Q=t.c.l()
else if(w===D.fj){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDO(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.I)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDO.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDS.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDT(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.I)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDT.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDQ.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d1){s.Q=t.c
return}w=new C.eDR(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.I)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDR.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eJ(w,new C.eDP()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDP.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDM.prototype={
$0(){return C.clC(this.b,this.c,this.a.gqV())},
$S:0}
C.eGQ.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eJ4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ5.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eJ6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ7.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eJ3(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTe()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yf()
t.KS()}},
$S:0}
C.eJ3.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eIB.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acT(),s=w.b,r=u.acU(A.fr,A.jO,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.K(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.T,r,A.bz,B.r(v,B.A(B.a([B.E(u.aXV(w.c,A.an),1),new B.D(A.fE,B.r(v,D.bWE,A.f,v,v,new B.o(A.fr.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aXV(s,A.fr),1)],n),A.l,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.aA,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bI,v,v,v),A.bz,u.aXY(A.fr,d,D.bSK,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.u(p,B.a([A.W,u.c1z(A.aG,d,A.uW,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aC)
p.push(u.aXW(d,"Not now"))
return new C.KU(B.x(p,A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eIA.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KU(B.x(B.a([v.acT(),A.T,v.acU(A.aG,D.bSp,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cN(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.42),B.hS(w,new C.eIy(v,u,d),u.length,w,w,A.ah,new C.eIz(),!0),w),A.aC,v.aXW(d,"Cancel")],x.p),A.al,w,A.e,A.O,0,A.p),w)},
$S:z+9}
C.eIz.prototype={
$2(d,e){return A.W},
$S:36}
C.eIy.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.K(A.c.j(0.08),A.r,1),q=x.p
return B.aH(!1,A.a3,!0,w,B.aN(!1,u,!0,B.r(w,B.A(B.a([B.r(w,D.ask,A.f,w,w,new B.o(w,w,w,B.l(12),w,D.c8E,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nj,w,w,w),A.cR,B.d("Updated "+this.a.QM(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eJ,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIx(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:81}
C.eIx.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eIu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acT()
t=t.acU(A.at,A.v8,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KU(B.x(B.a([s,A.T,t,A.bz,B.A(B.a([B.E(B.dV(A.acb,new C.eIs(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cp,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bJ(D.fKv,u,new C.eIt(d),B.bp(A.fr,u,u,u,A.c,u,A.cp,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.O,0,A.p),u)},
$S:z+9}
C.eIs.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eIt.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eIw.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acT(),s=w.b,r=u.acU(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awX("Names",""+w.c),1),A.af,B.E(u.awX("Fields",""+w.d),1),A.af,B.E(u.awX("Signatures",""+w.e),1)],q),A.l,v,A.e,A.i,0,v,v),o=B.bp(A.bn,v,v,v,A.c,v,A.yI,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KU(B.x(B.a([t,A.T,r,A.aO,p,A.bz,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.o3,v,v,v),v,new C.eIv(d),o),A.W,u.aXX(d,"Stay here",!1)],q),A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eIv.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eFu.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eFt.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eIm.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eIV.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0X(A.d.dL(w.d,new C.eIT(v),new C.eIU(v)).hQ(),w.f,null)},
$S:z+85}
C.eIT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIU.prototype={
$0(){return this.a},
$S:z+86}
C.eDd.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bI,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h4,w,w,w),w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYt,w,w,w,w,new C.eDb(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fIt,w,w,w)],x.p)
if(v>1)t.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZL,w,w,w,w,new C.eDc(d),!1,w,w,w,w,w,D.h4r,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eDb.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eDc.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eDe.prototype={
$0(){var w=this.b,v=w.c,u=C.ev(A.bp,!1,4279310375,A.aH,v,4280640491,24,A.bs,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bm,4280172719,2,v,0,0,"",D.cu,D.U0,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDf.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.je
$.je=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.je
$.je=k+1
m.push(new C.eS(""+1000*l+"_"+k,D.U0,0.04,0.06,0.92,0.88,v,24,A.a8,A.bs,A.aH,4279310375,A.bp,u,D.bm,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cu,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m4(""+1000*p+"_"+o,r+n,"",D.r3,4294967295,null,D.ds,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eDj.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kP(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ev(A.bp,!1,4279310375,A.aH,t,4280640491,24,A.bs,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.ls,0.35,0.55,0.62)
A.d.I(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eDa.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b60(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ev(A.bp,!1,4279310375,A.aH,"marriage_sign_placed_"+A.a.eo(v.db,"marriage_sign_",""),4280640491,24,A.bs,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.ls,s,u,t)
A.d.I(p.gdB().z,q)
A.d.bq(p.gdB().z,new C.eD9(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.iot(p)}},
$S:0}
C.eD9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eHb.prototype={
$0(){var w=this.a,v=this.b
w.b60(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eJ2.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eFx.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.eFw())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eFw.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDW.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDX.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ug()},
$S:7}
C.eD7.prototype={
$0(){var w=C.ev(A.bp,!1,4279310375,A.aH,"HD Photo",4280640491,24,A.bs,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lV,0.8,0.1,0.1),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEZ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDg.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eDp.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eDq.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.j.D(w.c+0.04,0,0.92),t=A.j.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ev(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eDr.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDo(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eDo.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDC.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDn(v))
if(u>0){A.d.cH(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eDn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDF.prototype={
$0(){return this.a.as=A.bp},
$S:0}
C.eDG.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eDH.prototype={
$0(){return this.a.as=A.e5},
$S:0}
C.eDI.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eDJ.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eDK.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDL.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDs.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DI(w.gqV().c.j(0.18).l(),0.1,u,D.bm,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.I(u,C.j8(A.bp,!1,w.gqV().d.l(),A.aH,18,A.bs,A.I,0.07,v,"Document Header",0,D.ds,0.9,0.05,0.02))},
$S:0}
C.eDt.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.I(u,C.DI(v.gqV().c.j(0.12).l(),0.1,t,D.bm,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bG2()
A.d.I(t,C.j8(A.K,!1,v.gqV().e.l(),A.aH,12,A.bs,A.a8,0.06,u,"Footer \xb7 "+w,0,D.ds,0.9,0.05,0.92))},
$S:0}
C.eDu.prototype={
$0(){A.d.I(this.a.gdB().z,C.DI(1727914055,0.12,C.cE(),D.bm,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eDv.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdB().z,C.DI(w,0.08,C.cE(),D.bm,w,2,0.5,0.2,0.4))},
$S:0}
C.eDw.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DI(w.gqV().c.j(0.35).l(),0.12,u,D.Eb,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.15,C.cE(),"Important note",0,D.r4,0.5,0.38,0.52))},
$S:0}
C.eDx.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DI(4294507260,0.78,C.cE(),D.bm,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4279179050,A.aH,16,A.bs,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bG2()+"\n\nSubject:\n\nBody text\u2026",0,D.ds,0.76,0.12,0.14))},
$S:0}
C.eDy.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DI(4294897802,0.28,C.cE(),D.bm,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4285611794,A.aH,15,A.bs,A.a8,0.24,C.cE(),"Sticky note",0,D.aLK,0.26,0.64,0.14))},
$S:0}
C.eDz.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdB().z,C.DI(4293060848,0.04,C.cE(),D.bm,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdB().z,C.DI(w,0.04,C.cE(),D.bm,w,2,0.55,0.1,0.48))},
$S:0}
C.eDA.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,18,A.bs,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ju,0.42,0.06,0.18))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,18,A.bs,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vr,0.42,0.52,0.18))},
$S:0}
C.eDB.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DI(858088427,0.62,C.cE(),D.bm,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdB().z,C.DI(856004201,0.62,C.cE(),D.bm,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,20,A.bs,A.I,0.1,C.cE(),"Option A",0,D.ds,0.36,0.08,0.2))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,20,A.bs,A.I,0.1,C.cE(),"Option B",0,D.ds,0.36,0.56,0.2))},
$S:0}
C.eDD.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DI(4294967295,0.36,C.cE(),D.bm,w,2,0.24,0.38,0.28))
A.d.I(v.gdB().z,C.j8(A.K,!1,w,A.aH,14,A.bs,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.ds,0.24,0.38,0.4))},
$S:0}
C.eDE.prototype={
$0(){return C.clC(this.b,D.U1,this.a.gqV())},
$S:0}
C.eEY.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aaz.q(0,d),t=this.a
return t.bbd(d,v===d,A.b3,this.c,new C.eEX(t,u,d,w),u)},
$S:z+25}
C.eEX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGO(r,new C.eEW(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEW.prototype={
$0(){return this.a.dc(new C.eEV(this.b,this.c))},
$S:0}
C.eEV.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eDh.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t1(4294967295,null,0,0,null,C.cE(),D.nd,"","","",D.ds),s=this.b
C.clC(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.Ea){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eE_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iv4(p,q.d,s,new C.eDZ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ug(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDZ.prototype={
$1(d){return this.bod(d)},
bod(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDY(t,d))
w=2
return B.b(t.ug(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+88}
C.eDY.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eE0.prototype={
$0(){return this.a.bN1()},
$S:0}
C.eE1.prototype={
$0(){return this.a.aT4("Class Presentation",!0)},
$S:0}
C.eE2.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eE3.prototype={
$1(d){return this.a.bNY(d.b,this.b,d.a)},
$S:z+89}
C.eEE.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGP.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aF(d,A.eT,x.w).w.f.d),new B.e1(new C.eGO(this.a,this.b),null),null)},
$S:61}
C.eGO.prototype={
$2(d,e){return B.pj(new C.eGN(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:602}
C.eGN.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.K(u?A.by:A.bj,A.r,1),r=B.r(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.r(v,B.x(B.a([A.W,r,new B.D(A.amE,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b1,B.bP(!1,A.B3,v,v,!0,v,v,v,new C.eGL(w.c),v,v)],q),A.l,v,A.e,A.i,0,v,v),v),B.E(B.cm(B.a([p.aVS(u,!0,!0,new C.eGM(p,w.d))],q),e,v,D.bDd,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.la,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.eGL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGM.prototype={
$0(){this.b.$1(new C.eGJ())
var w=this.a
if(w.c!=null)w.m(new C.eGK())},
$S:0}
C.eGJ.prototype={
$0(){},
$S:0}
C.eGK.prototype={
$0(){},
$S:0}
C.eIn.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eIo.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e2(A.A,new C.aB_(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:252}
C.eIp.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eIq.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e2(A.A,new C.bfB(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:252}
C.eIr.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xk(this.b))},
$S:0}
C.eDm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qh.j(0.75)],t)
r=B.K(A.aZ.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.aZ.j(0.35+q),A.ci.j(0.18),A.L],t)
q=B.K(A.aZ.j(0.45+q),A.r,1)
t=B.r(p,B.X(Z.Pj,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bY(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.uC(A.fk,B.r(p,B.x(B.a([t,A.aC,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aF:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.aA,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:308}
C.eEs.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eEt.prototype={
$1(d){return d.length!==0},
$S:3}
C.eEu.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ka
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3r:A.CR}return w},
$S:690}
C.eEx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dG.aA(0,A.j.F(j+w*0.12,1))
j=m.c
u=j?l:new B.o(l,l,l,B.l(20),A.IC,l,A.n)
t=B.l(20)
s=m.d
r=B.l(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.as.j(0.78)],x.O)
else{q=(A.o.aq(w,1)&1)===0
p=B.ar(A.c,q?A.aG:A.bc,0.1)
p.toString
o=B.ar(A.c,q?A.aG:A.bc,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VO((A.o.aq(w,1)&1)===0?A.aG:A.bc,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.K(o,A.r,p?1.5:1.25)
n=B.l(10)
if(j)w=m.e
else{w=(A.o.aq(w,1)&1)===0
p=B.VO(w?A.aG:A.bc,!0)[0]
p=B.a([p,B.VO(w?A.aG:A.bc,!0)[1]],x.O)
w=p}w=B.r(l,B.X(C.kP(s.w)?A.wP:A.qS,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,n,l,new B.a8(A.a7,A.aa,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.m(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QM(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QM(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QM(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QM(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QM(s.f)
n=k.bNW(n,A.d.gH(m.e),j)
return B.r(l,B.bx(t,new B.a9j(B.aH(!1,A.a3,!0,l,B.aN(!1,l,!0,B.r(l,B.dI(!1,A.GU,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aI(l,l,l,l,B.X(A.oG,j?A.aF:A.bN,l,l,l,l),l,l,l,new C.eEv(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,o,r,l,new B.a8(A.aA,A.aD,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eEw(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,u,l,l,l,A.kw,l,l,l,l)},
$S:86}
C.eEw.prototype={
$0(){return this.a.agB(this.b)},
$S:0}
C.eEv.prototype={
$0(){return this.a.Bv(this.b,this.c)},
$S:0}
C.eFY.prototype={
$0(){var w=this.a
w.b9M()
w.m(new C.eFX())},
$S:0}
C.eFX.prototype={
$0(){},
$S:0}
C.eFZ.prototype={
$1(d){return this.a.akE(this.b.a,d)},
$S:2}
C.eG_.prototype={
$0(){this.a.dc(new C.eFW(this.b))},
$S:0}
C.eFW.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eG0.prototype={
$0(){this.a.dc(new C.eFV(this.b))},
$S:0}
C.eFV.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bs:A.cK},
$S:0}
C.eG1.prototype={
$0(){this.a.dc(new C.eFU(this.b))},
$S:0}
C.eFU.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.ni},
$S:0}
C.eG2.prototype={
$0(){this.a.dc(new C.eFT(this.b))},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eG3.prototype={
$0(){var w=this.a
w.dc(new C.eFS(w,this.b))},
$S:0}
C.eFS.prototype={
$0(){var w=this.b
return w.as=this.a.c8z(w.as)},
$S:0}
C.eG4.prototype={
$0(){return this.a.dc(new C.eFR(this.b))},
$S:0}
C.eFR.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eG5.prototype={
$0(){return this.a.dc(new C.eFQ(this.b))},
$S:0}
C.eFQ.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFJ.prototype={
$0(){return this.a.a3j(this.b.a)},
$S:0}
C.eFK.prototype={
$0(){this.a.a0Q()
return null},
$S:0}
C.eFL.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c1,x.w).w.a.a<900)w.agU()
else w.m(new C.eFI(w))},
$S:0}
C.eFI.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eFM.prototype={
$0(){this.a.dc(new C.eFH(this.b))},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eFN.prototype={
$0(){return this.a.dc(new C.eFG(this.b))},
$S:0}
C.eFG.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFO.prototype={
$0(){return this.a.dc(new C.eFF(this.b))},
$S:0}
C.eFF.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFP.prototype={
$0(){return this.a.aC9(null)},
$S:0}
C.eER.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eES.prototype={
$0(){this.a.abq()
return null},
$S:0}
C.eEU.prototype={
$1(d){return this.boe(d)},
boe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KJ(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.as,null,new C.eEM(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eEN(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEO(r))
s=s.c.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEP(r))
s=s.c.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hHi(q,new C.Fp(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eEQ(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ail(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:98}
C.eEM.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.evP],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dk,p,p,p)
q=u.e===s?D.bYD:p
o.push(B.dI(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eEL(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEL.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eEN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEO.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEP.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEQ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eET.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.As(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.As(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.As(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ail(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eBl,q,v,u,B.As(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.eJ8.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bG_(w,v)}},
$S:0}
C.eJ9.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eG8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c8y:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.cd
if(s)v=A.c
else v=this.b?A.aR:A.bx
return new B.D(A.fn,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b_,new B.o(w,u,u,r,u,q,A.n),A.eI,u,u,u,u,A.lM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eG7(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:132}
C.eG7.prototype={
$0(){var w=this.a
return w.m(new C.eG6(w,this.b))},
$S:0}
C.eG6.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eG9.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a6w:E.aBS
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRw():t.gbNm()
return B.h9(B.az(u,B.r(u,D.arK,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a7,A.aa,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1733}
C.eGa.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iui(v,w.a.c)},
$S:0}
C.eHx.prototype={
$0(){return this.b.vT(this.a.a)},
$S:0}
C.eHy.prototype={
$0(){return this.a.vT(D.nd)},
$S:0}
C.eHz.prototype={
$0(){return this.a.vT(D.Js)},
$S:0}
C.eHK.prototype={
$0(){return this.a.vT(D.Jt)},
$S:0}
C.eHV.prototype={
$0(){return this.a.vT(D.Jr)},
$S:0}
C.eI5.prototype={
$0(){return this.a.qG("lab_report")},
$S:0}
C.eIc.prototype={
$0(){return this.a.qG("rubric")},
$S:0}
C.eId.prototype={
$0(){return this.a.qG("minutes")},
$S:0}
C.eIe.prototype={
$0(){return this.a.qG("agenda")},
$S:0}
C.eIf.prototype={
$0(){return this.a.qG("timeline")},
$S:0}
C.eIg.prototype={
$0(){return this.a.qG(this.b.a)},
$S:0}
C.eHA.prototype={
$0(){this.a.WE()
return null},
$S:0}
C.eHB.prototype={
$0(){this.a.Wy()
return null},
$S:0}
C.eHC.prototype={
$0(){return this.a.qG("table")},
$S:0}
C.eHD.prototype={
$0(){return this.a.qG("sticky")},
$S:0}
C.eHE.prototype={
$0(){return this.a.qG("divider")},
$S:0}
C.eHF.prototype={
$0(){return this.a.qG("header_bar")},
$S:0}
C.eHG.prototype={
$0(){return this.a.pt(D.bm)},
$S:0}
C.eHH.prototype={
$0(){return this.a.pt(D.f2)},
$S:0}
C.eHI.prototype={
$0(){return this.a.pt(D.ke)},
$S:0}
C.eHJ.prototype={
$0(){return this.a.pt(D.Eb)},
$S:0}
C.eHL.prototype={
$0(){return this.a.pt(D.kf)},
$S:0}
C.eHM.prototype={
$0(){return this.a.pt(D.lt)},
$S:0}
C.eHN.prototype={
$0(){return this.a.pt(D.fQ)},
$S:0}
C.eHO.prototype={
$0(){this.a.HV()
return null},
$S:0}
C.eHP.prototype={
$0(){this.a.O4()
return null},
$S:0}
C.eHQ.prototype={
$0(){return this.a.qG("quote")},
$S:0}
C.eHR.prototype={
$0(){return this.a.a9z()},
$S:0}
C.eHS.prototype={
$0(){this.a.a0W()
return null},
$S:0}
C.eHT.prototype={
$0(){var w=this.a
return w.m(new C.eHn(w))},
$S:0}
C.eHn.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHU.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ot(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eHv(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHv.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHW.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kd()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aaB.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.r(s,s,A.f,s,s,new B.o(s,s,B.K(t,A.r,v?2.5:1),s,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aaB.q(0,q))u.push(B.ap(s,B.r(s,D.Q3,A.f,s,s,D.Fv,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fn,B.az(s,B.h9(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eHu(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+90}
C.eHu.prototype={
$0(){this.a.a9P(this.b)
return null},
$S:0}
C.eHX.prototype={
$0(){this.a.a9O(this.b)
return null},
$S:0}
C.eHY.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hZq(d),p=this.a,o=B.l(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bn:A.aT
v=p.gdB()
n=B.K(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t1(4294967295,r,0,0,r,"preview_"+w,D.r3,"","","",D.ds)
C.hDQ(s,w)
w=x.p
u=B.a([B.bx(o,B.r(r,B.bx(t,C.hFc(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.r(r,D.asl,A.f,r,r,D.Fv,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iR,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cR,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aF:A.an,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eHt(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+91}
C.eHt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdB()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eHj(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHj.prototype={
$0(){return C.hDQ(this.a,this.b.a)},
$S:0}
C.eHw.prototype={
bof(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aaz.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bof(d,e)},
$S:z+92}
C.eIh.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eIj(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cb(B.A(v,A.l,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+93}
C.eIj.prototype={
$1(d){var w=this
return w.a.bbd(d,w.b===d,w.c,w.d,new C.eIi(w.e,d),!D.aaz.q(0,d))},
$S:z+25}
C.eIi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHZ.prototype={
$1(d){this.b.$2(d,new C.eHs(this.a,d,this.c))
return null},
$S:z+26}
C.eHs.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGO(u,new C.eHi(v,this.c,w),w)},
$S:0}
C.eHi.prototype={
$0(){return this.a.dc(new C.eHg(this.b,this.c))},
$S:0}
C.eHg.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eI_.prototype={
$1(d){this.b.$2(d,new C.eHr(this.a,d))
return null},
$S:z+26}
C.eHr.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h4L(u,new C.eHh(v,w),w)},
$S:0}
C.eHh.prototype={
$0(){var w=this.a
return w.dc(new C.eHf(w,this.b))},
$S:0}
C.eHf.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eI0.prototype={
$0(){var w=this.a
return w.m(new C.eHq(w))},
$S:0}
C.eHq.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eI1.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bG_(w,v)}},
$S:0}
C.eI2.prototype={
$0(){this.a.IH()
return null},
$S:0}
C.eI3.prototype={
$0(){return this.a.a9z()},
$S:0}
C.eI4.prototype={
$0(){var w=this.a,v=w.kd()
if(v!=null&&v.b===D.d1)w.dc(new C.eHp(v))},
$S:0}
C.eHp.prototype={
$0(){var w=this.a
w.f=A.j.D(w.f*1.25,0.08,1.8)
w.e=A.j.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eI6.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eI7.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FS(v,!0)
return null},
$S:0}
C.eI8.prototype={
$0(){this.a.dc(new C.eHo(this.b))},
$S:0}
C.eHo.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eI9.prototype={
$0(){this.a.dc(new C.eHm(this.b))},
$S:0}
C.eHm.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bs:A.cK},
$S:0}
C.eIa.prototype={
$0(){this.a.dc(new C.eHl(this.b))},
$S:0}
C.eHl.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.ni},
$S:0}
C.eIb.prototype={
$0(){this.a.dc(new C.eHk(this.b))},
$S:0}
C.eHk.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDV.prototype={
$1(d){return this.boc(d)},
boc(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eDU(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:204}
C.eDU.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eIE.prototype={
$0(){var w=this.a
return w.dc(new C.eID(w,this.b))},
$S:0}
C.eID.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eIF.prototype={
$0(){var w=this.a
return w.dc(new C.eIC(w,this.b))},
$S:0}
C.eIC.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eF3.prototype={
$0(){return this.a.dc(new C.eF2(this.b))},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eF4.prototype={
$0(){return this.a.dc(new C.eF1(this.b))},
$S:0}
C.eF1.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFB.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.au3,new C.eFA(),w),w.k("ak.E"))
return w},
$S:z+95}
C.eFA.prototype={
$1(d){var w=null
return B.As(B.d(d.b,w,w,w,w,w,w,A.lY,w,w,w),48,d,x.fO)},
$S:z+96}
C.eIR.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eIQ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eIO(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bn
else v=r.d?A.aT:A.cx
v=B.K(v,A.r,o?2:1)
u=r.d?A.cm:A.c
t=B.bS(0,C.hFc(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.r(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.r(q,B.d(""+(e+1),q,q,q,q,q,q,A.o0,q,q,q),A.f,q,q,new B.o(A.b6,q,q,s,q,q,A.n),q,q,q,q,A.anC,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIP(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:82}
C.eIP.prototype={
$0(){var w=this.a
return w.m(new C.eIK(w,this.b))},
$S:0}
C.eIK.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KS()},
$S:0}
C.eIO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eIL(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eIM(q,s))
q.aUz()}else if(r==="del"){q=t.a
q.m(new C.eIN(q,s))
q.aTF()}else if(r==="up")t.a.b6e(s,s-1)
else if(r==="down")t.a.b6e(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIL.prototype={
$1(d){var w=null,v=B.a([B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_o,w,w,w,w,new C.eIG(d),!1,w,w,w,w,w,w,w,D.fJs,w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_h,w,w,w,w,new C.eIH(d),!1,w,w,w,w,w,w,w,A.xA,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZv,w,w,w,w,new C.eII(d),!1,w,w,w,w,w,w,w,D.fRV,w,w,w))
if(u<this.b.r.length-1)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0G,w,w,w,w,new C.eIJ(d),!1,w,w,w,w,w,w,w,D.fJg,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eIG.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eIH.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eII.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eIJ.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eIM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIS.prototype={
$0(){return this.a.a9z()},
$S:0}
C.eEl.prototype={
$0(){var w=this.a
w.b9M()
w.aC9(null)},
$S:0}
C.eEk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.aA,A.aD,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.aA,A.aD,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,new B.bN(new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bi,A.l4,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.u(s,new B.N(r,new C.eEj(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aF:A.bN,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bN(new B.o(v,p,p,o,n,w,A.n),A.bi,new B.an(A.a0,p,A.ad,A.f,s,new B.bo("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:350}
C.eEj.prototype={
$1(d){var w=this
return w.a.bJi(d,w.b,w.c,w.d)},
$S:z+23}
C.eE8.prototype={
$0(){var w=this
if(w.b){w.a.Oc(w.c)
return}if(w.d){w.a.a9x(w.c)
return}if(w.e){w.a.aib(w.c)
return}if(w.f)w.a.bak(w.c)},
$S:0}
C.eE9.prototype={
$0(){this.a.Oc(this.b)
return null},
$S:0}
C.eEa.prototype={
$0(){return this.a.a3j(this.b.a)},
$S:0}
C.eEb.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eE7(u,d,w.c,w.d))
v.Il()
v.oF()
v.pM()},
$S:19}
C.eE7.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eEc.prototype={
$1(d){return this.a.akE(this.b.a,d)},
$S:2}
C.eEe.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hhE(w))u.a.Oc(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bak(v)},
$S:0}
C.eEd.prototype={
$0(){return this.a.a3j(this.b.a)},
$S:0}
C.eEf.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eE6(w.b,d,w.c,w.d))
v.Il()
v.oF()
v.pM()},
$S:19}
C.eE6.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d1)v.w=A.j.D(v.w+u*0.15,10,120)},
$S:0}
C.eEg.prototype={
$1(d){var w=this.a
w.m(new C.eE5(this.b,d))
w.Il()
w.oF()
w.pM()},
$S:235}
C.eE5.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.D(w.e*v,0.04,1.8)
w.f=A.j.D(w.f*v,0.04,1.8)
if(w.b===D.d1)w.w=A.j.D(w.w*v,10,120)},
$S:0}
C.eEh.prototype={
$0(){var w=this.a
w.m(new C.eE4(this.b))
w.Il()
w.oF()
w.pM()},
$S:0}
C.eE4.prototype={
$0(){this.a.r=C.hEF()},
$S:0}
C.eEi.prototype={
$0(){return this.a.a3j(this.b.a)},
$S:0}
C.eGc.prototype={
$0(){var w=this.a
return w.m(new C.eGb(w))},
$S:0}
C.eGb.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eGd.prototype={
$1(d){return this.a.cIB(this.b.a,d)},
$S:2}
C.eFh.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:161}
C.eFi.prototype={
$1(d){return this.a.$1(new C.eFg(this.b,d))},
$S:6}
C.eFg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFj.prototype={
$1(d){return this.a.$1(new C.eFf(this.b,d))},
$S:6}
C.eFf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eFk.prototype={
$1(d){return this.a.$1(new C.eFe(this.b,d))},
$S:6}
C.eFe.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eFl.prototype={
$1(d){return this.a.$1(new C.eFd(this.b,d))},
$S:6}
C.eFd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eFm.prototype={
$1(d){return this.a.$1(new C.eFc(this.b,d))},
$S:6}
C.eFc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFn.prototype={
$1(d){return this.b.$1(new C.eFb(this.a,this.c))},
$S:9}
C.eFb.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eFo.prototype={
$1(d){return this.b.$1(new C.eFa(this.a,this.c))},
$S:9}
C.eFa.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eFp.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bn:A.cB
return B.az(w,B.r(w,w,A.f,w,w,new B.o(u,w,B.K(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF9(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:386}
C.eF9.prototype={
$0(){return this.a.$1(new C.eF6(this.b,this.c))},
$S:0}
C.eF6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eFq.prototype={
$1(d){return this.a.$1(new C.eF8(this.b,d))},
$S:1734}
C.eF8.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eFr.prototype={
$1(d){var w=null
return B.az(w,B.r(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF7(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:386}
C.eF7.prototype={
$0(){return this.a.$1(new C.eF5(this.b,this.c))},
$S:0}
C.eF5.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eFs.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pZ()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eA()}v.a.auB()},
$S:0}
C.eFv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dG.aA(0,k)
k=B.l(16)
v=B.l(16)
u=B.P(d).ax.a===A.dm?A.b0:A.aA
t=B.P(d).ax.a===A.dm?A.b7:A.aD
if(B.P(d).ax.a===A.dm)s=D.d4P
else{s=m.c
r=B.ar(s,A.aZ,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.K(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
p=B.l(6)
o=m.c
n=B.K(o,A.r,1.2)
q.push(B.ap(2,B.r(l,B.X(A.v8,o,l,l,l,10),A.f,l,l,new B.o(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nM,l,l,l),l,l,l,2,l,l))
return B.aH(!1,A.a3,!0,l,B.aN(!1,k,!0,B.eB(new B.a5(48,48,new B.an(A.A,l,A.ad,A.t,q,l),l),l,new B.o(l,l,r,v,l,new B.a8(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.aj)},
$S:138}
C.eD3.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ar(u,A.aZ,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.K(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.K(A.c.j(0.4+w*0.15),A.r,1)
return B.aH(!1,A.a3,!0,p,B.aN(!1,o,!0,B.eB(B.x(B.a([B.e2(A.A,B.r(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j1,A.K,p,p)],x.p),A.l,p,A.ba,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.aA,A.aD,A.x,u,p,p),A.n),p,A.Cy,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:138}
C.eH9.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aP(),u,w,w,w,w,w,2,A.ate,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.ej(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.eH7(d),w,w),B.bJ(A.rh,w,new C.eH8(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eH7.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eH8.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.daX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dG.aA(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.e3.aA(0,A.j.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.dK.aA(0,h)
v=B.l(22)
t=B.ar(A.aM,A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR),w*0.35)
t.toString
t=B.K(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR).j(0.18+w*0.12),A.J,32+w*10),D.afi],s)
q=B.l(22)
p=x.O
o=B.ap(j,B.r(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bY(A.b0,0.9,A.x,j,0,B.a([A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR).j(0.28+w*0.14)
p=B.r(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bY(A.A,0.5,A.x,j,0,B.a([m,A.d.gal(C.kP(i.a.c.w)?D.vk:L.nR).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.kP(m)?D.vk:L.nR
s=B.a([new B.ab(0,A.G,A.d.gH(C.kP(m)?D.vk:L.nR).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.e2(A.A,B.r(j,B.X(C.kP(i.a.c.w)?A.wP:A.qS,A.c,j,j,j,22),A.f,j,j,new B.o(j,j,j,n,s,new B.a8(A.aA,A.aD,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.A,j,A.ad,A.t,l,j),A.W,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.I,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fG,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fAX,A.K,j,j),A.aw,B.d(i.gcDp(),j,j,j,j,j,j,D.fG0,A.K,j,j),A.aC],m)
p=i.a.c
if(p.z){p=p.gTe()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.u(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kP(i.a.c.w)?D.vk:L.nR).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.ae],m))}s.push(new C.KO(A.zf,"Download PDF","pdf",A.d7,i.JG(0),!1,j))
p=i.a.c
if(!p.z||p.gTe()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KO(A.jO,"Transfer to "+C.hEH(p==null?"":p),"transfer_hati",A.aV,i.JG(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JG(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KO(D.bRM,"Rename presentation","rename",A.ci,n,!1,j),A.am,new C.KO(A.apw,"Duplicate","duplicate",A.b8,i.JG(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.u(s,B.a([A.T,new C.KO(A.ek,p,"delete",A.ay,i.JG(n),!0,j)],m))}s.push(A.aw)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JG(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JG(n)
s.push(B.dP(B.d3(B.bP(!1,E.aXA,j,j,!0,j,j,j,new C.daW(d),j,B.fs(j,j,j,j,j,j,j,j,j,j,j,A.bN,j,j,j,A.az,j,D.bGw,j,j,j,j,j,A.kB,j,j)),n),new B.p(0,(1-p)*8)))
return B.e2(A.A,B.d3(B.aH(!1,A.a3,!0,j,B.r(j,B.bx(q,new B.an(A.a0,j,A.ad,A.t,B.a([o,new B.D(D.bFF,B.x(s,A.l,j,A.e,A.O,0,A.p),j)],m),j),A.aq),A.f,j,A.XU,new B.o(A.as,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj),h),0.88+u*0.12,j,j)},
$S:44}
C.daW.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dbk.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dbl.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.daU.prototype={
$1(d){var w=this.a
return w.m(new C.daQ(w))},
$S:23}
C.daQ.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daV.prototype={
$1(d){var w=this.a
return w.m(new C.daP(w))},
$S:68}
C.daP.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daT.prototype={
$0(){var w=this.a
return w.m(new C.daR(w))},
$S:0}
C.daR.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daS.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJP.prototype={
$0(){return $.bnk=!$.bnk},
$S:0}
C.eJF.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXO())u.azK()},
$S:0}
C.eJO.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJG.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azK()},
$S:0}
C.eJB.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJC.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJD.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJE.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJM.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1735}
C.eJN.prototype={
$2(d,e){var w
if(e.gc4(e)===A.iv)return new B.d2(e,!1,d,null)
w=this.a
return w.cBj(w.e,d,e)},
$S:373}
C.eJI.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:44}
C.eJJ.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kn((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:44}
C.eJK.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.kn(v.gp(0)*0.35)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:44}
C.eJL.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fB(A.aa,B.d3(e,v.gp(0)),null,w,!0)},
$S:44}
C.eJQ.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZX().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZX().x
t===$&&B.c()
return new C.b3M(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JL(v.c,t,!0,new B.bo("cine"+u,x.W))},
$S:671}
C.eJS.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c1,x.w).w.a.a*0.55)w.azK()
else w.cpD()},
$S:68}
C.eJR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fVE.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.u(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:395}
C.fVN.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.fVK(d),w,w),B.bP(!1,D.fZy,w,w,!0,w,w,w,new C.fVL(d,this.b,v),w,w),B.bJ(A.aXT,w,new C.fVM(d,v,this.c),w)],x.p),w,w,O.us,new B.a5(320,w,t,w),w,w,w,w,D.h04,w)},
$S:18}
C.fVK.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fVL.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hii(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aSr(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRT(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVD.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.clF.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:544}
C.fVJ.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fqH.prototype={
$1(d){return C.hig(C.Xk(B.a2(d,x.N,x.z)),this.a)},
$S:z+97}
C.h3Z.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.h4_.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e2(A.A,D.hCf,0.94+w*0.06,null,null),w)},
$S:252}
C.h40.prototype={
$1(d){var w=this
return new C.Xm(w.a,w.b,w.c,w.d,null)},
$S:z+98}
C.eJl.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJh.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJk.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xn(u,this.b,w.gaQS(),v,null)},
$S:z+100}
C.eJi.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJm.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJr.prototype={
$0(){var w=this.a
return w.m(new C.eJp(w))},
$S:0}
C.eJp.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eJs.prototype={
$0(){var w=this.a
return w.m(new C.eJo(w))},
$S:0}
C.eJo.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eJt.prototype={
$1(d){return this.a.bNX(d,this.b)},
$S:z+101}
C.eJg.prototype={
$0(){var w=this.a
return w.m(new C.eJf(w,this.b))},
$S:0}
C.eJf.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eJu.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eJv.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eJw.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJx.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fy(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fmw)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCX())},
$S:0}
C.eCX.prototype={
$0(){},
$S:0}
C.eCZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eCU.prototype={
$1(d){return this.a.m(new C.eCT())},
$S:2}
C.eCT.prototype={
$0(){},
$S:0}
C.eCV.prototype={
$1(d){return this.a.b23()},
$S:2}
C.eCW.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJA.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJz(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJz.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fPO.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k6(this.c,new C.fPN(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:222}
C.fPN.prototype={
$3(d,e,f){return new C.JL(e,!1,!1,new B.bo(e.a,x.W))},
$S:z+103}
C.fPP.prototype={
$1(d){var w=null
return B.oQ(!1,B.as(new C.by6(this.a,this.b,w),w,w,w),w,x.z)},
$S:332}
C.fPT.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmu(),$async$$0)
case 3:w=4
return B.b(B.bO(A.md,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmu(),$async$$0)
case 5:s=$.aU.ap$.x.h(0,t.a)
r=s==null?null:s.gbf()
if(!(r instanceof B.qn))throw B.W("Could not draw the slide.")
u=r.lU(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1738}
C.fPU.prototype={
boK(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hi(A.ha),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eQ(A.dM.gaU(r))],"image/png"))
t.toString
s=Ao.h8w(t)
w=4
return B.b(new B.qv(s,"load",!1,x.ev).gH(0).dg(0,A.k0),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boK(d)},
$S:1739}
C.fPQ.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:151}
C.fPR.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h0(0)},
$S:151}
C.fPS.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fkw.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fxh,A.K,w,w)},
$S:1740}
C.fkx.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bx(v,B.ks(A.br,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:575}
C.erd.prototype={
$1(d){this.a.a0f()
return null},
$S:12}
C.erb.prototype={
$0(){return this.a.e=D.bBr},
$S:0}
C.erc.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.cpV.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+104}
C.cpW.prototype={
$2(d,e){return(d|e)>>>0},
$S:62};(function aliases(){var w=C.aOh.prototype
w.bzX=w.t
w=C.aNM.prototype
w.bzq=w.t
w=C.aNv.prototype
w.bz8=w.t
w=C.aNL.prototype
w.bzp=w.t
w=C.aOf.prototype
w.bzV=w.t
w=C.aPz.prototype
w.bBp=w.t
w=C.aMq.prototype
w.by0=w.t
w=C.aOs.prototype
w.bA7=w.t
w=C.aOt.prototype
w.bA8=w.t
w=C.b5t.prototype
w.buv=w.aFh})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"irI","ape",105)
v(C.aLm.prototype,"gc8X","a_3",0)
var r
u(r=C.azO.prototype,"gcCL","cCM",40)
v(r,"gc9M","aeM",0)
v(r=C.azK.prototype,"gb0r","EE",3)
v(r,"gc9J","c9K",3)
v(r,"gayP","yt",0)
v(r,"gaAT","JY",0)
t(C,"isE","hXa",106)
v(C.aFX.prototype,"gccP","ccQ",3)
s(C,"isM",0,null,["$4$paper$photo$request$template"],["fX3"],107,0)
s(C,"isL",0,null,["$5$doc$history$instruction$photo$template"],["bFh"],108,0)
v(r=C.aGd.prototype,"gcdy","JD",0)
v(r,"gbNp","XN",0)
v(r,"gcdB","afF",0)
v(r,"gcdA","a00",0)
v(r,"gb1J","EV",0)
v(C.aGg.prototype,"gcdG","a02",0)
v(r=C.aHH.prototype,"gb1W","QI",0)
v(r,"gcuv","b6j",3)
v(r,"gcE8","aDq",94)
v(r,"gbRk","abv",0)
v(r,"gce6","B8",0)
v(r=C.aJD.prototype,"gcom","a1p",0)
v(r,"gcou","a1s",0)
v(r,"gbGb","a9V",0)
v(r,"gcea","afR",0)
v(C.aJC.prototype,"gceb","afS",0)
v(C.aDC.prototype,"gbFa","a9I",0)
v(C.aBY.prototype,"gcec","a0d",0)
w(C,"isW","iqp",12)
w(C,"isU","inc",12)
w(C,"isV","ipn",12)
v(r=C.aGx.prototype,"gcHs","cHt",3)
v(r,"gcsL","csM",3)
u(r,"gF0","agB",7)
v(r,"gbL0","atK",3)
u(r,"gF1","b3j",7)
v(r,"gcgt","agi",0)
v(r,"gcfk","agh",0)
v(r,"gc4h","Zq",0)
v(r,"gciG","agC",0)
v(r,"gbNm","ab3",0)
v(r,"gcjA","a0Q",0)
v(r,"gcjB","agT",0)
v(r,"gck7","ah_",0)
v(r,"gciT","agF",0)
v(r,"gbRw","abz",0)
v(r,"gaUy","aUz",3)
v(r,"gaTE","aTF",3)
v(r,"gaP8","aP9",3)
v(r,"gaTD","auB",3)
u(r,"gbFr","bFs",81)
v(r,"gaCX","b9v",3)
v(r,"gcfm","cfn",3)
v(r,"gc1T","c1U",3)
v(r,"gbPP","bPQ",3)
v(r=C.aGA.prototype,"gcGe","cGf",3)
v(r,"gcFS","cFT",3)
t(C,"isX","iqG",2)
v(r=C.aGy.prototype,"gcei","JI",0)
v(r,"gcww","Sc",0)
v(r,"gcef","JH",0)
v(r,"gcIM","a3Z",0)
v(r,"gckj","ah6",0)
v(C.aGw.prototype,"gcej","b23",3)
v(r=C.aGz.prototype,"gbSm","abJ",0)
u(r,"gceg","ceh",102)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ol,C.T1,C.bL_,C.bJd,C.cHa,C.cH8,C.bTf,C.bba,C.cH9,C.bHO,C.cpP,C.cpN,C.cpO,C.cpM,C.auM,C.cpL,C.bUh,C.oP,C.aH9,C.jG,C.o9,C.a9i,C.Ag,C.lA,C.oZ,C.mu,C.Ah,C.oc,C.a9q,C.at6,C.b3N,C.eqD,C.lx,C.Fy,C.ey,C.jd,C.Fp,C.yh,C.eS,C.m4,C.hT,C.k2,C.a9r,C.agE,C.b3O,C.b5t,C.a4m])
u(B.jz,[C.cPc,C.c4e,C.fKY,C.cQJ,C.cQ5,C.fQw,C.cg6,C.e8P,C.e8O,C.erg,C.erf,C.fRW,C.frT,C.frU,C.cjU,C.cjV,C.cjW,C.euV,C.f3i,C.f2G,C.f2F,C.f3J,C.f3g,C.f39,C.f3s,C.f48,C.fzZ,C.fas,C.far,C.faV,C.eqG,C.fVA,C.e42,C.h1s,C.fSi,C.clx,C.clv,C.clA,C.fSS,C.fST,C.fSU,C.fSV,C.clh,C.cli,C.dQY,C.cle,C.fSR,C.fhT,C.e1L,C.cl7,C.eqm,C.fQl,C.eGz,C.eGY,C.eGV,C.eGU,C.eH4,C.eH3,C.eIz,C.eIy,C.eGO,C.eGN,C.eDm,C.eEx,C.eHw,C.eIR,C.eIQ,C.eEk,C.eFv,C.eD3,C.daX,C.eJM,C.eJN,C.eJI,C.eJJ,C.eJK,C.eJL,C.eJQ,C.clF,C.eJl,C.eJw,C.cpW])
u(B.hx,[C.cPd,C.cPe,C.bUi,C.fHM,C.c4d,C.c4g,C.fYP,C.fj2,C.fiU,C.fj9,C.fqI,C.fqJ,C.fKZ,C.fKX,C.fYh,C.fHq,C.fZa,C.cQz,C.cQE,C.cQG,C.cQC,C.cQH,C.cQA,C.cQI,C.cQv,C.cQs,C.cQr,C.cQy,C.cQ0,C.cPZ,C.fPy,C.fPz,C.fv3,C.fQx,C.fQD,C.fu5,C.cg5,C.cg8,C.fPw,C.fPx,C.fKl,C.fKm,C.fQC,C.fQy,C.fQA,C.fQB,C.fQz,C.h1K,C.fKp,C.fKq,C.fKt,C.fKu,C.fKx,C.fKy,C.h3h,C.fsm,C.h3s,C.eud,C.eue,C.euf,C.etW,C.eu7,C.eu8,C.eua,C.cjT,C.cjR,C.cjS,C.fQc,C.fQe,C.fQd,C.frV,C.frW,C.h3v,C.ev_,C.ev0,C.euS,C.euT,C.euW,C.euX,C.h3L,C.f49,C.f3z,C.f3j,C.f3w,C.f2B,C.f2C,C.f2D,C.f2H,C.f2I,C.f3Z,C.f45,C.f47,C.f3I,C.f3K,C.f3O,C.f3P,C.f3Q,C.f3U,C.f3L,C.f3M,C.f2T,C.f2U,C.f2V,C.f2W,C.f2X,C.f2Y,C.f2Z,C.f3_,C.f30,C.f2e,C.f2f,C.f2g,C.f2h,C.f2j,C.f2k,C.f2N,C.f2O,C.f2P,C.f2Q,C.f2R,C.f2o,C.f2p,C.f2q,C.f2r,C.f38,C.f3r,C.fNB,C.fNA,C.clo,C.fzY,C.fVw,C.fVp,C.fVs,C.fTm,C.fTn,C.fTo,C.fNI,C.fNH,C.fNG,C.fNE,C.frP,C.frQ,C.frR,C.h3X,C.fau,C.fav,C.fao,C.fai,C.faO,C.faP,C.faR,C.faS,C.faN,C.h3W,C.fa9,C.fze,C.eqF,C.fVy,C.fVz,C.fVB,C.fVu,C.fVv,C.h39,C.dtn,C.dtt,C.eqE,C.fnR,C.fnT,C.fnS,C.fnQ,C.fOM,C.fOO,C.fqb,C.fV0,C.fV1,C.fV2,C.fVd,C.fVi,C.fVj,C.fVk,C.fVl,C.fVm,C.fVn,C.fVo,C.fV3,C.fV4,C.fV5,C.fV6,C.fV7,C.fV8,C.fV9,C.fVa,C.fVb,C.fVc,C.fVe,C.fVf,C.fVg,C.fVh,C.fMC,C.fyx,C.fyw,C.fVH,C.e43,C.e41,C.f9i,C.cfH,C.cfJ,C.h1u,C.diI,C.diK,C.h1t,C.h1r,C.h3V,C.fSe,C.dii,C.fKB,C.fKC,C.clm,C.cln,C.cll,C.clb,C.clc,C.cl8,C.cl9,C.cla,C.clD,C.cly,C.clt,C.clu,C.clw,C.clz,C.clB,C.fSW,C.clg,C.clj,C.clk,C.clq,C.clr,C.fVO,C.fUV,C.clf,C.cld,C.fSQ,C.fBh,C.cl6,C.f6N,C.fEp,C.eJc,C.eFC,C.eFD,C.eHc,C.eH0,C.eH1,C.eF_,C.eIY,C.eIZ,C.eJ_,C.eEo,C.eGG,C.eGI,C.eGi,C.eGf,C.eFy,C.eFz,C.eGp,C.eEq,C.eGB,C.eGC,C.eGA,C.eGE,C.eGD,C.eGW,C.eGX,C.eGZ,C.eGS,C.eEJ,C.eEG,C.eH5,C.eEy,C.eIX,C.eD5,C.eEB,C.eEA,C.eDO,C.eDT,C.eDR,C.eDP,C.eJ4,C.eJ5,C.eJ6,C.eJ3,C.eIB,C.eIA,C.eIu,C.eIw,C.eIm,C.eIV,C.eIT,C.eDd,C.eD9,C.eFw,C.eDX,C.eDo,C.eDn,C.eDK,C.eDL,C.eEY,C.eDZ,C.eE2,C.eE3,C.eGP,C.eIn,C.eIo,C.eIp,C.eIq,C.eEs,C.eEt,C.eEu,C.eFZ,C.eEU,C.eEM,C.eET,C.eG8,C.eG9,C.eHW,C.eHY,C.eIh,C.eIj,C.eHZ,C.eI_,C.eDV,C.eFB,C.eFA,C.eIL,C.eEj,C.eEb,C.eEc,C.eEf,C.eEg,C.eGd,C.eFh,C.eFi,C.eFj,C.eFk,C.eFl,C.eFm,C.eFn,C.eFo,C.eFp,C.eFq,C.eFr,C.eH9,C.daU,C.daV,C.eJS,C.fVE,C.fVN,C.fVD,C.fVJ,C.fqH,C.h3Z,C.h4_,C.h40,C.eJk,C.eJt,C.eCZ,C.eCU,C.eCV,C.fPO,C.fPN,C.fPP,C.fPU,C.fPQ,C.fPR,C.fkw,C.fkx,C.erd,C.cpV])
u(B.iO,[C.cPf,C.fiZ,C.fj3,C.fj4,C.fj_,C.fj0,C.fj1,C.fiS,C.fiT,C.fiV,C.fiW,C.fj8,C.fj7,C.fiY,C.fiX,C.fj5,C.fj6,C.fjb,C.fjc,C.fja,C.cQB,C.cQF,C.cQD,C.cQt,C.cQu,C.cQw,C.cQp,C.cQq,C.cQx,C.cQo,C.cQn,C.cQm,C.cPQ,C.cPP,C.cPS,C.cQ_,C.cPT,C.cPR,C.cPV,C.cPW,C.cPX,C.cPU,C.cPY,C.cQ1,C.cQ2,C.cQ3,C.cQ4,C.fKj,C.fKk,C.fKh,C.fKi,C.emu,C.ems,C.emt,C.emv,C.emw,C.e8N,C.fKn,C.fKo,C.fKr,C.fKs,C.fKv,C.fKw,C.ere,C.fSl,C.fSk,C.euc,C.eub,C.etQ,C.etM,C.etX,C.etY,C.etZ,C.etS,C.etT,C.etU,C.etV,C.etR,C.etO,C.etP,C.eu4,C.eu5,C.eu3,C.eu6,C.eu2,C.eu1,C.eu0,C.eu9,C.eu_,C.etN,C.euZ,C.euN,C.euO,C.euU,C.euP,C.euR,C.euQ,C.euY,C.f31,C.f3p,C.f2L,C.f2M,C.f2J,C.f2K,C.f3v,C.f3u,C.f3t,C.f3y,C.f3x,C.f2A,C.f2E,C.f2z,C.f2y,C.f2v,C.f2x,C.f2w,C.f46,C.f4_,C.f3Y,C.f40,C.f3X,C.f41,C.f3W,C.f42,C.f43,C.f44,C.f3V,C.f3H,C.f3C,C.f3N,C.f3G,C.f3R,C.f3F,C.f3S,C.f3E,C.f3T,C.f3D,C.f3m,C.f3l,C.f3n,C.f3k,C.f3o,C.f3e,C.f3d,C.f3f,C.f3c,C.f3b,C.f3a,C.f2i,C.f2d,C.f2s,C.f2n,C.f2t,C.f2m,C.f2u,C.f2l,C.f3h,C.f35,C.f34,C.f36,C.f33,C.f37,C.f32,C.f3q,C.f3B,C.f3A,C.f2S,C.fVr,C.fVt,C.fVx,C.fNF,C.fQ5,C.fQ3,C.fQ4,C.faw,C.fax,C.fat,C.fan,C.fam,C.fap,C.faq,C.fac,C.fad,C.faf,C.fag,C.fah,C.fae,C.faj,C.faK,C.faL,C.faJ,C.faM,C.faI,C.faH,C.faG,C.faQ,C.faF,C.faE,C.faD,C.faT,C.faC,C.faU,C.faB,C.faA,C.fak,C.fal,C.faz,C.fay,C.fa5,C.fa6,C.fa7,C.fa8,C.fa4,C.faa,C.fab,C.dtm,C.dto,C.dtr,C.dts,C.dtq,C.dtp,C.fON,C.fMD,C.cfI,C.cfK,C.diB,C.diG,C.diH,C.diF,C.diE,C.diJ,C.diD,C.diC,C.diL,C.h1q,C.dpo,C.dpp,C.dpq,C.fKz,C.fKA,C.clE,C.eD_,C.eD0,C.eD1,C.eD2,C.fBf,C.fBg,C.e1N,C.e1M,C.dfv,C.dfu,C.eJe,C.eJd,C.eFE,C.eIk,C.eJa,C.eHa,C.eJ0,C.eJ1,C.eJb,C.eGj,C.eEm,C.eEn,C.eGH,C.eGh,C.eGe,C.eGg,C.eGk,C.eGl,C.eGm,C.eGn,C.eGo,C.eGq,C.eEr,C.eGt,C.eGu,C.eGv,C.eGw,C.eGx,C.eGy,C.eGs,C.eGF,C.eGT,C.eGR,C.eH_,C.eGr,C.eEH,C.eEI,C.eEK,C.eH2,C.eH6,C.eDk,C.eEF,C.eED,C.eHe,C.eEz,C.eHd,C.eEp,C.eF0,C.eIW,C.eIl,C.eDl,C.eDi,C.eD8,C.eD4,C.eD6,C.eEC,C.eDN,C.eDS,C.eDQ,C.eDM,C.eGQ,C.eJ7,C.eIx,C.eIs,C.eIt,C.eIv,C.eFu,C.eFt,C.eIU,C.eDb,C.eDc,C.eDe,C.eDf,C.eDj,C.eDa,C.eHb,C.eJ2,C.eFx,C.eDW,C.eD7,C.eEZ,C.eDg,C.eDp,C.eDq,C.eDr,C.eDC,C.eDF,C.eDG,C.eDH,C.eDI,C.eDJ,C.eDs,C.eDt,C.eDu,C.eDv,C.eDw,C.eDx,C.eDy,C.eDz,C.eDA,C.eDB,C.eDD,C.eDE,C.eEX,C.eEW,C.eEV,C.eDh,C.eE_,C.eDY,C.eE0,C.eE1,C.eEE,C.eGL,C.eGM,C.eGJ,C.eGK,C.eIr,C.eEw,C.eEv,C.eFY,C.eFX,C.eG_,C.eFW,C.eG0,C.eFV,C.eG1,C.eFU,C.eG2,C.eFT,C.eG3,C.eFS,C.eG4,C.eFR,C.eG5,C.eFQ,C.eFJ,C.eFK,C.eFL,C.eFI,C.eFM,C.eFH,C.eFN,C.eFG,C.eFO,C.eFF,C.eFP,C.eER,C.eES,C.eEL,C.eEN,C.eEO,C.eEP,C.eEQ,C.eJ8,C.eJ9,C.eG7,C.eG6,C.eGa,C.eHx,C.eHy,C.eHz,C.eHK,C.eHV,C.eI5,C.eIc,C.eId,C.eIe,C.eIf,C.eIg,C.eHA,C.eHB,C.eHC,C.eHD,C.eHE,C.eHF,C.eHG,C.eHH,C.eHI,C.eHJ,C.eHL,C.eHM,C.eHN,C.eHO,C.eHP,C.eHQ,C.eHR,C.eHS,C.eHT,C.eHn,C.eHU,C.eHv,C.eHu,C.eHX,C.eHt,C.eHj,C.eIi,C.eHs,C.eHi,C.eHg,C.eHr,C.eHh,C.eHf,C.eI0,C.eHq,C.eI1,C.eI2,C.eI3,C.eI4,C.eHp,C.eI6,C.eI7,C.eI8,C.eHo,C.eI9,C.eHm,C.eIa,C.eHl,C.eIb,C.eHk,C.eDU,C.eIE,C.eID,C.eIF,C.eIC,C.eF3,C.eF2,C.eF4,C.eF1,C.eIP,C.eIK,C.eIO,C.eIG,C.eIH,C.eII,C.eIJ,C.eIM,C.eIN,C.eIS,C.eEl,C.eE8,C.eE9,C.eEa,C.eE7,C.eEe,C.eEd,C.eE6,C.eE5,C.eEh,C.eE4,C.eEi,C.eGc,C.eGb,C.eFg,C.eFf,C.eFe,C.eFd,C.eFc,C.eFb,C.eFa,C.eF9,C.eF6,C.eF8,C.eF7,C.eF5,C.eFs,C.eH7,C.eH8,C.daW,C.dbk,C.dbl,C.daQ,C.daP,C.daT,C.daR,C.daS,C.eJP,C.eJF,C.eJO,C.eJG,C.eJH,C.eJB,C.eJC,C.eJD,C.eJE,C.eJR,C.fVK,C.fVL,C.fVM,C.eJh,C.eJi,C.eJj,C.eJm,C.eJn,C.eJq,C.eJr,C.eJp,C.eJs,C.eJo,C.eJg,C.eJf,C.eJu,C.eJv,C.eJx,C.eJy,C.eCY,C.eCX,C.eCT,C.eCW,C.eJA,C.eJz,C.fPT,C.fPS,C.erb,C.erc])
t(C.aTN,B.M)
u(B.lG,[C.a55,C.aze,C.axT,C.yf,C.yi,C.lf,C.tQ,C.Cd,C.t0,C.wB,C.atE,C.JM,C.at5,C.vk,C.mV,C.hI,C.aa3])
u(C.bTf,[C.cHb,C.bTg])
u(C.cpP,[C.cpT,C.auL])
t(C.cpS,C.cpN)
t(C.cpR,C.cpM)
t(C.cpU,C.cpR)
t(C.cpQ,C.cpO)
t(C.cpK,C.cpL)
t(C.cAh,B.axl)
t(C.a9Q,B.y1)
u(B.af,[C.a2k,C.a_2,C.a_0,C.asc,C.Xa,C.Xb,C.a1j,C.a1Q,C.a1P,C.aG7,C.a0d,C.Ou,C.a_L,C.a05,C.aq6,C.aL1,C.Wr,C.aBD,C.a98,C.P_,C.aB_,C.KO,C.a0X,C.Xm,C.Xn,C.aGv,C.ata,C.a99])
u(B.ah,[C.aLm,C.azO,C.azK,C.aFX,C.aGd,C.aGg,C.aHH,C.aJD,C.aJC,C.aOh,C.aDC,C.aNM,C.aBY,C.biN,C.aNv,C.aPz,C.aNL,C.bgA,C.aOf,C.aOs,C.aMq,C.bfl,C.aOt,C.aGy,C.bnj,C.aGw,C.aGz,C.bn2])
u(B.aw,[C.azM,C.aeL,C.ae9,C.bm1,C.aeO,C.agu,C.b3o,C.bvG,C.b3J,C.boA,C.buc,C.b1D,C.b3M,C.aeR,C.af7,C.b3K,C.JL,C.b1G,C.bfB,C.QJ,C.KU,C.bkl,C.bkk,C.by6])
u(B.Ib,[C.bf2,C.bx4,C.aLJ,C.bhN,C.buB])
u(B.mo,[C.bf1,C.bbt,C.buy,C.beA,C.bib,C.bks,C.bhg,C.bi7,C.bhP,C.bqW,C.bcD,C.bcg,C.by2,C.bv0,C.bu8,C.bh9,C.b3H,C.bt1,C.bu5])
t(C.bn_,C.aOh)
t(C.bml,C.aNM)
t(C.bm3,C.aNv)
t(C.bxx,C.aPz)
t(C.bmh,C.aNL)
t(C.bmY,C.aOf)
t(C.bAp,C.aOs)
t(C.aGx,C.bAp)
t(C.bfm,C.aMq)
t(C.aGA,C.aOt)
t(C.bxT,B.j6)
t(C.aa2,B.kL)
t(C.cpX,C.b5t)
t(C.ajJ,C.a4m)
u(B.Z1,[C.aTF,C.aV6])
t(C.ayP,C.aTF)
w(C.aOh,B.cd)
w(C.aNM,B.cd)
w(C.aNv,B.cd)
w(C.aNL,B.cd)
w(C.aOf,B.cd)
w(C.aPz,B.cd)
w(C.aMq,B.eO)
w(C.aOs,B.cd)
v(C.bAp,B.eD)
w(C.aOt,B.cd)})()
B.iW(b.typeUniverse,JSON.parse('{"aUo":{"hQ":["aUo"]},"ol":{"aUo":[],"hQ":["aUo"]},"aTN":{"M":["T1"],"M.E":"T1"},"a9Q":{"y1":[],"oI":[]},"a2k":{"af":[],"v":[]},"aLm":{"ah":["a2k"]},"a_2":{"af":[],"v":[]},"a_0":{"af":[],"v":[]},"azO":{"ah":["a_2"]},"azK":{"ah":["a_0"]},"azM":{"aw":[],"v":[]},"asc":{"af":[],"v":[]},"aFX":{"ah":["asc"]},"aeL":{"aw":[],"v":[]},"ae9":{"aw":[],"v":[]},"aeO":{"aw":[],"v":[]},"agu":{"aw":[],"v":[]},"bm1":{"aw":[],"v":[]},"Xa":{"af":[],"v":[]},"aGd":{"ah":["Xa"]},"b3o":{"aw":[],"v":[]},"bf2":{"aC":[]},"bf1":{"aC":[]},"bx4":{"aC":[]},"bbt":{"aC":[]},"buy":{"aC":[]},"Xb":{"af":[],"v":[]},"aGg":{"ah":["Xb"]},"beA":{"aC":[]},"a1j":{"af":[],"v":[]},"aHH":{"ah":["a1j"]},"bib":{"aC":[]},"a1Q":{"af":[],"v":[]},"a1P":{"af":[],"v":[]},"aG7":{"af":[],"v":[]},"a0d":{"af":[],"v":[]},"aJD":{"ah":["a1Q"]},"aJC":{"ah":["a1P"]},"bn_":{"ah":["aG7"]},"bks":{"aC":[]},"aDC":{"ah":["a0d"]},"bvG":{"aw":[],"v":[]},"b3J":{"aw":[],"v":[]},"boA":{"aw":[],"v":[]},"Ou":{"af":[],"v":[]},"a_L":{"af":[],"v":[]},"bml":{"ah":["Ou"]},"buc":{"aw":[],"v":[]},"bhg":{"aC":[]},"b1D":{"aw":[],"v":[]},"aBY":{"ah":["a_L"]},"a05":{"af":[],"v":[]},"biN":{"ah":["a05"]},"bi7":{"aC":[]},"bhP":{"aC":[]},"bqW":{"aC":[]},"bcD":{"aC":[]},"bcg":{"aC":[]},"by2":{"aC":[]},"bv0":{"aC":[]},"bu8":{"aC":[]},"bh9":{"aC":[]},"aq6":{"af":[],"v":[]},"b3M":{"aw":[],"v":[]},"bm3":{"ah":["aq6"]},"aeR":{"aw":[],"v":[]},"af7":{"aw":[],"v":[]},"aL1":{"af":[],"v":[]},"Wr":{"af":[],"v":[]},"JL":{"aw":[],"v":[]},"aBD":{"af":[],"v":[]},"a98":{"af":[],"v":[]},"b3K":{"aw":[],"v":[]},"b3H":{"aC":[]},"bxx":{"ah":["aL1"]},"aLJ":{"aC":[]},"bmh":{"ah":["Wr"]},"bgA":{"ah":["aBD"]},"bmY":{"ah":["a98"]},"b1G":{"aw":[],"v":[]},"bhN":{"aC":[]},"bt1":{"aC":[]},"bu5":{"aC":[]},"aB_":{"af":[],"v":[]},"KO":{"af":[],"v":[]},"a0X":{"af":[],"v":[]},"KU":{"aw":[],"v":[]},"P_":{"af":[],"v":[]},"aGx":{"ah":["P_"],"eD":[]},"bfm":{"ah":["aB_"]},"bfB":{"aw":[],"v":[]},"bfl":{"ah":["KO"]},"QJ":{"aw":[],"v":[]},"aGA":{"ah":["a0X"]},"buB":{"aC":[]},"bkl":{"aw":[],"v":[]},"bkk":{"aw":[],"v":[]},"Xm":{"af":[],"v":[]},"Xn":{"af":[],"v":[]},"aGv":{"af":[],"v":[]},"ata":{"af":[],"v":[]},"aGy":{"ah":["Xm"]},"bnj":{"ah":["Xn"]},"aGw":{"ah":["aGv"]},"bxT":{"j6":[]},"aGz":{"ah":["ata"]},"by6":{"aw":[],"v":[]},"a99":{"af":[],"v":[]},"bn2":{"ah":["a99"]},"aa2":{"kL":["fA<eX>"],"ky":["fA<eX>"]},"ajJ":{"a4m":[]},"aTF":{"ji":[],"fk":[]},"ayP":{"ji":[],"fk":[]},"aV6":{"ji":[],"fk":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MH"),U:w("w5<qq>"),bz:w("u"),M:w("db<n>"),bo:w("jX"),g7:w("Uo"),gc:w("aB<iI?>"),bq:w("aB<~>"),cc:w("C5"),fS:w("EL"),an:w("IW"),bm:w("O<T1>"),X:w("O<T4>"),f3:w("O<aUo>"),aK:w("O<nr>"),V:w("O<ab>"),O:w("O<u>"),fA:w("O<lW>"),d5:w("O<aB<bB<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dJ>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jG>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jG>"),gE:w("O<Ag>"),k:w("O<oP>"),g:w("O<m4>"),D:w("O<hT>"),u:w("O<eS>"),m:w("O<vk>"),i:w("O<hI>"),aC:w("O<a9q>"),o:w("O<Ah>"),e3:w("O<aE>"),dN:w("O<p>"),v:w("O<fW>"),cR:w("O<j4>"),J:w("O<ju>"),gx:w("O<pF<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(G,G)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j6>"),p:w("O<v>"),eR:w("O<fk>"),fT:w("O<bba>"),bx:w("O<aH9>"),gz:w("O<agE>"),x:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<p?>"),Z:w("O<H?>"),cA:w("O<ck>"),A:w("cw<ah<af>>"),gL:w("ai<oP>"),R:w("ai<hT>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bB<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hI,v>"),eC:w("N<oc,n>"),cT:w("N<k2,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q8>"),gh:w("N<mV,jI<mV>>"),w:w("iF"),ei:w("iI"),g2:w("rR"),fB:w("Fp"),b6:w("Ag"),gX:w("a9i"),dt:w("lA"),ea:w("oP"),bt:w("m4"),I:w("hT"),F:w("eS"),fO:w("mV"),ff:w("vk"),fP:w("hI"),Q:w("wB"),dO:w("at6"),a:w("cu"),C:w("aE"),dw:w("auM"),di:w("aa3"),Y:w("eX"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FV"),dB:w("ds<p>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qq"),bO:w("au"),K:w("bs<p>"),b:w("bs<G>"),E:w("dJ"),W:w("bo<n>"),ac:w("bo<H>"),ex:w("k6<m4>"),cI:w("k6<n>"),cl:w("k6<G>"),b4:w("Y<lx>"),a8:w("Y<mu>"),fR:w("Y<+(n,n)>"),co:w("eb<p>"),l:w("v"),b2:w("c3<~>"),ev:w("qv<e_>"),dT:w("bk<~>"),q:w("mC"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hT>?"),c:w("ai<@>?"),aP:w("iI?"),af:w("hT?"),go:w("b3O?"),a6:w("a9r?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dJ,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dJ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2Z=new B.bL(A.aA,null,null,H.at_,null)
D.b38=new B.da(0,-0.15)
D.b39=new B.da(0.62,0)
D.b3e=new B.da(-0.35,-0.45)
D.b3p=new B.da(0.9,-0.85)
D.b5z=new B.be(H.UH,H.UH,A.fS,A.fS)
D.b5P=new B.ay(A.b8,1,A.r,-1)
D.brP=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b60=new B.ay(D.brP,1,A.r,-1)
D.b6c=new B.ay(A.aB,1.5,A.r,-1)
D.b6h=new B.ay(A.b8,1.6,A.r,-1)
D.b6x=new B.ay(A.aB,1.4,A.r,-1)
D.b7U=new B.o(null,null,null,null,null,K.Ia,A.a6)
D.c9K=new B.a8(A.a7,A.aa,A.x,G.a6w,null,null)
D.b81=new B.o(null,null,null,null,null,D.c9K,A.a6)
D.af8=new B.o(A.as,null,null,A.u5,null,null,A.n)
D.bkA=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.brM=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d8R=w([D.bkA,D.brM],x.O)
D.eCK=new B.bY(A.A,0.5,A.x,null,0,D.d8R,null,null)
D.b8k=new B.o(null,null,null,null,null,D.eCK,A.a6)
D.ZG=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b6N=new B.bG(P.w0,A.a1,A.a1,A.a1)
D.b8m=new B.o(D.ZG,null,D.b6N,null,null,null,A.n)
D.cbt=new B.a8(A.a7,A.aa,A.x,A.Sj,null,null)
D.b8t=new B.o(null,null,null,null,null,D.cbt,A.a6)
D.agM=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b8w=new B.o(D.agM,null,null,A.rr,null,null,A.n)
D.b8A=new B.o(A.jZ,null,null,null,null,null,A.a6)
D.b8D=new B.o(S.ai4,null,H.aeL,A.mI,null,null,A.n)
D.Fv=new B.o(A.dP,null,null,null,null,null,A.a6)
D.b8K=new B.o(null,null,null,null,null,E.x4,A.a6)
D.dee=w([E.aj4,A.c4],x.O)
D.cb7=new B.a8(A.b0,A.b7,A.x,D.dee,null,null)
D.b8O=new B.o(null,null,null,A.mI,null,D.cb7,A.n)
D.dpZ=w([A.bn,A.dP,A.jl],x.O)
D.a4v=new B.a8(A.aA,A.aD,A.x,D.dpZ,null,null)
D.b90=new B.o(null,null,null,null,null,D.a4v,A.n)
D.b91=new B.o(D.agM,null,null,A.la,null,null,A.n)
D.cD5=w([A.db,A.bn],x.O)
D.caY=new B.a8(A.aA,A.aD,A.x,D.cD5,null,null)
D.b95=new B.o(null,null,null,null,null,D.caY,A.n)
D.b9f=new B.o(null,null,null,null,null,G.vb,A.a6)
D.b9B=new B.o(A.aj5,null,null,null,null,null,A.a6)
D.blC=new B.u(0.5647058823529412,0,0,0,A.q)
D.afi=new B.ab(0,A.G,D.blC,A.JH,28)
D.bbW=new B.aYB()
D.bcu=new C.cAh()
D.afN=new B.cj(A.A,null,null,A.a4k,null)
D.bfl=new B.fl(null,null,null,null,null,E.nC,null,null,null,null)
D.bdf=new B.cj(A.A,null,null,D.bfl,null)
D.bUL=new B.ae(A.ed,28,A.c,null,null,null)
D.bdL=new B.cj(A.A,null,null,D.bUL,null)
D.bfi=new B.fl(2,null,null,null,null,A.c2,null,null,null,null)
D.be7=new B.cj(A.A,null,null,D.bfi,null)
D.bV5=new B.ae(K.PS,40,A.bD,null,null,null)
D.be8=new B.cj(A.A,null,null,D.bV5,null)
D.bgd=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bgq=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bgT=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bh4=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bhJ=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bi_=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bi1=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mz=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.biu=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.biC=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ah6=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bjs=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bkm=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.aho=new B.u(1,1,1,0.9725490196078431,A.q)
D.bkJ=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bl_=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bl2=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bli=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.blI=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bnn=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Zo=new B.u(0.8509803921568627,0,0,0,A.q)
D.bny=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bnF=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.aio=new B.u(0.6,0,0,0,A.q)
D.aiq=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bpp=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.up=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bpT=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bqo=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bqP=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ajn=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.ZU=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.C5=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Nf=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jE=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ajS=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.a_4=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.buH=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bvd=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bvt=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_y=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bwJ=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.bxk=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bxE=new B.hP(A.aT,!0,null,null)
D.fE8=new B.F(!0,A.aF,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4j=new B.B("Bio link",null,D.fE8,null,null,null,null,null,null,null,null,null)
D.be2=new B.cj(A.A,null,null,D.h4j,null)
D.bxT=new B.hP(A.BJ,!0,D.be2,null)
D.dRz=new B.VN(A.aG,56,Z.Pj,null,null)
D.fAE=new B.F(!0,A.bB,null,null,null,null,null,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNj=new B.B("No presentations yet",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.fFa=new B.F(!0,A.cA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new B.B(y.K,null,D.fFa,null,A.K,null,null,null,null,null,null,null)
D.d8H=w([D.dRz,A.aC,D.fNj,A.am,D.fKD],x.p)
D.by7=new B.fn(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.d8H,null)
D.NH=new C.a55(0,"none")
D.al6=new C.a55(1,"deflate")
D.al7=new C.a55(2,"bzip2")
D.byR=new B.kF(0.165,0.84,0.44,1)
D.dey=w([A.c6,A.dQ,A.aB],x.O)
D.cac=new B.a8(A.aA,A.aD,A.x,D.dey,null,null)
D.b7Z=new B.o(null,null,null,null,null,D.cac,A.n)
D.c3p=new B.ae(A.f1,null,A.ab,null,null,null)
D.beG=new B.cj(A.A,null,null,D.c3p,null)
D.bzq=new B.bN(D.b7Z,A.bi,D.beG,null)
D.buX=new B.u(0.058823529411764705,1,1,1,A.q)
D.di3=w([A.by,A.rC,A.rC,D.buX],x.O)
D.cUJ=w([0,0.32,0.7,1],x.x)
D.caO=new B.a8(A.aA,A.aD,A.x,D.di3,D.cUJ,null)
D.b7O=new B.o(null,null,null,null,null,D.caO,A.n)
D.bzx=new B.bN(D.b7O,A.bi,null,null)
D.bAF=new B.mK(1,1,null,null,null,A.br,null)
D.bAI=new B.mK(1,null,null,null,null,D.a_4,null)
D.bBb=new B.bd(125e4)
D.bBh=new B.bd(17e4)
D.bBr=new B.bd(35964e8)
D.bBy=new B.bd(55e4)
D.bBC=new B.bd(68e4)
D.bC2=new B.iq(0,0,0,5)
D.bCh=new B.R(0,16,16,0)
D.bCs=new B.R(0,36,0,36)
D.bCA=new B.R(0,54,0,0)
D.bCH=new B.R(10,0,10,3)
D.bCT=new B.iq(10,16,10,10)
D.bD4=new B.R(10,6,4,6)
D.bD7=new B.R(10,8,10,6)
D.am6=new B.R(11,8,11,11)
D.bDd=new B.R(12,0,12,24)
D.bDq=new B.R(12,12,12,4)
D.bDt=new B.R(12,12,8,12)
D.bDu=new B.R(12,14,12,10)
D.bDL=new B.R(12,8,8,12)
D.bEa=new B.R(14,14,14,0)
D.bEf=new B.R(14,14,14,90)
D.bED=new B.R(16,10,16,16)
D.bEE=new B.R(16,10,16,20)
D.amT=new B.R(16,6,16,28)
D.bFb=new B.R(18,0,18,10)
D.bFd=new B.R(18,0,18,30)
D.bFf=new B.R(18,10,18,12)
D.bFg=new B.R(18,10,18,14)
D.bFA=new B.R(18,16,14,18)
D.bFF=new B.R(18,18,18,12)
D.bFL=new B.R(18,26,18,12)
D.bFQ=new B.R(18,34,18,34)
D.bFR=new B.R(18,4,18,14)
D.bFV=new B.R(18,8,18,24)
D.bGe=new B.R(20,16,14,4)
D.bGj=new B.R(20,18,12,4)
D.bGo=new B.R(20,20,12,20)
D.bGr=new B.R(20,22,20,20)
D.bGw=new B.R(20,6,20,6)
D.bGG=new B.R(22,18,22,18)
D.bGO=new B.R(22,24,22,0)
D.bGR=new B.R(22,24,22,4)
D.bGZ=new B.R(22,60,22,22)
D.bH4=new B.R(24,24,24,22)
D.bHe=new B.R(26,10,60,10)
D.bHm=new B.R(28,44,28,44)
D.bHD=new B.R(32,44,32,44)
D.bHL=new B.R(38,30,38,20)
D.bHR=new B.R(4,0,0,6)
D.bI2=new B.iq(4,4,4,4)
D.bIv=new B.iq(6,5,6,5)
D.bIA=new B.R(6,6,8,6)
D.bIM=new B.R(8,14,8,14)
D.bIN=new B.R(8,22,8,22)
D.bIW=new B.R(8,6,12,6)
D.bJ3=new B.R(8,8,8,4)
D.anR=new B.R(9,9,9,6)
D.bJe=new B.iq(2.5,2.5,2.5,2.5)
D.bJf=new B.R(10.5,0,10.5,0)
D.bJg=new B.R(7,1.5,7,1.5)
D.d5A=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bJw=new B.uU(null,null,D.d5A,A.ya)
D.d2h=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bJx=new B.uU(null,null,D.d2h,A.ya)
D.aXf=new B.F(!0,A.aF,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3B=new B.B("WORD DESIGN",null,D.aXf,null,null,null,null,null,null,null,null,null)
D.bKc=new B.bz(1,A.bb,D.h3B,null)
D.h3e=new B.B("Slides database",null,Ac.vJ,null,null,null,null,null,null,null,null,null)
D.h0s=new B.B("Admin only \xb7 keep as many as you like",null,W.aWH,null,null,null,null,null,null,null,null,null)
D.dyZ=w([D.h3e,A.bG,D.h0s],x.p)
D.byj=new B.fn(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dyZ,null)
D.bKf=new B.bz(1,A.bb,D.byj,null)
D.fVD=new B.B("NGMY logo",null,A.fH,null,null,null,null,null,null,null,null,null)
D.bKi=new B.bz(1,A.bb,D.fVD,null)
D.fBK=new B.F(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5E=new B.B("TALK TO THE EDITOR",null,D.fBK,null,null,null,null,null,null,null,null,null)
D.bKD=new B.bz(1,A.bb,D.h5E,null)
D.fPd=new B.B("Tell the AI what to change",null,Ac.vJ,null,null,null,null,null,null,null,null,null)
D.bKX=new B.bz(1,A.bb,D.fPd,null)
D.bMs=new B.EA(!0,"video/mp4")
D.fzR=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN9=new B.B("Move presentations between devices",null,D.fzR,null,null,null,!1,null,null,1,null,null)
D.bMx=new B.dE(A.dY,A.a7,A.f,D.fN9,null)
D.fOo=new B.B("Edit in Slides",null,A.j1,null,null,null,null,null,null,null,null,null)
D.bMz=new B.dE(A.dY,A.A,A.f,D.fOo,null)
D.bMP=new B.di(1,A.cl,D.bMz,null)
D.a2E=new B.a_(60988,"MaterialIcons",!1)
D.bQh=new B.a_(61352,"MaterialIcons",!1)
D.apA=new B.a_(61531,"MaterialIcons",!1)
D.bRs=new B.a_(63062,"MaterialIcons",!1)
D.bRz=new B.a_(63109,"MaterialIcons",!1)
D.bRM=new B.a_(63206,"MaterialIcons",!1)
D.aqe=new B.a_(63238,"MaterialIcons",!1)
D.bS3=new B.a_(63338,"MaterialIcons",!1)
D.a3h=new B.a_(63365,"MaterialIcons",!1)
D.a3i=new B.a_(63367,"MaterialIcons",!1)
D.a3j=new B.a_(63368,"MaterialIcons",!1)
D.aqp=new B.a_(63384,"MaterialIcons",!1)
D.bSl=new B.a_(63525,"MaterialIcons",!1)
D.bSp=new B.a_(63568,"MaterialIcons",!1)
D.bSK=new B.a_(983072,"MaterialIcons",!1)
D.bT8=new B.a_(983271,"MaterialIcons",!0)
D.arx=new B.a_(983965,"MaterialIcons",!1)
D.ary=new B.a_(983966,"MaterialIcons",!1)
D.bU5=new B.a_(984592,"MaterialIcons",!1)
D.bUn=new B.ae(A.uS,16,A.aF,null,null,null)
D.arK=new B.ae(A.pB,18,A.c,null,null,null)
D.bUM=new B.ae(A.CQ,18,N.lG,null,null,null)
D.bVr=new B.ae(A.jL,11,null,null,null,null)
D.bVB=new B.ae(A.a2Y,null,A.et,null,null,null)
D.bW9=new B.ae(A.tc,18,A.aF,null,null,null)
D.bWf=new B.ae(A4.D3,14,null,null,null,null)
D.bWg=new B.ae(A.ek,28,A.bZ,null,null,null)
D.bWs=new B.ae(A.qS,20,A.c,null,null,null)
D.bWz=new B.ae(A.zs,null,null,null,null,null)
D.bWE=new B.ae(A.jt,18,A.h0,null,null,null)
D.bWJ=new B.ae(A.k8,null,null,null,null,null)
D.bRu=new B.a_(63065,"MaterialIcons",!1)
D.bXm=new B.ae(D.bRu,15,A.c,null,null,null)
D.bRA=new B.a_(63113,"MaterialIcons",!1)
D.bXs=new B.ae(D.bRA,null,A.ab,null,null,null)
D.bXR=new B.ae(A.uR,22,A.bL,null,null,null)
D.bYb=new B.ae(A.t8,18,null,null,null,null)
D.bYh=new B.ae(A.D9,12,A.c,null,null,null)
D.bTK=new B.a_(983687,"MaterialIcons",!1)
D.bYt=new B.ae(D.bTK,null,A.bn,null,null,null)
D.bYD=new B.ae(A.hO,null,A.bn,null,null,null)
D.bYW=new B.ae(A.pF,22,A.c,null,null,null)
D.bZ_=new B.ae(A.cC,13,A.c,null,null,null)
D.bZ5=new B.ae(A.ek,26,A.ay,null,null,null)
D.bZ9=new B.ae(A.tg,26,A.c,null,null,null)
D.Q3=new B.ae(A.jL,8,A.c,null,null,null)
D.bZu=new B.ae(A.pB,40,A.c,null,null,null)
D.bZv=new B.ae(A.bPe,null,null,null,null,null)
D.bZz=new B.ae(A.v4,20,null,null,null,null)
D.bTJ=new B.a_(983683,"MaterialIcons",!1)
D.bZL=new B.ae(D.bTJ,null,A.b3,null,null,null)
D.bZM=new B.ae(A.jL,16,A.bn,null,null,null)
D.c_6=new B.ae(A.pD,null,null,null,null,null)
D.ask=new B.ae(A.wP,22,A.c,null,null,null)
D.c_c=new B.ae(A.ed,17,A.c,null,null,null)
D.asl=new B.ae(A.jL,9,A.c,null,null,null)
D.c_h=new B.ae(A.wL,null,null,null,null,null)
D.bPv=new B.a_(57744,"MaterialIcons",!1)
D.c_o=new B.ae(D.bPv,null,null,null,null,null)
D.c_r=new B.ae(A.wL,16,null,null,null,null)
D.bUe=new B.a_(985181,"MaterialIcons",!1)
D.I2=new B.ae(D.bUe,null,null,null,null,null)
D.c_D=new B.ae(A.k8,16,A.bL,null,null,null)
D.bTA=new B.a_(983615,"MaterialIcons",!1)
D.c_F=new B.ae(D.bTA,12,A.c,null,null,null)
D.asr=new B.ae(A.zb,16,null,null,null,null)
D.c_N=new B.ae(A.ed,21,A.c,null,null,null)
D.c_S=new B.ae(A.hO,17,A.c,null,null,null)
D.c_T=new B.ae(A.uR,null,null,null,null,null)
D.c0a=new B.ae(A.a3X,20,A.aF,null,null,null)
D.c0p=new B.ae(A.oF,22,E.nC,null,null,null)
D.c0y=new B.ae(A.qR,13,A.ab,null,null,null)
D.c0B=new B.ae(A.ari,20,A.aF,null,null,null)
D.bPc=new B.a_(57495,"MaterialIcons",!1)
D.c0G=new B.ae(D.bPc,null,null,null,null,null)
D.c0K=new B.ae(A.oG,18,A.c,null,null,null)
D.c16=new B.ae(A.v8,28,A.c,null,null,null)
D.c1k=new B.ae(D.aqe,null,A.aB,null,null,null)
D.c1l=new B.ae(A.qS,22,A.c,null,null,null)
D.asA=new B.ae(A.a2A,16,null,null,null,null)
D.c27=new B.ae(A.uR,32,A.c,null,null,null)
D.c2T=new B.ae(A.ja,22,A.c,null,null,null)
D.c2X=new B.ae(A.tg,22,A.ab,null,null,null)
D.asR=new B.ae(A.uS,null,A.bW,null,null,null)
D.c3V=new B.ae(A.qM,18,null,null,null,null)
D.c4x=new B.ae(A.ed,18,A.bl,null,null,null)
D.c4E=new B.ae(A.ard,null,null,null,null,null)
D.c54=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aX3,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.frp=new B.F(!0,A.bN,null,null,null,null,null,A.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5m=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.frp,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.c5N=new B.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.d9U=w([A.dP,A.aB],x.O)
D.c7V=new B.a8(A.a7,A.aa,A.x,D.d9U,null,null)
D.c86=new B.a8(A.b0,A.b7,A.Wl,A.aA0,null,null)
D.bgI=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.blK=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bpq=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bjj=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cUL=w([D.bgI,D.blK,D.bpq,D.bjj],x.O)
D.c8r=new B.a8(A.aA,A.aD,A.x,D.cUL,A.IA,null)
D.dz6=w([A.cI,A.bE,A.b8],x.O)
D.c8t=new B.a8(A.b0,A.b7,A.Wl,D.dz6,null,null)
D.dAH=w([A.bn,A.ci],x.O)
D.c8y=new B.a8(A.a7,A.aa,A.x,D.dAH,null,null)
D.dvb=w([A.fB,A.d3,A.at],x.O)
D.c8A=new B.a8(A.aA,A.aD,A.x,D.dvb,null,null)
D.dgk=w([A.cJ,A.fr],x.O)
D.c8E=new B.a8(A.a7,A.aa,A.x,D.dgk,null,null)
D.dz0=w([N.lG,A.d3],x.O)
D.atE=new B.a8(A.a7,A.aa,A.x,D.dz0,null,null)
D.bms=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dyY=w([D.bms,A.wp,A.c2],x.O)
D.c8I=new B.a8(A.a7,A.aa,A.x,D.dyY,null,null)
D.dbF=w([A.b4,A.d2,A.es],x.O)
D.c8J=new B.a8(A.aA,A.aD,A.x,D.dbF,null,null)
D.Ql=new B.a8(A.a7,A.aa,A.x,A.IT,null,null)
D.bvR=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cNC=w([D.bvR,A.c2,A.jF],x.O)
D.atJ=new B.a8(A.aA,A.aD,A.x,D.cNC,null,null)
D.dmc=w([A.uj,A.aE,D.C5],x.O)
D.c9M=new B.a8(A.a7,A.aa,A.x,D.dmc,null,null)
D.bxl=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bkl=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bqD=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.daK=w([D.bxl,D.bkl,D.bqD],x.O)
D.atK=new B.a8(A.a7,A.aa,A.x,D.daK,null,null)
D.bmu=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.cbM=w([AA.akM,D.bmu],x.O)
D.c9V=new B.a8(A.b0,A.b7,A.x,D.cbM,null,null)
D.d8E=w([A.mT,A.bD],x.O)
D.c9Z=new B.a8(A.b0,A.b7,A.x,D.d8E,null,null)
D.drI=w([A.aB,A.dQ],x.O)
D.ca4=new B.a8(A.a7,A.aa,A.x,D.drI,null,null)
D.ajA=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aBM=w([D.ajA,D.jE,D.Mz],x.O)
D.caz=new B.a8(A.aA,A.aD,A.x,D.aBM,null,null)
D.cNu=w([A.dA,A.dF],x.O)
D.caJ=new B.a8(A.b0,A.b7,A.x,D.cNu,null,null)
D.doy=w([A.yc,A.yl],x.O)
D.cbv=new B.a8(A.a7,A.aa,A.x,D.doy,null,null)
D.fXe=new B.B("Which Bio link?",null,A.cG,null,null,null,null,null,null,null,null,null)
D.cbI=new B.qb(null,D.fXe,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zR=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a8w=new C.lf(2,"elegantNavy")
D.hJI=w([A.ZR,D.jE,A.c2],x.O)
D.kd=new C.yf(0,"classic")
D.a8l=new C.jG("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a8w,4294967035,4279378237,4290283019,D.kd)
D.aLq=new C.lf(3,"elegantGold")
D.bgc=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bho=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ahT=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hJa=w([D.bgc,D.bho,D.ahT],x.O)
D.a8j=new C.jG("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aLq,4294966515,4281016592,4289102906,D.kd)
D.dX6=new C.lf(22,"goldRibbon")
D.hJ6=w([A.ZR,D.jE,A.iy],x.O)
D.a8c=new C.jG("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dX6,4294967035,4279378237,4291404327,D.kd)
D.dX7=new C.lf(23,"goldBaroque")
D.aiD=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hJc=w([D.aiD,A.aE,A.jF],x.O)
D.a8d=new C.jG("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dX7,4294964964,4283053072,4292128567,D.kd)
D.dX9=new C.lf(4,"elegantEmerald")
D.biK=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bjK=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hJi=w([D.biK,D.bjK,A.iy],x.O)
D.a8e=new C.jG("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dX9,4294376440,4279122734,4291404327,D.kd)
D.dXa=new C.lf(5,"elegantBurgundy")
D.bo5=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hJp=w([D.bo5,A.agY,A.iy],x.O)
D.a8h=new C.jG("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dXa,4294965238,4283043359,4291404327,D.kd)
D.dX3=new C.lf(19,"goldFiligree")
D.Nn=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hJd=w([D.Nn,A.aE,A.jF],x.O)
D.a8f=new C.jG("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dX3,4294966259,4279378237,4292128567,D.kd)
D.dX4=new C.lf(20,"goldLaurel")
D.bvH=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hJq=w([A.Mr,A.iy,D.bvH],x.O)
D.a8g=new C.jG("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dX4,4294966776,4282000405,4291404327,D.kd)
D.dX5=new C.lf(21,"goldCrest")
D.agP=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bvO=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hJf=w([D.agP,A.aE,D.bvO],x.O)
D.a8k=new C.jG("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dX5,4294965484,4283053072,4292128567,D.kd)
D.dX8=new C.lf(24,"goldStar")
D.bxc=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hJj=w([D.bxc,A.aE,D.jE],x.O)
D.a8i=new C.jG("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dX8,4294966518,4279378237,4292128567,D.kd)
D.Ic=w([D.a8l,D.a8j,D.a8c,D.a8d,D.a8e,D.a8h,D.a8f,D.a8g,D.a8k,D.a8i],x.h)
D.r3=new C.mV(0,"blank")
D.U1=new C.mV(1,"title")
D.nd=new C.mV(2,"titleContent")
D.egJ=new C.mV(3,"twoColumn")
D.Ea=new C.mV(4,"section")
D.egK=new C.mV(5,"comparison")
D.Jr=new C.mV(6,"flashcard")
D.Js=new C.mV(7,"quiz")
D.Jt=new C.mV(8,"worksheet")
D.au3=w([D.r3,D.U1,D.nd,D.egJ,D.Ea,D.egK,D.Jr,D.Js,D.Jt],B.at("O<mV>"))
D.aCU=w([Aq.Z5,A.dF],x.O)
D.l_=w([A.c2,A.bL,A.hz,A.id,D.C5],x.O)
D.dSQ=new C.jd("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aCU,D.l_)
D.bw5=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bo3=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d8S=w([D.bw5,D.bo3],x.O)
D.dSH=new C.jd("confetti","Golden Confetti","Together we rise",D.d8S,D.l_)
D.d5H=w([A.np,A.YF],x.O)
D.dSI=new C.jd("crown","Crown of Glory","Built for our community",D.d5H,D.l_)
D.bk8=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bnH=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dd7=w([D.bk8,D.bnH],x.O)
D.vd=w([A.bN,A.aS,A.c,A.bj,A.an],x.O)
D.dSC=new C.jd("aurora","Aurora Gala","A brighter future, together",D.dd7,D.vd)
D.bps=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.doH=w([G.agp,D.bps],x.O)
D.dST=new C.jd("champagne","Champagne Toast","Cheers to every member",D.doH,D.l_)
D.dSU=new C.jd("diamonds","Diamond Rain","Every member is a jewel",A1.aDF,D.vd)
D.bhc=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bn6=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dum=w([D.bhc,D.bn6],x.O)
D.dSx=new C.jd("starburst","Golden Starburst","Thank you!",D.dum,D.l_)
D.cbT=w([A.fq,A.yp],x.O)
D.agz=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RX=w([A.pm,A.ix,A.wq,A.od,D.agz],x.O)
D.dT0=new C.jd("balloons","Luxury Balloons","Let's celebrate",D.cbT,D.RX)
D.d4T=w([A.YU,A.w],x.O)
D.dSP=new C.jd("galaxy","Galaxy Spiral","The sky is not the limit",D.d4T,D.vd)
D.btP=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dkU=w([A.kt,D.btP],x.O)
D.dSK=new C.jd("redcarpet","Red Carpet","Tonight we shine",D.dkU,D.l_)
D.brj=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bpc=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dpE=w([D.brj,D.bpc],x.O)
D.dSz=new C.jd("coins","Gold Coin Rain","Every contribution counts",D.dpE,D.l_)
D.dxg=w([A.dA,A.ic],x.O)
D.dSF=new C.jd("lanterns","Sky Lanterns","Lighting the way together",D.dxg,D.l_)
D.blo=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d2E=w([A.yr,D.blo],x.O)
D.dSB=new C.jd("hearts","Floating Hearts","Made with love",D.d2E,D.RX)
D.bhS=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.biR=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dyW=w([D.bhS,D.biR],x.O)
D.dT_=new C.jd("petals","Rose Petals","Thank you, from our hearts",D.dyW,D.RX)
D.buV=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.duK=w([A.lh,D.buV],x.O)
D.dSw=new C.jd("butterflies","Golden Butterflies","New beginnings",D.duK,D.l_)
D.bqy=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d3K=w([D.bqy,A.w],x.O)
D.dSS=new C.jd("neon","Neon Night","Let's go!",D.d3K,D.vd)
D.bmJ=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.drV=w([A.MW,D.bmJ],x.O)
D.dSV=new C.jd("disco","Disco Ball","Party time",D.drV,D.vd)
D.br8=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.drp=w([A.fB,D.br8],x.O)
D.dSA=new C.jd("sunrise","Golden Sunrise","A new day for our community",D.drp,D.l_)
D.dr_=w([A.rI,A.dF],x.O)
D.dSW=new C.jd("pearls","Ocean Pearls","Deep roots, bright future",D.dr_,D.vd)
D.bkf=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.drd=w([D.bkf,A.dF],x.O)
D.dSZ=new C.jd("snow","Winter Gala","Warm wishes to all",D.drd,D.vd)
D.bgl=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bhD=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dxM=w([D.bgl,D.bhD],x.O)
D.dSO=new C.jd("laurel","Laurel Victory","We did it together",D.dxM,D.l_)
D.bgb=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bnD=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d1A=w([D.bgb,D.bnD],x.O)
D.dSY=new C.jd("ribbons","Silk Ribbons","Elegance in every step",D.d1A,D.l_)
D.boP=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cNr=w([G.C4,D.boP],x.O)
D.dSL=new C.jd("kente","Kente Pride","Proud of our roots",D.cNr,D.l_)
D.bs_=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bvi=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.deW=w([D.bs_,D.bvi],x.O)
D.dSG=new C.jd("trophy","Trophy Shine","Winners together",D.deW,D.l_)
D.drl=w([Ar.MG,A.w],x.O)
D.dSy=new C.jd("shooting","Shooting Stars","Make a wish",D.drl,D.vd)
D.bgu=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.akx=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dy4=w([D.bgu,D.akx],x.O)
D.dSM=new C.jd("bokeh","Golden Bokeh","Shine bright",D.dy4,D.l_)
D.bgV=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dlL=w([D.bgV,A.w],x.O)
D.dSE=new C.jd("orbits","Golden Orbits","Always moving forward",D.dlL,D.l_)
D.buW=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dhW=w([A.ahO,D.buW],x.O)
D.dSJ=new C.jd("flowers","Blooming Garden","Growing together",D.dhW,D.RX)
D.bgG=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bht=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dwI=w([D.bgG,D.bht],x.O)
D.dSD=new C.jd("music","Music Party","Celebrate with us",D.dwI,D.vd)
D.biv=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bvK=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d2S=w([D.biv,D.bvK],x.O)
D.dSX=new C.jd("mandala","Royal Mandala","Harmony and unity",D.d2S,D.l_)
D.di1=w([G.C4,D.akx],x.O)
D.dSR=new C.jd("sparklers","Golden Sparklers","Light up the night",D.di1,D.l_)
D.dSN=new C.jd("city","City Lights","The whole city celebrates",D.aCU,D.l_)
D.Il=w([D.dSQ,D.dSH,D.dSI,D.dSC,D.dST,D.dSU,D.dSx,D.dT0,D.dSP,D.dSK,D.dSz,D.dSF,D.dSB,D.dT_,D.dSw,D.dSS,D.dSV,D.dSA,D.dSW,D.dSZ,D.dSO,D.dSY,D.dSL,D.dSG,D.dSy,D.dSM,D.dSE,D.dSJ,D.dSD,D.dSX,D.dSR,D.dSN],B.at("O<jd>"))
D.eII=new B.y("","No ring")
D.eZc=new B.y("platinum","Platinum")
D.eVe=new B.y("glow","Glow")
D.eMs=new B.y("double","Double line")
D.eLl=new B.y("framed","Gallery frame")
D.eIe=new B.y("rosegold","Rose gold")
D.eW3=new B.y("jewels","Jeweled")
D.eSF=new B.y("aurora","Aurora")
D.Ds=w([D.eII,A.UN,D.eZc,D.eVe,M.aSd,D.eMs,A.aSb,D.eLl,D.eIe,D.eW3,D.eSF],x.L)
D.cwv=w([D.a8f,D.a8g,D.a8k,D.a8c,D.a8d,D.a8i],x.h)
D.c00=new B.ae(G.apa,16,null,null,null,null)
D.bbj=new B.w5(A.bp,D.c00,null,x.U)
D.bPE=new B.a_(58027,"MaterialIcons",!1)
D.bUt=new B.ae(D.bPE,16,null,null,null,null)
D.bbh=new B.w5(A.K,D.bUt,null,x.U)
D.bPF=new B.a_(58030,"MaterialIcons",!1)
D.bYA=new B.ae(D.bPF,16,null,null,null,null)
D.bbk=new B.w5(A.e5,D.bYA,null,x.U)
D.cCQ=w([D.bbj,D.bbh,D.bbk],B.at("O<w5<qq>>"))
D.cKG=w([A.C9,A.hI],x.O)
D.cKH=w([A.b4,A.be,A.es],x.O)
D.RM=w([A.bL,A.id,A.hz,A.aE,A.od],x.O)
D.cNx=w([A.c2,D.jE,D.Mz],x.O)
D.cO4=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eG1=new B.y(4278913286,4280030216)
D.eGj=new B.y(4279373061,4278518787)
D.eGq=new B.y(4279898630,4278847235)
D.dei=w([D.eG1,D.eGj,D.eGq],x.n)
D.d9D=w(["\u265b","\u269c","\u2726"],x.s)
D.dX1=new C.yh("Royal Onyx & Gold",D.dei,4292128567,4294370209,4294965479,3874020544,D.d9D)
D.eFP=new B.y(4278326799,4278598442)
D.eFR=new B.y(4278395929,4278258953)
D.eFY=new B.y(4278599728,4278327826)
D.dx7=w([D.eFP,D.eFR,D.eFY],x.n)
D.d3C=w(["\u269c","\u2756","\u2727"],x.s)
D.dWZ=new C.yh("Imperial Emerald",D.dx7,4293050997,4294699968,4294180856,3872254170,D.d3C)
D.eFS=new B.y(4278455076,4278918747)
D.eFX=new B.y(4278587439,4278322714)
D.eGa=new B.y(4279051376,4278455076)
D.dv7=w([D.eFS,D.eFX,D.eGa],x.n)
D.dmw=w(["\u2654","\u2726","\u2748"],x.s)
D.dWT=new C.yh("Sapphire Crown",D.dv7,4291417834,4294967295,4294310143,3871986666,D.dmw)
D.eGo=new B.y(4279894534,4283041554)
D.eGA=new B.y(4281008906,4279042307)
D.eGI=new B.y(4284221976,4279894534)
D.dBn=w([D.eGo,D.eGA,D.eGI],x.n)
D.d51=w(["\u265b","\u2766","\u2726"],x.s)
D.dWV=new C.yh("Ruby Throne",D.dBn,4293378685,4294963145,4294964466,3874213833,D.d51)
D.eGi=new B.y(4279371039,4281995100)
D.eGs=new B.y(4280092723,4278714896)
D.eGF=new B.y(4283045242,4279371039)
D.dxv=w([D.eGi,D.eGs,D.eGF],x.n)
D.dvv=w(["\u2655","\u2756","\u2727"],x.s)
D.dX_=new C.yh("Amethyst Palace",D.dxv,4293314984,4294963421,4294702591,3873229802,D.dvv)
D.eFU=new B.y(4278519045,4280032287)
D.eGb=new B.y(4279111184,4278321666)
D.eGx=new B.y(4280492839,4278716426)
D.dtP=w([D.eFU,D.eGb,D.eGx],x.n)
D.dkG=w(["\u2726","\u25c6","\u2742"],x.s)
D.dWX=new C.yh("Obsidian & Platinum",D.dtP,4293256418,4294967295,4294638330,3872378836,D.dkG)
D.eGp=new B.y(4279896588,4282194463)
D.eGy=new B.y(4280553487,4279043334)
D.eGG=new B.y(4283048488,4279896588)
D.dk4=w([D.eGp,D.eGy,D.eGG],x.n)
D.dzq=w(["\u2766","\u273f","\u2727"],x.s)
D.dWU=new C.yh("Rose Gold Velvet",D.dk4,4293440672,4294960345,4294964979,3874214602,D.dzq)
D.eFV=new B.y(4278520340,4279180595)
D.eG_=new B.y(4278718495,4278322443)
D.eGm=new B.y(4279510591,4278520340)
D.cUp=w([D.eFV,D.eG_,D.eGm],x.n)
D.dlr=w(["\u269c","\u2736","\u2756"],x.s)
D.dWY=new C.yh("Midnight Brass",D.cUp,4291405148,4293975208,4294439914,3872837564,D.dlr)
D.eGV=new B.y(4294703086,4293780428)
D.eGR=new B.y(4294307549,4293187253)
D.eGW=new B.y(4294966517,4293977807)
D.d7p=w([D.eGV,D.eGR,D.eGW],x.n)
D.dlP=w(["\u269c","\u265b","\u2726"],x.s)
D.dX0=new C.yh("Ivory Marble & Gold",D.d7p,4289760572,4286209048,4280951062,3863625518,D.dlP)
D.eG5=new B.y(4278978566,4280555024)
D.eGl=new B.y(4279504137,4278518530)
D.eGC=new B.y(4281211923,4278978566)
D.d4S=w([D.eG5,D.eGl,D.eGC],x.n)
D.dwi=w(["\u2742","\u2726","\u265c"],x.s)
D.dWW=new C.yh("Onyx & Copper",D.d4S,4291856987,4294365880,4294964718,3873885630,D.dwi)
D.cOc=w([D.dX1,D.dWZ,D.dWT,D.dWV,D.dX_,D.dWX,D.dWU,D.dWY,D.dX0,D.dWW],B.at("O<yh>"))
D.cQC=w([A.aE,D.C5,A.id],x.O)
D.eOI=new B.y("Original",null)
D.eOS=new B.y("Wide 16:9",1.7777777777777777)
D.eRf=new B.y("Landscape 3:2",1.5)
D.eO8=new B.y("Photo 4:3",1.3333333333333333)
D.f26=new B.y("Portrait 3:4",0.75)
D.aA9=w([D.eOI,D.eOS,D.eRf,D.eO8,M.aS1,D.f26],B.at("O<+(n,G?)>"))
D.aAa=w([A.id,A.bT,A.b9,A.bc],x.O)
D.eRr=new B.y("","Original")
D.eTo=new B.y("circle","Circle")
D.f_0=new B.y("rounded","Rounded")
D.f00=new B.y("triangle","Triangle")
D.eVv=new B.y("hexagon","Hexagon")
D.eTP=new B.y("diamond","Diamond")
D.eSE=new B.y("arch","Arch")
D.Dy=w([D.eRr,D.eTo,D.f_0,D.f00,D.eVv,D.eTP,D.eSE],x.L)
D.dRW=new C.lx("classic_blue","Classic Blue","Normal",A.bn,A.c,A.li,A.db,A.aM)
D.dSb=new C.lx("campus_green","Campus Green","Normal",A.b3,A.nz,A.ul,A.hh,A.cQ)
D.dS2=new C.lx("warm_sand","Warm Sand","Normal",A.e_,A.hz,A.bL,A.i1,A.oi)
D.dS9=new C.lx("slate_minimal","Slate Minimal","Normal",A.bx,A.aS,A.bj,A.a_,A.aM)
D.dRV=new C.lx("coral_fresh","Coral Fresh","Normal",A.c6,A.i_,A.qe,A.ku,A.ue)
D.dSa=new C.lx("lavender_calm","Lavender Calm","Normal",A.b8,A.pj,A.om,A.nx,A.kq)
D.dRX=new C.lx("ocean_breeze","Ocean Breeze","Normal",A.fr,A.rQ,A.w9,A.ug,A.ok)
D.ajI=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dS7=new C.lx("berry_pop","Berry Pop","Normal",A.fe,D.ajI,A.kM,G.a_v,A.Ca)
D.dRY=new C.lx("midnight_pro","Midnight Pro","Professional",A.aB,A.a_,A.dA,A.kM,A.cx)
D.dS6=new C.lx("executive_navy","Executive Navy","Professional",A.d7,A.aiT,A.db,A.lg,A.bN)
D.dS4=new C.lx("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.br,A.a_,A.aS,A.cx)
D.dRZ=new C.lx("corporate_steel","Corporate Steel","Professional",A.on,A.a_,A.mW,A.fM,A.bN)
D.dS1=new C.lx("gold_luxe","Gold Luxe","Luxury",A.mN,A.dX,A.pl,A.m7,A.bL)
D.brd=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dS5=new C.lx("rose_gold_elite","Rose Gold Elite","Luxury",A.hI,D.brd,A.a_c,A.ix,A.od)
D.dS8=new C.lx("platinum_night","Platinum Night","Luxury",A.cx,A.dF,A.br,A.aS,A.bj)
D.dSc=new C.lx("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.qk,A.eZ,A.qt,A.jX)
D.dRU=new C.lx("royal_purple","Royal Purple","Luxury",A.nw,A.Zc,A.kq,A.kM,A.Mq)
D.dS3=new C.lx("neon_pitch","Neon Pitch","Bold",A.b9,A.dF,A.a_,A.aZ,A.bj)
D.dS0=new C.lx("crimson_impact","Crimson Impact","Bold",A.bD,A.kt,A.em,A.rR,A.eU)
D.dS_=new C.lx("sunset_gallery","Sunset Gallery","Bold",A.fs,A.ue,A.ku,A.qe,A.mU)
D.Iv=w([D.dRW,D.dSb,D.dS2,D.dS9,D.dRV,D.dSa,D.dRX,D.dS7,D.dRY,D.dS6,D.dS4,D.dRZ,D.dS1,D.dS5,D.dS8,D.dSc,D.dRU,D.dS3,D.dS0,D.dS_],B.at("O<lx>"))
D.d1k=w([A.c2,D.jE],x.O)
D.dko=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eSo=new B.y("Faces & people",D.dko)
D.cQG=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eEE=new B.y("Ideas & work",D.cQG)
D.da8=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eVA=new B.y("Nature",D.da8)
D.dkx=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eOG=new B.y("Places & things",D.dkx)
D.ddQ=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eSJ=new B.y("Symbols",D.ddQ)
D.d1q=w([D.eSo,D.eEE,D.eVA,D.eOG,D.eSJ],B.at("O<+(n,ai<n>)>"))
D.bgL=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d1M=w([A.c2,D.ahT,D.bgL],x.O)
D.baz=new B.ab(0,A.G,A.FH,A.aMg,40)
D.bab=new B.ab(0,A.G,A.pg,A.ev,8)
D.d2_=w([D.baz,D.bab],x.V)
D.d2y=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aAy=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5H=w([A.id,A.es,A.bD,A.as,A.c6],x.O)
D.d3v=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ai8=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d3H=w([A.a_1,D.ai8,A.a_1],x.O)
D.d3M=w([A.iy,D.jE,D.Mz],x.O)
D.eOs=new B.y(A.bp,D.a3i)
D.ePV=new B.y(A.K,D.a3h)
D.eJu=new B.y(A.e5,D.a3j)
D.d4M=w([D.eOs,D.ePV,D.eJu],B.at("O<+(qq,a_)>"))
D.d4P=w([A.b8,A.aB],x.O)
D.d1=new C.JM(0,"text")
D.lV=new C.JM(1,"image")
D.fj=new C.JM(2,"shape")
D.U0=new C.JM(3,"pdf")
D.ls=new C.JM(4,"signature")
D.a8G=new C.JM(5,"bio")
D.d5N=w([D.d1,D.lV,D.fj,D.U0,D.ls,D.a8G],B.at("O<JM>"))
D.d5O=w([A.bs,A.cK],B.at("O<IE>"))
D.d6t=w(["School","Documents","Sign & present"],x.s)
D.baF=new B.ab(0,A.G,A.akm,A.vy,28)
D.d6R=w([D.baF],x.V)
D.d79=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.S4=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAZ=w([A.id,A.Gy,A.bj,A.c,A.pm,A.aE],x.O)
D.f1u=new B.y(0.1,0.08)
D.eVy=new B.y(0.3,0.05)
D.eIX=new B.y(0.55,0.1)
D.eNo=new B.y(0.8,0.06)
D.eQG=new B.y(0.92,0.16)
D.eQ9=new B.y(0.2,0.2)
D.eNT=new B.y(0.7,0.22)
D.eUb=new B.y(0.05,0.4)
D.eR7=new B.y(0.95,0.45)
D.eJK=new B.y(0.12,0.7)
D.eM6=new B.y(0.88,0.75)
D.eMe=new B.y(0.4,0.9)
D.eHc=new B.y(0.65,0.93)
D.eN1=new B.y(0.25,0.97)
D.eOp=new B.y(0.85,0.9)
D.eKF=new B.y(0.5,0.04)
D.d8N=w([D.f1u,D.eVy,D.eIX,D.eNo,D.eQG,D.eQ9,D.eNT,D.eUb,D.eR7,D.eJK,D.eM6,D.eMe,D.eHc,D.eN1,D.eOp,D.eKF],x.G)
D.d8W=w([A.c,A.hI,A.aG,A.aV],x.O)
D.eil=new C.k2("office_blue","Office Blue",A.bn,A.db,A.aM,A.c,A.li)
D.eiw=new C.k2("campus_green","Campus Green",A.b3,A.hh,A.cQ,A.nz,A.ul)
D.eim=new C.k2("sunset","Sunset",A.fs,A.ku,A.oi,A.i_,A.qe)
D.ein=new C.k2("midnight","Midnight",A.aB,A.kM,A.cx,A.a_,A.dA)
D.eiy=new C.k2("classic","Classic",A.d3,A.dX,A.m8,A.hz,A.fA)
D.eiv=new C.k2("rose_gold","Rose Gold",A.hI,A.ys,A.yr,A.wq,A.C9)
D.eig=new C.k2("ocean_teal","Ocean Teal",A.fr,A.ug,A.ok,A.rQ,A.w9)
D.eif=new C.k2("slate_pro","Slate Pro",A.bx,A.a_,A.aM,A.aS,A.bj)
D.eie=new C.k2("neon_night","Neon Night",A.b9,A.aZ,A.bj,A.dF,A.a_)
D.eiq=new C.k2("lavender","Lavender",A.b8,A.nx,A.kq,A.pj,A.om)
D.eis=new C.k2("coral","Coral",A.c6,A.ku,A.ue,A.i_,A.mU)
D.eih=new C.k2("forest","Forest",A.hx,A.ea,A.cm,A.m9,A.et)
D.eii=new C.k2("berry","Berry",A.fe,G.a_v,A.Ca,D.ajI,A.kM)
D.eip=new C.k2("sand","Sand",A.e_,A.i1,A.oi,A.hz,A.bL)
D.eiu=new C.k2("ice","Ice",A.on,A.G2,A.aM,A.oj,A.fM)
D.eik=new C.k2("charcoal","Charcoal",A.an,A.aS,A.cx,A.br,A.a_)
D.eid=new C.k2("mint","Mint",A.aV,A.fZ,A.hh,A.m9,A.qt)
D.eit=new C.k2("crimson","Crimson",A.bD,A.mT,A.kt,A.Gw,A.rR)
D.bjJ=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eio=new C.k2("gold","Gold",A.mN,A.yc,A.pl,D.bjJ,A.m7)
D.eir=new C.k2("aqua","Aqua",A.bU,A.Gg,A.ph,A.qh,A.pn)
D.eij=new C.k2("plum","Plum",A.nw,A.yp,A.Ca,A.G3,A.rM)
D.eix=new C.k2("steel","Steel",A.d7,A.db,A.br,A.li,A.lg)
D.a5X=w([D.eil,D.eiw,D.eim,D.ein,D.eiy,D.eiv,D.eig,D.eif,D.eie,D.eiq,D.eis,D.eih,D.eii,D.eip,D.eiu,D.eik,D.eid,D.eit,D.eio,D.eir,D.eij,D.eix],B.at("O<k2>"))
D.d9i=w([A.c2,A.jF],x.O)
D.U2=new C.hI(10,"rotate3d")
D.Jv=new C.hI(8,"flip")
D.aLJ=new C.hI(19,"spiral")
D.r4=new C.hI(16,"bounce")
D.aLM=new C.hI(9,"flipVertical")
D.d9j=w([D.U2,D.Jv,D.aLJ,D.r4,D.aLM],x.i)
D.ep=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d9G=w([0.62,1],x.x)
D.dah=w([0,0.32,0.68,1],x.x)
D.ne=new C.hI(6,"zoom")
D.vs=new C.hI(4,"slideUp")
D.vr=new C.hI(2,"slideLeft")
D.das=w([D.ne,D.Jv,D.vs,D.U2,D.vr],x.i)
D.daY=w([A.bT,A.hI,A.ix,A.id,A.c],x.O)
D.bat=new B.ab(0,A.G,D.aio,A.vy,30)
D.dbL=w([D.bat],x.V)
D.etW=new B.p(0,-2.5)
D.etN=new B.p(-2.5,0)
D.es_=new B.p(2.5,0)
D.dbO=w([A.Ug,A.a96,A.aMU,A.a95,D.etW,A.a98,D.etN,D.es_],x.dN)
D.IE=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.dcl=w([23,114,69,56,80,144],x.t)
D.dcP=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.ddg=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.df0=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.df5=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bm=new C.vk(0,"rectangle")
D.f2=new C.vk(1,"circle")
D.lt=new C.vk(6,"hexagon")
D.dfm=w([D.bm,D.f2,D.lt],x.m)
D.oV=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ajR=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dfW=w([D.ajR,A.ea],x.O)
D.eJd=new B.y("","Classic")
D.eHr=new B.y("caps","Bold caps")
D.eUe=new B.y("elegant","Elegant")
D.f_k=new B.y("shadow","Shadow")
D.eNM=new B.y("neon","Neon glow")
D.eY0=new B.y("marker","Highlighter")
D.f_y=new B.y("stamp","Stamp")
D.eME=new B.y("threed","3D")
D.eUL=new B.y("fire","Fire")
D.eVK=new B.y("ice","Ice")
D.eTn=new B.y("chalk","Chalk")
D.eTs=new B.y("comic","Comic")
D.f0Q=new B.y("softglow","Soft glow")
D.eWN=new B.y("lowercase","Lowercase")
D.eTX=new B.y("double","Echo")
D.f0Z=new B.y("whisper","Whisper")
D.aBW=w([D.eJd,D.eHr,D.eUe,D.f_k,D.eNM,M.aSc,D.eY0,D.f_y,M.aSe,D.eME,M.aS6,D.eUL,D.eVK,D.eTn,D.eTs,A.UN,At.aSf,D.f0Q,D.eWN,D.eTX,D.f0Z],x.L)
D.dhg=w([3,5,7,10,12,15],x.t)
D.diS=w([A.bT,A.bL,A.c,A.ey,A.cI],x.O)
D.dJo=new C.tQ(10,"cardWorld")
D.E3=new C.Cd(3,"rounded")
D.e_1=new C.lA("world","NGMY World",D.dJo,D.E3,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dJp=new C.tQ(11,"cardSplit")
D.dZY=new C.lA("business","Business Wire",D.dJp,D.E3,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dJq=new C.tQ(12,"cardBreaking")
D.e_a=new C.lA("breaking","Breaking Red",D.dJq,D.E3,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dJr=new C.tQ(13,"cardFeature")
D.e_3=new C.lA("feature","Tech Feature",D.dJr,D.E3,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aKm=new C.tQ(6,"circle")
D.aKg=new C.Cd(4,"circle")
D.e_7=new C.lA("parchment","Royal Circle",D.aKm,D.aKg,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dZX=new C.lA("ocean","Blue Ocean",D.aKm,D.aKg,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dJu=new C.tQ(7,"rail")
D.aKf=new C.Cd(1,"double")
D.dZZ=new C.lA("forest","Green Leaf",D.dJu,D.aKf,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aKj=new C.tQ(1,"sideBySide")
D.e_c=new C.lA("herald","NGMY Herald",D.aKj,D.E3,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aKi=new C.tQ(0,"classic")
D.a7S=new C.Cd(9,"shadow")
D.e_b=new C.lA("daily","The Daily",D.aKi,D.a7S,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dJs=new C.tQ(2,"splash")
D.aKh=new C.Cd(6,"cutCorner")
D.dZW=new C.lA("tabloid","Big Tabloid",D.dJs,D.aKh,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aKn=new C.tQ(9,"minimal")
D.e_6=new C.lA("modern","Modern Digest",D.aKn,D.E3,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aKk=new C.tQ(3,"magazine")
D.aKe=new C.Cd(0,"plain")
D.e_2=new C.lA("midnight","Midnight Edition",D.aKk,D.aKe,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dJv=new C.tQ(8,"banner")
D.e_4=new C.lA("metro","Metro Wire",D.dJv,D.aKh,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dJn=new C.Cd(8,"arch")
D.e_5=new C.lA("sunrise","Sunrise Post",D.aKk,D.dJn,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aKl=new C.tQ(5,"scrapbook")
D.dJm=new C.Cd(5,"tape")
D.e_0=new C.lA("neon","Neon Beat",D.aKl,D.dJm,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dJt=new C.tQ(4,"wrap")
D.e_d=new C.lA("gold","Golden Press",D.dJt,D.a7S,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.e_e=new C.lA("minimal","Paper White",D.aKn,D.a7S,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.e__=new C.lA("gazette","Fresh Gazette",D.aKi,D.aKf,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.e_9=new C.lA("times","Classic Times",D.aKj,D.aKe,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Ty=new C.Cd(2,"polaroid")
D.e_8=new C.lA("scrapbook","Memory Scrapbook",D.aKl,D.Ty,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a6e=w([D.e_1,D.dZY,D.e_a,D.e_3,D.e_7,D.dZX,D.dZZ,D.e_c,D.e_b,D.dZW,D.e_6,D.e_2,D.e_4,D.e_5,D.e_0,D.e_d,D.e_e,D.e__,D.e_9,D.e_8],B.at("O<lA>"))
D.dj4=w([0.45,1],x.x)
D.IK=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dju=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hDY=new C.oZ("Original",0,1,1,0,0,0)
D.hE1=new C.oZ("Black & white",0,1.1,0,0,0,0)
D.hDP=new C.oZ("Noir",-0.05,1.55,0,0,0,0)
D.hDT=new C.oZ("Sepia",0,1,0.25,0.9,0,0)
D.hDS=new C.oZ("Vivid",0,1.15,1.6,0,0,0)
D.hDL=new C.oZ("Pop",0,1.3,1.9,0,0,0)
D.hDN=new C.oZ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hDZ=new C.oZ("Matte",0,0.9,0.85,0,0,0.55)
D.hDU=new C.oZ("Cool",0,1.05,1,-0.8,0,0)
D.hE0=new C.oZ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hDM=new C.oZ("Golden hour",0.04,1,1.25,1,0,0)
D.hDR=new C.oZ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hE_=new C.oZ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hDQ=new C.oZ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hDW=new C.oZ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hDV=new C.oZ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hDX=new C.oZ("Rose",0,1,1.1,0.3,0.4,0)
D.hDO=new C.oZ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.djv=w([D.hDY,D.hE1,D.hDP,D.hDT,D.hDS,D.hDL,D.hDN,D.hDZ,D.hDU,D.hE0,D.hDM,D.hDR,D.hE_,D.hDQ,D.hDW,D.hDV,D.hDX,D.hDO],B.at("O<oZ>"))
D.bg6=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.djx=w([D.ajR,A.ea,D.bg6],x.O)
D.eEx=new B.y(0.12,0.3)
D.eVV=new B.y(0.26,0.75)
D.eUa=new B.y(0.8,0.22)
D.f_K=new B.y(0.9,0.7)
D.eWM=new B.y(0.5,0.15)
D.eYV=new B.y(0.65,0.85)
D.eLb=new B.y(0.08,0.85)
D.djO=w([D.eEx,D.eVV,D.eUa,D.f_K,D.eWM,D.eYV,D.eLb],x.G)
D.aCa=w([A.b9,A.bT,A.bc,A.b4],x.O)
D.dkK=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dkY=w([A.c,A.fM,A.dn,A.wf],x.O)
D.bjZ=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dm0=w([D.bjZ,D.ai8],x.O)
D.dm2=w([A.uj,A.aE],x.O)
D.dmj=w([0,0.25,0.75,1],x.x)
D.dml=w([A.yg,A.pm],x.O)
D.aLj=new C.lf(10,"kenteSunset")
D.hJ8=w([D.aiD,A.ko,A.aE],x.O)
D.dVe=new C.jG("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aLj,4294964964,4282000405,4279983648,D.kd)
D.aLk=new C.lf(11,"indigoMudcloth")
D.bhi=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hJm=w([D.bhi,A.ai5,A.iy],x.O)
D.dVm=new C.jG("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aLk,4294439140,4279903102,4279903102,D.kd)
D.aLl=new C.lf(12,"adinkraRoyal")
D.bwy=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hJn=w([D.agP,D.bwy,A.aE],x.O)
D.dVo=new C.jG("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aLl,4294965484,4285218591,4287322667,D.kd)
D.aLm=new C.lf(13,"nileLotus")
D.bsl=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bop=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hJs=w([D.bsl,D.bop,A.iy],x.O)
D.dVn=new C.jG("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLm,4294244340,4279196764,4279196764,D.kd)
D.aLn=new C.lf(14,"shweshweIvory")
D.bmg=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bkR=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bhR=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hJ9=w([D.bmg,D.bkR,D.bhR],x.O)
D.dVj=new C.jG("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLn,4294505710,4279970378,4291058750,D.kd)
D.ty=new C.lf(15,"certIvoryNavy")
D.hJ7=w([D.Nn,D.jE,A.iy],x.O)
D.aKU=new C.yf(1,"ringsNdoa")
D.dVg=new C.jG("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.ty,4294966259,4279378237,4291404327,D.aKU)
D.a8n=new C.yf(2,"coupleCards")
D.dVb=new C.jG("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.ty,4294966259,4279378237,4291404327,D.a8n)
D.E6=new C.lf(18,"certIvoryNavyBar")
D.agO=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hJl=w([D.agO,D.jE,A.iy],x.O)
D.aKV=new C.yf(3,"kuhoweshaForm")
D.dV9=new C.jG("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.E6,4294966519,4279378237,4291404327,D.aKV)
D.aim=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hJF=w([D.Nn,D.aim,A.iy],x.O)
D.a8o=new C.yf(4,"mahariPande")
D.dVc=new C.jG("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.ty,4294966259,4279904068,4291404327,D.a8o)
D.aLo=new C.lf(16,"certIvoryGreen")
D.blz=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hJb=w([A.Mr,D.blz,A.iy],x.O)
D.aKW=new C.yf(5,"familiaMti")
D.dVi=new C.jG("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aLo,4294966776,4280241466,4291404327,D.aKW)
D.a8p=new C.yf(6,"ndoaSafi")
D.dVa=new C.jG("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.E6,4294966519,4279378237,4291404327,D.a8p)
D.bqx=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hJe=w([D.Nn,A.iy,D.bqx],x.O)
D.a8q=new C.yf(7,"peteWide")
D.dVf=new C.jG("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.ty,4294966259,4282001936,4291404327,D.a8q)
D.dVp=new C.yf(8,"muhuriCrest")
D.dV8=new C.jG("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.ty,4294966259,4279378237,4291404327,D.dVp)
D.hJo=w([D.agO,D.aim,A.iy],x.O)
D.dVq=new C.yf(9,"fomuWazi")
D.dVl=new C.jG("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.E6,4294966519,4279904068,4291404327,D.dVq)
D.aLp=new C.lf(17,"certIvoryRose")
D.bml=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hJr=w([D.bml,D.ajn,A.iy],x.O)
D.a8m=new C.yf(10,"upendoOrnate")
D.dVh=new C.jG("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aLp,4294965493,4286200650,4291404327,D.a8m)
D.dmP=w([D.dVe,D.dVm,D.dVo,D.dVn,D.dVj,D.dVg,D.dVb,D.dV9,D.dVc,D.dVi,D.dVa,D.dVf,D.dV8,D.dVl,D.dVh],x.h)
D.eq=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jw=new C.wB(0,"emojis")
D.Ec=new C.wB(1,"pictures")
D.Jx=new C.wB(2,"icons3d")
D.a8I=new C.wB(3,"animations")
D.U4=new C.wB(4,"videoMotion")
D.Ed=new C.wB(5,"luxe")
D.a6l=w([D.Jw,D.Ec,D.Jx,D.a8I,D.U4,D.Ed],B.at("O<wB>"))
D.eZy=new B.y(A.ed,"Looks")
D.eNh=new B.y(A.Dj,"Light")
D.eNe=new B.y(A.mk,"Colour")
D.eLc=new B.y(A.wN,"Effects")
D.aq9=new B.a_(63112,"MaterialIcons",!1)
D.eHH=new B.y(D.aq9,"Crop")
D.dnl=w([D.eZy,D.eNh,D.eNe,D.eLc,D.eHH],x.f2)
D.do3=w([],x.D)
D.hJC=w([],x.L)
D.eLq=new B.y("Flashcard",D.Jr)
D.ePk=new B.y("Quiz",D.Js)
D.eRm=new B.y("Worksheet",D.Jt)
D.eOk=new B.y("Notes",D.nd)
D.ePT=new B.y("Section",D.Ea)
D.doN=w([D.eLq,D.ePk,D.eRm,D.eOk,D.ePT],B.at("O<+(n,mV)>"))
D.dXb=new C.lf(6,"beadedPearl")
D.bpg=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hJG=w([H.a_b,D.bpg,A.iy],x.O)
D.aKS=new C.jG("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dXb,4294966774,4286209070,4291404327,D.kd)
D.dXc=new C.lf(7,"artDeco")
D.btJ=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bwT=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hJE=w([D.btJ,D.bwT,A.c2],x.O)
D.aKT=new C.jG("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dXc,4294440434,4280228630,4290283019,D.kd)
D.dXd=new C.lf(8,"rosetteCorners")
D.bvX=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bk3=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bp9=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hJh=w([D.bvX,D.bk3,D.bp9],x.O)
D.aKR=new C.jG("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dXd,4294702831,4285218602,4291394365,D.kd)
D.dXe=new C.lf(9,"modernLedger")
D.hJg=w([A.c,D.jE,D.jE],x.O)
D.aKQ=new C.jG("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dXe,4294967295,4279378237,4279378237,D.kd)
D.doR=w([D.aKS,D.aKT,D.aKR,D.aKQ],x.h)
D.dp0=w([A.ix,A.pm],x.O)
D.cu=new C.hI(0,"none")
D.ds=new C.hI(1,"fade")
D.Ju=new C.hI(3,"slideRight")
D.aLL=new C.hI(5,"slideDown")
D.egQ=new C.hI(7,"zoomOut")
D.a8H=new C.hI(11,"cube")
D.egL=new C.hI(12,"blur")
D.aLI=new C.hI(13,"dissolve")
D.egM=new C.hI(14,"wipeLeft")
D.egN=new C.hI(15,"wipeRight")
D.U3=new C.hI(17,"push")
D.egO=new C.hI(18,"flash")
D.aLK=new C.hI(20,"swing")
D.egP=new C.hI(21,"curtain")
D.SE=w([D.cu,D.ds,D.vr,D.Ju,D.vs,D.aLL,D.ne,D.egQ,D.Jv,D.aLM,D.U2,D.a8H,D.egL,D.aLI,D.egM,D.egN,D.r4,D.U3,D.egO,D.aLJ,D.aLK,D.egP],x.i)
D.SF=w([D.a8l,D.a8j,D.a8c,D.a8d,D.a8e,D.a8h,D.a8f,D.a8g,D.a8k,D.a8i,D.aKS,D.aKT,D.aKR,D.aKQ],x.h)
D.dps=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dpw=w([A.um,A.id,A.c2],x.O)
D.eMy=new B.y(A.uU,"Design")
D.f09=new B.y(D.aqp,"Word sizes")
D.eWv=new B.y(A.Df,"Text")
D.bSZ=new B.a_(983182,"MaterialIcons",!1)
D.eWA=new B.y(D.bSZ,"Photo")
D.eHf=new B.y(A.ln,"Logo")
D.f1s=new B.y(A.I_,"News")
D.dpC=w([D.eMy,D.f09,D.eWv,D.eWA,D.eHf,D.f1s],x.f2)
D.dpD=w(["golddust","sparkle","sheen"],x.s)
D.eic=new C.ey("upload_pdf",K.PS,"Upload PDF")
D.ehm=new C.ey("sign_paper",A.HY,"Sign Paper")
D.bSe=new B.a_(63438,"MaterialIcons",!1)
D.ei8=new C.ey("hd_photo",D.bSe,"HD Photo")
D.ehe=new C.ey("sharpen",E.a30,"Sharpen")
D.eho=new C.ey("print",K.PS,"Download PDF")
D.ehQ=new C.ey("rotate",D.aq9,"Rotate")
D.ehx=new C.ey("text_box",A.Df,"Text Box")
D.ehz=new C.ey("picture",A.uZ,"Picture")
D.ehv=new C.ey("title",A.wX,"Title")
D.ehr=new C.ey("subtitle",V.ar_,"Subtitle")
D.ehZ=new C.ey("bullets",I.a3k,"Bullet List")
D.ehs=new C.ey("numbered",A.PE,"Numbered")
D.ei1=new C.ey("quote",A4.D3,"Quote")
D.ehE=new C.ey("citation",A.oF,"Citation")
D.ei4=new C.ey("date_stamp",Aj.a33,"Date Stamp")
D.ehS=new C.ey("page_number",A.wW,"Page #")
D.ehW=new C.ey("header_bar",A.zC,"Header")
D.ehy=new C.ey("footer_bar",Au.a3S,"Footer")
D.ehn=new C.ey("divider",A.td,"Divider")
D.ehj=new C.ey("highlight",A.a3n,"Highlight")
D.ehY=new C.ey("redact",A.tj,"Redact")
D.ehL=new C.ey("callout",A.CX,"Callout")
D.ei6=new C.ey("checkboxes",I.apu,"Checklist")
D.ehI=new C.ey("table",A.a3Q,"Table")
D.ehC=new C.ey("memo",I.a3A,"Memo")
D.ehM=new C.ey("letter",A.HN,"Letter")
D.bRS=new B.a_(63259,"MaterialIcons",!0)
D.ehd=new C.ey("agenda",D.bRS,"Agenda")
D.ehp=new C.ey("toc",AD.aqC,"Contents")
D.bSa=new B.a_(63406,"MaterialIcons",!1)
D.ehJ=new C.ey("sig_line",D.bSa,"Sign Line")
D.eh6=new C.ey("initial_line",A.j9,"Initials")
D.eh9=new C.ey("approved",A.ln,"APPROVED")
D.ehO=new C.ey("draft",A.pF,"DRAFT")
D.ehU=new C.ey("confidential",A.jL,"Confidential")
D.ehX=new C.ey("sticky",A.PY,"Sticky Note")
D.ei5=new C.ey("progress",A.aqB,"Progress")
D.bTp=new B.a_(983507,"MaterialIcons",!1)
D.ehk=new C.ey("stars",D.bTp,"Star Rating")
D.eh4=new C.ey("equation",A.aqr,"Equation")
D.ehf=new C.ey("timeline",A.a3R,"Timeline")
D.ehD=new C.ey("two_col",A.a3T,"Two Columns")
D.ehh=new C.ey("compare",Az.a38,"Compare")
D.eh2=new C.ey("duplicate_el",A.fP,"Duplicate")
D.eia=new C.ey("delete_el",A.ek,"Delete")
D.ei0=new C.ey("bring_fwd",H.aql,"Bring Front")
D.eh7=new C.ey("send_back",H.aqk,"Send Back")
D.ehN=new C.ey("align_left",D.a3i,"Align L")
D.ehT=new C.ey("align_center",D.a3h,"Align C")
D.ei9=new C.ey("align_right",D.a3j,"Align R")
D.ehw=new C.ey("word_count",Z.a2F,"Word Count")
D.eht=new C.ey("link_text",A.hS,"Link")
D.ehR=new C.ey("phone",A.iU,"Phone")
D.ehi=new C.ey("email",A.D0,"Email")
D.eib=new C.ey("qr_placeholder",A.jN,"QR Placeholder")
D.ehc=new C.ey("rectangle",A5.tb,"Rectangle")
D.ehH=new C.ey("circle",A.pw,"Circle")
D.eh8=new C.ey("arrow",A.jt,"Arrow")
D.ei_=new C.ey("line",A.td,"Line")
D.ehl=new C.ey("triangle",A.a35,"Triangle")
D.bRZ=new B.a_(63318,"MaterialIcons",!1)
D.ehq=new C.ey("grayscale",D.bRZ,"Grayscale")
D.ehA=new C.ey("brighten",I.apO,"Brighten")
D.ehF=new C.ey("flip_h",A.D2,"Flip H")
D.bS5=new B.a_(63348,"MaterialIcons",!1)
D.ei7=new C.ey("flip_v",D.bS5,"Flip V")
D.ehV=new C.ey("cover_page",A.qN,"Cover Page")
D.eh5=new C.ey("invoice",A.ho,"Invoice")
D.ehg=new C.ey("resume",A.mi,"Resume")
D.ehu=new C.ey("minutes",A.py,"Minutes")
D.eha=new C.ey("lab_report",A.PU,"Lab Report")
D.ehb=new C.ey("rubric",A.qQ,"Rubric")
D.ehG=new C.ey("flashcard_tool",X.HV,"Flashcard")
D.ei2=new C.ey("quiz_tool",A.HS,"Quiz Block")
D.ehK=new C.ey("worksheet_tool",O.Hs,"Worksheet")
D.ehP=new C.ey("outline_share",A.PW,"Share Outline")
D.ei3=new C.ey("export_json",D.apA,"Export JSON")
D.eh3=new C.ey("new_slide",D.a2E,"New Slide")
D.ehB=new C.ey("present",A.qS,"Present")
D.dq9=w([D.eic,D.ehm,D.ei8,D.ehe,D.eho,D.ehQ,D.ehx,D.ehz,D.ehv,D.ehr,D.ehZ,D.ehs,D.ei1,D.ehE,D.ei4,D.ehS,D.ehW,D.ehy,D.ehn,D.ehj,D.ehY,D.ehL,D.ei6,D.ehI,D.ehC,D.ehM,D.ehd,D.ehp,D.ehJ,D.eh6,D.eh9,D.ehO,D.ehU,D.ehX,D.ei5,D.ehk,D.eh4,D.ehf,D.ehD,D.ehh,D.eh2,D.eia,D.ei0,D.eh7,D.ehN,D.ehT,D.ei9,D.ehw,D.eht,D.ehR,D.ehi,D.eib,D.ehc,D.ehH,D.eh8,D.ei_,D.ehl,D.ehq,D.ehA,D.ehF,D.ei7,D.ehV,D.eh5,D.ehg,D.ehu,D.eha,D.ehb,D.ehG,D.ei2,D.ehK,D.ehP,D.ei3,D.eh3,D.ehB],B.at("O<ey>"))
D.dqj=w([A.cx,A.an],x.O)
D.eGM=new B.y(4286331629,4292552567)
D.eGz=new B.y(4280640491,4278630100)
D.eGU=new B.y(4294538006,4292943176)
D.eFW=new B.y(4278556265,4280640491)
D.dk_=w([D.eGM,D.eGz,D.eGU,D.eFW],x.n)
D.cGG=w([4294626325,4280472558,4294210230],x.t)
D.egY=new C.oc("colorful","Colorful",A.mk,D.dk_,4294967295,3875536895,D.cGG,D.ne)
D.eGn=new B.y(4279522093,4279657780)
D.eGD=new B.y(4281750292,4283268111)
D.eFZ=new B.y(4278603323,4279203438)
D.eGE=new B.y(4282343954,4279599165)
D.cRU=w([D.eGn,D.eGD,D.eFZ,D.eGE],x.n)
D.cGo=w([4288931381,4294829706,4287033260],x.t)
D.egU=new C.oc("nature","Nature",A.HZ,D.cRU,4294442727,3874290891,D.cGo,D.ds)
D.eGh=new B.y(4279369771,4283178389)
D.eGe=new B.y(4279179050,4286456526)
D.eGv=new B.y(4280163147,4290648157)
D.eFO=new B.y(4278322711,4285343961)
D.d9x=w([D.eGh,D.eGe,D.eGv,D.eFO],x.n)
D.cGC=w([4294210230,4280472558,4289170426],x.t)
D.egS=new C.oc("vibe","Vibe",A.PI,D.d9x,4294967295,3874869502,D.cGC,D.vr)
D.eGQ=new B.y(4290007817,4292552567)
D.eGK=new B.y(4286328082,4294286859)
D.eGP=new B.y(4288485197,4294538006)
D.eGJ=new B.y(4285343961,4293675161)
D.ccn=w([D.eGQ,D.eGK,D.eGP,D.eGJ],x.n)
D.cGH=w([4294829706,4294967295,4284999929],x.t)
D.egT=new C.oc("celebration","Celebration",A.k8,D.ccn,4294967295,4009752557,D.cGH,D.r4)
D.eGc=new B.y(4279179050,4280171146)
D.eGg=new B.y(4279310375,4280232247)
D.eG4=new B.y(4278916151,4280172719)
D.eGd=new B.y(4279179050,4281549141)
D.d1F=w([D.eGc,D.eGg,D.eG4,D.eGd],x.n)
D.cGj=w([4281908728,4294626325,4287931320],x.t)
D.egX=new C.oc("professional","Professional",A.zi,D.d1F,4294967295,3872118241,D.cGj,D.U3)
D.eG8=new B.y(4278995566,4278413729)
D.eG0=new B.y(4278727492,4279137424)
D.eGw=new B.y(4280171146,4278751666)
D.eG9=new B.y(4278995566,4279590517)
D.cKy=w([D.eG8,D.eG0,D.eGw,D.eG9],x.n)
D.cGm=w([4286436348,4284410580,4294829706],x.t)
D.egZ=new C.oc("ocean","Ocean",I.a3V,D.cKy,4294967295,3873501950,D.cGm,D.vs)
D.eGL=new B.y(4286328082,4294538006)
D.eGN=new B.y(4286781507,4294677052)
D.eGH=new B.y(4283178389,4294197086)
D.eGO=new B.y(4288295954,4294688548)
D.cYR=w([D.eGL,D.eGN,D.eGH,D.eGO],x.n)
D.cGI=w([4294829706,4294967295,4294747557],x.t)
D.eh_=new C.oc("sunset","Sunset",A.Q0,D.cYR,4294967295,4009749973,D.cGI,D.ds)
D.eGY=new B.y(4294967295,4294047225)
D.eGT=new B.y(4294507260,4294967295)
D.eGX=new B.y(4294967295,4293060848)
D.eGS=new B.y(4294507260,4294047225)
D.dcV=w([D.eGY,D.eGT,D.eGX,D.eGS],x.n)
D.cGh=w([4280640491,4279179050,4287931320],x.t)
D.egW=new C.oc("minimal","Minimal",A5.tb,D.dcV,4279179050,4282865001,D.cGh,D.ds)
D.eG7=new B.y(4278979081,4280886564)
D.eGr=new B.y(4280031511,4278979081)
D.eGf=new B.y(4279308561,4281148438)
D.eG6=new B.y(4278979081,4280031511)
D.dsn=w([D.eG7,D.eGr,D.eGf,D.eG6],x.n)
D.cGv=w([4292128567,4294829706,4289241758],x.t)
D.eh0=new C.oc("elegant","Elegant",A.mm,D.dsn,4294898631,3873957348,D.cGv,D.aLI)
D.eGt=new B.y(4280159034,4282058596)
D.eG3=new B.y(4278916151,4280163147)
D.eGB=new B.y(4281208933,4278916151)
D.eGk=new B.y(4279502891,4283178389)
D.dA6=w([D.eGt,D.eG3,D.eGB,D.eGk],x.n)
D.cGE=w([4294296657,4292128567,4291081725],x.t)
D.egV=new C.oc("royal","Royal Gold",A.ja,D.dA6,4294965222,3874084351,D.cGE,D.ne)
D.eFT=new B.y(4278464302,4280163147)
D.eG2=new B.y(4278916151,4279455306)
D.eGu=new B.y(4280163147,4283040846)
D.eFQ=new B.y(4278332450,4281413249)
D.djA=w([D.eFT,D.eG2,D.eGu,D.eFQ],x.n)
D.cGi=w([4281193663,4289170426,4294210230],x.t)
D.eh1=new C.oc("aurora","Aurora Glow",A.ed,D.djA,4293983738,3869766608,D.cGi,D.ds)
D.x8=w([D.egY,D.egU,D.egS,D.egT,D.egX,D.egZ,D.eh_,D.egW,D.eh0,D.egV,D.eh1],B.at("O<oc>"))
D.bpR=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dqU=w([A.rC,D.bpR,A.rC],x.O)
D.drb=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.drg=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eWn=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eM8=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eQV=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eDi=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ePw=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eNE=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eSd=new B.y("Surprise me","")
D.drP=w([D.eWn,D.eM8,D.eQV,D.eDi,D.ePw,D.eNE,D.eSd],x.L)
D.bhT=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bui=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dsC=w([A.c,D.bhT,D.bui],x.O)
D.duX=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aLh=new C.lf(0,"heritageGold")
D.bo9=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hJH=w([D.bo9,A2.aiy,A.aE],x.O)
D.dVk=new C.jG("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aLh,4294570461,4284234270,4292128567,D.kd)
D.aLi=new C.lf(1,"heritageCrimson")
D.bg2=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bmi=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bu3=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hJk=w([D.bg2,D.bmi,D.bu3],x.O)
D.dVd=new C.jG("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aLi,4294635750,4285213214,4292912216,D.kd)
D.dv1=w([D.a8l,D.a8j,D.dVk,D.dVd,D.a8e,D.a8h],x.h)
D.e0h=new C.t0(1,"circuit")
D.e0K=new C.mu("neural","Neural Link","Robotic",D.e0h,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.e0g=new C.t0(0,"grid")
D.e0H=new C.mu("signal","Signal Grid","Robotic",D.e0g,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.e0m=new C.t0(2,"hexes")
D.e0s=new C.mu("core","Core Protocol","Robotic",D.e0m,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aLF=new C.t0(11,"diagonal")
D.e0D=new C.mu("steel","Steel Tech","Robotic",D.aLF,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aLG=new C.t0(3,"rings")
D.e0r=new C.mu("vault","Vault Gold","Robotic",D.aLG,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.e0k=new C.t0(13,"leaves")
D.e0u=new C.mu("forest","Forest Morning","Nature",D.e0k,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aLH=new C.t0(5,"waves")
D.e0B=new C.mu("ocean","Ocean Calm","Nature",D.aLH,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.e0n=new C.t0(6,"sunset")
D.e0G=new C.mu("sunset","Sunset Glow","Nature",D.e0n,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.e0o=new C.t0(7,"mountains")
D.e0t=new C.mu("mountain","Mountain Air","Nature",D.e0o,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.e0p=new C.t0(8,"stars")
D.e0A=new C.mu("night","Night Sky","Nature",D.e0p,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a8F=new C.t0(4,"orbs")
D.e0y=new C.mu("aurora","Aurora","Nature",D.a8F,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.e0I=new C.mu("sand","Sand Dune","Nature",D.aLH,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.e0q=new C.t0(9,"rays")
D.e0x=new C.mu("golden","Golden Hour","Warm",D.e0q,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.e0v=new C.mu("royal","Royal Purple","Warm",D.aLF,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.e0w=new C.mu("rose","Rose Petal","Warm",D.a8F,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.e0j=new C.t0(12,"blocks")
D.e0z=new C.mu("electric","Electric Blue","Bold",D.e0j,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.e0J=new C.mu("mint","Fresh Mint","Bold",D.a8F,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.e0l=new C.t0(14,"minimal")
D.e0F=new C.mu("white","Clean White","Clean",D.e0l,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.e0i=new C.t0(10,"frame")
D.e0C=new C.mu("midnight","Midnight Gold","Clean",D.e0i,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.e0E=new C.mu("community","Community Green","Clean",D.aLG,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6S=w([D.e0K,D.e0H,D.e0s,D.e0D,D.e0r,D.e0u,D.e0B,D.e0G,D.e0t,D.e0A,D.e0y,D.e0I,D.e0x,D.e0v,D.e0w,D.e0z,D.e0J,D.e0F,D.e0C,D.e0E],B.at("O<mu>"))
D.dvq=w([D.C5,A.uj,A.id,A.c2],x.O)
D.dvJ=w([D.ajA,D.jE],x.O)
D.dvU=w(["pdf","docx","txt","md"],x.s)
D.f5J=new B.b5(-3,150,34)
D.f5K=new B.b5(-3,214,62)
D.f5L=new B.b5(-3,288,62)
D.dwM=w([D.f5J,D.f5K,D.f5L],B.at("O<+(G,G,G)>"))
D.dxi=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dy2=w(["Write","Design","Print & fold"],x.s)
D.ke=new C.vk(2,"triangle")
D.Eb=new C.vk(3,"arrow")
D.fQ=new C.vk(4,"line")
D.kf=new C.vk(5,"parallelogram")
D.dy5=w([D.bm,D.f2,D.ke,D.Eb,D.fQ,D.kf,D.lt],x.m)
D.eEN=new B.y(240,96)
D.eHz=new B.y(560,46)
D.dyb=w([D.eEN,D.eHz],x.G)
D.hJS=new C.yi(0,"classic")
D.dXh=new C.o9("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aLh,4294570461,4282000405,4284234270)
D.dXt=new C.o9("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aLi,4294635750,4281999378,4285213214)
D.dXi=new C.o9("elegant_navy","Umoja Mzuri",y.s,D.a8w,4294967035,4279378237,4290283019)
D.dXv=new C.o9("elegant_gold","Umoja wa Dhahabu",y.Q,D.aLq,4294966515,4281016592,4289102906)
D.dXx=new C.o9("kente_sunset","Kente ya Jua",y.H,D.aLj,4294964964,4282000405,4279983648)
D.dXf=new C.o9("indigo_mudcloth","Nguo ya Indigo",y.n,D.aLk,4294439140,4279903102,4279903102)
D.dXk=new C.o9("adinkra_royal","Muhuri wa Adinkra",y.z,D.aLl,4294965484,4285218591,4287322667)
D.dXp=new C.o9("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLm,4294244340,4279196764,4279196764)
D.dXr=new C.o9("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLn,4294505710,4279970378,4291058750)
D.hJT=new C.yi(1,"ringsNdoa")
D.dXj=new C.o9("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.ty,4294966259,4279378237,4291404327)
D.hJV=new C.yi(2,"coupleCards")
D.dXu=new C.o9("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.ty,4294966259,4279378237,4291404327)
D.hJW=new C.yi(3,"kuhoweshaForm")
D.dXq=new C.o9("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.E6,4294966519,4279378237,4291404327)
D.hJX=new C.yi(4,"mahariPande")
D.dXg=new C.o9("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.ty,4294966259,4279904068,4291404327)
D.hJY=new C.yi(5,"familiaMti")
D.dXw=new C.o9("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aLo,4294966776,4280241466,4291404327)
D.hJZ=new C.yi(6,"ndoaSafi")
D.dXn=new C.o9("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.E6,4294966519,4279378237,4291404327)
D.hK_=new C.yi(7,"peteWide")
D.dXm=new C.o9("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.ty,4294966259,4282001936,4291404327)
D.hK0=new C.yi(8,"muhuriCrest")
D.dXl=new C.o9("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.ty,4294966259,4279378237,4291404327)
D.hK1=new C.yi(9,"fomuWazi")
D.dXo=new C.o9("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.E6,4294966519,4279904068,4291404327)
D.hJU=new C.yi(10,"upendoOrnate")
D.dXs=new C.o9("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aLp,4294965493,4286200650,4291404327)
D.SW=w([D.dXh,D.dXt,D.dXi,D.dXv,D.dXx,D.dXf,D.dXk,D.dXp,D.dXr,D.dXj,D.dXu,D.dXq,D.dXg,D.dXw,D.dXn,D.dXm,D.dXl,D.dXo,D.dXs],B.at("O<o9>"))
D.E9=new C.at5(0,"landscape169")
D.oX=new C.at5(1,"portrait916")
D.dz_=w([D.E9,D.oX],B.at("O<at5>"))
D.aDY=w([A.id,A.bL,A.cI,A.ix,A.c],x.O)
D.vk=w([A.c2,A.i1],x.O)
D.eDN=new B.y(1000,"M")
D.eJ2=new B.y(900,"CM")
D.eHt=new B.y(500,"D")
D.eFJ=new B.y(400,"CD")
D.eDO=new B.y(100,"C")
D.eJ3=new B.y(90,"XC")
D.eHu=new B.y(50,"L")
D.eFK=new B.y(40,"XL")
D.eDU=new B.y(10,"X")
D.eJf=new B.y(9,"IX")
D.eHL=new B.y(5,"V")
D.eHe=new B.y(4,"IV")
D.eEq=new B.y(1,"I")
D.dzL=w([D.eDN,D.eJ2,D.eHt,D.eFJ,D.eDO,D.eJ3,D.eHu,D.eFK,D.eDU,D.eJf,D.eHL,D.eHe,D.eEq],x.ek)
D.f72=new B.ce(["open",A.j9,"Open & write","Keep writing this book"])
D.f7w=new B.ce(["print",A.v4,"Print as a book","Fold and staple it"])
D.dzW=w([D.f72,D.f7w],B.at("O<+(n,a_,n,n)>"))
D.dAG=w([D.a8H,D.ne,D.Jv,D.U3,D.ds,D.U2],x.i)
D.eX7=new B.y(-1,"Small")
D.eDy=new B.y(0,"Normal")
D.eEn=new B.y(1,"Big")
D.eF3=new B.y(2,"Huge")
D.dBg=w([D.eX7,D.eDy,D.eEn,D.eF3],x.ek)
D.dBH=w([49,65,89,38,83,89],x.t)
D.dBN=w([A.uj,A.id,A.c2],x.O)
D.dC0=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. A member counts as contributed however their app login is linked to their registry record: the same email, the registry number, the linked app email set with the ID card, a granted ID card with the same phone, the app login the registrar writes into each contribution, or the mark the registrar puts on the member record (gave this much to this campaign). Instead of the ask, twice a day when the app opens (once before noon and once after noon), until the contribution is over, that person gets a Swahili orange pop-up, Hongera, with their name in a gold frame (MCHANGIAJI), the amount they contributed and what it was for.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","HOUSE CARE CARD DOWNLOAD AND REGISTRAR VIEW ONLY: in the Help Center, House and insurance, House Care, a member sees the very same House Care card as on the home screen (due date, status, name, price and agreement) with a white round download button that saves the card as a picture. The price and agreement line (for example 25 dollars a month and 1-year agreement) sits on the right of the name, as before, and is always shown whole (the name gives way first). An Authorized Registrar who opens another state with that state code sees Search, Rankings and a Members list marked view only, with a yellow View only banner: they can look but cannot enroll, edit, remove, manage cities, help mode or anything else there. Their registrar tools work only in their home state.","AUTHORIZED REGISTRAR STATE CODE POP-UP: when an Authorized Registrar changes to another state, a redesigned pop-up asks for that state Civic Registry code: a purple shield badge, the move shown as two chips (your state, arrow, the new state), a rounded code field with a key icon and a show or hide eye, a red line if the code is wrong, a reminder that registrar tools stay in the home state, and a big Verify and Change button with Cancel under it. Light and dark mode.","MENUS OPEN AT ONCE: a few seconds after the home screen opens, NGMY quietly loads every big menu in the background (Growth Income, the Vault Arcade, the Core Protocol and the Construction Lab, Studio tools like invoices and video, the Market Hub, Help Center, State Wallet, Menu Studio and more), one after another, from the copy already stored on the phone. So no menu shows a loading circle the first time it is opened after the app starts. It costs no data and needs no internet once the app was opened online before.","CREATE INVOICE AND THE IRON TRIANGLE: in Create Invoice the fields are grouped in frames with an icon and a title (Invoice details, Your business, Bill to and more) in BOTH light mode and dark mode; in dark mode the frames are deep night purple with a purple edge and the fields are rounded with purple icons. The Iron Triangle (FAST, CHEAP, GOOD - pick any two) is a brushed steel plate the size and shape of a bank card: the triangle and its name on the left, the three switches on the right, and the result on a dark steel plate UNDER the card (not inside it); the green Quote Calc frame fits the card and the plate with no empty space. The Quote Calc window is only as tall as what is inside it (the Iron Triangle and the Price Calculator), so there is no empty space at the bottom; on a short screen it scrolls.","ALL THE NEMA OUTLETS IN THE CONSTRUCTION LAB: there is also the dual-function AFCI/GFCI outlet that the newer electrical code asks for in kitchens and laundry rooms (TEST and RESET buttons and a green light, wired on the LINE screws), and the lesson tiles now pair up two in every row. The slots and holes of every outlet stay visible from any side when you turn the view. 23 more outlets from the NEMA charts, each a lesson tile and a possible city job, each with its real face in the room, on the bench and in the framed house: the old 2-prong 1-15 (no ground), the 6-15 and 6-30 (240 volts, no neutral), the big 60 amp 14-60, the RV shore power 50 amp twist-lock, the twist-locks L5-20, L5-30, L6-20, L6-30, L14-20 and the old L2-20 with no ground, the 277 volt 7-15, 7-20 and 7-30 (brown hot and grey neutral), the three-phase Y 18-20 (three hots and a neutral), the three-phase 15-20, 15-30, 15-50 and 15-60 (black, red and blue hots and a ground, the third hot on screw Z), the three-phase twist-locks L15-30, L21-30 (five wires), L16-30 and L22-30 (480 volt brown, orange and yellow hots). The 1-15 and the 6-15 and 277 volt faces are white, the 18-20 grey, the rest dark.","MORE AMERICAN OUTLETS IN THE CONSTRUCTION LAB: besides the outlet, GFCI, split, 240 volt, isolated ground, dryer, range and washer outlets, there are lessons for the AFCI outlet (arc-fault, LINE screws), the tamper-resistant TR outlet (child shutters), the USB outlet, the 20 amp 5-20 outlet with the T slot, the outdoor weather-resistant GFCI under a bubble cover, the smart Wi-Fi outlet (needs the neutral), the electric car charger 14-50, the RV 30 amp TT-30 (120 volts only), the welder 6-50 (two hots and a ground) and the generator twist-lock L14-30. On the wiring bench the green ground screw on the strap is always visible from the front, and the room around the bench goes on behind the wall and is closed at both ends, so turning all the way round never shows black. Each is a tile on the Lessons page. Jobs in the city (and practice jobs) pick their second outlet from all of these, so every job can be a different kind of outlet, with the same boxes as before.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","HELPER GIFTS AND ROSTER: a member who is the first to contribute 3 times in a row earns a helper gift that the admin grants. The admin chooses how it is given: an NGMY store money card (a QR code the chosen store scans), or Cash App or Zelle with no store needed. For Cash App or Zelle the admin types the phone number the member should call or text and an optional note; the member then sees a green (Cash App) or purple (Zelle) gift pop-up with the amount, that number and Call and Text buttons every time they open the app, until they tap Received. The printed Civic Registry roster carries a light NGMY watermark behind it (between the earlier strong one and the too faint one).","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dCh=w([D.ds,D.ne,D.vr,D.a8H,D.Jv,D.U3],x.i)
D.aJg=new B.d_([0,D.NH,8,D.al6,12,D.al7],B.at("d_<H,a55>"))
D.en2={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d1Q=w([A.bL,H.akb],x.O)
D.dow=w([A.aZ,A.bn],x.O)
D.diC=w([A.bT,A.aG,A.bl],x.O)
D.dzX=w([A.cx,A.bx],x.O)
D.daw=w([A.b9,A.fe],x.O)
D.dlC=w([A.b8,A.fq],x.O)
D.blW=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dkS=w([D.blW,A.pm],x.O)
D.deK=w([A.hv,A.ym],x.O)
D.dai=w([A.bw,A.ci],x.O)
D.dEX=new B.bv(D.en2,[D.d1Q,Q.au0,D.dow,D.diC,D.dzX,D.daw,D.dlC,D.dkS,D.deK,D.dai],B.at("bv<n,ai<u>>"))
D.ema={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a7v=new B.bv(D.ema,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bv<n,n>"))
D.a7B=new B.bv(A.i7,[],B.at("bv<H,+icon3d,picture(n?,n?)>"))
D.dK7=new F.NY(30,null)
D.dPm=new F.mS("Chapter 1","","","")
D.dyM=w([D.dPm],x.B)
D.dPq=new F.rR("My Book","","",D.dyM,E.aKI)
D.dPo=new F.va("starry",null,null,null,null,"","","")
D.dPr=new F.rR("Dream Big","","",E.a6t,D.dPo)
D.dPp=new F.va("story",null,null,null,null,"","","")
D.dPs=new F.rR("Little Lion","","",E.a6t,D.dPp)
D.dPn=new F.va("vintage",null,null,null,null,"","","")
D.dPt=new F.rR("Our Story","","",E.a6t,D.dPn)
D.dSv=new C.Fp("","NGMY","","")
D.dZV=new C.Ag("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.egR=new C.b3N(null,null,null,null)
D.eiz=new C.ata(null)
D.eiK=new C.atE(0,"smaller")
D.eiL=new C.atE(1,"bigger")
D.aLW=new C.atE(2,"fit")
D.eqD=new B.p(3,6)
D.eqX=new B.p(4,8)
D.ev7=new B.D(E.alZ,V.ag4,null)
D.evb=new B.D(A.a0A,A.m4,null)
D.bUK=new B.ae(A.k9,16,A.bW,null,null,null)
D.evf=new B.D(A.iR,D.bUK,null)
D.bfr=new B.fl(2.2,null,null,null,null,A.c,null,null,null,null)
D.evr=new B.D(A.Oz,D.bfr,null)
D.c4v=new B.ae(A.cC,16,A.aF,null,null,null)
D.evv=new B.D(A.eC,D.c4v,null)
D.fQG=new B.B("Play",null,A.o4,null,null,null,null,null,null,null,null,null)
D.doO=w([W.ass,A.vH,D.fQG],x.p)
D.fcj=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.doO,null)
D.evy=new B.D(A.nK,D.fcj,null)
D.bfA=new B.fl(2.4,null,null,null,null,null,null,null,null,null)
D.fiJ=new B.a5(20,20,D.bfA,null)
D.evF=new B.D(A.iR,D.fiJ,null)
D.h_9=new B.B("Seconds per slide",null,A.h4,null,null,null,null,null,null,null,null,null)
D.evP=new B.D(A.bk,D.h_9,null)
D.ex9=new C.aa3(2,"print")
D.exc=new B.j4(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eyP=new B.hi("/Annot")
D.eyR=new B.hi("/URI")
D.fKC=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eBl=new B.jI("share",48,D.fKC,null,B.at("jI<n>"))
D.c4p=new B.ae(A.ed,14,A.ey,null,null,null)
D.eBu=new B.cK(null,-2,-2,null,null,null,D.c4p,null)
D.d49=w([A.ZN,A.L],x.O)
D.cb6=new B.a8(A.a7,A.aa,A.x,D.d49,null,null)
D.b7R=new B.o(null,null,null,null,null,D.cb6,A.n)
D.bzm=new B.bN(D.b7R,A.bi,null,null)
D.eBH=new B.cK(0,0,null,0,8,null,D.bzm,null)
D.dtQ=w([A.hz,A.mU,A.c6],x.O)
D.eCm=new B.bY(A.A,0.5,A.x,null,0,D.dtQ,null,null)
D.eEW=new B.y(0.22,A.bn)
D.eJz=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eLN=new B.y(0.5,A.hI)
D.eVt=new B.y(0.78,A.aV)
D.f6S=new B.ce([A.bc,0.22,0.7,2.6])
D.f6Z=new B.ce([A.b9,0.36,1.2,1.3])
D.f74=new B.ce([A.dQ,0.28,0.2,0.4])
D.f7a=new B.ce([A.cD,0.05,0.3,0.35])
D.f7h=new B.ce([A.bw,0.28,0.9,0])
D.f7q=new B.ce([A.aB,-0.25,-0.15,0.45])
D.f8r=new B.ce([A.bT,0.42,1,4.1])
D.fc1=new B.ab2(9)
D.bVR=new B.ae(A.I_,28,A.bl,null,null,null)
D.h_H=new B.B("NGMY News",null,A.dq,null,null,null,null,null,null,null,null,null)
D.bJN=new B.bz(1,A.bb,D.h_H,null)
D.dxl=w([D.bVR,A.au,D.bJN],x.p)
D.fcd=new B.c8(A.aL,A.e,A.i,A.l,null,A.p,null,0,D.dxl,null)
D.bW1=new B.ae(A.oF,16,A.c,null,null,null)
D.h1h=new B.B("Book",null,A.o2,null,null,null,null,null,null,null,null,null)
D.dBM=w([D.bW1,A.e8,D.h1h],x.p)
D.fcm=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.dBM,null)
D.c1U=new B.ae(A.jL,10,A.c,null,null,null)
D.fOE=new B.B("Pro",null,A.o0,null,null,null,null,null,null,null,null,null)
D.doT=w([D.c1U,A.rb,D.fOE],x.p)
D.fcq=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.doT,null)
D.h_7=new B.B("Make a newspaper",null,A.KZ,null,null,null,null,null,null,null,null,null)
D.ccl=w([E.a4h,A.af,D.h_7],x.p)
D.fcr=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.ccl,null)
D.c0h=new B.ae(A.k8,18,A.bL,null,null,null)
D.fQU=new B.B("Ending celebration",null,A.hu,null,null,null,null,null,null,null,null,null)
D.dwl=w([D.c0h,A.bo,D.fQU],x.p)
D.fcu=new B.c8(A.aL,A.e,A.i,A.l,null,A.p,null,0,D.dwl,null)
D.c1F=new B.ae(A.j9,18,A.ku,null,null,null)
D.ftT=new B.F(!0,A.ku,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1A=new B.B("Write",null,D.ftT,null,null,null,null,null,null,null,null,null)
D.dcJ=w([D.c1F,A.af,D.h1A],x.p)
D.fcB=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.dcJ,null)
D.fOC=new B.B("Download picture",null,A.o1,null,null,null,null,null,null,null,null,null)
D.bMB=new B.dE(A.dY,A.A,A.f,D.fOC,null)
D.bMN=new B.di(1,A.cl,D.bMB,null)
D.dpi=w([K.asj,A.af,D.bMN],x.p)
D.fcC=new B.c8(A.aL,A.ba,A.i,A.l,null,A.p,null,0,D.dpi,null)
D.bXP=new B.ae(A.I_,22,A.bl,null,null,null)
D.fYF=new B.B("NGMY NEWS",null,M.abr,null,null,null,null,null,null,null,null,null)
D.d3y=w([D.bXP,A.af,D.fYF],x.p)
D.fcM=new B.c8(A.aL,A.e,A.O,A.l,null,A.p,null,0,D.d3y,null)
D.fcY=new B.pG(!1,!1,null,V.Yg,null,A.c4,null,null,null)
D.aaz=new B.iR([D.cu,D.ds,D.vr,D.Ju,D.vs,D.aLL],B.at("iR<hI>"))
D.eoR={title:0,quote:1,closing:2,bio:3}
D.fes=new B.db(D.eoR,4,x.M)
D.emw={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fev=new B.db(D.emw,5,x.M)
D.eo5={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aaB=new B.db(D.eo5,8,x.M)
D.enf={Design:0,Transitions:1,Insert:2}
D.feD=new B.db(D.enf,3,x.M)
D.hKa=new B.iR([D.a8I],B.at("iR<wB>"))
D.eno={float3d:0,drift:1,pulse:2}
D.feH=new B.db(D.eno,3,x.M)
D.aTB=new B.iR([D.Jr,D.Js,D.Jt],B.at("iR<mV>"))
D.emu={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aTE=new B.db(D.emu,14,x.M)
D.hKb=new B.db(A.i7,0,B.at("db<wB>"))
D.enl={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.V4=new B.db(D.enl,4,x.M)
D.emm={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aTH=new B.db(D.emm,30,x.M)
D.enu={circle:0,triangle:1,hexagon:2,diamond:3}
D.ff9=new B.db(D.enu,4,x.M)
D.fhD=new B.av(390,844)
D.fit=new B.a5(20,20,A.Ml,null)
D.aUw=new B.a5(null,2.5,null,null)
D.c1J=new B.ae(A.ja,19,A.c,null,null,null)
D.fiO=new B.a5(38,38,D.c1J,null)
D.c_P=new B.ae(A.zE,22,A.c,null,null,null)
D.fiR=new B.a5(40,40,D.c_P,null)
D.fjq=new B.hJ(2,10,10,1.15,null)
D.aUF=new B.hJ(2,16,14,0.62,null)
D.bHC=new B.R(32,30,32,40)
D.bh7=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bVO=new B.ae(A.qN,56,D.bh7,null,null,null)
D.aka=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fw3=new B.F(!0,D.aka,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVw=new B.B("Your books will live here.",null,D.fw3,null,A.K,null,null,null,null,null,null,null)
D.dfM=w([D.bVO,A.W,D.fVw],x.p)
D.byi=new B.fn(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.dfM,null)
D.evN=new B.D(D.bHC,D.byi,null)
D.fjM=new B.m6(D.evN,null)
D.fVt=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.b1(D.fVt,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fTw=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new B.b1(D.fTw,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fYJ=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fkd=new B.b1(D.fYJ,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZi=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new B.b1(D.fZi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fS8=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fkG=new B.b1(D.fS8,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5B=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.b1(D.h5B,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2C=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fl9=new B.b1(D.h2C,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZr=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.flU=new B.b1(D.fZr,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMM=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fma=new B.b1(D.fMM,null,null,null,null,null,null,null,A.j0,null,null,null,null,A.ou,!1,null,null,null,A.t,null)
D.fOM=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fms=new B.b1(D.fOM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fV8=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new B.b1(D.fV8,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fUP=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fmv=new B.b1(D.fUP,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0y=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fmw=new B.b1(D.h0y,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3s=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fmB=new B.b1(D.h3s,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIN=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new B.b1(D.fIN,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPX=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new B.b1(D.fPX,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4g=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new B.b1(D.h4g,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3N=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.b1(D.h3N,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fHH=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fna=new B.b1(D.fHH,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_C=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fnj=new B.b1(D.h_C,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3l=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new B.b1(D.h3l,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3c=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new B.b1(D.h3c,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fHy=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new B.b1(D.fHy,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLK=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fo8=new B.b1(D.fLK,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2q=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fok=new B.b1(D.h2q,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLw=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.foB=new B.b1(D.fLw,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bpv=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d26=w([A.ix,A.pm,D.bpv,D.agz,A.ix],x.O)
D.foZ=new B.h1(A.A,0,6.283185307179586,A.x,D.d26,null,null)
D.dbP=w([A.bL,A.c2,A.id,D.C5,A.bL],x.O)
D.aVd=new B.h1(A.A,0,6.283185307179586,A.x,D.dbP,null,null)
D.dr9=w([A.bT,A.bc,A.b9,A.b4,A.bl,A.bT],x.O)
D.fp3=new B.h1(A.A,0,6.283185307179586,A.x,D.dr9,null,null)
D.d4q=w([A.qt,A.pn,A.om,A.ix,A.qt],x.O)
D.fp4=new B.h1(A.A,0,6.283185307179586,A.x,D.d4q,null,null)
D.dr3=w([A.aS,A.bN,A.bj,A.an,A.aS],x.O)
D.fp5=new B.h1(A.A,0,6.283185307179586,A.x,D.dr3,null,null)
D.dzy=w([A.bw,A.b9,A.bc,A.bT,A.bw],x.O)
D.fp7=new B.h1(A.A,0,6.283185307179586,A.x,D.dzy,null,null)
D.bkP=new B.u(1,0,1,0,A.q)
D.bpQ=new B.u(1,0,1,1,A.q)
D.bmE=new B.u(1,0,0,1,A.q)
D.bix=new B.u(1,1,0,1,A.q)
D.dvi=w([A.MC,A.ZC,D.bkP,D.bpQ,D.bmE,D.bix,A.MC],x.O)
D.fp8=new B.h1(A.A,0,6.283185307179586,A.x,D.dvi,null,null)
D.fpn=new C.axT(2,"immersiveSticky")
D.fpo=new C.axT(3,"edgeToEdge")
D.fpp=new C.axT(4,"manual")
D.frY=new B.F(!0,A.bB,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new B.F(!0,A.og,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVO=new B.F(!0,A.eU,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsw=new B.F(!0,E.nC,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new B.F(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvM=new B.F(!0,A.ey,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxh=new B.F(!0,A.bN,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxs=new B.F(!0,A.k_,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxG=new B.ta(!0,A.JR,null,null,null,null,A.dH,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy8=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyT=new B.F(!0,A.jF,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzg=new B.F(!0,A.aF,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exf=new B.j4(1,1,0.7568627450980392,0.027450980392156862)
D.fzk=new B.ta(!0,D.exf,null,null,null,null,A.dH,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aiV=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aWC=new B.F(!0,D.aiV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzs=new B.F(!0,D.aka,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWE=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new B.ta(!0,A.pQ,null,null,null,null,A.dH,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAZ=new B.F(!0,D.aiV,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KW=new B.F(!0,A.aF,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new B.F(!0,A.c2,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new B.F(!0,A.bN,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new B.F(!0,A.bL,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC1=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a60,null,null,null)
D.fC4=new B.F(!0,A.bZ,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCm=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCy=new B.F(!0,A.dn,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDa=new B.F(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDl=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDC=new B.F(!0,A.ab,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXj=new B.F(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bvJ=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fFv=new B.F(!0,D.bvJ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXp=new B.F(!0,E.nC,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG0=new B.F(!0,A.bN,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG3=new B.F(!0,N.lG,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyo=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHj=new B.B("NEW",null,D.fyo,null,null,null,null,null,null,null,null,null)
D.fHB=new B.B("Hati ya Kuhowesha",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fI4=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fIt=new B.B("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fJe=new B.B("Big quote mark",null,A.jA,null,null,null,null,null,null,null,null,null)
D.fJg=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fJs=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fJV=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fJX=new B.B("How many slides?",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fKv=new B.B("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.ftW=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKU=new B.B("Luxury FX",null,D.ftW,null,null,null,null,null,null,null,null,null)
D.fLf=new B.B("Font",null,A.tU,null,null,null,null,null,null,null,null,null)
D.fLq=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new B.F(!0,A.bN,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLH=new B.B("Example  GA847",null,D.fF_,null,null,null,null,null,null,null,null,null)
D.fM6=new B.B("Design shapes",null,A.jA,null,null,null,null,null,null,null,null,null)
D.fMh=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fMm=new B.B("Non-stop (loop)",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fMA=new B.B("Hati ya Kuhoweya",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fMU=new B.B("Photo studio",null,A.fH,null,null,null,null,null,null,null,null,null)
D.fNo=new B.B("Add your picture",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fxH=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNp=new B.B("Enter document code",null,D.fxH,null,A.K,null,null,null,null,null,null,null)
D.fNq=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fNv=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new B.F(!0,E.nC,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.B("Delete this book?",null,D.fv3,null,A.K,null,null,null,null,null,null,null)
D.fzW=new B.F(!0,E.nC,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOO=new B.B("Your library",null,D.fzW,null,null,null,null,null,null,null,null,null)
D.fOT=new B.B("Delete",null,A.aWu,null,null,null,null,null,null,null,null,null)
D.fOW=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.EU,null,null,null,null,null,null,null,null,null)
D.fP6=new B.B("Element flies in",null,A.aWI,null,null,null,null,null,null,null,null,null)
D.We=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fPw=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fPU=new B.B("Cancel",null,E.aWT,null,null,null,null,null,null,null,null,null)
D.fPW=new B.B("The lines and circles that come with the design",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fDL=new B.F(!0,A.hA,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new B.B("DOCUMENT CODE",null,D.fDL,null,null,null,null,null,null,null,null,null)
D.fRe=new B.B("Quotes",null,G.ac2,null,null,null,null,null,null,null,null,null)
D.fx3=new B.F(!0,N.lG,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRo=new B.B("Add a picture",null,D.fx3,null,null,null,null,null,null,null,null,null)
D.fRw=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.VR,null,A.K,null,null,null,null,null,null,null)
D.fRA=new B.B("Look & feel",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fRF=new B.B("Rings",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fRL=new B.B("W",null,A.tU,null,null,null,null,null,null,null,null,null)
D.fRV=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fSe=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.W0,null,A.K,null,null,null,null,null,null,null)
D.fSg=new B.B("Write your book",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fT0=new B.B("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fTi=new B.B("Malipo ya Awamu ya Mahari",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fxw=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTx=new B.B("Create with AI",null,D.fxw,null,A.K,null,null,null,null,null,null,null)
D.fU2=new B.B("Apply look",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fyd=new B.F(!0,A.et,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUR=new B.B("Type your presentation below",null,D.fyd,null,A.K,null,null,null,null,null,null,null)
D.fUU=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aXt,null,A.K,null,null,null,null,null,null,null)
D.fUW=new B.B("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fsP=new B.F(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV2=new B.B("Done",null,D.fsP,null,null,null,null,null,null,null,null,null)
D.fVn=new B.B("Delete",null,A.o3,null,null,null,null,null,null,null,null,null)
D.fVy=new B.B("Hati ya Kiapo cha Uongozi",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fwm=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWt=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fwm,null,A.K,null,null,null,null,null,null,null)
D.fWQ=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fWX=new B.B("Layout",null,A.W4,null,null,null,null,null,null,null,null,null)
D.fXC=new B.B("Print",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fXL=new B.B("X",null,A.tU,null,null,null,null,null,null,null,null,null)
D.fYn=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.xu,null,null,null,null,null,null,null,null,null)
D.fYX=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fZa=new B.B("Hati ya Kuhowa",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fZc=new B.B("Choose a class template",null,A.fU,null,null,null,null,null,null,null,null,null)
D.fZe=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fZl=new B.B("Download the newspaper picture",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fZy=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fZF=new B.B("Done",null,A.aXh,null,null,null,null,null,null,null,null,null)
D.fZQ=new B.B("Ending celebration",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fZR=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.h_5=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.tT,null,null,null,null,null,null,null,null,null)
D.h04=new B.B("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h05=new B.B("What would you like to do?",null,D.aWC,null,null,null,null,null,null,null,null,null)
D.h0a=new B.B("Delete",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h0H=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.h0L=new B.B("Hati (Documents)",null,A.fU,null,null,null,null,null,null,null,null,null)
D.h0Y=new B.B("Done",null,A.lx,null,null,null,null,null,null,null,null,null)
D.fEQ=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h11=new B.B("Delete presentation?",null,D.fEQ,null,A.K,null,null,null,null,null,null,null)
D.h1l=new B.B("After the last slide it starts again from the first",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h1x=new B.B("\ud83c\udf33",null,A.ET,null,A.K,null,null,null,null,null,null,null)
D.h1P=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h1W=new B.B("Transfer document",null,A.mD,null,null,null,null,null,null,null,null,null)
D.h26=new B.B("Add to the slides",null,A.h4,null,null,null,null,null,null,null,null,null)
D.h2u=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fuz=new B.F(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2I=new B.B("Make a book",null,D.fuz,null,null,null,null,null,null,null,null,null)
D.h2M=new B.B("Books",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fwW=new B.F(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2O=new B.B("Keep this page open until it finishes.",null,D.fwW,null,null,null,null,null,null,null,null,null)
D.h2Q=new B.B("Making your video",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h2V=new B.B("LANGUAGE",null,Y.tV,null,null,null,null,null,null,null,null,null)
D.h30=new B.B("Use this ending",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h38=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3a=new B.B("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.h3r=new B.B("Delete from the database?",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h3t=new B.B("H",null,A.tU,null,null,null,null,null,null,null,null,null)
D.h3T=new B.B("NGMY Quotes",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h4m=new B.B("Cover",null,D.aXp,null,null,null,null,null,null,null,null,null)
D.h4q=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h4r=new B.B("Each page becomes its own slide you can present",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h4N=new B.B("Y",null,A.tU,null,null,null,null,null,null,null,null,null)
D.h4Z=new B.B("Crop the picture",null,A.lx,null,null,null,null,null,null,null,null,null)
D.h55=new B.B("Edit text",null,A.KT,null,null,null,null,null,null,null,null,null)
D.h7q=B.dS("a9Q")
D.hue=new B.bo("slides-create-kiapo",x.W)
D.F5=new C.aze(0,"none")
D.b0y=new C.aze(1,"zipCrypto")
D.b0z=new C.aze(2,"aes")
D.hx5=new F.Qy("","",null)
D.hyd=new C.bf2(null)
D.hzl=new C.a05(null)
D.hCd=new C.aeO(null)
D.hCf=new C.aGv(null)
D.hF0=new C.a1j(null)
D.hFM=new C.a1Q(null)
D.hGo=new C.bx4(null)})();(function staticFields(){$.hvz=null
$.hvA=null
$.hvB=null
$.hvC=null
$.hcC=B.x_("_lastQuoRemDigits")
$.hcD=B.x_("_lastQuoRemUsed")
$.azC=B.x_("_lastRemUsed")
$.hcE=B.x_("_lastRem_nsh")
$.qA=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Cn=B.T(x.N,x.I)
$.cg7=!1
$.hre=null
$.Co=B.T(x.N,B.at("a9<n,n>"))
$.hAB=B.T(B.at("lf"),x.N)
$.hAN=B.T(B.at("lf"),x.E)
$.hyH=!1
$.bCK="q"
$.RC=0
$.Dr=B.T(x.N,B.at("ai<Ah>"))
$.hz4=!1
$.hem=!1
$.hFR=null
$.iaN=B.T(x.N,B.at("aB<n?>"))
$.Lp=""
$.je=0
$.hsq=function(){var w=x.N
return B.T(w,w)}()
$.hsp=B.T(x.N,x.R)
$.heI=!1
$.ahs=B.T(x.N,x.E)
$.hfA=0
$.heM=B.T(x.N,x.R)
$.bnk=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iBb","DO",()=>C.bcv(0))
w($,"iB9","a48",()=>C.bcv(1))
w($,"iBa","hJX",()=>C.bcv(2))
w($,"iB8","hjP",()=>$.a48().vK(0))
w($,"iB6","hJV",()=>C.bcv(1e4))
w($,"iB7","hJW",()=>B.F5(8))
w($,"iwS","hHQ",()=>B.F5(0))
w($,"ix_","hHU",()=>B.F5(0))
w($,"iwZ","hHT",()=>B.c36(0))
w($,"iFc","hM7",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a7v.gdP(D.a7v),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iFE","bHj",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nc(new C.fV0(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nc(new C.fV1(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fV2(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nc(new C.fVd(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nc(new C.fVi(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fVj(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nc(new C.fVk(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nc(new C.fVl(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nc(new C.fVm(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fVn(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nc(new C.fVo(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nc(new C.fV3(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nc(new C.fV4(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nc(new C.fV5(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fV6(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nc(new C.fV7(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nc(new C.fV8(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nc(new C.fV9(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nc(new C.fVa(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nc(new C.fVb(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nc(new C.fVc(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nc(new C.fVe(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nc(new C.fVf(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nc(new C.fVg(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nc(new C.fVh(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.at("O<Fy>"))})
w($,"iFf","hM9",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["s518BeVTkXrliaeZNRiOTyMJ9fA="]=a.current})($__dart_deferred_initializers__);