((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,W,A7,Al,Am,C={
ui(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hbf(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KB(d){var w
if(d===0)return $.DJ()
if(d===1)return $.a3V()
if(d===2)return $.hI1()
if(Math.abs(d)<4294967296)return C.bc6(A.o.L(d))
w=C.i2m(d)
return w},
bc6(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ui(4,w)
return new C.oi(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ui(1,w)
return new C.oi(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.ui(2,w)
return new C.oi(v===0?!1:s,w,v)}v=A.o.ap(A.o.galE(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ap(d,65536)}v=C.ui(v,w)
return new C.oi(v===0?!1:s,w,v)},
i2m(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DJ()
w=$.hI0()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lp(A.aI.gaU(w))
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
q=new C.oi(!1,r,4)
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hbg(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hu3(d,e,f,g){var w,v,u,t,s,r=A.o.ap(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fR(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
htZ(d,e,f,g){var w,v,u,t,s=A.o.ap(f,16)
if(A.o.F(f,16)===0)return C.hbg(d,e,s,g)
w=e+s+1
C.hu3(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i2p(d,e,f,g){var w,v,u,t,s=A.o.ap(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fR(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fR(u,r)}w&2&&B.aj(g)
g[n]=o},
cOT(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i2n(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bc7(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hu4(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.ap(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.ap(r,65536)}},
i2o(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oi:function oi(d,e,f){this.a=d
this.b=e
this.c=f},
cOU:function cOU(){},
cOV:function cOV(){},
cOW:function cOW(d,e){this.a=d
this.b=e},
cOX:function cOX(d){this.a=d},
aTo:function aTo(d,e){this.a=d
this.b=e},
hjJ(d,e,f){var w=new C.SO(d,A.o.ap(Date.now(),1000),e)
w.Q=f
return w},
SO:function SO(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4S:function a4S(d,e){this.a=d
this.b=e},
bKt:function bKt(d){this.a=d
this.c=this.b=0},
hLo(){return new C.bIL()},
bIL:function bIL(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGT:function cGT(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i22(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cc(d.gd34(d)))
v=f*2+2
u=C.hrJ(C.hrL(),64)
t=new C.cpC(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpD(e,1000,v)
s=new Uint8Array(v)
return A.aI.dq(s,0,t.cQU(w,0,s,0))},
cGR:function cGR(d,e){this.c=d
this.d=e},
ayV:function ayV(d,e){this.a=d
this.b=e},
cGU:function cGU(d,e,f,g){var _=this
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
baN:function baN(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGS:function cGS(){this.a=$},
hty(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hL7(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHk:function bHk(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hhl(d,e){e&=31
return(d&$.qu[e])<<e>>>0},
nN(d,e){e&=31
return(d>>>e|C.hhl(d,32-e))>>>0},
hrK(d){var w,v=new C.aut()
if(B.iU(d))v.aMN(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hrL(){var w=C.hrK(0),v=new Uint8Array(4),u=x.S
u=new C.cpE(w,v,A.Fl,5,B.c_(5,0,!1,u),B.c_(80,0,!1,u))
u.ia(0)
return u},
hrJ(d,e){var w=new C.cpA(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpz:function cpz(){},
cpD:function cpD(d,e,f){this.a=d
this.b=e
this.c=f},
cpx:function cpx(){},
aus:function aus(d){this.a=d},
cpC:function cpC(d){this.a=$
this.b=d
this.c=$},
cpy:function cpy(){},
cpw:function cpw(){},
aut:function aut(){this.b=this.a=$},
cpB:function cpB(){},
cpE:function cpE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpA:function cpA(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpv:function cpv(){},
cpu:function cpu(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSI:function bSI(){},
bSJ:function bSJ(d){this.a=d},
cA1:function cA1(){},
bTK:function bTK(d,e){this.a=d
this.b=!1
this.c=e},
bTL:function bTL(){},
ieS(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axw(d){var w=0,v=B.j(x.H),u
var $async$axw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.flo?2:4
break
case 2:w=5
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axw)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIOverlays",C.ieS(null),u),$async$axw)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axw,v)},
axz:function axz(d,e){this.a=d
this.b=e},
a9w:function a9w(d){this.a=d},
ihE(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fGK(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.i.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fGK:function fGK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoX(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.ai4("ngmy_menu_lib_v1_zzslides_index",A.bL),$async$aoX)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cE(t,new C.c3G(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3H())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoX,v)},
aoZ(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoX(),$async$aoZ)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aU(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nM("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$aoZ)
case 7:if(!f){w=5
break}s.n(0,p,B.I(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
w=10
return B.b(B.nM("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$aoZ)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoZ,v)},
c3I(d){return C.hRc(d)},
hRc(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3I=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.ai4("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ib),$async$c3I)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X5(B.a3(q,x.N,x.z))
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
return B.i($async$c3I,v)},
aoY(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoX(),$async$aoY)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nQ(r,new C.c3J(d))
w=4
return B.b(B.nM("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$aoY)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRn("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoY)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoY,v)},
c3G:function c3G(){},
c3H:function c3H(){},
c3J:function c3J(d){this.a=d},
isp(d,e,f){return B.bT(A.L,null,new C.fXE(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fXE:function fXE(d,e,f){this.a=d
this.b=e
this.c=f},
a28:function a28(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKZ:function aKZ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fi4:function fi4(d,e){this.a=d
this.b=e},
fi8:function fi8(d){this.a=d},
fi9:function fi9(d){this.a=d},
fia:function fia(d,e,f){this.a=d
this.b=e
this.c=f},
fi5:function fi5(d){this.a=d},
fi6:function fi6(d){this.a=d},
fi7:function fi7(d,e){this.a=d
this.b=e},
fi_:function fi_(d){this.a=d},
fhY:function fhY(d){this.a=d},
fhZ:function fhZ(d){this.a=d},
fi0:function fi0(d){this.a=d},
fi1:function fi1(d){this.a=d},
fie:function fie(d,e){this.a=d
this.b=e},
fid:function fid(d,e){this.a=d
this.b=e},
fi3:function fi3(d,e,f){this.a=d
this.b=e
this.c=f},
fi2:function fi2(d,e,f){this.a=d
this.b=e
this.c=f},
fib:function fib(d,e){this.a=d
this.b=e},
fic:function fic(d,e){this.a=d
this.b=e},
fih:function fih(d){this.a=d},
fii:function fii(d,e){this.a=d
this.b=e},
fig:function fig(d,e){this.a=d
this.b=e},
fif:function fif(){},
hwy(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cE(v,new C.fpI(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fpJ(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a37(d){return C.ij_(d)},
ij_(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a37=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fJV(n)
t=4
j=m
i=C
w=7
return B.b(B.a3H("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a37)
case 7:j.$1(i.hwy(f))
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
return B.b(B.az(),$async$a37)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hwy(B.aS(J.t(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b7<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b7(n,p)
g=C
w=13
return B.b(C.fpR(d),$async$a37)
case 13:p=j.C(new i.Y(h,new g.fJT(f),o),o.k("M.E"))
A.d.aZ(p,new C.fJU())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a37,v)},
aiF(d,e){return C.is2(d,e)},
is2(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiF=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fX5(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aix("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiF)
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
return B.b(B.az(),$async$aiF)
case 12:p=g
w=13
return B.b(p.aB("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiF)
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
return B.i($async$aiF,v)},
fpR(d){return C.i7_(d)},
i7_(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fpR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fpR)
case 7:r=f
q=r.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$fpR,v)},
ahx(d,e){return C.ihw(d,e)},
ihw(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahx=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ahx)
case 6:s=g
r=B.aR(x.N)
q=s.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("cj.E"))
w=7
return B.b(s.aB("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahx)
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
return B.b(C.a37(d),$async$ahx)
case 8:n=g
J.nQ(n,new C.fGk(e))
w=9
return B.b(C.aiF(d,n),$async$ahx)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahx,v)},
isu(d,e){return B.a7(d,!1).ca(B.e9(new C.fY_(e),!0,null,x.H))},
i2r(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cQg())},
oJ:function oJ(d,e,f){this.a=d
this.b=e
this.c=f},
fpI:function fpI(){},
fpJ:function fpJ(){},
fJV:function fJV(d){this.a=d},
fJT:function fJT(d){this.a=d},
fJU:function fJU(){},
fX5:function fX5(){},
fGk:function fGk(d){this.a=d},
fY_:function fY_(d){this.a=d},
ZQ:function ZQ(d,e){this.c=d
this.a=e},
azt:function azt(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQg:function cQg(){},
cQi:function cQi(d,e){this.a=d
this.b=e},
cQl:function cQl(d){this.a=d},
cQm:function cQm(d){this.a=d},
cQk:function cQk(){},
cQn:function cQn(d,e){this.a=d
this.b=e},
cQj:function cQj(d){this.a=d},
cQo:function cQo(){},
cQh:function cQh(d,e){this.a=d
this.b=e},
cQp:function cQp(){},
cQc:function cQc(d){this.a=d},
cQa:function cQa(d){this.a=d},
cQb:function cQb(d){this.a=d},
cQd:function cQd(d,e){this.a=d
this.b=e},
cQ9:function cQ9(d){this.a=d},
cQ8:function cQ8(d){this.a=d},
cQ6:function cQ6(d,e){this.a=d
this.b=e},
cQ7:function cQ7(d){this.a=d},
cQf:function cQf(){},
cQe:function cQe(d){this.a=d},
cQ5:function cQ5(d,e){this.a=d
this.b=e},
cQ4:function cQ4(d,e){this.a=d
this.b=e},
cQ3:function cQ3(d,e){this.a=d
this.b=e},
cQq:function cQq(d){this.a=d},
ZO:function ZO(d,e,f){this.c=d
this.d=e
this.a=f},
aGN:function aGN(d,e,f){this.a=d
this.b=e
this.c=f},
azp:function azp(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPx:function cPx(d){this.a=d},
cPw:function cPw(d){this.a=d},
cPz:function cPz(d,e,f){this.a=d
this.b=e
this.c=f},
cPH:function cPH(){},
cPI:function cPI(d){this.a=d},
cPA:function cPA(d,e,f){this.a=d
this.b=e
this.c=f},
cPy:function cPy(d,e){this.a=d
this.b=e},
cPC:function cPC(d,e){this.a=d
this.b=e},
cPD:function cPD(d,e){this.a=d
this.b=e},
cPE:function cPE(d,e){this.a=d
this.b=e},
cPB:function cPB(d){this.a=d},
cPG:function cPG(d){this.a=d},
cPF:function cPF(d,e){this.a=d
this.b=e},
cPN:function cPN(d){this.a=d},
cPJ:function cPJ(d,e){this.a=d
this.b=e},
cPK:function cPK(d,e){this.a=d
this.b=e},
cPL:function cPL(d,e){this.a=d
this.b=e},
cPM:function cPM(d,e){this.a=d
this.b=e},
azr:function azr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ilm(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fOs(),x.H).eM(new C.fOt())}}else if(s)C.hy7()}catch(t){}},
hy7(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fu3())}catch(u){}},
ilp(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fOs:function fOs(){},
fOt:function fOt(){},
fu3:function fu3(){},
hD_(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ei(v,w,"").split(":"))},
hCX(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lu)return null
return A.a.b2(w,14)},
hg_(d){var w
if(d.b!==D.lu)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ilP(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hD0(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ilK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fPr(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gn(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sw(A.a.aC(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sw(A.a.b2(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ilI(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fPq())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aSp(w,u,s,0)}return w},
ilM(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6Q:$.hKa(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hCY(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fqN(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hD_(q)===e)return q}return null},
ilN(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I8).a},
ilO(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afh(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afh(0,0,0)
v=C.fqN(b6,b0)
u=C.fqN(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ilM(b2,C.ilK(C.hCY(b2),v.r))
if(s.a!==0){u.r=C.ilI(C.hCY(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hD_(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fqN(b6,n)
i=C.fqN(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.hg_(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hCX(a8)===a0||C.hg_(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RS(a1,new C.fPx(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eP(""+1000*a6+"_"+a9,D.lu,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,d.at,D.bk,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ct,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afh(k,t,e)},
ilJ(d){var w=C.ilN(d)
if(d.w==="hati_kuhowa")return C.hCk("",w)
return C.hCj("",w)},
fPr:function fPr(){},
fPq:function fPq(){},
fPx:function fPx(d){this.a=d},
hxP(){var w=new B.V(Date.now(),0,!1),v=new C.ft4()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hg8(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fQp(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lu&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hDe(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fQp(d)
w=B.bj(u)
if(w==null)return!C.fQp(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
imu(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hVf(d){return A.a.i(d).toLowerCase()},
arm(d){return C.hVh(d)},
hVh(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$arm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$arm)
case 7:r=f
p=r.tS("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.iqC(),B.U(o).k("N<1,n>")).bY(0,new C.cfY())
o=B.d4(o,o.$ti.k("M.E"))
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
return B.i($async$arm,v)},
arl(d,e){return C.hVg(d,e)},
hVg(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arm(d),$async$arl)
case 3:r=g
if(!J.c5(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arl)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pX(r)),$async$arl)
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
return B.i($async$arl,v)},
arn(d,e){return C.hVi(d,e)},
hVi(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arn=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arm(d),$async$arn)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arn)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pX(r)),$async$arn)
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
return B.i($async$arn,v)},
Wt(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wt=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h8D&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Wt)
case 7:r=a7
q=B.aS(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.hT(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.X5(B.a3(f.a(n.b),e,a0)))}$.a8k=o}}t=2
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
return B.b(B.c8(),$async$Wt)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.ux("civic_hati_kiapo_uongozi",null,A.el),$async$Wt)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.hT(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.X5(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ch(o,B.a4(o).k("ch<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8k.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcG()
else f=!0
f=!f}else f=!0
if(f)$.a8k.n(0,i.a,i.b)}w=20
return B.b(C.aro(),$async$Wt)
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
case 16:case 9:$.h8D=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wt,v)},
aro(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aro=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aro)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8k,o=new B.ch(o,B.a4(o).k("ch<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aB("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.aw(r,null)),$async$aro)
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
return B.i($async$aro,v)},
b1t(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wt(!1),$async$b1t)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8k.h(0,t)
r=s==null?null:s.hR()
if(r==null){u=null
w=1
break}u=C.bER(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1t,v)},
a8l(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8l=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hR()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a8k.n(0,d,o)
$.h8D=!0
w=3
return B.b(C.aro(),$async$a8l)
case 3:w=4
return B.b(B.c8(),$async$a8l)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8k,n=new B.ch(n,B.a4(n).k("ch<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.aj())}w=9
return B.b(B.nM("civic_hati_kiapo_uongozi",B.I(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],e,x.z),null),$async$a8l)
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
return B.i($async$a8l,v)},
arp(d){var w=0,v=B.j(x.T),u,t,s
var $async$arp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a6O(A.eO),$async$arp)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$arp)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1s(t,d),$async$arp)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arp,v)},
b1s(d,e){return C.hVj(d,e)},
hVj(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1s=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1s)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iC("media")
w=8
return B.b(p.xH(q,new Uint8Array(B.cc(d)),D.bKK),$async$b1s)
case 8:n=p.Db(q)
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
return B.i($async$b1s,v)},
Lo(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
fsw(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hcU(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.i.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ac(g,3),4280640491,i,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
fs4(d,e,f,g){return C.fsw(0,0.002,D.fJ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hcV(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r7,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ac(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
hxO(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ei(v,w,"").split(":"))},
bER(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.hxO(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lu&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hR()}h=C.hfE(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Co(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hxO(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lu&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fOq(a2))}else A.d.bt(a1.z,new C.fOr())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fQp(a0))a0.ax=a6.f.aa().ag()
return a0},
hfE(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fRc(D.a7Q),l=C.cD(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lU,1,0,0)],k),i=B.a([],k)
i.push(C.Lo("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lo("TAREHE:",A.bn,o,16,A.bt,A.H,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hcU("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hxP()))
i.push(C.fs4(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lo("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lo("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cH,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fsw(0,0.002,D.fJ,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hcV("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hcV("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hcV("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fsw(268435456,0.175,D.bk,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lo("VIDEO YA KIAPO",A.bn,o,10,A.bt,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lU,0.77,0.115,0.492))
i.push(C.Lo("Rais Anayeapa:",A.bn,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lo("Jina:",A.bn,p,13,A.bt,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hcU("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.fs4(0.195,0.7130000000000001,0.62,n))
i.push(C.Lo("Sahihi:",A.bn,p,13,A.bt,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.fs4(0.21500000000000002,0.795,0.38,n))
i.push(C.Lo("Tarehe:",A.bn,p,13,A.bt,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hcU("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hxP()))
i.push(C.fs4(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fsw(0,0.032,D.bk,o,1,"state_box",0.72,0.14,0.875),C.Lo("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rV(4294967035,t,0,0,j,l,D.qX,"","",u,D.dm)
return C.Co(t,t,t,t,D.oN,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahF(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.M(x.q).f.U(D.fg8)
w=1
break}w=3
return B.b(C.Wt(!0),$async$ahF)
case 3:w=4
return B.b(C.b1t(p),$async$ahF)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hDe(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bm6,null,new C.fJh(p),f,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahF)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fJi(),f,null,!0,!0,x.y),$async$ahF)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hfE(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.M(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hfE(p))
case 1:return B.h(u,v)}})
return B.i($async$ahF,v)},
ft4:function ft4(){},
cfY:function cfY(){},
fOq:function fOq(d){this.a=d},
fOr:function fOr(){},
fJh:function fJh(d){this.a=d},
fJf:function fJf(d){this.a=d},
fJg:function fJg(d){this.a=d},
fJi:function fJi(){},
fJd:function fJd(d){this.a=d},
fJe:function fJe(d){this.a=d},
arU:function arU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFB:function aFB(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
elS:function elS(d){this.a=d},
elQ:function elQ(d){this.a=d},
elR:function elR(d){this.a=d},
elT:function elT(d){this.a=d},
elU:function elU(d){this.a=d},
x7(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
hxp(d,e,f){var w=4291404327
return B.a([C.qt(0,f,D.eZ,w,2,"ring_l",f,d-f*0.42,e),C.qt(0,f,D.eZ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fru(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qt(4294967288,f,D.eZ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qt(h,s,D.eZ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qt(h,f*0.46,D.eZ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qt(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
frt(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.i.ac(g,3)+":"+A.o.ac(j,1):u+A.i.ac(g,3),4280640491,j,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,l,0,0,"",D.ct,D.cW,g,e,f)},
bCe(d,e,f,g){return C.qt(0,0.002,D.fJ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hxo(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qt(0,0.036,D.bk,h,1.4,"banner_box_"+d,w,v,e),C.x7(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hCZ(){var w=new B.V(Date.now(),0,!1),v=new C.fPw()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hxq(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x7(r+".",A.bn,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.frt("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bCe(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.x7("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,s,t,g-0.004),C.bCe(t,g+0.044,s,w)],x.u)},
ai6(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dsi,D.cum,D.dk8,D.dmc],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hc5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fRc(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,1,0,0)],x.u)
A.d.v(v,C.i9E(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i9E(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x7("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hxp(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hxp(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fru(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fru(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x7("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qt(0,0.062,D.eZ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qt(0,0.046,D.eZ,b1,1,"crest_i",0.084,0.458,0.02),C.x7("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qt(0,0.002,D.fJ,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qt(b9,0.016,D.lv,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qt(0,0.002,D.fJ,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x7("TAREHE:",A.bn,c0,20,A.H,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.frt("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hCZ()),C.bCe(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x7(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qt(c0,0.0026,D.bk,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qt(c3.e,0.138,D.bk,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.i.ac(0.82,3),b2,19,A.bt,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bk,b3,2,c5,0,0,"",D.ct,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.i.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qt(0,0.036,D.bk,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.i.ac(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bk,b3,2,c7,0,0,"",D.ct,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hxo(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x7(c9,A.bn,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.i.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.frt("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.jc
$.jc=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.jc
$.jc=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eP(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bt,A.aG,c0,A.bn,a9,D.bk,b2,b3,2,0,!1,s,0,D.ct,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.fJ,0,b5,0.8,0,!1,g,0,D.ct,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.jc
$.jc=p+1
i=Date.now()
h=$.jc
$.jc=h+1
g=Date.now()
f=$.jc
$.jc=f+1
e=Date.now()
a3=$.jc
$.jc=a3+1
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aG,b7,A.e_,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aG,b7,A.K,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ct,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hxo("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7H||w===D.a7J||w===D.a7G||w===D.a7I){w=t-0.008
A.d.v(c2,C.fru(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fru(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qt(0,a4,D.bk,c0,1.3,"wit_table_border",0.82,0.09,t),C.qt(c0,a4,D.bk,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qt(0,0.0022,D.fJ,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x7("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x7("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hxq("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hxq("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qt(0,0.11,D.bk,c0,1.2,"mw_box",0.82,0.09,t),C.x7("MWANDISHI",A.bn,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x7("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.frt("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bCe(0.215,p,0.3116,b5),C.x7("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.3161999999999999,0.5738,s-0.044),C.bCe(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qt(0,0.032,D.bk,c0,1,"state_box",0.7,0.15,a8),C.x7("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ilL(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hgi(d.d),p=new C.fPs(s),o=new C.fPt(s),n=d.z,m=n===D.a7H||n===D.a7J||n===D.a7G||n===D.a7I,l=n===D.aK_||n===D.a7K||n===D.aK0,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7K?26:16
i.push(new C.fPv().$1$size(w))}if(n===D.aK1)i.push(D.fYf)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iR,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.m(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTB,p.$1$w(0.9),D.aTB,p.$1$w(0.75)],j),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(D.bgC,t,n,w,t,t,A.n),t,t,t,t,A.amU,t,t,t))
i.push(A.am)
i.push(new C.fPu(r).$1("NIMETOWE"))
i.push(A.fL)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NW,new B.c7(A.aL,A.e,A.j,A.l,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.de,new B.bz(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(A.alx,B.x(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
hCj(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ai6(e,t)
if(r==null)r=A.d.gH(D.I8)
w=C.cD()
v=C.rV(r.e,t,0,0,C.hc5(r,0.165,y.O,D.dmP,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qX,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Co(t,t,t,t,D.oN,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hCk(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ai6(e,t)
if(r==null)r=A.d.gH(D.I8)
w=C.cD()
v=C.rV(r.e,t,0,0,C.hc5(r,0.165,y.f,D.di6,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qX,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Co(t,t,t,t,D.oN,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGa(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGa=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0s(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGa,v)},
ahG(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJl(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N1,null,new C.fJm(p),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahG)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Hati ya Kuhowa",D.I8),$async$ahG)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahG)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCj(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahG,v)},
ahH(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahH=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJp(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N1,null,new C.fJq(p),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahH)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Hati ya Kuhoweya",D.I8),$async$ahH)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahH)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCk(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
ahI(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahI=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fJt(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N1,null,new C.fJu(m),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahI)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Malipo ya Awamu ya Mahari",D.Sw),$async$ahI)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahI)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ai6(s,D.Sw)
if(q==null)q=A.d.gH(D.Sw)
n=C.cD()
p=C.rV(q.e,null,0,0,C.hc5(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dcz,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qX,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dm)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Co(null,null,null,null,D.oN,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahI,v)},
y9:function y9(d,e){this.a=d
this.b=e},
jC:function jC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fPw:function fPw(){},
fPs:function fPs(d){this.a=d},
fPu:function fPu(d){this.a=d},
fPv:function fPv(){},
fPt:function fPt(d){this.a=d},
h0s:function h0s(d,e){this.a=d
this.b=e},
aeq:function aeq(d,e,f){this.c=d
this.d=e
this.a=f},
e8h:function e8h(d,e,f){this.a=d
this.b=e
this.c=f},
e8g:function e8g(d,e){this.a=d
this.b=e},
e8f:function e8f(d,e){this.a=d
this.b=e},
adP:function adP(d,e,f){this.c=d
this.d=e
this.a=f},
fJl:function fJl(){},
fJm:function fJm(d){this.a=d},
fJj:function fJj(d){this.a=d},
fJk:function fJk(d){this.a=d},
fJp:function fJp(){},
fJq:function fJq(d){this.a=d},
fJn:function fJn(d){this.a=d},
fJo:function fJo(d){this.a=d},
fJt:function fJt(){},
fJu:function fJu(d){this.a=d},
fJr:function fJr(d){this.a=d},
fJs:function fJs(d){this.a=d},
Lr(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,k,l,m)},
Dp(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hya(d,e,f){return C.Dp(0,0.002,D.fJ,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCp(d,e,f,g,h){return B.a([C.Dp(4294967288,0.032,D.bk,4291404327,1.15,"pill_"+d,g,f,e),C.Lr(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hcZ(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dp(0,0.002,D.fJ,g,1,"orn_l_"+t,u,d,v),C.Dp(h,0.016,D.lv,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dp(0,0.002,D.fJ,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2w(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lr(d,A.bn,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.i.ac(t,3),4280640491,i,A.cH,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,t,u,g-0.002),C.hya(u,g+0.018,t)],x.u)},
hyb(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dp(h,0.028,D.bk,h,0,"chv_"+d,g,e,f),C.Dp(w,0.024,D.lv,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dp(w,0.024,D.lv,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lr(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCo(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lr("Sahihi:",A.bn,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,v,w,f-0.006),C.hya(w,f+0.016,v)],x.u)},
hgj(d){var w,v
for(w=0;w<19;++w){v=D.SM[w]
if(v.a===d)return v}return null},
io3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ai6(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ai6(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ai6(u,D.Sw)
v=w==null?l:w.d
if(v==null){w=C.ai6(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hgj(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hz_.a8(0)
$.hzb.a8(0)
t=C.fRc(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hht(d){var w=0,v=B.j(x.T),u
var $async$hht=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h1V(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hht,v)},
yc:function yc(d,e){this.a=d
this.b=e},
o4:function o4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blD:function blD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h1V:function h1V(){},
aet:function aet(d){this.a=d},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqD:function eqD(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
ag8:function ag8(d,e,f){this.c=d
this.d=e
this.a=f},
hgi(d){return $.hzb.c4(0,d,new C.fRe(d))},
fRc(d){return $.hz_.c4(0,d,new C.fRd(d))},
fE(d){return B.h6c(d>>>16&255,d>>>8&255,d&255,255)},
icS(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hAh(4294570461,4293910718,4284234270,u)
case 1:return C.hAh(4294635750,4293975240,t,4292912216)
case 2:w=C.fq1(s,4294505966,r)
C.bC8(w,14,16,p)
C.kK(w,8,9,464,836,u,1.2)
C.Dl(w,2,2,1,1,u,10)
C.Dl(w,478,2,-1,1,u,10)
C.Dl(w,2,852,1,-1,u,10)
C.Dl(w,478,852,-1,-1,u,10)
return w
case 3:return C.fq1(4294966515,4294373082,4289102906)
case 4:return C.i7l(C.fq1(4294376440,4293653998,4290287194))
case 5:w=C.fq1(4294965238,4294437098,4288444980)
C.bC8(w,14,16,4283043359)
C.kK(w,6,7,468,840,u,1)
C.kK(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,n,4294175448)
C.tf(v,n)
C.kK(v,24,24,432,806,4286209070,1)
C.a2j(v,12,12,468,12,o,3,20)
C.a2j(v,12,842,468,842,o,3,20)
C.a2j(v,12,12,12,842,o,3,20)
C.a2j(v,468,12,468,842,o,3,20)
return v
case 7:return C.i56(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,m,4293911504)
C.tf(v,m)
C.kK(v,28,28,424,798,l,1)
C.fzI(v,28,28,l,k)
C.fzI(v,452,28,l,k)
C.fzI(v,28,826,l,k)
C.fzI(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,j,4294111986)
C.tf(v,j)
C.kK(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i9q(i,4294173372)
case 11:return C.iaB(4294439140,4293449662)
case 12:return C.i4T(h,4294239432)
case 13:return C.ia0(4294244340,4293193448)
case 14:return C.ieo(4294505710,4293780694)
case 15:return C.foT(4294966259,4294439138,o,p,q)
case 16:return C.foT(4294966776,4294178544,o,g,g)
case 17:return C.foT(4294965493,4294504170,o,4286200650,q)
case 18:return C.foT(4294966519,4294373862,o,p,p)
case 19:return C.i8w()
case 20:return C.i8x()
case 21:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,h,4293976768)
C.tf(v,h)
C.bC8(v,14,16,p)
B.iW(v,!0,C.fE(u),4,475,4,9)
B.iW(v,!0,C.fE(u),4,475,844,849)
B.iW(v,!0,C.fE(u),4,9,4,849)
B.iW(v,!0,C.fE(u),470,475,4,849)
C.a2j(v,10,12,470,12,u,2,16)
C.a2j(v,10,842,470,842,u,2,16)
C.a2j(v,10,12,10,842,u,2,18)
C.a2j(v,470,12,470,842,u,2,18)
C.Dl(v,2,2,1,1,t,10)
C.Dl(v,478,2,-1,1,t,10)
C.Dl(v,2,852,1,-1,t,10)
C.Dl(v,478,852,-1,-1,t,10)
C.kK(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,s,4294438872)
C.tf(v,s)
C.kK(v,14,16,452,822,o,2.2)
C.kK(v,22,24,436,806,o,1)
C.heo(v,!1,!1,o,p,p,36,14,16)
C.kY(v,240,20,7,o,!0)
C.kY(v,240,834,7,o,!0)
C.kY(v,18,427,7,o,!0)
C.kY(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,i,4293910712)
C.tf(v,i)
B.iW(v,!0,C.fE(u),0,479,0,20)
B.iW(v,!0,C.fE(u),0,479,834,853)
B.iW(v,!0,C.fE(u),0,20,0,853)
B.iW(v,!0,C.fE(u),460,479,0,853)
B.iW(v,!0,C.fE(f),5,474,5,9)
B.iW(v,!0,C.fE(f),5,474,844,848)
B.iW(v,!0,C.fE(f),5,9,5,848)
B.iW(v,!0,C.fE(f),470,474,5,848)
C.kK(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cb,0,A.e8,854,q,0,3,q,A.cb,480,!1)
C.z5(v,e,4294174404)
C.tf(v,e)
C.bC8(v,14,16,p)
B.iW(v,!0,C.fE(u),3,476,3,8)
B.iW(v,!0,C.fE(u),3,476,845,850)
B.iW(v,!0,C.fE(u),3,8,3,850)
B.iW(v,!0,C.fE(u),471,476,3,850)
C.kK(v,9,10,462,834,t,1)
C.kK(v,14,16,452,822,u,1.8)
C.kY(v,240,8,4,u,!0)
C.kY(v,240,846,4,u,!0)
C.kY(v,8,427,4,u,!0)
C.kY(v,472,427,4,u,!0)
C.kY(v,8,8,3,t,!0)
C.kY(v,472,8,3,t,!0)
C.kY(v,8,846,3,t,!0)
C.kY(v,472,846,3,t,!0)
return v}},
z5(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.i.V(q*w+p*t),0,255)
u=A.o.D(A.i.V(o*w+n*t),0,255)
w=A.o.D(A.i.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l_(d,!1,A.dj,new B.MH(s),r,A.d2,1,0,w-1,k,k);++k}},
tf(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e1()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.is()
v=A.o.D(A.i.L(s.gb8(s))-3,0,255)
r=A.o.D(A.i.L(s.gbe())-3,0,255)
q=A.o.D(A.i.L(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kK(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,f,f)
w=f+h
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,w,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,e,e,f,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,t,t,f,w)},
Dl(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e+g*j,f,f)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,e+g*t,v,v)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,w,v,f+h*t)},
hAh(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e8,854,w,0,3,w,A.cb,480,!1)
C.z5(v,d,e)
C.tf(v,d)
B.iW(v,!0,C.fE(f),0,479,0,28)
B.iW(v,!0,C.fE(f),0,479,826,853)
B.iW(v,!0,C.fE(f),0,28,0,853)
B.iW(v,!0,C.fE(f),452,479,0,853)
C.kK(v,5,5,470,844,g,1.1)
C.kK(v,28,28,424,798,g,1.6)
C.Dl(v,2,2,1,1,g,11)
C.Dl(v,478,2,-1,1,g,11)
C.Dl(v,2,852,1,-1,g,11)
C.Dl(v,478,852,-1,-1,g,11)
return v},
fq1(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e8,854,w,0,3,w,A.cb,480,!1)
C.z5(v,d,e)
C.tf(v,d)
C.kK(v,14,16,452,822,f,1.6)
C.kK(v,20,22,440,810,f,0.8)
return v},
bC8(d,e,f,g){var w,v=C.fE(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i7l(d){var w,v,u=4291404327
C.bC8(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kY(d,w,8,3,u,!0)
C.kY(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kY(d,7,v,3,u,!0)
C.kY(d,473,v,3,u,!0)}return d},
fD_(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.js(e,f),new B.js(e+g*n,f),new B.js(e,f+h*n)],t)
B.a33(d,C.fE(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.js(s,u),new B.js(e+g*v,u),new B.js(s,f+h*v)],t)
B.a33(d,C.fE(k),t)
t=A.i.V(n*0.39)
C.kY(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kY(d,e+g*t,f+h*3,4,k,!0)
C.kY(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kY(d,e+g*t,f,5,k,!0)
C.kY(d,e,f+h*t,5,k,!0)}},
heo(d,e,f,g,h,i,j,k,l){var w,v
C.fD_(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fD_(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fD_(d,k,v,1,-1,e,f,g,h,i,j)
C.fD_(d,w,v,-1,-1,e,f,g,h,i,j)},
a2j(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ln(d,!0,A.dj,new B.rp(p),null,A.d2,j,r,q)}},
fBR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rp(o),null,A.d2,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rp(o),null,A.d2,1.4,q,q,p,p+h*r)}},
i56(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e8,854,o,0,3,o,A.cb,480,!1)
C.z5(n,d,e)
C.tf(n,d)
C.kK(n,20,20,440,814,f,1.2)
C.fBR(n,0,0,1,1,g)
C.fBR(n,480,0,-1,1,g)
C.fBR(n,0,854,1,-1,g)
C.fBR(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.i.V(240+24*r)
q=A.i.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l_(n,!0,A.dj,new B.rp(p),o,A.d2,1.2,240,r,60,q)}return n},
fzI(d,e,f,g,h){var w
C.fGL(d,!0,C.fE(g),13,e,f)
C.fGL(d,!0,C.fE(g),9,e,f)
w=B.a([new B.js(e,f-4),new B.js(e+4,f),new B.js(e,f+4),new B.js(e-4,f)],x.J)
B.a33(d,C.fE(h),w)},
kY(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.js(e,v),new B.js(u,f),new B.js(e,t),new B.js(s,f)],x.J)
if(i){B.a33(d,C.fE(h),r)
return}B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,u,v,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,u,e,f,t)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,s,t,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,s,e,f,v)},
foS(d,e,f,g,h,i,j){var w,v=B.a([new B.js(e,f),new B.js(e+g*28,f),new B.js(e,f+h*28)],x.J)
B.a33(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kY(d,v,w,6,j,!0)
C.kY(d,v,w,3,i,!0)},
foT(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e8,854,w,0,3,w,A.cb,480,!1)
C.z5(v,d,e)
C.tf(v,d)
C.kK(v,18,18,444,818,f,2)
C.kK(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fE(h),28,451,28,34)
C.foS(v,18,18,1,1,g,f)
C.foS(v,462,18,-1,1,g,f)
C.foS(v,18,836,1,-1,g,f)
C.foS(v,462,836,-1,-1,g,f)
return v},
i8w(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e8,854,v,0,3,v,A.cb,480,!1)
C.z5(r,u,4294240980)
C.tf(r,u)
C.kK(r,10,12,460,830,t,3.2)
C.kK(r,18,20,444,814,s,1.2)
C.kK(r,24,26,432,802,t,1.8)
C.heo(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kY(r,w,16,3,t,!0)
C.kY(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kY(r,16,w,3,t,!0)
C.kY(r,464,w,3,t,!0)}return r},
i8x(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e8,854,t,0,3,t,A.cb,480,!1)
C.z5(p,s,4294373080)
C.tf(p,s)
C.kK(p,16,18,448,818,r,2.4)
C.kK(p,24,26,432,802,4286209044,1)
w=new C.frl(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.heo(p,!1,!0,r,q,q,34,16,18)
return p},
bCQ(d,e,f,g,h,i){B.iW(d,!0,C.fE(i),e,e+g,f,f+h)},
bDH(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.i.V(v*l+u*m),0,255)
j=A.o.D(A.i.V(t*l+s*m),0,255)
l=A.o.D(A.i.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l_(d,!1,A.dj,new B.MH(i),null,A.d2,1,e,w,l,l)}},
i9p(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ap(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l_(d,!1,A.dj,new B.rp(r),null,A.d2,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ap(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l_(d,!1,A.dj,new B.rp(r),null,A.d2,1,t,t,f,s);++q}},
i9q(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e8,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i9p(t,v,w,30,D.d4L,(A.o.ap(v,30)+A.o.ap(w,30)&1)===0)
C.bCQ(t,44,44,392,766,d)
C.bDH(t,44,44,392,766,d,e)
C.tf(t,d)
C.kK(t,44,44,392,766,4292128567,2.2)
C.kK(t,50,50,380,754,4279898632,0.8)
return t},
iaA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kY(d,e,f,7,h,!0)
C.kY(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,w,u,v,t)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l_(d,!0,A.dj,new B.rp(p),o,A.d2,1.2,w,v,q,q)}break
default:B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e-8,e+8,f,f)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e,e,f-8,f+8)
B.ln(d,!0,A.dj,C.fE(h),o,A.d2,2,e,f)}},
iaB(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e8,854,s,0,3,s,A.cb,480,!1)
B.iW(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.iaA(r,u,v,w,4292391514)}C.bCQ(r,46,46,388,762,d)
C.bDH(r,46,46,388,762,d,e)
C.tf(r,d)
C.kK(r,46,46,388,762,4291404327,1.8)
return r},
hvy(d,e,f,g){C.fGL(d,!0,C.fE(g),16,e,f)
C.fGL(d,!0,C.fE(g),11,e,f)
C.kY(d,e,f,6,g,!0)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e-14,e+14,f,f)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e,e,f-14,f+14)},
i4T(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e8,854,v,0,3,v,A.cb,480,!1)
B.iW(s,!0,C.fE(4280948752),0,479,0,853)
B.iW(s,!0,C.fE(u),0,479,0,78)
B.iW(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hvy(s,w,39,t)
C.hvy(s,w,815,t)}C.bCQ(s,38,92,404,670,d)
C.bDH(s,38,92,404,670,d,e)
C.tf(s,d)
C.kK(s,38,92,404,670,t,1.8)
C.kK(s,45,99,390,656,4287322667,0.8)
return s},
ia_(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.js(e,f),new B.js(q-5,w),new B.js(q,f-(18-Math.abs(r)*3)),new B.js(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a33(d,new B.rp(o),p)}B.ln(d,!0,A.dj,C.fE(4292128567),null,A.d2,3,e,f)},
ia0(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e8,854,s,0,3,s,A.cb,480,!1)
C.z5(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l_(q,!0,A.dj,new B.rp(v),s,A.d2,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l_(q,!0,A.dj,new B.rp(u),s,A.d2,1.1,v,v,0,853)}B.iW(q,!0,C.fE(r),0,479,0,70)
B.iW(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.ia_(q,70+t*85,48,4292128567)
C.bCQ(q,48,78,384,712,d)
C.bDH(q,48,78,384,712,d,e)
C.tf(q,d)
C.kK(q,48,78,384,712,4291404327,1.6)
return q},
ieo(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e8,854,t,0,3,t,A.cb,480,!1)
B.iW(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kY(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ln(r,!0,A.dj,new B.rp(u),t,A.d2,1,v,w)}C.bCQ(r,40,40,400,774,d)
C.bDH(r,40,40,400,774,d,e)
C.tf(r,d)
C.kK(r,40,40,400,774,4291058750,2)
C.kK(r,48,48,384,758,s,0.8)
return r},
la:function la(d,e){this.a=d
this.b=e},
fRe:function fRe(d){this.a=d},
fRd:function fRd(d){this.a=d},
frl:function frl(d){this.a=d},
fRS(d){var w
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
iat(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hcS(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p5(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Aj.ai2(A.a.aC(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agv(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vQ(null,""),$async$agv)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nk(n)
if(e==null)s=A.hY
else{r=C.iat(e)
s=B.a([new B.a1g(A.cP.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.re(t,d,s,"news",E.GA),$async$agv)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LS(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agv,v)},
bFk(d){return C.inK(d)},
inK(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agv(r,null),$async$bFk)
case 7:q=f
p=C.hcS(q)
if(p==null){u=d
w=1
break}o=d.aEN(p)
if(o.r.length===0||A.d.aM(o.r," ").length<A.d.aM(d.r," ").length*0.5){u=d
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
return B.i($async$bFk,v)},
hzv(d){var w,v=F.hfA(d)
v=B.aL(v,"book","newspaper")
if(F.a3n(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fVR(d,e,f,g){return C.ipD(d,e,f,g)},
ipD(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fVR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fRS(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hDn()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agv('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hzv(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fVR)
case 3:r=m.hcS(i)
if(r==null)throw B.W(y.S)
q=new C.Ac(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEN(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aM(t," ")
if(F.a3n(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3n(A.d.aM(t," "))==="sw"?C.bFk(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVR,v)},
bEP(d,e,f,g,h){return C.ilk(d,e,f,g,h)},
ilk(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEP=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aM(l,"\n")
l=C.hDn()
k=A.Y.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agv('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hzv(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEP)
case 3:p=j.hcS(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEN(B.a3(o,x.N,x.z))
m=A.Y.aw(n.aj(),null)!==A.Y.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3n(A.d.aM(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFk(n),$async$bEP)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8Z(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEP,v)},
a8Z:function a8Z(d,e,f){this.a=d
this.b=e
this.c=f},
it2(d,e){return B.a7(d,!1).ca(B.e9(new C.h25(e),!0,null,x.H))},
h25:function h25(d){this.a=d},
WW:function WW(d,e){this.c=d
this.a=e},
aFS:function aFS(d,e,f,g,h,i,j,k){var _=this
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
etB:function etB(d){this.a=d},
etA:function etA(){},
etC:function etC(d){this.a=d},
etz:function etz(d,e){this.a=d
this.b=e},
etD:function etD(){},
etd:function etd(d,e){this.a=d
this.b=e},
et9:function et9(d,e){this.a=d
this.b=e},
etk:function etk(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
etj:function etj(d){this.a=d},
ete:function ete(d,e){this.a=d
this.b=e},
etb:function etb(d){this.a=d},
etc:function etc(d){this.a=d},
ets:function ets(d){this.a=d},
ett:function ett(d){this.a=d},
etr:function etr(d){this.a=d},
etu:function etu(d,e){this.a=d
this.b=e},
etq:function etq(d,e){this.a=d
this.b=e},
etv:function etv(d){this.a=d},
etp:function etp(d){this.a=d},
etw:function etw(d){this.a=d},
eto:function eto(d){this.a=d},
etx:function etx(d,e){this.a=d
this.b=e},
etn:function etn(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
eta:function eta(d,e){this.a=d
this.b=e},
fQO(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fQO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hx7){w=1
break}r=new C.fQP()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fQO)
case 7:$.hx7=!0
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
return B.i($async$fQO,v)},
bFb(d){return A.Dm[B.mr(d)-1]+", "+A.oI[B.bL(d)-1]+" "+B.bU(d)+", "+B.bC(d)},
idv(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dwV[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hfZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fP6(),B.U(v).k("Y<1>")))
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
continue}o=new C.fP8(j,h)
n=new C.fP7(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ap(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
hcB(d,e){var w=new C.fqV()
return A.d.cF(e,0,new C.fqT(w))>=A.d.cF(d,0,new C.fqU(w))},
hud(d){var w,v,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bv())
return u},
Ac:function Ac(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjD:function cjD(d){this.a=d},
cjB:function cjB(){},
cjC:function cjC(){},
tM:function tM(d,e){this.a=d
this.b=e},
Ca:function Ca(d,e){this.a=d
this.b=e},
lx:function lx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fQP:function fQP(){},
fP6:function fP6(){},
fP8:function fP8(d,e){this.a=d
this.b=e},
fP7:function fP7(d,e,f){this.a=d
this.b=e
this.c=f},
fqV:function fqV(){},
fqW:function fqW(){},
fqT:function fqT(d){this.a=d},
fqU:function fqU(d){this.a=d},
b2Y:function b2Y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjE:function cjE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjF:function cjF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjG:function cjG(d){this.a=d},
beE:function beE(d){this.a=d},
beD:function beD(d,e){this.b=d
this.a=e},
bwE:function bwE(d){this.a=d},
bb5:function bb5(d,e){this.b=d
this.a=e},
bu7:function bu7(d,e){this.b=d
this.a=e},
hFs(d,e){return B.a7(d,!1).ca(B.e9(new C.h28(e,null),!0,null,x.E))},
h28:function h28(d,e){this.a=d
this.b=e},
WX:function WX(d,e,f){this.c=d
this.d=e
this.a=f},
aFV:function aFV(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eun:function eun(){},
euo:function euo(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d,e){this.a=d
this.b=e},
euf:function euf(d){this.a=d},
eug:function eug(d,e,f){this.a=d
this.b=e
this.c=f},
euc:function euc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euj:function euj(d,e){this.a=d
this.b=e},
eue:function eue(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
eul:function eul(d,e){this.a=d
this.b=e},
beb:function beb(d,e,f){this.b=d
this.c=e
this.a=f},
it8(d){return B.a7(d,!1).ca(B.e9(new C.h2o(),!0,null,x.I))},
bCB(d,e){var w,v,u,t,s,r,q=B.c_(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
he3(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h2o:function h2o(){},
a17:function a17(d){this.a=d},
oT:function oT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHj:function aHj(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a_=_.bb=_.bn=_.y2=0
_.b7=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c9=_.bH=_.bm=0
_.cO=_.c6=!1
_.c=_.a=null},
f3g:function f3g(d){this.a=d},
f28:function f28(d,e){this.a=d
this.b=e},
f2w:function f2w(d,e){this.a=d
this.b=e},
f2G:function f2G(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1R:function f1R(d){this.a=d},
f2p:function f2p(d,e){this.a=d
this.b=e},
f2q:function f2q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2C:function f2C(d,e,f){this.a=d
this.b=e
this.c=f},
f2B:function f2B(d,e){this.a=d
this.b=e},
f2D:function f2D(d,e){this.a=d
this.b=e},
f2A:function f2A(d,e){this.a=d
this.b=e},
f2F:function f2F(d,e,f){this.a=d
this.b=e
this.c=f},
f2E:function f2E(d,e){this.a=d
this.b=e},
f1I:function f1I(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1H:function f1H(){},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1N:function f1N(){},
f1M:function f1M(d,e){this.a=d
this.b=e},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1O:function f1O(d){this.a=d},
f1E:function f1E(d,e){this.a=d
this.b=e},
f1P:function f1P(d){this.a=d},
f1D:function f1D(d,e){this.a=d
this.b=e},
f35:function f35(d,e){this.a=d
this.b=e},
f3c:function f3c(d){this.a=d},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3e:function f3e(){},
f36:function f36(d,e){this.a=d
this.b=e},
f34:function f34(d,e){this.a=d
this.b=e},
f37:function f37(d,e){this.a=d
this.b=e},
f33:function f33(d,e){this.a=d
this.b=e},
f38:function f38(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f32:function f32(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f39:function f39(d){this.a=d},
f3a:function f3a(d,e){this.a=d
this.b=e},
f3b:function f3b(d){this.a=d},
f31:function f31(d){this.a=d},
f2P:function f2P(d){this.a=d},
f2Q:function f2Q(d){this.a=d},
f2O:function f2O(d,e){this.a=d
this.b=e},
f2J:function f2J(d,e){this.a=d
this.b=e},
f2R:function f2R(d){this.a=d},
f2U:function f2U(d){this.a=d},
f2N:function f2N(d){this.a=d},
f2V:function f2V(d){this.a=d},
f2W:function f2W(d){this.a=d},
f2X:function f2X(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2Z:function f2Z(d){this.a=d},
f2L:function f2L(d){this.a=d},
f3_:function f3_(d,e){this.a=d
this.b=e},
f2K:function f2K(d,e){this.a=d
this.b=e},
f30:function f30(d){this.a=d},
f2S:function f2S(d){this.a=d},
f2T:function f2T(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2u:function f2u(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e){this.a=d
this.b=e},
f2v:function f2v(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2j:function f2j(d){this.a=d},
f2n:function f2n(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2h:function f2h(d,e){this.a=d
this.b=e},
f2_:function f2_(d){this.a=d},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f25:function f25(d){this.a=d},
f26:function f26(d){this.a=d},
f27:function f27(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1m:function f1m(d){this.a=d},
f1n:function f1n(d){this.a=d},
f1o:function f1o(d){this.a=d},
f1p:function f1p(d){this.a=d},
f1k:function f1k(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1r:function f1r(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1W:function f1W(d){this.a=d},
f1X:function f1X(d){this.a=d},
f1Y:function f1Y(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1A:function f1A(d){this.a=d},
f1t:function f1t(d){this.a=d},
f1B:function f1B(d){this.a=d},
f1s:function f1s(d){this.a=d},
f2o:function f2o(d){this.a=d},
f2g:function f2g(d){this.a=d},
f2c:function f2c(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2d:function f2d(d,e){this.a=d
this.b=e},
f2a:function f2a(d,e){this.a=d
this.b=e},
f2e:function f2e(d,e){this.a=d
this.b=e},
f29:function f29(d,e){this.a=d
this.b=e},
f2f:function f2f(d){this.a=d},
f2z:function f2z(d){this.a=d},
f2y:function f2y(d,e,f){this.a=d
this.b=e
this.c=f},
f2x:function f2x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2H:function f2H(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d){this.a=d},
f3f:function f3f(d){this.a=d},
bhN:function bhN(d,e){this.b=d
this.a=e},
inV(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
inW(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
if(m.length===0)return d
w=new B.fd("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.aC(d,v,n)
p=m[r].b
p=A.a.aC(d,n,p.index+p[0].length)
n=B.af("[*~^]",!0,!1,!1,!1)
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
bDb(){var w=$.bCi,v=$.Rq
$.Rq=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,C.bDb(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
ol(d,e,f,g){var w=f*9
return C.ii(D.eZ,d-f/2,e-w/32,f,w/16,g,0)},
i6P(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCi
o=$.Rq
$.Rq=o+1
w.push(new C.eP(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCi
o=$.Rq
$.Rq=o+1
w.push(new C.eP(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.ol(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ol(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bk,0.08,0.08,0.5,0.003,v,0),C.ii(D.bk,0.58,0.08,0.004,0.06,v,0),C.ii(D.bk,0.58,0.14,0.34,0.003,v,0),C.ii(D.bk,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bk,0.08,0.8,0.004,0.14,t,0),C.ii(D.bk,0.08,0.94,0.6,0.003,t,0),C.ol(0.58,0.08,0.05,e),C.ol(0.92,0.22,0.05,e),C.ol(0.08,0.8,0.05,f),C.ol(0.68,0.94,0.05,f),C.ol(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lv,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lv,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lv,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lv,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.ol(0.5,0.5,1.5,w|335544320),C.ol(0.5,0.5,1.15,w|402653184),C.ol(0.5,0.5,0.8,v|436207616),C.ol(0.95,0.05,0.4,v|855638016),C.ol(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.ol(0.85,0.08,0.7,w|1140850688),C.ol(0.1,0.35,0.5,v|855638016),C.ol(0.9,0.62,0.55,v|771751936),C.ol(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bk,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bk,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bk,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bk,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.ol(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.ol(0.5,0.2,0.65,(w|3422552064)>>>0),C.ol(0.5,0.2,0.95,w|855638016),C.ii(D.bk,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bk,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.kc,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.kc,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.kc,0.15,0.86,0.6,0.14,1712265002,0),C.ol(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d6j[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCi
l=$.Rq
$.Rq=l+1
w.push(new C.eP(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.eZ,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.ol(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.kc,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.kc,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.kc,0.65,-0.1,0.3,0.55,v,0.5),C.ol(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bk,0.06,0.04,0.88,0.002,e,0),C.ii(D.bk,0.06,0.96,0.88,0.002,e,0),C.ii(D.bk,0.06,0.04,0.004,0.92,e,0),C.ii(D.bk,0.936,0.04,0.004,0.92,e,0),C.ii(D.bk,0.09,0.07,0.82,0.001,w,0),C.ii(D.bk,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.kd,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.kd,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.kd,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bk,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bk,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bk,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bk,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eZ,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eZ,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eZ,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eZ,-0.05,0.9,0.4,0.12,v,-0.9),C.ol(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bk,0.09,0.12,0.16,0.006,e,0),C.ii(D.bk,0.05,0.03,0.9,0.001,w,0),C.ii(D.bk,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ikn(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCi=j
$.Rq=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fMv()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bDb(),g,"","",0,!1,"",0,D.bk,l,2,"",0,0,"",D.ct,D.lU,1,0,0))
if(a9)A.d.v(q,C.i6P(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.inV(B.aL(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fMu(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cH,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bDb(),a0,"","",0,!1,a2,0,D.bk,l,2,"",0,0,"",D.ct,D.lU,a3,a4,a5))
return C.rV(s,r,0,0,q,j+"_slide",D.qX,"","","",D.dm)},
rU:function rU(d,e){this.a=d
this.b=e},
mp:function mp(d,e,f,g,h,i,j,k,l,m){var _=this
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
fMv:function fMv(){},
fMu:function fMu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hXs(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.cl8(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ad(u,t,s,B.w(w==null?"":w))},
fUd(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fUd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxu){w=1
break}$.hxu=!0
t=4
w=7
return B.b(B.az(),$async$fUd)
case 7:r=e
q=B.aS(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.hT(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hXs(m)
if(l!=null)J.c5(n,l)}$.Dm.c4(0,B.w(o.a),new C.fUe(n))}C.hdI()
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
return B.i($async$fUd,v)},
hdI(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dr($.Dm,$.Dm.r,$.Dm.e);w.C();)J.nQ(w.d,new C.fyZ(v))
$.Dm.bt($.Dm,new C.fz_())},
aQ0(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQ0=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aQ0)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ch($.Dm,B.a4($.Dm).k("ch<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gR(h)
g=o
J.c5(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aB("String","ngmy_slides_ai_history_v1",A.Y.aw(n,null)),$async$aQ0)
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
return B.i($async$aQ0,v)},
ioy(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hdI()
w=$.Dm.c4(0,d,new C.fUg())
v=Date.now()
u=B.C(e,B.a4(e).k("cj.E"))
J.pW(w,0,new C.Ad(new B.V(v,0,!1),f,u,g))
C.aQ0()},
iov(d){var w,v=$.Dm.h(0,d)
if(v==null||J.cq(v))return
w=J.cC(v)
w.cB(v,0)
if(w.gau(v))$.Dm.W(0,d)
C.aQ0()},
Ad:function Ad(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl8:function cl8(){},
fUe:function fUe(d){this.a=d},
fyZ:function fyZ(d){this.a=d},
fz_:function fz_(){},
fUg:function fUg(){},
ioA(d){return A.d.dP(D.wU,new C.fUj(d),new C.fUk())},
hXq(d){var w
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
hXp(d){var w
switch(d.a){case 0:w=D.apv
break
case 1:w=A.zh
break
case 2:w=A.PQ
break
case 3:w=I.apa
break
case 4:w=A.aq2
break
case 5:w=A.mm
break
default:w=null}return w},
ia5(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RW[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RW[w]
if(!B.cQ(v.toLowerCase(),t,0))u=B.cQ(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hXr(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
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
o.push(q)}return A.Y.aw(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
iow(d,e,f,g,h){var w=new B.N(D.wU,new C.fUc(),x.eC).aM(0,", "),v=""+d,u=C.hDf(h),t=F.fNU(h),s=C.hz9(g),r=e.q(0,D.Jm)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jn)?'- New slides get an "icon3d" from: '+A.d.aM(D.RW,", ")+".\n":"",p=e.q(0,D.DX)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iox(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wU,new C.fUf(),x.eC).aM(0,", "),p=new B.fd("")
if(e.q(0,D.Jm)){p.a=s
w=s}else w=""
if(e.q(0,D.Jn))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aM(D.RW,", ")+".\n")
if(e.q(0,D.DX))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hDf(d)
v=F.fNU(d)
u=C.hz9(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aii(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DL(a3,"{"),a5=J.h5K(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mc(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cq(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fSa(),m).bY(0,new C.fSb())
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
f=C.ia5(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a96(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.wU,new C.fSc(r))?r:a7
o=C.fye(J.t(w,"logo_frame"),D.Di)
n=C.fye(J.t(w,"logo_ring"),D.Db)
m=C.fye(J.t(w,"photo_frame"),D.Di)
l=C.fye(J.t(w,"photo_ring"),D.Db)
return new C.asO(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2U(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hCm(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DY),f7=f6?C.i3d():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e1()
v.cY(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o8("luxe",u.a,A.mm,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dm)
w=s}if(w==null)w=C.ioA(f9.b)
r=g2.q(0,D.a81)||f6
q=g2.q(0,D.Jm)
p=g2.q(0,D.TU)
o=new C.fMz()
n=B.a([],x.g)
m=new C.fMC(o,w,r)
l=new C.fMB(o,r)
k=new C.fMA(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.aV(u,new C.fMy(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d7Z[b8]
c0=D.d6Q[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fax.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eZ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eZ,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.na,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qY,500,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TR
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eZ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lv,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bk,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DV
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eZ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.na,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cH,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qY,500,f2,f0))
d3=D.n9
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eZ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bk,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ve:D.ct
c1.push(new C.eP(b4,D.a8_,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aG,4279310375,A.bn,e4,D.bk,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n9
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eZ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.na,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qY,450,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TR
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eZ,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eZ,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bk,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bk,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aM(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jk,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n9}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dm,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i4S(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dzm[A.o.F(b1,6)]:s
n.push(new C.m0(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Co(e4,e4,e4,e4,D.DU,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aC(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fOX(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fOX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DX)
n=e.q(0,D.Jn)
if(!o&&!n){u=D.a6X
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fP_(o,s[r],n,$.i8N,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fOX)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOX,v)},
fNX(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fNX=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iox(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPi(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fNX)
case 3:u=s.aPF(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNX,v)},
bEQ(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEQ=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.ioy(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aii(i,"colorful")
t=C.iow(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPi(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hY),$async$bEQ)
case 3:u=o.aPF(m,f,h,g,D.ecZ,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEQ,v)},
aPi(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPi=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vQ(null,""),$async$aPi)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nk(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.re(t,d,g,"slides",null),$async$aPi)
case 7:q=i
p=q.b
if(p!=null){o=C.aii(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LS(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPi,v)},
aPF(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DX)||e.q(0,D.Jn)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DX)}w=6
return B.b(C.fOX(d,t),$async$aPF)
case 6:s=k
w=4
break
case 5:s=D.a6X
case 4:t=d.c
w=A.d.aV(t,new C.fqP())?7:9
break
case 7:r=$.hE7
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPF)
case 10:q=k
p=q!=null?A.Y.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hCm(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hXr(new C.asO(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fqQ(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k7<cj.E,n>")
t=B.C(new B.k7(e,new C.fqR(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TU)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPF,v)},
hgI(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5G[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
itd(d){return B.bT(A.L,null,new C.h2A(),d,!0,!0,!0,null,!1,!1,x.I)},
i3R(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aN(d)},
itc(d,e,f){return B.bT(A.L,null,new C.h2z(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hgJ(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hgK(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fye(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fyf(w))?w:""},
hz9(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hE5(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aii(a1==null?"":a1,a0),a3=C.aii(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nz(new B.Y(r,new C.fUl(t[p]),q))
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
g=B.C(new B.Y(k,new C.fUm(),v),r)
A.d.aZ(g,new C.fUn())
if(g.length===0)continue
f=new C.fUo(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ioR(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aL1
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eeS
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eeT
return null},
hyM(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cL(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ioB(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oN
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cW)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.i.D(m*0.85,10,120)
break
case 1:j=A.i.D(m*1.15,10,120)
if(C.hyM(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hyM(n,i,v,u))if(n.w>10){f=h+1
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
ioz(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aii(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5G[r]
if(q.b===s)w.J(0,q)}}v=C.hgJ(e)
u=C.hgK(e)
p=C.hCm(n,D.a6X,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fUh(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k7<cj.E,n>")
o=B.C(new B.k7(w,new C.fUi(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TU)
return p},
it_(d,e,f){return B.bT(A.L,null,new C.h1N(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i3d(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e1()
s.cY(t)
w=D.cLY[s.az(10)]
v=new C.eq1(s)
u=x.N
return new C.eq0(w,s.az(4),J.fs(v.$1$2(D.dcP,1,x.ff)),w.r[s.az(3)],v.$1$2(D.duy,2+s.az(2),u),v.$1$2(D.dn_,2,u),v.$1$2(D.dxN,4,x.fP),t)},
i4S(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e1()
a1.cY(a5.w+a3*13)
w=new C.fmX(a4)
v=new C.fmZ(a4,d)
u=new C.fmY(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c3(a2,0,w.$8(D.eZ,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2U(a0,52),"lux_spot",a5.xc(0,"spotlight")))
else A.d.c3(a2,0,w.$8(D.bk,0,0,1,1,0,"lux_back",a5.xc(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c3(a2,1,w.$8(D.bk,0,0,1,1,0,"lux_back2",a5.aHm(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.022,0.038,0.956,0.924,0,g,a5.xc(0,f),D.dm,150,C.a2U(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.018,0.032,0.964,0.936,0,g,a5.xc(0,f),D.dm,120,C.a2U(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dm,260,C.a2U(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bk,0,0,1,1,0,"lux_filigree",a5.xc(0,"filigree"),D.dm,200))
break
default:a2.push(w.$10$anim$delay(D.bk,0.08,0.06,0.84,0.004,C.a2U(a0,208),"lux_rule",a5.aHm(0,"shimmer",r),D.vd,150))
a2.push(w.$10$anim$delay(D.bk,0.08,0.936,0.84,0.004,C.a2U(a0,144),"lux_rule2","",D.Jk,220))}l=!A.d.aV(a2,new C.fmW())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xc(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xc(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2U(r,242)
j=a5.xc(0,"orbit")
i=s===D.bk?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qY,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eZ,t-0.007,0.9495,0.014,0.025,C.a2U(r,242),"lux_g2",a5.xc(0,"orbit"),D.qY,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bk,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bk,0,0,1,1,0,"lux_velvet",a5.xc(0,"velvet")))},
o8:function o8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fUj:function fUj(d){this.a=d},
fUk:function fUk(){},
wv:function wv(d,e){this.a=d
this.b=e},
a96:function a96(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asO:function asO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fUc:function fUc(){},
fUf:function fUf(){},
fSa:function fSa(){},
fSb:function fSb(){},
fSc:function fSc(d){this.a=d},
fMz:function fMz(){},
fMC:function fMC(d,e,f){this.a=d
this.b=e
this.c=f},
fMB:function fMB(d,e){this.a=d
this.b=e},
fMA:function fMA(d,e){this.a=d
this.b=e},
fMy:function fMy(d){this.a=d},
fP_:function fP_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fOY:function fOY(d){this.a=d},
fOZ:function fOZ(d){this.a=d},
fqP:function fqP(){},
fqQ:function fqQ(){},
fqR:function fqR(){},
h2A:function h2A(){},
a1E:function a1E(d){this.a=d},
aJf:function aJf(d,e,f,g,h){var _=this
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
f9D:function f9D(d,e,f){this.a=d
this.b=e
this.c=f},
f9E:function f9E(d,e){this.a=d
this.b=e},
f9B:function f9B(d,e){this.a=d
this.b=e},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9A:function f9A(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f9v:function f9v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9z:function f9z(d,e){this.a=d
this.b=e},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9y:function f9y(d,e){this.a=d
this.b=e},
f9t:function f9t(d,e){this.a=d
this.b=e},
f9w:function f9w(d){this.a=d},
f9x:function f9x(d,e){this.a=d
this.b=e},
f9j:function f9j(d,e){this.a=d
this.b=e},
f9k:function f9k(d,e){this.a=d
this.b=e},
f9m:function f9m(d){this.a=d},
f9n:function f9n(d){this.a=d},
f9o:function f9o(d){this.a=d},
f9p:function f9p(d){this.a=d},
f9l:function f9l(d,e){this.a=d
this.b=e},
f9q:function f9q(d,e){this.a=d
this.b=e},
f9R:function f9R(d){this.a=d},
f9S:function f9S(d){this.a=d},
f9Q:function f9Q(d){this.a=d},
f9T:function f9T(d){this.a=d},
f9P:function f9P(d){this.a=d},
f9V:function f9V(d){this.a=d},
f9O:function f9O(d,e){this.a=d
this.b=e},
f9W:function f9W(d){this.a=d},
f9N:function f9N(d,e){this.a=d
this.b=e},
f9X:function f9X(d){this.a=d},
f9M:function f9M(d){this.a=d},
f9Y:function f9Y(d){this.a=d},
f9L:function f9L(d,e){this.a=d
this.b=e},
f9Z:function f9Z(d){this.a=d},
f9K:function f9K(d,e){this.a=d
this.b=e},
fa_:function fa_(d){this.a=d},
f9J:function f9J(d){this.a=d},
fa0:function fa0(d,e){this.a=d
this.b=e},
f9I:function f9I(d,e){this.a=d
this.b=e},
fa1:function fa1(d){this.a=d},
f9U:function f9U(d){this.a=d},
f9H:function f9H(d,e){this.a=d
this.b=e},
f9r:function f9r(d,e,f){this.a=d
this.b=e
this.c=f},
f9s:function f9s(d,e,f){this.a=d
this.b=e
this.c=f},
f9G:function f9G(d,e){this.a=d
this.b=e},
f9F:function f9F(d,e){this.a=d
this.b=e},
h2z:function h2z(d,e){this.a=d
this.b=e},
a1D:function a1D(d,e,f){this.c=d
this.d=e
this.a=f},
aJe:function aJe(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f9c:function f9c(d){this.a=d},
f9d:function f9d(d){this.a=d},
f9e:function f9e(d,e){this.a=d
this.b=e},
f9f:function f9f(d){this.a=d},
f9g:function f9g(d){this.a=d},
f9b:function f9b(d,e){this.a=d
this.b=e},
f9h:function f9h(d,e){this.a=d
this.b=e},
f9i:function f9i(d,e){this.a=d
this.b=e},
fyf:function fyf(d){this.a=d},
b3m:function b3m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFM:function aFM(d,e,f){this.c=d
this.d=e
this.a=f},
bmz:function bmz(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
eq3:function eq3(d){this.a=d},
eq2:function eq2(){},
bk5:function bk5(d,e){this.b=d
this.a=e},
fUl:function fUl(d){this.a=d},
fUm:function fUm(){},
fUn:function fUn(){},
fUo:function fUo(d){this.a=d},
atl:function atl(d,e){this.a=d
this.b=e},
fUh:function fUh(){},
fUi:function fUi(){},
h1N:function h1N(d,e){this.a=d
this.b=e},
a00:function a00(d,e,f){this.c=d
this.d=e
this.a=f},
aDg:function aDg(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dt8:function dt8(d){this.a=d},
dt9:function dt9(d){this.a=d},
dta:function dta(d,e){this.a=d
this.b=e},
dtd:function dtd(d){this.a=d},
dte:function dte(d,e){this.a=d
this.b=e},
dtc:function dtc(d,e){this.a=d
this.b=e},
dtf:function dtf(d){this.a=d},
dtb:function dtb(d,e){this.a=d
this.b=e},
bvf:function bvf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eq0:function eq0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eq1:function eq1(d){this.a=d},
fmX:function fmX(d){this.a=d},
fmZ:function fmZ(d,e){this.a=d
this.b=e},
fmY:function fmY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmW:function fmW(){},
aNS:function aNS(){},
hfx(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wo(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b3i:function b3i(d,e,f){this.c=d
this.d=e
this.a=f},
bo9:function bo9(d,e){this.c=d
this.a=e},
ikR(d){return A.d.dP(D.Iq,new C.fNG(d),new C.fNH())},
ikS(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Iq,new C.fNI(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jY("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lu:function lu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNG:function fNG(d){this.a=d},
fNH:function fNH(){},
fNI:function fNI(d){this.a=d},
na(d,e,f,g,h){return new C.Fs(f,g,d)},
i6g(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fpb(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.Lg
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c3(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
hC9(d,e){var w
C.i6g(d)
w=A.d.dP($.bGP(),new C.fLw(e),new C.fLx())
$.Lg=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lg=""}d.z=B.bq(d.z,!0,x.F)},
Fs:function Fs(d,e,f){this.a=d
this.b=e
this.e=f},
fpb:function fpb(){},
fTO:function fTO(){},
fTP:function fTP(){},
fTQ:function fTQ(){},
fU0:function fU0(){},
fU5:function fU5(){},
fU6:function fU6(){},
fU7:function fU7(){},
fU8:function fU8(){},
fU9:function fU9(){},
fUa:function fUa(){},
fUb:function fUb(){},
fTR:function fTR(){},
fTS:function fTS(){},
fTT:function fTT(){},
fTU:function fTU(){},
fTV:function fTV(){},
fTW:function fTW(){},
fTX:function fTX(){},
fTY:function fTY(){},
fTZ:function fTZ(){},
fU_:function fU_(){},
fU1:function fU1(){},
fU2:function fU2(){},
fU3:function fU3(){},
fU4:function fU4(){},
fLw:function fLw(d){this.a=d},
fLx:function fLx(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bk,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
DD(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
bFz(){var w=new B.V(Date.now(),0,!1)
return A.iN[B.bL(w)-1]+" "+B.bU(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCW(d){return new B.j0((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ibP(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.aog(A.cI.aN(A.d.gan(d.split(","))))
return w}catch(v){return null}},
ibT(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fxy(),x.dv).aM(0,"\n")},
ibS(d){switch(d.a){case 2:return A.nU
case 1:case 5:return A.flW
default:return A.Vh}},
ibM(d){switch(d.a){case 2:return A.vN
case 1:case 5:return A.Xg
default:return A.adk}},
ibQ(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCW(u),q=(s&255)===0?v:C.bCW(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nS(q,p,A.la)
w=new B.pY(t,t,t,t)}switch(d.ax.a){case 1:return B.lQ(v,v,v,new B.kQ(r,w,v,A.aeD,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xB(B.lQ(v,v,q,v,p+0.4,v,v,v))
default:return B.lQ(v,v,v,new B.kQ(r,w,B.vY(4),A.i1,v),v,v,v,v)}},
ibO(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.ibM(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.ibT(d)
t=C.bCW(d.Q)
s=d.x.a>=700?A.eB:A.wp
r=d.y===A.cH?A.yY:A.anV
q=d.z
p=new B.DP(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUy:A.aUx,l,l,l,l,l,l,A.dD,l,l,v,r,s,l,!0,l,l,l,l),C.ibS(d.as)))
break
case 1:case 4:o=C.ibP(d.at)
n=i===D.lU&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xB(B.fc(w,l,l,l,B.ha(l,A.to,l,l,l,l,l,l,l,A.dD,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IK(o,n?A.aez:A.XF,l,l)
break
case 3:w=new B.nS(A.JH,1,A.la)
u=B.vY(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lQ(A.vN,B.fc(t,l,l,l,B.ha(l,D.etu,l,l,l,l,l,l,l,A.dD,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nU),l,new B.kQ(E.aMt,new B.pY(w,w,w,w),u,A.i1,l),l,l,l,l)
break
case 2:p=C.ibQ(d,e)
break
case 5:p=C.ibN(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hts(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.aua(m/255,p)}if(w)return new F.wB(k,l,j,l,new B.Ts(new B.kP(g,g,f,1/0),p))
if(i===D.lu){i=new B.nS(A.JH,1,A.la)
i=B.lQ(A.vN,p,l,new B.kQ(A.pH,new B.pY(i,i,i,i),B.vY(4),A.i1,l),l,l,D.bGm,l)}else i=p
return new F.wB(k,l,j,l,new B.fV(g,f,i))},
ibR(d,e,f,g){var w,v=null,u=C.bCW(d.e),t=d.f
t=B.a([F.hs2(t!=null?B.lQ(v,v,v,new B.kQ(v,v,v,A.i1,new B.aYP(E.Xi,A.adf,B.a([u,C.bCW(t)],x.cR),v)),v,v,v,v):B.lQ(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fxx(f,g),B.U(w).k("N<1,fi>")))
return F.cAt(t)},
hgM(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hgM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5l(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XI(A.x2,A.JE,D.bHz,null,null,null,!1,null)
o=new B.Ct(o,new C.fUu(607,787,p,d))
o.Ng(n,null)
r.push(o)}u=n.hL(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgM,v)},
ibN(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hfx(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galc()
if(h==null)h=A.aBL
j=B.tZ(4279308564)
w=B.vY(18)
v=new B.nS(B.tZ(4287531653),3,A.la)
u=i.length===0?"My links":i
u=B.a([B.xB(B.fc(u,m,m,m,B.ha(m,A.pH,m,m,m,m,m,m,m,A.dD,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xB(B.fc(A.a.i(l.c),m,m,m,D.ftD,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bP(t,t.gI(0),s.k("bP<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tZ(4280690220)
o=new B.aaq(8,8)
n=A.a.i(r.b)
u.push(new B.o9(D.bAp,new C.ayv(new C.ajr(q),B.lQ(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fw2,A.nU),m,new B.kQ(p,m,new B.ajU(o,o,o,o),A.i1,m),m,m,D.bGP,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xB(B.fc(k,m,m,m,D.fvg,m))
u.push(new C.ayv(C.hLd(k),t))}return B.lQ(m,B.zv(u,A.NC,A.lT),m,new B.kQ(j,new B.pY(v,v,v,v),w,A.i1,m),m,m,D.bBg,m)},
fxy:function fxy(){},
fxx:function fxx(d,e){this.a=d
this.b=e},
fUu:function fUu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ai5(d){var w,v
for(w=0;w<32;++w){v=D.Ih[w]
if(v.a===d)return v}return null},
hw5(d){var w,v,u=A.a.co(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hFo(d,e){return B.a7(d,!1).ca(B.e9(new C.h0c(e),!0,null,x.fB))},
hFn(d,e){return B.bT(A.L,null,new C.h0b(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fj:function Fj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ok:function Ok(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blV:function blV(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e3w:function e3w(d){this.a=d},
e3v:function e3v(d,e,f){this.a=d
this.b=e
this.c=f},
e3u:function e3u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btM:function btM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8p:function f8p(d,e){this.a=d
this.b=e},
bgS:function bgS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1c:function b1c(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfz:function cfz(){},
cfA:function cfA(d){this.a=d},
cfB:function cfB(d,e,f){this.a=d
this.b=e
this.c=f},
cfC:function cfC(d,e,f){this.a=d
this.b=e
this.c=f},
h0c:function h0c(d){this.a=d},
a_y:function a_y(d,e){this.c=d
this.a=e},
aBD:function aBD(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dik:function dik(d,e,f){this.a=d
this.b=e
this.c=f},
dip:function dip(d){this.a=d},
diq:function diq(d){this.a=d},
dio:function dio(d){this.a=d},
dir:function dir(d){this.a=d},
din:function din(d,e){this.a=d
this.b=e},
dis:function dis(d){this.a=d},
dim:function dim(d){this.a=d},
dit:function dit(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
diu:function diu(d,e){this.a=d
this.b=e},
h0b:function h0b(d){this.a=d},
h0a:function h0a(d){this.a=d},
h09:function h09(d,e,f){this.a=d
this.b=e
this.c=f},
h08:function h08(d,e){this.a=d
this.b=e},
aNm:function aNm(){},
itb(d){return B.bT(A.L,null,new C.h2y(),d,!0,!0,!0,null,!1,!1,x.N)},
h2y:function h2y(){},
a_T:function a_T(d){this.a=d},
bio:function bio(d){this.d=d
this.c=this.a=null},
dp8:function dp8(d){this.a=d},
dp9:function dp9(d,e){this.a=d
this.b=e},
dpa:function dpa(d){this.a=d},
i7Z(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.ym},
imM(d){var w=7000
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
imL(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i7Z(d)
switch(q){case"shimmer":return B.od(A.LO,g,new C.fR7(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bhJ(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bXa(g,new B.Eq(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bhq(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.da(B.eM(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.ds()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fx(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bqv(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bce(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bbS(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bxC(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.buA(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.btI(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bgL(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bR(0,new B.dy(!0,B.ed(A.A,B.c3(r,new B.p(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bj),1.6+s*0.15,r,r),r),0,0,0),B.eM(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fR7:function fR7(d,e){this.a=d
this.b=e},
bhJ:function bhJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhq:function bhq(d,e,f){this.b=d
this.c=e
this.a=f},
bqv:function bqv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bce:function bce(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbS:function bbS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxC:function bxC(d,e,f){this.b=d
this.c=e
this.a=f},
buA:function buA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btI:function btI(d,e,f){this.b=d
this.c=e
this.a=f},
bgL:function bgL(d,e,f){this.b=d
this.d=e
this.a=f},
di1:function di1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yb:function yb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fRa(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lu},
imR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fRb())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aSp(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
imQ(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d1(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d1(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ahJ(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahJ=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fJx(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dT,null,new C.fJy(e),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahJ)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hht(d),$async$ahJ)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.M3(d,"Search states\u2026","",A.kw,"Choose state"),$async$ahJ)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hgj(s)
if(p==null)p=A.d.gH(D.SM)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fRc(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dp(i,0.016,D.lv,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dp(0,0.058,D.eZ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dp(0,0.058,D.eZ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lr("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lr("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hcZ(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCp("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2w("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2w("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2w("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2w("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCp("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dp(m,0.082,D.bk,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.i.ac(0.78,3),4280640491,9.5,A.bt,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bk,4280172719,2,y.O,0,0,"",D.ct,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hcZ(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCp("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hyb("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hyb("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2w("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2w("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCo("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCo("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCp("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lr("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lr("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCo("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCo("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCp("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2w("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCo("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2w("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hcZ(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lr("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lr("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Co(null,null,null,null,D.oN,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rV(m,null,0,0,j,n,D.qX,"","","Hati ya Ndoa",D.dm)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahJ,v)},
fRb:function fRb(){},
fJx:function fJx(){},
fJy:function fJy(d){this.a=d},
fJv:function fJv(d){this.a=d},
fJw:function fJw(d){this.a=d},
ibd(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ibc(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ne
case"lineThrough":return A.xd
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hAf(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Sv[w]
if(v.b===u)return v}return D.dm},
i7m(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d3n[w]
if(v.b===u)return v}return D.cW},
ie1(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dvk[w]
if(v.b===u)return v}return D.bk},
rV(d,e,f,g,h,i,j,k,l,m,n){return new C.m0(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hqO(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i9u(d.h(0,"layout"))
t=B.aH(d.h(0,"background"))
t=t==null?m:A.i.L(t)
if(t==null)t=4294967295
s=B.aH(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.L(s)
r=C.hAf(d.h(0,"transition"))
q=B.aH(d.h(0,"durationSeconds"))
q=q==null?m:A.i.L(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aH(d.h(0,"designRevision"))
o=o==null?m:A.i.L(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cE(n,new C.cl5(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rV(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i9u(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atl[w]
if(v.b===u)return v}return D.n9},
Co(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rV(4294967295,null,0,0,null,C.cD(),D.qX,"","","",D.dm)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X5(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i5d(a6.h(0,"aspectRatio"))
t=B.aH(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.L(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bj(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kM(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kM(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aH(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aH(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.i.L(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b8(f,new C.ckT(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.ckU(),x.N)
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
g=B.cE(g,new C.ckV(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Co(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rV(4294967295,a3,0,0,a3,C.cD(),D.qX,"","","",D.dm)],x.g):g,v,p,o,s)},
kM(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i5d(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dwb[w]
if(v.b===u)return v}return D.DU},
cD(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
clm(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DV){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bk,m,2,"Click to add subtitle",0,0,"",D.ct,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bk,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ct,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Two Column Slide",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bk,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ct,D.cW,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bk,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ct,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bt,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bk,m,2,"Section Header",0,0,"",D.ct,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Compare",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bk,t.l(),2,"",0,0,"",D.ct,D.fi,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bk,m,2,"Option A",0,0,"",D.ct,D.cW,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bk,t.j(0.5).l(),2,"",0,0,"",D.ct,D.fi,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bk,m,2,"Option B",0,0,"",D.ct,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bk,m,2,"TERM / QUESTION",0,0,"",D.ct,D.cW,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bt,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bk,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ct,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bk,m,2,"Quiz Question",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bk,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ct,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bk,m,2,"Worksheet / Assignment",0,0,"",D.ct,D.cW,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bk,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ct,D.cW,0.88,0.06,0.16)],x.u))
break}},
hXB(d){return A.d.dP(D.a5i,new C.cln(d),new C.clo())},
hXy(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.X5(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h9e(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cli(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.aZ(u,new C.clh())
return u},
hqR(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cld()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asP(d){return C.hXw(d)},
hXw(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clg()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3H(m),$async$asP)
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
return B.b(B.az(),$async$asP)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aS(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hqQ.h(0,m))
n=C.h9e(C.h9e(j,r),o)
if(n.length===0){u=C.hqR(C.hqR(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asP,v)},
clc(d){return C.hXv(d)},
hXv(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$clc=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$clc)
case 7:r=f
q=r.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$clc,v)},
b3o(d,e){return C.hXx(d,e)},
hXx(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3o=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b3o)
case 6:s=g
q=s.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mb(r,J.ad(r)-500):r
w=7
return B.b(s.aB("StringList","ngmy_slides_deleted_"+p,o),$async$b3o)
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
return B.i($async$b3o,v)},
X6(d,e){return C.hXz(d,e)},
hXz(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X6=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hqP.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asP(a3),$async$X6)
case 5:p=a6
case 4:w=6
return B.b(C.clc(a3),$async$X6)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.clj(o),l),l.k("M.E"))
A.d.aZ(e,new C.clk())
$.hqP.n(0,a0,e)
n=B.U(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.cll(),n),n.k("ak.E"))
r=A.Y.aw(n,null)
$.hqQ.n(0,a0,r)
t=8
w=11
return B.b(B.aix(a0,r),$async$X6)
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
return B.b(B.az(),$async$X6)
case 16:q=a6
w=17
return B.b(q.aB("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$X6)
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
return B.i($async$X6,v)},
JE:function JE(d,e){this.a=d
this.b=e},
asN:function asN(d,e){this.a=d
this.b=e},
vd:function vd(d,e){this.a=d
this.b=e},
mS:function mS(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eP:function eP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m0:function m0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cl6:function cl6(){},
cl7:function cl7(){},
cl5:function cl5(){},
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
ckW:function ckW(){},
ckX:function ckX(){},
ckT:function ckT(){},
ckU:function ckU(){},
ckV:function ckV(){},
jY:function jY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cln:function cln(d){this.a=d},
clo:function clo(){},
cli:function cli(d){this.a=d},
clh:function clh(){},
cld:function cld(){},
cle:function cle(){},
clf:function clf(){},
clg:function clg(){},
clj:function clj(d){this.a=d},
clk:function clk(){},
cll:function cll(){},
in1(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fRK(e,v,d,B.aR(w))
w.$1(new C.fRG())
w.$1(new C.fRH())
w.$1(new C.fRI())
w.$1(new C.fRJ())
return v},
fRK:function fRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRG:function fRG(){},
fRH:function fRH(){},
fRI:function fRI(){},
fRJ:function fRJ(){},
b3l:function b3l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cl1:function cl1(d){this.a=d},
cl0:function cl0(){},
cl2:function cl2(){},
cl3:function cl3(d,e){this.a=d
this.b=e},
cl4:function cl4(d){this.a=d},
apP:function apP(d,e){this.c=d
this.a=e},
blF:function blF(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dQF:function dQF(){},
aN7:function aN7(){},
cl9(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cl9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.M(x.q).f.U(D.fj4)
u=!1
w=1
break}u=B.lc(!1,d,t,!1,null,A.a83,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cl9,v)},
hXt(d){var w=A.d.bj(D.Iq,new C.cla(d))
if(w<0)return!0
return w>=4},
hXu(d){var w=A.d.bj($.bGP(),new C.clb(d))
if(w<0)return!0
return w>=5},
cla:function cla(d){this.a=d},
clb:function clb(d){this.a=d},
ioL(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xq()
$.pT().pc(t,new C.fUB(s),!0)
u=B.a([B.BY(v,A.pI,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.fu5,v,v,v),A.f,v,v,new B.p(A.aU,v,v,w,v,v,A.n),v,v,v,v,A.n1,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fUB:function fUB(d){this.a=d},
iom(){return C.hgF()},
ilf(){return C.bEN()},
ink(){return C.hgw()},
aRq(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fTH(d,f),$async$aRq)
case 5:w=1
break
case 4:if(d.e!=null)d.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRq,v)},
fTH(d,e){var w=0,v=B.j(x.H),u
var $async$fTH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCX
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fTI(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fTH)
case 2:return B.h(null,v)}})
return B.i($async$fTH,v)},
fTI:function fTI(d,e){this.a=d
this.b=e},
aew:function aew(d,e,f){this.c=d
this.d=e
this.a=f},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCq:function eCq(d){this.a=d},
aeN:function aeN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3k(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3j(g,m,f,d,e,h,l,k,j,o,i,null)},
hDu(d){return B.ct(new C.fRF(d))},
hgH(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
iou(d){if(d===D.ct)return"None"
return C.hgH(d)},
bDs(d,e,f,g){return C.ie8(d,e,f,g)},
ie8(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDs=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a7(d,!0)
if($.hdh&&t.pX())t.eO()
$.hdh=!0
s.a=null
w=3
return B.b(B.i0(A.bo,!0,"Animation preview",d,new C.fAh(s,e,g,f),null,A.eH,!0,x.H),$async$bDs)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hdh=!1
case 1:return B.h(u,v)}})
return B.i($async$bDs,v)},
h3m(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h3m=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aI(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hgH(f)+" Slide transition preview"
s=s?Ag.GE:A.rL
w=3
return B.b(C.bDs(d,s,new B.a6(t,t*0.56,B.by(B.m(14),new C.aKE(f,null),A.aq),null),r),$async$h3m)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h3m,v)},
hCM(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.o((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.o(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.da(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.da(f,t),1.4-t*0.4,u,u)
case 8:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 9:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n_((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.o((1-t)*24,0))}},
bGj(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aI(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hgH(f)+" Element animation preview"
s=s?Ag.GE:A.rL
w=3
return B.b(C.bDs(d,s,new B.a6(t,t*0.62,B.by(B.m(14),new C.aBi(f,null),A.aq),null),r),$async$bGj)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGj,v)},
iot(d){var w,v,u,t,s=$.ah9.W(0,d)
if(s!=null){$.ah9.n(0,d,s)
return s}w=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ah9.n(0,d,w)
v=$.he8=$.he8+w.length
u=B.a4($.ah9).k("cx<1>")
for(;;){if(!(v>41943040&&$.ah9.a>1))break
t=new B.cx($.ah9,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ah9.W(0,t.gR(0)).length
$.he8=v}return w},
io8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aC(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TC(s,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TC(t,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TC(u,A.cC))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cP(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3G(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.jP(e))
return m
case"rounded":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.j8(B.bl(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bv())
return m
case"hexagon":w=$.Q()
m=B.a([],m)
v=new B.aF(w.r,A.ai,n,n,m)
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
v.ab()}}v.E(new B.bv())
return v
case"diamond":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
m.E(new B.aq(e.c,e.gbw().b))
m.E(new B.aq(e.gbw().a,e.d))
m.E(new B.aq(e.a,e.gbw().b))
m.E(new B.bv())
return m
case"arch":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdD(new B.o(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bv())
return m
default:m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.ou(e))
return m}},
fPe(d,e,f){return B.ct(new C.fPf(D.fbe.q(0,d),d,f,e))},
b3j:function b3j(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cl_:function cl_(d){this.a=d},
ckZ:function ckZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckY:function ckY(){},
b3g:function b3g(d,e){this.b=d
this.a=e},
fRF:function fRF(d){this.a=d},
fRE:function fRE(d,e){this.a=d
this.b=e},
fAh:function fAh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAf:function fAf(d){this.a=d},
fAg:function fAg(d,e){this.a=d
this.b=e},
aKE:function aKE(d,e){this.c=d
this.a=e},
bx6:function bx6(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fgZ:function fgZ(d,e,f){this.a=d
this.b=e
this.c=f},
aLl:function aLl(d,e){this.b=d
this.a=e},
Wd:function Wd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blR:function blR(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
e1f:function e1f(d){this.a=d},
e1e:function e1e(d){this.a=d},
e1d:function e1d(d){this.a=d},
JD:function JD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckS:function ckS(d){this.a=d},
ckR:function ckR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBi:function aBi(d,e){this.c=d
this.a=e},
bgb:function bgb(){this.d=0
this.c=this.a=null},
dfe:function dfe(d){this.a=d},
dfd:function dfd(d){this.a=d},
a8P:function a8P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmx:function bmx(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
epK:function epK(d,e,f){this.a=d
this.b=e
this.c=f},
b1f:function b1f(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bho:function bho(d,e,f){this.b=d
this.c=e
this.a=f},
bsC:function bsC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f5U:function f5U(){},
fPf:function fPf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btF:function btF(d,e,f){this.b=d
this.c=e
this.a=f},
aNl:function aNl(){},
aNQ:function aNQ(){},
aP9:function aP9(){},
fSG(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fSG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xM.cq().MF(D.dt7,A.uC,!0),$async$fSG)
case 3:r=e
if(r==null||J.cq(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.io2(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSG,v)},
io2(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a97(d,new B.a1g(A.cP.gcu().aN(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.ig_(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a97(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)}w=A.c9.Lq(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a97(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)},
ig_(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGS().cQE(B.rF(d,A.ip,o,o),o,o,!1).cSA(0,"word/document.xml")
if(n==null)return""
w=n.d_J()
v=A.c9.Lq(0,w==null?$.hFV():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fDo(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a97:function a97(d,e,f){this.a=d
this.b=e
this.c=f},
fDo:function fDo(){},
hXA(d,e,f,g,h,i,j,k,l){return new C.OO(l,e,d,g,f,i,h,j,k,null)},
OO:function OO(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGb:function aGb(d,e,f,g,h,i,j,k,l){var _=this
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
_.bx$=k
_.a9$=l
_.c=_.a=null},
eIB:function eIB(d){this.a=d},
eIz:function eIz(){},
eIA:function eIA(d){this.a=d},
eEZ:function eEZ(){},
eF_:function eF_(){},
eF0:function eF0(d,e){this.a=d
this.b=e},
eGz:function eGz(d){this.a=d},
eGn:function eGn(){},
eGo:function eGo(){},
eEm:function eEm(){},
eHH:function eHH(d){this.a=d},
eIx:function eIx(d,e){this.a=d
this.b=e},
eGx:function eGx(d,e){this.a=d
this.b=e},
eIk:function eIk(d){this.a=d},
eIl:function eIl(){},
eIm:function eIm(){},
eIn:function eIn(d){this.a=d},
eIo:function eIo(){},
eDL:function eDL(d){this.a=d},
eIy:function eIy(){},
eFG:function eFG(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d){this.a=d},
eG2:function eG2(d){this.a=d},
eG3:function eG3(d,e,f){this.a=d
this.b=e
this.c=f},
eG4:function eG4(d){this.a=d},
eFF:function eFF(){},
eFE:function eFE(d){this.a=d},
eFC:function eFC(){},
eFB:function eFB(d){this.a=d},
eFD:function eFD(){},
eEV:function eEV(d){this.a=d},
eEW:function eEW(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFN:function eFN(d,e){this.a=d
this.b=e},
eDN:function eDN(){},
eDO:function eDO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFY:function eFY(){},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFW:function eFW(d,e,f){this.a=d
this.b=e
this.c=f},
eFX:function eFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFQ:function eFQ(d,e,f){this.a=d
this.b=e
this.c=f},
eFR:function eFR(d,e,f){this.a=d
this.b=e
this.c=f},
eFS:function eFS(d){this.a=d},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e){this.a=d
this.b=e},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eG_:function eG_(d){this.a=d},
eGi:function eGi(){},
eGj:function eGj(){},
eGk:function eGk(){},
eGl:function eGl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGf:function eGf(d){this.a=d},
eGh:function eGh(){},
eGg:function eGg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGd:function eGd(d,e,f){this.a=d
this.b=e
this.c=f},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGm:function eGm(){},
eFO:function eFO(d,e){this.a=d
this.b=e},
eE3:function eE3(){},
eE4:function eE4(d,e,f){this.a=d
this.b=e
this.c=f},
eE5:function eE5(d){this.a=d},
eE6:function eE6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE2:function eE2(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGt:function eGt(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eE1:function eE1(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eGB:function eGB(d,e,f){this.a=d
this.b=e
this.c=f},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDV:function eDV(d){this.a=d},
eGA:function eGA(d,e,f){this.a=d
this.b=e
this.c=f},
eDM:function eDM(d){this.a=d},
eEn:function eEn(){},
eIi:function eIi(d,e){this.a=d
this.b=e},
eIj:function eIj(d,e,f){this.a=d
this.b=e
this.c=f},
eHI:function eHI(d,e,f){this.a=d
this.b=e
this.c=f},
eCJ:function eCJ(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCt:function eCt(d){this.a=d},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eDX:function eDX(d){this.a=d},
eDa:function eDa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDb:function eDb(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDg:function eDg(d){this.a=d},
eDd:function eDd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDe:function eDe(d){this.a=d},
eDc:function eDc(){},
eD9:function eD9(d,e,f){this.a=d
this.b=e
this.c=f},
eGc:function eGc(d,e){this.a=d
this.b=e},
eIr:function eIr(d){this.a=d},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIt:function eIt(d){this.a=d},
eIu:function eIu(d,e,f){this.a=d
this.b=e
this.c=f},
eIq:function eIq(d){this.a=d},
eHY:function eHY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHX:function eHX(d,e,f){this.a=d
this.b=e
this.c=f},
eHW:function eHW(){},
eHV:function eHV(d,e,f){this.a=d
this.b=e
this.c=f},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e,f){this.a=d
this.b=e
this.c=f},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHT:function eHT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHS:function eHS(d){this.a=d},
eER:function eER(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eHJ:function eHJ(){},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIf:function eIf(d){this.a=d},
eIg:function eIg(d){this.a=d},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCz:function eCz(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCC:function eCC(d,e){this.a=d
this.b=e},
eCD:function eCD(d,e,f){this.a=d
this.b=e
this.c=f},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e,f){this.a=d
this.b=e
this.c=f},
eCx:function eCx(d){this.a=d},
eGy:function eGy(d,e,f){this.a=d
this.b=e
this.c=f},
eIp:function eIp(d,e,f){this.a=d
this.b=e
this.c=f},
eEU:function eEU(d,e,f){this.a=d
this.b=e
this.c=f},
eET:function eET(){},
eDj:function eDj(d,e,f){this.a=d
this.b=e
this.c=f},
eDk:function eDk(d){this.a=d},
eCv:function eCv(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eD_:function eD_(d,e){this.a=d
this.b=e},
eCL:function eCL(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(){},
eD8:function eD8(){},
eCQ:function eCQ(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e,f){this.a=d
this.b=e
this.c=f},
eEj:function eEj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEi:function eEi(d,e,f){this.a=d
this.b=e
this.c=f},
eEh:function eEh(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eGb:function eGb(d,e){this.a=d
this.b=e},
eGa:function eGa(d,e){this.a=d
this.b=e},
eG9:function eG9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG5:function eG5(){},
eG6:function eG6(){},
eHK:function eHK(){},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(){},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e){this.a=d
this.b=e},
eDP:function eDP(){},
eDQ:function eDQ(){},
eDR:function eDR(){},
eDU:function eDU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e,f){this.a=d
this.b=e
this.c=f},
eFk:function eFk(d){this.a=d},
eFj:function eFj(){},
eFl:function eFl(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFi:function eFi(d){this.a=d},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFf:function eFf(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFd:function eFd(d){this.a=d},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFc:function eFc(d){this.a=d},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF6:function eF6(d){this.a=d},
eF7:function eF7(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF3:function eF3(d){this.a=d},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eFa:function eFa(d,e){this.a=d
this.b=e},
eF1:function eF1(d){this.a=d},
eFb:function eFb(d){this.a=d},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d){this.a=d},
eEg:function eEg(d){this.a=d},
eE8:function eE8(d){this.a=d},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEa:function eEa(d){this.a=d},
eEb:function eEb(d){this.a=d},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEf:function eEf(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIw:function eIw(d){this.a=d},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFw:function eFw(d){this.a=d},
eFx:function eFx(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eH6:function eH6(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHs:function eHs(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d,e){this.a=d
this.b=e},
eGX:function eGX(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH7:function eH7(d){this.a=d},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d){this.a=d},
eHf:function eHf(d){this.a=d},
eGK:function eGK(d){this.a=d},
eHg:function eHg(d){this.a=d},
eGS:function eGS(d){this.a=d},
eHi:function eHi(d){this.a=d},
eGR:function eGR(d,e){this.a=d
this.b=e},
eHj:function eHj(d,e){this.a=d
this.b=e},
eHk:function eHk(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGT:function eGT(d){this.a=d},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e,f){this.a=d
this.b=e
this.c=f},
eGP:function eGP(d,e,f){this.a=d
this.b=e
this.c=f},
eGF:function eGF(d,e,f){this.a=d
this.b=e
this.c=f},
eGD:function eGD(d,e){this.a=d
this.b=e},
eHm:function eHm(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGC:function eGC(d,e){this.a=d
this.b=e},
eHn:function eHn(d){this.a=d},
eGN:function eGN(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
eHr:function eHr(d){this.a=d},
eGM:function eGM(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHu:function eHu(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d){this.a=d},
eHx:function eHx(d,e){this.a=d
this.b=e},
eGI:function eGI(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eGH:function eGH(d){this.a=d},
eDi:function eDi(d,e,f){this.a=d
this.b=e
this.c=f},
eDh:function eDh(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEp:function eEp(d){this.a=d},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEo:function eEo(d){this.a=d},
eEY:function eEY(){},
eEX:function eEX(){},
eId:function eId(d){this.a=d},
eIc:function eIc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIb:function eIb(d,e){this.a=d
this.b=e},
eI6:function eI6(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI7:function eI7(d,e){this.a=d
this.b=e},
eI2:function eI2(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eIe:function eIe(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDH:function eDH(d,e,f){this.a=d
this.b=e
this.c=f},
eDG:function eDG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDv:function eDv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDu:function eDu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDt:function eDt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDr:function eDr(d){this.a=d},
eDF:function eDF(d,e){this.a=d
this.b=e},
eFz:function eFz(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFA:function eFA(d,e){this.a=d
this.b=e},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEF:function eEF(d,e){this.a=d
this.b=e},
eED:function eED(d,e){this.a=d
this.b=e},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEK:function eEK(d,e,f){this.a=d
this.b=e
this.c=f},
eEy:function eEy(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e,f){this.a=d
this.b=e
this.c=f},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e,f){this.a=d
this.b=e
this.c=f},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEu:function eEu(d,e,f){this.a=d
this.b=e
this.c=f},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eES:function eES(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCr:function eCr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGu:function eGu(d){this.a=d},
eGv:function eGv(d,e){this.a=d
this.b=e},
agi:function agi(d,e,f){this.a=d
this.b=e
this.c=f},
aAF:function aAF(d,e){this.c=d
this.a=e},
beY:function beY(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
daG:function daG(d){this.a=d},
daF:function daF(d){this.a=d},
bfc:function bfc(d,e){this.c=d
this.a=e},
db3:function db3(d){this.a=d},
db4:function db4(d){this.a=d},
KF:function KF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beX:function beX(){this.d=!1
this.c=this.a=null},
daD:function daD(d){this.a=d},
daz:function daz(d){this.a=d},
daE:function daE(d){this.a=d},
day:function day(d){this.a=d},
daC:function daC(d){this.a=d},
daA:function daA(d){this.a=d},
daB:function daB(d,e){this.a=d
this.b=e},
Qx:function Qx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0K:function a0K(d,e,f){this.c=d
this.d=e
this.a=f},
aGe:function aGe(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.a9$=f
_.c=_.a=null},
eJb:function eJb(){},
eJ1:function eJ1(d){this.a=d},
eJa:function eJa(d){this.a=d},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eIY:function eIY(d){this.a=d},
eIZ:function eIZ(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d){this.a=d},
eJ0:function eJ0(d,e,f){this.a=d
this.b=e
this.c=f},
eJ8:function eJ8(){},
eJ9:function eJ9(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJc:function eJc(d,e,f){this.a=d
this.b=e
this.c=f},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJd:function eJd(d){this.a=d},
KL:function KL(d,e){this.c=d
this.a=e},
bua:function bua(d,e){this.b=d
this.a=e},
bjZ:function bjZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjY:function bjY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aM2:function aM2(){},
aO2:function aO2(){},
bzZ:function bzZ(){},
aO3:function aO3(){},
fUC(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fUC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xM.cq().MF(B.a(["pdf"],x.s),A.uC,!0),$async$fUC)
case 3:q=e
if(q==null||J.cq(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bri(s,"data:application/pdf;base64,"+A.cP.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUC,v)},
ioF(d){var w,v,u,t,s,r
try{w=B.jI(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aj4(t,1,200)
return s}}catch(r){}return 1},
fUt(d){return C.ioE(d)},
ioE(d){var w=0,v=B.j(x.T),u
var $async$fUt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUt,v)},
bFy(d,e,f,g){return C.ioO(d,e,f,g)},
ioO(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFy=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hE4(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jh(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jh(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jh(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jh(b0),a9)}o=A.i.D(o-0.04,0,1)
n=A.i.D(n-0.04,0,1)
m=A.i.D(m+0.04,0,1)
l=A.i.D(l+0.04,0,1)
j=A.i.D(m-o,0.12,1)
i=A.i.D(l-n,0.12,1)
h=A.o.D(A.i.V(800*(i/j)),180,420)
$.Q()
g=new B.pZ(new B.py())
f=B.zu(g,null)
a7=B.K()
a7.r=A.ru.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bw
b1.e=A.dP
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o0()
w=7
return B.b(a3.xD(800,h),$async$bFy)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.hh),$async$bFy)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eS(A.dN.gaU(a5))
a7=A.cP.gcu().aN(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ab(b3)
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
return B.i($async$bFy,v)},
aRZ(d,e,f){return C.ioC(d,e,f)},
ioC(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiL(d,e,f,new C.fUr(r,q),q,"Sign document"),$async$aRZ)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFy(q,t,r.b,r.c),$async$aRZ)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3n(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRZ,v)},
ioM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hwT(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hwT(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ac(q.c*100,2)+"%;top:"+A.i.ac(q.d*100,2)+"%;width:"+A.i.ac(q.e*100,2)+"%;height:"+A.i.ac(q.f*100,2)+'%">'
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
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lU&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hwu(q.ay)+";border:2px solid "+C.hwu(q.ch)+'"></div>'
break
case 5:l=C.hfx(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galc()
if(p==null)p=A.aBL
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n5(p,0,8,n.c)
j=new B.bP(j,j.gI(0),k.k("bP<ak.E>"))
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
hwu(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ac((w&255)/255,3)+")"},
hwT(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFw(d,e){var w=0,v=B.j(x.H)
var $async$bFw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fUA(e,C.ioM(e),d),d,null,!0,!0,x.H),$async$bFw)
case 2:return B.h(null,v)}})
return B.i($async$bFw,v)},
bFx(){var w=0,v=B.j(x.T),u,t,s
var $async$bFx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Ht(92,2400),$async$bFx)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fUt(s),$async$bFx)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFx,v)},
aS_(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aS_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hgM(d),$async$aS_)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fXd(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS_,v)},
hqN(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3n:function b3n(d,e,f){this.a=d
this.b=e
this.c=f},
fUr:function fUr(d,e){this.a=d
this.b=e},
fUA:function fUA(d,e,f){this.a=d
this.b=e
this.c=f},
fUx:function fUx(d){this.a=d},
fUy:function fUy(d,e,f){this.a=d
this.b=e
this.c=f},
fUz:function fUz(d,e,f){this.a=d
this.b=e
this.c=f},
ioD(d){return C.kM(d.w)},
ioK(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.ir0()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
ze(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hKc()
if(w.b.test(u))return u
return null},
hE6(d,e,f){var w,v,u=C.hTd(d),t=$.or()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
ioQ(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eG(w,d.b);v.C();){u=w.gR(w).y
t=C.ze(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fUp(d,e){var w,v=d.y,u=C.ze(v==null?"":v)
if(u!=null)return d.y=u
w=C.ioQ(new B.Y(e,new C.fUq(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hE6(v==null?"":v,null,w)},
ioP(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kM(w.w))return null
v=w.y
return C.ze(v==null?"":v)},
hXC(){var w,v=$.or(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
X9(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X9)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bL),$async$X9)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a3(q,x.N,x.z)
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
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$X9,v)},
Xa(d){return C.hXD(d)},
hXD(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xa)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cL,null),$async$Xa)
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
return B.i($async$Xa,v)},
a99(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a99=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a99)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X9(),$async$a99)
case 4:s=a6
r=C.ze(a2==null?"":a2)
if(r==null)r=a3!=null?C.hE6(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dm(s),n=J.aU(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.ze(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dS.aN(t)
g.n(0,"payload",A.cP.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UT.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.ze(J.k(q==null?"":q))
if(f==null)f=C.hqS(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xa(s),$async$a99)
case 7:u=new B.aHH(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hXC()
n=r==null
d=n?C.hqS(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dS.aN(t)
q.n(0,"payload",A.cP.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UT.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xa(s),$async$a99)
case 8:u=new B.aHH(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
hqS(d){var w,v,u=$.or()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.az(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asR(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asR)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X9(),$async$asR)
case 6:t=f
s=J.a5(t)
r=s.gI(t)
s.bt(t,new C.clp(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xa(t),$async$asR)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asR,v)},
asQ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.ze(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asQ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X9(),$async$asQ)
case 6:t=o.hT(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.ze(J.k(q==null?"":q))===p){u=C.a98(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asQ,v)},
a98(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a98=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a98)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X9(),$async$a98)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
k=B.aH(l.h(n,"usesRemaining"))
j=k==null?null:A.i.L(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c9.cI(0,A.cI.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UT.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dM(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xa(p),$async$a98)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a98,v)},
ioJ(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fUw(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fUE(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.Y.aw(w,null)}return A.Y.aw(C.ioJ(d==null?B.a([],x.D):d,f,g),null)},
fUD(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fUD=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a99(h,d,e,f,g),$async$fUD)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.ze(e==null?"":e)
u=new B.aHt(s,t)
w=1
break}t=A.dS.aN(h)
t=A.kI.gcu().aN(t)
u=new B.aHt(C.ze(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUD,v)},
hgO(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.eH(q,s)||J.eH(q,r))return!0
if(J.d3(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ioN(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hgO(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hgO(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hgO(s))return s}}return null},
fUs(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cI(0,A.cI.aN(J.np(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i6L(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiw(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asQ(t[1]),$async$aiw)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUs(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.ze(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asQ(r),$async$aiw)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUs(s)
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
return B.b(C.a98(t[1]),$async$aiw)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUs(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fUs(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiw,v)},
i6L(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UT.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hgL(C.X5(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cE(t,new C.fpH(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hgL(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X5(B.a3(o,x.N,x.z))
if(e&&C.kM(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bFh(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hs(),$async$bFh)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiw(s),$async$bFh)
case 4:t=e
u=J.cq(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFh,v)},
h2B(d){var w=0,v=B.j(x.T),u,t
var $async$h2B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.YV,!0,"Dismiss",d,new C.h2C(),new C.h2D(),A.GC,!0,x.N),$async$h2B)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.M(x.q).f.U(D.fhd)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2B,v)},
ite(d,e,f,g,h){return B.a7(d,!1).ca(B.e9(new C.h2E(h,e,g,f),!0,null,x.H))},
fUq:function fUq(d){this.a=d},
clp:function clp(d){this.a=d},
fUw:function fUw(){},
fpH:function fpH(d){this.a=d},
h2C:function h2C(){},
h2D:function h2D(){},
h2E:function h2E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X7:function X7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGc:function aGc(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eII:function eII(){},
eIE:function eIE(d,e){this.a=d
this.b=e},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIO:function eIO(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIQ:function eIQ(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
X8:function X8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmT:function bmT(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eIR:function eIR(d,e){this.a=d
this.b=e},
eIS:function eIS(d){this.a=d},
eIT:function eIT(){},
eIU:function eIU(d){this.a=d},
eIV:function eIV(d,e){this.a=d
this.b=e},
aG9:function aG9(d){this.a=d},
aGa:function aGa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCl:function eCl(d){this.a=d},
eCk:function eCk(){},
eCm:function eCm(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCg:function eCg(){},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
bxs:function bxs(){},
asS:function asS(d){this.a=d},
aGd:function aGd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eIX:function eIX(d){this.a=d},
eIW:function eIW(d){this.a=d},
icl(){var w,v,u,t
for(v=0;v<4;++v){w=D.dgT[v]
try{if(Ad.c19(w)){u=w
return u}}catch(t){}}return null},
Sb(d,e){return C.ilq(d,e)},
ilq(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sb=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.icl()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oN?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qR(c6,!0)
b6.toString
p=B.a7(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.pv(new C.fOI(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.dh,!1,null,new C.fOJ(n,m),c6,null,!0,!0,b9)
k=new C.fON(b7)
j=new C.fOO()
i=null
t=4
b3=c2.a
h=Ak.aUj(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h5C(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aZm(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J2.z6(i,"dataavailable",new C.fOK(e))
d=new B.c2(new B.bk($.bE,x.dT),x.b2)
A.J2.z6(i,"stop",new C.fOL(d))
J.aj9(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sb)
case 8:w=7
return B.b(c5.$1(d0),$async$Sb)
case 7:a0=d0
J.h5D(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aj9(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aj9(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sb)
case 15:w=14
return B.b(c5.$1(d0),$async$Sb)
case 14:a0=d0
case 13:J.h5D(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.aj9(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h5D(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.ff,null,b9),$async$Sb)
case 18:w=16
break
case 17:J.aj9(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aj9(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.om),$async$Sb)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n2(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HG(b0)
J.lK(b0)
B.bQ(A.qq,new C.fOM(a7),b9)
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
J.lK(l)
if(p.pX())p.eO()
c3=o
b3=$.aw()
c3.sig(b3)
J.aSV(c3,0)
c3=n
c3.sig(b3)
J.aSV(c3,0)
c3=m
c3.sig(b3)
J.aSV(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sb,v)},
fOI:function fOI(d,e,f){this.a=d
this.b=e
this.c=f},
fOH:function fOH(){},
fOJ:function fOJ(d,e){this.a=d
this.b=e},
fON:function fON(d){this.a=d},
fOO:function fOO(){},
fOK:function fOK(d){this.a=d},
fOL:function fOL(d){this.a=d},
fOM:function fOM(d){this.a=d},
bxG:function bxG(d,e,f){this.c=d
this.d=e
this.a=f},
fjC:function fjC(){},
fjD:function fjD(){},
clL(d){var w=0,v=B.j(x.at),u,t,s
var $async$clL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at_(d,A.Aj),$async$clL)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clL,v)},
clK(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8Q:function a8Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmC:function bmC(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eqB:function eqB(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d,e){this.a=d
this.b=e},
a9J:function a9J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oT$=k
_.oU$=l
_.oV$=m
_.o3$=n},
a9K:function a9K(d,e){this.a=d
this.b=e},
b52:function b52(){},
cpF:function cpF(){},
cpG:function cpG(){},
cpH:function cpH(d,e,f,g,h,i,j,k,l){var _=this
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
hLd(d){return new C.ajr(d)},
a49:function a49(){},
ajr:function ajr(d){this.a=d},
aTe:function aTe(){},
ayv:function ayv(d,e){this.d=d
this.b=e
this.a=null},
aUI:function aUI(d){this.b=d
this.a=null},
bEb(d,e){var w=0,v=B.j(x.H),u
var $async$bEb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Q().gud().Mn(d,e),$async$bEb)
case 2:u=B.fXm()
w=3
return B.b(u,$async$bEb)
case 3:return B.h(null,v)}})
return B.i($async$bEb,v)},
hBi(d,e){return(A.ta[(d^e)&255]^A.o.aI(d,8))>>>0},
fGL(d,e,f,g,h,i){var w=C.ihE(d,A.dj,f,null,A.d2,g,h,i)
return w},
hDf(d){var w=F.hDY(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hTd(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pD.h(0,w)
if(v!=null)return v
for(u=A.pD.gdO(A.pD),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aC(s,0,2)
return A.a.aC(s+"XX",0,2)},
hDn(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<62;++w)v+="- "+D.dua[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDp(d,e){return C.ie3(d,e)},
ie3(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWt(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jN(o,"share",[p]),x.H),$async$bDp)
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
return B.i($async$bDp,v)},
hgF(){var w=0,v=B.j(x.y),u,t,s
var $async$hgF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fxz
s=$.bCX
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDp(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgF,v)},
bEN(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fxz
l=$.bCX
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hxC()?3:4
break
case 3:w=5
return B.b(C.bDp(m,k),$async$bEN)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCY
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n2(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HG(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEN)
case 10:J.lK(q)
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
return B.i($async$bEN,v)},
hgw(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hgw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCY
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m_.rk(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hgw,v)},
hgN(d,e){var w=0,v=B.j(x.H),u,t
var $async$hgN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.m_.rk(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hgN,v)},
b3Z(d,e){var w=0,v=B.j(x.y),u
var $async$b3Z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b40(d,e),$async$b3Z)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4_(d),$async$b3Z)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3Z,v)}},D,O,An,A8,Z,A_,X,Ao,G,F,E,H,R,S,A0,A1,Ap,M,Aq,A9,Ar,As,Aa,K,At,Au,A2,N,Y,P,Ab,Av,Q,Ac,Aw,Ad,Ae,Ax,Af,Ay,Ag,Ah,Az,AA,T,AB,I,U,V,AC,L,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[204]
A6=c[74]
Aj=c[54]
Ak=c[65]
W=c[221]
A7=c[58]
Al=c[147]
Am=c[232]
C=a.updateHolder(c[5],C)
D=c[219]
O=c[139]
An=c[42]
A8=c[223]
Z=c[220]
A_=c[233]
X=c[209]
Ao=c[131]
G=c[190]
F=c[35]
E=c[222]
H=c[95]
R=c[119]
S=c[149]
A0=c[32]
A1=c[178]
Ap=c[235]
M=c[158]
Aq=c[185]
A9=c[132]
Ar=c[134]
As=c[228]
Aa=c[114]
K=c[224]
At=c[236]
Au=c[130]
A2=c[68]
N=c[198]
Y=c[83]
P=c[160]
Ab=c[116]
Av=c[226]
Q=c[122]
Ac=c[141]
Aw=c[93]
Ad=c[59]
Ae=c[194]
Ax=c[40]
Af=c[81]
Ay=c[157]
Ag=c[148]
Ah=c[231]
Az=c[234]
AA=c[230]
T=c[75]
AB=c[227]
I=c[175]
U=c[52]
V=c[225]
AC=c[237]
L=c[206]
A3=c[229]
A4=c[110]
A5=c[64]
C.oi.prototype={
vF(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ui(t,v)
return new C.oi(t===0?!1:w,v,t)},
bQ3(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DJ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ui(w,u)
return new C.oi(r===0?!1:s,u,r)},
bQA(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DJ()
w=o-d
if(w<=0)return p.a?$.hii():$.DJ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ui(w,u)
q=new C.oi(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a3V())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ap(e,16)
if(A.o.F(e,16)===0)return r.bQ3(v)
u=w+v+1
t=new Uint16Array(u)
C.hu3(r.b,w,e,t)
w=r.a
s=C.ui(u,t)
return new C.oi(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ap(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQA(v)
t=w-v
if(t<=0)return n.a?$.hii():$.DJ()
s=n.b
r=new Uint16Array(t)
C.i2p(s,w,e,r)
w=n.a
q=C.ui(t,r)
p=new C.oi(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a3V())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a3V())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOT(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9k(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9k(t,e)
if(s===0)return $.DJ()
if(r===0)return t.a===e?t:t.vF(0)
w=s+1
v=new Uint16Array(w)
C.i2n(t.b,s,d.b,r,v)
u=C.ui(w,v)
return new C.oi(u===0?!1:e,v,u)},
HQ(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DJ()
w=d.c
if(w===0)return t.a===e?t:t.vF(0)
v=new Uint16Array(s)
C.bc7(t.b,s,d.b,w,v)
u=C.ui(s,v)
return new C.oi(u===0?!1:e,v,u)},
bCW(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ui(r,u)
return new C.oi(!1,u,s)},
bCV(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ui(u,r)
return new C.oi(!1,r,v)},
bCX(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ui(p,m)
return new C.oi(s!==0,m,s)},
VE(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DJ()
w=t.a
if(w===e.a){if(w){w=$.a3V()
return t.HQ(w,!0).bCX(e.HQ(w,!0),!0).a9k(w,!0)}return t.bCW(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCV(v.HQ($.a3V(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9k(e,v)
if(C.cOT(u.b,t,e.b,w)>=0)return u.HQ(e,v)
return e.HQ(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vF(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9k(e,v)
if(C.cOT(u.b,t,e.b,w)>=0)return u.HQ(e,v)
return e.HQ(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DJ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hu4(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ui(w,t)
return new C.oi(q===0?!1:r,t,q)},
bQ2(d){var w,v,u,t
if(this.c<d.c)return $.DJ()
this.aU6(d)
w=$.hbd.cq()-$.azh.cq()
v=C.hbf($.hbc.cq(),$.azh.cq(),$.hbd.cq(),w)
u=C.ui(w,v)
t=new C.oi(!1,v,u)
return this.a!==d.a&&u>0?t.vF(0):t},
ctz(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU6(d)
w=C.hbf($.hbc.cq(),0,$.azh.cq(),$.azh.cq())
v=C.ui($.azh.cq(),w)
u=new C.oi(!1,w,v)
if($.hbe.cq()>0)u=u.mD(0,$.hbe.cq())
return t.a&&u.c>0?u.vF(0):u},
aU6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hu0&&d.c===$.hu2&&g.b===$.hu_&&d.b===$.hu1)return
w=d.b
v=d.c
u=16-A.o.galE(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.htZ(w,v,u,t)
r=new Uint16Array(f+5)
q=C.htZ(g.b,f,u,r)}else{r=C.hbf(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hbg(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOT(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bc7(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bc7(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i2o(p,r,i);--o
C.hu4(h,j,0,r,o,s)
if(r[i]<h){m=C.hbg(j,s,o,n)
C.bc7(r,l,n,m,r)
while(--h,r[i]<h)C.bc7(r,l,n,m,r)}--i}$.hu_=g.b
$.hu0=f
$.hu1=w
$.hu2=v
$.hbc.b=r
$.hbd.b=l
$.azh.b=s
$.hbe.b=u},
gX(d){var w,v,u,t=new C.cOU(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOV().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oi&&this.aS(0,e)===0},
tT(d,e){return this.aS(0,e)>0},
L(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vy(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galE(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOW(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOX(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lp(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vF(0):r
while(v.c>1){u=$.hI_()
if(u.c===0)B.bi(D.baw)
t=v.ctz(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQ2(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dt(w,x.bJ).he(0)},
$iaU_:1,
$ihM:1}
C.aTo.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gI(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cSA(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kj(w,w.length,B.U(w).k("kj<1>"))}}
C.SO.prototype={
d_J(){var w,v
if(this.as==null)this.bg4()
w=this.as
v=w==null?null:w.aqO()
return v==null?null:v.eV()},
bg4(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqO().eV()
this.as=new C.bSJ(v)}},
gZ(d){return this.at}}
C.a4S.prototype={
a7(){return"CompressionType."+this.b}}
C.bKt.prototype={
eH(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zT[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fR(u,t)&A.zT[d])
s.c=t}return v}}
C.bIL.prototype={
cQD(d,e){var w,v,u,t,s,r=this,q=new C.bKt(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eH(8)!==66||q.eH(8)!==90||q.eH(8)!==104)return!1
w=r.a=q.eH(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crP(q)
if(t<0)return!1
if(t===0){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
s=r.crS(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
return!0}}return!0},
crP(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eH(8)
if(t!==D.dyN[u])v=!1
if(t!==D.d9R[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crS(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eH(1),d2=((d3.eH(8)<<8|d3.eH(8))<<8|d3.eH(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6g()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eH(3)
if(q<2||q>6)return-1
v=d3.eH(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eH(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c_(6,$.hFZ(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eH(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eH(1)===0)break
i=d3.eH(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hFY()
u=x.an
c9.y=B.c_(6,v,!1,u)
c9.z=B.c_(6,v,!1,u)
c9.Q=B.c_(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1u(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avT(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avT(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ap(a8,16)
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
a3=c9.avT(d3)
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
c1=(c1<<8^D.Iw[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IA[b9];++b9
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
if(b8===0){b8=D.IA[b9];++b9
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
if(b8===0){b8=D.IA[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IA[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IA[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Iw[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Iw[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Iw[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Iw[c1>>>24&255^c7&255])>>>0
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
avT(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eH(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eH(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1u(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6g(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGT.prototype={
aKb(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTH(e)
if(q<0)return
e.c=q
if(e.aT()!==101010256)return
e.b3()
e.b3()
e.b3()
e.b3()
r.f=e.aT()
r.r=e.aT()
w=e.b3()
if(w>0)e.aKe(w,!1)
r.csc(e)
q=r.r
v=r.f
u=e.aNp(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baN()
s.d_I(0,u,e,f)
q.push(s)}},
csc(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a90(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tE()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tE()
d.b3()
d.b3()
d.aT()
d.aT()
d.tE()
d.tE()
u=d.tE()
t=d.tE()
this.f=u
this.r=t
d.c=s},
bTH(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a90(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ane(A.ip)
o.aOE(r.eV(),A.ip,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cGR.prototype={}
C.ayV.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGU.prototype={
aKb(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIu.h(0,e.b3())
o.c=w==null?D.Nw:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.apr(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_o:D.EU
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.EU&&u>2){w=o.y
w.toString
s=B.rF(w,A.ip,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.apr(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b_p
o.ax=new C.cGR(r,q)
w=D.aIu.h(0,q)
o.c=w==null?D.Nw:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpP().length},
aqO(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rF(new Uint8Array(0),A.ip,q,q)
w=r.at
if(w!==D.EU)if(p.gI(0)<=0)r.at=D.EU
else{if(w===D.b_o){p=r.bOi(p)
r.Q=p}else if(w===D.b_p){p=r.bNW(p)
r.Q=p}r.at=D.EU}w=r.c
if(w===D.akp){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q2.C6(p.eV(),!0,!1)
else{t=B.a9y(A.ip,r.w)
p=r.Q
p.toString
A.q2.a55(p,t,!0,!1)
u.b=t.Hp()}r.Q.c=v
return B.rF(u.bl(),A.ip,q,q)}else if(w===D.akq){s=B.a9y(A.ip,32768)
p=r.Q
v=p.c
C.hLo().cQD(p,s)
u=s.Hp()
r.Q.c=v
return B.rF(u,A.ip,q,q)}else return B.rF(p.eV(),A.ip,q,q)},
bpP(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbT(d){var w=this.ch,v=C.KB(C.hBi(w[0].L(0),d))
w[0]=v
v=w[1].a5(0,v.VE(0,C.KB(255)))
w[1]=v
w[1]=v.aO(0,C.KB(134775813)).a5(0,C.KB(1)).VE(0,C.KB(4294967295))
w[2]=C.KB(C.hBi(w[2].L(0),w[1].mD(0,24).L(0)))},
aTv(){var w=(this.ch[2].VE(0,C.KB(65535)).L(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOi(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rF(new Uint8Array(0),A.ip,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbT(u[v.c++]^r.aTv())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTv()
r.bbT(s)
u&2&&B.aj(t)
t[w]=s}return B.rF(t,A.ip,q,q)},
bNW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i22(k,w,v)
p=new Uint8Array(B.cc(A.aI.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.cc(A.aI.dq(q,v,k)))
if(!C.hty(A.aI.dq(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bHk(k,new Uint8Array(16),p)
k=x.S
m=J.a6n(0,k)
m=n.r=new C.cpu(m)
m.c=!0
m.b=m.bp5(!0,new C.aus(p))
if(m.c)m.d=B.bq(D.oL,!0,k)
else m.d=B.bq(D.zG,!0,k)
l=C.hrJ(C.hrL(),64)
l.biu(new C.aus(o))
n.w=l
n.d_f(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hty(k,m))throw B.W(B.fl("macs don't match"))
return B.rF(r,A.ip,null,null)}}
C.baN.prototype={
d_I(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.aT()
n.w=e.aT()
n.x=e.aT()
w=e.b3()
v=e.b3()
u=e.b3()
n.y=e.b3()
e.b3()
n.Q=e.aT()
n.as=e.aT()
if(w>0)n.at=e.apr(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rF(t,A.ip,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a90(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tE()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tE()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tE()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apr(u)
f.c=n.as
t=new C.cGU(D.Nw,n,D.EU,B.a([C.KB(0),C.KB(0),C.KB(0)],x.f3))
n.ch=t
t.aKb(0,f,g)},
u(d){return this.at}}
C.cGS.prototype={
cQE(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGT(B.a([],x.fT))
this.a=g
g.aKb(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTo(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SO(o,A.o.ap(Date.now(),1000),0):C.hjJ(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hjJ(o,q.w,q)
if(k.as==null)k.bg4()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ane(A.ip)
j.aOE(o,A.ip,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GR(!1).E1(i,0,h,!0)}}return v}}
C.bHk.prototype={
d_f(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CZ(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hL7(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRT(u,0,w,0,o)}else{o===$&&B.c()
q.bOm(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LI(w,0)
m.x=A.aI.dq(m.x,0,10)
w=m.w
l=w.a
l.ia(0)
w=w.d
w===$&&B.c()
l.CZ(0,w,0,w.length)
return f}}
C.cpz.prototype={}
C.cpD.prototype={}
C.cpx.prototype={}
C.aus.prototype={}
C.cpC.prototype={
cQU(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biu(new C.aus(A.aI.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bT0(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bT0(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CZ(0,d,0,d.length)
v.CZ(0,f,0,4)
u=m.c
u===$&&B.c()
w.LI(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CZ(0,s,0,s.length)
w.LI(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpy.prototype={}
C.cpw.prototype={}
C.aut.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aut){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tT(d,e){var w=this.a
w===$&&B.c()
w=A.o.tT(w,e.gc1L())
if(!w)e.gc1L()
return w},
aMN(d,e){this.a=0
this.b=d},
tW(d){return this.aMN(d,null)},
aNs(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fd(""),u=w.a
u===$&&B.c()
w.b3w(v,u)
u=w.b
u===$&&B.c()
w.b3w(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3w(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpB.prototype={
ia(d){var w,v=this
v.a.tW(0)
v.c=0
A.aI.hy(v.b,0,4,0)
v.w=0
w=v.r
A.d.hy(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqh(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4Z(u,0)
v.c=0}v.a.aNs(1)},
CZ(d,e,f,g){var w=this.cqy(e,f,g)
f+=w
g-=w
w=this.cqz(e,f,g)
this.cqp(e,f+w,g-w)},
LI(d,e){var w,v=this,u=C.hrK(v.a),t=u.a
t===$&&B.c()
t=C.hhl(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hhl(w,3)
v.cqt()
v.cqq(u)
v.auH()
v.ckz(d,e)
v.ia(0)
return 20},
b4Z(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ot(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iz===w.d)
if(w.w===16)w.auH()},
auH(){this.d_e()
this.w=0
A.d.hy(this.r,0,16,0)},
cqp(d,e,f){while(f>0){this.aqh(d[e]);++e;--f}},
cqz(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4Z(d,e)
e+=4
f-=4
w.aNs(4)
v+=4}return v},
cqy(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqh(d[e]);++e;--f;++v}return v},
cqt(){this.aqh(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqh(0)}},
cqq(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auH()
u=v.d
switch(u){case A.iz:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fl:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
ckz(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iz===this.d,s=0;s<w;++s){r=v[s]
q=J.ot(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gde(d){return this.f}}
C.cpE.prototype={
d_e(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qu[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qu[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qu[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qu[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qu[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qu[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qu[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qu[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qu[30]
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
C.cpA.prototype={
biu(d){var w,v,u,t,s=this,r=s.a
r.ia(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CZ(0,w,0,v)
w=s.d
w===$&&B.c()
r.LI(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hy(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.h9(w,0,u,s.d)
s.bd6(s.d,u,54)
s.bd6(s.e,u,92)
u=s.d
r.CZ(0,u,0,u.length)},
LI(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LI(s,w)
s=u.e
t.CZ(0,s,0,s.length)
v=t.LI(d,e)
s=u.e
A.aI.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CZ(0,s,0,s.length)
return v},
bd6(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpv.prototype={}
C.cpu.prototype={
a3k(d){return(D.oL[d&255]&255|(D.oL[d>>>8&255]&255)<<8|(D.oL[d>>>16&255]&255)<<16|D.oL[d>>>24&255]<<24)>>>0},
bp5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c_(4,0,!1,u)
switch(v){case 4:q=J.ot(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3k((m>>>8|(m&$.qu[24])<<24)>>>0)^D.cLQ[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ot(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3k((k>>>8|(k&$.qu[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3k((k>>>8|(k&$.qu[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ot(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3k((g>>>8|(g&$.qu[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3k(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRT(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ot(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.en[a8&255]
u=D.en[a9>>>8&255]
t=$.qu[8]
s=D.en[b0>>>16&255]
r=$.qu[16]
q=D.en[b1>>>24&255]
p=$.qu[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.en[a9&255]
s=D.en[b0>>>8&255]
u=D.en[b1>>>16&255]
v=D.en[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.en[b0&255]
u=D.en[b1>>>8&255]
s=D.en[a8>>>16&255]
q=D.en[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.en[b1&255]
a8=D.en[a8>>>8&255]
a9=D.en[a9>>>16&255]
b0=D.en[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.en[n&255]
b0=D.en[m>>>8&255]
a9=D.en[l>>>16&255]
a8=D.en[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.en[m&255]
b0=D.en[l>>>8&255]
o=D.en[b1>>>16&255]
s=D.en[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.en[l&255]
o=D.en[b1>>>8&255]
b0=D.en[n>>>16&255]
u=D.en[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.en[b1&255]
o=D.en[n>>>8&255]
s=D.en[m>>>16&255]
v=D.en[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.en[a8&255]^C.nN(D.en[a9>>>8&255],24)^C.nN(D.en[b0>>>16&255],16)^C.nN(D.en[b1>>>24&255],8)^b6[w][0]
m=D.en[a9&255]^C.nN(D.en[b0>>>8&255],24)^C.nN(D.en[b1>>>16&255],16)^C.nN(D.en[a8>>>24&255],8)^b6[w][1]
l=D.en[b0&255]^C.nN(D.en[b1>>>8&255],24)^C.nN(D.en[a8>>>16&255],16)^C.nN(D.en[a9>>>24&255],8)^b6[w][2]
b1=D.en[b1&255]^C.nN(D.en[a8>>>8&255],24)^C.nN(D.en[a9>>>16&255],16)^C.nN(D.en[b0>>>24&255],8)^b6[w][3]
a7=D.oL[n&255]
b0=D.oL[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oL[l>>>8&255]
a9=D.oL[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oL[b1>>>8&255]
h=D.oL[n>>>16&255]
g=D.oL[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oL[l>>>24&255]
s=s[3]
a1=J.ot(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ot(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ot(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ot(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOm(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ot(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ot(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ot(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ot(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.em[a6&255]
v=D.em[b0>>>8&255]
u=$.qu[8]
t=D.em[a5>>>16&255]
s=$.qu[16]
r=D.em[a4>>>24&255]
q=$.qu[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.em[a4&255]
t=D.em[a6>>>8&255]
v=D.em[b0>>>16&255]
w=D.em[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.em[a5&255]
v=D.em[a4>>>8&255]
t=D.em[a6>>>16&255]
r=D.em[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.em[b0&255]
a5=D.em[a5>>>8&255]
a4=D.em[a4>>>16&255]
a6=D.em[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.em[p&255]
a6=D.em[b0>>>8&255]
a4=D.em[n>>>16&255]
a5=D.em[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.em[o&255]
a4=D.em[p>>>8&255]
a7=D.em[b0>>>16&255]
t=D.em[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.em[n&255]
a7=D.em[o>>>8&255]
a5=D.em[p>>>16&255]
v=D.em[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.em[b0&255]
a7=D.em[n>>>8&255]
t=D.em[o>>>16&255]
w=D.em[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.em[a6&255]^C.nN(D.em[b0>>>8&255],24)^C.nN(D.em[a5>>>16&255],16)^C.nN(D.em[a4>>>24&255],8)^b5[a9][0]
o=D.em[a4&255]^C.nN(D.em[a6>>>8&255],24)^C.nN(D.em[b0>>>16&255],16)^C.nN(D.em[a5>>>24&255],8)^b5[a9][1]
n=D.em[a5&255]^C.nN(D.em[a4>>>8&255],24)^C.nN(D.em[a6>>>16&255],16)^C.nN(D.em[b0>>>24&255],8)^b5[a9][2]
b0=D.em[b0&255]^C.nN(D.em[a5>>>8&255],24)^C.nN(D.em[a4>>>16&255],16)^C.nN(D.em[a6>>>24&255],8)^b5[a9][3]
a4=D.zG[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zG[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zG[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zG[o>>>8&255]
i=D.zG[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zG[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ot(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSI.prototype={}
C.bSJ.prototype={
gI(d){var w=this.a.length
return w},
aqO(){return B.rF(this.a,A.ip,null,null)}}
C.cA1.prototype={
Nl(d){var w=d.w,v=Math.max(1,A.i.cL(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abb(v,t+20,u+16,t,u,B.us(d.x))},
nD(d){return!1}}
C.bTK.prototype={
cKG(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTL(),x.E))},
mW(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mW)
case 6:w=5
return B.b(p.bEb(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axz.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9w.prototype={
A(d,e){if(e==null)return!1
if(J.bW(e)!==B.b2(this))return!1
return e instanceof C.a9w&&e.a===this.a},
gX(d){return B.bx(B.b2(this),B.xn(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h39)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a28.prototype={
S(){return new C.aKZ(B.aR(x.N))},
cYm(d){return this.d.$1(d)},
cW2(){return this.e.$0()}}
C.aKZ.prototype={
Y(){this.a2()
this.PM()},
PM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cW2(),$async$PM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fi4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PM,v)},
ZY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fi8(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fi9(t))
w=3
return B.b(C.aoZ(p),$async$ZY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fia(t,s,p))
w=4
return B.b(t.PM(),$async$ZY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZY,v)},
a2e(d){return this.cuL(d)},
cuL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fi5(t))
s=J.t(d,"id")
w=3
return B.b(C.c3I(J.k(s==null?"":s)),$async$a2e)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fi6(t))
w=1
break}q=C.hgL(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYm(B.a([q],x.D)),$async$a2e)
case 4:if(t.c==null){w=1
break}t.m(new C.fi7(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2e,v)},
PL(d,e){return this.bOO(0,e)},
bOO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fi_(q),r,null,!0,!0,x.y),$async$PL)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fi0(t))
s=s.h(e,"id")
w=4
return B.b(C.aoY(J.k(s==null?"":s)),$async$PL)
case 4:if(t.c==null){w=1
break}t.m(new C.fi1(t))
w=5
return B.b(t.PM(),$async$PL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PL,v)},
cJF(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iN[B.bL(v)-1]+" "+B.bU(v)},
aTm(d,e){var w=null,v=B.m(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Qc,A.n),w,e,w,w,w,w,w,e)},
aTl(d){return this.aTm(d,44)},
bab(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Qc:u,r=B.m(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,A.x9,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([A.x9,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bHB,u,u,u)],p))}return B.E(B.aA(A.c5,B.cT(u,B.A(q,A.l,u,A.bc,A.j,0,u,u),u,u,A.b4,new B.p(u,u,u,r,u,s,A.n),A.h1,u,u,u,u,A.qx,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fie(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cow(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.a_0,n=B.m(18),m=p?A.d5:A.dk
m=B.L(m,A.r,p?1.8:1)
w=this.aTl(A.qM)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWh,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWj,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.Qc:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.bZ3:q
return B.aA(q,B.cT(q,B.A(B.a([w,A.be,t,B.cT(q,r,q,q,A.b4,new B.p(q,q,u,q,q,v,A.a7),A.fT,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.j,0,q,q),q,q,A.b4,new B.p(o,q,m,n,q,q,A.n),A.fT,q,q,q,A.d3,A.bi,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fi3(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwn(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cJF(J.k(o==null?"":o))
o=B.m(18)
w=B.L(A.dk,A.r,1)
v=r.aTl(A.Pk)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWh,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWj,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b6F(A.hX,A.bx,"Bring it back",r.r?q:new C.fib(r,d))
return B.q(q,B.A(B.a([v,A.be,t,p,A.bm,r.b6F(A.ei,A.c0,"Delete",r.r?q:new C.fic(r,d))],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(D.a_0,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBQ,q,q,q)},
b6F(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.q(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auX(d,e,f){var w=null
return new B.D(D.bAQ,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fzq,w,w,w),A.ay,B.d(f,w,w,w,w,w,w,D.frq,A.K,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cd
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aT,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTm(A.zs,46),A.be,D.bIA],t)
if(j.r)s.push(D.erO)
s.push(B.aG(i,i,i,i,A.t6,i,i,i,new C.fih(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.L(A.dk,A.r,1)
o=J.a5(h)
q=B.a([A.X,u,new B.D(D.bEz,s,i),B.q(i,B.A(B.a([j.bab(0,A.z9,"Save",j.a.c.length),j.bab(1,A.PC,"Saved",o.gI(h))],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bDz,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.m(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Po:A.ee
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vx,i,i,i),1)],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bDv,A.iu,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fvc,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fyp,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fii(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.j,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auX(A.qM,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cow(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.erk)
else if(j.e==null)s.push(j.auX(A.a2t,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auX(A.po,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwn(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cr,B.cd(u,i,i,Z.amc,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8T()
p=s?i:D.Qc
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b9.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z9,m?A.jY:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bEb,B.aA(i,B.cT(i,B.A(B.a([k,A.aak,new B.dq(1,A.cr,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jY:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.l,i,A.bc,A.j,0,i,i),i,i,A.b4,new B.p(s,i,i,o,n,p,A.n),A.h1,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bm(!0,B.x(q,A.l,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7q,i,i,i,i,i,i,i,i)}}
C.oJ.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZQ.prototype={
S(){return new C.azt(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azt.prototype={
Y(){this.a2()
this.PX()},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a37(t.a.c),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQi(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
cCH(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qC(t.d,new C.cQl(d))
v=w<0
if(v&&C.i2r(d))return t.f
u=t.d
if(v)J.pW(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h6X(new C.cQm(t),v)
return t.f=t.f.bG(new C.cQn(t,d),v).eM(new C.cQo())},
Je(d,e,f){return this.ci3(0,e,f)},
b0o(d,e){return this.Je(0,e,!1)},
ci3(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Je=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a7(s,!1).ca(B.e9(new C.cQh(t,e),!1,null,x.H)),$async$Je)
case 3:w=4
return B.b(t.f,$async$Je)
case 4:w=5
return B.b(t.PX(),$async$Je)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Je,v)},
b_C(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dLD:d
this.Je(0,new C.oJ(w,v,new B.V(Date.now(),0,!1)),!0)},
c8j(){return this.b_C(null)},
aeH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cQp(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_C(s)
case 1:return B.h(u,v)}})
return B.i($async$aeH,v)},
Jd(d,e){return this.bOF(0,e)},
bOF(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cQc(e),s,null,!0,!0,x.y),$async$Jd)
case 3:if(g!==!0){w=1
break}t.m(new C.cQd(t,e))
w=4
return B.b(t.f,$async$Jd)
case 4:w=5
return B.b(C.ahx(t.a.c,e.a),$async$Jd)
case 5:w=6
return B.b(t.PX(),$async$Jd)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jd,v)},
DN(d){return this.bGN(d)},
bGN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cQ8(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DN)
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
return B.b(t.b0o(0,d),$async$DN)
case 9:w=5
break
case 7:w=10
return B.b(F.hhn(r,d.b,null),$async$DN)
case 10:w=5
break
case 8:w=11
return B.b(t.Jd(0,d),$async$DN)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DN,v)},
c1H(){var w,v,u,t,s=null,r=[D.dLG,D.dLE,D.dLF],q=new C.cQf(),p=B.m(26),o=x.V,n=B.a([new B.ac(0,A.G,A.cZ.j(0.4),A.f_,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dvh[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.oZ,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.oq,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fZq,A.U,B.bV(A.bG,l,A.bs,s,6,6),A.aR,B.aA(s,B.q(s,D.f8G,A.f,s,s,new B.p(A.c,s,s,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cM,10)],o),s,A.n),s,s,s,s,W.amA,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQe(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.j,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c6u,A.n),s,s,s,s,D.bEJ,s,s,s)},
bGL(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.by(B.m(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ev(A.A,F.apB(d.b),A.f,A.c_),D.exY,B.ap(v,B.aA(v,B.q(v,D.bZU,A.f,v,v,D.b8n,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQ3(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fox,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.U,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fvo,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQ4(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQ5(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eE(B.a([new B.D(O.al8,B.hb(B.aA(s,B.q(s,A.as3,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b9.j(0.5),A.I,12)],x.V),E.wQ,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9K(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nx,s,s,s,!0,s,s,s,s,s,D.fZu,s,s,s,1,s,!0)
if(t.e)r=D.bbQ
else{w=t.c1H()
v=B.a([D.fKv,A.ae],r)
if(J.cI(t.d)){u=B.m(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fnX,s,s,s),A.f,s,s,new B.p(D.bh4,s,s,u,s,s,A.n),s,s,s,s,A.yQ,s,s,s))}r=B.a([new B.oe(A6.a0k,new B.mu(w,s),s),new B.oe(D.bE5,new B.mu(B.A(v,A.l,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cq(t.d))r.push(D.ffR)
else r.push(new B.oe(D.bDx,B.PN(new B.oN(new C.cQq(t),J.ad(t.d),!0,!0,!0,0,B.to(),s),D.bb4),s))
r=B.w1(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfG,r,s,!1,!1,s,s)}}
C.ZO.prototype={
S(){return new C.azp(B.a([],x.bx))},
UU(d){return this.d.$1(d)}}
C.aGN.prototype={}
C.azp.prototype={
b3y(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aQ),w),u=this.gb0n()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aQ),w)
w.aW(0,u)
return new C.aGN(v,w,f)},
EB(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qv,new C.cPx(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aQ),v)
t=m.gb0n()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aQ),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aQ),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aQ),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aQ),v)
n.aW(0,t)
r.push(new C.aGN(o,n,p.c))}if(r.length===0)r.push(m.b3y("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpx()
q=r.a
q.UU(q.c)}q=r.d
q===$&&B.c()
w=q.T$=$.aw()
q.P$=0
q=r.e
q===$&&B.c()
q.T$=w
q.P$=0
q=r.f
q===$&&B.c()
q.T$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.T$=w
s.P$=0
s=t.b
s.T$=w
s.P$=0}r.a3()},
gpx(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mO(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rK(n,w,v,t,u)},
Bm(){var w=0,v=B.j(x.H),u=this,t
var $async$Bm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpx()
t=u.a
w=2
return B.b(t.UU(t.c),$async$Bm)
case 2:return B.h(null,v)}})
return B.i($async$Bm,v)},
c9I(){this.m(new C.cPw(this))
this.EB()},
b_h(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPz(w,d,v))
w.EB()},
c9J(d,e){var w=A.d.cB(this.w,e)
this.m(new C.cPH())
this.EB()
$.aW.x1$.push(new C.cPI(w))},
Rh(d){return this.com(d)},
com(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(80,1400,A.eO),$async$Rh)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rh)
case 8:p=f
o=q.b.toLowerCase()
n=J.aj5(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPA(d,n,p))
r.EB()
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
return B.i($async$Rh,v)},
yq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hFb(r,t.gpx()),$async$yq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPy(t,s))
t.EB()
case 1:return B.h(u,v)}})
return B.i($async$yq,v)},
coE(d){var w,v=this,u=null,t=F.fNZ(d.c)
if(t==null)return new B.bM(A.a6,u,u,B.ho(D.bSZ,D.fN4,new C.cPC(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ad,A.t,B.a([B.by(B.m(12),B.fR(t,A.A,u,u,A.cj,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6G(A.jJ,new C.cPD(v,d)),A.bm,v.b6G(A.cz,new C.cPE(v,d))],w),A.l,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6G(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hH,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aU,0,w,w,A.cR,w,w,A.aj)},
JR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bm(),$async$JR)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hhn(s,t.gpx(),new C.cPG(t)),$async$JR)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eE(B.a([new B.D(A.qw,B.ho(D.bXN,D.fTk,m.gaAJ(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.as2,l,l,l,new C.cPJ(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Z1,l,1,l,l,l,!1,l,!1,E.nx,l,l,l,!0,l,l,l,l,l,D.fNX,l,l,l,1,l,!0),i=Ax.aWF(N.lH,A.c,Af.XN,A.oE,D.fOH,m.gc9H()),h=B.m(18),g=m.gayG(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.ja,12)],x.V)
f=B.aA(l,B.q(l,new B.a6(92,142.1818181818182,B.ev(A.A,F.apB(m.gpx()),A.f,A.dB),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ex,B.E(B.x(B.a([D.h04,A.ay,B.d(F.hfO(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fBf,l,l,l),A.X,B.dg(E.arl,l,E.aX6,g,B.bo(A.cZ,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.j,0,A.p),1)],k),A.l,l,A.e,A.j,0,l,l),A.f,l,l,new B.p(E.Z1,l,l,h,l,l,A.n),l,l,l,l,A.bi,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.oX,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.U,w,A.U,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lH.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fBN,l,l,l)
r=B.aG(l,l,l,l,D.bWq,l,l,l,v===0?l:new C.cPK(m,v),l,l,l,l,"Move up",A.cf)
q=h.length
p=B.aG(l,l,l,l,D.c1V,l,l,l,v===q-1?l:new C.cPL(m,v),l,l,l,l,"Move down",A.cf)
q=q===1?l:new C.cPM(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.q(l,B.x(B.a([new B.c7(A.aL,A.e,A.j,A.l,l,A.p,l,0,B.a([s,A.b3,r,p,B.aG(l,l,l,l,B.X(A.ei,A.pe,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cf)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.coE(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(E.nx,l,new B.bG(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9w(g),A.eh,D.bC5,l,l,l))}return B.oK(!0,B.c4(j,E.aj5,B.cd(f,l,l,D.bCz,l,l,A.ah,!1),l,!1,!1,i,l),new C.cPN(m),x.C)}}
C.azr.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nx,q=B.m(16),p=B.m(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.cZ.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eM,B.aJ(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(u.e,t,t,t,t,t,t,D.aVD,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eJ,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.j,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bi,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arU.prototype={
S(){return new C.aFB()}}
C.aFB.prototype={
Y(){this.a2()
this.a_F()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a23()},
a23(){var w=0,v=B.j(x.H),u=this,t
var $async$a23=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a23)
case 2:u.d=null
if(u.c!=null)u.m(new C.elS(u))
w=3
return B.b(u.a_F(),$async$a23)
case 3:return B.h(null,v)}})
return B.i($async$a23,v)},
a_F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.Zt(B.cF(n,0,null),new B.Q9(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iW(0).dg(0,A.qs),$async$a_F)
case 7:if(r.c==null){w=1
break}r.d.tY(!1)
r.m(new C.elQ(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.elR(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_F,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccM(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.elT(w))}else{v.qp(0)
w.m(new C.elU(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.m(8*n.d)
m=B.a([D.jB.j(0.92),D.Mn.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qO,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.Q,0,A.p),o,o,o),new B.p(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bj)}if(p.f)return B.at(B.X(A.aqA,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcI
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.ev(A.A,new B.a6(r,q,new B.AM(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.q(o,B.X(A.hx,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a7),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.by(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccL(),o,o,o,o,o,o,!1,A.a4)}}
C.y9.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jC.prototype={}
C.aeq.prototype={
B(d){return B.pd(new C.e8h(this,B.S(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adP.prototype={
B(d){var w,v,u=null,t=B.S(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.L(D.jB.j(t?0.35:0.4),A.r,1),p=t?D.N1:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fF(0.5625,C.ilL(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.an5,u,u,u,u),1)
m=D.jB.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jB,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.boq,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.alp,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yc.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o4.prototype={}
C.blD.prototype={
a_O(d){var w=null
return new B.bM(A.a6,w,w,B.BW(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cdf(){return this.a_O(1)},
azm(d){var w=null,v=B.m(8),u=B.L(A.ir,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agG,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.ir,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.ir,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.l,v,A.bc,A.j,0,v,v),A.ay,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azm("TAARIFA ZA WANANDOA"),A.am,w.cdf(),A.cU,w.a_O(0.9),A.cU,w.a_O(0.7),A.U,w.azm("TAMKO LA MAKUBALIANO"),A.fL,w.a_O(1),A.cU,w.a_O(0.95),A.U,w.azm("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.j,0,A.p)}}
C.aet.prototype={
B(d){return B.pd(new C.eqE(B.S(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.ag8.prototype={
B(d){var w,v,u,t,s,r=null,q=B.S(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bnX:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.hgj(w.a)
if(v==null)v=A.d.gH(D.SM)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fF(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fR(C.hgi(v.d),A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.am2,new C.blD(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.an5,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.N2,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bgj,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.alp,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.la.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8Z.prototype={}
C.WW.prototype={
S(){var w=$.aw()
return new C.aFS(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mW(0,null,null),A.d.gH(D.a5z),D.dW2,B.a([],x.L),B.a([],x.gE))}}
C.aFS.prototype={
Y(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.Ac(C.fRS(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fQO().bG(new C.etB(v),w)
$.rg().jp(0,"assets/images/ngmy_logo.png").bG(new C.etC(v),w).eM(new C.etD())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a3()},
afy(d){var w=null,v=this.c
if(v!=null)v.M(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Jw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(88,1600,A.eO),$async$Jw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Jw)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hFs(m,p),$async$Jw)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFW(new B.q8(o,1),m),$async$Jw)
case 10:if(r.c!=null)r.m(new C.etd(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afy("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jw,v)},
XL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hFs(s,q),$async$XL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFW(new B.q8(r,1),s),$async$XL)
case 4:if(t.c!=null)t.m(new C.et9(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XL,v)},
afz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etk(q))
t=4
q.a.toString
p=C.iqN()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afz)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etl(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afy(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etm(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afz,v)},
a_T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etf(q,i))
t=4
q.a.toString
p=C.iqM()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_T)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etg(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eth(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eti(q))
$.aW.x1$.push(new C.etj(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_T,v)},
cdv(d){this.m(new C.ete(this,d))},
ES(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ES=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etb(q))
t=4
w=7
return B.b($.aW.gmS(),$async$ES)
case 7:w=8
return B.b(B.bQ(A.mW,null,x.H),$async$ES)
case 8:k=$.aW.aq$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qi))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$ES)
case 9:o=e
w=10
return B.b(o.hs(A.hh),$async$ES)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.ahz(J.eS(A.dN.gaU(n)),"ngmy_news.png","image/png"),$async$ES)
case 11:m=e
q.afy(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afy(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etc(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ES,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.lp,a2,a2,a2,new C.ets(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bYi,a2,a2,a2,new C.ett(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oD,a2,a2,a2,a4?a1.gb1G():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eE(v,a2,a2,!0,!0,A.BY,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f8R,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fF(0.7142857142857143,B.ev(A.A,new B.em(new C.b2Y(t,s,r,a1.x,a2),a1.d),A.f,A.dB),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
t=a1.as?a2:a1.gcdu()
t=B.a([B.E(B.dg(D.bZ4,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bo(D.ua,a2,a2,a2,A.c,A.h5,a2,a2,new B.b9(B.m(14),Q.vP),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.m(10),B.fR(r,A.A,a2,a2,A.cj,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aG(a2,a2,a2,a2,D.bVH,a2,a2,a2,a1.as?a2:a1.gbNg(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVc("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dp8[o]
p.push(B.n1(a2,D.ua,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pP,a2,a2,a2),A.hj,new C.etu(a1,n),a2,a2,Q.vP,a2))}p=B.bV(A.bG,p,A.bs,a2,6,8)
m=a1.Q
m=B.bV(A.bG,B.a([D.fZD,A.be,B.jl(a2,a2,a2,D.fJ9,a2,new C.etv(a1),m==="en",a2,a2,a2,a2),A.ae,B.jl(a2,a2,a2,D.fJ4,a2,new C.etw(a1),m==="sw",a2,a2,a2,a2)],w),A.vJ,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5z,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bP(i,i.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTF(g==null?h.a(g):g))}k=B.cd(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5z,10,a2,j),h=j.$ti,j=new B.bP(j,j.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTF(g==null?h.a(g):g))}j=B.cd(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdx()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.U,p,A.X,m,A.aB,new B.D(A.cx,l,a2),new B.a6(a2,78,k,a2),A.U,new B.a6(a2,78,j,a2),A.aR,B.aA(a2,B.q(A.A,B.A(B.a([D.bYZ,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fx,a2,a2,a2)],w),A.l,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.uY,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dY,B.A(B.a([D.dGk,A.au,D.bIW],w),A.l,a2,A.e,A.j,0,a2,a2),A.U],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a6
q=e?A.b9.j(0.35):D.ua
p=new B.aN(16,16)
d=new B.ay(A.by,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fza,a2,a2,a2),A.f,a2,A8.XB,new B.p(q,a2,new B.bG(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.iu,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dak[o]
t.push(B.n1(a2,D.ua,B.d(a0,a2,a2,a2,a2,a2,a2,A.KC,a2,a2,a2),A.hj,new C.etx(a1,a0),a2,a2,Q.vP,a2))}u.push(B.bV(A.bG,t,A.bs,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVc("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ety(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdw()
u.push(B.A(B.a([t,A.ae,B.ID(A.zw,s,B.nZ(a2,A.b9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1G()
u.push(B.dg(A.oD,a2,D.fV2,t,B.bo(A.cX,a2,a2,a2,a2,A.Km,a2,a2,new B.b9(B.m(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cd(v,a1.r,a2,A.alO,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.L(E.ko.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.q(a2,B.A(B.a([E.aal,A.ex,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jx,a2,a2,a2)],w),A.l,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(E.BP,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bF0,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.BY,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVc(d){var w=null
return B.bt(w,new B.b6(4,B.m(14),A.a1),w,A.eY,w,w,w,w,!0,w,w,w,w,w,w,D.ua,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.EB,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTF(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bD:A.by
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kt,t,t,t,t),A.fL],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bB4,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jp,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.q(t,B.x(w,A.l,t,A.bc,A.j,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iJ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eta(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ac.prototype={
bfg(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ac(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOp(d){var w=null
return this.bfg(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjD(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjB(),B.U(w).k("N<1,n>")).bY(0,new C.cjC())
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
return this.bfg(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG4(d){return this.f}}
C.tM.prototype={
a7(){return"NewsLayout."+this.b}}
C.Ca.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b2Y.prototype={
rV(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1I(d,e,f,g){return this.rV(d,e,null,1.25,f,A.bt,g)},
QA(d,e,f,g,h){return this.rV(d,e,f,1.25,g,A.bt,h)},
azs(d,e,f,g,h){return this.rV(d,e,null,f,g,A.bt,h)},
azr(d,e,f,g,h){return this.rV(d,e,f,g,0,A.bt,h)},
b1K(d,e,f,g,h){return this.rV(d,e,null,f,0,g,h)},
cdB(d,e,f,g,h,i){return this.rV(d,e,f,g,0,h,i)},
azq(d,e,f,g){return this.rV(d,e,null,f,0,A.bt,g)},
afC(d,e,f){return this.rV(d,e,null,f,0,A.bt,A.cT)},
b1J(d,e,f,g,h){return this.rV(d,e,f,g,0,h,A.cT)},
cdA(d,e,f,g){return this.rV(d,e,null,f,0,g,A.cT)},
cdz(d,e,f,g){return this.rV(d,e,f,g,0,A.bt,A.cT)},
afD(d,e,f,g,h,i){return this.rV(d,e,f,g,h,A.bt,i)},
b1H(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.en(d,u,u,A.cJ,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jg(1),u,u,h,u,A.bY,u,A.cs)
v.o5(g)
if(!v.b.a.c.gaGz())return w
w-=2}return j},
afA(d,e,f,g,h,i,j,k){return this.b1H(d,e,f,g,h,i,j,k,A.bt)},
aBE(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.j,0,A.p)},
aBD(d){return this.aBE(null,!1,d)},
aiA(d,e){return this.aBE(null,d,e)},
cvu(d,e){return this.aBE(d,!1,e)},
gb3V(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXU(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Ph(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afA(w.gaXU(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXU(),v,g,A.a2,v,v,v,w.azr(u,t,f,1.02,A.V),e,v,v)},
aXZ(d){return this.Ph(d,A.K,null,2,78,30)},
acQ(d,e,f,g,h){return this.Ph(d,e,null,f,g,h)},
c1A(d,e,f,g,h){return this.Ph(d,A.K,e,f,g,h)},
c1z(d,e,f){return this.Ph(d,A.K,null,e,f,30)},
SA(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jG,B.d(s,u,g,A.a2,u,u,u,v.b1J(w,v.b1H(t,w,A.cT,d,g,h,15,1.2,A.cH),f,1.2,A.cH),e,u,u),u)},
b9Q(d){return this.SA(d,A.K,null,3,24)},
aD7(d,e,f,g){return this.SA(d,e,null,f,g)},
cDb(d,e,f){return this.SA(d,A.K,e,3,f)},
b9R(d,e){return this.SA(d,e,null,3,24)},
cD9(d,e){return this.SA(d,A.K,null,3,e)},
cDa(d,e,f){return this.SA(d,e,null,3,f)},
at_(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QA("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.j,0,v,v)},
Ob(){return this.at_(null,!0)},
asZ(d){return this.at_(null,d)},
bJd(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.hU,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdA(this.d.as,13.5,1.2,A.cH),e,w,w),w),w)},
w6(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3V(),h=A.o.ap(j.bD(B.bZ(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.idv(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1I(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afA(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afA(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eP,l,l,l,m.afD(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.l,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.U,B.A(B.a([B.d(C.bFb(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iR,A.j,0,l,l),A.am,m.aiA(!0,3)],s),A.l,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ex,B.E(B.d(i,l,1,A.eP,l,l,l,m.azq(v,u*0.9,1,A.V),l,l,l),1)],w),A.l,l,A.e,A.j,0,l,l),A.X,B.A(B.a([B.d(C.bFb(j),l,l,l,l,l,l,m.QA(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iR,A.j,0,l,l),A.U,m.cvu(B.b0(h),3)],w),A.l,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb3V()
v=B.d("NGMY",l,l,l,l,l,l,m.azs(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eM(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rV(k,r*0.72,o,1.05,-0.5,A.cH,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b3,new B.dq(1,A.cr,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afD(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.e_,l,l),l)],n),A.l,l,A.e,A.j,0,l,l),A.U,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iR,A.j,0,l,l)
t=m.aiA(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azq(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ay,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.aiA(!0,1.4),A.ay,B.d(C.bFb(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ay,m.aBD(3)],h),A.l,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azs(v,u,1,3,A.V),A.K,l,l),A.U,m.aiA(!0,1.2),A.ay,B.A(B.a([B.d(C.bFb(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iR,A.j,0,l,l),A.ay,m.aBD(3)],h),A.l,l,A.e,A.j,0,A.p)}},
ae1(d){return this.w6(d,!1)},
afB(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afD("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cdy(d,e){return this.afB(d,null,e,null)},
b_9(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.azr("Roboto",15,t,1,A.cC),r=B.X(E.aoI,t,w,w,w,18),q=A.a.aC(A.oI[B.bL(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bU(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h3,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
ay8(){return this.b_9(A.n4)},
b6T(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afD("Roboto",this.afA(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBH(d,e,f){return this.b6T(d,e,f,30)},
aDa(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.ur,B.d(v,w,e,A.a2,w,w,w,this.cdz("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9V(d){return this.aDa(d,3,22)},
cDm(d,e){return this.aDa(d,e,22)},
ug(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BI(D.bHS,w,s)
if(v==="sepia")w=new B.BI(D.bHR,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.at(B.X(A.z4,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.p(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.L,A.YX.j(0.38)],x.O),s,s),A.n),A.bj))
return new B.a6(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ug(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.mg,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.en4,14)],x.V)
v=k.ug(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1J(i.as,13.5,D.bi3,1.1,A.cH),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(D.blW,j,j,j,w,j,A.n),j,e,j,j,D.bCu,j,j,d),j)
case 3:w=B.m(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.by(B.m(25),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a6(d,e,B.at(B.q(j,B.hU(k.ug(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a7),j,t,j,j,A.mg,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.emL,10)],x.V)
return B.eM(A.A,0.025,new B.a6(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.q(j,k.ug(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rV,j,j,j),0,0,0),B.ap(j,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a6(d,e,B.b4(B.nT(k.ug(d,e),A.aq,D.ht3),new C.beD(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ug(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bh(s));++m){l=new B.aN(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c7(A.aL,A.qS,A.j,A.l,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.ep,j,j,j,e,j,j,D.bH6,j,j,d)
case 8:w=d/2
v=B.xy(A.fK,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.by(B.xy(A.hP,new B.aN(w,w)),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h4,22)],x.V)
return B.q(j,k.ug(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a6(d,e,B.nT(k.ug(d,e),A.aq,D.hBj),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ug(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aRb(d,e){return this.d.e===D.Tn?A.bM:this.bJd(d,e)},
Xg(d){return this.aRb(d,A.K)},
gaCr(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCq(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.L(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1K(v.Q,19,1.15,A.cH,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QA("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.ay)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afC(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jm(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bi,n,n,d)},
gclR(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aav(d,e,f,g){return B.ct(new C.cjE(this,e,d,f,g))},
aau(d){return this.aav(d,22,!0,18)},
Xu(d,e){return this.aav(d,22,!0,e)},
aSf(d,e,f){return this.aav(d,22,e,f)},
bLc(d,e,f){return this.aav(d,e,!0,f)},
bcU(d,e,f,g){return B.ct(new C.cjF(this,e,d,g,!0,f))},
ckE(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae1(824),A.aB,k.aXZ(824),k.b9Q(824),A.U,k.Ob(),A.af,B.at(k.qW(824,360),j,j,j),k.Xg(824),A.af,B.E(k.aau(3),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae1(824),A.aR,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.x(B.a([k.acQ(440,A.bn,3,62,26),k.aD7(440,A.bn,2,20),A.b3,k.at_(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Kn,B.x(B.a([k.qW(362,310),k.Xg(362)],w),A.l,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.X,k.aBD(2),A.af,B.E(k.aau(3),1)],w),A.al,j,A.e,A.j,0,A.p)
case 2:w=k.w6(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1A(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cDb(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.l,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Ch,j,j,j)
u=B.a([B.at(k.qW(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tn){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azr(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lM,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.U,k.Ob(),A.X,B.E(k.Xu(2,21),1)],t),A.al,j,A.e,A.j,0,A.p)
case 3:h=k.w6(824,!0)
w=k.qW(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.ba,j,A.ad,A.t,B.a([w,B.ap(0,B.q(j,k.Ph(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.ba,A.x,v,j,j),A.n),j,j,j,j,D.bFj,j,j,j),j,j,0,0,j,j)],u),j),k.b9R(824,A.bn),A.U,k.Ob(),A.X,B.E(k.aau(3),1)],u),A.al,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae1(824),A.aB,k.aXZ(824),k.b9Q(824),A.U,k.Ob(),A.af,B.E(k.bcU(3,300,B.x(B.a([k.qW(300,300),k.Xg(300)],h),A.l,j,A.e,A.j,0,A.p),360),1)],h),A.al,j,A.e,A.j,0,A.p)
case 5:w=k.w6(824,!0)
v=x.p
u=B.x(B.a([k.acQ(440,A.bn,3,62,26),k.aD7(440,A.bn,2,20),A.b3,k.asZ(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bA,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aTy,new B.D(A.hU,k.qW(364,h.e===D.Tn?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Xu(2,21),1)],v),A.al,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.ae1(824),A.af,k.c1z(824,2,70),k.cD9(824,21),A.U,k.Ob(),A.af,B.E(k.bcU(3,340,B.at(k.qW(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 7:w=k.w6(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFb(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QA(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bi,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1K(h.Q,24,1.15,A.cH,A.V),j,j,j))
v.push(A.b3)
if(k.gaCr())v.push(k.aCq(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a6(230,j,B.x(v,A.al,j,A.e,A.j,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.aln,j,j,j,1.2),new B.a6(570,j,B.x(B.a([k.acQ(570,A.bn,3,62,28),k.cDa(570,A.bn,20),A.U,k.asZ(!1),A.U,B.at(k.qW(570,330),j,j,j),k.Xg(570),A.X,B.E(k.aSf(2,!1,17),1)],t),A.al,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.al,j,A.e,A.j,0,A.p)
case 8:w=k.w6(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QA(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.am,k.Ph(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bDA,j,j,j),k.b9R(824,A.bn),A.X,B.at(k.qW(824,310),j,j,j),k.Xg(824),A.U,k.Ob(),A.X,B.E(k.aau(3),1)],s),A.al,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w6(824,!0),A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([k.qW(824,430),B.ap(18,k.cdy(k.c.b,17),j,j,18,j,j,j)],w),j),A.bA,k.aBH(824,3,66),k.b9V(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ay8(),A.aB,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w6(824,!0),A.bA,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.x(B.a([k.afB(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6T(410,4,58,28),k.aDa(410,6,20),A.b3],w),A.E,j,A.e,A.j,0,A.p),j),W.aTz,k.qW(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aB,k.ay8(),A.aR,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 12:w=k.w6(824,!0)
v=k.qW(824,420)
u=B.hQn(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fx(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdB(i,30,A.c,1,A.cH,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bFz,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bA,k.aBH(824,3,62),k.b9V(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_9(A.lR),A.aB,B.E(k.Xu(2,18),1)],r),A.al,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w6(824,!0)
u=h.w
t=x.p
w=B.a([k.qW(824,380),B.ap(j,k.afB(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBH(824,2,60)
r=k.cDm(824,2)
p=k.ay8()
o=B.E(k.aSf(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ad,A.t,w,j),A.aR,s,r,A.X,p,A.aB,o,A.af,B.q(j,B.A(B.a([B.by(B.m(14),k.ug(150,104),A.aq),A.oU,B.E(B.x(B.a([k.afB("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.U,B.d(q,j,2,A.a2,j,j,j,k.azq(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eJ,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bi,j,j,j)],t),A.al,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.w6(824,!0),A.bA,k.acQ(824,A.bn,3,62,30),k.aD7(824,A.bn,2,22),A.X,k.asZ(!1),A.X,B.at(k.qW(824,330),j,j,j),k.aRb(824,A.bn),A.aR,B.E(k.bLc(2,40,21),1)],x.p),A.al,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.p(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bj),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.bb5(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bG5,B.x(B.a([B.E(t.ckE(),1),A.U,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fL,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1I(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QA(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iR,A.j,0,s,s)],o),A.al,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dy(!0,B.b4(s,s,s,new C.bu7(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fR(q,A.A,s,s,A.cj,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n4,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azs(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dy(!0,B.da(B.q(s,B.A(o,A.l,s,A.e,A.Q,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bHf,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jm(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.beE.prototype={
ju(d){return C.hud(d)},
k9(d){return!1}}
C.beD.prototype={
a4(d,e){var w,v=C.hud(e)
$.Q()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwE.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e1()
o.cY(3)
w=$.Q()
v=B.a([],x.v)
u=new B.aF(w.r,A.ai,null,null,v)
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
u.E(new B.bv())
return u},
k9(d){return!1}}
C.bb5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e1()
o.cY(7)
$.Q()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.c0(A.A,0.5,A.x,p,0,B.a([A.Yp.j(0.13),A.L],v),p,p).aK(0,B.bY(r,q)))
d.N(r,q,w)}w.sav(p)},
aD(d){return!1}}
C.bu7.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cs,u,u,u,B.cP(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dz,A.bY)
s.e5()
w=d.c
J.bp(w.save())
w.translate(t/2,e.b*0.52)
d.hX(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.WX.prototype={
S(){return new C.aFV()}}
C.aFV.prototype={
Y(){var w=this
w.a2()
B.fId(w.a.c,null).bG(new C.eun(),x.g7).bG(new C.euo(w),x.a)
w.a.toString},
gaPW(){var w=D.azq[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazt(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPW()
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
q=A.i.D(v*p,q,p-q)-q
w=A.i.D(u*o,w,o-w)-w
return new B.a1(q,w,q+s,w+t)},
a_V(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_V=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eua(r))
t=4
q=r.gazt()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Q()
n=new B.pZ(new B.py())
m=B.zu(n,null)
i=B.K()
i.z=A.he
m.q2(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xD(J.hjr(p),J.hjr(o)),$async$a_V)
case 7:l=e
w=8
return B.b(l.hs(A.hh),$async$a_V)
case 8:k=e
j=r.c
if(j!=null){j=B.a7(j,!1)
i=k
i.toString
j.O(J.eS(J.vV(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eub(r))
r.c.M(x.q).f.U(D.fiv)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_V,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.lp,s,s,s,new C.euh(d),s,s,s,s,s,s),p=x.p
q=B.eE(B.a([B.bN(!1,D.fXG,s,s,!0,s,s,s,t.y||r==null?s:t.gcdC(),s,s)],p),s,s,!0,!0,A.BY,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h0I,s,s,s,1,s,!0)
if(r==null)p=A.kK
else{w=B.E(new B.D(A.bQ,B.at(new B.fF(t.gaPW(),B.ct(new C.eui(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iJ,B.jl(s,s,s,B.d(D.azq[u].a,s,s,s,s,s,s,A.ab_,s,s,s),s,new C.euj(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a6(s,40,B.cd(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZL,B.E(B.kV(s,s,s,6,1,new C.euk(t),t.f),1),D.bZl],p),A.l,s,A.e,A.j,0,s,s),D.fUW,A.am,B.bN(!1,D.fUD,s,s,!0,s,s,s,new C.eul(t,d),s,s)],p),A.l,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Zd,s,s,s,s,s,s,D.bCW,s,s,s)],p),A.l,s,A.e,A.j,0,A.p)}return B.c4(q,A.BY,p,s,!1,!1,s,s)}}
C.beb.prototype={
a4(d,e){var w
$.Q()
w=B.K()
w.z=A.cj
return d.q2(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a17.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHj(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b6,A.aQ),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6b),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oT.prototype={}
C.aHj.prototype={
gaY7(){var w,v,u=this
if(u.p1)w=new B.wb(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f3g(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a3()},
Zu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rg().jp(0,"assets/images/ngmy_logo.png"),$async$Zu)
case 7:q=e
p=J.eS(J.vV(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFW(new B.q8(p,1),o),$async$Zu)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f28(r,p))
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
return B.i($async$Zu,v)},
QD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(92,1800,A.eO),$async$QD)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$QD)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFW(new B.q8(p,1),n),$async$QD)
case 9:if(r.c==null){w=1
break}r.m(new C.f2w(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QD,v)},
b6f(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c9=w.bH=w.bm=0
w.cO=w.c6=!1},
aZU(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCB(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dsd)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCB(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCB(C.he3(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCB(C.he3(1-a0*0.5,n,n,n),w)}return a1?C.bCB(C.he3(-1,255,255,255),w):w},
aDg(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xB(u,v,w)
this.dx.py(new C.f2G(t),!0)
return t},
b8P(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDg()
w=C.inW(e.d.a.a,e.db)
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
return C.ikn(d,k,v,a0,j,e.gaY7(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAZ(){return this.b8P(null)},
DM(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DM)
case 3:w=4
return B.b(B.bQ(A.eR,null,x.H),$async$DM)
case 4:w=5
return B.b($.aW.gmS(),$async$DM)
case 5:s=$.aW.aq$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qi)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DM)
case 7:w=6
return B.b(e.hs(A.hh),$async$DM)
case 6:q=e
u=q==null?null:J.eS(A.dN.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DM,v)},
abp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1S(q))
t=4
w=7
return B.b(q.DM(),$async$abp)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aN(p)
n=C.Co(null,null,null,null,D.oN,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8P(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a7(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1T(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abp,v)},
B4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1Q(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B4)
case 7:w=8
return B.b(B.bQ(A.mX,null,x.H),$async$B4)
case 8:w=9
return B.b($.aW.gmS(),$async$B4)
case 9:k=$.aW.aq$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qi))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B4)
case 10:o=e
w=11
return B.b(o.hs(A.hh),$async$B4)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.ahz(J.eS(A.dN.gaU(n)),"ngmy_quote.png","image/png"),$async$B4)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.M(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1R(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B4,v)},
cnN(){var w=this.p4
w.toString
return B.ct(new C.f2p(this,w))},
b1R(d,e){var w=null
return B.bt(w,w,w,w,w,D.ftp,w,w,!0,new B.b6(4,B.m(16),Q.vP),w,w,w,w,w,D.ua,!0,w,w,w,w,new B.b6(4,B.m(16),D.b54),w,w,w,w,w,w,w,w,Ac.EJ,e,w,w,w,w,w,w,w,D.fz0,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yz(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b9,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aWe,w,w,w))
return new B.D(H.ald,B.A(u,A.l,w,A.e,A.j,0,w,w),w)},
b1Q(d,e){var w=null,v=B.m(18),u=B.L(A.by,A.r,1)
return B.q(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k9),A.f,w,w,new B.p(D.ua,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
we(d){return this.b1Q(d,A.bF)},
ox(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uY:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.L(f?A.L:A.by,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jY,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jY,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cT(r,B.A(s,A.l,r,A.e,A.Q,0,r,r),r,r,A.b4,new B.p(w,r,u,v,r,p,A.n),A.h1,r,r,r,r,A.GL,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahw(d,e,f){return this.ox(d,null,e,f)},
azx(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b9.j(0.28):A.c.j(0.05),t=g?A.eL:A.by,s=x.p
v=B.a([B.cT(w,d,w,w,A.b4,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h1,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ay,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a6(j,w,B.x(v,A.l,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1U(d,e,f,g,h,i){return this.azx(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aV1,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.ero,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2C(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.aaW,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0N,u,u,u))
s=B.A(s,A.l,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.ab8(w).cPL(A.b9,A.by,A.b9.j(0.2),A.c,D.f86,4)
return new B.D(A.yy,B.x(B.a([s,B.YR(B.kV(u,u,u,g,f,new C.f2D(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.j,0,A.p),u)},
ajA(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ajZ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dk:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSz:o
n.push(B.aA(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bG(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f2F(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bV(A.bG,n,A.bs,o,10,10)},
bPn(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6b
else{v=x.a8
w=B.C(new B.Y(D.a6b,new C.f1I(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1R("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f1J(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.abi,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1R("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f1K(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yz("DESIGNS",A.uK)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d16[q]
r.push(new B.D(A.iJ,o.ahw(p,o.x===p,new C.f1L(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.ci(B.A(r,A.l,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a6(n,118,B.hN(n,new C.f1M(o,w),w.length,n,n,A.aL,new C.f1N(),!1),n),A.U,o.b1Q(B.x(B.a([B.iQ(A.b9,n,n,A.ag,!0,new C.f1O(o),n,D.fLC,n,D.fHL,o.k3),B.iQ(A.b9,n,n,A.ag,!0,new C.f1P(o),n,n,n,D.fEX,o.k2)],s),A.l,n,A.e,A.j,0,A.p),A.alN)],s),A.E,n,A.e,A.j,0,A.p)},
cJX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDg()
if(a7.length===0)return a5.we(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KM,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aC(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("cj.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cD(m,new C.f35(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f3c(a5)
j=new C.f3e()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KM,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b9.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eL:A.by
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aC(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bG(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Ou,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f36(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.we(B.bV(A.bG,o,A.vJ,a6,6,6))
i=B.a([a5.ox("All words",K.aqi,!1,new C.f37(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahw("Sentence "+a3,!1,new C.f38(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahw("Clear picks",!1,new C.f39(a5)))
i=B.bV(A.bG,i,A.bs,a6,8,8)
g=a5.yz("SIZE OF THE PICKED WORDS",D.apI)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dym[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f3a(e,k)
f.push(a5.ahw(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bV(A.bG,f,A.bs,a6,8,8),A.X,a5.ox("Make every word normal",A.k7,!1,new C.f3b(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cET(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bIx,B.d(A.d.fa(D.aBc,new C.f2P(q)).b,p,p,p,p,p,p,D.frM,p,p,p)],o),A.l,p,A.e,A.j,0,p,p),m=B.ct(new C.f2Q(q)),l=q.yz("HIGHLIGHT BEHIND THE WORDS",A.a2I),k=q.p1?-1:q.k4
k=q.ajZ(k,new C.f2R(q),D.dcu)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.X,m,l,B.bV(A.bG,B.a([k,B.aA(p,B.q(p,D.bVB,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.fl7,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2U(q),p,p,p,p,p,p,!1,A.a4)],o),A.vJ,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KM,p,p,p)],o)
if(q.gaY7()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajA("Colour",l,0,360,new C.f2V(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajA("Shade",k,0.15,0.9,new C.f2W(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f2X(q),1,""+A.i.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.we(B.x(m,A.l,p,A.e,A.j,0,A.p))],o))}n.push(q.yz("LOOK",A.wK))
m=B.a([q.ox("Bold",I.apG,q.fy,new C.f2Y(q)),q.ox("Italic",I.apH,q.go,new C.f2Z(q))],o)
for(u=0;u<3;++u){l={}
k=D.d2n[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uY:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.by,1,A.r,-1)
m.push(B.aA(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bG(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3_(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bV(A.bG,m,A.vJ,p,8,8))
n.push(q.yz("COLOUR",A.ml))
n.push(q.ajZ(q.fx,new C.f30(q),D.doz))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KM,p,p,p))
n.push(q.yz("SIZE AND PLACE",A.HK))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f2S(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.we(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f2T(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cnO(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.m(22)
v=B.L(A.b9.j(0.6),A.r,1.6)
u=B.a([A.b9.j(0.18),A.bD.j(0.12)],x.O)
return B.aA(q,B.q(q,B.x(B.a([B.q(q,D.c0e,A.f,q,q,D.b82,q,62,q,q,q,q,q,62),A.aB,D.fJ2,A.am,D.fNV],x.p),A.l,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(D.ua,q,v,w,q,new B.a9(A.a6,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bEa,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1T(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.by(B.m(12),new B.a6(46,62,B.fR(p,A.A,120,q,A.cj,A.c_,!1,q,!1,q,q),q),A.aq),A.be,B.E(B.x(B.a([D.fIz,A.U,B.bV(A.bG,B.a([r.ox("Change",A.jJ,!1,r.gb1T()),r.ox("Remove",A.ei,!1,new C.f2t(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.j,0,A.p),1)],w),A.l,q,A.e,A.j,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dkH[t]
u.push(r.ox(s.b,s.a,r.at===t,new C.f2u(r,t)))}u=B.bV(A.bG,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5K(p)
break
case 1:s=r.c4F()
break
case 2:s=r.bLb()
break
case 3:s=r.bRG()
break
default:s=r.bNh()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.X,new B.bM(A.a6,q,q,r.ox("Reset the whole picture",A.k7,!1,new C.f2v(r)),q)],w),A.E,q,A.e,A.j,0,A.p)},
c5K(d){var w=this,v=x.p
return B.x(B.a([B.bV(A.bG,B.a([w.ox("Auto enhance",E.a2m,!1,new C.f2l(w)),w.ox("Make words easy to read",A.oA,!1,new C.f2m(w))],v),A.bs,null,8,8),A.aB,B.ct(new C.f2n(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c4F(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f2_(o),0,A.i.ac(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f20(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f21(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f22(o),0,""+A.i.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f23(o),0,""+A.i.V(t*100))
s=o.a_
s=o.kB("Darken",s,0,0.85,new C.f24(o),0,""+A.i.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f25(o),0,""+A.i.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f26(o),0,""+A.i.V(q*100))
p=o.aR
return o.we(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f27(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.j,0,A.p))},
bLb(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f1l(s),1,""+A.i.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f1m(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f1n(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.we(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f1o(s),0,""+A.i.V(u)+"\xb0"),new B.bM(A.a6,r,r,s.ox("Negative",D.bQy,s.y1,new C.f1p(s)),r)],t),A.l,r,A.e,A.j,0,A.p))
v=s.yz("COLOUR WASH",A.Pv)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azP)
t=B.a([u,v,s.ajZ(w,new C.f1q(s),q),A.U],t)
if(s.b7!=null){q=s.b6
t.push(s.we(s.ajA("Wash strength",q,0,0.9,new C.f1r(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bRG(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f1U(r),0,A.o.u(A.i.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f1V(r),0,""+A.i.V(w*100))
v=r.aG
u=x.p
v=r.we(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f1W(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.j,0,A.p))
w=r.yz("LIGHT LEAK",D.bQh)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azP,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ajZ(q,new C.f1X(r),t),A.U],u)
if(r.bf!=null){q=r.bK
u.push(r.we(r.ajA("Leak strength",q,0,1,new C.f1Y(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bNh(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f1v(s),1,""+A.i.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f1w(s),0,""+A.i.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f1x(s),0,""+A.i.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.we(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f1y(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.j,0,A.p)),A.X,B.bV(A.bG,B.a([s.ox("Turn 90\xb0",H.aqM,!1,new C.f1z(s)),s.ox("Flip sideways",A.CM,s.c6,new C.f1A(s)),s.ox("Flip upside down",A.CM,s.cO,new C.f1B(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c8s(){var w=null,v=B.m(22),u=B.L(A.by,A.r,1)
return B.q(w,B.x(B.a([D.f8i,A.X,D.fKE,A.aB,B.aA(w,B.q(A.A,D.f8w,A.f,w,w,new B.p(w,w,w,B.m(16),w,G.uY,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2o(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(D.ua,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c5x(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f2g(p),m=x.p,l=B.A(B.a([D.bID,p.ox("Reset",A.k7,!1,new C.f2c(p))],m),A.l,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KM,o,o,o),j=p.yz("SHAPE",A.aqJ),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Di[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1U(n.$2(t,p.cy),62,u.b,s===t,new C.f2d(v,p),62))}}i=B.bV(A.bG,i,A.bs,o,8,8)
v=p.yz("RING",A.pm)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Db[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1U(n.$2(p.cx,t),62,r.b,q===t,new C.f2e(s,p),62))}u=B.bV(A.bG,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.ay,k,j,i,v,u,A.af,p.we(p.kB("Size",s,0.12,0.4,new C.f2f(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b4T(d){return new B.a6(null,d,new B.fF(0.5625,B.ct(new C.f2z(this)),null),null)},
cE6(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.L(A.by,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uY:q
t=new B.aN(14,14)
s=D.dmZ[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bd,B.aA(A.c5,B.cT(q,B.x(B.a([r,A.cU,new B.qH(A.e2,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.Q,0,A.p),q,q,A.b4,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bzE,q,q,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f2I(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bBN,A.mg,q,q,q)},
aSO(){var w,v,u=this,t=null,s=u.cE6()
switch(u.as){case 0:w=u.bPn()
break
case 1:w=u.cJX()
break
case 2:w=u.cET()
break
case 3:w=u.cnO()
break
case 4:w=u.c5x()
break
default:w=u.c8s()
break}v=x.p
return B.by(A.tP,B.e8(B.x(B.a([s,B.E(B.cd(B.a([w],v),t,t,D.bCX,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.j,0,A.p),D.Zd,!0),A.aq)},
aOQ(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gce2(),p=B.m(16)
q=B.E(B.aA(r,B.q(r,D.f8H,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRe()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.feH)
else t.push(D.bUF)
t.push(A.ae)
t.push(D.bL3)
return B.q(r,B.A(B.a([q,A.au,B.E(B.aA(r,B.q(r,B.A(t,A.l,r,A.bc,A.j,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.uY,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.j,0,r,r),A.f,r,r,D.b79,r,r,r,r,A.O7,r,r,r)},
b1S(){var w=null
return new B.D(V.a0I,B.A(B.a([B.aG(w,w,w,w,A.n6,w,w,w,new C.f1Z(this),w,w,w,w,w,w),D.h_B,A.b3,D.c2x],x.p),A.l,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.BY,B.bm(!0,B.ct(new C.f3f(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e1()
n.cY(7)
w=e.a
v=e.b
u=A.i.V(w*v/55)
$.Q()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aD(d){return d.b!==this.b}}
C.rU.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mp.prototype={}
C.Ad.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o8.prototype={}
C.wv.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a96.prototype={}
C.asO.prototype={}
C.a1E.prototype={
S(){return new C.aJf(new B.au(A.ax,$.aw()),B.k8(!0,null,!0,!0,null,null,!1),D.dOH,B.a([],x.s),B.ez([D.Jm],x.Q))}}
C.aJf.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a3()},
a1g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CH(90,700,700,A.eO),$async$a1g)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a1g)
case 8:p=e
if(r.c!=null)r.m(new C.f9D(r,p,q))
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
return B.i($async$a1g,v)},
a1j(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aJQ(78,n,1100,1100),$async$a1j)
case 7:q=e
if(J.cq(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1j)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cP.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f9E(r,p))
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
return B.i($async$a1j,v)},
b6S(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cI.aN(A.d.gan(d.split(","))),A.A,u,u,A.cj,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.bxO},
c5E(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.czQ(C.fPe(w,this.b6S(d),f),g)},
adL(d,e,f,g,h){var w=null,v=new C.f9B(f,e),u=new C.f9C(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.L(p?A.by:A.b9.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.at(B.X(f?A.zi:A.Pj,A.bW,w,w,w,26),w,w,w),D.exM],x.p),w),w)
else p=this.c5E(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bUl],x.p),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.n0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f9A(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
b__(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.by(B.m(8),B.fR(A.cI.aN(A.d.gan(h.split(","))),A.A,p,p,A.cj,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.L(n?A.by:A.b8.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ev,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KT,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.Q3,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.l,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.kt,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fSG(),$async$a9N)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f9j(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f9k(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9N,v)},
afL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afL=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f9m(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f9n(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f9o(r))
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
return B.b(C.fNX(q,r.cx,j,new C.b3m(r.z,r.Q,r.as,r.at),new C.f9p(r),i,m,p,k),$async$afL)
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
if(p!=null)B.a7(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f9q(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eQ,g).w
g=B.aI(d,A.c1,g).w
w=B.at(B.q(h,h,A.f,h,h,new B.p(A.aT,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.q(h,D.bXI,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.b8.j(0.5),A.I,24)],v),D.c6E,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9R(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.Q3,h,h,h,i.ax?h:new C.f9S(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG6()
v=B.a([new B.ac(0,A.G,A.b9.j(0.45),A.I,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wy:A.hI,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wQ,A.a7),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.m(16),D.b4C),h,h,h,h,h,h,h,h,Y.EB,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iJ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aVF,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f9T(i)
s=i.b__(A.kY,q,r,i.gcof(),s)
r=i.z
r=B.E(i.adL(new C.f9V(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bm,B.E(i.adL(new C.f9W(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f9X(i)
s=i.b__(A.uF,r,p,i.gcon(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adL(new C.f9Y(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fPd,A.ay,D.fS7,A.bA,u,A.U,D.fQw,A.aB,v,A.bA,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bm,B.E(i.adL(new C.f9Z(i),r,!0,n,o),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fU4],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.L(D.bpj,A.r,1)
w=C.ai5(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bM(A.a6,h,h,B.q(h,B.A(B.a([D.bYP,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fxD,h,h,h),B.aP(!1,h,!0,D.erE,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fa_(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.Q,0,h,h),A.f,h,h,new B.p(D.bhc,h,u,v,h,h,A.n),h,h,h,h,D.bBs,h,h,h),h)],t))}o.push(A.bA)
o.push(D.fFF)
o.push(A.U)
w=B.a([],t)
for(m=0;m<6;++m){l=D.deH[m]
v=i.ch===l?A.b9:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.by,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.bz(1,A.bd,new B.D(A.jp,B.aA(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b4,new B.p(v,h,new B.bG(k,k,k,k),h,h,h,A.a7),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa0(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.j,0,h,h))
o.push(A.bA)
o.push(D.fYP)
o.push(A.U)
o.push(B.ct(new C.fa1(i)))
o.push(A.bA)
o.push(D.fNg)
o.push(A.U)
w=B.a([i.b9O("auto","Let AI choose",A.ed,A.Sa)],t)
for(v=x.O,m=0;m<11;++m){j=D.wU[m]
u=j.d
w.push(i.b9O(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bV(A.bG,w,A.bs,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.m(16)
u=B.L(i.r?A.b8.j(0.5):A.by,A.r,1)
o.push(B.q(h,B.iQ(h,A.b8,h,h,h,new C.f9U(i),D.bTO,D.fY3,h,D.fI2,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aUP,h,h,h)],t))
o.push(A.bA)
w=i.ax?h:i.gce6()
v=B.ft(h,h,A.b9,A.b9.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.m(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fex:A.HY
o.push(new B.a6(h,54,B.lR(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ng,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bm(!0,B.ci(B.x(o,A.al,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.wk,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aes,h,h,h,h,h,h,h,h),h)},
bSY(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f9r(this,p,d)
if(d===D.DY)return new C.aFM(p,o,q)
w=B.m(16)
v=p?E.wQ:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.by,A.r,1)
s=B.X(p?A.ee:C.hXp(d),A.c,q,q,q,20)
r=C.hXq(d)
return B.aA(q,B.cT(q,B.x(B.a([s,A.ay,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.l,q,A.bc,A.j,0,A.p),q,q,A.b4,new B.p(u,q,t,w,q,v,A.n),A.h1,q,64,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9O(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.by
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a9(A.a6,A.aa,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cT(v,B.A(B.a([w,A.x9,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.Q,0,v,v),v,v,A.b4,new B.p(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.amV,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9G(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1D.prototype={
S(){return new C.aJe(new B.au(A.ax,$.aw()))}}
C.aJe.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
afM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afM=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f9c(r))
w=1
break}B.eY()
r.m(new C.f9d(r))
t=4
q=C.ioR(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ioB(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f9e(r,q))
w=1
break}k=r.c
if(k!=null)B.a7(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hdI()
f=$.Dm.h(0,k.a)
o=f==null||J.cq(f)?null:J.fs(f)
if(o==null){r.m(new C.f9f(r))
w=1
break}n=C.ioz(o,r.a.c)
C.iov(r.a.c.a)
$.hcX=!0
k=r.c
if(k!=null)B.a7(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hgI(j)
h=C.hgJ(r.a.c)
e=C.hgK(r.a.c)
w=7
return B.b(C.bEQ(k,r.a.c.a,j,h,new C.f9g(r),i,e,a0),$async$afM)
case 7:m=a3
k=r.c
if(k!=null)B.a7(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f9h(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eQ,i).w
i=B.aI(d,A.c1,i).w
w=B.at(B.q(j,j,A.f,j,j,new B.p(A.aT,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.ar2,A.f,j,j,D.b6P,j,34,j,j,j,j,j,34),A.au,D.bJf],v),A.l,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaX,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.m(16),Av.adU),j,j,j,j,j,j,j,j,Y.EB,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aVF,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.daN[q]
o=B.d(p,j,j,j,j,j,j,AB.Vw,j,j,j)
n=A.c.j(0.06)
r.push(B.n1(j,n,o,j,k.e?j:new C.f9i(k,p),j,j,Q.vP,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.X,B.bV(A.bG,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUP,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gce7()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.b8.j(0.5),A.eq.j(0.5)],x.O):D.cIt
o=B.a([new B.ac(0,A.G,A.b8.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.erA:D.bYo
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eJ(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hl,j,j,j)],v),A.l,j,A.bc,A.j,0,j,j),j,new B.p(j,j,j,r,o,new B.a9(A.a6,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bm(!0,B.ci(B.x(w,A.al,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.wk,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aes,j,j,j,j,j,j,j,j),j)}}
C.b3m.prototype={}
C.aFM.prototype={
S(){return new C.bmz(null,null)}}
C.bmz.prototype={
gazy(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qt,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gazy().t()
this.bzT()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazy(),new C.eq3(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bk5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dhb[t]
q=r.a*v
r=r.b*u
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=D.ym.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.atl.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a00.prototype={
S(){return new C.aDg()}}
C.aDg.prototype={
gajW(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aii(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAN(){var w=this.e
return w===$?this.e=C.hgI(this.a.c).q(0,D.DY):w},
a9A(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9A=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dt8(s))
u=3
r=A.d.fa(D.wU,new C.dt9(s))
q=B.d4(C.hgI(s.a.c),x.Q)
l=q
J.hk(l,D.DY)
p=l
if(s.gAN())J.c5(p,D.DY)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAN()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hgJ(i.c)
g=C.hgK(s.a.c)
w=6
return B.b(C.bEQ(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9A)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aii(q,s.gajW())
f=q==null?null:q.b
n=f==null?s.gajW():f
if(!J.z(n,r.a)&&!s.gAN())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a7(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dta(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9A,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.c:A.T,k=m?A.aS:A.an,j=m?A.T:A.c,i=B.m(28),h=B.L(m?A.by:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bH,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dtd(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wU[w]
u=o.gajW()
t=o.f?n:new C.dte(o,v)
f.push(new C.bvf(v,u===v.a,t,n))}f=B.kU(1.25,f,3,10,10,n,A.dW,!0)
u=B.m(18)
t=o.gAN()?D.c9n:n
if(o.gAN())s=n
else s=m?A.bp:A.bO
r=B.X(A.ed,o.gAN()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAN()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAN()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAN()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b90(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtf(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alF,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fxX,n,n,n)],g))
f=B.ci(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.GS,n,n,A.ah)
u=o.f?n:o.gbF5()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.m(16),A.a1),n,n,n)
s=B.m(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bEE,e,n),new B.dq(1,A.cr,f,n),new B.D(A.GR,new B.a6(1/0,50,B.bI(B.eJ(B.at(o.f?A.tz:D.fPJ,n,n,n),n,new B.p(n,n,n,s,n,D.c7Y,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.Q,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.uu,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvf.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bM(A.lA,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bM(A.lB,w,w,B.d(v.b,w,w,w,w,w,w,D.fxU,w,w,w),w)],x.p)
if(q)v.push(D.b1N)
return B.aA(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b4,new B.p(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eq0.prototype={
aHm(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xc(d,e){return this.aHm(0,e,null)}}
C.aNS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3i.prototype={
B(d){var w,v,u=null,t=C.hfx(this.c)
if(t==null)w=D.bwg
else{w=B.aI(d,u,x.w).w.cPd(D.bAY,D.fdH)
v=this.d
w=B.q7(new B.dy(!v,B.apu(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a6(416,870,new C.bo9(w,u),u),A.f,A.dB)}}
C.bo9.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.du0[w]
u=new B.aN(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at0,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dvq[w]
u=new B.aN(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at0,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.p(t,t,t,B.m(64),D.d_D,D.c6l,A.n),A.bj),0,0,0))
s.push(B.bR(3,B.c3(t,new B.p(A.w,t,t,B.m(61),t,t,A.n),A.bj),3,3,3))
s.push(B.bR(13,B.by(B.m(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.at(B.q(D.b1Y,B.q(t,t,A.f,t,t,D.b77,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dy(!0,B.by(B.m(51),D.bxU,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dy(!0,B.at(B.q(t,t,A.f,t,t,new B.p(A.ab,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lu.prototype={
pW(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bk,j,2,"Your Presentation Title",0,0,"",D.na,D.cW,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bk,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dm,D.cW,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rV(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fJ,t.l(),3,"",0,0,"",D.ct,D.fi,0.3,0.35,0.72)],s),C.cD(),D.n9,"","","Welcome",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Agenda",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
w=C.cD()
w=C.rV(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bk,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ve,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n9,"","","Agenda",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Main Idea",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
f=C.cD()
f=C.rV(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bk,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ct,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n9,"","","Key Point 1",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bk,j,2,"Compare & Contrast",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bk,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.08,0.24)
q=C.cD()
q=C.rV(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bk,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.52,0.24)],s),C.cD(),D.n9,"","","Key Point 2",D.dm)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bk,j,2,h,0,0,"",D.dm,D.cW,0.8,0.1,0.32)
e=C.cD()
p=C.Co(l,l,l,l,D.DU,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rV(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bk,j,2,"Questions?",0,0,"",D.ct,D.cW,0.7,0.15,0.58)],s),C.cD(),D.n9,"","",h,D.dm)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fs.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fj.prototype={
gaNr(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ai5(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4I(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fj(v,u,t,d==null?w.d:d)},
Gc(d){return this.a4I(null,d,null,null)},
aG0(d){return this.a4I(null,null,null,d)},
cPb(d,e){return this.a4I(d,e,null,null)},
bf8(d){return this.a4I(d,null,null,null)},
bfe(d){return this.a4I(null,null,d,null)}}
C.Ok.prototype={
S(){return new C.blV(new B.eA(0,$.aw()),null,null)}}
C.blV.prototype={
Y(){var w,v=this
v.a2()
w=v.q_(new C.e3w(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fO(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.bzm()},
B(d){var w=C.ai5(this.a.c.a)
if(w==null)w=A.d.gH(D.Ih)
return B.ct(new C.e3v(this,w,C.hw5(this.a.c.d)))}}
C.btM.prototype={
B(d){return B.od(A.Xq,this.e,new C.f8p(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bgS.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVs(d,e,v)
break
case"confetti":w.bLF(d,e,v)
break
case"crown":w.bNi(d,e,v)
break
case"aurora":w.bGa(d,e,v)
break
case"champagne":w.bJy(d,e,v)
break
case"diamonds":w.bPw(d,e,v)
break
case"starburst":w.cBI(d,e,v)
break
case"balloons":w.bGo(d,e,v)
break
case"galaxy":w.bUS(d,e,v)
break
case"redcarpet":w.csB(d,e,v)
break
case"coins":w.bL3(d,e,v)
break
case"lanterns":w.c47(d,e,v)
break
case"hearts":w.c1D(d,e,v)
break
case"petals":w.cnF(d,e,v)
break
case"butterflies":w.bIw(d,e,v)
break
case"neon":w.c8c(d,e,v)
break
case"disco":w.bPH(d,e,v)
break
case"sunrise":w.cDo(d,e,v)
break
case"pearls":w.cmJ(d,e,v)
break
case"snow":w.cBp(d,e,v)
break
case"laurel":w.c4d(d,e,v)
break
case"ribbons":w.cv6(d,e,v)
break
case"kente":w.c3W(d,e,v)
break
case"trophy":w.cH7(d,e,v)
break
case"shooting":w.cz8(d,e,v)
break
case"bokeh":w.bGK(d,e,v)
break
case"orbits":w.ckk(d,e,v)
break
case"flowers":w.bU5(d,e,v)
break
case"music":w.c7V(d,e,v)
break
case"mandala":w.c6k(d,e,v)
break
case"sparklers":w.cBw(d,e,v)
break
case"city":w.bKk(d,e,v)
break}},
t8(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Q()
v=B.K()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.p5
u=new B.aF(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c6(w,t,w+f,t))
u.E(new B.c6(w,t,w,t+f))
u.E(new B.c6(w,t,w-f,t))
u.E(new B.c6(w,t,w,s))
u.E(new B.bv())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t8(d,new B.o(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aVs(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.aw],w),B.a([A.iq,A.bD],w),B.a([A.eE,A.aH],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bh(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ks(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.sav(new B.a9(A.a6,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.rX(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bw
a1=B.ks(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.P)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.Q()
a6=new B.ao(A.O,A.M,A.R,A.S,A.P)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.Q()
b6=new B.ao(A.O,A.M,A.R,A.S,A.P)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bw
b6.a=A.p5
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t8(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLF(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.Q(),d=B.K()
d.sav(new B.a9(A.aA,A.aF,A.x,D.doe,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.RC[A.o.D(A.i.bh(C.cY(u,7)*5),0,4)]
J.bp(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.Q()
t=new B.ao(A.O,A.M,A.R,A.S,A.P)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.I,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bNi(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.Q()
o=B.a([],s)
n=new B.aF(p.r,A.ai,a4,a4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.sav(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.bji],v),a4,a4).aK(0,B.bY(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.Q().r,A.ai,a4,a4,B.a([],s))
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
j.E(new B.bv())
i=A.i.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a9(A.b7,A.ba,A.x,D.dmT,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eI4,D.eBc,D.eRQ],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.P)
h.r=A.i5.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xJ(j),u=B.a([],x.X),p=new B.ru(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jG(y.M));--h
p.iz()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a2.b=A.a9
a2.c=m
a2.e=A.dP
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BR(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.t8(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bGa(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f3x,D.f3f,D.f38,D.f4w]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.Q()
j=B.a([],q)
i=new B.aF(o.r,A.ai,null,null,j)
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
i.ab()}}$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p5
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p5
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.w9.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p5
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJy(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.Q(),e=B.K()
e.sav(new B.c0(A.A,0.5,A.x,n,0,B.a([A.i3.j(0.25+0.1*j),D.Zp],x.O),n,n).aK(0,B.bY(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aF(g.r,A.ai,n,n,f)
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
u.ab()}g=$.Q()
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.b=A.a9
f.c=j
f.r=D.RC[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t8(d,new B.o(s,p),o*2.4,A.bN,A.i.D(p/i,0,1))
continue}$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u7.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPw(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lf,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bp(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.Q()
g=B.a([],q)
f=new B.aF(h.r,A.ai,a6,a6,g)
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
a2=new B.bv()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.sav(new B.a9(A.aA,A.aF,A.x,D.dij,a6,a6).aK(0,B.bs(A.I,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t8(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBI(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.Q()
o=B.a([],v)
n=new B.aF(p.r,A.ai,null,null,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.P)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.i.bh(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bxf.aA(0,k)*(0.5+0.5*C.cY(t,u)))
this.t8(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.RC[A.o.D(A.i.bh(C.cY(t,4)*5),0,4)],r)}},
bGo(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAf[A.o.F(p,6)]
i=$.Q()
h=B.a([],t)
g=new B.aF(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.c0(D.b20,0.9,A.x,a1,0,B.a([A.c,j,e],u),X.aA5,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aF(h.r,A.ai,a1,a1,m)
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
i=new B.bv()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bp(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.I,t,u)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=D.aAf[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUS(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f3F,D.f3l,D.f3r],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bY(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eL,i)
f.toString
e=C.cY(k,3)
$.Q()
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p5
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.Q()
a8=B.K()
a8.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.u7.j(0.55),D.aj9],t),a3,a3).aK(0,B.bY(a9,a7)))
b0.N(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.ks(a2,a2.a5(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.ks(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.rX(a2,a4)))
a7.c=a6*0.005
a7.d=A.bw
b0.ah(a5,a4,a7)}},
csB(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.Q()
o=B.a([],t)
n=new B.aF(p.r,A.ai,b4,b4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.sav(new B.c0(A.A,0.5,A.x,b4,0,B.a([A.u7.j(0.28),D.aj9],w),b4,b4).aK(0,B.bY(new B.o(r,v),u)))
p.a=A.p5
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.ek:A.er)
a8=$.Q()
a9=B.a([],t)
n=new B.aF(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c6(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bv()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.P)
a8.sav(new B.a9(A.a6,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.P)
b0.r=A.i3.gp(0)
b0.c=o
b0.d=A.bw
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aF($.Q().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bv())
v=B.K()
v.sav(D.c7S.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t8(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bL3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.i.D(n,0.12,1))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.sav(new B.a9(A.aA,A.aF,A.x,o>0?D.dyT:D.cOk,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.btT.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t8(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c47(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.Q()
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.sav(new B.c0(A.A,0.5,A.x,e,0,B.a([Ar.yj.j(0.45*l),D.ahI],v),e,e).aK(0,B.bY(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
i=B.a([],r)
h=new B.aF(j.r,A.ai,e,e,i)
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
k=new B.bv()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
j=B.ar(D.bjx,A.c,0.2*l)
j.toString
k.sav(new B.a9(A.b7,A.ba,A.x,B.a([D.boU,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1D(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bp(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.Q()
l=B.a([],t)
i=new B.aF(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kR(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kR(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bv()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d8u[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.c0(A.tM,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a5_,d).aK(0,B.bY(A.I,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.iq,130)},
cnF(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bp(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.Q()
m=B.a([],u)
k=new B.aF(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c6(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c6(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bv()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
m=(q&1)===0?D.cIs:D.djH
n.sav(new B.a9(A.a6,A.aa,A.x,m,h,h).aK(0,B.bY(A.I,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bIw(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bp(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bp(v.save())
v.scale(a2*n,1)
a3=$.Q()
a4=B.a([],u)
a5=new B.aF(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kR(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kR(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bv()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3.sav(new B.a9(A.a6,A.aa,A.x,h?D.djp:D.dmm,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BR.gp(0)
b1.af(a5,a3)
v.restore()}$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=D.bt7.gp(0)
p.c=q*0.1
p.d=A.bw
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c8c(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.b=A.a9
r.c=v
r.r=D.aBp[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bl(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aBp[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bl(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adI,q)
d.am(k,l)}},
bPH(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o6,A.dl][A.o.F(q,4)]
k=C.cY(q,3)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=l.j(0.75).gp(0)
j.a=A.p5
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.Q()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.dc.gp(0)
a2.N(v,u,t)
t=a2.c
J.bp(t.save())
a0=new B.aF(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jP(B.bY(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.r=B.ar(A.bq,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t8(a2,v.a5(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDo(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.i.D(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.Q()
r=B.a([],v)
q=new B.aF(s.r,A.ai,k,k,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.Q()
f=B.K()
f.sav(new B.c0(A.A,0.5,A.x,k,0,B.a([D.beP.j(0.6),D.ahI],x.O),k,k).aK(0,B.bY(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.eyC.aK(0,B.bY(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i5,180)},
cmJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.Q()
r=B.a([],u)
q=new B.aF(s.r,A.ai,h,h,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.Q()
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=B.ar(A.cy,A.ji,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.P)
u.sav(new B.c0(Ao.B7,0.5,A.x,h,0,D.dpX,h,h).aK(0,B.bY(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cBp(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bw
J.bp(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eE,200)},
c4d(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cL(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bp(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.sav(D.c7F.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.Q()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bjR.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t8(a3,w.a5(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cv6(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i3,A.i5],a4),B.a([A.pc,A.iq],a4),B.a([A.aE,A.eL],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bP<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.Q()
l=B.a([],p)
k=new B.aF(m.r,A.ai,null,null,l)
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.dt(j,t),m=new B.bP(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bv()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.Q()
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
l=a5[n]
i=l[0]
m.sav(new B.a9(A.a6,A.aa,A.x,B.a([i,l[1],i],a4),As.zN,new B.mI(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3W(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.i.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.i.bh(g/s),5)
a1=g+s
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3=Math.abs(a0)
a2.r=D.a53[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.r=D.a53[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t8(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a53[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cH7(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.c6(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.c6(u,r,u,a2))
m.E(new B.bv())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a9(A.a6,A.aa,A.x,D.dsG,A.aAn,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.t8(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLG(a4,a5,a6,60)},
bLG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bp(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.I,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.r=D.RC[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cz8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.i.F(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.i.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.bN],s),null,null).aK(0,B.rX(j,l)))
k.c=r
k.d=A.bw
d.ah(j,l,k)
this.t8(d,l,q,A.c,1-n)}},
bGK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.i.F(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
m=A.o.F(s,5)
n.r=D.aDb[m].j(o).gp(0)
n.a=A.p5
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDb[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
ckk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bp(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.i5.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.i3.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bU5(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.i.F(a6+C.cY(o,2)*4,4)/4
j=A.e7.aA(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dgh[A.o.F(o,5)]
J.bp(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.sav(new B.a9(A.b7,A.ba,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.i3.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i5,280)},
c7V(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bY(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.b=A.a9
j.c=u
j.r=D.azr[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.azr[A.o.F(h,4)]
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=d.gp(0)
J.bp(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c6k(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.o(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bp(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.Q()
a0=B.a([],s)
a1=new B.aF(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c6(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c6(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.b=A.a9
d.c=u
d.r=B.ar(A.bN,A.o6,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.r=A.i5.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.Q()
a5=B.K()
a5.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.i3.j(0.25),D.Zp],x.O),a3,a3).aK(0,B.bY(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cBw(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.r=A.bq.gp(0)
g.c=q
g.d=A.bw
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.sav(new B.c0(A.A,0.5,A.x,null,0,B.a([A.i5,A.i3.j(0.6),D.Zp],o),null,null).aK(0,B.bY(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.i.F(b3+C.cY(f,2)*e,e)/e
a0=A.i.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.P)
a7.r=B.ar(A.i5,A.aw,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bw
a7.a=A.p5
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bKk(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVs(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.sav(D.c8A.aK(0,k))
a7.ar(k,j)
i=A.i.bh(n/r)
h=A.i.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.Q()
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.r=A.bN.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b1c.prototype={
B(d){var w,v=null,u=new C.cfz(),t=new C.cfB(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.as8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfA(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ih[w]))
return B.bV(A.bG,s,A.bs,v,12,10)}}
C.a_y.prototype={
S(){return new C.aBD()}}
C.aBD.prototype={
gwf(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1X(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aQ),$.aw())}return v},
gazz(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNr()
v=$.aw()
u.f!==$&&B.bF()
t=u.f=new B.au(new B.ba(w,A.b6,A.aQ),v)}return t},
t(){var w=this.gb1X(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazz()
w.T$=v
w.P$=0
this.a3()},
a05(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a05=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CH(90,700,700,A.eO),$async$a05)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a05)
case 8:p=e
o=q.b.toLowerCase()
n=J.aj5(o,".png")?"image/png":"image/jpeg"
r.m(new C.dik(r,n,p))
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
return B.i($async$a05,v)},
b1W(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.m(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ai5(p.gwf().a)
if(n==null)n=A.d.gH(D.Ih)
w=p.gwf()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Ok(p.gwf(),!1,!0,new B.bJ(w.a+v,x.W)),0,0,0),B.ap(o,B.ID(A.n6,new C.dip(d),B.nZ(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.ID(A.ar0,new C.diq(p),B.nZ(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVE,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1X(0),o,o,o,o,o,2,p.b1W("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dir(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.fY,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i3.j(0.6),A.r,1)
if(p.gwf().d.length===0)q=D.bW5
else{q=C.hw5(p.gwf().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fR(q,A.A,o,o,A.cj,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gce8(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwf().d.length!==0)r.push(B.aG(o,o,o,o,H.Q3,o,o,o,new C.dis(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.l,o,A.e,A.j,0,o,o),A.U,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazz(),o,o,o,o,o,2,p.b1W("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dit(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dg(D.bUY,o,D.fZK,new C.diu(p,d),B.bo(A.aC,o,o,o,A.w,o,A.cp,o,new B.b9(B.m(14),A.a1),o,o,o))],u),A.al,o,A.e,A.Q,0,A.p),A.f,o,o,D.b7j,o,o,o,o,A.GO,o,o,o)],u),A.l,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a_T.prototype={
S(){return new C.bio(new B.au(A.ax,$.aw()))}}
C.bio.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.S(d).ax.a===A.J,m=n?A.c:A.T,l=n?A.aS:A.an,k=B.aI(d,A.c1,x.w).w,j=n?A.T:A.c,i=B.m(28),h=B.L(n?A.by:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.dp8(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d_5[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pS,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dp9(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hG,u,o),new B.CY(A.bG,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.U)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aWE,o,new C.dpa(this),o)],g),A.l,o,A.e,A.j,0,o,o))
e.push(A.U)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dq(1,A.cr,B.cd(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.uu,A.a0n,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhJ.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e1()
a1.cY(this.c)
w=this.b
v=w/6.283185307179586
$.Q()
u=B.K()
u.y=A.H5
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.az(4))+o)
i=A.i.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.o(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.i.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bhq.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bl(new B.a1(0,0,0+a3.a,0+a3.b),A.jK),e=this.b,d=Math.sin(e*2),a0=$.Q(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mh
a2.am(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.j8(f))
v=new B.TO(new B.ru(B.xJ(a0),!1,B.a([],x.X))).gH(0)
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
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.i.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.b=A.a9
k.d=A.bw
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iz()
h=u[d].De(o).a
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=w.gp(0)
l.y=Ac.or
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bqv.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e1()
f.cY(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gaoc()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.Q()
j=B.a([],o)
i=new B.aF(k.r,A.ai,g,g,j)
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
k=new B.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alD(u,t,j,g,A.x,g,g,0))
k.y=A.kW
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bce.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e1()
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
g=f}$.Q()
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bbS.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e1()
e.cY(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.Q()
i=B.a([],o)
h=new B.aF(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.b=A.a9
j.c=s
j.d=A.bw
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxC.prototype={
a4(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Q()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.c0(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d7c,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kW
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.buA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bh(f)*7,q=0;q<7;++q){p=new B.e1()
p.cY(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=k.gp(0)
j.c=1.4
j.d=A.bw
d.ah(new B.o(o-l,n),new B.o(o+l,n+0),j)
i=l*1.4
d.ah(new B.o(o,n-i),new B.o(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=-l*0.45
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btI.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.Q()
v=B.K()
v.a=A.p5
v.sav(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.bgL.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.Q()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bw
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uA
r=new C.di1(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.yb.prototype={}
C.JE.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asN.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vd.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mS.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.ibd(v.z))
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
C.m0.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.cl6(),m),m.k("ak.E"))
return C.rV(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.cl7(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbdo(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gTb(){if(!C.kM(this.w))return!1
var w=this.gbdo()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bT())},
hR(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("N<1,m0>")
r=B.C(new B.N(r,new C.ckW(),q),q.k("ak.E"))
return C.Co(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.U(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.ckX(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jY.prototype={}
C.b3l.prototype={
B(d){return B.ct(new C.cl1(this))}}
C.apP.prototype={
S(){return new C.blF(null,null)}}
C.blF.prototype={
gb1Y(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fA,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gb1Y().t()
this.bz6()},
B(d){return B.c9(this.gb1Y(),new C.dQF(),this.a.c)}}
C.aN7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aew.prototype={
QG(d,e,f,g){return this.bTJ(d,e,f,g)},
bTJ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QG)
case 3:s=i
if(d.e==null){w=1
break}B.a7(d,!1).O(null)
t=d.M(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.el,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QG,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.di,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ay,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d8)
n.push(B.A(B.a([B.E(new C.aeN(A.hX,"Download",A.c4,new C.eCn(w,d),!0,v),1),A.au,B.E(new C.aeN(A.uP,"Share",A.bl,new C.eCo(w,d),!1,v),1),A.au,B.E(new C.aeN(A.hK,"Safari",A.b1,new C.eCp(w,d),!1,v),1)],m),A.l,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eCq(d),v,v))
return B.bm(!0,new B.D(A.qy,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(A.jl,v,t,u,s,v,A.n),v,v,v,v,A.GV,v,v,1/0)],m),A.l,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeN.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eJ(B.x(B.a([p,A.U,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.Q,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bH5,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3j.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arU(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.ce9().ame(1.35)
s=B.axq(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEG(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bl,h,h,h,h,2,D.c3m,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bJ("slide_tf_"+g.a,x.W),h,A.xe,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AD,A.ao,h,A.Vk,h,h)
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
w=n?t.cOZ(B.b0(g.Q).j(0.45),A.cH):t
p=g.as
l=m?1:h
k=m?A.eP:A.Ey
p=B.d(f,new B.bJ("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Vb:s
$.Q()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dP
j.r=A.as.gp(0)
j=i.cv9(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cv7(k,t,l?A.Vb:s)],x.p),h)}else w=i.cv8(p,t,g.k2?A.Vb:s,m)
v=new B.mK(w,new B.bJ("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c2k()
case 3:return i.cmI()
case 2:return B.b4(h,h,h,new C.b3g(g,h),A.fD)
case 5:g=g.r
return new C.b3i(g,!i.e&&i.z==null,h)}},
ce9(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k3
j=A.cH
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahG,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.I,6*v),new B.cU(l,A.I,16*v),new B.cU(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bh
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.ne
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bD,new B.o(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.o(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.bb,new B.o(-3*v,0),0),new B.cU(A.av,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cF,A.I,8*v),new B.cU(A.av,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A9.xX
break
case"ice":v=o.d
e=B.a([new B.cU(A.aH,A.I,10*v),new B.cU(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eE
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k3
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d9j[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Q()
f=B.K()
v=o.d
f.sav(D.c63.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.Mb,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Q()
f=B.K()
v=o.d
f.sav(D.c6n.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.I,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cC
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k3
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBA(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.faA.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cl_(h)
v=r.k2?C.io8(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eP:A.Ey
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Z1(B.cP(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cv9(d,e,f,g){return this.aBA(d,e,f,!1,g)},
cv7(d,e,f){return this.aBA(d,e,f,!1,null)},
cv8(d,e,f,g){return this.aBA(d,e,f,g,null)},
bEG(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a6}},
c2k(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bM
return B.at(B.X(s.b===D.lu?A.HT:A.Cy,A.aD,t,t,t,32),t,t,t)}w=u.bHK(r)
if(s.b===D.lu){s=B.m(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cu,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQD(r,!0)
return C.fPe(s.go,v,s.id)}return w},
aQD(d,e){var w,v,u,t
try{w=C.iot(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.ct(new C.ckZ(this,w,v,e))
return u}catch(t){return D.af6}},
bHK(d){return this.aQD(d,!1)},
cmI(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcJ
return C.ioL(v,w.db,w.dx)}}
C.b3g.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
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
case 2:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
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
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ai,i,i,f)
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
r.ab()}}r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break}},
aD(d){return d.b!==this.b}}
C.aKE.prototype={
S(){return new C.bx6(null,null)}}
C.bx6.prototype={
Y(){var w,v=this
v.a2()
w=B.bn(null,A.hF,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBl()},
aQO(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.di,w,w,w),w,w,w),new B.p(w,w,w,u,w,new B.a9(A.a6,A.aa,A.x,v,w,w),A.n),A.bj)},
bEU(){var w,v=this,u=null,t=v.aQO("Slide A",A.bl),s=v.aQO("Slide B",A.b1)
if(v.a.c===D.ct)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.fgZ(v,s,t),u)},
B(d){return this.bEU()}}
C.aLl.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wd.prototype={
S(){return new C.blR(null,null)}}
C.blR.prototype={
Y(){var w,v,u=this
u.a2()
w=B.bn(null,A.C5,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ct){w.sp(0,1)
return}B.bQ(B.dp(0,0,0,v.c.fr+v.f*120,0,0),new C.e1f(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ct)w.sp(0,1)
else B.bQ(B.dp(0,0,0,v.c.fr+v.f*120,0,0),new C.e1e(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzl()},
B(d){var w,v=this.a
if(v.c.dy===D.ct||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e1d(this),v.d)}}
C.JD.prototype={
B(d){return B.ct(new C.ckS(this))}}
C.aBi.prototype={
S(){return new C.bgb()}}
C.bgb.prototype={
Y(){this.a2()
if(this.a.c!==D.ct)B.bQ(A.NN,new C.dfe(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ct)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wd(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bk,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.cc,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bJ("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bk,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.Wd(t,B.q(p,D.fKP,A.f,p,p,new B.p(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jo,p,p,1/0),!0,1,new B.bJ("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7T,A.bj)}}
C.a8P.prototype={
S(){return new C.bmx(null,null)}}
C.bmx.prototype={
gb2z(){var w=this.a
if(w.e)w=D.faN.q(0,w.c)||D.aSJ.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a2()
if(v.gb2z()){w=C.imM(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dp(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzR()},
B(d){var w,v=this,u=v.d
if(!v.gb2z()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.epK(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1f.prototype={
B(d){var w=null
return B.at(C.b3k(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bk,4280172719,2,"Aa",0,0,this.c,D.ct,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bho.prototype={
ju(d){return C.a3G(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3G(k,l),i=e.gdA(),h=new C.f5U()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUg.aK(0,l))
d.af(j,w)
k=C.a3G(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btD.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fl4.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hw(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.fl2.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3G(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bb.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pd.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.fkY.aK(0,l))
d.af(j,w)
w=C.a3G(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgA.gp(0)
d.af(w,v)
k=C.a3G(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjA.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUg.aK(0,l))
d.af(j,k)
for(k=B.xJ(j),w=B.a([],x.X),k=new B.ru(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jG(y.M));--r
k.iz()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iz()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iz()
n=w[r].De(q*o/p).a
m=D.d6s[A.o.F(o,4)]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fl6.aK(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fl3.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3G(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.oa.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btF.prototype={
a4(d,e){d.Gr(C.a3G(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aNl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aNQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aP9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a97.prototype={}
C.OO.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGb(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUy(){return this.r},
gUz(){return this.w},
gMd(){return this.x}}
C.aGb.prototype={
Y(){var w,v=this
v.a2()
$.aW.c1$.push(v)
C.fUd()
$.hE7=new C.eIB(v)
w=B.bn(null,A.C2,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IZ()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P8(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IZ()}},
jm(d){if(d===A.B9||d===A.tO||d===A.tN||d===A.q_)this.uc()},
t(){var w,v,u,t=this
$.aW.hW(t)
w=t.at
if(w!=null)w.a1(0)
t.uc()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bA3()},
gacK(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPr(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adg(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTb())return!1
return!0},
ky(){return this.adg(null)},
akd(){var w=this.c
if(w==null)return
w.M(x.q).f.U(D.fjl)},
qP(){if(!this.ky())return!1
this.akd()
return!0},
at4(d){var w,v,u,t,s,r=this
if(r.adg(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hDe(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Aq(){return this.at4(null)},
IZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asP(k),$async$IZ)
case 3:j=e
w=4
return B.b(C.arm(k),$async$IZ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h9e(j,t.c5n())
w=t.gacK()?5:7
break
case 5:r=t.gPr()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1t(r),$async$IZ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eEZ())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c3(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eF_())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.ze(m==null?"":m)!=null)continue
C.fUp(n,s)
p=!0}t.m(new C.eF0(t,s))
if(p||s.length>J.ad(j))t.uc()
case 1:return B.h(u,v)}})
return B.i($async$IZ,v)},
c5n(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kM(w)&&w!==q}if(w)p.push(r)
return p},
ctB(d){var w,v=this,u=d.w
if(!C.kM(u)||u==="hati_kiapo_uongozi")return
v.abz(d)
w=A.d.bj(v.d,new C.eGz(d))
u=v.d
if(w>=0){u[w]=d.hR()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c3(u,0,d.hR())
v.db=!1},
cnE(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kM(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctB(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i4>")
s=B.C(new B.cM(new B.Y(s,new C.eGn(),w.k("Y<1>")),new C.eGo(),v),v.k("M.E"))
return s},
P8(d){return this.bU9(d)},
uc(){return this.P8(null)},
bU9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnE()
w=3
return B.b(C.X6(d==null?t.a.c:d,s),$async$P8)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at4(r)?4:5
break
case 4:w=6
return B.b(C.a8l(r),$async$P8)
case 6:q=r.x
p=A.a.i(q==null?t.gPr():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEm())
q=t.d
if(o>=0)q[o]=r.hR()
else A.d.c3(q,0,r.hR())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P8,v)},
pJ(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kM(u.w))===!0?A.h1:A.lJ
v.at=B.cy(w,new C.eHH(v))},
b1Z(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agi(u.hR(),v.f,v.r))
if(w.length>40)A.d.cB(w,0)
A.d.a8(v.ay)},
cHp(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agi(w.e.hR(),w.f,w.r))
w.m(new C.eIx(w,v.pop()))
w.pJ()},
csG(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agi(w.e.hR(),w.f,w.r))
w.m(new C.eGx(w,v.pop()))
w.pJ()},
oD(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIk(u))
if(w>=0){u.d[w]=u.e.hR()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yz(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ya(){var w,v,u,t
for(w=this.ch,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KL(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d4(new B.cM(new B.Y(w,new C.eIl(),v.k("Y<1>")),new C.eIm(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cW)continue
p=n.a
m=w.c4(0,p,new C.eIn(n))
s.c4(0,p,new C.eIo())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ii(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eDL(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPr()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c3(u.d,0,u.e.hR())}u.oD()
u.pJ()},
akz(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yz(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kM(v.w))===!0
if(u){C.imQ(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.imR(t,w.d+w.f*0.5)}}s.Ii()
s.oD()
s.pJ()
if(u&&s.c!=null)s.m(new C.eIy())},
cIx(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ii()
w.oD()
w.pJ()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqT(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ikS(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2z(v)
t=q.c2y(v)
s=B.b0(v.e)
r=v.f
return new C.jY(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hXB(o)},
c2z(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.D(A.o.ap(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.T},
c2y(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
agv(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacK()){w.c.M(x.q).f.U(D.fhX)
return}w.abz(d)
w.b3g(C.bER(d))
return}if(C.clK(v)){w.abz(d)
w.b3g(d)
return}w.m(new C.eFG(w,d))},
atC(){var w,v,u,t,s,r,q=this
q.a3e(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kM(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eDJ(q))
if(r&&q.c!=null){u.toString
q.Kh(u,s)}return}q.uc()
q.m(new C.eDK(q))},
b3f(d){this.abz(d)
this.a0I(d,!0)},
abz(d){if(!C.kM(d.w))return
C.fUp(d,this.d)},
a0I(d,e){return this.cjw(d,e)},
b3g(d){return this.a0I(d,!1)},
cjw(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bER(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPr():r)
t.dy.W(0,q.toLowerCase())
C.arn(t.a.c,q)}r=s}else r=d
w=C.clK(r.w)?3:4
break
case 3:w=5
return B.b(t.abA(r),$async$a0I)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eG2(l))
o=l.a.hR()
n=C.kM(o.w)&&C.io3(o)
t.m(new C.eG3(t,o,p))
if(n){m=A.d.bj(t.d,new C.eG4(o))
if(m>=0){t.d[m]=o.hR()
t.uc()}}if(!t.adg(l.a))t.ZK()
r=!1
if(t.c!=null)if(!t.adg(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at4(r)&&C.fQp(l.a)}else l=r
else l=r
if(l)t.c.M(x.q).f.U(D.fix)
case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
abA(d){return this.bS9(d)},
bS9(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.Aj),$async$abA)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lc(!1,r,s.c,s.d,null,A.Aj,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abA,v)},
or(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$or=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.clK(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cl9(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$or,v)},
agc(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFF(),s,null,!0,!0,x.H),$async$agc)
case 3:if(t.c==null){w=1
break}t.atC()
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
agb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFC(),s,null,!0,!0,x.H),$async$agb)
case 3:if(t.c==null){w=1
break}t.m(new C.eFD())
t.atC()
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
ZK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZK)
case 3:r=e
if(B.k2(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aB("Bool","ngmy_marriage_hint_seen",!0),$async$ZK)
case 4:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fgx)
case 1:return B.h(u,v)}})
return B.i($async$ZK,v)},
Kh(d,e){return this.cu0(d,e)},
cu0(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kh=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahG(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kh)
case 9:w=4
break
case 6:w=10
return B.b(C.ahH(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kh)
case 10:w=4
break
case 7:w=11
return B.b(C.ahI(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kh)
case 11:w=4
break
case 8:w=12
return B.b(C.ahJ(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kh)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kh,v)},
c4b(){var w,v,u,t,s=this
if(!s.gacK()){s.c.M(x.q).f.U(D.fgK)
return}w=s.gPr()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahF(u,t,v,new C.eEV(s),new C.eEW(s),w)},
agw(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dT,null,new C.eFM(u),s,!0,!0,!1,A.lV,!1,!1,x.N),$async$agw)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahJ(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahG(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahH(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahI(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c4b()
return B.h(null,v)}})
return B.i($async$agw,v)},
ciC(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1Z()
w=C.cD()
v=C.Co(t,t,t,t,D.DU,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eFN(u,v))},
aaX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itd(s),$async$aaX)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eDN())
t.da(new C.eDO(t,p,q,r))
s=t.c.M(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaX,v)},
aix(d,e,f,g){var w=null,v=g?A.dk:A.bO,u=B.L(g?A.aT:A.cu,A.r,1)
return B.hb(B.aA(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qP()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFY(),q),q.k("M.E"))}o=s!=null&&s.b===D.lU?B.a([s],x.u):p
if(o.length===0){t.c.M(x.q).f.U(D.fiI)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFZ(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0H)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
agN(){return this.cjv()},
cjv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.it_(s,t.f+1,o),$async$agN)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jz(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eG0(q))
t.da(new C.eG1(p,t,o,q,r))
t.c.M(x.q).f.U(D.fj6)
case 1:return B.h(u,v)}})
return B.i($async$agN,v)},
agU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()||!t.Aq()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGi(),q),q.k("M.E"))
if(p.length===0){t.c.M(x.q).f.U(D.fgi)
w=1
break}o=new B.N(p,new C.eGj(),B.U(p).k("N<1,F>")).f1(0,new C.eGk())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aQ),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eGl(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agU)
case 3:for(r=new B.dr(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eGm())
case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
agz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qP()){w=1
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
return B.b(C.hFn(s,new C.Fj(r,q,p,o==null?"":o)),$async$agz)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.da(new C.eFO(m,n))
s=t.c.M(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ai5(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
abt(){return this.bRr()},
bRr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itc(s,t.f+1,l),$async$abt)
case 3:r=e
q=$.hcX
$.hcX=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.da(new C.eE3())
t.c.M(x.q).f.U(D.fg9)
w=1
break}if(!q){s=r.CW
s=C.hE5(l,s==null?"":s,!1)}else s=!1
if(s){t.da(new C.eE4(t,l,r))
t.c.M(x.q).f.U(D.fjA)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jz(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eE5(p))
o=s.length
t.da(new C.eE6(m,t,l,p,r))
n=s.length-o
s=t.c.M(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abt,v)},
aT0(d,e){if(e){this.ahm()
return}this.ciC(d,!1)},
bMT(){return this.aT0(null,!1)},
ahm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eGs(t),r,!0,!0,!0,A.pK,!1,!1,x.N),$async$ahm)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGt(t,C.ikR(s).pW()))
case 1:return B.h(u,v)}})
return B.i($async$ahm,v)},
da(d){var w=this
if(w.qP())return
w.Ii()
w.b1Z()
w.m(d)
w.KL()
w.oD()
w.pJ()},
a9r(){this.da(new C.eCI(this,D.n9))},
aUv(){var w=this.gdB()
if(w==null)return
this.da(new C.eE1(this,w))},
aTB(){var w=this.e
if(w==null||w.r.length<=1)return
this.da(new C.eE_(this))},
b6a(d,e){if(this.e==null||d===e)return
this.da(new C.eGB(this,d,e))},
OE(d){return this.bOU(d)},
bOU(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPr():s)
w=5
return B.b(C.arl(t.a.c,r),$async$OE)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asR(s)
w=6
return B.b(C.b3o(t.a.c,s),$async$OE)
case 6:if(t.c==null){w=1
break}t.m(new C.eDW(t,d))
w=7
return B.b(t.uc(),$async$OE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OE,v)},
ctY(d,e){var w=this
if(d.z){w.akd()
return}w.m(new C.eGA(w,d,e))
w.pJ()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xz(d){return this.ch.c4(0,d.a,new C.eDM(d))},
avv(d){return this.CW.c4(0,d.a,new C.eEn())},
a3e(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yz(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.aq$.d.c
if(u!=null)u.js()},
b9I(){return this.a3e(!0)},
a3a(d){var w,v,u=this
if(u.qP())return
if(!u.Aq())return
w=u.Yz(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xz(w).sb1(0,"")}u.m(new C.eIi(u,d))
$.aW.x1$.push(new C.eIj(u,d,w))},
bag(d){var w=this
if(d.b===D.cW&&!w.ky()&&w.Aq()){w.a3a(d.a)
return}w.aC_(d.a)},
aC_(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yz(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eHI(r,s,d))
if(s||d==null){t=$.aW.aq$.d.c
if(t!=null)t.js()}},
aP5(){this.da(new C.eCJ(this))},
pr(d){return this.bDX(d)},
bDX(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$pr)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCG(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pr,v)},
WB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Ht(78,1920),$async$WB)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eCw(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WB,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.Dy(t.a.c),$async$Wv)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gau(s)){t.c.M(x.q).f.U(D.fk9)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eCt(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wv)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.da(new C.eCu(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
aut(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eDY(v))){w.c.M(x.q).f.U(D.fja)
return}if(w.w===v)w.a3e(!0)
w.da(new C.eDZ(w,v))},
bL9(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPO(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.da(new C.eDa(w,v,d,e,t,u))},
bFx(d){return this.aPO(d,null)},
a9H(d){return this.bFF(d)},
bFF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9V.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.or(),$async$a9H)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bFx(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPO(r.j(0.88),r)}w=1
break}t.da(new C.eDf(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9H,v)},
a9G(d){return this.bFD(d)},
bFD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kc()
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
return B.b(t.or(),$async$a9G)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eDd(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
bFn(d){var w=this.gdB()
if(w==null)return
this.da(new C.eD9(this,w,d))},
a0N(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.it8(r),$async$a0N)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oD()
t.m(new C.eGc(t,s))
w=4
return B.b(t.uc(),$async$a0N)
case 4:if(t.c!=null)t.agv(s)
case 1:return B.h(u,v)}})
return B.i($async$a0N,v)},
abk(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3e(!0)
t.oD()
s=t.c
s.toString
w=3
return B.b(C.Sb(s,q),$async$abk)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.M(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abk,v)},
E7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oD()
t=4
w=7
return B.b(C.aS_(m),$async$E7)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRq(o,q,m.b),$async$E7)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E7,v)},
FO(d,e){return this.cGN(d,e)},
cGN(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FO=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qP()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3e(!0)
t.oD()
s=h.a=t.e.hR()}else{r=A.d.bj(t.d,new C.eIr(d))
s=h.a=r>=0?t.d[r].hR():d.hR()}s=s.w
q=s==null
p=C.ilP(q?"":s)
o=C.hD0(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eIs(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czQ(n.length,o,s),$async$FO)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ilJ(h.a)
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
return B.b(t.czP(n,o),$async$FO)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fa(t.d,new C.eIt(s))
s=h.a.b
w=11
return B.b(t.czN(k.b,s),$async$FO)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hR()
case 5:j=C.ilO(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.M(x.q).f.U(D.fkl)
w=1
break}w=12
return B.b(t.czO(j.a,s,o,j.c),$async$FO)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eIu(h,t,i))
t.pJ()
case 1:return B.h(u,v)}})
return B.i($async$FO,v)},
czQ(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHY(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czP(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHX(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czN(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHR(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czO(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHT(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acO(){var w=null
return B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acP(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dv,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ex,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fvp,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aXQ(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VT,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXT(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nh,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.z8,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eER(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1t(d,e,f,g,h,i){return this.aXT(d,e,f,!1,g,h,i)},
awP(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.di,w,w,w),A.bH,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0L,w,w,w)},
aXS(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cp,w,new B.b9(B.m(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nX,w,w,w),w,new C.eEQ(d,f),v)},
aXR(d,e){return this.aXS(d,e,null)},
KC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pu(l,s.c,s.d),$async$KC)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aO("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eG(l,new C.eHJ());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.ab0(l.charCodeAt(0)==0?l:l,r.b),$async$KC)
case 4:l=t.a
w=5
return B.b(B.pt(l.c,l.d),$async$KC)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KC,v)},
IE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pu(q,s.c,s.d),$async$IE)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.ab0(A.Y.aw(r.aj(),null),r.b+".json"),$async$IE)
case 4:q=t.a
w=5
return B.b(B.pt(q.c,q.d),$async$IE)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
b9r(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oD()
u.uc()
w=u.c
w.toString
v=B.e9(new C.eIh(u,t),!1,null,x.z)
B.a7(w,!1).ca(v)},
HS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$HS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fUC(),$async$HS)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ioF(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.as,null,new C.eCB(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HS)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.da(new C.eCC(t,s))
w=1
break}if(p==="split")t.da(new C.eCD(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HS,v)},
NZ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}w=3
return B.b(t.or(),$async$NZ)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRZ(s,null,null),$async$NZ)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eCH(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NZ,v)},
b5X(d){var w=this.e
if(w==null||!C.kM(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRc(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRZ(s,t==null?null:B.b0(t),u)},
a9p(d){return this.bDO(d)},
bDO(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fkA)
w=1
break}w=3
return B.b(t.aRc(),$async$a9p)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eCy(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9p,v)},
ai5(d){return this.csJ(d)},
csJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fjI)
w=1
break}w=3
return B.b(t.aRc(),$async$ai5)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eGy(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai5,v)},
cfi(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFN()}},
cFN(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.da(new C.eIp(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1O(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.da(new C.eEU(this,r,u.d))},
c6G(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fRa(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c6H(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
if(!this.Aq())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fRa(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O6(d){return this.bG4(d)},
bG4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fiy)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arp(p),$async$O6)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.M(x.q).f.U(D.fjc)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8l(r)
w=1
break}t.m(new C.eDj(t,d,o))
t.oD()
$.aW.x1$.push(new C.eDk(t))
case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
Wz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$Wz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFx(),$async$Wz)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eCv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wz,v)},
OU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$OU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fUt(r),$async$OU)
case 4:q=e
if(q==null){w=1
break}t.da(new C.eEl(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OU,v)},
jk(d){this.da(new C.eCE(this,d))},
qE(d){return this.bFg(d)},
bFg(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qP()){w=1
break}m=!D.aSM.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.or(),$async$qE)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HS()
w=1
break A
case"sign_paper":t.NZ()
w=1
break A
case"hd_photo":t.Wz()
w=1
break A
case"sharpen":t.OU()
w=1
break A
case"print":t.E7()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.da(new C.eCN(s))
w=1
break A
case"text_box":t.aP5()
w=1
break A
case"picture":t.WB()
w=1
break A
case"present":t.b9r()
w=1
break A
case"new_slide":t.a9r()
w=1
break A
case"export_json":t.IE()
w=1
break A
case"outline_share":t.KC()
w=1
break A
case"flashcard_tool":t.vO(D.Jh)
w=1
break A
case"quiz_tool":t.vO(D.Ji)
w=1
break A
case"worksheet_tool":t.vO(D.Jj)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.da(new C.eCO(t,s))
w=1
break A
case"delete_el":t.aut()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eCP(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eD_(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.da(new C.eD2(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.da(new C.eD3(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.da(new C.eD4(s))
w=1
break A
case"grayscale":case"brighten":t.OU()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.da(new C.eD5(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.da(new C.eD6(s))
w=1
break A
case"rectangle":t.pr(D.bk)
w=1
break A
case"circle":t.pr(D.eZ)
w=1
break A
case"triangle":t.pr(D.kc)
w=1
break A
case"arrow":t.pr(D.DW)
w=1
break A
case"line":case"divider":t.pr(D.fJ)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eG(q,new C.eD7()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eD8(),B.U(n).k("Y<1>")).gI(0)}t.c.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jk(C.j5(A.K,!1,t.gqT().d.l(),A.aG,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.na,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jk(C.j5(A.K,!1,t.gqT().e.l(),A.aG,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.dm,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j5(A.bn,!0,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ve,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vd,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j5(A.K,!1,4279310375,A.aG,24,A.cH,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dm,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j5(A.bn,!1,4284773515,A.aG,14,A.bt,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.ve,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j5(A.e_,!1,4279310375,A.aG,14,A.bt,A.a8,0.08,C.cD(),C.bFz(),0,D.dm,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j5(A.e_,!1,4279310375,A.aG,13,A.bt,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dm,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.da(new C.eCQ(t))
w=1
break A
case"footer_bar":t.da(new C.eCR(t))
w=1
break A
case"highlight":t.da(new C.eCS(t))
w=1
break A
case"redact":t.da(new C.eCT(t))
w=1
break A
case"callout":t.da(new C.eCU(t))
w=1
break A
case"checkboxes":t.jk(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dm,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dm,0.8,0.1,0.18))
w=1
break A
case"memo":t.da(new C.eCV(t))
w=1
break A
case"letter":t.jk(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.82,C.cD(),C.bFz()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j5(A.bn,!1,4279310375,A.aG,22,A.bt,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ve,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dm,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dm,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Initials: ______",0,D.dm,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j5(A.K,!1,4278556265,A.aG,28,A.bt,A.u,0.12,C.cD(),"APPROVED",0,D.na,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j5(A.K,!1,4292617766,A.aG,28,A.bt,A.u,0.12,C.cD(),"DRAFT",0,D.dm,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j5(A.K,!1,871318596,A.aG,36,A.bt,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dm,0.8,0.1,0.42))
w=1
break A
case"sticky":t.da(new C.eCW(t))
w=1
break A
case"progress":t.da(new C.eCX(t))
w=1
break A
case"stars":t.jk(C.j5(A.K,!1,4279310375,A.aG,36,A.bt,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qY,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j5(A.K,!1,4279310375,A.aG,32,A.bt,A.V,0.14,C.cD(),"y = mx + b",0,D.dm,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j5(A.K,!1,4279310375,A.aG,18,A.bt,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vd,0.8,0.1,0.35))
w=1
break A
case"two_col":t.da(new C.eCY(t))
w=1
break A
case"compare":t.da(new C.eCZ(t))
w=1
break A
case"link_text":t.jk(C.j5(A.bn,!1,4280640491,A.ne,16,A.bt,A.a8,0.1,C.cD(),"https://example.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j5(A.bn,!1,4280640491,A.aG,18,A.bt,A.a8,0.1,C.cD(),"name@email.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.da(new C.eD0(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.da(new C.eD1(t,r))
w=1
break A
case"invoice":t.jk(C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFz()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j5(A.bn,!1,4279310375,A.aG,17,A.bt,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j5(A.bn,!1,4279310375,A.aG,15,A.bt,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dm,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qE,v)},
czh(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.faJ.q(0,this.z)},
czg(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bb9(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ct,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.by
u=B.L(u,A.r,o&&e?2:1)
t=C.iou(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PV,A.f,p,p,D.Fj,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aA(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRI(d){var w,v=null,u=this.kc()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Sv,new C.eEk(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.j,0,v,v)},
vO(d){return this.bDW(d)},
bDW(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSG.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.or(),$async$vO)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCF(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f92
w=h.e
if(w==null)return h.bHQ()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.S(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aI(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eQ,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.biX
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTb()}else j=!1
if(j)k.push(new C.a8Q(h.a.c,!1,h.e.gbdo(),h.gcff(),g))
else if(s&&h.e!=null&&!h.ky()&&C.clK(h.e.w)){j=h.a
k.push(new C.a8Q(j.c,j.d,g,h.gcgo(),g))}if(s)k.push(h.bRD(w,t,r))
if(s&&h.ky()){w=t?A.fR:A.kQ
j=B.m(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bXY,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fR,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.j,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yB,A.iu,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7E(t,r))
if(w&&h.ky())k.push(h.cGO(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c7z(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b8R(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b8R(t,!1),g))
i.push(B.E(new B.bM(A.b7,g,g,h.bJa(v,t,!s||p),g),1))
if(h.czh(r)&&u&&s&&!h.ky())i.push(h.cf1(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.j,0,A.p),1))
if(q&&!h.ky()&&h.czg(!1))j.push(new B.a6(240,g,h.bUy(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c7A(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHQ(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.S(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cea(A.bl,A.qF,new C.eDn(r),r.gciz(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOO(A.bl,A.hW,"Blank Presentation",new C.eDo(r)),1),A.au,B.E(r.aOO(A.b1,A.t2,"Class Template",new C.eDp(r)),1)],t),A.l,q,A.e,A.j,0,q,q)
u=B.a([u,A.bA,s,A.nd,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEJ(w))
else{t=new B.i2(t,B.U(t).k("i2<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eDq(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cd(u,q,q,new B.R(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPK(){this.m(new C.eE0(this))
var w=this.c
w.toString
if(B.aI(w,A.c1,x.w).w.a.a<900){w=$.aW.aq$.d.c
if(w!=null)w.js()}},
agO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.S(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eGb(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agO,v)},
Br(d,e){return this.czD(d,e)},
czD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Br=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.YV,!0,"Dismiss",j,new C.eHK(),new C.eHL(d,e),A.iH,!0,x.N),$async$Br)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.akd()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTb()){r.akd()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aS_(d),$async$Br)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRq(j,q,d.b),$async$Br)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FO(d,!1),$async$Br)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.YV,!0,"Dismiss",j,new C.eHM(),new C.eHN(d),A.a3,!0,x.y),$async$Br)
case 20:if(g===!0)r.OE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahQ("Rename presentation",d.b),$async$Br)
case 24:l=g
if(l!=null)r.ctY(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eHO(r,k))
r.pJ()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Br,v)},
b3U(d,e){var w=null
return B.bN(!1,D.fVm,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lM,w,w,w,w,w,A.kz,w,w))},
bEJ(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eCK(this,d),null)},
bNN(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eDP(),x.dv).bY(0,new C.eDQ()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.ali,this.aPo(v,e,new C.eDR(),f),null)},
aPo(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e3)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bv,n,n,n,10),A.r4],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c7(A.aL,A.e,A.Q,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bG(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n1,n,n,n))
A.d.v(l,u)}return B.ev(A.a6,B.A(l,A.l,n,A.e,A.Q,0,n,n),A.f,A.e2)},
bEH(d,e,f){return this.aPo(d,e,null,f)},
bNP(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dsY
else if(v==="hati_kuhoweya")w=D.ddn
else{if(v==="hati_kiapo_uongozi")v=D.d__
else v=C.kM(v)?D.d6P:A.S6
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eDU(this,f,d,e,w),null)},
c7A(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bM
w=k.Xz(i)
v=k.avv(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cb,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bN(!1,D.fQI,j,j,!0,j,j,j,new C.eFk(k),j,j)],t),A.l,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.m(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hd,B.c3(new B.D(A.eY,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bl,j,j,j,j,2,D.c34,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xe,j,j,j,j,j,j,!1,"\u2022",j,new C.eFl(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.T,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AD,A.ao,j,A.Vk,j,j),j),new B.p(r,j,p,q,o,j,A.n),A.bj),j),1)
q=B.m(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.ci(B.A(B.a([k.uF(G.OX,j,new C.eFm(k,i),d),k.uF(G.a1T,j,new C.eFn(k,i),d),k.uF(I.apJ,j,new C.eFo(k,i),d),k.uF(I.a2F,j,new C.eFp(k,i),d),k.uF(k.bEF(i.as),j,new C.eFq(k,i),d),k.uF(D.aqR,j,new C.eFr(k,i),d),k.uF(D.aqQ,j,new C.eFs(k,i),d)],t),A.l,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.i.L(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alr,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.de],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lN,j,j,j),j)],t),A.l,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7z(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bM
w=m.b
v=w===D.cW
u=B.m(18)
t=x.O
t=d?B.a([A.bp,A.T],t):B.a([A.c,A.aP],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7s(A.j4,"Edit",new C.eF5(o,m),d,!0))
if(w===D.lU)p.push(o.b7s(A.HN,"Shape & ring",new C.eF6(o),d,!0))
p.push(o.uF(A.D1,"Format",new C.eF7(o),d))
if(v)A.d.v(p,B.a([o.uF(G.OX,n,new C.eF8(o,m),d),o.uF(D.aqR,n,new C.eF9(o,m),d),o.uF(D.aqQ,n,new C.eFa(o,m),d)],q))
p.push(A.b3)
p.push(o.cxu(A.ei,n,o.gaTz(),d,!0))
p.push(o.uF(A.hI,"Done",new C.eFb(o),d))
return B.q(n,B.A(p,A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a9(A.a6,A.aa,A.x,t,n,n),A.n),n,n,n,A.Ca,A.lN,n,n,n)},
bEF(d){switch(d.a){case 2:return D.a2C
case 1:case 5:return D.a2E
default:return D.a2D}},
c8u(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e_
default:return A.bn}},
aBY(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.m(12)
u=B.m(12)
t=h?K.I6:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e3,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qw,B.aJ(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eJ(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.Q,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uF(d,e,f,g){return this.aBY(d,e,f,g,!1,!1)},
b7s(d,e,f,g,h){return this.aBY(d,e,f,g,h,!1)},
cxu(d,e,f,g,h){return this.aBY(d,e,f,g,!1,h)},
bRD(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bp,A.T],m):B.a([A.c,A.nq],m)
w=B.L(e?A.aM:A.nn,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3G(A.eN,"Back",p.gbKU(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.T,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.de,B.E(B.A(B.a([new B.dq(1,A.cr,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uk,o,A.e,A.j,0,A.d1,o),1)],q)
if(!p.ky()){u=p.a3G(A.pu,"Undo",p.ax.length===0?o:p.gcHo(),e)
A.d.v(r,B.a([u,p.a3G(D.bRm,"Redo",p.ay.length===0?o:p.gcsF(),e)],q))}r.push(p.a3G(A.z6,"PDF",new C.eEd(p),e))
r.push(p.a3G(A.hX,"Download as video",new C.eEe(p),e))
if(!p.ky())r.push(B.CB(o,o,B.X(A.ow,e?A.ab:A.bv,o,o,o,o),new C.eEf(p),A.I,new C.eEg(p),A.ag,"More",x.N))
r.push(A.de)
r.push(B.aJ(!1,A.a3,!0,o,B.aP(!1,B.m(14),!0,B.eJ(D.erH,o,new B.p(o,o,o,B.m(14),o,K.I6,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCN(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.l,o,A.e,A.j,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bBv,D.bGU,o,o,o)},
cGO(d){var w=this,v=null,u=B.m(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cq:A.aO,A.r,1)
return B.q(v,B.ci(B.A(B.a([w.j6(A.uS,"Print",new C.eIv(w),d),w.j6(A.z6,"Download PDF",new C.eIw(w),d),w.j6(A.qM,"Present",w.gaCN(),d)],x.p),A.l,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yB,G.an1,v,v,v)},
a3G(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.ds
else w=g?A.ab:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cf)},
c7E(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cq:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eFv(r,d),t),t.k("ak.E"))
t.push(new B.D(Z.amH,new B.ff(new C.eFw(r),q),q))
A.d.v(t,w?B.a([new B.D(T.wm,r.aix(A.kv,"Ending celebration",r.gciM(),d),q),new B.D(T.wm,r.aix(A.HN,"Logo ring & frame",r.gcjt(),d),q)],x.p):A.f6)
A.d.v(t,w?B.a([new B.D(T.wm,r.aix(A.ml,"Look and feel",r.gcju(),d),q),new B.D(T.wm,r.aix(A.pw,"Edit this slide's text",r.gck0(),d),q)],x.p):A.f6)
t.push(new B.D(T.wm,B.hb(B.aA(q,B.q(q,D.f8r,A.f,q,q,new B.p(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.lH.j(0.4),A.I,10)],x.V),D.asV,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eFx(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.A(t,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bHo,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.ci(r.cv5(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yB,q,q,q,q)},
cv5(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dm8[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwS(s),t.a,new C.eGU(u,e),a3,D.aSG.q(0,s)))}w.push(e.j6(A.lm,"Notes Slide",new C.eGV(e),a3))
w.push(e.lY(A.HM,"Quiz",new C.eGW(e),a3,!0))
w.push(e.lY(P.Hn,"Worksheet",new C.eH6(e),a3,!0))
w.push(e.lY(X.HQ,"Flashcard",new C.eHh(e),a3,!0))
w.push(e.lY(A.HO,"Lab Report",new C.eHs(e),a3,!0))
w.push(e.lY(A.qI,"Rubric",new C.eHz(e),a3,!0))
w.push(e.lY(A.pp,"Minutes",new C.eHA(e),a3,!0))
w.push(e.lY(A.nI,"Syllabus",new C.eHB(e),a3,!0))
w.push(e.lY(A.a3c,"Timeline",new C.eHC(e),a3,!0))
return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dnv[v]
w.push(e.lY(r.b,r.c,new C.eHD(e,r),a3,!D.aSM.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.j6(A.wK,a0,e.gaP4(),a3),e.j6(A.uO,"Picture",new C.eGX(e),a3),e.j6(A.zg,"Bio link",new C.eGY(e),a3),e.j6(A.a3b,"Table",new C.eGZ(e),a3),e.j6(A.PO,"Sticky",new C.eH_(e),a3),e.j6(A.t_,"Divider",new C.eH0(e),a3),e.j6(A.zp,"Header",new C.eH1(e),a3),e.lY(A4.rY,"Rectangle",new C.eH2(e),a3,!0),e.lY(A.pm,"Circle",new C.eH3(e),a3,!0),e.lY(A.a2s,"Triangle",new C.eH4(e),a3,!0),e.lY(A.jq,"Arrow",new C.eH5(e),a3,!0),e.lY(D.bPO,"Parallelogram",new C.eH7(e),a3,!0),e.lY(D.bSh,"Hexagon",new C.eH8(e),a3,!0),e.lY(A.t_,"Line",new C.eH9(e),a3,!0),e.lY(A.z6,"PDF",new C.eHa(e),a3,!0),e.lY(N.a3l,"Signature",new C.eHb(e),a3,!0),e.j6(A3.CN,"Quote",new C.eHc(e),a3),e.j6(D.a20,a1,new C.eHd(e),a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPX("Wide 16:9",D.DU,a3),e.aPX("Short 9:16",D.oN,a3),new B.D(A.fB,B.n1(D.bUs,d,D.fMV,d,new C.eHe(e),d,d,d,d),d)],u),A.l,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bL8("This slide",!e.Q,a3,new C.eHf(e)),A.bm,e.aSe("All slides",e.Q,a3,new C.eHg(e),!0)],u),A.l,d,A.e,A.j,0,d,d)
p=e.bL9()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bW:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5i,new C.eHi(e),n),n.k("ak.E"))
n=B.ci(B.A(n,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dov[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.ds:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fB,B.aA(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bG(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHj(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ci(B.A(l,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGP()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHk(e,a3),g),g.k("ak.E"))
return new B.a6(w.a.a-20,d,B.x(B.a([t,A.U,q,A.am,p,A.U,o,A.ay,n,A.U,m,A.ay,l,A.U,j,A.ay,B.ci(B.A(h,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4i(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aI(w,A.c1,x.w).w
u=new C.eGT(e)
t=new C.eHE(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Sv,f.dy,new C.eHl(e,u,f),A.b1)
A.d.v(p,B.a([o,A.ay,n,A.U,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ay],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Sv,q,new C.eHm(e,u),A.bl))
return new B.a6(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j6(A.lm,w,new C.eHn(e),a3),e.j6(A.uS,"Print deck",new C.eHo(e),a3),e.lY(D.aoP,"Export JSON",new C.eHp(e),a3,!0),e.j6(A.fV,"Duplicate Slide",e.gaUu(),a3),e.j6(A.ei,a2,e.gaTA(),a3),e.cB_(a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j6(D.a20,a1,new C.eHq(e),a3),e.j6(A.fV,"Duplicate",e.gaUu(),a3),e.j6(A.ei,a2,e.gaTA(),a3),e.j6(A.qM,"Present",e.gaCN(),a3),e.j6(A.D_,a0,e.gaP4(),a3),e.j6(A.CS,"Fit Text",new C.eHr(e),a3),e.j6(A.z6,"Download PDF",new C.eHt(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j6(A.jJ,"Transfer",new C.eHu(e),a3))
if(f!=null){w=B.a([A.ae,e.j6(G.OX,"Bold",new C.eHv(e,f),a3),e.j6(G.a1T,"Italic",new C.eHw(e,f),a3),e.j6(G.aoq,"Underline",new C.eHx(e,f),a3),e.j6(Af.OY,"Bullets",new C.eHy(e,f),a3),e.bUh(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRI(a3))
w.push(e.j6(D.bOv,"Delete",e.gaTz(),a3))
A.d.v(u,w)}return B.A(u,A.l,d,A.e,A.j,0,d,d)}},
aPX(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oN
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abr,t,t,t)],v)
if(w)A.d.v(u,B.a([A.de,D.bTD],v))
return new B.D(A.fB,B.jl(t,t,t,B.A(u,A.l,t,A.e,A.Q,0,t,t),t,new C.eDi(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cB_(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cu,A.r,1)
u=B.m(8)
t=B.X(A.Hl,d?A.aD:A.an,q,q,q,14)
s=B.aG(q,q,q,q,D.arT,q,q,q,new C.eI0(r,p),q,q,q,q,q,A.cf)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bo,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arK,q,q,q,new C.eI1(r,p),q,q,q,q,q,A.cf)],x.p),A.l,q,A.e,A.Q,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.H_,A.n0,q,q,q)},
cwS(d){switch(d.a){case 6:return X.HQ
case 7:return A.HM
case 8:return P.Hn
case 4:return A.zp
default:return A.lm}},
bUh(d,e){var w=null,v=B.L(e?A.aT:A.cu,A.r,1),u=B.m(8),t=B.aG(w,w,w,w,D.arT,w,w,w,new C.eEq(this,d),w,w,w,w,w,A.cf),s=A.i.L(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bo,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arK,w,w,w,new C.eEr(this,d),w,w,w,w,w,A.cf)],x.p),A.l,w,A.e,A.Q,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uz,A.n0,w,w,w)},
c4i(d){var w=null
return B.CB(B.E3(B.X(A6.a23,d?A.ab:A.bv,w,w,w,16),w,w,D.fSD,w,w,w),w,w,new C.eEY(),A.I,this.gbFm(),A.cm,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dk:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dl:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PV,A.f,w,w,D.Fj,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eJ(new B.D(A.hd,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.Q,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j6(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8R(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hN(t,new C.eIc(u,s,e,d),s.r.length,A.cm,t,w,new C.eId(e),!1)
s=d?A.as:A.bO
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cm,B.ID(E.as6,new C.eIe(u),B.nZ(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aTr,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.l,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJa(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oN?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bM(A.b7,v,v,new B.fF(w,B.aA(v,B.ct(new C.eDH(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eDI(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJc(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kM(a9.w))===!0,b1=b0&&C.fRa(b3),b2=b0&&b3.b===D.lu&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6H(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6G(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hg8(b3))o=a8
else if(p&&!a7.ky())o=a7.gcfh()
else o=a7.ky()?a8:new C.eDv(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iK
i=w&&C.hg8(b3)&&a7.Aq()?new C.eDw(a7,b3):a8
h=v&&b3.b===D.cW?new C.eDx(a7,b3):a8
g=u?new C.eDy(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.b8
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.lu?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Aq()
a3=b3.b===D.cW
a4=a3?a7.Xz(b3):a8
a5=a3?a7.avv(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eDz(a7,b3):a8
a3=v&&a3?new C.eDA(a7,b3):a8
a6=C.b3k(q,a4,a1,b3,a5,a2,a3,new C.eDB(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.aA(a8,B.q(a8,D.bWw,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDC(a7,b3,b4,b5),a8,a8,new C.eDD(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bXd,A.f,a8,a8,new B.p(A.dc,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1N(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bYR,A.f,a8,a8,new B.p(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDE(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.q(a8,D.h0P,A.f,a8,a8,new B.p(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lj,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDF(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bJ("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSe(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.L(e?A.bl:A.by,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.de,B.q(r,D.PV,A.f,r,r,D.Fj,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.q(r,B.A(t,A.l,r,A.e,A.Q,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bL8(d,e,f,g){return this.aSe(d,e,f,g,!1)},
cf1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aQ),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aP
t=f?A.xI:l
if(f)s=new B.bG(new B.ay(e?A.by:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tn,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3U(e,new C.eFz(m))],q),A.l,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bW:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(10),A.dq),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eFA(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVN(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bM
w=new C.eEE(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.dW:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.T,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3U(a3,a0.gbPJ())],p),A.l,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fNr,B.E(B.kV(a1,a1,a1,u,0.05,new C.eEF(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.h_b,B.E(B.kV(a1,a1,a1,t,0.05,new C.eEG(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fGU,B.E(B.kV(a1,a1,a1,96,10,new C.eEH(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
l=n===D.lU
if(l||n===D.lu||n===D.TQ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fTt,B.E(B.kV(a1,a1,a1,s,0,new C.eEI(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.h0w,B.E(B.kV(a1,a1,a1,r,0,new C.eEJ(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Di[j]
i.a=null
g=h.a
i.a=g
k.push(B.jl(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pR,a1,a1,a1),a1,new C.eEK(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bG,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Db[j]
f.a=null
g=e.a
f.a=g
h.push(B.jl(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pR,a1,a1,a1),a1,new C.eEL(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.U,l,A.am,k,A.U,i,A.am,B.bV(A.bG,h,A.bs,a1,6,6)],p))}o.push(A.U)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eEM(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bV(A.bG,l,A.bs,a1,6,6),A.af,B.hsB(new C.eEN(w,a2),D.cAF,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eEO(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bG,m,A.bs,a1,0,6)],p))}o.push(A.af)
o.push(B.dg(D.bYD,a1,D.fVy,new C.eEP(a0,a5),B.bo(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cd(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cq:A.c
p=a4?A.xI:a1
if(a4)o=new B.bG(new B.ay(a3?A.by:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tn,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GJ,a1,a1,a1)},
bUy(d){return this.aVN(d,!1,!1,null)},
cea(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eES(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fwj,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bH,A.cU,r.bEH(D.d43,d,B.S(v).ax.a===A.J)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aP(!1,q,!0,B.eJ(D.feT,q,new B.p(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.et,8)],p),D.at_,A.a7),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.l,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.S(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.bf1,D.bfu],v):B.a([A.c,A.kQ],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.p(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bV,q,q,q)},
aOO(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eCr(this,g,d,e,f),null)},
ahQ(d,e){return this.cqS(d,e)},
cqS(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aQ),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eGw(d,q),p,null,!0,!0,x.N),$async$ahQ)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahQ,v)},
QH(d){var w=d.bT()
return""+B.bL(w)+"/"+B.bU(w)+"/"+B.bC(w)}}
C.agi.prototype={}
C.aAF.prototype={
S(){return new C.beY(null,null)}}
C.beY.prototype={
gcDl(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bL(u)+"/"+B.bU(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a2()
w=B.bn(u,A.qt,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bzZ,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxZ()},
Jz(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hX(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bFH,B.c9(new B.h6(B.a([u,w],x.dS)),new C.daG(this),v),v),v,v,v)}}
C.bfc.prototype={
B(d){var w=null,v=B.m(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFY,B.aJ(!1,A.a3,!0,w,B.q(w,B.by(B.m(22),B.x(B.a([new B.D(D.bF8,B.x(B.a([B.q(w,D.bXj,A.f,w,w,new B.p(A.av.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fXK,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fxz,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.dY,D.bz1,B.A(B.a([B.E(B.bN(!1,D.fLA,w,w,!0,w,w,w,new C.db3(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nC,w,A.oS,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fR2,w,w,!0,w,w,w,new C.db4(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.nC,w,A.oS,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w)],t),A.l,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.XB,new B.p(A.as,w,u,v,D.d4s,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KF.prototype={
S(){return new C.beX()}}
C.beX.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.da(B.aA(o,B.vX(B.cT(o,B.A(B.a([r,A.au,new B.dq(1,A.cr,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eU:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.bc,A.Q,0,o,o),o,o,A.b4,new B.p(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nD,o,o,1/0),A.cw,A.j1,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.daB(p,d),new C.daC(p),new C.daD(p),new C.daE(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.Qx.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.eY,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ex,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nh,v,v,v),A.bH,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0K.prototype={
S(){return new C.aGe(D.dm,null,null)}}
C.aGe.prototype={
gZR(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bzy,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b9k(d){if(!this.a.c.ay)return
this.x=d
this.gZR().iB(0,0)},
Y(){var w,v=this
v.a2()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axw(D.flm)
C.ilm()
v.Sa()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZR().t()
v=w.z
if(v!=null)v.a1(0)
C.axw(D.fln)
C.ilp()
w.bA4()},
cGb(){B.jV()
this.m(new C.eJb())
var w=this.c.M(x.q).f
w.a5U()
if($.bmU)w.U(D.fid)},
Sa(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dp(0,0,0,0,0,A.o.D(C.hqN(u,w),1,120)),new C.eJ1(v))},
cFP(){var w,v=this
v.m(new C.eJa(v))
if(v.r)v.Sa()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXJ(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czJ(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJ2(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lK,new C.eJ3(w))},
azA(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eIY(u))
u.Sa()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXJ()){u.czJ()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eIZ(u,A.o.F(w+1,s)))
u.b9k(w)
u.Sa()}},
cpw(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJ_(v))
v.Sa()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJ0(v,w,t))
v.b9k(w)
v.Sa()}},
cBf(d){var w,v=this,u=v.e
if(u===D.ct){u=v.d
u===$&&B.c()
return new B.mK(d,new B.bJ(u,x.ac))}w=v.cBg(u)
u=v.d
u===$&&B.c()
return B.p7(new B.mK(d,new B.bJ(u,x.ac)),w,new C.eJ8(),A.b4,A.b4,new C.eJ9(v))},
cBg(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzV
case 16:return A.it
case 18:return A.mW
default:return A.md}},
cBe(d,e,f){var w,v,u,t=null,s=B.cJ(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.vn,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.U3,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.ij,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.tm,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.c9(s,new C.eJ4(s),e)
case 9:return B.c9(s,new C.eJ5(s),e)
case 10:return B.c9(s,new C.eJ6(s),e)
case 11:return B.c9(s,new C.eJ7(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.it(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jm(B.jH(e,new B.bg(s,new B.br(A.vn,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.bua(w,t))
case 15:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.U3,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.ds()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fx(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jm(new C.apP(B.c9(n.gZR(),new C.eJc(n,v,w),m),m),A.t,m)}else{t=B.t0(new C.JD(w,!0,!1,m))
l=B.b0(w.e)
u=n.cBf(B.e8(B.jm(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hqN(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oZ,m,m,m),A.bm,D.bZI],k),A.l,m,A.e,A.Q,0,m,m),A.f,m,m,new B.p(A.aU,m,m,l,m,m,A.n),m,m,m,m,A.hc,m,m,m)
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
l.push(B.bR(0,new C.Ok(new C.Fj(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oN?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jm(B.uY(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmU){r=B.ID(A.lp,new C.eJd(d),B.nZ(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.ID(B.X(n.r?Al.uR:A.hx,m,m,m,m,m),n.gcFO(),B.nZ(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fY,m,m,m),A.f,m,m,new B.p(A.aU,m,m,r,m,m,A.n),m,m,m,m,A.hc,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.q(A.lA,$.bmU?A.bM:s,A.f,m,m,m,m,64,m,m,D.bAF,m,m,150),A.y,!1,m,n.gcGa(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aA(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJe(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KL.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.amt,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7B,w,w,w,w,w,w,w,w)}}
C.bua.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjZ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.m(999)
break
case"rounded":w=B.m(18)
break
case"arch":w=D.b4m
break
default:w=B.m(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.m(999)
else{t=B.m(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wQ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b4,new B.p(s.f,r,u,w,r,r,A.n),A.h1,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a6(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjY.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dC2.h(0,p)
if(o==null)o=D.dnF
p=p==="none"
w=p?q:new B.a9(A.a6,A.aa,A.x,o,q,q)
p=p?A.d0.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ar4:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a7),q,52,q,q,A.eA,q,q,52)
return B.aA(q,new B.a6(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aM2.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aO2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzZ.prototype={}
C.aO3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3n.prototype={}
C.X7.prototype={
S(){return new C.aGc()},
bk5(d){return this.e.$1(d)}}
C.aGc.prototype={
gb7y(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabI(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7y()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQQ(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7y()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8Q(){return A.d.cF(this.gabI(),0,new C.eII())},
Y(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RL()},
RL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3Z(s.c,s.f),$async$RL)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eIE(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RL,v)},
JB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabI()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fUp(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pu(o,q.c,q.f),$async$JB)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.eIH(t,p),!1,null,x.H)
w=4
return B.b(B.a7(o,!1).ca(q),$async$JB)
case 4:q=t.a
w=5
return B.b(B.pt(q.c,q.f),$async$JB)
case 5:w=6
return B.b(t.RL(),$async$JB)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JB,v)},
S8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.eeH,!0,"NgmySlidesTransferScan",x.N),$async$S8)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eIF(t))
w=4
return B.b(C.aiw(s),$async$S8)
case 4:r=e
t.m(new C.eIG(t))
o=J.a5(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.M(x.q).f.U(D.fh2)
w=1
break}w=5
return B.b(t.a.bk5(r),$async$S8)
case 5:q=t.c
if(q==null){w=1
break}B.a7(q,!1).O(null)
q=t.c.M(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S8,v)},
JA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabI()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pu(s,r.c,r.f),$async$JA)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fUE(null,A.d.gH(n),s,t.a.f)}else q=C.fUE(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hf(q,"ngmy_slides_"+p,!1),$async$JA)
case 4:o=e
s=t.a
w=5
return B.b(B.pt(s.c,s.f),$async$JA)
case 5:w=6
return B.b(t.RL(),$async$JA)
case 6:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JA,v)},
a3R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eIJ(t))
w=3
return B.b(C.bFh(),$async$a3R)
case 3:s=e
t.m(new C.eIK(t))
if(s==null||J.cq(s)){w=1
break}w=4
return B.b(t.a.bk5(s),$async$a3R)
case 4:r=t.c
if(r==null){w=1
break}B.a7(r,!1).O(null)
r=t.c.M(x.q).f
q=J.a5(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3R,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.dh:A.bO,k=o.gabI().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eIN(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.T,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.x8],h),A.l,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.f_,24)],x.V)
u=B.ap(n,B.X(A.qF,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.q(n,D.c_g,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ex,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ay,D.bKO],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.feW,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gckc(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a3R,A.n),n,n,n,n,E.a0z,n,n,1/0),A.dY,o.azB(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_a(A.qM,m,new C.eIO(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_a(D.bPH,m,new C.eIP(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.azB(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.m(16)
s=B.L(m?A.by:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eIQ(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nd)
w.push(o.azB(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.asa(A.aH,k,!0,A.jI,m,o.r,o.gcee(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOP(A.jW,!0,A.jr,m,o.gcwr(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.j,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bDa(A.aY,k,A.hX,m,o.r,o.gceb(),"Download .json","Backup file"),1),A.au,B.E(o.aOP(A.aw,!0,AA.zo,m,o.gcII(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.j,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lQ,A.bl.j(0.9),n,n,n,18)
r=o.gaQQ()
q=o.gb8Q()
p=o.gb8Q()===1?"":"s"
A.d.v(w,B.a([A.bA,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bF,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ah.Ot,i,n),B.E(B.cd(w,n,n,D.bEg,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,V.XT,A.f,A.dO,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
ah0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.isp(s,t.d,t.e),$async$ah0)
case 2:return B.h(null,v)}})
return B.i($async$ah0,v)},
azB(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
b_a(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.by:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cA,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.q(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.T,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eJ(new B.D(A.bF,B.x(B.a([t,A.X,u,A.bH,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNO(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.as:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.by:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c_s,A.f,q,q,new B.p(q,q,q,B.m(12),q,new B.a9(A.a6,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.T,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.pm
if(p)r=A.bl
else r=e?A.aT:A.ds
return new B.D(A.cx,B.aJ(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bF,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eID(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asa(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.by:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.rV,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arE,A.f,s,s,D.b7n,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.T,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eJ(new B.D(E.a0c,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bH,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOP(d,e,f,g,h,i,j){return this.asa(d,e,!1,f,g,!1,h,i,j)},
bDa(d,e,f,g,h,i,j,k){return this.asa(d,e,!1,f,g,h,i,j,k)}}
C.X8.prototype={
S(){return new C.bmT()}}
C.bmT.prototype={
Y(){this.a2()
this.afN()},
afN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fUE(null,A.d.gH(m),k,r.a.f):C.fUE(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kM(A.d.gH(n).w))C.fUp(A.d.gH(r.a.d),D.dlo)
n=r.a
m=n.c
n=C.ioK(n.d)
w=7
return B.b(C.fUD(p,C.ioP(r.a.d),n,m,q),$async$afN)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eIR(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eIS(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.S(d).ax.a===A.J,h=i?A.dh:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eIT())
v=B.aG(j,j,j,j,B.X(A.eN,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eIU(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.T,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.x8],u),A.l,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.di,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.U,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a3R,A.n),j,j,j,j,E.a0z,j,j,1/0)
q=B.m(24)
s=B.L(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vs,A.K,j,j))
else if(k.d==null)r.push(D.erg)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fM4,A.am,B.aA(j,B.q(j,B.A(B.a([D.c1_,A.au,B.d(m,j,j,j,j,j,j,D.fxZ,j,j,j)],u),A.l,j,A.e,A.Q,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c5T,A.n),j,j,j,j,A2.amf,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eIV(k,d),j,j,j,j,j,j,!1,A.a4),A.U,D.fQz,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.L(A.by,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qa(j,j,!1,l,j,!0,!0,j,!1,D.bv5),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hk,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ah.Ot,v,j),B.E(B.ci(B.x(B.a([t,A.aR,B.q(j,B.x(r,A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c7O,A.n),j,j,j,j,A.uy,j,j,1/0)],u),A.l,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.amy,j,j,A.ah),1)],u),A.l,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aG9.prototype={
S(){return new C.aGa(new B.au(A.ax,$.aw()),B.k8(!0,null,!0,!0,null,null,!1))}}
C.aGa.prototype={
Y(){var w=this
w.a2()
w.e.aW(0,new C.eCl(w))
$.aW.x1$.push(new C.eCm(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a3()},
b20(){var w,v=this.c
v.toString
w=C.ze(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a7(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eQ,x.w).w,i=B.m(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vk,36),D.aeC],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bXn,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fJ3,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.j,0,A.p),A.f,k,k,D.b7O,k,k,k,k,A.yN,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.T
o=new B.aN(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.bz(1,A.bd,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.frg,k,k,k),k,k,A.b4,new B.p(s,k,new B.bG(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h1,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A.x9)
A.d.v(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.j,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c3N,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uS(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C6(5,k),new C.bxs()],x.aS),k,k,A.aUE,k,5,k,1,k,k,!1,"\u2022",k,new C.eCh(l),k,new C.eCi(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mA,k,k,k,k),0),0,0,0)],a1)
d=C.ze(w.a.a.toUpperCase())==null?k:l.gcef()
return B.at(new B.D(new B.R(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cS(Ae.LT,B.q(k,B.by(e,B.x(B.a([a0,new B.D(D.bEM,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.X,D.fHl,A.bA,new B.a6(1/0,50,B.bI(D.fYE,k,d,B.bo(A.bl,A.bp,A.an,k,A.c,k,k,k,new B.b9(B.m(16),A.a1),k,k,k)),k),A.am,B.bN(!1,A.nZ,k,k,!0,k,k,k,new C.eCj(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.j,0,A.p),k)],a1),A.l,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.p(A.dh,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxs.prototype={
oY(d,e){var w=e.a.toUpperCase()
return e.cPg(B.hg(A.bB,w.length),w)}}
C.asS.prototype={
S(){return new C.aGd(B.zV(A.NH,A.o4,A.v1))}}
C.aGd.prototype={
t(){this.d.t()
this.a3()},
b2_(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j_(w,d)},
abD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h2B(s),$async$abD)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b2_("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abD,v)},
ced(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.ioN(w[u])
if(t!=null){this.b2_(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wM,s,s,s,t.gbSg(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eE(B.a([r,B.aG(s,s,s,s,B.X(q?A.uL:Am.Ps,s,s,s,s,s),s,s,s,new C.eIX(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dh,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fZS,s,s,s,1,s,!0)
r=B.zU(t.d,A.c_,t.gcec())
w=B.m(28)
w=B.at(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.q(s,D.fNc,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jo,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxG.prototype={
B(d){var w=null,v=B.m(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.arj,A.f,w,w,D.b7x,w,56,w,w,w,w,w,56),A.aR,D.fZy,A.am,new B.k1(this.c,new C.fjC(),w,w,x.cI),A.aR,new B.k1(this.d,new C.fjD(),w,w,x.cl),A.af,D.fZw],x.p),A.l,w,A.e,A.Q,0,A.p),A.f,w,Ae.LT,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0F,D.bFp,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8Q.prototype={
S(){return new C.bmC(A.bE)},
gd1(){return this.c}}
C.bmC.prototype={
Y(){var w=this
w.a2()
if(w.a.d)return
w.a06()
w.d=B.dc(A.fA,new C.eqB(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a06(){return this.csM()},
csM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a06=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eqz(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clL(p.c),$async$a06)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.eqA(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a06,v)},
bUp(d){var w,v,u=d.a,t=A.o.ap(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ap(u,6e7)%60
v=A.o.ap(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.ap(w,6e7)<30&&A.o.ap(w,36e8)<999?A.av:A.c4
w=v.j(0.14)
u=B.m(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hl,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUp(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.j,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A_.alm,A.iu,r,r,1/0)}}
C.a9J.prototype={
nv(){var w,v,u,t=this
t.xV()
w=t.cx
v=t.c
w.bus(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qg(B.I(["/S",D.ev8,"/URI",new B.rW(B.XK(w.as),A.vo,!0)],x.N,u),u))}}
C.a9K.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b52.prototype={
bC9(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.etr],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSL(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k7(w,new C.cpF(),B.a4(w).k("k7<cj.E,G>")).f1(0,new C.cpG())},
aF6(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tY(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jr(d.a,d.b))
s.n(0,"/Border",B.tY(H.atn))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h4(t.gcSL()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qg(w,x.Y))}}
C.cpH.prototype={}
C.a49.prototype={}
C.ajr.prototype={}
C.aTe.prototype={
fW(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.MB(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjq(w)
u=x.N
t=x.Y
s=new C.cpH(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bC9(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qg(B.I(["/Type",D.ev6],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9J(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayv.prototype={}
C.aUI.prototype={
fW(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.ds()
u=s.a
v.ej(u.a,u.b,0,1)
u=d.b
u.it()
t=s.a
t.toString
u.LJ(t)
u.Tq(0)
u.pm(0,v)
w.fW(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(m0)","P(i4)","~()","P(eP)","P(oJ)","P(m0)","~(i4)","P(eP,eP)","KL(Z)","P(o8)","P(lu)","aB<P>()","G(G,i4)","a8<n,@>(i4)","ai<Ad>()","n(o8)","P(a96)","n(m0)","n(wv)","P(Fs)","G(i4,i4)","n(eP)","v(eP)","cL(eP)","v(hF)","~(hF)","eP(vd,F,F,F,F,G{fx:n,key:n,rotation:F})","eP(n,F,G)","G(oJ,oJ)","P(Ad)","P(n,ai<Ad>)","a8<n,@>(oJ)","o8()","ZQ(Z)","eP(n,F,F,F,F,F{align:ql,anim:hF,bullets:P,color:G?,delay:G,fx:n,key:n,style:Iw,weight:nW})","a28(Z)","eP(n,F,F,F,F{anim:hF,delay:G,fx:n,key:n})","aB<~>(oJ)","P(mO)","ZO(Z)","a1E(Z)","a1D(Z)","Qm(Z)","a00(Z)","eP(vd,F,F,F,F,G,n,n{anim:hF,delay:G,rotation:F,stroke:G,strokeWidth:F})","eP(n,F,F,F,F,F,n,n,G)","eP(F,F,n,G{size:F})","v(rK,F,F)","lu()","oJ(a8<@,@>)","~(v3)","Fs()","fi(eP)","v(jb)","a_y(Z)","~(Fj)","a_T(Z)","G(eP,eP)","eP(eP)","a8<n,@>(eP)","eP(a8<@,@>)","m0(m0)","a8<n,@>(m0)","m0(a8<@,@>)","P(jY)","jY()","n(i4)","~(ai<oJ>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","adP(Z,G)","~(P(eP,eP))","aet(Z)","ag8(Z,G)","u(m0,P)","WW(Z)","aew(Z)","WX(Z)","~(mS)","i4(i4)","F(eP)","a17(Z)","a0K(Z)","i4()","ai<FP>()","aB<~>(ai<i4>)","v(bB<G,i4>)","D(jY)","D(Fs)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(mp)","ai<jE<mS>>(Z)","jE<mS>(mS)","i4(a8<@,@>)","X7(Z)","eP(n,F,F,F,F,F,G{align:ql,style:Iw,weight:nW})","X8(Z)","v(i4)","~(mi)","JD(Z,m0,v?)","G(a9K)","aB<ai<a8<n,@>>?>()","n(n)","aB<Ac>({paper:n?,photo:dK?,request:n,template!lx})","aB<a8Z>({doc!Ac,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","aeq(Z)"])
C.cOU.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:61}
C.cOV.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cOW.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galE(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:69}
C.cOX.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTL.prototype={
$1(d){return J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)},
$S:1695}
C.fGK.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1696}
C.c3G.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:31}
C.c3H.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:41}
C.c3J.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fXE.prototype={
$1(d){return new C.a28(this.a,this.b,C.ipF(),null)},
$S:z+36}
C.fi4.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fi8.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fi9.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fia.prototype={
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
C.fi5.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fi6.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fi7.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fi_.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hj,w,w,w)
return B.eg(B.a([B.bN(!1,E.aWL,w,w,!0,w,w,w,new C.fhY(d),w,w),B.bN(!1,D.fKB,w,w,!0,w,w,w,new C.fhZ(d),w,w)],x.p),w,w,D.a_0,v,w,w,w,w,D.h_a,w)},
$S:18}
C.fhY.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.fhZ.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.fi0.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fi1.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fie.prototype={
$0(){var w=this.a
return w.m(new C.fid(w,this.b))},
$S:0}
C.fid.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fi3.prototype={
$0(){var w=this.a
return w.m(new C.fi2(w,this.b,this.c))},
$S:0}
C.fi2.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fib.prototype={
$0(){return this.a.a2e(this.b)},
$S:0}
C.fic.prototype={
$0(){return this.a.PL(0,this.b)},
$S:0}
C.fih.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fii.prototype={
$0(){var w=this.a
return w.m(new C.fig(w,this.b))},
$S:0}
C.fig.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fif(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fif.prototype={
$1(d){return d.a},
$S:z+67}
C.fpI.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hnZ(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oJ(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fpJ.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fJV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fJT.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fJU.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fX5.prototype={
$1(d){return d.aj()},
$S:z+32}
C.fGk.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fY_.prototype={
$1(d){return new C.ZQ(this.a,null)},
$S:z+34}
C.cQg.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cQi.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQl.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQk())},
$S:12}
C.cQk.prototype={
$0(){},
$S:0}
C.cQn.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a37(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cQj(r))
if(p<0)q.c3(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiF(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:332}
C.cQj.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQo.prototype={
$1(d){},
$S:32}
C.cQh.prototype={
$1(d){return new C.ZO(this.b,this.a.gcCG(),null)},
$S:z+40}
C.cQp.prototype={
$1(d){return D.hrW},
$S:z+43}
C.cQc.prototype={
$1(d){var w=null,v=B.m(24),u=B.L(D.Zy,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bFb,B.x(B.a([B.q(w,D.bUt,A.f,w,w,new B.p(A.av.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fJu,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fwT,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.qy,B.A(B.a([B.E(B.dU(D.fQB,new C.cQa(d),B.di(w,w,w,w,w,w,w,w,w,E.nx,w,w,A.cp,w,new B.b9(B.m(14),A.a1),D.b4O,w,w,w,w)),1),A.au,B.E(B.bI(D.fWT,w,new C.cQb(d),B.bo(A.bC,w,w,w,w,w,A.cp,w,new B.b9(B.m(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w),w)],t),A.l,w,A.e,A.Q,0,A.p),A.f,w,A.xL,new B.p(D.agq,w,u,v,D.d9g,w,A.n),w,w,w,K.a0F,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1697}
C.cQa.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.cQb.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.cQd.prototype={
$0(){return J.nQ(this.a.d,new C.cQ9(this.b))},
$S:0}
C.cQ9.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQ8.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.L(D.Zy,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZA,A.f,t,t,new B.p(t,t,t,B.m(14),t,D.asV,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWp,t,t,t),A.bH,D.fWO],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.l,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dx5[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azr(u[1],u[2],u[3],new C.cQ6(v,d),!1,t))}q.push(A.am)
q.push(D.bz4)
q.push(A.am)
q.push(new C.azr(A.ei,"Delete book","Remove it from this device",new C.cQ7(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.p(D.agq,t,r,s,t,t,A.n),t,t,t,A.uu,R.Of,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cQ6.prototype={
$0(){var w=this.a.a
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.cQ7.prototype={
$0(){B.a7(this.a,!1).O("delete")
return null},
$S:0}
C.cQf.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLH,12)],x.V)
return B.dP(B.eM(A.A,e,B.q(w,B.by(B.m(4),new B.a6(62,95.81818181818181,B.ev(A.A,F.apB(d),A.f,A.dB),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+48}
C.cQe.prototype={
$0(){return this.a.c8j()},
$S:0}
C.cQ5.prototype={
$0(){return this.a.b0o(0,this.b)},
$S:0}
C.cQ4.prototype={
$0(){return this.a.DN(this.b)},
$S:0}
C.cQ3.prototype={
$0(){return this.a.DN(this.b)},
$S:0}
C.cQq.prototype={
$2(d,e){var w=this.a
return w.bGL(J.t(w.d,e))},
$S:43}
C.cPx.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bm()},
$S:0}
C.cPw.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3y("Page "+(v.length+1),"",""))},
$S:0}
C.cPz.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPH.prototype={
$0(){},
$S:0}
C.cPI.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cPA.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aN(this.c)},
$S:0}
C.cPy.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPC.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPD.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPE.prototype={
$0(){var w=this.a
w.m(new C.cPB(this.b))
w.EB()},
$S:0}
C.cPB.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPF(w,d))
w.EB()},
$S:z+51}
C.cPF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPN.prototype={
$2(d,e){if(d)this.a.Bm()},
$S:128}
C.cPJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bm(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.M(x.q).f.U(D.fjC)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPK.prototype={
$0(){return this.a.b_h(this.b,-1)},
$S:0}
C.cPL.prototype={
$0(){return this.a.b_h(this.b,1)},
$S:0}
C.cPM.prototype={
$0(){return this.a.c9J(0,this.b)},
$S:0}
C.fOs.prototype={
$1(d){return C.hy7()},
$S:44}
C.fOt.prototype={
$1(d){return null},
$S:32}
C.fu3.prototype={
$1(d){return null},
$S:32}
C.fPr.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:304}
C.fPq.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:208}
C.fPx.prototype={
$1(d){var w=this.a
return C.hg_(d)===w||C.hCX(d)===w},
$S:z+4}
C.ft4.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.cfY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOq.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fOr.prototype={
$1(d){return C.fRa(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fJh.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fRd,A.U,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.HZ,w,D.fLd,new C.fJf(d),B.bo(A.c4,w,w,w,A.w,w,A.cp,w,w,w,w,w)),A.X,B.es(A.uW,D.fSw,new C.fJg(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJf.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJg.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJi.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,D.fHb,w,w,!0,w,w,w,new C.fJd(d),w,w),B.bI(D.fZb,w,new C.fJe(d),w)],x.p),w,w,w,D.h08,w,w,w,w,D.fH4,w)},
$S:18}
C.fJd.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.fJe.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.elS.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.elQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.elR.prototype={
$0(){return this.a.f=!0},
$S:0}
C.elT.prototype={
$0(){return this.a.r=!1},
$S:0}
C.elU.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fPw.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.fPs.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a6,w,w,B.BW(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1698}
C.fPu.prototype={
$1(d){var w=null,v=B.m(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fyd,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:139}
C.fPv.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.ir,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.ir,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.l,w,A.bc,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1699}
C.fPt.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiD:this.a,u=B.L(A.ir,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agG,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1700}
C.h0s.prototype={
$1(d){return new C.aeq(this.a,this.b,null)},
$S:z+108}
C.e8h.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvH:A.N7,q=B.L(D.jB.j(0.25),A.r,1),p=B.at(B.q(t,t,A.f,t,t,new B.p(A.c4.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.q(t,D.arD,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jB.j(0.35),A.et,10)],x.V),D.c8p,A.n),t,t,t,t,A.yC,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0v,B.x(B.a([p,A.aB,B.A(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jB,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fxp,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.l,t,A.e,A.j,0,t,t)],u),A.l,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTI,new C.e8g(w,this.c),v,D.am9,t,A.ah,!1),1)],u),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(r,t,q,A.mG,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.e8g.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adP(w,new C.e8f(this.b,w),null)},
$S:z+72}
C.e8f.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fJl.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fJm.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fUS,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.HZ,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJj(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oE,D.VZ,new C.fJk(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJj.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJk.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJp.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fJq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fIg,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.HZ,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJn(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oE,D.VZ,new C.fJo(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJn.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJo.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJt.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fJu.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fOZ,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.HZ,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJr(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oE,D.VZ,new C.fJs(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJr.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJs.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.h1V.prototype={
$1(d){return D.hx8},
$S:z+74}
C.eqE.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmd:A.N7,s=B.L(A.aC.j(0.25),A.r,1),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.q(v,D.c0X,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.et,10)],x.V),D.at_,A.n),v,v,v,v,A.yC,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0v,B.x(B.a([r,A.aB,B.A(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.N2,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bH,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fuO,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.l,v,A.e,A.j,0,v,v)],w),A.l,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTI,new C.eqD(this.b),19,D.am9,v,A.ah,!1),1)],w),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.mG,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eqD.prototype={
$2(d,e){var w=D.SM[e]
return new C.ag8(w,new C.eqC(this.a,w),null)},
$S:z+75}
C.eqC.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fRe.prototype={
$0(){return B.heV(C.icS(this.a))},
$S:334}
C.fRd.prototype={
$0(){var w=C.hgi(this.a)
return"data:image/png;base64,"+A.cP.gcu().aN(w)},
$S:22}
C.frl.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.js(d,e),new B.js(w,e+v),new B.js(d+f*14,e),new B.js(w,e-v)],x.J)
B.a33(this.a,C.fE(4291404327),v)},
$S:677}
C.h25.prototype={
$1(d){return new C.WW(this.a,null)},
$S:z+77}
C.etB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etA())},
$S:28}
C.etA.prototype={
$0(){},
$S:0}
C.etC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etz(w,d))},
$S:1702}
C.etz.prototype={
$0(){return this.a.x=J.eS(A.dN.gaU(this.b))},
$S:0}
C.etD.prototype={
$1(d){},
$S:32}
C.etd.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.et9.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etk.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etl.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eFR)},
$S:0}
C.etm.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etf.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.ce)},
$S:0}
C.etg.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eth.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.eti.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etj.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iI)}},
$S:7}
C.ete.prototype={
$0(){var w=this.a,v=w.z,u=C.fRS(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOp(C.fRS(t))},
$S:0}
C.etb.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.etc.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ets.prototype={
$0(){return B.a7(this.a,!1).hV()},
$S:0}
C.ett.prototype={
$0(){var w=this.a
return w.m(new C.etr(w))},
$S:0}
C.etr.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.etu.prototype={
$0(){var w=this.a
return w.m(new C.etq(w,this.b))},
$S:0}
C.etq.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.etv.prototype={
$1(d){var w=this.a
return w.m(new C.etp(w))},
$S:9}
C.etp.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.etw.prototype={
$1(d){var w=this.a
return w.m(new C.eto(w))},
$S:9}
C.eto.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.etx.prototype={
$0(){var w=this.a
return w.m(new C.etn(w,this.b))},
$S:0}
C.etn.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.ety.prototype={
$1(d){return this.a.a_T()},
$S:2}
C.eta.prototype={
$0(){return this.a.cdv(this.b)},
$S:0}
C.cjD.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:341}
C.cjB.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cjC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQP.prototype={
boJ(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTK(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKG($.rg().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boJ(d,e)},
$S:1703}
C.fP6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fP8.prototype={
$1(d){var w=this.a.a
w=A.d.aM(A.d.dq(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:76}
C.fP7.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cs,t,t,t,B.cP(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r7,A.bX,t,A.dz,A.bY)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:30}
C.fqV.prototype={
$1(d){var w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fqW(),B.U(w).k("Y<1>")).gI(0)},
$S:269}
C.fqW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqT.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.fqU.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.cjE.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCr()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hfZ(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcB(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aM(n.gclR(),"\n\n")
d=B.fq(a6,A.cs,a6,a6,a6,B.cP(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afC(k,q,1.28),j),A.r7,A.bX,a6,A.dz,A.bY)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hfZ(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcB(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afC(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bd,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r7,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCq(s,j))
i.push(new B.a6(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:403}
C.cjF.prototype={
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
n=o.gaCr()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hfZ(f,new B.H(!0,e,a5,i,a5,a5,h,A.cT,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hcB(g.length===0?B.a([a6],n):g,l))break}a1=o.afC(i,h,1.28)
a2=new C.cjG(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kn,new B.a6(v,a5,a4.f,a5),A.Kn,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHA,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bd,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r7,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCq(r,g))
f.push(new B.a6(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a6(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.l,a5,A.e,A.j,0,A.p)},
$S:147}
C.cjG.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r7,w,w),w)},
$S:678}
C.h28.prototype={
$1(d){return new C.WX(this.a,this.b,null)},
$S:z+79}
C.eun.prototype={
$1(d){return d.lb()},
$S:1705}
C.euo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eum(w,d))},
$S:1706}
C.eum.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.eua.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eub.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euh.prototype={
$0(){return B.a7(this.a,!1).eO()},
$S:0}
C.eui.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bD,A.r,2.5)
return B.aA(w,B.q(w,B.b4(w,w,w,new C.beb(u,v.gazt(),w),A.fD),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euf(v),new C.eug(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.euf.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:259}
C.eug.prototype={
$1(d){var w=this.a
w.m(new C.euc(w,d,this.b,this.c))},
$S:210}
C.euc.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazt()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euj.prototype={
$1(d){var w=this.a
return w.m(new C.eue(w,this.b))},
$S:9}
C.eue.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euk.prototype={
$1(d){var w=this.a
return w.m(new C.eud(w,d))},
$S:6}
C.eud.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eul.prototype={
$0(){return B.a7(this.b,!1).O(this.a.a.c)},
$S:0}
C.h2o.prototype={
$1(d){return D.hzW},
$S:z+83}
C.f3g.prototype={
$1(d){return this.a.Zu()},
$S:7}
C.f28.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aN(v)},
$S:0}
C.f2w.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f2G.prototype={
$1(d){return d>=this.a.length},
$S:30}
C.f1S.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1T.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1Q.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1R.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2p.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f2q(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jm(B.t0(q>0.2?F.bXa(r,new B.Eq(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jm(B.da(B.t0(F.bXa(s.$1(!0),new B.Eq(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(D.b2b,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bj))}s=t.aL
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(D.b1W,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bj))
s=t.aR
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.ba,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7P,v),A.n),A.bj))
if(t.aH>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.ba,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.djF,v),A.n),A.bj),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dgt,v),A.n),A.bj))
t=t.aG
if(t>0)q.push(B.b4(v,v,v,new C.bhN(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:65}
C.f2q.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZU(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bm
v=o.aP
u=v-1
t=o.bH
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eM(A.A,l,B.fx(A.A,new B.BI(new B.uN(q,q,n,A.xW),p,q),q,B.wi(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:481}
C.f2C.prototype={
$0(){return this.a.m(new C.f2B(this.b,this.c))},
$S:0}
C.f2B.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2D.prototype={
$1(d){return this.a.m(new C.f2A(this.b,d))},
$S:6}
C.f2A.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2F.prototype={
$0(){return this.a.m(new C.f2E(this.b,this.c))},
$S:0}
C.f2E.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1I.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f1J.prototype={
$1(d){var w=this.a
return w.m(w.gcE4())},
$S:2}
C.f1K.prototype={
$1(d){return this.a.m(new C.f1H())},
$S:2}
C.f1H.prototype={
$0(){},
$S:0}
C.f1L.prototype={
$0(){var w=this.a
return w.m(new C.f1G(w,this.b))},
$S:0}
C.f1G.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f1N.prototype={
$2(d,e){return A.au},
$S:37}
C.f1M.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.by
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b4,new B.p(w,w,q,s,w,new B.a9(A.b7,A.ba,A.x,r,w,w),A.n),A.h1,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a6(70,w,B.x(B.a([r,A.fL,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1F(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f1F.prototype={
$0(){var w=this.a
return w.m(new C.f1C(w,this.b))},
$S:0}
C.f1C.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1O.prototype={
$1(d){var w=this.a
return w.m(new C.f1E(w,d))},
$S:9}
C.f1E.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f1P.prototype={
$1(d){var w=this.a
return w.m(new C.f1D(w,d))},
$S:9}
C.f1D.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f35.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:30}
C.f3c.prototype={
$1(d){var w=this.a
return w.m(new C.f3d(w,d))},
$S:29}
C.f3d.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f3e.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:145}
C.f36.prototype={
$0(){var w=this.a
return w.m(new C.f34(w,this.b))},
$S:0}
C.f34.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f37.prototype={
$0(){var w=this.a
return w.m(new C.f33(w,this.b))},
$S:0}
C.f33.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f38.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f32(v,w.b,w.c,w.d))},
$S:0}
C.f32.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f39.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gte(v))},
$S:0}
C.f3a.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3b.prototype={
$0(){var w=this.a
return w.m(new C.f31(w))},
$S:0}
C.f31.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f2P.prototype={
$1(d){return d.a===this.a.dy},
$S:215}
C.f2Q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBc[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azx(new B.nr(new B.be(n,n,n,n),A.aq,new B.l5(new B.p(j,j,j,j,j,new B.a9(A.a6,A.aa,A.x,m,j,j),A.n),A.bj,new C.b1f(l,B.b0(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f2O(r,v),2,i))}return B.bV(A.bG,h,A.bs,j,7,7)},
$S:163}
C.f2O.prototype={
$0(){var w=this.b
return w.m(new C.f2J(this.a,w))},
$S:0}
C.f2J.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f2R.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:157}
C.f2U.prototype={
$0(){var w=this.a
return w.m(new C.f2N(w))},
$S:0}
C.f2N.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f2V.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f2W.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f2X.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f2Y.prototype={
$0(){var w=this.a
return w.m(new C.f2M(w))},
$S:0}
C.f2M.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f2Z.prototype={
$0(){var w=this.a
return w.m(new C.f2L(w))},
$S:0}
C.f2L.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f3_.prototype={
$0(){var w=this.b
return w.m(new C.f2K(this.a,w))},
$S:0}
C.f2K.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f30.prototype={
$1(d){return this.a.fx=d},
$S:157}
C.f2S.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f2T.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f2t.prototype={
$0(){var w=this.a
return w.m(new C.f2s(w))},
$S:0}
C.f2s.prototype={
$0(){var w=this.a
w.p4=null
w.b6f()},
$S:0}
C.f2u.prototype={
$0(){var w=this.a
return w.m(new C.f2r(w,this.b))},
$S:0}
C.f2r.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2v.prototype={
$0(){var w=this.a
return w.m(w.gcup())},
$S:0}
C.f2l.prototype={
$0(){var w=this.a
return w.m(new C.f2k(w))},
$S:0}
C.f2k.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f2m.prototype={
$0(){var w=this.a
return w.m(new C.f2j(w))},
$S:0}
C.f2j.prototype={
$0(){var w=this.a
w.aH=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f2n.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgU[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azx(new B.nr(new B.be(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.BI(new B.uN(o,o,v.aZU(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xW),B.fR(u,A.A,140,o,A.cj,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f2i(v,s),3,n))}return B.bV(A.bG,m,A.bs,o,10,8)},
$S:163}
C.f2i.prototype={
$0(){var w=this.a
return w.m(new C.f2h(w,this.b))},
$S:0}
C.f2h.prototype={
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
C.f2_.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f20.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f21.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f22.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f23.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f24.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f25.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f26.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f27.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f1l.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f1m.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f1n.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f1o.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f1p.prototype={
$0(){var w=this.a
return w.m(new C.f1k(w))},
$S:0}
C.f1k.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f1q.prototype={
$1(d){return this.a.b7=d},
$S:157}
C.f1r.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f1U.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f1V.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f1W.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f1X.prototype={
$1(d){return this.a.bf=d},
$S:157}
C.f1Y.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f1v.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f1w.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f1x.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f1y.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f1z.prototype={
$0(){var w=this.a
return w.m(new C.f1u(w))},
$S:0}
C.f1u.prototype={
$0(){var w=this.a
return w.c9=A.i.F(w.c9+90+180,360)-180},
$S:0}
C.f1A.prototype={
$0(){var w=this.a
return w.m(new C.f1t(w))},
$S:0}
C.f1t.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(new C.f1s(w))},
$S:0}
C.f1s.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f2o.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.it2(v,w.p4)},
$S:0}
C.f2g.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bw1:B.fR(v,A.A,w,w,A.cj,A.c_,!1,w,!1,w,w)
return C.fPe(d.length===0?"rounded":d,u,e)},
$S:131}
C.f2c.prototype={
$0(){var w=this.a
return w.m(new C.f2b(w))},
$S:0}
C.f2b.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f2d.prototype={
$0(){var w=this.b
return w.m(new C.f2a(this.a,w))},
$S:0}
C.f2a.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f2e.prototype={
$0(){var w=this.b
return w.m(new C.f29(this.a,w))},
$S:0}
C.f29.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f2f.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f2z.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b9.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cnN(),n.r))
l.push(new C.JD(n.cAZ(),!1,!1,t))
o=B.bR(0,B.by(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.q(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bj),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f2y(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:235}
C.f2y.prototype={
$1(d){var w=this.a
return w.m(new C.f2x(w,d,this.b,this.c))},
$S:19}
C.f2x.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f2I.prototype={
$0(){var w=this.a
return w.m(new C.f2H(w,this.b))},
$S:0}
C.f2H.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f1Z.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).hV()},
$S:0}
C.f3f.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.x(B.a([w.b1S(),B.E(B.at(w.b4T(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aSO(),1),w.aOQ()],v),A.l,t,A.e,A.j,0,A.p),1)],v),A.l,t,A.e,A.j,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1S(),new B.D(A.hG,B.at(s.b4T(u),t,t,t),t),B.E(s.aSO(),1),s.aOQ()],x.p),A.l,t,A.e,A.j,0,A.p)},
$S:667}
C.fMv.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bDb(),null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.V)},
$S:z+98}
C.fMu.prototype={
$3(d,e,f){var w=this,v=C.bDb(),u=w.b?A.H:A.cC,t=w.c?A.cH:A.bt
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bk,4280172719,2,d,0,w.f,w.e,D.ct,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.cl8.prototype={
$1(d){return B.w(d)},
$S:17}
C.fUe.prototype={
$0(){return this.a},
$S:z+15}
C.fyZ.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fz_.prototype={
$2(d,e){return J.cq(e)},
$S:z+31}
C.fUg.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fUj.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fUk.prototype={
$0(){return A.d.gH(D.wU)},
$S:z+33}
C.fUc.prototype={
$1(d){return d.a},
$S:z+16}
C.fUf.prototype={
$1(d){return d.a},
$S:z+16}
C.fSa.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fSb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSc.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMz.prototype={
$0(){return C.cD()},
$S:22}
C.fMC.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ct,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bk,4280172719,2,d,s,0,"",t,D.cW,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"","",A.bt,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"",j,A.bt,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,j,k,A.bt,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bt,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bt,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dm,!1,k,l,"",m,A.bt,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bt,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,j,k,"",l,A.bt,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bt,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bt,A.a8)},
$S:z+35}
C.fMB.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fMA.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ct,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bk,4280172719,2,"",t,0,"",u,D.lU,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qY,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fMy.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fP_.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hz8.c4(0,A.a.i(s.w).toLowerCase(),new C.fOY(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fOZ(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.bqW(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.fOY.prototype={
$0(){return F.aPC(this.a.w)},
$S:200}
C.fOZ.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bC4("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:200}
C.fqP.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fqQ.prototype={
$1(d){return d.a},
$S:z+18}
C.fqR.prototype={
$1(d){return d.b},
$S:z+19}
C.h2A.prototype={
$1(d){return D.hAH},
$S:z+41}
C.f9D.prototype={
$0(){return this.a.x=C.i3R(this.b,this.c.b)},
$S:0}
C.f9E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f9B.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:443}
C.f9C.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:443}
C.f9A.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.as,null,new C.f9v(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kf,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f9w(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hFo(o,m.cPb(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f9x(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f9v.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f9z(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bcl,A.f,p,p,D.b7g,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Db:D.Di,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fPe(v,i.b6S(h),u),p)))}t=B.kU(1,m,4,10,10,p,A.dW,!0)
if(!l)return B.bm(!0,new B.D(Aa.yJ,t,p),!0,!1,A.ag,!0,!0)
s=new C.f9y(i,d)
m=B.aI(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ih[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.ci(B.x(B.a([D.fNl,A.X,t,A.dY,D.f8z,A.ay,D.fYx,A.X,B.kU(1.15,l,3,10,10,p,A.dW,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Aa.yJ,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.f9z.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b9.j(0.22):A.c.j(0.04),s=v?A.br:A.dk
return B.aA(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hH,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f9u(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1709}
C.f9u.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.f9y.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bN:A.by
r=B.L(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.q(v,B.by(w,d.length===0?B.q(v,D.as8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dy(!0,new C.Ok(u.Gc(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.ay,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9t(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:131}
C.f9t.prototype={
$0(){B.a7(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f9w.prototype={
$0(){var w=this.a
return w.w=w.w.Gc("")},
$S:0}
C.f9x.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f9j.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f9k.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f9m.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f9n.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f9o.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f9p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9l(w,d))},
$S:2}
C.f9l.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f9q.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f9R.prototype={
$0(){return this.a.f.fX()},
$S:0}
C.f9S.prototype={
$0(){var w=this.a
return w.m(new C.f9Q(w))},
$S:0}
C.f9Q.prototype={
$0(){return this.a.e=null},
$S:0}
C.f9T.prototype={
$0(){var w=this.a
return w.m(new C.f9P(w))},
$S:0}
C.f9P.prototype={
$0(){return this.a.x=null},
$S:0}
C.f9V.prototype={
$1(d){var w=this.a
return w.m(new C.f9O(w,d))},
$S:35}
C.f9O.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f9W.prototype={
$1(d){var w=this.a
return w.m(new C.f9N(w,d))},
$S:35}
C.f9N.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9X.prototype={
$0(){var w=this.a
return w.m(new C.f9M(w))},
$S:0}
C.f9M.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f9Y.prototype={
$1(d){var w=this.a
return w.m(new C.f9L(w,d))},
$S:35}
C.f9L.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f9Z.prototype={
$1(d){var w=this.a
return w.m(new C.f9K(w,d))},
$S:35}
C.f9K.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fa_.prototype={
$0(){var w=this.a
return w.m(new C.f9J(w))},
$S:0}
C.f9J.prototype={
$0(){var w=this.a
return w.w=w.w.Gc("")},
$S:0}
C.fa0.prototype={
$0(){var w=this.a
return w.m(new C.f9I(w,this.b))},
$S:0}
C.f9I.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fa1.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bSY(D.a5G[v]),null))
return B.bV(A.bG,t,A.bs,null,8,8)},
$S:163}
C.f9U.prototype={
$1(d){var w=this.a
return w.m(new C.f9H(w,d))},
$S:9}
C.f9H.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f9r.prototype={
$0(){var w=this.a
return w.m(new C.f9s(w,this.b,this.c))},
$S:0}
C.f9s.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f9G.prototype={
$0(){var w=this.a
return w.m(new C.f9F(w,this.b))},
$S:0}
C.f9F.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h2z.prototype={
$1(d){return new C.a1D(this.a,this.b,null)},
$S:z+42}
C.f9c.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f9d.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f9e.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aL1?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f9f.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f9g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9b(w,d))},
$S:2}
C.f9b.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f9h.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f9i.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aC(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bB,w.length),A.aQ))},
$S:0}
C.fyf.prototype={
$1(d){return d.a===this.a},
$S:215}
C.eq3.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazy(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.d1i:D.djn
t=D.ym.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.ym.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bR(0,B.b4(q,q,q,new C.bk5(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bU0(B.eM(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a9(A.a6,A.aa,A.x,B.a([A.L,D.bkg.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.by(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ee:A.mm,D.ym,q,q,q,20),A.ay,B.ev(A.A,B.od(A.jS,D.fGz,new C.eq2()),A.f,A.e2)],r),A.l,q,A.e,A.Q,0,A.p),q,q,q),B.ap(q,B.q(q,D.fD2,A.f,q,q,new B.p(D.ym,q,q,B.m(6),q,q,A.n),q,q,q,q,P.amQ,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.eq2.prototype={
$1(d){return D.c6D.aK(0,d)},
$S:73}
C.fUl.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fUm.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:215}
C.fUn.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1710}
C.fUo.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fUh.prototype={
$1(d){return d.a},
$S:z+18}
C.fUi.prototype={
$1(d){return d.b},
$S:z+19}
C.h1N.prototype={
$1(d){return new C.a00(this.a,this.b,null)},
$S:z+44}
C.dt8.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dt9.prototype={
$1(d){return d.a===this.a.gajW()},
$S:z+10}
C.dta.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dtd.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.dte.prototype={
$0(){var w=this.a
return w.m(new C.dtc(w,this.b))},
$S:0}
C.dtc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtf.prototype={
$1(d){var w=this.a
return w.m(new C.dtb(w,d))},
$S:9}
C.dtb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eq1.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dB(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1711}
C.fmX.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ct,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fmZ.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bt,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bk,4280172719,2,d,l,0,"",D.na,D.cW,g,e,f)},
$S:z+46}
C.fmY.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xc(0,"twinkle")
w=t===D.bk?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.na,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fmW.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fNG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fNH.prototype={
$0(){return A.d.gH(D.Iq)},
$S:z+49}
C.fNI.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fpb.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fTO.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bk,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bk,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bk,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fJ,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTP.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bk,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bk,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bk,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fJ,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fJ,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTQ.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bk,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.kd,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.kd,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fJ,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fU0.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.kd,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.kd,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.kc,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bk,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fU5.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.kc,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bk,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fJ,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bk,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU6.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.kd,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bk,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fJ,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fU7.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d0a[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.bk,v,4294967295,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fJ,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fU8.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mT,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DW,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fJ,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fU9.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bk,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.kc,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fJ,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUa.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bk,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bk,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fJ,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.kd,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bk,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUb.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.kd,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bk,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bk,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTR.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.kc,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.kc,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fJ,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fTS.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.kc,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.kc,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.kc,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.eZ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fTT.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bk,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bk,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.kd,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.kc,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fJ,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fTU.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bk,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.kc,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.kc,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fJ,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fTV.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lv,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lv,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lv,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lv,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lv,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fJ,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTW.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.kd,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.eZ,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fJ,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTX.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mT,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DW,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bk,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fJ,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTY.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aG,s,A.bn,null,D.fJ,t,t,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bk,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bk,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fJ,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTZ.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bk,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bk,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bk,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bk,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bk,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fJ,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fU_.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,4294967295,4280640491,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,t)
u=B.ar(A.d6,A.co,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,u,q,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bk,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.kc,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fU1.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.kd,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.kd,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.kd,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.kd,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bk,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.eZ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU2.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bk,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.eZ,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.eZ,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.eZ,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.kd,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fU3.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bk,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bk,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bk,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.eZ,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fJ,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.eZ,16777215,t,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fU4.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.kd,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.kd,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bk,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bk,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fLw.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fLx.prototype={
$0(){return A.d.gH($.bGP())},
$S:z+52}
C.fxy.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fxx.prototype={
$1(d){return C.ibO(d,this.a,this.b)},
$S:z+53}
C.fUu.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wi(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUI(B.i0O(A.vN,C.ibR(w.c,w.d,v,u),t)))},
$S:446}
C.e3w.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e3v.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.p(w,w,w,w,w,new B.c0(A.Fb,1.2,A.x,w,0,u.d,w,w),A.n),A.bj),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jm(new B.an(A.a0,w,A.b2,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgS(u.a,r,q,r),A.az),w),B.at(new B.k1(r,new C.e3u(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:324}
C.e3u.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e7.aA(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hU(B.fR(i,A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mI(e*0.8)),A.a7),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btM(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a9(A.a6,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaNr(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.Q,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f8p.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:73}
C.cfz.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bN:A.by
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i3.j(0.4),A.I,14)],x.V):v
w=B.cT(v,B.by(B.m(12),d,A.aq),v,v,A.b4,new B.p(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a6(112,v,B.x(B.a([w,A.fL,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1712}
C.cfA.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gc(""))},
$S:0}
C.cfB.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dy(!0,new C.Ok(v.Gc(u),!0,!1,null),null),d.b,new C.cfC(w,this.c,d),v.a===u)},
$S:z+54}
C.cfC.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hFo(u.b,t.c.Gc(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h0c.prototype={
$1(d){return new C.a_y(this.a,null)},
$S:z+55}
C.dik.prototype={
$0(){var w=this.a
w.d=w.gwf().bf8("data:"+this.b+";base64,"+A.cP.gcu().aN(this.c));++w.r},
$S:0}
C.dip.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.diq.prototype={
$0(){var w=this.a
return w.m(new C.dio(w))},
$S:0}
C.dio.prototype={
$0(){return this.a.r++},
$S:0}
C.dir.prototype={
$1(d){var w=this.a
return w.m(new C.din(w,d))},
$S:2}
C.din.prototype={
$0(){var w=this.a
return w.d=w.gwf().aG0(this.b)},
$S:0}
C.dis.prototype={
$0(){var w=this.a
return w.m(new C.dim(w))},
$S:0}
C.dim.prototype={
$0(){var w=this.a
return w.d=w.gwf().bf8("")},
$S:0}
C.dit.prototype={
$1(d){var w=this.a
return w.m(new C.dil(w,d))},
$S:2}
C.dil.prototype={
$0(){var w=this.a
return w.d=w.gwf().bfe(this.b)},
$S:0}
C.diu.prototype={
$0(){var w=this.a
w=w.gwf().bfe(w.gazz().a.a)
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.h0b.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h0a(w),null)},
$S:20}
C.h0a.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.c1,x.w).w.a.b*0.85),B.ci(B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fVx,A.ay,D.fVN,A.aB,new C.b1c(v.a,new C.h09(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7P,w,w,w,w,A.Oc,w,w,w)},
$S:172}
C.h09.prototype={
$1(d){this.b.$1(new C.h08(this.a,d))
B.a7(this.c,!1).O(d)},
$S:z+56}
C.h08.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h2y.prototype={
$1(d){return D.hu9},
$S:z+57}
C.dp8.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.dp9.prototype={
$0(){var w=this.a.c
w.toString
B.a7(w,!1).O(this.b)
return null},
$S:0}
C.dpa.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a7(w,!1).O(v)}},
$S:0}
C.fR7.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:73}
C.di1.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c6(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c6(w,q+p,w,q+p*1.2))
u.E(new B.DO(B.bY(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:454}
C.fRb.prototype={
$2(d,e){return A.i.aS(d.c,e.c)},
$S:z+58}
C.fJx.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fJy.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fDk,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.HZ,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJv(d),B.bo(A.c4,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oE,D.VZ,new C.fJw(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJv.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJw.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.cl6.prototype={
$1(d){return d.hR()},
$S:z+59}
C.cl7.prototype={
$1(d){return d.aj()},
$S:z+60}
C.cl5.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aH(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.L(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aH(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.L(b3)
if(w==null)w=0
b3=B.aH(b2.h(0,"align"))
v=b3==null?b1:A.i.L(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i7m(b2.h(0,"type"))
t=B.aH(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aH(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aH(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aH(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aH(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.aDi[A.o.D(b4,0,8)]
m=D.d3o[A.o.D(w,0,1)]
l=C.ibc(b2.h(0,"decoration"))
k=B.aH(b2.h(0,"color"))
k=k==null?b1:A.i.L(k)
if(k==null)k=4279310375
j=A.azE[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ie1(b2.h(0,"shape"))
g=B.aH(b2.h(0,"fillColor"))
g=g==null?b1:A.i.L(g)
if(g==null)g=4280640491
f=B.aH(b2.h(0,"strokeColor"))
f=f==null?b1:A.i.L(f)
if(f==null)f=4280172719
e=B.aH(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aH(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aH(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.i.L(a2)
if(a2==null)a2=0
a3=C.hAf(b2.h(0,"textTransition"))
a4=B.aH(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.i.L(a4)
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
b2=B.aH(b2.h(0,"textBg"))
b2=b2==null?b1:A.i.L(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ckW.prototype={
$1(d){return d.hR()},
$S:z+62}
C.ckX.prototype={
$1(d){return d.aj()},
$S:z+63}
C.ckT.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckU.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckV.prototype={
$1(d){return C.hqO(B.a3(d,x.N,x.z))},
$S:z+64}
C.cln.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.clo.prototype={
$0(){return A.d.gH(D.a5i)},
$S:z+66}
C.cli.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hR())},
$S:z+7}
C.clh.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.cld.prototype={
$1(d){return new B.N(d,new C.cle(),B.U(d).k("N<1,V>")).f1(0,new C.clf())},
$S:z+69}
C.cle.prototype={
$1(d){return d.f},
$S:z+70}
C.clf.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:681}
C.clg.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hXy(d)},
$S:z+71}
C.clj.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.clk.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.cll.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fRK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.al(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fRG.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fRH.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fRI.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fRJ.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cl1.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.in1(b2,b3),b5=B.a4(b4).k("b7<2>")
b5=B.cE(new B.b7(b4,b5),new C.cl0(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qp.aA(0,A.i.D(b1,0,1))
u=new C.cl2()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cl3(a9,b7.d)
r=new C.cl4(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jE.aA(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.i.D(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fi){a4=i.hR()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lU&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kH(A.i.D(o,0,1),r.$1(l),a8),new B.kH(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wO(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ct)a7=D.na
p.push(s.$5(i.c,i.d,i.e,i.f,C.hCM(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ad,A.t,p,a8),new B.p(a8,a8,a8,a8,a8,new B.a9(A.a6,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bj)},
$S:455}
C.cl0.prototype={
$1(d){return d.a},
$S:z+22}
C.cl2.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cl3.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1716}
C.cl4.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8P(v,C.b3k(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQF.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cla.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clb.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fUB.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:277}
C.fTI.prototype={
$1(d){return new C.aew(this.a,this.b,null)},
$S:z+78}
C.eCn.prototype={
$0(){return this.a.QG(this.b,C.iqY(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCo.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QG(this.b,C.ir_(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eCp.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QG(this.b,C.iqZ(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eCq.prototype={
$0(){A0.hCw()
B.a7(this.a,!1).O(null)},
$S:0}
C.cl_.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1717}
C.ckZ.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.o0),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.i.V(A.i.D(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dB
return B.fR(t,A.A,o,new C.ckY(),A.cj,w,!0,u,!1,new B.bJ("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1718}
C.ckY.prototype={
$3(d,e,f){return D.af6},
$S:212}
C.fRF.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fRE(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c3(new B.an(A.a0,t,A.ad,A.t,r,t),new B.p(v,t,t,t,t,w,A.n),A.bj),A.aq)},
$S:1719}
C.fRE.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3k(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fAh.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fAf(d))
w=B.aI(d,A.c1,x.w).w
v=B.m(22)
u=B.L(A.by,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h4,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jN,q,q,q),A.ay,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bN(!1,A.AQ,q,q,!0,q,q,q,new C.fAg(p,d),q,B.fu(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cd,q,new B.b9(B.m(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h3,A.GU,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:248}
C.fAf.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a7(w,!0).pX())B.a7(w,!0).eO()},
$S:0}
C.fAg.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a7(this.b,!0).eO()},
$S:0}
C.fgZ.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fx(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fx(A.aa,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLl(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLl(1-r,t))],x.p),t)
case 16:v=A_.XM.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.ds()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fx(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:67}
C.e1f.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1e.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1d.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hCM(v,w,e)},
$S:67}
C.ckS.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a6,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cL>")
q=B.C(new B.N(v,new C.ckR(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ad,A.f,q,r),new B.p(t,r,r,r,r,u,A.n),A.bj)},
$S:455}
C.ckR.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ct?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8P(m,new C.Wd(d,C.b3k(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dfe.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dfd(w))},
$S:12}
C.dfd.prototype={
$0(){return this.a.d++},
$S:0}
C.epK.prototype={
$2(d,e){var w,v=null,u=A.o.ap(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSJ.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.imL(w,t,s,e)}switch(s.a.c){case"float3d":s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fx(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:67}
C.f5U.prototype={
$1(d){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dP
return w},
$S:1720}
C.fPf.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.btF(u,t,r),A.az))
w.push(B.nT(s.d,A.aq,new C.bho(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsC(u,q,t,r),A.az))
return B.at(new B.a6(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:226}
C.fDo.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:304}
C.eIB.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.Dy(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eIz(),new C.eIA(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1721}
C.eIz.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.eIA.prototype={
$0(){return J.fs(this.a)},
$S:1723}
C.eEZ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF0.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eGz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGn.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eGo.prototype={
$1(d){return d.hR()},
$S:z+81}
C.eEm.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eHH.prototype={
$0(){this.a.uc()},
$S:0}
C.eIx.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KL()},
$S:0}
C.eGx.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KL()},
$S:0}
C.eIk.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIl.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eIm.prototype={
$1(d){return d.a},
$S:z+22}
C.eIn.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:263}
C.eIo.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:685}
C.eDL.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIy.prototype={
$0(){},
$S:0}
C.eFG.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KL()},
$S:0}
C.eDJ.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.ya()},
$S:0}
C.eDK.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.ya()},
$S:0}
C.eG2.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eG3.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KL()
w.z="Home"},
$S:0}
C.eG4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFF.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VY,w,w,!0,w,w,w,new C.eFE(d),w,w)],x.p),w,w,w,D.fXp,w,w,w,w,D.fDN,w)},
$S:18}
C.eFE.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFC.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VY,w,w,!0,w,w,w,new C.eFB(d),w,w)],x.p),w,w,w,D.fHY,w,w,w,w,D.fFD,w)},
$S:18}
C.eFB.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFD.prototype={
$0(){},
$S:0}
C.eEV.prototype={
$1(d){return this.a.b3f(C.bER(d))},
$S:z+7}
C.eEW.prototype={
$1(d){return this.a.agv(C.bER(d))},
$S:z+7}
C.eFM.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fXt,A.ay,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bA,new C.Qx(A.wy,D.aB1,"HATI YA KUHOWA","Hati ya mahari",new C.eFH(d),w),A.X,new C.Qx(A.hf,D.dgW,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eFI(d),w),A.X,new C.Qx(A.hJ,D.d1n,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eFJ(d),w),A.X,new C.Qx(A.id,D.d_q,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eFK(d),w)],v)
if(this.a.gacK())A.d.v(u,B.a([A.X,new C.Qx(A.js,D.cLi,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eFL(d),w)],v))
return B.bm(!0,B.ci(B.x(u,A.al,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yM,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:25}
C.eFH.prototype={
$0(){B.a7(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eFI.prototype={
$0(){B.a7(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eFJ.prototype={
$0(){B.a7(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eFK.prototype={
$0(){B.a7(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eFL.prototype={
$0(){B.a7(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eFN.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eDN.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eDO.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nu(r,v.f+1,q);++v.f
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
C.eFY.prototype={
$1(d){return d.b===D.lU},
$S:z+4}
C.eFZ.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eFW(w,this.a,v),null)},
$S:20}
C.eFW.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eFX(p,o,a3,n),l=B.S(a2).ax.a===A.J,k=l?A.c:A.T,j=l?A.aS:A.an,i=l?A.bp:A.bO,h=l?A.T:A.c,g=B.m(28),f=B.L(l?A.by:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bH,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eFS(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Di[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjZ(t,u.b,p.a===t,i,k,new C.eFT(v,m),q))}a1=B.bV(A.bG,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Db[w]
s.a=null
t=s.a=r.a
u.push(new C.bjY(t,r.b,p.b===t,k,j,new C.eFU(s,m),q))}return B.bm(!0,B.q(q,B.ci(B.x(B.a([d,A.aR,a0,A.X,a1,A.bA,v,A.X,B.bV(A.bG,u,A.bs,q,12,12),A.bA,new B.a6(1/0,48,B.es(D.c2E,D.fZU,new C.eFV(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.m(16),A.a1),D.b5k,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.uu,D.bDV,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eFX.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eFQ(w.a,d,e))
w.b.da(new C.eFR(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1726}
C.eFQ.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eFR.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eFS.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFT.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eFU.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eFV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Ht(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.da(new C.eFP(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFP.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eG0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eG1.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eG_(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eG_.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGi.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eGj.prototype={
$1(d){return d.w},
$S:z+82}
C.eGk.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eGl.prototype={
$1(d){var w=this,v=null,u=B.S(d).ax.a===A.J,t=u?A.c:A.T,s=u?A.aS:A.an,r=u?A.bp:A.aP,q=u?A.T:A.c,p=B.m(28),o=B.L(u?A.by:A.aO,A.r,1),n=B.aI(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bX9,A.f,v,v,D.b6H,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eGf(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cr,B.hN(v,new C.eGg(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.eGh(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.uu,A.a0n,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGf.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eGh.prototype={
$2(d,e){return A.af},
$S:37}
C.eGg.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.c_r,q,q,q,new C.eGd(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bGa,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.m(16),A.a1),q,A.eY,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.m(16),D.b5_),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGe(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:686}
C.eGd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.itb(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geC()?p.a:q.a.length
n=p.geC()?p.b:q.a.length
m=A.a.oa(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bB,o+s.length),A.aQ))
l.akz(k,m)
l.pJ()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGe.prototype={
$1(d){var w=this.a
w.akz(this.b.a,d)
w.pJ()},
$S:2}
C.eGm.prototype={
$0(){},
$S:0}
C.eFO.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eE3.prototype={
$0(){},
$S:0}
C.eE4.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hE5(this.b,w,!0)
w=this.a
w.r=null
w.ya()},
$S:0}
C.eE5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eE6.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eE2(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eE2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGs.prototype={
$1(d){return B.pd(new C.eGr(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:142}
C.eGr.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amw,B.x(B.a([D.fUU,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.ffv,new C.eGq(this.a,this.b),20,A.ux,w,A.ah,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:457}
C.eGq.prototype={
$2(d,e){var w=null,v=D.Iq[e],u=C.hXt(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fU,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.q(w,D.f8v,A.f,w,w,new B.p(A.dJ.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n1,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.l,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a9(A.a6,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGp(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eGp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cl9(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a7(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGt.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eCI.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rV(4294967295,null,0,0,null,C.cD(),D.n9,"","","",D.dm),s=this.b
C.clm(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DV){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eE1.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c3(v.e.r,v.f+1,C.hqO(q));++v.f},
$S:0}
C.eE_.prototype={
$0(){var w=this.a
A.d.cB(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eGB.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cB(v.e.r,u),s=this.c
A.d.c3(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eDW.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eDV(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eDV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGA.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eDM.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:263}
C.eEn.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:685}
C.eIi.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIj.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avv(w).fX()
v=u.Xz(w)
v.stV(B.hg(A.bB,v.a.a.length))},
$S:7}
C.eHI.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yz(v)
if(u!=null&&u.b===D.cW)w.Xz(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eCJ.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,v.gqT().e.l(),A.aG,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bk,4280172719,2,"Tap to edit text",0,0,"",D.ct,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCG.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqT().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqT().c.l(),2,"",0,0,"",D.ct,D.fi,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCw.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eCt.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c9A],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galc().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUM,r,r,r,r,new C.eCs(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cd(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCs.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eCu.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.aw(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bk,4280172719,2,t,0,0,"",D.ct,D.a8_,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eDY.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eDZ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eDX(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eDX.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDa.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDb(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDb.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDf.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDg(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDg.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDd.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eDe(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDe.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eG(w,new C.eDc()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDc.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eD9.prototype={
$0(){return C.clm(this.b,this.c,this.a.gqT())},
$S:0}
C.eGc.prototype={
$0(){return A.d.c3(this.a.d,0,this.b)},
$S:0}
C.eIr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIs.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eIt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIu.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c3(s,0,v.b)
else{w=A.d.bj(s,new C.eIq(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTb()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hR()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.ya()
t.KL()}},
$S:0}
C.eIq.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eHY.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acO(),s=w.b,r=u.acP(A.fo,A.jJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.U,r,A.bA,B.q(v,B.A(B.a([B.E(u.aXQ(w.c,A.an),1),new B.D(A.fI,B.q(v,D.bUS,A.f,v,v,new B.p(A.fo.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXQ(s,A.fo),1)],n),A.l,v,A.e,A.j,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bF,v,v,v),A.bA,u.aXT(A.fo,d,D.bQX,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c1t(A.aH,d,A.uM,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXR(d,"Not now"))
return new C.KL(B.x(p,A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eHX.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KL(B.x(B.a([v.acO(),A.U,v.acP(A.aH,D.bQC,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.c1,x.w).w.a.b*0.42),B.hN(w,new C.eHV(v,u,d),u.length,w,w,A.ah,new C.eHW(),!0),w),A.aB,v.aXR(d,"Cancel")],x.p),A.al,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eHW.prototype={
$2(d,e){return A.X},
$S:37}
C.eHV.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.arD,A.f,w,w,new B.p(w,w,w,B.m(12),w,D.c6y,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nh,w,w,w),A.cU,B.d("Updated "+this.a.QH(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHU(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eHU.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eHR.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acO()
t=t.acP(A.aw,A.uU,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KL(B.x(B.a([s,A.U,t,A.bA,B.A(B.a([B.E(B.dU(A.abz,new C.eHP(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cp,u,new B.b9(B.m(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bI(D.fGd,u,new C.eHQ(d),B.bo(A.fo,u,u,u,A.c,u,A.cp,u,new B.b9(B.m(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eHP.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.eHQ.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eHT.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acO(),s=w.b,r=u.acP(A.aY,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awP("Names",""+w.c),1),A.ae,B.E(u.awP("Fields",""+w.d),1),A.ae,B.E(u.awP("Signatures",""+w.e),1)],q),A.l,v,A.e,A.j,0,v,v),o=B.bo(A.bl,v,v,v,A.c,v,A.yz,v,new B.b9(B.m(14),A.a1),v,v,v)
return new C.KL(B.x(B.a([t,A.U,r,A.aR,p,A.bA,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nX,v,v,v),v,new C.eHS(d),o),A.X,u.aXS(d,"Stay here",!1)],q),A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eHS.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eER.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eEQ.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eHJ.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eIh.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0K(A.d.dP(w.d,new C.eIf(v),new C.eIg(v)).hR(),w.f,null)},
$S:z+84}
C.eIf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIg.prototype={
$0(){return this.a},
$S:z+85}
C.eCB.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bF,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fY,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWI,w,w,w,w,new C.eCz(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fEb,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXX,w,w,w,w,new C.eCA(d),!1,w,w,w,w,w,D.h09,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCz.prototype={
$0(){B.a7(this.a,!1).O("scroll")
return null},
$S:0}
C.eCA.prototype={
$0(){B.a7(this.a,!1).O("split")
return null},
$S:0}
C.eCC.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bt,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bk,4280172719,2,v,0,0,"",D.ct,D.TQ,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCD.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.TQ,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aG,4279310375,A.bn,u,D.bk,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ct,0,"","","","","",!1,0))
A.d.c3(j.e.r,i+q-1,new C.m0(""+1000*p+"_"+o,r+n,"",D.qX,4294967295,null,D.dm,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eCH.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kM(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lu,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eCy.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5X(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.ei(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lu,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eCx(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.imu(p)}},
$S:0}
C.eCx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGy.prototype={
$0(){var w=this.a,v=this.b
w.b5X(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eIp.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eEU.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eET())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eET.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDj.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDk.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uc()},
$S:7}
C.eCv.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEl.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCE.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eCN.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eCO.prototype={
$0(){var w=this.b.hR(),v=C.cD(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eCP.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCM(v))
if(u>=0&&u<w.length-1){A.d.cB(w,u)
A.d.c3(w,u+1,v)}},
$S:0}
C.eCM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD_.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCL(v))
if(u>0){A.d.cB(w,u)
A.d.c3(w,u-1,v)}},
$S:0}
C.eCL.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD2.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eD3.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eD4.prototype={
$0(){return this.a.as=A.e_},
$S:0}
C.eD5.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eD6.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eD7.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eD8.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCQ.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DD(w.gqT().c.j(0.18).l(),0.1,u,D.bk,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j5(A.bn,!1,w.gqT().d.l(),A.aG,18,A.bt,A.H,0.07,v,"Document Header",0,D.dm,0.9,0.05,0.02))},
$S:0}
C.eCR.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.DD(v.gqT().c.j(0.12).l(),0.1,t,D.bk,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFz()
A.d.J(t,C.j5(A.K,!1,v.gqT().e.l(),A.aG,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dm,0.9,0.05,0.92))},
$S:0}
C.eCS.prototype={
$0(){A.d.J(this.a.gdB().z,C.DD(1727914055,0.12,C.cD(),D.bk,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eCT.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DD(w,0.08,C.cD(),D.bk,w,2,0.5,0.2,0.4))},
$S:0}
C.eCU.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DD(w.gqT().c.j(0.35).l(),0.12,u,D.DW,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.15,C.cD(),"Important note",0,D.qY,0.5,0.38,0.52))},
$S:0}
C.eCV.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DD(4294507260,0.78,C.cD(),D.bk,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFz()+"\n\nSubject:\n\nBody text\u2026",0,D.dm,0.76,0.12,0.14))},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DD(4294897802,0.28,C.cD(),D.bk,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4285611794,A.aG,15,A.bt,A.a8,0.24,C.cD(),"Sticky note",0,D.aKQ,0.26,0.64,0.14))},
$S:0}
C.eCX.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DD(4293060848,0.04,C.cD(),D.bk,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DD(w,0.04,C.cD(),D.bk,w,2,0.55,0.1,0.48))},
$S:0}
C.eCY.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jk,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vd,0.42,0.52,0.18))},
$S:0}
C.eCZ.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DD(858088427,0.62,C.cD(),D.bk,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DD(856004201,0.62,C.cD(),D.bk,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option A",0,D.dm,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option B",0,D.dm,0.36,0.56,0.2))},
$S:0}
C.eD0.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DD(4294967295,0.36,C.cD(),D.bk,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j5(A.K,!1,w,A.aG,14,A.bt,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dm,0.24,0.38,0.4))},
$S:0}
C.eD1.prototype={
$0(){return C.clm(this.b,D.TR,this.a.gqT())},
$S:0}
C.eEk.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9T.q(0,d),t=this.a
return t.bb9(d,v===d,A.b1,this.c,new C.eEj(t,u,d,w),u)},
$S:z+25}
C.eEj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGj(r,new C.eEi(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEi.prototype={
$0(){return this.a.da(new C.eEh(this.b,this.c))},
$S:0}
C.eEh.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eCF.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rV(4294967295,null,0,0,null,C.cD(),D.n9,"","","",D.dm),s=this.b
C.clm(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DV){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ite(p,q.d,s,new C.eDm(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uc(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDm.prototype={
$1(d){return this.bo9(d)},
bo9(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDl(t,d))
w=2
return B.b(t.uc(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eDl.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c3(v.d,0,u)}},
$S:0}
C.eDo.prototype={
$0(){return this.a.bMT()},
$S:0}
C.eDp.prototype={
$0(){return this.a.aT0("Class Presentation",!0)},
$S:0}
C.eDq.prototype={
$1(d){return this.a.bNP(d.b,this.b,d.a)},
$S:z+88}
C.eE0.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGb.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aI(d,A.eQ,x.w).w.f.d),new B.dY(new C.eGa(this.a,this.b),null),null)},
$S:64}
C.eGa.prototype={
$2(d,e){return B.pd(new C.eG9(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:601}
C.eG9.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.by:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alX,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.T,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bN(!1,A.AQ,v,v,!0,v,v,v,new C.eG7(w.c),v,v)],q),A.l,v,A.e,A.j,0,v,v),v),B.E(B.cd(B.a([p.aVN(u,!0,!0,new C.eG8(p,w.d))],q),e,v,D.bBA,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.l9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eG7.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eG8.prototype={
$0(){this.b.$1(new C.eG5())
var w=this.a
if(w.c!=null)w.m(new C.eG6())},
$S:0}
C.eG5.prototype={
$0(){},
$S:0}
C.eG6.prototype={
$0(){},
$S:0}
C.eHK.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eHL.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAF(this.a,null),0.94+w*0.06,null,null),w)},
$S:458}
C.eHM.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eHN.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.bfc(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:458}
C.eHO.prototype={
$0(){return A.d.c3(this.a.d,0,C.X5(this.b))},
$S:0}
C.eCK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.q9.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A2.a2c,u?A.ab:A.T,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.T,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.uw(A.fj,B.q(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.j,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:301}
C.eDP.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eDQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDR.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k8
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2M:A.Cw}return w},
$S:689}
C.eDU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.i.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],s):B.a([A.c.j(0.92),A.nq.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.q(l,B.X(C.kM(v.w)?A.wy:A.qM,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,q,l,new B.a9(A.a6,A.aa,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.T,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QH(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QH(v.f)
r=k.bNN(n,A.d.gH(r),t)
return B.q(l,B.by(j,new B.a9_(B.aJ(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.O9,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ow,t?A.aD:A.bK,l,l,l,l),l,l,l,new C.eDS(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eDT(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:93}
C.eDT.prototype={
$0(){return this.a.agv(this.b)},
$S:0}
C.eDS.prototype={
$0(){return this.a.Br(this.b,this.c)},
$S:0}
C.eFk.prototype={
$0(){var w=this.a
w.b9I()
w.m(new C.eFj())},
$S:0}
C.eFj.prototype={
$0(){},
$S:0}
C.eFl.prototype={
$1(d){return this.a.akz(this.b.a,d)},
$S:2}
C.eFm.prototype={
$0(){this.a.da(new C.eFi(this.b))},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eFn.prototype={
$0(){this.a.da(new C.eFh(this.b))},
$S:0}
C.eFh.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eFo.prototype={
$0(){this.a.da(new C.eFg(this.b))},
$S:0}
C.eFg.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eFp.prototype={
$0(){this.a.da(new C.eFf(this.b))},
$S:0}
C.eFf.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eFq.prototype={
$0(){var w=this.a
w.da(new C.eFe(w,this.b))},
$S:0}
C.eFe.prototype={
$0(){var w=this.b
return w.as=this.a.c8u(w.as)},
$S:0}
C.eFr.prototype={
$0(){return this.a.da(new C.eFd(this.b))},
$S:0}
C.eFd.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFs.prototype={
$0(){return this.a.da(new C.eFc(this.b))},
$S:0}
C.eFc.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eF5.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eF6.prototype={
$0(){this.a.a0H()
return null},
$S:0}
C.eF7.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.c1,x.w).w.a.a<900)w.agO()
else w.m(new C.eF4(w))},
$S:0}
C.eF4.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eF8.prototype={
$0(){this.a.da(new C.eF3(this.b))},
$S:0}
C.eF3.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eF9.prototype={
$0(){return this.a.da(new C.eF2(this.b))},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFa.prototype={
$0(){return this.a.da(new C.eF1(this.b))},
$S:0}
C.eF1.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFb.prototype={
$0(){return this.a.aC_(null)},
$S:0}
C.eEd.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eEe.prototype={
$0(){this.a.abk()
return null},
$S:0}
C.eEg.prototype={
$1(d){return this.boa(d)},
boa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KC(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.as,null,new C.eE8(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.da(new C.eE9(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eEa(r))
s=s.c.M(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eEb(r))
s=s.c.M(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hFn(q,new C.Fj(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.da(new C.eEc(r,p))
s=s.c.M(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ai5(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eE8.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.erY],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dg,p,p,p)
q=u.e===s?D.bWR:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eE7(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eE7.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eE9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEa.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEc.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEf.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ao(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ao(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ao(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ai5(r?t:s.db)
s=s==null?t:s.b
return B.a([D.exD,q,v,u,B.Ao(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.eIv.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFw(w,v)}},
$S:0}
C.eIw.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eFv.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c6s:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fB,B.aA(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b4,new B.p(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eFu(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:141}
C.eFu.prototype={
$0(){var w=this.a
return w.m(new C.eFt(w,this.b))},
$S:0}
C.eFt.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eFw.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5R:E.aB8
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRq():t.gbNd()
return B.hb(B.aA(u,B.q(u,D.ar2,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.aa,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1731}
C.eFx.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.isu(v,w.a.c)},
$S:0}
C.eGU.prototype={
$0(){return this.b.vO(this.a.a)},
$S:0}
C.eGV.prototype={
$0(){return this.a.vO(D.n9)},
$S:0}
C.eGW.prototype={
$0(){return this.a.vO(D.Ji)},
$S:0}
C.eH6.prototype={
$0(){return this.a.vO(D.Jj)},
$S:0}
C.eHh.prototype={
$0(){return this.a.vO(D.Jh)},
$S:0}
C.eHs.prototype={
$0(){return this.a.qE("lab_report")},
$S:0}
C.eHz.prototype={
$0(){return this.a.qE("rubric")},
$S:0}
C.eHA.prototype={
$0(){return this.a.qE("minutes")},
$S:0}
C.eHB.prototype={
$0(){return this.a.qE("agenda")},
$S:0}
C.eHC.prototype={
$0(){return this.a.qE("timeline")},
$S:0}
C.eHD.prototype={
$0(){return this.a.qE(this.b.a)},
$S:0}
C.eGX.prototype={
$0(){this.a.WB()
return null},
$S:0}
C.eGY.prototype={
$0(){this.a.Wv()
return null},
$S:0}
C.eGZ.prototype={
$0(){return this.a.qE("table")},
$S:0}
C.eH_.prototype={
$0(){return this.a.qE("sticky")},
$S:0}
C.eH0.prototype={
$0(){return this.a.qE("divider")},
$S:0}
C.eH1.prototype={
$0(){return this.a.qE("header_bar")},
$S:0}
C.eH2.prototype={
$0(){return this.a.pr(D.bk)},
$S:0}
C.eH3.prototype={
$0(){return this.a.pr(D.eZ)},
$S:0}
C.eH4.prototype={
$0(){return this.a.pr(D.kc)},
$S:0}
C.eH5.prototype={
$0(){return this.a.pr(D.DW)},
$S:0}
C.eH7.prototype={
$0(){return this.a.pr(D.kd)},
$S:0}
C.eH8.prototype={
$0(){return this.a.pr(D.lv)},
$S:0}
C.eH9.prototype={
$0(){return this.a.pr(D.fJ)},
$S:0}
C.eHa.prototype={
$0(){this.a.HS()
return null},
$S:0}
C.eHb.prototype={
$0(){this.a.NZ()
return null},
$S:0}
C.eHc.prototype={
$0(){return this.a.qE("quote")},
$S:0}
C.eHd.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eHe.prototype={
$0(){this.a.a0N()
return null},
$S:0}
C.eHf.prototype={
$0(){var w=this.a
return w.m(new C.eGK(w))},
$S:0}
C.eGK.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.or(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eGS(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGS.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHi.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9V.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9V.q(0,q))u.push(B.ap(s,B.q(s,D.PV,A.f,s,s,D.Fj,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aA(s,B.hb(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eGR(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eGR.prototype={
$0(){this.a.a9H(this.b)
return null},
$S:0}
C.eHj.prototype={
$0(){this.a.a9G(this.b)
return null},
$S:0}
C.eHk.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hXu(d),p=this.a,o=B.m(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rV(4294967295,r,0,0,r,"preview_"+w,D.qX,"","","",D.dm)
C.hC9(s,w)
w=x.p
u=B.a([B.by(o,B.q(r,B.by(t,C.hDu(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arE,A.f,r,r,D.Fj,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iJ,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGQ(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eGQ.prototype={
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
return B.b(s.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.da(new C.eGG(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGG.prototype={
$0(){return C.hC9(this.a,this.b.a)},
$S:0}
C.eGT.prototype={
bob(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9T.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bob(d,e)},
$S:z+91}
C.eHE.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eHG(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ci(B.A(v,A.l,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eHG.prototype={
$1(d){var w=this
return w.a.bb9(d,w.b===d,w.c,w.d,new C.eHF(w.e,d),!D.a9T.q(0,d))},
$S:z+25}
C.eHF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHl.prototype={
$1(d){this.b.$2(d,new C.eGP(this.a,d,this.c))
return null},
$S:z+26}
C.eGP.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGj(u,new C.eGF(v,this.c,w),w)},
$S:0}
C.eGF.prototype={
$0(){return this.a.da(new C.eGD(this.b,this.c))},
$S:0}
C.eGD.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHm.prototype={
$1(d){this.b.$2(d,new C.eGO(this.a,d))
return null},
$S:z+26}
C.eGO.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h3m(u,new C.eGE(v,w),w)},
$S:0}
C.eGE.prototype={
$0(){var w=this.a
return w.da(new C.eGC(w,this.b))},
$S:0}
C.eGC.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHn.prototype={
$0(){var w=this.a
return w.m(new C.eGN(w))},
$S:0}
C.eGN.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eHo.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFw(w,v)}},
$S:0}
C.eHp.prototype={
$0(){this.a.IE()
return null},
$S:0}
C.eHq.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eHr.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.da(new C.eGM(v))},
$S:0}
C.eGM.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eHt.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eHu.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FO(v,!0)
return null},
$S:0}
C.eHv.prototype={
$0(){this.a.da(new C.eGL(this.b))},
$S:0}
C.eGL.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eHw.prototype={
$0(){this.a.da(new C.eGJ(this.b))},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eHx.prototype={
$0(){this.a.da(new C.eGI(this.b))},
$S:0}
C.eGI.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eHy.prototype={
$0(){this.a.da(new C.eGH(this.b))},
$S:0}
C.eGH.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDi.prototype={
$1(d){return this.bo8(d)},
bo8(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.da(new C.eDh(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:197}
C.eDh.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eI0.prototype={
$0(){var w=this.a
return w.da(new C.eI_(w,this.b))},
$S:0}
C.eI_.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eI1.prototype={
$0(){var w=this.a
return w.da(new C.eHZ(w,this.b))},
$S:0}
C.eHZ.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eEq.prototype={
$0(){return this.a.da(new C.eEp(this.b))},
$S:0}
C.eEp.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEr.prototype={
$0(){return this.a.da(new C.eEo(this.b))},
$S:0}
C.eEo.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eEY.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atl,new C.eEX(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eEX.prototype={
$1(d){var w=null
return B.Ao(B.d(d.b,w,w,w,w,w,w,A.lY,w,w,w),48,d,x.fO)},
$S:z+95}
C.eId.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:37}
C.eIc.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eIa(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.aT:A.cu
v=B.L(v,A.r,o?2:1)
u=r.d?A.cq:A.c
t=B.bR(0,C.hDu(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aA(q,B.q(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nV,q,q,q),A.f,q,q,new B.p(A.aU,q,q,s,q,q,A.n),q,q,q,q,A.amR,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIb(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eIb.prototype={
$0(){var w=this.a
return w.m(new C.eI6(w,this.b))},
$S:0}
C.eI6.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KL()},
$S:0}
C.eIa.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eI7(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eI8(q,s))
q.aUv()}else if(r==="del"){q=t.a
q.m(new C.eI9(q,s))
q.aTB()}else if(r==="up")t.a.b6a(s,s-1)
else if(r==="down")t.a.b6a(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eI7.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYA,w,w,w,w,new C.eI2(d),!1,w,w,w,w,w,w,w,D.fFa,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYt,w,w,w,w,new C.eI3(d),!1,w,w,w,w,w,w,w,A.xm,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXJ,w,w,w,w,new C.eI4(d),!1,w,w,w,w,w,w,w,D.fNB,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZQ,w,w,w,w,new C.eI5(d),!1,w,w,w,w,w,w,w,D.fEZ,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eI2.prototype={
$0(){B.a7(this.a,!1).O("dup")
return null},
$S:0}
C.eI3.prototype={
$0(){B.a7(this.a,!1).O("del")
return null},
$S:0}
C.eI4.prototype={
$0(){B.a7(this.a,!1).O("up")
return null},
$S:0}
C.eI5.prototype={
$0(){B.a7(this.a,!1).O("down")
return null},
$S:0}
C.eI8.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eI9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIe.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
w.b9I()
w.aC_(null)},
$S:0}
C.eDH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.by(s,B.c3(A.l4,new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bj),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eDG(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ad,A.f,s,new B.bJ("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.p(v,p,p,o,n,w,A.n),A.bj)},
$S:455}
C.eDG.prototype={
$1(d){var w=this
return w.a.bJc(d,w.b,w.c,w.d)},
$S:z+23}
C.eDv.prototype={
$0(){var w=this
if(w.b){w.a.O6(w.c)
return}if(w.d){w.a.a9p(w.c)
return}if(w.e){w.a.ai5(w.c)
return}if(w.f)w.a.bag(w.c)},
$S:0}
C.eDw.prototype={
$0(){this.a.O6(this.b)
return null},
$S:0}
C.eDx.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eDy.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eDu(u,d,w.c,w.d))
v.Ii()
v.oD()
v.pJ()},
$S:19}
C.eDu.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eDz.prototype={
$1(d){return this.a.akz(this.b.a,d)},
$S:2}
C.eDB.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hg8(w))u.a.O6(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bag(v)},
$S:0}
C.eDA.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eDC.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eDt(w.b,d,w.c,w.d))
v.Ii()
v.oD()
v.pJ()},
$S:19}
C.eDt.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eDD.prototype={
$1(d){var w=this.a
w.m(new C.eDs(this.b,d))
w.Ii()
w.oD()
w.pJ()},
$S:210}
C.eDs.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eDE.prototype={
$0(){var w=this.a
w.m(new C.eDr(this.b))
w.Ii()
w.oD()
w.pJ()},
$S:0}
C.eDr.prototype={
$0(){this.a.r=C.hCZ()},
$S:0}
C.eDF.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eFz.prototype={
$0(){var w=this.a
return w.m(new C.eFy(w))},
$S:0}
C.eFy.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFA.prototype={
$1(d){return this.a.cIx(this.b.a,d)},
$S:2}
C.eEE.prototype={
$1(d){var w
this.a.da(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.eEF.prototype={
$1(d){return this.a.$1(new C.eED(this.b,d))},
$S:6}
C.eED.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEG.prototype={
$1(d){return this.a.$1(new C.eEC(this.b,d))},
$S:6}
C.eEC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEH.prototype={
$1(d){return this.a.$1(new C.eEB(this.b,d))},
$S:6}
C.eEB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEI.prototype={
$1(d){return this.a.$1(new C.eEA(this.b,d))},
$S:6}
C.eEA.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eEJ.prototype={
$1(d){return this.a.$1(new C.eEz(this.b,d))},
$S:6}
C.eEz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEK.prototype={
$1(d){return this.b.$1(new C.eEy(this.a,this.c))},
$S:9}
C.eEy.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eEL.prototype={
$1(d){return this.b.$1(new C.eEx(this.a,this.c))},
$S:9}
C.eEx.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEM.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.d0
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEw(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEw.prototype={
$0(){return this.a.$1(new C.eEt(this.b,this.c))},
$S:0}
C.eEt.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eEN.prototype={
$1(d){return this.a.$1(new C.eEv(this.b,d))},
$S:1732}
C.eEv.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eEO.prototype={
$1(d){var w=null
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEu(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEu.prototype={
$0(){return this.a.$1(new C.eEs(this.b,this.c))},
$S:0}
C.eEs.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eEP.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a7(w,!1).pX()}else w=!1
if(w){w=v.a.c
w.toString
B.a7(w,!1).eO()}v.a.aut()},
$S:0}
C.eES.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aA(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.q(n,B.X(A.uU,u,n,n,n,10),A.f,n,n,new B.p(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nF,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aP(!1,m,!0,B.eJ(new B.a6(48,48,new B.an(A.A,n,A.ad,A.t,r,n),n),n,new B.p(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:132}
C.eCr.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aJ(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.jd,A.K,p,p)],x.p),A.l,p,A.bc,A.j,0,A.p),p,new B.p(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GP,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:132}
C.eGw.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.asv,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.eGu(d),w,w),B.bI(A.r9,w,new C.eGv(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eGu.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eGv.prototype={
$0(){var w=this.b.a.a
B.a7(this.a,!1).O(w)
return null},
$S:0}
C.daG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.e7.aA(0,A.i.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dH.aA(0,i)
v=B.m(22)
t=B.ar(A.aM,A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL).j(0.18+w*0.12),A.I,32+w*10),D.aeC],s)
q=B.m(22)
p=x.O
o=B.ap(k,B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c0(A.b7,0.9,A.x,k,0,B.a([A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gan(C.kM(j.a.c.w)?D.v6:L.nL).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kM(m)?D.v6:L.nL
s=B.a([new B.ac(0,A.G,A.d.gH(C.kM(m)?D.v6:L.nL).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.q(k,B.X(C.kM(j.a.c.w)?A.wy:A.qM,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ad,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fL,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fwR,A.K,k,k),A.ay,B.d(j.gcDl(),k,k,k,k,k,k,D.fBK,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gTb()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kM(j.a.c.w)?D.v6:L.nL).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.KF(A.z6,"Download PDF","pdf",A.d5,j.Jz(0),!1,k))
p=j.a.c
if(!p.z||p.gTb()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.KF(A.jJ,"Transfer to "+C.hD0(p==null?"":p),"transfer_hati",A.aY,j.Jz(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jz(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.KF(D.bQ0,"Rename presentation","rename",A.ch,n,!1,k),A.am,new C.KF(A.aoL,"Duplicate","duplicate",A.b9,j.Jz(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.U)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.KF(A.ei,"Delete presentation","delete",A.av,j.Jz(p),!0,k))
s.push(A.ay)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jz(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jz(n)
s.push(B.dP(B.da(B.bN(!1,E.aWB,k,k,!0,k,k,k,new C.daF(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bER,k,k,k,k,k,A.kz,k,k)),n),new B.o(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.q(k,B.by(q,new B.an(A.a0,k,A.ad,A.t,B.a([o,new B.D(D.bE_,B.x(s,A.l,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Xz,new B.p(A.as,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.daF.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.db3.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.db4.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.daD.prototype={
$1(d){var w=this.a
return w.m(new C.daz(w))},
$S:24}
C.daz.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daE.prototype={
$1(d){var w=this.a
return w.m(new C.day(w))},
$S:72}
C.day.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daC.prototype={
$0(){var w=this.a
return w.m(new C.daA(w))},
$S:0}
C.daA.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daB.prototype={
$0(){var w=this.a.a.e
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.eJb.prototype={
$0(){return $.bmU=!$.bmU},
$S:0}
C.eJ1.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXJ())u.azA()},
$S:0}
C.eJa.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJ2.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJ3.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azA()},
$S:0}
C.eIY.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eIZ.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJ_.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJ0.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJ8.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1733}
C.eJ9.prototype={
$2(d,e){var w
if(e.gc5(e)===A.io)return new B.d0(e,!1,d,null)
w=this.a
return w.cBe(w.e,d,e)},
$S:459}
C.eJ4.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ5.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ6.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ7.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fx(A.aa,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJc.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZR().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZR().x
t===$&&B.c()
return new C.b3l(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JD(v.c,t,!0,new B.bJ("cine"+u,x.W))},
$S:670}
C.eJe.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.c1,x.w).w.a.a*0.55)w.azA()
else w.cpw()},
$S:72}
C.eJd.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fUr.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:460}
C.fUA.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.fUx(d),w,w),B.bN(!1,D.fVf,w,w,!0,w,w,w,new C.fUy(d,this.b,v),w,w),B.bI(A.aWU,w,new C.fUz(d,v,this.c),w)],x.p),w,w,P.ue,new B.a6(320,w,t,w),w,w,w,w,D.fWN,w)},
$S:18}
C.fUx.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fUy.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).O(null)
C.hgN(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUz.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aS_(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRq(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.clp.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:545}
C.fUw.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fpH.prototype={
$1(d){return C.hgL(C.X5(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h2C.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.h2D.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,D.hxa,0.94+w*0.06,null,null),w)},
$S:458}
C.h2E.prototype={
$1(d){var w=this
return new C.X7(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eII.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIE.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eIH.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X8(u,this.b,w.gaQQ(),v,null)},
$S:z+99}
C.eIF.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIG.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIJ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIN.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIO.prototype={
$0(){var w=this.a
return w.m(new C.eIM(w))},
$S:0}
C.eIM.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eIP.prototype={
$0(){var w=this.a
return w.m(new C.eIL(w))},
$S:0}
C.eIL.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eIQ.prototype={
$1(d){return this.a.bNO(d,this.b)},
$S:z+100}
C.eID.prototype={
$0(){var w=this.a
return w.m(new C.eIC(w,this.b))},
$S:0}
C.eIC.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eIR.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eIS.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eIT.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIU.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.M(x.q).f.U(D.fiz)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCl.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCk())},
$S:0}
C.eCk.prototype={
$0(){},
$S:0}
C.eCm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.eCh.prototype={
$1(d){return this.a.m(new C.eCg())},
$S:2}
C.eCg.prototype={
$0(){},
$S:0}
C.eCi.prototype={
$1(d){return this.a.b20()},
$S:2}
C.eCj.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIX.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIW(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIW.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fOI.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k1(this.c,new C.fOH(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:227}
C.fOH.prototype={
$3(d,e,f){return new C.JD(e,!1,!1,new B.bJ(e.a,x.W))},
$S:z+102}
C.fOJ.prototype={
$1(d){var w=null
return B.oK(!1,B.at(new C.bxG(this.a,this.b,w),w,w,w),w,x.z)},
$S:337}
C.fON.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.md,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.aq$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qi))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1736}
C.fOO.prototype={
boG(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.hh),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eS(A.dN.gaU(r))],"image/png"))
t.toString
s=An.h76(t)
w=4
return B.b(new B.qp(s,"load",!1,x.ev).gH(0).dg(0,A.jZ),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boG(d)},
$S:1737}
C.fOK.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fOL.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:155}
C.fOM.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fjC.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fte,A.K,w,w)},
$S:1738}
C.fjD.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.by(v,B.k9(A.bp,w,A.dK,8,w,e===0?w:e,w),A.aq)},
$S:574}
C.eqB.prototype={
$1(d){this.a.a06()
return null},
$S:11}
C.eqz.prototype={
$0(){return this.a.e=D.bzO},
$S:0}
C.eqA.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.cpF.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.cpG.prototype={
$2(d,e){return(d|e)>>>0},
$S:61};(function aliases(){var w=C.aNS.prototype
w.bzT=w.t
w=C.aNm.prototype
w.bzm=w.t
w=C.aN7.prototype
w.bz6=w.t
w=C.aNl.prototype
w.bzl=w.t
w=C.aNQ.prototype
w.bzR=w.t
w=C.aP9.prototype
w.bBl=w.t
w=C.aM2.prototype
w.bxZ=w.t
w=C.aO2.prototype
w.bA3=w.t
w=C.aO3.prototype
w.bA4=w.t
w=C.b52.prototype
w.bus=w.aF6})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ipF","aoX",104)
v(C.aKZ.prototype,"gc8T","ZY",0)
var r
u(r=C.azt.prototype,"gcCG","cCH",38)
v(r,"gc9K","aeH",0)
v(r=C.azp.prototype,"gb0n","EB",3)
v(r,"gc9H","c9I",3)
v(r,"gayG","yq",0)
v(r,"gaAJ","JR",0)
t(C,"iqC","hVf",105)
v(C.aFB.prototype,"gccL","ccM",3)
s(C,"iqN",0,null,["$4$paper$photo$request$template"],["fVR"],106,0)
s(C,"iqM",0,null,["$5$doc$history$instruction$photo$template"],["bEP"],107,0)
v(r=C.aFS.prototype,"gcdu","Jw",0)
v(r,"gbNg","XL",0)
v(r,"gcdx","afz",0)
v(r,"gcdw","a_T",0)
v(r,"gb1G","ES",0)
v(C.aFV.prototype,"gcdC","a_V",0)
v(r=C.aHj.prototype,"gb1T","QD",0)
v(r,"gcup","b6f",3)
v(r,"gcE4","aDg",86)
v(r,"gbRe","abp",0)
v(r,"gce2","B4",0)
v(r=C.aJf.prototype,"gcof","a1g",0)
v(r,"gcon","a1j",0)
v(r,"gbG6","a9N",0)
v(r,"gce6","afL",0)
v(C.aJe.prototype,"gce7","afM",0)
v(C.aDg.prototype,"gbF5","a9A",0)
v(C.aBD.prototype,"gce8","a05",0)
w(C,"ir_","iom",12)
w(C,"iqY","ilf",12)
w(C,"iqZ","ink",12)
v(r=C.aGb.prototype,"gcHo","cHp",3)
v(r,"gcsF","csG",3)
u(r,"gEY","agv",7)
v(r,"gbKU","atC",3)
u(r,"gEZ","b3f",7)
v(r,"gcgo","agc",0)
v(r,"gcff","agb",0)
v(r,"gciz","agw",0)
v(r,"gbNd","aaX",0)
v(r,"gcjt","a0H",0)
v(r,"gcju","agN",0)
v(r,"gck0","agU",0)
v(r,"gciM","agz",0)
v(r,"gbRq","abt",0)
v(r,"gaUu","aUv",3)
v(r,"gaTA","aTB",3)
v(r,"gaP4","aP5",3)
v(r,"gaTz","aut",3)
u(r,"gbFm","bFn",80)
v(r,"gaCN","b9r",3)
v(r,"gcfh","cfi",3)
v(r,"gc1N","c1O",3)
v(r,"gbPJ","bPK",3)
v(r=C.aGe.prototype,"gcGa","cGb",3)
v(r,"gcFO","cFP",3)
t(C,"ir0","ioD",2)
v(r=C.aGc.prototype,"gcee","JB",0)
v(r,"gcwr","S8",0)
v(r,"gceb","JA",0)
v(r,"gcII","a3R",0)
v(r,"gckc","ah0",0)
v(C.aGa.prototype,"gcef","b20",3)
v(r=C.aGd.prototype,"gbSg","abD",0)
u(r,"gcec","ced",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oi,C.SO,C.bKt,C.bIL,C.cGT,C.cGR,C.bSI,C.baN,C.cGS,C.bHk,C.cpz,C.cpx,C.cpy,C.cpw,C.aut,C.cpv,C.bTK,C.oJ,C.aGN,C.jC,C.o4,C.a8Z,C.Ac,C.lx,C.oT,C.mp,C.Ad,C.o8,C.a96,C.asO,C.b3m,C.eq0,C.lu,C.Fs,C.ew,C.jb,C.Fj,C.yb,C.eP,C.m0,C.i4,C.jY,C.a97,C.agi,C.b3n,C.b52,C.a49])
u(B.jw,[C.cOU,C.c3H,C.fJU,C.cQq,C.cPN,C.fPq,C.e8h,C.e8g,C.eqE,C.eqD,C.fQP,C.fqT,C.fqU,C.cjE,C.cjF,C.cjG,C.eui,C.f2p,C.f1N,C.f1M,C.f2Q,C.f2n,C.f2g,C.f2z,C.f3f,C.fz_,C.f9z,C.f9y,C.fa1,C.eq3,C.fUn,C.e3v,C.h0a,C.fRb,C.clh,C.clf,C.clk,C.fRG,C.fRH,C.fRI,C.fRJ,C.cl1,C.cl2,C.dQF,C.ckZ,C.fRF,C.fgZ,C.e1d,C.ckS,C.epK,C.fPf,C.eFW,C.eGk,C.eGh,C.eGg,C.eGr,C.eGq,C.eHW,C.eHV,C.eGa,C.eG9,C.eCK,C.eDU,C.eGT,C.eId,C.eIc,C.eDH,C.eES,C.eCr,C.daG,C.eJ8,C.eJ9,C.eJ4,C.eJ5,C.eJ6,C.eJ7,C.eJc,C.clp,C.eII,C.eIT,C.cpG])
u(B.ht,[C.cOV,C.cOW,C.bTL,C.fGK,C.c3G,C.c3J,C.fXE,C.fi8,C.fi_,C.fif,C.fpI,C.fpJ,C.fJV,C.fJT,C.fX5,C.fGk,C.fY_,C.cQg,C.cQl,C.cQn,C.cQj,C.cQo,C.cQh,C.cQp,C.cQc,C.cQ9,C.cQ8,C.cQf,C.cPI,C.cPG,C.fOs,C.fOt,C.fu3,C.fPr,C.fPx,C.ft4,C.cfY,C.fOq,C.fOr,C.fJh,C.fJi,C.fPw,C.fPs,C.fPu,C.fPv,C.fPt,C.h0s,C.fJl,C.fJm,C.fJp,C.fJq,C.fJt,C.fJu,C.h1V,C.frl,C.h25,C.etB,C.etC,C.etD,C.etj,C.etv,C.etw,C.ety,C.cjD,C.cjB,C.cjC,C.fP6,C.fP8,C.fP7,C.fqV,C.fqW,C.h28,C.eun,C.euo,C.euf,C.eug,C.euj,C.euk,C.h2o,C.f3g,C.f2G,C.f2q,C.f2D,C.f1I,C.f1J,C.f1K,C.f1O,C.f1P,C.f35,C.f3c,C.f3e,C.f2P,C.f2R,C.f2V,C.f2W,C.f2X,C.f30,C.f2S,C.f2T,C.f2_,C.f20,C.f21,C.f22,C.f23,C.f24,C.f25,C.f26,C.f27,C.f1l,C.f1m,C.f1n,C.f1o,C.f1q,C.f1r,C.f1U,C.f1V,C.f1W,C.f1X,C.f1Y,C.f1v,C.f1w,C.f1x,C.f1y,C.f2f,C.f2y,C.fMv,C.fMu,C.cl8,C.fyZ,C.fUj,C.fUc,C.fUf,C.fSa,C.fSb,C.fSc,C.fMC,C.fMB,C.fMA,C.fMy,C.fqP,C.fqQ,C.fqR,C.h2A,C.f9B,C.f9C,C.f9v,C.f9p,C.f9V,C.f9W,C.f9Y,C.f9Z,C.f9U,C.h2z,C.f9g,C.fyf,C.eq2,C.fUl,C.fUm,C.fUo,C.fUh,C.fUi,C.h1N,C.dt9,C.dtf,C.eq1,C.fmX,C.fmZ,C.fmY,C.fmW,C.fNG,C.fNI,C.fpb,C.fTO,C.fTP,C.fTQ,C.fU0,C.fU5,C.fU6,C.fU7,C.fU8,C.fU9,C.fUa,C.fUb,C.fTR,C.fTS,C.fTT,C.fTU,C.fTV,C.fTW,C.fTX,C.fTY,C.fTZ,C.fU_,C.fU1,C.fU2,C.fU3,C.fU4,C.fLw,C.fxy,C.fxx,C.fUu,C.e3w,C.e3u,C.f8p,C.cfz,C.cfB,C.h0c,C.dir,C.dit,C.h0b,C.h09,C.h2y,C.fR7,C.di1,C.fJx,C.fJy,C.cl6,C.cl7,C.cl5,C.ckW,C.ckX,C.ckT,C.ckU,C.ckV,C.cln,C.cli,C.cld,C.cle,C.clg,C.clj,C.cll,C.fRK,C.cl0,C.cl3,C.cl4,C.cla,C.clb,C.fUB,C.fTI,C.cl_,C.ckY,C.fRE,C.fAh,C.ckR,C.f5U,C.fDo,C.eIz,C.eEZ,C.eF_,C.eGz,C.eGn,C.eGo,C.eEm,C.eIk,C.eIl,C.eIm,C.eDL,C.eG2,C.eG4,C.eFF,C.eFC,C.eEV,C.eEW,C.eFM,C.eDN,C.eFY,C.eFZ,C.eFX,C.eG0,C.eG_,C.eGi,C.eGj,C.eGl,C.eGe,C.eE5,C.eE2,C.eGs,C.eDV,C.eIj,C.eCt,C.eDY,C.eDX,C.eDb,C.eDg,C.eDe,C.eDc,C.eIr,C.eIs,C.eIt,C.eIq,C.eHY,C.eHX,C.eHR,C.eHT,C.eHJ,C.eIh,C.eIf,C.eCB,C.eCx,C.eET,C.eDk,C.eCM,C.eCL,C.eD7,C.eD8,C.eEk,C.eDm,C.eDq,C.eGb,C.eHK,C.eHL,C.eHM,C.eHN,C.eDP,C.eDQ,C.eDR,C.eFl,C.eEg,C.eE8,C.eEf,C.eFv,C.eFw,C.eHi,C.eHk,C.eHE,C.eHG,C.eHl,C.eHm,C.eDi,C.eEY,C.eEX,C.eI7,C.eDG,C.eDy,C.eDz,C.eDC,C.eDD,C.eFA,C.eEE,C.eEF,C.eEG,C.eEH,C.eEI,C.eEJ,C.eEK,C.eEL,C.eEM,C.eEN,C.eEO,C.eGw,C.daD,C.daE,C.eJe,C.fUr,C.fUA,C.fUq,C.fUw,C.fpH,C.h2C,C.h2D,C.h2E,C.eIH,C.eIQ,C.eCm,C.eCh,C.eCi,C.fOI,C.fOH,C.fOJ,C.fOO,C.fOK,C.fOL,C.fjC,C.fjD,C.eqB,C.cpF])
u(B.iJ,[C.cOX,C.fi4,C.fi9,C.fia,C.fi5,C.fi6,C.fi7,C.fhY,C.fhZ,C.fi0,C.fi1,C.fie,C.fid,C.fi3,C.fi2,C.fib,C.fic,C.fih,C.fii,C.fig,C.cQi,C.cQm,C.cQk,C.cQa,C.cQb,C.cQd,C.cQ6,C.cQ7,C.cQe,C.cQ5,C.cQ4,C.cQ3,C.cPx,C.cPw,C.cPz,C.cPH,C.cPA,C.cPy,C.cPC,C.cPD,C.cPE,C.cPB,C.cPF,C.cPJ,C.cPK,C.cPL,C.cPM,C.fJf,C.fJg,C.fJd,C.fJe,C.elS,C.elQ,C.elR,C.elT,C.elU,C.e8f,C.fJj,C.fJk,C.fJn,C.fJo,C.fJr,C.fJs,C.eqC,C.fRe,C.fRd,C.etA,C.etz,C.etd,C.et9,C.etk,C.etl,C.etm,C.etf,C.etg,C.eth,C.eti,C.ete,C.etb,C.etc,C.ets,C.ett,C.etr,C.etu,C.etq,C.etp,C.eto,C.etx,C.etn,C.eta,C.eum,C.eua,C.eub,C.euh,C.euc,C.eue,C.eud,C.eul,C.f28,C.f2w,C.f1S,C.f1T,C.f1Q,C.f1R,C.f2C,C.f2B,C.f2A,C.f2F,C.f2E,C.f1H,C.f1L,C.f1G,C.f1F,C.f1C,C.f1E,C.f1D,C.f3d,C.f36,C.f34,C.f37,C.f33,C.f38,C.f32,C.f39,C.f3a,C.f3b,C.f31,C.f2O,C.f2J,C.f2U,C.f2N,C.f2Y,C.f2M,C.f2Z,C.f2L,C.f3_,C.f2K,C.f2t,C.f2s,C.f2u,C.f2r,C.f2v,C.f2l,C.f2k,C.f2m,C.f2j,C.f2i,C.f2h,C.f1p,C.f1k,C.f1z,C.f1u,C.f1A,C.f1t,C.f1B,C.f1s,C.f2o,C.f2c,C.f2b,C.f2d,C.f2a,C.f2e,C.f29,C.f2x,C.f2I,C.f2H,C.f1Z,C.fUe,C.fUg,C.fUk,C.fMz,C.fP_,C.fOY,C.fOZ,C.f9D,C.f9E,C.f9A,C.f9u,C.f9t,C.f9w,C.f9x,C.f9j,C.f9k,C.f9m,C.f9n,C.f9o,C.f9l,C.f9q,C.f9R,C.f9S,C.f9Q,C.f9T,C.f9P,C.f9O,C.f9N,C.f9X,C.f9M,C.f9L,C.f9K,C.fa_,C.f9J,C.fa0,C.f9I,C.f9H,C.f9r,C.f9s,C.f9G,C.f9F,C.f9c,C.f9d,C.f9e,C.f9f,C.f9b,C.f9h,C.f9i,C.dt8,C.dta,C.dtd,C.dte,C.dtc,C.dtb,C.fNH,C.fLx,C.cfA,C.cfC,C.dik,C.dip,C.diq,C.dio,C.din,C.dis,C.dim,C.dil,C.diu,C.h08,C.dp8,C.dp9,C.dpa,C.fJv,C.fJw,C.clo,C.eCn,C.eCo,C.eCp,C.eCq,C.fAf,C.fAg,C.e1f,C.e1e,C.dfe,C.dfd,C.eIB,C.eIA,C.eF0,C.eHH,C.eIx,C.eGx,C.eIn,C.eIo,C.eIy,C.eFG,C.eDJ,C.eDK,C.eG3,C.eFE,C.eFB,C.eFD,C.eFH,C.eFI,C.eFJ,C.eFK,C.eFL,C.eFN,C.eDO,C.eFQ,C.eFR,C.eFS,C.eFT,C.eFU,C.eFV,C.eFP,C.eG1,C.eGf,C.eGd,C.eGm,C.eFO,C.eE3,C.eE4,C.eE6,C.eGp,C.eGt,C.eCI,C.eE1,C.eE_,C.eGB,C.eDW,C.eGA,C.eDM,C.eEn,C.eIi,C.eHI,C.eCJ,C.eCG,C.eCw,C.eCs,C.eCu,C.eDZ,C.eDa,C.eDf,C.eDd,C.eD9,C.eGc,C.eIu,C.eHU,C.eHP,C.eHQ,C.eHS,C.eER,C.eEQ,C.eIg,C.eCz,C.eCA,C.eCC,C.eCD,C.eCH,C.eCy,C.eGy,C.eIp,C.eEU,C.eDj,C.eCv,C.eEl,C.eCE,C.eCN,C.eCO,C.eCP,C.eD_,C.eD2,C.eD3,C.eD4,C.eD5,C.eD6,C.eCQ,C.eCR,C.eCS,C.eCT,C.eCU,C.eCV,C.eCW,C.eCX,C.eCY,C.eCZ,C.eD0,C.eD1,C.eEj,C.eEi,C.eEh,C.eCF,C.eDn,C.eDl,C.eDo,C.eDp,C.eE0,C.eG7,C.eG8,C.eG5,C.eG6,C.eHO,C.eDT,C.eDS,C.eFk,C.eFj,C.eFm,C.eFi,C.eFn,C.eFh,C.eFo,C.eFg,C.eFp,C.eFf,C.eFq,C.eFe,C.eFr,C.eFd,C.eFs,C.eFc,C.eF5,C.eF6,C.eF7,C.eF4,C.eF8,C.eF3,C.eF9,C.eF2,C.eFa,C.eF1,C.eFb,C.eEd,C.eEe,C.eE7,C.eE9,C.eEa,C.eEb,C.eEc,C.eIv,C.eIw,C.eFu,C.eFt,C.eFx,C.eGU,C.eGV,C.eGW,C.eH6,C.eHh,C.eHs,C.eHz,C.eHA,C.eHB,C.eHC,C.eHD,C.eGX,C.eGY,C.eGZ,C.eH_,C.eH0,C.eH1,C.eH2,C.eH3,C.eH4,C.eH5,C.eH7,C.eH8,C.eH9,C.eHa,C.eHb,C.eHc,C.eHd,C.eHe,C.eHf,C.eGK,C.eHg,C.eGS,C.eGR,C.eHj,C.eGQ,C.eGG,C.eHF,C.eGP,C.eGF,C.eGD,C.eGO,C.eGE,C.eGC,C.eHn,C.eGN,C.eHo,C.eHp,C.eHq,C.eHr,C.eGM,C.eHt,C.eHu,C.eHv,C.eGL,C.eHw,C.eGJ,C.eHx,C.eGI,C.eHy,C.eGH,C.eDh,C.eI0,C.eI_,C.eI1,C.eHZ,C.eEq,C.eEp,C.eEr,C.eEo,C.eIb,C.eI6,C.eIa,C.eI2,C.eI3,C.eI4,C.eI5,C.eI8,C.eI9,C.eIe,C.eDI,C.eDv,C.eDw,C.eDx,C.eDu,C.eDB,C.eDA,C.eDt,C.eDs,C.eDE,C.eDr,C.eDF,C.eFz,C.eFy,C.eED,C.eEC,C.eEB,C.eEA,C.eEz,C.eEy,C.eEx,C.eEw,C.eEt,C.eEv,C.eEu,C.eEs,C.eEP,C.eGu,C.eGv,C.daF,C.db3,C.db4,C.daz,C.day,C.daC,C.daA,C.daB,C.eJb,C.eJ1,C.eJa,C.eJ2,C.eJ3,C.eIY,C.eIZ,C.eJ_,C.eJ0,C.eJd,C.fUx,C.fUy,C.fUz,C.eIE,C.eIF,C.eIG,C.eIJ,C.eIK,C.eIN,C.eIO,C.eIM,C.eIP,C.eIL,C.eID,C.eIC,C.eIR,C.eIS,C.eIU,C.eIV,C.eCl,C.eCk,C.eCg,C.eCj,C.eIX,C.eIW,C.fON,C.fOM,C.eqz,C.eqA])
t(C.aTo,B.M)
u(B.lD,[C.a4S,C.ayV,C.axz,C.y9,C.yc,C.la,C.tM,C.Ca,C.rU,C.wv,C.atl,C.JE,C.asN,C.vd,C.mS,C.hF,C.a9K])
u(C.bSI,[C.cGU,C.bSJ])
u(C.cpz,[C.cpD,C.aus])
t(C.cpC,C.cpx)
t(C.cpB,C.cpw)
t(C.cpE,C.cpB)
t(C.cpA,C.cpy)
t(C.cpu,C.cpv)
t(C.cA1,B.ax1)
t(C.a9w,B.xX)
u(B.ag,[C.a28,C.ZQ,C.ZO,C.arU,C.WW,C.WX,C.a17,C.a1E,C.a1D,C.aFM,C.a00,C.Ok,C.a_y,C.a_T,C.apP,C.aKE,C.Wd,C.aBi,C.a8P,C.OO,C.aAF,C.KF,C.a0K,C.X7,C.X8,C.aG9,C.asS,C.a8Q])
u(B.ah,[C.aKZ,C.azt,C.azp,C.aFB,C.aFS,C.aFV,C.aHj,C.aJf,C.aJe,C.aNS,C.aDg,C.aNm,C.aBD,C.bio,C.aN7,C.aP9,C.aNl,C.bgb,C.aNQ,C.aO2,C.aM2,C.beX,C.aO3,C.aGc,C.bmT,C.aGa,C.aGd,C.bmC])
u(B.ax,[C.azr,C.aeq,C.adP,C.blD,C.aet,C.ag8,C.b2Y,C.bvf,C.b3i,C.bo9,C.btM,C.b1c,C.b3l,C.aew,C.aeN,C.b3j,C.JD,C.b1f,C.bfc,C.Qx,C.KL,C.bjZ,C.bjY,C.bxG])
u(B.I4,[C.beE,C.bwE,C.aLl,C.bho,C.bua])
u(B.mk,[C.beD,C.bb5,C.bu7,C.beb,C.bhN,C.bk5,C.bgS,C.bhJ,C.bhq,C.bqv,C.bce,C.bbS,C.bxC,C.buA,C.btI,C.bgL,C.b3g,C.bsC,C.btF])
t(C.bmz,C.aNS)
t(C.blV,C.aNm)
t(C.blF,C.aN7)
t(C.bx6,C.aP9)
t(C.blR,C.aNl)
t(C.bmx,C.aNQ)
t(C.bzZ,C.aO2)
t(C.aGb,C.bzZ)
t(C.beY,C.aM2)
t(C.aGe,C.aO3)
t(C.bxs,B.j2)
t(C.a9J,B.kI)
t(C.cpH,C.b52)
t(C.ajr,C.a49)
u(B.YP,[C.aTe,C.aUI])
t(C.ayv,C.aTe)
w(C.aNS,B.cb)
w(C.aNm,B.cb)
w(C.aN7,B.cb)
w(C.aNl,B.cb)
w(C.aNQ,B.cb)
w(C.aP9,B.cb)
w(C.aM2,B.eQ)
w(C.aO2,B.cb)
v(C.bzZ,B.eB)
w(C.aO3,B.cb)})()
B.iT(b.typeUniverse,JSON.parse('{"aU_":{"hM":["aU_"]},"oi":{"aU_":[],"hM":["aU_"]},"aTo":{"M":["SO"],"M.E":"SO"},"a9w":{"xX":[],"oC":[]},"a28":{"ag":[],"v":[]},"aKZ":{"ah":["a28"]},"ZQ":{"ag":[],"v":[]},"ZO":{"ag":[],"v":[]},"azt":{"ah":["ZQ"]},"azp":{"ah":["ZO"]},"azr":{"ax":[],"v":[]},"arU":{"ag":[],"v":[]},"aFB":{"ah":["arU"]},"aeq":{"ax":[],"v":[]},"adP":{"ax":[],"v":[]},"aet":{"ax":[],"v":[]},"ag8":{"ax":[],"v":[]},"blD":{"ax":[],"v":[]},"WW":{"ag":[],"v":[]},"aFS":{"ah":["WW"]},"b2Y":{"ax":[],"v":[]},"beE":{"aC":[]},"beD":{"aC":[]},"bwE":{"aC":[]},"bb5":{"aC":[]},"bu7":{"aC":[]},"WX":{"ag":[],"v":[]},"aFV":{"ah":["WX"]},"beb":{"aC":[]},"a17":{"ag":[],"v":[]},"aHj":{"ah":["a17"]},"bhN":{"aC":[]},"a1E":{"ag":[],"v":[]},"a1D":{"ag":[],"v":[]},"aFM":{"ag":[],"v":[]},"a00":{"ag":[],"v":[]},"aJf":{"ah":["a1E"]},"aJe":{"ah":["a1D"]},"bmz":{"ah":["aFM"]},"bk5":{"aC":[]},"aDg":{"ah":["a00"]},"bvf":{"ax":[],"v":[]},"b3i":{"ax":[],"v":[]},"bo9":{"ax":[],"v":[]},"Ok":{"ag":[],"v":[]},"a_y":{"ag":[],"v":[]},"blV":{"ah":["Ok"]},"btM":{"ax":[],"v":[]},"bgS":{"aC":[]},"b1c":{"ax":[],"v":[]},"aBD":{"ah":["a_y"]},"a_T":{"ag":[],"v":[]},"bio":{"ah":["a_T"]},"bhJ":{"aC":[]},"bhq":{"aC":[]},"bqv":{"aC":[]},"bce":{"aC":[]},"bbS":{"aC":[]},"bxC":{"aC":[]},"buA":{"aC":[]},"btI":{"aC":[]},"bgL":{"aC":[]},"apP":{"ag":[],"v":[]},"b3l":{"ax":[],"v":[]},"blF":{"ah":["apP"]},"aew":{"ax":[],"v":[]},"aeN":{"ax":[],"v":[]},"aKE":{"ag":[],"v":[]},"Wd":{"ag":[],"v":[]},"JD":{"ax":[],"v":[]},"aBi":{"ag":[],"v":[]},"a8P":{"ag":[],"v":[]},"b3j":{"ax":[],"v":[]},"b3g":{"aC":[]},"bx6":{"ah":["aKE"]},"aLl":{"aC":[]},"blR":{"ah":["Wd"]},"bgb":{"ah":["aBi"]},"bmx":{"ah":["a8P"]},"b1f":{"ax":[],"v":[]},"bho":{"aC":[]},"bsC":{"aC":[]},"btF":{"aC":[]},"aAF":{"ag":[],"v":[]},"KF":{"ag":[],"v":[]},"a0K":{"ag":[],"v":[]},"KL":{"ax":[],"v":[]},"OO":{"ag":[],"v":[]},"aGb":{"ah":["OO"],"eB":[]},"beY":{"ah":["aAF"]},"bfc":{"ax":[],"v":[]},"beX":{"ah":["KF"]},"Qx":{"ax":[],"v":[]},"aGe":{"ah":["a0K"]},"bua":{"aC":[]},"bjZ":{"ax":[],"v":[]},"bjY":{"ax":[],"v":[]},"X7":{"ag":[],"v":[]},"X8":{"ag":[],"v":[]},"aG9":{"ag":[],"v":[]},"asS":{"ag":[],"v":[]},"aGc":{"ah":["X7"]},"bmT":{"ah":["X8"]},"aGa":{"ah":["aG9"]},"bxs":{"j2":[]},"aGd":{"ah":["asS"]},"bxG":{"ax":[],"v":[]},"a8Q":{"ag":[],"v":[]},"bmC":{"ah":["a8Q"]},"a9J":{"kI":["fw<eV>"],"ku":["fw<eV>"]},"ajr":{"a49":[]},"aTe":{"jf":[],"fi":[]},"ayv":{"jf":[],"fi":[]},"aUI":{"jf":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mw"),U:w("vZ<ql>"),bz:w("u"),M:w("df<n>"),bo:w("jS"),g7:w("Ua"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C2"),fS:w("EF"),an:w("IO"),bm:w("O<SO>"),X:w("O<SR>"),f3:w("O<aU_>"),aK:w("O<nq>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lS>"),d5:w("O<aB<bB<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<ny>"),cd:w("O<ai<jC>>"),ez:w("O<a8<n,aE>>"),d:w("O<a8<n,@>>"),B:w("O<mO>"),h:w("O<jC>"),gE:w("O<Ac>"),k:w("O<oJ>"),g:w("O<m0>"),D:w("O<i4>"),u:w("O<eP>"),m:w("O<vd>"),i:w("O<hF>"),aC:w("O<a96>"),o:w("O<Ad>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j0>"),J:w("O<js>"),gx:w("O<pz<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j2>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baN>"),bx:w("O<aGN>"),gz:w("O<agi>"),x:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<G?>"),cA:w("O<ck>"),A:w("cw<ah<ag>>"),gL:w("ai<oJ>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bB<G,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<o8,n>"),cT:w("N<jY,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<G,q3>"),gh:w("N<mS,jE<mS>>"),w:w("iC"),ei:w("iF"),g2:w("rK"),fB:w("Fj"),b6:w("Ac"),gX:w("a8Z"),dt:w("lx"),ea:w("oJ"),bt:w("m0"),I:w("i4"),F:w("eP"),fO:w("mS"),ff:w("vd"),fP:w("hF"),Q:w("wv"),dO:w("asO"),a:w("cr"),C:w("aE"),dw:w("aut"),di:w("a9K"),Y:w("eV"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FP"),dB:w("dt<o>"),bJ:w("dt<n>"),_:w("e0<n>"),N:w("n"),fw:w("ql"),bO:w("au"),K:w("br<o>"),b:w("br<F>"),E:w("dK"),W:w("bJ<n>"),ac:w("bJ<G>"),ex:w("k1<m0>"),cI:w("k1<n>"),cl:w("k1<F>"),b4:w("Y<lu>"),a8:w("Y<mp>"),fR:w("Y<+(n,n)>"),co:w("ea<o>"),l:w("v"),b2:w("c2<~>"),ev:w("qp<e_>"),dT:w("bk<~>"),q:w("my"),y:w("P"),gR:w("F"),z:w("@"),S:w("G"),at:w("bd?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i4?"),go:w("b3n?"),a6:w("a97?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1N=new B.bM(A.aA,null,null,H.asg,null)
D.b1W=new B.d9(0,-0.15)
D.b1Y=new B.d9(0.62,0)
D.b20=new B.d9(-0.35,-0.45)
D.b2b=new B.d9(0.9,-0.85)
D.b4m=new B.be(H.Uw,H.Uw,A.fK,A.fK)
D.b4C=new B.ay(A.b9,1,A.r,-1)
D.bqk=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4O=new B.ay(D.bqk,1,A.r,-1)
D.b5_=new B.ay(A.aE,1.5,A.r,-1)
D.b54=new B.ay(A.b9,1.6,A.r,-1)
D.b5k=new B.ay(A.aE,1.4,A.r,-1)
D.b6H=new B.p(null,null,null,null,null,K.I6,A.a7)
D.c7D=new B.a9(A.a6,A.aa,A.x,G.a5R,null,null)
D.b6P=new B.p(null,null,null,null,null,D.c7D,A.a7)
D.aes=new B.p(A.as,null,null,A.tP,null,null,A.n)
D.bj9=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bqh=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d6n=w([D.bj9,D.bqh],x.O)
D.ez0=new B.c0(A.A,0.5,A.x,null,0,D.d6n,null,null)
D.b77=new B.p(null,null,null,null,null,D.ez0,A.a7)
D.Zd=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5A=new B.bG(Q.vP,A.a1,A.a1,A.a1)
D.b79=new B.p(D.Zd,null,D.b5A,null,null,null,A.n)
D.c9l=new B.a9(A.a6,A.aa,A.x,A.Sa,null,null)
D.b7g=new B.p(null,null,null,null,null,D.c9l,A.a7)
D.ag5=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7j=new B.p(D.ag5,null,null,A.rk,null,null,A.n)
D.b7n=new B.p(A.jX,null,null,null,null,null,A.a7)
D.b7q=new B.p(A1.ahm,null,H.ae4,A.mG,null,null,A.n)
D.Fj=new B.p(A.dJ,null,null,null,null,null,A.a7)
D.b7x=new B.p(null,null,null,null,null,E.wQ,A.a7)
D.dbI=w([E.aik,A.c3],x.O)
D.c8Y=new B.a9(A.b7,A.ba,A.x,D.dbI,null,null)
D.b7B=new B.p(null,null,null,A.mG,null,D.c8Y,A.n)
D.dnl=w([A.bl,A.dJ,A.jW],x.O)
D.a3R=new B.a9(A.aA,A.aF,A.x,D.dnl,null,null)
D.b7O=new B.p(null,null,null,null,null,D.a3R,A.n)
D.b7P=new B.p(D.ag5,null,null,A.l9,null,null,A.n)
D.cAV=w([A.d6,A.bl],x.O)
D.c8P=new B.a9(A.aA,A.aF,A.x,D.cAV,null,null)
D.b7T=new B.p(null,null,null,null,null,D.c8P,A.n)
D.b82=new B.p(null,null,null,null,null,G.uY,A.a7)
D.b8n=new B.p(A.aim,null,null,null,null,null,A.a7)
D.bka=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeC=new B.ac(0,A.G,D.bka,A.Jx,28)
D.baw=new B.aYc()
D.bb4=new C.cA1()
D.af6=new B.cg(A.A,null,null,A.a3G,null)
D.bdX=new B.fk(null,null,null,null,null,E.nx,null,null,null,null)
D.bbQ=new B.cg(A.A,null,null,D.bdX,null)
D.bSY=new B.ae(A.ed,28,A.c,null,null,null)
D.bcl=new B.cg(A.A,null,null,D.bSY,null)
D.bdU=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bcI=new B.cg(A.A,null,null,D.bdU,null)
D.bTh=new B.ae(K.PJ,40,A.bC,null,null,null)
D.bcJ=new B.cg(A.A,null,null,D.bTh,null)
D.beP=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bf1=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfu=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfG=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgj=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgA=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgC=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mn=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bh4=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bhc=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agq=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bi3=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biX=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agG=new B.u(1,1,1,0.9725490196078431,A.q)
D.bji=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjx=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjA=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjR=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkg=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.blW=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YV=new B.u(0.8509803921568627,0,0,0,A.q)
D.bm6=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmd=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahG=new B.u(0.6,0,0,0,A.q)
D.ahI=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bnX=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.ua=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.boq=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.boU=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bpj=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiD=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zp=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BR=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.N1=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jB=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aj9=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zy=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bt7=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btD=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btT=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_0=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bv5=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.ym=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvH=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bw1=new B.hL(A.aT,!0,null,null)
D.fzX=new B.H(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h01=new B.B("Bio link",null,D.fzX,null,null,null,null,null,null,null,null,null)
D.bcD=new B.cg(A.A,null,null,D.h01,null)
D.bwg=new B.hL(A.Bu,!0,D.bcD,null)
D.Nw=new C.a4S(0,"none")
D.akp=new C.a4S(1,"deflate")
D.akq=new C.a4S(2,"bzip2")
D.bxf=new B.kC(0.165,0.84,0.44,1)
D.dc1=w([A.cc,A.dK,A.aE],x.O)
D.c85=new B.a9(A.aA,A.aF,A.x,D.dc1,null,null)
D.b6M=new B.p(null,null,null,null,null,D.c85,A.n)
D.c1q=new B.ae(A.f5,null,A.ab,null,null,null)
D.bdh=new B.cg(A.A,null,null,D.c1q,null)
D.bxO=new B.l5(D.b6M,A.bj,D.bdh,null)
D.btm=new B.u(0.058823529411764705,1,1,1,A.q)
D.dfu=w([A.by,A.ru,A.ru,D.btm],x.O)
D.cSp=w([0,0.32,0.7,1],x.x)
D.c8F=new B.a9(A.aA,A.aF,A.x,D.dfu,D.cSp,null)
D.b6B=new B.p(null,null,null,null,null,D.c8F,A.n)
D.bxU=new B.l5(D.b6B,A.bj,null,null)
D.bz1=new B.mF(1,1,null,null,null,A.bp,null)
D.bz4=new B.mF(1,null,null,null,null,D.Zy,null)
D.bzy=new B.bd(125e4)
D.bzE=new B.bd(17e4)
D.bzO=new B.bd(35964e8)
D.bzV=new B.bd(55e4)
D.bzZ=new B.bd(68e4)
D.bAp=new B.ik(0,0,0,5)
D.bAF=new B.R(0,16,16,0)
D.bAQ=new B.R(0,36,0,36)
D.bAY=new B.R(0,54,0,0)
D.bB4=new B.R(10,0,10,3)
D.bBg=new B.ik(10,16,10,10)
D.bBs=new B.R(10,6,4,6)
D.bBv=new B.R(10,8,10,6)
D.alp=new B.R(11,8,11,11)
D.bBA=new B.R(12,0,12,24)
D.bBN=new B.R(12,12,12,4)
D.bBQ=new B.R(12,12,8,12)
D.bC5=new B.R(12,8,8,12)
D.bCu=new B.R(14,14,14,0)
D.bCz=new B.R(14,14,14,90)
D.bCW=new B.R(16,10,16,16)
D.bCX=new B.R(16,10,16,20)
D.am9=new B.R(16,6,16,28)
D.bDv=new B.R(18,0,18,10)
D.bDx=new B.R(18,0,18,30)
D.bDz=new B.R(18,10,18,12)
D.bDA=new B.R(18,10,18,14)
D.bDV=new B.R(18,16,14,18)
D.bE_=new B.R(18,18,18,12)
D.bE5=new B.R(18,26,18,12)
D.bEa=new B.R(18,34,18,34)
D.bEb=new B.R(18,4,18,14)
D.bEg=new B.R(18,8,18,24)
D.bEz=new B.R(20,16,14,4)
D.bEE=new B.R(20,18,12,4)
D.bEJ=new B.R(20,20,12,20)
D.bEM=new B.R(20,22,20,20)
D.bER=new B.R(20,6,20,6)
D.bF0=new B.R(22,18,22,18)
D.bF8=new B.R(22,24,22,0)
D.bFb=new B.R(22,24,22,4)
D.bFj=new B.R(22,60,22,22)
D.bFp=new B.R(24,24,24,22)
D.bFz=new B.R(26,10,60,10)
D.bFH=new B.R(28,44,28,44)
D.bFY=new B.R(32,44,32,44)
D.bG5=new B.R(38,30,38,20)
D.bGa=new B.R(4,0,0,6)
D.bGm=new B.ik(4,4,4,4)
D.bGP=new B.ik(6,5,6,5)
D.bGU=new B.R(6,6,8,6)
D.bH5=new B.R(8,14,8,14)
D.bH6=new B.R(8,22,8,22)
D.bHf=new B.R(8,6,12,6)
D.bHo=new B.R(8,8,8,4)
D.an5=new B.R(9,9,9,6)
D.bHz=new B.ik(2.5,2.5,2.5,2.5)
D.bHA=new B.R(10.5,0,10.5,0)
D.bHB=new B.R(7,1.5,7,1.5)
D.d3b=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHR=new B.uN(null,null,D.d3b,A.xW)
D.d_V=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHS=new B.uN(null,null,D.d_V,A.xW)
D.aWe=new B.H(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new B.B("WORD DESIGN",null,D.aWe,null,null,null,null,null,null,null,null,null)
D.bIx=new B.bz(1,A.bd,D.h_j,null)
D.fZY=new B.B("Slides database",null,Ab.vw,null,null,null,null,null,null,null,null,null)
D.fXa=new B.B("Admin only \xb7 keep as many as you like",null,W.aVI,null,null,null,null,null,null,null,null,null)
D.dwa=w([D.fZY,A.bH,D.fXa],x.p)
D.bwH=new B.fj(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dwa,null)
D.bIA=new B.bz(1,A.bd,D.bwH,null)
D.fRi=new B.B("NGMY logo",null,A.fx,null,null,null,null,null,null,null,null,null)
D.bID=new B.bz(1,A.bd,D.fRi,null)
D.fxC=new B.H(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1m=new B.B("TALK TO THE EDITOR",null,D.fxC,null,null,null,null,null,null,null,null,null)
D.bIW=new B.bz(1,A.bd,D.h1m,null)
D.fKV=new B.B("Tell the AI what to change",null,Ab.vw,null,null,null,null,null,null,null,null,null)
D.bJf=new B.bz(1,A.bd,D.fKV,null)
D.bKK=new B.Ev(!0,"video/mp4")
D.fvN=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIP=new B.B("Move presentations between devices",null,D.fvN,null,null,null,!1,null,null,1,null,null)
D.bKO=new B.qH(A.e2,A.a6,A.f,D.fIP,null)
D.fK4=new B.B("Edit in Slides",null,A.jd,null,null,null,null,null,null,null,null,null)
D.bKP=new B.qH(A.e2,A.A,A.f,D.fK4,null)
D.bL3=new B.dq(1,A.cr,D.bKP,null)
D.a20=new B.a_(60988,"MaterialIcons",!1)
D.bOv=new B.a_(61352,"MaterialIcons",!1)
D.aoP=new B.a_(61531,"MaterialIcons",!1)
D.bPH=new B.a_(63062,"MaterialIcons",!1)
D.bPO=new B.a_(63109,"MaterialIcons",!1)
D.bQ0=new B.a_(63206,"MaterialIcons",!1)
D.apv=new B.a_(63238,"MaterialIcons",!1)
D.bQh=new B.a_(63338,"MaterialIcons",!1)
D.a2C=new B.a_(63365,"MaterialIcons",!1)
D.a2D=new B.a_(63367,"MaterialIcons",!1)
D.a2E=new B.a_(63368,"MaterialIcons",!1)
D.apI=new B.a_(63384,"MaterialIcons",!1)
D.bQy=new B.a_(63525,"MaterialIcons",!1)
D.bQC=new B.a_(63568,"MaterialIcons",!1)
D.bQX=new B.a_(983072,"MaterialIcons",!1)
D.bRm=new B.a_(983271,"MaterialIcons",!0)
D.aqQ=new B.a_(983965,"MaterialIcons",!1)
D.aqR=new B.a_(983966,"MaterialIcons",!1)
D.bSh=new B.a_(984592,"MaterialIcons",!1)
D.bSz=new B.ae(A.uH,16,A.aD,null,null,null)
D.ar2=new B.ae(A.pr,18,A.c,null,null,null)
D.bSZ=new B.ae(A.Cv,18,N.lH,null,null,null)
D.bTD=new B.ae(A.j5,11,null,null,null,null)
D.bTO=new B.ae(A.a2j,null,A.ev,null,null,null)
D.bUl=new B.ae(A.rZ,18,A.aD,null,null,null)
D.bUs=new B.ae(A3.CN,14,null,null,null,null)
D.bUt=new B.ae(A.ei,28,A.c0,null,null,null)
D.bUF=new B.ae(A.qM,20,A.c,null,null,null)
D.bUM=new B.ae(A.zg,null,null,null,null,null)
D.bUS=new B.ae(A.jq,18,A.hr,null,null,null)
D.bUY=new B.ae(A.kv,null,null,null,null,null)
D.bPJ=new B.a_(63065,"MaterialIcons",!1)
D.bVB=new B.ae(D.bPJ,15,A.c,null,null,null)
D.bPP=new B.a_(63113,"MaterialIcons",!1)
D.bVH=new B.ae(D.bPP,null,A.ab,null,null,null)
D.bW5=new B.ae(A.uF,22,A.bN,null,null,null)
D.bWq=new B.ae(A.rW,18,null,null,null,null)
D.bWw=new B.ae(A.CS,12,A.c,null,null,null)
D.bRU=new B.a_(983687,"MaterialIcons",!1)
D.bWI=new B.ae(D.bRU,null,A.bl,null,null,null)
D.bWR=new B.ae(A.hI,null,A.bl,null,null,null)
D.bX9=new B.ae(A.pw,22,A.c,null,null,null)
D.bXd=new B.ae(A.cz,13,A.c,null,null,null)
D.bXj=new B.ae(A.ei,26,A.av,null,null,null)
D.bXn=new B.ae(A.t1,26,A.c,null,null,null)
D.PV=new B.ae(A.j5,8,A.c,null,null,null)
D.bXI=new B.ae(A.pr,40,A.c,null,null,null)
D.bXJ=new B.ae(A.bNs,null,null,null,null,null)
D.bXN=new B.ae(A.uS,20,null,null,null,null)
D.bRT=new B.a_(983683,"MaterialIcons",!1)
D.bXX=new B.ae(D.bRT,null,A.b1,null,null,null)
D.bXY=new B.ae(A.j5,16,A.bl,null,null,null)
D.bYi=new B.ae(A.pu,null,null,null,null,null)
D.arD=new B.ae(A.wy,22,A.c,null,null,null)
D.bYo=new B.ae(A.ed,17,A.c,null,null,null)
D.arE=new B.ae(A.j5,9,A.c,null,null,null)
D.bYt=new B.ae(A.wt,null,null,null,null,null)
D.bNJ=new B.a_(57744,"MaterialIcons",!1)
D.bYA=new B.ae(D.bNJ,null,null,null,null,null)
D.bYD=new B.ae(A.wt,16,null,null,null,null)
D.bSq=new B.a_(985181,"MaterialIcons",!1)
D.HZ=new B.ae(D.bSq,null,null,null,null,null)
D.bYP=new B.ae(A.kv,16,A.bN,null,null,null)
D.bRN=new B.a_(983615,"MaterialIcons",!1)
D.bYR=new B.ae(D.bRN,12,A.c,null,null,null)
D.arK=new B.ae(A.z3,16,null,null,null,null)
D.bYZ=new B.ae(A.ed,21,A.c,null,null,null)
D.bZ3=new B.ae(A.hI,17,A.c,null,null,null)
D.bZ4=new B.ae(A.uF,null,null,null,null,null)
D.bZl=new B.ae(A.PT,20,A.aD,null,null,null)
D.bZA=new B.ae(A.nI,22,E.nx,null,null,null)
D.bZI=new B.ae(A.qK,13,A.ab,null,null,null)
D.bZL=new B.ae(A.a3j,20,A.aD,null,null,null)
D.bNq=new B.a_(57495,"MaterialIcons",!1)
D.bZQ=new B.ae(D.bNq,null,null,null,null,null)
D.bZU=new B.ae(A.ow,18,A.c,null,null,null)
D.c_g=new B.ae(A.uU,28,A.c,null,null,null)
D.c_r=new B.ae(D.apv,null,A.aE,null,null,null)
D.c_s=new B.ae(A.qM,22,A.c,null,null,null)
D.arT=new B.ae(A.a1X,16,null,null,null,null)
D.c0e=new B.ae(A.uF,32,A.c,null,null,null)
D.c0X=new B.ae(A.js,22,A.c,null,null,null)
D.c1_=new B.ae(A.t1,22,A.ab,null,null,null)
D.as8=new B.ae(A.uH,null,A.bW,null,null,null)
D.c1V=new B.ae(A.qE,18,null,null,null,null)
D.c2x=new B.ae(A.ed,18,A.bh,null,null,null)
D.c2E=new B.ae(A.aqy,null,null,null,null,null)
D.c34=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aW2,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.fnr=new B.H(!0,A.bK,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3m=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fnr,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.c3N=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.d7q=w([A.dJ,A.aE],x.O)
D.c5T=new B.a9(A.a6,A.aa,A.x,D.d7q,null,null)
D.c63=new B.a9(A.b7,A.ba,A.W5,A.azh,null,null)
D.bfj=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bki=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnY=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bhV=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cSr=w([D.bfj,D.bki,D.bnY,D.bhV],x.O)
D.c6l=new B.a9(A.aA,A.aF,A.x,D.cSr,A.Iu,null)
D.dwj=w([A.cF,A.bD,A.b9],x.O)
D.c6n=new B.a9(A.b7,A.ba,A.W5,D.dwj,null,null)
D.dxO=w([A.bl,A.ch],x.O)
D.c6s=new B.a9(A.a6,A.aa,A.x,D.dxO,null,null)
D.dss=w([A.hE,A.cZ,A.aw],x.O)
D.c6u=new B.a9(A.aA,A.aF,A.x,D.dss,null,null)
D.ddN=w([A.cG,A.fo],x.O)
D.c6y=new B.a9(A.a6,A.aa,A.x,D.ddN,null,null)
D.dwc=w([N.lH,A.cZ],x.O)
D.asV=new B.a9(A.a6,A.aa,A.x,D.dwc,null,null)
D.bl0=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dw9=w([D.bl0,D.ym,A.c4],x.O)
D.c6D=new B.a9(A.a6,A.aa,A.x,D.dw9,null,null)
D.d9a=w([A.b5,A.cX,A.eq],x.O)
D.c6E=new B.a9(A.aA,A.aF,A.x,D.d9a,null,null)
D.Qc=new B.a9(A.a6,A.aa,A.x,A.IK,null,null)
D.bug=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cLn=w([D.bug,A.c4,A.jD],x.O)
D.at_=new B.a9(A.aA,A.aF,A.x,D.cLn,null,null)
D.djy=w([A.u4,A.aC,D.BR],x.O)
D.c7F=new B.a9(A.a6,A.aa,A.x,D.djy,null,null)
D.bvI=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.biW=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bp7=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d8g=w([D.bvI,D.biW,D.bp7],x.O)
D.at0=new B.a9(A.a6,A.aa,A.x,D.d8g,null,null)
D.bl2=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9F=w([Az.ak3,D.bl2],x.O)
D.c7O=new B.a9(A.b7,A.ba,A.x,D.c9F,null,null)
D.d6b=w([A.mQ,A.bC],x.O)
D.c7S=new B.a9(A.b7,A.ba,A.x,D.d6b,null,null)
D.dp1=w([A.aE,A.dK],x.O)
D.c7Y=new B.a9(A.a6,A.aa,A.x,D.dp1,null,null)
D.aiR=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aB1=w([D.aiR,D.jB,D.Mn],x.O)
D.c8p=new B.a9(A.aA,A.aF,A.x,D.aB1,null,null)
D.cLf=w([A.dx,A.dA],x.O)
D.c8A=new B.a9(A.b7,A.ba,A.x,D.cLf,null,null)
D.dlU=w([A.xZ,A.y8],x.O)
D.c9n=new B.a9(A.a6,A.aa,A.x,D.dlU,null,null)
D.fSV=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c9A=new B.q6(null,D.fSV,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zG=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7Q=new C.la(2,"elegantNavy")
D.hEz=w([A.Zn,D.jB,A.c4],x.O)
D.kb=new C.y9(0,"classic")
D.a7F=new C.jC("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7Q,4294967035,4279378237,4290283019,D.kb)
D.aKw=new C.la(3,"elegantGold")
D.beO=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bg_=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.aha=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hE1=w([D.beO,D.bg_,D.aha],x.O)
D.a7D=new C.jC("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKw,4294966515,4281016592,4289102906,D.kb)
D.dTe=new C.la(22,"goldRibbon")
D.hDY=w([A.Zn,D.jB,A.ir],x.O)
D.a7w=new C.jC("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dTe,4294967035,4279378237,4291404327,D.kb)
D.dTf=new C.la(23,"goldBaroque")
D.ahV=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hE3=w([D.ahV,A.aC,A.jD],x.O)
D.a7x=new C.jC("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dTf,4294964964,4283053072,4292128567,D.kb)
D.dTh=new C.la(4,"elegantEmerald")
D.bhk=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bik=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hE9=w([D.bhk,D.bik,A.ir],x.O)
D.a7y=new C.jC("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dTh,4294376440,4279122734,4291404327,D.kb)
D.dTi=new C.la(5,"elegantBurgundy")
D.bmE=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hEg=w([D.bmE,A.agh,A.ir],x.O)
D.a7B=new C.jC("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dTi,4294965238,4283043359,4291404327,D.kb)
D.dTb=new C.la(19,"goldFiligree")
D.Na=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hE4=w([D.Na,A.aC,A.jD],x.O)
D.a7z=new C.jC("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dTb,4294966259,4279378237,4292128567,D.kb)
D.dTc=new C.la(20,"goldLaurel")
D.bu6=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hEh=w([A.Mf,A.ir,D.bu6],x.O)
D.a7A=new C.jC("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dTc,4294966776,4282000405,4291404327,D.kb)
D.dTd=new C.la(21,"goldCrest")
D.ag8=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bud=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hE6=w([D.ag8,A.aC,D.bud],x.O)
D.a7E=new C.jC("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dTd,4294965484,4283053072,4292128567,D.kb)
D.dTg=new C.la(24,"goldStar")
D.bvz=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hEa=w([D.bvz,A.aC,D.jB],x.O)
D.a7C=new C.jC("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dTg,4294966518,4279378237,4292128567,D.kb)
D.I8=w([D.a7F,D.a7D,D.a7w,D.a7x,D.a7y,D.a7B,D.a7z,D.a7A,D.a7E,D.a7C],x.h)
D.qX=new C.mS(0,"blank")
D.TR=new C.mS(1,"title")
D.n9=new C.mS(2,"titleContent")
D.ecR=new C.mS(3,"twoColumn")
D.DV=new C.mS(4,"section")
D.ecS=new C.mS(5,"comparison")
D.Jh=new C.mS(6,"flashcard")
D.Ji=new C.mS(7,"quiz")
D.Jj=new C.mS(8,"worksheet")
D.atl=w([D.qX,D.TR,D.n9,D.ecR,D.DV,D.ecS,D.Jh,D.Ji,D.Jj],B.as("O<mS>"))
D.aC8=w([Ap.YG,A.dA],x.O)
D.l_=w([A.c4,A.bN,A.i5,A.i3,D.BR],x.O)
D.dP1=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aC8,D.l_)
D.but=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmC=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d6o=w([D.but,D.bmC],x.O)
D.dOT=new C.jb("confetti","Golden Confetti","Together we rise",D.d6o,D.l_)
D.d3h=w([A.o5,A.Yg],x.O)
D.dOU=new C.jb("crown","Crown of Glory","Built for our community",D.d3h,D.l_)
D.biJ=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmf=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.daE=w([D.biJ,D.bmf],x.O)
D.v_=w([A.bK,A.aP,A.c,A.aO,A.an],x.O)
D.dOO=new C.jb("aurora","Aurora Gala","A brighter future, together",D.daE,D.v_)
D.bo_=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dm2=w([G.afK,D.bo_],x.O)
D.dP4=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dm2,D.l_)
D.dP5=new C.jb("diamonds","Diamond Rain","Every member is a jewel",Z.aCU,D.v_)
D.bfO=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blF=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.drF=w([D.bfO,D.blF],x.O)
D.dOJ=new C.jb("starburst","Golden Starburst","Thank you!",D.drF,D.l_)
D.c9M=w([A.fn,A.yd],x.O)
D.afU=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RN=w([A.pc,A.iq,A.wa,A.o6,D.afU],x.O)
D.dPc=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.c9M,D.RN)
D.d2u=w([A.Yu,A.w],x.O)
D.dP0=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d2u,D.v_)
D.bsj=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dig=w([A.kq,D.bsj],x.O)
D.dOW=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.dig,D.l_)
D.bpP=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnJ=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dn0=w([D.bpP,D.bnJ],x.O)
D.dOL=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dn0,D.l_)
D.duw=w([A.dx,A.i2],x.O)
D.dOR=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.duw,D.l_)
D.bjX=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d0g=w([A.yf,D.bjX],x.O)
D.dON=new C.jb("hearts","Floating Hearts","Made with love",D.d0g,D.RN)
D.bgs=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bhr=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dw7=w([D.bgs,D.bhr],x.O)
D.dPb=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dw7,D.RN)
D.btk=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.ds0=w([A.lh,D.btk],x.O)
D.dOI=new C.jb("butterflies","Golden Butterflies","New beginnings",D.ds0,D.l_)
D.bp3=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d1l=w([D.bp3,A.w],x.O)
D.dP3=new C.jb("neon","Neon Night","Let's go!",D.d1l,D.v_)
D.bli=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dpd=w([A.MK,D.bli],x.O)
D.dP6=new C.jb("disco","Disco Ball","Party time",D.dpd,D.v_)
D.bpE=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.doI=w([A.hE,D.bpE],x.O)
D.dOM=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.doI,D.l_)
D.doj=w([A.ry,A.dA],x.O)
D.dP7=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.doj,D.v_)
D.biQ=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dox=w([D.biQ,A.dA],x.O)
D.dPa=new C.jb("snow","Winter Gala","Warm wishes to all",D.dox,D.v_)
D.beX=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bgd=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dv0=w([D.beX,D.bgd],x.O)
D.dP_=new C.jb("laurel","Laurel Victory","We did it together",D.dv0,D.l_)
D.beN=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bmb=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d_f=w([D.beN,D.bmb],x.O)
D.dP9=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d_f,D.l_)
D.bnn=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cLc=w([G.BQ,D.bnn],x.O)
D.dOX=new C.jb("kente","Kente Pride","Proud of our roots",D.cLc,D.l_)
D.bqv=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.btI=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dcp=w([D.bqv,D.btI],x.O)
D.dOS=new C.jb("trophy","Trophy Shine","Winners together",D.dcp,D.l_)
D.doE=w([Aq.Mu,A.w],x.O)
D.dOK=new C.jb("shooting","Shooting Stars","Make a wish",D.doE,D.v_)
D.bf5=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajP=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dvj=w([D.bf5,D.ajP],x.O)
D.dOY=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dvj,D.l_)
D.bfw=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dj7=w([D.bfw,A.w],x.O)
D.dOQ=new C.jb("orbits","Golden Orbits","Always moving forward",D.dj7,D.l_)
D.btl=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dfm=w([A.ah5,D.btl],x.O)
D.dOV=new C.jb("flowers","Blooming Garden","Growing together",D.dfm,D.RN)
D.bfh=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bg4=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dtW=w([D.bfh,D.bg4],x.O)
D.dOP=new C.jb("music","Music Party","Celebrate with us",D.dtW,D.v_)
D.bh5=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bu9=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d0u=w([D.bh5,D.bu9],x.O)
D.dP8=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d0u,D.l_)
D.dfs=w([G.BQ,D.ajP],x.O)
D.dP2=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dfs,D.l_)
D.dOZ=new C.jb("city","City Lights","The whole city celebrates",D.aC8,D.l_)
D.Ih=w([D.dP1,D.dOT,D.dOU,D.dOO,D.dP4,D.dP5,D.dOJ,D.dPc,D.dP0,D.dOW,D.dOL,D.dOR,D.dON,D.dPb,D.dOI,D.dP3,D.dP6,D.dOM,D.dP7,D.dPa,D.dP_,D.dP9,D.dOX,D.dOS,D.dOK,D.dOY,D.dOQ,D.dOV,D.dOP,D.dP8,D.dP2,D.dOZ],B.as("O<jb>"))
D.eEZ=new B.y("","No ring")
D.eVz=new B.y("platinum","Platinum")
D.eRB=new B.y("glow","Glow")
D.eIL=new B.y("double","Double line")
D.eHD=new B.y("framed","Gallery frame")
D.eEv=new B.y("rosegold","Rose gold")
D.eSq=new B.y("jewels","Jeweled")
D.eOZ=new B.y("aurora","Aurora")
D.Db=w([D.eEZ,A.UC,D.eVz,D.eRB,M.aRi,D.eIL,A.aRg,D.eHD,D.eEv,D.eSq,D.eOZ],x.L)
D.cum=w([D.a7z,D.a7A,D.a7E,D.a7w,D.a7x,D.a7C],x.h)
D.bZc=new B.ae(G.aop,16,null,null,null,null)
D.b9U=new B.vZ(A.bn,D.bZc,null,x.U)
D.bNS=new B.a_(58027,"MaterialIcons",!1)
D.bSF=new B.ae(D.bNS,16,null,null,null,null)
D.b9S=new B.vZ(A.K,D.bSF,null,x.U)
D.bNT=new B.a_(58030,"MaterialIcons",!1)
D.bWP=new B.ae(D.bNT,16,null,null,null,null)
D.b9V=new B.vZ(A.e_,D.bWP,null,x.U)
D.cAF=w([D.b9U,D.b9S,D.b9V],B.as("O<vZ<ql>>"))
D.cIs=w([A.BV,A.hD],x.O)
D.cIt=w([A.b5,A.b8,A.eq],x.O)
D.RC=w([A.bN,A.i3,A.i5,A.aC,A.o6],x.O)
D.cLi=w([A.c4,D.jB,D.Mn],x.O)
D.cLQ=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eCi=new B.y(4278913286,4280030216)
D.eCA=new B.y(4279373061,4278518787)
D.eCH=new B.y(4279898630,4278847235)
D.dbM=w([D.eCi,D.eCA,D.eCH],x.n)
D.d79=w(["\u265b","\u269c","\u2726"],x.s)
D.dT9=new C.yb("Royal Onyx & Gold",D.dbM,4292128567,4294370209,4294965479,3874020544,D.d79)
D.eC5=new B.y(4278326799,4278598442)
D.eC7=new B.y(4278395929,4278258953)
D.eCe=new B.y(4278599728,4278327826)
D.dun=w([D.eC5,D.eC7,D.eCe],x.n)
D.d1d=w(["\u269c","\u2756","\u2727"],x.s)
D.dT6=new C.yb("Imperial Emerald",D.dun,4293050997,4294699968,4294180856,3872254170,D.d1d)
D.eC8=new B.y(4278455076,4278918747)
D.eCd=new B.y(4278587439,4278322714)
D.eCr=new B.y(4279051376,4278455076)
D.dso=w([D.eC8,D.eCd,D.eCr],x.n)
D.djS=w(["\u2654","\u2726","\u2748"],x.s)
D.dT0=new C.yb("Sapphire Crown",D.dso,4291417834,4294967295,4294310143,3871986666,D.djS)
D.eCF=new B.y(4279894534,4283041554)
D.eCR=new B.y(4281008906,4279042307)
D.eCZ=new B.y(4284221976,4279894534)
D.dyt=w([D.eCF,D.eCR,D.eCZ],x.n)
D.d2D=w(["\u265b","\u2766","\u2726"],x.s)
D.dT2=new C.yb("Ruby Throne",D.dyt,4293378685,4294963145,4294964466,3874213833,D.d2D)
D.eCz=new B.y(4279371039,4281995100)
D.eCJ=new B.y(4280092723,4278714896)
D.eCW=new B.y(4283045242,4279371039)
D.duL=w([D.eCz,D.eCJ,D.eCW],x.n)
D.dsL=w(["\u2655","\u2756","\u2727"],x.s)
D.dT7=new C.yb("Amethyst Palace",D.duL,4293314984,4294963421,4294702591,3873229802,D.dsL)
D.eCa=new B.y(4278519045,4280032287)
D.eCs=new B.y(4279111184,4278321666)
D.eCO=new B.y(4280492839,4278716426)
D.dr8=w([D.eCa,D.eCs,D.eCO],x.n)
D.di2=w(["\u2726","\u25c6","\u2742"],x.s)
D.dT4=new C.yb("Obsidian & Platinum",D.dr8,4293256418,4294967295,4294638330,3872378836,D.di2)
D.eCG=new B.y(4279896588,4282194463)
D.eCP=new B.y(4280553487,4279043334)
D.eCX=new B.y(4283048488,4279896588)
D.dhs=w([D.eCG,D.eCP,D.eCX],x.n)
D.dwA=w(["\u2766","\u273f","\u2727"],x.s)
D.dT1=new C.yb("Rose Gold Velvet",D.dhs,4293440672,4294960345,4294964979,3874214602,D.dwA)
D.eCb=new B.y(4278520340,4279180595)
D.eCg=new B.y(4278718495,4278322443)
D.eCD=new B.y(4279510591,4278520340)
D.cS7=w([D.eCb,D.eCg,D.eCD],x.n)
D.diM=w(["\u269c","\u2736","\u2756"],x.s)
D.dT5=new C.yb("Midnight Brass",D.cS7,4291405148,4293975208,4294439914,3872837564,D.diM)
D.eDb=new B.y(4294703086,4293780428)
D.eD7=new B.y(4294307549,4293187253)
D.eDc=new B.y(4294966517,4293977807)
D.d5_=w([D.eDb,D.eD7,D.eDc],x.n)
D.djb=w(["\u269c","\u265b","\u2726"],x.s)
D.dT8=new C.yb("Ivory Marble & Gold",D.d5_,4289760572,4286209048,4280951062,3863625518,D.djb)
D.eCm=new B.y(4278978566,4280555024)
D.eCC=new B.y(4279504137,4278518530)
D.eCT=new B.y(4281211923,4278978566)
D.d2s=w([D.eCm,D.eCC,D.eCT],x.n)
D.dtw=w(["\u2742","\u2726","\u265c"],x.s)
D.dT3=new C.yb("Onyx & Copper",D.d2s,4291856987,4294365880,4294964718,3873885630,D.dtw)
D.cLY=w([D.dT9,D.dT6,D.dT0,D.dT2,D.dT7,D.dT4,D.dT1,D.dT5,D.dT8,D.dT3],B.as("O<yb>"))
D.cOk=w([A.aC,D.BR,A.i3],x.O)
D.eL1=new B.y("Original",null)
D.eLb=new B.y("Wide 16:9",1.7777777777777777)
D.eNz=new B.y("Landscape 3:2",1.5)
D.eKs=new B.y("Photo 4:3",1.3333333333333333)
D.eZu=new B.y("Portrait 3:4",0.75)
D.azq=w([D.eL1,D.eLb,D.eNz,D.eKs,M.aR6,D.eZu],B.as("O<+(n,F?)>"))
D.azr=w([A.i3,A.bT,A.bb,A.br],x.O)
D.eNL=new B.y("","Original")
D.ePJ=new B.y("circle","Circle")
D.eWn=new B.y("rounded","Rounded")
D.eXn=new B.y("triangle","Triangle")
D.eRS=new B.y("hexagon","Hexagon")
D.eQa=new B.y("diamond","Diamond")
D.eOY=new B.y("arch","Arch")
D.Di=w([D.eNL,D.ePJ,D.eWn,D.eXn,D.eRS,D.eQa,D.eOY],x.L)
D.dO7=new C.lu("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kQ,A.d6,A.aM)
D.dOn=new C.lu("campus_green","Campus Green","Normal",A.b1,A.nv,A.u6,A.ha,A.e6)
D.dOe=new C.lu("warm_sand","Warm Sand","Normal",A.dX,A.i5,A.bN,A.i7,A.oc)
D.dOl=new C.lu("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aO,A.T,A.aM)
D.dO6=new C.lu("coral_fresh","Coral Fresh","Normal",A.cc,A.i4,A.q5,A.kr,A.u_)
D.dOm=new C.lu("lavender_calm","Lavender Calm","Normal",A.b9,A.q8,A.y6,A.oh,A.kn)
D.dO8=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fo,A.rG,A.tW,A.u1,A.od)
D.aiZ=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dOj=new C.lu("berry_pop","Berry Pop","Normal",A.fd,D.aiZ,A.kM,G.ZY,A.BW)
D.dO9=new C.lu("midnight_pro","Midnight Pro","Professional",A.aE,A.T,A.dx,A.kM,A.cu)
D.dOi=new C.lu("executive_navy","Executive Navy","Professional",A.d5,A.ai8,A.d6,A.lf,A.bK)
D.dOg=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bp,A.T,A.aP,A.cu)
D.dOa=new C.lu("corporate_steel","Corporate Steel","Professional",A.of,A.T,A.mT,A.fH,A.bK)
D.dOd=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mL,A.dT,A.pb,A.m5,A.bN)
D.bpJ=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dOh=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hD,D.bpJ,A.ZH,A.iq,A.o6)
D.dOk=new C.lu("platinum_night","Platinum Night","Luxury",A.cu,A.dA,A.bp,A.aP,A.aO)
D.dOo=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qc,A.eV,A.ql,A.jU)
D.dO5=new C.lu("royal_purple","Royal Purple","Luxury",A.nu,A.YM,A.kn,A.kM,A.Me)
D.dOf=new C.lu("neon_pitch","Neon Pitch","Bold",A.bb,A.dA,A.T,A.b0,A.aO)
D.dOc=new C.lu("crimson_impact","Crimson Impact","Bold",A.bC,A.kq,A.ek,A.rH,A.eU)
D.dOb=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fp,A.u_,A.kr,A.q5,A.mR)
D.Iq=w([D.dO7,D.dOn,D.dOe,D.dOl,D.dO6,D.dOm,D.dO8,D.dOj,D.dO9,D.dOi,D.dOg,D.dOa,D.dOd,D.dOh,D.dOk,D.dOo,D.dO5,D.dOf,D.dOc,D.dOb],B.as("O<lu>"))
D.d__=w([A.c4,D.jB],x.O)
D.dhM=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eOI=new B.y("Faces & people",D.dhM)
D.cOo=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eAV=new B.y("Ideas & work",D.cOo)
D.d7F=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eRX=new B.y("Nature",D.d7F)
D.dhV=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eL_=new B.y("Places & things",D.dhV)
D.dbj=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eP2=new B.y("Symbols",D.dbj)
D.d_5=w([D.eOI,D.eAV,D.eRX,D.eL_,D.eP2],B.as("O<+(n,ai<n>)>"))
D.bfm=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d_q=w([A.c4,D.aha,D.bfm],x.O)
D.b9d=new B.ac(0,A.G,A.Mb,A.aLm,40)
D.b8U=new B.ac(0,A.G,A.oa,A.et,8)
D.d_D=w([D.b9d,D.b8U],x.V)
D.d0a=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azP=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a53=w([A.i3,A.eq,A.bC,A.as,A.cc],x.O)
D.d16=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahq=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d1i=w([A.Zw,D.ahq,A.Zw],x.O)
D.d1n=w([A.ir,D.jB,D.Mn],x.O)
D.eKM=new B.y(A.bn,D.a2D)
D.eMe=new B.y(A.K,D.a2C)
D.eFM=new B.y(A.e_,D.a2E)
D.d2n=w([D.eKM,D.eMe,D.eFM],B.as("O<+(ql,a_)>"))
D.cW=new C.JE(0,"text")
D.lU=new C.JE(1,"image")
D.fi=new C.JE(2,"shape")
D.TQ=new C.JE(3,"pdf")
D.lu=new C.JE(4,"signature")
D.a8_=new C.JE(5,"bio")
D.d3n=w([D.cW,D.lU,D.fi,D.TQ,D.lu,D.a8_],B.as("O<JE>"))
D.d3o=w([A.bt,A.cH],B.as("O<Iw>"))
D.d43=w(["School","Documents","Sign & present"],x.s)
D.b9i=new B.ac(0,A.G,A.ajE,A.vk,28)
D.d4s=w([D.b9i],x.V)
D.d4L=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RW=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAf=w([A.i3,A.Gm,A.aO,A.c,A.pc,A.aC],x.O)
D.eYS=new B.y(0.1,0.08)
D.eRV=new B.y(0.3,0.05)
D.eFd=new B.y(0.55,0.1)
D.eJH=new B.y(0.8,0.06)
D.eN_=new B.y(0.92,0.16)
D.eMt=new B.y(0.2,0.2)
D.eKc=new B.y(0.7,0.22)
D.eQx=new B.y(0.05,0.4)
D.eNr=new B.y(0.95,0.45)
D.eG1=new B.y(0.12,0.7)
D.eIo=new B.y(0.88,0.75)
D.eIw=new B.y(0.4,0.9)
D.eDt=new B.y(0.65,0.93)
D.eJk=new B.y(0.25,0.97)
D.eKJ=new B.y(0.85,0.9)
D.eGX=new B.y(0.5,0.04)
D.d6j=w([D.eYS,D.eRV,D.eFd,D.eJH,D.eN_,D.eMt,D.eKc,D.eQx,D.eNr,D.eG1,D.eIo,D.eIw,D.eDt,D.eJk,D.eKJ,D.eGX],x.G)
D.d6s=w([A.c,A.hD,A.aH,A.aY],x.O)
D.eet=new C.jY("office_blue","Office Blue",A.bl,A.d6,A.aM,A.c,A.kQ)
D.eeE=new C.jY("campus_green","Campus Green",A.b1,A.ha,A.e6,A.nv,A.u6)
D.eeu=new C.jY("sunset","Sunset",A.fp,A.kr,A.oc,A.i4,A.q5)
D.eev=new C.jY("midnight","Midnight",A.aE,A.kM,A.cu,A.T,A.dx)
D.eeG=new C.jY("classic","Classic",A.cZ,A.dT,A.m6,A.i5,A.h_)
D.eeD=new C.jY("rose_gold","Rose Gold",A.hD,A.yg,A.yf,A.wa,A.BV)
D.eeo=new C.jY("ocean_teal","Ocean Teal",A.fo,A.u1,A.od,A.rG,A.tW)
D.een=new C.jY("slate_pro","Slate Pro",A.bv,A.T,A.aM,A.aP,A.aO)
D.eem=new C.jY("neon_night","Neon Night",A.bb,A.b0,A.aO,A.dA,A.T)
D.eey=new C.jY("lavender","Lavender",A.b9,A.oh,A.kn,A.q8,A.y6)
D.eeA=new C.jY("coral","Coral",A.cc,A.kr,A.u_,A.i4,A.mR)
D.eep=new C.jY("forest","Forest",A.hq,A.e5,A.cq,A.m7,A.ev)
D.eeq=new C.jY("berry","Berry",A.fd,G.ZY,A.BW,D.aiZ,A.kM)
D.eex=new C.jY("sand","Sand",A.dX,A.i7,A.oc,A.i5,A.bN)
D.eeC=new C.jY("ice","Ice",A.of,A.FT,A.aM,A.nq,A.fH)
D.ees=new C.jY("charcoal","Charcoal",A.an,A.aP,A.cu,A.bp,A.T)
D.eel=new C.jY("mint","Mint",A.aY,A.fQ,A.ha,A.m7,A.ql)
D.eeB=new C.jY("crimson","Crimson",A.bC,A.mQ,A.kq,A.Gk,A.rH)
D.bij=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eew=new C.jY("gold","Gold",A.mL,A.xZ,A.pb,D.bij,A.m5)
D.eez=new C.jY("aqua","Aqua",A.bU,A.G5,A.p8,A.q9,A.pd)
D.eer=new C.jY("plum","Plum",A.nu,A.yd,A.BW,A.FU,A.rC)
D.eeF=new C.jY("steel","Steel",A.d5,A.d6,A.bp,A.kQ,A.lf)
D.a5i=w([D.eet,D.eeE,D.eeu,D.eev,D.eeG,D.eeD,D.eeo,D.een,D.eem,D.eey,D.eeA,D.eep,D.eeq,D.eex,D.eeC,D.ees,D.eel,D.eeB,D.eew,D.eez,D.eer,D.eeF],B.as("O<jY>"))
D.d6P=w([A.c4,A.jD],x.O)
D.TS=new C.hF(10,"rotate3d")
D.Jl=new C.hF(8,"flip")
D.aKP=new C.hF(19,"spiral")
D.qY=new C.hF(16,"bounce")
D.aKS=new C.hF(9,"flipVertical")
D.d6Q=w([D.TS,D.Jl,D.aKP,D.qY,D.aKS],x.i)
D.em=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d7c=w([0.62,1],x.x)
D.d7P=w([0,0.32,0.68,1],x.x)
D.na=new C.hF(6,"zoom")
D.ve=new C.hF(4,"slideUp")
D.vd=new C.hF(2,"slideLeft")
D.d7Z=w([D.na,D.Jl,D.ve,D.TS,D.vd],x.i)
D.d8u=w([A.bT,A.hD,A.iq,A.i3,A.c],x.O)
D.b98=new B.ac(0,A.G,D.ahG,A.vk,30)
D.d9g=w([D.b98],x.V)
D.eq3=new B.o(0,-2.5)
D.epU=new B.o(-2.5,0)
D.eo5=new B.o(2.5,0)
D.d9j=w([A.U5,A.a8r,A.aM_,A.a8q,D.eq3,O.aLW,D.epU,D.eo5],x.dN)
D.Iw=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9R=w([23,114,69,56,80,144],x.t)
D.dak=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.daN=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dcu=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dcz=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bk=new C.vd(0,"rectangle")
D.eZ=new C.vd(1,"circle")
D.lv=new C.vd(6,"hexagon")
D.dcP=w([D.bk,D.eZ,D.lv],x.m)
D.oL=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aj7=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.ddn=w([D.aj7,A.e5],x.O)
D.eFu=new B.y("","Classic")
D.eDI=new B.y("caps","Bold caps")
D.eQA=new B.y("elegant","Elegant")
D.eWH=new B.y("shadow","Shadow")
D.eK5=new B.y("neon","Neon glow")
D.eUn=new B.y("marker","Highlighter")
D.eWV=new B.y("stamp","Stamp")
D.eIX=new B.y("threed","3D")
D.eR6=new B.y("fire","Fire")
D.eS6=new B.y("ice","Ice")
D.ePI=new B.y("chalk","Chalk")
D.ePN=new B.y("comic","Comic")
D.eYc=new B.y("softglow","Soft glow")
D.eT9=new B.y("lowercase","Lowercase")
D.eQi=new B.y("double","Echo")
D.eYm=new B.y("whisper","Whisper")
D.aBc=w([D.eFu,D.eDI,D.eQA,D.eWH,D.eK5,M.aRh,D.eUn,D.eWV,M.aRj,D.eIX,M.aRb,D.eR6,D.eS6,D.ePI,D.ePN,A.UC,At.aRk,D.eYc,D.eT9,D.eQi,D.eYm],x.L)
D.deH=w([3,5,7,10,12,15],x.t)
D.dgh=w([A.bT,A.bN,A.c,A.eL,A.cF],x.O)
D.dFB=new C.tM(10,"cardWorld")
D.DO=new C.Ca(3,"rounded")
D.dW9=new C.lx("world","NGMY World",D.dFB,D.DO,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dFC=new C.tM(11,"cardSplit")
D.dW5=new C.lx("business","Business Wire",D.dFC,D.DO,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dFD=new C.tM(12,"cardBreaking")
D.dWi=new C.lx("breaking","Breaking Red",D.dFD,D.DO,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dFE=new C.tM(13,"cardFeature")
D.dWb=new C.lx("feature","Tech Feature",D.dFE,D.DO,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJs=new C.tM(6,"circle")
D.aJm=new C.Ca(4,"circle")
D.dWf=new C.lx("parchment","Royal Circle",D.aJs,D.aJm,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dW4=new C.lx("ocean","Blue Ocean",D.aJs,D.aJm,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dFH=new C.tM(7,"rail")
D.aJl=new C.Ca(1,"double")
D.dW6=new C.lx("forest","Green Leaf",D.dFH,D.aJl,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJp=new C.tM(1,"sideBySide")
D.dWk=new C.lx("herald","NGMY Herald",D.aJp,D.DO,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJo=new C.tM(0,"classic")
D.a7b=new C.Ca(9,"shadow")
D.dWj=new C.lx("daily","The Daily",D.aJo,D.a7b,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dFF=new C.tM(2,"splash")
D.aJn=new C.Ca(6,"cutCorner")
D.dW3=new C.lx("tabloid","Big Tabloid",D.dFF,D.aJn,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJt=new C.tM(9,"minimal")
D.dWe=new C.lx("modern","Modern Digest",D.aJt,D.DO,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJq=new C.tM(3,"magazine")
D.aJk=new C.Ca(0,"plain")
D.dWa=new C.lx("midnight","Midnight Edition",D.aJq,D.aJk,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dFI=new C.tM(8,"banner")
D.dWc=new C.lx("metro","Metro Wire",D.dFI,D.aJn,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dFA=new C.Ca(8,"arch")
D.dWd=new C.lx("sunrise","Sunrise Post",D.aJq,D.dFA,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJr=new C.tM(5,"scrapbook")
D.dFz=new C.Ca(5,"tape")
D.dW8=new C.lx("neon","Neon Beat",D.aJr,D.dFz,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dFG=new C.tM(4,"wrap")
D.dWl=new C.lx("gold","Golden Press",D.dFG,D.a7b,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dWm=new C.lx("minimal","Paper White",D.aJt,D.a7b,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dW7=new C.lx("gazette","Fresh Gazette",D.aJo,D.aJl,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dWh=new C.lx("times","Classic Times",D.aJp,D.aJk,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tn=new C.Ca(2,"polaroid")
D.dWg=new C.lx("scrapbook","Memory Scrapbook",D.aJr,D.Tn,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5z=w([D.dW9,D.dW5,D.dWi,D.dWb,D.dWf,D.dW4,D.dW6,D.dWk,D.dWj,D.dW3,D.dWe,D.dWa,D.dWc,D.dWd,D.dW8,D.dWl,D.dWm,D.dW7,D.dWh,D.dWg],B.as("O<lx>"))
D.dgt=w([0.45,1],x.x)
D.IA=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dgT=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hyT=new C.oT("Original",0,1,1,0,0,0)
D.hyX=new C.oT("Black & white",0,1.1,0,0,0,0)
D.hyK=new C.oT("Noir",-0.05,1.55,0,0,0,0)
D.hyO=new C.oT("Sepia",0,1,0.25,0.9,0,0)
D.hyN=new C.oT("Vivid",0,1.15,1.6,0,0,0)
D.hyG=new C.oT("Pop",0,1.3,1.9,0,0,0)
D.hyI=new C.oT("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hyU=new C.oT("Matte",0,0.9,0.85,0,0,0.55)
D.hyP=new C.oT("Cool",0,1.05,1,-0.8,0,0)
D.hyW=new C.oT("Warm",0.03,1.05,1.1,0.8,0,0)
D.hyH=new C.oT("Golden hour",0.04,1,1.25,1,0,0)
D.hyM=new C.oT("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hyV=new C.oT("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hyL=new C.oT("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hyR=new C.oT("Retro",0,0.9,0.7,0.4,0,0.35)
D.hyQ=new C.oT("Forest",0,1,1.2,-0.1,-0.45,0)
D.hyS=new C.oT("Rose",0,1,1.1,0.3,0.4,0)
D.hyJ=new C.oT("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgU=w([D.hyT,D.hyX,D.hyK,D.hyO,D.hyN,D.hyG,D.hyI,D.hyU,D.hyP,D.hyW,D.hyH,D.hyM,D.hyV,D.hyL,D.hyR,D.hyQ,D.hyS,D.hyJ],B.as("O<oT>"))
D.beI=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dgW=w([D.aj7,A.e5,D.beI],x.O)
D.eAO=new B.y(0.12,0.3)
D.eSh=new B.y(0.26,0.75)
D.eQw=new B.y(0.8,0.22)
D.eX6=new B.y(0.9,0.7)
D.eT8=new B.y(0.5,0.15)
D.eVh=new B.y(0.65,0.85)
D.eHt=new B.y(0.08,0.85)
D.dhb=w([D.eAO,D.eSh,D.eQw,D.eX6,D.eT8,D.eVh,D.eHt],x.G)
D.aBp=w([A.bb,A.bT,A.br,A.b5],x.O)
D.di6=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dij=w([A.c,A.fH,A.dl,A.w_],x.O)
D.biz=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.djn=w([D.biz,D.ahq],x.O)
D.djp=w([A.u4,A.aC],x.O)
D.djF=w([0,0.25,0.75,1],x.x)
D.djH=w([A.y2,A.pc],x.O)
D.aKp=new C.la(10,"kenteSunset")
D.hE_=w([D.ahV,A.kl,A.aC],x.O)
D.dRm=new C.jC("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKp,4294964964,4282000405,4279983648,D.kb)
D.aKq=new C.la(11,"indigoMudcloth")
D.bfU=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hEd=w([D.bfU,A.ahn,A.ir],x.O)
D.dRu=new C.jC("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKq,4294439140,4279903102,4279903102,D.kb)
D.aKr=new C.la(12,"adinkraRoyal")
D.buV=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hEe=w([D.ag8,D.buV,A.aC],x.O)
D.dRw=new C.jC("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKr,4294965484,4285218591,4287322667,D.kb)
D.aKs=new C.la(13,"nileLotus")
D.bqR=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmY=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hEj=w([D.bqR,D.bmY,A.ir],x.O)
D.dRv=new C.jC("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKs,4294244340,4279196764,4279196764,D.kb)
D.aKt=new C.la(14,"shweshweIvory")
D.bkP=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bjp=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bgr=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hE0=w([D.bkP,D.bjp,D.bgr],x.O)
D.dRr=new C.jC("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKt,4294505710,4279970378,4291058750,D.kb)
D.ti=new C.la(15,"certIvoryNavy")
D.hDZ=w([D.Na,D.jB,A.ir],x.O)
D.aK_=new C.y9(1,"ringsNdoa")
D.dRo=new C.jC("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.ti,4294966259,4279378237,4291404327,D.aK_)
D.a7H=new C.y9(2,"coupleCards")
D.dRj=new C.jC("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.ti,4294966259,4279378237,4291404327,D.a7H)
D.DR=new C.la(18,"certIvoryNavyBar")
D.ag7=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hEc=w([D.ag7,D.jB,A.ir],x.O)
D.aK0=new C.y9(3,"kuhoweshaForm")
D.dRh=new C.jC("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DR,4294966519,4279378237,4291404327,D.aK0)
D.ahE=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hEw=w([D.Na,D.ahE,A.ir],x.O)
D.a7I=new C.y9(4,"mahariPande")
D.dRk=new C.jC("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.ti,4294966259,4279904068,4291404327,D.a7I)
D.aKu=new C.la(16,"certIvoryGreen")
D.bk7=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hE2=w([A.Mf,D.bk7,A.ir],x.O)
D.aK1=new C.y9(5,"familiaMti")
D.dRq=new C.jC("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKu,4294966776,4280241466,4291404327,D.aK1)
D.a7J=new C.y9(6,"ndoaSafi")
D.dRi=new C.jC("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DR,4294966519,4279378237,4291404327,D.a7J)
D.bp2=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hE5=w([D.Na,A.ir,D.bp2],x.O)
D.a7K=new C.y9(7,"peteWide")
D.dRn=new C.jC("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.ti,4294966259,4282001936,4291404327,D.a7K)
D.dRx=new C.y9(8,"muhuriCrest")
D.dRg=new C.jC("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.ti,4294966259,4279378237,4291404327,D.dRx)
D.hEf=w([D.ag7,D.ahE,A.ir],x.O)
D.dRy=new C.y9(9,"fomuWazi")
D.dRt=new C.jC("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DR,4294966519,4279904068,4291404327,D.dRy)
D.aKv=new C.la(17,"certIvoryRose")
D.bkU=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hEi=w([D.bkU,D.aiD,A.ir],x.O)
D.a7G=new C.y9(10,"upendoOrnate")
D.dRp=new C.jC("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKv,4294965493,4286200650,4291404327,D.a7G)
D.dk8=w([D.dRm,D.dRu,D.dRw,D.dRv,D.dRr,D.dRo,D.dRj,D.dRh,D.dRk,D.dRq,D.dRi,D.dRn,D.dRg,D.dRt,D.dRp],x.h)
D.en=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jm=new C.wv(0,"emojis")
D.DX=new C.wv(1,"pictures")
D.Jn=new C.wv(2,"icons3d")
D.a81=new C.wv(3,"animations")
D.TU=new C.wv(4,"videoMotion")
D.DY=new C.wv(5,"luxe")
D.a5G=w([D.Jm,D.DX,D.Jn,D.a81,D.TU,D.DY],B.as("O<wv>"))
D.eVV=new B.y(A.ed,"Looks")
D.eJA=new B.y(A.D3,"Light")
D.eJx=new B.y(A.ml,"Colour")
D.eHu=new B.y(A.ww,"Effects")
D.apq=new B.a_(63112,"MaterialIcons",!1)
D.eDY=new B.y(D.apq,"Crop")
D.dkH=w([D.eVV,D.eJA,D.eJx,D.eHu,D.eDY],x.f2)
D.dlo=w([],x.D)
D.hEt=w([],x.L)
D.eHI=new B.y("Flashcard",D.Jh)
D.eLE=new B.y("Quiz",D.Ji)
D.eNG=new B.y("Worksheet",D.Jj)
D.eKE=new B.y("Notes",D.n9)
D.eMc=new B.y("Section",D.DV)
D.dm8=w([D.eHI,D.eLE,D.eNG,D.eKE,D.eMc],B.as("O<+(n,mS)>"))
D.dTj=new C.la(6,"beadedPearl")
D.bnO=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hEx=w([H.ZG,D.bnO,A.ir],x.O)
D.aJY=new C.jC("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dTj,4294966774,4286209070,4291404327,D.kb)
D.dTk=new C.la(7,"artDeco")
D.bsd=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bvf=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hEv=w([D.bsd,D.bvf,A.c4],x.O)
D.aJZ=new C.jC("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dTk,4294440434,4280228630,4290283019,D.kb)
D.dTl=new C.la(8,"rosetteCorners")
D.bum=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.biE=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnG=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hE8=w([D.bum,D.biE,D.bnG],x.O)
D.aJX=new C.jC("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dTl,4294702831,4285218602,4291394365,D.kb)
D.dTm=new C.la(9,"modernLedger")
D.hE7=w([A.c,D.jB,D.jB],x.O)
D.aJW=new C.jC("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dTm,4294967295,4279378237,4279378237,D.kb)
D.dmc=w([D.aJY,D.aJZ,D.aJX,D.aJW],x.h)
D.dmm=w([A.iq,A.pc],x.O)
D.ct=new C.hF(0,"none")
D.dm=new C.hF(1,"fade")
D.Jk=new C.hF(3,"slideRight")
D.aKR=new C.hF(5,"slideDown")
D.ecY=new C.hF(7,"zoomOut")
D.a80=new C.hF(11,"cube")
D.ecT=new C.hF(12,"blur")
D.aKO=new C.hF(13,"dissolve")
D.ecU=new C.hF(14,"wipeLeft")
D.ecV=new C.hF(15,"wipeRight")
D.TT=new C.hF(17,"push")
D.ecW=new C.hF(18,"flash")
D.aKQ=new C.hF(20,"swing")
D.ecX=new C.hF(21,"curtain")
D.Sv=w([D.ct,D.dm,D.vd,D.Jk,D.ve,D.aKR,D.na,D.ecY,D.Jl,D.aKS,D.TS,D.a80,D.ecT,D.aKO,D.ecU,D.ecV,D.qY,D.TT,D.ecW,D.aKP,D.aKQ,D.ecX],x.i)
D.Sw=w([D.a7F,D.a7D,D.a7w,D.a7x,D.a7y,D.a7B,D.a7z,D.a7A,D.a7E,D.a7C,D.aJY,D.aJZ,D.aJX,D.aJW],x.h)
D.dmP=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dmT=w([A.u7,A.i3,A.c4],x.O)
D.eIR=new B.y(A.uK,"Design")
D.eXw=new B.y(D.apI,"Word sizes")
D.eSS=new B.y(A.D_,"Text")
D.bRc=new B.a_(983182,"MaterialIcons",!1)
D.eSX=new B.y(D.bRc,"Photo")
D.eDw=new B.y(A.kY,"Logo")
D.eYQ=new B.y(A.HW,"News")
D.dmZ=w([D.eIR,D.eXw,D.eSS,D.eSX,D.eDw,D.eYQ],x.f2)
D.dn_=w(["golddust","sparkle","sheen"],x.s)
D.eek=new C.ew("upload_pdf",K.PJ,"Upload PDF")
D.edu=new C.ew("sign_paper",A.HT,"Sign Paper")
D.bQs=new B.a_(63438,"MaterialIcons",!1)
D.eeg=new C.ew("hd_photo",D.bQs,"HD Photo")
D.edm=new C.ew("sharpen",E.a2m,"Sharpen")
D.edw=new C.ew("print",K.PJ,"Download PDF")
D.edY=new C.ew("rotate",D.apq,"Rotate")
D.edF=new C.ew("text_box",A.D_,"Text Box")
D.edH=new C.ew("picture",A.uO,"Picture")
D.edD=new C.ew("title",A.wK,"Title")
D.edz=new C.ew("subtitle",V.aqj,"Subtitle")
D.ee6=new C.ew("bullets",I.a2F,"Bullet List")
D.edA=new C.ew("numbered",A.Pw,"Numbered")
D.ee9=new C.ew("quote",A3.CN,"Quote")
D.edM=new C.ew("citation",A.nI,"Citation")
D.eec=new C.ew("date_stamp",Ai.a2q,"Date Stamp")
D.ee_=new C.ew("page_number",A.zn,"Page #")
D.ee3=new C.ew("header_bar",A.zp,"Header")
D.edG=new C.ew("footer_bar",Au.a3d,"Footer")
D.edv=new C.ew("divider",A.t_,"Divider")
D.edr=new C.ew("highlight",A.a2I,"Highlight")
D.ee5=new C.ew("redact",A.uV,"Redact")
D.edT=new C.ew("callout",A.CE,"Callout")
D.eee=new C.ew("checkboxes",I.aoJ,"Checklist")
D.edQ=new C.ew("table",A.a3b,"Table")
D.edK=new C.ew("memo",I.a2V,"Memo")
D.edU=new C.ew("letter",A.HH,"Letter")
D.bQ5=new B.a_(63259,"MaterialIcons",!0)
D.edl=new C.ew("agenda",D.bQ5,"Agenda")
D.edx=new C.ew("toc",AC.apW,"Contents")
D.bQo=new B.a_(63406,"MaterialIcons",!1)
D.edR=new C.ew("sig_line",D.bQo,"Sign Line")
D.ede=new C.ew("initial_line",A.j4,"Initials")
D.edh=new C.ew("approved",A.kY,"APPROVED")
D.edW=new C.ew("draft",A.pw,"DRAFT")
D.ee1=new C.ew("confidential",A.j5,"Confidential")
D.ee4=new C.ew("sticky",A.PO,"Sticky Note")
D.eed=new C.ew("progress",A.apV,"Progress")
D.bRC=new B.a_(983507,"MaterialIcons",!1)
D.eds=new C.ew("stars",D.bRC,"Star Rating")
D.edc=new C.ew("equation",A.apK,"Equation")
D.edn=new C.ew("timeline",A.a3c,"Timeline")
D.edL=new C.ew("two_col",A.a3e,"Two Columns")
D.edp=new C.ew("compare",Ay.a2u,"Compare")
D.eda=new C.ew("duplicate_el",A.fV,"Duplicate")
D.eei=new C.ew("delete_el",A.ei,"Delete")
D.ee8=new C.ew("bring_fwd",H.apE,"Bring Front")
D.edf=new C.ew("send_back",H.apD,"Send Back")
D.edV=new C.ew("align_left",D.a2D,"Align L")
D.ee0=new C.ew("align_center",D.a2C,"Align C")
D.eeh=new C.ew("align_right",D.a2E,"Align R")
D.edE=new C.ew("word_count",A2.a21,"Word Count")
D.edB=new C.ew("link_text",A.hL,"Link")
D.edZ=new C.ew("phone",A.j6,"Phone")
D.edq=new C.ew("email",A.CJ,"Email")
D.eej=new C.ew("qr_placeholder",A.jI,"QR Placeholder")
D.edk=new C.ew("rectangle",A4.rY,"Rectangle")
D.edP=new C.ew("circle",A.pm,"Circle")
D.edg=new C.ew("arrow",A.jq,"Arrow")
D.ee7=new C.ew("line",A.t_,"Line")
D.edt=new C.ew("triangle",A.a2s,"Triangle")
D.bQc=new B.a_(63318,"MaterialIcons",!1)
D.edy=new C.ew("grayscale",D.bQc,"Grayscale")
D.edI=new C.ew("brighten",I.ap3,"Brighten")
D.edN=new C.ew("flip_h",A.CM,"Flip H")
D.bQj=new B.a_(63348,"MaterialIcons",!1)
D.eef=new C.ew("flip_v",D.bQj,"Flip V")
D.ee2=new C.ew("cover_page",A.qF,"Cover Page")
D.edd=new C.ew("invoice",A.hf,"Invoice")
D.edo=new C.ew("resume",A.n2,"Resume")
D.edC=new C.ew("minutes",A.pp,"Minutes")
D.edi=new C.ew("lab_report",A.HO,"Lab Report")
D.edj=new C.ew("rubric",A.qI,"Rubric")
D.edO=new C.ew("flashcard_tool",X.HQ,"Flashcard")
D.eea=new C.ew("quiz_tool",A.HM,"Quiz Block")
D.edS=new C.ew("worksheet_tool",P.Hn,"Worksheet")
D.edX=new C.ew("outline_share",A.PM,"Share Outline")
D.eeb=new C.ew("export_json",D.aoP,"Export JSON")
D.edb=new C.ew("new_slide",D.a20,"New Slide")
D.edJ=new C.ew("present",A.qM,"Present")
D.dnv=w([D.eek,D.edu,D.eeg,D.edm,D.edw,D.edY,D.edF,D.edH,D.edD,D.edz,D.ee6,D.edA,D.ee9,D.edM,D.eec,D.ee_,D.ee3,D.edG,D.edv,D.edr,D.ee5,D.edT,D.eee,D.edQ,D.edK,D.edU,D.edl,D.edx,D.edR,D.ede,D.edh,D.edW,D.ee1,D.ee4,D.eed,D.eds,D.edc,D.edn,D.edL,D.edp,D.eda,D.eei,D.ee8,D.edf,D.edV,D.ee0,D.eeh,D.edE,D.edB,D.edZ,D.edq,D.eej,D.edk,D.edP,D.edg,D.ee7,D.edt,D.edy,D.edI,D.edN,D.eef,D.ee2,D.edd,D.edo,D.edC,D.edi,D.edj,D.edO,D.eea,D.edS,D.edX,D.eeb,D.edb,D.edJ],B.as("O<ew>"))
D.dnF=w([A.cu,A.an],x.O)
D.eD2=new B.y(4286331629,4292552567)
D.eCQ=new B.y(4280640491,4278630100)
D.eDa=new B.y(4294538006,4292943176)
D.eCc=new B.y(4278556265,4280640491)
D.dhn=w([D.eD2,D.eCQ,D.eDa,D.eCc],x.n)
D.cEt=w([4294626325,4280472558,4294210230],x.t)
D.ed5=new C.o8("colorful","Colorful",A.ml,D.dhn,4294967295,3875536895,D.cEt,D.na)
D.eCE=new B.y(4279522093,4279657780)
D.eCU=new B.y(4281750292,4283268111)
D.eCf=new B.y(4278603323,4279203438)
D.eCV=new B.y(4282343954,4279599165)
D.cPC=w([D.eCE,D.eCU,D.eCf,D.eCV],x.n)
D.cEb=w([4288931381,4294829706,4287033260],x.t)
D.ed1=new C.o8("nature","Nature",A.HU,D.cPC,4294442727,3874290891,D.cEb,D.dm)
D.eCy=new B.y(4279369771,4283178389)
D.eCv=new B.y(4279179050,4286456526)
D.eCM=new B.y(4280163147,4290648157)
D.eC4=new B.y(4278322711,4285343961)
D.d73=w([D.eCy,D.eCv,D.eCM,D.eC4],x.n)
D.cEp=w([4294210230,4280472558,4289170426],x.t)
D.ed_=new C.o8("vibe","Vibe",A.PA,D.d73,4294967295,3874869502,D.cEp,D.vd)
D.eD6=new B.y(4290007817,4292552567)
D.eD0=new B.y(4286328082,4294286859)
D.eD5=new B.y(4288485197,4294538006)
D.eD_=new B.y(4285343961,4293675161)
D.cae=w([D.eD6,D.eD0,D.eD5,D.eD_],x.n)
D.cEu=w([4294829706,4294967295,4284999929],x.t)
D.ed0=new C.o8("celebration","Celebration",A.kv,D.cae,4294967295,4009752557,D.cEu,D.qY)
D.eCt=new B.y(4279179050,4280171146)
D.eCx=new B.y(4279310375,4280232247)
D.eCl=new B.y(4278916151,4280172719)
D.eCu=new B.y(4279179050,4281549141)
D.d_j=w([D.eCt,D.eCx,D.eCl,D.eCu],x.n)
D.cE6=w([4281908728,4294626325,4287931320],x.t)
D.ed4=new C.o8("professional","Professional",A.CC,D.d_j,4294967295,3872118241,D.cE6,D.TT)
D.eCp=new B.y(4278995566,4278413729)
D.eCh=new B.y(4278727492,4279137424)
D.eCN=new B.y(4280171146,4278751666)
D.eCq=new B.y(4278995566,4279590517)
D.cIk=w([D.eCp,D.eCh,D.eCN,D.eCq],x.n)
D.cE9=w([4286436348,4284410580,4294829706],x.t)
D.ed6=new C.o8("ocean","Ocean",I.a3g,D.cIk,4294967295,3873501950,D.cE9,D.ve)
D.eD1=new B.y(4286328082,4294538006)
D.eD3=new B.y(4286781507,4294677052)
D.eCY=new B.y(4283178389,4294197086)
D.eD4=new B.y(4288295954,4294688548)
D.cWw=w([D.eD1,D.eD3,D.eCY,D.eD4],x.n)
D.cEv=w([4294829706,4294967295,4294747557],x.t)
D.ed7=new C.o8("sunset","Sunset",A.PR,D.cWw,4294967295,4009749973,D.cEv,D.dm)
D.eDe=new B.y(4294967295,4294047225)
D.eD9=new B.y(4294507260,4294967295)
D.eDd=new B.y(4294967295,4293060848)
D.eD8=new B.y(4294507260,4294047225)
D.daq=w([D.eDe,D.eD9,D.eDd,D.eD8],x.n)
D.cE4=w([4280640491,4279179050,4287931320],x.t)
D.ed3=new C.o8("minimal","Minimal",A4.rY,D.daq,4279179050,4282865001,D.cE4,D.dm)
D.eCo=new B.y(4278979081,4280886564)
D.eCI=new B.y(4280031511,4278979081)
D.eCw=new B.y(4279308561,4281148438)
D.eCn=new B.y(4278979081,4280031511)
D.dpH=w([D.eCo,D.eCI,D.eCw,D.eCn],x.n)
D.cEi=w([4292128567,4294829706,4289241758],x.t)
D.ed8=new C.o8("elegant","Elegant",A.mm,D.dpH,4294898631,3873957348,D.cEi,D.aKO)
D.eCK=new B.y(4280159034,4282058596)
D.eCk=new B.y(4278916151,4280163147)
D.eCS=new B.y(4281208933,4278916151)
D.eCB=new B.y(4279502891,4283178389)
D.dxe=w([D.eCK,D.eCk,D.eCS,D.eCB],x.n)
D.cEr=w([4294296657,4292128567,4291081725],x.t)
D.ed2=new C.o8("royal","Royal Gold",A.js,D.dxe,4294965222,3874084351,D.cEr,D.na)
D.eC9=new B.y(4278464302,4280163147)
D.eCj=new B.y(4278916151,4279455306)
D.eCL=new B.y(4280163147,4283040846)
D.eC6=new B.y(4278332450,4281413249)
D.dgZ=w([D.eC9,D.eCj,D.eCL,D.eC6],x.n)
D.cE5=w([4281193663,4289170426,4294210230],x.t)
D.ed9=new C.o8("aurora","Aurora Glow",A.ed,D.dgZ,4293983738,3869766608,D.cE5,D.dm)
D.wU=w([D.ed5,D.ed1,D.ed_,D.ed0,D.ed4,D.ed6,D.ed7,D.ed3,D.ed8,D.ed2,D.ed9],B.as("O<o8>"))
D.boo=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.doe=w([A.ru,D.boo,A.ru],x.O)
D.dov=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.doz=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eSK=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eIq=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eNe=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ezz=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eLQ=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eJY=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eOx=new B.y("Surprise me","")
D.dp8=w([D.eSK,D.eIq,D.eNe,D.ezz,D.eLQ,D.eJY,D.eOx],x.L)
D.bgt=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsL=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dpX=w([A.c,D.bgt,D.bsL],x.O)
D.dsd=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKn=new C.la(0,"heritageGold")
D.bmI=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hEy=w([D.bmI,A_.ahQ,A.aC],x.O)
D.dRs=new C.jC("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKn,4294570461,4284234270,4292128567,D.kb)
D.aKo=new C.la(1,"heritageCrimson")
D.beD=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bkR=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bsx=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hEb=w([D.beD,D.bkR,D.bsx],x.O)
D.dRl=new C.jC("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKo,4294635750,4285213214,4292912216,D.kb)
D.dsi=w([D.a7F,D.a7D,D.dRs,D.dRl,D.a7y,D.a7B],x.h)
D.dXp=new C.rU(1,"circuit")
D.dXS=new C.mp("neural","Neural Link","Robotic",D.dXp,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dXo=new C.rU(0,"grid")
D.dXP=new C.mp("signal","Signal Grid","Robotic",D.dXo,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dXu=new C.rU(2,"hexes")
D.dXA=new C.mp("core","Core Protocol","Robotic",D.dXu,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKL=new C.rU(11,"diagonal")
D.dXL=new C.mp("steel","Steel Tech","Robotic",D.aKL,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKM=new C.rU(3,"rings")
D.dXz=new C.mp("vault","Vault Gold","Robotic",D.aKM,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dXs=new C.rU(13,"leaves")
D.dXC=new C.mp("forest","Forest Morning","Nature",D.dXs,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKN=new C.rU(5,"waves")
D.dXJ=new C.mp("ocean","Ocean Calm","Nature",D.aKN,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dXv=new C.rU(6,"sunset")
D.dXO=new C.mp("sunset","Sunset Glow","Nature",D.dXv,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dXw=new C.rU(7,"mountains")
D.dXB=new C.mp("mountain","Mountain Air","Nature",D.dXw,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dXx=new C.rU(8,"stars")
D.dXI=new C.mp("night","Night Sky","Nature",D.dXx,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7Z=new C.rU(4,"orbs")
D.dXG=new C.mp("aurora","Aurora","Nature",D.a7Z,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dXQ=new C.mp("sand","Sand Dune","Nature",D.aKN,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dXy=new C.rU(9,"rays")
D.dXF=new C.mp("golden","Golden Hour","Warm",D.dXy,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dXD=new C.mp("royal","Royal Purple","Warm",D.aKL,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dXE=new C.mp("rose","Rose Petal","Warm",D.a7Z,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dXr=new C.rU(12,"blocks")
D.dXH=new C.mp("electric","Electric Blue","Bold",D.dXr,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dXR=new C.mp("mint","Fresh Mint","Bold",D.a7Z,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dXt=new C.rU(14,"minimal")
D.dXN=new C.mp("white","Clean White","Clean",D.dXt,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dXq=new C.rU(10,"frame")
D.dXK=new C.mp("midnight","Midnight Gold","Clean",D.dXq,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dXM=new C.mp("community","Community Green","Clean",D.aKM,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6b=w([D.dXS,D.dXP,D.dXA,D.dXL,D.dXz,D.dXC,D.dXJ,D.dXO,D.dXB,D.dXI,D.dXG,D.dXQ,D.dXF,D.dXD,D.dXE,D.dXH,D.dXR,D.dXN,D.dXK,D.dXM],B.as("O<mp>"))
D.dsG=w([D.BR,A.u4,A.i3,A.c4],x.O)
D.dsY=w([D.aiR,D.jB],x.O)
D.dt7=w(["pdf","docx","txt","md"],x.s)
D.f23=new B.b5(-3,150,34)
D.f24=new B.b5(-3,214,62)
D.f25=new B.b5(-3,288,62)
D.du0=w([D.f23,D.f24,D.f25],B.as("O<+(F,F,F)>"))
D.dua=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange mark), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","ADVISOR TRADING ACADEMY: the live browser panel of the advisor chat has a candlestick button that opens the Trading Academy of the advisor. Learn tab: five short lessons on candlesticks, then the advisor studies four markets (real candles, or a practice market when offline), zooming in and out and going back over the past, for five minutes at the most; it learns only once and what it learned (how often the price went up after each shape) is saved on the device for each advisor, and each day it only tops up with the newest candles. Demo tab: practice trades on the past with practice money, so you can see how well it learned. Real tab: NGMY is not connected to a broker and never places real-money trades; the advisor only shows its setup (direction, entry, stop, target) with the reasons, for the person to place themselves, with a clear risk note.","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.duy=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dvh=w(["Write","Design","Print & fold"],x.s)
D.kc=new C.vd(2,"triangle")
D.DW=new C.vd(3,"arrow")
D.fJ=new C.vd(4,"line")
D.kd=new C.vd(5,"parallelogram")
D.dvk=w([D.bk,D.eZ,D.kc,D.DW,D.fJ,D.kd,D.lv],x.m)
D.eB3=new B.y(240,96)
D.eDQ=new B.y(560,46)
D.dvq=w([D.eB3,D.eDQ],x.G)
D.hEJ=new C.yc(0,"classic")
D.dTp=new C.o4("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKn,4294570461,4282000405,4284234270)
D.dTB=new C.o4("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKo,4294635750,4281999378,4285213214)
D.dTq=new C.o4("elegant_navy","Umoja Mzuri",y.s,D.a7Q,4294967035,4279378237,4290283019)
D.dTD=new C.o4("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKw,4294966515,4281016592,4289102906)
D.dTF=new C.o4("kente_sunset","Kente ya Jua",y.H,D.aKp,4294964964,4282000405,4279983648)
D.dTn=new C.o4("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKq,4294439140,4279903102,4279903102)
D.dTs=new C.o4("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKr,4294965484,4285218591,4287322667)
D.dTx=new C.o4("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKs,4294244340,4279196764,4279196764)
D.dTz=new C.o4("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKt,4294505710,4279970378,4291058750)
D.hEK=new C.yc(1,"ringsNdoa")
D.dTr=new C.o4("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.ti,4294966259,4279378237,4291404327)
D.hEM=new C.yc(2,"coupleCards")
D.dTC=new C.o4("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.ti,4294966259,4279378237,4291404327)
D.hEN=new C.yc(3,"kuhoweshaForm")
D.dTy=new C.o4("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DR,4294966519,4279378237,4291404327)
D.hEO=new C.yc(4,"mahariPande")
D.dTo=new C.o4("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.ti,4294966259,4279904068,4291404327)
D.hEP=new C.yc(5,"familiaMti")
D.dTE=new C.o4("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKu,4294966776,4280241466,4291404327)
D.hEQ=new C.yc(6,"ndoaSafi")
D.dTv=new C.o4("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DR,4294966519,4279378237,4291404327)
D.hER=new C.yc(7,"peteWide")
D.dTu=new C.o4("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.ti,4294966259,4282001936,4291404327)
D.hES=new C.yc(8,"muhuriCrest")
D.dTt=new C.o4("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.ti,4294966259,4279378237,4291404327)
D.hET=new C.yc(9,"fomuWazi")
D.dTw=new C.o4("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DR,4294966519,4279904068,4291404327)
D.hEL=new C.yc(10,"upendoOrnate")
D.dTA=new C.o4("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKv,4294965493,4286200650,4291404327)
D.SM=w([D.dTp,D.dTB,D.dTq,D.dTD,D.dTF,D.dTn,D.dTs,D.dTx,D.dTz,D.dTr,D.dTC,D.dTy,D.dTo,D.dTE,D.dTv,D.dTu,D.dTt,D.dTw,D.dTA],B.as("O<o4>"))
D.DU=new C.asN(0,"landscape169")
D.oN=new C.asN(1,"portrait916")
D.dwb=w([D.DU,D.oN],B.as("O<asN>"))
D.aDb=w([A.i3,A.bN,A.cF,A.iq,A.c],x.O)
D.v6=w([A.c4,A.i7],x.O)
D.eA3=new B.y(1000,"M")
D.eFj=new B.y(900,"CM")
D.eDK=new B.y(500,"D")
D.eC_=new B.y(400,"CD")
D.eA4=new B.y(100,"C")
D.eFk=new B.y(90,"XC")
D.eDL=new B.y(50,"L")
D.eC0=new B.y(40,"XL")
D.eAa=new B.y(10,"X")
D.eFw=new B.y(9,"IX")
D.eE1=new B.y(5,"V")
D.eDv=new B.y(4,"IV")
D.eAH=new B.y(1,"I")
D.dwV=w([D.eA3,D.eFj,D.eDK,D.eC_,D.eA4,D.eFk,D.eDL,D.eC0,D.eAa,D.eFw,D.eE1,D.eDv,D.eAH],x.ek)
D.f3j=new B.cu(["open",A.j4,"Open & write","Keep writing this book"])
D.f3K=new B.cu(["print",A.uS,"Print as a book","Fold and staple it"])
D.dx5=w([D.f3j,D.f3K],B.as("O<+(n,a_,n,n)>"))
D.dxN=w([D.a80,D.na,D.Jl,D.TT,D.dm,D.TS],x.i)
D.eTu=new B.y(-1,"Small")
D.ezP=new B.y(0,"Normal")
D.eAE=new B.y(1,"Big")
D.eBk=new B.y(2,"Huge")
D.dym=w([D.eTu,D.ezP,D.eAE,D.eBk],x.ek)
D.dyN=w([49,65,89,38,83,89],x.t)
D.dyT=w([A.u4,A.i3,A.c4],x.O)
D.dzm=w([D.dm,D.na,D.vd,D.a80,D.Jl,D.TT],x.i)
D.aIu=new B.cZ([0,D.Nw,8,D.akp,12,D.akq],B.as("cZ<G,a4S>"))
D.eja={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d_u=w([A.bN,H.ajt],x.O)
D.dlS=w([A.b0,A.bl],x.O)
D.dg2=w([A.bT,A.aH,A.bh],x.O)
D.dx6=w([A.cu,A.bv],x.O)
D.d82=w([A.bb,A.fd],x.O)
D.diY=w([A.b9,A.fn],x.O)
D.bku=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.die=w([D.bku,A.pc],x.O)
D.dcd=w([A.hn,A.y9],x.O)
D.d7Q=w([A.bx,A.ch],x.O)
D.dC2=new B.bu(D.eja,[D.d_u,O.ati,D.dlS,D.dg2,D.dx6,D.d82,D.diY,D.die,D.dcd,D.d7Q],B.as("bu<n,ai<u>>"))
D.eii={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6Q=new B.bu(D.eii,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bu<n,n>"))
D.a6X=new B.bu(A.hZ,[],B.as("bu<G,+icon3d,picture(n?,n?)>"))
D.dGk=new F.NO(30,null)
D.dLz=new F.mO("Chapter 1","","","")
D.dvZ=w([D.dLz],x.B)
D.dLD=new F.rK("My Book","","",D.dvZ,E.aJO)
D.dLB=new F.v3("starry",null,null,null,null,"","","")
D.dLE=new F.rK("Dream Big","","",E.a5O,D.dLB)
D.dLC=new F.v3("story",null,null,null,null,"","","")
D.dLF=new F.rK("Little Lion","","",E.a5O,D.dLC)
D.dLA=new F.v3("vintage",null,null,null,null,"","","")
D.dLG=new F.rK("Our Story","","",E.a5O,D.dLA)
D.dOH=new C.Fj("","NGMY","","")
D.dW2=new C.Ac("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ecZ=new C.b3m(null,null,null,null)
D.eeH=new C.asS(null)
D.eeS=new C.atl(0,"smaller")
D.eeT=new C.atl(1,"bigger")
D.aL1=new C.atl(2,"fit")
D.emL=new B.o(3,6)
D.en4=new B.o(4,8)
D.erg=new B.D(E.alh,V.afo,null)
D.erk=new B.D(A.a_Z,A.kK,null)
D.bSX=new B.ae(A.k7,16,A.bW,null,null,null)
D.ero=new B.D(A.iJ,D.bSX,null)
D.be1=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.erA=new B.D(A.GZ,D.be1,null)
D.c2v=new B.ae(A.cz,16,A.aD,null,null,null)
D.erE=new B.D(A.eA,D.c2v,null)
D.fMl=new B.B("Play",null,A.nY,null,null,null,null,null,null,null,null,null)
D.dm9=w([W.arL,A.tx,D.fMl],x.p)
D.f8o=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dm9,null)
D.erH=new B.D(A.nD,D.f8o,null)
D.bea=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.feO=new B.a6(20,20,D.bea,null)
D.erO=new B.D(A.iJ,D.feO,null)
D.fVR=new B.B("Seconds per slide",null,A.fY,null,null,null,null,null,null,null,null,null)
D.erY=new B.D(A.bi,D.fVR,null)
D.etr=new C.a9K(2,"print")
D.etu=new B.j0(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ev6=new B.he("/Annot")
D.ev8=new B.he("/URI")
D.fGl=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.exD=new B.jE("share",48,D.fGl,null,B.as("jE<n>"))
D.c2p=new B.ae(A.ed,14,A.eL,null,null,null)
D.exM=new B.cL(null,-2,-2,null,null,null,D.c2p,null)
D.d1L=w([H.ail,A.L],x.O)
D.c8X=new B.a9(A.a6,A.aa,A.x,D.d1L,null,null)
D.b6E=new B.p(null,null,null,null,null,D.c8X,A.n)
D.bxL=new B.l5(D.b6E,A.bj,null,null)
D.exY=new B.cL(0,0,null,0,8,null,D.bxL,null)
D.dr9=w([A.i5,A.mR,A.cc],x.O)
D.eyC=new B.c0(A.A,0.5,A.x,null,0,D.dr9,null,null)
D.eBc=new B.y(0.22,A.bl)
D.eFR=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eI4=new B.y(0.5,A.hD)
D.eRQ=new B.y(0.78,A.aY)
D.f38=new B.cu([A.br,0.22,0.7,2.6])
D.f3f=new B.cu([A.bb,0.36,1.2,1.3])
D.f3l=new B.cu([A.dK,0.28,0.2,0.4])
D.f3r=new B.cu([A.cy,0.05,0.3,0.35])
D.f3x=new B.cu([A.bx,0.28,0.9,0])
D.f3F=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f4w=new B.cu([A.bT,0.42,1,4.1])
D.f86=new B.aaI(9)
D.bU2=new B.ae(A.HW,28,A.bh,null,null,null)
D.fWp=new B.B("NGMY News",null,A.di,null,null,null,null,null,null,null,null,null)
D.bI6=new B.bz(1,A.bd,D.fWp,null)
D.duB=w([D.bU2,A.au,D.bI6],x.p)
D.f8i=new B.c7(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.duB,null)
D.bUd=new B.ae(A.nI,16,A.c,null,null,null)
D.fY_=new B.B("Book",null,A.oW,null,null,null,null,null,null,null,null,null)
D.dyS=w([D.bUd,A.e3,D.fY_],x.p)
D.f8r=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dyS,null)
D.c0_=new B.ae(A.j5,10,A.c,null,null,null)
D.fKl=new B.B("Pro",null,A.nV,null,null,null,null,null,null,null,null,null)
D.dme=w([D.c0_,A.r4,D.fKl],x.p)
D.f8v=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dme,null)
D.fVP=new B.B("Make a newspaper",null,A.VO,null,null,null,null,null,null,null,null,null)
D.cac=w([E.a3D,A.ae,D.fVP],x.p)
D.f8w=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.cac,null)
D.bZs=new B.ae(A.kv,18,A.bN,null,null,null)
D.fMz=new B.B("Ending celebration",null,A.hl,null,null,null,null,null,null,null,null,null)
D.dtz=w([D.bZs,A.bm,D.fMz],x.p)
D.f8z=new B.c7(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.dtz,null)
D.c_L=new B.ae(A.j4,18,A.kr,null,null,null)
D.fpU=new B.H(!0,A.kr,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYi=new B.B("Write",null,D.fpU,null,null,null,null,null,null,null,null,null)
D.dae=w([D.c_L,A.ae,D.fYi],x.p)
D.f8G=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dae,null)
D.fKj=new B.B("Download picture",null,A.nW,null,null,null,null,null,null,null,null,null)
D.bKR=new B.qH(A.e2,A.A,A.f,D.fKj,null)
D.bL1=new B.dq(1,A.cr,D.bKR,null)
D.dmE=w([K.arC,A.ae,D.bL1],x.p)
D.f8H=new B.c7(A.aL,A.bc,A.j,A.l,null,A.p,null,0,D.dmE,null)
D.bW3=new B.ae(A.HW,22,A.bh,null,null,null)
D.fUm=new B.B("NGMY NEWS",null,M.aaO,null,null,null,null,null,null,null,null,null)
D.d19=w([D.bW3,A.ae,D.fUm],x.p)
D.f8R=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.d19,null)
D.f92=new B.pA(!1,!1,null,V.XT,null,A.c3,null,null,null)
D.a9T=new B.iM([D.ct,D.dm,D.vd,D.Jk,D.ve,D.aKR],B.as("iM<hF>"))
D.ekZ={title:0,quote:1,closing:2,bio:3}
D.fax=new B.df(D.ekZ,4,x.M)
D.eiE={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.faA=new B.df(D.eiE,5,x.M)
D.eke={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9V=new B.df(D.eke,8,x.M)
D.ejo={Design:0,Transitions:1,Insert:2}
D.faJ=new B.df(D.ejo,3,x.M)
D.hF1=new B.iM([D.a81],B.as("iM<wv>"))
D.ejx={float3d:0,drift:1,pulse:2}
D.faN=new B.df(D.ejx,3,x.M)
D.aSG=new B.iM([D.Jh,D.Ji,D.Jj],B.as("iM<mS>"))
D.eiC={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSJ=new B.df(D.eiC,14,x.M)
D.hF2=new B.df(A.hZ,0,B.as("df<wv>"))
D.eju={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UT=new B.df(D.eju,4,x.M)
D.eiu={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSM=new B.df(D.eiu,30,x.M)
D.ejD={circle:0,triangle:1,hexagon:2,diamond:3}
D.fbe=new B.df(D.ejD,4,x.M)
D.fdH=new B.av(390,844)
D.fex=new B.a6(20,20,A.M8,null)
D.aTB=new B.a6(null,2.5,null,null)
D.feH=new B.a6(18,18,A.M8,null)
D.c_P=new B.ae(A.js,19,A.c,null,null,null)
D.feT=new B.a6(38,38,D.c_P,null)
D.bZ0=new B.ae(A.zs,22,A.c,null,null,null)
D.feW=new B.a6(40,40,D.bZ0,null)
D.ffv=new B.hG(2,10,10,1.15,null)
D.aTI=new B.hG(2,16,14,0.62,null)
D.bFX=new B.R(32,30,32,40)
D.bfJ=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bU_=new B.ae(A.qF,56,D.bfJ,null,null,null)
D.ajs=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fs1=new B.H(!0,D.ajs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRb=new B.B("Your books will live here.",null,D.fs1,null,A.K,null,null,null,null,null,null,null)
D.ddd=w([D.bU_,A.X,D.fRb],x.p)
D.bwG=new B.fj(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.ddd,null)
D.erW=new B.D(D.bFX,D.bwG,null)
D.ffR=new B.mu(D.erW,null)
D.fR8=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.b1(D.fR8,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPc=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new B.b1(D.fPc,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUq=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fgi=new B.b1(D.fUq,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fV_=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new B.b1(D.fV_,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fNP=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fgK=new B.b1(D.fNP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h1j=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fh2=new B.b1(D.h1j,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZk=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new B.b1(D.fZk,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fV8=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new B.b1(D.fV8,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fIs=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fid=new B.b1(D.fIs,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qr,!1,null,null,null,A.t,null)
D.fKt=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fiv=new B.b1(D.fKt,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQO=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.b1(D.fQO,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQu=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new B.b1(D.fQu,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXg=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new B.b1(D.fXg,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fEv=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new B.b1(D.fEv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fLD=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new B.b1(D.fLD,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_Z=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fj6=new B.b1(D.h_Z,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_v=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fja=new B.b1(D.h_v,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDq=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjc=new B.b1(D.fDq,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fWk=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new B.b1(D.fWk,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_4=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fjA=new B.b1(D.h_4,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZW=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fjC=new B.b1(D.fZW,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDh=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new B.b1(D.fDh,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHo=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fk9=new B.b1(D.fHo,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZ7=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkl=new B.b1(D.fZ7,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHa=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fkA=new B.b1(D.fHa,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bo2=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_K=w([A.iq,A.pc,D.bo2,D.afU,A.iq],x.O)
D.fkY=new B.fY(A.A,0,6.283185307179586,A.x,D.d_K,null,null)
D.d9k=w([A.bN,A.c4,A.i3,D.BR,A.bN],x.O)
D.aUg=new B.fY(A.A,0,6.283185307179586,A.x,D.d9k,null,null)
D.dot=w([A.bT,A.br,A.bb,A.b5,A.bh,A.bT],x.O)
D.fl2=new B.fY(A.A,0,6.283185307179586,A.x,D.dot,null,null)
D.d21=w([A.ql,A.pd,A.y6,A.iq,A.ql],x.O)
D.fl3=new B.fY(A.A,0,6.283185307179586,A.x,D.d21,null,null)
D.don=w([A.aP,A.bK,A.aO,A.an,A.aP],x.O)
D.fl4=new B.fY(A.A,0,6.283185307179586,A.x,D.don,null,null)
D.dwI=w([A.bx,A.bb,A.br,A.bT,A.bx],x.O)
D.fl6=new B.fY(A.A,0,6.283185307179586,A.x,D.dwI,null,null)
D.bjo=new B.u(1,0,1,0,A.q)
D.bon=new B.u(1,0,1,1,A.q)
D.bld=new B.u(1,0,0,1,A.q)
D.bh7=new B.u(1,1,0,1,A.q)
D.dsy=w([A.Mq,A.Z9,D.bjo,D.bon,D.bld,D.bh7,A.Mq],x.O)
D.fl7=new B.fY(A.A,0,6.283185307179586,A.x,D.dsy,null,null)
D.flm=new C.axz(2,"immersiveSticky")
D.fln=new C.axz(3,"edgeToEdge")
D.flo=new C.axz(4,"manual")
D.fnX=new B.H(!0,A.o9,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUP=new B.H(!0,A.eU,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fox=new B.H(!0,E.nx,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frg=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frq=new B.H(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frM=new B.H(!0,A.eL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fte=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftp=new B.H(!0,A.jY,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new B.t4(!0,A.JH,null,null,null,null,A.dD,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new B.H(!0,A.jD,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvc=new B.H(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etx=new B.j0(1,1,0.7568627450980392,0.027450980392156862)
D.fvg=new B.t4(!0,D.etx,null,null,null,null,A.dD,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aia=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVD=new B.H(!0,D.aia,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvo=new B.H(!0,D.ajs,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVF=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw2=new B.t4(!0,A.pH,null,null,null,null,A.dD,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwj=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwT=new B.H(!0,D.aia,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KM=new B.H(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxp=new B.H(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new B.H(!0,A.bK,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxD=new B.H(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxU=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5l,null,null,null)
D.fxX=new B.H(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyd=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.H(!0,A.dl,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz0=new B.H(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fza=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzq=new B.H(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWh=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWj=new B.H(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bu8=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fBf=new B.H(!0,D.bu8,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWp=new B.H(!0,E.nx,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBK=new B.H(!0,A.bK,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new B.H(!0,N.lH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD2=new B.B("NEW",null,D.fuk,null,null,null,null,null,null,null,null,null)
D.fDk=new B.B("Hati ya Kuhowesha",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fDN=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.B("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fEX=new B.B("Big quote mark",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fEZ=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fFa=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fFD=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new B.B("How many slides?",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fGd=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fpX=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGz=new B.B("Luxury FX",null,D.fpX,null,null,null,null,null,null,null,null,null)
D.fGU=new B.B("Font",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fH4=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fHb=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fAM=new B.H(!0,A.bK,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHl=new B.B("Example  GA847",null,D.fAM,null,null,null,null,null,null,null,null,null)
D.fHL=new B.B("Design shapes",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fHY=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fI2=new B.B("Non-stop (loop)",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fIg=new B.B("Hati ya Kuhoweya",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fIz=new B.B("Photo studio",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fJ2=new B.B("Add your picture",null,A.jN,null,null,null,null,null,null,null,null,null)
D.ftE=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new B.B("Enter document code",null,D.ftE,null,A.K,null,null,null,null,null,null,null)
D.fJ4=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fr4=new B.H(!0,E.nx,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJu=new B.B("Delete this book?",null,D.fr4,null,A.K,null,null,null,null,null,null,null)
D.fvS=new B.H(!0,E.nx,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKv=new B.B("Your library",null,D.fvS,null,null,null,null,null,null,null,null,null)
D.fKB=new B.B("Delete",null,A.aVw,null,null,null,null,null,null,null,null,null)
D.fKE=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Aw.EG,null,null,null,null,null,null,null,null,null)
D.fKP=new B.B("Element flies in",null,A.aVJ,null,null,null,null,null,null,null,null,null)
D.VZ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fLd=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fLA=new B.B("Cancel",null,E.aVT,null,null,null,null,null,null,null,null,null)
D.fLC=new B.B("The lines and circles that come with the design",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fzz=new B.H(!0,A.ht,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new B.B("DOCUMENT CODE",null,D.fzz,null,null,null,null,null,null,null,null,null)
D.fMV=new B.B("Quotes",null,G.abr,null,null,null,null,null,null,null,null,null)
D.ft0=new B.H(!0,N.lH,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new B.B("Add a picture",null,D.ft0,null,null,null,null,null,null,null,null,null)
D.fNc=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.KG,null,A.K,null,null,null,null,null,null,null)
D.fNg=new B.B("Look & feel",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fNl=new B.B("Rings",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fNr=new B.B("W",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fNB=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VL,null,A.K,null,null,null,null,null,null,null)
D.fNX=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fOH=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fOZ=new B.B("Malipo ya Awamu ya Mahari",null,A.fE,null,null,null,null,null,null,null,null,null)
D.ftt=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPd=new B.B("Create with AI",null,D.ftt,null,A.K,null,null,null,null,null,null,null)
D.fPJ=new B.B("Apply look",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fua=new B.H(!0,A.ev,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQw=new B.B("Type your presentation below",null,D.fua,null,A.K,null,null,null,null,null,null,null)
D.fQz=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWu,null,A.K,null,null,null,null,null,null,null)
D.fQB=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.foQ=new B.H(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQI=new B.B("Done",null,D.foQ,null,null,null,null,null,null,null,null,null)
D.fR2=new B.B("Delete",null,A.nX,null,null,null,null,null,null,null,null,null)
D.fRd=new B.B("Hati ya Kiapo cha Uongozi",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fsj=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fsj,null,A.K,null,null,null,null,null,null,null)
D.fSw=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fSD=new B.B("Layout",null,A.VQ,null,null,null,null,null,null,null,null,null)
D.fTk=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTt=new B.B("X",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fU4=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.xg,null,null,null,null,null,null,null,null,null)
D.fUD=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fUS=new B.B("Hati ya Kuhowa",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fUU=new B.B("Choose a class template",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fUW=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fV2=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fVf=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fVm=new B.B("Done",null,A.aWg,null,null,null,null,null,null,null,null,null)
D.fVx=new B.B("Ending celebration",null,A.di,null,null,null,null,null,null,null,null,null)
D.fVy=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fVN=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A.pO,null,null,null,null,null,null,null,null,null)
D.fWN=new B.B("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fWO=new B.B("What would you like to do?",null,D.aVD,null,null,null,null,null,null,null,null,null)
D.fWT=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fXp=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fXt=new B.B("Hati (Documents)",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fXG=new B.B("Done",null,A.ly,null,null,null,null,null,null,null,null,null)
D.fAB=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXK=new B.B("Delete presentation?",null,D.fAB,null,A.K,null,null,null,null,null,null,null)
D.fY3=new B.B("After the last slide it starts again from the first",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fYf=new B.B("\ud83c\udf33",null,A.EF,null,A.K,null,null,null,null,null,null,null)
D.fYx=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fYE=new B.B("Transfer document",null,A.ng,null,null,null,null,null,null,null,null,null)
D.fYP=new B.B("Add to the slides",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fZb=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fZq=new B.B("Make a book",null,I.aV7,null,null,null,null,null,null,null,null,null)
D.fZu=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fsU=new B.H(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZw=new B.B("Keep this page open until it finishes.",null,D.fsU,null,null,null,null,null,null,null,null,null)
D.fZy=new B.B("Making your video",null,A.di,null,null,null,null,null,null,null,null,null)
D.fZD=new B.B("LANGUAGE",null,R.tD,null,null,null,null,null,null,null,null,null)
D.fZK=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fZS=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZU=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.h_a=new B.B("Delete from the database?",null,A.jN,null,null,null,null,null,null,null,null,null)
D.h_b=new B.B("H",null,A.tC,null,null,null,null,null,null,null,null,null)
D.h_B=new B.B("NGMY Quotes",null,A.di,null,null,null,null,null,null,null,null,null)
D.h04=new B.B("Cover",null,D.aWp,null,null,null,null,null,null,null,null,null)
D.h08=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h09=new B.B("Each page becomes its own slide you can present",null,A.hk,null,null,null,null,null,null,null,null,null)
D.h0w=new B.B("Y",null,A.tC,null,null,null,null,null,null,null,null,null)
D.h0I=new B.B("Crop the picture",null,A.ly,null,null,null,null,null,null,null,null,null)
D.h0P=new B.B("Edit text",null,A.KH,null,null,null,null,null,null,null,null,null)
D.h39=B.dR("a9w")
D.EU=new C.ayV(0,"none")
D.b_o=new C.ayV(1,"zipCrypto")
D.b_p=new C.ayV(2,"aes")
D.hrW=new F.Qm("","",null)
D.ht3=new C.beE(null)
D.hu9=new C.a_T(null)
D.hx8=new C.aet(null)
D.hxa=new C.aG9(null)
D.hzW=new C.a17(null)
D.hAH=new C.a1E(null)
D.hBj=new C.bwE(null)})();(function staticFields(){$.hu_=null
$.hu0=null
$.hu1=null
$.hu2=null
$.hbc=B.wW("_lastQuoRemDigits")
$.hbd=B.wW("_lastQuoRemUsed")
$.azh=B.wW("_lastRemUsed")
$.hbe=B.wW("_lastRem_nsh")
$.qu=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8k=B.T(x.N,x.I)
$.h8D=!1
$.hz_=B.T(B.as("la"),x.N)
$.hzb=B.T(B.as("la"),x.E)
$.hx7=!1
$.bCi="q"
$.Rq=0
$.Dm=B.T(x.N,B.as("ai<Ad>"))
$.hxu=!1
$.hcX=!1
$.hE7=null
$.i8N=B.T(x.N,B.as("aB<n?>"))
$.Lg=""
$.jc=0
$.hqQ=function(){var w=x.N
return B.T(w,w)}()
$.hqP=B.T(x.N,x.R)
$.hdh=!1
$.ah9=B.T(x.N,x.E)
$.he8=0
$.bmU=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izl","DJ",()=>C.bc6(0))
w($,"izj","a3V",()=>C.bc6(1))
w($,"izk","hI1",()=>C.bc6(2))
w($,"izi","hii",()=>$.a3V().vF(0))
w($,"izg","hI_",()=>C.bc6(1e4))
w($,"izh","hI0",()=>B.F_(8))
w($,"iv1","hFV",()=>B.F_(0))
w($,"iv9","hFZ",()=>B.F_(0))
w($,"iv8","hFY",()=>B.c2z(0))
w($,"iDi","hKa",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6Q.gdO(D.a6Q),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iDK","bGP",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.na(new C.fTO(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.na(new C.fTP(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.na(new C.fTQ(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.na(new C.fU0(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.na(new C.fU5(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.na(new C.fU6(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.na(new C.fU7(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.na(new C.fU8(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.na(new C.fU9(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.na(new C.fUa(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.na(new C.fUb(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.na(new C.fTR(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.na(new C.fTS(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.na(new C.fTT(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.na(new C.fTU(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.na(new C.fTV(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.na(new C.fTW(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.na(new C.fTX(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.na(new C.fTY(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.na(new C.fTZ(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.na(new C.fU_(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.na(new C.fU1(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.na(new C.fU2(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.na(new C.fU3(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.na(new C.fU4(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fs>"))})
w($,"iDl","hKc",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["q2ah8+yNXSTwCiZtj/6dwQIbzTI="]=a.current})($__dart_deferred_initializers__);