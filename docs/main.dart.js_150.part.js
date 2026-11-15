((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A8,Ak,Al,V,A9,Am,An,C={
uk(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hbd(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KE(d){var w
if(d===0)return $.DM()
if(d===1)return $.a3X()
if(d===2)return $.hHZ()
if(Math.abs(d)<4294967296)return C.bc5(A.o.M(d))
w=C.i2h(d)
return w},
bc5(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.uk(4,w)
return new C.ok(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.uk(1,w)
return new C.ok(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.uk(2,w)
return new C.ok(v===0?!1:s,w,v)}v=A.o.aq(A.o.galA(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.uk(v,w)
return new C.ok(v===0?!1:s,w,v)},
i2h(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dM("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DM()
w=$.hHY()
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
q=new C.ok(!1,r,4)
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hbe(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hu_(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
htV(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.hbe(d,e,s,g)
w=e+s+1
C.hu_(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i2k(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cOo(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i2i(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bc6(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hu0(d,e,f,g,h,i){var w,v,u,t,s,r
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
i2j(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
ok:function ok(d,e,f){this.a=d
this.b=e
this.c=f},
cOp:function cOp(){},
cOq:function cOq(){},
cOr:function cOr(d,e){this.a=d
this.b=e},
cOs:function cOs(d){this.a=d},
aTp:function aTp(d,e){this.a=d
this.b=e},
hjG(d,e,f){var w=new C.SV(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SV:function SV(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4U:function a4U(d,e){this.a=d
this.b=e},
bKr:function bKr(d){this.a=d
this.c=this.b=0},
hLj(){return new C.bIJ()},
bIJ:function bIJ(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGo:function cGo(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i1Y(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cc(d.gd2S(d)))
v=f*2+2
u=C.hrF(C.hrH(),64)
t=new C.cp5(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cp6(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQG(w,0,s,0))},
cGm:function cGm(d,e){this.c=d
this.d=e},
ayV:function ayV(d,e){this.a=d
this.b=e},
cGp:function cGp(d,e,f,g){var _=this
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
baM:function baM(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGn:function cGn(){this.a=$},
htu(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hL2(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHj:function bHj(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hhi(d,e){e&=31
return(d&$.qz[e])<<e>>>0},
nQ(d,e){e&=31
return(d>>>e|C.hhi(d,32-e))>>>0},
hrG(d){var w,v=new C.aut()
if(B.iU(d))v.aMK(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hrH(){var w=C.hrG(0),v=new Uint8Array(4),u=x.S
u=new C.cp7(w,v,A.Fm,5,B.c_(5,0,!1,u),B.c_(80,0,!1,u))
u.ir(0)
return u},
hrF(d,e){var w=new C.cp3(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cp2:function cp2(){},
cp6:function cp6(d,e,f){this.a=d
this.b=e
this.c=f},
cp0:function cp0(){},
aus:function aus(d){this.a=d},
cp5:function cp5(d){this.a=$
this.b=d
this.c=$},
cp1:function cp1(){},
cp_:function cp_(){},
aut:function aut(){this.b=this.a=$},
cp4:function cp4(){},
cp7:function cp7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cp3:function cp3(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
coZ:function coZ(){},
coY:function coY(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSH:function bSH(){},
bSI:function bSI(d){this.a=d},
czv:function czv(){},
bTJ:function bTJ(d,e){this.a=d
this.b=!1
this.c=e},
bTK:function bTK(){},
ieN(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axw(d){var w=0,v=B.j(x.H),u
var $async$axw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.flN?2:4
break
case 2:w=5
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axw)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIOverlays",C.ieN(null),u),$async$axw)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axw,v)},
axz:function axz(d,e){this.a=d
this.b=e},
a9y:function a9y(d){this.a=d},
ihy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fGy(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
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
fGy:function fGy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoW(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ai2("ngmy_menu_lib_v1_zzslides_index",A.bN),$async$aoW)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cF(t,new C.c3F(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3G())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoW,v)},
aoY(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoW(),$async$aoY)
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
return B.b(B.nP("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$aoY)
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
return B.b(B.nP("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$aoY)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoY,v)},
c3H(d){return C.hR7(d)},
hR7(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3H=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ai2("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ic),$async$c3H)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xb(B.a3(q,x.N,x.z))
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
return B.i($async$c3H,v)},
aoX(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoW(),$async$aoX)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nT(r,new C.c3I(d))
w=4
return B.b(B.nP("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$aoX)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aRs("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoX)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoX,v)},
c3F:function c3F(){},
c3G:function c3G(){},
c3I:function c3I(d){this.a=d},
isn(d,e,f){return B.bT(A.L,null,new C.fXv(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fXv:function fXv(d,e,f){this.a=d
this.b=e
this.c=f},
a2a:function a2a(d,e,f,g){var _=this
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
fhT:function fhT(d,e){this.a=d
this.b=e},
fhX:function fhX(d){this.a=d},
fhY:function fhY(d){this.a=d},
fhZ:function fhZ(d,e,f){this.a=d
this.b=e
this.c=f},
fhU:function fhU(d){this.a=d},
fhV:function fhV(d){this.a=d},
fhW:function fhW(d,e){this.a=d
this.b=e},
fhO:function fhO(d){this.a=d},
fhM:function fhM(d){this.a=d},
fhN:function fhN(d){this.a=d},
fhP:function fhP(d){this.a=d},
fhQ:function fhQ(d){this.a=d},
fi2:function fi2(d,e){this.a=d
this.b=e},
fi1:function fi1(d,e){this.a=d
this.b=e},
fhS:function fhS(d,e,f){this.a=d
this.b=e
this.c=f},
fhR:function fhR(d,e,f){this.a=d
this.b=e
this.c=f},
fi_:function fi_(d,e){this.a=d
this.b=e},
fi0:function fi0(d,e){this.a=d
this.b=e},
fi5:function fi5(d){this.a=d},
fi6:function fi6(d,e){this.a=d
this.b=e},
fi4:function fi4(d,e){this.a=d
this.b=e},
fi3:function fi3(){},
hwu(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cF(v,new C.fpw(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fpx(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a38(d){return C.iiU(d)},
iiU(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a38=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fJK(n)
t=4
j=m
i=C
w=7
return B.b(B.a3J("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a38)
case 7:j.$1(i.hwu(f))
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
return B.b(B.aA(),$async$a38)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hwu(B.aW(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fpF(d),$async$a38)
case 13:p=j.C(new i.Y(h,new g.fJI(f),o),o.k("M.E"))
A.d.aZ(p,new C.fJJ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a38,v)},
aiD(d,e){return C.is1(d,e)},
is1(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiD=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fWY(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiv("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiD)
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
return B.b(B.aA(),$async$aiD)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiD)
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
return B.i($async$aiD,v)},
fpF(d){return C.i6W(d)},
i6W(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fpF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fpF)
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
return B.i($async$fpF,v)},
ahw(d,e){return C.ihq(d,e)},
ihq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahw=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahw)
case 6:s=g
r=B.aR(x.N)
q=s.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fW(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ch.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahw)
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
return B.b(C.a38(d),$async$ahw)
case 8:n=g
J.nT(n,new C.fGc(e))
w=9
return B.b(C.aiD(d,n),$async$ahw)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahw,v)},
iss(d,e){return B.a6(d,!1).cd(B.ec(new C.fXR(e),!0,null,x.H))},
i2m(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cPM())},
oO:function oO(d,e,f){this.a=d
this.b=e
this.c=f},
fpw:function fpw(){},
fpx:function fpx(){},
fJK:function fJK(d){this.a=d},
fJI:function fJI(d){this.a=d},
fJJ:function fJJ(){},
fWY:function fWY(){},
fGc:function fGc(d){this.a=d},
fXR:function fXR(d){this.a=d},
ZT:function ZT(d,e){this.c=d
this.a=e},
azu:function azu(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPM:function cPM(){},
cPO:function cPO(d,e){this.a=d
this.b=e},
cPR:function cPR(d){this.a=d},
cPS:function cPS(d){this.a=d},
cPQ:function cPQ(){},
cPT:function cPT(d,e){this.a=d
this.b=e},
cPP:function cPP(d){this.a=d},
cPU:function cPU(){},
cPN:function cPN(d,e){this.a=d
this.b=e},
cPV:function cPV(){},
cPI:function cPI(d){this.a=d},
cPG:function cPG(d){this.a=d},
cPH:function cPH(d){this.a=d},
cPJ:function cPJ(d,e){this.a=d
this.b=e},
cPF:function cPF(d){this.a=d},
cPE:function cPE(d){this.a=d},
cPC:function cPC(d,e){this.a=d
this.b=e},
cPD:function cPD(d){this.a=d},
cPL:function cPL(){},
cPK:function cPK(d){this.a=d},
cPB:function cPB(d,e){this.a=d
this.b=e},
cPA:function cPA(d,e){this.a=d
this.b=e},
cPz:function cPz(d,e){this.a=d
this.b=e},
cPW:function cPW(d){this.a=d},
ZR:function ZR(d,e,f){this.c=d
this.d=e
this.a=f},
aGN:function aGN(d,e,f){this.a=d
this.b=e
this.c=f},
azq:function azq(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cP2:function cP2(d){this.a=d},
cP1:function cP1(d){this.a=d},
cP4:function cP4(d,e,f){this.a=d
this.b=e
this.c=f},
cPc:function cPc(){},
cPd:function cPd(d){this.a=d},
cP5:function cP5(d,e,f){this.a=d
this.b=e
this.c=f},
cP3:function cP3(d,e){this.a=d
this.b=e},
cP7:function cP7(d,e){this.a=d
this.b=e},
cP8:function cP8(d,e){this.a=d
this.b=e},
cP9:function cP9(d,e){this.a=d
this.b=e},
cP6:function cP6(d){this.a=d},
cPb:function cPb(d){this.a=d},
cPa:function cPa(d,e){this.a=d
this.b=e},
cPi:function cPi(d){this.a=d},
cPe:function cPe(d,e){this.a=d
this.b=e},
cPf:function cPf(d,e){this.a=d
this.b=e},
cPg:function cPg(d,e){this.a=d
this.b=e},
cPh:function cPh(d,e){this.a=d
this.b=e},
azs:function azs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ili(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fOi(),x.H).eG(new C.fOj())}}else if(s)C.hy3()}catch(t){}},
hy3(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eG(new C.ftR())}catch(u){}},
ill(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fOi:function fOi(){},
fOj:function fOj(){},
ftR:function ftR(){},
hCX(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
hCU(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.ls)return null
return A.a.b2(w,14)},
hfX(d){var w
if(d.b!==D.ls)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ilL(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hCY(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ilG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cF(u,new C.fPh(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gq(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SC(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SC(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ilE(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fPg())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSs(w,u,s,0)}return w},
ilI(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6T:$.hK7(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hCV(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fqB(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hCX(q)===e)return q}return null},
ilJ(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.I7).a},
ilK(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afk(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afk(0,0,0)
v=C.fqB(b6,b0)
u=C.fqB(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ilI(b2,C.ilG(C.hCV(b2),v.r))
if(s.a!==0){u.r=C.ilE(C.hCV(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hCX(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fqB(b6,n)
i=C.fqB(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.hfX(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hCU(a8)===a0||C.hfX(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RR(a1,new C.fPn(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eQ(""+1000*a6+"_"+a9,D.ls,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,d.at,D.bk,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ct,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afk(k,t,e)},
ilF(d){var w=C.ilJ(d)
if(d.w==="hati_kuhowa")return C.hCh("",w)
return C.hCg("",w)},
fPh:function fPh(){},
fPg:function fPg(){},
fPn:function fPn(d){this.a=d},
hxL(){var w=new B.V(Date.now(),0,!1),v=new C.fsT()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hg5(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fQf(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ls&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hDb(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fQf(d)
w=B.bj(u)
if(w==null)return!C.fQf(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
imq(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hVa(d){return A.a.i(d).toLowerCase()},
arm(d){return C.hVc(d)},
hVc(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$arm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$arm)
case 7:r=f
p=r.tS("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.iqC(),B.U(o).k("N<1,n>")).bY(0,new C.cfr())
o=B.d2(o,o.$ti.k("M.E"))
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
arl(d,e){return C.hVb(d,e)},
hVb(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arm(d),$async$arl)
case 3:r=g
if(!J.c5(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$arl)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q0(r)),$async$arl)
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
arn(d,e){return C.hVd(d,e)},
hVd(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arn=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arm(d),$async$arn)
case 3:r=g
if(!J.h9(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$arn)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q0(r)),$async$arn)
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
Wz(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wz=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h8B&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Wz)
case 7:r=a7
q=B.aW(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.i8(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.Xb(B.a3(f.a(n.b),e,a0)))}$.a8m=o}}t=2
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
return B.b(B.c9(),$async$Wz)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uB("civic_hati_kiapo_uongozi",null,A.el),$async$Wz)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.i8(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.Xb(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8m.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a8m.n(0,i.a,i.b)}w=20
return B.b(C.aro(),$async$Wz)
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
case 16:case 9:$.h8B=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wz,v)},
aro(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aro=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aro)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8m,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.aw(r,null)),$async$aro)
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
b1u(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wz(!1),$async$b1u)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8m.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEQ(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1u,v)},
a8n(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8n=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hQ()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a8m.n(0,d,o)
$.h8B=!0
w=3
return B.b(C.aro(),$async$a8n)
case 3:w=4
return B.b(B.c9(),$async$a8n)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8m,n=new B.ck(n,B.a4(n).k("ck<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.aj())}w=9
return B.b(B.nP("civic_hati_kiapo_uongozi",B.I(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],e,x.z),null),$async$a8n)
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
return B.i($async$a8n,v)},
arp(d){var w=0,v=B.j(x.T),u,t,s
var $async$arp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a6L(A.eO),$async$arp)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$arp)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1t(t,d),$async$arp)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arp,v)},
b1t(d,e){return C.hVe(d,e)},
hVe(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1t=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b1t)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iB("media")
w=8
return B.b(p.xI(q,new Uint8Array(B.cc(d)),D.bKW),$async$b1t)
case 8:n=p.Dd(q)
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
return B.i($async$b1t,v)},
Lr(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
fsk(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hcS(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.i.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
frT(d,e,f,g){return C.fsk(0,0.002,D.fL,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hcT(d,e,f,g,h,i,j,k){var w=C.cE()
return C.er(A.ra,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
hxK(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
bEQ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hxK(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.ls&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hfB(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cq(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hxK(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
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
A.d.bt(a1.z,new C.fOg(a2))}else A.d.bt(a1.z,new C.fOh())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fQf(a0))a0.ax=a6.f.aa().ag()
return a0},
hfB(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fR2(D.a7T),l=C.cE(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lS,1,0,0)],k),i=B.a([],k)
i.push(C.Lr("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lr("TAREHE:",A.bn,o,16,A.bt,A.I,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hcS("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hxL()))
i.push(C.frT(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lr("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lr("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cH,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fsk(0,0.002,D.fL,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hcT("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hcT("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hcT("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fsk(268435456,0.175,D.bk,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lr("VIDEO YA KIAPO",A.bn,o,10,A.bt,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lS,0.77,0.115,0.492))
i.push(C.Lr("Rais Anayeapa:",A.bn,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lr("Jina:",A.bn,p,13,A.bt,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hcS("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.frT(0.195,0.7130000000000001,0.62,n))
i.push(C.Lr("Sahihi:",A.bn,p,13,A.bt,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.frT(0.21500000000000002,0.795,0.38,n))
i.push(C.Lr("Tarehe:",A.bn,p,13,A.bt,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hcS("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hxL()))
i.push(C.frT(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fsk(0,0.032,D.bk,o,1,"state_box",0.72,0.14,0.875),C.Lr("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rY(4294967035,t,0,0,j,l,D.r_,"","",u,D.dm)
return C.Cq(t,t,t,t,D.oP,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahE=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fgv)
w=1
break}w=3
return B.b(C.Wz(!0),$async$ahE)
case 3:w=4
return B.b(C.b1u(p),$async$ahE)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hDb(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bmg,null,new C.fJ6(p),f,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahE)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fJ7(),f,null,!0,!0,x.y),$async$ahE)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hfB(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b4(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hfB(p))
case 1:return B.h(u,v)}})
return B.i($async$ahE,v)},
fsT:function fsT(){},
cfr:function cfr(){},
fOg:function fOg(d){this.a=d},
fOh:function fOh(){},
fJ6:function fJ6(d){this.a=d},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(d){this.a=d},
fJ7:function fJ7(){},
fJ2:function fJ2(d){this.a=d},
fJ3:function fJ3(d){this.a=d},
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
elA:function elA(d){this.a=d},
ely:function ely(d){this.a=d},
elz:function elz(d){this.a=d},
elB:function elB(d){this.a=d},
elC:function elC(d){this.a=d},
xb(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
hxl(d,e,f){var w=4291404327
return B.a([C.qy(0,f,D.eZ,w,2,"ring_l",f,d-f*0.42,e),C.qy(0,f,D.eZ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fri(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qy(4294967288,f,D.eZ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qy(h,s,D.eZ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qy(h,f*0.46,D.eZ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qy(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
frh(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.i.ad(g,3)+":"+A.o.ad(j,1):u+A.i.ad(g,3),4280640491,j,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,l,0,0,"",D.ct,D.cW,g,e,f)},
bCd(d,e,f,g){return C.qy(0,0.002,D.fL,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hxk(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qy(0,0.036,D.bk,h,1.4,"banner_box_"+d,w,v,e),C.xb(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hCW(){var w=new B.V(Date.now(),0,!1),v=new C.fPm()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hxm(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.xb(r+".",A.bn,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.frh("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bCd(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.xb("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,s,t,g-0.004),C.bCd(t,g+0.044,s,w)],x.u)},
ai4(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dsB,D.cuE,D.dks,D.dmu],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hc3(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fR2(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lS,1,0,0)],x.u)
A.d.v(v,C.i9A(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i9A(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.xb("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hxl(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hxl(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fri(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fri(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.xb("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qy(0,0.062,D.eZ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qy(0,0.046,D.eZ,b1,1,"crest_i",0.084,0.458,0.02),C.xb("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qy(0,0.002,D.fL,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qy(b9,0.016,D.lt,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qy(0,0.002,D.fL,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.xb("TAREHE:",A.bn,c0,20,A.I,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.frh("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hCW()),C.bCd(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.xb(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qy(c0,0.0026,D.bk,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qy(c3.e,0.138,D.bk,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.i.ad(0.82,3),b2,19,A.bt,A.cD,"",0.128,s,a9,"","",0,!1,"",0,D.bk,b3,2,c5,0,0,"",D.ct,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.i.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qy(0,0.036,D.bk,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.i.ad(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bk,b3,2,c7,0,0,"",D.ct,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hxk(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.xb(c9,A.bn,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.i.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.frh("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
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
d=B.a([new C.eQ(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bt,A.aG,c0,A.bn,a9,D.bk,b2,b3,2,0,!1,s,0,D.ct,0,"","","","","",!1,0),j,new C.eQ(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.fL,0,b5,0.8,0,!1,g,0,D.ct,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eQ(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aG,b7,A.e1,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aG,b7,A.K,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ct,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hxk("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7K||w===D.a7M||w===D.a7J||w===D.a7L){w=t-0.008
A.d.v(c2,C.fri(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fri(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qy(0,a4,D.bk,c0,1.3,"wit_table_border",0.82,0.09,t),C.qy(c0,a4,D.bk,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qy(0,0.0022,D.fL,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.xb("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.xb("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hxm("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hxm("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qy(0,0.11,D.bk,c0,1.2,"mw_box",0.82,0.09,t),C.xb("MWANDISHI",A.bn,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.xb("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.frh("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bCd(0.215,p,0.3116,b5),C.xb("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.3161999999999999,0.5738,s-0.044),C.bCd(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qy(0,0.032,D.bk,c0,1,"state_box",0.7,0.15,a8),C.xb("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ilH(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hgf(d.d),p=new C.fPi(s),o=new C.fPj(s),n=d.z,m=n===D.a7K||n===D.a7M||n===D.a7J||n===D.a7L,l=n===D.aK2||n===D.a7N||n===D.aK3,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7N?26:16
i.push(new C.fPl().$1$size(w))}if(n===D.aK4)i.push(D.fYG)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iT,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.m(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.an)
n=B.L(r,A.r,1.1)
w=B.l(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTF,p.$1$w(0.9),D.aTF,p.$1$w(0.75)],j),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(D.bgL,t,n,w,t,t,A.n),t,t,t,t,A.amV,t,t,t))
i.push(A.an)
i.push(new C.fPk(r).$1("NIMETOWE"))
i.push(A.fO)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NT,new B.c8(A.aL,A.e,A.j,A.l,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.de,new B.bz(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b5)
i.push(B.d(d.b,t,t,t,t,t,t,B.m(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b3,A.t,B.a([k,new B.D(A.alv,B.x(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
hCg(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ai4(e,t)
if(r==null)r=A.d.gH(D.I7)
w=C.cE()
v=C.rY(r.e,t,0,0,C.hc3(r,0.165,y.O,D.dn6,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r_,"","",s,D.dm)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cq(t,t,t,t,D.oP,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hCh(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ai4(e,t)
if(r==null)r=A.d.gH(D.I7)
w=C.cE()
v=C.rY(r.e,t,0,0,C.hc3(r,0.165,y.f,D.diq,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r_,"","",s,D.dm)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cq(t,t,t,t,D.oP,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGa(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGa=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0q(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGa,v)},
ahF(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJa(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N0,null,new C.fJb(p),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahF)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Hati ya Kuhowa",D.I7),$async$ahF)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M6(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahF)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCg(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahF,v)},
ahG(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJe(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N0,null,new C.fJf(p),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahG)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Hati ya Kuhoweya",D.I7),$async$ahG)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M6(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahG)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCh(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahG,v)},
ahH(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahH=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fJi(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N0,null,new C.fJj(m),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahH)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGa(d,"Malipo ya Awamu ya Mahari",D.Sp),$async$ahH)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M6(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahH)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ai4(s,D.Sp)
if(q==null)q=A.d.gH(D.Sp)
n=C.cE()
p=C.rY(q.e,null,0,0,C.hc3(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dcU,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r_,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dm)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cq(null,null,null,null,D.oP,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
ye:function ye(d,e){this.a=d
this.b=e},
jD:function jD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fPm:function fPm(){},
fPi:function fPi(d){this.a=d},
fPk:function fPk(d){this.a=d},
fPl:function fPl(){},
fPj:function fPj(d){this.a=d},
h0q:function h0q(d,e){this.a=d
this.b=e},
aes:function aes(d,e,f){this.c=d
this.d=e
this.a=f},
e8_:function e8_(d,e,f){this.a=d
this.b=e
this.c=f},
e7Z:function e7Z(d,e){this.a=d
this.b=e},
e7Y:function e7Y(d,e){this.a=d
this.b=e},
adR:function adR(d,e,f){this.c=d
this.d=e
this.a=f},
fJa:function fJa(){},
fJb:function fJb(d){this.a=d},
fJ8:function fJ8(d){this.a=d},
fJ9:function fJ9(d){this.a=d},
fJe:function fJe(){},
fJf:function fJf(d){this.a=d},
fJc:function fJc(d){this.a=d},
fJd:function fJd(d){this.a=d},
fJi:function fJi(){},
fJj:function fJj(d){this.a=d},
fJg:function fJg(d){this.a=d},
fJh:function fJh(d){this.a=d},
Lu(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,k,l,m)},
Ds(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hy6(d,e,f){return C.Ds(0,0.002,D.fL,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCo(d,e,f,g,h){return B.a([C.Ds(4294967288,0.032,D.bk,4291404327,1.15,"pill_"+d,g,f,e),C.Lu(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hcX(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Ds(0,0.002,D.fL,g,1,"orn_l_"+t,u,d,v),C.Ds(h,0.016,D.lt,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Ds(0,0.002,D.fL,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2y(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lu(d,A.bn,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.i.ad(t,3),4280640491,i,A.cH,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,t,u,g-0.002),C.hy6(u,g+0.018,t)],x.u)},
hy7(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Ds(h,0.028,D.bk,h,0,"chv_"+d,g,e,f),C.Ds(w,0.024,D.lt,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Ds(w,0.024,D.lt,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lu(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCn(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lu("Sahihi:",A.bn,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,v,w,f-0.006),C.hy6(w,f+0.016,v)],x.u)},
hgg(d){var w,v
for(w=0;w<19;++w){v=D.SF[w]
if(v.a===d)return v}return null},
io3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.ai4(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.ai4(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ai4(u,D.Sp)
v=w==null?l:w.d
if(v==null){w=C.ai4(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hgg(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hyX.a8(0)
$.hz8.a8(0)
t=C.fR2(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hhq(d){var w=0,v=B.j(x.T),u
var $async$hhq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h1T(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhq,v)},
yh:function yh(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blA:function blA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h1T:function h1T(){},
aev:function aev(d){this.a=d},
eqm:function eqm(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
agb:function agb(d,e,f){this.c=d
this.d=e
this.a=f},
hgf(d){return $.hz8.c3(0,d,new C.fR4(d))},
fR2(d){return $.hyX.c3(0,d,new C.fR3(d))},
fG(d){return B.h6a(d>>>16&255,d>>>8&255,d&255,255)},
icO(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hAe(4294570461,4293910718,4284234270,u)
case 1:return C.hAe(4294635750,4293975240,t,4292912216)
case 2:w=C.fpQ(s,4294505966,r)
C.bC7(w,14,16,p)
C.kK(w,8,9,464,836,u,1.2)
C.Do(w,2,2,1,1,u,10)
C.Do(w,478,2,-1,1,u,10)
C.Do(w,2,852,1,-1,u,10)
C.Do(w,478,852,-1,-1,u,10)
return w
case 3:return C.fpQ(4294966515,4294373082,4289102906)
case 4:return C.i7h(C.fpQ(4294376440,4293653998,4290287194))
case 5:w=C.fpQ(4294965238,4294437098,4288444980)
C.bC7(w,14,16,4283043359)
C.kK(w,6,7,468,840,u,1)
C.kK(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,n,4294175448)
C.ti(v,n)
C.kK(v,24,24,432,806,4286209070,1)
C.a2l(v,12,12,468,12,o,3,20)
C.a2l(v,12,842,468,842,o,3,20)
C.a2l(v,12,12,12,842,o,3,20)
C.a2l(v,468,12,468,842,o,3,20)
return v
case 7:return C.i51(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,m,4293911504)
C.ti(v,m)
C.kK(v,28,28,424,798,l,1)
C.fzy(v,28,28,l,k)
C.fzy(v,452,28,l,k)
C.fzy(v,28,826,l,k)
C.fzy(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,j,4294111986)
C.ti(v,j)
C.kK(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fG(p),0,13,0,853)
return v
case 10:return C.i9m(i,4294173372)
case 11:return C.iax(4294439140,4293449662)
case 12:return C.i4O(h,4294239432)
case 13:return C.i9X(4294244340,4293193448)
case 14:return C.iej(4294505710,4293780694)
case 15:return C.foH(4294966259,4294439138,o,p,q)
case 16:return C.foH(4294966776,4294178544,o,g,g)
case 17:return C.foH(4294965493,4294504170,o,4286200650,q)
case 18:return C.foH(4294966519,4294373862,o,p,p)
case 19:return C.i8s()
case 20:return C.i8t()
case 21:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,h,4293976768)
C.ti(v,h)
C.bC7(v,14,16,p)
B.iW(v,!0,C.fG(u),4,475,4,9)
B.iW(v,!0,C.fG(u),4,475,844,849)
B.iW(v,!0,C.fG(u),4,9,4,849)
B.iW(v,!0,C.fG(u),470,475,4,849)
C.a2l(v,10,12,470,12,u,2,16)
C.a2l(v,10,842,470,842,u,2,16)
C.a2l(v,10,12,10,842,u,2,18)
C.a2l(v,470,12,470,842,u,2,18)
C.Do(v,2,2,1,1,t,10)
C.Do(v,478,2,-1,1,t,10)
C.Do(v,2,852,1,-1,t,10)
C.Do(v,478,852,-1,-1,t,10)
C.kK(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,s,4294438872)
C.ti(v,s)
C.kK(v,14,16,452,822,o,2.2)
C.kK(v,22,24,436,806,o,1)
C.hem(v,!1,!1,o,p,p,36,14,16)
C.l0(v,240,20,7,o,!0)
C.l0(v,240,834,7,o,!0)
C.l0(v,18,427,7,o,!0)
C.l0(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,i,4293910712)
C.ti(v,i)
B.iW(v,!0,C.fG(u),0,479,0,20)
B.iW(v,!0,C.fG(u),0,479,834,853)
B.iW(v,!0,C.fG(u),0,20,0,853)
B.iW(v,!0,C.fG(u),460,479,0,853)
B.iW(v,!0,C.fG(f),5,474,5,9)
B.iW(v,!0,C.fG(f),5,474,844,848)
B.iW(v,!0,C.fG(f),5,9,5,848)
B.iW(v,!0,C.fG(f),470,474,5,848)
C.kK(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cc,0,A.e9,854,q,0,3,q,A.cc,480,!1)
C.z9(v,e,4294174404)
C.ti(v,e)
C.bC7(v,14,16,p)
B.iW(v,!0,C.fG(u),3,476,3,8)
B.iW(v,!0,C.fG(u),3,476,845,850)
B.iW(v,!0,C.fG(u),3,8,3,850)
B.iW(v,!0,C.fG(u),471,476,3,850)
C.kK(v,9,10,462,834,t,1)
C.kK(v,14,16,452,822,u,1.8)
C.l0(v,240,8,4,u,!0)
C.l0(v,240,846,4,u,!0)
C.l0(v,8,427,4,u,!0)
C.l0(v,472,427,4,u,!0)
C.l0(v,8,8,3,t,!0)
C.l0(v,472,8,3,t,!0)
C.l0(v,8,846,3,t,!0)
C.l0(v,472,846,3,t,!0)
return v}},
z9(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.l2(d,!1,A.di,new B.MK(s),r,A.d2,1,0,w-1,k,k);++k}},
ti(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e5()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.i.M(s.gb9(s))-3,0,255)
r=A.o.D(A.i.M(s.gbe())-3,0,255)
q=A.o.D(A.i.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kK(d,e,f,g,h,i,j){var w,v=null,u=C.fG(i),t=e+g
B.l2(d,!0,A.di,u,v,A.d2,j,e,t,f,f)
w=f+h
B.l2(d,!0,A.di,u,v,A.d2,j,e,t,w,w)
B.l2(d,!0,A.di,u,v,A.d2,j,e,e,f,w)
B.l2(d,!0,A.di,u,v,A.d2,j,t,t,f,w)},
Do(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.l2(d,!0,A.di,C.fG(i),u,A.d2,2,e,e+g*j,f,f)
B.l2(d,!0,A.di,C.fG(i),u,A.d2,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l2(d,!0,A.di,C.fG(i),u,A.d2,1,w,e+g*t,v,v)
B.l2(d,!0,A.di,C.fG(i),u,A.d2,1,w,w,v,f+h*t)},
hAe(d,e,f,g){var w=null,v=B.hn(w,w,A.cc,0,A.e9,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.ti(v,d)
B.iW(v,!0,C.fG(f),0,479,0,28)
B.iW(v,!0,C.fG(f),0,479,826,853)
B.iW(v,!0,C.fG(f),0,28,0,853)
B.iW(v,!0,C.fG(f),452,479,0,853)
C.kK(v,5,5,470,844,g,1.1)
C.kK(v,28,28,424,798,g,1.6)
C.Do(v,2,2,1,1,g,11)
C.Do(v,478,2,-1,1,g,11)
C.Do(v,2,852,1,-1,g,11)
C.Do(v,478,852,-1,-1,g,11)
return v},
fpQ(d,e,f){var w=null,v=B.hn(w,w,A.cc,0,A.e9,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.ti(v,d)
C.kK(v,14,16,452,822,f,1.6)
C.kK(v,20,22,440,810,f,0.8)
return v},
bC7(d,e,f,g){var w,v=C.fG(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i7h(d){var w,v,u=4291404327
C.bC7(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l0(d,w,8,3,u,!0)
C.l0(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l0(d,7,v,3,u,!0)
C.l0(d,473,v,3,u,!0)}return d},
fCR(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jr(e,f),new B.jr(e+g*n,f),new B.jr(e,f+h*n)],t)
B.a34(d,C.fG(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jr(s,u),new B.jr(e+g*v,u),new B.jr(s,f+h*v)],t)
B.a34(d,C.fG(k),t)
t=A.i.V(n*0.39)
C.l0(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l0(d,e+g*t,f+h*3,4,k,!0)
C.l0(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l0(d,e+g*t,f,5,k,!0)
C.l0(d,e,f+h*t,5,k,!0)}},
hem(d,e,f,g,h,i,j,k,l){var w,v
C.fCR(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fCR(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fCR(d,k,v,1,-1,e,f,g,h,i,j)
C.fCR(d,w,v,-1,-1,e,f,g,h,i,j)},
a2l(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ln(d,!0,A.di,new B.rs(p),null,A.d2,j,r,q)}},
fBI(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.di,new B.rs(o),null,A.d2,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.di,new B.rs(o),null,A.d2,1.4,q,q,p,p+h*r)}},
i51(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cc,0,A.e9,854,o,0,3,o,A.cc,480,!1)
C.z9(n,d,e)
C.ti(n,d)
C.kK(n,20,20,440,814,f,1.2)
C.fBI(n,0,0,1,1,g)
C.fBI(n,480,0,-1,1,g)
C.fBI(n,0,854,1,-1,g)
C.fBI(n,480,854,-1,-1,g)
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
B.l2(n,!0,A.di,new B.rs(p),o,A.d2,1.2,240,r,60,q)}return n},
fzy(d,e,f,g,h){var w
C.fGz(d,!0,C.fG(g),13,e,f)
C.fGz(d,!0,C.fG(g),9,e,f)
w=B.a([new B.jr(e,f-4),new B.jr(e+4,f),new B.jr(e,f+4),new B.jr(e-4,f)],x.J)
B.a34(d,C.fG(h),w)},
l0(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jr(e,v),new B.jr(u,f),new B.jr(e,t),new B.jr(s,f)],x.J)
if(i){B.a34(d,C.fG(h),r)
return}B.l2(d,!0,A.di,C.fG(h),w,A.d2,1,e,u,v,f)
B.l2(d,!0,A.di,C.fG(h),w,A.d2,1,u,e,f,t)
B.l2(d,!0,A.di,C.fG(h),w,A.d2,1,e,s,t,f)
B.l2(d,!0,A.di,C.fG(h),w,A.d2,1,s,e,f,v)},
foG(d,e,f,g,h,i,j){var w,v=B.a([new B.jr(e,f),new B.jr(e+g*28,f),new B.jr(e,f+h*28)],x.J)
B.a34(d,C.fG(i),v)
v=e+g*14
w=f+h*14
C.l0(d,v,w,6,j,!0)
C.l0(d,v,w,3,i,!0)},
foH(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cc,0,A.e9,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.ti(v,d)
C.kK(v,18,18,444,818,f,2)
C.kK(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fG(h),28,451,28,34)
C.foG(v,18,18,1,1,g,f)
C.foG(v,462,18,-1,1,g,f)
C.foG(v,18,836,1,-1,g,f)
C.foG(v,462,836,-1,-1,g,f)
return v},
i8s(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cc,0,A.e9,854,v,0,3,v,A.cc,480,!1)
C.z9(r,u,4294240980)
C.ti(r,u)
C.kK(r,10,12,460,830,t,3.2)
C.kK(r,18,20,444,814,s,1.2)
C.kK(r,24,26,432,802,t,1.8)
C.hem(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l0(r,w,16,3,t,!0)
C.l0(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l0(r,16,w,3,t,!0)
C.l0(r,464,w,3,t,!0)}return r},
i8t(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cc,0,A.e9,854,t,0,3,t,A.cc,480,!1)
C.z9(p,s,4294373080)
C.ti(p,s)
C.kK(p,16,18,448,818,r,2.4)
C.kK(p,24,26,432,802,4286209044,1)
w=new C.fr9(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hem(p,!1,!0,r,q,q,34,16,18)
return p},
bCP(d,e,f,g,h,i){B.iW(d,!0,C.fG(i),e,e+g,f,f+h)},
bDG(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.l2(d,!1,A.di,new B.MK(i),null,A.d2,1,e,w,l,l)}},
i9l(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.l2(d,!1,A.di,new B.rs(r),null,A.d2,1,e,s,t,t);++v}return}w=f+g-1
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
B.l2(d,!1,A.di,new B.rs(r),null,A.d2,1,t,t,f,s);++q}},
i9m(d,e){var w,v,u=null,t=B.hn(u,u,A.cc,0,A.e9,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i9l(t,v,w,30,D.d52,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bCP(t,44,44,392,766,d)
C.bDG(t,44,44,392,766,d,e)
C.ti(t,d)
C.kK(t,44,44,392,766,4292128567,2.2)
C.kK(t,50,50,380,754,4279898632,0.8)
return t},
iaw(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l0(d,e,f,7,h,!0)
C.l0(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l2(d,!0,A.di,C.fG(h),o,A.d2,1.6,w,u,v,t)
B.l2(d,!0,A.di,C.fG(h),o,A.d2,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l2(d,!0,A.di,new B.rs(p),o,A.d2,1.2,w,v,q,q)}break
default:B.l2(d,!0,A.di,C.fG(h),o,A.d2,1.5,e-8,e+8,f,f)
B.l2(d,!0,A.di,C.fG(h),o,A.d2,1.5,e,e,f-8,f+8)
B.ln(d,!0,A.di,C.fG(h),o,A.d2,2,e,f)}},
iax(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cc,0,A.e9,854,s,0,3,s,A.cc,480,!1)
B.iW(r,!0,C.fG(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.iaw(r,u,v,w,4292391514)}C.bCP(r,46,46,388,762,d)
C.bDG(r,46,46,388,762,d,e)
C.ti(r,d)
C.kK(r,46,46,388,762,4291404327,1.8)
return r},
hvu(d,e,f,g){C.fGz(d,!0,C.fG(g),16,e,f)
C.fGz(d,!0,C.fG(g),11,e,f)
C.l0(d,e,f,6,g,!0)
B.l2(d,!0,A.di,C.fG(g),null,A.d2,1.3,e-14,e+14,f,f)
B.l2(d,!0,A.di,C.fG(g),null,A.d2,1.3,e,e,f-14,f+14)},
i4O(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cc,0,A.e9,854,v,0,3,v,A.cc,480,!1)
B.iW(s,!0,C.fG(4280948752),0,479,0,853)
B.iW(s,!0,C.fG(u),0,479,0,78)
B.iW(s,!0,C.fG(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hvu(s,w,39,t)
C.hvu(s,w,815,t)}C.bCP(s,38,92,404,670,d)
C.bDG(s,38,92,404,670,d,e)
C.ti(s,d)
C.kK(s,38,92,404,670,t,1.8)
C.kK(s,45,99,390,656,4287322667,0.8)
return s},
i9W(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jr(e,f),new B.jr(q-5,w),new B.jr(q,f-(18-Math.abs(r)*3)),new B.jr(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a34(d,new B.rs(o),p)}B.ln(d,!0,A.di,C.fG(4292128567),null,A.d2,3,e,f)},
i9X(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cc,0,A.e9,854,s,0,3,s,A.cc,480,!1)
C.z9(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l2(q,!0,A.di,new B.rs(v),s,A.d2,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l2(q,!0,A.di,new B.rs(u),s,A.d2,1.1,v,v,0,853)}B.iW(q,!0,C.fG(r),0,479,0,70)
B.iW(q,!0,C.fG(r),0,479,798,853)
for(t=0;t<5;++t)C.i9W(q,70+t*85,48,4292128567)
C.bCP(q,48,78,384,712,d)
C.bDG(q,48,78,384,712,d,e)
C.ti(q,d)
C.kK(q,48,78,384,712,4291404327,1.6)
return q},
iej(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cc,0,A.e9,854,t,0,3,t,A.cc,480,!1)
B.iW(r,!0,C.fG(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l0(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ln(r,!0,A.di,new B.rs(u),t,A.d2,1,v,w)}C.bCP(r,40,40,400,774,d)
C.bDG(r,40,40,400,774,d,e)
C.ti(r,d)
C.kK(r,40,40,400,774,4291058750,2)
C.kK(r,48,48,384,758,s,0.8)
return r},
lc:function lc(d,e){this.a=d
this.b=e},
fR4:function fR4(d){this.a=d},
fR3:function fR3(d){this.a=d},
fr9:function fr9(d){this.a=d},
fRL(d){var w
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
iap(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hcQ(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p5(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Ak.ai1(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agy(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$agy)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nm(n)
if(e==null)s=A.i0
else{r=C.iap(e)
s=B.a([new B.a1i(A.cP.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rh(t,d,s,"news",E.GB),$async$agy)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LV(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
bFj(d){return C.inK(d)},
inK(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agy(r,null),$async$bFj)
case 7:q=f
p=C.hcQ(q)
if(p==null){u=d
w=1
break}o=d.aEN(p)
if(o.r.length===0||A.d.aO(o.r," ").length<A.d.aO(d.r," ").length*0.5){u=d
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
return B.i($async$bFj,v)},
hzs(d){var w,v=F.hfx(d)
v=B.aL(v,"book","newspaper")
if(F.a3o(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fVK(d,e,f,g){return C.ipD(d,e,f,g)},
ipD(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fVK=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fRL(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hDk()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agy('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hzs(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fVK)
case 3:r=m.hcQ(i)
if(r==null)throw B.W(y.S)
q=new C.Af(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEN(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3o(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3o(A.d.aO(t," "))==="sw"?C.bFj(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVK,v)},
bEO(d,e,f,g,h){return C.ilg(d,e,f,g,h)},
ilg(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEO=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hDk()
k=A.Y.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agy('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hzs(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEO)
case 3:p=j.hcQ(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aEN(B.a3(o,x.N,x.z))
m=A.Y.aw(n.aj(),null)!==A.Y.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3o(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFj(n),$async$bEO)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a90(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEO,v)},
a90:function a90(d,e,f){this.a=d
this.b=e
this.c=f},
it2(d,e){return B.a6(d,!1).cd(B.ec(new C.h23(e),!0,null,x.H))},
h23:function h23(d){this.a=d},
X1:function X1(d,e){this.c=d
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
etj:function etj(d){this.a=d},
eti:function eti(){},
etk:function etk(d){this.a=d},
eth:function eth(d,e){this.a=d
this.b=e},
etl:function etl(){},
esW:function esW(d,e){this.a=d
this.b=e},
esS:function esS(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
et3:function et3(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
et0:function et0(d){this.a=d},
et1:function et1(d){this.a=d},
esX:function esX(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
esV:function esV(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d){this.a=d},
et9:function et9(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
et7:function et7(d){this.a=d},
ete:function ete(d){this.a=d},
et6:function et6(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
et5:function et5(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
esT:function esT(d,e){this.a=d
this.b=e},
fQE(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fQE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hx3){w=1
break}r=new C.fQF()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fQE)
case 7:$.hx3=!0
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
return B.i($async$fQE,v)},
bFa(d){return A.Dp[B.mv(d)-1]+", "+A.oK[B.bL(d)-1]+" "+B.bU(d)+", "+B.bC(d)},
idr(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dxb[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hfW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fOX(),B.U(v).k("Y<1>")))
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
continue}o=new C.fOZ(j,h)
n=new C.fOY(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
hcz(d,e){var w=new C.fqJ()
return A.d.cF(e,0,new C.fqH(w))>=A.d.cF(d,0,new C.fqI(w))},
hu9(d){var w,v,u=new B.aG($.Q().r,A.ai,null,null,B.a([],x.v))
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
Af:function Af(d,e,f,g,h,i,j,k,l,m){var _=this
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
cj6:function cj6(d){this.a=d},
cj4:function cj4(){},
cj5:function cj5(){},
tP:function tP(d,e){this.a=d
this.b=e},
Cc:function Cc(d,e){this.a=d
this.b=e},
ly:function ly(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fQF:function fQF(){},
fOX:function fOX(){},
fOZ:function fOZ(d,e){this.a=d
this.b=e},
fOY:function fOY(d,e,f){this.a=d
this.b=e
this.c=f},
fqJ:function fqJ(){},
fqK:function fqK(){},
fqH:function fqH(d){this.a=d},
fqI:function fqI(d){this.a=d},
b2Z:function b2Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cj7:function cj7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cj8:function cj8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cj9:function cj9(d){this.a=d},
beC:function beC(d){this.a=d},
beB:function beB(d,e){this.b=d
this.a=e},
bwD:function bwD(d){this.a=d},
bb4:function bb4(d,e){this.b=d
this.a=e},
bu6:function bu6(d,e){this.b=d
this.a=e},
hFp(d,e){return B.a6(d,!1).cd(B.ec(new C.h26(e,null),!0,null,x.E))},
h26:function h26(d,e){this.a=d
this.b=e},
X2:function X2(d,e,f){this.c=d
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
eu5:function eu5(){},
eu6:function eu6(d){this.a=d},
eu4:function eu4(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d,e){this.a=d
this.b=e},
etY:function etY(d){this.a=d},
etZ:function etZ(d,e,f){this.a=d
this.b=e
this.c=f},
etV:function etV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eu1:function eu1(d,e){this.a=d
this.b=e},
etX:function etX(d,e){this.a=d
this.b=e},
eu2:function eu2(d){this.a=d},
etW:function etW(d,e){this.a=d
this.b=e},
eu3:function eu3(d,e){this.a=d
this.b=e},
be9:function be9(d,e,f){this.b=d
this.c=e
this.a=f},
it8(d){return B.a6(d,!1).cd(B.ec(new C.h2m(),!0,null,x.I))},
bCA(d,e){var w,v,u,t,s,r,q=B.c_(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
he1(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h2m:function h2m(){},
a19:function a19(d){this.a=d},
oY:function oY(d,e,f,g,h,i,j){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a0=_.bb=_.bn=_.y2=0
_.b8=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c8=_.bH=_.bm=0
_.cP=_.c5=!1
_.c=_.a=null},
f34:function f34(d){this.a=d},
f1X:function f1X(d,e){this.a=d
this.b=e},
f2k:function f2k(d,e){this.a=d
this.b=e},
f2u:function f2u(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1F:function f1F(d){this.a=d},
f2d:function f2d(d,e){this.a=d
this.b=e},
f2e:function f2e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2q:function f2q(d,e,f){this.a=d
this.b=e
this.c=f},
f2p:function f2p(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e){this.a=d
this.b=e},
f2o:function f2o(d,e){this.a=d
this.b=e},
f2t:function f2t(d,e,f){this.a=d
this.b=e
this.c=f},
f2s:function f2s(d,e){this.a=d
this.b=e},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1v:function f1v(){},
f1z:function f1z(d,e){this.a=d
this.b=e},
f1u:function f1u(d,e){this.a=d
this.b=e},
f1B:function f1B(){},
f1A:function f1A(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1q:function f1q(d,e){this.a=d
this.b=e},
f1C:function f1C(d){this.a=d},
f1s:function f1s(d,e){this.a=d
this.b=e},
f1D:function f1D(d){this.a=d},
f1r:function f1r(d,e){this.a=d
this.b=e},
f2U:function f2U(d,e){this.a=d
this.b=e},
f30:function f30(d){this.a=d},
f31:function f31(d,e){this.a=d
this.b=e},
f32:function f32(){},
f2V:function f2V(d,e){this.a=d
this.b=e},
f2T:function f2T(d,e){this.a=d
this.b=e},
f2W:function f2W(d,e){this.a=d
this.b=e},
f2S:function f2S(d,e){this.a=d
this.b=e},
f2X:function f2X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2R:function f2R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2Y:function f2Y(d){this.a=d},
f2Z:function f2Z(d,e){this.a=d
this.b=e},
f3_:function f3_(d){this.a=d},
f2Q:function f2Q(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2E:function f2E(d){this.a=d},
f2C:function f2C(d,e){this.a=d
this.b=e},
f2x:function f2x(d,e){this.a=d
this.b=e},
f2F:function f2F(d){this.a=d},
f2I:function f2I(d){this.a=d},
f2B:function f2B(d){this.a=d},
f2J:function f2J(d){this.a=d},
f2K:function f2K(d){this.a=d},
f2L:function f2L(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2A:function f2A(d){this.a=d},
f2N:function f2N(d){this.a=d},
f2z:function f2z(d){this.a=d},
f2O:function f2O(d,e){this.a=d
this.b=e},
f2y:function f2y(d,e){this.a=d
this.b=e},
f2P:function f2P(d){this.a=d},
f2G:function f2G(d){this.a=d},
f2H:function f2H(d){this.a=d},
f2h:function f2h(d){this.a=d},
f2g:function f2g(d){this.a=d},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2f:function f2f(d,e){this.a=d
this.b=e},
f2j:function f2j(d){this.a=d},
f29:function f29(d){this.a=d},
f28:function f28(d){this.a=d},
f2a:function f2a(d){this.a=d},
f27:function f27(d){this.a=d},
f2b:function f2b(d,e){this.a=d
this.b=e},
f26:function f26(d,e){this.a=d
this.b=e},
f25:function f25(d,e){this.a=d
this.b=e},
f1O:function f1O(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1W:function f1W(d){this.a=d},
f19:function f19(d){this.a=d},
f1a:function f1a(d){this.a=d},
f1b:function f1b(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1d:function f1d(d){this.a=d},
f18:function f18(d){this.a=d},
f1e:function f1e(d){this.a=d},
f1f:function f1f(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1L:function f1L(d){this.a=d},
f1M:function f1M(d){this.a=d},
f1j:function f1j(d){this.a=d},
f1k:function f1k(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1m:function f1m(d){this.a=d},
f1n:function f1n(d){this.a=d},
f1i:function f1i(d){this.a=d},
f1o:function f1o(d){this.a=d},
f1h:function f1h(d){this.a=d},
f1p:function f1p(d){this.a=d},
f1g:function f1g(d){this.a=d},
f2c:function f2c(d){this.a=d},
f24:function f24(d){this.a=d},
f20:function f20(d){this.a=d},
f2_:function f2_(d){this.a=d},
f21:function f21(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f22:function f22(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f23:function f23(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2m:function f2m(d,e,f){this.a=d
this.b=e
this.c=f},
f2l:function f2l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2w:function f2w(d,e){this.a=d
this.b=e},
f2v:function f2v(d,e){this.a=d
this.b=e},
f1N:function f1N(d){this.a=d},
f33:function f33(d){this.a=d},
bhL:function bhL(d,e){this.b=d
this.a=e},
inV(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
inW(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
bDa(){var w=$.bCh,v=$.Rv
$.Rv=v+1
return w+"_"+v},
ik(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,C.bDa(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
on(d,e,f,g){var w=f*9
return C.ik(D.eZ,d-f/2,e-w/32,f,w/16,g,0)},
i6L(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCh
o=$.Rv
$.Rv=o+1
w.push(new C.eQ(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCh
o=$.Rv
$.Rv=o+1
w.push(new C.eQ(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.on(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.on(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ik(D.bk,0.08,0.08,0.5,0.003,v,0),C.ik(D.bk,0.58,0.08,0.004,0.06,v,0),C.ik(D.bk,0.58,0.14,0.34,0.003,v,0),C.ik(D.bk,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ik(D.bk,0.08,0.8,0.004,0.14,t,0),C.ik(D.bk,0.08,0.94,0.6,0.003,t,0),C.on(0.58,0.08,0.05,e),C.on(0.92,0.22,0.05,e),C.on(0.08,0.8,0.05,f),C.on(0.68,0.94,0.05,f),C.on(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ik(D.lt,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ik(D.lt,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ik(D.lt,0.7,0.8,0.22,0.12,w|1140850688,0),C.ik(D.lt,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.on(0.5,0.5,1.5,w|335544320),C.on(0.5,0.5,1.15,w|402653184),C.on(0.5,0.5,0.8,v|436207616),C.on(0.95,0.05,0.4,v|855638016),C.on(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.on(0.85,0.08,0.7,w|1140850688),C.on(0.1,0.35,0.5,v|855638016),C.on(0.9,0.62,0.55,v|771751936),C.on(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ik(D.bk,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ik(D.bk,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ik(D.bk,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ik(D.bk,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.on(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.on(0.5,0.2,0.65,(w|3422552064)>>>0),C.on(0.5,0.2,0.95,w|855638016),C.ik(D.bk,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ik(D.bk,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ik(D.kc,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ik(D.kc,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ik(D.kc,0.15,0.86,0.6,0.14,1712265002,0),C.on(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d6C[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCh
l=$.Rv
$.Rv=l+1
w.push(new C.eQ(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.eZ,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.on(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ik(D.kc,0.35,-0.1,0.3,0.62,w|855638016,0),C.ik(D.kc,0.05,-0.1,0.3,0.55,v,-0.5),C.ik(D.kc,0.65,-0.1,0.3,0.55,v,0.5),C.on(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ik(D.bk,0.06,0.04,0.88,0.002,e,0),C.ik(D.bk,0.06,0.96,0.88,0.002,e,0),C.ik(D.bk,0.06,0.04,0.004,0.92,e,0),C.ik(D.bk,0.936,0.04,0.004,0.92,e,0),C.ik(D.bk,0.09,0.07,0.82,0.001,w,0),C.ik(D.bk,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ik(D.kd,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ik(D.kd,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ik(D.kd,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ik(D.bk,0,0,0.3,0.09,w|1140850688,0),C.ik(D.bk,0.7,0.9,0.3,0.1,v|1426063360,0),C.ik(D.bk,0.82,0.04,0.12,0.07,w|771751936,0),C.ik(D.bk,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ik(D.eZ,0.62,0.02,0.5,0.16,v,0.6),C.ik(D.eZ,0.78,0.12,0.4,0.12,u,0.9),C.ik(D.eZ,-0.12,0.8,0.5,0.16,u,-0.6),C.ik(D.eZ,-0.05,0.9,0.4,0.12,v,-0.9),C.on(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ik(D.bk,0.09,0.12,0.16,0.006,e,0),C.ik(D.bk,0.05,0.03,0.9,0.001,w,0),C.ik(D.bk,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ikj(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCh=j
$.Rv=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fMl()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bDa(),g,"","",0,!1,"",0,D.bk,l,2,"",0,0,"",D.ct,D.lS,1,0,0))
if(a9)A.d.v(q,C.i6L(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.inV(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fMk(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cH,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bDa(),a0,"","",0,!1,a2,0,D.bk,l,2,"",0,0,"",D.ct,D.lS,a3,a4,a5))
return C.rY(s,r,0,0,q,j+"_slide",D.r_,"","","",D.dm)},
rX:function rX(d,e){this.a=d
this.b=e},
mt:function mt(d,e,f,g,h,i,j,k,l,m){var _=this
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
fMl:function fMl(){},
fMk:function fMk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hXn(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.ckC(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ag(u,t,s,B.w(w==null?"":w))},
fU6(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fU6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxq){w=1
break}$.hxq=!0
t=4
w=7
return B.b(B.aA(),$async$fU6)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i8(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hXn(m)
if(l!=null)J.c5(n,l)}$.Dp.c3(0,B.w(o.a),new C.fU7(n))}C.hdG()
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
return B.i($async$fU6,v)},
hdG(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dp,$.Dp.r,$.Dp.e);w.C();)J.nT(w.d,new C.fyP(v))
$.Dp.bt($.Dp,new C.fyQ())},
aQ1(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQ1=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQ1)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ck($.Dp,B.a4($.Dp).k("ck<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c5(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.Y.aw(n,null)),$async$aQ1)
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
return B.i($async$aQ1,v)},
ioy(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hdG()
w=$.Dp.c3(0,d,new C.fU9())
v=Date.now()
u=B.C(e,B.a4(e).k("ch.E"))
J.n2(w,0,new C.Ag(new B.V(v,0,!1),f,u,g))
C.aQ1()},
iov(d){var w,v=$.Dp.h(0,d)
if(v==null||J.cr(v))return
w=J.cC(v)
w.cG(v,0)
if(w.gau(v))$.Dp.W(0,d)
C.aQ1()},
Ag:function Ag(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckC:function ckC(){},
fU7:function fU7(d){this.a=d},
fyP:function fyP(d){this.a=d},
fyQ:function fyQ(){},
fU9:function fU9(){},
ioA(d){return A.d.dP(D.x0,new C.fUc(d),new C.fUd())},
hXl(d){var w
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
hXk(d){var w
switch(d.a){case 0:w=D.apw
break
case 1:w=A.zl
break
case 2:w=A.PK
break
case 3:w=I.apb
break
case 4:w=A.aq1
break
case 5:w=A.mk
break
default:w=null}return w},
ia1(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RP[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RP[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hXm(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
iow(d,e,f,g,h){var w=new B.N(D.x0,new C.fU5(),x.eC).aO(0,", "),v=""+d,u=C.hDc(h),t=F.fNK(h),s=C.hz6(g),r=e.q(0,D.Jl)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jm)?'- New slides get an "icon3d" from: '+A.d.aO(D.RP,", ")+".\n":"",p=e.q(0,D.E_)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iox(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.x0,new C.fU8(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jl)){p.a=s
w=s}else w=""
if(e.q(0,D.Jm))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RP,", ")+".\n")
if(e.q(0,D.E_))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hDc(d)
v=F.fNK(d)
u=C.hz6(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aig(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DO(a3,"{"),a5=J.h5I(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mf(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cr(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fS3(),m).bY(0,new C.fS4())
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
f=C.ia1(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a98(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.x0,new C.fS5(r))?r:a7
o=C.fy4(J.t(w,"logo_frame"),D.Dl)
n=C.fy4(J.t(w,"logo_ring"),D.De)
m=C.fy4(J.t(w,"photo_frame"),D.Dl)
l=C.fy4(J.t(w,"photo_ring"),D.De)
return new C.asO(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2V(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hCj(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.E0),f7=f6?C.i38():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e5()
v.d_(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.ob("luxe",u.a,A.mk,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dm)
w=s}if(w==null)w=C.ioA(f9.b)
r=g2.q(0,D.a84)||f6
q=g2.q(0,D.Jl)
p=g2.q(0,D.TN)
o=new C.fMp()
n=B.a([],x.g)
m=new C.fMs(o,w,r)
l=new C.fMr(o,r)
k=new C.fMq(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fMo(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d8h[b8]
c0=D.d78[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.faV.q(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n9,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r0,500,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TK
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eZ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lt,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bk,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DY
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eZ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n9,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cH,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r0,500,f2,f0))
d3=D.n8
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eZ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bk,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vf:D.ct
c1.push(new C.eQ(b4,D.a82,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aG,4279310375,A.bn,e4,D.bk,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n8
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eZ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n9,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r0,450,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TK
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
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jj,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n8}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dm,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i4N(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dzF[A.o.F(b1,6)]:s
n.push(new C.m1(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cq(e4,e4,e4,e4,D.DX,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fON(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fON=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.E_)
n=e.q(0,D.Jm)
if(!o&&!n){u=D.a7_
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fOQ(o,s[r],n,$.i8J,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fON)
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
return B.i($async$fON,v)},
fNN(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fNN=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iox(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPk(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fNN)
case 3:u=s.aPG(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNN,v)},
bEP(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEP=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.ioy(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aig(i,"colorful")
t=C.iow(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPk(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i0),$async$bEP)
case 3:u=o.aPG(m,f,h,g,D.edz,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEP,v)},
aPk(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPk=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$aPk)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nm(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rh(t,d,g,"slides",null),$async$aPk)
case 7:q=i
p=q.b
if(p!=null){o=C.aig(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LV(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPk,v)},
aPG(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.E_)||e.q(0,D.Jm)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d2(e,x.Q)
t.W(0,D.E_)}w=6
return B.b(C.fON(d,t),$async$aPG)
case 6:s=k
w=4
break
case 5:s=D.a7_
case 4:t=d.c
w=A.d.aV(t,new C.fqD())?7:9
break
case 7:r=$.hE5
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dL(r,x.aP),$async$aPG)
case 10:q=k
p=q!=null?A.Y.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hCj(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hXm(new C.asO(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fqE(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k8<ch.E,n>")
t=B.C(new B.k8(e,new C.fqF(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TN)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPG,v)},
hgF(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5K[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
itd(d){return B.bT(A.L,null,new C.h2y(),d,!0,!0,!0,null,!1,!1,x.I)},
i3M(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aN(d)},
itc(d,e,f){return B.bT(A.L,null,new C.h2x(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hgG(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hgH(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fy4(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fy5(w))?w:""},
hz6(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hE3(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aig(a1==null?"":a1,a0),a3=C.aig(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nA(new B.Y(r,new C.fUe(t[p]),q))
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
g=B.C(new B.Y(k,new C.fUf(),v),r)
A.d.aZ(g,new C.fUg())
if(g.length===0)continue
f=new C.fUh(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ioR(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aL4
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.efs
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eft
return null},
hyI(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cL(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ioB(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oP
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
if(C.hyI(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hyI(n,i,v,u))if(n.w>10){f=h+1
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
ioz(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aig(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5K[r]
if(q.b===s)w.J(0,q)}}v=C.hgG(e)
u=C.hgH(e)
p=C.hCj(n,D.a7_,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fUa(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k8<ch.E,n>")
o=B.C(new B.k8(w,new C.fUb(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TN)
return p},
it_(d,e,f){return B.bT(A.L,null,new C.h1L(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i38(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e5()
s.d_(t)
w=D.cMg[s.az(10)]
v=new C.epK(s)
u=x.N
return new C.epJ(w,s.az(4),J.fs(v.$1$2(D.dd9,1,x.ff)),w.r[s.az(3)],v.$1$2(D.duP,2+s.az(2),u),v.$1$2(D.dnh,2,u),v.$1$2(D.dy4,4,x.fP),t)},
i4N(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e5()
a1.d_(a5.w+a3*13)
w=new C.fmL(a4)
v=new C.fmN(a4,d)
u=new C.fmM(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eZ,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2V(a0,52),"lux_spot",a5.xd(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bk,0,0,1,1,0,"lux_back",a5.xd(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bk,0,0,1,1,0,"lux_back2",a5.aHm(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.022,0.038,0.956,0.924,0,g,a5.xd(0,f),D.dm,150,C.a2V(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.018,0.032,0.964,0.936,0,g,a5.xd(0,f),D.dm,120,C.a2V(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dm,260,C.a2V(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bk,0,0,1,1,0,"lux_filigree",a5.xd(0,"filigree"),D.dm,200))
break
default:a2.push(w.$10$anim$delay(D.bk,0.08,0.06,0.84,0.004,C.a2V(a0,208),"lux_rule",a5.aHm(0,"shimmer",r),D.ve,150))
a2.push(w.$10$anim$delay(D.bk,0.08,0.936,0.84,0.004,C.a2V(a0,144),"lux_rule2","",D.Jj,220))}l=!A.d.aV(a2,new C.fmK())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xd(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xd(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2V(r,242)
j=a5.xd(0,"orbit")
i=s===D.bk?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r0,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eZ,t-0.007,0.9495,0.014,0.025,C.a2V(r,242),"lux_g2",a5.xd(0,"orbit"),D.r0,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bk,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bk,0,0,1,1,0,"lux_velvet",a5.xd(0,"velvet")))},
ob:function ob(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fUc:function fUc(d){this.a=d},
fUd:function fUd(){},
wB:function wB(d,e){this.a=d
this.b=e},
a98:function a98(d,e,f,g,h,i,j,k,l){var _=this
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
fU5:function fU5(){},
fU8:function fU8(){},
fS3:function fS3(){},
fS4:function fS4(){},
fS5:function fS5(d){this.a=d},
fMp:function fMp(){},
fMs:function fMs(d,e,f){this.a=d
this.b=e
this.c=f},
fMr:function fMr(d,e){this.a=d
this.b=e},
fMq:function fMq(d,e){this.a=d
this.b=e},
fMo:function fMo(d){this.a=d},
fOQ:function fOQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fOO:function fOO(d){this.a=d},
fOP:function fOP(d){this.a=d},
fqD:function fqD(){},
fqE:function fqE(){},
fqF:function fqF(){},
h2y:function h2y(){},
a1G:function a1G(d){this.a=d},
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
f9r:function f9r(d,e,f){this.a=d
this.b=e
this.c=f},
f9s:function f9s(d,e){this.a=d
this.b=e},
f9p:function f9p(d,e){this.a=d
this.b=e},
f9q:function f9q(d,e){this.a=d
this.b=e},
f9o:function f9o(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f9j:function f9j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9n:function f9n(d,e){this.a=d
this.b=e},
f9i:function f9i(d,e){this.a=d
this.b=e},
f9m:function f9m(d,e){this.a=d
this.b=e},
f9h:function f9h(d,e){this.a=d
this.b=e},
f9k:function f9k(d){this.a=d},
f9l:function f9l(d,e){this.a=d
this.b=e},
f97:function f97(d,e){this.a=d
this.b=e},
f98:function f98(d,e){this.a=d
this.b=e},
f9a:function f9a(d){this.a=d},
f9b:function f9b(d){this.a=d},
f9c:function f9c(d){this.a=d},
f9d:function f9d(d){this.a=d},
f99:function f99(d,e){this.a=d
this.b=e},
f9e:function f9e(d,e){this.a=d
this.b=e},
f9F:function f9F(d){this.a=d},
f9G:function f9G(d){this.a=d},
f9E:function f9E(d){this.a=d},
f9H:function f9H(d){this.a=d},
f9D:function f9D(d){this.a=d},
f9J:function f9J(d){this.a=d},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9K:function f9K(d){this.a=d},
f9B:function f9B(d,e){this.a=d
this.b=e},
f9L:function f9L(d){this.a=d},
f9A:function f9A(d){this.a=d},
f9M:function f9M(d){this.a=d},
f9z:function f9z(d,e){this.a=d
this.b=e},
f9N:function f9N(d){this.a=d},
f9y:function f9y(d,e){this.a=d
this.b=e},
f9O:function f9O(d){this.a=d},
f9x:function f9x(d){this.a=d},
f9P:function f9P(d,e){this.a=d
this.b=e},
f9w:function f9w(d,e){this.a=d
this.b=e},
f9Q:function f9Q(d){this.a=d},
f9I:function f9I(d){this.a=d},
f9v:function f9v(d,e){this.a=d
this.b=e},
f9f:function f9f(d,e,f){this.a=d
this.b=e
this.c=f},
f9g:function f9g(d,e,f){this.a=d
this.b=e
this.c=f},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9t:function f9t(d,e){this.a=d
this.b=e},
h2x:function h2x(d,e){this.a=d
this.b=e},
a1F:function a1F(d,e,f){this.c=d
this.d=e
this.a=f},
aJe:function aJe(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f90:function f90(d){this.a=d},
f91:function f91(d){this.a=d},
f92:function f92(d,e){this.a=d
this.b=e},
f93:function f93(d){this.a=d},
f94:function f94(d){this.a=d},
f9_:function f9_(d,e){this.a=d
this.b=e},
f95:function f95(d,e){this.a=d
this.b=e},
f96:function f96(d,e){this.a=d
this.b=e},
fy5:function fy5(d){this.a=d},
b3n:function b3n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFM:function aFM(d,e,f){this.c=d
this.d=e
this.a=f},
bmy:function bmy(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
epM:function epM(d){this.a=d},
epL:function epL(){},
bk2:function bk2(d,e){this.b=d
this.a=e},
fUe:function fUe(d){this.a=d},
fUf:function fUf(){},
fUg:function fUg(){},
fUh:function fUh(d){this.a=d},
atl:function atl(d,e){this.a=d
this.b=e},
fUa:function fUa(){},
fUb:function fUb(){},
h1L:function h1L(d,e){this.a=d
this.b=e},
a03:function a03(d,e,f){this.c=d
this.d=e
this.a=f},
aDh:function aDh(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dsB:function dsB(d){this.a=d},
dsC:function dsC(d){this.a=d},
dsD:function dsD(d,e){this.a=d
this.b=e},
dsG:function dsG(d){this.a=d},
dsH:function dsH(d,e){this.a=d
this.b=e},
dsF:function dsF(d,e){this.a=d
this.b=e},
dsI:function dsI(d){this.a=d},
dsE:function dsE(d,e){this.a=d
this.b=e},
bve:function bve(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
epJ:function epJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
epK:function epK(d){this.a=d},
fmL:function fmL(d){this.a=d},
fmN:function fmN(d,e){this.a=d
this.b=e},
fmM:function fmM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmK:function fmK(){},
aNU:function aNU(){},
hfu(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wu(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b3j:function b3j(d,e,f){this.c=d
this.d=e
this.a=f},
bo8:function bo8(d,e){this.c=d
this.a=e},
ikN(d){return A.d.dP(D.Ip,new C.fNw(d),new C.fNx())},
ikO(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Ip,new C.fNy(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k_("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lv:function lv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNw:function fNw(d){this.a=d},
fNx:function fNx(){},
fNy:function fNy(d){this.a=d},
nc(d,e,f,g,h){return new C.Fv(f,g,d)},
i6c(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fp_(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Lj
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
hC6(d,e){var w
C.i6c(d)
w=A.d.dP($.bGP(),new C.fLm(e),new C.fLn())
$.Lj=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lj=""}d.z=B.bq(d.z,!0,x.F)},
Fv:function Fv(d,e,f){this.a=d
this.b=e
this.e=f},
fp_:function fp_(){},
fTH:function fTH(){},
fTI:function fTI(){},
fTJ:function fTJ(){},
fTU:function fTU(){},
fTZ:function fTZ(){},
fU_:function fU_(){},
fU0:function fU0(){},
fU1:function fU1(){},
fU2:function fU2(){},
fU3:function fU3(){},
fU4:function fU4(){},
fTK:function fTK(){},
fTL:function fTL(){},
fTM:function fTM(){},
fTN:function fTN(){},
fTO:function fTO(){},
fTP:function fTP(){},
fTQ:function fTQ(){},
fTR:function fTR(){},
fTS:function fTS(){},
fTT:function fTT(){},
fTV:function fTV(){},
fTW:function fTW(){},
fTX:function fTX(){},
fTY:function fTY(){},
fLm:function fLm(d){this.a=d},
fLn:function fLn(){},
j6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bk,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
DG(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
bFy(){var w=new B.V(Date.now(),0,!1)
return A.iQ[B.bL(w)-1]+" "+B.bU(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCV(d){return new B.j2((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ibL(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aof(A.cI.aN(A.d.gan(d.split(","))))
return w}catch(v){return null}},
ibP(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fxo(),x.dv).aO(0,"\n")},
ibO(d){switch(d.a){case 2:return A.nU
case 1:case 5:return A.fmh
default:return A.Va}},
ibI(d){switch(d.a){case 2:return A.vP
case 1:case 5:return A.Xd
default:return A.adj}},
ibM(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCV(u),q=(s&255)===0?v:C.bCV(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nV(q,p,A.l8)
w=new B.q1(t,t,t,t)}switch(d.ax.a){case 1:return B.lR(v,v,v,new B.kR(r,w,v,A.aeC,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xG(B.lR(v,v,q,v,p+0.4,v,v,v))
default:return B.lR(v,v,v,new B.kR(r,w,B.w3(4),A.i4,v),v,v,v,v)}},
ibK(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.ibI(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.ibP(d)
t=C.bCV(d.Q)
s=d.x.a>=700?A.eB:A.wv
r=d.y===A.cH?A.z1:A.anW
q=d.z
p=new B.DS(w,l,l,B.fc(u,l,l,l,B.hc(l,t,1===q.a?A.aUD:A.aUC,l,l,l,l,l,l,A.dD,l,l,v,r,s,l,!0,l,l,l,l),C.ibO(d.as)))
break
case 1:case 4:o=C.ibL(d.at)
n=i===D.lS&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xG(B.fc(w,l,l,l,B.hc(l,A.tq,l,l,l,l,l,l,l,A.dD,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IN(o,n?A.aey:A.XD,l,l)
break
case 3:w=new B.nV(A.JG,1,A.l8)
u=B.w3(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lR(A.vP,B.fc(t,l,l,l,B.hc(l,D.etX,l,l,l,l,l,l,l,A.dD,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nU),l,new B.kR(E.aMw,new B.q1(w,w,w,w),u,A.i4,l),l,l,l,l)
break
case 2:p=C.ibM(d,e)
break
case 5:p=C.ibJ(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hto(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.aua(m/255,p)}if(w)return new F.wG(k,l,j,l,new B.Tz(new B.kQ(g,g,f,1/0),p))
if(i===D.ls){i=new B.nV(A.JG,1,A.l8)
i=B.lR(A.vP,p,l,new B.kR(A.pM,new B.q1(i,i,i,i),B.w3(4),A.i4,l),l,l,D.bGx,l)}else i=p
return new F.wG(k,l,j,l,new B.fV(g,f,i))},
ibN(d,e,f,g){var w,v=null,u=C.bCV(d.e),t=d.f
t=B.a([F.hrZ(t!=null?B.lR(v,v,v,new B.kR(v,v,v,A.i4,new B.aYQ(E.Xf,A.ade,B.a([u,C.bCV(t)],x.cR),v)),v,v,v,v):B.lR(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fxn(f,g),B.U(w).k("N<1,fi>")))
return F.czX(t)},
hgJ(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hgJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5n(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XO(A.x9,A.JD,D.bHJ,null,null,null,!1,null)
o=new B.Cv(o,new C.fUn(607,787,p,d))
o.Ni(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgJ,v)},
ibJ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hfu(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal8()
if(h==null)h=A.aBI
j=B.u1(4279308564)
w=B.w3(18)
v=new B.nV(B.u1(4287531653),3,A.l8)
u=i.length===0?"My links":i
u=B.a([B.xG(B.fc(u,m,m,m,B.hc(m,A.pM,m,m,m,m,m,m,m,A.dD,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xG(B.fc(A.a.i(l.c),m,m,m,D.fu2,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bQ(t,t.gI(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u1(4280690220)
o=new B.aat(8,8)
n=A.a.i(r.b)
u.push(new B.oc(D.bAB,new C.ayv(new C.ajp(q),B.lR(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fwr,A.nU),m,new B.kR(p,m,new B.ajT(o,o,o,o),A.i4,m),m,m,D.bH_,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xG(B.fc(k,m,m,m,D.fvF,m))
u.push(new C.ayv(C.hL8(k),t))}return B.lR(m,B.zy(u,A.NA,A.lR),m,new B.kR(j,new B.q1(v,v,v,v),w,A.i4,m),m,m,D.bBr,m)},
fxo:function fxo(){},
fxn:function fxn(d,e){this.a=d
this.b=e},
fUn:function fUn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ai3(d){var w,v
for(w=0;w<32;++w){v=D.Ig[w]
if(v.a===d)return v}return null},
hw1(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cI.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hFl(d,e){return B.a6(d,!1).cd(B.ec(new C.h0a(e),!0,null,x.fB))},
hFk(d,e){return B.bT(A.L,null,new C.h09(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fm:function Fm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
On:function On(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blU:function blU(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e3e:function e3e(d){this.a=d},
e3d:function e3d(d,e,f){this.a=d
this.b=e
this.c=f},
e3c:function e3c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btL:function btL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8d:function f8d(d,e){this.a=d
this.b=e},
bgQ:function bgQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1d:function b1d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cf2:function cf2(){},
cf3:function cf3(d){this.a=d},
cf4:function cf4(d,e,f){this.a=d
this.b=e
this.c=f},
cf5:function cf5(d,e,f){this.a=d
this.b=e
this.c=f},
h0a:function h0a(d){this.a=d},
a_B:function a_B(d,e){this.c=d
this.a=e},
aBE:function aBE(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dhP:function dhP(d,e,f){this.a=d
this.b=e
this.c=f},
dhU:function dhU(d){this.a=d},
dhV:function dhV(d){this.a=d},
dhT:function dhT(d){this.a=d},
dhW:function dhW(d){this.a=d},
dhS:function dhS(d,e){this.a=d
this.b=e},
dhX:function dhX(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhY:function dhY(d){this.a=d},
dhQ:function dhQ(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d,e){this.a=d
this.b=e},
h09:function h09(d){this.a=d},
h08:function h08(d){this.a=d},
h07:function h07(d,e,f){this.a=d
this.b=e
this.c=f},
h06:function h06(d,e){this.a=d
this.b=e},
aNo:function aNo(){},
itb(d){return B.bT(A.L,null,new C.h2w(),d,!0,!0,!0,null,!1,!1,x.N)},
h2w:function h2w(){},
a_W:function a_W(d){this.a=d},
bim:function bim(d){this.d=d
this.c=this.a=null},
doD:function doD(d){this.a=d},
doE:function doE(d,e){this.a=d
this.b=e},
doF:function doF(d){this.a=d},
i7V(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.ys},
imK(d){var w=7000
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
imJ(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i7V(d)
switch(q){case"shimmer":return B.og(A.LN,g,new C.fQY(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bhH(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dN(B.e1(A.A,B.d3(F.bX9(g,new B.Et(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bho(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.d3(B.eN(A.A,e*0.5,B.e1(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n0(Math.sin(e)*0.3)
return B.dN(B.fz(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b3,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bqv(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b3,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bcd(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b3,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bbR(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bxB(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.buz(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.btH(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b3,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bgJ(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ab,A.f,B.a([B.bR(0,new B.du(!0,B.e1(A.A,B.c2(r,new B.p(r,r,r,r,r,new B.bY(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bj),1.6+s*0.15,r,r),r),0,0,0),B.eN(A.A,s*0.06,B.e1(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fQY:function fQY(d,e){this.a=d
this.b=e},
bhH:function bhH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bho:function bho(d,e,f){this.b=d
this.c=e
this.a=f},
bqv:function bqv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcd:function bcd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbR:function bbR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxB:function bxB(d,e,f){this.b=d
this.c=e
this.a=f},
buz:function buz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btH:function btH(d,e,f){this.b=d
this.c=e
this.a=f},
bgJ:function bgJ(d,e,f){this.b=d
this.d=e
this.a=f},
dhw:function dhw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yg:function yg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fR0(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.ls},
imP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fR1())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSs(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
imO(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cX(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cX(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ahI(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahI=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fJm(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dU,null,new C.fJn(e),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahI)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hhq(d),$async$ahI)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.M6(d,"Search states\u2026","",A.kw,"Choose state"),$async$ahI)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hgg(s)
if(p==null)p=A.d.gH(D.SF)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fR2(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lS,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Ds(i,0.016,D.lt,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Ds(0,0.058,D.eZ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Ds(0,0.058,D.eZ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lu("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lu("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hcX(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCo("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2y("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2y("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2y("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2y("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCo("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Ds(m,0.082,D.bk,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.i.ad(0.78,3),4280640491,9.5,A.bt,A.cD,"",0.074,g,null,"","",0,!1,"",0,D.bk,4280172719,2,y.O,0,0,"",D.ct,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hcX(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCo("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hy7("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hy7("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2y("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2y("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCn("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCn("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCo("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lu("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lu("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCn("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCn("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCo("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2y("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCn("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2y("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hcX(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lu("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lu("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cq(null,null,null,null,D.oP,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rY(m,null,0,0,j,n,D.r_,"","","Hati ya Ndoa",D.dm)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahI,v)},
fR1:function fR1(){},
fJm:function fJm(){},
fJn:function fJn(d){this.a=d},
fJk:function fJk(d){this.a=d},
fJl:function fJl(d){this.a=d},
ib9(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ib8(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nd
case"lineThrough":return A.xi
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eQ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hAc(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.So[w]
if(v.b===u)return v}return D.dm},
i7i(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d3F[w]
if(v.b===u)return v}return D.cW},
idX(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dvB[w]
if(v.b===u)return v}return D.bk},
rY(d,e,f,g,h,i,j,k,l,m,n){return new C.m1(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hqK(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i9q(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.i.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.M(s)
r=C.hAc(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.i.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.i.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dd(n,x.f)
n=B.cF(n,new C.ckz(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rY(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i9q(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atj[w]
if(v.b===u)return v}return D.n8},
Cq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rY(4294967295,null,0,0,null,C.cE(),D.r_,"","","",D.dm)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xb(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i58(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.M(t),1,120)
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
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.i.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b8(f,new C.ckm(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.ckn(),x.N)
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
else{g=J.dd(g,x.f)
g=B.cF(g,new C.cko(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cq(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rY(4294967295,a3,0,0,a3,C.cE(),D.r_,"","","",D.dm)],x.g):g,v,p,o,s)},
kM(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i58(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dws[w]
if(v.b===u)return v}return D.DX},
cE(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
ckQ(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DY){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bt,A.cD,"",0.12,u,p,"","",0,!1,"",0,D.bk,m,2,"Click to add subtitle",0,0,"",D.ct,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bt,A.cD,"",0.68,u,p,"","",0,!1,"",0,D.bk,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ct,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Two Column Slide",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bk,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ct,D.cW,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bk,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ct,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bt,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bk,m,2,"Section Header",0,0,"",D.ct,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Compare",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bk,t.l(),2,"",0,0,"",D.ct,D.fi,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bk,m,2,"Option A",0,0,"",D.ct,D.cW,0.38,0.08,0.26)
q=C.cE()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bk,t.j(0.5).l(),2,"",0,0,"",D.ct,D.fi,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bk,m,2,"Option B",0,0,"",D.ct,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bk,m,2,"TERM / QUESTION",0,0,"",D.ct,D.cW,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bt,A.cD,"",0.35,u,p,"","",0,!1,"",0,D.bk,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ct,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bk,m,2,"Quiz Question",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bk,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ct,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bk,m,2,"Worksheet / Assignment",0,0,"",D.ct,D.cW,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bk,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ct,D.cW,0.88,0.06,0.16)],x.u))
break}},
hXw(d){return A.d.dP(D.a5m,new C.ckR(d),new C.ckS())},
hXt(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.Xb(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h9c(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ckM(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.aZ(u,new C.ckL())
return u},
hqN(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ckH()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asP(d){return C.hXr(d)},
hXr(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ckK()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3J(m),$async$asP)
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
return B.b(B.aA(),$async$asP)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aW(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hqM.h(0,m))
n=C.h9c(C.h9c(j,r),o)
if(n.length===0){u=C.hqN(C.hqN(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asP,v)},
ckG(d){return C.hXq(d)},
hXq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckG)
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
return B.i($async$ckG,v)},
b3p(d,e){return C.hXs(d,e)},
hXs(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3p=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3p)
case 6:s=g
q=s.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Me(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b3p)
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
return B.i($async$b3p,v)},
Xc(d,e){return C.hXu(d,e)},
hXu(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xc=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hqL.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asP(a3),$async$Xc)
case 5:p=a6
case 4:w=6
return B.b(C.ckG(a3),$async$Xc)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcC()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.ckN(o),l),l.k("M.E"))
A.d.aZ(e,new C.ckO())
$.hqL.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.ckP(),n),n.k("ak.E"))
r=A.Y.aw(n,null)
$.hqM.n(0,a0,r)
t=8
w=11
return B.b(B.aiv(a0,r),$async$Xc)
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
return B.b(B.aA(),$async$Xc)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xc)
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
return B.i($async$Xc,v)},
JH:function JH(d,e){this.a=d
this.b=e},
asN:function asN(d,e){this.a=d
this.b=e},
vj:function vj(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eQ:function eQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m1:function m1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ckA:function ckA(){},
ckB:function ckB(){},
ckz:function ckz(){},
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
ckp:function ckp(){},
ckq:function ckq(){},
ckm:function ckm(){},
ckn:function ckn(){},
cko:function cko(){},
k_:function k_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckR:function ckR(d){this.a=d},
ckS:function ckS(){},
ckM:function ckM(d){this.a=d},
ckL:function ckL(){},
ckH:function ckH(){},
ckI:function ckI(){},
ckJ:function ckJ(){},
ckK:function ckK(){},
ckN:function ckN(d){this.a=d},
ckO:function ckO(){},
ckP:function ckP(){},
in1(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fRD(e,v,d,B.aR(w))
w.$1(new C.fRz())
w.$1(new C.fRA())
w.$1(new C.fRB())
w.$1(new C.fRC())
return v},
fRD:function fRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRz:function fRz(){},
fRA:function fRA(){},
fRB:function fRB(){},
fRC:function fRC(){},
b3m:function b3m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckv:function ckv(d){this.a=d},
cku:function cku(){},
ckw:function ckw(){},
ckx:function ckx(d,e){this.a=d
this.b=e},
cky:function cky(d){this.a=d},
apN:function apN(d,e){this.c=d
this.a=e},
blC:function blC(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dQ9:function dQ9(){},
aN7:function aN7(){},
ckD(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fjr)
u=!1
w=1
break}u=B.le(!1,d,t,!1,null,A.a86,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckD,v)},
hXo(d){var w=A.d.bj(D.Ip,new C.ckE(d))
if(w<0)return!0
return w>=4},
hXp(d){var w=A.d.bj($.bGP(),new C.ckF(d))
if(w<0)return!0
return w>=5},
ckE:function ckE(d){this.a=d},
ckF:function ckF(d){this.a=d},
ioL(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xv()
$.pZ().pc(t,new C.fUu(s),!0)
u=B.a([B.C_(v,A.pN,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.fuv,v,v,v),A.f,v,v,new B.p(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.n0,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b3,A.t,u,v)},
fUu:function fUu(d){this.a=d},
iom(){return C.hgC()},
ilb(){return C.bEM()},
ink(){return C.hgt()},
aRv(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fTA(d,f),$async$aRv)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRv,v)},
fTA(d,e){var w=0,v=B.j(x.H),u
var $async$fTA=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCW
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fTB(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fTA)
case 2:return B.h(null,v)}})
return B.i($async$fTA,v)},
fTB:function fTB(d,e){this.a=d
this.b=e},
aey:function aey(d,e,f){this.c=d
this.d=e
this.a=f},
eC5:function eC5(d,e){this.a=d
this.b=e},
eC6:function eC6(d,e){this.a=d
this.b=e},
eC7:function eC7(d,e){this.a=d
this.b=e},
eC8:function eC8(d){this.a=d},
aeP:function aeP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3l(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3k(g,m,f,d,e,h,l,k,j,o,i,null)},
hDs(d){return B.cs(new C.fRy(d))},
hgE(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
return C.hgE(d)},
bDr(d,e,f,g){return C.ie3(d,e,f,g)},
ie3(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDr=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hdf&&t.pX())t.eA()
$.hdf=!0
s.a=null
w=3
return B.b(B.hK(A.bo,!0,"Animation preview",d,new C.fA8(s,e,g,f),null,A.eH,!0,x.H),$async$bDr)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hdf=!1
case 1:return B.h(u,v)}})
return B.i($async$bDr,v)},
h3k(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h3k=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hgE(f)+" Slide transition preview"
s=s?Ah.GF:A.qv
w=3
return B.b(C.bDr(d,s,new B.a5(t,t*0.56,B.by(B.l(14),new C.aKE(f,null),A.aq),null),r),$async$h3k)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h3k,v)},
hCJ(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dN(B.d3(f,t),new B.o((1-t)*48,0))
case 3:return B.dN(B.d3(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dN(B.d3(f,t),new B.o(0,(1-t)*36))
case 5:return B.dN(B.d3(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.e1(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e1(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n0((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dN(B.d3(f,t),new B.o((1-t)*24,0))}},
bGj(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hgE(f)+" Element animation preview"
s=s?Ah.GF:A.qv
w=3
return B.b(C.bDr(d,s,new B.a5(t,t*0.62,B.by(B.l(14),new C.aBj(f,null),A.aq),null),r),$async$bGj)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGj,v)},
iot(d){var w,v,u,t,s=$.ah9.W(0,d)
if(s!=null){$.ah9.n(0,d,s)
return s}w=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ah9.n(0,d,w)
v=$.he6=$.he6+w.length
u=B.a4($.ah9).k("cx<1>")
for(;;){if(!(v>41943040&&$.ah9.a>1))break
t=new B.cx($.ah9,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ah9.W(0,t.gR(0)).length
$.he6=v}return w},
io8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cJ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TB(s,A.u))
v.push(new B.eo(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TB(t,A.u))
v.push(new B.eo(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TB(u,A.cD))
v.push(new B.eo(n,l,l,A.cJ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3I(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.jR(e))
return m
case"rounded":m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.j8(B.bn(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bv())
return m
case"hexagon":w=$.Q()
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
v.ab()}}v.E(new B.bv())
return v
case"diamond":m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
m.E(new B.aq(e.c,e.gbw().b))
m.E(new B.aq(e.gbw().a,e.d))
m.E(new B.aq(e.a,e.gbw().b))
m.E(new B.bv())
return m
case"arch":m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdw(new B.o(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bv())
return m
default:m=new B.aG($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.oy(e))
return m}},
fP4(d,e,f){return B.cs(new C.fP5(D.fbC.q(0,d),d,f,e))},
b3k:function b3k(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckt:function ckt(d){this.a=d},
cks:function cks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckr:function ckr(){},
b3h:function b3h(d,e){this.b=d
this.a=e},
fRy:function fRy(d){this.a=d},
fRx:function fRx(d,e){this.a=d
this.b=e},
fA8:function fA8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA6:function fA6(d){this.a=d},
fA7:function fA7(d,e){this.a=d
this.b=e},
aKE:function aKE(d,e){this.c=d
this.a=e},
bx5:function bx5(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fgN:function fgN(d,e,f){this.a=d
this.b=e
this.c=f},
aLl:function aLl(d,e){this.b=d
this.a=e},
Wj:function Wj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blQ:function blQ(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
e0Y:function e0Y(d){this.a=d},
e0X:function e0X(d){this.a=d},
e0W:function e0W(d){this.a=d},
JG:function JG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckl:function ckl(d){this.a=d},
ckk:function ckk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBj:function aBj(d,e){this.c=d
this.a=e},
bg9:function bg9(){this.d=0
this.c=this.a=null},
deJ:function deJ(d){this.a=d},
deI:function deI(d){this.a=d},
a8R:function a8R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmw:function bmw(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
eps:function eps(d,e,f){this.a=d
this.b=e
this.c=f},
b1g:function b1g(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhm:function bhm(d,e,f){this.b=d
this.c=e
this.a=f},
bsB:function bsB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f5I:function f5I(){},
fP5:function fP5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btE:function btE(d,e,f){this.b=d
this.c=e
this.a=f},
aNn:function aNn(){},
aNS:function aNS(){},
aPb:function aPb(){},
fSz(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fSz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xR.cq().MH(D.dtq,A.uB,!0),$async$fSz)
case 3:r=e
if(r==null||J.cr(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.io2(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSz,v)},
io2(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a99(d,new B.a1i(A.cP.gcu().aN(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.ifV(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a99(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.ca.Lt(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a99(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
ifV(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGn().cQr(B.rI(d,A.iq,o,o),o,o,!1).cSm(0,"word/document.xml")
if(n==null)return""
w=n.d_w()
v=A.ca.Lt(0,w==null?$.hFS():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cF(q,new C.fDf(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a99:function a99(d,e,f){this.a=d
this.b=e
this.c=f},
fDf:function fDf(){},
hXv(d,e,f,g,h,i,j,k,l){return new C.OR(l,e,d,g,f,i,h,j,k,null)},
OR:function OR(d,e,f,g,h,i,j,k,l,m){var _=this
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
eIj:function eIj(d){this.a=d},
eIh:function eIh(){},
eIi:function eIi(d){this.a=d},
eEH:function eEH(){},
eEI:function eEI(){},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eGh:function eGh(d){this.a=d},
eG5:function eG5(){},
eG6:function eG6(){},
eE4:function eE4(){},
eHp:function eHp(d){this.a=d},
eIf:function eIf(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eI2:function eI2(d){this.a=d},
eI3:function eI3(){},
eI4:function eI4(){},
eI5:function eI5(d){this.a=d},
eI6:function eI6(){},
eDt:function eDt(d){this.a=d},
eIg:function eIg(){},
eFo:function eFo(d,e){this.a=d
this.b=e},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d,e,f){this.a=d
this.b=e
this.c=f},
eFN:function eFN(d){this.a=d},
eFn:function eFn(){},
eFm:function eFm(d){this.a=d},
eFk:function eFk(){},
eFj:function eFj(d){this.a=d},
eFl:function eFl(){},
eED:function eED(d){this.a=d},
eEE:function eEE(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFv:function eFv(d,e){this.a=d
this.b=e},
eDv:function eDv(){},
eDw:function eDw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFG:function eFG(){},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e,f){this.a=d
this.b=e
this.c=f},
eFF:function eFF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFy:function eFy(d,e,f){this.a=d
this.b=e
this.c=f},
eFz:function eFz(d,e,f){this.a=d
this.b=e
this.c=f},
eFA:function eFA(d){this.a=d},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFI:function eFI(d){this.a=d},
eG0:function eG0(){},
eG1:function eG1(){},
eG2:function eG2(){},
eG3:function eG3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFY:function eFY(d){this.a=d},
eG_:function eG_(){},
eFZ:function eFZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eFW:function eFW(d,e,f){this.a=d
this.b=e
this.c=f},
eFX:function eFX(d,e){this.a=d
this.b=e},
eG4:function eG4(){},
eFw:function eFw(d,e){this.a=d
this.b=e},
eDM:function eDM(){},
eDN:function eDN(d,e,f){this.a=d
this.b=e
this.c=f},
eDO:function eDO(d){this.a=d},
eDP:function eDP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDL:function eDL(d){this.a=d},
eGa:function eGa(d){this.a=d},
eG9:function eG9(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGb:function eGb(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDI:function eDI(d){this.a=d},
eGj:function eGj(d,e,f){this.a=d
this.b=e
this.c=f},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDD:function eDD(d){this.a=d},
eGi:function eGi(d,e,f){this.a=d
this.b=e
this.c=f},
eDu:function eDu(d){this.a=d},
eE5:function eE5(){},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e,f){this.a=d
this.b=e
this.c=f},
eHq:function eHq(d,e,f){this.a=d
this.b=e
this.c=f},
eCr:function eCr(d){this.a=d},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCb:function eCb(d){this.a=d},
eCa:function eCa(d,e){this.a=d
this.b=e},
eCc:function eCc(d,e){this.a=d
this.b=e},
eDG:function eDG(d){this.a=d},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDF:function eDF(d){this.a=d},
eCT:function eCT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d){this.a=d},
eCW:function eCW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCX:function eCX(d){this.a=d},
eCV:function eCV(){},
eCS:function eCS(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d,e){this.a=d
this.b=e},
eI9:function eI9(d){this.a=d},
eIa:function eIa(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d,e,f){this.a=d
this.b=e
this.c=f},
eI8:function eI8(d){this.a=d},
eHG:function eHG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHF:function eHF(d,e,f){this.a=d
this.b=e
this.c=f},
eHE:function eHE(){},
eHD:function eHD(d,e,f){this.a=d
this.b=e
this.c=f},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e,f){this.a=d
this.b=e
this.c=f},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d){this.a=d},
eHB:function eHB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHA:function eHA(d){this.a=d},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEy:function eEy(d,e){this.a=d
this.b=e},
eHr:function eHr(){},
eI_:function eI_(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eCj:function eCj(d,e){this.a=d
this.b=e},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCk:function eCk(d,e){this.a=d
this.b=e},
eCl:function eCl(d,e,f){this.a=d
this.b=e
this.c=f},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCg:function eCg(d,e,f){this.a=d
this.b=e
this.c=f},
eCf:function eCf(d){this.a=d},
eGg:function eGg(d,e,f){this.a=d
this.b=e
this.c=f},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eEC:function eEC(d,e,f){this.a=d
this.b=e
this.c=f},
eEB:function eEB(){},
eD1:function eD1(d,e,f){this.a=d
this.b=e
this.c=f},
eD2:function eD2(d){this.a=d},
eCd:function eCd(d,e){this.a=d
this.b=e},
eE3:function eE3(d,e){this.a=d
this.b=e},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCt:function eCt(d){this.a=d},
eCL:function eCL(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(){},
eCR:function eCR(){},
eCy:function eCy(d){this.a=d},
eCz:function eCz(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCH:function eCH(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d,e){this.a=d
this.b=e},
eE2:function eE2(d,e,f){this.a=d
this.b=e
this.c=f},
eE1:function eE1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE0:function eE0(d,e,f){this.a=d
this.b=e
this.c=f},
eE_:function eE_(d,e){this.a=d
this.b=e},
eCn:function eCn(d,e){this.a=d
this.b=e},
eD5:function eD5(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFQ:function eFQ(d){this.a=d},
eFR:function eFR(d,e){this.a=d
this.b=e},
eFO:function eFO(){},
eFP:function eFP(){},
eHs:function eHs(){},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHu:function eHu(){},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eCs:function eCs(d,e){this.a=d
this.b=e},
eDx:function eDx(){},
eDy:function eDy(){},
eDz:function eDz(){},
eDC:function eDC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e,f){this.a=d
this.b=e
this.c=f},
eF2:function eF2(d){this.a=d},
eF1:function eF1(){},
eF3:function eF3(d,e){this.a=d
this.b=e},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF0:function eF0(d){this.a=d},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
eF6:function eF6(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d){this.a=d},
eF7:function eF7(d,e){this.a=d
this.b=e},
eEY:function eEY(d){this.a=d},
eF8:function eF8(d,e){this.a=d
this.b=e},
eEX:function eEX(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e){this.a=d
this.b=e},
eEW:function eEW(d){this.a=d},
eFa:function eFa(d,e){this.a=d
this.b=e},
eEV:function eEV(d){this.a=d},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eEN:function eEN(d){this.a=d},
eER:function eER(d,e){this.a=d
this.b=e},
eEM:function eEM(d){this.a=d},
eES:function eES(d,e){this.a=d
this.b=e},
eEL:function eEL(d){this.a=d},
eET:function eET(d,e){this.a=d
this.b=e},
eEK:function eEK(d){this.a=d},
eEU:function eEU(d){this.a=d},
eDW:function eDW(d){this.a=d},
eDX:function eDX(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDT:function eDT(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eId:function eId(d){this.a=d},
eIe:function eIe(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFf:function eFf(d){this.a=d},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGP:function eGP(d){this.a=d},
eH_:function eH_(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eHj:function eHj(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHl:function eHl(d,e){this.a=d
this.b=e},
eGF:function eGF(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGL:function eGL(d){this.a=d},
eGM:function eGM(d){this.a=d},
eGN:function eGN(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eGA:function eGA(d){this.a=d},
eH0:function eH0(d){this.a=d},
eGz:function eGz(d,e){this.a=d
this.b=e},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH2:function eH2(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e,f){this.a=d
this.b=e
this.c=f},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGB:function eGB(d){this.a=d},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHn:function eHn(d,e){this.a=d
this.b=e},
eH3:function eH3(d,e,f){this.a=d
this.b=e
this.c=f},
eGx:function eGx(d,e,f){this.a=d
this.b=e
this.c=f},
eGn:function eGn(d,e,f){this.a=d
this.b=e
this.c=f},
eGl:function eGl(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
eGv:function eGv(d){this.a=d},
eH6:function eH6(d){this.a=d},
eH7:function eH7(d){this.a=d},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eGu:function eGu(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d,e){this.a=d
this.b=e},
eGt:function eGt(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eGr:function eGr(d){this.a=d},
eHf:function eHf(d,e){this.a=d
this.b=e},
eGq:function eGq(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eGp:function eGp(d){this.a=d},
eD0:function eD0(d,e,f){this.a=d
this.b=e
this.c=f},
eD_:function eD_(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE7:function eE7(d){this.a=d},
eE9:function eE9(d,e){this.a=d
this.b=e},
eE6:function eE6(d){this.a=d},
eEG:function eEG(){},
eEF:function eEF(){},
eHW:function eHW(d){this.a=d},
eHV:function eHV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHS:function eHS(d,e){this.a=d
this.b=e},
eHX:function eHX(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDp:function eDp(d,e,f){this.a=d
this.b=e
this.c=f},
eDo:function eDo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDd:function eDd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDc:function eDc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDi:function eDi(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDb:function eDb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDa:function eDa(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eFg:function eFg(d){this.a=d},
eFi:function eFi(d,e){this.a=d
this.b=e},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEi:function eEi(d,e){this.a=d
this.b=e},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e,f){this.a=d
this.b=e
this.c=f},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e,f){this.a=d
this.b=e
this.c=f},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e,f){this.a=d
this.b=e
this.c=f},
eEb:function eEb(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e,f){this.a=d
this.b=e
this.c=f},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEA:function eEA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eC9:function eC9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d,e){this.a=d
this.b=e},
agl:function agl(d,e,f){this.a=d
this.b=e
this.c=f},
aAG:function aAG(d,e){this.c=d
this.a=e},
beW:function beW(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
daa:function daa(d){this.a=d},
da9:function da9(d){this.a=d},
bfa:function bfa(d,e){this.c=d
this.a=e},
day:function day(d){this.a=d},
daz:function daz(d){this.a=d},
KI:function KI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beV:function beV(){this.d=!1
this.c=this.a=null},
da7:function da7(d){this.a=d},
da3:function da3(d){this.a=d},
da8:function da8(d){this.a=d},
da2:function da2(d){this.a=d},
da6:function da6(d){this.a=d},
da4:function da4(d){this.a=d},
da5:function da5(d,e){this.a=d
this.b=e},
QB:function QB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0N:function a0N(d,e,f){this.c=d
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
eIU:function eIU(){},
eIK:function eIK(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d,e){this.a=d
this.b=e},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d,e,f){this.a=d
this.b=e
this.c=f},
eIR:function eIR(){},
eIS:function eIS(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIO:function eIO(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIV:function eIV(d,e,f){this.a=d
this.b=e
this.c=f},
eIX:function eIX(d,e){this.a=d
this.b=e},
eIW:function eIW(d){this.a=d},
KO:function KO(d,e){this.c=d
this.a=e},
bu9:function bu9(d,e){this.b=d
this.a=e},
bjW:function bjW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjV:function bjV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aM2:function aM2(){},
aO4:function aO4(){},
bzY:function bzY(){},
aO5:function aO5(){},
fUv(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fUv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xR.cq().MH(B.a(["pdf"],x.s),A.uB,!0),$async$fUv)
case 3:q=e
if(q==null||J.cr(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brh(s,"data:application/pdf;base64,"+A.cP.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUv,v)},
ioF(d){var w,v,u,t,s,r
try{w=B.jJ(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aj2(t,1,200)
return s}}catch(r){}return 1},
fUm(d){return C.ioE(d)},
ioE(d){var w=0,v=B.j(x.T),u
var $async$fUm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUm,v)},
bFx(d,e,f,g){return C.ioO(d,e,f,g)},
ioO(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFx=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hE2(b7,new B.av(r,q))
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
g=new B.q2(new B.pD())
f=B.zx(g,null)
a7=B.K()
a7.r=A.ry.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bu
b1.e=A.dQ
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o1()
w=7
return B.b(a3.xE(800,h),$async$bFx)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.hi),$async$bFx)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dO.gaU(a5))
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
return B.i($async$bFx,v)},
aS2(d,e,f){return C.ioC(d,e,f)},
ioC(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aS2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiJ(d,e,f,new C.fUk(r,q),q,"Sign document"),$async$aS2)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFx(q,t,r.b,r.c),$async$aS2)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3o(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS2,v)},
ioM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hwP(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hwP(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ad(q.c*100,2)+"%;top:"+A.i.ad(q.d*100,2)+"%;width:"+A.i.ad(q.e*100,2)+"%;height:"+A.i.ad(q.f*100,2)+'%">'
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
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lS&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hwq(q.ay)+";border:2px solid "+C.hwq(q.ch)+'"></div>'
break
case 5:l=C.hfu(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal8()
if(p==null)p=A.aBI
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n6(p,0,8,n.c)
j=new B.bQ(j,j.gI(0),k.k("bQ<ak.E>"))
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
hwq(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ad((w&255)/255,3)+")"},
hwP(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFv(d,e){var w=0,v=B.j(x.H)
var $async$bFv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fUt(e,C.ioM(e),d),d,null,!0,!0,x.H),$async$bFv)
case 2:return B.h(null,v)}})
return B.i($async$bFv,v)},
bFw(){var w=0,v=B.j(x.T),u,t,s
var $async$bFw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hw(92,2400),$async$bFw)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fUm(s),$async$bFw)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFw,v)},
aS3(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aS3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hgJ(d),$async$aS3)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A1.fX5(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS3,v)},
hqJ(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3o:function b3o(d,e,f){this.a=d
this.b=e
this.c=f},
fUk:function fUk(d,e){this.a=d
this.b=e},
fUt:function fUt(d,e,f){this.a=d
this.b=e
this.c=f},
fUq:function fUq(d){this.a=d},
fUr:function fUr(d,e,f){this.a=d
this.b=e
this.c=f},
fUs:function fUs(d,e,f){this.a=d
this.b=e
this.c=f},
ioD(d){return C.kM(d.w)},
ioK(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.ir0()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zh(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hK9()
if(w.b.test(u))return u
return null},
hE4(d,e,f){var w,v,u=C.hT8(d),t=$.ot()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
ioQ(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eF(w,d.b);v.C();){u=w.gR(w).y
t=C.zh(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fUi(d,e){var w,v=d.y,u=C.zh(v==null?"":v)
if(u!=null)return d.y=u
w=C.ioQ(new B.Y(e,new C.fUj(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hE4(v==null?"":v,null,w)},
ioP(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kM(w.w))return null
v=w.y
return C.zh(v==null?"":v)},
hXx(){var w,v=$.ot(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
Xf(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xf)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bN),$async$Xf)
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
return B.i($async$Xf,v)},
Xg(d){return C.hXy(d)},
hXy(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xg)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cM,null),$async$Xg)
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
return B.i($async$Xg,v)},
a9b(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9b=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9b)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xf(),$async$a9b)
case 4:s=a6
r=C.zh(a2==null?"":a2)
if(r==null)r=a3!=null?C.hE4(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dn(s),n=J.aT(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zh(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dT.aN(t)
g.n(0,"payload",A.cP.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UM.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zh(J.k(q==null?"":q))
if(f==null)f=C.hqO(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xg(s),$async$a9b)
case 7:u=new B.aHG(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hXx()
n=r==null
d=n?C.hqO(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dT.aN(t)
q.n(0,"payload",A.cP.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UM.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xg(s),$async$a9b)
case 8:u=new B.aHG(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9b,v)},
hqO(d){var w,v,u=$.ot()
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
return B.b(B.c9(),$async$asR)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xf(),$async$asR)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.bt(t,new C.ckT(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xg(t),$async$asR)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asR,v)},
asQ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zh(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$asQ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xf(),$async$asQ)
case 6:t=o.i8(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zh(J.k(q==null?"":q))===p){u=C.a9a(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asQ,v)},
a9a(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9a=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9a)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xf(),$async$a9a)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.i.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.ca.cI(0,A.cI.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UM.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xg(p),$async$a9a)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9a,v)},
ioJ(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fUp(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fUx(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.Y.aw(w,null)}return A.Y.aw(C.ioJ(d==null?B.a([],x.D):d,f,g),null)},
fUw(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fUw=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9b(h,d,e,f,g),$async$fUw)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zh(e==null?"":e)
u=new B.aHs(s,t)
w=1
break}t=A.dT.aN(h)
t=A.kH.gcu().aN(t)
u=new B.aHs(C.zh(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUw,v)},
hgL(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eG(q,s)||J.eG(q,r))return!0
if(J.d5(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ioN(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hgL(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hgL(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hgL(s))return s}}return null},
fUl(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.ca.cI(0,A.cI.aN(J.nq(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i6H(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiu(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asQ(t[1]),$async$aiu)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUl(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zh(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.asQ(r),$async$aiu)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUl(s)
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
return B.b(C.a9a(t[1]),$async$aiu)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUl(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fUl(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiu,v)},
i6H(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UM.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hgI(C.Xb(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cF(t,new C.fpv(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hgI(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xb(B.a3(o,x.N,x.z))
if(e&&C.kM(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bFg(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hv(),$async$bFg)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiu(s),$async$bFg)
case 4:t=e
u=J.cr(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFg,v)},
h2z(d){var w=0,v=B.j(x.T),u,t
var $async$h2z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hK(D.YT,!0,"Dismiss",d,new C.h2A(),new C.h2B(),A.GD,!0,x.N),$async$h2z)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fhA)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2z,v)},
ite(d,e,f,g,h){return B.a6(d,!1).cd(B.ec(new C.h2C(h,e,g,f),!0,null,x.H))},
fUj:function fUj(d){this.a=d},
ckT:function ckT(d){this.a=d},
fUp:function fUp(){},
fpv:function fpv(d){this.a=d},
h2A:function h2A(){},
h2B:function h2B(){},
h2C:function h2C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xd:function Xd(d,e,f,g,h){var _=this
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
eIq:function eIq(){},
eIm:function eIm(d,e){this.a=d
this.b=e},
eIp:function eIp(d,e){this.a=d
this.b=e},
eIn:function eIn(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIs:function eIs(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIu:function eIu(d){this.a=d},
eIx:function eIx(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIy:function eIy(d,e){this.a=d
this.b=e},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e){this.a=d
this.b=e},
Xe:function Xe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmS:function bmS(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIA:function eIA(d){this.a=d},
eIB:function eIB(){},
eIC:function eIC(d){this.a=d},
eID:function eID(d,e){this.a=d
this.b=e},
aG9:function aG9(d){this.a=d},
aGa:function aGa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eC3:function eC3(d){this.a=d},
eC2:function eC2(){},
eC4:function eC4(d){this.a=d},
eC_:function eC_(d){this.a=d},
eBZ:function eBZ(){},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d){this.a=d},
bxr:function bxr(){},
asS:function asS(d){this.a=d},
aGd:function aGd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eIF:function eIF(d){this.a=d},
eIE:function eIE(d){this.a=d},
ich(){var w,v,u,t
for(v=0;v<4;++v){w=D.dhc[v]
try{if(Ae.c18(w)){u=w
return u}}catch(t){}}return null},
Sg(d,e){return C.ilm(d,e)},
ilm(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sg=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ich()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oP?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qV(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.pA(new C.fOy(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.dh,!1,null,new C.fOz(n,m),c6,null,!0,!0,b9)
k=new C.fOD(b7)
j=new C.fOE()
i=null
t=4
b3=c2.a
h=Al.aUk(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h5A(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZn(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J1.z8(i,"dataavailable",new C.fOA(e))
d=new B.c3(new B.bk($.bE,x.dT),x.b2)
A.J1.z8(i,"stop",new C.fOB(d))
J.aj7(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sg)
case 8:w=7
return B.b(c5.$1(d0),$async$Sg)
case 7:a0=d0
J.h5B(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aj7(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aj7(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sg)
case 15:w=14
return B.b(c5.$1(d0),$async$Sg)
case 14:a0=d0
case 13:J.h5B(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.aj7(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.h5B(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.ff,null,b9),$async$Sg)
case 18:w=16
break
case 17:J.aj7(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aj7(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dh(0,A.om),$async$Sg)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hL(e,a5)
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
J.HJ(b0)
J.lL(b0)
B.bP(A.qu,new C.fOC(a7),b9)
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
J.lL(l)
if(p.pX())p.eA()
c3=o
b3=$.aw()
c3.sic(b3)
J.aSY(c3,0)
c3=n
c3.sic(b3)
J.aSY(c3,0)
c3=m
c3.sic(b3)
J.aSY(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sg,v)},
fOy:function fOy(d,e,f){this.a=d
this.b=e
this.c=f},
fOx:function fOx(){},
fOz:function fOz(d,e){this.a=d
this.b=e},
fOD:function fOD(d){this.a=d},
fOE:function fOE(){},
fOA:function fOA(d){this.a=d},
fOB:function fOB(d){this.a=d},
fOC:function fOC(d){this.a=d},
bxF:function bxF(d,e,f){this.c=d
this.d=e
this.a=f},
fjq:function fjq(){},
fjr:function fjr(){},
cle(d){var w=0,v=B.j(x.at),u,t,s
var $async$cle=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at_(d,A.Al),$async$cle)
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
return B.i($async$cle,v)},
cld(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8S:function a8S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmB:function bmB(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eqj:function eqj(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d,e){this.a=d
this.b=e},
a9L:function a9L(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.o4$=n},
a9M:function a9M(d,e){this.a=d
this.b=e},
b53:function b53(){},
cp8:function cp8(){},
cp9:function cp9(){},
cpa:function cpa(d,e,f,g,h,i,j,k,l){var _=this
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
hL8(d){return new C.ajp(d)},
a4a:function a4a(){},
ajp:function ajp(d){this.a=d},
aTh:function aTh(){},
ayv:function ayv(d,e){this.d=d
this.b=e
this.a=null},
aUJ:function aUJ(d){this.b=d
this.a=null},
bEa(d,e){var w=0,v=B.j(x.H),u
var $async$bEa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Q().gud().Mq(d,e),$async$bEa)
case 2:u=B.fXe()
w=3
return B.b(u,$async$bEa)
case 3:return B.h(null,v)}})
return B.i($async$bEa,v)},
hBf(d,e){return(A.tc[(d^e)&255]^A.o.aI(d,8))>>>0},
fGz(d,e,f,g,h,i){var w=C.ihy(d,A.di,f,null,A.d2,g,h,i)
return w},
hDc(d){var w=F.hDW(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hT8(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pI.h(0,w)
if(v!=null)return v
for(u=A.pI.gdO(A.pI),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hDk(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<71;++w)v+="- "+D.drp[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDo(d,e){return C.idZ(d,e)},
idZ(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDo=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hL([d],"application/pdf")
n=x.z
q=B.aWu(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jO(o,"share",[p]),x.H),$async$bDo)
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
return B.i($async$bDo,v)},
hgC(){var w=0,v=B.j(x.y),u,t,s
var $async$hgC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fxp
s=$.bCW
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDo(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgC,v)},
bEM(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fxp
l=$.bCW
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A1.hxy()?3:4
break
case 3:w=5
return B.b(C.bDo(m,k),$async$bEM)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCX
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
J.HJ(q)
w=10
return B.b(B.bP(A.a3,null,x.H),$async$bEM)
case 10:J.lL(q)
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
return B.i($async$bEM,v)},
hgt(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hgt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCX
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lY.rk(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hgt,v)},
hgK(d,e){var w=0,v=B.j(x.H),u,t
var $async$hgK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hL([d],"text/html"))
t.toString
u=window
u.toString
A.lY.rk(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hgK,v)},
b4_(d,e){var w=0,v=B.j(x.y),u
var $async$b4_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b41(d,e),$async$b4_)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b40(d),$async$b4_)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4_,v)}},D,O,Ao,Aa,A_,A0,W,Ap,G,F,E,H,X,R,A1,A2,Aq,M,Ar,A3,As,Ab,K,At,Au,A4,N,Y,P,Z,Av,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,T,U,AD,L,A5,A6,A7
J=c[1]
B=c[0]
A=c[2]
Aj=c[207]
A8=c[74]
Ak=c[54]
Al=c[65]
V=c[224]
A9=c[58]
Am=c[151]
An=c[234]
C=a.updateHolder(c[5],C)
D=c[222]
O=c[142]
Ao=c[42]
Aa=c[226]
A_=c[223]
A0=c[235]
W=c[212]
Ap=c[135]
G=c[193]
F=c[35]
E=c[225]
H=c[96]
X=c[122]
R=c[153]
A1=c[32]
A2=c[181]
Aq=c[237]
M=c[161]
Ar=c[188]
A3=c[106]
As=c[137]
Ab=c[117]
K=c[227]
At=c[238]
Au=c[134]
A4=c[68]
N=c[201]
Y=c[83]
P=c[163]
Z=c[115]
Av=c[124]
Ac=c[119]
Aw=c[229]
Q=c[126]
Ad=c[144]
Ax=c[94]
Ae=c[59]
Af=c[197]
Ay=c[40]
Ag=c[81]
Az=c[160]
Ah=c[152]
Ai=c[233]
AA=c[236]
AB=c[232]
S=c[75]
AC=c[230]
I=c[178]
T=c[52]
U=c[228]
AD=c[239]
L=c[209]
A5=c[231]
A6=c[112]
A7=c[64]
C.ok.prototype={
vG(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.uk(t,v)
return new C.ok(t===0?!1:w,v,t)},
bPW(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DM()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.uk(w,u)
return new C.ok(r===0?!1:s,u,r)},
bQs(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DM()
w=o-d
if(w<=0)return p.a?$.hif():$.DM()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.uk(w,u)
q=new C.ok(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a3X())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bPW(v)
u=w+v+1
t=new Uint16Array(u)
C.hu_(r.b,w,e,t)
w=r.a
s=C.uk(u,t)
return new C.ok(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQs(v)
t=w-v
if(t<=0)return n.a?$.hif():$.DM()
s=n.b
r=new Uint16Array(t)
C.i2k(s,w,e,r)
w=n.a
q=C.uk(t,r)
p=new C.ok(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a3X())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a3X())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOo(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9i(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9i(t,e)
if(s===0)return $.DM()
if(r===0)return t.a===e?t:t.vG(0)
w=s+1
v=new Uint16Array(w)
C.i2i(t.b,s,d.b,r,v)
u=C.uk(w,v)
return new C.ok(u===0?!1:e,v,u)},
HS(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DM()
w=d.c
if(w===0)return t.a===e?t:t.vG(0)
v=new Uint16Array(s)
C.bc6(t.b,s,d.b,w,v)
u=C.uk(s,v)
return new C.ok(u===0?!1:e,v,u)},
bCP(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.uk(r,u)
return new C.ok(!1,u,s)},
bCO(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.uk(u,r)
return new C.ok(!1,r,v)},
bCQ(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.uk(p,m)
return new C.ok(s!==0,m,s)},
VD(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DM()
w=t.a
if(w===e.a){if(w){w=$.a3X()
return t.HS(w,!0).bCQ(e.HS(w,!0),!0).a9i(w,!0)}return t.bCP(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCO(v.HS($.a3X(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9i(e,v)
if(C.cOo(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vG(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9i(e,v)
if(C.cOo(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DM()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hu0(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.uk(w,t)
return new C.ok(q===0?!1:r,t,q)},
bPV(d){var w,v,u,t
if(this.c<d.c)return $.DM()
this.aU0(d)
w=$.hbb.cq()-$.azi.cq()
v=C.hbd($.hba.cq(),$.azi.cq(),$.hbb.cq(),w)
u=C.uk(w,v)
t=new C.ok(!1,v,u)
return this.a!==d.a&&u>0?t.vG(0):t},
ctn(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU0(d)
w=C.hbd($.hba.cq(),0,$.azi.cq(),$.azi.cq())
v=C.uk($.azi.cq(),w)
u=new C.ok(!1,w,v)
if($.hbc.cq()>0)u=u.mD(0,$.hbc.cq())
return t.a&&u.c>0?u.vG(0):u},
aU0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.htX&&d.c===$.htZ&&g.b===$.htW&&d.b===$.htY)return
w=d.b
v=d.c
u=16-A.o.galA(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.htV(w,v,u,t)
r=new Uint16Array(f+5)
q=C.htV(g.b,f,u,r)}else{r=C.hbd(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hbe(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOo(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bc6(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bc6(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i2j(p,r,i);--o
C.hu0(h,j,0,r,o,s)
if(r[i]<h){m=C.hbe(j,s,o,n)
C.bc6(r,l,n,m,r)
while(--h,r[i]<h)C.bc6(r,l,n,m,r)}--i}$.htW=g.b
$.htX=f
$.htY=w
$.htZ=v
$.hba.b=r
$.hbb.b=l
$.azi.b=s
$.hbc.b=u},
gX(d){var w,v,u,t=new C.cOp(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOq().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.ok&&this.aS(0,e)===0},
tT(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vz(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galA(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOr(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOs(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lp(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vG(0):r
while(v.c>1){u=$.hHX()
if(u.c===0)B.bi(D.baF)
t=v.ctn(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPV(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaU0:1,
$ihN:1}
C.aTp.prototype={
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
cSm(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kk(w,w.length,B.U(w).k("kk<1>"))}}
C.SV.prototype={
d_w(){var w,v
if(this.as==null)this.bfY()
w=this.as
v=w==null?null:w.aqM()
return v==null?null:v.eV()},
bfY(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqM().eV()
this.as=new C.bSI(v)}},
gZ(d){return this.at}}
C.a4U.prototype={
a7(){return"CompressionType."+this.b}}
C.bKr.prototype={
eJ(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zV[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zV[d])
s.c=t}return v}}
C.bIJ.prototype={
cQq(d,e){var w,v,u,t,s,r=this,q=new C.bKr(d)
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
t=r.crF(q)
if(t<0)return!1
if(t===0){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
s=r.crI(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
return!0}}return!0},
crF(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eJ(8)
if(t!==D.dz5[u])v=!1
if(t!==D.daa[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crI(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eJ(1),d2=((d3.eJ(8)<<8|d3.eJ(8))<<8|d3.eJ(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c66()
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
u[w]=l}c9.fr=B.c_(6,$.hFW(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eJ(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eJ(1)===0)break
i=d3.eJ(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hFV()
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
if(f<h)h=f}c9.c1m(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avR(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avR(d3)}while(a3===0||a3===1);++a5
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
a3=c9.avR(d3)
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
avR(d){var w,v,u,t,s=this,r=s.ay
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
c1m(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c66(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGo.prototype={
aKb(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTz(e)
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
if(w>0)e.aKe(w,!1)
r.cs2(e)
q=r.r
v=r.f
u=e.aNk(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baM()
s.d_v(0,u,e,f)
q.push(s)}},
cs2(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8Z(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tE()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tE()
d.b4()
d.b4()
d.aT()
d.aT()
d.tE()
d.tE()
u=d.tE()
t=d.tE()
this.f=u
this.r=t
d.c=s},
bTz(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8Z(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.and(A.iq)
o.aOz(r.eV(),A.iq,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cGm.prototype={}
C.ayV.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGp.prototype={
aKb(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aIs.h(0,e.b4())
o.c=w==null?D.Nu:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.app(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_w:D.EW
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.EW&&u>2){w=o.y
w.toString
s=B.rI(w,A.iq,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.app(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b_x
o.ax=new C.cGm(r,q)
w=D.aIs.h(0,q)
o.c=w==null?D.Nu:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpH().length},
aqM(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rI(new Uint8Array(0),A.iq,q,q)
w=r.at
if(w!==D.EW)if(p.gI(0)<=0)r.at=D.EW
else{if(w===D.b_w){p=r.bOd(p)
r.Q=p}else if(w===D.b_x){p=r.bNR(p)
r.Q=p}r.at=D.EW}w=r.c
if(w===D.akn){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q6.C8(p.eV(),!0,!1)
else{t=B.a9A(A.iq,r.w)
p=r.Q
p.toString
A.q6.a53(p,t,!0,!1)
u.b=t.Hr()}r.Q.c=v
return B.rI(u.bl(),A.iq,q,q)}else if(w===D.ako){s=B.a9A(A.iq,32768)
p=r.Q
v=p.c
C.hLj().cQq(p,s)
u=s.Hr()
r.Q.c=v
return B.rI(u,A.iq,q,q)}else return B.rI(p.eV(),A.iq,q,q)},
bpH(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbM(d){var w=this.ch,v=C.KE(C.hBf(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VD(0,C.KE(255)))
w[1]=v
w[1]=v.aM(0,C.KE(134775813)).a2(0,C.KE(1)).VD(0,C.KE(4294967295))
w[2]=C.KE(C.hBf(w[2].M(0),w[1].mD(0,24).M(0)))},
aTp(){var w=(this.ch[2].VD(0,C.KE(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOd(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rI(new Uint8Array(0),A.iq,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbM(u[v.c++]^r.aTp())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTp()
r.bbM(s)
u&2&&B.aj(t)
t[w]=s}return B.rI(t,A.iq,q,q)},
bNR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i1Y(k,w,v)
p=new Uint8Array(B.cc(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cc(A.aI.dt(q,v,k)))
if(!C.htu(A.aI.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bHj(k,new Uint8Array(16),p)
k=x.S
m=J.a6p(0,k)
m=n.r=new C.coY(m)
m.c=!0
m.b=m.boY(!0,new C.aus(p))
if(m.c)m.d=B.bq(D.oN,!0,k)
else m.d=B.bq(D.zJ,!0,k)
l=C.hrF(C.hrH(),64)
l.bio(new C.aus(o))
n.w=l
n.d_1(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.htu(k,m))throw B.W(B.fl("macs don't match"))
return B.rI(r,A.iq,null,null)}}
C.baM.prototype={
d_v(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.app(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rI(t,A.iq,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a8Z(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tE()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tE()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tE()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.app(u)
f.c=n.as
t=new C.cGp(D.Nu,n,D.EW,B.a([C.KE(0),C.KE(0),C.KE(0)],x.f3))
n.ch=t
t.aKb(0,f,g)},
u(d){return this.at}}
C.cGn.prototype={
cQr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGo(B.a([],x.fT))
this.a=g
g.aKb(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTp(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SV(o,A.o.aq(Date.now(),1000),0):C.hjG(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hjG(o,q.w,q)
if(k.as==null)k.bfY()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.and(A.iq)
j.aOz(o,A.iq,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GU(!1).E3(i,0,h,!0)}}return v}}
C.bHj.prototype={
d_1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D0(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hL2(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dM("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dM("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRL(u,0,w,0,o)}else{o===$&&B.c()
q.bOh(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LL(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.D0(0,w,0,w.length)
return f}}
C.cp2.prototype={}
C.cp6.prototype={}
C.cp0.prototype={}
C.aus.prototype={}
C.cp5.prototype={
cQG(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bio(new C.aus(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bST(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bST(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dM("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D0(0,d,0,d.length)
v.D0(0,f,0,4)
u=m.c
u===$&&B.c()
w.LL(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D0(0,s,0,s.length)
w.LL(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cp1.prototype={}
C.cp_.prototype={}
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
w=A.o.tT(w,e.gc1D())
if(!w)e.gc1D()
return w},
aMK(d,e){this.a=0
this.b=d},
tW(d){return this.aMK(d,null)},
aNn(d){var w,v=this,u=v.b
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
w.b3p(v,u)
u=w.b
u===$&&B.c()
w.b3p(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3p(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cp4.prototype={
ir(d){var w,v=this
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
aqf(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4S(u,0)
v.c=0}v.a.aNn(1)},
D0(d,e,f,g){var w=this.cqo(e,f,g)
f+=w
g-=w
w=this.cqp(e,f,g)
this.cqf(e,f+w,g-w)},
LL(d,e){var w,v=this,u=C.hrG(v.a),t=u.a
t===$&&B.c()
t=C.hhi(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hhi(w,3)
v.cqj()
v.cqg(u)
v.auF()
v.ckp(d,e)
v.ir(0)
return 20},
b4S(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ov(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iD===w.d)
if(w.w===16)w.auF()},
auF(){this.d_0()
this.w=0
A.d.hy(this.r,0,16,0)},
cqf(d,e,f){while(f>0){this.aqf(d[e]);++e;--f}},
cqp(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4S(d,e)
e+=4
f-=4
w.aNn(4)
v+=4}return v},
cqo(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqf(d[e]);++e;--f;++v}return v},
cqj(){this.aqf(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqf(0)}},
cqg(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auF()
u=v.d
switch(u){case A.iD:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fm:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
ckp(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iD===this.d,s=0;s<w;++s){r=v[s]
q=J.ov(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cp7.prototype={
d_0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qz[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qz[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qz[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qz[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qz[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qz[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qz[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qz[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qz[30]
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
C.cp3.prototype={
bio(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D0(0,w,0,v)
w=s.d
w===$&&B.c()
r.LL(w,0)
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
s.bd_(s.d,u,54)
s.bd_(s.e,u,92)
u=s.d
r.D0(0,u,0,u.length)},
LL(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LL(s,w)
s=u.e
t.D0(0,s,0,s.length)
v=t.LL(d,e)
s=u.e
A.aI.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D0(0,s,0,s.length)
return v},
bd_(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.coZ.prototype={}
C.coY.prototype={
a3i(d){return(D.oN[d&255]&255|(D.oN[d>>>8&255]&255)<<8|(D.oN[d>>>16&255]&255)<<16|D.oN[d>>>24&255]<<24)>>>0},
boY(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dM("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c_(4,0,!1,u)
switch(v){case 4:q=J.ov(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3i((m>>>8|(m&$.qz[24])<<24)>>>0)^D.cM8[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ov(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3i((k>>>8|(k&$.qz[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3i((k>>>8|(k&$.qz[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ov(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3i((g>>>8|(g&$.qz[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3i(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRL(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ov(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eo[a8&255]
u=D.eo[a9>>>8&255]
t=$.qz[8]
s=D.eo[b0>>>16&255]
r=$.qz[16]
q=D.eo[b1>>>24&255]
p=$.qz[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eo[a9&255]
s=D.eo[b0>>>8&255]
u=D.eo[b1>>>16&255]
v=D.eo[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eo[b0&255]
u=D.eo[b1>>>8&255]
s=D.eo[a8>>>16&255]
q=D.eo[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eo[b1&255]
a8=D.eo[a8>>>8&255]
a9=D.eo[a9>>>16&255]
b0=D.eo[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eo[n&255]
b0=D.eo[m>>>8&255]
a9=D.eo[l>>>16&255]
a8=D.eo[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eo[m&255]
b0=D.eo[l>>>8&255]
o=D.eo[b1>>>16&255]
s=D.eo[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eo[l&255]
o=D.eo[b1>>>8&255]
b0=D.eo[n>>>16&255]
u=D.eo[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eo[b1&255]
o=D.eo[n>>>8&255]
s=D.eo[m>>>16&255]
v=D.eo[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eo[a8&255]^C.nQ(D.eo[a9>>>8&255],24)^C.nQ(D.eo[b0>>>16&255],16)^C.nQ(D.eo[b1>>>24&255],8)^b6[w][0]
m=D.eo[a9&255]^C.nQ(D.eo[b0>>>8&255],24)^C.nQ(D.eo[b1>>>16&255],16)^C.nQ(D.eo[a8>>>24&255],8)^b6[w][1]
l=D.eo[b0&255]^C.nQ(D.eo[b1>>>8&255],24)^C.nQ(D.eo[a8>>>16&255],16)^C.nQ(D.eo[a9>>>24&255],8)^b6[w][2]
b1=D.eo[b1&255]^C.nQ(D.eo[a8>>>8&255],24)^C.nQ(D.eo[a9>>>16&255],16)^C.nQ(D.eo[b0>>>24&255],8)^b6[w][3]
a7=D.oN[n&255]
b0=D.oN[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oN[l>>>8&255]
a9=D.oN[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oN[b1>>>8&255]
h=D.oN[n>>>16&255]
g=D.oN[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oN[l>>>24&255]
s=s[3]
a1=J.ov(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ov(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ov(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ov(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOh(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ov(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ov(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ov(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ov(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.en[a6&255]
v=D.en[b0>>>8&255]
u=$.qz[8]
t=D.en[a5>>>16&255]
s=$.qz[16]
r=D.en[a4>>>24&255]
q=$.qz[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.en[a4&255]
t=D.en[a6>>>8&255]
v=D.en[b0>>>16&255]
w=D.en[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.en[a5&255]
v=D.en[a4>>>8&255]
t=D.en[a6>>>16&255]
r=D.en[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.en[b0&255]
a5=D.en[a5>>>8&255]
a4=D.en[a4>>>16&255]
a6=D.en[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.en[p&255]
a6=D.en[b0>>>8&255]
a4=D.en[n>>>16&255]
a5=D.en[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.en[o&255]
a4=D.en[p>>>8&255]
a7=D.en[b0>>>16&255]
t=D.en[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.en[n&255]
a7=D.en[o>>>8&255]
a5=D.en[p>>>16&255]
v=D.en[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.en[b0&255]
a7=D.en[n>>>8&255]
t=D.en[o>>>16&255]
w=D.en[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.en[a6&255]^C.nQ(D.en[b0>>>8&255],24)^C.nQ(D.en[a5>>>16&255],16)^C.nQ(D.en[a4>>>24&255],8)^b5[a9][0]
o=D.en[a4&255]^C.nQ(D.en[a6>>>8&255],24)^C.nQ(D.en[b0>>>16&255],16)^C.nQ(D.en[a5>>>24&255],8)^b5[a9][1]
n=D.en[a5&255]^C.nQ(D.en[a4>>>8&255],24)^C.nQ(D.en[a6>>>16&255],16)^C.nQ(D.en[b0>>>24&255],8)^b5[a9][2]
b0=D.en[b0&255]^C.nQ(D.en[a5>>>8&255],24)^C.nQ(D.en[a4>>>16&255],16)^C.nQ(D.en[a6>>>24&255],8)^b5[a9][3]
a4=D.zJ[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zJ[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zJ[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zJ[o>>>8&255]
i=D.zJ[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zJ[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ov(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSH.prototype={}
C.bSI.prototype={
gI(d){var w=this.a.length
return w},
aqM(){return B.rI(this.a,A.iq,null,null)}}
C.czv.prototype={
Nn(d){var w=d.w,v=Math.max(1,A.i.cL(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abe(v,t+20,u+16,t,u,B.uv(d.x))},
nD(d){return!1}}
C.bTJ.prototype={
cKt(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTK(),x.E))},
mX(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mX)
case 6:w=5
return B.b(p.bEa(f,r),$async$mX)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mX,v)}}
C.axz.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9y.prototype={
A(d,e){if(e==null)return!1
if(J.bW(e)!==B.b2(this))return!1
return e instanceof C.a9y&&e.a===this.a},
gX(d){return B.bx(B.b2(this),B.xs(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h3z)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a2a.prototype={
S(){return new C.aKZ(B.aR(x.N))},
cY8(d){return this.d.$1(d)},
cVP(){return this.e.$0()}}
C.aKZ.prototype={
Y(){this.a4()
this.PN()},
PN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVP(),$async$PN)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fhT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PN,v)},
ZW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fhX(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fhY(t))
w=3
return B.b(C.aoY(p),$async$ZW)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fhZ(t,s,p))
w=4
return B.b(t.PN(),$async$ZW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZW,v)},
a2d(d){return this.cuA(d)},
cuA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fhU(t))
s=J.t(d,"id")
w=3
return B.b(C.c3H(J.k(s==null?"":s)),$async$a2d)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fhV(t))
w=1
break}q=C.hgI(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cY8(B.a([q],x.D)),$async$a2d)
case 4:if(t.c==null){w=1
break}t.m(new C.fhW(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2d,v)},
PM(d,e){return this.bOJ(0,e)},
bOJ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fhO(q),r,null,!0,!0,x.y),$async$PM)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fhP(t))
s=s.h(e,"id")
w=4
return B.b(C.aoX(J.k(s==null?"":s)),$async$PM)
case 4:if(t.c==null){w=1
break}t.m(new C.fhQ(t))
w=5
return B.b(t.PN(),$async$PM)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PM,v)},
cJs(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iQ[B.bL(v)-1]+" "+B.bU(v)},
aTg(d,e){var w=null,v=B.l(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Q5,A.n),w,e,w,w,w,w,w,e)},
aTf(d){return this.aTg(d,44)},
ba4(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q5:u,r=B.l(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.AF,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.v(q,B.a([Z.AF,B.q(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aT,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bHL,u,u,u)],p))}return B.E(B.az(A.c2,B.cT(u,B.A(q,A.l,u,A.bb,A.j,0,u,u),u,u,A.b1,new B.p(u,u,u,r,u,s,A.n),A.h2,u,u,u,u,A.qB,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fi2(this,d),u,u,u,u,u,u,!1,A.a4),1)},
com(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.a__,n=B.l(18),m=p?A.d5:A.dl
m=B.L(m,A.r,p?1.8:1)
w=this.aTf(A.qO)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWo,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWq,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.Q5:q
u=p?q:B.L(A.aU,A.r,1.6)
r=p?D.bZg:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bd,t,B.cT(q,r,q,q,A.b1,new B.p(q,q,u,q,q,v,A.a6),A.fX,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.j,0,q,q),q,q,A.b1,new B.p(o,q,m,n,q,q,A.n),A.fX,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fhS(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwc(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJs(J.k(o==null?"":o))
o=B.l(18)
w=B.L(A.dl,A.r,1)
v=r.aTf(A.Pd)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWo,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWq,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b6y(A.i_,A.bx,"Bring it back",r.r?q:new C.fi_(r,d))
return B.q(q,B.A(B.a([v,A.bd,t,p,A.bm,r.b6y(A.ei,A.c0,"Delete",r.r?q:new C.fi0(r,d))],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(D.a__,q,w,o,q,q,A.n),q,q,q,A.d3,D.bC1,q,q,q)},
b6y(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.h6(B.az(w,B.q(w,B.X(d,v?A.aU:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auV(d,e,f){var w=null
return new B.D(D.bB0,B.x(B.a([B.X(d,A.aU,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fzQ,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.frN,A.K,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cd
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aU,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTg(A.zw,46),A.bd,D.bIJ],t)
if(j.r)s.push(D.esp)
s.push(B.aH(i,i,i,i,A.t8,i,i,i,new C.fi5(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.L(A.dl,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bEK,s,i),B.q(i,B.A(B.a([j.ba4(0,A.zd,"Save",j.a.c.length),j.ba4(1,A.Pv,"Saved",o.gI(h))],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bDL,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.l(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Ph:A.ec
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vq,i,i,i),1)],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bDH,A.iw,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fvB,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fyN,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fi6(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.j,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auV(A.qO,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.com(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.erV)
else if(j.e==null)s.push(j.auV(A.a2y,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auV(A.ps,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwc(r.gR(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.cm,B.cl(u,i,i,A_.amc,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8J()
p=s?i:D.Q5
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b8.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zd,m?A.jZ:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bEm,B.az(i,B.cT(i,B.A(B.a([k,A.V_,new B.dl(1,A.cm,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.jZ:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e4),i)],t),A.l,i,A.bb,A.j,0,i,i),i,i,A.b1,new B.p(s,i,i,o,n,p,A.n),A.h2,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bm(!0,B.x(q,A.l,i,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7z,i,i,i,i,i,i,i,i)}}
C.oO.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZT.prototype={
S(){return new C.azu(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azu.prototype={
Y(){this.a4()
this.PX()},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a38(t.a.c),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
cCv(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.ox(t.d,new C.cPR(d))
v=w<0
if(v&&C.i2m(d))return t.f
u=t.d
if(v)J.n2(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h6V(new C.cPS(t),v)
return t.f=t.f.bG(new C.cPT(t,d),v).eG(new C.cPU())},
Jh(d,e,f){return this.chT(0,e,f)},
b0h(d,e){return this.Jh(0,e,!1)},
chT(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.ec(new C.cPN(t,e),!1,null,x.H)),$async$Jh)
case 3:w=4
return B.b(t.f,$async$Jh)
case 4:w=5
return B.b(t.PX(),$async$Jh)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
b_x(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dM9:d
this.Jh(0,new C.oO(w,v,new B.V(Date.now(),0,!1)),!0)},
c89(){return this.b_x(null)},
aeE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPV(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_x(s)
case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
Jg(d,e){return this.bOA(0,e)},
bOA(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cPI(e),s,null,!0,!0,x.y),$async$Jg)
case 3:if(g!==!0){w=1
break}t.m(new C.cPJ(t,e))
w=4
return B.b(t.f,$async$Jg)
case 4:w=5
return B.b(C.ahw(t.a.c,e.a),$async$Jg)
case 5:w=6
return B.b(t.PX(),$async$Jg)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jg,v)},
DP(d){return this.bGG(d)},
bGG(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPE(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DP)
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
return B.b(t.b0h(0,d),$async$DP)
case 9:w=5
break
case 7:w=10
return B.b(F.hhk(r,d.b,null),$async$DP)
case 10:w=5
break
case 8:w=11
return B.b(t.Jg(0,d),$async$DP)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
c1z(){var w,v,u,t,s=null,r=[D.dMc,D.dMa,D.dMb],q=new C.cPL(),p=B.l(26),o=x.V,n=B.a([new B.ac(0,A.G,A.cZ.j(0.4),A.f_,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dvy[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.p0,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.or,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fZQ,A.T,B.bV(A.bG,l,A.bs,s,6,6),A.aQ,B.az(s,B.q(s,D.f93,A.f,s,s,new B.p(A.c,s,s,B.l(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.amB,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPK(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ab,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.j,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c6L,A.n),s,s,s,s,D.bEU,s,s,s)},
bGE(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.by(B.l(6),new B.an(A.a0,v,A.b3,A.t,B.a([B.ev(A.A,F.apz(d.b),A.f,A.c_),D.eyr,B.ap(v,B.az(v,B.q(v,D.c_7,A.f,v,v,D.b8w,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPz(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.foT,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.T,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fvN,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPA(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPB(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.D(O.al6,B.h6(B.az(s,B.q(s,A.as1,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b8.j(0.5),A.H,12)],x.V),E.wX,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9y(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.ny,s,s,s,!0,s,s,s,s,s,D.fZU,s,s,s,1,s,!0)
if(t.e)r=D.bbZ
else{w=t.c1z()
v=B.a([D.fKU,A.ae],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.foi,s,s,s),A.f,s,s,new B.p(D.bhd,s,s,u,s,s,A.n),s,s,s,s,A.yU,s,s,s))}r=B.a([new B.nH(A8.a0o,new B.m3(w,s),s),new B.nH(D.bEg,new B.m3(B.A(v,A.l,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cr(t.d))r.push(D.fgd)
else r.push(new B.nH(D.bDJ,B.PR(new B.oS(new C.cPW(t),J.ad(t.d),!0,!0,!0,0,B.tr(),s),D.bbd),s))
r=B.w7(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfP,r,s,!1,!1,s,s)}}
C.ZR.prototype={
S(){return new C.azq(B.a([],x.bx))},
UT(d){return this.d.$1(d)}}
C.aGN.prototype={}
C.azq.prototype={
b3r(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aR),w),u=this.gb0g()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aR),w)
w.aW(0,u)
return new C.aGN(v,w,f)},
ED(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qz,new C.cP2(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a4()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aR),v)
t=m.gb0g()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aR),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aR),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aR),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aR),v)
n.aW(0,t)
r.push(new C.aGN(o,n,p.c))}if(r.length===0)r.push(m.b3r("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpx()
q=r.a
q.UT(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.aw()
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
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rN(n,w,v,t,u)},
Bn(){var w=0,v=B.j(x.H),u=this,t
var $async$Bn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpx()
t=u.a
w=2
return B.b(t.UT(t.c),$async$Bn)
case 2:return B.h(null,v)}})
return B.i($async$Bn,v)},
c9w(){this.m(new C.cP1(this))
this.ED()},
b_c(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cP4(w,d,v))
w.ED()},
c9x(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cPc())
this.ED()
$.aV.x1$.push(new C.cPd(w))},
Rg(d){return this.coc(d)},
coc(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(80,1400,A.eO),$async$Rg)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rg)
case 8:p=f
o=q.b.toLowerCase()
n=J.aj3(o,".png")?"image/png":"image/jpeg"
r.m(new C.cP5(d,n,p))
r.ED()
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
return B.i($async$Rg,v)},
yr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hF8(r,t.gpx()),$async$yr)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cP3(t,s))
t.ED()
case 1:return B.h(u,v)}})
return B.i($async$yr,v)},
cou(d){var w,v=this,u=null,t=F.fNP(d.c)
if(t==null)return new B.bM(A.a7,u,u,B.ho(D.bTc,D.fNu,new C.cP7(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ab,A.t,B.a([B.by(B.l(12),B.fR(t,A.A,u,u,A.cj,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6z(A.jL,new C.cP8(v,d)),A.bm,v.b6z(A.cy,new C.cP9(v,d))],w),A.l,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6z(d,e){var w=null
return B.aI(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hI,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aV,0,w,w,A.cR,w,w,A.aj)},
JV(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bn(),$async$JV)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hhk(s,t.gpx(),new C.cPb(t)),$async$JV)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eH(B.a([new B.D(A.pl,B.ho(D.bXZ,D.fTL,m.gaAJ(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aH(l,l,l,l,A.as0,l,l,l,new C.cPe(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Z_,l,1,l,l,l,!1,l,!1,E.ny,l,l,l,!0,l,l,l,l,l,D.fOm,l,l,l,1,l,!0),i=Ay.aWG(N.lF,A.c,Ag.XL,A.oG,D.fP7,m.gc9v()),h=B.l(18),g=m.gayF(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.az(l,B.q(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apz(m.gpx()),A.f,A.dB),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ex,B.E(B.x(B.a([D.h0u,A.ax,B.d(F.hfL(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fBH,l,l,l),A.X,B.dh(E.arj,E.aXc,g,B.bp(A.cZ,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.j,0,A.p),1)],k),A.l,l,A.e,A.j,0,l,l),A.f,l,l,new B.p(E.Z_,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.oZ,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.T,w,A.T,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aQ],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fCe,l,l,l)
r=B.aH(l,l,l,l,D.bWB,l,l,l,v===0?l:new C.cPf(m,v),l,l,l,l,"Move up",A.cf)
q=h.length
p=B.aH(l,l,l,l,D.c2b,l,l,l,v===q-1?l:new C.cPg(m,v),l,l,l,l,"Move down",A.cf)
q=q===1?l:new C.cPh(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.q(l,B.x(B.a([new B.c8(A.aL,A.e,A.j,A.l,l,A.p,l,0,B.a([s,A.b5,r,p,B.aH(l,l,l,l,B.X(A.ei,A.ph,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cf)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e6(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.ch,!0,A.a5,l,A.ao,l,l,l,l),A.an,m.cou(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e6(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(E.ny,l,new B.bH(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9y(g),A.em,D.bCh,l,l,l))}return B.oP(!0,B.c4(j,E.aj4,B.cl(f,l,l,D.bCM,l,l,A.ah,!1),l,!1,!1,i,l),new C.cPi(m),x.C)}}
C.azs.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.ny,q=B.l(16),p=B.l(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.cZ.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eM,B.aI(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(u.e,t,t,t,t,t,t,D.aVJ,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eJ,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.j,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arU.prototype={
S(){return new C.aFB()}}
C.aFB.prototype={
Y(){this.a4()
this.a_E()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a22()},
a22(){var w=0,v=B.j(x.H),u=this,t
var $async$a22=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dL(t,x.H),$async$a22)
case 2:u.d=null
if(u.c!=null)u.m(new C.elA(u))
w=3
return B.b(u.a_E(),$async$a22)
case 3:return B.h(null,v)}})
return B.i($async$a22,v)},
a_E(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_E=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.Zw(B.cD(n,0,null),new B.Qd(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iX(0).dh(0,A.qw),$async$a_E)
case 7:if(r.c==null){w=1
break}r.d.tY(!1)
r.m(new C.ely(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.elz(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_E,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccB(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.elB(w))}else{v.qp(0)
w.m(new C.elC(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bL
n=B.l(8*n.d)
m=B.a([D.jA.j(0.92),D.Mm.j(0.95)],x.O)
w=B.L(A.c5.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qR,A.c5,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c2(B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.P,0,A.p),o,o,o),new B.p(o,o,w,n,o,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),A.bj)}if(p.f)return B.as(B.X(A.aqy,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcR
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AP(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.q(o,B.X(A.hx,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a6),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.by(n,new B.an(A.a0,o,A.b3,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccA(),o,o,o,o,o,o,!1,A.a4)}}
C.ye.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jD.prototype={}
C.aes.prototype={
B(d){return B.pi(new C.e8_(this,B.S(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adR.prototype={
B(d){var w,v,u=null,t=B.S(d).ax.a===A.J,s=B.l(18),r=B.l(18),q=B.L(D.jA.j(t?0.35:0.4),A.r,1),p=t?D.N0:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.l(10),l=B.L(A.c5.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fH(0.5625,C.ilH(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.an6,u,u,u,u),1)
m=D.jA.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jA,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aI(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aD:D.boA,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.aln,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yh.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o7.prototype={}
C.blA.prototype={
a_N(d){var w=null
return new B.bM(A.a7,w,w,B.BY(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cd4(){return this.a_N(1)},
azm(d){var w=null,v=B.l(8),u=B.L(A.is,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agE,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dN(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.l,v,A.bb,A.j,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.an,w.azm("TAARIFA ZA WANANDOA"),A.an,w.cd4(),A.cU,w.a_N(0.9),A.cU,w.a_N(0.7),A.T,w.azm("TAMKO LA MAKUBALIANO"),A.fO,w.a_N(1),A.cU,w.a_N(0.95),A.T,w.azm("MASHAHIDI"),A.b5,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.j,0,A.p)}}
C.aev.prototype={
B(d){return B.pi(new C.eqm(B.S(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.agb.prototype={
B(d){var w,v,u,t,s,r=null,q=B.S(d).ax.a===A.J,p=B.l(18),o=B.l(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bo6:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.l(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.hgg(w.a)
if(v==null)v=A.d.gH(D.SF)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fH(0.5625,new B.an(A.a0,r,A.b3,A.t,B.a([B.bR(0,B.fR(C.hgf(v.d),A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.am1,new C.blA(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.an6,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:A2.N1,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aI(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aD:D.bgs,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.aln,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.lc.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a90.prototype={}
C.X1.prototype={
S(){var w=$.aw()
return new C.aFS(new B.cw(null,x.A),new B.au(A.aw,w),new B.au(A.aw,w),B.mZ(0,null,null),A.d.gH(D.a5D),D.dWD,B.a([],x.L),B.a([],x.gE))}}
C.aFS.prototype={
Y(){var w,v=this
v.a4()
v.w=v.a.c
v.z=new C.Af(C.fRL(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fQE().bG(new C.etj(v),w)
$.rj().jo(0,"assets/images/ngmy_logo.png").bG(new C.etk(v),w).eG(new C.etl())},
t(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a3()},
afv(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b4(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
JA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(88,1600,A.eO),$async$JA)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$JA)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hFp(m,p),$async$JA)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFV(new B.qc(o,1),m),$async$JA)
case 10:if(r.c!=null)r.m(new C.esW(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afv("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JA,v)},
XJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hFp(s,q),$async$XJ)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFV(new B.qc(r,1),s),$async$XJ)
case 4:if(t.c!=null)t.m(new C.esS(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XJ,v)},
afw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.et2(q))
t=4
q.a.toString
p=C.iqN()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afw)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.et3(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afv(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.et4(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afw,v)},
a_S(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_S=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.esY(q,i))
t=4
q.a.toString
p=C.iqM()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_S)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esZ(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.et_(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.et0(q))
$.aV.x1$.push(new C.et1(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_S,v)},
cdk(d){this.m(new C.esX(this,d))},
EU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.esU(q))
t=4
w=7
return B.b($.aV.gmT(),$async$EU)
case 7:w=8
return B.b(B.bP(A.mV,null,x.H),$async$EU)
case 8:k=$.aV.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qm))throw B.W("The page is not ready yet.")
w=9
return B.b(p.me(1800/p.gZ(0).a),$async$EU)
case 9:o=e
w=10
return B.b(o.hs(A.hi),$async$EU)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.ahy(J.eT(A.dO.gaU(n)),"ngmy_news.png","image/png"),$async$EU)
case 11:m=e
q.afv(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afv(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esV(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EU,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.lo,a2,a2,a2,new C.eta(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bYv,a2,a2,a2,new C.etb(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oF,a2,a2,a2,a4?a1.gb1z():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eH(v,a2,a2,!0,!0,A.C_,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f9e,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fH(0.7142857142857143,B.ev(A.A,new B.en(new C.b2Z(t,s,r,a1.x,a2),a1.d),A.f,A.dB),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tG,a2,a2,a2)
t=a1.as?a2:a1.gcdj()
t=B.a([B.E(B.dh(D.bZh,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ch,a2,a2,a2),t,B.bp(D.uc,a2,a2,a2,A.c,A.h6,a2,a2,new B.b9(B.l(14),Q.vR),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.l(10),B.fR(r,A.A,a2,a2,A.cj,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aH(a2,a2,a2,a2,D.bVT,a2,a2,a2,a1.as?a2:a1.gbNb(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tG,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aV7("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dpq[o]
p.push(B.n3(a2,D.uc,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pT,a2,a2,a2),A.hk,new C.etc(a1,n),a2,a2,Q.vR,a2))}p=B.bV(A.bG,p,A.bs,a2,6,8)
m=a1.Q
m=B.bV(A.bG,B.a([D.h_2,A.bd,B.jv(a2,a2,a2,D.fJA,a2,new C.etd(a1),m==="en",a2,a2,a2,a2),A.ae,B.jv(a2,a2,a2,D.fJv,a2,new C.ete(a1),m==="sw",a2,a2,a2,a2)],w),A.vL,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tG,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5D,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gI(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTz(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5D,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gI(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTz(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdm()
h=B.l(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.H,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.T,p,A.X,m,A.aB,new B.D(A.cx,l,a2),new B.a5(a2,78,k,a2),A.T,new B.a5(a2,78,j,a2),A.aQ,B.az(a2,B.q(A.A,B.A(B.a([D.bZb,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fC,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.uZ,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e0,B.A(B.a([D.dGR,A.au,D.bJ6],w),A.l,a2,A.e,A.j,0,a2,a2),A.T],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a7
q=e?A.b8.j(0.35):D.uc
p=new B.aN(16,16)
d=new B.ay(A.bA,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fzz,a2,a2,a2),A.f,a2,Aa.Xy,new B.p(q,a2,new B.bH(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.iw,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.daE[o]
t.push(B.n3(a2,D.uc,B.d(a0,a2,a2,a2,a2,a2,a2,A.KD,a2,a2,a2),A.hk,new C.etf(a1,a0),a2,a2,Q.vR,a2))}u.push(B.bV(A.bG,t,A.bs,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aV7("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.etg(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdl()
u.push(B.A(B.a([t,A.ae,B.IG(A.zA,s,B.o1(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1z()
u.push(B.dh(A.oF,D.fVt,t,B.bp(A.cX,a2,a2,a2,a2,A.Kl,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.alM,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.L(E.kp.j(0.5),A.r,1)
v.push(B.bR(0,B.e9(B.as(B.q(a2,B.A(B.a([E.aan,A.ex,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jw,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(E.BR,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bFb,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.C_,new B.an(A.a0,a2,A.ab,A.t,v,a2),a2,!1,!1,a2,a2)},
aV7(d){var w=null
return B.bt(w,new B.b6(4,B.l(14),A.a1),w,A.eY,w,w,w,w,!0,w,w,w,w,w,w,D.uc,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.ED,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTz(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b0(d.f),p=s?A.bD:A.bA
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ku,t,t,t,t),A.fO],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bBf,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jo,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.q(t,B.x(w,A.l,t,A.bb,A.j,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iN,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.esT(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Af.prototype={
bf9(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Af(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOc(d){var w=null
return this.bf9(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cj6(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cj4(),B.U(w).k("N<1,n>")).bY(0,new C.cj5())
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
return this.bf9(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG6(d){return this.f}}
C.tP.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cc.prototype={
a7(){return"NewsFrame."+this.b}}
C.ly.prototype={}
C.b2Z.prototype={
rV(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1B(d,e,f,g){return this.rV(d,e,null,1.25,f,A.bt,g)},
Qz(d,e,f,g,h){return this.rV(d,e,f,1.25,g,A.bt,h)},
azs(d,e,f,g,h){return this.rV(d,e,null,f,g,A.bt,h)},
azr(d,e,f,g,h){return this.rV(d,e,f,g,0,A.bt,h)},
b1D(d,e,f,g,h){return this.rV(d,e,null,f,0,g,h)},
cdq(d,e,f,g,h,i){return this.rV(d,e,f,g,0,h,i)},
azq(d,e,f,g){return this.rV(d,e,null,f,0,A.bt,g)},
afz(d,e,f){return this.rV(d,e,null,f,0,A.bt,A.cT)},
b1C(d,e,f,g,h){return this.rV(d,e,f,g,0,h,A.cT)},
cdp(d,e,f,g){return this.rV(d,e,null,f,0,g,A.cT)},
cdo(d,e,f,g){return this.rV(d,e,f,g,0,A.bt,A.cT)},
afA(d,e,f,g,h,i){return this.rV(d,e,f,g,h,A.bt,i)},
b1A(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.eo(d,u,u,A.cJ,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jg(1),u,u,h,u,A.bY,u,A.cs)
v.o6(g)
if(!v.b.a.c.gaGz())return w
w-=2}return j},
afx(d,e,f,g,h,i,j,k){return this.b1A(d,e,f,g,h,i,j,k,A.bt)},
aBE(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.j,0,A.p)},
aBD(d){return this.aBE(null,!1,d)},
aix(d,e){return this.aBE(null,d,e)},
cvj(d,e){return this.aBE(d,!1,e)},
gb3O(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXP(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pi(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afx(w.gaXP(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXP(),v,g,A.a2,v,v,v,w.azr(u,t,f,1.02,A.V),e,v,v)},
aXU(d){return this.Pi(d,A.K,null,2,78,30)},
acN(d,e,f,g,h){return this.Pi(d,e,null,f,g,h)},
c1s(d,e,f,g,h){return this.Pi(d,A.K,e,f,g,h)},
c1r(d,e,f){return this.Pi(d,A.K,null,e,f,30)},
Sz(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bL
w=v.d.as
return new B.D(A.jF,B.d(s,u,g,A.a2,u,u,u,v.b1C(w,v.b1A(t,w,A.cT,d,g,h,15,1.2,A.cH),f,1.2,A.cH),e,u,u),u)},
b9J(d){return this.Sz(d,A.K,null,3,24)},
aD7(d,e,f,g){return this.Sz(d,e,null,f,g)},
cCZ(d,e,f){return this.Sz(d,A.K,e,3,f)},
b9K(d,e){return this.Sz(d,e,null,3,24)},
cCX(d,e){return this.Sz(d,A.K,null,3,e)},
cCY(d,e,f){return this.Sz(d,e,null,3,f)},
asX(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qz("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.j,0,v,v)},
Od(){return this.asX(null,!0)},
asW(d){return this.asX(null,d)},
bJ6(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bL
return new B.D(A.hW,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdp(this.d.as,13.5,1.2,A.cH),e,w,w),w),w)},
w7(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3O(),h=A.o.aq(j.bD(B.c1(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.idr(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1B(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afx(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afx(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eP,l,l,l,m.afA(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.l,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.T,B.A(B.a([B.d(C.bFa(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iT,A.j,0,l,l),A.an,m.aix(!0,3)],s),A.l,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ex,B.E(B.d(i,l,1,A.eP,l,l,l,m.azq(v,u*0.9,1,A.V),l,l,l),1)],w),A.l,l,A.e,A.j,0,l,l),A.X,B.A(B.a([B.d(C.bFa(j),l,l,l,l,l,l,m.Qz(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iT,A.j,0,l,l),A.T,m.cvj(B.b0(h),3)],w),A.l,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb3O()
v=B.d("NGMY",l,l,l,l,l,l,m.azs(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eN(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rV(k,r*0.72,o,1.05,-0.5,A.cH,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b5,new B.dl(1,A.cm,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afA(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.e1,l,l),l)],n),A.l,l,A.e,A.j,0,l,l),A.T,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iT,A.j,0,l,l)
t=m.aix(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azq(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aix(!0,1.4),A.ax,B.d(C.bFa(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aBD(3)],h),A.l,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azs(v,u,1,3,A.V),A.K,l,l),A.T,m.aix(!0,1.2),A.ax,B.A(B.a([B.d(C.bFa(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iT,A.j,0,l,l),A.ax,m.aBD(3)],h),A.l,l,A.e,A.j,0,A.p)}},
adZ(d){return this.w7(d,!1)},
afy(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.l(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afA("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cdn(d,e){return this.afy(d,null,e,null)},
b_4(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azr("Roboto",15,t,1,A.cD),r=B.X(E.aoJ,t,w,w,w,18),q=A.a.aB(A.oK[B.bL(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bU(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h4,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
ay6(){return this.b_4(A.n4)},
b6M(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afA("Roboto",this.afx(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBH(d,e,f){return this.b6M(d,e,f,30)},
aDa(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bL
return new B.D(A.uq,B.d(v,w,e,A.a2,w,w,w,this.cdo("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9O(d){return this.aDa(d,3,22)},
cD9(d,e){return this.aDa(d,e,22)},
ug(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BK(D.bI1,w,s)
if(v==="sepia")w=new B.BK(D.bI0,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.as(B.X(A.z8,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c2(s,new B.p(s,s,s,s,s,new B.bY(A.A,0.95,A.x,s,0,B.a([A.L,A.YV.j(0.38)],x.O),s,s),A.n),A.bj))
return new B.a5(d,e,new B.an(A.a0,s,A.b3,A.t,v,s),s)},
qW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ug(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.me,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.enF,14)],x.V)
v=k.ug(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eN(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b1C(i.as,13.5,D.bic,1.1,A.cH),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(D.bm5,j,j,j,w,j,A.n),j,e,j,j,D.bCH,j,j,d),j)
case 3:w=B.l(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.by(B.l(25),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.as(B.q(j,B.hU(k.ug(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a6),j,t,j,j,A.me,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.enl,10)],x.V)
return B.eN(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ab,A.f,B.a([B.bR(0,B.q(j,k.ug(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rY,j,j,j),0,0,0),B.ap(j,B.eN(A.A,-0.6,B.q(j,j,A.f,A.bM.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eN(A.A,-0.6,B.q(j,j,A.f,A.bM.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b3(B.nW(k.ug(d,e),A.aq,D.htH),new C.beB(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ug(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bh(s));++m){l=new B.aN(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aL,A.qV,A.j,A.l,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b3,A.t,w,j),A.f,A.ep,j,j,j,e,j,j,D.bHh,j,j,d)
case 8:w=d/2
v=B.xD(A.fM,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.by(B.xD(A.hQ,new B.aN(w,w)),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h5,22)],x.V)
return B.q(j,k.ug(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nW(k.ug(d,e),A.aq,D.hBX),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ug(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aR4(d,e){return this.d.e===D.Tg?A.bL:this.bJ6(d,e)},
Xf(d){return this.aR4(d,A.K)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1D(v.Q,19,1.15,A.cH,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qz("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afz(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jl(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclH(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aas(d,e,f,g){return B.cs(new C.cj7(this,e,d,f,g))},
aar(d){return this.aas(d,22,!0,18)},
Xs(d,e){return this.aas(d,22,!0,e)},
aS9(d,e,f){return this.aas(d,22,e,f)},
bL6(d,e,f){return this.aas(d,e,!0,f)},
bcN(d,e,f,g){return B.cs(new C.cj8(this,e,d,g,!0,f))},
cku(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adZ(824),A.aB,k.aXU(824),k.b9J(824),A.T,k.Od(),A.af,B.as(k.qW(824,360),j,j,j),k.Xf(824),A.af,B.E(k.aar(3),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adZ(824),A.aQ,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acN(440,A.bn,3,62,26),k.aD7(440,A.bn,2,20),A.b5,k.asX(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Km,B.x(B.a([k.qW(362,310),k.Xf(362)],w),A.l,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.X,k.aBD(2),A.af,B.E(k.aar(3),1)],w),A.al,j,A.e,A.j,0,A.p)
case 2:w=k.w7(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1s(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCZ(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.l,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Cj,j,j,j)
u=B.a([B.as(k.qW(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tg){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azr(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lK,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ab,A.t,u,j),A.T,k.Od(),A.X,B.E(k.Xs(2,21),1)],t),A.al,j,A.e,A.j,0,A.p)
case 3:h=k.w7(824,!0)
w=k.qW(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b9,j,A.ab,A.t,B.a([w,B.ap(0,B.q(j,k.Pi(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a8(A.b7,A.b9,A.x,v,j,j),A.n),j,j,j,j,D.bFu,j,j,j),j,j,0,0,j,j)],u),j),k.b9K(824,A.bn),A.T,k.Od(),A.X,B.E(k.aar(3),1)],u),A.al,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adZ(824),A.aB,k.aXU(824),k.b9J(824),A.T,k.Od(),A.af,B.E(k.bcN(3,300,B.x(B.a([k.qW(300,300),k.Xf(300)],h),A.l,j,A.e,A.j,0,A.p),360),1)],h),A.al,j,A.e,A.j,0,A.p)
case 5:w=k.w7(824,!0)
v=x.p
u=B.x(B.a([k.acN(440,A.bn,3,62,26),k.aD7(440,A.bn,2,20),A.b5,k.asW(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTC,new B.D(A.hW,k.qW(364,h.e===D.Tg?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Xs(2,21),1)],v),A.al,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.adZ(824),A.af,k.c1r(824,2,70),k.cCX(824,21),A.T,k.Od(),A.af,B.E(k.bcN(3,340,B.as(k.qW(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 7:w=k.w7(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFa(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qz(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1D(h.Q,24,1.15,A.cH,A.V),j,j,j))
v.push(A.b5)
if(k.gaCr())v.push(k.aCq(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.j,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.all,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acN(570,A.bn,3,62,28),k.cCY(570,A.bn,20),A.T,k.asW(!1),A.T,B.as(k.qW(570,330),j,j,j),k.Xf(570),A.X,B.E(k.aS9(2,!1,17),1)],t),A.al,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.al,j,A.e,A.j,0,A.p)
case 8:w=k.w7(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qz(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.an,k.Pi(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bDM,j,j,j),k.b9K(824,A.bn),A.X,B.as(k.qW(824,310),j,j,j),k.Xf(824),A.T,k.Od(),A.X,B.E(k.aar(3),1)],s),A.al,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w7(824,!0),A.aQ,new B.an(A.a0,j,A.ab,A.t,B.a([k.qW(824,430),B.ap(18,k.cdn(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBH(824,3,66),k.b9O(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ay6(),A.aB,B.E(k.Xs(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w7(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afy(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b6M(410,4,58,28),k.aDa(410,6,20),A.b5],w),A.E,j,A.e,A.j,0,A.p),j),V.aTD,k.qW(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aB,k.ay6(),A.aQ,B.E(k.Xs(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 12:w=k.w7(824,!0)
v=k.qW(824,420)
u=B.hQi(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.H,10)],x.V)
r=x.p
return B.x(B.a([w,A.aQ,new B.an(A.a0,j,A.ab,A.t,B.a([v,B.ap(22,B.fz(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdq(i,30,A.c,1,A.cH,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bFK,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBH(824,3,62),k.b9O(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_4(A.lP),A.aB,B.E(k.Xs(2,18),1)],r),A.al,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w7(824,!0)
u=h.w
t=x.p
w=B.a([k.qW(824,380),B.ap(j,k.afy(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBH(824,2,60)
r=k.cD9(824,2)
p=k.ay6()
o=B.E(k.aS9(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aQ,new B.an(A.a0,j,A.ab,A.t,w,j),A.aQ,s,r,A.X,p,A.aB,o,A.af,B.q(j,B.A(B.a([B.by(B.l(14),k.ug(150,104),A.aq),A.oW,B.E(B.x(B.a([k.afy("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.T,B.d(q,j,2,A.a2,j,j,j,k.azq(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eJ,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.w7(824,!0),A.bz,k.acN(824,A.bn,3,62,30),k.aD7(824,A.bn,2,22),A.X,k.asW(!1),A.X,B.as(k.qW(824,330),j,j,j),k.aR4(824,A.bn),A.aQ,B.E(k.bL6(2,40,21),1)],x.p),A.al,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c2(s,new B.p(s,s,s,s,s,new B.a8(A.aA,A.aE,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bj),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b3(s,s,s,new C.bb4(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bGg,B.x(B.a([B.E(t.cku(),1),A.T,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fO,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1B(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qz(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iT,A.j,0,s,s)],o),A.al,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.du(!0,B.b3(s,s,s,new C.bu6(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fR(q,A.A,s,s,A.cj,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n4,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azs(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.du(!0,B.d3(B.q(s,B.A(o,A.l,s,A.e,A.P,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bHq,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jl(new B.an(A.a0,s,A.ab,A.t,n,s),A.t,s),s)}}
C.beC.prototype={
jt(d){return C.hu9(d)},
k9(d){return!1}}
C.beB.prototype={
a5(d,e){var w,v=C.hu9(e)
$.Q()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwD.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e5()
o.d_(3)
w=$.Q()
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
u.E(new B.bv())
return u},
k9(d){return!1}}
C.bb4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e5()
o.d_(7)
$.Q()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.bY(A.A,0.5,A.x,p,0,B.a([A.Yn.j(0.13),A.L],v),p,p).aK(0,B.bX(r,q)))
d.N(r,q,w)}w.sav(p)},
aD(d){return!1}}
C.bu6.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cs,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dz,A.bY)
s.e5()
w=d.c
J.bo(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.X2.prototype={
S(){return new C.aFV()}}
C.aFV.prototype={
Y(){var w=this
w.a4()
B.fI2(w.a.c,null).bG(new C.eu5(),x.g7).bG(new C.eu6(w),x.a)
w.a.toString},
gaPR(){var w=D.azo[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazt(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPR()
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
a_U(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_U=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.etT(r))
t=4
q=r.gazt()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Q()
n=new B.q2(new B.pD())
m=B.zx(n,null)
i=B.K()
i.z=A.hg
m.q2(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o1().xE(J.hjo(p),J.hjo(o)),$async$a_U)
case 7:l=e
w=8
return B.b(l.hs(A.hi),$async$a_U)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.w1(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.etU(r))
r.c.L(x.q).f.T(D.fiS)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_U,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.lo,s,s,s,new C.eu_(d),s,s,s,s,s,s),p=x.p
q=B.eH(B.a([B.bN(!1,D.fY6,s,s,!0,s,s,s,t.y||r==null?s:t.gcdr(),s,s)],p),s,s,!0,!0,A.C_,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h17,s,s,s,1,s,!0)
if(r==null)p=A.m2
else{w=B.E(new B.D(A.bQ,B.as(new B.fH(t.gaPR(),B.cs(new C.eu0(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iN,B.jv(s,s,s,B.d(D.azo[u].a,s,s,s,s,s,s,A.ab_,s,s,s),s,new C.eu1(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZZ,B.E(B.kX(s,s,s,6,1,new C.eu2(t),t.f),1),D.bZy],p),A.l,s,A.e,A.j,0,s,s),D.fVm,A.an,B.bN(!1,D.fV4,s,s,!0,s,s,s,new C.eu3(t,d),s,s)],p),A.l,s,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Zb,s,s,s,s,s,s,D.bD8,s,s,s)],p),A.l,s,A.e,A.j,0,A.p)}return B.c4(q,A.C_,p,s,!1,!1,s,s)}}
C.be9.prototype={
a5(d,e){var w
$.Q()
w=B.K()
w.z=A.cj
return d.q2(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a19.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHj(new B.au(A.aw,w),new B.au(new B.ba("NGMY",A.b6,A.aR),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6e),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oY.prototype={}
C.aHj.prototype={
gaY2(){var w,v,u=this
if(u.p1)w=new B.wh(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a4()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.f34(w))},
t(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
Zs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rj().jo(0,"assets/images/ngmy_logo.png"),$async$Zs)
case 7:q=e
p=J.eT(J.w1(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFV(new B.qc(p,1),o),$async$Zs)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f1X(r,p))
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
return B.i($async$Zs,v)},
QC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(92,1800,A.eO),$async$QC)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$QC)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFV(new B.qc(p,1),n),$async$QC)
case 9:if(r.c==null){w=1
break}r.m(new C.f2k(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QC,v)},
b68(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a0=w.bb=w.bn=w.y2=0
w.b8=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c8=w.bH=w.bm=0
w.cP=w.c5=!1},
aZP(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCA(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dsw)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCA(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCA(C.he1(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCA(C.he1(1-a0*0.5,n,n,n),w)}return a1?C.bCA(C.he1(-1,255,255,255),w):w},
aDg(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xC(u,v,w)
this.dx.py(new C.f2u(t),!0)
return t},
b8I(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
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
return C.ikj(d,k,v,a0,j,e.gaY2(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAN(){return this.b8I(null)},
DO(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmT(),$async$DO)
case 3:w=4
return B.b(B.bP(A.eR,null,x.H),$async$DO)
case 4:w=5
return B.b($.aV.gmT(),$async$DO)
case 5:s=$.aV.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qm)){u=null
w=1
break}w=7
return B.b(r.me(1080/r.gZ(0).a),$async$DO)
case 7:w=6
return B.b(e.hs(A.hi),$async$DO)
case 6:q=e
u=q==null?null:J.eT(A.dO.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DO,v)},
abm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1G(q))
t=4
w=7
return B.b(q.DO(),$async$abm)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aN(p)
n=C.Cq(null,null,null,null,D.oP,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8I(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1H(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abm,v)},
B5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1E(q))
t=4
w=7
return B.b($.aV.gmT(),$async$B5)
case 7:w=8
return B.b(B.bP(A.mW,null,x.H),$async$B5)
case 8:w=9
return B.b($.aV.gmT(),$async$B5)
case 9:k=$.aV.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qm))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.me(1080/p.gZ(0).a),$async$B5)
case 10:o=e
w=11
return B.b(o.hs(A.hi),$async$B5)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.ahy(J.eT(A.dO.gaU(n)),"ngmy_quote.png","image/png"),$async$B5)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.T(B.b4(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1F(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B5,v)},
cnD(){var w=this.p4
w.toString
return B.cs(new C.f2d(this,w))},
b1K(d,e){var w=null
return B.bt(w,w,w,w,w,D.ftP,w,w,!0,new B.b6(4,B.l(16),Q.vR),w,w,w,w,w,D.uc,!0,w,w,w,w,new B.b6(4,B.l(16),D.b5d),w,w,w,w,w,w,w,w,Ad.EL,e,w,w,w,w,w,w,w,D.fzp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yB(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aWl,w,w,w))
return new B.D(H.alb,B.A(u,A.l,w,A.e,A.j,0,w,w),w)},
b1J(d,e){var w=null,v=B.l(18),u=B.L(A.bA,A.r,1)
return B.q(w,B.aI(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.js),A.f,w,w,new B.p(D.uc,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wf(d){return this.b1J(d,A.bF)},
oy(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uZ:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.L(f?A.L:A.bA,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jZ,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.jZ,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.P,0,r,r),r,r,A.b1,new B.p(w,r,u,v,r,p,A.n),A.h2,r,r,r,r,A.GL,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
aht(d,e,f){return this.oy(d,null,e,f)},
azx(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eL:A.bA,s=x.p
v=B.a([B.cT(w,d,w,w,A.b1,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h2,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1N(d,e,f,g,h,i){return this.azx(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aV9,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.erZ,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2q(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.Vv,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0S,u,u,u))
s=B.A(s,A.l,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.abb(w).cPy(A.b8,A.bA,A.b8.j(0.2),A.c,D.f8t,4)
return new B.D(A.yC,B.x(B.a([s,B.YU(B.kX(u,u,u,g,f,new C.f2r(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.j,0,A.p),u)},
ajw(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ajV(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dl:B.b0(u)
r=d==u
q=r?A.c:A.aU
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSO:o
n.push(B.az(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f2t(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bV(A.bG,n,A.bs,o,10,10)},
bPf(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6e
else{v=x.a8
w=B.C(new B.Y(D.a6e,new C.f1w(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1K("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f1x(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.abh,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1K("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f1y(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yB("DESIGNS",A.uJ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d1p[q]
r.push(new B.D(A.iN,o.aht(p,o.x===p,new C.f1z(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.cd(B.A(r,A.l,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hP(n,new C.f1A(o,w),w.length,n,n,A.aL,new C.f1B(),!1),n),A.T,o.b1J(B.x(B.a([B.iQ(A.b8,n,n,A.ag,!0,new C.f1C(o),n,D.fM1,n,D.fIc,o.k3),B.iQ(A.b8,n,n,A.ag,!0,new C.f1D(o),n,n,n,D.fFm,o.k2)],s),A.l,n,A.e,A.j,0,A.p),A.alL)],s),A.E,n,A.e,A.j,0,A.p)},
cJK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDg()
if(a7.length===0)return a5.wf(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KM,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ch.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cD(m,new C.f2U(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f30(a5)
j=new C.f32()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KM,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eL:A.bA
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bH(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.On,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f2V(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wf(B.bV(A.bG,o,A.vL,a6,6,6))
i=B.a([a5.oy("All words",K.aqh,!1,new C.f2W(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aht("Sentence "+a3,!1,new C.f2X(a5,a7,v,a2)))
a2=a3}}i.push(a5.aht("Clear picks",!1,new C.f2Y(a5)))
i=B.bV(A.bG,i,A.bs,a6,8,8)
g=a5.yB("SIZE OF THE PICKED WORDS",D.apI)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dyF[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f2Z(e,k)
f.push(a5.aht(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bV(A.bG,f,A.bs,a6,8,8),A.X,a5.oy("Make every word normal",A.k8,!1,new C.f3_(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cEG(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bIG,B.d(A.d.fe(D.aB9,new C.f2D(q)).b,p,p,p,p,p,p,D.fs8,p,p,p)],o),A.l,p,A.e,A.j,0,p,p),m=B.cs(new C.f2E(q)),l=q.yB("HIGHLIGHT BEHIND THE WORDS",A.a2N),k=q.p1?-1:q.k4
k=q.ajV(k,new C.f2F(q),D.dcP)
w=q.p1
v=w?A.c:A.aU
n=B.a([n,A.X,m,l,B.bV(A.bG,B.a([k,B.az(p,B.q(p,D.bVN,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.flw,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2I(q),p,p,p,p,p,p,!1,A.a4)],o),A.vL,p,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KM,p,p,p)],o)
if(q.gaY2()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajw("Colour",l,0,360,new C.f2J(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajw("Shade",k,0.15,0.9,new C.f2K(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f2L(q),1,""+A.i.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.wf(B.x(m,A.l,p,A.e,A.j,0,A.p))],o))}n.push(q.yB("LOOK",A.wQ))
m=B.a([q.oy("Bold",I.apG,q.fy,new C.f2M(q)),q.oy("Italic",I.apH,q.go,new C.f2N(q))],o)
for(u=0;u<3;++u){l={}
k=D.d2G[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uZ:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.bA,1,A.r,-1)
m.push(B.az(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bH(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2O(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bV(A.bG,m,A.vL,p,8,8))
n.push(q.yB("COLOUR",A.mi))
n.push(q.ajV(q.fx,new C.f2P(q),D.doS))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KM,p,p,p))
n.push(q.yB("SIZE AND PLACE",A.HK))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f2G(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.wf(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f2H(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cnE(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bD.j(0.12)],x.O)
return B.az(q,B.q(q,B.x(B.a([B.q(q,D.c0s,A.f,q,q,D.b8b,q,62,q,q,q,q,q,62),A.aB,D.fJt,A.an,D.fOk],x.p),A.l,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(D.uc,q,v,w,q,new B.a8(A.a7,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bEl,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1M(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.by(B.l(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.c_,!1,q,!1,q,q),q),A.aq),A.bd,B.E(B.x(B.a([D.fJ_,A.T,B.bV(A.bG,B.a([r.oy("Change",A.jL,!1,r.gb1M()),r.oy("Remove",A.ei,!1,new C.f2h(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.j,0,A.p),1)],w),A.l,q,A.e,A.j,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dl_[t]
u.push(r.oy(s.b,s.a,r.at===t,new C.f2i(r,t)))}u=B.bV(A.bG,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5A(p)
break
case 1:s=r.c4v()
break
case 2:s=r.bL5()
break
case 3:s=r.bRy()
break
default:s=r.bNc()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.X,new B.bM(A.a7,q,q,r.oy("Reset the whole picture",A.k8,!1,new C.f2j(r)),q)],w),A.E,q,A.e,A.j,0,A.p)},
c5A(d){var w=this,v=x.p
return B.x(B.a([B.bV(A.bG,B.a([w.oy("Auto enhance",E.a2r,!1,new C.f29(w)),w.oy("Make words easy to read",A.pz,!1,new C.f2a(w))],v),A.bs,null,8,8),A.aB,B.cs(new C.f2b(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c4v(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f1O(o),0,A.i.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f1P(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f1Q(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f1R(o),0,""+A.i.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f1S(o),0,""+A.i.V(t*100))
s=o.a0
s=o.kB("Darken",s,0,0.85,new C.f1T(o),0,""+A.i.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f1U(o),0,""+A.i.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f1V(o),0,""+A.i.V(q*100))
p=o.aR
return o.wf(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f1W(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.j,0,A.p))},
bL5(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f19(s),1,""+A.i.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f1a(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f1b(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.wf(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f1c(s),0,""+A.i.V(u)+"\xb0"),new B.bM(A.a7,r,r,s.oy("Negative",D.bQN,s.y1,new C.f1d(s)),r)],t),A.l,r,A.e,A.j,0,A.p))
v=s.yB("COLOUR WASH",A.Po)
w=s.b8
q=B.a([null],x.Z)
A.d.v(q,D.azN)
t=B.a([u,v,s.ajV(w,new C.f1e(s),q),A.T],t)
if(s.b8!=null){q=s.b6
t.push(s.wf(s.ajw("Wash strength",q,0,0.9,new C.f1f(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bRy(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f1I(r),0,A.o.u(A.i.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f1J(r),0,""+A.i.V(w*100))
v=r.aG
u=x.p
v=r.wf(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f1K(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.j,0,A.p))
w=r.yB("LIGHT LEAK",D.bQv)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azN,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajV(q,new C.f1L(r),t),A.T],u)
if(r.bf!=null){q=r.bK
u.push(r.wf(r.ajw("Leak strength",q,0,1,new C.f1M(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bNc(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f1j(s),1,""+A.i.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f1k(s),0,""+A.i.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f1l(s),0,""+A.i.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wf(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f1m(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.j,0,A.p)),A.X,B.bV(A.bG,B.a([s.oy("Turn 90\xb0",H.aqK,!1,new C.f1n(s)),s.oy("Flip sideways",A.CO,s.c5,new C.f1o(s)),s.oy("Flip upside down",A.CO,s.cP,new C.f1p(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c8i(){var w=null,v=B.l(22),u=B.L(A.bA,A.r,1)
return B.q(w,B.x(B.a([D.f8F,A.X,D.fL1,A.aB,B.az(w,B.q(A.A,D.f8T,A.f,w,w,new B.p(w,w,w,B.l(16),w,G.uZ,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2c(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(D.uc,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c5n(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f24(p),m=x.p,l=B.A(B.a([D.bIM,p.oy("Reset",A.k8,!1,new C.f20(p))],m),A.l,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KM,o,o,o),j=p.yB("SHAPE",A.aqH),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dl[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1N(n.$2(t,p.cy),62,u.b,s===t,new C.f21(v,p),62))}}i=B.bV(A.bG,i,A.bs,o,8,8)
v=p.yB("RING",A.pq)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.De[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1N(n.$2(p.cx,t),62,r.b,q===t,new C.f22(s,p),62))}u=B.bV(A.bG,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.wf(p.kB("Size",s,0.12,0.4,new C.f23(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b4M(d){return new B.a5(null,d,new B.fH(0.5625,B.cs(new C.f2n(this)),null),null)},
cDU(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.L(A.bA,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uZ:q
t=new B.aN(14,14)
s=D.dng[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bc,B.az(A.c2,B.cT(q,B.x(B.a([r,A.cU,new B.qL(A.e4,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.P,0,A.p),q,q,A.b1,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bzQ,q,q,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f2w(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bBZ,A.me,q,q,q)},
aSI(){var w,v,u=this,t=null,s=u.cDU()
switch(u.as){case 0:w=u.bPf()
break
case 1:w=u.cJK()
break
case 2:w=u.cEG()
break
case 3:w=u.cnE()
break
case 4:w=u.c5n()
break
default:w=u.c8i()
break}v=x.p
return B.by(A.tS,B.e9(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bD9,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.j,0,A.p),D.Zb,!0),A.aq)},
aOL(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdS(),p=B.l(16)
q=B.E(B.az(r,B.q(r,D.f94,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aU,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbR6()
w=B.l(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.ff4)
else t.push(D.bUS)
t.push(A.ae)
t.push(D.bLg)
return B.q(r,B.A(B.a([q,A.au,B.E(B.az(r,B.q(r,B.A(t,A.l,r,A.bb,A.j,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.uZ,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.j,0,r,r),A.f,r,r,D.b7i,r,r,r,r,Av.a0e,r,r,r)},
b1L(){var w=null
return new B.D(U.a0N,B.A(B.a([B.aH(w,w,w,w,A.n5,w,w,w,new C.f1N(this),w,w,w,w,w,w),D.h00,A.b5,D.c2O],x.p),A.l,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.C_,B.bm(!0,B.cs(new C.f33(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhL.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e5()
n.d_(7)
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
C.rX.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mt.prototype={}
C.Ag.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.ob.prototype={}
C.wB.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a98.prototype={}
C.asO.prototype={}
C.a1G.prototype={
S(){return new C.aJf(new B.au(A.aw,$.aw()),B.k9(!0,null,!0,!0,null,null,!1),D.dPd,B.a([],x.s),B.ez([D.Jl],x.Q))}}
C.aJf.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.t()
this.a3()},
a1f(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1f=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CJ(90,700,700,A.eO),$async$a1f)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a1f)
case 8:p=e
if(r.c!=null)r.m(new C.f9r(r,p,q))
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
return B.i($async$a1f,v)},
a1i(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1i=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aJR(78,n,1100,1100),$async$a1i)
case 7:q=e
if(J.cr(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1i)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cP.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f9s(r,p))
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
return B.i($async$a1i,v)},
b6L(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cI.aN(A.d.gan(d.split(","))),A.A,u,u,A.cj,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.by_},
c5u(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.czj(C.fP4(w,this.b6L(d),f),g)},
adI(d,e,f,g,h){var w=null,v=new C.f9p(f,e),u=new C.f9q(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.L(p?A.bA:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ab,A.f,B.a([B.as(B.X(f?A.zm:A.Pc,A.bW,w,w,w,26),w,w,w),D.eye],x.p),w),w)
else p=this.c5u(g,v.$1(h),u.$1(h),34)
return B.aI(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bUz],x.p),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.n_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f9o(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZV(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.by(B.l(8),B.fR(A.cI.aN(A.d.gan(h.split(","))),A.A,p,p,A.cj,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.L(n?A.bA:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.er,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KS,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.PX,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aI(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.l,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.ku,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9L(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9L=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fSz(),$async$a9L)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f97(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f98(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9L,v)},
afI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afI=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f9a(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f9b(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f9c(r))
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
return B.b(C.fNN(q,r.cx,j,new C.b3n(r.z,r.Q,r.as,r.at),new C.f9d(r),i,m,p,k),$async$afI)
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
n=B.ab(e)
if(r.c!=null)r.m(new C.f9e(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eQ,g).w
g=B.aF(d,A.c1,g).w
w=B.as(B.q(h,h,A.f,h,h,new B.p(A.aU,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.q(h,D.bXU,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.H,24)],v),D.c6V,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9F(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,H.PX,h,h,h,i.ax?h:new C.f9G(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG_()
v=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.H,10)],v)
s.push(B.h6(B.aI(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wE:A.hJ,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wX,A.a6),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b4L),h,h,h,h,h,h,h,h,Y.ED,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iN,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,h,D.aVL,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f9H(i)
s=i.aZV(A.lm,q,r,i.gco5(),s)
r=i.z
r=B.E(i.adI(new C.f9J(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.an,B.A(B.a([r,A.bm,B.E(i.adI(new C.f9K(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f9L(i)
s=i.aZV(A.uE,r,p,i.gcod(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adI(new C.f9M(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fPE,A.ax,D.fSz,A.bz,u,A.T,D.fQX,A.aB,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.an,B.A(B.a([p,A.bm,B.E(i.adI(new C.f9N(i),r,!0,n,o),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.an,D.fUv],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.L(D.bpt,A.r,1)
w=C.ai3(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bM(A.a7,h,h,B.q(h,B.A(B.a([D.bZ1,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fy0,h,h,h),B.aP(!1,h,!0,D.esf,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f9O(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.P,0,h,h),A.f,h,h,new B.p(D.bhl,h,u,v,h,h,A.n),h,h,h,h,D.bBD,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fG4)
o.push(A.T)
w=B.a([],t)
for(m=0;m<6;++m){l=D.df0[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bA,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.bz(1,A.bc,new B.D(A.jo,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b1,new B.p(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9P(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.j,0,h,h))
o.push(A.bz)
o.push(D.fZf)
o.push(A.T)
o.push(B.cs(new C.f9Q(i)))
o.push(A.bz)
o.push(D.fNG)
o.push(A.T)
w=B.a([i.b9H("auto","Let AI choose",A.ef,A.S3)],t)
for(v=x.O,m=0;m<11;++m){j=D.x0[m]
u=j.d
w.push(i.b9H(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bV(A.bG,w,A.bs,h,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.l(16)
u=B.L(i.r?A.be.j(0.5):A.bA,A.r,1)
o.push(B.q(h,B.iQ(h,A.be,h,h,h,new C.f9I(i),D.bU1,D.fYu,h,D.fIt,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aUW,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gcdW()
v=B.ft(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.feV:A.HX
o.push(new B.a5(h,54,B.lS(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nf,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bm(!0,B.cd(B.x(o,A.al,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.wq,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aer,h,h,h,h,h,h,h,h),h)},
bSQ(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f9f(this,p,d)
if(d===D.E0)return new C.aFM(p,o,q)
w=B.l(16)
v=p?E.wX:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bA,A.r,1)
s=B.X(p?A.ec:C.hXk(d),A.c,q,q,q,20)
r=C.hXl(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.ax,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e4)],x.p),A.l,q,A.bb,A.j,0,A.p),q,q,A.b1,new B.p(u,q,t,w,q,v,A.n),A.h2,q,64,q,q,A.hI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9H(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ac:A.bA
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a8(A.a7,A.aa,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,Z.AF,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,v,v),v,v,A.b1,new B.p(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.amW,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9u(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1F.prototype={
S(){return new C.aJe(new B.au(A.aw,$.aw()))}}
C.aJe.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
afJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afJ=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f90(r))
w=1
break}B.eY()
r.m(new C.f91(r))
t=4
q=C.ioR(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ioB(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f92(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hdG()
f=$.Dp.h(0,k.a)
o=f==null||J.cr(f)?null:J.fs(f)
if(o==null){r.m(new C.f93(r))
w=1
break}n=C.ioz(o,r.a.c)
C.iov(r.a.c.a)
$.hcV=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hgF(j)
h=C.hgG(r.a.c)
e=C.hgH(r.a.c)
w=7
return B.b(C.bEP(k,r.a.c.a,j,h,new C.f94(r),i,e,a0),$async$afJ)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f95(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eQ,i).w
i=B.aF(d,A.c1,i).w
w=B.as(B.q(j,j,A.f,j,j,new B.p(A.aU,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.ar0,A.f,j,j,D.b6Y,j,34,j,j,j,j,j,34),A.au,D.bJq],v),A.l,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaX,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),Aw.adT),j,j,j,j,j,j,j,j,Y.ED,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,D.aVL,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.db6[q]
o=B.d(p,j,j,j,j,j,j,AC.Vp,j,j,j)
n=A.c.j(0.06)
r.push(B.n3(j,n,o,j,k.e?j:new C.f96(k,p),j,j,Q.vR,j))}w=B.a([w,A.aB,u,A.an,t,A.aB,s,A.X,B.bV(A.bG,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUW,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gcdX()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.be.j(0.5),A.eq.j(0.5)],x.O):D.cIM
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.esb:D.bYB
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aI(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eJ(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.h7,j,j,j)],v),A.l,j,A.bb,A.j,0,j,j),j,new B.p(j,j,j,r,o,new B.a8(A.a7,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bm(!0,B.cd(B.x(w,A.al,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.wq,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aer,j,j,j,j,j,j,j,j),j)}}
C.b3n.prototype={}
C.aFM.prototype={
S(){return new C.bmy(null,null)}}
C.bmy.prototype={
gazy(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qx,null,1,null,v)
w.cO(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazy().t()
this.bzL()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c6(this.gazy(),new C.epM(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bk2.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dhv[t]
q=r.a*v
r=r.b*u
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.ys.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.atl.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a03.prototype={
S(){return new C.aDh()}}
C.aDh.prototype={
gajS(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aig(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAO(){var w=this.e
return w===$?this.e=C.hgF(this.a.c).q(0,D.E0):w},
a9y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9y=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dsB(s))
u=3
r=A.d.fe(D.x0,new C.dsC(s))
q=B.d2(C.hgF(s.a.c),x.Q)
l=q
J.h9(l,D.E0)
p=l
if(s.gAO())J.c5(p,D.E0)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAO()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hgG(i.c)
g=C.hgH(s.a.c)
w=6
return B.b(C.bEP(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9y)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aig(q,s.gajS())
f=q==null?null:q.b
n=f==null?s.gajS():f
if(!J.z(n,r.a)&&!s.gAO())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dsD(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.c:A.U,k=m?A.aT:A.am,j=m?A.U:A.c,i=B.l(28),h=B.L(m?A.bA:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bH,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dsG(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.x0[w]
u=o.gajS()
t=o.f?n:new C.dsH(o,v)
f.push(new C.bve(v,u===v.a,t,n))}f=B.kW(1.25,f,3,10,10,n,A.dX,!0)
u=B.l(18)
t=o.gAO()?D.c9G:n
if(o.gAO())s=n
else s=m?A.bq:A.bO
r=B.X(A.ef,o.gAO()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAO()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAO()?A.ac:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAO()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b91(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dsI(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alD,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fyk,n,n,n)],g))
f=B.cd(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.GT,n,n,A.ah)
u=o.f?n:o.gbEZ()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bEP,e,n),new B.dl(1,A.cm,f,n),new B.D(A.GS,new B.a5(1/0,50,B.bJ(B.eJ(B.as(o.f?A.tB:D.fQ9,n,n,n),n,new B.p(n,n,n,s,n,D.c8e,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.P,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.ut,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bve.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.H,12)],x.V):w
v=B.a([new B.bM(A.ly,w,w,B.X(v.c,A.ac,w,w,w,18),w),new B.bM(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fyh,w,w,w),w)],x.p)
if(q)v.push(D.b1V)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ab,A.t,v,w),w,w,A.b1,new B.p(w,w,p,t,s,new B.a8(A.aA,A.aE,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.epJ.prototype={
aHm(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xd(d,e){return this.aHm(0,e,null)}}
C.aNU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3j.prototype={
B(d){var w,v,u=null,t=C.hfu(this.c)
if(t==null)w=D.bwr
else{w=B.aF(d,u,x.w).w.cP0(D.bB8,D.fe4)
v=this.d
w=B.qb(new B.du(!v,B.aps(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bo8(w,u),u),A.f,A.dB)}}
C.bo8.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dui[w]
u=new B.aN(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.asZ,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dvH[w]
u=new B.aN(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.asZ,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c2(t,new B.p(t,t,t,B.l(64),D.d_W,D.c6C,A.n),A.bj),0,0,0))
s.push(B.bR(3,B.c2(t,new B.p(A.w,t,t,B.l(61),t,t,A.n),A.bj),3,3,3))
s.push(B.bR(13,B.by(B.l(51),B.e9(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ap(t,B.as(B.q(D.b26,B.q(t,t,A.f,t,t,D.b7g,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.du(!0,B.by(B.l(51),D.by5,A.aq),t),13,13,13))
s.push(B.ap(22,new B.du(!0,B.as(B.q(t,t,A.f,t,t,new B.p(A.ac,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ab,A.f,s,t)}}
C.lv.prototype={
pW(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bk,j,2,"Your Presentation Title",0,0,"",D.n9,D.cW,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bk,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dm,D.cW,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rY(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fL,t.l(),3,"",0,0,"",D.ct,D.fi,0.3,0.35,0.72)],s),C.cE(),D.n8,"","","Welcome",D.dm)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Agenda",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
w=C.cE()
w=C.rY(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bk,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vf,D.cW,0.8,0.1,0.26)],s),C.cE(),D.n8,"","","Agenda",D.dm)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Main Idea",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
f=C.cE()
f=C.rY(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bk,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ct,D.cW,0.8,0.1,0.26)],s),C.cE(),D.n8,"","","Key Point 1",D.dm)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bk,j,2,"Compare & Contrast",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
r=C.cE()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bk,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.08,0.24)
q=C.cE()
q=C.rY(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bk,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.52,0.24)],s),C.cE(),D.n8,"","","Key Point 2",D.dm)
r=C.cE()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bk,j,2,h,0,0,"",D.dm,D.cW,0.8,0.1,0.32)
e=C.cE()
p=C.Cq(l,l,l,l,D.DX,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rY(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bk,j,2,"Questions?",0,0,"",D.ct,D.cW,0.7,0.15,0.58)],s),C.cE(),D.n8,"","",h,D.dm)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fv.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fm.prototype={
gaNm(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ai3(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4G(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fm(v,u,t,d==null?w.d:d)},
Ge(d){return this.a4G(null,d,null,null)},
aG0(d){return this.a4G(null,null,null,d)},
cOZ(d,e){return this.a4G(d,e,null,null)},
bf1(d){return this.a4G(d,null,null,null)},
bf7(d){return this.a4G(null,null,d,null)}}
C.On.prototype={
S(){return new C.blU(new B.eA(0,$.aw()),null,null)}}
C.blU.prototype={
Y(){var w,v=this
v.a4()
w=v.q_(new C.e3e(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.aw()
w.P$=0
this.bze()},
B(d){var w=C.ai3(this.a.c.a)
if(w==null)w=A.d.gH(D.Ig)
return B.cs(new C.e3d(this,w,C.hw1(this.a.c.d)))}}
C.btL.prototype={
B(d){return B.og(A.Xn,this.e,new C.f8d(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bgQ.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVn(d,e,v)
break
case"confetti":w.bLz(d,e,v)
break
case"crown":w.bNd(d,e,v)
break
case"aurora":w.bG3(d,e,v)
break
case"champagne":w.bJr(d,e,v)
break
case"diamonds":w.bPo(d,e,v)
break
case"starburst":w.cBw(d,e,v)
break
case"balloons":w.bGh(d,e,v)
break
case"galaxy":w.bUK(d,e,v)
break
case"redcarpet":w.csq(d,e,v)
break
case"coins":w.bKY(d,e,v)
break
case"lanterns":w.c4_(d,e,v)
break
case"hearts":w.c1v(d,e,v)
break
case"petals":w.cnv(d,e,v)
break
case"butterflies":w.bIp(d,e,v)
break
case"neon":w.c82(d,e,v)
break
case"disco":w.bPz(d,e,v)
break
case"sunrise":w.cDb(d,e,v)
break
case"pearls":w.cmz(d,e,v)
break
case"snow":w.cBd(d,e,v)
break
case"laurel":w.c45(d,e,v)
break
case"ribbons":w.cuW(d,e,v)
break
case"kente":w.c3O(d,e,v)
break
case"trophy":w.cGV(d,e,v)
break
case"shooting":w.cyY(d,e,v)
break
case"bokeh":w.bGD(d,e,v)
break
case"orbits":w.cka(d,e,v)
break
case"flowers":w.bTY(d,e,v)
break
case"music":w.c7L(d,e,v)
break
case"mandala":w.c6a(d,e,v)
break
case"sparklers":w.cBk(d,e,v)
break
case"city":w.bKe(d,e,v)
break}},
t8(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Q()
v=B.K()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.p7
u=new B.aG(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c7(w,t,w+f,t))
u.E(new B.c7(w,t,w,t+f))
u.E(new B.c7(w,t,w-f,t))
u.E(new B.c7(w,t,w,s))
u.E(new B.bv())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.t8(d,new B.o(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVn(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.av],w),B.a([A.ir,A.bD],w),B.a([A.eF,A.aH],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bh(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kt(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.a7,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.t_(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bu
a1=B.kt(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.Q()
a6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.Q()
b6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bu
b6.a=A.p7
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.t8(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLz(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.Q(),d=B.K()
d.sav(new B.a8(A.aA,A.aE,A.x,D.dox,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.Rv[A.o.D(A.i.bh(C.cZ(u,7)*5),0,4)]
J.bo(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
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
m.ab()}e=$.Q()
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.H,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bM,30)},
bNd(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.Q()
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bjs],v),a4,a4).aK(0,B.bX(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aG($.Q().r,A.ai,a4,a4,B.a([],s))
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
o.sav(new B.a8(A.b7,A.b9,A.x,D.dna,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eIx,D.eBG,D.eSd],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=A.ac.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.hF.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xO(j),u=B.a([],x.X),p=new B.rx(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jH(y.M));--h
p.iy()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.b=A.a9
a2.c=m
a2.e=A.dQ
a2.r=A.bM.gp(0)
a8.af(new B.aG(o,e,a4,new B.cu([new B.BT(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.t8(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bM,40)},
bG3(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f3U,D.f3C,D.f3v,D.f4T]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.Q()
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
i.ab()}}$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p7
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p7
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.wc.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.p7
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJr(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.Q(),e=B.K()
e.sav(new B.bY(A.A,0.5,A.x,n,0,B.a([A.i6.j(0.25+0.1*j),D.Zn],x.O),n,n).aK(0,B.bX(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
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
u.ab()}g=$.Q()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=j
f.r=D.Rv[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.t8(d,new B.o(s,p),o*2.4,A.bM,A.i.D(p/i,0,1))
continue}$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u9.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPo(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.ld,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bo(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.Q()
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
a2=new B.bv()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.a8(A.aA,A.aE,A.x,D.diD,a6,a6).aK(0,B.bs(A.H,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t8(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBw(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.Q()
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bM.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.i.bh(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bxq.aA(0,k)*(0.5+0.5*C.cZ(t,u)))
this.t8(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.Rv[A.o.D(A.i.bh(C.cZ(t,4)*5),0,4)],r)}},
bGh(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAd[A.o.F(p,6)]
i=$.Q()
h=B.a([],t)
g=new B.aG(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.bY(D.b29,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.aA3,a1).aK(0,a0))
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
i=new B.bv()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.bo(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.H,t,u)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=D.aAd[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f41,D.f3I,D.f3O],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bX(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bM,A.eL,i)
f.toString
e=C.cZ(k,3)
$.Q()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.p7
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.Q()
a8=B.K()
a8.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.u9.j(0.55),D.aj7],t),a3,a3).aK(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.kt(a2,a2.a2(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kt(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.t_(a2,a4)))
a7.c=a6*0.005
a7.d=A.bu
b0.ah(a5,a4,a7)}},
csq(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.Q()
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,b4,0,B.a([A.u9.j(0.28),D.aj7],w),b4,b4).aK(0,B.bX(new B.o(r,v),u)))
p.a=A.p7
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.ek:A.es)
a8=$.Q()
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
a8=new B.bv()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a8.sav(new B.a8(A.a7,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b0.r=A.i6.gp(0)
b0.c=o
b0.d=A.bu
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aG($.Q().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bv())
v=B.K()
v.sav(D.c88.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t8(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bM,0.3+0.7*((p+1)/2))}},
bKY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.i.D(n,0.12,1))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.sav(new B.a8(A.aA,A.aE,A.x,o>0?D.dzb:D.cOD,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.bu3.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t8(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bM,110)},
c4_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.Q()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.sav(new B.bY(A.A,0.5,A.x,e,0,B.a([As.yp.j(0.45*l),D.ahG],v),e,e).aK(0,B.bX(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
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
k=new B.bv()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.ar(D.bjH,A.c,0.2*l)
j.toString
k.sav(new B.a8(A.b7,A.b9,A.x,B.a([D.bp3,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1v(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bo(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.Q()
l=B.a([],t)
i=new B.aG(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kS(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kS(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bv()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d8O[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.bY(A.tP,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a54,d).aK(0,B.bX(A.H,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.ir,130)},
cnv(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bo(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.Q()
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
n=new B.bv()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=(q&1)===0?D.cIL:D.dk0
n.sav(new B.a8(A.a7,A.aa,A.x,m,h,h).aK(0,B.bX(A.H,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bM,140)},
bIp(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bM,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bo(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bo(v.save())
v.scale(a2*n,1)
a3=$.Q()
a4=B.a([],u)
a5=new B.aG(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kS(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kS(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bv()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.sav(new B.a8(A.a7,A.aa,A.x,h?D.djJ:D.dmE,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BT.gp(0)
b1.af(a5,a3)
v.restore()}$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.bti.gp(0)
p.c=q*0.1
p.d=A.bu
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c82(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=v
r.r=D.aBm[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bn(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aBm[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adH,q)
d.am(k,l)}},
bPz(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bM,A.o6,A.dj][A.o.F(q,4)]
k=C.cZ(q,3)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.75).gp(0)
j.a=A.p7
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.Q()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.db.gp(0)
a2.N(v,u,t)
t=a2.c
J.bo(t.save())
a0=new B.aG(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jR(B.bX(v,u)))
a2.mR(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=B.ar(A.br,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t8(a2,v.a2(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDb(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.i.D(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.Q()
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.bM.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.Q()
f=B.K()
f.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([D.beY.j(0.6),D.ahG],x.O),k,k).aK(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.ez5.aK(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.hF,180)},
cmz(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.Q()
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.Q()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.cz,A.jf,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.sav(new B.bY(Ap.Ba,0.5,A.x,h,0,D.dqe,h,h).aK(0,B.bX(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cBd(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bu
J.bo(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.H,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eF,200)},
c45(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cL(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bo(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.sav(D.c7W.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.Q()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bk0.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t8(a3,w.a2(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bM,210)},
cuW(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i6,A.hF],a4),B.a([A.pf,A.ir],a4),B.a([A.aF,A.eL],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bQ<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.Q()
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.ds(j,t),m=new B.bQ(m,m.gI(0),s);m.C();){i=m.d
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
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=a5[n]
i=l[0]
m.sav(new B.a8(A.a7,A.aa,A.x,B.a([i,l[1],i],a4),A.nK,new B.mM(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3O(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
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
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3=Math.abs(a0)
a2.r=D.a57[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=D.a57[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.t8(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a57[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGV(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=u
p.r=A.bM.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aG($.Q().r,A.ai,null,null,B.a([],x.v))
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
m.E(new B.bv())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cB(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a8(A.a7,A.aa,A.x,D.dsZ,A.aAl,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.t8(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLA(a4,a5,a6,60)},
bLA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bo(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.H,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=D.Rv[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cyY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.i.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.i.bh((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.bM],s),null,null).aK(0,B.t_(j,l)))
k.c=r
k.d=A.bu
d.ah(j,l,k)
this.t8(d,l,q,A.c,1-n)}},
bGD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.i.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=A.o.F(s,5)
n.r=D.aD9[m].j(o).gp(0)
n.a=A.p7
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aD9[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
cka(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bo(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.H,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=u
o.r=A.bM.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.hF.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.i6.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bM,270)},
bTY(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.i.F(a6+C.cZ(o,2)*4,4)/4
j=A.e_.aA(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dgB[A.o.F(o,5)]
J.bo(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.b7,A.b9,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.i6.gp(0)
a4.N(A.H,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.hF,280)},
c7L(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bX(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=u
j.r=D.azp[n].j((1-m)*0.8).gp(0)
a4.cB(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.azp[A.o.F(h,4)]
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(0)
J.bo(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.H,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c6a(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.o(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bo(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.Q()
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
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=u
d.r=B.ar(A.bM,A.o6,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.hF.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.Q()
a5=B.K()
a5.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.i6.j(0.25),D.Zn],x.O),a3,a3).aK(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bM,300)},
cBk(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.r=A.br.gp(0)
g.c=q
g.d=A.bu
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.bY(A.A,0.5,A.x,null,0,B.a([A.hF,A.i6.j(0.6),D.Zn],o),null,null).aK(0,B.bX(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.i.F(b3+C.cZ(f,2)*e,e)/e
a0=A.i.bh((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a7.r=B.ar(A.hF,A.av,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bu
a7.a=A.p7
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bM,310)},
bKe(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVn(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.sav(D.c8T.aK(0,k))
a7.ar(k,j)
i=A.i.bh(n/r)
h=A.i.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.Q()
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=A.bM.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b1d.prototype={
B(d){var w,v=null,u=new C.cf2(),t=new C.cf4(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.as6,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cf3(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ig[w]))
return B.bV(A.bG,s,A.bs,v,12,10)}}
C.a_B.prototype={
S(){return new C.aBE()}}
C.aBE.prototype={
gwg(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1Q(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aR),$.aw())}return v},
gazz(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNm()
v=$.aw()
u.f!==$&&B.bD()
t=u.f=new B.au(new B.ba(w,A.b6,A.aR),v)}return t},
t(){var w=this.gb1Q(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gazz()
w.U$=v
w.P$=0
this.a3()},
a04(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a04=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CJ(90,700,700,A.eO),$async$a04)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a04)
case 8:p=e
o=q.b.toLowerCase()
n=J.aj3(o,".png")?"image/png":"image/jpeg"
r.m(new C.dhP(r,n,p))
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
return B.i($async$a04,v)},
b1P(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ai3(p.gwg().a)
if(n==null)n=A.d.gH(D.Ig)
w=p.gwg()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ab,A.t,B.a([B.bR(0,new C.On(p.gwg(),!1,!0,new B.bG(w.a+v,x.W)),0,0,0),B.ap(o,B.IG(A.n5,new C.dhU(d),B.o1(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IG(A.aqZ,new C.dhV(p),B.o1(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVK,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1Q(0),o,o,o,o,o,2,p.b1P("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhW(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.h_,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i6.j(0.6),A.r,1)
if(p.gwg().d.length===0)q=D.bWg
else{q=C.hw1(p.gwg().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fR(q,A.A,o,o,A.cj,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.az(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdY(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwg().d.length!==0)r.push(B.aH(o,o,o,o,H.PX,o,o,o,new C.dhX(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.l,o,A.e,A.j,0,o,o),A.T,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazz(),o,o,o,o,o,2,p.b1P("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhY(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bV9,D.h_9,new C.dhZ(p,d),B.bp(A.aC,o,o,o,A.w,o,A.cp,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.P,0,A.p),A.f,o,o,D.b7s,o,o,o,o,A.GO,o,o,o)],u),A.l,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a_W.prototype={
S(){return new C.bim(new B.au(A.aw,$.aw()))}}
C.bim.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.S(d).ax.a===A.J,m=n?A.c:A.U,l=n?A.aT:A.am,k=B.aF(d,A.c1,x.w).w,j=n?A.U:A.c,i=B.l(28),h=B.L(n?A.bA:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cy,l,o,o,o,o),o,o,o,new C.doD(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d_o[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pW,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doE(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hH,u,o),new B.D0(A.bG,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.T)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bq:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bJ(A.aWK,o,new C.doF(this),o)],g),A.l,o,A.e,A.j,0,o,o))
e.push(A.T)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dl(1,A.cm,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.ut,A.a0r,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhH.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e5()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.Q()
u=B.K()
u.y=A.H6
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
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bho.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a1(0,0,0+a3.a,0+a3.b),A.jM),e=this.b,d=Math.sin(e*2),a0=$.Q(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mf
a2.am(f,a1)
a1=x.v
a0=new B.aG(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.j8(f))
v=new B.TV(new B.rx(B.xO(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iy()
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
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.d=A.bu
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aG(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aG(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aG(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iy()
h=u[d].Dg(o).a
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=w.gp(0)
l.y=Ad.os
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bqv.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e5()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gao8()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.Q()
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
k=new B.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alC(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bcd.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e5()
e.d_(this.c*7+3)
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
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bbR.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e5()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.Q()
i=B.a([],o)
h=new B.aG(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=s
j.d=A.bu
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxB.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Q()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.bY(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d7v,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.buz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bh(f)*7,q=0;q<7;++q){p=new B.e5()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=k.gp(0)
j.c=1.4
j.d=A.bu
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
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btH.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.Q()
v=B.K()
v.a=A.p7
v.sav(new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.bgJ.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.Q()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bu
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uz
r=new C.dhw(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.yg.prototype={}
C.JH.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asN.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vj.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eQ.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"decoration",C.ib9(v.z))
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
C.m1.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eQ>")
n=B.C(new B.N(n,new C.ckA(),m),m.k("ak.E"))
return C.rY(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.ckB(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbdh(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gTa(){if(!C.kM(this.w))return!1
var w=this.gbdh()
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
q=B.U(r).k("N<1,m1>")
r=B.C(new B.N(r,new C.ckp(),q),q.k("ak.E"))
return C.Cq(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.C(new B.N(w,new C.ckq(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k_.prototype={}
C.b3m.prototype={
B(d){return B.cs(new C.ckv(this))}}
C.apN.prototype={
S(){return new C.blC(null,null)}}
C.blC.prototype={
gb1R(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fH,null,1,null,v)
w.cO(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gb1R().t()
this.byX()},
B(d){return B.c6(this.gb1R(),new C.dQ9(),this.a.c)}}
C.aN7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aey.prototype={
QF(d,e,f,g){return this.bTB(d,e,f,g)},
bTB(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QF)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.T(B.b4(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.el,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QF,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),r=B.as(B.q(v,v,A.f,v,v,new B.p(A.aU,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dk,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d8)
n.push(B.A(B.a([B.E(new C.aeP(A.i_,"Download",A.c5,new C.eC5(w,d),!0,v),1),A.au,B.E(new C.aeP(A.uO,"Share",A.bl,new C.eC6(w,d),!1,v),1),A.au,B.E(new C.aeP(A.hL,"Safari",A.b2,new C.eC7(w,d),!1,v),1)],m),A.l,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eC8(d),v,v))
return B.bm(!0,new B.D(A.qC,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GW,v,v,1/0)],m),A.l,v,A.e,A.P,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeP.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aI(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eJ(B.x(B.a([p,A.T,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bHg,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3k.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.arU(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.cdZ().ama(1.35)
s=B.axq(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEz(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bl,h,h,h,h,2,D.c3D,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bG("slide_tf_"+g.a,x.W),h,A.xj,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AG,A.ao,h,A.Vd,h,h)
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
w=n?t.cOM(B.b0(g.Q).j(0.45),A.cH):t
p=g.as
l=m?1:h
k=m?A.eP:A.EB
p=B.d(f,new B.bG("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V4:s
$.Q()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dQ
j.r=A.as.gp(0)
j=i.cuZ(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ab,A.t,B.a([j,i.cuX(k,t,l?A.V4:s)],x.p),h)}else w=i.cuY(p,t,g.k2?A.V4:s,m)
v=new B.mO(w,new B.bG("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c2,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c2c()
case 3:return i.cmy()
case 2:return B.b3(h,h,h,new C.b3h(g,h),A.fN)
case 5:g=g.r
return new C.b3j(g,!i.e&&i.z==null,h)}},
cdZ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k4
j=A.cH
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahE,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.H,6*v),new B.cU(l,A.H,16*v),new B.cU(l.j(0.8),A.H,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bi
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.nd
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
e=B.a([new B.cU(A.ba,new B.o(-3*v,0),0),new B.cU(A.ay,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cF,A.H,8*v),new B.cU(A.ay,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A3.y2
break
case"ice":v=o.d
e=B.a([new B.cU(A.aH,A.H,10*v),new B.cU(A.cz,A.H,22*v)],x.r)
k=A.V
w=A.eF
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.H,3*h)],x.r)
w=l
k=A.k4
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d9D[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Q()
f=B.K()
v=o.d
f.sav(D.c6k.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.Ma,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Q()
f=B.K()
v=o.d
f.sav(D.c6E.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.H,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cD
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
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
aBA(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.faY.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ckt(h)
v=r.k2?C.io8(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eP:A.EB
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Z4(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cuZ(d,e,f,g){return this.aBA(d,e,f,!1,g)},
cuX(d,e,f){return this.aBA(d,e,f,!1,null)},
cuY(d,e,f,g){return this.aBA(d,e,f,g,null)},
bEz(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a7}},
c2c(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bL
return B.as(B.X(s.b===D.ls?A.HS:A.CA,A.aD,t,t,t,32),t,t,t)}w=u.bHD(r)
if(s.b===D.ls){s=B.l(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cu,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQw(r,!0)
return C.fP4(s.go,v,s.id)}return w},
aQw(d,e){var w,v,u,t
try{w=C.iot(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cs(new C.cks(this,w,v,e))
return u}catch(t){return D.af5}},
bHD(d){return this.aQw(d,!1)},
cmy(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcS
return C.ioL(v,w.db,w.dx)}}
C.b3h.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q(),g=B.K(),f=this.b
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
case 2:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bv())
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
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
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
r.ab()}}r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break}},
aD(d){return d.b!==this.b}}
C.aKE.prototype={
S(){return new C.bx5(null,null)}}
C.bx5.prototype={
Y(){var w,v=this
v.a4()
w=B.bl(null,A.hG,null,1,null,v)
w.cO(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBd()},
aQH(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.l(8)
return B.c2(B.as(B.d(d,w,w,w,w,w,w,A.dk,w,w,w),w,w,w),new B.p(w,w,w,u,w,new B.a8(A.a7,A.aa,A.x,v,w,w),A.n),A.bj)},
bEN(){var w,v=this,u=null,t=v.aQH("Slide A",A.bl),s=v.aQH("Slide B",A.b2)
if(v.a.c===D.ct)return new B.an(A.a0,u,A.b3,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.fgN(v,s,t),u)},
B(d){return this.bEN()}}
C.aLl.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wj.prototype={
S(){return new C.blQ(null,null)}}
C.blQ.prototype={
Y(){var w,v,u=this
u.a4()
w=B.bl(null,A.C7,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ct){w.sp(0,1)
return}B.bP(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e0Y(u),x.a)},
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
else B.bP(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e0X(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzd()},
B(d){var w,v=this.a
if(v.c.dy===D.ct||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.e0W(this),v.d)}}
C.JG.prototype={
B(d){return B.cs(new C.ckl(this))}}
C.aBj.prototype={
S(){return new C.bg9()}}
C.bg9.prototype={
Y(){this.a4()
if(this.a.c!==D.ct)B.bP(A.NL,new C.deJ(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ct)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wj(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bk,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.c6,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bG("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bk,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ab,A.t,B.a([w,B.ap(32,new C.Wj(t,B.q(p,D.fLc,A.f,p,p,new B.p(s,p,B.L(A.aU,A.r,1),r,p,p,A.n),p,p,p,p,A.jn,p,p,1/0),!0,1,new B.bG("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c2(n,D.b81,A.bj)}}
C.a8R.prototype={
S(){return new C.bmw(null,null)}}
C.bmw.prototype={
gb2s(){var w=this.a
if(w.e)w=D.fba.q(0,w.c)||D.aSN.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a4()
if(v.gb2s()){w=C.imK(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cO(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzJ()},
B(d){var w,v=this,u=v.d
if(!v.gb2s()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eps(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1g.prototype={
B(d){var w=null
return B.as(C.b3l(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bk,4280172719,2,"Aa",0,0,this.c,D.ct,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhm.prototype={
jt(d){return C.a3I(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3I(k,l),i=e.gdA(),h=new C.f5I()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUl.aK(0,l))
d.af(j,w)
k=C.a3I(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btO.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.flt.aK(0,l))
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
k.sav(D.flr.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3I(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.ba.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pg.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.flm.aK(0,l))
d.af(j,w)
w=C.a3I(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgJ.gp(0)
d.af(w,v)
k=C.a3I(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjK.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUl.aK(0,l))
d.af(j,k)
for(k=B.xO(j),w=B.a([],x.X),k=new B.rx(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jH(y.M));--r
k.iy()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iy()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iy()
n=w[r].Dg(q*o/p).a
m=D.d6L[A.o.F(o,4)]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.flv.aK(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fls.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3I(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.oa.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btE.prototype={
a5(d,e){d.Gt(C.a3I(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aNn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a99.prototype={}
C.OR.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGb(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUx(){return this.r},
gUy(){return this.w},
gMg(){return this.x}}
C.aGb.prototype={
Y(){var w,v=this
v.a4()
$.aV.c1$.push(v)
C.fU6()
$.hE5=new C.eIj(v)
w=B.bl(null,A.C4,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.J1()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P9(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J1()}},
jl(d){if(d===A.Bc||d===A.tR||d===A.tQ||d===A.q3)this.uc()},
t(){var w,v,u,t=this
$.aV.hV(t)
w=t.at
if(w!=null)w.a1(0)
t.uc()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.bzW()},
gacH(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPs(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adc(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTa())return!1
return!0},
ky(){return this.adc(null)},
ak9(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fjI)},
qP(){if(!this.ky())return!1
this.ak9()
return!0},
at1(d){var w,v,u,t,s,r=this
if(r.adc(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hDb(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ar(){return this.at1(null)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asP(k),$async$J1)
case 3:j=e
w=4
return B.b(C.arm(k),$async$J1)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h9c(j,t.c5d())
w=t.gacH()?5:7
break
case 5:r=t.gPs()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1u(r),$async$J1)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eEH())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eEI())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zh(m==null?"":m)!=null)continue
C.fUi(n,s)
p=!0}t.m(new C.eEJ(t,s))
if(p||s.length>J.ad(j))t.uc()
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
c5d(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kM(w)&&w!==q}if(w)p.push(r)
return p},
ctq(d){var w,v=this,u=d.w
if(!C.kM(u)||u==="hati_kiapo_uongozi")return
v.abw(d)
w=A.d.bj(v.d,new C.eGh(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnu(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kM(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctq(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i4>")
s=B.C(new B.cM(new B.Y(s,new C.eG5(),w.k("Y<1>")),new C.eG6(),v),v.k("M.E"))
return s},
P9(d){return this.bU1(d)},
uc(){return this.P9(null)},
bU1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnu()
w=3
return B.b(C.Xc(d==null?t.a.c:d,s),$async$P9)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at1(r)?4:5
break
case 4:w=6
return B.b(C.a8n(r),$async$P9)
case 6:q=r.x
p=A.a.i(q==null?t.gPs():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eE4())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P9,v)},
pJ(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kM(u.w))===!0?A.h2:A.lH
v.at=B.cy(w,new C.eHp(v))},
b1S(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agl(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a8(v.ay)},
cHc(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agl(w.e.hQ(),w.f,w.r))
w.m(new C.eIf(w,v.pop()))
w.pJ()},
csv(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agl(w.e.hQ(),w.f,w.r))
w.m(new C.eGf(w,v.pop()))
w.pJ()},
oE(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eI2(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yx(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yc(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KP(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d2(new B.cM(new B.Y(w,new C.eI3(),v.k("Y<1>")),new C.eI4(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cW)continue
p=n.a
m=w.c3(0,p,new C.eI5(n))
s.c3(0,p,new C.eI6())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ik(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eDt(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPs()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oE()
u.pJ()},
akv(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yx(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kM(v.w))===!0
if(u){C.imO(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.imP(t,w.d+w.f*0.5)}}s.Ik()
s.oE()
s.pJ()
if(u&&s.c!=null)s.m(new C.eIg())},
cIk(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ik()
w.oE()
w.pJ()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqT(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ikO(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2r(v)
t=q.c2q(v)
s=B.b0(v.e)
r=v.f
return new C.k_(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hXw(o)},
c2r(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.D(A.o.aq(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.U},
c2q(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
ags(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacH()){w.c.L(x.q).f.T(D.fij)
return}w.abw(d)
w.b39(C.bEQ(d))
return}if(C.cld(v)){w.abw(d)
w.b39(d)
return}w.m(new C.eFo(w,d))},
atA(){var w,v,u,t,s,r,q=this
q.a3d(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kM(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eDr(q))
if(r&&q.c!=null){u.toString
q.Kl(u,s)}return}q.uc()
q.m(new C.eDs(q))},
b38(d){this.abw(d)
this.a0H(d,!0)},
abw(d){if(!C.kM(d.w))return
C.fUi(d,this.d)},
a0H(d,e){return this.cjm(d,e)},
b39(d){return this.a0H(d,!1)},
cjm(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0H=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEQ(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPs():r)
t.dy.W(0,q.toLowerCase())
C.arn(t.a.c,q)}r=s}else r=d
w=C.cld(r.w)?3:4
break
case 3:w=5
return B.b(t.abx(r),$async$a0H)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eFL(l))
o=l.a.hQ()
n=C.kM(o.w)&&C.io3(o)
t.m(new C.eFM(t,o,p))
if(n){m=A.d.bj(t.d,new C.eFN(o))
if(m>=0){t.d[m]=o.hQ()
t.uc()}}if(!t.adc(l.a))t.ZI()
r=!1
if(t.c!=null)if(!t.adc(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at1(r)&&C.fQf(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fiU)
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
abx(d){return this.bS1(d)},
bS1(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lz(r.c,A.Al),$async$abx)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.le(!1,r,s.c,s.d,null,A.Al,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abx,v)},
os(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$os=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cld(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckD(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$os,v)},
ag9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFn(),s,null,!0,!0,x.H),$async$ag9)
case 3:if(t.c==null){w=1
break}t.atA()
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
ag8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFk(),s,null,!0,!0,x.H),$async$ag8)
case 3:if(t.c==null){w=1
break}t.m(new C.eFl())
t.atA()
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
ZI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZI)
case 3:r=e
if(B.k4(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$ZI)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fgU)
case 1:return B.h(u,v)}})
return B.i($async$ZI,v)},
Kl(d,e){return this.ctQ(d,e)},
ctQ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kl=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahF(s,t.gF0(),t.gF_(),!0,e,t.d),$async$Kl)
case 9:w=4
break
case 6:w=10
return B.b(C.ahG(s,t.gF0(),t.gF_(),!0,e,t.d),$async$Kl)
case 10:w=4
break
case 7:w=11
return B.b(C.ahH(s,t.gF0(),t.gF_(),!0,e,t.d),$async$Kl)
case 11:w=4
break
case 8:w=12
return B.b(C.ahI(s,t.gF0(),t.gF_(),!0,e,t.d),$async$Kl)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kl,v)},
c43(){var w,v,u,t,s=this
if(!s.gacH()){s.c.L(x.q).f.T(D.fh6)
return}w=s.gPs()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahE(u,t,v,new C.eED(s),new C.eEE(s),w)},
agt(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dU,null,new C.eFu(u),s,!0,!0,!1,A.lT,!1,!1,x.N),$async$agt)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahI(s,u.gF0(),u.gF_(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahF(s,u.gF0(),u.gF_(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahG(s,u.gF0(),u.gF_(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahH(s,u.gF0(),u.gF_(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c43()
return B.h(null,v)}})
return B.i($async$agt,v)},
cis(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1S()
w=C.cE()
v=C.Cq(t,t,t,t,D.DX,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eFv(u,v))},
aaU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itd(s),$async$aaU)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eDv())
t.dc(new C.eDw(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b4(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaU,v)},
aiu(d,e,f,g){var w=null,v=g?A.dl:A.bO,u=B.L(g?A.aU:A.cu,A.r,1)
return B.h6(B.az(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0G(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qP()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFG(),q),q.k("M.E"))}o=s!=null&&s.b===D.lS?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fj4)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFH(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0G)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0G,v)},
agK(){return this.cjl()},
cjl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.it_(s,t.f+1,o),$async$agK)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jz(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eFJ(q))
t.dc(new C.eFK(p,t,o,q,r))
t.c.L(x.q).f.T(D.fjt)
case 1:return B.h(u,v)}})
return B.i($async$agK,v)},
agR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()||!t.Ar()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eG0(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fgF)
w=1
break}o=new B.N(p,new C.eG1(),B.U(p).k("N<1,F>")).f1(0,new C.eG2())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aR),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eG3(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agR)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eG4())
case 1:return B.h(u,v)}})
return B.i($async$agR,v)},
agw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agw=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hFk(s,new C.Fm(r,q,p,o==null?"":o)),$async$agw)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eFw(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ai3(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b4(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
abq(){return this.bRj()},
bRj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itc(s,t.f+1,l),$async$abq)
case 3:r=e
q=$.hcV
$.hcV=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eDM())
t.c.L(x.q).f.T(D.fgw)
w=1
break}if(!q){s=r.CW
s=C.hE3(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eDN(t,l,r))
t.c.L(x.q).f.T(D.fjY)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jz(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eDO(p))
o=s.length
t.dc(new C.eDP(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b4(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abq,v)},
aSV(d,e){if(e){this.ahj()
return}this.cis(d,!1)},
bMO(){return this.aSV(null,!1)},
ahj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c4,null,new C.eGa(t),r,!0,!0,!0,A.pP,!1,!1,x.N),$async$ahj)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGb(t,C.ikN(s).pW()))
case 1:return B.h(u,v)}})
return B.i($async$ahj,v)},
dc(d){var w=this
if(w.qP())return
w.Ik()
w.b1S()
w.m(d)
w.KP()
w.oE()
w.pJ()},
a9p(){this.dc(new C.eCq(this,D.n8))},
aUp(){var w=this.gdB()
if(w==null)return
this.dc(new C.eDK(this,w))},
aTv(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eDI(this))},
b63(d,e){if(this.e==null||d===e)return
this.dc(new C.eGj(this,d,e))},
OG(d){return this.bOP(d)},
bOP(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPs():s)
w=5
return B.b(C.arl(t.a.c,r),$async$OG)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asR(s)
w=6
return B.b(C.b3p(t.a.c,s),$async$OG)
case 6:if(t.c==null){w=1
break}t.m(new C.eDE(t,d))
w=7
return B.b(t.uc(),$async$OG)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OG,v)},
ctN(d,e){var w=this
if(d.z){w.ak9()
return}w.m(new C.eGi(w,d,e))
w.pJ()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xx(d){return this.ch.c3(0,d.a,new C.eDu(d))},
avt(d){return this.CW.c3(0,d.a,new C.eE5())},
a3d(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yx(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.ap$.d.c
if(u!=null)u.jr()},
b9B(){return this.a3d(!0)},
a39(d){var w,v,u=this
if(u.qP())return
if(!u.Ar())return
w=u.Yx(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xx(w).sb1(0,"")}u.m(new C.eI0(u,d))
$.aV.x1$.push(new C.eI1(u,d,w))},
ba9(d){var w=this
if(d.b===D.cW&&!w.ky()&&w.Ar()){w.a39(d.a)
return}w.aC_(d.a)},
aC_(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yx(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eHq(r,s,d))
if(s||d==null){t=$.aV.ap$.d.c
if(t!=null)t.jr()}},
aP0(){this.dc(new C.eCr(this))},
pr(d){return this.bDQ(d)},
bDQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.os(),$async$pr)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCo(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pr,v)},
WA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hw(78,1920),$async$WA)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCe(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WA,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(T.DB(t.a.c),$async$Wu)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fkx)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eCb(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wu)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eCc(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
aur(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eDG(v))){w.c.L(x.q).f.T(D.fjx)
return}if(w.w===v)w.a3d(!0)
w.dc(new C.eDH(w,v))},
bL3(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPJ(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eCT(w,v,d,e,t,u))},
bFq(d){return this.aPJ(d,null)},
a9F(d){return this.bFy(d)},
bFy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9Y.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.os(),$async$a9F)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bFq(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPJ(r.j(0.88),r)}w=1
break}t.dc(new C.eCY(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9F,v)},
a9E(d){return this.bFw(d)},
bFw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9E=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.os(),$async$a9E)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCW(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9E,v)},
bFg(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eCS(this,w,d))},
a0M(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.it8(r),$async$a0M)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oE()
t.m(new C.eFV(t,s))
w=4
return B.b(t.uc(),$async$a0M)
case 4:if(t.c!=null)t.ags(s)
case 1:return B.h(u,v)}})
return B.i($async$a0M,v)},
abh(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3d(!0)
t.oE()
s=t.c
s.toString
w=3
return B.b(C.Sg(s,q),$async$abh)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b4(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abh,v)},
E9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oE()
t=4
w=7
return B.b(C.aS3(m),$async$E9)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRv(o,q,m.b),$async$E9)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E9,v)},
FQ(d,e){return this.cGA(d,e)},
cGA(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FQ=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qP()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3d(!0)
t.oE()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eI9(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.ilL(q?"":s)
o=C.hCY(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eIa(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czF(n.length,o,s),$async$FQ)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ilF(h.a)
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
return B.b(t.czE(n,o),$async$FQ)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eIb(s))
s=h.a.b
w=11
return B.b(t.czC(k.b,s),$async$FQ)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ilK(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fkJ)
w=1
break}w=12
return B.b(t.czD(j.a,s,o,j.c),$async$FQ)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eIc(h,t,i))
t.pJ()
case 1:return B.h(u,v)}})
return B.i($async$FQ,v)},
czF(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHG(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czE(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHF(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czC(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHz(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czD(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHB(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acL(){var w=null
return B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acM(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ar(d,A.c4,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dv,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a8(A.aA,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ex,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fvO,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aXL(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VP,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXO(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a8(A.aA,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aI(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ng,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.zc,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEz(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1l(d,e,f,g,h,i){return this.aXO(d,e,f,!1,g,h,i)},
awN(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dk,w,w,w),A.bH,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0Q,w,w,w)},
aXN(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nX,w,w,w),w,new C.eEy(d,f),v)},
aXM(d,e){return this.aXN(d,e,null)},
KG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pz(l,s.c,s.d),$async$KG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eF(l,new C.eHr());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.ab3(l.charCodeAt(0)==0?l:l,r.b),$async$KG)
case 4:l=t.a
w=5
return B.b(B.py(l.c,l.d),$async$KG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KG,v)},
IG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pz(q,s.c,s.d),$async$IG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.ab3(A.Y.aw(r.aj(),null),r.b+".json"),$async$IG)
case 4:q=t.a
w=5
return B.b(B.py(q.c,q.d),$async$IG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
b9k(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oE()
u.uc()
w=u.c
w.toString
v=B.ec(new C.eI_(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.os(),$async$HU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fUv(),$async$HU)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ioF(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.as,null,new C.eCj(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HU)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eCk(t,s))
w=1
break}if(p==="split")t.dc(new C.eCl(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HU,v)},
O0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}w=3
return B.b(t.os(),$async$O0)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aS2(s,null,null),$async$O0)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCp(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
b5Q(d){var w=this.e
if(w==null||!C.kM(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aR5(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aS2(s,t==null?null:B.b0(t),u)},
a9n(d){return this.bDH(d)},
bDH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ar()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkZ)
w=1
break}w=3
return B.b(t.aR5(),$async$a9n)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCg(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9n,v)},
ai2(d){return this.csy(d)},
csy(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ar()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fk5)
w=1
break}w=3
return B.b(t.aR5(),$async$ai2)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eGg(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai2,v)},
cf7(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFA()}},
cFA(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eI7(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1G(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eEC(this,r,u.d))},
c6w(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fR0(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6x(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
if(!this.Ar())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fR0(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
O8(d){return this.bFY(d)},
bFY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ar()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fiV)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arp(p),$async$O8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fjz)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8n(r)
w=1
break}t.m(new C.eD1(t,d,o))
t.oE()
$.aV.x1$.push(new C.eD2(t))
case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
Wy(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.os(),$async$Wy)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFw(),$async$Wy)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCd(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wy,v)},
OV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.os(),$async$OV)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fUm(r),$async$OV)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eE3(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OV,v)},
jj(d){this.dc(new C.eCm(this,d))},
qE(d){return this.bF9(d)},
bF9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qP()){w=1
break}m=!D.aSQ.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.os(),$async$qE)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HU()
w=1
break A
case"sign_paper":t.O0()
w=1
break A
case"hd_photo":t.Wy()
w=1
break A
case"sharpen":t.OV()
w=1
break A
case"print":t.E9()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.dc(new C.eCv(s))
w=1
break A
case"text_box":t.aP0()
w=1
break A
case"picture":t.WA()
w=1
break A
case"present":t.b9k()
w=1
break A
case"new_slide":t.a9p()
w=1
break A
case"export_json":t.IG()
w=1
break A
case"outline_share":t.KG()
w=1
break A
case"flashcard_tool":t.vP(D.Jg)
w=1
break A
case"quiz_tool":t.vP(D.Jh)
w=1
break A
case"worksheet_tool":t.vP(D.Ji)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.dc(new C.eCw(t,s))
w=1
break A
case"delete_el":t.aur()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eCx(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eCI(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.dc(new C.eCL(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.dc(new C.eCM(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.dc(new C.eCN(s))
w=1
break A
case"grayscale":case"brighten":t.OV()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.dc(new C.eCO(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.dc(new C.eCP(s))
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
case"arrow":t.pr(D.DZ)
w=1
break A
case"line":case"divider":t.pr(D.fL)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eF(q,new C.eCQ()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eCR(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jj(C.j6(A.K,!1,t.gqT().d.l(),A.aG,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.n9,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jj(C.j6(A.K,!1,t.gqT().e.l(),A.aG,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.dm,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j6(A.bn,!0,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vf,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j6(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.ve,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j6(A.K,!1,4279310375,A.aG,24,A.cH,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dm,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j6(A.bn,!1,4284773515,A.aG,14,A.bt,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vf,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j6(A.e1,!1,4279310375,A.aG,14,A.bt,A.a8,0.08,C.cE(),C.bFy(),0,D.dm,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j6(A.e1,!1,4279310375,A.aG,13,A.bt,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.dm,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eCy(t))
w=1
break A
case"footer_bar":t.dc(new C.eCz(t))
w=1
break A
case"highlight":t.dc(new C.eCA(t))
w=1
break A
case"redact":t.dc(new C.eCB(t))
w=1
break A
case"callout":t.dc(new C.eCC(t))
w=1
break A
case"checkboxes":t.jj(C.j6(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dm,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dm,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eCD(t))
w=1
break A
case"letter":t.jj(C.j6(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.82,C.cE(),C.bFy()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j6(A.bn,!1,4279310375,A.aG,22,A.bt,A.V,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vf,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dm,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.dm,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cE(),"Initials: ______",0,D.dm,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j6(A.K,!1,4278556265,A.aG,28,A.bt,A.u,0.12,C.cE(),"APPROVED",0,D.n9,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j6(A.K,!1,4292617766,A.aG,28,A.bt,A.u,0.12,C.cE(),"DRAFT",0,D.dm,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j6(A.K,!1,871318596,A.aG,36,A.bt,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dm,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eCE(t))
w=1
break A
case"progress":t.dc(new C.eCF(t))
w=1
break A
case"stars":t.jj(C.j6(A.K,!1,4279310375,A.aG,36,A.bt,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r0,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j6(A.K,!1,4279310375,A.aG,32,A.bt,A.V,0.14,C.cE(),"y = mx + b",0,D.dm,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j6(A.K,!1,4279310375,A.aG,18,A.bt,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ve,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eCG(t))
w=1
break A
case"compare":t.dc(new C.eCH(t))
w=1
break A
case"link_text":t.jj(C.j6(A.bn,!1,4280640491,A.nd,16,A.bt,A.a8,0.1,C.cE(),"https://example.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j6(A.bn,!1,4280640491,A.aG,18,A.bt,A.a8,0.1,C.cE(),"name@email.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eCJ(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eCK(t,r))
w=1
break A
case"invoice":t.jj(C.j6(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j6(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bFy()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j6(A.bn,!1,4279310375,A.aG,17,A.bt,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j6(A.bn,!1,4279310375,A.aG,15,A.bt,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dm,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qE,v)},
cz6(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fb6.q(0,this.z)},
cz5(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bb2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ct,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.bA
u=B.L(u,A.r,o&&e?2:1)
t=C.iou(d)
s=o?12:18
r=o?A.I:A.cT
if(o)if(e)q=f
else q=g?A.ac:A.am
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PO,A.f,p,p,D.Fk,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.az(p,new B.an(A.a0,p,A.ab,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRA(d){var w,v=null,u=this.kc()
if(u==null)return A.bL
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aD:A.am,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.So,new C.eE2(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.j,0,v,v)},
vP(d){return this.bDP(d)},
bDP(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSK.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.os(),$async$vP)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCn(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f9q
w=h.e
if(w==null)return h.bHJ()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.S(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eQ,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c4:D.bj6
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTa()}else j=!1
if(j)k.push(new C.a8S(h.a.c,!1,h.e.gbdh(),h.gcf4(),g))
else if(s&&h.e!=null&&!h.ky()&&C.cld(h.e.w)){j=h.a
k.push(new C.a8S(j.c,j.d,g,h.gcgd(),g))}if(s)k.push(h.bRv(w,t,r))
if(s&&h.ky()){w=t?A.fV:A.kO
j=B.l(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bYa,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fV,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.j,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yF,A.iw,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7u(t,r))
if(w&&h.ky())k.push(h.cGB(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c7p(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8K(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8K(t,!1),g))
i.push(B.E(new B.bM(A.b7,g,g,h.bJ3(v,t,!s||p),g),1))
if(h.cz6(r)&&u&&s&&!h.ky())i.push(h.ceR(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.j,0,A.p),1))
if(q&&!h.ky()&&h.cz5(!1))j.push(new B.a5(240,g,h.bUq(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c7q(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ab,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHJ(){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=B.S(o).ax.a===A.J
o=w?A.c4:A.bO
v=q.c
v.toString
v=B.aF(v,A.dJ,x.w).w
u=q.a.e
t=q.ce_(A.bl,A.qJ,new C.eD5(q),q.gcip(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
s=x.p
r=B.A(B.a([B.E(q.aOJ(A.bl,A.hY,"Blank Presentation",new C.eD6(q)),1),A.au,B.E(q.aOJ(A.b2,A.uT,"Class Template",new C.eD7(q)),1)],s),A.l,p,A.e,A.j,0,p,p)
t=B.a([t,A.bz,r,A.nc,B.d("YOUR PRESENTATIONS",p,p,p,p,p,p,B.m(p,p,w?A.aD:A.am,p,p,p,p,p,p,p,p,11,p,p,A.u,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),A.af],s)
s=q.d
if(s.length===0)t.push(q.bEC(w))
else{s=new B.i1(s,B.U(s).k("i1<1>"))
A.d.v(t,s.gdO(s).dM(0,new C.eD8(q,w),x.l))}return B.c4(p,o,B.bm(!1,B.cl(t,p,p,new B.R(18,v.r.b+12,18,u),p,p,A.ah,!1),!0,!1,A.ag,!0,!1),p,!1,!1,p,p)},
bPC(){this.m(new C.eDJ(this))
var w=this.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900){w=$.aV.ap$.d.c
if(w!=null)w.jr()}},
agL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.S(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFU(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agL,v)},
Bs(d,e){return this.czs(d,e)},
czs(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bs=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hK(D.YT,!0,"Dismiss",j,new C.eHs(),new C.eHt(d,e),A.iL,!0,x.N),$async$Bs)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ak9()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTa()){r.ak9()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aS3(d),$async$Bs)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRv(j,q,d.b),$async$Bs)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FQ(d,!1),$async$Bs)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hK(D.YT,!0,"Dismiss",j,new C.eHu(),new C.eHv(d),A.a3,!0,x.y),$async$Bs)
case 20:if(g===!0)r.OG(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahN("Rename presentation",d.b),$async$Bs)
case 24:l=g
if(l!=null)r.ctN(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eHw(r,k))
r.pJ()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bs,v)},
b3N(d,e){var w=null
return B.bN(!1,D.fVN,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lK,w,w,w,w,w,A.kz,w,w))},
bEC(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eCs(this,d),null)},
bNI(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eDx(),x.dv).bY(0,new C.eDy()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.alg,this.aPj(v,e,new C.eDz(),f),null)},
aPj(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e5)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ac:A.bw,n,n,n,10),A.r7],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c8(A.aL,A.e,A.P,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bH(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n0,n,n,n))
A.d.v(l,u)}return B.ev(A.a7,B.A(l,A.l,n,A.e,A.P,0,n,n),A.f,A.e4)},
bEA(d,e,f){return this.aPj(d,e,null,f)},
bNK(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dtg
else if(v==="hati_kuhoweya")w=D.ddI
else{if(v==="hati_kiapo_uongozi")v=D.d_i
else v=C.kM(v)?D.d77:A.S_
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eDC(this,f,d,e,w),null)},
c7q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bL
w=k.Xx(i)
v=k.avt(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cd,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b5,B.bN(!1,D.fR8,j,j,!0,j,j,j,new C.eF2(k),j,j)],t),A.l,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.l(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hf,B.c2(new B.D(A.eY,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bl,j,j,j,j,2,D.c3l,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xj,j,j,j,j,j,j,!1,"\u2022",j,new C.eF3(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.U,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AG,A.ao,j,A.Vd,j,j),j),new B.p(r,j,p,q,o,j,A.n),A.bj),j),1)
q=B.l(16)
p=d?A.bq:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.cd(B.A(B.a([k.uG(G.OQ,j,new C.eF4(k,i),d),k.uG(G.a1Y,j,new C.eF5(k,i),d),k.uG(I.apJ,j,new C.eF6(k,i),d),k.uG(I.a2K,j,new C.eF7(k,i),d),k.uG(k.bEy(i.as),j,new C.eF8(k,i),d),k.uG(D.aqP,j,new C.eF9(k,i),d),k.uG(D.aqO,j,new C.eFa(k,i),d)],t),A.l,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.i.M(i.w)
return B.bR(0,B.aI(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alp,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aD:A.am,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.de],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lL,j,j,j),j)],t),A.l,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7p(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bL
w=m.b
v=w===D.cW
u=B.l(18)
t=x.O
t=d?B.a([A.bq,A.U],t):B.a([A.c,A.aP],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7l(A.j3,"Edit",new C.eEO(o,m),d,!0))
if(w===D.lS)p.push(o.b7l(A.HN,"Shape & ring",new C.eEP(o),d,!0))
p.push(o.uG(A.D4,"Format",new C.eEQ(o),d))
if(v)A.d.v(p,B.a([o.uG(G.OQ,n,new C.eER(o,m),d),o.uG(D.aqP,n,new C.eES(o,m),d),o.uG(D.aqO,n,new C.eET(o,m),d)],q))
p.push(A.b5)
p.push(o.cxj(A.ei,n,o.gaTt(),d,!0))
p.push(o.uG(A.hJ,"Done",new C.eEU(o),d))
return B.q(n,B.A(p,A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a8(A.a7,A.aa,A.x,t,n,n),A.n),n,n,n,A.Cc,A.lL,n,n,n)},
bEy(d){switch(d.a){case 2:return D.a2H
case 1:case 5:return D.a2J
default:return D.a2I}},
c8k(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e1
default:return A.bn}},
aBY(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ac:A.aM
w=v}v=B.l(12)
u=B.l(12)
t=h?K.I5:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e5,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pl,B.aI(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eJ(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.P,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uG(d,e,f,g){return this.aBY(d,e,f,g,!1,!1)},
b7l(d,e,f,g,h){return this.aBY(d,e,f,g,h,!1)},
cxj(d,e,f,g,h){return this.aBY(d,e,f,g,!1,h)},
bRv(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.bq,A.U],m):B.a([A.c,A.np],m)
w=B.L(e?A.aM:A.nm,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3E(A.eN,"Back",p.gbKO(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.U,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.de,B.E(B.A(B.a([new B.dl(1,A.cm,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bW:A.am,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ul,o,A.e,A.j,0,A.d1,o),1)],q)
if(!p.ky()){u=p.a3E(A.py,"Undo",p.ax.length===0?o:p.gcHb(),e)
A.d.v(r,B.a([u,p.a3E(D.bRA,"Redo",p.ay.length===0?o:p.gcsu(),e)],q))}r.push(p.a3E(A.za,"PDF",new C.eDW(p),e))
r.push(p.a3E(A.i_,"Download as video",new C.eDX(p),e))
if(!p.ky())r.push(B.CD(o,o,B.X(A.oy,e?A.ac:A.bw,o,o,o,o),new C.eDY(p),A.H,new C.eDZ(p),A.ag,"More",x.N))
r.push(A.de)
r.push(B.aI(!1,A.a3,!0,o,B.aP(!1,B.l(14),!0,B.eJ(D.esi,o,new B.p(o,o,o,B.l(14),o,K.I5,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCN(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.l,o,A.e,A.j,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),o,o,o,D.bBG,D.bH4,o,o,o)},
cGB(d){var w=this,v=null,u=B.l(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cr:A.aO,A.r,1)
return B.q(v,B.cd(B.A(B.a([w.j5(A.uR,"Print",new C.eId(w),d),w.j5(A.za,"Download PDF",new C.eIe(w),d),w.j5(A.qO,"Present",w.gaCN(),d)],x.p),A.l,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yF,G.an2,v,v,v)},
a3E(d,e,f,g){var w,v=null
if(f==null)w=g?A.aU:A.ds
else w=g?A.ac:A.aM
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cf)},
c7u(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cr:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eFd(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.amJ,new B.ff(new C.eFe(r),q),q))
A.d.v(t,w?B.a([new B.D(S.ws,r.aiu(A.k7,"Ending celebration",r.gciC(),d),q),new B.D(S.ws,r.aiu(A.HN,"Logo ring & frame",r.gcjj(),d),q)],x.p):A.f6)
A.d.v(t,w?B.a([new B.D(S.ws,r.aiu(A.mi,"Look and feel",r.gcjk(),d),q),new B.D(S.ws,r.aiu(A.pB,"Edit this slide's text",r.gcjR(),d),q)],x.p):A.f6)
t.push(new B.D(S.ws,B.h6(B.az(q,B.q(q,D.f8O,A.f,q,q,new B.p(q,q,q,B.l(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.H,10)],x.V),D.asT,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eFf(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bHy,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.cd(r.cuV(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yF,q,q,q,q)},
cuV(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dmq[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwH(s),t.a,new C.eGC(u,e),a3,D.aSK.q(0,s)))}w.push(e.j5(A.lk,"Notes Slide",new C.eGD(e),a3))
w.push(e.lY(A.HM,"Quiz",new C.eGE(e),a3,!0))
w.push(e.lY(P.Ho,"Worksheet",new C.eGP(e),a3,!0))
w.push(e.lY(W.HP,"Flashcard",new C.eH_(e),a3,!0))
w.push(e.lY(A.PE,"Lab Report",new C.eHa(e),a3,!0))
w.push(e.lY(A.qM,"Rubric",new C.eHh(e),a3,!0))
w.push(e.lY(A.pt,"Minutes",new C.eHi(e),a3,!0))
w.push(e.lY(A.ox,"Syllabus",new C.eHj(e),a3,!0))
w.push(e.lY(A.a3h,"Timeline",new C.eHk(e),a3,!0))
return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dnO[v]
w.push(e.lY(r.b,r.c,new C.eHl(e,r),a3,!D.aSQ.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wQ,a0,e.gaP_(),a3),e.j5(A.uN,"Picture",new C.eGF(e),a3),e.j5(A.zk,"Bio link",new C.eGG(e),a3),e.j5(A.a3g,"Table",new C.eGH(e),a3),e.j5(A.PI,"Sticky",new C.eGI(e),a3),e.j5(A.t2,"Divider",new C.eGJ(e),a3),e.j5(A.zt,"Header",new C.eGK(e),a3),e.lY(A6.t0,"Rectangle",new C.eGL(e),a3,!0),e.lY(A.pq,"Circle",new C.eGM(e),a3,!0),e.lY(A.a2x,"Triangle",new C.eGN(e),a3,!0),e.lY(A.jH,"Arrow",new C.eGO(e),a3,!0),e.lY(D.bQ1,"Parallelogram",new C.eGQ(e),a3,!0),e.lY(D.bSw,"Hexagon",new C.eGR(e),a3,!0),e.lY(A.t2,"Line",new C.eGS(e),a3,!0),e.lY(A.za,"PDF",new C.eGT(e),a3,!0),e.lY(N.a3q,"Signature",new C.eGU(e),a3,!0),e.j5(A5.CP,"Quote",new C.eGV(e),a3),e.j5(D.a25,a1,new C.eGW(e),a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPS("Wide 16:9",D.DX,a3),e.aPS("Short 9:16",D.oP,a3),new B.D(A.fB,B.n3(D.bUF,d,D.fNk,d,new C.eGX(e),d,d,d,d),d)],u),A.l,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bL2("This slide",!e.Q,a3,new C.eGY(e)),A.bm,e.aS8("All slides",e.Q,a3,new C.eGZ(e),!0)],u),A.l,d,A.e,A.j,0,d,d)
p=e.bL3()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bW:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5m,new C.eH0(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.doO[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.ds:A.aU,1.5,A.r,-1)
l.push(new B.D(A.fB,B.az(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eH1(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cd(B.A(l,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGP()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eH2(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.T,q,A.an,p,A.T,o,A.ax,n,A.T,m,A.ax,l,A.T,j,A.ax,B.cd(B.A(h,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.an,e.c4a(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=new C.eGB(e)
t=new C.eHm(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.So,f.dy,new C.eH3(e,u,f),A.b2)
A.d.v(p,B.a([o,A.ax,n,A.T,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.So,q,new C.eH4(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.lk,w,new C.eH5(e),a3),e.j5(A.uR,"Print deck",new C.eH6(e),a3),e.lY(D.aoQ,"Export JSON",new C.eH7(e),a3,!0),e.j5(A.fJ,"Duplicate Slide",e.gaUo(),a3),e.j5(A.ei,a2,e.gaTu(),a3),e.cAO(a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a25,a1,new C.eH8(e),a3),e.j5(A.fJ,"Duplicate",e.gaUo(),a3),e.j5(A.ei,a2,e.gaTu(),a3),e.j5(A.qO,"Present",e.gaCN(),a3),e.j5(A.D2,a0,e.gaP_(),a3),e.j5(A.CV,"Fit Text",new C.eH9(e),a3),e.j5(A.za,"Download PDF",new C.eHb(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jL,"Transfer",new C.eHc(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OQ,"Bold",new C.eHd(e,f),a3),e.j5(G.a1Y,"Italic",new C.eHe(e,f),a3),e.j5(G.aor,"Underline",new C.eHf(e,f),a3),e.j5(Ag.OR,"Bullets",new C.eHg(e,f),a3),e.bU9(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRA(a3))
w.push(e.j5(D.bOJ,"Delete",e.gaTt(),a3))
A.d.v(u,w)}return B.A(u,A.l,d,A.e,A.j,0,d,d)}},
aPS(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oP
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abq,t,t,t)],v)
if(w)A.d.v(u,B.a([A.de,D.bTR],v))
return new B.D(A.fB,B.jv(t,t,t,B.A(u,A.l,t,A.e,A.P,0,t,t),t,new C.eD0(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cAO(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bL
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aU:A.cu,A.r,1)
u=B.l(8)
t=B.X(A.Hm,d?A.aD:A.am,q,q,q,14)
s=B.aH(q,q,q,q,D.arR,q,q,q,new C.eHJ(r,p),q,q,q,q,q,A.cf)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bo,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.arI,q,q,q,new C.eHK(r,p),q,q,q,q,q,A.cf)],x.p),A.l,q,A.e,A.P,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.H0,A.n_,q,q,q)},
cwH(d){switch(d.a){case 6:return W.HP
case 7:return A.HM
case 8:return P.Ho
case 4:return A.zt
default:return A.lk}},
bU9(d,e){var w=null,v=B.L(e?A.aU:A.cu,A.r,1),u=B.l(8),t=B.aH(w,w,w,w,D.arR,w,w,w,new C.eE8(this,d),w,w,w,w,w,A.cf),s=A.i.M(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bo,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.arI,w,w,w,new C.eE9(this,d),w,w,w,w,w,A.cf)],x.p),A.l,w,A.e,A.P,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uy,A.n_,w,w,w)},
c4a(d){var w=null
return B.CD(B.E6(B.X(A8.a28,d?A.ac:A.bw,w,w,w,16),w,w,D.fT4,w,w,w),w,w,new C.eEG(),A.H,this.gbFf(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dl:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dj:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PO,A.f,w,w,D.Fk,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aI(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eJ(new B.D(A.hf,B.x(B.a([new B.an(A.a0,w,A.ab,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aT:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.P,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8K(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hP(t,new C.eHV(u,s,e,d),s.r.length,A.cl,t,w,new C.eHW(e),!1)
s=d?A.as:A.bO
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cl,B.IG(E.as4,new C.eHX(u),B.o1(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aTv,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.l,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJ3(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oP?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bM(A.b7,v,v,new B.fH(w,B.az(v,B.cs(new C.eDp(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eDq(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJ5(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kM(a9.w))===!0,b1=b0&&C.fR0(b3),b2=b0&&b3.b===D.ls&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6x(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6w(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c6:A.bl
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hg5(b3))o=a8
else if(p&&!a7.ky())o=a7.gcf6()
else o=a7.ky()?a8:new C.eDd(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c2:A.iO
i=w&&C.hg5(b3)&&a7.Ar()?new C.eDe(a7,b3):a8
h=v&&b3.b===D.cW?new C.eDf(a7,b3):a8
g=u?new C.eDg(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c5:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c5.j(0.08)
else a0=b3.b===D.ls?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c5.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ar()
a3=b3.b===D.cW
a4=a3?a7.Xx(b3):a8
a5=a3?a7.avt(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eDh(a7,b3):a8
a3=v&&a3?new C.eDi(a7,b3):a8
a6=C.b3l(q,a4,a1,b3,a5,a2,a3,new C.eDj(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ap(-4,B.az(a8,B.q(a8,D.bWH,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDk(a7,b3,b4,b5),a8,a8,new C.eDl(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.az(a8,B.q(a8,D.bXo,A.f,a8,a8,new B.p(A.db,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1F(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.az(a8,B.q(a8,D.bZ3,A.f,a8,a8,new B.p(A.c5,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDm(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.az(a8,B.q(a8,D.h1e,A.f,a8,a8,new B.p(A.bl,a8,a8,B.l(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.H,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lh,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDn(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.az(j,B.eN(A.A,f,new B.an(A.a0,a8,A.ab,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bG("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aS8(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.L(e?A.bl:A.bA,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.am
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.de,B.q(r,D.PO,A.f,r,r,D.Fk,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.q(r,B.A(t,A.l,r,A.e,A.P,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hd,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bL2(d,e,f,g){return this.aS8(d,e,f,g,!1)},
ceR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aR),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aP
t=f?A.xN:l
if(f)s=new B.bH(new B.ay(e?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tp,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ac:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b5,m.b3N(e,new C.eFh(m))],q),A.l,l,A.e,A.j,0,l,l)
o=B.m(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bW:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.an,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(10),A.dq),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eFi(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVI(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bL
w=new C.eEm(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.dX:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.U,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b5,a0.b3N(a3,a0.gbPB())],p),A.l,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fNR,B.E(B.kX(a1,a1,a1,u,0.05,new C.eEn(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.h_B,B.E(B.kX(a1,a1,a1,t,0.05,new C.eEo(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fHl,B.E(B.kX(a1,a1,a1,96,10,new C.eEp(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
l=n===D.lS
if(l||n===D.ls||n===D.TJ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fTU,B.E(B.kX(a1,a1,a1,s,0,new C.eEq(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.h0W,B.E(B.kX(a1,a1,a1,r,0,new C.eEr(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dl[j]
i.a=null
g=h.a
i.a=g
k.push(B.jv(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pV,a1,a1,a1),a1,new C.eEs(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bG,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.De[j]
f.a=null
g=e.a
f.a=g
h.push(B.jv(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pV,a1,a1,a1),a1,new C.eEt(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.T,l,A.an,k,A.T,i,A.an,B.bV(A.bG,h,A.bs,a1,6,6)],p))}o.push(A.T)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eEu(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bV(A.bG,l,A.bs,a1,6,6),A.af,B.hsx(new C.eEv(w,a2),D.cAX,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eEw(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bG,m,A.bs,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bYQ,D.fVZ,new C.eEx(a0,a5),B.bp(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cr:A.c
p=a4?A.xN:a1
if(a4)o=new B.bH(new B.ay(a3?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tp,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GJ,a1,a1,a1)},
bUq(d){return this.aVI(d,!1,!1,null)},
ce_(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.eEA(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fwI,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bH,A.cU,r.bEA(D.d4l,d,B.S(v).ax.a===A.J)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dN(B.h6(B.aI(!1,A.a3,!0,q,B.aP(!1,q,!0,B.eJ(D.ffg,q,new B.p(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c5.j(0.4),A.eu,8)],p),D.asY,A.a6),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.H)],u))
t=B.A(v,A.l,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.S(w).ax.a===A.J
w=B.l(20)
v=x.O
v=s?B.a([D.bfa,D.bfD],v):B.a([A.c,A.kO],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.p(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a8(A.aA,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bV,q,q,q)},
aOJ(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eC9(this,g,d,e,f),null)},
ahN(d,e){return this.cqI(d,e)},
cqI(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aR),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eGe(d,q),p,null,!0,!0,x.N),$async$ahN)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahN,v)},
QG(d){var w=d.bT()
return""+B.bL(w)+"/"+B.bU(w)+"/"+B.bC(w)}}
C.agl.prototype={}
C.aAG.prototype={
S(){return new C.beW(null,null)}}
C.beW.prototype={
gcD8(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bL(u)+"/"+B.bU(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a4()
w=B.bl(u,A.qx,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bAa,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxP()},
JD(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hO(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bFS,B.c6(new B.h7(B.a([u,w],x.dS)),new C.daa(this),v),v),v,v,v)}}
C.bfa.prototype={
B(d){var w=null,v=B.l(22),u=B.L(A.aM,A.r,1),t=x.p
return B.as(new B.D(D.bG8,B.aI(!1,A.a3,!0,w,B.q(w,B.by(B.l(22),B.x(B.a([new B.D(D.bFj,B.x(B.a([B.q(w,D.bXu,A.f,w,w,new B.p(A.ay.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fYa,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fxX,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e0,D.bzd,B.A(B.a([B.E(B.bN(!1,D.fM_,w,w,!0,w,w,w,new C.day(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nD,w,A.oU,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bq,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fRt,w,w,!0,w,w,w,new C.daz(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nD,w,A.oU,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w)],t),A.l,w,A.e,A.P,0,A.p),A.aq),A.f,w,Aa.Xy,new B.p(A.as,w,u,v,D.d4K,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KI.prototype={
S(){return new C.beV()}}
C.beV.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.l(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.l(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dN(B.d3(B.az(o,B.uJ(B.cT(o,B.A(B.a([r,A.au,new B.dl(1,A.cm,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eU:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.bb,A.P,0,o,o),o,o,A.b1,new B.p(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nE,o,o,1/0),A.cw,A.jm,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.da5(p,d),new C.da6(p),new C.da7(p),new C.da8(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.QB.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aI(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.eY,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a8(A.aA,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ex,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ng,v,v,v),A.bH,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0N.prototype={
S(){return new C.aGe(D.dm,null,null)}}
C.aGe.prototype={
gZP(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bzK,null,1,null,v)
v.w!==$&&B.bD()
v.w=w
u=w}return u},
b9d(d){if(!this.a.c.ay)return
this.x=d
this.gZP().iA(0,0)},
Y(){var w,v=this
v.a4()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axw(D.flL)
C.ili()
v.S9()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZP().t()
v=w.z
if(v!=null)v.a1(0)
C.axw(D.flM)
C.ill()
w.bzX()},
cFZ(){B.jX()
this.m(new C.eIU())
var w=this.c.L(x.q).f
w.a5S()
if($.bmT)w.T(D.fiA)},
S9(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hqJ(u,w),1,120)),new C.eIK(v))},
cFC(){var w,v=this
v.m(new C.eIT(v))
if(v.r)v.S9()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXE(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czy(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eIL(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lI,new C.eIM(w))},
azA(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eIG(u))
u.S9()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXE()){u.czy()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eIH(u,A.o.F(w+1,s)))
u.b9d(w)
u.S9()}},
cpm(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eII(v))
v.S9()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eIJ(v,w,t))
v.b9d(w)
v.S9()}},
cB3(d){var w,v=this,u=v.e
if(u===D.ct){u=v.d
u===$&&B.c()
return new B.mO(d,new B.bG(u,x.ac))}w=v.cB4(u)
u=v.d
u===$&&B.c()
return B.oz(new B.mO(d,new B.bG(u,x.ac)),w,new C.eIR(),A.b1,A.b1,new C.eIS(v))},
cB4(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bA6
case 16:return A.iM
case 18:return A.mV
default:return A.mb}},
cB2(d,e,f){var w,v,u,t=null,s=B.cG(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jI(e,new B.bg(s,new B.br(A.vo,A.H,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jI(e,new B.bg(s,new B.br(A.TX,A.H,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jI(e,new B.bg(s,new B.br(A.ik,A.H,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jI(e,new B.bg(s,new B.br(A.to,A.H,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.c6(s,new C.eIN(s),e)
case 9:return B.c6(s,new C.eIO(s),e)
case 10:return B.c6(s,new C.eIP(s),e)
case 11:return B.c6(s,new C.eIQ(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.ig(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jl(B.jI(e,new B.bg(s,new B.br(A.vo,A.H,v),v.k("bg<bO.T>")),t,!0),A.t,new C.bu9(w,t))
case 15:w=x.K
return B.jI(e,new B.bg(s,new B.br(A.TX,A.H,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.dr()
w.n0((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fz(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eN(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jl(new C.apN(B.c6(n.gZP(),new C.eIV(n,v,w),m),m),A.t,m)}else{t=B.t3(new C.JG(w,!0,!1,m))
l=B.b0(w.e)
u=n.cB3(B.e9(B.jl(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hqJ(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p0,m,m,m),A.bm,D.bZW],k),A.l,m,A.e,A.P,0,m,m),A.f,m,m,new B.p(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.he,m,m,m)
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
l.push(B.bR(0,new C.On(new C.Fm(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oP?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jl(B.v2(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmT){r=B.IG(A.lo,new C.eIW(d),B.o1(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.IG(B.X(n.r?Am.uQ:A.hx,m,m,m,m,m),n.gcFB(),B.o1(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ap(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h_,m,m,m),A.f,m,m,new B.p(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.he,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.az(A.c2,B.q(A.ly,$.bmT?A.bL:s,A.f,m,m,m,m,64,m,m,D.bAQ,m,m,150),A.y,!1,m,n.gcFY(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b3,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eIX(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KO.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.amu,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7K,w,w,w,w,w,w,w,w)}}
C.bu9.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjW.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b4v
break
default:w=B.l(6)
break}v=s.e
u=B.L(v?A.aF:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wX,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b1,new B.p(s.f,r,u,w,r,r,A.n),A.h2,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aF:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjV.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dCl.h(0,p)
if(o==null)o=D.dnY
p=p==="none"
w=p?q:new B.a8(A.a7,A.aa,A.x,o,q,q)
p=p?A.d0.j(0.25):q
v=r.e
u=v?B.L(A.aF,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ar2:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a6),q,52,q,q,A.eA,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aF:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aM2.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aO4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzY.prototype={}
C.aO5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3o.prototype={}
C.Xd.prototype={
S(){return new C.aGc()},
bk_(d){return this.e.$1(d)}}
C.aGc.prototype={
gb7r(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabF(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7r()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQJ(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7r()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8J(){return A.d.cF(this.gabF(),0,new C.eIq())},
Y(){var w,v=this
v.a4()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RK()},
RK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4_(s.c,s.f),$async$RK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eIm(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RK,v)},
JF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabF()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fUi(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pz(o,q.c,q.f),$async$JF)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ec(new C.eIp(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cd(q),$async$JF)
case 4:q=t.a
w=5
return B.b(B.py(q.c,q.f),$async$JF)
case 5:w=6
return B.b(t.RK(),$async$JF)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JF,v)},
S7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.efh,!0,"NgmySlidesTransferScan",x.N),$async$S7)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eIn(t))
w=4
return B.b(C.aiu(s),$async$S7)
case 4:r=e
t.m(new C.eIo(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fhp)
w=1
break}w=5
return B.b(t.a.bk_(r),$async$S7)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.T(B.b4(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S7,v)},
JE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabF()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pz(s,r.c,r.f),$async$JE)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fUx(null,A.d.gH(n),s,t.a.f)}else q=C.fUx(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hi(q,"ngmy_slides_"+p,!1),$async$JE)
case 4:o=e
s=t.a
w=5
return B.b(B.py(s.c,s.f),$async$JE)
case 5:w=6
return B.b(t.RK(),$async$JE)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b4(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JE,v)},
a3P(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eIr(t))
w=3
return B.b(C.bFg(),$async$a3P)
case 3:s=e
t.m(new C.eIs(t))
if(s==null||J.cr(s)){w=1
break}w=4
return B.b(t.a.bk_(s),$async$a3P)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.T(B.b4(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3P,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.dh:A.bO,k=o.gabF().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.bY(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cy,m?A.ac:A.am,n,n,n,n),n,n,n,new C.eIv(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.U,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tz],h),A.l,n,A.e,A.j,0,n,n)
w=B.l(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.f_,24)],x.V)
u=B.ap(n,B.X(A.qJ,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.q(n,D.c_u,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ex,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bL_],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.h6(B.az(A.c2,D.ffj,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gck2(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ab,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a3W,A.n),n,n,n,n,E.a0D,n,n,1/0),A.e0,o.azB(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_5(A.qO,m,new C.eIw(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_5(D.bPV,m,new C.eIx(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.azB(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.l(16)
s=B.L(m?A.bA:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aD:A.am,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eIy(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nc)
w.push(o.azB(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.as8(A.aH,k,!0,A.jK,m,o.r,o.gce3(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOK(A.jX,!0,A.jp,m,o.gcwg(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.j,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bD3(A.aX,k,A.i_,m,o.r,o.gce0(),"Download .json","Backup file"),1),A.au,B.E(o.aOK(A.av,!0,AB.zs,m,o.gcIv(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.j,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.l(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lO,A.bl.j(0.9),n,n,n,18)
r=o.gaQJ()
q=o.gb8J()
p=o.gb8J()===1?"":"s"
A.d.v(w,B.a([A.bz,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ac:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bF,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Om,i,n),B.E(B.cl(w,n,n,D.bEq,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,U.XR,A.f,A.dP,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ab,A.t,j,n),n,!1,!1,n,n)},
agY(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.isn(s,t.d,t.e),$async$agY)
case 2:return B.h(null,v)}})
return B.i($async$agY,v)},
azB(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bl,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aD:A.am,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
b_5(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cA,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.l(12)
t=B.q(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.U,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aI(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eJ(new B.D(A.bF,B.x(B.a([t,A.X,u,A.bH,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNJ(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.as:A.c,m=B.l(16)
if(p)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c_G,A.f,q,q,new B.p(q,q,q,B.l(12),q,new B.a8(A.a7,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.U,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ec:A.pq
if(p)r=A.bl
else r=e?A.aU:A.ds
return new B.D(A.cx,B.aI(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bF,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eIl(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
as8(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.bA:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.rY,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arC,A.f,s,s,D.b7w,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.U,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aI(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eJ(new B.D(E.a0g,B.x(B.a([new B.an(A.a0,s,A.ab,A.f,u,s),A.af,v,A.bH,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOK(d,e,f,g,h,i,j){return this.as8(d,e,!1,f,g,!1,h,i,j)},
bD3(d,e,f,g,h,i,j,k){return this.as8(d,e,!1,f,g,h,i,j,k)}}
C.Xe.prototype={
S(){return new C.bmS()}}
C.bmS.prototype={
Y(){this.a4()
this.afK()},
afK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fUx(null,A.d.gH(m),k,r.a.f):C.fUx(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kM(A.d.gH(n).w))C.fUi(A.d.gH(r.a.d),D.dlH)
n=r.a
m=n.c
n=C.ioK(n.d)
w=7
return B.b(C.fUw(p,C.ioP(r.a.d),n,m,q),$async$afK)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eIz(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eIA(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.S(d).ax.a===A.J,h=i?A.dh:A.bO,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eIB())
v=B.aH(j,j,j,j,B.X(A.eN,i?A.ac:A.am,j,j,j,18),j,j,j,new C.eIC(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.U,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tz],u),A.l,j,A.e,A.j,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dk,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.T,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a3W,A.n),j,j,j,j,E.a0D,j,j,1/0)
q=B.l(24)
s=B.L(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vl,A.K,j,j))
else if(k.d==null)r.push(D.erR)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ac(0,A.G,A.aF.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fMv,A.an,B.az(j,B.q(j,B.A(B.a([D.c1e,A.au,B.d(m,j,j,j,j,j,j,D.fym,j,j,j)],u),A.l,j,A.e,A.P,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c69,A.n),j,j,j,j,A4.amf,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eID(k,d),j,j,j,j,j,j,!1,A.a4),A.T,D.fR_,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.L(A.bA,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qe(j,j,!1,l,j,!0,!0,j,!1,D.bvg),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hl,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Om,v,j),B.E(B.cd(B.x(B.a([t,A.aQ,B.q(j,B.x(r,A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c84,A.n),j,j,j,j,A.ux,j,j,1/0)],u),A.l,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.amy,j,j,A.ah),1)],u),A.l,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aG9.prototype={
S(){return new C.aGa(new B.au(A.aw,$.aw()),B.k9(!0,null,!0,!0,null,null,!1))}}
C.aGa.prototype={
Y(){var w=this
w.a4()
w.e.aW(0,new C.eC3(w))
$.aV.x1$.push(new C.eC4(w))},
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.t()
this.a3()},
b1U(){var w,v=this.c
v.toString
w=C.zh(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eQ,x.w).w,i=B.l(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vl,36),D.aeB],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bXy,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fJu,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.j,0,A.p),A.f,k,k,D.b7X,k,k,k,k,A.yR,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.U
o=new B.aN(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.H,12)],g):k
t.push(new B.bz(1,A.bc,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.frD,k,k,k),k,k,A.b1,new B.p(s,k,new B.bH(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h2,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.AF)
A.d.v(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.j,0,k,k),B.bR(0,B.d3(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c43,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C8(5,k),new C.bxr()],x.aS),k,k,A.aUJ,k,5,k,1,k,k,!1,"\u2022",k,new C.eC_(l),k,new C.eC0(l),k,!1,k,k,!1,k,!0,k,A.ad,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mz,k,k,k,k),0),0,0,0)],a1)
d=C.zh(w.a.a.toUpperCase())==null?k:l.gce4()
return B.as(new B.D(new B.R(24,24,24,24+j.f.d),B.aI(!1,A.a3,!0,k,new B.cP(Af.LS,B.q(k,B.by(e,B.x(B.a([a0,new B.D(D.bEX,B.x(B.a([new B.an(A.a0,k,A.ab,A.t,g,k),A.X,D.fHN,A.bz,new B.a5(1/0,50,B.bJ(D.fZ4,k,d,B.bp(A.bl,A.bq,A.am,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.an,B.bN(!1,A.nZ,k,k,!0,k,k,k,new C.eC1(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.j,0,A.p),k)],a1),A.l,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.p(A.dh,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxr.prototype={
oY(d,e){var w=e.a.toUpperCase()
return e.cP3(B.hh(A.bB,w.length),w)}}
C.asS.prototype={
S(){return new C.aGd(B.zY(A.NF,A.o4,A.v2))}}
C.aGd.prototype={
t(){this.d.t()
this.a3()},
b1T(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j1(w,d)},
abA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h2z(s),$async$abA)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1T("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abA,v)},
ce2(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.ioN(w[u])
if(t!=null){this.b1T(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.wS,s,s,s,t.gbS8(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aH(s,s,s,s,B.X(q?A.uK:An.Pl,s,s,s,s,s),s,s,s,new C.eIF(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dh,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h_h,s,s,s,1,s,!0)
r=B.zX(t.d,A.c_,t.gce1())
w=B.l(28)
w=B.as(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.H,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b3,A.t,B.a([r,w,B.ap(32,B.q(s,D.fNC,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jn,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxF.prototype={
B(d){var w=null,v=B.l(24),u=B.L(A.aM,A.r,1)
return B.aI(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.arh,A.f,w,w,D.b7G,w,56,w,w,w,w,w,56),A.aQ,D.fZY,A.an,new B.k3(this.c,new C.fjq(),w,w,x.cI),A.aQ,new B.k3(this.d,new C.fjr(),w,w,x.cl),A.af,D.fZW],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,Af.LS,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0J,D.bFA,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8S.prototype={
S(){return new C.bmB(A.bE)},
gd1(){return this.c}}
C.bmB.prototype={
Y(){var w=this
w.a4()
if(w.a.d)return
w.a05()
w.d=B.df(A.fH,new C.eqj(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a05(){return this.csB()},
csB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a05=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eqh(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cle(p.c),$async$a05)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.eqi(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a05,v)},
bUh(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bL
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c5
w=v.j(0.14)
u=B.l(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hm,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUh(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.j,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A0.alk,A.iw,r,r,1/0)}}
C.a9L.prototype={
nv(){var w,v,u,t=this
t.xX()
w=t.cx
v=t.c
w.buj(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qk(B.I(["/S",D.evB,"/URI",new B.rZ(B.XP(w.as),A.vp,!0)],x.N,u),u))}}
C.a9M.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b53.prototype={
bC2(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.etU],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSx(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k8(w,new C.cp8(),B.a4(w).k("k8<ch.E,H>")).f1(0,new C.cp9())},
aF6(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u0(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jq(d.a,d.b))
s.n(0,"/Border",B.u0(H.atl))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h4(t.gcSx()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qk(w,x.Y))}}
C.cpa.prototype={}
C.a4a.prototype={}
C.ajp.prototype={}
C.aTh.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.MD(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjk(w)
u=x.N
t=x.Y
s=new C.cpa(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bC2(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qk(B.I(["/Type",D.evz],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9L(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayv.prototype={}
C.aUJ.prototype={
fV(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ej(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LM(t)
u.Tp(0)
u.pm(0,v)
w.fV(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(m1)","P(i4)","~()","P(eQ)","P(oO)","P(m1)","~(i4)","P(eQ,eQ)","KO(Z)","P(ob)","P(lv)","aB<P>()","H(H,i4)","a9<n,@>(i4)","ai<Ag>()","n(ob)","P(a98)","n(m1)","n(wB)","P(Fv)","H(i4,i4)","n(eQ)","v(eQ)","cK(eQ)","v(hF)","~(hF)","eQ(vj,F,F,F,F,H{fx:n,key:n,rotation:F})","eQ(n,F,H)","H(oO,oO)","P(Ag)","P(n,ai<Ag>)","a9<n,@>(oO)","ob()","ZT(Z)","eQ(n,F,F,F,F,F{align:qp,anim:hF,bullets:P,color:H?,delay:H,fx:n,key:n,style:Iz,weight:nZ})","a2a(Z)","eQ(n,F,F,F,F{anim:hF,delay:H,fx:n,key:n})","aB<~>(oO)","P(mS)","ZR(Z)","a1G(Z)","a1F(Z)","Qq(Z)","a03(Z)","eQ(vj,F,F,F,F,H,n,n{anim:hF,delay:H,rotation:F,stroke:H,strokeWidth:F})","eQ(n,F,F,F,F,F,n,n,H)","eQ(F,F,n,H{size:F})","v(rN,F,F)","lv()","oO(a9<@,@>)","~(v8)","Fv()","fi(eQ)","v(jb)","a_B(Z)","~(Fm)","a_W(Z)","H(eQ,eQ)","eQ(eQ)","a9<n,@>(eQ)","eQ(a9<@,@>)","m1(m1)","a9<n,@>(m1)","m1(a9<@,@>)","P(k_)","k_()","n(i4)","~(ai<oO>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","adR(Z,H)","~(P(eQ,eQ))","aev(Z)","agb(Z,H)","u(m1,P)","X1(Z)","aey(Z)","X2(Z)","~(mV)","i4(i4)","F(eQ)","a19(Z)","a0N(Z)","i4()","ai<FS>()","aB<~>(ai<i4>)","v(bB<H,i4>)","D(k_)","D(Fv)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(mt)","ai<jF<mV>>(Z)","jF<mV>(mV)","i4(a9<@,@>)","Xd(Z)","eQ(n,F,F,F,F,F,H{align:qp,style:Iz,weight:nZ})","Xe(Z)","v(i4)","~(ml)","JG(Z,m1,v?)","H(a9M)","aB<ai<a9<n,@>>?>()","n(n)","aB<Af>({paper:n?,photo:dK?,request:n,template!ly})","aB<a90>({doc!Af,history:ai<+(n,n)>,instruction!n,photo:dK?,template!ly})","aes(Z)"])
C.cOp.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:61}
C.cOq.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:72}
C.cOr.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galA(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:72}
C.cOs.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTK.prototype={
$1(d){return J.eD(A.dO.gaU(d),d.byteOffset,d.byteLength)},
$S:1691}
C.fGy.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1692}
C.c3F.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:30}
C.c3G.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:42}
C.c3I.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fXv.prototype={
$1(d){return new C.a2a(this.a,this.b,C.ipF(),null)},
$S:z+36}
C.fhT.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fhX.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fhY.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhZ.prototype={
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
C.fhU.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhV.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fhW.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fhO.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hk,w,w,w)
return B.eg(B.a([B.bN(!1,E.aWR,w,w,!0,w,w,w,new C.fhM(d),w,w),B.bN(!1,D.fKZ,w,w,!0,w,w,w,new C.fhN(d),w,w)],x.p),w,w,D.a__,v,w,w,w,w,D.h_A,w)},
$S:18}
C.fhM.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fhN.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fhP.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fhQ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fi2.prototype={
$0(){var w=this.a
return w.m(new C.fi1(w,this.b))},
$S:0}
C.fi1.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fhS.prototype={
$0(){var w=this.a
return w.m(new C.fhR(w,this.b,this.c))},
$S:0}
C.fhR.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fi_.prototype={
$0(){return this.a.a2d(this.b)},
$S:0}
C.fi0.prototype={
$0(){return this.a.PM(0,this.b)},
$S:0}
C.fi5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fi6.prototype={
$0(){var w=this.a
return w.m(new C.fi4(w,this.b))},
$S:0}
C.fi4.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fi3(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fi3.prototype={
$1(d){return d.a},
$S:z+67}
C.fpw.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hnV(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cB)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oO(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fpx.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fJK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcC()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fJI.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fJJ.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fWY.prototype={
$1(d){return d.aj()},
$S:z+32}
C.fGc.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fXR.prototype={
$1(d){return new C.ZT(this.a,null)},
$S:z+34}
C.cPM.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPR.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPQ())},
$S:12}
C.cPQ.prototype={
$0(){},
$S:0}
C.cPT.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a38(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPP(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiD(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:346}
C.cPP.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPU.prototype={
$1(d){},
$S:29}
C.cPN.prototype={
$1(d){return new C.ZR(this.b,this.a.gcCu(),null)},
$S:z+40}
C.cPV.prototype={
$1(d){return D.hsz},
$S:z+43}
C.cPI.prototype={
$1(d){var w=null,v=B.l(24),u=B.L(D.Zx,A.r,1),t=x.p
return B.as(B.aI(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bFm,B.x(B.a([B.q(w,D.bUG,A.f,w,w,new B.p(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fJW,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fxf,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e0,new B.D(A.qC,B.A(B.a([B.E(B.dU(D.fR1,new C.cPG(d),B.di(w,w,w,w,w,w,w,w,w,E.ny,w,w,A.cp,w,new B.b9(B.l(14),A.a1),D.b4X,w,w,w,w)),1),A.au,B.E(B.bJ(D.fXj,w,new C.cPH(d),B.bp(A.bC,w,w,w,w,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w),w)],t),A.l,w,A.e,A.P,0,A.p),A.f,w,A.xQ,new B.p(D.ago,w,u,v,D.d9A,w,A.n),w,w,w,K.a0J,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1693}
C.cPG.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPH.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPJ.prototype={
$0(){return J.nT(this.a.d,new C.cPF(this.b))},
$S:0}
C.cPF.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPE.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.L(D.Zx,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZN,A.f,t,t,new B.p(t,t,t,B.l(14),t,D.asT,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWw,t,t,t),A.bH,D.fXe],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.l,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dxm[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azs(u[1],u[2],u[3],new C.cPC(v,d),!1,t))}q.push(A.an)
q.push(D.bzg)
q.push(A.an)
q.push(new C.azs(A.ei,"Delete book","Remove it from this device",new C.cPD(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.p(D.ago,t,r,s,t,t,A.n),t,t,t,A.ut,A.GP,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cPC.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPD.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPL.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLK,12)],x.V)
return B.dN(B.eN(A.A,e,B.q(w,B.by(B.l(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apz(d),A.f,A.dB),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+48}
C.cPK.prototype={
$0(){return this.a.c89()},
$S:0}
C.cPB.prototype={
$0(){return this.a.b0h(0,this.b)},
$S:0}
C.cPA.prototype={
$0(){return this.a.DP(this.b)},
$S:0}
C.cPz.prototype={
$0(){return this.a.DP(this.b)},
$S:0}
C.cPW.prototype={
$2(d,e){var w=this.a
return w.bGE(J.t(w.d,e))},
$S:41}
C.cP2.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bn()},
$S:0}
C.cP1.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3r("Page "+(v.length+1),"",""))},
$S:0}
C.cP4.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPc.prototype={
$0(){},
$S:0}
C.cPd.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:7}
C.cP5.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aN(this.c)},
$S:0}
C.cP3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cP7.prototype={
$0(){return this.a.Rg(this.b)},
$S:0}
C.cP8.prototype={
$0(){return this.a.Rg(this.b)},
$S:0}
C.cP9.prototype={
$0(){var w=this.a
w.m(new C.cP6(this.b))
w.ED()},
$S:0}
C.cP6.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPa(w,d))
w.ED()},
$S:z+51}
C.cPa.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPi.prototype={
$2(d,e){if(d)this.a.Bn()},
$S:128}
C.cPe.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bn(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fk_)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPf.prototype={
$0(){return this.a.b_c(this.b,-1)},
$S:0}
C.cPg.prototype={
$0(){return this.a.b_c(this.b,1)},
$S:0}
C.cPh.prototype={
$0(){return this.a.c9x(0,this.b)},
$S:0}
C.fOi.prototype={
$1(d){return C.hy3()},
$S:44}
C.fOj.prototype={
$1(d){return null},
$S:29}
C.ftR.prototype={
$1(d){return null},
$S:29}
C.fPh.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:301}
C.fPg.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:209}
C.fPn.prototype={
$1(d){var w=this.a
return C.hfX(d)===w||C.hCU(d)===w},
$S:z+4}
C.fsT.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.cfr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOg.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fOh.prototype={
$1(d){return C.fR0(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fJ6.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yQ,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fRE,A.T,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dh(D.HY,D.fLC,new C.fJ4(d),B.bp(A.c5,w,w,w,A.w,w,A.cp,w,w,w,w,w)),A.X,B.es(A.uX,D.fSY,new C.fJ5(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cp,w,w,R.xO,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJ4.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJ5.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJ7.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,D.fHD,w,w,!0,w,w,w,new C.fJ2(d),w,w),B.bJ(D.fZC,w,new C.fJ3(d),w)],x.p),w,w,w,D.h0y,w,w,w,w,D.fHw,w)},
$S:18}
C.fJ2.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fJ3.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.elA.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ely.prototype={
$0(){return this.a.e=!0},
$S:0}
C.elz.prototype={
$0(){return this.a.f=!0},
$S:0}
C.elB.prototype={
$0(){return this.a.r=!1},
$S:0}
C.elC.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fPm.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.fPi.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a7,w,w,B.BY(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1694}
C.fPk.prototype={
$1(d){var w=null,v=B.l(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fyB,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:139}
C.fPl.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dN(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.l,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1695}
C.fPj.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiC:this.a,u=B.L(A.is,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ab,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agE,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1696}
C.h0q.prototype={
$1(d){return new C.aes(this.a,this.b,null)},
$S:z+108}
C.e8_.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvS:A.N5,q=B.L(D.jA.j(0.25),A.r,1),p=B.as(B.q(t,t,A.f,t,t,new B.p(A.c5.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.q(t,D.arB,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jA.j(0.35),A.eu,10)],x.V),D.c8I,A.n),t,t,t,t,A.yG,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0z,B.x(B.a([p,A.aB,B.A(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jA,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fxM,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.l,t,A.e,A.j,0,t,t)],u),A.l,t,A.e,A.j,0,A.p),t),B.E(B.ip(!0,t,e,A.y,D.aTN,new C.e7Z(w,this.c),v,D.am9,t,A.ah,!1),1)],u),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(r,t,q,A.mF,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:119}
C.e7Z.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adR(w,new C.e7Y(this.b,w),null)},
$S:z+72}
C.e7Y.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fJa.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fJb.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yQ,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fVi,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dh(D.HY,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJ8(d),B.bp(D.jA,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oG,D.VW,new C.fJ9(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cp,w,w,R.xO,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJ8.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJ9.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJe.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fJf.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yQ,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fIH,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dh(D.HY,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJc(d),B.bp(D.jA,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oG,D.VW,new C.fJd(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cp,w,w,R.xO,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJc.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJd.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJi.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fJj.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yQ,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fPp,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dh(D.HY,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJg(d),B.bp(D.jA,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oG,D.VW,new C.fJh(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cp,w,w,R.xO,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJg.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJh.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h1T.prototype={
$1(d){return D.hxM},
$S:z+74}
C.eqm.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmn:A.N5,s=B.L(A.aC.j(0.25),A.r,1),r=B.as(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.q(v,D.c1b,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c5.j(0.35),A.eu,10)],x.V),D.asY,A.n),v,v,v,v,A.yG,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0z,B.x(B.a([r,A.aB,B.A(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:A2.N1,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bH,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fvd,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.l,v,A.e,A.j,0,v,v)],w),A.l,v,A.e,A.j,0,A.p),v),B.E(B.ip(!0,v,e,A.y,D.aTN,new C.eql(this.b),19,D.am9,v,A.ah,!1),1)],w),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.mF,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.eql.prototype={
$2(d,e){var w=D.SF[e]
return new C.agb(w,new C.eqk(this.a,w),null)},
$S:z+75}
C.eqk.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fR4.prototype={
$0(){return B.heS(C.icO(this.a))},
$S:335}
C.fR3.prototype={
$0(){var w=C.hgf(this.a)
return"data:image/png;base64,"+A.cP.gcu().aN(w)},
$S:23}
C.fr9.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jr(d,e),new B.jr(w,e+v),new B.jr(d+f*14,e),new B.jr(w,e-v)],x.J)
B.a34(this.a,C.fG(4291404327),v)},
$S:696}
C.h23.prototype={
$1(d){return new C.X1(this.a,null)},
$S:z+77}
C.etj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eti())},
$S:32}
C.eti.prototype={
$0(){},
$S:0}
C.etk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eth(w,d))},
$S:1698}
C.eth.prototype={
$0(){return this.a.x=J.eT(A.dO.gaU(this.b))},
$S:0}
C.etl.prototype={
$1(d){},
$S:29}
C.esW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.et2.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.et3.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eGj)},
$S:0}
C.et4.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esY.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.ce)},
$S:0}
C.esZ.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.et_.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.et0.prototype={
$0(){return this.a.as=!1},
$S:0}
C.et1.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mq(v,A.dH,A.iu)}},
$S:7}
C.esX.prototype={
$0(){var w=this.a,v=w.z,u=C.fRL(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOc(C.fRL(t))},
$S:0}
C.esU.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.esV.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eta.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.etb.prototype={
$0(){var w=this.a
return w.m(new C.et9(w))},
$S:0}
C.et9.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.etc.prototype={
$0(){var w=this.a
return w.m(new C.et8(w,this.b))},
$S:0}
C.et8.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.etd.prototype={
$1(d){var w=this.a
return w.m(new C.et7(w))},
$S:9}
C.et7.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ete.prototype={
$1(d){var w=this.a
return w.m(new C.et6(w))},
$S:9}
C.et6.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.etf.prototype={
$0(){var w=this.a
return w.m(new C.et5(w,this.b))},
$S:0}
C.et5.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.etg.prototype={
$1(d){return this.a.a_S()},
$S:2}
C.esT.prototype={
$0(){return this.a.cdk(this.b)},
$S:0}
C.cj6.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:342}
C.cj4.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cj5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQF.prototype={
boB(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTJ(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKt($.rj().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mX(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boB(d,e)},
$S:1699}
C.fOX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOZ.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fOY.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cs,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.ra,A.bX,t,A.dz,A.bY)
v=this.a
w.o6(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fqJ.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fqK(),B.U(w).k("Y<1>")).gI(0)},
$S:270}
C.fqK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqH.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:226}
C.fqI.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:226}
C.cj7.prototype={
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
o=C.hfW(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcz(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gclH(),"\n\n")
d=B.fq(a6,A.cs,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afz(k,q,1.28),j),A.ra,A.bX,a6,A.dz,A.bY)
d.o6(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hfW(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcz(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afz(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bc,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.ra,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCq(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:431}
C.cj8.prototype={
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
l=C.hfW(f,new B.G(!0,e,a5,i,a5,a5,h,A.cT,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hcz(g.length===0?B.a([a6],n):g,l))break}a1=o.afz(i,h,1.28)
a2=new C.cj9(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Km,new B.a5(v,a5,a4.f,a5),A.Km,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHK,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bc,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.ra,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCq(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.l,a5,A.e,A.j,0,A.p)},
$S:152}
C.cj9.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.ra,w,w),w)},
$S:697}
C.h26.prototype={
$1(d){return new C.X2(this.a,this.b,null)},
$S:z+79}
C.eu5.prototype={
$1(d){return d.lb()},
$S:1701}
C.eu6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eu4(w,d))},
$S:1702}
C.eu4.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.etT.prototype={
$0(){return this.a.y=!0},
$S:0}
C.etU.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eu_.prototype={
$0(){return B.a6(this.a,!1).eA()},
$S:0}
C.eu0.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bD,A.r,2.5)
return B.az(w,B.q(w,B.b3(w,w,w,new C.be9(u,v.gazt(),w),A.fN),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etY(v),new C.etZ(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.etY.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:263}
C.etZ.prototype={
$1(d){var w=this.a
w.m(new C.etV(w,d,this.b,this.c))},
$S:213}
C.etV.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazt()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eu1.prototype={
$1(d){var w=this.a
return w.m(new C.etX(w,this.b))},
$S:9}
C.etX.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eu2.prototype={
$1(d){var w=this.a
return w.m(new C.etW(w,d))},
$S:6}
C.etW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eu3.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h2m.prototype={
$1(d){return D.hAz},
$S:z+83}
C.f34.prototype={
$1(d){return this.a.Zs()},
$S:7}
C.f1X.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aN(v)},
$S:0}
C.f2k.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f2u.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f1G.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1H.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1E.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1F.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2d.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f2e(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jl(B.t3(q>0.2?F.bX9(r,new B.Et(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jl(B.d3(B.t3(F.bX9(s.$1(!0),new B.Et(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.e9(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c2(v,new B.p(v,v,v,v,v,new B.bY(D.b2k,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bj))}s=t.aL
if(s>0)q.push(B.c2(v,new B.p(v,v,v,v,v,new B.bY(D.b24,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bj))
s=t.aR
if(s>0)q.push(B.c2(v,new B.p(v,v,v,v,v,new B.a8(A.b7,A.b9,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d87,v),A.n),A.bj))
if(t.aH>0){s=t.k1
q.push(B.ap(v,B.c2(v,new B.p(v,v,v,v,v,new B.a8(A.b7,A.b9,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.djZ,v),A.n),A.bj),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.e9(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c2(v,new B.p(v,v,v,v,v,new B.bY(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dgN,v),A.n),A.bj))
t=t.aG
if(t>0)q.push(B.b3(v,v,v,new C.bhL(t,v),A.az))
return new B.an(A.a0,v,A.b3,A.t,q,v)},
$S:67}
C.f2e.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZP(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
s=o.c5?-1:1
return B.dN(B.e1(A.A,B.eN(A.A,l,B.fz(A.A,new B.BK(new B.uS(q,q,n,A.y1),p,q),q,B.wo(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:559}
C.f2q.prototype={
$0(){return this.a.m(new C.f2p(this.b,this.c))},
$S:0}
C.f2p.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2r.prototype={
$1(d){return this.a.m(new C.f2o(this.b,d))},
$S:6}
C.f2o.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2t.prototype={
$0(){return this.a.m(new C.f2s(this.b,this.c))},
$S:0}
C.f2s.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1w.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f1x.prototype={
$1(d){var w=this.a
return w.m(w.gcDS())},
$S:2}
C.f1y.prototype={
$1(d){return this.a.m(new C.f1v())},
$S:2}
C.f1v.prototype={
$0(){},
$S:0}
C.f1z.prototype={
$0(){var w=this.a
return w.m(new C.f1u(w,this.b))},
$S:0}
C.f1u.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f1B.prototype={
$2(d,e){return A.au},
$S:36}
C.f1A.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bA
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b1,new B.p(w,w,q,s,w,new B.a8(A.b7,A.b9,A.x,r,w,w),A.n),A.h2,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fO,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1t(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.f1t.prototype={
$0(){var w=this.a
return w.m(new C.f1q(w,this.b))},
$S:0}
C.f1q.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1C.prototype={
$1(d){var w=this.a
return w.m(new C.f1s(w,d))},
$S:9}
C.f1s.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f1D.prototype={
$1(d){var w=this.a
return w.m(new C.f1r(w,d))},
$S:9}
C.f1r.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f2U.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f30.prototype={
$1(d){var w=this.a
return w.m(new C.f31(w,d))},
$S:31}
C.f31.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f32.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:174}
C.f2V.prototype={
$0(){var w=this.a
return w.m(new C.f2T(w,this.b))},
$S:0}
C.f2T.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f2W.prototype={
$0(){var w=this.a
return w.m(new C.f2S(w,this.b))},
$S:0}
C.f2S.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f2X.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f2R(v,w.b,w.c,w.d))},
$S:0}
C.f2R.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f2Y.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gte(v))},
$S:0}
C.f2Z.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3_.prototype={
$0(){var w=this.a
return w.m(new C.f2Q(w))},
$S:0}
C.f2Q.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f2D.prototype={
$1(d){return d.a===this.a.dy},
$S:218}
C.f2E.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aB9[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azx(new B.ns(new B.be(n,n,n,n),A.aq,new B.kT(new B.p(j,j,j,j,j,new B.a8(A.a7,A.aa,A.x,m,j,j),A.n),A.bj,new C.b1g(l,B.b0(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f2C(r,v),2,i))}return B.bV(A.bG,h,A.bs,j,7,7)},
$S:161}
C.f2C.prototype={
$0(){var w=this.b
return w.m(new C.f2x(this.a,w))},
$S:0}
C.f2x.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f2F.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:148}
C.f2I.prototype={
$0(){var w=this.a
return w.m(new C.f2B(w))},
$S:0}
C.f2B.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f2J.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f2K.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f2L.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f2M.prototype={
$0(){var w=this.a
return w.m(new C.f2A(w))},
$S:0}
C.f2A.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f2N.prototype={
$0(){var w=this.a
return w.m(new C.f2z(w))},
$S:0}
C.f2z.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f2O.prototype={
$0(){var w=this.b
return w.m(new C.f2y(this.a,w))},
$S:0}
C.f2y.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f2P.prototype={
$1(d){return this.a.fx=d},
$S:148}
C.f2G.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f2H.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f2h.prototype={
$0(){var w=this.a
return w.m(new C.f2g(w))},
$S:0}
C.f2g.prototype={
$0(){var w=this.a
w.p4=null
w.b68()},
$S:0}
C.f2i.prototype={
$0(){var w=this.a
return w.m(new C.f2f(w,this.b))},
$S:0}
C.f2f.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2j.prototype={
$0(){var w=this.a
return w.m(w.gcue())},
$S:0}
C.f29.prototype={
$0(){var w=this.a
return w.m(new C.f28(w))},
$S:0}
C.f28.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f2a.prototype={
$0(){var w=this.a
return w.m(new C.f27(w))},
$S:0}
C.f27.prototype={
$0(){var w=this.a
w.aH=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f2b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dhd[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azx(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BK(new B.uS(o,o,v.aZP(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.y1),B.fR(u,A.A,140,o,A.cj,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f26(v,s),3,n))}return B.bV(A.bG,m,A.bs,o,10,8)},
$S:161}
C.f26.prototype={
$0(){var w=this.a
return w.m(new C.f25(w,this.b))},
$S:0}
C.f25.prototype={
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
C.f1O.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f1P.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f1Q.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f1R.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f1S.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f1T.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f1U.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f1V.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f1W.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f19.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f1a.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f1b.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f1c.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f1d.prototype={
$0(){var w=this.a
return w.m(new C.f18(w))},
$S:0}
C.f18.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f1e.prototype={
$1(d){return this.a.b8=d},
$S:148}
C.f1f.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f1I.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f1J.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f1K.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f1L.prototype={
$1(d){return this.a.bf=d},
$S:148}
C.f1M.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f1j.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f1k.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f1l.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f1m.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f1n.prototype={
$0(){var w=this.a
return w.m(new C.f1i(w))},
$S:0}
C.f1i.prototype={
$0(){var w=this.a
return w.c8=A.i.F(w.c8+90+180,360)-180},
$S:0}
C.f1o.prototype={
$0(){var w=this.a
return w.m(new C.f1h(w))},
$S:0}
C.f1h.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f1p.prototype={
$0(){var w=this.a
return w.m(new C.f1g(w))},
$S:0}
C.f1g.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.f2c.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.it2(v,w.p4)},
$S:0}
C.f24.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bwc:B.fR(v,A.A,w,w,A.cj,A.c_,!1,w,!1,w,w)
return C.fP4(d.length===0?"rounded":d,u,e)},
$S:129}
C.f20.prototype={
$0(){var w=this.a
return w.m(new C.f2_(w))},
$S:0}
C.f2_.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f21.prototype={
$0(){var w=this.b
return w.m(new C.f1Z(this.a,w))},
$S:0}
C.f1Z.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f22.prototype={
$0(){var w=this.b
return w.m(new C.f1Y(this.a,w))},
$S:0}
C.f1Y.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f23.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f2n.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ac(-4,A.G,A.b8.j(0.35),A.H,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.cnD(),n.r))
l.push(new C.JG(n.cAN(),!1,!1,t))
o=B.bR(0,B.by(o,new B.en(new B.an(A.a0,t,A.b3,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.q(t,new B.an(A.a0,t,A.ab,A.t,B.a([o,B.ap(t,B.az(A.c2,B.c2(t,new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bj),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f2m(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:235}
C.f2m.prototype={
$1(d){var w=this.a
return w.m(new C.f2l(w,d,this.b,this.c))},
$S:19}
C.f2l.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f2w.prototype={
$0(){var w=this.a
return w.m(new C.f2v(w,this.b))},
$S:0}
C.f2v.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f1N.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f33.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1L(),B.E(B.as(w.b4M(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aSI(),1),w.aOL()],v),A.l,t,A.e,A.j,0,A.p),1)],v),A.l,t,A.e,A.j,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1L(),new B.D(A.hH,B.as(s.b4M(u),t,t,t),t),B.E(s.aSI(),1),s.aOL()],x.p),A.l,t,A.e,A.j,0,A.p)},
$S:622}
C.fMl.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bDa(),null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.V)},
$S:z+98}
C.fMk.prototype={
$3(d,e,f){var w=this,v=C.bDa(),u=w.b?A.I:A.cD,t=w.c?A.cH:A.bt
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bk,4280172719,2,d,0,w.f,w.e,D.ct,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.ckC.prototype={
$1(d){return B.w(d)},
$S:17}
C.fU7.prototype={
$0(){return this.a},
$S:z+15}
C.fyP.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fyQ.prototype={
$2(d,e){return J.cr(e)},
$S:z+31}
C.fU9.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fUc.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fUd.prototype={
$0(){return A.d.gH(D.x0)},
$S:z+33}
C.fU5.prototype={
$1(d){return d.a},
$S:z+16}
C.fU8.prototype={
$1(d){return d.a},
$S:z+16}
C.fS3.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fS4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fS5.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMp.prototype={
$0(){return C.cE()},
$S:23}
C.fMs.prototype={
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
C.fMr.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fMq.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ct,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bk,4280172719,2,"",t,0,"",u,D.lS,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r0,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fMo.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fOQ.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hz5.c3(0,A.a.i(s.w).toLowerCase(),new C.fOO(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fOP(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.bqW(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1705}
C.fOO.prototype={
$0(){return F.aPD(this.a.w)},
$S:199}
C.fOP.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bC3("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:199}
C.fqD.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fqE.prototype={
$1(d){return d.a},
$S:z+18}
C.fqF.prototype={
$1(d){return d.b},
$S:z+19}
C.h2y.prototype={
$1(d){return D.hBk},
$S:z+41}
C.f9r.prototype={
$0(){return this.a.x=C.i3M(this.b,this.c.b)},
$S:0}
C.f9s.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f9p.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:479}
C.f9q.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:479}
C.f9o.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.as,null,new C.f9j(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kf,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f9k(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hFl(o,m.cOZ(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f9l(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f9j.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f9n(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bcu,A.f,p,p,D.b7p,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.De:D.Dl,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fP4(v,i.b6L(h),u),p)))}t=B.kW(1,m,4,10,10,p,A.dX,!0)
if(!l)return B.bm(!0,new B.D(Ab.yN,t,p),!0,!1,A.ag,!0,!0)
s=new C.f9m(i,d)
m=B.aF(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ig[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.x(B.a([D.fNL,A.X,t,A.e0,D.f8W,A.ax,D.fYY,A.X,B.kW(1.15,l,3,10,10,p,A.dX,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Ab.yN,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.f9n.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bp:A.dl
return B.az(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hI,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f9i(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1706}
C.f9i.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f9m.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bM:A.bA
r=B.L(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.q(v,B.by(w,d.length===0?B.q(v,D.as6,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.On(u.Ge(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bM:A.ac,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9h(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:129}
C.f9h.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f9k.prototype={
$0(){var w=this.a
return w.w=w.w.Ge("")},
$S:0}
C.f9l.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f97.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f98.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f9a.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f9b.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f9c.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f9d.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f99(w,d))},
$S:2}
C.f99.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f9e.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f9F.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f9G.prototype={
$0(){var w=this.a
return w.m(new C.f9E(w))},
$S:0}
C.f9E.prototype={
$0(){return this.a.e=null},
$S:0}
C.f9H.prototype={
$0(){var w=this.a
return w.m(new C.f9D(w))},
$S:0}
C.f9D.prototype={
$0(){return this.a.x=null},
$S:0}
C.f9J.prototype={
$1(d){var w=this.a
return w.m(new C.f9C(w,d))},
$S:35}
C.f9C.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f9K.prototype={
$1(d){var w=this.a
return w.m(new C.f9B(w,d))},
$S:35}
C.f9B.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9L.prototype={
$0(){var w=this.a
return w.m(new C.f9A(w))},
$S:0}
C.f9A.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f9M.prototype={
$1(d){var w=this.a
return w.m(new C.f9z(w,d))},
$S:35}
C.f9z.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f9N.prototype={
$1(d){var w=this.a
return w.m(new C.f9y(w,d))},
$S:35}
C.f9y.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f9O.prototype={
$0(){var w=this.a
return w.m(new C.f9x(w))},
$S:0}
C.f9x.prototype={
$0(){var w=this.a
return w.w=w.w.Ge("")},
$S:0}
C.f9P.prototype={
$0(){var w=this.a
return w.m(new C.f9w(w,this.b))},
$S:0}
C.f9w.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f9Q.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSQ(D.a5K[v]),null))
return B.bV(A.bG,t,A.bs,null,8,8)},
$S:161}
C.f9I.prototype={
$1(d){var w=this.a
return w.m(new C.f9v(w,d))},
$S:9}
C.f9v.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f9f.prototype={
$0(){var w=this.a
return w.m(new C.f9g(w,this.b,this.c))},
$S:0}
C.f9g.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f9u.prototype={
$0(){var w=this.a
return w.m(new C.f9t(w,this.b))},
$S:0}
C.f9t.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h2x.prototype={
$1(d){return new C.a1F(this.a,this.b,null)},
$S:z+42}
C.f90.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f91.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f92.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aL4?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f93.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f94.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9_(w,d))},
$S:2}
C.f9_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f95.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f96.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bB,w.length),A.aR))},
$S:0}
C.fy5.prototype={
$1(d){return d.a===this.a},
$S:218}
C.epM.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazy(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d1B:D.djH
t=D.ys.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.ys.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.H,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bR(0,B.b3(q,q,q,new C.bk2(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bU_(B.eN(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a8(A.a7,A.aa,A.x,B.a([A.L,D.bkq.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.by(s,new B.an(A.a0,q,A.ab,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ec:A.mk,D.ys,q,q,q,20),A.ax,B.ev(A.A,B.og(A.jT,D.fH0,new C.epL()),A.f,A.e4)],r),A.l,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.q(q,D.fDt,A.f,q,q,new B.p(D.ys,q,q,B.l(6),q,q,A.n),q,q,q,q,P.amR,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a8(A.aA,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:87}
C.epL.prototype={
$1(d){return D.c6U.aK(0,d)},
$S:73}
C.fUe.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fUf.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:218}
C.fUg.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1707}
C.fUh.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fUa.prototype={
$1(d){return d.a},
$S:z+18}
C.fUb.prototype={
$1(d){return d.b},
$S:z+19}
C.h1L.prototype={
$1(d){return new C.a03(this.a,this.b,null)},
$S:z+44}
C.dsB.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsC.prototype={
$1(d){return d.a===this.a.gajS()},
$S:z+10}
C.dsD.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dsG.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dsH.prototype={
$0(){var w=this.a
return w.m(new C.dsF(w,this.b))},
$S:0}
C.dsF.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dsI.prototype={
$1(d){var w=this.a
return w.m(new C.dsE(w,d))},
$S:9}
C.dsE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.epK.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1708}
C.fmL.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ct,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fmN.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bt,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bk,4280172719,2,d,l,0,"",D.n9,D.cW,g,e,f)},
$S:z+46}
C.fmM.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xd(0,"twinkle")
w=t===D.bk?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n9,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fmK.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fNw.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fNx.prototype={
$0(){return A.d.gH(D.Ip)},
$S:z+49}
C.fNy.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fp_.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fTH.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bk,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bk,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fL,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTI.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bk,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bk,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bk,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fL,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fL,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTJ.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bk,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kd,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kd,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fL,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTU.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kd,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kd,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.kc,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bk,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTZ.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.kc,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bk,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fL,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bk,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU_.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kd,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bk,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fL,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fU0.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d0t[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.bk,v,4294967295,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fL,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fU1.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mS,A.dj,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DZ,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fL,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fU2.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bk,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.kc,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fL,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU3.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bk,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fL,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kd,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU4.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kd,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bk,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bk,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTK.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.kc,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.kc,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fL,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fTL.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.kc,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.kc,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.kc,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eZ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fTM.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bk,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bk,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kd,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.kc,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fL,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fTN.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bk,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.kc,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.kc,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fL,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fTO.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lt,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lt,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lt,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lt,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lt,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fL,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTP.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kd,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eZ,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fL,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTQ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mS,A.dj,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DZ,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bk,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fL,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTR.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aG,s,A.bn,null,D.fL,t,t,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bk,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bk,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fL,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTS.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bk,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fL,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fTT.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,4294967295,4280640491,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lj
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.d6,A.co,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eQ("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,u,q,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bk,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.kc,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fTV.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kd,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kd,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kd,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kd,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bk,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eZ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTW.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bk,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eZ,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eZ,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eZ,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kd,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTX.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bk,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bk,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bk,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eZ,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fL,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.eZ,16777215,t,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fTY.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kd,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kd,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bk,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fLm.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fLn.prototype={
$0(){return A.d.gH($.bGP())},
$S:z+52}
C.fxo.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fxn.prototype={
$1(d){return C.ibK(d,this.a,this.b)},
$S:z+53}
C.fUn.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wo(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUJ(B.i0J(A.vP,C.ibN(w.c,w.d,v,u),t)))},
$S:477}
C.e3e.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e3d.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c2(w,new B.p(w,w,w,w,w,new B.bY(A.Fd,1.2,A.x,w,0,u.d,w,w),A.n),A.bj),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jl(new B.an(A.a0,w,A.b3,A.t,B.a([t,new B.en(B.b3(w,w,w,new C.bgQ(u.a,r,q,r),A.az),w),B.as(new B.k3(r,new C.e3c(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:343}
C.e3c.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e_.aA(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.H,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hU(B.fR(i,A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fZ(A.A,0,6.283185307179586,A.x,t,r,new B.mM(e*0.8)),A.a6),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btL(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.H,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dN(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a8(A.a7,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNm(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.P,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.d3(B.e1(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f8d.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:73}
C.cf2.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bM:A.bA
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i6.j(0.4),A.H,14)],x.V):v
w=B.cT(v,B.by(B.l(12),d,A.aq),v,v,A.b1,new B.p(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fO,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bM:A.ac,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1709}
C.cf3.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ge(""))},
$S:0}
C.cf4.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.On(v.Ge(u),!0,!1,null),null),d.b,new C.cf5(w,this.c,d),v.a===u)},
$S:z+54}
C.cf5.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hFl(u.b,t.c.Ge(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h0a.prototype={
$1(d){return new C.a_B(this.a,null)},
$S:z+55}
C.dhP.prototype={
$0(){var w=this.a
w.d=w.gwg().bf1("data:"+this.b+";base64,"+A.cP.gcu().aN(this.c));++w.r},
$S:0}
C.dhU.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhV.prototype={
$0(){var w=this.a
return w.m(new C.dhT(w))},
$S:0}
C.dhT.prototype={
$0(){return this.a.r++},
$S:0}
C.dhW.prototype={
$1(d){var w=this.a
return w.m(new C.dhS(w,d))},
$S:2}
C.dhS.prototype={
$0(){var w=this.a
return w.d=w.gwg().aG0(this.b)},
$S:0}
C.dhX.prototype={
$0(){var w=this.a
return w.m(new C.dhR(w))},
$S:0}
C.dhR.prototype={
$0(){var w=this.a
return w.d=w.gwg().bf1("")},
$S:0}
C.dhY.prototype={
$1(d){var w=this.a
return w.m(new C.dhQ(w,d))},
$S:2}
C.dhQ.prototype={
$0(){var w=this.a
return w.d=w.gwg().bf7(this.b)},
$S:0}
C.dhZ.prototype={
$0(){var w=this.a
w=w.gwg().bf7(w.gazz().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h09.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h08(w),null)},
$S:20}
C.h08.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.85),B.cd(B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fVY,A.ax,D.fWd,A.aB,new C.b1d(v.a,new C.h07(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7Y,w,w,w,w,A.O7,w,w,w)},
$S:170}
C.h07.prototype={
$1(d){this.b.$1(new C.h06(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.h06.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h2w.prototype={
$1(d){return D.huN},
$S:z+57}
C.doD.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.doE.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.doF.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fQY.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:73}
C.dhw.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.Q().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c7(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c7(w,q+p,w,q+p*1.2))
u.E(new B.DR(B.bX(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:447}
C.fR1.prototype={
$2(d,e){return A.i.aS(d.c,e.c)},
$S:z+58}
C.fJm.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fJn.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yQ,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fDL,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dh(D.HY,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJk(d),B.bp(A.c5,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oG,D.VW,new C.fJl(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cp,w,w,R.xO,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJk.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJl.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ckA.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.ckB.prototype={
$1(d){return d.aj()},
$S:z+60}
C.ckz.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.i.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i7i(b2.h(0,"type"))
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
n=A.aDg[A.o.D(b4,0,8)]
m=D.d3G[A.o.D(w,0,1)]
l=C.ib8(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.i.M(k)
if(k==null)k=4279310375
j=A.azC[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.idX(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.i.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.i.M(f)
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
a2=a2==null?b1:A.i.M(a2)
if(a2==null)a2=0
a3=C.hAc(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.i.M(a4)
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
b2=b2==null?b1:A.i.M(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ckp.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.ckq.prototype={
$1(d){return d.aj()},
$S:z+63}
C.ckm.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckn.prototype={
$1(d){return B.w(d)},
$S:17}
C.cko.prototype={
$1(d){return C.hqK(B.a3(d,x.N,x.z))},
$S:z+64}
C.ckR.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckS.prototype={
$0(){return A.d.gH(D.a5m)},
$S:z+66}
C.ckM.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.ckL.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckH.prototype={
$1(d){return new B.N(d,new C.ckI(),B.U(d).k("N<1,V>")).f1(0,new C.ckJ())},
$S:z+69}
C.ckI.prototype={
$1(d){return d.f},
$S:z+70}
C.ckJ.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:700}
C.ckK.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hXt(d)},
$S:z+71}
C.ckN.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.ckO.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckP.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fRD.prototype={
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
C.fRz.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fRA.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fRB.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fRC.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ckv.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.in1(b2,b3),b5=B.a4(b4).k("b7<2>")
b5=B.cF(new B.b7(b4,b5),new C.cku(),b5.k("M.E"),x.N)
w=B.d2(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qt.aA(0,A.i.D(b1,0,1))
u=new C.ckw()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckx(a9,b7.d)
r=new C.cky(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jD.aA(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kG(A.i.D(1-k,0,1),B.dN(B.e1(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fi){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lS&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b3,A.t,B.a([new B.kG(A.i.D(o,0,1),r.$1(l),a8),new B.kG(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wS(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ct)a7=D.n9
p.push(s.$5(i.c,i.d,i.e,i.f,C.hCJ(a7,a6,r.$1(i))))}}return B.c2(new B.an(A.a0,a8,A.ab,A.t,p,a8),new B.p(a8,a8,a8,a8,a8,new B.a8(A.a7,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bj)},
$S:446}
C.cku.prototype={
$1(d){return d.a},
$S:z+22}
C.ckw.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ckx.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1713}
C.cky.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8R(v,C.b3l(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQ9.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e1(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ckE.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckF.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fUu.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:300}
C.fTB.prototype={
$1(d){return new C.aey(this.a,this.b,null)},
$S:z+78}
C.eC5.prototype={
$0(){return this.a.QF(this.b,C.iqY(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eC6.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QF(this.b,C.ir_(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eC7.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QF(this.b,C.iqZ(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eC8.prototype={
$0(){A1.hCt()
B.a6(this.a,!1).O(null)},
$S:0}
C.ckt.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1714}
C.cks.prototype={
$2(d,e){var w,v=this,u=null,t=B.dP(d,A.o0),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.i.V(A.i.D(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dB
return B.fR(t,A.A,o,new C.ckr(),A.cj,w,!0,u,!1,new B.bG("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1715}
C.ckr.prototype={
$3(d,e,f){return D.af5},
$S:214}
C.fRy.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fRx(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c2(new B.an(A.a0,t,A.ab,A.t,r,t),new B.p(v,t,t,t,t,w,A.n),A.bj),A.aq)},
$S:1716}
C.fRx.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3l(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fA8.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fA6(d))
w=B.aF(d,A.c1,x.w).w
v=B.l(22)
u=B.L(A.bA,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h5,28)],x.V)
s=x.p
return new B.d1(e,!1,B.as(B.aI(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jP,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bN(!1,A.AT,q,q,!0,q,q,q,new C.fA7(p,d),q,B.fu(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cf,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h4,A.GV,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:251}
C.fA6.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pX())B.a6(w,!0).eA()},
$S:0}
C.fA7.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eA()},
$S:0}
C.fgN.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.dN(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.dN(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.dN(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.dN(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fz(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fz(A.aa,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.d3(B.e1(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLl(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLl(1-r,t))],x.p),t)
case 16:v=A0.XK.aA(0,r)
return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.d3(B.e9(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n0(r*6.28)
s.k5(r,r,r,1)
return B.fz(A.A,u.b,t,s,!0)
case 20:return B.eN(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b3,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:69}
C.e0Y.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0X.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0W.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hCJ(v,w,e)},
$S:69}
C.ckl.prototype={
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
q=B.C(new B.N(v,new C.ckk(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c2(new B.an(A.a0,r,A.ab,A.f,q,r),new B.p(t,r,r,r,r,u,A.n),A.bj)},
$S:446}
C.ckk.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ct?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8R(m,new C.Wj(d,C.b3l(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.deJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.deI(w))},
$S:12}
C.deI.prototype={
$0(){return this.a.d++},
$S:0}
C.eps.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSN.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.imJ(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fz(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dN(B.e1(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e1(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:69}
C.f5I.prototype={
$1(d){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dQ
return w},
$S:1717}
C.fP5.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.btE(u,t,r),A.az))
w.push(B.nW(s.d,A.aq,new C.bhm(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bsB(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b3,A.t,w,r),r),r,r,r)},
$S:230}
C.fDf.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:301}
C.eIj.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.DB(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eIh(),new C.eIi(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1718}
C.eIh.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:198}
C.eIi.prototype={
$0(){return J.fs(this.a)},
$S:1720}
C.eEH.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eEI.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eEJ.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eGh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eG5.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eG6.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eE4.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eHp.prototype={
$0(){this.a.uc()},
$S:0}
C.eIf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oE()
w.KP()},
$S:0}
C.eGf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oE()
w.KP()},
$S:0}
C.eI2.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eI3.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eI4.prototype={
$1(d){return d.a},
$S:z+22}
C.eI5.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aR),$.aw())},
$S:265}
C.eI6.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:703}
C.eDt.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIg.prototype={
$0(){},
$S:0}
C.eFo.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yc()
w.KP()},
$S:0}
C.eDr.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yc()},
$S:0}
C.eDs.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yc()},
$S:0}
C.eFL.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eFM.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yc()
w.KP()
w.z="Home"},
$S:0}
C.eFN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFn.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VV,w,w,!0,w,w,w,new C.eFm(d),w,w)],x.p),w,w,w,D.fXQ,w,w,w,w,D.fEc,w)},
$S:18}
C.eFm.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFk.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VV,w,w,!0,w,w,w,new C.eFj(d),w,w)],x.p),w,w,w,D.fIo,w,w,w,w,D.fG2,w)},
$S:18}
C.eFj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFl.prototype={
$0(){},
$S:0}
C.eED.prototype={
$1(d){return this.a.b38(C.bEQ(d))},
$S:z+7}
C.eEE.prototype={
$1(d){return this.a.ags(C.bEQ(d))},
$S:z+7}
C.eFu.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aU,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fXU,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.QB(A.wE,D.aAZ,"HATI YA KUHOWA","Hati ya mahari",new C.eFp(d),w),A.X,new C.QB(A.hy,D.dhf,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eFq(d),w),A.X,new C.QB(A.hK,D.d1G,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eFr(d),w),A.X,new C.QB(A.id,D.d_J,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eFs(d),w)],v)
if(this.a.gacH())A.d.v(u,B.a([A.X,new C.QB(A.jq,D.cLB,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eFt(d),w)],v))
return B.bm(!0,B.cd(B.x(u,A.al,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yQ,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:25}
C.eFp.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eFq.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eFr.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eFs.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eFt.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eFv.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yc()},
$S:0}
C.eDv.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eDw.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
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
C.eFG.prototype={
$1(d){return d.b===D.lS},
$S:z+4}
C.eFH.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eFE(w,this.a,v),null)},
$S:20}
C.eFE.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eFF(p,o,a3,n),l=B.S(a2).ax.a===A.J,k=l?A.c:A.U,j=l?A.aT:A.am,i=l?A.bq:A.bO,h=l?A.U:A.c,g=B.l(28),f=B.L(l?A.bA:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bH,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cy,j,q,q,q,q),q,q,q,new C.eFA(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dl[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjW(t,u.b,p.a===t,i,k,new C.eFB(v,m),q))}a1=B.bV(A.bG,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.De[w]
s.a=null
t=s.a=r.a
u.push(new C.bjV(t,r.b,p.b===t,k,j,new C.eFC(s,m),q))}return B.bm(!0,B.q(q,B.cd(B.x(B.a([d,A.aQ,a0,A.X,a1,A.bz,v,A.X,B.bV(A.bG,u,A.bs,q,12,12),A.bz,new B.a5(1/0,48,B.es(D.c2V,D.h_j,new C.eFD(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aF,q,q,q,q,new B.b9(B.l(16),A.a1),D.b5t,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.ut,D.bE5,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eFF.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eFy(w.a,d,e))
w.b.dc(new C.eFz(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1723}
C.eFy.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eFz.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eFA.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFB.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eFC.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eFD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hw(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eFx(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFx.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eFJ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFK.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eFI(t.d))
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
s.yc()},
$S:0}
C.eFI.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eG0.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eG1.prototype={
$1(d){return d.w},
$S:z+82}
C.eG2.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eG3.prototype={
$1(d){var w=this,v=null,u=B.S(d).ax.a===A.J,t=u?A.c:A.U,s=u?A.aT:A.am,r=u?A.bq:A.aP,q=u?A.U:A.c,p=B.l(28),o=B.L(u?A.bA:A.aO,A.r,1),n=B.aF(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bXk,A.f,v,v,D.b6Q,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cy,s,v,v,v,v),v,v,v,new C.eFY(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.j,0,v,v),A.aB,new B.dl(1,A.cm,B.hP(v,new C.eFZ(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.eG_(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.ut,A.a0r,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eFY.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eG_.prototype={
$2(d,e){return A.af},
$S:36}
C.eFZ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aF:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cD
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.c_F,q,q,q,new C.eFW(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bGl,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.l(16),A.a1),q,A.eY,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b58),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eFX(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ad,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:704}
C.eFW.prototype={
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
o=p.geD()?p.a:q.a.length
n=p.geD()?p.b:q.a.length
m=A.a.ob(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bB,o+s.length),A.aR))
l.akv(k,m)
l.pJ()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFX.prototype={
$1(d){var w=this.a
w.akv(this.b.a,d)
w.pJ()},
$S:2}
C.eG4.prototype={
$0(){},
$S:0}
C.eFw.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDM.prototype={
$0(){},
$S:0}
C.eDN.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hE3(this.b,w,!0)
w=this.a
w.r=null
w.yc()},
$S:0}
C.eDO.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eDP.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eDL(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yc()},
$S:0}
C.eDL.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGa.prototype={
$1(d){return B.pi(new C.eG9(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:137}
C.eG9.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amw,B.x(B.a([D.fVk,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.ip(!0,w,e,A.y,D.ffS,new C.eG8(this.a,this.b),20,A.uw,w,A.ah,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:435}
C.eG8.prototype={
$2(d,e){var w=null,v=D.Ip[e],u=C.hXo(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fY,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.q(w,D.f8S,A.f,w,w,new B.p(A.dK.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n0,w,w,w)],m))
return B.aI(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.l,w,A.e,A.j,0,w,w),A.b5,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a8(A.a7,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eG7(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:81}
C.eG7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckD(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGb.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yc()},
$S:0}
C.eCq.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rY(4294967295,null,0,0,null,C.cE(),D.n8,"","","",D.dm),s=this.b
C.ckQ(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DY){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDK.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hqK(q));++v.f},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eGj.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eDE.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eDD(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eDD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGi.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eDu.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aR),$.aw())},
$S:265}
C.eE5.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:703}
C.eI0.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eI1.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avt(w).fW()
v=u.Xx(w)
v.stV(B.hh(A.bB,v.a.a.length))},
$S:7}
C.eHq.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yx(v)
if(u!=null&&u.b===D.cW)w.Xx(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eCr.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bn,!1,v.gqT().e.l(),A.aG,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bk,4280172719,2,"Tap to edit text",0,0,"",D.ct,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCo.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqT().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqT().c.l(),2,"",0,0,"",D.ct,D.fi,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCe.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lS,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eCb.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c9T],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal8().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUZ,r,r,r,r,new C.eCa(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCa.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eCc.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.Y.aw(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bk,4280172719,2,t,0,0,"",D.ct,D.a82,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eDG.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eDH.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eDF(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eDF.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eCT.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eCU(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eCU.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eCY.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eCZ(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eCZ.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eCW.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eCX(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eCX.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eF(w,new C.eCV()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eCV.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCS.prototype={
$0(){return C.ckQ(this.b,this.c,this.a.gqT())},
$S:0}
C.eFV.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eI9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIa.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eIb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIc.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eI8(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTa()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yc()
t.KP()}},
$S:0}
C.eI8.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eHG.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acL(),s=w.b,r=u.acM(A.fo,A.jL,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.T,r,A.bz,B.q(v,B.A(B.a([B.E(u.aXL(w.c,A.am),1),new B.D(A.fI,B.q(v,D.bV4,A.f,v,v,new B.p(A.fo.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aXL(s,A.fo),1)],n),A.l,v,A.e,A.j,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a8(A.aA,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bF,v,v,v),A.bz,u.aXO(A.fo,d,D.bRb,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c1l(A.aH,d,A.uL,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXM(d,"Not now"))
return new C.KO(B.x(p,A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eHF.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KO(B.x(B.a([v.acL(),A.T,v.acM(A.aH,D.bQR,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.42),B.hP(w,new C.eHD(v,u,d),u.length,w,w,A.ah,new C.eHE(),!0),w),A.aB,v.aXM(d,"Cancel")],x.p),A.al,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eHE.prototype={
$2(d,e){return A.X},
$S:36}
C.eHD.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aI(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.arB,A.f,w,w,new B.p(w,w,w,B.l(12),w,D.c6P,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ng,w,w,w),A.cU,B.d("Updated "+this.a.QG(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHC(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:81}
C.eHC.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eHz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acL()
t=t.acM(A.av,A.uV,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KO(B.x(B.a([s,A.T,t,A.bz,B.A(B.a([B.E(B.dU(A.aby,new C.eHx(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cp,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bJ(D.fGD,u,new C.eHy(d),B.bp(A.fo,u,u,u,A.c,u,A.cp,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eHx.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eHy.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eHB.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acL(),s=w.b,r=u.acM(A.aX,A.ec,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awN("Names",""+w.c),1),A.ae,B.E(u.awN("Fields",""+w.d),1),A.ae,B.E(u.awN("Signatures",""+w.e),1)],q),A.l,v,A.e,A.j,0,v,v),o=B.bp(A.bl,v,v,v,A.c,v,A.yD,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KO(B.x(B.a([t,A.T,r,A.aQ,p,A.bz,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nX,v,v,v),v,new C.eHA(d),o),A.X,u.aXN(d,"Stay here",!1)],q),A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eHA.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eEz.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eEy.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eHr.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eI_.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0N(A.d.dP(w.d,new C.eHY(v),new C.eHZ(v)).hQ(),w.f,null)},
$S:z+84}
C.eHY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHZ.prototype={
$0(){return this.a},
$S:z+85}
C.eCj.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bF,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h_,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWT,w,w,w,w,new C.eCh(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fEB,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY9,w,w,w,w,new C.eCi(d),!1,w,w,w,w,w,D.h0z,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCh.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eCi.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eCk.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bt,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bk,4280172719,2,v,0,0,"",D.ct,D.TJ,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCl.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eQ(""+1000*l+"_"+k,D.TJ,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aG,4279310375,A.bn,u,D.bk,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ct,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m1(""+1000*p+"_"+o,r+n,"",D.r_,4294967295,null,D.dm,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eCp.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kM(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.ls,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eCg.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5Q(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.en(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.ls,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eCf(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.imq(p)}},
$S:0}
C.eCf.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGg.prototype={
$0(){var w=this.a,v=this.b
w.b5Q(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eI7.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eEC.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eEB())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eEB.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eD1.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eD2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uc()},
$S:7}
C.eCd.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lS,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eE3.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCm.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eCv.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eCw.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eCx.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCu(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eCu.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCI.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCt(v))
if(u>0){A.d.cG(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eCt.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCL.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eCM.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eCN.prototype={
$0(){return this.a.as=A.e1},
$S:0}
C.eCO.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eCP.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eCQ.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCR.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCy.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DG(w.gqT().c.j(0.18).l(),0.1,u,D.bk,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.J(u,C.j6(A.bn,!1,w.gqT().d.l(),A.aG,18,A.bt,A.I,0.07,v,"Document Header",0,D.dm,0.9,0.05,0.02))},
$S:0}
C.eCz.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.J(u,C.DG(v.gqT().c.j(0.12).l(),0.1,t,D.bk,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bFy()
A.d.J(t,C.j6(A.K,!1,v.gqT().e.l(),A.aG,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dm,0.9,0.05,0.92))},
$S:0}
C.eCA.prototype={
$0(){A.d.J(this.a.gdB().z,C.DG(1727914055,0.12,C.cE(),D.bk,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eCB.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DG(w,0.08,C.cE(),D.bk,w,2,0.5,0.2,0.4))},
$S:0}
C.eCC.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DG(w.gqT().c.j(0.35).l(),0.12,u,D.DZ,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.15,C.cE(),"Important note",0,D.r0,0.5,0.38,0.52))},
$S:0}
C.eCD.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DG(4294507260,0.78,C.cE(),D.bk,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFy()+"\n\nSubject:\n\nBody text\u2026",0,D.dm,0.76,0.12,0.14))},
$S:0}
C.eCE.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DG(4294897802,0.28,C.cE(),D.bk,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4285611794,A.aG,15,A.bt,A.a8,0.24,C.cE(),"Sticky note",0,D.aKT,0.26,0.64,0.14))},
$S:0}
C.eCF.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DG(4293060848,0.04,C.cE(),D.bk,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DG(w,0.04,C.cE(),D.bk,w,2,0.55,0.1,0.48))},
$S:0}
C.eCG.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jj,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ve,0.42,0.52,0.18))},
$S:0}
C.eCH.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DG(858088427,0.62,C.cE(),D.bk,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DG(856004201,0.62,C.cE(),D.bk,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,20,A.bt,A.I,0.1,C.cE(),"Option A",0,D.dm,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,20,A.bt,A.I,0.1,C.cE(),"Option B",0,D.dm,0.36,0.56,0.2))},
$S:0}
C.eCJ.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DG(4294967295,0.36,C.cE(),D.bk,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j6(A.K,!1,w,A.aG,14,A.bt,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.dm,0.24,0.38,0.4))},
$S:0}
C.eCK.prototype={
$0(){return C.ckQ(this.b,D.TK,this.a.gqT())},
$S:0}
C.eE2.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9W.q(0,d),t=this.a
return t.bb2(d,v===d,A.b2,this.c,new C.eE1(t,u,d,w),u)},
$S:z+25}
C.eE1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.os(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGj(r,new C.eE0(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eE0.prototype={
$0(){return this.a.dc(new C.eE_(this.b,this.c))},
$S:0}
C.eE_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eCn.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rY(4294967295,null,0,0,null,C.cE(),D.n8,"","","",D.dm),s=this.b
C.ckQ(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DY){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eD5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ite(p,q.d,s,new C.eD4(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uc(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eD4.prototype={
$1(d){return this.bo1(d)},
bo1(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eD3(t,d))
w=2
return B.b(t.uc(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eD3.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eD6.prototype={
$0(){return this.a.bMO()},
$S:0}
C.eD7.prototype={
$0(){return this.a.aSV("Class Presentation",!0)},
$S:0}
C.eD8.prototype={
$1(d){return this.a.bNK(d.b,this.b,d.a)},
$S:z+88}
C.eDJ.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eFU.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aF(d,A.eQ,x.w).w.f.d),new B.dY(new C.eFT(this.a,this.b),null),null)},
$S:60}
C.eFT.prototype={
$2(d,e){return B.pi(new C.eFS(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:708}
C.eFS.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.bA:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aU,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alV,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.U,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b5,B.bN(!1,A.AT,v,v,!0,v,v,v,new C.eFQ(w.c),v,v)],q),A.l,v,A.e,A.j,0,v,v),v),B.E(B.cl(B.a([p.aVI(u,!0,!0,new C.eFR(p,w.d))],q),e,v,D.bBM,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.l7,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.eFQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFR.prototype={
$0(){this.b.$1(new C.eFO())
var w=this.a
if(w.c!=null)w.m(new C.eFP())},
$S:0}
C.eFO.prototype={
$0(){},
$S:0}
C.eFP.prototype={
$0(){},
$S:0}
C.eHs.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:90}
C.eHt.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.aAG(this.a,null),0.94+w*0.06,null,null),w)},
$S:246}
C.eHu.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:90}
C.eHv.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.bfa(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:246}
C.eHw.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xb(this.b))},
$S:0}
C.eCs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qd.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.cg.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A4.a2h,u?A.ac:A.U,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.bY(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.U,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.uA(A.fj,B.q(p,B.x(B.a([t,A.aB,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.m(p,p,u?A.aD:A.am,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.j,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a8(A.aA,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:302}
C.eDx.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eDy.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDz.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k9
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2R:A.Cy}return w},
$S:706}
C.eDC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.i.F(j+m.b*0.12,1))
j=B.l(20)
v=m.c
u=B.l(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],s):B.a([A.c.j(0.92),A.np.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.l(10)
q=B.q(l,B.X(C.kM(v.w)?A.wE:A.qO,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,q,l,new B.a8(A.a7,A.aa,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.m(l,l,t?A.c:A.U,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QG(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QG(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QG(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QG(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QG(v.f)
r=k.bNI(n,A.d.gH(r),t)
return B.q(l,B.by(j,new B.a91(B.aI(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.O4,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.oy,t?A.aD:A.bK,l,l,l,l),l,l,l,new C.eDA(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,p,u,l,new B.a8(A.aA,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eDB(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:87}
C.eDB.prototype={
$0(){return this.a.ags(this.b)},
$S:0}
C.eDA.prototype={
$0(){return this.a.Bs(this.b,this.c)},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
w.b9B()
w.m(new C.eF1())},
$S:0}
C.eF1.prototype={
$0(){},
$S:0}
C.eF3.prototype={
$1(d){return this.a.akv(this.b.a,d)},
$S:2}
C.eF4.prototype={
$0(){this.a.dc(new C.eF0(this.b))},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cD:A.V},
$S:0}
C.eF5.prototype={
$0(){this.a.dc(new C.eF_(this.b))},
$S:0}
C.eF_.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eF6.prototype={
$0(){this.a.dc(new C.eEZ(this.b))},
$S:0}
C.eEZ.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nd},
$S:0}
C.eF7.prototype={
$0(){this.a.dc(new C.eEY(this.b))},
$S:0}
C.eEY.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eF8.prototype={
$0(){var w=this.a
w.dc(new C.eEX(w,this.b))},
$S:0}
C.eEX.prototype={
$0(){var w=this.b
return w.as=this.a.c8k(w.as)},
$S:0}
C.eF9.prototype={
$0(){return this.a.dc(new C.eEW(this.b))},
$S:0}
C.eEW.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFa.prototype={
$0(){return this.a.dc(new C.eEV(this.b))},
$S:0}
C.eEV.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEO.prototype={
$0(){return this.a.a39(this.b.a)},
$S:0}
C.eEP.prototype={
$0(){this.a.a0G()
return null},
$S:0}
C.eEQ.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c1,x.w).w.a.a<900)w.agL()
else w.m(new C.eEN(w))},
$S:0}
C.eEN.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eER.prototype={
$0(){this.a.dc(new C.eEM(this.b))},
$S:0}
C.eEM.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cD:A.V},
$S:0}
C.eES.prototype={
$0(){return this.a.dc(new C.eEL(this.b))},
$S:0}
C.eEL.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eET.prototype={
$0(){return this.a.dc(new C.eEK(this.b))},
$S:0}
C.eEK.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEU.prototype={
$0(){return this.a.aC_(null)},
$S:0}
C.eDW.prototype={
$0(){this.a.E9()
return null},
$S:0}
C.eDX.prototype={
$0(){this.a.abh()
return null},
$S:0}
C.eDZ.prototype={
$1(d){return this.bo2(d)},
bo2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KG(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.as,null,new C.eDR(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eDS(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eDT(r))
s=s.c.L(x.q).f
s.T(B.b4(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eDU(r))
s=s.c.L(x.q).f
s.T(B.b4(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hFk(q,new C.Fm(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eDV(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ai3(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b4(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eDR.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.esz],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dg,p,p,p)
q=u.e===s?D.bX1:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eDQ(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eDQ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDT.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eDU.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eDV.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDY.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ar(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ar(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ar(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ai3(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ey5,q,v,u,B.Ar(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:146}
C.eId.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFv(w,v)}},
$S:0}
C.eIe.prototype={
$0(){this.a.E9()
return null},
$S:0}
C.eFd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c6J:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aT:A.bw
return new B.D(A.fB,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b1,new B.p(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lK,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eFc(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:136}
C.eFc.prototype={
$0(){var w=this.a
return w.m(new C.eFb(w,this.b))},
$S:0}
C.eFb.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eFe.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5V:E.aB5
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRi():t.gbN8()
return B.h6(B.az(u,B.q(u,D.ar0,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.H,10)],x.V),new B.a8(A.a7,A.aa,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1727}
C.eFf.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iss(v,w.a.c)},
$S:0}
C.eGC.prototype={
$0(){return this.b.vP(this.a.a)},
$S:0}
C.eGD.prototype={
$0(){return this.a.vP(D.n8)},
$S:0}
C.eGE.prototype={
$0(){return this.a.vP(D.Jh)},
$S:0}
C.eGP.prototype={
$0(){return this.a.vP(D.Ji)},
$S:0}
C.eH_.prototype={
$0(){return this.a.vP(D.Jg)},
$S:0}
C.eHa.prototype={
$0(){return this.a.qE("lab_report")},
$S:0}
C.eHh.prototype={
$0(){return this.a.qE("rubric")},
$S:0}
C.eHi.prototype={
$0(){return this.a.qE("minutes")},
$S:0}
C.eHj.prototype={
$0(){return this.a.qE("agenda")},
$S:0}
C.eHk.prototype={
$0(){return this.a.qE("timeline")},
$S:0}
C.eHl.prototype={
$0(){return this.a.qE(this.b.a)},
$S:0}
C.eGF.prototype={
$0(){this.a.WA()
return null},
$S:0}
C.eGG.prototype={
$0(){this.a.Wu()
return null},
$S:0}
C.eGH.prototype={
$0(){return this.a.qE("table")},
$S:0}
C.eGI.prototype={
$0(){return this.a.qE("sticky")},
$S:0}
C.eGJ.prototype={
$0(){return this.a.qE("divider")},
$S:0}
C.eGK.prototype={
$0(){return this.a.qE("header_bar")},
$S:0}
C.eGL.prototype={
$0(){return this.a.pr(D.bk)},
$S:0}
C.eGM.prototype={
$0(){return this.a.pr(D.eZ)},
$S:0}
C.eGN.prototype={
$0(){return this.a.pr(D.kc)},
$S:0}
C.eGO.prototype={
$0(){return this.a.pr(D.DZ)},
$S:0}
C.eGQ.prototype={
$0(){return this.a.pr(D.kd)},
$S:0}
C.eGR.prototype={
$0(){return this.a.pr(D.lt)},
$S:0}
C.eGS.prototype={
$0(){return this.a.pr(D.fL)},
$S:0}
C.eGT.prototype={
$0(){this.a.HU()
return null},
$S:0}
C.eGU.prototype={
$0(){this.a.O0()
return null},
$S:0}
C.eGV.prototype={
$0(){return this.a.qE("quote")},
$S:0}
C.eGW.prototype={
$0(){return this.a.a9p()},
$S:0}
C.eGX.prototype={
$0(){this.a.a0M()
return null},
$S:0}
C.eGY.prototype={
$0(){var w=this.a
return w.m(new C.eGs(w))},
$S:0}
C.eGs.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.os(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eGA(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGA.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eH0.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9Y.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aU
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a9Y.q(0,q))u.push(B.ap(s,B.q(s,D.PO,A.f,s,s,D.Fk,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.az(s,B.h6(new B.an(A.a0,s,A.ab,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eGz(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eGz.prototype={
$0(){this.a.a9F(this.b)
return null},
$S:0}
C.eH1.prototype={
$0(){this.a.a9E(this.b)
return null},
$S:0}
C.eH2.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hXp(d),p=this.a,o=B.l(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aU
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.rY(4294967295,r,0,0,r,"preview_"+w,D.r_,"","","",D.dm)
C.hC6(s,w)
w=x.p
u=B.a([B.by(o,B.q(r,B.by(t,C.hDs(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arC,A.f,r,r,D.Fk,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iN,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ab,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aD:A.am,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGy(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eGy.prototype={
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
return B.b(s.os(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eGo(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGo.prototype={
$0(){return C.hC6(this.a,this.b.a)},
$S:0}
C.eGB.prototype={
bo3(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9W.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.os(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bo3(d,e)},
$S:z+91}
C.eHm.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eHo(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.l,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eHo.prototype={
$1(d){var w=this
return w.a.bb2(d,w.b===d,w.c,w.d,new C.eHn(w.e,d),!D.a9W.q(0,d))},
$S:z+25}
C.eHn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eH3.prototype={
$1(d){this.b.$2(d,new C.eGx(this.a,d,this.c))
return null},
$S:z+26}
C.eGx.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGj(u,new C.eGn(v,this.c,w),w)},
$S:0}
C.eGn.prototype={
$0(){return this.a.dc(new C.eGl(this.b,this.c))},
$S:0}
C.eGl.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eH4.prototype={
$1(d){this.b.$2(d,new C.eGw(this.a,d))
return null},
$S:z+26}
C.eGw.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h3k(u,new C.eGm(v,w),w)},
$S:0}
C.eGm.prototype={
$0(){var w=this.a
return w.dc(new C.eGk(w,this.b))},
$S:0}
C.eGk.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eH5.prototype={
$0(){var w=this.a
return w.m(new C.eGv(w))},
$S:0}
C.eGv.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eH6.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFv(w,v)}},
$S:0}
C.eH7.prototype={
$0(){this.a.IG()
return null},
$S:0}
C.eH8.prototype={
$0(){return this.a.a9p()},
$S:0}
C.eH9.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.dc(new C.eGu(v))},
$S:0}
C.eGu.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eHb.prototype={
$0(){this.a.E9()
return null},
$S:0}
C.eHc.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FQ(v,!0)
return null},
$S:0}
C.eHd.prototype={
$0(){this.a.dc(new C.eGt(this.b))},
$S:0}
C.eGt.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cD:A.V},
$S:0}
C.eHe.prototype={
$0(){this.a.dc(new C.eGr(this.b))},
$S:0}
C.eGr.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eHf.prototype={
$0(){this.a.dc(new C.eGq(this.b))},
$S:0}
C.eGq.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nd},
$S:0}
C.eHg.prototype={
$0(){this.a.dc(new C.eGp(this.b))},
$S:0}
C.eGp.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eD0.prototype={
$1(d){return this.bo0(d)},
bo0(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.os(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eD_(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:196}
C.eD_.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eHJ.prototype={
$0(){var w=this.a
return w.dc(new C.eHI(w,this.b))},
$S:0}
C.eHI.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eHK.prototype={
$0(){var w=this.a
return w.dc(new C.eHH(w,this.b))},
$S:0}
C.eHH.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eE8.prototype={
$0(){return this.a.dc(new C.eE7(this.b))},
$S:0}
C.eE7.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eE9.prototype={
$0(){return this.a.dc(new C.eE6(this.b))},
$S:0}
C.eE6.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eEG.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atj,new C.eEF(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eEF.prototype={
$1(d){var w=null
return B.Ar(B.d(d.b,w,w,w,w,w,w,A.lW,w,w,w),48,d,x.fO)},
$S:z+95}
C.eHW.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eHV.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eHT(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bl
else v=r.d?A.aU:A.cu
v=B.L(v,A.r,o?2:1)
u=r.d?A.cr:A.c
t=B.bR(0,C.hDs(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.q(q,new B.an(A.a0,q,A.ab,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nV,q,q,q),A.f,q,q,new B.p(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.amS,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eHU(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:82}
C.eHU.prototype={
$0(){var w=this.a
return w.m(new C.eHP(w,this.b))},
$S:0}
C.eHP.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KP()},
$S:0}
C.eHT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eHQ(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eHR(q,s))
q.aUp()}else if(r==="del"){q=t.a
q.m(new C.eHS(q,s))
q.aTv()}else if(r==="up")t.a.b63(s,s-1)
else if(r==="down")t.a.b63(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHQ.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYN,w,w,w,w,new C.eHL(d),!1,w,w,w,w,w,w,w,D.fFA,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYG,w,w,w,w,new C.eHM(d),!1,w,w,w,w,w,w,w,A.xr,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXV,w,w,w,w,new C.eHN(d),!1,w,w,w,w,w,w,w,D.fO0,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_3,w,w,w,w,new C.eHO(d),!1,w,w,w,w,w,w,w,D.fFo,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eHL.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eHM.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eHN.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eHO.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eHR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHX.prototype={
$0(){return this.a.a9p()},
$S:0}
C.eDq.prototype={
$0(){var w=this.a
w.b9B()
w.aC_(null)},
$S:0}
C.eDp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.aA,A.aE,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.by(s,B.c2(A.l1,new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bj),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eDo(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aD:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c2(new B.an(A.a0,p,A.ab,A.f,s,new B.bG("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.p(v,p,p,o,n,w,A.n),A.bj)},
$S:446}
C.eDo.prototype={
$1(d){var w=this
return w.a.bJ5(d,w.b,w.c,w.d)},
$S:z+23}
C.eDd.prototype={
$0(){var w=this
if(w.b){w.a.O8(w.c)
return}if(w.d){w.a.a9n(w.c)
return}if(w.e){w.a.ai2(w.c)
return}if(w.f)w.a.ba9(w.c)},
$S:0}
C.eDe.prototype={
$0(){this.a.O8(this.b)
return null},
$S:0}
C.eDf.prototype={
$0(){return this.a.a39(this.b.a)},
$S:0}
C.eDg.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eDc(u,d,w.c,w.d))
v.Ik()
v.oE()
v.pJ()},
$S:19}
C.eDc.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eDh.prototype={
$1(d){return this.a.akv(this.b.a,d)},
$S:2}
C.eDj.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hg5(w))u.a.O8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.ba9(v)},
$S:0}
C.eDi.prototype={
$0(){return this.a.a39(this.b.a)},
$S:0}
C.eDk.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eDb(w.b,d,w.c,w.d))
v.Ik()
v.oE()
v.pJ()},
$S:19}
C.eDb.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eDl.prototype={
$1(d){var w=this.a
w.m(new C.eDa(this.b,d))
w.Ik()
w.oE()
w.pJ()},
$S:213}
C.eDa.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
w.m(new C.eD9(this.b))
w.Ik()
w.oE()
w.pJ()},
$S:0}
C.eD9.prototype={
$0(){this.a.r=C.hCW()},
$S:0}
C.eDn.prototype={
$0(){return this.a.a39(this.b.a)},
$S:0}
C.eFh.prototype={
$0(){var w=this.a
return w.m(new C.eFg(w))},
$S:0}
C.eFg.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFi.prototype={
$1(d){return this.a.cIk(this.b.a,d)},
$S:2}
C.eEm.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:166}
C.eEn.prototype={
$1(d){return this.a.$1(new C.eEl(this.b,d))},
$S:6}
C.eEl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEo.prototype={
$1(d){return this.a.$1(new C.eEk(this.b,d))},
$S:6}
C.eEk.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEp.prototype={
$1(d){return this.a.$1(new C.eEj(this.b,d))},
$S:6}
C.eEj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEq.prototype={
$1(d){return this.a.$1(new C.eEi(this.b,d))},
$S:6}
C.eEi.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eEr.prototype={
$1(d){return this.a.$1(new C.eEh(this.b,d))},
$S:6}
C.eEh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEs.prototype={
$1(d){return this.b.$1(new C.eEg(this.a,this.c))},
$S:9}
C.eEg.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eEt.prototype={
$1(d){return this.b.$1(new C.eEf(this.a,this.c))},
$S:9}
C.eEf.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEu.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.d0
return B.az(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEe(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:456}
C.eEe.prototype={
$0(){return this.a.$1(new C.eEb(this.b,this.c))},
$S:0}
C.eEb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eEv.prototype={
$1(d){return this.a.$1(new C.eEd(this.b,d))},
$S:1728}
C.eEd.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eEw.prototype={
$1(d){var w=null
return B.az(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEc(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:456}
C.eEc.prototype={
$0(){return this.a.$1(new C.eEa(this.b,this.c))},
$S:0}
C.eEa.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eEx.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pX()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eA()}v.a.aur()},
$S:0}
C.eEA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aA(0,m)
m=B.l(16)
v=B.l(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.l(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.q(n,B.X(A.uV,u,n,n,n,10),A.f,n,n,new B.p(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nG,n,n,n),n,n,n,2,n,n))
return B.aI(!1,A.a3,!0,n,B.aP(!1,m,!0,B.eJ(new B.a5(48,48,new B.an(A.A,n,A.ab,A.t,r,n),n),n,new B.p(n,n,s,v,n,new B.a8(A.aA,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:142}
C.eC9.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aI(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.e1(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.l,p,A.bb,A.j,0,A.p),p,new B.p(p,p,t,v,p,new B.a8(A.aA,A.aE,A.x,u,p,p),A.n),p,A.GQ,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:142}
C.eGe.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.ast,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.eGc(d),w,w),B.bJ(A.rc,w,new C.eGd(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eGc.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGd.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.daa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.e_.aA(0,A.i.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dH.aA(0,i)
v=B.l(22)
t=B.ar(A.aM,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL).j(0.18+w*0.12),A.H,32+w*10),D.aeB],s)
q=B.l(22)
p=x.O
o=B.ap(k,B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.bY(A.b7,0.9,A.x,k,0,B.a([A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.bY(A.A,0.5,A.x,k,0,B.a([m,A.d.gan(C.kM(j.a.c.w)?D.v7:L.nL).j(0.08),A.L],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.l(14)
m=j.a.c.w
l=C.kM(m)?D.v7:L.nL
s=B.a([new B.ac(0,A.G,A.d.gH(C.kM(m)?D.v7:L.nL).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.e1(A.A,B.q(k,B.X(C.kM(j.a.c.w)?A.wE:A.qO,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,n,s,new B.a8(A.aA,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ab,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.m(k,k,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fO,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fxd,A.K,k,k),A.ax,B.d(j.gcD8(),k,k,k,k,k,k,D.fCb,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gTa()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.m(k,k,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nL).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.KI(A.za,"Download PDF","pdf",A.d5,j.JD(0),!1,k))
p=j.a.c
if(!p.z||p.gTa()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KI(A.jL,"Transfer to "+C.hCY(p==null?"":p),"transfer_hati",A.aX,j.JD(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.JD(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KI(D.bQe,"Rename presentation","rename",A.cg,n,!1,k),A.an,new C.KI(A.aoM,"Duplicate","duplicate",A.b8,j.JD(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.T)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.KI(A.ei,"Delete presentation","delete",A.ay,j.JD(p),!0,k))
s.push(A.ax)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.JD(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.JD(n)
s.push(B.dN(B.d3(B.bN(!1,E.aWH,k,k,!0,k,k,k,new C.da9(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bF1,k,k,k,k,k,A.kz,k,k)),n),new B.o(0,(1-p)*8)))
return B.e1(A.A,B.d3(B.aI(!1,A.a3,!0,k,B.q(k,B.by(q,new B.an(A.a0,k,A.ab,A.t,B.a([o,new B.D(D.bEa,B.x(s,A.l,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.Xw,new B.p(A.as,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:45}
C.da9.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.day.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.daz.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.da7.prototype={
$1(d){var w=this.a
return w.m(new C.da3(w))},
$S:22}
C.da3.prototype={
$0(){return this.a.d=!0},
$S:0}
C.da8.prototype={
$1(d){var w=this.a
return w.m(new C.da2(w))},
$S:68}
C.da2.prototype={
$0(){return this.a.d=!1},
$S:0}
C.da6.prototype={
$0(){var w=this.a
return w.m(new C.da4(w))},
$S:0}
C.da4.prototype={
$0(){return this.a.d=!1},
$S:0}
C.da5.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eIU.prototype={
$0(){return $.bmT=!$.bmT},
$S:0}
C.eIK.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXE())u.azA()},
$S:0}
C.eIT.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eIL.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eIM.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azA()},
$S:0}
C.eIG.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eIH.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eII.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eIJ.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eIR.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b3,A.t,w,null)},
$S:1729}
C.eIS.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ip)return new B.d1(e,!1,d,null)
w=this.a
return w.cB2(w.e,d,e)},
$S:429}
C.eIN.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eIO.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eIP.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eIQ.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fz(A.aa,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eIV.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZP().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZP().x
t===$&&B.c()
return new C.b3m(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JG(v.c,t,!0,new B.bG("cine"+u,x.W))},
$S:690}
C.eIX.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c1,x.w).w.a.a*0.55)w.azA()
else w.cpm()},
$S:68}
C.eIW.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fUk.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:349}
C.fUt.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.fUq(d),w,w),B.bN(!1,D.fVG,w,w,!0,w,w,w,new C.fUr(d,this.b,v),w,w),B.bJ(A.aX_,w,new C.fUs(d,v,this.c),w)],x.p),w,w,P.uf,new B.a5(320,w,t,w),w,w,w,w,D.fXd,w)},
$S:18}
C.fUq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fUr.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hgK(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUs.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aS3(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRv(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUj.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckT.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:596}
C.fUp.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fpv.prototype={
$1(d){return C.hgI(C.Xb(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h2A.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:90}
C.h2B.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,D.hxO,0.94+w*0.06,null,null),w)},
$S:246}
C.h2C.prototype={
$1(d){var w=this
return new C.Xd(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eIq.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eIp.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xe(u,this.b,w.gaQJ(),v,null)},
$S:z+99}
C.eIn.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIr.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIv.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eIw.prototype={
$0(){var w=this.a
return w.m(new C.eIu(w))},
$S:0}
C.eIu.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eIx.prototype={
$0(){var w=this.a
return w.m(new C.eIt(w))},
$S:0}
C.eIt.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eIy.prototype={
$1(d){return this.a.bNJ(d,this.b)},
$S:z+100}
C.eIl.prototype={
$0(){var w=this.a
return w.m(new C.eIk(w,this.b))},
$S:0}
C.eIk.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eIz.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eIA.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eIB.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIC.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eID.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fF(new B.fw(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fiW)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eC3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eC2())},
$S:0}
C.eC2.prototype={
$0(){},
$S:0}
C.eC4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eC_.prototype={
$1(d){return this.a.m(new C.eBZ())},
$S:2}
C.eBZ.prototype={
$0(){},
$S:0}
C.eC0.prototype={
$1(d){return this.a.b1U()},
$S:2}
C.eC1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eIF.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIE(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIE.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fOy.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.en(new B.k3(this.c,new C.fOx(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:231}
C.fOx.prototype={
$3(d,e,f){return new C.JG(e,!1,!1,new B.bG(e.a,x.W))},
$S:z+102}
C.fOz.prototype={
$1(d){var w=null
return B.oP(!1,B.as(new C.bxF(this.a,this.b,w),w,w,w),w,x.z)},
$S:337}
C.fOD.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmT(),$async$$0)
case 3:w=4
return B.b(B.bP(A.mb,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmT(),$async$$0)
case 5:s=$.aV.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qm))throw B.W("Could not draw the slide.")
u=r.me(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1732}
C.fOE.prototype={
boy(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.hi),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hL([J.eT(A.dO.gaU(r))],"image/png"))
t.toString
s=Ao.h74(t)
w=4
return B.b(new B.qu(s,"load",!1,x.ev).gH(0).dh(0,A.k_),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boy(d)},
$S:1733}
C.fOA.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:150}
C.fOB.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:150}
C.fOC.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fjq.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.ftE,A.K,w,w)},
$S:1734}
C.fjr.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.by(v,B.kp(A.bq,w,A.dL,8,w,e===0?w:e,w),A.aq)},
$S:618}
C.eqj.prototype={
$1(d){this.a.a05()
return null},
$S:11}
C.eqh.prototype={
$0(){return this.a.e=D.bA_},
$S:0}
C.eqi.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.cp8.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.cp9.prototype={
$2(d,e){return(d|e)>>>0},
$S:61};(function aliases(){var w=C.aNU.prototype
w.bzL=w.t
w=C.aNo.prototype
w.bze=w.t
w=C.aN7.prototype
w.byX=w.t
w=C.aNn.prototype
w.bzd=w.t
w=C.aNS.prototype
w.bzJ=w.t
w=C.aPb.prototype
w.bBd=w.t
w=C.aM2.prototype
w.bxP=w.t
w=C.aO4.prototype
w.bzW=w.t
w=C.aO5.prototype
w.bzX=w.t
w=C.b53.prototype
w.buj=w.aF6})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ipF","aoW",104)
v(C.aKZ.prototype,"gc8J","ZW",0)
var r
u(r=C.azu.prototype,"gcCu","cCv",38)
v(r,"gc9y","aeE",0)
v(r=C.azq.prototype,"gb0g","ED",3)
v(r,"gc9v","c9w",3)
v(r,"gayF","yr",0)
v(r,"gaAJ","JV",0)
t(C,"iqC","hVa",105)
v(C.aFB.prototype,"gccA","ccB",3)
s(C,"iqN",0,null,["$4$paper$photo$request$template"],["fVK"],106,0)
s(C,"iqM",0,null,["$5$doc$history$instruction$photo$template"],["bEO"],107,0)
v(r=C.aFS.prototype,"gcdj","JA",0)
v(r,"gbNb","XJ",0)
v(r,"gcdm","afw",0)
v(r,"gcdl","a_S",0)
v(r,"gb1z","EU",0)
v(C.aFV.prototype,"gcdr","a_U",0)
v(r=C.aHj.prototype,"gb1M","QC",0)
v(r,"gcue","b68",3)
v(r,"gcDS","aDg",86)
v(r,"gbR6","abm",0)
v(r,"gcdS","B5",0)
v(r=C.aJf.prototype,"gco5","a1f",0)
v(r,"gcod","a1i",0)
v(r,"gbG_","a9L",0)
v(r,"gcdW","afI",0)
v(C.aJe.prototype,"gcdX","afJ",0)
v(C.aDh.prototype,"gbEZ","a9y",0)
v(C.aBE.prototype,"gcdY","a04",0)
w(C,"ir_","iom",12)
w(C,"iqY","ilb",12)
w(C,"iqZ","ink",12)
v(r=C.aGb.prototype,"gcHb","cHc",3)
v(r,"gcsu","csv",3)
u(r,"gF_","ags",7)
v(r,"gbKO","atA",3)
u(r,"gF0","b38",7)
v(r,"gcgd","ag9",0)
v(r,"gcf4","ag8",0)
v(r,"gcip","agt",0)
v(r,"gbN8","aaU",0)
v(r,"gcjj","a0G",0)
v(r,"gcjk","agK",0)
v(r,"gcjR","agR",0)
v(r,"gciC","agw",0)
v(r,"gbRi","abq",0)
v(r,"gaUo","aUp",3)
v(r,"gaTu","aTv",3)
v(r,"gaP_","aP0",3)
v(r,"gaTt","aur",3)
u(r,"gbFf","bFg",80)
v(r,"gaCN","b9k",3)
v(r,"gcf6","cf7",3)
v(r,"gc1F","c1G",3)
v(r,"gbPB","bPC",3)
v(r=C.aGe.prototype,"gcFY","cFZ",3)
v(r,"gcFB","cFC",3)
t(C,"ir0","ioD",2)
v(r=C.aGc.prototype,"gce3","JF",0)
v(r,"gcwg","S7",0)
v(r,"gce0","JE",0)
v(r,"gcIv","a3P",0)
v(r,"gck2","agY",0)
v(C.aGa.prototype,"gce4","b1U",3)
v(r=C.aGd.prototype,"gbS8","abA",0)
u(r,"gce1","ce2",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ok,C.SV,C.bKr,C.bIJ,C.cGo,C.cGm,C.bSH,C.baM,C.cGn,C.bHj,C.cp2,C.cp0,C.cp1,C.cp_,C.aut,C.coZ,C.bTJ,C.oO,C.aGN,C.jD,C.o7,C.a90,C.Af,C.ly,C.oY,C.mt,C.Ag,C.ob,C.a98,C.asO,C.b3n,C.epJ,C.lv,C.Fv,C.ew,C.jb,C.Fm,C.yg,C.eQ,C.m1,C.i4,C.k_,C.a99,C.agl,C.b3o,C.b53,C.a4a])
u(B.jw,[C.cOp,C.c3G,C.fJJ,C.cPW,C.cPi,C.fPg,C.e8_,C.e7Z,C.eqm,C.eql,C.fQF,C.fqH,C.fqI,C.cj7,C.cj8,C.cj9,C.eu0,C.f2d,C.f1B,C.f1A,C.f2E,C.f2b,C.f24,C.f2n,C.f33,C.fyQ,C.f9n,C.f9m,C.f9Q,C.epM,C.fUg,C.e3d,C.h08,C.fR1,C.ckL,C.ckJ,C.ckO,C.fRz,C.fRA,C.fRB,C.fRC,C.ckv,C.ckw,C.dQ9,C.cks,C.fRy,C.fgN,C.e0W,C.ckl,C.eps,C.fP5,C.eFE,C.eG2,C.eG_,C.eFZ,C.eG9,C.eG8,C.eHE,C.eHD,C.eFT,C.eFS,C.eCs,C.eDC,C.eGB,C.eHW,C.eHV,C.eDp,C.eEA,C.eC9,C.daa,C.eIR,C.eIS,C.eIN,C.eIO,C.eIP,C.eIQ,C.eIV,C.ckT,C.eIq,C.eIB,C.cp9])
u(B.ht,[C.cOq,C.cOr,C.bTK,C.fGy,C.c3F,C.c3I,C.fXv,C.fhX,C.fhO,C.fi3,C.fpw,C.fpx,C.fJK,C.fJI,C.fWY,C.fGc,C.fXR,C.cPM,C.cPR,C.cPT,C.cPP,C.cPU,C.cPN,C.cPV,C.cPI,C.cPF,C.cPE,C.cPL,C.cPd,C.cPb,C.fOi,C.fOj,C.ftR,C.fPh,C.fPn,C.fsT,C.cfr,C.fOg,C.fOh,C.fJ6,C.fJ7,C.fPm,C.fPi,C.fPk,C.fPl,C.fPj,C.h0q,C.fJa,C.fJb,C.fJe,C.fJf,C.fJi,C.fJj,C.h1T,C.fr9,C.h23,C.etj,C.etk,C.etl,C.et1,C.etd,C.ete,C.etg,C.cj6,C.cj4,C.cj5,C.fOX,C.fOZ,C.fOY,C.fqJ,C.fqK,C.h26,C.eu5,C.eu6,C.etY,C.etZ,C.eu1,C.eu2,C.h2m,C.f34,C.f2u,C.f2e,C.f2r,C.f1w,C.f1x,C.f1y,C.f1C,C.f1D,C.f2U,C.f30,C.f32,C.f2D,C.f2F,C.f2J,C.f2K,C.f2L,C.f2P,C.f2G,C.f2H,C.f1O,C.f1P,C.f1Q,C.f1R,C.f1S,C.f1T,C.f1U,C.f1V,C.f1W,C.f19,C.f1a,C.f1b,C.f1c,C.f1e,C.f1f,C.f1I,C.f1J,C.f1K,C.f1L,C.f1M,C.f1j,C.f1k,C.f1l,C.f1m,C.f23,C.f2m,C.fMl,C.fMk,C.ckC,C.fyP,C.fUc,C.fU5,C.fU8,C.fS3,C.fS4,C.fS5,C.fMs,C.fMr,C.fMq,C.fMo,C.fqD,C.fqE,C.fqF,C.h2y,C.f9p,C.f9q,C.f9j,C.f9d,C.f9J,C.f9K,C.f9M,C.f9N,C.f9I,C.h2x,C.f94,C.fy5,C.epL,C.fUe,C.fUf,C.fUh,C.fUa,C.fUb,C.h1L,C.dsC,C.dsI,C.epK,C.fmL,C.fmN,C.fmM,C.fmK,C.fNw,C.fNy,C.fp_,C.fTH,C.fTI,C.fTJ,C.fTU,C.fTZ,C.fU_,C.fU0,C.fU1,C.fU2,C.fU3,C.fU4,C.fTK,C.fTL,C.fTM,C.fTN,C.fTO,C.fTP,C.fTQ,C.fTR,C.fTS,C.fTT,C.fTV,C.fTW,C.fTX,C.fTY,C.fLm,C.fxo,C.fxn,C.fUn,C.e3e,C.e3c,C.f8d,C.cf2,C.cf4,C.h0a,C.dhW,C.dhY,C.h09,C.h07,C.h2w,C.fQY,C.dhw,C.fJm,C.fJn,C.ckA,C.ckB,C.ckz,C.ckp,C.ckq,C.ckm,C.ckn,C.cko,C.ckR,C.ckM,C.ckH,C.ckI,C.ckK,C.ckN,C.ckP,C.fRD,C.cku,C.ckx,C.cky,C.ckE,C.ckF,C.fUu,C.fTB,C.ckt,C.ckr,C.fRx,C.fA8,C.ckk,C.f5I,C.fDf,C.eIh,C.eEH,C.eEI,C.eGh,C.eG5,C.eG6,C.eE4,C.eI2,C.eI3,C.eI4,C.eDt,C.eFL,C.eFN,C.eFn,C.eFk,C.eED,C.eEE,C.eFu,C.eDv,C.eFG,C.eFH,C.eFF,C.eFJ,C.eFI,C.eG0,C.eG1,C.eG3,C.eFX,C.eDO,C.eDL,C.eGa,C.eDD,C.eI1,C.eCb,C.eDG,C.eDF,C.eCU,C.eCZ,C.eCX,C.eCV,C.eI9,C.eIa,C.eIb,C.eI8,C.eHG,C.eHF,C.eHz,C.eHB,C.eHr,C.eI_,C.eHY,C.eCj,C.eCf,C.eEB,C.eD2,C.eCu,C.eCt,C.eCQ,C.eCR,C.eE2,C.eD4,C.eD8,C.eFU,C.eHs,C.eHt,C.eHu,C.eHv,C.eDx,C.eDy,C.eDz,C.eF3,C.eDZ,C.eDR,C.eDY,C.eFd,C.eFe,C.eH0,C.eH2,C.eHm,C.eHo,C.eH3,C.eH4,C.eD0,C.eEG,C.eEF,C.eHQ,C.eDo,C.eDg,C.eDh,C.eDk,C.eDl,C.eFi,C.eEm,C.eEn,C.eEo,C.eEp,C.eEq,C.eEr,C.eEs,C.eEt,C.eEu,C.eEv,C.eEw,C.eGe,C.da7,C.da8,C.eIX,C.fUk,C.fUt,C.fUj,C.fUp,C.fpv,C.h2A,C.h2B,C.h2C,C.eIp,C.eIy,C.eC4,C.eC_,C.eC0,C.fOy,C.fOx,C.fOz,C.fOE,C.fOA,C.fOB,C.fjq,C.fjr,C.eqj,C.cp8])
u(B.iJ,[C.cOs,C.fhT,C.fhY,C.fhZ,C.fhU,C.fhV,C.fhW,C.fhM,C.fhN,C.fhP,C.fhQ,C.fi2,C.fi1,C.fhS,C.fhR,C.fi_,C.fi0,C.fi5,C.fi6,C.fi4,C.cPO,C.cPS,C.cPQ,C.cPG,C.cPH,C.cPJ,C.cPC,C.cPD,C.cPK,C.cPB,C.cPA,C.cPz,C.cP2,C.cP1,C.cP4,C.cPc,C.cP5,C.cP3,C.cP7,C.cP8,C.cP9,C.cP6,C.cPa,C.cPe,C.cPf,C.cPg,C.cPh,C.fJ4,C.fJ5,C.fJ2,C.fJ3,C.elA,C.ely,C.elz,C.elB,C.elC,C.e7Y,C.fJ8,C.fJ9,C.fJc,C.fJd,C.fJg,C.fJh,C.eqk,C.fR4,C.fR3,C.eti,C.eth,C.esW,C.esS,C.et2,C.et3,C.et4,C.esY,C.esZ,C.et_,C.et0,C.esX,C.esU,C.esV,C.eta,C.etb,C.et9,C.etc,C.et8,C.et7,C.et6,C.etf,C.et5,C.esT,C.eu4,C.etT,C.etU,C.eu_,C.etV,C.etX,C.etW,C.eu3,C.f1X,C.f2k,C.f1G,C.f1H,C.f1E,C.f1F,C.f2q,C.f2p,C.f2o,C.f2t,C.f2s,C.f1v,C.f1z,C.f1u,C.f1t,C.f1q,C.f1s,C.f1r,C.f31,C.f2V,C.f2T,C.f2W,C.f2S,C.f2X,C.f2R,C.f2Y,C.f2Z,C.f3_,C.f2Q,C.f2C,C.f2x,C.f2I,C.f2B,C.f2M,C.f2A,C.f2N,C.f2z,C.f2O,C.f2y,C.f2h,C.f2g,C.f2i,C.f2f,C.f2j,C.f29,C.f28,C.f2a,C.f27,C.f26,C.f25,C.f1d,C.f18,C.f1n,C.f1i,C.f1o,C.f1h,C.f1p,C.f1g,C.f2c,C.f20,C.f2_,C.f21,C.f1Z,C.f22,C.f1Y,C.f2l,C.f2w,C.f2v,C.f1N,C.fU7,C.fU9,C.fUd,C.fMp,C.fOQ,C.fOO,C.fOP,C.f9r,C.f9s,C.f9o,C.f9i,C.f9h,C.f9k,C.f9l,C.f97,C.f98,C.f9a,C.f9b,C.f9c,C.f99,C.f9e,C.f9F,C.f9G,C.f9E,C.f9H,C.f9D,C.f9C,C.f9B,C.f9L,C.f9A,C.f9z,C.f9y,C.f9O,C.f9x,C.f9P,C.f9w,C.f9v,C.f9f,C.f9g,C.f9u,C.f9t,C.f90,C.f91,C.f92,C.f93,C.f9_,C.f95,C.f96,C.dsB,C.dsD,C.dsG,C.dsH,C.dsF,C.dsE,C.fNx,C.fLn,C.cf3,C.cf5,C.dhP,C.dhU,C.dhV,C.dhT,C.dhS,C.dhX,C.dhR,C.dhQ,C.dhZ,C.h06,C.doD,C.doE,C.doF,C.fJk,C.fJl,C.ckS,C.eC5,C.eC6,C.eC7,C.eC8,C.fA6,C.fA7,C.e0Y,C.e0X,C.deJ,C.deI,C.eIj,C.eIi,C.eEJ,C.eHp,C.eIf,C.eGf,C.eI5,C.eI6,C.eIg,C.eFo,C.eDr,C.eDs,C.eFM,C.eFm,C.eFj,C.eFl,C.eFp,C.eFq,C.eFr,C.eFs,C.eFt,C.eFv,C.eDw,C.eFy,C.eFz,C.eFA,C.eFB,C.eFC,C.eFD,C.eFx,C.eFK,C.eFY,C.eFW,C.eG4,C.eFw,C.eDM,C.eDN,C.eDP,C.eG7,C.eGb,C.eCq,C.eDK,C.eDI,C.eGj,C.eDE,C.eGi,C.eDu,C.eE5,C.eI0,C.eHq,C.eCr,C.eCo,C.eCe,C.eCa,C.eCc,C.eDH,C.eCT,C.eCY,C.eCW,C.eCS,C.eFV,C.eIc,C.eHC,C.eHx,C.eHy,C.eHA,C.eEz,C.eEy,C.eHZ,C.eCh,C.eCi,C.eCk,C.eCl,C.eCp,C.eCg,C.eGg,C.eI7,C.eEC,C.eD1,C.eCd,C.eE3,C.eCm,C.eCv,C.eCw,C.eCx,C.eCI,C.eCL,C.eCM,C.eCN,C.eCO,C.eCP,C.eCy,C.eCz,C.eCA,C.eCB,C.eCC,C.eCD,C.eCE,C.eCF,C.eCG,C.eCH,C.eCJ,C.eCK,C.eE1,C.eE0,C.eE_,C.eCn,C.eD5,C.eD3,C.eD6,C.eD7,C.eDJ,C.eFQ,C.eFR,C.eFO,C.eFP,C.eHw,C.eDB,C.eDA,C.eF2,C.eF1,C.eF4,C.eF0,C.eF5,C.eF_,C.eF6,C.eEZ,C.eF7,C.eEY,C.eF8,C.eEX,C.eF9,C.eEW,C.eFa,C.eEV,C.eEO,C.eEP,C.eEQ,C.eEN,C.eER,C.eEM,C.eES,C.eEL,C.eET,C.eEK,C.eEU,C.eDW,C.eDX,C.eDQ,C.eDS,C.eDT,C.eDU,C.eDV,C.eId,C.eIe,C.eFc,C.eFb,C.eFf,C.eGC,C.eGD,C.eGE,C.eGP,C.eH_,C.eHa,C.eHh,C.eHi,C.eHj,C.eHk,C.eHl,C.eGF,C.eGG,C.eGH,C.eGI,C.eGJ,C.eGK,C.eGL,C.eGM,C.eGN,C.eGO,C.eGQ,C.eGR,C.eGS,C.eGT,C.eGU,C.eGV,C.eGW,C.eGX,C.eGY,C.eGs,C.eGZ,C.eGA,C.eGz,C.eH1,C.eGy,C.eGo,C.eHn,C.eGx,C.eGn,C.eGl,C.eGw,C.eGm,C.eGk,C.eH5,C.eGv,C.eH6,C.eH7,C.eH8,C.eH9,C.eGu,C.eHb,C.eHc,C.eHd,C.eGt,C.eHe,C.eGr,C.eHf,C.eGq,C.eHg,C.eGp,C.eD_,C.eHJ,C.eHI,C.eHK,C.eHH,C.eE8,C.eE7,C.eE9,C.eE6,C.eHU,C.eHP,C.eHT,C.eHL,C.eHM,C.eHN,C.eHO,C.eHR,C.eHS,C.eHX,C.eDq,C.eDd,C.eDe,C.eDf,C.eDc,C.eDj,C.eDi,C.eDb,C.eDa,C.eDm,C.eD9,C.eDn,C.eFh,C.eFg,C.eEl,C.eEk,C.eEj,C.eEi,C.eEh,C.eEg,C.eEf,C.eEe,C.eEb,C.eEd,C.eEc,C.eEa,C.eEx,C.eGc,C.eGd,C.da9,C.day,C.daz,C.da3,C.da2,C.da6,C.da4,C.da5,C.eIU,C.eIK,C.eIT,C.eIL,C.eIM,C.eIG,C.eIH,C.eII,C.eIJ,C.eIW,C.fUq,C.fUr,C.fUs,C.eIm,C.eIn,C.eIo,C.eIr,C.eIs,C.eIv,C.eIw,C.eIu,C.eIx,C.eIt,C.eIl,C.eIk,C.eIz,C.eIA,C.eIC,C.eID,C.eC3,C.eC2,C.eBZ,C.eC1,C.eIF,C.eIE,C.fOD,C.fOC,C.eqh,C.eqi])
t(C.aTp,B.M)
u(B.lE,[C.a4U,C.ayV,C.axz,C.ye,C.yh,C.lc,C.tP,C.Cc,C.rX,C.wB,C.atl,C.JH,C.asN,C.vj,C.mV,C.hF,C.a9M])
u(C.bSH,[C.cGp,C.bSI])
u(C.cp2,[C.cp6,C.aus])
t(C.cp5,C.cp0)
t(C.cp4,C.cp_)
t(C.cp7,C.cp4)
t(C.cp3,C.cp1)
t(C.coY,C.coZ)
t(C.czv,B.ax1)
t(C.a9y,B.y1)
u(B.af,[C.a2a,C.ZT,C.ZR,C.arU,C.X1,C.X2,C.a19,C.a1G,C.a1F,C.aFM,C.a03,C.On,C.a_B,C.a_W,C.apN,C.aKE,C.Wj,C.aBj,C.a8R,C.OR,C.aAG,C.KI,C.a0N,C.Xd,C.Xe,C.aG9,C.asS,C.a8S])
u(B.ah,[C.aKZ,C.azu,C.azq,C.aFB,C.aFS,C.aFV,C.aHj,C.aJf,C.aJe,C.aNU,C.aDh,C.aNo,C.aBE,C.bim,C.aN7,C.aPb,C.aNn,C.bg9,C.aNS,C.aO4,C.aM2,C.beV,C.aO5,C.aGc,C.bmS,C.aGa,C.aGd,C.bmB])
u(B.ax,[C.azs,C.aes,C.adR,C.blA,C.aev,C.agb,C.b2Z,C.bve,C.b3j,C.bo8,C.btL,C.b1d,C.b3m,C.aey,C.aeP,C.b3k,C.JG,C.b1g,C.bfa,C.QB,C.KO,C.bjW,C.bjV,C.bxF])
u(B.I7,[C.beC,C.bwD,C.aLl,C.bhm,C.bu9])
u(B.mn,[C.beB,C.bb4,C.bu6,C.be9,C.bhL,C.bk2,C.bgQ,C.bhH,C.bho,C.bqv,C.bcd,C.bbR,C.bxB,C.buz,C.btH,C.bgJ,C.b3h,C.bsB,C.btE])
t(C.bmy,C.aNU)
t(C.blU,C.aNo)
t(C.blC,C.aN7)
t(C.bx5,C.aPb)
t(C.blQ,C.aNn)
t(C.bmw,C.aNS)
t(C.bzY,C.aO4)
t(C.aGb,C.bzY)
t(C.beW,C.aM2)
t(C.aGe,C.aO5)
t(C.bxr,B.j4)
t(C.a9L,B.kH)
t(C.cpa,C.b53)
t(C.ajp,C.a4a)
u(B.YS,[C.aTh,C.aUJ])
t(C.ayv,C.aTh)
w(C.aNU,B.cb)
w(C.aNo,B.cb)
w(C.aN7,B.cb)
w(C.aNn,B.cb)
w(C.aNS,B.cb)
w(C.aPb,B.cb)
w(C.aM2,B.eM)
w(C.aO4,B.cb)
v(C.bzY,B.eB)
w(C.aO5,B.cb)})()
B.iT(b.typeUniverse,JSON.parse('{"aU0":{"hN":["aU0"]},"ok":{"aU0":[],"hN":["aU0"]},"aTp":{"M":["SV"],"M.E":"SV"},"a9y":{"y1":[],"oH":[]},"a2a":{"af":[],"v":[]},"aKZ":{"ah":["a2a"]},"ZT":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"azu":{"ah":["ZT"]},"azq":{"ah":["ZR"]},"azs":{"ax":[],"v":[]},"arU":{"af":[],"v":[]},"aFB":{"ah":["arU"]},"aes":{"ax":[],"v":[]},"adR":{"ax":[],"v":[]},"aev":{"ax":[],"v":[]},"agb":{"ax":[],"v":[]},"blA":{"ax":[],"v":[]},"X1":{"af":[],"v":[]},"aFS":{"ah":["X1"]},"b2Z":{"ax":[],"v":[]},"beC":{"aC":[]},"beB":{"aC":[]},"bwD":{"aC":[]},"bb4":{"aC":[]},"bu6":{"aC":[]},"X2":{"af":[],"v":[]},"aFV":{"ah":["X2"]},"be9":{"aC":[]},"a19":{"af":[],"v":[]},"aHj":{"ah":["a19"]},"bhL":{"aC":[]},"a1G":{"af":[],"v":[]},"a1F":{"af":[],"v":[]},"aFM":{"af":[],"v":[]},"a03":{"af":[],"v":[]},"aJf":{"ah":["a1G"]},"aJe":{"ah":["a1F"]},"bmy":{"ah":["aFM"]},"bk2":{"aC":[]},"aDh":{"ah":["a03"]},"bve":{"ax":[],"v":[]},"b3j":{"ax":[],"v":[]},"bo8":{"ax":[],"v":[]},"On":{"af":[],"v":[]},"a_B":{"af":[],"v":[]},"blU":{"ah":["On"]},"btL":{"ax":[],"v":[]},"bgQ":{"aC":[]},"b1d":{"ax":[],"v":[]},"aBE":{"ah":["a_B"]},"a_W":{"af":[],"v":[]},"bim":{"ah":["a_W"]},"bhH":{"aC":[]},"bho":{"aC":[]},"bqv":{"aC":[]},"bcd":{"aC":[]},"bbR":{"aC":[]},"bxB":{"aC":[]},"buz":{"aC":[]},"btH":{"aC":[]},"bgJ":{"aC":[]},"apN":{"af":[],"v":[]},"b3m":{"ax":[],"v":[]},"blC":{"ah":["apN"]},"aey":{"ax":[],"v":[]},"aeP":{"ax":[],"v":[]},"aKE":{"af":[],"v":[]},"Wj":{"af":[],"v":[]},"JG":{"ax":[],"v":[]},"aBj":{"af":[],"v":[]},"a8R":{"af":[],"v":[]},"b3k":{"ax":[],"v":[]},"b3h":{"aC":[]},"bx5":{"ah":["aKE"]},"aLl":{"aC":[]},"blQ":{"ah":["Wj"]},"bg9":{"ah":["aBj"]},"bmw":{"ah":["a8R"]},"b1g":{"ax":[],"v":[]},"bhm":{"aC":[]},"bsB":{"aC":[]},"btE":{"aC":[]},"aAG":{"af":[],"v":[]},"KI":{"af":[],"v":[]},"a0N":{"af":[],"v":[]},"KO":{"ax":[],"v":[]},"OR":{"af":[],"v":[]},"aGb":{"ah":["OR"],"eB":[]},"beW":{"ah":["aAG"]},"bfa":{"ax":[],"v":[]},"beV":{"ah":["KI"]},"QB":{"ax":[],"v":[]},"aGe":{"ah":["a0N"]},"bu9":{"aC":[]},"bjW":{"ax":[],"v":[]},"bjV":{"ax":[],"v":[]},"Xd":{"af":[],"v":[]},"Xe":{"af":[],"v":[]},"aG9":{"af":[],"v":[]},"asS":{"af":[],"v":[]},"aGc":{"ah":["Xd"]},"bmS":{"ah":["Xe"]},"aGa":{"ah":["aG9"]},"bxr":{"j4":[]},"aGd":{"ah":["asS"]},"bxF":{"ax":[],"v":[]},"a8S":{"af":[],"v":[]},"bmB":{"ah":["a8S"]},"a9L":{"kH":["fy<eW>"],"kv":["fy<eW>"]},"ajp":{"a4a":[]},"aTh":{"jf":[],"fi":[]},"ayv":{"jf":[],"fi":[]},"aUJ":{"jf":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("Mz"),U:w("w4<qp>"),bz:w("u"),M:w("de<n>"),bo:w("jU"),g7:w("Uh"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C4"),fS:w("EI"),an:w("IR"),bm:w("O<SV>"),X:w("O<SY>"),f3:w("O<aU0>"),aK:w("O<nr>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lT>"),d5:w("O<aB<bB<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jD>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jD>"),gE:w("O<Af>"),k:w("O<oO>"),g:w("O<m1>"),D:w("O<i4>"),u:w("O<eQ>"),m:w("O<vj>"),i:w("O<hF>"),aC:w("O<a98>"),o:w("O<Ag>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j2>"),J:w("O<jr>"),gx:w("O<pE<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j4>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baM>"),bx:w("O<aGN>"),gz:w("O<agl>"),x:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<H?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oO>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bB<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<ob,n>"),cT:w("N<k_,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q7>"),gh:w("N<mV,jF<mV>>"),w:w("iC"),ei:w("iF"),g2:w("rN"),fB:w("Fm"),b6:w("Af"),gX:w("a90"),dt:w("ly"),ea:w("oO"),bt:w("m1"),I:w("i4"),F:w("eQ"),fO:w("mV"),ff:w("vj"),fP:w("hF"),Q:w("wB"),dO:w("asO"),a:w("ct"),C:w("aE"),dw:w("aut"),di:w("a9M"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FS"),dB:w("ds<o>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qp"),bO:w("au"),K:w("br<o>"),b:w("br<F>"),E:w("dK"),W:w("bG<n>"),ac:w("bG<H>"),ex:w("k3<m1>"),cI:w("k3<n>"),cl:w("k3<F>"),b4:w("Y<lv>"),a8:w("Y<mt>"),fR:w("Y<+(n,n)>"),co:w("ea<o>"),l:w("v"),b2:w("c3<~>"),ev:w("qu<e_>"),dT:w("bk<~>"),q:w("mB"),y:w("P"),gR:w("F"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i4?"),go:w("b3o?"),a6:w("a99?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1V=new B.bM(A.aA,null,null,H.ase,null)
D.b24=new B.da(0,-0.15)
D.b26=new B.da(0.62,0)
D.b29=new B.da(-0.35,-0.45)
D.b2k=new B.da(0.9,-0.85)
D.b4v=new B.be(H.Up,H.Up,A.fM,A.fM)
D.b4L=new B.ay(A.b8,1,A.r,-1)
D.bqu=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4X=new B.ay(D.bqu,1,A.r,-1)
D.b58=new B.ay(A.aF,1.5,A.r,-1)
D.b5d=new B.ay(A.b8,1.6,A.r,-1)
D.b5t=new B.ay(A.aF,1.4,A.r,-1)
D.b6Q=new B.p(null,null,null,null,null,K.I5,A.a6)
D.c7U=new B.a8(A.a7,A.aa,A.x,G.a5V,null,null)
D.b6Y=new B.p(null,null,null,null,null,D.c7U,A.a6)
D.aer=new B.p(A.as,null,null,A.tS,null,null,A.n)
D.bjj=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bqr=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d6G=w([D.bjj,D.bqr],x.O)
D.ezu=new B.bY(A.A,0.5,A.x,null,0,D.d6G,null,null)
D.b7g=new B.p(null,null,null,null,null,D.ezu,A.a6)
D.Zb=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5J=new B.bH(Q.vR,A.a1,A.a1,A.a1)
D.b7i=new B.p(D.Zb,null,D.b5J,null,null,null,A.n)
D.c9E=new B.a8(A.a7,A.aa,A.x,A.S3,null,null)
D.b7p=new B.p(null,null,null,null,null,D.c9E,A.a6)
D.ag3=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7s=new B.p(D.ag3,null,null,A.rn,null,null,A.n)
D.b7w=new B.p(A.jY,null,null,null,null,null,A.a6)
D.b7z=new B.p(A2.ahk,null,H.ae3,A.mF,null,null,A.n)
D.Fk=new B.p(A.dK,null,null,null,null,null,A.a6)
D.b7G=new B.p(null,null,null,null,null,E.wX,A.a6)
D.dc2=w([E.aij,A.c4],x.O)
D.c9g=new B.a8(A.b7,A.b9,A.x,D.dc2,null,null)
D.b7K=new B.p(null,null,null,A.mF,null,D.c9g,A.n)
D.dnD=w([A.bl,A.dK,A.jX],x.O)
D.a3W=new B.a8(A.aA,A.aE,A.x,D.dnD,null,null)
D.b7X=new B.p(null,null,null,null,null,D.a3W,A.n)
D.b7Y=new B.p(D.ag3,null,null,A.l7,null,null,A.n)
D.cBc=w([A.d6,A.bl],x.O)
D.c97=new B.a8(A.aA,A.aE,A.x,D.cBc,null,null)
D.b81=new B.p(null,null,null,null,null,D.c97,A.n)
D.b8b=new B.p(null,null,null,null,null,G.uZ,A.a6)
D.b8w=new B.p(A.ail,null,null,null,null,null,A.a6)
D.bkk=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeB=new B.ac(0,A.G,D.bkk,A.Jw,28)
D.baF=new B.aYd()
D.bbd=new C.czv()
D.af5=new B.cg(A.A,null,null,A.a3L,null)
D.be5=new B.fk(null,null,null,null,null,E.ny,null,null,null,null)
D.bbZ=new B.cg(A.A,null,null,D.be5,null)
D.bTb=new B.ae(A.ef,28,A.c,null,null,null)
D.bcu=new B.cg(A.A,null,null,D.bTb,null)
D.be2=new B.fk(2,null,null,null,null,A.c5,null,null,null,null)
D.bcR=new B.cg(A.A,null,null,D.be2,null)
D.bTv=new B.ae(K.PC,40,A.bC,null,null,null)
D.bcS=new B.cg(A.A,null,null,D.bTv,null)
D.beY=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bfa=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfD=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfP=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgs=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgJ=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgL=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mm=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bhd=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bhl=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ago=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bic=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bj6=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agE=new B.u(1,1,1,0.9725490196078431,A.q)
D.bjs=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjH=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjK=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bk0=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkq=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bm5=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YT=new B.u(0.8509803921568627,0,0,0,A.q)
D.bmg=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmn=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahE=new B.u(0.6,0,0,0,A.q)
D.ahG=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bo6=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.uc=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.boA=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bp3=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bpt=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiC=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zn=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BT=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.N0=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jA=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aj7=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zx=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bti=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btO=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bu3=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a__=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bvg=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.ys=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvS=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bwc=new B.hM(A.aU,!0,null,null)
D.fAm=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0r=new B.B("Bio link",null,D.fAm,null,null,null,null,null,null,null,null,null)
D.bcM=new B.cg(A.A,null,null,D.h0r,null)
D.bwr=new B.hM(A.Bx,!0,D.bcM,null)
D.Nu=new C.a4U(0,"none")
D.akn=new C.a4U(1,"deflate")
D.ako=new C.a4U(2,"bzip2")
D.bxq=new B.kB(0.165,0.84,0.44,1)
D.dcm=w([A.c6,A.dL,A.aF],x.O)
D.c8m=new B.a8(A.aA,A.aE,A.x,D.dcm,null,null)
D.b6V=new B.p(null,null,null,null,null,D.c8m,A.n)
D.c1G=new B.ae(A.f5,null,A.ac,null,null,null)
D.bdq=new B.cg(A.A,null,null,D.c1G,null)
D.by_=new B.kT(D.b6V,A.bj,D.bdq,null)
D.btx=new B.u(0.058823529411764705,1,1,1,A.q)
D.dfO=w([A.bA,A.ry,A.ry,D.btx],x.O)
D.cSI=w([0,0.32,0.7,1],x.x)
D.c8Y=new B.a8(A.aA,A.aE,A.x,D.dfO,D.cSI,null)
D.b6K=new B.p(null,null,null,null,null,D.c8Y,A.n)
D.by5=new B.kT(D.b6K,A.bj,null,null)
D.bzd=new B.mJ(1,1,null,null,null,A.bq,null)
D.bzg=new B.mJ(1,null,null,null,null,D.Zx,null)
D.bzK=new B.bd(125e4)
D.bzQ=new B.bd(17e4)
D.bA_=new B.bd(35964e8)
D.bA6=new B.bd(55e4)
D.bAa=new B.bd(68e4)
D.bAB=new B.im(0,0,0,5)
D.bAQ=new B.R(0,16,16,0)
D.bB0=new B.R(0,36,0,36)
D.bB8=new B.R(0,54,0,0)
D.bBf=new B.R(10,0,10,3)
D.bBr=new B.im(10,16,10,10)
D.bBD=new B.R(10,6,4,6)
D.bBG=new B.R(10,8,10,6)
D.aln=new B.R(11,8,11,11)
D.bBM=new B.R(12,0,12,24)
D.bBZ=new B.R(12,12,12,4)
D.bC1=new B.R(12,12,8,12)
D.bCh=new B.R(12,8,8,12)
D.bCH=new B.R(14,14,14,0)
D.bCM=new B.R(14,14,14,90)
D.bD8=new B.R(16,10,16,16)
D.bD9=new B.R(16,10,16,20)
D.am9=new B.R(16,6,16,28)
D.bDH=new B.R(18,0,18,10)
D.bDJ=new B.R(18,0,18,30)
D.bDL=new B.R(18,10,18,12)
D.bDM=new B.R(18,10,18,14)
D.bE5=new B.R(18,16,14,18)
D.bEa=new B.R(18,18,18,12)
D.bEg=new B.R(18,26,18,12)
D.bEl=new B.R(18,34,18,34)
D.bEm=new B.R(18,4,18,14)
D.bEq=new B.R(18,8,18,24)
D.bEK=new B.R(20,16,14,4)
D.bEP=new B.R(20,18,12,4)
D.bEU=new B.R(20,20,12,20)
D.bEX=new B.R(20,22,20,20)
D.bF1=new B.R(20,6,20,6)
D.bFb=new B.R(22,18,22,18)
D.bFj=new B.R(22,24,22,0)
D.bFm=new B.R(22,24,22,4)
D.bFu=new B.R(22,60,22,22)
D.bFA=new B.R(24,24,24,22)
D.bFK=new B.R(26,10,60,10)
D.bFS=new B.R(28,44,28,44)
D.bG8=new B.R(32,44,32,44)
D.bGg=new B.R(38,30,38,20)
D.bGl=new B.R(4,0,0,6)
D.bGx=new B.im(4,4,4,4)
D.bH_=new B.im(6,5,6,5)
D.bH4=new B.R(6,6,8,6)
D.bHg=new B.R(8,14,8,14)
D.bHh=new B.R(8,22,8,22)
D.bHq=new B.R(8,6,12,6)
D.bHy=new B.R(8,8,8,4)
D.an6=new B.R(9,9,9,6)
D.bHJ=new B.im(2.5,2.5,2.5,2.5)
D.bHK=new B.R(10.5,0,10.5,0)
D.bHL=new B.R(7,1.5,7,1.5)
D.d3t=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bI0=new B.uS(null,null,D.d3t,A.y1)
D.d0d=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bI1=new B.uS(null,null,D.d0d,A.y1)
D.aWl=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_J=new B.B("WORD DESIGN",null,D.aWl,null,null,null,null,null,null,null,null,null)
D.bIG=new B.bz(1,A.bc,D.h_J,null)
D.h_n=new B.B("Slides database",null,Ac.vy,null,null,null,null,null,null,null,null,null)
D.fXB=new B.B("Admin only \xb7 keep as many as you like",null,V.aVO,null,null,null,null,null,null,null,null,null)
D.dwr=w([D.h_n,A.bH,D.fXB],x.p)
D.bwS=new B.fj(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dwr,null)
D.bIJ=new B.bz(1,A.bc,D.bwS,null)
D.fRJ=new B.B("NGMY logo",null,A.fC,null,null,null,null,null,null,null,null,null)
D.bIM=new B.bz(1,A.bc,D.fRJ,null)
D.fy_=new B.G(!0,A.ac,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1N=new B.B("TALK TO THE EDITOR",null,D.fy_,null,null,null,null,null,null,null,null,null)
D.bJ6=new B.bz(1,A.bc,D.h1N,null)
D.fLj=new B.B("Tell the AI what to change",null,Ac.vy,null,null,null,null,null,null,null,null,null)
D.bJq=new B.bz(1,A.bc,D.fLj,null)
D.bKW=new B.Ey(!0,"video/mp4")
D.fwb=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJf=new B.B("Move presentations between devices",null,D.fwb,null,null,null,!1,null,null,1,null,null)
D.bL_=new B.qL(A.e4,A.a7,A.f,D.fJf,null)
D.fKu=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bL0=new B.qL(A.e4,A.A,A.f,D.fKu,null)
D.bLg=new B.dl(1,A.cm,D.bL0,null)
D.a25=new B.a0(60988,"MaterialIcons",!1)
D.bOJ=new B.a0(61352,"MaterialIcons",!1)
D.aoQ=new B.a0(61531,"MaterialIcons",!1)
D.bPV=new B.a0(63062,"MaterialIcons",!1)
D.bQ1=new B.a0(63109,"MaterialIcons",!1)
D.bQe=new B.a0(63206,"MaterialIcons",!1)
D.apw=new B.a0(63238,"MaterialIcons",!1)
D.bQv=new B.a0(63338,"MaterialIcons",!1)
D.a2H=new B.a0(63365,"MaterialIcons",!1)
D.a2I=new B.a0(63367,"MaterialIcons",!1)
D.a2J=new B.a0(63368,"MaterialIcons",!1)
D.apI=new B.a0(63384,"MaterialIcons",!1)
D.bQN=new B.a0(63525,"MaterialIcons",!1)
D.bQR=new B.a0(63568,"MaterialIcons",!1)
D.bRb=new B.a0(983072,"MaterialIcons",!1)
D.bRA=new B.a0(983271,"MaterialIcons",!0)
D.aqO=new B.a0(983965,"MaterialIcons",!1)
D.aqP=new B.a0(983966,"MaterialIcons",!1)
D.bSw=new B.a0(984592,"MaterialIcons",!1)
D.bSO=new B.ae(A.uG,16,A.aD,null,null,null)
D.ar0=new B.ae(A.pw,18,A.c,null,null,null)
D.bTc=new B.ae(A.Cx,18,N.lF,null,null,null)
D.bTR=new B.ae(A.jI,11,null,null,null,null)
D.bU1=new B.ae(A.a2o,null,A.er,null,null,null)
D.bUz=new B.ae(A.t1,18,A.aD,null,null,null)
D.bUF=new B.ae(A5.CP,14,null,null,null,null)
D.bUG=new B.ae(A.ei,28,A.c0,null,null,null)
D.bUS=new B.ae(A.qO,20,A.c,null,null,null)
D.bUZ=new B.ae(A.zk,null,null,null,null,null)
D.bV4=new B.ae(A.jH,18,A.hr,null,null,null)
D.bV9=new B.ae(A.k7,null,null,null,null,null)
D.bPX=new B.a0(63065,"MaterialIcons",!1)
D.bVN=new B.ae(D.bPX,15,A.c,null,null,null)
D.bQ2=new B.a0(63113,"MaterialIcons",!1)
D.bVT=new B.ae(D.bQ2,null,A.ac,null,null,null)
D.bWg=new B.ae(A.uE,22,A.bM,null,null,null)
D.bWB=new B.ae(A.rZ,18,null,null,null,null)
D.bWH=new B.ae(A.CV,12,A.c,null,null,null)
D.bS8=new B.a0(983687,"MaterialIcons",!1)
D.bWT=new B.ae(D.bS8,null,A.bl,null,null,null)
D.bX1=new B.ae(A.hJ,null,A.bl,null,null,null)
D.bXk=new B.ae(A.pB,22,A.c,null,null,null)
D.bXo=new B.ae(A.cy,13,A.c,null,null,null)
D.bXu=new B.ae(A.ei,26,A.ay,null,null,null)
D.bXy=new B.ae(A.t4,26,A.c,null,null,null)
D.PO=new B.ae(A.jI,8,A.c,null,null,null)
D.bXU=new B.ae(A.pw,40,A.c,null,null,null)
D.bXV=new B.ae(A.bNG,null,null,null,null,null)
D.bXZ=new B.ae(A.uR,20,null,null,null,null)
D.bS7=new B.a0(983683,"MaterialIcons",!1)
D.bY9=new B.ae(D.bS7,null,A.b2,null,null,null)
D.bYa=new B.ae(A.jI,16,A.bl,null,null,null)
D.bYv=new B.ae(A.py,null,null,null,null,null)
D.arB=new B.ae(A.wE,22,A.c,null,null,null)
D.bYB=new B.ae(A.ef,17,A.c,null,null,null)
D.arC=new B.ae(A.jI,9,A.c,null,null,null)
D.bYG=new B.ae(A.wz,null,null,null,null,null)
D.bNX=new B.a0(57744,"MaterialIcons",!1)
D.bYN=new B.ae(D.bNX,null,null,null,null,null)
D.bYQ=new B.ae(A.wz,16,null,null,null,null)
D.bSF=new B.a0(985181,"MaterialIcons",!1)
D.HY=new B.ae(D.bSF,null,null,null,null,null)
D.bZ1=new B.ae(A.k7,16,A.bM,null,null,null)
D.bS0=new B.a0(983615,"MaterialIcons",!1)
D.bZ3=new B.ae(D.bS0,12,A.c,null,null,null)
D.arI=new B.ae(A.z7,16,null,null,null,null)
D.bZb=new B.ae(A.ef,21,A.c,null,null,null)
D.bZg=new B.ae(A.hJ,17,A.c,null,null,null)
D.bZh=new B.ae(A.uE,null,null,null,null,null)
D.bZy=new B.ae(A.a3n,20,A.aD,null,null,null)
D.bZN=new B.ae(A.ox,22,E.ny,null,null,null)
D.bZW=new B.ae(A.qN,13,A.ac,null,null,null)
D.bZZ=new B.ae(A.aqB,20,A.aD,null,null,null)
D.bNE=new B.a0(57495,"MaterialIcons",!1)
D.c_3=new B.ae(D.bNE,null,null,null,null,null)
D.c_7=new B.ae(A.oy,18,A.c,null,null,null)
D.c_u=new B.ae(A.uV,28,A.c,null,null,null)
D.c_F=new B.ae(D.apw,null,A.aF,null,null,null)
D.c_G=new B.ae(A.qO,22,A.c,null,null,null)
D.arR=new B.ae(A.a21,16,null,null,null,null)
D.c0s=new B.ae(A.uE,32,A.c,null,null,null)
D.c1b=new B.ae(A.jq,22,A.c,null,null,null)
D.c1e=new B.ae(A.t4,22,A.ac,null,null,null)
D.as6=new B.ae(A.uG,null,A.bW,null,null,null)
D.c2b=new B.ae(A.qI,18,null,null,null,null)
D.c2O=new B.ae(A.ef,18,A.bi,null,null,null)
D.c2V=new B.ae(A.aqw,null,null,null,null,null)
D.c3l=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aW9,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.fnM=new B.G(!0,A.bK,null,null,null,null,null,A.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3D=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fnM,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.c43=new B.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.d7J=w([A.dK,A.aF],x.O)
D.c69=new B.a8(A.a7,A.aa,A.x,D.d7J,null,null)
D.c6k=new B.a8(A.b7,A.b9,A.W2,A.azf,null,null)
D.bfs=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bks=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bo7=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bi3=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cSK=w([D.bfs,D.bks,D.bo7,D.bi3],x.O)
D.c6C=new B.a8(A.aA,A.aE,A.x,D.cSK,A.Iu,null)
D.dwA=w([A.cF,A.bD,A.b8],x.O)
D.c6E=new B.a8(A.b7,A.b9,A.W2,D.dwA,null,null)
D.dy5=w([A.bl,A.cg],x.O)
D.c6J=new B.a8(A.a7,A.aa,A.x,D.dy5,null,null)
D.dsL=w([A.fF,A.cZ,A.av],x.O)
D.c6L=new B.a8(A.aA,A.aE,A.x,D.dsL,null,null)
D.de6=w([A.cG,A.fo],x.O)
D.c6P=new B.a8(A.a7,A.aa,A.x,D.de6,null,null)
D.dwt=w([N.lF,A.cZ],x.O)
D.asT=new B.a8(A.a7,A.aa,A.x,D.dwt,null,null)
D.bla=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dwq=w([D.bla,D.ys,A.c5],x.O)
D.c6U=new B.a8(A.a7,A.aa,A.x,D.dwq,null,null)
D.d9u=w([A.b4,A.cX,A.eq],x.O)
D.c6V=new B.a8(A.aA,A.aE,A.x,D.d9u,null,null)
D.Q5=new B.a8(A.a7,A.aa,A.x,A.IJ,null,null)
D.bur=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cLG=w([D.bur,A.c5,A.jC],x.O)
D.asY=new B.a8(A.aA,A.aE,A.x,D.cLG,null,null)
D.djS=w([A.u6,A.aC,D.BT],x.O)
D.c7W=new B.a8(A.a7,A.aa,A.x,D.djS,null,null)
D.bvT=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bj5=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bph=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d8A=w([D.bvT,D.bj5,D.bph],x.O)
D.asZ=new B.a8(A.a7,A.aa,A.x,D.d8A,null,null)
D.blc=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9X=w([AA.ak1,D.blc],x.O)
D.c84=new B.a8(A.b7,A.b9,A.x,D.c9X,null,null)
D.d6u=w([A.mP,A.bC],x.O)
D.c88=new B.a8(A.b7,A.b9,A.x,D.d6u,null,null)
D.dpj=w([A.aF,A.dL],x.O)
D.c8e=new B.a8(A.a7,A.aa,A.x,D.dpj,null,null)
D.aiQ=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAZ=w([D.aiQ,D.jA,D.Mm],x.O)
D.c8I=new B.a8(A.aA,A.aE,A.x,D.aAZ,null,null)
D.cLy=w([A.dx,A.dA],x.O)
D.c8T=new B.a8(A.b7,A.b9,A.x,D.cLy,null,null)
D.dmb=w([A.y4,A.ye],x.O)
D.c9G=new B.a8(A.a7,A.aa,A.x,D.dmb,null,null)
D.fTm=new B.B("Which Bio link?",null,A.cC,null,null,null,null,null,null,null,null,null)
D.c9T=new B.qa(null,D.fTm,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zJ=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7T=new C.lc(2,"elegantNavy")
D.hFc=w([A.Zl,D.jA,A.c5],x.O)
D.kb=new C.ye(0,"classic")
D.a7I=new C.jD("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7T,4294967035,4279378237,4290283019,D.kb)
D.aKz=new C.lc(3,"elegantGold")
D.beX=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bg8=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ah8=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hEF=w([D.beX,D.bg8,D.ah8],x.O)
D.a7G=new C.jD("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKz,4294966515,4281016592,4289102906,D.kb)
D.dTP=new C.lc(22,"goldRibbon")
D.hEB=w([A.Zl,D.jA,A.is],x.O)
D.a7z=new C.jD("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dTP,4294967035,4279378237,4291404327,D.kb)
D.dTQ=new C.lc(23,"goldBaroque")
D.ahT=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hEH=w([D.ahT,A.aC,A.jC],x.O)
D.a7A=new C.jD("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dTQ,4294964964,4283053072,4292128567,D.kb)
D.dTS=new C.lc(4,"elegantEmerald")
D.bht=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.biu=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hEN=w([D.bht,D.biu,A.is],x.O)
D.a7B=new C.jD("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dTS,4294376440,4279122734,4291404327,D.kb)
D.dTT=new C.lc(5,"elegantBurgundy")
D.bmO=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hEU=w([D.bmO,A.agf,A.is],x.O)
D.a7E=new C.jD("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dTT,4294965238,4283043359,4291404327,D.kb)
D.dTM=new C.lc(19,"goldFiligree")
D.N8=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hEI=w([D.N8,A.aC,A.jC],x.O)
D.a7C=new C.jD("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dTM,4294966259,4279378237,4292128567,D.kb)
D.dTN=new C.lc(20,"goldLaurel")
D.buh=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hEV=w([A.Me,A.is,D.buh],x.O)
D.a7D=new C.jD("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dTN,4294966776,4282000405,4291404327,D.kb)
D.dTO=new C.lc(21,"goldCrest")
D.ag6=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.buo=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hEK=w([D.ag6,A.aC,D.buo],x.O)
D.a7H=new C.jD("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dTO,4294965484,4283053072,4292128567,D.kb)
D.dTR=new C.lc(24,"goldStar")
D.bvK=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hEO=w([D.bvK,A.aC,D.jA],x.O)
D.a7F=new C.jD("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dTR,4294966518,4279378237,4292128567,D.kb)
D.I7=w([D.a7I,D.a7G,D.a7z,D.a7A,D.a7B,D.a7E,D.a7C,D.a7D,D.a7H,D.a7F],x.h)
D.r_=new C.mV(0,"blank")
D.TK=new C.mV(1,"title")
D.n8=new C.mV(2,"titleContent")
D.edr=new C.mV(3,"twoColumn")
D.DY=new C.mV(4,"section")
D.eds=new C.mV(5,"comparison")
D.Jg=new C.mV(6,"flashcard")
D.Jh=new C.mV(7,"quiz")
D.Ji=new C.mV(8,"worksheet")
D.atj=w([D.r_,D.TK,D.n8,D.edr,D.DY,D.eds,D.Jg,D.Jh,D.Ji],B.at("O<mV>"))
D.aC5=w([Aq.YE,A.dA],x.O)
D.kX=w([A.c5,A.bM,A.hF,A.i6,D.BT],x.O)
D.dPy=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aC5,D.kX)
D.buE=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmM=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d6H=w([D.buE,D.bmM],x.O)
D.dPp=new C.jb("confetti","Golden Confetti","Together we rise",D.d6H,D.kX)
D.d3z=w([A.o5,A.Ye],x.O)
D.dPq=new C.jb("crown","Crown of Glory","Built for our community",D.d3z,D.kX)
D.biT=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmp=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.daY=w([D.biT,D.bmp],x.O)
D.v0=w([A.bK,A.aP,A.c,A.aO,A.am],x.O)
D.dPk=new C.jb("aurora","Aurora Gala","A brighter future, together",D.daY,D.v0)
D.bo9=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dmk=w([G.afI,D.bo9],x.O)
D.dPB=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dmk,D.kX)
D.dPC=new C.jb("diamonds","Diamond Rain","Every member is a jewel",A_.aCS,D.v0)
D.bfX=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blP=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.drY=w([D.bfX,D.blP],x.O)
D.dPf=new C.jb("starburst","Golden Starburst","Thank you!",D.drY,D.kX)
D.ca3=w([A.fn,A.yj],x.O)
D.afS=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RG=w([A.pf,A.ir,A.wd,A.o6,D.afS],x.O)
D.dPJ=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.ca3,D.RG)
D.d2M=w([A.Ys,A.w],x.O)
D.dPx=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d2M,D.v0)
D.bst=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.diA=w([A.kr,D.bst],x.O)
D.dPs=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.diA,D.kX)
D.bpZ=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnT=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dni=w([D.bpZ,D.bnT],x.O)
D.dPh=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dni,D.kX)
D.duN=w([A.dx,A.i5],x.O)
D.dPn=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.duN,D.kX)
D.bk6=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d0z=w([A.yl,D.bk6],x.O)
D.dPj=new C.jb("hearts","Floating Hearts","Made with love",D.d0z,D.RG)
D.bgB=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bhA=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dwo=w([D.bgB,D.bhA],x.O)
D.dPI=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dwo,D.RG)
D.btv=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dsj=w([A.lf,D.btv],x.O)
D.dPe=new C.jb("butterflies","Golden Butterflies","New beginnings",D.dsj,D.kX)
D.bpd=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d1E=w([D.bpd,A.w],x.O)
D.dPA=new C.jb("neon","Neon Night","Let's go!",D.d1E,D.v0)
D.bls=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dpv=w([A.MJ,D.bls],x.O)
D.dPD=new C.jb("disco","Disco Ball","Party time",D.dpv,D.v0)
D.bpO=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dp0=w([A.fF,D.bpO],x.O)
D.dPi=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.dp0,D.kX)
D.doC=w([A.rC,A.dA],x.O)
D.dPE=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.doC,D.v0)
D.bj_=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.doQ=w([D.bj_,A.dA],x.O)
D.dPH=new C.jb("snow","Winter Gala","Warm wishes to all",D.doQ,D.v0)
D.bf5=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bgm=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dvh=w([D.bf5,D.bgm],x.O)
D.dPw=new C.jb("laurel","Laurel Victory","We did it together",D.dvh,D.kX)
D.beW=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bml=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d_y=w([D.beW,D.bml],x.O)
D.dPG=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d_y,D.kX)
D.bnx=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cLv=w([G.BS,D.bnx],x.O)
D.dPt=new C.jb("kente","Kente Pride","Proud of our roots",D.cLv,D.kX)
D.bqF=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.btT=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dcK=w([D.bqF,D.btT],x.O)
D.dPo=new C.jb("trophy","Trophy Shine","Winners together",D.dcK,D.kX)
D.doX=w([Ar.Mt,A.w],x.O)
D.dPg=new C.jb("shooting","Shooting Stars","Make a wish",D.doX,D.v0)
D.bfe=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajN=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dvA=w([D.bfe,D.ajN],x.O)
D.dPu=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dvA,D.kX)
D.bfF=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.djr=w([D.bfF,A.w],x.O)
D.dPm=new C.jb("orbits","Golden Orbits","Always moving forward",D.djr,D.kX)
D.btw=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dfG=w([A.ah3,D.btw],x.O)
D.dPr=new C.jb("flowers","Blooming Garden","Growing together",D.dfG,D.RG)
D.bfq=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bgd=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.due=w([D.bfq,D.bgd],x.O)
D.dPl=new C.jb("music","Music Party","Celebrate with us",D.due,D.v0)
D.bhe=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.buk=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d0N=w([D.bhe,D.buk],x.O)
D.dPF=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d0N,D.kX)
D.dfM=w([G.BS,D.ajN],x.O)
D.dPz=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dfM,D.kX)
D.dPv=new C.jb("city","City Lights","The whole city celebrates",D.aC5,D.kX)
D.Ig=w([D.dPy,D.dPp,D.dPq,D.dPk,D.dPB,D.dPC,D.dPf,D.dPJ,D.dPx,D.dPs,D.dPh,D.dPn,D.dPj,D.dPI,D.dPe,D.dPA,D.dPD,D.dPi,D.dPE,D.dPH,D.dPw,D.dPG,D.dPt,D.dPo,D.dPg,D.dPu,D.dPm,D.dPr,D.dPl,D.dPF,D.dPz,D.dPv],B.at("O<jb>"))
D.eFs=new B.y("","No ring")
D.eVX=new B.y("platinum","Platinum")
D.eRZ=new B.y("glow","Glow")
D.eJc=new B.y("double","Double line")
D.eI5=new B.y("framed","Gallery frame")
D.eEZ=new B.y("rosegold","Rose gold")
D.eSO=new B.y("jewels","Jeweled")
D.ePp=new B.y("aurora","Aurora")
D.De=w([D.eFs,A.Uv,D.eVX,D.eRZ,M.aRm,D.eJc,A.aRk,D.eI5,D.eEZ,D.eSO,D.ePp],x.L)
D.cuE=w([D.a7C,D.a7D,D.a7H,D.a7z,D.a7A,D.a7F],x.h)
D.bZp=new B.ae(G.aoq,16,null,null,null,null)
D.ba2=new B.w4(A.bn,D.bZp,null,x.U)
D.bO5=new B.a0(58027,"MaterialIcons",!1)
D.bSU=new B.ae(D.bO5,16,null,null,null,null)
D.ba0=new B.w4(A.K,D.bSU,null,x.U)
D.bO6=new B.a0(58030,"MaterialIcons",!1)
D.bX_=new B.ae(D.bO6,16,null,null,null,null)
D.ba3=new B.w4(A.e1,D.bX_,null,x.U)
D.cAX=w([D.ba2,D.ba0,D.ba3],B.at("O<w4<qp>>"))
D.cIL=w([A.BX,A.hE],x.O)
D.cIM=w([A.b4,A.be,A.eq],x.O)
D.Rv=w([A.bM,A.i6,A.hF,A.aC,A.o6],x.O)
D.cLB=w([A.c5,D.jA,D.Mm],x.O)
D.cM8=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eCM=new B.y(4278913286,4280030216)
D.eD3=new B.y(4279373061,4278518787)
D.eDa=new B.y(4279898630,4278847235)
D.dc6=w([D.eCM,D.eD3,D.eDa],x.n)
D.d7s=w(["\u265b","\u269c","\u2726"],x.s)
D.dTK=new C.yg("Royal Onyx & Gold",D.dc6,4292128567,4294370209,4294965479,3874020544,D.d7s)
D.eCz=new B.y(4278326799,4278598442)
D.eCB=new B.y(4278395929,4278258953)
D.eCI=new B.y(4278599728,4278327826)
D.duE=w([D.eCz,D.eCB,D.eCI],x.n)
D.d1w=w(["\u269c","\u2756","\u2727"],x.s)
D.dTH=new C.yg("Imperial Emerald",D.duE,4293050997,4294699968,4294180856,3872254170,D.d1w)
D.eCC=new B.y(4278455076,4278918747)
D.eCH=new B.y(4278587439,4278322714)
D.eCV=new B.y(4279051376,4278455076)
D.dsH=w([D.eCC,D.eCH,D.eCV],x.n)
D.dkb=w(["\u2654","\u2726","\u2748"],x.s)
D.dTB=new C.yg("Sapphire Crown",D.dsH,4291417834,4294967295,4294310143,3871986666,D.dkb)
D.eD8=new B.y(4279894534,4283041554)
D.eDk=new B.y(4281008906,4279042307)
D.eDs=new B.y(4284221976,4279894534)
D.dyM=w([D.eD8,D.eDk,D.eDs],x.n)
D.d2V=w(["\u265b","\u2766","\u2726"],x.s)
D.dTD=new C.yg("Ruby Throne",D.dyM,4293378685,4294963145,4294964466,3874213833,D.d2V)
D.eD2=new B.y(4279371039,4281995100)
D.eDc=new B.y(4280092723,4278714896)
D.eDp=new B.y(4283045242,4279371039)
D.dv1=w([D.eD2,D.eDc,D.eDp],x.n)
D.dt3=w(["\u2655","\u2756","\u2727"],x.s)
D.dTI=new C.yg("Amethyst Palace",D.dv1,4293314984,4294963421,4294702591,3873229802,D.dt3)
D.eCE=new B.y(4278519045,4280032287)
D.eCW=new B.y(4279111184,4278321666)
D.eDh=new B.y(4280492839,4278716426)
D.drr=w([D.eCE,D.eCW,D.eDh],x.n)
D.dim=w(["\u2726","\u25c6","\u2742"],x.s)
D.dTF=new C.yg("Obsidian & Platinum",D.drr,4293256418,4294967295,4294638330,3872378836,D.dim)
D.eD9=new B.y(4279896588,4282194463)
D.eDi=new B.y(4280553487,4279043334)
D.eDq=new B.y(4283048488,4279896588)
D.dhM=w([D.eD9,D.eDi,D.eDq],x.n)
D.dwR=w(["\u2766","\u273f","\u2727"],x.s)
D.dTC=new C.yg("Rose Gold Velvet",D.dhM,4293440672,4294960345,4294964979,3874214602,D.dwR)
D.eCF=new B.y(4278520340,4279180595)
D.eCK=new B.y(4278718495,4278322443)
D.eD6=new B.y(4279510591,4278520340)
D.cSq=w([D.eCF,D.eCK,D.eD6],x.n)
D.dj5=w(["\u269c","\u2736","\u2756"],x.s)
D.dTG=new C.yg("Midnight Brass",D.cSq,4291405148,4293975208,4294439914,3872837564,D.dj5)
D.eDF=new B.y(4294703086,4293780428)
D.eDB=new B.y(4294307549,4293187253)
D.eDG=new B.y(4294966517,4293977807)
D.d5h=w([D.eDF,D.eDB,D.eDG],x.n)
D.djv=w(["\u269c","\u265b","\u2726"],x.s)
D.dTJ=new C.yg("Ivory Marble & Gold",D.d5h,4289760572,4286209048,4280951062,3863625518,D.djv)
D.eCQ=new B.y(4278978566,4280555024)
D.eD5=new B.y(4279504137,4278518530)
D.eDm=new B.y(4281211923,4278978566)
D.d2L=w([D.eCQ,D.eD5,D.eDm],x.n)
D.dtP=w(["\u2742","\u2726","\u265c"],x.s)
D.dTE=new C.yg("Onyx & Copper",D.d2L,4291856987,4294365880,4294964718,3873885630,D.dtP)
D.cMg=w([D.dTK,D.dTH,D.dTB,D.dTD,D.dTI,D.dTF,D.dTC,D.dTG,D.dTJ,D.dTE],B.at("O<yg>"))
D.cOD=w([A.aC,D.BT,A.i6],x.O)
D.eLs=new B.y("Original",null)
D.eLC=new B.y("Wide 16:9",1.7777777777777777)
D.eO_=new B.y("Landscape 3:2",1.5)
D.eKT=new B.y("Photo 4:3",1.3333333333333333)
D.eZR=new B.y("Portrait 3:4",0.75)
D.azo=w([D.eLs,D.eLC,D.eO_,D.eKT,M.aRa,D.eZR],B.at("O<+(n,F?)>"))
D.azp=w([A.i6,A.bT,A.ba,A.bp],x.O)
D.eOb=new B.y("","Original")
D.eQ8=new B.y("circle","Circle")
D.eWL=new B.y("rounded","Rounded")
D.eXL=new B.y("triangle","Triangle")
D.eSf=new B.y("hexagon","Hexagon")
D.eQz=new B.y("diamond","Diamond")
D.ePo=new B.y("arch","Arch")
D.Dl=w([D.eOb,D.eQ8,D.eWL,D.eXL,D.eSf,D.eQz,D.ePo],x.L)
D.dOE=new C.lv("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kO,A.d6,A.aM)
D.dOU=new C.lv("campus_green","Campus Green","Normal",A.b2,A.nv,A.u8,A.hc,A.e8)
D.dOL=new C.lv("warm_sand","Warm Sand","Normal",A.dY,A.hF,A.bM,A.i8,A.oc)
D.dOS=new C.lv("slate_minimal","Slate Minimal","Normal",A.bw,A.aP,A.aO,A.U,A.aM)
D.dOD=new C.lv("coral_fresh","Coral Fresh","Normal",A.c6,A.hU,A.q9,A.ks,A.u1)
D.dOT=new C.lv("lavender_calm","Lavender Calm","Normal",A.b8,A.qc,A.yc,A.oh,A.ko)
D.dOF=new C.lv("ocean_breeze","Ocean Breeze","Normal",A.fo,A.rK,A.tY,A.u3,A.od)
D.aiY=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dOQ=new C.lv("berry_pop","Berry Pop","Normal",A.fd,D.aiY,A.kK,G.ZX,A.BY)
D.dOG=new C.lv("midnight_pro","Midnight Pro","Professional",A.aF,A.U,A.dx,A.kK,A.cu)
D.dOP=new C.lv("executive_navy","Executive Navy","Professional",A.d5,A.ai7,A.d6,A.ld,A.bK)
D.dON=new C.lv("boardroom_charcoal","Boardroom Charcoal","Professional",A.am,A.bq,A.U,A.aP,A.cu)
D.dOH=new C.lv("corporate_steel","Corporate Steel","Professional",A.of,A.U,A.mS,A.fG,A.bK)
D.dOK=new C.lv("gold_luxe","Gold Luxe","Luxury",A.mK,A.dU,A.pd,A.m4,A.bM)
D.bpT=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dOO=new C.lv("rose_gold_elite","Rose Gold Elite","Luxury",A.hE,D.bpT,A.ZF,A.ir,A.o6)
D.dOR=new C.lv("platinum_night","Platinum Night","Luxury",A.cu,A.dA,A.bq,A.aP,A.aO)
D.dOV=new C.lv("emerald_prestige","Emerald Prestige","Luxury",A.aX,A.qg,A.eV,A.qp,A.jV)
D.dOC=new C.lv("royal_purple","Royal Purple","Luxury",A.nu,A.YK,A.ko,A.kK,A.Md)
D.dOM=new C.lv("neon_pitch","Neon Pitch","Bold",A.ba,A.dA,A.U,A.b0,A.aO)
D.dOJ=new C.lv("crimson_impact","Crimson Impact","Bold",A.bC,A.kr,A.ek,A.rL,A.eU)
D.dOI=new C.lv("sunset_gallery","Sunset Gallery","Bold",A.fp,A.u1,A.ks,A.q9,A.mQ)
D.Ip=w([D.dOE,D.dOU,D.dOL,D.dOS,D.dOD,D.dOT,D.dOF,D.dOQ,D.dOG,D.dOP,D.dON,D.dOH,D.dOK,D.dOO,D.dOR,D.dOV,D.dOC,D.dOM,D.dOJ,D.dOI],B.at("O<lv>"))
D.d_i=w([A.c5,D.jA],x.O)
D.di5=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eP8=new B.y("Faces & people",D.di5)
D.cOH=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eBo=new B.y("Ideas & work",D.cOH)
D.d7Y=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eSk=new B.y("Nature",D.d7Y)
D.die=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eLq=new B.y("Places & things",D.die)
D.dbE=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ePt=new B.y("Symbols",D.dbE)
D.d_o=w([D.eP8,D.eBo,D.eSk,D.eLq,D.ePt],B.at("O<+(n,ai<n>)>"))
D.bfv=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d_J=w([A.c5,D.ah8,D.bfv],x.O)
D.b9m=new B.ac(0,A.G,A.Ma,A.aLp,40)
D.b92=new B.ac(0,A.G,A.oa,A.eu,8)
D.d_W=w([D.b9m,D.b92],x.V)
D.d0t=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azN=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a57=w([A.i6,A.eq,A.bC,A.as,A.c6],x.O)
D.d1p=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aho=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d1B=w([A.Zv,D.aho,A.Zv],x.O)
D.d1G=w([A.is,D.jA,D.Mm],x.O)
D.eLc=new B.y(A.bn,D.a2I)
D.eMF=new B.y(A.K,D.a2H)
D.eGe=new B.y(A.e1,D.a2J)
D.d2G=w([D.eLc,D.eMF,D.eGe],B.at("O<+(qp,a0)>"))
D.cW=new C.JH(0,"text")
D.lS=new C.JH(1,"image")
D.fi=new C.JH(2,"shape")
D.TJ=new C.JH(3,"pdf")
D.ls=new C.JH(4,"signature")
D.a82=new C.JH(5,"bio")
D.d3F=w([D.cW,D.lS,D.fi,D.TJ,D.ls,D.a82],B.at("O<JH>"))
D.d3G=w([A.bt,A.cH],B.at("O<Iz>"))
D.d4l=w(["School","Documents","Sign & present"],x.s)
D.b9r=new B.ac(0,A.G,A.ajC,A.vl,28)
D.d4K=w([D.b9r],x.V)
D.d52=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RP=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAd=w([A.i6,A.Gn,A.aO,A.c,A.pf,A.aC],x.O)
D.eZe=new B.y(0.1,0.08)
D.eSi=new B.y(0.3,0.05)
D.eFH=new B.y(0.55,0.1)
D.eK8=new B.y(0.8,0.06)
D.eNq=new B.y(0.92,0.16)
D.eMU=new B.y(0.2,0.2)
D.eKD=new B.y(0.7,0.22)
D.eQW=new B.y(0.05,0.4)
D.eNS=new B.y(0.95,0.45)
D.eGu=new B.y(0.12,0.7)
D.eIR=new B.y(0.88,0.75)
D.eIZ=new B.y(0.4,0.9)
D.eDX=new B.y(0.65,0.93)
D.eJM=new B.y(0.25,0.97)
D.eL9=new B.y(0.85,0.9)
D.eHp=new B.y(0.5,0.04)
D.d6C=w([D.eZe,D.eSi,D.eFH,D.eK8,D.eNq,D.eMU,D.eKD,D.eQW,D.eNS,D.eGu,D.eIR,D.eIZ,D.eDX,D.eJM,D.eL9,D.eHp],x.G)
D.d6L=w([A.c,A.hE,A.aH,A.aX],x.O)
D.ef3=new C.k_("office_blue","Office Blue",A.bl,A.d6,A.aM,A.c,A.kO)
D.efe=new C.k_("campus_green","Campus Green",A.b2,A.hc,A.e8,A.nv,A.u8)
D.ef4=new C.k_("sunset","Sunset",A.fp,A.ks,A.oc,A.hU,A.q9)
D.ef5=new C.k_("midnight","Midnight",A.aF,A.kK,A.cu,A.U,A.dx)
D.efg=new C.k_("classic","Classic",A.cZ,A.dU,A.m5,A.hF,A.fy)
D.efd=new C.k_("rose_gold","Rose Gold",A.hE,A.ym,A.yl,A.wd,A.BX)
D.eeZ=new C.k_("ocean_teal","Ocean Teal",A.fo,A.u3,A.od,A.rK,A.tY)
D.eeY=new C.k_("slate_pro","Slate Pro",A.bw,A.U,A.aM,A.aP,A.aO)
D.eeX=new C.k_("neon_night","Neon Night",A.ba,A.b0,A.aO,A.dA,A.U)
D.ef8=new C.k_("lavender","Lavender",A.b8,A.oh,A.ko,A.qc,A.yc)
D.efa=new C.k_("coral","Coral",A.c6,A.ks,A.u1,A.hU,A.mQ)
D.ef_=new C.k_("forest","Forest",A.hq,A.e7,A.cr,A.m6,A.er)
D.ef0=new C.k_("berry","Berry",A.fd,G.ZX,A.BY,D.aiY,A.kK)
D.ef7=new C.k_("sand","Sand",A.dY,A.i8,A.oc,A.hF,A.bM)
D.efc=new C.k_("ice","Ice",A.of,A.FU,A.aM,A.np,A.fG)
D.ef2=new C.k_("charcoal","Charcoal",A.am,A.aP,A.cu,A.bq,A.U)
D.eeW=new C.k_("mint","Mint",A.aX,A.fU,A.hc,A.m6,A.qp)
D.efb=new C.k_("crimson","Crimson",A.bC,A.mP,A.kr,A.Gl,A.rL)
D.bit=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.ef6=new C.k_("gold","Gold",A.mK,A.y4,A.pd,D.bit,A.m4)
D.ef9=new C.k_("aqua","Aqua",A.bU,A.G6,A.pa,A.qd,A.pg)
D.ef1=new C.k_("plum","Plum",A.nu,A.yj,A.BY,A.FV,A.rG)
D.eff=new C.k_("steel","Steel",A.d5,A.d6,A.bq,A.kO,A.ld)
D.a5m=w([D.ef3,D.efe,D.ef4,D.ef5,D.efg,D.efd,D.eeZ,D.eeY,D.eeX,D.ef8,D.efa,D.ef_,D.ef0,D.ef7,D.efc,D.ef2,D.eeW,D.efb,D.ef6,D.ef9,D.ef1,D.eff],B.at("O<k_>"))
D.d77=w([A.c5,A.jC],x.O)
D.TL=new C.hF(10,"rotate3d")
D.Jk=new C.hF(8,"flip")
D.aKS=new C.hF(19,"spiral")
D.r0=new C.hF(16,"bounce")
D.aKV=new C.hF(9,"flipVertical")
D.d78=w([D.TL,D.Jk,D.aKS,D.r0,D.aKV],x.i)
D.en=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d7v=w([0.62,1],x.x)
D.d87=w([0,0.32,0.68,1],x.x)
D.n9=new C.hF(6,"zoom")
D.vf=new C.hF(4,"slideUp")
D.ve=new C.hF(2,"slideLeft")
D.d8h=w([D.n9,D.Jk,D.vf,D.TL,D.ve],x.i)
D.d8O=w([A.bT,A.hE,A.ir,A.i6,A.c],x.O)
D.b9h=new B.ac(0,A.G,D.ahE,A.vl,30)
D.d9A=w([D.b9h],x.V)
D.eqE=new B.o(0,-2.5)
D.equ=new B.o(-2.5,0)
D.eoG=new B.o(2.5,0)
D.d9D=w([A.TZ,A.a8u,A.aM2,A.a8t,D.eqE,O.aLZ,D.equ,D.eoG],x.dN)
D.Iw=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.daa=w([23,114,69,56,80,144],x.t)
D.daE=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.db6=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dcP=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dcU=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bk=new C.vj(0,"rectangle")
D.eZ=new C.vj(1,"circle")
D.lt=new C.vj(6,"hexagon")
D.dd9=w([D.bk,D.eZ,D.lt],x.m)
D.oN=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aj6=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.ddI=w([D.aj6,A.e7],x.O)
D.eFY=new B.y("","Classic")
D.eEb=new B.y("caps","Bold caps")
D.eQZ=new B.y("elegant","Elegant")
D.eX4=new B.y("shadow","Shadow")
D.eKw=new B.y("neon","Neon glow")
D.eUL=new B.y("marker","Highlighter")
D.eXi=new B.y("stamp","Stamp")
D.eJo=new B.y("threed","3D")
D.eRv=new B.y("fire","Fire")
D.eSu=new B.y("ice","Ice")
D.eQ7=new B.y("chalk","Chalk")
D.eQc=new B.y("comic","Comic")
D.eYA=new B.y("softglow","Soft glow")
D.eTx=new B.y("lowercase","Lowercase")
D.eQH=new B.y("double","Echo")
D.eYJ=new B.y("whisper","Whisper")
D.aB9=w([D.eFY,D.eEb,D.eQZ,D.eX4,D.eKw,M.aRl,D.eUL,D.eXi,M.aRn,D.eJo,M.aRf,D.eRv,D.eSu,D.eQ7,D.eQc,A.Uv,At.aRo,D.eYA,D.eTx,D.eQH,D.eYJ],x.L)
D.df0=w([3,5,7,10,12,15],x.t)
D.dgB=w([A.bT,A.bM,A.c,A.eL,A.cF],x.O)
D.dG7=new C.tP(10,"cardWorld")
D.DR=new C.Cc(3,"rounded")
D.dWK=new C.ly("world","NGMY World",D.dG7,D.DR,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dG8=new C.tP(11,"cardSplit")
D.dWG=new C.ly("business","Business Wire",D.dG8,D.DR,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dG9=new C.tP(12,"cardBreaking")
D.dWT=new C.ly("breaking","Breaking Red",D.dG9,D.DR,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dGa=new C.tP(13,"cardFeature")
D.dWM=new C.ly("feature","Tech Feature",D.dGa,D.DR,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJv=new C.tP(6,"circle")
D.aJp=new C.Cc(4,"circle")
D.dWQ=new C.ly("parchment","Royal Circle",D.aJv,D.aJp,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dWF=new C.ly("ocean","Blue Ocean",D.aJv,D.aJp,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dGd=new C.tP(7,"rail")
D.aJo=new C.Cc(1,"double")
D.dWH=new C.ly("forest","Green Leaf",D.dGd,D.aJo,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJs=new C.tP(1,"sideBySide")
D.dWV=new C.ly("herald","NGMY Herald",D.aJs,D.DR,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJr=new C.tP(0,"classic")
D.a7e=new C.Cc(9,"shadow")
D.dWU=new C.ly("daily","The Daily",D.aJr,D.a7e,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dGb=new C.tP(2,"splash")
D.aJq=new C.Cc(6,"cutCorner")
D.dWE=new C.ly("tabloid","Big Tabloid",D.dGb,D.aJq,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJw=new C.tP(9,"minimal")
D.dWP=new C.ly("modern","Modern Digest",D.aJw,D.DR,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJt=new C.tP(3,"magazine")
D.aJn=new C.Cc(0,"plain")
D.dWL=new C.ly("midnight","Midnight Edition",D.aJt,D.aJn,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dGe=new C.tP(8,"banner")
D.dWN=new C.ly("metro","Metro Wire",D.dGe,D.aJq,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dG6=new C.Cc(8,"arch")
D.dWO=new C.ly("sunrise","Sunrise Post",D.aJt,D.dG6,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJu=new C.tP(5,"scrapbook")
D.dG5=new C.Cc(5,"tape")
D.dWJ=new C.ly("neon","Neon Beat",D.aJu,D.dG5,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dGc=new C.tP(4,"wrap")
D.dWW=new C.ly("gold","Golden Press",D.dGc,D.a7e,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dWX=new C.ly("minimal","Paper White",D.aJw,D.a7e,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dWI=new C.ly("gazette","Fresh Gazette",D.aJr,D.aJo,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dWS=new C.ly("times","Classic Times",D.aJs,D.aJn,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tg=new C.Cc(2,"polaroid")
D.dWR=new C.ly("scrapbook","Memory Scrapbook",D.aJu,D.Tg,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5D=w([D.dWK,D.dWG,D.dWT,D.dWM,D.dWQ,D.dWF,D.dWH,D.dWV,D.dWU,D.dWE,D.dWP,D.dWL,D.dWN,D.dWO,D.dWJ,D.dWW,D.dWX,D.dWI,D.dWS,D.dWR],B.at("O<ly>"))
D.dgN=w([0.45,1],x.x)
D.IA=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dhc=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hzw=new C.oY("Original",0,1,1,0,0,0)
D.hzA=new C.oY("Black & white",0,1.1,0,0,0,0)
D.hzn=new C.oY("Noir",-0.05,1.55,0,0,0,0)
D.hzr=new C.oY("Sepia",0,1,0.25,0.9,0,0)
D.hzq=new C.oY("Vivid",0,1.15,1.6,0,0,0)
D.hzj=new C.oY("Pop",0,1.3,1.9,0,0,0)
D.hzl=new C.oY("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hzx=new C.oY("Matte",0,0.9,0.85,0,0,0.55)
D.hzs=new C.oY("Cool",0,1.05,1,-0.8,0,0)
D.hzz=new C.oY("Warm",0.03,1.05,1.1,0.8,0,0)
D.hzk=new C.oY("Golden hour",0.04,1,1.25,1,0,0)
D.hzp=new C.oY("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hzy=new C.oY("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hzo=new C.oY("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hzu=new C.oY("Retro",0,0.9,0.7,0.4,0,0.35)
D.hzt=new C.oY("Forest",0,1,1.2,-0.1,-0.45,0)
D.hzv=new C.oY("Rose",0,1,1.1,0.3,0.4,0)
D.hzm=new C.oY("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dhd=w([D.hzw,D.hzA,D.hzn,D.hzr,D.hzq,D.hzj,D.hzl,D.hzx,D.hzs,D.hzz,D.hzk,D.hzp,D.hzy,D.hzo,D.hzu,D.hzt,D.hzv,D.hzm],B.at("O<oY>"))
D.beR=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dhf=w([D.aj6,A.e7,D.beR],x.O)
D.eBh=new B.y(0.12,0.3)
D.eSF=new B.y(0.26,0.75)
D.eQV=new B.y(0.8,0.22)
D.eXu=new B.y(0.9,0.7)
D.eTw=new B.y(0.5,0.15)
D.eVF=new B.y(0.65,0.85)
D.eHW=new B.y(0.08,0.85)
D.dhv=w([D.eBh,D.eSF,D.eQV,D.eXu,D.eTw,D.eVF,D.eHW],x.G)
D.aBm=w([A.ba,A.bT,A.bp,A.b4],x.O)
D.diq=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.diD=w([A.c,A.fG,A.dj,A.w1],x.O)
D.biJ=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.djH=w([D.biJ,D.aho],x.O)
D.djJ=w([A.u6,A.aC],x.O)
D.djZ=w([0,0.25,0.75,1],x.x)
D.dk0=w([A.y8,A.pf],x.O)
D.aKs=new C.lc(10,"kenteSunset")
D.hED=w([D.ahT,A.km,A.aC],x.O)
D.dRX=new C.jD("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKs,4294964964,4282000405,4279983648,D.kb)
D.aKt=new C.lc(11,"indigoMudcloth")
D.bg2=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hER=w([D.bg2,A.ahl,A.is],x.O)
D.dS4=new C.jD("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKt,4294439140,4279903102,4279903102,D.kb)
D.aKu=new C.lc(12,"adinkraRoyal")
D.bv5=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hES=w([D.ag6,D.bv5,A.aC],x.O)
D.dS6=new C.jD("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKu,4294965484,4285218591,4287322667,D.kb)
D.aKv=new C.lc(13,"nileLotus")
D.br0=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bn7=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hEX=w([D.br0,D.bn7,A.is],x.O)
D.dS5=new C.jD("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKv,4294244340,4279196764,4279196764,D.kb)
D.aKw=new C.lc(14,"shweshweIvory")
D.bkZ=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bjz=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bgA=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hEE=w([D.bkZ,D.bjz,D.bgA],x.O)
D.dS1=new C.jD("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKw,4294505710,4279970378,4291058750,D.kb)
D.tk=new C.lc(15,"certIvoryNavy")
D.hEC=w([D.N8,D.jA,A.is],x.O)
D.aK2=new C.ye(1,"ringsNdoa")
D.dRZ=new C.jD("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tk,4294966259,4279378237,4291404327,D.aK2)
D.a7K=new C.ye(2,"coupleCards")
D.dRU=new C.jD("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tk,4294966259,4279378237,4291404327,D.a7K)
D.DU=new C.lc(18,"certIvoryNavyBar")
D.ag5=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hEQ=w([D.ag5,D.jA,A.is],x.O)
D.aK3=new C.ye(3,"kuhoweshaForm")
D.dRS=new C.jD("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DU,4294966519,4279378237,4291404327,D.aK3)
D.ahC=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hF9=w([D.N8,D.ahC,A.is],x.O)
D.a7L=new C.ye(4,"mahariPande")
D.dRV=new C.jD("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tk,4294966259,4279904068,4291404327,D.a7L)
D.aKx=new C.lc(16,"certIvoryGreen")
D.bkh=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hEG=w([A.Me,D.bkh,A.is],x.O)
D.aK4=new C.ye(5,"familiaMti")
D.dS0=new C.jD("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKx,4294966776,4280241466,4291404327,D.aK4)
D.a7M=new C.ye(6,"ndoaSafi")
D.dRT=new C.jD("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DU,4294966519,4279378237,4291404327,D.a7M)
D.bpc=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hEJ=w([D.N8,A.is,D.bpc],x.O)
D.a7N=new C.ye(7,"peteWide")
D.dRY=new C.jD("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tk,4294966259,4282001936,4291404327,D.a7N)
D.dS7=new C.ye(8,"muhuriCrest")
D.dRR=new C.jD("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tk,4294966259,4279378237,4291404327,D.dS7)
D.hET=w([D.ag5,D.ahC,A.is],x.O)
D.dS8=new C.ye(9,"fomuWazi")
D.dS3=new C.jD("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DU,4294966519,4279904068,4291404327,D.dS8)
D.aKy=new C.lc(17,"certIvoryRose")
D.bl3=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hEW=w([D.bl3,D.aiC,A.is],x.O)
D.a7J=new C.ye(10,"upendoOrnate")
D.dS_=new C.jD("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKy,4294965493,4286200650,4291404327,D.a7J)
D.dks=w([D.dRX,D.dS4,D.dS6,D.dS5,D.dS1,D.dRZ,D.dRU,D.dRS,D.dRV,D.dS0,D.dRT,D.dRY,D.dRR,D.dS3,D.dS_],x.h)
D.eo=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jl=new C.wB(0,"emojis")
D.E_=new C.wB(1,"pictures")
D.Jm=new C.wB(2,"icons3d")
D.a84=new C.wB(3,"animations")
D.TN=new C.wB(4,"videoMotion")
D.E0=new C.wB(5,"luxe")
D.a5K=w([D.Jl,D.E_,D.Jm,D.a84,D.TN,D.E0],B.at("O<wB>"))
D.eWi=new B.y(A.ef,"Looks")
D.eK1=new B.y(A.D6,"Light")
D.eJZ=new B.y(A.mi,"Colour")
D.eHX=new B.y(A.wC,"Effects")
D.apr=new B.a0(63112,"MaterialIcons",!1)
D.eEr=new B.y(D.apr,"Crop")
D.dl_=w([D.eWi,D.eK1,D.eJZ,D.eHX,D.eEr],x.f2)
D.dlH=w([],x.D)
D.hF6=w([],x.L)
D.eIa=new B.y("Flashcard",D.Jg)
D.eM4=new B.y("Quiz",D.Jh)
D.eO6=new B.y("Worksheet",D.Ji)
D.eL4=new B.y("Notes",D.n8)
D.eMD=new B.y("Section",D.DY)
D.dmq=w([D.eIa,D.eM4,D.eO6,D.eL4,D.eMD],B.at("O<+(n,mV)>"))
D.dTU=new C.lc(6,"beadedPearl")
D.bnY=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hFa=w([H.ZE,D.bnY,A.is],x.O)
D.aK0=new C.jD("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dTU,4294966774,4286209070,4291404327,D.kb)
D.dTV=new C.lc(7,"artDeco")
D.bsn=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bvq=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hF8=w([D.bsn,D.bvq,A.c5],x.O)
D.aK1=new C.jD("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dTV,4294440434,4280228630,4290283019,D.kb)
D.dTW=new C.lc(8,"rosetteCorners")
D.bux=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.biO=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnQ=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hEM=w([D.bux,D.biO,D.bnQ],x.O)
D.aK_=new C.jD("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dTW,4294702831,4285218602,4291394365,D.kb)
D.dTX=new C.lc(9,"modernLedger")
D.hEL=w([A.c,D.jA,D.jA],x.O)
D.aJZ=new C.jD("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dTX,4294967295,4279378237,4279378237,D.kb)
D.dmu=w([D.aK0,D.aK1,D.aK_,D.aJZ],x.h)
D.dmE=w([A.ir,A.pf],x.O)
D.ct=new C.hF(0,"none")
D.dm=new C.hF(1,"fade")
D.Jj=new C.hF(3,"slideRight")
D.aKU=new C.hF(5,"slideDown")
D.edy=new C.hF(7,"zoomOut")
D.a83=new C.hF(11,"cube")
D.edt=new C.hF(12,"blur")
D.aKR=new C.hF(13,"dissolve")
D.edu=new C.hF(14,"wipeLeft")
D.edv=new C.hF(15,"wipeRight")
D.TM=new C.hF(17,"push")
D.edw=new C.hF(18,"flash")
D.aKT=new C.hF(20,"swing")
D.edx=new C.hF(21,"curtain")
D.So=w([D.ct,D.dm,D.ve,D.Jj,D.vf,D.aKU,D.n9,D.edy,D.Jk,D.aKV,D.TL,D.a83,D.edt,D.aKR,D.edu,D.edv,D.r0,D.TM,D.edw,D.aKS,D.aKT,D.edx],x.i)
D.Sp=w([D.a7I,D.a7G,D.a7z,D.a7A,D.a7B,D.a7E,D.a7C,D.a7D,D.a7H,D.a7F,D.aK0,D.aK1,D.aK_,D.aJZ],x.h)
D.dn6=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dna=w([A.u9,A.i6,A.c5],x.O)
D.eJi=new B.y(A.uJ,"Design")
D.eXU=new B.y(D.apI,"Word sizes")
D.eTf=new B.y(A.D2,"Text")
D.bRq=new B.a0(983182,"MaterialIcons",!1)
D.eTk=new B.y(D.bRq,"Photo")
D.eE_=new B.y(A.lm,"Logo")
D.eZc=new B.y(A.HV,"News")
D.dng=w([D.eJi,D.eXU,D.eTf,D.eTk,D.eE_,D.eZc],x.f2)
D.dnh=w(["golddust","sparkle","sheen"],x.s)
D.eeV=new C.ew("upload_pdf",K.PC,"Upload PDF")
D.ee4=new C.ew("sign_paper",A.HS,"Sign Paper")
D.bQG=new B.a0(63438,"MaterialIcons",!1)
D.eeR=new C.ew("hd_photo",D.bQG,"HD Photo")
D.edX=new C.ew("sharpen",E.a2r,"Sharpen")
D.ee6=new C.ew("print",K.PC,"Download PDF")
D.eey=new C.ew("rotate",D.apr,"Rotate")
D.eef=new C.ew("text_box",A.D2,"Text Box")
D.eeh=new C.ew("picture",A.uN,"Picture")
D.eed=new C.ew("title",A.wQ,"Title")
D.ee9=new C.ew("subtitle",U.aqi,"Subtitle")
D.eeH=new C.ew("bullets",I.a2K,"Bullet List")
D.eea=new C.ew("numbered",A.Pp,"Numbered")
D.eeK=new C.ew("quote",A5.CP,"Quote")
D.eem=new C.ew("citation",A.ox,"Citation")
D.eeN=new C.ew("date_stamp",Aj.a2v,"Date Stamp")
D.eeA=new C.ew("page_number",A.zr,"Page #")
D.eeE=new C.ew("header_bar",A.zt,"Header")
D.eeg=new C.ew("footer_bar",Au.a3i,"Footer")
D.ee5=new C.ew("divider",A.t2,"Divider")
D.ee1=new C.ew("highlight",A.a2N,"Highlight")
D.eeG=new C.ew("redact",A.uW,"Redact")
D.eet=new C.ew("callout",A.CG,"Callout")
D.eeP=new C.ew("checkboxes",I.aoK,"Checklist")
D.eeq=new C.ew("table",A.a3g,"Table")
D.eek=new C.ew("memo",I.a3_,"Memo")
D.eeu=new C.ew("letter",A.HH,"Letter")
D.bQj=new B.a0(63259,"MaterialIcons",!0)
D.edW=new C.ew("agenda",D.bQj,"Agenda")
D.ee7=new C.ew("toc",AD.apV,"Contents")
D.bQC=new B.a0(63406,"MaterialIcons",!1)
D.eer=new C.ew("sig_line",D.bQC,"Sign Line")
D.edP=new C.ew("initial_line",A.j3,"Initials")
D.edS=new C.ew("approved",A.lm,"APPROVED")
D.eew=new C.ew("draft",A.pB,"DRAFT")
D.eeC=new C.ew("confidential",A.jI,"Confidential")
D.eeF=new C.ew("sticky",A.PI,"Sticky Note")
D.eeO=new C.ew("progress",A.apU,"Progress")
D.bRQ=new B.a0(983507,"MaterialIcons",!1)
D.ee2=new C.ew("stars",D.bRQ,"Star Rating")
D.edN=new C.ew("equation",A.apK,"Equation")
D.edY=new C.ew("timeline",A.a3h,"Timeline")
D.eel=new C.ew("two_col",A.a3j,"Two Columns")
D.ee_=new C.ew("compare",Az.a2z,"Compare")
D.edL=new C.ew("duplicate_el",A.fJ,"Duplicate")
D.eeT=new C.ew("delete_el",A.ei,"Delete")
D.eeJ=new C.ew("bring_fwd",H.apE,"Bring Front")
D.edQ=new C.ew("send_back",H.apD,"Send Back")
D.eev=new C.ew("align_left",D.a2I,"Align L")
D.eeB=new C.ew("align_center",D.a2H,"Align C")
D.eeS=new C.ew("align_right",D.a2J,"Align R")
D.eee=new C.ew("word_count",A4.a26,"Word Count")
D.eeb=new C.ew("link_text",A.hM,"Link")
D.eez=new C.ew("phone",A.j4,"Phone")
D.ee0=new C.ew("email",A.CL,"Email")
D.eeU=new C.ew("qr_placeholder",A.jK,"QR Placeholder")
D.edV=new C.ew("rectangle",A6.t0,"Rectangle")
D.eep=new C.ew("circle",A.pq,"Circle")
D.edR=new C.ew("arrow",A.jH,"Arrow")
D.eeI=new C.ew("line",A.t2,"Line")
D.ee3=new C.ew("triangle",A.a2x,"Triangle")
D.bQq=new B.a0(63318,"MaterialIcons",!1)
D.ee8=new C.ew("grayscale",D.bQq,"Grayscale")
D.eei=new C.ew("brighten",I.ap4,"Brighten")
D.een=new C.ew("flip_h",A.CO,"Flip H")
D.bQx=new B.a0(63348,"MaterialIcons",!1)
D.eeQ=new C.ew("flip_v",D.bQx,"Flip V")
D.eeD=new C.ew("cover_page",A.qJ,"Cover Page")
D.edO=new C.ew("invoice",A.hy,"Invoice")
D.edZ=new C.ew("resume",A.n1,"Resume")
D.eec=new C.ew("minutes",A.pt,"Minutes")
D.edT=new C.ew("lab_report",A.PE,"Lab Report")
D.edU=new C.ew("rubric",A.qM,"Rubric")
D.eeo=new C.ew("flashcard_tool",W.HP,"Flashcard")
D.eeL=new C.ew("quiz_tool",A.HM,"Quiz Block")
D.ees=new C.ew("worksheet_tool",P.Ho,"Worksheet")
D.eex=new C.ew("outline_share",A.PG,"Share Outline")
D.eeM=new C.ew("export_json",D.aoQ,"Export JSON")
D.edM=new C.ew("new_slide",D.a25,"New Slide")
D.eej=new C.ew("present",A.qO,"Present")
D.dnO=w([D.eeV,D.ee4,D.eeR,D.edX,D.ee6,D.eey,D.eef,D.eeh,D.eed,D.ee9,D.eeH,D.eea,D.eeK,D.eem,D.eeN,D.eeA,D.eeE,D.eeg,D.ee5,D.ee1,D.eeG,D.eet,D.eeP,D.eeq,D.eek,D.eeu,D.edW,D.ee7,D.eer,D.edP,D.edS,D.eew,D.eeC,D.eeF,D.eeO,D.ee2,D.edN,D.edY,D.eel,D.ee_,D.edL,D.eeT,D.eeJ,D.edQ,D.eev,D.eeB,D.eeS,D.eee,D.eeb,D.eez,D.ee0,D.eeU,D.edV,D.eep,D.edR,D.eeI,D.ee3,D.ee8,D.eei,D.een,D.eeQ,D.eeD,D.edO,D.edZ,D.eec,D.edT,D.edU,D.eeo,D.eeL,D.ees,D.eex,D.eeM,D.edM,D.eej],B.at("O<ew>"))
D.dnY=w([A.cu,A.am],x.O)
D.eDw=new B.y(4286331629,4292552567)
D.eDj=new B.y(4280640491,4278630100)
D.eDE=new B.y(4294538006,4292943176)
D.eCG=new B.y(4278556265,4280640491)
D.dhH=w([D.eDw,D.eDj,D.eDE,D.eCG],x.n)
D.cEM=w([4294626325,4280472558,4294210230],x.t)
D.edG=new C.ob("colorful","Colorful",A.mi,D.dhH,4294967295,3875536895,D.cEM,D.n9)
D.eD7=new B.y(4279522093,4279657780)
D.eDn=new B.y(4281750292,4283268111)
D.eCJ=new B.y(4278603323,4279203438)
D.eDo=new B.y(4282343954,4279599165)
D.cPV=w([D.eD7,D.eDn,D.eCJ,D.eDo],x.n)
D.cEu=w([4288931381,4294829706,4287033260],x.t)
D.edC=new C.ob("nature","Nature",A.HT,D.cPV,4294442727,3874290891,D.cEu,D.dm)
D.eD1=new B.y(4279369771,4283178389)
D.eCZ=new B.y(4279179050,4286456526)
D.eDf=new B.y(4280163147,4290648157)
D.eCy=new B.y(4278322711,4285343961)
D.d7m=w([D.eD1,D.eCZ,D.eDf,D.eCy],x.n)
D.cEI=w([4294210230,4280472558,4289170426],x.t)
D.edA=new C.ob("vibe","Vibe",A.Pt,D.d7m,4294967295,3874869502,D.cEI,D.ve)
D.eDA=new B.y(4290007817,4292552567)
D.eDu=new B.y(4286328082,4294286859)
D.eDz=new B.y(4288485197,4294538006)
D.eDt=new B.y(4285343961,4293675161)
D.caw=w([D.eDA,D.eDu,D.eDz,D.eDt],x.n)
D.cEN=w([4294829706,4294967295,4284999929],x.t)
D.edB=new C.ob("celebration","Celebration",A.k7,D.caw,4294967295,4009752557,D.cEN,D.r0)
D.eCX=new B.y(4279179050,4280171146)
D.eD0=new B.y(4279310375,4280232247)
D.eCP=new B.y(4278916151,4280172719)
D.eCY=new B.y(4279179050,4281549141)
D.d_C=w([D.eCX,D.eD0,D.eCP,D.eCY],x.n)
D.cEp=w([4281908728,4294626325,4287931320],x.t)
D.edF=new C.ob("professional","Professional",A.CE,D.d_C,4294967295,3872118241,D.cEp,D.TM)
D.eCT=new B.y(4278995566,4278413729)
D.eCL=new B.y(4278727492,4279137424)
D.eDg=new B.y(4280171146,4278751666)
D.eCU=new B.y(4278995566,4279590517)
D.cID=w([D.eCT,D.eCL,D.eDg,D.eCU],x.n)
D.cEs=w([4286436348,4284410580,4294829706],x.t)
D.edH=new C.ob("ocean","Ocean",I.a3l,D.cID,4294967295,3873501950,D.cEs,D.vf)
D.eDv=new B.y(4286328082,4294538006)
D.eDx=new B.y(4286781507,4294677052)
D.eDr=new B.y(4283178389,4294197086)
D.eDy=new B.y(4288295954,4294688548)
D.cWP=w([D.eDv,D.eDx,D.eDr,D.eDy],x.n)
D.cEO=w([4294829706,4294967295,4294747557],x.t)
D.edI=new C.ob("sunset","Sunset",A.PL,D.cWP,4294967295,4009749973,D.cEO,D.dm)
D.eDI=new B.y(4294967295,4294047225)
D.eDD=new B.y(4294507260,4294967295)
D.eDH=new B.y(4294967295,4293060848)
D.eDC=new B.y(4294507260,4294047225)
D.daK=w([D.eDI,D.eDD,D.eDH,D.eDC],x.n)
D.cEn=w([4280640491,4279179050,4287931320],x.t)
D.edE=new C.ob("minimal","Minimal",A6.t0,D.daK,4279179050,4282865001,D.cEn,D.dm)
D.eCS=new B.y(4278979081,4280886564)
D.eDb=new B.y(4280031511,4278979081)
D.eD_=new B.y(4279308561,4281148438)
D.eCR=new B.y(4278979081,4280031511)
D.dpZ=w([D.eCS,D.eDb,D.eD_,D.eCR],x.n)
D.cEB=w([4292128567,4294829706,4289241758],x.t)
D.edJ=new C.ob("elegant","Elegant",A.mk,D.dpZ,4294898631,3873957348,D.cEB,D.aKR)
D.eDd=new B.y(4280159034,4282058596)
D.eCO=new B.y(4278916151,4280163147)
D.eDl=new B.y(4281208933,4278916151)
D.eD4=new B.y(4279502891,4283178389)
D.dxw=w([D.eDd,D.eCO,D.eDl,D.eD4],x.n)
D.cEK=w([4294296657,4292128567,4291081725],x.t)
D.edD=new C.ob("royal","Royal Gold",A.jq,D.dxw,4294965222,3874084351,D.cEK,D.n9)
D.eCD=new B.y(4278464302,4280163147)
D.eCN=new B.y(4278916151,4279455306)
D.eDe=new B.y(4280163147,4283040846)
D.eCA=new B.y(4278332450,4281413249)
D.dhi=w([D.eCD,D.eCN,D.eDe,D.eCA],x.n)
D.cEo=w([4281193663,4289170426,4294210230],x.t)
D.edK=new C.ob("aurora","Aurora Glow",A.ef,D.dhi,4293983738,3869766608,D.cEo,D.dm)
D.x0=w([D.edG,D.edC,D.edA,D.edB,D.edF,D.edH,D.edI,D.edE,D.edJ,D.edD,D.edK],B.at("O<ob>"))
D.boy=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dox=w([A.ry,D.boy,A.ry],x.O)
D.doO=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.doS=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eT7=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eIT=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eNF=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eA2=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eMg=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eKo=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eOY=new B.y("Surprise me","")
D.dpq=w([D.eT7,D.eIT,D.eNF,D.eA2,D.eMg,D.eKo,D.eOY],x.L)
D.bgC=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsV=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dqe=w([A.c,D.bgC,D.bsV],x.O)
D.drp=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. Instead, once a day when the app opens, that person gets a Swahili orange pop-up, Hongera, with the amount they contributed and what it was for; not again that day.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dsw=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKq=new C.lc(0,"heritageGold")
D.bmS=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hFb=w([D.bmS,A0.ahO,A.aC],x.O)
D.dS2=new C.jD("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKq,4294570461,4284234270,4292128567,D.kb)
D.aKr=new C.lc(1,"heritageCrimson")
D.beM=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bl0=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bsH=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hEP=w([D.beM,D.bl0,D.bsH],x.O)
D.dRW=new C.jD("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKr,4294635750,4285213214,4292912216,D.kb)
D.dsB=w([D.a7I,D.a7G,D.dS2,D.dRW,D.a7B,D.a7E],x.h)
D.dY_=new C.rX(1,"circuit")
D.dYs=new C.mt("neural","Neural Link","Robotic",D.dY_,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dXZ=new C.rX(0,"grid")
D.dYp=new C.mt("signal","Signal Grid","Robotic",D.dXZ,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dY4=new C.rX(2,"hexes")
D.dYa=new C.mt("core","Core Protocol","Robotic",D.dY4,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKO=new C.rX(11,"diagonal")
D.dYl=new C.mt("steel","Steel Tech","Robotic",D.aKO,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKP=new C.rX(3,"rings")
D.dY9=new C.mt("vault","Vault Gold","Robotic",D.aKP,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dY2=new C.rX(13,"leaves")
D.dYc=new C.mt("forest","Forest Morning","Nature",D.dY2,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKQ=new C.rX(5,"waves")
D.dYj=new C.mt("ocean","Ocean Calm","Nature",D.aKQ,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dY5=new C.rX(6,"sunset")
D.dYo=new C.mt("sunset","Sunset Glow","Nature",D.dY5,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dY6=new C.rX(7,"mountains")
D.dYb=new C.mt("mountain","Mountain Air","Nature",D.dY6,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dY7=new C.rX(8,"stars")
D.dYi=new C.mt("night","Night Sky","Nature",D.dY7,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a81=new C.rX(4,"orbs")
D.dYg=new C.mt("aurora","Aurora","Nature",D.a81,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dYq=new C.mt("sand","Sand Dune","Nature",D.aKQ,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dY8=new C.rX(9,"rays")
D.dYf=new C.mt("golden","Golden Hour","Warm",D.dY8,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dYd=new C.mt("royal","Royal Purple","Warm",D.aKO,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dYe=new C.mt("rose","Rose Petal","Warm",D.a81,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dY1=new C.rX(12,"blocks")
D.dYh=new C.mt("electric","Electric Blue","Bold",D.dY1,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dYr=new C.mt("mint","Fresh Mint","Bold",D.a81,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dY3=new C.rX(14,"minimal")
D.dYn=new C.mt("white","Clean White","Clean",D.dY3,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dY0=new C.rX(10,"frame")
D.dYk=new C.mt("midnight","Midnight Gold","Clean",D.dY0,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dYm=new C.mt("community","Community Green","Clean",D.aKP,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6e=w([D.dYs,D.dYp,D.dYa,D.dYl,D.dY9,D.dYc,D.dYj,D.dYo,D.dYb,D.dYi,D.dYg,D.dYq,D.dYf,D.dYd,D.dYe,D.dYh,D.dYr,D.dYn,D.dYk,D.dYm],B.at("O<mt>"))
D.dsZ=w([D.BT,A.u6,A.i6,A.c5],x.O)
D.dtg=w([D.aiQ,D.jA],x.O)
D.dtq=w(["pdf","docx","txt","md"],x.s)
D.f2q=new B.b5(-3,150,34)
D.f2r=new B.b5(-3,214,62)
D.f2s=new B.b5(-3,288,62)
D.dui=w([D.f2q,D.f2r,D.f2s],B.at("O<+(F,F,F)>"))
D.duP=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dvy=w(["Write","Design","Print & fold"],x.s)
D.kc=new C.vj(2,"triangle")
D.DZ=new C.vj(3,"arrow")
D.fL=new C.vj(4,"line")
D.kd=new C.vj(5,"parallelogram")
D.dvB=w([D.bk,D.eZ,D.kc,D.DZ,D.fL,D.kd,D.lt],x.m)
D.eBx=new B.y(240,96)
D.eEj=new B.y(560,46)
D.dvH=w([D.eBx,D.eEj],x.G)
D.hFm=new C.yh(0,"classic")
D.dU_=new C.o7("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKq,4294570461,4282000405,4284234270)
D.dUb=new C.o7("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKr,4294635750,4281999378,4285213214)
D.dU0=new C.o7("elegant_navy","Umoja Mzuri",y.s,D.a7T,4294967035,4279378237,4290283019)
D.dUd=new C.o7("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKz,4294966515,4281016592,4289102906)
D.dUf=new C.o7("kente_sunset","Kente ya Jua",y.H,D.aKs,4294964964,4282000405,4279983648)
D.dTY=new C.o7("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKt,4294439140,4279903102,4279903102)
D.dU2=new C.o7("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKu,4294965484,4285218591,4287322667)
D.dU7=new C.o7("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKv,4294244340,4279196764,4279196764)
D.dU9=new C.o7("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKw,4294505710,4279970378,4291058750)
D.hFn=new C.yh(1,"ringsNdoa")
D.dU1=new C.o7("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tk,4294966259,4279378237,4291404327)
D.hFp=new C.yh(2,"coupleCards")
D.dUc=new C.o7("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tk,4294966259,4279378237,4291404327)
D.hFq=new C.yh(3,"kuhoweshaForm")
D.dU8=new C.o7("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DU,4294966519,4279378237,4291404327)
D.hFr=new C.yh(4,"mahariPande")
D.dTZ=new C.o7("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tk,4294966259,4279904068,4291404327)
D.hFs=new C.yh(5,"familiaMti")
D.dUe=new C.o7("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKx,4294966776,4280241466,4291404327)
D.hFt=new C.yh(6,"ndoaSafi")
D.dU5=new C.o7("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DU,4294966519,4279378237,4291404327)
D.hFu=new C.yh(7,"peteWide")
D.dU4=new C.o7("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tk,4294966259,4282001936,4291404327)
D.hFv=new C.yh(8,"muhuriCrest")
D.dU3=new C.o7("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tk,4294966259,4279378237,4291404327)
D.hFw=new C.yh(9,"fomuWazi")
D.dU6=new C.o7("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DU,4294966519,4279904068,4291404327)
D.hFo=new C.yh(10,"upendoOrnate")
D.dUa=new C.o7("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKy,4294965493,4286200650,4291404327)
D.SF=w([D.dU_,D.dUb,D.dU0,D.dUd,D.dUf,D.dTY,D.dU2,D.dU7,D.dU9,D.dU1,D.dUc,D.dU8,D.dTZ,D.dUe,D.dU5,D.dU4,D.dU3,D.dU6,D.dUa],B.at("O<o7>"))
D.DX=new C.asN(0,"landscape169")
D.oP=new C.asN(1,"portrait916")
D.dws=w([D.DX,D.oP],B.at("O<asN>"))
D.aD9=w([A.i6,A.bM,A.cF,A.ir,A.c],x.O)
D.v7=w([A.c5,A.i8],x.O)
D.eAx=new B.y(1000,"M")
D.eFN=new B.y(900,"CM")
D.eEd=new B.y(500,"D")
D.eCt=new B.y(400,"CD")
D.eAy=new B.y(100,"C")
D.eFO=new B.y(90,"XC")
D.eEe=new B.y(50,"L")
D.eCu=new B.y(40,"XL")
D.eAE=new B.y(10,"X")
D.eG_=new B.y(9,"IX")
D.eEv=new B.y(5,"V")
D.eDZ=new B.y(4,"IV")
D.eBa=new B.y(1,"I")
D.dxb=w([D.eAx,D.eFN,D.eEd,D.eCt,D.eAy,D.eFO,D.eEe,D.eCu,D.eAE,D.eG_,D.eEv,D.eDZ,D.eBa],x.ek)
D.f3G=new B.cu(["open",A.j3,"Open & write","Keep writing this book"])
D.f46=new B.cu(["print",A.uR,"Print as a book","Fold and staple it"])
D.dxm=w([D.f3G,D.f46],B.at("O<+(n,a0,n,n)>"))
D.dy4=w([D.a83,D.n9,D.Jk,D.TM,D.dm,D.TL],x.i)
D.eTS=new B.y(-1,"Small")
D.eAi=new B.y(0,"Normal")
D.eB7=new B.y(1,"Big")
D.eBO=new B.y(2,"Huge")
D.dyF=w([D.eTS,D.eAi,D.eB7,D.eBO],x.ek)
D.dz5=w([49,65,89,38,83,89],x.t)
D.dzb=w([A.u6,A.i6,A.c5],x.O)
D.dzF=w([D.dm,D.n9,D.ve,D.a83,D.Jk,D.TM],x.i)
D.aIs=new B.d_([0,D.Nu,8,D.akn,12,D.ako],B.at("d_<H,a4U>"))
D.ejL={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d_N=w([A.bM,H.ajr],x.O)
D.dm9=w([A.b0,A.bl],x.O)
D.dgm=w([A.bT,A.aH,A.bi],x.O)
D.dxn=w([A.cu,A.bw],x.O)
D.d8l=w([A.ba,A.fd],x.O)
D.djh=w([A.b8,A.fn],x.O)
D.bkE=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.diy=w([D.bkE,A.pf],x.O)
D.dcy=w([A.hn,A.yf],x.O)
D.d88=w([A.bx,A.cg],x.O)
D.dCl=new B.bu(D.ejL,[D.d_N,O.atg,D.dm9,D.dgm,D.dxn,D.d8l,D.djh,D.diy,D.dcy,D.d88],B.at("bu<n,ai<u>>"))
D.eiT={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6T=new B.bu(D.eiT,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bu<n,n>"))
D.a7_=new B.bu(A.i1,[],B.at("bu<H,+icon3d,picture(n?,n?)>"))
D.dGR=new F.NR(30,null)
D.dM5=new F.mS("Chapter 1","","","")
D.dwf=w([D.dM5],x.B)
D.dM9=new F.rN("My Book","","",D.dwf,E.aJR)
D.dM7=new F.v8("starry",null,null,null,null,"","","")
D.dMa=new F.rN("Dream Big","","",E.a5S,D.dM7)
D.dM8=new F.v8("story",null,null,null,null,"","","")
D.dMb=new F.rN("Little Lion","","",E.a5S,D.dM8)
D.dM6=new F.v8("vintage",null,null,null,null,"","","")
D.dMc=new F.rN("Our Story","","",E.a5S,D.dM6)
D.dPd=new C.Fm("","NGMY","","")
D.dWD=new C.Af("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.edz=new C.b3n(null,null,null,null)
D.efh=new C.asS(null)
D.efs=new C.atl(0,"smaller")
D.eft=new C.atl(1,"bigger")
D.aL4=new C.atl(2,"fit")
D.enl=new B.o(3,6)
D.enF=new B.o(4,8)
D.erR=new B.D(E.alf,U.afn,null)
D.erV=new B.D(A.a00,A.m2,null)
D.bTa=new B.ae(A.k8,16,A.bW,null,null,null)
D.erZ=new B.D(A.iN,D.bTa,null)
D.bea=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.esb=new B.D(A.H_,D.bea,null)
D.c2M=new B.ae(A.cy,16,A.aD,null,null,null)
D.esf=new B.D(A.eA,D.c2M,null)
D.fML=new B.B("Play",null,A.nY,null,null,null,null,null,null,null,null,null)
D.dmr=w([V.arJ,A.vv,D.fML],x.p)
D.f8L=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dmr,null)
D.esi=new B.D(A.nE,D.f8L,null)
D.bej=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.ffb=new B.a5(20,20,D.bej,null)
D.esp=new B.D(A.iN,D.ffb,null)
D.fWh=new B.B("Seconds per slide",null,A.h_,null,null,null,null,null,null,null,null,null)
D.esz=new B.D(A.bh,D.fWh,null)
D.etU=new C.a9M(2,"print")
D.etX=new B.j2(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.evz=new B.hf("/Annot")
D.evB=new B.hf("/URI")
D.fGL=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ey5=new B.jF("share",48,D.fGL,null,B.at("jF<n>"))
D.c2G=new B.ae(A.ef,14,A.eL,null,null,null)
D.eye=new B.cK(null,-2,-2,null,null,null,D.c2G,null)
D.d23=w([H.aik,A.L],x.O)
D.c9f=new B.a8(A.a7,A.aa,A.x,D.d23,null,null)
D.b6N=new B.p(null,null,null,null,null,D.c9f,A.n)
D.bxW=new B.kT(D.b6N,A.bj,null,null)
D.eyr=new B.cK(0,0,null,0,8,null,D.bxW,null)
D.drs=w([A.hF,A.mQ,A.c6],x.O)
D.ez5=new B.bY(A.A,0.5,A.x,null,0,D.drs,null,null)
D.eBG=new B.y(0.22,A.bl)
D.eGj=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eIx=new B.y(0.5,A.hE)
D.eSd=new B.y(0.78,A.aX)
D.f3v=new B.cu([A.bp,0.22,0.7,2.6])
D.f3C=new B.cu([A.ba,0.36,1.2,1.3])
D.f3I=new B.cu([A.dL,0.28,0.2,0.4])
D.f3O=new B.cu([A.cz,0.05,0.3,0.35])
D.f3U=new B.cu([A.bx,0.28,0.9,0])
D.f41=new B.cu([A.aF,-0.25,-0.15,0.45])
D.f4T=new B.cu([A.bT,0.42,1,4.1])
D.f8t=new B.aaL(9)
D.bUg=new B.ae(A.HV,28,A.bi,null,null,null)
D.fWQ=new B.B("NGMY News",null,A.dk,null,null,null,null,null,null,null,null,null)
D.bIg=new B.bz(1,A.bc,D.fWQ,null)
D.duS=w([D.bUg,A.au,D.bIg],x.p)
D.f8F=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.duS,null)
D.bUr=new B.ae(A.ox,16,A.c,null,null,null)
D.fYq=new B.B("Book",null,A.oY,null,null,null,null,null,null,null,null,null)
D.dza=w([D.bUr,A.e5,D.fYq],x.p)
D.f8O=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dza,null)
D.c0d=new B.ae(A.jI,10,A.c,null,null,null)
D.fKK=new B.B("Pro",null,A.nV,null,null,null,null,null,null,null,null,null)
D.dmw=w([D.c0d,A.r7,D.fKK],x.p)
D.f8S=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dmw,null)
D.fWf=new B.B("Make a newspaper",null,A.VK,null,null,null,null,null,null,null,null,null)
D.cau=w([E.a3I,A.ae,D.fWf],x.p)
D.f8T=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.cau,null)
D.bZF=new B.ae(A.k7,18,A.bM,null,null,null)
D.fMZ=new B.B("Ending celebration",null,A.h7,null,null,null,null,null,null,null,null,null)
D.dtS=w([D.bZF,A.bm,D.fMZ],x.p)
D.f8W=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.dtS,null)
D.c_Z=new B.ae(A.j3,18,A.ks,null,null,null)
D.fqf=new B.G(!0,A.ks,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYJ=new B.B("Write",null,D.fqf,null,null,null,null,null,null,null,null,null)
D.day=w([D.c_Z,A.ae,D.fYJ],x.p)
D.f93=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.day,null)
D.fKI=new B.B("Download picture",null,A.nW,null,null,null,null,null,null,null,null,null)
D.bL2=new B.qL(A.e4,A.A,A.f,D.fKI,null)
D.bLe=new B.dl(1,A.cm,D.bL2,null)
D.dmW=w([K.arA,A.ae,D.bLe],x.p)
D.f94=new B.c8(A.aL,A.bb,A.j,A.l,null,A.p,null,0,D.dmW,null)
D.bWe=new B.ae(A.HV,22,A.bi,null,null,null)
D.fUN=new B.B("NGMY NEWS",null,M.aaP,null,null,null,null,null,null,null,null,null)
D.d1s=w([D.bWe,A.ae,D.fUN],x.p)
D.f9e=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.d1s,null)
D.f9q=new B.pF(!1,!1,null,U.XR,null,A.c4,null,null,null)
D.a9W=new B.iM([D.ct,D.dm,D.ve,D.Jj,D.vf,D.aKU],B.at("iM<hF>"))
D.elz={title:0,quote:1,closing:2,bio:3}
D.faV=new B.de(D.elz,4,x.M)
D.eje={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.faY=new B.de(D.eje,5,x.M)
D.ekP={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9Y=new B.de(D.ekP,8,x.M)
D.ejZ={Design:0,Transitions:1,Insert:2}
D.fb6=new B.de(D.ejZ,3,x.M)
D.hFF=new B.iM([D.a84],B.at("iM<wB>"))
D.ek7={float3d:0,drift:1,pulse:2}
D.fba=new B.de(D.ek7,3,x.M)
D.aSK=new B.iM([D.Jg,D.Jh,D.Ji],B.at("iM<mV>"))
D.ejc={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSN=new B.de(D.ejc,14,x.M)
D.hFG=new B.de(A.i1,0,B.at("de<wB>"))
D.ek4={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UM=new B.de(D.ek4,4,x.M)
D.ej4={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSQ=new B.de(D.ej4,30,x.M)
D.ekd={circle:0,triangle:1,hexagon:2,diamond:3}
D.fbC=new B.de(D.ekd,4,x.M)
D.fe4=new B.av(390,844)
D.feV=new B.a5(20,20,A.M7,null)
D.aTF=new B.a5(null,2.5,null,null)
D.ff4=new B.a5(18,18,A.M7,null)
D.c02=new B.ae(A.jq,19,A.c,null,null,null)
D.ffg=new B.a5(38,38,D.c02,null)
D.bZd=new B.ae(A.zw,22,A.c,null,null,null)
D.ffj=new B.a5(40,40,D.bZd,null)
D.ffS=new B.hG(2,10,10,1.15,null)
D.aTN=new B.hG(2,16,14,0.62,null)
D.bG7=new B.R(32,30,32,40)
D.bfS=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bUd=new B.ae(A.qJ,56,D.bfS,null,null,null)
D.ajq=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fsp=new B.G(!0,D.ajq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRC=new B.B("Your books will live here.",null,D.fsp,null,A.K,null,null,null,null,null,null,null)
D.ddy=w([D.bUd,A.X,D.fRC],x.p)
D.bwR=new B.fj(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.ddy,null)
D.esx=new B.D(D.bG7,D.bwR,null)
D.fgd=new B.m3(D.esx,null)
D.fRz=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new B.b1(D.fRz,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPD=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fgw=new B.b1(D.fPD,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUR=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fgF=new B.b1(D.fUR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVq=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fgU=new B.b1(D.fVq,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fOe=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fh6=new B.b1(D.fOe,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h1K=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new B.b1(D.h1K,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZK=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new B.b1(D.fZK,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVz=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fij=new B.b1(D.fVz,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fIT=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiA=new B.b1(D.fIT,null,null,null,null,null,null,null,A.iW,null,null,null,null,A.on,!1,null,null,null,A.t,null)
D.fKS=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new B.b1(D.fKS,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fRe=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new B.b1(D.fRe,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQV=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fiV=new B.b1(D.fQV,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXH=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fiW=new B.b1(D.fXH,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fEV=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new B.b1(D.fEV,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fM2=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fjr=new B.b1(D.fM2,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h0o=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fjt=new B.b1(D.h0o,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_V=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fjx=new B.b1(D.h_V,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDR=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjz=new B.b1(D.fDR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fWL=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new B.b1(D.fWL,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_u=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new B.b1(D.h_u,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_l=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fk_=new B.b1(D.h_l,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDI=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new B.b1(D.fDI,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHQ=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new B.b1(D.fHQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZy=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkJ=new B.b1(D.fZy,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHC=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.b1(D.fHC,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.boc=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d02=w([A.ir,A.pf,D.boc,D.afS,A.ir],x.O)
D.flm=new B.fZ(A.A,0,6.283185307179586,A.x,D.d02,null,null)
D.d9E=w([A.bM,A.c5,A.i6,D.BT,A.bM],x.O)
D.aUl=new B.fZ(A.A,0,6.283185307179586,A.x,D.d9E,null,null)
D.doM=w([A.bT,A.bp,A.ba,A.b4,A.bi,A.bT],x.O)
D.flr=new B.fZ(A.A,0,6.283185307179586,A.x,D.doM,null,null)
D.d2k=w([A.qp,A.pg,A.yc,A.ir,A.qp],x.O)
D.fls=new B.fZ(A.A,0,6.283185307179586,A.x,D.d2k,null,null)
D.doG=w([A.aP,A.bK,A.aO,A.am,A.aP],x.O)
D.flt=new B.fZ(A.A,0,6.283185307179586,A.x,D.doG,null,null)
D.dwZ=w([A.bx,A.ba,A.bp,A.bT,A.bx],x.O)
D.flv=new B.fZ(A.A,0,6.283185307179586,A.x,D.dwZ,null,null)
D.bjy=new B.u(1,0,1,0,A.q)
D.box=new B.u(1,0,1,1,A.q)
D.bln=new B.u(1,0,0,1,A.q)
D.bhg=new B.u(1,1,0,1,A.q)
D.dsR=w([A.Mp,A.Z7,D.bjy,D.box,D.bln,D.bhg,A.Mp],x.O)
D.flw=new B.fZ(A.A,0,6.283185307179586,A.x,D.dsR,null,null)
D.flL=new C.axz(2,"immersiveSticky")
D.flM=new C.axz(3,"edgeToEdge")
D.flN=new C.axz(4,"manual")
D.foi=new B.G(!0,A.o9,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUW=new B.G(!0,A.eU,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foT=new B.G(!0,E.ny,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new B.G(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs8=new B.G(!0,A.eL,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new B.G(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftP=new B.G(!0,A.jZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new B.t7(!0,A.JG,null,null,null,null,A.dD,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new B.G(!0,A.jC,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new B.G(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu_=new B.j2(1,1,0.7568627450980392,0.027450980392156862)
D.fvF=new B.t7(!0,D.eu_,null,null,null,null,A.dD,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ai9=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVJ=new B.G(!0,D.ai9,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvN=new B.G(!0,D.ajq,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVL=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new B.t7(!0,A.pM,null,null,null,null,A.dD,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxd=new B.G(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new B.G(!0,D.ai9,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KM=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxM=new B.G(!0,A.c5,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxX=new B.G(!0,A.bK,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy0=new B.G(!0,A.bM,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyh=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5p,null,null,null)
D.fyk=new B.G(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fym=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyN=new B.G(!0,A.dj,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new B.G(!0,A.aT,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzz=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new B.G(!0,A.ac,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWo=new B.G(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWq=new B.G(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.buj=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fBH=new B.G(!0,D.buj,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWw=new B.G(!0,E.ny,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCb=new B.G(!0,A.bK,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuK=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new B.B("NEW",null,D.fuK,null,null,null,null,null,null,null,null,null)
D.fDL=new B.B("Hati ya Kuhowesha",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fEc=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEB=new B.B("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fFm=new B.B("Big quote mark",null,A.jw,null,null,null,null,null,null,null,null,null)
D.fFo=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fFA=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fG2=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fG4=new B.B("How many slides?",null,A.h_,null,null,null,null,null,null,null,null,null)
D.fGD=new B.B("Transfer",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fqi=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH0=new B.B("Luxury FX",null,D.fqi,null,null,null,null,null,null,null,null,null)
D.fHl=new B.B("Font",null,A.tF,null,null,null,null,null,null,null,null,null)
D.fHw=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new B.G(!0,A.bK,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new B.B("Example  GA847",null,D.fBd,null,null,null,null,null,null,null,null,null)
D.fIc=new B.B("Design shapes",null,A.jw,null,null,null,null,null,null,null,null,null)
D.fIo=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fIt=new B.B("Non-stop (loop)",null,A.h_,null,null,null,null,null,null,null,null,null)
D.fIH=new B.B("Hati ya Kuhoweya",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fJ_=new B.B("Photo studio",null,A.fC,null,null,null,null,null,null,null,null,null)
D.fJt=new B.B("Add your picture",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJu=new B.B("Enter document code",null,D.fu3,null,A.K,null,null,null,null,null,null,null)
D.fJv=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.frr=new B.G(!0,E.ny,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJW=new B.B("Delete this book?",null,D.frr,null,A.K,null,null,null,null,null,null,null)
D.fwg=new B.G(!0,E.ny,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKU=new B.B("Your library",null,D.fwg,null,null,null,null,null,null,null,null,null)
D.fKZ=new B.B("Delete",null,A.aVC,null,null,null,null,null,null,null,null,null)
D.fL1=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.EI,null,null,null,null,null,null,null,null,null)
D.fLc=new B.B("Element flies in",null,A.aVP,null,null,null,null,null,null,null,null,null)
D.VW=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fM_=new B.B("Cancel",null,E.aW_,null,null,null,null,null,null,null,null,null)
D.fM1=new B.B("The lines and circles that come with the design",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fzZ=new B.G(!0,A.ht,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new B.B("DOCUMENT CODE",null,D.fzZ,null,null,null,null,null,null,null,null,null)
D.fNk=new B.B("Quotes",null,G.abq,null,null,null,null,null,null,null,null,null)
D.ftq=new B.G(!0,N.lF,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNu=new B.B("Add a picture",null,D.ftq,null,null,null,null,null,null,null,null,null)
D.fNC=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vy,null,A.K,null,null,null,null,null,null,null)
D.fNG=new B.B("Look & feel",null,A.h_,null,null,null,null,null,null,null,null,null)
D.fNL=new B.B("Rings",null,A.h7,null,null,null,null,null,null,null,null,null)
D.fNR=new B.B("W",null,A.tF,null,null,null,null,null,null,null,null,null)
D.fO0=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fOk=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VH,null,A.K,null,null,null,null,null,null,null)
D.fOm=new B.B("Write your book",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fP7=new B.B("Add page",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fPp=new B.B("Malipo ya Awamu ya Mahari",null,A.fP,null,null,null,null,null,null,null,null,null)
D.ftT=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPE=new B.B("Create with AI",null,D.ftT,null,A.K,null,null,null,null,null,null,null)
D.fQ9=new B.B("Apply look",null,A.h7,null,null,null,null,null,null,null,null,null)
D.fuA=new B.G(!0,A.er,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQX=new B.B("Type your presentation below",null,D.fuA,null,A.K,null,null,null,null,null,null,null)
D.fR_=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWA,null,A.K,null,null,null,null,null,null,null)
D.fR1=new B.B("Keep it",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fpb=new B.G(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR8=new B.B("Done",null,D.fpb,null,null,null,null,null,null,null,null,null)
D.fRt=new B.B("Delete",null,A.nX,null,null,null,null,null,null,null,null,null)
D.fRE=new B.B("Hati ya Kiapo cha Uongozi",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fsI=new B.G(!0,A.aT,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSz=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fsI,null,A.K,null,null,null,null,null,null,null)
D.fSY=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fT4=new B.B("Layout",null,A.VM,null,null,null,null,null,null,null,null,null)
D.fTL=new B.B("Print",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fTU=new B.B("X",null,A.tF,null,null,null,null,null,null,null,null,null)
D.fUv=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A3.xl,null,null,null,null,null,null,null,null,null)
D.fV4=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fVi=new B.B("Hati ya Kuhowa",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fVk=new B.B("Choose a class template",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fVm=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fVt=new B.B("Download the newspaper picture",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fVG=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fVN=new B.B("Done",null,A.aWn,null,null,null,null,null,null,null,null,null)
D.fVY=new B.B("Ending celebration",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fVZ=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fWd=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A3.tE,null,null,null,null,null,null,null,null,null)
D.fXd=new B.B("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fXe=new B.B("What would you like to do?",null,D.aVJ,null,null,null,null,null,null,null,null,null)
D.fXj=new B.B("Delete",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fXQ=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fXU=new B.B("Hati (Documents)",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fY6=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fB2=new B.G(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYa=new B.B("Delete presentation?",null,D.fB2,null,A.K,null,null,null,null,null,null,null)
D.fYu=new B.B("After the last slide it starts again from the first",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fYG=new B.B("\ud83c\udf33",null,A.EH,null,A.K,null,null,null,null,null,null,null)
D.fYY=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fZ4=new B.B("Transfer document",null,A.nf,null,null,null,null,null,null,null,null,null)
D.fZf=new B.B("Add to the slides",null,A.h_,null,null,null,null,null,null,null,null,null)
D.fZC=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fqX=new B.G(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZQ=new B.B("Make a book",null,D.fqX,null,null,null,null,null,null,null,null,null)
D.fZU=new B.B("Books",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fti=new B.G(!0,A.am,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZW=new B.B("Keep this page open until it finishes.",null,D.fti,null,null,null,null,null,null,null,null,null)
D.fZY=new B.B("Making your video",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h_2=new B.B("LANGUAGE",null,X.tG,null,null,null,null,null,null,null,null,null)
D.h_9=new B.B("Use this ending",null,A.cC,null,null,null,null,null,null,null,null,null)
D.h_h=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new B.B("Upload a different logo",null,A.ch,null,null,null,null,null,null,null,null,null)
D.h_A=new B.B("Delete from the database?",null,A.jP,null,null,null,null,null,null,null,null,null)
D.h_B=new B.B("H",null,A.tF,null,null,null,null,null,null,null,null,null)
D.h00=new B.B("NGMY Quotes",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h0u=new B.B("Cover",null,D.aWw,null,null,null,null,null,null,null,null,null)
D.h0y=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h0z=new B.B("Each page becomes its own slide you can present",null,A.hl,null,null,null,null,null,null,null,null,null)
D.h0W=new B.B("Y",null,A.tF,null,null,null,null,null,null,null,null,null)
D.h17=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h1e=new B.B("Edit text",null,A.KH,null,null,null,null,null,null,null,null,null)
D.h3z=B.dR("a9y")
D.EW=new C.ayV(0,"none")
D.b_w=new C.ayV(1,"zipCrypto")
D.b_x=new C.ayV(2,"aes")
D.hsz=new F.Qq("","",null)
D.htH=new C.beC(null)
D.huN=new C.a_W(null)
D.hxM=new C.aev(null)
D.hxO=new C.aG9(null)
D.hAz=new C.a19(null)
D.hBk=new C.a1G(null)
D.hBX=new C.bwD(null)})();(function staticFields(){$.htW=null
$.htX=null
$.htY=null
$.htZ=null
$.hba=B.x_("_lastQuoRemDigits")
$.hbb=B.x_("_lastQuoRemUsed")
$.azi=B.x_("_lastRemUsed")
$.hbc=B.x_("_lastRem_nsh")
$.qz=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8m=B.T(x.N,x.I)
$.h8B=!1
$.hyX=B.T(B.at("lc"),x.N)
$.hz8=B.T(B.at("lc"),x.E)
$.hx3=!1
$.bCh="q"
$.Rv=0
$.Dp=B.T(x.N,B.at("ai<Ag>"))
$.hxq=!1
$.hcV=!1
$.hE5=null
$.i8J=B.T(x.N,B.at("aB<n?>"))
$.Lj=""
$.jc=0
$.hqM=function(){var w=x.N
return B.T(w,w)}()
$.hqL=B.T(x.N,x.R)
$.hdf=!1
$.ah9=B.T(x.N,x.E)
$.he6=0
$.bmT=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izl","DM",()=>C.bc5(0))
w($,"izj","a3X",()=>C.bc5(1))
w($,"izk","hHZ",()=>C.bc5(2))
w($,"izi","hif",()=>$.a3X().vG(0))
w($,"izg","hHX",()=>C.bc5(1e4))
w($,"izh","hHY",()=>B.F2(8))
w($,"iv1","hFS",()=>B.F2(0))
w($,"iv9","hFW",()=>B.F2(0))
w($,"iv8","hFV",()=>B.c2y(0))
w($,"iDi","hK7",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6T.gdO(D.a6T),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iDK","bGP",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nc(new C.fTH(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nc(new C.fTI(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fTJ(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nc(new C.fTU(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nc(new C.fTZ(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fU_(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nc(new C.fU0(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nc(new C.fU1(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nc(new C.fU2(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fU3(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nc(new C.fU4(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nc(new C.fTK(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nc(new C.fTL(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nc(new C.fTM(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fTN(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nc(new C.fTO(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nc(new C.fTP(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nc(new C.fTQ(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nc(new C.fTR(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nc(new C.fTS(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nc(new C.fTT(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nc(new C.fTV(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nc(new C.fTW(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nc(new C.fTX(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nc(new C.fTY(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.at("O<Fv>"))})
w($,"iDl","hK9",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["0vgVnehMZEPF/jCNgjbS+ryH7HM="]=a.current})($__dart_deferred_initializers__);